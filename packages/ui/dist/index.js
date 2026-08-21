import './ui.css';
import { defineComponent as O, useSlots as Mt, openBlock as t, createElementBlock as a, normalizeClass as _, unref as h, renderSlot as q, createElementVNode as l, toDisplayString as f, createCommentVNode as y, computed as $, normalizeStyle as ne, Fragment as P, renderList as V, ref as K, watch as ce, useId as _a, withModifiers as me, createTextVNode as U, createVNode as I, createStaticVNode as Bt, createBlock as T, createSlots as Ze, withCtx as j, nextTick as ze, onBeforeUnmount as be, Teleport as Ue, Transition as Ve, onMounted as pe, withDirectives as ue, vModelText as ye, resolveDynamicComponent as xe, resolveComponent as At, vModelSelect as Ie, vModelDynamic as Oa, mergeProps as le, normalizeProps as we, guardReactiveProps as je, defineAsyncComponent as Ht, inject as lt, vShow as Te, isRef as ja, useTemplateRef as La, onErrorCaptured as Va, provide as xt, markRaw as aa, withKeys as Ta, reactive as Je, useModel as Xe, mergeModels as Oe, shallowRef as Da, watchEffect as Ea } from "vue";
import { useForwardPropsEmits as ve, DialogRoot as na, DialogOverlay as zt, DialogPortal as Pt, DialogContent as _t, DialogClose as He, CheckboxRoot as Ia, CheckboxIndicator as Fa, SwitchRoot as Na, SwitchThumb as Ra, DialogDescription as la, DialogTitle as oa, DialogTrigger as sa, createContext as Ua, Primitive as qe, TooltipRoot as Ha, TooltipPortal as qa, TooltipContent as Ka, TooltipArrow as Ga, TooltipProvider as ra, TooltipTrigger as Wa, Separator as Za, DropdownMenuRoot as Ja, DropdownMenuCheckboxItem as Ya, DropdownMenuItemIndicator as ia, DropdownMenuPortal as Xa, DropdownMenuContent as Qa, DropdownMenuGroup as en, useForwardProps as Ce, DropdownMenuItem as tn, DropdownMenuLabel as an, DropdownMenuRadioGroup as nn, DropdownMenuRadioItem as ln, DropdownMenuSeparator as on, DropdownMenuSub as sn, DropdownMenuSubContent as rn, DropdownMenuSubTrigger as dn, DropdownMenuTrigger as un, AvatarRoot as cn, AvatarFallback as fn, AvatarImage as mn, NavigationMenuViewport as pn, NavigationMenuRoot as vn, NavigationMenuContent as gn, NavigationMenuIndicator as hn, NavigationMenuItem as bn, NavigationMenuLink as xn, NavigationMenuList as yn, NavigationMenuTrigger as kn, Label as $n } from "reka-ui";
import { DropdownMenuPortal as f3 } from "reka-ui";
import { X as Ot, Check as da, AlertCircle as wn, EyeOff as Cn, Eye as Sn, PanelLeftOpen as Mn, PanelLeftClose as Bn, Circle as An, ChevronRight as ua, MoreHorizontal as zn, ChevronDown as Pn, Loader2Icon as _n } from "@lucide/vue";
import { reactiveOmit as de, useVModel as ca, useMediaQuery as On, useEventListener as jn, defaultDocument as Ln } from "@vueuse/core";
import { clsx as Vn } from "clsx";
import { twMerge as Tn } from "tailwind-merge";
import { cva as jt } from "class-variance-authority";
import { usePage as fa, Link as Dn } from "@inertiajs/vue3";
const mt = {
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
function ie(e) {
  return e ? mt[e] ?? mt.dot : mt.dot;
}
const En = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, In = ["d"], Fn = { class: "flex max-w-sm flex-col gap-1" }, Nn = {
  key: 0,
  class: "text-sm"
}, Rn = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, yt = /* @__PURE__ */ O({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = Mt();
    return (n, r) => (t(), a("div", {
      "data-slot": "empty-state",
      class: _(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      h(o).illustration ? (t(), a("div", En, [
        q(n.$slots, "illustration")
      ])) : (t(), a("div", {
        key: 1,
        class: _(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        q(n.$slots, "icon", {}, () => [
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.75",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: _(e.compact ? "size-5" : "size-6")
          }, [
            l("path", {
              d: h(ie)(e.icon)
            }, null, 8, In)
          ], 2))
        ])
      ], 2)),
      l("div", Fn, [
        l("p", {
          class: _(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), a("p", Nn, f(e.description), 1)) : y("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", Rn, [
        q(n.$slots, "actions")
      ])) : y("", !0)
    ], 2));
  }
}), Un = ["aria-label"], $e = /* @__PURE__ */ O({
  __name: "PkSkeleton",
  props: {
    variant: { default: "text" },
    count: { default: 1 },
    height: {},
    label: { default: "Loading" }
  },
  setup(e) {
    const o = e, n = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = $(() => n[o.variant] ?? n.text), s = $(() => Math.max(1, Math.min(o.count, 50)));
    function i(d) {
      if (!(o.variant !== "text" || s.value === 1))
        return d === s.value - 1 ? "60%" : void 0;
    }
    return (d, u) => (t(), a("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: ne(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(P, null, V(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: _(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Un));
  }
}), Hn = { class: "w-full border-collapse text-sm" }, qn = { class: "bg-background sticky top-0 z-10" }, Kn = { class: "bg-muted/50" }, Gn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Wn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Zn = ["id", "checked", "indeterminate"], Jn = ["onClick"], Yn = {
  key: 0,
  class: "text-xs"
}, Xn = {
  key: 1,
  class: "text-xs opacity-40"
}, Qn = { key: 1 }, el = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, tl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, al = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, nl = {
  key: 1,
  class: "px-3 py-2.5"
}, ll = {
  key: 2,
  class: "px-2 py-2.5"
}, ol = {
  key: 0,
  class: "bg-muted/40"
}, sl = ["colspan"], rl = ["aria-expanded", "dusk", "onClick"], il = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, dl = {
  key: 1,
  dusk: "group-header"
}, ul = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], cl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, fl = {
  key: 1,
  class: "px-3 py-2"
}, ml = ["id", "value", "checked", "disabled", "aria-label", "onClick"], pl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, vl = ["aria-label", "onClick"], gl = { class: "text-xs" }, hl = {
  key: 1,
  class: "text-muted-foreground"
}, bl = { key: 2 }, xl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, yl = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, kl = { key: 0 }, $l = { class: "text-muted-foreground block text-[10px] font-medium" }, wl = { class: "font-semibold tabular-nums" }, Cl = { key: 1 }, Sl = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e;
    function r(G) {
      if (!G || !n.groupBy)
        return "";
      if (G.__group !== void 0 && G.__group !== null)
        return String(G.__group);
      const D = G[n.groupBy.key];
      return D == null || D === "" ? "" : String(D);
    }
    function s(G) {
      return n.groupBy ? G === 0 ? !0 : r(n.rows[G]) !== r(n.rows[G - 1]) : !1;
    }
    function i(G) {
      if (G.__groupTitle)
        return String(G.__groupTitle);
      const D = n.groupBy ? G[n.groupBy.key] : null, F = D == null || D === "" ? "None" : String(D);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? F : `${n.groupBy.label}: ${F}`;
    }
    const d = K(/* @__PURE__ */ new Set()), u = K(/* @__PURE__ */ new Set());
    function m(G) {
      return n.groupBy?.collapsible ? d.value.has(G) : !1;
    }
    function b(G) {
      if (!n.groupBy?.collapsible)
        return;
      const D = new Set(u.value);
      D.add(G), u.value = D;
      const F = new Set(d.value);
      F.has(G) ? F.delete(G) : F.add(G), d.value = F;
    }
    function p(G) {
      return n.groupBy?.collapsible ? !m(r(n.rows[G])) : !0;
    }
    ce(
      () => n.rows,
      (G) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const D = new Set(d.value);
        for (const F of G) {
          const oe = r(F);
          oe !== "" && !u.value.has(oe) && D.add(oe);
        }
        d.value = D;
      },
      { immediate: !0 }
    );
    const x = K(null), A = K(null);
    function C(G, D) {
      x.value = G, D.dataTransfer?.setData("text/plain", String(G)), D.dataTransfer && (D.dataTransfer.effectAllowed = "move");
    }
    function k() {
      x.value = null, A.value = null;
    }
    function w(G) {
      return x.value === null || A.value !== G ? "" : x.value > G ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function g(G, D) {
      x.value !== null && (D.preventDefault(), A.value = G);
    }
    function v(G) {
      const D = x.value;
      if (x.value = null, A.value = null, D === null || D === G)
        return;
      const F = n.rows.map((re) => re[n.rowKey]), [oe] = F.splice(D, 1);
      F.splice(G, 0, oe), c("reorder", F);
    }
    const c = o;
    function S(G, D) {
      !n.rowClickable || n.reordering || D.button !== 0 || D.metaKey || D.ctrlKey || D.shiftKey || D.altKey || D.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", G);
    }
    const M = K(null), z = _a(), R = $(() => n.columns.filter((G) => !n.hidden?.has(G.key)));
    function E(G) {
      const D = G[n.rowKey];
      return D == null || D === "" ? null : D;
    }
    function ee(G) {
      const D = E(G);
      return D !== null && !!n.selected?.has(D);
    }
    const H = K(null);
    function W(G) {
      return n.rows.findIndex((D) => {
        const F = E(D);
        return F !== null && F === G;
      });
    }
    function J(G, D) {
      const F = E(G);
      if (F === null)
        return;
      const oe = D.shiftKey, re = !!n.selected?.has(F);
      if (oe && H.value !== null && H.value !== F) {
        const at = W(H.value), ct = W(F);
        if (at !== -1 && ct !== -1) {
          const Aa = Math.min(at, ct), za = Math.max(at, ct), Pa = !re;
          for (let nt = Aa; nt <= za; nt++) {
            if (!p(nt))
              continue;
            const ft = E(n.rows[nt]);
            if (ft === null)
              continue;
            !!n.selected?.has(ft) !== Pa && c("toggle-row", ft);
          }
          H.value = F;
          return;
        }
      }
      c("toggle-row", F), H.value = F;
    }
    const ae = $(
      () => n.rows.map((G) => E(G)).filter((G) => G !== null)
    ), te = $(
      () => ae.value.length > 0 && ae.value.every((G) => n.selected?.has(G))
    ), Y = $(
      () => !te.value && ae.value.some((G) => n.selected?.has(G))
    );
    function Z(G) {
      return G.sortKey ?? G.key;
    }
    function B(G) {
      return n.sort === Z(G);
    }
    async function N(G, D, F) {
      try {
        await navigator.clipboard.writeText(String(F)), M.value = `${G}-${D.key}`, setTimeout(() => M.value = null, 1200);
      } catch {
      }
    }
    const L = $(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function X(G) {
      return n.summaries?.[G] ?? null;
    }
    function fe(G) {
      const D = n.summaries?.[G], F = n.summaryValues?.[G];
      if (!D)
        return "";
      if (F == null)
        return "None";
      const oe = D.divideBy ? F / D.divideBy : F, re = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: D.decimals,
        maximumFractionDigits: D.decimals
      }).format(oe);
      return `${D.prefix ?? ""}${re}${D.suffix ?? ""}`;
    }
    return (G, D) => (t(), a("div", {
      class: _(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      l("table", Hn, [
        l("thead", qn, [
          l("tr", Kn, [
            e.reordering ? (t(), a("th", Gn)) : y("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Wn, [
              l("input", {
                id: `${h(z)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: te.value,
                indeterminate: Y.value,
                "aria-label": "Select all rows on this page",
                onClick: D[0] || (D[0] = me(() => {
                }, ["stop"])),
                onChange: D[1] || (D[1] = me((F) => c("toggle-page", !te.value), ["stop"]))
              }, null, 40, Zn)
            ])) : y("", !0),
            (t(!0), a(P, null, V(R.value, (F) => (t(), a("th", {
              key: F.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              F.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (oe) => c("sort", Z(F))
              }, [
                U(f(F.label) + " ", 1),
                B(F) ? (t(), a("span", Yn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Xn, "↕"))
              ], 8, Jn)) : (t(), a("span", Qn, f(F.label), 1))
            ]))), 128)),
            G.$slots.actions ? (t(), a("th", el, [...D[2] || (D[2] = [
              l("span", { class: "sr-only" }, "Actions", -1)
            ])])) : y("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", tl, [
          (t(), a(P, null, V(6, (F) => l("tr", {
            key: `skel-${F}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", al, [
              I($e, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : y("", !0),
            e.selectable && !e.reordering ? (t(), a("td", nl, [
              I($e, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : y("", !0),
            (t(!0), a(P, null, V(R.value, (oe) => (t(), a("td", {
              key: oe.key,
              class: "px-3 py-2.5"
            }, [
              I($e, { variant: "text" })
            ]))), 128)),
            G.$slots.actions ? (t(), a("td", ll, [
              I($e, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : y("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: _(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(P, null, V(e.rows, (F, oe) => (t(), a(P, {
            key: E(F) ?? `row-${oe}`
          }, [
            e.groupBy && s(oe) ? (t(), a("tr", ol, [
              l("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !m(r(F)),
                  dusk: `group-header-${r(F) || "none"}`,
                  onClick: (re) => b(r(F))
                }, [
                  l("span", il, f(m(r(F)) ? "▸" : "▾"), 1),
                  U(" " + f(i(F)), 1)
                ], 8, rl)) : (t(), a("span", dl, f(i(F)), 1))
              ], 8, sl)
            ])) : y("", !0),
            p(oe) ? (t(), a("tr", {
              key: 1,
              class: _(["group pk-row border-b transition-colors hover:bg-muted/50", [
                ee(F) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && oe % 2 === 1 ? "bg-muted/20" : "",
                x.value === oe ? "opacity-40" : "",
                w(oe),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (re) => C(oe, re),
              onDragover: (re) => g(oe, re),
              onDrop: me((re) => v(oe), ["prevent"]),
              onDragend: k,
              onContextmenu: (re) => c("row-contextmenu", F, re),
              onClick: (re) => S(F, re)
            }, [
              e.reordering ? (t(), a("td", cl, [...D[3] || (D[3] = [
                Bt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-4ec66d95><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4ec66d95><circle cx="9" cy="6" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="6" r="1.5" data-v-4ec66d95></circle><circle cx="9" cy="12" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="12" r="1.5" data-v-4ec66d95></circle><circle cx="9" cy="18" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="18" r="1.5" data-v-4ec66d95></circle></svg></span>', 1)
              ])])) : y("", !0),
              e.selectable && !e.reordering ? (t(), a("td", fl, [
                l("input", {
                  id: `${h(z)}-row-${E(F) ?? oe}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: E(F) ?? void 0,
                  checked: ee(F),
                  disabled: E(F) === null,
                  "aria-label": E(F) === null ? "This row has no id and cannot be selected" : `Select row ${E(F)}`,
                  onClick: me((re) => J(F, re), ["stop"])
                }, null, 8, ml)
              ])) : y("", !0),
              (t(!0), a(P, null, V(R.value, (re) => (t(), a("td", {
                key: re.key,
                class: _(["px-3 py-2 whitespace-nowrap", re.cellClass])
              }, [
                q(G.$slots, `cell:${re.key}`, {
                  row: F,
                  value: F[re.key],
                  column: re
                }, () => [
                  re.copyable ? (t(), a("span", pl, [
                    U(f(F[re.key]) + " ", 1),
                    l("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${re.label.toLowerCase()}`,
                      onClick: (at) => N(String(F[e.rowKey]), re, F[re.key])
                    }, [
                      l("span", gl, f(M.value === `${F[e.rowKey]}-${re.key}` ? "✓" : "⧉"), 1)
                    ], 8, vl)
                  ])) : F[re.key] == null || F[re.key] === "" ? (t(), a("span", hl, "None")) : (t(), a("span", bl, f(F[re.key]), 1))
                ], !0)
              ], 2))), 128)),
              G.$slots.actions ? (t(), a("td", xl, [
                q(G.$slots, "actions", { row: F }, void 0, !0)
              ])) : y("", !0)
            ], 42, ul)) : y("", !0)
          ], 64))), 128))
        ], 2)),
        L.value ? (t(), a("tfoot", yl, [
          l("tr", null, [
            e.selectable ? (t(), a("td", kl)) : y("", !0),
            (t(!0), a(P, null, V(e.columns, (F) => (t(), a(P, {
              key: `s-${F.key}`
            }, [
              e.hidden?.has(F.key) ? y("", !0) : (t(), a("td", {
                key: 0,
                class: _(["px-3 py-2 align-top text-sm whitespace-nowrap", F.cellClass])
              }, [
                X(F.key) ? (t(), a(P, { key: 0 }, [
                  l("span", $l, f(X(F.key).label), 1),
                  l("span", wl, f(fe(F.key)), 1)
                ], 64)) : y("", !0)
              ], 2))
            ], 64))), 128)),
            G.$slots.actions ? (t(), a("td", Cl)) : y("", !0)
          ])
        ])) : y("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(yt, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, Ze({ _: 2 }, [
        G.$slots["clear-filters"] ? {
          name: "actions",
          fn: j(() => [
            q(G.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(yt, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, Ze({ _: 2 }, [
        G.$slots["empty-actions"] ? {
          name: "actions",
          fn: j(() => [
            q(G.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : y("", !0)
    ], 2));
  }
}), Lt = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of o)
    n[r] = s;
  return n;
}, Ml = /* @__PURE__ */ Lt(Sl, [["__scopeId", "data-v-4ec66d95"]]), Bl = ["aria-label"], Al = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, zl = { class: "text-base font-semibold" }, Pl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, _l = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, Ol = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, Ye = /* @__PURE__ */ O({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(null);
    let i = null;
    const d = K(!1);
    function u(p) {
      d.value = p.target === p.currentTarget;
    }
    function m(p) {
      d.value && p.target === p.currentTarget && !n.busy && r("close"), d.value = !1;
    }
    function b(p) {
      if (!n.open)
        return;
      if (p.key === "Escape" && !n.busy) {
        p.stopPropagation(), r("close");
        return;
      }
      if (p.key !== "Tab" || !s.value)
        return;
      const x = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (x.length === 0)
        return;
      const A = x[0], C = x[x.length - 1];
      p.shiftKey && document.activeElement === A ? (p.preventDefault(), C.focus()) : !p.shiftKey && document.activeElement === C && (p.preventDefault(), A.focus());
    }
    return ce(
      () => n.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", b), ze(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", b), i?.focus(), i = null);
      }
    ), be(() => document.removeEventListener("keydown", b)), (p, x) => (t(), T(Ue, { to: "body" }, [
      I(Ve, {
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
            onPointerup: m
          }, [
            l("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground flex w-full max-w-lg max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl"
            }, [
              l("div", Al, [
                l("h2", zl, f(e.title), 1),
                e.description ? (t(), a("p", Pl, f(e.description), 1)) : y("", !0)
              ]),
              l("div", _l, [
                q(p.$slots, "default")
              ]),
              l("div", Ol, [
                q(p.$slots, "footer")
              ])
            ], 8, Bl)
          ], 32)) : y("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), jl = 160, Ne = /* @__PURE__ */ O({
  __name: "PkDropdown",
  props: {
    align: { default: "end" },
    width: { default: "max-w-sm" },
    offset: { default: 4 },
    placement: { default: "bottom" },
    hoverable: { type: Boolean, default: !1 },
    dismissOnPanelClick: { type: Boolean, default: !0 }
  },
  setup(e, { expose: o }) {
    const n = e, r = K(!1), s = K(null), i = K(null), d = K({ top: 0, left: 0, minWidth: 0 }), u = K(null);
    let m = null;
    function b(S) {
      !n.dismissOnPanelClick || S.target?.closest("input, select, textarea, label, [data-keep-open]") || k();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await ze(), w());
    }
    function x() {
      m = setTimeout(k, 180);
    }
    async function A() {
      u.value = null, r.value = !r.value, r.value && (await ze(), w());
    }
    async function C(S, M) {
      u.value = { x: S, y: M }, r.value = !0, await ze(), w();
    }
    function k() {
      r.value = !1, u.value = null;
    }
    function w() {
      const S = s.value, M = i.value;
      if (!S || !M)
        return;
      const z = M.getBoundingClientRect(), R = 8, E = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : S.getBoundingClientRect();
      let ee, H;
      if (n.placement === "bottom")
        ee = E.bottom + n.offset, ee + z.height > window.innerHeight - R && E.top - z.height - n.offset > R && (ee = E.top - z.height - n.offset), H = n.align === "end" && !u.value ? E.right - z.width : E.left;
      else {
        ee = E.top;
        const W = n.placement === "right", J = E.right + n.offset + z.width < window.innerWidth - R, ae = E.left - n.offset - z.width > R;
        H = (W ? J || !ae : !ae && J) ? E.right + n.offset : E.left - n.offset - z.width;
      }
      H = Math.min(Math.max(R, H), window.innerWidth - z.width - R), ee = Math.min(Math.max(R, ee), window.innerHeight - z.height - R), d.value = { top: ee, left: H, minWidth: Math.max(E.width, jl) };
    }
    function g(S) {
      if (!r.value)
        return;
      const M = S.target;
      s.value?.contains(M) || i.value?.contains(M) || (M instanceof Element ? M : M.parentElement)?.closest("[data-pk-overlay]") || k();
    }
    function v(S) {
      S.key === "Escape" && r.value && (S.stopPropagation(), k());
    }
    function c() {
      if (r.value) {
        if (u.value) {
          k();
          return;
        }
        w();
      }
    }
    return pe(() => {
      document.addEventListener("pointerdown", g), document.addEventListener("keydown", v), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), be(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", g), document.removeEventListener("keydown", v), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), o({ close: k, openAt: C }), (S, M) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: M[2] || (M[2] = (z) => e.hoverable && p()),
      onPointerleave: M[3] || (M[3] = (z) => e.hoverable && x())
    }, [
      l("div", { onClick: A }, [
        q(S.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Ue, { to: "body" }, [
        I(Ve, {
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
              class: _([
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
              onPointerenter: M[0] || (M[0] = (z) => e.hoverable && p()),
              onPointerleave: M[1] || (M[1] = (z) => e.hoverable && x()),
              onClick: b
            }, [
              q(S.$slots, "panel", { close: k })
            ], 38)) : y("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Ll = ["disabled"], Vl = { class: "py-0.5" }, Tl = ["disabled", "onClick"], Dl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, El = ["d"], Il = ["disabled"], Fl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nl = ["d"], Rl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Ul = ["disabled", "onClick"], Hl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ql = ["d"], Kl = { class: "text-muted-foreground text-sm" }, Gl = { class: "text-foreground font-medium tabular-nums" }, Wl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Zl = ["disabled"], Jl = { class: "text-muted-foreground text-sm" }, Yl = { class: "text-foreground font-medium tabular-nums" }, Xl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Ql = ["disabled"], gw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(null), i = K(!1), d = $(() => n.allMatching ? n.total : n.count), u = $(() => d.value !== void 0), m = $(() => u.value && d.value === 0), b = $(() => n.actions.filter((v) => !v.destructive)), p = $(() => n.actions.filter((v) => v.destructive)), x = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function A(v) {
      return x[v.color ?? "gray"] ?? x.gray;
    }
    function C(v) {
      if (v.confirmation) {
        s.value = v;
        return;
      }
      r("run", v.key);
    }
    function k() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function w() {
      i.value = !1, r("export");
    }
    const g = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), a(P, null, [
      I(Ne, null, {
        trigger: j(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...c[5] || (c[5] = [
            U(" Bulk actions ", -1),
            l("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "m6 9 6 6 6-6" })
            ], -1)
          ])], 8, Ll)
        ]),
        panel: j(() => [
          l("div", Vl, [
            (t(!0), a(P, null, V(b.value, (S) => (t(), a("button", {
              key: S.key,
              type: "button",
              role: "menuitem",
              class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", A(S)]),
              disabled: e.busy,
              onClick: (M) => C(S)
            }, [
              (t(), a("svg", Dl, [
                l("path", {
                  d: h(ie)(S.icon)
                }, null, 8, El)
              ])),
              U(" " + f(S.label), 1)
            ], 10, Tl))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (S) => i.value = !0)
            }, [
              (t(), a("svg", Fl, [
                l("path", {
                  d: h(ie)("download")
                }, null, 8, Nl)
              ])),
              c[6] || (c[6] = U(" Export CSV ", -1))
            ], 8, Il)) : y("", !0),
            p.value.length ? (t(), a("div", Rl, [
              (t(!0), a(P, null, V(p.value, (S) => (t(), a("button", {
                key: S.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (M) => C(S)
              }, [
                (t(), a("svg", Hl, [
                  l("path", {
                    d: h(ie)(S.icon ?? "trash")
                  }, null, 8, ql)
                ])),
                U(" " + f(S.label), 1)
              ], 8, Ul))), 128))
            ])) : y("", !0)
          ])
        ]),
        _: 1
      }),
      I(Ye, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: c[2] || (c[2] = (S) => s.value = null)
      }, {
        footer: j(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[1] || (c[1] = (S) => s.value = null)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: _([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || m.value,
            onClick: k
          }, f(s.value?.label), 11, Zl)
        ]),
        default: j(() => [
          l("p", Kl, [
            c[7] || (c[7] = U(" This will affect ", -1)),
            l("span", Gl, [
              u.value ? (t(), a(P, { key: 1 }, [
                U(f(g(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[8] || (c[8] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Wl, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : y("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      I(Ye, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: c[4] || (c[4] = (S) => i.value = !1)
      }, {
        footer: j(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[3] || (c[3] = (S) => i.value = !1)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || m.value,
            onClick: w
          }, " Export CSV ", 8, Ql)
        ]),
        default: j(() => [
          l("p", Jl, [
            c[9] || (c[9] = U(" This will export ", -1)),
            l("span", Yl, [
              u.value ? (t(), a(P, { key: 1 }, [
                U(f(g(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[10] || (c[10] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Xl, " Nothing matches the current filters - there is nothing to export. ")) : y("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), eo = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, to = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, ao = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, no = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, lo = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", eo, [
      o.$slots.tabs ? (t(), a("div", to, [
        q(o.$slots, "tabs")
      ])) : y("", !0),
      o.$slots.title ? (t(), a("div", ao, [
        q(o.$slots, "title")
      ])) : y("", !0),
      o.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: _(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        q(o.$slots, "toolbar")
      ], 2)) : y("", !0),
      q(o.$slots, "default"),
      o.$slots.pagination ? (t(), a("div", no, [
        q(o.$slots, "pagination")
      ])) : y("", !0)
    ]));
  }
}), Be = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", qt = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", hw = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", oo = ["aria-expanded"], so = ["aria-label", "onClick"], ro = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, io = { class: "ml-auto flex shrink-0 items-center gap-1" }, uo = {
  key: 0,
  class: "border-b p-1"
}, co = ["placeholder"], fo = { class: "max-h-60 overflow-y-auto p-1" }, mo = ["aria-selected", "onMouseenter", "onClick"], po = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Vt = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(null), i = K(null), d = K(null), u = K(!1), m = K(""), b = K(0), p = K({ top: 0, left: 0, width: 0 }), x = $(
      () => n.modelValue.map(
        (H) => n.options.find((W) => W.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), A = $(() => n.searchable ?? n.options.length > 6), C = $(() => {
      const H = new Set(n.modelValue), W = m.value.trim().toLowerCase();
      return n.options.filter((J) => !H.has(J.value)).filter((J) => W ? J.label.toLowerCase().includes(W) : !0);
    }), k = $(() => n.max !== null && n.modelValue.length >= n.max);
    function w() {
      const H = s.value, W = i.value;
      if (!H || !W)
        return;
      const J = H.getBoundingClientRect(), ae = W.getBoundingClientRect(), te = 8;
      let Y = J.bottom + 4;
      Y + ae.height > window.innerHeight - te && J.top - ae.height - 4 > te && (Y = J.top - ae.height - 4), p.value = {
        top: Y,
        left: Math.min(Math.max(te, J.left), window.innerWidth - J.width - te),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: J.width
      };
    }
    async function g() {
      n.disabled || u.value || (u.value = !0, m.value = "", b.value = 0, await ze(), w(), d.value?.focus());
    }
    function v() {
      u.value = !1, m.value = "";
    }
    function c() {
      u.value ? v() : g();
    }
    function S(H) {
      k.value || (r("update:modelValue", [...n.modelValue, H.value]), m.value = "", b.value = 0, ze(() => {
        w(), d.value?.focus();
      }));
    }
    function M(H) {
      r(
        "update:modelValue",
        n.modelValue.filter((W) => W !== H)
      ), ze(w);
    }
    function z() {
      r("update:modelValue", []), ze(w);
    }
    function R(H) {
      if (!n.disabled) {
        if (H.key === "Escape" && u.value) {
          H.stopPropagation(), v();
          return;
        }
        if (H.key === "Backspace" && m.value === "" && n.modelValue.length > 0) {
          M(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), g();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), b.value = Math.min(b.value + 1, C.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), b.value = Math.max(b.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const W = C.value[b.value];
            W && S(W);
          }
        }
      }
    }
    function E(H) {
      if (!u.value)
        return;
      const W = H.target;
      s.value?.contains(W) || i.value?.contains(W) || v();
    }
    function ee() {
      u.value && w();
    }
    return ce(C, (H) => {
      b.value > H.length - 1 && (b.value = Math.max(0, H.length - 1));
    }), pe(() => {
      document.addEventListener("pointerdown", E), window.addEventListener("scroll", ee, !0), window.addEventListener("resize", ee);
    }), be(() => {
      document.removeEventListener("pointerdown", E), window.removeEventListener("scroll", ee, !0), window.removeEventListener("resize", ee);
    }), (H, W) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: R
    }, [
      l("div", {
        class: _(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: c
      }, [
        (t(!0), a(P, null, V(x.value, (J) => (t(), a("span", {
          key: J.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          U(f(J.label) + " ", 1),
          l("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${J.label}`,
            onClick: me((ae) => M(J.value), ["stop"])
          }, [...W[1] || (W[1] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, so)
        ]))), 128)),
        x.value.length === 0 ? (t(), a("span", ro, f(e.placeholder), 1)) : y("", !0),
        l("span", io, [
          x.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: me(z, ["stop"])
          }, " Clear ")) : y("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: _(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...W[2] || (W[2] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, oo),
      (t(), T(Ue, { to: "body" }, [
        I(Ve, {
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
              style: ne({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              A.value ? (t(), a("div", uo, [
                ue(l("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": W[0] || (W[0] = (J) => m.value = J),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: R
                }, null, 40, co), [
                  [ye, m.value]
                ])
              ])) : y("", !0),
              l("div", fo, [
                (t(!0), a(P, null, V(C.value, (J, ae) => (t(), a("button", {
                  key: J.value,
                  type: "button",
                  class: _(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ae === b.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ae === b.value,
                  onMouseenter: (te) => b.value = ae,
                  onClick: (te) => S(J)
                }, f(J.label), 43, mo))), 128)),
                C.value.length === 0 ? (t(), a("p", po, [
                  k.value ? (t(), a(P, { key: 0 }, [
                    U("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), a(P, { key: 1 }, [
                    U("Nothing matches “" + f(m.value) + "”.", 1)
                  ], 64)) : (t(), a(P, { key: 2 }, [
                    U("Everything is selected.")
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
}), vo = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", go = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, ho = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Ge(e = {}) {
  const o = e.variant ?? "default", n = e.size ?? "default";
  return [vo, go[o], ho[n], e.class].filter(Boolean).join(" ");
}
const se = /* @__PURE__ */ O({
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
    const o = e, n = $(
      () => Ge({ variant: o.variant, size: o.size, class: o.class })
    ), r = $(() => o.as === "button" ? o.type : void 0);
    return (s, i) => (t(), T(xe(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: _(n.value)
    }, {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), bo = { class: "flex items-center gap-2" }, xo = ["onUpdate:modelValue", "onChange"], yo = ["value"], ko = ["onUpdate:modelValue"], $o = ["value"], wo = ["onUpdate:modelValue"], Co = ["onUpdate:modelValue", "multiple"], So = ["value"], Mo = ["onUpdate:modelValue", "type"], Bo = ["aria-label", "onClick"], Ao = { class: "flex items-center gap-2" }, zo = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = () => ({ logic: "and", rules: [] }), i = K(n.modelValue ? structuredClone(n.modelValue) : s());
    ce(
      () => n.modelValue,
      (c) => {
        i.value = c ? structuredClone(c) : s();
      }
    );
    const d = (c) => "rules" in c, u = $(() => Object.keys(n.fields));
    function m(c) {
      const S = c ? n.fields[c]?.kind : void 0;
      return S ? n.operators[S] ?? [] : [];
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
    function p() {
      r("update:modelValue", i.value);
    }
    function x() {
      const c = u.value[0];
      i.value.rules.push({
        field: c,
        operator: m(c)[0],
        value: void 0
      }), p();
    }
    function A() {
      i.value.rules.push(s()), p();
    }
    function C(c) {
      i.value.rules.splice(c, 1), p();
    }
    function k(c) {
      c.operator = m(c.field)[0], c.value = void 0, p();
    }
    const w = $(() => n.depth + 1 < n.maxDepth);
    function g() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, S) => {
      const M = At("PkQueryBuilder", !0);
      return t(), a("div", {
        class: _(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        l("div", bo, [
          ue(l("select", {
            "onUpdate:modelValue": S[0] || (S[0] = (z) => i.value.logic = z),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...S[1] || (S[1] = [
            l("option", { value: "and" }, "Match all", -1),
            l("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ie, i.value.logic]
          ]),
          S[2] || (S[2] = l("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), a(P, null, V(i.value.rules, (z, R) => (t(), a("div", {
          key: R,
          class: "flex items-start gap-2"
        }, [
          d(z) ? (t(), T(M, {
            key: 0,
            modelValue: i.value.rules[R],
            "onUpdate:modelValue": [(E) => i.value.rules[R] = E, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(P, { key: 1 }, [
            ue(l("select", {
              "onUpdate:modelValue": (E) => z.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => k(z)
            }, [
              (t(!0), a(P, null, V(u.value, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, yo))), 128))
            ], 40, xo), [
              [Ie, z.field]
            ]),
            ue(l("select", {
              "onUpdate:modelValue": (E) => z.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(P, null, V(m(z.field), (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(b[E] ?? E), 9, $o))), 128))
            ], 40, ko), [
              [Ie, z.operator]
            ]),
            z.field && e.fields[z.field]?.kind === "boolean" ? ue((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (E) => z.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...S[3] || (S[3] = [
              l("option", { value: !0 }, "Yes", -1),
              l("option", { value: !1 }, "No", -1)
            ])], 40, wo)), [
              [Ie, z.value]
            ]) : z.field && e.fields[z.field]?.options?.length ? ue((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (E) => z.value = E,
              multiple: e.fields[z.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(P, null, V(e.fields[z.field].options, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(E), 9, So))), 128))
            ], 40, Co)), [
              [Ie, z.value]
            ]) : ue((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (E) => z.value = E,
              type: z.field && e.fields[z.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Mo)), [
              [Oa, z.value]
            ])
          ], 64)),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(z) ? "group" : "rule"}`,
            onClick: (E) => C(R)
          }, " × ", 8, Bo)
        ]))), 128)),
        l("div", Ao, [
          I(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: x
          }, {
            default: j(() => [...S[4] || (S[4] = [
              U("Add rule", -1)
            ])]),
            _: 1
          }),
          w.value ? (t(), T(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: A
          }, {
            default: j(() => [...S[5] || (S[5] = [
              U(" Add group ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          e.root ? (t(), a(P, { key: 1 }, [
            S[8] || (S[8] = l("span", { class: "flex-1" }, null, -1)),
            I(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: g
            }, {
              default: j(() => [...S[6] || (S[6] = [
                U(" Clear ", -1)
              ])]),
              _: 1
            }),
            I(se, {
              type: "button",
              size: "sm",
              onClick: v
            }, {
              default: j(() => [...S[7] || (S[7] = [
                U(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : y("", !0)
        ])
      ], 2);
    };
  }
}), Tt = /* @__PURE__ */ O({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(h(na), le({ "data-slot": "sheet" }, h(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return Tn(Vn(e));
}
function bw(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Po = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h(zt), le({
      "data-slot": "sheet-overlay",
      class: h(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }, h(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dt = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class", "side"), i = ve(s, r);
    return (d, u) => (t(), T(h(Pt), null, {
      default: j(() => [
        I(Po),
        I(h(_t), le({
          "data-slot": "sheet-content",
          class: h(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...d.$attrs, ...h(i) }), {
          default: j(() => [
            q(d.$slots, "default"),
            I(h(He), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                I(h(Ot), { class: "size-4" }),
                u[0] || (u[0] = l("span", { class: "sr-only" }, "Close", -1))
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
}), _o = { class: "flex flex-col gap-2" }, Oo = { class: "flex items-center gap-2 md:hidden" }, jo = { class: "relative min-w-0 flex-1" }, Lo = ["placeholder", "title", "aria-label"], Vo = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, To = { class: "flex max-h-[85vh] flex-col" }, Do = { class: "flex-1 overflow-y-auto px-4 py-3" }, Eo = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Io = { class: "text-xs font-medium" }, Fo = ["value", "onChange"], No = ["value"], Ro = { class: "mb-4" }, Uo = { class: "flex flex-col gap-1" }, Ho = ["disabled", "onClick"], qo = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Ko = {
  key: 1,
  class: "mb-4"
}, Go = { class: "flex flex-col gap-1" }, Wo = ["onClick"], Zo = { class: "border-t p-4" }, Jo = ["disabled"], Yo = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Xo = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Qo = ["placeholder", "title", "aria-label"], es = ["aria-label"], ts = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, as = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, ns = { class: "text-xs font-medium" }, ls = ["value", "onChange"], os = ["value"], ss = { class: "grid grid-cols-2 gap-2" }, rs = ["value", "onChange"], is = ["value", "onChange"], ds = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, us = ["value", "onChange"], cs = ["value", "onChange"], fs = {
  key: 4,
  class: "flex items-center gap-2"
}, ms = ["aria-checked", "onClick"], ps = { class: "text-xs" }, vs = ["onClick"], gs = ["value", "onChange"], hs = ["value"], bs = ["disabled", "onClick"], xs = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, ys = ["disabled", "onClick"], ks = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, $s = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, ws = ["aria-pressed", "aria-label", "title"], Cs = ["aria-label", "title"], Ss = { class: "flex flex-col gap-0.5 p-1" }, Ms = ["onClick"], Bs = ["onClick"], As = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, zs = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Ps = ["dusk"], _s = ["aria-label", "onClick"], Os = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!1), i = K(n.search);
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
    const m = $(
      () => n.filterSchema.filter(
        (Z) => n.filters[Z.key] !== null && n.filters[Z.key] !== void 0
      ).length
    ), b = $(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), p = $(() => n.search !== "" || m.value > 0), x = $(() => n.indicators.length ? n.indicators : n.filterSchema.filter((Z) => n.filters[Z.key] !== null && n.filters[Z.key] !== void 0).map((Z) => ({
      key: Z.key,
      label: `${Z.label}: ${String(n.filters[Z.key])}`,
      removable: !0
    })));
    function A(Z) {
      r("group", Z);
    }
    function C(Z) {
      r("clear-filter", Z);
    }
    function k(Z) {
      return Z.type === "multiselect";
    }
    function w(Z) {
      const B = u.value[Z.key];
      return Array.isArray(B) ? B : B == null ? [] : [B];
    }
    function g(Z) {
      return w(Z).filter(
        (B) => typeof B == "string" || typeof B == "number"
      );
    }
    function v(Z) {
      return H(Z).flatMap(
        (B) => typeof B.value == "string" || typeof B.value == "number" ? [{ value: B.value, label: B.label }] : []
      );
    }
    function c(Z, B) {
      u.value = { ...u.value, [Z.key]: B === "" ? null : B };
    }
    function S(Z, B) {
      const N = u.value[Z.key];
      if (typeof N != "string" || !N.includes(".."))
        return "";
      const [L, X] = N.split("..");
      return B === "from" ? L ?? "" : X ?? "";
    }
    function M(Z, B, N) {
      const L = B === "from" ? N : S(Z, "from"), X = B === "to" ? N : S(Z, "to");
      u.value = {
        ...u.value,
        [Z.key]: L && X ? `${L}..${X}` : null
      };
    }
    function z(Z, B, N) {
      const L = B === "from" ? N : S(Z, "from"), X = B === "to" ? N : S(Z, "to");
      u.value = {
        ...u.value,
        [Z.key]: L || X ? `${L}..${X}` : null
      };
    }
    function R(Z) {
      r("apply-filters", { ...u.value }), Z();
    }
    function E(Z, B) {
      u.value[Z] = B, r("apply-filters", { ...u.value });
    }
    function ee() {
      u.value = Object.fromEntries(n.filterSchema.map((Z) => [Z.key, null]));
    }
    function H(Z) {
      return Z.type === "boolean" ? [
        { value: !0, label: Z.trueLabel ?? "Yes" },
        { value: !1, label: Z.falseLabel ?? "No" }
      ] : Z.type === "daterange" ? Object.entries(Z.presets ?? {}).map(([B, N]) => ({
        value: B,
        label: N
      })) : (Z.options ?? []).map((B) => ({ value: B, label: B }));
    }
    const W = K(new Set(n.hidden));
    ce(
      () => n.hidden,
      (Z) => {
        W.value = new Set(Z);
      },
      { deep: !0 }
    );
    function J(Z) {
      const B = new Set(W.value);
      B.has(Z) ? B.delete(Z) : B.add(Z), W.value = B, r("apply-columns", [...B]);
    }
    function ae() {
      W.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function te() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function Y() {
      i.value = "", r("clear");
    }
    return (Z, B) => (t(), a("div", _o, [
      l("div", Oo, [
        l("div", jo, [
          B[9] || (B[9] = l("svg", {
            class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round"
          }, [
            l("circle", {
              cx: "11",
              cy: "11",
              r: "7"
            }),
            l("path", { d: "m20 20-3.5-3.5" })
          ], -1)),
          ue(l("input", {
            "onUpdate:modelValue": B[0] || (B[0] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: _(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", h(Be)])
          }, null, 10, Lo), [
            [ye, i.value]
          ])
        ]),
        l("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: B[1] || (B[1] = (N) => s.value = !0)
        }, [
          B[10] || (B[10] = l("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            l("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          B[11] || (B[11] = U(" Tools ", -1)),
          m.value ? (t(), a("span", Vo, f(m.value), 1)) : y("", !0)
        ]),
        I(Tt, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (N) => s.value = N)
        }, {
          default: j(() => [
            I(Dt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", To, [
                  B[16] || (B[16] = l("div", { class: "border-b px-4 py-3" }, [
                    l("p", { class: "text-sm font-semibold" }, "Table tools"),
                    l("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  l("div", Do, [
                    e.filterSchema.length ? (t(), a("div", Eo, [
                      l("div", { class: "flex items-center justify-between" }, [
                        B[12] || (B[12] = l("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        l("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: ee
                        }, " Reset ")
                      ]),
                      (t(!0), a(P, null, V(e.filterSchema, (N) => (t(), a("div", {
                        key: `mobile-${N.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        l("label", Io, f(N.label), 1),
                        N.type !== "multiselect" && N.type !== "querybuilder" && N.type !== "daterange" && N.type !== "numberrange" && N.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: u.value[N.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (L) => c(N, L.target.value)
                        }, [
                          B[13] || (B[13] = l("option", { value: "" }, "All", -1)),
                          (t(!0), a(P, null, V(H(N), (L) => (t(), a("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, No))), 128))
                        ], 40, Fo)) : y("", !0)
                      ]))), 128))
                    ])) : y("", !0),
                    l("div", Ro, [
                      B[14] || (B[14] = l("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      l("div", Uo, [
                        (t(!0), a(P, null, V(e.columns, (N) => (t(), a("button", {
                          key: `mobile-col-${N.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: N.locked,
                          onClick: (L) => J(N.key)
                        }, [
                          l("span", null, f(N.label), 1),
                          W.value.has(N.key) ? y("", !0) : (t(), a("span", qo, "On"))
                        ], 8, Ho))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", Ko, [
                      B[15] || (B[15] = l("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      l("div", Go, [
                        l("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: B[2] || (B[2] = (N) => {
                            A(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), a(P, null, V(e.groups, (N) => (t(), a("button", {
                          key: N.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (L) => {
                            A(N.key), s.value = !1;
                          }
                        }, f(N.label), 9, Wo))), 128))
                      ])
                    ])) : y("", !0)
                  ]),
                  l("div", Zo, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !b.value,
                      onClick: te
                    }, " Apply filters ", 8, Jo)) : y("", !0),
                    p.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: B[3] || (B[3] = (N) => {
                        Y(), s.value = !1;
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
      l("div", Yo, [
        l("div", Xo, [
          B[18] || (B[18] = l("svg", {
            class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round"
          }, [
            l("circle", {
              cx: "11",
              cy: "11",
              r: "7"
            }),
            l("path", { d: "m20 20-3.5-3.5" })
          ], -1)),
          ue(l("input", {
            "onUpdate:modelValue": B[5] || (B[5] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: _(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", h(Be)])
          }, null, 10, Qo), [
            [ye, i.value]
          ]),
          i.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: B[6] || (B[6] = (N) => i.value = "")
          }, [...B[17] || (B[17] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3.5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])])) : y("", !0)
        ]),
        e.filterSchema.length ? (t(), T(Ne, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: j(() => [
            l("button", {
              type: "button",
              dusk: "filters-trigger",
              class: _(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", m.value ? "border-primary text-primary" : ""]),
              "aria-label": m.value ? `Filters (${m.value} active)` : "Filters",
              title: "Filters"
            }, [
              B[19] || (B[19] = l("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                l("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              m.value ? (t(), a("span", ts, f(m.value), 1)) : y("", !0)
            ], 10, es)
          ]),
          panel: j(({ close: N }) => [
            l("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              B[20] || (B[20] = l("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              l("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: ee
              }, " Reset ")
            ]),
            B[23] || (B[23] = l("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            l("div", as, [
              (t(!0), a(P, null, V(e.filterSchema, (L) => (t(), a("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                l("label", ns, f(L.label), 1),
                k(L) ? (t(), T(Vt, {
                  key: 0,
                  "model-value": g(L),
                  options: v(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (X) => u.value[L.key] = X.length ? X : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(zo, {
                  key: 1,
                  "model-value": u.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (X) => E(L.key, X)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), a(P, { key: 2 }, [
                  l("select", {
                    value: typeof u.value[L.key] == "string" && !String(u.value[L.key]).includes("..") ? u.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (X) => c(L, X.target.value)
                  }, [
                    B[21] || (B[21] = l("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(P, null, V(H(L), (X) => (t(), a("option", {
                      key: String(X.value),
                      value: X.value
                    }, f(X.label), 9, os))), 128))
                  ], 40, ls),
                  l("div", ss, [
                    l("input", {
                      type: "date",
                      value: S(L, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (X) => M(
                        L,
                        "from",
                        X.target.value
                      )
                    }, null, 40, rs),
                    l("input", {
                      type: "date",
                      value: S(L, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (X) => M(
                        L,
                        "to",
                        X.target.value
                      )
                    }, null, 40, is)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), a("div", ds, [
                  l("input", {
                    type: "number",
                    value: S(L, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (X) => z(
                      L,
                      "from",
                      X.target.value
                    )
                  }, null, 40, us),
                  l("input", {
                    type: "number",
                    value: S(L, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (X) => z(
                      L,
                      "to",
                      X.target.value
                    )
                  }, null, 40, cs)
                ])) : L.type === "boolean" ? (t(), a("div", fs, [
                  l("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[L.key] === !0,
                    class: _([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (X) => c(L, u.value[L.key] === !0 ? null : !0)
                  }, [
                    l("span", {
                      class: _(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, ms),
                  l("span", ps, f(L.trueLabel ?? "Yes"), 1),
                  l("button", {
                    type: "button",
                    class: _([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (X) => c(L, u.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, vs)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (X) => c(L, X.target.value)
                }, [
                  B[22] || (B[22] = l("option", { value: "" }, "All", -1)),
                  (t(!0), a(P, null, V(H(L), (X) => (t(), a("option", {
                    key: String(X.value),
                    value: X.value
                  }, f(X.label), 9, hs))), 128))
                ], 40, gs))
              ]))), 128))
            ]),
            l("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !b.value,
              onClick: (L) => R(N)
            }, " Apply filters ", 8, bs)
          ]),
          _: 1
        })) : y("", !0),
        I(Ne, { "dismiss-on-panel-click": !1 }, {
          trigger: j(() => [...B[24] || (B[24] = [
            l("button", {
              type: "button",
              class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 transition-colors",
              "aria-label": "Toggle columns"
            }, [
              l("svg", {
                viewBox: "0 0 24 24",
                class: "size-4 shrink-0",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                l("rect", {
                  x: "3",
                  y: "4",
                  width: "18",
                  height: "16",
                  rx: "2"
                }),
                l("path", { d: "M9 4v16M15 4v16" })
              ]),
              l("span", { class: "text-sm" }, "Columns View")
            ], -1)
          ])]),
          panel: j(() => [
            B[27] || (B[27] = l("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            l("div", xs, [
              (t(!0), a(P, null, V(e.columns, (N) => (t(), a("button", {
                key: N.key,
                type: "button",
                class: _(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: N.locked,
                onClick: (L) => J(N.key)
              }, [
                W.value.has(N.key) ? (t(), a("span", $s)) : (t(), a("svg", ks, [...B[25] || (B[25] = [
                  l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                U(" " + f(N.label), 1)
              ], 10, ys))), 128))
            ]),
            l("div", { class: "border-t" }, [
              l("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: ae
              }, [...B[26] || (B[26] = [
                l("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4 shrink-0",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  l("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
                  l("path", { d: "M3 3v5h5" })
                ], -1),
                U(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.reorderable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: _(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: B[7] || (B[7] = (N) => r("toggle-reorder"))
        }, [...B[28] || (B[28] = [
          l("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            l("path", { d: "m3 16 4 4 4-4M7 20V4m14 4-4-4-4 4m4-4v16" })
          ], -1)
        ])], 10, ws)) : y("", !0),
        e.groups.length ? (t(), T(Ne, {
          key: 2,
          align: "end"
        }, {
          trigger: j(() => [
            l("button", {
              type: "button",
              dusk: "group-picker",
              class: _(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...B[29] || (B[29] = [
              l("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                l("path", { d: "M4 6h16M4 12h10M4 18h7" })
              ], -1)
            ])], 10, Cs)
          ]),
          panel: j(({ close: N }) => [
            l("div", Ss, [
              l("button", {
                type: "button",
                class: _(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  A(null), N();
                }
              }, " No grouping ", 10, Ms),
              (t(!0), a(P, null, V(e.groups, (L) => (t(), a("button", {
                key: L.key,
                type: "button",
                class: _(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (X) => {
                  A(L.key), N();
                }
              }, f(L.label), 11, Bs))), 128))
            ])
          ]),
          _: 1
        })) : y("", !0),
        p.value ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: Y
        }, " Clear ")) : y("", !0),
        e.loading ? (t(), a("span", As, "Loading…")) : y("", !0)
      ]),
      x.value.length ? (t(), a("div", zs, [
        (t(!0), a(P, null, V(x.value, (N) => (t(), a("span", {
          key: N.key + N.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${N.key}`
        }, [
          U(f(N.label) + " ", 1),
          N.removable !== !1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${N.label}`,
            onClick: (L) => C(N.key)
          }, [...B[30] || (B[30] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, _s)) : y("", !0)
        ], 8, Ps))), 128)),
        x.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: B[8] || (B[8] = (N) => r("clear-filters"))
        }, " Clear all ")) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), js = { class: "min-w-0" }, Ls = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, Vs = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, Ts = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, Ds = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, Es = { class: "w-full border-collapse text-sm" }, Is = { class: "bg-muted/40" }, Fs = { class: "divide-y" }, Ns = ["href"], Rs = {
  key: 1,
  class: "text-muted-foreground"
}, Us = {
  key: 0,
  class: "flex justify-center"
}, Hs = ["disabled"], qs = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Ks = ["href"], xw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = Mt(), i = $(() => n.columns.filter((A) => A.type !== "image")), d = $(() => !!s.actions), u = $(() => !!n.title || d.value), m = $(() => n.filterSchema.length > 0), b = $(
      () => n.columns.map((A) => ({ key: A.key, label: A.label, locked: !0 }))
    );
    function p(A, C) {
      return C == null || C === "" ? "None" : A.type === "date" || A.type === "datetime" ? new Date(String(C)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...A.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof C == "number" ? new Intl.NumberFormat().format(C) : String(C);
    }
    function x(A) {
      return A == null || A === "";
    }
    return (A, C) => (t(), T(lo, null, Ze({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), a("div", Ts, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(yt, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, Ze({ _: 2 }, [
          A.$slots.illustration ? {
            name: "illustration",
            fn: j(() => [
              q(A.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          A.$slots["empty-actions"] ? {
            name: "actions",
            fn: j(() => [
              q(A.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", Ds, [
          l("table", Es, [
            l("thead", Is, [
              l("tr", null, [
                (t(!0), a(P, null, V(i.value, (k) => (t(), a("th", {
                  key: k.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f(k.label), 1))), 128))
              ])
            ]),
            l("tbody", Fs, [
              (t(!0), a(P, null, V(e.rows, (k, w) => (t(), a("tr", {
                key: k.id ?? w,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(P, null, V(i.value, (g) => (t(), a("td", {
                  key: g.key,
                  class: _(["px-3 whitespace-nowrap", [
                    g.mono ? "font-mono text-xs" : "",
                    g.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  q(A.$slots, `cell:${g.key}`, {
                    row: k,
                    value: k[g.key],
                    column: g
                  }, () => [
                    e.recordBase && k.id != null && g === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${k.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, f(p(g, k[g.key])), 9, Ns)) : x(k[g.key]) ? (t(), a("span", Rs, " None ")) : (t(), a(P, { key: 2 }, [
                      U(f(p(g, k[g.key])), 1)
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
          l("div", js, [
            e.title ? (t(), a("h3", Ls, f(e.title), 1)) : y("", !0)
          ]),
          d.value ? (t(), a("div", Vs, [
            q(A.$slots, "actions")
          ])) : y("", !0)
        ]),
        key: "0"
      } : void 0,
      m.value ? {
        name: "toolbar",
        fn: j(() => [
          I(Os, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: b.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": C[0] || (C[0] = (k) => r("update:search", k)),
            onApplyFilters: C[1] || (C[1] = (k) => r("apply-filters", k)),
            onClearFilters: C[2] || (C[2] = (k) => r("clear-filters")),
            onClearFilter: C[3] || (C[3] = (k) => r("clear-filter", k)),
            onClear: C[4] || (C[4] = (k) => r("clear-filters")),
            onApplyColumns: C[5] || (C[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: j(() => [
          e.nextCursor ? (t(), a("div", Us, [
            l("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: C[6] || (C[6] = (k) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, Hs)
          ])) : e.capped ? (t(), a("p", qs, [
            U(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Ks)) : (t(), a(P, { key: 1 }, [
              U("Open the full list to search or filter the rest.")
            ], 64))
          ])) : y("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), Gs = { class: "flex items-center gap-2 overflow-x-auto" }, Ws = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Zs = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Js = { class: "flex flex-col" }, Ys = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Xs = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Qs = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, er = /* @__PURE__ */ O({
  __name: "PkStepIndicator",
  props: {
    steps: {},
    activeStep: {},
    hasError: { type: Function, default: () => !1 },
    failedStep: { default: null },
    interactive: { type: Boolean, default: !0 }
  },
  emits: ["update:activeStep"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(m) {
      return n.failedStep !== null && m === n.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : n.failedStep !== null && m > n.failedStep ? "" : m < n.activeStep ? "bg-primary text-primary-foreground border-primary" : m === n.activeStep ? "border-primary text-primary" : "";
    }
    function i(m) {
      if (n.failedStep !== null) {
        if (m === n.failedStep)
          return "text-destructive font-medium";
        if (m > n.failedStep)
          return "text-muted-foreground/60";
      }
      return m === n.activeStep ? "text-foreground font-medium" : m < n.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(m) {
      return n.failedStep !== null ? m < n.failedStep : m < n.activeStep;
    }
    function u(m) {
      return n.failedStep === m;
    }
    return (m, b) => (t(), a("ol", Gs, [
      (t(!0), a(P, null, V(e.steps, (p, x) => (t(), a("li", {
        key: x,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(xe(e.interactive ? "button" : "div"), le({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(x)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: x > e.activeStep } : {}, {
          onClick: (A) => e.interactive && x <= e.activeStep && r("update:activeStep", x)
        }), {
          default: j(() => [
            l("span", {
              class: _(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(x)])
            }, [
              u(x) ? (t(), a("svg", Ws, [...b[0] || (b[0] = [
                l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(x) ? (t(), a("svg", Zs, [...b[1] || (b[1] = [
                l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(P, { key: 2 }, [
                U(f(x + 1), 1)
              ], 64))
            ], 2),
            l("span", Js, [
              l("span", null, f(p.label), 1),
              p.description ? (t(), a("span", Ys, f(p.description), 1)) : y("", !0)
            ]),
            e.hasError(x) ? (t(), a("span", Xs)) : y("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        x < e.steps.length - 1 ? (t(), a("span", Qs)) : y("", !0)
      ]))), 128))
    ]));
  }
}), Qe = /* @__PURE__ */ new Map();
function Me(e, o) {
  Qe.set(e, o);
}
function tr(e) {
  return Qe.get(e);
}
function yw(e) {
  return Qe.has(e);
}
function kw() {
  return [...Qe.keys()].sort();
}
function $w() {
  Qe.clear();
}
class ar extends Error {
  fieldErrors;
  constructor(o, n = {}) {
    super(o), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function ww(e) {
  if (!e || typeof e != "object")
    return {};
  const o = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (o[n] = s);
  }
  return o;
}
function nr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create option";
}
function lr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create new";
}
const or = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, sr = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K({});
    ce(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), T(Ye, {
      open: e.open,
      title: e.title,
      description: e.description,
      busy: e.processing,
      onClose: u[1] || (u[1] = (m) => r("close"))
    }, {
      footer: j(() => [
        I(se, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (m) => r("close"))
        }, {
          default: j(() => [...u[2] || (u[2] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            U(f(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        l("form", {
          class: "flex flex-col gap-4",
          onSubmit: me(i, ["prevent"])
        }, [
          e.generalError ? (t(), a("p", or, f(e.generalError), 1)) : y("", !0),
          (t(!0), a(P, null, V(e.fields, (m) => (t(), T(Re, {
            key: m.key,
            field: m,
            value: s.value[m.key],
            error: e.errors[m.key],
            processing: e.processing,
            onChange: (b) => s.value[m.key] = b
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
}), rr = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(Ia), le({ "data-slot": "checkbox" }, h(i), {
      class: h(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j((m) => [
        I(h(Fa), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            q(d.$slots, "default", we(je(m)), () => [
              I(h(da), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fe = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ve(de(n, "class"), r);
    return (i, d) => (t(), T(h(Na), le({ "data-slot": "switch" }, h(s), {
      class: h(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j(() => [
        I(h(Ra), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ir = ["accept", "disabled"], dr = { class: "text-sm font-medium" }, ur = { key: 0 }, cr = { key: 1 }, fr = { class: "text-muted-foreground text-xs" }, mr = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, pr = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, vr = ["src"], gr = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, hr = { class: "min-w-0 flex-1" }, br = { class: "block truncate text-sm font-medium" }, xr = { class: "text-muted-foreground text-xs" }, yr = ["href"], kr = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, ma = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(null), i = K(!1), d = K(null), u = K(null), m = K(null), b = $(() => n.accept.map((S) => `.${S}`).join(",")), p = $(() => m.value ?? n.modelValue?.url ?? null), x = $(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${A(n.maxKilobytes * 1024)}`);
    function A(S) {
      if (!S)
        return "";
      const M = ["B", "KB", "MB", "GB"];
      let z = S, R = 0;
      for (; z >= 1024 && R < M.length - 1; )
        z /= 1024, R++;
      return `${z.toFixed(z < 10 && R > 0 ? 1 : 0)} ${M[R]}`;
    }
    function C(S) {
      return S.split(".").pop()?.toLowerCase() ?? "";
    }
    function k(S) {
      return n.accept.length && !n.accept.includes(C(S.name)) ? `${C(S.name).toUpperCase() || "That"} files are not accepted here.` : S.size > n.maxKilobytes * 1024 ? `That file is ${A(S.size)}; the limit is ${A(n.maxKilobytes * 1024)}.` : null;
    }
    async function w(S) {
      const M = S?.[0];
      if (!(!M || n.disabled) && (u.value = k(M), !u.value)) {
        g(), n.image && M.type.startsWith("image/") && (m.value = URL.createObjectURL(M)), d.value = 0;
        try {
          const z = await n.upload(M, (R) => {
            d.value = R;
          });
          r("update:modelValue", z);
        } catch (z) {
          u.value = z instanceof Error ? z.message : "The upload failed.", g();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function g() {
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function v() {
      const S = n.modelValue;
      g(), u.value = null, r("update:modelValue", null), S && !S.url && n.discard && await n.discard(S.value).catch(() => {
      });
    }
    function c(S) {
      i.value = !1, w(S.dataTransfer?.files ?? null);
    }
    return (S, M) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", pr, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, vr)) : (t(), a("span", gr, f(C(e.modelValue.name) || "file"), 1)),
        l("span", hr, [
          l("span", br, f(e.modelValue.name), 1),
          l("span", xr, [
            U(f(A(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(P, { key: 0 }, [
              M[4] || (M[4] = U(" · ", -1)),
              l("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, yr)
            ], 64)) : (t(), a(P, { key: 1 }, [
              U(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? y("", !0) : (t(), a("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: v
        }, [...M[5] || (M[5] = [
          l("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])]))
      ])) : (t(), a("label", {
        key: 0,
        class: _(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: M[1] || (M[1] = me((z) => i.value = !0, ["prevent"])),
        onDragleave: M[2] || (M[2] = me((z) => i.value = !1, ["prevent"])),
        onDrop: me(c, ["prevent"])
      }, [
        l("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: b.value,
          disabled: e.disabled,
          onChange: M[0] || (M[0] = (z) => w(z.target.files))
        }, null, 40, ir),
        M[3] || (M[3] = l("svg", {
          class: "text-muted-foreground size-6",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          l("path", { d: "M12 16V4" }),
          l("path", { d: "m7 9 5-5 5 5" }),
          l("path", { d: "M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" })
        ], -1)),
        l("span", dr, [
          d.value === null ? (t(), a("span", ur, "Drop a file or click to choose")) : (t(), a("span", cr, "Uploading…"))
        ]),
        l("span", fr, f(x.value), 1),
        d.value !== null ? (t(), a("span", mr, [
          l("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${d.value}%` })
          }, null, 4)
        ])) : y("", !0)
      ], 34)),
      u.value ? (t(), a("p", kr, f(u.value), 1)) : y("", !0)
    ]));
  }
}), $r = { class: "flex flex-col gap-2" }, wr = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Cr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Sr = { class: "flex flex-col gap-1" }, Mr = ["onUpdate:modelValue", "disabled", "aria-label"], Br = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Ar = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, zr = ["onUpdate:modelValue", "disabled", "aria-label"], Pr = ["disabled", "aria-label", "onClick"], _r = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Or = { class: "flex items-center gap-3" }, jr = ["disabled"], Lr = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Vr = /* @__PURE__ */ O({
  __name: "PkKeyValue",
  props: {
    modelValue: {},
    keyLabel: { default: "Key" },
    valueLabel: { default: "Value" },
    maxPairs: { default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const d = K(u(n.modelValue));
    function u(w) {
      return w ? Object.entries(w).map(([g, v]) => ({
        uid: i++,
        key: g,
        value: v ?? ""
      })) : [];
    }
    ce(
      () => n.modelValue,
      (w) => {
        JSON.stringify(w ?? null) !== JSON.stringify(m()) && (d.value = u(w));
      }
    );
    function m() {
      const w = {};
      for (const g of d.value) {
        const v = g.key.trim();
        v !== "" && (w[v] = g.value);
      }
      return Object.keys(w).length ? w : null;
    }
    function b() {
      r("update:modelValue", m());
    }
    const p = $(() => {
      const w = /* @__PURE__ */ new Map();
      for (const g of d.value) {
        const v = g.key.trim();
        v !== "" && w.set(v, (w.get(v) ?? 0) + 1);
      }
      return new Set([...w.entries()].filter(([, g]) => g > 1).map(([g]) => g));
    }), x = $(
      () => new Set(
        d.value.map((w) => w.key.trim()).filter((w) => w !== "" && !s.test(w))
      )
    ), A = $(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function C() {
      A.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function k(w) {
      d.value = d.value.filter((g) => g.uid !== w), b();
    }
    return (w, g) => (t(), a("div", $r, [
      d.value.length ? (t(), a("div", wr, [
        l("div", Cr, [
          l("span", null, f(e.keyLabel), 1),
          l("span", null, f(e.valueLabel), 1),
          g[0] || (g[0] = l("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(P, null, V(d.value, (v) => (t(), a("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          l("div", Sr, [
            ue(l("input", {
              "onUpdate:modelValue": (c) => v.key = c,
              type: "text",
              class: _([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || x.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: b
            }, null, 42, Mr), [
              [ye, v.key]
            ]),
            x.value.has(v.key.trim()) ? (t(), a("p", Br, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), a("p", Ar, " Used twice - only the last value will be saved. ")) : y("", !0)
          ]),
          ue(l("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: b
          }, null, 40, zr), [
            [ye, v.value]
          ]),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (c) => k(v.uid)
          }, [...g[1] || (g[1] = [
            l("svg", {
              class: "size-4",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Pr)
        ]))), 128))
      ])) : (t(), a("p", _r, " Nothing here yet. ")),
      l("div", Or, [
        l("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || A.value,
          onClick: C
        }, [
          g[2] || (g[2] = l("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "M12 5v14M5 12h14" })
          ], -1)),
          U(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, jr),
        e.maxPairs !== null ? (t(), a("p", Lr, f(d.value.length) + " of " + f(e.maxPairs), 1)) : y("", !0)
      ])
    ]));
  }
}), Tr = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Dr = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Er = ["disabled", "title", "aria-label", "onClick"], Ir = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fr = ["d"], Nr = ["disabled"], Rr = ["contenteditable", "data-placeholder"], Ur = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Hr = /* @__PURE__ */ O({
  __name: "PkRichEditor",
  props: {
    modelValue: {},
    toolbar: { default: () => ["bold", "italic", "heading", "list", "link"] },
    maxLength: { default: null },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: "Write a note…" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(null);
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
    ], u = $(() => d.filter((k) => n.toolbar.includes(k.id))), m = $(() => n.toolbar.includes("link")), b = K(0);
    function p() {
      const k = s.value?.innerHTML ?? "", w = (s.value?.innerText ?? "").trim();
      b.value = w.length;
      const g = w === "" ? null : k;
      i = g, r("update:modelValue", g);
    }
    function x(k) {
      n.disabled || (s.value?.focus(), document.execCommand(k.command, !1, k.argument), p());
    }
    function A() {
      if (n.disabled)
        return;
      const k = window.prompt("Link address");
      k && (s.value?.focus(), document.execCommand("createLink", !1, k), p());
    }
    function C(k) {
      k.preventDefault();
      const w = k.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, w), p();
    }
    return pe(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", b.value = s.value.innerText.trim().length);
    }), ce(
      () => n.modelValue,
      (k) => {
        k !== i && s.value && (s.value.innerHTML = k ?? "", b.value = s.value.innerText.trim().length);
      }
    ), (k, w) => (t(), a("div", Tr, [
      l("div", Dr, [
        (t(!0), a(P, null, V(u.value, (g) => (t(), a("button", {
          key: g.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: g.label,
          "aria-label": g.label,
          onMousedown: w[0] || (w[0] = me(() => {
          }, ["prevent"])),
          onClick: (v) => x(g)
        }, [
          (t(), a("svg", Ir, [
            l("path", {
              d: g.path
            }, null, 8, Fr)
          ]))
        ], 40, Er))), 128)),
        m.value ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: w[1] || (w[1] = me(() => {
          }, ["prevent"])),
          onClick: A
        }, [...w[2] || (w[2] = [
          l("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" })
          ], -1)
        ])], 40, Nr)) : y("", !0)
      ]),
      l("div", {
        ref_key: "editor",
        ref: s,
        class: _(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: C
      }, null, 42, Rr),
      e.maxLength !== null ? (t(), a("div", Ur, f(b.value) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), qr = /* @__PURE__ */ Lt(Hr, [["__scopeId", "data-v-32c63bc7"]]), Kr = {
  key: 1,
  class: "flex flex-col gap-2"
}, Gr = { class: "flex items-center justify-between gap-2" }, Wr = ["for"], Zr = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Jr = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, Yr = ["aria-label", "disabled"], Xr = {
  key: 7,
  class: "flex flex-col gap-2"
}, Qr = ["id", "value", "disabled"], ei = ["value"], ti = {
  key: 0,
  class: "relative"
}, ai = ["disabled"], ni = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, li = { class: "max-h-56 overflow-y-auto p-1" }, oi = ["onClick"], si = {
  key: 8,
  class: "relative"
}, ri = ["disabled", "aria-invalid"], ii = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, di = { class: "max-h-56 overflow-y-auto p-1" }, ui = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, ci = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, fi = ["onClick"], mi = ["id", "value", "disabled", "aria-invalid"], pi = ["value"], vi = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, gi = { class: "text-muted-foreground" }, hi = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, bi = { class: "text-muted-foreground" }, xi = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], yi = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, ki = ["aria-label", "disabled"], $i = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], wi = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ci = ["aria-label", "disabled"], Si = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Mi = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Bi = ["aria-label", "disabled"], Ai = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], zi = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Pi = ["aria-label", "disabled"], _i = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Oi = ["disabled", "aria-pressed", "onClick"], ji = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Li = ["title", "disabled", "onClick"], Vi = ["href"], Ti = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, Di = {
  key: 20,
  class: "text-muted-foreground text-xs leading-snug"
}, Ei = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Re = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = Ht(() => import("./PkRepeater-J84jGe3T.js")), r = Ht(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = o, d = K(!1), u = K(""), m = K([]), b = K(!1), p = K(null);
    let x;
    ce(u, (G) => {
      s.searchOptions && (clearTimeout(x), b.value = !0, x = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(G);
        } catch {
        } finally {
          b.value = !1;
        }
      }, 200));
    });
    async function A() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, m.value.length === 0 && s.searchOptions)) {
        b.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          b.value = !1;
        }
      }
    }
    function C(G) {
      p.value = G.label, i("change", G.value), d.value = !1, u.value = "";
    }
    function k() {
      p.value = null, i("change", null);
    }
    const w = lt("panelPicker", null), g = lt("panelCreateOption", null), v = K(!1), c = K(!1), S = K({}), M = K(null), z = $(() => nr(s.field)), R = $(() => lr(s.field));
    function E() {
      S.value = {}, M.value = null, v.value = !0, d.value = !1;
    }
    function ee() {
      c.value || (v.value = !1, S.value = {}, M.value = null);
    }
    async function H(G) {
      if (g) {
        c.value = !0, S.value = {}, M.value = null;
        try {
          const D = await g.run(s.field.key, { ...G });
          C(D), v.value = !1;
        } catch (D) {
          D instanceof ar ? (S.value = D.fieldErrors, M.value = Object.keys(D.fieldErrors).length === 0 ? D.message : null) : M.value = D instanceof Error ? D.message : "Could not create that option.";
        } finally {
          c.value = !1;
        }
      }
    }
    const W = $(() => {
      if (!s.field.tableSelect || !w?.base)
        return;
      const G = w.returnUrl || "/";
      return `${w.base}/pick/${s.field.key}?return=${encodeURIComponent(G)}`;
    }), J = $(() => s.field.morphTo ?? []), ae = $(() => {
      const G = s.value;
      return G && typeof G == "object" && !Array.isArray(G) ? G : { type: void 0, id: void 0 };
    });
    function te(G) {
      i("change", { type: G || null, id: null });
    }
    function Y(G) {
      i("change", { type: ae.value.type ?? null, id: G });
    }
    function Z(G) {
      p.value = G.label, Y(G.value), d.value = !1, u.value = "";
    }
    be(() => clearTimeout(x));
    const B = $(() => tr(s.field.type)), N = $(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function L(G) {
      if (G) {
        if (G.copy) {
          const D = s.value == null ? "" : String(s.value);
          D !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(D);
          return;
        }
        if (G.url && typeof window < "u") {
          window.open(G.url, "_blank", "noopener,noreferrer");
          return;
        }
        G.key && i("affix-action", G.key);
      }
    }
    const X = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Be}`;
    function fe(G) {
      const D = document.getElementById(`f-${s.field.key}`);
      if (!(D instanceof HTMLTextAreaElement) && !(D instanceof HTMLInputElement))
        return;
      const F = D.selectionStart ?? D.value.length, oe = D.selectionEnd ?? F;
      D.setRangeText(G, F, oe, "end"), D.dispatchEvent(new Event("input", { bubbles: !0 })), D.focus();
    }
    return (G, D) => (t(), a(P, null, [
      e.field.type === "hidden" ? (t(), a(P, { key: 0 }, [], 64)) : (t(), a("div", Kr, [
        l("div", Gr, [
          l("label", {
            for: `f-${e.field.key}`,
            class: _(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            U(f(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", Zr, "*")) : y("", !0)
          ], 10, Wr),
          e.field.hint ? (t(), a("span", Jr, [
            U(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: D[0] || (D[0] = (F) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, Yr)) : y("", !0)
          ])) : y("", !0)
        ]),
        B.value ? (t(), T(xe(B.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": D[1] || (D[1] = (F) => i("change", F))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(ma, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": D[2] || (D[2] = (F) => i("change", F))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(h(n), {
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
          "onUpdate:modelValue": D[3] || (D[3] = (F) => i("change", F))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(h(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": D[4] || (D[4] = (F) => i("change", F))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(qr, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": D[5] || (D[5] = (F) => i("change", F))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(Vr, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": D[6] || (D[6] = (F) => i("change", F))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Vt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": D[7] || (D[7] = (F) => i("change", F))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : J.value.length ? (t(), a("div", Xr, [
          l("select", {
            id: `f-${e.field.key}-type`,
            value: ae.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: _(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", h(Be)]),
            onChange: D[8] || (D[8] = (F) => te(F.target.value))
          }, [
            D[24] || (D[24] = l("option", { value: "" }, "Type", -1)),
            (t(!0), a(P, null, V(J.value, (F) => (t(), a("option", {
              key: F.value,
              value: F.value
            }, f(F.label), 9, ei))), 128))
          ], 42, Qr),
          ae.value.type && e.searchOptions ? (t(), a("div", ti, [
            l("button", {
              type: "button",
              class: _(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", h(Be)]),
              disabled: e.field.disabled || e.processing,
              onClick: A
            }, [
              l("span", {
                class: _(p.value || ae.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (ae.value.id ? String(ae.value.id) : "Search…")), 3)
            ], 10, ai),
            d.value ? (t(), a("div", ni, [
              ue(l("input", {
                "onUpdate:modelValue": D[9] || (D[9] = (F) => u.value = F),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ye, u.value]
              ]),
              l("div", li, [
                (t(!0), a(P, null, V(m.value, (F) => (t(), a("button", {
                  key: String(F.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (oe) => Z(F)
                }, f(F.label), 9, oi))), 128))
              ])
            ])) : y("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: D[10] || (D[10] = (F) => d.value = !1)
            })) : y("", !0)
          ])) : y("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", si, [
          l("button", {
            type: "button",
            class: _(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", h(Be)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: A
          }, [
            l("span", {
              class: _(p.value || e.value ? "" : "text-muted-foreground")
            }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: me(k, ["stop"])
            }, " ✕ ")) : y("", !0)
          ], 10, ri),
          d.value ? (t(), a("div", ii, [
            ue(l("input", {
              "onUpdate:modelValue": D[11] || (D[11] = (F) => u.value = F),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ye, u.value]
            ]),
            l("div", di, [
              b.value ? (t(), a("p", ui, " Searching… ")) : m.value.length === 0 ? (t(), a("p", ci, " No matches ")) : y("", !0),
              (t(!0), a(P, null, V(m.value, (F) => (t(), a("button", {
                key: String(F.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (oe) => C(F)
              }, f(F.label), 9, fi))), 128)),
              e.field.createOption && h(g) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                D[25] || (D[25] = l("span", { "aria-hidden": "true" }, "+", -1)),
                U(" " + f(R.value), 1)
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          d.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: D[12] || (D[12] = (F) => d.value = !1)
          })) : y("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: _(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", h(Be)]),
          onChange: D[13] || (D[13] = (F) => i("change", F.target.value || null))
        }, [
          D[26] || (D[26] = l("option", { value: "" }, "-", -1)),
          (t(!0), a(P, null, V(e.options, (F) => (t(), a("option", {
            key: String(F.value),
            value: F.value
          }, f(F.label), 9, pi))), 128))
        ], 42, mi)) : e.field.type === "toggle" ? (t(), a("label", vi, [
          I(h(Fe), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": D[14] || (D[14] = (F) => i("change", F))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", gi, f(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", hi, [
          I(h(rr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": D[15] || (D[15] = (F) => i("change", F === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", bi, f(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !N.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: _(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", h(Be)]),
          onInput: D[16] || (D[16] = (F) => i("change", F.target.value))
        }, null, 42, xi)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: _([
            "border-input flex overflow-hidden rounded-md border",
            h(qt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", yi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: D[17] || (D[17] = (F) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, ki)) : y("", !0),
          l("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: D[18] || (D[18] = (F) => i("change", F.target.value))
          }, null, 40, $i),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", wi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: D[19] || (D[19] = (F) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Ci)) : y("", !0)
        ], 2)) : N.value ? (t(), a("div", {
          key: 15,
          class: _([
            "border-input flex h-9 overflow-hidden rounded-md border",
            h(qt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Mi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: D[21] || (D[21] = (F) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Bi)) : y("", !0),
          l("input", {
            id: `f-${e.field.key}`,
            type: e.field.type === "number" ? "number" : e.field.type === "date" ? "date" : e.field.type === "datetime" ? "datetime-local" : e.field.type === "password" ? "password" : e.field.inputType ?? "text",
            value: e.value ?? "",
            placeholder: e.field.placeholder,
            autocomplete: e.field.type === "password" ? "new-password" : void 0,
            min: e.field.min,
            max: e.field.max,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: _(Ei),
            onInput: D[22] || (D[22] = (F) => i("change", F.target.value))
          }, null, 40, Ai),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", zi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: D[23] || (D[23] = (F) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Pi)) : y("", !0)
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
          class: _(X),
          onInput: D[20] || (D[20] = (F) => i("change", F.target.value))
        }, null, 40, Si)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", _i, [
          (t(!0), a(P, null, V(e.field.presets, (F) => (t(), a("button", {
            key: F,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: _([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              h(Be),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == F ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == F
            ),
            onClick: (oe) => i("change", String(F))
          }, f(F), 11, Oi))), 128))
        ])) : y("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", ji, [
          (t(!0), a(P, null, V(e.field.chips, (F, oe) => (t(), a("button", {
            key: oe,
            type: "button",
            title: F,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (re) => fe(String(oe))
          }, f(oe), 9, Li))), 128))
        ])) : y("", !0),
        W.value ? (t(), a("a", {
          key: 18,
          href: W.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Vi)) : y("", !0),
        e.error ? (t(), a("p", Ti, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", Di, f(e.field.help), 1)) : y("", !0)
      ])),
      e.field.createOption && h(g) ? (t(), T(sr, {
        key: 2,
        open: v.value,
        title: z.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: c.value,
        errors: S.value,
        "general-error": M.value,
        onClose: ee,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : y("", !0)
    ], 64));
  }
}), Ii = { class: "flex min-w-0 items-start gap-2.5" }, Fi = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Ni = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Ri = ["d"], Ui = { class: "min-w-0" }, Hi = { class: "text-sm font-semibold" }, qi = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ki = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, Gi = { class: "border-b px-4 py-3.5 sm:px-5" }, Wi = { class: "text-sm font-semibold" }, Zi = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ji = {
  key: 4,
  class: "min-w-0 space-y-4"
}, Yi = {
  key: 7,
  class: "flex flex-col gap-3"
}, Xi = { class: "text-sm font-medium" }, Qi = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, ed = {
  key: 0,
  class: "mb-1 font-medium"
}, td = ["onClick"], ad = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, nd = { class: "flex items-center justify-between gap-3 border-t p-4" }, ld = ["disabled"], pa = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!n.node.collapsed), i = K(0), d = K(0), u = $(
      () => (n.node.children ?? []).map((v) => ({
        label: v.label ?? "",
        description: v.description
      }))
    ), m = $(() => n.depth === 0), b = $(() => {
      const v = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, c = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        v[n.node.align ?? "start"] ?? "items-start",
        c[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = $(() => {
      const v = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return v[n.node.tone ?? "info"] ?? v.info;
    }), x = $(() => {
      const v = n.node.columns ?? 1;
      return v >= 3 ? "sm:grid-cols-3" : v === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function A(v) {
      const c = v.children?.length ?? 1;
      return c >= 3 ? "md:grid-cols-3" : c === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function C(v = 1) {
      return v >= 4 ? "md:col-span-4" : v === 3 ? "md:col-span-3" : v === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function k(v) {
      const c = [], S = (M) => {
        M.component === "field" && M.key && c.push(M.key), M.children?.forEach(S);
      };
      return S(v), c.some((M) => n.errors[M]);
    }
    function w(v) {
      if (v.hidden)
        return !1;
      const c = v.visibleWhen;
      return c ? n.values[c.field] == c.value : !0;
    }
    function g(v) {
      if (n.upload)
        return (c, S) => n.upload(v, c, S);
    }
    return (v, c) => {
      const S = At("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), T(Re, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (M) => e.searchOptions(e.node.key, M) : void 0,
        upload: g(e.node.key),
        discard: e.discard,
        onChange: c[0] || (c[0] = (M) => r("change", e.node.key, M)),
        onAffixAction: c[1] || (c[1] = (M) => r("affix-action", e.node.key, M))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && w(e.node) ? (t(), a("section", {
        key: 1,
        class: _(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("header", {
          class: _(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: c[2] || (c[2] = (M) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", Ii, [
            e.node.icon ? (t(), a("div", Fi, [
              (t(), a("svg", Ni, [
                l("path", {
                  d: h(ie)(e.node.icon)
                }, null, 8, Ri)
              ]))
            ])) : y("", !0),
            l("div", Ui, [
              l("h3", Hi, f(e.node.label), 1),
              e.node.description ? (t(), a("p", qi, f(e.node.description), 1)) : y("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: _(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...c[24] || (c[24] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : y("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: _(["grid grid-cols-1 gap-4", [x.value, m.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
            key: z,
            node: M,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: _(M.span && M.span >= 2 ? "sm:col-span-2" : ""),
            onChange: c[3] || (c[3] = (R, E) => r("change", R, E)),
            onAffixAction: c[4] || (c[4] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "card" && w(e.node) ? (t(), a("section", Ki, [
        l("header", Gi, [
          l("h3", Wi, f(e.node.title), 1),
          e.node.description ? (t(), a("p", Zi, f(e.node.description), 1)) : y("", !0)
        ]),
        l("div", {
          class: _(["grid grid-cols-1 gap-4 px-4 py-4", x.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
            key: z,
            node: M,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[5] || (c[5] = (R, E) => r("change", R, E)),
            onAffixAction: c[6] || (c[6] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && w(e.node) ? (t(), a("div", {
        key: 3,
        class: _(["grid grid-cols-1 gap-4", A(e.node)])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
          key: z,
          node: M,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: _(M.component === "column" ? C(M.span) : ""),
          onChange: c[7] || (c[7] = (R, E) => r("change", R, E)),
          onAffixAction: c[8] || (c[8] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && w(e.node) ? (t(), a("div", Ji, [
        (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
          key: z,
          node: M,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: c[9] || (c[9] = (R, E) => r("change", R, E)),
          onAffixAction: c[10] || (c[10] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), a("div", {
        key: 5,
        class: _(["grid grid-cols-1 gap-4", x.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
          key: z,
          node: M,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: c[11] || (c[11] = (R, E) => r("change", R, E)),
          onAffixAction: c[12] || (c[12] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), a("div", {
        key: 6,
        class: _(["flex", b.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
          key: z,
          node: M,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: c[13] || (c[13] = (R, E) => r("change", R, E)),
          onAffixAction: c[14] || (c[14] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", Yi, [
        l("legend", Xi, f(e.node.label), 1),
        e.node.description ? (t(), a("p", Qi, f(e.node.description), 1)) : y("", !0),
        l("div", {
          class: _(["grid grid-cols-1 gap-4", x.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
            key: z,
            node: M,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[15] || (c[15] = (R, E) => r("change", R, E)),
            onAffixAction: c[16] || (c[16] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), a("div", {
        key: 8,
        role: "note",
        class: _(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", ed, f(e.node.title), 1)) : y("", !0),
        l("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 9,
        class: _(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("div", {
          class: _(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => (t(), a("button", {
            key: z,
            type: "button",
            class: _([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === z ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (R) => i.value = z
          }, [
            U(f(M.label) + " ", 1),
            k(M) ? (t(), a("span", ad)) : y("", !0)
          ], 10, td))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => ue((t(), a("div", {
          key: z,
          class: _(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(M.children ?? [], (R, E) => (t(), T(S, {
            key: E,
            node: R,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[17] || (c[17] = (ee, H) => r("change", ee, H)),
            onAffixAction: c[18] || (c[18] = (ee, H) => r("affix-action", ee, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Te, i.value === z]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), a("div", {
        key: 10,
        class: _(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        I(er, {
          class: _(["p-4", m.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (M) => k((e.node.children ?? [])[M]),
          "onUpdate:activeStep": c[19] || (c[19] = (M) => d.value = M)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => ue((t(), a("div", {
          key: z,
          class: _(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(M.children ?? [], (R, E) => (t(), T(S, {
            key: E,
            node: R,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[20] || (c[20] = (ee, H) => r("change", ee, H)),
            onAffixAction: c[21] || (c[21] = (ee, H) => r("affix-action", ee, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Te, d.value === z]
        ])), 128)),
        l("div", nd, [
          l("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: c[22] || (c[22] = (M) => d.value--)
          }, " Back ", 8, ld),
          d.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: c[23] || (c[23] = (M) => d.value++)
          }, " Next ")) : y("", !0)
        ])
      ], 2)) : y("", !0);
    };
  }
}), Cw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K({});
    ce(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), T(Ye, {
      open: e.open,
      title: e.title,
      busy: e.processing,
      onClose: u[2] || (u[2] = (m) => r("close"))
    }, {
      footer: j(() => [
        I(se, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (m) => r("close"))
        }, {
          default: j(() => [...u[3] || (u[3] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            U(f(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        l("form", {
          class: "flex flex-col gap-4",
          onSubmit: me(i, ["prevent"])
        }, [
          (t(!0), a(P, null, V(e.form?.nodes ?? [], (m, b) => (t(), T(pa, {
            key: b,
            node: m,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: u[0] || (u[0] = (p, x) => s.value[p] = x)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), od = ["title"], sd = ["aria-label"], rd = ["d"], id = { class: "sr-only" }, dd = /* @__PURE__ */ O({
  __name: "IconCell",
  props: {
    value: {},
    icons: { default: () => ({}) },
    colors: { default: () => ({}) },
    labels: { default: () => ({}) },
    defaultIcon: { default: "dot" }
  },
  setup(e) {
    const o = e, n = {
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
    }, s = $(() => typeof o.value == "boolean" ? o.value ? "1" : "" : o.value === null || o.value === void 0 ? "" : String(o.value)), i = $(() => o.icons[s.value] ?? o.defaultIcon), d = $(() => n[i.value] ?? n.dot), u = $(() => r[o.colors[s.value] ?? "neutral"] ?? r.neutral), m = $(() => o.labels[s.value] ?? String(o.value ?? "-"));
    return (b, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: m.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: _(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": m.value
      }, [
        l("path", { d: d.value }, null, 8, rd)
      ], 10, sd)),
      l("span", id, f(m.value), 1)
    ], 8, od));
  }
}), ud = ["src"], cd = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, fd = /* @__PURE__ */ O({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const o = e, n = K(!1);
    ce(
      () => o.src,
      () => n.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = $(() => {
      const d = typeof o.src == "string" ? o.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = $(() => {
      const d = typeof o.fallbackText == "string" ? o.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), a("span", {
      class: _(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (m) => n.value = !0)
      }, null, 40, ud)) : e.fallback === "initials" ? (t(), a(P, { key: 1 }, [
        U(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", cd, [...u[1] || (u[1] = [
        l("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : y("", !0)
    ], 2));
  }
}), md = {
  key: 0,
  class: "text-muted-foreground"
}, pd = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, vd = {
  key: 0,
  class: "font-mono text-xs"
}, gd = {
  key: 1,
  class: "sr-only"
}, hd = /* @__PURE__ */ O({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = $(() => {
      const s = (o.value ?? "").trim();
      return n.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", md, "-")) : (t(), a("span", pd, [
      l("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", vd, f(r.value), 1)) : (t(), a("span", gd, f(r.value), 1))
    ]));
  }
}), bd = { class: "inline-flex items-center" }, xd = ["checked", "aria-label"], yd = { class: "sr-only" }, Sw = /* @__PURE__ */ O({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const o = e, n = $(() => {
      const s = o.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = $(
      () => n.value ? o.trueLabel ?? "Yes" : o.falseLabel ?? "No"
    );
    return (s, i) => (t(), a("span", bd, [
      l("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, xd),
      l("span", yd, f(r.value), 1)
    ]));
  }
}), kd = {
  key: 0,
  class: "text-muted-foreground"
}, $d = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, Mw = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = $(
      () => String(o.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", $d, f(n.value), 1)) : (t(), a("span", kd, "—"));
  }
}), wd = {
  key: 0,
  class: "font-mono text-xs"
}, Cd = {
  key: 1,
  class: "text-muted-foreground"
}, Sd = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, Bw = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = $(
      () => o.value && typeof o.value == "object" && !Array.isArray(o.value) ? Object.keys(o.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", wd, f(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", Cd, "—")) : (t(), a("span", Sd, f(n.value.length) + " " + f(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Md = ["aria-checked", "aria-label", "title", "disabled"], Bd = ["value", "disabled"], Ad = ["value"], Aw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.value === !0 || n.value === 1 || n.value === "1"), i = $(() => n.busy || n.disabled), d = $(
      () => s.value ? n.onLabel ?? "Enabled" : n.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function m(b) {
      const p = b.target.value;
      p !== String(n.value ?? "") && r("change", p);
    }
    return (b, p) => e.type === "toggle" ? (t(), a("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: _(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: me(u, ["stop"])
    }, [
      l("span", {
        class: _(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Md)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = me(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), a(P, null, V(e.options, (x, A) => (t(), a("option", {
        key: A,
        value: A
      }, f(x), 9, Ad))), 128))
    ], 40, Bd));
  }
}), zd = ["data-variant"], Pd = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", We = /* @__PURE__ */ O({
  __name: "PkBadge",
  props: {
    variant: { default: "default" },
    class: {}
  },
  setup(e) {
    const o = e, n = {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white dark:bg-destructive/60",
      outline: "text-foreground",
      success: "border-transparent bg-success text-success-foreground",
      warning: "border-transparent bg-warning text-warning-foreground",
      info: "border-transparent bg-info text-info-foreground"
    }, r = $(
      () => [Pd, n[o.variant], o.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: _(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, zd));
  }
}), Et = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function _d(e) {
  return e != null && e !== "";
}
function Od(e) {
  const o = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" ")) : (e.key === "name" && o.push("font-medium"), e.mono && o.push("font-mono text-xs"), e.muted && o.push("text-muted-foreground"), e.transform === "upper" && o.push("uppercase"), e.transform === "lower" && o.push("lowercase"), e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" "));
}
function zw(e) {
  const o = $(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Od(s)
    }))
  ), n = $(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = n.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), m = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Et[m] ?? "outline";
  }
  return { columns: o, byKey: n, badgeVariant: r };
}
const jd = ["disabled", "aria-label", "aria-busy"], Ld = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vd = ["d"], Td = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Dd = ["disabled", "onClick"], Ed = {
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
}, Pw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.busy || n.disabled), i = $(() => String(n.value ?? "")), d = $(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function u(x) {
      return typeof x == "boolean" ? x ? "1" : "" : String(x ?? "");
    }
    function m(x) {
      const A = n.colors[u(x)] ?? n.defaultColor ?? "neutral";
      return Et[A] ?? "outline";
    }
    function b(x) {
      return n.options[x] ?? x;
    }
    function p(x, A) {
      if (s.value || x === i.value) {
        A();
        return;
      }
      r("change", x), A();
    }
    return (x, A) => (t(), a("div", {
      onClick: A[0] || (A[0] = me(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(We, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          U(f(b(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(Ne, {
        key: 0,
        align: "start"
      }, {
        trigger: j(() => [
          l("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": d.value,
            "aria-busy": e.busy
          }, [
            I(We, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(b(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", Ld, [
              l("path", {
                d: h(ie)("chevron-down")
              }, null, 8, Vd)
            ]))
          ], 8, jd)
        ]),
        panel: j(({ close: C }) => [
          l("div", Td, f(d.value), 1),
          (t(!0), a(P, null, V(e.options, (k, w) => (t(), a("button", {
            key: w,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (g) => p(String(w), C)
          }, [
            I(We, {
              variant: m(w),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(k), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(w) === i.value ? (t(), a("svg", Ed, [
              l("path", {
                d: h(ie)("check")
              }, null, 8, Id)
            ])) : (t(), a("span", Fd))
          ], 8, Dd))), 128))
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
}, Hd = ["d"], qd = ["href"], Kd = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gd = ["d"], Wd = ["disabled", "onClick"], Zd = ["d"], Jd = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Yd = ["disabled", "onClick"], Xd = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qd = ["d"], _w = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(null), d = K(null), u = $(() => r.groups.flatMap((g) => g.actions)), m = $(() => u.value.filter((g) => !g.destructive)), b = $(() => u.value.filter((g) => g.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function x(g) {
      return p[g.color ?? "gray"] ?? p.gray;
    }
    const A = $(() => u.value.length === 0);
    function C(g) {
      s("run", g);
    }
    function k(g) {
      A.value || (g.preventDefault(), i.value?.openAt(g.clientX, g.clientY));
    }
    function w(g) {
      if (g.key !== "ArrowDown" && g.key !== "ArrowUp")
        return;
      const v = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      g.preventDefault();
      const c = v.indexOf(document.activeElement), S = g.key === "ArrowDown" ? 1 : -1, M = (c + S + v.length) % v.length;
      v[M]?.focus();
    }
    return o({ openContextMenu: k }), (g, v) => (t(), a("div", Nd, [
      A.value ? y("", !0) : (t(), T(Ne, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: j(() => [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), a("svg", Ud, [
              l("path", {
                d: h(ie)("more-vertical")
              }, null, 8, Hd)
            ]))
          ], 8, Rd)
        ]),
        panel: j(() => [
          l("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: w
          }, [
            (t(!0), a(P, null, V(m.value, (c) => (t(), a(P, {
              key: c.key
            }, [
              c.link ? (t(), a("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", x(c)])
              }, [
                (t(), a("svg", Kd, [
                  l("path", {
                    d: h(ie)(c.icon)
                  }, null, 8, Gd)
                ])),
                U(" " + f(c.label), 1)
              ], 10, qd)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", x(c)]),
                disabled: e.busy === c.key,
                onClick: (S) => C(c)
              }, [
                (t(), a("svg", {
                  class: _(["size-4 shrink-0", e.busy === c.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  l("path", {
                    d: h(ie)(c.icon)
                  }, null, 8, Zd)
                ], 2)),
                U(" " + f(c.label), 1)
              ], 10, Wd))
            ], 64))), 128)),
            b.value.length ? (t(), a("div", Jd, [
              (t(!0), a(P, null, V(b.value, (c) => (t(), a("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (S) => C(c)
              }, [
                (t(), a("svg", Xd, [
                  l("path", {
                    d: h(ie)(c.icon ?? "trash")
                  }, null, 8, Qd)
                ])),
                U(" " + f(c.label), 1)
              ], 8, Yd))), 128))
            ])) : y("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), kt = {
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
}, $t = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, ot = 12, st = 20, eu = [0, 0.25, 0.5, 0.75, 1], It = "alxtexhpanel.appearance", Ae = {
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
}, Le = K({ ...Ae });
let Kt = !1;
const tu = "alxtexhpanel.appearance.vars";
function wt(e) {
  return e.theme === "dark";
}
const Gt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, Wt = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function au(e) {
  const o = kt[e.primary] ?? kt.slate, n = $t[e.surface] ?? $t.neutral, r = n.chroma, s = n.hue, d = wt(e) ? {
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
    "--primary": o.value,
    "--primary-foreground": o.foreground,
    "--ring": o.value,
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
    "--pk-row-padding": Gt[e.density] ?? Gt.comfortable,
    "--pk-form-gap": Wt[e.density] ?? Wt.comfortable
  };
}
function Ft() {
  if (typeof window > "u")
    return { ...Ae };
  try {
    const e = localStorage.getItem(It);
    if (!e)
      return { ...Ae };
    const o = { ...Ae, ...JSON.parse(e) };
    o.theme === "system" && (o.theme = Ae.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof o.fontSize == "string" && (o.fontSize = n[o.fontSize] ?? Ae.fontSize), (typeof o.fontSize != "number" || Number.isNaN(o.fontSize) || o.fontSize < ot || o.fontSize > st) && (o.fontSize = Ae.fontSize), o;
  } catch {
    return { ...Ae };
  }
}
function Ow(e) {
  const o = Ft(), n = e ? { ...o, ...e } : o;
  if (Le.value = n, Ct(n), e)
    try {
      localStorage.setItem(It, JSON.stringify(n));
    } catch {
    }
}
let va = null;
function jw(e) {
  va = e;
}
let ga = {};
function nu(e) {
  if (ga = e, !(typeof document > "u") && !Ft().primaryChosen)
    for (const [o, n] of Object.entries(e))
      document.documentElement.style.setProperty(o, n);
}
function Ct(e) {
  if (typeof document > "u")
    return;
  const o = document.documentElement, n = { ...au(e), ...e.primaryChosen ? {} : ga };
  o.classList.toggle("dark", wt(e));
  for (const [r, s] of Object.entries(n))
    o.style.setProperty(r, s);
  o.dataset.sidebar = e.sidebarSide, o.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      tu,
      JSON.stringify({ dark: wt(e), theme: e.theme, vars: n })
    );
  } catch {
  }
}
function ha() {
  function e(r) {
    Ct(r);
  }
  function o(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Le.value = { ...Le.value, ...r, ...s };
    try {
      localStorage.setItem(It, JSON.stringify(Le.value));
    } catch {
    }
    e(Le.value), va?.({ ...r, ...s });
  }
  function n() {
    o({ ...Ae });
  }
  return pe(() => {
    Kt || (Kt = !0, Le.value = Ft(), Ct(Le.value));
  }), {
    appearance: $(() => Le.value),
    set: o,
    reset: n,
    PRIMARY_COLORS: kt,
    SURFACE_TINTS: $t,
    FONT_SIZE_MIN: ot,
    FONT_SIZE_MAX: st,
    RADIUS_OPTIONS: eu
  };
}
const lu = { class: "flex items-center justify-between border-b px-4 py-3" }, ou = { class: "flex items-center gap-2" }, su = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, ru = { class: "flex flex-col gap-2" }, iu = { class: "grid grid-cols-8 gap-2" }, du = ["title", "aria-label", "aria-pressed", "onClick"], uu = { class: "flex flex-col gap-2" }, cu = { class: "grid grid-cols-8 gap-2" }, fu = ["title", "aria-label", "aria-pressed", "onClick"], mu = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, pu = { class: "flex flex-col gap-2" }, vu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, gu = ["aria-pressed", "aria-label", "onClick"], hu = { class: "text-sm font-semibold" }, bu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, xu = ["onClick"], yu = { class: "flex flex-col gap-2" }, ku = { class: "flex items-center justify-between" }, $u = { class: "text-muted-foreground text-xs tabular-nums" }, wu = { class: "flex items-center gap-2" }, Cu = ["disabled"], Su = ["min", "max", "value"], Mu = ["disabled"], Lw = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: o, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = ha(), u = K(!1), m = $(() => o.value.sidebarSide === "right"), b = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], x = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], A = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], C = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], k = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function w(g, v) {
      return `oklch(0.72 ${v * 3} ${g})`;
    }
    return (g, v) => (t(), a(P, null, [
      l("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (c) => u.value = !0)
      }, [...v[7] || (v[7] = [
        Bt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Ue, { to: "body" }, [
        I(Ve, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            u.value ? (t(), a("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: v[1] || (v[1] = (c) => u.value = !1)
            })) : y("", !0)
          ]),
          _: 1
        }),
        I(Ve, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": m.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": m.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            u.value ? (t(), a("aside", {
              key: 0,
              class: _(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              l("header", lu, [
                v[9] || (v[9] = l("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                l("div", ou, [
                  l("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => h(r) && h(r)(...c))
                  }, " Reset "),
                  l("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: v[3] || (v[3] = (c) => u.value = !1)
                  }, [...v[8] || (v[8] = [
                    l("svg", {
                      viewBox: "0 0 24 24",
                      class: "size-4",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      l("path", { d: "M18 6 6 18M6 6l12 12" })
                    ], -1)
                  ])])
                ])
              ]),
              l("div", su, [
                l("section", ru, [
                  v[11] || (v[11] = l("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  l("div", iu, [
                    (t(!0), a(P, null, V(h(s), (c, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": h(o).primary === S,
                      onClick: (M) => h(n)({ primary: S })
                    }, [
                      h(o).primary === S ? (t(), a("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ne({ color: c.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...v[10] || (v[10] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : y("", !0)
                    ], 12, du))), 128))
                  ])
                ]),
                l("section", uu, [
                  v[13] || (v[13] = l("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  l("div", cu, [
                    (t(!0), a(P, null, V(h(i), (c, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: w(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": h(o).surface === S,
                      onClick: (M) => h(n)({ surface: S })
                    }, [
                      h(o).surface === S ? (t(), a("svg", mu, [...v[12] || (v[12] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : y("", !0)
                    ], 12, fu))), 128))
                  ])
                ]),
                l("section", pu, [
                  v[14] || (v[14] = l("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  l("div", vu, [
                    (t(!0), a(P, null, V(h(d), (c) => (t(), a("button", {
                      key: c,
                      type: "button",
                      class: _([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        h(o).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": h(o).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (S) => h(n)({ radius: c })
                    }, [
                      l("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      U(" " + f(c), 1)
                    ], 10, gu))), 128))
                  ])
                ]),
                (t(!0), a(P, null, V([
                  { label: "Color scheme", key: "theme", options: b },
                  { label: "Card style", key: "cardStyle", options: x },
                  { label: "Density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: A },
                  { label: "Content layout", key: "contentLayout", options: C },
                  { label: "Menu style", key: "menuStyle", options: k }
                ], (c) => (t(), a("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  l("h3", hu, f(c.label), 1),
                  l("div", bu, [
                    (t(!0), a(P, null, V(c.options, (S) => (t(), a("button", {
                      key: String(S.value),
                      type: "button",
                      class: _([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        h(o)[c.key] === S.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (M) => h(n)({ [c.key]: S.value })
                    }, f(S.label), 11, xu))), 128))
                  ])
                ]))), 128)),
                l("section", yu, [
                  l("div", ku, [
                    v[15] || (v[15] = l("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    l("span", $u, f(h(o).fontSize) + "px", 1)
                  ]),
                  l("div", wu, [
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: h(o).fontSize <= h(ot),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => h(n)({ fontSize: h(o).fontSize - 1 }))
                    }, " − ", 8, Cu),
                    l("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: h(ot),
                      max: h(st),
                      value: h(o).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (c) => h(n)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, Su),
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: h(o).fontSize >= h(st),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => h(n)({ fontSize: h(o).fontSize + 1 }))
                    }, " + ", 8, Mu)
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
}), Bu = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Au = { class: "flex items-stretch" }, zu = ["href", "aria-current"], Pu = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, _u = ["d"], Ou = { class: "w-full truncate text-center" }, ju = {
  key: 0,
  class: "flex-1"
}, Lu = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Vu = ["d"], Tu = { class: "w-full truncate text-center" }, pt = 5, Vw = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.items.length <= pt ? n.items : n.items.slice(0, pt - 1)
    ), i = $(() => n.items.length > pt);
    function d(u) {
      return u === "/" ? n.current === "/" : n.current === u || n.current.startsWith(`${u}/`);
    }
    return (u, m) => (t(), a("nav", Bu, [
      l("ul", Au, [
        (t(!0), a(P, null, V(s.value, (b) => (t(), a("li", {
          key: b.key,
          class: "flex-1"
        }, [
          l("a", {
            href: b.href,
            class: _([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(b.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(b.href) ? "page" : void 0
          }, [
            (t(), a("svg", Pu, [
              l("path", {
                d: h(ie)(b.icon)
              }, null, 8, _u)
            ])),
            l("span", Ou, f(b.title), 1)
          ], 10, zu)
        ]))), 128)),
        i.value ? (t(), a("li", ju, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (b) => r("more"))
          }, [
            (t(), a("svg", Lu, [
              l("path", {
                d: h(ie)("more-horizontal")
              }, null, 8, Vu)
            ])),
            l("span", Tu, f(e.moreLabel), 1)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), Du = ["value"], Eu = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", ge = /* @__PURE__ */ O({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    return (s, i) => (t(), a("input", {
      "data-slot": "input",
      value: n.modelValue ?? n.defaultValue,
      class: _([Eu, n.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, Du));
  }
}), Iu = ["for"], ke = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (o, n) => (t(), a("label", {
      "data-slot": "label",
      for: o.$props.for,
      class: _([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.$props.class
      ])
    }, [
      q(o.$slots, "default")
    ], 10, Iu));
  }
}), Tw = /* @__PURE__ */ O({
  __name: "PkSpinner",
  props: {
    class: {}
  },
  setup(e) {
    return (o, n) => (t(), a("svg", {
      role: "status",
      "aria-label": "Loading",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      class: _(["size-4 animate-spin", o.$props.class])
    }, [...n[0] || (n[0] = [
      l("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      l("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), Fu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Nu = ["id", "name", "value", "disabled", "maxlength"], Ru = ["data-active"], Uu = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Dw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!1), i = K(null);
    pe(() => {
      n.autofocus && i.value?.focus();
    });
    const d = $(
      () => Array.from({ length: n.length }, (b, p) => n.modelValue[p] ?? "")
    ), u = $(() => Math.min(n.modelValue.length, n.length - 1));
    function m(b) {
      const p = b.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (b, p) => (t(), a("div", Fu, [
      l("input", {
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
        onInput: m,
        onFocus: p[0] || (p[0] = (x) => s.value = !0),
        onBlur: p[1] || (p[1] = (x) => s.value = !1)
      }, null, 40, Nu),
      (t(!0), a(P, null, V(d.value, (x, A) => (t(), a("div", {
        key: A,
        "data-slot": "input-otp-slot",
        "data-active": s.value && A === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(f(x) + " ", 1),
        s.value && A === u.value && x === "" ? (t(), a("div", Uu, [...p[2] || (p[2] = [
          l("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : y("", !0)
      ], 8, Ru))), 128))
    ]));
  }
}), Hu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Pe = /* @__PURE__ */ O({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (o, n) => (t(), a("header", {
      class: _(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      l("h2", {
        class: _(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), a("p", Hu, f(e.description), 1)) : y("", !0)
    ], 2));
  }
}), qu = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Ku = { class: "min-w-0 space-y-1" }, Gu = { class: "flex flex-wrap items-center gap-2.5" }, Wu = { class: "text-2xl font-semibold tracking-tight" }, Zu = {
  key: 0,
  class: "flex items-center gap-2"
}, Ju = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Yu = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, Ew = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (o, n) => (t(), a("header", qu, [
      l("div", Ku, [
        l("div", Gu, [
          l("h1", Wu, f(e.title), 1),
          o.$slots.status ? (t(), a("div", Zu, [
            q(o.$slots, "status")
          ])) : y("", !0)
        ]),
        e.purpose ? (t(), a("p", Ju, f(e.purpose), 1)) : y("", !0)
      ]),
      o.$slots.actions ? (t(), a("div", Yu, [
        q(o.$slots, "actions")
      ])) : y("", !0)
    ]));
  }
}), Xu = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: _(h(Q)(h(tc)({ variant: e.variant }), o.class)),
      role: "alert"
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Qu = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: _(h(Q)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), ec = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: _(h(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), tc = jt(
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
), ac = { class: "list-inside list-disc text-sm" }, Iw = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const o = e, n = $(() => Array.from(new Set(o.errors)));
    return (r, s) => (t(), T(h(Xu), { variant: "destructive" }, {
      default: j(() => [
        I(h(wn), { class: "size-4" }),
        I(h(ec), null, {
          default: j(() => [
            U(f(e.title), 1)
          ]),
          _: 1
        }),
        I(h(Qu), null, {
          default: j(() => [
            l("ul", ac, [
              (t(!0), a(P, null, V(n.value, (i, d) => (t(), a("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ba = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, s = ca(n, "modelValue", o, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, d) => ue((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => ja(s) ? s.value = u : null),
      "data-slot": "input",
      class: _(
        h(Q)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [ye, h(s)]
    ]);
  }
}), nc = { class: "relative" }, lc = ["aria-label"], Fw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: o }) {
    const n = e, r = K(!1), s = La("inputRef");
    return o({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", nc, [
      I(h(ba), le({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: h(Q)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      l("button", {
        type: "button",
        class: _(
          h(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(h(Cn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(h(Sn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, lc)
    ]));
  }
}), xa = "@container min-w-0", oc = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", Nw = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", sc = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", De = "w-full min-w-0 px-4 py-6 sm:px-6", Rw = "w-full min-w-0 p-3 sm:p-4", Uw = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", Hw = "w-full max-w-5xl";
function qw(e, o) {
  const n = Math.max(1, Math.floor(o));
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
    s.forEach((u, m) => {
      d[m % n].push(u);
    }), r.push({ type: "columns", columns: d }), s = [];
  };
  for (const d of e)
    (d.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
const ya = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", rc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", ic = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function dc(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || o.endsWith(".jpg") || o.endsWith(".jpeg");
}
function uc(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || o.endsWith(".png") || o.endsWith(".webp");
}
async function cc(e) {
  const o = URL.createObjectURL(e);
  try {
    const n = await fc(o), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
    r.width = s, r.height = i;
    const d = r.getContext("2d", { willReadFrequently: !0 });
    if (!d)
      return !1;
    d.drawImage(n, 0, 0);
    const { data: u } = d.getImageData(0, 0, s, i);
    for (let m = 3; m < u.length; m += 4)
      if ((u[m] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(o);
  }
}
function fc(e) {
  return new Promise((o, n) => {
    const r = new Image();
    r.onload = () => o(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function mc(e) {
  if (dc(e))
    throw new Error(ic);
  if (!uc(e))
    throw new Error(ya);
  if (!await cc(e))
    throw new Error(rc);
}
const Kw = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(He), le({ "data-slot": "sheet-close" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pc = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h(la), le({
      "data-slot": "sheet-description",
      class: h(Q)("text-muted-foreground text-sm", o.class)
    }, h(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gw = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: _(h(Q)("mt-auto flex flex-col gap-2 p-4", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), vc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: _(h(Q)("flex flex-col gap-1.5 p-4", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), gc = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h(oa), le({
      "data-slot": "sheet-title",
      class: h(Q)("text-foreground font-semibold", o.class)
    }, h(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ww = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(sa), le({ "data-slot": "sheet-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zt = "sidebar_state", hc = 3600 * 24 * 7, bc = "16rem", xc = "18rem", yc = "3rem", kc = "b", [dt, $c] = Ua("Sidebar"), wc = { class: "flex h-full w-full flex-col" }, Cc = ["data-state", "data-collapsible", "data-variant", "data-side"], Sc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Zw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = dt();
    return (d, u) => e.collapsible === "none" ? (t(), a("div", le({
      key: 0,
      "data-slot": "sidebar",
      class: h(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o.class
      )
    }, d.$attrs), [
      q(d.$slots, "default")
    ], 16)) : h(n) ? (t(), T(h(Tt), le({
      key: 1,
      open: h(s)
    }, d.$attrs, { "onUpdate:open": h(i) }), {
      default: j(() => [
        I(h(Dt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": h(xc)
          })
        }, {
          default: j(() => [
            I(vc, { class: "sr-only" }, {
              default: j(() => [
                I(gc, null, {
                  default: j(() => [...u[0] || (u[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(pc, null, {
                  default: j(() => [...u[1] || (u[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l("div", wc, [
              q(d.$slots, "default")
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
      "data-state": h(r),
      "data-collapsible": h(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      l("div", {
        class: _(
          h(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      l("div", le({
        class: h(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          o.class
        )
      }, d.$attrs), [
        l("div", Sc, [
          q(d.$slots, "default")
        ])
      ], 16)
    ], 8, Cc));
  }
}), Jw = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: _(
        h(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Yw = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: _(h(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Xw = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: _(h(Q)("relative flex w-full min-w-0 flex-col p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Qw = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(qe), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: _(
        h(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), e4 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: _(h(Q)("w-full text-sm", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), t4 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(qe), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: _(
        h(Q)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          o.class
        )
      )
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), a4 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: _(h(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), n4 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(ba), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: _(h(Q)("bg-background h-8 w-full shadow-none", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), l4 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: _(
        h(Q)(
          "bg-background relative flex min-h-0 w-full flex-1 flex-col overflow-y-auto",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          // Side-aware insets. The upstream component hardcodes ml-0, so with the
          // sidebar on the right the content kept a left gutter it did not need and
          // reserved nothing on the right - the panel then overlapped the table.
          "md:peer-data-[variant=inset]:peer-data-[side=left]:ml-0 md:peer-data-[variant=inset]:peer-data-[side=left]:peer-data-[state=collapsed]:ml-2",
          "md:peer-data-[variant=inset]:peer-data-[side=right]:mr-0 md:peer-data-[variant=inset]:peer-data-[side=right]:peer-data-[state=collapsed]:mr-2",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), o4 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: _(h(Q)("flex w-full min-w-0 flex-col gap-1", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), s4 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(qe), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: _(
        h(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          o.class
        )
      ),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), r4 = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: _(
        h(Q)(
          "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Mc = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(h(Ha), le({ "data-slot": "tooltip" }, h(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), Bc = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(qa), null, {
      default: j(() => [
        I(h(Ka), le({ "data-slot": "tooltip-content" }, { ...h(i), ...d.$attrs }, {
          class: h(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default"),
            I(h(Ga), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), i4 = /* @__PURE__ */ O({
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
    const o = e;
    return (n, r) => (t(), T(h(ra), we(je(o)), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ac = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(Wa), le({ "data-slot": "tooltip-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jt = /* @__PURE__ */ O({
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
    const o = e;
    return (n, r) => (t(), T(h(qe), le({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: h(Q)(h(Pc)({ variant: e.variant, size: e.size }), o.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), d4 = /* @__PURE__ */ O({
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
    const o = e, { isMobile: n, state: r } = dt(), s = de(o, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(h(Mc), { key: 1 }, {
      default: j(() => [
        I(h(Ac), { "as-child": "" }, {
          default: j(() => [
            I(Jt, we(je({ ...h(s), ...i.$attrs })), {
              default: j(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(h(Bc), {
          side: "right",
          align: "center",
          hidden: h(r) !== "collapsed" || h(n)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), a(P, { key: 0 }, [
              U(f(e.tooltip), 1)
            ], 64)) : (t(), T(xe(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(Jt, we(le({ key: 0 }, { ...h(s), ...i.$attrs })), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u4 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: _(h(Q)("group/menu-item relative", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Yt = "animate-pulse rounded-md bg-primary/10", c4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = $(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: _(h(Q)("flex h-8 items-center gap-2 rounded-md px-2", o.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: _(h(Q)(Yt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : y("", !0),
      l("div", {
        class: _(h(Q)(Yt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), f4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: _(
        h(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), m4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(qe), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: _(
        h(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-primary/10 data-[active=true]:text-primary",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), p4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: _(h(Q)("group/menu-sub-item relative", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), v4 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ln?.cookie.includes(`${Zt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = On("(max-width: 767px)"), i = K(!1), d = ca(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(x) {
      d.value = x, document.cookie = `${Zt}=${d.value}; path=/; max-age=${hc}`;
    }
    function m(x) {
      i.value = x;
    }
    function b() {
      return s.value ? m(!i.value) : u(!d.value);
    }
    jn("keydown", (x) => {
      x.key === kc && (x.metaKey || x.ctrlKey) && (x.preventDefault(), b());
    });
    const p = $(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return $c({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: b
    }), (x, A) => (t(), T(h(ra), { "delay-duration": 0 }, {
      default: j(() => [
        l("div", le({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": h(bc),
            "--sidebar-width-icon": h(yc)
          },
          class: h(Q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, x.$attrs), [
          q(x.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), g4 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { toggleSidebar: n } = dt();
    return (r, s) => (t(), a("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: _(
        h(Q)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          o.class
        )
      ),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...i) => h(n) && h(n)(...i))
    }, [
      q(r.$slots, "default")
    ], 2));
  }
}), zc = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h(Za), le({ "data-slot": "separator" }, h(n), {
      class: h(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        o.class
      )
    }), null, 16, ["class"]));
  }
}), h4 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(zc), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: _(h(Q)("bg-sidebar-border mx-2 w-auto", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), b4 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, toggleSidebar: s } = dt();
    return (i, d) => (t(), T(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: _(h(Q)("h-7 w-7", o.class)),
      onClick: h(s)
    }, {
      default: j(() => [
        h(n) || h(r) === "collapsed" ? (t(), T(h(Mn), { key: 0 })) : (t(), T(h(Bn), { key: 1 })),
        d[0] || (d[0] = l("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Pc = jt(
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
), x4 = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(h(Ja), le({ "data-slot": "dropdown-menu" }, h(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), _c = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, y4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(Ya), le({ "data-slot": "dropdown-menu-checkbox-item" }, h(i), {
      class: h(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", _c, [
          I(h(ia), null, {
            default: j(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(h(da), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(Xa), null, {
      default: j(() => [
        I(h(Qa), le({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...h(i) }, {
          class: h(Q)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), $4 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(en), le({ "data-slot": "dropdown-menu-group" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w4 = /* @__PURE__ */ O({
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
    const o = e, n = de(o, "inset", "variant", "class"), r = Ce(n);
    return (s, i) => (t(), T(h(tn), le({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, h(r), {
      class: h(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        o.class
      )
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), C4 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const o = e, n = de(o, "class", "inset"), r = Ce(n);
    return (s, i) => (t(), T(h(an), le({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, h(r), {
      class: h(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), S4 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(h(nn), le({ "data-slot": "dropdown-menu-radio-group" }, h(s)), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oc = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, M4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(ln), le({ "data-slot": "dropdown-menu-radio-item" }, h(i), {
      class: h(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", Oc, [
          I(h(ia), null, {
            default: j(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(h(An), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h(on), le({ "data-slot": "dropdown-menu-separator" }, h(n), {
      class: h(Q)("bg-border -mx-1 my-1 h-px", o.class)
    }), null, 16, ["class"]));
  }
}), A4 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: _(h(Q)("text-muted-foreground ml-auto text-xs tracking-widest", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), z4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(h(sn), le({ "data-slot": "dropdown-menu-sub" }, h(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), P4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(rn), le({ "data-slot": "dropdown-menu-sub-content" }, h(i), {
      class: h(Q)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: j(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _4 = /* @__PURE__ */ O({
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
    const o = e, n = de(o, "class", "inset"), r = Ce(n);
    return (s, i) => (t(), T(h(dn), le({ "data-slot": "dropdown-menu-sub-trigger" }, h(r), {
      "data-inset": e.inset ? "" : void 0,
      class: h(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        o.class
      )
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        I(h(ua), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), O4 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ce(e);
    return (r, s) => (t(), T(h(un), le({ "data-slot": "dropdown-menu-trigger" }, h(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), j4 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(cn), {
      "data-slot": "avatar",
      class: _(h(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), L4 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h(fn), le({ "data-slot": "avatar-fallback" }, h(n), {
      class: h(Q)("bg-muted flex size-full items-center justify-center rounded-full", o.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V4 = /* @__PURE__ */ O({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(mn), le({ "data-slot": "avatar-image" }, o, { class: "aspect-square size-full" }), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T4 = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: _(o.class)
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), D4 = /* @__PURE__ */ O({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: _(h(Q)("flex size-9 items-center justify-center", o.class))
    }, [
      q(n.$slots, "default", {}, () => [
        I(h(zn), { class: "size-4" })
      ]),
      r[0] || (r[0] = l("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), E4 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: _(h(Q)("inline-flex items-center gap-1.5", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), I4 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(qe), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: _(h(Q)("hover:text-foreground transition-colors", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), F4 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: _(
        h(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), N4 = /* @__PURE__ */ O({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: _(h(Q)("text-foreground font-normal", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), R4 = /* @__PURE__ */ O({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: _(h(Q)("[&>svg]:size-3.5", o.class))
    }, [
      q(n.$slots, "default", {}, () => [
        I(h(ua))
      ])
    ], 2));
  }
}), jc = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Lc = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), a("div", jc, [
      I(h(pn), le({ "data-slot": "navigation-menu-viewport" }, h(r), {
        class: h(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), U4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class", "viewport"), i = ve(s, r);
    return (d, u) => (t(), T(h(vn), le({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, h(i), {
      class: h(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: j((m) => [
        q(d.$slots, "default", we(je(m))),
        e.viewport ? (t(), T(Lc, { key: 0 })) : y("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), H4 = /* @__PURE__ */ O({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(gn), le({ "data-slot": "navigation-menu-content" }, h(i), {
      class: h(Q)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: j(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q4 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(h(hn), le({ "data-slot": "navigation-menu-indicator" }, h(r), {
      class: h(Q)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        o.class
      )
    }), {
      default: j(() => [...i[0] || (i[0] = [
        l("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), K4 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h(bn), le({ "data-slot": "navigation-menu-item" }, h(n), {
      class: h(Q)("relative", o.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G4 = /* @__PURE__ */ O({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(xn), le({ "data-slot": "navigation-menu-link" }, h(i), {
      class: h(Q)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W4 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(h(yn), le({ "data-slot": "navigation-menu-list" }, h(r), {
      class: h(Q)("group flex flex-1 list-none items-center justify-center gap-1", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z4 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(h(kn), le({ "data-slot": "navigation-menu-trigger" }, h(r), {
      class: h(Q)(h(Vc)(), "group", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        I(h(Pn), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vc = jt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), J4 = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(h(na), le({ "data-slot": "dialog" }, h(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), Y4 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(He), le({ "data-slot": "dialog-close" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tc = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h(zt), le({ "data-slot": "dialog-overlay" }, h(n), {
      class: h(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(Pt), null, {
      default: j(() => [
        I(Tc),
        I(h(_t), le({ "data-slot": "dialog-content" }, { ...d.$attrs, ...h(i) }, {
          class: h(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default"),
            e.showCloseButton ? (t(), T(h(He), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                I(h(Ot)),
                u[0] || (u[0] = l("span", { class: "sr-only" }, "Close", -1))
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
}), Q4 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(h(la), le({ "data-slot": "dialog-description" }, h(r), {
      class: h(Q)("text-muted-foreground text-sm", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e5 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: _(h(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", o.class))
    }, [
      q(n.$slots, "default"),
      e.showCloseButton ? (t(), T(h(He), {
        key: 0,
        "as-child": ""
      }, {
        default: j(() => [
          I(se, { variant: "outline" }, {
            default: j(() => [...r[0] || (r[0] = [
              U(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : y("", !0)
    ], 2));
  }
}), t5 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: _(h(Q)("flex flex-col gap-2 text-center sm:text-left", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), a5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = de(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(h(Pt), null, {
      default: j(() => [
        I(h(zt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            I(h(_t), le({
              class: h(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...h(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (m) => {
                const b = m.detail.originalEvent, p = b.target;
                (b.offsetX > p.clientWidth || b.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: j(() => [
                q(d.$slots, "default"),
                I(h(He), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    I(h(Ot), { class: "w-4 h-4" }),
                    u[1] || (u[1] = l("span", { class: "sr-only" }, "Close", -1))
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
}), n5 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(h(oa), le({ "data-slot": "dialog-title" }, h(r), {
      class: h(Q)("text-lg leading-none font-semibold", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l5 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(sa), le({ "data-slot": "dialog-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o5 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(h($n), le({ "data-slot": "label" }, h(n), {
      class: h(Q)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.class
      )
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s5 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(h(_n), {
      role: "status",
      "aria-label": "Loading",
      class: _(h(Q)("size-4 animate-spin", o.class))
    }, null, 8, ["class"]));
  }
}), r5 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: _(
        h(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), i5 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: _(h(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), d5 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: _(h(Q)("px-6", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), u5 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: _(h(Q)("text-muted-foreground text-sm", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), c5 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: _(h(Q)("flex items-center px-6 [.border-t]:pt-6", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), f5 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: _(
        h(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), m5 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: _(h(Q)("leading-none font-semibold", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Dc = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Ec = { class: "flex items-start gap-3" }, Ic = { class: "min-w-0 flex-1" }, Fc = { class: "text-foreground text-sm font-medium" }, Nc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, p5 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(!1), d = K(null), u = K(0);
    Va((b) => (console.error(`[PkBoundary] ${r.label} failed to render`, b), i.value = !0, d.value = b instanceof Error ? b.message : null, s("error", b), !1));
    function m() {
      i.value = !1, d.value = null, u.value++;
    }
    return o({ retry: m }), (b, p) => (t(), a("div", {
      class: _(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", Dc, [
        l("div", Ec, [
          p[1] || (p[1] = l("svg", {
            class: "text-destructive mt-0.5 size-4 shrink-0",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" })
          ], -1)),
          l("div", Ic, [
            l("p", Fc, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), a("p", Nc, f(d.value), 1)) : y("", !0),
            l("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: m
            }, [...p[0] || (p[0] = [
              l("svg", {
                class: "size-3",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                l("path", { d: "M21 2v6h-6M3.5 9a9 9 0 0 1 14.9-3.4L21 8" })
              ], -1),
              U(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? y("", !0) : q(b.$slots, "default", { key: u.value })
    ], 2));
  }
}), Rc = { class: "bg-card rounded-lg border" }, Uc = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Hc = { class: "min-w-0" }, qc = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Kc = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Gc = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Wc = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, v5 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, n) => (t(), a("section", Rc, [
      e.title || e.description || o.$slots.header || o.$slots.actions ? (t(), a("header", Uc, [
        l("div", Hc, [
          q(o.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", qc, f(e.title), 1)) : y("", !0),
            e.description ? (t(), a("p", Kc, f(e.description), 1)) : y("", !0)
          ])
        ]),
        o.$slots.actions ? (t(), a("div", Gc, [
          q(o.$slots, "actions")
        ])) : y("", !0)
      ])) : y("", !0),
      l("div", {
        class: _(e.padded ? "p-4" : "")
      }, [
        q(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (t(), a("footer", Wc, [
        q(o.$slots, "footer")
      ])) : y("", !0)
    ]));
  }
}), ka = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function g5() {
  const e = fa(), o = $(() => e.props.panel?.pageFooter === !0);
  return xt(ka, o), o;
}
const Zc = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Jc = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Yc = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, h5 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const o = e, n = fa(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = $(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = $(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), d = lt(ka, $(() => !1)), u = $(() => !o.host && h(d) === !0);
    return (m, b) => u.value ? y("", !0) : (t(), a("footer", Zc, [
      l("div", Jc, [
        l("p", null, "© " + f(h(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", Yc, [
          (t(!0), a(P, null, V(i.value, (p) => (t(), T(h(Dn), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              U(f(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : y("", !0)
      ])
    ]));
  }
}), Xc = { class: "flex shrink-0 flex-col items-center" }, Qc = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, b5 = /* @__PURE__ */ O({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const o = e, n = $(() => o.kind === "laptop"), r = $(
      () => n.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = $(() => n.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), a("div", Xc, [
      l("div", {
        class: _(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Qc)) : y("", !0),
        l("div", {
          class: _(["size-full overflow-hidden bg-white", s.value])
        }, [
          q(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(P, { key: 0 }, [
        l("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: ne({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        l("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: ne({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : y("", !0)
    ]));
  }
}), ef = { class: "flex flex-col gap-2" }, tf = { class: "min-w-0 flex-1" }, af = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, nf = ["disabled", "aria-label", "onClick"], lf = ["disabled", "aria-label", "onClick"], of = ["disabled", "title", "aria-label", "onClick"], sf = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, rf = ["disabled"], x5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o;
    let s = 0;
    const i = K(d(n.modelValue));
    function d(v) {
      return Array.isArray(v) ? v.map((c) => ({ uid: s++, data: { ...c } })) : [];
    }
    ce(
      () => n.modelValue,
      (v) => {
        JSON.stringify(v ?? null) !== JSON.stringify(u()) && (i.value = d(v));
      }
    );
    function u() {
      const v = [];
      for (const c of i.value) {
        const S = {};
        let M = !1;
        for (const z of n.children) {
          const R = c.data[z.key] ?? null;
          S[z.key] = R, R !== null && R !== "" && !(Array.isArray(R) && R.length === 0) && (M = !0);
        }
        M && v.push(S);
      }
      return v.length ? v : null;
    }
    function m() {
      r("update:modelValue", u());
    }
    const b = $(() => n.maxItems !== null && i.value.length >= n.maxItems), p = $(() => n.minItems !== null && i.value.length <= n.minItems), x = $(() => n.children.length === 1);
    function A() {
      if (b.value || n.disabled)
        return;
      const v = {};
      for (const c of n.children)
        v[c.key] = null;
      i.value.push({ uid: s++, data: v });
    }
    function C(v) {
      i.value = i.value.filter((c) => c.uid !== v), m();
    }
    function k(v, c) {
      const S = v + c;
      if (S < 0 || S >= i.value.length)
        return;
      const M = [...i.value], [z] = M.splice(v, 1);
      M.splice(S, 0, z), i.value = M, m();
    }
    function w(v, c, S) {
      const M = i.value.find((z) => z.uid === v);
      M && (M.data[c] = S, m());
    }
    function g(v, c) {
      return n.errors[`${n.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), a("div", ef, [
      (t(!0), a(P, null, V(i.value, (S, M) => (t(), a("div", {
        key: S.uid,
        class: "flex items-start gap-2"
      }, [
        l("span", {
          class: _(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", x.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(M + 1), 3),
        l("div", tf, [
          x.value ? (t(), T(Re, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: S.data[e.children[0].key],
            error: g(M, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (z) => w(S.uid, e.children[0].key, z)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", af, [
            (t(!0), a(P, null, V(e.children, (z) => (t(), T(Re, {
              key: z.key,
              field: { ...z, disabled: z.disabled || e.disabled },
              value: S.data[z.key],
              error: g(M, z.key),
              options: e.childOptions[z.key] ?? [],
              onChange: (R) => w(S.uid, z.key, R)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        l("div", {
          class: _(["flex shrink-0 items-center gap-0.5", x.value ? "mt-1" : "mt-0"])
        }, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || M === 0,
            "aria-label": `Move ${e.itemLabel} ${M + 1} up`,
            onClick: (z) => k(M, -1)
          }, [...c[0] || (c[0] = [
            l("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "m18 15-6-6-6 6" })
            ], -1)
          ])], 8, nf),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || M === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${M + 1} down`,
            onClick: (z) => k(M, 1)
          }, [...c[1] || (c[1] = [
            l("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "m6 9 6 6 6-6" })
            ], -1)
          ])], 8, lf),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${M + 1}`,
            onClick: (z) => C(S.uid)
          }, [...c[2] || (c[2] = [
            l("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, of)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", sf, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : y("", !0),
      b.value ? y("", !0) : (t(), a("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: A
      }, [
        c[3] || (c[3] = l("svg", {
          class: "size-3.5",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "aria-hidden": "true"
        }, [
          l("path", { d: "M12 5v14M5 12h14" })
        ], -1)),
        U(" Add " + f(e.itemLabel.toLowerCase()), 1)
      ], 8, rf))
    ]));
  }
}), df = { class: "space-y-1" }, uf = { class: "flex items-center gap-1" }, cf = ["disabled", "title", "aria-label", "onClick"], ff = ["aria-pressed"], mf = ["id", "value", "rows", "disabled"], pf = ["innerHTML"], vf = /* @__PURE__ */ O({
  __name: "PkMarkdownInput",
  props: {
    modelValue: { default: "" },
    rows: { default: 12 },
    toolbar: {},
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!1), i = $(() => n.modelValue ?? "");
    function d(x) {
      return x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = $(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(x, A = x) {
      const C = document.getElementById(n.id ?? "");
      if (C === null)
        return;
      const k = C.selectionStart, w = C.selectionEnd, g = i.value.slice(k, w);
      r(
        "update:modelValue",
        `${i.value.slice(0, k)}${x}${g}${A}${i.value.slice(w)}`
      );
    }
    const b = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = $(
      () => (n.toolbar ?? Object.keys(b)).filter((x) => x in b)
    );
    return (x, A) => (t(), a("div", df, [
      l("div", uf, [
        (t(!0), a(P, null, V(p.value, (C) => (t(), a("button", {
          key: C,
          type: "button",
          disabled: e.disabled,
          title: C,
          "aria-label": C,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (k) => b[C].run()
        }, f(b[C].label), 9, cf))), 128)),
        l("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: A[0] || (A[0] = (C) => s.value = !s.value)
        }, " Preview ", 8, ff)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, pf)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: A[1] || (A[1] = (C) => r("update:modelValue", C.target.value))
      }, null, 40, mf))
    ]));
  }
}), gf = { class: "space-y-1" }, hf = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, bf = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, xf = ["id", "value", "rows", "disabled"], yf = { class: "text-muted-foreground text-xs" }, kf = {
  key: 0,
  class: "text-destructive text-xs"
}, $f = /* @__PURE__ */ O({
  __name: "PkCodeInput",
  props: {
    modelValue: { default: "" },
    language: { default: "plain" },
    rows: { default: 14 },
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(null), i = K(!0), d = $(() => n.modelValue ?? ""), u = $(() => Math.max(d.value.split(`
`).length, 1)), m = $(() => {
      if (n.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (x) {
        return x instanceof Error ? x.message : "Not valid JSON.";
      }
    });
    function b(x) {
      r("update:modelValue", x.target.value);
    }
    function p(x) {
      if (x.key === "Escape") {
        i.value = !1;
        return;
      }
      if (x.key !== "Tab" && (i.value = !0), x.key !== "Tab" || !i.value)
        return;
      x.preventDefault();
      const A = x.target, C = A.selectionStart, k = A.selectionEnd, w = `${d.value.slice(0, C)}    ${d.value.slice(k)}`;
      r("update:modelValue", w), requestAnimationFrame(() => {
        A.selectionStart = A.selectionEnd = C + 4;
      });
    }
    return (x, A) => (t(), a("div", gf, [
      l("div", hf, [
        l("div", bf, [
          (t(!0), a(P, null, V(u.value, (C) => (t(), a("div", { key: C }, f(C), 1))), 128))
        ]),
        l("textarea", {
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
          onInput: b,
          onKeydown: p
        }, null, 40, xf)
      ]),
      l("p", yf, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", kf, f(m.value), 1)) : y("", !0)
    ]));
  }
}), wf = { class: "space-y-3" }, Cf = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Sf = { class: "text-sm font-medium" }, Mf = { class: "flex items-center gap-1" }, Bf = ["disabled", "onClick"], Af = ["disabled", "onClick"], zf = ["disabled", "onClick"], Pf = { class: "space-y-3 p-3" }, _f = { class: "flex flex-wrap items-center gap-2" }, Of = ["disabled", "onClick"], jf = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, y5 = /* @__PURE__ */ O({
  __name: "PkBuilder",
  props: {
    modelValue: { default: null },
    blocks: { default: () => [] },
    maxBlocks: { default: null },
    disabled: { type: Boolean, default: !1 },
    errors: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.modelValue ?? []), i = $(
      () => Object.fromEntries(n.blocks.map((A) => [A.type, A]))
    ), d = $(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function u(A) {
      r("update:modelValue", A);
    }
    function m(A) {
      d.value || u([...s.value, { type: A, data: {} }]);
    }
    function b(A) {
      u(s.value.filter((C, k) => k !== A));
    }
    function p(A, C) {
      const k = A + C;
      if (k < 0 || k >= s.value.length)
        return;
      const w = [...s.value], [g] = w.splice(A, 1);
      w.splice(k, 0, g), u(w);
    }
    function x(A, C, k) {
      u(
        s.value.map(
          (w, g) => g === A ? { ...w, data: { ...w.data, [C]: k } } : w
        )
      );
    }
    return (A, C) => (t(), a("div", wf, [
      (t(!0), a(P, null, V(s.value, (k, w) => (t(), a("div", {
        key: `${k.type}-${w}`,
        class: "bg-card rounded-lg border"
      }, [
        l("div", Cf, [
          l("span", Sf, f(i.value[k.type]?.label ?? k.type), 1),
          l("div", Mf, [
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || w === 0,
              "aria-label": "Move up",
              onClick: (g) => p(w, -1)
            }, " ↑ ", 8, Bf),
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || w === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (g) => p(w, 1)
            }, " ↓ ", 8, Af),
            l("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (g) => b(w)
            }, " Remove ", 8, zf)
          ])
        ]),
        l("div", Pf, [
          (t(!0), a(P, null, V(i.value[k.type]?.fields ?? [], (g) => (t(), T(Re, {
            key: g.key,
            field: g,
            value: k.data[g.key] ?? null,
            error: e.errors?.[g.key],
            processing: e.disabled,
            onChange: (v) => x(w, g.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      l("div", _f, [
        (t(!0), a(P, null, V(e.blocks, (k) => (t(), a("button", {
          key: k.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (w) => m(k.type)
        }, " + " + f(k.label), 9, Of))), 128)),
        d.value ? (t(), a("span", jf, f(e.maxBlocks) + " is the maximum here. ", 1)) : y("", !0)
      ])
    ]));
  }
}), Lf = ["name", "value", "checked", "disabled", "onChange"], Vf = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Tf = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRadioGroup",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(i) {
      return n.modelValue != null && i.value == n.modelValue;
    }
    return (i, d) => (t(), a("div", {
      role: "radiogroup",
      class: _(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(P, null, V(e.options, (u) => (t(), a("label", {
        key: String(u.value),
        class: _(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (m) => r("update:modelValue", u.value)
        }, null, 40, Lf),
        U(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Vf, " Nothing to choose from yet. ")) : y("", !0)
    ], 2));
  }
}), Df = ["value", "checked", "disabled", "onChange"], Ef = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, If = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkCheckboxList",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    );
    function i(m) {
      return s.value.some((b) => b == m.value);
    }
    function d(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((b) => b != m.value) : [...s.value, m.value]
      );
    }
    const u = $(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, b) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(u.value)
    }, [
      (t(!0), a(P, null, V(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: _(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (x) => d(p)
        }, null, 40, Df),
        U(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Ef, " Nothing to choose from yet. ")) : y("", !0)
    ], 4));
  }
}), Ff = { class: "flex flex-col gap-1.5" }, Nf = ["aria-label", "onClick"], Rf = ["placeholder", "disabled", "maxlength"], Uf = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Hf = ["onClick"], qf = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Kf = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(""), i = $(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), d = $(() => i.value.length >= (n.field.max ?? 25)), u = $(
      () => (n.field.suggestions ?? []).filter(
        (x) => !i.value.some((A) => A.toLowerCase() === x.toLowerCase())
      )
    );
    function m(x) {
      const A = x.trim().slice(0, n.field.maxLength ?? 40);
      if (A === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some((C) => C.toLowerCase() === A.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, A]), s.value = "";
    }
    function b(x) {
      r(
        "update:modelValue",
        i.value.filter((A, C) => C !== x)
      );
    }
    function p(x) {
      if (x.key === "Enter" || x.key === ",") {
        x.preventDefault(), m(s.value);
        return;
      }
      x.key === "Backspace" && s.value === "" && i.value.length > 0 && b(i.value.length - 1);
    }
    return (x, A) => (t(), a("div", Ff, [
      l("div", {
        class: _(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(P, null, V(i.value, (C, k) => (t(), a("span", {
          key: `${C}-${k}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(f(C) + " ", 1),
          e.disabled ? y("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${C}`,
            onClick: (w) => b(k)
          }, " × ", 8, Nf))
        ]))), 128)),
        ue(l("input", {
          "onUpdate:modelValue": A[0] || (A[0] = (C) => s.value = C),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: A[1] || (A[1] = (C) => m(s.value))
        }, null, 40, Rf), [
          [ye, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", Uf, [
        A[2] || (A[2] = l("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(P, null, V(u.value, (C) => (t(), a("button", {
          key: C,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (k) => m(C)
        }, f(C), 9, Hf))), 128))
      ])) : y("", !0),
      d.value ? (t(), a("p", qf, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : y("", !0)
    ]));
  }
}), Gf = 4.5, Xt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function $a(e) {
  let o = e.replace("#", "");
  return o.length === 3 && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]), [parseInt(o.slice(0, 2), 16), parseInt(o.slice(2, 4), 16), parseInt(o.slice(4, 6), 16)];
}
function vt(e) {
  const o = e / 255;
  return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
}
function St(e) {
  const [o, n, r] = $a(e);
  return 0.2126 * vt(o) + 0.7152 * vt(n) + 0.0722 * vt(r);
}
function wa(e, o) {
  const n = St(e), r = St(o);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Wf(e, o, n) {
  if (!Xt.test(e) || !Xt.test(o))
    return e;
  const r = St(o) > 0.5, s = r ? 0 : 255;
  let i = $a(e);
  for (let d = 0; d <= 20; d++) {
    const u = Zf(i);
    if (wa(u, o) >= n)
      return u;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Zf(e) {
  return "#" + e.map(
    (o) => Math.round(Math.max(0, Math.min(255, o))).toString(16).padStart(2, "0")
  ).join("");
}
const Jf = { class: "flex flex-col gap-2" }, Yf = { class: "flex items-center gap-2" }, Xf = {
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
}, Qf = ["value", "disabled", "aria-label"], em = ["value", "disabled", "placeholder"], tm = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, am = ["aria-label", "title", "onClick"], nm = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, lm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = $(() => typeof n.modelValue == "string" ? n.modelValue : ""), d = $(() => s.test(i.value));
    function u(C) {
      const k = C.trim();
      if (k === "")
        return "";
      const w = k.startsWith("#") ? k : `#${k}`;
      return s.test(w) ? w.toLowerCase() : k;
    }
    function m(C) {
      r("update:modelValue", u(C.target.value));
    }
    const b = $(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : wa(i.value, n.field.contrastBackground)), p = $(() => n.field.contrastMinRatio ?? Gf), x = $(() => b.value !== null && b.value < p.value);
    function A() {
      n.field.contrastBackground && r(
        "update:modelValue",
        Wf(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (C, k) => (t(), a("div", Jf, [
      l("div", Yf, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: k[0] || (k[0] = (w) => r("update:modelValue", w.target.value))
        }, null, 40, Qf)) : (t(), a("span", Xf)),
        l("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, em)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", tm, [
        (t(!0), a(P, null, V(e.field.presets, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: _(["size-6 rounded border", i.value.toLowerCase() === w.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: w }),
          "aria-label": w,
          title: w,
          onClick: (g) => r("update:modelValue", w.toLowerCase())
        }, null, 14, am))), 128))
      ])) : y("", !0),
      x.value ? (t(), a("p", nm, [
        l("span", null, " This fails contrast at " + f(b.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? y("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: A
        }, " Use a readable shade "))
      ])) : y("", !0)
    ]));
  }
}), om = { class: "flex items-center gap-3" }, sm = ["min", "max", "step", "value", "disabled", "aria-label"], rm = { class: "flex shrink-0 items-center gap-1" }, im = ["min", "max", "step", "value", "disabled"], dm = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, um = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.field.min ?? 0), i = $(() => n.field.max ?? 100), d = $(() => n.field.step ?? 1), u = $(() => {
      const p = Number(n.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), m = $(
      () => n.modelValue === null || n.modelValue === void 0 || n.modelValue === ""
    );
    function b(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const x = Number(p);
      r("update:modelValue", Number.isFinite(x) ? x : null);
    }
    return (p, x) => (t(), a("div", om, [
      l("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: x[0] || (x[0] = (A) => b(A.target.value))
      }, null, 40, sm),
      l("div", rm, [
        l("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: m.value ? "" : u.value,
          disabled: e.disabled,
          onInput: x[1] || (x[1] = (A) => b(A.target.value))
        }, null, 40, im),
        e.field.unit ? (t(), a("span", dm, f(e.field.unit), 1)) : y("", !0)
      ])
    ]));
  }
}), et = /* @__PURE__ */ new Map();
function gt(e, o) {
  et.set(e, o);
}
function cm(e) {
  return et.get(e);
}
function k5(e) {
  return et.has(e);
}
function fm() {
  return [...et.keys()].sort();
}
function $5() {
  et.clear();
}
const mm = ["name", "value", "checked", "disabled", "onChange"], pm = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, vm = { class: "whitespace-nowrap" }, gm = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, hm = ["name", "value", "checked", "disabled", "onChange"], bm = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, xm = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, ym = { class: "text-center text-xs font-medium" }, km = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, $m = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, wm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkVisualSelect",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.field.preview ? cm(n.field.preview) : void 0
    ), i = $(() => !!n.field.preview && !s.value), d = $(() => n.field.layout === "segmented"), u = $(() => {
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
    function m(b) {
      return n.modelValue != null && b.value == n.modelValue;
    }
    return (b, p) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: _(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(P, null, V(e.options, (x) => (t(), a("label", {
        key: String(x.value),
        class: _(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(x) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: x.value,
          checked: m(x),
          disabled: e.disabled,
          onChange: (A) => r("update:modelValue", x.value)
        }, null, 40, mm),
        p[0] || (p[0] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", pm, [
          (t(), T(xe(s.value), {
            value: x.value,
            label: x.label,
            selected: m(x)
          }, null, 8, ["value", "label", "selected"]))
        ])) : y("", !0),
        l("span", vm, f(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", gm, " Nothing to choose from yet. ")) : y("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: _(["grid gap-3", u.value])
    }, [
      (t(!0), a(P, null, V(e.options, (x) => (t(), a("label", {
        key: String(x.value),
        class: _(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(x) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: x.value,
          checked: m(x),
          disabled: e.disabled,
          onChange: (A) => r("update:modelValue", x.value)
        }, null, 40, hm),
        p[1] || (p[1] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        l("span", bm, [
          s.value ? (t(), T(xe(s.value), {
            key: 0,
            value: x.value,
            label: x.label,
            selected: m(x)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", xm, " no preview ")) : y("", !0)
        ]),
        l("span", ym, f(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", km, " Nothing to choose from yet. ")) : y("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", $m, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        l("code", null, f(e.field.preview), 1),
        U(". Registered: " + f(h(fm)().join(", ") || "none") + ". ", 1)
      ])) : y("", !0)
    ], 2));
  }
}), Cm = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Sm = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", Cm, [
      l("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Mm = { class: "flex flex-col items-center gap-1 text-center" }, Bm = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Ca = /* @__PURE__ */ O({
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
    const o = e, n = $(() => o.mono ? "#000000" : o.accent), r = $(() => {
      switch (o.style) {
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
    return (s, i) => (t(), a("div", Mm, [
      l("div", {
        class: _(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: n.value, color: n.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", Bm, f(e.caption), 1)) : y("", !0)
    ]));
  }
}), Am = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, zm = { class: "flex items-center gap-3" }, Pm = ["src"], _m = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Om = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, jm = {
  key: 0,
  class: "text-right text-sm"
}, Lm = { class: "text-neutral-500" }, Vm = { class: "tabular-nums" }, Tm = { key: 1 }, Dm = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Em = { class: "mt-2 font-medium" }, Im = { key: 2 }, Fm = { class: "w-full text-sm" }, Nm = { class: "w-full py-3 pr-2" }, Rm = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Um = { key: 0 }, Hm = ["colspan"], qm = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Km = { class: "w-64 text-sm" }, Gm = { class: "tabular-nums" }, Wm = {
  key: 3,
  class: "py-2"
}, Zm = { key: 4 }, Jm = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Ym = { class: "mt-2 flex flex-col gap-1 text-sm" }, Xm = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Qm = { key: 0 }, ep = {
  key: 1,
  class: "mt-1"
}, tp = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, ap = /* @__PURE__ */ O({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const o = e;
    function n() {
      return o.document.branding.mono ? "#000000" : o.document.branding.accent;
    }
    function r(m) {
      return m.meta ?? [];
    }
    function s(m) {
      return m.rows ?? [];
    }
    function i(m) {
      return m.totals ?? [];
    }
    function d(m) {
      return m ?? [];
    }
    function u(m) {
      return m ?? "";
    }
    return (m, b) => (t(), a("article", Am, [
      l("div", zm, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Pm)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: n() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), a(P, null, V(e.document.blocks, (p, x) => (t(), a(P, { key: x }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ne({ borderColor: n() })
        }, [
          l("div", null, [
            l("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ne({ color: n() })
            }, f(p.title), 5),
            p.subtitle ? (t(), a("p", _m, f(p.subtitle), 1)) : y("", !0),
            p.reference ? (t(), a("p", Om, f(p.reference), 1)) : y("", !0)
          ]),
          r(p).length ? (t(), a("dl", jm, [
            (t(!0), a(P, null, V(r(p), (A, C) => (t(), a("div", {
              key: C,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              l("dt", Lm, f(A.label), 1),
              l("dd", Vm, f(A.value), 1)
            ]))), 128))
          ])) : y("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", Tm, [
          l("h2", Dm, f(p.heading), 1),
          l("p", Em, f(p.name), 1),
          (t(!0), a(P, null, V(d(p.lines), (A, C) => (t(), a("p", {
            key: C,
            class: "text-sm text-neutral-600"
          }, f(A), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", Im, [
          l("table", Fm, [
            l("thead", null, [
              l("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: n() })
              }, [
                (t(!0), a(P, null, V(d(p.columns), (A, C) => (t(), a("th", {
                  key: C,
                  class: _(["pb-2 font-medium", C > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(A), 3))), 128))
              ], 4)
            ]),
            l("tbody", null, [
              (t(!0), a(P, null, V(s(p), (A, C) => (t(), a("tr", {
                key: C,
                class: "border-b border-neutral-200"
              }, [
                l("td", Nm, [
                  l("p", null, f(A.description), 1),
                  A.detail ? (t(), a("p", Rm, f(A.detail), 1)) : y("", !0)
                ]),
                (t(!0), a(P, null, V(A.cells, (k, w) => (t(), a("td", {
                  key: w,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(k), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Um, [
                l("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, Hm)
              ])) : y("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", qm, [
            l("dl", Km, [
              (t(!0), a(P, null, V(i(p), (A, C) => (t(), a("div", {
                key: C,
                class: _([
                  "flex justify-between py-1",
                  A.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(A.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                l("dt", {
                  class: _(A.strong ? "" : "text-neutral-600")
                }, f(A.label), 3),
                l("dd", Gm, f(A.value), 1)
              ], 6))), 128))
            ])
          ])) : y("", !0)
        ])) : p.type === "code" ? (t(), a("section", Wm, [
          I(Ca, {
            code: u(p.code),
            caption: u(p.caption),
            style: ne(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", Zm, [
          l("h2", Jm, f(p.heading), 1),
          l("ol", Ym, [
            (t(!0), a(P, null, V(d(p.items), (A, C) => (t(), a("li", {
              key: C,
              class: "flex gap-2"
            }, [
              l("span", {
                class: "font-semibold tabular-nums",
                style: ne({ color: n() })
              }, f(C + 1) + ".", 5),
              l("span", null, f(A), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: _(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: n() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", Xm, [
          p.text ? (t(), a("p", Qm, f(p.text), 1)) : y("", !0),
          d(p.contacts).length ? (t(), a("p", ep, f(d(p.contacts).join(" · ")), 1)) : y("", !0)
        ])) : (t(), a("p", tp, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), np = ["aria-label", "title"], lp = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, op = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, w5 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: o, set: n } = ha(), r = $(() => o.value.theme === "dark");
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
      (t(), a("svg", lp, [
        r.value ? (t(), a(P, { key: 0 }, [
          d[0] || (d[0] = l("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = l("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", op))
      ]))
    ], 8, np));
  }
}), sp = ["width", "height"], rp = { key: 0 }, ip = ["x1", "x2", "y1", "y2"], dp = ["x", "y"], up = ["x1", "x2", "y1", "y2"], cp = ["x", "y"], fp = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], mp = ["x", "y", "width", "height", "fill", "fill-opacity"], pp = ["x", "y"], vp = ["x", "y"], gp = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, hp = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, bp = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, xp = { class: "text-xs font-semibold tabular-nums" }, yp = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, kp = { class: "text-muted-foreground" }, Qt = 5.6, C5 = /* @__PURE__ */ O({
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
    const o = e, n = {
      danger: "var(--destructive)",
      warning: "var(--chart-4)",
      success: "var(--chart-2)",
      neutral: "var(--muted-foreground)"
    };
    function r(B) {
      return n[B] ?? B;
    }
    function s(B, N) {
      if (!o.thresholds?.length)
        return N;
      const L = o.thresholds.find((X) => B < X.max);
      return r(L ? L.color : o.aboveColor);
    }
    const i = K(null), d = K(560), u = K(null);
    let m = null;
    pe(() => {
      m = new ResizeObserver((B) => {
        d.value = Math.max(160, B[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), be(() => m?.disconnect());
    const b = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = $(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? b[L % b.length]
    }))), x = $(() => p.value[0]?.points.map((B) => B.label) ?? []), A = $(() => x.value.length), C = $(() => o.orientation === "horizontal"), k = $(() => Math.max(0, ...x.value.map((B) => B.length))), w = $(() => {
      if (!C.value)
        return o.showAxis ? 44 : 8;
      const B = k.value * Qt + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), g = $(() => Math.max(4, Math.floor((w.value - 16) / Qt)));
    function v(B) {
      return B.length <= g.value ? B : `${B.slice(0, g.value - 1)}…`;
    }
    const c = $(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: w.value
    })), S = $(() => ({
      w: Math.max(1, d.value - c.value.left - c.value.right),
      h: Math.max(1, o.height - c.value.top - c.value.bottom)
    })), M = (B) => o.format ? o.format(B) : z(B);
    function z(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const R = $(() => {
      const B = x.value.map(
        (fe, G) => o.stacked ? p.value.reduce((D, F) => D + Math.max(0, F.points[G]?.value ?? 0), 0) : Math.max(...p.value.map((D) => D.points[G]?.value ?? 0))
      );
      if (o.maxValue)
        return o.maxValue;
      const N = Math.max(...B, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((fe) => N <= fe * L) ?? 10) * L;
    }), E = $(
      () => (C.value ? S.value.h : S.value.w) / Math.max(1, A.value)
    ), ee = $(() => E.value * 0.68), H = $(
      () => o.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), W = $(() => {
      const B = [], N = new Array(A.value).fill(0);
      return p.value.forEach((L, X) => {
        L.points.forEach((fe, G) => {
          const F = Math.max(0, fe.value) / R.value * (C.value ? S.value.w : S.value.h), oe = (C.value ? c.value.top : c.value.left) + G * E.value + (E.value - ee.value) / 2, re = o.stacked ? 0 : X * H.value;
          B.push(
            C.value ? {
              x: c.value.left + N[G],
              y: oe + re,
              w: F,
              h: Math.max(0, H.value - 2),
              color: s(fe.value, L.color),
              label: fe.label,
              name: L.name,
              value: fe.value,
              index: G
            } : {
              x: oe + re,
              y: c.value.top + S.value.h - F - N[G],
              w: Math.max(0, H.value - 2),
              h: F,
              color: s(fe.value, L.color),
              label: fe.label,
              name: L.name,
              value: fe.value,
              index: G
            }
          ), o.stacked && (N[G] += F);
        });
      }), B;
    }), J = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: R.value * (C.value ? B : 1 - B),
        x: c.value.left + S.value.w * B,
        y: c.value.top + S.value.h * B
      }))
    ), ae = $(() => Math.max(1, Math.ceil(A.value / (C.value ? 14 : 10))));
    function te(B) {
      return B === A.value - 1 || B % ae.value === 0;
    }
    function Y(B) {
      return (C.value ? c.value.top : c.value.left) + B * E.value + E.value / 2;
    }
    const Z = $(() => u.value === null ? null : {
      label: x.value[u.value],
      rows: p.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[u.value]?.value ?? 0
      }))
    });
    return (B, N) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      A.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: N[0] || (N[0] = (L) => u.value = null)
        }, [
          e.showAxis ? (t(), a("g", rp, [
            C.value ? (t(), a(P, { key: 0 }, [
              (t(!0), a(P, null, V(J.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: c.value.top,
                y2: c.value.top + S.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, ip))), 128)),
              (t(!0), a(P, null, V(J.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(z(L.value)), 9, dp))), 128))
            ], 64)) : (t(), a(P, { key: 1 }, [
              (t(!0), a(P, null, V(J.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: c.value.left,
                x2: d.value - c.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, up))), 128)),
              (t(!0), a(P, null, V(J.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: c.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(z(L.value)), 9, cp))), 128))
            ], 64))
          ])) : y("", !0),
          (t(!0), a(P, null, V(x.value, (L, X) => (t(), a("rect", {
            key: `hit-${X}`,
            x: C.value ? c.value.left : c.value.left + X * E.value,
            y: C.value ? c.value.top + X * E.value : c.value.top,
            width: C.value ? S.value.w : E.value,
            height: C.value ? E.value : S.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === X ? 0.4 : 0,
            onMouseenter: (fe) => u.value = X
          }, null, 40, fp))), 128)),
          (t(!0), a(P, null, V(W.value, (L, X) => (t(), a("rect", {
            key: `b-${X}`,
            x: L.x,
            y: L.y,
            width: L.w,
            height: L.h,
            fill: L.color,
            "fill-opacity": u.value === null || u.value === L.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, mp))), 128)),
          C.value ? (t(!0), a(P, { key: 1 }, V(x.value, (L, X) => ue((t(), a("text", {
            key: `c-${X}`,
            x: c.value.left - 8,
            y: Y(X) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(f(v(L)) + " ", 1),
            l("title", null, f(L), 1)
          ], 8, pp)), [
            [Te, te(X)]
          ])), 128)) : (t(!0), a(P, { key: 2 }, V(x.value, (L, X) => ue((t(), a("text", {
            key: `c-${X}`,
            x: Y(X),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, vp)), [
            [Te, te(X)]
          ])), 128))
        ], 40, sp)),
        Z.value ? (t(), a("div", gp, [
          l("p", hp, f(Z.value.label), 1),
          (t(!0), a(P, null, V(Z.value.rows, (L, X) => (t(), a("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", bp, f(L.name || "Value"), 1),
            l("span", xp, f(M(L.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", yp, [
          (t(!0), a(P, null, V(p.value, (L, X) => (t(), a("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", kp, f(L.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), $p = ["width", "height"], wp = ["id"], Cp = ["stop-color"], Sp = ["stop-color"], Mp = { key: 0 }, Bp = ["x1", "x2", "y1", "y2"], Ap = ["x", "y"], zp = ["x", "y"], Pp = ["x1", "x2", "y1", "y2"], _p = ["d", "fill"], Op = ["d", "stroke", "stroke-dasharray"], jp = ["cx", "cy", "fill"], Lp = { key: 1 }, Vp = ["x1", "x2", "y1", "y2"], Tp = ["cx", "cy", "fill"], Dp = ["x", "y"], Ep = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Ip = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Fp = { class: "text-xs font-semibold tabular-nums" }, Np = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Rp = { class: "text-muted-foreground" }, Up = /* @__PURE__ */ O({
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
    const o = e, n = $(() => b.value.some((B) => B.axis === "right")), r = K(null), s = K(560), i = K(null);
    let d = null;
    pe(() => {
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
    ], m = Math.random().toString(36).slice(2, 9), b = $(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? u[L % u.length]
    }))), p = $(() => b.value[0]?.points.map((B) => B.label) ?? []), x = $(() => p.value.length), A = $(() => ({
      top: 12,
      right: o.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: o.showAxis ? 44 : 8
    })), C = (B) => o.format ? o.format(B) : k(B);
    function k(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function w(B) {
      const N = Math.max(...B, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((fe) => N <= fe * L) ?? 10) * L;
    }
    const g = $(
      () => w(
        b.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((N) => N.value))
      )
    ), v = $(
      () => w(
        b.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((N) => N.value))
      )
    ), c = $(() => ({
      w: Math.max(1, s.value - A.value.left - A.value.right),
      h: Math.max(1, o.height - A.value.top - A.value.bottom)
    }));
    function S(B) {
      return A.value.left + (x.value <= 1 ? 0 : B / (x.value - 1) * c.value.w);
    }
    function M(B, N = "left") {
      const L = N === "right" ? v.value : g.value;
      return A.value.top + c.value.h - B / L * c.value.h;
    }
    const z = $(
      () => b.value.map((B) => {
        const N = B.points.map((X, fe) => ({
          ...X,
          x: S(fe),
          y: M(X.value, B.axis ?? "left")
        })), L = B.stepped ? R(N) : E(N);
        return { ...B, pts: N, line: L, area: ee(L, N) };
      })
    );
    function R(B) {
      if (B.length === 0)
        return "";
      let N = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let L = 1; L < B.length; L++)
        N += ` L${B[L].x.toFixed(2)},${B[L - 1].y.toFixed(2)} L${B[L].x.toFixed(2)},${B[L].y.toFixed(2)}`;
      return N;
    }
    function E(B) {
      const N = B.length;
      if (N === 0)
        return "";
      if (N === 1)
        return `M${B[0].x},${B[0].y}`;
      const L = [], X = [];
      for (let D = 0; D < N - 1; D++)
        L[D] = B[D + 1].x - B[D].x, X[D] = L[D] === 0 ? 0 : (B[D + 1].y - B[D].y) / L[D];
      const fe = [X[0]];
      for (let D = 1; D < N - 1; D++)
        if (X[D - 1] * X[D] <= 0)
          fe[D] = 0;
        else {
          const F = 2 * L[D] + L[D - 1], oe = L[D] + 2 * L[D - 1];
          fe[D] = (F + oe) / (F / X[D - 1] + oe / X[D]);
        }
      fe[N - 1] = X[N - 2];
      let G = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let D = 0; D < N - 1; D++) {
        const F = L[D] / 3;
        G += ` C${(B[D].x + F).toFixed(2)},${(B[D].y + fe[D] * F).toFixed(2)} ${(B[D + 1].x - F).toFixed(2)},${(B[D + 1].y - fe[D + 1] * F).toFixed(2)} ${B[D + 1].x.toFixed(2)},${B[D + 1].y.toFixed(2)}`;
      }
      return G;
    }
    function ee(B, N) {
      if (N.length === 0)
        return "";
      const L = A.value.top + c.value.h;
      return `${B} L${N[N.length - 1].x.toFixed(2)},${L} L${N[0].x.toFixed(2)},${L} Z`;
    }
    const H = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: A.value.top + c.value.h * B,
        value: g.value * (1 - B)
      }))
    ), W = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: A.value.top + c.value.h * B,
        value: v.value * (1 - B)
      }))
    ), J = $(() => Math.max(1, Math.ceil(x.value / 8)));
    function ae(B) {
      return B === x.value - 1 || B % J.value === 0;
    }
    function te(B) {
      const N = B.currentTarget.getBoundingClientRect(), L = B.clientX - N.left - A.value.left, X = x.value <= 1 ? 1 : c.value.w / (x.value - 1);
      i.value = Math.min(x.value - 1, Math.max(0, Math.round(L / X)));
    }
    const Y = $(() => {
      if (i.value === null || x.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: S(B),
        label: p.value[B],
        rows: z.value.map((N) => ({
          name: N.name,
          color: N.color,
          value: N.points[B]?.value ?? 0,
          y: N.pts[B]?.y ?? 0
        }))
      };
    }), Z = $(() => {
      if (!Y.value)
        return {};
      const B = Y.value.x > s.value * 0.6;
      return {
        left: `${Y.value.x}px`,
        top: "8px",
        transform: B ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (B, N) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: te,
          onMouseleave: N[0] || (N[0] = (L) => i.value = null)
        }, [
          l("defs", null, [
            (t(!0), a(P, null, V(z.value, (L, X) => (t(), a("linearGradient", {
              id: `pk-fill-${h(m)}-${X}`,
              key: X,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              l("stop", {
                offset: "0%",
                "stop-color": L.color,
                "stop-opacity": "0.25"
              }, null, 8, Cp),
              l("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, Sp)
            ], 8, wp))), 128))
          ]),
          e.showAxis ? (t(), a("g", Mp, [
            (t(!0), a(P, null, V(H.value, (L) => (t(), a("line", {
              key: L.y,
              x1: A.value.left,
              x2: s.value - A.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Bp))), 128)),
            (t(!0), a(P, null, V(H.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: A.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(L.value)), 9, Ap))), 128)),
            n.value ? (t(!0), a(P, { key: 0 }, V(W.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - A.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(L.value)), 9, zp))), 128)) : y("", !0)
          ])) : y("", !0),
          (t(!0), a(P, null, V(p.value, (L, X) => ue((t(), a("line", {
            key: `v-${X}`,
            x1: S(X),
            x2: S(X),
            y1: A.value.top,
            y2: A.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Pp)), [
            [Te, ae(X)]
          ])), 128)),
          (t(!0), a(P, null, V(z.value, (L, X) => (t(), a("g", {
            key: `s-${X}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${h(m)}-${X})`
            }, null, 8, _p)) : y("", !0),
            l("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, Op),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, jp)) : y("", !0)
          ]))), 128)),
          Y.value ? (t(), a("g", Lp, [
            l("line", {
              x1: Y.value.x,
              x2: Y.value.x,
              y1: A.value.top,
              y2: A.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Vp),
            (t(!0), a(P, null, V(Y.value.rows, (L, X) => (t(), a("circle", {
              key: `d-${X}`,
              cx: Y.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Tp))), 128))
          ])) : y("", !0),
          (t(!0), a(P, null, V(p.value, (L, X) => ue((t(), a("text", {
            key: `x-${X}`,
            x: S(X),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, Dp)), [
            [Te, ae(X)]
          ])), 128))
        ], 40, $p)),
        Y.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(Z.value)
        }, [
          l("p", Ep, f(Y.value.label), 1),
          (t(!0), a(P, null, V(Y.value.rows, (L, X) => (t(), a("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Ip, f(L.name || "Value"), 1),
            l("span", Fp, f(C(L.value)), 1)
          ]))), 128))
        ], 4)) : y("", !0),
        e.showLegend && b.value.length > 1 ? (t(), a("div", Np, [
          (t(!0), a(P, null, V(z.value, (L, X) => (t(), a("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Rp, f(L.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Hp = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, qp = { class: "text-muted-foreground text-[11px] capitalize" }, Kp = { class: "text-sm font-semibold tabular-nums" }, Gp = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, tt = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (o, n) => (t(), a("div", Hp, [
      l("p", qp, f(e.label), 1),
      l("p", Kp, [
        U(f(e.value) + " ", 1),
        e.share ? (t(), a("span", Gp, " (" + f(e.share) + ") ", 1)) : y("", !0)
      ])
    ]));
  }
}), Wp = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Zp = ["width", "height", "viewBox", "aria-label"], Jp = ["d", "fill", "fill-opacity", "onMouseenter"], Yp = ["x", "y"], Xp = ["x", "y"], Qp = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, ev = ["onMouseenter"], tv = { class: "min-w-0 flex-1 truncate capitalize" }, av = { class: "tabular-nums font-medium" }, nv = { class: "text-muted-foreground w-9 text-right tabular-nums" }, S5 = /* @__PURE__ */ O({
  __name: "PieChart",
  props: {
    data: {},
    height: { default: 220 },
    type: { default: "doughnut" },
    format: {}
  },
  setup(e) {
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = $(() => o.data.reduce((g, v) => g + v.value, 0)), s = K(null), i = $(() => o.height), d = $(() => i.value / 2 - 4), u = $(() => o.type === "doughnut" ? d.value * 0.62 : 0);
    function m(g) {
      return n[g % n.length];
    }
    function b(g) {
      return 1 - Math.min(0.55, Math.floor(g / n.length) * 0.28);
    }
    const p = $(() => {
      if (r.value <= 0)
        return [];
      const g = i.value / 2;
      let v = -Math.PI / 2;
      return o.data.map((c, S) => {
        const M = c.value / r.value, z = M * Math.PI * 2, R = v, E = v + z;
        return v = E, {
          ...c,
          share: M,
          colour: m(S),
          opacity: b(S),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: M >= 0.9999 ? C(g) : A(g, R, E, d.value, u.value)
        };
      });
    });
    function x(g, v, c) {
      return `${(g + Math.cos(v) * c).toFixed(2)},${(g + Math.sin(v) * c).toFixed(2)}`;
    }
    function A(g, v, c, S, M) {
      const z = c - v > Math.PI ? 1 : 0;
      return M <= 0 ? `M${g},${g} L${x(g, v, S)} A${S},${S} 0 ${z} 1 ${x(g, c, S)} Z` : [
        `M${x(g, v, S)}`,
        `A${S},${S} 0 ${z} 1 ${x(g, c, S)}`,
        `L${x(g, c, M)}`,
        `A${M},${M} 0 ${z} 0 ${x(g, v, M)}`,
        "Z"
      ].join(" ");
    }
    function C(g) {
      const v = d.value, c = u.value, S = [
        `M${g - v},${g}`,
        `A${v},${v} 0 1 1 ${g + v},${g}`,
        `A${v},${v} 0 1 1 ${g - v},${g}`,
        "Z"
      ];
      return c <= 0 ? S.join(" ") : [
        ...S,
        `M${g - c},${g}`,
        `A${c},${c} 0 1 0 ${g + c},${g}`,
        `A${c},${c} 0 1 0 ${g - c},${g}`,
        "Z"
      ].join(" ");
    }
    const k = (g) => o.format ? o.format(g) : new Intl.NumberFormat().format(g), w = (g) => `${(g * 100).toFixed(g < 0.01 ? 2 : 0)}%`;
    return (g, v) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Wp, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${k(r.value)}`
      }, [
        (t(!0), a(P, null, V(p.value, (c, S) => (t(), a("path", {
          key: S,
          d: c.path,
          fill: c.colour,
          "fill-opacity": s.value === null || s.value === S ? c.opacity : c.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (M) => s.value = S,
          onMouseleave: v[0] || (v[0] = (M) => s.value = null)
        }, null, 40, Jp))), 128)),
        e.type === "doughnut" ? (t(), a(P, { key: 0 }, [
          l("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(k(s.value === null ? r.value : p.value[s.value].value)), 9, Yp),
          l("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Xp)
        ], 64)) : y("", !0)
      ], 8, Zp)),
      l("ul", Qp, [
        (t(!0), a(P, null, V(p.value, (c, S) => (t(), a("li", {
          key: S,
          class: _(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === S ? "bg-muted" : ""]),
          onMouseenter: (M) => s.value = S,
          onMouseleave: v[1] || (v[1] = (M) => s.value = null)
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          l("span", tv, f(c.label), 1),
          l("span", av, f(k(c.value)), 1),
          l("span", nv, f(w(c.share)), 1)
        ], 42, ev))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(tt, {
        key: 0,
        label: p.value[s.value].label,
        value: k(p.value[s.value].value),
        share: w(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), lv = ["width", "height", "viewBox", "aria-label"], ov = { class: "text-border" }, sv = ["x1", "x2", "y1", "y2", "stroke-dasharray"], rv = { class: "fill-muted-foreground text-[10px]" }, iv = ["x", "y"], dv = ["x", "y"], uv = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], cv = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, M5 = /* @__PURE__ */ O({
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
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = K(null), s = K(560), i = K(null);
    let d = null;
    pe(() => {
      d = new ResizeObserver((J) => {
        const ae = J[0]?.contentRect.width ?? 0;
        ae > 0 && (s.value = ae);
      }), r.value && d.observe(r.value);
    }), be(() => d?.disconnect());
    const u = $(
      () => o.series?.length ? o.series : [{ name: "", points: o.data ?? [] }]
    ), m = (J, ae) => ae.color ?? n[J % n.length], b = $(() => u.value.flatMap((J) => J.points)), p = $(() => b.value.some((J) => typeof J.r == "number")), x = { top: 12, right: 16, bottom: 32, left: 48 }, A = $(() => Math.max(10, s.value - x.left - x.right)), C = $(() => Math.max(10, o.height - x.top - x.bottom));
    function k(J) {
      if (J.length === 0)
        return [0, 1];
      const ae = Math.min(...J), te = Math.max(...J), Y = te - ae || Math.abs(te) || 1;
      return [ae - Y * 0.08, te + Y * 0.08];
    }
    const w = $(() => k(b.value.map((J) => J.x))), g = $(() => k(b.value.map((J) => J.y))), v = (J) => {
      const [ae, te] = w.value;
      return x.left + (J - ae) / (te - ae) * A.value;
    }, c = (J) => {
      const [ae, te] = g.value;
      return x.top + C.value - (J - ae) / (te - ae) * C.value;
    }, S = $(() => Math.max(...b.value.map((J) => J.r ?? 0), 0));
    function M(J) {
      if (!p.value || !S.value)
        return 4;
      const ae = Math.max(0, J.r ?? 0) / S.value;
      return 3 + Math.sqrt(ae) * (o.maxRadius - 3);
    }
    function z([J, ae]) {
      return Array.from({ length: 5 }, (te, Y) => J + (ae - J) / 4 * Y);
    }
    const R = $(() => z(w.value)), E = $(() => z(g.value)), ee = (J) => o.formatX?.(J) ?? String(Math.round(J * 100) / 100), H = (J) => o.formatY?.(J) ?? String(Math.round(J * 100) / 100), W = $(() => {
      if (!i.value)
        return null;
      const J = u.value[i.value.s], ae = J?.points[i.value.p];
      return ae ? { series: J, point: ae } : null;
    });
    return (J, ae) => (t(), a("div", {
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
        l("g", ov, [
          (t(!0), a(P, null, V(E.value, (te, Y) => (t(), a("line", {
            key: `gy-${Y}`,
            x1: x.left,
            x2: x.left + A.value,
            y1: c(te),
            y2: c(te),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Y === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, sv))), 128))
        ]),
        l("g", rv, [
          (t(!0), a(P, null, V(E.value, (te, Y) => (t(), a("text", {
            key: `ty-${Y}`,
            x: x.left - 8,
            y: c(te) + 3,
            "text-anchor": "end"
          }, f(H(te)), 9, iv))), 128)),
          (t(!0), a(P, null, V(R.value, (te, Y) => (t(), a("text", {
            key: `tx-${Y}`,
            x: v(te),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ee(te)), 9, dv))), 128))
        ]),
        (t(!0), a(P, null, V(u.value, (te, Y) => (t(), a("g", {
          key: `s-${Y}`
        }, [
          (t(!0), a(P, null, V(te.points, (Z, B) => (t(), a("circle", {
            key: `p-${Y}-${B}`,
            cx: v(Z.x),
            cy: c(Z.y),
            r: M(Z),
            fill: m(Y, te),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(Y, te),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Y || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (N) => i.value = { s: Y, p: B },
            onMouseleave: ae[0] || (ae[0] = (N) => i.value = null)
          }, null, 40, uv))), 128))
        ]))), 128))
      ], 8, lv)),
      W.value ? (t(), T(tt, {
        key: 0,
        label: W.value.point.label ?? W.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(W.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(W.value.point.y)}`,
        share: p.value && W.value.point.r != null ? String(W.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : y("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", cv, [
        (t(!0), a(P, null, V(u.value, (te, Y) => (t(), a("span", {
          key: `l-${Y}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          l("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: m(Y, te) }),
            "aria-hidden": "true"
          }, null, 4),
          U(" " + f(te.name), 1)
        ]))), 128))
      ])) : y("", !0)
    ], 512));
  }
}), fv = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, mv = ["width", "height", "viewBox"], pv = ["points"], vv = ["x1", "y1", "x2", "y2"], gv = ["points", "fill", "stroke"], hv = ["cx", "cy", "fill", "onMouseenter"], bv = ["x", "y", "text-anchor"], xv = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, yv = { class: "truncate" }, B5 = /* @__PURE__ */ O({
  __name: "RadarChart",
  props: {
    series: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = $(
      () => o.series.map((c, S) => ({
        ...c,
        color: c.color ?? n[S % n.length]
      }))
    ), s = $(() => r.value[0]?.points.map((c) => c.label) ?? []), i = $(() => s.value.length), d = $(() => o.height), u = $(() => d.value / 2), m = $(() => d.value / 2 - 34), b = $(() => {
      const c = Math.max(...r.value.flatMap((z) => z.points.map((R) => R.value)), 0);
      if (c <= 0)
        return 1;
      const S = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((z) => c <= z * S) ?? 10) * S;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function x(c, S) {
      const M = p(c);
      return {
        x: u.value + Math.cos(M) * m.value * S,
        y: u.value + Math.sin(M) * m.value * S
      };
    }
    function A(c) {
      return Array.from({ length: i.value }, (S, M) => {
        const z = x(M, c);
        return `${z.x.toFixed(2)},${z.y.toFixed(2)}`;
      }).join(" ");
    }
    const C = $(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: A(c) }))), k = $(
      () => r.value.map((c) => {
        const S = c.points.map((M) => Math.max(0, M.value) / b.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: S.map((M, z) => {
            const R = x(z, M);
            return `${R.x.toFixed(2)},${R.y.toFixed(2)}`;
          }).join(" "),
          dots: S.map((M, z) => x(z, M))
        };
      })
    ), w = $(
      () => s.value.map((c, S) => {
        const M = p(S), z = u.value + Math.cos(M) * (m.value + 14), R = u.value + Math.sin(M) * (m.value + 14), E = Math.cos(M);
        return {
          label: c,
          x: z,
          y: R + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), g = K(null), v = (c) => o.format ? o.format(c) : new Intl.NumberFormat().format(c);
    return (c, S) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", fv, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(C.value, (M) => (t(), a("polygon", {
          key: M.f,
          points: M.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, pv))), 128)),
        (t(!0), a(P, null, V(s.value, (M, z) => (t(), a("line", {
          key: `spoke-${z}`,
          x1: u.value,
          y1: u.value,
          x2: x(z, 1).x,
          y2: x(z, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, vv))), 128)),
        (t(!0), a(P, null, V(k.value, (M, z) => (t(), a("g", {
          key: `s-${z}`
        }, [
          l("polygon", {
            points: M.outline,
            fill: M.color,
            "fill-opacity": "0.16",
            stroke: M.color,
            "stroke-width": "2"
          }, null, 8, gv),
          (t(!0), a(P, null, V(M.dots, (R, E) => (t(), a("circle", {
            key: E,
            cx: R.x,
            cy: R.y,
            r: "3",
            fill: M.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => g.value = {
              series: M.name,
              axis: s.value[E],
              value: M.values[E]?.value ?? 0
            },
            onMouseleave: S[0] || (S[0] = (ee) => g.value = null)
          }, null, 40, hv))), 128))
        ]))), 128)),
        (t(!0), a(P, null, V(w.value, (M, z) => (t(), a("text", {
          key: `l-${z}`,
          x: M.x,
          y: M.y,
          "text-anchor": M.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(M.label), 9, bv))), 128))
      ], 8, mv)),
      e.showLegend ? (t(), a("ul", xv, [
        (t(!0), a(P, null, V(r.value, (M, z) => (t(), a("li", {
          key: z,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: M.color })
          }, null, 4),
          l("span", yv, f(M.name), 1)
        ]))), 128))
      ])) : y("", !0),
      g.value ? (t(), T(tt, {
        key: 1,
        label: `${g.value.series} — ${g.value.axis}`,
        value: v(g.value.value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), kv = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, $v = ["width", "height", "viewBox"], wv = ["cx", "cy", "r"], Cv = ["d", "fill", "fill-opacity", "onMouseenter"], Sv = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Mv = { class: "min-w-0 flex-1 truncate capitalize" }, Bv = { class: "font-medium tabular-nums" }, A5 = /* @__PURE__ */ O({
  __name: "PolarAreaChart",
  props: {
    data: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = K(null), s = $(() => o.height), i = $(() => s.value / 2), d = $(() => s.value / 2 - 6), u = $(() => Math.max(...o.data.map((A) => Math.max(0, A.value)), 0)), m = $(() => {
      const A = o.data.length;
      if (A === 0 || u.value <= 0)
        return [];
      const C = Math.PI * 2 / A;
      return o.data.map((k, w) => {
        const g = Math.sqrt(Math.max(0, k.value) / u.value), v = d.value * g, c = w * C - Math.PI / 2, S = c + C;
        return {
          ...k,
          color: n[w % n.length],
          share: u.value === 0 ? 0 : k.value / u.value,
          path: b(i.value, c, S, v)
        };
      });
    });
    function b(A, C, k, w) {
      if (w <= 0)
        return "";
      if (k - C >= Math.PI * 2 - 1e-6)
        return `M${A - w},${A} A${w},${w} 0 1 1 ${A + w},${A} A${w},${w} 0 1 1 ${A - w},${A} Z`;
      const g = k - C > Math.PI ? 1 : 0, v = A + Math.cos(C) * w, c = A + Math.sin(C) * w, S = A + Math.cos(k) * w, M = A + Math.sin(k) * w;
      return `M${A},${A} L${v.toFixed(2)},${c.toFixed(2)} A${w.toFixed(2)},${w.toFixed(2)} 0 ${g} 1 ${S.toFixed(2)},${M.toFixed(2)} Z`;
    }
    const p = $(() => [0.5, 0.75, 1].map((A) => d.value * A)), x = (A) => o.format ? o.format(A) : new Intl.NumberFormat().format(A);
    return (A, C) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", kv, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(p.value, (k) => (t(), a("circle", {
          key: k,
          cx: i.value,
          cy: i.value,
          r: k,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, wv))), 128)),
        (t(!0), a(P, null, V(m.value, (k, w) => (t(), a("path", {
          key: w,
          d: k.path,
          fill: k.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === w ? 0.75 : 0.3,
          onMouseenter: (g) => r.value = w,
          onMouseleave: C[0] || (C[0] = (g) => r.value = null)
        }, null, 40, Cv))), 128))
      ], 8, $v)),
      e.showLegend ? (t(), a("ul", Sv, [
        (t(!0), a(P, null, V(m.value, (k, w) => (t(), a("li", {
          key: w,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: k.color })
          }, null, 4),
          l("span", Mv, f(k.label), 1),
          l("span", Bv, f(x(k.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      r.value !== null ? (t(), T(tt, {
        key: 1,
        label: m.value[r.value].label,
        value: x(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), Av = ["width", "height"], zv = ["x1", "x2", "y1", "y2"], Pv = ["x", "y"], _v = ["x", "y"], Ov = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], jv = ["x", "y", "width", "height", "fill", "fill-opacity"], Lv = ["d", "stroke"], Vv = ["cx", "cy", "fill"], Tv = ["x", "y"], Dv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Ev = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Iv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Fv = { class: "text-xs font-semibold tabular-nums" }, Nv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Rv = { class: "text-muted-foreground" }, z5 = /* @__PURE__ */ O({
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
    const o = e, n = K(null), r = K(560), s = K(null);
    let i = null;
    pe(() => {
      i = new ResizeObserver((Y) => {
        r.value = Math.max(160, Y[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), be(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], m = $(
      () => o.bars.map((Y, Z) => ({
        ...Y,
        color: Y.color ?? d[Z % d.length]
      }))
    ), b = $(
      () => o.lines.map((Y, Z) => ({
        ...Y,
        color: Y.color ?? u[Z % u.length]
      }))
    ), p = $(
      () => m.value[0]?.points.map((Y) => Y.label) ?? b.value[0]?.points.map((Y) => Y.label) ?? []
    ), x = $(() => p.value.length), A = $(() => o.lineAxis === "right"), C = $(() => ({
      top: 12,
      right: A.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), k = $(() => ({
      w: Math.max(1, r.value - C.value.left - C.value.right),
      h: Math.max(1, o.height - C.value.top - C.value.bottom)
    }));
    function w(Y) {
      const Z = Math.max(...Y, 0);
      if (Z <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((L) => Z <= L * B) ?? 10) * B;
    }
    const g = $(
      () => w([
        ...m.value.flatMap((Y) => Y.points.map((Z) => Z.value)),
        ...A.value ? [] : b.value.flatMap((Y) => Y.points.map((Z) => Z.value))
      ])
    ), v = $(
      () => A.value ? w(b.value.flatMap((Y) => Y.points.map((Z) => Z.value))) : g.value
    ), c = $(() => k.value.w / Math.max(1, x.value)), S = $(() => c.value * 0.6), M = $(() => S.value / Math.max(1, m.value.length));
    function z(Y) {
      return C.value.left + Y * c.value + c.value / 2;
    }
    const R = $(
      () => m.value.flatMap(
        (Y, Z) => Y.points.map((B, N) => {
          const L = Math.max(0, B.value) / g.value * k.value.h;
          return {
            x: z(N) - S.value / 2 + Z * M.value,
            y: C.value.top + k.value.h - L,
            w: Math.max(0, M.value - 2),
            h: L,
            color: Y.color,
            index: N,
            name: Y.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), E = $(
      () => b.value.map((Y) => {
        const Z = Y.points.map((B, N) => ({
          x: z(N),
          y: C.value.top + k.value.h - Math.max(0, B.value) / v.value * k.value.h,
          value: B.value
        }));
        return {
          ...Y,
          pts: Z,
          d: Z.map((B, N) => `${N === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((Y) => ({
        y: C.value.top + k.value.h * Y,
        left: g.value * (1 - Y),
        right: v.value * (1 - Y)
      }))
    ), H = $(() => Math.max(1, Math.ceil(x.value / 10)));
    function W(Y) {
      return Y === x.value - 1 || Y % H.value === 0;
    }
    const J = (Y) => o.format ? o.format(Y) : ae(Y);
    function ae(Y) {
      return Math.abs(Y) >= 1e6 ? `${(Y / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(Y) >= 1e3 ? `${(Y / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(Y * 100) / 100);
    }
    const te = $(() => {
      if (s.value === null)
        return null;
      const Y = s.value;
      return {
        label: p.value[Y],
        rows: [
          ...m.value.map((Z) => ({
            name: Z.name,
            color: Z.color,
            value: Z.points[Y]?.value ?? 0
          })),
          ...b.value.map((Z) => ({
            name: Z.name,
            color: Z.color,
            value: Z.points[Y]?.value ?? 0
          }))
        ]
      };
    });
    return (Y, Z) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Z[0] || (Z[0] = (B) => s.value = null)
        }, [
          (t(!0), a(P, null, V(ee.value, (B) => (t(), a("line", {
            key: `g-${B.y}`,
            x1: C.value.left,
            x2: r.value - C.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, zv))), 128)),
          (t(!0), a(P, null, V(ee.value, (B) => (t(), a("text", {
            key: `lt-${B.y}`,
            x: C.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(B.left)), 9, Pv))), 128)),
          A.value ? (t(!0), a(P, { key: 0 }, V(ee.value, (B) => (t(), a("text", {
            key: `rt-${B.y}`,
            x: r.value - C.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(B.right)), 9, _v))), 128)) : y("", !0),
          (t(!0), a(P, null, V(p.value, (B, N) => (t(), a("rect", {
            key: `hit-${N}`,
            x: C.value.left + N * c.value,
            y: C.value.top,
            width: c.value,
            height: k.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === N ? 0.4 : 0,
            onMouseenter: (L) => s.value = N
          }, null, 40, Ov))), 128)),
          (t(!0), a(P, null, V(R.value, (B, N) => (t(), a("rect", {
            key: `b-${N}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, jv))), 128)),
          (t(!0), a(P, null, V(E.value, (B, N) => (t(), a("g", {
            key: `l-${N}`
          }, [
            l("path", {
              d: B.d,
              fill: "none",
              stroke: B.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Lv),
            s.value !== null && B.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Vv)) : y("", !0)
          ]))), 128)),
          (t(!0), a(P, null, V(p.value, (B, N) => ue((t(), a("text", {
            key: `x-${N}`,
            x: z(N),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(B), 9, Tv)), [
            [Te, W(N)]
          ])), 128))
        ], 40, Av)),
        te.value ? (t(), a("div", Dv, [
          l("p", Ev, f(te.value.label), 1),
          (t(!0), a(P, null, V(te.value.rows, (B, N) => (t(), a("div", {
            key: N,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            l("span", Iv, f(B.name), 1),
            l("span", Fv, f(J(B.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend ? (t(), a("div", Nv, [
          (t(!0), a(P, null, V([...m.value, ...b.value], (B, N) => (t(), a("span", {
            key: N,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            l("span", Rv, f(B.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Uv = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Hv = { class: "text-muted-foreground" }, qv = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Kv = ["width", "height"], Gv = ["x", "y"], Wv = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Zv = ["x", "y"], Jv = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Yv = { class: "text-[11px] font-medium capitalize" }, Xv = { class: "text-muted-foreground text-[11px] capitalize" }, Qv = { class: "text-sm font-semibold tabular-nums" }, eg = { class: "text-muted-foreground text-xs font-normal" }, P5 = /* @__PURE__ */ O({
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
    const o = e, n = K(null), r = K(560), s = K(null);
    let i = null;
    pe(() => {
      i = new ResizeObserver((S) => {
        r.value = Math.max(160, S[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), be(() => i?.disconnect());
    const d = $(() => o.series[0]?.points.map((S) => S.label) ?? []), u = $(() => o.series.length), m = $(() => d.value.length), b = $(() => Math.min(140, Math.max(60, r.value * 0.16))), p = $(() => Math.max(1, r.value - b.value - 8)), x = $(() => p.value / Math.max(1, m.value)), A = $(() => Math.max(1, (o.height - 8) / Math.max(1, u.value)));
    function C(S) {
      if (S === 0)
        return "var(--muted)";
      const M = Math.max(1, o.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(S / M * 100)}%, var(--muted))`;
    }
    function k(S) {
      for (let M = 0; M < o.buckets.length; M++) {
        const z = o.buckets[M].max;
        if (z === void 0 || S < z)
          return M;
      }
      return o.buckets.length - 1;
    }
    const w = $(
      () => o.series.flatMap(
        (S, M) => S.points.map((z, R) => {
          const E = k(z.value);
          return {
            row: M,
            col: R,
            x: b.value + R * x.value,
            y: 4 + M * A.value,
            w: Math.max(1, x.value - 1),
            h: Math.max(1, A.value - 4),
            colour: C(E),
            label: z.label,
            value: z.value,
            rowName: S.name,
            bucketLabel: o.buckets[E].label
          };
        })
      )
    ), g = $(() => x.value < 2), v = $(() => s.value ? w.value.find((S) => S.row === s.value.row && S.col === s.value.col) ?? null : null), c = (S) => o.format ? o.format(S) : new Intl.NumberFormat().format(S);
    return (S, M) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      u.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        l("div", Uv, [
          (t(!0), a(P, null, V(e.buckets, (z, R) => (t(), a("span", {
            key: R,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            l("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: C(R) })
            }, null, 4),
            l("span", Hv, f(z.label), 1)
          ]))), 128))
        ]),
        g.value ? (t(), a("p", qv, f(m.value) + " columns - too many to label individually ", 1)) : y("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: M[0] || (M[0] = (z) => s.value = null)
        }, [
          (t(!0), a(P, null, V(e.series, (z, R) => (t(), a("text", {
            key: `r-${R}`,
            x: b.value - 10,
            y: 4 + R * A.value + A.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(z.name), 9, Gv))), 128)),
          (t(!0), a(P, null, V(w.value, (z, R) => (t(), a("rect", {
            key: R,
            x: z.x,
            y: z.y,
            width: z.w,
            height: z.h,
            fill: z.colour,
            "fill-opacity": s.value === null || s.value.row === z.row && s.value.col === z.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (E) => s.value = { row: z.row, col: z.col }
          }, null, 40, Wv))), 128)),
          e.showColumnLabels && !g.value ? (t(!0), a(P, { key: 0 }, V(d.value, (z, R) => (t(), a("text", {
            key: `c-${R}`,
            x: b.value + R * x.value + x.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(z), 9, Zv))), 128)) : y("", !0)
        ], 40, Kv)),
        v.value ? (t(), a("div", Jv, [
          l("p", Yv, f(v.value.label), 1),
          l("p", Xv, f(v.value.rowName), 1),
          l("p", Qv, [
            U(f(c(v.value.value)) + " ", 1),
            l("span", eg, "(" + f(v.value.bucketLabel) + ")", 1)
          ])
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), tg = ["viewBox"], ag = { key: 0 }, ng = ["id"], lg = ["stop-color"], og = ["stop-color"], sg = ["d", "fill"], rg = ["d", "stroke"], ea = 100, Ke = 30, ut = /* @__PURE__ */ O({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = Math.random().toString(36).slice(2, 9), r = $(() => {
      const u = o.data.map((x) => x.value);
      if (u.length < 2)
        return [];
      const m = Math.min(...u), p = Math.max(...u) - m || 1;
      return u.map((x, A) => ({
        x: A / (u.length - 1) * ea,
        y: Ke - (x - m) / p * (Ke - 4) - 2
      }));
    });
    function s(u) {
      const m = u.length;
      if (m < 2)
        return "";
      const b = [], p = [];
      for (let C = 0; C < m - 1; C++)
        b[C] = u[C + 1].x - u[C].x, p[C] = b[C] === 0 ? 0 : (u[C + 1].y - u[C].y) / b[C];
      const x = [p[0]];
      for (let C = 1; C < m - 1; C++)
        if (p[C - 1] * p[C] <= 0)
          x[C] = 0;
        else {
          const k = 2 * b[C] + b[C - 1], w = b[C] + 2 * b[C - 1];
          x[C] = (k + w) / (k / p[C - 1] + w / p[C]);
        }
      x[m - 1] = p[m - 2];
      let A = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let C = 0; C < m - 1; C++) {
        const k = b[C] / 3;
        A += ` C${(u[C].x + k).toFixed(2)},${(u[C].y + x[C] * k).toFixed(2)} ${(u[C + 1].x - k).toFixed(2)},${(u[C + 1].y - x[C + 1] * k).toFixed(2)} ${u[C + 1].x.toFixed(2)},${u[C + 1].y.toFixed(2)}`;
      }
      return A;
    }
    const i = $(() => {
      const u = r.value;
      return u.length < 2 ? "" : o.smooth ? s(u) : u.map((m, b) => `${b === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), d = $(() => {
      const u = r.value;
      return !o.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${Ke} L${u[0].x.toFixed(2)},${Ke} Z`;
    });
    return (u, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${ea} ${Ke}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", ag, [
        l("linearGradient", {
          id: `pk-spark-${h(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          l("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, lg),
          l("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, og)
        ], 8, ng)
      ])) : y("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${h(n)})`
      }, null, 8, sg)) : y("", !0),
      l("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, rg)
    ], 12, tg)) : y("", !0);
  }
}), ig = { class: "flex items-center gap-1 text-xs" }, dg = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, ug = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Sa = /* @__PURE__ */ O({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, n = $(() => o.direction === "flat" ? null : o.direction === "new" ? !o.inverted : o.inverted ? o.direction === "down" : o.direction === "up"), r = $(
      () => n.value === null ? "text-muted-foreground" : n.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = $(
      () => o.direction === "flat" ? "→" : o.direction === "down" ? "▼" : "▲"
    ), i = $(() => o.direction === "new" ? "New" : o.percentage === null ? "-" : `${Math.abs(o.percentage)}%`);
    return (d, u) => (t(), a("span", ig, [
      l("span", {
        class: _(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        l("span", dg, f(s.value), 1),
        U(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", ug, f(e.comparison), 1)) : y("", !0)
    ]));
  }
}), cg = ["data-collapsed"], fg = { class: "flex flex-wrap items-start justify-between gap-2" }, mg = { class: "flex min-w-0 items-start gap-2" }, pg = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vg = ["d"], gg = { class: "min-w-0" }, hg = { class: "text-sm font-medium" }, bg = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, xg = { class: "flex shrink-0 items-center gap-1.5" }, yg = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, kg = ["aria-pressed", "onClick"], $g = ["aria-expanded", "aria-label", "title"], wg = ["aria-label"], Cg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sg = ["d"], Mg = /* @__PURE__ */ O({
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
    const o = e, n = Mt(), r = K(o.defaultCollapsed), s = $(() => !!o.icon && !n.icon), i = $(() => {
      if (!(o.fitBody && !o.loading && !o.error))
        return { minHeight: `${o.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: _(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      l("div", fg, [
        l("div", mg, [
          q(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", pg, [
              l("path", {
                d: h(ie)(e.icon)
              }, null, 8, vg)
            ])) : y("", !0)
          ]),
          l("div", gg, [
            l("p", hg, f(e.label), 1),
            e.description ? (t(), a("p", bg, f(e.description), 1)) : y("", !0),
            q(d.$slots, "trend")
          ])
        ]),
        l("div", xg, [
          q(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", yg, [
            (t(!0), a(P, null, V(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: _([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (b) => d.$emit("update:period", m.value)
            }, f(m.label), 11, kg))), 128))
          ])) : y("", !0),
          e.collapsible ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: u[0] || (u[0] = (m) => r.value = !r.value)
          }, [
            (t(), a("svg", {
              class: _(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [...u[2] || (u[2] = [
              l("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, $g)) : y("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (m) => d.$emit("hide"))
          }, [
            (t(), a("svg", Cg, [
              l("path", {
                d: h(ie)("eye-off")
              }, null, 8, Sg)
            ]))
          ], 8, wg)) : y("", !0)
        ])
      ]),
      r.value ? y("", !0) : (t(), a("div", {
        key: 0,
        style: ne(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T($e, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), a("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ne({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : q(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, cg));
  }
}), Bg = ["aria-pressed", "aria-label", "title"], Ag = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zg = ["d"], Pg = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, _g = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Og = ["href"], jg = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lg = ["d"], Vg = ["aria-label", "onClick"], Tg = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Dg = ["d"], Eg = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ig = ["d"], Fg = {
  key: 0,
  class: "flex flex-col gap-1"
}, Ng = ["onClick"], Rg = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ug = ["d"], Hg = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, qg = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!1), i = K(!1), d = $(
      () => n.catalog.filter((b) => !n.items.some((p) => p.id === b.id))
    );
    function u(b) {
      r(
        "update:items",
        n.items.filter((p) => p.id !== b)
      );
    }
    function m(b) {
      r("update:items", [...n.items, b]), i.value = !1;
    }
    return (b, p) => (t(), a(P, null, [
      I(Mg, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (x) => r("hide"))
      }, {
        actions: j(() => [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (x) => s.value = !s.value)
          }, [
            (t(), a("svg", Ag, [
              l("path", {
                d: h(ie)(s.value ? "check" : "pencil")
              }, null, 8, zg)
            ]))
          ], 8, Bg)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), a("div", Pg, [
            p[7] || (p[7] = l("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (x) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                U("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", _g, [
            (t(!0), a(P, null, V(e.items, (x) => (t(), a("div", {
              key: x.id,
              class: "inline-flex items-center gap-1"
            }, [
              l("a", {
                href: x.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", jg, [
                  l("path", {
                    d: h(ie)(x.icon)
                  }, null, 8, Lg)
                ])),
                U(" " + f(x.label), 1)
              ], 8, Og),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${x.label}`,
                onClick: (A) => u(x.id)
              }, [
                (t(), a("svg", Tg, [
                  l("path", {
                    d: h(ie)("x")
                  }, null, 8, Dg)
                ]))
              ], 8, Vg)) : y("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (x) => i.value = !0)
            }, [
              (t(), a("svg", Eg, [
                l("path", {
                  d: h(ie)("plus")
                }, null, 8, Ig)
              ])),
              p[8] || (p[8] = U(" Add ", -1))
            ])) : y("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      I(Ye, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (x) => i.value = !1)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (x) => i.value = !1)
          }, {
            default: j(() => [...p[9] || (p[9] = [
              U("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          d.value.length ? (t(), a("ul", Fg, [
            (t(!0), a(P, null, V(d.value, (x) => (t(), a("li", {
              key: x.id
            }, [
              l("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (A) => m(x)
              }, [
                (t(), a("svg", Rg, [
                  l("path", {
                    d: h(ie)(x.icon)
                  }, null, 8, Ug)
                ])),
                U(" " + f(x.label), 1)
              ], 8, Ng)
            ]))), 128))
          ])) : (t(), a("p", Hg, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Kg = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Gg = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Wg = { class: "relative w-full max-w-xl" }, Zg = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jg = ["d"], Yg = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Xg = ["data-slot"], Qg = { class: "px-5 py-4" }, eh = { class: "mb-3 text-sm font-semibold" }, th = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, ah = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nh = ["d"], lh = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, _5 = /* @__PURE__ */ O({
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
    const o = e, n = K(""), r = $(() => {
      const u = o.linkComponent;
      return typeof u == "string" ? u : aa(u);
    }), s = Ge({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = $(() => {
      const u = n.value.trim().toLowerCase();
      return o.sections.map((m) => ({
        ...m,
        links: u ? m.links.filter((b) => b.label.toLowerCase().includes(u)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (u, m) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-8", e.embedded ? "" : h(De)])
    }, [
      l("header", null, [
        l("h1", Kg, f(e.title), 1),
        e.description ? (t(), a("p", Gg, f(e.description), 1)) : y("", !0)
      ]),
      l("div", Wg, [
        (t(), a("svg", Zg, [
          l("path", {
            d: h(ie)("search")
          }, null, 8, Jg)
        ])),
        I(ge, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (b) => n.value = b),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), a("div", Yg, [
        (t(!0), a(P, null, V(d.value, (b) => (t(), a("section", {
          key: b.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${b.key}`
        }, [
          l("div", Qg, [
            l("h2", eh, f(b.title), 1),
            l("div", th, [
              (t(!0), a(P, null, V(b.links, (p) => (t(), T(xe(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: _(h(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), a("svg", ah, [
                    l("path", {
                      d: h(ie)(p.icon)
                    }, null, 8, nh)
                  ])),
                  U(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Xg))), 128))
      ])) : (t(), a("p", lh, ' Nothing matches "' + f(n.value) + '". ', 1))
    ], 2));
  }
}), oh = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, sh = { class: "flex flex-1 flex-col gap-1 p-4" }, rh = { class: "text-muted-foreground relative text-xs font-medium" }, ih = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, dh = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, uh = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, ch = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, O5 = /* @__PURE__ */ O({
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
    const o = (n) => typeof n == "number" ? new Intl.NumberFormat().format(n) : String(n ?? "-");
    return (n, r) => (t(), a("div", oh, [
      l("div", sh, [
        l("p", rh, f(e.label), 1),
        e.loading ? (t(), T($e, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", ih, " Could not load ")) : (t(), a("span", dh, f(o(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Sa, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", uh, f(e.description), 1)) : y("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", ch, [
        I(ut, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : y("", !0)
    ]));
  }
}), fh = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, mh = { class: "flex flex-col gap-1 p-4" }, ph = { class: "flex items-start justify-between gap-2" }, vh = { class: "text-sm font-medium" }, gh = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, hh = { class: "mt-1 flex flex-wrap items-center gap-2" }, bh = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, xh = {
  key: 0,
  class: "-mb-px"
}, rt = /* @__PURE__ */ O({
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
    const o = e, n = $(() => o.delta === null || o.delta === 0 ? null : o.inverted ? o.delta < 0 : o.delta > 0), r = $(
      () => n.value === null ? "bg-muted text-muted-foreground" : n.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = $(
      () => typeof o.value == "number" ? new Intl.NumberFormat().format(o.value) : o.value
    );
    return (i, d) => (t(), a("div", fh, [
      l("div", mh, [
        l("div", ph, [
          l("p", vh, f(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", gh, f(e.caption), 1)) : y("", !0),
        l("div", hh, [
          e.loading ? (t(), T($e, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", bh, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: _(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : y("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", xh, [
        I(ut, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : y("", !0)
    ]));
  }
}), yh = { class: "relative flex flex-col gap-2" }, kh = ["aria-label"], $h = ["onMouseenter"], wh = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Ch = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Sh = { class: "truncate" }, Mh = { class: "text-sm font-semibold tabular-nums" }, j5 = /* @__PURE__ */ O({
  __name: "SegmentedBar",
  props: {
    segments: {},
    total: { default: null },
    format: {},
    showLegend: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = $(() => o.segments.reduce((b, p) => b + Math.max(0, p.value), 0)), s = $(() => Math.max(o.total ?? r.value, r.value, 1)), i = $(
      () => o.segments.map((b, p) => {
        const x = Math.max(0, b.value) / s.value;
        return {
          ...b,
          color: b.color ?? n[p % n.length],
          share: x,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: b.value > 0 ? `max(2px, ${(x * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (b) => o.format ? o.format(b) : new Intl.NumberFormat().format(b), u = K(null), m = (b) => `${(b * 100).toFixed(b > 0 && b < 0.01 ? 1 : 0)}%`;
    return (b, p) => (t(), a("div", yh, [
      l("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((x) => `${x.label} ${d(x.value)}`).join(", ")
      }, [
        (t(!0), a(P, null, V(i.value, (x, A) => (t(), a("span", {
          key: A,
          class: _(["h-full transition-all", [
            A === 0 ? "rounded-l-full" : "",
            A === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: x.width,
            background: x.color,
            opacity: u.value === null || u.value === A ? 1 : 0.4
          }),
          onMouseenter: (C) => u.value = A,
          onMouseleave: p[0] || (p[0] = (C) => u.value = null)
        }, null, 46, $h))), 128))
      ], 12, kh),
      e.showLegend ? (t(), a("div", wh, [
        (t(!0), a(P, null, V(i.value, (x, A) => (t(), a("div", {
          key: A,
          class: "flex min-w-0 flex-col"
        }, [
          l("span", Ch, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: x.color })
            }, null, 4),
            l("span", Sh, f(x.label), 1)
          ]),
          l("span", Mh, f(d(x.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      u.value !== null ? (t(), T(tt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: m(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), Bh = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Ah = ["data-heading"], zh = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Ph = { class: "text-muted-foreground truncate" }, _h = ["aria-label"], L5 = /* @__PURE__ */ O({
  __name: "StatListChart",
  props: {
    rows: {}
  },
  setup(e) {
    const o = e, n = {
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
    }, s = $(
      () => o.rows.map((i) => {
        if (!i.bar || i.bar.segments.length === 0)
          return { ...i, segments: [] };
        const d = i.bar.segments.reduce((m, b) => m + Math.max(0, b.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
        return {
          ...i,
          segments: i.bar.segments.map((m) => ({
            ...m,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: m.value > 0 ? `max(2px, ${(Math.max(0, m.value) / u * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, d) => (t(), a("div", Bh, [
      (t(!0), a(P, null, V(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: _(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), a("div", zh, [
          l("span", Ph, f(u.label), 1),
          l("span", {
            class: _(["shrink-0 font-medium tabular-nums", u.tone ? n[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(P, null, V(u.segments, (m, b) => (t(), a("span", {
            key: b,
            class: _(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ne({ width: m.width })
          }, null, 6))), 128))
        ], 8, _h)) : y("", !0)
      ], 8, Ah))), 128))
    ]));
  }
}), Oh = {
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
}, jh = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Lh(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Vh(e, o) {
  return o || (e ? Oh[Lh(e)] ?? "neutral" : "neutral");
}
function Th(e, o) {
  return jh[Vh(e, o)];
}
const he = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const o = e, n = $(() => Th(o.status, o.tone));
    return (r, s) => (t(), T(We, {
      variant: n.value,
      class: _(o.class)
    }, {
      default: j(() => [
        q(r.$slots, "default", {}, () => [
          U(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Dh = ["data-layout"], Eh = ["src", "alt"], Ih = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Fh = ["src"], Nh = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Rh = ["onMouseenter"], Uh = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Hh = { class: "min-w-0" }, qh = { class: "truncate text-sm font-medium" }, Kh = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Gh = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Wh = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Zh = { class: "min-w-0" }, Jh = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Yh = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Xh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qh = ["d"], e1 = ["aria-label"], t1 = /* @__PURE__ */ O({
  __name: "CatalogCard",
  props: {
    item: {},
    layout: { default: "grid" }
  },
  emits: ["select", "cart"],
  setup(e, { emit: o }) {
    const n = {
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-destructive",
      info: "bg-info",
      neutral: "bg-muted-foreground/40"
    }, r = e, s = o, i = K(0);
    function d(w) {
      if (typeof w != "string")
        return null;
      const g = w.trim();
      return g === "" ? null : /^(https?:)?\/\//i.test(g) ? g : null;
    }
    const u = $(() => {
      const w = [r.item.image, ...r.item.images ?? []].map(d).filter((g) => g !== null);
      return [...new Set(w)];
    }), m = $(() => u.value[i.value] ?? u.value[0] ?? null), b = $(
      () => r.item.label.split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("")
    ), p = $(() => {
      const w = r.item.progress;
      if (!w)
        return null;
      const g = Math.max(w.total ?? 100, w.value, 1);
      return `${Math.min(100, Math.max(0, w.value / g * 100)).toFixed(2)}%`;
    }), x = $(() => u.value.length > 1 ? u.value[1] : null), A = $(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), C = $(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function k(w) {
      w.stopPropagation(), s("cart", r.item.key);
    }
    return (w, g) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: _(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: g[0] || (g[0] = (v) => s("select", e.item.key)),
      onKeydown: g[1] || (g[1] = Ta(me((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: g[2] || (g[2] = (v) => i.value = 0)
    }, [
      l("div", {
        class: _([
          "bg-muted relative overflow-hidden",
          e.layout === "list" ? "aspect-square w-20 shrink-0 sm:w-24" : "aspect-[4/3] w-full"
        ])
      }, [
        m.value ? (t(), a("img", {
          key: 0,
          src: m.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, Eh)) : (t(), a("span", Ih, f(b.value), 1)),
        e.layout === "grid" && x.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: x.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Fh)) : y("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", Nh, [
          (t(!0), a(P, null, V(u.value, (v, c) => (t(), a("span", {
            key: c,
            class: _(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (S) => i.value = c
          }, null, 42, Rh))), 128))
        ])) : y("", !0)
      ], 2),
      l("div", {
        class: _(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        l("div", Uh, [
          l("div", Hh, [
            l("p", qh, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", Kh, f(e.item.caption), 1)) : y("", !0),
            e.item.facts?.length ? (t(), a("p", Gh, f(e.item.facts.join(" · ")), 1)) : y("", !0)
          ]),
          e.item.status ? (t(), T(he, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : y("", !0)
        ]),
        l("div", Wh, [
          l("div", Zh, [
            e.item.price ? (t(), a("p", Jh, f(e.item.price), 1)) : y("", !0),
            C.value ? (t(), a("p", Yh, f(C.value), 1)) : y("", !0)
          ]),
          A.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: k
          }, [
            (t(), a("svg", Xh, [
              l("path", {
                d: h(ie)("cart")
              }, null, 8, Qh)
            ]))
          ])) : y("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          l("span", {
            class: _(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, e1)) : y("", !0)
      ], 2)
    ], 42, Dh));
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
}, i1 = { key: 0 }, d1 = { key: 1 }, u1 = { key: 2 }, c1 = { key: 3 }, f1 = { class: "text-sm font-semibold" }, m1 = { class: "flex items-baseline gap-1" }, p1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, v1 = { class: "text-muted-foreground text-sm" }, g1 = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
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
}, M1 = { class: "text-foreground font-medium" }, B1 = { class: "mt-auto flex gap-2 pt-2" }, A1 = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.plan.priceFormatted ?? String(n.plan.price)
    ), i = $(
      () => !!(n.plan.featured || n.plan.recommended)
    ), d = $(() => {
      const m = n.plan.perks ?? {};
      return Object.entries(m).map(([b, p]) => ({
        key: b,
        label: b.replace(/_/g, " "),
        granted: l1(p.value),
        display: n1(p.value)
      }));
    }), u = $(() => n.plan.extraPerks ?? []);
    return (m, b) => (t(), a("article", {
      class: _(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      l("header", s1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", r1, [
          e.plan.recommended ? (t(), a("span", i1, "Recommended")) : e.plan.featured ? (t(), a("span", d1, "Featured")) : y("", !0),
          e.plan.trial ? (t(), a("span", u1, "Trial")) : y("", !0),
          e.plan.active === !1 ? (t(), a("span", c1, "Inactive")) : y("", !0)
        ])) : y("", !0),
        l("h3", f1, f(e.plan.name), 1),
        l("p", m1, [
          l("span", p1, f(s.value), 1),
          l("span", v1, f(h(a1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", g1, f(e.plan.shortDescription), 1)) : y("", !0),
        l("p", h1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      l("ul", b1, [
        (t(!0), a(P, null, V(d.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          l("span", x1, [
            l("span", {
              class: _(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", y1, [
                l("path", {
                  d: h(ie)("check")
                }, null, 8, k1)
              ])) : (t(), a("svg", $1, [
                l("path", {
                  d: h(ie)("x")
                }, null, 8, w1)
              ]))
            ], 2),
            l("span", C1, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", S1, f(p.display), 1)) : y("", !0)
        ]))), 128)),
        (t(!0), a(P, null, V(u.value, (p, x) => (t(), a("li", {
          key: `extra-${x}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          l("span", null, f(p.key), 1),
          l("span", M1, f(p.value), 1)
        ]))), 128))
      ]),
      l("footer", B1, [
        I(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: b[0] || (b[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...b[2] || (b[2] = [
            U(" Edit ", -1)
          ])]),
          _: 1
        }),
        I(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: b[1] || (b[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...b[3] || (b[3] = [
            U(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, o1));
  }
}), z1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, P1 = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, _1 = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, O1 = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, j1 = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, V5 = /* @__PURE__ */ O({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: o }) {
    const n = o;
    return (r, s) => (t(), a("div", {
      class: _(["w-full space-y-6", e.embedded ? "" : h(De)]),
      "data-slot": "plan-grid"
    }, [
      l("header", z1, [
        l("div", null, [
          e.title ? (t(), a("h1", P1, f(e.title), 1)) : y("", !0),
          e.description ? (t(), a("p", _1, f(e.description), 1)) : y("", !0)
        ]),
        I(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: j(() => [...s[3] || (s[3] = [
            U("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", O1, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", j1, [
        (t(!0), a(P, null, V(e.plans, (i) => (t(), T(A1, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), L1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, V1 = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, T1 = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, D1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, E1 = { class: "space-y-1.5" }, I1 = { class: "space-y-1.5" }, F1 = { class: "space-y-1.5" }, N1 = { class: "space-y-1.5" }, R1 = { class: "space-y-1.5" }, U1 = { class: "flex items-center gap-3 text-sm" }, H1 = { class: "flex items-center gap-3 text-sm" }, q1 = { class: "flex items-center gap-3 text-sm" }, K1 = {
  key: 0,
  class: "space-y-1.5"
}, G1 = { class: "flex items-center gap-3 text-sm" }, W1 = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Z1 = { class: "space-y-1.5" }, J1 = ["value"], Y1 = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, X1 = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Q1 = ["id", "value", "onInput"], eb = { class: "space-y-2" }, tb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, ab = ["d"], nb = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ht = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", T5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
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
    }), r = e, s = o, i = Je(n());
    function d(g, v) {
      const c = i.perks?.[g]?.value;
      return c ?? v;
    }
    function u(g, v, c) {
      const S = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: v,
          overview: c ?? S?.overview ?? ""
        }
      };
    }
    function m(g, v) {
      const c = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: c?.value ?? (g === "modules" ? [] : 0),
          overview: v
        }
      };
    }
    function b(g) {
      const v = g ? { ...n(), ...g } : n();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    b(r.plan), ce(
      () => r.plan,
      (g) => b(g),
      { deep: !0 }
    );
    const p = $({
      get: () => {
        const g = d("modules", []);
        return Array.isArray(g) ? g.map(String) : [];
      },
      set: (g) => {
        u("modules", A(g.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), x = $(
      () => r.modules.map((g) => ({ value: g.key, label: g.label }))
    );
    function A(g) {
      const v = Object.fromEntries(r.modules.map((M) => [M.key, M])), c = new Set(g);
      for (const M of r.modules)
        if (!c.has(M.key))
          for (const z of M.children ?? [])
            c.delete(z);
      let S = !0;
      for (; S; ) {
        S = !1;
        for (const M of [...c])
          for (const z of v[M]?.requires ?? [])
            c.has(z) || (c.add(z), S = !0);
      }
      return [...c];
    }
    function C() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function k(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== g);
    }
    function w() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, v) => (t(), a("form", {
      class: _(["w-full space-y-6", e.embedded ? "" : h(De)]),
      "data-slot": "plan-editor",
      onSubmit: me(w, ["prevent"])
    }, [
      l("header", L1, [
        l("div", null, [
          l("h1", V1, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = l("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        I(se, {
          type: "button",
          variant: "outline",
          onClick: v[0] || (v[0] = (c) => s("cancel"))
        }, {
          default: j(() => [...v[14] || (v[14] = [
            U("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      l("div", T1, [
        l("section", D1, [
          v[26] || (v[26] = l("h2", { class: "font-semibold" }, "Plan details", -1)),
          l("div", E1, [
            I(ke, { for: "plan-name" }, {
              default: j(() => [...v[15] || (v[15] = [
                U("Plan name", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (c) => i.name = c),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          l("div", I1, [
            I(ke, { for: "plan-short" }, {
              default: j(() => [...v[16] || (v[16] = [
                U("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (c) => i.shortDescription = c),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          l("div", F1, [
            I(ke, { for: "plan-description" }, {
              default: j(() => [...v[17] || (v[17] = [
                U("Plan description", -1)
              ])]),
              _: 1
            }),
            ue(l("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (c) => i.description = c),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: _(ht)
            }, null, 512), [
              [ye, i.description]
            ])
          ]),
          l("div", N1, [
            I(ke, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            ue(l("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: _(nb)
            }, [...v[19] || (v[19] = [
              l("option", { value: 30 }, "Monthly", -1),
              l("option", { value: 365 }, "Yearly", -1),
              l("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Ie,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          l("div", R1, [
            I(ke, { for: "plan-price" }, {
              default: j(() => [...v[20] || (v[20] = [
                U("Price", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": v[5] || (v[5] = (c) => i.price = Number(c))
            }, null, 8, ["model-value"])
          ]),
          l("label", U1, [
            I(h(Fe), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = U(" Featured ", -1))
          ]),
          l("label", H1, [
            I(h(Fe), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = U(" Recommended ", -1))
          ]),
          l("label", q1, [
            I(h(Fe), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", K1, [
            I(ke, { for: "plan-trial-days" }, {
              default: j(() => [...v[24] || (v[24] = [
                U("Trial days", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (c) => i.trialDays = Number(c))
            }, null, 8, ["model-value"])
          ])) : y("", !0),
          l("label", G1, [
            I(h(Fe), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (c) => i.active = c)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = U(" Active ", -1))
          ]),
          I(se, {
            type: "submit",
            disabled: e.processing
          }, {
            default: j(() => [
              U(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        l("section", W1, [
          v[33] || (v[33] = l("h2", { class: "font-semibold" }, "Plan perks", -1)),
          l("div", Z1, [
            I(ke, null, {
              default: j(() => [...v[27] || (v[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            I(Vt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (c) => p.value = c),
              options: x.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            I(ke, { for: "plan-modules-overview" }, {
              default: j(() => [...v[28] || (v[28] = [
                U("Overview", -1)
              ])]),
              _: 1
            }),
            l("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: _(ht),
              onInput: v[12] || (v[12] = (c) => m(
                "modules",
                c.target.value
              ))
            }, null, 40, J1)
          ]),
          (t(!0), a(P, null, V(e.limits, (c) => (t(), a("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), a("label", Y1, [
              I(h(Fe), {
                checked: !!d(c.key, !1),
                "onUpdate:checked": (S) => u(
                  c.key,
                  S,
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              U(" " + f(c.label), 1)
            ])) : (t(), a(P, { key: 1 }, [
              I(ke, {
                for: `plan-limit-${c.key}`
              }, {
                default: j(() => [
                  U(f(c.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              c.hint ? (t(), a("p", X1, f(c.hint), 1)) : y("", !0),
              I(ge, {
                id: `plan-limit-${c.key}`,
                "model-value": Number(d(c.key, 0)),
                type: "number",
                step: c.step ?? 1,
                required: "",
                "onUpdate:modelValue": (S) => u(
                  c.key,
                  Number(S),
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              v[29] || (v[29] = l("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            I(ke, {
              for: `plan-overview-${c.key}`
            }, {
              default: j(() => [...v[30] || (v[30] = [
                U("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            l("textarea", {
              id: `plan-overview-${c.key}`,
              value: i.perks?.[c.key]?.overview ?? "",
              class: _(ht),
              onInput: (S) => m(
                c.key,
                S.target.value
              )
            }, null, 40, Q1)
          ]))), 128)),
          l("div", eb, [
            v[32] || (v[32] = l("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(P, null, V(i.extraPerks ?? [], (c, S) => (t(), a("div", {
              key: S,
              class: "flex items-center gap-2"
            }, [
              I(ge, {
                modelValue: c.key,
                "onUpdate:modelValue": (M) => c.key = M,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(ge, {
                modelValue: c.value,
                "onUpdate:modelValue": (M) => c.value = M,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (M) => k(S)
              }, {
                default: j(() => [
                  (t(), a("svg", tb, [
                    l("path", {
                      d: h(ie)("x")
                    }, null, 8, ab)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            I(se, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: C
            }, {
              default: j(() => [...v[31] || (v[31] = [
                U(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), lb = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, ob = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, sb = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, rb = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ib = ["d"], db = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, ub = ["aria-pressed"], cb = ["aria-pressed"], fb = {
  key: 0,
  class: "flex flex-col gap-2"
}, mb = ["aria-label"], pb = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, vb = ["aria-pressed", "onClick"], gb = ["aria-label"], hb = { class: "text-muted-foreground mr-1 text-xs font-medium" }, bb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, xb = ["data-slot"], yb = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, kb = { class: "text-muted-foreground text-xs tabular-nums" }, $b = { class: "flex items-center gap-2" }, wb = ["disabled"], Cb = ["disabled"], Nt = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Oe({
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
  emits: /* @__PURE__ */ Oe(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(""), i = Xe(e, "modelValue"), d = Je({}), u = Je({});
    ce(s, () => x());
    function m(E) {
      const ee = E.trim();
      if (ee === "")
        return null;
      const H = Number(ee);
      return Number.isFinite(H) ? H : null;
    }
    function b() {
      const E = {};
      for (const [ee, H] of Object.entries(u))
        E[ee] = { min: m(H.min), max: m(H.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: b() };
    }
    function x() {
      r("filter", p());
    }
    function A(E, ee) {
      d[E] = d[E] === ee ? null : ee, x();
    }
    function C(E) {
      return u[E] ?? { min: "", max: "" };
    }
    function k(E, ee, H) {
      const W = u[E] ?? { min: "", max: "" };
      u[E] = { ...W, [ee]: H }, x();
    }
    function w(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const g = $(() => n.facets.filter((E) => (E.kind ?? "chips") === "chips")), v = $(() => n.facets.filter((E) => E.kind === "range")), c = $(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), S = K(1);
    ce(
      () => n.items.map((E) => E.key).join(","),
      () => {
        S.value = 1;
      }
    );
    const M = $(() => {
      const E = n.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / E));
    }), z = $(() => {
      const E = n.pageSize;
      if (!E || E < 1)
        return n.items;
      const ee = (S.value - 1) * E;
      return n.items.slice(ee, ee + E);
    });
    function R(E) {
      S.value = Math.min(M.value, Math.max(1, E));
    }
    return (E, ee) => (t(), a("div", {
      class: _(["flex flex-col gap-4", h(xa)])
    }, [
      c.value ? (t(), a("div", lb, [
        l("div", ob, [
          e.searchable ? (t(), a("div", sb, [
            (t(), a("svg", rb, [
              l("path", {
                d: h(ie)("search")
              }, null, 8, ib)
            ])),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: w
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : y("", !0),
          q(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", db, [
            l("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, ub),
            l("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, cb)
          ])) : y("", !0)
        ]),
        g.value.length || v.value.length ? (t(), a("div", fb, [
          (t(!0), a(P, null, V(g.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", pb, f(H.label), 1)) : y("", !0),
            (t(!0), a(P, null, V(H.options ?? [], (W) => (t(), a("button", {
              key: W.value,
              type: "button",
              class: _([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === W.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === W.value ? "true" : "false",
              onClick: (J) => A(H.key, W.value)
            }, f(W.label), 11, vb))), 128))
          ], 8, mb))), 128)),
          (t(!0), a(P, null, V(v.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            l("span", hb, f(H.label ?? H.key), 1),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": C(H.key).min,
              "onUpdate:modelValue": (W) => k(H.key, "min", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": C(H.key).max,
              "onUpdate:modelValue": (W) => k(H.key, "max", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, gb))), 128))
        ])) : y("", !0)
      ])) : y("", !0),
      e.items.length === 0 ? (t(), a("p", bb, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: _(
          i.value === "list" ? "flex flex-col gap-3" : h(sc)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(P, null, V(z.value, (H) => (t(), T(t1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (W) => r("select", W)),
          onCart: ee[4] || (ee[4] = (W) => r("cart", W))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, xb)),
      e.pageSize && M.value > 1 ? (t(), a("div", yb, [
        l("p", kb, " Page " + f(S.value) + " of " + f(M.value), 1),
        l("div", $b, [
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => R(S.value - 1))
          }, " Previous ", 8, wb),
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value >= M.value,
            onClick: ee[6] || (ee[6] = (H) => R(S.value + 1))
          }, " Next ", 8, Cb)
        ])
      ])) : y("", !0)
    ], 2));
  }
}), Sb = ["aria-label"], Mb = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Bb = { class: "min-w-0" }, Ab = { class: "text-base font-semibold" }, zb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Pb = { class: "flex shrink-0 items-center gap-2" }, _b = { class: "min-h-0 flex-1 overflow-y-auto" }, Ob = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Rt = /* @__PURE__ */ O({
  __name: "PkSlideover",
  props: {
    open: { type: Boolean },
    title: {},
    description: { default: null },
    side: { default: "right" },
    width: { default: "w-96" }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(null);
    let i = null, d = "";
    function u(m) {
      if (!n.open)
        return;
      if (m.key === "Escape") {
        m.stopPropagation(), r("close");
        return;
      }
      if (m.key !== "Tab" || !s.value)
        return;
      const b = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (b.length === 0)
        return;
      const p = b[0], x = b[b.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), x.focus()) : !m.shiftKey && document.activeElement === x && (m.preventDefault(), p.focus());
    }
    return ce(
      () => n.open,
      async (m) => {
        if (m) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await ze(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), be(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (m, b) => (t(), T(Ue, { to: "body" }, [
      I(Ve, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: b[0] || (b[0] = (p) => r("close"))
          })) : y("", !0)
        ]),
        _: 1
      }),
      I(Ve, {
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
            class: _(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            l("header", Mb, [
              l("div", Bb, [
                l("h2", Ab, f(e.title), 1),
                e.description ? (t(), a("p", zb, f(e.description), 1)) : y("", !0)
              ]),
              l("div", Pb, [
                q(m.$slots, "header-actions"),
                l("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: b[1] || (b[1] = (p) => r("close"))
                }, [...b[2] || (b[2] = [
                  l("svg", {
                    viewBox: "0 0 24 24",
                    class: "size-4",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    l("path", { d: "M18 6 6 18M6 6l12 12" })
                  ], -1)
                ])])
              ])
            ]),
            l("div", _b, [
              q(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", Ob, [
              q(m.$slots, "footer")
            ])) : y("", !0)
          ], 10, Sb)) : y("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function _e() {
  return { query: "", selected: {}, ranges: {} };
}
function jb(e, o) {
  const n = e.metrics?.[o];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[o];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Lb(e, o) {
  return !o || o.min === null && o.max === null ? !0 : !(e === null || o.min !== null && e < o.min || o.max !== null && e > o.max);
}
function Ut(e, o) {
  const n = o.query.trim().toLowerCase();
  if (n !== "" && ![
    e.key,
    e.sku ?? "",
    e.label,
    e.caption ?? "",
    ...e.facts ?? []
  ].join(" ").toLowerCase().includes(n))
    return !1;
  for (const [r, s] of Object.entries(o.selected ?? {}))
    if (s && (e.facets?.[r] ?? null) !== s)
      return !1;
  for (const [r, s] of Object.entries(o.ranges ?? {}))
    if (!Lb(jb(e, r), s))
      return !1;
  return !0;
}
function Vb(e, o) {
  const n = o.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function it(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (o) => o.min !== null || o.max !== null
  );
}
const Tb = { class: "flex flex-col gap-6 p-4" }, Db = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Eb = { class: "text-sm font-semibold" }, Ib = { class: "flex flex-wrap items-center gap-1.5" }, Fb = ["aria-pressed", "onClick"], Nb = { class: "text-sm font-semibold" }, Rb = { class: "flex flex-wrap items-center gap-1.5" }, Ub = { key: 0 }, Ma = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(""), i = Je({}), d = Je({}), u = $(
      () => n.facets.filter((M) => (M.kind ?? "chips") === "chips")
    ), m = $(() => n.facets.filter((M) => M.kind === "range"));
    function b(M) {
      return M == null ? "" : String(M);
    }
    function p() {
      s.value = n.applied.query ?? "";
      for (const M of Object.keys(i))
        delete i[M];
      for (const [M, z] of Object.entries(n.applied.selected ?? {}))
        i[M] = z;
      for (const M of Object.keys(d))
        delete d[M];
      for (const [M, z] of Object.entries(n.applied.ranges ?? {}))
        d[M] = { min: b(z.min), max: b(z.max) };
    }
    ce(
      () => n.open,
      (M) => {
        M && p();
      }
    );
    function x(M) {
      const z = M.trim();
      if (z === "")
        return null;
      const R = Number(z);
      return Number.isFinite(R) ? R : null;
    }
    function A() {
      const M = {};
      for (const [z, R] of Object.entries(d))
        M[z] = { min: x(R.min), max: x(R.max) };
      return M;
    }
    function C() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: A()
      };
    }
    const k = $(() => {
      let M = n.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const z of Object.values(i))
        z && (M += 1);
      for (const z of Object.values(A()))
        (z.min !== null || z.max !== null) && (M += 1);
      return M;
    });
    function w(M, z) {
      i[M] = i[M] === z ? null : z;
    }
    function g(M) {
      return d[M] ?? { min: "", max: "" };
    }
    function v(M, z, R) {
      const E = d[M] ?? { min: "", max: "" };
      d[M] = { ...E, [z]: R };
    }
    function c() {
      r("apply", C());
    }
    function S() {
      s.value = "";
      for (const M of Object.keys(i))
        i[M] = null;
      for (const M of Object.keys(d))
        d[M] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        n.hideSearch ? { ..._e(), query: n.applied.query } : _e()
      );
    }
    return (M, z) => (t(), T(Rt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: z[2] || (z[2] = (R) => r("close"))
    }, {
      footer: j(() => [
        l("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: S
        }, " Reset all "),
        I(se, {
          variant: "outline",
          size: "sm",
          onClick: z[1] || (z[1] = (R) => r("close"))
        }, {
          default: j(() => [...z[5] || (z[5] = [
            U("Cancel", -1)
          ])]),
          _: 1
        }),
        I(se, {
          size: "sm",
          onClick: c
        }, {
          default: j(() => [
            z[6] || (z[6] = U(" Apply", -1)),
            k.value ? (t(), a("span", Ub, " (" + f(k.value) + ")", 1)) : y("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        l("div", Tb, [
          e.hideSearch ? y("", !0) : (t(), a("label", Db, [
            z[3] || (z[3] = l("span", { class: "text-sm font-semibold" }, "Search", -1)),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": z[0] || (z[0] = (R) => s.value = R),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(P, null, V(u.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", Eb, f(R.label ?? R.key), 1),
            l("div", Ib, [
              (t(!0), a(P, null, V(R.options ?? [], (E) => (t(), a("button", {
                key: E.value,
                type: "button",
                class: _([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[R.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[R.key] === E.value ? "true" : "false",
                onClick: (ee) => w(R.key, E.value)
              }, f(E.label), 11, Fb))), 128))
            ])
          ]))), 128)),
          (t(!0), a(P, null, V(m.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", Nb, f(R.label ?? R.key), 1),
            l("div", Rb, [
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${R.label ?? R.key} from`,
                "model-value": g(R.key).min,
                "onUpdate:modelValue": (E) => v(R.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              z[4] || (z[4] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${R.label ?? R.key} to`,
                "model-value": g(R.key).max,
                "onUpdate:modelValue": (E) => v(R.key, "max", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), Hb = ["aria-disabled"], qb = ["disabled"], Kb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Gb = ["d"], Wb = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Zb = ["disabled"], Jb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Yb = ["d"], Xb = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Oe({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const n = Xe(e, "modelValue"), r = o, s = $(() => n.value <= e.min), i = $(() => e.max !== null && n.value >= e.max);
    function d(u) {
      if (e.disabled)
        return;
      const m = n.value + u;
      m < e.min || e.max !== null && m > e.max || (n.value = m, u < 0 ? r("decrease", m) : r("increase", m));
    }
    return (u, m) => (t(), a("div", {
      class: "inline-flex h-8 items-center rounded-md border",
      "data-slot": "qty-stepper",
      role: "group",
      "aria-disabled": e.disabled ? "true" : void 0
    }, [
      l("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || s.value,
        "aria-label": "Decrease quantity",
        onClick: m[0] || (m[0] = (b) => d(-1))
      }, [
        (t(), a("svg", Kb, [
          l("path", {
            d: h(ie)("minus")
          }, null, 8, Gb)
        ]))
      ], 8, qb),
      l("span", Wb, f(n.value), 1),
      l("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (b) => d(1))
      }, [
        (t(), a("svg", Jb, [
          l("path", {
            d: h(ie)("plus")
          }, null, 8, Yb)
        ]))
      ], 8, Zb)
    ], 8, Hb));
  }
}), Qb = { class: "divide-border flex flex-col divide-y" }, ex = { class: "min-w-0" }, tx = { class: "truncate text-sm font-medium" }, ax = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, nx = { class: "flex shrink-0 items-center gap-2 text-sm" }, lx = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, ox = {
  key: 2,
  class: "font-medium tabular-nums"
}, sx = ["aria-label", "onClick"], rx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ix = ["d"], dx = /* @__PURE__ */ O({
  __name: "LineItems",
  props: {
    items: {},
    editable: { type: Boolean, default: !1 }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: o }) {
    const n = o;
    function r(s) {
      const i = s.qty;
      if (typeof i == "number" && Number.isFinite(i))
        return i;
      const d = Number(i);
      return Number.isFinite(d) && d > 0 ? d : 1;
    }
    return (s, i) => (t(), a("div", Qb, [
      (t(!0), a(P, null, V(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        l("div", ex, [
          l("p", tx, f(d.label), 1),
          d.detail ? (t(), a("p", ax, f(d.detail), 1)) : y("", !0)
        ]),
        l("div", nx, [
          e.editable ? (t(), T(Xb, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", lx, " ×" + f(d.qty), 1)) : y("", !0),
          d.amount ? (t(), a("span", ox, f(d.amount), 1)) : y("", !0),
          d.status ? (t(), T(he, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : y("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => n("remove", d.key)
          }, [
            (t(), a("svg", rx, [
              l("path", {
                d: h(ie)("trash")
              }, null, 8, ix)
            ]))
          ], 8, sx)) : y("", !0)
        ])
      ]))), 128))
    ]));
  }
}), ux = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, cx = { class: "border-b px-4 py-3" }, fx = { class: "text-sm font-medium" }, mx = { class: "flex-1 px-4 py-3" }, px = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, vx = { class: "text-foreground block font-medium" }, gx = { class: "mt-1 block" }, hx = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, bx = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, xx = { class: "tabular-nums" }, yx = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, kx = { class: "text-muted-foreground" }, $x = {
  key: 0,
  class: "tabular-nums"
}, wx = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Cx = { class: "text-muted-foreground" }, Sx = { class: "tabular-nums" }, Mx = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Bx = { class: "tabular-nums" }, Ax = {
  key: 4,
  class: "pt-1"
}, zx = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = o;
    return (r, s) => (t(), a("aside", ux, [
      l("header", cx, [
        l("h2", fx, f(e.title), 1)
      ]),
      l("div", mx, [
        e.items.length === 0 ? (t(), a("p", px, [
          l("span", vx, f(e.emptyTitle), 1),
          l("span", gx, f(e.emptyDescription), 1)
        ])) : (t(), T(dx, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", hx, [
        e.subtotal ? (t(), a("div", bx, [
          s[2] || (s[2] = l("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          l("span", xx, f(e.subtotal), 1)
        ])) : y("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", yx, [
          l("span", kx, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", $x, f(e.discount), 1)) : y("", !0),
          q(r.$slots, "discount")
        ])) : y("", !0),
        e.tax ? (t(), a("div", wx, [
          l("span", Cx, f(e.taxLabel), 1),
          l("span", Sx, f(e.tax), 1)
        ])) : y("", !0),
        e.total ? (t(), a("div", Mx, [
          s[3] || (s[3] = l("span", null, "Total", -1)),
          l("span", Bx, f(e.total), 1)
        ])) : y("", !0),
        r.$slots.pay ? (t(), a("div", Ax, [
          q(r.$slots, "pay")
        ])) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), Px = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, _x = { class: "flex flex-col gap-4" }, Ox = { class: "flex flex-wrap items-start justify-between gap-3" }, jx = { class: "flex items-center gap-2" }, Lx = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, D5 = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Oe({
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
  emits: /* @__PURE__ */ Oe(["select", "pay"], ["update:cart"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(_e()), i = K(!1), d = Xe(e, "cart"), u = K(!1), m = $(
      () => n.items.filter((H) => Ut(H, s.value))
    );
    function b(H) {
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
    function x(H) {
      return H ? n.parsePrice(H) : 0;
    }
    function A(H, W, J) {
      return {
        ...H,
        qty: W,
        amount: n.formatMoney(J * W)
      };
    }
    function C(H) {
      const W = Vb(n.items, H);
      W && k(W.key);
    }
    function k(H) {
      const W = n.items.find((te) => te.key === H);
      if (!W || W.status === "out-of-stock")
        return;
      u.value = !1;
      const J = x(W);
      if (d.value.find((te) => te.key === H)) {
        d.value = d.value.map(
          (te) => te.key === H ? A(te, Number(te.qty ?? 1) + 1, J) : te
        );
        return;
      }
      d.value = [
        ...d.value,
        {
          key: W.key,
          label: W.label,
          detail: W.caption ?? null,
          qty: 1,
          amount: n.formatMoney(J)
        }
      ];
    }
    function w(H, W) {
      const J = n.items.find((te) => te.key === H), ae = x(J);
      d.value = d.value.map(
        (te) => te.key === H ? A(te, W, ae) : te
      );
    }
    function g(H) {
      d.value = d.value.filter((W) => W.key !== H);
    }
    const v = $(
      () => d.value.reduce((H, W) => {
        const J = n.items.find((ae) => ae.key === W.key);
        return H + x(J) * Number(W.qty ?? 1);
      }, 0)
    ), c = $(
      () => n.discountRate > 0 ? Math.round(v.value * n.discountRate) : 0
    ), S = $(
      () => Math.round((v.value - c.value) * n.taxRate)
    ), M = $(
      () => d.value.length ? n.formatMoney(v.value) : null
    ), z = $(
      () => d.value.length && c.value > 0 ? `−${n.formatMoney(c.value)}` : null
    ), R = $(
      () => d.value.length && n.taxRate > 0 ? n.formatMoney(S.value) : null
    ), E = $(
      () => d.value.length ? n.formatMoney(
        v.value - c.value + S.value
      ) : null
    );
    function ee() {
      u.value = !0, r("pay", d.value);
    }
    return (H, W) => (t(), a(P, null, [
      l("div", Px, [
        l("section", _x, [
          l("div", Ox, [
            I(Pe, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            l("div", jx, [
              h(it)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: W[0] || (W[0] = (J) => s.value = {
                  ...h(_e)(),
                  query: s.value.query
                })
              }, " Clear ")) : y("", !0),
              e.facets.length > 0 ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: W[1] || (W[1] = (J) => i.value = !0)
              }, [
                W[5] || (W[5] = l("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  l("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                W[6] || (W[6] = U(" Filters ", -1)),
                h(it)(s.value) ? (t(), a("span", Lx, " on ")) : y("", !0)
              ])) : y("", !0)
            ])
          ]),
          I(Nt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: b,
            onSelect: W[2] || (W[2] = (J) => r("select", J)),
            onCart: k,
            onScan: C
          }, null, 8, ["search-placeholder", "items"])
        ]),
        I(zx, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: M.value,
          "discount-label": e.discountLabel,
          discount: z.value,
          "tax-label": e.taxLabel,
          tax: R.value,
          total: E.value,
          onQty: w,
          onRemove: g
        }, {
          pay: j(() => [
            q(H.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: ee
            }, () => [
              I(se, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: ee
              }, {
                default: j(() => [
                  U(f(u.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      I(Ma, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: W[3] || (W[3] = (J) => i.value = !1),
        onApply: p,
        onReset: W[4] || (W[4] = (J) => s.value = { ...h(_e)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Vx = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Tx = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Dx = ["src", "alt"], Ex = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Ix = ["src"], Fx = { class: "flex items-start justify-between gap-3" }, Nx = { class: "text-lg font-semibold tabular-nums" }, Rx = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ux = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Hx = { class: "grid grid-cols-2 gap-3" }, qx = { class: "flex flex-col gap-2" }, Kx = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, E5 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(p) {
      let x = 0;
      for (const A of p)
        x = x * 31 + A.charCodeAt(0) >>> 0;
      return x;
    }
    function i(p, x) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((C, k) => ({
        label: C,
        value: Math.max(0, Math.round(p + Math.sin(k + x) * p * 0.18))
      }));
    }
    const d = $(() => n.item?.kind === "unit"), u = $(() => {
      const p = n.item;
      if (!p)
        return [];
      const x = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(x) || 12, s(p.key) % 7);
    }), m = $(() => {
      const p = n.item;
      if (!p)
        return [];
      const x = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(x) || 20, s(p.key) % 5 + 1);
    }), b = $(
      () => !!n.item && !d.value && n.item?.status !== "out-of-stock"
    );
    return (p, x) => (t(), T(Rt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: x[1] || (x[1] = (A) => r("close"))
    }, Ze({
      default: j(() => [
        e.item ? (t(), a("div", Vx, [
          l("div", Tx, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Dx)) : y("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", Ex, [
            (t(!0), a(P, null, V(e.item.images, (A, C) => (t(), a("img", {
              key: C,
              src: A,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Ix))), 128))
          ])) : y("", !0),
          l("div", Fx, [
            l("div", null, [
              l("p", Nx, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", Rx, f(e.item.stock) + " in stock ", 1)) : y("", !0)
            ]),
            e.item.status ? (t(), T(he, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", Ux, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          l("div", Hx, [
            I(rt, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? m.value : u.value
            }, null, 8, ["label", "value", "series"]),
            I(rt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          l("div", qx, [
            l("p", Kx, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            I(ut, {
              data: d.value ? m.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : y("", !0)
      ]),
      _: 2
    }, [
      b.value && e.item ? {
        name: "footer",
        fn: j(() => [
          l("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: x[0] || (x[0] = (A) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), Gx = { class: "flex flex-col gap-10" }, Wx = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Zx = { class: "flex flex-col gap-3" }, Jx = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Yx = ["src", "alt"], Xx = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Qx = ["aria-label", "aria-pressed", "onClick"], ey = ["src"], ty = { class: "flex flex-col gap-5" }, ay = { class: "flex flex-wrap items-start justify-between gap-3" }, ny = { class: "min-w-0" }, ly = { class: "text-2xl font-semibold tracking-tight" }, oy = { class: "text-muted-foreground mt-1 text-sm" }, sy = { class: "text-2xl font-semibold tabular-nums" }, ry = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, iy = { class: "grid grid-cols-2 gap-3 text-sm" }, dy = {
  key: 0,
  class: "rounded-lg border p-3"
}, uy = { class: "mt-1 font-medium" }, cy = { class: "rounded-lg border p-3" }, fy = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, my = { class: "mt-1 font-medium" }, py = { class: "flex flex-col gap-4" }, vy = { class: "grid gap-4 sm:grid-cols-2" }, gy = { class: "bg-card rounded-lg border p-4" }, hy = { class: "mb-3 text-sm font-medium" }, by = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(C) {
      let k = 0;
      for (const w of C)
        k = k * 31 + w.charCodeAt(0) >>> 0;
      return k;
    }
    function i(C, k) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((g, v) => ({
        label: g,
        value: Math.max(0, Math.round(C + Math.sin(v + k) * C * 0.18))
      }));
    }
    const d = $(() => n.item.kind === "unit"), u = $(() => {
      const C = [n.item.image, ...n.item.images ?? []].filter(
        (k) => typeof k == "string" && k !== ""
      );
      return [...new Set(C)];
    }), m = K(0), b = $(() => {
      const C = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(C) || 12, s(n.item.key) % 7);
    }), p = $(() => {
      const C = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(C) || 20, s(n.item.key) % 5 + 1);
    }), x = $(() => d.value ? p.value : b.value), A = $(() => !d.value && n.item.status !== "out-of-stock");
    return (C, k) => (t(), a("div", Gx, [
      l("div", Wx, [
        l("div", Zx, [
          l("div", Jx, [
            u.value[m.value] ? (t(), a("img", {
              key: 0,
              src: u.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Yx)) : y("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", Xx, [
            (t(!0), a(P, null, V(u.value, (w, g) => (t(), a("button", {
              key: w,
              type: "button",
              class: _(["size-16 shrink-0 overflow-hidden rounded-md border", g === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${g + 1}`,
              "aria-pressed": g === m.value ? "true" : "false",
              onClick: (v) => m.value = g
            }, [
              l("img", {
                src: w,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, ey)
            ], 10, Qx))), 128))
          ])) : y("", !0)
        ]),
        l("div", ty, [
          l("div", ay, [
            l("div", ny, [
              l("h1", ly, f(e.item.label), 1),
              l("p", oy, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(he, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          l("p", sy, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", ry, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          l("dl", iy, [
            e.item.sku ? (t(), a("div", dy, [
              k[1] || (k[1] = l("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              l("dd", uy, f(e.item.sku), 1)
            ])) : y("", !0),
            l("div", cy, [
              l("dt", fy, f(d.value ? "Occupancy" : "Stock"), 1),
              l("dd", my, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          A.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: k[0] || (k[0] = (w) => r("cart", e.item.key))
          }, " Add to cart ")) : y("", !0)
        ])
      ]),
      l("section", py, [
        k[2] || (k[2] = l("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        l("div", vy, [
          I(rt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: x.value
          }, null, 8, ["label", "value", "series"]),
          I(rt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: b.value
          }, null, 8, ["value", "series"])
        ]),
        l("div", gy, [
          l("p", hy, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(Up, {
            data: x.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), xy = ["href"], I5 = /* @__PURE__ */ O({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["cart"],
  setup(e, { emit: o }) {
    const n = o;
    return (r, s) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-8", e.embedded ? "" : h(De)])
    }, [
      l("a", {
        href: e.catalogHref,
        class: "text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1.5 text-sm"
      }, [
        s[1] || (s[1] = l("svg", {
          class: "size-4",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          l("path", { d: "m15 18-6-6 6-6" })
        ], -1)),
        U(" " + f(e.backLabel), 1)
      ], 8, xy),
      I(by, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), yy = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, ky = ["aria-selected", "onClick"], $y = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, wy = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, Cy = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, Sy = ["aria-pressed"], My = ["aria-pressed"], F5 = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Oe({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["select", "cart"], ["update:layout"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(n.tabs[0]?.key ?? ""), i = Xe(e, "layout"), d = K({}), u = K(!1);
    ce(
      () => n.tabs.map((w) => w.key).join(","),
      (w) => {
        w.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function m(w) {
      return d.value[w] ?? _e();
    }
    const b = $(
      () => n.tabs.find((w) => w.key === s.value) ?? n.tabs[0] ?? null
    ), p = $(
      () => b.value ? m(b.value.key) : _e()
    ), x = $(() => {
      const w = b.value;
      return w ? w.items.filter((g) => Ut(g, m(w.key))) : [];
    });
    function A(w) {
      const g = b.value?.key;
      g && (d.value = {
        ...d.value,
        [g]: { ...m(g), query: w }
      });
    }
    function C() {
      const w = b.value?.key;
      w && (d.value = { ...d.value, [w]: _e() });
    }
    function k(w) {
      const g = b.value?.key;
      g && (d.value = { ...d.value, [g]: w }, u.value = !1);
    }
    return (w, g) => (t(), a(P, null, [
      l("div", {
        class: _(["flex w-full flex-col gap-8", e.embedded ? "" : h(De)])
      }, [
        I(Pe, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", yy, [
          (t(!0), a(P, null, V(e.tabs, (v) => (t(), a("button", {
            key: v.key,
            type: "button",
            class: _([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (c) => s.value = v.key
          }, f(v.label), 11, ky))), 128))
        ])) : y("", !0),
        l("div", $y, [
          I(ge, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: b.value?.searchPlaceholder ?? "Search…",
            "aria-label": b.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": g[0] || (g[0] = (v) => A(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          h(it)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: C
          }, " Clear ")) : y("", !0),
          (b.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: g[1] || (g[1] = (v) => u.value = !0)
          }, [
            g[8] || (g[8] = l("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              l("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            g[9] || (g[9] = U(" Filters ", -1)),
            h(it)(p.value) ? (t(), a("span", wy, " on ")) : y("", !0)
          ])) : y("", !0),
          l("div", Cy, [
            l("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: g[2] || (g[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, Sy),
            l("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: g[3] || (g[3] = (v) => i.value = "list")
            }, " List ", 10, My)
          ])
        ]),
        I(Nt, {
          layout: i.value,
          "onUpdate:layout": g[4] || (g[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: x.value,
          onSelect: g[5] || (g[5] = (v) => r("select", v)),
          onCart: g[6] || (g[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      I(Ma, {
        open: u.value,
        title: b.value?.filterTitle ?? "Filters",
        "search-placeholder": b.value?.searchPlaceholder ?? "Search…",
        facets: b.value?.facets ?? [],
        applied: p.value,
        onClose: g[7] || (g[7] = (v) => u.value = !1),
        onApply: k,
        onReset: C
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), By = { class: "flex flex-col gap-4" }, Ay = { class: "flex flex-col gap-4" }, N5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(_e()), i = $(
      () => n.cards.filter((d) => Ut(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-10", e.embedded ? "" : h(De)])
    }, [
      I(Pe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", By, [
        I(Pe, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(Nt, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: u[0] || (u[0] = (m) => s.value = m),
          onSelect: u[1] || (u[1] = (m) => r("select", m)),
          onCart: u[2] || (u[2] = (m) => r("cart", m))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      l("section", Ay, [
        I(Pe, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(Ml, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": j(({ value: m }) => [
            I(he, {
              status: String(m)
            }, {
              default: j(() => [
                U(f(m), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), zy = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Py = { class: "text-sm font-medium" }, _y = ["width", "height", "aria-label"], Oy = { class: "flex items-center gap-2" }, jy = /* @__PURE__ */ O({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(null), i = K(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function m(w) {
      const g = s.value;
      if (!g)
        return null;
      const v = g.getBoundingClientRect(), c = g.width / v.width, S = g.height / v.height;
      return {
        x: (w.clientX - v.left) * c,
        y: (w.clientY - v.top) * S
      };
    }
    function b(w) {
      n.disabled || (i.value = !0, d = m(w), s.value?.setPointerCapture(w.pointerId));
    }
    function p(w) {
      if (!i.value || n.disabled)
        return;
      const g = u(), v = m(w);
      !g || !v || !d || (g.strokeStyle = "#111827", g.lineWidth = 2.4, g.lineCap = "round", g.lineJoin = "round", g.beginPath(), g.moveTo(d.x, d.y), g.lineTo(v.x, v.y), g.stroke(), d = v);
    }
    function x() {
      i.value = !1, d = null;
    }
    function A() {
      const w = s.value, g = u();
      !w || !g || (g.clearRect(0, 0, w.width, w.height), r("clear"));
    }
    function C() {
      const w = s.value;
      w && r("save", w.toDataURL("image/png"));
    }
    function k() {
      const w = s.value, g = u();
      !w || !g || (g.fillStyle = "#ffffff", g.fillRect(0, 0, w.width, w.height));
    }
    return pe(k), be(() => {
      i.value = !1;
    }), (w, g) => (t(), a("div", zy, [
      l("p", Py, f(e.label), 1),
      l("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: _(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: me(b, ["prevent"]),
        onPointermove: me(p, ["prevent"]),
        onPointerup: me(x, ["prevent"]),
        onPointerleave: me(x, ["prevent"])
      }, null, 42, _y),
      l("div", Oy, [
        I(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: A
        }, {
          default: j(() => [...g[0] || (g[0] = [
            U(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: j(() => [...g[1] || (g[1] = [
            U("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Ly = { class: "grid gap-8 lg:grid-cols-2" }, Vy = { class: "flex flex-col gap-3" }, Ty = { class: "text-muted-foreground text-xs" }, Dy = {
  key: 0,
  class: "flex flex-col gap-3"
}, Ey = { class: "flex flex-wrap gap-3" }, Iy = ["onClick"], Fy = ["src", "alt"], Ny = {
  key: 1,
  class: "flex flex-col gap-3"
}, Ry = { class: "flex flex-wrap gap-3" }, Uy = ["onClick"], Hy = ["src", "alt"], qy = {
  key: 2,
  class: "flex flex-col gap-4"
}, Ky = { class: "flex flex-wrap items-center gap-2" }, Gy = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Wy = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Zy = { class: "flex flex-col gap-2" }, Jy = ["src"], Yy = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Xy = ["src"], R5 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = K([]), r = K([]), s = K(null), i = K(null), d = K(null), u = K(o.documents[0]?.key ?? "");
    function m(w) {
      try {
        const g = localStorage.getItem(w), v = g ? JSON.parse(g) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    pe(() => {
      !o.storageKey || typeof localStorage > "u" || (n.value = m(`${o.storageKey}.signatures`), r.value = m(`${o.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), ce(
      n,
      (w) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.signatures`, JSON.stringify(w));
      },
      { deep: !0 }
    ), ce(
      r,
      (w) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.stamps`, JSON.stringify(w));
      },
      { deep: !0 }
    );
    function b(w) {
      const g = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: w
      };
      n.value = [g, ...n.value].slice(0, 8), s.value = g.id;
    }
    async function p(w, g) {
      await mc(w), g(40);
      const v = await new Promise((c, S) => {
        const M = new FileReader();
        M.onload = () => c(String(M.result)), M.onerror = () => S(new Error("Could not read the file")), M.readAsDataURL(w);
      });
      return g(100), { value: v, name: w.name, size: w.size, url: v };
    }
    function x() {
      const w = d.value?.url ?? d.value?.value;
      if (!w)
        return;
      const g = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: w
      };
      r.value = [g, ...r.value].slice(0, 8), i.value = g.id;
    }
    const A = $(
      () => n.value.find((w) => w.id === s.value)?.dataUrl ?? null
    ), C = $(
      () => r.value.find((w) => w.id === i.value)?.dataUrl ?? null
    ), k = $(() => {
      const w = o.documents.find((v) => v.key === u.value)?.document ?? o.documents[0]?.document ?? {}, g = {
        ...w?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...w,
        branding: g
      };
    });
    return (w, g) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-10", e.embedded ? "" : h(De)])
    }, [
      I(Pe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", Ly, [
        I(jy, {
          label: "Draw a signature",
          onSave: b
        }),
        l("div", Vy, [
          g[2] || (g[2] = l("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          l("p", Ty, f(h(ya)), 1),
          I(ma, {
            modelValue: d.value,
            "onUpdate:modelValue": g[0] || (g[0] = (v) => d.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          I(se, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: x
          }, {
            default: j(() => [...g[1] || (g[1] = [
              U(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", Dy, [
        I(Pe, {
          variant: "small",
          title: "Saved signatures"
        }),
        l("div", Ey, [
          (t(!0), a(P, null, V(n.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: _(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Fy)
          ], 10, Iy))), 128))
        ])
      ])) : y("", !0),
      r.value.length ? (t(), a("section", Ny, [
        I(Pe, {
          variant: "small",
          title: "Saved stamps"
        }),
        l("div", Ry, [
          (t(!0), a(P, null, V(r.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: _(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Hy)
          ], 10, Uy))), 128))
        ])
      ])) : y("", !0),
      e.documents.length ? (t(), a("section", qy, [
        l("div", Ky, [
          (t(!0), a(P, null, V(e.documents, (v) => (t(), T(se, {
            key: v.key,
            size: "sm",
            variant: u.value === v.key ? "default" : "outline",
            onClick: (c) => u.value = v.key
          }, {
            default: j(() => [
              U(f(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        l("div", Gy, [
          I(ap, {
            document: k.value
          }, null, 8, ["document"]),
          l("div", Wy, [
            l("div", Zy, [
              g[3] || (g[3] = l("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              A.value ? (t(), a("img", {
                key: 0,
                src: A.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Jy)) : (t(), a("p", Yy, "Draw and save a signature"))
            ]),
            C.value ? (t(), a("img", {
              key: 0,
              src: C.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Xy)) : y("", !0)
          ])
        ])
      ])) : y("", !0)
    ], 2));
  }
}), U5 = "panel.dashboard.hiddenWidgets", Qy = /* @__PURE__ */ Symbol("dashboardHide"), e0 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, H5 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const o = e, n = lt(Qy, null), r = K(
      o.catalog.filter((d) => o.defaults.includes(d.id))
    ), s = K(!1);
    pe(() => {
      if (n?.register("shortcuts", "Shortcuts"), !o.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const d = localStorage.getItem(o.storageKey);
        if (d) {
          const u = JSON.parse(d);
          Array.isArray(u) && (r.value = u.filter(
            (m) => typeof m?.id == "string" && typeof m.label == "string" && typeof m.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), ce(
      r,
      (d) => {
        if (!(!s.value || !o.storageKey))
          try {
            localStorage.setItem(o.storageKey, JSON.stringify(d));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = $(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? y("", !0) : (t(), a("div", e0, [
      I(qg, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (m) => r.value = m),
        onHide: u[1] || (u[1] = (m) => h(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), t0 = { class: "flex flex-col gap-3" }, a0 = ["data-slot"], n0 = ["aria-pressed", "aria-label", "title"], l0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, o0 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, s0 = { class: "flex h-8 items-center" }, r0 = ["aria-label", "title", "onClick"], i0 = ["aria-label", "title", "onClick"], d0 = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, u0 = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, q5 = /* @__PURE__ */ O({
  __name: "StatStrip",
  props: {
    segments: {},
    columns: { default: 4 },
    maskable: { type: Boolean, default: !0 },
    hidden: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(n.maskable ? !n.hidden : !0), i = K(/* @__PURE__ */ new Set());
    function d(c) {
      return n.maskable && (c.sensitive ?? !0);
    }
    function u(c) {
      return d(c) && !s.value && !i.value.has(c.key);
    }
    const m = $(() => n.segments.some(u)), b = $(() => n.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, x = $(() => p[n.columns] ?? p[4]), A = $(() => {
      const c = n.columns ?? 4, S = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(0, S);
    }), C = $(() => {
      const c = n.columns ?? 4, S = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(S);
    }), k = $(() => {
      const c = [];
      return A.value.length > 0 && c.push({ key: "packed", joined: !0, segments: A.value }), C.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: C.value }), c;
    });
    function w() {
      const c = m.value === !1;
      s.value = !c, i.value = /* @__PURE__ */ new Set(), r("toggle", c);
    }
    function g(c) {
      if (!d(c))
        return;
      const S = new Set(i.value);
      if (u(c))
        S.add(c.key);
      else if (S.delete(c.key), s.value) {
        s.value = !1;
        for (const M of n.segments)
          M.key !== c.key && d(M) && S.add(M.key);
      }
      i.value = S, r("toggle", m.value);
    }
    function v(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, S) => (t(), a("div", t0, [
      (t(!0), a(P, null, V(k.value, (M) => (t(), a("div", {
        key: M.key,
        class: _(["relative shrink-0", M.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": M.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && b.value && M.key === k.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: w
        }, [
          (t(), a("svg", l0, [
            m.value ? (t(), a(P, { key: 0 }, [
              S[0] || (S[0] = l("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              S[1] || (S[1] = l("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              S[2] || (S[2] = l("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              S[3] || (S[3] = l("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(P, { key: 1 }, [
              S[4] || (S[4] = l("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              S[5] || (S[5] = l("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, n0)) : y("", !0),
        l("div", {
          class: _(["grid", [M.joined ? "gap-px" : "gap-3", x.value]])
        }, [
          (t(!0), a(P, null, V(M.segments, (z) => (t(), a("div", {
            key: z.key,
            class: _(["bg-card flex flex-col gap-2 p-4", M.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            l("p", o0, f(z.label), 1),
            l("div", s0, [
              e.loading ? (t(), T($e, {
                key: 0,
                variant: "number"
              })) : u(z) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${z.label} hidden. Show it.`,
                title: `Show ${z.label}`,
                onClick: (R) => g(z)
              }, [
                (t(), a(P, null, V(5, (R) => l("span", {
                  key: R,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, r0)) : d(z) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${z.label}, ${v(z.value)}. Hide it.`,
                title: `Hide ${z.label}`,
                onClick: (R) => g(z)
              }, f(v(z.value)), 9, i0)) : (t(), a("span", d0, f(v(z.value)), 1)),
              z.trend && !e.loading && !u(z) ? (t(), T(Sa, {
                key: 4,
                direction: z.trend.direction,
                percentage: z.trend.percentage,
                inverted: z.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : y("", !0)
            ]),
            z.sparkline?.length && !e.loading && !u(z) ? (t(), T(ut, {
              key: 0,
              data: z.sparkline,
              height: 24
            }, null, 8, ["data"])) : y("", !0),
            z.caption || z.comparison && z.trend ? (t(), a("p", u0, f(z.caption ?? z.comparison), 1)) : y("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, a0))), 128))
    ]));
  }
}), c0 = ["aria-label"], f0 = ["aria-valuenow", "aria-label"], m0 = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, p0 = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, v0 = ["title"], g0 = { class: "font-medium" }, h0 = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, b0 = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, x0 = { class: "flex items-center justify-between gap-2" }, y0 = { class: "text-sm font-semibold" }, k0 = { class: "flex items-center gap-3" }, $0 = ["href"], w0 = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, C0 = { class: "flex min-w-0 flex-col gap-0.5" }, S0 = { class: "text-sm font-medium" }, M0 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, B0 = {
  key: 1,
  class: "flex flex-col gap-2"
}, A0 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, z0 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, P0 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, K5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.items.find((k) => !k.done) ?? null), i = $(() => n.items.filter((k) => k.key !== s.value?.key)), d = $(() => n.items.length), u = $(() => n.items.filter((k) => k.done).length), m = $(() => {
      if (!s.value)
        return d.value;
      const k = n.items.findIndex((w) => w.key === s.value?.key);
      return k >= 0 ? k + 1 : 1;
    }), b = $(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = $(() => {
      const k = n.linkComponent;
      return typeof k == "string" ? k : aa(k);
    }), x = Ge({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), A = Ge({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), C = Ge({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (k, w) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
      key: 0,
      class: "overflow-hidden rounded-md border bg-card",
      "aria-label": e.heading
    }, [
      l("div", {
        class: "h-0.5 w-full bg-muted",
        role: "progressbar",
        "aria-valuenow": b.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${b.value} percent complete`
      }, [
        l("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: ne({ width: `${b.value}%` })
        }, null, 4)
      ], 8, f0),
      l("div", m0, [
        l("span", p0, " Step " + f(m.value) + " of " + f(d.value), 1),
        l("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          l("span", g0, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", h0, f(": " + s.value.detail), 1)) : y("", !0)
        ], 8, v0),
        s.value?.href ? (t(), T(xe(p.value), {
          key: 0,
          href: s.value.href,
          class: _(h(A))
        }, {
          default: j(() => [
            U(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : y("", !0),
        e.skipLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: w[0] || (w[0] = (g) => r("skip"))
        }, f(e.skipLabel), 1)) : y("", !0)
      ])
    ], 8, c0)) : e.items.length ? (t(), a("section", b0, [
      l("div", x0, [
        l("h2", y0, f(e.heading), 1),
        l("div", k0, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: w[1] || (w[1] = (g) => r("skip"))
          }, f(e.skipLabel), 1)) : y("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, $0)) : y("", !0)
        ])
      ]),
      s.value ? (t(), a("div", w0, [
        w[2] || (w[2] = l("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        l("div", C0, [
          l("p", S0, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", M0, f(s.value.detail), 1)) : y("", !0),
          s.value.href ? (t(), T(xe(p.value), {
            key: 1,
            href: s.value.href,
            class: _(h(x))
          }, {
            default: j(() => [
              U(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : y("", !0)
        ])
      ])) : y("", !0),
      i.value.length ? (t(), a("ul", B0, [
        (t(!0), a(P, null, V(i.value, (g) => (t(), a("li", {
          key: g.key,
          class: "flex items-start gap-3"
        }, [
          l("span", {
            class: _([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              g.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            g.done ? (t(), a("svg", A0, [...w[3] || (w[3] = [
              l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : y("", !0)
          ], 2),
          l("div", z0, [
            l("p", {
              class: _(["text-sm", g.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(g.title), 3),
            !g.done && g.detail ? (t(), a("p", P0, f(g.detail), 1)) : y("", !0)
          ]),
          !g.done && g.href ? (t(), T(xe(p.value), {
            key: 0,
            href: g.href,
            class: _(h(C))
          }, {
            default: j(() => [
              U(f(g.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : y("", !0)
        ]))), 128))
      ])) : y("", !0)
    ])) : y("", !0);
  }
}), _0 = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, O0 = { class: "hidden items-center gap-2 md:flex" }, j0 = { class: "md:hidden" }, L0 = { class: "border-b px-4 py-3" }, V0 = { class: "text-muted-foreground text-xs" }, T0 = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, D0 = { class: "font-medium tabular-nums" }, E0 = { class: "ml-auto flex items-center gap-3" }, G5 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: o }) {
    const n = o, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", _0, [
      l("div", O0, [
        q(i.$slots, "actions")
      ]),
      l("div", j0, [
        l("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        I(Tt, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: j(() => [
            I(Dt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", L0, [
                  d[4] || (d[4] = l("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  l("p", V0, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                l("div", T0, [
                  q(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      l("span", D0, [
        e.allMatching ? (t(), a(P, { key: 0 }, [
          U(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(P, { key: 1 }, [
          U(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      l("div", E0, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => n("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : y("", !0),
        l("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), I0 = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, F0 = { class: "text-muted-foreground text-xs tabular-nums" }, N0 = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, R0 = ["value"], U0 = ["value"], H0 = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, q0 = ["disabled"], K0 = ["disabled"], G0 = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, W0 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Z0 = ["disabled"], W5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = (m) => new Intl.NumberFormat().format(m), i = $(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), d = $(() => (n.page - 1) * n.perPage + n.rowsOnPage), u = $(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (m, b) => (t(), a("div", I0, [
      l("p", F0, [
        U(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(P, { key: 0 }, [
          U("of " + f(s(e.total)), 1)
        ], 64)) : y("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", N0, [
        b[4] || (b[4] = l("span", null, "Per page", -1)),
        l("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: b[0] || (b[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(P, null, V(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, U0))), 128))
        ], 40, R0)
      ])) : y("", !0),
      l("nav", H0, [
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: b[1] || (b[1] = (p) => r("first"))
        }, [...b[5] || (b[5] = [
          l("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "m17 18-6-6 6-6M11 18l-6-6 6-6" })
          ], -1)
        ])], 8, q0),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: b[2] || (b[2] = (p) => r("previous"))
        }, [...b[6] || (b[6] = [
          l("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "m15 18-6-6 6-6" })
          ], -1)
        ])], 8, K0),
        l("span", G0, f(e.page), 1),
        u.value !== null ? (t(), a("span", W0, " of " + f(s(u.value)), 1)) : y("", !0),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: b[3] || (b[3] = (p) => r("next"))
        }, [...b[7] || (b[7] = [
          l("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "m9 18 6-6-6-6" })
          ], -1)
        ])], 8, Z0)
      ])
    ]));
  }
}), J0 = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Y0 = ["aria-current"], X0 = ["title"], Q0 = ["aria-current", "onClick"], ek = ["title"], tk = /* @__PURE__ */ O({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: o }) {
    const n = o;
    function r(s) {
      return s >= 1e6 ? (s / 1e6).toFixed(s % 1e6 === 0 ? 0 : 1) + "M" : s >= 1e4 ? Math.round(s / 1e3) + "k" : new Intl.NumberFormat().format(s);
    }
    return (s, i) => (t(), a("div", J0, [
      l("button", {
        type: "button",
        class: _([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => n("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: _([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, X0)) : (t(), T($e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Y0),
      (t(!0), a(P, null, V(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: _([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => n("select", d)
      }, [
        U(f(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: _([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, ek)) : (t(), T($e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Q0))), 128))
    ]));
  }
}), Z5 = /* @__PURE__ */ Lt(tk, [["__scopeId", "data-v-3967c945"]]), ak = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, nk = { class: "grid gap-2" }, lk = {
  key: 0,
  class: "text-destructive text-sm"
}, ok = { class: "flex gap-2" }, J5 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: o }) {
    const n = o, s = K((() => {
      const A = navigator.userAgent, C = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: w }) => w.test(A))?.name, k = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: w }) => w.test(A))?.name;
      return [C, k].filter(Boolean).join(" on ") || "";
    })()), i = K(!1), d = Da(null), u = $(() => d.value?.isLoading.value ?? !1), m = $(() => d.value?.error.value ?? null), b = $(() => d.value?.isSupported.value ?? !1);
    pe(async () => {
      try {
        const { usePasskeyRegister: A } = await import("@laravel/passkeys/vue");
        d.value = A({
          onSuccess: () => {
            s.value = "", i.value = !1, n("success");
          }
        });
      } catch {
        d.value = null;
      }
    });
    const p = async (A) => {
      A.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, x = () => {
      i.value = !1, s.value = "";
    };
    return (A, C) => b.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      l("div", nk, [
        C[3] || (C[3] = l("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ue(l("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": C[1] || (C[1] = (k) => s.value = k),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [ye, s.value]
        ]),
        C[4] || (C[4] = l("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      m.value ? (t(), a("p", lk, f(m.value), 1)) : y("", !0),
      l("div", ok, [
        I(se, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: j(() => [
            U(f(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          type: "button",
          variant: "ghost",
          onClick: x
        }, {
          default: j(() => [...C[5] || (C[5] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(se, {
      key: 1,
      variant: "outline",
      onClick: C[0] || (C[0] = (k) => i.value = !0)
    }, {
      default: j(() => [...C[2] || (C[2] = [
        U(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", ak, " Passkeys are not supported in this browser. "));
  }
}), sk = { class: "pk-form-stack" }, rk = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, Y5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e;
    xt("panelPicker", {
      get base() {
        return n.pickerBase ?? "";
      },
      get returnUrl() {
        return n.returnUrl ?? "";
      }
    }), xt("panelCreateOption", {
      run(m, b) {
        return n.createOption ? n.createOption(m, b) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = o, s = $(() => n.nodes.length > 0), i = $(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = $(() => n.errors._conflict);
    function u(m) {
      if (n.upload)
        return (b, p) => n.upload(m, b, p);
    }
    return (m, b) => (t(), a("div", sk, [
      d.value ? (t(), a("p", rk, f(d.value), 1)) : y("", !0),
      s.value ? (t(!0), a(P, { key: 1 }, V(e.nodes, (p, x) => (t(), T(pa, {
        key: x,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: b[0] || (b[0] = (A, C) => r("change", A, C)),
        onAffixAction: b[1] || (b[1] = (A, C) => r("affix-action", A, C))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: _(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(P, null, V(e.fields, (p) => (t(), T(Re, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (x) => e.searchOptions(p.key, x) : void 0,
          upload: u(p.key),
          discard: e.discard,
          class: _(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (x) => r("change", p.key, x),
          onAffixAction: (x) => r("affix-action", p.key, x)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), ik = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, dk = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, uk = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, ck = ["disabled"], fk = ["disabled"], mk = ["disabled"], X5 = /* @__PURE__ */ O({
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
    return (o, n) => (t(), T(Ue, { to: "body" }, [
      I(Ve, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), a("div", ik, [
            l("div", dk, [
              n[3] || (n[3] = l("span", {
                class: "text-amber-600 dark:text-amber-400",
                "aria-hidden": "true"
              }, [
                l("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  l("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9"
                  }),
                  l("path", { d: "M12 8v4M12 16h.01" })
                ])
              ], -1)),
              l("span", uk, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => o.$emit("discard"))
              }, f(e.discardLabel), 9, ck)) : y("", !0),
              l("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => o.$emit("cancel"))
              }, f(e.cancelLabel), 9, fk),
              l("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => o.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, mk)
            ])
          ])) : y("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function Q5(e, o = {}) {
  const { warnOnUnload: n = !0 } = o, r = K(bt(e.value)), s = $(() => bt(e.value) !== r.value);
  function i() {
    r.value = bt(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(m) {
    s.value && (m.preventDefault(), m.returnValue = "");
  }
  return pe(() => {
    n && window.addEventListener("beforeunload", u);
  }), be(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function bt(e) {
  return JSON.stringify(e, (o, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const pk = {
  key: 0,
  class: "flex flex-col gap-1"
}, vk = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, gk = { class: "text-foreground text-sm font-medium" }, hk = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, bk = {
  key: 5,
  class: "max-w-full font-normal"
}, xk = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, yk = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, kk = {
  key: 6,
  class: "font-normal"
}, $k = {
  key: 0,
  class: "divide-y rounded-md border"
}, wk = { class: "text-muted-foreground truncate font-medium" }, Ck = { class: "text-foreground col-span-2 break-words" }, Sk = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, Mk = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, Bk = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, Ak = ["href"], zk = { class: "flex min-w-0 items-start gap-2.5" }, Pk = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, _k = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Ok = ["d"], jk = { class: "min-w-0" }, Lk = { class: "flex flex-wrap items-center gap-2" }, Vk = { class: "text-sm font-semibold" }, Tk = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Dk = ["onClick"], e3 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!n.node.collapsed), i = K(0), d = $(() => n.depth === 0), u = $(() => {
      const C = n.node.columns ?? (n.node.component === "section" ? 2 : 1);
      return C >= 3 ? "sm:grid-cols-3" : C === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), m = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, b = $(() => n.node.key ? n.record[n.node.key] : null), p = $(() => {
      const C = b.value;
      return C == null || C === "";
    }), x = $(() => {
      if (p.value)
        return "None";
      const C = b.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(C)).toLocaleDateString(void 0, m[n.node.type]);
      let k = String(C);
      return n.node.transform === "upper" && (k = k.toUpperCase()), n.node.transform === "lower" && (k = k.toLowerCase()), [n.node.prefix, k, n.node.suffix].filter(Boolean).join(" ");
    }), A = $(() => {
      const C = typeof b.value == "boolean" ? b.value ? "1" : "" : String(b.value), k = n.node.colors?.[C] ?? n.node.defaultColor ?? "neutral";
      return Et[k] ?? "outline";
    });
    return (C, k) => {
      const w = At("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", pk, [
        l("dt", vk, f(e.node.label), 1),
        l("dd", gk, [
          e.node.type === "badge" && h(_d)(b.value) ? (t(), T(We, {
            key: 0,
            variant: A.value,
            class: "capitalize"
          }, {
            default: j(() => [
              U(f(b.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", hk, "None")) : e.node.type === "icon" ? (t(), T(dd, {
            key: 2,
            value: b.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(fd, {
            key: 3,
            src: b.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(hd, {
            key: 4,
            value: typeof b.value == "string" ? b.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", bk, [
            e.node.language ? (t(), a("p", xk, f(e.node.language), 1)) : y("", !0),
            l("pre", yk, [
              l("code", null, f(b.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", kk, [
            b.value && typeof b.value == "object" && !Array.isArray(b.value) && Object.keys(b.value).length ? (t(), a("dl", $k, [
              (t(!0), a(P, null, V(b.value, (g, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                l("dt", wk, f(v), 1),
                l("dd", Ck, f(g), 1)
              ]))), 128))
            ])) : (t(), a("span", Sk, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", Mk, [
            (t(!0), a(P, null, V(Array.isArray(b.value) ? b.value : [], (g, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(P, null, V(e.node.entries ?? [], (c, S) => (t(), T(w, {
                key: S,
                node: c,
                record: g,
                depth: e.depth + 1,
                onAction: k[0] || (k[0] = (M) => r("action", M))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(b.value) || b.value.length === 0 ? (t(), a("span", Bk, "None")) : y("", !0)
          ])) : e.node.url && !p.value ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(x.value), 9, Ak)) : (t(), a("span", {
            key: 9,
            class: _([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(x.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: k[1] || (k[1] = (g) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : y("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: _(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("header", {
          class: _(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: k[2] || (k[2] = (g) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", zk, [
            e.node.icon ? (t(), a("div", Pk, [
              (t(), a("svg", _k, [
                l("path", {
                  d: h(ie)(e.node.icon)
                }, null, 8, Ok)
              ]))
            ])) : y("", !0),
            l("div", jk, [
              l("div", Lk, [
                l("h3", Vk, f(e.node.label), 1),
                e.node.status ? (t(), T(he, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : y("", !0)
              ]),
              e.node.description ? (t(), a("p", Tk, f(e.node.description), 1)) : y("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: _(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (g, v) => (t(), T(w, {
            key: v,
            node: g,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[3] || (k[3] = (c) => r("action", c))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: _(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (g, v) => (t(), T(w, {
          key: v,
          node: g,
          record: e.record,
          depth: e.depth + 1,
          onAction: k[4] || (k[4] = (c) => r("action", c))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: _(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("div", {
          class: _(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (g, v) => (t(), a("button", {
            key: v,
            type: "button",
            class: _([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (c) => i.value = v
          }, f(g.label), 11, Dk))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (g, v) => ue((t(), a("div", {
          key: v,
          class: _(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(g.children ?? [], (c, S) => (t(), T(w, {
            key: S,
            node: c,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[5] || (k[5] = (M) => r("action", M))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Te, i.value === v]
        ])), 128))
      ], 2)) : y("", !0);
    };
  }
}), Ek = { class: "text-muted-foreground text-sm" }, Ik = { class: "flex items-start gap-3" }, Fk = { class: "min-w-0 flex-1" }, Nk = { class: "flex flex-wrap items-center gap-2" }, Rk = { class: "truncate text-sm font-medium" }, Uk = { class: "text-muted-foreground mt-0.5 text-xs" }, Hk = { class: "text-muted-foreground text-xs" }, qk = { class: "mt-auto flex items-center gap-2" }, Kk = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), a("div", {
      class: _(["flex flex-col gap-4", h(xa)]),
      "data-slot": "payment-gateways"
    }, [
      l("p", Ek, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      l("div", {
        class: _(h(oc))
      }, [
        (t(!0), a(P, null, V(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          l("div", Ik, [
            l("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            l("div", Fk, [
              l("div", Nk, [
                l("h3", Rk, f(u.label), 1),
                I(he, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    U(f(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), T(he, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...d[0] || (d[0] = [
                    U(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), T(he, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...d[1] || (d[1] = [
                    U(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                u.isDefault ? (t(), T(he, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...d[2] || (d[2] = [
                    U(" Default ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                u.connected && u.mode ? (t(), T(he, {
                  key: 3,
                  status: u.mode
                }, {
                  default: j(() => [
                    U(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : y("", !0)
              ]),
              l("p", Uk, f(u.caption), 1)
            ])
          ]),
          l("p", Hk, f(u.methods.join(" · ")), 1),
          l("div", qk, [
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", u.key)
            }, {
              default: j(() => [...d[3] || (d[3] = [
                U(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            I(se, {
              size: "sm",
              variant: "ghost",
              onClick: (m) => r("toggle", u.key)
            }, {
              default: j(() => [
                U(f(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), Gk = { class: "flex flex-col gap-6" }, Wk = { class: "relative" }, Zk = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Jk = ["d"], Yk = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Xk = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Qk = { class: "flex flex-wrap items-center gap-2" }, e2 = { class: "text-muted-foreground text-sm" }, t2 = { class: "flex flex-col gap-1 text-sm" }, a2 = ["value"], n2 = {
  key: 0,
  class: "flex flex-col gap-2"
}, l2 = { class: "flex flex-wrap items-center gap-2" }, o2 = {
  key: 1,
  class: "flex items-center gap-2"
}, t3 = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Oe({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const o = Xe(e, "gateways"), n = K(null), r = K(""), s = $(
      () => o.value.find((C) => C.key === n.value) ?? null
    ), i = $(() => {
      const C = r.value.trim().toLowerCase();
      return C === "" ? o.value : o.value.filter((k) => [k.key, k.label, k.caption, ...k.methods].join(" ").toLowerCase().includes(C));
    });
    function d(C) {
      return C.connected && C.enabled !== !1;
    }
    function u(C, k) {
      o.value = o.value.map(
        (w) => w.key === C ? { ...w, ...k } : w
      );
    }
    function m(C) {
      n.value = C;
    }
    function b(C) {
      const k = o.value.find((g) => g.key === C);
      if (!k)
        return;
      const w = !k.connected;
      u(C, {
        connected: w,
        mode: w ? k.mode ?? "test" : null,
        enabled: w,
        isDefault: !1
      });
    }
    function p(C, k) {
      const w = o.value.find((g) => g.key === C);
      w?.connected && u(C, { enabled: k, isDefault: k ? w.isDefault : !1 });
    }
    function x(C) {
      const k = o.value.find((w) => w.key === C);
      !k || !d(k) || (o.value = o.value.map((w) => ({
        ...w,
        isDefault: w.key === C
      })));
    }
    function A(C) {
      const k = n.value;
      !k || !o.value.find((g) => g.key === k)?.connected || u(k, { mode: C });
    }
    return (C, k) => (t(), a(P, null, [
      l("div", Gk, [
        I(Pe, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        l("div", Wk, [
          (t(), a("svg", Zk, [
            l("path", {
              d: h(ie)("search")
            }, null, 8, Jk)
          ])),
          I(ge, {
            modelValue: r.value,
            "onUpdate:modelValue": k[0] || (k[0] = (w) => r.value = w),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(Kk, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: b
        }, null, 8, ["gateways"])) : (t(), a("p", Yk, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      I(Rt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: k[8] || (k[8] = (w) => n.value = null)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            size: "sm",
            onClick: k[6] || (k[6] = (w) => n.value = null)
          }, {
            default: j(() => [...k[21] || (k[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(se, {
            key: 0,
            size: "sm",
            onClick: k[7] || (k[7] = (w) => b(s.value.key))
          }, {
            default: j(() => [
              U(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : y("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), a("div", Xk, [
            l("div", Qk, [
              I(he, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: j(() => [
                  U(f(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(he, {
                key: 0,
                status: "offered"
              }, {
                default: j(() => [...k[9] || (k[9] = [
                  U(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(he, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...k[10] || (k[10] = [
                  U(" Disabled ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              s.value.isDefault ? (t(), T(he, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...k[11] || (k[11] = [
                  U(" Default ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              s.value.connected && s.value.mode ? (t(), T(he, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  U(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : y("", !0)
            ]),
            l("p", e2, f(s.value.caption), 1),
            l("label", t2, [
              k[12] || (k[12] = U(" Display name ", -1)),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, a2)
            ]),
            k[20] || (k[20] = l("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", n2, [
              k[16] || (k[16] = l("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              k[17] || (k[17] = l("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              l("div", l2, [
                I(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: k[1] || (k[1] = (w) => p(s.value.key, !0))
                }, {
                  default: j(() => [...k[13] || (k[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: k[2] || (k[2] = (w) => p(s.value.key, !1))
                }, {
                  default: j(() => [...k[14] || (k[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: k[3] || (k[3] = (w) => x(s.value.key))
                }, {
                  default: j(() => [...k[15] || (k[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : y("", !0),
            s.value.connected ? (t(), a("div", o2, [
              I(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: k[4] || (k[4] = (w) => A("test"))
              }, {
                default: j(() => [...k[18] || (k[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              I(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: k[5] || (k[5] = (w) => A("live"))
              }, {
                default: j(() => [...k[19] || (k[19] = [
                  U(" Live ", -1)
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
function ta(e) {
  if (typeof localStorage > "u")
    return /* @__PURE__ */ new Set();
  try {
    const o = localStorage.getItem(e);
    if (o)
      return new Set(JSON.parse(o));
  } catch {
  }
  return /* @__PURE__ */ new Set();
}
function a3(e) {
  const o = K(ta(e));
  pe(() => {
    o.value = ta(e);
  }), ce(
    o,
    (u) => {
      try {
        localStorage.setItem(e, JSON.stringify([...u]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function n(u) {
    const m = new Set(o.value);
    m.has(u) ? m.delete(u) : m.add(u), o.value = m;
  }
  function r(u) {
    const m = new Set(o.value);
    m.add(u), o.value = m;
  }
  function s(u) {
    const m = new Set(o.value);
    m.delete(u), o.value = m;
  }
  function i(u) {
    o.value = new Set(u);
  }
  function d() {
    o.value = /* @__PURE__ */ new Set();
  }
  return { hidden: o, toggle: n, hide: r, show: s, setHidden: i, reset: d };
}
function n3(e) {
  const { config: o, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = K(
    o.driver === "none" ? "off" : "connecting"
  ), m = K(/* @__PURE__ */ new Set());
  let b = /* @__PURE__ */ new Map(), p, x, A, C = (/* @__PURE__ */ new Date()).toISOString(), k = null;
  function w(W, J) {
    b.set(W, { ...b.get(W) ?? {}, ...J }), !p && (p = setTimeout(() => {
      p = void 0, g();
    }, o.batchMs));
  }
  function g() {
    if (b.size === 0)
      return;
    const W = b;
    b = /* @__PURE__ */ new Map();
    const J = /* @__PURE__ */ new Set();
    for (const [ae, te] of W) {
      const Y = n.value.find((Z) => Z[r] === ae);
      if (!Y) {
        d?.(ae, te);
        continue;
      }
      Object.assign(Y, te), J.add(ae);
    }
    J.size !== 0 && (m.value = /* @__PURE__ */ new Set([...m.value, ...J]), setTimeout(() => {
      const ae = new Set(m.value);
      J.forEach((te) => ae.delete(te)), m.value = ae;
    }, 1500));
  }
  async function v() {
    if (!(!s || n.value.length === 0)) {
      A?.abort(), A = new AbortController();
      try {
        const W = n.value.map((te) => te[r]), { records: J, at: ae } = await s(W, C);
        C = ae, u.value = "live";
        for (const te of J)
          w(te[r], te);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function c() {
    S(), u.value = "live", x = setInterval(v, o.intervalMs);
  }
  function S() {
    clearInterval(x), x = void 0, A?.abort();
  }
  function M() {
    return window.Echo ?? null;
  }
  function z() {
    const W = M();
    if (!W || !o.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    k = o.channel;
    const J = W.private(o.channel);
    for (const ae of o.events)
      J.listen(ae, (te) => {
        te?.[r] !== void 0 && w(te[r], te);
      });
    u.value = "live", W.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), W.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function R() {
    k && (M()?.leave(k), k = null);
  }
  function E() {
    o.driver === "poll" && c(), o.driver === "broadcast" && z();
  }
  function ee() {
    S(), R(), clearTimeout(p), p = void 0, b = /* @__PURE__ */ new Map();
  }
  function H() {
    o.pauseWhenHidden && (document.hidden ? (ee(), u.value = "paused") : (C = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return pe(() => {
    o.driver !== "none" && (E(), o.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), be(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: u, recentlyChanged: m, applyPatch: w, flush: g, pollOnce: v };
}
const s2 = /^[a-z0-9-]+$/, r2 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function l3(e) {
  Ea(() => {
    if (typeof document > "u")
      return;
    const o = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !s2.test(n) || typeof r != "string" || !r2.test(r) || (o[`--${n}`] = r);
    nu(o);
  });
}
const i2 = { class: "flex items-center gap-0.5" }, d2 = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", i2, [
      String(e.value) === "mono" ? (t(), a(P, { key: 0 }, [
        n[0] || (n[0] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        n[1] || (n[1] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        n[2] || (n[2] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(P, { key: 1 }, [
        n[3] || (n[3] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        n[4] || (n[4] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        n[5] || (n[5] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), u2 = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), T(Ca, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), c2 = { class: "flex flex-col gap-2" }, f2 = { class: "bg-card rounded-lg border p-4" }, m2 = { class: "text-muted-foreground truncate text-xs" }, p2 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, v2 = /* @__PURE__ */ O({
  __name: "PkSeoPreview",
  props: {
    field: {},
    values: { default: () => ({}) }
  },
  setup(e) {
    const o = e, n = {
      titleMax: 60,
      titleMin: 30,
      descriptionMax: 160,
      descriptionMin: 70
    }, r = $(() => ({ ...n, ...o.field.limits ?? {} })), s = $(
      () => String(o.values[o.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = $(
      () => String(o.values[o.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = $(
      () => String(o.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = $(() => {
      const k = String(o.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return k === "" ? d.value : `${d.value} › ${k.split("/").join(" › ")}`;
    });
    function m(k, w) {
      return k.length <= w ? k : `${k.slice(0, w - 1).trimEnd()}…`;
    }
    const b = $(() => m(s.value, r.value.titleMax)), p = $(() => m(i.value, r.value.descriptionMax));
    function x(k, w, g) {
      return k === 0 ? { tone: "text-muted-foreground", note: "empty" } : k > g ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : k < w ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const A = $(
      () => x(s.value.length, r.value.titleMin, r.value.titleMax)
    ), C = $(
      () => x(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (k, w) => (t(), a("div", c2, [
      l("div", f2, [
        l("p", m2, f(u.value), 1),
        l("p", {
          class: _(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", b.value === "" ? "text-muted-foreground italic" : ""])
        }, f(b.value || "Untitled page"), 3),
        l("p", {
          class: _(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      l("div", p2, [
        l("span", {
          class: _(A.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(A.value.note), 3),
        l("span", {
          class: _(C.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(C.value.note), 3)
      ]),
      w[0] || (w[0] = l("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function g2() {
  Me("radio", Tf), Me("checkboxlist", If), Me("tags", Kf), Me("colour", lm), Me("slider", um), Me("visual-select", wm), Me("markdown", vf), Me("code", $f), Me("seo-preview", v2), gt("swatch", Sm), gt("voucher-code-box", u2), gt("document-colour-mode", d2);
}
function Ba() {
  const e = K(null), o = K(!1);
  let n = null;
  return pe(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      o.value = !0;
      return;
    }
    n = new IntersectionObserver(
      (s) => {
        for (const i of s)
          i.isIntersecting && (o.value = !0, n?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), n.observe(e.value);
  }), be(() => n?.disconnect()), { el: e, shown: o };
}
const h2 = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: o, shown: n } = Ba();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: _(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", h(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), b2 = ["id"], Se = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (o, n) => (t(), a("section", {
      id: e.id,
      class: _(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      l("div", {
        class: _(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        I(h2, null, {
          default: j(() => [
            q(o.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, b2));
  }
}), x2 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, y2 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, k2 = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Ee = /* @__PURE__ */ O({
  __name: "PkSectionHeading",
  props: {
    eyebrow: {},
    title: {},
    body: {},
    centred: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, n) => e.title || e.body || e.eyebrow ? (t(), a("div", {
      key: 0,
      class: _(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", x2, f(e.eyebrow), 1)) : y("", !0),
      e.title ? (t(), a("h2", y2, f(e.title), 1)) : y("", !0),
      e.body ? (t(), a("p", k2, f(e.body), 1)) : y("", !0)
    ], 2)) : y("", !0);
  }
});
function $2() {
  const e = K(null);
  let o = null;
  function n(s) {
    if (!o)
      return;
    const i = o.getBoundingClientRect();
    o.style.setProperty("--pk-px", String((s.clientX - i.left) / i.width)), o.style.setProperty("--pk-py", String((s.clientY - i.top) / i.height));
  }
  function r() {
    o?.style.setProperty("--pk-px", "0.5"), o?.style.setProperty("--pk-py", "0.5");
  }
  return pe(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (o = e.value, r(), o.addEventListener("pointermove", n, { passive: !0 }), o.addEventListener("pointerleave", r, { passive: !0 }));
  }), be(() => {
    o?.removeEventListener("pointermove", n), o?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const w2 = { class: "pk-tilt-inner relative h-full" }, C2 = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: o } = $2();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: "pk-tilt group/tilt"
    }, [
      l("div", w2, [
        r[0] || (r[0] = l("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(n.$slots, "default")
      ])
    ], 512));
  }
}), S2 = { class: "flex flex-col gap-10" }, M2 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, B2 = { class: "text-base font-semibold" }, A2 = { class: "text-sm text-pretty text-muted-foreground" }, z2 = /* @__PURE__ */ O({
  __name: "PkBento",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function o(n) {
      return {
        wide: "sm:col-span-2",
        tall: "sm:row-span-2",
        large: "sm:col-span-2 sm:row-span-2"
      }[n ?? ""] ?? "";
    }
    return (n, r) => (t(), T(Se, null, {
      default: j(() => [
        l("div", S2, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", M2, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), T(C2, {
              key: i,
              class: _(o(s.span))
            }, {
              default: j(() => [
                l("div", {
                  class: _([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  l("h3", B2, f(s.title), 1),
                  l("p", A2, f(s.body), 1)
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
}), P2 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, _2 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, O2 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, j2 = ["href"], L2 = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", P2, [
          l("h2", _2, f(e.title), 1),
          e.body ? (t(), a("p", O2, f(e.body), 1)) : y("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, j2)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), V2 = { class: "flex flex-col gap-8" }, T2 = { class: "divide-y rounded-lg border" }, D2 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, E2 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, I2 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, { narrow: "" }, {
      default: j(() => [
        l("div", V2, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", T2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              l("summary", D2, [
                U(f(r.question) + " ", 1),
                n[0] || (n[0] = l("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              l("p", E2, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), F2 = { class: "flex flex-col gap-10" }, N2 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, R2 = { class: "text-sm font-semibold" }, U2 = { class: "text-sm text-pretty text-muted-foreground" }, H2 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", F2, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", N2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("h3", R2, f(r.title), 1),
              l("p", U2, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), q2 = { class: "flex flex-col items-center gap-6 text-center" }, K2 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, G2 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, W2 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Z2 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, J2 = ["href"], Y2 = ["href"], X2 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, Q2 = /* @__PURE__ */ O({
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
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", q2, [
          e.eyebrow ? (t(), a("p", K2, f(e.eyebrow), 1)) : y("", !0),
          l("h1", G2, f(e.title), 1),
          e.body ? (t(), a("p", W2, f(e.body), 1)) : y("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", Z2, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, J2)) : y("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, Y2)) : y("", !0)
          ])) : y("", !0),
          e.note ? (t(), a("p", X2, f(e.note), 1)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), e$ = { class: "flex flex-col items-center gap-6" }, t$ = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, a$ = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, n$ = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        l("div", e$, [
          e.title ? (t(), a("p", t$, f(e.title), 1)) : y("", !0),
          l("ul", a$, [
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
}), l$ = { class: "flex flex-col gap-10" }, o$ = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, s$ = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, r$ = ["aria-pressed"], i$ = ["aria-pressed"], d$ = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, u$ = { class: "grid gap-4 md:grid-cols-3" }, c$ = { class: "flex flex-col gap-1" }, f$ = { class: "text-sm font-semibold" }, m$ = { class: "flex items-baseline gap-1" }, p$ = { class: "text-3xl font-semibold tracking-tight" }, v$ = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, g$ = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, h$ = { class: "flex flex-col gap-2 text-sm" }, b$ = { class: "text-muted-foreground" }, x$ = ["href"], y$ = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const o = e, n = K(!1), r = $(() => (o.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        l("div", l$, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", o$, [
            l("div", s$, [
              l("button", {
                type: "button",
                class: _([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, r$),
              l("button", {
                type: "button",
                class: _([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, i$)
            ]),
            e.annualNote ? (t(), a("p", d$, f(e.annualNote), 1)) : y("", !0)
          ])) : y("", !0),
          l("ul", u$, [
            (t(!0), a(P, null, V(e.items ?? [], (u, m) => (t(), a("li", {
              key: m,
              class: _(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              l("div", c$, [
                l("h3", f$, f(u.name), 1),
                l("p", m$, [
                  l("span", p$, f(s(u)), 1),
                  u.period ? (t(), a("span", v$, f(u.period), 1)) : y("", !0)
                ]),
                u.body ? (t(), a("p", g$, f(u.body), 1)) : y("", !0)
              ]),
              l("ul", h$, [
                (t(!0), a(P, null, V(u.features ?? [], (b, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = l("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  l("span", b$, f(b.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: _([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, x$)) : y("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function k$() {
  const e = K(null);
  let o = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !o || !s)
      return;
    const u = o.getBoundingClientRect(), m = u.height + window.innerHeight, b = m <= 0 ? 0 : (window.innerHeight - u.top) / m;
    o.style.setProperty("--pk-progress", String(Math.min(Math.max(b, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return pe(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (o = e.value, u || typeof IntersectionObserver > "u") {
        o.style.setProperty("--pk-progress", "1");
        return;
      }
      o.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((m) => {
        s = m.some((b) => b.isIntersecting), s && d();
      }), n.observe(o), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), be(() => {
    n?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const $$ = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, w$ = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, C$ = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, S$ = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, M$ = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, B$ = { class: "pk-showcase-stage w-full [perspective:1400px]" }, A$ = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, z$ = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, P$ = { class: "ml-3 truncate text-xs text-muted-foreground" }, _$ = { class: "flex" }, O$ = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, j$ = { class: "min-w-0 flex-1 p-4" }, L$ = { class: "flex flex-col divide-y rounded-md border" }, V$ = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: o } = k$();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: o,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      l("div", $$, [
        l("div", w$, [
          l("div", C$, [
            l("h2", S$, f(e.title), 1),
            e.body ? (t(), a("p", M$, f(e.body), 1)) : y("", !0)
          ]),
          l("div", B$, [
            l("div", A$, [
              l("div", z$, [
                r[0] || (r[0] = l("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = l("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = l("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                l("span", P$, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              l("div", _$, [
                l("div", O$, [
                  (t(), a(P, null, V(6, (s) => l("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                l("div", j$, [
                  r[4] || (r[4] = l("div", { class: "mb-3 flex gap-2" }, [
                    l("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  l("div", L$, [
                    (t(!0), a(P, null, V(e.rows, (s) => (t(), a("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: ne({ "--pk-row": String(s) })
                    }, [...r[3] || (r[3] = [
                      l("span", { class: "size-6 shrink-0 rounded-full bg-foreground/10" }, null, -1),
                      l("span", { class: "h-2.5 flex-1 rounded bg-foreground/10" }, null, -1),
                      l("span", { class: "hidden h-2.5 w-24 rounded bg-foreground/[0.07] sm:block" }, null, -1),
                      l("span", { class: "h-5 w-14 rounded-full bg-emerald-500/20" }, null, -1)
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
}), T$ = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const o = e, { el: n, shown: r } = Ba(), s = K(0);
    return ce(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = o.to;
        return;
      }
      const u = performance.now(), m = (b) => {
        const p = Math.min((b - u) / o.duration, 1);
        s.value = o.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = o.to;
      };
      requestAnimationFrame(m);
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), D$ = { class: "flex flex-col gap-10" }, E$ = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, I$ = { class: "order-2 text-sm text-muted-foreground" }, F$ = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, N$ = /* @__PURE__ */ O({
  __name: "PkStats",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function o(n) {
      const r = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/.exec((n ?? "").trim());
      if (!r)
        return null;
      const s = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: s };
    }
    return (n, r) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        l("div", D$, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("dl", E$, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              l("dt", I$, f(s.label), 1),
              l("dd", F$, [
                o(s.value) ? (t(), T(T$, {
                  key: 0,
                  to: o(s.value).number,
                  prefix: o(s.value).prefix,
                  suffix: o(s.value).suffix,
                  decimals: o(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(P, { key: 1 }, [
                  U(f(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), R$ = { class: "flex flex-col gap-10" }, U$ = { class: "grid gap-6 md:grid-cols-3" }, H$ = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, q$ = { class: "text-sm font-semibold" }, K$ = { class: "text-sm text-pretty text-muted-foreground" }, G$ = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", R$, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ol", U$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              l("span", H$, f(s + 1), 1),
              l("h3", q$, f(r.title), 1),
              l("p", K$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), W$ = { class: "flex flex-col gap-10" }, Z$ = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, J$ = { class: "text-pretty text-sm leading-relaxed" }, Y$ = { class: "mt-auto flex items-center gap-3" }, X$ = ["src"], Q$ = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, ew = { class: "min-w-0" }, tw = { class: "block truncate text-sm font-medium" }, aw = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, nw = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", W$, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", Z$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("blockquote", J$, " “" + f(r.quote) + "” ", 1),
              l("figcaption", Y$, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, X$)) : (t(), a("span", Q$, f((r.name ?? "?").slice(0, 1)), 1)),
                l("span", ew, [
                  l("span", tw, f(r.name), 1),
                  r.role ? (t(), a("span", aw, f(r.role), 1)) : y("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), o3 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const n = e, r = {
      hero: Q2,
      logos: n$,
      features: H2,
      bento: z2,
      showcase: V$,
      steps: G$,
      stats: N$,
      testimonials: nw,
      pricing: y$,
      faq: I2,
      cta: L2
    }, s = $(
      () => (n.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return o({ known: Object.keys(r) }), (i, d) => (t(!0), a(P, null, V(s.value, (u) => (t(), T(xe(u.component), le({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), lw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, s3 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", lw, [
      l("div", {
        class: _([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      l("div", {
        class: _([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      l("div", {
        class: _([
          "pk-blob absolute top-1/3 left-1/4 size-[30rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-40 dark:opacity-30" : "opacity-20 dark:opacity-10"
        ]),
        style: { background: "radial-gradient(circle at 40% 60%, var(--pk-aurora-3), transparent 70%)", "animation-delay": "-14s" }
      }, null, 2),
      n[0] || (n[0] = l("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), ow = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, r3 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", ow, [...n[0] || (n[0] = [
      Bt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), sw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, i3 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", sw, [...n[0] || (n[0] = [
      l("div", {
        class: "absolute inset-0 opacity-[0.18] dark:opacity-[0.14]",
        style: { "background-image": "radial-gradient(currentColor 1px, transparent 1px)", "background-size": "22px 22px", "mask-image": "radial-gradient(ellipse 90% 70% at 50% 0%, black, transparent 80%)" }
      }, null, -1),
      l("div", {
        class: "absolute inset-x-0 top-0 h-[36rem]",
        style: { background: `radial-gradient(
                    ellipse 60% 100% at 50% 0%,
                    var(--pk-console-glow),
                    transparent 70%
                )` }
      }, null, -1),
      l("div", { class: "pk-scanlines absolute inset-0" }, null, -1)
    ])]));
  }
});
g2();
const d3 = "0.0.1";
export {
  _5 as AdminDirectory,
  Xu as Alert,
  Qu as AlertDescription,
  ec as AlertTitle,
  h5 as AppPageFooter,
  Lw as AppearanceDrawer,
  j4 as Avatar,
  L4 as AvatarFallback,
  V4 as AvatarImage,
  Et as BADGE_VARIANTS,
  Pw as BadgeResolver,
  C5 as BarChart,
  T4 as Breadcrumb,
  D4 as BreadcrumbEllipsis,
  E4 as BreadcrumbItem,
  I4 as BreadcrumbLink,
  F4 as BreadcrumbList,
  N4 as BreadcrumbPage,
  R4 as BreadcrumbSeparator,
  gw as BulkActions,
  xa as CATALOGUE_CONTAINER,
  oc as CATALOGUE_GRID,
  Nw as CATALOGUE_GRID_TIGHT,
  sc as CATALOGUE_GRID_TILES,
  r5 as Card,
  i5 as CardAction,
  d5 as CardContent,
  u5 as CardDescription,
  c5 as CardFooter,
  f5 as CardHeader,
  m5 as CardTitle,
  zx as CartPanel,
  F5 as CatalogBrowser,
  t1 as CatalogCard,
  Ma as CatalogFilterSheet,
  Nt as CatalogGrid,
  E5 as CatalogInspect,
  by as CatalogItemDetail,
  I5 as CatalogItemView,
  N5 as CatalogRegister,
  D5 as CatalogTill,
  Mg as ChartCard,
  tt as ChartTooltip,
  rr as Checkbox,
  Sw as CheckboxCell,
  Mw as CodeCell,
  hd as ColourCell,
  z5 as ComboChart,
  sr as CreateOptionDialog,
  ar as CreateOptionError,
  U5 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Qy as DASHBOARD_HIDE_KEY,
  H5 as DashboardShortcuts,
  Ml as DataTable,
  J4 as Dialog,
  Y4 as DialogClose,
  X4 as DialogContent,
  Q4 as DialogDescription,
  e5 as DialogFooter,
  t5 as DialogHeader,
  Tc as DialogOverlay,
  a5 as DialogScrollContent,
  n5 as DialogTitle,
  l5 as DialogTrigger,
  _5 as DirectoryPage,
  x4 as DropdownMenu,
  y4 as DropdownMenuCheckboxItem,
  k4 as DropdownMenuContent,
  $4 as DropdownMenuGroup,
  w4 as DropdownMenuItem,
  C4 as DropdownMenuLabel,
  f3 as DropdownMenuPortal,
  S4 as DropdownMenuRadioGroup,
  M4 as DropdownMenuRadioItem,
  B4 as DropdownMenuSeparator,
  A4 as DropdownMenuShortcut,
  z4 as DropdownMenuSub,
  P4 as DropdownMenuSubContent,
  _4 as DropdownMenuSubTrigger,
  O4 as DropdownMenuTrigger,
  Aw as EditableCell,
  Be as FOCUS_RING,
  hw as FOCUS_RING_SOFT,
  qt as FOCUS_RING_WITHIN,
  Hw as FORM_MEASURE,
  Re as FormFieldControl,
  P5 as HeatmapChart,
  mt as ICON_PATHS,
  dd as IconCell,
  fd as ImageCell,
  e3 as InfoNode,
  ic as JPEG_IMAGE_ERROR,
  Bw as KeyValueCell,
  o5 as Label,
  Up as LineChart,
  dx as LineItems,
  rt as MiniStatCard,
  U4 as NavigationMenu,
  H4 as NavigationMenuContent,
  q4 as NavigationMenuIndicator,
  K4 as NavigationMenuItem,
  G4 as NavigationMenuLink,
  W4 as NavigationMenuList,
  Z4 as NavigationMenuTrigger,
  Lc as NavigationMenuViewport,
  rc as OPAQUE_IMAGE_ERROR,
  De as PAGE_SHELL,
  Rw as PAGE_SHELL_COMPACT,
  Uw as PAGE_SHELL_STACK,
  t3 as PaymentGatewaySettings,
  Kk as PaymentGateways,
  S5 as PieChart,
  Iw as PkAlertError,
  s3 as PkAuroraBackdrop,
  We as PkBadge,
  z2 as PkBento,
  Vw as PkBottomNav,
  p5 as PkBoundary,
  y5 as PkBuilder,
  se as PkButton,
  v5 as PkCard,
  If as PkCheckboxList,
  Ca as PkCodeBox,
  $f as PkCodeInput,
  lm as PkColourPicker,
  i3 as PkConsoleBackdrop,
  T$ as PkCountUp,
  L2 as PkCta,
  b5 as PkDeviceFrame,
  ap as PkDocument,
  Ne as PkDropdown,
  r3 as PkEditorialBackdrop,
  yt as PkEmptyState,
  I2 as PkFaq,
  H2 as PkFeatureGrid,
  ke as PkFieldLabel,
  ma as PkFileUpload,
  Pe as PkHeading,
  Q2 as PkHero,
  Vr as PkKeyValue,
  o3 as PkLandingSections,
  n$ as PkLogoCloud,
  vf as PkMarkdownInput,
  Ye as PkModal,
  Vt as PkMultiSelect,
  Dw as PkOtpInput,
  Ew as PkPageHeader,
  J5 as PkPasskeyRegister,
  Fw as PkPasswordInput,
  y$ as PkPricing,
  Xb as PkQtyStepper,
  zo as PkQueryBuilder,
  Tf as PkRadioGroup,
  x5 as PkRepeater,
  h2 as PkReveal,
  qr as PkRichEditor,
  Se as PkSection,
  Ee as PkSectionHeading,
  V$ as PkShowcase,
  jy as PkSignaturePad,
  $e as PkSkeleton,
  Rt as PkSlideover,
  um as PkSlider,
  Tw as PkSpinner,
  N$ as PkStats,
  he as PkStatusBadge,
  er as PkStepIndicator,
  G$ as PkSteps,
  Sm as PkSwatchPreview,
  Kf as PkTagsInput,
  nw as PkTestimonials,
  ge as PkTextInput,
  C2 as PkTiltCard,
  wm as PkVisualSelect,
  A1 as PlanCard,
  T5 as PlanEditor,
  V5 as PlanGrid,
  A5 as PolarAreaChart,
  B5 as RadarChart,
  _w as RecordActions,
  Y5 as RecordForm,
  Cw as RelationCreateDialog,
  xw as RelationPanel,
  Oh as STATUS_TONES,
  M5 as ScatterChart,
  pa as SchemaNode,
  j5 as SegmentedBar,
  G5 as SelectionBar,
  zc as Separator,
  K5 as SetupChecklist,
  ba as ShadcnInput,
  Tt as Sheet,
  Kw as SheetClose,
  Dt as SheetContent,
  pc as SheetDescription,
  Gw as SheetFooter,
  vc as SheetHeader,
  gc as SheetTitle,
  Ww as SheetTrigger,
  qg as ShortcutsWidget,
  Zw as Sidebar,
  Jw as SidebarContent,
  Yw as SidebarFooter,
  Xw as SidebarGroup,
  Qw as SidebarGroupAction,
  e4 as SidebarGroupContent,
  t4 as SidebarGroupLabel,
  a4 as SidebarHeader,
  n4 as SidebarInput,
  l4 as SidebarInset,
  o4 as SidebarMenu,
  s4 as SidebarMenuAction,
  r4 as SidebarMenuBadge,
  d4 as SidebarMenuButton,
  u4 as SidebarMenuItem,
  c4 as SidebarMenuSkeleton,
  f4 as SidebarMenuSub,
  m4 as SidebarMenuSubButton,
  p4 as SidebarMenuSubItem,
  v4 as SidebarProvider,
  g4 as SidebarRail,
  h4 as SidebarSeparator,
  b4 as SidebarTrigger,
  R5 as SignatureStudio,
  ut as Sparkline,
  s5 as Spinner,
  O5 as StatCard,
  L5 as StatListChart,
  q5 as StatStrip,
  Fe as Switch,
  ya as TRANSPARENT_IMAGE_HELP,
  W5 as TablePagination,
  lo as TableShell,
  Z5 as TableTabs,
  Os as TableToolbar,
  w5 as ThemeToggle,
  Mc as Tooltip,
  Bc as TooltipContent,
  i4 as TooltipProvider,
  Ac as TooltipTrigger,
  Sa as TrendBadge,
  X5 as UnsavedBar,
  tc as alertVariants,
  au as appearanceVars,
  Ct as applyAppearance,
  mc as assertTransparentImage,
  Ge as buttonClasses,
  it as catalogFiltersActive,
  Q as cn,
  lr as createOptionActionLabel,
  nr as createOptionTitle,
  a1 as cycleLabel,
  _e as emptyCatalogFilters,
  tr as fieldControl,
  ww as fieldErrorsFromPayload,
  Vb as findExactSku,
  n1 as formatPerkValue,
  _d as hasBadgeValue,
  yw as hasFieldControl,
  k5 as hasOptionPreview,
  ie as iconPath,
  cc as imageHasTransparency,
  Ow as initializeAppearance,
  wt as isDark,
  Ut as matchCatalogItem,
  Vc as navigationMenuTriggerStyle,
  cm as optionPreview,
  qw as packWidgetColumns,
  l1 as perkGranted,
  Ft as readAppearance,
  g2 as registerBuiltInFieldControls,
  Me as registerFieldControl,
  gt as registerOptionPreview,
  kw as registeredFieldTypes,
  fm as registeredOptionPreviews,
  $w as resetFieldControls,
  $5 as resetOptionPreviews,
  jw as setAppearancePersister,
  Pc as sidebarMenuButtonVariants,
  Th as statusBadgeVariant,
  Vh as statusTone,
  bw as toUrl,
  ha as useAppearance,
  a3 as useColumnVisibility,
  n3 as useLiveUpdates,
  $2 as usePointer,
  Ba as useReveal,
  zw as useSchemaColumns,
  k$ as useScrollProgress,
  g5 as useShellPageFooter,
  dt as useSidebar,
  l3 as useTenantTheme,
  Q5 as useUnsavedChanges,
  d3 as version
};
//# sourceMappingURL=index.js.map
