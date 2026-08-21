import './ui.css';
import { defineComponent as O, openBlock as t, createElementBlock as a, normalizeClass as z, createElementVNode as l, renderSlot as q, unref as b, toDisplayString as f, createCommentVNode as k, ref as K, watch as fe, useId as Ma, computed as $, withModifiers as me, Fragment as P, renderList as V, createTextVNode as U, createStaticVNode as Ct, createBlock as T, createSlots as ht, withCtx as j, nextTick as Be, onBeforeUnmount as he, Teleport as Re, createVNode as I, Transition as je, onMounted as pe, normalizeStyle as ne, resolveDynamicComponent as xe, mergeProps as oe, withDirectives as ce, vModelText as ye, normalizeProps as $e, guardReactiveProps as ze, defineAsyncComponent as Nt, inject as at, resolveComponent as St, vShow as Le, vModelSelect as De, vModelDynamic as Ba, isRef as Aa, useTemplateRef as _a, onErrorCaptured as Pa, provide as bt, useSlots as za, markRaw as Xt, withKeys as Oa, reactive as We, useModel as Je, mergeModels as Pe, shallowRef as ja, watchEffect as La } from "vue";
import { Check as Qt, AlertCircle as Va, EyeOff as Ta, Eye as Da, X as Mt, PanelLeftOpen as Ea, PanelLeftClose as Ia, Circle as Fa, ChevronRight as ea, MoreHorizontal as Na, ChevronDown as Ra, Loader2Icon as Ua } from "@lucide/vue";
import { reactiveOmit as ie, useVModel as ta, useMediaQuery as Ha, useEventListener as qa, defaultDocument as Ka } from "@vueuse/core";
import { useForwardPropsEmits as ve, CheckboxRoot as Ga, CheckboxIndicator as Wa, SwitchRoot as Za, SwitchThumb as Ja, DialogRoot as aa, DialogClose as Ue, DialogOverlay as Bt, DialogPortal as At, DialogContent as _t, DialogDescription as na, DialogTitle as la, DialogTrigger as oa, createContext as Ya, Primitive as He, TooltipRoot as Xa, TooltipPortal as Qa, TooltipContent as en, TooltipArrow as tn, TooltipProvider as sa, TooltipTrigger as an, Separator as nn, DropdownMenuRoot as ln, DropdownMenuCheckboxItem as on, DropdownMenuItemIndicator as ra, DropdownMenuPortal as sn, DropdownMenuContent as rn, DropdownMenuGroup as un, useForwardProps as we, DropdownMenuItem as dn, DropdownMenuLabel as cn, DropdownMenuRadioGroup as fn, DropdownMenuRadioItem as mn, DropdownMenuSeparator as pn, DropdownMenuSub as vn, DropdownMenuSubContent as gn, DropdownMenuSubTrigger as hn, DropdownMenuTrigger as bn, AvatarRoot as xn, AvatarFallback as yn, AvatarImage as kn, NavigationMenuViewport as $n, NavigationMenuRoot as wn, NavigationMenuContent as Cn, NavigationMenuIndicator as Sn, NavigationMenuItem as Mn, NavigationMenuLink as Bn, NavigationMenuList as An, NavigationMenuTrigger as _n, Label as Pn } from "reka-ui";
import { DropdownMenuPortal as H5 } from "reka-ui";
import { clsx as zn } from "clsx";
import { twMerge as On } from "tailwind-merge";
import { cva as Pt } from "class-variance-authority";
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
function ue(e) {
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
              d: b(ue)(e.icon)
            }, null, 8, Ln)
          ], 2))
        ])
      ], 2),
      l("div", Vn, [
        l("p", {
          class: z(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), a("p", Tn, f(e.description), 1)) : k("", !0)
      ]),
      o.$slots.actions ? (t(), a("div", Dn, [
        q(o.$slots, "actions")
      ])) : k("", !0)
    ], 2));
  }
}), En = { class: "w-full border-collapse text-sm" }, In = { class: "bg-background sticky top-0 z-10" }, Fn = { class: "bg-muted/50" }, Nn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Rn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Un = ["id", "checked", "indeterminate"], Hn = ["onClick"], qn = {
  key: 0,
  class: "text-xs"
}, Kn = {
  key: 1,
  class: "text-xs opacity-40"
}, Gn = { key: 1 }, Wn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Zn = {
  key: 0,
  class: "bg-muted/40"
}, Jn = ["colspan"], Yn = ["aria-expanded", "dusk", "onClick"], Xn = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Qn = {
  key: 1,
  dusk: "group-header"
}, el = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], tl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, al = {
  key: 1,
  class: "px-3 py-2"
}, nl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], ll = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, ol = ["aria-label", "onClick"], sl = { class: "text-xs" }, rl = { key: 1 }, il = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, ul = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, dl = { key: 0 }, cl = { class: "text-muted-foreground block text-[10px] font-medium" }, fl = { class: "font-semibold tabular-nums" }, ml = { key: 1 }, pl = /* @__PURE__ */ O({
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
    const u = K(/* @__PURE__ */ new Set()), d = K(/* @__PURE__ */ new Set());
    function m(F) {
      return n.groupBy?.collapsible ? u.value.has(F) : !1;
    }
    function h(F) {
      if (!n.groupBy?.collapsible)
        return;
      const E = new Set(d.value);
      E.add(F), d.value = E;
      const X = new Set(u.value);
      X.has(F) ? X.delete(F) : X.add(F), u.value = X;
    }
    function p(F) {
      return n.groupBy?.collapsible ? !m(r(n.rows[F])) : !0;
    }
    fe(
      () => n.rows,
      (F) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const E = new Set(u.value);
        for (const X of F) {
          const de = r(X);
          de !== "" && !d.value.has(de) && E.add(de);
        }
        u.value = E;
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
    function y(F) {
      return x.value === null || A.value !== F ? "" : x.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function g(F, E) {
      x.value !== null && (E.preventDefault(), A.value = F);
    }
    function v(F) {
      const E = x.value;
      if (x.value = null, A.value = null, E === null || E === F)
        return;
      const X = n.rows.map((re) => re[n.rowKey]), [de] = X.splice(E, 1);
      X.splice(F, 0, de), c("reorder", X);
    }
    const c = o;
    function C(F, E) {
      !n.rowClickable || n.reordering || E.button !== 0 || E.metaKey || E.ctrlKey || E.shiftKey || E.altKey || E.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", F);
    }
    const B = K(null), _ = Ma(), R = $(() => n.columns.filter((F) => !n.hidden?.has(F.key)));
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
      const de = E.shiftKey, re = !!n.selected?.has(X);
      if (de && H.value !== null && H.value !== X) {
        const et = G(H.value), ut = G(X);
        if (et !== -1 && ut !== -1) {
          const wa = Math.min(et, ut), Ca = Math.max(et, ut), Sa = !re;
          for (let tt = wa; tt <= Ca; tt++) {
            if (!p(tt))
              continue;
            const dt = D(n.rows[tt]);
            if (dt === null)
              continue;
            !!n.selected?.has(dt) !== Sa && c("toggle-row", dt);
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
      const de = E.divideBy ? X / E.divideBy : X, re = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: E.decimals,
        maximumFractionDigits: E.decimals
      }).format(de);
      return `${E.prefix ?? ""}${re}${E.suffix ?? ""}`;
    }
    return (F, E) => (t(), a("div", {
      class: z(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      l("table", En, [
        l("thead", In, [
          l("tr", Fn, [
            e.reordering ? (t(), a("th", Nn)) : k("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Rn, [
              l("input", {
                id: `${b(_)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: te.value,
                indeterminate: J.value,
                "aria-label": "Select all rows on this page",
                onClick: E[0] || (E[0] = me(() => {
                }, ["stop"])),
                onChange: E[1] || (E[1] = me((X) => c("toggle-page", !te.value), ["stop"]))
              }, null, 40, Un)
            ])) : k("", !0),
            (t(!0), a(P, null, V(R.value, (X) => (t(), a("th", {
              key: X.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              X.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (de) => c("sort", W(X))
              }, [
                U(f(X.label) + " ", 1),
                M(X) ? (t(), a("span", qn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Kn, "↕"))
              ], 8, Hn)) : (t(), a("span", Gn, f(X.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), a("th", Wn, [...E[2] || (E[2] = [
              l("span", { class: "sr-only" }, "Actions", -1)
            ])])) : k("", !0)
          ])
        ]),
        l("tbody", {
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(P, null, V(e.rows, (X, de) => (t(), a(P, {
            key: D(X) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), a("tr", Zn, [
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
                  l("span", Xn, f(m(r(X)) ? "▸" : "▾"), 1),
                  U(" " + f(i(X)), 1)
                ], 8, Yn)) : (t(), a("span", Qn, f(i(X)), 1))
              ], 8, Jn)
            ])) : k("", !0),
            p(de) ? (t(), a("tr", {
              key: 1,
              class: z(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                ee(X) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                x.value === de ? "opacity-40" : "",
                y(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (re) => w(de, re),
              onDragover: (re) => g(de, re),
              onDrop: me((re) => v(de), ["prevent"]),
              onDragend: S,
              onContextmenu: (re) => c("row-contextmenu", X, re),
              onClick: (re) => C(X, re)
            }, [
              e.reordering ? (t(), a("td", tl, [...E[3] || (E[3] = [
                Ct('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-97385981><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-97385981><circle cx="9" cy="6" r="1.5" data-v-97385981></circle><circle cx="15" cy="6" r="1.5" data-v-97385981></circle><circle cx="9" cy="12" r="1.5" data-v-97385981></circle><circle cx="15" cy="12" r="1.5" data-v-97385981></circle><circle cx="9" cy="18" r="1.5" data-v-97385981></circle><circle cx="15" cy="18" r="1.5" data-v-97385981></circle></svg></span>', 1)
              ])])) : k("", !0),
              e.selectable && !e.reordering ? (t(), a("td", al, [
                l("input", {
                  id: `${b(_)}-row-${D(X) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: D(X) ?? void 0,
                  checked: ee(X),
                  disabled: D(X) === null,
                  "aria-label": D(X) === null ? "This row has no id and cannot be selected" : `Select row ${D(X)}`,
                  onClick: me((re) => Z(X, re), ["stop"])
                }, null, 8, nl)
              ])) : k("", !0),
              (t(!0), a(P, null, V(R.value, (re) => (t(), a("td", {
                key: re.key,
                class: z(["px-3 py-2 whitespace-nowrap", re.cellClass])
              }, [
                q(F.$slots, `cell:${re.key}`, {
                  row: X,
                  value: X[re.key],
                  column: re
                }, () => [
                  re.copyable ? (t(), a("span", ll, [
                    U(f(X[re.key]) + " ", 1),
                    l("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${re.label.toLowerCase()}`,
                      onClick: (et) => N(String(X[e.rowKey]), re, X[re.key])
                    }, [
                      l("span", sl, f(B.value === `${X[e.rowKey]}-${re.key}` ? "✓" : "⧉"), 1)
                    ], 8, ol)
                  ])) : (t(), a("span", rl, f(X[re.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              F.$slots.actions ? (t(), a("td", il, [
                q(F.$slots, "actions", { row: X }, void 0, !0)
              ])) : k("", !0)
            ], 42, el)) : k("", !0)
          ], 64))), 128))
        ], 2),
        L.value ? (t(), a("tfoot", ul, [
          l("tr", null, [
            e.selectable ? (t(), a("td", dl)) : k("", !0),
            (t(!0), a(P, null, V(e.columns, (X) => (t(), a(P, {
              key: `s-${X.key}`
            }, [
              e.hidden?.has(X.key) ? k("", !0) : (t(), a("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", X.cellClass])
              }, [
                Y(X.key) ? (t(), a(P, { key: 0 }, [
                  l("span", cl, f(Y(X.key).label), 1),
                  l("span", fl, f(le(X.key)), 1)
                ], 64)) : k("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), a("td", ml)) : k("", !0)
          ])
        ])) : k("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), T(Rt, {
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
      ]), 1024)) : e.rows.length === 0 ? (t(), T(Rt, {
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
      ]), 1032, ["icon", "title", "description"])) : k("", !0)
    ], 2));
  }
}), zt = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of o)
    n[r] = s;
  return n;
}, vl = /* @__PURE__ */ zt(pl, [["__scopeId", "data-v-97385981"]]), gl = ["aria-label"], hl = { class: "border-b px-5 py-4" }, bl = { class: "text-base font-semibold" }, xl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, yl = { class: "px-5 py-4" }, kl = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, Ze = /* @__PURE__ */ O({
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
    const u = K(!1);
    function d(p) {
      u.value = p.target === p.currentTarget;
    }
    function m(p) {
      u.value && p.target === p.currentTarget && !n.busy && r("close"), u.value = !1;
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
        p ? (i = document.activeElement, document.addEventListener("keydown", h), Be(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", h), i?.focus(), i = null);
      }
    ), he(() => document.removeEventListener("keydown", h)), (p, x) => (t(), T(Re, { to: "body" }, [
      I(je, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: d,
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
              l("div", hl, [
                l("h2", bl, f(e.title), 1),
                e.description ? (t(), a("p", xl, f(e.description), 1)) : k("", !0)
              ]),
              l("div", yl, [
                q(p.$slots, "default")
              ]),
              l("div", kl, [
                q(p.$slots, "footer")
              ])
            ], 8, gl)
          ], 32)) : k("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), $l = 160, Ie = /* @__PURE__ */ O({
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
    const n = e, r = K(!1), s = K(null), i = K(null), u = K({ top: 0, left: 0, minWidth: 0 }), d = K(null);
    let m = null;
    function h(C) {
      !n.dismissOnPanelClick || C.target?.closest("input, select, textarea, label, [data-keep-open]") || S();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await Be(), y());
    }
    function x() {
      m = setTimeout(S, 180);
    }
    async function A() {
      d.value = null, r.value = !r.value, r.value && (await Be(), y());
    }
    async function w(C, B) {
      d.value = { x: C, y: B }, r.value = !0, await Be(), y();
    }
    function S() {
      r.value = !1, d.value = null;
    }
    function y() {
      const C = s.value, B = i.value;
      if (!C || !B)
        return;
      const _ = B.getBoundingClientRect(), R = 8, D = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : C.getBoundingClientRect();
      let ee, H;
      if (n.placement === "bottom")
        ee = D.bottom + n.offset, ee + _.height > window.innerHeight - R && D.top - _.height - n.offset > R && (ee = D.top - _.height - n.offset), H = n.align === "end" && !d.value ? D.right - _.width : D.left;
      else {
        ee = D.top;
        const G = n.placement === "right", Z = D.right + n.offset + _.width < window.innerWidth - R, ae = D.left - n.offset - _.width > R;
        H = (G ? Z || !ae : !ae && Z) ? D.right + n.offset : D.left - n.offset - _.width;
      }
      H = Math.min(Math.max(R, H), window.innerWidth - _.width - R), ee = Math.min(Math.max(R, ee), window.innerHeight - _.height - R), u.value = { top: ee, left: H, minWidth: Math.max(D.width, $l) };
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
        if (d.value) {
          S();
          return;
        }
        y();
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
      onPointerenter: B[2] || (B[2] = (_) => e.hoverable && p()),
      onPointerleave: B[3] || (B[3] = (_) => e.hoverable && x())
    }, [
      l("div", { onClick: A }, [
        q(C.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Re, { to: "body" }, [
        I(je, {
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
              onPointerenter: B[0] || (B[0] = (_) => e.hoverable && p()),
              onPointerleave: B[1] || (B[1] = (_) => e.hoverable && x()),
              onClick: h
            }, [
              q(C.$slots, "panel", { close: S })
            ], 38)) : k("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), wl = ["disabled"], Cl = { class: "py-0.5" }, Sl = ["disabled", "onClick"], Ml = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bl = ["d"], Al = ["disabled"], _l = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Pl = ["d"], zl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Ol = ["disabled", "onClick"], jl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ll = ["d"], Vl = { class: "text-muted-foreground text-sm" }, Tl = { class: "text-foreground font-medium tabular-nums" }, Dl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, El = ["disabled"], Il = { class: "text-muted-foreground text-sm" }, Fl = { class: "text-foreground font-medium tabular-nums" }, Nl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Rl = ["disabled"], G$ = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!1), u = $(() => n.allMatching ? n.total : n.count), d = $(() => u.value !== void 0), m = $(() => d.value && u.value === 0), h = $(() => n.actions.filter((v) => !v.destructive)), p = $(() => n.actions.filter((v) => v.destructive)), x = {
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
    function y() {
      i.value = !1, r("export");
    }
    const g = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), a(P, null, [
      I(Ie, null, {
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
          ])], 8, wl)
        ]),
        panel: j(() => [
          l("div", Cl, [
            (t(!0), a(P, null, V(h.value, (C) => (t(), a("button", {
              key: C.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", A(C)]),
              disabled: e.busy,
              onClick: (B) => w(C)
            }, [
              (t(), a("svg", Ml, [
                l("path", {
                  d: b(ue)(C.icon)
                }, null, 8, Bl)
              ])),
              U(" " + f(C.label), 1)
            ], 10, Sl))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (C) => i.value = !0)
            }, [
              (t(), a("svg", _l, [
                l("path", {
                  d: b(ue)("download")
                }, null, 8, Pl)
              ])),
              c[6] || (c[6] = U(" Export CSV ", -1))
            ], 8, Al)) : k("", !0),
            p.value.length ? (t(), a("div", zl, [
              (t(!0), a(P, null, V(p.value, (C) => (t(), a("button", {
                key: C.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (B) => w(C)
              }, [
                (t(), a("svg", jl, [
                  l("path", {
                    d: b(ue)(C.icon ?? "trash")
                  }, null, 8, Ll)
                ])),
                U(" " + f(C.label), 1)
              ], 8, Ol))), 128))
            ])) : k("", !0)
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
            disabled: !d.value || m.value,
            onClick: S
          }, f(s.value?.label), 11, El)
        ]),
        default: j(() => [
          l("p", Vl, [
            c[7] || (c[7] = U(" This will affect ", -1)),
            l("span", Tl, [
              d.value ? (t(), a(P, { key: 1 }, [
                U(f(g(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[8] || (c[8] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Dl, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : k("", !0)
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
            disabled: !d.value || m.value,
            onClick: y
          }, " Export CSV ", 8, Rl)
        ]),
        default: j(() => [
          l("p", Il, [
            c[9] || (c[9] = U(" This will export ", -1)),
            l("span", Fl, [
              d.value ? (t(), a(P, { key: 1 }, [
                U(f(g(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[10] || (c[10] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Nl, " Nothing matches the current filters - there is nothing to export. ")) : k("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Ul = { class: "bg-card overflow-hidden rounded-lg border" }, Hl = { class: "pk-scroll w-full overflow-x-auto" }, ql = { class: "w-full border-collapse text-sm" }, Kl = { class: "bg-muted/40" }, Gl = { class: "divide-y" }, Wl = { key: 0 }, Zl = ["colspan"], Jl = { key: 1 }, Yl = ["colspan"], Xl = ["href"], Ql = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, eo = ["disabled"], to = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, ao = ["href"], W$ = /* @__PURE__ */ O({
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
    const n = e, r = o, s = $(() => n.columns.filter((u) => u.type !== "image"));
    function i(u, d) {
      return d == null || d === "" ? "-" : u.type === "date" || u.type === "datetime" ? new Date(String(d)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...u.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof d == "number" ? new Intl.NumberFormat().format(d) : String(d);
    }
    return (u, d) => (t(), a("div", Ul, [
      l("div", Hl, [
        l("table", ql, [
          l("thead", Kl, [
            l("tr", null, [
              (t(!0), a(P, null, V(s.value, (m) => (t(), a("th", {
                key: m.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, f(m.label), 1))), 128))
            ])
          ]),
          l("tbody", Gl, [
            e.loading && e.rows.length === 0 ? (t(), a("tr", Wl, [
              l("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, Zl)
            ])) : e.loaded && e.rows.length === 0 ? (t(), a("tr", Jl, [
              l("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, f(e.emptyText), 9, Yl)
            ])) : k("", !0),
            (t(!0), a(P, null, V(e.rows, (m, h) => (t(), a("tr", {
              key: m.id ?? h,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), a(P, null, V(s.value, (p) => (t(), a("td", {
                key: p.key,
                class: z(["px-3 py-2 whitespace-nowrap", [
                  p.mono ? "font-mono text-xs" : "",
                  p.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                q(u.$slots, `cell:${p.key}`, {
                  row: m,
                  value: m[p.key],
                  column: p
                }, () => [
                  e.recordBase && m.id != null && p === s.value[0] ? (t(), a("a", {
                    key: 0,
                    href: `${e.recordBase}/${m.id}`,
                    class: "text-foreground underline-offset-2 hover:underline"
                  }, f(i(p, m[p.key])), 9, Xl)) : (t(), a(P, { key: 1 }, [
                    U(f(i(p, m[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), a("div", Ql, [
        l("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (m) => r("load", e.nextCursor))
        }, f(e.loading ? "Loading…" : "Load more"), 9, eo)
      ])) : e.capped ? (t(), a("p", to, [
        U(" Showing the first " + f(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), a("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, ao)) : (t(), a(P, { key: 1 }, [
          U("Open the full list to search or filter the rest.")
        ], 64))
      ])) : k("", !0)
    ]));
  }
}), no = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", lo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, oo = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Ke(e = {}) {
  const o = e.variant ?? "default", n = e.size ?? "default";
  return [no, lo[o], oo[n], e.class].filter(Boolean).join(" ");
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
}), so = { class: "flex items-center gap-2 overflow-x-auto" }, ro = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, io = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, uo = { class: "flex flex-col" }, co = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, fo = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, mo = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, po = /* @__PURE__ */ O({
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
    function u(m) {
      return n.failedStep !== null ? m < n.failedStep : m < n.activeStep;
    }
    function d(m) {
      return n.failedStep === m;
    }
    return (m, h) => (t(), a("ol", so, [
      (t(!0), a(P, null, V(e.steps, (p, x) => (t(), a("li", {
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
              d(x) ? (t(), a("svg", ro, [...h[0] || (h[0] = [
                l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(x) ? (t(), a("svg", io, [...h[1] || (h[1] = [
                l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(P, { key: 2 }, [
                U(f(x + 1), 1)
              ], 64))
            ], 2),
            l("span", uo, [
              l("span", null, f(p.label), 1),
              p.description ? (t(), a("span", co, f(p.description), 1)) : k("", !0)
            ]),
            e.hasError(x) ? (t(), a("span", fo)) : k("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        x < e.steps.length - 1 ? (t(), a("span", mo)) : k("", !0)
      ]))), 128))
    ]));
  }
}), Ye = /* @__PURE__ */ new Map();
function Se(e, o) {
  Ye.set(e, o);
}
function vo(e) {
  return Ye.get(e);
}
function Z$(e) {
  return Ye.has(e);
}
function J$() {
  return [...Ye.keys()].sort();
}
function Y$() {
  Ye.clear();
}
class go extends Error {
  fieldErrors;
  constructor(o, n = {}) {
    super(o), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function X$(e) {
  if (!e || typeof e != "object")
    return {};
  const o = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (o[n] = s);
  }
  return o;
}
function ho(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create option";
}
function bo(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create new";
}
const xo = ["aria-expanded"], yo = ["aria-label", "onClick"], ko = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, $o = { class: "ml-auto flex shrink-0 items-center gap-1" }, wo = {
  key: 0,
  class: "border-b p-1"
}, Co = ["placeholder"], So = { class: "max-h-60 overflow-y-auto p-1" }, Mo = ["aria-selected", "onMouseenter", "onClick"], Bo = {
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
    const n = e, r = o, s = K(null), i = K(null), u = K(null), d = K(!1), m = K(""), h = K(0), p = K({ top: 0, left: 0, width: 0 }), x = $(
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
    function y() {
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
      n.disabled || d.value || (d.value = !0, m.value = "", h.value = 0, await Be(), y(), u.value?.focus());
    }
    function v() {
      d.value = !1, m.value = "";
    }
    function c() {
      d.value ? v() : g();
    }
    function C(H) {
      S.value || (r("update:modelValue", [...n.modelValue, H.value]), m.value = "", h.value = 0, Be(() => {
        y(), u.value?.focus();
      }));
    }
    function B(H) {
      r(
        "update:modelValue",
        n.modelValue.filter((G) => G !== H)
      ), Be(y);
    }
    function _() {
      r("update:modelValue", []), Be(y);
    }
    function R(H) {
      if (!n.disabled) {
        if (H.key === "Escape" && d.value) {
          H.stopPropagation(), v();
          return;
        }
        if (H.key === "Backspace" && m.value === "" && n.modelValue.length > 0) {
          B(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!d.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), g();
          return;
        }
        if (d.value) {
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
      if (!d.value)
        return;
      const G = H.target;
      s.value?.contains(G) || i.value?.contains(G) || v();
    }
    function ee() {
      d.value && y();
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
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: c
      }, [
        (t(!0), a(P, null, V(x.value, (Z) => (t(), a("span", {
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
          ])], 8, yo)
        ]))), 128)),
        x.value.length === 0 ? (t(), a("span", ko, f(e.placeholder), 1)) : k("", !0),
        l("span", $o, [
          x.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: me(_, ["stop"])
          }, " Clear ")) : k("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...G[2] || (G[2] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, xo),
      (t(), T(Re, { to: "body" }, [
        I(je, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: j(() => [
            d.value ? (t(), a("div", {
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
              A.value ? (t(), a("div", wo, [
                ce(l("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": G[0] || (G[0] = (Z) => m.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: R
                }, null, 40, Co), [
                  [ye, m.value]
                ])
              ])) : k("", !0),
              l("div", So, [
                (t(!0), a(P, null, V(w.value, (Z, ae) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ae === h.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ae === h.value,
                  onMouseenter: (te) => h.value = ae,
                  onClick: (te) => C(Z)
                }, f(Z.label), 43, Mo))), 128)),
                w.value.length === 0 ? (t(), a("p", Bo, [
                  S.value ? (t(), a(P, { key: 0 }, [
                    U("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), a(P, { key: 1 }, [
                    U("Nothing matches “" + f(m.value) + "”.", 1)
                  ], 64)) : (t(), a(P, { key: 2 }, [
                    U("Everything is selected.")
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
}), Ao = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, _o = /* @__PURE__ */ O({
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
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), T(Ze, {
      open: e.open,
      title: e.title,
      description: e.description,
      busy: e.processing,
      onClose: d[1] || (d[1] = (m) => r("close"))
    }, {
      footer: j(() => [
        I(se, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: d[0] || (d[0] = (m) => r("close"))
        }, {
          default: j(() => [...d[2] || (d[2] = [
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
          e.generalError ? (t(), a("p", Ao, f(e.generalError), 1)) : k("", !0),
          (t(!0), a(P, null, V(e.fields, (m) => (t(), T(Fe, {
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
function Q$(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Po = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Ga), oe({ "data-slot": "checkbox" }, b(i), {
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
            q(u.$slots, "default", $e(ze(m)), () => [
              I(b(Qt), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ee = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(Za), oe({ "data-slot": "switch" }, b(s), {
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
}), zo = ["accept", "disabled"], Oo = { class: "text-sm font-medium" }, jo = { key: 0 }, Lo = { key: 1 }, Vo = { class: "text-muted-foreground text-xs" }, To = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Do = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Eo = ["src"], Io = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Fo = { class: "min-w-0 flex-1" }, No = { class: "block truncate text-sm font-medium" }, Ro = { class: "text-muted-foreground text-xs" }, Uo = ["href"], Ho = {
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
    const n = e, r = o, s = K(null), i = K(!1), u = K(null), d = K(null), m = K(null), h = $(() => n.accept.map((C) => `.${C}`).join(",")), p = $(() => m.value ?? n.modelValue?.url ?? null), x = $(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${A(n.maxKilobytes * 1024)}`);
    function A(C) {
      if (!C)
        return "";
      const B = ["B", "KB", "MB", "GB"];
      let _ = C, R = 0;
      for (; _ >= 1024 && R < B.length - 1; )
        _ /= 1024, R++;
      return `${_.toFixed(_ < 10 && R > 0 ? 1 : 0)} ${B[R]}`;
    }
    function w(C) {
      return C.split(".").pop()?.toLowerCase() ?? "";
    }
    function S(C) {
      return n.accept.length && !n.accept.includes(w(C.name)) ? `${w(C.name).toUpperCase() || "That"} files are not accepted here.` : C.size > n.maxKilobytes * 1024 ? `That file is ${A(C.size)}; the limit is ${A(n.maxKilobytes * 1024)}.` : null;
    }
    async function y(C) {
      const B = C?.[0];
      if (!(!B || n.disabled) && (d.value = S(B), !d.value)) {
        g(), n.image && B.type.startsWith("image/") && (m.value = URL.createObjectURL(B)), u.value = 0;
        try {
          const _ = await n.upload(B, (R) => {
            u.value = R;
          });
          r("update:modelValue", _);
        } catch (_) {
          d.value = _ instanceof Error ? _.message : "The upload failed.", g();
        } finally {
          u.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function g() {
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function v() {
      const C = n.modelValue;
      g(), d.value = null, r("update:modelValue", null), C && !C.url && n.discard && await n.discard(C.value).catch(() => {
      });
    }
    function c(C) {
      i.value = !1, y(C.dataTransfer?.files ?? null);
    }
    return (C, B) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", Do, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Eo)) : (t(), a("span", Io, f(w(e.modelValue.name) || "file"), 1)),
        l("span", Fo, [
          l("span", No, f(e.modelValue.name), 1),
          l("span", Ro, [
            U(f(A(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(P, { key: 0 }, [
              B[4] || (B[4] = U(" · ", -1)),
              l("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Uo)
            ], 64)) : (t(), a(P, { key: 1 }, [
              U(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? k("", !0) : (t(), a("button", {
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
        onDragover: B[1] || (B[1] = me((_) => i.value = !0, ["prevent"])),
        onDragleave: B[2] || (B[2] = me((_) => i.value = !1, ["prevent"])),
        onDrop: me(c, ["prevent"])
      }, [
        l("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: h.value,
          disabled: e.disabled,
          onChange: B[0] || (B[0] = (_) => y(_.target.files))
        }, null, 40, zo),
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
        l("span", Oo, [
          u.value === null ? (t(), a("span", jo, "Drop a file or click to choose")) : (t(), a("span", Lo, "Uploading…"))
        ]),
        l("span", Vo, f(x.value), 1),
        u.value !== null ? (t(), a("span", To, [
          l("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${u.value}%` })
          }, null, 4)
        ])) : k("", !0)
      ], 34)),
      d.value ? (t(), a("p", Ho, f(d.value), 1)) : k("", !0)
    ]));
  }
}), qo = { class: "flex flex-col gap-2" }, Ko = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Go = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Wo = { class: "flex flex-col gap-1" }, Zo = ["onUpdate:modelValue", "disabled", "aria-label"], Jo = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Yo = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Xo = ["onUpdate:modelValue", "disabled", "aria-label"], Qo = ["disabled", "aria-label", "onClick"], es = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ts = { class: "flex items-center gap-3" }, as = ["disabled"], ns = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, ls = /* @__PURE__ */ O({
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
    const u = K(d(n.modelValue));
    function d(y) {
      return y ? Object.entries(y).map(([g, v]) => ({
        uid: i++,
        key: g,
        value: v ?? ""
      })) : [];
    }
    fe(
      () => n.modelValue,
      (y) => {
        JSON.stringify(y ?? null) !== JSON.stringify(m()) && (u.value = d(y));
      }
    );
    function m() {
      const y = {};
      for (const g of u.value) {
        const v = g.key.trim();
        v !== "" && (y[v] = g.value);
      }
      return Object.keys(y).length ? y : null;
    }
    function h() {
      r("update:modelValue", m());
    }
    const p = $(() => {
      const y = /* @__PURE__ */ new Map();
      for (const g of u.value) {
        const v = g.key.trim();
        v !== "" && y.set(v, (y.get(v) ?? 0) + 1);
      }
      return new Set([...y.entries()].filter(([, g]) => g > 1).map(([g]) => g));
    }), x = $(
      () => new Set(
        u.value.map((y) => y.key.trim()).filter((y) => y !== "" && !s.test(y))
      )
    ), A = $(() => n.maxPairs !== null && u.value.length >= n.maxPairs);
    function w() {
      A.value || n.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function S(y) {
      u.value = u.value.filter((g) => g.uid !== y), h();
    }
    return (y, g) => (t(), a("div", qo, [
      u.value.length ? (t(), a("div", Ko, [
        l("div", Go, [
          l("span", null, f(e.keyLabel), 1),
          l("span", null, f(e.valueLabel), 1),
          g[0] || (g[0] = l("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(P, null, V(u.value, (v) => (t(), a("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          l("div", Wo, [
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
            }, null, 42, Zo), [
              [ye, v.key]
            ]),
            x.value.has(v.key.trim()) ? (t(), a("p", Jo, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), a("p", Yo, " Used twice - only the last value will be saved. ")) : k("", !0)
          ]),
          ce(l("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: h
          }, null, 40, Xo), [
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
          ])], 8, Qo)
        ]))), 128))
      ])) : (t(), a("p", es, " Nothing here yet. ")),
      l("div", ts, [
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
        ], 8, as),
        e.maxPairs !== null ? (t(), a("p", ns, f(u.value.length) + " of " + f(e.maxPairs), 1)) : k("", !0)
      ])
    ]));
  }
}), os = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, ss = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, rs = ["disabled", "title", "aria-label", "onClick"], is = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, us = ["d"], ds = ["disabled"], cs = ["contenteditable", "data-placeholder"], fs = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, ms = /* @__PURE__ */ O({
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
    ], d = $(() => u.filter((S) => n.toolbar.includes(S.id))), m = $(() => n.toolbar.includes("link")), h = K(0);
    function p() {
      const S = s.value?.innerHTML ?? "", y = (s.value?.innerText ?? "").trim();
      h.value = y.length;
      const g = y === "" ? null : S;
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
      const y = S.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, y), p();
    }
    return pe(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", h.value = s.value.innerText.trim().length);
    }), fe(
      () => n.modelValue,
      (S) => {
        S !== i && s.value && (s.value.innerHTML = S ?? "", h.value = s.value.innerText.trim().length);
      }
    ), (S, y) => (t(), a("div", os, [
      l("div", ss, [
        (t(!0), a(P, null, V(d.value, (g) => (t(), a("button", {
          key: g.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: g.label,
          "aria-label": g.label,
          onMousedown: y[0] || (y[0] = me(() => {
          }, ["prevent"])),
          onClick: (v) => x(g)
        }, [
          (t(), a("svg", is, [
            l("path", {
              d: g.path
            }, null, 8, us)
          ]))
        ], 40, rs))), 128)),
        m.value ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: y[1] || (y[1] = me(() => {
          }, ["prevent"])),
          onClick: A
        }, [...y[2] || (y[2] = [
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
        ])], 40, ds)) : k("", !0)
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
      }, null, 42, cs),
      e.maxLength !== null ? (t(), a("div", fs, f(h.value) + " / " + f(e.maxLength), 1)) : k("", !0)
    ]));
  }
}), ps = /* @__PURE__ */ zt(ms, [["__scopeId", "data-v-32c63bc7"]]), vs = {
  key: 1,
  class: "flex flex-col gap-2"
}, gs = { class: "flex items-center justify-between gap-2" }, hs = ["for"], bs = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, xs = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs leading-snug"
}, ys = ["aria-label", "disabled"], ks = {
  key: 7,
  class: "flex flex-col gap-2"
}, $s = ["id", "value", "disabled"], ws = ["value"], Cs = {
  key: 0,
  class: "relative"
}, Ss = ["disabled"], Ms = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Bs = { class: "max-h-56 overflow-y-auto p-1" }, As = ["onClick"], _s = {
  key: 8,
  class: "relative"
}, Ps = ["disabled", "aria-invalid"], zs = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Os = { class: "max-h-56 overflow-y-auto p-1" }, js = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ls = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Vs = ["onClick"], Ts = ["id", "value", "disabled", "aria-invalid"], Ds = ["value"], Es = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Is = { class: "text-muted-foreground" }, Fs = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ns = { class: "text-muted-foreground" }, Rs = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Us = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Hs = ["aria-label", "disabled"], qs = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Ks = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Gs = ["aria-label", "disabled"], Ws = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Zs = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Js = ["aria-label", "disabled"], Ys = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Xs = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Qs = ["aria-label", "disabled"], er = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, tr = ["disabled", "aria-pressed", "onClick"], ar = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, nr = ["title", "disabled", "onClick"], lr = ["href"], or = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, sr = {
  key: 20,
  class: "text-muted-foreground text-xs leading-snug"
}, rr = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", ir = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Fe = /* @__PURE__ */ O({
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
    const n = Nt(() => import("./PkRepeater-J84jGe3T.js")), r = Nt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = o, u = K(!1), d = K(""), m = K([]), h = K(!1), p = K(null);
    let x;
    fe(d, (le) => {
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
      if (!(s.processing || s.field.disabled) && (u.value = !0, m.value.length === 0 && s.searchOptions)) {
        h.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          h.value = !1;
        }
      }
    }
    function w(le) {
      p.value = le.label, i("change", le.value), u.value = !1, d.value = "";
    }
    function S() {
      p.value = null, i("change", null);
    }
    const y = at("panelPicker", null), g = at("panelCreateOption", null), v = K(!1), c = K(!1), C = K({}), B = K(null), _ = $(() => ho(s.field)), R = $(() => bo(s.field));
    function D() {
      C.value = {}, B.value = null, v.value = !0, u.value = !1;
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
          F instanceof go ? (C.value = F.fieldErrors, B.value = Object.keys(F.fieldErrors).length === 0 ? F.message : null) : B.value = F instanceof Error ? F.message : "Could not create that option.";
        } finally {
          c.value = !1;
        }
      }
    }
    const G = $(() => {
      if (!s.field.tableSelect || !y?.base)
        return;
      const le = y.returnUrl || "/";
      return `${y.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
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
      p.value = le.label, J(le.value), u.value = !1, d.value = "";
    }
    he(() => clearTimeout(x));
    const M = $(() => vo(s.field.type)), N = $(
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
      e.field.type === "hidden" ? (t(), a(P, { key: 0 }, [], 64)) : (t(), a("div", vs, [
        l("div", gs, [
          l("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            U(f(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", bs, "*")) : k("", !0)
          ], 10, hs),
          e.field.hint ? (t(), a("span", xs, [
            U(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: F[0] || (F[0] = (E) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, ys)) : k("", !0)
          ])) : k("", !0)
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
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(ps, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[5] || (F[5] = (E) => i("change", E))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(ls, {
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
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : Z.value.length ? (t(), a("div", ks, [
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
            }, f(E.label), 9, ws))), 128))
          ], 40, $s),
          ae.value.type && e.searchOptions ? (t(), a("div", Cs, [
            l("button", {
              type: "button",
              class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              disabled: e.field.disabled || e.processing,
              onClick: A
            }, [
              l("span", {
                class: z(p.value || ae.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (ae.value.id ? String(ae.value.id) : "Search…")), 3)
            ], 8, Ss),
            u.value ? (t(), a("div", Ms, [
              ce(l("input", {
                "onUpdate:modelValue": F[9] || (F[9] = (E) => d.value = E),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ye, d.value]
              ]),
              l("div", Bs, [
                (t(!0), a(P, null, V(m.value, (E) => (t(), a("button", {
                  key: String(E.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (X) => W(E)
                }, f(E.label), 9, As))), 128))
              ])
            ])) : k("", !0),
            u.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: F[10] || (F[10] = (E) => u.value = !1)
            })) : k("", !0)
          ])) : k("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", _s, [
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
            }, " ✕ ")) : k("", !0)
          ], 8, Ps),
          u.value ? (t(), a("div", zs, [
            ce(l("input", {
              "onUpdate:modelValue": F[11] || (F[11] = (E) => d.value = E),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ye, d.value]
            ]),
            l("div", Os, [
              h.value ? (t(), a("p", js, " Searching… ")) : m.value.length === 0 ? (t(), a("p", Ls, " No matches ")) : k("", !0),
              (t(!0), a(P, null, V(m.value, (E) => (t(), a("button", {
                key: String(E.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (X) => w(E)
              }, f(E.label), 9, Vs))), 128)),
              e.field.createOption && b(g) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: D
              }, [
                F[25] || (F[25] = l("span", { "aria-hidden": "true" }, "+", -1)),
                U(" " + f(R.value), 1)
              ])) : k("", !0)
            ])
          ])) : k("", !0),
          u.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: F[12] || (F[12] = (E) => u.value = !1)
          })) : k("", !0)
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
          }, f(E.label), 9, Ds))), 128))
        ], 40, Ts)) : e.field.type === "toggle" ? (t(), a("label", Es, [
          I(b(Ee), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": F[14] || (F[14] = (E) => i("change", E))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Is, f(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", Fs, [
          I(b(Po), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": F[15] || (F[15] = (E) => i("change", E === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Ns, f(e.field.help ?? e.field.label), 1)
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
        }, null, 40, Rs)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: z(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Us, f(e.field.prefix ?? e.field.prefixIcon), 1)) : k("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: F[17] || (F[17] = (E) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Hs)) : k("", !0),
          l("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: F[18] || (F[18] = (E) => i("change", E.target.value))
          }, null, 40, qs),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Ks, f(e.field.suffix ?? e.field.suffixIcon), 1)) : k("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: F[19] || (F[19] = (E) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Gs)) : k("", !0)
        ], 2)) : N.value ? (t(), a("div", {
          key: 15,
          class: z(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Zs, f(e.field.prefix ?? e.field.prefixIcon), 1)) : k("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: F[21] || (F[21] = (E) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Js)) : k("", !0),
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
            class: z(ir),
            onInput: F[22] || (F[22] = (E) => i("change", E.target.value))
          }, null, 40, Ys),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Xs, f(e.field.suffix ?? e.field.suffixIcon), 1)) : k("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: F[23] || (F[23] = (E) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Qs)) : k("", !0)
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
          class: z(rr),
          onInput: F[20] || (F[20] = (E) => i("change", E.target.value))
        }, null, 40, Ws)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", er, [
          (t(!0), a(P, null, V(e.field.presets, (E) => (t(), a("button", {
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
          }, f(E), 11, tr))), 128))
        ])) : k("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", ar, [
          (t(!0), a(P, null, V(e.field.chips, (E, X) => (t(), a("button", {
            key: X,
            type: "button",
            title: E,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (de) => Y(String(X))
          }, f(X), 9, nr))), 128))
        ])) : k("", !0),
        G.value ? (t(), a("a", {
          key: 18,
          href: G.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, lr)) : k("", !0),
        e.error ? (t(), a("p", or, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", sr, f(e.field.help), 1)) : k("", !0)
      ])),
      e.field.createOption && b(g) ? (t(), T(_o, {
        key: 2,
        open: v.value,
        title: _.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: c.value,
        errors: C.value,
        "general-error": B.value,
        onClose: ee,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : k("", !0)
    ], 64));
  }
}), ur = { class: "text-sm font-semibold" }, dr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, cr = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, fr = { class: "border-b px-4 py-3.5 sm:px-5" }, mr = { class: "text-sm font-semibold" }, pr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, vr = {
  key: 4,
  class: "min-w-0 space-y-4"
}, gr = {
  key: 7,
  class: "flex flex-col gap-3"
}, hr = { class: "text-sm font-medium" }, br = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, xr = {
  key: 0,
  class: "mb-1 font-medium"
}, yr = ["onClick"], kr = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, $r = { class: "flex items-center justify-between gap-3 border-t p-4" }, wr = ["disabled"], da = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(!n.node.collapsed), i = K(0), u = K(0), d = $(
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
    function y(v) {
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
      return e.node.component === "field" && y(e.node) ? (t(), T(Fe, {
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
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && y(e.node) ? (t(), a("section", {
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
            l("h3", ur, f(e.node.label), 1),
            e.node.description ? (t(), a("p", dr, f(e.node.description), 1)) : k("", !0)
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
          ])], 2)) : k("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [x.value, m.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => (t(), T(C, {
            key: _,
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
        ], 2)) : k("", !0)
      ], 2)) : e.node.component === "card" && y(e.node) ? (t(), a("section", cr, [
        l("header", fr, [
          l("h3", mr, f(e.node.title), 1),
          e.node.description ? (t(), a("p", pr, f(e.node.description), 1)) : k("", !0)
        ]),
        l("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", x.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => (t(), T(C, {
            key: _,
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
      ])) : e.node.component === "columns" && y(e.node) ? (t(), a("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", A(e.node)])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => (t(), T(C, {
          key: _,
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
      ], 2)) : e.node.component === "column" && y(e.node) ? (t(), a("div", vr, [
        (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => (t(), T(C, {
          key: _,
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
        (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => (t(), T(C, {
          key: _,
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
        (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => (t(), T(C, {
          key: _,
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
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", gr, [
        l("legend", hr, f(e.node.label), 1),
        e.node.description ? (t(), a("p", br, f(e.node.description), 1)) : k("", !0),
        l("div", {
          class: z(["grid grid-cols-1 gap-4", x.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => (t(), T(C, {
            key: _,
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
        e.node.title ? (t(), a("p", xr, f(e.node.title), 1)) : k("", !0),
        l("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 9,
        class: z(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => (t(), a("button", {
            key: _,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === _ ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (R) => i.value = _
          }, [
            U(f(B.label) + " ", 1),
            S(B) ? (t(), a("span", kr)) : k("", !0)
          ], 10, yr))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => ce((t(), a("div", {
          key: _,
          class: z(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(B.children ?? [], (R, D) => (t(), T(C, {
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
          [Le, i.value === _]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), a("div", {
        key: 10,
        class: z(m.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        I(po, {
          class: z(["p-4", m.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (B) => S((e.node.children ?? [])[B]),
          "onUpdate:activeStep": c[19] || (c[19] = (B) => u.value = B)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(P, null, V(e.node.children ?? [], (B, _) => ce((t(), a("div", {
          key: _,
          class: z(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(B.children ?? [], (R, D) => (t(), T(C, {
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
          [Le, u.value === _]
        ])), 128)),
        l("div", $r, [
          l("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: c[22] || (c[22] = (B) => u.value--)
          }, " Back ", 8, wr),
          u.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: c[23] || (c[23] = (B) => u.value++)
          }, " Next ")) : k("", !0)
        ])
      ], 2)) : k("", !0);
    };
  }
}), ew = /* @__PURE__ */ O({
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
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), T(Ze, {
      open: e.open,
      title: e.title,
      busy: e.processing,
      onClose: d[2] || (d[2] = (m) => r("close"))
    }, {
      footer: j(() => [
        I(se, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: d[1] || (d[1] = (m) => r("close"))
        }, {
          default: j(() => [...d[3] || (d[3] = [
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
          (t(!0), a(P, null, V(e.form?.nodes ?? [], (m, h) => (t(), T(da, {
            key: h,
            node: m,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: d[0] || (d[0] = (p, x) => s.value[p] = x)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), Cr = ["title"], Sr = ["aria-label"], Mr = ["d"], Br = { class: "sr-only" }, Ar = /* @__PURE__ */ O({
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
    }, s = $(() => typeof o.value == "boolean" ? o.value ? "1" : "" : o.value === null || o.value === void 0 ? "" : String(o.value)), i = $(() => o.icons[s.value] ?? o.defaultIcon), u = $(() => n[i.value] ?? n.dot), d = $(() => r[o.colors[s.value] ?? "neutral"] ?? r.neutral), m = $(() => o.labels[s.value] ?? String(o.value ?? "-"));
    return (h, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: m.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: z(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": m.value
      }, [
        l("path", { d: u.value }, null, 8, Mr)
      ], 10, Sr)),
      l("span", Br, f(m.value), 1)
    ], 8, Cr));
  }
}), _r = ["src"], Pr = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, zr = /* @__PURE__ */ O({
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
      const u = typeof o.src == "string" ? o.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = $(() => {
      const u = typeof o.fallbackText == "string" ? o.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), a("span", {
      class: z(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (m) => n.value = !0)
      }, null, 40, _r)) : e.fallback === "initials" ? (t(), a(P, { key: 1 }, [
        U(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", Pr, [...d[1] || (d[1] = [
        l("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : k("", !0)
    ], 2));
  }
}), Or = {
  key: 0,
  class: "text-muted-foreground"
}, jr = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Lr = {
  key: 0,
  class: "font-mono text-xs"
}, Vr = {
  key: 1,
  class: "sr-only"
}, Tr = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), a("span", Or, "-")) : (t(), a("span", jr, [
      l("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", Lr, f(r.value), 1)) : (t(), a("span", Vr, f(r.value), 1))
    ]));
  }
}), Dr = { class: "inline-flex items-center" }, Er = ["checked", "aria-label"], Ir = { class: "sr-only" }, tw = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("span", Dr, [
      l("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Er),
      l("span", Ir, f(r.value), 1)
    ]));
  }
}), Fr = {
  key: 0,
  class: "text-muted-foreground"
}, Nr = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, aw = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = $(
      () => String(o.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", Nr, f(n.value), 1)) : (t(), a("span", Fr, "—"));
  }
}), Rr = { class: "flex items-center gap-2" }, Ur = ["onUpdate:modelValue", "onChange"], Hr = ["value"], qr = ["onUpdate:modelValue"], Kr = ["value"], Gr = ["onUpdate:modelValue"], Wr = ["onUpdate:modelValue", "multiple"], Zr = ["value"], Jr = ["onUpdate:modelValue", "type"], Yr = ["aria-label", "onClick"], Xr = { class: "flex items-center gap-2" }, Qr = /* @__PURE__ */ O({
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
    const u = (c) => "rules" in c, d = $(() => Object.keys(n.fields));
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
      const c = d.value[0];
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
    const y = $(() => n.depth + 1 < n.maxDepth);
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
        l("div", Rr, [
          ce(l("select", {
            "onUpdate:modelValue": C[0] || (C[0] = (_) => i.value.logic = _),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...C[1] || (C[1] = [
            l("option", { value: "and" }, "Match all", -1),
            l("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [De, i.value.logic]
          ]),
          C[2] || (C[2] = l("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), a(P, null, V(i.value.rules, (_, R) => (t(), a("div", {
          key: R,
          class: "flex items-start gap-2"
        }, [
          u(_) ? (t(), T(B, {
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
              "onUpdate:modelValue": (D) => _.field = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (D) => S(_)
            }, [
              (t(!0), a(P, null, V(d.value, (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(e.fields[D].label), 9, Hr))), 128))
            ], 40, Ur), [
              [De, _.field]
            ]),
            ce(l("select", {
              "onUpdate:modelValue": (D) => _.operator = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(P, null, V(m(_.field), (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(h[D] ?? D), 9, Kr))), 128))
            ], 40, qr), [
              [De, _.operator]
            ]),
            _.field && e.fields[_.field]?.kind === "boolean" ? ce((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (D) => _.value = D,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...C[3] || (C[3] = [
              l("option", { value: !0 }, "Yes", -1),
              l("option", { value: !1 }, "No", -1)
            ])], 40, Gr)), [
              [De, _.value]
            ]) : _.field && e.fields[_.field]?.options?.length ? ce((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (D) => _.value = D,
              multiple: e.fields[_.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(P, null, V(e.fields[_.field].options, (D) => (t(), a("option", {
                key: D,
                value: D
              }, f(D), 9, Zr))), 128))
            ], 40, Wr)), [
              [De, _.value]
            ]) : ce((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (D) => _.value = D,
              type: _.field && e.fields[_.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Jr)), [
              [Ba, _.value]
            ])
          ], 64)),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(_) ? "group" : "rule"}`,
            onClick: (D) => w(R)
          }, " × ", 8, Yr)
        ]))), 128)),
        l("div", Xr, [
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
          y.value ? (t(), T(se, {
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
          })) : k("", !0),
          e.root ? (t(), a(P, { key: 1 }, [
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
          ], 64)) : k("", !0)
        ])
      ], 2);
    };
  }
}), ei = {
  key: 0,
  class: "font-mono text-xs"
}, ti = {
  key: 1,
  class: "text-muted-foreground"
}, ai = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, nw = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = $(
      () => o.value && typeof o.value == "object" && !Array.isArray(o.value) ? Object.keys(o.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", ei, f(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", ti, "—")) : (t(), a("span", ai, f(n.value.length) + " " + f(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), ni = ["aria-checked", "aria-label", "title", "disabled"], li = ["value", "disabled"], oi = ["value"], lw = /* @__PURE__ */ O({
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
    const n = e, r = o, s = $(() => n.value === !0 || n.value === 1 || n.value === "1"), i = $(() => n.busy || n.disabled), u = $(
      () => s.value ? n.onLabel ?? "Enabled" : n.offLabel ?? "Disabled"
    );
    function d() {
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
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: z(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: me(d, ["stop"])
    }, [
      l("span", {
        class: z(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, ni)) : (t(), a("select", {
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
      }, f(x), 9, oi))), 128))
    ], 40, li));
  }
}), si = ["data-variant"], ri = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ge = /* @__PURE__ */ O({
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
      () => [ri, n[o.variant], o.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, si));
  }
}), jt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function ii(e) {
  return e != null && e !== "";
}
function ui(e) {
  const o = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" ")) : (e.key === "name" && o.push("font-medium"), e.mono && o.push("font-mono text-xs"), e.muted && o.push("text-muted-foreground"), e.transform === "upper" && o.push("uppercase"), e.transform === "lower" && o.push("lowercase"), e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" "));
}
function ow(e) {
  const o = $(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: ui(s)
    }))
  ), n = $(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = n.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), m = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return jt[m] ?? "outline";
  }
  return { columns: o, byKey: n, badgeVariant: r };
}
const di = ["disabled", "aria-label", "aria-busy"], ci = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fi = ["d"], mi = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, pi = ["disabled", "onClick"], vi = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, gi = ["d"], hi = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, sw = /* @__PURE__ */ O({
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
    const n = e, r = o, s = $(() => n.busy || n.disabled), i = $(() => String(n.value ?? "")), u = $(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function d(x) {
      return typeof x == "boolean" ? x ? "1" : "" : String(x ?? "");
    }
    function m(x) {
      const A = n.colors[d(x)] ?? n.defaultColor ?? "neutral";
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
      }, 8, ["variant"])) : (t(), T(Ie, {
        key: 0,
        align: "start"
      }, {
        trigger: j(() => [
          l("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": u.value,
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
            (t(), a("svg", ci, [
              l("path", {
                d: b(ue)("chevron-down")
              }, null, 8, fi)
            ]))
          ], 8, di)
        ]),
        panel: j(({ close: w }) => [
          l("div", mi, f(u.value), 1),
          (t(!0), a(P, null, V(e.options, (S, y) => (t(), a("button", {
            key: y,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (g) => p(String(y), w)
          }, [
            I(Ge, {
              variant: m(y),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(S), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(y) === i.value ? (t(), a("svg", vi, [
              l("path", {
                d: b(ue)("check")
              }, null, 8, gi)
            ])) : (t(), a("span", hi))
          ], 8, pi))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), bi = { class: "flex items-center justify-end" }, xi = ["aria-label"], yi = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ki = ["d"], $i = ["href"], wi = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ci = ["d"], Si = ["disabled", "onClick"], Mi = ["d"], Bi = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Ai = ["disabled", "onClick"], _i = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Pi = ["d"], rw = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(null), u = K(null), d = $(() => r.groups.flatMap((g) => g.actions)), m = $(() => d.value.filter((g) => !g.destructive)), h = $(() => d.value.filter((g) => g.destructive)), p = {
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
    const A = $(() => d.value.length === 0);
    function w(g) {
      s("run", g);
    }
    function S(g) {
      A.value || (g.preventDefault(), i.value?.openAt(g.clientX, g.clientY));
    }
    function y(g) {
      if (g.key !== "ArrowDown" && g.key !== "ArrowUp")
        return;
      const v = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      g.preventDefault();
      const c = v.indexOf(document.activeElement), C = g.key === "ArrowDown" ? 1 : -1, B = (c + C + v.length) % v.length;
      v[B]?.focus();
    }
    return o({ openContextMenu: S }), (g, v) => (t(), a("div", bi, [
      A.value ? k("", !0) : (t(), T(Ie, {
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
            (t(), a("svg", yi, [
              l("path", {
                d: b(ue)("more-vertical")
              }, null, 8, ki)
            ]))
          ], 8, xi)
        ]),
        panel: j(() => [
          l("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: y
          }, [
            (t(!0), a(P, null, V(m.value, (c) => (t(), a(P, {
              key: c.key
            }, [
              c.link ? (t(), a("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", x(c)])
              }, [
                (t(), a("svg", wi, [
                  l("path", {
                    d: b(ue)(c.icon)
                  }, null, 8, Ci)
                ])),
                U(" " + f(c.label), 1)
              ], 10, $i)) : (t(), a("button", {
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
                    d: b(ue)(c.icon)
                  }, null, 8, Mi)
                ], 2)),
                U(" " + f(c.label), 1)
              ], 10, Si))
            ], 64))), 128)),
            h.value.length ? (t(), a("div", Bi, [
              (t(!0), a(P, null, V(h.value, (c) => (t(), a("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (C) => w(c)
              }, [
                (t(), a("svg", _i, [
                  l("path", {
                    d: b(ue)(c.icon ?? "trash")
                  }, null, 8, Pi)
                ])),
                U(" " + f(c.label), 1)
              ], 8, Ai))), 128))
            ])) : k("", !0)
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
}, nt = 12, lt = 20, zi = [0, 0.25, 0.5, 0.75, 1], Lt = "alxtexhpanel.appearance", Me = {
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
}, Oe = K({ ...Me });
let Ut = !1;
const Oi = "alxtexhpanel.appearance.vars";
function kt(e) {
  return e.theme === "dark";
}
const Ht = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function ji(e) {
  const o = xt[e.primary] ?? xt.slate, n = yt[e.surface] ?? yt.neutral, r = n.chroma, s = n.hue, u = kt(e) ? {
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
    "--pk-row-padding": Ht[e.density] ?? Ht.comfortable
  };
}
function Vt() {
  if (typeof window > "u")
    return { ...Me };
  try {
    const e = localStorage.getItem(Lt);
    if (!e)
      return { ...Me };
    const o = { ...Me, ...JSON.parse(e) };
    o.theme === "system" && (o.theme = Me.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof o.fontSize == "string" && (o.fontSize = n[o.fontSize] ?? Me.fontSize), (typeof o.fontSize != "number" || Number.isNaN(o.fontSize) || o.fontSize < nt || o.fontSize > lt) && (o.fontSize = Me.fontSize), o;
  } catch {
    return { ...Me };
  }
}
function iw(e) {
  const o = Vt(), n = e ? { ...o, ...e } : o;
  if (Oe.value = n, $t(n), e)
    try {
      localStorage.setItem(Lt, JSON.stringify(n));
    } catch {
    }
}
let ca = null;
function uw(e) {
  ca = e;
}
let fa = {};
function Li(e) {
  if (fa = e, !(typeof document > "u") && !Vt().primaryChosen)
    for (const [o, n] of Object.entries(e))
      document.documentElement.style.setProperty(o, n);
}
function $t(e) {
  if (typeof document > "u")
    return;
  const o = document.documentElement, n = { ...ji(e), ...e.primaryChosen ? {} : fa };
  o.classList.toggle("dark", kt(e));
  for (const [r, s] of Object.entries(n))
    o.style.setProperty(r, s);
  o.dataset.sidebar = e.sidebarSide, o.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Oi,
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
    Oe.value = { ...Oe.value, ...r, ...s };
    try {
      localStorage.setItem(Lt, JSON.stringify(Oe.value));
    } catch {
    }
    e(Oe.value), ca?.({ ...r, ...s });
  }
  function n() {
    o({ ...Me });
  }
  return pe(() => {
    Ut || (Ut = !0, Oe.value = Vt(), $t(Oe.value));
  }), {
    appearance: $(() => Oe.value),
    set: o,
    reset: n,
    PRIMARY_COLORS: xt,
    SURFACE_TINTS: yt,
    FONT_SIZE_MIN: nt,
    FONT_SIZE_MAX: lt,
    RADIUS_OPTIONS: zi
  };
}
const Vi = { class: "flex items-center justify-between border-b px-4 py-3" }, Ti = { class: "flex items-center gap-2" }, Di = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Ei = { class: "flex flex-col gap-2" }, Ii = { class: "grid grid-cols-8 gap-2" }, Fi = ["title", "aria-label", "aria-pressed", "onClick"], Ni = { class: "flex flex-col gap-2" }, Ri = { class: "grid grid-cols-8 gap-2" }, Ui = ["title", "aria-label", "aria-pressed", "onClick"], Hi = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, qi = { class: "flex flex-col gap-2" }, Ki = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Gi = ["aria-pressed", "aria-label", "onClick"], Wi = { class: "text-sm font-semibold" }, Zi = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ji = ["onClick"], Yi = { class: "flex flex-col gap-2" }, Xi = { class: "flex items-center justify-between" }, Qi = { class: "text-muted-foreground text-xs tabular-nums" }, eu = { class: "flex items-center gap-2" }, tu = ["disabled"], au = ["min", "max", "value"], nu = ["disabled"], dw = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: o, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = ma(), d = K(!1), m = $(() => o.value.sidebarSide === "right"), h = [
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
    function y(g, v) {
      return `oklch(0.72 ${v * 3} ${g})`;
    }
    return (g, v) => (t(), a(P, null, [
      l("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (c) => d.value = !0)
      }, [...v[7] || (v[7] = [
        Ct('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Re, { to: "body" }, [
        I(je, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            d.value ? (t(), a("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: v[1] || (v[1] = (c) => d.value = !1)
            })) : k("", !0)
          ]),
          _: 1
        }),
        I(je, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": m.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": m.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            d.value ? (t(), a("aside", {
              key: 0,
              class: z(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              l("header", Vi, [
                v[9] || (v[9] = l("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                l("div", Ti, [
                  l("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => b(r) && b(r)(...c))
                  }, " Reset "),
                  l("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: v[3] || (v[3] = (c) => d.value = !1)
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
              l("div", Di, [
                l("section", Ei, [
                  v[11] || (v[11] = l("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  l("div", Ii, [
                    (t(!0), a(P, null, V(b(s), (c, C) => (t(), a("button", {
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
                      ])], 4)) : k("", !0)
                    ], 12, Fi))), 128))
                  ])
                ]),
                l("section", Ni, [
                  v[13] || (v[13] = l("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  l("div", Ri, [
                    (t(!0), a(P, null, V(b(i), (c, C) => (t(), a("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: y(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": b(o).surface === C,
                      onClick: (B) => b(n)({ surface: C })
                    }, [
                      b(o).surface === C ? (t(), a("svg", Hi, [...v[12] || (v[12] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : k("", !0)
                    ], 12, Ui))), 128))
                  ])
                ]),
                l("section", qi, [
                  v[14] || (v[14] = l("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  l("div", Ki, [
                    (t(!0), a(P, null, V(b(u), (c) => (t(), a("button", {
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
                    ], 10, Gi))), 128))
                  ])
                ]),
                (t(!0), a(P, null, V([
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
                  l("h3", Wi, f(c.label), 1),
                  l("div", Zi, [
                    (t(!0), a(P, null, V(c.options, (C) => (t(), a("button", {
                      key: String(C.value),
                      type: "button",
                      class: z([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(o)[c.key] === C.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (B) => b(n)({ [c.key]: C.value })
                    }, f(C.label), 11, Ji))), 128))
                  ])
                ]))), 128)),
                l("section", Yi, [
                  l("div", Xi, [
                    v[15] || (v[15] = l("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    l("span", Qi, f(b(o).fontSize) + "px", 1)
                  ]),
                  l("div", eu, [
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(o).fontSize <= b(nt),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => b(n)({ fontSize: b(o).fontSize - 1 }))
                    }, " − ", 8, tu),
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
                    }, null, 40, au),
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(o).fontSize >= b(lt),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => b(n)({ fontSize: b(o).fontSize + 1 }))
                    }, " + ", 8, nu)
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
}), lu = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, ou = { class: "flex items-stretch" }, su = ["href", "aria-current"], ru = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, iu = ["d"], uu = { class: "w-full truncate text-center" }, du = {
  key: 0,
  class: "flex-1"
}, cu = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, fu = ["d"], mu = { class: "w-full truncate text-center" }, ft = 5, cw = /* @__PURE__ */ O({
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
    function u(d) {
      return d === "/" ? n.current === "/" : n.current === d || n.current.startsWith(`${d}/`);
    }
    return (d, m) => (t(), a("nav", lu, [
      l("ul", ou, [
        (t(!0), a(P, null, V(s.value, (h) => (t(), a("li", {
          key: h.key,
          class: "flex-1"
        }, [
          l("a", {
            href: h.href,
            class: z([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(h.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(h.href) ? "page" : void 0
          }, [
            (t(), a("svg", ru, [
              l("path", {
                d: b(ue)(h.icon)
              }, null, 8, iu)
            ])),
            l("span", uu, f(h.title), 1)
          ], 10, su)
        ]))), 128)),
        i.value ? (t(), a("li", du, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (h) => r("more"))
          }, [
            (t(), a("svg", cu, [
              l("path", {
                d: b(ue)("more-horizontal")
              }, null, 8, fu)
            ])),
            l("span", mu, f(e.moreLabel), 1)
          ])
        ])) : k("", !0)
      ])
    ]));
  }
}), pu = ["value"], vu = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", ge = /* @__PURE__ */ O({
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
      class: z([vu, n.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, pu));
  }
}), gu = ["for"], ke = /* @__PURE__ */ O({
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
    ], 10, gu));
  }
}), fw = /* @__PURE__ */ O({
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
}), hu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, bu = ["id", "name", "value", "disabled", "maxlength"], xu = ["data-active"], yu = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, mw = /* @__PURE__ */ O({
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
    const u = $(
      () => Array.from({ length: n.length }, (h, p) => n.modelValue[p] ?? "")
    ), d = $(() => Math.min(n.modelValue.length, n.length - 1));
    function m(h) {
      const p = h.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (h, p) => (t(), a("div", hu, [
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
      }, null, 40, bu),
      (t(!0), a(P, null, V(u.value, (x, A) => (t(), a("div", {
        key: A,
        "data-slot": "input-otp-slot",
        "data-active": s.value && A === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(f(x) + " ", 1),
        s.value && A === d.value && x === "" ? (t(), a("div", yu, [...p[2] || (p[2] = [
          l("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : k("", !0)
      ], 8, xu))), 128))
    ]));
  }
}), ku = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ae = /* @__PURE__ */ O({
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
      e.description ? (t(), a("p", ku, f(e.description), 1)) : k("", !0)
    ], 2));
  }
}), $u = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, wu = { class: "min-w-0 space-y-1" }, Cu = { class: "text-2xl font-semibold tracking-tight" }, Su = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Mu = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, pw = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (o, n) => (t(), a("header", $u, [
      l("div", wu, [
        l("h1", Cu, f(e.title), 1),
        e.purpose ? (t(), a("p", Su, f(e.purpose), 1)) : k("", !0)
      ]),
      o.$slots.actions ? (t(), a("div", Mu, [
        q(o.$slots, "actions")
      ])) : k("", !0)
    ]));
  }
}), Bu = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: z(b(Q)(b(Pu)({ variant: e.variant }), o.class)),
      role: "alert"
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Au = /* @__PURE__ */ O({
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
}), _u = /* @__PURE__ */ O({
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
}), Pu = Pt(
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
), zu = { class: "list-inside list-disc text-sm" }, vw = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const o = e, n = $(() => Array.from(new Set(o.errors)));
    return (r, s) => (t(), T(b(Bu), { variant: "destructive" }, {
      default: j(() => [
        I(b(Va), { class: "size-4" }),
        I(b(_u), null, {
          default: j(() => [
            U(f(e.title), 1)
          ]),
          _: 1
        }),
        I(b(Au), null, {
          default: j(() => [
            l("ul", zu, [
              (t(!0), a(P, null, V(n.value, (i, u) => (t(), a("li", { key: u }, f(i), 1))), 128))
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
    return (i, u) => ce((t(), a("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => Aa(s) ? s.value = d : null),
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
}), Ou = { class: "relative" }, ju = ["aria-label"], gw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: o }) {
    const n = e, r = K(!1), s = _a("inputRef");
    return o({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), a("div", Ou, [
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
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), T(b(Ta), {
          key: 0,
          class: "size-4"
        })) : (t(), T(b(Da), {
          key: 1,
          class: "size-4"
        }))
      ], 10, ju)
    ]));
  }
}), Lu = "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", hw = "grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3", Vu = "grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3", Ve = "w-full min-w-0 px-4 py-6 sm:px-6", bw = "w-full min-w-0 p-3 sm:p-4", xw = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", yw = "w-full max-w-5xl";
function kw(e, o) {
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
    const u = Array.from({ length: n }, () => []);
    s.forEach((d, m) => {
      u[m % n].push(d);
    }), r.push({ type: "columns", columns: u }), s = [];
  };
  for (const u of e)
    (u.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: u })) : s.push(u);
  return i(), r;
}
const va = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Tu = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Du = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Eu(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || o.endsWith(".jpg") || o.endsWith(".jpeg");
}
function Iu(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || o.endsWith(".png") || o.endsWith(".webp");
}
async function Fu(e) {
  const o = URL.createObjectURL(e);
  try {
    const n = await Nu(o), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
    r.width = s, r.height = i;
    const u = r.getContext("2d", { willReadFrequently: !0 });
    if (!u)
      return !1;
    u.drawImage(n, 0, 0);
    const { data: d } = u.getImageData(0, 0, s, i);
    for (let m = 3; m < d.length; m += 4)
      if ((d[m] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(o);
  }
}
function Nu(e) {
  return new Promise((o, n) => {
    const r = new Image();
    r.onload = () => o(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function Ru(e) {
  if (Eu(e))
    throw new Error(Du);
  if (!Iu(e))
    throw new Error(va);
  if (!await Fu(e))
    throw new Error(Tu);
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
    return (i, u) => (t(), T(b(aa), oe({ "data-slot": "sheet" }, b(s)), {
      default: j((d) => [
        q(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), $w = /* @__PURE__ */ O({
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
}), Uu = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(At), null, {
      default: j(() => [
        I(Uu),
        I(b(_t), oe({
          "data-slot": "sheet-content",
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...u.$attrs, ...b(i) }), {
          default: j(() => [
            q(u.$slots, "default"),
            I(b(Ue), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                I(b(Mt), { class: "size-4" }),
                d[0] || (d[0] = l("span", { class: "sr-only" }, "Close", -1))
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
}), Hu = /* @__PURE__ */ O({
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
}), ww = /* @__PURE__ */ O({
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
}), qu = /* @__PURE__ */ O({
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
}), Ku = /* @__PURE__ */ O({
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
}), Cw = /* @__PURE__ */ O({
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
}), qt = "sidebar_state", Gu = 3600 * 24 * 7, Wu = "16rem", Zu = "18rem", Ju = "3rem", Yu = "b", [rt, Xu] = Ya("Sidebar"), Qu = { class: "flex h-full w-full flex-col" }, ed = ["data-state", "data-collapsible", "data-variant", "data-side"], td = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Sw = /* @__PURE__ */ O({
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
    return (u, d) => e.collapsible === "none" ? (t(), a("div", oe({
      key: 0,
      "data-slot": "sidebar",
      class: b(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o.class
      )
    }, u.$attrs), [
      q(u.$slots, "default")
    ], 16)) : b(n) ? (t(), T(b(Tt), oe({
      key: 1,
      open: b(s)
    }, u.$attrs, { "onUpdate:open": b(i) }), {
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
            "--sidebar-width": b(Zu)
          })
        }, {
          default: j(() => [
            I(qu, { class: "sr-only" }, {
              default: j(() => [
                I(Ku, null, {
                  default: j(() => [...d[0] || (d[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(Hu, null, {
                  default: j(() => [...d[1] || (d[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l("div", Qu, [
              q(u.$slots, "default")
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
      }, u.$attrs), [
        l("div", td, [
          q(u.$slots, "default")
        ])
      ], 16)
    ], 8, ed));
  }
}), Mw = /* @__PURE__ */ O({
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
}), Bw = /* @__PURE__ */ O({
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
}), Aw = /* @__PURE__ */ O({
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
}), _w = /* @__PURE__ */ O({
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
}), Pw = /* @__PURE__ */ O({
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
}), zw = /* @__PURE__ */ O({
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
}), Ow = /* @__PURE__ */ O({
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
}), jw = /* @__PURE__ */ O({
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
}), Lw = /* @__PURE__ */ O({
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
}), Vw = /* @__PURE__ */ O({
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
}), Tw = /* @__PURE__ */ O({
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
}), Dw = /* @__PURE__ */ O({
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
}), ad = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(Xa), oe({ "data-slot": "tooltip" }, b(s)), {
      default: j((d) => [
        q(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), nd = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Qa), null, {
      default: j(() => [
        I(b(en), oe({ "data-slot": "tooltip-content" }, { ...b(i), ...u.$attrs }, {
          class: b(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: j(() => [
            q(u.$slots, "default"),
            I(b(tn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ew = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(b(sa), $e(ze(o)), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ld = /* @__PURE__ */ O({
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
      class: b(Q)(b(sd)({ variant: e.variant, size: e.size }), o.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Iw = /* @__PURE__ */ O({
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
    return (i, u) => e.tooltip ? (t(), T(b(ad), { key: 1 }, {
      default: j(() => [
        I(b(ld), { "as-child": "" }, {
          default: j(() => [
            I(Kt, $e(ze({ ...b(s), ...i.$attrs })), {
              default: j(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(b(nd), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(n)
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
    })) : (t(), T(Kt, $e(oe({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fw = /* @__PURE__ */ O({
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
}), Gt = "animate-pulse rounded-md bg-primary/10", Nw = /* @__PURE__ */ O({
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
      }, null, 2)) : k("", !0),
      l("div", {
        class: z(b(Q)(Gt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), Rw = /* @__PURE__ */ O({
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
}), Uw = /* @__PURE__ */ O({
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
}), Hw = /* @__PURE__ */ O({
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
}), qw = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ka?.cookie.includes(`${qt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = Ha("(max-width: 767px)"), i = K(!1), u = ta(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function d(x) {
      u.value = x, document.cookie = `${qt}=${u.value}; path=/; max-age=${Gu}`;
    }
    function m(x) {
      i.value = x;
    }
    function h() {
      return s.value ? m(!i.value) : d(!u.value);
    }
    qa("keydown", (x) => {
      x.key === Yu && (x.metaKey || x.ctrlKey) && (x.preventDefault(), h());
    });
    const p = $(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return Xu({
      state: p,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: h
    }), (x, A) => (t(), T(b(sa), { "delay-duration": 0 }, {
      default: j(() => [
        l("div", oe({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(Wu),
            "--sidebar-width-icon": b(Ju)
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
}), Kw = /* @__PURE__ */ O({
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
}), od = /* @__PURE__ */ O({
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
}), Gw = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(od), {
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
}), Ww = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, toggleSidebar: s } = rt();
    return (i, u) => (t(), T(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(b(Q)("h-7 w-7", o.class)),
      onClick: b(s)
    }, {
      default: j(() => [
        b(n) || b(r) === "collapsed" ? (t(), T(b(Ea), { key: 0 })) : (t(), T(b(Ia), { key: 1 })),
        u[0] || (u[0] = l("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), sd = Pt(
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
), Zw = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(ln), oe({ "data-slot": "dropdown-menu" }, b(s)), {
      default: j((d) => [
        q(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), rd = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Jw = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(on), oe({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", rd, [
          I(b(ra), null, {
            default: j(() => [
              q(u.$slots, "indicator-icon", {}, () => [
                I(b(Qt), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yw = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(sn), null, {
      default: j(() => [
        I(b(rn), oe({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: j(() => [
            q(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Xw = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), T(b(un), oe({ "data-slot": "dropdown-menu-group" }, o), {
      default: j(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qw = /* @__PURE__ */ O({
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
    const o = e, n = ie(o, "inset", "variant", "class"), r = we(n);
    return (s, i) => (t(), T(b(dn), oe({
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
}), e4 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const o = e, n = ie(o, "class", "inset"), r = we(n);
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
}), t4 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, u) => (t(), T(b(fn), oe({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), id = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, a4 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(mn), oe({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", id, [
          I(b(ra), null, {
            default: j(() => [
              q(u.$slots, "indicator-icon", {}, () => [
                I(b(Fa), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n4 = /* @__PURE__ */ O({
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
}), l4 = /* @__PURE__ */ O({
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
}), o4 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, u) => (t(), T(b(vn), oe({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: j((d) => [
        q(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), s4 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(gn), oe({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(Q)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: j(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r4 = /* @__PURE__ */ O({
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
    const o = e, n = ie(o, "class", "inset"), r = we(n);
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
}), i4 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = we(e);
    return (r, s) => (t(), T(b(bn), oe({ "data-slot": "dropdown-menu-trigger" }, b(n)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u4 = /* @__PURE__ */ O({
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
}), d4 = /* @__PURE__ */ O({
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
}), c4 = /* @__PURE__ */ O({
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
}), f4 = /* @__PURE__ */ O({
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
}), m4 = /* @__PURE__ */ O({
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
}), p4 = /* @__PURE__ */ O({
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
}), v4 = /* @__PURE__ */ O({
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
}), g4 = /* @__PURE__ */ O({
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
}), h4 = /* @__PURE__ */ O({
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
}), b4 = /* @__PURE__ */ O({
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
}), ud = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, dd = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), a("div", ud, [
      I(b($n), oe({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), x4 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(wn), oe({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: j((m) => [
        q(u.$slots, "default", $e(ze(m))),
        e.viewport ? (t(), T(dd, { key: 0 })) : k("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), y4 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Cn), oe({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(Q)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: j(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k4 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
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
}), $4 = /* @__PURE__ */ O({
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
}), w4 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(Bn), oe({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(Q)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), C4 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), T(b(An), oe({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(Q)("group flex flex-1 list-none items-center justify-center gap-1", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S4 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), T(b(_n), oe({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(Q)(b(cd)(), "group", o.class)
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
}), cd = Pt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), M4 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(b(aa), oe({ "data-slot": "dialog" }, b(s)), {
      default: j((d) => [
        q(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), B4 = /* @__PURE__ */ O({
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
}), fd = /* @__PURE__ */ O({
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
}), A4 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(At), null, {
      default: j(() => [
        I(fd),
        I(b(_t), oe({ "data-slot": "dialog-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: j(() => [
            q(u.$slots, "default"),
            e.showCloseButton ? (t(), T(b(Ue), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                I(b(Mt)),
                d[0] || (d[0] = l("span", { class: "sr-only" }, "Close", -1))
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
}), _4 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), T(b(na), oe({ "data-slot": "dialog-description" }, b(r), {
      class: b(Q)("text-muted-foreground text-sm", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P4 = /* @__PURE__ */ O({
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
      })) : k("", !0)
    ], 2));
  }
}), z4 = /* @__PURE__ */ O({
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
}), O4 = /* @__PURE__ */ O({
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
    return (u, d) => (t(), T(b(At), null, {
      default: j(() => [
        I(b(Bt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            I(b(_t), oe({
              class: b(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...u.$attrs, ...b(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (m) => {
                const h = m.detail.originalEvent, p = h.target;
                (h.offsetX > p.clientWidth || h.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: j(() => [
                q(u.$slots, "default"),
                I(b(Ue), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    I(b(Mt), { class: "w-4 h-4" }),
                    d[1] || (d[1] = l("span", { class: "sr-only" }, "Close", -1))
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
}), j4 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), T(b(la), oe({ "data-slot": "dialog-title" }, b(r), {
      class: b(Q)("text-lg leading-none font-semibold", o.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), L4 = /* @__PURE__ */ O({
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
}), V4 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), T(b(Pn), oe({ "data-slot": "label" }, b(n), {
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
}), T4 = /* @__PURE__ */ O({
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
}), D4 = /* @__PURE__ */ O({
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
}), E4 = /* @__PURE__ */ O({
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
}), I4 = /* @__PURE__ */ O({
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
}), F4 = /* @__PURE__ */ O({
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
}), N4 = /* @__PURE__ */ O({
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
}), R4 = /* @__PURE__ */ O({
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
}), U4 = /* @__PURE__ */ O({
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
}), md = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, pd = { class: "flex items-start gap-3" }, vd = { class: "min-w-0 flex-1" }, gd = { class: "text-foreground text-sm font-medium" }, hd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, H4 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = K(!1), u = K(null), d = K(0);
    Pa((h) => (console.error(`[PkBoundary] ${r.label} failed to render`, h), i.value = !0, u.value = h instanceof Error ? h.message : null, s("error", h), !1));
    function m() {
      i.value = !1, u.value = null, d.value++;
    }
    return o({ retry: m }), (h, p) => (t(), a("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", md, [
        l("div", pd, [
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
          l("div", vd, [
            l("p", gd, f(e.label) + " could not be displayed ", 1),
            u.value ? (t(), a("p", hd, f(u.value), 1)) : k("", !0),
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
      ])) : i.value ? k("", !0) : q(h.$slots, "default", { key: d.value })
    ], 2));
  }
}), bd = { class: "bg-card rounded-lg border" }, xd = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, yd = { class: "min-w-0" }, kd = {
  key: 0,
  class: "truncate text-sm font-medium"
}, $d = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, wd = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Cd = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, q4 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, n) => (t(), a("section", bd, [
      e.title || e.description || o.$slots.header || o.$slots.actions ? (t(), a("header", xd, [
        l("div", yd, [
          q(o.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", kd, f(e.title), 1)) : k("", !0),
            e.description ? (t(), a("p", $d, f(e.description), 1)) : k("", !0)
          ])
        ]),
        o.$slots.actions ? (t(), a("div", wd, [
          q(o.$slots, "actions")
        ])) : k("", !0)
      ])) : k("", !0),
      l("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        q(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (t(), a("footer", Cd, [
        q(o.$slots, "footer")
      ])) : k("", !0)
    ]));
  }
}), ga = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function K4() {
  const e = ia(), o = $(() => e.props.panel?.pageFooter === !0);
  return bt(ga, o), o;
}
const Sd = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Md = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Bd = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, G4 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const o = e, n = ia(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = $(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = $(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), u = at(ga, $(() => !1)), d = $(() => !o.host && b(u) === !0);
    return (m, h) => d.value ? k("", !0) : (t(), a("footer", Sd, [
      l("div", Md, [
        l("p", null, "© " + f(b(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", Bd, [
          (t(!0), a(P, null, V(i.value, (p) => (t(), T(b(jn), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              U(f(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : k("", !0)
      ])
    ]));
  }
}), Ad = { class: "flex shrink-0 flex-col items-center" }, _d = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, W4 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), a("div", Ad, [
      l("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", _d)) : k("", !0),
        l("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
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
      ], 64)) : k("", !0)
    ]));
  }
}), Pd = { class: "flex flex-col gap-2" }, zd = { class: "min-w-0 flex-1" }, Od = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, jd = ["disabled", "aria-label", "onClick"], Ld = ["disabled", "aria-label", "onClick"], Vd = ["disabled", "title", "aria-label", "onClick"], Td = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Dd = ["disabled"], Z4 = /* @__PURE__ */ O({
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
    const i = K(u(n.modelValue));
    function u(v) {
      return Array.isArray(v) ? v.map((c) => ({ uid: s++, data: { ...c } })) : [];
    }
    fe(
      () => n.modelValue,
      (v) => {
        JSON.stringify(v ?? null) !== JSON.stringify(d()) && (i.value = u(v));
      }
    );
    function d() {
      const v = [];
      for (const c of i.value) {
        const C = {};
        let B = !1;
        for (const _ of n.children) {
          const R = c.data[_.key] ?? null;
          C[_.key] = R, R !== null && R !== "" && !(Array.isArray(R) && R.length === 0) && (B = !0);
        }
        B && v.push(C);
      }
      return v.length ? v : null;
    }
    function m() {
      r("update:modelValue", d());
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
      const B = [...i.value], [_] = B.splice(v, 1);
      B.splice(C, 0, _), i.value = B, m();
    }
    function y(v, c, C) {
      const B = i.value.find((_) => _.uid === v);
      B && (B.data[c] = C, m());
    }
    function g(v, c) {
      return n.errors[`${n.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), a("div", Pd, [
      (t(!0), a(P, null, V(i.value, (C, B) => (t(), a("div", {
        key: C.uid,
        class: "flex items-start gap-2"
      }, [
        l("span", {
          class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", x.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(B + 1), 3),
        l("div", zd, [
          x.value ? (t(), T(Fe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: C.data[e.children[0].key],
            error: g(B, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (_) => y(C.uid, e.children[0].key, _)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Od, [
            (t(!0), a(P, null, V(e.children, (_) => (t(), T(Fe, {
              key: _.key,
              field: { ..._, disabled: _.disabled || e.disabled },
              value: C.data[_.key],
              error: g(B, _.key),
              options: e.childOptions[_.key] ?? [],
              onChange: (R) => y(C.uid, _.key, R)
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
            onClick: (_) => S(B, -1)
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
          ])], 8, jd),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${B + 1} down`,
            onClick: (_) => S(B, 1)
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
          ])], 8, Ld),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${B + 1}`,
            onClick: (_) => w(C.uid)
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
          ])], 8, Vd)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", Td, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : k("", !0),
      h.value ? k("", !0) : (t(), a("button", {
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
      ], 8, Dd))
    ]));
  }
}), Ed = { class: "space-y-1" }, Id = { class: "flex items-center gap-1" }, Fd = ["disabled", "title", "aria-label", "onClick"], Nd = ["aria-pressed"], Rd = ["id", "value", "rows", "disabled"], Ud = ["innerHTML"], Hd = /* @__PURE__ */ O({
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
    function u(x) {
      return x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = $(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(x, A = x) {
      const w = document.getElementById(n.id ?? "");
      if (w === null)
        return;
      const S = w.selectionStart, y = w.selectionEnd, g = i.value.slice(S, y);
      r(
        "update:modelValue",
        `${i.value.slice(0, S)}${x}${g}${A}${i.value.slice(y)}`
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
    return (x, A) => (t(), a("div", Ed, [
      l("div", Id, [
        (t(!0), a(P, null, V(p.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (S) => h[w].run()
        }, f(h[w].label), 9, Fd))), 128)),
        l("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: A[0] || (A[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, Nd)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, Ud)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: A[1] || (A[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, Rd))
    ]));
  }
}), qd = { class: "space-y-1" }, Kd = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Gd = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Wd = ["id", "value", "rows", "disabled"], Zd = { class: "text-muted-foreground text-xs" }, Jd = {
  key: 0,
  class: "text-destructive text-xs"
}, Yd = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(null), i = K(!0), u = $(() => n.modelValue ?? ""), d = $(() => Math.max(u.value.split(`
`).length, 1)), m = $(() => {
      if (n.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
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
      const A = x.target, w = A.selectionStart, S = A.selectionEnd, y = `${u.value.slice(0, w)}    ${u.value.slice(S)}`;
      r("update:modelValue", y), requestAnimationFrame(() => {
        A.selectionStart = A.selectionEnd = w + 4;
      });
    }
    return (x, A) => (t(), a("div", qd, [
      l("div", Kd, [
        l("div", Gd, [
          (t(!0), a(P, null, V(d.value, (w) => (t(), a("div", { key: w }, f(w), 1))), 128))
        ]),
        l("textarea", {
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
          onInput: h,
          onKeydown: p
        }, null, 40, Wd)
      ]),
      l("p", Zd, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", Jd, f(m.value), 1)) : k("", !0)
    ]));
  }
}), Xd = { class: "space-y-3" }, Qd = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, ec = { class: "text-sm font-medium" }, tc = { class: "flex items-center gap-1" }, ac = ["disabled", "onClick"], nc = ["disabled", "onClick"], lc = ["disabled", "onClick"], oc = { class: "space-y-3 p-3" }, sc = { class: "flex flex-wrap items-center gap-2" }, rc = ["disabled", "onClick"], ic = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, J4 = /* @__PURE__ */ O({
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
    ), u = $(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function d(A) {
      r("update:modelValue", A);
    }
    function m(A) {
      u.value || d([...s.value, { type: A, data: {} }]);
    }
    function h(A) {
      d(s.value.filter((w, S) => S !== A));
    }
    function p(A, w) {
      const S = A + w;
      if (S < 0 || S >= s.value.length)
        return;
      const y = [...s.value], [g] = y.splice(A, 1);
      y.splice(S, 0, g), d(y);
    }
    function x(A, w, S) {
      d(
        s.value.map(
          (y, g) => g === A ? { ...y, data: { ...y.data, [w]: S } } : y
        )
      );
    }
    return (A, w) => (t(), a("div", Xd, [
      (t(!0), a(P, null, V(s.value, (S, y) => (t(), a("div", {
        key: `${S.type}-${y}`,
        class: "bg-card rounded-lg border"
      }, [
        l("div", Qd, [
          l("span", ec, f(i.value[S.type]?.label ?? S.type), 1),
          l("div", tc, [
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || y === 0,
              "aria-label": "Move up",
              onClick: (g) => p(y, -1)
            }, " ↑ ", 8, ac),
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || y === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (g) => p(y, 1)
            }, " ↓ ", 8, nc),
            l("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (g) => h(y)
            }, " Remove ", 8, lc)
          ])
        ]),
        l("div", oc, [
          (t(!0), a(P, null, V(i.value[S.type]?.fields ?? [], (g) => (t(), T(Fe, {
            key: g.key,
            field: g,
            value: S.data[g.key] ?? null,
            error: e.errors?.[g.key],
            processing: e.disabled,
            onChange: (v) => x(y, g.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      l("div", sc, [
        (t(!0), a(P, null, V(e.blocks, (S) => (t(), a("button", {
          key: S.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (y) => m(S.type)
        }, " + " + f(S.label), 9, rc))), 128)),
        u.value ? (t(), a("span", ic, f(e.maxBlocks) + " is the maximum here. ", 1)) : k("", !0)
      ])
    ]));
  }
}), uc = ["name", "value", "checked", "disabled", "onChange"], dc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, cc = /* @__PURE__ */ O({
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
    return (i, u) => (t(), a("div", {
      role: "radiogroup",
      class: z(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(P, null, V(e.options, (d) => (t(), a("label", {
        key: String(d.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: s(d),
          disabled: e.disabled,
          onChange: (m) => r("update:modelValue", d.value)
        }, null, 40, uc),
        U(" " + f(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", dc, " Nothing to choose from yet. ")) : k("", !0)
    ], 2));
  }
}), fc = ["value", "checked", "disabled", "onChange"], mc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, pc = /* @__PURE__ */ O({
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
    function u(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((h) => h != m.value) : [...s.value, m.value]
      );
    }
    const d = $(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, h) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(d.value)
    }, [
      (t(!0), a(P, null, V(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (x) => u(p)
        }, null, 40, fc),
        U(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", mc, " Nothing to choose from yet. ")) : k("", !0)
    ], 4));
  }
}), vc = { class: "flex flex-col gap-1.5" }, gc = ["aria-label", "onClick"], hc = ["placeholder", "disabled", "maxlength"], bc = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, xc = ["onClick"], yc = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, kc = /* @__PURE__ */ O({
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
    ), u = $(() => i.value.length >= (n.field.max ?? 25)), d = $(
      () => (n.field.suggestions ?? []).filter(
        (x) => !i.value.some((A) => A.toLowerCase() === x.toLowerCase())
      )
    );
    function m(x) {
      const A = x.trim().slice(0, n.field.maxLength ?? 40);
      if (A === "" || u.value) {
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
    return (x, A) => (t(), a("div", vc, [
      l("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(P, null, V(i.value, (w, S) => (t(), a("span", {
          key: `${w}-${S}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(f(w) + " ", 1),
          e.disabled ? k("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (y) => h(S)
          }, " × ", 8, gc))
        ]))), 128)),
        ce(l("input", {
          "onUpdate:modelValue": A[0] || (A[0] = (w) => s.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: A[1] || (A[1] = (w) => m(s.value))
        }, null, 40, hc), [
          [ye, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), a("div", bc, [
        A[2] || (A[2] = l("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(P, null, V(d.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (S) => m(w)
        }, f(w), 9, xc))), 128))
      ])) : k("", !0),
      u.value ? (t(), a("p", yc, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : k("", !0)
    ]));
  }
}), $c = 4.5, Wt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
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
function wc(e, o, n) {
  if (!Wt.test(e) || !Wt.test(o))
    return e;
  const r = wt(o) > 0.5, s = r ? 0 : 255;
  let i = ha(e);
  for (let u = 0; u <= 20; u++) {
    const d = Cc(i);
    if (ba(d, o) >= n)
      return d;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Cc(e) {
  return "#" + e.map(
    (o) => Math.round(Math.max(0, Math.min(255, o))).toString(16).padStart(2, "0")
  ).join("");
}
const Sc = { class: "flex flex-col gap-2" }, Mc = { class: "flex items-center gap-2" }, Bc = {
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
}, Ac = ["value", "disabled", "aria-label"], _c = ["value", "disabled", "placeholder"], Pc = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, zc = ["aria-label", "title", "onClick"], Oc = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, jc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = $(() => typeof n.modelValue == "string" ? n.modelValue : ""), u = $(() => s.test(i.value));
    function d(w) {
      const S = w.trim();
      if (S === "")
        return "";
      const y = S.startsWith("#") ? S : `#${S}`;
      return s.test(y) ? y.toLowerCase() : S;
    }
    function m(w) {
      r("update:modelValue", d(w.target.value));
    }
    const h = $(() => !u.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : ba(i.value, n.field.contrastBackground)), p = $(() => n.field.contrastMinRatio ?? $c), x = $(() => h.value !== null && h.value < p.value);
    function A() {
      n.field.contrastBackground && r(
        "update:modelValue",
        wc(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (w, S) => (t(), a("div", Sc, [
      l("div", Mc, [
        u.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: S[0] || (S[0] = (y) => r("update:modelValue", y.target.value))
        }, null, 40, Ac)) : (t(), a("span", Bc)),
        l("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, _c)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Pc, [
        (t(!0), a(P, null, V(e.field.presets, (y) => (t(), a("button", {
          key: y,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === y.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: y }),
          "aria-label": y,
          title: y,
          onClick: (g) => r("update:modelValue", y.toLowerCase())
        }, null, 14, zc))), 128))
      ])) : k("", !0),
      x.value ? (t(), a("p", Oc, [
        l("span", null, " This fails contrast at " + f(h.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? k("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: A
        }, " Use a readable shade "))
      ])) : k("", !0)
    ]));
  }
}), Lc = { class: "flex items-center gap-3" }, Vc = ["min", "max", "step", "value", "disabled", "aria-label"], Tc = { class: "flex shrink-0 items-center gap-1" }, Dc = ["min", "max", "step", "value", "disabled"], Ec = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ic = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.field.min ?? 0), i = $(() => n.field.max ?? 100), u = $(() => n.field.step ?? 1), d = $(() => {
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
    return (p, x) => (t(), a("div", Lc, [
      l("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: x[0] || (x[0] = (A) => h(A.target.value))
      }, null, 40, Vc),
      l("div", Tc, [
        l("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: m.value ? "" : d.value,
          disabled: e.disabled,
          onInput: x[1] || (x[1] = (A) => h(A.target.value))
        }, null, 40, Dc),
        e.field.unit ? (t(), a("span", Ec, f(e.field.unit), 1)) : k("", !0)
      ])
    ]));
  }
}), Xe = /* @__PURE__ */ new Map();
function pt(e, o) {
  Xe.set(e, o);
}
function Fc(e) {
  return Xe.get(e);
}
function Y4(e) {
  return Xe.has(e);
}
function Nc() {
  return [...Xe.keys()].sort();
}
function X4() {
  Xe.clear();
}
const Rc = ["name", "value", "checked", "disabled", "onChange"], Uc = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Hc = { class: "whitespace-nowrap" }, qc = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Kc = ["name", "value", "checked", "disabled", "onChange"], Gc = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Wc = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Zc = { class: "text-center text-xs font-medium" }, Jc = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Yc = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Xc = /* @__PURE__ */ O({
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
      () => n.field.preview ? Fc(n.field.preview) : void 0
    ), i = $(() => !!n.field.preview && !s.value), u = $(() => n.field.layout === "segmented"), d = $(() => {
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
    return (h, p) => u.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(P, null, V(e.options, (x) => (t(), a("label", {
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
        }, null, 40, Rc),
        p[0] || (p[0] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", Uc, [
          (t(), T(xe(s.value), {
            value: x.value,
            label: x.label,
            selected: m(x)
          }, null, 8, ["value", "label", "selected"]))
        ])) : k("", !0),
        l("span", Hc, f(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", qc, " Nothing to choose from yet. ")) : k("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", d.value])
    }, [
      (t(!0), a(P, null, V(e.options, (x) => (t(), a("label", {
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
        }, null, 40, Kc),
        p[1] || (p[1] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        l("span", Gc, [
          s.value ? (t(), T(xe(s.value), {
            key: 0,
            value: x.value,
            label: x.label,
            selected: m(x)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", Wc, " no preview ")) : k("", !0)
        ]),
        l("span", Zc, f(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Jc, " Nothing to choose from yet. ")) : k("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", Yc, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        l("code", null, f(e.field.preview), 1),
        U(". Registered: " + f(b(Nc)().join(", ") || "none") + ". ", 1)
      ])) : k("", !0)
    ], 2));
  }
}), Qc = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, ef = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", Qc, [
      l("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), tf = { class: "flex flex-col items-center gap-1 text-center" }, af = {
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
    return (s, i) => (t(), a("div", tf, [
      l("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: n.value, color: n.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", af, f(e.caption), 1)) : k("", !0)
    ]));
  }
}), nf = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, lf = { class: "flex items-center gap-3" }, of = ["src"], sf = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, rf = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, uf = {
  key: 0,
  class: "text-right text-sm"
}, df = { class: "text-neutral-500" }, cf = { class: "tabular-nums" }, ff = { key: 1 }, mf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, pf = { class: "mt-2 font-medium" }, vf = { key: 2 }, gf = { class: "w-full text-sm" }, hf = { class: "w-full py-3 pr-2" }, bf = {
  key: 0,
  class: "text-xs text-neutral-500"
}, xf = { key: 0 }, yf = ["colspan"], kf = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, $f = { class: "w-64 text-sm" }, wf = { class: "tabular-nums" }, Cf = {
  key: 3,
  class: "py-2"
}, Sf = { key: 4 }, Mf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Bf = { class: "mt-2 flex flex-col gap-1 text-sm" }, Af = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, _f = { key: 0 }, Pf = {
  key: 1,
  class: "mt-1"
}, zf = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Of = /* @__PURE__ */ O({
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
    function u(m) {
      return m ?? [];
    }
    function d(m) {
      return m ?? "";
    }
    return (m, h) => (t(), a("article", nf, [
      l("div", lf, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, of)) : (t(), a("p", {
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
            p.subtitle ? (t(), a("p", sf, f(p.subtitle), 1)) : k("", !0),
            p.reference ? (t(), a("p", rf, f(p.reference), 1)) : k("", !0)
          ]),
          r(p).length ? (t(), a("dl", uf, [
            (t(!0), a(P, null, V(r(p), (A, w) => (t(), a("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              l("dt", df, f(A.label), 1),
              l("dd", cf, f(A.value), 1)
            ]))), 128))
          ])) : k("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", ff, [
          l("h2", mf, f(p.heading), 1),
          l("p", pf, f(p.name), 1),
          (t(!0), a(P, null, V(u(p.lines), (A, w) => (t(), a("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, f(A), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", vf, [
          l("table", gf, [
            l("thead", null, [
              l("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: n() })
              }, [
                (t(!0), a(P, null, V(u(p.columns), (A, w) => (t(), a("th", {
                  key: w,
                  class: z(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(A), 3))), 128))
              ], 4)
            ]),
            l("tbody", null, [
              (t(!0), a(P, null, V(s(p), (A, w) => (t(), a("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                l("td", hf, [
                  l("p", null, f(A.description), 1),
                  A.detail ? (t(), a("p", bf, f(A.detail), 1)) : k("", !0)
                ]),
                (t(!0), a(P, null, V(A.cells, (S, y) => (t(), a("td", {
                  key: y,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(S), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", xf, [
                l("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, yf)
              ])) : k("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", kf, [
            l("dl", $f, [
              (t(!0), a(P, null, V(i(p), (A, w) => (t(), a("div", {
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
                l("dd", wf, f(A.value), 1)
              ], 6))), 128))
            ])
          ])) : k("", !0)
        ])) : p.type === "code" ? (t(), a("section", Cf, [
          I(xa, {
            code: d(p.code),
            caption: d(p.caption),
            style: ne(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", Sf, [
          l("h2", Mf, f(p.heading), 1),
          l("ol", Bf, [
            (t(!0), a(P, null, V(u(p.items), (A, w) => (t(), a("li", {
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
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", Af, [
          p.text ? (t(), a("p", _f, f(p.text), 1)) : k("", !0),
          u(p.contacts).length ? (t(), a("p", Pf, f(u(p.contacts).join(" · ")), 1)) : k("", !0)
        ])) : (t(), a("p", zf, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), jf = ["aria-label", "title"], Lf = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vf = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, Q4 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: o, set: n } = ma(), r = $(() => o.value.theme === "dark");
    function s() {
      n({ theme: r.value ? "light" : "dark" });
    }
    return (i, u) => (t(), a("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), a("svg", Lf, [
        r.value ? (t(), a(P, { key: 0 }, [
          u[0] || (u[0] = l("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = l("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", Vf))
      ]))
    ], 8, jf));
  }
}), Tf = ["width", "height"], Df = { key: 0 }, Ef = ["x1", "x2", "y1", "y2"], If = ["x", "y"], Ff = ["x1", "x2", "y1", "y2"], Nf = ["x", "y"], Rf = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Uf = ["x", "y", "width", "height", "fill", "fill-opacity"], Hf = ["x", "y"], qf = ["x", "y"], Kf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Gf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Wf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Zf = { class: "text-xs font-semibold tabular-nums" }, Jf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Yf = { class: "text-muted-foreground" }, Zt = 5.6, e5 = /* @__PURE__ */ O({
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
    const i = K(null), u = K(560), d = K(null);
    let m = null;
    pe(() => {
      m = new ResizeObserver((M) => {
        u.value = Math.max(160, M[0].contentRect.width);
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
    }))), x = $(() => p.value[0]?.points.map((M) => M.label) ?? []), A = $(() => x.value.length), w = $(() => o.orientation === "horizontal"), S = $(() => Math.max(0, ...x.value.map((M) => M.length))), y = $(() => {
      if (!w.value)
        return o.showAxis ? 44 : 8;
      const M = S.value * Zt + 16;
      return Math.round(Math.min(Math.max(60, M), u.value * 0.4));
    }), g = $(() => Math.max(4, Math.floor((y.value - 16) / Zt)));
    function v(M) {
      return M.length <= g.value ? M : `${M.slice(0, g.value - 1)}…`;
    }
    const c = $(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: y.value
    })), C = $(() => ({
      w: Math.max(1, u.value - c.value.left - c.value.right),
      h: Math.max(1, o.height - c.value.top - c.value.bottom)
    })), B = (M) => o.format ? o.format(M) : _(M);
    function _(M) {
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
          const X = Math.max(0, le.value) / R.value * (w.value ? C.value.w : C.value.h), de = (w.value ? c.value.top : c.value.left) + F * D.value + (D.value - ee.value) / 2, re = o.stacked ? 0 : Y * H.value;
          M.push(
            w.value ? {
              x: c.value.left + N[F],
              y: de + re,
              w: X,
              h: Math.max(0, H.value - 2),
              color: s(le.value, L.color),
              label: le.label,
              name: L.name,
              value: le.value,
              index: F
            } : {
              x: de + re,
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
    const W = $(() => d.value === null ? null : {
      label: x.value[d.value],
      rows: p.value.map((M) => ({
        name: M.name,
        color: M.color,
        value: M.points[d.value]?.value ?? 0
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
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: N[0] || (N[0] = (L) => d.value = null)
        }, [
          e.showAxis ? (t(), a("g", Df, [
            w.value ? (t(), a(P, { key: 0 }, [
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: c.value.top,
                y2: c.value.top + C.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Ef))), 128)),
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(_(L.value)), 9, If))), 128))
            ], 64)) : (t(), a(P, { key: 1 }, [
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: c.value.left,
                x2: u.value - c.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Ff))), 128)),
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: c.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(_(L.value)), 9, Nf))), 128))
            ], 64))
          ])) : k("", !0),
          (t(!0), a(P, null, V(x.value, (L, Y) => (t(), a("rect", {
            key: `hit-${Y}`,
            x: w.value ? c.value.left : c.value.left + Y * D.value,
            y: w.value ? c.value.top + Y * D.value : c.value.top,
            width: w.value ? C.value.w : D.value,
            height: w.value ? D.value : C.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === Y ? 0.4 : 0,
            onMouseenter: (le) => d.value = Y
          }, null, 40, Rf))), 128)),
          (t(!0), a(P, null, V(G.value, (L, Y) => (t(), a("rect", {
            key: `b-${Y}`,
            x: L.x,
            y: L.y,
            width: L.w,
            height: L.h,
            fill: L.color,
            "fill-opacity": d.value === null || d.value === L.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Uf))), 128)),
          w.value ? (t(!0), a(P, { key: 1 }, V(x.value, (L, Y) => ce((t(), a("text", {
            key: `c-${Y}`,
            x: c.value.left - 8,
            y: J(Y) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(f(v(L)) + " ", 1),
            l("title", null, f(L), 1)
          ], 8, Hf)), [
            [Le, te(Y)]
          ])), 128)) : (t(!0), a(P, { key: 2 }, V(x.value, (L, Y) => ce((t(), a("text", {
            key: `c-${Y}`,
            x: J(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, qf)), [
            [Le, te(Y)]
          ])), 128))
        ], 40, Tf)),
        W.value ? (t(), a("div", Kf, [
          l("p", Gf, f(W.value.label), 1),
          (t(!0), a(P, null, V(W.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Wf, f(L.name || "Value"), 1),
            l("span", Zf, f(B(L.value)), 1)
          ]))), 128))
        ])) : k("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", Jf, [
          (t(!0), a(P, null, V(p.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Yf, f(L.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), Xf = ["width", "height"], Qf = ["id"], em = ["stop-color"], tm = ["stop-color"], am = { key: 0 }, nm = ["x1", "x2", "y1", "y2"], lm = ["x", "y"], om = ["x", "y"], sm = ["x1", "x2", "y1", "y2"], rm = ["d", "fill"], im = ["d", "stroke", "stroke-dasharray"], um = ["cx", "cy", "fill"], dm = { key: 1 }, cm = ["x1", "x2", "y1", "y2"], fm = ["cx", "cy", "fill"], mm = ["x", "y"], pm = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, vm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, gm = { class: "text-xs font-semibold tabular-nums" }, hm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, bm = { class: "text-muted-foreground" }, xm = /* @__PURE__ */ O({
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
    let u = null;
    pe(() => {
      u = new ResizeObserver((M) => {
        s.value = Math.max(160, M[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), he(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = Math.random().toString(36).slice(2, 9), h = $(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? d[L % d.length]
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
    function y(M) {
      const N = Math.max(...M, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((le) => N <= le * L) ?? 10) * L;
    }
    const g = $(
      () => y(
        h.value.filter((M) => M.axis !== "right").flatMap((M) => M.points.map((N) => N.value))
      )
    ), v = $(
      () => y(
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
    const _ = $(
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
          const X = 2 * L[E] + L[E - 1], de = L[E] + 2 * L[E - 1];
          le[E] = (X + de) / (X / Y[E - 1] + de / Y[E]);
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
        rows: _.value.map((N) => ({
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
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: te,
          onMouseleave: N[0] || (N[0] = (L) => i.value = null)
        }, [
          l("defs", null, [
            (t(!0), a(P, null, V(_.value, (L, Y) => (t(), a("linearGradient", {
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
              }, null, 8, em),
              l("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, tm)
            ], 8, Qf))), 128))
          ]),
          e.showAxis ? (t(), a("g", am, [
            (t(!0), a(P, null, V(H.value, (L) => (t(), a("line", {
              key: L.y,
              x1: A.value.left,
              x2: s.value - A.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, nm))), 128)),
            (t(!0), a(P, null, V(H.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: A.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(S(L.value)), 9, lm))), 128)),
            n.value ? (t(!0), a(P, { key: 0 }, V(G.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - A.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(S(L.value)), 9, om))), 128)) : k("", !0)
          ])) : k("", !0),
          (t(!0), a(P, null, V(p.value, (L, Y) => ce((t(), a("line", {
            key: `v-${Y}`,
            x1: C(Y),
            x2: C(Y),
            y1: A.value.top,
            y2: A.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, sm)), [
            [Le, ae(Y)]
          ])), 128)),
          (t(!0), a(P, null, V(_.value, (L, Y) => (t(), a("g", {
            key: `s-${Y}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${b(m)}-${Y})`
            }, null, 8, rm)) : k("", !0),
            l("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, im),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, um)) : k("", !0)
          ]))), 128)),
          J.value ? (t(), a("g", dm, [
            l("line", {
              x1: J.value.x,
              x2: J.value.x,
              y1: A.value.top,
              y2: A.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, cm),
            (t(!0), a(P, null, V(J.value.rows, (L, Y) => (t(), a("circle", {
              key: `d-${Y}`,
              cx: J.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, fm))), 128))
          ])) : k("", !0),
          (t(!0), a(P, null, V(p.value, (L, Y) => ce((t(), a("text", {
            key: `x-${Y}`,
            x: C(Y),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, mm)), [
            [Le, ae(Y)]
          ])), 128))
        ], 40, Xf)),
        J.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(W.value)
        }, [
          l("p", pm, f(J.value.label), 1),
          (t(!0), a(P, null, V(J.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", vm, f(L.name || "Value"), 1),
            l("span", gm, f(w(L.value)), 1)
          ]))), 128))
        ], 4)) : k("", !0),
        e.showLegend && h.value.length > 1 ? (t(), a("div", hm, [
          (t(!0), a(P, null, V(_.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", bm, f(L.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), ym = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, km = { class: "text-muted-foreground text-[11px] capitalize" }, $m = { class: "text-sm font-semibold tabular-nums" }, wm = {
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
    return (o, n) => (t(), a("div", ym, [
      l("p", km, f(e.label), 1),
      l("p", $m, [
        U(f(e.value) + " ", 1),
        e.share ? (t(), a("span", wm, " (" + f(e.share) + ") ", 1)) : k("", !0)
      ])
    ]));
  }
}), Cm = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Sm = ["width", "height", "viewBox", "aria-label"], Mm = ["d", "fill", "fill-opacity", "onMouseenter"], Bm = ["x", "y"], Am = ["x", "y"], _m = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Pm = ["onMouseenter"], zm = { class: "min-w-0 flex-1 truncate capitalize" }, Om = { class: "tabular-nums font-medium" }, jm = { class: "text-muted-foreground w-9 text-right tabular-nums" }, t5 = /* @__PURE__ */ O({
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
    ], r = $(() => o.data.reduce((g, v) => g + v.value, 0)), s = K(null), i = $(() => o.height), u = $(() => i.value / 2 - 4), d = $(() => o.type === "doughnut" ? u.value * 0.62 : 0);
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
        const B = c.value / r.value, _ = B * Math.PI * 2, R = v, D = v + _;
        return v = D, {
          ...c,
          share: B,
          colour: m(C),
          opacity: h(C),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: B >= 0.9999 ? w(g) : A(g, R, D, u.value, d.value)
        };
      });
    });
    function x(g, v, c) {
      return `${(g + Math.cos(v) * c).toFixed(2)},${(g + Math.sin(v) * c).toFixed(2)}`;
    }
    function A(g, v, c, C, B) {
      const _ = c - v > Math.PI ? 1 : 0;
      return B <= 0 ? `M${g},${g} L${x(g, v, C)} A${C},${C} 0 ${_} 1 ${x(g, c, C)} Z` : [
        `M${x(g, v, C)}`,
        `A${C},${C} 0 ${_} 1 ${x(g, c, C)}`,
        `L${x(g, c, B)}`,
        `A${B},${B} 0 ${_} 0 ${x(g, v, B)}`,
        "Z"
      ].join(" ");
    }
    function w(g) {
      const v = u.value, c = d.value, C = [
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
    const S = (g) => o.format ? o.format(g) : new Intl.NumberFormat().format(g), y = (g) => `${(g * 100).toFixed(g < 0.01 ? 2 : 0)}%`;
    return (g, v) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Cm, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${S(r.value)}`
      }, [
        (t(!0), a(P, null, V(p.value, (c, C) => (t(), a("path", {
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
        }, null, 40, Mm))), 128)),
        e.type === "doughnut" ? (t(), a(P, { key: 0 }, [
          l("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(S(s.value === null ? r.value : p.value[s.value].value)), 9, Bm),
          l("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Am)
        ], 64)) : k("", !0)
      ], 8, Sm)),
      l("ul", _m, [
        (t(!0), a(P, null, V(p.value, (c, C) => (t(), a("li", {
          key: C,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === C ? "bg-muted" : ""]),
          onMouseenter: (B) => s.value = C,
          onMouseleave: v[1] || (v[1] = (B) => s.value = null)
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          l("span", zm, f(c.label), 1),
          l("span", Om, f(S(c.value)), 1),
          l("span", jm, f(y(c.share)), 1)
        ], 42, Pm))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(Qe, {
        key: 0,
        label: p.value[s.value].label,
        value: S(p.value[s.value].value),
        share: y(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : k("", !0)
    ]));
  }
}), Lm = ["width", "height", "viewBox", "aria-label"], Vm = { class: "text-border" }, Tm = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Dm = { class: "fill-muted-foreground text-[10px]" }, Em = ["x", "y"], Im = ["x", "y"], Fm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Nm = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, a5 = /* @__PURE__ */ O({
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
    let u = null;
    pe(() => {
      u = new ResizeObserver((Z) => {
        const ae = Z[0]?.contentRect.width ?? 0;
        ae > 0 && (s.value = ae);
      }), r.value && u.observe(r.value);
    }), he(() => u?.disconnect());
    const d = $(
      () => o.series?.length ? o.series : [{ name: "", points: o.data ?? [] }]
    ), m = (Z, ae) => ae.color ?? n[Z % n.length], h = $(() => d.value.flatMap((Z) => Z.points)), p = $(() => h.value.some((Z) => typeof Z.r == "number")), x = { top: 12, right: 16, bottom: 32, left: 48 }, A = $(() => Math.max(10, s.value - x.left - x.right)), w = $(() => Math.max(10, o.height - x.top - x.bottom));
    function S(Z) {
      if (Z.length === 0)
        return [0, 1];
      const ae = Math.min(...Z), te = Math.max(...Z), J = te - ae || Math.abs(te) || 1;
      return [ae - J * 0.08, te + J * 0.08];
    }
    const y = $(() => S(h.value.map((Z) => Z.x))), g = $(() => S(h.value.map((Z) => Z.y))), v = (Z) => {
      const [ae, te] = y.value;
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
    function _([Z, ae]) {
      return Array.from({ length: 5 }, (te, J) => Z + (ae - Z) / 4 * J);
    }
    const R = $(() => _(y.value)), D = $(() => _(g.value)), ee = (Z) => o.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), H = (Z) => o.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), G = $(() => {
      if (!i.value)
        return null;
      const Z = d.value[i.value.s], ae = Z?.points[i.value.p];
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
        l("g", Vm, [
          (t(!0), a(P, null, V(D.value, (te, J) => (t(), a("line", {
            key: `gy-${J}`,
            x1: x.left,
            x2: x.left + A.value,
            y1: c(te),
            y2: c(te),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": J === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Tm))), 128))
        ]),
        l("g", Dm, [
          (t(!0), a(P, null, V(D.value, (te, J) => (t(), a("text", {
            key: `ty-${J}`,
            x: x.left - 8,
            y: c(te) + 3,
            "text-anchor": "end"
          }, f(H(te)), 9, Em))), 128)),
          (t(!0), a(P, null, V(R.value, (te, J) => (t(), a("text", {
            key: `tx-${J}`,
            x: v(te),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ee(te)), 9, Im))), 128))
        ]),
        (t(!0), a(P, null, V(d.value, (te, J) => (t(), a("g", {
          key: `s-${J}`
        }, [
          (t(!0), a(P, null, V(te.points, (W, M) => (t(), a("circle", {
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
          }, null, 40, Fm))), 128))
        ]))), 128))
      ], 8, Lm)),
      G.value ? (t(), T(Qe, {
        key: 0,
        label: G.value.point.label ?? G.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(G.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(G.value.point.y)}`,
        share: p.value && G.value.point.r != null ? String(G.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : k("", !0),
      e.showLegend && d.value.length > 1 ? (t(), a("div", Nm, [
        (t(!0), a(P, null, V(d.value, (te, J) => (t(), a("span", {
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
      ])) : k("", !0)
    ], 512));
  }
}), Rm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Um = ["width", "height", "viewBox"], Hm = ["points"], qm = ["x1", "y1", "x2", "y2"], Km = ["points", "fill", "stroke"], Gm = ["cx", "cy", "fill", "onMouseenter"], Wm = ["x", "y", "text-anchor"], Zm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Jm = { class: "truncate" }, n5 = /* @__PURE__ */ O({
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
    ), s = $(() => r.value[0]?.points.map((c) => c.label) ?? []), i = $(() => s.value.length), u = $(() => o.height), d = $(() => u.value / 2), m = $(() => u.value / 2 - 34), h = $(() => {
      const c = Math.max(...r.value.flatMap((_) => _.points.map((R) => R.value)), 0);
      if (c <= 0)
        return 1;
      const C = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((_) => c <= _ * C) ?? 10) * C;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function x(c, C) {
      const B = p(c);
      return {
        x: d.value + Math.cos(B) * m.value * C,
        y: d.value + Math.sin(B) * m.value * C
      };
    }
    function A(c) {
      return Array.from({ length: i.value }, (C, B) => {
        const _ = x(B, c);
        return `${_.x.toFixed(2)},${_.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = $(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: A(c) }))), S = $(
      () => r.value.map((c) => {
        const C = c.points.map((B) => Math.max(0, B.value) / h.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: C.map((B, _) => {
            const R = x(_, B);
            return `${R.x.toFixed(2)},${R.y.toFixed(2)}`;
          }).join(" "),
          dots: C.map((B, _) => x(_, B))
        };
      })
    ), y = $(
      () => s.value.map((c, C) => {
        const B = p(C), _ = d.value + Math.cos(B) * (m.value + 14), R = d.value + Math.sin(B) * (m.value + 14), D = Math.cos(B);
        return {
          label: c,
          x: _,
          y: R + 3,
          anchor: Math.abs(D) < 0.2 ? "middle" : D > 0 ? "start" : "end"
        };
      })
    ), g = K(null), v = (c) => o.format ? o.format(c) : new Intl.NumberFormat().format(c);
    return (c, C) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", Rm, [
      (t(), a("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(w.value, (B) => (t(), a("polygon", {
          key: B.f,
          points: B.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Hm))), 128)),
        (t(!0), a(P, null, V(s.value, (B, _) => (t(), a("line", {
          key: `spoke-${_}`,
          x1: d.value,
          y1: d.value,
          x2: x(_, 1).x,
          y2: x(_, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, qm))), 128)),
        (t(!0), a(P, null, V(S.value, (B, _) => (t(), a("g", {
          key: `s-${_}`
        }, [
          l("polygon", {
            points: B.outline,
            fill: B.color,
            "fill-opacity": "0.16",
            stroke: B.color,
            "stroke-width": "2"
          }, null, 8, Km),
          (t(!0), a(P, null, V(B.dots, (R, D) => (t(), a("circle", {
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
          }, null, 40, Gm))), 128))
        ]))), 128)),
        (t(!0), a(P, null, V(y.value, (B, _) => (t(), a("text", {
          key: `l-${_}`,
          x: B.x,
          y: B.y,
          "text-anchor": B.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(B.label), 9, Wm))), 128))
      ], 8, Um)),
      e.showLegend ? (t(), a("ul", Zm, [
        (t(!0), a(P, null, V(r.value, (B, _) => (t(), a("li", {
          key: _,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: B.color })
          }, null, 4),
          l("span", Jm, f(B.name), 1)
        ]))), 128))
      ])) : k("", !0),
      g.value ? (t(), T(Qe, {
        key: 1,
        label: `${g.value.series} — ${g.value.axis}`,
        value: v(g.value.value)
      }, null, 8, ["label", "value"])) : k("", !0)
    ]));
  }
}), Ym = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Xm = ["width", "height", "viewBox"], Qm = ["cx", "cy", "r"], ep = ["d", "fill", "fill-opacity", "onMouseenter"], tp = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, ap = { class: "min-w-0 flex-1 truncate capitalize" }, np = { class: "font-medium tabular-nums" }, l5 = /* @__PURE__ */ O({
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
    ], r = K(null), s = $(() => o.height), i = $(() => s.value / 2), u = $(() => s.value / 2 - 6), d = $(() => Math.max(...o.data.map((A) => Math.max(0, A.value)), 0)), m = $(() => {
      const A = o.data.length;
      if (A === 0 || d.value <= 0)
        return [];
      const w = Math.PI * 2 / A;
      return o.data.map((S, y) => {
        const g = Math.sqrt(Math.max(0, S.value) / d.value), v = u.value * g, c = y * w - Math.PI / 2, C = c + w;
        return {
          ...S,
          color: n[y % n.length],
          share: d.value === 0 ? 0 : S.value / d.value,
          path: h(i.value, c, C, v)
        };
      });
    });
    function h(A, w, S, y) {
      if (y <= 0)
        return "";
      if (S - w >= Math.PI * 2 - 1e-6)
        return `M${A - y},${A} A${y},${y} 0 1 1 ${A + y},${A} A${y},${y} 0 1 1 ${A - y},${A} Z`;
      const g = S - w > Math.PI ? 1 : 0, v = A + Math.cos(w) * y, c = A + Math.sin(w) * y, C = A + Math.cos(S) * y, B = A + Math.sin(S) * y;
      return `M${A},${A} L${v.toFixed(2)},${c.toFixed(2)} A${y.toFixed(2)},${y.toFixed(2)} 0 ${g} 1 ${C.toFixed(2)},${B.toFixed(2)} Z`;
    }
    const p = $(() => [0.5, 0.75, 1].map((A) => u.value * A)), x = (A) => o.format ? o.format(A) : new Intl.NumberFormat().format(A);
    return (A, w) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Ym, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(p.value, (S) => (t(), a("circle", {
          key: S,
          cx: i.value,
          cy: i.value,
          r: S,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Qm))), 128)),
        (t(!0), a(P, null, V(m.value, (S, y) => (t(), a("path", {
          key: y,
          d: S.path,
          fill: S.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === y ? 0.75 : 0.3,
          onMouseenter: (g) => r.value = y,
          onMouseleave: w[0] || (w[0] = (g) => r.value = null)
        }, null, 40, ep))), 128))
      ], 8, Xm)),
      e.showLegend ? (t(), a("ul", tp, [
        (t(!0), a(P, null, V(m.value, (S, y) => (t(), a("li", {
          key: y,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: S.color })
          }, null, 4),
          l("span", ap, f(S.label), 1),
          l("span", np, f(x(S.value)), 1)
        ]))), 128))
      ])) : k("", !0),
      r.value !== null ? (t(), T(Qe, {
        key: 1,
        label: m.value[r.value].label,
        value: x(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : k("", !0)
    ]));
  }
}), lp = ["width", "height"], op = ["x1", "x2", "y1", "y2"], sp = ["x", "y"], rp = ["x", "y"], ip = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], up = ["x", "y", "width", "height", "fill", "fill-opacity"], dp = ["d", "stroke"], cp = ["cx", "cy", "fill"], fp = ["x", "y"], mp = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, pp = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, vp = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, gp = { class: "text-xs font-semibold tabular-nums" }, hp = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, bp = { class: "text-muted-foreground" }, o5 = /* @__PURE__ */ O({
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
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], m = $(
      () => o.bars.map((J, W) => ({
        ...J,
        color: J.color ?? u[W % u.length]
      }))
    ), h = $(
      () => o.lines.map((J, W) => ({
        ...J,
        color: J.color ?? d[W % d.length]
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
    function y(J) {
      const W = Math.max(...J, 0);
      if (W <= 0)
        return 1;
      const M = 10 ** Math.floor(Math.log10(W));
      return ([1, 2, 2.5, 5, 10].find((L) => W <= L * M) ?? 10) * M;
    }
    const g = $(
      () => y([
        ...m.value.flatMap((J) => J.points.map((W) => W.value)),
        ...A.value ? [] : h.value.flatMap((J) => J.points.map((W) => W.value))
      ])
    ), v = $(
      () => A.value ? y(h.value.flatMap((J) => J.points.map((W) => W.value))) : g.value
    ), c = $(() => S.value.w / Math.max(1, x.value)), C = $(() => c.value * 0.6), B = $(() => C.value / Math.max(1, m.value.length));
    function _(J) {
      return w.value.left + J * c.value + c.value / 2;
    }
    const R = $(
      () => m.value.flatMap(
        (J, W) => J.points.map((M, N) => {
          const L = Math.max(0, M.value) / g.value * S.value.h;
          return {
            x: _(N) - C.value / 2 + W * B.value,
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
          x: _(N),
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
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: W[0] || (W[0] = (M) => s.value = null)
        }, [
          (t(!0), a(P, null, V(ee.value, (M) => (t(), a("line", {
            key: `g-${M.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: M.y,
            y2: M.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, op))), 128)),
          (t(!0), a(P, null, V(ee.value, (M) => (t(), a("text", {
            key: `lt-${M.y}`,
            x: w.value.left - 8,
            y: M.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(M.left)), 9, sp))), 128)),
          A.value ? (t(!0), a(P, { key: 0 }, V(ee.value, (M) => (t(), a("text", {
            key: `rt-${M.y}`,
            x: r.value - w.value.right + 8,
            y: M.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(M.right)), 9, rp))), 128)) : k("", !0),
          (t(!0), a(P, null, V(p.value, (M, N) => (t(), a("rect", {
            key: `hit-${N}`,
            x: w.value.left + N * c.value,
            y: w.value.top,
            width: c.value,
            height: S.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === N ? 0.4 : 0,
            onMouseenter: (L) => s.value = N
          }, null, 40, ip))), 128)),
          (t(!0), a(P, null, V(R.value, (M, N) => (t(), a("rect", {
            key: `b-${N}`,
            x: M.x,
            y: M.y,
            width: M.w,
            height: M.h,
            fill: M.color,
            "fill-opacity": s.value === null || s.value === M.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, up))), 128)),
          (t(!0), a(P, null, V(D.value, (M, N) => (t(), a("g", {
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
            }, null, 8, dp),
            s.value !== null && M.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: M.pts[s.value].x,
              cy: M.pts[s.value].y,
              r: "4",
              fill: M.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, cp)) : k("", !0)
          ]))), 128)),
          (t(!0), a(P, null, V(p.value, (M, N) => ce((t(), a("text", {
            key: `x-${N}`,
            x: _(N),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(M), 9, fp)), [
            [Le, G(N)]
          ])), 128))
        ], 40, lp)),
        te.value ? (t(), a("div", mp, [
          l("p", pp, f(te.value.label), 1),
          (t(!0), a(P, null, V(te.value.rows, (M, N) => (t(), a("div", {
            key: N,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: M.color })
            }, null, 4),
            l("span", vp, f(M.name), 1),
            l("span", gp, f(Z(M.value)), 1)
          ]))), 128))
        ])) : k("", !0),
        e.showLegend ? (t(), a("div", hp, [
          (t(!0), a(P, null, V([...m.value, ...h.value], (M, N) => (t(), a("span", {
            key: N,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: M.color })
            }, null, 4),
            l("span", bp, f(M.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), xp = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, yp = { class: "text-muted-foreground" }, kp = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, $p = ["width", "height"], wp = ["x", "y"], Cp = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Sp = ["x", "y"], Mp = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Bp = { class: "text-[11px] font-medium capitalize" }, Ap = { class: "text-muted-foreground text-[11px] capitalize" }, _p = { class: "text-sm font-semibold tabular-nums" }, Pp = { class: "text-muted-foreground text-xs font-normal" }, s5 = /* @__PURE__ */ O({
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
    const u = $(() => o.series[0]?.points.map((C) => C.label) ?? []), d = $(() => o.series.length), m = $(() => u.value.length), h = $(() => Math.min(140, Math.max(60, r.value * 0.16))), p = $(() => Math.max(1, r.value - h.value - 8)), x = $(() => p.value / Math.max(1, m.value)), A = $(() => Math.max(1, (o.height - 8) / Math.max(1, d.value)));
    function w(C) {
      if (C === 0)
        return "var(--muted)";
      const B = Math.max(1, o.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(C / B * 100)}%, var(--muted))`;
    }
    function S(C) {
      for (let B = 0; B < o.buckets.length; B++) {
        const _ = o.buckets[B].max;
        if (_ === void 0 || C < _)
          return B;
      }
      return o.buckets.length - 1;
    }
    const y = $(
      () => o.series.flatMap(
        (C, B) => C.points.map((_, R) => {
          const D = S(_.value);
          return {
            row: B,
            col: R,
            x: h.value + R * x.value,
            y: 4 + B * A.value,
            w: Math.max(1, x.value - 1),
            h: Math.max(1, A.value - 4),
            colour: w(D),
            label: _.label,
            value: _.value,
            rowName: C.name,
            bucketLabel: o.buckets[D].label
          };
        })
      )
    ), g = $(() => x.value < 2), v = $(() => s.value ? y.value.find((C) => C.row === s.value.row && C.col === s.value.col) ?? null : null), c = (C) => o.format ? o.format(C) : new Intl.NumberFormat().format(C);
    return (C, B) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      d.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        l("div", xp, [
          (t(!0), a(P, null, V(e.buckets, (_, R) => (t(), a("span", {
            key: R,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            l("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: w(R) })
            }, null, 4),
            l("span", yp, f(_.label), 1)
          ]))), 128))
        ]),
        g.value ? (t(), a("p", kp, f(m.value) + " columns - too many to label individually ", 1)) : k("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: B[0] || (B[0] = (_) => s.value = null)
        }, [
          (t(!0), a(P, null, V(e.series, (_, R) => (t(), a("text", {
            key: `r-${R}`,
            x: h.value - 10,
            y: 4 + R * A.value + A.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(_.name), 9, wp))), 128)),
          (t(!0), a(P, null, V(y.value, (_, R) => (t(), a("rect", {
            key: R,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.colour,
            "fill-opacity": s.value === null || s.value.row === _.row && s.value.col === _.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (D) => s.value = { row: _.row, col: _.col }
          }, null, 40, Cp))), 128)),
          e.showColumnLabels && !g.value ? (t(!0), a(P, { key: 0 }, V(u.value, (_, R) => (t(), a("text", {
            key: `c-${R}`,
            x: h.value + R * x.value + x.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(_), 9, Sp))), 128)) : k("", !0)
        ], 40, $p)),
        v.value ? (t(), a("div", Mp, [
          l("p", Bp, f(v.value.label), 1),
          l("p", Ap, f(v.value.rowName), 1),
          l("p", _p, [
            U(f(c(v.value.value)) + " ", 1),
            l("span", Pp, "(" + f(v.value.bucketLabel) + ")", 1)
          ])
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), zp = ["viewBox"], Op = { key: 0 }, jp = ["id"], Lp = ["stop-color"], Vp = ["stop-color"], Tp = ["d", "fill"], Dp = ["d", "stroke"], Jt = 100, qe = 30, it = /* @__PURE__ */ O({
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
      const d = o.data.map((x) => x.value);
      if (d.length < 2)
        return [];
      const m = Math.min(...d), p = Math.max(...d) - m || 1;
      return d.map((x, A) => ({
        x: A / (d.length - 1) * Jt,
        y: qe - (x - m) / p * (qe - 4) - 2
      }));
    });
    function s(d) {
      const m = d.length;
      if (m < 2)
        return "";
      const h = [], p = [];
      for (let w = 0; w < m - 1; w++)
        h[w] = d[w + 1].x - d[w].x, p[w] = h[w] === 0 ? 0 : (d[w + 1].y - d[w].y) / h[w];
      const x = [p[0]];
      for (let w = 1; w < m - 1; w++)
        if (p[w - 1] * p[w] <= 0)
          x[w] = 0;
        else {
          const S = 2 * h[w] + h[w - 1], y = h[w] + 2 * h[w - 1];
          x[w] = (S + y) / (S / p[w - 1] + y / p[w]);
        }
      x[m - 1] = p[m - 2];
      let A = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let w = 0; w < m - 1; w++) {
        const S = h[w] / 3;
        A += ` C${(d[w].x + S).toFixed(2)},${(d[w].y + x[w] * S).toFixed(2)} ${(d[w + 1].x - S).toFixed(2)},${(d[w + 1].y - x[w + 1] * S).toFixed(2)} ${d[w + 1].x.toFixed(2)},${d[w + 1].y.toFixed(2)}`;
      }
      return A;
    }
    const i = $(() => {
      const d = r.value;
      return d.length < 2 ? "" : o.smooth ? s(d) : d.map((m, h) => `${h === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), u = $(() => {
      const d = r.value;
      return !o.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${qe} L${d[0].x.toFixed(2)},${qe} Z`;
    });
    return (d, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Jt} ${qe}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Op, [
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
          }, null, 8, Lp),
          l("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Vp)
        ], 8, jp)
      ])) : k("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${b(n)})`
      }, null, 8, Tp)) : k("", !0),
      l("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Dp)
    ], 12, zp)) : k("", !0);
  }
}), Ep = { class: "flex items-center gap-1 text-xs" }, Ip = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Fp = {
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
    return (u, d) => (t(), a("span", Ep, [
      l("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        l("span", Ip, f(s.value), 1),
        U(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", Fp, f(e.comparison), 1)) : k("", !0)
    ]));
  }
}), Np = ["aria-label"], Ne = /* @__PURE__ */ O({
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
    function i(u) {
      if (!(o.variant !== "text" || s.value === 1))
        return u === s.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), a("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: ne(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(P, null, V(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Np));
  }
}), Rp = ["data-collapsed"], Up = { class: "flex flex-wrap items-start justify-between gap-2" }, Hp = { class: "flex min-w-0 items-start gap-2" }, qp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kp = ["d"], Gp = { class: "min-w-0" }, Wp = { class: "text-sm font-medium" }, Zp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Jp = { class: "flex shrink-0 items-center gap-1.5" }, Yp = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Xp = ["aria-pressed", "onClick"], Qp = ["aria-expanded", "aria-label", "title"], ev = ["aria-label"], tv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, av = ["d"], nv = /* @__PURE__ */ O({
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
    return (u, d) => (t(), a("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      l("div", Up, [
        l("div", Hp, [
          q(u.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", qp, [
              l("path", {
                d: b(ue)(e.icon)
              }, null, 8, Kp)
            ])) : k("", !0)
          ]),
          l("div", Gp, [
            l("p", Wp, f(e.label), 1),
            e.description ? (t(), a("p", Zp, f(e.description), 1)) : k("", !0),
            q(u.$slots, "trend")
          ])
        ]),
        l("div", Jp, [
          q(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", Yp, [
            (t(!0), a(P, null, V(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (h) => u.$emit("update:period", m.value)
            }, f(m.label), 11, Xp))), 128))
          ])) : k("", !0),
          e.collapsible ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: d[0] || (d[0] = (m) => r.value = !r.value)
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
            }, [...d[2] || (d[2] = [
              l("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, Qp)) : k("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (m) => u.$emit("hide"))
          }, [
            (t(), a("svg", tv, [
              l("path", {
                d: b(ue)("eye-off")
              }, null, 8, av)
            ]))
          ], 8, ev)) : k("", !0)
        ])
      ]),
      r.value ? k("", !0) : (t(), a("div", {
        key: 0,
        style: ne(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(Ne, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), a("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ne({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : q(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, Rp));
  }
}), lv = ["aria-pressed", "aria-label", "title"], ov = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sv = ["d"], rv = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, iv = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, uv = ["href"], dv = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, cv = ["d"], fv = ["aria-label", "onClick"], mv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, pv = ["d"], vv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gv = ["d"], hv = {
  key: 0,
  class: "flex flex-col gap-1"
}, bv = ["onClick"], xv = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yv = ["d"], kv = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, $v = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!1), i = K(!1), u = $(
      () => n.catalog.filter((h) => !n.items.some((p) => p.id === h.id))
    );
    function d(h) {
      r(
        "update:items",
        n.items.filter((p) => p.id !== h)
      );
    }
    function m(h) {
      r("update:items", [...n.items, h]), i.value = !1;
    }
    return (h, p) => (t(), a(P, null, [
      I(nv, {
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
            (t(), a("svg", ov, [
              l("path", {
                d: b(ue)(s.value ? "check" : "pencil")
              }, null, 8, sv)
            ]))
          ], 8, lv)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), a("div", rv, [
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
          ])) : (t(), a("div", iv, [
            (t(!0), a(P, null, V(e.items, (x) => (t(), a("div", {
              key: x.id,
              class: "inline-flex items-center gap-1"
            }, [
              l("a", {
                href: x.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", dv, [
                  l("path", {
                    d: b(ue)(x.icon)
                  }, null, 8, cv)
                ])),
                U(" " + f(x.label), 1)
              ], 8, uv),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${x.label}`,
                onClick: (A) => d(x.id)
              }, [
                (t(), a("svg", mv, [
                  l("path", {
                    d: b(ue)("x")
                  }, null, 8, pv)
                ]))
              ], 8, fv)) : k("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (x) => i.value = !0)
            }, [
              (t(), a("svg", vv, [
                l("path", {
                  d: b(ue)("plus")
                }, null, 8, gv)
              ])),
              p[8] || (p[8] = U(" Add ", -1))
            ])) : k("", !0)
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
          u.value.length ? (t(), a("ul", hv, [
            (t(!0), a(P, null, V(u.value, (x) => (t(), a("li", {
              key: x.id
            }, [
              l("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (A) => m(x)
              }, [
                (t(), a("svg", xv, [
                  l("path", {
                    d: b(ue)(x.icon)
                  }, null, 8, yv)
                ])),
                U(" " + f(x.label), 1)
              ], 8, bv)
            ]))), 128))
          ])) : (t(), a("p", kv, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), wv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Cv = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Sv = { class: "relative w-full max-w-xl" }, Mv = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bv = ["d"], Av = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, _v = ["data-slot"], Pv = { class: "px-5 py-4" }, zv = { class: "mb-3 text-sm font-semibold" }, Ov = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, jv = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lv = ["d"], Vv = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, r5 = /* @__PURE__ */ O({
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
      const d = o.linkComponent;
      return typeof d == "string" ? d : Xt(d);
    }), s = Ke({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = $(() => {
      const d = n.value.trim().toLowerCase();
      return o.sections.map((m) => ({
        ...m,
        links: d ? m.links.filter((h) => h.label.toLowerCase().includes(d)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (d, m) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ve)])
    }, [
      l("header", null, [
        l("h1", wv, f(e.title), 1),
        e.description ? (t(), a("p", Cv, f(e.description), 1)) : k("", !0)
      ]),
      l("div", Sv, [
        (t(), a("svg", Mv, [
          l("path", {
            d: b(ue)("search")
          }, null, 8, Bv)
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
      u.value.length ? (t(), a("div", Av, [
        (t(!0), a(P, null, V(u.value, (h) => (t(), a("section", {
          key: h.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${h.key}`
        }, [
          l("div", Pv, [
            l("h2", zv, f(h.title), 1),
            l("div", Ov, [
              (t(!0), a(P, null, V(h.links, (p) => (t(), T(xe(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: z(b(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), a("svg", jv, [
                    l("path", {
                      d: b(ue)(p.icon)
                    }, null, 8, Lv)
                  ])),
                  U(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, _v))), 128))
      ])) : (t(), a("p", Vv, ' Nothing matches "' + f(n.value) + '". ', 1))
    ], 2));
  }
}), Tv = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Dv = { class: "flex flex-1 flex-col gap-1 p-4" }, Ev = { class: "text-muted-foreground relative text-xs font-medium" }, Iv = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Fv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Nv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Rv = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, i5 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), a("div", Tv, [
      l("div", Dv, [
        l("p", Ev, f(e.label), 1),
        e.loading ? (t(), T(Ne, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", Iv, " Could not load ")) : (t(), a("span", Fv, f(o(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(ya, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", Nv, f(e.description), 1)) : k("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", Rv, [
        I(it, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : k("", !0)
    ]));
  }
}), Uv = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Hv = { class: "flex flex-col gap-1 p-4" }, qv = { class: "flex items-start justify-between gap-2" }, Kv = { class: "text-sm font-medium" }, Gv = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Wv = { class: "mt-1 flex flex-wrap items-center gap-2" }, Zv = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Jv = {
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
    return (i, u) => (t(), a("div", Uv, [
      l("div", Hv, [
        l("div", qv, [
          l("p", Kv, f(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", Gv, f(e.caption), 1)) : k("", !0),
        l("div", Wv, [
          e.loading ? (t(), T(Ne, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", Zv, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : k("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", Jv, [
        I(it, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : k("", !0)
    ]));
  }
}), Yv = { class: "relative flex flex-col gap-2" }, Xv = ["aria-label"], Qv = ["onMouseenter"], eg = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, tg = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, ag = { class: "truncate" }, ng = { class: "text-sm font-semibold tabular-nums" }, u5 = /* @__PURE__ */ O({
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
    ), u = (h) => o.format ? o.format(h) : new Intl.NumberFormat().format(h), d = K(null), m = (h) => `${(h * 100).toFixed(h > 0 && h < 0.01 ? 1 : 0)}%`;
    return (h, p) => (t(), a("div", Yv, [
      l("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((x) => `${x.label} ${u(x.value)}`).join(", ")
      }, [
        (t(!0), a(P, null, V(i.value, (x, A) => (t(), a("span", {
          key: A,
          class: z(["h-full transition-all", [
            A === 0 ? "rounded-l-full" : "",
            A === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: x.width,
            background: x.color,
            opacity: d.value === null || d.value === A ? 1 : 0.4
          }),
          onMouseenter: (w) => d.value = A,
          onMouseleave: p[0] || (p[0] = (w) => d.value = null)
        }, null, 46, Qv))), 128))
      ], 12, Xv),
      e.showLegend ? (t(), a("div", eg, [
        (t(!0), a(P, null, V(i.value, (x, A) => (t(), a("div", {
          key: A,
          class: "flex min-w-0 flex-col"
        }, [
          l("span", tg, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: x.color })
            }, null, 4),
            l("span", ag, f(x.label), 1)
          ]),
          l("span", ng, f(u(x.value)), 1)
        ]))), 128))
      ])) : k("", !0),
      d.value !== null ? (t(), T(Qe, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: m(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : k("", !0)
    ]));
  }
}), lg = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, og = ["data-heading"], sg = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, rg = { class: "text-muted-foreground truncate" }, ig = ["aria-label"], d5 = /* @__PURE__ */ O({
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
        const u = i.bar.segments.reduce((m, h) => m + Math.max(0, h.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
        return {
          ...i,
          segments: i.bar.segments.map((m) => ({
            ...m,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: m.value > 0 ? `max(2px, ${(Math.max(0, m.value) / d * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, u) => (t(), a("div", lg, [
      (t(!0), a(P, null, V(s.value, (d) => (t(), a("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), a("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? n[d.tone] : "text-muted-foreground"])
        }, f(d.label), 3)) : (t(), a("div", sg, [
          l("span", rg, f(d.label), 1),
          l("span", {
            class: z(["shrink-0 font-medium tabular-nums", d.tone ? n[d.tone] : "text-foreground"])
          }, f(d.value), 3)
        ])),
        d.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(P, null, V(d.segments, (m, h) => (t(), a("span", {
            key: h,
            class: z(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ne({ width: m.width })
          }, null, 6))), 128))
        ], 8, ig)) : k("", !0)
      ], 8, og))), 128))
    ]));
  }
}), ug = {
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
}, dg = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function cg(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function fg(e, o) {
  return o || (e ? ug[cg(e)] ?? "neutral" : "neutral");
}
function mg(e, o) {
  return dg[fg(e, o)];
}
const be = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const o = e, n = $(() => mg(o.status, o.tone));
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
}), pg = ["data-layout"], vg = ["src", "alt"], gg = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, hg = ["src"], bg = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, xg = ["onMouseenter"], yg = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, kg = { class: "min-w-0" }, $g = { class: "truncate text-sm font-medium" }, wg = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Cg = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Sg = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Mg = { class: "min-w-0" }, Bg = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Ag = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, _g = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Pg = ["d"], zg = ["aria-label"], Og = /* @__PURE__ */ O({
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
    function u(y) {
      if (typeof y != "string")
        return null;
      const g = y.trim();
      return g === "" ? null : /^(https?:)?\/\//i.test(g) ? g : null;
    }
    const d = $(() => {
      const y = [r.item.image, ...r.item.images ?? []].map(u).filter((g) => g !== null);
      return [...new Set(y)];
    }), m = $(() => d.value[i.value] ?? d.value[0] ?? null), h = $(
      () => r.item.label.split(/\s+/).slice(0, 2).map((y) => y[0]?.toUpperCase() ?? "").join("")
    ), p = $(() => {
      const y = r.item.progress;
      if (!y)
        return null;
      const g = Math.max(y.total ?? 100, y.value, 1);
      return `${Math.min(100, Math.max(0, y.value / g * 100)).toFixed(2)}%`;
    }), x = $(() => d.value.length > 1 ? d.value[1] : null), A = $(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = $(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function S(y) {
      y.stopPropagation(), s("cart", r.item.key);
    }
    return (y, g) => (t(), a("article", {
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
        }, null, 8, vg)) : (t(), a("span", gg, f(h.value), 1)),
        e.layout === "grid" && x.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: x.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, hg)) : k("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), a("div", bg, [
          (t(!0), a(P, null, V(d.value, (v, c) => (t(), a("span", {
            key: c,
            class: z(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (C) => i.value = c
          }, null, 42, xg))), 128))
        ])) : k("", !0)
      ], 2),
      l("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        l("div", yg, [
          l("div", kg, [
            l("p", $g, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", wg, f(e.item.caption), 1)) : k("", !0),
            e.item.facts?.length ? (t(), a("p", Cg, f(e.item.facts.join(" · ")), 1)) : k("", !0)
          ]),
          e.item.status ? (t(), T(be, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : k("", !0)
        ]),
        l("div", Sg, [
          l("div", Mg, [
            e.item.price ? (t(), a("p", Bg, f(e.item.price), 1)) : k("", !0),
            w.value ? (t(), a("p", Ag, f(w.value), 1)) : k("", !0)
          ]),
          A.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: S
          }, [
            (t(), a("svg", _g, [
              l("path", {
                d: b(ue)("cart")
              }, null, 8, Pg)
            ]))
          ])) : k("", !0)
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
        ], 8, zg)) : k("", !0)
      ], 2)
    ], 42, pg));
  }
});
function jg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Lg(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Vg(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Tg = ["data-featured", "data-recommended"], Dg = { class: "flex flex-col gap-1" }, Eg = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Ig = { key: 0 }, Fg = { key: 1 }, Ng = { key: 2 }, Rg = { key: 3 }, Ug = { class: "text-sm font-semibold" }, Hg = { class: "flex items-baseline gap-1" }, qg = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Kg = { class: "text-muted-foreground text-sm" }, Gg = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Wg = { class: "text-muted-foreground mt-1 text-xs" }, Zg = { class: "flex flex-1 flex-col gap-2 text-sm" }, Jg = { class: "flex min-w-0 items-start gap-2" }, Yg = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Xg = ["d"], Qg = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, eh = ["d"], th = { class: "capitalize" }, ah = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, nh = { class: "text-foreground font-medium" }, lh = { class: "mt-auto flex gap-2 pt-2" }, oh = /* @__PURE__ */ O({
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
    ), u = $(() => {
      const m = n.plan.perks ?? {};
      return Object.entries(m).map(([h, p]) => ({
        key: h,
        label: h.replace(/_/g, " "),
        granted: Vg(p.value),
        display: Lg(p.value)
      }));
    }), d = $(() => n.plan.extraPerks ?? []);
    return (m, h) => (t(), a("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      l("header", Dg, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", Eg, [
          e.plan.recommended ? (t(), a("span", Ig, "Recommended")) : e.plan.featured ? (t(), a("span", Fg, "Featured")) : k("", !0),
          e.plan.trial ? (t(), a("span", Ng, "Trial")) : k("", !0),
          e.plan.active === !1 ? (t(), a("span", Rg, "Inactive")) : k("", !0)
        ])) : k("", !0),
        l("h3", Ug, f(e.plan.name), 1),
        l("p", Hg, [
          l("span", qg, f(s.value), 1),
          l("span", Kg, f(b(jg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", Gg, f(e.plan.shortDescription), 1)) : k("", !0),
        l("p", Wg, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      l("ul", Zg, [
        (t(!0), a(P, null, V(u.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          l("span", Jg, [
            l("span", {
              class: z(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", Yg, [
                l("path", {
                  d: b(ue)("check")
                }, null, 8, Xg)
              ])) : (t(), a("svg", Qg, [
                l("path", {
                  d: b(ue)("x")
                }, null, 8, eh)
              ]))
            ], 2),
            l("span", th, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", ah, f(p.display), 1)) : k("", !0)
        ]))), 128)),
        (t(!0), a(P, null, V(d.value, (p, x) => (t(), a("li", {
          key: `extra-${x}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          l("span", null, f(p.key), 1),
          l("span", nh, f(p.value), 1)
        ]))), 128))
      ]),
      l("footer", lh, [
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
    ], 10, Tg));
  }
}), sh = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, rh = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, ih = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, uh = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, dh = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, c5 = /* @__PURE__ */ O({
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
      class: z(["w-full space-y-6", e.embedded ? "" : b(Ve)]),
      "data-slot": "plan-grid"
    }, [
      l("header", sh, [
        l("div", null, [
          e.title ? (t(), a("h1", rh, f(e.title), 1)) : k("", !0),
          e.description ? (t(), a("p", ih, f(e.description), 1)) : k("", !0)
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
      e.plans.length === 0 ? (t(), a("p", uh, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", dh, [
        (t(!0), a(P, null, V(e.plans, (i) => (t(), T(oh, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => n("edit", u)),
          onDelete: s[2] || (s[2] = (u) => n("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), ch = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, fh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, mh = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, ph = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, vh = { class: "space-y-1.5" }, gh = { class: "space-y-1.5" }, hh = { class: "space-y-1.5" }, bh = { class: "space-y-1.5" }, xh = { class: "space-y-1.5" }, yh = { class: "flex items-center gap-3 text-sm" }, kh = { class: "flex items-center gap-3 text-sm" }, $h = { class: "flex items-center gap-3 text-sm" }, wh = {
  key: 0,
  class: "space-y-1.5"
}, Ch = { class: "flex items-center gap-3 text-sm" }, Sh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Mh = { class: "space-y-1.5" }, Bh = ["value"], Ah = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, _h = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Ph = ["id", "value", "onInput"], zh = { class: "space-y-2" }, Oh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, jh = ["d"], Lh = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", vt = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", f5 = /* @__PURE__ */ O({
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
    function u(g, v) {
      const c = i.perks?.[g]?.value;
      return c ?? v;
    }
    function d(g, v, c) {
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
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    h(r.plan), fe(
      () => r.plan,
      (g) => h(g),
      { deep: !0 }
    );
    const p = $({
      get: () => {
        const g = u("modules", []);
        return Array.isArray(g) ? g.map(String) : [];
      },
      set: (g) => {
        d("modules", A(g.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), x = $(
      () => r.modules.map((g) => ({ value: g.key, label: g.label }))
    );
    function A(g) {
      const v = Object.fromEntries(r.modules.map((B) => [B.key, B])), c = new Set(g);
      for (const B of r.modules)
        if (!c.has(B.key))
          for (const _ of B.children ?? [])
            c.delete(_);
      let C = !0;
      for (; C; ) {
        C = !1;
        for (const B of [...c])
          for (const _ of v[B]?.requires ?? [])
            c.has(_) || (c.add(_), C = !0);
      }
      return [...c];
    }
    function w() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function S(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== g);
    }
    function y() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, v) => (t(), a("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : b(Ve)]),
      "data-slot": "plan-editor",
      onSubmit: me(y, ["prevent"])
    }, [
      l("header", ch, [
        l("div", null, [
          l("h1", fh, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
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
      l("div", mh, [
        l("section", ph, [
          v[26] || (v[26] = l("h2", { class: "font-semibold" }, "Plan details", -1)),
          l("div", vh, [
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
          l("div", gh, [
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
          l("div", hh, [
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
          l("div", bh, [
            I(ke, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            ce(l("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: z(Lh)
            }, [...v[19] || (v[19] = [
              l("option", { value: 30 }, "Monthly", -1),
              l("option", { value: 365 }, "Yearly", -1),
              l("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                De,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          l("div", xh, [
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
          l("label", yh, [
            I(b(Ee), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = U(" Featured ", -1))
          ]),
          l("label", kh, [
            I(b(Ee), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = U(" Recommended ", -1))
          ]),
          l("label", $h, [
            I(b(Ee), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", wh, [
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
          ])) : k("", !0),
          l("label", Ch, [
            I(b(Ee), {
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
        l("section", Sh, [
          v[33] || (v[33] = l("h2", { class: "font-semibold" }, "Plan perks", -1)),
          l("div", Mh, [
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
            }, null, 40, Bh)
          ]),
          (t(!0), a(P, null, V(e.limits, (c) => (t(), a("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), a("label", Ah, [
              I(b(Ee), {
                checked: !!u(c.key, !1),
                "onUpdate:checked": (C) => d(
                  c.key,
                  C,
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
              c.hint ? (t(), a("p", _h, f(c.hint), 1)) : k("", !0),
              I(ge, {
                id: `plan-limit-${c.key}`,
                "model-value": Number(u(c.key, 0)),
                type: "number",
                step: c.step ?? 1,
                required: "",
                "onUpdate:modelValue": (C) => d(
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
            }, null, 40, Ph)
          ]))), 128)),
          l("div", zh, [
            v[32] || (v[32] = l("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(P, null, V(i.extraPerks ?? [], (c, C) => (t(), a("div", {
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
                  (t(), a("svg", Oh, [
                    l("path", {
                      d: b(ue)("x")
                    }, null, 8, jh)
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
}), Vh = { class: "flex flex-col gap-4" }, Th = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Dh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Eh = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Ih = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Fh = ["d"], Nh = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Rh = ["aria-pressed"], Uh = ["aria-pressed"], Hh = {
  key: 0,
  class: "flex flex-col gap-2"
}, qh = ["aria-label"], Kh = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Gh = ["aria-pressed", "onClick"], Wh = ["aria-label"], Zh = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Jh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Yh = ["data-slot"], Xh = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Qh = { class: "text-muted-foreground text-xs tabular-nums" }, e1 = { class: "flex items-center gap-2" }, t1 = ["disabled"], a1 = ["disabled"], Et = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Pe({
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
  emits: /* @__PURE__ */ Pe(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(""), i = Je(e, "modelValue"), u = We({}), d = We({});
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
      for (const [ee, H] of Object.entries(d))
        D[ee] = { min: m(H.min), max: m(H.max) };
      return D;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: h() };
    }
    function x() {
      r("filter", p());
    }
    function A(D, ee) {
      u[D] = u[D] === ee ? null : ee, x();
    }
    function w(D) {
      return d[D] ?? { min: "", max: "" };
    }
    function S(D, ee, H) {
      const G = d[D] ?? { min: "", max: "" };
      d[D] = { ...G, [ee]: H }, x();
    }
    function y(D) {
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
    }), _ = $(() => {
      const D = n.pageSize;
      if (!D || D < 1)
        return n.items;
      const ee = (C.value - 1) * D;
      return n.items.slice(ee, ee + D);
    });
    function R(D) {
      C.value = Math.min(B.value, Math.max(1, D));
    }
    return (D, ee) => (t(), a("div", Vh, [
      c.value ? (t(), a("div", Th, [
        l("div", Dh, [
          e.searchable ? (t(), a("div", Eh, [
            (t(), a("svg", Ih, [
              l("path", {
                d: b(ue)("search")
              }, null, 8, Fh)
            ])),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: y
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : k("", !0),
          q(D.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", Nh, [
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Rh),
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, Uh)
          ])) : k("", !0)
        ]),
        g.value.length || v.value.length ? (t(), a("div", Hh, [
          (t(!0), a(P, null, V(g.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", Kh, f(H.label), 1)) : k("", !0),
            (t(!0), a(P, null, V(H.options ?? [], (G) => (t(), a("button", {
              key: G.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === G.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === G.value ? "true" : "false",
              onClick: (Z) => A(H.key, G.value)
            }, f(G.label), 11, Gh))), 128))
          ], 8, qh))), 128)),
          (t(!0), a(P, null, V(v.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            l("span", Zh, f(H.label ?? H.key), 1),
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
          ], 8, Wh))), 128))
        ])) : k("", !0)
      ])) : k("", !0),
      e.items.length === 0 ? (t(), a("p", Jh, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : b(Vu)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(P, null, V(_.value, (H) => (t(), T(Og, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (G) => r("select", G)),
          onCart: ee[4] || (ee[4] = (G) => r("cart", G))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Yh)),
      e.pageSize && B.value > 1 ? (t(), a("div", Xh, [
        l("p", Qh, " Page " + f(C.value) + " of " + f(B.value), 1),
        l("div", e1, [
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => R(C.value - 1))
          }, " Previous ", 8, t1),
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value >= B.value,
            onClick: ee[6] || (ee[6] = (H) => R(C.value + 1))
          }, " Next ", 8, a1)
        ])
      ])) : k("", !0)
    ]));
  }
}), n1 = ["aria-label"], l1 = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, o1 = { class: "min-w-0" }, s1 = { class: "text-base font-semibold" }, r1 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, i1 = { class: "flex shrink-0 items-center gap-2" }, u1 = { class: "min-h-0 flex-1 overflow-y-auto" }, d1 = {
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
    let i = null, u = "";
    function d(m) {
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
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Be(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), he(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (m, h) => (t(), T(Re, { to: "body" }, [
      I(je, {
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
          })) : k("", !0)
        ]),
        _: 1
      }),
      I(je, {
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
            l("header", l1, [
              l("div", o1, [
                l("h2", s1, f(e.title), 1),
                e.description ? (t(), a("p", r1, f(e.description), 1)) : k("", !0)
              ]),
              l("div", i1, [
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
            l("div", u1, [
              q(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", d1, [
              q(m.$slots, "footer")
            ])) : k("", !0)
          ], 10, n1)) : k("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function _e() {
  return { query: "", selected: {}, ranges: {} };
}
function c1(e, o) {
  const n = e.metrics?.[o];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[o];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function f1(e, o) {
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
    if (!f1(c1(e, r), s))
      return !1;
  return !0;
}
function m1(e, o) {
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
const p1 = { class: "flex flex-col gap-6 p-4" }, v1 = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, g1 = { class: "text-sm font-semibold" }, h1 = { class: "flex flex-wrap items-center gap-1.5" }, b1 = ["aria-pressed", "onClick"], x1 = { class: "text-sm font-semibold" }, y1 = { class: "flex flex-wrap items-center gap-1.5" }, k1 = { key: 0 }, ka = /* @__PURE__ */ O({
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
    const n = e, r = o, s = K(""), i = We({}), u = We({}), d = $(
      () => n.facets.filter((B) => (B.kind ?? "chips") === "chips")
    ), m = $(() => n.facets.filter((B) => B.kind === "range"));
    function h(B) {
      return B == null ? "" : String(B);
    }
    function p() {
      s.value = n.applied.query ?? "";
      for (const B of Object.keys(i))
        delete i[B];
      for (const [B, _] of Object.entries(n.applied.selected ?? {}))
        i[B] = _;
      for (const B of Object.keys(u))
        delete u[B];
      for (const [B, _] of Object.entries(n.applied.ranges ?? {}))
        u[B] = { min: h(_.min), max: h(_.max) };
    }
    fe(
      () => n.open,
      (B) => {
        B && p();
      }
    );
    function x(B) {
      const _ = B.trim();
      if (_ === "")
        return null;
      const R = Number(_);
      return Number.isFinite(R) ? R : null;
    }
    function A() {
      const B = {};
      for (const [_, R] of Object.entries(u))
        B[_] = { min: x(R.min), max: x(R.max) };
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
      for (const _ of Object.values(i))
        _ && (B += 1);
      for (const _ of Object.values(A()))
        (_.min !== null || _.max !== null) && (B += 1);
      return B;
    });
    function y(B, _) {
      i[B] = i[B] === _ ? null : _;
    }
    function g(B) {
      return u[B] ?? { min: "", max: "" };
    }
    function v(B, _, R) {
      const D = u[B] ?? { min: "", max: "" };
      u[B] = { ...D, [_]: R };
    }
    function c() {
      r("apply", w());
    }
    function C() {
      s.value = "";
      for (const B of Object.keys(i))
        i[B] = null;
      for (const B of Object.keys(u))
        u[B] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        n.hideSearch ? { ..._e(), query: n.applied.query } : _e()
      );
    }
    return (B, _) => (t(), T(It, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: _[2] || (_[2] = (R) => r("close"))
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
          onClick: _[1] || (_[1] = (R) => r("close"))
        }, {
          default: j(() => [..._[5] || (_[5] = [
            U("Cancel", -1)
          ])]),
          _: 1
        }),
        I(se, {
          size: "sm",
          onClick: c
        }, {
          default: j(() => [
            _[6] || (_[6] = U(" Apply", -1)),
            S.value ? (t(), a("span", k1, " (" + f(S.value) + ")", 1)) : k("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        l("div", p1, [
          e.hideSearch ? k("", !0) : (t(), a("label", v1, [
            _[3] || (_[3] = l("span", { class: "text-sm font-semibold" }, "Search", -1)),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": _[0] || (_[0] = (R) => s.value = R),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(P, null, V(d.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", g1, f(R.label ?? R.key), 1),
            l("div", h1, [
              (t(!0), a(P, null, V(R.options ?? [], (D) => (t(), a("button", {
                key: D.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[R.key] === D.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[R.key] === D.value ? "true" : "false",
                onClick: (ee) => y(R.key, D.value)
              }, f(D.label), 11, b1))), 128))
            ])
          ]))), 128)),
          (t(!0), a(P, null, V(m.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", x1, f(R.label ?? R.key), 1),
            l("div", y1, [
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${R.label ?? R.key} from`,
                "model-value": g(R.key).min,
                "onUpdate:modelValue": (D) => v(R.key, "min", String(D))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              _[4] || (_[4] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
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
}), $1 = ["aria-disabled"], w1 = ["disabled"], C1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, S1 = ["d"], M1 = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, B1 = ["disabled"], A1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, _1 = ["d"], P1 = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Pe({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Pe(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const n = Je(e, "modelValue"), r = o, s = $(() => n.value <= e.min), i = $(() => e.max !== null && n.value >= e.max);
    function u(d) {
      if (e.disabled)
        return;
      const m = n.value + d;
      m < e.min || e.max !== null && m > e.max || (n.value = m, d < 0 ? r("decrease", m) : r("increase", m));
    }
    return (d, m) => (t(), a("div", {
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
        onClick: m[0] || (m[0] = (h) => u(-1))
      }, [
        (t(), a("svg", C1, [
          l("path", {
            d: b(ue)("minus")
          }, null, 8, S1)
        ]))
      ], 8, w1),
      l("span", M1, f(n.value), 1),
      l("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (h) => u(1))
      }, [
        (t(), a("svg", A1, [
          l("path", {
            d: b(ue)("plus")
          }, null, 8, _1)
        ]))
      ], 8, B1)
    ], 8, $1));
  }
}), z1 = { class: "divide-border flex flex-col divide-y" }, O1 = { class: "min-w-0" }, j1 = { class: "truncate text-sm font-medium" }, L1 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, V1 = { class: "flex shrink-0 items-center gap-2 text-sm" }, T1 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, D1 = {
  key: 2,
  class: "font-medium tabular-nums"
}, E1 = ["aria-label", "onClick"], I1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, F1 = ["d"], N1 = /* @__PURE__ */ O({
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
      const u = Number(i);
      return Number.isFinite(u) && u > 0 ? u : 1;
    }
    return (s, i) => (t(), a("div", z1, [
      (t(!0), a(P, null, V(e.items, (u) => (t(), a("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        l("div", O1, [
          l("p", j1, f(u.label), 1),
          u.detail ? (t(), a("p", L1, f(u.detail), 1)) : k("", !0)
        ]),
        l("div", V1, [
          e.editable ? (t(), T(P1, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => n("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), a("span", T1, " ×" + f(u.qty), 1)) : k("", !0),
          u.amount ? (t(), a("span", D1, f(u.amount), 1)) : k("", !0),
          u.status ? (t(), T(be, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : k("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => n("remove", u.key)
          }, [
            (t(), a("svg", I1, [
              l("path", {
                d: b(ue)("trash")
              }, null, 8, F1)
            ]))
          ], 8, E1)) : k("", !0)
        ])
      ]))), 128))
    ]));
  }
}), R1 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, U1 = { class: "border-b px-4 py-3" }, H1 = { class: "text-sm font-medium" }, q1 = { class: "flex-1 px-4 py-3" }, K1 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, G1 = { class: "text-foreground block font-medium" }, W1 = { class: "mt-1 block" }, Z1 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, J1 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Y1 = { class: "tabular-nums" }, X1 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Q1 = { class: "text-muted-foreground" }, eb = {
  key: 0,
  class: "tabular-nums"
}, tb = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, ab = { class: "text-muted-foreground" }, nb = { class: "tabular-nums" }, lb = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, ob = { class: "tabular-nums" }, sb = {
  key: 4,
  class: "pt-1"
}, rb = /* @__PURE__ */ O({
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
    return (r, s) => (t(), a("aside", R1, [
      l("header", U1, [
        l("h2", H1, f(e.title), 1)
      ]),
      l("div", q1, [
        e.items.length === 0 ? (t(), a("p", K1, [
          l("span", G1, f(e.emptyTitle), 1),
          l("span", W1, f(e.emptyDescription), 1)
        ])) : (t(), T(N1, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => n("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", Z1, [
        e.subtotal ? (t(), a("div", J1, [
          s[2] || (s[2] = l("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          l("span", Y1, f(e.subtotal), 1)
        ])) : k("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", X1, [
          l("span", Q1, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", eb, f(e.discount), 1)) : k("", !0),
          q(r.$slots, "discount")
        ])) : k("", !0),
        e.tax ? (t(), a("div", tb, [
          l("span", ab, f(e.taxLabel), 1),
          l("span", nb, f(e.tax), 1)
        ])) : k("", !0),
        e.total ? (t(), a("div", lb, [
          s[3] || (s[3] = l("span", null, "Total", -1)),
          l("span", ob, f(e.total), 1)
        ])) : k("", !0),
        r.$slots.pay ? (t(), a("div", sb, [
          q(r.$slots, "pay")
        ])) : k("", !0)
      ])) : k("", !0)
    ]));
  }
}), ib = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, ub = { class: "flex flex-col gap-4" }, db = { class: "flex flex-wrap items-start justify-between gap-3" }, cb = { class: "flex items-center gap-2" }, fb = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, m5 = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Pe({
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
  emits: /* @__PURE__ */ Pe(["select", "pay"], ["update:cart"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(_e()), i = K(!1), u = Je(e, "cart"), d = K(!1), m = $(
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
      const G = m1(n.items, H);
      G && S(G.key);
    }
    function S(H) {
      const G = n.items.find((te) => te.key === H);
      if (!G || G.status === "out-of-stock")
        return;
      d.value = !1;
      const Z = x(G);
      if (u.value.find((te) => te.key === H)) {
        u.value = u.value.map(
          (te) => te.key === H ? A(te, Number(te.qty ?? 1) + 1, Z) : te
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: G.key,
          label: G.label,
          detail: G.caption ?? null,
          qty: 1,
          amount: n.formatMoney(Z)
        }
      ];
    }
    function y(H, G) {
      const Z = n.items.find((te) => te.key === H), ae = x(Z);
      u.value = u.value.map(
        (te) => te.key === H ? A(te, G, ae) : te
      );
    }
    function g(H) {
      u.value = u.value.filter((G) => G.key !== H);
    }
    const v = $(
      () => u.value.reduce((H, G) => {
        const Z = n.items.find((ae) => ae.key === G.key);
        return H + x(Z) * Number(G.qty ?? 1);
      }, 0)
    ), c = $(
      () => n.discountRate > 0 ? Math.round(v.value * n.discountRate) : 0
    ), C = $(
      () => Math.round((v.value - c.value) * n.taxRate)
    ), B = $(
      () => u.value.length ? n.formatMoney(v.value) : null
    ), _ = $(
      () => u.value.length && c.value > 0 ? `−${n.formatMoney(c.value)}` : null
    ), R = $(
      () => u.value.length && n.taxRate > 0 ? n.formatMoney(C.value) : null
    ), D = $(
      () => u.value.length ? n.formatMoney(
        v.value - c.value + C.value
      ) : null
    );
    function ee() {
      d.value = !0, r("pay", u.value);
    }
    return (H, G) => (t(), a(P, null, [
      l("div", ib, [
        l("section", ub, [
          l("div", db, [
            I(Ae, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            l("div", cb, [
              b(st)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: G[0] || (G[0] = (Z) => s.value = {
                  ...b(_e)(),
                  query: s.value.query
                })
              }, " Clear ")) : k("", !0),
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
                b(st)(s.value) ? (t(), a("span", fb, " on ")) : k("", !0)
              ])) : k("", !0)
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
        I(rb, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: B.value,
          "discount-label": e.discountLabel,
          discount: _.value,
          "tax-label": e.taxLabel,
          tax: R.value,
          total: D.value,
          onQty: y,
          onRemove: g
        }, {
          pay: j(() => [
            q(H.$slots, "pay", {
              cart: u.value,
              paid: d.value,
              pay: ee
            }, () => [
              I(se, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: ee
              }, {
                default: j(() => [
                  U(f(d.value ? "Paid" : "Pay"), 1)
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
}), mb = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, pb = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, vb = ["src", "alt"], gb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, hb = ["src"], bb = { class: "flex items-start justify-between gap-3" }, xb = { class: "text-lg font-semibold tabular-nums" }, yb = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, kb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, $b = { class: "grid grid-cols-2 gap-3" }, wb = { class: "flex flex-col gap-2" }, Cb = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, p5 = /* @__PURE__ */ O({
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
    const u = $(() => n.item?.kind === "unit"), d = $(() => {
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
      () => !!n.item && !u.value && n.item?.status !== "out-of-stock"
    );
    return (p, x) => (t(), T(It, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: x[1] || (x[1] = (A) => r("close"))
    }, ht({
      default: j(() => [
        e.item ? (t(), a("div", mb, [
          l("div", pb, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, vb)) : k("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", gb, [
            (t(!0), a(P, null, V(e.item.images, (A, w) => (t(), a("img", {
              key: w,
              src: A,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, hb))), 128))
          ])) : k("", !0),
          l("div", bb, [
            l("div", null, [
              l("p", xb, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", yb, f(e.item.stock) + " in stock ", 1)) : k("", !0)
            ]),
            e.item.status ? (t(), T(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : k("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", kb, f(e.item.facts.join(" · ")), 1)) : k("", !0),
          l("div", $b, [
            I(ot, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? m.value : d.value
            }, null, 8, ["label", "value", "series"]),
            I(ot, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          l("div", wb, [
            l("p", Cb, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            I(it, {
              data: u.value ? m.value : d.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : k("", !0)
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
}), Sb = { class: "flex flex-col gap-10" }, Mb = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Bb = { class: "flex flex-col gap-3" }, Ab = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, _b = ["src", "alt"], Pb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, zb = ["aria-label", "aria-pressed", "onClick"], Ob = ["src"], jb = { class: "flex flex-col gap-5" }, Lb = { class: "flex flex-wrap items-start justify-between gap-3" }, Vb = { class: "min-w-0" }, Tb = { class: "text-2xl font-semibold tracking-tight" }, Db = { class: "text-muted-foreground mt-1 text-sm" }, Eb = { class: "text-2xl font-semibold tabular-nums" }, Ib = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Fb = { class: "grid grid-cols-2 gap-3 text-sm" }, Nb = {
  key: 0,
  class: "rounded-lg border p-3"
}, Rb = { class: "mt-1 font-medium" }, Ub = { class: "rounded-lg border p-3" }, Hb = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, qb = { class: "mt-1 font-medium" }, Kb = { class: "flex flex-col gap-4" }, Gb = { class: "grid gap-4 sm:grid-cols-2" }, Wb = { class: "bg-card rounded-lg border p-4" }, Zb = { class: "mb-3 text-sm font-medium" }, Jb = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(w) {
      let S = 0;
      for (const y of w)
        S = S * 31 + y.charCodeAt(0) >>> 0;
      return S;
    }
    function i(w, S) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((g, v) => ({
        label: g,
        value: Math.max(0, Math.round(w + Math.sin(v + S) * w * 0.18))
      }));
    }
    const u = $(() => n.item.kind === "unit"), d = $(() => {
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
    }), x = $(() => u.value ? p.value : h.value), A = $(() => !u.value && n.item.status !== "out-of-stock");
    return (w, S) => (t(), a("div", Sb, [
      l("div", Mb, [
        l("div", Bb, [
          l("div", Ab, [
            d.value[m.value] ? (t(), a("img", {
              key: 0,
              src: d.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, _b)) : k("", !0)
          ]),
          d.value.length > 1 ? (t(), a("div", Pb, [
            (t(!0), a(P, null, V(d.value, (y, g) => (t(), a("button", {
              key: y,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", g === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${g + 1}`,
              "aria-pressed": g === m.value ? "true" : "false",
              onClick: (v) => m.value = g
            }, [
              l("img", {
                src: y,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, Ob)
            ], 10, zb))), 128))
          ])) : k("", !0)
        ]),
        l("div", jb, [
          l("div", Lb, [
            l("div", Vb, [
              l("h1", Tb, f(e.item.label), 1),
              l("p", Db, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : k("", !0)
          ]),
          l("p", Eb, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", Ib, f(e.item.facts.join(" · ")), 1)) : k("", !0),
          l("dl", Fb, [
            e.item.sku ? (t(), a("div", Nb, [
              S[1] || (S[1] = l("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              l("dd", Rb, f(e.item.sku), 1)
            ])) : k("", !0),
            l("div", Ub, [
              l("dt", Hb, f(u.value ? "Occupancy" : "Stock"), 1),
              l("dd", qb, f(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          A.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: S[0] || (S[0] = (y) => r("cart", e.item.key))
          }, " Add to cart ")) : k("", !0)
        ])
      ]),
      l("section", Kb, [
        S[2] || (S[2] = l("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        l("div", Gb, [
          I(ot, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: x.value
          }, null, 8, ["label", "value", "series"]),
          I(ot, {
            label: "Price",
            value: e.item.price ?? "-",
            series: h.value
          }, null, 8, ["value", "series"])
        ]),
        l("div", Wb, [
          l("p", Zb, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(xm, {
            data: x.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), Yb = ["href"], v5 = /* @__PURE__ */ O({
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
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ve)])
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
      ], 8, Yb),
      I(Jb, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), Xb = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, Qb = ["aria-selected", "onClick"], ex = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, tx = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, ax = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, nx = ["aria-pressed"], lx = ["aria-pressed"], g5 = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Pe({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Pe(["select", "cart"], ["update:layout"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(n.tabs[0]?.key ?? ""), i = Je(e, "layout"), u = K({}), d = K(!1);
    fe(
      () => n.tabs.map((y) => y.key).join(","),
      (y) => {
        y.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function m(y) {
      return u.value[y] ?? _e();
    }
    const h = $(
      () => n.tabs.find((y) => y.key === s.value) ?? n.tabs[0] ?? null
    ), p = $(
      () => h.value ? m(h.value.key) : _e()
    ), x = $(() => {
      const y = h.value;
      return y ? y.items.filter((g) => Ft(g, m(y.key))) : [];
    });
    function A(y) {
      const g = h.value?.key;
      g && (u.value = {
        ...u.value,
        [g]: { ...m(g), query: y }
      });
    }
    function w() {
      const y = h.value?.key;
      y && (u.value = { ...u.value, [y]: _e() });
    }
    function S(y) {
      const g = h.value?.key;
      g && (u.value = { ...u.value, [g]: y }, d.value = !1);
    }
    return (y, g) => (t(), a(P, null, [
      l("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ve)])
      }, [
        I(Ae, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", Xb, [
          (t(!0), a(P, null, V(e.tabs, (v) => (t(), a("button", {
            key: v.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (c) => s.value = v.key
          }, f(v.label), 11, Qb))), 128))
        ])) : k("", !0),
        l("div", ex, [
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
          }, " Clear ")) : k("", !0),
          (h.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: g[1] || (g[1] = (v) => d.value = !0)
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
            b(st)(p.value) ? (t(), a("span", tx, " on ")) : k("", !0)
          ])) : k("", !0),
          l("div", ax, [
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: g[2] || (g[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, nx),
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: g[3] || (g[3] = (v) => i.value = "list")
            }, " List ", 10, lx)
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
        open: d.value,
        title: h.value?.filterTitle ?? "Filters",
        "search-placeholder": h.value?.searchPlaceholder ?? "Search…",
        facets: h.value?.facets ?? [],
        applied: p.value,
        onClose: g[7] || (g[7] = (v) => d.value = !1),
        onApply: S,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), ox = { class: "flex flex-col gap-4" }, sx = { class: "flex flex-col gap-4" }, h5 = /* @__PURE__ */ O({
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
      () => n.cards.filter((u) => Ft(u, s.value))
    );
    return (u, d) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ve)])
    }, [
      I(Ae, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", ox, [
        I(Ae, {
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
          onFilter: d[0] || (d[0] = (m) => s.value = m),
          onSelect: d[1] || (d[1] = (m) => r("select", m)),
          onCart: d[2] || (d[2] = (m) => r("cart", m))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      l("section", sx, [
        I(Ae, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(vl, {
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
}), rx = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, ix = { class: "text-sm font-medium" }, ux = ["width", "height", "aria-label"], dx = { class: "flex items-center gap-2" }, cx = /* @__PURE__ */ O({
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
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function m(y) {
      const g = s.value;
      if (!g)
        return null;
      const v = g.getBoundingClientRect(), c = g.width / v.width, C = g.height / v.height;
      return {
        x: (y.clientX - v.left) * c,
        y: (y.clientY - v.top) * C
      };
    }
    function h(y) {
      n.disabled || (i.value = !0, u = m(y), s.value?.setPointerCapture(y.pointerId));
    }
    function p(y) {
      if (!i.value || n.disabled)
        return;
      const g = d(), v = m(y);
      !g || !v || !u || (g.strokeStyle = "#111827", g.lineWidth = 2.4, g.lineCap = "round", g.lineJoin = "round", g.beginPath(), g.moveTo(u.x, u.y), g.lineTo(v.x, v.y), g.stroke(), u = v);
    }
    function x() {
      i.value = !1, u = null;
    }
    function A() {
      const y = s.value, g = d();
      !y || !g || (g.clearRect(0, 0, y.width, y.height), r("clear"));
    }
    function w() {
      const y = s.value;
      y && r("save", y.toDataURL("image/png"));
    }
    function S() {
      const y = s.value, g = d();
      !y || !g || (g.fillStyle = "#ffffff", g.fillRect(0, 0, y.width, y.height));
    }
    return pe(S), he(() => {
      i.value = !1;
    }), (y, g) => (t(), a("div", rx, [
      l("p", ix, f(e.label), 1),
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
      }, null, 42, ux),
      l("div", dx, [
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
}), fx = { class: "grid gap-8 lg:grid-cols-2" }, mx = { class: "flex flex-col gap-3" }, px = { class: "text-muted-foreground text-xs" }, vx = {
  key: 0,
  class: "flex flex-col gap-3"
}, gx = { class: "flex flex-wrap gap-3" }, hx = ["onClick"], bx = ["src", "alt"], xx = {
  key: 1,
  class: "flex flex-col gap-3"
}, yx = { class: "flex flex-wrap gap-3" }, kx = ["onClick"], $x = ["src", "alt"], wx = {
  key: 2,
  class: "flex flex-col gap-4"
}, Cx = { class: "flex flex-wrap items-center gap-2" }, Sx = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Mx = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Bx = { class: "flex flex-col gap-2" }, Ax = ["src"], _x = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Px = ["src"], b5 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = K([]), r = K([]), s = K(null), i = K(null), u = K(null), d = K(o.documents[0]?.key ?? "");
    function m(y) {
      try {
        const g = localStorage.getItem(y), v = g ? JSON.parse(g) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    pe(() => {
      !o.storageKey || typeof localStorage > "u" || (n.value = m(`${o.storageKey}.signatures`), r.value = m(`${o.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), fe(
      n,
      (y) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.signatures`, JSON.stringify(y));
      },
      { deep: !0 }
    ), fe(
      r,
      (y) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.stamps`, JSON.stringify(y));
      },
      { deep: !0 }
    );
    function h(y) {
      const g = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: y
      };
      n.value = [g, ...n.value].slice(0, 8), s.value = g.id;
    }
    async function p(y, g) {
      await Ru(y), g(40);
      const v = await new Promise((c, C) => {
        const B = new FileReader();
        B.onload = () => c(String(B.result)), B.onerror = () => C(new Error("Could not read the file")), B.readAsDataURL(y);
      });
      return g(100), { value: v, name: y.name, size: y.size, url: v };
    }
    function x() {
      const y = u.value?.url ?? u.value?.value;
      if (!y)
        return;
      const g = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: y
      };
      r.value = [g, ...r.value].slice(0, 8), i.value = g.id;
    }
    const A = $(
      () => n.value.find((y) => y.id === s.value)?.dataUrl ?? null
    ), w = $(
      () => r.value.find((y) => y.id === i.value)?.dataUrl ?? null
    ), S = $(() => {
      const y = o.documents.find((v) => v.key === d.value)?.document ?? o.documents[0]?.document ?? {}, g = {
        ...y?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...y,
        branding: g
      };
    });
    return (y, g) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ve)])
    }, [
      I(Ae, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", fx, [
        I(cx, {
          label: "Draw a signature",
          onSave: h
        }),
        l("div", mx, [
          g[2] || (g[2] = l("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          l("p", px, f(b(va)), 1),
          I(ua, {
            modelValue: u.value,
            "onUpdate:modelValue": g[0] || (g[0] = (v) => u.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          I(se, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: x
          }, {
            default: j(() => [...g[1] || (g[1] = [
              U(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", vx, [
        I(Ae, {
          variant: "small",
          title: "Saved signatures"
        }),
        l("div", gx, [
          (t(!0), a(P, null, V(n.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, bx)
          ], 10, hx))), 128))
        ])
      ])) : k("", !0),
      r.value.length ? (t(), a("section", xx, [
        I(Ae, {
          variant: "small",
          title: "Saved stamps"
        }),
        l("div", yx, [
          (t(!0), a(P, null, V(r.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, $x)
          ], 10, kx))), 128))
        ])
      ])) : k("", !0),
      e.documents.length ? (t(), a("section", wx, [
        l("div", Cx, [
          (t(!0), a(P, null, V(e.documents, (v) => (t(), T(se, {
            key: v.key,
            size: "sm",
            variant: d.value === v.key ? "default" : "outline",
            onClick: (c) => d.value = v.key
          }, {
            default: j(() => [
              U(f(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        l("div", Sx, [
          I(Of, {
            document: S.value
          }, null, 8, ["document"]),
          l("div", Mx, [
            l("div", Bx, [
              g[3] || (g[3] = l("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              A.value ? (t(), a("img", {
                key: 0,
                src: A.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Ax)) : (t(), a("p", _x, "Draw and save a signature"))
            ]),
            w.value ? (t(), a("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Px)) : k("", !0)
          ])
        ])
      ])) : k("", !0)
    ], 2));
  }
}), x5 = "panel.dashboard.hiddenWidgets", zx = /* @__PURE__ */ Symbol("dashboardHide"), Ox = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, y5 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const o = e, n = at(zx, null), r = K(
      o.catalog.filter((u) => o.defaults.includes(u.id))
    ), s = K(!1);
    pe(() => {
      if (n?.register("shortcuts", "Shortcuts"), !o.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const u = localStorage.getItem(o.storageKey);
        if (u) {
          const d = JSON.parse(u);
          Array.isArray(d) && (r.value = d.filter(
            (m) => typeof m?.id == "string" && typeof m.label == "string" && typeof m.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), fe(
      r,
      (u) => {
        if (!(!s.value || !o.storageKey))
          try {
            localStorage.setItem(o.storageKey, JSON.stringify(u));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = $(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? k("", !0) : (t(), a("div", Ox, [
      I($v, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (m) => r.value = m),
        onHide: d[1] || (d[1] = (m) => b(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), jx = { class: "flex flex-col gap-3" }, Lx = ["data-slot"], Vx = ["aria-pressed", "aria-label", "title"], Tx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Dx = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Ex = { class: "flex h-8 items-center" }, Ix = ["aria-label", "title", "onClick"], Fx = ["aria-label", "title", "onClick"], Nx = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Rx = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, k5 = /* @__PURE__ */ O({
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
    function u(c) {
      return n.maskable && (c.sensitive ?? !0);
    }
    function d(c) {
      return u(c) && !s.value && !i.value.has(c.key);
    }
    const m = $(() => n.segments.some(d)), h = $(() => n.segments.some(u)), p = {
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
    function y() {
      const c = m.value === !1;
      s.value = !c, i.value = /* @__PURE__ */ new Set(), r("toggle", c);
    }
    function g(c) {
      if (!u(c))
        return;
      const C = new Set(i.value);
      if (d(c))
        C.add(c.key);
      else if (C.delete(c.key), s.value) {
        s.value = !1;
        for (const B of n.segments)
          B.key !== c.key && u(B) && C.add(B.key);
      }
      i.value = C, r("toggle", m.value);
    }
    function v(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, C) => (t(), a("div", jx, [
      (t(!0), a(P, null, V(S.value, (B) => (t(), a("div", {
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
          onClick: y
        }, [
          (t(), a("svg", Tx, [
            m.value ? (t(), a(P, { key: 0 }, [
              C[0] || (C[0] = l("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              C[1] || (C[1] = l("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              C[2] || (C[2] = l("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              C[3] || (C[3] = l("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(P, { key: 1 }, [
              C[4] || (C[4] = l("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              C[5] || (C[5] = l("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Vx)) : k("", !0),
        l("div", {
          class: z(["grid", [B.joined ? "gap-px" : "gap-3", x.value]])
        }, [
          (t(!0), a(P, null, V(B.segments, (_) => (t(), a("div", {
            key: _.key,
            class: z(["bg-card flex flex-col gap-2 p-4", B.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            l("p", Dx, f(_.label), 1),
            l("div", Ex, [
              e.loading ? (t(), T(Ne, {
                key: 0,
                variant: "number"
              })) : d(_) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${_.label} hidden. Show it.`,
                title: `Show ${_.label}`,
                onClick: (R) => g(_)
              }, [
                (t(), a(P, null, V(5, (R) => l("span", {
                  key: R,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, Ix)) : u(_) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${_.label}, ${v(_.value)}. Hide it.`,
                title: `Hide ${_.label}`,
                onClick: (R) => g(_)
              }, f(v(_.value)), 9, Fx)) : (t(), a("span", Nx, f(v(_.value)), 1)),
              _.trend && !e.loading && !d(_) ? (t(), T(ya, {
                key: 4,
                direction: _.trend.direction,
                percentage: _.trend.percentage,
                inverted: _.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : k("", !0)
            ]),
            _.sparkline?.length && !e.loading && !d(_) ? (t(), T(it, {
              key: 0,
              data: _.sparkline,
              height: 24
            }, null, 8, ["data"])) : k("", !0),
            _.caption || _.comparison && _.trend ? (t(), a("p", Rx, f(_.caption ?? _.comparison), 1)) : k("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Lx))), 128))
    ]));
  }
}), Ux = ["aria-label"], Hx = ["aria-valuenow", "aria-label"], qx = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Kx = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Gx = ["title"], Wx = { class: "font-medium" }, Zx = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, Jx = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Yx = { class: "flex items-center justify-between gap-2" }, Xx = { class: "text-sm font-semibold" }, Qx = { class: "flex items-center gap-3" }, ey = ["href"], ty = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, ay = { class: "flex min-w-0 flex-col gap-0.5" }, ny = { class: "text-sm font-medium" }, ly = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, oy = {
  key: 1,
  class: "flex flex-col gap-2"
}, sy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ry = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, iy = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, $5 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = $(() => n.items.find((S) => !S.done) ?? null), i = $(() => n.items.filter((S) => S.key !== s.value?.key)), u = $(() => n.items.length), d = $(() => n.items.filter((S) => S.done).length), m = $(() => {
      if (!s.value)
        return u.value;
      const S = n.items.findIndex((y) => y.key === s.value?.key);
      return S >= 0 ? S + 1 : 1;
    }), h = $(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
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
    return (S, y) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
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
      ], 8, Hx),
      l("div", qx, [
        l("span", Kx, " Step " + f(m.value) + " of " + f(u.value), 1),
        l("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          l("span", Wx, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", Zx, f(": " + s.value.detail), 1)) : k("", !0)
        ], 8, Gx),
        s.value?.href ? (t(), T(xe(p.value), {
          key: 0,
          href: s.value.href,
          class: z(b(A))
        }, {
          default: j(() => [
            U(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : k("", !0),
        e.skipLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: y[0] || (y[0] = (g) => r("skip"))
        }, f(e.skipLabel), 1)) : k("", !0)
      ])
    ], 8, Ux)) : e.items.length ? (t(), a("section", Jx, [
      l("div", Yx, [
        l("h2", Xx, f(e.heading), 1),
        l("div", Qx, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: y[1] || (y[1] = (g) => r("skip"))
          }, f(e.skipLabel), 1)) : k("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, ey)) : k("", !0)
        ])
      ]),
      s.value ? (t(), a("div", ty, [
        y[2] || (y[2] = l("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        l("div", ay, [
          l("p", ny, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", ly, f(s.value.detail), 1)) : k("", !0),
          s.value.href ? (t(), T(xe(p.value), {
            key: 1,
            href: s.value.href,
            class: z(b(x))
          }, {
            default: j(() => [
              U(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : k("", !0)
        ])
      ])) : k("", !0),
      i.value.length ? (t(), a("ul", oy, [
        (t(!0), a(P, null, V(i.value, (g) => (t(), a("li", {
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
            g.done ? (t(), a("svg", sy, [...y[3] || (y[3] = [
              l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : k("", !0)
          ], 2),
          l("div", ry, [
            l("p", {
              class: z(["text-sm", g.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(g.title), 3),
            !g.done && g.detail ? (t(), a("p", iy, f(g.detail), 1)) : k("", !0)
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
          }, 1032, ["href", "class"])) : k("", !0)
        ]))), 128))
      ])) : k("", !0)
    ])) : k("", !0);
  }
}), uy = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, dy = { class: "hidden items-center gap-2 md:flex" }, cy = { class: "md:hidden" }, fy = { class: "border-b px-4 py-3" }, my = { class: "text-muted-foreground text-xs" }, py = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, vy = { class: "font-medium tabular-nums" }, gy = { class: "ml-auto flex items-center gap-3" }, w5 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: o }) {
    const n = o, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, u) => (t(), a("div", uy, [
      l("div", dy, [
        q(i.$slots, "actions")
      ]),
      l("div", cy, [
        l("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: u[0] || (u[0] = (d) => r.value = !0)
        }, " Actions "),
        I(Tt, {
          open: r.value,
          "onUpdate:open": u[1] || (u[1] = (d) => r.value = d)
        }, {
          default: j(() => [
            I(Dt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", fy, [
                  u[4] || (u[4] = l("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  l("p", my, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                l("div", py, [
                  q(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      l("span", vy, [
        e.allMatching ? (t(), a(P, { key: 0 }, [
          U(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(P, { key: 1 }, [
          U(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      l("div", gy, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: u[2] || (u[2] = (d) => n("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : k("", !0),
        l("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: u[3] || (u[3] = (d) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), hy = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, by = { class: "text-muted-foreground text-xs tabular-nums" }, xy = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, yy = ["value"], ky = ["value"], $y = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, wy = ["disabled"], Cy = ["disabled"], Sy = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, My = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, By = ["disabled"], C5 = /* @__PURE__ */ O({
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
    const n = e, r = o, s = (m) => new Intl.NumberFormat().format(m), i = $(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), u = $(() => (n.page - 1) * n.perPage + n.rowsOnPage), d = $(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (m, h) => (t(), a("div", hy, [
      l("p", by, [
        U(" Showing " + f(s(i.value)) + "-" + f(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(P, { key: 0 }, [
          U("of " + f(s(e.total)), 1)
        ], 64)) : k("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", xy, [
        h[4] || (h[4] = l("span", null, "Per page", -1)),
        l("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: h[0] || (h[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(P, null, V(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, ky))), 128))
        ], 40, yy)
      ])) : k("", !0),
      l("nav", $y, [
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
        ])], 8, wy),
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
        ])], 8, Cy),
        l("span", Sy, f(e.page), 1),
        d.value !== null ? (t(), a("span", My, " of " + f(s(d.value)), 1)) : k("", !0),
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
        ])], 8, By)
      ])
    ]));
  }
}), Ay = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, _y = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Py = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, S5 = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", Ay, [
      o.$slots.tabs ? (t(), a("div", _y, [
        q(o.$slots, "tabs")
      ])) : k("", !0),
      o.$slots.toolbar ? (t(), a("div", {
        key: 1,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        q(o.$slots, "toolbar")
      ], 2)) : k("", !0),
      q(o.$slots, "default"),
      o.$slots.pagination ? (t(), a("div", Py, [
        q(o.$slots, "pagination")
      ])) : k("", !0)
    ]));
  }
}), zy = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Oy = ["aria-current"], jy = ["title"], Ly = ["aria-current", "onClick"], Vy = ["title"], Ty = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", zy, [
      l("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => n("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, jy)) : (t(), T(Ne, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Oy),
      (t(!0), a(P, null, V(e.tabs, (u) => (t(), a("button", {
        key: u,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => n("select", u)
      }, [
        U(f(u) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, f(r(e.counts[u] ?? 0)), 11, Vy)) : (t(), T(Ne, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Ly))), 128))
    ]));
  }
}), M5 = /* @__PURE__ */ zt(Ty, [["__scopeId", "data-v-3967c945"]]), Dy = { class: "flex flex-col gap-2" }, Ey = { class: "flex items-center gap-2 md:hidden" }, Iy = { class: "relative min-w-0 flex-1" }, Fy = ["placeholder", "title", "aria-label"], Ny = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Ry = { class: "flex max-h-[85vh] flex-col" }, Uy = { class: "flex-1 overflow-y-auto px-4 py-3" }, Hy = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, qy = { class: "text-xs font-medium" }, Ky = ["value", "onChange"], Gy = ["value"], Wy = { class: "mb-4" }, Zy = { class: "flex flex-col gap-1" }, Jy = ["disabled", "onClick"], Yy = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Xy = {
  key: 1,
  class: "mb-4"
}, Qy = { class: "flex flex-col gap-1" }, e0 = ["onClick"], t0 = { class: "border-t p-4" }, a0 = ["disabled"], n0 = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, l0 = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, o0 = ["placeholder", "title", "aria-label"], s0 = ["aria-label"], r0 = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, i0 = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, u0 = { class: "text-xs font-medium" }, d0 = ["value", "onChange"], c0 = ["value"], f0 = { class: "grid grid-cols-2 gap-2" }, m0 = ["value", "onChange"], p0 = ["value", "onChange"], v0 = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, g0 = ["value", "onChange"], h0 = ["value", "onChange"], b0 = {
  key: 4,
  class: "flex items-center gap-2"
}, x0 = ["aria-checked", "onClick"], y0 = { class: "text-xs" }, k0 = ["onClick"], $0 = ["value", "onChange"], w0 = ["value"], C0 = ["disabled", "onClick"], S0 = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, M0 = ["disabled", "onClick"], B0 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, A0 = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, _0 = ["aria-pressed", "aria-label", "title"], P0 = ["aria-label", "title"], z0 = { class: "flex flex-col gap-0.5 p-1" }, O0 = ["onClick"], j0 = ["onClick"], L0 = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, V0 = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, T0 = ["dusk"], D0 = ["aria-label", "onClick"], B5 = /* @__PURE__ */ O({
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
    let u;
    fe(i, (W) => {
      clearTimeout(u), u = setTimeout(() => {
        W !== n.search && r("update:search", W);
      }, 250);
    });
    const d = K({ ...n.filters });
    fe(
      () => n.filters,
      (W) => {
        d.value = { ...W };
      },
      { deep: !0 }
    );
    const m = $(
      () => n.filterSchema.filter(
        (W) => n.filters[W.key] !== null && n.filters[W.key] !== void 0
      ).length
    ), h = $(() => JSON.stringify(d.value) !== JSON.stringify(n.filters)), p = $(() => n.search !== "" || m.value > 0), x = $(() => n.indicators.length ? n.indicators : n.filterSchema.filter((W) => n.filters[W.key] !== null && n.filters[W.key] !== void 0).map((W) => ({
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
    function y(W) {
      const M = d.value[W.key];
      return Array.isArray(M) ? M : M == null ? [] : [M];
    }
    function g(W) {
      return y(W).filter(
        (M) => typeof M == "string" || typeof M == "number"
      );
    }
    function v(W) {
      return H(W).flatMap(
        (M) => typeof M.value == "string" || typeof M.value == "number" ? [{ value: M.value, label: M.label }] : []
      );
    }
    function c(W, M) {
      d.value = { ...d.value, [W.key]: M === "" ? null : M };
    }
    function C(W, M) {
      const N = d.value[W.key];
      if (typeof N != "string" || !N.includes(".."))
        return "";
      const [L, Y] = N.split("..");
      return M === "from" ? L ?? "" : Y ?? "";
    }
    function B(W, M, N) {
      const L = M === "from" ? N : C(W, "from"), Y = M === "to" ? N : C(W, "to");
      d.value = {
        ...d.value,
        [W.key]: L && Y ? `${L}..${Y}` : null
      };
    }
    function _(W, M, N) {
      const L = M === "from" ? N : C(W, "from"), Y = M === "to" ? N : C(W, "to");
      d.value = {
        ...d.value,
        [W.key]: L || Y ? `${L}..${Y}` : null
      };
    }
    function R(W) {
      r("apply-filters", { ...d.value }), W();
    }
    function D(W, M) {
      d.value[W] = M, r("apply-filters", { ...d.value });
    }
    function ee() {
      d.value = Object.fromEntries(n.filterSchema.map((W) => [W.key, null]));
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
      r("apply-filters", { ...d.value }), s.value = !1;
    }
    function J() {
      i.value = "", r("clear");
    }
    return (W, M) => (t(), a("div", Dy, [
      l("div", Ey, [
        l("div", Iy, [
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
          }, null, 8, Fy), [
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
          m.value ? (t(), a("span", Ny, f(m.value), 1)) : k("", !0)
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
                l("div", Ry, [
                  M[16] || (M[16] = l("div", { class: "border-b px-4 py-3" }, [
                    l("p", { class: "text-sm font-semibold" }, "Table tools"),
                    l("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  l("div", Uy, [
                    e.filterSchema.length ? (t(), a("div", Hy, [
                      l("div", { class: "flex items-center justify-between" }, [
                        M[12] || (M[12] = l("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        l("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: ee
                        }, " Reset ")
                      ]),
                      (t(!0), a(P, null, V(e.filterSchema, (N) => (t(), a("div", {
                        key: `mobile-${N.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        l("label", qy, f(N.label), 1),
                        N.type !== "multiselect" && N.type !== "querybuilder" && N.type !== "daterange" && N.type !== "numberrange" && N.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: d.value[N.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (L) => c(N, L.target.value)
                        }, [
                          M[13] || (M[13] = l("option", { value: "" }, "All", -1)),
                          (t(!0), a(P, null, V(H(N), (L) => (t(), a("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, Gy))), 128))
                        ], 40, Ky)) : k("", !0)
                      ]))), 128))
                    ])) : k("", !0),
                    l("div", Wy, [
                      M[14] || (M[14] = l("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      l("div", Zy, [
                        (t(!0), a(P, null, V(e.columns, (N) => (t(), a("button", {
                          key: `mobile-col-${N.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: N.locked,
                          onClick: (L) => Z(N.key)
                        }, [
                          l("span", null, f(N.label), 1),
                          G.value.has(N.key) ? k("", !0) : (t(), a("span", Yy, "On"))
                        ], 8, Jy))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", Xy, [
                      M[15] || (M[15] = l("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      l("div", Qy, [
                        l("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: M[2] || (M[2] = (N) => {
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
                        }, f(N.label), 9, e0))), 128))
                      ])
                    ])) : k("", !0)
                  ]),
                  l("div", t0, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !h.value,
                      onClick: te
                    }, " Apply filters ", 8, a0)) : k("", !0),
                    p.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: M[3] || (M[3] = (N) => {
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
      l("div", n0, [
        l("div", l0, [
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
          }, null, 8, o0), [
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
          ])])) : k("", !0)
        ]),
        e.filterSchema.length ? (t(), T(Ie, {
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
              m.value ? (t(), a("span", r0, f(m.value), 1)) : k("", !0)
            ], 10, s0)
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
            l("div", i0, [
              (t(!0), a(P, null, V(e.filterSchema, (L) => (t(), a("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                l("label", u0, f(L.label), 1),
                S(L) ? (t(), T(Ot, {
                  key: 0,
                  "model-value": g(L),
                  options: v(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Y) => d.value[L.key] = Y.length ? Y : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), T(Qr, {
                  key: 1,
                  "model-value": d.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (Y) => D(L.key, Y)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), a(P, { key: 2 }, [
                  l("select", {
                    value: typeof d.value[L.key] == "string" && !String(d.value[L.key]).includes("..") ? d.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Y) => c(L, Y.target.value)
                  }, [
                    M[21] || (M[21] = l("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(P, null, V(H(L), (Y) => (t(), a("option", {
                      key: String(Y.value),
                      value: Y.value
                    }, f(Y.label), 9, c0))), 128))
                  ], 40, d0),
                  l("div", f0, [
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
                    }, null, 40, m0),
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
                    }, null, 40, p0)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), a("div", v0, [
                  l("input", {
                    type: "number",
                    value: C(L, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => _(
                      L,
                      "from",
                      Y.target.value
                    )
                  }, null, 40, g0),
                  l("input", {
                    type: "number",
                    value: C(L, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => _(
                      L,
                      "to",
                      Y.target.value
                    )
                  }, null, 40, h0)
                ])) : L.type === "boolean" ? (t(), a("div", b0, [
                  l("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": d.value[L.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      d.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Y) => c(L, d.value[L.key] === !0 ? null : !0)
                  }, [
                    l("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, x0),
                  l("span", y0, f(L.trueLabel ?? "Yes"), 1),
                  l("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      d.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Y) => c(L, d.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, k0)
                ])) : (t(), a("select", {
                  key: 5,
                  value: d.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Y) => c(L, Y.target.value)
                }, [
                  M[22] || (M[22] = l("option", { value: "" }, "All", -1)),
                  (t(!0), a(P, null, V(H(L), (Y) => (t(), a("option", {
                    key: String(Y.value),
                    value: Y.value
                  }, f(Y.label), 9, w0))), 128))
                ], 40, $0))
              ]))), 128))
            ]),
            l("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !h.value,
              onClick: (L) => R(N)
            }, " Apply filters ", 8, C0)
          ]),
          _: 1
        })) : k("", !0),
        I(Ie, { "dismiss-on-panel-click": !1 }, {
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
            l("div", S0, [
              (t(!0), a(P, null, V(e.columns, (N) => (t(), a("button", {
                key: N.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: N.locked,
                onClick: (L) => Z(N.key)
              }, [
                G.value.has(N.key) ? (t(), a("span", A0)) : (t(), a("svg", B0, [...M[25] || (M[25] = [
                  l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                U(" " + f(N.label), 1)
              ], 10, M0))), 128))
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
        ])], 10, _0)) : k("", !0),
        e.groups.length ? (t(), T(Ie, {
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
            ])], 10, P0)
          ]),
          panel: j(({ close: N }) => [
            l("div", z0, [
              l("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  A(null), N();
                }
              }, " No grouping ", 10, O0),
              (t(!0), a(P, null, V(e.groups, (L) => (t(), a("button", {
                key: L.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (Y) => {
                  A(L.key), N();
                }
              }, f(L.label), 11, j0))), 128))
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
        e.loading ? (t(), a("span", L0, "Loading…")) : k("", !0)
      ]),
      x.value.length ? (t(), a("div", V0, [
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
          ])], 8, D0)) : k("", !0)
        ], 8, T0))), 128)),
        x.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: M[8] || (M[8] = (N) => r("clear-filters"))
        }, " Clear all ")) : k("", !0)
      ])) : k("", !0)
    ]));
  }
}), E0 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, I0 = { class: "grid gap-2" }, F0 = {
  key: 0,
  class: "text-destructive text-sm"
}, N0 = { class: "flex gap-2" }, A5 = /* @__PURE__ */ O({
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
      ].find(({ pattern: y }) => y.test(A))?.name, S = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: y }) => y.test(A))?.name;
      return [w, S].filter(Boolean).join(" on ") || "";
    })()), i = K(!1), u = ja(null), d = $(() => u.value?.isLoading.value ?? !1), m = $(() => u.value?.error.value ?? null), h = $(() => u.value?.isSupported.value ?? !1);
    pe(async () => {
      try {
        const { usePasskeyRegister: A } = await import("@laravel/passkeys/vue");
        u.value = A({
          onSuccess: () => {
            s.value = "", i.value = !1, n("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const p = async (A) => {
      A.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, x = () => {
      i.value = !1, s.value = "";
    };
    return (A, w) => h.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      l("div", I0, [
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
      m.value ? (t(), a("p", F0, f(m.value), 1)) : k("", !0),
      l("div", N0, [
        I(se, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: j(() => [
            U(f(d.value ? "Registering…" : "Register passkey"), 1)
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
    })) : (t(), a("p", E0, " Passkeys are not supported in this browser. "));
  }
}), R0 = { class: "flex flex-col gap-4" }, U0 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, _5 = /* @__PURE__ */ O({
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
    const r = o, s = $(() => n.nodes.length > 0), i = $(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = $(() => n.errors._conflict);
    function d(m) {
      if (n.upload)
        return (h, p) => n.upload(m, h, p);
    }
    return (m, h) => (t(), a("div", R0, [
      u.value ? (t(), a("p", U0, f(u.value), 1)) : k("", !0),
      s.value ? (t(!0), a(P, { key: 1 }, V(e.nodes, (p, x) => (t(), T(da, {
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
        (t(!0), a(P, null, V(e.fields, (p) => (t(), T(Fe, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (x) => e.searchOptions(p.key, x) : void 0,
          upload: d(p.key),
          discard: e.discard,
          class: z(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (x) => r("change", p.key, x),
          onAffixAction: (x) => r("affix-action", p.key, x)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), H0 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, q0 = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, K0 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, G0 = ["disabled"], W0 = ["disabled"], Z0 = ["disabled"], P5 = /* @__PURE__ */ O({
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
      I(je, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), a("div", H0, [
            l("div", q0, [
              n[3] || (n[3] = l("span", {
                class: "text-amber-500",
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
              l("span", K0, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => o.$emit("discard"))
              }, f(e.discardLabel), 9, G0)) : k("", !0),
              l("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => o.$emit("cancel"))
              }, f(e.cancelLabel), 9, W0),
              l("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => o.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Z0)
            ])
          ])) : k("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function z5(e, o = {}) {
  const { warnOnUnload: n = !0 } = o, r = K(gt(e.value)), s = $(() => gt(e.value) !== r.value);
  function i() {
    r.value = gt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(m) {
    s.value && (m.preventDefault(), m.returnValue = "");
  }
  return pe(() => {
    n && window.addEventListener("beforeunload", d);
  }), he(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function gt(e) {
  return JSON.stringify(e, (o, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const J0 = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, Y0 = { class: "text-muted-foreground text-xs font-medium" }, X0 = { class: "text-sm" }, Q0 = { key: 1 }, ek = {
  key: 5,
  class: "max-w-full"
}, tk = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, ak = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, nk = { key: 6 }, lk = {
  key: 0,
  class: "divide-y rounded-md border"
}, ok = { class: "text-muted-foreground truncate font-medium" }, sk = { class: "col-span-2 break-words" }, rk = {
  key: 1,
  class: "text-muted-foreground"
}, ik = {
  key: 7,
  class: "flex flex-col gap-3"
}, uk = {
  key: 0,
  class: "text-muted-foreground"
}, dk = ["href"], ck = { class: "text-sm font-semibold" }, fk = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, mk = ["onClick"], O5 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = K(!n.node.collapsed), i = K(0), u = $(() => n.depth === 0), d = $(() => {
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
      return e.node.component === "entry" ? (t(), a("div", J0, [
        l("dt", Y0, f(e.node.label), 1),
        l("dd", X0, [
          e.node.type === "badge" && b(ii)(h.value) ? (t(), T(Ge, {
            key: 0,
            variant: x.value,
            class: "capitalize"
          }, {
            default: j(() => [
              U(f(h.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", Q0, "-")) : e.node.type === "icon" ? (t(), T(Ar, {
            key: 2,
            value: h.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(zr, {
            key: 3,
            src: h.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(Tr, {
            key: 4,
            value: typeof h.value == "string" ? h.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", ek, [
            e.node.language ? (t(), a("p", tk, f(e.node.language), 1)) : k("", !0),
            l("pre", ak, [
              l("code", null, f(h.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", nk, [
            h.value && typeof h.value == "object" && !Array.isArray(h.value) && Object.keys(h.value).length ? (t(), a("dl", lk, [
              (t(!0), a(P, null, V(h.value, (y, g) => (t(), a("div", {
                key: g,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                l("dt", ok, f(g), 1),
                l("dd", sk, f(y), 1)
              ]))), 128))
            ])) : (t(), a("span", rk, "-"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", ik, [
            (t(!0), a(P, null, V(Array.isArray(h.value) ? h.value : [], (y, g) => (t(), a("div", {
              key: g,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(P, null, V(e.node.entries ?? [], (v, c) => (t(), T(S, {
                key: c,
                node: v,
                record: y,
                depth: e.depth + 1,
                onAction: w[0] || (w[0] = (C) => r("action", C))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(h.value) || h.value.length === 0 ? (t(), a("span", uk, "-")) : k("", !0)
          ])) : e.node.url ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, f(p.value), 9, dk)) : (t(), a("span", {
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
            onClick: w[1] || (w[1] = (y) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : k("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: z(u.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("header", {
          class: z(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: w[2] || (w[2] = (y) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", null, [
            l("h3", ck, f(e.node.label), 1),
            e.node.description ? (t(), a("p", fk, f(e.node.description), 1)) : k("", !0)
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (y, g) => (t(), T(S, {
            key: g,
            node: y,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[3] || (w[3] = (v) => r("action", v))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : k("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (y, g) => (t(), T(S, {
          key: g,
          node: y,
          record: e.record,
          depth: e.depth + 1,
          onAction: w[4] || (w[4] = (v) => r("action", v))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: z(u.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        l("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (y, g) => (t(), a("button", {
            key: g,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (v) => i.value = g
          }, f(y.label), 11, mk))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (y, g) => ce((t(), a("div", {
          key: g,
          class: z(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(y.children ?? [], (v, c) => (t(), T(S, {
            key: c,
            node: v,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[5] || (w[5] = (C) => r("action", C))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Le, i.value === g]
        ])), 128))
      ], 2)) : k("", !0);
    };
  }
}), pk = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, vk = { class: "text-muted-foreground text-sm" }, gk = { class: "flex items-start gap-3" }, hk = { class: "min-w-0 flex-1" }, bk = { class: "flex flex-wrap items-center gap-2" }, xk = { class: "truncate text-sm font-medium" }, yk = { class: "text-muted-foreground mt-0.5 text-xs" }, kk = { class: "text-muted-foreground text-xs" }, $k = { class: "mt-auto flex items-center gap-2" }, wk = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), a("div", pk, [
      l("p", vk, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      l("div", {
        class: z(b(Lu))
      }, [
        (t(!0), a(P, null, V(e.gateways, (d) => (t(), a("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          l("div", gk, [
            l("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: d.color }),
              "aria-hidden": "true"
            }, f(d.mark), 5),
            l("div", hk, [
              l("div", bk, [
                l("h3", xk, f(d.label), 1),
                I(be, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    U(f(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), T(be, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...u[0] || (u[0] = [
                    U(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), T(be, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...u[1] || (u[1] = [
                    U(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : k("", !0),
                d.isDefault ? (t(), T(be, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...u[2] || (u[2] = [
                    U(" Default ", -1)
                  ])]),
                  _: 1
                })) : k("", !0),
                d.connected && d.mode ? (t(), T(be, {
                  key: 3,
                  status: d.mode
                }, {
                  default: j(() => [
                    U(f(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : k("", !0)
              ]),
              l("p", yk, f(d.caption), 1)
            ])
          ]),
          l("p", kk, f(d.methods.join(" · ")), 1),
          l("div", $k, [
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", d.key)
            }, {
              default: j(() => [...u[3] || (u[3] = [
                U(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            I(se, {
              size: "sm",
              variant: "ghost",
              onClick: (m) => r("toggle", d.key)
            }, {
              default: j(() => [
                U(f(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ]));
  }
}), Ck = { class: "flex flex-col gap-6" }, Sk = { class: "relative" }, Mk = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Bk = ["d"], Ak = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, _k = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Pk = { class: "flex flex-wrap items-center gap-2" }, zk = { class: "text-muted-foreground text-sm" }, Ok = { class: "flex flex-col gap-1 text-sm" }, jk = ["value"], Lk = {
  key: 0,
  class: "flex flex-col gap-2"
}, Vk = { class: "flex flex-wrap items-center gap-2" }, Tk = {
  key: 1,
  class: "flex items-center gap-2"
}, j5 = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Pe({
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
    function u(w) {
      return w.connected && w.enabled !== !1;
    }
    function d(w, S) {
      o.value = o.value.map(
        (y) => y.key === w ? { ...y, ...S } : y
      );
    }
    function m(w) {
      n.value = w;
    }
    function h(w) {
      const S = o.value.find((g) => g.key === w);
      if (!S)
        return;
      const y = !S.connected;
      d(w, {
        connected: y,
        mode: y ? S.mode ?? "test" : null,
        enabled: y,
        isDefault: !1
      });
    }
    function p(w, S) {
      const y = o.value.find((g) => g.key === w);
      y?.connected && d(w, { enabled: S, isDefault: S ? y.isDefault : !1 });
    }
    function x(w) {
      const S = o.value.find((y) => y.key === w);
      !S || !u(S) || (o.value = o.value.map((y) => ({
        ...y,
        isDefault: y.key === w
      })));
    }
    function A(w) {
      const S = n.value;
      !S || !o.value.find((g) => g.key === S)?.connected || d(S, { mode: w });
    }
    return (w, S) => (t(), a(P, null, [
      l("div", Ck, [
        I(Ae, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        l("div", Sk, [
          (t(), a("svg", Mk, [
            l("path", {
              d: b(ue)("search")
            }, null, 8, Bk)
          ])),
          I(ge, {
            modelValue: r.value,
            "onUpdate:modelValue": S[0] || (S[0] = (y) => r.value = y),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(wk, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: h
        }, null, 8, ["gateways"])) : (t(), a("p", Ak, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      I(It, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: S[8] || (S[8] = (y) => n.value = null)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            size: "sm",
            onClick: S[6] || (S[6] = (y) => n.value = null)
          }, {
            default: j(() => [...S[21] || (S[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(se, {
            key: 0,
            size: "sm",
            onClick: S[7] || (S[7] = (y) => h(s.value.key))
          }, {
            default: j(() => [
              U(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : k("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), a("div", _k, [
            l("div", Pk, [
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
              })) : k("", !0),
              s.value.isDefault ? (t(), T(be, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...S[11] || (S[11] = [
                  U(" Default ", -1)
                ])]),
                _: 1
              })) : k("", !0),
              s.value.connected && s.value.mode ? (t(), T(be, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  U(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : k("", !0)
            ]),
            l("p", zk, f(s.value.caption), 1),
            l("label", Ok, [
              S[12] || (S[12] = U(" Display name ", -1)),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, jk)
            ]),
            S[20] || (S[20] = l("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", Lk, [
              S[16] || (S[16] = l("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              S[17] || (S[17] = l("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              l("div", Vk, [
                I(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: S[1] || (S[1] = (y) => p(s.value.key, !0))
                }, {
                  default: j(() => [...S[13] || (S[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: S[2] || (S[2] = (y) => p(s.value.key, !1))
                }, {
                  default: j(() => [...S[14] || (S[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: S[3] || (S[3] = (y) => x(s.value.key))
                }, {
                  default: j(() => [...S[15] || (S[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : k("", !0),
            s.value.connected ? (t(), a("div", Tk, [
              I(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: S[4] || (S[4] = (y) => A("test"))
              }, {
                default: j(() => [...S[18] || (S[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              I(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: S[5] || (S[5] = (y) => A("live"))
              }, {
                default: j(() => [...S[19] || (S[19] = [
                  U(" Live ", -1)
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
function L5(e) {
  const o = K(Yt(e));
  pe(() => {
    o.value = Yt(e);
  }), fe(
    o,
    (d) => {
      try {
        localStorage.setItem(e, JSON.stringify([...d]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function n(d) {
    const m = new Set(o.value);
    m.has(d) ? m.delete(d) : m.add(d), o.value = m;
  }
  function r(d) {
    const m = new Set(o.value);
    m.add(d), o.value = m;
  }
  function s(d) {
    const m = new Set(o.value);
    m.delete(d), o.value = m;
  }
  function i(d) {
    o.value = new Set(d);
  }
  function u() {
    o.value = /* @__PURE__ */ new Set();
  }
  return { hidden: o, toggle: n, hide: r, show: s, setHidden: i, reset: u };
}
function V5(e) {
  const { config: o, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = K(
    o.driver === "none" ? "off" : "connecting"
  ), m = K(/* @__PURE__ */ new Set());
  let h = /* @__PURE__ */ new Map(), p, x, A, w = (/* @__PURE__ */ new Date()).toISOString(), S = null;
  function y(G, Z) {
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
        u?.(ae, te);
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
        w = ae, d.value = "live";
        for (const te of Z)
          y(te[r], te);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function c() {
    C(), d.value = "live", x = setInterval(v, o.intervalMs);
  }
  function C() {
    clearInterval(x), x = void 0, A?.abort();
  }
  function B() {
    return window.Echo ?? null;
  }
  function _() {
    const G = B();
    if (!G || !o.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    S = o.channel;
    const Z = G.private(o.channel);
    for (const ae of o.events)
      Z.listen(ae, (te) => {
        te?.[r] !== void 0 && y(te[r], te);
      });
    d.value = "live", G.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), G.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function R() {
    S && (B()?.leave(S), S = null);
  }
  function D() {
    o.driver === "poll" && c(), o.driver === "broadcast" && _();
  }
  function ee() {
    C(), R(), clearTimeout(p), p = void 0, h = /* @__PURE__ */ new Map();
  }
  function H() {
    o.pauseWhenHidden && (document.hidden ? (ee(), d.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), D(), i?.()));
  }
  return pe(() => {
    o.driver !== "none" && (D(), o.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), he(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: d, recentlyChanged: m, applyPatch: y, flush: g, pollOnce: v };
}
const Dk = /^[a-z0-9-]+$/, Ek = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function T5(e) {
  La(() => {
    if (typeof document > "u")
      return;
    const o = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !Dk.test(n) || typeof r != "string" || !Ek.test(r) || (o[`--${n}`] = r);
    Li(o);
  });
}
const Ik = { class: "flex items-center gap-0.5" }, Fk = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", Ik, [
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
}), Nk = /* @__PURE__ */ O({
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
}), Rk = { class: "flex flex-col gap-2" }, Uk = { class: "bg-card rounded-lg border p-4" }, Hk = { class: "text-muted-foreground truncate text-xs" }, qk = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Kk = /* @__PURE__ */ O({
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
    ), u = $(
      () => String(o.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = $(() => {
      const S = String(o.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return S === "" ? u.value : `${u.value} › ${S.split("/").join(" › ")}`;
    });
    function m(S, y) {
      return S.length <= y ? S : `${S.slice(0, y - 1).trimEnd()}…`;
    }
    const h = $(() => m(s.value, r.value.titleMax)), p = $(() => m(i.value, r.value.descriptionMax));
    function x(S, y, g) {
      return S === 0 ? { tone: "text-muted-foreground", note: "empty" } : S > g ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : S < y ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const A = $(
      () => x(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = $(
      () => x(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (S, y) => (t(), a("div", Rk, [
      l("div", Uk, [
        l("p", Hk, f(d.value), 1),
        l("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", h.value === "" ? "text-muted-foreground italic" : ""])
        }, f(h.value || "Untitled page"), 3),
        l("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      l("div", qk, [
        l("span", {
          class: z(A.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(A.value.note), 3),
        l("span", {
          class: z(w.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(w.value.note), 3)
      ]),
      y[0] || (y[0] = l("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function Gk() {
  Se("radio", cc), Se("checkboxlist", pc), Se("tags", kc), Se("colour", jc), Se("slider", Ic), Se("visual-select", Xc), Se("markdown", Hd), Se("code", Yd), Se("seo-preview", Kk), pt("swatch", ef), pt("voucher-code-box", Nk), pt("document-colour-mode", Fk);
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
const Wk = /* @__PURE__ */ O({
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
}), Zk = ["id"], Ce = /* @__PURE__ */ O({
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
        I(Wk, null, {
          default: j(() => [
            q(o.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Zk));
  }
}), Jk = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Yk = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, Xk = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Te = /* @__PURE__ */ O({
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
      e.eyebrow ? (t(), a("p", Jk, f(e.eyebrow), 1)) : k("", !0),
      e.title ? (t(), a("h2", Yk, f(e.title), 1)) : k("", !0),
      e.body ? (t(), a("p", Xk, f(e.body), 1)) : k("", !0)
    ], 2)) : k("", !0);
  }
});
function Qk() {
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
const e2 = { class: "pk-tilt-inner relative h-full" }, t2 = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: o } = Qk();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: "pk-tilt group/tilt"
    }, [
      l("div", e2, [
        r[0] || (r[0] = l("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(n.$slots, "default")
      ])
    ], 512));
  }
}), a2 = { class: "flex flex-col gap-10" }, n2 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, l2 = { class: "text-base font-semibold" }, o2 = { class: "text-sm text-pretty text-muted-foreground" }, s2 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(Ce, null, {
      default: j(() => [
        l("div", a2, [
          I(Te, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", n2, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), T(t2, {
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
                  l("h3", l2, f(s.title), 1),
                  l("p", o2, f(s.body), 1)
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
}), r2 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, i2 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, u2 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, d2 = ["href"], c2 = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Ce, null, {
      default: j(() => [
        l("div", r2, [
          l("h2", i2, f(e.title), 1),
          e.body ? (t(), a("p", u2, f(e.body), 1)) : k("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, d2)) : k("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), f2 = { class: "flex flex-col gap-8" }, m2 = { class: "divide-y rounded-lg border" }, p2 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, v2 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, g2 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Ce, { narrow: "" }, {
      default: j(() => [
        l("div", f2, [
          I(Te, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", m2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              l("summary", p2, [
                U(f(r.question) + " ", 1),
                n[0] || (n[0] = l("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              l("p", v2, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), h2 = { class: "flex flex-col gap-10" }, b2 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, x2 = { class: "text-sm font-semibold" }, y2 = { class: "text-sm text-pretty text-muted-foreground" }, k2 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Ce, null, {
      default: j(() => [
        l("div", h2, [
          I(Te, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", b2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("h3", x2, f(r.title), 1),
              l("p", y2, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), $2 = { class: "flex flex-col items-center gap-6 text-center" }, w2 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, C2 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, S2 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, M2 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, B2 = ["href"], A2 = ["href"], _2 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, P2 = /* @__PURE__ */ O({
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
    return (o, n) => (t(), T(Ce, null, {
      default: j(() => [
        l("div", $2, [
          e.eyebrow ? (t(), a("p", w2, f(e.eyebrow), 1)) : k("", !0),
          l("h1", C2, f(e.title), 1),
          e.body ? (t(), a("p", S2, f(e.body), 1)) : k("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", M2, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, B2)) : k("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, A2)) : k("", !0)
          ])) : k("", !0),
          e.note ? (t(), a("p", _2, f(e.note), 1)) : k("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), z2 = { class: "flex flex-col items-center gap-6" }, O2 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, j2 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, L2 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Ce, { muted: "" }, {
      default: j(() => [
        l("div", z2, [
          e.title ? (t(), a("p", O2, f(e.title), 1)) : k("", !0),
          l("ul", j2, [
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
}), V2 = { class: "flex flex-col gap-10" }, T2 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, D2 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, E2 = ["aria-pressed"], I2 = ["aria-pressed"], F2 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, N2 = { class: "grid gap-4 md:grid-cols-3" }, R2 = { class: "flex flex-col gap-1" }, U2 = { class: "text-sm font-semibold" }, H2 = { class: "flex items-baseline gap-1" }, q2 = { class: "text-3xl font-semibold tracking-tight" }, K2 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, G2 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, W2 = { class: "flex flex-col gap-2 text-sm" }, Z2 = { class: "text-muted-foreground" }, J2 = ["href"], Y2 = /* @__PURE__ */ O({
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
    return (i, u) => (t(), T(Ce, { muted: "" }, {
      default: j(() => [
        l("div", V2, [
          I(Te, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", T2, [
            l("div", D2, [
              l("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: u[0] || (u[0] = (d) => n.value = !1)
              }, " Monthly ", 10, E2),
              l("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: u[1] || (u[1] = (d) => n.value = !0)
              }, " Annual ", 10, I2)
            ]),
            e.annualNote ? (t(), a("p", F2, f(e.annualNote), 1)) : k("", !0)
          ])) : k("", !0),
          l("ul", N2, [
            (t(!0), a(P, null, V(e.items ?? [], (d, m) => (t(), a("li", {
              key: m,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              l("div", R2, [
                l("h3", U2, f(d.name), 1),
                l("p", H2, [
                  l("span", q2, f(s(d)), 1),
                  d.period ? (t(), a("span", K2, f(d.period), 1)) : k("", !0)
                ]),
                d.body ? (t(), a("p", G2, f(d.body), 1)) : k("", !0)
              ]),
              l("ul", W2, [
                (t(!0), a(P, null, V(d.features ?? [], (h, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = l("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  l("span", Z2, f(h.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), a("a", {
                key: 0,
                href: d.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(d.label), 11, J2)) : k("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function X2() {
  const e = K(null);
  let o = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !o || !s)
      return;
    const d = o.getBoundingClientRect(), m = d.height + window.innerHeight, h = m <= 0 ? 0 : (window.innerHeight - d.top) / m;
    o.style.setProperty("--pk-progress", String(Math.min(Math.max(h, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return pe(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (o = e.value, d || typeof IntersectionObserver > "u") {
        o.style.setProperty("--pk-progress", "1");
        return;
      }
      o.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((m) => {
        s = m.some((h) => h.isIntersecting), s && u();
      }), n.observe(o), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), he(() => {
    n?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const Q2 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, e$ = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, t$ = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, a$ = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, n$ = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, l$ = { class: "pk-showcase-stage w-full [perspective:1400px]" }, o$ = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, s$ = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, r$ = { class: "ml-3 truncate text-xs text-muted-foreground" }, i$ = { class: "flex" }, u$ = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, d$ = { class: "min-w-0 flex-1 p-4" }, c$ = { class: "flex flex-col divide-y rounded-md border" }, f$ = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: o } = X2();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: o,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      l("div", Q2, [
        l("div", e$, [
          l("div", t$, [
            l("h2", a$, f(e.title), 1),
            e.body ? (t(), a("p", n$, f(e.body), 1)) : k("", !0)
          ]),
          l("div", l$, [
            l("div", o$, [
              l("div", s$, [
                r[0] || (r[0] = l("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = l("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = l("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                l("span", r$, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              l("div", i$, [
                l("div", u$, [
                  (t(), a(P, null, V(6, (s) => l("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                l("div", d$, [
                  r[4] || (r[4] = l("div", { class: "mb-3 flex gap-2" }, [
                    l("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  l("div", c$, [
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
}), m$ = /* @__PURE__ */ O({
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
      const d = performance.now(), m = (h) => {
        const p = Math.min((h - d) / o.duration, 1);
        s.value = o.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = o.to;
      };
      requestAnimationFrame(m);
    }), (i, u) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), p$ = { class: "flex flex-col gap-10" }, v$ = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, g$ = { class: "order-2 text-sm text-muted-foreground" }, h$ = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, b$ = /* @__PURE__ */ O({
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
    return (n, r) => (t(), T(Ce, { muted: "" }, {
      default: j(() => [
        l("div", p$, [
          I(Te, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("dl", v$, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              l("dt", g$, f(s.label), 1),
              l("dd", h$, [
                o(s.value) ? (t(), T(m$, {
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
}), x$ = { class: "flex flex-col gap-10" }, y$ = { class: "grid gap-6 md:grid-cols-3" }, k$ = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, $$ = { class: "text-sm font-semibold" }, w$ = { class: "text-sm text-pretty text-muted-foreground" }, C$ = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Ce, null, {
      default: j(() => [
        l("div", x$, [
          I(Te, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ol", y$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              l("span", k$, f(s + 1), 1),
              l("h3", $$, f(r.title), 1),
              l("p", w$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), S$ = { class: "flex flex-col gap-10" }, M$ = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, B$ = { class: "text-pretty text-sm leading-relaxed" }, A$ = { class: "mt-auto flex items-center gap-3" }, _$ = ["src"], P$ = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, z$ = { class: "min-w-0" }, O$ = { class: "block truncate text-sm font-medium" }, j$ = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, L$ = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), T(Ce, null, {
      default: j(() => [
        l("div", S$, [
          I(Te, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", M$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("blockquote", B$, " “" + f(r.quote) + "” ", 1),
              l("figcaption", A$, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, _$)) : (t(), a("span", P$, f((r.name ?? "?").slice(0, 1)), 1)),
                l("span", z$, [
                  l("span", O$, f(r.name), 1),
                  r.role ? (t(), a("span", j$, f(r.role), 1)) : k("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), D5 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const n = e, r = {
      hero: P2,
      logos: L2,
      features: k2,
      bento: s2,
      showcase: f$,
      steps: C$,
      stats: b$,
      testimonials: L$,
      pricing: Y2,
      faq: g2,
      cta: c2
    }, s = $(
      () => (n.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return o({ known: Object.keys(r) }), (i, u) => (t(!0), a(P, null, V(s.value, (d) => (t(), T(xe(d.component), oe({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), V$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, E5 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", V$, [
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
}), T$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, I5 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", T$, [...n[0] || (n[0] = [
      Ct('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), D$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, F5 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", D$, [...n[0] || (n[0] = [
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
Gk();
const N5 = "0.0.1";
export {
  r5 as AdminDirectory,
  Bu as Alert,
  Au as AlertDescription,
  _u as AlertTitle,
  G4 as AppPageFooter,
  dw as AppearanceDrawer,
  u4 as Avatar,
  d4 as AvatarFallback,
  c4 as AvatarImage,
  jt as BADGE_VARIANTS,
  sw as BadgeResolver,
  e5 as BarChart,
  f4 as Breadcrumb,
  m4 as BreadcrumbEllipsis,
  p4 as BreadcrumbItem,
  v4 as BreadcrumbLink,
  g4 as BreadcrumbList,
  h4 as BreadcrumbPage,
  b4 as BreadcrumbSeparator,
  G$ as BulkActions,
  Lu as CATALOGUE_GRID,
  hw as CATALOGUE_GRID_TIGHT,
  Vu as CATALOGUE_GRID_TILES,
  D4 as Card,
  E4 as CardAction,
  I4 as CardContent,
  F4 as CardDescription,
  N4 as CardFooter,
  R4 as CardHeader,
  U4 as CardTitle,
  rb as CartPanel,
  g5 as CatalogBrowser,
  Og as CatalogCard,
  ka as CatalogFilterSheet,
  Et as CatalogGrid,
  p5 as CatalogInspect,
  Jb as CatalogItemDetail,
  v5 as CatalogItemView,
  h5 as CatalogRegister,
  m5 as CatalogTill,
  nv as ChartCard,
  Qe as ChartTooltip,
  Po as Checkbox,
  tw as CheckboxCell,
  aw as CodeCell,
  Tr as ColourCell,
  o5 as ComboChart,
  _o as CreateOptionDialog,
  go as CreateOptionError,
  x5 as DASHBOARD_HIDDEN_STORAGE_KEY,
  zx as DASHBOARD_HIDE_KEY,
  y5 as DashboardShortcuts,
  vl as DataTable,
  M4 as Dialog,
  B4 as DialogClose,
  A4 as DialogContent,
  _4 as DialogDescription,
  P4 as DialogFooter,
  z4 as DialogHeader,
  fd as DialogOverlay,
  O4 as DialogScrollContent,
  j4 as DialogTitle,
  L4 as DialogTrigger,
  r5 as DirectoryPage,
  Zw as DropdownMenu,
  Jw as DropdownMenuCheckboxItem,
  Yw as DropdownMenuContent,
  Xw as DropdownMenuGroup,
  Qw as DropdownMenuItem,
  e4 as DropdownMenuLabel,
  H5 as DropdownMenuPortal,
  t4 as DropdownMenuRadioGroup,
  a4 as DropdownMenuRadioItem,
  n4 as DropdownMenuSeparator,
  l4 as DropdownMenuShortcut,
  o4 as DropdownMenuSub,
  s4 as DropdownMenuSubContent,
  r4 as DropdownMenuSubTrigger,
  i4 as DropdownMenuTrigger,
  lw as EditableCell,
  yw as FORM_MEASURE,
  Fe as FormFieldControl,
  s5 as HeatmapChart,
  ct as ICON_PATHS,
  Ar as IconCell,
  zr as ImageCell,
  O5 as InfoNode,
  Du as JPEG_IMAGE_ERROR,
  nw as KeyValueCell,
  V4 as Label,
  xm as LineChart,
  N1 as LineItems,
  ot as MiniStatCard,
  x4 as NavigationMenu,
  y4 as NavigationMenuContent,
  k4 as NavigationMenuIndicator,
  $4 as NavigationMenuItem,
  w4 as NavigationMenuLink,
  C4 as NavigationMenuList,
  S4 as NavigationMenuTrigger,
  dd as NavigationMenuViewport,
  Tu as OPAQUE_IMAGE_ERROR,
  Ve as PAGE_SHELL,
  bw as PAGE_SHELL_COMPACT,
  xw as PAGE_SHELL_STACK,
  j5 as PaymentGatewaySettings,
  wk as PaymentGateways,
  t5 as PieChart,
  vw as PkAlertError,
  E5 as PkAuroraBackdrop,
  Ge as PkBadge,
  s2 as PkBento,
  cw as PkBottomNav,
  H4 as PkBoundary,
  J4 as PkBuilder,
  se as PkButton,
  q4 as PkCard,
  pc as PkCheckboxList,
  xa as PkCodeBox,
  Yd as PkCodeInput,
  jc as PkColourPicker,
  F5 as PkConsoleBackdrop,
  m$ as PkCountUp,
  c2 as PkCta,
  W4 as PkDeviceFrame,
  Of as PkDocument,
  Ie as PkDropdown,
  I5 as PkEditorialBackdrop,
  Rt as PkEmptyState,
  g2 as PkFaq,
  k2 as PkFeatureGrid,
  ke as PkFieldLabel,
  ua as PkFileUpload,
  Ae as PkHeading,
  P2 as PkHero,
  ls as PkKeyValue,
  D5 as PkLandingSections,
  L2 as PkLogoCloud,
  Hd as PkMarkdownInput,
  Ze as PkModal,
  Ot as PkMultiSelect,
  mw as PkOtpInput,
  pw as PkPageHeader,
  A5 as PkPasskeyRegister,
  gw as PkPasswordInput,
  Y2 as PkPricing,
  P1 as PkQtyStepper,
  Qr as PkQueryBuilder,
  cc as PkRadioGroup,
  Z4 as PkRepeater,
  Wk as PkReveal,
  ps as PkRichEditor,
  Ce as PkSection,
  Te as PkSectionHeading,
  f$ as PkShowcase,
  cx as PkSignaturePad,
  Ne as PkSkeleton,
  It as PkSlideover,
  Ic as PkSlider,
  fw as PkSpinner,
  b$ as PkStats,
  be as PkStatusBadge,
  po as PkStepIndicator,
  C$ as PkSteps,
  ef as PkSwatchPreview,
  kc as PkTagsInput,
  L$ as PkTestimonials,
  ge as PkTextInput,
  t2 as PkTiltCard,
  Xc as PkVisualSelect,
  oh as PlanCard,
  f5 as PlanEditor,
  c5 as PlanGrid,
  l5 as PolarAreaChart,
  n5 as RadarChart,
  rw as RecordActions,
  _5 as RecordForm,
  ew as RelationCreateDialog,
  W$ as RelationPanel,
  ug as STATUS_TONES,
  a5 as ScatterChart,
  da as SchemaNode,
  u5 as SegmentedBar,
  w5 as SelectionBar,
  od as Separator,
  $5 as SetupChecklist,
  pa as ShadcnInput,
  Tt as Sheet,
  $w as SheetClose,
  Dt as SheetContent,
  Hu as SheetDescription,
  ww as SheetFooter,
  qu as SheetHeader,
  Ku as SheetTitle,
  Cw as SheetTrigger,
  $v as ShortcutsWidget,
  Sw as Sidebar,
  Mw as SidebarContent,
  Bw as SidebarFooter,
  Aw as SidebarGroup,
  _w as SidebarGroupAction,
  Pw as SidebarGroupContent,
  zw as SidebarGroupLabel,
  Ow as SidebarHeader,
  jw as SidebarInput,
  Lw as SidebarInset,
  Vw as SidebarMenu,
  Tw as SidebarMenuAction,
  Dw as SidebarMenuBadge,
  Iw as SidebarMenuButton,
  Fw as SidebarMenuItem,
  Nw as SidebarMenuSkeleton,
  Rw as SidebarMenuSub,
  Uw as SidebarMenuSubButton,
  Hw as SidebarMenuSubItem,
  qw as SidebarProvider,
  Kw as SidebarRail,
  Gw as SidebarSeparator,
  Ww as SidebarTrigger,
  b5 as SignatureStudio,
  it as Sparkline,
  T4 as Spinner,
  i5 as StatCard,
  d5 as StatListChart,
  k5 as StatStrip,
  Ee as Switch,
  va as TRANSPARENT_IMAGE_HELP,
  C5 as TablePagination,
  S5 as TableShell,
  M5 as TableTabs,
  B5 as TableToolbar,
  Q4 as ThemeToggle,
  ad as Tooltip,
  nd as TooltipContent,
  Ew as TooltipProvider,
  ld as TooltipTrigger,
  ya as TrendBadge,
  P5 as UnsavedBar,
  Pu as alertVariants,
  ji as appearanceVars,
  $t as applyAppearance,
  Ru as assertTransparentImage,
  Ke as buttonClasses,
  st as catalogFiltersActive,
  Q as cn,
  bo as createOptionActionLabel,
  ho as createOptionTitle,
  jg as cycleLabel,
  _e as emptyCatalogFilters,
  vo as fieldControl,
  X$ as fieldErrorsFromPayload,
  m1 as findExactSku,
  Lg as formatPerkValue,
  ii as hasBadgeValue,
  Z$ as hasFieldControl,
  Y4 as hasOptionPreview,
  ue as iconPath,
  Fu as imageHasTransparency,
  iw as initializeAppearance,
  kt as isDark,
  Ft as matchCatalogItem,
  cd as navigationMenuTriggerStyle,
  Fc as optionPreview,
  kw as packWidgetColumns,
  Vg as perkGranted,
  Vt as readAppearance,
  Gk as registerBuiltInFieldControls,
  Se as registerFieldControl,
  pt as registerOptionPreview,
  J$ as registeredFieldTypes,
  Nc as registeredOptionPreviews,
  Y$ as resetFieldControls,
  X4 as resetOptionPreviews,
  uw as setAppearancePersister,
  sd as sidebarMenuButtonVariants,
  mg as statusBadgeVariant,
  fg as statusTone,
  Q$ as toUrl,
  ma as useAppearance,
  L5 as useColumnVisibility,
  V5 as useLiveUpdates,
  Qk as usePointer,
  $a as useReveal,
  ow as useSchemaColumns,
  X2 as useScrollProgress,
  K4 as useShellPageFooter,
  rt as useSidebar,
  T5 as useTenantTheme,
  z5 as useUnsavedChanges,
  N5 as version
};
//# sourceMappingURL=index.js.map
