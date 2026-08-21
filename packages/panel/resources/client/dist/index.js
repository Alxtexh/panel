import './ui.css';
import { defineComponent as O, openBlock as t, createElementBlock as a, normalizeClass as P, createElementVNode as l, renderSlot as q, unref as g, toDisplayString as f, createCommentVNode as y, computed as k, normalizeStyle as ne, Fragment as _, renderList as V, ref as K, watch as ce, useId as za, withModifiers as me, createTextVNode as U, createVNode as I, createStaticVNode as Mt, createBlock as T, createSlots as Ze, withCtx as j, nextTick as ze, onBeforeUnmount as be, Teleport as Ue, Transition as Ve, onMounted as pe, useSlots as ea, resolveDynamicComponent as xe, mergeProps as le, withDirectives as ue, vModelText as ye, normalizeProps as we, guardReactiveProps as je, defineAsyncComponent as Ut, inject as lt, resolveComponent as Bt, vShow as Te, vModelSelect as Ie, vModelDynamic as _a, isRef as Pa, useTemplateRef as Oa, onErrorCaptured as ja, provide as xt, markRaw as ta, withKeys as La, reactive as Je, useModel as Xe, mergeModels as Oe, shallowRef as Va, watchEffect as Ta } from "vue";
import { Check as aa, AlertCircle as Da, EyeOff as Ea, Eye as Ia, X as At, PanelLeftOpen as Fa, PanelLeftClose as Na, Circle as Ra, ChevronRight as na, MoreHorizontal as Ua, ChevronDown as Ha, Loader2Icon as qa } from "@lucide/vue";
import { reactiveOmit as de, useVModel as la, useMediaQuery as Ka, useEventListener as Ga, defaultDocument as Wa } from "@vueuse/core";
import { useForwardPropsEmits as ve, CheckboxRoot as Za, CheckboxIndicator as Ja, SwitchRoot as Ya, SwitchThumb as Xa, DialogRoot as oa, DialogClose as He, DialogOverlay as zt, DialogPortal as _t, DialogContent as Pt, DialogDescription as sa, DialogTitle as ra, DialogTrigger as ia, createContext as Qa, Primitive as qe, TooltipRoot as en, TooltipPortal as tn, TooltipContent as an, TooltipArrow as nn, TooltipProvider as da, TooltipTrigger as ln, Separator as on, DropdownMenuRoot as sn, DropdownMenuCheckboxItem as rn, DropdownMenuItemIndicator as ua, DropdownMenuPortal as dn, DropdownMenuContent as un, DropdownMenuGroup as cn, useForwardProps as Ce, DropdownMenuItem as fn, DropdownMenuLabel as mn, DropdownMenuRadioGroup as pn, DropdownMenuRadioItem as vn, DropdownMenuSeparator as gn, DropdownMenuSub as hn, DropdownMenuSubContent as bn, DropdownMenuSubTrigger as xn, DropdownMenuTrigger as yn, AvatarRoot as kn, AvatarFallback as $n, AvatarImage as wn, NavigationMenuViewport as Cn, NavigationMenuRoot as Sn, NavigationMenuContent as Mn, NavigationMenuIndicator as Bn, NavigationMenuItem as An, NavigationMenuLink as zn, NavigationMenuList as _n, NavigationMenuTrigger as Pn, Label as On } from "reka-ui";
import { DropdownMenuPortal as c3 } from "reka-ui";
import { clsx as jn } from "clsx";
import { twMerge as Ln } from "tailwind-merge";
import { cva as Ot } from "class-variance-authority";
import { usePage as ca, Link as Vn } from "@inertiajs/vue3";
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
const Tn = ["d"], Dn = { class: "flex max-w-sm flex-col gap-1" }, En = {
  key: 0,
  class: "text-sm"
}, In = {
  key: 0,
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
    return (o, n) => (t(), a("div", {
      "data-slot": "empty-state",
      class: P(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      l("div", {
        class: P(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        q(o.$slots, "icon", {}, () => [
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.75",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: P(e.compact ? "size-5" : "size-6")
          }, [
            l("path", {
              d: g(ie)(e.icon)
            }, null, 8, Tn)
          ], 2))
        ])
      ], 2),
      l("div", Dn, [
        l("p", {
          class: P(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), a("p", En, f(e.description), 1)) : y("", !0)
      ]),
      o.$slots.actions ? (t(), a("div", In, [
        q(o.$slots, "actions")
      ])) : y("", !0)
    ], 2));
  }
}), Fn = ["aria-label"], $e = /* @__PURE__ */ O({
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
    }, r = k(() => n[o.variant] ?? n.text), s = k(() => Math.max(1, Math.min(o.count, 50)));
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
      (t(!0), a(_, null, V(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: P(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Fn));
  }
}), Nn = { class: "w-full border-collapse text-sm" }, Rn = { class: "bg-background sticky top-0 z-10" }, Un = { class: "bg-muted/50" }, Hn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, qn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Kn = ["id", "checked", "indeterminate"], Gn = ["onClick"], Wn = {
  key: 0,
  class: "text-xs"
}, Zn = {
  key: 1,
  class: "text-xs opacity-40"
}, Jn = { key: 1 }, Yn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Xn = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Qn = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, el = {
  key: 1,
  class: "px-3 py-2.5"
}, tl = {
  key: 2,
  class: "px-2 py-2.5"
}, al = {
  key: 0,
  class: "bg-muted/40"
}, nl = ["colspan"], ll = ["aria-expanded", "dusk", "onClick"], ol = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, sl = {
  key: 1,
  dusk: "group-header"
}, rl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], il = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, dl = {
  key: 1,
  class: "px-3 py-2"
}, ul = ["id", "value", "checked", "disabled", "aria-label", "onClick"], cl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, fl = ["aria-label", "onClick"], ml = { class: "text-xs" }, pl = {
  key: 1,
  class: "text-muted-foreground"
}, vl = { key: 2 }, gl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, hl = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, bl = { key: 0 }, xl = { class: "text-muted-foreground block text-[10px] font-medium" }, yl = { class: "font-semibold tabular-nums" }, kl = { key: 1 }, $l = /* @__PURE__ */ O({
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
    function x(G) {
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
    const b = K(null), A = K(null);
    function C(G, D) {
      b.value = G, D.dataTransfer?.setData("text/plain", String(G)), D.dataTransfer && (D.dataTransfer.effectAllowed = "move");
    }
    function $() {
      b.value = null, A.value = null;
    }
    function w(G) {
      return b.value === null || A.value !== G ? "" : b.value > G ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function h(G, D) {
      b.value !== null && (D.preventDefault(), A.value = G);
    }
    function v(G) {
      const D = b.value;
      if (b.value = null, A.value = null, D === null || D === G)
        return;
      const F = n.rows.map((re) => re[n.rowKey]), [oe] = F.splice(D, 1);
      F.splice(G, 0, oe), c("reorder", F);
    }
    const c = o;
    function S(G, D) {
      !n.rowClickable || n.reordering || D.button !== 0 || D.metaKey || D.ctrlKey || D.shiftKey || D.altKey || D.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", G);
    }
    const M = K(null), z = za(), R = k(() => n.columns.filter((G) => !n.hidden?.has(G.key)));
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
          const Ma = Math.min(at, ct), Ba = Math.max(at, ct), Aa = !re;
          for (let nt = Ma; nt <= Ba; nt++) {
            if (!p(nt))
              continue;
            const ft = E(n.rows[nt]);
            if (ft === null)
              continue;
            !!n.selected?.has(ft) !== Aa && c("toggle-row", ft);
          }
          H.value = F;
          return;
        }
      }
      c("toggle-row", F), H.value = F;
    }
    const ae = k(
      () => n.rows.map((G) => E(G)).filter((G) => G !== null)
    ), te = k(
      () => ae.value.length > 0 && ae.value.every((G) => n.selected?.has(G))
    ), Y = k(
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
    const L = k(
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
      class: P(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      l("table", Nn, [
        l("thead", Rn, [
          l("tr", Un, [
            e.reordering ? (t(), a("th", Hn)) : y("", !0),
            e.selectable && !e.reordering ? (t(), a("th", qn, [
              l("input", {
                id: `${g(z)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: te.value,
                indeterminate: Y.value,
                "aria-label": "Select all rows on this page",
                onClick: D[0] || (D[0] = me(() => {
                }, ["stop"])),
                onChange: D[1] || (D[1] = me((F) => c("toggle-page", !te.value), ["stop"]))
              }, null, 40, Kn)
            ])) : y("", !0),
            (t(!0), a(_, null, V(R.value, (F) => (t(), a("th", {
              key: F.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              F.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (oe) => c("sort", Z(F))
              }, [
                U(f(F.label) + " ", 1),
                B(F) ? (t(), a("span", Wn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Zn, "↕"))
              ], 8, Gn)) : (t(), a("span", Jn, f(F.label), 1))
            ]))), 128)),
            G.$slots.actions ? (t(), a("th", Yn, [...D[2] || (D[2] = [
              l("span", { class: "sr-only" }, "Actions", -1)
            ])])) : y("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", Xn, [
          (t(), a(_, null, V(6, (F) => l("tr", {
            key: `skel-${F}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", Qn, [
              I($e, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : y("", !0),
            e.selectable && !e.reordering ? (t(), a("td", el, [
              I($e, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : y("", !0),
            (t(!0), a(_, null, V(R.value, (oe) => (t(), a("td", {
              key: oe.key,
              class: "px-3 py-2.5"
            }, [
              I($e, { variant: "text" })
            ]))), 128)),
            G.$slots.actions ? (t(), a("td", tl, [
              I($e, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : y("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: P(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(_, null, V(e.rows, (F, oe) => (t(), a(_, {
            key: E(F) ?? `row-${oe}`
          }, [
            e.groupBy && s(oe) ? (t(), a("tr", al, [
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
                  onClick: (re) => x(r(F))
                }, [
                  l("span", ol, f(m(r(F)) ? "▸" : "▾"), 1),
                  U(" " + f(i(F)), 1)
                ], 8, ll)) : (t(), a("span", sl, f(i(F)), 1))
              ], 8, nl)
            ])) : y("", !0),
            p(oe) ? (t(), a("tr", {
              key: 1,
              class: P(["group pk-row border-b transition-colors hover:bg-muted/50", [
                ee(F) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && oe % 2 === 1 ? "bg-muted/20" : "",
                b.value === oe ? "opacity-40" : "",
                w(oe),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (re) => C(oe, re),
              onDragover: (re) => h(oe, re),
              onDrop: me((re) => v(oe), ["prevent"]),
              onDragend: $,
              onContextmenu: (re) => c("row-contextmenu", F, re),
              onClick: (re) => S(F, re)
            }, [
              e.reordering ? (t(), a("td", il, [...D[3] || (D[3] = [
                Mt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-4ec66d95><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4ec66d95><circle cx="9" cy="6" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="6" r="1.5" data-v-4ec66d95></circle><circle cx="9" cy="12" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="12" r="1.5" data-v-4ec66d95></circle><circle cx="9" cy="18" r="1.5" data-v-4ec66d95></circle><circle cx="15" cy="18" r="1.5" data-v-4ec66d95></circle></svg></span>', 1)
              ])])) : y("", !0),
              e.selectable && !e.reordering ? (t(), a("td", dl, [
                l("input", {
                  id: `${g(z)}-row-${E(F) ?? oe}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: E(F) ?? void 0,
                  checked: ee(F),
                  disabled: E(F) === null,
                  "aria-label": E(F) === null ? "This row has no id and cannot be selected" : `Select row ${E(F)}`,
                  onClick: me((re) => J(F, re), ["stop"])
                }, null, 8, ul)
              ])) : y("", !0),
              (t(!0), a(_, null, V(R.value, (re) => (t(), a("td", {
                key: re.key,
                class: P(["px-3 py-2 whitespace-nowrap", re.cellClass])
              }, [
                q(G.$slots, `cell:${re.key}`, {
                  row: F,
                  value: F[re.key],
                  column: re
                }, () => [
                  re.copyable ? (t(), a("span", cl, [
                    U(f(F[re.key]) + " ", 1),
                    l("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${re.label.toLowerCase()}`,
                      onClick: (at) => N(String(F[e.rowKey]), re, F[re.key])
                    }, [
                      l("span", ml, f(M.value === `${F[e.rowKey]}-${re.key}` ? "✓" : "⧉"), 1)
                    ], 8, fl)
                  ])) : F[re.key] == null || F[re.key] === "" ? (t(), a("span", pl, "None")) : (t(), a("span", vl, f(F[re.key]), 1))
                ], !0)
              ], 2))), 128)),
              G.$slots.actions ? (t(), a("td", gl, [
                q(G.$slots, "actions", { row: F }, void 0, !0)
              ])) : y("", !0)
            ], 42, rl)) : y("", !0)
          ], 64))), 128))
        ], 2)),
        L.value ? (t(), a("tfoot", hl, [
          l("tr", null, [
            e.selectable ? (t(), a("td", bl)) : y("", !0),
            (t(!0), a(_, null, V(e.columns, (F) => (t(), a(_, {
              key: `s-${F.key}`
            }, [
              e.hidden?.has(F.key) ? y("", !0) : (t(), a("td", {
                key: 0,
                class: P(["px-3 py-2 align-top text-sm whitespace-nowrap", F.cellClass])
              }, [
                X(F.key) ? (t(), a(_, { key: 0 }, [
                  l("span", xl, f(X(F.key).label), 1),
                  l("span", yl, f(fe(F.key)), 1)
                ], 64)) : y("", !0)
              ], 2))
            ], 64))), 128)),
            G.$slots.actions ? (t(), a("td", kl)) : y("", !0)
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
}), jt = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of o)
    n[r] = s;
  return n;
}, wl = /* @__PURE__ */ jt($l, [["__scopeId", "data-v-4ec66d95"]]), Cl = ["aria-label"], Sl = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, Ml = { class: "text-base font-semibold" }, Bl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Al = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, zl = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, Ye = /* @__PURE__ */ O({
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
    function x(p) {
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
      const A = b[0], C = b[b.length - 1];
      p.shiftKey && document.activeElement === A ? (p.preventDefault(), C.focus()) : !p.shiftKey && document.activeElement === C && (p.preventDefault(), A.focus());
    }
    return ce(
      () => n.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", x), ze(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", x), i?.focus(), i = null);
      }
    ), be(() => document.removeEventListener("keydown", x)), (p, b) => (t(), T(Ue, { to: "body" }, [
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
              l("div", Sl, [
                l("h2", Ml, f(e.title), 1),
                e.description ? (t(), a("p", Bl, f(e.description), 1)) : y("", !0)
              ]),
              l("div", Al, [
                q(p.$slots, "default")
              ]),
              l("div", zl, [
                q(p.$slots, "footer")
              ])
            ], 8, Cl)
          ], 32)) : y("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), _l = 160, Ne = /* @__PURE__ */ O({
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
    function x(S) {
      !n.dismissOnPanelClick || S.target?.closest("input, select, textarea, label, [data-keep-open]") || $();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await ze(), w());
    }
    function b() {
      m = setTimeout($, 180);
    }
    async function A() {
      u.value = null, r.value = !r.value, r.value && (await ze(), w());
    }
    async function C(S, M) {
      u.value = { x: S, y: M }, r.value = !0, await ze(), w();
    }
    function $() {
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
      H = Math.min(Math.max(R, H), window.innerWidth - z.width - R), ee = Math.min(Math.max(R, ee), window.innerHeight - z.height - R), d.value = { top: ee, left: H, minWidth: Math.max(E.width, _l) };
    }
    function h(S) {
      if (!r.value)
        return;
      const M = S.target;
      s.value?.contains(M) || i.value?.contains(M) || (M instanceof Element ? M : M.parentElement)?.closest("[data-pk-overlay]") || $();
    }
    function v(S) {
      S.key === "Escape" && r.value && (S.stopPropagation(), $());
    }
    function c() {
      if (r.value) {
        if (u.value) {
          $();
          return;
        }
        w();
      }
    }
    return pe(() => {
      document.addEventListener("pointerdown", h), document.addEventListener("keydown", v), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), be(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", h), document.removeEventListener("keydown", v), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), o({ close: $, openAt: C }), (S, M) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: M[2] || (M[2] = (z) => e.hoverable && p()),
      onPointerleave: M[3] || (M[3] = (z) => e.hoverable && b())
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
              class: P([
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
              onPointerleave: M[1] || (M[1] = (z) => e.hoverable && b()),
              onClick: x
            }, [
              q(S.$slots, "panel", { close: $ })
            ], 38)) : y("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Pl = ["disabled"], Ol = { class: "py-0.5" }, jl = ["disabled", "onClick"], Ll = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vl = ["d"], Tl = ["disabled"], Dl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, El = ["d"], Il = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Fl = ["disabled", "onClick"], Nl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rl = ["d"], Ul = { class: "text-muted-foreground text-sm" }, Hl = { class: "text-foreground font-medium tabular-nums" }, ql = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Kl = ["disabled"], Gl = { class: "text-muted-foreground text-sm" }, Wl = { class: "text-foreground font-medium tabular-nums" }, Zl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Jl = ["disabled"], pw = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!1), d = k(() => n.allMatching ? n.total : n.count), u = k(() => d.value !== void 0), m = k(() => u.value && d.value === 0), x = k(() => n.actions.filter((v) => !v.destructive)), p = k(() => n.actions.filter((v) => v.destructive)), b = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function A(v) {
      return b[v.color ?? "gray"] ?? b.gray;
    }
    function C(v) {
      if (v.confirmation) {
        s.value = v;
        return;
      }
      r("run", v.key);
    }
    function $() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function w() {
      i.value = !1, r("export");
    }
    const h = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), a(_, null, [
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
          ])], 8, Pl)
        ]),
        panel: j(() => [
          l("div", Ol, [
            (t(!0), a(_, null, V(x.value, (S) => (t(), a("button", {
              key: S.key,
              type: "button",
              role: "menuitem",
              class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", A(S)]),
              disabled: e.busy,
              onClick: (M) => C(S)
            }, [
              (t(), a("svg", Ll, [
                l("path", {
                  d: g(ie)(S.icon)
                }, null, 8, Vl)
              ])),
              U(" " + f(S.label), 1)
            ], 10, jl))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (S) => i.value = !0)
            }, [
              (t(), a("svg", Dl, [
                l("path", {
                  d: g(ie)("download")
                }, null, 8, El)
              ])),
              c[6] || (c[6] = U(" Export CSV ", -1))
            ], 8, Tl)) : y("", !0),
            p.value.length ? (t(), a("div", Il, [
              (t(!0), a(_, null, V(p.value, (S) => (t(), a("button", {
                key: S.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (M) => C(S)
              }, [
                (t(), a("svg", Nl, [
                  l("path", {
                    d: g(ie)(S.icon ?? "trash")
                  }, null, 8, Rl)
                ])),
                U(" " + f(S.label), 1)
              ], 8, Fl))), 128))
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
            class: P([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || m.value,
            onClick: $
          }, f(s.value?.label), 11, Kl)
        ]),
        default: j(() => [
          l("p", Ul, [
            c[7] || (c[7] = U(" This will affect ", -1)),
            l("span", Hl, [
              u.value ? (t(), a(_, { key: 1 }, [
                U(f(h(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(_, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[8] || (c[8] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", ql, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : y("", !0)
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
          }, " Export CSV ", 8, Jl)
        ]),
        default: j(() => [
          l("p", Gl, [
            c[9] || (c[9] = U(" This will export ", -1)),
            l("span", Wl, [
              u.value ? (t(), a(_, { key: 1 }, [
                U(f(h(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(_, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[10] || (c[10] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Zl, " Nothing matches the current filters - there is nothing to export. ")) : y("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Yl = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, Xl = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Ql = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, eo = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, to = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", Yl, [
      o.$slots.tabs ? (t(), a("div", Xl, [
        q(o.$slots, "tabs")
      ])) : y("", !0),
      o.$slots.title ? (t(), a("div", Ql, [
        q(o.$slots, "title")
      ])) : y("", !0),
      o.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: P(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        q(o.$slots, "toolbar")
      ], 2)) : y("", !0),
      q(o.$slots, "default"),
      o.$slots.pagination ? (t(), a("div", eo, [
        q(o.$slots, "pagination")
      ])) : y("", !0)
    ]));
  }
}), ao = { class: "min-w-0" }, no = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, lo = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, oo = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, so = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, ro = { class: "w-full border-collapse text-sm" }, io = { class: "bg-muted/40" }, uo = { class: "divide-y" }, co = ["href"], fo = {
  key: 1,
  class: "text-muted-foreground"
}, mo = {
  key: 0,
  class: "flex justify-center"
}, po = ["disabled"], vo = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, go = ["href"], vw = /* @__PURE__ */ O({
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
    recordBase: { default: null }
  },
  emits: ["load"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = ea(), i = k(() => n.columns.filter((p) => p.type !== "image")), d = k(() => !!s.actions), u = k(() => !!n.title || d.value);
    function m(p, b) {
      return b == null || b === "" ? "None" : p.type === "date" || p.type === "datetime" ? new Date(String(b)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...p.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof b == "number" ? new Intl.NumberFormat().format(b) : String(b);
    }
    function x(p) {
      return p == null || p === "";
    }
    return (p, b) => (t(), T(to, null, Ze({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), a("div", oo, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(yt, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, Ze({ _: 2 }, [
          p.$slots["empty-actions"] ? {
            name: "actions",
            fn: j(() => [
              q(p.$slots, "empty-actions")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", so, [
          l("table", ro, [
            l("thead", io, [
              l("tr", null, [
                (t(!0), a(_, null, V(i.value, (A) => (t(), a("th", {
                  key: A.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f(A.label), 1))), 128))
              ])
            ]),
            l("tbody", uo, [
              (t(!0), a(_, null, V(e.rows, (A, C) => (t(), a("tr", {
                key: A.id ?? C,
                class: "hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(_, null, V(i.value, ($) => (t(), a("td", {
                  key: $.key,
                  class: P(["px-3 py-2.5 whitespace-nowrap", [
                    $.mono ? "font-mono text-xs" : "",
                    $.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  q(p.$slots, `cell:${$.key}`, {
                    row: A,
                    value: A[$.key],
                    column: $
                  }, () => [
                    e.recordBase && A.id != null && $ === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${A.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, f(m($, A[$.key])), 9, co)) : x(A[$.key]) ? (t(), a("span", fo, " None ")) : (t(), a(_, { key: 2 }, [
                      U(f(m($, A[$.key])), 1)
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
          l("div", ao, [
            e.title ? (t(), a("h3", no, f(e.title), 1)) : y("", !0)
          ]),
          d.value ? (t(), a("div", lo, [
            q(p.$slots, "actions")
          ])) : y("", !0)
        ]),
        key: "0"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: j(() => [
          e.nextCursor ? (t(), a("div", mo, [
            l("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: b[0] || (b[0] = (A) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, po)
          ])) : e.capped ? (t(), a("p", vo, [
            U(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, go)) : (t(), a(_, { key: 1 }, [
              U("Open the full list to search or filter the rest.")
            ], 64))
          ])) : y("", !0)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), ho = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", bo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, xo = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Ge(e = {}) {
  const o = e.variant ?? "default", n = e.size ?? "default";
  return [ho, bo[o], xo[n], e.class].filter(Boolean).join(" ");
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
    const o = e, n = k(
      () => Ge({ variant: o.variant, size: o.size, class: o.class })
    ), r = k(() => o.as === "button" ? o.type : void 0);
    return (s, i) => (t(), T(xe(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: P(n.value)
    }, {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), yo = { class: "flex items-center gap-2 overflow-x-auto" }, ko = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $o = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wo = { class: "flex flex-col" }, Co = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, So = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Mo = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Bo = /* @__PURE__ */ O({
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
    return (m, x) => (t(), a("ol", yo, [
      (t(!0), a(_, null, V(e.steps, (p, b) => (t(), a("li", {
        key: b,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(xe(e.interactive ? "button" : "div"), le({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(b)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: b > e.activeStep } : {}, {
          onClick: (A) => e.interactive && b <= e.activeStep && r("update:activeStep", b)
        }), {
          default: j(() => [
            l("span", {
              class: P(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(b)])
            }, [
              u(b) ? (t(), a("svg", ko, [...x[0] || (x[0] = [
                l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(b) ? (t(), a("svg", $o, [...x[1] || (x[1] = [
                l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(_, { key: 2 }, [
                U(f(b + 1), 1)
              ], 64))
            ], 2),
            l("span", wo, [
              l("span", null, f(p.label), 1),
              p.description ? (t(), a("span", Co, f(p.description), 1)) : y("", !0)
            ]),
            e.hasError(b) ? (t(), a("span", So)) : y("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        b < e.steps.length - 1 ? (t(), a("span", Mo)) : y("", !0)
      ]))), 128))
    ]));
  }
}), Qe = /* @__PURE__ */ new Map();
function Me(e, o) {
  Qe.set(e, o);
}
function Ao(e) {
  return Qe.get(e);
}
function gw(e) {
  return Qe.has(e);
}
function hw() {
  return [...Qe.keys()].sort();
}
function bw() {
  Qe.clear();
}
class zo extends Error {
  fieldErrors;
  constructor(o, n = {}) {
    super(o), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function xw(e) {
  if (!e || typeof e != "object")
    return {};
  const o = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (o[n] = s);
  }
  return o;
}
function _o(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create option";
}
function Po(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create new";
}
const Be = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Ht = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", yw = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Oo = ["aria-expanded"], jo = ["aria-label", "onClick"], Lo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Vo = { class: "ml-auto flex shrink-0 items-center gap-1" }, To = {
  key: 0,
  class: "border-b p-1"
}, Do = ["placeholder"], Eo = { class: "max-h-60 overflow-y-auto p-1" }, Io = ["aria-selected", "onMouseenter", "onClick"], Fo = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Lt = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(null), d = K(null), u = K(!1), m = K(""), x = K(0), p = K({ top: 0, left: 0, width: 0 }), b = k(
      () => n.modelValue.map(
        (H) => n.options.find((W) => W.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), A = k(() => n.searchable ?? n.options.length > 6), C = k(() => {
      const H = new Set(n.modelValue), W = m.value.trim().toLowerCase();
      return n.options.filter((J) => !H.has(J.value)).filter((J) => W ? J.label.toLowerCase().includes(W) : !0);
    }), $ = k(() => n.max !== null && n.modelValue.length >= n.max);
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
    async function h() {
      n.disabled || u.value || (u.value = !0, m.value = "", x.value = 0, await ze(), w(), d.value?.focus());
    }
    function v() {
      u.value = !1, m.value = "";
    }
    function c() {
      u.value ? v() : h();
    }
    function S(H) {
      $.value || (r("update:modelValue", [...n.modelValue, H.value]), m.value = "", x.value = 0, ze(() => {
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
          H.preventDefault(), h();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), x.value = Math.min(x.value + 1, C.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), x.value = Math.max(x.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const W = C.value[x.value];
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
      x.value > H.length - 1 && (x.value = Math.max(0, H.length - 1));
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
        class: P(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: c
      }, [
        (t(!0), a(_, null, V(b.value, (J) => (t(), a("span", {
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
          ])], 8, jo)
        ]))), 128)),
        b.value.length === 0 ? (t(), a("span", Lo, f(e.placeholder), 1)) : y("", !0),
        l("span", Vo, [
          b.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: me(z, ["stop"])
          }, " Clear ")) : y("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: P(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...W[2] || (W[2] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Oo),
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
              A.value ? (t(), a("div", To, [
                ue(l("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": W[0] || (W[0] = (J) => m.value = J),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: R
                }, null, 40, Do), [
                  [ye, m.value]
                ])
              ])) : y("", !0),
              l("div", Eo, [
                (t(!0), a(_, null, V(C.value, (J, ae) => (t(), a("button", {
                  key: J.value,
                  type: "button",
                  class: P(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ae === x.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ae === x.value,
                  onMouseenter: (te) => x.value = ae,
                  onClick: (te) => S(J)
                }, f(J.label), 43, Io))), 128)),
                C.value.length === 0 ? (t(), a("p", Fo, [
                  $.value ? (t(), a(_, { key: 0 }, [
                    U("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), a(_, { key: 1 }, [
                    U("Nothing matches “" + f(m.value) + "”.", 1)
                  ], 64)) : (t(), a(_, { key: 2 }, [
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
}), No = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Ro = /* @__PURE__ */ O({
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
          e.generalError ? (t(), a("p", No, f(e.generalError), 1)) : y("", !0),
          (t(!0), a(_, null, V(e.fields, (m) => (t(), T(Re, {
            key: m.key,
            field: m,
            value: s.value[m.key],
            error: e.errors[m.key],
            processing: e.processing,
            onChange: (x) => s.value[m.key] = x
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
});
function Q(...e) {
  return Ln(jn(e));
}
function kw(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Uo = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(Za), le({ "data-slot": "checkbox" }, g(i), {
      class: g(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j((m) => [
        I(g(Ja), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            q(d.$slots, "default", we(je(m)), () => [
              I(g(aa), { class: "size-3.5" })
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
    return (i, d) => (t(), T(g(Ya), le({ "data-slot": "switch" }, g(s), {
      class: g(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j(() => [
        I(g(Xa), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ho = ["accept", "disabled"], qo = { class: "text-sm font-medium" }, Ko = { key: 0 }, Go = { key: 1 }, Wo = { class: "text-muted-foreground text-xs" }, Zo = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Jo = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Yo = ["src"], Xo = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Qo = { class: "min-w-0 flex-1" }, es = { class: "block truncate text-sm font-medium" }, ts = { class: "text-muted-foreground text-xs" }, as = ["href"], ns = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, fa = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!1), d = K(null), u = K(null), m = K(null), x = k(() => n.accept.map((S) => `.${S}`).join(",")), p = k(() => m.value ?? n.modelValue?.url ?? null), b = k(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${A(n.maxKilobytes * 1024)}`);
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
    function $(S) {
      return n.accept.length && !n.accept.includes(C(S.name)) ? `${C(S.name).toUpperCase() || "That"} files are not accepted here.` : S.size > n.maxKilobytes * 1024 ? `That file is ${A(S.size)}; the limit is ${A(n.maxKilobytes * 1024)}.` : null;
    }
    async function w(S) {
      const M = S?.[0];
      if (!(!M || n.disabled) && (u.value = $(M), !u.value)) {
        h(), n.image && M.type.startsWith("image/") && (m.value = URL.createObjectURL(M)), d.value = 0;
        try {
          const z = await n.upload(M, (R) => {
            d.value = R;
          });
          r("update:modelValue", z);
        } catch (z) {
          u.value = z instanceof Error ? z.message : "The upload failed.", h();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function h() {
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function v() {
      const S = n.modelValue;
      h(), u.value = null, r("update:modelValue", null), S && !S.url && n.discard && await n.discard(S.value).catch(() => {
      });
    }
    function c(S) {
      i.value = !1, w(S.dataTransfer?.files ?? null);
    }
    return (S, M) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", Jo, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Yo)) : (t(), a("span", Xo, f(C(e.modelValue.name) || "file"), 1)),
        l("span", Qo, [
          l("span", es, f(e.modelValue.name), 1),
          l("span", ts, [
            U(f(A(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(_, { key: 0 }, [
              M[4] || (M[4] = U(" · ", -1)),
              l("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, as)
            ], 64)) : (t(), a(_, { key: 1 }, [
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
        class: P(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
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
          accept: x.value,
          disabled: e.disabled,
          onChange: M[0] || (M[0] = (z) => w(z.target.files))
        }, null, 40, Ho),
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
        l("span", qo, [
          d.value === null ? (t(), a("span", Ko, "Drop a file or click to choose")) : (t(), a("span", Go, "Uploading…"))
        ]),
        l("span", Wo, f(b.value), 1),
        d.value !== null ? (t(), a("span", Zo, [
          l("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${d.value}%` })
          }, null, 4)
        ])) : y("", !0)
      ], 34)),
      u.value ? (t(), a("p", ns, f(u.value), 1)) : y("", !0)
    ]));
  }
}), ls = { class: "flex flex-col gap-2" }, os = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, ss = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, rs = { class: "flex flex-col gap-1" }, is = ["onUpdate:modelValue", "disabled", "aria-label"], ds = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, us = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, cs = ["onUpdate:modelValue", "disabled", "aria-label"], fs = ["disabled", "aria-label", "onClick"], ms = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ps = { class: "flex items-center gap-3" }, vs = ["disabled"], gs = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, hs = /* @__PURE__ */ O({
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
      return w ? Object.entries(w).map(([h, v]) => ({
        uid: i++,
        key: h,
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
      for (const h of d.value) {
        const v = h.key.trim();
        v !== "" && (w[v] = h.value);
      }
      return Object.keys(w).length ? w : null;
    }
    function x() {
      r("update:modelValue", m());
    }
    const p = k(() => {
      const w = /* @__PURE__ */ new Map();
      for (const h of d.value) {
        const v = h.key.trim();
        v !== "" && w.set(v, (w.get(v) ?? 0) + 1);
      }
      return new Set([...w.entries()].filter(([, h]) => h > 1).map(([h]) => h));
    }), b = k(
      () => new Set(
        d.value.map((w) => w.key.trim()).filter((w) => w !== "" && !s.test(w))
      )
    ), A = k(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function C() {
      A.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function $(w) {
      d.value = d.value.filter((h) => h.uid !== w), x();
    }
    return (w, h) => (t(), a("div", ls, [
      d.value.length ? (t(), a("div", os, [
        l("div", ss, [
          l("span", null, f(e.keyLabel), 1),
          l("span", null, f(e.valueLabel), 1),
          h[0] || (h[0] = l("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(_, null, V(d.value, (v) => (t(), a("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          l("div", rs, [
            ue(l("input", {
              "onUpdate:modelValue": (c) => v.key = c,
              type: "text",
              class: P([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || b.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: x
            }, null, 42, is), [
              [ye, v.key]
            ]),
            b.value.has(v.key.trim()) ? (t(), a("p", ds, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), a("p", us, " Used twice - only the last value will be saved. ")) : y("", !0)
          ]),
          ue(l("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: x
          }, null, 40, cs), [
            [ye, v.value]
          ]),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (c) => $(v.uid)
          }, [...h[1] || (h[1] = [
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
          ])], 8, fs)
        ]))), 128))
      ])) : (t(), a("p", ms, " Nothing here yet. ")),
      l("div", ps, [
        l("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || A.value,
          onClick: C
        }, [
          h[2] || (h[2] = l("svg", {
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
        ], 8, vs),
        e.maxPairs !== null ? (t(), a("p", gs, f(d.value.length) + " of " + f(e.maxPairs), 1)) : y("", !0)
      ])
    ]));
  }
}), bs = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, xs = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, ys = ["disabled", "title", "aria-label", "onClick"], ks = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $s = ["d"], ws = ["disabled"], Cs = ["contenteditable", "data-placeholder"], Ss = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Ms = /* @__PURE__ */ O({
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
    ], u = k(() => d.filter(($) => n.toolbar.includes($.id))), m = k(() => n.toolbar.includes("link")), x = K(0);
    function p() {
      const $ = s.value?.innerHTML ?? "", w = (s.value?.innerText ?? "").trim();
      x.value = w.length;
      const h = w === "" ? null : $;
      i = h, r("update:modelValue", h);
    }
    function b($) {
      n.disabled || (s.value?.focus(), document.execCommand($.command, !1, $.argument), p());
    }
    function A() {
      if (n.disabled)
        return;
      const $ = window.prompt("Link address");
      $ && (s.value?.focus(), document.execCommand("createLink", !1, $), p());
    }
    function C($) {
      $.preventDefault();
      const w = $.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, w), p();
    }
    return pe(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", x.value = s.value.innerText.trim().length);
    }), ce(
      () => n.modelValue,
      ($) => {
        $ !== i && s.value && (s.value.innerHTML = $ ?? "", x.value = s.value.innerText.trim().length);
      }
    ), ($, w) => (t(), a("div", bs, [
      l("div", xs, [
        (t(!0), a(_, null, V(u.value, (h) => (t(), a("button", {
          key: h.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: h.label,
          "aria-label": h.label,
          onMousedown: w[0] || (w[0] = me(() => {
          }, ["prevent"])),
          onClick: (v) => b(h)
        }, [
          (t(), a("svg", ks, [
            l("path", {
              d: h.path
            }, null, 8, $s)
          ]))
        ], 40, ys))), 128)),
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
        ])], 40, ws)) : y("", !0)
      ]),
      l("div", {
        ref_key: "editor",
        ref: s,
        class: P(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: C
      }, null, 42, Cs),
      e.maxLength !== null ? (t(), a("div", Ss, f(x.value) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Bs = /* @__PURE__ */ jt(Ms, [["__scopeId", "data-v-32c63bc7"]]), As = {
  key: 1,
  class: "flex flex-col gap-2"
}, zs = { class: "flex items-center justify-between gap-2" }, _s = ["for"], Ps = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Os = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, js = ["aria-label", "disabled"], Ls = {
  key: 7,
  class: "flex flex-col gap-2"
}, Vs = ["id", "value", "disabled"], Ts = ["value"], Ds = {
  key: 0,
  class: "relative"
}, Es = ["disabled"], Is = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Fs = { class: "max-h-56 overflow-y-auto p-1" }, Ns = ["onClick"], Rs = {
  key: 8,
  class: "relative"
}, Us = ["disabled", "aria-invalid"], Hs = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, qs = { class: "max-h-56 overflow-y-auto p-1" }, Ks = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Gs = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ws = ["onClick"], Zs = ["id", "value", "disabled", "aria-invalid"], Js = ["value"], Ys = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Xs = { class: "text-muted-foreground" }, Qs = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, er = { class: "text-muted-foreground" }, tr = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], ar = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, nr = ["aria-label", "disabled"], lr = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], or = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, sr = ["aria-label", "disabled"], rr = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], ir = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, dr = ["aria-label", "disabled"], ur = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], cr = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, fr = ["aria-label", "disabled"], mr = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, pr = ["disabled", "aria-pressed", "onClick"], vr = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, gr = ["title", "disabled", "onClick"], hr = ["href"], br = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, xr = {
  key: 20,
  class: "text-muted-foreground text-xs leading-snug"
}, yr = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Re = /* @__PURE__ */ O({
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
    const n = Ut(() => import("./PkRepeater-J84jGe3T.js")), r = Ut(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = o, d = K(!1), u = K(""), m = K([]), x = K(!1), p = K(null);
    let b;
    ce(u, (G) => {
      s.searchOptions && (clearTimeout(b), x.value = !0, b = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(G);
        } catch {
        } finally {
          x.value = !1;
        }
      }, 200));
    });
    async function A() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, m.value.length === 0 && s.searchOptions)) {
        x.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          x.value = !1;
        }
      }
    }
    function C(G) {
      p.value = G.label, i("change", G.value), d.value = !1, u.value = "";
    }
    function $() {
      p.value = null, i("change", null);
    }
    const w = lt("panelPicker", null), h = lt("panelCreateOption", null), v = K(!1), c = K(!1), S = K({}), M = K(null), z = k(() => _o(s.field)), R = k(() => Po(s.field));
    function E() {
      S.value = {}, M.value = null, v.value = !0, d.value = !1;
    }
    function ee() {
      c.value || (v.value = !1, S.value = {}, M.value = null);
    }
    async function H(G) {
      if (h) {
        c.value = !0, S.value = {}, M.value = null;
        try {
          const D = await h.run(s.field.key, { ...G });
          C(D), v.value = !1;
        } catch (D) {
          D instanceof zo ? (S.value = D.fieldErrors, M.value = Object.keys(D.fieldErrors).length === 0 ? D.message : null) : M.value = D instanceof Error ? D.message : "Could not create that option.";
        } finally {
          c.value = !1;
        }
      }
    }
    const W = k(() => {
      if (!s.field.tableSelect || !w?.base)
        return;
      const G = w.returnUrl || "/";
      return `${w.base}/pick/${s.field.key}?return=${encodeURIComponent(G)}`;
    }), J = k(() => s.field.morphTo ?? []), ae = k(() => {
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
    be(() => clearTimeout(b));
    const B = k(() => Ao(s.field.type)), N = k(
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
    return (G, D) => (t(), a(_, null, [
      e.field.type === "hidden" ? (t(), a(_, { key: 0 }, [], 64)) : (t(), a("div", As, [
        l("div", zs, [
          l("label", {
            for: `f-${e.field.key}`,
            class: P(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            U(f(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", Ps, "*")) : y("", !0)
          ], 10, _s),
          e.field.hint ? (t(), a("span", Os, [
            U(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: D[0] || (D[0] = (F) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, js)) : y("", !0)
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
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(fa, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": D[2] || (D[2] = (F) => i("change", F))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(g(n), {
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
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(g(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": D[4] || (D[4] = (F) => i("change", F))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Bs, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": D[5] || (D[5] = (F) => i("change", F))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(hs, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": D[6] || (D[6] = (F) => i("change", F))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Lt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": D[7] || (D[7] = (F) => i("change", F))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : J.value.length ? (t(), a("div", Ls, [
          l("select", {
            id: `f-${e.field.key}-type`,
            value: ae.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", g(Be)]),
            onChange: D[8] || (D[8] = (F) => te(F.target.value))
          }, [
            D[24] || (D[24] = l("option", { value: "" }, "Type", -1)),
            (t(!0), a(_, null, V(J.value, (F) => (t(), a("option", {
              key: F.value,
              value: F.value
            }, f(F.label), 9, Ts))), 128))
          ], 42, Vs),
          ae.value.type && e.searchOptions ? (t(), a("div", Ds, [
            l("button", {
              type: "button",
              class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", g(Be)]),
              disabled: e.field.disabled || e.processing,
              onClick: A
            }, [
              l("span", {
                class: P(p.value || ae.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (ae.value.id ? String(ae.value.id) : "Search…")), 3)
            ], 10, Es),
            d.value ? (t(), a("div", Is, [
              ue(l("input", {
                "onUpdate:modelValue": D[9] || (D[9] = (F) => u.value = F),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ye, u.value]
              ]),
              l("div", Fs, [
                (t(!0), a(_, null, V(m.value, (F) => (t(), a("button", {
                  key: String(F.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (oe) => Z(F)
                }, f(F.label), 9, Ns))), 128))
              ])
            ])) : y("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: D[10] || (D[10] = (F) => d.value = !1)
            })) : y("", !0)
          ])) : y("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", Rs, [
          l("button", {
            type: "button",
            class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", g(Be)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: A
          }, [
            l("span", {
              class: P(p.value || e.value ? "" : "text-muted-foreground")
            }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: me($, ["stop"])
            }, " ✕ ")) : y("", !0)
          ], 10, Us),
          d.value ? (t(), a("div", Hs, [
            ue(l("input", {
              "onUpdate:modelValue": D[11] || (D[11] = (F) => u.value = F),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ye, u.value]
            ]),
            l("div", qs, [
              x.value ? (t(), a("p", Ks, " Searching… ")) : m.value.length === 0 ? (t(), a("p", Gs, " No matches ")) : y("", !0),
              (t(!0), a(_, null, V(m.value, (F) => (t(), a("button", {
                key: String(F.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (oe) => C(F)
              }, f(F.label), 9, Ws))), 128)),
              e.field.createOption && g(h) ? (t(), a("button", {
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
          class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", g(Be)]),
          onChange: D[13] || (D[13] = (F) => i("change", F.target.value || null))
        }, [
          D[26] || (D[26] = l("option", { value: "" }, "-", -1)),
          (t(!0), a(_, null, V(e.options, (F) => (t(), a("option", {
            key: String(F.value),
            value: F.value
          }, f(F.label), 9, Js))), 128))
        ], 42, Zs)) : e.field.type === "toggle" ? (t(), a("label", Ys, [
          I(g(Fe), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": D[14] || (D[14] = (F) => i("change", F))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Xs, f(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", Qs, [
          I(g(Uo), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": D[15] || (D[15] = (F) => i("change", F === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", er, f(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !N.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", g(Be)]),
          onInput: D[16] || (D[16] = (F) => i("change", F.target.value))
        }, null, 42, tr)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: P([
            "border-input flex overflow-hidden rounded-md border",
            g(Ht),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", ar, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: D[17] || (D[17] = (F) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, nr)) : y("", !0),
          l("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: D[18] || (D[18] = (F) => i("change", F.target.value))
          }, null, 40, lr),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", or, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: D[19] || (D[19] = (F) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, sr)) : y("", !0)
        ], 2)) : N.value ? (t(), a("div", {
          key: 15,
          class: P([
            "border-input flex h-9 overflow-hidden rounded-md border",
            g(Ht),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", ir, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: D[21] || (D[21] = (F) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, dr)) : y("", !0),
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
            class: P(yr),
            onInput: D[22] || (D[22] = (F) => i("change", F.target.value))
          }, null, 40, ur),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", cr, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: D[23] || (D[23] = (F) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, fr)) : y("", !0)
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
          onInput: D[20] || (D[20] = (F) => i("change", F.target.value))
        }, null, 40, rr)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", mr, [
          (t(!0), a(_, null, V(e.field.presets, (F) => (t(), a("button", {
            key: F,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: P([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              g(Be),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == F ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == F
            ),
            onClick: (oe) => i("change", String(F))
          }, f(F), 11, pr))), 128))
        ])) : y("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", vr, [
          (t(!0), a(_, null, V(e.field.chips, (F, oe) => (t(), a("button", {
            key: oe,
            type: "button",
            title: F,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (re) => fe(String(oe))
          }, f(oe), 9, gr))), 128))
        ])) : y("", !0),
        W.value ? (t(), a("a", {
          key: 18,
          href: W.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, hr)) : y("", !0),
        e.error ? (t(), a("p", br, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", xr, f(e.field.help), 1)) : y("", !0)
      ])),
      e.field.createOption && g(h) ? (t(), T(Ro, {
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
}), kr = { class: "flex min-w-0 items-start gap-2.5" }, $r = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, wr = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Cr = ["d"], Sr = { class: "min-w-0" }, Mr = { class: "text-sm font-semibold" }, Br = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ar = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, zr = { class: "border-b px-4 py-3.5 sm:px-5" }, _r = { class: "text-sm font-semibold" }, Pr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Or = {
  key: 4,
  class: "min-w-0 space-y-4"
}, jr = {
  key: 7,
  class: "flex flex-col gap-3"
}, Lr = { class: "text-sm font-medium" }, Vr = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Tr = {
  key: 0,
  class: "mb-1 font-medium"
}, Dr = ["onClick"], Er = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Ir = { class: "flex items-center justify-between gap-3 border-t p-4" }, Fr = ["disabled"], ma = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(!n.node.collapsed), i = K(0), d = K(0), u = k(
      () => (n.node.children ?? []).map((v) => ({
        label: v.label ?? "",
        description: v.description
      }))
    ), m = k(() => n.depth === 0), x = k(() => {
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
    }), p = k(() => {
      const v = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return v[n.node.tone ?? "info"] ?? v.info;
    }), b = k(() => {
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
    function $(v) {
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
    function h(v) {
      if (n.upload)
        return (c, S) => n.upload(v, c, S);
    }
    return (v, c) => {
      const S = Bt("SchemaNode", !0);
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
        upload: h(e.node.key),
        discard: e.discard,
        onChange: c[0] || (c[0] = (M) => r("change", e.node.key, M)),
        onAffixAction: c[1] || (c[1] = (M) => r("affix-action", e.node.key, M))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && w(e.node) ? (t(), a("section", {
        key: 1,
        class: P(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("header", {
          class: P(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: c[2] || (c[2] = (M) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", kr, [
            e.node.icon ? (t(), a("div", $r, [
              (t(), a("svg", wr, [
                l("path", {
                  d: g(ie)(e.node.icon)
                }, null, 8, Cr)
              ]))
            ])) : y("", !0),
            l("div", Sr, [
              l("h3", Mr, f(e.node.label), 1),
              e.node.description ? (t(), a("p", Br, f(e.node.description), 1)) : y("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: P(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...c[24] || (c[24] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : y("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: P(["grid grid-cols-1 gap-4", [b.value, m.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
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
            class: P(M.span && M.span >= 2 ? "sm:col-span-2" : ""),
            onChange: c[3] || (c[3] = (R, E) => r("change", R, E)),
            onAffixAction: c[4] || (c[4] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "card" && w(e.node) ? (t(), a("section", Ar, [
        l("header", zr, [
          l("h3", _r, f(e.node.title), 1),
          e.node.description ? (t(), a("p", Pr, f(e.node.description), 1)) : y("", !0)
        ]),
        l("div", {
          class: P(["grid grid-cols-1 gap-4 px-4 py-4", b.value])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
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
        class: P(["grid grid-cols-1 gap-4", A(e.node)])
      }, [
        (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
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
          class: P(M.component === "column" ? C(M.span) : ""),
          onChange: c[7] || (c[7] = (R, E) => r("change", R, E)),
          onAffixAction: c[8] || (c[8] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && w(e.node) ? (t(), a("div", Or, [
        (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
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
        class: P(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
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
        class: P(["flex", x.value])
      }, [
        (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
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
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", jr, [
        l("legend", Lr, f(e.node.label), 1),
        e.node.description ? (t(), a("p", Vr, f(e.node.description), 1)) : y("", !0),
        l("div", {
          class: P(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => (t(), T(S, {
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
        class: P(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", Tr, f(e.node.title), 1)) : y("", !0),
        l("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 9,
        class: P(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => (t(), a("button", {
            key: z,
            type: "button",
            class: P([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === z ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (R) => i.value = z
          }, [
            U(f(M.label) + " ", 1),
            $(M) ? (t(), a("span", Er)) : y("", !0)
          ], 10, Dr))), 128))
        ], 2),
        (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => ue((t(), a("div", {
          key: z,
          class: P(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(_, null, V(M.children ?? [], (R, E) => (t(), T(S, {
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
        class: P(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        I(Bo, {
          class: P(["p-4", m.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (M) => $((e.node.children ?? [])[M]),
          "onUpdate:activeStep": c[19] || (c[19] = (M) => d.value = M)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(_, null, V(e.node.children ?? [], (M, z) => ue((t(), a("div", {
          key: z,
          class: P(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(_, null, V(M.children ?? [], (R, E) => (t(), T(S, {
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
        l("div", Ir, [
          l("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: c[22] || (c[22] = (M) => d.value--)
          }, " Back ", 8, Fr),
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
}), $w = /* @__PURE__ */ O({
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
          (t(!0), a(_, null, V(e.form?.nodes ?? [], (m, x) => (t(), T(ma, {
            key: x,
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
}), Nr = ["title"], Rr = ["aria-label"], Ur = ["d"], Hr = { class: "sr-only" }, qr = /* @__PURE__ */ O({
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
    }, s = k(() => typeof o.value == "boolean" ? o.value ? "1" : "" : o.value === null || o.value === void 0 ? "" : String(o.value)), i = k(() => o.icons[s.value] ?? o.defaultIcon), d = k(() => n[i.value] ?? n.dot), u = k(() => r[o.colors[s.value] ?? "neutral"] ?? r.neutral), m = k(() => o.labels[s.value] ?? String(o.value ?? "-"));
    return (x, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: m.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: P(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": m.value
      }, [
        l("path", { d: d.value }, null, 8, Ur)
      ], 10, Rr)),
      l("span", Hr, f(m.value), 1)
    ], 8, Nr));
  }
}), Kr = ["src"], Gr = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Wr = /* @__PURE__ */ O({
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
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = k(() => {
      const d = typeof o.src == "string" ? o.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = k(() => {
      const d = typeof o.fallbackText == "string" ? o.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), a("span", {
      class: P(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (m) => n.value = !0)
      }, null, 40, Kr)) : e.fallback === "initials" ? (t(), a(_, { key: 1 }, [
        U(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", Gr, [...u[1] || (u[1] = [
        l("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : y("", !0)
    ], 2));
  }
}), Zr = {
  key: 0,
  class: "text-muted-foreground"
}, Jr = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Yr = {
  key: 0,
  class: "font-mono text-xs"
}, Xr = {
  key: 1,
  class: "sr-only"
}, Qr = /* @__PURE__ */ O({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = k(() => {
      const s = (o.value ?? "").trim();
      return n.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", Zr, "-")) : (t(), a("span", Jr, [
      l("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", Yr, f(r.value), 1)) : (t(), a("span", Xr, f(r.value), 1))
    ]));
  }
}), ei = { class: "inline-flex items-center" }, ti = ["checked", "aria-label"], ai = { class: "sr-only" }, ww = /* @__PURE__ */ O({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const o = e, n = k(() => {
      const s = o.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = k(
      () => n.value ? o.trueLabel ?? "Yes" : o.falseLabel ?? "No"
    );
    return (s, i) => (t(), a("span", ei, [
      l("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, ti),
      l("span", ai, f(r.value), 1)
    ]));
  }
}), ni = {
  key: 0,
  class: "text-muted-foreground"
}, li = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, Cw = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = k(
      () => String(o.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", li, f(n.value), 1)) : (t(), a("span", ni, "—"));
  }
}), oi = { class: "flex items-center gap-2" }, si = ["onUpdate:modelValue", "onChange"], ri = ["value"], ii = ["onUpdate:modelValue"], di = ["value"], ui = ["onUpdate:modelValue"], ci = ["onUpdate:modelValue", "multiple"], fi = ["value"], mi = ["onUpdate:modelValue", "type"], pi = ["aria-label", "onClick"], vi = { class: "flex items-center gap-2" }, gi = /* @__PURE__ */ O({
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
    const d = (c) => "rules" in c, u = k(() => Object.keys(n.fields));
    function m(c) {
      const S = c ? n.fields[c]?.kind : void 0;
      return S ? n.operators[S] ?? [] : [];
    }
    const x = {
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
    function A() {
      i.value.rules.push(s()), p();
    }
    function C(c) {
      i.value.rules.splice(c, 1), p();
    }
    function $(c) {
      c.operator = m(c.field)[0], c.value = void 0, p();
    }
    const w = k(() => n.depth + 1 < n.maxDepth);
    function h() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, S) => {
      const M = Bt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: P(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        l("div", oi, [
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
        (t(!0), a(_, null, V(i.value.rules, (z, R) => (t(), a("div", {
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
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(_, { key: 1 }, [
            ue(l("select", {
              "onUpdate:modelValue": (E) => z.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => $(z)
            }, [
              (t(!0), a(_, null, V(u.value, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, ri))), 128))
            ], 40, si), [
              [Ie, z.field]
            ]),
            ue(l("select", {
              "onUpdate:modelValue": (E) => z.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(_, null, V(m(z.field), (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(x[E] ?? E), 9, di))), 128))
            ], 40, ii), [
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
            ])], 40, ui)), [
              [Ie, z.value]
            ]) : z.field && e.fields[z.field]?.options?.length ? ue((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (E) => z.value = E,
              multiple: e.fields[z.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(_, null, V(e.fields[z.field].options, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(E), 9, fi))), 128))
            ], 40, ci)), [
              [Ie, z.value]
            ]) : ue((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (E) => z.value = E,
              type: z.field && e.fields[z.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, mi)), [
              [_a, z.value]
            ])
          ], 64)),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(z) ? "group" : "rule"}`,
            onClick: (E) => C(R)
          }, " × ", 8, pi)
        ]))), 128)),
        l("div", vi, [
          I(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: b
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
          e.root ? (t(), a(_, { key: 1 }, [
            S[8] || (S[8] = l("span", { class: "flex-1" }, null, -1)),
            I(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: h
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
}), hi = {
  key: 0,
  class: "font-mono text-xs"
}, bi = {
  key: 1,
  class: "text-muted-foreground"
}, xi = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, Sw = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = k(
      () => o.value && typeof o.value == "object" && !Array.isArray(o.value) ? Object.keys(o.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", hi, f(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", bi, "—")) : (t(), a("span", xi, f(n.value.length) + " " + f(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), yi = ["aria-checked", "aria-label", "title", "disabled"], ki = ["value", "disabled"], $i = ["value"], Mw = /* @__PURE__ */ O({
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
    const n = e, r = o, s = k(() => n.value === !0 || n.value === 1 || n.value === "1"), i = k(() => n.busy || n.disabled), d = k(
      () => s.value ? n.onLabel ?? "Enabled" : n.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function m(x) {
      const p = x.target.value;
      p !== String(n.value ?? "") && r("change", p);
    }
    return (x, p) => e.type === "toggle" ? (t(), a("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: P(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: me(u, ["stop"])
    }, [
      l("span", {
        class: P(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, yi)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = me(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), a(_, null, V(e.options, (b, A) => (t(), a("option", {
        key: A,
        value: A
      }, f(b), 9, $i))), 128))
    ], 40, ki));
  }
}), wi = ["data-variant"], Ci = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", We = /* @__PURE__ */ O({
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
    }, r = k(
      () => [Ci, n[o.variant], o.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: P(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, wi));
  }
}), Vt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Si(e) {
  return e != null && e !== "";
}
function Mi(e) {
  const o = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" ")) : (e.key === "name" && o.push("font-medium"), e.mono && o.push("font-mono text-xs"), e.muted && o.push("text-muted-foreground"), e.transform === "upper" && o.push("uppercase"), e.transform === "lower" && o.push("lowercase"), e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" "));
}
function Bw(e) {
  const o = k(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Mi(s)
    }))
  ), n = k(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = n.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), m = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Vt[m] ?? "outline";
  }
  return { columns: o, byKey: n, badgeVariant: r };
}
const Bi = ["disabled", "aria-label", "aria-busy"], Ai = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zi = ["d"], _i = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Pi = ["disabled", "onClick"], Oi = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, ji = ["d"], Li = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Aw = /* @__PURE__ */ O({
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
    const n = e, r = o, s = k(() => n.busy || n.disabled), i = k(() => String(n.value ?? "")), d = k(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function u(b) {
      return typeof b == "boolean" ? b ? "1" : "" : String(b ?? "");
    }
    function m(b) {
      const A = n.colors[u(b)] ?? n.defaultColor ?? "neutral";
      return Vt[A] ?? "outline";
    }
    function x(b) {
      return n.options[b] ?? b;
    }
    function p(b, A) {
      if (s.value || b === i.value) {
        A();
        return;
      }
      r("change", b), A();
    }
    return (b, A) => (t(), a("div", {
      onClick: A[0] || (A[0] = me(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(We, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          U(f(x(i.value) || "-"), 1)
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
                U(f(x(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", Ai, [
              l("path", {
                d: g(ie)("chevron-down")
              }, null, 8, zi)
            ]))
          ], 8, Bi)
        ]),
        panel: j(({ close: C }) => [
          l("div", _i, f(d.value), 1),
          (t(!0), a(_, null, V(e.options, ($, w) => (t(), a("button", {
            key: w,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (h) => p(String(w), C)
          }, [
            I(We, {
              variant: m(w),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f($), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(w) === i.value ? (t(), a("svg", Oi, [
              l("path", {
                d: g(ie)("check")
              }, null, 8, ji)
            ])) : (t(), a("span", Li))
          ], 8, Pi))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Vi = { class: "flex items-center justify-end" }, Ti = ["aria-label"], Di = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ei = ["d"], Ii = ["href"], Fi = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ni = ["d"], Ri = ["disabled", "onClick"], Ui = ["d"], Hi = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, qi = ["disabled", "onClick"], Ki = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gi = ["d"], zw = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(null), d = K(null), u = k(() => r.groups.flatMap((h) => h.actions)), m = k(() => u.value.filter((h) => !h.destructive)), x = k(() => u.value.filter((h) => h.destructive)), p = {
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
    const A = k(() => u.value.length === 0);
    function C(h) {
      s("run", h);
    }
    function $(h) {
      A.value || (h.preventDefault(), i.value?.openAt(h.clientX, h.clientY));
    }
    function w(h) {
      if (h.key !== "ArrowDown" && h.key !== "ArrowUp")
        return;
      const v = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      h.preventDefault();
      const c = v.indexOf(document.activeElement), S = h.key === "ArrowDown" ? 1 : -1, M = (c + S + v.length) % v.length;
      v[M]?.focus();
    }
    return o({ openContextMenu: $ }), (h, v) => (t(), a("div", Vi, [
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
            (t(), a("svg", Di, [
              l("path", {
                d: g(ie)("more-vertical")
              }, null, 8, Ei)
            ]))
          ], 8, Ti)
        ]),
        panel: j(() => [
          l("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: w
          }, [
            (t(!0), a(_, null, V(m.value, (c) => (t(), a(_, {
              key: c.key
            }, [
              c.link ? (t(), a("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", b(c)])
              }, [
                (t(), a("svg", Fi, [
                  l("path", {
                    d: g(ie)(c.icon)
                  }, null, 8, Ni)
                ])),
                U(" " + f(c.label), 1)
              ], 10, Ii)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", b(c)]),
                disabled: e.busy === c.key,
                onClick: (S) => C(c)
              }, [
                (t(), a("svg", {
                  class: P(["size-4 shrink-0", e.busy === c.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  l("path", {
                    d: g(ie)(c.icon)
                  }, null, 8, Ui)
                ], 2)),
                U(" " + f(c.label), 1)
              ], 10, Ri))
            ], 64))), 128)),
            x.value.length ? (t(), a("div", Hi, [
              (t(!0), a(_, null, V(x.value, (c) => (t(), a("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (S) => C(c)
              }, [
                (t(), a("svg", Ki, [
                  l("path", {
                    d: g(ie)(c.icon ?? "trash")
                  }, null, 8, Gi)
                ])),
                U(" " + f(c.label), 1)
              ], 8, qi))), 128))
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
}, ot = 12, st = 20, Wi = [0, 0.25, 0.5, 0.75, 1], Tt = "alxtexhpanel.appearance", Ae = {
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
let qt = !1;
const Zi = "alxtexhpanel.appearance.vars";
function wt(e) {
  return e.theme === "dark";
}
const Kt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function Ji(e) {
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
    "--pk-row-padding": Kt[e.density] ?? Kt.comfortable
  };
}
function Dt() {
  if (typeof window > "u")
    return { ...Ae };
  try {
    const e = localStorage.getItem(Tt);
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
function _w(e) {
  const o = Dt(), n = e ? { ...o, ...e } : o;
  if (Le.value = n, Ct(n), e)
    try {
      localStorage.setItem(Tt, JSON.stringify(n));
    } catch {
    }
}
let pa = null;
function Pw(e) {
  pa = e;
}
let va = {};
function Yi(e) {
  if (va = e, !(typeof document > "u") && !Dt().primaryChosen)
    for (const [o, n] of Object.entries(e))
      document.documentElement.style.setProperty(o, n);
}
function Ct(e) {
  if (typeof document > "u")
    return;
  const o = document.documentElement, n = { ...Ji(e), ...e.primaryChosen ? {} : va };
  o.classList.toggle("dark", wt(e));
  for (const [r, s] of Object.entries(n))
    o.style.setProperty(r, s);
  o.dataset.sidebar = e.sidebarSide, o.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Zi,
      JSON.stringify({ dark: wt(e), theme: e.theme, vars: n })
    );
  } catch {
  }
}
function ga() {
  function e(r) {
    Ct(r);
  }
  function o(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Le.value = { ...Le.value, ...r, ...s };
    try {
      localStorage.setItem(Tt, JSON.stringify(Le.value));
    } catch {
    }
    e(Le.value), pa?.({ ...r, ...s });
  }
  function n() {
    o({ ...Ae });
  }
  return pe(() => {
    qt || (qt = !0, Le.value = Dt(), Ct(Le.value));
  }), {
    appearance: k(() => Le.value),
    set: o,
    reset: n,
    PRIMARY_COLORS: kt,
    SURFACE_TINTS: $t,
    FONT_SIZE_MIN: ot,
    FONT_SIZE_MAX: st,
    RADIUS_OPTIONS: Wi
  };
}
const Xi = { class: "flex items-center justify-between border-b px-4 py-3" }, Qi = { class: "flex items-center gap-2" }, ed = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, td = { class: "flex flex-col gap-2" }, ad = { class: "grid grid-cols-8 gap-2" }, nd = ["title", "aria-label", "aria-pressed", "onClick"], ld = { class: "flex flex-col gap-2" }, od = { class: "grid grid-cols-8 gap-2" }, sd = ["title", "aria-label", "aria-pressed", "onClick"], rd = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, id = { class: "flex flex-col gap-2" }, dd = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ud = ["aria-pressed", "aria-label", "onClick"], cd = { class: "text-sm font-semibold" }, fd = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, md = ["onClick"], pd = { class: "flex flex-col gap-2" }, vd = { class: "flex items-center justify-between" }, gd = { class: "text-muted-foreground text-xs tabular-nums" }, hd = { class: "flex items-center gap-2" }, bd = ["disabled"], xd = ["min", "max", "value"], yd = ["disabled"], Ow = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: o, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = ga(), u = K(!1), m = k(() => o.value.sidebarSide === "right"), x = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], b = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], A = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], C = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], $ = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function w(h, v) {
      return `oklch(0.72 ${v * 3} ${h})`;
    }
    return (h, v) => (t(), a(_, null, [
      l("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (c) => u.value = !0)
      }, [...v[7] || (v[7] = [
        Mt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
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
              class: P(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              l("header", Xi, [
                v[9] || (v[9] = l("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                l("div", Qi, [
                  l("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => g(r) && g(r)(...c))
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
              l("div", ed, [
                l("section", td, [
                  v[11] || (v[11] = l("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  l("div", ad, [
                    (t(!0), a(_, null, V(g(s), (c, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": g(o).primary === S,
                      onClick: (M) => g(n)({ primary: S })
                    }, [
                      g(o).primary === S ? (t(), a("svg", {
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
                    ], 12, nd))), 128))
                  ])
                ]),
                l("section", ld, [
                  v[13] || (v[13] = l("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  l("div", od, [
                    (t(!0), a(_, null, V(g(i), (c, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: w(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": g(o).surface === S,
                      onClick: (M) => g(n)({ surface: S })
                    }, [
                      g(o).surface === S ? (t(), a("svg", rd, [...v[12] || (v[12] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : y("", !0)
                    ], 12, sd))), 128))
                  ])
                ]),
                l("section", id, [
                  v[14] || (v[14] = l("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  l("div", dd, [
                    (t(!0), a(_, null, V(g(d), (c) => (t(), a("button", {
                      key: c,
                      type: "button",
                      class: P([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        g(o).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": g(o).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (S) => g(n)({ radius: c })
                    }, [
                      l("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      U(" " + f(c), 1)
                    ], 10, ud))), 128))
                  ])
                ]),
                (t(!0), a(_, null, V([
                  { label: "Color scheme", key: "theme", options: x },
                  { label: "Card style", key: "cardStyle", options: b },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: A },
                  { label: "Content layout", key: "contentLayout", options: C },
                  { label: "Menu style", key: "menuStyle", options: $ }
                ], (c) => (t(), a("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  l("h3", cd, f(c.label), 1),
                  l("div", fd, [
                    (t(!0), a(_, null, V(c.options, (S) => (t(), a("button", {
                      key: String(S.value),
                      type: "button",
                      class: P([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        g(o)[c.key] === S.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (M) => g(n)({ [c.key]: S.value })
                    }, f(S.label), 11, md))), 128))
                  ])
                ]))), 128)),
                l("section", pd, [
                  l("div", vd, [
                    v[15] || (v[15] = l("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    l("span", gd, f(g(o).fontSize) + "px", 1)
                  ]),
                  l("div", hd, [
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: g(o).fontSize <= g(ot),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => g(n)({ fontSize: g(o).fontSize - 1 }))
                    }, " − ", 8, bd),
                    l("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: g(ot),
                      max: g(st),
                      value: g(o).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (c) => g(n)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, xd),
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: g(o).fontSize >= g(st),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => g(n)({ fontSize: g(o).fontSize + 1 }))
                    }, " + ", 8, yd)
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
}), kd = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, $d = { class: "flex items-stretch" }, wd = ["href", "aria-current"], Cd = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sd = ["d"], Md = { class: "w-full truncate text-center" }, Bd = {
  key: 0,
  class: "flex-1"
}, Ad = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, zd = ["d"], _d = { class: "w-full truncate text-center" }, pt = 5, jw = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = k(
      () => n.items.length <= pt ? n.items : n.items.slice(0, pt - 1)
    ), i = k(() => n.items.length > pt);
    function d(u) {
      return u === "/" ? n.current === "/" : n.current === u || n.current.startsWith(`${u}/`);
    }
    return (u, m) => (t(), a("nav", kd, [
      l("ul", $d, [
        (t(!0), a(_, null, V(s.value, (x) => (t(), a("li", {
          key: x.key,
          class: "flex-1"
        }, [
          l("a", {
            href: x.href,
            class: P([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(x.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(x.href) ? "page" : void 0
          }, [
            (t(), a("svg", Cd, [
              l("path", {
                d: g(ie)(x.icon)
              }, null, 8, Sd)
            ])),
            l("span", Md, f(x.title), 1)
          ], 10, wd)
        ]))), 128)),
        i.value ? (t(), a("li", Bd, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (x) => r("more"))
          }, [
            (t(), a("svg", Ad, [
              l("path", {
                d: g(ie)("more-horizontal")
              }, null, 8, zd)
            ])),
            l("span", _d, f(e.moreLabel), 1)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), Pd = ["value"], Od = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", ge = /* @__PURE__ */ O({
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
      class: P([Od, n.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, Pd));
  }
}), jd = ["for"], ke = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (o, n) => (t(), a("label", {
      "data-slot": "label",
      for: o.$props.for,
      class: P([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.$props.class
      ])
    }, [
      q(o.$slots, "default")
    ], 10, jd));
  }
}), Lw = /* @__PURE__ */ O({
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
      class: P(["size-4 animate-spin", o.$props.class])
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
}), Ld = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Vd = ["id", "name", "value", "disabled", "maxlength"], Td = ["data-active"], Dd = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Vw = /* @__PURE__ */ O({
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
    const d = k(
      () => Array.from({ length: n.length }, (x, p) => n.modelValue[p] ?? "")
    ), u = k(() => Math.min(n.modelValue.length, n.length - 1));
    function m(x) {
      const p = x.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (x, p) => (t(), a("div", Ld, [
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
        onFocus: p[0] || (p[0] = (b) => s.value = !0),
        onBlur: p[1] || (p[1] = (b) => s.value = !1)
      }, null, 40, Vd),
      (t(!0), a(_, null, V(d.value, (b, A) => (t(), a("div", {
        key: A,
        "data-slot": "input-otp-slot",
        "data-active": s.value && A === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(f(b) + " ", 1),
        s.value && A === u.value && b === "" ? (t(), a("div", Dd, [...p[2] || (p[2] = [
          l("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : y("", !0)
      ], 8, Td))), 128))
    ]));
  }
}), Ed = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, _e = /* @__PURE__ */ O({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (o, n) => (t(), a("header", {
      class: P(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      l("h2", {
        class: P(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), a("p", Ed, f(e.description), 1)) : y("", !0)
    ], 2));
  }
}), Id = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Fd = { class: "min-w-0 space-y-1" }, Nd = { class: "flex flex-wrap items-center gap-2.5" }, Rd = { class: "text-2xl font-semibold tracking-tight" }, Ud = {
  key: 0,
  class: "flex items-center gap-2"
}, Hd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, qd = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, Tw = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (o, n) => (t(), a("header", Id, [
      l("div", Fd, [
        l("div", Nd, [
          l("h1", Rd, f(e.title), 1),
          o.$slots.status ? (t(), a("div", Ud, [
            q(o.$slots, "status")
          ])) : y("", !0)
        ]),
        e.purpose ? (t(), a("p", Hd, f(e.purpose), 1)) : y("", !0)
      ]),
      o.$slots.actions ? (t(), a("div", qd, [
        q(o.$slots, "actions")
      ])) : y("", !0)
    ]));
  }
}), Kd = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: P(g(Q)(g(Zd)({ variant: e.variant }), o.class)),
      role: "alert"
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Gd = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: P(g(Q)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Wd = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: P(g(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Zd = Ot(
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
), Jd = { class: "list-inside list-disc text-sm" }, Dw = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const o = e, n = k(() => Array.from(new Set(o.errors)));
    return (r, s) => (t(), T(g(Kd), { variant: "destructive" }, {
      default: j(() => [
        I(g(Da), { class: "size-4" }),
        I(g(Wd), null, {
          default: j(() => [
            U(f(e.title), 1)
          ]),
          _: 1
        }),
        I(g(Gd), null, {
          default: j(() => [
            l("ul", Jd, [
              (t(!0), a(_, null, V(n.value, (i, d) => (t(), a("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ha = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, s = la(n, "modelValue", o, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, d) => ue((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => Pa(s) ? s.value = u : null),
      "data-slot": "input",
      class: P(
        g(Q)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [ye, g(s)]
    ]);
  }
}), Yd = { class: "relative" }, Xd = ["aria-label"], Ew = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: o }) {
    const n = e, r = K(!1), s = Oa("inputRef");
    return o({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", Yd, [
      I(g(ha), le({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: g(Q)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      l("button", {
        type: "button",
        class: P(
          g(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(g(Ea), {
          key: 0,
          class: "size-4"
        })) : (t(), T(g(Ia), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Xd)
    ]));
  }
}), Qd = "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", Iw = "grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3", eu = "grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3", De = "w-full min-w-0 px-4 py-6 sm:px-6", Fw = "w-full min-w-0 p-3 sm:p-4", Nw = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", Rw = "w-full max-w-5xl";
function Uw(e, o) {
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
const ba = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", tu = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", au = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function nu(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || o.endsWith(".jpg") || o.endsWith(".jpeg");
}
function lu(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || o.endsWith(".png") || o.endsWith(".webp");
}
async function ou(e) {
  const o = URL.createObjectURL(e);
  try {
    const n = await su(o), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
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
function su(e) {
  return new Promise((o, n) => {
    const r = new Image();
    r.onload = () => o(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function ru(e) {
  if (nu(e))
    throw new Error(au);
  if (!lu(e))
    throw new Error(ba);
  if (!await ou(e))
    throw new Error(tu);
}
const Et = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(g(oa), le({ "data-slot": "sheet" }, g(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), Hw = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(He), le({ "data-slot": "sheet-close" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iu = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(g(zt), le({
      "data-slot": "sheet-overlay",
      class: g(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }, g(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), It = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(_t), null, {
      default: j(() => [
        I(iu),
        I(g(Pt), le({
          "data-slot": "sheet-content",
          class: g(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...d.$attrs, ...g(i) }), {
          default: j(() => [
            q(d.$slots, "default"),
            I(g(He), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                I(g(At), { class: "size-4" }),
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
}), du = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(g(sa), le({
      "data-slot": "sheet-description",
      class: g(Q)("text-muted-foreground text-sm", o.class)
    }, g(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qw = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: P(g(Q)("mt-auto flex flex-col gap-2 p-4", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), uu = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: P(g(Q)("flex flex-col gap-1.5 p-4", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), cu = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(g(ra), le({
      "data-slot": "sheet-title",
      class: g(Q)("text-foreground font-semibold", o.class)
    }, g(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kw = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(ia), le({ "data-slot": "sheet-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gt = "sidebar_state", fu = 3600 * 24 * 7, mu = "16rem", pu = "18rem", vu = "3rem", gu = "b", [dt, hu] = Qa("Sidebar"), bu = { class: "flex h-full w-full flex-col" }, xu = ["data-state", "data-collapsible", "data-variant", "data-side"], yu = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Gw = /* @__PURE__ */ O({
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
      class: g(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o.class
      )
    }, d.$attrs), [
      q(d.$slots, "default")
    ], 16)) : g(n) ? (t(), T(g(Et), le({
      key: 1,
      open: g(s)
    }, d.$attrs, { "onUpdate:open": g(i) }), {
      default: j(() => [
        I(g(It), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": g(pu)
          })
        }, {
          default: j(() => [
            I(uu, { class: "sr-only" }, {
              default: j(() => [
                I(cu, null, {
                  default: j(() => [...u[0] || (u[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(du, null, {
                  default: j(() => [...u[1] || (u[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l("div", bu, [
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
      "data-state": g(r),
      "data-collapsible": g(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      l("div", {
        class: P(
          g(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      l("div", le({
        class: g(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          o.class
        )
      }, d.$attrs), [
        l("div", yu, [
          q(d.$slots, "default")
        ])
      ], 16)
    ], 8, xu));
  }
}), Ww = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: P(
        g(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Zw = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: P(g(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Jw = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: P(g(Q)("relative flex w-full min-w-0 flex-col p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Yw = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(qe), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        g(Q)(
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
}), Xw = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: P(g(Q)("w-full text-sm", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Qw = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(qe), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        g(Q)(
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
}), e4 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: P(g(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), t4 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(ha), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: P(g(Q)("bg-background h-8 w-full shadow-none", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), a4 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: P(
        g(Q)(
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
}), n4 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: P(g(Q)("flex w-full min-w-0 flex-col gap-1", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), l4 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(qe), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: P(
        g(Q)(
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
}), o4 = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: P(
        g(Q)(
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
}), ku = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(g(en), le({ "data-slot": "tooltip" }, g(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), $u = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(tn), null, {
      default: j(() => [
        I(g(an), le({ "data-slot": "tooltip-content" }, { ...g(i), ...d.$attrs }, {
          class: g(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default"),
            I(g(nn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), s4 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(g(da), we(je(o)), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wu = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(ln), le({ "data-slot": "tooltip-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wt = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(g(qe), le({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: g(Q)(g(Su)({ variant: e.variant, size: e.size }), o.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), r4 = /* @__PURE__ */ O({
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
    return (i, d) => e.tooltip ? (t(), T(g(ku), { key: 1 }, {
      default: j(() => [
        I(g(wu), { "as-child": "" }, {
          default: j(() => [
            I(Wt, we(je({ ...g(s), ...i.$attrs })), {
              default: j(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(g($u), {
          side: "right",
          align: "center",
          hidden: g(r) !== "collapsed" || g(n)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), a(_, { key: 0 }, [
              U(f(e.tooltip), 1)
            ], 64)) : (t(), T(xe(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(Wt, we(le({ key: 0 }, { ...g(s), ...i.$attrs })), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i4 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: P(g(Q)("group/menu-item relative", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Zt = "animate-pulse rounded-md bg-primary/10", d4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = k(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: P(g(Q)("flex h-8 items-center gap-2 rounded-md px-2", o.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: P(g(Q)(Zt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : y("", !0),
      l("div", {
        class: P(g(Q)(Zt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), u4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: P(
        g(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), c4 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(g(qe), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: P(
        g(Q)(
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
}), f4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: P(g(Q)("group/menu-sub-item relative", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), m4 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Wa?.cookie.includes(`${Gt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = Ka("(max-width: 767px)"), i = K(!1), d = la(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(b) {
      d.value = b, document.cookie = `${Gt}=${d.value}; path=/; max-age=${fu}`;
    }
    function m(b) {
      i.value = b;
    }
    function x() {
      return s.value ? m(!i.value) : u(!d.value);
    }
    Ga("keydown", (b) => {
      b.key === gu && (b.metaKey || b.ctrlKey) && (b.preventDefault(), x());
    });
    const p = k(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return hu({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: x
    }), (b, A) => (t(), T(g(da), { "delay-duration": 0 }, {
      default: j(() => [
        l("div", le({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": g(mu),
            "--sidebar-width-icon": g(vu)
          },
          class: g(Q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, b.$attrs), [
          q(b.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), p4 = /* @__PURE__ */ O({
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
      class: P(
        g(Q)(
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
      (...i) => g(n) && g(n)(...i))
    }, [
      q(r.$slots, "default")
    ], 2));
  }
}), Cu = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(g(on), le({ "data-slot": "separator" }, g(n), {
      class: g(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        o.class
      )
    }), null, 16, ["class"]));
  }
}), v4 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(Cu), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: P(g(Q)("bg-sidebar-border mx-2 w-auto", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), g4 = /* @__PURE__ */ O({
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
      class: P(g(Q)("h-7 w-7", o.class)),
      onClick: g(s)
    }, {
      default: j(() => [
        g(n) || g(r) === "collapsed" ? (t(), T(g(Fa), { key: 0 })) : (t(), T(g(Na), { key: 1 })),
        d[0] || (d[0] = l("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Su = Ot(
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
), h4 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(g(sn), le({ "data-slot": "dropdown-menu" }, g(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), Mu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, b4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(rn), le({ "data-slot": "dropdown-menu-checkbox-item" }, g(i), {
      class: g(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", Mu, [
          I(g(ua), null, {
            default: j(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(g(aa), { class: "size-4" })
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
}), x4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(dn), null, {
      default: j(() => [
        I(g(un), le({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...g(i) }, {
          class: g(Q)(
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
}), y4 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(cn), le({ "data-slot": "dropdown-menu-group" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k4 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(g(fn), le({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, g(r), {
      class: g(Q)(
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
}), $4 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const o = e, n = de(o, "class", "inset"), r = Ce(n);
    return (s, i) => (t(), T(g(mn), le({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, g(r), {
      class: g(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), w4 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(g(pn), le({ "data-slot": "dropdown-menu-radio-group" }, g(s)), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, C4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(vn), le({ "data-slot": "dropdown-menu-radio-item" }, g(i), {
      class: g(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", Bu, [
          I(g(ua), null, {
            default: j(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(g(Ra), { class: "size-2 fill-current" })
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
}), S4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(g(gn), le({ "data-slot": "dropdown-menu-separator" }, g(n), {
      class: g(Q)("bg-border -mx-1 my-1 h-px", o.class)
    }), null, 16, ["class"]));
  }
}), M4 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: P(g(Q)("text-muted-foreground ml-auto text-xs tracking-widest", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), B4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(g(hn), le({ "data-slot": "dropdown-menu-sub" }, g(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), A4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(bn), le({ "data-slot": "dropdown-menu-sub-content" }, g(i), {
      class: g(Q)(
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
}), z4 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(g(xn), le({ "data-slot": "dropdown-menu-sub-trigger" }, g(r), {
      "data-inset": e.inset ? "" : void 0,
      class: g(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        o.class
      )
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        I(g(na), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), _4 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ce(e);
    return (r, s) => (t(), T(g(yn), le({ "data-slot": "dropdown-menu-trigger" }, g(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P4 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(kn), {
      "data-slot": "avatar",
      class: P(g(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), O4 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(g($n), le({ "data-slot": "avatar-fallback" }, g(n), {
      class: g(Q)("bg-muted flex size-full items-center justify-center rounded-full", o.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j4 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(g(wn), le({ "data-slot": "avatar-image" }, o, { class: "aspect-square size-full" }), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), L4 = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: P(o.class)
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), V4 = /* @__PURE__ */ O({
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
      class: P(g(Q)("flex size-9 items-center justify-center", o.class))
    }, [
      q(n.$slots, "default", {}, () => [
        I(g(Ua), { class: "size-4" })
      ]),
      r[0] || (r[0] = l("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), T4 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: P(g(Q)("inline-flex items-center gap-1.5", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), D4 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(qe), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: P(g(Q)("hover:text-foreground transition-colors", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), E4 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: P(
        g(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), I4 = /* @__PURE__ */ O({
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
      class: P(g(Q)("text-foreground font-normal", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), F4 = /* @__PURE__ */ O({
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
      class: P(g(Q)("[&>svg]:size-3.5", o.class))
    }, [
      q(n.$slots, "default", {}, () => [
        I(g(na))
      ])
    ], 2));
  }
}), Au = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, zu = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", Au, [
      I(g(Cn), le({ "data-slot": "navigation-menu-viewport" }, g(r), {
        class: g(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), N4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(Sn), le({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, g(i), {
      class: g(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: j((m) => [
        q(d.$slots, "default", we(je(m))),
        e.viewport ? (t(), T(zu, { key: 0 })) : y("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), R4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(Mn), le({ "data-slot": "navigation-menu-content" }, g(i), {
      class: g(Q)(
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
}), U4 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(g(Bn), le({ "data-slot": "navigation-menu-indicator" }, g(r), {
      class: g(Q)(
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
}), H4 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(g(An), le({ "data-slot": "navigation-menu-item" }, g(n), {
      class: g(Q)("relative", o.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(zn), le({ "data-slot": "navigation-menu-link" }, g(i), {
      class: g(Q)(
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
}), K4 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(g(_n), le({ "data-slot": "navigation-menu-list" }, g(r), {
      class: g(Q)("group flex flex-1 list-none items-center justify-center gap-1", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G4 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(g(Pn), le({ "data-slot": "navigation-menu-trigger" }, g(r), {
      class: g(Q)(g(_u)(), "group", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        I(g(Ha), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _u = Ot(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), W4 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(g(oa), le({ "data-slot": "dialog" }, g(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(je(u)))
      ]),
      _: 3
    }, 16));
  }
}), Z4 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(He), le({ "data-slot": "dialog-close" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pu = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(g(zt), le({ "data-slot": "dialog-overlay" }, g(n), {
      class: g(Q)(
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
}), J4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(_t), null, {
      default: j(() => [
        I(Pu),
        I(g(Pt), le({ "data-slot": "dialog-content" }, { ...d.$attrs, ...g(i) }, {
          class: g(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default"),
            e.showCloseButton ? (t(), T(g(He), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                I(g(At)),
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
}), Y4 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(g(sa), le({ "data-slot": "dialog-description" }, g(r), {
      class: g(Q)("text-muted-foreground text-sm", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X4 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: P(g(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", o.class))
    }, [
      q(n.$slots, "default"),
      e.showCloseButton ? (t(), T(g(He), {
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
}), Q4 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: P(g(Q)("flex flex-col gap-2 text-center sm:text-left", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), e5 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(g(_t), null, {
      default: j(() => [
        I(g(zt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            I(g(Pt), le({
              class: g(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...g(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (m) => {
                const x = m.detail.originalEvent, p = x.target;
                (x.offsetX > p.clientWidth || x.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: j(() => [
                q(d.$slots, "default"),
                I(g(He), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    I(g(At), { class: "w-4 h-4" }),
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
}), t5 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(g(ra), le({ "data-slot": "dialog-title" }, g(r), {
      class: g(Q)("text-lg leading-none font-semibold", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a5 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(ia), le({ "data-slot": "dialog-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), n5 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = de(o, "class");
    return (r, s) => (t(), T(g(On), le({ "data-slot": "label" }, g(n), {
      class: g(Q)(
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
}), l5 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(g(qa), {
      role: "status",
      "aria-label": "Loading",
      class: P(g(Q)("size-4 animate-spin", o.class))
    }, null, 8, ["class"]));
  }
}), o5 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: P(
        g(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), s5 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: P(g(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), r5 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: P(g(Q)("px-6", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), i5 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: P(g(Q)("text-muted-foreground text-sm", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), d5 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: P(g(Q)("flex items-center px-6 [.border-t]:pt-6", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), u5 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: P(
        g(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), c5 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: P(g(Q)("leading-none font-semibold", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Ou = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, ju = { class: "flex items-start gap-3" }, Lu = { class: "min-w-0 flex-1" }, Vu = { class: "text-foreground text-sm font-medium" }, Tu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, f5 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(!1), d = K(null), u = K(0);
    ja((x) => (console.error(`[PkBoundary] ${r.label} failed to render`, x), i.value = !0, d.value = x instanceof Error ? x.message : null, s("error", x), !1));
    function m() {
      i.value = !1, d.value = null, u.value++;
    }
    return o({ retry: m }), (x, p) => (t(), a("div", {
      class: P(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", Ou, [
        l("div", ju, [
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
          l("div", Lu, [
            l("p", Vu, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), a("p", Tu, f(d.value), 1)) : y("", !0),
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
      ])) : i.value ? y("", !0) : q(x.$slots, "default", { key: u.value })
    ], 2));
  }
}), Du = { class: "bg-card rounded-lg border" }, Eu = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Iu = { class: "min-w-0" }, Fu = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Nu = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Ru = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Uu = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, m5 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, n) => (t(), a("section", Du, [
      e.title || e.description || o.$slots.header || o.$slots.actions ? (t(), a("header", Eu, [
        l("div", Iu, [
          q(o.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", Fu, f(e.title), 1)) : y("", !0),
            e.description ? (t(), a("p", Nu, f(e.description), 1)) : y("", !0)
          ])
        ]),
        o.$slots.actions ? (t(), a("div", Ru, [
          q(o.$slots, "actions")
        ])) : y("", !0)
      ])) : y("", !0),
      l("div", {
        class: P(e.padded ? "p-4" : "")
      }, [
        q(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (t(), a("footer", Uu, [
        q(o.$slots, "footer")
      ])) : y("", !0)
    ]));
  }
}), xa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function p5() {
  const e = ca(), o = k(() => e.props.panel?.pageFooter === !0);
  return xt(xa, o), o;
}
const Hu = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, qu = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Ku = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, v5 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const o = e, n = ca(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = k(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), d = lt(xa, k(() => !1)), u = k(() => !o.host && g(d) === !0);
    return (m, x) => u.value ? y("", !0) : (t(), a("footer", Hu, [
      l("div", qu, [
        l("p", null, "© " + f(g(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", Ku, [
          (t(!0), a(_, null, V(i.value, (p) => (t(), T(g(Vn), {
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
}), Gu = { class: "flex shrink-0 flex-col items-center" }, Wu = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, g5 = /* @__PURE__ */ O({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const o = e, n = k(() => o.kind === "laptop"), r = k(
      () => n.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = k(() => n.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), a("div", Gu, [
      l("div", {
        class: P(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Wu)) : y("", !0),
        l("div", {
          class: P(["size-full overflow-hidden bg-white", s.value])
        }, [
          q(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(_, { key: 0 }, [
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
}), Zu = { class: "flex flex-col gap-2" }, Ju = { class: "min-w-0 flex-1" }, Yu = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Xu = ["disabled", "aria-label", "onClick"], Qu = ["disabled", "aria-label", "onClick"], ec = ["disabled", "title", "aria-label", "onClick"], tc = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ac = ["disabled"], h5 = /* @__PURE__ */ O({
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
    const x = k(() => n.maxItems !== null && i.value.length >= n.maxItems), p = k(() => n.minItems !== null && i.value.length <= n.minItems), b = k(() => n.children.length === 1);
    function A() {
      if (x.value || n.disabled)
        return;
      const v = {};
      for (const c of n.children)
        v[c.key] = null;
      i.value.push({ uid: s++, data: v });
    }
    function C(v) {
      i.value = i.value.filter((c) => c.uid !== v), m();
    }
    function $(v, c) {
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
    function h(v, c) {
      return n.errors[`${n.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), a("div", Zu, [
      (t(!0), a(_, null, V(i.value, (S, M) => (t(), a("div", {
        key: S.uid,
        class: "flex items-start gap-2"
      }, [
        l("span", {
          class: P(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", b.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(M + 1), 3),
        l("div", Ju, [
          b.value ? (t(), T(Re, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: S.data[e.children[0].key],
            error: h(M, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (z) => w(S.uid, e.children[0].key, z)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Yu, [
            (t(!0), a(_, null, V(e.children, (z) => (t(), T(Re, {
              key: z.key,
              field: { ...z, disabled: z.disabled || e.disabled },
              value: S.data[z.key],
              error: h(M, z.key),
              options: e.childOptions[z.key] ?? [],
              onChange: (R) => w(S.uid, z.key, R)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        l("div", {
          class: P(["flex shrink-0 items-center gap-0.5", b.value ? "mt-1" : "mt-0"])
        }, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || M === 0,
            "aria-label": `Move ${e.itemLabel} ${M + 1} up`,
            onClick: (z) => $(M, -1)
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
          ])], 8, Xu),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || M === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${M + 1} down`,
            onClick: (z) => $(M, 1)
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
          ])], 8, Qu),
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
          ])], 8, ec)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", tc, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : y("", !0),
      x.value ? y("", !0) : (t(), a("button", {
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
      ], 8, ac))
    ]));
  }
}), nc = { class: "space-y-1" }, lc = { class: "flex items-center gap-1" }, oc = ["disabled", "title", "aria-label", "onClick"], sc = ["aria-pressed"], rc = ["id", "value", "rows", "disabled"], ic = ["innerHTML"], dc = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(!1), i = k(() => n.modelValue ?? "");
    function d(b) {
      return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = k(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(b, A = b) {
      const C = document.getElementById(n.id ?? "");
      if (C === null)
        return;
      const $ = C.selectionStart, w = C.selectionEnd, h = i.value.slice($, w);
      r(
        "update:modelValue",
        `${i.value.slice(0, $)}${b}${h}${A}${i.value.slice(w)}`
      );
    }
    const x = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = k(
      () => (n.toolbar ?? Object.keys(x)).filter((b) => b in x)
    );
    return (b, A) => (t(), a("div", nc, [
      l("div", lc, [
        (t(!0), a(_, null, V(p.value, (C) => (t(), a("button", {
          key: C,
          type: "button",
          disabled: e.disabled,
          title: C,
          "aria-label": C,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => x[C].run()
        }, f(x[C].label), 9, oc))), 128)),
        l("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: A[0] || (A[0] = (C) => s.value = !s.value)
        }, " Preview ", 8, sc)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, ic)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: A[1] || (A[1] = (C) => r("update:modelValue", C.target.value))
      }, null, 40, rc))
    ]));
  }
}), uc = { class: "space-y-1" }, cc = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, fc = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, mc = ["id", "value", "rows", "disabled"], pc = { class: "text-muted-foreground text-xs" }, vc = {
  key: 0,
  class: "text-destructive text-xs"
}, gc = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!0), d = k(() => n.modelValue ?? ""), u = k(() => Math.max(d.value.split(`
`).length, 1)), m = k(() => {
      if (n.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (b) {
        return b instanceof Error ? b.message : "Not valid JSON.";
      }
    });
    function x(b) {
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
      const A = b.target, C = A.selectionStart, $ = A.selectionEnd, w = `${d.value.slice(0, C)}    ${d.value.slice($)}`;
      r("update:modelValue", w), requestAnimationFrame(() => {
        A.selectionStart = A.selectionEnd = C + 4;
      });
    }
    return (b, A) => (t(), a("div", uc, [
      l("div", cc, [
        l("div", fc, [
          (t(!0), a(_, null, V(u.value, (C) => (t(), a("div", { key: C }, f(C), 1))), 128))
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
          onInput: x,
          onKeydown: p
        }, null, 40, mc)
      ]),
      l("p", pc, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", vc, f(m.value), 1)) : y("", !0)
    ]));
  }
}), hc = { class: "space-y-3" }, bc = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, xc = { class: "text-sm font-medium" }, yc = { class: "flex items-center gap-1" }, kc = ["disabled", "onClick"], $c = ["disabled", "onClick"], wc = ["disabled", "onClick"], Cc = { class: "space-y-3 p-3" }, Sc = { class: "flex flex-wrap items-center gap-2" }, Mc = ["disabled", "onClick"], Bc = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, b5 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = k(() => n.modelValue ?? []), i = k(
      () => Object.fromEntries(n.blocks.map((A) => [A.type, A]))
    ), d = k(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function u(A) {
      r("update:modelValue", A);
    }
    function m(A) {
      d.value || u([...s.value, { type: A, data: {} }]);
    }
    function x(A) {
      u(s.value.filter((C, $) => $ !== A));
    }
    function p(A, C) {
      const $ = A + C;
      if ($ < 0 || $ >= s.value.length)
        return;
      const w = [...s.value], [h] = w.splice(A, 1);
      w.splice($, 0, h), u(w);
    }
    function b(A, C, $) {
      u(
        s.value.map(
          (w, h) => h === A ? { ...w, data: { ...w.data, [C]: $ } } : w
        )
      );
    }
    return (A, C) => (t(), a("div", hc, [
      (t(!0), a(_, null, V(s.value, ($, w) => (t(), a("div", {
        key: `${$.type}-${w}`,
        class: "bg-card rounded-lg border"
      }, [
        l("div", bc, [
          l("span", xc, f(i.value[$.type]?.label ?? $.type), 1),
          l("div", yc, [
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || w === 0,
              "aria-label": "Move up",
              onClick: (h) => p(w, -1)
            }, " ↑ ", 8, kc),
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || w === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (h) => p(w, 1)
            }, " ↓ ", 8, $c),
            l("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (h) => x(w)
            }, " Remove ", 8, wc)
          ])
        ]),
        l("div", Cc, [
          (t(!0), a(_, null, V(i.value[$.type]?.fields ?? [], (h) => (t(), T(Re, {
            key: h.key,
            field: h,
            value: $.data[h.key] ?? null,
            error: e.errors?.[h.key],
            processing: e.disabled,
            onChange: (v) => b(w, h.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      l("div", Sc, [
        (t(!0), a(_, null, V(e.blocks, ($) => (t(), a("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (w) => m($.type)
        }, " + " + f($.label), 9, Mc))), 128)),
        d.value ? (t(), a("span", Bc, f(e.maxBlocks) + " is the maximum here. ", 1)) : y("", !0)
      ])
    ]));
  }
}), Ac = ["name", "value", "checked", "disabled", "onChange"], zc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, _c = /* @__PURE__ */ O({
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
      class: P(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(_, null, V(e.options, (u) => (t(), a("label", {
        key: String(u.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (m) => r("update:modelValue", u.value)
        }, null, 40, Ac),
        U(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", zc, " Nothing to choose from yet. ")) : y("", !0)
    ], 2));
  }
}), Pc = ["value", "checked", "disabled", "onChange"], Oc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, jc = /* @__PURE__ */ O({
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
    const n = e, r = o, s = k(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    );
    function i(m) {
      return s.value.some((x) => x == m.value);
    }
    function d(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((x) => x != m.value) : [...s.value, m.value]
      );
    }
    const u = k(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, x) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(u.value)
    }, [
      (t(!0), a(_, null, V(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (b) => d(p)
        }, null, 40, Pc),
        U(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Oc, " Nothing to choose from yet. ")) : y("", !0)
    ], 4));
  }
}), Lc = { class: "flex flex-col gap-1.5" }, Vc = ["aria-label", "onClick"], Tc = ["placeholder", "disabled", "maxlength"], Dc = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Ec = ["onClick"], Ic = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Fc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(""), i = k(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), d = k(() => i.value.length >= (n.field.max ?? 25)), u = k(
      () => (n.field.suggestions ?? []).filter(
        (b) => !i.value.some((A) => A.toLowerCase() === b.toLowerCase())
      )
    );
    function m(b) {
      const A = b.trim().slice(0, n.field.maxLength ?? 40);
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
    function x(b) {
      r(
        "update:modelValue",
        i.value.filter((A, C) => C !== b)
      );
    }
    function p(b) {
      if (b.key === "Enter" || b.key === ",") {
        b.preventDefault(), m(s.value);
        return;
      }
      b.key === "Backspace" && s.value === "" && i.value.length > 0 && x(i.value.length - 1);
    }
    return (b, A) => (t(), a("div", Lc, [
      l("div", {
        class: P(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(_, null, V(i.value, (C, $) => (t(), a("span", {
          key: `${C}-${$}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(f(C) + " ", 1),
          e.disabled ? y("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${C}`,
            onClick: (w) => x($)
          }, " × ", 8, Vc))
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
        }, null, 40, Tc), [
          [ye, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", Dc, [
        A[2] || (A[2] = l("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(_, null, V(u.value, (C) => (t(), a("button", {
          key: C,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => m(C)
        }, f(C), 9, Ec))), 128))
      ])) : y("", !0),
      d.value ? (t(), a("p", Ic, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : y("", !0)
    ]));
  }
}), Nc = 4.5, Jt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ya(e) {
  let o = e.replace("#", "");
  return o.length === 3 && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]), [parseInt(o.slice(0, 2), 16), parseInt(o.slice(2, 4), 16), parseInt(o.slice(4, 6), 16)];
}
function vt(e) {
  const o = e / 255;
  return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
}
function St(e) {
  const [o, n, r] = ya(e);
  return 0.2126 * vt(o) + 0.7152 * vt(n) + 0.0722 * vt(r);
}
function ka(e, o) {
  const n = St(e), r = St(o);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Rc(e, o, n) {
  if (!Jt.test(e) || !Jt.test(o))
    return e;
  const r = St(o) > 0.5, s = r ? 0 : 255;
  let i = ya(e);
  for (let d = 0; d <= 20; d++) {
    const u = Uc(i);
    if (ka(u, o) >= n)
      return u;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Uc(e) {
  return "#" + e.map(
    (o) => Math.round(Math.max(0, Math.min(255, o))).toString(16).padStart(2, "0")
  ).join("");
}
const Hc = { class: "flex flex-col gap-2" }, qc = { class: "flex items-center gap-2" }, Kc = {
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
}, Gc = ["value", "disabled", "aria-label"], Wc = ["value", "disabled", "placeholder"], Zc = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Jc = ["aria-label", "title", "onClick"], Yc = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Xc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = k(() => typeof n.modelValue == "string" ? n.modelValue : ""), d = k(() => s.test(i.value));
    function u(C) {
      const $ = C.trim();
      if ($ === "")
        return "";
      const w = $.startsWith("#") ? $ : `#${$}`;
      return s.test(w) ? w.toLowerCase() : $;
    }
    function m(C) {
      r("update:modelValue", u(C.target.value));
    }
    const x = k(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : ka(i.value, n.field.contrastBackground)), p = k(() => n.field.contrastMinRatio ?? Nc), b = k(() => x.value !== null && x.value < p.value);
    function A() {
      n.field.contrastBackground && r(
        "update:modelValue",
        Rc(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (C, $) => (t(), a("div", Hc, [
      l("div", qc, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (w) => r("update:modelValue", w.target.value))
        }, null, 40, Gc)) : (t(), a("span", Kc)),
        l("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, Wc)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Zc, [
        (t(!0), a(_, null, V(e.field.presets, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: P(["size-6 rounded border", i.value.toLowerCase() === w.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: w }),
          "aria-label": w,
          title: w,
          onClick: (h) => r("update:modelValue", w.toLowerCase())
        }, null, 14, Jc))), 128))
      ])) : y("", !0),
      b.value ? (t(), a("p", Yc, [
        l("span", null, " This fails contrast at " + f(x.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? y("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: A
        }, " Use a readable shade "))
      ])) : y("", !0)
    ]));
  }
}), Qc = { class: "flex items-center gap-3" }, ef = ["min", "max", "step", "value", "disabled", "aria-label"], tf = { class: "flex shrink-0 items-center gap-1" }, af = ["min", "max", "step", "value", "disabled"], nf = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, lf = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = k(() => n.field.min ?? 0), i = k(() => n.field.max ?? 100), d = k(() => n.field.step ?? 1), u = k(() => {
      const p = Number(n.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), m = k(
      () => n.modelValue === null || n.modelValue === void 0 || n.modelValue === ""
    );
    function x(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const b = Number(p);
      r("update:modelValue", Number.isFinite(b) ? b : null);
    }
    return (p, b) => (t(), a("div", Qc, [
      l("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: b[0] || (b[0] = (A) => x(A.target.value))
      }, null, 40, ef),
      l("div", tf, [
        l("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: m.value ? "" : u.value,
          disabled: e.disabled,
          onInput: b[1] || (b[1] = (A) => x(A.target.value))
        }, null, 40, af),
        e.field.unit ? (t(), a("span", nf, f(e.field.unit), 1)) : y("", !0)
      ])
    ]));
  }
}), et = /* @__PURE__ */ new Map();
function gt(e, o) {
  et.set(e, o);
}
function of(e) {
  return et.get(e);
}
function x5(e) {
  return et.has(e);
}
function sf() {
  return [...et.keys()].sort();
}
function y5() {
  et.clear();
}
const rf = ["name", "value", "checked", "disabled", "onChange"], df = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, uf = { class: "whitespace-nowrap" }, cf = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, ff = ["name", "value", "checked", "disabled", "onChange"], mf = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, pf = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, vf = { class: "text-center text-xs font-medium" }, gf = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, hf = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, bf = /* @__PURE__ */ O({
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
    const n = e, r = o, s = k(
      () => n.field.preview ? of(n.field.preview) : void 0
    ), i = k(() => !!n.field.preview && !s.value), d = k(() => n.field.layout === "segmented"), u = k(() => {
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
    function m(x) {
      return n.modelValue != null && x.value == n.modelValue;
    }
    return (x, p) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: P(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(_, null, V(e.options, (b) => (t(), a("label", {
        key: String(b.value),
        class: P(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(b) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: m(b),
          disabled: e.disabled,
          onChange: (A) => r("update:modelValue", b.value)
        }, null, 40, rf),
        p[0] || (p[0] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", df, [
          (t(), T(xe(s.value), {
            value: b.value,
            label: b.label,
            selected: m(b)
          }, null, 8, ["value", "label", "selected"]))
        ])) : y("", !0),
        l("span", uf, f(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", cf, " Nothing to choose from yet. ")) : y("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: P(["grid gap-3", u.value])
    }, [
      (t(!0), a(_, null, V(e.options, (b) => (t(), a("label", {
        key: String(b.value),
        class: P(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(b) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: m(b),
          disabled: e.disabled,
          onChange: (A) => r("update:modelValue", b.value)
        }, null, 40, ff),
        p[1] || (p[1] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        l("span", mf, [
          s.value ? (t(), T(xe(s.value), {
            key: 0,
            value: b.value,
            label: b.label,
            selected: m(b)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", pf, " no preview ")) : y("", !0)
        ]),
        l("span", vf, f(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", gf, " Nothing to choose from yet. ")) : y("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", hf, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        l("code", null, f(e.field.preview), 1),
        U(". Registered: " + f(g(sf)().join(", ") || "none") + ". ", 1)
      ])) : y("", !0)
    ], 2));
  }
}), xf = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, yf = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", xf, [
      l("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), kf = { class: "flex flex-col items-center gap-1 text-center" }, $f = {
  key: 0,
  class: "text-xs text-neutral-500"
}, $a = /* @__PURE__ */ O({
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
    const o = e, n = k(() => o.mono ? "#000000" : o.accent), r = k(() => {
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
    return (s, i) => (t(), a("div", kf, [
      l("div", {
        class: P(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: n.value, color: n.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", $f, f(e.caption), 1)) : y("", !0)
    ]));
  }
}), wf = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Cf = { class: "flex items-center gap-3" }, Sf = ["src"], Mf = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Bf = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Af = {
  key: 0,
  class: "text-right text-sm"
}, zf = { class: "text-neutral-500" }, _f = { class: "tabular-nums" }, Pf = { key: 1 }, Of = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, jf = { class: "mt-2 font-medium" }, Lf = { key: 2 }, Vf = { class: "w-full text-sm" }, Tf = { class: "w-full py-3 pr-2" }, Df = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Ef = { key: 0 }, If = ["colspan"], Ff = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Nf = { class: "w-64 text-sm" }, Rf = { class: "tabular-nums" }, Uf = {
  key: 3,
  class: "py-2"
}, Hf = { key: 4 }, qf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Kf = { class: "mt-2 flex flex-col gap-1 text-sm" }, Gf = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Wf = { key: 0 }, Zf = {
  key: 1,
  class: "mt-1"
}, Jf = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Yf = /* @__PURE__ */ O({
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
    return (m, x) => (t(), a("article", wf, [
      l("div", Cf, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Sf)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: n() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), a(_, null, V(e.document.blocks, (p, b) => (t(), a(_, { key: b }, [
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
            p.subtitle ? (t(), a("p", Mf, f(p.subtitle), 1)) : y("", !0),
            p.reference ? (t(), a("p", Bf, f(p.reference), 1)) : y("", !0)
          ]),
          r(p).length ? (t(), a("dl", Af, [
            (t(!0), a(_, null, V(r(p), (A, C) => (t(), a("div", {
              key: C,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              l("dt", zf, f(A.label), 1),
              l("dd", _f, f(A.value), 1)
            ]))), 128))
          ])) : y("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", Pf, [
          l("h2", Of, f(p.heading), 1),
          l("p", jf, f(p.name), 1),
          (t(!0), a(_, null, V(d(p.lines), (A, C) => (t(), a("p", {
            key: C,
            class: "text-sm text-neutral-600"
          }, f(A), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", Lf, [
          l("table", Vf, [
            l("thead", null, [
              l("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: n() })
              }, [
                (t(!0), a(_, null, V(d(p.columns), (A, C) => (t(), a("th", {
                  key: C,
                  class: P(["pb-2 font-medium", C > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(A), 3))), 128))
              ], 4)
            ]),
            l("tbody", null, [
              (t(!0), a(_, null, V(s(p), (A, C) => (t(), a("tr", {
                key: C,
                class: "border-b border-neutral-200"
              }, [
                l("td", Tf, [
                  l("p", null, f(A.description), 1),
                  A.detail ? (t(), a("p", Df, f(A.detail), 1)) : y("", !0)
                ]),
                (t(!0), a(_, null, V(A.cells, ($, w) => (t(), a("td", {
                  key: w,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f($), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Ef, [
                l("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, If)
              ])) : y("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Ff, [
            l("dl", Nf, [
              (t(!0), a(_, null, V(i(p), (A, C) => (t(), a("div", {
                key: C,
                class: P([
                  "flex justify-between py-1",
                  A.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(A.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                l("dt", {
                  class: P(A.strong ? "" : "text-neutral-600")
                }, f(A.label), 3),
                l("dd", Rf, f(A.value), 1)
              ], 6))), 128))
            ])
          ])) : y("", !0)
        ])) : p.type === "code" ? (t(), a("section", Uf, [
          I($a, {
            code: u(p.code),
            caption: u(p.caption),
            style: ne(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", Hf, [
          l("h2", qf, f(p.heading), 1),
          l("ol", Kf, [
            (t(!0), a(_, null, V(d(p.items), (A, C) => (t(), a("li", {
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
          class: P(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: n() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", Gf, [
          p.text ? (t(), a("p", Wf, f(p.text), 1)) : y("", !0),
          d(p.contacts).length ? (t(), a("p", Zf, f(d(p.contacts).join(" · ")), 1)) : y("", !0)
        ])) : (t(), a("p", Jf, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Xf = ["aria-label", "title"], Qf = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, em = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, k5 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: o, set: n } = ga(), r = k(() => o.value.theme === "dark");
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
      (t(), a("svg", Qf, [
        r.value ? (t(), a(_, { key: 0 }, [
          d[0] || (d[0] = l("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = l("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", em))
      ]))
    ], 8, Xf));
  }
}), tm = ["width", "height"], am = { key: 0 }, nm = ["x1", "x2", "y1", "y2"], lm = ["x", "y"], om = ["x1", "x2", "y1", "y2"], sm = ["x", "y"], rm = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], im = ["x", "y", "width", "height", "fill", "fill-opacity"], dm = ["x", "y"], um = ["x", "y"], cm = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, fm = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, mm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, pm = { class: "text-xs font-semibold tabular-nums" }, vm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, gm = { class: "text-muted-foreground" }, Yt = 5.6, $5 = /* @__PURE__ */ O({
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
    const x = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = k(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? x[L % x.length]
    }))), b = k(() => p.value[0]?.points.map((B) => B.label) ?? []), A = k(() => b.value.length), C = k(() => o.orientation === "horizontal"), $ = k(() => Math.max(0, ...b.value.map((B) => B.length))), w = k(() => {
      if (!C.value)
        return o.showAxis ? 44 : 8;
      const B = $.value * Yt + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), h = k(() => Math.max(4, Math.floor((w.value - 16) / Yt)));
    function v(B) {
      return B.length <= h.value ? B : `${B.slice(0, h.value - 1)}…`;
    }
    const c = k(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: w.value
    })), S = k(() => ({
      w: Math.max(1, d.value - c.value.left - c.value.right),
      h: Math.max(1, o.height - c.value.top - c.value.bottom)
    })), M = (B) => o.format ? o.format(B) : z(B);
    function z(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const R = k(() => {
      const B = b.value.map(
        (fe, G) => o.stacked ? p.value.reduce((D, F) => D + Math.max(0, F.points[G]?.value ?? 0), 0) : Math.max(...p.value.map((D) => D.points[G]?.value ?? 0))
      );
      if (o.maxValue)
        return o.maxValue;
      const N = Math.max(...B, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((fe) => N <= fe * L) ?? 10) * L;
    }), E = k(
      () => (C.value ? S.value.h : S.value.w) / Math.max(1, A.value)
    ), ee = k(() => E.value * 0.68), H = k(
      () => o.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), W = k(() => {
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
    }), J = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: R.value * (C.value ? B : 1 - B),
        x: c.value.left + S.value.w * B,
        y: c.value.top + S.value.h * B
      }))
    ), ae = k(() => Math.max(1, Math.ceil(A.value / (C.value ? 14 : 10))));
    function te(B) {
      return B === A.value - 1 || B % ae.value === 0;
    }
    function Y(B) {
      return (C.value ? c.value.top : c.value.left) + B * E.value + E.value / 2;
    }
    const Z = k(() => u.value === null ? null : {
      label: b.value[u.value],
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
      }, " No data ", 4)) : (t(), a(_, { key: 1 }, [
        (t(), a("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: N[0] || (N[0] = (L) => u.value = null)
        }, [
          e.showAxis ? (t(), a("g", am, [
            C.value ? (t(), a(_, { key: 0 }, [
              (t(!0), a(_, null, V(J.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: c.value.top,
                y2: c.value.top + S.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, nm))), 128)),
              (t(!0), a(_, null, V(J.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(z(L.value)), 9, lm))), 128))
            ], 64)) : (t(), a(_, { key: 1 }, [
              (t(!0), a(_, null, V(J.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: c.value.left,
                x2: d.value - c.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, om))), 128)),
              (t(!0), a(_, null, V(J.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: c.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(z(L.value)), 9, sm))), 128))
            ], 64))
          ])) : y("", !0),
          (t(!0), a(_, null, V(b.value, (L, X) => (t(), a("rect", {
            key: `hit-${X}`,
            x: C.value ? c.value.left : c.value.left + X * E.value,
            y: C.value ? c.value.top + X * E.value : c.value.top,
            width: C.value ? S.value.w : E.value,
            height: C.value ? E.value : S.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === X ? 0.4 : 0,
            onMouseenter: (fe) => u.value = X
          }, null, 40, rm))), 128)),
          (t(!0), a(_, null, V(W.value, (L, X) => (t(), a("rect", {
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
          }, null, 8, im))), 128)),
          C.value ? (t(!0), a(_, { key: 1 }, V(b.value, (L, X) => ue((t(), a("text", {
            key: `c-${X}`,
            x: c.value.left - 8,
            y: Y(X) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(f(v(L)) + " ", 1),
            l("title", null, f(L), 1)
          ], 8, dm)), [
            [Te, te(X)]
          ])), 128)) : (t(!0), a(_, { key: 2 }, V(b.value, (L, X) => ue((t(), a("text", {
            key: `c-${X}`,
            x: Y(X),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, um)), [
            [Te, te(X)]
          ])), 128))
        ], 40, tm)),
        Z.value ? (t(), a("div", cm, [
          l("p", fm, f(Z.value.label), 1),
          (t(!0), a(_, null, V(Z.value.rows, (L, X) => (t(), a("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", mm, f(L.name || "Value"), 1),
            l("span", pm, f(M(L.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", vm, [
          (t(!0), a(_, null, V(p.value, (L, X) => (t(), a("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", gm, f(L.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), hm = ["width", "height"], bm = ["id"], xm = ["stop-color"], ym = ["stop-color"], km = { key: 0 }, $m = ["x1", "x2", "y1", "y2"], wm = ["x", "y"], Cm = ["x", "y"], Sm = ["x1", "x2", "y1", "y2"], Mm = ["d", "fill"], Bm = ["d", "stroke", "stroke-dasharray"], Am = ["cx", "cy", "fill"], zm = { key: 1 }, _m = ["x1", "x2", "y1", "y2"], Pm = ["cx", "cy", "fill"], Om = ["x", "y"], jm = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Lm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Vm = { class: "text-xs font-semibold tabular-nums" }, Tm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Dm = { class: "text-muted-foreground" }, Em = /* @__PURE__ */ O({
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
    const o = e, n = k(() => x.value.some((B) => B.axis === "right")), r = K(null), s = K(560), i = K(null);
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
    ], m = Math.random().toString(36).slice(2, 9), x = k(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? u[L % u.length]
    }))), p = k(() => x.value[0]?.points.map((B) => B.label) ?? []), b = k(() => p.value.length), A = k(() => ({
      top: 12,
      right: o.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: o.showAxis ? 44 : 8
    })), C = (B) => o.format ? o.format(B) : $(B);
    function $(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function w(B) {
      const N = Math.max(...B, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((fe) => N <= fe * L) ?? 10) * L;
    }
    const h = k(
      () => w(
        x.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((N) => N.value))
      )
    ), v = k(
      () => w(
        x.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((N) => N.value))
      )
    ), c = k(() => ({
      w: Math.max(1, s.value - A.value.left - A.value.right),
      h: Math.max(1, o.height - A.value.top - A.value.bottom)
    }));
    function S(B) {
      return A.value.left + (b.value <= 1 ? 0 : B / (b.value - 1) * c.value.w);
    }
    function M(B, N = "left") {
      const L = N === "right" ? v.value : h.value;
      return A.value.top + c.value.h - B / L * c.value.h;
    }
    const z = k(
      () => x.value.map((B) => {
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
    const H = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: A.value.top + c.value.h * B,
        value: h.value * (1 - B)
      }))
    ), W = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: A.value.top + c.value.h * B,
        value: v.value * (1 - B)
      }))
    ), J = k(() => Math.max(1, Math.ceil(b.value / 8)));
    function ae(B) {
      return B === b.value - 1 || B % J.value === 0;
    }
    function te(B) {
      const N = B.currentTarget.getBoundingClientRect(), L = B.clientX - N.left - A.value.left, X = b.value <= 1 ? 1 : c.value.w / (b.value - 1);
      i.value = Math.min(b.value - 1, Math.max(0, Math.round(L / X)));
    }
    const Y = k(() => {
      if (i.value === null || b.value === 0)
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
    }), Z = k(() => {
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
      b.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(_, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: te,
          onMouseleave: N[0] || (N[0] = (L) => i.value = null)
        }, [
          l("defs", null, [
            (t(!0), a(_, null, V(z.value, (L, X) => (t(), a("linearGradient", {
              id: `pk-fill-${g(m)}-${X}`,
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
              }, null, 8, xm),
              l("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, ym)
            ], 8, bm))), 128))
          ]),
          e.showAxis ? (t(), a("g", km, [
            (t(!0), a(_, null, V(H.value, (L) => (t(), a("line", {
              key: L.y,
              x1: A.value.left,
              x2: s.value - A.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, $m))), 128)),
            (t(!0), a(_, null, V(H.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: A.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(L.value)), 9, wm))), 128)),
            n.value ? (t(!0), a(_, { key: 0 }, V(W.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - A.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(L.value)), 9, Cm))), 128)) : y("", !0)
          ])) : y("", !0),
          (t(!0), a(_, null, V(p.value, (L, X) => ue((t(), a("line", {
            key: `v-${X}`,
            x1: S(X),
            x2: S(X),
            y1: A.value.top,
            y2: A.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Sm)), [
            [Te, ae(X)]
          ])), 128)),
          (t(!0), a(_, null, V(z.value, (L, X) => (t(), a("g", {
            key: `s-${X}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${g(m)}-${X})`
            }, null, 8, Mm)) : y("", !0),
            l("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, Bm),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, Am)) : y("", !0)
          ]))), 128)),
          Y.value ? (t(), a("g", zm, [
            l("line", {
              x1: Y.value.x,
              x2: Y.value.x,
              y1: A.value.top,
              y2: A.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, _m),
            (t(!0), a(_, null, V(Y.value.rows, (L, X) => (t(), a("circle", {
              key: `d-${X}`,
              cx: Y.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Pm))), 128))
          ])) : y("", !0),
          (t(!0), a(_, null, V(p.value, (L, X) => ue((t(), a("text", {
            key: `x-${X}`,
            x: S(X),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, Om)), [
            [Te, ae(X)]
          ])), 128))
        ], 40, hm)),
        Y.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(Z.value)
        }, [
          l("p", jm, f(Y.value.label), 1),
          (t(!0), a(_, null, V(Y.value.rows, (L, X) => (t(), a("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Lm, f(L.name || "Value"), 1),
            l("span", Vm, f(C(L.value)), 1)
          ]))), 128))
        ], 4)) : y("", !0),
        e.showLegend && x.value.length > 1 ? (t(), a("div", Tm, [
          (t(!0), a(_, null, V(z.value, (L, X) => (t(), a("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Dm, f(L.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Im = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Fm = { class: "text-muted-foreground text-[11px] capitalize" }, Nm = { class: "text-sm font-semibold tabular-nums" }, Rm = {
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
    return (o, n) => (t(), a("div", Im, [
      l("p", Fm, f(e.label), 1),
      l("p", Nm, [
        U(f(e.value) + " ", 1),
        e.share ? (t(), a("span", Rm, " (" + f(e.share) + ") ", 1)) : y("", !0)
      ])
    ]));
  }
}), Um = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Hm = ["width", "height", "viewBox", "aria-label"], qm = ["d", "fill", "fill-opacity", "onMouseenter"], Km = ["x", "y"], Gm = ["x", "y"], Wm = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Zm = ["onMouseenter"], Jm = { class: "min-w-0 flex-1 truncate capitalize" }, Ym = { class: "tabular-nums font-medium" }, Xm = { class: "text-muted-foreground w-9 text-right tabular-nums" }, w5 = /* @__PURE__ */ O({
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
    ], r = k(() => o.data.reduce((h, v) => h + v.value, 0)), s = K(null), i = k(() => o.height), d = k(() => i.value / 2 - 4), u = k(() => o.type === "doughnut" ? d.value * 0.62 : 0);
    function m(h) {
      return n[h % n.length];
    }
    function x(h) {
      return 1 - Math.min(0.55, Math.floor(h / n.length) * 0.28);
    }
    const p = k(() => {
      if (r.value <= 0)
        return [];
      const h = i.value / 2;
      let v = -Math.PI / 2;
      return o.data.map((c, S) => {
        const M = c.value / r.value, z = M * Math.PI * 2, R = v, E = v + z;
        return v = E, {
          ...c,
          share: M,
          colour: m(S),
          opacity: x(S),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: M >= 0.9999 ? C(h) : A(h, R, E, d.value, u.value)
        };
      });
    });
    function b(h, v, c) {
      return `${(h + Math.cos(v) * c).toFixed(2)},${(h + Math.sin(v) * c).toFixed(2)}`;
    }
    function A(h, v, c, S, M) {
      const z = c - v > Math.PI ? 1 : 0;
      return M <= 0 ? `M${h},${h} L${b(h, v, S)} A${S},${S} 0 ${z} 1 ${b(h, c, S)} Z` : [
        `M${b(h, v, S)}`,
        `A${S},${S} 0 ${z} 1 ${b(h, c, S)}`,
        `L${b(h, c, M)}`,
        `A${M},${M} 0 ${z} 0 ${b(h, v, M)}`,
        "Z"
      ].join(" ");
    }
    function C(h) {
      const v = d.value, c = u.value, S = [
        `M${h - v},${h}`,
        `A${v},${v} 0 1 1 ${h + v},${h}`,
        `A${v},${v} 0 1 1 ${h - v},${h}`,
        "Z"
      ];
      return c <= 0 ? S.join(" ") : [
        ...S,
        `M${h - c},${h}`,
        `A${c},${c} 0 1 0 ${h + c},${h}`,
        `A${c},${c} 0 1 0 ${h - c},${h}`,
        "Z"
      ].join(" ");
    }
    const $ = (h) => o.format ? o.format(h) : new Intl.NumberFormat().format(h), w = (h) => `${(h * 100).toFixed(h < 0.01 ? 2 : 0)}%`;
    return (h, v) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Um, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
      }, [
        (t(!0), a(_, null, V(p.value, (c, S) => (t(), a("path", {
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
        }, null, 40, qm))), 128)),
        e.type === "doughnut" ? (t(), a(_, { key: 0 }, [
          l("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f($(s.value === null ? r.value : p.value[s.value].value)), 9, Km),
          l("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Gm)
        ], 64)) : y("", !0)
      ], 8, Hm)),
      l("ul", Wm, [
        (t(!0), a(_, null, V(p.value, (c, S) => (t(), a("li", {
          key: S,
          class: P(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === S ? "bg-muted" : ""]),
          onMouseenter: (M) => s.value = S,
          onMouseleave: v[1] || (v[1] = (M) => s.value = null)
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          l("span", Jm, f(c.label), 1),
          l("span", Ym, f($(c.value)), 1),
          l("span", Xm, f(w(c.share)), 1)
        ], 42, Zm))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(tt, {
        key: 0,
        label: p.value[s.value].label,
        value: $(p.value[s.value].value),
        share: w(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), Qm = ["width", "height", "viewBox", "aria-label"], ep = { class: "text-border" }, tp = ["x1", "x2", "y1", "y2", "stroke-dasharray"], ap = { class: "fill-muted-foreground text-[10px]" }, np = ["x", "y"], lp = ["x", "y"], op = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], sp = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, C5 = /* @__PURE__ */ O({
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
    const u = k(
      () => o.series?.length ? o.series : [{ name: "", points: o.data ?? [] }]
    ), m = (J, ae) => ae.color ?? n[J % n.length], x = k(() => u.value.flatMap((J) => J.points)), p = k(() => x.value.some((J) => typeof J.r == "number")), b = { top: 12, right: 16, bottom: 32, left: 48 }, A = k(() => Math.max(10, s.value - b.left - b.right)), C = k(() => Math.max(10, o.height - b.top - b.bottom));
    function $(J) {
      if (J.length === 0)
        return [0, 1];
      const ae = Math.min(...J), te = Math.max(...J), Y = te - ae || Math.abs(te) || 1;
      return [ae - Y * 0.08, te + Y * 0.08];
    }
    const w = k(() => $(x.value.map((J) => J.x))), h = k(() => $(x.value.map((J) => J.y))), v = (J) => {
      const [ae, te] = w.value;
      return b.left + (J - ae) / (te - ae) * A.value;
    }, c = (J) => {
      const [ae, te] = h.value;
      return b.top + C.value - (J - ae) / (te - ae) * C.value;
    }, S = k(() => Math.max(...x.value.map((J) => J.r ?? 0), 0));
    function M(J) {
      if (!p.value || !S.value)
        return 4;
      const ae = Math.max(0, J.r ?? 0) / S.value;
      return 3 + Math.sqrt(ae) * (o.maxRadius - 3);
    }
    function z([J, ae]) {
      return Array.from({ length: 5 }, (te, Y) => J + (ae - J) / 4 * Y);
    }
    const R = k(() => z(w.value)), E = k(() => z(h.value)), ee = (J) => o.formatX?.(J) ?? String(Math.round(J * 100) / 100), H = (J) => o.formatY?.(J) ?? String(Math.round(J * 100) / 100), W = k(() => {
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
        l("g", ep, [
          (t(!0), a(_, null, V(E.value, (te, Y) => (t(), a("line", {
            key: `gy-${Y}`,
            x1: b.left,
            x2: b.left + A.value,
            y1: c(te),
            y2: c(te),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Y === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, tp))), 128))
        ]),
        l("g", ap, [
          (t(!0), a(_, null, V(E.value, (te, Y) => (t(), a("text", {
            key: `ty-${Y}`,
            x: b.left - 8,
            y: c(te) + 3,
            "text-anchor": "end"
          }, f(H(te)), 9, np))), 128)),
          (t(!0), a(_, null, V(R.value, (te, Y) => (t(), a("text", {
            key: `tx-${Y}`,
            x: v(te),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ee(te)), 9, lp))), 128))
        ]),
        (t(!0), a(_, null, V(u.value, (te, Y) => (t(), a("g", {
          key: `s-${Y}`
        }, [
          (t(!0), a(_, null, V(te.points, (Z, B) => (t(), a("circle", {
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
          }, null, 40, op))), 128))
        ]))), 128))
      ], 8, Qm)),
      W.value ? (t(), T(tt, {
        key: 0,
        label: W.value.point.label ?? W.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(W.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(W.value.point.y)}`,
        share: p.value && W.value.point.r != null ? String(W.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : y("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", sp, [
        (t(!0), a(_, null, V(u.value, (te, Y) => (t(), a("span", {
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
}), rp = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, ip = ["width", "height", "viewBox"], dp = ["points"], up = ["x1", "y1", "x2", "y2"], cp = ["points", "fill", "stroke"], fp = ["cx", "cy", "fill", "onMouseenter"], mp = ["x", "y", "text-anchor"], pp = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, vp = { class: "truncate" }, S5 = /* @__PURE__ */ O({
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
    ], r = k(
      () => o.series.map((c, S) => ({
        ...c,
        color: c.color ?? n[S % n.length]
      }))
    ), s = k(() => r.value[0]?.points.map((c) => c.label) ?? []), i = k(() => s.value.length), d = k(() => o.height), u = k(() => d.value / 2), m = k(() => d.value / 2 - 34), x = k(() => {
      const c = Math.max(...r.value.flatMap((z) => z.points.map((R) => R.value)), 0);
      if (c <= 0)
        return 1;
      const S = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((z) => c <= z * S) ?? 10) * S;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function b(c, S) {
      const M = p(c);
      return {
        x: u.value + Math.cos(M) * m.value * S,
        y: u.value + Math.sin(M) * m.value * S
      };
    }
    function A(c) {
      return Array.from({ length: i.value }, (S, M) => {
        const z = b(M, c);
        return `${z.x.toFixed(2)},${z.y.toFixed(2)}`;
      }).join(" ");
    }
    const C = k(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: A(c) }))), $ = k(
      () => r.value.map((c) => {
        const S = c.points.map((M) => Math.max(0, M.value) / x.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: S.map((M, z) => {
            const R = b(z, M);
            return `${R.x.toFixed(2)},${R.y.toFixed(2)}`;
          }).join(" "),
          dots: S.map((M, z) => b(z, M))
        };
      })
    ), w = k(
      () => s.value.map((c, S) => {
        const M = p(S), z = u.value + Math.cos(M) * (m.value + 14), R = u.value + Math.sin(M) * (m.value + 14), E = Math.cos(M);
        return {
          label: c,
          x: z,
          y: R + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), h = K(null), v = (c) => o.format ? o.format(c) : new Intl.NumberFormat().format(c);
    return (c, S) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", rp, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(_, null, V(C.value, (M) => (t(), a("polygon", {
          key: M.f,
          points: M.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, dp))), 128)),
        (t(!0), a(_, null, V(s.value, (M, z) => (t(), a("line", {
          key: `spoke-${z}`,
          x1: u.value,
          y1: u.value,
          x2: b(z, 1).x,
          y2: b(z, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, up))), 128)),
        (t(!0), a(_, null, V($.value, (M, z) => (t(), a("g", {
          key: `s-${z}`
        }, [
          l("polygon", {
            points: M.outline,
            fill: M.color,
            "fill-opacity": "0.16",
            stroke: M.color,
            "stroke-width": "2"
          }, null, 8, cp),
          (t(!0), a(_, null, V(M.dots, (R, E) => (t(), a("circle", {
            key: E,
            cx: R.x,
            cy: R.y,
            r: "3",
            fill: M.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => h.value = {
              series: M.name,
              axis: s.value[E],
              value: M.values[E]?.value ?? 0
            },
            onMouseleave: S[0] || (S[0] = (ee) => h.value = null)
          }, null, 40, fp))), 128))
        ]))), 128)),
        (t(!0), a(_, null, V(w.value, (M, z) => (t(), a("text", {
          key: `l-${z}`,
          x: M.x,
          y: M.y,
          "text-anchor": M.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(M.label), 9, mp))), 128))
      ], 8, ip)),
      e.showLegend ? (t(), a("ul", pp, [
        (t(!0), a(_, null, V(r.value, (M, z) => (t(), a("li", {
          key: z,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: M.color })
          }, null, 4),
          l("span", vp, f(M.name), 1)
        ]))), 128))
      ])) : y("", !0),
      h.value ? (t(), T(tt, {
        key: 1,
        label: `${h.value.series} — ${h.value.axis}`,
        value: v(h.value.value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), gp = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, hp = ["width", "height", "viewBox"], bp = ["cx", "cy", "r"], xp = ["d", "fill", "fill-opacity", "onMouseenter"], yp = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, kp = { class: "min-w-0 flex-1 truncate capitalize" }, $p = { class: "font-medium tabular-nums" }, M5 = /* @__PURE__ */ O({
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
    ], r = K(null), s = k(() => o.height), i = k(() => s.value / 2), d = k(() => s.value / 2 - 6), u = k(() => Math.max(...o.data.map((A) => Math.max(0, A.value)), 0)), m = k(() => {
      const A = o.data.length;
      if (A === 0 || u.value <= 0)
        return [];
      const C = Math.PI * 2 / A;
      return o.data.map(($, w) => {
        const h = Math.sqrt(Math.max(0, $.value) / u.value), v = d.value * h, c = w * C - Math.PI / 2, S = c + C;
        return {
          ...$,
          color: n[w % n.length],
          share: u.value === 0 ? 0 : $.value / u.value,
          path: x(i.value, c, S, v)
        };
      });
    });
    function x(A, C, $, w) {
      if (w <= 0)
        return "";
      if ($ - C >= Math.PI * 2 - 1e-6)
        return `M${A - w},${A} A${w},${w} 0 1 1 ${A + w},${A} A${w},${w} 0 1 1 ${A - w},${A} Z`;
      const h = $ - C > Math.PI ? 1 : 0, v = A + Math.cos(C) * w, c = A + Math.sin(C) * w, S = A + Math.cos($) * w, M = A + Math.sin($) * w;
      return `M${A},${A} L${v.toFixed(2)},${c.toFixed(2)} A${w.toFixed(2)},${w.toFixed(2)} 0 ${h} 1 ${S.toFixed(2)},${M.toFixed(2)} Z`;
    }
    const p = k(() => [0.5, 0.75, 1].map((A) => d.value * A)), b = (A) => o.format ? o.format(A) : new Intl.NumberFormat().format(A);
    return (A, C) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", gp, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(_, null, V(p.value, ($) => (t(), a("circle", {
          key: $,
          cx: i.value,
          cy: i.value,
          r: $,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, bp))), 128)),
        (t(!0), a(_, null, V(m.value, ($, w) => (t(), a("path", {
          key: w,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === w ? 0.75 : 0.3,
          onMouseenter: (h) => r.value = w,
          onMouseleave: C[0] || (C[0] = (h) => r.value = null)
        }, null, 40, xp))), 128))
      ], 8, hp)),
      e.showLegend ? (t(), a("ul", yp, [
        (t(!0), a(_, null, V(m.value, ($, w) => (t(), a("li", {
          key: w,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: $.color })
          }, null, 4),
          l("span", kp, f($.label), 1),
          l("span", $p, f(b($.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      r.value !== null ? (t(), T(tt, {
        key: 1,
        label: m.value[r.value].label,
        value: b(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), wp = ["width", "height"], Cp = ["x1", "x2", "y1", "y2"], Sp = ["x", "y"], Mp = ["x", "y"], Bp = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Ap = ["x", "y", "width", "height", "fill", "fill-opacity"], zp = ["d", "stroke"], _p = ["cx", "cy", "fill"], Pp = ["x", "y"], Op = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, jp = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Lp = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Vp = { class: "text-xs font-semibold tabular-nums" }, Tp = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Dp = { class: "text-muted-foreground" }, B5 = /* @__PURE__ */ O({
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
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], m = k(
      () => o.bars.map((Y, Z) => ({
        ...Y,
        color: Y.color ?? d[Z % d.length]
      }))
    ), x = k(
      () => o.lines.map((Y, Z) => ({
        ...Y,
        color: Y.color ?? u[Z % u.length]
      }))
    ), p = k(
      () => m.value[0]?.points.map((Y) => Y.label) ?? x.value[0]?.points.map((Y) => Y.label) ?? []
    ), b = k(() => p.value.length), A = k(() => o.lineAxis === "right"), C = k(() => ({
      top: 12,
      right: A.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), $ = k(() => ({
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
    const h = k(
      () => w([
        ...m.value.flatMap((Y) => Y.points.map((Z) => Z.value)),
        ...A.value ? [] : x.value.flatMap((Y) => Y.points.map((Z) => Z.value))
      ])
    ), v = k(
      () => A.value ? w(x.value.flatMap((Y) => Y.points.map((Z) => Z.value))) : h.value
    ), c = k(() => $.value.w / Math.max(1, b.value)), S = k(() => c.value * 0.6), M = k(() => S.value / Math.max(1, m.value.length));
    function z(Y) {
      return C.value.left + Y * c.value + c.value / 2;
    }
    const R = k(
      () => m.value.flatMap(
        (Y, Z) => Y.points.map((B, N) => {
          const L = Math.max(0, B.value) / h.value * $.value.h;
          return {
            x: z(N) - S.value / 2 + Z * M.value,
            y: C.value.top + $.value.h - L,
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
    ), E = k(
      () => x.value.map((Y) => {
        const Z = Y.points.map((B, N) => ({
          x: z(N),
          y: C.value.top + $.value.h - Math.max(0, B.value) / v.value * $.value.h,
          value: B.value
        }));
        return {
          ...Y,
          pts: Z,
          d: Z.map((B, N) => `${N === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((Y) => ({
        y: C.value.top + $.value.h * Y,
        left: h.value * (1 - Y),
        right: v.value * (1 - Y)
      }))
    ), H = k(() => Math.max(1, Math.ceil(b.value / 10)));
    function W(Y) {
      return Y === b.value - 1 || Y % H.value === 0;
    }
    const J = (Y) => o.format ? o.format(Y) : ae(Y);
    function ae(Y) {
      return Math.abs(Y) >= 1e6 ? `${(Y / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(Y) >= 1e3 ? `${(Y / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(Y * 100) / 100);
    }
    const te = k(() => {
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
          ...x.value.map((Z) => ({
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
      b.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(_, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Z[0] || (Z[0] = (B) => s.value = null)
        }, [
          (t(!0), a(_, null, V(ee.value, (B) => (t(), a("line", {
            key: `g-${B.y}`,
            x1: C.value.left,
            x2: r.value - C.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Cp))), 128)),
          (t(!0), a(_, null, V(ee.value, (B) => (t(), a("text", {
            key: `lt-${B.y}`,
            x: C.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(B.left)), 9, Sp))), 128)),
          A.value ? (t(!0), a(_, { key: 0 }, V(ee.value, (B) => (t(), a("text", {
            key: `rt-${B.y}`,
            x: r.value - C.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(B.right)), 9, Mp))), 128)) : y("", !0),
          (t(!0), a(_, null, V(p.value, (B, N) => (t(), a("rect", {
            key: `hit-${N}`,
            x: C.value.left + N * c.value,
            y: C.value.top,
            width: c.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === N ? 0.4 : 0,
            onMouseenter: (L) => s.value = N
          }, null, 40, Bp))), 128)),
          (t(!0), a(_, null, V(R.value, (B, N) => (t(), a("rect", {
            key: `b-${N}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Ap))), 128)),
          (t(!0), a(_, null, V(E.value, (B, N) => (t(), a("g", {
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
            }, null, 8, zp),
            s.value !== null && B.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, _p)) : y("", !0)
          ]))), 128)),
          (t(!0), a(_, null, V(p.value, (B, N) => ue((t(), a("text", {
            key: `x-${N}`,
            x: z(N),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(B), 9, Pp)), [
            [Te, W(N)]
          ])), 128))
        ], 40, wp)),
        te.value ? (t(), a("div", Op, [
          l("p", jp, f(te.value.label), 1),
          (t(!0), a(_, null, V(te.value.rows, (B, N) => (t(), a("div", {
            key: N,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            l("span", Lp, f(B.name), 1),
            l("span", Vp, f(J(B.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend ? (t(), a("div", Tp, [
          (t(!0), a(_, null, V([...m.value, ...x.value], (B, N) => (t(), a("span", {
            key: N,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            l("span", Dp, f(B.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Ep = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Ip = { class: "text-muted-foreground" }, Fp = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Np = ["width", "height"], Rp = ["x", "y"], Up = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Hp = ["x", "y"], qp = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Kp = { class: "text-[11px] font-medium capitalize" }, Gp = { class: "text-muted-foreground text-[11px] capitalize" }, Wp = { class: "text-sm font-semibold tabular-nums" }, Zp = { class: "text-muted-foreground text-xs font-normal" }, A5 = /* @__PURE__ */ O({
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
    const d = k(() => o.series[0]?.points.map((S) => S.label) ?? []), u = k(() => o.series.length), m = k(() => d.value.length), x = k(() => Math.min(140, Math.max(60, r.value * 0.16))), p = k(() => Math.max(1, r.value - x.value - 8)), b = k(() => p.value / Math.max(1, m.value)), A = k(() => Math.max(1, (o.height - 8) / Math.max(1, u.value)));
    function C(S) {
      if (S === 0)
        return "var(--muted)";
      const M = Math.max(1, o.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(S / M * 100)}%, var(--muted))`;
    }
    function $(S) {
      for (let M = 0; M < o.buckets.length; M++) {
        const z = o.buckets[M].max;
        if (z === void 0 || S < z)
          return M;
      }
      return o.buckets.length - 1;
    }
    const w = k(
      () => o.series.flatMap(
        (S, M) => S.points.map((z, R) => {
          const E = $(z.value);
          return {
            row: M,
            col: R,
            x: x.value + R * b.value,
            y: 4 + M * A.value,
            w: Math.max(1, b.value - 1),
            h: Math.max(1, A.value - 4),
            colour: C(E),
            label: z.label,
            value: z.value,
            rowName: S.name,
            bucketLabel: o.buckets[E].label
          };
        })
      )
    ), h = k(() => b.value < 2), v = k(() => s.value ? w.value.find((S) => S.row === s.value.row && S.col === s.value.col) ?? null : null), c = (S) => o.format ? o.format(S) : new Intl.NumberFormat().format(S);
    return (S, M) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      u.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(_, { key: 1 }, [
        l("div", Ep, [
          (t(!0), a(_, null, V(e.buckets, (z, R) => (t(), a("span", {
            key: R,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            l("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: C(R) })
            }, null, 4),
            l("span", Ip, f(z.label), 1)
          ]))), 128))
        ]),
        h.value ? (t(), a("p", Fp, f(m.value) + " columns - too many to label individually ", 1)) : y("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: M[0] || (M[0] = (z) => s.value = null)
        }, [
          (t(!0), a(_, null, V(e.series, (z, R) => (t(), a("text", {
            key: `r-${R}`,
            x: x.value - 10,
            y: 4 + R * A.value + A.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(z.name), 9, Rp))), 128)),
          (t(!0), a(_, null, V(w.value, (z, R) => (t(), a("rect", {
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
          }, null, 40, Up))), 128)),
          e.showColumnLabels && !h.value ? (t(!0), a(_, { key: 0 }, V(d.value, (z, R) => (t(), a("text", {
            key: `c-${R}`,
            x: x.value + R * b.value + b.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(z), 9, Hp))), 128)) : y("", !0)
        ], 40, Np)),
        v.value ? (t(), a("div", qp, [
          l("p", Kp, f(v.value.label), 1),
          l("p", Gp, f(v.value.rowName), 1),
          l("p", Wp, [
            U(f(c(v.value.value)) + " ", 1),
            l("span", Zp, "(" + f(v.value.bucketLabel) + ")", 1)
          ])
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Jp = ["viewBox"], Yp = { key: 0 }, Xp = ["id"], Qp = ["stop-color"], ev = ["stop-color"], tv = ["d", "fill"], av = ["d", "stroke"], Xt = 100, Ke = 30, ut = /* @__PURE__ */ O({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = Math.random().toString(36).slice(2, 9), r = k(() => {
      const u = o.data.map((b) => b.value);
      if (u.length < 2)
        return [];
      const m = Math.min(...u), p = Math.max(...u) - m || 1;
      return u.map((b, A) => ({
        x: A / (u.length - 1) * Xt,
        y: Ke - (b - m) / p * (Ke - 4) - 2
      }));
    });
    function s(u) {
      const m = u.length;
      if (m < 2)
        return "";
      const x = [], p = [];
      for (let C = 0; C < m - 1; C++)
        x[C] = u[C + 1].x - u[C].x, p[C] = x[C] === 0 ? 0 : (u[C + 1].y - u[C].y) / x[C];
      const b = [p[0]];
      for (let C = 1; C < m - 1; C++)
        if (p[C - 1] * p[C] <= 0)
          b[C] = 0;
        else {
          const $ = 2 * x[C] + x[C - 1], w = x[C] + 2 * x[C - 1];
          b[C] = ($ + w) / ($ / p[C - 1] + w / p[C]);
        }
      b[m - 1] = p[m - 2];
      let A = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let C = 0; C < m - 1; C++) {
        const $ = x[C] / 3;
        A += ` C${(u[C].x + $).toFixed(2)},${(u[C].y + b[C] * $).toFixed(2)} ${(u[C + 1].x - $).toFixed(2)},${(u[C + 1].y - b[C + 1] * $).toFixed(2)} ${u[C + 1].x.toFixed(2)},${u[C + 1].y.toFixed(2)}`;
      }
      return A;
    }
    const i = k(() => {
      const u = r.value;
      return u.length < 2 ? "" : o.smooth ? s(u) : u.map((m, x) => `${x === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), d = k(() => {
      const u = r.value;
      return !o.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${Ke} L${u[0].x.toFixed(2)},${Ke} Z`;
    });
    return (u, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Xt} ${Ke}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Yp, [
        l("linearGradient", {
          id: `pk-spark-${g(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          l("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Qp),
          l("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, ev)
        ], 8, Xp)
      ])) : y("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${g(n)})`
      }, null, 8, tv)) : y("", !0),
      l("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, av)
    ], 12, Jp)) : y("", !0);
  }
}), nv = { class: "flex items-center gap-1 text-xs" }, lv = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, ov = {
  key: 0,
  class: "text-muted-foreground truncate"
}, wa = /* @__PURE__ */ O({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, n = k(() => o.direction === "flat" ? null : o.direction === "new" ? !o.inverted : o.inverted ? o.direction === "down" : o.direction === "up"), r = k(
      () => n.value === null ? "text-muted-foreground" : n.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = k(
      () => o.direction === "flat" ? "→" : o.direction === "down" ? "▼" : "▲"
    ), i = k(() => o.direction === "new" ? "New" : o.percentage === null ? "-" : `${Math.abs(o.percentage)}%`);
    return (d, u) => (t(), a("span", nv, [
      l("span", {
        class: P(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        l("span", lv, f(s.value), 1),
        U(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", ov, f(e.comparison), 1)) : y("", !0)
    ]));
  }
}), sv = ["data-collapsed"], rv = { class: "flex flex-wrap items-start justify-between gap-2" }, iv = { class: "flex min-w-0 items-start gap-2" }, dv = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, uv = ["d"], cv = { class: "min-w-0" }, fv = { class: "text-sm font-medium" }, mv = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, pv = { class: "flex shrink-0 items-center gap-1.5" }, vv = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, gv = ["aria-pressed", "onClick"], hv = ["aria-expanded", "aria-label", "title"], bv = ["aria-label"], xv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yv = ["d"], kv = /* @__PURE__ */ O({
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
    const o = e, n = ea(), r = K(o.defaultCollapsed), s = k(() => !!o.icon && !n.icon), i = k(() => {
      if (!(o.fitBody && !o.loading && !o.error))
        return { minHeight: `${o.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: P(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      l("div", rv, [
        l("div", iv, [
          q(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", dv, [
              l("path", {
                d: g(ie)(e.icon)
              }, null, 8, uv)
            ])) : y("", !0)
          ]),
          l("div", cv, [
            l("p", fv, f(e.label), 1),
            e.description ? (t(), a("p", mv, f(e.description), 1)) : y("", !0),
            q(d.$slots, "trend")
          ])
        ]),
        l("div", pv, [
          q(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", vv, [
            (t(!0), a(_, null, V(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: P([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (x) => d.$emit("update:period", m.value)
            }, f(m.label), 11, gv))), 128))
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
              class: P(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, hv)) : y("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (m) => d.$emit("hide"))
          }, [
            (t(), a("svg", xv, [
              l("path", {
                d: g(ie)("eye-off")
              }, null, 8, yv)
            ]))
          ], 8, bv)) : y("", !0)
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
    ], 10, sv));
  }
}), $v = ["aria-pressed", "aria-label", "title"], wv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Cv = ["d"], Sv = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Mv = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Bv = ["href"], Av = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zv = ["d"], _v = ["aria-label", "onClick"], Pv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ov = ["d"], jv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lv = ["d"], Vv = {
  key: 0,
  class: "flex flex-col gap-1"
}, Tv = ["onClick"], Dv = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ev = ["d"], Iv = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Fv = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!1), i = K(!1), d = k(
      () => n.catalog.filter((x) => !n.items.some((p) => p.id === x.id))
    );
    function u(x) {
      r(
        "update:items",
        n.items.filter((p) => p.id !== x)
      );
    }
    function m(x) {
      r("update:items", [...n.items, x]), i.value = !1;
    }
    return (x, p) => (t(), a(_, null, [
      I(kv, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (b) => r("hide"))
      }, {
        actions: j(() => [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (b) => s.value = !s.value)
          }, [
            (t(), a("svg", wv, [
              l("path", {
                d: g(ie)(s.value ? "check" : "pencil")
              }, null, 8, Cv)
            ]))
          ], 8, $v)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), a("div", Sv, [
            p[7] || (p[7] = l("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (b) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                U("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", Mv, [
            (t(!0), a(_, null, V(e.items, (b) => (t(), a("div", {
              key: b.id,
              class: "inline-flex items-center gap-1"
            }, [
              l("a", {
                href: b.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", Av, [
                  l("path", {
                    d: g(ie)(b.icon)
                  }, null, 8, zv)
                ])),
                U(" " + f(b.label), 1)
              ], 8, Bv),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${b.label}`,
                onClick: (A) => u(b.id)
              }, [
                (t(), a("svg", Pv, [
                  l("path", {
                    d: g(ie)("x")
                  }, null, 8, Ov)
                ]))
              ], 8, _v)) : y("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (b) => i.value = !0)
            }, [
              (t(), a("svg", jv, [
                l("path", {
                  d: g(ie)("plus")
                }, null, 8, Lv)
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
        onClose: p[5] || (p[5] = (b) => i.value = !1)
      }, {
        footer: j(() => [
          I(se, {
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
          d.value.length ? (t(), a("ul", Vv, [
            (t(!0), a(_, null, V(d.value, (b) => (t(), a("li", {
              key: b.id
            }, [
              l("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (A) => m(b)
              }, [
                (t(), a("svg", Dv, [
                  l("path", {
                    d: g(ie)(b.icon)
                  }, null, 8, Ev)
                ])),
                U(" " + f(b.label), 1)
              ], 8, Tv)
            ]))), 128))
          ])) : (t(), a("p", Iv, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Nv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Rv = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Uv = { class: "relative w-full max-w-xl" }, Hv = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qv = ["d"], Kv = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Gv = ["data-slot"], Wv = { class: "px-5 py-4" }, Zv = { class: "mb-3 text-sm font-semibold" }, Jv = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Yv = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xv = ["d"], Qv = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, z5 = /* @__PURE__ */ O({
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
    const o = e, n = K(""), r = k(() => {
      const u = o.linkComponent;
      return typeof u == "string" ? u : ta(u);
    }), s = Ge({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = k(() => {
      const u = n.value.trim().toLowerCase();
      return o.sections.map((m) => ({
        ...m,
        links: u ? m.links.filter((x) => x.label.toLowerCase().includes(u)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (u, m) => (t(), a("div", {
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : g(De)])
    }, [
      l("header", null, [
        l("h1", Nv, f(e.title), 1),
        e.description ? (t(), a("p", Rv, f(e.description), 1)) : y("", !0)
      ]),
      l("div", Uv, [
        (t(), a("svg", Hv, [
          l("path", {
            d: g(ie)("search")
          }, null, 8, qv)
        ])),
        I(ge, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (x) => n.value = x),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), a("div", Kv, [
        (t(!0), a(_, null, V(d.value, (x) => (t(), a("section", {
          key: x.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${x.key}`
        }, [
          l("div", Wv, [
            l("h2", Zv, f(x.title), 1),
            l("div", Jv, [
              (t(!0), a(_, null, V(x.links, (p) => (t(), T(xe(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: P(g(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), a("svg", Yv, [
                    l("path", {
                      d: g(ie)(p.icon)
                    }, null, 8, Xv)
                  ])),
                  U(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Gv))), 128))
      ])) : (t(), a("p", Qv, ' Nothing matches "' + f(n.value) + '". ', 1))
    ], 2));
  }
}), eg = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, tg = { class: "flex flex-1 flex-col gap-1 p-4" }, ag = { class: "text-muted-foreground relative text-xs font-medium" }, ng = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, lg = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, og = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, sg = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, _5 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), a("div", eg, [
      l("div", tg, [
        l("p", ag, f(e.label), 1),
        e.loading ? (t(), T($e, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", ng, " Could not load ")) : (t(), a("span", lg, f(o(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(wa, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", og, f(e.description), 1)) : y("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", sg, [
        I(ut, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : y("", !0)
    ]));
  }
}), rg = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, ig = { class: "flex flex-col gap-1 p-4" }, dg = { class: "flex items-start justify-between gap-2" }, ug = { class: "text-sm font-medium" }, cg = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, fg = { class: "mt-1 flex flex-wrap items-center gap-2" }, mg = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, pg = {
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
    const o = e, n = k(() => o.delta === null || o.delta === 0 ? null : o.inverted ? o.delta < 0 : o.delta > 0), r = k(
      () => n.value === null ? "bg-muted text-muted-foreground" : n.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = k(
      () => typeof o.value == "number" ? new Intl.NumberFormat().format(o.value) : o.value
    );
    return (i, d) => (t(), a("div", rg, [
      l("div", ig, [
        l("div", dg, [
          l("p", ug, f(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", cg, f(e.caption), 1)) : y("", !0),
        l("div", fg, [
          e.loading ? (t(), T($e, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", mg, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: P(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : y("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", pg, [
        I(ut, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : y("", !0)
    ]));
  }
}), vg = { class: "relative flex flex-col gap-2" }, gg = ["aria-label"], hg = ["onMouseenter"], bg = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, xg = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, yg = { class: "truncate" }, kg = { class: "text-sm font-semibold tabular-nums" }, P5 = /* @__PURE__ */ O({
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
    ], r = k(() => o.segments.reduce((x, p) => x + Math.max(0, p.value), 0)), s = k(() => Math.max(o.total ?? r.value, r.value, 1)), i = k(
      () => o.segments.map((x, p) => {
        const b = Math.max(0, x.value) / s.value;
        return {
          ...x,
          color: x.color ?? n[p % n.length],
          share: b,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: x.value > 0 ? `max(2px, ${(b * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (x) => o.format ? o.format(x) : new Intl.NumberFormat().format(x), u = K(null), m = (x) => `${(x * 100).toFixed(x > 0 && x < 0.01 ? 1 : 0)}%`;
    return (x, p) => (t(), a("div", vg, [
      l("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((b) => `${b.label} ${d(b.value)}`).join(", ")
      }, [
        (t(!0), a(_, null, V(i.value, (b, A) => (t(), a("span", {
          key: A,
          class: P(["h-full transition-all", [
            A === 0 ? "rounded-l-full" : "",
            A === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: b.width,
            background: b.color,
            opacity: u.value === null || u.value === A ? 1 : 0.4
          }),
          onMouseenter: (C) => u.value = A,
          onMouseleave: p[0] || (p[0] = (C) => u.value = null)
        }, null, 46, hg))), 128))
      ], 12, gg),
      e.showLegend ? (t(), a("div", bg, [
        (t(!0), a(_, null, V(i.value, (b, A) => (t(), a("div", {
          key: A,
          class: "flex min-w-0 flex-col"
        }, [
          l("span", xg, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: b.color })
            }, null, 4),
            l("span", yg, f(b.label), 1)
          ]),
          l("span", kg, f(d(b.value)), 1)
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
}), $g = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, wg = ["data-heading"], Cg = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Sg = { class: "text-muted-foreground truncate" }, Mg = ["aria-label"], O5 = /* @__PURE__ */ O({
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
    }, s = k(
      () => o.rows.map((i) => {
        if (!i.bar || i.bar.segments.length === 0)
          return { ...i, segments: [] };
        const d = i.bar.segments.reduce((m, x) => m + Math.max(0, x.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
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
    return (i, d) => (t(), a("div", $g, [
      (t(!0), a(_, null, V(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: P(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), a("div", Cg, [
          l("span", Sg, f(u.label), 1),
          l("span", {
            class: P(["shrink-0 font-medium tabular-nums", u.tone ? n[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(_, null, V(u.segments, (m, x) => (t(), a("span", {
            key: x,
            class: P(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ne({ width: m.width })
          }, null, 6))), 128))
        ], 8, Mg)) : y("", !0)
      ], 8, wg))), 128))
    ]));
  }
}), Bg = {
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
}, Ag = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function zg(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function _g(e, o) {
  return o || (e ? Bg[zg(e)] ?? "neutral" : "neutral");
}
function Pg(e, o) {
  return Ag[_g(e, o)];
}
const he = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const o = e, n = k(() => Pg(o.status, o.tone));
    return (r, s) => (t(), T(We, {
      variant: n.value,
      class: P(o.class)
    }, {
      default: j(() => [
        q(r.$slots, "default", {}, () => [
          U(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Og = ["data-layout"], jg = ["src", "alt"], Lg = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Vg = ["src"], Tg = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Dg = ["onMouseenter"], Eg = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Ig = { class: "min-w-0" }, Fg = { class: "truncate text-sm font-medium" }, Ng = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Rg = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Ug = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Hg = { class: "min-w-0" }, qg = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Kg = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Gg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wg = ["d"], Zg = ["aria-label"], Jg = /* @__PURE__ */ O({
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
      const h = w.trim();
      return h === "" ? null : /^(https?:)?\/\//i.test(h) ? h : null;
    }
    const u = k(() => {
      const w = [r.item.image, ...r.item.images ?? []].map(d).filter((h) => h !== null);
      return [...new Set(w)];
    }), m = k(() => u.value[i.value] ?? u.value[0] ?? null), x = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("")
    ), p = k(() => {
      const w = r.item.progress;
      if (!w)
        return null;
      const h = Math.max(w.total ?? 100, w.value, 1);
      return `${Math.min(100, Math.max(0, w.value / h * 100)).toFixed(2)}%`;
    }), b = k(() => u.value.length > 1 ? u.value[1] : null), A = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), C = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function $(w) {
      w.stopPropagation(), s("cart", r.item.key);
    }
    return (w, h) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: P(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: h[0] || (h[0] = (v) => s("select", e.item.key)),
      onKeydown: h[1] || (h[1] = La(me((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: h[2] || (h[2] = (v) => i.value = 0)
    }, [
      l("div", {
        class: P([
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
        }, null, 8, jg)) : (t(), a("span", Lg, f(x.value), 1)),
        e.layout === "grid" && b.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: b.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Vg)) : y("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", Tg, [
          (t(!0), a(_, null, V(u.value, (v, c) => (t(), a("span", {
            key: c,
            class: P(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (S) => i.value = c
          }, null, 42, Dg))), 128))
        ])) : y("", !0)
      ], 2),
      l("div", {
        class: P(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        l("div", Eg, [
          l("div", Ig, [
            l("p", Fg, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", Ng, f(e.item.caption), 1)) : y("", !0),
            e.item.facts?.length ? (t(), a("p", Rg, f(e.item.facts.join(" · ")), 1)) : y("", !0)
          ]),
          e.item.status ? (t(), T(he, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : y("", !0)
        ]),
        l("div", Ug, [
          l("div", Hg, [
            e.item.price ? (t(), a("p", qg, f(e.item.price), 1)) : y("", !0),
            C.value ? (t(), a("p", Kg, f(C.value), 1)) : y("", !0)
          ]),
          A.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), a("svg", Gg, [
              l("path", {
                d: g(ie)("cart")
              }, null, 8, Wg)
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
            class: P(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, Zg)) : y("", !0)
      ], 2)
    ], 42, Og));
  }
});
function Yg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Xg(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Qg(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const eh = ["data-featured", "data-recommended"], th = { class: "flex flex-col gap-1" }, ah = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, nh = { key: 0 }, lh = { key: 1 }, oh = { key: 2 }, sh = { key: 3 }, rh = { class: "text-sm font-semibold" }, ih = { class: "flex items-baseline gap-1" }, dh = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, uh = { class: "text-muted-foreground text-sm" }, ch = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, fh = { class: "text-muted-foreground mt-1 text-xs" }, mh = { class: "flex flex-1 flex-col gap-2 text-sm" }, ph = { class: "flex min-w-0 items-start gap-2" }, vh = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, gh = ["d"], hh = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, bh = ["d"], xh = { class: "capitalize" }, yh = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, kh = { class: "text-foreground font-medium" }, $h = { class: "mt-auto flex gap-2 pt-2" }, wh = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = k(
      () => n.plan.priceFormatted ?? String(n.plan.price)
    ), i = k(
      () => !!(n.plan.featured || n.plan.recommended)
    ), d = k(() => {
      const m = n.plan.perks ?? {};
      return Object.entries(m).map(([x, p]) => ({
        key: x,
        label: x.replace(/_/g, " "),
        granted: Qg(p.value),
        display: Xg(p.value)
      }));
    }), u = k(() => n.plan.extraPerks ?? []);
    return (m, x) => (t(), a("article", {
      class: P(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      l("header", th, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", ah, [
          e.plan.recommended ? (t(), a("span", nh, "Recommended")) : e.plan.featured ? (t(), a("span", lh, "Featured")) : y("", !0),
          e.plan.trial ? (t(), a("span", oh, "Trial")) : y("", !0),
          e.plan.active === !1 ? (t(), a("span", sh, "Inactive")) : y("", !0)
        ])) : y("", !0),
        l("h3", rh, f(e.plan.name), 1),
        l("p", ih, [
          l("span", dh, f(s.value), 1),
          l("span", uh, f(g(Yg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", ch, f(e.plan.shortDescription), 1)) : y("", !0),
        l("p", fh, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      l("ul", mh, [
        (t(!0), a(_, null, V(d.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          l("span", ph, [
            l("span", {
              class: P(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", vh, [
                l("path", {
                  d: g(ie)("check")
                }, null, 8, gh)
              ])) : (t(), a("svg", hh, [
                l("path", {
                  d: g(ie)("x")
                }, null, 8, bh)
              ]))
            ], 2),
            l("span", xh, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", yh, f(p.display), 1)) : y("", !0)
        ]))), 128)),
        (t(!0), a(_, null, V(u.value, (p, b) => (t(), a("li", {
          key: `extra-${b}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          l("span", null, f(p.key), 1),
          l("span", kh, f(p.value), 1)
        ]))), 128))
      ]),
      l("footer", $h, [
        I(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: x[0] || (x[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...x[2] || (x[2] = [
            U(" Edit ", -1)
          ])]),
          _: 1
        }),
        I(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: x[1] || (x[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...x[3] || (x[3] = [
            U(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, eh));
  }
}), Ch = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Sh = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Mh = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Bh = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Ah = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, j5 = /* @__PURE__ */ O({
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
      class: P(["w-full space-y-6", e.embedded ? "" : g(De)]),
      "data-slot": "plan-grid"
    }, [
      l("header", Ch, [
        l("div", null, [
          e.title ? (t(), a("h1", Sh, f(e.title), 1)) : y("", !0),
          e.description ? (t(), a("p", Mh, f(e.description), 1)) : y("", !0)
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
      e.plans.length === 0 ? (t(), a("p", Bh, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", Ah, [
        (t(!0), a(_, null, V(e.plans, (i) => (t(), T(wh, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), zh = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, _h = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Ph = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Oh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, jh = { class: "space-y-1.5" }, Lh = { class: "space-y-1.5" }, Vh = { class: "space-y-1.5" }, Th = { class: "space-y-1.5" }, Dh = { class: "space-y-1.5" }, Eh = { class: "flex items-center gap-3 text-sm" }, Ih = { class: "flex items-center gap-3 text-sm" }, Fh = { class: "flex items-center gap-3 text-sm" }, Nh = {
  key: 0,
  class: "space-y-1.5"
}, Rh = { class: "flex items-center gap-3 text-sm" }, Uh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Hh = { class: "space-y-1.5" }, qh = ["value"], Kh = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Gh = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Wh = ["id", "value", "onInput"], Zh = { class: "space-y-2" }, Jh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Yh = ["d"], Xh = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ht = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", L5 = /* @__PURE__ */ O({
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
    function d(h, v) {
      const c = i.perks?.[h]?.value;
      return c ?? v;
    }
    function u(h, v, c) {
      const S = i.perks?.[h];
      i.perks = {
        ...i.perks ?? {},
        [h]: {
          value: v,
          overview: c ?? S?.overview ?? ""
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
    function x(h) {
      const v = h ? { ...n(), ...h } : n();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    x(r.plan), ce(
      () => r.plan,
      (h) => x(h),
      { deep: !0 }
    );
    const p = k({
      get: () => {
        const h = d("modules", []);
        return Array.isArray(h) ? h.map(String) : [];
      },
      set: (h) => {
        u("modules", A(h.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), b = k(
      () => r.modules.map((h) => ({ value: h.key, label: h.label }))
    );
    function A(h) {
      const v = Object.fromEntries(r.modules.map((M) => [M.key, M])), c = new Set(h);
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
    function $(h) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== h);
    }
    function w() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((h) => h.key.trim() !== "")
      });
    }
    return (h, v) => (t(), a("form", {
      class: P(["w-full space-y-6", e.embedded ? "" : g(De)]),
      "data-slot": "plan-editor",
      onSubmit: me(w, ["prevent"])
    }, [
      l("header", zh, [
        l("div", null, [
          l("h1", _h, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
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
      l("div", Ph, [
        l("section", Oh, [
          v[26] || (v[26] = l("h2", { class: "font-semibold" }, "Plan details", -1)),
          l("div", jh, [
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
          l("div", Lh, [
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
          l("div", Vh, [
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
              class: P(ht)
            }, null, 512), [
              [ye, i.description]
            ])
          ]),
          l("div", Th, [
            I(ke, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            ue(l("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: P(Xh)
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
          l("div", Dh, [
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
          l("label", Eh, [
            I(g(Fe), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = U(" Featured ", -1))
          ]),
          l("label", Ih, [
            I(g(Fe), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = U(" Recommended ", -1))
          ]),
          l("label", Fh, [
            I(g(Fe), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Nh, [
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
          l("label", Rh, [
            I(g(Fe), {
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
        l("section", Uh, [
          v[33] || (v[33] = l("h2", { class: "font-semibold" }, "Plan perks", -1)),
          l("div", Hh, [
            I(ke, null, {
              default: j(() => [...v[27] || (v[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            I(Lt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (c) => p.value = c),
              options: b.value,
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
              class: P(ht),
              onInput: v[12] || (v[12] = (c) => m(
                "modules",
                c.target.value
              ))
            }, null, 40, qh)
          ]),
          (t(!0), a(_, null, V(e.limits, (c) => (t(), a("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), a("label", Kh, [
              I(g(Fe), {
                checked: !!d(c.key, !1),
                "onUpdate:checked": (S) => u(
                  c.key,
                  S,
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              U(" " + f(c.label), 1)
            ])) : (t(), a(_, { key: 1 }, [
              I(ke, {
                for: `plan-limit-${c.key}`
              }, {
                default: j(() => [
                  U(f(c.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              c.hint ? (t(), a("p", Gh, f(c.hint), 1)) : y("", !0),
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
              class: P(ht),
              onInput: (S) => m(
                c.key,
                S.target.value
              )
            }, null, 40, Wh)
          ]))), 128)),
          l("div", Zh, [
            v[32] || (v[32] = l("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(_, null, V(i.extraPerks ?? [], (c, S) => (t(), a("div", {
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
                onClick: (M) => $(S)
              }, {
                default: j(() => [
                  (t(), a("svg", Jh, [
                    l("path", {
                      d: g(ie)("x")
                    }, null, 8, Yh)
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
}), Qh = { class: "flex flex-col gap-4" }, e1 = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, t1 = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, a1 = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, n1 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, l1 = ["d"], o1 = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, s1 = ["aria-pressed"], r1 = ["aria-pressed"], i1 = {
  key: 0,
  class: "flex flex-col gap-2"
}, d1 = ["aria-label"], u1 = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, c1 = ["aria-pressed", "onClick"], f1 = ["aria-label"], m1 = { class: "text-muted-foreground mr-1 text-xs font-medium" }, p1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, v1 = ["data-slot"], g1 = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, h1 = { class: "text-muted-foreground text-xs tabular-nums" }, b1 = { class: "flex items-center gap-2" }, x1 = ["disabled"], y1 = ["disabled"], Ft = /* @__PURE__ */ O({
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
    ce(s, () => b());
    function m(E) {
      const ee = E.trim();
      if (ee === "")
        return null;
      const H = Number(ee);
      return Number.isFinite(H) ? H : null;
    }
    function x() {
      const E = {};
      for (const [ee, H] of Object.entries(u))
        E[ee] = { min: m(H.min), max: m(H.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: x() };
    }
    function b() {
      r("filter", p());
    }
    function A(E, ee) {
      d[E] = d[E] === ee ? null : ee, b();
    }
    function C(E) {
      return u[E] ?? { min: "", max: "" };
    }
    function $(E, ee, H) {
      const W = u[E] ?? { min: "", max: "" };
      u[E] = { ...W, [ee]: H }, b();
    }
    function w(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const h = k(() => n.facets.filter((E) => (E.kind ?? "chips") === "chips")), v = k(() => n.facets.filter((E) => E.kind === "range")), c = k(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), S = K(1);
    ce(
      () => n.items.map((E) => E.key).join(","),
      () => {
        S.value = 1;
      }
    );
    const M = k(() => {
      const E = n.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / E));
    }), z = k(() => {
      const E = n.pageSize;
      if (!E || E < 1)
        return n.items;
      const ee = (S.value - 1) * E;
      return n.items.slice(ee, ee + E);
    });
    function R(E) {
      S.value = Math.min(M.value, Math.max(1, E));
    }
    return (E, ee) => (t(), a("div", Qh, [
      c.value ? (t(), a("div", e1, [
        l("div", t1, [
          e.searchable ? (t(), a("div", a1, [
            (t(), a("svg", n1, [
              l("path", {
                d: g(ie)("search")
              }, null, 8, l1)
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
          e.layoutToggle ? (t(), a("div", o1, [
            l("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, s1),
            l("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, r1)
          ])) : y("", !0)
        ]),
        h.value.length || v.value.length ? (t(), a("div", i1, [
          (t(!0), a(_, null, V(h.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", u1, f(H.label), 1)) : y("", !0),
            (t(!0), a(_, null, V(H.options ?? [], (W) => (t(), a("button", {
              key: W.value,
              type: "button",
              class: P([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === W.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === W.value ? "true" : "false",
              onClick: (J) => A(H.key, W.value)
            }, f(W.label), 11, c1))), 128))
          ], 8, d1))), 128)),
          (t(!0), a(_, null, V(v.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            l("span", m1, f(H.label ?? H.key), 1),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": C(H.key).min,
              "onUpdate:modelValue": (W) => $(H.key, "min", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": C(H.key).max,
              "onUpdate:modelValue": (W) => $(H.key, "max", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, f1))), 128))
        ])) : y("", !0)
      ])) : y("", !0),
      e.items.length === 0 ? (t(), a("p", p1, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: P(
          i.value === "list" ? "flex flex-col gap-3" : g(eu)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(_, null, V(z.value, (H) => (t(), T(Jg, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (W) => r("select", W)),
          onCart: ee[4] || (ee[4] = (W) => r("cart", W))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, v1)),
      e.pageSize && M.value > 1 ? (t(), a("div", g1, [
        l("p", h1, " Page " + f(S.value) + " of " + f(M.value), 1),
        l("div", b1, [
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => R(S.value - 1))
          }, " Previous ", 8, x1),
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value >= M.value,
            onClick: ee[6] || (ee[6] = (H) => R(S.value + 1))
          }, " Next ", 8, y1)
        ])
      ])) : y("", !0)
    ]));
  }
}), k1 = ["aria-label"], $1 = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, w1 = { class: "min-w-0" }, C1 = { class: "text-base font-semibold" }, S1 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, M1 = { class: "flex shrink-0 items-center gap-2" }, B1 = { class: "min-h-0 flex-1 overflow-y-auto" }, A1 = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Nt = /* @__PURE__ */ O({
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
      const x = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (x.length === 0)
        return;
      const p = x[0], b = x[x.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), b.focus()) : !m.shiftKey && document.activeElement === b && (m.preventDefault(), p.focus());
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
    }), (m, x) => (t(), T(Ue, { to: "body" }, [
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
            onClick: x[0] || (x[0] = (p) => r("close"))
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
            class: P(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            l("header", $1, [
              l("div", w1, [
                l("h2", C1, f(e.title), 1),
                e.description ? (t(), a("p", S1, f(e.description), 1)) : y("", !0)
              ]),
              l("div", M1, [
                q(m.$slots, "header-actions"),
                l("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: x[1] || (x[1] = (p) => r("close"))
                }, [...x[2] || (x[2] = [
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
            l("div", B1, [
              q(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", A1, [
              q(m.$slots, "footer")
            ])) : y("", !0)
          ], 10, k1)) : y("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Pe() {
  return { query: "", selected: {}, ranges: {} };
}
function z1(e, o) {
  const n = e.metrics?.[o];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[o];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function _1(e, o) {
  return !o || o.min === null && o.max === null ? !0 : !(e === null || o.min !== null && e < o.min || o.max !== null && e > o.max);
}
function Rt(e, o) {
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
    if (!_1(z1(e, r), s))
      return !1;
  return !0;
}
function P1(e, o) {
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
const O1 = { class: "flex flex-col gap-6 p-4" }, j1 = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, L1 = { class: "text-sm font-semibold" }, V1 = { class: "flex flex-wrap items-center gap-1.5" }, T1 = ["aria-pressed", "onClick"], D1 = { class: "text-sm font-semibold" }, E1 = { class: "flex flex-wrap items-center gap-1.5" }, I1 = { key: 0 }, Ca = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(""), i = Je({}), d = Je({}), u = k(
      () => n.facets.filter((M) => (M.kind ?? "chips") === "chips")
    ), m = k(() => n.facets.filter((M) => M.kind === "range"));
    function x(M) {
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
        d[M] = { min: x(z.min), max: x(z.max) };
    }
    ce(
      () => n.open,
      (M) => {
        M && p();
      }
    );
    function b(M) {
      const z = M.trim();
      if (z === "")
        return null;
      const R = Number(z);
      return Number.isFinite(R) ? R : null;
    }
    function A() {
      const M = {};
      for (const [z, R] of Object.entries(d))
        M[z] = { min: b(R.min), max: b(R.max) };
      return M;
    }
    function C() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: A()
      };
    }
    const $ = k(() => {
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
    function h(M) {
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
        n.hideSearch ? { ...Pe(), query: n.applied.query } : Pe()
      );
    }
    return (M, z) => (t(), T(Nt, {
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
            $.value ? (t(), a("span", I1, " (" + f($.value) + ")", 1)) : y("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        l("div", O1, [
          e.hideSearch ? y("", !0) : (t(), a("label", j1, [
            z[3] || (z[3] = l("span", { class: "text-sm font-semibold" }, "Search", -1)),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": z[0] || (z[0] = (R) => s.value = R),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(_, null, V(u.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", L1, f(R.label ?? R.key), 1),
            l("div", V1, [
              (t(!0), a(_, null, V(R.options ?? [], (E) => (t(), a("button", {
                key: E.value,
                type: "button",
                class: P([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[R.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[R.key] === E.value ? "true" : "false",
                onClick: (ee) => w(R.key, E.value)
              }, f(E.label), 11, T1))), 128))
            ])
          ]))), 128)),
          (t(!0), a(_, null, V(m.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", D1, f(R.label ?? R.key), 1),
            l("div", E1, [
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${R.label ?? R.key} from`,
                "model-value": h(R.key).min,
                "onUpdate:modelValue": (E) => v(R.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              z[4] || (z[4] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              I(ge, {
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
}), F1 = ["aria-disabled"], N1 = ["disabled"], R1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, U1 = ["d"], H1 = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, q1 = ["disabled"], K1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, G1 = ["d"], W1 = /* @__PURE__ */ O({
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
    const n = Xe(e, "modelValue"), r = o, s = k(() => n.value <= e.min), i = k(() => e.max !== null && n.value >= e.max);
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
        onClick: m[0] || (m[0] = (x) => d(-1))
      }, [
        (t(), a("svg", R1, [
          l("path", {
            d: g(ie)("minus")
          }, null, 8, U1)
        ]))
      ], 8, N1),
      l("span", H1, f(n.value), 1),
      l("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (x) => d(1))
      }, [
        (t(), a("svg", K1, [
          l("path", {
            d: g(ie)("plus")
          }, null, 8, G1)
        ]))
      ], 8, q1)
    ], 8, F1));
  }
}), Z1 = { class: "divide-border flex flex-col divide-y" }, J1 = { class: "min-w-0" }, Y1 = { class: "truncate text-sm font-medium" }, X1 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Q1 = { class: "flex shrink-0 items-center gap-2 text-sm" }, eb = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, tb = {
  key: 2,
  class: "font-medium tabular-nums"
}, ab = ["aria-label", "onClick"], nb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, lb = ["d"], ob = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", Z1, [
      (t(!0), a(_, null, V(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        l("div", J1, [
          l("p", Y1, f(d.label), 1),
          d.detail ? (t(), a("p", X1, f(d.detail), 1)) : y("", !0)
        ]),
        l("div", Q1, [
          e.editable ? (t(), T(W1, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", eb, " ×" + f(d.qty), 1)) : y("", !0),
          d.amount ? (t(), a("span", tb, f(d.amount), 1)) : y("", !0),
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
            (t(), a("svg", nb, [
              l("path", {
                d: g(ie)("trash")
              }, null, 8, lb)
            ]))
          ], 8, ab)) : y("", !0)
        ])
      ]))), 128))
    ]));
  }
}), sb = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, rb = { class: "border-b px-4 py-3" }, ib = { class: "text-sm font-medium" }, db = { class: "flex-1 px-4 py-3" }, ub = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, cb = { class: "text-foreground block font-medium" }, fb = { class: "mt-1 block" }, mb = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, pb = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, vb = { class: "tabular-nums" }, gb = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, hb = { class: "text-muted-foreground" }, bb = {
  key: 0,
  class: "tabular-nums"
}, xb = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, yb = { class: "text-muted-foreground" }, kb = { class: "tabular-nums" }, $b = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, wb = { class: "tabular-nums" }, Cb = {
  key: 4,
  class: "pt-1"
}, Sb = /* @__PURE__ */ O({
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
    return (r, s) => (t(), a("aside", sb, [
      l("header", rb, [
        l("h2", ib, f(e.title), 1)
      ]),
      l("div", db, [
        e.items.length === 0 ? (t(), a("p", ub, [
          l("span", cb, f(e.emptyTitle), 1),
          l("span", fb, f(e.emptyDescription), 1)
        ])) : (t(), T(ob, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", mb, [
        e.subtotal ? (t(), a("div", pb, [
          s[2] || (s[2] = l("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          l("span", vb, f(e.subtotal), 1)
        ])) : y("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", gb, [
          l("span", hb, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", bb, f(e.discount), 1)) : y("", !0),
          q(r.$slots, "discount")
        ])) : y("", !0),
        e.tax ? (t(), a("div", xb, [
          l("span", yb, f(e.taxLabel), 1),
          l("span", kb, f(e.tax), 1)
        ])) : y("", !0),
        e.total ? (t(), a("div", $b, [
          s[3] || (s[3] = l("span", null, "Total", -1)),
          l("span", wb, f(e.total), 1)
        ])) : y("", !0),
        r.$slots.pay ? (t(), a("div", Cb, [
          q(r.$slots, "pay")
        ])) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), Mb = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Bb = { class: "flex flex-col gap-4" }, Ab = { class: "flex flex-wrap items-start justify-between gap-3" }, zb = { class: "flex items-center gap-2" }, _b = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, V5 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(Pe()), i = K(!1), d = Xe(e, "cart"), u = K(!1), m = k(
      () => n.items.filter((H) => Rt(H, s.value))
    );
    function x(H) {
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
      const W = P1(n.items, H);
      W && $(W.key);
    }
    function $(H) {
      const W = n.items.find((te) => te.key === H);
      if (!W || W.status === "out-of-stock")
        return;
      u.value = !1;
      const J = b(W);
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
      const J = n.items.find((te) => te.key === H), ae = b(J);
      d.value = d.value.map(
        (te) => te.key === H ? A(te, W, ae) : te
      );
    }
    function h(H) {
      d.value = d.value.filter((W) => W.key !== H);
    }
    const v = k(
      () => d.value.reduce((H, W) => {
        const J = n.items.find((ae) => ae.key === W.key);
        return H + b(J) * Number(W.qty ?? 1);
      }, 0)
    ), c = k(
      () => n.discountRate > 0 ? Math.round(v.value * n.discountRate) : 0
    ), S = k(
      () => Math.round((v.value - c.value) * n.taxRate)
    ), M = k(
      () => d.value.length ? n.formatMoney(v.value) : null
    ), z = k(
      () => d.value.length && c.value > 0 ? `−${n.formatMoney(c.value)}` : null
    ), R = k(
      () => d.value.length && n.taxRate > 0 ? n.formatMoney(S.value) : null
    ), E = k(
      () => d.value.length ? n.formatMoney(
        v.value - c.value + S.value
      ) : null
    );
    function ee() {
      u.value = !0, r("pay", d.value);
    }
    return (H, W) => (t(), a(_, null, [
      l("div", Mb, [
        l("section", Bb, [
          l("div", Ab, [
            I(_e, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            l("div", zb, [
              g(it)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: W[0] || (W[0] = (J) => s.value = {
                  ...g(Pe)(),
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
                g(it)(s.value) ? (t(), a("span", _b, " on ")) : y("", !0)
              ])) : y("", !0)
            ])
          ]),
          I(Ft, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: x,
            onSelect: W[2] || (W[2] = (J) => r("select", J)),
            onCart: $,
            onScan: C
          }, null, 8, ["search-placeholder", "items"])
        ]),
        I(Sb, {
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
          onRemove: h
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
      I(Ca, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: W[3] || (W[3] = (J) => i.value = !1),
        onApply: p,
        onReset: W[4] || (W[4] = (J) => s.value = { ...g(Pe)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Pb = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Ob = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, jb = ["src", "alt"], Lb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Vb = ["src"], Tb = { class: "flex items-start justify-between gap-3" }, Db = { class: "text-lg font-semibold tabular-nums" }, Eb = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ib = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Fb = { class: "grid grid-cols-2 gap-3" }, Nb = { class: "flex flex-col gap-2" }, Rb = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, T5 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(p) {
      let b = 0;
      for (const A of p)
        b = b * 31 + A.charCodeAt(0) >>> 0;
      return b;
    }
    function i(p, b) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((C, $) => ({
        label: C,
        value: Math.max(0, Math.round(p + Math.sin($ + b) * p * 0.18))
      }));
    }
    const d = k(() => n.item?.kind === "unit"), u = k(() => {
      const p = n.item;
      if (!p)
        return [];
      const b = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(p.key) % 7);
    }), m = k(() => {
      const p = n.item;
      if (!p)
        return [];
      const b = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(p.key) % 5 + 1);
    }), x = k(
      () => !!n.item && !d.value && n.item?.status !== "out-of-stock"
    );
    return (p, b) => (t(), T(Nt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: b[1] || (b[1] = (A) => r("close"))
    }, Ze({
      default: j(() => [
        e.item ? (t(), a("div", Pb, [
          l("div", Ob, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, jb)) : y("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", Lb, [
            (t(!0), a(_, null, V(e.item.images, (A, C) => (t(), a("img", {
              key: C,
              src: A,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Vb))), 128))
          ])) : y("", !0),
          l("div", Tb, [
            l("div", null, [
              l("p", Db, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", Eb, f(e.item.stock) + " in stock ", 1)) : y("", !0)
            ]),
            e.item.status ? (t(), T(he, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", Ib, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          l("div", Fb, [
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
          l("div", Nb, [
            l("p", Rb, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
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
      x.value && e.item ? {
        name: "footer",
        fn: j(() => [
          l("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: b[0] || (b[0] = (A) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), Ub = { class: "flex flex-col gap-10" }, Hb = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, qb = { class: "flex flex-col gap-3" }, Kb = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Gb = ["src", "alt"], Wb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Zb = ["aria-label", "aria-pressed", "onClick"], Jb = ["src"], Yb = { class: "flex flex-col gap-5" }, Xb = { class: "flex flex-wrap items-start justify-between gap-3" }, Qb = { class: "min-w-0" }, ex = { class: "text-2xl font-semibold tracking-tight" }, tx = { class: "text-muted-foreground mt-1 text-sm" }, ax = { class: "text-2xl font-semibold tabular-nums" }, nx = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, lx = { class: "grid grid-cols-2 gap-3 text-sm" }, ox = {
  key: 0,
  class: "rounded-lg border p-3"
}, sx = { class: "mt-1 font-medium" }, rx = { class: "rounded-lg border p-3" }, ix = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, dx = { class: "mt-1 font-medium" }, ux = { class: "flex flex-col gap-4" }, cx = { class: "grid gap-4 sm:grid-cols-2" }, fx = { class: "bg-card rounded-lg border p-4" }, mx = { class: "mb-3 text-sm font-medium" }, px = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(C) {
      let $ = 0;
      for (const w of C)
        $ = $ * 31 + w.charCodeAt(0) >>> 0;
      return $;
    }
    function i(C, $) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((h, v) => ({
        label: h,
        value: Math.max(0, Math.round(C + Math.sin(v + $) * C * 0.18))
      }));
    }
    const d = k(() => n.item.kind === "unit"), u = k(() => {
      const C = [n.item.image, ...n.item.images ?? []].filter(
        ($) => typeof $ == "string" && $ !== ""
      );
      return [...new Set(C)];
    }), m = K(0), x = k(() => {
      const C = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(C) || 12, s(n.item.key) % 7);
    }), p = k(() => {
      const C = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(C) || 20, s(n.item.key) % 5 + 1);
    }), b = k(() => d.value ? p.value : x.value), A = k(() => !d.value && n.item.status !== "out-of-stock");
    return (C, $) => (t(), a("div", Ub, [
      l("div", Hb, [
        l("div", qb, [
          l("div", Kb, [
            u.value[m.value] ? (t(), a("img", {
              key: 0,
              src: u.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Gb)) : y("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", Wb, [
            (t(!0), a(_, null, V(u.value, (w, h) => (t(), a("button", {
              key: w,
              type: "button",
              class: P(["size-16 shrink-0 overflow-hidden rounded-md border", h === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${h + 1}`,
              "aria-pressed": h === m.value ? "true" : "false",
              onClick: (v) => m.value = h
            }, [
              l("img", {
                src: w,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, Jb)
            ], 10, Zb))), 128))
          ])) : y("", !0)
        ]),
        l("div", Yb, [
          l("div", Xb, [
            l("div", Qb, [
              l("h1", ex, f(e.item.label), 1),
              l("p", tx, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(he, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          l("p", ax, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", nx, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          l("dl", lx, [
            e.item.sku ? (t(), a("div", ox, [
              $[1] || ($[1] = l("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              l("dd", sx, f(e.item.sku), 1)
            ])) : y("", !0),
            l("div", rx, [
              l("dt", ix, f(d.value ? "Occupancy" : "Stock"), 1),
              l("dd", dx, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          A.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: $[0] || ($[0] = (w) => r("cart", e.item.key))
          }, " Add to cart ")) : y("", !0)
        ])
      ]),
      l("section", ux, [
        $[2] || ($[2] = l("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        l("div", cx, [
          I(rt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: b.value
          }, null, 8, ["label", "value", "series"]),
          I(rt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: x.value
          }, null, 8, ["value", "series"])
        ]),
        l("div", fx, [
          l("p", mx, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(Em, {
            data: b.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), vx = ["href"], D5 = /* @__PURE__ */ O({
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
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : g(De)])
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
      ], 8, vx),
      I(px, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), gx = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, hx = ["aria-selected", "onClick"], bx = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, xx = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, yx = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, kx = ["aria-pressed"], $x = ["aria-pressed"], E5 = /* @__PURE__ */ O({
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
      return d.value[w] ?? Pe();
    }
    const x = k(
      () => n.tabs.find((w) => w.key === s.value) ?? n.tabs[0] ?? null
    ), p = k(
      () => x.value ? m(x.value.key) : Pe()
    ), b = k(() => {
      const w = x.value;
      return w ? w.items.filter((h) => Rt(h, m(w.key))) : [];
    });
    function A(w) {
      const h = x.value?.key;
      h && (d.value = {
        ...d.value,
        [h]: { ...m(h), query: w }
      });
    }
    function C() {
      const w = x.value?.key;
      w && (d.value = { ...d.value, [w]: Pe() });
    }
    function $(w) {
      const h = x.value?.key;
      h && (d.value = { ...d.value, [h]: w }, u.value = !1);
    }
    return (w, h) => (t(), a(_, null, [
      l("div", {
        class: P(["flex w-full flex-col gap-8", e.embedded ? "" : g(De)])
      }, [
        I(_e, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", gx, [
          (t(!0), a(_, null, V(e.tabs, (v) => (t(), a("button", {
            key: v.key,
            type: "button",
            class: P([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (c) => s.value = v.key
          }, f(v.label), 11, hx))), 128))
        ])) : y("", !0),
        l("div", bx, [
          I(ge, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: x.value?.searchPlaceholder ?? "Search…",
            "aria-label": x.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": h[0] || (h[0] = (v) => A(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          g(it)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: C
          }, " Clear ")) : y("", !0),
          (x.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: h[1] || (h[1] = (v) => u.value = !0)
          }, [
            h[8] || (h[8] = l("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              l("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            h[9] || (h[9] = U(" Filters ", -1)),
            g(it)(p.value) ? (t(), a("span", xx, " on ")) : y("", !0)
          ])) : y("", !0),
          l("div", yx, [
            l("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: h[2] || (h[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, kx),
            l("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: h[3] || (h[3] = (v) => i.value = "list")
            }, " List ", 10, $x)
          ])
        ]),
        I(Ft, {
          layout: i.value,
          "onUpdate:layout": h[4] || (h[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: b.value,
          onSelect: h[5] || (h[5] = (v) => r("select", v)),
          onCart: h[6] || (h[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      I(Ca, {
        open: u.value,
        title: x.value?.filterTitle ?? "Filters",
        "search-placeholder": x.value?.searchPlaceholder ?? "Search…",
        facets: x.value?.facets ?? [],
        applied: p.value,
        onClose: h[7] || (h[7] = (v) => u.value = !1),
        onApply: $,
        onReset: C
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), wx = { class: "flex flex-col gap-4" }, Cx = { class: "flex flex-col gap-4" }, I5 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(Pe()), i = k(
      () => n.cards.filter((d) => Rt(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : g(De)])
    }, [
      I(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", wx, [
        I(_e, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(Ft, {
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
      l("section", Cx, [
        I(_e, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(wl, {
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
}), Sx = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Mx = { class: "text-sm font-medium" }, Bx = ["width", "height", "aria-label"], Ax = { class: "flex items-center gap-2" }, zx = /* @__PURE__ */ O({
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
      const h = s.value;
      if (!h)
        return null;
      const v = h.getBoundingClientRect(), c = h.width / v.width, S = h.height / v.height;
      return {
        x: (w.clientX - v.left) * c,
        y: (w.clientY - v.top) * S
      };
    }
    function x(w) {
      n.disabled || (i.value = !0, d = m(w), s.value?.setPointerCapture(w.pointerId));
    }
    function p(w) {
      if (!i.value || n.disabled)
        return;
      const h = u(), v = m(w);
      !h || !v || !d || (h.strokeStyle = "#111827", h.lineWidth = 2.4, h.lineCap = "round", h.lineJoin = "round", h.beginPath(), h.moveTo(d.x, d.y), h.lineTo(v.x, v.y), h.stroke(), d = v);
    }
    function b() {
      i.value = !1, d = null;
    }
    function A() {
      const w = s.value, h = u();
      !w || !h || (h.clearRect(0, 0, w.width, w.height), r("clear"));
    }
    function C() {
      const w = s.value;
      w && r("save", w.toDataURL("image/png"));
    }
    function $() {
      const w = s.value, h = u();
      !w || !h || (h.fillStyle = "#ffffff", h.fillRect(0, 0, w.width, w.height));
    }
    return pe($), be(() => {
      i.value = !1;
    }), (w, h) => (t(), a("div", Sx, [
      l("p", Mx, f(e.label), 1),
      l("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: P(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: me(x, ["prevent"]),
        onPointermove: me(p, ["prevent"]),
        onPointerup: me(b, ["prevent"]),
        onPointerleave: me(b, ["prevent"])
      }, null, 42, Bx),
      l("div", Ax, [
        I(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: A
        }, {
          default: j(() => [...h[0] || (h[0] = [
            U(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: j(() => [...h[1] || (h[1] = [
            U("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), _x = { class: "grid gap-8 lg:grid-cols-2" }, Px = { class: "flex flex-col gap-3" }, Ox = { class: "text-muted-foreground text-xs" }, jx = {
  key: 0,
  class: "flex flex-col gap-3"
}, Lx = { class: "flex flex-wrap gap-3" }, Vx = ["onClick"], Tx = ["src", "alt"], Dx = {
  key: 1,
  class: "flex flex-col gap-3"
}, Ex = { class: "flex flex-wrap gap-3" }, Ix = ["onClick"], Fx = ["src", "alt"], Nx = {
  key: 2,
  class: "flex flex-col gap-4"
}, Rx = { class: "flex flex-wrap items-center gap-2" }, Ux = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Hx = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, qx = { class: "flex flex-col gap-2" }, Kx = ["src"], Gx = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Wx = ["src"], F5 = /* @__PURE__ */ O({
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
        const h = localStorage.getItem(w), v = h ? JSON.parse(h) : [];
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
    function x(w) {
      const h = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: w
      };
      n.value = [h, ...n.value].slice(0, 8), s.value = h.id;
    }
    async function p(w, h) {
      await ru(w), h(40);
      const v = await new Promise((c, S) => {
        const M = new FileReader();
        M.onload = () => c(String(M.result)), M.onerror = () => S(new Error("Could not read the file")), M.readAsDataURL(w);
      });
      return h(100), { value: v, name: w.name, size: w.size, url: v };
    }
    function b() {
      const w = d.value?.url ?? d.value?.value;
      if (!w)
        return;
      const h = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: w
      };
      r.value = [h, ...r.value].slice(0, 8), i.value = h.id;
    }
    const A = k(
      () => n.value.find((w) => w.id === s.value)?.dataUrl ?? null
    ), C = k(
      () => r.value.find((w) => w.id === i.value)?.dataUrl ?? null
    ), $ = k(() => {
      const w = o.documents.find((v) => v.key === u.value)?.document ?? o.documents[0]?.document ?? {}, h = {
        ...w?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...w,
        branding: h
      };
    });
    return (w, h) => (t(), a("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : g(De)])
    }, [
      I(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", _x, [
        I(zx, {
          label: "Draw a signature",
          onSave: x
        }),
        l("div", Px, [
          h[2] || (h[2] = l("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          l("p", Ox, f(g(ba)), 1),
          I(fa, {
            modelValue: d.value,
            "onUpdate:modelValue": h[0] || (h[0] = (v) => d.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          I(se, {
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
      n.value.length ? (t(), a("section", jx, [
        I(_e, {
          variant: "small",
          title: "Saved signatures"
        }),
        l("div", Lx, [
          (t(!0), a(_, null, V(n.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: P(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Tx)
          ], 10, Vx))), 128))
        ])
      ])) : y("", !0),
      r.value.length ? (t(), a("section", Dx, [
        I(_e, {
          variant: "small",
          title: "Saved stamps"
        }),
        l("div", Ex, [
          (t(!0), a(_, null, V(r.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: P(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Fx)
          ], 10, Ix))), 128))
        ])
      ])) : y("", !0),
      e.documents.length ? (t(), a("section", Nx, [
        l("div", Rx, [
          (t(!0), a(_, null, V(e.documents, (v) => (t(), T(se, {
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
        l("div", Ux, [
          I(Yf, {
            document: $.value
          }, null, 8, ["document"]),
          l("div", Hx, [
            l("div", qx, [
              h[3] || (h[3] = l("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              A.value ? (t(), a("img", {
                key: 0,
                src: A.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Kx)) : (t(), a("p", Gx, "Draw and save a signature"))
            ]),
            C.value ? (t(), a("img", {
              key: 0,
              src: C.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Wx)) : y("", !0)
          ])
        ])
      ])) : y("", !0)
    ], 2));
  }
}), N5 = "panel.dashboard.hiddenWidgets", Zx = /* @__PURE__ */ Symbol("dashboardHide"), Jx = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, R5 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const o = e, n = lt(Zx, null), r = K(
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
    const i = k(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? y("", !0) : (t(), a("div", Jx, [
      I(Fv, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (m) => r.value = m),
        onHide: u[1] || (u[1] = (m) => g(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Yx = { class: "flex flex-col gap-3" }, Xx = ["data-slot"], Qx = ["aria-pressed", "aria-label", "title"], ey = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ty = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, ay = { class: "flex h-8 items-center" }, ny = ["aria-label", "title", "onClick"], ly = ["aria-label", "title", "onClick"], oy = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, sy = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, U5 = /* @__PURE__ */ O({
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
    const m = k(() => n.segments.some(u)), x = k(() => n.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, b = k(() => p[n.columns] ?? p[4]), A = k(() => {
      const c = n.columns ?? 4, S = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(0, S);
    }), C = k(() => {
      const c = n.columns ?? 4, S = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(S);
    }), $ = k(() => {
      const c = [];
      return A.value.length > 0 && c.push({ key: "packed", joined: !0, segments: A.value }), C.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: C.value }), c;
    });
    function w() {
      const c = m.value === !1;
      s.value = !c, i.value = /* @__PURE__ */ new Set(), r("toggle", c);
    }
    function h(c) {
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
    return (c, S) => (t(), a("div", Yx, [
      (t(!0), a(_, null, V($.value, (M) => (t(), a("div", {
        key: M.key,
        class: P(["relative shrink-0", M.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": M.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && x.value && M.key === $.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: w
        }, [
          (t(), a("svg", ey, [
            m.value ? (t(), a(_, { key: 0 }, [
              S[0] || (S[0] = l("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              S[1] || (S[1] = l("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              S[2] || (S[2] = l("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              S[3] || (S[3] = l("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(_, { key: 1 }, [
              S[4] || (S[4] = l("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              S[5] || (S[5] = l("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Qx)) : y("", !0),
        l("div", {
          class: P(["grid", [M.joined ? "gap-px" : "gap-3", b.value]])
        }, [
          (t(!0), a(_, null, V(M.segments, (z) => (t(), a("div", {
            key: z.key,
            class: P(["bg-card flex flex-col gap-2 p-4", M.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            l("p", ty, f(z.label), 1),
            l("div", ay, [
              e.loading ? (t(), T($e, {
                key: 0,
                variant: "number"
              })) : u(z) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${z.label} hidden. Show it.`,
                title: `Show ${z.label}`,
                onClick: (R) => h(z)
              }, [
                (t(), a(_, null, V(5, (R) => l("span", {
                  key: R,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, ny)) : d(z) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${z.label}, ${v(z.value)}. Hide it.`,
                title: `Hide ${z.label}`,
                onClick: (R) => h(z)
              }, f(v(z.value)), 9, ly)) : (t(), a("span", oy, f(v(z.value)), 1)),
              z.trend && !e.loading && !u(z) ? (t(), T(wa, {
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
            z.caption || z.comparison && z.trend ? (t(), a("p", sy, f(z.caption ?? z.comparison), 1)) : y("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Xx))), 128))
    ]));
  }
}), ry = ["aria-label"], iy = ["aria-valuenow", "aria-label"], dy = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, uy = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, cy = ["title"], fy = { class: "font-medium" }, my = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, py = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, vy = { class: "flex items-center justify-between gap-2" }, gy = { class: "text-sm font-semibold" }, hy = { class: "flex items-center gap-3" }, by = ["href"], xy = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, yy = { class: "flex min-w-0 flex-col gap-0.5" }, ky = { class: "text-sm font-medium" }, $y = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, wy = {
  key: 1,
  class: "flex flex-col gap-2"
}, Cy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Sy = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, My = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, H5 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = k(() => n.items.find(($) => !$.done) ?? null), i = k(() => n.items.filter(($) => $.key !== s.value?.key)), d = k(() => n.items.length), u = k(() => n.items.filter(($) => $.done).length), m = k(() => {
      if (!s.value)
        return d.value;
      const $ = n.items.findIndex((w) => w.key === s.value?.key);
      return $ >= 0 ? $ + 1 : 1;
    }), x = k(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = k(() => {
      const $ = n.linkComponent;
      return typeof $ == "string" ? $ : ta($);
    }), b = Ge({
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
    return ($, w) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
      key: 0,
      class: "overflow-hidden rounded-md border bg-card",
      "aria-label": e.heading
    }, [
      l("div", {
        class: "h-0.5 w-full bg-muted",
        role: "progressbar",
        "aria-valuenow": x.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${x.value} percent complete`
      }, [
        l("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: ne({ width: `${x.value}%` })
        }, null, 4)
      ], 8, iy),
      l("div", dy, [
        l("span", uy, " Step " + f(m.value) + " of " + f(d.value), 1),
        l("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          l("span", fy, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", my, f(": " + s.value.detail), 1)) : y("", !0)
        ], 8, cy),
        s.value?.href ? (t(), T(xe(p.value), {
          key: 0,
          href: s.value.href,
          class: P(g(A))
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
          onClick: w[0] || (w[0] = (h) => r("skip"))
        }, f(e.skipLabel), 1)) : y("", !0)
      ])
    ], 8, ry)) : e.items.length ? (t(), a("section", py, [
      l("div", vy, [
        l("h2", gy, f(e.heading), 1),
        l("div", hy, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: w[1] || (w[1] = (h) => r("skip"))
          }, f(e.skipLabel), 1)) : y("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, by)) : y("", !0)
        ])
      ]),
      s.value ? (t(), a("div", xy, [
        w[2] || (w[2] = l("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        l("div", yy, [
          l("p", ky, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", $y, f(s.value.detail), 1)) : y("", !0),
          s.value.href ? (t(), T(xe(p.value), {
            key: 1,
            href: s.value.href,
            class: P(g(b))
          }, {
            default: j(() => [
              U(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : y("", !0)
        ])
      ])) : y("", !0),
      i.value.length ? (t(), a("ul", wy, [
        (t(!0), a(_, null, V(i.value, (h) => (t(), a("li", {
          key: h.key,
          class: "flex items-start gap-3"
        }, [
          l("span", {
            class: P([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              h.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            h.done ? (t(), a("svg", Cy, [...w[3] || (w[3] = [
              l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : y("", !0)
          ], 2),
          l("div", Sy, [
            l("p", {
              class: P(["text-sm", h.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(h.title), 3),
            !h.done && h.detail ? (t(), a("p", My, f(h.detail), 1)) : y("", !0)
          ]),
          !h.done && h.href ? (t(), T(xe(p.value), {
            key: 0,
            href: h.href,
            class: P(g(C))
          }, {
            default: j(() => [
              U(f(h.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : y("", !0)
        ]))), 128))
      ])) : y("", !0)
    ])) : y("", !0);
  }
}), By = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, Ay = { class: "hidden items-center gap-2 md:flex" }, zy = { class: "md:hidden" }, _y = { class: "border-b px-4 py-3" }, Py = { class: "text-muted-foreground text-xs" }, Oy = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, jy = { class: "font-medium tabular-nums" }, Ly = { class: "ml-auto flex items-center gap-3" }, q5 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: o }) {
    const n = o, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", By, [
      l("div", Ay, [
        q(i.$slots, "actions")
      ]),
      l("div", zy, [
        l("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        I(Et, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: j(() => [
            I(It, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", _y, [
                  d[4] || (d[4] = l("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  l("p", Py, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                l("div", Oy, [
                  q(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      l("span", jy, [
        e.allMatching ? (t(), a(_, { key: 0 }, [
          U(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(_, { key: 1 }, [
          U(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      l("div", Ly, [
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
}), Vy = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Ty = { class: "text-muted-foreground text-xs tabular-nums" }, Dy = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Ey = ["value"], Iy = ["value"], Fy = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Ny = ["disabled"], Ry = ["disabled"], Uy = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Hy = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, qy = ["disabled"], K5 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = (m) => new Intl.NumberFormat().format(m), i = k(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), d = k(() => (n.page - 1) * n.perPage + n.rowsOnPage), u = k(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (m, x) => (t(), a("div", Vy, [
      l("p", Ty, [
        U(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(_, { key: 0 }, [
          U("of " + f(s(e.total)), 1)
        ], 64)) : y("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", Dy, [
        x[4] || (x[4] = l("span", null, "Per page", -1)),
        l("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: x[0] || (x[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(_, null, V(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, Iy))), 128))
        ], 40, Ey)
      ])) : y("", !0),
      l("nav", Fy, [
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: x[1] || (x[1] = (p) => r("first"))
        }, [...x[5] || (x[5] = [
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
        ])], 8, Ny),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: x[2] || (x[2] = (p) => r("previous"))
        }, [...x[6] || (x[6] = [
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
        ])], 8, Ry),
        l("span", Uy, f(e.page), 1),
        u.value !== null ? (t(), a("span", Hy, " of " + f(s(u.value)), 1)) : y("", !0),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: x[3] || (x[3] = (p) => r("next"))
        }, [...x[7] || (x[7] = [
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
        ])], 8, qy)
      ])
    ]));
  }
}), Ky = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Gy = ["aria-current"], Wy = ["title"], Zy = ["aria-current", "onClick"], Jy = ["title"], Yy = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", Ky, [
      l("button", {
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => n("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Wy)) : (t(), T($e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Gy),
      (t(!0), a(_, null, V(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => n("select", d)
      }, [
        U(f(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, Jy)) : (t(), T($e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Zy))), 128))
    ]));
  }
}), G5 = /* @__PURE__ */ jt(Yy, [["__scopeId", "data-v-3967c945"]]), Xy = { class: "flex flex-col gap-2" }, Qy = { class: "flex items-center gap-2 md:hidden" }, e0 = { class: "relative min-w-0 flex-1" }, t0 = ["placeholder", "title", "aria-label"], a0 = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, n0 = { class: "flex max-h-[85vh] flex-col" }, l0 = { class: "flex-1 overflow-y-auto px-4 py-3" }, o0 = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, s0 = { class: "text-xs font-medium" }, r0 = ["value", "onChange"], i0 = ["value"], d0 = { class: "mb-4" }, u0 = { class: "flex flex-col gap-1" }, c0 = ["disabled", "onClick"], f0 = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, m0 = {
  key: 1,
  class: "mb-4"
}, p0 = { class: "flex flex-col gap-1" }, v0 = ["onClick"], g0 = { class: "border-t p-4" }, h0 = ["disabled"], b0 = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, x0 = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, y0 = ["placeholder", "title", "aria-label"], k0 = ["aria-label"], $0 = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, w0 = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, C0 = { class: "text-xs font-medium" }, S0 = ["value", "onChange"], M0 = ["value"], B0 = { class: "grid grid-cols-2 gap-2" }, A0 = ["value", "onChange"], z0 = ["value", "onChange"], _0 = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, P0 = ["value", "onChange"], O0 = ["value", "onChange"], j0 = {
  key: 4,
  class: "flex items-center gap-2"
}, L0 = ["aria-checked", "onClick"], V0 = { class: "text-xs" }, T0 = ["onClick"], D0 = ["value", "onChange"], E0 = ["value"], I0 = ["disabled", "onClick"], F0 = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, N0 = ["disabled", "onClick"], R0 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, U0 = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, H0 = ["aria-pressed", "aria-label", "title"], q0 = ["aria-label", "title"], K0 = { class: "flex flex-col gap-0.5 p-1" }, G0 = ["onClick"], W0 = ["onClick"], Z0 = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, J0 = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Y0 = ["dusk"], X0 = ["aria-label", "onClick"], W5 = /* @__PURE__ */ O({
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
    const m = k(
      () => n.filterSchema.filter(
        (Z) => n.filters[Z.key] !== null && n.filters[Z.key] !== void 0
      ).length
    ), x = k(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), p = k(() => n.search !== "" || m.value > 0), b = k(() => n.indicators.length ? n.indicators : n.filterSchema.filter((Z) => n.filters[Z.key] !== null && n.filters[Z.key] !== void 0).map((Z) => ({
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
    function $(Z) {
      return Z.type === "multiselect";
    }
    function w(Z) {
      const B = u.value[Z.key];
      return Array.isArray(B) ? B : B == null ? [] : [B];
    }
    function h(Z) {
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
    return (Z, B) => (t(), a("div", Xy, [
      l("div", Qy, [
        l("div", e0, [
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
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", g(Be)])
          }, null, 10, t0), [
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
          m.value ? (t(), a("span", a0, f(m.value), 1)) : y("", !0)
        ]),
        I(Et, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (N) => s.value = N)
        }, {
          default: j(() => [
            I(It, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", n0, [
                  B[16] || (B[16] = l("div", { class: "border-b px-4 py-3" }, [
                    l("p", { class: "text-sm font-semibold" }, "Table tools"),
                    l("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  l("div", l0, [
                    e.filterSchema.length ? (t(), a("div", o0, [
                      l("div", { class: "flex items-center justify-between" }, [
                        B[12] || (B[12] = l("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        l("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: ee
                        }, " Reset ")
                      ]),
                      (t(!0), a(_, null, V(e.filterSchema, (N) => (t(), a("div", {
                        key: `mobile-${N.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        l("label", s0, f(N.label), 1),
                        N.type !== "multiselect" && N.type !== "querybuilder" && N.type !== "daterange" && N.type !== "numberrange" && N.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: u.value[N.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (L) => c(N, L.target.value)
                        }, [
                          B[13] || (B[13] = l("option", { value: "" }, "All", -1)),
                          (t(!0), a(_, null, V(H(N), (L) => (t(), a("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, i0))), 128))
                        ], 40, r0)) : y("", !0)
                      ]))), 128))
                    ])) : y("", !0),
                    l("div", d0, [
                      B[14] || (B[14] = l("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      l("div", u0, [
                        (t(!0), a(_, null, V(e.columns, (N) => (t(), a("button", {
                          key: `mobile-col-${N.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: N.locked,
                          onClick: (L) => J(N.key)
                        }, [
                          l("span", null, f(N.label), 1),
                          W.value.has(N.key) ? y("", !0) : (t(), a("span", f0, "On"))
                        ], 8, c0))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", m0, [
                      B[15] || (B[15] = l("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      l("div", p0, [
                        l("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: B[2] || (B[2] = (N) => {
                            A(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), a(_, null, V(e.groups, (N) => (t(), a("button", {
                          key: N.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (L) => {
                            A(N.key), s.value = !1;
                          }
                        }, f(N.label), 9, v0))), 128))
                      ])
                    ])) : y("", !0)
                  ]),
                  l("div", g0, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !x.value,
                      onClick: te
                    }, " Apply filters ", 8, h0)) : y("", !0),
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
      l("div", b0, [
        l("div", x0, [
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
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", g(Be)])
          }, null, 10, y0), [
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
              class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", m.value ? "border-primary text-primary" : ""]),
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
              m.value ? (t(), a("span", $0, f(m.value), 1)) : y("", !0)
            ], 10, k0)
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
            l("div", w0, [
              (t(!0), a(_, null, V(e.filterSchema, (L) => (t(), a("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                l("label", C0, f(L.label), 1),
                $(L) ? (t(), T(Lt, {
                  key: 0,
                  "model-value": h(L),
                  options: v(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (X) => u.value[L.key] = X.length ? X : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(gi, {
                  key: 1,
                  "model-value": u.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (X) => E(L.key, X)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), a(_, { key: 2 }, [
                  l("select", {
                    value: typeof u.value[L.key] == "string" && !String(u.value[L.key]).includes("..") ? u.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (X) => c(L, X.target.value)
                  }, [
                    B[21] || (B[21] = l("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(_, null, V(H(L), (X) => (t(), a("option", {
                      key: String(X.value),
                      value: X.value
                    }, f(X.label), 9, M0))), 128))
                  ], 40, S0),
                  l("div", B0, [
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
                    }, null, 40, A0),
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
                    }, null, 40, z0)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), a("div", _0, [
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
                  }, null, 40, P0),
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
                  }, null, 40, O0)
                ])) : L.type === "boolean" ? (t(), a("div", j0, [
                  l("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[L.key] === !0,
                    class: P([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (X) => c(L, u.value[L.key] === !0 ? null : !0)
                  }, [
                    l("span", {
                      class: P(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, L0),
                  l("span", V0, f(L.trueLabel ?? "Yes"), 1),
                  l("button", {
                    type: "button",
                    class: P([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (X) => c(L, u.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, T0)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (X) => c(L, X.target.value)
                }, [
                  B[22] || (B[22] = l("option", { value: "" }, "All", -1)),
                  (t(!0), a(_, null, V(H(L), (X) => (t(), a("option", {
                    key: String(X.value),
                    value: X.value
                  }, f(X.label), 9, E0))), 128))
                ], 40, D0))
              ]))), 128))
            ]),
            l("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !x.value,
              onClick: (L) => R(N)
            }, " Apply filters ", 8, I0)
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
            l("div", F0, [
              (t(!0), a(_, null, V(e.columns, (N) => (t(), a("button", {
                key: N.key,
                type: "button",
                class: P(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: N.locked,
                onClick: (L) => J(N.key)
              }, [
                W.value.has(N.key) ? (t(), a("span", U0)) : (t(), a("svg", R0, [...B[25] || (B[25] = [
                  l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                U(" " + f(N.label), 1)
              ], 10, N0))), 128))
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
          class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
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
        ])], 10, H0)) : y("", !0),
        e.groups.length ? (t(), T(Ne, {
          key: 2,
          align: "end"
        }, {
          trigger: j(() => [
            l("button", {
              type: "button",
              dusk: "group-picker",
              class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
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
            ])], 10, q0)
          ]),
          panel: j(({ close: N }) => [
            l("div", K0, [
              l("button", {
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  A(null), N();
                }
              }, " No grouping ", 10, G0),
              (t(!0), a(_, null, V(e.groups, (L) => (t(), a("button", {
                key: L.key,
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (X) => {
                  A(L.key), N();
                }
              }, f(L.label), 11, W0))), 128))
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
        e.loading ? (t(), a("span", Z0, "Loading…")) : y("", !0)
      ]),
      b.value.length ? (t(), a("div", J0, [
        (t(!0), a(_, null, V(b.value, (N) => (t(), a("span", {
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
          ])], 8, X0)) : y("", !0)
        ], 8, Y0))), 128)),
        b.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: B[8] || (B[8] = (N) => r("clear-filters"))
        }, " Clear all ")) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), Q0 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ek = { class: "grid gap-2" }, tk = {
  key: 0,
  class: "text-destructive text-sm"
}, ak = { class: "flex gap-2" }, Z5 = /* @__PURE__ */ O({
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
      ].find(({ pattern: w }) => w.test(A))?.name, $ = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: w }) => w.test(A))?.name;
      return [C, $].filter(Boolean).join(" on ") || "";
    })()), i = K(!1), d = Va(null), u = k(() => d.value?.isLoading.value ?? !1), m = k(() => d.value?.error.value ?? null), x = k(() => d.value?.isSupported.value ?? !1);
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
    }, b = () => {
      i.value = !1, s.value = "";
    };
    return (A, C) => x.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      l("div", ek, [
        C[3] || (C[3] = l("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ue(l("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": C[1] || (C[1] = ($) => s.value = $),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [ye, s.value]
        ]),
        C[4] || (C[4] = l("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      m.value ? (t(), a("p", tk, f(m.value), 1)) : y("", !0),
      l("div", ak, [
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
          onClick: b
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
      onClick: C[0] || (C[0] = ($) => i.value = !0)
    }, {
      default: j(() => [...C[2] || (C[2] = [
        U(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", Q0, " Passkeys are not supported in this browser. "));
  }
}), nk = { class: "flex flex-col gap-4" }, lk = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, J5 = /* @__PURE__ */ O({
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
      run(m, x) {
        return n.createOption ? n.createOption(m, x) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = o, s = k(() => n.nodes.length > 0), i = k(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = k(() => n.errors._conflict);
    function u(m) {
      if (n.upload)
        return (x, p) => n.upload(m, x, p);
    }
    return (m, x) => (t(), a("div", nk, [
      d.value ? (t(), a("p", lk, f(d.value), 1)) : y("", !0),
      s.value ? (t(!0), a(_, { key: 1 }, V(e.nodes, (p, b) => (t(), T(ma, {
        key: b,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: x[0] || (x[0] = (A, C) => r("change", A, C)),
        onAffixAction: x[1] || (x[1] = (A, C) => r("affix-action", A, C))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: P(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(_, null, V(e.fields, (p) => (t(), T(Re, {
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
          class: P(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (b) => r("change", p.key, b),
          onAffixAction: (b) => r("affix-action", p.key, b)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), ok = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, sk = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, rk = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, ik = ["disabled"], dk = ["disabled"], uk = ["disabled"], Y5 = /* @__PURE__ */ O({
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
          e.show ? (t(), a("div", ok, [
            l("div", sk, [
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
              l("span", rk, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => o.$emit("discard"))
              }, f(e.discardLabel), 9, ik)) : y("", !0),
              l("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => o.$emit("cancel"))
              }, f(e.cancelLabel), 9, dk),
              l("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => o.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, uk)
            ])
          ])) : y("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function X5(e, o = {}) {
  const { warnOnUnload: n = !0 } = o, r = K(bt(e.value)), s = k(() => bt(e.value) !== r.value);
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
const ck = {
  key: 0,
  class: "flex flex-col gap-1"
}, fk = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, mk = { class: "text-foreground text-sm font-medium" }, pk = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, vk = {
  key: 5,
  class: "max-w-full font-normal"
}, gk = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, hk = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, bk = {
  key: 6,
  class: "font-normal"
}, xk = {
  key: 0,
  class: "divide-y rounded-md border"
}, yk = { class: "text-muted-foreground truncate font-medium" }, kk = { class: "text-foreground col-span-2 break-words" }, $k = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, wk = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, Ck = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, Sk = ["href"], Mk = { class: "flex min-w-0 items-start gap-2.5" }, Bk = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Ak = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, zk = ["d"], _k = { class: "min-w-0" }, Pk = { class: "flex flex-wrap items-center gap-2" }, Ok = { class: "text-sm font-semibold" }, jk = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Lk = ["onClick"], Q5 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!n.node.collapsed), i = K(0), d = k(() => n.depth === 0), u = k(() => {
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
    }, x = k(() => n.node.key ? n.record[n.node.key] : null), p = k(() => {
      const C = x.value;
      return C == null || C === "";
    }), b = k(() => {
      if (p.value)
        return "None";
      const C = x.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(C)).toLocaleDateString(void 0, m[n.node.type]);
      let $ = String(C);
      return n.node.transform === "upper" && ($ = $.toUpperCase()), n.node.transform === "lower" && ($ = $.toLowerCase()), [n.node.prefix, $, n.node.suffix].filter(Boolean).join(" ");
    }), A = k(() => {
      const C = typeof x.value == "boolean" ? x.value ? "1" : "" : String(x.value), $ = n.node.colors?.[C] ?? n.node.defaultColor ?? "neutral";
      return Vt[$] ?? "outline";
    });
    return (C, $) => {
      const w = Bt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", ck, [
        l("dt", fk, f(e.node.label), 1),
        l("dd", mk, [
          e.node.type === "badge" && g(Si)(x.value) ? (t(), T(We, {
            key: 0,
            variant: A.value,
            class: "capitalize"
          }, {
            default: j(() => [
              U(f(x.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", pk, "None")) : e.node.type === "icon" ? (t(), T(qr, {
            key: 2,
            value: x.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Wr, {
            key: 3,
            src: x.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Qr, {
            key: 4,
            value: typeof x.value == "string" ? x.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", vk, [
            e.node.language ? (t(), a("p", gk, f(e.node.language), 1)) : y("", !0),
            l("pre", hk, [
              l("code", null, f(x.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", bk, [
            x.value && typeof x.value == "object" && !Array.isArray(x.value) && Object.keys(x.value).length ? (t(), a("dl", xk, [
              (t(!0), a(_, null, V(x.value, (h, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                l("dt", yk, f(v), 1),
                l("dd", kk, f(h), 1)
              ]))), 128))
            ])) : (t(), a("span", $k, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", wk, [
            (t(!0), a(_, null, V(Array.isArray(x.value) ? x.value : [], (h, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(_, null, V(e.node.entries ?? [], (c, S) => (t(), T(w, {
                key: S,
                node: c,
                record: h,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (M) => r("action", M))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(x.value) || x.value.length === 0 ? (t(), a("span", Ck, "None")) : y("", !0)
          ])) : e.node.url && !p.value ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(b.value), 9, Sk)) : (t(), a("span", {
            key: 9,
            class: P([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(b.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: $[1] || ($[1] = (h) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : y("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: P(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("header", {
          class: P(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: $[2] || ($[2] = (h) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", Mk, [
            e.node.icon ? (t(), a("div", Bk, [
              (t(), a("svg", Ak, [
                l("path", {
                  d: g(ie)(e.node.icon)
                }, null, 8, zk)
              ]))
            ])) : y("", !0),
            l("div", _k, [
              l("div", Pk, [
                l("h3", Ok, f(e.node.label), 1),
                e.node.status ? (t(), T(he, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : y("", !0)
              ]),
              e.node.description ? (t(), a("p", jk, f(e.node.description), 1)) : y("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: P(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (h, v) => (t(), T(w, {
            key: v,
            node: h,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[3] || ($[3] = (c) => r("action", c))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: P(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), a(_, null, V(e.node.children ?? [], (h, v) => (t(), T(w, {
          key: v,
          node: h,
          record: e.record,
          depth: e.depth + 1,
          onAction: $[4] || ($[4] = (c) => r("action", c))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: P(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (h, v) => (t(), a("button", {
            key: v,
            type: "button",
            class: P([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (c) => i.value = v
          }, f(h.label), 11, Lk))), 128))
        ], 2),
        (t(!0), a(_, null, V(e.node.children ?? [], (h, v) => ue((t(), a("div", {
          key: v,
          class: P(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(_, null, V(h.children ?? [], (c, S) => (t(), T(w, {
            key: S,
            node: c,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (M) => r("action", M))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Te, i.value === v]
        ])), 128))
      ], 2)) : y("", !0);
    };
  }
}), Vk = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, Tk = { class: "text-muted-foreground text-sm" }, Dk = { class: "flex items-start gap-3" }, Ek = { class: "min-w-0 flex-1" }, Ik = { class: "flex flex-wrap items-center gap-2" }, Fk = { class: "truncate text-sm font-medium" }, Nk = { class: "text-muted-foreground mt-0.5 text-xs" }, Rk = { class: "text-muted-foreground text-xs" }, Uk = { class: "mt-auto flex items-center gap-2" }, Hk = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = k(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), a("div", Vk, [
      l("p", Tk, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      l("div", {
        class: P(g(Qd))
      }, [
        (t(!0), a(_, null, V(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          l("div", Dk, [
            l("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            l("div", Ek, [
              l("div", Ik, [
                l("h3", Fk, f(u.label), 1),
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
              l("p", Nk, f(u.caption), 1)
            ])
          ]),
          l("p", Rk, f(u.methods.join(" · ")), 1),
          l("div", Uk, [
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
    ]));
  }
}), qk = { class: "flex flex-col gap-6" }, Kk = { class: "relative" }, Gk = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Wk = ["d"], Zk = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Jk = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Yk = { class: "flex flex-wrap items-center gap-2" }, Xk = { class: "text-muted-foreground text-sm" }, Qk = { class: "flex flex-col gap-1 text-sm" }, e2 = ["value"], t2 = {
  key: 0,
  class: "flex flex-col gap-2"
}, a2 = { class: "flex flex-wrap items-center gap-2" }, n2 = {
  key: 1,
  class: "flex items-center gap-2"
}, e3 = /* @__PURE__ */ O({
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
    const o = Xe(e, "gateways"), n = K(null), r = K(""), s = k(
      () => o.value.find((C) => C.key === n.value) ?? null
    ), i = k(() => {
      const C = r.value.trim().toLowerCase();
      return C === "" ? o.value : o.value.filter(($) => [$.key, $.label, $.caption, ...$.methods].join(" ").toLowerCase().includes(C));
    });
    function d(C) {
      return C.connected && C.enabled !== !1;
    }
    function u(C, $) {
      o.value = o.value.map(
        (w) => w.key === C ? { ...w, ...$ } : w
      );
    }
    function m(C) {
      n.value = C;
    }
    function x(C) {
      const $ = o.value.find((h) => h.key === C);
      if (!$)
        return;
      const w = !$.connected;
      u(C, {
        connected: w,
        mode: w ? $.mode ?? "test" : null,
        enabled: w,
        isDefault: !1
      });
    }
    function p(C, $) {
      const w = o.value.find((h) => h.key === C);
      w?.connected && u(C, { enabled: $, isDefault: $ ? w.isDefault : !1 });
    }
    function b(C) {
      const $ = o.value.find((w) => w.key === C);
      !$ || !d($) || (o.value = o.value.map((w) => ({
        ...w,
        isDefault: w.key === C
      })));
    }
    function A(C) {
      const $ = n.value;
      !$ || !o.value.find((h) => h.key === $)?.connected || u($, { mode: C });
    }
    return (C, $) => (t(), a(_, null, [
      l("div", qk, [
        I(_e, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        l("div", Kk, [
          (t(), a("svg", Gk, [
            l("path", {
              d: g(ie)("search")
            }, null, 8, Wk)
          ])),
          I(ge, {
            modelValue: r.value,
            "onUpdate:modelValue": $[0] || ($[0] = (w) => r.value = w),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(Hk, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: x
        }, null, 8, ["gateways"])) : (t(), a("p", Zk, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      I(Nt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: $[8] || ($[8] = (w) => n.value = null)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            size: "sm",
            onClick: $[6] || ($[6] = (w) => n.value = null)
          }, {
            default: j(() => [...$[21] || ($[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(se, {
            key: 0,
            size: "sm",
            onClick: $[7] || ($[7] = (w) => x(s.value.key))
          }, {
            default: j(() => [
              U(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : y("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), a("div", Jk, [
            l("div", Yk, [
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
                default: j(() => [...$[9] || ($[9] = [
                  U(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(he, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...$[10] || ($[10] = [
                  U(" Disabled ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              s.value.isDefault ? (t(), T(he, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...$[11] || ($[11] = [
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
            l("p", Xk, f(s.value.caption), 1),
            l("label", Qk, [
              $[12] || ($[12] = U(" Display name ", -1)),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, e2)
            ]),
            $[20] || ($[20] = l("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", t2, [
              $[16] || ($[16] = l("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = l("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              l("div", a2, [
                I(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: $[1] || ($[1] = (w) => p(s.value.key, !0))
                }, {
                  default: j(() => [...$[13] || ($[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: $[2] || ($[2] = (w) => p(s.value.key, !1))
                }, {
                  default: j(() => [...$[14] || ($[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: $[3] || ($[3] = (w) => b(s.value.key))
                }, {
                  default: j(() => [...$[15] || ($[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : y("", !0),
            s.value.connected ? (t(), a("div", n2, [
              I(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: $[4] || ($[4] = (w) => A("test"))
              }, {
                default: j(() => [...$[18] || ($[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              I(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: $[5] || ($[5] = (w) => A("live"))
              }, {
                default: j(() => [...$[19] || ($[19] = [
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
function Qt(e) {
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
function t3(e) {
  const o = K(Qt(e));
  pe(() => {
    o.value = Qt(e);
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
function a3(e) {
  const { config: o, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = K(
    o.driver === "none" ? "off" : "connecting"
  ), m = K(/* @__PURE__ */ new Set());
  let x = /* @__PURE__ */ new Map(), p, b, A, C = (/* @__PURE__ */ new Date()).toISOString(), $ = null;
  function w(W, J) {
    x.set(W, { ...x.get(W) ?? {}, ...J }), !p && (p = setTimeout(() => {
      p = void 0, h();
    }, o.batchMs));
  }
  function h() {
    if (x.size === 0)
      return;
    const W = x;
    x = /* @__PURE__ */ new Map();
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
    S(), u.value = "live", b = setInterval(v, o.intervalMs);
  }
  function S() {
    clearInterval(b), b = void 0, A?.abort();
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
    $ = o.channel;
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
    $ && (M()?.leave($), $ = null);
  }
  function E() {
    o.driver === "poll" && c(), o.driver === "broadcast" && z();
  }
  function ee() {
    S(), R(), clearTimeout(p), p = void 0, x = /* @__PURE__ */ new Map();
  }
  function H() {
    o.pauseWhenHidden && (document.hidden ? (ee(), u.value = "paused") : (C = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return pe(() => {
    o.driver !== "none" && (E(), o.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), be(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: u, recentlyChanged: m, applyPatch: w, flush: h, pollOnce: v };
}
const l2 = /^[a-z0-9-]+$/, o2 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function n3(e) {
  Ta(() => {
    if (typeof document > "u")
      return;
    const o = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !l2.test(n) || typeof r != "string" || !o2.test(r) || (o[`--${n}`] = r);
    Yi(o);
  });
}
const s2 = { class: "flex items-center gap-0.5" }, r2 = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", s2, [
      String(e.value) === "mono" ? (t(), a(_, { key: 0 }, [
        n[0] || (n[0] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        n[1] || (n[1] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        n[2] || (n[2] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(_, { key: 1 }, [
        n[3] || (n[3] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        n[4] || (n[4] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        n[5] || (n[5] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), i2 = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), T($a, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), d2 = { class: "flex flex-col gap-2" }, u2 = { class: "bg-card rounded-lg border p-4" }, c2 = { class: "text-muted-foreground truncate text-xs" }, f2 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, m2 = /* @__PURE__ */ O({
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
    }, r = k(() => ({ ...n, ...o.field.limits ?? {} })), s = k(
      () => String(o.values[o.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = k(
      () => String(o.values[o.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = k(
      () => String(o.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = k(() => {
      const $ = String(o.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return $ === "" ? d.value : `${d.value} › ${$.split("/").join(" › ")}`;
    });
    function m($, w) {
      return $.length <= w ? $ : `${$.slice(0, w - 1).trimEnd()}…`;
    }
    const x = k(() => m(s.value, r.value.titleMax)), p = k(() => m(i.value, r.value.descriptionMax));
    function b($, w, h) {
      return $ === 0 ? { tone: "text-muted-foreground", note: "empty" } : $ > h ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : $ < w ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const A = k(
      () => b(s.value.length, r.value.titleMin, r.value.titleMax)
    ), C = k(
      () => b(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return ($, w) => (t(), a("div", d2, [
      l("div", u2, [
        l("p", c2, f(u.value), 1),
        l("p", {
          class: P(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", x.value === "" ? "text-muted-foreground italic" : ""])
        }, f(x.value || "Untitled page"), 3),
        l("p", {
          class: P(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      l("div", f2, [
        l("span", {
          class: P(A.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(A.value.note), 3),
        l("span", {
          class: P(C.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(C.value.note), 3)
      ]),
      w[0] || (w[0] = l("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function p2() {
  Me("radio", _c), Me("checkboxlist", jc), Me("tags", Fc), Me("colour", Xc), Me("slider", lf), Me("visual-select", bf), Me("markdown", dc), Me("code", gc), Me("seo-preview", m2), gt("swatch", yf), gt("voucher-code-box", i2), gt("document-colour-mode", r2);
}
function Sa() {
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
const v2 = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: o, shown: n } = Sa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: P(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", g(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), g2 = ["id"], Se = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (o, n) => (t(), a("section", {
      id: e.id,
      class: P(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      l("div", {
        class: P(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        I(v2, null, {
          default: j(() => [
            q(o.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, g2));
  }
}), h2 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, b2 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, x2 = {
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
      class: P(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", h2, f(e.eyebrow), 1)) : y("", !0),
      e.title ? (t(), a("h2", b2, f(e.title), 1)) : y("", !0),
      e.body ? (t(), a("p", x2, f(e.body), 1)) : y("", !0)
    ], 2)) : y("", !0);
  }
});
function y2() {
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
const k2 = { class: "pk-tilt-inner relative h-full" }, $2 = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: o } = y2();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: "pk-tilt group/tilt"
    }, [
      l("div", k2, [
        r[0] || (r[0] = l("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(n.$slots, "default")
      ])
    ], 512));
  }
}), w2 = { class: "flex flex-col gap-10" }, C2 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, S2 = { class: "text-base font-semibold" }, M2 = { class: "text-sm text-pretty text-muted-foreground" }, B2 = /* @__PURE__ */ O({
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
        l("div", w2, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", C2, [
            (t(!0), a(_, null, V(e.items ?? [], (s, i) => (t(), T($2, {
              key: i,
              class: P(o(s.span))
            }, {
              default: j(() => [
                l("div", {
                  class: P([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  l("h3", S2, f(s.title), 1),
                  l("p", M2, f(s.body), 1)
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
}), A2 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, z2 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, _2 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, P2 = ["href"], O2 = /* @__PURE__ */ O({
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
        l("div", A2, [
          l("h2", z2, f(e.title), 1),
          e.body ? (t(), a("p", _2, f(e.body), 1)) : y("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, P2)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), j2 = { class: "flex flex-col gap-8" }, L2 = { class: "divide-y rounded-lg border" }, V2 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, T2 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, D2 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, { narrow: "" }, {
      default: j(() => [
        l("div", j2, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", L2, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              l("summary", V2, [
                U(f(r.question) + " ", 1),
                n[0] || (n[0] = l("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              l("p", T2, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), E2 = { class: "flex flex-col gap-10" }, I2 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, F2 = { class: "text-sm font-semibold" }, N2 = { class: "text-sm text-pretty text-muted-foreground" }, R2 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", E2, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", I2, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("h3", F2, f(r.title), 1),
              l("p", N2, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), U2 = { class: "flex flex-col items-center gap-6 text-center" }, H2 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, q2 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, K2 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, G2 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, W2 = ["href"], Z2 = ["href"], J2 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, Y2 = /* @__PURE__ */ O({
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
        l("div", U2, [
          e.eyebrow ? (t(), a("p", H2, f(e.eyebrow), 1)) : y("", !0),
          l("h1", q2, f(e.title), 1),
          e.body ? (t(), a("p", K2, f(e.body), 1)) : y("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", G2, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, W2)) : y("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, Z2)) : y("", !0)
          ])) : y("", !0),
          e.note ? (t(), a("p", J2, f(e.note), 1)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), X2 = { class: "flex flex-col items-center gap-6" }, Q2 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, e$ = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, t$ = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        l("div", X2, [
          e.title ? (t(), a("p", Q2, f(e.title), 1)) : y("", !0),
          l("ul", e$, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), a$ = { class: "flex flex-col gap-10" }, n$ = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, l$ = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, o$ = ["aria-pressed"], s$ = ["aria-pressed"], r$ = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, i$ = { class: "grid gap-4 md:grid-cols-3" }, d$ = { class: "flex flex-col gap-1" }, u$ = { class: "text-sm font-semibold" }, c$ = { class: "flex items-baseline gap-1" }, f$ = { class: "text-3xl font-semibold tracking-tight" }, m$ = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, p$ = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, v$ = { class: "flex flex-col gap-2 text-sm" }, g$ = { class: "text-muted-foreground" }, h$ = ["href"], b$ = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const o = e, n = K(!1), r = k(() => (o.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        l("div", a$, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", n$, [
            l("div", l$, [
              l("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, o$),
              l("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, s$)
            ]),
            e.annualNote ? (t(), a("p", r$, f(e.annualNote), 1)) : y("", !0)
          ])) : y("", !0),
          l("ul", i$, [
            (t(!0), a(_, null, V(e.items ?? [], (u, m) => (t(), a("li", {
              key: m,
              class: P(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              l("div", d$, [
                l("h3", u$, f(u.name), 1),
                l("p", c$, [
                  l("span", f$, f(s(u)), 1),
                  u.period ? (t(), a("span", m$, f(u.period), 1)) : y("", !0)
                ]),
                u.body ? (t(), a("p", p$, f(u.body), 1)) : y("", !0)
              ]),
              l("ul", v$, [
                (t(!0), a(_, null, V(u.features ?? [], (x, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = l("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  l("span", g$, f(x.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: P([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, h$)) : y("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function x$() {
  const e = K(null);
  let o = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !o || !s)
      return;
    const u = o.getBoundingClientRect(), m = u.height + window.innerHeight, x = m <= 0 ? 0 : (window.innerHeight - u.top) / m;
    o.style.setProperty("--pk-progress", String(Math.min(Math.max(x, 0), 1)));
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
        s = m.some((x) => x.isIntersecting), s && d();
      }), n.observe(o), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), be(() => {
    n?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const y$ = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, k$ = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, $$ = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, w$ = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, C$ = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, S$ = { class: "pk-showcase-stage w-full [perspective:1400px]" }, M$ = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, B$ = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, A$ = { class: "ml-3 truncate text-xs text-muted-foreground" }, z$ = { class: "flex" }, _$ = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, P$ = { class: "min-w-0 flex-1 p-4" }, O$ = { class: "flex flex-col divide-y rounded-md border" }, j$ = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: o } = x$();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: o,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      l("div", y$, [
        l("div", k$, [
          l("div", $$, [
            l("h2", w$, f(e.title), 1),
            e.body ? (t(), a("p", C$, f(e.body), 1)) : y("", !0)
          ]),
          l("div", S$, [
            l("div", M$, [
              l("div", B$, [
                r[0] || (r[0] = l("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = l("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = l("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                l("span", A$, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              l("div", z$, [
                l("div", _$, [
                  (t(), a(_, null, V(6, (s) => l("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                l("div", P$, [
                  r[4] || (r[4] = l("div", { class: "mb-3 flex gap-2" }, [
                    l("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  l("div", O$, [
                    (t(!0), a(_, null, V(e.rows, (s) => (t(), a("div", {
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
}), L$ = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const o = e, { el: n, shown: r } = Sa(), s = K(0);
    return ce(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = o.to;
        return;
      }
      const u = performance.now(), m = (x) => {
        const p = Math.min((x - u) / o.duration, 1);
        s.value = o.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = o.to;
      };
      requestAnimationFrame(m);
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), V$ = { class: "flex flex-col gap-10" }, T$ = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, D$ = { class: "order-2 text-sm text-muted-foreground" }, E$ = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, I$ = /* @__PURE__ */ O({
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
        l("div", V$, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("dl", T$, [
            (t(!0), a(_, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              l("dt", D$, f(s.label), 1),
              l("dd", E$, [
                o(s.value) ? (t(), T(L$, {
                  key: 0,
                  to: o(s.value).number,
                  prefix: o(s.value).prefix,
                  suffix: o(s.value).suffix,
                  decimals: o(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(_, { key: 1 }, [
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
}), F$ = { class: "flex flex-col gap-10" }, N$ = { class: "grid gap-6 md:grid-cols-3" }, R$ = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, U$ = { class: "text-sm font-semibold" }, H$ = { class: "text-sm text-pretty text-muted-foreground" }, q$ = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", F$, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ol", N$, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              l("span", R$, f(s + 1), 1),
              l("h3", U$, f(r.title), 1),
              l("p", H$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), K$ = { class: "flex flex-col gap-10" }, G$ = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, W$ = { class: "text-pretty text-sm leading-relaxed" }, Z$ = { class: "mt-auto flex items-center gap-3" }, J$ = ["src"], Y$ = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, X$ = { class: "min-w-0" }, Q$ = { class: "block truncate text-sm font-medium" }, ew = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, tw = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", K$, [
          I(Ee, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", G$, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("blockquote", W$, " “" + f(r.quote) + "” ", 1),
              l("figcaption", Z$, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, J$)) : (t(), a("span", Y$, f((r.name ?? "?").slice(0, 1)), 1)),
                l("span", X$, [
                  l("span", Q$, f(r.name), 1),
                  r.role ? (t(), a("span", ew, f(r.role), 1)) : y("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), l3 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const n = e, r = {
      hero: Y2,
      logos: t$,
      features: R2,
      bento: B2,
      showcase: j$,
      steps: q$,
      stats: I$,
      testimonials: tw,
      pricing: b$,
      faq: D2,
      cta: O2
    }, s = k(
      () => (n.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return o({ known: Object.keys(r) }), (i, d) => (t(!0), a(_, null, V(s.value, (u) => (t(), T(xe(u.component), le({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), aw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, o3 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", aw, [
      l("div", {
        class: P([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      l("div", {
        class: P([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      l("div", {
        class: P([
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
}), nw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, s3 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", nw, [...n[0] || (n[0] = [
      Mt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), lw = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, r3 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", lw, [...n[0] || (n[0] = [
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
p2();
const i3 = "0.0.1";
export {
  z5 as AdminDirectory,
  Kd as Alert,
  Gd as AlertDescription,
  Wd as AlertTitle,
  v5 as AppPageFooter,
  Ow as AppearanceDrawer,
  P4 as Avatar,
  O4 as AvatarFallback,
  j4 as AvatarImage,
  Vt as BADGE_VARIANTS,
  Aw as BadgeResolver,
  $5 as BarChart,
  L4 as Breadcrumb,
  V4 as BreadcrumbEllipsis,
  T4 as BreadcrumbItem,
  D4 as BreadcrumbLink,
  E4 as BreadcrumbList,
  I4 as BreadcrumbPage,
  F4 as BreadcrumbSeparator,
  pw as BulkActions,
  Qd as CATALOGUE_GRID,
  Iw as CATALOGUE_GRID_TIGHT,
  eu as CATALOGUE_GRID_TILES,
  o5 as Card,
  s5 as CardAction,
  r5 as CardContent,
  i5 as CardDescription,
  d5 as CardFooter,
  u5 as CardHeader,
  c5 as CardTitle,
  Sb as CartPanel,
  E5 as CatalogBrowser,
  Jg as CatalogCard,
  Ca as CatalogFilterSheet,
  Ft as CatalogGrid,
  T5 as CatalogInspect,
  px as CatalogItemDetail,
  D5 as CatalogItemView,
  I5 as CatalogRegister,
  V5 as CatalogTill,
  kv as ChartCard,
  tt as ChartTooltip,
  Uo as Checkbox,
  ww as CheckboxCell,
  Cw as CodeCell,
  Qr as ColourCell,
  B5 as ComboChart,
  Ro as CreateOptionDialog,
  zo as CreateOptionError,
  N5 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Zx as DASHBOARD_HIDE_KEY,
  R5 as DashboardShortcuts,
  wl as DataTable,
  W4 as Dialog,
  Z4 as DialogClose,
  J4 as DialogContent,
  Y4 as DialogDescription,
  X4 as DialogFooter,
  Q4 as DialogHeader,
  Pu as DialogOverlay,
  e5 as DialogScrollContent,
  t5 as DialogTitle,
  a5 as DialogTrigger,
  z5 as DirectoryPage,
  h4 as DropdownMenu,
  b4 as DropdownMenuCheckboxItem,
  x4 as DropdownMenuContent,
  y4 as DropdownMenuGroup,
  k4 as DropdownMenuItem,
  $4 as DropdownMenuLabel,
  c3 as DropdownMenuPortal,
  w4 as DropdownMenuRadioGroup,
  C4 as DropdownMenuRadioItem,
  S4 as DropdownMenuSeparator,
  M4 as DropdownMenuShortcut,
  B4 as DropdownMenuSub,
  A4 as DropdownMenuSubContent,
  z4 as DropdownMenuSubTrigger,
  _4 as DropdownMenuTrigger,
  Mw as EditableCell,
  Be as FOCUS_RING,
  yw as FOCUS_RING_SOFT,
  Ht as FOCUS_RING_WITHIN,
  Rw as FORM_MEASURE,
  Re as FormFieldControl,
  A5 as HeatmapChart,
  mt as ICON_PATHS,
  qr as IconCell,
  Wr as ImageCell,
  Q5 as InfoNode,
  au as JPEG_IMAGE_ERROR,
  Sw as KeyValueCell,
  n5 as Label,
  Em as LineChart,
  ob as LineItems,
  rt as MiniStatCard,
  N4 as NavigationMenu,
  R4 as NavigationMenuContent,
  U4 as NavigationMenuIndicator,
  H4 as NavigationMenuItem,
  q4 as NavigationMenuLink,
  K4 as NavigationMenuList,
  G4 as NavigationMenuTrigger,
  zu as NavigationMenuViewport,
  tu as OPAQUE_IMAGE_ERROR,
  De as PAGE_SHELL,
  Fw as PAGE_SHELL_COMPACT,
  Nw as PAGE_SHELL_STACK,
  e3 as PaymentGatewaySettings,
  Hk as PaymentGateways,
  w5 as PieChart,
  Dw as PkAlertError,
  o3 as PkAuroraBackdrop,
  We as PkBadge,
  B2 as PkBento,
  jw as PkBottomNav,
  f5 as PkBoundary,
  b5 as PkBuilder,
  se as PkButton,
  m5 as PkCard,
  jc as PkCheckboxList,
  $a as PkCodeBox,
  gc as PkCodeInput,
  Xc as PkColourPicker,
  r3 as PkConsoleBackdrop,
  L$ as PkCountUp,
  O2 as PkCta,
  g5 as PkDeviceFrame,
  Yf as PkDocument,
  Ne as PkDropdown,
  s3 as PkEditorialBackdrop,
  yt as PkEmptyState,
  D2 as PkFaq,
  R2 as PkFeatureGrid,
  ke as PkFieldLabel,
  fa as PkFileUpload,
  _e as PkHeading,
  Y2 as PkHero,
  hs as PkKeyValue,
  l3 as PkLandingSections,
  t$ as PkLogoCloud,
  dc as PkMarkdownInput,
  Ye as PkModal,
  Lt as PkMultiSelect,
  Vw as PkOtpInput,
  Tw as PkPageHeader,
  Z5 as PkPasskeyRegister,
  Ew as PkPasswordInput,
  b$ as PkPricing,
  W1 as PkQtyStepper,
  gi as PkQueryBuilder,
  _c as PkRadioGroup,
  h5 as PkRepeater,
  v2 as PkReveal,
  Bs as PkRichEditor,
  Se as PkSection,
  Ee as PkSectionHeading,
  j$ as PkShowcase,
  zx as PkSignaturePad,
  $e as PkSkeleton,
  Nt as PkSlideover,
  lf as PkSlider,
  Lw as PkSpinner,
  I$ as PkStats,
  he as PkStatusBadge,
  Bo as PkStepIndicator,
  q$ as PkSteps,
  yf as PkSwatchPreview,
  Fc as PkTagsInput,
  tw as PkTestimonials,
  ge as PkTextInput,
  $2 as PkTiltCard,
  bf as PkVisualSelect,
  wh as PlanCard,
  L5 as PlanEditor,
  j5 as PlanGrid,
  M5 as PolarAreaChart,
  S5 as RadarChart,
  zw as RecordActions,
  J5 as RecordForm,
  $w as RelationCreateDialog,
  vw as RelationPanel,
  Bg as STATUS_TONES,
  C5 as ScatterChart,
  ma as SchemaNode,
  P5 as SegmentedBar,
  q5 as SelectionBar,
  Cu as Separator,
  H5 as SetupChecklist,
  ha as ShadcnInput,
  Et as Sheet,
  Hw as SheetClose,
  It as SheetContent,
  du as SheetDescription,
  qw as SheetFooter,
  uu as SheetHeader,
  cu as SheetTitle,
  Kw as SheetTrigger,
  Fv as ShortcutsWidget,
  Gw as Sidebar,
  Ww as SidebarContent,
  Zw as SidebarFooter,
  Jw as SidebarGroup,
  Yw as SidebarGroupAction,
  Xw as SidebarGroupContent,
  Qw as SidebarGroupLabel,
  e4 as SidebarHeader,
  t4 as SidebarInput,
  a4 as SidebarInset,
  n4 as SidebarMenu,
  l4 as SidebarMenuAction,
  o4 as SidebarMenuBadge,
  r4 as SidebarMenuButton,
  i4 as SidebarMenuItem,
  d4 as SidebarMenuSkeleton,
  u4 as SidebarMenuSub,
  c4 as SidebarMenuSubButton,
  f4 as SidebarMenuSubItem,
  m4 as SidebarProvider,
  p4 as SidebarRail,
  v4 as SidebarSeparator,
  g4 as SidebarTrigger,
  F5 as SignatureStudio,
  ut as Sparkline,
  l5 as Spinner,
  _5 as StatCard,
  O5 as StatListChart,
  U5 as StatStrip,
  Fe as Switch,
  ba as TRANSPARENT_IMAGE_HELP,
  K5 as TablePagination,
  to as TableShell,
  G5 as TableTabs,
  W5 as TableToolbar,
  k5 as ThemeToggle,
  ku as Tooltip,
  $u as TooltipContent,
  s4 as TooltipProvider,
  wu as TooltipTrigger,
  wa as TrendBadge,
  Y5 as UnsavedBar,
  Zd as alertVariants,
  Ji as appearanceVars,
  Ct as applyAppearance,
  ru as assertTransparentImage,
  Ge as buttonClasses,
  it as catalogFiltersActive,
  Q as cn,
  Po as createOptionActionLabel,
  _o as createOptionTitle,
  Yg as cycleLabel,
  Pe as emptyCatalogFilters,
  Ao as fieldControl,
  xw as fieldErrorsFromPayload,
  P1 as findExactSku,
  Xg as formatPerkValue,
  Si as hasBadgeValue,
  gw as hasFieldControl,
  x5 as hasOptionPreview,
  ie as iconPath,
  ou as imageHasTransparency,
  _w as initializeAppearance,
  wt as isDark,
  Rt as matchCatalogItem,
  _u as navigationMenuTriggerStyle,
  of as optionPreview,
  Uw as packWidgetColumns,
  Qg as perkGranted,
  Dt as readAppearance,
  p2 as registerBuiltInFieldControls,
  Me as registerFieldControl,
  gt as registerOptionPreview,
  hw as registeredFieldTypes,
  sf as registeredOptionPreviews,
  bw as resetFieldControls,
  y5 as resetOptionPreviews,
  Pw as setAppearancePersister,
  Su as sidebarMenuButtonVariants,
  Pg as statusBadgeVariant,
  _g as statusTone,
  kw as toUrl,
  ga as useAppearance,
  t3 as useColumnVisibility,
  a3 as useLiveUpdates,
  y2 as usePointer,
  Sa as useReveal,
  Bw as useSchemaColumns,
  x$ as useScrollProgress,
  p5 as useShellPageFooter,
  dt as useSidebar,
  n3 as useTenantTheme,
  X5 as useUnsavedChanges,
  i3 as version
};
//# sourceMappingURL=index.js.map
