import './ui.css';
import { defineComponent as O, openBlock as t, createElementBlock as a, normalizeClass as z, createElementVNode as l, renderSlot as q, unref as b, toDisplayString as f, createCommentVNode as y, computed as $, normalizeStyle as ne, Fragment as _, renderList as V, ref as K, watch as fe, useId as Ma, withModifiers as me, createTextVNode as U, createVNode as I, createStaticVNode as Ct, createBlock as T, createSlots as ht, withCtx as j, nextTick as Ae, onBeforeUnmount as he, Teleport as Re, Transition as Le, onMounted as pe, resolveDynamicComponent as xe, mergeProps as oe, withDirectives as ce, vModelText as ye, normalizeProps as we, guardReactiveProps as Oe, defineAsyncComponent as Nt, inject as at, resolveComponent as St, vShow as Ve, vModelSelect as Ee, vModelDynamic as Ba, isRef as Aa, useTemplateRef as Pa, onErrorCaptured as _a, provide as bt, useSlots as za, markRaw as Xt, withKeys as Oa, reactive as We, useModel as Je, mergeModels as ze, shallowRef as ja, watchEffect as La } from "vue";
import { Check as Qt, AlertCircle as Va, EyeOff as Ta, Eye as Da, X as Mt, PanelLeftOpen as Ea, PanelLeftClose as Ia, Circle as Fa, ChevronRight as ea, MoreHorizontal as Na, ChevronDown as Ra, Loader2Icon as Ua } from "@lucide/vue";
import { reactiveOmit as ie, useVModel as ta, useMediaQuery as Ha, useEventListener as qa, defaultDocument as Ka } from "@vueuse/core";
import { useForwardPropsEmits as ve, CheckboxRoot as Ga, CheckboxIndicator as Wa, SwitchRoot as Za, SwitchThumb as Ja, DialogRoot as aa, DialogClose as Ue, DialogOverlay as Bt, DialogPortal as At, DialogContent as Pt, DialogDescription as na, DialogTitle as la, DialogTrigger as oa, createContext as Ya, Primitive as He, TooltipRoot as Xa, TooltipPortal as Qa, TooltipContent as en, TooltipArrow as tn, TooltipProvider as sa, TooltipTrigger as an, Separator as nn, DropdownMenuRoot as ln, DropdownMenuCheckboxItem as on, DropdownMenuItemIndicator as ra, DropdownMenuPortal as sn, DropdownMenuContent as rn, DropdownMenuGroup as dn, useForwardProps as Ce, DropdownMenuItem as un, DropdownMenuLabel as cn, DropdownMenuRadioGroup as fn, DropdownMenuRadioItem as mn, DropdownMenuSeparator as pn, DropdownMenuSub as vn, DropdownMenuSubContent as gn, DropdownMenuSubTrigger as hn, DropdownMenuTrigger as bn, AvatarRoot as xn, AvatarFallback as yn, AvatarImage as kn, NavigationMenuViewport as $n, NavigationMenuRoot as wn, NavigationMenuContent as Cn, NavigationMenuIndicator as Sn, NavigationMenuItem as Mn, NavigationMenuLink as Bn, NavigationMenuList as An, NavigationMenuTrigger as Pn, Label as _n } from "reka-ui";
import { DropdownMenuPortal as W5 } from "reka-ui";
import { clsx as zn } from "clsx";
import { twMerge as On } from "tailwind-merge";
import { cva as _t } from "class-variance-authority";
import { usePage as ia, Link as jn } from "@inertiajs/vue3";
const ct = {
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
  return e ? ct[e] ?? ct.dot : ct.dot;
}
const Ln = ["d"], Vn = { class: "flex max-w-sm flex-col gap-1" }, Tn = {
  key: 0,
  class: "text-sm"
}, Dn = {
  key: 0,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, Rt = /* @__PURE__ */ O({
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
      class: z(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      l("div", {
        class: z(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
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
            class: z(e.compact ? "size-5" : "size-6")
          }, [
            l("path", {
              d: b(de)(e.icon)
            }, null, 8, Ln)
          ], 2))
        ])
      ], 2),
      l("div", Vn, [
        l("p", {
          class: z(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
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
      (t(!0), a(_, null, V(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
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
    function h(F) {
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
    const x = K(null), A = K(null);
    function w(F, E) {
      x.value = F, E.dataTransfer?.setData("text/plain", String(F)), E.dataTransfer && (E.dataTransfer.effectAllowed = "move");
    }
    function S() {
      x.value = null, A.value = null;
    }
    function k(F) {
      return x.value === null || A.value !== F ? "" : x.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function g(F, E) {
      x.value !== null && (E.preventDefault(), A.value = F);
    }
    function v(F) {
      const E = x.value;
      if (x.value = null, A.value = null, E === null || E === F)
        return;
      const X = n.rows.map((re) => re[n.rowKey]), [ue] = X.splice(E, 1);
      X.splice(F, 0, ue), c("reorder", X);
    }
    const c = o;
    function C(F, E) {
      !n.rowClickable || n.reordering || E.button !== 0 || E.metaKey || E.ctrlKey || E.shiftKey || E.altKey || E.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", F);
    }
    const B = K(null), P = Ma(), R = $(() => n.columns.filter((F) => !n.hidden?.has(F.key)));
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
        const et = G(H.value), dt = G(X);
        if (et !== -1 && dt !== -1) {
          const wa = Math.min(et, dt), Ca = Math.max(et, dt), Sa = !re;
          for (let tt = wa; tt <= Ca; tt++) {
            if (!p(tt))
              continue;
            const ut = D(n.rows[tt]);
            if (ut === null)
              continue;
            !!n.selected?.has(ut) !== Sa && c("toggle-row", ut);
          }
          H.value = X;
          return;
        }
      }
      c("toggle-row", X), H.value = X;
    }
    const ae = $(
      () => n.rows.map((F) => D(F)).filter((F) => F !== null)
    ), te = $(
      () => ae.value.length > 0 && ae.value.every((F) => n.selected?.has(F))
    ), J = $(
      () => !te.value && ae.value.some((F) => n.selected?.has(F))
    );
    function W(F) {
      return F.sortKey ?? F.key;
    }
    function M(F) {
      return n.sort === W(F);
    }
    async function N(F, E, X) {
      try {
        await navigator.clipboard.writeText(String(X)), B.value = `${F}-${E.key}`, setTimeout(() => B.value = null, 1200);
      } catch {
      }
    }
    const L = $(
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
      class: z(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      l("table", In, [
        l("thead", Fn, [
          l("tr", Nn, [
            e.reordering ? (t(), a("th", Rn)) : y("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Un, [
              l("input", {
                id: `${b(P)}-page`,
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
            (t(!0), a(_, null, V(R.value, (X) => (t(), a("th", {
              key: X.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              X.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ue) => c("sort", W(X))
              }, [
                U(f(X.label) + " ", 1),
                M(X) ? (t(), a("span", Kn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Gn, "↕"))
              ], 8, qn)) : (t(), a("span", Wn, f(X.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), a("th", Zn, [...E[2] || (E[2] = [
              l("span", { class: "sr-only" }, "Actions", -1)
            ])])) : y("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", Jn, [
          (t(), a(_, null, V(6, (X) => l("tr", {
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
            (t(!0), a(_, null, V(R.value, (ue) => (t(), a("td", {
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
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(_, null, V(e.rows, (X, ue) => (t(), a(_, {
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
                  onClick: (re) => h(r(X))
                }, [
                  l("span", nl, f(m(r(X)) ? "▸" : "▾"), 1),
                  U(" " + f(i(X)), 1)
                ], 8, al)) : (t(), a("span", ll, f(i(X)), 1))
              ], 8, tl)
            ])) : y("", !0),
            p(ue) ? (t(), a("tr", {
              key: 1,
              class: z(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                ee(X) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                x.value === ue ? "opacity-40" : "",
                k(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (re) => w(ue, re),
              onDragover: (re) => g(ue, re),
              onDrop: me((re) => v(ue), ["prevent"]),
              onDragend: S,
              onContextmenu: (re) => c("row-contextmenu", X, re),
              onClick: (re) => C(X, re)
            }, [
              e.reordering ? (t(), a("td", sl, [...E[3] || (E[3] = [
                Ct('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-bbbbb352><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-bbbbb352><circle cx="9" cy="6" r="1.5" data-v-bbbbb352></circle><circle cx="15" cy="6" r="1.5" data-v-bbbbb352></circle><circle cx="9" cy="12" r="1.5" data-v-bbbbb352></circle><circle cx="15" cy="12" r="1.5" data-v-bbbbb352></circle><circle cx="9" cy="18" r="1.5" data-v-bbbbb352></circle><circle cx="15" cy="18" r="1.5" data-v-bbbbb352></circle></svg></span>', 1)
              ])])) : y("", !0),
              e.selectable && !e.reordering ? (t(), a("td", rl, [
                l("input", {
                  id: `${b(P)}-row-${D(X) ?? ue}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: D(X) ?? void 0,
                  checked: ee(X),
                  disabled: D(X) === null,
                  "aria-label": D(X) === null ? "This row has no id and cannot be selected" : `Select row ${D(X)}`,
                  onClick: me((re) => Z(X, re), ["stop"])
                }, null, 8, il)
              ])) : y("", !0),
              (t(!0), a(_, null, V(R.value, (re) => (t(), a("td", {
                key: re.key,
                class: z(["px-3 py-2 whitespace-nowrap", re.cellClass])
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
                      onClick: (et) => N(String(X[e.rowKey]), re, X[re.key])
                    }, [
                      l("span", cl, f(B.value === `${X[e.rowKey]}-${re.key}` ? "✓" : "⧉"), 1)
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
            (t(!0), a(_, null, V(e.columns, (X) => (t(), a(_, {
              key: `s-${X.key}`
            }, [
              e.hidden?.has(X.key) ? y("", !0) : (t(), a("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", X.cellClass])
              }, [
                Y(X.key) ? (t(), a(_, { key: 0 }, [
                  l("span", gl, f(Y(X.key).label), 1),
                  l("span", hl, f(le(X.key)), 1)
                ], 64)) : y("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), a("td", bl)) : y("", !0)
          ])
        ])) : y("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(Rt, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, ht({ _: 2 }, [
        F.$slots["clear-filters"] ? {
          name: "actions",
          fn: j(() => [
            q(F.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(Rt, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, ht({ _: 2 }, [
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
}), zt = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of o)
    n[r] = s;
  return n;
}, yl = /* @__PURE__ */ zt(xl, [["__scopeId", "data-v-bbbbb352"]]), kl = ["aria-label"], $l = { class: "border-b px-5 py-4" }, wl = { class: "text-base font-semibold" }, Cl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Sl = { class: "px-5 py-4" }, Ml = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, Ze = /* @__PURE__ */ O({
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
    function h(p) {
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
      const A = x[0], w = x[x.length - 1];
      p.shiftKey && document.activeElement === A ? (p.preventDefault(), w.focus()) : !p.shiftKey && document.activeElement === w && (p.preventDefault(), A.focus());
    }
    return fe(
      () => n.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", h), Ae(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", h), i?.focus(), i = null);
      }
    ), he(() => document.removeEventListener("keydown", h)), (p, x) => (t(), T(Re, { to: "body" }, [
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
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
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
    function h(C) {
      !n.dismissOnPanelClick || C.target?.closest("input, select, textarea, label, [data-keep-open]") || S();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await Ae(), k());
    }
    function x() {
      m = setTimeout(S, 180);
    }
    async function A() {
      u.value = null, r.value = !r.value, r.value && (await Ae(), k());
    }
    async function w(C, B) {
      u.value = { x: C, y: B }, r.value = !0, await Ae(), k();
    }
    function S() {
      r.value = !1, u.value = null;
    }
    function k() {
      const C = s.value, B = i.value;
      if (!C || !B)
        return;
      const P = B.getBoundingClientRect(), R = 8, D = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : C.getBoundingClientRect();
      let ee, H;
      if (n.placement === "bottom")
        ee = D.bottom + n.offset, ee + P.height > window.innerHeight - R && D.top - P.height - n.offset > R && (ee = D.top - P.height - n.offset), H = n.align === "end" && !u.value ? D.right - P.width : D.left;
      else {
        ee = D.top;
        const G = n.placement === "right", Z = D.right + n.offset + P.width < window.innerWidth - R, ae = D.left - n.offset - P.width > R;
        H = (G ? Z || !ae : !ae && Z) ? D.right + n.offset : D.left - n.offset - P.width;
      }
      H = Math.min(Math.max(R, H), window.innerWidth - P.width - R), ee = Math.min(Math.max(R, ee), window.innerHeight - P.height - R), d.value = { top: ee, left: H, minWidth: Math.max(D.width, Bl) };
    }
    function g(C) {
      if (!r.value)
        return;
      const B = C.target;
      s.value?.contains(B) || i.value?.contains(B) || (B instanceof Element ? B : B.parentElement)?.closest("[data-pk-overlay]") || S();
    }
    function v(C) {
      C.key === "Escape" && r.value && (C.stopPropagation(), S());
    }
    function c() {
      if (r.value) {
        if (u.value) {
          S();
          return;
        }
        k();
      }
    }
    return pe(() => {
      document.addEventListener("pointerdown", g), document.addEventListener("keydown", v), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), he(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", g), document.removeEventListener("keydown", v), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), o({ close: S, openAt: w }), (C, B) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: B[2] || (B[2] = (P) => e.hoverable && p()),
      onPointerleave: B[3] || (B[3] = (P) => e.hoverable && x())
    }, [
      l("div", { onClick: A }, [
        q(C.$slots, "trigger", { open: r.value })
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
              onPointerenter: B[0] || (B[0] = (P) => e.hoverable && p()),
              onPointerleave: B[1] || (B[1] = (P) => e.hoverable && x()),
              onClick: h
            }, [
              q(C.$slots, "panel", { close: S })
            ], 38)) : y("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Al = ["disabled"], Pl = { class: "py-0.5" }, _l = ["disabled", "onClick"], zl = {
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
}, Gl = ["disabled"], Y$ = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!1), d = $(() => n.allMatching ? n.total : n.count), u = $(() => d.value !== void 0), m = $(() => u.value && d.value === 0), h = $(() => n.actions.filter((v) => !v.destructive)), p = $(() => n.actions.filter((v) => v.destructive)), x = {
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
    function w(v) {
      if (v.confirmation) {
        s.value = v;
        return;
      }
      r("run", v.key);
    }
    function S() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function k() {
      i.value = !1, r("export");
    }
    const g = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), a(_, null, [
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
          l("div", Pl, [
            (t(!0), a(_, null, V(h.value, (C) => (t(), a("button", {
              key: C.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", A(C)]),
              disabled: e.busy,
              onClick: (B) => w(C)
            }, [
              (t(), a("svg", zl, [
                l("path", {
                  d: b(de)(C.icon)
                }, null, 8, Ol)
              ])),
              U(" " + f(C.label), 1)
            ], 10, _l))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (C) => i.value = !0)
            }, [
              (t(), a("svg", Ll, [
                l("path", {
                  d: b(de)("download")
                }, null, 8, Vl)
              ])),
              c[6] || (c[6] = U(" Export CSV ", -1))
            ], 8, jl)) : y("", !0),
            p.value.length ? (t(), a("div", Tl, [
              (t(!0), a(_, null, V(p.value, (C) => (t(), a("button", {
                key: C.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (B) => w(C)
              }, [
                (t(), a("svg", El, [
                  l("path", {
                    d: b(de)(C.icon ?? "trash")
                  }, null, 8, Il)
                ])),
                U(" " + f(C.label), 1)
              ], 8, Dl))), 128))
            ])) : y("", !0)
          ])
        ]),
        _: 1
      }),
      I(Ze, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: c[2] || (c[2] = (C) => s.value = null)
      }, {
        footer: j(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[1] || (c[1] = (C) => s.value = null)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: z([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || m.value,
            onClick: S
          }, f(s.value?.label), 11, Ul)
        ]),
        default: j(() => [
          l("p", Fl, [
            c[7] || (c[7] = U(" This will affect ", -1)),
            l("span", Nl, [
              u.value ? (t(), a(_, { key: 1 }, [
                U(f(g(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(_, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[8] || (c[8] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Rl, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : y("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      I(Ze, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: c[4] || (c[4] = (C) => i.value = !1)
      }, {
        footer: j(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[3] || (c[3] = (C) => i.value = !1)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || m.value,
            onClick: k
          }, " Export CSV ", 8, Gl)
        ]),
        default: j(() => [
          l("p", Hl, [
            c[9] || (c[9] = U(" This will export ", -1)),
            l("span", ql, [
              u.value ? (t(), a(_, { key: 1 }, [
                U(f(g(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(_, { key: 0 }, [
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
}), Wl = { class: "bg-card overflow-hidden rounded-lg border" }, Zl = { class: "pk-scroll w-full overflow-x-auto" }, Jl = { class: "w-full border-collapse text-sm" }, Yl = { class: "bg-muted/40" }, Xl = { class: "divide-y" }, Ql = { key: 0 }, eo = ["colspan"], to = { key: 1 }, ao = ["colspan"], no = ["href"], lo = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, oo = ["disabled"], so = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, ro = ["href"], X$ = /* @__PURE__ */ O({
  __name: "RelationPanel",
  props: {
    columns: {},
    rows: {},
    loading: { type: Boolean, default: !1 },
    nextCursor: { default: null },
    capped: { type: Boolean, default: !1 },
    loaded: { type: Boolean, default: !1 },
    emptyText: { default: "Nothing here yet." },
    indexHref: { default: null },
    recordBase: { default: null }
  },
  emits: ["load"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.columns.filter((d) => d.type !== "image"));
    function i(d, u) {
      return u == null || u === "" ? "-" : d.type === "date" || d.type === "datetime" ? new Date(String(u)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...d.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof u == "number" ? new Intl.NumberFormat().format(u) : String(u);
    }
    return (d, u) => (t(), a("div", Wl, [
      l("div", Zl, [
        l("table", Jl, [
          l("thead", Yl, [
            l("tr", null, [
              (t(!0), a(_, null, V(s.value, (m) => (t(), a("th", {
                key: m.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, f(m.label), 1))), 128))
            ])
          ]),
          l("tbody", Xl, [
            e.loading && e.rows.length === 0 ? (t(), a("tr", Ql, [
              l("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, eo)
            ])) : e.loaded && e.rows.length === 0 ? (t(), a("tr", to, [
              l("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, f(e.emptyText), 9, ao)
            ])) : y("", !0),
            (t(!0), a(_, null, V(e.rows, (m, h) => (t(), a("tr", {
              key: m.id ?? h,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), a(_, null, V(s.value, (p) => (t(), a("td", {
                key: p.key,
                class: z(["px-3 py-2 whitespace-nowrap", [
                  p.mono ? "font-mono text-xs" : "",
                  p.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                q(d.$slots, `cell:${p.key}`, {
                  row: m,
                  value: m[p.key],
                  column: p
                }, () => [
                  e.recordBase && m.id != null && p === s.value[0] ? (t(), a("a", {
                    key: 0,
                    href: `${e.recordBase}/${m.id}`,
                    class: "text-foreground underline-offset-2 hover:underline"
                  }, f(i(p, m[p.key])), 9, no)) : (t(), a(_, { key: 1 }, [
                    U(f(i(p, m[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), a("div", lo, [
        l("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: u[0] || (u[0] = (m) => r("load", e.nextCursor))
        }, f(e.loading ? "Loading…" : "Load more"), 9, oo)
      ])) : e.capped ? (t(), a("p", so, [
        U(" Showing the first " + f(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), a("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, ro)) : (t(), a(_, { key: 1 }, [
          U("Open the full list to search or filter the rest.")
        ], 64))
      ])) : y("", !0)
    ]));
  }
}), io = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", uo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, co = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Ke(e = {}) {
  const o = e.variant ?? "default", n = e.size ?? "default";
  return [io, uo[o], co[n], e.class].filter(Boolean).join(" ");
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
      () => Ke({ variant: o.variant, size: o.size, class: o.class })
    ), r = $(() => o.as === "button" ? o.type : void 0);
    return (s, i) => (t(), T(xe(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: z(n.value)
    }, {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), fo = { class: "flex items-center gap-2 overflow-x-auto" }, mo = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, po = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vo = { class: "flex flex-col" }, go = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, ho = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, bo = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, xo = /* @__PURE__ */ O({
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
    return (m, h) => (t(), a("ol", fo, [
      (t(!0), a(_, null, V(e.steps, (p, x) => (t(), a("li", {
        key: x,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(xe(e.interactive ? "button" : "div"), oe({
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
              class: z(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(x)])
            }, [
              u(x) ? (t(), a("svg", mo, [...h[0] || (h[0] = [
                l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(x) ? (t(), a("svg", po, [...h[1] || (h[1] = [
                l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(_, { key: 2 }, [
                U(f(x + 1), 1)
              ], 64))
            ], 2),
            l("span", vo, [
              l("span", null, f(p.label), 1),
              p.description ? (t(), a("span", go, f(p.description), 1)) : y("", !0)
            ]),
            e.hasError(x) ? (t(), a("span", ho)) : y("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        x < e.steps.length - 1 ? (t(), a("span", bo)) : y("", !0)
      ]))), 128))
    ]));
  }
}), Ye = /* @__PURE__ */ new Map();
function Me(e, o) {
  Ye.set(e, o);
}
function yo(e) {
  return Ye.get(e);
}
function Q$(e) {
  return Ye.has(e);
}
function ew() {
  return [...Ye.keys()].sort();
}
function tw() {
  Ye.clear();
}
class ko extends Error {
  fieldErrors;
  constructor(o, n = {}) {
    super(o), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function aw(e) {
  if (!e || typeof e != "object")
    return {};
  const o = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (o[n] = s);
  }
  return o;
}
function $o(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create option";
}
function wo(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create new";
}
const Co = ["aria-expanded"], So = ["aria-label", "onClick"], Mo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Bo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Ao = {
  key: 0,
  class: "border-b p-1"
}, Po = ["placeholder"], _o = { class: "max-h-60 overflow-y-auto p-1" }, zo = ["aria-selected", "onMouseenter", "onClick"], Oo = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Ot = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(null), d = K(null), u = K(!1), m = K(""), h = K(0), p = K({ top: 0, left: 0, width: 0 }), x = $(
      () => n.modelValue.map(
        (H) => n.options.find((G) => G.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), A = $(() => n.searchable ?? n.options.length > 6), w = $(() => {
      const H = new Set(n.modelValue), G = m.value.trim().toLowerCase();
      return n.options.filter((Z) => !H.has(Z.value)).filter((Z) => G ? Z.label.toLowerCase().includes(G) : !0);
    }), S = $(() => n.max !== null && n.modelValue.length >= n.max);
    function k() {
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
      n.disabled || u.value || (u.value = !0, m.value = "", h.value = 0, await Ae(), k(), d.value?.focus());
    }
    function v() {
      u.value = !1, m.value = "";
    }
    function c() {
      u.value ? v() : g();
    }
    function C(H) {
      S.value || (r("update:modelValue", [...n.modelValue, H.value]), m.value = "", h.value = 0, Ae(() => {
        k(), d.value?.focus();
      }));
    }
    function B(H) {
      r(
        "update:modelValue",
        n.modelValue.filter((G) => G !== H)
      ), Ae(k);
    }
    function P() {
      r("update:modelValue", []), Ae(k);
    }
    function R(H) {
      if (!n.disabled) {
        if (H.key === "Escape" && u.value) {
          H.stopPropagation(), v();
          return;
        }
        if (H.key === "Backspace" && m.value === "" && n.modelValue.length > 0) {
          B(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), g();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), h.value = Math.min(h.value + 1, w.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), h.value = Math.max(h.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const G = w.value[h.value];
            G && C(G);
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
      u.value && k();
    }
    return fe(w, (H) => {
      h.value > H.length - 1 && (h.value = Math.max(0, H.length - 1));
    }), pe(() => {
      document.addEventListener("pointerdown", D), window.addEventListener("scroll", ee, !0), window.addEventListener("resize", ee);
    }), he(() => {
      document.removeEventListener("pointerdown", D), window.removeEventListener("scroll", ee, !0), window.removeEventListener("resize", ee);
    }), (H, G) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: R
    }, [
      l("div", {
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
        (t(!0), a(_, null, V(x.value, (Z) => (t(), a("span", {
          key: Z.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          U(f(Z.label) + " ", 1),
          l("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${Z.label}`,
            onClick: me((ae) => B(Z.value), ["stop"])
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
          ])], 8, So)
        ]))), 128)),
        x.value.length === 0 ? (t(), a("span", Mo, f(e.placeholder), 1)) : y("", !0),
        l("span", Bo, [
          x.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: me(P, ["stop"])
          }, " Clear ")) : y("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...G[2] || (G[2] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Co),
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
              A.value ? (t(), a("div", Ao, [
                ce(l("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": G[0] || (G[0] = (Z) => m.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: R
                }, null, 40, Po), [
                  [ye, m.value]
                ])
              ])) : y("", !0),
              l("div", _o, [
                (t(!0), a(_, null, V(w.value, (Z, ae) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ae === h.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ae === h.value,
                  onMouseenter: (te) => h.value = ae,
                  onClick: (te) => C(Z)
                }, f(Z.label), 43, zo))), 128)),
                w.value.length === 0 ? (t(), a("p", Oo, [
                  S.value ? (t(), a(_, { key: 0 }, [
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
}), jo = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Lo = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(Ze, {
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
          e.generalError ? (t(), a("p", jo, f(e.generalError), 1)) : y("", !0),
          (t(!0), a(_, null, V(e.fields, (m) => (t(), T(Ne, {
            key: m.key,
            field: m,
            value: s.value[m.key],
            error: e.errors[m.key],
            processing: e.processing,
            onChange: (h) => s.value[m.key] = h
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
});
function Q(...e) {
  return On(zn(e));
}
function nw(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Vo = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Ga), oe({ "data-slot": "checkbox" }, b(i), {
      class: b(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j((m) => [
        I(b(Wa), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            q(d.$slots, "default", we(Oe(m)), () => [
              I(b(Qt), { class: "size-3.5" })
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
    return (i, d) => (t(), T(b(Za), oe({ "data-slot": "switch" }, b(s), {
      class: b(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j(() => [
        I(b(Ja), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), To = ["accept", "disabled"], Do = { class: "text-sm font-medium" }, Eo = { key: 0 }, Io = { key: 1 }, Fo = { class: "text-muted-foreground text-xs" }, No = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Ro = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Uo = ["src"], Ho = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, qo = { class: "min-w-0 flex-1" }, Ko = { class: "block truncate text-sm font-medium" }, Go = { class: "text-muted-foreground text-xs" }, Wo = ["href"], Zo = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, da = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!1), d = K(null), u = K(null), m = K(null), h = $(() => n.accept.map((C) => `.${C}`).join(",")), p = $(() => m.value ?? n.modelValue?.url ?? null), x = $(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${A(n.maxKilobytes * 1024)}`);
    function A(C) {
      if (!C)
        return "";
      const B = ["B", "KB", "MB", "GB"];
      let P = C, R = 0;
      for (; P >= 1024 && R < B.length - 1; )
        P /= 1024, R++;
      return `${P.toFixed(P < 10 && R > 0 ? 1 : 0)} ${B[R]}`;
    }
    function w(C) {
      return C.split(".").pop()?.toLowerCase() ?? "";
    }
    function S(C) {
      return n.accept.length && !n.accept.includes(w(C.name)) ? `${w(C.name).toUpperCase() || "That"} files are not accepted here.` : C.size > n.maxKilobytes * 1024 ? `That file is ${A(C.size)}; the limit is ${A(n.maxKilobytes * 1024)}.` : null;
    }
    async function k(C) {
      const B = C?.[0];
      if (!(!B || n.disabled) && (u.value = S(B), !u.value)) {
        g(), n.image && B.type.startsWith("image/") && (m.value = URL.createObjectURL(B)), d.value = 0;
        try {
          const P = await n.upload(B, (R) => {
            d.value = R;
          });
          r("update:modelValue", P);
        } catch (P) {
          u.value = P instanceof Error ? P.message : "The upload failed.", g();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function g() {
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function v() {
      const C = n.modelValue;
      g(), u.value = null, r("update:modelValue", null), C && !C.url && n.discard && await n.discard(C.value).catch(() => {
      });
    }
    function c(C) {
      i.value = !1, k(C.dataTransfer?.files ?? null);
    }
    return (C, B) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", Ro, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Uo)) : (t(), a("span", Ho, f(w(e.modelValue.name) || "file"), 1)),
        l("span", qo, [
          l("span", Ko, f(e.modelValue.name), 1),
          l("span", Go, [
            U(f(A(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(_, { key: 0 }, [
              B[4] || (B[4] = U(" · ", -1)),
              l("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Wo)
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
        }, [...B[5] || (B[5] = [
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
        class: z(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: B[1] || (B[1] = me((P) => i.value = !0, ["prevent"])),
        onDragleave: B[2] || (B[2] = me((P) => i.value = !1, ["prevent"])),
        onDrop: me(c, ["prevent"])
      }, [
        l("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: h.value,
          disabled: e.disabled,
          onChange: B[0] || (B[0] = (P) => k(P.target.files))
        }, null, 40, To),
        B[3] || (B[3] = l("svg", {
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
        l("span", Do, [
          d.value === null ? (t(), a("span", Eo, "Drop a file or click to choose")) : (t(), a("span", Io, "Uploading…"))
        ]),
        l("span", Fo, f(x.value), 1),
        d.value !== null ? (t(), a("span", No, [
          l("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${d.value}%` })
          }, null, 4)
        ])) : y("", !0)
      ], 34)),
      u.value ? (t(), a("p", Zo, f(u.value), 1)) : y("", !0)
    ]));
  }
}), Jo = { class: "flex flex-col gap-2" }, Yo = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Xo = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Qo = { class: "flex flex-col gap-1" }, es = ["onUpdate:modelValue", "disabled", "aria-label"], ts = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, as = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, ns = ["onUpdate:modelValue", "disabled", "aria-label"], ls = ["disabled", "aria-label", "onClick"], os = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ss = { class: "flex items-center gap-3" }, rs = ["disabled"], is = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, ds = /* @__PURE__ */ O({
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
    function u(k) {
      return k ? Object.entries(k).map(([g, v]) => ({
        uid: i++,
        key: g,
        value: v ?? ""
      })) : [];
    }
    fe(
      () => n.modelValue,
      (k) => {
        JSON.stringify(k ?? null) !== JSON.stringify(m()) && (d.value = u(k));
      }
    );
    function m() {
      const k = {};
      for (const g of d.value) {
        const v = g.key.trim();
        v !== "" && (k[v] = g.value);
      }
      return Object.keys(k).length ? k : null;
    }
    function h() {
      r("update:modelValue", m());
    }
    const p = $(() => {
      const k = /* @__PURE__ */ new Map();
      for (const g of d.value) {
        const v = g.key.trim();
        v !== "" && k.set(v, (k.get(v) ?? 0) + 1);
      }
      return new Set([...k.entries()].filter(([, g]) => g > 1).map(([g]) => g));
    }), x = $(
      () => new Set(
        d.value.map((k) => k.key.trim()).filter((k) => k !== "" && !s.test(k))
      )
    ), A = $(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function w() {
      A.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function S(k) {
      d.value = d.value.filter((g) => g.uid !== k), h();
    }
    return (k, g) => (t(), a("div", Jo, [
      d.value.length ? (t(), a("div", Yo, [
        l("div", Xo, [
          l("span", null, f(e.keyLabel), 1),
          l("span", null, f(e.valueLabel), 1),
          g[0] || (g[0] = l("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(_, null, V(d.value, (v) => (t(), a("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          l("div", Qo, [
            ce(l("input", {
              "onUpdate:modelValue": (c) => v.key = c,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || x.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: h
            }, null, 42, es), [
              [ye, v.key]
            ]),
            x.value.has(v.key.trim()) ? (t(), a("p", ts, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), a("p", as, " Used twice - only the last value will be saved. ")) : y("", !0)
          ]),
          ce(l("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: h
          }, null, 40, ns), [
            [ye, v.value]
          ]),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (c) => S(v.uid)
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
          ])], 8, ls)
        ]))), 128))
      ])) : (t(), a("p", os, " Nothing here yet. ")),
      l("div", ss, [
        l("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || A.value,
          onClick: w
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
        ], 8, rs),
        e.maxPairs !== null ? (t(), a("p", is, f(d.value.length) + " of " + f(e.maxPairs), 1)) : y("", !0)
      ])
    ]));
  }
}), us = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, cs = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, fs = ["disabled", "title", "aria-label", "onClick"], ms = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ps = ["d"], vs = ["disabled"], gs = ["contenteditable", "data-placeholder"], hs = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, bs = /* @__PURE__ */ O({
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
    ], u = $(() => d.filter((S) => n.toolbar.includes(S.id))), m = $(() => n.toolbar.includes("link")), h = K(0);
    function p() {
      const S = s.value?.innerHTML ?? "", k = (s.value?.innerText ?? "").trim();
      h.value = k.length;
      const g = k === "" ? null : S;
      i = g, r("update:modelValue", g);
    }
    function x(S) {
      n.disabled || (s.value?.focus(), document.execCommand(S.command, !1, S.argument), p());
    }
    function A() {
      if (n.disabled)
        return;
      const S = window.prompt("Link address");
      S && (s.value?.focus(), document.execCommand("createLink", !1, S), p());
    }
    function w(S) {
      S.preventDefault();
      const k = S.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, k), p();
    }
    return pe(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", h.value = s.value.innerText.trim().length);
    }), fe(
      () => n.modelValue,
      (S) => {
        S !== i && s.value && (s.value.innerHTML = S ?? "", h.value = s.value.innerText.trim().length);
      }
    ), (S, k) => (t(), a("div", us, [
      l("div", cs, [
        (t(!0), a(_, null, V(u.value, (g) => (t(), a("button", {
          key: g.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: g.label,
          "aria-label": g.label,
          onMousedown: k[0] || (k[0] = me(() => {
          }, ["prevent"])),
          onClick: (v) => x(g)
        }, [
          (t(), a("svg", ms, [
            l("path", {
              d: g.path
            }, null, 8, ps)
          ]))
        ], 40, fs))), 128)),
        m.value ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: k[1] || (k[1] = me(() => {
          }, ["prevent"])),
          onClick: A
        }, [...k[2] || (k[2] = [
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
        ])], 40, vs)) : y("", !0)
      ]),
      l("div", {
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
      }, null, 42, gs),
      e.maxLength !== null ? (t(), a("div", hs, f(h.value) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), xs = /* @__PURE__ */ zt(bs, [["__scopeId", "data-v-32c63bc7"]]), ys = {
  key: 1,
  class: "flex flex-col gap-2"
}, ks = { class: "flex items-center justify-between gap-2" }, $s = ["for"], ws = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Cs = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, Ss = ["aria-label", "disabled"], Ms = {
  key: 7,
  class: "flex flex-col gap-2"
}, Bs = ["id", "value", "disabled"], As = ["value"], Ps = {
  key: 0,
  class: "relative"
}, _s = ["disabled"], zs = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Os = { class: "max-h-56 overflow-y-auto p-1" }, js = ["onClick"], Ls = {
  key: 8,
  class: "relative"
}, Vs = ["disabled", "aria-invalid"], Ts = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ds = { class: "max-h-56 overflow-y-auto p-1" }, Es = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Is = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Fs = ["onClick"], Ns = ["id", "value", "disabled", "aria-invalid"], Rs = ["value"], Us = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Hs = { class: "text-muted-foreground" }, qs = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ks = { class: "text-muted-foreground" }, Gs = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Ws = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Zs = ["aria-label", "disabled"], Js = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Ys = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Xs = ["aria-label", "disabled"], Qs = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], er = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, tr = ["aria-label", "disabled"], ar = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], nr = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, lr = ["aria-label", "disabled"], or = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, sr = ["disabled", "aria-pressed", "onClick"], rr = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, ir = ["title", "disabled", "onClick"], dr = ["href"], ur = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, cr = {
  key: 20,
  class: "text-muted-foreground text-xs leading-snug"
}, fr = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", mr = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Ne = /* @__PURE__ */ O({
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
    const n = Nt(() => import("./PkRepeater-J84jGe3T.js")), r = Nt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = o, d = K(!1), u = K(""), m = K([]), h = K(!1), p = K(null);
    let x;
    fe(u, (le) => {
      s.searchOptions && (clearTimeout(x), h.value = !0, x = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(le);
        } catch {
        } finally {
          h.value = !1;
        }
      }, 200));
    });
    async function A() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, m.value.length === 0 && s.searchOptions)) {
        h.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          h.value = !1;
        }
      }
    }
    function w(le) {
      p.value = le.label, i("change", le.value), d.value = !1, u.value = "";
    }
    function S() {
      p.value = null, i("change", null);
    }
    const k = at("panelPicker", null), g = at("panelCreateOption", null), v = K(!1), c = K(!1), C = K({}), B = K(null), P = $(() => $o(s.field)), R = $(() => wo(s.field));
    function D() {
      C.value = {}, B.value = null, v.value = !0, d.value = !1;
    }
    function ee() {
      c.value || (v.value = !1, C.value = {}, B.value = null);
    }
    async function H(le) {
      if (g) {
        c.value = !0, C.value = {}, B.value = null;
        try {
          const F = await g.run(s.field.key, { ...le });
          w(F), v.value = !1;
        } catch (F) {
          F instanceof ko ? (C.value = F.fieldErrors, B.value = Object.keys(F.fieldErrors).length === 0 ? F.message : null) : B.value = F instanceof Error ? F.message : "Could not create that option.";
        } finally {
          c.value = !1;
        }
      }
    }
    const G = $(() => {
      if (!s.field.tableSelect || !k?.base)
        return;
      const le = k.returnUrl || "/";
      return `${k.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
    }), Z = $(() => s.field.morphTo ?? []), ae = $(() => {
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
    he(() => clearTimeout(x));
    const M = $(() => yo(s.field.type)), N = $(
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
    return (le, F) => (t(), a(_, null, [
      e.field.type === "hidden" ? (t(), a(_, { key: 0 }, [], 64)) : (t(), a("div", ys, [
        l("div", ks, [
          l("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            U(f(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", ws, "*")) : y("", !0)
          ], 10, $s),
          e.field.hint ? (t(), a("span", Cs, [
            U(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: F[0] || (F[0] = (E) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, Ss)) : y("", !0)
          ])) : y("", !0)
        ]),
        M.value ? (t(), T(xe(M.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[1] || (F[1] = (E) => i("change", E))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(da, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": F[2] || (F[2] = (E) => i("change", E))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(b(n), {
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
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(b(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": F[4] || (F[4] = (E) => i("change", E))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(xs, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[5] || (F[5] = (E) => i("change", E))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(ds, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[6] || (F[6] = (E) => i("change", E))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Ot, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": F[7] || (F[7] = (E) => i("change", E))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : Z.value.length ? (t(), a("div", Ms, [
          l("select", {
            id: `f-${e.field.key}-type`,
            value: ae.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            onChange: F[8] || (F[8] = (E) => te(E.target.value))
          }, [
            F[24] || (F[24] = l("option", { value: "" }, "Type", -1)),
            (t(!0), a(_, null, V(Z.value, (E) => (t(), a("option", {
              key: E.value,
              value: E.value
            }, f(E.label), 9, As))), 128))
          ], 40, Bs),
          ae.value.type && e.searchOptions ? (t(), a("div", Ps, [
            l("button", {
              type: "button",
              class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              disabled: e.field.disabled || e.processing,
              onClick: A
            }, [
              l("span", {
                class: z(p.value || ae.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (ae.value.id ? String(ae.value.id) : "Search…")), 3)
            ], 8, _s),
            d.value ? (t(), a("div", zs, [
              ce(l("input", {
                "onUpdate:modelValue": F[9] || (F[9] = (E) => u.value = E),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ye, u.value]
              ]),
              l("div", Os, [
                (t(!0), a(_, null, V(m.value, (E) => (t(), a("button", {
                  key: String(E.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (X) => W(E)
                }, f(E.label), 9, js))), 128))
              ])
            ])) : y("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: F[10] || (F[10] = (E) => d.value = !1)
            })) : y("", !0)
          ])) : y("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", Ls, [
          l("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: A
          }, [
            l("span", {
              class: z(p.value || e.value ? "" : "text-muted-foreground")
            }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: me(S, ["stop"])
            }, " ✕ ")) : y("", !0)
          ], 8, Vs),
          d.value ? (t(), a("div", Ts, [
            ce(l("input", {
              "onUpdate:modelValue": F[11] || (F[11] = (E) => u.value = E),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ye, u.value]
            ]),
            l("div", Ds, [
              h.value ? (t(), a("p", Es, " Searching… ")) : m.value.length === 0 ? (t(), a("p", Is, " No matches ")) : y("", !0),
              (t(!0), a(_, null, V(m.value, (E) => (t(), a("button", {
                key: String(E.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (X) => w(E)
              }, f(E.label), 9, Fs))), 128)),
              e.field.createOption && b(g) ? (t(), a("button", {
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
          (t(!0), a(_, null, V(e.options, (E) => (t(), a("option", {
            key: String(E.value),
            value: E.value
          }, f(E.label), 9, Rs))), 128))
        ], 40, Ns)) : e.field.type === "toggle" ? (t(), a("label", Us, [
          I(b(Ie), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": F[14] || (F[14] = (E) => i("change", E))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Hs, f(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", qs, [
          I(b(Vo), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": F[15] || (F[15] = (E) => i("change", E === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Ks, f(e.field.help ?? e.field.label), 1)
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
        }, null, 40, Gs)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: z(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Ws, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: F[17] || (F[17] = (E) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Zs)) : y("", !0),
          l("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: F[18] || (F[18] = (E) => i("change", E.target.value))
          }, null, 40, Js),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Ys, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: F[19] || (F[19] = (E) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Xs)) : y("", !0)
        ], 2)) : N.value ? (t(), a("div", {
          key: 15,
          class: z(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", er, f(e.field.prefix ?? e.field.prefixIcon), 1)) : y("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: F[21] || (F[21] = (E) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, tr)) : y("", !0),
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
            class: z(mr),
            onInput: F[22] || (F[22] = (E) => i("change", E.target.value))
          }, null, 40, ar),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", nr, f(e.field.suffix ?? e.field.suffixIcon), 1)) : y("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: F[23] || (F[23] = (E) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, lr)) : y("", !0)
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
          class: z(fr),
          onInput: F[20] || (F[20] = (E) => i("change", E.target.value))
        }, null, 40, Qs)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", or, [
          (t(!0), a(_, null, V(e.field.presets, (E) => (t(), a("button", {
            key: E,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: z([
              "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == E ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == E
            ),
            onClick: (X) => i("change", String(E))
          }, f(E), 11, sr))), 128))
        ])) : y("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", rr, [
          (t(!0), a(_, null, V(e.field.chips, (E, X) => (t(), a("button", {
            key: X,
            type: "button",
            title: E,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (ue) => Y(String(X))
          }, f(X), 9, ir))), 128))
        ])) : y("", !0),
        G.value ? (t(), a("a", {
          key: 18,
          href: G.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, dr)) : y("", !0),
        e.error ? (t(), a("p", ur, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", cr, f(e.field.help), 1)) : y("", !0)
      ])),
      e.field.createOption && b(g) ? (t(), T(Lo, {
        key: 2,
        open: v.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: c.value,
        errors: C.value,
        "general-error": B.value,
        onClose: ee,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : y("", !0)
    ], 64));
  }
}), pr = { class: "text-sm font-semibold" }, vr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, gr = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, hr = { class: "border-b px-4 py-3.5 sm:px-5" }, br = { class: "text-sm font-semibold" }, xr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, yr = {
  key: 4,
  class: "min-w-0 space-y-4"
}, kr = {
  key: 7,
  class: "flex flex-col gap-3"
}, $r = { class: "text-sm font-medium" }, wr = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Cr = {
  key: 0,
  class: "mb-1 font-medium"
}, Sr = ["onClick"], Mr = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Br = { class: "flex items-center justify-between gap-3 border-t p-4" }, Ar = ["disabled"], ua = /* @__PURE__ */ O({
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
    ), m = $(() => n.depth === 0), h = $(() => {
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
    function w(v = 1) {
      return v >= 4 ? "md:col-span-4" : v === 3 ? "md:col-span-3" : v === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function S(v) {
      const c = [], C = (B) => {
        B.component === "field" && B.key && c.push(B.key), B.children?.forEach(C);
      };
      return C(v), c.some((B) => n.errors[B]);
    }
    function k(v) {
      if (v.hidden)
        return !1;
      const c = v.visibleWhen;
      return c ? n.values[c.field] == c.value : !0;
    }
    function g(v) {
      if (n.upload)
        return (c, C) => n.upload(v, c, C);
    }
    return (v, c) => {
      const C = St("SchemaNode", !0);
      return e.node.component === "field" && k(e.node) ? (t(), T(Ne, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (B) => e.searchOptions(e.node.key, B) : void 0,
        upload: g(e.node.key),
        discard: e.discard,
        onChange: c[0] || (c[0] = (B) => r("change", e.node.key, B)),
        onAffixAction: c[1] || (c[1] = (B) => r("affix-action", e.node.key, B))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && k(e.node) ? (t(), a("section", {
        key: 1,
        class: z(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("header", {
          class: z(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: c[2] || (c[2] = (B) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", null, [
            l("h3", pr, f(e.node.label), 1),
            e.node.description ? (t(), a("p", vr, f(e.node.description), 1)) : y("", !0)
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...c[24] || (c[24] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : y("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [x.value, m.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => (t(), T(C, {
            key: P,
            node: B,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: z(B.span && B.span >= 2 ? "sm:col-span-2" : ""),
            onChange: c[3] || (c[3] = (R, D) => r("change", R, D)),
            onAffixAction: c[4] || (c[4] = (R, D) => r("affix-action", R, D))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "card" && k(e.node) ? (t(), a("section", gr, [
        l("header", hr, [
          l("h3", br, f(e.node.title), 1),
          e.node.description ? (t(), a("p", xr, f(e.node.description), 1)) : y("", !0)
        ]),
        l("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", x.value])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => (t(), T(C, {
            key: P,
            node: B,
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
      ])) : e.node.component === "columns" && k(e.node) ? (t(), a("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", A(e.node)])
      }, [
        (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => (t(), T(C, {
          key: P,
          node: B,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: z(B.component === "column" ? w(B.span) : ""),
          onChange: c[7] || (c[7] = (R, D) => r("change", R, D)),
          onAffixAction: c[8] || (c[8] = (R, D) => r("affix-action", R, D))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && k(e.node) ? (t(), a("div", yr, [
        (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => (t(), T(C, {
          key: P,
          node: B,
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
        class: z(["grid grid-cols-1 gap-4", x.value])
      }, [
        (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => (t(), T(C, {
          key: P,
          node: B,
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
        class: z(["flex", h.value])
      }, [
        (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => (t(), T(C, {
          key: P,
          node: B,
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
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", kr, [
        l("legend", $r, f(e.node.label), 1),
        e.node.description ? (t(), a("p", wr, f(e.node.description), 1)) : y("", !0),
        l("div", {
          class: z(["grid grid-cols-1 gap-4", x.value])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => (t(), T(C, {
            key: P,
            node: B,
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
        class: z(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", Cr, f(e.node.title), 1)) : y("", !0),
        l("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 9,
        class: z(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => (t(), a("button", {
            key: P,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === P ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (R) => i.value = P
          }, [
            U(f(B.label) + " ", 1),
            S(B) ? (t(), a("span", Mr)) : y("", !0)
          ], 10, Sr))), 128))
        ], 2),
        (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => ce((t(), a("div", {
          key: P,
          class: z(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(_, null, V(B.children ?? [], (R, D) => (t(), T(C, {
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
          [Ve, i.value === P]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), a("div", {
        key: 10,
        class: z(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        I(xo, {
          class: z(["p-4", m.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (B) => S((e.node.children ?? [])[B]),
          "onUpdate:activeStep": c[19] || (c[19] = (B) => d.value = B)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(_, null, V(e.node.children ?? [], (B, P) => ce((t(), a("div", {
          key: P,
          class: z(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(_, null, V(B.children ?? [], (R, D) => (t(), T(C, {
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
          [Ve, d.value === P]
        ])), 128)),
        l("div", Br, [
          l("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: c[22] || (c[22] = (B) => d.value--)
          }, " Back ", 8, Ar),
          d.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: c[23] || (c[23] = (B) => d.value++)
          }, " Next ")) : y("", !0)
        ])
      ], 2)) : y("", !0);
    };
  }
}), lw = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(Ze, {
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
          (t(!0), a(_, null, V(e.form?.nodes ?? [], (m, h) => (t(), T(ua, {
            key: h,
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
}), Pr = ["title"], _r = ["aria-label"], zr = ["d"], Or = { class: "sr-only" }, jr = /* @__PURE__ */ O({
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
    return (h, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: m.value
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
        "aria-label": m.value
      }, [
        l("path", { d: d.value }, null, 8, zr)
      ], 10, _r)),
      l("span", Or, f(m.value), 1)
    ], 8, Pr));
  }
}), Lr = ["src"], Vr = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Tr = /* @__PURE__ */ O({
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
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = $(() => {
      const d = typeof o.src == "string" ? o.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = $(() => {
      const d = typeof o.fallbackText == "string" ? o.fallbackText.trim() : "";
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
        onError: u[0] || (u[0] = (m) => n.value = !0)
      }, null, 40, Lr)) : e.fallback === "initials" ? (t(), a(_, { key: 1 }, [
        U(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", Vr, [...u[1] || (u[1] = [
        l("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : y("", !0)
    ], 2));
  }
}), Dr = {
  key: 0,
  class: "text-muted-foreground"
}, Er = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Ir = {
  key: 0,
  class: "font-mono text-xs"
}, Fr = {
  key: 1,
  class: "sr-only"
}, Nr = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), a("span", Dr, "-")) : (t(), a("span", Er, [
      l("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", Ir, f(r.value), 1)) : (t(), a("span", Fr, f(r.value), 1))
    ]));
  }
}), Rr = { class: "inline-flex items-center" }, Ur = ["checked", "aria-label"], Hr = { class: "sr-only" }, ow = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("span", Rr, [
      l("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Ur),
      l("span", Hr, f(r.value), 1)
    ]));
  }
}), qr = {
  key: 0,
  class: "text-muted-foreground"
}, Kr = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, sw = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = $(
      () => String(o.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", Kr, f(n.value), 1)) : (t(), a("span", qr, "—"));
  }
}), Gr = { class: "flex items-center gap-2" }, Wr = ["onUpdate:modelValue", "onChange"], Zr = ["value"], Jr = ["onUpdate:modelValue"], Yr = ["value"], Xr = ["onUpdate:modelValue"], Qr = ["onUpdate:modelValue", "multiple"], ei = ["value"], ti = ["onUpdate:modelValue", "type"], ai = ["aria-label", "onClick"], ni = { class: "flex items-center gap-2" }, li = /* @__PURE__ */ O({
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
    const d = (c) => "rules" in c, u = $(() => Object.keys(n.fields));
    function m(c) {
      const C = c ? n.fields[c]?.kind : void 0;
      return C ? n.operators[C] ?? [] : [];
    }
    const h = {
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
    function w(c) {
      i.value.rules.splice(c, 1), p();
    }
    function S(c) {
      c.operator = m(c.field)[0], c.value = void 0, p();
    }
    const k = $(() => n.depth + 1 < n.maxDepth);
    function g() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, C) => {
      const B = St("PkQueryBuilder", !0);
      return t(), a("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        l("div", Gr, [
          ce(l("select", {
            "onUpdate:modelValue": C[0] || (C[0] = (P) => i.value.logic = P),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...C[1] || (C[1] = [
            l("option", { value: "and" }, "Match all", -1),
            l("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ee, i.value.logic]
          ]),
          C[2] || (C[2] = l("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), a(_, null, V(i.value.rules, (P, R) => (t(), a("div", {
          key: R,
          class: "flex items-start gap-2"
        }, [
          d(P) ? (t(), T(B, {
            key: 0,
            modelValue: i.value.rules[R],
            "onUpdate:modelValue": [(D) => i.value.rules[R] = D, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(_, { key: 1 }, [
            ce(l("select", {
              "onUpdate:modelValue": (D) => P.field = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (D) => S(P)
            }, [
              (t(!0), a(_, null, V(u.value, (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(e.fields[D].label), 9, Zr))), 128))
            ], 40, Wr), [
              [Ee, P.field]
            ]),
            ce(l("select", {
              "onUpdate:modelValue": (D) => P.operator = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(_, null, V(m(P.field), (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(h[D] ?? D), 9, Yr))), 128))
            ], 40, Jr), [
              [Ee, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? ce((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (D) => P.value = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...C[3] || (C[3] = [
              l("option", { value: !0 }, "Yes", -1),
              l("option", { value: !1 }, "No", -1)
            ])], 40, Xr)), [
              [Ee, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? ce((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (D) => P.value = D,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(_, null, V(e.fields[P.field].options, (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(D), 9, ei))), 128))
            ], 40, Qr)), [
              [Ee, P.value]
            ]) : ce((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (D) => P.value = D,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, ti)), [
              [Ba, P.value]
            ])
          ], 64)),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(P) ? "group" : "rule"}`,
            onClick: (D) => w(R)
          }, " × ", 8, ai)
        ]))), 128)),
        l("div", ni, [
          I(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: x
          }, {
            default: j(() => [...C[4] || (C[4] = [
              U("Add rule", -1)
            ])]),
            _: 1
          }),
          k.value ? (t(), T(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: A
          }, {
            default: j(() => [...C[5] || (C[5] = [
              U(" Add group ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          e.root ? (t(), a(_, { key: 1 }, [
            C[8] || (C[8] = l("span", { class: "flex-1" }, null, -1)),
            I(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: g
            }, {
              default: j(() => [...C[6] || (C[6] = [
                U(" Clear ", -1)
              ])]),
              _: 1
            }),
            I(se, {
              type: "button",
              size: "sm",
              onClick: v
            }, {
              default: j(() => [...C[7] || (C[7] = [
                U(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : y("", !0)
        ])
      ], 2);
    };
  }
}), oi = {
  key: 0,
  class: "font-mono text-xs"
}, si = {
  key: 1,
  class: "text-muted-foreground"
}, ri = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, rw = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = $(
      () => o.value && typeof o.value == "object" && !Array.isArray(o.value) ? Object.keys(o.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", oi, f(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", si, "—")) : (t(), a("span", ri, f(n.value.length) + " " + f(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), ii = ["aria-checked", "aria-label", "title", "disabled"], di = ["value", "disabled"], ui = ["value"], iw = /* @__PURE__ */ O({
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
    function m(h) {
      const p = h.target.value;
      p !== String(n.value ?? "") && r("change", p);
    }
    return (h, p) => e.type === "toggle" ? (t(), a("button", {
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
      l("span", {
        class: z(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, ii)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = me(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), a(_, null, V(e.options, (x, A) => (t(), a("option", {
        key: A,
        value: A
      }, f(x), 9, ui))), 128))
    ], 40, di));
  }
}), ci = ["data-variant"], fi = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ge = /* @__PURE__ */ O({
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
      () => [fi, n[o.variant], o.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, ci));
  }
}), jt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function mi(e) {
  return e != null && e !== "";
}
function pi(e) {
  const o = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" ")) : (e.key === "name" && o.push("font-medium"), e.mono && o.push("font-mono text-xs"), e.muted && o.push("text-muted-foreground"), e.transform === "upper" && o.push("uppercase"), e.transform === "lower" && o.push("lowercase"), e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" "));
}
function dw(e) {
  const o = $(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: pi(s)
    }))
  ), n = $(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = n.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), m = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return jt[m] ?? "outline";
  }
  return { columns: o, byKey: n, badgeVariant: r };
}
const vi = ["disabled", "aria-label", "aria-busy"], gi = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hi = ["d"], bi = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, xi = ["disabled", "onClick"], yi = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, ki = ["d"], $i = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, uw = /* @__PURE__ */ O({
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
      return jt[A] ?? "outline";
    }
    function h(x) {
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
      e.disabled ? (t(), T(Ge, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          U(f(h(i.value) || "-"), 1)
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
                U(f(h(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", gi, [
              l("path", {
                d: b(de)("chevron-down")
              }, null, 8, hi)
            ]))
          ], 8, vi)
        ]),
        panel: j(({ close: w }) => [
          l("div", bi, f(d.value), 1),
          (t(!0), a(_, null, V(e.options, (S, k) => (t(), a("button", {
            key: k,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (g) => p(String(k), w)
          }, [
            I(Ge, {
              variant: m(k),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(S), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(k) === i.value ? (t(), a("svg", yi, [
              l("path", {
                d: b(de)("check")
              }, null, 8, ki)
            ])) : (t(), a("span", $i))
          ], 8, xi))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), wi = { class: "flex items-center justify-end" }, Ci = ["aria-label"], Si = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Mi = ["d"], Bi = ["href"], Ai = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Pi = ["d"], _i = ["disabled", "onClick"], zi = ["d"], Oi = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, ji = ["disabled", "onClick"], Li = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vi = ["d"], cw = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(null), d = K(null), u = $(() => r.groups.flatMap((g) => g.actions)), m = $(() => u.value.filter((g) => !g.destructive)), h = $(() => u.value.filter((g) => g.destructive)), p = {
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
    function w(g) {
      s("run", g);
    }
    function S(g) {
      A.value || (g.preventDefault(), i.value?.openAt(g.clientX, g.clientY));
    }
    function k(g) {
      if (g.key !== "ArrowDown" && g.key !== "ArrowUp")
        return;
      const v = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      g.preventDefault();
      const c = v.indexOf(document.activeElement), C = g.key === "ArrowDown" ? 1 : -1, B = (c + C + v.length) % v.length;
      v[B]?.focus();
    }
    return o({ openContextMenu: S }), (g, v) => (t(), a("div", wi, [
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
            (t(), a("svg", Si, [
              l("path", {
                d: b(de)("more-vertical")
              }, null, 8, Mi)
            ]))
          ], 8, Ci)
        ]),
        panel: j(() => [
          l("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: k
          }, [
            (t(!0), a(_, null, V(m.value, (c) => (t(), a(_, {
              key: c.key
            }, [
              c.link ? (t(), a("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", x(c)])
              }, [
                (t(), a("svg", Ai, [
                  l("path", {
                    d: b(de)(c.icon)
                  }, null, 8, Pi)
                ])),
                U(" " + f(c.label), 1)
              ], 10, Bi)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", x(c)]),
                disabled: e.busy === c.key,
                onClick: (C) => w(c)
              }, [
                (t(), a("svg", {
                  class: z(["size-4 shrink-0", e.busy === c.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  l("path", {
                    d: b(de)(c.icon)
                  }, null, 8, zi)
                ], 2)),
                U(" " + f(c.label), 1)
              ], 10, _i))
            ], 64))), 128)),
            h.value.length ? (t(), a("div", Oi, [
              (t(!0), a(_, null, V(h.value, (c) => (t(), a("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (C) => w(c)
              }, [
                (t(), a("svg", Li, [
                  l("path", {
                    d: b(de)(c.icon ?? "trash")
                  }, null, 8, Vi)
                ])),
                U(" " + f(c.label), 1)
              ], 8, ji))), 128))
            ])) : y("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), xt = {
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
}, yt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, nt = 12, lt = 20, Ti = [0, 0.25, 0.5, 0.75, 1], Lt = "alxtexhpanel.appearance", Be = {
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
const Di = "alxtexhpanel.appearance.vars";
function kt(e) {
  return e.theme === "dark";
}
const Ht = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function Ei(e) {
  const o = xt[e.primary] ?? xt.slate, n = yt[e.surface] ?? yt.neutral, r = n.chroma, s = n.hue, d = kt(e) ? {
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
function Vt() {
  if (typeof window > "u")
    return { ...Be };
  try {
    const e = localStorage.getItem(Lt);
    if (!e)
      return { ...Be };
    const o = { ...Be, ...JSON.parse(e) };
    o.theme === "system" && (o.theme = Be.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof o.fontSize == "string" && (o.fontSize = n[o.fontSize] ?? Be.fontSize), (typeof o.fontSize != "number" || Number.isNaN(o.fontSize) || o.fontSize < nt || o.fontSize > lt) && (o.fontSize = Be.fontSize), o;
  } catch {
    return { ...Be };
  }
}
function fw(e) {
  const o = Vt(), n = e ? { ...o, ...e } : o;
  if (je.value = n, $t(n), e)
    try {
      localStorage.setItem(Lt, JSON.stringify(n));
    } catch {
    }
}
let ca = null;
function mw(e) {
  ca = e;
}
let fa = {};
function Ii(e) {
  if (fa = e, !(typeof document > "u") && !Vt().primaryChosen)
    for (const [o, n] of Object.entries(e))
      document.documentElement.style.setProperty(o, n);
}
function $t(e) {
  if (typeof document > "u")
    return;
  const o = document.documentElement, n = { ...Ei(e), ...e.primaryChosen ? {} : fa };
  o.classList.toggle("dark", kt(e));
  for (const [r, s] of Object.entries(n))
    o.style.setProperty(r, s);
  o.dataset.sidebar = e.sidebarSide, o.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Di,
      JSON.stringify({ dark: kt(e), theme: e.theme, vars: n })
    );
  } catch {
  }
}
function ma() {
  function e(r) {
    $t(r);
  }
  function o(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    je.value = { ...je.value, ...r, ...s };
    try {
      localStorage.setItem(Lt, JSON.stringify(je.value));
    } catch {
    }
    e(je.value), ca?.({ ...r, ...s });
  }
  function n() {
    o({ ...Be });
  }
  return pe(() => {
    Ut || (Ut = !0, je.value = Vt(), $t(je.value));
  }), {
    appearance: $(() => je.value),
    set: o,
    reset: n,
    PRIMARY_COLORS: xt,
    SURFACE_TINTS: yt,
    FONT_SIZE_MIN: nt,
    FONT_SIZE_MAX: lt,
    RADIUS_OPTIONS: Ti
  };
}
const Fi = { class: "flex items-center justify-between border-b px-4 py-3" }, Ni = { class: "flex items-center gap-2" }, Ri = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Ui = { class: "flex flex-col gap-2" }, Hi = { class: "grid grid-cols-8 gap-2" }, qi = ["title", "aria-label", "aria-pressed", "onClick"], Ki = { class: "flex flex-col gap-2" }, Gi = { class: "grid grid-cols-8 gap-2" }, Wi = ["title", "aria-label", "aria-pressed", "onClick"], Zi = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Ji = { class: "flex flex-col gap-2" }, Yi = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Xi = ["aria-pressed", "aria-label", "onClick"], Qi = { class: "text-sm font-semibold" }, ed = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, td = ["onClick"], ad = { class: "flex flex-col gap-2" }, nd = { class: "flex items-center justify-between" }, ld = { class: "text-muted-foreground text-xs tabular-nums" }, od = { class: "flex items-center gap-2" }, sd = ["disabled"], rd = ["min", "max", "value"], id = ["disabled"], pw = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: o, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = ma(), u = K(!1), m = $(() => o.value.sidebarSide === "right"), h = [
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
    ], w = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], S = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function k(g, v) {
      return `oklch(0.72 ${v * 3} ${g})`;
    }
    return (g, v) => (t(), a(_, null, [
      l("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (c) => u.value = !0)
      }, [...v[7] || (v[7] = [
        Ct('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
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
              class: z(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              l("header", Fi, [
                v[9] || (v[9] = l("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                l("div", Ni, [
                  l("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => b(r) && b(r)(...c))
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
              l("div", Ri, [
                l("section", Ui, [
                  v[11] || (v[11] = l("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  l("div", Hi, [
                    (t(!0), a(_, null, V(b(s), (c, C) => (t(), a("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": b(o).primary === C,
                      onClick: (B) => b(n)({ primary: C })
                    }, [
                      b(o).primary === C ? (t(), a("svg", {
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
                    ], 12, qi))), 128))
                  ])
                ]),
                l("section", Ki, [
                  v[13] || (v[13] = l("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  l("div", Gi, [
                    (t(!0), a(_, null, V(b(i), (c, C) => (t(), a("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: k(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": b(o).surface === C,
                      onClick: (B) => b(n)({ surface: C })
                    }, [
                      b(o).surface === C ? (t(), a("svg", Zi, [...v[12] || (v[12] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : y("", !0)
                    ], 12, Wi))), 128))
                  ])
                ]),
                l("section", Ji, [
                  v[14] || (v[14] = l("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  l("div", Yi, [
                    (t(!0), a(_, null, V(b(d), (c) => (t(), a("button", {
                      key: c,
                      type: "button",
                      class: z([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(o).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": b(o).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (C) => b(n)({ radius: c })
                    }, [
                      l("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      U(" " + f(c), 1)
                    ], 10, Xi))), 128))
                  ])
                ]),
                (t(!0), a(_, null, V([
                  { label: "Color scheme", key: "theme", options: h },
                  { label: "Card style", key: "cardStyle", options: x },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: A },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: S }
                ], (c) => (t(), a("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  l("h3", Qi, f(c.label), 1),
                  l("div", ed, [
                    (t(!0), a(_, null, V(c.options, (C) => (t(), a("button", {
                      key: String(C.value),
                      type: "button",
                      class: z([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(o)[c.key] === C.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (B) => b(n)({ [c.key]: C.value })
                    }, f(C.label), 11, td))), 128))
                  ])
                ]))), 128)),
                l("section", ad, [
                  l("div", nd, [
                    v[15] || (v[15] = l("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    l("span", ld, f(b(o).fontSize) + "px", 1)
                  ]),
                  l("div", od, [
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(o).fontSize <= b(nt),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => b(n)({ fontSize: b(o).fontSize - 1 }))
                    }, " − ", 8, sd),
                    l("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(nt),
                      max: b(lt),
                      value: b(o).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (c) => b(n)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, rd),
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(o).fontSize >= b(lt),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => b(n)({ fontSize: b(o).fontSize + 1 }))
                    }, " + ", 8, id)
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
}), dd = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, ud = { class: "flex items-stretch" }, cd = ["href", "aria-current"], fd = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, md = ["d"], pd = { class: "w-full truncate text-center" }, vd = {
  key: 0,
  class: "flex-1"
}, gd = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, hd = ["d"], bd = { class: "w-full truncate text-center" }, ft = 5, vw = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.items.length <= ft ? n.items : n.items.slice(0, ft - 1)
    ), i = $(() => n.items.length > ft);
    function d(u) {
      return u === "/" ? n.current === "/" : n.current === u || n.current.startsWith(`${u}/`);
    }
    return (u, m) => (t(), a("nav", dd, [
      l("ul", ud, [
        (t(!0), a(_, null, V(s.value, (h) => (t(), a("li", {
          key: h.key,
          class: "flex-1"
        }, [
          l("a", {
            href: h.href,
            class: z([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(h.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(h.href) ? "page" : void 0
          }, [
            (t(), a("svg", fd, [
              l("path", {
                d: b(de)(h.icon)
              }, null, 8, md)
            ])),
            l("span", pd, f(h.title), 1)
          ], 10, cd)
        ]))), 128)),
        i.value ? (t(), a("li", vd, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (h) => r("more"))
          }, [
            (t(), a("svg", gd, [
              l("path", {
                d: b(de)("more-horizontal")
              }, null, 8, hd)
            ])),
            l("span", bd, f(e.moreLabel), 1)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), xd = ["value"], yd = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", ge = /* @__PURE__ */ O({
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
      class: z([yd, n.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, xd));
  }
}), kd = ["for"], ke = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (o, n) => (t(), a("label", {
      "data-slot": "label",
      for: o.$props.for,
      class: z([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.$props.class
      ])
    }, [
      q(o.$slots, "default")
    ], 10, kd));
  }
}), gw = /* @__PURE__ */ O({
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
      class: z(["size-4 animate-spin", o.$props.class])
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
}), $d = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, wd = ["id", "name", "value", "disabled", "maxlength"], Cd = ["data-active"], Sd = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, hw = /* @__PURE__ */ O({
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
      () => Array.from({ length: n.length }, (h, p) => n.modelValue[p] ?? "")
    ), u = $(() => Math.min(n.modelValue.length, n.length - 1));
    function m(h) {
      const p = h.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (h, p) => (t(), a("div", $d, [
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
      }, null, 40, wd),
      (t(!0), a(_, null, V(d.value, (x, A) => (t(), a("div", {
        key: A,
        "data-slot": "input-otp-slot",
        "data-active": s.value && A === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(f(x) + " ", 1),
        s.value && A === u.value && x === "" ? (t(), a("div", Sd, [...p[2] || (p[2] = [
          l("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : y("", !0)
      ], 8, Cd))), 128))
    ]));
  }
}), Md = {
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
      class: z(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      l("h2", {
        class: z(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), a("p", Md, f(e.description), 1)) : y("", !0)
    ], 2));
  }
}), Bd = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Ad = { class: "min-w-0 space-y-1" }, Pd = { class: "text-2xl font-semibold tracking-tight" }, _d = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, zd = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, bw = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (o, n) => (t(), a("header", Bd, [
      l("div", Ad, [
        l("h1", Pd, f(e.title), 1),
        e.purpose ? (t(), a("p", _d, f(e.purpose), 1)) : y("", !0)
      ]),
      o.$slots.actions ? (t(), a("div", zd, [
        q(o.$slots, "actions")
      ])) : y("", !0)
    ]));
  }
}), Od = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: z(b(Q)(b(Vd)({ variant: e.variant }), o.class)),
      role: "alert"
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), jd = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: z(b(Q)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Ld = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: z(b(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Vd = _t(
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
), Td = { class: "list-inside list-disc text-sm" }, xw = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const o = e, n = $(() => Array.from(new Set(o.errors)));
    return (r, s) => (t(), T(b(Od), { variant: "destructive" }, {
      default: j(() => [
        I(b(Va), { class: "size-4" }),
        I(b(Ld), null, {
          default: j(() => [
            U(f(e.title), 1)
          ]),
          _: 1
        }),
        I(b(jd), null, {
          default: j(() => [
            l("ul", Td, [
              (t(!0), a(_, null, V(n.value, (i, d) => (t(), a("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), pa = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, s = ta(n, "modelValue", o, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, d) => ce((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => Aa(s) ? s.value = u : null),
      "data-slot": "input",
      class: z(
        b(Q)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [ye, b(s)]
    ]);
  }
}), Dd = { class: "relative" }, Ed = ["aria-label"], yw = /* @__PURE__ */ O({
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
    }), (i, d) => (t(), a("div", Dd, [
      I(b(pa), oe({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: b(Q)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      l("button", {
        type: "button",
        class: z(
          b(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(b(Ta), {
          key: 0,
          class: "size-4"
        })) : (t(), T(b(Da), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Ed)
    ]));
  }
}), Id = "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", kw = "grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3", Fd = "grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3", Te = "w-full min-w-0 px-4 py-6 sm:px-6", $w = "w-full min-w-0 p-3 sm:p-4", ww = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", Cw = "w-full max-w-5xl";
function Sw(e, o) {
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
const va = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Nd = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Rd = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Ud(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || o.endsWith(".jpg") || o.endsWith(".jpeg");
}
function Hd(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || o.endsWith(".png") || o.endsWith(".webp");
}
async function qd(e) {
  const o = URL.createObjectURL(e);
  try {
    const n = await Kd(o), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
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
function Kd(e) {
  return new Promise((o, n) => {
    const r = new Image();
    r.onload = () => o(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function Gd(e) {
  if (Ud(e))
    throw new Error(Rd);
  if (!Hd(e))
    throw new Error(va);
  if (!await qd(e))
    throw new Error(Nd);
}
const Tt = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(aa), oe({ "data-slot": "sheet" }, b(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Mw = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(Ue), oe({ "data-slot": "sheet-close" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wd = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(Bt), oe({
      "data-slot": "sheet-overlay",
      class: b(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }, b(n)), {
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
    const n = e, r = o, s = ie(n, "class", "side"), i = ve(s, r);
    return (d, u) => (t(), T(b(At), null, {
      default: j(() => [
        I(Wd),
        I(b(Pt), oe({
          "data-slot": "sheet-content",
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...d.$attrs, ...b(i) }), {
          default: j(() => [
            q(d.$slots, "default"),
            I(b(Ue), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                I(b(Mt), { class: "size-4" }),
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
}), Zd = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(na), oe({
      "data-slot": "sheet-description",
      class: b(Q)("text-muted-foreground text-sm", o.class)
    }, b(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bw = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: z(b(Q)("mt-auto flex flex-col gap-2 p-4", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Jd = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: z(b(Q)("flex flex-col gap-1.5 p-4", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Yd = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(la), oe({
      "data-slot": "sheet-title",
      class: b(Q)("text-foreground font-semibold", o.class)
    }, b(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Aw = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(oa), oe({ "data-slot": "sheet-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qt = "sidebar_state", Xd = 3600 * 24 * 7, Qd = "16rem", eu = "18rem", tu = "3rem", au = "b", [rt, nu] = Ya("Sidebar"), lu = { class: "flex h-full w-full flex-col" }, ou = ["data-state", "data-collapsible", "data-variant", "data-side"], su = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Pw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = rt();
    return (d, u) => e.collapsible === "none" ? (t(), a("div", oe({
      key: 0,
      "data-slot": "sidebar",
      class: b(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o.class
      )
    }, d.$attrs), [
      q(d.$slots, "default")
    ], 16)) : b(n) ? (t(), T(b(Tt), oe({
      key: 1,
      open: b(s)
    }, d.$attrs, { "onUpdate:open": b(i) }), {
      default: j(() => [
        I(b(Dt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": b(eu)
          })
        }, {
          default: j(() => [
            I(Jd, { class: "sr-only" }, {
              default: j(() => [
                I(Yd, null, {
                  default: j(() => [...u[0] || (u[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(Zd, null, {
                  default: j(() => [...u[1] || (u[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l("div", lu, [
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
      "data-state": b(r),
      "data-collapsible": b(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      l("div", {
        class: z(
          b(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      l("div", oe({
        class: b(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          o.class
        )
      }, d.$attrs), [
        l("div", su, [
          q(d.$slots, "default")
        ])
      ], 16)
    ], 8, ou));
  }
}), _w = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: z(
        b(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), zw = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: z(b(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Ow = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: z(b(Q)("relative flex w-full min-w-0 flex-col p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), jw = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(He), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        b(Q)(
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
}), Lw = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: z(b(Q)("w-full text-sm", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Vw = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(He), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        b(Q)(
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
}), Tw = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: z(b(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Dw = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(pa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: z(b(Q)("bg-background h-8 w-full shadow-none", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ew = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("main", {
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
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Iw = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: z(b(Q)("flex w-full min-w-0 flex-col gap-1", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Fw = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(He), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: z(
        b(Q)(
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
}), Nw = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
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
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), ru = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(Xa), oe({ "data-slot": "tooltip" }, b(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), iu = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Qa), null, {
      default: j(() => [
        I(b(en), oe({ "data-slot": "tooltip-content" }, { ...b(i), ...d.$attrs }, {
          class: b(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default"),
            I(b(tn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Rw = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(b(sa), we(Oe(o)), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), du = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(an), oe({ "data-slot": "tooltip-trigger" }, o), {
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
    return (n, r) => (t(), T(b(He), oe({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: b(Q)(b(cu)({ variant: e.variant, size: e.size }), o.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Uw = /* @__PURE__ */ O({
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
    const o = e, { isMobile: n, state: r } = rt(), s = ie(o, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(b(ru), { key: 1 }, {
      default: j(() => [
        I(b(du), { "as-child": "" }, {
          default: j(() => [
            I(Kt, we(Oe({ ...b(s), ...i.$attrs })), {
              default: j(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(b(iu), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(n)
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
    })) : (t(), T(Kt, we(oe({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hw = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: z(b(Q)("group/menu-item relative", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Gt = "animate-pulse rounded-md bg-primary/10", qw = /* @__PURE__ */ O({
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
      class: z(b(Q)("flex h-8 items-center gap-2 rounded-md px-2", o.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: z(b(Q)(Gt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : y("", !0),
      l("div", {
        class: z(b(Q)(Gt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), Kw = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: z(
        b(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Gw = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(b(He), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: z(
        b(Q)(
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
}), Ww = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: z(b(Q)("group/menu-sub-item relative", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Zw = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ka?.cookie.includes(`${qt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = Ha("(max-width: 767px)"), i = K(!1), d = ta(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(x) {
      d.value = x, document.cookie = `${qt}=${d.value}; path=/; max-age=${Xd}`;
    }
    function m(x) {
      i.value = x;
    }
    function h() {
      return s.value ? m(!i.value) : u(!d.value);
    }
    qa("keydown", (x) => {
      x.key === au && (x.metaKey || x.ctrlKey) && (x.preventDefault(), h());
    });
    const p = $(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return nu({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: h
    }), (x, A) => (t(), T(b(sa), { "delay-duration": 0 }, {
      default: j(() => [
        l("div", oe({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(Qd),
            "--sidebar-width-icon": b(tu)
          },
          class: b(Q)(
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
}), Jw = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { toggleSidebar: n } = rt();
    return (r, s) => (t(), a("button", {
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
          o.class
        )
      ),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...i) => b(n) && b(n)(...i))
    }, [
      q(r.$slots, "default")
    ], 2));
  }
}), uu = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(b(nn), oe({ "data-slot": "separator" }, b(n), {
      class: b(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        o.class
      )
    }), null, 16, ["class"]));
  }
}), Yw = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(uu), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: z(b(Q)("bg-sidebar-border mx-2 w-auto", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xw = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, toggleSidebar: s } = rt();
    return (i, d) => (t(), T(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(b(Q)("h-7 w-7", o.class)),
      onClick: b(s)
    }, {
      default: j(() => [
        b(n) || b(r) === "collapsed" ? (t(), T(b(Ea), { key: 0 })) : (t(), T(b(Ia), { key: 1 })),
        d[0] || (d[0] = l("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), cu = _t(
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
), Qw = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(ln), oe({ "data-slot": "dropdown-menu" }, b(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), fu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, e4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(on), oe({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", fu, [
          I(b(ra), null, {
            default: j(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(b(Qt), { class: "size-4" })
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
}), t4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(sn), null, {
      default: j(() => [
        I(b(rn), oe({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(Q)(
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
}), a4 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(dn), oe({ "data-slot": "dropdown-menu-group" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), n4 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(un), oe({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, b(r), {
      class: b(Q)(
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
}), l4 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const o = e, n = ie(o, "class", "inset"), r = Ce(n);
    return (s, i) => (t(), T(b(cn), oe({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, b(r), {
      class: b(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), o4 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(b(fn), oe({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, s4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(mn), oe({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", mu, [
          I(b(ra), null, {
            default: j(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(b(Fa), { class: "size-2 fill-current" })
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
}), r4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(pn), oe({ "data-slot": "dropdown-menu-separator" }, b(n), {
      class: b(Q)("bg-border -mx-1 my-1 h-px", o.class)
    }), null, 16, ["class"]));
  }
}), i4 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: z(b(Q)("text-muted-foreground ml-auto text-xs tracking-widest", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), d4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, d) => (t(), T(b(vn), oe({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), u4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(gn), oe({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(Q)(
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
}), c4 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(b(hn), oe({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        o.class
      )
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        I(b(ea), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), f4 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ce(e);
    return (r, s) => (t(), T(b(bn), oe({ "data-slot": "dropdown-menu-trigger" }, b(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m4 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(xn), {
      "data-slot": "avatar",
      class: z(b(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), p4 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(yn), oe({ "data-slot": "avatar-fallback" }, b(n), {
      class: b(Q)("bg-muted flex size-full items-center justify-center rounded-full", o.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v4 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(b(kn), oe({ "data-slot": "avatar-image" }, o, { class: "aspect-square size-full" }), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), g4 = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: z(o.class)
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), h4 = /* @__PURE__ */ O({
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
      class: z(b(Q)("flex size-9 items-center justify-center", o.class))
    }, [
      q(n.$slots, "default", {}, () => [
        I(b(Na), { class: "size-4" })
      ]),
      r[0] || (r[0] = l("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), b4 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: z(b(Q)("inline-flex items-center gap-1.5", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), x4 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(He), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: z(b(Q)("hover:text-foreground transition-colors", o.class))
    }, {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), y4 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: z(
        b(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), k4 = /* @__PURE__ */ O({
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
      class: z(b(Q)("text-foreground font-normal", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), $4 = /* @__PURE__ */ O({
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
      class: z(b(Q)("[&>svg]:size-3.5", o.class))
    }, [
      q(n.$slots, "default", {}, () => [
        I(b(ea))
      ])
    ], 2));
  }
}), pu = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, vu = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", pu, [
      I(b($n), oe({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), w4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(wn), oe({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: j((m) => [
        q(d.$slots, "default", we(Oe(m))),
        e.viewport ? (t(), T(vu, { key: 0 })) : y("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), C4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Cn), oe({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(Q)(
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
}), S4 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(b(Sn), oe({ "data-slot": "navigation-menu-indicator" }, b(r), {
      class: b(Q)(
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
}), M4 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(Mn), oe({ "data-slot": "navigation-menu-item" }, b(n), {
      class: b(Q)("relative", o.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(Bn), oe({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(Q)(
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
}), A4 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(b(An), oe({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(Q)("group flex flex-1 list-none items-center justify-center gap-1", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P4 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(b(Pn), oe({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(Q)(b(gu)(), "group", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        I(b(Ra), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gu = _t(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), _4 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(b(aa), oe({ "data-slot": "dialog" }, b(s)), {
      default: j((u) => [
        q(i.$slots, "default", we(Oe(u)))
      ]),
      _: 3
    }, 16));
  }
}), z4 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(Ue), oe({ "data-slot": "dialog-close" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hu = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(Bt), oe({ "data-slot": "dialog-overlay" }, b(n), {
      class: b(Q)(
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
}), O4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(At), null, {
      default: j(() => [
        I(hu),
        I(b(Pt), oe({ "data-slot": "dialog-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: j(() => [
            q(d.$slots, "default"),
            e.showCloseButton ? (t(), T(b(Ue), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                I(b(Mt)),
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
}), j4 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(b(na), oe({ "data-slot": "dialog-description" }, b(r), {
      class: b(Q)("text-muted-foreground text-sm", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), L4 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: z(b(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", o.class))
    }, [
      q(n.$slots, "default"),
      e.showCloseButton ? (t(), T(b(Ue), {
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
}), V4 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: z(b(Q)("flex flex-col gap-2 text-center sm:text-left", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), T4 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(b(At), null, {
      default: j(() => [
        I(b(Bt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            I(b(Pt), oe({
              class: b(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...b(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (m) => {
                const h = m.detail.originalEvent, p = h.target;
                (h.offsetX > p.clientWidth || h.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: j(() => [
                q(d.$slots, "default"),
                I(b(Ue), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    I(b(Mt), { class: "w-4 h-4" }),
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
}), D4 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = Ce(n);
    return (s, i) => (t(), T(b(la), oe({ "data-slot": "dialog-title" }, b(r), {
      class: b(Q)("text-lg leading-none font-semibold", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E4 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(oa), oe({ "data-slot": "dialog-trigger" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I4 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(_n), oe({ "data-slot": "label" }, b(n), {
      class: b(Q)(
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
}), F4 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(Ua), {
      role: "status",
      "aria-label": "Loading",
      class: z(b(Q)("size-4 animate-spin", o.class))
    }, null, 8, ["class"]));
  }
}), N4 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: z(
        b(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), R4 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: z(b(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), U4 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: z(b(Q)("px-6", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), H4 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: z(b(Q)("text-muted-foreground text-sm", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), q4 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: z(b(Q)("flex items-center px-6 [.border-t]:pt-6", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), K4 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: z(
        b(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          o.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), G4 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: z(b(Q)("leading-none font-semibold", o.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), bu = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, xu = { class: "flex items-start gap-3" }, yu = { class: "min-w-0 flex-1" }, ku = { class: "text-foreground text-sm font-medium" }, $u = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, W4 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(!1), d = K(null), u = K(0);
    _a((h) => (console.error(`[PkBoundary] ${r.label} failed to render`, h), i.value = !0, d.value = h instanceof Error ? h.message : null, s("error", h), !1));
    function m() {
      i.value = !1, d.value = null, u.value++;
    }
    return o({ retry: m }), (h, p) => (t(), a("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", bu, [
        l("div", xu, [
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
          l("div", yu, [
            l("p", ku, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), a("p", $u, f(d.value), 1)) : y("", !0),
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
      ])) : i.value ? y("", !0) : q(h.$slots, "default", { key: u.value })
    ], 2));
  }
}), wu = { class: "bg-card rounded-lg border" }, Cu = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Su = { class: "min-w-0" }, Mu = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Bu = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Au = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Pu = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, Z4 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, n) => (t(), a("section", wu, [
      e.title || e.description || o.$slots.header || o.$slots.actions ? (t(), a("header", Cu, [
        l("div", Su, [
          q(o.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", Mu, f(e.title), 1)) : y("", !0),
            e.description ? (t(), a("p", Bu, f(e.description), 1)) : y("", !0)
          ])
        ]),
        o.$slots.actions ? (t(), a("div", Au, [
          q(o.$slots, "actions")
        ])) : y("", !0)
      ])) : y("", !0),
      l("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        q(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (t(), a("footer", Pu, [
        q(o.$slots, "footer")
      ])) : y("", !0)
    ]));
  }
}), ga = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function J4() {
  const e = ia(), o = $(() => e.props.panel?.pageFooter === !0);
  return bt(ga, o), o;
}
const _u = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, zu = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Ou = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, Y4 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const o = e, n = ia(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = $(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = $(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), d = at(ga, $(() => !1)), u = $(() => !o.host && b(d) === !0);
    return (m, h) => u.value ? y("", !0) : (t(), a("footer", _u, [
      l("div", zu, [
        l("p", null, "© " + f(b(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", Ou, [
          (t(!0), a(_, null, V(i.value, (p) => (t(), T(b(jn), {
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
}), ju = { class: "flex shrink-0 flex-col items-center" }, Lu = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, X4 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), a("div", ju, [
      l("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Lu)) : y("", !0),
        l("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
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
}), Vu = { class: "flex flex-col gap-2" }, Tu = { class: "min-w-0 flex-1" }, Du = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Eu = ["disabled", "aria-label", "onClick"], Iu = ["disabled", "aria-label", "onClick"], Fu = ["disabled", "title", "aria-label", "onClick"], Nu = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Ru = ["disabled"], Q4 = /* @__PURE__ */ O({
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
        const C = {};
        let B = !1;
        for (const P of n.children) {
          const R = c.data[P.key] ?? null;
          C[P.key] = R, R !== null && R !== "" && !(Array.isArray(R) && R.length === 0) && (B = !0);
        }
        B && v.push(C);
      }
      return v.length ? v : null;
    }
    function m() {
      r("update:modelValue", u());
    }
    const h = $(() => n.maxItems !== null && i.value.length >= n.maxItems), p = $(() => n.minItems !== null && i.value.length <= n.minItems), x = $(() => n.children.length === 1);
    function A() {
      if (h.value || n.disabled)
        return;
      const v = {};
      for (const c of n.children)
        v[c.key] = null;
      i.value.push({ uid: s++, data: v });
    }
    function w(v) {
      i.value = i.value.filter((c) => c.uid !== v), m();
    }
    function S(v, c) {
      const C = v + c;
      if (C < 0 || C >= i.value.length)
        return;
      const B = [...i.value], [P] = B.splice(v, 1);
      B.splice(C, 0, P), i.value = B, m();
    }
    function k(v, c, C) {
      const B = i.value.find((P) => P.uid === v);
      B && (B.data[c] = C, m());
    }
    function g(v, c) {
      return n.errors[`${n.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), a("div", Vu, [
      (t(!0), a(_, null, V(i.value, (C, B) => (t(), a("div", {
        key: C.uid,
        class: "flex items-start gap-2"
      }, [
        l("span", {
          class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", x.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(B + 1), 3),
        l("div", Tu, [
          x.value ? (t(), T(Ne, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: C.data[e.children[0].key],
            error: g(B, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => k(C.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Du, [
            (t(!0), a(_, null, V(e.children, (P) => (t(), T(Ne, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: C.data[P.key],
              error: g(B, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (R) => k(C.uid, P.key, R)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        l("div", {
          class: z(["flex shrink-0 items-center gap-0.5", x.value ? "mt-1" : "mt-0"])
        }, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === 0,
            "aria-label": `Move ${e.itemLabel} ${B + 1} up`,
            onClick: (P) => S(B, -1)
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
          ])], 8, Eu),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${B + 1} down`,
            onClick: (P) => S(B, 1)
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
          ])], 8, Iu),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${B + 1}`,
            onClick: (P) => w(C.uid)
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
          ])], 8, Fu)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", Nu, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : y("", !0),
      h.value ? y("", !0) : (t(), a("button", {
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
      ], 8, Ru))
    ]));
  }
}), Uu = { class: "space-y-1" }, Hu = { class: "flex items-center gap-1" }, qu = ["disabled", "title", "aria-label", "onClick"], Ku = ["aria-pressed"], Gu = ["id", "value", "rows", "disabled"], Wu = ["innerHTML"], Zu = /* @__PURE__ */ O({
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
      const w = document.getElementById(n.id ?? "");
      if (w === null)
        return;
      const S = w.selectionStart, k = w.selectionEnd, g = i.value.slice(S, k);
      r(
        "update:modelValue",
        `${i.value.slice(0, S)}${x}${g}${A}${i.value.slice(k)}`
      );
    }
    const h = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = $(
      () => (n.toolbar ?? Object.keys(h)).filter((x) => x in h)
    );
    return (x, A) => (t(), a("div", Uu, [
      l("div", Hu, [
        (t(!0), a(_, null, V(p.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (S) => h[w].run()
        }, f(h[w].label), 9, qu))), 128)),
        l("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: A[0] || (A[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, Ku)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Wu)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: A[1] || (A[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, Gu))
    ]));
  }
}), Ju = { class: "space-y-1" }, Yu = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Xu = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Qu = ["id", "value", "rows", "disabled"], ec = { class: "text-muted-foreground text-xs" }, tc = {
  key: 0,
  class: "text-destructive text-xs"
}, ac = /* @__PURE__ */ O({
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
    function h(x) {
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
      const A = x.target, w = A.selectionStart, S = A.selectionEnd, k = `${d.value.slice(0, w)}    ${d.value.slice(S)}`;
      r("update:modelValue", k), requestAnimationFrame(() => {
        A.selectionStart = A.selectionEnd = w + 4;
      });
    }
    return (x, A) => (t(), a("div", Ju, [
      l("div", Yu, [
        l("div", Xu, [
          (t(!0), a(_, null, V(u.value, (w) => (t(), a("div", { key: w }, f(w), 1))), 128))
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
          onInput: h,
          onKeydown: p
        }, null, 40, Qu)
      ]),
      l("p", ec, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", tc, f(m.value), 1)) : y("", !0)
    ]));
  }
}), nc = { class: "space-y-3" }, lc = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, oc = { class: "text-sm font-medium" }, sc = { class: "flex items-center gap-1" }, rc = ["disabled", "onClick"], ic = ["disabled", "onClick"], dc = ["disabled", "onClick"], uc = { class: "space-y-3 p-3" }, cc = { class: "flex flex-wrap items-center gap-2" }, fc = ["disabled", "onClick"], mc = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, e5 = /* @__PURE__ */ O({
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
    function h(A) {
      u(s.value.filter((w, S) => S !== A));
    }
    function p(A, w) {
      const S = A + w;
      if (S < 0 || S >= s.value.length)
        return;
      const k = [...s.value], [g] = k.splice(A, 1);
      k.splice(S, 0, g), u(k);
    }
    function x(A, w, S) {
      u(
        s.value.map(
          (k, g) => g === A ? { ...k, data: { ...k.data, [w]: S } } : k
        )
      );
    }
    return (A, w) => (t(), a("div", nc, [
      (t(!0), a(_, null, V(s.value, (S, k) => (t(), a("div", {
        key: `${S.type}-${k}`,
        class: "bg-card rounded-lg border"
      }, [
        l("div", lc, [
          l("span", oc, f(i.value[S.type]?.label ?? S.type), 1),
          l("div", sc, [
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || k === 0,
              "aria-label": "Move up",
              onClick: (g) => p(k, -1)
            }, " ↑ ", 8, rc),
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || k === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (g) => p(k, 1)
            }, " ↓ ", 8, ic),
            l("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (g) => h(k)
            }, " Remove ", 8, dc)
          ])
        ]),
        l("div", uc, [
          (t(!0), a(_, null, V(i.value[S.type]?.fields ?? [], (g) => (t(), T(Ne, {
            key: g.key,
            field: g,
            value: S.data[g.key] ?? null,
            error: e.errors?.[g.key],
            processing: e.disabled,
            onChange: (v) => x(k, g.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      l("div", cc, [
        (t(!0), a(_, null, V(e.blocks, (S) => (t(), a("button", {
          key: S.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (k) => m(S.type)
        }, " + " + f(S.label), 9, fc))), 128)),
        d.value ? (t(), a("span", mc, f(e.maxBlocks) + " is the maximum here. ", 1)) : y("", !0)
      ])
    ]));
  }
}), pc = ["name", "value", "checked", "disabled", "onChange"], vc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, gc = /* @__PURE__ */ O({
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
      class: z(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(_, null, V(e.options, (u) => (t(), a("label", {
        key: String(u.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (m) => r("update:modelValue", u.value)
        }, null, 40, pc),
        U(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", vc, " Nothing to choose from yet. ")) : y("", !0)
    ], 2));
  }
}), hc = ["value", "checked", "disabled", "onChange"], bc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, xc = /* @__PURE__ */ O({
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
      return s.value.some((h) => h == m.value);
    }
    function d(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((h) => h != m.value) : [...s.value, m.value]
      );
    }
    const u = $(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, h) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(u.value)
    }, [
      (t(!0), a(_, null, V(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (x) => d(p)
        }, null, 40, hc),
        U(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", bc, " Nothing to choose from yet. ")) : y("", !0)
    ], 4));
  }
}), yc = { class: "flex flex-col gap-1.5" }, kc = ["aria-label", "onClick"], $c = ["placeholder", "disabled", "maxlength"], wc = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Cc = ["onClick"], Sc = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Mc = /* @__PURE__ */ O({
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
      if (i.value.some((w) => w.toLowerCase() === A.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, A]), s.value = "";
    }
    function h(x) {
      r(
        "update:modelValue",
        i.value.filter((A, w) => w !== x)
      );
    }
    function p(x) {
      if (x.key === "Enter" || x.key === ",") {
        x.preventDefault(), m(s.value);
        return;
      }
      x.key === "Backspace" && s.value === "" && i.value.length > 0 && h(i.value.length - 1);
    }
    return (x, A) => (t(), a("div", yc, [
      l("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(_, null, V(i.value, (w, S) => (t(), a("span", {
          key: `${w}-${S}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(f(w) + " ", 1),
          e.disabled ? y("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (k) => h(S)
          }, " × ", 8, kc))
        ]))), 128)),
        ce(l("input", {
          "onUpdate:modelValue": A[0] || (A[0] = (w) => s.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: A[1] || (A[1] = (w) => m(s.value))
        }, null, 40, $c), [
          [ye, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", wc, [
        A[2] || (A[2] = l("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(_, null, V(u.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (S) => m(w)
        }, f(w), 9, Cc))), 128))
      ])) : y("", !0),
      d.value ? (t(), a("p", Sc, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : y("", !0)
    ]));
  }
}), Bc = 4.5, Wt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ha(e) {
  let o = e.replace("#", "");
  return o.length === 3 && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]), [parseInt(o.slice(0, 2), 16), parseInt(o.slice(2, 4), 16), parseInt(o.slice(4, 6), 16)];
}
function mt(e) {
  const o = e / 255;
  return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
}
function wt(e) {
  const [o, n, r] = ha(e);
  return 0.2126 * mt(o) + 0.7152 * mt(n) + 0.0722 * mt(r);
}
function ba(e, o) {
  const n = wt(e), r = wt(o);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ac(e, o, n) {
  if (!Wt.test(e) || !Wt.test(o))
    return e;
  const r = wt(o) > 0.5, s = r ? 0 : 255;
  let i = ha(e);
  for (let d = 0; d <= 20; d++) {
    const u = Pc(i);
    if (ba(u, o) >= n)
      return u;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Pc(e) {
  return "#" + e.map(
    (o) => Math.round(Math.max(0, Math.min(255, o))).toString(16).padStart(2, "0")
  ).join("");
}
const _c = { class: "flex flex-col gap-2" }, zc = { class: "flex items-center gap-2" }, Oc = {
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
}, jc = ["value", "disabled", "aria-label"], Lc = ["value", "disabled", "placeholder"], Vc = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Tc = ["aria-label", "title", "onClick"], Dc = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Ec = /* @__PURE__ */ O({
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
    function u(w) {
      const S = w.trim();
      if (S === "")
        return "";
      const k = S.startsWith("#") ? S : `#${S}`;
      return s.test(k) ? k.toLowerCase() : S;
    }
    function m(w) {
      r("update:modelValue", u(w.target.value));
    }
    const h = $(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : ba(i.value, n.field.contrastBackground)), p = $(() => n.field.contrastMinRatio ?? Bc), x = $(() => h.value !== null && h.value < p.value);
    function A() {
      n.field.contrastBackground && r(
        "update:modelValue",
        Ac(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (w, S) => (t(), a("div", _c, [
      l("div", zc, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: S[0] || (S[0] = (k) => r("update:modelValue", k.target.value))
        }, null, 40, jc)) : (t(), a("span", Oc)),
        l("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, Lc)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Vc, [
        (t(!0), a(_, null, V(e.field.presets, (k) => (t(), a("button", {
          key: k,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === k.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: k }),
          "aria-label": k,
          title: k,
          onClick: (g) => r("update:modelValue", k.toLowerCase())
        }, null, 14, Tc))), 128))
      ])) : y("", !0),
      x.value ? (t(), a("p", Dc, [
        l("span", null, " This fails contrast at " + f(h.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? y("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: A
        }, " Use a readable shade "))
      ])) : y("", !0)
    ]));
  }
}), Ic = { class: "flex items-center gap-3" }, Fc = ["min", "max", "step", "value", "disabled", "aria-label"], Nc = { class: "flex shrink-0 items-center gap-1" }, Rc = ["min", "max", "step", "value", "disabled"], Uc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Hc = /* @__PURE__ */ O({
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
    function h(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const x = Number(p);
      r("update:modelValue", Number.isFinite(x) ? x : null);
    }
    return (p, x) => (t(), a("div", Ic, [
      l("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: x[0] || (x[0] = (A) => h(A.target.value))
      }, null, 40, Fc),
      l("div", Nc, [
        l("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: m.value ? "" : u.value,
          disabled: e.disabled,
          onInput: x[1] || (x[1] = (A) => h(A.target.value))
        }, null, 40, Rc),
        e.field.unit ? (t(), a("span", Uc, f(e.field.unit), 1)) : y("", !0)
      ])
    ]));
  }
}), Xe = /* @__PURE__ */ new Map();
function pt(e, o) {
  Xe.set(e, o);
}
function qc(e) {
  return Xe.get(e);
}
function t5(e) {
  return Xe.has(e);
}
function Kc() {
  return [...Xe.keys()].sort();
}
function a5() {
  Xe.clear();
}
const Gc = ["name", "value", "checked", "disabled", "onChange"], Wc = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Zc = { class: "whitespace-nowrap" }, Jc = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Yc = ["name", "value", "checked", "disabled", "onChange"], Xc = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Qc = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, ef = { class: "text-center text-xs font-medium" }, tf = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, af = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, nf = /* @__PURE__ */ O({
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
      () => n.field.preview ? qc(n.field.preview) : void 0
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
    function m(h) {
      return n.modelValue != null && h.value == n.modelValue;
    }
    return (h, p) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(_, null, V(e.options, (x) => (t(), a("label", {
        key: String(x.value),
        class: z(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
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
        }, null, 40, Gc),
        p[0] || (p[0] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", Wc, [
          (t(), T(xe(s.value), {
            value: x.value,
            label: x.label,
            selected: m(x)
          }, null, 8, ["value", "label", "selected"]))
        ])) : y("", !0),
        l("span", Zc, f(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Jc, " Nothing to choose from yet. ")) : y("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", u.value])
    }, [
      (t(!0), a(_, null, V(e.options, (x) => (t(), a("label", {
        key: String(x.value),
        class: z(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
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
        }, null, 40, Yc),
        p[1] || (p[1] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        l("span", Xc, [
          s.value ? (t(), T(xe(s.value), {
            key: 0,
            value: x.value,
            label: x.label,
            selected: m(x)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", Qc, " no preview ")) : y("", !0)
        ]),
        l("span", ef, f(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", tf, " Nothing to choose from yet. ")) : y("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", af, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        l("code", null, f(e.field.preview), 1),
        U(". Registered: " + f(b(Kc)().join(", ") || "none") + ". ", 1)
      ])) : y("", !0)
    ], 2));
  }
}), lf = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, of = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", lf, [
      l("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), sf = { class: "flex flex-col items-center gap-1 text-center" }, rf = {
  key: 0,
  class: "text-xs text-neutral-500"
}, xa = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", sf, [
      l("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: n.value, color: n.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", rf, f(e.caption), 1)) : y("", !0)
    ]));
  }
}), df = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, uf = { class: "flex items-center gap-3" }, cf = ["src"], ff = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, mf = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, pf = {
  key: 0,
  class: "text-right text-sm"
}, vf = { class: "text-neutral-500" }, gf = { class: "tabular-nums" }, hf = { key: 1 }, bf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, xf = { class: "mt-2 font-medium" }, yf = { key: 2 }, kf = { class: "w-full text-sm" }, $f = { class: "w-full py-3 pr-2" }, wf = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Cf = { key: 0 }, Sf = ["colspan"], Mf = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Bf = { class: "w-64 text-sm" }, Af = { class: "tabular-nums" }, Pf = {
  key: 3,
  class: "py-2"
}, _f = { key: 4 }, zf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Of = { class: "mt-2 flex flex-col gap-1 text-sm" }, jf = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Lf = { key: 0 }, Vf = {
  key: 1,
  class: "mt-1"
}, Tf = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Df = /* @__PURE__ */ O({
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
    return (m, h) => (t(), a("article", df, [
      l("div", uf, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, cf)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: n() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), a(_, null, V(e.document.blocks, (p, x) => (t(), a(_, { key: x }, [
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
            p.subtitle ? (t(), a("p", ff, f(p.subtitle), 1)) : y("", !0),
            p.reference ? (t(), a("p", mf, f(p.reference), 1)) : y("", !0)
          ]),
          r(p).length ? (t(), a("dl", pf, [
            (t(!0), a(_, null, V(r(p), (A, w) => (t(), a("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              l("dt", vf, f(A.label), 1),
              l("dd", gf, f(A.value), 1)
            ]))), 128))
          ])) : y("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", hf, [
          l("h2", bf, f(p.heading), 1),
          l("p", xf, f(p.name), 1),
          (t(!0), a(_, null, V(d(p.lines), (A, w) => (t(), a("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, f(A), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", yf, [
          l("table", kf, [
            l("thead", null, [
              l("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: n() })
              }, [
                (t(!0), a(_, null, V(d(p.columns), (A, w) => (t(), a("th", {
                  key: w,
                  class: z(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(A), 3))), 128))
              ], 4)
            ]),
            l("tbody", null, [
              (t(!0), a(_, null, V(s(p), (A, w) => (t(), a("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                l("td", $f, [
                  l("p", null, f(A.description), 1),
                  A.detail ? (t(), a("p", wf, f(A.detail), 1)) : y("", !0)
                ]),
                (t(!0), a(_, null, V(A.cells, (S, k) => (t(), a("td", {
                  key: k,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(S), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Cf, [
                l("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, Sf)
              ])) : y("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Mf, [
            l("dl", Bf, [
              (t(!0), a(_, null, V(i(p), (A, w) => (t(), a("div", {
                key: w,
                class: z([
                  "flex justify-between py-1",
                  A.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(A.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                l("dt", {
                  class: z(A.strong ? "" : "text-neutral-600")
                }, f(A.label), 3),
                l("dd", Af, f(A.value), 1)
              ], 6))), 128))
            ])
          ])) : y("", !0)
        ])) : p.type === "code" ? (t(), a("section", Pf, [
          I(xa, {
            code: u(p.code),
            caption: u(p.caption),
            style: ne(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", _f, [
          l("h2", zf, f(p.heading), 1),
          l("ol", Of, [
            (t(!0), a(_, null, V(d(p.items), (A, w) => (t(), a("li", {
              key: w,
              class: "flex gap-2"
            }, [
              l("span", {
                class: "font-semibold tabular-nums",
                style: ne({ color: n() })
              }, f(w + 1) + ".", 5),
              l("span", null, f(A), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: z(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: n() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", jf, [
          p.text ? (t(), a("p", Lf, f(p.text), 1)) : y("", !0),
          d(p.contacts).length ? (t(), a("p", Vf, f(d(p.contacts).join(" · ")), 1)) : y("", !0)
        ])) : (t(), a("p", Tf, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Ef = ["aria-label", "title"], If = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ff = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, n5 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: o, set: n } = ma(), r = $(() => o.value.theme === "dark");
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
      (t(), a("svg", If, [
        r.value ? (t(), a(_, { key: 0 }, [
          d[0] || (d[0] = l("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = l("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", Ff))
      ]))
    ], 8, Ef));
  }
}), Nf = ["width", "height"], Rf = { key: 0 }, Uf = ["x1", "x2", "y1", "y2"], Hf = ["x", "y"], qf = ["x1", "x2", "y1", "y2"], Kf = ["x", "y"], Gf = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Wf = ["x", "y", "width", "height", "fill", "fill-opacity"], Zf = ["x", "y"], Jf = ["x", "y"], Yf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Xf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Qf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, em = { class: "text-xs font-semibold tabular-nums" }, tm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, am = { class: "text-muted-foreground" }, Zt = 5.6, l5 = /* @__PURE__ */ O({
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
    function r(M) {
      return n[M] ?? M;
    }
    function s(M, N) {
      if (!o.thresholds?.length)
        return N;
      const L = o.thresholds.find((Y) => M < Y.max);
      return r(L ? L.color : o.aboveColor);
    }
    const i = K(null), d = K(560), u = K(null);
    let m = null;
    pe(() => {
      m = new ResizeObserver((M) => {
        d.value = Math.max(160, M[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), he(() => m?.disconnect());
    const h = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = $(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? h[L % h.length]
    }))), x = $(() => p.value[0]?.points.map((M) => M.label) ?? []), A = $(() => x.value.length), w = $(() => o.orientation === "horizontal"), S = $(() => Math.max(0, ...x.value.map((M) => M.length))), k = $(() => {
      if (!w.value)
        return o.showAxis ? 44 : 8;
      const M = S.value * Zt + 16;
      return Math.round(Math.min(Math.max(60, M), d.value * 0.4));
    }), g = $(() => Math.max(4, Math.floor((k.value - 16) / Zt)));
    function v(M) {
      return M.length <= g.value ? M : `${M.slice(0, g.value - 1)}…`;
    }
    const c = $(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: k.value
    })), C = $(() => ({
      w: Math.max(1, d.value - c.value.left - c.value.right),
      h: Math.max(1, o.height - c.value.top - c.value.bottom)
    })), B = (M) => o.format ? o.format(M) : P(M);
    function P(M) {
      return Math.abs(M) >= 1e6 ? `${(M / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(M) >= 1e3 ? `${(M / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(M * 100) / 100);
    }
    const R = $(() => {
      const M = x.value.map(
        (le, F) => o.stacked ? p.value.reduce((E, X) => E + Math.max(0, X.points[F]?.value ?? 0), 0) : Math.max(...p.value.map((E) => E.points[F]?.value ?? 0))
      );
      if (o.maxValue)
        return o.maxValue;
      const N = Math.max(...M, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((le) => N <= le * L) ?? 10) * L;
    }), D = $(
      () => (w.value ? C.value.h : C.value.w) / Math.max(1, A.value)
    ), ee = $(() => D.value * 0.68), H = $(
      () => o.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), G = $(() => {
      const M = [], N = new Array(A.value).fill(0);
      return p.value.forEach((L, Y) => {
        L.points.forEach((le, F) => {
          const X = Math.max(0, le.value) / R.value * (w.value ? C.value.w : C.value.h), ue = (w.value ? c.value.top : c.value.left) + F * D.value + (D.value - ee.value) / 2, re = o.stacked ? 0 : Y * H.value;
          M.push(
            w.value ? {
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
              y: c.value.top + C.value.h - X - N[F],
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
      }), M;
    }), Z = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        value: R.value * (w.value ? M : 1 - M),
        x: c.value.left + C.value.w * M,
        y: c.value.top + C.value.h * M
      }))
    ), ae = $(() => Math.max(1, Math.ceil(A.value / (w.value ? 14 : 10))));
    function te(M) {
      return M === A.value - 1 || M % ae.value === 0;
    }
    function J(M) {
      return (w.value ? c.value.top : c.value.left) + M * D.value + D.value / 2;
    }
    const W = $(() => u.value === null ? null : {
      label: x.value[u.value],
      rows: p.value.map((M) => ({
        name: M.name,
        color: M.color,
        value: M.points[u.value]?.value ?? 0
      }))
    });
    return (M, N) => (t(), a("div", {
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
          e.showAxis ? (t(), a("g", Rf, [
            w.value ? (t(), a(_, { key: 0 }, [
              (t(!0), a(_, null, V(Z.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: c.value.top,
                y2: c.value.top + C.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Uf))), 128)),
              (t(!0), a(_, null, V(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(L.value)), 9, Hf))), 128))
            ], 64)) : (t(), a(_, { key: 1 }, [
              (t(!0), a(_, null, V(Z.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: c.value.left,
                x2: d.value - c.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, qf))), 128)),
              (t(!0), a(_, null, V(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: c.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(L.value)), 9, Kf))), 128))
            ], 64))
          ])) : y("", !0),
          (t(!0), a(_, null, V(x.value, (L, Y) => (t(), a("rect", {
            key: `hit-${Y}`,
            x: w.value ? c.value.left : c.value.left + Y * D.value,
            y: w.value ? c.value.top + Y * D.value : c.value.top,
            width: w.value ? C.value.w : D.value,
            height: w.value ? D.value : C.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === Y ? 0.4 : 0,
            onMouseenter: (le) => u.value = Y
          }, null, 40, Gf))), 128)),
          (t(!0), a(_, null, V(G.value, (L, Y) => (t(), a("rect", {
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
          }, null, 8, Wf))), 128)),
          w.value ? (t(!0), a(_, { key: 1 }, V(x.value, (L, Y) => ce((t(), a("text", {
            key: `c-${Y}`,
            x: c.value.left - 8,
            y: J(Y) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(f(v(L)) + " ", 1),
            l("title", null, f(L), 1)
          ], 8, Zf)), [
            [Ve, te(Y)]
          ])), 128)) : (t(!0), a(_, { key: 2 }, V(x.value, (L, Y) => ce((t(), a("text", {
            key: `c-${Y}`,
            x: J(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, Jf)), [
            [Ve, te(Y)]
          ])), 128))
        ], 40, Nf)),
        W.value ? (t(), a("div", Yf, [
          l("p", Xf, f(W.value.label), 1),
          (t(!0), a(_, null, V(W.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Qf, f(L.name || "Value"), 1),
            l("span", em, f(B(L.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", tm, [
          (t(!0), a(_, null, V(p.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", am, f(L.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), nm = ["width", "height"], lm = ["id"], om = ["stop-color"], sm = ["stop-color"], rm = { key: 0 }, im = ["x1", "x2", "y1", "y2"], dm = ["x", "y"], um = ["x", "y"], cm = ["x1", "x2", "y1", "y2"], fm = ["d", "fill"], mm = ["d", "stroke", "stroke-dasharray"], pm = ["cx", "cy", "fill"], vm = { key: 1 }, gm = ["x1", "x2", "y1", "y2"], hm = ["cx", "cy", "fill"], bm = ["x", "y"], xm = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, ym = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, km = { class: "text-xs font-semibold tabular-nums" }, $m = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, wm = { class: "text-muted-foreground" }, Cm = /* @__PURE__ */ O({
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
    const o = e, n = $(() => h.value.some((M) => M.axis === "right")), r = K(null), s = K(560), i = K(null);
    let d = null;
    pe(() => {
      d = new ResizeObserver((M) => {
        s.value = Math.max(160, M[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), he(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = Math.random().toString(36).slice(2, 9), h = $(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? u[L % u.length]
    }))), p = $(() => h.value[0]?.points.map((M) => M.label) ?? []), x = $(() => p.value.length), A = $(() => ({
      top: 12,
      right: o.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: o.showAxis ? 44 : 8
    })), w = (M) => o.format ? o.format(M) : S(M);
    function S(M) {
      return Math.abs(M) >= 1e6 ? `${(M / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(M) >= 1e3 ? `${(M / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(M * 100) / 100);
    }
    function k(M) {
      const N = Math.max(...M, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((le) => N <= le * L) ?? 10) * L;
    }
    const g = $(
      () => k(
        h.value.filter((M) => M.axis !== "right").flatMap((M) => M.points.map((N) => N.value))
      )
    ), v = $(
      () => k(
        h.value.filter((M) => M.axis === "right").flatMap((M) => M.points.map((N) => N.value))
      )
    ), c = $(() => ({
      w: Math.max(1, s.value - A.value.left - A.value.right),
      h: Math.max(1, o.height - A.value.top - A.value.bottom)
    }));
    function C(M) {
      return A.value.left + (x.value <= 1 ? 0 : M / (x.value - 1) * c.value.w);
    }
    function B(M, N = "left") {
      const L = N === "right" ? v.value : g.value;
      return A.value.top + c.value.h - M / L * c.value.h;
    }
    const P = $(
      () => h.value.map((M) => {
        const N = M.points.map((Y, le) => ({
          ...Y,
          x: C(le),
          y: B(Y.value, M.axis ?? "left")
        })), L = M.stepped ? R(N) : D(N);
        return { ...M, pts: N, line: L, area: ee(L, N) };
      })
    );
    function R(M) {
      if (M.length === 0)
        return "";
      let N = `M${M[0].x.toFixed(2)},${M[0].y.toFixed(2)}`;
      for (let L = 1; L < M.length; L++)
        N += ` L${M[L].x.toFixed(2)},${M[L - 1].y.toFixed(2)} L${M[L].x.toFixed(2)},${M[L].y.toFixed(2)}`;
      return N;
    }
    function D(M) {
      const N = M.length;
      if (N === 0)
        return "";
      if (N === 1)
        return `M${M[0].x},${M[0].y}`;
      const L = [], Y = [];
      for (let E = 0; E < N - 1; E++)
        L[E] = M[E + 1].x - M[E].x, Y[E] = L[E] === 0 ? 0 : (M[E + 1].y - M[E].y) / L[E];
      const le = [Y[0]];
      for (let E = 1; E < N - 1; E++)
        if (Y[E - 1] * Y[E] <= 0)
          le[E] = 0;
        else {
          const X = 2 * L[E] + L[E - 1], ue = L[E] + 2 * L[E - 1];
          le[E] = (X + ue) / (X / Y[E - 1] + ue / Y[E]);
        }
      le[N - 1] = Y[N - 2];
      let F = `M${M[0].x.toFixed(2)},${M[0].y.toFixed(2)}`;
      for (let E = 0; E < N - 1; E++) {
        const X = L[E] / 3;
        F += ` C${(M[E].x + X).toFixed(2)},${(M[E].y + le[E] * X).toFixed(2)} ${(M[E + 1].x - X).toFixed(2)},${(M[E + 1].y - le[E + 1] * X).toFixed(2)} ${M[E + 1].x.toFixed(2)},${M[E + 1].y.toFixed(2)}`;
      }
      return F;
    }
    function ee(M, N) {
      if (N.length === 0)
        return "";
      const L = A.value.top + c.value.h;
      return `${M} L${N[N.length - 1].x.toFixed(2)},${L} L${N[0].x.toFixed(2)},${L} Z`;
    }
    const H = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        y: A.value.top + c.value.h * M,
        value: g.value * (1 - M)
      }))
    ), G = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        y: A.value.top + c.value.h * M,
        value: v.value * (1 - M)
      }))
    ), Z = $(() => Math.max(1, Math.ceil(x.value / 8)));
    function ae(M) {
      return M === x.value - 1 || M % Z.value === 0;
    }
    function te(M) {
      const N = M.currentTarget.getBoundingClientRect(), L = M.clientX - N.left - A.value.left, Y = x.value <= 1 ? 1 : c.value.w / (x.value - 1);
      i.value = Math.min(x.value - 1, Math.max(0, Math.round(L / Y)));
    }
    const J = $(() => {
      if (i.value === null || x.value === 0)
        return null;
      const M = i.value;
      return {
        i: M,
        x: C(M),
        label: p.value[M],
        rows: P.value.map((N) => ({
          name: N.name,
          color: N.color,
          value: N.points[M]?.value ?? 0,
          y: N.pts[M]?.y ?? 0
        }))
      };
    }), W = $(() => {
      if (!J.value)
        return {};
      const M = J.value.x > s.value * 0.6;
      return {
        left: `${J.value.x}px`,
        top: "8px",
        transform: M ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (M, N) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), a("div", {
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
            (t(!0), a(_, null, V(P.value, (L, Y) => (t(), a("linearGradient", {
              id: `pk-fill-${b(m)}-${Y}`,
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
              }, null, 8, om),
              l("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, sm)
            ], 8, lm))), 128))
          ]),
          e.showAxis ? (t(), a("g", rm, [
            (t(!0), a(_, null, V(H.value, (L) => (t(), a("line", {
              key: L.y,
              x1: A.value.left,
              x2: s.value - A.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, im))), 128)),
            (t(!0), a(_, null, V(H.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: A.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(S(L.value)), 9, dm))), 128)),
            n.value ? (t(!0), a(_, { key: 0 }, V(G.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - A.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(S(L.value)), 9, um))), 128)) : y("", !0)
          ])) : y("", !0),
          (t(!0), a(_, null, V(p.value, (L, Y) => ce((t(), a("line", {
            key: `v-${Y}`,
            x1: C(Y),
            x2: C(Y),
            y1: A.value.top,
            y2: A.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, cm)), [
            [Ve, ae(Y)]
          ])), 128)),
          (t(!0), a(_, null, V(P.value, (L, Y) => (t(), a("g", {
            key: `s-${Y}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${b(m)}-${Y})`
            }, null, 8, fm)) : y("", !0),
            l("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, mm),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, pm)) : y("", !0)
          ]))), 128)),
          J.value ? (t(), a("g", vm, [
            l("line", {
              x1: J.value.x,
              x2: J.value.x,
              y1: A.value.top,
              y2: A.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, gm),
            (t(!0), a(_, null, V(J.value.rows, (L, Y) => (t(), a("circle", {
              key: `d-${Y}`,
              cx: J.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, hm))), 128))
          ])) : y("", !0),
          (t(!0), a(_, null, V(p.value, (L, Y) => ce((t(), a("text", {
            key: `x-${Y}`,
            x: C(Y),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, bm)), [
            [Ve, ae(Y)]
          ])), 128))
        ], 40, nm)),
        J.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(W.value)
        }, [
          l("p", xm, f(J.value.label), 1),
          (t(!0), a(_, null, V(J.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", ym, f(L.name || "Value"), 1),
            l("span", km, f(w(L.value)), 1)
          ]))), 128))
        ], 4)) : y("", !0),
        e.showLegend && h.value.length > 1 ? (t(), a("div", $m, [
          (t(!0), a(_, null, V(P.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", wm, f(L.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Sm = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Mm = { class: "text-muted-foreground text-[11px] capitalize" }, Bm = { class: "text-sm font-semibold tabular-nums" }, Am = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Qe = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (o, n) => (t(), a("div", Sm, [
      l("p", Mm, f(e.label), 1),
      l("p", Bm, [
        U(f(e.value) + " ", 1),
        e.share ? (t(), a("span", Am, " (" + f(e.share) + ") ", 1)) : y("", !0)
      ])
    ]));
  }
}), Pm = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, _m = ["width", "height", "viewBox", "aria-label"], zm = ["d", "fill", "fill-opacity", "onMouseenter"], Om = ["x", "y"], jm = ["x", "y"], Lm = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Vm = ["onMouseenter"], Tm = { class: "min-w-0 flex-1 truncate capitalize" }, Dm = { class: "tabular-nums font-medium" }, Em = { class: "text-muted-foreground w-9 text-right tabular-nums" }, o5 = /* @__PURE__ */ O({
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
    function h(g) {
      return 1 - Math.min(0.55, Math.floor(g / n.length) * 0.28);
    }
    const p = $(() => {
      if (r.value <= 0)
        return [];
      const g = i.value / 2;
      let v = -Math.PI / 2;
      return o.data.map((c, C) => {
        const B = c.value / r.value, P = B * Math.PI * 2, R = v, D = v + P;
        return v = D, {
          ...c,
          share: B,
          colour: m(C),
          opacity: h(C),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: B >= 0.9999 ? w(g) : A(g, R, D, d.value, u.value)
        };
      });
    });
    function x(g, v, c) {
      return `${(g + Math.cos(v) * c).toFixed(2)},${(g + Math.sin(v) * c).toFixed(2)}`;
    }
    function A(g, v, c, C, B) {
      const P = c - v > Math.PI ? 1 : 0;
      return B <= 0 ? `M${g},${g} L${x(g, v, C)} A${C},${C} 0 ${P} 1 ${x(g, c, C)} Z` : [
        `M${x(g, v, C)}`,
        `A${C},${C} 0 ${P} 1 ${x(g, c, C)}`,
        `L${x(g, c, B)}`,
        `A${B},${B} 0 ${P} 0 ${x(g, v, B)}`,
        "Z"
      ].join(" ");
    }
    function w(g) {
      const v = d.value, c = u.value, C = [
        `M${g - v},${g}`,
        `A${v},${v} 0 1 1 ${g + v},${g}`,
        `A${v},${v} 0 1 1 ${g - v},${g}`,
        "Z"
      ];
      return c <= 0 ? C.join(" ") : [
        ...C,
        `M${g - c},${g}`,
        `A${c},${c} 0 1 0 ${g + c},${g}`,
        `A${c},${c} 0 1 0 ${g - c},${g}`,
        "Z"
      ].join(" ");
    }
    const S = (g) => o.format ? o.format(g) : new Intl.NumberFormat().format(g), k = (g) => `${(g * 100).toFixed(g < 0.01 ? 2 : 0)}%`;
    return (g, v) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Pm, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${S(r.value)}`
      }, [
        (t(!0), a(_, null, V(p.value, (c, C) => (t(), a("path", {
          key: C,
          d: c.path,
          fill: c.colour,
          "fill-opacity": s.value === null || s.value === C ? c.opacity : c.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (B) => s.value = C,
          onMouseleave: v[0] || (v[0] = (B) => s.value = null)
        }, null, 40, zm))), 128)),
        e.type === "doughnut" ? (t(), a(_, { key: 0 }, [
          l("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(S(s.value === null ? r.value : p.value[s.value].value)), 9, Om),
          l("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, jm)
        ], 64)) : y("", !0)
      ], 8, _m)),
      l("ul", Lm, [
        (t(!0), a(_, null, V(p.value, (c, C) => (t(), a("li", {
          key: C,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === C ? "bg-muted" : ""]),
          onMouseenter: (B) => s.value = C,
          onMouseleave: v[1] || (v[1] = (B) => s.value = null)
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          l("span", Tm, f(c.label), 1),
          l("span", Dm, f(S(c.value)), 1),
          l("span", Em, f(k(c.share)), 1)
        ], 42, Vm))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(Qe, {
        key: 0,
        label: p.value[s.value].label,
        value: S(p.value[s.value].value),
        share: k(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), Im = ["width", "height", "viewBox", "aria-label"], Fm = { class: "text-border" }, Nm = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Rm = { class: "fill-muted-foreground text-[10px]" }, Um = ["x", "y"], Hm = ["x", "y"], qm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Km = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, s5 = /* @__PURE__ */ O({
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
    }), he(() => d?.disconnect());
    const u = $(
      () => o.series?.length ? o.series : [{ name: "", points: o.data ?? [] }]
    ), m = (Z, ae) => ae.color ?? n[Z % n.length], h = $(() => u.value.flatMap((Z) => Z.points)), p = $(() => h.value.some((Z) => typeof Z.r == "number")), x = { top: 12, right: 16, bottom: 32, left: 48 }, A = $(() => Math.max(10, s.value - x.left - x.right)), w = $(() => Math.max(10, o.height - x.top - x.bottom));
    function S(Z) {
      if (Z.length === 0)
        return [0, 1];
      const ae = Math.min(...Z), te = Math.max(...Z), J = te - ae || Math.abs(te) || 1;
      return [ae - J * 0.08, te + J * 0.08];
    }
    const k = $(() => S(h.value.map((Z) => Z.x))), g = $(() => S(h.value.map((Z) => Z.y))), v = (Z) => {
      const [ae, te] = k.value;
      return x.left + (Z - ae) / (te - ae) * A.value;
    }, c = (Z) => {
      const [ae, te] = g.value;
      return x.top + w.value - (Z - ae) / (te - ae) * w.value;
    }, C = $(() => Math.max(...h.value.map((Z) => Z.r ?? 0), 0));
    function B(Z) {
      if (!p.value || !C.value)
        return 4;
      const ae = Math.max(0, Z.r ?? 0) / C.value;
      return 3 + Math.sqrt(ae) * (o.maxRadius - 3);
    }
    function P([Z, ae]) {
      return Array.from({ length: 5 }, (te, J) => Z + (ae - Z) / 4 * J);
    }
    const R = $(() => P(k.value)), D = $(() => P(g.value)), ee = (Z) => o.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), H = (Z) => o.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), G = $(() => {
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
        l("g", Fm, [
          (t(!0), a(_, null, V(D.value, (te, J) => (t(), a("line", {
            key: `gy-${J}`,
            x1: x.left,
            x2: x.left + A.value,
            y1: c(te),
            y2: c(te),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": J === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Nm))), 128))
        ]),
        l("g", Rm, [
          (t(!0), a(_, null, V(D.value, (te, J) => (t(), a("text", {
            key: `ty-${J}`,
            x: x.left - 8,
            y: c(te) + 3,
            "text-anchor": "end"
          }, f(H(te)), 9, Um))), 128)),
          (t(!0), a(_, null, V(R.value, (te, J) => (t(), a("text", {
            key: `tx-${J}`,
            x: v(te),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ee(te)), 9, Hm))), 128))
        ]),
        (t(!0), a(_, null, V(u.value, (te, J) => (t(), a("g", {
          key: `s-${J}`
        }, [
          (t(!0), a(_, null, V(te.points, (W, M) => (t(), a("circle", {
            key: `p-${J}-${M}`,
            cx: v(W.x),
            cy: c(W.y),
            r: B(W),
            fill: m(J, te),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(J, te),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== J || i.value.p !== M) ? 0.35 : 1,
            onMouseenter: (N) => i.value = { s: J, p: M },
            onMouseleave: ae[0] || (ae[0] = (N) => i.value = null)
          }, null, 40, qm))), 128))
        ]))), 128))
      ], 8, Im)),
      G.value ? (t(), T(Qe, {
        key: 0,
        label: G.value.point.label ?? G.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(G.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(G.value.point.y)}`,
        share: p.value && G.value.point.r != null ? String(G.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : y("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", Km, [
        (t(!0), a(_, null, V(u.value, (te, J) => (t(), a("span", {
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
}), Gm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Wm = ["width", "height", "viewBox"], Zm = ["points"], Jm = ["x1", "y1", "x2", "y2"], Ym = ["points", "fill", "stroke"], Xm = ["cx", "cy", "fill", "onMouseenter"], Qm = ["x", "y", "text-anchor"], ep = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, tp = { class: "truncate" }, r5 = /* @__PURE__ */ O({
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
      () => o.series.map((c, C) => ({
        ...c,
        color: c.color ?? n[C % n.length]
      }))
    ), s = $(() => r.value[0]?.points.map((c) => c.label) ?? []), i = $(() => s.value.length), d = $(() => o.height), u = $(() => d.value / 2), m = $(() => d.value / 2 - 34), h = $(() => {
      const c = Math.max(...r.value.flatMap((P) => P.points.map((R) => R.value)), 0);
      if (c <= 0)
        return 1;
      const C = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((P) => c <= P * C) ?? 10) * C;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function x(c, C) {
      const B = p(c);
      return {
        x: u.value + Math.cos(B) * m.value * C,
        y: u.value + Math.sin(B) * m.value * C
      };
    }
    function A(c) {
      return Array.from({ length: i.value }, (C, B) => {
        const P = x(B, c);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = $(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: A(c) }))), S = $(
      () => r.value.map((c) => {
        const C = c.points.map((B) => Math.max(0, B.value) / h.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: C.map((B, P) => {
            const R = x(P, B);
            return `${R.x.toFixed(2)},${R.y.toFixed(2)}`;
          }).join(" "),
          dots: C.map((B, P) => x(P, B))
        };
      })
    ), k = $(
      () => s.value.map((c, C) => {
        const B = p(C), P = u.value + Math.cos(B) * (m.value + 14), R = u.value + Math.sin(B) * (m.value + 14), D = Math.cos(B);
        return {
          label: c,
          x: P,
          y: R + 3,
          anchor: Math.abs(D) < 0.2 ? "middle" : D > 0 ? "start" : "end"
        };
      })
    ), g = K(null), v = (c) => o.format ? o.format(c) : new Intl.NumberFormat().format(c);
    return (c, C) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", Gm, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(_, null, V(w.value, (B) => (t(), a("polygon", {
          key: B.f,
          points: B.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Zm))), 128)),
        (t(!0), a(_, null, V(s.value, (B, P) => (t(), a("line", {
          key: `spoke-${P}`,
          x1: u.value,
          y1: u.value,
          x2: x(P, 1).x,
          y2: x(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Jm))), 128)),
        (t(!0), a(_, null, V(S.value, (B, P) => (t(), a("g", {
          key: `s-${P}`
        }, [
          l("polygon", {
            points: B.outline,
            fill: B.color,
            "fill-opacity": "0.16",
            stroke: B.color,
            "stroke-width": "2"
          }, null, 8, Ym),
          (t(!0), a(_, null, V(B.dots, (R, D) => (t(), a("circle", {
            key: D,
            cx: R.x,
            cy: R.y,
            r: "3",
            fill: B.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => g.value = {
              series: B.name,
              axis: s.value[D],
              value: B.values[D]?.value ?? 0
            },
            onMouseleave: C[0] || (C[0] = (ee) => g.value = null)
          }, null, 40, Xm))), 128))
        ]))), 128)),
        (t(!0), a(_, null, V(k.value, (B, P) => (t(), a("text", {
          key: `l-${P}`,
          x: B.x,
          y: B.y,
          "text-anchor": B.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(B.label), 9, Qm))), 128))
      ], 8, Wm)),
      e.showLegend ? (t(), a("ul", ep, [
        (t(!0), a(_, null, V(r.value, (B, P) => (t(), a("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: B.color })
          }, null, 4),
          l("span", tp, f(B.name), 1)
        ]))), 128))
      ])) : y("", !0),
      g.value ? (t(), T(Qe, {
        key: 1,
        label: `${g.value.series} — ${g.value.axis}`,
        value: v(g.value.value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), ap = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, np = ["width", "height", "viewBox"], lp = ["cx", "cy", "r"], op = ["d", "fill", "fill-opacity", "onMouseenter"], sp = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, rp = { class: "min-w-0 flex-1 truncate capitalize" }, ip = { class: "font-medium tabular-nums" }, i5 = /* @__PURE__ */ O({
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
      const w = Math.PI * 2 / A;
      return o.data.map((S, k) => {
        const g = Math.sqrt(Math.max(0, S.value) / u.value), v = d.value * g, c = k * w - Math.PI / 2, C = c + w;
        return {
          ...S,
          color: n[k % n.length],
          share: u.value === 0 ? 0 : S.value / u.value,
          path: h(i.value, c, C, v)
        };
      });
    });
    function h(A, w, S, k) {
      if (k <= 0)
        return "";
      if (S - w >= Math.PI * 2 - 1e-6)
        return `M${A - k},${A} A${k},${k} 0 1 1 ${A + k},${A} A${k},${k} 0 1 1 ${A - k},${A} Z`;
      const g = S - w > Math.PI ? 1 : 0, v = A + Math.cos(w) * k, c = A + Math.sin(w) * k, C = A + Math.cos(S) * k, B = A + Math.sin(S) * k;
      return `M${A},${A} L${v.toFixed(2)},${c.toFixed(2)} A${k.toFixed(2)},${k.toFixed(2)} 0 ${g} 1 ${C.toFixed(2)},${B.toFixed(2)} Z`;
    }
    const p = $(() => [0.5, 0.75, 1].map((A) => d.value * A)), x = (A) => o.format ? o.format(A) : new Intl.NumberFormat().format(A);
    return (A, w) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", ap, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(_, null, V(p.value, (S) => (t(), a("circle", {
          key: S,
          cx: i.value,
          cy: i.value,
          r: S,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, lp))), 128)),
        (t(!0), a(_, null, V(m.value, (S, k) => (t(), a("path", {
          key: k,
          d: S.path,
          fill: S.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === k ? 0.75 : 0.3,
          onMouseenter: (g) => r.value = k,
          onMouseleave: w[0] || (w[0] = (g) => r.value = null)
        }, null, 40, op))), 128))
      ], 8, np)),
      e.showLegend ? (t(), a("ul", sp, [
        (t(!0), a(_, null, V(m.value, (S, k) => (t(), a("li", {
          key: k,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: S.color })
          }, null, 4),
          l("span", rp, f(S.label), 1),
          l("span", ip, f(x(S.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      r.value !== null ? (t(), T(Qe, {
        key: 1,
        label: m.value[r.value].label,
        value: x(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : y("", !0)
    ]));
  }
}), dp = ["width", "height"], up = ["x1", "x2", "y1", "y2"], cp = ["x", "y"], fp = ["x", "y"], mp = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], pp = ["x", "y", "width", "height", "fill", "fill-opacity"], vp = ["d", "stroke"], gp = ["cx", "cy", "fill"], hp = ["x", "y"], bp = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, xp = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, yp = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, kp = { class: "text-xs font-semibold tabular-nums" }, $p = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, wp = { class: "text-muted-foreground" }, d5 = /* @__PURE__ */ O({
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
    }), he(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], m = $(
      () => o.bars.map((J, W) => ({
        ...J,
        color: J.color ?? d[W % d.length]
      }))
    ), h = $(
      () => o.lines.map((J, W) => ({
        ...J,
        color: J.color ?? u[W % u.length]
      }))
    ), p = $(
      () => m.value[0]?.points.map((J) => J.label) ?? h.value[0]?.points.map((J) => J.label) ?? []
    ), x = $(() => p.value.length), A = $(() => o.lineAxis === "right"), w = $(() => ({
      top: 12,
      right: A.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), S = $(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, o.height - w.value.top - w.value.bottom)
    }));
    function k(J) {
      const W = Math.max(...J, 0);
      if (W <= 0)
        return 1;
      const M = 10 ** Math.floor(Math.log10(W));
      return ([1, 2, 2.5, 5, 10].find((L) => W <= L * M) ?? 10) * M;
    }
    const g = $(
      () => k([
        ...m.value.flatMap((J) => J.points.map((W) => W.value)),
        ...A.value ? [] : h.value.flatMap((J) => J.points.map((W) => W.value))
      ])
    ), v = $(
      () => A.value ? k(h.value.flatMap((J) => J.points.map((W) => W.value))) : g.value
    ), c = $(() => S.value.w / Math.max(1, x.value)), C = $(() => c.value * 0.6), B = $(() => C.value / Math.max(1, m.value.length));
    function P(J) {
      return w.value.left + J * c.value + c.value / 2;
    }
    const R = $(
      () => m.value.flatMap(
        (J, W) => J.points.map((M, N) => {
          const L = Math.max(0, M.value) / g.value * S.value.h;
          return {
            x: P(N) - C.value / 2 + W * B.value,
            y: w.value.top + S.value.h - L,
            w: Math.max(0, B.value - 2),
            h: L,
            color: J.color,
            index: N,
            name: J.name,
            value: M.value,
            label: M.label
          };
        })
      )
    ), D = $(
      () => h.value.map((J) => {
        const W = J.points.map((M, N) => ({
          x: P(N),
          y: w.value.top + S.value.h - Math.max(0, M.value) / v.value * S.value.h,
          value: M.value
        }));
        return {
          ...J,
          pts: W,
          d: W.map((M, N) => `${N === 0 ? "M" : "L"}${M.x.toFixed(2)},${M.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((J) => ({
        y: w.value.top + S.value.h * J,
        left: g.value * (1 - J),
        right: v.value * (1 - J)
      }))
    ), H = $(() => Math.max(1, Math.ceil(x.value / 10)));
    function G(J) {
      return J === x.value - 1 || J % H.value === 0;
    }
    const Z = (J) => o.format ? o.format(J) : ae(J);
    function ae(J) {
      return Math.abs(J) >= 1e6 ? `${(J / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(J) >= 1e3 ? `${(J / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(J * 100) / 100);
    }
    const te = $(() => {
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
          ...h.value.map((W) => ({
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
      x.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(_, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: W[0] || (W[0] = (M) => s.value = null)
        }, [
          (t(!0), a(_, null, V(ee.value, (M) => (t(), a("line", {
            key: `g-${M.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: M.y,
            y2: M.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, up))), 128)),
          (t(!0), a(_, null, V(ee.value, (M) => (t(), a("text", {
            key: `lt-${M.y}`,
            x: w.value.left - 8,
            y: M.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(M.left)), 9, cp))), 128)),
          A.value ? (t(!0), a(_, { key: 0 }, V(ee.value, (M) => (t(), a("text", {
            key: `rt-${M.y}`,
            x: r.value - w.value.right + 8,
            y: M.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(M.right)), 9, fp))), 128)) : y("", !0),
          (t(!0), a(_, null, V(p.value, (M, N) => (t(), a("rect", {
            key: `hit-${N}`,
            x: w.value.left + N * c.value,
            y: w.value.top,
            width: c.value,
            height: S.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === N ? 0.4 : 0,
            onMouseenter: (L) => s.value = N
          }, null, 40, mp))), 128)),
          (t(!0), a(_, null, V(R.value, (M, N) => (t(), a("rect", {
            key: `b-${N}`,
            x: M.x,
            y: M.y,
            width: M.w,
            height: M.h,
            fill: M.color,
            "fill-opacity": s.value === null || s.value === M.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, pp))), 128)),
          (t(!0), a(_, null, V(D.value, (M, N) => (t(), a("g", {
            key: `l-${N}`
          }, [
            l("path", {
              d: M.d,
              fill: "none",
              stroke: M.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, vp),
            s.value !== null && M.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: M.pts[s.value].x,
              cy: M.pts[s.value].y,
              r: "4",
              fill: M.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, gp)) : y("", !0)
          ]))), 128)),
          (t(!0), a(_, null, V(p.value, (M, N) => ce((t(), a("text", {
            key: `x-${N}`,
            x: P(N),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(M), 9, hp)), [
            [Ve, G(N)]
          ])), 128))
        ], 40, dp)),
        te.value ? (t(), a("div", bp, [
          l("p", xp, f(te.value.label), 1),
          (t(!0), a(_, null, V(te.value.rows, (M, N) => (t(), a("div", {
            key: N,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: M.color })
            }, null, 4),
            l("span", yp, f(M.name), 1),
            l("span", kp, f(Z(M.value)), 1)
          ]))), 128))
        ])) : y("", !0),
        e.showLegend ? (t(), a("div", $p, [
          (t(!0), a(_, null, V([...m.value, ...h.value], (M, N) => (t(), a("span", {
            key: N,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: M.color })
            }, null, 4),
            l("span", wp, f(M.name), 1)
          ]))), 128))
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Cp = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Sp = { class: "text-muted-foreground" }, Mp = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Bp = ["width", "height"], Ap = ["x", "y"], Pp = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], _p = ["x", "y"], zp = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Op = { class: "text-[11px] font-medium capitalize" }, jp = { class: "text-muted-foreground text-[11px] capitalize" }, Lp = { class: "text-sm font-semibold tabular-nums" }, Vp = { class: "text-muted-foreground text-xs font-normal" }, u5 = /* @__PURE__ */ O({
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
      i = new ResizeObserver((C) => {
        r.value = Math.max(160, C[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), he(() => i?.disconnect());
    const d = $(() => o.series[0]?.points.map((C) => C.label) ?? []), u = $(() => o.series.length), m = $(() => d.value.length), h = $(() => Math.min(140, Math.max(60, r.value * 0.16))), p = $(() => Math.max(1, r.value - h.value - 8)), x = $(() => p.value / Math.max(1, m.value)), A = $(() => Math.max(1, (o.height - 8) / Math.max(1, u.value)));
    function w(C) {
      if (C === 0)
        return "var(--muted)";
      const B = Math.max(1, o.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(C / B * 100)}%, var(--muted))`;
    }
    function S(C) {
      for (let B = 0; B < o.buckets.length; B++) {
        const P = o.buckets[B].max;
        if (P === void 0 || C < P)
          return B;
      }
      return o.buckets.length - 1;
    }
    const k = $(
      () => o.series.flatMap(
        (C, B) => C.points.map((P, R) => {
          const D = S(P.value);
          return {
            row: B,
            col: R,
            x: h.value + R * x.value,
            y: 4 + B * A.value,
            w: Math.max(1, x.value - 1),
            h: Math.max(1, A.value - 4),
            colour: w(D),
            label: P.label,
            value: P.value,
            rowName: C.name,
            bucketLabel: o.buckets[D].label
          };
        })
      )
    ), g = $(() => x.value < 2), v = $(() => s.value ? k.value.find((C) => C.row === s.value.row && C.col === s.value.col) ?? null : null), c = (C) => o.format ? o.format(C) : new Intl.NumberFormat().format(C);
    return (C, B) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      u.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(_, { key: 1 }, [
        l("div", Cp, [
          (t(!0), a(_, null, V(e.buckets, (P, R) => (t(), a("span", {
            key: R,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            l("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: w(R) })
            }, null, 4),
            l("span", Sp, f(P.label), 1)
          ]))), 128))
        ]),
        g.value ? (t(), a("p", Mp, f(m.value) + " columns - too many to label individually ", 1)) : y("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: B[0] || (B[0] = (P) => s.value = null)
        }, [
          (t(!0), a(_, null, V(e.series, (P, R) => (t(), a("text", {
            key: `r-${R}`,
            x: h.value - 10,
            y: 4 + R * A.value + A.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(P.name), 9, Ap))), 128)),
          (t(!0), a(_, null, V(k.value, (P, R) => (t(), a("rect", {
            key: R,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (D) => s.value = { row: P.row, col: P.col }
          }, null, 40, Pp))), 128)),
          e.showColumnLabels && !g.value ? (t(!0), a(_, { key: 0 }, V(d.value, (P, R) => (t(), a("text", {
            key: `c-${R}`,
            x: h.value + R * x.value + x.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(P), 9, _p))), 128)) : y("", !0)
        ], 40, Bp)),
        v.value ? (t(), a("div", zp, [
          l("p", Op, f(v.value.label), 1),
          l("p", jp, f(v.value.rowName), 1),
          l("p", Lp, [
            U(f(c(v.value.value)) + " ", 1),
            l("span", Vp, "(" + f(v.value.bucketLabel) + ")", 1)
          ])
        ])) : y("", !0)
      ], 64))
    ], 512));
  }
}), Tp = ["viewBox"], Dp = { key: 0 }, Ep = ["id"], Ip = ["stop-color"], Fp = ["stop-color"], Np = ["d", "fill"], Rp = ["d", "stroke"], Jt = 100, qe = 30, it = /* @__PURE__ */ O({
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
        x: A / (u.length - 1) * Jt,
        y: qe - (x - m) / p * (qe - 4) - 2
      }));
    });
    function s(u) {
      const m = u.length;
      if (m < 2)
        return "";
      const h = [], p = [];
      for (let w = 0; w < m - 1; w++)
        h[w] = u[w + 1].x - u[w].x, p[w] = h[w] === 0 ? 0 : (u[w + 1].y - u[w].y) / h[w];
      const x = [p[0]];
      for (let w = 1; w < m - 1; w++)
        if (p[w - 1] * p[w] <= 0)
          x[w] = 0;
        else {
          const S = 2 * h[w] + h[w - 1], k = h[w] + 2 * h[w - 1];
          x[w] = (S + k) / (S / p[w - 1] + k / p[w]);
        }
      x[m - 1] = p[m - 2];
      let A = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let w = 0; w < m - 1; w++) {
        const S = h[w] / 3;
        A += ` C${(u[w].x + S).toFixed(2)},${(u[w].y + x[w] * S).toFixed(2)} ${(u[w + 1].x - S).toFixed(2)},${(u[w + 1].y - x[w + 1] * S).toFixed(2)} ${u[w + 1].x.toFixed(2)},${u[w + 1].y.toFixed(2)}`;
      }
      return A;
    }
    const i = $(() => {
      const u = r.value;
      return u.length < 2 ? "" : o.smooth ? s(u) : u.map((m, h) => `${h === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), d = $(() => {
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
      e.filled ? (t(), a("defs", Dp, [
        l("linearGradient", {
          id: `pk-spark-${b(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          l("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Ip),
          l("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Fp)
        ], 8, Ep)
      ])) : y("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${b(n)})`
      }, null, 8, Np)) : y("", !0),
      l("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Rp)
    ], 12, Tp)) : y("", !0);
  }
}), Up = { class: "flex items-center gap-1 text-xs" }, Hp = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, qp = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ya = /* @__PURE__ */ O({
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
    return (d, u) => (t(), a("span", Up, [
      l("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        l("span", Hp, f(s.value), 1),
        U(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", qp, f(e.comparison), 1)) : y("", !0)
    ]));
  }
}), Kp = ["data-collapsed"], Gp = { class: "flex flex-wrap items-start justify-between gap-2" }, Wp = { class: "flex min-w-0 items-start gap-2" }, Zp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jp = ["d"], Yp = { class: "min-w-0" }, Xp = { class: "text-sm font-medium" }, Qp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, ev = { class: "flex shrink-0 items-center gap-1.5" }, tv = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, av = ["aria-pressed", "onClick"], nv = ["aria-expanded", "aria-label", "title"], lv = ["aria-label"], ov = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sv = ["d"], rv = /* @__PURE__ */ O({
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
    const o = e, n = za(), r = K(o.defaultCollapsed), s = $(() => !!o.icon && !n.icon), i = $(() => {
      if (!(o.fitBody && !o.loading && !o.error))
        return { minHeight: `${o.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      l("div", Gp, [
        l("div", Wp, [
          q(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", Zp, [
              l("path", {
                d: b(de)(e.icon)
              }, null, 8, Jp)
            ])) : y("", !0)
          ]),
          l("div", Yp, [
            l("p", Xp, f(e.label), 1),
            e.description ? (t(), a("p", Qp, f(e.description), 1)) : y("", !0),
            q(d.$slots, "trend")
          ])
        ]),
        l("div", ev, [
          q(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", tv, [
            (t(!0), a(_, null, V(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (h) => d.$emit("update:period", m.value)
            }, f(m.label), 11, av))), 128))
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
              class: z(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, nv)) : y("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (m) => d.$emit("hide"))
          }, [
            (t(), a("svg", ov, [
              l("path", {
                d: b(de)("eye-off")
              }, null, 8, sv)
            ]))
          ], 8, lv)) : y("", !0)
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
    ], 10, Kp));
  }
}), iv = ["aria-pressed", "aria-label", "title"], dv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, uv = ["d"], cv = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, fv = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, mv = ["href"], pv = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vv = ["d"], gv = ["aria-label", "onClick"], hv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bv = ["d"], xv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yv = ["d"], kv = {
  key: 0,
  class: "flex flex-col gap-1"
}, $v = ["onClick"], wv = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Cv = ["d"], Sv = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Mv = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!1), i = K(!1), d = $(
      () => n.catalog.filter((h) => !n.items.some((p) => p.id === h.id))
    );
    function u(h) {
      r(
        "update:items",
        n.items.filter((p) => p.id !== h)
      );
    }
    function m(h) {
      r("update:items", [...n.items, h]), i.value = !1;
    }
    return (h, p) => (t(), a(_, null, [
      I(rv, {
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
            (t(), a("svg", dv, [
              l("path", {
                d: b(de)(s.value ? "check" : "pencil")
              }, null, 8, uv)
            ]))
          ], 8, iv)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), a("div", cv, [
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
          ])) : (t(), a("div", fv, [
            (t(!0), a(_, null, V(e.items, (x) => (t(), a("div", {
              key: x.id,
              class: "inline-flex items-center gap-1"
            }, [
              l("a", {
                href: x.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", pv, [
                  l("path", {
                    d: b(de)(x.icon)
                  }, null, 8, vv)
                ])),
                U(" " + f(x.label), 1)
              ], 8, mv),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${x.label}`,
                onClick: (A) => u(x.id)
              }, [
                (t(), a("svg", hv, [
                  l("path", {
                    d: b(de)("x")
                  }, null, 8, bv)
                ]))
              ], 8, gv)) : y("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (x) => i.value = !0)
            }, [
              (t(), a("svg", xv, [
                l("path", {
                  d: b(de)("plus")
                }, null, 8, yv)
              ])),
              p[8] || (p[8] = U(" Add ", -1))
            ])) : y("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      I(Ze, {
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
          d.value.length ? (t(), a("ul", kv, [
            (t(!0), a(_, null, V(d.value, (x) => (t(), a("li", {
              key: x.id
            }, [
              l("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (A) => m(x)
              }, [
                (t(), a("svg", wv, [
                  l("path", {
                    d: b(de)(x.icon)
                  }, null, 8, Cv)
                ])),
                U(" " + f(x.label), 1)
              ], 8, $v)
            ]))), 128))
          ])) : (t(), a("p", Sv, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Bv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Av = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Pv = { class: "relative w-full max-w-xl" }, _v = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zv = ["d"], Ov = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, jv = ["data-slot"], Lv = { class: "px-5 py-4" }, Vv = { class: "mb-3 text-sm font-semibold" }, Tv = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Dv = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ev = ["d"], Iv = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, c5 = /* @__PURE__ */ O({
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
      return typeof u == "string" ? u : Xt(u);
    }), s = Ke({
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
        links: u ? m.links.filter((h) => h.label.toLowerCase().includes(u)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (u, m) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Te)])
    }, [
      l("header", null, [
        l("h1", Bv, f(e.title), 1),
        e.description ? (t(), a("p", Av, f(e.description), 1)) : y("", !0)
      ]),
      l("div", Pv, [
        (t(), a("svg", _v, [
          l("path", {
            d: b(de)("search")
          }, null, 8, zv)
        ])),
        I(ge, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (h) => n.value = h),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), a("div", Ov, [
        (t(!0), a(_, null, V(d.value, (h) => (t(), a("section", {
          key: h.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${h.key}`
        }, [
          l("div", Lv, [
            l("h2", Vv, f(h.title), 1),
            l("div", Tv, [
              (t(!0), a(_, null, V(h.links, (p) => (t(), T(xe(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: z(b(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), a("svg", Dv, [
                    l("path", {
                      d: b(de)(p.icon)
                    }, null, 8, Ev)
                  ])),
                  U(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, jv))), 128))
      ])) : (t(), a("p", Iv, ' Nothing matches "' + f(n.value) + '". ', 1))
    ], 2));
  }
}), Fv = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Nv = { class: "flex flex-1 flex-col gap-1 p-4" }, Rv = { class: "text-muted-foreground relative text-xs font-medium" }, Uv = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Hv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, qv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Kv = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, f5 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), a("div", Fv, [
      l("div", Nv, [
        l("p", Rv, f(e.label), 1),
        e.loading ? (t(), T($e, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", Uv, " Could not load ")) : (t(), a("span", Hv, f(o(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(ya, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", qv, f(e.description), 1)) : y("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", Kv, [
        I(it, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : y("", !0)
    ]));
  }
}), Gv = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Wv = { class: "flex flex-col gap-1 p-4" }, Zv = { class: "flex items-start justify-between gap-2" }, Jv = { class: "text-sm font-medium" }, Yv = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Xv = { class: "mt-1 flex flex-wrap items-center gap-2" }, Qv = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, eg = {
  key: 0,
  class: "-mb-px"
}, ot = /* @__PURE__ */ O({
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
    return (i, d) => (t(), a("div", Gv, [
      l("div", Wv, [
        l("div", Zv, [
          l("p", Jv, f(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", Yv, f(e.caption), 1)) : y("", !0),
        l("div", Xv, [
          e.loading ? (t(), T($e, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", Qv, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : y("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", eg, [
        I(it, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : y("", !0)
    ]));
  }
}), tg = { class: "relative flex flex-col gap-2" }, ag = ["aria-label"], ng = ["onMouseenter"], lg = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, og = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, sg = { class: "truncate" }, rg = { class: "text-sm font-semibold tabular-nums" }, m5 = /* @__PURE__ */ O({
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
    ], r = $(() => o.segments.reduce((h, p) => h + Math.max(0, p.value), 0)), s = $(() => Math.max(o.total ?? r.value, r.value, 1)), i = $(
      () => o.segments.map((h, p) => {
        const x = Math.max(0, h.value) / s.value;
        return {
          ...h,
          color: h.color ?? n[p % n.length],
          share: x,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: h.value > 0 ? `max(2px, ${(x * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (h) => o.format ? o.format(h) : new Intl.NumberFormat().format(h), u = K(null), m = (h) => `${(h * 100).toFixed(h > 0 && h < 0.01 ? 1 : 0)}%`;
    return (h, p) => (t(), a("div", tg, [
      l("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((x) => `${x.label} ${d(x.value)}`).join(", ")
      }, [
        (t(!0), a(_, null, V(i.value, (x, A) => (t(), a("span", {
          key: A,
          class: z(["h-full transition-all", [
            A === 0 ? "rounded-l-full" : "",
            A === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: x.width,
            background: x.color,
            opacity: u.value === null || u.value === A ? 1 : 0.4
          }),
          onMouseenter: (w) => u.value = A,
          onMouseleave: p[0] || (p[0] = (w) => u.value = null)
        }, null, 46, ng))), 128))
      ], 12, ag),
      e.showLegend ? (t(), a("div", lg, [
        (t(!0), a(_, null, V(i.value, (x, A) => (t(), a("div", {
          key: A,
          class: "flex min-w-0 flex-col"
        }, [
          l("span", og, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: x.color })
            }, null, 4),
            l("span", sg, f(x.label), 1)
          ]),
          l("span", rg, f(d(x.value)), 1)
        ]))), 128))
      ])) : y("", !0),
      u.value !== null ? (t(), T(Qe, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: m(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : y("", !0)
    ]));
  }
}), ig = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, dg = ["data-heading"], ug = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, cg = { class: "text-muted-foreground truncate" }, fg = ["aria-label"], p5 = /* @__PURE__ */ O({
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
        const d = i.bar.segments.reduce((m, h) => m + Math.max(0, h.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
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
    return (i, d) => (t(), a("div", ig, [
      (t(!0), a(_, null, V(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), a("div", ug, [
          l("span", cg, f(u.label), 1),
          l("span", {
            class: z(["shrink-0 font-medium tabular-nums", u.tone ? n[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(_, null, V(u.segments, (m, h) => (t(), a("span", {
            key: h,
            class: z(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ne({ width: m.width })
          }, null, 6))), 128))
        ], 8, fg)) : y("", !0)
      ], 8, dg))), 128))
    ]));
  }
}), mg = {
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
}, pg = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function vg(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function gg(e, o) {
  return o || (e ? mg[vg(e)] ?? "neutral" : "neutral");
}
function hg(e, o) {
  return pg[gg(e, o)];
}
const be = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const o = e, n = $(() => hg(o.status, o.tone));
    return (r, s) => (t(), T(Ge, {
      variant: n.value,
      class: z(o.class)
    }, {
      default: j(() => [
        q(r.$slots, "default", {}, () => [
          U(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), bg = ["data-layout"], xg = ["src", "alt"], yg = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, kg = ["src"], $g = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, wg = ["onMouseenter"], Cg = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Sg = { class: "min-w-0" }, Mg = { class: "truncate text-sm font-medium" }, Bg = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Ag = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Pg = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, _g = { class: "min-w-0" }, zg = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Og = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, jg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lg = ["d"], Vg = ["aria-label"], Tg = /* @__PURE__ */ O({
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
    function d(k) {
      if (typeof k != "string")
        return null;
      const g = k.trim();
      return g === "" ? null : /^(https?:)?\/\//i.test(g) ? g : null;
    }
    const u = $(() => {
      const k = [r.item.image, ...r.item.images ?? []].map(d).filter((g) => g !== null);
      return [...new Set(k)];
    }), m = $(() => u.value[i.value] ?? u.value[0] ?? null), h = $(
      () => r.item.label.split(/\s+/).slice(0, 2).map((k) => k[0]?.toUpperCase() ?? "").join("")
    ), p = $(() => {
      const k = r.item.progress;
      if (!k)
        return null;
      const g = Math.max(k.total ?? 100, k.value, 1);
      return `${Math.min(100, Math.max(0, k.value / g * 100)).toFixed(2)}%`;
    }), x = $(() => u.value.length > 1 ? u.value[1] : null), A = $(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = $(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function S(k) {
      k.stopPropagation(), s("cart", r.item.key);
    }
    return (k, g) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: z(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: g[0] || (g[0] = (v) => s("select", e.item.key)),
      onKeydown: g[1] || (g[1] = Oa(me((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: g[2] || (g[2] = (v) => i.value = 0)
    }, [
      l("div", {
        class: z([
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
        }, null, 8, xg)) : (t(), a("span", yg, f(h.value), 1)),
        e.layout === "grid" && x.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: x.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, kg)) : y("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", $g, [
          (t(!0), a(_, null, V(u.value, (v, c) => (t(), a("span", {
            key: c,
            class: z(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (C) => i.value = c
          }, null, 42, wg))), 128))
        ])) : y("", !0)
      ], 2),
      l("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        l("div", Cg, [
          l("div", Sg, [
            l("p", Mg, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", Bg, f(e.item.caption), 1)) : y("", !0),
            e.item.facts?.length ? (t(), a("p", Ag, f(e.item.facts.join(" · ")), 1)) : y("", !0)
          ]),
          e.item.status ? (t(), T(be, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : y("", !0)
        ]),
        l("div", Pg, [
          l("div", _g, [
            e.item.price ? (t(), a("p", zg, f(e.item.price), 1)) : y("", !0),
            w.value ? (t(), a("p", Og, f(w.value), 1)) : y("", !0)
          ]),
          A.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: S
          }, [
            (t(), a("svg", jg, [
              l("path", {
                d: b(de)("cart")
              }, null, 8, Lg)
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
            class: z(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, Vg)) : y("", !0)
      ], 2)
    ], 42, bg));
  }
});
function Dg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Eg(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Ig(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Fg = ["data-featured", "data-recommended"], Ng = { class: "flex flex-col gap-1" }, Rg = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Ug = { key: 0 }, Hg = { key: 1 }, qg = { key: 2 }, Kg = { key: 3 }, Gg = { class: "text-sm font-semibold" }, Wg = { class: "flex items-baseline gap-1" }, Zg = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Jg = { class: "text-muted-foreground text-sm" }, Yg = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Xg = { class: "text-muted-foreground mt-1 text-xs" }, Qg = { class: "flex flex-1 flex-col gap-2 text-sm" }, eh = { class: "flex min-w-0 items-start gap-2" }, th = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ah = ["d"], nh = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, lh = ["d"], oh = { class: "capitalize" }, sh = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, rh = { class: "text-foreground font-medium" }, ih = { class: "mt-auto flex gap-2 pt-2" }, dh = /* @__PURE__ */ O({
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
      return Object.entries(m).map(([h, p]) => ({
        key: h,
        label: h.replace(/_/g, " "),
        granted: Ig(p.value),
        display: Eg(p.value)
      }));
    }), u = $(() => n.plan.extraPerks ?? []);
    return (m, h) => (t(), a("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      l("header", Ng, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", Rg, [
          e.plan.recommended ? (t(), a("span", Ug, "Recommended")) : e.plan.featured ? (t(), a("span", Hg, "Featured")) : y("", !0),
          e.plan.trial ? (t(), a("span", qg, "Trial")) : y("", !0),
          e.plan.active === !1 ? (t(), a("span", Kg, "Inactive")) : y("", !0)
        ])) : y("", !0),
        l("h3", Gg, f(e.plan.name), 1),
        l("p", Wg, [
          l("span", Zg, f(s.value), 1),
          l("span", Jg, f(b(Dg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", Yg, f(e.plan.shortDescription), 1)) : y("", !0),
        l("p", Xg, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      l("ul", Qg, [
        (t(!0), a(_, null, V(d.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          l("span", eh, [
            l("span", {
              class: z(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", th, [
                l("path", {
                  d: b(de)("check")
                }, null, 8, ah)
              ])) : (t(), a("svg", nh, [
                l("path", {
                  d: b(de)("x")
                }, null, 8, lh)
              ]))
            ], 2),
            l("span", oh, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", sh, f(p.display), 1)) : y("", !0)
        ]))), 128)),
        (t(!0), a(_, null, V(u.value, (p, x) => (t(), a("li", {
          key: `extra-${x}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          l("span", null, f(p.key), 1),
          l("span", rh, f(p.value), 1)
        ]))), 128))
      ]),
      l("footer", ih, [
        I(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: h[0] || (h[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...h[2] || (h[2] = [
            U(" Edit ", -1)
          ])]),
          _: 1
        }),
        I(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: h[1] || (h[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...h[3] || (h[3] = [
            U(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Fg));
  }
}), uh = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, ch = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, fh = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, mh = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, ph = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, v5 = /* @__PURE__ */ O({
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
      class: z(["w-full space-y-6", e.embedded ? "" : b(Te)]),
      "data-slot": "plan-grid"
    }, [
      l("header", uh, [
        l("div", null, [
          e.title ? (t(), a("h1", ch, f(e.title), 1)) : y("", !0),
          e.description ? (t(), a("p", fh, f(e.description), 1)) : y("", !0)
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
      e.plans.length === 0 ? (t(), a("p", mh, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", ph, [
        (t(!0), a(_, null, V(e.plans, (i) => (t(), T(dh, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), vh = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, gh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, hh = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, bh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, xh = { class: "space-y-1.5" }, yh = { class: "space-y-1.5" }, kh = { class: "space-y-1.5" }, $h = { class: "space-y-1.5" }, wh = { class: "space-y-1.5" }, Ch = { class: "flex items-center gap-3 text-sm" }, Sh = { class: "flex items-center gap-3 text-sm" }, Mh = { class: "flex items-center gap-3 text-sm" }, Bh = {
  key: 0,
  class: "space-y-1.5"
}, Ah = { class: "flex items-center gap-3 text-sm" }, Ph = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, _h = { class: "space-y-1.5" }, zh = ["value"], Oh = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, jh = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Lh = ["id", "value", "onInput"], Vh = { class: "space-y-2" }, Th = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Dh = ["d"], Eh = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", vt = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", g5 = /* @__PURE__ */ O({
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
    }), r = e, s = o, i = We(n());
    function d(g, v) {
      const c = i.perks?.[g]?.value;
      return c ?? v;
    }
    function u(g, v, c) {
      const C = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: v,
          overview: c ?? C?.overview ?? ""
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
    function h(g) {
      const v = g ? { ...n(), ...g } : n();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    h(r.plan), fe(
      () => r.plan,
      (g) => h(g),
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
      const v = Object.fromEntries(r.modules.map((B) => [B.key, B])), c = new Set(g);
      for (const B of r.modules)
        if (!c.has(B.key))
          for (const P of B.children ?? [])
            c.delete(P);
      let C = !0;
      for (; C; ) {
        C = !1;
        for (const B of [...c])
          for (const P of v[B]?.requires ?? [])
            c.has(P) || (c.add(P), C = !0);
      }
      return [...c];
    }
    function w() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function S(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== g);
    }
    function k() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, v) => (t(), a("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : b(Te)]),
      "data-slot": "plan-editor",
      onSubmit: me(k, ["prevent"])
    }, [
      l("header", vh, [
        l("div", null, [
          l("h1", gh, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
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
      l("div", hh, [
        l("section", bh, [
          v[26] || (v[26] = l("h2", { class: "font-semibold" }, "Plan details", -1)),
          l("div", xh, [
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
          l("div", yh, [
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
          l("div", kh, [
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
              class: z(vt)
            }, null, 512), [
              [ye, i.description]
            ])
          ]),
          l("div", $h, [
            I(ke, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            ce(l("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: z(Eh)
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
          l("div", wh, [
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
          l("label", Ch, [
            I(b(Ie), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = U(" Featured ", -1))
          ]),
          l("label", Sh, [
            I(b(Ie), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = U(" Recommended ", -1))
          ]),
          l("label", Mh, [
            I(b(Ie), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Bh, [
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
          l("label", Ah, [
            I(b(Ie), {
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
        l("section", Ph, [
          v[33] || (v[33] = l("h2", { class: "font-semibold" }, "Plan perks", -1)),
          l("div", _h, [
            I(ke, null, {
              default: j(() => [...v[27] || (v[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            I(Ot, {
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
              class: z(vt),
              onInput: v[12] || (v[12] = (c) => m(
                "modules",
                c.target.value
              ))
            }, null, 40, zh)
          ]),
          (t(!0), a(_, null, V(e.limits, (c) => (t(), a("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), a("label", Oh, [
              I(b(Ie), {
                checked: !!d(c.key, !1),
                "onUpdate:checked": (C) => u(
                  c.key,
                  C,
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
              c.hint ? (t(), a("p", jh, f(c.hint), 1)) : y("", !0),
              I(ge, {
                id: `plan-limit-${c.key}`,
                "model-value": Number(d(c.key, 0)),
                type: "number",
                step: c.step ?? 1,
                required: "",
                "onUpdate:modelValue": (C) => u(
                  c.key,
                  Number(C),
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
              class: z(vt),
              onInput: (C) => m(
                c.key,
                C.target.value
              )
            }, null, 40, Lh)
          ]))), 128)),
          l("div", Vh, [
            v[32] || (v[32] = l("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(_, null, V(i.extraPerks ?? [], (c, C) => (t(), a("div", {
              key: C,
              class: "flex items-center gap-2"
            }, [
              I(ge, {
                modelValue: c.key,
                "onUpdate:modelValue": (B) => c.key = B,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(ge, {
                modelValue: c.value,
                "onUpdate:modelValue": (B) => c.value = B,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (B) => S(C)
              }, {
                default: j(() => [
                  (t(), a("svg", Th, [
                    l("path", {
                      d: b(de)("x")
                    }, null, 8, Dh)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            I(se, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: w
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
}), Ih = { class: "flex flex-col gap-4" }, Fh = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Nh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Rh = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Uh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Hh = ["d"], qh = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Kh = ["aria-pressed"], Gh = ["aria-pressed"], Wh = {
  key: 0,
  class: "flex flex-col gap-2"
}, Zh = ["aria-label"], Jh = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Yh = ["aria-pressed", "onClick"], Xh = ["aria-label"], Qh = { class: "text-muted-foreground mr-1 text-xs font-medium" }, eb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, tb = ["data-slot"], ab = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, nb = { class: "text-muted-foreground text-xs tabular-nums" }, lb = { class: "flex items-center gap-2" }, ob = ["disabled"], sb = ["disabled"], Et = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ ze({
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
  emits: /* @__PURE__ */ ze(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(""), i = Je(e, "modelValue"), d = We({}), u = We({});
    fe(s, () => x());
    function m(D) {
      const ee = D.trim();
      if (ee === "")
        return null;
      const H = Number(ee);
      return Number.isFinite(H) ? H : null;
    }
    function h() {
      const D = {};
      for (const [ee, H] of Object.entries(u))
        D[ee] = { min: m(H.min), max: m(H.max) };
      return D;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: h() };
    }
    function x() {
      r("filter", p());
    }
    function A(D, ee) {
      d[D] = d[D] === ee ? null : ee, x();
    }
    function w(D) {
      return u[D] ?? { min: "", max: "" };
    }
    function S(D, ee, H) {
      const G = u[D] ?? { min: "", max: "" };
      u[D] = { ...G, [ee]: H }, x();
    }
    function k(D) {
      D.key === "Enter" && (D.preventDefault(), r("scan", s.value.trim()));
    }
    const g = $(() => n.facets.filter((D) => (D.kind ?? "chips") === "chips")), v = $(() => n.facets.filter((D) => D.kind === "range")), c = $(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), C = K(1);
    fe(
      () => n.items.map((D) => D.key).join(","),
      () => {
        C.value = 1;
      }
    );
    const B = $(() => {
      const D = n.pageSize;
      return !D || D < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / D));
    }), P = $(() => {
      const D = n.pageSize;
      if (!D || D < 1)
        return n.items;
      const ee = (C.value - 1) * D;
      return n.items.slice(ee, ee + D);
    });
    function R(D) {
      C.value = Math.min(B.value, Math.max(1, D));
    }
    return (D, ee) => (t(), a("div", Ih, [
      c.value ? (t(), a("div", Fh, [
        l("div", Nh, [
          e.searchable ? (t(), a("div", Rh, [
            (t(), a("svg", Uh, [
              l("path", {
                d: b(de)("search")
              }, null, 8, Hh)
            ])),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: k
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : y("", !0),
          q(D.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", qh, [
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Kh),
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, Gh)
          ])) : y("", !0)
        ]),
        g.value.length || v.value.length ? (t(), a("div", Wh, [
          (t(!0), a(_, null, V(g.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", Jh, f(H.label), 1)) : y("", !0),
            (t(!0), a(_, null, V(H.options ?? [], (G) => (t(), a("button", {
              key: G.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === G.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === G.value ? "true" : "false",
              onClick: (Z) => A(H.key, G.value)
            }, f(G.label), 11, Yh))), 128))
          ], 8, Zh))), 128)),
          (t(!0), a(_, null, V(v.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            l("span", Qh, f(H.label ?? H.key), 1),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": w(H.key).min,
              "onUpdate:modelValue": (G) => S(H.key, "min", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": w(H.key).max,
              "onUpdate:modelValue": (G) => S(H.key, "max", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Xh))), 128))
        ])) : y("", !0)
      ])) : y("", !0),
      e.items.length === 0 ? (t(), a("p", eb, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : b(Fd)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(_, null, V(P.value, (H) => (t(), T(Tg, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (G) => r("select", G)),
          onCart: ee[4] || (ee[4] = (G) => r("cart", G))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, tb)),
      e.pageSize && B.value > 1 ? (t(), a("div", ab, [
        l("p", nb, " Page " + f(C.value) + " of " + f(B.value), 1),
        l("div", lb, [
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => R(C.value - 1))
          }, " Previous ", 8, ob),
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value >= B.value,
            onClick: ee[6] || (ee[6] = (H) => R(C.value + 1))
          }, " Next ", 8, sb)
        ])
      ])) : y("", !0)
    ]));
  }
}), rb = ["aria-label"], ib = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, db = { class: "min-w-0" }, ub = { class: "text-base font-semibold" }, cb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, fb = { class: "flex shrink-0 items-center gap-2" }, mb = { class: "min-h-0 flex-1 overflow-y-auto" }, pb = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, It = /* @__PURE__ */ O({
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
      const h = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (h.length === 0)
        return;
      const p = h[0], x = h[h.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), x.focus()) : !m.shiftKey && document.activeElement === x && (m.preventDefault(), p.focus());
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
    ), he(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (m, h) => (t(), T(Re, { to: "body" }, [
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
            onClick: h[0] || (h[0] = (p) => r("close"))
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
            class: z(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            l("header", ib, [
              l("div", db, [
                l("h2", ub, f(e.title), 1),
                e.description ? (t(), a("p", cb, f(e.description), 1)) : y("", !0)
              ]),
              l("div", fb, [
                q(m.$slots, "header-actions"),
                l("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: h[1] || (h[1] = (p) => r("close"))
                }, [...h[2] || (h[2] = [
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
            l("div", mb, [
              q(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", pb, [
              q(m.$slots, "footer")
            ])) : y("", !0)
          ], 10, rb)) : y("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function _e() {
  return { query: "", selected: {}, ranges: {} };
}
function vb(e, o) {
  const n = e.metrics?.[o];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[o];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function gb(e, o) {
  return !o || o.min === null && o.max === null ? !0 : !(e === null || o.min !== null && e < o.min || o.max !== null && e > o.max);
}
function Ft(e, o) {
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
    if (!gb(vb(e, r), s))
      return !1;
  return !0;
}
function hb(e, o) {
  const n = o.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function st(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (o) => o.min !== null || o.max !== null
  );
}
const bb = { class: "flex flex-col gap-6 p-4" }, xb = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, yb = { class: "text-sm font-semibold" }, kb = { class: "flex flex-wrap items-center gap-1.5" }, $b = ["aria-pressed", "onClick"], wb = { class: "text-sm font-semibold" }, Cb = { class: "flex flex-wrap items-center gap-1.5" }, Sb = { key: 0 }, ka = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(""), i = We({}), d = We({}), u = $(
      () => n.facets.filter((B) => (B.kind ?? "chips") === "chips")
    ), m = $(() => n.facets.filter((B) => B.kind === "range"));
    function h(B) {
      return B == null ? "" : String(B);
    }
    function p() {
      s.value = n.applied.query ?? "";
      for (const B of Object.keys(i))
        delete i[B];
      for (const [B, P] of Object.entries(n.applied.selected ?? {}))
        i[B] = P;
      for (const B of Object.keys(d))
        delete d[B];
      for (const [B, P] of Object.entries(n.applied.ranges ?? {}))
        d[B] = { min: h(P.min), max: h(P.max) };
    }
    fe(
      () => n.open,
      (B) => {
        B && p();
      }
    );
    function x(B) {
      const P = B.trim();
      if (P === "")
        return null;
      const R = Number(P);
      return Number.isFinite(R) ? R : null;
    }
    function A() {
      const B = {};
      for (const [P, R] of Object.entries(d))
        B[P] = { min: x(R.min), max: x(R.max) };
      return B;
    }
    function w() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: A()
      };
    }
    const S = $(() => {
      let B = n.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const P of Object.values(i))
        P && (B += 1);
      for (const P of Object.values(A()))
        (P.min !== null || P.max !== null) && (B += 1);
      return B;
    });
    function k(B, P) {
      i[B] = i[B] === P ? null : P;
    }
    function g(B) {
      return d[B] ?? { min: "", max: "" };
    }
    function v(B, P, R) {
      const D = d[B] ?? { min: "", max: "" };
      d[B] = { ...D, [P]: R };
    }
    function c() {
      r("apply", w());
    }
    function C() {
      s.value = "";
      for (const B of Object.keys(i))
        i[B] = null;
      for (const B of Object.keys(d))
        d[B] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        n.hideSearch ? { ..._e(), query: n.applied.query } : _e()
      );
    }
    return (B, P) => (t(), T(It, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (R) => r("close"))
    }, {
      footer: j(() => [
        l("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: C
        }, " Reset all "),
        I(se, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (R) => r("close"))
        }, {
          default: j(() => [...P[5] || (P[5] = [
            U("Cancel", -1)
          ])]),
          _: 1
        }),
        I(se, {
          size: "sm",
          onClick: c
        }, {
          default: j(() => [
            P[6] || (P[6] = U(" Apply", -1)),
            S.value ? (t(), a("span", Sb, " (" + f(S.value) + ")", 1)) : y("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        l("div", bb, [
          e.hideSearch ? y("", !0) : (t(), a("label", xb, [
            P[3] || (P[3] = l("span", { class: "text-sm font-semibold" }, "Search", -1)),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (R) => s.value = R),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(_, null, V(u.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", yb, f(R.label ?? R.key), 1),
            l("div", kb, [
              (t(!0), a(_, null, V(R.options ?? [], (D) => (t(), a("button", {
                key: D.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[R.key] === D.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[R.key] === D.value ? "true" : "false",
                onClick: (ee) => k(R.key, D.value)
              }, f(D.label), 11, $b))), 128))
            ])
          ]))), 128)),
          (t(!0), a(_, null, V(m.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", wb, f(R.label ?? R.key), 1),
            l("div", Cb, [
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${R.label ?? R.key} from`,
                "model-value": g(R.key).min,
                "onUpdate:modelValue": (D) => v(R.key, "min", String(D))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
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
}), Mb = ["aria-disabled"], Bb = ["disabled"], Ab = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Pb = ["d"], _b = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, zb = ["disabled"], Ob = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, jb = ["d"], Lb = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ ze({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const n = Je(e, "modelValue"), r = o, s = $(() => n.value <= e.min), i = $(() => e.max !== null && n.value >= e.max);
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
        onClick: m[0] || (m[0] = (h) => d(-1))
      }, [
        (t(), a("svg", Ab, [
          l("path", {
            d: b(de)("minus")
          }, null, 8, Pb)
        ]))
      ], 8, Bb),
      l("span", _b, f(n.value), 1),
      l("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (h) => d(1))
      }, [
        (t(), a("svg", Ob, [
          l("path", {
            d: b(de)("plus")
          }, null, 8, jb)
        ]))
      ], 8, zb)
    ], 8, Mb));
  }
}), Vb = { class: "divide-border flex flex-col divide-y" }, Tb = { class: "min-w-0" }, Db = { class: "truncate text-sm font-medium" }, Eb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Ib = { class: "flex shrink-0 items-center gap-2 text-sm" }, Fb = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Nb = {
  key: 2,
  class: "font-medium tabular-nums"
}, Rb = ["aria-label", "onClick"], Ub = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Hb = ["d"], qb = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", Vb, [
      (t(!0), a(_, null, V(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        l("div", Tb, [
          l("p", Db, f(d.label), 1),
          d.detail ? (t(), a("p", Eb, f(d.detail), 1)) : y("", !0)
        ]),
        l("div", Ib, [
          e.editable ? (t(), T(Lb, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", Fb, " ×" + f(d.qty), 1)) : y("", !0),
          d.amount ? (t(), a("span", Nb, f(d.amount), 1)) : y("", !0),
          d.status ? (t(), T(be, {
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
            (t(), a("svg", Ub, [
              l("path", {
                d: b(de)("trash")
              }, null, 8, Hb)
            ]))
          ], 8, Rb)) : y("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Kb = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Gb = { class: "border-b px-4 py-3" }, Wb = { class: "text-sm font-medium" }, Zb = { class: "flex-1 px-4 py-3" }, Jb = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Yb = { class: "text-foreground block font-medium" }, Xb = { class: "mt-1 block" }, Qb = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, e1 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, t1 = { class: "tabular-nums" }, a1 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, n1 = { class: "text-muted-foreground" }, l1 = {
  key: 0,
  class: "tabular-nums"
}, o1 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, s1 = { class: "text-muted-foreground" }, r1 = { class: "tabular-nums" }, i1 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, d1 = { class: "tabular-nums" }, u1 = {
  key: 4,
  class: "pt-1"
}, c1 = /* @__PURE__ */ O({
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
    return (r, s) => (t(), a("aside", Kb, [
      l("header", Gb, [
        l("h2", Wb, f(e.title), 1)
      ]),
      l("div", Zb, [
        e.items.length === 0 ? (t(), a("p", Jb, [
          l("span", Yb, f(e.emptyTitle), 1),
          l("span", Xb, f(e.emptyDescription), 1)
        ])) : (t(), T(qb, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", Qb, [
        e.subtotal ? (t(), a("div", e1, [
          s[2] || (s[2] = l("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          l("span", t1, f(e.subtotal), 1)
        ])) : y("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", a1, [
          l("span", n1, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", l1, f(e.discount), 1)) : y("", !0),
          q(r.$slots, "discount")
        ])) : y("", !0),
        e.tax ? (t(), a("div", o1, [
          l("span", s1, f(e.taxLabel), 1),
          l("span", r1, f(e.tax), 1)
        ])) : y("", !0),
        e.total ? (t(), a("div", i1, [
          s[3] || (s[3] = l("span", null, "Total", -1)),
          l("span", d1, f(e.total), 1)
        ])) : y("", !0),
        r.$slots.pay ? (t(), a("div", u1, [
          q(r.$slots, "pay")
        ])) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), f1 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, m1 = { class: "flex flex-col gap-4" }, p1 = { class: "flex flex-wrap items-start justify-between gap-3" }, v1 = { class: "flex items-center gap-2" }, g1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, h5 = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ ze({
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
  emits: /* @__PURE__ */ ze(["select", "pay"], ["update:cart"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(_e()), i = K(!1), d = Je(e, "cart"), u = K(!1), m = $(
      () => n.items.filter((H) => Ft(H, s.value))
    );
    function h(H) {
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
    function A(H, G, Z) {
      return {
        ...H,
        qty: G,
        amount: n.formatMoney(Z * G)
      };
    }
    function w(H) {
      const G = hb(n.items, H);
      G && S(G.key);
    }
    function S(H) {
      const G = n.items.find((te) => te.key === H);
      if (!G || G.status === "out-of-stock")
        return;
      u.value = !1;
      const Z = x(G);
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
    function k(H, G) {
      const Z = n.items.find((te) => te.key === H), ae = x(Z);
      d.value = d.value.map(
        (te) => te.key === H ? A(te, G, ae) : te
      );
    }
    function g(H) {
      d.value = d.value.filter((G) => G.key !== H);
    }
    const v = $(
      () => d.value.reduce((H, G) => {
        const Z = n.items.find((ae) => ae.key === G.key);
        return H + x(Z) * Number(G.qty ?? 1);
      }, 0)
    ), c = $(
      () => n.discountRate > 0 ? Math.round(v.value * n.discountRate) : 0
    ), C = $(
      () => Math.round((v.value - c.value) * n.taxRate)
    ), B = $(
      () => d.value.length ? n.formatMoney(v.value) : null
    ), P = $(
      () => d.value.length && c.value > 0 ? `−${n.formatMoney(c.value)}` : null
    ), R = $(
      () => d.value.length && n.taxRate > 0 ? n.formatMoney(C.value) : null
    ), D = $(
      () => d.value.length ? n.formatMoney(
        v.value - c.value + C.value
      ) : null
    );
    function ee() {
      u.value = !0, r("pay", d.value);
    }
    return (H, G) => (t(), a(_, null, [
      l("div", f1, [
        l("section", m1, [
          l("div", p1, [
            I(Pe, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            l("div", v1, [
              b(st)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: G[0] || (G[0] = (Z) => s.value = {
                  ...b(_e)(),
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
                b(st)(s.value) ? (t(), a("span", g1, " on ")) : y("", !0)
              ])) : y("", !0)
            ])
          ]),
          I(Et, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: h,
            onSelect: G[2] || (G[2] = (Z) => r("select", Z)),
            onCart: S,
            onScan: w
          }, null, 8, ["search-placeholder", "items"])
        ]),
        I(c1, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: B.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: R.value,
          total: D.value,
          onQty: k,
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
      I(ka, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: G[3] || (G[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: G[4] || (G[4] = (Z) => s.value = { ...b(_e)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), h1 = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, b1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, x1 = ["src", "alt"], y1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, k1 = ["src"], $1 = { class: "flex items-start justify-between gap-3" }, w1 = { class: "text-lg font-semibold tabular-nums" }, C1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, S1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, M1 = { class: "grid grid-cols-2 gap-3" }, B1 = { class: "flex flex-col gap-2" }, A1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, b5 = /* @__PURE__ */ O({
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
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((w, S) => ({
        label: w,
        value: Math.max(0, Math.round(p + Math.sin(S + x) * p * 0.18))
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
    }), h = $(
      () => !!n.item && !d.value && n.item?.status !== "out-of-stock"
    );
    return (p, x) => (t(), T(It, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: x[1] || (x[1] = (A) => r("close"))
    }, ht({
      default: j(() => [
        e.item ? (t(), a("div", h1, [
          l("div", b1, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, x1)) : y("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", y1, [
            (t(!0), a(_, null, V(e.item.images, (A, w) => (t(), a("img", {
              key: w,
              src: A,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, k1))), 128))
          ])) : y("", !0),
          l("div", $1, [
            l("div", null, [
              l("p", w1, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", C1, f(e.item.stock) + " in stock ", 1)) : y("", !0)
            ]),
            e.item.status ? (t(), T(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", S1, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          l("div", M1, [
            I(ot, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? m.value : u.value
            }, null, 8, ["label", "value", "series"]),
            I(ot, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          l("div", B1, [
            l("p", A1, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            I(it, {
              data: d.value ? m.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : y("", !0)
      ]),
      _: 2
    }, [
      h.value && e.item ? {
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
}), P1 = { class: "flex flex-col gap-10" }, _1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, z1 = { class: "flex flex-col gap-3" }, O1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, j1 = ["src", "alt"], L1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, V1 = ["aria-label", "aria-pressed", "onClick"], T1 = ["src"], D1 = { class: "flex flex-col gap-5" }, E1 = { class: "flex flex-wrap items-start justify-between gap-3" }, I1 = { class: "min-w-0" }, F1 = { class: "text-2xl font-semibold tracking-tight" }, N1 = { class: "text-muted-foreground mt-1 text-sm" }, R1 = { class: "text-2xl font-semibold tabular-nums" }, U1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, H1 = { class: "grid grid-cols-2 gap-3 text-sm" }, q1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, K1 = { class: "mt-1 font-medium" }, G1 = { class: "rounded-lg border p-3" }, W1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, Z1 = { class: "mt-1 font-medium" }, J1 = { class: "flex flex-col gap-4" }, Y1 = { class: "grid gap-4 sm:grid-cols-2" }, X1 = { class: "bg-card rounded-lg border p-4" }, Q1 = { class: "mb-3 text-sm font-medium" }, ex = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(w) {
      let S = 0;
      for (const k of w)
        S = S * 31 + k.charCodeAt(0) >>> 0;
      return S;
    }
    function i(w, S) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((g, v) => ({
        label: g,
        value: Math.max(0, Math.round(w + Math.sin(v + S) * w * 0.18))
      }));
    }
    const d = $(() => n.item.kind === "unit"), u = $(() => {
      const w = [n.item.image, ...n.item.images ?? []].filter(
        (S) => typeof S == "string" && S !== ""
      );
      return [...new Set(w)];
    }), m = K(0), h = $(() => {
      const w = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, s(n.item.key) % 7);
    }), p = $(() => {
      const w = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, s(n.item.key) % 5 + 1);
    }), x = $(() => d.value ? p.value : h.value), A = $(() => !d.value && n.item.status !== "out-of-stock");
    return (w, S) => (t(), a("div", P1, [
      l("div", _1, [
        l("div", z1, [
          l("div", O1, [
            u.value[m.value] ? (t(), a("img", {
              key: 0,
              src: u.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, j1)) : y("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", L1, [
            (t(!0), a(_, null, V(u.value, (k, g) => (t(), a("button", {
              key: k,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", g === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${g + 1}`,
              "aria-pressed": g === m.value ? "true" : "false",
              onClick: (v) => m.value = g
            }, [
              l("img", {
                src: k,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, T1)
            ], 10, V1))), 128))
          ])) : y("", !0)
        ]),
        l("div", D1, [
          l("div", E1, [
            l("div", I1, [
              l("h1", F1, f(e.item.label), 1),
              l("p", N1, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : y("", !0)
          ]),
          l("p", R1, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", U1, f(e.item.facts.join(" · ")), 1)) : y("", !0),
          l("dl", H1, [
            e.item.sku ? (t(), a("div", q1, [
              S[1] || (S[1] = l("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              l("dd", K1, f(e.item.sku), 1)
            ])) : y("", !0),
            l("div", G1, [
              l("dt", W1, f(d.value ? "Occupancy" : "Stock"), 1),
              l("dd", Z1, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          A.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: S[0] || (S[0] = (k) => r("cart", e.item.key))
          }, " Add to cart ")) : y("", !0)
        ])
      ]),
      l("section", J1, [
        S[2] || (S[2] = l("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        l("div", Y1, [
          I(ot, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: x.value
          }, null, 8, ["label", "value", "series"]),
          I(ot, {
            label: "Price",
            value: e.item.price ?? "-",
            series: h.value
          }, null, 8, ["value", "series"])
        ]),
        l("div", X1, [
          l("p", Q1, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(Cm, {
            data: x.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), tx = ["href"], x5 = /* @__PURE__ */ O({
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
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Te)])
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
      ], 8, tx),
      I(ex, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), ax = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, nx = ["aria-selected", "onClick"], lx = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, ox = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, sx = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, rx = ["aria-pressed"], ix = ["aria-pressed"], y5 = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ ze({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["select", "cart"], ["update:layout"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(n.tabs[0]?.key ?? ""), i = Je(e, "layout"), d = K({}), u = K(!1);
    fe(
      () => n.tabs.map((k) => k.key).join(","),
      (k) => {
        k.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function m(k) {
      return d.value[k] ?? _e();
    }
    const h = $(
      () => n.tabs.find((k) => k.key === s.value) ?? n.tabs[0] ?? null
    ), p = $(
      () => h.value ? m(h.value.key) : _e()
    ), x = $(() => {
      const k = h.value;
      return k ? k.items.filter((g) => Ft(g, m(k.key))) : [];
    });
    function A(k) {
      const g = h.value?.key;
      g && (d.value = {
        ...d.value,
        [g]: { ...m(g), query: k }
      });
    }
    function w() {
      const k = h.value?.key;
      k && (d.value = { ...d.value, [k]: _e() });
    }
    function S(k) {
      const g = h.value?.key;
      g && (d.value = { ...d.value, [g]: k }, u.value = !1);
    }
    return (k, g) => (t(), a(_, null, [
      l("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Te)])
      }, [
        I(Pe, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", ax, [
          (t(!0), a(_, null, V(e.tabs, (v) => (t(), a("button", {
            key: v.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (c) => s.value = v.key
          }, f(v.label), 11, nx))), 128))
        ])) : y("", !0),
        l("div", lx, [
          I(ge, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: h.value?.searchPlaceholder ?? "Search…",
            "aria-label": h.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": g[0] || (g[0] = (v) => A(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b(st)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: w
          }, " Clear ")) : y("", !0),
          (h.value?.facets ?? []).length > 0 ? (t(), a("button", {
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
            b(st)(p.value) ? (t(), a("span", ox, " on ")) : y("", !0)
          ])) : y("", !0),
          l("div", sx, [
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: g[2] || (g[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, rx),
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: g[3] || (g[3] = (v) => i.value = "list")
            }, " List ", 10, ix)
          ])
        ]),
        I(Et, {
          layout: i.value,
          "onUpdate:layout": g[4] || (g[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: x.value,
          onSelect: g[5] || (g[5] = (v) => r("select", v)),
          onCart: g[6] || (g[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      I(ka, {
        open: u.value,
        title: h.value?.filterTitle ?? "Filters",
        "search-placeholder": h.value?.searchPlaceholder ?? "Search…",
        facets: h.value?.facets ?? [],
        applied: p.value,
        onClose: g[7] || (g[7] = (v) => u.value = !1),
        onApply: S,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), dx = { class: "flex flex-col gap-4" }, ux = { class: "flex flex-col gap-4" }, k5 = /* @__PURE__ */ O({
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
      () => n.cards.filter((d) => Ft(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(Te)])
    }, [
      I(Pe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", dx, [
        I(Pe, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(Et, {
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
      l("section", ux, [
        I(Pe, {
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
            I(be, {
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
}), cx = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, fx = { class: "text-sm font-medium" }, mx = ["width", "height", "aria-label"], px = { class: "flex items-center gap-2" }, vx = /* @__PURE__ */ O({
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
    function m(k) {
      const g = s.value;
      if (!g)
        return null;
      const v = g.getBoundingClientRect(), c = g.width / v.width, C = g.height / v.height;
      return {
        x: (k.clientX - v.left) * c,
        y: (k.clientY - v.top) * C
      };
    }
    function h(k) {
      n.disabled || (i.value = !0, d = m(k), s.value?.setPointerCapture(k.pointerId));
    }
    function p(k) {
      if (!i.value || n.disabled)
        return;
      const g = u(), v = m(k);
      !g || !v || !d || (g.strokeStyle = "#111827", g.lineWidth = 2.4, g.lineCap = "round", g.lineJoin = "round", g.beginPath(), g.moveTo(d.x, d.y), g.lineTo(v.x, v.y), g.stroke(), d = v);
    }
    function x() {
      i.value = !1, d = null;
    }
    function A() {
      const k = s.value, g = u();
      !k || !g || (g.clearRect(0, 0, k.width, k.height), r("clear"));
    }
    function w() {
      const k = s.value;
      k && r("save", k.toDataURL("image/png"));
    }
    function S() {
      const k = s.value, g = u();
      !k || !g || (g.fillStyle = "#ffffff", g.fillRect(0, 0, k.width, k.height));
    }
    return pe(S), he(() => {
      i.value = !1;
    }), (k, g) => (t(), a("div", cx, [
      l("p", fx, f(e.label), 1),
      l("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: me(h, ["prevent"]),
        onPointermove: me(p, ["prevent"]),
        onPointerup: me(x, ["prevent"]),
        onPointerleave: me(x, ["prevent"])
      }, null, 42, mx),
      l("div", px, [
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
          onClick: w
        }, {
          default: j(() => [...g[1] || (g[1] = [
            U("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), gx = { class: "grid gap-8 lg:grid-cols-2" }, hx = { class: "flex flex-col gap-3" }, bx = { class: "text-muted-foreground text-xs" }, xx = {
  key: 0,
  class: "flex flex-col gap-3"
}, yx = { class: "flex flex-wrap gap-3" }, kx = ["onClick"], $x = ["src", "alt"], wx = {
  key: 1,
  class: "flex flex-col gap-3"
}, Cx = { class: "flex flex-wrap gap-3" }, Sx = ["onClick"], Mx = ["src", "alt"], Bx = {
  key: 2,
  class: "flex flex-col gap-4"
}, Ax = { class: "flex flex-wrap items-center gap-2" }, Px = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, _x = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, zx = { class: "flex flex-col gap-2" }, Ox = ["src"], jx = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Lx = ["src"], $5 = /* @__PURE__ */ O({
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
    function m(k) {
      try {
        const g = localStorage.getItem(k), v = g ? JSON.parse(g) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    pe(() => {
      !o.storageKey || typeof localStorage > "u" || (n.value = m(`${o.storageKey}.signatures`), r.value = m(`${o.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), fe(
      n,
      (k) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.signatures`, JSON.stringify(k));
      },
      { deep: !0 }
    ), fe(
      r,
      (k) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.stamps`, JSON.stringify(k));
      },
      { deep: !0 }
    );
    function h(k) {
      const g = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: k
      };
      n.value = [g, ...n.value].slice(0, 8), s.value = g.id;
    }
    async function p(k, g) {
      await Gd(k), g(40);
      const v = await new Promise((c, C) => {
        const B = new FileReader();
        B.onload = () => c(String(B.result)), B.onerror = () => C(new Error("Could not read the file")), B.readAsDataURL(k);
      });
      return g(100), { value: v, name: k.name, size: k.size, url: v };
    }
    function x() {
      const k = d.value?.url ?? d.value?.value;
      if (!k)
        return;
      const g = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: k
      };
      r.value = [g, ...r.value].slice(0, 8), i.value = g.id;
    }
    const A = $(
      () => n.value.find((k) => k.id === s.value)?.dataUrl ?? null
    ), w = $(
      () => r.value.find((k) => k.id === i.value)?.dataUrl ?? null
    ), S = $(() => {
      const k = o.documents.find((v) => v.key === u.value)?.document ?? o.documents[0]?.document ?? {}, g = {
        ...k?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...k,
        branding: g
      };
    });
    return (k, g) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(Te)])
    }, [
      I(Pe, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", gx, [
        I(vx, {
          label: "Draw a signature",
          onSave: h
        }),
        l("div", hx, [
          g[2] || (g[2] = l("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          l("p", bx, f(b(va)), 1),
          I(da, {
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
      n.value.length ? (t(), a("section", xx, [
        I(Pe, {
          variant: "small",
          title: "Saved signatures"
        }),
        l("div", yx, [
          (t(!0), a(_, null, V(n.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, $x)
          ], 10, kx))), 128))
        ])
      ])) : y("", !0),
      r.value.length ? (t(), a("section", wx, [
        I(Pe, {
          variant: "small",
          title: "Saved stamps"
        }),
        l("div", Cx, [
          (t(!0), a(_, null, V(r.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Mx)
          ], 10, Sx))), 128))
        ])
      ])) : y("", !0),
      e.documents.length ? (t(), a("section", Bx, [
        l("div", Ax, [
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
        l("div", Px, [
          I(Df, {
            document: S.value
          }, null, 8, ["document"]),
          l("div", _x, [
            l("div", zx, [
              g[3] || (g[3] = l("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              A.value ? (t(), a("img", {
                key: 0,
                src: A.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Ox)) : (t(), a("p", jx, "Draw and save a signature"))
            ]),
            w.value ? (t(), a("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Lx)) : y("", !0)
          ])
        ])
      ])) : y("", !0)
    ], 2));
  }
}), w5 = "panel.dashboard.hiddenWidgets", Vx = /* @__PURE__ */ Symbol("dashboardHide"), Tx = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, C5 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const o = e, n = at(Vx, null), r = K(
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
    const i = $(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? y("", !0) : (t(), a("div", Tx, [
      I(Mv, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (m) => r.value = m),
        onHide: u[1] || (u[1] = (m) => b(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Dx = { class: "flex flex-col gap-3" }, Ex = ["data-slot"], Ix = ["aria-pressed", "aria-label", "title"], Fx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nx = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Rx = { class: "flex h-8 items-center" }, Ux = ["aria-label", "title", "onClick"], Hx = ["aria-label", "title", "onClick"], qx = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Kx = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, S5 = /* @__PURE__ */ O({
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
    const m = $(() => n.segments.some(u)), h = $(() => n.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, x = $(() => p[n.columns] ?? p[4]), A = $(() => {
      const c = n.columns ?? 4, C = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(0, C);
    }), w = $(() => {
      const c = n.columns ?? 4, C = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(C);
    }), S = $(() => {
      const c = [];
      return A.value.length > 0 && c.push({ key: "packed", joined: !0, segments: A.value }), w.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: w.value }), c;
    });
    function k() {
      const c = m.value === !1;
      s.value = !c, i.value = /* @__PURE__ */ new Set(), r("toggle", c);
    }
    function g(c) {
      if (!d(c))
        return;
      const C = new Set(i.value);
      if (u(c))
        C.add(c.key);
      else if (C.delete(c.key), s.value) {
        s.value = !1;
        for (const B of n.segments)
          B.key !== c.key && d(B) && C.add(B.key);
      }
      i.value = C, r("toggle", m.value);
    }
    function v(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, C) => (t(), a("div", Dx, [
      (t(!0), a(_, null, V(S.value, (B) => (t(), a("div", {
        key: B.key,
        class: z(["relative shrink-0", B.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": B.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && h.value && B.key === S.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: k
        }, [
          (t(), a("svg", Fx, [
            m.value ? (t(), a(_, { key: 0 }, [
              C[0] || (C[0] = l("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              C[1] || (C[1] = l("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              C[2] || (C[2] = l("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              C[3] || (C[3] = l("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(_, { key: 1 }, [
              C[4] || (C[4] = l("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              C[5] || (C[5] = l("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Ix)) : y("", !0),
        l("div", {
          class: z(["grid", [B.joined ? "gap-px" : "gap-3", x.value]])
        }, [
          (t(!0), a(_, null, V(B.segments, (P) => (t(), a("div", {
            key: P.key,
            class: z(["bg-card flex flex-col gap-2 p-4", B.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            l("p", Nx, f(P.label), 1),
            l("div", Rx, [
              e.loading ? (t(), T($e, {
                key: 0,
                variant: "number"
              })) : u(P) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (R) => g(P)
              }, [
                (t(), a(_, null, V(5, (R) => l("span", {
                  key: R,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, Ux)) : d(P) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${v(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (R) => g(P)
              }, f(v(P.value)), 9, Hx)) : (t(), a("span", qx, f(v(P.value)), 1)),
              P.trend && !e.loading && !u(P) ? (t(), T(ya, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : y("", !0)
            ]),
            P.sparkline?.length && !e.loading && !u(P) ? (t(), T(it, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : y("", !0),
            P.caption || P.comparison && P.trend ? (t(), a("p", Kx, f(P.caption ?? P.comparison), 1)) : y("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Ex))), 128))
    ]));
  }
}), Gx = ["aria-label"], Wx = ["aria-valuenow", "aria-label"], Zx = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Jx = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Yx = ["title"], Xx = { class: "font-medium" }, Qx = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, ey = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, ty = { class: "flex items-center justify-between gap-2" }, ay = { class: "text-sm font-semibold" }, ny = { class: "flex items-center gap-3" }, ly = ["href"], oy = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, sy = { class: "flex min-w-0 flex-col gap-0.5" }, ry = { class: "text-sm font-medium" }, iy = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, dy = {
  key: 1,
  class: "flex flex-col gap-2"
}, uy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, cy = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, fy = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, M5 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = $(() => n.items.find((S) => !S.done) ?? null), i = $(() => n.items.filter((S) => S.key !== s.value?.key)), d = $(() => n.items.length), u = $(() => n.items.filter((S) => S.done).length), m = $(() => {
      if (!s.value)
        return d.value;
      const S = n.items.findIndex((k) => k.key === s.value?.key);
      return S >= 0 ? S + 1 : 1;
    }), h = $(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = $(() => {
      const S = n.linkComponent;
      return typeof S == "string" ? S : Xt(S);
    }), x = Ke({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), A = Ke({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), w = Ke({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (S, k) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
      key: 0,
      class: "overflow-hidden rounded-md border bg-card",
      "aria-label": e.heading
    }, [
      l("div", {
        class: "h-0.5 w-full bg-muted",
        role: "progressbar",
        "aria-valuenow": h.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${h.value} percent complete`
      }, [
        l("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: ne({ width: `${h.value}%` })
        }, null, 4)
      ], 8, Wx),
      l("div", Zx, [
        l("span", Jx, " Step " + f(m.value) + " of " + f(d.value), 1),
        l("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          l("span", Xx, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", Qx, f(": " + s.value.detail), 1)) : y("", !0)
        ], 8, Yx),
        s.value?.href ? (t(), T(xe(p.value), {
          key: 0,
          href: s.value.href,
          class: z(b(A))
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
          onClick: k[0] || (k[0] = (g) => r("skip"))
        }, f(e.skipLabel), 1)) : y("", !0)
      ])
    ], 8, Gx)) : e.items.length ? (t(), a("section", ey, [
      l("div", ty, [
        l("h2", ay, f(e.heading), 1),
        l("div", ny, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: k[1] || (k[1] = (g) => r("skip"))
          }, f(e.skipLabel), 1)) : y("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, ly)) : y("", !0)
        ])
      ]),
      s.value ? (t(), a("div", oy, [
        k[2] || (k[2] = l("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        l("div", sy, [
          l("p", ry, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", iy, f(s.value.detail), 1)) : y("", !0),
          s.value.href ? (t(), T(xe(p.value), {
            key: 1,
            href: s.value.href,
            class: z(b(x))
          }, {
            default: j(() => [
              U(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : y("", !0)
        ])
      ])) : y("", !0),
      i.value.length ? (t(), a("ul", dy, [
        (t(!0), a(_, null, V(i.value, (g) => (t(), a("li", {
          key: g.key,
          class: "flex items-start gap-3"
        }, [
          l("span", {
            class: z([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              g.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            g.done ? (t(), a("svg", uy, [...k[3] || (k[3] = [
              l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : y("", !0)
          ], 2),
          l("div", cy, [
            l("p", {
              class: z(["text-sm", g.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(g.title), 3),
            !g.done && g.detail ? (t(), a("p", fy, f(g.detail), 1)) : y("", !0)
          ]),
          !g.done && g.href ? (t(), T(xe(p.value), {
            key: 0,
            href: g.href,
            class: z(b(w))
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
}), my = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, py = { class: "hidden items-center gap-2 md:flex" }, vy = { class: "md:hidden" }, gy = { class: "border-b px-4 py-3" }, hy = { class: "text-muted-foreground text-xs" }, by = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, xy = { class: "font-medium tabular-nums" }, yy = { class: "ml-auto flex items-center gap-3" }, B5 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: o }) {
    const n = o, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", my, [
      l("div", py, [
        q(i.$slots, "actions")
      ]),
      l("div", vy, [
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
                l("div", gy, [
                  d[4] || (d[4] = l("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  l("p", hy, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                l("div", by, [
                  q(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      l("span", xy, [
        e.allMatching ? (t(), a(_, { key: 0 }, [
          U(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(_, { key: 1 }, [
          U(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      l("div", yy, [
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
}), ky = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, $y = { class: "text-muted-foreground text-xs tabular-nums" }, wy = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Cy = ["value"], Sy = ["value"], My = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, By = ["disabled"], Ay = ["disabled"], Py = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, _y = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, zy = ["disabled"], A5 = /* @__PURE__ */ O({
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
    return (m, h) => (t(), a("div", ky, [
      l("p", $y, [
        U(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(_, { key: 0 }, [
          U("of " + f(s(e.total)), 1)
        ], 64)) : y("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", wy, [
        h[4] || (h[4] = l("span", null, "Per page", -1)),
        l("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: h[0] || (h[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(_, null, V(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, Sy))), 128))
        ], 40, Cy)
      ])) : y("", !0),
      l("nav", My, [
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: h[1] || (h[1] = (p) => r("first"))
        }, [...h[5] || (h[5] = [
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
        ])], 8, By),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: h[2] || (h[2] = (p) => r("previous"))
        }, [...h[6] || (h[6] = [
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
        ])], 8, Ay),
        l("span", Py, f(e.page), 1),
        u.value !== null ? (t(), a("span", _y, " of " + f(s(u.value)), 1)) : y("", !0),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: h[3] || (h[3] = (p) => r("next"))
        }, [...h[7] || (h[7] = [
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
        ])], 8, zy)
      ])
    ]));
  }
}), Oy = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, jy = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Ly = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, P5 = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", Oy, [
      o.$slots.tabs ? (t(), a("div", jy, [
        q(o.$slots, "tabs")
      ])) : y("", !0),
      o.$slots.toolbar ? (t(), a("div", {
        key: 1,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        q(o.$slots, "toolbar")
      ], 2)) : y("", !0),
      q(o.$slots, "default"),
      o.$slots.pagination ? (t(), a("div", Ly, [
        q(o.$slots, "pagination")
      ])) : y("", !0)
    ]));
  }
}), Vy = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Ty = ["aria-current"], Dy = ["title"], Ey = ["aria-current", "onClick"], Iy = ["title"], Fy = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", Vy, [
      l("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => n("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Dy)) : (t(), T($e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Ty),
      (t(!0), a(_, null, V(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => n("select", d)
      }, [
        U(f(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, Iy)) : (t(), T($e, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Ey))), 128))
    ]));
  }
}), _5 = /* @__PURE__ */ zt(Fy, [["__scopeId", "data-v-3967c945"]]), Ny = { class: "flex flex-col gap-2" }, Ry = { class: "flex items-center gap-2 md:hidden" }, Uy = { class: "relative min-w-0 flex-1" }, Hy = ["placeholder", "title", "aria-label"], qy = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Ky = { class: "flex max-h-[85vh] flex-col" }, Gy = { class: "flex-1 overflow-y-auto px-4 py-3" }, Wy = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Zy = { class: "text-xs font-medium" }, Jy = ["value", "onChange"], Yy = ["value"], Xy = { class: "mb-4" }, Qy = { class: "flex flex-col gap-1" }, e0 = ["disabled", "onClick"], t0 = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, a0 = {
  key: 1,
  class: "mb-4"
}, n0 = { class: "flex flex-col gap-1" }, l0 = ["onClick"], o0 = { class: "border-t p-4" }, s0 = ["disabled"], r0 = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, i0 = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, d0 = ["placeholder", "title", "aria-label"], u0 = ["aria-label"], c0 = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, f0 = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, m0 = { class: "text-xs font-medium" }, p0 = ["value", "onChange"], v0 = ["value"], g0 = { class: "grid grid-cols-2 gap-2" }, h0 = ["value", "onChange"], b0 = ["value", "onChange"], x0 = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, y0 = ["value", "onChange"], k0 = ["value", "onChange"], $0 = {
  key: 4,
  class: "flex items-center gap-2"
}, w0 = ["aria-checked", "onClick"], C0 = { class: "text-xs" }, S0 = ["onClick"], M0 = ["value", "onChange"], B0 = ["value"], A0 = ["disabled", "onClick"], P0 = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, _0 = ["disabled", "onClick"], z0 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, O0 = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, j0 = ["aria-pressed", "aria-label", "title"], L0 = ["aria-label", "title"], V0 = { class: "flex flex-col gap-0.5 p-1" }, T0 = ["onClick"], D0 = ["onClick"], E0 = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, I0 = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, F0 = ["dusk"], N0 = ["aria-label", "onClick"], z5 = /* @__PURE__ */ O({
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
    const m = $(
      () => n.filterSchema.filter(
        (W) => n.filters[W.key] !== null && n.filters[W.key] !== void 0
      ).length
    ), h = $(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), p = $(() => n.search !== "" || m.value > 0), x = $(() => n.indicators.length ? n.indicators : n.filterSchema.filter((W) => n.filters[W.key] !== null && n.filters[W.key] !== void 0).map((W) => ({
      key: W.key,
      label: `${W.label}: ${String(n.filters[W.key])}`,
      removable: !0
    })));
    function A(W) {
      r("group", W);
    }
    function w(W) {
      r("clear-filter", W);
    }
    function S(W) {
      return W.type === "multiselect";
    }
    function k(W) {
      const M = u.value[W.key];
      return Array.isArray(M) ? M : M == null ? [] : [M];
    }
    function g(W) {
      return k(W).filter(
        (M) => typeof M == "string" || typeof M == "number"
      );
    }
    function v(W) {
      return H(W).flatMap(
        (M) => typeof M.value == "string" || typeof M.value == "number" ? [{ value: M.value, label: M.label }] : []
      );
    }
    function c(W, M) {
      u.value = { ...u.value, [W.key]: M === "" ? null : M };
    }
    function C(W, M) {
      const N = u.value[W.key];
      if (typeof N != "string" || !N.includes(".."))
        return "";
      const [L, Y] = N.split("..");
      return M === "from" ? L ?? "" : Y ?? "";
    }
    function B(W, M, N) {
      const L = M === "from" ? N : C(W, "from"), Y = M === "to" ? N : C(W, "to");
      u.value = {
        ...u.value,
        [W.key]: L && Y ? `${L}..${Y}` : null
      };
    }
    function P(W, M, N) {
      const L = M === "from" ? N : C(W, "from"), Y = M === "to" ? N : C(W, "to");
      u.value = {
        ...u.value,
        [W.key]: L || Y ? `${L}..${Y}` : null
      };
    }
    function R(W) {
      r("apply-filters", { ...u.value }), W();
    }
    function D(W, M) {
      u.value[W] = M, r("apply-filters", { ...u.value });
    }
    function ee() {
      u.value = Object.fromEntries(n.filterSchema.map((W) => [W.key, null]));
    }
    function H(W) {
      return W.type === "boolean" ? [
        { value: !0, label: W.trueLabel ?? "Yes" },
        { value: !1, label: W.falseLabel ?? "No" }
      ] : W.type === "daterange" ? Object.entries(W.presets ?? {}).map(([M, N]) => ({
        value: M,
        label: N
      })) : (W.options ?? []).map((M) => ({ value: M, label: M }));
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
      const M = new Set(G.value);
      M.has(W) ? M.delete(W) : M.add(W), G.value = M, r("apply-columns", [...M]);
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
    return (W, M) => (t(), a("div", Ny, [
      l("div", Ry, [
        l("div", Uy, [
          M[9] || (M[9] = l("svg", {
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
            "onUpdate:modelValue": M[0] || (M[0] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, Hy), [
            [ye, i.value]
          ])
        ]),
        l("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: M[1] || (M[1] = (N) => s.value = !0)
        }, [
          M[10] || (M[10] = l("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            l("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          M[11] || (M[11] = U(" Tools ", -1)),
          m.value ? (t(), a("span", qy, f(m.value), 1)) : y("", !0)
        ]),
        I(Tt, {
          open: s.value,
          "onUpdate:open": M[4] || (M[4] = (N) => s.value = N)
        }, {
          default: j(() => [
            I(Dt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", Ky, [
                  M[16] || (M[16] = l("div", { class: "border-b px-4 py-3" }, [
                    l("p", { class: "text-sm font-semibold" }, "Table tools"),
                    l("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  l("div", Gy, [
                    e.filterSchema.length ? (t(), a("div", Wy, [
                      l("div", { class: "flex items-center justify-between" }, [
                        M[12] || (M[12] = l("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        l("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: ee
                        }, " Reset ")
                      ]),
                      (t(!0), a(_, null, V(e.filterSchema, (N) => (t(), a("div", {
                        key: `mobile-${N.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        l("label", Zy, f(N.label), 1),
                        N.type !== "multiselect" && N.type !== "querybuilder" && N.type !== "daterange" && N.type !== "numberrange" && N.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: u.value[N.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (L) => c(N, L.target.value)
                        }, [
                          M[13] || (M[13] = l("option", { value: "" }, "All", -1)),
                          (t(!0), a(_, null, V(H(N), (L) => (t(), a("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, Yy))), 128))
                        ], 40, Jy)) : y("", !0)
                      ]))), 128))
                    ])) : y("", !0),
                    l("div", Xy, [
                      M[14] || (M[14] = l("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      l("div", Qy, [
                        (t(!0), a(_, null, V(e.columns, (N) => (t(), a("button", {
                          key: `mobile-col-${N.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: N.locked,
                          onClick: (L) => Z(N.key)
                        }, [
                          l("span", null, f(N.label), 1),
                          G.value.has(N.key) ? y("", !0) : (t(), a("span", t0, "On"))
                        ], 8, e0))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", a0, [
                      M[15] || (M[15] = l("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      l("div", n0, [
                        l("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: M[2] || (M[2] = (N) => {
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
                        }, f(N.label), 9, l0))), 128))
                      ])
                    ])) : y("", !0)
                  ]),
                  l("div", o0, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !h.value,
                      onClick: te
                    }, " Apply filters ", 8, s0)) : y("", !0),
                    p.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: M[3] || (M[3] = (N) => {
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
      l("div", r0, [
        l("div", i0, [
          M[18] || (M[18] = l("svg", {
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
            "onUpdate:modelValue": M[5] || (M[5] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, d0), [
            [ye, i.value]
          ]),
          i.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: M[6] || (M[6] = (N) => i.value = "")
          }, [...M[17] || (M[17] = [
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
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", m.value ? "border-primary text-primary" : ""]),
              "aria-label": m.value ? `Filters (${m.value} active)` : "Filters",
              title: "Filters"
            }, [
              M[19] || (M[19] = l("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                l("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              m.value ? (t(), a("span", c0, f(m.value), 1)) : y("", !0)
            ], 10, u0)
          ]),
          panel: j(({ close: N }) => [
            l("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              M[20] || (M[20] = l("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              l("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: ee
              }, " Reset ")
            ]),
            M[23] || (M[23] = l("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            l("div", f0, [
              (t(!0), a(_, null, V(e.filterSchema, (L) => (t(), a("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                l("label", m0, f(L.label), 1),
                S(L) ? (t(), T(Ot, {
                  key: 0,
                  "model-value": g(L),
                  options: v(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Y) => u.value[L.key] = Y.length ? Y : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(li, {
                  key: 1,
                  "model-value": u.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (Y) => D(L.key, Y)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), a(_, { key: 2 }, [
                  l("select", {
                    value: typeof u.value[L.key] == "string" && !String(u.value[L.key]).includes("..") ? u.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Y) => c(L, Y.target.value)
                  }, [
                    M[21] || (M[21] = l("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(_, null, V(H(L), (Y) => (t(), a("option", {
                      key: String(Y.value),
                      value: Y.value
                    }, f(Y.label), 9, v0))), 128))
                  ], 40, p0),
                  l("div", g0, [
                    l("input", {
                      type: "date",
                      value: C(L, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => B(
                        L,
                        "from",
                        Y.target.value
                      )
                    }, null, 40, h0),
                    l("input", {
                      type: "date",
                      value: C(L, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => B(
                        L,
                        "to",
                        Y.target.value
                      )
                    }, null, 40, b0)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), a("div", x0, [
                  l("input", {
                    type: "number",
                    value: C(L, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => P(
                      L,
                      "from",
                      Y.target.value
                    )
                  }, null, 40, y0),
                  l("input", {
                    type: "number",
                    value: C(L, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => P(
                      L,
                      "to",
                      Y.target.value
                    )
                  }, null, 40, k0)
                ])) : L.type === "boolean" ? (t(), a("div", $0, [
                  l("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[L.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Y) => c(L, u.value[L.key] === !0 ? null : !0)
                  }, [
                    l("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, w0),
                  l("span", C0, f(L.trueLabel ?? "Yes"), 1),
                  l("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Y) => c(L, u.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, S0)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Y) => c(L, Y.target.value)
                }, [
                  M[22] || (M[22] = l("option", { value: "" }, "All", -1)),
                  (t(!0), a(_, null, V(H(L), (Y) => (t(), a("option", {
                    key: String(Y.value),
                    value: Y.value
                  }, f(Y.label), 9, B0))), 128))
                ], 40, M0))
              ]))), 128))
            ]),
            l("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !h.value,
              onClick: (L) => R(N)
            }, " Apply filters ", 8, A0)
          ]),
          _: 1
        })) : y("", !0),
        I(Fe, { "dismiss-on-panel-click": !1 }, {
          trigger: j(() => [...M[24] || (M[24] = [
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
            M[27] || (M[27] = l("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            l("div", P0, [
              (t(!0), a(_, null, V(e.columns, (N) => (t(), a("button", {
                key: N.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: N.locked,
                onClick: (L) => Z(N.key)
              }, [
                G.value.has(N.key) ? (t(), a("span", O0)) : (t(), a("svg", z0, [...M[25] || (M[25] = [
                  l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                U(" " + f(N.label), 1)
              ], 10, _0))), 128))
            ]),
            l("div", { class: "border-t" }, [
              l("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: ae
              }, [...M[26] || (M[26] = [
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
          class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: M[7] || (M[7] = (N) => r("toggle-reorder"))
        }, [...M[28] || (M[28] = [
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
        ])], 10, j0)) : y("", !0),
        e.groups.length ? (t(), T(Fe, {
          key: 2,
          align: "end"
        }, {
          trigger: j(() => [
            l("button", {
              type: "button",
              dusk: "group-picker",
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...M[29] || (M[29] = [
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
            ])], 10, L0)
          ]),
          panel: j(({ close: N }) => [
            l("div", V0, [
              l("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  A(null), N();
                }
              }, " No grouping ", 10, T0),
              (t(!0), a(_, null, V(e.groups, (L) => (t(), a("button", {
                key: L.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (Y) => {
                  A(L.key), N();
                }
              }, f(L.label), 11, D0))), 128))
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
        e.loading ? (t(), a("span", E0, "Loading…")) : y("", !0)
      ]),
      x.value.length ? (t(), a("div", I0, [
        (t(!0), a(_, null, V(x.value, (N) => (t(), a("span", {
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
            onClick: (L) => w(N.key)
          }, [...M[30] || (M[30] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, N0)) : y("", !0)
        ], 8, F0))), 128)),
        x.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: M[8] || (M[8] = (N) => r("clear-filters"))
        }, " Clear all ")) : y("", !0)
      ])) : y("", !0)
    ]));
  }
}), R0 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, U0 = { class: "grid gap-2" }, H0 = {
  key: 0,
  class: "text-destructive text-sm"
}, q0 = { class: "flex gap-2" }, O5 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: o }) {
    const n = o, s = K((() => {
      const A = navigator.userAgent, w = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: k }) => k.test(A))?.name, S = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: k }) => k.test(A))?.name;
      return [w, S].filter(Boolean).join(" on ") || "";
    })()), i = K(!1), d = ja(null), u = $(() => d.value?.isLoading.value ?? !1), m = $(() => d.value?.error.value ?? null), h = $(() => d.value?.isSupported.value ?? !1);
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
    return (A, w) => h.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      l("div", U0, [
        w[3] || (w[3] = l("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ce(l("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": w[1] || (w[1] = (S) => s.value = S),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [ye, s.value]
        ]),
        w[4] || (w[4] = l("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      m.value ? (t(), a("p", H0, f(m.value), 1)) : y("", !0),
      l("div", q0, [
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
          default: j(() => [...w[5] || (w[5] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(se, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = (S) => i.value = !0)
    }, {
      default: j(() => [...w[2] || (w[2] = [
        U(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", R0, " Passkeys are not supported in this browser. "));
  }
}), K0 = { class: "flex flex-col gap-4" }, G0 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, j5 = /* @__PURE__ */ O({
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
      run(m, h) {
        return n.createOption ? n.createOption(m, h) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = o, s = $(() => n.nodes.length > 0), i = $(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = $(() => n.errors._conflict);
    function u(m) {
      if (n.upload)
        return (h, p) => n.upload(m, h, p);
    }
    return (m, h) => (t(), a("div", K0, [
      d.value ? (t(), a("p", G0, f(d.value), 1)) : y("", !0),
      s.value ? (t(!0), a(_, { key: 1 }, V(e.nodes, (p, x) => (t(), T(ua, {
        key: x,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: h[0] || (h[0] = (A, w) => r("change", A, w)),
        onAffixAction: h[1] || (h[1] = (A, w) => r("affix-action", A, w))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(_, null, V(e.fields, (p) => (t(), T(Ne, {
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
          class: z(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (x) => r("change", p.key, x),
          onAffixAction: (x) => r("affix-action", p.key, x)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), W0 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6",
  role: "status",
  "aria-live": "polite"
}, Z0 = { class: "pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10" }, J0 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Y0 = ["disabled"], X0 = ["disabled"], Q0 = ["disabled"], L5 = /* @__PURE__ */ O({
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
          e.show ? (t(), a("div", W0, [
            l("div", Z0, [
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
              l("span", J0, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => o.$emit("discard"))
              }, f(e.discardLabel), 9, Y0)) : y("", !0),
              l("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => o.$emit("cancel"))
              }, f(e.cancelLabel), 9, X0),
              l("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => o.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Q0)
            ])
          ])) : y("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function V5(e, o = {}) {
  const { warnOnUnload: n = !0 } = o, r = K(gt(e.value)), s = $(() => gt(e.value) !== r.value);
  function i() {
    r.value = gt(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(m) {
    s.value && (m.preventDefault(), m.returnValue = "");
  }
  return pe(() => {
    n && window.addEventListener("beforeunload", u);
  }), he(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function gt(e) {
  return JSON.stringify(e, (o, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const ek = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, tk = { class: "text-muted-foreground text-xs font-medium" }, ak = { class: "text-sm" }, nk = { key: 1 }, lk = {
  key: 5,
  class: "max-w-full"
}, ok = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, sk = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, rk = { key: 6 }, ik = {
  key: 0,
  class: "divide-y rounded-md border"
}, dk = { class: "text-muted-foreground truncate font-medium" }, uk = { class: "col-span-2 break-words" }, ck = {
  key: 1,
  class: "text-muted-foreground"
}, fk = {
  key: 7,
  class: "flex flex-col gap-3"
}, mk = {
  key: 0,
  class: "text-muted-foreground"
}, pk = ["href"], vk = { class: "text-sm font-semibold" }, gk = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, hk = ["onClick"], T5 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!n.node.collapsed), i = K(0), d = $(() => n.depth === 0), u = $(() => {
      const A = n.node.columns ?? 1;
      return A >= 3 ? "sm:grid-cols-3" : A === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), m = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, h = $(() => n.node.key ? n.record[n.node.key] : null), p = $(() => {
      const A = h.value;
      if (A == null || A === "")
        return "-";
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(A)).toLocaleDateString(void 0, m[n.node.type]);
      let w = String(A);
      return n.node.transform === "upper" && (w = w.toUpperCase()), n.node.transform === "lower" && (w = w.toLowerCase()), [n.node.prefix, w, n.node.suffix].filter(Boolean).join(" ");
    }), x = $(() => {
      const A = typeof h.value == "boolean" ? h.value ? "1" : "" : String(h.value), w = n.node.colors?.[A] ?? n.node.defaultColor ?? "neutral";
      return jt[w] ?? "outline";
    });
    return (A, w) => {
      const S = St("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", ek, [
        l("dt", tk, f(e.node.label), 1),
        l("dd", ak, [
          e.node.type === "badge" && b(mi)(h.value) ? (t(), T(Ge, {
            key: 0,
            variant: x.value,
            class: "capitalize"
          }, {
            default: j(() => [
              U(f(h.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", nk, "-")) : e.node.type === "icon" ? (t(), T(jr, {
            key: 2,
            value: h.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Tr, {
            key: 3,
            src: h.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Nr, {
            key: 4,
            value: typeof h.value == "string" ? h.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", lk, [
            e.node.language ? (t(), a("p", ok, f(e.node.language), 1)) : y("", !0),
            l("pre", sk, [
              l("code", null, f(h.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", rk, [
            h.value && typeof h.value == "object" && !Array.isArray(h.value) && Object.keys(h.value).length ? (t(), a("dl", ik, [
              (t(!0), a(_, null, V(h.value, (k, g) => (t(), a("div", {
                key: g,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                l("dt", dk, f(g), 1),
                l("dd", uk, f(k), 1)
              ]))), 128))
            ])) : (t(), a("span", ck, "-"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", fk, [
            (t(!0), a(_, null, V(Array.isArray(h.value) ? h.value : [], (k, g) => (t(), a("div", {
              key: g,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(_, null, V(e.node.entries ?? [], (v, c) => (t(), T(S, {
                key: c,
                node: v,
                record: k,
                depth: e.depth + 1,
                onAction: w[0] || (w[0] = (C) => r("action", C))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(h.value) || h.value.length === 0 ? (t(), a("span", mk, "-")) : y("", !0)
          ])) : e.node.url ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, f(p.value), 9, pk)) : (t(), a("span", {
            key: 9,
            class: z([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, f(p.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
            onClick: w[1] || (w[1] = (k) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : y("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: z(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("header", {
          class: z(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: w[2] || (w[2] = (k) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", null, [
            l("h3", vk, f(e.node.label), 1),
            e.node.description ? (t(), a("p", gk, f(e.node.description), 1)) : y("", !0)
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (k, g) => (t(), T(S, {
            key: g,
            node: k,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[3] || (w[3] = (v) => r("action", v))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : y("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", u.value])
      }, [
        (t(!0), a(_, null, V(e.node.children ?? [], (k, g) => (t(), T(S, {
          key: g,
          node: k,
          record: e.record,
          depth: e.depth + 1,
          onAction: w[4] || (w[4] = (v) => r("action", v))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: z(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(_, null, V(e.node.children ?? [], (k, g) => (t(), a("button", {
            key: g,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (v) => i.value = g
          }, f(k.label), 11, hk))), 128))
        ], 2),
        (t(!0), a(_, null, V(e.node.children ?? [], (k, g) => ce((t(), a("div", {
          key: g,
          class: z(["flex flex-col gap-5", d.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(_, null, V(k.children ?? [], (v, c) => (t(), T(S, {
            key: c,
            node: v,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[5] || (w[5] = (C) => r("action", C))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ve, i.value === g]
        ])), 128))
      ], 2)) : y("", !0);
    };
  }
}), bk = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, xk = { class: "text-muted-foreground text-sm" }, yk = { class: "flex items-start gap-3" }, kk = { class: "min-w-0 flex-1" }, $k = { class: "flex flex-wrap items-center gap-2" }, wk = { class: "truncate text-sm font-medium" }, Ck = { class: "text-muted-foreground mt-0.5 text-xs" }, Sk = { class: "text-muted-foreground text-xs" }, Mk = { class: "mt-auto flex items-center gap-2" }, Bk = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), a("div", bk, [
      l("p", xk, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      l("div", {
        class: z(b(Id))
      }, [
        (t(!0), a(_, null, V(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          l("div", yk, [
            l("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            l("div", kk, [
              l("div", $k, [
                l("h3", wk, f(u.label), 1),
                I(be, {
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
                })) : y("", !0),
                u.isDefault ? (t(), T(be, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...d[2] || (d[2] = [
                    U(" Default ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                u.connected && u.mode ? (t(), T(be, {
                  key: 3,
                  status: u.mode
                }, {
                  default: j(() => [
                    U(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : y("", !0)
              ]),
              l("p", Ck, f(u.caption), 1)
            ])
          ]),
          l("p", Sk, f(u.methods.join(" · ")), 1),
          l("div", Mk, [
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
}), Ak = { class: "flex flex-col gap-6" }, Pk = { class: "relative" }, _k = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, zk = ["d"], Ok = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, jk = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Lk = { class: "flex flex-wrap items-center gap-2" }, Vk = { class: "text-muted-foreground text-sm" }, Tk = { class: "flex flex-col gap-1 text-sm" }, Dk = ["value"], Ek = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ik = { class: "flex flex-wrap items-center gap-2" }, Fk = {
  key: 1,
  class: "flex items-center gap-2"
}, D5 = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ ze({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const o = Je(e, "gateways"), n = K(null), r = K(""), s = $(
      () => o.value.find((w) => w.key === n.value) ?? null
    ), i = $(() => {
      const w = r.value.trim().toLowerCase();
      return w === "" ? o.value : o.value.filter((S) => [S.key, S.label, S.caption, ...S.methods].join(" ").toLowerCase().includes(w));
    });
    function d(w) {
      return w.connected && w.enabled !== !1;
    }
    function u(w, S) {
      o.value = o.value.map(
        (k) => k.key === w ? { ...k, ...S } : k
      );
    }
    function m(w) {
      n.value = w;
    }
    function h(w) {
      const S = o.value.find((g) => g.key === w);
      if (!S)
        return;
      const k = !S.connected;
      u(w, {
        connected: k,
        mode: k ? S.mode ?? "test" : null,
        enabled: k,
        isDefault: !1
      });
    }
    function p(w, S) {
      const k = o.value.find((g) => g.key === w);
      k?.connected && u(w, { enabled: S, isDefault: S ? k.isDefault : !1 });
    }
    function x(w) {
      const S = o.value.find((k) => k.key === w);
      !S || !d(S) || (o.value = o.value.map((k) => ({
        ...k,
        isDefault: k.key === w
      })));
    }
    function A(w) {
      const S = n.value;
      !S || !o.value.find((g) => g.key === S)?.connected || u(S, { mode: w });
    }
    return (w, S) => (t(), a(_, null, [
      l("div", Ak, [
        I(Pe, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        l("div", Pk, [
          (t(), a("svg", _k, [
            l("path", {
              d: b(de)("search")
            }, null, 8, zk)
          ])),
          I(ge, {
            modelValue: r.value,
            "onUpdate:modelValue": S[0] || (S[0] = (k) => r.value = k),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(Bk, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: h
        }, null, 8, ["gateways"])) : (t(), a("p", Ok, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      I(It, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: S[8] || (S[8] = (k) => n.value = null)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            size: "sm",
            onClick: S[6] || (S[6] = (k) => n.value = null)
          }, {
            default: j(() => [...S[21] || (S[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(se, {
            key: 0,
            size: "sm",
            onClick: S[7] || (S[7] = (k) => h(s.value.key))
          }, {
            default: j(() => [
              U(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : y("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), a("div", jk, [
            l("div", Lk, [
              I(be, {
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
                default: j(() => [...S[9] || (S[9] = [
                  U(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(be, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...S[10] || (S[10] = [
                  U(" Disabled ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              s.value.isDefault ? (t(), T(be, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...S[11] || (S[11] = [
                  U(" Default ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              s.value.connected && s.value.mode ? (t(), T(be, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  U(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : y("", !0)
            ]),
            l("p", Vk, f(s.value.caption), 1),
            l("label", Tk, [
              S[12] || (S[12] = U(" Display name ", -1)),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, Dk)
            ]),
            S[20] || (S[20] = l("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", Ek, [
              S[16] || (S[16] = l("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              S[17] || (S[17] = l("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              l("div", Ik, [
                I(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: S[1] || (S[1] = (k) => p(s.value.key, !0))
                }, {
                  default: j(() => [...S[13] || (S[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: S[2] || (S[2] = (k) => p(s.value.key, !1))
                }, {
                  default: j(() => [...S[14] || (S[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: S[3] || (S[3] = (k) => x(s.value.key))
                }, {
                  default: j(() => [...S[15] || (S[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : y("", !0),
            s.value.connected ? (t(), a("div", Fk, [
              I(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: S[4] || (S[4] = (k) => A("test"))
              }, {
                default: j(() => [...S[18] || (S[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              I(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: S[5] || (S[5] = (k) => A("live"))
              }, {
                default: j(() => [...S[19] || (S[19] = [
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
function E5(e) {
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
function I5(e) {
  const { config: o, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = K(
    o.driver === "none" ? "off" : "connecting"
  ), m = K(/* @__PURE__ */ new Set());
  let h = /* @__PURE__ */ new Map(), p, x, A, w = (/* @__PURE__ */ new Date()).toISOString(), S = null;
  function k(G, Z) {
    h.set(G, { ...h.get(G) ?? {}, ...Z }), !p && (p = setTimeout(() => {
      p = void 0, g();
    }, o.batchMs));
  }
  function g() {
    if (h.size === 0)
      return;
    const G = h;
    h = /* @__PURE__ */ new Map();
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
        const G = n.value.map((te) => te[r]), { records: Z, at: ae } = await s(G, w);
        w = ae, u.value = "live";
        for (const te of Z)
          k(te[r], te);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function c() {
    C(), u.value = "live", x = setInterval(v, o.intervalMs);
  }
  function C() {
    clearInterval(x), x = void 0, A?.abort();
  }
  function B() {
    return window.Echo ?? null;
  }
  function P() {
    const G = B();
    if (!G || !o.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    S = o.channel;
    const Z = G.private(o.channel);
    for (const ae of o.events)
      Z.listen(ae, (te) => {
        te?.[r] !== void 0 && k(te[r], te);
      });
    u.value = "live", G.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), G.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function R() {
    S && (B()?.leave(S), S = null);
  }
  function D() {
    o.driver === "poll" && c(), o.driver === "broadcast" && P();
  }
  function ee() {
    C(), R(), clearTimeout(p), p = void 0, h = /* @__PURE__ */ new Map();
  }
  function H() {
    o.pauseWhenHidden && (document.hidden ? (ee(), u.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), D(), i?.()));
  }
  return pe(() => {
    o.driver !== "none" && (D(), o.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), he(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: u, recentlyChanged: m, applyPatch: k, flush: g, pollOnce: v };
}
const Nk = /^[a-z0-9-]+$/, Rk = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function F5(e) {
  La(() => {
    if (typeof document > "u")
      return;
    const o = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !Nk.test(n) || typeof r != "string" || !Rk.test(r) || (o[`--${n}`] = r);
    Ii(o);
  });
}
const Uk = { class: "flex items-center gap-0.5" }, Hk = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", Uk, [
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
}), qk = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), T(xa, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Kk = { class: "flex flex-col gap-2" }, Gk = { class: "bg-card rounded-lg border p-4" }, Wk = { class: "text-muted-foreground truncate text-xs" }, Zk = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Jk = /* @__PURE__ */ O({
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
      const S = String(o.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return S === "" ? d.value : `${d.value} › ${S.split("/").join(" › ")}`;
    });
    function m(S, k) {
      return S.length <= k ? S : `${S.slice(0, k - 1).trimEnd()}…`;
    }
    const h = $(() => m(s.value, r.value.titleMax)), p = $(() => m(i.value, r.value.descriptionMax));
    function x(S, k, g) {
      return S === 0 ? { tone: "text-muted-foreground", note: "empty" } : S > g ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : S < k ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const A = $(
      () => x(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = $(
      () => x(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (S, k) => (t(), a("div", Kk, [
      l("div", Gk, [
        l("p", Wk, f(u.value), 1),
        l("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", h.value === "" ? "text-muted-foreground italic" : ""])
        }, f(h.value || "Untitled page"), 3),
        l("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      l("div", Zk, [
        l("span", {
          class: z(A.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(A.value.note), 3),
        l("span", {
          class: z(w.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(w.value.note), 3)
      ]),
      k[0] || (k[0] = l("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function Yk() {
  Me("radio", gc), Me("checkboxlist", xc), Me("tags", Mc), Me("colour", Ec), Me("slider", Hc), Me("visual-select", nf), Me("markdown", Zu), Me("code", ac), Me("seo-preview", Jk), pt("swatch", of), pt("voucher-code-box", qk), pt("document-colour-mode", Hk);
}
function $a() {
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
  }), he(() => n?.disconnect()), { el: e, shown: o };
}
const Xk = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: o, shown: n } = $a();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: z(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), Qk = ["id"], Se = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (o, n) => (t(), a("section", {
      id: e.id,
      class: z(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      l("div", {
        class: z(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        I(Xk, null, {
          default: j(() => [
            q(o.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Qk));
  }
}), e2 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, t2 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, a2 = {
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
      class: z(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", e2, f(e.eyebrow), 1)) : y("", !0),
      e.title ? (t(), a("h2", t2, f(e.title), 1)) : y("", !0),
      e.body ? (t(), a("p", a2, f(e.body), 1)) : y("", !0)
    ], 2)) : y("", !0);
  }
});
function n2() {
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
  }), he(() => {
    o?.removeEventListener("pointermove", n), o?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const l2 = { class: "pk-tilt-inner relative h-full" }, o2 = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: o } = n2();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: "pk-tilt group/tilt"
    }, [
      l("div", l2, [
        r[0] || (r[0] = l("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(n.$slots, "default")
      ])
    ], 512));
  }
}), s2 = { class: "flex flex-col gap-10" }, r2 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, i2 = { class: "text-base font-semibold" }, d2 = { class: "text-sm text-pretty text-muted-foreground" }, u2 = /* @__PURE__ */ O({
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
        l("div", s2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", r2, [
            (t(!0), a(_, null, V(e.items ?? [], (s, i) => (t(), T(o2, {
              key: i,
              class: z(o(s.span))
            }, {
              default: j(() => [
                l("div", {
                  class: z([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  l("h3", i2, f(s.title), 1),
                  l("p", d2, f(s.body), 1)
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
}), c2 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, f2 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, m2 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, p2 = ["href"], v2 = /* @__PURE__ */ O({
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
        l("div", c2, [
          l("h2", f2, f(e.title), 1),
          e.body ? (t(), a("p", m2, f(e.body), 1)) : y("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, p2)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), g2 = { class: "flex flex-col gap-8" }, h2 = { class: "divide-y rounded-lg border" }, b2 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, x2 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, y2 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, { narrow: "" }, {
      default: j(() => [
        l("div", g2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", h2, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              l("summary", b2, [
                U(f(r.question) + " ", 1),
                n[0] || (n[0] = l("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              l("p", x2, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), k2 = { class: "flex flex-col gap-10" }, $2 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, w2 = { class: "text-sm font-semibold" }, C2 = { class: "text-sm text-pretty text-muted-foreground" }, S2 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", k2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", $2, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("h3", w2, f(r.title), 1),
              l("p", C2, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), M2 = { class: "flex flex-col items-center gap-6 text-center" }, B2 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, A2 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, P2 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, _2 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, z2 = ["href"], O2 = ["href"], j2 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, L2 = /* @__PURE__ */ O({
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
        l("div", M2, [
          e.eyebrow ? (t(), a("p", B2, f(e.eyebrow), 1)) : y("", !0),
          l("h1", A2, f(e.title), 1),
          e.body ? (t(), a("p", P2, f(e.body), 1)) : y("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", _2, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, z2)) : y("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, O2)) : y("", !0)
          ])) : y("", !0),
          e.note ? (t(), a("p", j2, f(e.note), 1)) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), V2 = { class: "flex flex-col items-center gap-6" }, T2 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, D2 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, E2 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, { muted: "" }, {
      default: j(() => [
        l("div", V2, [
          e.title ? (t(), a("p", T2, f(e.title), 1)) : y("", !0),
          l("ul", D2, [
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
}), I2 = { class: "flex flex-col gap-10" }, F2 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, N2 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, R2 = ["aria-pressed"], U2 = ["aria-pressed"], H2 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, q2 = { class: "grid gap-4 md:grid-cols-3" }, K2 = { class: "flex flex-col gap-1" }, G2 = { class: "text-sm font-semibold" }, W2 = { class: "flex items-baseline gap-1" }, Z2 = { class: "text-3xl font-semibold tracking-tight" }, J2 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, Y2 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, X2 = { class: "flex flex-col gap-2 text-sm" }, Q2 = { class: "text-muted-foreground" }, e$ = ["href"], t$ = /* @__PURE__ */ O({
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
        l("div", I2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", F2, [
            l("div", N2, [
              l("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, R2),
              l("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, U2)
            ]),
            e.annualNote ? (t(), a("p", H2, f(e.annualNote), 1)) : y("", !0)
          ])) : y("", !0),
          l("ul", q2, [
            (t(!0), a(_, null, V(e.items ?? [], (u, m) => (t(), a("li", {
              key: m,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              l("div", K2, [
                l("h3", G2, f(u.name), 1),
                l("p", W2, [
                  l("span", Z2, f(s(u)), 1),
                  u.period ? (t(), a("span", J2, f(u.period), 1)) : y("", !0)
                ]),
                u.body ? (t(), a("p", Y2, f(u.body), 1)) : y("", !0)
              ]),
              l("ul", X2, [
                (t(!0), a(_, null, V(u.features ?? [], (h, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = l("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  l("span", Q2, f(h.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, e$)) : y("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function a$() {
  const e = K(null);
  let o = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !o || !s)
      return;
    const u = o.getBoundingClientRect(), m = u.height + window.innerHeight, h = m <= 0 ? 0 : (window.innerHeight - u.top) / m;
    o.style.setProperty("--pk-progress", String(Math.min(Math.max(h, 0), 1)));
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
        s = m.some((h) => h.isIntersecting), s && d();
      }), n.observe(o), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), he(() => {
    n?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const n$ = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, l$ = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, o$ = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, s$ = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, r$ = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, i$ = { class: "pk-showcase-stage w-full [perspective:1400px]" }, d$ = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, u$ = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, c$ = { class: "ml-3 truncate text-xs text-muted-foreground" }, f$ = { class: "flex" }, m$ = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, p$ = { class: "min-w-0 flex-1 p-4" }, v$ = { class: "flex flex-col divide-y rounded-md border" }, g$ = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: o } = a$();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: o,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      l("div", n$, [
        l("div", l$, [
          l("div", o$, [
            l("h2", s$, f(e.title), 1),
            e.body ? (t(), a("p", r$, f(e.body), 1)) : y("", !0)
          ]),
          l("div", i$, [
            l("div", d$, [
              l("div", u$, [
                r[0] || (r[0] = l("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = l("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = l("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                l("span", c$, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              l("div", f$, [
                l("div", m$, [
                  (t(), a(_, null, V(6, (s) => l("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                l("div", p$, [
                  r[4] || (r[4] = l("div", { class: "mb-3 flex gap-2" }, [
                    l("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  l("div", v$, [
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
}), h$ = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const o = e, { el: n, shown: r } = $a(), s = K(0);
    return fe(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = o.to;
        return;
      }
      const u = performance.now(), m = (h) => {
        const p = Math.min((h - u) / o.duration, 1);
        s.value = o.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = o.to;
      };
      requestAnimationFrame(m);
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), b$ = { class: "flex flex-col gap-10" }, x$ = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, y$ = { class: "order-2 text-sm text-muted-foreground" }, k$ = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, $$ = /* @__PURE__ */ O({
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
        l("div", b$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("dl", x$, [
            (t(!0), a(_, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              l("dt", y$, f(s.label), 1),
              l("dd", k$, [
                o(s.value) ? (t(), T(h$, {
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
}), w$ = { class: "flex flex-col gap-10" }, C$ = { class: "grid gap-6 md:grid-cols-3" }, S$ = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, M$ = { class: "text-sm font-semibold" }, B$ = { class: "text-sm text-pretty text-muted-foreground" }, A$ = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", w$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ol", C$, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              l("span", S$, f(s + 1), 1),
              l("h3", M$, f(r.title), 1),
              l("p", B$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), P$ = { class: "flex flex-col gap-10" }, _$ = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, z$ = { class: "text-pretty text-sm leading-relaxed" }, O$ = { class: "mt-auto flex items-center gap-3" }, j$ = ["src"], L$ = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, V$ = { class: "min-w-0" }, T$ = { class: "block truncate text-sm font-medium" }, D$ = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, E$ = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Se, null, {
      default: j(() => [
        l("div", P$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", _$, [
            (t(!0), a(_, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("blockquote", z$, " “" + f(r.quote) + "” ", 1),
              l("figcaption", O$, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, j$)) : (t(), a("span", L$, f((r.name ?? "?").slice(0, 1)), 1)),
                l("span", V$, [
                  l("span", T$, f(r.name), 1),
                  r.role ? (t(), a("span", D$, f(r.role), 1)) : y("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), N5 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const n = e, r = {
      hero: L2,
      logos: E2,
      features: S2,
      bento: u2,
      showcase: g$,
      steps: A$,
      stats: $$,
      testimonials: E$,
      pricing: t$,
      faq: y2,
      cta: v2
    }, s = $(
      () => (n.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return o({ known: Object.keys(r) }), (i, d) => (t(!0), a(_, null, V(s.value, (u) => (t(), T(xe(u.component), oe({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), I$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, R5 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", I$, [
      l("div", {
        class: z([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      l("div", {
        class: z([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      l("div", {
        class: z([
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
}), F$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, U5 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", F$, [...n[0] || (n[0] = [
      Ct('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), N$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, H5 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", N$, [...n[0] || (n[0] = [
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
Yk();
const q5 = "0.0.1";
export {
  c5 as AdminDirectory,
  Od as Alert,
  jd as AlertDescription,
  Ld as AlertTitle,
  Y4 as AppPageFooter,
  pw as AppearanceDrawer,
  m4 as Avatar,
  p4 as AvatarFallback,
  v4 as AvatarImage,
  jt as BADGE_VARIANTS,
  uw as BadgeResolver,
  l5 as BarChart,
  g4 as Breadcrumb,
  h4 as BreadcrumbEllipsis,
  b4 as BreadcrumbItem,
  x4 as BreadcrumbLink,
  y4 as BreadcrumbList,
  k4 as BreadcrumbPage,
  $4 as BreadcrumbSeparator,
  Y$ as BulkActions,
  Id as CATALOGUE_GRID,
  kw as CATALOGUE_GRID_TIGHT,
  Fd as CATALOGUE_GRID_TILES,
  N4 as Card,
  R4 as CardAction,
  U4 as CardContent,
  H4 as CardDescription,
  q4 as CardFooter,
  K4 as CardHeader,
  G4 as CardTitle,
  c1 as CartPanel,
  y5 as CatalogBrowser,
  Tg as CatalogCard,
  ka as CatalogFilterSheet,
  Et as CatalogGrid,
  b5 as CatalogInspect,
  ex as CatalogItemDetail,
  x5 as CatalogItemView,
  k5 as CatalogRegister,
  h5 as CatalogTill,
  rv as ChartCard,
  Qe as ChartTooltip,
  Vo as Checkbox,
  ow as CheckboxCell,
  sw as CodeCell,
  Nr as ColourCell,
  d5 as ComboChart,
  Lo as CreateOptionDialog,
  ko as CreateOptionError,
  w5 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Vx as DASHBOARD_HIDE_KEY,
  C5 as DashboardShortcuts,
  yl as DataTable,
  _4 as Dialog,
  z4 as DialogClose,
  O4 as DialogContent,
  j4 as DialogDescription,
  L4 as DialogFooter,
  V4 as DialogHeader,
  hu as DialogOverlay,
  T4 as DialogScrollContent,
  D4 as DialogTitle,
  E4 as DialogTrigger,
  c5 as DirectoryPage,
  Qw as DropdownMenu,
  e4 as DropdownMenuCheckboxItem,
  t4 as DropdownMenuContent,
  a4 as DropdownMenuGroup,
  n4 as DropdownMenuItem,
  l4 as DropdownMenuLabel,
  W5 as DropdownMenuPortal,
  o4 as DropdownMenuRadioGroup,
  s4 as DropdownMenuRadioItem,
  r4 as DropdownMenuSeparator,
  i4 as DropdownMenuShortcut,
  d4 as DropdownMenuSub,
  u4 as DropdownMenuSubContent,
  c4 as DropdownMenuSubTrigger,
  f4 as DropdownMenuTrigger,
  iw as EditableCell,
  Cw as FORM_MEASURE,
  Ne as FormFieldControl,
  u5 as HeatmapChart,
  ct as ICON_PATHS,
  jr as IconCell,
  Tr as ImageCell,
  T5 as InfoNode,
  Rd as JPEG_IMAGE_ERROR,
  rw as KeyValueCell,
  I4 as Label,
  Cm as LineChart,
  qb as LineItems,
  ot as MiniStatCard,
  w4 as NavigationMenu,
  C4 as NavigationMenuContent,
  S4 as NavigationMenuIndicator,
  M4 as NavigationMenuItem,
  B4 as NavigationMenuLink,
  A4 as NavigationMenuList,
  P4 as NavigationMenuTrigger,
  vu as NavigationMenuViewport,
  Nd as OPAQUE_IMAGE_ERROR,
  Te as PAGE_SHELL,
  $w as PAGE_SHELL_COMPACT,
  ww as PAGE_SHELL_STACK,
  D5 as PaymentGatewaySettings,
  Bk as PaymentGateways,
  o5 as PieChart,
  xw as PkAlertError,
  R5 as PkAuroraBackdrop,
  Ge as PkBadge,
  u2 as PkBento,
  vw as PkBottomNav,
  W4 as PkBoundary,
  e5 as PkBuilder,
  se as PkButton,
  Z4 as PkCard,
  xc as PkCheckboxList,
  xa as PkCodeBox,
  ac as PkCodeInput,
  Ec as PkColourPicker,
  H5 as PkConsoleBackdrop,
  h$ as PkCountUp,
  v2 as PkCta,
  X4 as PkDeviceFrame,
  Df as PkDocument,
  Fe as PkDropdown,
  U5 as PkEditorialBackdrop,
  Rt as PkEmptyState,
  y2 as PkFaq,
  S2 as PkFeatureGrid,
  ke as PkFieldLabel,
  da as PkFileUpload,
  Pe as PkHeading,
  L2 as PkHero,
  ds as PkKeyValue,
  N5 as PkLandingSections,
  E2 as PkLogoCloud,
  Zu as PkMarkdownInput,
  Ze as PkModal,
  Ot as PkMultiSelect,
  hw as PkOtpInput,
  bw as PkPageHeader,
  O5 as PkPasskeyRegister,
  yw as PkPasswordInput,
  t$ as PkPricing,
  Lb as PkQtyStepper,
  li as PkQueryBuilder,
  gc as PkRadioGroup,
  Q4 as PkRepeater,
  Xk as PkReveal,
  xs as PkRichEditor,
  Se as PkSection,
  De as PkSectionHeading,
  g$ as PkShowcase,
  vx as PkSignaturePad,
  $e as PkSkeleton,
  It as PkSlideover,
  Hc as PkSlider,
  gw as PkSpinner,
  $$ as PkStats,
  be as PkStatusBadge,
  xo as PkStepIndicator,
  A$ as PkSteps,
  of as PkSwatchPreview,
  Mc as PkTagsInput,
  E$ as PkTestimonials,
  ge as PkTextInput,
  o2 as PkTiltCard,
  nf as PkVisualSelect,
  dh as PlanCard,
  g5 as PlanEditor,
  v5 as PlanGrid,
  i5 as PolarAreaChart,
  r5 as RadarChart,
  cw as RecordActions,
  j5 as RecordForm,
  lw as RelationCreateDialog,
  X$ as RelationPanel,
  mg as STATUS_TONES,
  s5 as ScatterChart,
  ua as SchemaNode,
  m5 as SegmentedBar,
  B5 as SelectionBar,
  uu as Separator,
  M5 as SetupChecklist,
  pa as ShadcnInput,
  Tt as Sheet,
  Mw as SheetClose,
  Dt as SheetContent,
  Zd as SheetDescription,
  Bw as SheetFooter,
  Jd as SheetHeader,
  Yd as SheetTitle,
  Aw as SheetTrigger,
  Mv as ShortcutsWidget,
  Pw as Sidebar,
  _w as SidebarContent,
  zw as SidebarFooter,
  Ow as SidebarGroup,
  jw as SidebarGroupAction,
  Lw as SidebarGroupContent,
  Vw as SidebarGroupLabel,
  Tw as SidebarHeader,
  Dw as SidebarInput,
  Ew as SidebarInset,
  Iw as SidebarMenu,
  Fw as SidebarMenuAction,
  Nw as SidebarMenuBadge,
  Uw as SidebarMenuButton,
  Hw as SidebarMenuItem,
  qw as SidebarMenuSkeleton,
  Kw as SidebarMenuSub,
  Gw as SidebarMenuSubButton,
  Ww as SidebarMenuSubItem,
  Zw as SidebarProvider,
  Jw as SidebarRail,
  Yw as SidebarSeparator,
  Xw as SidebarTrigger,
  $5 as SignatureStudio,
  it as Sparkline,
  F4 as Spinner,
  f5 as StatCard,
  p5 as StatListChart,
  S5 as StatStrip,
  Ie as Switch,
  va as TRANSPARENT_IMAGE_HELP,
  A5 as TablePagination,
  P5 as TableShell,
  _5 as TableTabs,
  z5 as TableToolbar,
  n5 as ThemeToggle,
  ru as Tooltip,
  iu as TooltipContent,
  Rw as TooltipProvider,
  du as TooltipTrigger,
  ya as TrendBadge,
  L5 as UnsavedBar,
  Vd as alertVariants,
  Ei as appearanceVars,
  $t as applyAppearance,
  Gd as assertTransparentImage,
  Ke as buttonClasses,
  st as catalogFiltersActive,
  Q as cn,
  wo as createOptionActionLabel,
  $o as createOptionTitle,
  Dg as cycleLabel,
  _e as emptyCatalogFilters,
  yo as fieldControl,
  aw as fieldErrorsFromPayload,
  hb as findExactSku,
  Eg as formatPerkValue,
  mi as hasBadgeValue,
  Q$ as hasFieldControl,
  t5 as hasOptionPreview,
  de as iconPath,
  qd as imageHasTransparency,
  fw as initializeAppearance,
  kt as isDark,
  Ft as matchCatalogItem,
  gu as navigationMenuTriggerStyle,
  qc as optionPreview,
  Sw as packWidgetColumns,
  Ig as perkGranted,
  Vt as readAppearance,
  Yk as registerBuiltInFieldControls,
  Me as registerFieldControl,
  pt as registerOptionPreview,
  ew as registeredFieldTypes,
  Kc as registeredOptionPreviews,
  tw as resetFieldControls,
  a5 as resetOptionPreviews,
  mw as setAppearancePersister,
  cu as sidebarMenuButtonVariants,
  hg as statusBadgeVariant,
  gg as statusTone,
  nw as toUrl,
  ma as useAppearance,
  E5 as useColumnVisibility,
  I5 as useLiveUpdates,
  n2 as usePointer,
  $a as useReveal,
  dw as useSchemaColumns,
  a$ as useScrollProgress,
  J4 as useShellPageFooter,
  rt as useSidebar,
  F5 as useTenantTheme,
  V5 as useUnsavedChanges,
  q5 as version
};
//# sourceMappingURL=index.js.map
