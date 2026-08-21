import './ui.css';
import { defineComponent as O, useSlots as Mt, openBlock as t, createElementBlock as n, normalizeClass as z, unref as x, renderSlot as K, createElementVNode as o, toDisplayString as f, createCommentVNode as w, computed as y, normalizeStyle as ne, Fragment as P, renderList as V, ref as q, watch as ue, useId as za, withModifiers as me, createTextVNode as U, createVNode as F, createStaticVNode as Bt, createBlock as T, createSlots as Ze, withCtx as j, nextTick as Ae, onBeforeUnmount as ge, Teleport as Ue, Transition as Ve, onMounted as pe, withDirectives as ce, vModelText as ke, resolveDynamicComponent as ye, resolveComponent as _t, vModelSelect as Ee, vModelDynamic as Oa, mergeProps as le, normalizeProps as Ce, guardReactiveProps as je, defineAsyncComponent as Ht, inject as lt, vShow as Te, isRef as ja, useTemplateRef as La, onErrorCaptured as Va, provide as xt, markRaw as aa, withKeys as Ta, reactive as Je, useModel as Qe, mergeModels as Oe, shallowRef as Da, watchEffect as Fa } from "vue";
import { useForwardPropsEmits as ve, DialogRoot as na, DialogOverlay as At, DialogPortal as Pt, DialogContent as zt, DialogClose as He, CheckboxRoot as Ea, CheckboxIndicator as Ia, SwitchRoot as Na, SwitchThumb as Ra, DialogDescription as la, DialogTitle as oa, DialogTrigger as sa, createContext as Ua, Primitive as Ke, TooltipRoot as Ha, TooltipPortal as Ka, TooltipContent as qa, TooltipArrow as Ga, TooltipProvider as ra, TooltipTrigger as Wa, Separator as Za, DropdownMenuRoot as Ja, DropdownMenuCheckboxItem as Ya, DropdownMenuItemIndicator as ia, DropdownMenuPortal as Qa, DropdownMenuContent as Xa, DropdownMenuGroup as en, useForwardProps as Se, DropdownMenuItem as tn, DropdownMenuLabel as an, DropdownMenuRadioGroup as nn, DropdownMenuRadioItem as ln, DropdownMenuSeparator as on, DropdownMenuSub as sn, DropdownMenuSubContent as rn, DropdownMenuSubTrigger as dn, DropdownMenuTrigger as un, AvatarRoot as cn, AvatarFallback as fn, AvatarImage as mn, NavigationMenuViewport as pn, NavigationMenuRoot as vn, NavigationMenuContent as gn, NavigationMenuIndicator as hn, NavigationMenuItem as bn, NavigationMenuLink as xn, NavigationMenuList as yn, NavigationMenuTrigger as kn, Label as $n } from "reka-ui";
import { DropdownMenuPortal as I3 } from "reka-ui";
import { X as Ot, Check as da, AlertCircle as wn, EyeOff as Cn, Eye as Sn, PanelLeftOpen as Mn, PanelLeftClose as Bn, Circle as _n, ChevronRight as ua, MoreHorizontal as An, ChevronDown as Pn, Loader2Icon as zn } from "@lucide/vue";
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
const Fn = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, En = ["d"], In = { class: "flex max-w-sm flex-col gap-1" }, Nn = {
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
    const l = Mt();
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: z(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      x(l).illustration ? (t(), n("div", Fn, [
        K(a.$slots, "illustration")
      ])) : (t(), n("div", {
        key: 1,
        class: z(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        K(a.$slots, "icon", {}, () => [
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
              d: x(ie)(e.icon)
            }, null, 8, En)
          ], 2))
        ])
      ], 2)),
      o("div", In, [
        o("p", {
          class: z(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), n("p", Nn, f(e.description), 1)) : w("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", Rn, [
        K(a.$slots, "actions")
      ])) : w("", !0)
    ], 2));
  }
}), Un = ["aria-label"], we = /* @__PURE__ */ O({
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
      style: ne(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(P, null, V(s.value, (m) => (t(), n("span", {
        key: m,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Un));
  }
}), Hn = { class: "w-full border-collapse text-sm" }, Kn = { class: "bg-background sticky top-0 z-10" }, qn = { class: "bg-muted/50" }, Gn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Wn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Zn = ["id", "checked", "indeterminate"], Jn = ["onClick"], Yn = {
  key: 0,
  class: "text-xs"
}, Qn = {
  key: 1,
  class: "text-xs opacity-40"
}, Xn = { key: 1 }, el = {
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
  setup(e, { emit: l }) {
    const a = e;
    function r(G) {
      if (!G || !a.groupBy)
        return "";
      if (G.__group !== void 0 && G.__group !== null)
        return String(G.__group);
      const D = G[a.groupBy.key];
      return D == null || D === "" ? "" : String(D);
    }
    function s(G) {
      return a.groupBy ? G === 0 ? !0 : r(a.rows[G]) !== r(a.rows[G - 1]) : !1;
    }
    function i(G) {
      if (G.__groupTitle)
        return String(G.__groupTitle);
      const D = a.groupBy ? G[a.groupBy.key] : null, I = D == null || D === "" ? "None" : String(D);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? I : `${a.groupBy.label}: ${I}`;
    }
    const d = q(/* @__PURE__ */ new Set()), u = q(/* @__PURE__ */ new Set());
    function m(G) {
      return a.groupBy?.collapsible ? d.value.has(G) : !1;
    }
    function g(G) {
      if (!a.groupBy?.collapsible)
        return;
      const D = new Set(u.value);
      D.add(G), u.value = D;
      const I = new Set(d.value);
      I.has(G) ? I.delete(G) : I.add(G), d.value = I;
    }
    function p(G) {
      return a.groupBy?.collapsible ? !m(r(a.rows[G])) : !0;
    }
    ue(
      () => a.rows,
      (G) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const D = new Set(d.value);
        for (const I of G) {
          const oe = r(I);
          oe !== "" && !u.value.has(oe) && D.add(oe);
        }
        d.value = D;
      },
      { immediate: !0 }
    );
    const b = q(null), C = q(null);
    function $(G, D) {
      b.value = G, D.dataTransfer?.setData("text/plain", String(G)), D.dataTransfer && (D.dataTransfer.effectAllowed = "move");
    }
    function k() {
      b.value = null, C.value = null;
    }
    function S(G) {
      return b.value === null || C.value !== G ? "" : b.value > G ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function h(G, D) {
      b.value !== null && (D.preventDefault(), C.value = G);
    }
    function v(G) {
      const D = b.value;
      if (b.value = null, C.value = null, D === null || D === G)
        return;
      const I = a.rows.map((re) => re[a.rowKey]), [oe] = I.splice(D, 1);
      I.splice(G, 0, oe), c("reorder", I);
    }
    const c = l;
    function M(G, D) {
      !a.rowClickable || a.reordering || D.button !== 0 || D.metaKey || D.ctrlKey || D.shiftKey || D.altKey || D.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", G);
    }
    const _ = q(null), A = za(), R = y(() => a.columns.filter((G) => !a.hidden?.has(G.key)));
    function E(G) {
      const D = G[a.rowKey];
      return D == null || D === "" ? null : D;
    }
    function ee(G) {
      const D = E(G);
      return D !== null && !!a.selected?.has(D);
    }
    const H = q(null);
    function W(G) {
      return a.rows.findIndex((D) => {
        const I = E(D);
        return I !== null && I === G;
      });
    }
    function J(G, D) {
      const I = E(G);
      if (I === null)
        return;
      const oe = D.shiftKey, re = !!a.selected?.has(I);
      if (oe && H.value !== null && H.value !== I) {
        const at = W(H.value), ct = W(I);
        if (at !== -1 && ct !== -1) {
          const _a = Math.min(at, ct), Aa = Math.max(at, ct), Pa = !re;
          for (let nt = _a; nt <= Aa; nt++) {
            if (!p(nt))
              continue;
            const ft = E(a.rows[nt]);
            if (ft === null)
              continue;
            !!a.selected?.has(ft) !== Pa && c("toggle-row", ft);
          }
          H.value = I;
          return;
        }
      }
      c("toggle-row", I), H.value = I;
    }
    const ae = y(
      () => a.rows.map((G) => E(G)).filter((G) => G !== null)
    ), te = y(
      () => ae.value.length > 0 && ae.value.every((G) => a.selected?.has(G))
    ), Y = y(
      () => !te.value && ae.value.some((G) => a.selected?.has(G))
    );
    function Z(G) {
      return G.sortKey ?? G.key;
    }
    function B(G) {
      return a.sort === Z(G);
    }
    async function N(G, D, I) {
      try {
        await navigator.clipboard.writeText(String(I)), _.value = `${G}-${D.key}`, setTimeout(() => _.value = null, 1200);
      } catch {
      }
    }
    const L = y(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function Q(G) {
      return a.summaries?.[G] ?? null;
    }
    function fe(G) {
      const D = a.summaries?.[G], I = a.summaryValues?.[G];
      if (!D)
        return "";
      if (I == null)
        return "None";
      const oe = D.divideBy ? I / D.divideBy : I, re = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: D.decimals,
        maximumFractionDigits: D.decimals
      }).format(oe);
      return `${D.prefix ?? ""}${re}${D.suffix ?? ""}`;
    }
    return (G, D) => (t(), n("div", {
      class: z(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", Hn, [
        o("thead", Kn, [
          o("tr", qn, [
            e.reordering ? (t(), n("th", Gn)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Wn, [
              o("input", {
                id: `${x(A)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: te.value,
                indeterminate: Y.value,
                "aria-label": "Select all rows on this page",
                onClick: D[0] || (D[0] = me(() => {
                }, ["stop"])),
                onChange: D[1] || (D[1] = me((I) => c("toggle-page", !te.value), ["stop"]))
              }, null, 40, Zn)
            ])) : w("", !0),
            (t(!0), n(P, null, V(R.value, (I) => (t(), n("th", {
              key: I.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              I.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (oe) => c("sort", Z(I))
              }, [
                U(f(I.label) + " ", 1),
                B(I) ? (t(), n("span", Yn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Qn, "↕"))
              ], 8, Jn)) : (t(), n("span", Xn, f(I.label), 1))
            ]))), 128)),
            G.$slots.actions ? (t(), n("th", el, [...D[2] || (D[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : w("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", tl, [
          (t(), n(P, null, V(6, (I) => o("tr", {
            key: `skel-${I}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", al, [
              F(we, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("td", nl, [
              F(we, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : w("", !0),
            (t(!0), n(P, null, V(R.value, (oe) => (t(), n("td", {
              key: oe.key,
              class: "px-3 py-2.5"
            }, [
              F(we, { variant: "text" })
            ]))), 128)),
            G.$slots.actions ? (t(), n("td", ll, [
              F(we, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : w("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(P, null, V(e.rows, (I, oe) => (t(), n(P, {
            key: E(I) ?? `row-${oe}`
          }, [
            e.groupBy && s(oe) ? (t(), n("tr", ol, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !m(r(I)),
                  dusk: `group-header-${r(I) || "none"}`,
                  onClick: (re) => g(r(I))
                }, [
                  o("span", il, f(m(r(I)) ? "▸" : "▾"), 1),
                  U(" " + f(i(I)), 1)
                ], 8, rl)) : (t(), n("span", dl, f(i(I)), 1))
              ], 8, sl)
            ])) : w("", !0),
            p(oe) ? (t(), n("tr", {
              key: 1,
              class: z(["group pk-row border-b transition-colors hover:bg-muted/50", [
                ee(I) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && oe % 2 === 1 ? "bg-muted/20" : "",
                b.value === oe ? "opacity-40" : "",
                S(oe),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (re) => $(oe, re),
              onDragover: (re) => h(oe, re),
              onDrop: me((re) => v(oe), ["prevent"]),
              onDragend: k,
              onContextmenu: (re) => c("row-contextmenu", I, re),
              onClick: (re) => M(I, re)
            }, [
              e.reordering ? (t(), n("td", cl, [...D[3] || (D[3] = [
                Bt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-4ec66d95><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4ec66d95><circle cx="9" cy="6" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="6" r="1.5" data-v-4ec66d95></circle><circle cx="9" cy="12" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="12" r="1.5" data-v-4ec66d95></circle><circle cx="9" cy="18" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="18" r="1.5" data-v-4ec66d95></circle></svg></span>', 1)
              ])])) : w("", !0),
              e.selectable && !e.reordering ? (t(), n("td", fl, [
                o("input", {
                  id: `${x(A)}-row-${E(I) ?? oe}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: E(I) ?? void 0,
                  checked: ee(I),
                  disabled: E(I) === null,
                  "aria-label": E(I) === null ? "This row has no id and cannot be selected" : `Select row ${E(I)}`,
                  onClick: me((re) => J(I, re), ["stop"])
                }, null, 8, ml)
              ])) : w("", !0),
              (t(!0), n(P, null, V(R.value, (re) => (t(), n("td", {
                key: re.key,
                class: z(["px-3 py-2 whitespace-nowrap", re.cellClass])
              }, [
                K(G.$slots, `cell:${re.key}`, {
                  row: I,
                  value: I[re.key],
                  column: re
                }, () => [
                  re.copyable ? (t(), n("span", pl, [
                    U(f(I[re.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${re.label.toLowerCase()}`,
                      onClick: (at) => N(String(I[e.rowKey]), re, I[re.key])
                    }, [
                      o("span", gl, f(_.value === `${I[e.rowKey]}-${re.key}` ? "✓" : "⧉"), 1)
                    ], 8, vl)
                  ])) : I[re.key] == null || I[re.key] === "" ? (t(), n("span", hl, "None")) : (t(), n("span", bl, f(I[re.key]), 1))
                ], !0)
              ], 2))), 128)),
              G.$slots.actions ? (t(), n("td", xl, [
                K(G.$slots, "actions", { row: I }, void 0, !0)
              ])) : w("", !0)
            ], 42, ul)) : w("", !0)
          ], 64))), 128))
        ], 2)),
        L.value ? (t(), n("tfoot", yl, [
          o("tr", null, [
            e.selectable ? (t(), n("td", kl)) : w("", !0),
            (t(!0), n(P, null, V(e.columns, (I) => (t(), n(P, {
              key: `s-${I.key}`
            }, [
              e.hidden?.has(I.key) ? w("", !0) : (t(), n("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", I.cellClass])
              }, [
                Q(I.key) ? (t(), n(P, { key: 0 }, [
                  o("span", $l, f(Q(I.key).label), 1),
                  o("span", wl, f(fe(I.key)), 1)
                ], 64)) : w("", !0)
              ], 2))
            ], 64))), 128)),
            G.$slots.actions ? (t(), n("td", Cl)) : w("", !0)
          ])
        ])) : w("", !0)
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
            K(G.$slots, "clear-filters", {}, void 0, !0)
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
            K(G.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : w("", !0)
    ], 2));
  }
}), Lt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, Ml = /* @__PURE__ */ Lt(Sl, [["__scopeId", "data-v-4ec66d95"]]), Bl = ["aria-label"], _l = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, Al = { class: "text-base font-semibold" }, Pl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, zl = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, Ol = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, Ye = /* @__PURE__ */ O({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(null);
    let i = null;
    const d = q(!1);
    function u(p) {
      d.value = p.target === p.currentTarget;
    }
    function m(p) {
      d.value && p.target === p.currentTarget && !a.busy && r("close"), d.value = !1;
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
      const b = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (b.length === 0)
        return;
      const C = b[0], $ = b[b.length - 1];
      p.shiftKey && document.activeElement === C ? (p.preventDefault(), $.focus()) : !p.shiftKey && document.activeElement === $ && (p.preventDefault(), C.focus());
    }
    return ue(
      () => a.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", g), Ae(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", g), i?.focus(), i = null);
      }
    ), ge(() => document.removeEventListener("keydown", g)), (p, b) => (t(), T(Ue, { to: "body" }, [
      F(Ve, {
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
            onPointerup: m
          }, [
            o("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground flex w-full max-w-lg max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl"
            }, [
              o("div", _l, [
                o("h2", Al, f(e.title), 1),
                e.description ? (t(), n("p", Pl, f(e.description), 1)) : w("", !0)
              ]),
              o("div", zl, [
                K(p.$slots, "default")
              ]),
              o("div", Ol, [
                K(p.$slots, "footer")
              ])
            ], 8, Bl)
          ], 32)) : w("", !0)
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
  setup(e, { expose: l }) {
    const a = e, r = q(!1), s = q(null), i = q(null), d = q({ top: 0, left: 0, minWidth: 0 }), u = q(null);
    let m = null;
    function g(M) {
      !a.dismissOnPanelClick || M.target?.closest("input, select, textarea, label, [data-keep-open]") || k();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await Ae(), S());
    }
    function b() {
      m = setTimeout(k, 180);
    }
    async function C() {
      u.value = null, r.value = !r.value, r.value && (await Ae(), S());
    }
    async function $(M, _) {
      u.value = { x: M, y: _ }, r.value = !0, await Ae(), S();
    }
    function k() {
      r.value = !1, u.value = null;
    }
    function S() {
      const M = s.value, _ = i.value;
      if (!M || !_)
        return;
      const A = _.getBoundingClientRect(), R = 8, E = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : M.getBoundingClientRect();
      let ee, H;
      if (a.placement === "bottom")
        ee = E.bottom + a.offset, ee + A.height > window.innerHeight - R && E.top - A.height - a.offset > R && (ee = E.top - A.height - a.offset), H = a.align === "end" && !u.value ? E.right - A.width : E.left;
      else {
        ee = E.top;
        const W = a.placement === "right", J = E.right + a.offset + A.width < window.innerWidth - R, ae = E.left - a.offset - A.width > R;
        H = (W ? J || !ae : !ae && J) ? E.right + a.offset : E.left - a.offset - A.width;
      }
      H = Math.min(Math.max(R, H), window.innerWidth - A.width - R), ee = Math.min(Math.max(R, ee), window.innerHeight - A.height - R), d.value = { top: ee, left: H, minWidth: Math.max(E.width, jl) };
    }
    function h(M) {
      if (!r.value)
        return;
      const _ = M.target;
      s.value?.contains(_) || i.value?.contains(_) || (_ instanceof Element ? _ : _.parentElement)?.closest("[data-pk-overlay]") || k();
    }
    function v(M) {
      M.key === "Escape" && r.value && (M.stopPropagation(), k());
    }
    function c() {
      if (r.value) {
        if (u.value) {
          k();
          return;
        }
        S();
      }
    }
    return pe(() => {
      document.addEventListener("pointerdown", h), document.addEventListener("keydown", v), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), ge(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", h), document.removeEventListener("keydown", v), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), l({ close: k, openAt: $ }), (M, _) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: _[2] || (_[2] = (A) => e.hoverable && p()),
      onPointerleave: _[3] || (_[3] = (A) => e.hoverable && b())
    }, [
      o("div", { onClick: C }, [
        K(M.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Ue, { to: "body" }, [
        F(Ve, {
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
              onPointerenter: _[0] || (_[0] = (A) => e.hoverable && p()),
              onPointerleave: _[1] || (_[1] = (A) => e.hoverable && b()),
              onClick: g
            }, [
              K(M.$slots, "panel", { close: k })
            ], 38)) : w("", !0)
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
}, Fl = ["d"], El = ["disabled"], Il = {
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
}, Kl = ["d"], ql = { class: "text-muted-foreground text-sm" }, Gl = { class: "text-foreground font-medium tabular-nums" }, Wl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Zl = ["disabled"], Jl = { class: "text-muted-foreground text-sm" }, Yl = { class: "text-foreground font-medium tabular-nums" }, Ql = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Xl = ["disabled"], Uw = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(null), i = q(!1), d = y(() => a.allMatching ? a.total : a.count), u = y(() => d.value !== void 0), m = y(() => u.value && d.value === 0), g = y(() => a.actions.filter((v) => !v.destructive)), p = y(() => a.actions.filter((v) => v.destructive)), b = {
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
    function $(v) {
      if (v.confirmation) {
        s.value = v;
        return;
      }
      r("run", v.key);
    }
    function k() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function S() {
      i.value = !1, r("export");
    }
    const h = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), n(P, null, [
      F(Ne, null, {
        trigger: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...c[5] || (c[5] = [
            U(" Bulk actions ", -1),
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
          ])], 8, Ll)
        ]),
        panel: j(() => [
          o("div", Vl, [
            (t(!0), n(P, null, V(g.value, (M) => (t(), n("button", {
              key: M.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(M)]),
              disabled: e.busy,
              onClick: (_) => $(M)
            }, [
              (t(), n("svg", Dl, [
                o("path", {
                  d: x(ie)(M.icon)
                }, null, 8, Fl)
              ])),
              U(" " + f(M.label), 1)
            ], 10, Tl))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (M) => i.value = !0)
            }, [
              (t(), n("svg", Il, [
                o("path", {
                  d: x(ie)("download")
                }, null, 8, Nl)
              ])),
              c[6] || (c[6] = U(" Export CSV ", -1))
            ], 8, El)) : w("", !0),
            p.value.length ? (t(), n("div", Rl, [
              (t(!0), n(P, null, V(p.value, (M) => (t(), n("button", {
                key: M.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (_) => $(M)
              }, [
                (t(), n("svg", Hl, [
                  o("path", {
                    d: x(ie)(M.icon ?? "trash")
                  }, null, 8, Kl)
                ])),
                U(" " + f(M.label), 1)
              ], 8, Ul))), 128))
            ])) : w("", !0)
          ])
        ]),
        _: 1
      }),
      F(Ye, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: c[2] || (c[2] = (M) => s.value = null)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[1] || (c[1] = (M) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: z([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || m.value,
            onClick: k
          }, f(s.value?.label), 11, Zl)
        ]),
        default: j(() => [
          o("p", ql, [
            c[7] || (c[7] = U(" This will affect ", -1)),
            o("span", Gl, [
              u.value ? (t(), n(P, { key: 1 }, [
                U(f(h(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[8] || (c[8] = U(" . ", -1))
          ]),
          m.value ? (t(), n("p", Wl, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      F(Ye, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: c[4] || (c[4] = (M) => i.value = !1)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[3] || (c[3] = (M) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || m.value,
            onClick: S
          }, " Export CSV ", 8, Xl)
        ]),
        default: j(() => [
          o("p", Jl, [
            c[9] || (c[9] = U(" This will export ", -1)),
            o("span", Yl, [
              u.value ? (t(), n(P, { key: 1 }, [
                U(f(h(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[10] || (c[10] = U(" . ", -1))
          ]),
          m.value ? (t(), n("p", Ql, " Nothing matches the current filters - there is nothing to export. ")) : w("", !0)
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
    return (l, a) => (t(), n("div", eo, [
      l.$slots.tabs ? (t(), n("div", to, [
        K(l.$slots, "tabs")
      ])) : w("", !0),
      l.$slots.title ? (t(), n("div", ao, [
        K(l.$slots, "title")
      ])) : w("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        K(l.$slots, "toolbar")
      ], 2)) : w("", !0),
      K(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", no, [
        K(l.$slots, "pagination")
      ])) : w("", !0)
    ]));
  }
}), Be = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Kt = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", Hw = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", oo = ["aria-expanded"], so = ["aria-label", "onClick"], ro = {
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(null), i = q(null), d = q(null), u = q(!1), m = q(""), g = q(0), p = q({ top: 0, left: 0, width: 0 }), b = y(
      () => a.modelValue.map(
        (H) => a.options.find((W) => W.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = y(() => a.searchable ?? a.options.length > 6), $ = y(() => {
      const H = new Set(a.modelValue), W = m.value.trim().toLowerCase();
      return a.options.filter((J) => !H.has(J.value)).filter((J) => W ? J.label.toLowerCase().includes(W) : !0);
    }), k = y(() => a.max !== null && a.modelValue.length >= a.max);
    function S() {
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
    async function h() {
      a.disabled || u.value || (u.value = !0, m.value = "", g.value = 0, await Ae(), S(), d.value?.focus());
    }
    function v() {
      u.value = !1, m.value = "";
    }
    function c() {
      u.value ? v() : h();
    }
    function M(H) {
      k.value || (r("update:modelValue", [...a.modelValue, H.value]), m.value = "", g.value = 0, Ae(() => {
        S(), d.value?.focus();
      }));
    }
    function _(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((W) => W !== H)
      ), Ae(S);
    }
    function A() {
      r("update:modelValue", []), Ae(S);
    }
    function R(H) {
      if (!a.disabled) {
        if (H.key === "Escape" && u.value) {
          H.stopPropagation(), v();
          return;
        }
        if (H.key === "Backspace" && m.value === "" && a.modelValue.length > 0) {
          _(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), h();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), g.value = Math.min(g.value + 1, $.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), g.value = Math.max(g.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const W = $.value[g.value];
            W && M(W);
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
      u.value && S();
    }
    return ue($, (H) => {
      g.value > H.length - 1 && (g.value = Math.max(0, H.length - 1));
    }), pe(() => {
      document.addEventListener("pointerdown", E), window.addEventListener("scroll", ee, !0), window.addEventListener("resize", ee);
    }), ge(() => {
      document.removeEventListener("pointerdown", E), window.removeEventListener("scroll", ee, !0), window.removeEventListener("resize", ee);
    }), (H, W) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: R
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
        onClick: c
      }, [
        (t(!0), n(P, null, V(b.value, (J) => (t(), n("span", {
          key: J.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          U(f(J.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${J.label}`,
            onClick: me((ae) => _(J.value), ["stop"])
          }, [...W[1] || (W[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, so)
        ]))), 128)),
        b.value.length === 0 ? (t(), n("span", ro, f(e.placeholder), 1)) : w("", !0),
        o("span", io, [
          b.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: me(A, ["stop"])
          }, " Clear ")) : w("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...W[2] || (W[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, oo),
      (t(), T(Ue, { to: "body" }, [
        F(Ve, {
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
              style: ne({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              C.value ? (t(), n("div", uo, [
                ce(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": W[0] || (W[0] = (J) => m.value = J),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: R
                }, null, 40, co), [
                  [ke, m.value]
                ])
              ])) : w("", !0),
              o("div", fo, [
                (t(!0), n(P, null, V($.value, (J, ae) => (t(), n("button", {
                  key: J.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ae === g.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ae === g.value,
                  onMouseenter: (te) => g.value = ae,
                  onClick: (te) => M(J)
                }, f(J.label), 43, mo))), 128)),
                $.value.length === 0 ? (t(), n("p", po, [
                  k.value ? (t(), n(P, { key: 0 }, [
                    U("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), n(P, { key: 1 }, [
                    U("Nothing matches “" + f(m.value) + "”.", 1)
                  ], 64)) : (t(), n(P, { key: 2 }, [
                    U("Everything is selected.")
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
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [vo, go[l], ho[a], e.class].filter(Boolean).join(" ");
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
    const l = e, a = y(
      () => Ge({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(ye(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: z(a.value)
    }, {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), bo = { class: "flex items-center gap-2" }, xo = ["onUpdate:modelValue", "onChange"], yo = ["value"], ko = ["onUpdate:modelValue"], $o = ["value"], wo = ["onUpdate:modelValue"], Co = ["onUpdate:modelValue", "multiple"], So = ["value"], Mo = ["onUpdate:modelValue", "type"], Bo = ["aria-label", "onClick"], _o = { class: "flex items-center gap-2" }, Ao = /* @__PURE__ */ O({
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
    const a = e, r = l, s = () => ({ logic: "and", rules: [] }), i = q(a.modelValue ? structuredClone(a.modelValue) : s());
    ue(
      () => a.modelValue,
      (c) => {
        i.value = c ? structuredClone(c) : s();
      }
    );
    const d = (c) => "rules" in c, u = y(() => Object.keys(a.fields));
    function m(c) {
      const M = c ? a.fields[c]?.kind : void 0;
      return M ? a.operators[M] ?? [] : [];
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
      const c = u.value[0];
      i.value.rules.push({
        field: c,
        operator: m(c)[0],
        value: void 0
      }), p();
    }
    function C() {
      i.value.rules.push(s()), p();
    }
    function $(c) {
      i.value.rules.splice(c, 1), p();
    }
    function k(c) {
      c.operator = m(c.field)[0], c.value = void 0, p();
    }
    const S = y(() => a.depth + 1 < a.maxDepth);
    function h() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, M) => {
      const _ = _t("PkQueryBuilder", !0);
      return t(), n("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", bo, [
          ce(o("select", {
            "onUpdate:modelValue": M[0] || (M[0] = (A) => i.value.logic = A),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...M[1] || (M[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ee, i.value.logic]
          ]),
          M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(P, null, V(i.value.rules, (A, R) => (t(), n("div", {
          key: R,
          class: "flex items-start gap-2"
        }, [
          d(A) ? (t(), T(_, {
            key: 0,
            modelValue: i.value.rules[R],
            "onUpdate:modelValue": [(E) => i.value.rules[R] = E, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(P, { key: 1 }, [
            ce(o("select", {
              "onUpdate:modelValue": (E) => A.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => k(A)
            }, [
              (t(!0), n(P, null, V(u.value, (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, yo))), 128))
            ], 40, xo), [
              [Ee, A.field]
            ]),
            ce(o("select", {
              "onUpdate:modelValue": (E) => A.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(P, null, V(m(A.field), (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(g[E] ?? E), 9, $o))), 128))
            ], 40, ko), [
              [Ee, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? ce((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (E) => A.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...M[3] || (M[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, wo)), [
              [Ee, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? ce((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (E) => A.value = E,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(P, null, V(e.fields[A.field].options, (E) => (t(), n("option", {
                key: E,
                value: E
              }, f(E), 9, So))), 128))
            ], 40, Co)), [
              [Ee, A.value]
            ]) : ce((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (E) => A.value = E,
              type: A.field && e.fields[A.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Mo)), [
              [Oa, A.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(A) ? "group" : "rule"}`,
            onClick: (E) => $(R)
          }, " × ", 8, Bo)
        ]))), 128)),
        o("div", _o, [
          F(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: b
          }, {
            default: j(() => [...M[4] || (M[4] = [
              U("Add rule", -1)
            ])]),
            _: 1
          }),
          S.value ? (t(), T(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: C
          }, {
            default: j(() => [...M[5] || (M[5] = [
              U(" Add group ", -1)
            ])]),
            _: 1
          })) : w("", !0),
          e.root ? (t(), n(P, { key: 1 }, [
            M[8] || (M[8] = o("span", { class: "flex-1" }, null, -1)),
            F(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: j(() => [...M[6] || (M[6] = [
                U(" Clear ", -1)
              ])]),
              _: 1
            }),
            F(se, {
              type: "button",
              size: "sm",
              onClick: v
            }, {
              default: j(() => [...M[7] || (M[7] = [
                U(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : w("", !0)
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
  setup(e, { emit: l }) {
    const s = ve(e, l);
    return (i, d) => (t(), T(x(na), le({ "data-slot": "sheet" }, x(s)), {
      default: j((u) => [
        K(i.$slots, "default", Ce(je(u)))
      ]),
      _: 3
    }, 16));
  }
});
function X(...e) {
  return Tn(Vn(e));
}
function Kw(e) {
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
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x(At), le({
      "data-slot": "sheet-overlay",
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, x(a)), {
      default: j(() => [
        K(r.$slots, "default")
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = de(a, "class", "side"), i = ve(s, r);
    return (d, u) => (t(), T(x(Pt), null, {
      default: j(() => [
        F(Po),
        F(x(zt), le({
          "data-slot": "sheet-content",
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...x(i) }), {
          default: j(() => [
            K(d.$slots, "default"),
            F(x(He), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                F(x(Ot), { class: "size-4" }),
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
}), zo = { class: "flex flex-col gap-2" }, Oo = { class: "flex items-center gap-2 md:hidden" }, jo = { class: "relative min-w-0 flex-1" }, Lo = ["placeholder", "title", "aria-label"], Vo = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, To = { class: "flex max-h-[85vh] flex-col" }, Do = { class: "flex-1 overflow-y-auto px-4 py-3" }, Fo = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Eo = { class: "text-xs font-medium" }, Io = ["value", "onChange"], No = ["value"], Ro = { class: "mb-4" }, Uo = { class: "flex flex-col gap-1" }, Ho = ["disabled", "onClick"], Ko = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, qo = {
  key: 1,
  class: "mb-4"
}, Go = { class: "flex flex-col gap-1" }, Wo = ["onClick"], Zo = { class: "border-t p-4" }, Jo = ["disabled"], Yo = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Qo = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Xo = ["placeholder", "title", "aria-label"], es = ["aria-label"], ts = {
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
}, ws = ["aria-pressed", "aria-label", "title"], Cs = ["aria-label", "title"], Ss = { class: "flex flex-col gap-0.5 p-1" }, Ms = ["onClick"], Bs = ["onClick"], _s = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, As = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Ps = ["dusk"], zs = ["aria-label", "onClick"], Os = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(!1), i = q(a.search);
    ue(
      () => a.search,
      (Z) => {
        Z !== i.value && (i.value = Z);
      }
    );
    let d;
    ue(i, (Z) => {
      clearTimeout(d), d = setTimeout(() => {
        Z !== a.search && r("update:search", Z);
      }, 250);
    });
    const u = q({ ...a.filters });
    ue(
      () => a.filters,
      (Z) => {
        u.value = { ...Z };
      },
      { deep: !0 }
    );
    const m = y(
      () => a.filterSchema.filter(
        (Z) => a.filters[Z.key] !== null && a.filters[Z.key] !== void 0
      ).length
    ), g = y(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), p = y(() => a.search !== "" || m.value > 0), b = y(() => a.indicators.length ? a.indicators : a.filterSchema.filter((Z) => a.filters[Z.key] !== null && a.filters[Z.key] !== void 0).map((Z) => ({
      key: Z.key,
      label: `${Z.label}: ${String(a.filters[Z.key])}`,
      removable: !0
    })));
    function C(Z) {
      r("group", Z);
    }
    function $(Z) {
      r("clear-filter", Z);
    }
    function k(Z) {
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
      return H(Z).flatMap(
        (B) => typeof B.value == "string" || typeof B.value == "number" ? [{ value: B.value, label: B.label }] : []
      );
    }
    function c(Z, B) {
      u.value = { ...u.value, [Z.key]: B === "" ? null : B };
    }
    function M(Z, B) {
      const N = u.value[Z.key];
      if (typeof N != "string" || !N.includes(".."))
        return "";
      const [L, Q] = N.split("..");
      return B === "from" ? L ?? "" : Q ?? "";
    }
    function _(Z, B, N) {
      const L = B === "from" ? N : M(Z, "from"), Q = B === "to" ? N : M(Z, "to");
      u.value = {
        ...u.value,
        [Z.key]: L && Q ? `${L}..${Q}` : null
      };
    }
    function A(Z, B, N) {
      const L = B === "from" ? N : M(Z, "from"), Q = B === "to" ? N : M(Z, "to");
      u.value = {
        ...u.value,
        [Z.key]: L || Q ? `${L}..${Q}` : null
      };
    }
    function R(Z) {
      r("apply-filters", { ...u.value }), Z();
    }
    function E(Z, B) {
      u.value[Z] = B, r("apply-filters", { ...u.value });
    }
    function ee() {
      u.value = Object.fromEntries(a.filterSchema.map((Z) => [Z.key, null]));
    }
    function H(Z) {
      return Z.type === "boolean" ? [
        { value: !0, label: Z.trueLabel ?? "Yes" },
        { value: !1, label: Z.falseLabel ?? "No" }
      ] : Z.type === "daterange" ? Object.entries(Z.presets ?? {}).map(([B, N]) => ({
        value: B,
        label: N
      })) : (Z.options ?? []).map(
        (B) => typeof B == "object" && B !== null && "value" in B ? { value: B.value, label: B.label } : { value: B, label: String(B) }
      );
    }
    const W = q(new Set(a.hidden));
    ue(
      () => a.hidden,
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
    return (Z, B) => (t(), n("div", zo, [
      o("div", Oo, [
        o("div", jo, [
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
          ce(o("input", {
            "onUpdate:modelValue": B[0] || (B[0] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Be)])
          }, null, 10, Lo), [
            [ke, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: B[1] || (B[1] = (N) => s.value = !0)
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
          B[11] || (B[11] = U(" Tools ", -1)),
          m.value ? (t(), n("span", Vo, f(m.value), 1)) : w("", !0)
        ]),
        F(Tt, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (N) => s.value = N)
        }, {
          default: j(() => [
            F(Dt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", To, [
                  B[16] || (B[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", Do, [
                    e.filterSchema.length ? (t(), n("div", Fo, [
                      o("div", { class: "flex items-center justify-between" }, [
                        B[12] || (B[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: ee
                        }, " Reset ")
                      ]),
                      (t(!0), n(P, null, V(e.filterSchema, (N) => (t(), n("div", {
                        key: `mobile-${N.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Eo, f(N.label), 1),
                        N.type !== "multiselect" && N.type !== "querybuilder" && N.type !== "daterange" && N.type !== "numberrange" && N.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[N.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (L) => c(N, L.target.value)
                        }, [
                          B[13] || (B[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(P, null, V(H(N), (L) => (t(), n("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, No))), 128))
                        ], 40, Io)) : w("", !0)
                      ]))), 128))
                    ])) : w("", !0),
                    o("div", Ro, [
                      B[14] || (B[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Uo, [
                        (t(!0), n(P, null, V(e.columns, (N) => (t(), n("button", {
                          key: `mobile-col-${N.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: N.locked,
                          onClick: (L) => J(N.key)
                        }, [
                          o("span", null, f(N.label), 1),
                          W.value.has(N.key) ? w("", !0) : (t(), n("span", Ko, "On"))
                        ], 8, Ho))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", qo, [
                      B[15] || (B[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Go, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: B[2] || (B[2] = (N) => {
                            C(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), n(P, null, V(e.groups, (N) => (t(), n("button", {
                          key: N.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (L) => {
                            C(N.key), s.value = !1;
                          }
                        }, f(N.label), 9, Wo))), 128))
                      ])
                    ])) : w("", !0)
                  ]),
                  o("div", Zo, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !g.value,
                      onClick: te
                    }, " Apply filters ", 8, Jo)) : w("", !0),
                    p.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: B[3] || (B[3] = (N) => {
                        Y(), s.value = !1;
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
      o("div", Yo, [
        o("div", Qo, [
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
          ce(o("input", {
            "onUpdate:modelValue": B[5] || (B[5] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Be)])
          }, null, 10, Xo), [
            [ke, i.value]
          ]),
          i.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: B[6] || (B[6] = (N) => i.value = "")
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
        e.filterSchema.length ? (t(), T(Ne, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: j(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", m.value ? "border-primary text-primary" : ""]),
              "aria-label": m.value ? `Filters (${m.value} active)` : "Filters",
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
              m.value ? (t(), n("span", ts, f(m.value), 1)) : w("", !0)
            ], 10, es)
          ]),
          panel: j(({ close: N }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              B[20] || (B[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: ee
              }, " Reset ")
            ]),
            B[23] || (B[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", as, [
              (t(!0), n(P, null, V(e.filterSchema, (L) => (t(), n("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", ns, f(L.label), 1),
                k(L) ? (t(), T(Vt, {
                  key: 0,
                  "model-value": h(L),
                  options: v(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Q) => u.value[L.key] = Q.length ? Q : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(Ao, {
                  key: 1,
                  "model-value": u.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (Q) => E(L.key, Q)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), n(P, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[L.key] == "string" && !String(u.value[L.key]).includes("..") ? u.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Q) => c(L, Q.target.value)
                  }, [
                    B[21] || (B[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(P, null, V(H(L), (Q) => (t(), n("option", {
                      key: String(Q.value),
                      value: Q.value
                    }, f(Q.label), 9, os))), 128))
                  ], 40, ls),
                  o("div", ss, [
                    o("input", {
                      type: "date",
                      value: M(L, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Q) => _(
                        L,
                        "from",
                        Q.target.value
                      )
                    }, null, 40, rs),
                    o("input", {
                      type: "date",
                      value: M(L, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Q) => _(
                        L,
                        "to",
                        Q.target.value
                      )
                    }, null, 40, is)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), n("div", ds, [
                  o("input", {
                    type: "number",
                    value: M(L, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Q) => A(
                      L,
                      "from",
                      Q.target.value
                    )
                  }, null, 40, us),
                  o("input", {
                    type: "number",
                    value: M(L, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Q) => A(
                      L,
                      "to",
                      Q.target.value
                    )
                  }, null, 40, cs)
                ])) : L.type === "boolean" ? (t(), n("div", fs, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[L.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Q) => c(L, u.value[L.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, ms),
                  o("span", ps, f(L.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Q) => c(L, u.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, vs)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Q) => c(L, Q.target.value)
                }, [
                  B[22] || (B[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(P, null, V(H(L), (Q) => (t(), n("option", {
                    key: String(Q.value),
                    value: Q.value
                  }, f(Q.label), 9, hs))), 128))
                ], 40, gs))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !g.value,
              onClick: (L) => R(N)
            }, " Apply filters ", 8, bs)
          ]),
          _: 1
        })) : w("", !0),
        F(Ne, { "dismiss-on-panel-click": !1 }, {
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
            o("div", xs, [
              (t(!0), n(P, null, V(e.columns, (N) => (t(), n("button", {
                key: N.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: N.locked,
                onClick: (L) => J(N.key)
              }, [
                W.value.has(N.key) ? (t(), n("span", $s)) : (t(), n("svg", ks, [...B[25] || (B[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                U(" " + f(N.label), 1)
              ], 10, ys))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: ae
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
                U(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.reorderable ? (t(), n("button", {
          key: 1,
          type: "button",
          class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: B[7] || (B[7] = (N) => r("toggle-reorder"))
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
        ])], 10, ws)) : w("", !0),
        e.groups.length ? (t(), T(Ne, {
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
            ])], 10, Cs)
          ]),
          panel: j(({ close: N }) => [
            o("div", Ss, [
              o("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  C(null), N();
                }
              }, " No grouping ", 10, Ms),
              (t(!0), n(P, null, V(e.groups, (L) => (t(), n("button", {
                key: L.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (Q) => {
                  C(L.key), N();
                }
              }, f(L.label), 11, Bs))), 128))
            ])
          ]),
          _: 1
        })) : w("", !0),
        p.value ? (t(), n("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: Y
        }, " Clear ")) : w("", !0),
        e.loading ? (t(), n("span", _s, "Loading…")) : w("", !0)
      ]),
      b.value.length ? (t(), n("div", As, [
        (t(!0), n(P, null, V(b.value, (N) => (t(), n("span", {
          key: N.key + N.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${N.key}`
        }, [
          U(f(N.label) + " ", 1),
          N.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${N.label}`,
            onClick: (L) => $(N.key)
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
          ])], 8, zs)) : w("", !0)
        ], 8, Ps))), 128)),
        b.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: B[8] || (B[8] = (N) => r("clear-filters"))
        }, " Clear all ")) : w("", !0)
      ])) : w("", !0)
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
}, Fs = { class: "w-full border-collapse text-sm" }, Es = { class: "bg-muted/40" }, Is = { class: "divide-y" }, Ns = ["href"], Rs = {
  key: 1,
  class: "text-muted-foreground"
}, Us = {
  key: 0,
  class: "flex justify-center"
}, Hs = ["disabled"], Ks = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, qs = ["href"], qw = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Mt(), i = y(() => a.columns.filter((C) => C.type !== "image")), d = y(() => !!s.actions), u = y(() => !!a.title || d.value), m = y(() => a.filterSchema.length > 0), g = y(
      () => a.columns.map((C) => ({ key: C.key, label: C.label, locked: !0 }))
    );
    function p(C, $) {
      return $ == null || $ === "" ? "None" : C.type === "date" || C.type === "datetime" ? new Date(String($)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...C.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof $ == "number" ? new Intl.NumberFormat().format($) : String($);
    }
    function b(C) {
      return C == null || C === "";
    }
    return (C, $) => (t(), T(lo, null, Ze({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", Ts, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(yt, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, Ze({ _: 2 }, [
          C.$slots.illustration ? {
            name: "illustration",
            fn: j(() => [
              K(C.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          C.$slots["empty-actions"] ? {
            name: "actions",
            fn: j(() => [
              K(C.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", Ds, [
          o("table", Fs, [
            o("thead", Es, [
              o("tr", null, [
                (t(!0), n(P, null, V(i.value, (k) => (t(), n("th", {
                  key: k.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f(k.label), 1))), 128))
              ])
            ]),
            o("tbody", Is, [
              (t(!0), n(P, null, V(e.rows, (k, S) => (t(), n("tr", {
                key: k.id ?? S,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(P, null, V(i.value, (h) => (t(), n("td", {
                  key: h.key,
                  class: z(["px-3 whitespace-nowrap", [
                    h.mono ? "font-mono text-xs" : "",
                    h.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  K(C.$slots, `cell:${h.key}`, {
                    row: k,
                    value: k[h.key],
                    column: h
                  }, () => [
                    e.recordBase && k.id != null && h === i.value[0] ? (t(), n("a", {
                      key: 0,
                      href: `${e.recordBase}/${k.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, f(p(h, k[h.key])), 9, Ns)) : b(k[h.key]) ? (t(), n("span", Rs, " None ")) : (t(), n(P, { key: 2 }, [
                      U(f(p(h, k[h.key])), 1)
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
        fn: j(() => [
          o("div", js, [
            e.title ? (t(), n("h3", Ls, f(e.title), 1)) : w("", !0)
          ]),
          d.value ? (t(), n("div", Vs, [
            K(C.$slots, "actions")
          ])) : w("", !0)
        ]),
        key: "0"
      } : void 0,
      m.value ? {
        name: "toolbar",
        fn: j(() => [
          F(Os, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: g.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": $[0] || ($[0] = (k) => r("update:search", k)),
            onApplyFilters: $[1] || ($[1] = (k) => r("apply-filters", k)),
            onClearFilters: $[2] || ($[2] = (k) => r("clear-filters")),
            onClearFilter: $[3] || ($[3] = (k) => r("clear-filter", k)),
            onClear: $[4] || ($[4] = (k) => r("clear-filters")),
            onApplyColumns: $[5] || ($[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: j(() => [
          e.nextCursor ? (t(), n("div", Us, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: $[6] || ($[6] = (k) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, Hs)
          ])) : e.capped ? (t(), n("p", Ks, [
            U(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, qs)) : (t(), n(P, { key: 1 }, [
              U("Open the full list to search or filter the rest.")
            ], 64))
          ])) : w("", !0)
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
}, Qs = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Xs = {
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
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(m) {
      return a.failedStep !== null && m === a.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : a.failedStep !== null && m > a.failedStep ? "" : m < a.activeStep ? "bg-primary text-primary-foreground border-primary" : m === a.activeStep ? "border-primary text-primary" : "";
    }
    function i(m) {
      if (a.failedStep !== null) {
        if (m === a.failedStep)
          return "text-destructive font-medium";
        if (m > a.failedStep)
          return "text-muted-foreground/60";
      }
      return m === a.activeStep ? "text-foreground font-medium" : m < a.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(m) {
      return a.failedStep !== null ? m < a.failedStep : m < a.activeStep;
    }
    function u(m) {
      return a.failedStep === m;
    }
    return (m, g) => (t(), n("ol", Gs, [
      (t(!0), n(P, null, V(e.steps, (p, b) => (t(), n("li", {
        key: b,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(ye(e.interactive ? "button" : "div"), le({
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
              u(b) ? (t(), n("svg", Ws, [...g[0] || (g[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(b) ? (t(), n("svg", Zs, [...g[1] || (g[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(P, { key: 2 }, [
                U(f(b + 1), 1)
              ], 64))
            ], 2),
            o("span", Js, [
              o("span", null, f(p.label), 1),
              p.description ? (t(), n("span", Ys, f(p.description), 1)) : w("", !0)
            ]),
            e.hasError(b) ? (t(), n("span", Qs)) : w("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        b < e.steps.length - 1 ? (t(), n("span", Xs)) : w("", !0)
      ]))), 128))
    ]));
  }
}), Xe = /* @__PURE__ */ new Map();
function xe(e, l) {
  Xe.set(e, l);
}
function tr(e) {
  return Xe.get(e);
}
function Gw(e) {
  return Xe.has(e);
}
function Ww() {
  return [...Xe.keys()].sort();
}
function Zw() {
  Xe.clear();
}
class ar extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function Jw(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function nr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function lr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q({});
    ue(
      () => a.open,
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
        F(se, {
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
        F(se, {
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
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: me(i, ["prevent"])
        }, [
          e.generalError ? (t(), n("p", or, f(e.generalError), 1)) : w("", !0),
          (t(!0), n(P, null, V(e.fields, (m) => (t(), T(Re, {
            key: m.key,
            field: m,
            value: s.value[m.key],
            error: e.errors[m.key],
            processing: e.processing,
            onChange: (g) => s.value[m.key] = g
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Ea), le({ "data-slot": "checkbox" }, x(i), {
      class: x(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j((m) => [
        F(x(Ia), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            K(d.$slots, "default", Ce(je(m)), () => [
              F(x(da), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ie = /* @__PURE__ */ O({
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
    const a = e, r = l, s = ve(de(a, "class"), r);
    return (i, d) => (t(), T(x(Na), le({ "data-slot": "switch" }, x(s), {
      class: x(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j(() => [
        F(x(Ra), {
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(null), i = q(!1), d = q(null), u = q(null), m = q(null), g = y(() => a.accept.map((M) => `.${M}`).join(",")), p = y(() => m.value ?? a.modelValue?.url ?? null), b = y(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(M) {
      if (!M)
        return "";
      const _ = ["B", "KB", "MB", "GB"];
      let A = M, R = 0;
      for (; A >= 1024 && R < _.length - 1; )
        A /= 1024, R++;
      return `${A.toFixed(A < 10 && R > 0 ? 1 : 0)} ${_[R]}`;
    }
    function $(M) {
      return M.split(".").pop()?.toLowerCase() ?? "";
    }
    function k(M) {
      return a.accept.length && !a.accept.includes($(M.name)) ? `${$(M.name).toUpperCase() || "That"} files are not accepted here.` : M.size > a.maxKilobytes * 1024 ? `That file is ${C(M.size)}; the limit is ${C(a.maxKilobytes * 1024)}.` : null;
    }
    async function S(M) {
      const _ = M?.[0];
      if (!(!_ || a.disabled) && (u.value = k(_), !u.value)) {
        h(), a.image && _.type.startsWith("image/") && (m.value = URL.createObjectURL(_)), d.value = 0;
        try {
          const A = await a.upload(_, (R) => {
            d.value = R;
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
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function v() {
      const M = a.modelValue;
      h(), u.value = null, r("update:modelValue", null), M && !M.url && a.discard && await a.discard(M.value).catch(() => {
      });
    }
    function c(M) {
      i.value = !1, S(M.dataTransfer?.files ?? null);
    }
    return (M, _) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", pr, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, vr)) : (t(), n("span", gr, f($(e.modelValue.name) || "file"), 1)),
        o("span", hr, [
          o("span", br, f(e.modelValue.name), 1),
          o("span", xr, [
            U(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(P, { key: 0 }, [
              _[4] || (_[4] = U(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, yr)
            ], 64)) : (t(), n(P, { key: 1 }, [
              U(" · not saved yet")
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
        class: z(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: _[1] || (_[1] = me((A) => i.value = !0, ["prevent"])),
        onDragleave: _[2] || (_[2] = me((A) => i.value = !1, ["prevent"])),
        onDrop: me(c, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: g.value,
          disabled: e.disabled,
          onChange: _[0] || (_[0] = (A) => S(A.target.files))
        }, null, 40, ir),
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
        o("span", dr, [
          d.value === null ? (t(), n("span", ur, "Drop a file or click to choose")) : (t(), n("span", cr, "Uploading…"))
        ]),
        o("span", fr, f(b.value), 1),
        d.value !== null ? (t(), n("span", mr, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${d.value}%` })
          }, null, 4)
        ])) : w("", !0)
      ], 34)),
      u.value ? (t(), n("p", kr, f(u.value), 1)) : w("", !0)
    ]));
  }
}), $r = { class: "flex flex-col gap-2" }, wr = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Cr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Sr = { class: "flex flex-col gap-1" }, Mr = ["onUpdate:modelValue", "disabled", "aria-label"], Br = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, _r = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Ar = ["onUpdate:modelValue", "disabled", "aria-label"], Pr = ["disabled", "aria-label", "onClick"], zr = {
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const d = q(u(a.modelValue));
    function u(S) {
      return S ? Object.entries(S).map(([h, v]) => ({
        uid: i++,
        key: h,
        value: v ?? ""
      })) : [];
    }
    ue(
      () => a.modelValue,
      (S) => {
        JSON.stringify(S ?? null) !== JSON.stringify(m()) && (d.value = u(S));
      }
    );
    function m() {
      const S = {};
      for (const h of d.value) {
        const v = h.key.trim();
        v !== "" && (S[v] = h.value);
      }
      return Object.keys(S).length ? S : null;
    }
    function g() {
      r("update:modelValue", m());
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
    ), C = y(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function $() {
      C.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function k(S) {
      d.value = d.value.filter((h) => h.uid !== S), g();
    }
    return (S, h) => (t(), n("div", $r, [
      d.value.length ? (t(), n("div", wr, [
        o("div", Cr, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          h[0] || (h[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(P, null, V(d.value, (v) => (t(), n("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", Sr, [
            ce(o("input", {
              "onUpdate:modelValue": (c) => v.key = c,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || b.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: g
            }, null, 42, Mr), [
              [ke, v.key]
            ]),
            b.value.has(v.key.trim()) ? (t(), n("p", Br, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), n("p", _r, " Used twice - only the last value will be saved. ")) : w("", !0)
          ]),
          ce(o("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: g
          }, null, 40, Ar), [
            [ke, v.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (c) => k(v.uid)
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
          ])], 8, Pr)
        ]))), 128))
      ])) : (t(), n("p", zr, " Nothing here yet. ")),
      o("div", Or, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
          onClick: $
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
          U(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, jr),
        e.maxPairs !== null ? (t(), n("p", Lr, f(d.value.length) + " of " + f(e.maxPairs), 1)) : w("", !0)
      ])
    ]));
  }
}), Tr = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Dr = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Fr = ["disabled", "title", "aria-label", "onClick"], Er = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ir = ["d"], Nr = ["disabled"], Rr = ["contenteditable", "data-placeholder"], Ur = {
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(null);
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
    ], u = y(() => d.filter((k) => a.toolbar.includes(k.id))), m = y(() => a.toolbar.includes("link")), g = q(0);
    function p() {
      const k = s.value?.innerHTML ?? "", S = (s.value?.innerText ?? "").trim();
      g.value = S.length;
      const h = S === "" ? null : k;
      i = h, r("update:modelValue", h);
    }
    function b(k) {
      a.disabled || (s.value?.focus(), document.execCommand(k.command, !1, k.argument), p());
    }
    function C() {
      if (a.disabled)
        return;
      const k = window.prompt("Link address");
      k && (s.value?.focus(), document.execCommand("createLink", !1, k), p());
    }
    function $(k) {
      k.preventDefault();
      const S = k.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, S), p();
    }
    return pe(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", g.value = s.value.innerText.trim().length);
    }), ue(
      () => a.modelValue,
      (k) => {
        k !== i && s.value && (s.value.innerHTML = k ?? "", g.value = s.value.innerText.trim().length);
      }
    ), (k, S) => (t(), n("div", Tr, [
      o("div", Dr, [
        (t(!0), n(P, null, V(u.value, (h) => (t(), n("button", {
          key: h.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: h.label,
          "aria-label": h.label,
          onMousedown: S[0] || (S[0] = me(() => {
          }, ["prevent"])),
          onClick: (v) => b(h)
        }, [
          (t(), n("svg", Er, [
            o("path", {
              d: h.path
            }, null, 8, Ir)
          ]))
        ], 40, Fr))), 128)),
        m.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: S[1] || (S[1] = me(() => {
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
        ])], 40, Nr)) : w("", !0)
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
        onPaste: $
      }, null, 42, Rr),
      e.maxLength !== null ? (t(), n("div", Ur, f(g.value) + " / " + f(e.maxLength), 1)) : w("", !0)
    ]));
  }
}), Kr = /* @__PURE__ */ Lt(Hr, [["__scopeId", "data-v-32c63bc7"]]), qr = {
  key: 1,
  class: "flex flex-col gap-2"
}, Gr = { class: "flex items-center justify-between gap-2" }, Wr = ["for"], Zr = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Jr = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, Yr = ["aria-label", "disabled"], Qr = {
  key: 7,
  class: "flex flex-col gap-2"
}, Xr = ["id", "value", "disabled"], ei = ["value"], ti = {
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
}, Bi = ["aria-label", "disabled"], _i = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ai = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Pi = ["aria-label", "disabled"], zi = {
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
}, Fi = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Re = /* @__PURE__ */ O({
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
    const a = Ht(() => import("./PkRepeater-J84jGe3T.js")), r = Ht(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = q(!1), u = q(""), m = q([]), g = q(!1), p = q(null);
    let b;
    ue(u, (G) => {
      s.searchOptions && (clearTimeout(b), g.value = !0, b = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(G);
        } catch {
        } finally {
          g.value = !1;
        }
      }, 200));
    });
    async function C() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, m.value.length === 0 && s.searchOptions)) {
        g.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          g.value = !1;
        }
      }
    }
    function $(G) {
      p.value = G.label, i("change", G.value), d.value = !1, u.value = "";
    }
    function k() {
      p.value = null, i("change", null);
    }
    const S = lt("panelPicker", null), h = lt("panelCreateOption", null), v = q(!1), c = q(!1), M = q({}), _ = q(null), A = y(() => nr(s.field)), R = y(() => lr(s.field));
    function E() {
      M.value = {}, _.value = null, v.value = !0, d.value = !1;
    }
    function ee() {
      c.value || (v.value = !1, M.value = {}, _.value = null);
    }
    async function H(G) {
      if (h) {
        c.value = !0, M.value = {}, _.value = null;
        try {
          const D = await h.run(s.field.key, { ...G });
          $(D), v.value = !1;
        } catch (D) {
          D instanceof ar ? (M.value = D.fieldErrors, _.value = Object.keys(D.fieldErrors).length === 0 ? D.message : null) : _.value = D instanceof Error ? D.message : "Could not create that option.";
        } finally {
          c.value = !1;
        }
      }
    }
    const W = y(() => {
      if (!s.field.tableSelect || !S?.base)
        return;
      const G = S.returnUrl || "/";
      return `${S.base}/pick/${s.field.key}?return=${encodeURIComponent(G)}`;
    }), J = y(() => s.field.morphTo ?? []), ae = y(() => {
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
    ge(() => clearTimeout(b));
    const B = y(() => tr(s.field.type)), N = y(
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
    const Q = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Be}`;
    function fe(G) {
      const D = document.getElementById(`f-${s.field.key}`);
      if (!(D instanceof HTMLTextAreaElement) && !(D instanceof HTMLInputElement))
        return;
      const I = D.selectionStart ?? D.value.length, oe = D.selectionEnd ?? I;
      D.setRangeText(G, I, oe, "end"), D.dispatchEvent(new Event("input", { bubbles: !0 })), D.focus();
    }
    return (G, D) => (t(), n(P, null, [
      e.field.type === "hidden" ? (t(), n(P, { key: 0 }, [], 64)) : (t(), n("div", qr, [
        o("div", Gr, [
          o("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            U(f(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", Zr, "*")) : w("", !0)
          ], 10, Wr),
          e.field.hint ? (t(), n("span", Jr, [
            U(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: D[0] || (D[0] = (I) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, Yr)) : w("", !0)
          ])) : w("", !0)
        ]),
        B.value ? (t(), T(ye(B.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": D[1] || (D[1] = (I) => i("change", I))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(ma, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": D[2] || (D[2] = (I) => i("change", I))
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
          "onUpdate:modelValue": D[3] || (D[3] = (I) => i("change", I))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(x(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": D[4] || (D[4] = (I) => i("change", I))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Kr, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": D[5] || (D[5] = (I) => i("change", I))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(Vr, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": D[6] || (D[6] = (I) => i("change", I))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Vt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": D[7] || (D[7] = (I) => i("change", I))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : J.value.length ? (t(), n("div", Qr, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: ae.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Be)]),
            onChange: D[8] || (D[8] = (I) => te(I.target.value))
          }, [
            D[24] || (D[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(P, null, V(J.value, (I) => (t(), n("option", {
              key: I.value,
              value: I.value
            }, f(I.label), 9, ei))), 128))
          ], 42, Xr),
          ae.value.type && e.searchOptions ? (t(), n("div", ti, [
            o("button", {
              type: "button",
              class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Be)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: z(p.value || ae.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (ae.value.id ? String(ae.value.id) : "Search…")), 3)
            ], 10, ai),
            d.value ? (t(), n("div", ni, [
              ce(o("input", {
                "onUpdate:modelValue": D[9] || (D[9] = (I) => u.value = I),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ke, u.value]
              ]),
              o("div", li, [
                (t(!0), n(P, null, V(m.value, (I) => (t(), n("button", {
                  key: String(I.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (oe) => Z(I)
                }, f(I.label), 9, oi))), 128))
              ])
            ])) : w("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: D[10] || (D[10] = (I) => d.value = !1)
            })) : w("", !0)
          ])) : w("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", si, [
          o("button", {
            type: "button",
            class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Be)]),
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
              onClick: me(k, ["stop"])
            }, " ✕ ")) : w("", !0)
          ], 10, ri),
          d.value ? (t(), n("div", ii, [
            ce(o("input", {
              "onUpdate:modelValue": D[11] || (D[11] = (I) => u.value = I),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ke, u.value]
            ]),
            o("div", di, [
              g.value ? (t(), n("p", ui, " Searching… ")) : m.value.length === 0 ? (t(), n("p", ci, " No matches ")) : w("", !0),
              (t(!0), n(P, null, V(m.value, (I) => (t(), n("button", {
                key: String(I.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (oe) => $(I)
              }, f(I.label), 9, fi))), 128)),
              e.field.createOption && x(h) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                D[25] || (D[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                U(" " + f(R.value), 1)
              ])) : w("", !0)
            ])
          ])) : w("", !0),
          d.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: D[12] || (D[12] = (I) => d.value = !1)
          })) : w("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Be)]),
          onChange: D[13] || (D[13] = (I) => i("change", I.target.value || null))
        }, [
          D[26] || (D[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(P, null, V(e.options, (I) => (t(), n("option", {
            key: String(I.value),
            value: I.value
          }, f(I.label), 9, pi))), 128))
        ], 42, mi)) : e.field.type === "toggle" ? (t(), n("label", vi, [
          F(x(Ie), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": D[14] || (D[14] = (I) => i("change", I))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", gi, f(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), n("label", hi, [
          F(x(rr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": D[15] || (D[15] = (I) => i("change", I === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", bi, f(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !N.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", x(Be)]),
          onInput: D[16] || (D[16] = (I) => i("change", I.target.value))
        }, null, 42, xi)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: z([
            "border-input flex overflow-hidden rounded-md border",
            x(Kt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", yi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: D[17] || (D[17] = (I) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, ki)) : w("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: D[18] || (D[18] = (I) => i("change", I.target.value))
          }, null, 40, $i),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", wi, f(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: D[19] || (D[19] = (I) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Ci)) : w("", !0)
        ], 2)) : N.value ? (t(), n("div", {
          key: 15,
          class: z([
            "border-input flex h-9 overflow-hidden rounded-md border",
            x(Kt),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Mi, f(e.field.prefix ?? e.field.prefixIcon), 1)) : w("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: D[21] || (D[21] = (I) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Bi)) : w("", !0),
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
            class: z(Fi),
            onInput: D[22] || (D[22] = (I) => i("change", I.target.value))
          }, null, 40, _i),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Ai, f(e.field.suffix ?? e.field.suffixIcon), 1)) : w("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: D[23] || (D[23] = (I) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Pi)) : w("", !0)
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
          class: z(Q),
          onInput: D[20] || (D[20] = (I) => i("change", I.target.value))
        }, null, 40, Si)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", zi, [
          (t(!0), n(P, null, V(e.field.presets, (I) => (t(), n("button", {
            key: I,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: z([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              x(Be),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == I ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == I
            ),
            onClick: (oe) => i("change", String(I))
          }, f(I), 11, Oi))), 128))
        ])) : w("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", ji, [
          (t(!0), n(P, null, V(e.field.chips, (I, oe) => (t(), n("button", {
            key: oe,
            type: "button",
            title: I,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (re) => fe(String(oe))
          }, f(oe), 9, Li))), 128))
        ])) : w("", !0),
        W.value ? (t(), n("a", {
          key: 18,
          href: W.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Vi)) : w("", !0),
        e.error ? (t(), n("p", Ti, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", Di, f(e.field.help), 1)) : w("", !0)
      ])),
      e.field.createOption && x(h) ? (t(), T(sr, {
        key: 2,
        open: v.value,
        title: A.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: c.value,
        errors: M.value,
        "general-error": _.value,
        onClose: ee,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : w("", !0)
    ], 64));
  }
}), Ei = { class: "flex min-w-0 items-start gap-2.5" }, Ii = {
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
}, Ri = ["d"], Ui = { class: "min-w-0" }, Hi = { class: "text-sm font-semibold" }, Ki = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, qi = {
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
}, Qi = { class: "text-sm font-medium" }, Xi = {
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(!a.node.collapsed), i = q(0), d = q(0), u = y(
      () => (a.node.children ?? []).map((v) => ({
        label: v.label ?? "",
        description: v.description
      }))
    ), m = y(() => a.depth === 0), g = y(() => {
      const v = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, c = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        v[a.node.align ?? "start"] ?? "items-start",
        c[a.node.gap ?? "md"] ?? "gap-4",
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
    }), b = y(() => {
      const v = a.node.columns ?? 1;
      return v >= 3 ? "sm:grid-cols-3" : v === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(v) {
      const c = v.children?.length ?? 1;
      return c >= 3 ? "md:grid-cols-3" : c === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function $(v = 1) {
      return v >= 4 ? "md:col-span-4" : v === 3 ? "md:col-span-3" : v === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function k(v) {
      const c = [], M = (_) => {
        _.component === "field" && _.key && c.push(_.key), _.children?.forEach(M);
      };
      return M(v), c.some((_) => a.errors[_]);
    }
    function S(v) {
      if (v.hidden)
        return !1;
      const c = v.visibleWhen;
      return c ? a.values[c.field] == c.value : !0;
    }
    function h(v) {
      if (a.upload)
        return (c, M) => a.upload(v, c, M);
    }
    return (v, c) => {
      const M = _t("SchemaNode", !0);
      return e.node.component === "field" && S(e.node) ? (t(), T(Re, {
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
        onChange: c[0] || (c[0] = (_) => r("change", e.node.key, _)),
        onAffixAction: c[1] || (c[1] = (_) => r("affix-action", e.node.key, _))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && S(e.node) ? (t(), n("section", {
        key: 1,
        class: z(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: c[2] || (c[2] = (_) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", Ei, [
            e.node.icon ? (t(), n("div", Ii, [
              (t(), n("svg", Ni, [
                o("path", {
                  d: x(ie)(e.node.icon)
                }, null, 8, Ri)
              ]))
            ])) : w("", !0),
            o("div", Ui, [
              o("h3", Hi, f(e.node.label), 1),
              e.node.description ? (t(), n("p", Ki, f(e.node.description), 1)) : w("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...c[24] || (c[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : w("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [b.value, m.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
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
            onChange: c[3] || (c[3] = (R, E) => r("change", R, E)),
            onAffixAction: c[4] || (c[4] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "card" && S(e.node) ? (t(), n("section", qi, [
        o("header", Gi, [
          o("h3", Wi, f(e.node.title), 1),
          e.node.description ? (t(), n("p", Zi, f(e.node.description), 1)) : w("", !0)
        ]),
        o("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", b.value])
        }, [
          (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
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
            onChange: c[5] || (c[5] = (R, E) => r("change", R, E)),
            onAffixAction: c[6] || (c[6] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && S(e.node) ? (t(), n("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
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
          class: z(_.component === "column" ? $(_.span) : ""),
          onChange: c[7] || (c[7] = (R, E) => r("change", R, E)),
          onAffixAction: c[8] || (c[8] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && S(e.node) ? (t(), n("div", Ji, [
        (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
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
          onChange: c[9] || (c[9] = (R, E) => r("change", R, E)),
          onAffixAction: c[10] || (c[10] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), n("div", {
        key: 5,
        class: z(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
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
          onChange: c[11] || (c[11] = (R, E) => r("change", R, E)),
          onAffixAction: c[12] || (c[12] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 6,
        class: z(["flex", g.value])
      }, [
        (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
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
          onChange: c[13] || (c[13] = (R, E) => r("change", R, E)),
          onAffixAction: c[14] || (c[14] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Yi, [
        o("legend", Qi, f(e.node.label), 1),
        e.node.description ? (t(), n("p", Xi, f(e.node.description), 1)) : w("", !0),
        o("div", {
          class: z(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => (t(), T(M, {
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
            onChange: c[15] || (c[15] = (R, E) => r("change", R, E)),
            onAffixAction: c[16] || (c[16] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 8,
        role: "note",
        class: z(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", ed, f(e.node.title), 1)) : w("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: z(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => (t(), n("button", {
            key: A,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (R) => i.value = A
          }, [
            U(f(_.label) + " ", 1),
            k(_) ? (t(), n("span", ad)) : w("", !0)
          ], 10, td))), 128))
        ], 2),
        (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => ce((t(), n("div", {
          key: A,
          class: z(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, V(_.children ?? [], (R, E) => (t(), T(M, {
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
          [Te, i.value === A]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: z(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        F(er, {
          class: z(["p-4", m.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (_) => k((e.node.children ?? [])[_]),
          "onUpdate:activeStep": c[19] || (c[19] = (_) => d.value = _)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(P, null, V(e.node.children ?? [], (_, A) => ce((t(), n("div", {
          key: A,
          class: z(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, V(_.children ?? [], (R, E) => (t(), T(M, {
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
          [Te, d.value === A]
        ])), 128)),
        o("div", nd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: c[22] || (c[22] = (_) => d.value--)
          }, " Back ", 8, ld),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: c[23] || (c[23] = (_) => d.value++)
          }, " Next ")) : w("", !0)
        ])
      ], 2)) : w("", !0);
    };
  }
}), Yw = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q({});
    ue(
      () => a.open,
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
        F(se, {
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
        F(se, {
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
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: me(i, ["prevent"])
        }, [
          (t(!0), n(P, null, V(e.form?.nodes ?? [], (m, g) => (t(), T(pa, {
            key: g,
            node: m,
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
    }, s = y(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = y(() => l.icons[s.value] ?? l.defaultIcon), d = y(() => a[i.value] ?? a.dot), u = y(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), m = y(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (g, p) => (t(), n("span", {
      class: "inline-flex items-center",
      title: m.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: z(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": m.value
      }, [
        o("path", { d: d.value }, null, 8, rd)
      ], 10, sd)),
      o("span", id, f(m.value), 1)
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
    const l = e, a = q(!1);
    ue(
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
      class: z(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (m) => a.value = !0)
      }, null, 40, ud)) : e.fallback === "initials" ? (t(), n(P, { key: 1 }, [
        U(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", cd, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : w("", !0)
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
    const l = e, a = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = y(() => {
      const s = (l.value ?? "").trim();
      return a.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), n("span", md, "-")) : (t(), n("span", pd, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", vd, f(r.value), 1)) : (t(), n("span", gd, f(r.value), 1))
    ]));
  }
}), bd = { class: "inline-flex items-center" }, xd = ["checked", "aria-label"], yd = { class: "sr-only" }, Qw = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("span", bd, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, xd),
      o("span", yd, f(r.value), 1)
    ]));
  }
}), kd = {
  key: 0,
  class: "text-muted-foreground"
}, $d = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, Xw = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", $d, f(a.value), 1)) : (t(), n("span", kd, "—"));
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
}, e4 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", wd, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", Cd, "—")) : (t(), n("span", Sd, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Md = ["aria-checked", "aria-label", "title", "disabled"], Bd = ["value", "disabled"], _d = ["value"], t4 = /* @__PURE__ */ O({
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
    function m(g) {
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
      class: z(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: me(u, ["stop"])
    }, [
      o("span", {
        class: z(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Md)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = me(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), n(P, null, V(e.options, (b, C) => (t(), n("option", {
        key: C,
        value: C
      }, f(b), 9, _d))), 128))
    ], 40, Bd));
  }
}), Ad = ["data-variant"], Pd = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", We = /* @__PURE__ */ O({
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
      () => [Pd, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      K(s.$slots, "default")
    ], 10, Ad));
  }
}), Ft = {
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
function a4(e) {
  const l = y(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Od(s)
    }))
  ), a = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), m = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Ft[m] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
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
}, Vd = ["d"], Td = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Dd = ["disabled", "onClick"], Fd = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Ed = ["d"], Id = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, n4 = /* @__PURE__ */ O({
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
    function u(b) {
      return typeof b == "boolean" ? b ? "1" : "" : String(b ?? "");
    }
    function m(b) {
      const C = a.colors[u(b)] ?? a.defaultColor ?? "neutral";
      return Ft[C] ?? "outline";
    }
    function g(b) {
      return a.options[b] ?? b;
    }
    function p(b, C) {
      if (s.value || b === i.value) {
        C();
        return;
      }
      r("change", b), C();
    }
    return (b, C) => (t(), n("div", {
      onClick: C[0] || (C[0] = me(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(We, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          U(f(g(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(Ne, {
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
            F(We, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(g(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Ld, [
              o("path", {
                d: x(ie)("chevron-down")
              }, null, 8, Vd)
            ]))
          ], 8, jd)
        ]),
        panel: j(({ close: $ }) => [
          o("div", Td, f(d.value), 1),
          (t(!0), n(P, null, V(e.options, (k, S) => (t(), n("button", {
            key: S,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (h) => p(String(S), $)
          }, [
            F(We, {
              variant: m(S),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(k), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(S) === i.value ? (t(), n("svg", Fd, [
              o("path", {
                d: x(ie)("check")
              }, null, 8, Ed)
            ])) : (t(), n("span", Id))
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
}, Hd = ["d"], Kd = ["href"], qd = {
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
}, Yd = ["disabled", "onClick"], Qd = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xd = ["d"], l4 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = q(null), d = q(null), u = y(() => r.groups.flatMap((h) => h.actions)), m = y(() => u.value.filter((h) => !h.destructive)), g = y(() => u.value.filter((h) => h.destructive)), p = {
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
    function $(h) {
      s("run", h);
    }
    function k(h) {
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
      const c = v.indexOf(document.activeElement), M = h.key === "ArrowDown" ? 1 : -1, _ = (c + M + v.length) % v.length;
      v[_]?.focus();
    }
    return l({ openContextMenu: k }), (h, v) => (t(), n("div", Nd, [
      C.value ? w("", !0) : (t(), T(Ne, {
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
            (t(), n("svg", Ud, [
              o("path", {
                d: x(ie)("more-vertical")
              }, null, 8, Hd)
            ]))
          ], 8, Rd)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: S
          }, [
            (t(!0), n(P, null, V(m.value, (c) => (t(), n(P, {
              key: c.key
            }, [
              c.link ? (t(), n("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", b(c)])
              }, [
                (t(), n("svg", qd, [
                  o("path", {
                    d: x(ie)(c.icon)
                  }, null, 8, Gd)
                ])),
                U(" " + f(c.label), 1)
              ], 10, Kd)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", b(c)]),
                disabled: e.busy === c.key,
                onClick: (M) => $(c)
              }, [
                (t(), n("svg", {
                  class: z(["size-4 shrink-0", e.busy === c.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: x(ie)(c.icon)
                  }, null, 8, Zd)
                ], 2)),
                U(" " + f(c.label), 1)
              ], 10, Wd))
            ], 64))), 128)),
            g.value.length ? (t(), n("div", Jd, [
              (t(!0), n(P, null, V(g.value, (c) => (t(), n("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (M) => $(c)
              }, [
                (t(), n("svg", Qd, [
                  o("path", {
                    d: x(ie)(c.icon ?? "trash")
                  }, null, 8, Xd)
                ])),
                U(" " + f(c.label), 1)
              ], 8, Yd))), 128))
            ])) : w("", !0)
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
}, ot = 12, st = 20, eu = [0, 0.25, 0.5, 0.75, 1], Et = "alxtexhpanel.appearance", _e = {
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
}, Le = q({ ..._e });
let qt = !1;
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
  const l = kt[e.primary] ?? kt.slate, a = $t[e.surface] ?? $t.neutral, r = a.chroma, s = a.hue, d = wt(e) ? {
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
    "--pk-row-padding": Gt[e.density] ?? Gt.comfortable,
    "--pk-form-gap": Wt[e.density] ?? Wt.comfortable
  };
}
function It() {
  if (typeof window > "u")
    return { ..._e };
  try {
    const e = localStorage.getItem(Et);
    if (!e)
      return { ..._e };
    const l = { ..._e, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = _e.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? _e.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < ot || l.fontSize > st) && (l.fontSize = _e.fontSize), l;
  } catch {
    return { ..._e };
  }
}
function o4(e) {
  const l = It(), a = e ? { ...l, ...e } : l;
  if (Le.value = a, Ct(a), e)
    try {
      localStorage.setItem(Et, JSON.stringify(a));
    } catch {
    }
}
let va = null;
function s4(e) {
  va = e;
}
let ga = {};
function nu(e) {
  if (ga = e, !(typeof document > "u") && !It().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Ct(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...au(e), ...e.primaryChosen ? {} : ga };
  l.classList.toggle("dark", wt(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      tu,
      JSON.stringify({ dark: wt(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function ha() {
  function e(r) {
    Ct(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Le.value = { ...Le.value, ...r, ...s };
    try {
      localStorage.setItem(Et, JSON.stringify(Le.value));
    } catch {
    }
    e(Le.value), va?.({ ...r, ...s });
  }
  function a() {
    l({ ..._e });
  }
  return pe(() => {
    qt || (qt = !0, Le.value = It(), Ct(Le.value));
  }), {
    appearance: y(() => Le.value),
    set: l,
    reset: a,
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
}, pu = { class: "flex flex-col gap-2" }, vu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, gu = ["aria-pressed", "aria-label", "onClick"], hu = { class: "text-sm font-semibold" }, bu = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, xu = ["onClick"], yu = { class: "flex flex-col gap-2" }, ku = { class: "flex items-center justify-between" }, $u = { class: "text-muted-foreground text-xs tabular-nums" }, wu = { class: "flex items-center gap-2" }, Cu = ["disabled"], Su = ["min", "max", "value"], Mu = ["disabled"], r4 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = ha(), u = q(!1), m = y(() => l.value.sidebarSide === "right"), g = [
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
    ], $ = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], k = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function S(h, v) {
      return `oklch(0.72 ${v * 3} ${h})`;
    }
    return (h, v) => (t(), n(P, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (c) => u.value = !0)
      }, [...v[7] || (v[7] = [
        Bt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Ue, { to: "body" }, [
        F(Ve, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            u.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: v[1] || (v[1] = (c) => u.value = !1)
            })) : w("", !0)
          ]),
          _: 1
        }),
        F(Ve, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": m.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": m.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            u.value ? (t(), n("aside", {
              key: 0,
              class: z(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", lu, [
                v[9] || (v[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", ou, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => x(r) && x(r)(...c))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: v[3] || (v[3] = (c) => u.value = !1)
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
              o("div", su, [
                o("section", ru, [
                  v[11] || (v[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", iu, [
                    (t(!0), n(P, null, V(x(s), (c, M) => (t(), n("button", {
                      key: M,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": x(l).primary === M,
                      onClick: (_) => x(a)({ primary: M })
                    }, [
                      x(l).primary === M ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ne({ color: c.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...v[10] || (v[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : w("", !0)
                    ], 12, du))), 128))
                  ])
                ]),
                o("section", uu, [
                  v[13] || (v[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", cu, [
                    (t(!0), n(P, null, V(x(i), (c, M) => (t(), n("button", {
                      key: M,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: S(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": x(l).surface === M,
                      onClick: (_) => x(a)({ surface: M })
                    }, [
                      x(l).surface === M ? (t(), n("svg", mu, [...v[12] || (v[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : w("", !0)
                    ], 12, fu))), 128))
                  ])
                ]),
                o("section", pu, [
                  v[14] || (v[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", vu, [
                    (t(!0), n(P, null, V(x(d), (c) => (t(), n("button", {
                      key: c,
                      type: "button",
                      class: z([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(l).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (M) => x(a)({ radius: c })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      U(" " + f(c), 1)
                    ], 10, gu))), 128))
                  ])
                ]),
                (t(!0), n(P, null, V([
                  { label: "Color scheme", key: "theme", options: g },
                  { label: "Card style", key: "cardStyle", options: b },
                  { label: "Density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: $ },
                  { label: "Menu style", key: "menuStyle", options: k }
                ], (c) => (t(), n("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", hu, f(c.label), 1),
                  o("div", bu, [
                    (t(!0), n(P, null, V(c.options, (M) => (t(), n("button", {
                      key: String(M.value),
                      type: "button",
                      class: z([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l)[c.key] === M.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (_) => x(a)({ [c.key]: M.value })
                    }, f(M.label), 11, xu))), 128))
                  ])
                ]))), 128)),
                o("section", yu, [
                  o("div", ku, [
                    v[15] || (v[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", $u, f(x(l).fontSize) + "px", 1)
                  ]),
                  o("div", wu, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize <= x(ot),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => x(a)({ fontSize: x(l).fontSize - 1 }))
                    }, " − ", 8, Cu),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(ot),
                      max: x(st),
                      value: x(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (c) => x(a)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, Su),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize >= x(st),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => x(a)({ fontSize: x(l).fontSize + 1 }))
                    }, " + ", 8, Mu)
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
}), Bu = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, _u = { class: "flex items-stretch" }, Au = ["href", "aria-current"], Pu = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zu = ["d"], Ou = { class: "w-full truncate text-center" }, ju = {
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
}, Vu = ["d"], Tu = { class: "w-full truncate text-center" }, pt = 5, i4 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.items.length <= pt ? a.items : a.items.slice(0, pt - 1)
    ), i = y(() => a.items.length > pt);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, m) => (t(), n("nav", Bu, [
      o("ul", _u, [
        (t(!0), n(P, null, V(s.value, (g) => (t(), n("li", {
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
            (t(), n("svg", Pu, [
              o("path", {
                d: x(ie)(g.icon)
              }, null, 8, zu)
            ])),
            o("span", Ou, f(g.title), 1)
          ], 10, Au)
        ]))), 128)),
        i.value ? (t(), n("li", ju, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (g) => r("more"))
          }, [
            (t(), n("svg", Lu, [
              o("path", {
                d: x(ie)("more-horizontal")
              }, null, 8, Vu)
            ])),
            o("span", Tu, f(e.moreLabel), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}), Du = ["value"], Fu = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", he = /* @__PURE__ */ O({
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
      class: z([Fu, a.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, Du));
  }
}), Eu = ["for"], $e = /* @__PURE__ */ O({
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
      K(l.$slots, "default")
    ], 10, Eu));
  }
}), d4 = /* @__PURE__ */ O({
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
}), Iu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Nu = ["id", "name", "value", "disabled", "maxlength"], Ru = ["data-active"], Uu = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, u4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(!1), i = q(null);
    pe(() => {
      a.autofocus && i.value?.focus();
    });
    const d = y(
      () => Array.from({ length: a.length }, (g, p) => a.modelValue[p] ?? "")
    ), u = y(() => Math.min(a.modelValue.length, a.length - 1));
    function m(g) {
      const p = g.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, a.length));
    }
    return (g, p) => (t(), n("div", Iu, [
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
        class: "absolute inset-0 z-10 w-full cursor-default bg-transparent text-transparent caret-transparent outline-none disabled:cursor-not-allowed",
        onInput: m,
        onFocus: p[0] || (p[0] = (b) => s.value = !0),
        onBlur: p[1] || (p[1] = (b) => s.value = !1)
      }, null, 40, Nu),
      (t(!0), n(P, null, V(d.value, (b, C) => (t(), n("div", {
        key: C,
        "data-slot": "input-otp-slot",
        "data-active": s.value && C === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(f(b) + " ", 1),
        s.value && C === u.value && b === "" ? (t(), n("div", Uu, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : w("", !0)
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
    return (l, a) => (t(), n("header", {
      class: z(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: z(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), n("p", Hu, f(e.description), 1)) : w("", !0)
    ], 2));
  }
}), Ku = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, qu = { class: "min-w-0 space-y-1" }, Gu = { class: "flex flex-wrap items-center gap-2.5" }, Wu = { class: "text-2xl font-semibold tracking-tight" }, Zu = {
  key: 0,
  class: "flex items-center gap-2"
}, Ju = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Yu = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, c4 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", Ku, [
      o("div", qu, [
        o("div", Gu, [
          o("h1", Wu, f(e.title), 1),
          l.$slots.status ? (t(), n("div", Zu, [
            K(l.$slots, "status")
          ])) : w("", !0)
        ]),
        e.purpose ? (t(), n("p", Ju, f(e.purpose), 1)) : w("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Yu, [
        K(l.$slots, "actions")
      ])) : w("", !0)
    ]));
  }
}), Qu = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: z(x(X)(x(tc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Xu = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: z(x(X)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), ec = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: z(x(X)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      K(a.$slots, "default")
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
), ac = { class: "list-inside list-disc text-sm" }, f4 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(x(Qu), { variant: "destructive" }, {
      default: j(() => [
        F(x(wn), { class: "size-4" }),
        F(x(ec), null, {
          default: j(() => [
            U(f(e.title), 1)
          ]),
          _: 1
        }),
        F(x(Xu), null, {
          default: j(() => [
            o("ul", ac, [
              (t(!0), n(P, null, V(a.value, (i, d) => (t(), n("li", { key: d }, f(i), 1))), 128))
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
  setup(e, { emit: l }) {
    const a = e, s = ca(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, d) => ce((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => ja(s) ? s.value = u : null),
      "data-slot": "input",
      class: z(
        x(X)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [ke, x(s)]
    ]);
  }
}), nc = { class: "relative" }, lc = ["aria-label"], m4 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = q(!1), s = La("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", nc, [
      F(x(ba), le({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(X)("pr-10", a.class)
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
        r.value ? (t(), T(x(Cn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(x(Sn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, lc)
    ]));
  }
}), xa = "@container min-w-0", oc = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", p4 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", sc = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3", De = "w-full min-w-0 px-4 py-6 sm:px-6", v4 = "w-full min-w-0 p-3 sm:p-4", g4 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", h4 = "w-full max-w-5xl";
function b4(e, l) {
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
    s.forEach((u, m) => {
      d[m % a].push(u);
    }), r.push({ type: "columns", columns: d }), s = [];
  };
  for (const d of e)
    (d.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
const ya = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", rc = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", ic = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function dc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function uc(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function cc(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await fc(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = s, r.height = i;
    const d = r.getContext("2d", { willReadFrequently: !0 });
    if (!d)
      return !1;
    d.drawImage(a, 0, 0);
    const { data: u } = d.getImageData(0, 0, s, i);
    for (let m = 3; m < u.length; m += 4)
      if ((u[m] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function fc(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
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
const x4 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(He), le({ "data-slot": "sheet-close" }, l), {
      default: j(() => [
        K(a.$slots, "default")
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
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x(la), le({
      "data-slot": "sheet-description",
      class: x(X)("text-muted-foreground text-sm", l.class)
    }, x(a)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y4 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: z(x(X)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), vc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: z(x(X)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      K(a.$slots, "default")
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
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x(oa), le({
      "data-slot": "sheet-title",
      class: x(X)("text-foreground font-semibold", l.class)
    }, x(a)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k4 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(sa), le({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zt = "sidebar_state", hc = 3600 * 24 * 7, bc = "16rem", xc = "18rem", yc = "3rem", kc = "b", [dt, $c] = Ua("Sidebar"), wc = { class: "flex h-full w-full flex-col" }, Cc = ["data-state", "data-collapsible", "data-variant", "data-side"], Sc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, $4 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = dt();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", le({
      key: 0,
      "data-slot": "sidebar",
      class: x(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      K(d.$slots, "default")
    ], 16)) : x(a) ? (t(), T(x(Tt), le({
      key: 1,
      open: x(s)
    }, d.$attrs, { "onUpdate:open": x(i) }), {
      default: j(() => [
        F(x(Dt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": x(xc)
          })
        }, {
          default: j(() => [
            F(vc, { class: "sr-only" }, {
              default: j(() => [
                F(gc, null, {
                  default: j(() => [...u[0] || (u[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                F(pc, null, {
                  default: j(() => [...u[1] || (u[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", wc, [
              K(d.$slots, "default")
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
        class: z(
          x(X)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", le({
        class: x(X)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", Sc, [
          K(d.$slots, "default")
        ])
      ], 16)
    ], 8, Cc));
  }
}), w4 = /* @__PURE__ */ O({
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
        x(X)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), C4 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: z(x(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), S4 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: z(x(X)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), M4 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ke), {
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
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), B4 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: z(x(X)("w-full text-sm", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), _4 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ke), {
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
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), A4 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: z(x(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), P4 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(ba), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: z(x(X)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), z4 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
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
      K(a.$slots, "default")
    ], 2));
  }
}), O4 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: z(x(X)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), j4 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ke), {
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
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), L4 = /* @__PURE__ */ O({
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
      K(a.$slots, "default")
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
  setup(e, { emit: l }) {
    const s = ve(e, l);
    return (i, d) => (t(), T(x(Ha), le({ "data-slot": "tooltip" }, x(s)), {
      default: j((u) => [
        K(i.$slots, "default", Ce(je(u)))
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Ka), null, {
      default: j(() => [
        F(x(qa), le({ "data-slot": "tooltip-content" }, { ...x(i), ...d.$attrs }, {
          class: x(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: j(() => [
            K(d.$slots, "default"),
            F(x(Ga), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), V4 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(ra), Ce(je(l)), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _c = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Wa), le({ "data-slot": "tooltip-trigger" }, l), {
      default: j(() => [
        K(a.$slots, "default")
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
    const l = e;
    return (a, r) => (t(), T(x(Ke), le({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(X)(x(Pc)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), T4 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = dt(), s = de(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(x(Mc), { key: 1 }, {
      default: j(() => [
        F(x(_c), { "as-child": "" }, {
          default: j(() => [
            F(Jt, Ce(je({ ...x(s), ...i.$attrs })), {
              default: j(() => [
                K(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        F(x(Bc), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(a)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), n(P, { key: 0 }, [
              U(f(e.tooltip), 1)
            ], 64)) : (t(), T(ye(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(Jt, Ce(le({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: j(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D4 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: z(x(X)("group/menu-item relative", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Yt = "animate-pulse rounded-md bg-primary/10", F4 = /* @__PURE__ */ O({
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
      class: z(x(X)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: z(x(X)(Yt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : w("", !0),
      o("div", {
        class: z(x(X)(Yt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), E4 = /* @__PURE__ */ O({
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
        x(X)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), I4 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(Ke), {
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
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), N4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: z(x(X)("group/menu-sub-item relative", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), R4 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ln?.cookie.includes(`${Zt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = On("(max-width: 767px)"), i = q(!1), d = ca(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(b) {
      d.value = b, document.cookie = `${Zt}=${d.value}; path=/; max-age=${hc}`;
    }
    function m(b) {
      i.value = b;
    }
    function g() {
      return s.value ? m(!i.value) : u(!d.value);
    }
    jn("keydown", (b) => {
      b.key === kc && (b.metaKey || b.ctrlKey) && (b.preventDefault(), g());
    });
    const p = y(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return $c({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: g
    }), (b, C) => (t(), T(x(ra), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", le({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(bc),
            "--sidebar-width-icon": x(yc)
          },
          class: x(X)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, b.$attrs), [
          K(b.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), U4 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = dt();
    return (r, s) => (t(), n("button", {
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
      (...i) => x(a) && x(a)(...i))
    }, [
      K(r.$slots, "default")
    ], 2));
  }
}), Ac = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x(Za), le({ "data-slot": "separator" }, x(a), {
      class: x(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), H4 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ac), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: z(x(X)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), K4 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = dt();
    return (i, d) => (t(), T(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(x(X)("h-7 w-7", l.class)),
      onClick: x(s)
    }, {
      default: j(() => [
        x(a) || x(r) === "collapsed" ? (t(), T(x(Mn), { key: 0 })) : (t(), T(x(Bn), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
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
), q4 = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ve(e, l);
    return (i, d) => (t(), T(x(Ja), le({ "data-slot": "dropdown-menu" }, x(s)), {
      default: j((u) => [
        K(i.$slots, "default", Ce(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), zc = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, G4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Ya), le({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", zc, [
          F(x(ia), null, {
            default: j(() => [
              K(d.$slots, "indicator-icon", {}, () => [
                F(x(da), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Qa), null, {
      default: j(() => [
        F(x(Xa), le({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: j(() => [
            K(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Z4 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(en), le({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J4 = /* @__PURE__ */ O({
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
    const l = e, a = de(l, "inset", "variant", "class"), r = Se(a);
    return (s, i) => (t(), T(x(tn), le({
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
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Y4 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = de(l, "class", "inset"), r = Se(a);
    return (s, i) => (t(), T(x(an), le({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Q4 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = ve(e, l);
    return (i, d) => (t(), T(x(nn), le({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: j(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oc = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, X4 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(ln), le({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", Oc, [
          F(x(ia), null, {
            default: j(() => [
              K(d.$slots, "indicator-icon", {}, () => [
                F(x(_n), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x(on), le({ "data-slot": "dropdown-menu-separator" }, x(a), {
      class: x(X)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), t5 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: z(x(X)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), a5 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ve(e, l);
    return (i, d) => (t(), T(x(sn), le({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: j((u) => [
        K(i.$slots, "default", Ce(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), n5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(rn), le({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(X)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: j(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l5 = /* @__PURE__ */ O({
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
    const l = e, a = de(l, "class", "inset"), r = Se(a);
    return (s, i) => (t(), T(x(dn), le({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: j(() => [
        K(s.$slots, "default"),
        F(x(ua), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), o5 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Se(e);
    return (r, s) => (t(), T(x(un), le({ "data-slot": "dropdown-menu-trigger" }, x(a)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s5 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(cn), {
      "data-slot": "avatar",
      class: z(x(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), r5 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x(fn), le({ "data-slot": "avatar-fallback" }, x(a), {
      class: x(X)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i5 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(mn), le({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), d5 = /* @__PURE__ */ O({
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
      K(a.$slots, "default")
    ], 2));
  }
}), u5 = /* @__PURE__ */ O({
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
      class: z(x(X)("flex size-9 items-center justify-center", l.class))
    }, [
      K(a.$slots, "default", {}, () => [
        F(x(An), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), c5 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: z(x(X)("inline-flex items-center gap-1.5", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), f5 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ke), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: z(x(X)("hover:text-foreground transition-colors", l.class))
    }, {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), m5 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: z(
        x(X)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), p5 = /* @__PURE__ */ O({
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
      class: z(x(X)("text-foreground font-normal", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), v5 = /* @__PURE__ */ O({
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
      class: z(x(X)("[&>svg]:size-3.5", l.class))
    }, [
      K(a.$slots, "default", {}, () => [
        F(x(ua))
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
    const l = e, a = de(l, "class"), r = Se(a);
    return (s, i) => (t(), n("div", jc, [
      F(x(pn), le({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), g5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = de(a, "class", "viewport"), i = ve(s, r);
    return (d, u) => (t(), T(x(vn), le({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: j((m) => [
        K(d.$slots, "default", Ce(je(m))),
        e.viewport ? (t(), T(Lc, { key: 0 })) : w("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), h5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(gn), le({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(X)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: j(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b5 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class"), r = Se(a);
    return (s, i) => (t(), T(x(hn), le({ "data-slot": "navigation-menu-indicator" }, x(r), {
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
}), x5 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x(bn), le({ "data-slot": "navigation-menu-item" }, x(a), {
      class: x(X)("relative", l.class)
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y5 = /* @__PURE__ */ O({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(xn), le({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(X)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k5 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class"), r = Se(a);
    return (s, i) => (t(), T(x(yn), le({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(X)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $5 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class"), r = Se(a);
    return (s, i) => (t(), T(x(kn), le({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(X)(x(Vc)(), "group", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default"),
        F(x(Pn), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vc = jt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), w5 = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ve(e, l);
    return (i, d) => (t(), T(x(na), le({ "data-slot": "dialog" }, x(s)), {
      default: j((u) => [
        K(i.$slots, "default", Ce(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), C5 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(He), le({ "data-slot": "dialog-close" }, l), {
      default: j(() => [
        K(a.$slots, "default")
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
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x(At), le({ "data-slot": "dialog-overlay" }, x(a), {
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Pt), null, {
      default: j(() => [
        F(Tc),
        F(x(zt), le({ "data-slot": "dialog-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: j(() => [
            K(d.$slots, "default"),
            e.showCloseButton ? (t(), T(x(He), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                F(x(Ot)),
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
}), M5 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class"), r = Se(a);
    return (s, i) => (t(), T(x(la), le({ "data-slot": "dialog-description" }, x(r), {
      class: x(X)("text-muted-foreground text-sm", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B5 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: z(x(X)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      K(a.$slots, "default"),
      e.showCloseButton ? (t(), T(x(He), {
        key: 0,
        "as-child": ""
      }, {
        default: j(() => [
          F(se, { variant: "outline" }, {
            default: j(() => [...r[0] || (r[0] = [
              U(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : w("", !0)
    ], 2));
  }
}), _5 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: z(x(X)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), A5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = de(a, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Pt), null, {
      default: j(() => [
        F(x(At), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            F(x(zt), le({
              class: x(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...x(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (m) => {
                const g = m.detail.originalEvent, p = g.target;
                (g.offsetX > p.clientWidth || g.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: j(() => [
                K(d.$slots, "default"),
                F(x(He), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    F(x(Ot), { class: "w-4 h-4" }),
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
}), P5 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class"), r = Se(a);
    return (s, i) => (t(), T(x(oa), le({ "data-slot": "dialog-title" }, x(r), {
      class: x(X)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z5 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(sa), le({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O5 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = de(l, "class");
    return (r, s) => (t(), T(x($n), le({ "data-slot": "label" }, x(a), {
      class: x(X)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j5 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(zn), {
      role: "status",
      "aria-label": "Loading",
      class: z(x(X)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), L5 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: z(
        x(X)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), V5 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: z(x(X)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), T5 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: z(x(X)("px-6", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), D5 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: z(x(X)("text-muted-foreground text-sm", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), F5 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: z(x(X)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), E5 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: z(
        x(X)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), I5 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: z(x(X)("leading-none font-semibold", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Dc = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Fc = { class: "flex items-start gap-3" }, Ec = { class: "min-w-0 flex-1" }, Ic = { class: "text-foreground text-sm font-medium" }, Nc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, N5 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = q(!1), d = q(null), u = q(0);
    Va((g) => (console.error(`[PkBoundary] ${r.label} failed to render`, g), i.value = !0, d.value = g instanceof Error ? g.message : null, s("error", g), !1));
    function m() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: m }), (g, p) => (t(), n("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Dc, [
        o("div", Fc, [
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
          o("div", Ec, [
            o("p", Ic, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", Nc, f(d.value), 1)) : w("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: m
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
              U(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? w("", !0) : K(g.$slots, "default", { key: u.value })
    ], 2));
  }
}), Rc = { class: "bg-card rounded-lg border" }, Uc = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Hc = { class: "min-w-0" }, Kc = {
  key: 0,
  class: "truncate text-sm font-medium"
}, qc = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Gc = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Wc = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, R5 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Rc, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Uc, [
        o("div", Hc, [
          K(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Kc, f(e.title), 1)) : w("", !0),
            e.description ? (t(), n("p", qc, f(e.description), 1)) : w("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Gc, [
          K(l.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      o("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        K(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", Wc, [
        K(l.$slots, "footer")
      ])) : w("", !0)
    ]));
  }
}), ka = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function U5() {
  const e = fa(), l = y(() => e.props.panel?.pageFooter === !0);
  return xt(ka, l), l;
}
const Zc = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Jc = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Yc = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, H5 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fa(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = y(() => {
      const m = a.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), d = lt(ka, y(() => !1)), u = y(() => !l.host && x(d) === !0);
    return (m, g) => u.value ? w("", !0) : (t(), n("footer", Zc, [
      o("div", Jc, [
        o("p", null, "© " + f(x(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), n("nav", Yc, [
          (t(!0), n(P, null, V(i.value, (p) => (t(), T(x(Dn), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              U(f(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), Qc = { class: "flex shrink-0 flex-col items-center" }, Xc = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, K5 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Qc, [
      o("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Xc)) : w("", !0),
        o("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
        }, [
          K(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(P, { key: 0 }, [
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
}), ef = { class: "flex flex-col gap-2" }, tf = { class: "min-w-0 flex-1" }, af = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, nf = ["disabled", "aria-label", "onClick"], lf = ["disabled", "aria-label", "onClick"], of = ["disabled", "title", "aria-label", "onClick"], sf = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, rf = ["disabled"], q5 = /* @__PURE__ */ O({
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
    const i = q(d(a.modelValue));
    function d(v) {
      return Array.isArray(v) ? v.map((c) => ({ uid: s++, data: { ...c } })) : [];
    }
    ue(
      () => a.modelValue,
      (v) => {
        JSON.stringify(v ?? null) !== JSON.stringify(u()) && (i.value = d(v));
      }
    );
    function u() {
      const v = [];
      for (const c of i.value) {
        const M = {};
        let _ = !1;
        for (const A of a.children) {
          const R = c.data[A.key] ?? null;
          M[A.key] = R, R !== null && R !== "" && !(Array.isArray(R) && R.length === 0) && (_ = !0);
        }
        _ && v.push(M);
      }
      return v.length ? v : null;
    }
    function m() {
      r("update:modelValue", u());
    }
    const g = y(() => a.maxItems !== null && i.value.length >= a.maxItems), p = y(() => a.minItems !== null && i.value.length <= a.minItems), b = y(() => a.children.length === 1);
    function C() {
      if (g.value || a.disabled)
        return;
      const v = {};
      for (const c of a.children)
        v[c.key] = null;
      i.value.push({ uid: s++, data: v });
    }
    function $(v) {
      i.value = i.value.filter((c) => c.uid !== v), m();
    }
    function k(v, c) {
      const M = v + c;
      if (M < 0 || M >= i.value.length)
        return;
      const _ = [...i.value], [A] = _.splice(v, 1);
      _.splice(M, 0, A), i.value = _, m();
    }
    function S(v, c, M) {
      const _ = i.value.find((A) => A.uid === v);
      _ && (_.data[c] = M, m());
    }
    function h(v, c) {
      return a.errors[`${a.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), n("div", ef, [
      (t(!0), n(P, null, V(i.value, (M, _) => (t(), n("div", {
        key: M.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", b.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(_ + 1), 3),
        o("div", tf, [
          b.value ? (t(), T(Re, {
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
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", af, [
            (t(!0), n(P, null, V(e.children, (A) => (t(), T(Re, {
              key: A.key,
              field: { ...A, disabled: A.disabled || e.disabled },
              value: M.data[A.key],
              error: h(_, A.key),
              options: e.childOptions[A.key] ?? [],
              onChange: (R) => S(M.uid, A.key, R)
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
            onClick: (A) => k(_, -1)
          }, [...c[0] || (c[0] = [
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
          ])], 8, nf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} down`,
            onClick: (A) => k(_, 1)
          }, [...c[1] || (c[1] = [
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
          ])], 8, lf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${_ + 1}`,
            onClick: (A) => $(M.uid)
          }, [...c[2] || (c[2] = [
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
          ])], 8, of)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", sf, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : w("", !0),
      g.value ? w("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: C
      }, [
        c[3] || (c[3] = o("svg", {
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(!1), i = y(() => a.modelValue ?? "");
    function d(b) {
      return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = y(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(b, C = b) {
      const $ = document.getElementById(a.id ?? "");
      if ($ === null)
        return;
      const k = $.selectionStart, S = $.selectionEnd, h = i.value.slice(k, S);
      r(
        "update:modelValue",
        `${i.value.slice(0, k)}${b}${h}${C}${i.value.slice(S)}`
      );
    }
    const g = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = y(
      () => (a.toolbar ?? Object.keys(g)).filter((b) => b in g)
    );
    return (b, C) => (t(), n("div", df, [
      o("div", uf, [
        (t(!0), n(P, null, V(p.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          disabled: e.disabled,
          title: $,
          "aria-label": $,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (k) => g[$].run()
        }, f(g[$].label), 9, cf))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = ($) => s.value = !s.value)
        }, " Preview ", 8, ff)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, pf)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = ($) => r("update:modelValue", $.target.value))
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(null), i = q(!0), d = y(() => a.modelValue ?? ""), u = y(() => Math.max(d.value.split(`
`).length, 1)), m = y(() => {
      if (a.language !== "json" || d.value.trim() === "")
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
      const C = b.target, $ = C.selectionStart, k = C.selectionEnd, S = `${d.value.slice(0, $)}    ${d.value.slice(k)}`;
      r("update:modelValue", S), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = $ + 4;
      });
    }
    return (b, C) => (t(), n("div", gf, [
      o("div", hf, [
        o("div", bf, [
          (t(!0), n(P, null, V(u.value, ($) => (t(), n("div", { key: $ }, f($), 1))), 128))
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
        }, null, 40, xf)
      ]),
      o("p", yf, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), n("p", kf, f(m.value), 1)) : w("", !0)
    ]));
  }
}), wf = { class: "space-y-3" }, Cf = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Sf = { class: "text-sm font-medium" }, Mf = { class: "flex items-center gap-1" }, Bf = ["disabled", "onClick"], _f = ["disabled", "onClick"], Af = ["disabled", "onClick"], Pf = { class: "space-y-3 p-3" }, zf = { class: "flex flex-wrap items-center gap-2" }, Of = ["disabled", "onClick"], jf = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, G5 = /* @__PURE__ */ O({
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
    function m(C) {
      d.value || u([...s.value, { type: C, data: {} }]);
    }
    function g(C) {
      u(s.value.filter(($, k) => k !== C));
    }
    function p(C, $) {
      const k = C + $;
      if (k < 0 || k >= s.value.length)
        return;
      const S = [...s.value], [h] = S.splice(C, 1);
      S.splice(k, 0, h), u(S);
    }
    function b(C, $, k) {
      u(
        s.value.map(
          (S, h) => h === C ? { ...S, data: { ...S.data, [$]: k } } : S
        )
      );
    }
    return (C, $) => (t(), n("div", wf, [
      (t(!0), n(P, null, V(s.value, (k, S) => (t(), n("div", {
        key: `${k.type}-${S}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Cf, [
          o("span", Sf, f(i.value[k.type]?.label ?? k.type), 1),
          o("div", Mf, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === 0,
              "aria-label": "Move up",
              onClick: (h) => p(S, -1)
            }, " ↑ ", 8, Bf),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (h) => p(S, 1)
            }, " ↓ ", 8, _f),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (h) => g(S)
            }, " Remove ", 8, Af)
          ])
        ]),
        o("div", Pf, [
          (t(!0), n(P, null, V(i.value[k.type]?.fields ?? [], (h) => (t(), T(Re, {
            key: h.key,
            field: h,
            value: k.data[h.key] ?? null,
            error: e.errors?.[h.key],
            processing: e.disabled,
            onChange: (v) => b(S, h.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", zf, [
        (t(!0), n(P, null, V(e.blocks, (k) => (t(), n("button", {
          key: k.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (S) => m(k.type)
        }, " + " + f(k.label), 9, Of))), 128)),
        d.value ? (t(), n("span", jf, f(e.maxBlocks) + " is the maximum here. ", 1)) : w("", !0)
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
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(i) {
      return a.modelValue != null && i.value == a.modelValue;
    }
    return (i, d) => (t(), n("div", {
      role: "radiogroup",
      class: z(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(P, null, V(e.options, (u) => (t(), n("label", {
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
          onChange: (m) => r("update:modelValue", u.value)
        }, null, 40, Lf),
        U(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Vf, " Nothing to choose from yet. ")) : w("", !0)
    ], 2));
  }
}), Df = ["value", "checked", "disabled", "onChange"], Ff = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ef = /* @__PURE__ */ O({
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
    function i(m) {
      return s.value.some((g) => g == m.value);
    }
    function d(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((g) => g != m.value) : [...s.value, m.value]
      );
    }
    const u = y(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, g) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(u.value)
    }, [
      (t(!0), n(P, null, V(e.options, (p) => (t(), n("label", {
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
        }, null, 40, Df),
        U(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ff, " Nothing to choose from yet. ")) : w("", !0)
    ], 4));
  }
}), If = { class: "flex flex-col gap-1.5" }, Nf = ["aria-label", "onClick"], Rf = ["placeholder", "disabled", "maxlength"], Uf = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Hf = ["onClick"], Kf = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, qf = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(""), i = y(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), d = y(() => i.value.length >= (a.field.max ?? 25)), u = y(
      () => (a.field.suggestions ?? []).filter(
        (b) => !i.value.some((C) => C.toLowerCase() === b.toLowerCase())
      )
    );
    function m(b) {
      const C = b.trim().slice(0, a.field.maxLength ?? 40);
      if (C === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some(($) => $.toLowerCase() === C.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, C]), s.value = "";
    }
    function g(b) {
      r(
        "update:modelValue",
        i.value.filter((C, $) => $ !== b)
      );
    }
    function p(b) {
      if (b.key === "Enter" || b.key === ",") {
        b.preventDefault(), m(s.value);
        return;
      }
      b.key === "Backspace" && s.value === "" && i.value.length > 0 && g(i.value.length - 1);
    }
    return (b, C) => (t(), n("div", If, [
      o("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(P, null, V(i.value, ($, k) => (t(), n("span", {
          key: `${$}-${k}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(f($) + " ", 1),
          e.disabled ? w("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${$}`,
            onClick: (S) => g(k)
          }, " × ", 8, Nf))
        ]))), 128)),
        ce(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = ($) => s.value = $),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: C[1] || (C[1] = ($) => m(s.value))
        }, null, 40, Rf), [
          [ke, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", Uf, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(P, null, V(u.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (k) => m($)
        }, f($), 9, Hf))), 128))
      ])) : w("", !0),
      d.value ? (t(), n("p", Kf, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : w("", !0)
    ]));
  }
}), Gf = 4.5, Qt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function $a(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function vt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function St(e) {
  const [l, a, r] = $a(e);
  return 0.2126 * vt(l) + 0.7152 * vt(a) + 0.0722 * vt(r);
}
function wa(e, l) {
  const a = St(e), r = St(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function Wf(e, l, a) {
  if (!Qt.test(e) || !Qt.test(l))
    return e;
  const r = St(l) > 0.5, s = r ? 0 : 255;
  let i = $a(e);
  for (let d = 0; d <= 20; d++) {
    const u = Zf(i);
    if (wa(u, l) >= a)
      return u;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Zf(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Jf = { class: "flex flex-col gap-2" }, Yf = { class: "flex items-center gap-2" }, Qf = {
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
}, Xf = ["value", "disabled", "aria-label"], em = ["value", "disabled", "placeholder"], tm = {
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = y(() => typeof a.modelValue == "string" ? a.modelValue : ""), d = y(() => s.test(i.value));
    function u($) {
      const k = $.trim();
      if (k === "")
        return "";
      const S = k.startsWith("#") ? k : `#${k}`;
      return s.test(S) ? S.toLowerCase() : k;
    }
    function m($) {
      r("update:modelValue", u($.target.value));
    }
    const g = y(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : wa(i.value, a.field.contrastBackground)), p = y(() => a.field.contrastMinRatio ?? Gf), b = y(() => g.value !== null && g.value < p.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        Wf(i.value, a.field.contrastBackground, p.value)
      );
    }
    return ($, k) => (t(), n("div", Jf, [
      o("div", Yf, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: k[0] || (k[0] = (S) => r("update:modelValue", S.target.value))
        }, null, 40, Xf)) : (t(), n("span", Qf)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, em)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", tm, [
        (t(!0), n(P, null, V(e.field.presets, (S) => (t(), n("button", {
          key: S,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === S.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: S }),
          "aria-label": S,
          title: S,
          onClick: (h) => r("update:modelValue", S.toLowerCase())
        }, null, 14, am))), 128))
      ])) : w("", !0),
      b.value ? (t(), n("p", nm, [
        o("span", null, " This fails contrast at " + f(g.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : w("", !0)
    ]));
  }
}), om = ["aria-disabled"], sm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(null);
    let i = null, d = null, u = null;
    const m = y(() => {
      const C = a.modelValue?.[a.latKey], $ = a.modelValue?.[a.lngKey];
      return typeof C == "number" && typeof $ == "number" ? { lat: C, lng: $ } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function g() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = C, i = C.map(s.value).setView([m.value.lat, m.value.lng], a.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), b(), a.pickable && !a.disabled && i.on("click", ($) => {
        r("update:modelValue", {
          [a.latKey]: Number($.latlng.lat.toFixed(6)),
          [a.lngKey]: Number($.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !u))
        for (const C of a.markers) {
          const $ = u.circleMarker([C.lat, C.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (C.label || C.popup) && $.bindPopup(`<strong>${C.label ?? ""}</strong>${C.popup ? `<br>${C.popup}` : ""}`);
        }
    }
    function b() {
      if (!i || !u)
        return;
      const C = a.modelValue?.[a.latKey], $ = a.modelValue?.[a.lngKey];
      if (typeof C != "number" || typeof $ != "number") {
        d && (i.removeLayer(d), d = null);
        return;
      }
      d ? d.setLatLng([C, $]) : d = u.circleMarker([C, $], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([C, $], i.getZoom());
    }
    return pe(() => {
      g();
    }), ge(() => {
      i?.remove(), i = null, d = null;
    }), ue(
      () => a.modelValue,
      () => b(),
      { deep: !0 }
    ), (C, $) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: ne({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, om));
  }
}), rm = { class: "flex flex-col gap-2" }, im = { class: "text-muted-foreground text-xs" }, dm = /* @__PURE__ */ O({
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
    return (u, m) => (t(), n("div", rm, [
      F(sm, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": d.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": m[0] || (m[0] = (g) => r("update:modelValue", g))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", im, [
        U(" Click the map to set " + f(i.value) + " / " + f(d.value) + " ", 1),
        s.value ? (t(), n(P, { key: 0 }, [
          U(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : w("", !0)
      ])
    ]));
  }
}), um = { class: "flex flex-col gap-2" }, cm = ["width", "height"], fm = ["value", "disabled"], mm = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, pm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(null), i = y(() => {
      if (a.field.from) {
        const m = a.values?.[a.field.from];
        return m == null ? "" : String(m);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), d = y(() => a.field.size ?? 160);
    async function u() {
      if (!s.value)
        return;
      const m = i.value;
      if (m === "") {
        s.value.getContext("2d")?.clearRect(0, 0, d.value, d.value);
        return;
      }
      await (await import("qrcode")).toCanvas(s.value, m, {
        width: d.value,
        margin: 1,
        color: { dark: "#0f172a", light: "#ffffff" }
      });
    }
    return pe(() => {
      u();
    }), ue(i, () => {
      u();
    }), (m, g) => (t(), n("div", um, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, cm),
      e.field.from ? (t(), n("p", mm, "From " + f(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: g[0] || (g[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, fm))
    ]));
  }
}), vm = { class: "flex flex-col gap-2" }, gm = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, hm = ["aria-label"], bm = {
  key: 0,
  class: "text-destructive text-xs"
}, xm = ["value", "disabled"], ym = {
  key: 2,
  class: "text-muted-foreground text-xs"
}, km = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(null), i = q(null), d = y(() => {
      if (a.field.from) {
        const g = a.values?.[a.field.from];
        return g == null ? "" : String(g);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), u = y(() => (a.field.format ?? "CODE128").toUpperCase());
    async function m() {
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
    return pe(() => {
      m();
    }), ue([d, u], () => {
      m();
    }), (g, p) => (t(), n("div", vm, [
      o("div", gm, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, hm))
      ]),
      i.value ? (t(), n("p", bm, f(i.value), 1)) : w("", !0),
      e.field.from ? (t(), n("p", ym, "From " + f(e.field.from) + " (" + f(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (b) => r("update:modelValue", b.target.value))
      }, null, 40, xm))
    ]));
  }
}), $m = { class: "mr-2 inline-block w-3 opacity-60" }, wm = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Cm = /* @__PURE__ */ O({
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
`), m = Math.max(d.length, u.length), g = [];
      for (let p = 0; p < m; p++) {
        const b = d[p], C = u[p];
        if (b === C) {
          b !== void 0 && g.push({ kind: "same", text: b });
          continue;
        }
        b !== void 0 && g.push({ kind: "del", text: b }), C !== void 0 && g.push({ kind: "add", text: C });
      }
      return g;
    });
    return (d, u) => (t(), n("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: ne({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), n(P, null, V(i.value, (m, g) => (t(), n("div", {
        key: g,
        class: z(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": m.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": m.kind === "add",
          "text-muted-foreground": m.kind === "same"
        }])
      }, [
        o("span", $m, f(m.kind === "add" ? "+" : m.kind === "del" ? "-" : " "), 1),
        U(" " + f(m.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", wm, "No differences.")) : w("", !0)
    ], 4));
  }
}), Sm = { class: "flex flex-col gap-3" }, Mm = { class: "flex items-center justify-between gap-2" }, Bm = { class: "text-sm font-medium" }, _m = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Am = { class: "grid grid-cols-7 gap-1" }, Pm = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, zm = ["title"], W5 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = q(/* @__PURE__ */ new Date()), r = y(() => a.value.getFullYear()), s = y(() => a.value.getMonth()), i = y(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = y(() => {
      const p = /* @__PURE__ */ new Map();
      for (const b of l.events ?? []) {
        const C = p.get(b.date) ?? [];
        C.push(b), p.set(b.date, C);
      }
      return p;
    }), u = y(() => {
      const b = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), $ = [];
      for (let k = 0; k < b; k++)
        $.push({ day: null, key: `pad-${k}`, events: [] });
      for (let k = 1; k <= C; k++) {
        const S = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(k).padStart(2, "0")}`;
        $.push({ day: k, key: S, events: d.value.get(S) ?? [] });
      }
      return $;
    });
    function m() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function g() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, b) => (t(), n("div", Sm, [
      o("div", Mm, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: m
        }, " Prev "),
        o("p", Bm, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: g
        }, " Next ")
      ]),
      o("div", _m, [
        (t(), n(P, null, V(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", Am, [
        (t(!0), n(P, null, V(u.value, (C) => (t(), n("div", {
          key: C.key,
          class: z(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", Pm, f(C.day), 1)) : w("", !0),
          (t(!0), n(P, null, V(C.events.slice(0, 3), ($, k) => (t(), n("p", {
            key: `${C.key}-${k}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: $.label
          }, f($.label), 9, zm))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Om = { class: "flex items-center gap-3" }, jm = ["min", "max", "step", "value", "disabled", "aria-label"], Lm = { class: "flex shrink-0 items-center gap-1" }, Vm = ["min", "max", "step", "value", "disabled"], Tm = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Dm = /* @__PURE__ */ O({
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
      const p = Number(a.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), m = y(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function g(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const b = Number(p);
      r("update:modelValue", Number.isFinite(b) ? b : null);
    }
    return (p, b) => (t(), n("div", Om, [
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
      }, null, 40, jm),
      o("div", Lm, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: m.value ? "" : u.value,
          disabled: e.disabled,
          onInput: b[1] || (b[1] = (C) => g(C.target.value))
        }, null, 40, Vm),
        e.field.unit ? (t(), n("span", Tm, f(e.field.unit), 1)) : w("", !0)
      ])
    ]));
  }
}), et = /* @__PURE__ */ new Map();
function gt(e, l) {
  et.set(e, l);
}
function Fm(e) {
  return et.get(e);
}
function Z5(e) {
  return et.has(e);
}
function Em() {
  return [...et.keys()].sort();
}
function J5() {
  et.clear();
}
const Im = ["name", "value", "checked", "disabled", "onChange"], Nm = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Rm = { class: "whitespace-nowrap" }, Um = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Hm = ["name", "value", "checked", "disabled", "onChange"], Km = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, qm = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Gm = { class: "text-center text-xs font-medium" }, Wm = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Zm = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Jm = /* @__PURE__ */ O({
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
      () => a.field.preview ? Fm(a.field.preview) : void 0
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
    function m(g) {
      return a.modelValue != null && g.value == a.modelValue;
    }
    return (g, p) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(P, null, V(e.options, (b) => (t(), n("label", {
        key: String(b.value),
        class: z(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(b) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: m(b),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", b.value)
        }, null, 40, Im),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Nm, [
          (t(), T(ye(s.value), {
            value: b.value,
            label: b.label,
            selected: m(b)
          }, null, 8, ["value", "label", "selected"]))
        ])) : w("", !0),
        o("span", Rm, f(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Um, " Nothing to choose from yet. ")) : w("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", u.value])
    }, [
      (t(!0), n(P, null, V(e.options, (b) => (t(), n("label", {
        key: String(b.value),
        class: z(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(b) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: m(b),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", b.value)
        }, null, 40, Hm),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Km, [
          s.value ? (t(), T(ye(s.value), {
            key: 0,
            value: b.value,
            label: b.label,
            selected: m(b)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", qm, " no preview ")) : w("", !0)
        ]),
        o("span", Gm, f(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Wm, " Nothing to choose from yet. ")) : w("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Zm, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        U(". Registered: " + f(x(Em)().join(", ") || "none") + ". ", 1)
      ])) : w("", !0)
    ], 2));
  }
}), Ym = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Qm = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Ym, [
      o("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Xm = { class: "flex flex-col items-center gap-1 text-center" }, ep = {
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
    return (s, i) => (t(), n("div", Xm, [
      o("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", ep, f(e.caption), 1)) : w("", !0)
    ]));
  }
}), tp = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, ap = { class: "flex items-center gap-3" }, np = ["src"], lp = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, op = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, sp = {
  key: 0,
  class: "text-right text-sm"
}, rp = { class: "text-neutral-500" }, ip = { class: "tabular-nums" }, dp = { key: 1 }, up = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, cp = { class: "mt-2 font-medium" }, fp = { key: 2 }, mp = { class: "w-full text-sm" }, pp = { class: "w-full py-3 pr-2" }, vp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, gp = { key: 0 }, hp = ["colspan"], bp = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, xp = { class: "w-64 text-sm" }, yp = { class: "tabular-nums" }, kp = {
  key: 3,
  class: "py-2"
}, $p = { key: 4 }, wp = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Cp = { class: "mt-2 flex flex-col gap-1 text-sm" }, Sp = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Mp = { key: 0 }, Bp = {
  key: 1,
  class: "mt-1"
}, _p = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Ap = /* @__PURE__ */ O({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function a() {
      return l.document.branding.mono ? "#000000" : l.document.branding.accent;
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
    return (m, g) => (t(), n("article", tp, [
      o("div", ap, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, np)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(P, null, V(e.document.blocks, (p, b) => (t(), n(P, { key: b }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ne({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ne({ color: a() })
            }, f(p.title), 5),
            p.subtitle ? (t(), n("p", lp, f(p.subtitle), 1)) : w("", !0),
            p.reference ? (t(), n("p", op, f(p.reference), 1)) : w("", !0)
          ]),
          r(p).length ? (t(), n("dl", sp, [
            (t(!0), n(P, null, V(r(p), (C, $) => (t(), n("div", {
              key: $,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", rp, f(C.label), 1),
              o("dd", ip, f(C.value), 1)
            ]))), 128))
          ])) : w("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", dp, [
          o("h2", up, f(p.heading), 1),
          o("p", cp, f(p.name), 1),
          (t(!0), n(P, null, V(d(p.lines), (C, $) => (t(), n("p", {
            key: $,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", fp, [
          o("table", mp, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: a() })
              }, [
                (t(!0), n(P, null, V(d(p.columns), (C, $) => (t(), n("th", {
                  key: $,
                  class: z(["pb-2 font-medium", $ > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(P, null, V(s(p), (C, $) => (t(), n("tr", {
                key: $,
                class: "border-b border-neutral-200"
              }, [
                o("td", pp, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), n("p", vp, f(C.detail), 1)) : w("", !0)
                ]),
                (t(!0), n(P, null, V(C.cells, (k, S) => (t(), n("td", {
                  key: S,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(k), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", gp, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, hp)
              ])) : w("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", bp, [
            o("dl", xp, [
              (t(!0), n(P, null, V(i(p), (C, $) => (t(), n("div", {
                key: $,
                class: z([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: z(C.strong ? "" : "text-neutral-600")
                }, f(C.label), 3),
                o("dd", yp, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : w("", !0)
        ])) : p.type === "code" ? (t(), n("section", kp, [
          F(Ca, {
            code: u(p.code),
            caption: u(p.caption),
            style: ne(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", $p, [
          o("h2", wp, f(p.heading), 1),
          o("ol", Cp, [
            (t(!0), n(P, null, V(d(p.items), (C, $) => (t(), n("li", {
              key: $,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ne({ color: a() })
              }, f($ + 1) + ".", 5),
              o("span", null, f(C), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: z(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: a() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), n("footer", Sp, [
          p.text ? (t(), n("p", Mp, f(p.text), 1)) : w("", !0),
          d(p.contacts).length ? (t(), n("p", Bp, f(d(p.contacts).join(" · ")), 1)) : w("", !0)
        ])) : (t(), n("p", _p, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Pp = ["aria-label", "title"], zp = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Op = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, Y5 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = ha(), r = y(() => l.value.theme === "dark");
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
      (t(), n("svg", zp, [
        r.value ? (t(), n(P, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", Op))
      ]))
    ], 8, Pp));
  }
}), jp = ["width", "height"], Lp = { key: 0 }, Vp = ["x1", "x2", "y1", "y2"], Tp = ["x", "y"], Dp = ["x1", "x2", "y1", "y2"], Fp = ["x", "y"], Ep = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Ip = ["x", "y", "width", "height", "fill", "fill-opacity"], Np = ["x", "y"], Rp = ["x", "y"], Up = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Hp = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Kp = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, qp = { class: "text-xs font-semibold tabular-nums" }, Gp = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Wp = { class: "text-muted-foreground" }, Xt = 5.6, Q5 = /* @__PURE__ */ O({
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
    function s(B, N) {
      if (!l.thresholds?.length)
        return N;
      const L = l.thresholds.find((Q) => B < Q.max);
      return r(L ? L.color : l.aboveColor);
    }
    const i = q(null), d = q(560), u = q(null);
    let m = null;
    pe(() => {
      m = new ResizeObserver((B) => {
        d.value = Math.max(160, B[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), ge(() => m?.disconnect());
    const g = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? g[L % g.length]
    }))), b = y(() => p.value[0]?.points.map((B) => B.label) ?? []), C = y(() => b.value.length), $ = y(() => l.orientation === "horizontal"), k = y(() => Math.max(0, ...b.value.map((B) => B.length))), S = y(() => {
      if (!$.value)
        return l.showAxis ? 44 : 8;
      const B = k.value * Xt + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), h = y(() => Math.max(4, Math.floor((S.value - 16) / Xt)));
    function v(B) {
      return B.length <= h.value ? B : `${B.slice(0, h.value - 1)}…`;
    }
    const c = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: S.value
    })), M = y(() => ({
      w: Math.max(1, d.value - c.value.left - c.value.right),
      h: Math.max(1, l.height - c.value.top - c.value.bottom)
    })), _ = (B) => l.format ? l.format(B) : A(B);
    function A(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const R = y(() => {
      const B = b.value.map(
        (fe, G) => l.stacked ? p.value.reduce((D, I) => D + Math.max(0, I.points[G]?.value ?? 0), 0) : Math.max(...p.value.map((D) => D.points[G]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const N = Math.max(...B, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((fe) => N <= fe * L) ?? 10) * L;
    }), E = y(
      () => ($.value ? M.value.h : M.value.w) / Math.max(1, C.value)
    ), ee = y(() => E.value * 0.68), H = y(
      () => l.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), W = y(() => {
      const B = [], N = new Array(C.value).fill(0);
      return p.value.forEach((L, Q) => {
        L.points.forEach((fe, G) => {
          const I = Math.max(0, fe.value) / R.value * ($.value ? M.value.w : M.value.h), oe = ($.value ? c.value.top : c.value.left) + G * E.value + (E.value - ee.value) / 2, re = l.stacked ? 0 : Q * H.value;
          B.push(
            $.value ? {
              x: c.value.left + N[G],
              y: oe + re,
              w: I,
              h: Math.max(0, H.value - 2),
              color: s(fe.value, L.color),
              label: fe.label,
              name: L.name,
              value: fe.value,
              index: G
            } : {
              x: oe + re,
              y: c.value.top + M.value.h - I - N[G],
              w: Math.max(0, H.value - 2),
              h: I,
              color: s(fe.value, L.color),
              label: fe.label,
              name: L.name,
              value: fe.value,
              index: G
            }
          ), l.stacked && (N[G] += I);
        });
      }), B;
    }), J = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: R.value * ($.value ? B : 1 - B),
        x: c.value.left + M.value.w * B,
        y: c.value.top + M.value.h * B
      }))
    ), ae = y(() => Math.max(1, Math.ceil(C.value / ($.value ? 14 : 10))));
    function te(B) {
      return B === C.value - 1 || B % ae.value === 0;
    }
    function Y(B) {
      return ($.value ? c.value.top : c.value.left) + B * E.value + E.value / 2;
    }
    const Z = y(() => u.value === null ? null : {
      label: b.value[u.value],
      rows: p.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[u.value]?.value ?? 0
      }))
    });
    return (B, N) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      C.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: N[0] || (N[0] = (L) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", Lp, [
            $.value ? (t(), n(P, { key: 0 }, [
              (t(!0), n(P, null, V(J.value, (L) => (t(), n("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: c.value.top,
                y2: c.value.top + M.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Vp))), 128)),
              (t(!0), n(P, null, V(J.value, (L) => (t(), n("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(L.value)), 9, Tp))), 128))
            ], 64)) : (t(), n(P, { key: 1 }, [
              (t(!0), n(P, null, V(J.value, (L) => (t(), n("line", {
                key: `g-${L.y}`,
                x1: c.value.left,
                x2: d.value - c.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Dp))), 128)),
              (t(!0), n(P, null, V(J.value, (L) => (t(), n("text", {
                key: `gt-${L.y}`,
                x: c.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(L.value)), 9, Fp))), 128))
            ], 64))
          ])) : w("", !0),
          (t(!0), n(P, null, V(b.value, (L, Q) => (t(), n("rect", {
            key: `hit-${Q}`,
            x: $.value ? c.value.left : c.value.left + Q * E.value,
            y: $.value ? c.value.top + Q * E.value : c.value.top,
            width: $.value ? M.value.w : E.value,
            height: $.value ? E.value : M.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === Q ? 0.4 : 0,
            onMouseenter: (fe) => u.value = Q
          }, null, 40, Ep))), 128)),
          (t(!0), n(P, null, V(W.value, (L, Q) => (t(), n("rect", {
            key: `b-${Q}`,
            x: L.x,
            y: L.y,
            width: L.w,
            height: L.h,
            fill: L.color,
            "fill-opacity": u.value === null || u.value === L.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Ip))), 128)),
          $.value ? (t(!0), n(P, { key: 1 }, V(b.value, (L, Q) => ce((t(), n("text", {
            key: `c-${Q}`,
            x: c.value.left - 8,
            y: Y(Q) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(f(v(L)) + " ", 1),
            o("title", null, f(L), 1)
          ], 8, Np)), [
            [Te, te(Q)]
          ])), 128)) : (t(!0), n(P, { key: 2 }, V(b.value, (L, Q) => ce((t(), n("text", {
            key: `c-${Q}`,
            x: Y(Q),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, Rp)), [
            [Te, te(Q)]
          ])), 128))
        ], 40, jp)),
        Z.value ? (t(), n("div", Up, [
          o("p", Hp, f(Z.value.label), 1),
          (t(!0), n(P, null, V(Z.value.rows, (L, Q) => (t(), n("div", {
            key: Q,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            o("span", Kp, f(L.name || "Value"), 1),
            o("span", qp, f(_(L.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", Gp, [
          (t(!0), n(P, null, V(p.value, (L, Q) => (t(), n("span", {
            key: Q,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            o("span", Wp, f(L.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Zp = ["width", "height"], Jp = ["id"], Yp = ["stop-color"], Qp = ["stop-color"], Xp = { key: 0 }, ev = ["x1", "x2", "y1", "y2"], tv = ["x", "y"], av = ["x", "y"], nv = ["x1", "x2", "y1", "y2"], lv = ["d", "fill"], ov = ["d", "stroke", "stroke-dasharray"], sv = ["cx", "cy", "fill"], rv = { key: 1 }, iv = ["x1", "x2", "y1", "y2"], dv = ["cx", "cy", "fill"], uv = ["x", "y"], cv = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, fv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, mv = { class: "text-xs font-semibold tabular-nums" }, pv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, vv = { class: "text-muted-foreground" }, gv = /* @__PURE__ */ O({
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
    const l = e, a = y(() => g.value.some((B) => B.axis === "right")), r = q(null), s = q(560), i = q(null);
    let d = null;
    pe(() => {
      d = new ResizeObserver((B) => {
        s.value = Math.max(160, B[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), ge(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = Math.random().toString(36).slice(2, 9), g = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? u[L % u.length]
    }))), p = y(() => g.value[0]?.points.map((B) => B.label) ?? []), b = y(() => p.value.length), C = y(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), $ = (B) => l.format ? l.format(B) : k(B);
    function k(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function S(B) {
      const N = Math.max(...B, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((fe) => N <= fe * L) ?? 10) * L;
    }
    const h = y(
      () => S(
        g.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((N) => N.value))
      )
    ), v = y(
      () => S(
        g.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((N) => N.value))
      )
    ), c = y(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function M(B) {
      return C.value.left + (b.value <= 1 ? 0 : B / (b.value - 1) * c.value.w);
    }
    function _(B, N = "left") {
      const L = N === "right" ? v.value : h.value;
      return C.value.top + c.value.h - B / L * c.value.h;
    }
    const A = y(
      () => g.value.map((B) => {
        const N = B.points.map((Q, fe) => ({
          ...Q,
          x: M(fe),
          y: _(Q.value, B.axis ?? "left")
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
      const L = [], Q = [];
      for (let D = 0; D < N - 1; D++)
        L[D] = B[D + 1].x - B[D].x, Q[D] = L[D] === 0 ? 0 : (B[D + 1].y - B[D].y) / L[D];
      const fe = [Q[0]];
      for (let D = 1; D < N - 1; D++)
        if (Q[D - 1] * Q[D] <= 0)
          fe[D] = 0;
        else {
          const I = 2 * L[D] + L[D - 1], oe = L[D] + 2 * L[D - 1];
          fe[D] = (I + oe) / (I / Q[D - 1] + oe / Q[D]);
        }
      fe[N - 1] = Q[N - 2];
      let G = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let D = 0; D < N - 1; D++) {
        const I = L[D] / 3;
        G += ` C${(B[D].x + I).toFixed(2)},${(B[D].y + fe[D] * I).toFixed(2)} ${(B[D + 1].x - I).toFixed(2)},${(B[D + 1].y - fe[D + 1] * I).toFixed(2)} ${B[D + 1].x.toFixed(2)},${B[D + 1].y.toFixed(2)}`;
      }
      return G;
    }
    function ee(B, N) {
      if (N.length === 0)
        return "";
      const L = C.value.top + c.value.h;
      return `${B} L${N[N.length - 1].x.toFixed(2)},${L} L${N[0].x.toFixed(2)},${L} Z`;
    }
    const H = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: C.value.top + c.value.h * B,
        value: h.value * (1 - B)
      }))
    ), W = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: C.value.top + c.value.h * B,
        value: v.value * (1 - B)
      }))
    ), J = y(() => Math.max(1, Math.ceil(b.value / 8)));
    function ae(B) {
      return B === b.value - 1 || B % J.value === 0;
    }
    function te(B) {
      const N = B.currentTarget.getBoundingClientRect(), L = B.clientX - N.left - C.value.left, Q = b.value <= 1 ? 1 : c.value.w / (b.value - 1);
      i.value = Math.min(b.value - 1, Math.max(0, Math.round(L / Q)));
    }
    const Y = y(() => {
      if (i.value === null || b.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: M(B),
        label: p.value[B],
        rows: A.value.map((N) => ({
          name: N.name,
          color: N.color,
          value: N.points[B]?.value ?? 0,
          y: N.pts[B]?.y ?? 0
        }))
      };
    }), Z = y(() => {
      if (!Y.value)
        return {};
      const B = Y.value.x > s.value * 0.6;
      return {
        left: `${Y.value.x}px`,
        top: "8px",
        transform: B ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (B, N) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      b.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: te,
          onMouseleave: N[0] || (N[0] = (L) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(P, null, V(A.value, (L, Q) => (t(), n("linearGradient", {
              id: `pk-fill-${x(m)}-${Q}`,
              key: Q,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": L.color,
                "stop-opacity": "0.25"
              }, null, 8, Yp),
              o("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, Qp)
            ], 8, Jp))), 128))
          ]),
          e.showAxis ? (t(), n("g", Xp, [
            (t(!0), n(P, null, V(H.value, (L) => (t(), n("line", {
              key: L.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, ev))), 128)),
            (t(!0), n(P, null, V(H.value, (L) => (t(), n("text", {
              key: `t-${L.y}`,
              x: C.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(L.value)), 9, tv))), 128)),
            a.value ? (t(!0), n(P, { key: 0 }, V(W.value, (L) => (t(), n("text", {
              key: `rt-${L.y}`,
              x: s.value - C.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(L.value)), 9, av))), 128)) : w("", !0)
          ])) : w("", !0),
          (t(!0), n(P, null, V(p.value, (L, Q) => ce((t(), n("line", {
            key: `v-${Q}`,
            x1: M(Q),
            x2: M(Q),
            y1: C.value.top,
            y2: C.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, nv)), [
            [Te, ae(Q)]
          ])), 128)),
          (t(!0), n(P, null, V(A.value, (L, Q) => (t(), n("g", {
            key: `s-${Q}`
          }, [
            L.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${x(m)}-${Q})`
            }, null, 8, lv)) : w("", !0),
            o("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, ov),
            L.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, sv)) : w("", !0)
          ]))), 128)),
          Y.value ? (t(), n("g", rv, [
            o("line", {
              x1: Y.value.x,
              x2: Y.value.x,
              y1: C.value.top,
              y2: C.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, iv),
            (t(!0), n(P, null, V(Y.value.rows, (L, Q) => (t(), n("circle", {
              key: `d-${Q}`,
              cx: Y.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, dv))), 128))
          ])) : w("", !0),
          (t(!0), n(P, null, V(p.value, (L, Q) => ce((t(), n("text", {
            key: `x-${Q}`,
            x: M(Q),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, uv)), [
            [Te, ae(Q)]
          ])), 128))
        ], 40, Zp)),
        Y.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(Z.value)
        }, [
          o("p", cv, f(Y.value.label), 1),
          (t(!0), n(P, null, V(Y.value.rows, (L, Q) => (t(), n("div", {
            key: Q,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            o("span", fv, f(L.name || "Value"), 1),
            o("span", mv, f($(L.value)), 1)
          ]))), 128))
        ], 4)) : w("", !0),
        e.showLegend && g.value.length > 1 ? (t(), n("div", pv, [
          (t(!0), n(P, null, V(A.value, (L, Q) => (t(), n("span", {
            key: Q,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            o("span", vv, f(L.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), hv = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, bv = { class: "text-muted-foreground text-[11px] capitalize" }, xv = { class: "text-sm font-semibold tabular-nums" }, yv = {
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
    return (l, a) => (t(), n("div", hv, [
      o("p", bv, f(e.label), 1),
      o("p", xv, [
        U(f(e.value) + " ", 1),
        e.share ? (t(), n("span", yv, " (" + f(e.share) + ") ", 1)) : w("", !0)
      ])
    ]));
  }
}), kv = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, $v = ["width", "height", "viewBox", "aria-label"], wv = ["d", "fill", "fill-opacity", "onMouseenter"], Cv = ["x", "y"], Sv = ["x", "y"], Mv = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Bv = ["onMouseenter"], _v = { class: "min-w-0 flex-1 truncate capitalize" }, Av = { class: "tabular-nums font-medium" }, Pv = { class: "text-muted-foreground w-9 text-right tabular-nums" }, X5 = /* @__PURE__ */ O({
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
    ], r = y(() => l.data.reduce((h, v) => h + v.value, 0)), s = q(null), i = y(() => l.height), d = y(() => i.value / 2 - 4), u = y(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function m(h) {
      return a[h % a.length];
    }
    function g(h) {
      return 1 - Math.min(0.55, Math.floor(h / a.length) * 0.28);
    }
    const p = y(() => {
      if (r.value <= 0)
        return [];
      const h = i.value / 2;
      let v = -Math.PI / 2;
      return l.data.map((c, M) => {
        const _ = c.value / r.value, A = _ * Math.PI * 2, R = v, E = v + A;
        return v = E, {
          ...c,
          share: _,
          colour: m(M),
          opacity: g(M),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: _ >= 0.9999 ? $(h) : C(h, R, E, d.value, u.value)
        };
      });
    });
    function b(h, v, c) {
      return `${(h + Math.cos(v) * c).toFixed(2)},${(h + Math.sin(v) * c).toFixed(2)}`;
    }
    function C(h, v, c, M, _) {
      const A = c - v > Math.PI ? 1 : 0;
      return _ <= 0 ? `M${h},${h} L${b(h, v, M)} A${M},${M} 0 ${A} 1 ${b(h, c, M)} Z` : [
        `M${b(h, v, M)}`,
        `A${M},${M} 0 ${A} 1 ${b(h, c, M)}`,
        `L${b(h, c, _)}`,
        `A${_},${_} 0 ${A} 0 ${b(h, v, _)}`,
        "Z"
      ].join(" ");
    }
    function $(h) {
      const v = d.value, c = u.value, M = [
        `M${h - v},${h}`,
        `A${v},${v} 0 1 1 ${h + v},${h}`,
        `A${v},${v} 0 1 1 ${h - v},${h}`,
        "Z"
      ];
      return c <= 0 ? M.join(" ") : [
        ...M,
        `M${h - c},${h}`,
        `A${c},${c} 0 1 0 ${h + c},${h}`,
        `A${c},${c} 0 1 0 ${h - c},${h}`,
        "Z"
      ].join(" ");
    }
    const k = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h), S = (h) => `${(h * 100).toFixed(h < 0.01 ? 2 : 0)}%`;
    return (h, v) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", kv, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${k(r.value)}`
      }, [
        (t(!0), n(P, null, V(p.value, (c, M) => (t(), n("path", {
          key: M,
          d: c.path,
          fill: c.colour,
          "fill-opacity": s.value === null || s.value === M ? c.opacity : c.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (_) => s.value = M,
          onMouseleave: v[0] || (v[0] = (_) => s.value = null)
        }, null, 40, wv))), 128)),
        e.type === "doughnut" ? (t(), n(P, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(k(s.value === null ? r.value : p.value[s.value].value)), 9, Cv),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Sv)
        ], 64)) : w("", !0)
      ], 8, $v)),
      o("ul", Mv, [
        (t(!0), n(P, null, V(p.value, (c, M) => (t(), n("li", {
          key: M,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === M ? "bg-muted" : ""]),
          onMouseenter: (_) => s.value = M,
          onMouseleave: v[1] || (v[1] = (_) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          o("span", _v, f(c.label), 1),
          o("span", Av, f(k(c.value)), 1),
          o("span", Pv, f(S(c.share)), 1)
        ], 42, Bv))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(tt, {
        key: 0,
        label: p.value[s.value].label,
        value: k(p.value[s.value].value),
        share: S(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), zv = ["width", "height", "viewBox", "aria-label"], Ov = { class: "text-border" }, jv = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Lv = { class: "fill-muted-foreground text-[10px]" }, Vv = ["x", "y"], Tv = ["x", "y"], Dv = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Fv = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, e3 = /* @__PURE__ */ O({
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
    ], r = q(null), s = q(560), i = q(null);
    let d = null;
    pe(() => {
      d = new ResizeObserver((J) => {
        const ae = J[0]?.contentRect.width ?? 0;
        ae > 0 && (s.value = ae);
      }), r.value && d.observe(r.value);
    }), ge(() => d?.disconnect());
    const u = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), m = (J, ae) => ae.color ?? a[J % a.length], g = y(() => u.value.flatMap((J) => J.points)), p = y(() => g.value.some((J) => typeof J.r == "number")), b = { top: 12, right: 16, bottom: 32, left: 48 }, C = y(() => Math.max(10, s.value - b.left - b.right)), $ = y(() => Math.max(10, l.height - b.top - b.bottom));
    function k(J) {
      if (J.length === 0)
        return [0, 1];
      const ae = Math.min(...J), te = Math.max(...J), Y = te - ae || Math.abs(te) || 1;
      return [ae - Y * 0.08, te + Y * 0.08];
    }
    const S = y(() => k(g.value.map((J) => J.x))), h = y(() => k(g.value.map((J) => J.y))), v = (J) => {
      const [ae, te] = S.value;
      return b.left + (J - ae) / (te - ae) * C.value;
    }, c = (J) => {
      const [ae, te] = h.value;
      return b.top + $.value - (J - ae) / (te - ae) * $.value;
    }, M = y(() => Math.max(...g.value.map((J) => J.r ?? 0), 0));
    function _(J) {
      if (!p.value || !M.value)
        return 4;
      const ae = Math.max(0, J.r ?? 0) / M.value;
      return 3 + Math.sqrt(ae) * (l.maxRadius - 3);
    }
    function A([J, ae]) {
      return Array.from({ length: 5 }, (te, Y) => J + (ae - J) / 4 * Y);
    }
    const R = y(() => A(S.value)), E = y(() => A(h.value)), ee = (J) => l.formatX?.(J) ?? String(Math.round(J * 100) / 100), H = (J) => l.formatY?.(J) ?? String(Math.round(J * 100) / 100), W = y(() => {
      if (!i.value)
        return null;
      const J = u.value[i.value.s], ae = J?.points[i.value.p];
      return ae ? { series: J, point: ae } : null;
    });
    return (J, ae) => (t(), n("div", {
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
        o("g", Ov, [
          (t(!0), n(P, null, V(E.value, (te, Y) => (t(), n("line", {
            key: `gy-${Y}`,
            x1: b.left,
            x2: b.left + C.value,
            y1: c(te),
            y2: c(te),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Y === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, jv))), 128))
        ]),
        o("g", Lv, [
          (t(!0), n(P, null, V(E.value, (te, Y) => (t(), n("text", {
            key: `ty-${Y}`,
            x: b.left - 8,
            y: c(te) + 3,
            "text-anchor": "end"
          }, f(H(te)), 9, Vv))), 128)),
          (t(!0), n(P, null, V(R.value, (te, Y) => (t(), n("text", {
            key: `tx-${Y}`,
            x: v(te),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ee(te)), 9, Tv))), 128))
        ]),
        (t(!0), n(P, null, V(u.value, (te, Y) => (t(), n("g", {
          key: `s-${Y}`
        }, [
          (t(!0), n(P, null, V(te.points, (Z, B) => (t(), n("circle", {
            key: `p-${Y}-${B}`,
            cx: v(Z.x),
            cy: c(Z.y),
            r: _(Z),
            fill: m(Y, te),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(Y, te),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Y || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (N) => i.value = { s: Y, p: B },
            onMouseleave: ae[0] || (ae[0] = (N) => i.value = null)
          }, null, 40, Dv))), 128))
        ]))), 128))
      ], 8, zv)),
      W.value ? (t(), T(tt, {
        key: 0,
        label: W.value.point.label ?? W.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(W.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(W.value.point.y)}`,
        share: p.value && W.value.point.r != null ? String(W.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : w("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", Fv, [
        (t(!0), n(P, null, V(u.value, (te, Y) => (t(), n("span", {
          key: `l-${Y}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: m(Y, te) }),
            "aria-hidden": "true"
          }, null, 4),
          U(" " + f(te.name), 1)
        ]))), 128))
      ])) : w("", !0)
    ], 512));
  }
}), Ev = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Iv = ["width", "height", "viewBox"], Nv = ["points"], Rv = ["x1", "y1", "x2", "y2"], Uv = ["points", "fill", "stroke"], Hv = ["cx", "cy", "fill", "onMouseenter"], Kv = ["x", "y", "text-anchor"], qv = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Gv = { class: "truncate" }, t3 = /* @__PURE__ */ O({
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
      () => l.series.map((c, M) => ({
        ...c,
        color: c.color ?? a[M % a.length]
      }))
    ), s = y(() => r.value[0]?.points.map((c) => c.label) ?? []), i = y(() => s.value.length), d = y(() => l.height), u = y(() => d.value / 2), m = y(() => d.value / 2 - 34), g = y(() => {
      const c = Math.max(...r.value.flatMap((A) => A.points.map((R) => R.value)), 0);
      if (c <= 0)
        return 1;
      const M = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((A) => c <= A * M) ?? 10) * M;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function b(c, M) {
      const _ = p(c);
      return {
        x: u.value + Math.cos(_) * m.value * M,
        y: u.value + Math.sin(_) * m.value * M
      };
    }
    function C(c) {
      return Array.from({ length: i.value }, (M, _) => {
        const A = b(_, c);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const $ = y(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: C(c) }))), k = y(
      () => r.value.map((c) => {
        const M = c.points.map((_) => Math.max(0, _.value) / g.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: M.map((_, A) => {
            const R = b(A, _);
            return `${R.x.toFixed(2)},${R.y.toFixed(2)}`;
          }).join(" "),
          dots: M.map((_, A) => b(A, _))
        };
      })
    ), S = y(
      () => s.value.map((c, M) => {
        const _ = p(M), A = u.value + Math.cos(_) * (m.value + 14), R = u.value + Math.sin(_) * (m.value + 14), E = Math.cos(_);
        return {
          label: c,
          x: A,
          y: R + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), h = q(null), v = (c) => l.format ? l.format(c) : new Intl.NumberFormat().format(c);
    return (c, M) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Ev, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(P, null, V($.value, (_) => (t(), n("polygon", {
          key: _.f,
          points: _.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Nv))), 128)),
        (t(!0), n(P, null, V(s.value, (_, A) => (t(), n("line", {
          key: `spoke-${A}`,
          x1: u.value,
          y1: u.value,
          x2: b(A, 1).x,
          y2: b(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Rv))), 128)),
        (t(!0), n(P, null, V(k.value, (_, A) => (t(), n("g", {
          key: `s-${A}`
        }, [
          o("polygon", {
            points: _.outline,
            fill: _.color,
            "fill-opacity": "0.16",
            stroke: _.color,
            "stroke-width": "2"
          }, null, 8, Uv),
          (t(!0), n(P, null, V(_.dots, (R, E) => (t(), n("circle", {
            key: E,
            cx: R.x,
            cy: R.y,
            r: "3",
            fill: _.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => h.value = {
              series: _.name,
              axis: s.value[E],
              value: _.values[E]?.value ?? 0
            },
            onMouseleave: M[0] || (M[0] = (ee) => h.value = null)
          }, null, 40, Hv))), 128))
        ]))), 128)),
        (t(!0), n(P, null, V(S.value, (_, A) => (t(), n("text", {
          key: `l-${A}`,
          x: _.x,
          y: _.y,
          "text-anchor": _.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(_.label), 9, Kv))), 128))
      ], 8, Iv)),
      e.showLegend ? (t(), n("ul", qv, [
        (t(!0), n(P, null, V(r.value, (_, A) => (t(), n("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: _.color })
          }, null, 4),
          o("span", Gv, f(_.name), 1)
        ]))), 128))
      ])) : w("", !0),
      h.value ? (t(), T(tt, {
        key: 1,
        label: `${h.value.series} — ${h.value.axis}`,
        value: v(h.value.value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), Wv = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Zv = ["width", "height", "viewBox"], Jv = ["cx", "cy", "r"], Yv = ["d", "fill", "fill-opacity", "onMouseenter"], Qv = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Xv = { class: "min-w-0 flex-1 truncate capitalize" }, eg = { class: "font-medium tabular-nums" }, a3 = /* @__PURE__ */ O({
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
    ], r = q(null), s = y(() => l.height), i = y(() => s.value / 2), d = y(() => s.value / 2 - 6), u = y(() => Math.max(...l.data.map((C) => Math.max(0, C.value)), 0)), m = y(() => {
      const C = l.data.length;
      if (C === 0 || u.value <= 0)
        return [];
      const $ = Math.PI * 2 / C;
      return l.data.map((k, S) => {
        const h = Math.sqrt(Math.max(0, k.value) / u.value), v = d.value * h, c = S * $ - Math.PI / 2, M = c + $;
        return {
          ...k,
          color: a[S % a.length],
          share: u.value === 0 ? 0 : k.value / u.value,
          path: g(i.value, c, M, v)
        };
      });
    });
    function g(C, $, k, S) {
      if (S <= 0)
        return "";
      if (k - $ >= Math.PI * 2 - 1e-6)
        return `M${C - S},${C} A${S},${S} 0 1 1 ${C + S},${C} A${S},${S} 0 1 1 ${C - S},${C} Z`;
      const h = k - $ > Math.PI ? 1 : 0, v = C + Math.cos($) * S, c = C + Math.sin($) * S, M = C + Math.cos(k) * S, _ = C + Math.sin(k) * S;
      return `M${C},${C} L${v.toFixed(2)},${c.toFixed(2)} A${S.toFixed(2)},${S.toFixed(2)} 0 ${h} 1 ${M.toFixed(2)},${_.toFixed(2)} Z`;
    }
    const p = y(() => [0.5, 0.75, 1].map((C) => d.value * C)), b = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, $) => m.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Wv, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(P, null, V(p.value, (k) => (t(), n("circle", {
          key: k,
          cx: i.value,
          cy: i.value,
          r: k,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Jv))), 128)),
        (t(!0), n(P, null, V(m.value, (k, S) => (t(), n("path", {
          key: S,
          d: k.path,
          fill: k.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === S ? 0.75 : 0.3,
          onMouseenter: (h) => r.value = S,
          onMouseleave: $[0] || ($[0] = (h) => r.value = null)
        }, null, 40, Yv))), 128))
      ], 8, Zv)),
      e.showLegend ? (t(), n("ul", Qv, [
        (t(!0), n(P, null, V(m.value, (k, S) => (t(), n("li", {
          key: S,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: k.color })
          }, null, 4),
          o("span", Xv, f(k.label), 1),
          o("span", eg, f(b(k.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      r.value !== null ? (t(), T(tt, {
        key: 1,
        label: m.value[r.value].label,
        value: b(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), tg = ["width", "height"], ag = ["x1", "x2", "y1", "y2"], ng = ["x", "y"], lg = ["x", "y"], og = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], sg = ["x", "y", "width", "height", "fill", "fill-opacity"], rg = ["d", "stroke"], ig = ["cx", "cy", "fill"], dg = ["x", "y"], ug = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, cg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, fg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, mg = { class: "text-xs font-semibold tabular-nums" }, pg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, vg = { class: "text-muted-foreground" }, n3 = /* @__PURE__ */ O({
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
    const l = e, a = q(null), r = q(560), s = q(null);
    let i = null;
    pe(() => {
      i = new ResizeObserver((Y) => {
        r.value = Math.max(160, Y[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ge(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], m = y(
      () => l.bars.map((Y, Z) => ({
        ...Y,
        color: Y.color ?? d[Z % d.length]
      }))
    ), g = y(
      () => l.lines.map((Y, Z) => ({
        ...Y,
        color: Y.color ?? u[Z % u.length]
      }))
    ), p = y(
      () => m.value[0]?.points.map((Y) => Y.label) ?? g.value[0]?.points.map((Y) => Y.label) ?? []
    ), b = y(() => p.value.length), C = y(() => l.lineAxis === "right"), $ = y(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), k = y(() => ({
      w: Math.max(1, r.value - $.value.left - $.value.right),
      h: Math.max(1, l.height - $.value.top - $.value.bottom)
    }));
    function S(Y) {
      const Z = Math.max(...Y, 0);
      if (Z <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((L) => Z <= L * B) ?? 10) * B;
    }
    const h = y(
      () => S([
        ...m.value.flatMap((Y) => Y.points.map((Z) => Z.value)),
        ...C.value ? [] : g.value.flatMap((Y) => Y.points.map((Z) => Z.value))
      ])
    ), v = y(
      () => C.value ? S(g.value.flatMap((Y) => Y.points.map((Z) => Z.value))) : h.value
    ), c = y(() => k.value.w / Math.max(1, b.value)), M = y(() => c.value * 0.6), _ = y(() => M.value / Math.max(1, m.value.length));
    function A(Y) {
      return $.value.left + Y * c.value + c.value / 2;
    }
    const R = y(
      () => m.value.flatMap(
        (Y, Z) => Y.points.map((B, N) => {
          const L = Math.max(0, B.value) / h.value * k.value.h;
          return {
            x: A(N) - M.value / 2 + Z * _.value,
            y: $.value.top + k.value.h - L,
            w: Math.max(0, _.value - 2),
            h: L,
            color: Y.color,
            index: N,
            name: Y.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), E = y(
      () => g.value.map((Y) => {
        const Z = Y.points.map((B, N) => ({
          x: A(N),
          y: $.value.top + k.value.h - Math.max(0, B.value) / v.value * k.value.h,
          value: B.value
        }));
        return {
          ...Y,
          pts: Z,
          d: Z.map((B, N) => `${N === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((Y) => ({
        y: $.value.top + k.value.h * Y,
        left: h.value * (1 - Y),
        right: v.value * (1 - Y)
      }))
    ), H = y(() => Math.max(1, Math.ceil(b.value / 10)));
    function W(Y) {
      return Y === b.value - 1 || Y % H.value === 0;
    }
    const J = (Y) => l.format ? l.format(Y) : ae(Y);
    function ae(Y) {
      return Math.abs(Y) >= 1e6 ? `${(Y / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(Y) >= 1e3 ? `${(Y / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(Y * 100) / 100);
    }
    const te = y(() => {
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
          ...g.value.map((Z) => ({
            name: Z.name,
            color: Z.color,
            value: Z.points[Y]?.value ?? 0
          }))
        ]
      };
    });
    return (Y, Z) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      b.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Z[0] || (Z[0] = (B) => s.value = null)
        }, [
          (t(!0), n(P, null, V(ee.value, (B) => (t(), n("line", {
            key: `g-${B.y}`,
            x1: $.value.left,
            x2: r.value - $.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, ag))), 128)),
          (t(!0), n(P, null, V(ee.value, (B) => (t(), n("text", {
            key: `lt-${B.y}`,
            x: $.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(B.left)), 9, ng))), 128)),
          C.value ? (t(!0), n(P, { key: 0 }, V(ee.value, (B) => (t(), n("text", {
            key: `rt-${B.y}`,
            x: r.value - $.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(B.right)), 9, lg))), 128)) : w("", !0),
          (t(!0), n(P, null, V(p.value, (B, N) => (t(), n("rect", {
            key: `hit-${N}`,
            x: $.value.left + N * c.value,
            y: $.value.top,
            width: c.value,
            height: k.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === N ? 0.4 : 0,
            onMouseenter: (L) => s.value = N
          }, null, 40, og))), 128)),
          (t(!0), n(P, null, V(R.value, (B, N) => (t(), n("rect", {
            key: `b-${N}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, sg))), 128)),
          (t(!0), n(P, null, V(E.value, (B, N) => (t(), n("g", {
            key: `l-${N}`
          }, [
            o("path", {
              d: B.d,
              fill: "none",
              stroke: B.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, rg),
            s.value !== null && B.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, ig)) : w("", !0)
          ]))), 128)),
          (t(!0), n(P, null, V(p.value, (B, N) => ce((t(), n("text", {
            key: `x-${N}`,
            x: A(N),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(B), 9, dg)), [
            [Te, W(N)]
          ])), 128))
        ], 40, tg)),
        te.value ? (t(), n("div", ug, [
          o("p", cg, f(te.value.label), 1),
          (t(!0), n(P, null, V(te.value.rows, (B, N) => (t(), n("div", {
            key: N,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            o("span", fg, f(B.name), 1),
            o("span", mg, f(J(B.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend ? (t(), n("div", pg, [
          (t(!0), n(P, null, V([...m.value, ...g.value], (B, N) => (t(), n("span", {
            key: N,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            o("span", vg, f(B.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), gg = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, hg = { class: "text-muted-foreground" }, bg = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, xg = ["width", "height"], yg = ["x", "y"], kg = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], $g = ["x", "y"], wg = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Cg = { class: "text-[11px] font-medium capitalize" }, Sg = { class: "text-muted-foreground text-[11px] capitalize" }, Mg = { class: "text-sm font-semibold tabular-nums" }, Bg = { class: "text-muted-foreground text-xs font-normal" }, l3 = /* @__PURE__ */ O({
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
    const l = e, a = q(null), r = q(560), s = q(null);
    let i = null;
    pe(() => {
      i = new ResizeObserver((M) => {
        r.value = Math.max(160, M[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ge(() => i?.disconnect());
    const d = y(() => l.series[0]?.points.map((M) => M.label) ?? []), u = y(() => l.series.length), m = y(() => d.value.length), g = y(() => Math.min(140, Math.max(60, r.value * 0.16))), p = y(() => Math.max(1, r.value - g.value - 8)), b = y(() => p.value / Math.max(1, m.value)), C = y(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function $(M) {
      if (M === 0)
        return "var(--muted)";
      const _ = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(M / _ * 100)}%, var(--muted))`;
    }
    function k(M) {
      for (let _ = 0; _ < l.buckets.length; _++) {
        const A = l.buckets[_].max;
        if (A === void 0 || M < A)
          return _;
      }
      return l.buckets.length - 1;
    }
    const S = y(
      () => l.series.flatMap(
        (M, _) => M.points.map((A, R) => {
          const E = k(A.value);
          return {
            row: _,
            col: R,
            x: g.value + R * b.value,
            y: 4 + _ * C.value,
            w: Math.max(1, b.value - 1),
            h: Math.max(1, C.value - 4),
            colour: $(E),
            label: A.label,
            value: A.value,
            rowName: M.name,
            bucketLabel: l.buckets[E].label
          };
        })
      )
    ), h = y(() => b.value < 2), v = y(() => s.value ? S.value.find((M) => M.row === s.value.row && M.col === s.value.col) ?? null : null), c = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, _) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || m.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        o("div", gg, [
          (t(!0), n(P, null, V(e.buckets, (A, R) => (t(), n("span", {
            key: R,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: $(R) })
            }, null, 4),
            o("span", hg, f(A.label), 1)
          ]))), 128))
        ]),
        h.value ? (t(), n("p", bg, f(m.value) + " columns - too many to label individually ", 1)) : w("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: _[0] || (_[0] = (A) => s.value = null)
        }, [
          (t(!0), n(P, null, V(e.series, (A, R) => (t(), n("text", {
            key: `r-${R}`,
            x: g.value - 10,
            y: 4 + R * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(A.name), 9, yg))), 128)),
          (t(!0), n(P, null, V(S.value, (A, R) => (t(), n("rect", {
            key: R,
            x: A.x,
            y: A.y,
            width: A.w,
            height: A.h,
            fill: A.colour,
            "fill-opacity": s.value === null || s.value.row === A.row && s.value.col === A.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (E) => s.value = { row: A.row, col: A.col }
          }, null, 40, kg))), 128)),
          e.showColumnLabels && !h.value ? (t(!0), n(P, { key: 0 }, V(d.value, (A, R) => (t(), n("text", {
            key: `c-${R}`,
            x: g.value + R * b.value + b.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(A), 9, $g))), 128)) : w("", !0)
        ], 40, xg)),
        v.value ? (t(), n("div", wg, [
          o("p", Cg, f(v.value.label), 1),
          o("p", Sg, f(v.value.rowName), 1),
          o("p", Mg, [
            U(f(c(v.value.value)) + " ", 1),
            o("span", Bg, "(" + f(v.value.bucketLabel) + ")", 1)
          ])
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), _g = ["viewBox"], Ag = { key: 0 }, Pg = ["id"], zg = ["stop-color"], Og = ["stop-color"], jg = ["d", "fill"], Lg = ["d", "stroke"], ea = 100, qe = 30, ut = /* @__PURE__ */ O({
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
      const u = l.data.map((b) => b.value);
      if (u.length < 2)
        return [];
      const m = Math.min(...u), p = Math.max(...u) - m || 1;
      return u.map((b, C) => ({
        x: C / (u.length - 1) * ea,
        y: qe - (b - m) / p * (qe - 4) - 2
      }));
    });
    function s(u) {
      const m = u.length;
      if (m < 2)
        return "";
      const g = [], p = [];
      for (let $ = 0; $ < m - 1; $++)
        g[$] = u[$ + 1].x - u[$].x, p[$] = g[$] === 0 ? 0 : (u[$ + 1].y - u[$].y) / g[$];
      const b = [p[0]];
      for (let $ = 1; $ < m - 1; $++)
        if (p[$ - 1] * p[$] <= 0)
          b[$] = 0;
        else {
          const k = 2 * g[$] + g[$ - 1], S = g[$] + 2 * g[$ - 1];
          b[$] = (k + S) / (k / p[$ - 1] + S / p[$]);
        }
      b[m - 1] = p[m - 2];
      let C = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let $ = 0; $ < m - 1; $++) {
        const k = g[$] / 3;
        C += ` C${(u[$].x + k).toFixed(2)},${(u[$].y + b[$] * k).toFixed(2)} ${(u[$ + 1].x - k).toFixed(2)},${(u[$ + 1].y - b[$ + 1] * k).toFixed(2)} ${u[$ + 1].x.toFixed(2)},${u[$ + 1].y.toFixed(2)}`;
      }
      return C;
    }
    const i = y(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((m, g) => `${g === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), d = y(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${qe} L${u[0].x.toFixed(2)},${qe} Z`;
    });
    return (u, m) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${ea} ${qe}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", Ag, [
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
          }, null, 8, zg),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Og)
        ], 8, Pg)
      ])) : w("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${x(a)})`
      }, null, 8, jg)) : w("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Lg)
    ], 12, _g)) : w("", !0);
  }
}), Vg = { class: "flex items-center gap-1 text-xs" }, Tg = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Dg = {
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
    const l = e, a = y(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = y(
      () => a.value === null ? "text-muted-foreground" : a.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = y(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = y(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (d, u) => (t(), n("span", Vg, [
      o("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Tg, f(s.value), 1),
        U(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Dg, f(e.comparison), 1)) : w("", !0)
    ]));
  }
}), Fg = ["data-collapsed"], Eg = { class: "flex flex-wrap items-start justify-between gap-2" }, Ig = { class: "flex min-w-0 items-start gap-2" }, Ng = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rg = ["d"], Ug = { class: "min-w-0" }, Hg = { class: "text-sm font-medium" }, Kg = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, qg = { class: "flex shrink-0 items-center gap-1.5" }, Gg = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Wg = ["aria-pressed", "onClick"], Zg = ["aria-expanded", "aria-label", "title"], Jg = ["aria-label"], Yg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qg = ["d"], Xg = /* @__PURE__ */ O({
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
    const l = e, a = Mt(), r = q(l.defaultCollapsed), s = y(() => !!l.icon && !a.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Eg, [
        o("div", Ig, [
          K(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", Ng, [
              o("path", {
                d: x(ie)(e.icon)
              }, null, 8, Rg)
            ])) : w("", !0)
          ]),
          o("div", Ug, [
            o("p", Hg, f(e.label), 1),
            e.description ? (t(), n("p", Kg, f(e.description), 1)) : w("", !0),
            K(d.$slots, "trend")
          ])
        ]),
        o("div", qg, [
          K(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Gg, [
            (t(!0), n(P, null, V(e.periods, (m) => (t(), n("button", {
              key: m.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (g) => d.$emit("update:period", m.value)
            }, f(m.label), 11, Wg))), 128))
          ])) : w("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: u[0] || (u[0] = (m) => r.value = !r.value)
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
            }, [...u[2] || (u[2] = [
              o("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, Zg)) : w("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (m) => d.$emit("hide"))
          }, [
            (t(), n("svg", Yg, [
              o("path", {
                d: x(ie)("eye-off")
              }, null, 8, Qg)
            ]))
          ], 8, Jg)) : w("", !0)
        ])
      ]),
      r.value ? w("", !0) : (t(), n("div", {
        key: 0,
        style: ne(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(we, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ne({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : K(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, Fg));
  }
}), eh = ["aria-pressed", "aria-label", "title"], th = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ah = ["d"], nh = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, lh = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, oh = ["href"], sh = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, rh = ["d"], ih = ["aria-label", "onClick"], dh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, uh = ["d"], ch = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fh = ["d"], mh = {
  key: 0,
  class: "flex flex-col gap-1"
}, ph = ["onClick"], vh = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gh = ["d"], hh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, bh = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(!1), i = q(!1), d = y(
      () => a.catalog.filter((g) => !a.items.some((p) => p.id === g.id))
    );
    function u(g) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== g)
      );
    }
    function m(g) {
      r("update:items", [...a.items, g]), i.value = !1;
    }
    return (g, p) => (t(), n(P, null, [
      F(Xg, {
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
            (t(), n("svg", th, [
              o("path", {
                d: x(ie)(s.value ? "check" : "pencil")
              }, null, 8, ah)
            ]))
          ], 8, eh)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), n("div", nh, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            F(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (b) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                U("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", lh, [
            (t(!0), n(P, null, V(e.items, (b) => (t(), n("div", {
              key: b.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: b.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", sh, [
                  o("path", {
                    d: x(ie)(b.icon)
                  }, null, 8, rh)
                ])),
                U(" " + f(b.label), 1)
              ], 8, oh),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${b.label}`,
                onClick: (C) => u(b.id)
              }, [
                (t(), n("svg", dh, [
                  o("path", {
                    d: x(ie)("x")
                  }, null, 8, uh)
                ]))
              ], 8, ih)) : w("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (b) => i.value = !0)
            }, [
              (t(), n("svg", ch, [
                o("path", {
                  d: x(ie)("plus")
                }, null, 8, fh)
              ])),
              p[8] || (p[8] = U(" Add ", -1))
            ])) : w("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      F(Ye, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (b) => i.value = !1)
      }, {
        footer: j(() => [
          F(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (b) => i.value = !1)
          }, {
            default: j(() => [...p[9] || (p[9] = [
              U("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          d.value.length ? (t(), n("ul", mh, [
            (t(!0), n(P, null, V(d.value, (b) => (t(), n("li", {
              key: b.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => m(b)
              }, [
                (t(), n("svg", vh, [
                  o("path", {
                    d: x(ie)(b.icon)
                  }, null, 8, gh)
                ])),
                U(" " + f(b.label), 1)
              ], 8, ph)
            ]))), 128))
          ])) : (t(), n("p", hh, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), xh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, yh = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, kh = { class: "relative w-full max-w-xl" }, $h = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wh = ["d"], Ch = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Sh = ["data-slot"], Mh = { class: "px-5 py-4" }, Bh = { class: "mb-3 text-sm font-semibold" }, _h = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Ah = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ph = ["d"], zh = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, o3 = /* @__PURE__ */ O({
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
    const l = e, a = q(""), r = y(() => {
      const u = l.linkComponent;
      return typeof u == "string" ? u : aa(u);
    }), s = Ge({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = y(() => {
      const u = a.value.trim().toLowerCase();
      return l.sections.map((m) => ({
        ...m,
        links: u ? m.links.filter((g) => g.label.toLowerCase().includes(u)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (u, m) => (t(), n("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : x(De)])
    }, [
      o("header", null, [
        o("h1", xh, f(e.title), 1),
        e.description ? (t(), n("p", yh, f(e.description), 1)) : w("", !0)
      ]),
      o("div", kh, [
        (t(), n("svg", $h, [
          o("path", {
            d: x(ie)("search")
          }, null, 8, wh)
        ])),
        F(he, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (g) => a.value = g),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), n("div", Ch, [
        (t(!0), n(P, null, V(d.value, (g) => (t(), n("section", {
          key: g.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${g.key}`
        }, [
          o("div", Mh, [
            o("h2", Bh, f(g.title), 1),
            o("div", _h, [
              (t(!0), n(P, null, V(g.links, (p) => (t(), T(ye(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: z(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), n("svg", Ah, [
                    o("path", {
                      d: x(ie)(p.icon)
                    }, null, 8, Ph)
                  ])),
                  U(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Sh))), 128))
      ])) : (t(), n("p", zh, ' Nothing matches "' + f(a.value) + '". ', 1))
    ], 2));
  }
}), Oh = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, jh = { class: "flex flex-1 flex-col gap-1 p-4" }, Lh = { class: "text-muted-foreground relative text-xs font-medium" }, Vh = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Th = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Dh = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Fh = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, s3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", Oh, [
      o("div", jh, [
        o("p", Lh, f(e.label), 1),
        e.loading ? (t(), T(we, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Vh, " Could not load ")) : (t(), n("span", Th, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Sa, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", Dh, f(e.description), 1)) : w("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Fh, [
        F(ut, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : w("", !0)
    ]));
  }
}), Eh = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Ih = { class: "flex flex-col gap-1 p-4" }, Nh = { class: "flex items-start justify-between gap-2" }, Rh = { class: "text-sm font-medium" }, Uh = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Hh = { class: "mt-1 flex flex-wrap items-center gap-2" }, Kh = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, qh = {
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
    const l = e, a = y(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = y(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = y(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), n("div", Eh, [
      o("div", Ih, [
        o("div", Nh, [
          o("p", Rh, f(e.label), 1),
          K(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Uh, f(e.caption), 1)) : w("", !0),
        o("div", Hh, [
          e.loading ? (t(), T(we, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Kh, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : w("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", qh, [
        F(ut, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : w("", !0)
    ]));
  }
}), Gh = { class: "relative flex flex-col gap-2" }, Wh = ["aria-label"], Zh = ["onMouseenter"], Jh = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Yh = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Qh = { class: "truncate" }, Xh = { class: "text-sm font-semibold tabular-nums" }, r3 = /* @__PURE__ */ O({
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
        const b = Math.max(0, g.value) / s.value;
        return {
          ...g,
          color: g.color ?? a[p % a.length],
          share: b,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: g.value > 0 ? `max(2px, ${(b * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), u = q(null), m = (g) => `${(g * 100).toFixed(g > 0 && g < 0.01 ? 1 : 0)}%`;
    return (g, p) => (t(), n("div", Gh, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((b) => `${b.label} ${d(b.value)}`).join(", ")
      }, [
        (t(!0), n(P, null, V(i.value, (b, C) => (t(), n("span", {
          key: C,
          class: z(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: b.width,
            background: b.color,
            opacity: u.value === null || u.value === C ? 1 : 0.4
          }),
          onMouseenter: ($) => u.value = C,
          onMouseleave: p[0] || (p[0] = ($) => u.value = null)
        }, null, 46, Zh))), 128))
      ], 12, Wh),
      e.showLegend ? (t(), n("div", Jh, [
        (t(!0), n(P, null, V(i.value, (b, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", Yh, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: b.color })
            }, null, 4),
            o("span", Qh, f(b.label), 1)
          ]),
          o("span", Xh, f(d(b.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      u.value !== null ? (t(), T(tt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: m(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), e1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, t1 = ["data-heading"], a1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, n1 = { class: "text-muted-foreground truncate" }, l1 = ["aria-label"], i3 = /* @__PURE__ */ O({
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
        const d = i.bar.segments.reduce((m, g) => m + Math.max(0, g.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
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
    return (i, d) => (t(), n("div", e1, [
      (t(!0), n(P, null, V(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), n("div", a1, [
          o("span", n1, f(u.label), 1),
          o("span", {
            class: z(["shrink-0 font-medium tabular-nums", u.tone ? a[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), n(P, null, V(u.segments, (m, g) => (t(), n("span", {
            key: g,
            class: z(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ne({ width: m.width })
          }, null, 6))), 128))
        ], 8, l1)) : w("", !0)
      ], 8, t1))), 128))
    ]));
  }
}), o1 = {
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
}, s1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function r1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function i1(e, l) {
  return l || (e ? o1[r1(e)] ?? "neutral" : "neutral");
}
function d1(e, l) {
  return s1[i1(e, l)];
}
const be = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = y(() => d1(l.status, l.tone));
    return (r, s) => (t(), T(We, {
      variant: a.value,
      class: z(l.class)
    }, {
      default: j(() => [
        K(r.$slots, "default", {}, () => [
          U(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), u1 = ["data-layout"], c1 = ["src", "alt"], f1 = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, m1 = ["src"], p1 = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, v1 = ["onMouseenter"], g1 = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, h1 = { class: "min-w-0" }, b1 = { class: "truncate text-sm font-medium" }, x1 = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, y1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, k1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, $1 = { class: "min-w-0" }, w1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, C1 = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, S1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, M1 = ["d"], B1 = ["aria-label"], _1 = /* @__PURE__ */ O({
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
    }, r = e, s = l, i = q(0);
    function d(S) {
      if (typeof S != "string")
        return null;
      const h = S.trim();
      return h === "" ? null : /^(https?:)?\/\//i.test(h) ? h : null;
    }
    const u = y(() => {
      const S = [r.item.image, ...r.item.images ?? []].map(d).filter((h) => h !== null);
      return [...new Set(S)];
    }), m = y(() => u.value[i.value] ?? u.value[0] ?? null), g = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((S) => S[0]?.toUpperCase() ?? "").join("")
    ), p = y(() => {
      const S = r.item.progress;
      if (!S)
        return null;
      const h = Math.max(S.total ?? 100, S.value, 1);
      return `${Math.min(100, Math.max(0, S.value / h * 100)).toFixed(2)}%`;
    }), b = y(() => u.value.length > 1 ? u.value[1] : null), C = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), $ = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function k(S) {
      S.stopPropagation(), s("cart", r.item.key);
    }
    return (S, h) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: z(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: h[0] || (h[0] = (v) => s("select", e.item.key)),
      onKeydown: h[1] || (h[1] = Ta(me((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: h[2] || (h[2] = (v) => i.value = 0)
    }, [
      o("div", {
        class: z([
          "bg-muted relative overflow-hidden",
          e.layout === "list" ? "aspect-square w-20 shrink-0 sm:w-24" : "aspect-[4/3] w-full"
        ])
      }, [
        m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, c1)) : (t(), n("span", f1, f(g.value), 1)),
        e.layout === "grid" && b.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: b.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, m1)) : w("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", p1, [
          (t(!0), n(P, null, V(u.value, (v, c) => (t(), n("span", {
            key: c,
            class: z(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (M) => i.value = c
          }, null, 42, v1))), 128))
        ])) : w("", !0)
      ], 2),
      o("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", g1, [
          o("div", h1, [
            o("p", b1, f(e.item.label), 1),
            e.item.caption ? (t(), n("p", x1, f(e.item.caption), 1)) : w("", !0),
            e.item.facts?.length ? (t(), n("p", y1, f(e.item.facts.join(" · ")), 1)) : w("", !0)
          ]),
          e.item.status ? (t(), T(be, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : w("", !0)
        ]),
        o("div", k1, [
          o("div", $1, [
            e.item.price ? (t(), n("p", w1, f(e.item.price), 1)) : w("", !0),
            $.value ? (t(), n("p", C1, f($.value), 1)) : w("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: k
          }, [
            (t(), n("svg", S1, [
              o("path", {
                d: x(ie)("cart")
              }, null, 8, M1)
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
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, B1)) : w("", !0)
      ], 2)
    ], 42, u1));
  }
});
function A1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function P1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function z1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const O1 = ["data-featured", "data-recommended"], j1 = { class: "flex flex-col gap-1" }, L1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, V1 = { key: 0 }, T1 = { key: 1 }, D1 = { key: 2 }, F1 = { key: 3 }, E1 = { class: "text-sm font-semibold" }, I1 = { class: "flex items-baseline gap-1" }, N1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, R1 = { class: "text-muted-foreground text-sm" }, U1 = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, H1 = { class: "text-muted-foreground mt-1 text-xs" }, K1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, q1 = { class: "flex min-w-0 items-start gap-2" }, G1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, W1 = ["d"], Z1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, J1 = ["d"], Y1 = { class: "capitalize" }, Q1 = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, X1 = { class: "text-foreground font-medium" }, eb = { class: "mt-auto flex gap-2 pt-2" }, tb = /* @__PURE__ */ O({
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
      const m = a.plan.perks ?? {};
      return Object.entries(m).map(([g, p]) => ({
        key: g,
        label: g.replace(/_/g, " "),
        granted: z1(p.value),
        display: P1(p.value)
      }));
    }), u = y(() => a.plan.extraPerks ?? []);
    return (m, g) => (t(), n("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", j1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", L1, [
          e.plan.recommended ? (t(), n("span", V1, "Recommended")) : e.plan.featured ? (t(), n("span", T1, "Featured")) : w("", !0),
          e.plan.trial ? (t(), n("span", D1, "Trial")) : w("", !0),
          e.plan.active === !1 ? (t(), n("span", F1, "Inactive")) : w("", !0)
        ])) : w("", !0),
        o("h3", E1, f(e.plan.name), 1),
        o("p", I1, [
          o("span", N1, f(s.value), 1),
          o("span", R1, f(x(A1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", U1, f(e.plan.shortDescription), 1)) : w("", !0),
        o("p", H1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", K1, [
        (t(!0), n(P, null, V(d.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", q1, [
            o("span", {
              class: z(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", G1, [
                o("path", {
                  d: x(ie)("check")
                }, null, 8, W1)
              ])) : (t(), n("svg", Z1, [
                o("path", {
                  d: x(ie)("x")
                }, null, 8, J1)
              ]))
            ], 2),
            o("span", Y1, f(p.label), 1)
          ]),
          p.display ? (t(), n("span", Q1, f(p.display), 1)) : w("", !0)
        ]))), 128)),
        (t(!0), n(P, null, V(u.value, (p, b) => (t(), n("li", {
          key: `extra-${b}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(p.key), 1),
          o("span", X1, f(p.value), 1)
        ]))), 128))
      ]),
      o("footer", eb, [
        F(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: g[0] || (g[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...g[2] || (g[2] = [
            U(" Edit ", -1)
          ])]),
          _: 1
        }),
        F(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: g[1] || (g[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...g[3] || (g[3] = [
            U(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, O1));
  }
}), ab = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, nb = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, lb = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, ob = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, sb = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, d3 = /* @__PURE__ */ O({
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
      class: z(["w-full space-y-6", e.embedded ? "" : x(De)]),
      "data-slot": "plan-grid"
    }, [
      o("header", ab, [
        o("div", null, [
          e.title ? (t(), n("h1", nb, f(e.title), 1)) : w("", !0),
          e.description ? (t(), n("p", lb, f(e.description), 1)) : w("", !0)
        ]),
        F(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: j(() => [...s[3] || (s[3] = [
            U("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", ob, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", sb, [
        (t(!0), n(P, null, V(e.plans, (i) => (t(), T(tb, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), rb = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, ib = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, db = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, ub = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, cb = { class: "space-y-1.5" }, fb = { class: "space-y-1.5" }, mb = { class: "space-y-1.5" }, pb = { class: "space-y-1.5" }, vb = { class: "space-y-1.5" }, gb = { class: "flex items-center gap-3 text-sm" }, hb = { class: "flex items-center gap-3 text-sm" }, bb = { class: "flex items-center gap-3 text-sm" }, xb = {
  key: 0,
  class: "space-y-1.5"
}, yb = { class: "flex items-center gap-3 text-sm" }, kb = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, $b = { class: "space-y-1.5" }, wb = ["value"], Cb = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Sb = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Mb = ["id", "value", "onInput"], Bb = { class: "space-y-2" }, _b = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Ab = ["d"], Pb = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ht = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", u3 = /* @__PURE__ */ O({
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
    }), r = e, s = l, i = Je(a());
    function d(h, v) {
      const c = i.perks?.[h]?.value;
      return c ?? v;
    }
    function u(h, v, c) {
      const M = i.perks?.[h];
      i.perks = {
        ...i.perks ?? {},
        [h]: {
          value: v,
          overview: c ?? M?.overview ?? ""
        }
      };
    }
    function m(h, v) {
      const c = i.perks?.[h];
      i.perks = {
        ...i.perks ?? {},
        [h]: {
          value: c?.value ?? (h === "modules" ? [] : 0),
          overview: v
        }
      };
    }
    function g(h) {
      const v = h ? { ...a(), ...h } : a();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    g(r.plan), ue(
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
      const v = Object.fromEntries(r.modules.map((_) => [_.key, _])), c = new Set(h);
      for (const _ of r.modules)
        if (!c.has(_.key))
          for (const A of _.children ?? [])
            c.delete(A);
      let M = !0;
      for (; M; ) {
        M = !1;
        for (const _ of [...c])
          for (const A of v[_]?.requires ?? [])
            c.has(A) || (c.add(A), M = !0);
      }
      return [...c];
    }
    function $() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function k(h) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== h);
    }
    function S() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((h) => h.key.trim() !== "")
      });
    }
    return (h, v) => (t(), n("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : x(De)]),
      "data-slot": "plan-editor",
      onSubmit: me(S, ["prevent"])
    }, [
      o("header", rb, [
        o("div", null, [
          o("h1", ib, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        F(se, {
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
      o("div", db, [
        o("section", ub, [
          v[26] || (v[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", cb, [
            F($e, { for: "plan-name" }, {
              default: j(() => [...v[15] || (v[15] = [
                U("Plan name", -1)
              ])]),
              _: 1
            }),
            F(he, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (c) => i.name = c),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", fb, [
            F($e, { for: "plan-short" }, {
              default: j(() => [...v[16] || (v[16] = [
                U("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            F(he, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (c) => i.shortDescription = c),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", mb, [
            F($e, { for: "plan-description" }, {
              default: j(() => [...v[17] || (v[17] = [
                U("Plan description", -1)
              ])]),
              _: 1
            }),
            ce(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (c) => i.description = c),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: z(ht)
            }, null, 512), [
              [ke, i.description]
            ])
          ]),
          o("div", pb, [
            F($e, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            ce(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: z(Pb)
            }, [...v[19] || (v[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Ee,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", vb, [
            F($e, { for: "plan-price" }, {
              default: j(() => [...v[20] || (v[20] = [
                U("Price", -1)
              ])]),
              _: 1
            }),
            F(he, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": v[5] || (v[5] = (c) => i.price = Number(c))
            }, null, 8, ["model-value"])
          ]),
          o("label", gb, [
            F(x(Ie), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = U(" Featured ", -1))
          ]),
          o("label", hb, [
            F(x(Ie), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = U(" Recommended ", -1))
          ]),
          o("label", bb, [
            F(x(Ie), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", xb, [
            F($e, { for: "plan-trial-days" }, {
              default: j(() => [...v[24] || (v[24] = [
                U("Trial days", -1)
              ])]),
              _: 1
            }),
            F(he, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (c) => i.trialDays = Number(c))
            }, null, 8, ["model-value"])
          ])) : w("", !0),
          o("label", yb, [
            F(x(Ie), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (c) => i.active = c)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = U(" Active ", -1))
          ]),
          F(se, {
            type: "submit",
            disabled: e.processing
          }, {
            default: j(() => [
              U(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", kb, [
          v[33] || (v[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", $b, [
            F($e, null, {
              default: j(() => [...v[27] || (v[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            F(Vt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (c) => p.value = c),
              options: b.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            F($e, { for: "plan-modules-overview" }, {
              default: j(() => [...v[28] || (v[28] = [
                U("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: z(ht),
              onInput: v[12] || (v[12] = (c) => m(
                "modules",
                c.target.value
              ))
            }, null, 40, wb)
          ]),
          (t(!0), n(P, null, V(e.limits, (c) => (t(), n("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), n("label", Cb, [
              F(x(Ie), {
                checked: !!d(c.key, !1),
                "onUpdate:checked": (M) => u(
                  c.key,
                  M,
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              U(" " + f(c.label), 1)
            ])) : (t(), n(P, { key: 1 }, [
              F($e, {
                for: `plan-limit-${c.key}`
              }, {
                default: j(() => [
                  U(f(c.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              c.hint ? (t(), n("p", Sb, f(c.hint), 1)) : w("", !0),
              F(he, {
                id: `plan-limit-${c.key}`,
                "model-value": Number(d(c.key, 0)),
                type: "number",
                step: c.step ?? 1,
                required: "",
                "onUpdate:modelValue": (M) => u(
                  c.key,
                  Number(M),
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              v[29] || (v[29] = o("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            F($e, {
              for: `plan-overview-${c.key}`
            }, {
              default: j(() => [...v[30] || (v[30] = [
                U("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${c.key}`,
              value: i.perks?.[c.key]?.overview ?? "",
              class: z(ht),
              onInput: (M) => m(
                c.key,
                M.target.value
              )
            }, null, 40, Mb)
          ]))), 128)),
          o("div", Bb, [
            v[32] || (v[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(P, null, V(i.extraPerks ?? [], (c, M) => (t(), n("div", {
              key: M,
              class: "flex items-center gap-2"
            }, [
              F(he, {
                modelValue: c.key,
                "onUpdate:modelValue": (_) => c.key = _,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(he, {
                modelValue: c.value,
                "onUpdate:modelValue": (_) => c.value = _,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (_) => k(M)
              }, {
                default: j(() => [
                  (t(), n("svg", _b, [
                    o("path", {
                      d: x(ie)("x")
                    }, null, 8, Ab)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            F(se, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: $
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
}), zb = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Ob = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, jb = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Lb = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Vb = ["d"], Tb = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Db = ["aria-pressed"], Fb = ["aria-pressed"], Eb = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ib = ["aria-label"], Nb = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Rb = ["aria-pressed", "onClick"], Ub = ["aria-label"], Hb = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Kb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, qb = ["data-slot"], Gb = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Wb = { class: "text-muted-foreground text-xs tabular-nums" }, Zb = { class: "flex items-center gap-2" }, Jb = ["disabled"], Yb = ["disabled"], Nt = /* @__PURE__ */ O({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(""), i = Qe(e, "modelValue"), d = Je({}), u = Je({});
    ue(s, () => b());
    function m(E) {
      const ee = E.trim();
      if (ee === "")
        return null;
      const H = Number(ee);
      return Number.isFinite(H) ? H : null;
    }
    function g() {
      const E = {};
      for (const [ee, H] of Object.entries(u))
        E[ee] = { min: m(H.min), max: m(H.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: g() };
    }
    function b() {
      r("filter", p());
    }
    function C(E, ee) {
      d[E] = d[E] === ee ? null : ee, b();
    }
    function $(E) {
      return u[E] ?? { min: "", max: "" };
    }
    function k(E, ee, H) {
      const W = u[E] ?? { min: "", max: "" };
      u[E] = { ...W, [ee]: H }, b();
    }
    function S(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const h = y(() => a.facets.filter((E) => (E.kind ?? "chips") === "chips")), v = y(() => a.facets.filter((E) => E.kind === "range")), c = y(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), M = q(1);
    ue(
      () => a.items.map((E) => E.key).join(","),
      () => {
        M.value = 1;
      }
    );
    const _ = y(() => {
      const E = a.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / E));
    }), A = y(() => {
      const E = a.pageSize;
      if (!E || E < 1)
        return a.items;
      const ee = (M.value - 1) * E;
      return a.items.slice(ee, ee + E);
    });
    function R(E) {
      M.value = Math.min(_.value, Math.max(1, E));
    }
    return (E, ee) => (t(), n("div", {
      class: z(["flex flex-col gap-4", x(xa)])
    }, [
      c.value ? (t(), n("div", zb, [
        o("div", Ob, [
          e.searchable ? (t(), n("div", jb, [
            (t(), n("svg", Lb, [
              o("path", {
                d: x(ie)("search")
              }, null, 8, Vb)
            ])),
            F(he, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: S
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : w("", !0),
          K(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Tb, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Db),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, Fb)
          ])) : w("", !0)
        ]),
        h.value.length || v.value.length ? (t(), n("div", Eb, [
          (t(!0), n(P, null, V(h.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", Nb, f(H.label), 1)) : w("", !0),
            (t(!0), n(P, null, V(H.options ?? [], (W) => (t(), n("button", {
              key: W.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === W.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === W.value ? "true" : "false",
              onClick: (J) => C(H.key, W.value)
            }, f(W.label), 11, Rb))), 128))
          ], 8, Ib))), 128)),
          (t(!0), n(P, null, V(v.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Hb, f(H.label ?? H.key), 1),
            F(he, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": $(H.key).min,
              "onUpdate:modelValue": (W) => k(H.key, "min", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            F(he, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": $(H.key).max,
              "onUpdate:modelValue": (W) => k(H.key, "max", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Ub))), 128))
        ])) : w("", !0)
      ])) : w("", !0),
      e.items.length === 0 ? (t(), n("p", Kb, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : x(sc)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(P, null, V(A.value, (H) => (t(), T(_1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (W) => r("select", W)),
          onCart: ee[4] || (ee[4] = (W) => r("cart", W))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, qb)),
      e.pageSize && _.value > 1 ? (t(), n("div", Gb, [
        o("p", Wb, " Page " + f(M.value) + " of " + f(_.value), 1),
        o("div", Zb, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: M.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => R(M.value - 1))
          }, " Previous ", 8, Jb),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: M.value >= _.value,
            onClick: ee[6] || (ee[6] = (H) => R(M.value + 1))
          }, " Next ", 8, Yb)
        ])
      ])) : w("", !0)
    ], 2));
  }
}), Qb = ["aria-label"], Xb = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, ex = { class: "min-w-0" }, tx = { class: "text-base font-semibold" }, ax = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, nx = { class: "flex shrink-0 items-center gap-2" }, lx = { class: "min-h-0 flex-1 overflow-y-auto" }, ox = {
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(null);
    let i = null, d = "";
    function u(m) {
      if (!a.open)
        return;
      if (m.key === "Escape") {
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
      const p = g[0], b = g[g.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), b.focus()) : !m.shiftKey && document.activeElement === b && (m.preventDefault(), p.focus());
    }
    return ue(
      () => a.open,
      async (m) => {
        if (m) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await Ae(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), ge(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (m, g) => (t(), T(Ue, { to: "body" }, [
      F(Ve, {
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
      F(Ve, {
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
            o("header", Xb, [
              o("div", ex, [
                o("h2", tx, f(e.title), 1),
                e.description ? (t(), n("p", ax, f(e.description), 1)) : w("", !0)
              ]),
              o("div", nx, [
                K(m.$slots, "header-actions"),
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
            o("div", lx, [
              K(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), n("footer", ox, [
              K(m.$slots, "footer")
            ])) : w("", !0)
          ], 10, Qb)) : w("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function ze() {
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
function Ut(e, l) {
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
function it(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const dx = { class: "flex flex-col gap-6 p-4" }, ux = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, cx = { class: "text-sm font-semibold" }, fx = { class: "flex flex-wrap items-center gap-1.5" }, mx = ["aria-pressed", "onClick"], px = { class: "text-sm font-semibold" }, vx = { class: "flex flex-wrap items-center gap-1.5" }, gx = { key: 0 }, Ma = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(""), i = Je({}), d = Je({}), u = y(
      () => a.facets.filter((_) => (_.kind ?? "chips") === "chips")
    ), m = y(() => a.facets.filter((_) => _.kind === "range"));
    function g(_) {
      return _ == null ? "" : String(_);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const _ of Object.keys(i))
        delete i[_];
      for (const [_, A] of Object.entries(a.applied.selected ?? {}))
        i[_] = A;
      for (const _ of Object.keys(d))
        delete d[_];
      for (const [_, A] of Object.entries(a.applied.ranges ?? {}))
        d[_] = { min: g(A.min), max: g(A.max) };
    }
    ue(
      () => a.open,
      (_) => {
        _ && p();
      }
    );
    function b(_) {
      const A = _.trim();
      if (A === "")
        return null;
      const R = Number(A);
      return Number.isFinite(R) ? R : null;
    }
    function C() {
      const _ = {};
      for (const [A, R] of Object.entries(d))
        _[A] = { min: b(R.min), max: b(R.max) };
      return _;
    }
    function $() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const k = y(() => {
      let _ = a.hideSearch || s.value.trim() === "" ? 0 : 1;
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
    function v(_, A, R) {
      const E = d[_] ?? { min: "", max: "" };
      d[_] = { ...E, [A]: R };
    }
    function c() {
      r("apply", $());
    }
    function M() {
      s.value = "";
      for (const _ of Object.keys(i))
        i[_] = null;
      for (const _ of Object.keys(d))
        d[_] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...ze(), query: a.applied.query } : ze()
      );
    }
    return (_, A) => (t(), T(Rt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: A[2] || (A[2] = (R) => r("close"))
    }, {
      footer: j(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: M
        }, " Reset all "),
        F(se, {
          variant: "outline",
          size: "sm",
          onClick: A[1] || (A[1] = (R) => r("close"))
        }, {
          default: j(() => [...A[5] || (A[5] = [
            U("Cancel", -1)
          ])]),
          _: 1
        }),
        F(se, {
          size: "sm",
          onClick: c
        }, {
          default: j(() => [
            A[6] || (A[6] = U(" Apply", -1)),
            k.value ? (t(), n("span", gx, " (" + f(k.value) + ")", 1)) : w("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", dx, [
          e.hideSearch ? w("", !0) : (t(), n("label", ux, [
            A[3] || (A[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            F(he, {
              modelValue: s.value,
              "onUpdate:modelValue": A[0] || (A[0] = (R) => s.value = R),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(P, null, V(u.value, (R) => (t(), n("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", cx, f(R.label ?? R.key), 1),
            o("div", fx, [
              (t(!0), n(P, null, V(R.options ?? [], (E) => (t(), n("button", {
                key: E.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[R.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[R.key] === E.value ? "true" : "false",
                onClick: (ee) => S(R.key, E.value)
              }, f(E.label), 11, mx))), 128))
            ])
          ]))), 128)),
          (t(!0), n(P, null, V(m.value, (R) => (t(), n("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", px, f(R.label ?? R.key), 1),
            o("div", vx, [
              F(he, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${R.label ?? R.key} from`,
                "model-value": h(R.key).min,
                "onUpdate:modelValue": (E) => v(R.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              F(he, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${R.label ?? R.key} to`,
                "model-value": h(R.key).max,
                "onUpdate:modelValue": (E) => v(R.key, "max", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), hx = ["aria-disabled"], bx = ["disabled"], xx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, yx = ["d"], kx = {
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
  props: /* @__PURE__ */ Oe({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = Qe(e, "modelValue"), r = l, s = y(() => a.value <= e.min), i = y(() => e.max !== null && a.value >= e.max);
    function d(u) {
      if (e.disabled)
        return;
      const m = a.value + u;
      m < e.min || e.max !== null && m > e.max || (a.value = m, u < 0 ? r("decrease", m) : r("increase", m));
    }
    return (u, m) => (t(), n("div", {
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
        onClick: m[0] || (m[0] = (g) => d(-1))
      }, [
        (t(), n("svg", xx, [
          o("path", {
            d: x(ie)("minus")
          }, null, 8, yx)
        ]))
      ], 8, bx),
      o("span", kx, f(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (g) => d(1))
      }, [
        (t(), n("svg", wx, [
          o("path", {
            d: x(ie)("plus")
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
}, jx = ["aria-label", "onClick"], Lx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Vx = ["d"], Tx = /* @__PURE__ */ O({
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
      (t(!0), n(P, null, V(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Bx, [
          o("p", _x, f(d.label), 1),
          d.detail ? (t(), n("p", Ax, f(d.detail), 1)) : w("", !0)
        ]),
        o("div", Px, [
          e.editable ? (t(), T(Sx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", zx, " ×" + f(d.qty), 1)) : w("", !0),
          d.amount ? (t(), n("span", Ox, f(d.amount), 1)) : w("", !0),
          d.status ? (t(), T(be, {
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
            (t(), n("svg", Lx, [
              o("path", {
                d: x(ie)("trash")
              }, null, 8, Vx)
            ]))
          ], 8, jx)) : w("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Dx = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Fx = { class: "border-b px-4 py-3" }, Ex = { class: "text-sm font-medium" }, Ix = { class: "flex-1 px-4 py-3" }, Nx = {
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
}, Yx = { class: "text-muted-foreground" }, Qx = { class: "tabular-nums" }, Xx = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, ey = { class: "tabular-nums" }, ty = {
  key: 4,
  class: "pt-1"
}, ay = /* @__PURE__ */ O({
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
      o("header", Fx, [
        o("h2", Ex, f(e.title), 1)
      ]),
      o("div", Ix, [
        e.items.length === 0 ? (t(), n("p", Nx, [
          o("span", Rx, f(e.emptyTitle), 1),
          o("span", Ux, f(e.emptyDescription), 1)
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
          o("span", qx, f(e.subtotal), 1)
        ])) : w("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Gx, [
          o("span", Wx, f(e.discountLabel), 1),
          e.discount ? (t(), n("span", Zx, f(e.discount), 1)) : w("", !0),
          K(r.$slots, "discount")
        ])) : w("", !0),
        e.tax ? (t(), n("div", Jx, [
          o("span", Yx, f(e.taxLabel), 1),
          o("span", Qx, f(e.tax), 1)
        ])) : w("", !0),
        e.total ? (t(), n("div", Xx, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", ey, f(e.total), 1)
        ])) : w("", !0),
        r.$slots.pay ? (t(), n("div", ty, [
          K(r.$slots, "pay")
        ])) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), ny = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, ly = { class: "flex flex-col gap-4" }, oy = { class: "flex flex-wrap items-start justify-between gap-3" }, sy = { class: "flex items-center gap-2" }, ry = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, c3 = /* @__PURE__ */ O({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(ze()), i = q(!1), d = Qe(e, "cart"), u = q(!1), m = y(
      () => a.items.filter((H) => Ut(H, s.value))
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
    function b(H) {
      return H ? a.parsePrice(H) : 0;
    }
    function C(H, W, J) {
      return {
        ...H,
        qty: W,
        amount: a.formatMoney(J * W)
      };
    }
    function $(H) {
      const W = ix(a.items, H);
      W && k(W.key);
    }
    function k(H) {
      const W = a.items.find((te) => te.key === H);
      if (!W || W.status === "out-of-stock")
        return;
      u.value = !1;
      const J = b(W);
      if (d.value.find((te) => te.key === H)) {
        d.value = d.value.map(
          (te) => te.key === H ? C(te, Number(te.qty ?? 1) + 1, J) : te
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
          amount: a.formatMoney(J)
        }
      ];
    }
    function S(H, W) {
      const J = a.items.find((te) => te.key === H), ae = b(J);
      d.value = d.value.map(
        (te) => te.key === H ? C(te, W, ae) : te
      );
    }
    function h(H) {
      d.value = d.value.filter((W) => W.key !== H);
    }
    const v = y(
      () => d.value.reduce((H, W) => {
        const J = a.items.find((ae) => ae.key === W.key);
        return H + b(J) * Number(W.qty ?? 1);
      }, 0)
    ), c = y(
      () => a.discountRate > 0 ? Math.round(v.value * a.discountRate) : 0
    ), M = y(
      () => Math.round((v.value - c.value) * a.taxRate)
    ), _ = y(
      () => d.value.length ? a.formatMoney(v.value) : null
    ), A = y(
      () => d.value.length && c.value > 0 ? `−${a.formatMoney(c.value)}` : null
    ), R = y(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(M.value) : null
    ), E = y(
      () => d.value.length ? a.formatMoney(
        v.value - c.value + M.value
      ) : null
    );
    function ee() {
      u.value = !0, r("pay", d.value);
    }
    return (H, W) => (t(), n(P, null, [
      o("div", ny, [
        o("section", ly, [
          o("div", oy, [
            F(Pe, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", sy, [
              x(it)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: W[0] || (W[0] = (J) => s.value = {
                  ...x(ze)(),
                  query: s.value.query
                })
              }, " Clear ")) : w("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: W[1] || (W[1] = (J) => i.value = !0)
              }, [
                W[5] || (W[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                W[6] || (W[6] = U(" Filters ", -1)),
                x(it)(s.value) ? (t(), n("span", ry, " on ")) : w("", !0)
              ])) : w("", !0)
            ])
          ]),
          F(Nt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: g,
            onSelect: W[2] || (W[2] = (J) => r("select", J)),
            onCart: k,
            onScan: $
          }, null, 8, ["search-placeholder", "items"])
        ]),
        F(ay, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: _.value,
          "discount-label": e.discountLabel,
          discount: A.value,
          "tax-label": e.taxLabel,
          tax: R.value,
          total: E.value,
          onQty: S,
          onRemove: h
        }, {
          pay: j(() => [
            K(H.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: ee
            }, () => [
              F(se, {
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
      F(Ma, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: W[3] || (W[3] = (J) => i.value = !1),
        onApply: p,
        onReset: W[4] || (W[4] = (J) => s.value = { ...x(ze)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), iy = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, dy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, uy = ["src", "alt"], cy = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, fy = ["src"], my = { class: "flex items-start justify-between gap-3" }, py = { class: "text-lg font-semibold tabular-nums" }, vy = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, gy = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, hy = { class: "grid grid-cols-2 gap-3" }, by = { class: "flex flex-col gap-2" }, xy = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, f3 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(p) {
      let b = 0;
      for (const C of p)
        b = b * 31 + C.charCodeAt(0) >>> 0;
      return b;
    }
    function i(p, b) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(($, k) => ({
        label: $,
        value: Math.max(0, Math.round(p + Math.sin(k + b) * p * 0.18))
      }));
    }
    const d = y(() => a.item?.kind === "unit"), u = y(() => {
      const p = a.item;
      if (!p)
        return [];
      const b = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(p.key) % 7);
    }), m = y(() => {
      const p = a.item;
      if (!p)
        return [];
      const b = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(p.key) % 5 + 1);
    }), g = y(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (p, b) => (t(), T(Rt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: b[1] || (b[1] = (C) => r("close"))
    }, Ze({
      default: j(() => [
        e.item ? (t(), n("div", iy, [
          o("div", dy, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, uy)) : w("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", cy, [
            (t(!0), n(P, null, V(e.item.images, (C, $) => (t(), n("img", {
              key: $,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, fy))), 128))
          ])) : w("", !0),
          o("div", my, [
            o("div", null, [
              o("p", py, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", vy, f(e.item.stock) + " in stock ", 1)) : w("", !0)
            ]),
            e.item.status ? (t(), T(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", gy, f(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("div", hy, [
            F(rt, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? m.value : u.value
            }, null, 8, ["label", "value", "series"]),
            F(rt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", by, [
            o("p", xy, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            F(ut, {
              data: d.value ? m.value : u.value,
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
            onClick: b[0] || (b[0] = (C) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), yy = { class: "flex flex-col gap-10" }, ky = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, $y = { class: "flex flex-col gap-3" }, wy = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Cy = ["src", "alt"], Sy = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, My = ["aria-label", "aria-pressed", "onClick"], By = ["src"], _y = { class: "flex flex-col gap-5" }, Ay = { class: "flex flex-wrap items-start justify-between gap-3" }, Py = { class: "min-w-0" }, zy = { class: "text-2xl font-semibold tracking-tight" }, Oy = { class: "text-muted-foreground mt-1 text-sm" }, jy = { class: "text-2xl font-semibold tabular-nums" }, Ly = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Vy = { class: "grid grid-cols-2 gap-3 text-sm" }, Ty = {
  key: 0,
  class: "rounded-lg border p-3"
}, Dy = { class: "mt-1 font-medium" }, Fy = { class: "rounded-lg border p-3" }, Ey = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, Iy = { class: "mt-1 font-medium" }, Ny = { class: "flex flex-col gap-4" }, Ry = { class: "grid gap-4 sm:grid-cols-2" }, Uy = { class: "bg-card rounded-lg border p-4" }, Hy = { class: "mb-3 text-sm font-medium" }, Ky = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s($) {
      let k = 0;
      for (const S of $)
        k = k * 31 + S.charCodeAt(0) >>> 0;
      return k;
    }
    function i($, k) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((h, v) => ({
        label: h,
        value: Math.max(0, Math.round($ + Math.sin(v + k) * $ * 0.18))
      }));
    }
    const d = y(() => a.item.kind === "unit"), u = y(() => {
      const $ = [a.item.image, ...a.item.images ?? []].filter(
        (k) => typeof k == "string" && k !== ""
      );
      return [...new Set($)];
    }), m = q(0), g = y(() => {
      const $ = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number($) || 12, s(a.item.key) % 7);
    }), p = y(() => {
      const $ = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number($) || 20, s(a.item.key) % 5 + 1);
    }), b = y(() => d.value ? p.value : g.value), C = y(() => !d.value && a.item.status !== "out-of-stock");
    return ($, k) => (t(), n("div", yy, [
      o("div", ky, [
        o("div", $y, [
          o("div", wy, [
            u.value[m.value] ? (t(), n("img", {
              key: 0,
              src: u.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Cy)) : w("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", Sy, [
            (t(!0), n(P, null, V(u.value, (S, h) => (t(), n("button", {
              key: S,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", h === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${h + 1}`,
              "aria-pressed": h === m.value ? "true" : "false",
              onClick: (v) => m.value = h
            }, [
              o("img", {
                src: S,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, By)
            ], 10, My))), 128))
          ])) : w("", !0)
        ]),
        o("div", _y, [
          o("div", Ay, [
            o("div", Py, [
              o("h1", zy, f(e.item.label), 1),
              o("p", Oy, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          o("p", jy, f(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", Ly, f(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("dl", Vy, [
            e.item.sku ? (t(), n("div", Ty, [
              k[1] || (k[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", Dy, f(e.item.sku), 1)
            ])) : w("", !0),
            o("div", Fy, [
              o("dt", Ey, f(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", Iy, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          C.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: k[0] || (k[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")) : w("", !0)
        ])
      ]),
      o("section", Ny, [
        k[2] || (k[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", Ry, [
          F(rt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: b.value
          }, null, 8, ["label", "value", "series"]),
          F(rt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: g.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", Uy, [
          o("p", Hy, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          F(gv, {
            data: b.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), qy = ["href"], m3 = /* @__PURE__ */ O({
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
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : x(De)])
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
        U(" " + f(e.backLabel), 1)
      ], 8, qy),
      F(Ky, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), Gy = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, Wy = ["aria-selected", "onClick"], Zy = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, Jy = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, Yy = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, Qy = ["aria-pressed"], Xy = ["aria-pressed"], p3 = /* @__PURE__ */ O({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(a.tabs[0]?.key ?? ""), i = Qe(e, "layout"), d = q({}), u = q(!1);
    ue(
      () => a.tabs.map((S) => S.key).join(","),
      (S) => {
        S.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function m(S) {
      return d.value[S] ?? ze();
    }
    const g = y(
      () => a.tabs.find((S) => S.key === s.value) ?? a.tabs[0] ?? null
    ), p = y(
      () => g.value ? m(g.value.key) : ze()
    ), b = y(() => {
      const S = g.value;
      return S ? S.items.filter((h) => Ut(h, m(S.key))) : [];
    });
    function C(S) {
      const h = g.value?.key;
      h && (d.value = {
        ...d.value,
        [h]: { ...m(h), query: S }
      });
    }
    function $() {
      const S = g.value?.key;
      S && (d.value = { ...d.value, [S]: ze() });
    }
    function k(S) {
      const h = g.value?.key;
      h && (d.value = { ...d.value, [h]: S }, u.value = !1);
    }
    return (S, h) => (t(), n(P, null, [
      o("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : x(De)])
      }, [
        F(Pe, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", Gy, [
          (t(!0), n(P, null, V(e.tabs, (v) => (t(), n("button", {
            key: v.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (c) => s.value = v.key
          }, f(v.label), 11, Wy))), 128))
        ])) : w("", !0),
        o("div", Zy, [
          F(he, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: g.value?.searchPlaceholder ?? "Search…",
            "aria-label": g.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": h[0] || (h[0] = (v) => C(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(it)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: $
          }, " Clear ")) : w("", !0),
          (g.value?.facets ?? []).length > 0 ? (t(), n("button", {
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
            h[9] || (h[9] = U(" Filters ", -1)),
            x(it)(p.value) ? (t(), n("span", Jy, " on ")) : w("", !0)
          ])) : w("", !0),
          o("div", Yy, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: h[2] || (h[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, Qy),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: h[3] || (h[3] = (v) => i.value = "list")
            }, " List ", 10, Xy)
          ])
        ]),
        F(Nt, {
          layout: i.value,
          "onUpdate:layout": h[4] || (h[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: b.value,
          onSelect: h[5] || (h[5] = (v) => r("select", v)),
          onCart: h[6] || (h[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      F(Ma, {
        open: u.value,
        title: g.value?.filterTitle ?? "Filters",
        "search-placeholder": g.value?.searchPlaceholder ?? "Search…",
        facets: g.value?.facets ?? [],
        applied: p.value,
        onClose: h[7] || (h[7] = (v) => u.value = !1),
        onApply: k,
        onReset: $
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), e0 = { class: "flex flex-col gap-4" }, t0 = { class: "flex flex-col gap-4" }, v3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(ze()), i = y(
      () => a.cards.filter((d) => Ut(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : x(De)])
    }, [
      F(Pe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", e0, [
        F(Pe, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        F(Nt, {
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
      o("section", t0, [
        F(Pe, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        F(Ml, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": j(({ value: m }) => [
            F(be, {
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
}), a0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, n0 = { class: "text-sm font-medium" }, l0 = ["width", "height", "aria-label"], o0 = { class: "flex items-center gap-2" }, s0 = /* @__PURE__ */ O({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(null), i = q(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function m(S) {
      const h = s.value;
      if (!h)
        return null;
      const v = h.getBoundingClientRect(), c = h.width / v.width, M = h.height / v.height;
      return {
        x: (S.clientX - v.left) * c,
        y: (S.clientY - v.top) * M
      };
    }
    function g(S) {
      a.disabled || (i.value = !0, d = m(S), s.value?.setPointerCapture(S.pointerId));
    }
    function p(S) {
      if (!i.value || a.disabled)
        return;
      const h = u(), v = m(S);
      !h || !v || !d || (h.strokeStyle = "#111827", h.lineWidth = 2.4, h.lineCap = "round", h.lineJoin = "round", h.beginPath(), h.moveTo(d.x, d.y), h.lineTo(v.x, v.y), h.stroke(), d = v);
    }
    function b() {
      i.value = !1, d = null;
    }
    function C() {
      const S = s.value, h = u();
      !S || !h || (h.clearRect(0, 0, S.width, S.height), r("clear"));
    }
    function $() {
      const S = s.value;
      S && r("save", S.toDataURL("image/png"));
    }
    function k() {
      const S = s.value, h = u();
      !S || !h || (h.fillStyle = "#ffffff", h.fillRect(0, 0, S.width, S.height));
    }
    return pe(k), ge(() => {
      i.value = !1;
    }), (S, h) => (t(), n("div", a0, [
      o("p", n0, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: me(g, ["prevent"]),
        onPointermove: me(p, ["prevent"]),
        onPointerup: me(b, ["prevent"]),
        onPointerleave: me(b, ["prevent"])
      }, null, 42, l0),
      o("div", o0, [
        F(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: j(() => [...h[0] || (h[0] = [
            U(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: $
        }, {
          default: j(() => [...h[1] || (h[1] = [
            U("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), r0 = { class: "grid gap-8 lg:grid-cols-2" }, i0 = { class: "flex flex-col gap-3" }, d0 = { class: "text-muted-foreground text-xs" }, u0 = {
  key: 0,
  class: "flex flex-col gap-3"
}, c0 = { class: "flex flex-wrap gap-3" }, f0 = ["onClick"], m0 = ["src", "alt"], p0 = {
  key: 1,
  class: "flex flex-col gap-3"
}, v0 = { class: "flex flex-wrap gap-3" }, g0 = ["onClick"], h0 = ["src", "alt"], b0 = {
  key: 2,
  class: "flex flex-col gap-4"
}, x0 = { class: "flex flex-wrap items-center gap-2" }, y0 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, k0 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, $0 = { class: "flex flex-col gap-2" }, w0 = ["src"], C0 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, S0 = ["src"], g3 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = q([]), r = q([]), s = q(null), i = q(null), d = q(null), u = q(l.documents[0]?.key ?? "");
    function m(S) {
      try {
        const h = localStorage.getItem(S), v = h ? JSON.parse(h) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    pe(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = m(`${l.storageKey}.signatures`), r.value = m(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), ue(
      a,
      (S) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(S));
      },
      { deep: !0 }
    ), ue(
      r,
      (S) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(S));
      },
      { deep: !0 }
    );
    function g(S) {
      const h = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: S
      };
      a.value = [h, ...a.value].slice(0, 8), s.value = h.id;
    }
    async function p(S, h) {
      await mc(S), h(40);
      const v = await new Promise((c, M) => {
        const _ = new FileReader();
        _.onload = () => c(String(_.result)), _.onerror = () => M(new Error("Could not read the file")), _.readAsDataURL(S);
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
      () => a.value.find((S) => S.id === s.value)?.dataUrl ?? null
    ), $ = y(
      () => r.value.find((S) => S.id === i.value)?.dataUrl ?? null
    ), k = y(() => {
      const S = l.documents.find((v) => v.key === u.value)?.document ?? l.documents[0]?.document ?? {}, h = {
        ...S?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...S,
        branding: h
      };
    });
    return (S, h) => (t(), n("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : x(De)])
    }, [
      F(Pe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", r0, [
        F(s0, {
          label: "Draw a signature",
          onSave: g
        }),
        o("div", i0, [
          h[2] || (h[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", d0, f(x(ya)), 1),
          F(ma, {
            modelValue: d.value,
            "onUpdate:modelValue": h[0] || (h[0] = (v) => d.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          F(se, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: b
          }, {
            default: j(() => [...h[1] || (h[1] = [
              U(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", u0, [
        F(Pe, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", c0, [
          (t(!0), n(P, null, V(a.value, (v) => (t(), n("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = v.id
          }, [
            o("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, m0)
          ], 10, f0))), 128))
        ])
      ])) : w("", !0),
      r.value.length ? (t(), n("section", p0, [
        F(Pe, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", v0, [
          (t(!0), n(P, null, V(r.value, (v) => (t(), n("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = v.id
          }, [
            o("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, h0)
          ], 10, g0))), 128))
        ])
      ])) : w("", !0),
      e.documents.length ? (t(), n("section", b0, [
        o("div", x0, [
          (t(!0), n(P, null, V(e.documents, (v) => (t(), T(se, {
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
        o("div", y0, [
          F(Ap, {
            document: k.value
          }, null, 8, ["document"]),
          o("div", k0, [
            o("div", $0, [
              h[3] || (h[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, w0)) : (t(), n("p", C0, "Draw and save a signature"))
            ]),
            $.value ? (t(), n("img", {
              key: 0,
              src: $.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, S0)) : w("", !0)
          ])
        ])
      ])) : w("", !0)
    ], 2));
  }
}), h3 = "panel.dashboard.hiddenWidgets", M0 = /* @__PURE__ */ Symbol("dashboardHide"), B0 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, b3 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = lt(M0, null), r = q(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), s = q(!1);
    pe(() => {
      if (a?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const d = localStorage.getItem(l.storageKey);
        if (d) {
          const u = JSON.parse(d);
          Array.isArray(u) && (r.value = u.filter(
            (m) => typeof m?.id == "string" && typeof m.label == "string" && typeof m.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), ue(
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
    return (d, u) => i.value ? w("", !0) : (t(), n("div", B0, [
      F(bh, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (m) => r.value = m),
        onHide: u[1] || (u[1] = (m) => x(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), _0 = { class: "flex flex-col gap-3" }, A0 = ["data-slot"], P0 = ["aria-pressed", "aria-label", "title"], z0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, O0 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, j0 = { class: "flex h-8 items-center" }, L0 = ["aria-label", "title", "onClick"], V0 = ["aria-label", "title", "onClick"], T0 = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, D0 = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, x3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = q(a.maskable ? !a.hidden : !0), i = q(/* @__PURE__ */ new Set());
    function d(c) {
      return a.maskable && (c.sensitive ?? !0);
    }
    function u(c) {
      return d(c) && !s.value && !i.value.has(c.key);
    }
    const m = y(() => a.segments.some(u)), g = y(() => a.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, b = y(() => p[a.columns] ?? p[4]), C = y(() => {
      const c = a.columns ?? 4, M = Math.floor(a.segments.length / c) * c;
      return a.segments.slice(0, M);
    }), $ = y(() => {
      const c = a.columns ?? 4, M = Math.floor(a.segments.length / c) * c;
      return a.segments.slice(M);
    }), k = y(() => {
      const c = [];
      return C.value.length > 0 && c.push({ key: "packed", joined: !0, segments: C.value }), $.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: $.value }), c;
    });
    function S() {
      const c = m.value === !1;
      s.value = !c, i.value = /* @__PURE__ */ new Set(), r("toggle", c);
    }
    function h(c) {
      if (!d(c))
        return;
      const M = new Set(i.value);
      if (u(c))
        M.add(c.key);
      else if (M.delete(c.key), s.value) {
        s.value = !1;
        for (const _ of a.segments)
          _.key !== c.key && d(_) && M.add(_.key);
      }
      i.value = M, r("toggle", m.value);
    }
    function v(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, M) => (t(), n("div", _0, [
      (t(!0), n(P, null, V(k.value, (_) => (t(), n("div", {
        key: _.key,
        class: z(["relative shrink-0", _.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": _.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && g.value && _.key === k.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: S
        }, [
          (t(), n("svg", z0, [
            m.value ? (t(), n(P, { key: 0 }, [
              M[0] || (M[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              M[1] || (M[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              M[2] || (M[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              M[3] || (M[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(P, { key: 1 }, [
              M[4] || (M[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              M[5] || (M[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, P0)) : w("", !0),
        o("div", {
          class: z(["grid", [_.joined ? "gap-px" : "gap-3", b.value]])
        }, [
          (t(!0), n(P, null, V(_.segments, (A) => (t(), n("div", {
            key: A.key,
            class: z(["bg-card flex flex-col gap-2 p-4", _.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", O0, f(A.label), 1),
            o("div", j0, [
              e.loading ? (t(), T(we, {
                key: 0,
                variant: "number"
              })) : u(A) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${A.label} hidden. Show it.`,
                title: `Show ${A.label}`,
                onClick: (R) => h(A)
              }, [
                (t(), n(P, null, V(5, (R) => o("span", {
                  key: R,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, L0)) : d(A) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${A.label}, ${v(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (R) => h(A)
              }, f(v(A.value)), 9, V0)) : (t(), n("span", T0, f(v(A.value)), 1)),
              A.trend && !e.loading && !u(A) ? (t(), T(Sa, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : w("", !0)
            ]),
            A.sparkline?.length && !e.loading && !u(A) ? (t(), T(ut, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : w("", !0),
            A.caption || A.comparison && A.trend ? (t(), n("p", D0, f(A.caption ?? A.comparison), 1)) : w("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, A0))), 128))
    ]));
  }
}), F0 = ["aria-label"], E0 = ["aria-valuenow", "aria-label"], I0 = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, N0 = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, R0 = ["title"], U0 = { class: "font-medium" }, H0 = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, K0 = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, q0 = { class: "flex items-center justify-between gap-2" }, G0 = { class: "text-sm font-semibold" }, W0 = { class: "flex items-center gap-3" }, Z0 = ["href"], J0 = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Y0 = { class: "flex min-w-0 flex-col gap-0.5" }, Q0 = { class: "text-sm font-medium" }, X0 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, ek = {
  key: 1,
  class: "flex flex-col gap-2"
}, tk = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ak = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, nk = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, y3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = y(() => a.items.find((k) => !k.done) ?? null), i = y(() => a.items.filter((k) => k.key !== s.value?.key)), d = y(() => a.items.length), u = y(() => a.items.filter((k) => k.done).length), m = y(() => {
      if (!s.value)
        return d.value;
      const k = a.items.findIndex((S) => S.key === s.value?.key);
      return k >= 0 ? k + 1 : 1;
    }), g = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = y(() => {
      const k = a.linkComponent;
      return typeof k == "string" ? k : aa(k);
    }), b = Ge({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = Ge({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), $ = Ge({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (k, S) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
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
          style: ne({ width: `${g.value}%` })
        }, null, 4)
      ], 8, E0),
      o("div", I0, [
        o("span", N0, " Step " + f(m.value) + " of " + f(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", U0, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", H0, f(": " + s.value.detail), 1)) : w("", !0)
        ], 8, R0),
        s.value?.href ? (t(), T(ye(p.value), {
          key: 0,
          href: s.value.href,
          class: z(x(C))
        }, {
          default: j(() => [
            U(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : w("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: S[0] || (S[0] = (h) => r("skip"))
        }, f(e.skipLabel), 1)) : w("", !0)
      ])
    ], 8, F0)) : e.items.length ? (t(), n("section", K0, [
      o("div", q0, [
        o("h2", G0, f(e.heading), 1),
        o("div", W0, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: S[1] || (S[1] = (h) => r("skip"))
          }, f(e.skipLabel), 1)) : w("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, Z0)) : w("", !0)
        ])
      ]),
      s.value ? (t(), n("div", J0, [
        S[2] || (S[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Y0, [
          o("p", Q0, f(s.value.title), 1),
          s.value.detail ? (t(), n("p", X0, f(s.value.detail), 1)) : w("", !0),
          s.value.href ? (t(), T(ye(p.value), {
            key: 1,
            href: s.value.href,
            class: z(x(b))
          }, {
            default: j(() => [
              U(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : w("", !0)
        ])
      ])) : w("", !0),
      i.value.length ? (t(), n("ul", ek, [
        (t(!0), n(P, null, V(i.value, (h) => (t(), n("li", {
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
            h.done ? (t(), n("svg", tk, [...S[3] || (S[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : w("", !0)
          ], 2),
          o("div", ak, [
            o("p", {
              class: z(["text-sm", h.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(h.title), 3),
            !h.done && h.detail ? (t(), n("p", nk, f(h.detail), 1)) : w("", !0)
          ]),
          !h.done && h.href ? (t(), T(ye(p.value), {
            key: 0,
            href: h.href,
            class: z(x($))
          }, {
            default: j(() => [
              U(f(h.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : w("", !0)
        ]))), 128))
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), lk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, ok = { class: "hidden items-center gap-2 md:flex" }, sk = { class: "md:hidden" }, rk = { class: "border-b px-4 py-3" }, ik = { class: "text-muted-foreground text-xs" }, dk = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, uk = { class: "font-medium tabular-nums" }, ck = { class: "ml-auto flex items-center gap-3" }, k3 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = q(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", lk, [
      o("div", ok, [
        K(i.$slots, "actions")
      ]),
      o("div", sk, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        F(Tt, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: j(() => [
            F(Dt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                o("div", rk, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", ik, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", dk, [
                  K(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", uk, [
        e.allMatching ? (t(), n(P, { key: 0 }, [
          U(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(P, { key: 1 }, [
          U(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", ck, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => a("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : w("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), fk = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, mk = { class: "text-muted-foreground text-xs tabular-nums" }, pk = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, vk = ["value"], gk = ["value"], hk = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, bk = ["disabled"], xk = ["disabled"], yk = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, kk = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, $k = ["disabled"], $3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = (m) => new Intl.NumberFormat().format(m), i = y(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = y(() => (a.page - 1) * a.perPage + a.rowsOnPage), u = y(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (m, g) => (t(), n("div", fk, [
      o("p", mk, [
        U(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(P, { key: 0 }, [
          U("of " + f(s(e.total)), 1)
        ], 64)) : w("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", pk, [
        g[4] || (g[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: g[0] || (g[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(P, null, V(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, f(p), 9, gk))), 128))
        ], 40, vk)
      ])) : w("", !0),
      o("nav", hk, [
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
        ])], 8, bk),
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
        ])], 8, xk),
        o("span", yk, f(e.page), 1),
        u.value !== null ? (t(), n("span", kk, " of " + f(s(u.value)), 1)) : w("", !0),
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
        ])], 8, $k)
      ])
    ]));
  }
}), wk = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Ck = ["aria-current"], Sk = ["title"], Mk = ["aria-current", "onClick"], Bk = ["title"], _k = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", wk, [
      o("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => a("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Sk)) : (t(), T(we, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Ck),
      (t(!0), n(P, null, V(e.tabs, (d) => (t(), n("button", {
        key: d,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => a("select", d)
      }, [
        U(f(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, Bk)) : (t(), T(we, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Mk))), 128))
    ]));
  }
}), w3 = /* @__PURE__ */ Lt(_k, [["__scopeId", "data-v-3967c945"]]), Ak = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Pk = { class: "grid gap-2" }, zk = {
  key: 0,
  class: "text-destructive text-sm"
}, Ok = { class: "flex gap-2" }, C3 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = q((() => {
      const C = navigator.userAgent, $ = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: S }) => S.test(C))?.name, k = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: S }) => S.test(C))?.name;
      return [$, k].filter(Boolean).join(" on ") || "";
    })()), i = q(!1), d = Da(null), u = y(() => d.value?.isLoading.value ?? !1), m = y(() => d.value?.error.value ?? null), g = y(() => d.value?.isSupported.value ?? !1);
    pe(async () => {
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
    }, b = () => {
      i.value = !1, s.value = "";
    };
    return (C, $) => g.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", Pk, [
        $[3] || ($[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ce(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": $[1] || ($[1] = (k) => s.value = k),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [ke, s.value]
        ]),
        $[4] || ($[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      m.value ? (t(), n("p", zk, f(m.value), 1)) : w("", !0),
      o("div", Ok, [
        F(se, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: j(() => [
            U(f(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          type: "button",
          variant: "ghost",
          onClick: b
        }, {
          default: j(() => [...$[5] || ($[5] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(se, {
      key: 1,
      variant: "outline",
      onClick: $[0] || ($[0] = (k) => i.value = !0)
    }, {
      default: j(() => [...$[2] || ($[2] = [
        U(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", Ak, " Passkeys are not supported in this browser. "));
  }
}), jk = { class: "pk-form-stack" }, Lk = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, S3 = /* @__PURE__ */ O({
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
    xt("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), xt("panelCreateOption", {
      run(m, g) {
        return a.createOption ? a.createOption(m, g) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => a.nodes.length > 0), i = y(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => a.errors._conflict);
    function u(m) {
      if (a.upload)
        return (g, p) => a.upload(m, g, p);
    }
    return (m, g) => (t(), n("div", jk, [
      d.value ? (t(), n("p", Lk, f(d.value), 1)) : w("", !0),
      s.value ? (t(!0), n(P, { key: 1 }, V(e.nodes, (p, b) => (t(), T(pa, {
        key: b,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: g[0] || (g[0] = (C, $) => r("change", C, $)),
        onAffixAction: g[1] || (g[1] = (C, $) => r("affix-action", C, $))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(P, null, V(e.fields, (p) => (t(), T(Re, {
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
}), Vk = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, Tk = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, Dk = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Fk = ["disabled"], Ek = ["disabled"], Ik = ["disabled"], M3 = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Ue, { to: "body" }, [
      F(Ve, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), n("div", Vk, [
            o("div", Tk, [
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
              o("span", Dk, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, f(e.discardLabel), 9, Fk)) : w("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, f(e.cancelLabel), 9, Ek),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Ik)
            ])
          ])) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function B3(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = q(bt(e.value)), s = y(() => bt(e.value) !== r.value);
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
    a && window.addEventListener("beforeunload", u);
  }), ge(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function bt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const Nk = {
  key: 0,
  class: "flex flex-col gap-1"
}, Rk = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, Uk = { class: "text-foreground text-sm font-medium" }, Hk = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, Kk = {
  key: 5,
  class: "max-w-full font-normal"
}, qk = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, Gk = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, Wk = {
  key: 6,
  class: "font-normal"
}, Zk = {
  key: 0,
  class: "divide-y rounded-md border"
}, Jk = { class: "text-muted-foreground truncate font-medium" }, Yk = { class: "text-foreground col-span-2 break-words" }, Qk = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, Xk = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, e2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, t2 = ["href"], a2 = { class: "flex min-w-0 items-start gap-2.5" }, n2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, l2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, o2 = ["d"], s2 = { class: "min-w-0" }, r2 = { class: "flex flex-wrap items-center gap-2" }, i2 = { class: "text-sm font-semibold" }, d2 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, u2 = ["onClick"], _3 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(!a.node.collapsed), i = q(0), d = y(() => a.depth === 0), u = y(() => {
      const $ = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return $ >= 3 ? "sm:grid-cols-3" : $ === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), m = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, g = y(() => a.node.key ? a.record[a.node.key] : null), p = y(() => {
      const $ = g.value;
      return $ == null || $ === "";
    }), b = y(() => {
      if (p.value)
        return "None";
      const $ = g.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String($)).toLocaleDateString(void 0, m[a.node.type]);
      let k = String($);
      return a.node.transform === "upper" && (k = k.toUpperCase()), a.node.transform === "lower" && (k = k.toLowerCase()), [a.node.prefix, k, a.node.suffix].filter(Boolean).join(" ");
    }), C = y(() => {
      const $ = typeof g.value == "boolean" ? g.value ? "1" : "" : String(g.value), k = a.node.colors?.[$] ?? a.node.defaultColor ?? "neutral";
      return Ft[k] ?? "outline";
    });
    return ($, k) => {
      const S = _t("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", Nk, [
        o("dt", Rk, f(e.node.label), 1),
        o("dd", Uk, [
          e.node.type === "badge" && x(zd)(g.value) ? (t(), T(We, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: j(() => [
              U(f(g.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", Hk, "None")) : e.node.type === "icon" ? (t(), T(dd, {
            key: 2,
            value: g.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(fd, {
            key: 3,
            src: g.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(hd, {
            key: 4,
            value: typeof g.value == "string" ? g.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", Kk, [
            e.node.language ? (t(), n("p", qk, f(e.node.language), 1)) : w("", !0),
            o("pre", Gk, [
              o("code", null, f(g.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", Wk, [
            g.value && typeof g.value == "object" && !Array.isArray(g.value) && Object.keys(g.value).length ? (t(), n("dl", Zk, [
              (t(!0), n(P, null, V(g.value, (h, v) => (t(), n("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", Jk, f(v), 1),
                o("dd", Yk, f(h), 1)
              ]))), 128))
            ])) : (t(), n("span", Qk, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", Xk, [
            (t(!0), n(P, null, V(Array.isArray(g.value) ? g.value : [], (h, v) => (t(), n("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(P, null, V(e.node.entries ?? [], (c, M) => (t(), T(S, {
                key: M,
                node: c,
                record: h,
                depth: e.depth + 1,
                onAction: k[0] || (k[0] = (_) => r("action", _))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(g.value) || g.value.length === 0 ? (t(), n("span", e2, "None")) : w("", !0)
          ])) : e.node.url && !p.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(b.value), 9, t2)) : (t(), n("span", {
            key: 9,
            class: z([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(b.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: k[1] || (k[1] = (h) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : w("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: z(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: k[2] || (k[2] = (h) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", a2, [
            e.node.icon ? (t(), n("div", n2, [
              (t(), n("svg", l2, [
                o("path", {
                  d: x(ie)(e.node.icon)
                }, null, 8, o2)
              ]))
            ])) : w("", !0),
            o("div", s2, [
              o("div", r2, [
                o("h3", i2, f(e.node.label), 1),
                e.node.status ? (t(), T(be, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : w("", !0)
              ]),
              e.node.description ? (t(), n("p", d2, f(e.node.description), 1)) : w("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(P, null, V(e.node.children ?? [], (h, v) => (t(), T(S, {
            key: v,
            node: h,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[3] || (k[3] = (c) => r("action", c))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(P, null, V(e.node.children ?? [], (h, v) => (t(), T(S, {
          key: v,
          node: h,
          record: e.record,
          depth: e.depth + 1,
          onAction: k[4] || (k[4] = (c) => r("action", c))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: z(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(P, null, V(e.node.children ?? [], (h, v) => (t(), n("button", {
            key: v,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (c) => i.value = v
          }, f(h.label), 11, u2))), 128))
        ], 2),
        (t(!0), n(P, null, V(e.node.children ?? [], (h, v) => ce((t(), n("div", {
          key: v,
          class: z(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(P, null, V(h.children ?? [], (c, M) => (t(), T(S, {
            key: M,
            node: c,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[5] || (k[5] = (_) => r("action", _))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Te, i.value === v]
        ])), 128))
      ], 2)) : w("", !0);
    };
  }
}), c2 = { class: "text-muted-foreground text-sm" }, f2 = { class: "flex items-start gap-3" }, m2 = { class: "min-w-0 flex-1" }, p2 = { class: "flex flex-wrap items-center gap-2" }, v2 = { class: "truncate text-sm font-medium" }, g2 = { class: "text-muted-foreground mt-0.5 text-xs" }, h2 = { class: "text-muted-foreground text-xs" }, b2 = { class: "mt-auto flex items-center gap-2" }, x2 = /* @__PURE__ */ O({
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
      class: z(["flex flex-col gap-4", x(xa)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", c2, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: z(x(oc))
      }, [
        (t(!0), n(P, null, V(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", f2, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            o("div", m2, [
              o("div", p2, [
                o("h3", v2, f(u.label), 1),
                F(be, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    U(f(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), T(be, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...d[0] || (d[0] = [
                    U(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), T(be, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...d[1] || (d[1] = [
                    U(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                u.isDefault ? (t(), T(be, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...d[2] || (d[2] = [
                    U(" Default ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                u.connected && u.mode ? (t(), T(be, {
                  key: 3,
                  status: u.mode
                }, {
                  default: j(() => [
                    U(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : w("", !0)
              ]),
              o("p", g2, f(u.caption), 1)
            ])
          ]),
          o("p", h2, f(u.methods.join(" · ")), 1),
          o("div", b2, [
            F(se, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", u.key)
            }, {
              default: j(() => [...d[3] || (d[3] = [
                U(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            F(se, {
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
}), y2 = { class: "flex flex-col gap-6" }, k2 = { class: "relative" }, $2 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, w2 = ["d"], C2 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, S2 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, M2 = { class: "flex flex-wrap items-center gap-2" }, B2 = { class: "text-muted-foreground text-sm" }, _2 = { class: "flex flex-col gap-1 text-sm" }, A2 = ["value"], P2 = {
  key: 0,
  class: "flex flex-col gap-2"
}, z2 = { class: "flex flex-wrap items-center gap-2" }, O2 = {
  key: 1,
  class: "flex items-center gap-2"
}, A3 = /* @__PURE__ */ O({
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
    const l = Qe(e, "gateways"), a = q(null), r = q(""), s = y(
      () => l.value.find(($) => $.key === a.value) ?? null
    ), i = y(() => {
      const $ = r.value.trim().toLowerCase();
      return $ === "" ? l.value : l.value.filter((k) => [k.key, k.label, k.caption, ...k.methods].join(" ").toLowerCase().includes($));
    });
    function d($) {
      return $.connected && $.enabled !== !1;
    }
    function u($, k) {
      l.value = l.value.map(
        (S) => S.key === $ ? { ...S, ...k } : S
      );
    }
    function m($) {
      a.value = $;
    }
    function g($) {
      const k = l.value.find((h) => h.key === $);
      if (!k)
        return;
      const S = !k.connected;
      u($, {
        connected: S,
        mode: S ? k.mode ?? "test" : null,
        enabled: S,
        isDefault: !1
      });
    }
    function p($, k) {
      const S = l.value.find((h) => h.key === $);
      S?.connected && u($, { enabled: k, isDefault: k ? S.isDefault : !1 });
    }
    function b($) {
      const k = l.value.find((S) => S.key === $);
      !k || !d(k) || (l.value = l.value.map((S) => ({
        ...S,
        isDefault: S.key === $
      })));
    }
    function C($) {
      const k = a.value;
      !k || !l.value.find((h) => h.key === k)?.connected || u(k, { mode: $ });
    }
    return ($, k) => (t(), n(P, null, [
      o("div", y2, [
        F(Pe, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", k2, [
          (t(), n("svg", $2, [
            o("path", {
              d: x(ie)("search")
            }, null, 8, w2)
          ])),
          F(he, {
            modelValue: r.value,
            "onUpdate:modelValue": k[0] || (k[0] = (S) => r.value = S),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(x2, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: g
        }, null, 8, ["gateways"])) : (t(), n("p", C2, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      F(Rt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: k[8] || (k[8] = (S) => a.value = null)
      }, {
        footer: j(() => [
          F(se, {
            variant: "outline",
            size: "sm",
            onClick: k[6] || (k[6] = (S) => a.value = null)
          }, {
            default: j(() => [...k[21] || (k[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(se, {
            key: 0,
            size: "sm",
            onClick: k[7] || (k[7] = (S) => g(s.value.key))
          }, {
            default: j(() => [
              U(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : w("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), n("div", S2, [
            o("div", M2, [
              F(be, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: j(() => [
                  U(f(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(be, {
                key: 0,
                status: "offered"
              }, {
                default: j(() => [...k[9] || (k[9] = [
                  U(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(be, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...k[10] || (k[10] = [
                  U(" Disabled ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.isDefault ? (t(), T(be, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...k[11] || (k[11] = [
                  U(" Default ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.connected && s.value.mode ? (t(), T(be, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  U(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : w("", !0)
            ]),
            o("p", B2, f(s.value.caption), 1),
            o("label", _2, [
              k[12] || (k[12] = U(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, A2)
            ]),
            k[20] || (k[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", P2, [
              k[16] || (k[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              k[17] || (k[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", z2, [
                F(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: k[1] || (k[1] = (S) => p(s.value.key, !0))
                }, {
                  default: j(() => [...k[13] || (k[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                F(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: k[2] || (k[2] = (S) => p(s.value.key, !1))
                }, {
                  default: j(() => [...k[14] || (k[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                F(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: k[3] || (k[3] = (S) => b(s.value.key))
                }, {
                  default: j(() => [...k[15] || (k[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : w("", !0),
            s.value.connected ? (t(), n("div", O2, [
              F(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: k[4] || (k[4] = (S) => C("test"))
              }, {
                default: j(() => [...k[18] || (k[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              F(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: k[5] || (k[5] = (S) => C("live"))
              }, {
                default: j(() => [...k[19] || (k[19] = [
                  U(" Live ", -1)
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
function ta(e) {
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
function P3(e) {
  const l = q(ta(e));
  pe(() => {
    l.value = ta(e);
  }), ue(
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
    const m = new Set(l.value);
    m.has(u) ? m.delete(u) : m.add(u), l.value = m;
  }
  function r(u) {
    const m = new Set(l.value);
    m.add(u), l.value = m;
  }
  function s(u) {
    const m = new Set(l.value);
    m.delete(u), l.value = m;
  }
  function i(u) {
    l.value = new Set(u);
  }
  function d() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: a, hide: r, show: s, setHidden: i, reset: d };
}
function z3(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = q(
    l.driver === "none" ? "off" : "connecting"
  ), m = q(/* @__PURE__ */ new Set());
  let g = /* @__PURE__ */ new Map(), p, b, C, $ = (/* @__PURE__ */ new Date()).toISOString(), k = null;
  function S(W, J) {
    g.set(W, { ...g.get(W) ?? {}, ...J }), !p && (p = setTimeout(() => {
      p = void 0, h();
    }, l.batchMs));
  }
  function h() {
    if (g.size === 0)
      return;
    const W = g;
    g = /* @__PURE__ */ new Map();
    const J = /* @__PURE__ */ new Set();
    for (const [ae, te] of W) {
      const Y = a.value.find((Z) => Z[r] === ae);
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
    if (!(!s || a.value.length === 0)) {
      C?.abort(), C = new AbortController();
      try {
        const W = a.value.map((te) => te[r]), { records: J, at: ae } = await s(W, $);
        $ = ae, u.value = "live";
        for (const te of J)
          S(te[r], te);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function c() {
    M(), u.value = "live", b = setInterval(v, l.intervalMs);
  }
  function M() {
    clearInterval(b), b = void 0, C?.abort();
  }
  function _() {
    return window.Echo ?? null;
  }
  function A() {
    const W = _();
    if (!W || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    k = l.channel;
    const J = W.private(l.channel);
    for (const ae of l.events)
      J.listen(ae, (te) => {
        te?.[r] !== void 0 && S(te[r], te);
      });
    u.value = "live", W.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), W.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function R() {
    k && (_()?.leave(k), k = null);
  }
  function E() {
    l.driver === "poll" && c(), l.driver === "broadcast" && A();
  }
  function ee() {
    M(), R(), clearTimeout(p), p = void 0, g = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (ee(), u.value = "paused") : ($ = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return pe(() => {
    l.driver !== "none" && (E(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ge(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: u, recentlyChanged: m, applyPatch: S, flush: h, pollOnce: v };
}
const j2 = /^[a-z0-9-]+$/, L2 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function O3(e) {
  Fa(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !j2.test(a) || typeof r != "string" || !L2.test(r) || (l[`--${a}`] = r);
    nu(l);
  });
}
const V2 = { class: "flex items-center gap-0.5" }, T2 = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", V2, [
      String(e.value) === "mono" ? (t(), n(P, { key: 0 }, [
        a[0] || (a[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        a[1] || (a[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        a[2] || (a[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), n(P, { key: 1 }, [
        a[3] || (a[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        a[4] || (a[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        a[5] || (a[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), D2 = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(Ca, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), F2 = { class: "flex flex-col gap-2" }, E2 = { class: "bg-card rounded-lg border p-4" }, I2 = { class: "text-muted-foreground truncate text-xs" }, N2 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, R2 = /* @__PURE__ */ O({
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
      const k = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return k === "" ? d.value : `${d.value} › ${k.split("/").join(" › ")}`;
    });
    function m(k, S) {
      return k.length <= S ? k : `${k.slice(0, S - 1).trimEnd()}…`;
    }
    const g = y(() => m(s.value, r.value.titleMax)), p = y(() => m(i.value, r.value.descriptionMax));
    function b(k, S, h) {
      return k === 0 ? { tone: "text-muted-foreground", note: "empty" } : k > h ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : k < S ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = y(
      () => b(s.value.length, r.value.titleMin, r.value.titleMax)
    ), $ = y(
      () => b(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (k, S) => (t(), n("div", F2, [
      o("div", E2, [
        o("p", I2, f(u.value), 1),
        o("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", g.value === "" ? "text-muted-foreground italic" : ""])
        }, f(g.value || "Untitled page"), 3),
        o("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", N2, [
        o("span", {
          class: z(C.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(C.value.note), 3),
        o("span", {
          class: z($.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f($.value.note), 3)
      ]),
      S[0] || (S[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function U2() {
  xe("radio", Tf), xe("checkboxlist", Ef), xe("tags", qf), xe("colour", lm), xe("slider", Dm), xe("visual-select", Jm), xe("markdown", vf), xe("code", $f), xe("map", dm), xe("qrcode", pm), xe("barcode", km), xe("diff", Cm), xe("seo-preview", R2), gt("swatch", Qm), gt("voucher-code-box", D2), gt("document-colour-mode", T2);
}
function Ba() {
  const e = q(null), l = q(!1);
  let a = null;
  return pe(() => {
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
  }), ge(() => a?.disconnect()), { el: e, shown: l };
}
const H2 = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Ba();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: z(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      K(r.$slots, "default")
    ], 6));
  }
}), K2 = ["id"], Me = /* @__PURE__ */ O({
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
        F(H2, null, {
          default: j(() => [
            K(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, K2));
  }
}), q2 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, G2 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, W2 = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Fe = /* @__PURE__ */ O({
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
      e.eyebrow ? (t(), n("p", q2, f(e.eyebrow), 1)) : w("", !0),
      e.title ? (t(), n("h2", G2, f(e.title), 1)) : w("", !0),
      e.body ? (t(), n("p", W2, f(e.body), 1)) : w("", !0)
    ], 2)) : w("", !0);
  }
});
function Z2() {
  const e = q(null);
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
  return pe(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ge(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const J2 = { class: "pk-tilt-inner relative h-full" }, Y2 = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = Z2();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", J2, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        K(a.$slots, "default")
      ])
    ], 512));
  }
}), Q2 = { class: "flex flex-col gap-10" }, X2 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, e$ = { class: "text-base font-semibold" }, t$ = { class: "text-sm text-pretty text-muted-foreground" }, a$ = /* @__PURE__ */ O({
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
      default: j(() => [
        o("div", Q2, [
          F(Fe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", X2, [
            (t(!0), n(P, null, V(e.items ?? [], (s, i) => (t(), T(Y2, {
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
                  o("h3", e$, f(s.title), 1),
                  o("p", t$, f(s.body), 1)
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
}), n$ = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, l$ = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, o$ = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, s$ = ["href"], r$ = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: j(() => [
        o("div", n$, [
          o("h2", l$, f(e.title), 1),
          e.body ? (t(), n("p", o$, f(e.body), 1)) : w("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, s$)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), i$ = { class: "flex flex-col gap-8" }, d$ = { class: "divide-y rounded-lg border" }, u$ = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, c$ = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, f$ = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, { narrow: "" }, {
      default: j(() => [
        o("div", i$, [
          F(Fe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", d$, [
            (t(!0), n(P, null, V(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", u$, [
                U(f(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", c$, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), m$ = { class: "flex flex-col gap-10" }, p$ = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, v$ = { class: "text-sm font-semibold" }, g$ = { class: "text-sm text-pretty text-muted-foreground" }, h$ = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: j(() => [
        o("div", m$, [
          F(Fe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", p$, [
            (t(!0), n(P, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", v$, f(r.title), 1),
              o("p", g$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), b$ = { class: "flex flex-col items-center gap-6 text-center" }, x$ = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, y$ = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, k$ = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, $$ = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, w$ = ["href"], C$ = ["href"], S$ = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, M$ = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Me, null, {
      default: j(() => [
        o("div", b$, [
          e.eyebrow ? (t(), n("p", x$, f(e.eyebrow), 1)) : w("", !0),
          o("h1", y$, f(e.title), 1),
          e.body ? (t(), n("p", k$, f(e.body), 1)) : w("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", $$, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, w$)) : w("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, C$)) : w("", !0)
          ])) : w("", !0),
          e.note ? (t(), n("p", S$, f(e.note), 1)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), B$ = { class: "flex flex-col items-center gap-6" }, _$ = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, A$ = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, P$ = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, { muted: "" }, {
      default: j(() => [
        o("div", B$, [
          e.title ? (t(), n("p", _$, f(e.title), 1)) : w("", !0),
          o("ul", A$, [
            (t(!0), n(P, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), z$ = { class: "flex flex-col gap-10" }, O$ = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, j$ = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, L$ = ["aria-pressed"], V$ = ["aria-pressed"], T$ = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, D$ = { class: "grid gap-4 md:grid-cols-3" }, F$ = { class: "flex flex-col gap-1" }, E$ = { class: "text-sm font-semibold" }, I$ = { class: "flex items-baseline gap-1" }, N$ = { class: "text-3xl font-semibold tracking-tight" }, R$ = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, U$ = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, H$ = { class: "flex flex-col gap-2 text-sm" }, K$ = { class: "text-muted-foreground" }, q$ = ["href"], G$ = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = q(!1), r = y(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), T(Me, { muted: "" }, {
      default: j(() => [
        o("div", z$, [
          F(Fe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", O$, [
            o("div", j$, [
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, L$),
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, V$)
            ]),
            e.annualNote ? (t(), n("p", T$, f(e.annualNote), 1)) : w("", !0)
          ])) : w("", !0),
          o("ul", D$, [
            (t(!0), n(P, null, V(e.items ?? [], (u, m) => (t(), n("li", {
              key: m,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", F$, [
                o("h3", E$, f(u.name), 1),
                o("p", I$, [
                  o("span", N$, f(s(u)), 1),
                  u.period ? (t(), n("span", R$, f(u.period), 1)) : w("", !0)
                ]),
                u.body ? (t(), n("p", U$, f(u.body), 1)) : w("", !0)
              ]),
              o("ul", H$, [
                (t(!0), n(P, null, V(u.features ?? [], (g, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", K$, f(g.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, q$)) : w("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function W$() {
  const e = q(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const u = l.getBoundingClientRect(), m = u.height + window.innerHeight, g = m <= 0 ? 0 : (window.innerHeight - u.top) / m;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(g, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return pe(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, u || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((m) => {
        s = m.some((g) => g.isIntersecting), s && d();
      }), a.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), ge(() => {
    a?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const Z$ = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, J$ = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Y$ = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Q$ = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, X$ = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, ew = { class: "pk-showcase-stage w-full [perspective:1400px]" }, tw = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, aw = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, nw = { class: "ml-3 truncate text-xs text-muted-foreground" }, lw = { class: "flex" }, ow = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, sw = { class: "min-w-0 flex-1 p-4" }, rw = { class: "flex flex-col divide-y rounded-md border" }, iw = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = W$();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Z$, [
        o("div", J$, [
          o("div", Y$, [
            o("h2", Q$, f(e.title), 1),
            e.body ? (t(), n("p", X$, f(e.body), 1)) : w("", !0)
          ]),
          o("div", ew, [
            o("div", tw, [
              o("div", aw, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", nw, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", lw, [
                o("div", ow, [
                  (t(), n(P, null, V(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", sw, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", rw, [
                    (t(!0), n(P, null, V(e.rows, (s) => (t(), n("div", {
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
}), dw = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Ba(), s = q(0);
    return ue(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), m = (g) => {
        const p = Math.min((g - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = l.to;
      };
      requestAnimationFrame(m);
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), uw = { class: "flex flex-col gap-10" }, cw = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, fw = { class: "order-2 text-sm text-muted-foreground" }, mw = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, pw = /* @__PURE__ */ O({
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
      default: j(() => [
        o("div", uw, [
          F(Fe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", cw, [
            (t(!0), n(P, null, V(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", fw, f(s.label), 1),
              o("dd", mw, [
                l(s.value) ? (t(), T(dw, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(P, { key: 1 }, [
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
}), vw = { class: "flex flex-col gap-10" }, gw = { class: "grid gap-6 md:grid-cols-3" }, hw = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, bw = { class: "text-sm font-semibold" }, xw = { class: "text-sm text-pretty text-muted-foreground" }, yw = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: j(() => [
        o("div", vw, [
          F(Fe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", gw, [
            (t(!0), n(P, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", hw, f(s + 1), 1),
              o("h3", bw, f(r.title), 1),
              o("p", xw, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), kw = { class: "flex flex-col gap-10" }, $w = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, ww = { class: "text-pretty text-sm leading-relaxed" }, Cw = { class: "mt-auto flex items-center gap-3" }, Sw = ["src"], Mw = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, Bw = { class: "min-w-0" }, _w = { class: "block truncate text-sm font-medium" }, Aw = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, Pw = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: j(() => [
        o("div", kw, [
          F(Fe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", $w, [
            (t(!0), n(P, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", ww, " “" + f(r.quote) + "” ", 1),
              o("figcaption", Cw, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, Sw)) : (t(), n("span", Mw, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", Bw, [
                  o("span", _w, f(r.name), 1),
                  r.role ? (t(), n("span", Aw, f(r.role), 1)) : w("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), j3 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: M$,
      logos: P$,
      features: h$,
      bento: a$,
      showcase: iw,
      steps: yw,
      stats: pw,
      testimonials: Pw,
      pricing: G$,
      faq: f$,
      cta: r$
    }, s = y(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(P, null, V(s.value, (u) => (t(), T(ye(u.component), le({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), zw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, L3 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", zw, [
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
}), Ow = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, V3 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", Ow, [...a[0] || (a[0] = [
      Bt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), jw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, T3 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", jw, [...a[0] || (a[0] = [
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
U2();
const D3 = "0.0.1";
export {
  o3 as AdminDirectory,
  Qu as Alert,
  Xu as AlertDescription,
  ec as AlertTitle,
  H5 as AppPageFooter,
  r4 as AppearanceDrawer,
  s5 as Avatar,
  r5 as AvatarFallback,
  i5 as AvatarImage,
  Ft as BADGE_VARIANTS,
  n4 as BadgeResolver,
  Q5 as BarChart,
  d5 as Breadcrumb,
  u5 as BreadcrumbEllipsis,
  c5 as BreadcrumbItem,
  f5 as BreadcrumbLink,
  m5 as BreadcrumbList,
  p5 as BreadcrumbPage,
  v5 as BreadcrumbSeparator,
  Uw as BulkActions,
  xa as CATALOGUE_CONTAINER,
  oc as CATALOGUE_GRID,
  p4 as CATALOGUE_GRID_TIGHT,
  sc as CATALOGUE_GRID_TILES,
  L5 as Card,
  V5 as CardAction,
  T5 as CardContent,
  D5 as CardDescription,
  F5 as CardFooter,
  E5 as CardHeader,
  I5 as CardTitle,
  ay as CartPanel,
  p3 as CatalogBrowser,
  _1 as CatalogCard,
  Ma as CatalogFilterSheet,
  Nt as CatalogGrid,
  f3 as CatalogInspect,
  Ky as CatalogItemDetail,
  m3 as CatalogItemView,
  v3 as CatalogRegister,
  c3 as CatalogTill,
  Xg as ChartCard,
  tt as ChartTooltip,
  rr as Checkbox,
  Qw as CheckboxCell,
  Xw as CodeCell,
  hd as ColourCell,
  n3 as ComboChart,
  sr as CreateOptionDialog,
  ar as CreateOptionError,
  h3 as DASHBOARD_HIDDEN_STORAGE_KEY,
  M0 as DASHBOARD_HIDE_KEY,
  b3 as DashboardShortcuts,
  Ml as DataTable,
  w5 as Dialog,
  C5 as DialogClose,
  S5 as DialogContent,
  M5 as DialogDescription,
  B5 as DialogFooter,
  _5 as DialogHeader,
  Tc as DialogOverlay,
  A5 as DialogScrollContent,
  P5 as DialogTitle,
  z5 as DialogTrigger,
  o3 as DirectoryPage,
  q4 as DropdownMenu,
  G4 as DropdownMenuCheckboxItem,
  W4 as DropdownMenuContent,
  Z4 as DropdownMenuGroup,
  J4 as DropdownMenuItem,
  Y4 as DropdownMenuLabel,
  I3 as DropdownMenuPortal,
  Q4 as DropdownMenuRadioGroup,
  X4 as DropdownMenuRadioItem,
  e5 as DropdownMenuSeparator,
  t5 as DropdownMenuShortcut,
  a5 as DropdownMenuSub,
  n5 as DropdownMenuSubContent,
  l5 as DropdownMenuSubTrigger,
  o5 as DropdownMenuTrigger,
  t4 as EditableCell,
  Be as FOCUS_RING,
  Hw as FOCUS_RING_SOFT,
  Kt as FOCUS_RING_WITHIN,
  h4 as FORM_MEASURE,
  Re as FormFieldControl,
  l3 as HeatmapChart,
  mt as ICON_PATHS,
  dd as IconCell,
  fd as ImageCell,
  _3 as InfoNode,
  ic as JPEG_IMAGE_ERROR,
  e4 as KeyValueCell,
  O5 as Label,
  gv as LineChart,
  Tx as LineItems,
  rt as MiniStatCard,
  g5 as NavigationMenu,
  h5 as NavigationMenuContent,
  b5 as NavigationMenuIndicator,
  x5 as NavigationMenuItem,
  y5 as NavigationMenuLink,
  k5 as NavigationMenuList,
  $5 as NavigationMenuTrigger,
  Lc as NavigationMenuViewport,
  rc as OPAQUE_IMAGE_ERROR,
  De as PAGE_SHELL,
  v4 as PAGE_SHELL_COMPACT,
  g4 as PAGE_SHELL_STACK,
  A3 as PaymentGatewaySettings,
  x2 as PaymentGateways,
  X5 as PieChart,
  f4 as PkAlertError,
  L3 as PkAuroraBackdrop,
  We as PkBadge,
  km as PkBarcode,
  a$ as PkBento,
  i4 as PkBottomNav,
  N5 as PkBoundary,
  G5 as PkBuilder,
  se as PkButton,
  W5 as PkCalendar,
  R5 as PkCard,
  Ef as PkCheckboxList,
  Ca as PkCodeBox,
  $f as PkCodeInput,
  lm as PkColourPicker,
  T3 as PkConsoleBackdrop,
  dw as PkCountUp,
  r$ as PkCta,
  K5 as PkDeviceFrame,
  Cm as PkDiff,
  Ap as PkDocument,
  Ne as PkDropdown,
  V3 as PkEditorialBackdrop,
  yt as PkEmptyState,
  f$ as PkFaq,
  h$ as PkFeatureGrid,
  $e as PkFieldLabel,
  ma as PkFileUpload,
  Pe as PkHeading,
  M$ as PkHero,
  Vr as PkKeyValue,
  j3 as PkLandingSections,
  P$ as PkLogoCloud,
  sm as PkMap,
  dm as PkMapField,
  vf as PkMarkdownInput,
  Ye as PkModal,
  Vt as PkMultiSelect,
  u4 as PkOtpInput,
  c4 as PkPageHeader,
  C3 as PkPasskeyRegister,
  m4 as PkPasswordInput,
  G$ as PkPricing,
  pm as PkQrCode,
  Sx as PkQtyStepper,
  Ao as PkQueryBuilder,
  Tf as PkRadioGroup,
  q5 as PkRepeater,
  H2 as PkReveal,
  Kr as PkRichEditor,
  Me as PkSection,
  Fe as PkSectionHeading,
  iw as PkShowcase,
  s0 as PkSignaturePad,
  we as PkSkeleton,
  Rt as PkSlideover,
  Dm as PkSlider,
  d4 as PkSpinner,
  pw as PkStats,
  be as PkStatusBadge,
  er as PkStepIndicator,
  yw as PkSteps,
  Qm as PkSwatchPreview,
  qf as PkTagsInput,
  Pw as PkTestimonials,
  he as PkTextInput,
  Y2 as PkTiltCard,
  Jm as PkVisualSelect,
  tb as PlanCard,
  u3 as PlanEditor,
  d3 as PlanGrid,
  a3 as PolarAreaChart,
  t3 as RadarChart,
  l4 as RecordActions,
  S3 as RecordForm,
  Yw as RelationCreateDialog,
  qw as RelationPanel,
  o1 as STATUS_TONES,
  e3 as ScatterChart,
  pa as SchemaNode,
  r3 as SegmentedBar,
  k3 as SelectionBar,
  Ac as Separator,
  y3 as SetupChecklist,
  ba as ShadcnInput,
  Tt as Sheet,
  x4 as SheetClose,
  Dt as SheetContent,
  pc as SheetDescription,
  y4 as SheetFooter,
  vc as SheetHeader,
  gc as SheetTitle,
  k4 as SheetTrigger,
  bh as ShortcutsWidget,
  $4 as Sidebar,
  w4 as SidebarContent,
  C4 as SidebarFooter,
  S4 as SidebarGroup,
  M4 as SidebarGroupAction,
  B4 as SidebarGroupContent,
  _4 as SidebarGroupLabel,
  A4 as SidebarHeader,
  P4 as SidebarInput,
  z4 as SidebarInset,
  O4 as SidebarMenu,
  j4 as SidebarMenuAction,
  L4 as SidebarMenuBadge,
  T4 as SidebarMenuButton,
  D4 as SidebarMenuItem,
  F4 as SidebarMenuSkeleton,
  E4 as SidebarMenuSub,
  I4 as SidebarMenuSubButton,
  N4 as SidebarMenuSubItem,
  R4 as SidebarProvider,
  U4 as SidebarRail,
  H4 as SidebarSeparator,
  K4 as SidebarTrigger,
  g3 as SignatureStudio,
  ut as Sparkline,
  j5 as Spinner,
  s3 as StatCard,
  i3 as StatListChart,
  x3 as StatStrip,
  Ie as Switch,
  ya as TRANSPARENT_IMAGE_HELP,
  $3 as TablePagination,
  lo as TableShell,
  w3 as TableTabs,
  Os as TableToolbar,
  Y5 as ThemeToggle,
  Mc as Tooltip,
  Bc as TooltipContent,
  V4 as TooltipProvider,
  _c as TooltipTrigger,
  Sa as TrendBadge,
  M3 as UnsavedBar,
  tc as alertVariants,
  au as appearanceVars,
  Ct as applyAppearance,
  mc as assertTransparentImage,
  Ge as buttonClasses,
  it as catalogFiltersActive,
  X as cn,
  lr as createOptionActionLabel,
  nr as createOptionTitle,
  A1 as cycleLabel,
  ze as emptyCatalogFilters,
  tr as fieldControl,
  Jw as fieldErrorsFromPayload,
  ix as findExactSku,
  P1 as formatPerkValue,
  zd as hasBadgeValue,
  Gw as hasFieldControl,
  Z5 as hasOptionPreview,
  ie as iconPath,
  cc as imageHasTransparency,
  o4 as initializeAppearance,
  wt as isDark,
  Ut as matchCatalogItem,
  Vc as navigationMenuTriggerStyle,
  Fm as optionPreview,
  b4 as packWidgetColumns,
  z1 as perkGranted,
  It as readAppearance,
  U2 as registerBuiltInFieldControls,
  xe as registerFieldControl,
  gt as registerOptionPreview,
  Ww as registeredFieldTypes,
  Em as registeredOptionPreviews,
  Zw as resetFieldControls,
  J5 as resetOptionPreviews,
  s4 as setAppearancePersister,
  Pc as sidebarMenuButtonVariants,
  d1 as statusBadgeVariant,
  i1 as statusTone,
  Kw as toUrl,
  ha as useAppearance,
  P3 as useColumnVisibility,
  z3 as useLiveUpdates,
  Z2 as usePointer,
  Ba as useReveal,
  a4 as useSchemaColumns,
  W$ as useScrollProgress,
  U5 as useShellPageFooter,
  dt as useSidebar,
  O3 as useTenantTheme,
  B3 as useUnsavedChanges,
  D3 as version
};
//# sourceMappingURL=index.js.map
