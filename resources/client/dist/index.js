import './ui.css';
import { defineComponent as O, openBlock as t, createElementBlock as a, normalizeClass as _, createElementVNode as l, renderSlot as q, unref as x, toDisplayString as f, createCommentVNode as y, computed as k, normalizeStyle as ne, Fragment as P, renderList as V, ref as K, watch as fe, useId as Ba, withModifiers as me, createTextVNode as U, createVNode as I, createStaticVNode as St, createBlock as T, createSlots as We, withCtx as j, nextTick as Ae, onBeforeUnmount as be, Teleport as Re, Transition as Le, onMounted as pe, useSlots as Xt, resolveDynamicComponent as xe, mergeProps as oe, withDirectives as ce, vModelText as ye, normalizeProps as we, guardReactiveProps as Oe, defineAsyncComponent as Rt, inject as nt, resolveComponent as Mt, vShow as Ve, vModelSelect as Ee, vModelDynamic as Aa, isRef as za, useTemplateRef as Pa, onErrorCaptured as _a, provide as bt, markRaw as Qt, withKeys as Oa, reactive as Ze, useModel as Ye, mergeModels as _e, shallowRef as ja, watchEffect as La } from "vue";
import { Check as ea, AlertCircle as Va, EyeOff as Ta, Eye as Da, X as Bt, PanelLeftOpen as Ea, PanelLeftClose as Ia, Circle as Fa, ChevronRight as ta, MoreHorizontal as Na, ChevronDown as Ra, Loader2Icon as Ua } from "@lucide/vue";
import { reactiveOmit as ie, useVModel as aa, useMediaQuery as Ha, useEventListener as qa, defaultDocument as Ka } from "@vueuse/core";
import { useForwardPropsEmits as ve, CheckboxRoot as Ga, CheckboxIndicator as Wa, SwitchRoot as Za, SwitchThumb as Ja, DialogRoot as na, DialogClose as Ue, DialogOverlay as At, DialogPortal as zt, DialogContent as Pt, DialogDescription as la, DialogTitle as oa, DialogTrigger as sa, createContext as Ya, Primitive as He, TooltipRoot as Xa, TooltipPortal as Qa, TooltipContent as en, TooltipArrow as tn, TooltipProvider as ra, TooltipTrigger as an, Separator as nn, DropdownMenuRoot as ln, DropdownMenuCheckboxItem as on, DropdownMenuItemIndicator as ia, DropdownMenuPortal as sn, DropdownMenuContent as rn, DropdownMenuGroup as dn, useForwardProps as Ce, DropdownMenuItem as un, DropdownMenuLabel as cn, DropdownMenuRadioGroup as fn, DropdownMenuRadioItem as mn, DropdownMenuSeparator as pn, DropdownMenuSub as vn, DropdownMenuSubContent as gn, DropdownMenuSubTrigger as hn, DropdownMenuTrigger as bn, AvatarRoot as xn, AvatarFallback as yn, AvatarImage as kn, NavigationMenuViewport as $n, NavigationMenuRoot as wn, NavigationMenuContent as Cn, NavigationMenuIndicator as Sn, NavigationMenuItem as Mn, NavigationMenuLink as Bn, NavigationMenuList as An, NavigationMenuTrigger as zn, Label as Pn } from "reka-ui";
import { DropdownMenuPortal as n3 } from "reka-ui";
import { clsx as _n } from "clsx";
import { twMerge as On } from "tailwind-merge";
import { cva as _t } from "class-variance-authority";
import { usePage as da, Link as jn } from "@inertiajs/vue3";
const ft = {
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
  return e ? ft[e] ?? ft.dot : ft.dot;
}
const Ln = ["d"], Vn = { class: "flex max-w-sm flex-col gap-1" }, Tn = {
  key: 0,
  class: "text-sm"
}, Dn = {
  key: 0,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, xt = /* @__PURE__ */ O({
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
      class: _(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      l("div", {
        class: _(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
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
            class: _(e.compact ? "size-5" : "size-6")
          }, [
            l("path", {
              d: x(de)(e.icon)
            }, null, 8, Ln)
          ], 2))
        ])
      ], 2),
      l("div", Vn, [
        l("p", {
          class: _(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), a("p", Tn, f(e.description), 1)) : y("", !0)
      ]),
      o.$slots.actions ? (t(), a("div", Dn, [
        q(o.$slots, "actions")
      ])) : y("", !0)
    ], 2));
  }
}), En = ["aria-label"], $e = /* @__PURE__ */ O({
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
      (t(!0), a(P, null, V(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: _(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, En));
  }
}), In = { class: "w-full border-collapse text-sm" }, Fn = { class: "bg-background sticky top-0 z-10" }, Nn = { class: "bg-muted/50" }, Rn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Un = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Hn = ["id", "checked", "indeterminate"], qn = ["onClick"], Kn = {
  key: 0,
  class: "text-xs"
}, Gn = {
  key: 1,
  class: "text-xs opacity-40"
}, Wn = { key: 1 }, Zn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Jn = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Yn = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, Xn = {
  key: 1,
  class: "px-3 py-2.5"
}, Qn = {
  key: 2,
  class: "px-2 py-2.5"
}, el = {
  key: 0,
  class: "bg-muted/40"
}, tl = ["colspan"], al = ["aria-expanded", "dusk", "onClick"], nl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, ll = {
  key: 1,
  dusk: "group-header"
}, ol = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], sl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, rl = {
  key: 1,
  class: "px-3 py-2"
}, il = ["id", "value", "checked", "disabled", "aria-label", "onClick"], dl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, ul = ["aria-label", "onClick"], cl = { class: "text-xs" }, fl = { key: 1 }, ml = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, pl = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, vl = { key: 0 }, gl = { class: "text-muted-foreground block text-[10px] font-medium" }, hl = { class: "font-semibold tabular-nums" }, bl = { key: 1 }, xl = /* @__PURE__ */ O({
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
    framed: { type: Boolean, default: !0 }
  },
  emits: ["sort", "toggle-row", "toggle-page", "reorder", "row-contextmenu", "row-click"],
  setup(e, { emit: o }) {
    const n = e;
    function r(F) {
      if (!F || !n.groupBy)
        return "";
      if (F.__group !== void 0 && F.__group !== null)
        return String(F.__group);
      const E = F[n.groupBy.key];
      return E == null || E === "" ? "" : String(E);
    }
    function s(F) {
      return n.groupBy ? F === 0 ? !0 : r(n.rows[F]) !== r(n.rows[F - 1]) : !1;
    }
    function i(F) {
      if (F.__groupTitle)
        return String(F.__groupTitle);
      const E = n.groupBy ? F[n.groupBy.key] : null, X = E == null || E === "" ? "None" : String(E);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? X : `${n.groupBy.label}: ${X}`;
    }
    const d = K(/* @__PURE__ */ new Set()), u = K(/* @__PURE__ */ new Set());
    function m(F) {
      return n.groupBy?.collapsible ? d.value.has(F) : !1;
    }
    function b(F) {
      if (!n.groupBy?.collapsible)
        return;
      const E = new Set(u.value);
      E.add(F), u.value = E;
      const X = new Set(d.value);
      X.has(F) ? X.delete(F) : X.add(F), d.value = X;
    }
    function p(F) {
      return n.groupBy?.collapsible ? !m(r(n.rows[F])) : !0;
    }
    fe(
      () => n.rows,
      (F) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const E = new Set(d.value);
        for (const X of F) {
          const ue = r(X);
          ue !== "" && !u.value.has(ue) && E.add(ue);
        }
        d.value = E;
      },
      { immediate: !0 }
    );
    const h = K(null), A = K(null);
    function C(F, E) {
      h.value = F, E.dataTransfer?.setData("text/plain", String(F)), E.dataTransfer && (E.dataTransfer.effectAllowed = "move");
    }
    function $() {
      h.value = null, A.value = null;
    }
    function w(F) {
      return h.value === null || A.value !== F ? "" : h.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function g(F, E) {
      h.value !== null && (E.preventDefault(), A.value = F);
    }
    function v(F) {
      const E = h.value;
      if (h.value = null, A.value = null, E === null || E === F)
        return;
      const X = n.rows.map((re) => re[n.rowKey]), [ue] = X.splice(E, 1);
      X.splice(F, 0, ue), c("reorder", X);
    }
    const c = o;
    function S(F, E) {
      !n.rowClickable || n.reordering || E.button !== 0 || E.metaKey || E.ctrlKey || E.shiftKey || E.altKey || E.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", F);
    }
    const M = K(null), z = Ba(), R = k(() => n.columns.filter((F) => !n.hidden?.has(F.key)));
    function D(F) {
      const E = F[n.rowKey];
      return E == null || E === "" ? null : E;
    }
    function ee(F) {
      const E = D(F);
      return E !== null && !!n.selected?.has(E);
    }
    const H = K(null);
    function G(F) {
      return n.rows.findIndex((E) => {
        const X = D(E);
        return X !== null && X === F;
      });
    }
    function Z(F, E) {
      const X = D(F);
      if (X === null)
        return;
      const ue = E.shiftKey, re = !!n.selected?.has(X);
      if (ue && H.value !== null && H.value !== X) {
        const tt = G(H.value), ut = G(X);
        if (tt !== -1 && ut !== -1) {
          const Ca = Math.min(tt, ut), Sa = Math.max(tt, ut), Ma = !re;
          for (let at = Ca; at <= Sa; at++) {
            if (!p(at))
              continue;
            const ct = D(n.rows[at]);
            if (ct === null)
              continue;
            !!n.selected?.has(ct) !== Ma && c("toggle-row", ct);
          }
          H.value = X;
          return;
        }
      }
      c("toggle-row", X), H.value = X;
    }
    const ae = k(
      () => n.rows.map((F) => D(F)).filter((F) => F !== null)
    ), te = k(
      () => ae.value.length > 0 && ae.value.every((F) => n.selected?.has(F))
    ), J = k(
      () => !te.value && ae.value.some((F) => n.selected?.has(F))
    );
    function W(F) {
      return F.sortKey ?? F.key;
    }
    function B(F) {
      return n.sort === W(F);
    }
    async function N(F, E, X) {
      try {
        await navigator.clipboard.writeText(String(X)), M.value = `${F}-${E.key}`, setTimeout(() => M.value = null, 1200);
      } catch {
      }
    }
    const L = k(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function Y(F) {
      return n.summaries?.[F] ?? null;
    }
    function le(F) {
      const E = n.summaries?.[F], X = n.summaryValues?.[F];
      if (!E)
        return "";
      if (X == null)
        return "-";
      const ue = E.divideBy ? X / E.divideBy : X, re = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: E.decimals,
        maximumFractionDigits: E.decimals
      }).format(ue);
      return `${E.prefix ?? ""}${re}${E.suffix ?? ""}`;
    }
    return (F, E) => (t(), a("div", {
      class: _(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      l("table", In, [
        l("thead", Fn, [
          l("tr", Nn, [
            e.reordering ? (t(), a("th", Rn)) : y("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Un, [
              l("input", {
                id: `${x(z)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: te.value,
                indeterminate: J.value,
                "aria-label": "Select all rows on this page",
                onClick: E[0] || (E[0] = me(() => {
                }, ["stop"])),
                onChange: E[1] || (E[1] = me((X) => c("toggle-page", !te.value), ["stop"]))
              }, null, 40, Hn)
            ])) : y("", !0),
            (t(!0), a(P, null, V(R.value, (X) => (t(), a("th", {
              key: X.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              X.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ue) => c("sort", W(X))
              }, [
                U(f(X.label) + " ", 1),
                B(X) ? (t(), a("span", Kn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Gn, "↕"))
              ], 8, qn)) : (t(), a("span", Wn, f(X.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), a("th", Zn, [...E[2] || (E[2] = [
              l("span", { class: "sr-only" }, "Actions", -1)
            ])])) : y("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", Jn, [
          (t(), a(P, null, V(6, (X) => l("tr", {
            key: `skel-${X}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", Yn, [
              I($e, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : y("", !0),
            e.selectable && !e.reordering ? (t(), a("td", Xn, [
              I($e, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : y("", !0),
            (t(!0), a(P, null, V(R.value, (ue) => (t(), a("td", {
              key: ue.key,
              class: "px-3 py-2.5"
            }, [
              I($e, { variant: "text" })
            ]))), 128)),
            F.$slots.actions ? (t(), a("td", Qn, [
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
          (t(!0), a(P, null, V(e.rows, (X, ue) => (t(), a(P, {
            key: D(X) ?? `row-${ue}`
          }, [
            e.groupBy && s(ue) ? (t(), a("tr", el, [
              l("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !m(r(X)),
                  dusk: `group-header-${r(X) || "none"}`,
                  onClick: (re) => b(r(X))
                }, [
                  l("span", nl, f(m(r(X)) ? "▸" : "▾"), 1),
                  U(" " + f(i(X)), 1)
                ], 8, al)) : (t(), a("span", ll, f(i(X)), 1))
              ], 8, tl)
            ])) : y("", !0),
            p(ue) ? (t(), a("tr", {
              key: 1,
              class: _(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                ee(X) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                h.value === ue ? "opacity-40" : "",
                w(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (re) => C(ue, re),
              onDragover: (re) => g(ue, re),
              onDrop: me((re) => v(ue), ["prevent"]),
              onDragend: $,
              onContextmenu: (re) => c("row-contextmenu", X, re),
              onClick: (re) => S(X, re)
            }, [
              e.reordering ? (t(), a("td", sl, [...E[3] || (E[3] = [
                St('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-bbbbb352><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-bbbbb352><circle cx="9" cy="6" r="1.5" data-v-bbbbb352></circle><circle cx="15" cy="6" r="1.5" data-v-bbbbb352></circle><circle cx="9" cy="12" r="1.5" data-v-bbbbb352></circle><circle cx="15" cy="12" r="1.5" data-v-bbbbb352></circle><circle cx="9" cy="18" r="1.5" data-v-bbbbb352></circle><circle cx="15" cy="18" r="1.5" data-v-bbbbb352></circle></svg></span>', 1)
              ])])) : y("", !0),
              e.selectable && !e.reordering ? (t(), a("td", rl, [
                l("input", {
                  id: `${x(z)}-row-${D(X) ?? ue}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: D(X) ?? void 0,
                  checked: ee(X),
                  disabled: D(X) === null,
                  "aria-label": D(X) === null ? "This row has no id and cannot be selected" : `Select row ${D(X)}`,
                  onClick: me((re) => Z(X, re), ["stop"])
                }, null, 8, il)
              ])) : y("", !0),
              (t(!0), a(P, null, V(R.value, (re) => (t(), a("td", {
                key: re.key,
                class: _(["px-3 py-2 whitespace-nowrap", re.cellClass])
              }, [
                q(F.$slots, `cell:${re.key}`, {
                  row: X,
                  value: X[re.key],
                  column: re
                }, () => [
                  re.copyable ? (t(), a("span", dl, [
                    U(f(X[re.key]) + " ", 1),
                    l("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${re.label.toLowerCase()}`,
                      onClick: (tt) => N(String(X[e.rowKey]), re, X[re.key])
                    }, [
                      l("span", cl, f(M.value === `${X[e.rowKey]}-${re.key}` ? "✓" : "⧉"), 1)
                    ], 8, ul)
                  ])) : (t(), a("span", fl, f(X[re.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              F.$slots.actions ? (t(), a("td", ml, [
                q(F.$slots, "actions", { row: X }, void 0, !0)
              ])) : y("", !0)
            ], 42, ol)) : y("", !0)
          ], 64))), 128))
        ], 2)),
        L.value ? (t(), a("tfoot", pl, [
          l("tr", null, [
            e.selectable ? (t(), a("td", vl)) : y("", !0),
            (t(!0), a(P, null, V(e.columns, (X) => (t(), a(P, {
              key: `s-${X.key}`
            }, [
              e.hidden?.has(X.key) ? y("", !0) : (t(), a("td", {
                key: 0,
                class: _(["px-3 py-2 align-top text-sm whitespace-nowrap", X.cellClass])
              }, [
                Y(X.key) ? (t(), a(P, { key: 0 }, [
                  l("span", gl, f(Y(X.key).label), 1),
                  l("span", hl, f(le(X.key)), 1)
                ], 64)) : y("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), a("td", bl)) : y("", !0)
          ])
        ])) : y("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(xt, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, We({ _: 2 }, [
        F.$slots["clear-filters"] ? {
          name: "actions",
          fn: j(() => [
            q(F.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(xt, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, We({ _: 2 }, [
        F.$slots["empty-actions"] ? {
          name: "actions",
          fn: j(() => [
            q(F.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : y("", !0)
    ], 2));
  }
}), Ot = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of o)
    n[r] = s;
  return n;
}, yl = /* @__PURE__ */ Ot(xl, [["__scopeId", "data-v-bbbbb352"]]), kl = ["aria-label"], $l = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, wl = { class: "text-base font-semibold" }, Cl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Sl = { class: "min-h-0 flex-1 overflow-y-auto px-5 py-4" }, Ml = { class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3" }, Je = /* @__PURE__ */ O({
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
      const h = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (h.length === 0)
        return;
      const A = h[0], C = h[h.length - 1];
      p.shiftKey && document.activeElement === A ? (p.preventDefault(), C.focus()) : !p.shiftKey && document.activeElement === C && (p.preventDefault(), A.focus());
    }
    return fe(
      () => n.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", b), Ae(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", b), i?.focus(), i = null);
      }
    ), be(() => document.removeEventListener("keydown", b)), (p, h) => (t(), T(Re, { to: "body" }, [
      I(Le, {
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
              l("div", $l, [
                l("h2", wl, f(e.title), 1),
                e.description ? (t(), a("p", Cl, f(e.description), 1)) : y("", !0)
              ]),
              l("div", Sl, [
                q(p.$slots, "default")
              ]),
              l("div", Ml, [
                q(p.$slots, "footer")
              ])
            ], 8, kl)
          ], 32)) : y("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Bl = 160, Fe = /* @__PURE__ */ O({
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
      !n.dismissOnPanelClick || S.target?.closest("input, select, textarea, label, [data-keep-open]") || $();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await Ae(), w());
    }
    function h() {
      m = setTimeout($, 180);
    }
    async function A() {
      u.value = null, r.value = !r.value, r.value && (await Ae(), w());
    }
    async function C(S, M) {
      u.value = { x: S, y: M }, r.value = !0, await Ae(), w();
    }
    function $() {
      r.value = !1, u.value = null;
    }
    function w() {
      const S = s.value, M = i.value;
      if (!S || !M)
        return;
      const z = M.getBoundingClientRect(), R = 8, D = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : S.getBoundingClientRect();
      let ee, H;
      if (n.placement === "bottom")
        ee = D.bottom + n.offset, ee + z.height > window.innerHeight - R && D.top - z.height - n.offset > R && (ee = D.top - z.height - n.offset), H = n.align === "end" && !u.value ? D.right - z.width : D.left;
      else {
        ee = D.top;
        const G = n.placement === "right", Z = D.right + n.offset + z.width < window.innerWidth - R, ae = D.left - n.offset - z.width > R;
        H = (G ? Z || !ae : !ae && Z) ? D.right + n.offset : D.left - n.offset - z.width;
      }
      H = Math.min(Math.max(R, H), window.innerWidth - z.width - R), ee = Math.min(Math.max(R, ee), window.innerHeight - z.height - R), d.value = { top: ee, left: H, minWidth: Math.max(D.width, Bl) };
    }
    function g(S) {
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
      document.addEventListener("pointerdown", g), document.addEventListener("keydown", v), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), be(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", g), document.removeEventListener("keydown", v), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), o({ close: $, openAt: C }), (S, M) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: M[2] || (M[2] = (z) => e.hoverable && p()),
      onPointerleave: M[3] || (M[3] = (z) => e.hoverable && h())
    }, [
      l("div", { onClick: A }, [
        q(S.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Re, { to: "body" }, [
        I(Le, {
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
              onPointerleave: M[1] || (M[1] = (z) => e.hoverable && h()),
              onClick: b
            }, [
              q(S.$slots, "panel", { close: $ })
            ], 38)) : y("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Al = ["disabled"], zl = { class: "py-0.5" }, Pl = ["disabled", "onClick"], _l = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ol = ["d"], jl = ["disabled"], Ll = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vl = ["d"], Tl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Dl = ["disabled", "onClick"], El = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Il = ["d"], Fl = { class: "text-muted-foreground text-sm" }, Nl = { class: "text-foreground font-medium tabular-nums" }, Rl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Ul = ["disabled"], Hl = { class: "text-muted-foreground text-sm" }, ql = { class: "text-foreground font-medium tabular-nums" }, Kl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Gl = ["disabled"], rw = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!1), d = k(() => n.allMatching ? n.total : n.count), u = k(() => d.value !== void 0), m = k(() => u.value && d.value === 0), b = k(() => n.actions.filter((v) => !v.destructive)), p = k(() => n.actions.filter((v) => v.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function A(v) {
      return h[v.color ?? "gray"] ?? h.gray;
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
    const g = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), a(P, null, [
      I(Fe, null, {
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
          ])], 8, Al)
        ]),
        panel: j(() => [
          l("div", zl, [
            (t(!0), a(P, null, V(b.value, (S) => (t(), a("button", {
              key: S.key,
              type: "button",
              role: "menuitem",
              class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", A(S)]),
              disabled: e.busy,
              onClick: (M) => C(S)
            }, [
              (t(), a("svg", _l, [
                l("path", {
                  d: x(de)(S.icon)
                }, null, 8, Ol)
              ])),
              U(" " + f(S.label), 1)
            ], 10, Pl))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (S) => i.value = !0)
            }, [
              (t(), a("svg", Ll, [
                l("path", {
                  d: x(de)("download")
                }, null, 8, Vl)
              ])),
              c[6] || (c[6] = U(" Export CSV ", -1))
            ], 8, jl)) : y("", !0),
            p.value.length ? (t(), a("div", Tl, [
              (t(!0), a(P, null, V(p.value, (S) => (t(), a("button", {
                key: S.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (M) => C(S)
              }, [
                (t(), a("svg", El, [
                  l("path", {
                    d: x(de)(S.icon ?? "trash")
                  }, null, 8, Il)
                ])),
                U(" " + f(S.label), 1)
              ], 8, Dl))), 128))
            ])) : y("", !0)
          ])
        ]),
        _: 1
      }),
      I(Je, {
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
            onClick: $
          }, f(s.value?.label), 11, Ul)
        ]),
        default: j(() => [
          l("p", Fl, [
            c[7] || (c[7] = U(" This will affect ", -1)),
            l("span", Nl, [
              u.value ? (t(), a(P, { key: 1 }, [
                U(f(g(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[8] || (c[8] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Rl, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : y("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      I(Je, {
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
          }, " Export CSV ", 8, Gl)
        ]),
        default: j(() => [
          l("p", Hl, [
            c[9] || (c[9] = U(" This will export ", -1)),
            l("span", ql, [
              u.value ? (t(), a(P, { key: 1 }, [
                U(f(g(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[10] || (c[10] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Kl, " Nothing matches the current filters - there is nothing to export. ")) : y("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Wl = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, Zl = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Jl = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, Yl = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, Xl = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", Wl, [
      o.$slots.tabs ? (t(), a("div", Zl, [
        q(o.$slots, "tabs")
      ])) : y("", !0),
      o.$slots.title ? (t(), a("div", Jl, [
        q(o.$slots, "title")
      ])) : y("", !0),
      o.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: _(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        q(o.$slots, "toolbar")
      ], 2)) : y("", !0),
      q(o.$slots, "default"),
      o.$slots.pagination ? (t(), a("div", Yl, [
        q(o.$slots, "pagination")
      ])) : y("", !0)
    ]));
  }
}), Ql = { class: "min-w-0" }, eo = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, to = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, ao = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, no = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, lo = { class: "w-full border-collapse text-sm" }, oo = { class: "bg-muted/40" }, so = { class: "divide-y" }, ro = ["href"], io = {
  key: 1,
  class: "text-muted-foreground"
}, uo = {
  key: 0,
  class: "flex justify-center"
}, co = ["disabled"], fo = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, mo = ["href"], iw = /* @__PURE__ */ O({
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
    const n = e, r = o, s = Xt(), i = k(() => n.columns.filter((p) => p.type !== "image")), d = k(() => !!s.actions), u = k(() => !!n.title || d.value);
    function m(p, h) {
      return h == null || h === "" ? "None" : p.type === "date" || p.type === "datetime" ? new Date(String(h)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...p.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof h == "number" ? new Intl.NumberFormat().format(h) : String(h);
    }
    function b(p) {
      return p == null || p === "";
    }
    return (p, h) => (t(), T(Xl, null, We({
      default: j(() => [
        e.loading && e.rows.length === 0 ? (t(), a("div", ao, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(xt, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, We({ _: 2 }, [
          p.$slots["empty-actions"] ? {
            name: "actions",
            fn: j(() => [
              q(p.$slots, "empty-actions")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", no, [
          l("table", lo, [
            l("thead", oo, [
              l("tr", null, [
                (t(!0), a(P, null, V(i.value, (A) => (t(), a("th", {
                  key: A.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f(A.label), 1))), 128))
              ])
            ]),
            l("tbody", so, [
              (t(!0), a(P, null, V(e.rows, (A, C) => (t(), a("tr", {
                key: A.id ?? C,
                class: "hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(P, null, V(i.value, ($) => (t(), a("td", {
                  key: $.key,
                  class: _(["px-3 py-2.5 whitespace-nowrap", [
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
                    }, f(m($, A[$.key])), 9, ro)) : b(A[$.key]) ? (t(), a("span", io, " None ")) : (t(), a(P, { key: 2 }, [
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
          l("div", Ql, [
            e.title ? (t(), a("h3", eo, f(e.title), 1)) : y("", !0)
          ]),
          d.value ? (t(), a("div", to, [
            q(p.$slots, "actions")
          ])) : y("", !0)
        ]),
        key: "0"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: j(() => [
          e.nextCursor ? (t(), a("div", uo, [
            l("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: h[0] || (h[0] = (A) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, co)
          ])) : e.capped ? (t(), a("p", fo, [
            U(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, mo)) : (t(), a(P, { key: 1 }, [
              U("Open the full list to search or filter the rest.")
            ], 64))
          ])) : y("", !0)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), po = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", vo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, go = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Ke(e = {}) {
  const o = e.variant ?? "default", n = e.size ?? "default";
  return [po, vo[o], go[n], e.class].filter(Boolean).join(" ");
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
      () => Ke({ variant: o.variant, size: o.size, class: o.class })
    ), r = k(() => o.as === "button" ? o.type : void 0);
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
}), ho = { class: "flex items-center gap-2 overflow-x-auto" }, bo = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xo = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yo = { class: "flex flex-col" }, ko = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, $o = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, wo = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Co = /* @__PURE__ */ O({
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
    return (m, b) => (t(), a("ol", ho, [
      (t(!0), a(P, null, V(e.steps, (p, h) => (t(), a("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(xe(e.interactive ? "button" : "div"), oe({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (A) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: j(() => [
            l("span", {
              class: _(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), a("svg", bo, [...b[0] || (b[0] = [
                l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), a("svg", xo, [...b[1] || (b[1] = [
                l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(P, { key: 2 }, [
                U(f(h + 1), 1)
              ], 64))
            ], 2),
            l("span", yo, [
              l("span", null, f(p.label), 1),
              p.description ? (t(), a("span", ko, f(p.description), 1)) : y("", !0)
            ]),
            e.hasError(h) ? (t(), a("span", $o)) : y("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), a("span", wo)) : y("", !0)
      ]))), 128))
    ]));
  }
}), Xe = /* @__PURE__ */ new Map();
function Me(e, o) {
  Xe.set(e, o);
}
function So(e) {
  return Xe.get(e);
}
function dw(e) {
  return Xe.has(e);
}
function uw() {
  return [...Xe.keys()].sort();
}
function cw() {
  Xe.clear();
}
class Mo extends Error {
  fieldErrors;
  constructor(o, n = {}) {
    super(o), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function fw(e) {
  if (!e || typeof e != "object")
    return {};
  const o = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (o[n] = s);
  }
  return o;
}
function Bo(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create option";
}
function Ao(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create new";
}
const zo = ["aria-expanded"], Po = ["aria-label", "onClick"], _o = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Oo = { class: "ml-auto flex shrink-0 items-center gap-1" }, jo = {
  key: 0,
  class: "border-b p-1"
}, Lo = ["placeholder"], Vo = { class: "max-h-60 overflow-y-auto p-1" }, To = ["aria-selected", "onMouseenter", "onClick"], Do = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, jt = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(null), d = K(null), u = K(!1), m = K(""), b = K(0), p = K({ top: 0, left: 0, width: 0 }), h = k(
      () => n.modelValue.map(
        (H) => n.options.find((G) => G.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), A = k(() => n.searchable ?? n.options.length > 6), C = k(() => {
      const H = new Set(n.modelValue), G = m.value.trim().toLowerCase();
      return n.options.filter((Z) => !H.has(Z.value)).filter((Z) => G ? Z.label.toLowerCase().includes(G) : !0);
    }), $ = k(() => n.max !== null && n.modelValue.length >= n.max);
    function w() {
      const H = s.value, G = i.value;
      if (!H || !G)
        return;
      const Z = H.getBoundingClientRect(), ae = G.getBoundingClientRect(), te = 8;
      let J = Z.bottom + 4;
      J + ae.height > window.innerHeight - te && Z.top - ae.height - 4 > te && (J = Z.top - ae.height - 4), p.value = {
        top: J,
        left: Math.min(Math.max(te, Z.left), window.innerWidth - Z.width - te),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function g() {
      n.disabled || u.value || (u.value = !0, m.value = "", b.value = 0, await Ae(), w(), d.value?.focus());
    }
    function v() {
      u.value = !1, m.value = "";
    }
    function c() {
      u.value ? v() : g();
    }
    function S(H) {
      $.value || (r("update:modelValue", [...n.modelValue, H.value]), m.value = "", b.value = 0, Ae(() => {
        w(), d.value?.focus();
      }));
    }
    function M(H) {
      r(
        "update:modelValue",
        n.modelValue.filter((G) => G !== H)
      ), Ae(w);
    }
    function z() {
      r("update:modelValue", []), Ae(w);
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
            const G = C.value[b.value];
            G && S(G);
          }
        }
      }
    }
    function D(H) {
      if (!u.value)
        return;
      const G = H.target;
      s.value?.contains(G) || i.value?.contains(G) || v();
    }
    function ee() {
      u.value && w();
    }
    return fe(C, (H) => {
      b.value > H.length - 1 && (b.value = Math.max(0, H.length - 1));
    }), pe(() => {
      document.addEventListener("pointerdown", D), window.addEventListener("scroll", ee, !0), window.addEventListener("resize", ee);
    }), be(() => {
      document.removeEventListener("pointerdown", D), window.removeEventListener("scroll", ee, !0), window.removeEventListener("resize", ee);
    }), (H, G) => (t(), a("div", {
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
        (t(!0), a(P, null, V(h.value, (Z) => (t(), a("span", {
          key: Z.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          U(f(Z.label) + " ", 1),
          l("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${Z.label}`,
            onClick: me((ae) => M(Z.value), ["stop"])
          }, [...G[1] || (G[1] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Po)
        ]))), 128)),
        h.value.length === 0 ? (t(), a("span", _o, f(e.placeholder), 1)) : y("", !0),
        l("span", Oo, [
          h.value.length > 1 ? (t(), a("button", {
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
          }, [...G[2] || (G[2] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, zo),
      (t(), T(Re, { to: "body" }, [
        I(Le, {
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
              A.value ? (t(), a("div", jo, [
                ce(l("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": G[0] || (G[0] = (Z) => m.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: R
                }, null, 40, Lo), [
                  [ye, m.value]
                ])
              ])) : y("", !0),
              l("div", Vo, [
                (t(!0), a(P, null, V(C.value, (Z, ae) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: _(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ae === b.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ae === b.value,
                  onMouseenter: (te) => b.value = ae,
                  onClick: (te) => S(Z)
                }, f(Z.label), 43, To))), 128)),
                C.value.length === 0 ? (t(), a("p", Do, [
                  $.value ? (t(), a(P, { key: 0 }, [
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
}), Eo = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Io = /* @__PURE__ */ O({
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
    fe(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), T(Je, {
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
          e.generalError ? (t(), a("p", Eo, f(e.generalError), 1)) : y("", !0),
          (t(!0), a(P, null, V(e.fields, (m) => (t(), T(Ne, {
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
});
function Q(...e) {
  return On(_n(e));
}
function mw(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Fo = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Ga), oe({ "data-slot": "checkbox" }, x(i), {
      class: x(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j((m) => [
        I(x(Wa), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            q(d.$slots, "default", we(Oe(m)), () => [
              I(x(ea), { class: "size-3.5" })
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ve(ie(n, "class"), r);
    return (i, d) => (t(), T(x(Za), oe({ "data-slot": "switch" }, x(s), {
      class: x(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j(() => [
        I(x(Ja), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), No = ["accept", "disabled"], Ro = { class: "text-sm font-medium" }, Uo = { key: 0 }, Ho = { key: 1 }, qo = { class: "text-muted-foreground text-xs" }, Ko = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Go = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Wo = ["src"], Zo = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Jo = { class: "min-w-0 flex-1" }, Yo = { class: "block truncate text-sm font-medium" }, Xo = { class: "text-muted-foreground text-xs" }, Qo = ["href"], es = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, ua = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!1), d = K(null), u = K(null), m = K(null), b = k(() => n.accept.map((S) => `.${S}`).join(",")), p = k(() => m.value ?? n.modelValue?.url ?? null), h = k(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${A(n.maxKilobytes * 1024)}`);
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
      e.modelValue ? (t(), a("div", Go, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Wo)) : (t(), a("span", Zo, f(C(e.modelValue.name) || "file"), 1)),
        l("span", Jo, [
          l("span", Yo, f(e.modelValue.name), 1),
          l("span", Xo, [
            U(f(A(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(P, { key: 0 }, [
              M[4] || (M[4] = U(" · ", -1)),
              l("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Qo)
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
        }, null, 40, No),
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
        l("span", Ro, [
          d.value === null ? (t(), a("span", Uo, "Drop a file or click to choose")) : (t(), a("span", Ho, "Uploading…"))
        ]),
        l("span", qo, f(h.value), 1),
        d.value !== null ? (t(), a("span", Ko, [
          l("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${d.value}%` })
          }, null, 4)
        ])) : y("", !0)
      ], 34)),
      u.value ? (t(), a("p", es, f(u.value), 1)) : y("", !0)
    ]));
  }
}), ts = { class: "flex flex-col gap-2" }, as = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, ns = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, ls = { class: "flex flex-col gap-1" }, os = ["onUpdate:modelValue", "disabled", "aria-label"], ss = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, rs = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, is = ["onUpdate:modelValue", "disabled", "aria-label"], ds = ["disabled", "aria-label", "onClick"], us = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, cs = { class: "flex items-center gap-3" }, fs = ["disabled"], ms = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, ps = /* @__PURE__ */ O({
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
    fe(
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
    const p = k(() => {
      const w = /* @__PURE__ */ new Map();
      for (const g of d.value) {
        const v = g.key.trim();
        v !== "" && w.set(v, (w.get(v) ?? 0) + 1);
      }
      return new Set([...w.entries()].filter(([, g]) => g > 1).map(([g]) => g));
    }), h = k(
      () => new Set(
        d.value.map((w) => w.key.trim()).filter((w) => w !== "" && !s.test(w))
      )
    ), A = k(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function C() {
      A.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function $(w) {
      d.value = d.value.filter((g) => g.uid !== w), b();
    }
    return (w, g) => (t(), a("div", ts, [
      d.value.length ? (t(), a("div", as, [
        l("div", ns, [
          l("span", null, f(e.keyLabel), 1),
          l("span", null, f(e.valueLabel), 1),
          g[0] || (g[0] = l("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(P, null, V(d.value, (v) => (t(), a("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          l("div", ls, [
            ce(l("input", {
              "onUpdate:modelValue": (c) => v.key = c,
              type: "text",
              class: _([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || h.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: b
            }, null, 42, os), [
              [ye, v.key]
            ]),
            h.value.has(v.key.trim()) ? (t(), a("p", ss, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), a("p", rs, " Used twice - only the last value will be saved. ")) : y("", !0)
          ]),
          ce(l("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: b
          }, null, 40, is), [
            [ye, v.value]
          ]),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (c) => $(v.uid)
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
          ])], 8, ds)
        ]))), 128))
      ])) : (t(), a("p", us, " Nothing here yet. ")),
      l("div", cs, [
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
        ], 8, fs),
        e.maxPairs !== null ? (t(), a("p", ms, f(d.value.length) + " of " + f(e.maxPairs), 1)) : y("", !0)
      ])
    ]));
  }
}), vs = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, gs = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, hs = ["disabled", "title", "aria-label", "onClick"], bs = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xs = ["d"], ys = ["disabled"], ks = ["contenteditable", "data-placeholder"], $s = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, ws = /* @__PURE__ */ O({
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
    ], u = k(() => d.filter(($) => n.toolbar.includes($.id))), m = k(() => n.toolbar.includes("link")), b = K(0);
    function p() {
      const $ = s.value?.innerHTML ?? "", w = (s.value?.innerText ?? "").trim();
      b.value = w.length;
      const g = w === "" ? null : $;
      i = g, r("update:modelValue", g);
    }
    function h($) {
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
      s.value && (s.value.innerHTML = n.modelValue ?? "", b.value = s.value.innerText.trim().length);
    }), fe(
      () => n.modelValue,
      ($) => {
        $ !== i && s.value && (s.value.innerHTML = $ ?? "", b.value = s.value.innerText.trim().length);
      }
    ), ($, w) => (t(), a("div", vs, [
      l("div", gs, [
        (t(!0), a(P, null, V(u.value, (g) => (t(), a("button", {
          key: g.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: g.label,
          "aria-label": g.label,
          onMousedown: w[0] || (w[0] = me(() => {
          }, ["prevent"])),
          onClick: (v) => h(g)
        }, [
          (t(), a("svg", bs, [
            l("path", {
              d: g.path
            }, null, 8, xs)
          ]))
        ], 40, hs))), 128)),
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
        ])], 40, ys)) : y("", !0)
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
      }, null, 42, ks),
      e.maxLength !== null ? (t(), a("div", $s, f(b.value) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ Ot(ws, [["__scopeId", "data-v-32c63bc7"]]), Ss = {
  key: 1,
  class: "flex flex-col gap-2"
}, Ms = { class: "flex items-center justify-between gap-2" }, Bs = ["for"], As = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, zs = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, Ps = ["aria-label", "disabled"], _s = {
  key: 7,
  class: "flex flex-col gap-2"
}, Os = ["id", "value", "disabled"], js = ["value"], Ls = {
  key: 0,
  class: "relative"
}, Vs = ["disabled"], Ts = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ds = { class: "max-h-56 overflow-y-auto p-1" }, Es = ["onClick"], Is = {
  key: 8,
  class: "relative"
}, Fs = ["disabled", "aria-invalid"], Ns = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Rs = { class: "max-h-56 overflow-y-auto p-1" }, Us = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Hs = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, qs = ["onClick"], Ks = ["id", "value", "disabled", "aria-invalid"], Gs = ["value"], Ws = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Zs = { class: "text-muted-foreground" }, Js = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ys = { class: "text-muted-foreground" }, Xs = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Qs = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, er = ["aria-label", "disabled"], tr = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], ar = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, nr = ["aria-label", "disabled"], lr = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], or = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, sr = ["aria-label", "disabled"], rr = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], ir = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, dr = ["aria-label", "disabled"], ur = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, cr = ["disabled", "aria-pressed", "onClick"], fr = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, mr = ["title", "disabled", "onClick"], pr = ["href"], vr = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, gr = {
  key: 20,
  class: "text-muted-foreground text-xs leading-snug"
}, hr = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", br = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Ne = /* @__PURE__ */ O({
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
    const n = Rt(() => import("./PkRepeater-J84jGe3T.js")), r = Rt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = o, d = K(!1), u = K(""), m = K([]), b = K(!1), p = K(null);
    let h;
    fe(u, (le) => {
      s.searchOptions && (clearTimeout(h), b.value = !0, h = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(le);
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
    function C(le) {
      p.value = le.label, i("change", le.value), d.value = !1, u.value = "";
    }
    function $() {
      p.value = null, i("change", null);
    }
    const w = nt("panelPicker", null), g = nt("panelCreateOption", null), v = K(!1), c = K(!1), S = K({}), M = K(null), z = k(() => Bo(s.field)), R = k(() => Ao(s.field));
    function D() {
      S.value = {}, M.value = null, v.value = !0, d.value = !1;
    }
    function ee() {
      c.value || (v.value = !1, S.value = {}, M.value = null);
    }
    async function H(le) {
      if (g) {
        c.value = !0, S.value = {}, M.value = null;
        try {
          const F = await g.run(s.field.key, { ...le });
          C(F), v.value = !1;
        } catch (F) {
          F instanceof Mo ? (S.value = F.fieldErrors, M.value = Object.keys(F.fieldErrors).length === 0 ? F.message : null) : M.value = F instanceof Error ? F.message : "Could not create that option.";
        } finally {
          c.value = !1;
        }
      }
    }
    const G = k(() => {
      if (!s.field.tableSelect || !w?.base)
        return;
      const le = w.returnUrl || "/";
      return `${w.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
    }), Z = k(() => s.field.morphTo ?? []), ae = k(() => {
      const le = s.value;
      return le && typeof le == "object" && !Array.isArray(le) ? le : { type: void 0, id: void 0 };
    });
    function te(le) {
      i("change", { type: le || null, id: null });
    }
    function J(le) {
      i("change", { type: ae.value.type ?? null, id: le });
    }
    function W(le) {
      p.value = le.label, J(le.value), d.value = !1, u.value = "";
    }
    be(() => clearTimeout(h));
    const B = k(() => So(s.field.type)), N = k(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function L(le) {
      if (le) {
        if (le.copy) {
          const F = s.value == null ? "" : String(s.value);
          F !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(F);
          return;
        }
        if (le.url && typeof window < "u") {
          window.open(le.url, "_blank", "noopener,noreferrer");
          return;
        }
        le.key && i("affix-action", le.key);
      }
    }
    function Y(le) {
      const F = document.getElementById(`f-${s.field.key}`);
      if (!(F instanceof HTMLTextAreaElement) && !(F instanceof HTMLInputElement))
        return;
      const E = F.selectionStart ?? F.value.length, X = F.selectionEnd ?? E;
      F.setRangeText(le, E, X, "end"), F.dispatchEvent(new Event("input", { bubbles: !0 })), F.focus();
    }
    return (le, F) => (t(), a(P, null, [
      e.field.type === "hidden" ? (t(), a(P, { key: 0 }, [], 64)) : (t(), a("div", Ss, [
        l("div", Ms, [
          l("label", {
            for: `f-${e.field.key}`,
            class: _(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            U(f(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", As, "*")) : y("", !0)
          ], 10, Bs),
          e.field.hint ? (t(), a("span", zs, [
            U(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: F[0] || (F[0] = (E) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, Ps)) : y("", !0)
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
          "onUpdate:modelValue": F[1] || (F[1] = (E) => i("change", E))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(ua, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": F[2] || (F[2] = (E) => i("change", E))
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
          "onUpdate:modelValue": F[3] || (F[3] = (E) => i("change", E))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(x(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": F[4] || (F[4] = (E) => i("change", E))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Cs, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[5] || (F[5] = (E) => i("change", E))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(ps, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[6] || (F[6] = (E) => i("change", E))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(jt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": F[7] || (F[7] = (E) => i("change", E))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : Z.value.length ? (t(), a("div", _s, [
          l("select", {
            id: `f-${e.field.key}-type`,
            value: ae.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            onChange: F[8] || (F[8] = (E) => te(E.target.value))
          }, [
            F[24] || (F[24] = l("option", { value: "" }, "Type", -1)),
            (t(!0), a(P, null, V(Z.value, (E) => (t(), a("option", {
              key: E.value,
              value: E.value
            }, f(E.label), 9, js))), 128))
          ], 40, Os),
          ae.value.type && e.searchOptions ? (t(), a("div", Ls, [
            l("button", {
              type: "button",
              class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              disabled: e.field.disabled || e.processing,
              onClick: A
            }, [
              l("span", {
                class: _(p.value || ae.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (ae.value.id ? String(ae.value.id) : "Search…")), 3)
            ], 8, Vs),
            d.value ? (t(), a("div", Ts, [
              ce(l("input", {
                "onUpdate:modelValue": F[9] || (F[9] = (E) => u.value = E),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ye, u.value]
              ]),
              l("div", Ds, [
                (t(!0), a(P, null, V(m.value, (E) => (t(), a("button", {
                  key: String(E.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (X) => W(E)
                }, f(E.label), 9, Es))), 128))
              ])
            ])) : y("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: F[10] || (F[10] = (E) => d.value = !1)
            })) : y("", !0)
          ])) : y("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", Is, [
          l("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
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
              onClick: me($, ["stop"])
            }, " ✕ ")) : y("", !0)
          ], 8, Fs),
          d.value ? (t(), a("div", Ns, [
            ce(l("input", {
              "onUpdate:modelValue": F[11] || (F[11] = (E) => u.value = E),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ye, u.value]
            ]),
            l("div", Rs, [
              b.value ? (t(), a("p", Us, " Searching… ")) : m.value.length === 0 ? (t(), a("p", Hs, " No matches ")) : y("", !0),
              (t(!0), a(P, null, V(m.value, (E) => (t(), a("button", {
                key: String(E.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (X) => C(E)
              }, f(E.label), 9, qs))), 128)),
              e.field.createOption && x(g) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: D
              }, [
                F[25] || (F[25] = l("span", { "aria-hidden": "true" }, "+", -1)),
                U(" " + f(R.value), 1)
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          d.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: F[12] || (F[12] = (E) => d.value = !1)
          })) : y("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: F[13] || (F[13] = (E) => i("change", E.target.value || null))
        }, [
          F[26] || (F[26] = l("option", { value: "" }, "-", -1)),
          (t(!0), a(P, null, V(e.options, (E) => (t(), a("option", {
            key: String(E.value),
            value: E.value
          }, f(E.label), 9, Gs))), 128))
        ], 40, Ks)) : e.field.type === "toggle" ? (t(), a("label", Ws, [
          I(x(Ie), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": F[14] || (F[14] = (E) => i("change", E))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Zs, f(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", Js, [
          I(x(Fo), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": F[15] || (F[15] = (E) => i("change", E === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Ys, f(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !N.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onInput: F[16] || (F[16] = (E) => i("change", E.target.value))
        }, null, 40, Xs)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: _(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Qs, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: F[17] || (F[17] = (E) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, er)) : y("", !0),
          l("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: F[18] || (F[18] = (E) => i("change", E.target.value))
          }, null, 40, tr),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", ar, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: F[19] || (F[19] = (E) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, nr)) : y("", !0)
        ], 2)) : N.value ? (t(), a("div", {
          key: 15,
          class: _(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", or, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: F[21] || (F[21] = (E) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, sr)) : y("", !0),
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
            class: _(br),
            onInput: F[22] || (F[22] = (E) => i("change", E.target.value))
          }, null, 40, rr),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", ir, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: F[23] || (F[23] = (E) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, dr)) : y("", !0)
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
          class: _(hr),
          onInput: F[20] || (F[20] = (E) => i("change", E.target.value))
        }, null, 40, lr)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", ur, [
          (t(!0), a(P, null, V(e.field.presets, (E) => (t(), a("button", {
            key: E,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: _([
              "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == E ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == E
            ),
            onClick: (X) => i("change", String(E))
          }, f(E), 11, cr))), 128))
        ])) : y("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", fr, [
          (t(!0), a(P, null, V(e.field.chips, (E, X) => (t(), a("button", {
            key: X,
            type: "button",
            title: E,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (ue) => Y(String(X))
          }, f(X), 9, mr))), 128))
        ])) : y("", !0),
        G.value ? (t(), a("a", {
          key: 18,
          href: G.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, pr)) : y("", !0),
        e.error ? (t(), a("p", vr, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", gr, f(e.field.help), 1)) : y("", !0)
      ])),
      e.field.createOption && x(g) ? (t(), T(Io, {
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
}), xr = { class: "text-sm font-semibold" }, yr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, kr = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, $r = { class: "border-b px-4 py-3.5 sm:px-5" }, wr = { class: "text-sm font-semibold" }, Cr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Sr = {
  key: 4,
  class: "min-w-0 space-y-4"
}, Mr = {
  key: 7,
  class: "flex flex-col gap-3"
}, Br = { class: "text-sm font-medium" }, Ar = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, zr = {
  key: 0,
  class: "mb-1 font-medium"
}, Pr = ["onClick"], _r = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Or = { class: "flex items-center justify-between gap-3 border-t p-4" }, jr = ["disabled"], ca = /* @__PURE__ */ O({
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
    ), m = k(() => n.depth === 0), b = k(() => {
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
    }), h = k(() => {
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
    function g(v) {
      if (n.upload)
        return (c, S) => n.upload(v, c, S);
    }
    return (v, c) => {
      const S = Mt("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), T(Ne, {
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
          l("div", null, [
            l("h3", xr, f(e.node.label), 1),
            e.node.description ? (t(), a("p", yr, f(e.node.description), 1)) : y("", !0)
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
          class: _(["grid grid-cols-1 gap-4", [h.value, m.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
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
            onChange: c[3] || (c[3] = (R, D) => r("change", R, D)),
            onAffixAction: c[4] || (c[4] = (R, D) => r("affix-action", R, D))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "card" && w(e.node) ? (t(), a("section", kr, [
        l("header", $r, [
          l("h3", wr, f(e.node.title), 1),
          e.node.description ? (t(), a("p", Cr, f(e.node.description), 1)) : y("", !0)
        ]),
        l("div", {
          class: _(["grid grid-cols-1 gap-4 px-4 py-4", h.value])
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
            onChange: c[5] || (c[5] = (R, D) => r("change", R, D)),
            onAffixAction: c[6] || (c[6] = (R, D) => r("affix-action", R, D))
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
          onChange: c[7] || (c[7] = (R, D) => r("change", R, D)),
          onAffixAction: c[8] || (c[8] = (R, D) => r("affix-action", R, D))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && w(e.node) ? (t(), a("div", Sr, [
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
          onChange: c[9] || (c[9] = (R, D) => r("change", R, D)),
          onAffixAction: c[10] || (c[10] = (R, D) => r("affix-action", R, D))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), a("div", {
        key: 5,
        class: _(["grid grid-cols-1 gap-4", h.value])
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
          onChange: c[11] || (c[11] = (R, D) => r("change", R, D)),
          onAffixAction: c[12] || (c[12] = (R, D) => r("affix-action", R, D))
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
          onChange: c[13] || (c[13] = (R, D) => r("change", R, D)),
          onAffixAction: c[14] || (c[14] = (R, D) => r("affix-action", R, D))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", Mr, [
        l("legend", Br, f(e.node.label), 1),
        e.node.description ? (t(), a("p", Ar, f(e.node.description), 1)) : y("", !0),
        l("div", {
          class: _(["grid grid-cols-1 gap-4", h.value])
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
            onChange: c[15] || (c[15] = (R, D) => r("change", R, D)),
            onAffixAction: c[16] || (c[16] = (R, D) => r("affix-action", R, D))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), a("div", {
        key: 8,
        role: "note",
        class: _(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", zr, f(e.node.title), 1)) : y("", !0),
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
            $(M) ? (t(), a("span", _r)) : y("", !0)
          ], 10, Pr))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => ce((t(), a("div", {
          key: z,
          class: _(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(M.children ?? [], (R, D) => (t(), T(S, {
            key: D,
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
          [Ve, i.value === z]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), a("div", {
        key: 10,
        class: _(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        I(Co, {
          class: _(["p-4", m.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (M) => $((e.node.children ?? [])[M]),
          "onUpdate:activeStep": c[19] || (c[19] = (M) => d.value = M)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(P, null, V(e.node.children ?? [], (M, z) => ce((t(), a("div", {
          key: z,
          class: _(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(M.children ?? [], (R, D) => (t(), T(S, {
            key: D,
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
          [Ve, d.value === z]
        ])), 128)),
        l("div", Or, [
          l("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: c[22] || (c[22] = (M) => d.value--)
          }, " Back ", 8, jr),
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
}), pw = /* @__PURE__ */ O({
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
    fe(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), T(Je, {
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
          (t(!0), a(P, null, V(e.form?.nodes ?? [], (m, b) => (t(), T(ca, {
            key: b,
            node: m,
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
}), Lr = ["title"], Vr = ["aria-label"], Tr = ["d"], Dr = { class: "sr-only" }, Er = /* @__PURE__ */ O({
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
        l("path", { d: d.value }, null, 8, Tr)
      ], 10, Vr)),
      l("span", Dr, f(m.value), 1)
    ], 8, Lr));
  }
}), Ir = ["src"], Fr = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Nr = /* @__PURE__ */ O({
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
    fe(
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
      class: _(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (m) => n.value = !0)
      }, null, 40, Ir)) : e.fallback === "initials" ? (t(), a(P, { key: 1 }, [
        U(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", Fr, [...u[1] || (u[1] = [
        l("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : y("", !0)
    ], 2));
  }
}), Rr = {
  key: 0,
  class: "text-muted-foreground"
}, Ur = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Hr = {
  key: 0,
  class: "font-mono text-xs"
}, qr = {
  key: 1,
  class: "sr-only"
}, Kr = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), a("span", Rr, "-")) : (t(), a("span", Ur, [
      l("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", Hr, f(r.value), 1)) : (t(), a("span", qr, f(r.value), 1))
    ]));
  }
}), Gr = { class: "inline-flex items-center" }, Wr = ["checked", "aria-label"], Zr = { class: "sr-only" }, vw = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("span", Gr, [
      l("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Wr),
      l("span", Zr, f(r.value), 1)
    ]));
  }
}), Jr = {
  key: 0,
  class: "text-muted-foreground"
}, Yr = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, gw = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = k(
      () => String(o.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", Yr, f(n.value), 1)) : (t(), a("span", Jr, "—"));
  }
}), Xr = { class: "flex items-center gap-2" }, Qr = ["onUpdate:modelValue", "onChange"], ei = ["value"], ti = ["onUpdate:modelValue"], ai = ["value"], ni = ["onUpdate:modelValue"], li = ["onUpdate:modelValue", "multiple"], oi = ["value"], si = ["onUpdate:modelValue", "type"], ri = ["aria-label", "onClick"], ii = { class: "flex items-center gap-2" }, di = /* @__PURE__ */ O({
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
    fe(
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
    function h() {
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
    function g() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, S) => {
      const M = Mt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: _(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        l("div", Xr, [
          ce(l("select", {
            "onUpdate:modelValue": S[0] || (S[0] = (z) => i.value.logic = z),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...S[1] || (S[1] = [
            l("option", { value: "and" }, "Match all", -1),
            l("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ee, i.value.logic]
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
            "onUpdate:modelValue": [(D) => i.value.rules[R] = D, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(P, { key: 1 }, [
            ce(l("select", {
              "onUpdate:modelValue": (D) => z.field = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (D) => $(z)
            }, [
              (t(!0), a(P, null, V(u.value, (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(e.fields[D].label), 9, ei))), 128))
            ], 40, Qr), [
              [Ee, z.field]
            ]),
            ce(l("select", {
              "onUpdate:modelValue": (D) => z.operator = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(P, null, V(m(z.field), (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(b[D] ?? D), 9, ai))), 128))
            ], 40, ti), [
              [Ee, z.operator]
            ]),
            z.field && e.fields[z.field]?.kind === "boolean" ? ce((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (D) => z.value = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...S[3] || (S[3] = [
              l("option", { value: !0 }, "Yes", -1),
              l("option", { value: !1 }, "No", -1)
            ])], 40, ni)), [
              [Ee, z.value]
            ]) : z.field && e.fields[z.field]?.options?.length ? ce((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (D) => z.value = D,
              multiple: e.fields[z.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(P, null, V(e.fields[z.field].options, (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(D), 9, oi))), 128))
            ], 40, li)), [
              [Ee, z.value]
            ]) : ce((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (D) => z.value = D,
              type: z.field && e.fields[z.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, si)), [
              [Aa, z.value]
            ])
          ], 64)),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(z) ? "group" : "rule"}`,
            onClick: (D) => C(R)
          }, " × ", 8, ri)
        ]))), 128)),
        l("div", ii, [
          I(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
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
}), ui = {
  key: 0,
  class: "font-mono text-xs"
}, ci = {
  key: 1,
  class: "text-muted-foreground"
}, fi = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, hw = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = k(
      () => o.value && typeof o.value == "object" && !Array.isArray(o.value) ? Object.keys(o.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", ui, f(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", ci, "—")) : (t(), a("span", fi, f(n.value.length) + " " + f(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), mi = ["aria-checked", "aria-label", "title", "disabled"], pi = ["value", "disabled"], vi = ["value"], bw = /* @__PURE__ */ O({
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
    ], 10, mi)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = me(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), a(P, null, V(e.options, (h, A) => (t(), a("option", {
        key: A,
        value: A
      }, f(h), 9, vi))), 128))
    ], 40, pi));
  }
}), gi = ["data-variant"], hi = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ge = /* @__PURE__ */ O({
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
      () => [hi, n[o.variant], o.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: _(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, gi));
  }
}), Lt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function bi(e) {
  return e != null && e !== "";
}
function xi(e) {
  const o = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" ")) : (e.key === "name" && o.push("font-medium"), e.mono && o.push("font-mono text-xs"), e.muted && o.push("text-muted-foreground"), e.transform === "upper" && o.push("uppercase"), e.transform === "lower" && o.push("lowercase"), e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" "));
}
function xw(e) {
  const o = k(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: xi(s)
    }))
  ), n = k(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = n.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), m = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Lt[m] ?? "outline";
  }
  return { columns: o, byKey: n, badgeVariant: r };
}
const yi = ["disabled", "aria-label", "aria-busy"], ki = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $i = ["d"], wi = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Ci = ["disabled", "onClick"], Si = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Mi = ["d"], Bi = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, yw = /* @__PURE__ */ O({
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
    function u(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function m(h) {
      const A = n.colors[u(h)] ?? n.defaultColor ?? "neutral";
      return Lt[A] ?? "outline";
    }
    function b(h) {
      return n.options[h] ?? h;
    }
    function p(h, A) {
      if (s.value || h === i.value) {
        A();
        return;
      }
      r("change", h), A();
    }
    return (h, A) => (t(), a("div", {
      onClick: A[0] || (A[0] = me(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(Ge, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          U(f(b(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(Fe, {
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
            I(Ge, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(b(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", ki, [
              l("path", {
                d: x(de)("chevron-down")
              }, null, 8, $i)
            ]))
          ], 8, yi)
        ]),
        panel: j(({ close: C }) => [
          l("div", wi, f(d.value), 1),
          (t(!0), a(P, null, V(e.options, ($, w) => (t(), a("button", {
            key: w,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (g) => p(String(w), C)
          }, [
            I(Ge, {
              variant: m(w),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f($), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(w) === i.value ? (t(), a("svg", Si, [
              l("path", {
                d: x(de)("check")
              }, null, 8, Mi)
            ])) : (t(), a("span", Bi))
          ], 8, Ci))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Ai = { class: "flex items-center justify-end" }, zi = ["aria-label"], Pi = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, _i = ["d"], Oi = ["href"], ji = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Li = ["d"], Vi = ["disabled", "onClick"], Ti = ["d"], Di = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Ei = ["disabled", "onClick"], Ii = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fi = ["d"], kw = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(null), d = K(null), u = k(() => r.groups.flatMap((g) => g.actions)), m = k(() => u.value.filter((g) => !g.destructive)), b = k(() => u.value.filter((g) => g.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(g) {
      return p[g.color ?? "gray"] ?? p.gray;
    }
    const A = k(() => u.value.length === 0);
    function C(g) {
      s("run", g);
    }
    function $(g) {
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
    return o({ openContextMenu: $ }), (g, v) => (t(), a("div", Ai, [
      A.value ? y("", !0) : (t(), T(Fe, {
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
            (t(), a("svg", Pi, [
              l("path", {
                d: x(de)("more-vertical")
              }, null, 8, _i)
            ]))
          ], 8, zi)
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
                class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(c)])
              }, [
                (t(), a("svg", ji, [
                  l("path", {
                    d: x(de)(c.icon)
                  }, null, 8, Li)
                ])),
                U(" " + f(c.label), 1)
              ], 10, Oi)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(c)]),
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
                    d: x(de)(c.icon)
                  }, null, 8, Ti)
                ], 2)),
                U(" " + f(c.label), 1)
              ], 10, Vi))
            ], 64))), 128)),
            b.value.length ? (t(), a("div", Di, [
              (t(!0), a(P, null, V(b.value, (c) => (t(), a("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (S) => C(c)
              }, [
                (t(), a("svg", Ii, [
                  l("path", {
                    d: x(de)(c.icon ?? "trash")
                  }, null, 8, Fi)
                ])),
                U(" " + f(c.label), 1)
              ], 8, Ei))), 128))
            ])) : y("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), yt = {
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
}, kt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, lt = 12, ot = 20, Ni = [0, 0.25, 0.5, 0.75, 1], Vt = "alxtexhpanel.appearance", Be = {
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
}, je = K({ ...Be });
let Ut = !1;
const Ri = "alxtexhpanel.appearance.vars";
function $t(e) {
  return e.theme === "dark";
}
const Ht = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function Ui(e) {
  const o = yt[e.primary] ?? yt.slate, n = kt[e.surface] ?? kt.neutral, r = n.chroma, s = n.hue, d = $t(e) ? {
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
    "--pk-row-padding": Ht[e.density] ?? Ht.comfortable
  };
}
function Tt() {
  if (typeof window > "u")
    return { ...Be };
  try {
    const e = localStorage.getItem(Vt);
    if (!e)
      return { ...Be };
    const o = { ...Be, ...JSON.parse(e) };
    o.theme === "system" && (o.theme = Be.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof o.fontSize == "string" && (o.fontSize = n[o.fontSize] ?? Be.fontSize), (typeof o.fontSize != "number" || Number.isNaN(o.fontSize) || o.fontSize < lt || o.fontSize > ot) && (o.fontSize = Be.fontSize), o;
  } catch {
    return { ...Be };
  }
}
function $w(e) {
  const o = Tt(), n = e ? { ...o, ...e } : o;
  if (je.value = n, wt(n), e)
    try {
      localStorage.setItem(Vt, JSON.stringify(n));
    } catch {
    }
}
let fa = null;
function ww(e) {
  fa = e;
}
let ma = {};
function Hi(e) {
  if (ma = e, !(typeof document > "u") && !Tt().primaryChosen)
    for (const [o, n] of Object.entries(e))
      document.documentElement.style.setProperty(o, n);
}
function wt(e) {
  if (typeof document > "u")
    return;
  const o = document.documentElement, n = { ...Ui(e), ...e.primaryChosen ? {} : ma };
  o.classList.toggle("dark", $t(e));
  for (const [r, s] of Object.entries(n))
    o.style.setProperty(r, s);
  o.dataset.sidebar = e.sidebarSide, o.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Ri,
      JSON.stringify({ dark: $t(e), theme: e.theme, vars: n })
    );
  } catch {
  }
}
function pa() {
  function e(r) {
    wt(r);
  }
  function o(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    je.value = { ...je.value, ...r, ...s };
    try {
      localStorage.setItem(Vt, JSON.stringify(je.value));
    } catch {
    }
    e(je.value), fa?.({ ...r, ...s });
  }
  function n() {
    o({ ...Be });
  }
  return pe(() => {
    Ut || (Ut = !0, je.value = Tt(), wt(je.value));
  }), {
    appearance: k(() => je.value),
    set: o,
    reset: n,
    PRIMARY_COLORS: yt,
    SURFACE_TINTS: kt,
    FONT_SIZE_MIN: lt,
    FONT_SIZE_MAX: ot,
    RADIUS_OPTIONS: Ni
  };
}
const qi = { class: "flex items-center justify-between border-b px-4 py-3" }, Ki = { class: "flex items-center gap-2" }, Gi = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Wi = { class: "flex flex-col gap-2" }, Zi = { class: "grid grid-cols-8 gap-2" }, Ji = ["title", "aria-label", "aria-pressed", "onClick"], Yi = { class: "flex flex-col gap-2" }, Xi = { class: "grid grid-cols-8 gap-2" }, Qi = ["title", "aria-label", "aria-pressed", "onClick"], ed = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, td = { class: "flex flex-col gap-2" }, ad = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, nd = ["aria-pressed", "aria-label", "onClick"], ld = { class: "text-sm font-semibold" }, od = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, sd = ["onClick"], rd = { class: "flex flex-col gap-2" }, id = { class: "flex items-center justify-between" }, dd = { class: "text-muted-foreground text-xs tabular-nums" }, ud = { class: "flex items-center gap-2" }, cd = ["disabled"], fd = ["min", "max", "value"], md = ["disabled"], Cw = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: o, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = pa(), u = K(!1), m = k(() => o.value.sidebarSide === "right"), b = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], h = [
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
        St('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Re, { to: "body" }, [
        I(Le, {
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
        I(Le, {
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
              l("header", qi, [
                v[9] || (v[9] = l("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                l("div", Ki, [
                  l("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => x(r) && x(r)(...c))
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
              l("div", Gi, [
                l("section", Wi, [
                  v[11] || (v[11] = l("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  l("div", Zi, [
                    (t(!0), a(P, null, V(x(s), (c, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": x(o).primary === S,
                      onClick: (M) => x(n)({ primary: S })
                    }, [
                      x(o).primary === S ? (t(), a("svg", {
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
                    ], 12, Ji))), 128))
                  ])
                ]),
                l("section", Yi, [
                  v[13] || (v[13] = l("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  l("div", Xi, [
                    (t(!0), a(P, null, V(x(i), (c, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: w(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": x(o).surface === S,
                      onClick: (M) => x(n)({ surface: S })
                    }, [
                      x(o).surface === S ? (t(), a("svg", ed, [...v[12] || (v[12] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : y("", !0)
                    ], 12, Qi))), 128))
                  ])
                ]),
                l("section", td, [
                  v[14] || (v[14] = l("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  l("div", ad, [
                    (t(!0), a(P, null, V(x(d), (c) => (t(), a("button", {
                      key: c,
                      type: "button",
                      class: _([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(o).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(o).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (S) => x(n)({ radius: c })
                    }, [
                      l("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      U(" " + f(c), 1)
                    ], 10, nd))), 128))
                  ])
                ]),
                (t(!0), a(P, null, V([
                  { label: "Color scheme", key: "theme", options: b },
                  { label: "Card style", key: "cardStyle", options: h },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: A },
                  { label: "Content layout", key: "contentLayout", options: C },
                  { label: "Menu style", key: "menuStyle", options: $ }
                ], (c) => (t(), a("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  l("h3", ld, f(c.label), 1),
                  l("div", od, [
                    (t(!0), a(P, null, V(c.options, (S) => (t(), a("button", {
                      key: String(S.value),
                      type: "button",
                      class: _([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(o)[c.key] === S.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (M) => x(n)({ [c.key]: S.value })
                    }, f(S.label), 11, sd))), 128))
                  ])
                ]))), 128)),
                l("section", rd, [
                  l("div", id, [
                    v[15] || (v[15] = l("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    l("span", dd, f(x(o).fontSize) + "px", 1)
                  ]),
                  l("div", ud, [
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(o).fontSize <= x(lt),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => x(n)({ fontSize: x(o).fontSize - 1 }))
                    }, " − ", 8, cd),
                    l("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(lt),
                      max: x(ot),
                      value: x(o).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (c) => x(n)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, fd),
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(o).fontSize >= x(ot),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => x(n)({ fontSize: x(o).fontSize + 1 }))
                    }, " + ", 8, md)
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
}), pd = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, vd = { class: "flex items-stretch" }, gd = ["href", "aria-current"], hd = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bd = ["d"], xd = { class: "w-full truncate text-center" }, yd = {
  key: 0,
  class: "flex-1"
}, kd = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, $d = ["d"], wd = { class: "w-full truncate text-center" }, mt = 5, Sw = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = k(
      () => n.items.length <= mt ? n.items : n.items.slice(0, mt - 1)
    ), i = k(() => n.items.length > mt);
    function d(u) {
      return u === "/" ? n.current === "/" : n.current === u || n.current.startsWith(`${u}/`);
    }
    return (u, m) => (t(), a("nav", pd, [
      l("ul", vd, [
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
            (t(), a("svg", hd, [
              l("path", {
                d: x(de)(b.icon)
              }, null, 8, bd)
            ])),
            l("span", xd, f(b.title), 1)
          ], 10, gd)
        ]))), 128)),
        i.value ? (t(), a("li", yd, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (b) => r("more"))
          }, [
            (t(), a("svg", kd, [
              l("path", {
                d: x(de)("more-horizontal")
              }, null, 8, $d)
            ])),
            l("span", wd, f(e.moreLabel), 1)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), Cd = ["value"], Sd = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", ge = /* @__PURE__ */ O({
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
      class: _([Sd, n.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, Cd));
  }
}), Md = ["for"], ke = /* @__PURE__ */ O({
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
    ], 10, Md));
  }
}), Mw = /* @__PURE__ */ O({
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
}), Bd = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Ad = ["id", "name", "value", "disabled", "maxlength"], zd = ["data-active"], Pd = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Bw = /* @__PURE__ */ O({
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
      () => Array.from({ length: n.length }, (b, p) => n.modelValue[p] ?? "")
    ), u = k(() => Math.min(n.modelValue.length, n.length - 1));
    function m(b) {
      const p = b.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (b, p) => (t(), a("div", Bd, [
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
        onFocus: p[0] || (p[0] = (h) => s.value = !0),
        onBlur: p[1] || (p[1] = (h) => s.value = !1)
      }, null, 40, Ad),
      (t(!0), a(P, null, V(d.value, (h, A) => (t(), a("div", {
        key: A,
        "data-slot": "input-otp-slot",
        "data-active": s.value && A === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(f(h) + " ", 1),
        s.value && A === u.value && h === "" ? (t(), a("div", Pd, [...p[2] || (p[2] = [
          l("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : y("", !0)
      ], 8, zd))), 128))
    ]));
  }
}), _d = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ze = /* @__PURE__ */ O({
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
      e.description ? (t(), a("p", _d, f(e.description), 1)) : y("", !0)
    ], 2));
  }
}), Od = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, jd = { class: "min-w-0 space-y-1" }, Ld = { class: "flex flex-wrap items-center gap-2.5" }, Vd = { class: "text-2xl font-semibold tracking-tight" }, Td = {
  key: 0,
  class: "flex items-center gap-2"
}, Dd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ed = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, Aw = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (o, n) => (t(), a("header", Od, [
      l("div", jd, [
        l("div", Ld, [
          l("h1", Vd, f(e.title), 1),
          o.$slots.status ? (t(), a("div", Td, [
            q(o.$slots, "status")
          ])) : y("", !0)
        ]),
        e.purpose ? (t(), a("p", Dd, f(e.purpose), 1)) : y("", !0)
      ]),
      o.$slots.actions ? (t(), a("div", Ed, [
        q(o.$slots, "actions")
      ])) : y("", !0)
    ]));
  }
}), Id = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: _(x(Q)(x(Rd)({ variant: e.variant }), o.class)),
      role: "alert"
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Fd = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: _(x(Q)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Nd = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: _(x(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Rd = _t(
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
), Ud = { class: "list-inside list-disc text-sm" }, zw = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const o = e, n = k(() => Array.from(new Set(o.errors)));
    return (r, s) => (t(), T(x(Id), { variant: "destructive" }, {
      default: j(() => [
        I(x(Va), { class: "size-4" }),
        I(x(Nd), null, {
          default: j(() => [
            U(f(e.title), 1)
          ]),
          _: 1
        }),
        I(x(Fd), null, {
          default: j(() => [
            l("ul", Ud, [
              (t(!0), a(P, null, V(n.value, (i, d) => (t(), a("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), va = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, s = aa(n, "modelValue", o, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, d) => ce((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => za(s) ? s.value = u : null),
      "data-slot": "input",
      class: _(
        x(Q)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [ye, x(s)]
    ]);
  }
}), Hd = { class: "relative" }, qd = ["aria-label"], Pw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: o }) {
    const n = e, r = K(!1), s = Pa("inputRef");
    return o({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", Hd, [
      I(x(va), oe({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(Q)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      l("button", {
        type: "button",
        class: _(
          x(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(x(Ta), {
          key: 0,
          class: "size-4"
        })) : (t(), T(x(Da), {
          key: 1,
          class: "size-4"
        }))
      ], 10, qd)
    ]));
  }
}), Kd = "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", _w = "grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3", Gd = "grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3", Te = "w-full min-w-0 px-4 py-6 sm:px-6", Ow = "w-full min-w-0 p-3 sm:p-4", jw = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", Lw = "w-full max-w-5xl";
function Vw(e, o) {
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
const ga = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Wd = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Zd = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Jd(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || o.endsWith(".jpg") || o.endsWith(".jpeg");
}
function Yd(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || o.endsWith(".png") || o.endsWith(".webp");
}
async function Xd(e) {
  const o = URL.createObjectURL(e);
  try {
    const n = await Qd(o), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
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
function Qd(e) {
  return new Promise((o, n) => {
    const r = new Image();
    r.onload = () => o(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function eu(e) {
  if (Jd(e))
    throw new Error(Zd);
  if (!Yd(e))
    throw new Error(ga);
  if (!await Xd(e))
    throw new Error(Wd);
}
const Dt = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(x(na), oe({ "data-slot": "sheet" }, x(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Tw = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(Ue), oe({ "data-slot": "sheet-close" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tu = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(At), oe({
      "data-slot": "sheet-overlay",
      class: x(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }, x(n)), {
      default: j(() => [
        q(r.$slots, "default")
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class", "side"), i = ve(s, r);
    return (d, u) => (t(), T(x(zt), null, {
      default: j(() => [
        I(tu),
        I(x(Pt), oe({
          "data-slot": "sheet-content",
          class: x(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...d.$attrs, ...x(i) }), {
          default: j(() => [
            q(d.$slots, "default"),
            I(x(Ue), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                I(x(Bt), { class: "size-4" }),
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
}), au = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(la), oe({
      "data-slot": "sheet-description",
      class: x(Q)("text-muted-foreground text-sm", o.class)
    }, x(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dw = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: _(x(Q)("mt-auto flex flex-col gap-2 p-4", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), nu = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: _(x(Q)("flex flex-col gap-1.5 p-4", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), lu = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(oa), oe({
      "data-slot": "sheet-title",
      class: x(Q)("text-foreground font-semibold", o.class)
    }, x(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ew = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(sa), oe({ "data-slot": "sheet-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qt = "sidebar_state", ou = 3600 * 24 * 7, su = "16rem", ru = "18rem", iu = "3rem", du = "b", [it, uu] = Ya("Sidebar"), cu = { class: "flex h-full w-full flex-col" }, fu = ["data-state", "data-collapsible", "data-variant", "data-side"], mu = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Iw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = it();
    return (d, u) => e.collapsible === "none" ? (t(), a("div", oe({
      key: 0,
      "data-slot": "sidebar",
      class: x(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o.class
      )
    }, d.$attrs), [
      q(d.$slots, "default")
    ], 16)) : x(n) ? (t(), T(x(Dt), oe({
      key: 1,
      open: x(s)
    }, d.$attrs, { "onUpdate:open": x(i) }), {
      default: j(() => [
        I(x(Et), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": x(ru)
          })
        }, {
          default: j(() => [
            I(nu, { class: "sr-only" }, {
              default: j(() => [
                I(lu, null, {
                  default: j(() => [...u[0] || (u[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(au, null, {
                  default: j(() => [...u[1] || (u[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l("div", cu, [
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
      "data-state": x(r),
      "data-collapsible": x(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      l("div", {
        class: _(
          x(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      l("div", oe({
        class: x(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          o.class
        )
      }, d.$attrs), [
        l("div", mu, [
          q(d.$slots, "default")
        ])
      ], 16)
    ], 8, fu));
  }
}), Fw = /* @__PURE__ */ O({
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
        x(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Nw = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: _(x(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Rw = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: _(x(Q)("relative flex w-full min-w-0 flex-col p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Uw = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(He), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: _(
        x(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
}), Hw = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: _(x(Q)("w-full text-sm", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), qw = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(He), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: _(
        x(Q)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
}), Kw = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: _(x(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Gw = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(va), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: _(x(Q)("bg-background h-8 w-full shadow-none", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ww = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: _(
        x(Q)(
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
}), Zw = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: _(x(Q)("flex w-full min-w-0 flex-col gap-1", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Jw = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(He), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: _(
        x(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
}), Yw = /* @__PURE__ */ O({
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
        x(Q)(
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
}), pu = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(x(Xa), oe({ "data-slot": "tooltip" }, x(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), vu = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Qa), null, {
      default: j(() => [
        I(x(en), oe({ "data-slot": "tooltip-content" }, { ...x(i), ...d.$attrs }, {
          class: x(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default"),
            I(x(tn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Xw = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(x(ra), we(Oe(o)), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gu = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(an), oe({ "data-slot": "tooltip-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kt = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(x(He), oe({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(Q)(x(bu)({ variant: e.variant, size: e.size }), o.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Qw = /* @__PURE__ */ O({
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
    const o = e, { isMobile: n, state: r } = it(), s = ie(o, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(x(pu), { key: 1 }, {
      default: j(() => [
        I(x(gu), { "as-child": "" }, {
          default: j(() => [
            I(Kt, we(Oe({ ...x(s), ...i.$attrs })), {
              default: j(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(x(vu), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(n)
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
    })) : (t(), T(Kt, we(oe({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), e4 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: _(x(Q)("group/menu-item relative", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Gt = "animate-pulse rounded-md bg-primary/10", t4 = /* @__PURE__ */ O({
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
      class: _(x(Q)("flex h-8 items-center gap-2 rounded-md px-2", o.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: _(x(Q)(Gt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : y("", !0),
      l("div", {
        class: _(x(Q)(Gt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), a4 = /* @__PURE__ */ O({
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
        x(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), n4 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(x(He), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: _(
        x(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
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
}), l4 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: _(x(Q)("group/menu-sub-item relative", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), o4 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ka?.cookie.includes(`${qt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = Ha("(max-width: 767px)"), i = K(!1), d = aa(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${qt}=${d.value}; path=/; max-age=${ou}`;
    }
    function m(h) {
      i.value = h;
    }
    function b() {
      return s.value ? m(!i.value) : u(!d.value);
    }
    qa("keydown", (h) => {
      h.key === du && (h.metaKey || h.ctrlKey) && (h.preventDefault(), b());
    });
    const p = k(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return uu({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: b
    }), (h, A) => (t(), T(x(ra), { "delay-duration": 0 }, {
      default: j(() => [
        l("div", oe({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(su),
            "--sidebar-width-icon": x(iu)
          },
          class: x(Q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, h.$attrs), [
          q(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), s4 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { toggleSidebar: n } = it();
    return (r, s) => (t(), a("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: _(
        x(Q)(
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
      (...i) => x(n) && x(n)(...i))
    }, [
      q(r.$slots, "default")
    ], 2));
  }
}), hu = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(nn), oe({ "data-slot": "separator" }, x(n), {
      class: x(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        o.class
      )
    }), null, 16, ["class"]));
  }
}), r4 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(hu), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: _(x(Q)("bg-sidebar-border mx-2 w-auto", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), i4 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, toggleSidebar: s } = it();
    return (i, d) => (t(), T(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: _(x(Q)("h-7 w-7", o.class)),
      onClick: x(s)
    }, {
      default: j(() => [
        x(n) || x(r) === "collapsed" ? (t(), T(x(Ea), { key: 0 })) : (t(), T(x(Ia), { key: 1 })),
        d[0] || (d[0] = l("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), bu = _t(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-primary/10 data-[active=true]:font-medium data-[active=true]:text-primary data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
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
), d4 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(x(ln), oe({ "data-slot": "dropdown-menu" }, x(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), xu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, u4 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(on), oe({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", xu, [
          I(x(ia), null, {
            default: j(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(x(ea), { class: "size-4" })
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
}), c4 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(sn), null, {
      default: j(() => [
        I(x(rn), oe({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(Q)(
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
}), f4 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(dn), oe({ "data-slot": "dropdown-menu-group" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m4 = /* @__PURE__ */ O({
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
    const o = e, n = ie(o, "inset", "variant", "class"), r = Ce(n);
    return (s, i) => (t(), T(x(un), oe({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(Q)(
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
}), p4 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const o = e, n = ie(o, "class", "inset"), r = Ce(n);
    return (s, i) => (t(), T(x(cn), oe({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), v4 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(x(fn), oe({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, g4 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(mn), oe({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", yu, [
          I(x(ia), null, {
            default: j(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(x(Fa), { class: "size-2 fill-current" })
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
}), h4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(pn), oe({ "data-slot": "dropdown-menu-separator" }, x(n), {
      class: x(Q)("bg-border -mx-1 my-1 h-px", o.class)
    }), null, 16, ["class"]));
  }
}), b4 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: _(x(Q)("text-muted-foreground ml-auto text-xs tracking-widest", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), x4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(x(vn), oe({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), y4 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(gn), oe({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(Q)(
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
}), k4 = /* @__PURE__ */ O({
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
    const o = e, n = ie(o, "class", "inset"), r = Ce(n);
    return (s, i) => (t(), T(x(hn), oe({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        o.class
      )
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        I(x(ta), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), $4 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ce(e);
    return (r, s) => (t(), T(x(bn), oe({ "data-slot": "dropdown-menu-trigger" }, x(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w4 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(xn), {
      "data-slot": "avatar",
      class: _(x(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), C4 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(yn), oe({ "data-slot": "avatar-fallback" }, x(n), {
      class: x(Q)("bg-muted flex size-full items-center justify-center rounded-full", o.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S4 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(x(kn), oe({ "data-slot": "avatar-image" }, o, { class: "aspect-square size-full" }), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M4 = /* @__PURE__ */ O({
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
}), B4 = /* @__PURE__ */ O({
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
      class: _(x(Q)("flex size-9 items-center justify-center", o.class))
    }, [
      q(n.$slots, "default", {}, () => [
        I(x(Na), { class: "size-4" })
      ]),
      r[0] || (r[0] = l("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), A4 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: _(x(Q)("inline-flex items-center gap-1.5", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), z4 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(He), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: _(x(Q)("hover:text-foreground transition-colors", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), P4 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: _(
        x(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), _4 = /* @__PURE__ */ O({
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
      class: _(x(Q)("text-foreground font-normal", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), O4 = /* @__PURE__ */ O({
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
      class: _(x(Q)("[&>svg]:size-3.5", o.class))
    }, [
      q(n.$slots, "default", {}, () => [
        I(x(ta))
      ])
    ], 2));
  }
}), ku = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, $u = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), a("div", ku, [
      I(x($n), oe({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), j4 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class", "viewport"), i = ve(s, r);
    return (d, u) => (t(), T(x(wn), oe({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: j((m) => [
        q(d.$slots, "default", we(Oe(m))),
        e.viewport ? (t(), T($u, { key: 0 })) : y("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), L4 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Cn), oe({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(Q)(
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
}), V4 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(x(Sn), oe({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(Q)(
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
}), T4 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(Mn), oe({ "data-slot": "navigation-menu-item" }, x(n), {
      class: x(Q)("relative", o.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D4 = /* @__PURE__ */ O({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(Bn), oe({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(Q)(
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
}), E4 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(x(An), oe({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(Q)("group flex flex-1 list-none items-center justify-center gap-1", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I4 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(x(zn), oe({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(Q)(x(wu)(), "group", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        I(x(Ra), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wu = _t(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), F4 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(x(na), oe({ "data-slot": "dialog" }, x(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), N4 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(Ue), oe({ "data-slot": "dialog-close" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cu = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(At), oe({ "data-slot": "dialog-overlay" }, x(n), {
      class: x(Q)(
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
}), R4 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(zt), null, {
      default: j(() => [
        I(Cu),
        I(x(Pt), oe({ "data-slot": "dialog-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default"),
            e.showCloseButton ? (t(), T(x(Ue), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                I(x(Bt)),
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
}), U4 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(x(la), oe({ "data-slot": "dialog-description" }, x(r), {
      class: x(Q)("text-muted-foreground text-sm", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), H4 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: _(x(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", o.class))
    }, [
      q(n.$slots, "default"),
      e.showCloseButton ? (t(), T(x(Ue), {
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
}), q4 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: _(x(Q)("flex flex-col gap-2 text-center sm:text-left", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), K4 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (d, u) => (t(), T(x(zt), null, {
      default: j(() => [
        I(x(At), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            I(x(Pt), oe({
              class: x(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...x(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (m) => {
                const b = m.detail.originalEvent, p = b.target;
                (b.offsetX > p.clientWidth || b.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: j(() => [
                q(d.$slots, "default"),
                I(x(Ue), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    I(x(Bt), { class: "w-4 h-4" }),
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
}), G4 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(x(oa), oe({ "data-slot": "dialog-title" }, x(r), {
      class: x(Q)("text-lg leading-none font-semibold", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W4 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(sa), oe({ "data-slot": "dialog-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Z4 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(x(Pn), oe({ "data-slot": "label" }, x(n), {
      class: x(Q)(
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
}), J4 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(x(Ua), {
      role: "status",
      "aria-label": "Loading",
      class: _(x(Q)("size-4 animate-spin", o.class))
    }, null, 8, ["class"]));
  }
}), Y4 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: _(
        x(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), X4 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: _(x(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Q4 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: _(x(Q)("px-6", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), e5 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: _(x(Q)("text-muted-foreground text-sm", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), t5 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: _(x(Q)("flex items-center px-6 [.border-t]:pt-6", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), a5 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: _(
        x(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), n5 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: _(x(Q)("leading-none font-semibold", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Su = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Mu = { class: "flex items-start gap-3" }, Bu = { class: "min-w-0 flex-1" }, Au = { class: "text-foreground text-sm font-medium" }, zu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, l5 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(!1), d = K(null), u = K(0);
    _a((b) => (console.error(`[PkBoundary] ${r.label} failed to render`, b), i.value = !0, d.value = b instanceof Error ? b.message : null, s("error", b), !1));
    function m() {
      i.value = !1, d.value = null, u.value++;
    }
    return o({ retry: m }), (b, p) => (t(), a("div", {
      class: _(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", Su, [
        l("div", Mu, [
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
          l("div", Bu, [
            l("p", Au, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), a("p", zu, f(d.value), 1)) : y("", !0),
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
}), Pu = { class: "bg-card rounded-lg border" }, _u = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Ou = { class: "min-w-0" }, ju = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Lu = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Vu = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Tu = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, o5 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, n) => (t(), a("section", Pu, [
      e.title || e.description || o.$slots.header || o.$slots.actions ? (t(), a("header", _u, [
        l("div", Ou, [
          q(o.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", ju, f(e.title), 1)) : y("", !0),
            e.description ? (t(), a("p", Lu, f(e.description), 1)) : y("", !0)
          ])
        ]),
        o.$slots.actions ? (t(), a("div", Vu, [
          q(o.$slots, "actions")
        ])) : y("", !0)
      ])) : y("", !0),
      l("div", {
        class: _(e.padded ? "p-4" : "")
      }, [
        q(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (t(), a("footer", Tu, [
        q(o.$slots, "footer")
      ])) : y("", !0)
    ]));
  }
}), ha = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function s5() {
  const e = da(), o = k(() => e.props.panel?.pageFooter === !0);
  return bt(ha, o), o;
}
const Du = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Eu = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Iu = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, r5 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const o = e, n = da(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = k(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), d = nt(ha, k(() => !1)), u = k(() => !o.host && x(d) === !0);
    return (m, b) => u.value ? y("", !0) : (t(), a("footer", Du, [
      l("div", Eu, [
        l("p", null, "© " + f(x(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", Iu, [
          (t(!0), a(P, null, V(i.value, (p) => (t(), T(x(jn), {
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
}), Fu = { class: "flex shrink-0 flex-col items-center" }, Nu = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, i5 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), a("div", Fu, [
      l("div", {
        class: _(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Nu)) : y("", !0),
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
}), Ru = { class: "flex flex-col gap-2" }, Uu = { class: "min-w-0 flex-1" }, Hu = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, qu = ["disabled", "aria-label", "onClick"], Ku = ["disabled", "aria-label", "onClick"], Gu = ["disabled", "title", "aria-label", "onClick"], Wu = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Zu = ["disabled"], d5 = /* @__PURE__ */ O({
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
    fe(
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
    const b = k(() => n.maxItems !== null && i.value.length >= n.maxItems), p = k(() => n.minItems !== null && i.value.length <= n.minItems), h = k(() => n.children.length === 1);
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
    function g(v, c) {
      return n.errors[`${n.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), a("div", Ru, [
      (t(!0), a(P, null, V(i.value, (S, M) => (t(), a("div", {
        key: S.uid,
        class: "flex items-start gap-2"
      }, [
        l("span", {
          class: _(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(M + 1), 3),
        l("div", Uu, [
          h.value ? (t(), T(Ne, {
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
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Hu, [
            (t(!0), a(P, null, V(e.children, (z) => (t(), T(Ne, {
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
          class: _(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
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
          ])], 8, qu),
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
          ])], 8, Ku),
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
          ])], 8, Gu)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", Wu, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : y("", !0),
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
      ], 8, Zu))
    ]));
  }
}), Ju = { class: "space-y-1" }, Yu = { class: "flex items-center gap-1" }, Xu = ["disabled", "title", "aria-label", "onClick"], Qu = ["aria-pressed"], ec = ["id", "value", "rows", "disabled"], tc = ["innerHTML"], ac = /* @__PURE__ */ O({
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
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = k(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(h, A = h) {
      const C = document.getElementById(n.id ?? "");
      if (C === null)
        return;
      const $ = C.selectionStart, w = C.selectionEnd, g = i.value.slice($, w);
      r(
        "update:modelValue",
        `${i.value.slice(0, $)}${h}${g}${A}${i.value.slice(w)}`
      );
    }
    const b = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = k(
      () => (n.toolbar ?? Object.keys(b)).filter((h) => h in b)
    );
    return (h, A) => (t(), a("div", Ju, [
      l("div", Yu, [
        (t(!0), a(P, null, V(p.value, (C) => (t(), a("button", {
          key: C,
          type: "button",
          disabled: e.disabled,
          title: C,
          "aria-label": C,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: ($) => b[C].run()
        }, f(b[C].label), 9, Xu))), 128)),
        l("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: A[0] || (A[0] = (C) => s.value = !s.value)
        }, " Preview ", 8, Qu)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, tc)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: A[1] || (A[1] = (C) => r("update:modelValue", C.target.value))
      }, null, 40, ec))
    ]));
  }
}), nc = { class: "space-y-1" }, lc = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, oc = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, sc = ["id", "value", "rows", "disabled"], rc = { class: "text-muted-foreground text-xs" }, ic = {
  key: 0,
  class: "text-destructive text-xs"
}, dc = /* @__PURE__ */ O({
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
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function b(h) {
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
      const A = h.target, C = A.selectionStart, $ = A.selectionEnd, w = `${d.value.slice(0, C)}    ${d.value.slice($)}`;
      r("update:modelValue", w), requestAnimationFrame(() => {
        A.selectionStart = A.selectionEnd = C + 4;
      });
    }
    return (h, A) => (t(), a("div", nc, [
      l("div", lc, [
        l("div", oc, [
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
        }, null, 40, sc)
      ]),
      l("p", rc, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", ic, f(m.value), 1)) : y("", !0)
    ]));
  }
}), uc = { class: "space-y-3" }, cc = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, fc = { class: "text-sm font-medium" }, mc = { class: "flex items-center gap-1" }, pc = ["disabled", "onClick"], vc = ["disabled", "onClick"], gc = ["disabled", "onClick"], hc = { class: "space-y-3 p-3" }, bc = { class: "flex flex-wrap items-center gap-2" }, xc = ["disabled", "onClick"], yc = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, u5 = /* @__PURE__ */ O({
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
    function b(A) {
      u(s.value.filter((C, $) => $ !== A));
    }
    function p(A, C) {
      const $ = A + C;
      if ($ < 0 || $ >= s.value.length)
        return;
      const w = [...s.value], [g] = w.splice(A, 1);
      w.splice($, 0, g), u(w);
    }
    function h(A, C, $) {
      u(
        s.value.map(
          (w, g) => g === A ? { ...w, data: { ...w.data, [C]: $ } } : w
        )
      );
    }
    return (A, C) => (t(), a("div", uc, [
      (t(!0), a(P, null, V(s.value, ($, w) => (t(), a("div", {
        key: `${$.type}-${w}`,
        class: "bg-card rounded-lg border"
      }, [
        l("div", cc, [
          l("span", fc, f(i.value[$.type]?.label ?? $.type), 1),
          l("div", mc, [
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || w === 0,
              "aria-label": "Move up",
              onClick: (g) => p(w, -1)
            }, " ↑ ", 8, pc),
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || w === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (g) => p(w, 1)
            }, " ↓ ", 8, vc),
            l("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (g) => b(w)
            }, " Remove ", 8, gc)
          ])
        ]),
        l("div", hc, [
          (t(!0), a(P, null, V(i.value[$.type]?.fields ?? [], (g) => (t(), T(Ne, {
            key: g.key,
            field: g,
            value: $.data[g.key] ?? null,
            error: e.errors?.[g.key],
            processing: e.disabled,
            onChange: (v) => h(w, g.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      l("div", bc, [
        (t(!0), a(P, null, V(e.blocks, ($) => (t(), a("button", {
          key: $.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (w) => m($.type)
        }, " + " + f($.label), 9, xc))), 128)),
        d.value ? (t(), a("span", yc, f(e.maxBlocks) + " is the maximum here. ", 1)) : y("", !0)
      ])
    ]));
  }
}), kc = ["name", "value", "checked", "disabled", "onChange"], $c = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, wc = /* @__PURE__ */ O({
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
        }, null, 40, kc),
        U(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", $c, " Nothing to choose from yet. ")) : y("", !0)
    ], 2));
  }
}), Cc = ["value", "checked", "disabled", "onChange"], Sc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Mc = /* @__PURE__ */ O({
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
      return s.value.some((b) => b == m.value);
    }
    function d(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((b) => b != m.value) : [...s.value, m.value]
      );
    }
    const u = k(
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
          onChange: (h) => d(p)
        }, null, 40, Cc),
        U(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Sc, " Nothing to choose from yet. ")) : y("", !0)
    ], 4));
  }
}), Bc = { class: "flex flex-col gap-1.5" }, Ac = ["aria-label", "onClick"], zc = ["placeholder", "disabled", "maxlength"], Pc = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, _c = ["onClick"], Oc = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, jc = /* @__PURE__ */ O({
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
        (h) => !i.value.some((A) => A.toLowerCase() === h.toLowerCase())
      )
    );
    function m(h) {
      const A = h.trim().slice(0, n.field.maxLength ?? 40);
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
    function b(h) {
      r(
        "update:modelValue",
        i.value.filter((A, C) => C !== h)
      );
    }
    function p(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), m(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && b(i.value.length - 1);
    }
    return (h, A) => (t(), a("div", Bc, [
      l("div", {
        class: _(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(P, null, V(i.value, (C, $) => (t(), a("span", {
          key: `${C}-${$}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(f(C) + " ", 1),
          e.disabled ? y("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${C}`,
            onClick: (w) => b($)
          }, " × ", 8, Ac))
        ]))), 128)),
        ce(l("input", {
          "onUpdate:modelValue": A[0] || (A[0] = (C) => s.value = C),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: A[1] || (A[1] = (C) => m(s.value))
        }, null, 40, zc), [
          [ye, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", Pc, [
        A[2] || (A[2] = l("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(P, null, V(u.value, (C) => (t(), a("button", {
          key: C,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: ($) => m(C)
        }, f(C), 9, _c))), 128))
      ])) : y("", !0),
      d.value ? (t(), a("p", Oc, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : y("", !0)
    ]));
  }
}), Lc = 4.5, Wt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ba(e) {
  let o = e.replace("#", "");
  return o.length === 3 && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]), [parseInt(o.slice(0, 2), 16), parseInt(o.slice(2, 4), 16), parseInt(o.slice(4, 6), 16)];
}
function pt(e) {
  const o = e / 255;
  return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
}
function Ct(e) {
  const [o, n, r] = ba(e);
  return 0.2126 * pt(o) + 0.7152 * pt(n) + 0.0722 * pt(r);
}
function xa(e, o) {
  const n = Ct(e), r = Ct(o);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Vc(e, o, n) {
  if (!Wt.test(e) || !Wt.test(o))
    return e;
  const r = Ct(o) > 0.5, s = r ? 0 : 255;
  let i = ba(e);
  for (let d = 0; d <= 20; d++) {
    const u = Tc(i);
    if (xa(u, o) >= n)
      return u;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Tc(e) {
  return "#" + e.map(
    (o) => Math.round(Math.max(0, Math.min(255, o))).toString(16).padStart(2, "0")
  ).join("");
}
const Dc = { class: "flex flex-col gap-2" }, Ec = { class: "flex items-center gap-2" }, Ic = {
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
}, Fc = ["value", "disabled", "aria-label"], Nc = ["value", "disabled", "placeholder"], Rc = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Uc = ["aria-label", "title", "onClick"], Hc = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, qc = /* @__PURE__ */ O({
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
    const b = k(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : xa(i.value, n.field.contrastBackground)), p = k(() => n.field.contrastMinRatio ?? Lc), h = k(() => b.value !== null && b.value < p.value);
    function A() {
      n.field.contrastBackground && r(
        "update:modelValue",
        Vc(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (C, $) => (t(), a("div", Dc, [
      l("div", Ec, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: $[0] || ($[0] = (w) => r("update:modelValue", w.target.value))
        }, null, 40, Fc)) : (t(), a("span", Ic)),
        l("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, Nc)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Rc, [
        (t(!0), a(P, null, V(e.field.presets, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: _(["size-6 rounded border", i.value.toLowerCase() === w.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: w }),
          "aria-label": w,
          title: w,
          onClick: (g) => r("update:modelValue", w.toLowerCase())
        }, null, 14, Uc))), 128))
      ])) : y("", !0),
      h.value ? (t(), a("p", Hc, [
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
}), Kc = { class: "flex items-center gap-3" }, Gc = ["min", "max", "step", "value", "disabled", "aria-label"], Wc = { class: "flex shrink-0 items-center gap-1" }, Zc = ["min", "max", "step", "value", "disabled"], Jc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Yc = /* @__PURE__ */ O({
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
    function b(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(p);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (p, h) => (t(), a("div", Kc, [
      l("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (A) => b(A.target.value))
      }, null, 40, Gc),
      l("div", Wc, [
        l("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: m.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (A) => b(A.target.value))
        }, null, 40, Zc),
        e.field.unit ? (t(), a("span", Jc, f(e.field.unit), 1)) : y("", !0)
      ])
    ]));
  }
}), Qe = /* @__PURE__ */ new Map();
function vt(e, o) {
  Qe.set(e, o);
}
function Xc(e) {
  return Qe.get(e);
}
function c5(e) {
  return Qe.has(e);
}
function Qc() {
  return [...Qe.keys()].sort();
}
function f5() {
  Qe.clear();
}
const ef = ["name", "value", "checked", "disabled", "onChange"], tf = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, af = { class: "whitespace-nowrap" }, nf = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, lf = ["name", "value", "checked", "disabled", "onChange"], of = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, sf = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, rf = { class: "text-center text-xs font-medium" }, df = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, uf = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, cf = /* @__PURE__ */ O({
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
      () => n.field.preview ? Xc(n.field.preview) : void 0
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
    function m(b) {
      return n.modelValue != null && b.value == n.modelValue;
    }
    return (b, p) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: _(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(P, null, V(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: _(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(h) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: m(h),
          disabled: e.disabled,
          onChange: (A) => r("update:modelValue", h.value)
        }, null, 40, ef),
        p[0] || (p[0] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", tf, [
          (t(), T(xe(s.value), {
            value: h.value,
            label: h.label,
            selected: m(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : y("", !0),
        l("span", af, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", nf, " Nothing to choose from yet. ")) : y("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: _(["grid gap-3", u.value])
    }, [
      (t(!0), a(P, null, V(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: _(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(h) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: m(h),
          disabled: e.disabled,
          onChange: (A) => r("update:modelValue", h.value)
        }, null, 40, lf),
        p[1] || (p[1] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        l("span", of, [
          s.value ? (t(), T(xe(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: m(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", sf, " no preview ")) : y("", !0)
        ]),
        l("span", rf, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", df, " Nothing to choose from yet. ")) : y("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", uf, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        l("code", null, f(e.field.preview), 1),
        U(". Registered: " + f(x(Qc)().join(", ") || "none") + ". ", 1)
      ])) : y("", !0)
    ], 2));
  }
}), ff = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, mf = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", ff, [
      l("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), pf = { class: "flex flex-col items-center gap-1 text-center" }, vf = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ya = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", pf, [
      l("div", {
        class: _(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: n.value, color: n.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", vf, f(e.caption), 1)) : y("", !0)
    ]));
  }
}), gf = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, hf = { class: "flex items-center gap-3" }, bf = ["src"], xf = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, yf = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, kf = {
  key: 0,
  class: "text-right text-sm"
}, $f = { class: "text-neutral-500" }, wf = { class: "tabular-nums" }, Cf = { key: 1 }, Sf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Mf = { class: "mt-2 font-medium" }, Bf = { key: 2 }, Af = { class: "w-full text-sm" }, zf = { class: "w-full py-3 pr-2" }, Pf = {
  key: 0,
  class: "text-xs text-neutral-500"
}, _f = { key: 0 }, Of = ["colspan"], jf = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Lf = { class: "w-64 text-sm" }, Vf = { class: "tabular-nums" }, Tf = {
  key: 3,
  class: "py-2"
}, Df = { key: 4 }, Ef = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, If = { class: "mt-2 flex flex-col gap-1 text-sm" }, Ff = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Nf = { key: 0 }, Rf = {
  key: 1,
  class: "mt-1"
}, Uf = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Hf = /* @__PURE__ */ O({
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
    return (m, b) => (t(), a("article", gf, [
      l("div", hf, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, bf)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: n() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), a(P, null, V(e.document.blocks, (p, h) => (t(), a(P, { key: h }, [
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
            p.subtitle ? (t(), a("p", xf, f(p.subtitle), 1)) : y("", !0),
            p.reference ? (t(), a("p", yf, f(p.reference), 1)) : y("", !0)
          ]),
          r(p).length ? (t(), a("dl", kf, [
            (t(!0), a(P, null, V(r(p), (A, C) => (t(), a("div", {
              key: C,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              l("dt", $f, f(A.label), 1),
              l("dd", wf, f(A.value), 1)
            ]))), 128))
          ])) : y("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", Cf, [
          l("h2", Sf, f(p.heading), 1),
          l("p", Mf, f(p.name), 1),
          (t(!0), a(P, null, V(d(p.lines), (A, C) => (t(), a("p", {
            key: C,
            class: "text-sm text-neutral-600"
          }, f(A), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", Bf, [
          l("table", Af, [
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
                l("td", zf, [
                  l("p", null, f(A.description), 1),
                  A.detail ? (t(), a("p", Pf, f(A.detail), 1)) : y("", !0)
                ]),
                (t(!0), a(P, null, V(A.cells, ($, w) => (t(), a("td", {
                  key: w,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f($), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", _f, [
                l("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, Of)
              ])) : y("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", jf, [
            l("dl", Lf, [
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
                l("dd", Vf, f(A.value), 1)
              ], 6))), 128))
            ])
          ])) : y("", !0)
        ])) : p.type === "code" ? (t(), a("section", Tf, [
          I(ya, {
            code: u(p.code),
            caption: u(p.caption),
            style: ne(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", Df, [
          l("h2", Ef, f(p.heading), 1),
          l("ol", If, [
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
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", Ff, [
          p.text ? (t(), a("p", Nf, f(p.text), 1)) : y("", !0),
          d(p.contacts).length ? (t(), a("p", Rf, f(d(p.contacts).join(" · ")), 1)) : y("", !0)
        ])) : (t(), a("p", Uf, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), qf = ["aria-label", "title"], Kf = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gf = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, m5 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: o, set: n } = pa(), r = k(() => o.value.theme === "dark");
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
      (t(), a("svg", Kf, [
        r.value ? (t(), a(P, { key: 0 }, [
          d[0] || (d[0] = l("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = l("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", Gf))
      ]))
    ], 8, qf));
  }
}), Wf = ["width", "height"], Zf = { key: 0 }, Jf = ["x1", "x2", "y1", "y2"], Yf = ["x", "y"], Xf = ["x1", "x2", "y1", "y2"], Qf = ["x", "y"], em = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], tm = ["x", "y", "width", "height", "fill", "fill-opacity"], am = ["x", "y"], nm = ["x", "y"], lm = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, om = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, sm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, rm = { class: "text-xs font-semibold tabular-nums" }, im = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, dm = { class: "text-muted-foreground" }, Zt = 5.6, p5 = /* @__PURE__ */ O({
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
      const L = o.thresholds.find((Y) => B < Y.max);
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
    ], p = k(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? b[L % b.length]
    }))), h = k(() => p.value[0]?.points.map((B) => B.label) ?? []), A = k(() => h.value.length), C = k(() => o.orientation === "horizontal"), $ = k(() => Math.max(0, ...h.value.map((B) => B.length))), w = k(() => {
      if (!C.value)
        return o.showAxis ? 44 : 8;
      const B = $.value * Zt + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), g = k(() => Math.max(4, Math.floor((w.value - 16) / Zt)));
    function v(B) {
      return B.length <= g.value ? B : `${B.slice(0, g.value - 1)}…`;
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
      const B = h.value.map(
        (le, F) => o.stacked ? p.value.reduce((E, X) => E + Math.max(0, X.points[F]?.value ?? 0), 0) : Math.max(...p.value.map((E) => E.points[F]?.value ?? 0))
      );
      if (o.maxValue)
        return o.maxValue;
      const N = Math.max(...B, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((le) => N <= le * L) ?? 10) * L;
    }), D = k(
      () => (C.value ? S.value.h : S.value.w) / Math.max(1, A.value)
    ), ee = k(() => D.value * 0.68), H = k(
      () => o.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), G = k(() => {
      const B = [], N = new Array(A.value).fill(0);
      return p.value.forEach((L, Y) => {
        L.points.forEach((le, F) => {
          const X = Math.max(0, le.value) / R.value * (C.value ? S.value.w : S.value.h), ue = (C.value ? c.value.top : c.value.left) + F * D.value + (D.value - ee.value) / 2, re = o.stacked ? 0 : Y * H.value;
          B.push(
            C.value ? {
              x: c.value.left + N[F],
              y: ue + re,
              w: X,
              h: Math.max(0, H.value - 2),
              color: s(le.value, L.color),
              label: le.label,
              name: L.name,
              value: le.value,
              index: F
            } : {
              x: ue + re,
              y: c.value.top + S.value.h - X - N[F],
              w: Math.max(0, H.value - 2),
              h: X,
              color: s(le.value, L.color),
              label: le.label,
              name: L.name,
              value: le.value,
              index: F
            }
          ), o.stacked && (N[F] += X);
        });
      }), B;
    }), Z = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: R.value * (C.value ? B : 1 - B),
        x: c.value.left + S.value.w * B,
        y: c.value.top + S.value.h * B
      }))
    ), ae = k(() => Math.max(1, Math.ceil(A.value / (C.value ? 14 : 10))));
    function te(B) {
      return B === A.value - 1 || B % ae.value === 0;
    }
    function J(B) {
      return (C.value ? c.value.top : c.value.left) + B * D.value + D.value / 2;
    }
    const W = k(() => u.value === null ? null : {
      label: h.value[u.value],
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
          e.showAxis ? (t(), a("g", Zf, [
            C.value ? (t(), a(P, { key: 0 }, [
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: c.value.top,
                y2: c.value.top + S.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Jf))), 128)),
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(z(L.value)), 9, Yf))), 128))
            ], 64)) : (t(), a(P, { key: 1 }, [
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: c.value.left,
                x2: d.value - c.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Xf))), 128)),
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: c.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(z(L.value)), 9, Qf))), 128))
            ], 64))
          ])) : y("", !0),
          (t(!0), a(P, null, V(h.value, (L, Y) => (t(), a("rect", {
            key: `hit-${Y}`,
            x: C.value ? c.value.left : c.value.left + Y * D.value,
            y: C.value ? c.value.top + Y * D.value : c.value.top,
            width: C.value ? S.value.w : D.value,
            height: C.value ? D.value : S.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === Y ? 0.4 : 0,
            onMouseenter: (le) => u.value = Y
          }, null, 40, em))), 128)),
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
          }, null, 8, tm))), 128)),
          C.value ? (t(!0), a(P, { key: 1 }, V(h.value, (L, Y) => ce((t(), a("text", {
            key: `c-${Y}`,
            x: c.value.left - 8,
            y: J(Y) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(f(v(L)) + " ", 1),
            l("title", null, f(L), 1)
          ], 8, am)), [
            [Ve, te(Y)]
          ])), 128)) : (t(!0), a(P, { key: 2 }, V(h.value, (L, Y) => ce((t(), a("text", {
            key: `c-${Y}`,
            x: J(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, nm)), [
            [Ve, te(Y)]
          ])), 128))
        ], 40, Wf)),
        W.value ? (t(), a("div", lm, [
          l("p", om, f(W.value.label), 1),
          (t(!0), a(P, null, V(W.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", sm, f(L.name || "Value"), 1),
            l("span", rm, f(M(L.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", im, [
          (t(!0), a(P, null, V(p.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", dm, f(L.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), um = ["width", "height"], cm = ["id"], fm = ["stop-color"], mm = ["stop-color"], pm = { key: 0 }, vm = ["x1", "x2", "y1", "y2"], gm = ["x", "y"], hm = ["x", "y"], bm = ["x1", "x2", "y1", "y2"], xm = ["d", "fill"], ym = ["d", "stroke", "stroke-dasharray"], km = ["cx", "cy", "fill"], $m = { key: 1 }, wm = ["x1", "x2", "y1", "y2"], Cm = ["cx", "cy", "fill"], Sm = ["x", "y"], Mm = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Bm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Am = { class: "text-xs font-semibold tabular-nums" }, zm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Pm = { class: "text-muted-foreground" }, _m = /* @__PURE__ */ O({
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
    const o = e, n = k(() => b.value.some((B) => B.axis === "right")), r = K(null), s = K(560), i = K(null);
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
    ], m = Math.random().toString(36).slice(2, 9), b = k(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? u[L % u.length]
    }))), p = k(() => b.value[0]?.points.map((B) => B.label) ?? []), h = k(() => p.value.length), A = k(() => ({
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
      return ([1, 2, 2.5, 5, 10].find((le) => N <= le * L) ?? 10) * L;
    }
    const g = k(
      () => w(
        b.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((N) => N.value))
      )
    ), v = k(
      () => w(
        b.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((N) => N.value))
      )
    ), c = k(() => ({
      w: Math.max(1, s.value - A.value.left - A.value.right),
      h: Math.max(1, o.height - A.value.top - A.value.bottom)
    }));
    function S(B) {
      return A.value.left + (h.value <= 1 ? 0 : B / (h.value - 1) * c.value.w);
    }
    function M(B, N = "left") {
      const L = N === "right" ? v.value : g.value;
      return A.value.top + c.value.h - B / L * c.value.h;
    }
    const z = k(
      () => b.value.map((B) => {
        const N = B.points.map((Y, le) => ({
          ...Y,
          x: S(le),
          y: M(Y.value, B.axis ?? "left")
        })), L = B.stepped ? R(N) : D(N);
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
    function D(B) {
      const N = B.length;
      if (N === 0)
        return "";
      if (N === 1)
        return `M${B[0].x},${B[0].y}`;
      const L = [], Y = [];
      for (let E = 0; E < N - 1; E++)
        L[E] = B[E + 1].x - B[E].x, Y[E] = L[E] === 0 ? 0 : (B[E + 1].y - B[E].y) / L[E];
      const le = [Y[0]];
      for (let E = 1; E < N - 1; E++)
        if (Y[E - 1] * Y[E] <= 0)
          le[E] = 0;
        else {
          const X = 2 * L[E] + L[E - 1], ue = L[E] + 2 * L[E - 1];
          le[E] = (X + ue) / (X / Y[E - 1] + ue / Y[E]);
        }
      le[N - 1] = Y[N - 2];
      let F = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let E = 0; E < N - 1; E++) {
        const X = L[E] / 3;
        F += ` C${(B[E].x + X).toFixed(2)},${(B[E].y + le[E] * X).toFixed(2)} ${(B[E + 1].x - X).toFixed(2)},${(B[E + 1].y - le[E + 1] * X).toFixed(2)} ${B[E + 1].x.toFixed(2)},${B[E + 1].y.toFixed(2)}`;
      }
      return F;
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
        value: g.value * (1 - B)
      }))
    ), G = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: A.value.top + c.value.h * B,
        value: v.value * (1 - B)
      }))
    ), Z = k(() => Math.max(1, Math.ceil(h.value / 8)));
    function ae(B) {
      return B === h.value - 1 || B % Z.value === 0;
    }
    function te(B) {
      const N = B.currentTarget.getBoundingClientRect(), L = B.clientX - N.left - A.value.left, Y = h.value <= 1 ? 1 : c.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(L / Y)));
    }
    const J = k(() => {
      if (i.value === null || h.value === 0)
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
    }), W = k(() => {
      if (!J.value)
        return {};
      const B = J.value.x > s.value * 0.6;
      return {
        left: `${J.value.x}px`,
        top: "8px",
        transform: B ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (B, N) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
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
            (t(!0), a(P, null, V(z.value, (L, Y) => (t(), a("linearGradient", {
              id: `pk-fill-${x(m)}-${Y}`,
              key: Y,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              l("stop", {
                offset: "0%",
                "stop-color": L.color,
                "stop-opacity": "0.25"
              }, null, 8, fm),
              l("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, mm)
            ], 8, cm))), 128))
          ]),
          e.showAxis ? (t(), a("g", pm, [
            (t(!0), a(P, null, V(H.value, (L) => (t(), a("line", {
              key: L.y,
              x1: A.value.left,
              x2: s.value - A.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, vm))), 128)),
            (t(!0), a(P, null, V(H.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: A.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(L.value)), 9, gm))), 128)),
            n.value ? (t(!0), a(P, { key: 0 }, V(G.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - A.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f($(L.value)), 9, hm))), 128)) : y("", !0)
          ])) : y("", !0),
          (t(!0), a(P, null, V(p.value, (L, Y) => ce((t(), a("line", {
            key: `v-${Y}`,
            x1: S(Y),
            x2: S(Y),
            y1: A.value.top,
            y2: A.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, bm)), [
            [Ve, ae(Y)]
          ])), 128)),
          (t(!0), a(P, null, V(z.value, (L, Y) => (t(), a("g", {
            key: `s-${Y}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${x(m)}-${Y})`
            }, null, 8, xm)) : y("", !0),
            l("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, ym),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, km)) : y("", !0)
          ]))), 128)),
          J.value ? (t(), a("g", $m, [
            l("line", {
              x1: J.value.x,
              x2: J.value.x,
              y1: A.value.top,
              y2: A.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, wm),
            (t(!0), a(P, null, V(J.value.rows, (L, Y) => (t(), a("circle", {
              key: `d-${Y}`,
              cx: J.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Cm))), 128))
          ])) : y("", !0),
          (t(!0), a(P, null, V(p.value, (L, Y) => ce((t(), a("text", {
            key: `x-${Y}`,
            x: S(Y),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, Sm)), [
            [Ve, ae(Y)]
          ])), 128))
        ], 40, um)),
        J.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(W.value)
        }, [
          l("p", Mm, f(J.value.label), 1),
          (t(!0), a(P, null, V(J.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Bm, f(L.name || "Value"), 1),
            l("span", Am, f(C(L.value)), 1)
          ]))), 128))
        ], 4)) : y("", !0),
        e.showLegend && b.value.length > 1 ? (t(), a("div", zm, [
          (t(!0), a(P, null, V(z.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Pm, f(L.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Om = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, jm = { class: "text-muted-foreground text-[11px] capitalize" }, Lm = { class: "text-sm font-semibold tabular-nums" }, Vm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, et = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (o, n) => (t(), a("div", Om, [
      l("p", jm, f(e.label), 1),
      l("p", Lm, [
        U(f(e.value) + " ", 1),
        e.share ? (t(), a("span", Vm, " (" + f(e.share) + ") ", 1)) : y("", !0)
      ])
    ]));
  }
}), Tm = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Dm = ["width", "height", "viewBox", "aria-label"], Em = ["d", "fill", "fill-opacity", "onMouseenter"], Im = ["x", "y"], Fm = ["x", "y"], Nm = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Rm = ["onMouseenter"], Um = { class: "min-w-0 flex-1 truncate capitalize" }, Hm = { class: "tabular-nums font-medium" }, qm = { class: "text-muted-foreground w-9 text-right tabular-nums" }, v5 = /* @__PURE__ */ O({
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
    ], r = k(() => o.data.reduce((g, v) => g + v.value, 0)), s = K(null), i = k(() => o.height), d = k(() => i.value / 2 - 4), u = k(() => o.type === "doughnut" ? d.value * 0.62 : 0);
    function m(g) {
      return n[g % n.length];
    }
    function b(g) {
      return 1 - Math.min(0.55, Math.floor(g / n.length) * 0.28);
    }
    const p = k(() => {
      if (r.value <= 0)
        return [];
      const g = i.value / 2;
      let v = -Math.PI / 2;
      return o.data.map((c, S) => {
        const M = c.value / r.value, z = M * Math.PI * 2, R = v, D = v + z;
        return v = D, {
          ...c,
          share: M,
          colour: m(S),
          opacity: b(S),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: M >= 0.9999 ? C(g) : A(g, R, D, d.value, u.value)
        };
      });
    });
    function h(g, v, c) {
      return `${(g + Math.cos(v) * c).toFixed(2)},${(g + Math.sin(v) * c).toFixed(2)}`;
    }
    function A(g, v, c, S, M) {
      const z = c - v > Math.PI ? 1 : 0;
      return M <= 0 ? `M${g},${g} L${h(g, v, S)} A${S},${S} 0 ${z} 1 ${h(g, c, S)} Z` : [
        `M${h(g, v, S)}`,
        `A${S},${S} 0 ${z} 1 ${h(g, c, S)}`,
        `L${h(g, c, M)}`,
        `A${M},${M} 0 ${z} 0 ${h(g, v, M)}`,
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
    const $ = (g) => o.format ? o.format(g) : new Intl.NumberFormat().format(g), w = (g) => `${(g * 100).toFixed(g < 0.01 ? 2 : 0)}%`;
    return (g, v) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Tm, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${$(r.value)}`
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
        }, null, 40, Em))), 128)),
        e.type === "doughnut" ? (t(), a(P, { key: 0 }, [
          l("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f($(s.value === null ? r.value : p.value[s.value].value)), 9, Im),
          l("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Fm)
        ], 64)) : y("", !0)
      ], 8, Dm)),
      l("ul", Nm, [
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
          l("span", Um, f(c.label), 1),
          l("span", Hm, f($(c.value)), 1),
          l("span", qm, f(w(c.share)), 1)
        ], 42, Rm))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(et, {
        key: 0,
        label: p.value[s.value].label,
        value: $(p.value[s.value].value),
        share: w(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), Km = ["width", "height", "viewBox", "aria-label"], Gm = { class: "text-border" }, Wm = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Zm = { class: "fill-muted-foreground text-[10px]" }, Jm = ["x", "y"], Ym = ["x", "y"], Xm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Qm = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, g5 = /* @__PURE__ */ O({
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
      d = new ResizeObserver((Z) => {
        const ae = Z[0]?.contentRect.width ?? 0;
        ae > 0 && (s.value = ae);
      }), r.value && d.observe(r.value);
    }), be(() => d?.disconnect());
    const u = k(
      () => o.series?.length ? o.series : [{ name: "", points: o.data ?? [] }]
    ), m = (Z, ae) => ae.color ?? n[Z % n.length], b = k(() => u.value.flatMap((Z) => Z.points)), p = k(() => b.value.some((Z) => typeof Z.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, A = k(() => Math.max(10, s.value - h.left - h.right)), C = k(() => Math.max(10, o.height - h.top - h.bottom));
    function $(Z) {
      if (Z.length === 0)
        return [0, 1];
      const ae = Math.min(...Z), te = Math.max(...Z), J = te - ae || Math.abs(te) || 1;
      return [ae - J * 0.08, te + J * 0.08];
    }
    const w = k(() => $(b.value.map((Z) => Z.x))), g = k(() => $(b.value.map((Z) => Z.y))), v = (Z) => {
      const [ae, te] = w.value;
      return h.left + (Z - ae) / (te - ae) * A.value;
    }, c = (Z) => {
      const [ae, te] = g.value;
      return h.top + C.value - (Z - ae) / (te - ae) * C.value;
    }, S = k(() => Math.max(...b.value.map((Z) => Z.r ?? 0), 0));
    function M(Z) {
      if (!p.value || !S.value)
        return 4;
      const ae = Math.max(0, Z.r ?? 0) / S.value;
      return 3 + Math.sqrt(ae) * (o.maxRadius - 3);
    }
    function z([Z, ae]) {
      return Array.from({ length: 5 }, (te, J) => Z + (ae - Z) / 4 * J);
    }
    const R = k(() => z(w.value)), D = k(() => z(g.value)), ee = (Z) => o.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), H = (Z) => o.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), G = k(() => {
      if (!i.value)
        return null;
      const Z = u.value[i.value.s], ae = Z?.points[i.value.p];
      return ae ? { series: Z, point: ae } : null;
    });
    return (Z, ae) => (t(), a("div", {
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
        l("g", Gm, [
          (t(!0), a(P, null, V(D.value, (te, J) => (t(), a("line", {
            key: `gy-${J}`,
            x1: h.left,
            x2: h.left + A.value,
            y1: c(te),
            y2: c(te),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": J === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Wm))), 128))
        ]),
        l("g", Zm, [
          (t(!0), a(P, null, V(D.value, (te, J) => (t(), a("text", {
            key: `ty-${J}`,
            x: h.left - 8,
            y: c(te) + 3,
            "text-anchor": "end"
          }, f(H(te)), 9, Jm))), 128)),
          (t(!0), a(P, null, V(R.value, (te, J) => (t(), a("text", {
            key: `tx-${J}`,
            x: v(te),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ee(te)), 9, Ym))), 128))
        ]),
        (t(!0), a(P, null, V(u.value, (te, J) => (t(), a("g", {
          key: `s-${J}`
        }, [
          (t(!0), a(P, null, V(te.points, (W, B) => (t(), a("circle", {
            key: `p-${J}-${B}`,
            cx: v(W.x),
            cy: c(W.y),
            r: M(W),
            fill: m(J, te),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(J, te),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== J || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (N) => i.value = { s: J, p: B },
            onMouseleave: ae[0] || (ae[0] = (N) => i.value = null)
          }, null, 40, Xm))), 128))
        ]))), 128))
      ], 8, Km)),
      G.value ? (t(), T(et, {
        key: 0,
        label: G.value.point.label ?? G.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(G.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(G.value.point.y)}`,
        share: p.value && G.value.point.r != null ? String(G.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : y("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", Qm, [
        (t(!0), a(P, null, V(u.value, (te, J) => (t(), a("span", {
          key: `l-${J}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          l("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: m(J, te) }),
            "aria-hidden": "true"
          }, null, 4),
          U(" " + f(te.name), 1)
        ]))), 128))
      ])) : y("", !0)
    ], 512));
  }
}), ep = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, tp = ["width", "height", "viewBox"], ap = ["points"], np = ["x1", "y1", "x2", "y2"], lp = ["points", "fill", "stroke"], op = ["cx", "cy", "fill", "onMouseenter"], sp = ["x", "y", "text-anchor"], rp = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, ip = { class: "truncate" }, h5 = /* @__PURE__ */ O({
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
    ), s = k(() => r.value[0]?.points.map((c) => c.label) ?? []), i = k(() => s.value.length), d = k(() => o.height), u = k(() => d.value / 2), m = k(() => d.value / 2 - 34), b = k(() => {
      const c = Math.max(...r.value.flatMap((z) => z.points.map((R) => R.value)), 0);
      if (c <= 0)
        return 1;
      const S = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((z) => c <= z * S) ?? 10) * S;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(c, S) {
      const M = p(c);
      return {
        x: u.value + Math.cos(M) * m.value * S,
        y: u.value + Math.sin(M) * m.value * S
      };
    }
    function A(c) {
      return Array.from({ length: i.value }, (S, M) => {
        const z = h(M, c);
        return `${z.x.toFixed(2)},${z.y.toFixed(2)}`;
      }).join(" ");
    }
    const C = k(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: A(c) }))), $ = k(
      () => r.value.map((c) => {
        const S = c.points.map((M) => Math.max(0, M.value) / b.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: S.map((M, z) => {
            const R = h(z, M);
            return `${R.x.toFixed(2)},${R.y.toFixed(2)}`;
          }).join(" "),
          dots: S.map((M, z) => h(z, M))
        };
      })
    ), w = k(
      () => s.value.map((c, S) => {
        const M = p(S), z = u.value + Math.cos(M) * (m.value + 14), R = u.value + Math.sin(M) * (m.value + 14), D = Math.cos(M);
        return {
          label: c,
          x: z,
          y: R + 3,
          anchor: Math.abs(D) < 0.2 ? "middle" : D > 0 ? "start" : "end"
        };
      })
    ), g = K(null), v = (c) => o.format ? o.format(c) : new Intl.NumberFormat().format(c);
    return (c, S) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", ep, [
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
        }, null, 8, ap))), 128)),
        (t(!0), a(P, null, V(s.value, (M, z) => (t(), a("line", {
          key: `spoke-${z}`,
          x1: u.value,
          y1: u.value,
          x2: h(z, 1).x,
          y2: h(z, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, np))), 128)),
        (t(!0), a(P, null, V($.value, (M, z) => (t(), a("g", {
          key: `s-${z}`
        }, [
          l("polygon", {
            points: M.outline,
            fill: M.color,
            "fill-opacity": "0.16",
            stroke: M.color,
            "stroke-width": "2"
          }, null, 8, lp),
          (t(!0), a(P, null, V(M.dots, (R, D) => (t(), a("circle", {
            key: D,
            cx: R.x,
            cy: R.y,
            r: "3",
            fill: M.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => g.value = {
              series: M.name,
              axis: s.value[D],
              value: M.values[D]?.value ?? 0
            },
            onMouseleave: S[0] || (S[0] = (ee) => g.value = null)
          }, null, 40, op))), 128))
        ]))), 128)),
        (t(!0), a(P, null, V(w.value, (M, z) => (t(), a("text", {
          key: `l-${z}`,
          x: M.x,
          y: M.y,
          "text-anchor": M.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(M.label), 9, sp))), 128))
      ], 8, tp)),
      e.showLegend ? (t(), a("ul", rp, [
        (t(!0), a(P, null, V(r.value, (M, z) => (t(), a("li", {
          key: z,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: M.color })
          }, null, 4),
          l("span", ip, f(M.name), 1)
        ]))), 128))
      ])) : y("", !0),
      g.value ? (t(), T(et, {
        key: 1,
        label: `${g.value.series} — ${g.value.axis}`,
        value: v(g.value.value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), dp = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, up = ["width", "height", "viewBox"], cp = ["cx", "cy", "r"], fp = ["d", "fill", "fill-opacity", "onMouseenter"], mp = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, pp = { class: "min-w-0 flex-1 truncate capitalize" }, vp = { class: "font-medium tabular-nums" }, b5 = /* @__PURE__ */ O({
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
        const g = Math.sqrt(Math.max(0, $.value) / u.value), v = d.value * g, c = w * C - Math.PI / 2, S = c + C;
        return {
          ...$,
          color: n[w % n.length],
          share: u.value === 0 ? 0 : $.value / u.value,
          path: b(i.value, c, S, v)
        };
      });
    });
    function b(A, C, $, w) {
      if (w <= 0)
        return "";
      if ($ - C >= Math.PI * 2 - 1e-6)
        return `M${A - w},${A} A${w},${w} 0 1 1 ${A + w},${A} A${w},${w} 0 1 1 ${A - w},${A} Z`;
      const g = $ - C > Math.PI ? 1 : 0, v = A + Math.cos(C) * w, c = A + Math.sin(C) * w, S = A + Math.cos($) * w, M = A + Math.sin($) * w;
      return `M${A},${A} L${v.toFixed(2)},${c.toFixed(2)} A${w.toFixed(2)},${w.toFixed(2)} 0 ${g} 1 ${S.toFixed(2)},${M.toFixed(2)} Z`;
    }
    const p = k(() => [0.5, 0.75, 1].map((A) => d.value * A)), h = (A) => o.format ? o.format(A) : new Intl.NumberFormat().format(A);
    return (A, C) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", dp, [
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
        }, null, 8, cp))), 128)),
        (t(!0), a(P, null, V(m.value, ($, w) => (t(), a("path", {
          key: w,
          d: $.path,
          fill: $.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === w ? 0.75 : 0.3,
          onMouseenter: (g) => r.value = w,
          onMouseleave: C[0] || (C[0] = (g) => r.value = null)
        }, null, 40, fp))), 128))
      ], 8, up)),
      e.showLegend ? (t(), a("ul", mp, [
        (t(!0), a(P, null, V(m.value, ($, w) => (t(), a("li", {
          key: w,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: $.color })
          }, null, 4),
          l("span", pp, f($.label), 1),
          l("span", vp, f(h($.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      r.value !== null ? (t(), T(et, {
        key: 1,
        label: m.value[r.value].label,
        value: h(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), gp = ["width", "height"], hp = ["x1", "x2", "y1", "y2"], bp = ["x", "y"], xp = ["x", "y"], yp = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], kp = ["x", "y", "width", "height", "fill", "fill-opacity"], $p = ["d", "stroke"], wp = ["cx", "cy", "fill"], Cp = ["x", "y"], Sp = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Mp = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Bp = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Ap = { class: "text-xs font-semibold tabular-nums" }, zp = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Pp = { class: "text-muted-foreground" }, x5 = /* @__PURE__ */ O({
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
      i = new ResizeObserver((J) => {
        r.value = Math.max(160, J[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), be(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], m = k(
      () => o.bars.map((J, W) => ({
        ...J,
        color: J.color ?? d[W % d.length]
      }))
    ), b = k(
      () => o.lines.map((J, W) => ({
        ...J,
        color: J.color ?? u[W % u.length]
      }))
    ), p = k(
      () => m.value[0]?.points.map((J) => J.label) ?? b.value[0]?.points.map((J) => J.label) ?? []
    ), h = k(() => p.value.length), A = k(() => o.lineAxis === "right"), C = k(() => ({
      top: 12,
      right: A.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), $ = k(() => ({
      w: Math.max(1, r.value - C.value.left - C.value.right),
      h: Math.max(1, o.height - C.value.top - C.value.bottom)
    }));
    function w(J) {
      const W = Math.max(...J, 0);
      if (W <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(W));
      return ([1, 2, 2.5, 5, 10].find((L) => W <= L * B) ?? 10) * B;
    }
    const g = k(
      () => w([
        ...m.value.flatMap((J) => J.points.map((W) => W.value)),
        ...A.value ? [] : b.value.flatMap((J) => J.points.map((W) => W.value))
      ])
    ), v = k(
      () => A.value ? w(b.value.flatMap((J) => J.points.map((W) => W.value))) : g.value
    ), c = k(() => $.value.w / Math.max(1, h.value)), S = k(() => c.value * 0.6), M = k(() => S.value / Math.max(1, m.value.length));
    function z(J) {
      return C.value.left + J * c.value + c.value / 2;
    }
    const R = k(
      () => m.value.flatMap(
        (J, W) => J.points.map((B, N) => {
          const L = Math.max(0, B.value) / g.value * $.value.h;
          return {
            x: z(N) - S.value / 2 + W * M.value,
            y: C.value.top + $.value.h - L,
            w: Math.max(0, M.value - 2),
            h: L,
            color: J.color,
            index: N,
            name: J.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), D = k(
      () => b.value.map((J) => {
        const W = J.points.map((B, N) => ({
          x: z(N),
          y: C.value.top + $.value.h - Math.max(0, B.value) / v.value * $.value.h,
          value: B.value
        }));
        return {
          ...J,
          pts: W,
          d: W.map((B, N) => `${N === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((J) => ({
        y: C.value.top + $.value.h * J,
        left: g.value * (1 - J),
        right: v.value * (1 - J)
      }))
    ), H = k(() => Math.max(1, Math.ceil(h.value / 10)));
    function G(J) {
      return J === h.value - 1 || J % H.value === 0;
    }
    const Z = (J) => o.format ? o.format(J) : ae(J);
    function ae(J) {
      return Math.abs(J) >= 1e6 ? `${(J / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(J) >= 1e3 ? `${(J / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(J * 100) / 100);
    }
    const te = k(() => {
      if (s.value === null)
        return null;
      const J = s.value;
      return {
        label: p.value[J],
        rows: [
          ...m.value.map((W) => ({
            name: W.name,
            color: W.color,
            value: W.points[J]?.value ?? 0
          })),
          ...b.value.map((W) => ({
            name: W.name,
            color: W.color,
            value: W.points[J]?.value ?? 0
          }))
        ]
      };
    });
    return (J, W) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: W[0] || (W[0] = (B) => s.value = null)
        }, [
          (t(!0), a(P, null, V(ee.value, (B) => (t(), a("line", {
            key: `g-${B.y}`,
            x1: C.value.left,
            x2: r.value - C.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, hp))), 128)),
          (t(!0), a(P, null, V(ee.value, (B) => (t(), a("text", {
            key: `lt-${B.y}`,
            x: C.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(B.left)), 9, bp))), 128)),
          A.value ? (t(!0), a(P, { key: 0 }, V(ee.value, (B) => (t(), a("text", {
            key: `rt-${B.y}`,
            x: r.value - C.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(B.right)), 9, xp))), 128)) : y("", !0),
          (t(!0), a(P, null, V(p.value, (B, N) => (t(), a("rect", {
            key: `hit-${N}`,
            x: C.value.left + N * c.value,
            y: C.value.top,
            width: c.value,
            height: $.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === N ? 0.4 : 0,
            onMouseenter: (L) => s.value = N
          }, null, 40, yp))), 128)),
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
          }, null, 8, kp))), 128)),
          (t(!0), a(P, null, V(D.value, (B, N) => (t(), a("g", {
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
            }, null, 8, $p),
            s.value !== null && B.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, wp)) : y("", !0)
          ]))), 128)),
          (t(!0), a(P, null, V(p.value, (B, N) => ce((t(), a("text", {
            key: `x-${N}`,
            x: z(N),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(B), 9, Cp)), [
            [Ve, G(N)]
          ])), 128))
        ], 40, gp)),
        te.value ? (t(), a("div", Sp, [
          l("p", Mp, f(te.value.label), 1),
          (t(!0), a(P, null, V(te.value.rows, (B, N) => (t(), a("div", {
            key: N,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            l("span", Bp, f(B.name), 1),
            l("span", Ap, f(Z(B.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend ? (t(), a("div", zp, [
          (t(!0), a(P, null, V([...m.value, ...b.value], (B, N) => (t(), a("span", {
            key: N,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            l("span", Pp, f(B.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), _p = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Op = { class: "text-muted-foreground" }, jp = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Lp = ["width", "height"], Vp = ["x", "y"], Tp = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Dp = ["x", "y"], Ep = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Ip = { class: "text-[11px] font-medium capitalize" }, Fp = { class: "text-muted-foreground text-[11px] capitalize" }, Np = { class: "text-sm font-semibold tabular-nums" }, Rp = { class: "text-muted-foreground text-xs font-normal" }, y5 = /* @__PURE__ */ O({
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
    const d = k(() => o.series[0]?.points.map((S) => S.label) ?? []), u = k(() => o.series.length), m = k(() => d.value.length), b = k(() => Math.min(140, Math.max(60, r.value * 0.16))), p = k(() => Math.max(1, r.value - b.value - 8)), h = k(() => p.value / Math.max(1, m.value)), A = k(() => Math.max(1, (o.height - 8) / Math.max(1, u.value)));
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
          const D = $(z.value);
          return {
            row: M,
            col: R,
            x: b.value + R * h.value,
            y: 4 + M * A.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, A.value - 4),
            colour: C(D),
            label: z.label,
            value: z.value,
            rowName: S.name,
            bucketLabel: o.buckets[D].label
          };
        })
      )
    ), g = k(() => h.value < 2), v = k(() => s.value ? w.value.find((S) => S.row === s.value.row && S.col === s.value.col) ?? null : null), c = (S) => o.format ? o.format(S) : new Intl.NumberFormat().format(S);
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
        l("div", _p, [
          (t(!0), a(P, null, V(e.buckets, (z, R) => (t(), a("span", {
            key: R,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            l("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: C(R) })
            }, null, 4),
            l("span", Op, f(z.label), 1)
          ]))), 128))
        ]),
        g.value ? (t(), a("p", jp, f(m.value) + " columns - too many to label individually ", 1)) : y("", !0),
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
          }, f(z.name), 9, Vp))), 128)),
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
            onMouseenter: (D) => s.value = { row: z.row, col: z.col }
          }, null, 40, Tp))), 128)),
          e.showColumnLabels && !g.value ? (t(!0), a(P, { key: 0 }, V(d.value, (z, R) => (t(), a("text", {
            key: `c-${R}`,
            x: b.value + R * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(z), 9, Dp))), 128)) : y("", !0)
        ], 40, Lp)),
        v.value ? (t(), a("div", Ep, [
          l("p", Ip, f(v.value.label), 1),
          l("p", Fp, f(v.value.rowName), 1),
          l("p", Np, [
            U(f(c(v.value.value)) + " ", 1),
            l("span", Rp, "(" + f(v.value.bucketLabel) + ")", 1)
          ])
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Up = ["viewBox"], Hp = { key: 0 }, qp = ["id"], Kp = ["stop-color"], Gp = ["stop-color"], Wp = ["d", "fill"], Zp = ["d", "stroke"], Jt = 100, qe = 30, dt = /* @__PURE__ */ O({
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
      const u = o.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const m = Math.min(...u), p = Math.max(...u) - m || 1;
      return u.map((h, A) => ({
        x: A / (u.length - 1) * Jt,
        y: qe - (h - m) / p * (qe - 4) - 2
      }));
    });
    function s(u) {
      const m = u.length;
      if (m < 2)
        return "";
      const b = [], p = [];
      for (let C = 0; C < m - 1; C++)
        b[C] = u[C + 1].x - u[C].x, p[C] = b[C] === 0 ? 0 : (u[C + 1].y - u[C].y) / b[C];
      const h = [p[0]];
      for (let C = 1; C < m - 1; C++)
        if (p[C - 1] * p[C] <= 0)
          h[C] = 0;
        else {
          const $ = 2 * b[C] + b[C - 1], w = b[C] + 2 * b[C - 1];
          h[C] = ($ + w) / ($ / p[C - 1] + w / p[C]);
        }
      h[m - 1] = p[m - 2];
      let A = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let C = 0; C < m - 1; C++) {
        const $ = b[C] / 3;
        A += ` C${(u[C].x + $).toFixed(2)},${(u[C].y + h[C] * $).toFixed(2)} ${(u[C + 1].x - $).toFixed(2)},${(u[C + 1].y - h[C + 1] * $).toFixed(2)} ${u[C + 1].x.toFixed(2)},${u[C + 1].y.toFixed(2)}`;
      }
      return A;
    }
    const i = k(() => {
      const u = r.value;
      return u.length < 2 ? "" : o.smooth ? s(u) : u.map((m, b) => `${b === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), d = k(() => {
      const u = r.value;
      return !o.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${qe} L${u[0].x.toFixed(2)},${qe} Z`;
    });
    return (u, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Jt} ${qe}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Hp, [
        l("linearGradient", {
          id: `pk-spark-${x(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          l("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Kp),
          l("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Gp)
        ], 8, qp)
      ])) : y("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${x(n)})`
      }, null, 8, Wp)) : y("", !0),
      l("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Zp)
    ], 12, Up)) : y("", !0);
  }
}), Jp = { class: "flex items-center gap-1 text-xs" }, Yp = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Xp = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ka = /* @__PURE__ */ O({
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
    return (d, u) => (t(), a("span", Jp, [
      l("span", {
        class: _(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        l("span", Yp, f(s.value), 1),
        U(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", Xp, f(e.comparison), 1)) : y("", !0)
    ]));
  }
}), Qp = ["data-collapsed"], ev = { class: "flex flex-wrap items-start justify-between gap-2" }, tv = { class: "flex min-w-0 items-start gap-2" }, av = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nv = ["d"], lv = { class: "min-w-0" }, ov = { class: "text-sm font-medium" }, sv = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, rv = { class: "flex shrink-0 items-center gap-1.5" }, iv = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, dv = ["aria-pressed", "onClick"], uv = ["aria-expanded", "aria-label", "title"], cv = ["aria-label"], fv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mv = ["d"], pv = /* @__PURE__ */ O({
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
    const o = e, n = Xt(), r = K(o.defaultCollapsed), s = k(() => !!o.icon && !n.icon), i = k(() => {
      if (!(o.fitBody && !o.loading && !o.error))
        return { minHeight: `${o.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: _(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      l("div", ev, [
        l("div", tv, [
          q(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", av, [
              l("path", {
                d: x(de)(e.icon)
              }, null, 8, nv)
            ])) : y("", !0)
          ]),
          l("div", lv, [
            l("p", ov, f(e.label), 1),
            e.description ? (t(), a("p", sv, f(e.description), 1)) : y("", !0),
            q(d.$slots, "trend")
          ])
        ]),
        l("div", rv, [
          q(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", iv, [
            (t(!0), a(P, null, V(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: _([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (b) => d.$emit("update:period", m.value)
            }, f(m.label), 11, dv))), 128))
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
          ], 8, uv)) : y("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (m) => d.$emit("hide"))
          }, [
            (t(), a("svg", fv, [
              l("path", {
                d: x(de)("eye-off")
              }, null, 8, mv)
            ]))
          ], 8, cv)) : y("", !0)
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
    ], 10, Qp));
  }
}), vv = ["aria-pressed", "aria-label", "title"], gv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hv = ["d"], bv = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, xv = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, yv = ["href"], kv = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $v = ["d"], wv = ["aria-label", "onClick"], Cv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sv = ["d"], Mv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bv = ["d"], Av = {
  key: 0,
  class: "flex flex-col gap-1"
}, zv = ["onClick"], Pv = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, _v = ["d"], Ov = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, jv = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!1), i = K(!1), d = k(
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
      I(pv, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (h) => r("hide"))
      }, {
        actions: j(() => [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (h) => s.value = !s.value)
          }, [
            (t(), a("svg", gv, [
              l("path", {
                d: x(de)(s.value ? "check" : "pencil")
              }, null, 8, hv)
            ]))
          ], 8, vv)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), a("div", bv, [
            p[7] || (p[7] = l("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                U("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", xv, [
            (t(!0), a(P, null, V(e.items, (h) => (t(), a("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              l("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", kv, [
                  l("path", {
                    d: x(de)(h.icon)
                  }, null, 8, $v)
                ])),
                U(" " + f(h.label), 1)
              ], 8, yv),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (A) => u(h.id)
              }, [
                (t(), a("svg", Cv, [
                  l("path", {
                    d: x(de)("x")
                  }, null, 8, Sv)
                ]))
              ], 8, wv)) : y("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), a("svg", Mv, [
                l("path", {
                  d: x(de)("plus")
                }, null, 8, Bv)
              ])),
              p[8] || (p[8] = U(" Add ", -1))
            ])) : y("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      I(Je, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (h) => i.value = !1)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: j(() => [...p[9] || (p[9] = [
              U("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          d.value.length ? (t(), a("ul", Av, [
            (t(!0), a(P, null, V(d.value, (h) => (t(), a("li", {
              key: h.id
            }, [
              l("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (A) => m(h)
              }, [
                (t(), a("svg", Pv, [
                  l("path", {
                    d: x(de)(h.icon)
                  }, null, 8, _v)
                ])),
                U(" " + f(h.label), 1)
              ], 8, zv)
            ]))), 128))
          ])) : (t(), a("p", Ov, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Lv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Vv = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Tv = { class: "relative w-full max-w-xl" }, Dv = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ev = ["d"], Iv = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Fv = ["data-slot"], Nv = { class: "px-5 py-4" }, Rv = { class: "mb-3 text-sm font-semibold" }, Uv = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Hv = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qv = ["d"], Kv = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, k5 = /* @__PURE__ */ O({
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
      return typeof u == "string" ? u : Qt(u);
    }), s = Ke({
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
        links: u ? m.links.filter((b) => b.label.toLowerCase().includes(u)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (u, m) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-8", e.embedded ? "" : x(Te)])
    }, [
      l("header", null, [
        l("h1", Lv, f(e.title), 1),
        e.description ? (t(), a("p", Vv, f(e.description), 1)) : y("", !0)
      ]),
      l("div", Tv, [
        (t(), a("svg", Dv, [
          l("path", {
            d: x(de)("search")
          }, null, 8, Ev)
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
      d.value.length ? (t(), a("div", Iv, [
        (t(!0), a(P, null, V(d.value, (b) => (t(), a("section", {
          key: b.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${b.key}`
        }, [
          l("div", Nv, [
            l("h2", Rv, f(b.title), 1),
            l("div", Uv, [
              (t(!0), a(P, null, V(b.links, (p) => (t(), T(xe(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: _(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), a("svg", Hv, [
                    l("path", {
                      d: x(de)(p.icon)
                    }, null, 8, qv)
                  ])),
                  U(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Fv))), 128))
      ])) : (t(), a("p", Kv, ' Nothing matches "' + f(n.value) + '". ', 1))
    ], 2));
  }
}), Gv = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Wv = { class: "flex flex-1 flex-col gap-1 p-4" }, Zv = { class: "text-muted-foreground relative text-xs font-medium" }, Jv = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Yv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Xv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Qv = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, $5 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), a("div", Gv, [
      l("div", Wv, [
        l("p", Zv, f(e.label), 1),
        e.loading ? (t(), T($e, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", Jv, " Could not load ")) : (t(), a("span", Yv, f(o(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(ka, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", Xv, f(e.description), 1)) : y("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", Qv, [
        I(dt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : y("", !0)
    ]));
  }
}), eg = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, tg = { class: "flex flex-col gap-1 p-4" }, ag = { class: "flex items-start justify-between gap-2" }, ng = { class: "text-sm font-medium" }, lg = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, og = { class: "mt-1 flex flex-wrap items-center gap-2" }, sg = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, rg = {
  key: 0,
  class: "-mb-px"
}, st = /* @__PURE__ */ O({
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
    return (i, d) => (t(), a("div", eg, [
      l("div", tg, [
        l("div", ag, [
          l("p", ng, f(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", lg, f(e.caption), 1)) : y("", !0),
        l("div", og, [
          e.loading ? (t(), T($e, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", sg, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: _(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : y("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", rg, [
        I(dt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : y("", !0)
    ]));
  }
}), ig = { class: "relative flex flex-col gap-2" }, dg = ["aria-label"], ug = ["onMouseenter"], cg = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, fg = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, mg = { class: "truncate" }, pg = { class: "text-sm font-semibold tabular-nums" }, w5 = /* @__PURE__ */ O({
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
    ], r = k(() => o.segments.reduce((b, p) => b + Math.max(0, p.value), 0)), s = k(() => Math.max(o.total ?? r.value, r.value, 1)), i = k(
      () => o.segments.map((b, p) => {
        const h = Math.max(0, b.value) / s.value;
        return {
          ...b,
          color: b.color ?? n[p % n.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: b.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (b) => o.format ? o.format(b) : new Intl.NumberFormat().format(b), u = K(null), m = (b) => `${(b * 100).toFixed(b > 0 && b < 0.01 ? 1 : 0)}%`;
    return (b, p) => (t(), a("div", ig, [
      l("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), a(P, null, V(i.value, (h, A) => (t(), a("span", {
          key: A,
          class: _(["h-full transition-all", [
            A === 0 ? "rounded-l-full" : "",
            A === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === A ? 1 : 0.4
          }),
          onMouseenter: (C) => u.value = A,
          onMouseleave: p[0] || (p[0] = (C) => u.value = null)
        }, null, 46, ug))), 128))
      ], 12, dg),
      e.showLegend ? (t(), a("div", cg, [
        (t(!0), a(P, null, V(i.value, (h, A) => (t(), a("div", {
          key: A,
          class: "flex min-w-0 flex-col"
        }, [
          l("span", fg, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: h.color })
            }, null, 4),
            l("span", mg, f(h.label), 1)
          ]),
          l("span", pg, f(d(h.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      u.value !== null ? (t(), T(et, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: m(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), vg = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, gg = ["data-heading"], hg = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, bg = { class: "text-muted-foreground truncate" }, xg = ["aria-label"], C5 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), a("div", vg, [
      (t(!0), a(P, null, V(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: _(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), a("div", hg, [
          l("span", bg, f(u.label), 1),
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
        ], 8, xg)) : y("", !0)
      ], 8, gg))), 128))
    ]));
  }
}), yg = {
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
}, kg = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function $g(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function wg(e, o) {
  return o || (e ? yg[$g(e)] ?? "neutral" : "neutral");
}
function Cg(e, o) {
  return kg[wg(e, o)];
}
const he = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const o = e, n = k(() => Cg(o.status, o.tone));
    return (r, s) => (t(), T(Ge, {
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
}), Sg = ["data-layout"], Mg = ["src", "alt"], Bg = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Ag = ["src"], zg = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Pg = ["onMouseenter"], _g = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Og = { class: "min-w-0" }, jg = { class: "truncate text-sm font-medium" }, Lg = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Vg = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Tg = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Dg = { class: "min-w-0" }, Eg = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Ig = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Fg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ng = ["d"], Rg = ["aria-label"], Ug = /* @__PURE__ */ O({
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
    const u = k(() => {
      const w = [r.item.image, ...r.item.images ?? []].map(d).filter((g) => g !== null);
      return [...new Set(w)];
    }), m = k(() => u.value[i.value] ?? u.value[0] ?? null), b = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("")
    ), p = k(() => {
      const w = r.item.progress;
      if (!w)
        return null;
      const g = Math.max(w.total ?? 100, w.value, 1);
      return `${Math.min(100, Math.max(0, w.value / g * 100)).toFixed(2)}%`;
    }), h = k(() => u.value.length > 1 ? u.value[1] : null), A = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), C = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function $(w) {
      w.stopPropagation(), s("cart", r.item.key);
    }
    return (w, g) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: _(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: g[0] || (g[0] = (v) => s("select", e.item.key)),
      onKeydown: g[1] || (g[1] = Oa(me((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
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
        }, null, 8, Mg)) : (t(), a("span", Bg, f(b.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Ag)) : y("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", zg, [
          (t(!0), a(P, null, V(u.value, (v, c) => (t(), a("span", {
            key: c,
            class: _(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (S) => i.value = c
          }, null, 42, Pg))), 128))
        ])) : y("", !0)
      ], 2),
      l("div", {
        class: _(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        l("div", _g, [
          l("div", Og, [
            l("p", jg, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", Lg, f(e.item.caption), 1)) : y("", !0),
            e.item.facts?.length ? (t(), a("p", Vg, f(e.item.facts.join(" · ")), 1)) : y("", !0)
          ]),
          e.item.status ? (t(), T(he, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : y("", !0)
        ]),
        l("div", Tg, [
          l("div", Dg, [
            e.item.price ? (t(), a("p", Eg, f(e.item.price), 1)) : y("", !0),
            C.value ? (t(), a("p", Ig, f(C.value), 1)) : y("", !0)
          ]),
          A.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: $
          }, [
            (t(), a("svg", Fg, [
              l("path", {
                d: x(de)("cart")
              }, null, 8, Ng)
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
        ], 8, Rg)) : y("", !0)
      ], 2)
    ], 42, Sg));
  }
});
function Hg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function qg(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Kg(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Gg = ["data-featured", "data-recommended"], Wg = { class: "flex flex-col gap-1" }, Zg = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Jg = { key: 0 }, Yg = { key: 1 }, Xg = { key: 2 }, Qg = { key: 3 }, eh = { class: "text-sm font-semibold" }, th = { class: "flex items-baseline gap-1" }, ah = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, nh = { class: "text-muted-foreground text-sm" }, lh = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, oh = { class: "text-muted-foreground mt-1 text-xs" }, sh = { class: "flex flex-1 flex-col gap-2 text-sm" }, rh = { class: "flex min-w-0 items-start gap-2" }, ih = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, dh = ["d"], uh = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ch = ["d"], fh = { class: "capitalize" }, mh = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, ph = { class: "text-foreground font-medium" }, vh = { class: "mt-auto flex gap-2 pt-2" }, gh = /* @__PURE__ */ O({
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
      return Object.entries(m).map(([b, p]) => ({
        key: b,
        label: b.replace(/_/g, " "),
        granted: Kg(p.value),
        display: qg(p.value)
      }));
    }), u = k(() => n.plan.extraPerks ?? []);
    return (m, b) => (t(), a("article", {
      class: _(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      l("header", Wg, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", Zg, [
          e.plan.recommended ? (t(), a("span", Jg, "Recommended")) : e.plan.featured ? (t(), a("span", Yg, "Featured")) : y("", !0),
          e.plan.trial ? (t(), a("span", Xg, "Trial")) : y("", !0),
          e.plan.active === !1 ? (t(), a("span", Qg, "Inactive")) : y("", !0)
        ])) : y("", !0),
        l("h3", eh, f(e.plan.name), 1),
        l("p", th, [
          l("span", ah, f(s.value), 1),
          l("span", nh, f(x(Hg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", lh, f(e.plan.shortDescription), 1)) : y("", !0),
        l("p", oh, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      l("ul", sh, [
        (t(!0), a(P, null, V(d.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          l("span", rh, [
            l("span", {
              class: _(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", ih, [
                l("path", {
                  d: x(de)("check")
                }, null, 8, dh)
              ])) : (t(), a("svg", uh, [
                l("path", {
                  d: x(de)("x")
                }, null, 8, ch)
              ]))
            ], 2),
            l("span", fh, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", mh, f(p.display), 1)) : y("", !0)
        ]))), 128)),
        (t(!0), a(P, null, V(u.value, (p, h) => (t(), a("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          l("span", null, f(p.key), 1),
          l("span", ph, f(p.value), 1)
        ]))), 128))
      ]),
      l("footer", vh, [
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
    ], 10, Gg));
  }
}), hh = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, bh = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, xh = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, yh = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, kh = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, S5 = /* @__PURE__ */ O({
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
      class: _(["w-full space-y-6", e.embedded ? "" : x(Te)]),
      "data-slot": "plan-grid"
    }, [
      l("header", hh, [
        l("div", null, [
          e.title ? (t(), a("h1", bh, f(e.title), 1)) : y("", !0),
          e.description ? (t(), a("p", xh, f(e.description), 1)) : y("", !0)
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
      e.plans.length === 0 ? (t(), a("p", yh, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", kh, [
        (t(!0), a(P, null, V(e.plans, (i) => (t(), T(gh, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), $h = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, wh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Ch = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Sh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Mh = { class: "space-y-1.5" }, Bh = { class: "space-y-1.5" }, Ah = { class: "space-y-1.5" }, zh = { class: "space-y-1.5" }, Ph = { class: "space-y-1.5" }, _h = { class: "flex items-center gap-3 text-sm" }, Oh = { class: "flex items-center gap-3 text-sm" }, jh = { class: "flex items-center gap-3 text-sm" }, Lh = {
  key: 0,
  class: "space-y-1.5"
}, Vh = { class: "flex items-center gap-3 text-sm" }, Th = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Dh = { class: "space-y-1.5" }, Eh = ["value"], Ih = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Fh = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Nh = ["id", "value", "onInput"], Rh = { class: "space-y-2" }, Uh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Hh = ["d"], qh = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", gt = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", M5 = /* @__PURE__ */ O({
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
    }), r = e, s = o, i = Ze(n());
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
    b(r.plan), fe(
      () => r.plan,
      (g) => b(g),
      { deep: !0 }
    );
    const p = k({
      get: () => {
        const g = d("modules", []);
        return Array.isArray(g) ? g.map(String) : [];
      },
      set: (g) => {
        u("modules", A(g.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = k(
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
    function $(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== g);
    }
    function w() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, v) => (t(), a("form", {
      class: _(["w-full space-y-6", e.embedded ? "" : x(Te)]),
      "data-slot": "plan-editor",
      onSubmit: me(w, ["prevent"])
    }, [
      l("header", $h, [
        l("div", null, [
          l("h1", wh, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
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
      l("div", Ch, [
        l("section", Sh, [
          v[26] || (v[26] = l("h2", { class: "font-semibold" }, "Plan details", -1)),
          l("div", Mh, [
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
          l("div", Bh, [
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
          l("div", Ah, [
            I(ke, { for: "plan-description" }, {
              default: j(() => [...v[17] || (v[17] = [
                U("Plan description", -1)
              ])]),
              _: 1
            }),
            ce(l("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (c) => i.description = c),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: _(gt)
            }, null, 512), [
              [ye, i.description]
            ])
          ]),
          l("div", zh, [
            I(ke, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            ce(l("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: _(qh)
            }, [...v[19] || (v[19] = [
              l("option", { value: 30 }, "Monthly", -1),
              l("option", { value: 365 }, "Yearly", -1),
              l("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Ee,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          l("div", Ph, [
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
          l("label", _h, [
            I(x(Ie), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = U(" Featured ", -1))
          ]),
          l("label", Oh, [
            I(x(Ie), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = U(" Recommended ", -1))
          ]),
          l("label", jh, [
            I(x(Ie), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Lh, [
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
          l("label", Vh, [
            I(x(Ie), {
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
        l("section", Th, [
          v[33] || (v[33] = l("h2", { class: "font-semibold" }, "Plan perks", -1)),
          l("div", Dh, [
            I(ke, null, {
              default: j(() => [...v[27] || (v[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            I(jt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (c) => p.value = c),
              options: h.value,
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
              class: _(gt),
              onInput: v[12] || (v[12] = (c) => m(
                "modules",
                c.target.value
              ))
            }, null, 40, Eh)
          ]),
          (t(!0), a(P, null, V(e.limits, (c) => (t(), a("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), a("label", Ih, [
              I(x(Ie), {
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
              c.hint ? (t(), a("p", Fh, f(c.hint), 1)) : y("", !0),
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
              class: _(gt),
              onInput: (S) => m(
                c.key,
                S.target.value
              )
            }, null, 40, Nh)
          ]))), 128)),
          l("div", Rh, [
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
                onClick: (M) => $(S)
              }, {
                default: j(() => [
                  (t(), a("svg", Uh, [
                    l("path", {
                      d: x(de)("x")
                    }, null, 8, Hh)
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
}), Kh = { class: "flex flex-col gap-4" }, Gh = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Wh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Zh = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Jh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Yh = ["d"], Xh = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Qh = ["aria-pressed"], eb = ["aria-pressed"], tb = {
  key: 0,
  class: "flex flex-col gap-2"
}, ab = ["aria-label"], nb = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, lb = ["aria-pressed", "onClick"], ob = ["aria-label"], sb = { class: "text-muted-foreground mr-1 text-xs font-medium" }, rb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, ib = ["data-slot"], db = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, ub = { class: "text-muted-foreground text-xs tabular-nums" }, cb = { class: "flex items-center gap-2" }, fb = ["disabled"], mb = ["disabled"], It = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ _e({
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
  emits: /* @__PURE__ */ _e(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(""), i = Ye(e, "modelValue"), d = Ze({}), u = Ze({});
    fe(s, () => h());
    function m(D) {
      const ee = D.trim();
      if (ee === "")
        return null;
      const H = Number(ee);
      return Number.isFinite(H) ? H : null;
    }
    function b() {
      const D = {};
      for (const [ee, H] of Object.entries(u))
        D[ee] = { min: m(H.min), max: m(H.max) };
      return D;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: b() };
    }
    function h() {
      r("filter", p());
    }
    function A(D, ee) {
      d[D] = d[D] === ee ? null : ee, h();
    }
    function C(D) {
      return u[D] ?? { min: "", max: "" };
    }
    function $(D, ee, H) {
      const G = u[D] ?? { min: "", max: "" };
      u[D] = { ...G, [ee]: H }, h();
    }
    function w(D) {
      D.key === "Enter" && (D.preventDefault(), r("scan", s.value.trim()));
    }
    const g = k(() => n.facets.filter((D) => (D.kind ?? "chips") === "chips")), v = k(() => n.facets.filter((D) => D.kind === "range")), c = k(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), S = K(1);
    fe(
      () => n.items.map((D) => D.key).join(","),
      () => {
        S.value = 1;
      }
    );
    const M = k(() => {
      const D = n.pageSize;
      return !D || D < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / D));
    }), z = k(() => {
      const D = n.pageSize;
      if (!D || D < 1)
        return n.items;
      const ee = (S.value - 1) * D;
      return n.items.slice(ee, ee + D);
    });
    function R(D) {
      S.value = Math.min(M.value, Math.max(1, D));
    }
    return (D, ee) => (t(), a("div", Kh, [
      c.value ? (t(), a("div", Gh, [
        l("div", Wh, [
          e.searchable ? (t(), a("div", Zh, [
            (t(), a("svg", Jh, [
              l("path", {
                d: x(de)("search")
              }, null, 8, Yh)
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
          q(D.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", Xh, [
            l("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Qh),
            l("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, eb)
          ])) : y("", !0)
        ]),
        g.value.length || v.value.length ? (t(), a("div", tb, [
          (t(!0), a(P, null, V(g.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", nb, f(H.label), 1)) : y("", !0),
            (t(!0), a(P, null, V(H.options ?? [], (G) => (t(), a("button", {
              key: G.value,
              type: "button",
              class: _([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === G.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === G.value ? "true" : "false",
              onClick: (Z) => A(H.key, G.value)
            }, f(G.label), 11, lb))), 128))
          ], 8, ab))), 128)),
          (t(!0), a(P, null, V(v.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            l("span", sb, f(H.label ?? H.key), 1),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": C(H.key).min,
              "onUpdate:modelValue": (G) => $(H.key, "min", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": C(H.key).max,
              "onUpdate:modelValue": (G) => $(H.key, "max", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, ob))), 128))
        ])) : y("", !0)
      ])) : y("", !0),
      e.items.length === 0 ? (t(), a("p", rb, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: _(
          i.value === "list" ? "flex flex-col gap-3" : x(Gd)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(P, null, V(z.value, (H) => (t(), T(Ug, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (G) => r("select", G)),
          onCart: ee[4] || (ee[4] = (G) => r("cart", G))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, ib)),
      e.pageSize && M.value > 1 ? (t(), a("div", db, [
        l("p", ub, " Page " + f(S.value) + " of " + f(M.value), 1),
        l("div", cb, [
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => R(S.value - 1))
          }, " Previous ", 8, fb),
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value >= M.value,
            onClick: ee[6] || (ee[6] = (H) => R(S.value + 1))
          }, " Next ", 8, mb)
        ])
      ])) : y("", !0)
    ]));
  }
}), pb = ["aria-label"], vb = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, gb = { class: "min-w-0" }, hb = { class: "text-base font-semibold" }, bb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, xb = { class: "flex shrink-0 items-center gap-2" }, yb = { class: "min-h-0 flex-1 overflow-y-auto" }, kb = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Ft = /* @__PURE__ */ O({
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
      const p = b[0], h = b[b.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), h.focus()) : !m.shiftKey && document.activeElement === h && (m.preventDefault(), p.focus());
    }
    return fe(
      () => n.open,
      async (m) => {
        if (m) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await Ae(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), be(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (m, b) => (t(), T(Re, { to: "body" }, [
      I(Le, {
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
      I(Le, {
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
            l("header", vb, [
              l("div", gb, [
                l("h2", hb, f(e.title), 1),
                e.description ? (t(), a("p", bb, f(e.description), 1)) : y("", !0)
              ]),
              l("div", xb, [
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
            l("div", yb, [
              q(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", kb, [
              q(m.$slots, "footer")
            ])) : y("", !0)
          ], 10, pb)) : y("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Pe() {
  return { query: "", selected: {}, ranges: {} };
}
function $b(e, o) {
  const n = e.metrics?.[o];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[o];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function wb(e, o) {
  return !o || o.min === null && o.max === null ? !0 : !(e === null || o.min !== null && e < o.min || o.max !== null && e > o.max);
}
function Nt(e, o) {
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
    if (!wb($b(e, r), s))
      return !1;
  return !0;
}
function Cb(e, o) {
  const n = o.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function rt(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (o) => o.min !== null || o.max !== null
  );
}
const Sb = { class: "flex flex-col gap-6 p-4" }, Mb = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Bb = { class: "text-sm font-semibold" }, Ab = { class: "flex flex-wrap items-center gap-1.5" }, zb = ["aria-pressed", "onClick"], Pb = { class: "text-sm font-semibold" }, _b = { class: "flex flex-wrap items-center gap-1.5" }, Ob = { key: 0 }, $a = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(""), i = Ze({}), d = Ze({}), u = k(
      () => n.facets.filter((M) => (M.kind ?? "chips") === "chips")
    ), m = k(() => n.facets.filter((M) => M.kind === "range"));
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
    fe(
      () => n.open,
      (M) => {
        M && p();
      }
    );
    function h(M) {
      const z = M.trim();
      if (z === "")
        return null;
      const R = Number(z);
      return Number.isFinite(R) ? R : null;
    }
    function A() {
      const M = {};
      for (const [z, R] of Object.entries(d))
        M[z] = { min: h(R.min), max: h(R.max) };
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
    function g(M) {
      return d[M] ?? { min: "", max: "" };
    }
    function v(M, z, R) {
      const D = d[M] ?? { min: "", max: "" };
      d[M] = { ...D, [z]: R };
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
    return (M, z) => (t(), T(Ft, {
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
            $.value ? (t(), a("span", Ob, " (" + f($.value) + ")", 1)) : y("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        l("div", Sb, [
          e.hideSearch ? y("", !0) : (t(), a("label", Mb, [
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
            l("h3", Bb, f(R.label ?? R.key), 1),
            l("div", Ab, [
              (t(!0), a(P, null, V(R.options ?? [], (D) => (t(), a("button", {
                key: D.value,
                type: "button",
                class: _([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[R.key] === D.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[R.key] === D.value ? "true" : "false",
                onClick: (ee) => w(R.key, D.value)
              }, f(D.label), 11, zb))), 128))
            ])
          ]))), 128)),
          (t(!0), a(P, null, V(m.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", Pb, f(R.label ?? R.key), 1),
            l("div", _b, [
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${R.label ?? R.key} from`,
                "model-value": g(R.key).min,
                "onUpdate:modelValue": (D) => v(R.key, "min", String(D))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              z[4] || (z[4] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${R.label ?? R.key} to`,
                "model-value": g(R.key).max,
                "onUpdate:modelValue": (D) => v(R.key, "max", String(D))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), jb = ["aria-disabled"], Lb = ["disabled"], Vb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Tb = ["d"], Db = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Eb = ["disabled"], Ib = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Fb = ["d"], Nb = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ _e({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ _e(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const n = Ye(e, "modelValue"), r = o, s = k(() => n.value <= e.min), i = k(() => e.max !== null && n.value >= e.max);
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
        (t(), a("svg", Vb, [
          l("path", {
            d: x(de)("minus")
          }, null, 8, Tb)
        ]))
      ], 8, Lb),
      l("span", Db, f(n.value), 1),
      l("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (b) => d(1))
      }, [
        (t(), a("svg", Ib, [
          l("path", {
            d: x(de)("plus")
          }, null, 8, Fb)
        ]))
      ], 8, Eb)
    ], 8, jb));
  }
}), Rb = { class: "divide-border flex flex-col divide-y" }, Ub = { class: "min-w-0" }, Hb = { class: "truncate text-sm font-medium" }, qb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Kb = { class: "flex shrink-0 items-center gap-2 text-sm" }, Gb = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Wb = {
  key: 2,
  class: "font-medium tabular-nums"
}, Zb = ["aria-label", "onClick"], Jb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Yb = ["d"], Xb = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", Rb, [
      (t(!0), a(P, null, V(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        l("div", Ub, [
          l("p", Hb, f(d.label), 1),
          d.detail ? (t(), a("p", qb, f(d.detail), 1)) : y("", !0)
        ]),
        l("div", Kb, [
          e.editable ? (t(), T(Nb, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", Gb, " ×" + f(d.qty), 1)) : y("", !0),
          d.amount ? (t(), a("span", Wb, f(d.amount), 1)) : y("", !0),
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
            (t(), a("svg", Jb, [
              l("path", {
                d: x(de)("trash")
              }, null, 8, Yb)
            ]))
          ], 8, Zb)) : y("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Qb = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, e1 = { class: "border-b px-4 py-3" }, t1 = { class: "text-sm font-medium" }, a1 = { class: "flex-1 px-4 py-3" }, n1 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, l1 = { class: "text-foreground block font-medium" }, o1 = { class: "mt-1 block" }, s1 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, r1 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, i1 = { class: "tabular-nums" }, d1 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, u1 = { class: "text-muted-foreground" }, c1 = {
  key: 0,
  class: "tabular-nums"
}, f1 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, m1 = { class: "text-muted-foreground" }, p1 = { class: "tabular-nums" }, v1 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, g1 = { class: "tabular-nums" }, h1 = {
  key: 4,
  class: "pt-1"
}, b1 = /* @__PURE__ */ O({
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
    return (r, s) => (t(), a("aside", Qb, [
      l("header", e1, [
        l("h2", t1, f(e.title), 1)
      ]),
      l("div", a1, [
        e.items.length === 0 ? (t(), a("p", n1, [
          l("span", l1, f(e.emptyTitle), 1),
          l("span", o1, f(e.emptyDescription), 1)
        ])) : (t(), T(Xb, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", s1, [
        e.subtotal ? (t(), a("div", r1, [
          s[2] || (s[2] = l("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          l("span", i1, f(e.subtotal), 1)
        ])) : y("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", d1, [
          l("span", u1, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", c1, f(e.discount), 1)) : y("", !0),
          q(r.$slots, "discount")
        ])) : y("", !0),
        e.tax ? (t(), a("div", f1, [
          l("span", m1, f(e.taxLabel), 1),
          l("span", p1, f(e.tax), 1)
        ])) : y("", !0),
        e.total ? (t(), a("div", v1, [
          s[3] || (s[3] = l("span", null, "Total", -1)),
          l("span", g1, f(e.total), 1)
        ])) : y("", !0),
        r.$slots.pay ? (t(), a("div", h1, [
          q(r.$slots, "pay")
        ])) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), x1 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, y1 = { class: "flex flex-col gap-4" }, k1 = { class: "flex flex-wrap items-start justify-between gap-3" }, $1 = { class: "flex items-center gap-2" }, w1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, B5 = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ _e({
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
  emits: /* @__PURE__ */ _e(["select", "pay"], ["update:cart"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(Pe()), i = K(!1), d = Ye(e, "cart"), u = K(!1), m = k(
      () => n.items.filter((H) => Nt(H, s.value))
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
    function h(H) {
      return H ? n.parsePrice(H) : 0;
    }
    function A(H, G, Z) {
      return {
        ...H,
        qty: G,
        amount: n.formatMoney(Z * G)
      };
    }
    function C(H) {
      const G = Cb(n.items, H);
      G && $(G.key);
    }
    function $(H) {
      const G = n.items.find((te) => te.key === H);
      if (!G || G.status === "out-of-stock")
        return;
      u.value = !1;
      const Z = h(G);
      if (d.value.find((te) => te.key === H)) {
        d.value = d.value.map(
          (te) => te.key === H ? A(te, Number(te.qty ?? 1) + 1, Z) : te
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
          amount: n.formatMoney(Z)
        }
      ];
    }
    function w(H, G) {
      const Z = n.items.find((te) => te.key === H), ae = h(Z);
      d.value = d.value.map(
        (te) => te.key === H ? A(te, G, ae) : te
      );
    }
    function g(H) {
      d.value = d.value.filter((G) => G.key !== H);
    }
    const v = k(
      () => d.value.reduce((H, G) => {
        const Z = n.items.find((ae) => ae.key === G.key);
        return H + h(Z) * Number(G.qty ?? 1);
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
    ), D = k(
      () => d.value.length ? n.formatMoney(
        v.value - c.value + S.value
      ) : null
    );
    function ee() {
      u.value = !0, r("pay", d.value);
    }
    return (H, G) => (t(), a(P, null, [
      l("div", x1, [
        l("section", y1, [
          l("div", k1, [
            I(ze, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            l("div", $1, [
              x(rt)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: G[0] || (G[0] = (Z) => s.value = {
                  ...x(Pe)(),
                  query: s.value.query
                })
              }, " Clear ")) : y("", !0),
              e.facets.length > 0 ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: G[1] || (G[1] = (Z) => i.value = !0)
              }, [
                G[5] || (G[5] = l("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  l("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                G[6] || (G[6] = U(" Filters ", -1)),
                x(rt)(s.value) ? (t(), a("span", w1, " on ")) : y("", !0)
              ])) : y("", !0)
            ])
          ]),
          I(It, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: b,
            onSelect: G[2] || (G[2] = (Z) => r("select", Z)),
            onCart: $,
            onScan: C
          }, null, 8, ["search-placeholder", "items"])
        ]),
        I(b1, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: M.value,
          "discount-label": e.discountLabel,
          discount: z.value,
          "tax-label": e.taxLabel,
          tax: R.value,
          total: D.value,
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
      I($a, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: G[3] || (G[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: G[4] || (G[4] = (Z) => s.value = { ...x(Pe)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), C1 = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, S1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, M1 = ["src", "alt"], B1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, A1 = ["src"], z1 = { class: "flex items-start justify-between gap-3" }, P1 = { class: "text-lg font-semibold tabular-nums" }, _1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, O1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, j1 = { class: "grid grid-cols-2 gap-3" }, L1 = { class: "flex flex-col gap-2" }, V1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, A5 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(p) {
      let h = 0;
      for (const A of p)
        h = h * 31 + A.charCodeAt(0) >>> 0;
      return h;
    }
    function i(p, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((C, $) => ({
        label: C,
        value: Math.max(0, Math.round(p + Math.sin($ + h) * p * 0.18))
      }));
    }
    const d = k(() => n.item?.kind === "unit"), u = k(() => {
      const p = n.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), m = k(() => {
      const p = n.item;
      if (!p)
        return [];
      const h = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(p.key) % 5 + 1);
    }), b = k(
      () => !!n.item && !d.value && n.item?.status !== "out-of-stock"
    );
    return (p, h) => (t(), T(Ft, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: h[1] || (h[1] = (A) => r("close"))
    }, We({
      default: j(() => [
        e.item ? (t(), a("div", C1, [
          l("div", S1, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, M1)) : y("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", B1, [
            (t(!0), a(P, null, V(e.item.images, (A, C) => (t(), a("img", {
              key: C,
              src: A,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, A1))), 128))
          ])) : y("", !0),
          l("div", z1, [
            l("div", null, [
              l("p", P1, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", _1, f(e.item.stock) + " in stock ", 1)) : y("", !0)
            ]),
            e.item.status ? (t(), T(he, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", O1, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          l("div", j1, [
            I(st, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? m.value : u.value
            }, null, 8, ["label", "value", "series"]),
            I(st, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          l("div", L1, [
            l("p", V1, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            I(dt, {
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
            onClick: h[0] || (h[0] = (A) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), T1 = { class: "flex flex-col gap-10" }, D1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, E1 = { class: "flex flex-col gap-3" }, I1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, F1 = ["src", "alt"], N1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, R1 = ["aria-label", "aria-pressed", "onClick"], U1 = ["src"], H1 = { class: "flex flex-col gap-5" }, q1 = { class: "flex flex-wrap items-start justify-between gap-3" }, K1 = { class: "min-w-0" }, G1 = { class: "text-2xl font-semibold tracking-tight" }, W1 = { class: "text-muted-foreground mt-1 text-sm" }, Z1 = { class: "text-2xl font-semibold tabular-nums" }, J1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Y1 = { class: "grid grid-cols-2 gap-3 text-sm" }, X1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, Q1 = { class: "mt-1 font-medium" }, ex = { class: "rounded-lg border p-3" }, tx = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, ax = { class: "mt-1 font-medium" }, nx = { class: "flex flex-col gap-4" }, lx = { class: "grid gap-4 sm:grid-cols-2" }, ox = { class: "bg-card rounded-lg border p-4" }, sx = { class: "mb-3 text-sm font-medium" }, rx = /* @__PURE__ */ O({
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
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((g, v) => ({
        label: g,
        value: Math.max(0, Math.round(C + Math.sin(v + $) * C * 0.18))
      }));
    }
    const d = k(() => n.item.kind === "unit"), u = k(() => {
      const C = [n.item.image, ...n.item.images ?? []].filter(
        ($) => typeof $ == "string" && $ !== ""
      );
      return [...new Set(C)];
    }), m = K(0), b = k(() => {
      const C = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(C) || 12, s(n.item.key) % 7);
    }), p = k(() => {
      const C = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(C) || 20, s(n.item.key) % 5 + 1);
    }), h = k(() => d.value ? p.value : b.value), A = k(() => !d.value && n.item.status !== "out-of-stock");
    return (C, $) => (t(), a("div", T1, [
      l("div", D1, [
        l("div", E1, [
          l("div", I1, [
            u.value[m.value] ? (t(), a("img", {
              key: 0,
              src: u.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, F1)) : y("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", N1, [
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
              }, null, 8, U1)
            ], 10, R1))), 128))
          ])) : y("", !0)
        ]),
        l("div", H1, [
          l("div", q1, [
            l("div", K1, [
              l("h1", G1, f(e.item.label), 1),
              l("p", W1, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(he, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          l("p", Z1, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", J1, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          l("dl", Y1, [
            e.item.sku ? (t(), a("div", X1, [
              $[1] || ($[1] = l("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              l("dd", Q1, f(e.item.sku), 1)
            ])) : y("", !0),
            l("div", ex, [
              l("dt", tx, f(d.value ? "Occupancy" : "Stock"), 1),
              l("dd", ax, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
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
      l("section", nx, [
        $[2] || ($[2] = l("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        l("div", lx, [
          I(st, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          I(st, {
            label: "Price",
            value: e.item.price ?? "-",
            series: b.value
          }, null, 8, ["value", "series"])
        ]),
        l("div", ox, [
          l("p", sx, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(_m, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), ix = ["href"], z5 = /* @__PURE__ */ O({
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
      class: _(["flex w-full flex-col gap-8", e.embedded ? "" : x(Te)])
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
      ], 8, ix),
      I(rx, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), dx = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, ux = ["aria-selected", "onClick"], cx = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, fx = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, mx = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, px = ["aria-pressed"], vx = ["aria-pressed"], P5 = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ _e({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ _e(["select", "cart"], ["update:layout"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(n.tabs[0]?.key ?? ""), i = Ye(e, "layout"), d = K({}), u = K(!1);
    fe(
      () => n.tabs.map((w) => w.key).join(","),
      (w) => {
        w.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function m(w) {
      return d.value[w] ?? Pe();
    }
    const b = k(
      () => n.tabs.find((w) => w.key === s.value) ?? n.tabs[0] ?? null
    ), p = k(
      () => b.value ? m(b.value.key) : Pe()
    ), h = k(() => {
      const w = b.value;
      return w ? w.items.filter((g) => Nt(g, m(w.key))) : [];
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
      w && (d.value = { ...d.value, [w]: Pe() });
    }
    function $(w) {
      const g = b.value?.key;
      g && (d.value = { ...d.value, [g]: w }, u.value = !1);
    }
    return (w, g) => (t(), a(P, null, [
      l("div", {
        class: _(["flex w-full flex-col gap-8", e.embedded ? "" : x(Te)])
      }, [
        I(ze, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", dx, [
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
          }, f(v.label), 11, ux))), 128))
        ])) : y("", !0),
        l("div", cx, [
          I(ge, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: b.value?.searchPlaceholder ?? "Search…",
            "aria-label": b.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": g[0] || (g[0] = (v) => A(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(rt)(p.value) ? (t(), a("button", {
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
            x(rt)(p.value) ? (t(), a("span", fx, " on ")) : y("", !0)
          ])) : y("", !0),
          l("div", mx, [
            l("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: g[2] || (g[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, px),
            l("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: g[3] || (g[3] = (v) => i.value = "list")
            }, " List ", 10, vx)
          ])
        ]),
        I(It, {
          layout: i.value,
          "onUpdate:layout": g[4] || (g[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: g[5] || (g[5] = (v) => r("select", v)),
          onCart: g[6] || (g[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      I($a, {
        open: u.value,
        title: b.value?.filterTitle ?? "Filters",
        "search-placeholder": b.value?.searchPlaceholder ?? "Search…",
        facets: b.value?.facets ?? [],
        applied: p.value,
        onClose: g[7] || (g[7] = (v) => u.value = !1),
        onApply: $,
        onReset: C
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), gx = { class: "flex flex-col gap-4" }, hx = { class: "flex flex-col gap-4" }, _5 = /* @__PURE__ */ O({
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
      () => n.cards.filter((d) => Nt(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-10", e.embedded ? "" : x(Te)])
    }, [
      I(ze, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", gx, [
        I(ze, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(It, {
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
      l("section", hx, [
        I(ze, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(yl, {
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
}), bx = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, xx = { class: "text-sm font-medium" }, yx = ["width", "height", "aria-label"], kx = { class: "flex items-center gap-2" }, $x = /* @__PURE__ */ O({
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
    function h() {
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
    function $() {
      const w = s.value, g = u();
      !w || !g || (g.fillStyle = "#ffffff", g.fillRect(0, 0, w.width, w.height));
    }
    return pe($), be(() => {
      i.value = !1;
    }), (w, g) => (t(), a("div", bx, [
      l("p", xx, f(e.label), 1),
      l("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: _(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: me(b, ["prevent"]),
        onPointermove: me(p, ["prevent"]),
        onPointerup: me(h, ["prevent"]),
        onPointerleave: me(h, ["prevent"])
      }, null, 42, yx),
      l("div", kx, [
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
}), wx = { class: "grid gap-8 lg:grid-cols-2" }, Cx = { class: "flex flex-col gap-3" }, Sx = { class: "text-muted-foreground text-xs" }, Mx = {
  key: 0,
  class: "flex flex-col gap-3"
}, Bx = { class: "flex flex-wrap gap-3" }, Ax = ["onClick"], zx = ["src", "alt"], Px = {
  key: 1,
  class: "flex flex-col gap-3"
}, _x = { class: "flex flex-wrap gap-3" }, Ox = ["onClick"], jx = ["src", "alt"], Lx = {
  key: 2,
  class: "flex flex-col gap-4"
}, Vx = { class: "flex flex-wrap items-center gap-2" }, Tx = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Dx = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Ex = { class: "flex flex-col gap-2" }, Ix = ["src"], Fx = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Nx = ["src"], O5 = /* @__PURE__ */ O({
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
    }), fe(
      n,
      (w) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.signatures`, JSON.stringify(w));
      },
      { deep: !0 }
    ), fe(
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
      await eu(w), g(40);
      const v = await new Promise((c, S) => {
        const M = new FileReader();
        M.onload = () => c(String(M.result)), M.onerror = () => S(new Error("Could not read the file")), M.readAsDataURL(w);
      });
      return g(100), { value: v, name: w.name, size: w.size, url: v };
    }
    function h() {
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
    const A = k(
      () => n.value.find((w) => w.id === s.value)?.dataUrl ?? null
    ), C = k(
      () => r.value.find((w) => w.id === i.value)?.dataUrl ?? null
    ), $ = k(() => {
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
      class: _(["flex w-full flex-col gap-10", e.embedded ? "" : x(Te)])
    }, [
      I(ze, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", wx, [
        I($x, {
          label: "Draw a signature",
          onSave: b
        }),
        l("div", Cx, [
          g[2] || (g[2] = l("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          l("p", Sx, f(x(ga)), 1),
          I(ua, {
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
            onClick: h
          }, {
            default: j(() => [...g[1] || (g[1] = [
              U(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", Mx, [
        I(ze, {
          variant: "small",
          title: "Saved signatures"
        }),
        l("div", Bx, [
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
            }, null, 8, zx)
          ], 10, Ax))), 128))
        ])
      ])) : y("", !0),
      r.value.length ? (t(), a("section", Px, [
        I(ze, {
          variant: "small",
          title: "Saved stamps"
        }),
        l("div", _x, [
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
            }, null, 8, jx)
          ], 10, Ox))), 128))
        ])
      ])) : y("", !0),
      e.documents.length ? (t(), a("section", Lx, [
        l("div", Vx, [
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
        l("div", Tx, [
          I(Hf, {
            document: $.value
          }, null, 8, ["document"]),
          l("div", Dx, [
            l("div", Ex, [
              g[3] || (g[3] = l("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              A.value ? (t(), a("img", {
                key: 0,
                src: A.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Ix)) : (t(), a("p", Fx, "Draw and save a signature"))
            ]),
            C.value ? (t(), a("img", {
              key: 0,
              src: C.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Nx)) : y("", !0)
          ])
        ])
      ])) : y("", !0)
    ], 2));
  }
}), j5 = "panel.dashboard.hiddenWidgets", Rx = /* @__PURE__ */ Symbol("dashboardHide"), Ux = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, L5 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const o = e, n = nt(Rx, null), r = K(
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
    }), fe(
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
    return (d, u) => i.value ? y("", !0) : (t(), a("div", Ux, [
      I(jv, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (m) => r.value = m),
        onHide: u[1] || (u[1] = (m) => x(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Hx = { class: "flex flex-col gap-3" }, qx = ["data-slot"], Kx = ["aria-pressed", "aria-label", "title"], Gx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wx = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Zx = { class: "flex h-8 items-center" }, Jx = ["aria-label", "title", "onClick"], Yx = ["aria-label", "title", "onClick"], Xx = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Qx = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, V5 = /* @__PURE__ */ O({
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
    const m = k(() => n.segments.some(u)), b = k(() => n.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = k(() => p[n.columns] ?? p[4]), A = k(() => {
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
    return (c, S) => (t(), a("div", Hx, [
      (t(!0), a(P, null, V($.value, (M) => (t(), a("div", {
        key: M.key,
        class: _(["relative shrink-0", M.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": M.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && b.value && M.key === $.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: w
        }, [
          (t(), a("svg", Gx, [
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
        ], 8, Kx)) : y("", !0),
        l("div", {
          class: _(["grid", [M.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), a(P, null, V(M.segments, (z) => (t(), a("div", {
            key: z.key,
            class: _(["bg-card flex flex-col gap-2 p-4", M.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            l("p", Wx, f(z.label), 1),
            l("div", Zx, [
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
              ], 8, Jx)) : d(z) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${z.label}, ${v(z.value)}. Hide it.`,
                title: `Hide ${z.label}`,
                onClick: (R) => g(z)
              }, f(v(z.value)), 9, Yx)) : (t(), a("span", Xx, f(v(z.value)), 1)),
              z.trend && !e.loading && !u(z) ? (t(), T(ka, {
                key: 4,
                direction: z.trend.direction,
                percentage: z.trend.percentage,
                inverted: z.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : y("", !0)
            ]),
            z.sparkline?.length && !e.loading && !u(z) ? (t(), T(dt, {
              key: 0,
              data: z.sparkline,
              height: 24
            }, null, 8, ["data"])) : y("", !0),
            z.caption || z.comparison && z.trend ? (t(), a("p", Qx, f(z.caption ?? z.comparison), 1)) : y("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, qx))), 128))
    ]));
  }
}), ey = ["aria-label"], ty = ["aria-valuenow", "aria-label"], ay = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, ny = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, ly = ["title"], oy = { class: "font-medium" }, sy = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, ry = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, iy = { class: "flex items-center justify-between gap-2" }, dy = { class: "text-sm font-semibold" }, uy = { class: "flex items-center gap-3" }, cy = ["href"], fy = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, my = { class: "flex min-w-0 flex-col gap-0.5" }, py = { class: "text-sm font-medium" }, vy = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, gy = {
  key: 1,
  class: "flex flex-col gap-2"
}, hy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, by = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, xy = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, T5 = /* @__PURE__ */ O({
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
    }), b = k(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = k(() => {
      const $ = n.linkComponent;
      return typeof $ == "string" ? $ : Qt($);
    }), h = Ke({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), A = Ke({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), C = Ke({
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
        "aria-valuenow": b.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${b.value} percent complete`
      }, [
        l("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: ne({ width: `${b.value}%` })
        }, null, 4)
      ], 8, ty),
      l("div", ay, [
        l("span", ny, " Step " + f(m.value) + " of " + f(d.value), 1),
        l("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          l("span", oy, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", sy, f(": " + s.value.detail), 1)) : y("", !0)
        ], 8, ly),
        s.value?.href ? (t(), T(xe(p.value), {
          key: 0,
          href: s.value.href,
          class: _(x(A))
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
    ], 8, ey)) : e.items.length ? (t(), a("section", ry, [
      l("div", iy, [
        l("h2", dy, f(e.heading), 1),
        l("div", uy, [
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
          }, " Full report ", 8, cy)) : y("", !0)
        ])
      ]),
      s.value ? (t(), a("div", fy, [
        w[2] || (w[2] = l("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        l("div", my, [
          l("p", py, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", vy, f(s.value.detail), 1)) : y("", !0),
          s.value.href ? (t(), T(xe(p.value), {
            key: 1,
            href: s.value.href,
            class: _(x(h))
          }, {
            default: j(() => [
              U(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : y("", !0)
        ])
      ])) : y("", !0),
      i.value.length ? (t(), a("ul", gy, [
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
            g.done ? (t(), a("svg", hy, [...w[3] || (w[3] = [
              l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : y("", !0)
          ], 2),
          l("div", by, [
            l("p", {
              class: _(["text-sm", g.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(g.title), 3),
            !g.done && g.detail ? (t(), a("p", xy, f(g.detail), 1)) : y("", !0)
          ]),
          !g.done && g.href ? (t(), T(xe(p.value), {
            key: 0,
            href: g.href,
            class: _(x(C))
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
}), yy = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, ky = { class: "hidden items-center gap-2 md:flex" }, $y = { class: "md:hidden" }, wy = { class: "border-b px-4 py-3" }, Cy = { class: "text-muted-foreground text-xs" }, Sy = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, My = { class: "font-medium tabular-nums" }, By = { class: "ml-auto flex items-center gap-3" }, D5 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: o }) {
    const n = o, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", yy, [
      l("div", ky, [
        q(i.$slots, "actions")
      ]),
      l("div", $y, [
        l("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        I(Dt, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: j(() => [
            I(Et, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", wy, [
                  d[4] || (d[4] = l("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  l("p", Cy, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                l("div", Sy, [
                  q(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      l("span", My, [
        e.allMatching ? (t(), a(P, { key: 0 }, [
          U(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(P, { key: 1 }, [
          U(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      l("div", By, [
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
}), Ay = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, zy = { class: "text-muted-foreground text-xs tabular-nums" }, Py = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, _y = ["value"], Oy = ["value"], jy = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Ly = ["disabled"], Vy = ["disabled"], Ty = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Dy = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Ey = ["disabled"], E5 = /* @__PURE__ */ O({
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
    return (m, b) => (t(), a("div", Ay, [
      l("p", zy, [
        U(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(P, { key: 0 }, [
          U("of " + f(s(e.total)), 1)
        ], 64)) : y("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", Py, [
        b[4] || (b[4] = l("span", null, "Per page", -1)),
        l("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: b[0] || (b[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(P, null, V(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, Oy))), 128))
        ], 40, _y)
      ])) : y("", !0),
      l("nav", jy, [
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
        ])], 8, Ly),
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
        ])], 8, Vy),
        l("span", Ty, f(e.page), 1),
        u.value !== null ? (t(), a("span", Dy, " of " + f(s(u.value)), 1)) : y("", !0),
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
        ])], 8, Ey)
      ])
    ]));
  }
}), Iy = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Fy = ["aria-current"], Ny = ["title"], Ry = ["aria-current", "onClick"], Uy = ["title"], Hy = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", Iy, [
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
        }, f(r(e.counts.all ?? 0)), 11, Ny)) : (t(), T($e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Fy),
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
        }, f(r(e.counts[d] ?? 0)), 11, Uy)) : (t(), T($e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Ry))), 128))
    ]));
  }
}), I5 = /* @__PURE__ */ Ot(Hy, [["__scopeId", "data-v-3967c945"]]), qy = { class: "flex flex-col gap-2" }, Ky = { class: "flex items-center gap-2 md:hidden" }, Gy = { class: "relative min-w-0 flex-1" }, Wy = ["placeholder", "title", "aria-label"], Zy = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Jy = { class: "flex max-h-[85vh] flex-col" }, Yy = { class: "flex-1 overflow-y-auto px-4 py-3" }, Xy = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Qy = { class: "text-xs font-medium" }, e0 = ["value", "onChange"], t0 = ["value"], a0 = { class: "mb-4" }, n0 = { class: "flex flex-col gap-1" }, l0 = ["disabled", "onClick"], o0 = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, s0 = {
  key: 1,
  class: "mb-4"
}, r0 = { class: "flex flex-col gap-1" }, i0 = ["onClick"], d0 = { class: "border-t p-4" }, u0 = ["disabled"], c0 = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, f0 = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, m0 = ["placeholder", "title", "aria-label"], p0 = ["aria-label"], v0 = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, g0 = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, h0 = { class: "text-xs font-medium" }, b0 = ["value", "onChange"], x0 = ["value"], y0 = { class: "grid grid-cols-2 gap-2" }, k0 = ["value", "onChange"], $0 = ["value", "onChange"], w0 = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, C0 = ["value", "onChange"], S0 = ["value", "onChange"], M0 = {
  key: 4,
  class: "flex items-center gap-2"
}, B0 = ["aria-checked", "onClick"], A0 = { class: "text-xs" }, z0 = ["onClick"], P0 = ["value", "onChange"], _0 = ["value"], O0 = ["disabled", "onClick"], j0 = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, L0 = ["disabled", "onClick"], V0 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, T0 = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, D0 = ["aria-pressed", "aria-label", "title"], E0 = ["aria-label", "title"], I0 = { class: "flex flex-col gap-0.5 p-1" }, F0 = ["onClick"], N0 = ["onClick"], R0 = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, U0 = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, H0 = ["dusk"], q0 = ["aria-label", "onClick"], F5 = /* @__PURE__ */ O({
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
    fe(
      () => n.search,
      (W) => {
        W !== i.value && (i.value = W);
      }
    );
    let d;
    fe(i, (W) => {
      clearTimeout(d), d = setTimeout(() => {
        W !== n.search && r("update:search", W);
      }, 250);
    });
    const u = K({ ...n.filters });
    fe(
      () => n.filters,
      (W) => {
        u.value = { ...W };
      },
      { deep: !0 }
    );
    const m = k(
      () => n.filterSchema.filter(
        (W) => n.filters[W.key] !== null && n.filters[W.key] !== void 0
      ).length
    ), b = k(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), p = k(() => n.search !== "" || m.value > 0), h = k(() => n.indicators.length ? n.indicators : n.filterSchema.filter((W) => n.filters[W.key] !== null && n.filters[W.key] !== void 0).map((W) => ({
      key: W.key,
      label: `${W.label}: ${String(n.filters[W.key])}`,
      removable: !0
    })));
    function A(W) {
      r("group", W);
    }
    function C(W) {
      r("clear-filter", W);
    }
    function $(W) {
      return W.type === "multiselect";
    }
    function w(W) {
      const B = u.value[W.key];
      return Array.isArray(B) ? B : B == null ? [] : [B];
    }
    function g(W) {
      return w(W).filter(
        (B) => typeof B == "string" || typeof B == "number"
      );
    }
    function v(W) {
      return H(W).flatMap(
        (B) => typeof B.value == "string" || typeof B.value == "number" ? [{ value: B.value, label: B.label }] : []
      );
    }
    function c(W, B) {
      u.value = { ...u.value, [W.key]: B === "" ? null : B };
    }
    function S(W, B) {
      const N = u.value[W.key];
      if (typeof N != "string" || !N.includes(".."))
        return "";
      const [L, Y] = N.split("..");
      return B === "from" ? L ?? "" : Y ?? "";
    }
    function M(W, B, N) {
      const L = B === "from" ? N : S(W, "from"), Y = B === "to" ? N : S(W, "to");
      u.value = {
        ...u.value,
        [W.key]: L && Y ? `${L}..${Y}` : null
      };
    }
    function z(W, B, N) {
      const L = B === "from" ? N : S(W, "from"), Y = B === "to" ? N : S(W, "to");
      u.value = {
        ...u.value,
        [W.key]: L || Y ? `${L}..${Y}` : null
      };
    }
    function R(W) {
      r("apply-filters", { ...u.value }), W();
    }
    function D(W, B) {
      u.value[W] = B, r("apply-filters", { ...u.value });
    }
    function ee() {
      u.value = Object.fromEntries(n.filterSchema.map((W) => [W.key, null]));
    }
    function H(W) {
      return W.type === "boolean" ? [
        { value: !0, label: W.trueLabel ?? "Yes" },
        { value: !1, label: W.falseLabel ?? "No" }
      ] : W.type === "daterange" ? Object.entries(W.presets ?? {}).map(([B, N]) => ({
        value: B,
        label: N
      })) : (W.options ?? []).map((B) => ({ value: B, label: B }));
    }
    const G = K(new Set(n.hidden));
    fe(
      () => n.hidden,
      (W) => {
        G.value = new Set(W);
      },
      { deep: !0 }
    );
    function Z(W) {
      const B = new Set(G.value);
      B.has(W) ? B.delete(W) : B.add(W), G.value = B, r("apply-columns", [...B]);
    }
    function ae() {
      G.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function te() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function J() {
      i.value = "", r("clear");
    }
    return (W, B) => (t(), a("div", qy, [
      l("div", Ky, [
        l("div", Gy, [
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
          ce(l("input", {
            "onUpdate:modelValue": B[0] || (B[0] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, Wy), [
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
          m.value ? (t(), a("span", Zy, f(m.value), 1)) : y("", !0)
        ]),
        I(Dt, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (N) => s.value = N)
        }, {
          default: j(() => [
            I(Et, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", Jy, [
                  B[16] || (B[16] = l("div", { class: "border-b px-4 py-3" }, [
                    l("p", { class: "text-sm font-semibold" }, "Table tools"),
                    l("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  l("div", Yy, [
                    e.filterSchema.length ? (t(), a("div", Xy, [
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
                        l("label", Qy, f(N.label), 1),
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
                          }, f(L.label), 9, t0))), 128))
                        ], 40, e0)) : y("", !0)
                      ]))), 128))
                    ])) : y("", !0),
                    l("div", a0, [
                      B[14] || (B[14] = l("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      l("div", n0, [
                        (t(!0), a(P, null, V(e.columns, (N) => (t(), a("button", {
                          key: `mobile-col-${N.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: N.locked,
                          onClick: (L) => Z(N.key)
                        }, [
                          l("span", null, f(N.label), 1),
                          G.value.has(N.key) ? y("", !0) : (t(), a("span", o0, "On"))
                        ], 8, l0))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", s0, [
                      B[15] || (B[15] = l("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      l("div", r0, [
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
                        }, f(N.label), 9, i0))), 128))
                      ])
                    ])) : y("", !0)
                  ]),
                  l("div", d0, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !b.value,
                      onClick: te
                    }, " Apply filters ", 8, u0)) : y("", !0),
                    p.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: B[3] || (B[3] = (N) => {
                        J(), s.value = !1;
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
      l("div", c0, [
        l("div", f0, [
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
          ce(l("input", {
            "onUpdate:modelValue": B[5] || (B[5] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, m0), [
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
        e.filterSchema.length ? (t(), T(Fe, {
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
              m.value ? (t(), a("span", v0, f(m.value), 1)) : y("", !0)
            ], 10, p0)
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
            l("div", g0, [
              (t(!0), a(P, null, V(e.filterSchema, (L) => (t(), a("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                l("label", h0, f(L.label), 1),
                $(L) ? (t(), T(jt, {
                  key: 0,
                  "model-value": g(L),
                  options: v(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Y) => u.value[L.key] = Y.length ? Y : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(di, {
                  key: 1,
                  "model-value": u.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (Y) => D(L.key, Y)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), a(P, { key: 2 }, [
                  l("select", {
                    value: typeof u.value[L.key] == "string" && !String(u.value[L.key]).includes("..") ? u.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Y) => c(L, Y.target.value)
                  }, [
                    B[21] || (B[21] = l("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(P, null, V(H(L), (Y) => (t(), a("option", {
                      key: String(Y.value),
                      value: Y.value
                    }, f(Y.label), 9, x0))), 128))
                  ], 40, b0),
                  l("div", y0, [
                    l("input", {
                      type: "date",
                      value: S(L, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => M(
                        L,
                        "from",
                        Y.target.value
                      )
                    }, null, 40, k0),
                    l("input", {
                      type: "date",
                      value: S(L, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => M(
                        L,
                        "to",
                        Y.target.value
                      )
                    }, null, 40, $0)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), a("div", w0, [
                  l("input", {
                    type: "number",
                    value: S(L, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => z(
                      L,
                      "from",
                      Y.target.value
                    )
                  }, null, 40, C0),
                  l("input", {
                    type: "number",
                    value: S(L, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => z(
                      L,
                      "to",
                      Y.target.value
                    )
                  }, null, 40, S0)
                ])) : L.type === "boolean" ? (t(), a("div", M0, [
                  l("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[L.key] === !0,
                    class: _([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Y) => c(L, u.value[L.key] === !0 ? null : !0)
                  }, [
                    l("span", {
                      class: _(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, B0),
                  l("span", A0, f(L.trueLabel ?? "Yes"), 1),
                  l("button", {
                    type: "button",
                    class: _([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Y) => c(L, u.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, z0)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Y) => c(L, Y.target.value)
                }, [
                  B[22] || (B[22] = l("option", { value: "" }, "All", -1)),
                  (t(!0), a(P, null, V(H(L), (Y) => (t(), a("option", {
                    key: String(Y.value),
                    value: Y.value
                  }, f(Y.label), 9, _0))), 128))
                ], 40, P0))
              ]))), 128))
            ]),
            l("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !b.value,
              onClick: (L) => R(N)
            }, " Apply filters ", 8, O0)
          ]),
          _: 1
        })) : y("", !0),
        I(Fe, { "dismiss-on-panel-click": !1 }, {
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
            l("div", j0, [
              (t(!0), a(P, null, V(e.columns, (N) => (t(), a("button", {
                key: N.key,
                type: "button",
                class: _(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: N.locked,
                onClick: (L) => Z(N.key)
              }, [
                G.value.has(N.key) ? (t(), a("span", T0)) : (t(), a("svg", V0, [...B[25] || (B[25] = [
                  l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                U(" " + f(N.label), 1)
              ], 10, L0))), 128))
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
        ])], 10, D0)) : y("", !0),
        e.groups.length ? (t(), T(Fe, {
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
            ])], 10, E0)
          ]),
          panel: j(({ close: N }) => [
            l("div", I0, [
              l("button", {
                type: "button",
                class: _(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  A(null), N();
                }
              }, " No grouping ", 10, F0),
              (t(!0), a(P, null, V(e.groups, (L) => (t(), a("button", {
                key: L.key,
                type: "button",
                class: _(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (Y) => {
                  A(L.key), N();
                }
              }, f(L.label), 11, N0))), 128))
            ])
          ]),
          _: 1
        })) : y("", !0),
        p.value ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: J
        }, " Clear ")) : y("", !0),
        e.loading ? (t(), a("span", R0, "Loading…")) : y("", !0)
      ]),
      h.value.length ? (t(), a("div", U0, [
        (t(!0), a(P, null, V(h.value, (N) => (t(), a("span", {
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
          ])], 8, q0)) : y("", !0)
        ], 8, H0))), 128)),
        h.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: B[8] || (B[8] = (N) => r("clear-filters"))
        }, " Clear all ")) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), K0 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, G0 = { class: "grid gap-2" }, W0 = {
  key: 0,
  class: "text-destructive text-sm"
}, Z0 = { class: "flex gap-2" }, N5 = /* @__PURE__ */ O({
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
    })()), i = K(!1), d = ja(null), u = k(() => d.value?.isLoading.value ?? !1), m = k(() => d.value?.error.value ?? null), b = k(() => d.value?.isSupported.value ?? !1);
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
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (A, C) => b.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      l("div", G0, [
        C[3] || (C[3] = l("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ce(l("input", {
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
      m.value ? (t(), a("p", W0, f(m.value), 1)) : y("", !0),
      l("div", Z0, [
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
          onClick: h
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
    })) : (t(), a("p", K0, " Passkeys are not supported in this browser. "));
  }
}), J0 = { class: "flex flex-col gap-4" }, Y0 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, R5 = /* @__PURE__ */ O({
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
    bt("panelPicker", {
      get base() {
        return n.pickerBase ?? "";
      },
      get returnUrl() {
        return n.returnUrl ?? "";
      }
    }), bt("panelCreateOption", {
      run(m, b) {
        return n.createOption ? n.createOption(m, b) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = o, s = k(() => n.nodes.length > 0), i = k(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = k(() => n.errors._conflict);
    function u(m) {
      if (n.upload)
        return (b, p) => n.upload(m, b, p);
    }
    return (m, b) => (t(), a("div", J0, [
      d.value ? (t(), a("p", Y0, f(d.value), 1)) : y("", !0),
      s.value ? (t(!0), a(P, { key: 1 }, V(e.nodes, (p, h) => (t(), T(ca, {
        key: h,
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
        (t(!0), a(P, null, V(e.fields, (p) => (t(), T(Ne, {
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
          class: _(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", p.key, h),
          onAffixAction: (h) => r("affix-action", p.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), X0 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, Q0 = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, ek = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, tk = ["disabled"], ak = ["disabled"], nk = ["disabled"], U5 = /* @__PURE__ */ O({
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
    return (o, n) => (t(), T(Re, { to: "body" }, [
      I(Le, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), a("div", X0, [
            l("div", Q0, [
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
              l("span", ek, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => o.$emit("discard"))
              }, f(e.discardLabel), 9, tk)) : y("", !0),
              l("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => o.$emit("cancel"))
              }, f(e.cancelLabel), 9, ak),
              l("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => o.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, nk)
            ])
          ])) : y("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function H5(e, o = {}) {
  const { warnOnUnload: n = !0 } = o, r = K(ht(e.value)), s = k(() => ht(e.value) !== r.value);
  function i() {
    r.value = ht(e.value);
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
function ht(e) {
  return JSON.stringify(e, (o, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const lk = {
  key: 0,
  class: "flex flex-col gap-1"
}, ok = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, sk = { class: "text-foreground text-sm font-medium" }, rk = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, ik = {
  key: 5,
  class: "max-w-full font-normal"
}, dk = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, uk = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, ck = {
  key: 6,
  class: "font-normal"
}, fk = {
  key: 0,
  class: "divide-y rounded-md border"
}, mk = { class: "text-muted-foreground truncate font-medium" }, pk = { class: "text-foreground col-span-2 break-words" }, vk = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, gk = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, hk = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, bk = ["href"], xk = { class: "flex min-w-0 items-start gap-2.5" }, yk = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, kk = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, $k = ["d"], wk = { class: "min-w-0" }, Ck = { class: "flex flex-wrap items-center gap-2" }, Sk = { class: "text-sm font-semibold" }, Mk = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Bk = ["onClick"], q5 = /* @__PURE__ */ O({
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
    }, b = k(() => n.node.key ? n.record[n.node.key] : null), p = k(() => {
      const C = b.value;
      return C == null || C === "";
    }), h = k(() => {
      if (p.value)
        return "None";
      const C = b.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(C)).toLocaleDateString(void 0, m[n.node.type]);
      let $ = String(C);
      return n.node.transform === "upper" && ($ = $.toUpperCase()), n.node.transform === "lower" && ($ = $.toLowerCase()), [n.node.prefix, $, n.node.suffix].filter(Boolean).join(" ");
    }), A = k(() => {
      const C = typeof b.value == "boolean" ? b.value ? "1" : "" : String(b.value), $ = n.node.colors?.[C] ?? n.node.defaultColor ?? "neutral";
      return Lt[$] ?? "outline";
    });
    return (C, $) => {
      const w = Mt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", lk, [
        l("dt", ok, f(e.node.label), 1),
        l("dd", sk, [
          e.node.type === "badge" && x(bi)(b.value) ? (t(), T(Ge, {
            key: 0,
            variant: A.value,
            class: "capitalize"
          }, {
            default: j(() => [
              U(f(b.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", rk, "None")) : e.node.type === "icon" ? (t(), T(Er, {
            key: 2,
            value: b.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Nr, {
            key: 3,
            src: b.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Kr, {
            key: 4,
            value: typeof b.value == "string" ? b.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", ik, [
            e.node.language ? (t(), a("p", dk, f(e.node.language), 1)) : y("", !0),
            l("pre", uk, [
              l("code", null, f(b.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", ck, [
            b.value && typeof b.value == "object" && !Array.isArray(b.value) && Object.keys(b.value).length ? (t(), a("dl", fk, [
              (t(!0), a(P, null, V(b.value, (g, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                l("dt", mk, f(v), 1),
                l("dd", pk, f(g), 1)
              ]))), 128))
            ])) : (t(), a("span", vk, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", gk, [
            (t(!0), a(P, null, V(Array.isArray(b.value) ? b.value : [], (g, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(P, null, V(e.node.entries ?? [], (c, S) => (t(), T(w, {
                key: S,
                node: c,
                record: g,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (M) => r("action", M))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(b.value) || b.value.length === 0 ? (t(), a("span", hk, "None")) : y("", !0)
          ])) : e.node.url && !p.value ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(h.value), 9, bk)) : (t(), a("span", {
            key: 9,
            class: _([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(h.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: $[1] || ($[1] = (g) => r("action", e.node.action))
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
          onClick: $[2] || ($[2] = (g) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", xk, [
            e.node.icon ? (t(), a("div", yk, [
              (t(), a("svg", kk, [
                l("path", {
                  d: x(de)(e.node.icon)
                }, null, 8, $k)
              ]))
            ])) : y("", !0),
            l("div", wk, [
              l("div", Ck, [
                l("h3", Sk, f(e.node.label), 1),
                e.node.status ? (t(), T(he, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : y("", !0)
              ]),
              e.node.description ? (t(), a("p", Mk, f(e.node.description), 1)) : y("", !0)
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
            onAction: $[3] || ($[3] = (c) => r("action", c))
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
          onAction: $[4] || ($[4] = (c) => r("action", c))
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
          }, f(g.label), 11, Bk))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (g, v) => ce((t(), a("div", {
          key: v,
          class: _(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(g.children ?? [], (c, S) => (t(), T(w, {
            key: S,
            node: c,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (M) => r("action", M))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ve, i.value === v]
        ])), 128))
      ], 2)) : y("", !0);
    };
  }
}), Ak = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, zk = { class: "text-muted-foreground text-sm" }, Pk = { class: "flex items-start gap-3" }, _k = { class: "min-w-0 flex-1" }, Ok = { class: "flex flex-wrap items-center gap-2" }, jk = { class: "truncate text-sm font-medium" }, Lk = { class: "text-muted-foreground mt-0.5 text-xs" }, Vk = { class: "text-muted-foreground text-xs" }, Tk = { class: "mt-auto flex items-center gap-2" }, Dk = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = k(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), a("div", Ak, [
      l("p", zk, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      l("div", {
        class: _(x(Kd))
      }, [
        (t(!0), a(P, null, V(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          l("div", Pk, [
            l("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            l("div", _k, [
              l("div", Ok, [
                l("h3", jk, f(u.label), 1),
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
              l("p", Lk, f(u.caption), 1)
            ])
          ]),
          l("p", Vk, f(u.methods.join(" · ")), 1),
          l("div", Tk, [
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
}), Ek = { class: "flex flex-col gap-6" }, Ik = { class: "relative" }, Fk = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Nk = ["d"], Rk = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Uk = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Hk = { class: "flex flex-wrap items-center gap-2" }, qk = { class: "text-muted-foreground text-sm" }, Kk = { class: "flex flex-col gap-1 text-sm" }, Gk = ["value"], Wk = {
  key: 0,
  class: "flex flex-col gap-2"
}, Zk = { class: "flex flex-wrap items-center gap-2" }, Jk = {
  key: 1,
  class: "flex items-center gap-2"
}, K5 = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ _e({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const o = Ye(e, "gateways"), n = K(null), r = K(""), s = k(
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
    function b(C) {
      const $ = o.value.find((g) => g.key === C);
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
      const w = o.value.find((g) => g.key === C);
      w?.connected && u(C, { enabled: $, isDefault: $ ? w.isDefault : !1 });
    }
    function h(C) {
      const $ = o.value.find((w) => w.key === C);
      !$ || !d($) || (o.value = o.value.map((w) => ({
        ...w,
        isDefault: w.key === C
      })));
    }
    function A(C) {
      const $ = n.value;
      !$ || !o.value.find((g) => g.key === $)?.connected || u($, { mode: C });
    }
    return (C, $) => (t(), a(P, null, [
      l("div", Ek, [
        I(ze, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        l("div", Ik, [
          (t(), a("svg", Fk, [
            l("path", {
              d: x(de)("search")
            }, null, 8, Nk)
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
        i.value.length > 0 ? (t(), T(Dk, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: b
        }, null, 8, ["gateways"])) : (t(), a("p", Rk, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      I(Ft, {
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
            onClick: $[7] || ($[7] = (w) => b(s.value.key))
          }, {
            default: j(() => [
              U(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : y("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), a("div", Uk, [
            l("div", Hk, [
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
            l("p", qk, f(s.value.caption), 1),
            l("label", Kk, [
              $[12] || ($[12] = U(" Display name ", -1)),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, Gk)
            ]),
            $[20] || ($[20] = l("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", Wk, [
              $[16] || ($[16] = l("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              $[17] || ($[17] = l("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              l("div", Zk, [
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
                  onClick: $[3] || ($[3] = (w) => h(s.value.key))
                }, {
                  default: j(() => [...$[15] || ($[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : y("", !0),
            s.value.connected ? (t(), a("div", Jk, [
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
function Yt(e) {
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
function G5(e) {
  const o = K(Yt(e));
  pe(() => {
    o.value = Yt(e);
  }), fe(
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
function W5(e) {
  const { config: o, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = K(
    o.driver === "none" ? "off" : "connecting"
  ), m = K(/* @__PURE__ */ new Set());
  let b = /* @__PURE__ */ new Map(), p, h, A, C = (/* @__PURE__ */ new Date()).toISOString(), $ = null;
  function w(G, Z) {
    b.set(G, { ...b.get(G) ?? {}, ...Z }), !p && (p = setTimeout(() => {
      p = void 0, g();
    }, o.batchMs));
  }
  function g() {
    if (b.size === 0)
      return;
    const G = b;
    b = /* @__PURE__ */ new Map();
    const Z = /* @__PURE__ */ new Set();
    for (const [ae, te] of G) {
      const J = n.value.find((W) => W[r] === ae);
      if (!J) {
        d?.(ae, te);
        continue;
      }
      Object.assign(J, te), Z.add(ae);
    }
    Z.size !== 0 && (m.value = /* @__PURE__ */ new Set([...m.value, ...Z]), setTimeout(() => {
      const ae = new Set(m.value);
      Z.forEach((te) => ae.delete(te)), m.value = ae;
    }, 1500));
  }
  async function v() {
    if (!(!s || n.value.length === 0)) {
      A?.abort(), A = new AbortController();
      try {
        const G = n.value.map((te) => te[r]), { records: Z, at: ae } = await s(G, C);
        C = ae, u.value = "live";
        for (const te of Z)
          w(te[r], te);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function c() {
    S(), u.value = "live", h = setInterval(v, o.intervalMs);
  }
  function S() {
    clearInterval(h), h = void 0, A?.abort();
  }
  function M() {
    return window.Echo ?? null;
  }
  function z() {
    const G = M();
    if (!G || !o.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    $ = o.channel;
    const Z = G.private(o.channel);
    for (const ae of o.events)
      Z.listen(ae, (te) => {
        te?.[r] !== void 0 && w(te[r], te);
      });
    u.value = "live", G.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), G.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function R() {
    $ && (M()?.leave($), $ = null);
  }
  function D() {
    o.driver === "poll" && c(), o.driver === "broadcast" && z();
  }
  function ee() {
    S(), R(), clearTimeout(p), p = void 0, b = /* @__PURE__ */ new Map();
  }
  function H() {
    o.pauseWhenHidden && (document.hidden ? (ee(), u.value = "paused") : (C = (/* @__PURE__ */ new Date()).toISOString(), D(), i?.()));
  }
  return pe(() => {
    o.driver !== "none" && (D(), o.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), be(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: u, recentlyChanged: m, applyPatch: w, flush: g, pollOnce: v };
}
const Yk = /^[a-z0-9-]+$/, Xk = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function Z5(e) {
  La(() => {
    if (typeof document > "u")
      return;
    const o = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !Yk.test(n) || typeof r != "string" || !Xk.test(r) || (o[`--${n}`] = r);
    Hi(o);
  });
}
const Qk = { class: "flex items-center gap-0.5" }, e2 = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", Qk, [
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
}), t2 = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), T(ya, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), a2 = { class: "flex flex-col gap-2" }, n2 = { class: "bg-card rounded-lg border p-4" }, l2 = { class: "text-muted-foreground truncate text-xs" }, o2 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, s2 = /* @__PURE__ */ O({
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
    const b = k(() => m(s.value, r.value.titleMax)), p = k(() => m(i.value, r.value.descriptionMax));
    function h($, w, g) {
      return $ === 0 ? { tone: "text-muted-foreground", note: "empty" } : $ > g ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : $ < w ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const A = k(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), C = k(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return ($, w) => (t(), a("div", a2, [
      l("div", n2, [
        l("p", l2, f(u.value), 1),
        l("p", {
          class: _(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", b.value === "" ? "text-muted-foreground italic" : ""])
        }, f(b.value || "Untitled page"), 3),
        l("p", {
          class: _(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      l("div", o2, [
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
function r2() {
  Me("radio", wc), Me("checkboxlist", Mc), Me("tags", jc), Me("colour", qc), Me("slider", Yc), Me("visual-select", cf), Me("markdown", ac), Me("code", dc), Me("seo-preview", s2), vt("swatch", mf), vt("voucher-code-box", t2), vt("document-colour-mode", e2);
}
function wa() {
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
const i2 = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: o, shown: n } = wa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: _(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), d2 = ["id"], Se = /* @__PURE__ */ O({
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
        I(i2, null, {
          default: j(() => [
            q(o.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, d2));
  }
}), u2 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, c2 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, f2 = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, De = /* @__PURE__ */ O({
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
      e.eyebrow ? (t(), a("p", u2, f(e.eyebrow), 1)) : y("", !0),
      e.title ? (t(), a("h2", c2, f(e.title), 1)) : y("", !0),
      e.body ? (t(), a("p", f2, f(e.body), 1)) : y("", !0)
    ], 2)) : y("", !0);
  }
});
function m2() {
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
const p2 = { class: "pk-tilt-inner relative h-full" }, v2 = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: o } = m2();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: "pk-tilt group/tilt"
    }, [
      l("div", p2, [
        r[0] || (r[0] = l("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(n.$slots, "default")
      ])
    ], 512));
  }
}), g2 = { class: "flex flex-col gap-10" }, h2 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, b2 = { class: "text-base font-semibold" }, x2 = { class: "text-sm text-pretty text-muted-foreground" }, y2 = /* @__PURE__ */ O({
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
        l("div", g2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", h2, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), T(v2, {
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
                  l("h3", b2, f(s.title), 1),
                  l("p", x2, f(s.body), 1)
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
}), k2 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, $2 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, w2 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, C2 = ["href"], S2 = /* @__PURE__ */ O({
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
        l("div", k2, [
          l("h2", $2, f(e.title), 1),
          e.body ? (t(), a("p", w2, f(e.body), 1)) : y("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, C2)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), M2 = { class: "flex flex-col gap-8" }, B2 = { class: "divide-y rounded-lg border" }, A2 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, z2 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, P2 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, { narrow: "" }, {
      default: j(() => [
        l("div", M2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", B2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              l("summary", A2, [
                U(f(r.question) + " ", 1),
                n[0] || (n[0] = l("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              l("p", z2, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), _2 = { class: "flex flex-col gap-10" }, O2 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, j2 = { class: "text-sm font-semibold" }, L2 = { class: "text-sm text-pretty text-muted-foreground" }, V2 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", _2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", O2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("h3", j2, f(r.title), 1),
              l("p", L2, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), T2 = { class: "flex flex-col items-center gap-6 text-center" }, D2 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, E2 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, I2 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, F2 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, N2 = ["href"], R2 = ["href"], U2 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, H2 = /* @__PURE__ */ O({
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
        l("div", T2, [
          e.eyebrow ? (t(), a("p", D2, f(e.eyebrow), 1)) : y("", !0),
          l("h1", E2, f(e.title), 1),
          e.body ? (t(), a("p", I2, f(e.body), 1)) : y("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", F2, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, N2)) : y("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, R2)) : y("", !0)
          ])) : y("", !0),
          e.note ? (t(), a("p", U2, f(e.note), 1)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), q2 = { class: "flex flex-col items-center gap-6" }, K2 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, G2 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, W2 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        l("div", q2, [
          e.title ? (t(), a("p", K2, f(e.title), 1)) : y("", !0),
          l("ul", G2, [
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
}), Z2 = { class: "flex flex-col gap-10" }, J2 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Y2 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, X2 = ["aria-pressed"], Q2 = ["aria-pressed"], e$ = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, t$ = { class: "grid gap-4 md:grid-cols-3" }, a$ = { class: "flex flex-col gap-1" }, n$ = { class: "text-sm font-semibold" }, l$ = { class: "flex items-baseline gap-1" }, o$ = { class: "text-3xl font-semibold tracking-tight" }, s$ = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, r$ = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, i$ = { class: "flex flex-col gap-2 text-sm" }, d$ = { class: "text-muted-foreground" }, u$ = ["href"], c$ = /* @__PURE__ */ O({
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
        l("div", Z2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", J2, [
            l("div", Y2, [
              l("button", {
                type: "button",
                class: _([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, X2),
              l("button", {
                type: "button",
                class: _([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, Q2)
            ]),
            e.annualNote ? (t(), a("p", e$, f(e.annualNote), 1)) : y("", !0)
          ])) : y("", !0),
          l("ul", t$, [
            (t(!0), a(P, null, V(e.items ?? [], (u, m) => (t(), a("li", {
              key: m,
              class: _(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              l("div", a$, [
                l("h3", n$, f(u.name), 1),
                l("p", l$, [
                  l("span", o$, f(s(u)), 1),
                  u.period ? (t(), a("span", s$, f(u.period), 1)) : y("", !0)
                ]),
                u.body ? (t(), a("p", r$, f(u.body), 1)) : y("", !0)
              ]),
              l("ul", i$, [
                (t(!0), a(P, null, V(u.features ?? [], (b, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = l("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  l("span", d$, f(b.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: _([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, u$)) : y("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function f$() {
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
const m$ = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, p$ = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, v$ = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, g$ = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, h$ = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, b$ = { class: "pk-showcase-stage w-full [perspective:1400px]" }, x$ = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, y$ = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, k$ = { class: "ml-3 truncate text-xs text-muted-foreground" }, $$ = { class: "flex" }, w$ = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, C$ = { class: "min-w-0 flex-1 p-4" }, S$ = { class: "flex flex-col divide-y rounded-md border" }, M$ = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: o } = f$();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: o,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      l("div", m$, [
        l("div", p$, [
          l("div", v$, [
            l("h2", g$, f(e.title), 1),
            e.body ? (t(), a("p", h$, f(e.body), 1)) : y("", !0)
          ]),
          l("div", b$, [
            l("div", x$, [
              l("div", y$, [
                r[0] || (r[0] = l("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = l("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = l("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                l("span", k$, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              l("div", $$, [
                l("div", w$, [
                  (t(), a(P, null, V(6, (s) => l("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                l("div", C$, [
                  r[4] || (r[4] = l("div", { class: "mb-3 flex gap-2" }, [
                    l("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  l("div", S$, [
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
}), B$ = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const o = e, { el: n, shown: r } = wa(), s = K(0);
    return fe(r, (i) => {
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
}), A$ = { class: "flex flex-col gap-10" }, z$ = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, P$ = { class: "order-2 text-sm text-muted-foreground" }, _$ = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, O$ = /* @__PURE__ */ O({
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
        l("div", A$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("dl", z$, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              l("dt", P$, f(s.label), 1),
              l("dd", _$, [
                o(s.value) ? (t(), T(B$, {
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
}), j$ = { class: "flex flex-col gap-10" }, L$ = { class: "grid gap-6 md:grid-cols-3" }, V$ = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, T$ = { class: "text-sm font-semibold" }, D$ = { class: "text-sm text-pretty text-muted-foreground" }, E$ = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", j$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ol", L$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              l("span", V$, f(s + 1), 1),
              l("h3", T$, f(r.title), 1),
              l("p", D$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), I$ = { class: "flex flex-col gap-10" }, F$ = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, N$ = { class: "text-pretty text-sm leading-relaxed" }, R$ = { class: "mt-auto flex items-center gap-3" }, U$ = ["src"], H$ = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, q$ = { class: "min-w-0" }, K$ = { class: "block truncate text-sm font-medium" }, G$ = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, W$ = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", I$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", F$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("blockquote", N$, " “" + f(r.quote) + "” ", 1),
              l("figcaption", R$, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, U$)) : (t(), a("span", H$, f((r.name ?? "?").slice(0, 1)), 1)),
                l("span", q$, [
                  l("span", K$, f(r.name), 1),
                  r.role ? (t(), a("span", G$, f(r.role), 1)) : y("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), J5 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const n = e, r = {
      hero: H2,
      logos: W2,
      features: V2,
      bento: y2,
      showcase: M$,
      steps: E$,
      stats: O$,
      testimonials: W$,
      pricing: c$,
      faq: P2,
      cta: S2
    }, s = k(
      () => (n.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return o({ known: Object.keys(r) }), (i, d) => (t(!0), a(P, null, V(s.value, (u) => (t(), T(xe(u.component), oe({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), Z$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Y5 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", Z$, [
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
}), J$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, X5 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", J$, [...n[0] || (n[0] = [
      St('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), Y$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Q5 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", Y$, [...n[0] || (n[0] = [
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
r2();
const e3 = "0.0.1";
export {
  k5 as AdminDirectory,
  Id as Alert,
  Fd as AlertDescription,
  Nd as AlertTitle,
  r5 as AppPageFooter,
  Cw as AppearanceDrawer,
  w4 as Avatar,
  C4 as AvatarFallback,
  S4 as AvatarImage,
  Lt as BADGE_VARIANTS,
  yw as BadgeResolver,
  p5 as BarChart,
  M4 as Breadcrumb,
  B4 as BreadcrumbEllipsis,
  A4 as BreadcrumbItem,
  z4 as BreadcrumbLink,
  P4 as BreadcrumbList,
  _4 as BreadcrumbPage,
  O4 as BreadcrumbSeparator,
  rw as BulkActions,
  Kd as CATALOGUE_GRID,
  _w as CATALOGUE_GRID_TIGHT,
  Gd as CATALOGUE_GRID_TILES,
  Y4 as Card,
  X4 as CardAction,
  Q4 as CardContent,
  e5 as CardDescription,
  t5 as CardFooter,
  a5 as CardHeader,
  n5 as CardTitle,
  b1 as CartPanel,
  P5 as CatalogBrowser,
  Ug as CatalogCard,
  $a as CatalogFilterSheet,
  It as CatalogGrid,
  A5 as CatalogInspect,
  rx as CatalogItemDetail,
  z5 as CatalogItemView,
  _5 as CatalogRegister,
  B5 as CatalogTill,
  pv as ChartCard,
  et as ChartTooltip,
  Fo as Checkbox,
  vw as CheckboxCell,
  gw as CodeCell,
  Kr as ColourCell,
  x5 as ComboChart,
  Io as CreateOptionDialog,
  Mo as CreateOptionError,
  j5 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Rx as DASHBOARD_HIDE_KEY,
  L5 as DashboardShortcuts,
  yl as DataTable,
  F4 as Dialog,
  N4 as DialogClose,
  R4 as DialogContent,
  U4 as DialogDescription,
  H4 as DialogFooter,
  q4 as DialogHeader,
  Cu as DialogOverlay,
  K4 as DialogScrollContent,
  G4 as DialogTitle,
  W4 as DialogTrigger,
  k5 as DirectoryPage,
  d4 as DropdownMenu,
  u4 as DropdownMenuCheckboxItem,
  c4 as DropdownMenuContent,
  f4 as DropdownMenuGroup,
  m4 as DropdownMenuItem,
  p4 as DropdownMenuLabel,
  n3 as DropdownMenuPortal,
  v4 as DropdownMenuRadioGroup,
  g4 as DropdownMenuRadioItem,
  h4 as DropdownMenuSeparator,
  b4 as DropdownMenuShortcut,
  x4 as DropdownMenuSub,
  y4 as DropdownMenuSubContent,
  k4 as DropdownMenuSubTrigger,
  $4 as DropdownMenuTrigger,
  bw as EditableCell,
  Lw as FORM_MEASURE,
  Ne as FormFieldControl,
  y5 as HeatmapChart,
  ft as ICON_PATHS,
  Er as IconCell,
  Nr as ImageCell,
  q5 as InfoNode,
  Zd as JPEG_IMAGE_ERROR,
  hw as KeyValueCell,
  Z4 as Label,
  _m as LineChart,
  Xb as LineItems,
  st as MiniStatCard,
  j4 as NavigationMenu,
  L4 as NavigationMenuContent,
  V4 as NavigationMenuIndicator,
  T4 as NavigationMenuItem,
  D4 as NavigationMenuLink,
  E4 as NavigationMenuList,
  I4 as NavigationMenuTrigger,
  $u as NavigationMenuViewport,
  Wd as OPAQUE_IMAGE_ERROR,
  Te as PAGE_SHELL,
  Ow as PAGE_SHELL_COMPACT,
  jw as PAGE_SHELL_STACK,
  K5 as PaymentGatewaySettings,
  Dk as PaymentGateways,
  v5 as PieChart,
  zw as PkAlertError,
  Y5 as PkAuroraBackdrop,
  Ge as PkBadge,
  y2 as PkBento,
  Sw as PkBottomNav,
  l5 as PkBoundary,
  u5 as PkBuilder,
  se as PkButton,
  o5 as PkCard,
  Mc as PkCheckboxList,
  ya as PkCodeBox,
  dc as PkCodeInput,
  qc as PkColourPicker,
  Q5 as PkConsoleBackdrop,
  B$ as PkCountUp,
  S2 as PkCta,
  i5 as PkDeviceFrame,
  Hf as PkDocument,
  Fe as PkDropdown,
  X5 as PkEditorialBackdrop,
  xt as PkEmptyState,
  P2 as PkFaq,
  V2 as PkFeatureGrid,
  ke as PkFieldLabel,
  ua as PkFileUpload,
  ze as PkHeading,
  H2 as PkHero,
  ps as PkKeyValue,
  J5 as PkLandingSections,
  W2 as PkLogoCloud,
  ac as PkMarkdownInput,
  Je as PkModal,
  jt as PkMultiSelect,
  Bw as PkOtpInput,
  Aw as PkPageHeader,
  N5 as PkPasskeyRegister,
  Pw as PkPasswordInput,
  c$ as PkPricing,
  Nb as PkQtyStepper,
  di as PkQueryBuilder,
  wc as PkRadioGroup,
  d5 as PkRepeater,
  i2 as PkReveal,
  Cs as PkRichEditor,
  Se as PkSection,
  De as PkSectionHeading,
  M$ as PkShowcase,
  $x as PkSignaturePad,
  $e as PkSkeleton,
  Ft as PkSlideover,
  Yc as PkSlider,
  Mw as PkSpinner,
  O$ as PkStats,
  he as PkStatusBadge,
  Co as PkStepIndicator,
  E$ as PkSteps,
  mf as PkSwatchPreview,
  jc as PkTagsInput,
  W$ as PkTestimonials,
  ge as PkTextInput,
  v2 as PkTiltCard,
  cf as PkVisualSelect,
  gh as PlanCard,
  M5 as PlanEditor,
  S5 as PlanGrid,
  b5 as PolarAreaChart,
  h5 as RadarChart,
  kw as RecordActions,
  R5 as RecordForm,
  pw as RelationCreateDialog,
  iw as RelationPanel,
  yg as STATUS_TONES,
  g5 as ScatterChart,
  ca as SchemaNode,
  w5 as SegmentedBar,
  D5 as SelectionBar,
  hu as Separator,
  T5 as SetupChecklist,
  va as ShadcnInput,
  Dt as Sheet,
  Tw as SheetClose,
  Et as SheetContent,
  au as SheetDescription,
  Dw as SheetFooter,
  nu as SheetHeader,
  lu as SheetTitle,
  Ew as SheetTrigger,
  jv as ShortcutsWidget,
  Iw as Sidebar,
  Fw as SidebarContent,
  Nw as SidebarFooter,
  Rw as SidebarGroup,
  Uw as SidebarGroupAction,
  Hw as SidebarGroupContent,
  qw as SidebarGroupLabel,
  Kw as SidebarHeader,
  Gw as SidebarInput,
  Ww as SidebarInset,
  Zw as SidebarMenu,
  Jw as SidebarMenuAction,
  Yw as SidebarMenuBadge,
  Qw as SidebarMenuButton,
  e4 as SidebarMenuItem,
  t4 as SidebarMenuSkeleton,
  a4 as SidebarMenuSub,
  n4 as SidebarMenuSubButton,
  l4 as SidebarMenuSubItem,
  o4 as SidebarProvider,
  s4 as SidebarRail,
  r4 as SidebarSeparator,
  i4 as SidebarTrigger,
  O5 as SignatureStudio,
  dt as Sparkline,
  J4 as Spinner,
  $5 as StatCard,
  C5 as StatListChart,
  V5 as StatStrip,
  Ie as Switch,
  ga as TRANSPARENT_IMAGE_HELP,
  E5 as TablePagination,
  Xl as TableShell,
  I5 as TableTabs,
  F5 as TableToolbar,
  m5 as ThemeToggle,
  pu as Tooltip,
  vu as TooltipContent,
  Xw as TooltipProvider,
  gu as TooltipTrigger,
  ka as TrendBadge,
  U5 as UnsavedBar,
  Rd as alertVariants,
  Ui as appearanceVars,
  wt as applyAppearance,
  eu as assertTransparentImage,
  Ke as buttonClasses,
  rt as catalogFiltersActive,
  Q as cn,
  Ao as createOptionActionLabel,
  Bo as createOptionTitle,
  Hg as cycleLabel,
  Pe as emptyCatalogFilters,
  So as fieldControl,
  fw as fieldErrorsFromPayload,
  Cb as findExactSku,
  qg as formatPerkValue,
  bi as hasBadgeValue,
  dw as hasFieldControl,
  c5 as hasOptionPreview,
  de as iconPath,
  Xd as imageHasTransparency,
  $w as initializeAppearance,
  $t as isDark,
  Nt as matchCatalogItem,
  wu as navigationMenuTriggerStyle,
  Xc as optionPreview,
  Vw as packWidgetColumns,
  Kg as perkGranted,
  Tt as readAppearance,
  r2 as registerBuiltInFieldControls,
  Me as registerFieldControl,
  vt as registerOptionPreview,
  uw as registeredFieldTypes,
  Qc as registeredOptionPreviews,
  cw as resetFieldControls,
  f5 as resetOptionPreviews,
  ww as setAppearancePersister,
  bu as sidebarMenuButtonVariants,
  Cg as statusBadgeVariant,
  wg as statusTone,
  mw as toUrl,
  pa as useAppearance,
  G5 as useColumnVisibility,
  W5 as useLiveUpdates,
  m2 as usePointer,
  wa as useReveal,
  xw as useSchemaColumns,
  f$ as useScrollProgress,
  s5 as useShellPageFooter,
  it as useSidebar,
  Z5 as useTenantTheme,
  H5 as useUnsavedChanges,
  e3 as version
};
//# sourceMappingURL=index.js.map
