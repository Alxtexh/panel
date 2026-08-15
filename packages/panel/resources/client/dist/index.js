import './ui.css';
import { defineComponent as P, ref as G, computed as $, openBlock as t, createElementBlock as n, normalizeClass as A, createElementVNode as s, createCommentVNode as _, Fragment as z, renderList as V, createTextVNode as U, toDisplayString as f, withModifiers as ce, createStaticVNode as mt, renderSlot as H, watch as re, nextTick as we, onBeforeUnmount as me, createBlock as D, Teleport as Te, createVNode as E, Transition as ze, withCtx as O, onMounted as de, normalizeStyle as Q, unref as b, resolveDynamicComponent as Pe, resolveComponent as pt, withDirectives as oe, vModelSelect as Oe, vModelDynamic as ra, isRef as ia, vModelText as Ce, useTemplateRef as da, mergeProps as ee, normalizeProps as be, guardReactiveProps as Me, onErrorCaptured as ua, defineAsyncComponent as St, vShow as _e, useSlots as ca, withKeys as fa, reactive as Ue, useModel as Xe, mergeModels as Ae, createSlots as ma, inject as pa, shallowRef as va, watchEffect as ga } from "vue";
import { AlertCircle as ha, EyeOff as ba, Eye as xa, X as vt, PanelLeftOpen as ya, PanelLeftClose as ka, Check as Et, Circle as $a, ChevronRight as Ft, MoreHorizontal as wa, ChevronDown as Ca, Loader2Icon as _a } from "@lucide/vue";
import { cva as gt } from "class-variance-authority";
import { clsx as Ma } from "clsx";
import { twMerge as Sa } from "tailwind-merge";
import { useVModel as It, reactiveOmit as le, useMediaQuery as Ba, useEventListener as za, defaultDocument as Pa } from "@vueuse/core";
import { useForwardPropsEmits as ue, DialogRoot as Nt, DialogClose as Ee, DialogOverlay as ht, DialogPortal as bt, DialogContent as xt, DialogDescription as Rt, DialogTitle as Ut, DialogTrigger as Ht, createContext as Aa, Primitive as Fe, TooltipRoot as ja, TooltipPortal as Oa, TooltipContent as La, TooltipArrow as Va, TooltipProvider as Kt, TooltipTrigger as Da, Separator as Ta, DropdownMenuRoot as Ea, DropdownMenuCheckboxItem as Fa, DropdownMenuItemIndicator as qt, DropdownMenuPortal as Ia, DropdownMenuContent as Na, DropdownMenuGroup as Ra, useForwardProps as xe, DropdownMenuItem as Ua, DropdownMenuLabel as Ha, DropdownMenuRadioGroup as Ka, DropdownMenuRadioItem as qa, DropdownMenuSeparator as Ga, DropdownMenuSub as Wa, DropdownMenuSubContent as Za, DropdownMenuSubTrigger as Ja, DropdownMenuTrigger as Ya, AvatarRoot as Xa, AvatarFallback as Qa, AvatarImage as en, NavigationMenuViewport as tn, NavigationMenuRoot as an, NavigationMenuContent as nn, NavigationMenuIndicator as ln, NavigationMenuItem as sn, NavigationMenuLink as on, NavigationMenuList as rn, NavigationMenuTrigger as dn, Label as un, CheckboxRoot as cn, CheckboxIndicator as fn, SwitchRoot as mn, SwitchThumb as pn } from "reka-ui";
import { DropdownMenuPortal as Pw } from "reka-ui";
import { Link as vn } from "@inertiajs/vue3";
const gn = { class: "w-full border-collapse text-sm" }, hn = { class: "bg-background sticky top-0 z-10" }, bn = { class: "bg-muted/50" }, xn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, yn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, kn = ["checked", "indeterminate"], $n = ["onClick"], wn = {
  key: 0,
  class: "text-xs"
}, Cn = {
  key: 1,
  class: "text-xs opacity-40"
}, _n = { key: 1 }, Mn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Sn = {
  key: 0,
  class: "bg-muted/40"
}, Bn = ["colspan"], zn = { class: "text-muted-foreground/70" }, Pn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], An = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, jn = {
  key: 1,
  class: "px-3 py-2"
}, On = ["checked", "aria-label", "onChange"], Ln = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Vn = ["aria-label", "onClick"], Dn = { class: "text-xs" }, Tn = { key: 1 }, En = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Fn = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, In = { key: 0 }, Nn = { class: "text-muted-foreground block text-[10px] font-medium" }, Rn = { class: "font-semibold tabular-nums" }, Un = { key: 1 }, Hn = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, Kn = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, qn = { class: "font-medium" }, Gn = {
  key: 0,
  class: "text-sm"
}, Wn = /* @__PURE__ */ P({
  __name: "DataTable",
  props: {
    columns: {},
    rows: {},
    groupBy: {},
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
    summaries: { default: null },
    summaryValues: { default: null },
    framed: { type: Boolean, default: !0 }
  },
  emits: ["sort", "toggle-row", "toggle-page", "reorder", "row-contextmenu", "row-click"],
  setup(e, { emit: l }) {
    const a = e;
    function r(F) {
      return a.groupBy ? F === 0 ? !0 : a.rows[F]?.[a.groupBy.key] !== a.rows[F - 1]?.[a.groupBy.key] : !1;
    }
    function o(F) {
      const T = a.groupBy ? F[a.groupBy.key] : null;
      return T == null || T === "" ? "None" : String(T);
    }
    const i = G(null), d = G(null);
    function u(F, T) {
      i.value = F, T.dataTransfer?.setData("text/plain", String(F)), T.dataTransfer && (T.dataTransfer.effectAllowed = "move");
    }
    function p() {
      i.value = null, d.value = null;
    }
    function k(F) {
      return i.value === null || d.value !== F ? "" : i.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function m(F, T) {
      i.value !== null && (T.preventDefault(), d.value = F);
    }
    function h(F) {
      const T = i.value;
      if (i.value = null, d.value = null, T === null || T === F)
        return;
      const j = a.rows.map((I) => I[a.rowKey]), [W] = j.splice(T, 1);
      j.splice(F, 0, W), M("reorder", j);
    }
    const M = l;
    function w(F, T) {
      !a.rowClickable || a.reordering || T.button !== 0 || T.metaKey || T.ctrlKey || T.shiftKey || T.altKey || T.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || M("row-click", F);
    }
    const C = G(null), g = $(() => a.columns.filter((F) => !a.hidden?.has(F.key))), c = $(() => a.rows.map((F) => F[a.rowKey])), x = $(
      () => c.value.length > 0 && c.value.every((F) => a.selected?.has(F))
    ), v = $(
      () => !x.value && c.value.some((F) => a.selected?.has(F))
    );
    function y(F) {
      return F.sortKey ?? F.key;
    }
    function S(F) {
      return a.sort === y(F);
    }
    async function B(F, T, j) {
      try {
        await navigator.clipboard.writeText(String(j)), C.value = `${F}-${T.key}`, setTimeout(() => C.value = null, 1200);
      } catch {
      }
    }
    const q = $(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function N(F) {
      return a.summaries?.[F] ?? null;
    }
    function Y(F) {
      const T = a.summaries?.[F], j = a.summaryValues?.[F];
      if (!T)
        return "";
      if (j == null)
        return "-";
      const W = T.divideBy ? j / T.divideBy : j, I = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: T.decimals,
        maximumFractionDigits: T.decimals
      }).format(W);
      return `${T.prefix ?? ""}${I}${T.suffix ?? ""}`;
    }
    return (F, T) => (t(), n("div", {
      class: A(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      s("table", gn, [
        s("thead", hn, [
          s("tr", bn, [
            e.reordering ? (t(), n("th", xn)) : _("", !0),
            e.selectable && !e.reordering ? (t(), n("th", yn, [
              s("input", {
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: x.value,
                indeterminate: v.value,
                "aria-label": "Select all rows on this page",
                onChange: T[0] || (T[0] = (j) => M("toggle-page", !x.value))
              }, null, 40, kn)
            ])) : _("", !0),
            (t(!0), n(z, null, V(g.value, (j) => (t(), n("th", {
              key: j.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              j.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (W) => M("sort", y(j))
              }, [
                U(f(j.label) + " ", 1),
                S(j) ? (t(), n("span", wn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Cn, "↕"))
              ], 8, $n)) : (t(), n("span", _n, f(j.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), n("th", Mn, [...T[1] || (T[1] = [
              s("span", { class: "sr-only" }, "Actions", -1)
            ])])) : _("", !0)
          ])
        ]),
        s("tbody", {
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, V(e.rows, (j, W) => (t(), n(z, {
            key: j[e.rowKey]
          }, [
            e.groupBy && r(W) ? (t(), n("tr", Sn, [
              s("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                s("span", zn, f(e.groupBy.label) + ":", 1),
                U(" " + f(o(j)), 1)
              ], 8, Bn)
            ])) : _("", !0),
            s("tr", {
              class: A(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                e.selected?.has(j[e.rowKey]) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                i.value === W ? "opacity-40" : "",
                k(W),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (I) => u(W, I),
              onDragover: (I) => m(W, I),
              onDrop: ce((I) => h(W), ["prevent"]),
              onDragend: p,
              onContextmenu: (I) => M("row-contextmenu", j, I),
              onClick: (I) => w(j, I)
            }, [
              e.reordering ? (t(), n("td", An, [...T[2] || (T[2] = [
                mt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-4805f648><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4805f648><circle cx="9" cy="6" r="1.5" data-v-4805f648></circle><circle cx="15" cy="6" r="1.5" data-v-4805f648></circle><circle cx="9" cy="12" r="1.5" data-v-4805f648></circle><circle cx="15" cy="12" r="1.5" data-v-4805f648></circle><circle cx="9" cy="18" r="1.5" data-v-4805f648></circle><circle cx="15" cy="18" r="1.5" data-v-4805f648></circle></svg></span>', 1)
              ])])) : _("", !0),
              e.selectable && !e.reordering ? (t(), n("td", jn, [
                s("input", {
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  checked: e.selected?.has(j[e.rowKey]),
                  "aria-label": `Select row ${j[e.rowKey]}`,
                  onChange: (I) => M("toggle-row", j[e.rowKey])
                }, null, 40, On)
              ])) : _("", !0),
              (t(!0), n(z, null, V(g.value, (I) => (t(), n("td", {
                key: I.key,
                class: A(["px-3 py-2 whitespace-nowrap", I.cellClass])
              }, [
                H(F.$slots, `cell:${I.key}`, {
                  row: j,
                  value: j[I.key],
                  column: I
                }, () => [
                  I.copyable ? (t(), n("span", Ln, [
                    U(f(j[I.key]) + " ", 1),
                    s("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${I.label.toLowerCase()}`,
                      onClick: (R) => B(String(j[e.rowKey]), I, j[I.key])
                    }, [
                      s("span", Dn, f(C.value === `${j[e.rowKey]}-${I.key}` ? "✓" : "⧉"), 1)
                    ], 8, Vn)
                  ])) : (t(), n("span", Tn, f(j[I.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              F.$slots.actions ? (t(), n("td", En, [
                H(F.$slots, "actions", { row: j }, void 0, !0)
              ])) : _("", !0)
            ], 42, Pn)
          ], 64))), 128))
        ], 2),
        q.value ? (t(), n("tfoot", Fn, [
          s("tr", null, [
            e.selectable ? (t(), n("td", In)) : _("", !0),
            (t(!0), n(z, null, V(e.columns, (j) => (t(), n(z, {
              key: `s-${j.key}`
            }, [
              e.hidden?.has(j.key) ? _("", !0) : (t(), n("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", j.cellClass])
              }, [
                N(j.key) ? (t(), n(z, { key: 0 }, [
                  s("span", Nn, f(N(j.key).label), 1),
                  s("span", Rn, f(Y(j.key)), 1)
                ], 64)) : _("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), n("td", Un)) : _("", !0)
          ])
        ])) : _("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", Hn, [
        T[3] || (T[3] = s("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        H(F.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", Kn, [
        s("p", qn, f(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", Gn, f(e.emptyHint), 1)) : _("", !0)
      ])) : _("", !0)
    ], 2));
  }
}), yt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, o] of l)
    a[r] = o;
  return a;
}, Zn = /* @__PURE__ */ yt(Wn, [["__scopeId", "data-v-4805f648"]]), Jn = ["aria-label"], Yn = { class: "border-b px-5 py-4" }, Xn = { class: "text-base font-semibold" }, Qn = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, el = { class: "px-5 py-4" }, tl = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, rt = /* @__PURE__ */ P({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(null);
    let i = null;
    const d = G(!1);
    function u(m) {
      d.value = m.target === m.currentTarget;
    }
    function p(m) {
      d.value && m.target === m.currentTarget && !a.busy && r("close"), d.value = !1;
    }
    function k(m) {
      if (!a.open)
        return;
      if (m.key === "Escape" && !a.busy) {
        m.stopPropagation(), r("close");
        return;
      }
      if (m.key !== "Tab" || !o.value)
        return;
      const h = o.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (h.length === 0)
        return;
      const M = h[0], w = h[h.length - 1];
      m.shiftKey && document.activeElement === M ? (m.preventDefault(), w.focus()) : !m.shiftKey && document.activeElement === w && (m.preventDefault(), M.focus());
    }
    return re(
      () => a.open,
      (m) => {
        m ? (i = document.activeElement, document.addEventListener("keydown", k), we(
          () => o.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", k), i?.focus(), i = null);
      }
    ), me(() => document.removeEventListener("keydown", k)), (m, h) => (t(), D(Te, { to: "body" }, [
      E(ze, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: u,
            onPointerup: p
          }, [
            s("div", {
              ref_key: "panel",
              ref: o,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
            }, [
              s("div", Yn, [
                s("h2", Xn, f(e.title), 1),
                e.description ? (t(), n("p", Qn, f(e.description), 1)) : _("", !0)
              ]),
              s("div", el, [
                H(m.$slots, "default")
              ]),
              s("div", tl, [
                H(m.$slots, "footer")
              ])
            ], 8, Jn)
          ], 32)) : _("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), tt = {
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
function se(e) {
  return e ? tt[e] ?? tt.dot : tt.dot;
}
const al = 160, He = /* @__PURE__ */ P({
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
    const a = e, r = G(!1), o = G(null), i = G(null), d = G({ top: 0, left: 0, minWidth: 0 }), u = G(null);
    let p = null;
    function k(y) {
      !a.dismissOnPanelClick || y.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function m() {
      p && (clearTimeout(p), p = null), !r.value && (r.value = !0, await we(), g());
    }
    function h() {
      p = setTimeout(C, 180);
    }
    async function M() {
      u.value = null, r.value = !r.value, r.value && (await we(), g());
    }
    async function w(y, S) {
      u.value = { x: y, y: S }, r.value = !0, await we(), g();
    }
    function C() {
      r.value = !1, u.value = null;
    }
    function g() {
      const y = o.value, S = i.value;
      if (!y || !S)
        return;
      const B = S.getBoundingClientRect(), q = 8, N = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : y.getBoundingClientRect();
      let Y, F;
      if (a.placement === "bottom")
        Y = N.bottom + a.offset, Y + B.height > window.innerHeight - q && N.top - B.height - a.offset > q && (Y = N.top - B.height - a.offset), F = a.align === "end" && !u.value ? N.right - B.width : N.left;
      else {
        Y = N.top;
        const T = a.placement === "right", j = N.right + a.offset + B.width < window.innerWidth - q, W = N.left - a.offset - B.width > q;
        F = (T ? j || !W : !W && j) ? N.right + a.offset : N.left - a.offset - B.width;
      }
      F = Math.min(Math.max(q, F), window.innerWidth - B.width - q), Y = Math.min(Math.max(q, Y), window.innerHeight - B.height - q), d.value = { top: Y, left: F, minWidth: Math.max(N.width, al) };
    }
    function c(y) {
      if (!r.value)
        return;
      const S = y.target;
      o.value?.contains(S) || i.value?.contains(S) || (S instanceof Element ? S : S.parentElement)?.closest("[data-pk-overlay]") || C();
    }
    function x(y) {
      y.key === "Escape" && r.value && (y.stopPropagation(), C());
    }
    function v() {
      if (r.value) {
        if (u.value) {
          C();
          return;
        }
        g();
      }
    }
    return de(() => {
      document.addEventListener("pointerdown", c), document.addEventListener("keydown", x), window.addEventListener("scroll", v, !0), window.addEventListener("resize", v);
    }), me(() => {
      p && clearTimeout(p), document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", x), window.removeEventListener("scroll", v, !0), window.removeEventListener("resize", v);
    }), l({ close: C, openAt: w }), (y, S) => (t(), n("div", {
      ref_key: "root",
      ref: o,
      class: "relative",
      onPointerenter: S[2] || (S[2] = (B) => e.hoverable && m()),
      onPointerleave: S[3] || (S[3] = (B) => e.hoverable && h())
    }, [
      s("div", { onClick: M }, [
        H(y.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(Te, { to: "body" }, [
        E(ze, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
            r.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: A([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: Q({
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
              onPointerenter: S[0] || (S[0] = (B) => e.hoverable && m()),
              onPointerleave: S[1] || (S[1] = (B) => e.hoverable && h()),
              onClick: k
            }, [
              H(y.$slots, "panel", { close: C })
            ], 38)) : _("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), nl = ["disabled"], ll = { class: "py-0.5" }, sl = ["disabled", "onClick"], ol = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, rl = ["d"], il = ["disabled"], dl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ul = ["d"], cl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, fl = ["disabled", "onClick"], ml = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, pl = ["d"], vl = { class: "text-muted-foreground text-sm" }, gl = { class: "text-foreground font-medium tabular-nums" }, hl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, bl = ["disabled"], xl = { class: "text-muted-foreground text-sm" }, yl = { class: "text-foreground font-medium tabular-nums" }, kl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, $l = ["disabled"], F2 = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null), i = G(!1), d = $(() => a.allMatching ? a.total : a.count), u = $(() => d.value !== void 0), p = $(() => u.value && d.value === 0), k = $(() => a.actions.filter((x) => !x.destructive)), m = $(() => a.actions.filter((x) => x.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function M(x) {
      return h[x.color ?? "gray"] ?? h.gray;
    }
    function w(x) {
      if (x.confirmation) {
        o.value = x;
        return;
      }
      r("run", x.key);
    }
    function C() {
      o.value && r("run", o.value.key), o.value = null;
    }
    function g() {
      i.value = !1, r("export");
    }
    const c = (x) => new Intl.NumberFormat().format(x);
    return (x, v) => (t(), n(z, null, [
      E(He, null, {
        trigger: O(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...v[5] || (v[5] = [
            U(" Bulk actions ", -1),
            s("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              s("path", { d: "m6 9 6 6 6-6" })
            ], -1)
          ])], 8, nl)
        ]),
        panel: O(() => [
          s("div", ll, [
            (t(!0), n(z, null, V(k.value, (y) => (t(), n("button", {
              key: y.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(y)]),
              disabled: e.busy,
              onClick: (S) => w(y)
            }, [
              (t(), n("svg", ol, [
                s("path", {
                  d: b(se)(y.icon)
                }, null, 8, rl)
              ])),
              U(" " + f(y.label), 1)
            ], 10, sl))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: v[0] || (v[0] = (y) => i.value = !0)
            }, [
              (t(), n("svg", dl, [
                s("path", {
                  d: b(se)("download")
                }, null, 8, ul)
              ])),
              v[6] || (v[6] = U(" Export CSV ", -1))
            ], 8, il)) : _("", !0),
            m.value.length ? (t(), n("div", cl, [
              (t(!0), n(z, null, V(m.value, (y) => (t(), n("button", {
                key: y.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (S) => w(y)
              }, [
                (t(), n("svg", ml, [
                  s("path", {
                    d: b(se)(y.icon ?? "trash")
                  }, null, 8, pl)
                ])),
                U(" " + f(y.label), 1)
              ], 8, fl))), 128))
            ])) : _("", !0)
          ])
        ]),
        _: 1
      }),
      E(rt, {
        open: o.value !== null,
        title: o.value?.label ?? "",
        description: o.value?.confirmation ?? "",
        onClose: v[2] || (v[2] = (y) => o.value = null)
      }, {
        footer: O(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: v[1] || (v[1] = (y) => o.value = null)
          }, " Cancel "),
          s("button", {
            type: "button",
            class: A([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              o.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || p.value,
            onClick: C
          }, f(o.value?.label), 11, bl)
        ]),
        default: O(() => [
          s("p", vl, [
            v[7] || (v[7] = U(" This will affect ", -1)),
            s("span", gl, [
              u.value ? (t(), n(z, { key: 1 }, [
                U(f(c(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            v[8] || (v[8] = U(" . ", -1))
          ]),
          p.value ? (t(), n("p", hl, " Nothing matches the current filters - there is nothing to " + f(o.value?.label?.toLowerCase()) + ". ", 1)) : _("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(rt, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: v[4] || (v[4] = (y) => i.value = !1)
      }, {
        footer: O(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: v[3] || (v[3] = (y) => i.value = !1)
          }, " Cancel "),
          s("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || p.value,
            onClick: g
          }, " Export CSV ", 8, $l)
        ]),
        default: O(() => [
          s("p", xl, [
            v[9] || (v[9] = U(" This will export ", -1)),
            s("span", yl, [
              u.value ? (t(), n(z, { key: 1 }, [
                U(f(c(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            v[10] || (v[10] = U(" . ", -1))
          ]),
          p.value ? (t(), n("p", kl, " Nothing matches the current filters - there is nothing to export. ")) : _("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), wl = { class: "bg-card overflow-hidden rounded-lg border" }, Cl = { class: "pk-scroll w-full overflow-x-auto" }, _l = { class: "w-full border-collapse text-sm" }, Ml = { class: "bg-muted/40" }, Sl = { class: "divide-y" }, Bl = { key: 0 }, zl = ["colspan"], Pl = { key: 1 }, Al = ["colspan"], jl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Ol = ["disabled"], Ll = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, I2 = /* @__PURE__ */ P({
  __name: "RelationPanel",
  props: {
    columns: {},
    rows: {},
    loading: { type: Boolean, default: !1 },
    nextCursor: { default: null },
    capped: { type: Boolean, default: !1 },
    loaded: { type: Boolean, default: !1 },
    emptyText: { default: "Nothing here yet." }
  },
  emits: ["load"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(() => a.columns.filter((d) => d.type !== "image"));
    function i(d, u) {
      return u == null || u === "" ? "-" : d.type === "date" || d.type === "datetime" ? new Date(String(u)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...d.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof u == "number" ? new Intl.NumberFormat().format(u) : String(u);
    }
    return (d, u) => (t(), n("div", wl, [
      s("div", Cl, [
        s("table", _l, [
          s("thead", Ml, [
            s("tr", null, [
              (t(!0), n(z, null, V(o.value, (p) => (t(), n("th", {
                key: p.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, f(p.label), 1))), 128))
            ])
          ]),
          s("tbody", Sl, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", Bl, [
              s("td", {
                colspan: o.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, zl)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", Pl, [
              s("td", {
                colspan: o.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, f(e.emptyText), 9, Al)
            ])) : _("", !0),
            (t(!0), n(z, null, V(e.rows, (p, k) => (t(), n("tr", {
              key: p.id ?? k,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(z, null, V(o.value, (m) => (t(), n("td", {
                key: m.key,
                class: A(["px-3 py-2 whitespace-nowrap", [
                  m.mono ? "font-mono text-xs" : "",
                  m.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                H(d.$slots, `cell:${m.key}`, {
                  row: p,
                  value: p[m.key],
                  column: m
                }, () => [
                  U(f(i(m, p[m.key])), 1)
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", jl, [
        s("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: u[0] || (u[0] = (p) => r("load", e.nextCursor))
        }, f(e.loading ? "Loading…" : "Load more"), 9, Ol)
      ])) : e.capped ? (t(), n("p", Ll, " Showing the first " + f(e.rows.length) + ". Open the full list to search or filter the rest. ", 1)) : _("", !0)
    ]));
  }
}), Vl = ["title"], Dl = ["aria-label"], Tl = ["d"], El = { class: "sr-only" }, N2 = /* @__PURE__ */ P({
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
    }, o = $(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = $(() => l.icons[o.value] ?? l.defaultIcon), d = $(() => a[i.value] ?? a.dot), u = $(() => r[l.colors[o.value] ?? "neutral"] ?? r.neutral), p = $(() => l.labels[o.value] ?? String(l.value ?? "-"));
    return (k, m) => (t(), n("span", {
      class: "inline-flex items-center",
      title: p.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: A(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": p.value
      }, [
        s("path", { d: d.value }, null, 8, Tl)
      ], 10, Dl)),
      s("span", El, f(p.value), 1)
    ], 8, Vl));
  }
}), Fl = ["src"], Il = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, R2 = /* @__PURE__ */ P({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const l = e, a = G(!1);
    re(
      () => l.src,
      () => a.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, o = $(() => {
      const d = typeof l.src == "string" ? l.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = $(() => {
      const d = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), n("span", {
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      o.value && !a.value ? (t(), n("img", {
        key: 0,
        src: o.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (p) => a.value = !0)
      }, null, 40, Fl)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        U(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Il, [...u[1] || (u[1] = [
        s("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : _("", !0)
    ], 2));
  }
}), Nl = {
  key: 0,
  class: "text-muted-foreground"
}, Rl = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Ul = {
  key: 0,
  class: "font-mono text-xs"
}, Hl = {
  key: 1,
  class: "sr-only"
}, U2 = /* @__PURE__ */ P({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = $(() => {
      const o = (l.value ?? "").trim();
      return a.test(o) ? o : null;
    });
    return (o, i) => r.value === null ? (t(), n("span", Nl, "-")) : (t(), n("span", Rl, [
      s("span", {
        class: "size-4 shrink-0 rounded border",
        style: Q({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Ul, f(r.value), 1)) : (t(), n("span", Hl, f(r.value), 1))
    ]));
  }
}), Kl = { class: "inline-flex items-center" }, ql = ["checked", "aria-label"], Gl = { class: "sr-only" }, H2 = /* @__PURE__ */ P({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, a = $(() => {
      const o = l.value;
      return typeof o == "string" ? o !== "" && o !== "0" && o.toLowerCase() !== "false" : !!o;
    }), r = $(
      () => a.value ? l.trueLabel ?? "Yes" : l.falseLabel ?? "No"
    );
    return (o, i) => (t(), n("span", Kl, [
      s("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, ql),
      s("span", Gl, f(r.value), 1)
    ]));
  }
}), Wl = {
  key: 0,
  class: "text-muted-foreground"
}, Zl = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, K2 = /* @__PURE__ */ P({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = $(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, o) => a.value ? (t(), n("code", Zl, f(a.value), 1)) : (t(), n("span", Wl, "—"));
  }
}), Jl = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Yl = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Xl = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Gt(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Jl, Yl[l], Xl[a], e.class].filter(Boolean).join(" ");
}
const ne = /* @__PURE__ */ P({
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
    const l = e, a = $(
      () => Gt({ variant: l.variant, size: l.size, class: l.class })
    ), r = $(() => l.as === "button" ? l.type : void 0);
    return (o, i) => (t(), D(Pe(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: A(a.value)
    }, {
      default: O(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), Ql = { class: "flex items-center gap-2" }, es = ["onUpdate:modelValue", "onChange"], ts = ["value"], as = ["onUpdate:modelValue"], ns = ["value"], ls = ["onUpdate:modelValue"], ss = ["onUpdate:modelValue", "multiple"], os = ["value"], rs = ["onUpdate:modelValue", "type"], is = ["aria-label", "onClick"], ds = { class: "flex items-center gap-2" }, us = /* @__PURE__ */ P({
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
    const a = e, r = l, o = () => ({ logic: "and", rules: [] }), i = G(a.modelValue ? structuredClone(a.modelValue) : o());
    re(
      () => a.modelValue,
      (v) => {
        i.value = v ? structuredClone(v) : o();
      }
    );
    const d = (v) => "rules" in v, u = $(() => Object.keys(a.fields));
    function p(v) {
      const y = v ? a.fields[v]?.kind : void 0;
      return y ? a.operators[y] ?? [] : [];
    }
    const k = {
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
    function h() {
      const v = u.value[0];
      i.value.rules.push({
        field: v,
        operator: p(v)[0],
        value: void 0
      }), m();
    }
    function M() {
      i.value.rules.push(o()), m();
    }
    function w(v) {
      i.value.rules.splice(v, 1), m();
    }
    function C(v) {
      v.operator = p(v.field)[0], v.value = void 0, m();
    }
    const g = $(() => a.depth + 1 < a.maxDepth);
    function c() {
      i.value = o(), m(), r("apply", null);
    }
    function x() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (v, y) => {
      const S = pt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        s("div", Ql, [
          oe(s("select", {
            "onUpdate:modelValue": y[0] || (y[0] = (B) => i.value.logic = B),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: m
          }, [...y[1] || (y[1] = [
            s("option", { value: "and" }, "Match all", -1),
            s("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Oe, i.value.logic]
          ]),
          y[2] || (y[2] = s("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, V(i.value.rules, (B, q) => (t(), n("div", {
          key: q,
          class: "flex items-start gap-2"
        }, [
          d(B) ? (t(), D(S, {
            key: 0,
            modelValue: i.value.rules[q],
            "onUpdate:modelValue": [(N) => i.value.rules[q] = N, m],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            oe(s("select", {
              "onUpdate:modelValue": (N) => B.field = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (N) => C(B)
            }, [
              (t(!0), n(z, null, V(u.value, (N) => (t(), n("option", {
                key: N,
                value: N
              }, f(e.fields[N].label), 9, ts))), 128))
            ], 40, es), [
              [Oe, B.field]
            ]),
            oe(s("select", {
              "onUpdate:modelValue": (N) => B.operator = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: m
            }, [
              (t(!0), n(z, null, V(p(B.field), (N) => (t(), n("option", {
                key: N,
                value: N
              }, f(k[N] ?? N), 9, ns))), 128))
            ], 40, as), [
              [Oe, B.operator]
            ]),
            B.field && e.fields[B.field]?.kind === "boolean" ? oe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (N) => B.value = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [...y[3] || (y[3] = [
              s("option", { value: !0 }, "Yes", -1),
              s("option", { value: !1 }, "No", -1)
            ])], 40, ls)), [
              [Oe, B.value]
            ]) : B.field && e.fields[B.field]?.options?.length ? oe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (N) => B.value = N,
              multiple: e.fields[B.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [
              (t(!0), n(z, null, V(e.fields[B.field].options, (N) => (t(), n("option", {
                key: N,
                value: N
              }, f(N), 9, os))), 128))
            ], 40, ss)), [
              [Oe, B.value]
            ]) : oe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (N) => B.value = N,
              type: B.field && e.fields[B.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, null, 40, rs)), [
              [ra, B.value]
            ])
          ], 64)),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(B) ? "group" : "rule"}`,
            onClick: (N) => w(q)
          }, " × ", 8, is)
        ]))), 128)),
        s("div", ds, [
          E(ne, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: O(() => [...y[4] || (y[4] = [
              U("Add rule", -1)
            ])]),
            _: 1
          }),
          g.value ? (t(), D(ne, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: O(() => [...y[5] || (y[5] = [
              U(" Add group ", -1)
            ])]),
            _: 1
          })) : _("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            y[8] || (y[8] = s("span", { class: "flex-1" }, null, -1)),
            E(ne, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: c
            }, {
              default: O(() => [...y[6] || (y[6] = [
                U(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(ne, {
              type: "button",
              size: "sm",
              onClick: x
            }, {
              default: O(() => [...y[7] || (y[7] = [
                U(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : _("", !0)
        ])
      ], 2);
    };
  }
}), cs = {
  key: 0,
  class: "font-mono text-xs"
}, fs = {
  key: 1,
  class: "text-muted-foreground"
}, ms = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, q2 = /* @__PURE__ */ P({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = $(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, o) => a.value === null && e.value != null ? (t(), n("span", cs, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", fs, "—")) : (t(), n("span", ms, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), ps = ["aria-checked", "aria-label", "title", "disabled"], vs = ["value", "disabled"], gs = ["value"], G2 = /* @__PURE__ */ P({
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
    const a = e, r = l, o = $(() => a.value === !0 || a.value === 1 || a.value === "1"), i = $(() => a.busy || a.disabled), d = $(
      () => o.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !o.value);
    }
    function p(k) {
      const m = k.target.value;
      m !== String(a.value ?? "") && r("change", m);
    }
    return (k, m) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": o.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: A(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", o.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ce(u, ["stop"])
    }, [
      s("span", {
        class: A(["bg-background size-4 rounded-full shadow-sm transition-transform", o.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, ps)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: m[0] || (m[0] = ce(() => {
      }, ["stop"])),
      onChange: p
    }, [
      (t(!0), n(z, null, V(e.options, (h, M) => (t(), n("option", {
        key: M,
        value: M
      }, f(h), 9, gs))), 128))
    ], 40, vs));
  }
}), hs = ["data-variant"], bs = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Re = /* @__PURE__ */ P({
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
    }, r = $(
      () => [bs, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (o, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      H(o.$slots, "default")
    ], 10, hs));
  }
}), kt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function xs(e) {
  return e != null && e !== "";
}
function ys(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function W2(e) {
  const l = $(
    () => e.value.map((o) => ({
      key: o.key,
      label: o.label,
      sortable: o.sortable,
      sortKey: o.sortKey,
      locked: o.locked,
      copyable: o.copyable,
      cellClass: ys(o)
    }))
  ), a = $(() => Object.fromEntries(e.value.map((o) => [o.key, o])));
  function r(o, i) {
    const d = a.value[o];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), p = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return kt[p] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const ks = ["disabled", "aria-label", "aria-busy"], $s = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ws = ["d"], Cs = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, _s = ["disabled", "onClick"], Ms = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Ss = ["d"], Bs = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Z2 = /* @__PURE__ */ P({
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
    const a = e, r = l, o = $(() => a.busy || a.disabled), i = $(() => String(a.value ?? "")), d = $(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function u(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function p(h) {
      const M = a.colors[u(h)] ?? a.defaultColor ?? "neutral";
      return kt[M] ?? "outline";
    }
    function k(h) {
      return a.options[h] ?? h;
    }
    function m(h, M) {
      if (o.value || h === i.value) {
        M();
        return;
      }
      r("change", h), M();
    }
    return (h, M) => (t(), n("div", {
      onClick: M[0] || (M[0] = ce(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(Re, {
        key: 1,
        variant: p(e.value),
        class: "capitalize"
      }, {
        default: O(() => [
          U(f(k(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), D(He, {
        key: 0,
        align: "start"
      }, {
        trigger: O(() => [
          s("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: o.value,
            "aria-label": d.value,
            "aria-busy": e.busy
          }, [
            E(Re, {
              variant: p(e.value),
              class: "capitalize"
            }, {
              default: O(() => [
                U(f(k(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", $s, [
              s("path", {
                d: b(se)("chevron-down")
              }, null, 8, ws)
            ]))
          ], 8, ks)
        ]),
        panel: O(({ close: w }) => [
          s("div", Cs, f(d.value), 1),
          (t(!0), n(z, null, V(e.options, (C, g) => (t(), n("button", {
            key: g,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: o.value,
            onClick: (c) => m(String(g), w)
          }, [
            E(Re, {
              variant: p(g),
              class: "capitalize"
            }, {
              default: O(() => [
                U(f(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(g) === i.value ? (t(), n("svg", Ms, [
              s("path", {
                d: b(se)("check")
              }, null, 8, Ss)
            ])) : (t(), n("span", Bs))
          ], 8, _s))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), zs = { class: "flex items-center justify-end" }, Ps = ["aria-label"], As = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, js = ["d"], Os = ["href"], Ls = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vs = ["d"], Ds = ["disabled", "onClick"], Ts = ["d"], Es = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Fs = ["disabled", "onClick"], Is = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ns = ["d"], J2 = /* @__PURE__ */ P({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, o = a, i = G(null), d = G(null), u = $(() => r.groups.flatMap((c) => c.actions)), p = $(() => u.value.filter((c) => !c.destructive)), k = $(() => u.value.filter((c) => c.destructive)), m = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(c) {
      return m[c.color ?? "gray"] ?? m.gray;
    }
    const M = $(() => u.value.length === 0);
    function w(c) {
      o("run", c);
    }
    function C(c) {
      M.value || (c.preventDefault(), i.value?.openAt(c.clientX, c.clientY));
    }
    function g(c) {
      if (c.key !== "ArrowDown" && c.key !== "ArrowUp")
        return;
      const x = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (x.length === 0)
        return;
      c.preventDefault();
      const v = x.indexOf(document.activeElement), y = c.key === "ArrowDown" ? 1 : -1, S = (v + y + x.length) % x.length;
      x[S]?.focus();
    }
    return l({ openContextMenu: C }), (c, x) => (t(), n("div", zs, [
      M.value ? _("", !0) : (t(), D(He, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: O(() => [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), n("svg", As, [
              s("path", {
                d: b(se)("more-vertical")
              }, null, 8, js)
            ]))
          ], 8, Ps)
        ]),
        panel: O(() => [
          s("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: g
          }, [
            (t(!0), n(z, null, V(p.value, (v) => (t(), n(z, {
              key: v.key
            }, [
              v.link ? (t(), n("a", {
                key: 0,
                href: v.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(v)])
              }, [
                (t(), n("svg", Ls, [
                  s("path", {
                    d: b(se)(v.icon)
                  }, null, 8, Vs)
                ])),
                U(" " + f(v.label), 1)
              ], 10, Os)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(v)]),
                disabled: e.busy === v.key,
                onClick: (y) => w(v)
              }, [
                (t(), n("svg", {
                  class: A(["size-4 shrink-0", e.busy === v.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  s("path", {
                    d: b(se)(v.icon)
                  }, null, 8, Ts)
                ], 2)),
                U(" " + f(v.label), 1)
              ], 10, Ds))
            ], 64))), 128)),
            k.value.length ? (t(), n("div", Es, [
              (t(!0), n(z, null, V(k.value, (v) => (t(), n("button", {
                key: v.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === v.key,
                onClick: (y) => w(v)
              }, [
                (t(), n("svg", Is, [
                  s("path", {
                    d: b(se)(v.icon ?? "trash")
                  }, null, 8, Ns)
                ])),
                U(" " + f(v.label), 1)
              ], 8, Fs))), 128))
            ])) : _("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), it = {
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
}, dt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, Ze = 12, Je = 20, Rs = [0, 0.25, 0.5, 0.75, 1], $t = "alxtexhpanel.appearance", $e = {
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
}, Se = G({ ...$e });
let Bt = !1;
const Us = "alxtexhpanel.appearance.vars";
function ut(e) {
  return e.theme === "dark";
}
const zt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function Hs(e) {
  const l = it[e.primary] ?? it.slate, a = dt[e.surface] ?? dt.neutral, r = a.chroma, o = a.hue, d = ut(e) ? {
    "--background": `oklch(0.15 ${r} ${o})`,
    "--card": `oklch(${e.cardStyle === "filled" ? 0.19 : 0.15} ${r} ${o})`,
    "--popover": `oklch(0.18 ${r} ${o})`,
    "--muted": `oklch(0.24 ${r} ${o})`,
    "--accent": `oklch(0.24 ${r} ${o})`,
    "--border": `oklch(0.27 ${r} ${o})`,
    "--input": `oklch(0.27 ${r} ${o})`
  } : {
    "--background": "oklch(1 0 0)",
    "--card": `oklch(${e.cardStyle === "filled" ? 0.985 : 1} ${r} ${o})`,
    "--popover": "oklch(1 0 0)",
    "--muted": `oklch(0.965 ${r} ${o})`,
    "--accent": `oklch(0.965 ${r} ${o})`,
    "--border": `oklch(0.925 ${r} ${o})`,
    "--input": `oklch(0.90 ${r} ${o})`
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
    "--pk-row-padding": zt[e.density] ?? zt.comfortable
  };
}
function wt() {
  if (typeof window > "u")
    return { ...$e };
  try {
    const e = localStorage.getItem($t);
    if (!e)
      return { ...$e };
    const l = { ...$e, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = $e.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? $e.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < Ze || l.fontSize > Je) && (l.fontSize = $e.fontSize), l;
  } catch {
    return { ...$e };
  }
}
function Y2(e) {
  const l = wt(), a = e ? { ...l, ...e } : l;
  if (Se.value = a, ct(a), e)
    try {
      localStorage.setItem($t, JSON.stringify(a));
    } catch {
    }
}
let Wt = null;
function X2(e) {
  Wt = e;
}
let Zt = {};
function Ks(e) {
  if (Zt = e, !(typeof document > "u") && !wt().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function ct(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...Hs(e), ...e.primaryChosen ? {} : Zt };
  l.classList.toggle("dark", ut(e));
  for (const [r, o] of Object.entries(a))
    l.style.setProperty(r, o);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Us,
      JSON.stringify({ dark: ut(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function Jt() {
  function e(r) {
    ct(r);
  }
  function l(r) {
    const o = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Se.value = { ...Se.value, ...r, ...o };
    try {
      localStorage.setItem($t, JSON.stringify(Se.value));
    } catch {
    }
    e(Se.value), Wt?.({ ...r, ...o });
  }
  function a() {
    l({ ...$e });
  }
  return de(() => {
    Bt || (Bt = !0, Se.value = wt(), ct(Se.value));
  }), {
    appearance: $(() => Se.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: it,
    SURFACE_TINTS: dt,
    FONT_SIZE_MIN: Ze,
    FONT_SIZE_MAX: Je,
    RADIUS_OPTIONS: Rs
  };
}
const qs = { class: "flex items-center justify-between border-b px-4 py-3" }, Gs = { class: "flex items-center gap-2" }, Ws = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Zs = { class: "flex flex-col gap-2" }, Js = { class: "grid grid-cols-8 gap-2" }, Ys = ["title", "aria-label", "aria-pressed", "onClick"], Xs = { class: "flex flex-col gap-2" }, Qs = { class: "grid grid-cols-8 gap-2" }, eo = ["title", "aria-label", "aria-pressed", "onClick"], to = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, ao = { class: "flex flex-col gap-2" }, no = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, lo = ["aria-pressed", "aria-label", "onClick"], so = { class: "text-sm font-semibold" }, oo = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ro = ["onClick"], io = { class: "flex flex-col gap-2" }, uo = { class: "flex items-center justify-between" }, co = { class: "text-muted-foreground text-xs tabular-nums" }, fo = { class: "flex items-center gap-2" }, mo = ["disabled"], po = ["min", "max", "value"], vo = ["disabled"], Q2 = /* @__PURE__ */ P({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: o, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Jt(), u = G(!1), p = $(() => l.value.sidebarSide === "right"), k = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], m = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], h = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], M = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], w = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], C = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function g(c, x) {
      return `oklch(0.72 ${x * 3} ${c})`;
    }
    return (c, x) => (t(), n(z, null, [
      s("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: x[0] || (x[0] = (v) => u.value = !0)
      }, [...x[7] || (x[7] = [
        mt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), D(Te, { to: "body" }, [
        E(ze, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: O(() => [
            u.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: x[1] || (x[1] = (v) => u.value = !1)
            })) : _("", !0)
          ]),
          _: 1
        }),
        E(ze, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": p.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": p.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: O(() => [
            u.value ? (t(), n("aside", {
              key: 0,
              class: A(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", p.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              s("header", qs, [
                x[9] || (x[9] = s("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                s("div", Gs, [
                  s("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: x[2] || (x[2] = //@ts-ignore
                    (...v) => b(r) && b(r)(...v))
                  }, " Reset "),
                  s("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: x[3] || (x[3] = (v) => u.value = !1)
                  }, [...x[8] || (x[8] = [
                    s("svg", {
                      viewBox: "0 0 24 24",
                      class: "size-4",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      s("path", { d: "M18 6 6 18M6 6l12 12" })
                    ], -1)
                  ])])
                ])
              ]),
              s("div", Ws, [
                s("section", Zs, [
                  x[11] || (x[11] = s("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  s("div", Js, [
                    (t(!0), n(z, null, V(b(o), (v, y) => (t(), n("button", {
                      key: y,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: Q({ background: v.value }),
                      title: v.label,
                      "aria-label": v.label,
                      "aria-pressed": b(l).primary === y,
                      onClick: (S) => b(a)({ primary: y })
                    }, [
                      b(l).primary === y ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: Q({ color: v.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...x[10] || (x[10] = [
                        s("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : _("", !0)
                    ], 12, Ys))), 128))
                  ])
                ]),
                s("section", Xs, [
                  x[13] || (x[13] = s("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  s("div", Qs, [
                    (t(!0), n(z, null, V(b(i), (v, y) => (t(), n("button", {
                      key: y,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: Q({ background: g(v.hue, v.chroma) }),
                      title: v.label,
                      "aria-label": v.label,
                      "aria-pressed": b(l).surface === y,
                      onClick: (S) => b(a)({ surface: y })
                    }, [
                      b(l).surface === y ? (t(), n("svg", to, [...x[12] || (x[12] = [
                        s("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : _("", !0)
                    ], 12, eo))), 128))
                  ])
                ]),
                s("section", ao, [
                  x[14] || (x[14] = s("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  s("div", no, [
                    (t(!0), n(z, null, V(b(d), (v) => (t(), n("button", {
                      key: v,
                      type: "button",
                      class: A([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l).radius === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": b(l).radius === v,
                      "aria-label": `${v}rem radius`,
                      onClick: (y) => b(a)({ radius: v })
                    }, [
                      s("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: Q({ borderRadius: `${Math.min(v, 0.5)}rem` })
                      }, null, 4),
                      U(" " + f(v), 1)
                    ], 10, lo))), 128))
                  ])
                ]),
                (t(!0), n(z, null, V([
                  { label: "Color scheme", key: "theme", options: k },
                  { label: "Card style", key: "cardStyle", options: h },
                  { label: "Table density", key: "density", options: m },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: C }
                ], (v) => (t(), n("section", {
                  key: v.key,
                  class: "flex flex-col gap-2"
                }, [
                  s("h3", so, f(v.label), 1),
                  s("div", oo, [
                    (t(!0), n(z, null, V(v.options, (y) => (t(), n("button", {
                      key: String(y.value),
                      type: "button",
                      class: A([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l)[v.key] === y.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (S) => b(a)({ [v.key]: y.value })
                    }, f(y.label), 11, ro))), 128))
                  ])
                ]))), 128)),
                s("section", io, [
                  s("div", uo, [
                    x[15] || (x[15] = s("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    s("span", co, f(b(l).fontSize) + "px", 1)
                  ]),
                  s("div", fo, [
                    s("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize <= b(Ze),
                      "aria-label": "Decrease font size",
                      onClick: x[4] || (x[4] = (v) => b(a)({ fontSize: b(l).fontSize - 1 }))
                    }, " − ", 8, mo),
                    s("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(Ze),
                      max: b(Je),
                      value: b(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: x[5] || (x[5] = (v) => b(a)({
                        fontSize: Number(v.target.value)
                      }))
                    }, null, 40, po),
                    s("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize >= b(Je),
                      "aria-label": "Increase font size",
                      onClick: x[6] || (x[6] = (v) => b(a)({ fontSize: b(l).fontSize + 1 }))
                    }, " + ", 8, vo)
                  ])
                ])
              ])
            ], 2)) : _("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), go = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, ho = { class: "flex items-stretch" }, bo = ["href", "aria-current"], xo = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yo = ["d"], ko = { class: "w-full truncate text-center" }, $o = {
  key: 0,
  class: "flex-1"
}, wo = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Co = ["d"], _o = { class: "w-full truncate text-center" }, at = 5, ek = /* @__PURE__ */ P({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(
      () => a.items.length <= at ? a.items : a.items.slice(0, at - 1)
    ), i = $(() => a.items.length > at);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, p) => (t(), n("nav", go, [
      s("ul", ho, [
        (t(!0), n(z, null, V(o.value, (k) => (t(), n("li", {
          key: k.key,
          class: "flex-1"
        }, [
          s("a", {
            href: k.href,
            class: A([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(k.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(k.href) ? "page" : void 0
          }, [
            (t(), n("svg", xo, [
              s("path", {
                d: b(se)(k.icon)
              }, null, 8, yo)
            ])),
            s("span", ko, f(k.title), 1)
          ], 10, bo)
        ]))), 128)),
        i.value ? (t(), n("li", $o, [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: p[0] || (p[0] = (k) => r("more"))
          }, [
            (t(), n("svg", wo, [
              s("path", {
                d: b(se)("more-horizontal")
              }, null, 8, Co)
            ])),
            s("span", _o, f(e.moreLabel), 1)
          ])
        ])) : _("", !0)
      ])
    ]));
  }
}), Mo = ["value"], So = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", fe = /* @__PURE__ */ P({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    return (o, i) => (t(), n("input", {
      "data-slot": "input",
      value: a.modelValue ?? a.defaultValue,
      class: A([So, a.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, Mo));
  }
}), Bo = ["for"], he = /* @__PURE__ */ P({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, a) => (t(), n("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: A([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      H(l.$slots, "default")
    ], 10, Bo));
  }
}), tk = /* @__PURE__ */ P({
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
      class: A(["size-4 animate-spin", l.$props.class])
    }, [...a[0] || (a[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      s("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), zo = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Po = ["id", "name", "value", "disabled", "maxlength"], Ao = ["data-active"], jo = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, ak = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(!1), i = G(null);
    de(() => {
      a.autofocus && i.value?.focus();
    });
    const d = $(
      () => Array.from({ length: a.length }, (k, m) => a.modelValue[m] ?? "")
    ), u = $(() => Math.min(a.modelValue.length, a.length - 1));
    function p(k) {
      const m = k.target.value;
      r("update:modelValue", m.replace(/\D/g, "").slice(0, a.length));
    }
    return (k, m) => (t(), n("div", zo, [
      s("input", {
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
        onInput: p,
        onFocus: m[0] || (m[0] = (h) => o.value = !0),
        onBlur: m[1] || (m[1] = (h) => o.value = !1)
      }, null, 40, Po),
      (t(!0), n(z, null, V(d.value, (h, M) => (t(), n("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": o.value && M === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(f(h) + " ", 1),
        o.value && M === u.value && h === "" ? (t(), n("div", jo, [...m[2] || (m[2] = [
          s("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : _("", !0)
      ], 8, Ao))), 128))
    ]));
  }
}), Oo = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Be = /* @__PURE__ */ P({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (l, a) => (t(), n("header", {
      class: A(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      s("h2", {
        class: A(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), n("p", Oo, f(e.description), 1)) : _("", !0)
    ], 2));
  }
});
function J(...e) {
  return Sa(Ma(e));
}
function nk(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Lo = /* @__PURE__ */ P({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: A(b(J)(b(To)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Vo = /* @__PURE__ */ P({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: A(b(J)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Do = /* @__PURE__ */ P({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: A(b(J)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), To = gt(
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
), Eo = { class: "list-inside list-disc text-sm" }, lk = /* @__PURE__ */ P({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = $(() => Array.from(new Set(l.errors)));
    return (r, o) => (t(), D(b(Lo), { variant: "destructive" }, {
      default: O(() => [
        E(b(ha), { class: "size-4" }),
        E(b(Do), null, {
          default: O(() => [
            U(f(e.title), 1)
          ]),
          _: 1
        }),
        E(b(Vo), null, {
          default: O(() => [
            s("ul", Eo, [
              (t(!0), n(z, null, V(a.value, (i, d) => (t(), n("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Yt = /* @__PURE__ */ P({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, o = It(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, d) => oe((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => ia(o) ? o.value = u : null),
      "data-slot": "input",
      class: A(
        b(J)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Ce, b(o)]
    ]);
  }
}), Fo = { class: "relative" }, Io = ["aria-label"], sk = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = G(!1), o = da("inputRef");
    return l({
      $el: o,
      focus: () => o.value?.$el?.focus()
    }), (i, d) => (t(), n("div", Fo, [
      E(b(Yt), ee({
        ref_key: "inputRef",
        ref: o,
        type: r.value ? "text" : "password",
        class: b(J)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      s("button", {
        type: "button",
        class: A(
          b(J)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), D(b(ba), {
          key: 0,
          class: "size-4"
        })) : (t(), D(b(xa), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Io)
    ]));
  }
}), Xt = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", No = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Ro = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Uo(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Ho(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Ko(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await qo(l), r = document.createElement("canvas"), o = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = o, r.height = i;
    const d = r.getContext("2d", { willReadFrequently: !0 });
    if (!d)
      return !1;
    d.drawImage(a, 0, 0);
    const { data: u } = d.getImageData(0, 0, o, i);
    for (let p = 3; p < u.length; p += 4)
      if ((u[p] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function qo(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Go(e) {
  if (Uo(e))
    throw new Error(Ro);
  if (!Ho(e))
    throw new Error(Xt);
  if (!await Ko(e))
    throw new Error(No);
}
const Wo = /* @__PURE__ */ P({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = ue(e, l);
    return (i, d) => (t(), D(b(Nt), ee({ "data-slot": "sheet" }, b(o)), {
      default: O((u) => [
        H(i.$slots, "default", be(Me(u)))
      ]),
      _: 3
    }, 16));
  }
}), ok = /* @__PURE__ */ P({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Ee), ee({ "data-slot": "sheet-close" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zo = /* @__PURE__ */ P({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(ht), ee({
      "data-slot": "sheet-overlay",
      class: b(J)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, b(a)), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jo = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class", "side"), i = ue(o, r);
    return (d, u) => (t(), D(b(bt), null, {
      default: O(() => [
        E(Zo),
        E(b(xt), ee({
          "data-slot": "sheet-content",
          class: b(J)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...b(i) }), {
          default: O(() => [
            H(d.$slots, "default"),
            E(b(Ee), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: O(() => [
                E(b(vt), { class: "size-4" }),
                u[0] || (u[0] = s("span", { class: "sr-only" }, "Close", -1))
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
}), Yo = /* @__PURE__ */ P({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(Rt), ee({
      "data-slot": "sheet-description",
      class: b(J)("text-muted-foreground text-sm", l.class)
    }, b(a)), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rk = /* @__PURE__ */ P({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: A(b(J)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Xo = /* @__PURE__ */ P({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: A(b(J)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Qo = /* @__PURE__ */ P({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(Ut), ee({
      "data-slot": "sheet-title",
      class: b(J)("text-foreground font-semibold", l.class)
    }, b(a)), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ik = /* @__PURE__ */ P({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Ht), ee({ "data-slot": "sheet-trigger" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pt = "sidebar_state", er = 3600 * 24 * 7, tr = "16rem", ar = "18rem", nr = "3rem", lr = "b", [Qe, sr] = Aa("Sidebar"), or = { class: "flex h-full w-full flex-col" }, rr = ["data-state", "data-collapsible", "data-variant", "data-side"], ir = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, dk = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: o, setOpenMobile: i } = Qe();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", ee({
      key: 0,
      "data-slot": "sidebar",
      class: b(J)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      H(d.$slots, "default")
    ], 16)) : b(a) ? (t(), D(b(Wo), ee({
      key: 1,
      open: b(o)
    }, d.$attrs, { "onUpdate:open": b(i) }), {
      default: O(() => [
        E(b(Jo), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: Q({
            "--sidebar-width": b(ar)
          })
        }, {
          default: O(() => [
            E(Xo, { class: "sr-only" }, {
              default: O(() => [
                E(Qo, null, {
                  default: O(() => [...u[0] || (u[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(Yo, null, {
                  default: O(() => [...u[1] || (u[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            s("div", or, [
              H(d.$slots, "default")
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
      s("div", {
        class: A(
          b(J)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      s("div", ee({
        class: b(J)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        s("div", ir, [
          H(d.$slots, "default")
        ])
      ], 16)
    ], 8, rr));
  }
}), uk = /* @__PURE__ */ P({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: A(
        b(J)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), ck = /* @__PURE__ */ P({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(b(J)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), fk = /* @__PURE__ */ P({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(b(J)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), mk = /* @__PURE__ */ P({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Fe), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        b(J)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), pk = /* @__PURE__ */ P({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(b(J)("w-full text-sm", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), vk = /* @__PURE__ */ P({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Fe), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        b(J)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), gk = /* @__PURE__ */ P({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(b(J)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), hk = /* @__PURE__ */ P({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Yt), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(b(J)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bk = /* @__PURE__ */ P({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: A(
        b(J)(
          "bg-background relative flex w-full flex-1 flex-col",
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
      H(a.$slots, "default")
    ], 2));
  }
}), xk = /* @__PURE__ */ P({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(b(J)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), yk = /* @__PURE__ */ P({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Fe), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: A(
        b(J)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), kk = /* @__PURE__ */ P({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: A(
        b(J)(
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
      H(a.$slots, "default")
    ], 2));
  }
}), dr = /* @__PURE__ */ P({
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
    const o = ue(e, l);
    return (i, d) => (t(), D(b(ja), ee({ "data-slot": "tooltip" }, b(o)), {
      default: O((u) => [
        H(i.$slots, "default", be(Me(u)))
      ]),
      _: 3
    }, 16));
  }
}), ur = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(Oa), null, {
      default: O(() => [
        E(b(La), ee({ "data-slot": "tooltip-content" }, { ...b(i), ...d.$attrs }, {
          class: b(J)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: O(() => [
            H(d.$slots, "default"),
            E(b(Va), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), $k = /* @__PURE__ */ P({
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
    return (a, r) => (t(), D(b(Kt), be(Me(l)), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cr = /* @__PURE__ */ P({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Da), ee({ "data-slot": "tooltip-trigger" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), At = /* @__PURE__ */ P({
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
    return (a, r) => (t(), D(b(Fe), ee({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: b(J)(b(mr)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), wk = /* @__PURE__ */ P({
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
    const l = e, { isMobile: a, state: r } = Qe(), o = le(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), D(b(dr), { key: 1 }, {
      default: O(() => [
        E(b(cr), { "as-child": "" }, {
          default: O(() => [
            E(At, be(Me({ ...b(o), ...i.$attrs })), {
              default: O(() => [
                H(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(b(ur), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(a)
        }, {
          default: O(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              U(f(e.tooltip), 1)
            ], 64)) : (t(), D(Pe(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D(At, be(ee({ key: 0 }, { ...b(o), ...i.$attrs })), {
      default: O(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ck = /* @__PURE__ */ P({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(b(J)("group/menu-item relative", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), jt = "animate-pulse rounded-md bg-primary/10", _k = /* @__PURE__ */ P({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = $(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, o) => (t(), n("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: A(b(J)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: A(b(J)(jt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : _("", !0),
      s("div", {
        class: A(b(J)(jt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: Q({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), Mk = /* @__PURE__ */ P({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: A(
        b(J)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Sk = /* @__PURE__ */ P({
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
    return (a, r) => (t(), D(b(Fe), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: A(
        b(J)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-primary/10 data-[active=true]:text-primary",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), Bk = /* @__PURE__ */ P({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(b(J)("group/menu-sub-item relative", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), zk = /* @__PURE__ */ P({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Pa?.cookie.includes(`${Pt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = Ba("(max-width: 767px)"), i = G(!1), d = It(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${Pt}=${d.value}; path=/; max-age=${er}`;
    }
    function p(h) {
      i.value = h;
    }
    function k() {
      return o.value ? p(!i.value) : u(!d.value);
    }
    za("keydown", (h) => {
      h.key === lr && (h.metaKey || h.ctrlKey) && (h.preventDefault(), k());
    });
    const m = $(
      () => o.value || d.value ? "expanded" : "collapsed"
    );
    return sr({
      state: m,
      open: d,
      setOpen: u,
      isMobile: o,
      openMobile: i,
      setOpenMobile: p,
      toggleSidebar: k
    }), (h, M) => (t(), D(b(Kt), { "delay-duration": 0 }, {
      default: O(() => [
        s("div", ee({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(tr),
            "--sidebar-width-icon": b(nr)
          },
          class: b(J)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, h.$attrs), [
          H(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), Pk = /* @__PURE__ */ P({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = Qe();
    return (r, o) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: A(
        b(J)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          l.class
        )
      ),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...i) => b(a) && b(a)(...i))
    }, [
      H(r.$slots, "default")
    ], 2));
  }
}), fr = /* @__PURE__ */ P({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(Ta), ee({ "data-slot": "separator" }, b(a), {
      class: b(J)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), Ak = /* @__PURE__ */ P({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(fr), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(b(J)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), jk = /* @__PURE__ */ P({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: o } = Qe();
    return (i, d) => (t(), D(ne, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: A(b(J)("h-7 w-7", l.class)),
      onClick: b(o)
    }, {
      default: O(() => [
        b(a) || b(r) === "collapsed" ? (t(), D(b(ya), { key: 0 })) : (t(), D(b(ka), { key: 1 })),
        d[0] || (d[0] = s("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), mr = gt(
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
), Ok = /* @__PURE__ */ P({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = ue(e, l);
    return (i, d) => (t(), D(b(Ea), ee({ "data-slot": "dropdown-menu" }, b(o)), {
      default: O((u) => [
        H(i.$slots, "default", be(Me(u)))
      ]),
      _: 3
    }, 16));
  }
}), pr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Lk = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(Fa), ee({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(J)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        s("span", pr, [
          E(b(qt), null, {
            default: O(() => [
              H(d.$slots, "indicator-icon", {}, () => [
                E(b(Et), { class: "size-4" })
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
}), Vk = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(Ia), null, {
      default: O(() => [
        E(b(Na), ee({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(J)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: O(() => [
            H(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Dk = /* @__PURE__ */ P({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Ra), ee({ "data-slot": "dropdown-menu-group" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tk = /* @__PURE__ */ P({
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
    const l = e, a = le(l, "inset", "variant", "class"), r = xe(a);
    return (o, i) => (t(), D(b(Ua), ee({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, b(r), {
      class: b(J)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: O(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Ek = /* @__PURE__ */ P({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = le(l, "class", "inset"), r = xe(a);
    return (o, i) => (t(), D(b(Ha), ee({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, b(r), {
      class: b(J)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: O(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Fk = /* @__PURE__ */ P({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const o = ue(e, l);
    return (i, d) => (t(), D(b(Ka), ee({ "data-slot": "dropdown-menu-radio-group" }, b(o)), {
      default: O(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Ik = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(qa), ee({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(J)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        s("span", vr, [
          E(b(qt), null, {
            default: O(() => [
              H(d.$slots, "indicator-icon", {}, () => [
                E(b($a), { class: "size-2 fill-current" })
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
}), Nk = /* @__PURE__ */ P({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(Ga), ee({ "data-slot": "dropdown-menu-separator" }, b(a), {
      class: b(J)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), Rk = /* @__PURE__ */ P({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(b(J)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Uk = /* @__PURE__ */ P({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = ue(e, l);
    return (i, d) => (t(), D(b(Wa), ee({ "data-slot": "dropdown-menu-sub" }, b(o)), {
      default: O((u) => [
        H(i.$slots, "default", be(Me(u)))
      ]),
      _: 3
    }, 16));
  }
}), Hk = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(Za), ee({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(J)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: O(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kk = /* @__PURE__ */ P({
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
    const l = e, a = le(l, "class", "inset"), r = xe(a);
    return (o, i) => (t(), D(b(Ja), ee({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(J)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: O(() => [
        H(o.$slots, "default"),
        E(b(Ft), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), qk = /* @__PURE__ */ P({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = xe(e);
    return (r, o) => (t(), D(b(Ya), ee({ "data-slot": "dropdown-menu-trigger" }, b(a)), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gk = /* @__PURE__ */ P({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Xa), {
      "data-slot": "avatar",
      class: A(b(J)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wk = /* @__PURE__ */ P({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(Qa), ee({ "data-slot": "avatar-fallback" }, b(a), {
      class: b(J)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zk = /* @__PURE__ */ P({
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
    return (a, r) => (t(), D(b(en), ee({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jk = /* @__PURE__ */ P({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: A(l.class)
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Yk = /* @__PURE__ */ P({
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
      class: A(b(J)("flex size-9 items-center justify-center", l.class))
    }, [
      H(a.$slots, "default", {}, () => [
        E(b(wa), { class: "size-4" })
      ]),
      r[0] || (r[0] = s("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), Xk = /* @__PURE__ */ P({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: A(b(J)("inline-flex items-center gap-1.5", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Qk = /* @__PURE__ */ P({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Fe), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: A(b(J)("hover:text-foreground transition-colors", l.class))
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), e$ = /* @__PURE__ */ P({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        b(J)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), t$ = /* @__PURE__ */ P({
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
      class: A(b(J)("text-foreground font-normal", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), a$ = /* @__PURE__ */ P({
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
      class: A(b(J)("[&>svg]:size-3.5", l.class))
    }, [
      H(a.$slots, "default", {}, () => [
        E(b(Ft))
      ])
    ], 2));
  }
}), gr = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, hr = /* @__PURE__ */ P({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), n("div", gr, [
      E(b(tn), ee({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(J)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), n$ = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class", "viewport"), i = ue(o, r);
    return (d, u) => (t(), D(b(an), ee({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(J)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: O((p) => [
        H(d.$slots, "default", be(Me(p))),
        e.viewport ? (t(), D(hr, { key: 0 })) : _("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), l$ = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(nn), ee({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(J)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: O(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s$ = /* @__PURE__ */ P({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), D(b(ln), ee({ "data-slot": "navigation-menu-indicator" }, b(r), {
      class: b(J)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        l.class
      )
    }), {
      default: O(() => [...i[0] || (i[0] = [
        s("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), o$ = /* @__PURE__ */ P({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(sn), ee({ "data-slot": "navigation-menu-item" }, b(a), {
      class: b(J)("relative", l.class)
    }), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r$ = /* @__PURE__ */ P({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(on), ee({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(J)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        H(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i$ = /* @__PURE__ */ P({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), D(b(rn), ee({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(J)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: O(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d$ = /* @__PURE__ */ P({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), D(b(dn), ee({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(J)(b(br)(), "group", l.class)
    }), {
      default: O(() => [
        H(o.$slots, "default"),
        E(b(Ca), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), br = gt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), u$ = /* @__PURE__ */ P({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = ue(e, l);
    return (i, d) => (t(), D(b(Nt), ee({ "data-slot": "dialog" }, b(o)), {
      default: O((u) => [
        H(i.$slots, "default", be(Me(u)))
      ]),
      _: 3
    }, 16));
  }
}), c$ = /* @__PURE__ */ P({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Ee), ee({ "data-slot": "dialog-close" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xr = /* @__PURE__ */ P({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(ht), ee({ "data-slot": "dialog-overlay" }, b(a), {
      class: b(J)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f$ = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(bt), null, {
      default: O(() => [
        E(xr),
        E(b(xt), ee({ "data-slot": "dialog-content" }, { ...d.$attrs, ...b(i) }, {
          class: b(J)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: O(() => [
            H(d.$slots, "default"),
            e.showCloseButton ? (t(), D(b(Ee), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: O(() => [
                E(b(vt)),
                u[0] || (u[0] = s("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : _("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), m$ = /* @__PURE__ */ P({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), D(b(Rt), ee({ "data-slot": "dialog-description" }, b(r), {
      class: b(J)("text-muted-foreground text-sm", l.class)
    }), {
      default: O(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p$ = /* @__PURE__ */ P({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: A(b(J)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      H(a.$slots, "default"),
      e.showCloseButton ? (t(), D(b(Ee), {
        key: 0,
        "as-child": ""
      }, {
        default: O(() => [
          E(ne, { variant: "outline" }, {
            default: O(() => [...r[0] || (r[0] = [
              U(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : _("", !0)
    ], 2));
  }
}), v$ = /* @__PURE__ */ P({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: A(b(J)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), g$ = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(bt), null, {
      default: O(() => [
        E(b(ht), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: O(() => [
            E(b(xt), ee({
              class: b(J)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...b(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (p) => {
                const k = p.detail.originalEvent, m = k.target;
                (k.offsetX > m.clientWidth || k.offsetY > m.clientHeight) && p.preventDefault();
              })
            }), {
              default: O(() => [
                H(d.$slots, "default"),
                E(b(Ee), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: O(() => [
                    E(b(vt), { class: "w-4 h-4" }),
                    u[1] || (u[1] = s("span", { class: "sr-only" }, "Close", -1))
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
}), h$ = /* @__PURE__ */ P({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), D(b(Ut), ee({ "data-slot": "dialog-title" }, b(r), {
      class: b(J)("text-lg leading-none font-semibold", l.class)
    }), {
      default: O(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b$ = /* @__PURE__ */ P({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Ht), ee({ "data-slot": "dialog-trigger" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), x$ = /* @__PURE__ */ P({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), D(b(un), ee({ "data-slot": "label" }, b(a), {
      class: b(J)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y$ = /* @__PURE__ */ P({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(_a), {
      role: "status",
      "aria-label": "Loading",
      class: A(b(J)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), k$ = /* @__PURE__ */ P({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: A(
        b(J)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), $$ = /* @__PURE__ */ P({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: A(b(J)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), w$ = /* @__PURE__ */ P({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: A(b(J)("px-6", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), C$ = /* @__PURE__ */ P({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: A(b(J)("text-muted-foreground text-sm", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), _$ = /* @__PURE__ */ P({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: A(b(J)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), M$ = /* @__PURE__ */ P({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: A(
        b(J)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), S$ = /* @__PURE__ */ P({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: A(b(J)("leading-none font-semibold", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), yr = /* @__PURE__ */ P({
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
    const a = e, r = l, o = le(a, "class"), i = ue(o, r);
    return (d, u) => (t(), D(b(cn), ee({ "data-slot": "checkbox" }, b(i), {
      class: b(J)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: O((p) => [
        E(b(fn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: O(() => [
            H(d.$slots, "default", be(Me(p)), () => [
              E(b(Et), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Le = /* @__PURE__ */ P({
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
    const a = e, r = l, o = ue(le(a, "class"), r);
    return (i, d) => (t(), D(b(mn), ee({ "data-slot": "switch" }, b(o), {
      class: b(J)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: O(() => [
        E(b(pn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), kr = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, $r = { class: "flex items-start gap-3" }, wr = { class: "min-w-0 flex-1" }, Cr = { class: "text-foreground text-sm font-medium" }, _r = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, B$ = /* @__PURE__ */ P({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, o = a, i = G(!1), d = G(null), u = G(0);
    ua((k) => (console.error(`[PkBoundary] ${r.label} failed to render`, k), i.value = !0, d.value = k instanceof Error ? k.message : null, o("error", k), !1));
    function p() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: p }), (k, m) => (t(), n("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", kr, [
        s("div", $r, [
          m[1] || (m[1] = s("svg", {
            class: "text-destructive mt-0.5 size-4 shrink-0",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            s("path", { d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" })
          ], -1)),
          s("div", wr, [
            s("p", Cr, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", _r, f(d.value), 1)) : _("", !0),
            s("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: p
            }, [...m[0] || (m[0] = [
              s("svg", {
                class: "size-3",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                s("path", { d: "M21 2v6h-6M3.5 9a9 9 0 0 1 14.9-3.4L21 8" })
              ], -1),
              U(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? _("", !0) : H(k.$slots, "default", { key: u.value })
    ], 2));
  }
}), Mr = { class: "bg-card rounded-lg border" }, Sr = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Br = { class: "min-w-0" }, zr = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Pr = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Ar = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, jr = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, z$ = /* @__PURE__ */ P({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Mr, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Sr, [
        s("div", Br, [
          H(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", zr, f(e.title), 1)) : _("", !0),
            e.description ? (t(), n("p", Pr, f(e.description), 1)) : _("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Ar, [
          H(l.$slots, "actions")
        ])) : _("", !0)
      ])) : _("", !0),
      s("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        H(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", jr, [
        H(l.$slots, "footer")
      ])) : _("", !0)
    ]));
  }
}), Or = { class: "flex shrink-0 flex-col items-center" }, Lr = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, P$ = /* @__PURE__ */ P({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, a = $(() => l.kind === "laptop"), r = $(
      () => a.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), o = $(() => a.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), n("div", Or, [
      s("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: Q({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Lr)) : _("", !0),
        s("div", {
          class: A(["size-full overflow-hidden bg-white", o.value])
        }, [
          H(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(z, { key: 0 }, [
        s("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: Q({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        s("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: Q({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : _("", !0)
    ]));
  }
}), Vr = { class: "flex items-center gap-2 overflow-x-auto" }, Dr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Er = { class: "flex flex-col" }, Fr = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Ir = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Nr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Rr = /* @__PURE__ */ P({
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
    function o(p) {
      return a.failedStep !== null && p === a.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : a.failedStep !== null && p > a.failedStep ? "" : p < a.activeStep ? "bg-primary text-primary-foreground border-primary" : p === a.activeStep ? "border-primary text-primary" : "";
    }
    function i(p) {
      if (a.failedStep !== null) {
        if (p === a.failedStep)
          return "text-destructive font-medium";
        if (p > a.failedStep)
          return "text-muted-foreground/60";
      }
      return p === a.activeStep ? "text-foreground font-medium" : p < a.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(p) {
      return a.failedStep !== null ? p < a.failedStep : p < a.activeStep;
    }
    function u(p) {
      return a.failedStep === p;
    }
    return (p, k) => (t(), n("ol", Vr, [
      (t(!0), n(z, null, V(e.steps, (m, h) => (t(), n("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(Pe(e.interactive ? "button" : "div"), ee({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (M) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: O(() => [
            s("span", {
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", o(h)])
            }, [
              u(h) ? (t(), n("svg", Dr, [...k[0] || (k[0] = [
                s("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), n("svg", Tr, [...k[1] || (k[1] = [
                s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                U(f(h + 1), 1)
              ], 64))
            ], 2),
            s("span", Er, [
              s("span", null, f(m.label), 1),
              m.description ? (t(), n("span", Fr, f(m.description), 1)) : _("", !0)
            ]),
            e.hasError(h) ? (t(), n("span", Ir)) : _("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), n("span", Nr)) : _("", !0)
      ]))), 128))
    ]));
  }
}), qe = /* @__PURE__ */ new Map();
function ke(e, l) {
  qe.set(e, l);
}
function Ur(e) {
  return qe.get(e);
}
function A$(e) {
  return qe.has(e);
}
function j$() {
  return [...qe.keys()].sort();
}
function O$() {
  qe.clear();
}
const Hr = ["aria-expanded"], Kr = ["aria-label", "onClick"], qr = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Gr = { class: "ml-auto flex shrink-0 items-center gap-1" }, Wr = {
  key: 0,
  class: "border-b p-1"
}, Zr = ["placeholder"], Jr = { class: "max-h-60 overflow-y-auto p-1" }, Yr = ["aria-selected", "onMouseenter", "onClick"], Xr = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Ct = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null), i = G(null), d = G(null), u = G(!1), p = G(""), k = G(0), m = G({ top: 0, left: 0, width: 0 }), h = $(
      () => a.modelValue.map(
        (F) => a.options.find((T) => T.value === F) ?? {
          value: F,
          label: String(F)
        }
      ).filter(Boolean)
    ), M = $(() => a.searchable ?? a.options.length > 6), w = $(() => {
      const F = new Set(a.modelValue), T = p.value.trim().toLowerCase();
      return a.options.filter((j) => !F.has(j.value)).filter((j) => T ? j.label.toLowerCase().includes(T) : !0);
    }), C = $(() => a.max !== null && a.modelValue.length >= a.max);
    function g() {
      const F = o.value, T = i.value;
      if (!F || !T)
        return;
      const j = F.getBoundingClientRect(), W = T.getBoundingClientRect(), I = 8;
      let R = j.bottom + 4;
      R + W.height > window.innerHeight - I && j.top - W.height - 4 > I && (R = j.top - W.height - 4), m.value = {
        top: R,
        left: Math.min(Math.max(I, j.left), window.innerWidth - j.width - I),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: j.width
      };
    }
    async function c() {
      a.disabled || u.value || (u.value = !0, p.value = "", k.value = 0, await we(), g(), d.value?.focus());
    }
    function x() {
      u.value = !1, p.value = "";
    }
    function v() {
      u.value ? x() : c();
    }
    function y(F) {
      C.value || (r("update:modelValue", [...a.modelValue, F.value]), p.value = "", k.value = 0, we(() => {
        g(), d.value?.focus();
      }));
    }
    function S(F) {
      r(
        "update:modelValue",
        a.modelValue.filter((T) => T !== F)
      ), we(g);
    }
    function B() {
      r("update:modelValue", []), we(g);
    }
    function q(F) {
      if (!a.disabled) {
        if (F.key === "Escape" && u.value) {
          F.stopPropagation(), x();
          return;
        }
        if (F.key === "Backspace" && p.value === "" && a.modelValue.length > 0) {
          S(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (F.key === "ArrowDown" || F.key === "Enter")) {
          F.preventDefault(), c();
          return;
        }
        if (u.value) {
          if (F.key === "ArrowDown")
            F.preventDefault(), k.value = Math.min(k.value + 1, w.value.length - 1);
          else if (F.key === "ArrowUp")
            F.preventDefault(), k.value = Math.max(k.value - 1, 0);
          else if (F.key === "Enter") {
            F.preventDefault();
            const T = w.value[k.value];
            T && y(T);
          }
        }
      }
    }
    function N(F) {
      if (!u.value)
        return;
      const T = F.target;
      o.value?.contains(T) || i.value?.contains(T) || x();
    }
    function Y() {
      u.value && g();
    }
    return re(w, (F) => {
      k.value > F.length - 1 && (k.value = Math.max(0, F.length - 1));
    }), de(() => {
      document.addEventListener("pointerdown", N), window.addEventListener("scroll", Y, !0), window.addEventListener("resize", Y);
    }), me(() => {
      document.removeEventListener("pointerdown", N), window.removeEventListener("scroll", Y, !0), window.removeEventListener("resize", Y);
    }), (F, T) => (t(), n("div", {
      ref_key: "root",
      ref: o,
      class: "relative w-full",
      onKeydown: q
    }, [
      s("div", {
        class: A(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: v
      }, [
        (t(!0), n(z, null, V(h.value, (j) => (t(), n("span", {
          key: j.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          U(f(j.label) + " ", 1),
          s("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${j.label}`,
            onClick: ce((W) => S(j.value), ["stop"])
          }, [...T[1] || (T[1] = [
            s("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              s("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Kr)
        ]))), 128)),
        h.value.length === 0 ? (t(), n("span", qr, f(e.placeholder), 1)) : _("", !0),
        s("span", Gr, [
          h.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ce(B, ["stop"])
          }, " Clear ")) : _("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...T[2] || (T[2] = [
            s("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Hr),
      (t(), D(Te, { to: "body" }, [
        E(ze, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
            u.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: Q({
                top: `${m.value.top}px`,
                left: `${m.value.left}px`,
                width: `${m.value.width}px`
              }),
              role: "listbox"
            }, [
              M.value ? (t(), n("div", Wr, [
                oe(s("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": T[0] || (T[0] = (j) => p.value = j),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: q
                }, null, 40, Zr), [
                  [Ce, p.value]
                ])
              ])) : _("", !0),
              s("div", Jr, [
                (t(!0), n(z, null, V(w.value, (j, W) => (t(), n("button", {
                  key: j.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", W === k.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": W === k.value,
                  onMouseenter: (I) => k.value = W,
                  onClick: (I) => y(j)
                }, f(j.label), 43, Yr))), 128)),
                w.value.length === 0 ? (t(), n("p", Xr, [
                  C.value ? (t(), n(z, { key: 0 }, [
                    U("You have selected the maximum.")
                  ], 64)) : p.value ? (t(), n(z, { key: 1 }, [
                    U("Nothing matches “" + f(p.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
                    U("Everything is selected.")
                  ], 64))
                ])) : _("", !0)
              ])
            ], 4)) : _("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
  }
}), Qr = ["accept", "disabled"], ei = { class: "text-sm font-medium" }, ti = { key: 0 }, ai = { key: 1 }, ni = { class: "text-muted-foreground text-xs" }, li = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, si = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, oi = ["src"], ri = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, ii = { class: "min-w-0 flex-1" }, di = { class: "block truncate text-sm font-medium" }, ui = { class: "text-muted-foreground text-xs" }, ci = ["href"], fi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, Qt = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null), i = G(!1), d = G(null), u = G(null), p = G(null), k = $(() => a.accept.map((y) => `.${y}`).join(",")), m = $(() => p.value ?? a.modelValue?.url ?? null), h = $(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(a.maxKilobytes * 1024)}`);
    function M(y) {
      if (!y)
        return "";
      const S = ["B", "KB", "MB", "GB"];
      let B = y, q = 0;
      for (; B >= 1024 && q < S.length - 1; )
        B /= 1024, q++;
      return `${B.toFixed(B < 10 && q > 0 ? 1 : 0)} ${S[q]}`;
    }
    function w(y) {
      return y.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(y) {
      return a.accept.length && !a.accept.includes(w(y.name)) ? `${w(y.name).toUpperCase() || "That"} files are not accepted here.` : y.size > a.maxKilobytes * 1024 ? `That file is ${M(y.size)}; the limit is ${M(a.maxKilobytes * 1024)}.` : null;
    }
    async function g(y) {
      const S = y?.[0];
      if (!(!S || a.disabled) && (u.value = C(S), !u.value)) {
        c(), a.image && S.type.startsWith("image/") && (p.value = URL.createObjectURL(S)), d.value = 0;
        try {
          const B = await a.upload(S, (q) => {
            d.value = q;
          });
          r("update:modelValue", B);
        } catch (B) {
          u.value = B instanceof Error ? B.message : "The upload failed.", c();
        } finally {
          d.value = null, o.value && (o.value.value = "");
        }
      }
    }
    function c() {
      p.value && URL.revokeObjectURL(p.value), p.value = null;
    }
    async function x() {
      const y = a.modelValue;
      c(), u.value = null, r("update:modelValue", null), y && !y.url && a.discard && await a.discard(y.value).catch(() => {
      });
    }
    function v(y) {
      i.value = !1, g(y.dataTransfer?.files ?? null);
    }
    return (y, S) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", si, [
        e.image && m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, oi)) : (t(), n("span", ri, f(w(e.modelValue.name) || "file"), 1)),
        s("span", ii, [
          s("span", di, f(e.modelValue.name), 1),
          s("span", ui, [
            U(f(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              S[4] || (S[4] = U(" · ", -1)),
              s("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, ci)
            ], 64)) : (t(), n(z, { key: 1 }, [
              U(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? _("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: x
        }, [...S[5] || (S[5] = [
          s("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            s("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])]))
      ])) : (t(), n("label", {
        key: 0,
        class: A(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: S[1] || (S[1] = ce((B) => i.value = !0, ["prevent"])),
        onDragleave: S[2] || (S[2] = ce((B) => i.value = !1, ["prevent"])),
        onDrop: ce(v, ["prevent"])
      }, [
        s("input", {
          ref_key: "input",
          ref: o,
          type: "file",
          class: "sr-only",
          accept: k.value,
          disabled: e.disabled,
          onChange: S[0] || (S[0] = (B) => g(B.target.files))
        }, null, 40, Qr),
        S[3] || (S[3] = s("svg", {
          class: "text-muted-foreground size-6",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          s("path", { d: "M12 16V4" }),
          s("path", { d: "m7 9 5-5 5 5" }),
          s("path", { d: "M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" })
        ], -1)),
        s("span", ei, [
          d.value === null ? (t(), n("span", ti, "Drop a file or click to choose")) : (t(), n("span", ai, "Uploading…"))
        ]),
        s("span", ni, f(h.value), 1),
        d.value !== null ? (t(), n("span", li, [
          s("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: Q({ width: `${d.value}%` })
          }, null, 4)
        ])) : _("", !0)
      ], 34)),
      u.value ? (t(), n("p", fi, f(u.value), 1)) : _("", !0)
    ]));
  }
}), mi = { class: "flex flex-col gap-2" }, pi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, vi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, gi = { class: "flex flex-col gap-1" }, hi = ["onUpdate:modelValue", "disabled", "aria-label"], bi = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, xi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, yi = ["onUpdate:modelValue", "disabled", "aria-label"], ki = ["disabled", "aria-label", "onClick"], $i = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, wi = { class: "flex items-center gap-3" }, Ci = ["disabled"], _i = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Mi = /* @__PURE__ */ P({
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
    const a = e, r = l, o = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const d = G(u(a.modelValue));
    function u(g) {
      return g ? Object.entries(g).map(([c, x]) => ({
        uid: i++,
        key: c,
        value: x ?? ""
      })) : [];
    }
    re(
      () => a.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(p()) && (d.value = u(g));
      }
    );
    function p() {
      const g = {};
      for (const c of d.value) {
        const x = c.key.trim();
        x !== "" && (g[x] = c.value);
      }
      return Object.keys(g).length ? g : null;
    }
    function k() {
      r("update:modelValue", p());
    }
    const m = $(() => {
      const g = /* @__PURE__ */ new Map();
      for (const c of d.value) {
        const x = c.key.trim();
        x !== "" && g.set(x, (g.get(x) ?? 0) + 1);
      }
      return new Set([...g.entries()].filter(([, c]) => c > 1).map(([c]) => c));
    }), h = $(
      () => new Set(
        d.value.map((g) => g.key.trim()).filter((g) => g !== "" && !o.test(g))
      )
    ), M = $(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function w() {
      M.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function C(g) {
      d.value = d.value.filter((c) => c.uid !== g), k();
    }
    return (g, c) => (t(), n("div", mi, [
      d.value.length ? (t(), n("div", pi, [
        s("div", vi, [
          s("span", null, f(e.keyLabel), 1),
          s("span", null, f(e.valueLabel), 1),
          c[0] || (c[0] = s("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, V(d.value, (x) => (t(), n("div", {
          key: x.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          s("div", gi, [
            oe(s("input", {
              "onUpdate:modelValue": (v) => x.key = v,
              type: "text",
              class: A([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                m.value.has(x.key.trim()) || h.value.has(x.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: k
            }, null, 42, hi), [
              [Ce, x.key]
            ]),
            h.value.has(x.key.trim()) ? (t(), n("p", bi, " Letters, numbers, underscores and dashes only. ")) : m.value.has(x.key.trim()) ? (t(), n("p", xi, " Used twice - only the last value will be saved. ")) : _("", !0)
          ]),
          oe(s("input", {
            "onUpdate:modelValue": (v) => x.value = v,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: k
          }, null, 40, yi), [
            [Ce, x.value]
          ]),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${x.key || "this entry"}`,
            onClick: (v) => C(x.uid)
          }, [...c[1] || (c[1] = [
            s("svg", {
              class: "size-4",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "aria-hidden": "true"
            }, [
              s("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, ki)
        ]))), 128))
      ])) : (t(), n("p", $i, " Nothing here yet. ")),
      s("div", wi, [
        s("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || M.value,
          onClick: w
        }, [
          c[2] || (c[2] = s("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "aria-hidden": "true"
          }, [
            s("path", { d: "M12 5v14M5 12h14" })
          ], -1)),
          U(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, Ci),
        e.maxPairs !== null ? (t(), n("p", _i, f(d.value.length) + " of " + f(e.maxPairs), 1)) : _("", !0)
      ])
    ]));
  }
}), Si = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Bi = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, zi = ["disabled", "title", "aria-label", "onClick"], Pi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ai = ["d"], ji = ["disabled"], Oi = ["contenteditable", "data-placeholder"], Li = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Vi = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null);
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
    ], u = $(() => d.filter((C) => a.toolbar.includes(C.id))), p = $(() => a.toolbar.includes("link")), k = G(0);
    function m() {
      const C = o.value?.innerHTML ?? "", g = (o.value?.innerText ?? "").trim();
      k.value = g.length;
      const c = g === "" ? null : C;
      i = c, r("update:modelValue", c);
    }
    function h(C) {
      a.disabled || (o.value?.focus(), document.execCommand(C.command, !1, C.argument), m());
    }
    function M() {
      if (a.disabled)
        return;
      const C = window.prompt("Link address");
      C && (o.value?.focus(), document.execCommand("createLink", !1, C), m());
    }
    function w(C) {
      C.preventDefault();
      const g = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, g), m();
    }
    return de(() => {
      o.value && (o.value.innerHTML = a.modelValue ?? "", k.value = o.value.innerText.trim().length);
    }), re(
      () => a.modelValue,
      (C) => {
        C !== i && o.value && (o.value.innerHTML = C ?? "", k.value = o.value.innerText.trim().length);
      }
    ), (C, g) => (t(), n("div", Si, [
      s("div", Bi, [
        (t(!0), n(z, null, V(u.value, (c) => (t(), n("button", {
          key: c.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: c.label,
          "aria-label": c.label,
          onMousedown: g[0] || (g[0] = ce(() => {
          }, ["prevent"])),
          onClick: (x) => h(c)
        }, [
          (t(), n("svg", Pi, [
            s("path", {
              d: c.path
            }, null, 8, Ai)
          ]))
        ], 40, zi))), 128)),
        p.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: g[1] || (g[1] = ce(() => {
          }, ["prevent"])),
          onClick: M
        }, [...g[2] || (g[2] = [
          s("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            s("path", { d: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" })
          ], -1)
        ])], 40, ji)) : _("", !0)
      ]),
      s("div", {
        ref_key: "editor",
        ref: o,
        class: A(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: m,
        onBlur: m,
        onPaste: w
      }, null, 42, Oi),
      e.maxLength !== null ? (t(), n("div", Li, f(k.value) + " / " + f(e.maxLength), 1)) : _("", !0)
    ]));
  }
}), Di = /* @__PURE__ */ yt(Vi, [["__scopeId", "data-v-32c63bc7"]]), Ti = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, Ei = ["for"], Fi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Ii = {
  key: 7,
  class: "relative"
}, Ni = ["disabled", "aria-invalid"], Ri = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ui = { class: "max-h-56 overflow-y-auto p-1" }, Hi = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ki = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, qi = ["onClick"], Gi = ["id", "value", "disabled", "aria-invalid"], Wi = ["value"], Zi = {
  key: 9,
  class: "flex items-center gap-2 text-sm"
}, Ji = { class: "text-muted-foreground" }, Yi = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Xi = { class: "text-muted-foreground" }, Qi = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], ed = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], td = {
  key: 13,
  class: "flex flex-wrap gap-1.5"
}, ad = ["disabled", "aria-pressed", "onClick"], nd = {
  key: 14,
  class: "flex flex-wrap gap-1.5"
}, ld = ["title", "disabled", "onClick"], sd = {
  key: 15,
  class: "text-destructive text-xs",
  role: "alert"
}, od = {
  key: 16,
  class: "text-muted-foreground text-xs"
}, Ke = /* @__PURE__ */ P({
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
  emits: ["change"],
  setup(e, { emit: l }) {
    const a = St(() => import("./PkRepeater-J84jGe3T.js")), r = St(() => import("./PkBuilder-DXeyw3Du.js")), o = e, i = l, d = G(!1), u = G(""), p = G([]), k = G(!1), m = G(null);
    let h;
    re(u, (x) => {
      o.searchOptions && (clearTimeout(h), k.value = !0, h = setTimeout(async () => {
        try {
          p.value = await o.searchOptions(x);
        } catch {
        } finally {
          k.value = !1;
        }
      }, 200));
    });
    async function M() {
      if (!(o.processing || o.field.disabled) && (d.value = !0, p.value.length === 0 && o.searchOptions)) {
        k.value = !0;
        try {
          p.value = await o.searchOptions("");
        } finally {
          k.value = !1;
        }
      }
    }
    function w(x) {
      m.value = x.label, i("change", x.value), d.value = !1, u.value = "";
    }
    function C() {
      m.value = null, i("change", null);
    }
    me(() => clearTimeout(h));
    const g = $(() => Ur(o.field.type));
    function c(x) {
      const v = document.getElementById(`f-${o.field.key}`);
      if (!(v instanceof HTMLTextAreaElement) && !(v instanceof HTMLInputElement))
        return;
      const y = v.selectionStart ?? v.value.length, S = v.selectionEnd ?? y;
      v.setRangeText(x, y, S, "end"), v.dispatchEvent(new Event("input", { bubbles: !0 })), v.focus();
    }
    return (x, v) => e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", Ti, [
      s("label", {
        for: `f-${e.field.key}`,
        class: A(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
      }, [
        U(f(e.field.label) + " ", 1),
        e.field.required ? (t(), n("span", Fi, "*")) : _("", !0)
      ], 10, Ei),
      g.value ? (t(), D(Pe(g.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": v[0] || (v[0] = (y) => i("change", y))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(Qt, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": v[1] || (v[1] = (y) => i("change", y))
      }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), D(b(a), {
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
        "onUpdate:modelValue": v[2] || (v[2] = (y) => i("change", y))
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(b(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": v[3] || (v[3] = (y) => i("change", y))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Di, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": v[4] || (v[4] = (y) => i("change", y))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(Mi, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": v[5] || (v[5] = (y) => i("change", y))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(Ct, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": v[6] || (v[6] = (y) => i("change", y))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Ii, [
        s("button", {
          type: "button",
          class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          onClick: M
        }, [
          s("span", {
            class: A(m.value || e.value ? "" : "text-muted-foreground")
          }, f(m.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), n("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: ce(C, ["stop"])
          }, " ✕ ")) : _("", !0)
        ], 8, Ni),
        d.value ? (t(), n("div", Ri, [
          oe(s("input", {
            "onUpdate:modelValue": v[7] || (v[7] = (y) => u.value = y),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [Ce, u.value]
          ]),
          s("div", Ui, [
            k.value ? (t(), n("p", Hi, " Searching… ")) : p.value.length === 0 ? (t(), n("p", Ki, " No matches ")) : _("", !0),
            (t(!0), n(z, null, V(p.value, (y) => (t(), n("button", {
              key: String(y.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (S) => w(y)
            }, f(y.label), 9, qi))), 128))
          ])
        ])) : _("", !0),
        d.value ? (t(), n("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: v[8] || (v[8] = (y) => d.value = !1)
        })) : _("", !0)
      ])) : e.field.type === "select" ? (t(), n("select", {
        key: 8,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onChange: v[9] || (v[9] = (y) => i("change", y.target.value || null))
      }, [
        v[14] || (v[14] = s("option", { value: "" }, "-", -1)),
        (t(!0), n(z, null, V(e.options, (y) => (t(), n("option", {
          key: String(y.value),
          value: y.value
        }, f(y.label), 9, Wi))), 128))
      ], 40, Gi)) : e.field.type === "toggle" ? (t(), n("label", Zi, [
        E(b(Le), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": v[10] || (v[10] = (y) => i("change", y))
        }, null, 8, ["id", "model-value", "disabled"]),
        s("span", Ji, f(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), n("label", Yi, [
        E(b(yr), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": v[11] || (v[11] = (y) => i("change", y === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        s("span", Xi, f(e.field.help ?? e.field.label), 1)
      ])) : e.field.type === "textarea" ? (t(), n("textarea", {
        key: 11,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        rows: e.field.rows ?? 3,
        placeholder: e.field.placeholder,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: v[12] || (v[12] = (y) => i("change", y.target.value))
      }, null, 40, Qi)) : (t(), n("input", {
        key: 12,
        id: `f-${e.field.key}`,
        type: e.field.type === "number" ? "number" : e.field.type === "date" ? "date" : e.field.type === "datetime" ? "datetime-local" : e.field.type === "password" ? "password" : e.field.inputType ?? "text",
        value: e.value ?? "",
        placeholder: e.field.placeholder,
        autocomplete: e.field.type === "password" ? "new-password" : void 0,
        min: e.field.min,
        max: e.field.max,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: v[13] || (v[13] = (y) => i("change", y.target.value))
      }, null, 40, ed)),
      e.field.type === "number" && e.field.presets?.length ? (t(), n("div", td, [
        (t(!0), n(z, null, V(e.field.presets, (y) => (t(), n("button", {
          key: y,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: A([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == y ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == y
          ),
          onClick: (S) => i("change", String(y))
        }, f(y), 11, ad))), 128))
      ])) : _("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", nd, [
        (t(!0), n(z, null, V(e.field.chips, (y, S) => (t(), n("button", {
          key: S,
          type: "button",
          title: y,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (B) => c(String(S))
        }, f(S), 9, ld))), 128))
      ])) : _("", !0),
      e.error ? (t(), n("p", sd, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", od, f(e.field.help), 1)) : _("", !0)
    ]));
  }
}), rd = { class: "flex flex-col gap-2" }, id = { class: "min-w-0 flex-1" }, dd = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, ud = ["disabled", "aria-label", "onClick"], cd = ["disabled", "aria-label", "onClick"], fd = ["disabled", "title", "aria-label", "onClick"], md = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, pd = ["disabled"], L$ = /* @__PURE__ */ P({
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
    let o = 0;
    const i = G(d(a.modelValue));
    function d(x) {
      return Array.isArray(x) ? x.map((v) => ({ uid: o++, data: { ...v } })) : [];
    }
    re(
      () => a.modelValue,
      (x) => {
        JSON.stringify(x ?? null) !== JSON.stringify(u()) && (i.value = d(x));
      }
    );
    function u() {
      const x = [];
      for (const v of i.value) {
        const y = {};
        let S = !1;
        for (const B of a.children) {
          const q = v.data[B.key] ?? null;
          y[B.key] = q, q !== null && q !== "" && !(Array.isArray(q) && q.length === 0) && (S = !0);
        }
        S && x.push(y);
      }
      return x.length ? x : null;
    }
    function p() {
      r("update:modelValue", u());
    }
    const k = $(() => a.maxItems !== null && i.value.length >= a.maxItems), m = $(() => a.minItems !== null && i.value.length <= a.minItems), h = $(() => a.children.length === 1);
    function M() {
      if (k.value || a.disabled)
        return;
      const x = {};
      for (const v of a.children)
        x[v.key] = null;
      i.value.push({ uid: o++, data: x });
    }
    function w(x) {
      i.value = i.value.filter((v) => v.uid !== x), p();
    }
    function C(x, v) {
      const y = x + v;
      if (y < 0 || y >= i.value.length)
        return;
      const S = [...i.value], [B] = S.splice(x, 1);
      S.splice(y, 0, B), i.value = S, p();
    }
    function g(x, v, y) {
      const S = i.value.find((B) => B.uid === x);
      S && (S.data[v] = y, p());
    }
    function c(x, v) {
      return a.errors[`${a.fieldKey}.${x}.${v}`];
    }
    return (x, v) => (t(), n("div", rd, [
      (t(!0), n(z, null, V(i.value, (y, S) => (t(), n("div", {
        key: y.uid,
        class: "flex items-start gap-2"
      }, [
        s("span", {
          class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(S + 1), 3),
        s("div", id, [
          h.value ? (t(), D(Ke, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: y.data[e.children[0].key],
            error: c(S, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (B) => g(y.uid, e.children[0].key, B)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", dd, [
            (t(!0), n(z, null, V(e.children, (B) => (t(), D(Ke, {
              key: B.key,
              field: { ...B, disabled: B.disabled || e.disabled },
              value: y.data[B.key],
              error: c(S, B.key),
              options: e.childOptions[B.key] ?? [],
              onChange: (q) => g(y.uid, B.key, q)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        s("div", {
          class: A(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
        }, [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || S === 0,
            "aria-label": `Move ${e.itemLabel} ${S + 1} up`,
            onClick: (B) => C(S, -1)
          }, [...v[0] || (v[0] = [
            s("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              s("path", { d: "m18 15-6-6-6 6" })
            ], -1)
          ])], 8, ud),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || S === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${S + 1} down`,
            onClick: (B) => C(S, 1)
          }, [...v[1] || (v[1] = [
            s("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              s("path", { d: "m6 9 6 6 6-6" })
            ], -1)
          ])], 8, cd),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || m.value,
            title: m.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${S + 1}`,
            onClick: (B) => w(y.uid)
          }, [...v[2] || (v[2] = [
            s("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "aria-hidden": "true"
            }, [
              s("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, fd)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", md, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : _("", !0),
      k.value ? _("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: M
      }, [
        v[3] || (v[3] = s("svg", {
          class: "size-3.5",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "aria-hidden": "true"
        }, [
          s("path", { d: "M12 5v14M5 12h14" })
        ], -1)),
        U(" Add " + f(e.itemLabel.toLowerCase()), 1)
      ], 8, pd))
    ]));
  }
}), vd = { class: "space-y-1" }, gd = { class: "flex items-center gap-1" }, hd = ["disabled", "title", "aria-label", "onClick"], bd = ["aria-pressed"], xd = ["id", "value", "rows", "disabled"], yd = ["innerHTML"], kd = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(!1), i = $(() => a.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = $(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function p(h, M = h) {
      const w = document.getElementById(a.id ?? "");
      if (w === null)
        return;
      const C = w.selectionStart, g = w.selectionEnd, c = i.value.slice(C, g);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${h}${c}${M}${i.value.slice(g)}`
      );
    }
    const k = {
      bold: { label: "B", run: () => p("**") },
      italic: { label: "I", run: () => p("*") },
      code: { label: "</>", run: () => p("`") },
      heading: { label: "H", run: () => p("## ", "") },
      list: { label: "•", run: () => p("- ", "") },
      link: { label: "🔗", run: () => p("[", "](https://)") }
    }, m = $(
      () => (a.toolbar ?? Object.keys(k)).filter((h) => h in k)
    );
    return (h, M) => (t(), n("div", vd, [
      s("div", gd, [
        (t(!0), n(z, null, V(m.value, (w) => (t(), n("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => k[w].run()
        }, f(k[w].label), 9, hd))), 128)),
        s("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": o.value,
          onClick: M[0] || (M[0] = (w) => o.value = !o.value)
        }, " Preview ", 8, bd)
      ]),
      o.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, yd)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, xd))
    ]));
  }
}), $d = { class: "space-y-1" }, wd = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Cd = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, _d = ["id", "value", "rows", "disabled"], Md = { class: "text-muted-foreground text-xs" }, Sd = {
  key: 0,
  class: "text-destructive text-xs"
}, Bd = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null), i = G(!0), d = $(() => a.modelValue ?? ""), u = $(() => Math.max(d.value.split(`
`).length, 1)), p = $(() => {
      if (a.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function k(h) {
      r("update:modelValue", h.target.value);
    }
    function m(h) {
      if (h.key === "Escape") {
        i.value = !1;
        return;
      }
      if (h.key !== "Tab" && (i.value = !0), h.key !== "Tab" || !i.value)
        return;
      h.preventDefault();
      const M = h.target, w = M.selectionStart, C = M.selectionEnd, g = `${d.value.slice(0, w)}    ${d.value.slice(C)}`;
      r("update:modelValue", g), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = w + 4;
      });
    }
    return (h, M) => (t(), n("div", $d, [
      s("div", wd, [
        s("div", Cd, [
          (t(!0), n(z, null, V(u.value, (w) => (t(), n("div", { key: w }, f(w), 1))), 128))
        ]),
        s("textarea", {
          id: e.id,
          ref_key: "area",
          ref: o,
          value: d.value,
          rows: e.rows,
          disabled: e.disabled,
          spellcheck: "false",
          autocapitalize: "off",
          autocomplete: "off",
          autocorrect: "off",
          class: "w-full resize-y bg-transparent px-3 py-2 leading-5 outline-none",
          onInput: k,
          onKeydown: m
        }, null, 40, _d)
      ]),
      s("p", Md, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      p.value ? (t(), n("p", Sd, f(p.value), 1)) : _("", !0)
    ]));
  }
}), zd = { class: "space-y-3" }, Pd = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Ad = { class: "text-sm font-medium" }, jd = { class: "flex items-center gap-1" }, Od = ["disabled", "onClick"], Ld = ["disabled", "onClick"], Vd = ["disabled", "onClick"], Dd = { class: "space-y-3 p-3" }, Td = { class: "flex flex-wrap items-center gap-2" }, Ed = ["disabled", "onClick"], Fd = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, V$ = /* @__PURE__ */ P({
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
    const a = e, r = l, o = $(() => a.modelValue ?? []), i = $(
      () => Object.fromEntries(a.blocks.map((M) => [M.type, M]))
    ), d = $(() => a.maxBlocks !== null && o.value.length >= a.maxBlocks);
    function u(M) {
      r("update:modelValue", M);
    }
    function p(M) {
      d.value || u([...o.value, { type: M, data: {} }]);
    }
    function k(M) {
      u(o.value.filter((w, C) => C !== M));
    }
    function m(M, w) {
      const C = M + w;
      if (C < 0 || C >= o.value.length)
        return;
      const g = [...o.value], [c] = g.splice(M, 1);
      g.splice(C, 0, c), u(g);
    }
    function h(M, w, C) {
      u(
        o.value.map(
          (g, c) => c === M ? { ...g, data: { ...g.data, [w]: C } } : g
        )
      );
    }
    return (M, w) => (t(), n("div", zd, [
      (t(!0), n(z, null, V(o.value, (C, g) => (t(), n("div", {
        key: `${C.type}-${g}`,
        class: "bg-card rounded-lg border"
      }, [
        s("div", Pd, [
          s("span", Ad, f(i.value[C.type]?.label ?? C.type), 1),
          s("div", jd, [
            s("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || g === 0,
              "aria-label": "Move up",
              onClick: (c) => m(g, -1)
            }, " ↑ ", 8, Od),
            s("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || g === o.value.length - 1,
              "aria-label": "Move down",
              onClick: (c) => m(g, 1)
            }, " ↓ ", 8, Ld),
            s("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (c) => k(g)
            }, " Remove ", 8, Vd)
          ])
        ]),
        s("div", Dd, [
          (t(!0), n(z, null, V(i.value[C.type]?.fields ?? [], (c) => (t(), D(Ke, {
            key: c.key,
            field: c,
            value: C.data[c.key] ?? null,
            error: e.errors?.[c.key],
            processing: e.disabled,
            onChange: (x) => h(g, c.key, x)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      s("div", Td, [
        (t(!0), n(z, null, V(e.blocks, (C) => (t(), n("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (g) => p(C.type)
        }, " + " + f(C.label), 9, Ed))), 128)),
        d.value ? (t(), n("span", Fd, f(e.maxBlocks) + " is the maximum here. ", 1)) : _("", !0)
      ])
    ]));
  }
}), Id = ["name", "value", "checked", "disabled", "onChange"], Nd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Rd = /* @__PURE__ */ P({
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
    function o(i) {
      return a.modelValue != null && i.value == a.modelValue;
    }
    return (i, d) => (t(), n("div", {
      role: "radiogroup",
      class: A(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(z, null, V(e.options, (u) => (t(), n("label", {
        key: String(u.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        s("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: o(u),
          disabled: e.disabled,
          onChange: (p) => r("update:modelValue", u.value)
        }, null, 40, Id),
        U(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Nd, " Nothing to choose from yet. ")) : _("", !0)
    ], 2));
  }
}), Ud = ["value", "checked", "disabled", "onChange"], Hd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Kd = /* @__PURE__ */ P({
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
    const a = e, r = l, o = $(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function i(p) {
      return o.value.some((k) => k == p.value);
    }
    function d(p) {
      r(
        "update:modelValue",
        i(p) ? o.value.filter((k) => k != p.value) : [...o.value, p.value]
      );
    }
    const u = $(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (p, k) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: Q(u.value)
    }, [
      (t(!0), n(z, null, V(e.options, (m) => (t(), n("label", {
        key: String(m.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        s("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: m.value,
          checked: i(m),
          disabled: e.disabled,
          onChange: (h) => d(m)
        }, null, 40, Ud),
        U(" " + f(m.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Hd, " Nothing to choose from yet. ")) : _("", !0)
    ], 4));
  }
}), qd = { class: "flex flex-col gap-1.5" }, Gd = ["aria-label", "onClick"], Wd = ["placeholder", "disabled", "maxlength"], Zd = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Jd = ["onClick"], Yd = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Xd = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(""), i = $(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), d = $(() => i.value.length >= (a.field.max ?? 25)), u = $(
      () => (a.field.suggestions ?? []).filter(
        (h) => !i.value.some((M) => M.toLowerCase() === h.toLowerCase())
      )
    );
    function p(h) {
      const M = h.trim().slice(0, a.field.maxLength ?? 40);
      if (M === "" || d.value) {
        o.value = "";
        return;
      }
      if (i.value.some((w) => w.toLowerCase() === M.toLowerCase())) {
        o.value = "";
        return;
      }
      r("update:modelValue", [...i.value, M]), o.value = "";
    }
    function k(h) {
      r(
        "update:modelValue",
        i.value.filter((M, w) => w !== h)
      );
    }
    function m(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), p(o.value);
        return;
      }
      h.key === "Backspace" && o.value === "" && i.value.length > 0 && k(i.value.length - 1);
    }
    return (h, M) => (t(), n("div", qd, [
      s("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, V(i.value, (w, C) => (t(), n("span", {
          key: `${w}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(f(w) + " ", 1),
          e.disabled ? _("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (g) => k(C)
          }, " × ", 8, Gd))
        ]))), 128)),
        oe(s("input", {
          "onUpdate:modelValue": M[0] || (M[0] = (w) => o.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: m,
          onBlur: M[1] || (M[1] = (w) => p(o.value))
        }, null, 40, Wd), [
          [Ce, o.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", Zd, [
        M[2] || (M[2] = s("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(z, null, V(u.value, (w) => (t(), n("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => p(w)
        }, f(w), 9, Jd))), 128))
      ])) : _("", !0),
      d.value ? (t(), n("p", Yd, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : _("", !0)
    ]));
  }
}), Qd = 4.5, Ot = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ea(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function nt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function ft(e) {
  const [l, a, r] = ea(e);
  return 0.2126 * nt(l) + 0.7152 * nt(a) + 0.0722 * nt(r);
}
function ta(e, l) {
  const a = ft(e), r = ft(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function eu(e, l, a) {
  if (!Ot.test(e) || !Ot.test(l))
    return e;
  const r = ft(l) > 0.5, o = r ? 0 : 255;
  let i = ea(e);
  for (let d = 0; d <= 20; d++) {
    const u = tu(i);
    if (ta(u, l) >= a)
      return u;
    i = i.map((p) => p + (o - p) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function tu(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const au = { class: "flex flex-col gap-2" }, nu = { class: "flex items-center gap-2" }, lu = {
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
}, su = ["value", "disabled", "aria-label"], ou = ["value", "disabled", "placeholder"], ru = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, iu = ["aria-label", "title", "onClick"], du = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, uu = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = $(() => typeof a.modelValue == "string" ? a.modelValue : ""), d = $(() => o.test(i.value));
    function u(w) {
      const C = w.trim();
      if (C === "")
        return "";
      const g = C.startsWith("#") ? C : `#${C}`;
      return o.test(g) ? g.toLowerCase() : C;
    }
    function p(w) {
      r("update:modelValue", u(w.target.value));
    }
    const k = $(() => !d.value || !a.field.contrastBackground || !o.test(a.field.contrastBackground) ? null : ta(i.value, a.field.contrastBackground)), m = $(() => a.field.contrastMinRatio ?? Qd), h = $(() => k.value !== null && k.value < m.value);
    function M() {
      a.field.contrastBackground && r(
        "update:modelValue",
        eu(i.value, a.field.contrastBackground, m.value)
      );
    }
    return (w, C) => (t(), n("div", au, [
      s("div", nu, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (g) => r("update:modelValue", g.target.value))
        }, null, 40, su)) : (t(), n("span", lu)),
        s("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: p
        }, null, 40, ou)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", ru, [
        (t(!0), n(z, null, V(e.field.presets, (g) => (t(), n("button", {
          key: g,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === g.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: Q({ backgroundColor: g }),
          "aria-label": g,
          title: g,
          onClick: (c) => r("update:modelValue", g.toLowerCase())
        }, null, 14, iu))), 128))
      ])) : _("", !0),
      h.value ? (t(), n("p", du, [
        s("span", null, " This fails contrast at " + f(k.value.toFixed(1)) + ":1 - it needs at least " + f(m.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? _("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : _("", !0)
    ]));
  }
}), cu = { class: "flex items-center gap-3" }, fu = ["min", "max", "step", "value", "disabled", "aria-label"], mu = { class: "flex shrink-0 items-center gap-1" }, pu = ["min", "max", "step", "value", "disabled"], vu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, gu = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(() => a.field.min ?? 0), i = $(() => a.field.max ?? 100), d = $(() => a.field.step ?? 1), u = $(() => {
      const m = Number(a.modelValue);
      return Number.isFinite(m) ? m : o.value;
    }), p = $(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function k(m) {
      if (m === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(m);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (m, h) => (t(), n("div", cu, [
      s("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: o.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (M) => k(M.target.value))
      }, null, 40, fu),
      s("div", mu, [
        s("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: o.value,
          max: i.value,
          step: d.value,
          value: p.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (M) => k(M.target.value))
        }, null, 40, pu),
        e.field.unit ? (t(), n("span", vu, f(e.field.unit), 1)) : _("", !0)
      ])
    ]));
  }
}), Ge = /* @__PURE__ */ new Map();
function lt(e, l) {
  Ge.set(e, l);
}
function hu(e) {
  return Ge.get(e);
}
function D$(e) {
  return Ge.has(e);
}
function bu() {
  return [...Ge.keys()].sort();
}
function T$() {
  Ge.clear();
}
const xu = ["name", "value", "checked", "disabled", "onChange"], yu = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, ku = { class: "whitespace-nowrap" }, $u = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, wu = ["name", "value", "checked", "disabled", "onChange"], Cu = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, _u = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Mu = { class: "text-center text-xs font-medium" }, Su = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Bu = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, zu = /* @__PURE__ */ P({
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
    const a = e, r = l, o = $(
      () => a.field.preview ? hu(a.field.preview) : void 0
    ), i = $(() => !!a.field.preview && !o.value), d = $(() => a.field.layout === "segmented"), u = $(() => {
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
    function p(k) {
      return a.modelValue != null && k.value == a.modelValue;
    }
    return (k, m) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, V(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: A(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          p(h) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        s("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: p(h),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", h.value)
        }, null, 40, xu),
        m[0] || (m[0] = s("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o.value ? (t(), n("span", yu, [
          (t(), D(Pe(o.value), {
            value: h.value,
            label: h.label,
            selected: p(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : _("", !0),
        s("span", ku, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", $u, " Nothing to choose from yet. ")) : _("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", u.value])
    }, [
      (t(!0), n(z, null, V(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: A(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          p(h) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        s("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: p(h),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", h.value)
        }, null, 40, wu),
        m[1] || (m[1] = s("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s("span", Cu, [
          o.value ? (t(), D(Pe(o.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: p(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", _u, " no preview ")) : _("", !0)
        ]),
        s("span", Mu, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Su, " Nothing to choose from yet. ")) : _("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Bu, [
        m[2] || (m[2] = U(" No preview registered for ", -1)),
        s("code", null, f(e.field.preview), 1),
        U(". Registered: " + f(b(bu)().join(", ") || "none") + ". ", 1)
      ])) : _("", !0)
    ], 2));
  }
}), Pu = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Au = /* @__PURE__ */ P({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Pu, [
      s("span", {
        class: "block size-full",
        style: Q({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), ju = { class: "flex flex-col items-center gap-1 text-center" }, Ou = {
  key: 0,
  class: "text-xs text-neutral-500"
}, aa = /* @__PURE__ */ P({
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
    const l = e, a = $(() => l.mono ? "#000000" : l.accent), r = $(() => {
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
    return (o, i) => (t(), n("div", ju, [
      s("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: Q({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Ou, f(e.caption), 1)) : _("", !0)
    ]));
  }
}), Lu = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Vu = { class: "flex items-center gap-3" }, Du = ["src"], Tu = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Eu = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Fu = {
  key: 0,
  class: "text-right text-sm"
}, Iu = { class: "text-neutral-500" }, Nu = { class: "tabular-nums" }, Ru = { key: 1 }, Uu = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Hu = { class: "mt-2 font-medium" }, Ku = { key: 2 }, qu = { class: "w-full text-sm" }, Gu = { class: "w-full py-3 pr-2" }, Wu = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Zu = { key: 0 }, Ju = ["colspan"], Yu = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Xu = { class: "w-64 text-sm" }, Qu = { class: "tabular-nums" }, ec = {
  key: 3,
  class: "py-2"
}, tc = { key: 4 }, ac = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, nc = { class: "mt-2 flex flex-col gap-1 text-sm" }, lc = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, sc = { key: 0 }, oc = {
  key: 1,
  class: "mt-1"
}, rc = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, ic = /* @__PURE__ */ P({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function a() {
      return l.document.branding.mono ? "#000000" : l.document.branding.accent;
    }
    function r(p) {
      return p.meta ?? [];
    }
    function o(p) {
      return p.rows ?? [];
    }
    function i(p) {
      return p.totals ?? [];
    }
    function d(p) {
      return p ?? [];
    }
    function u(p) {
      return p ?? "";
    }
    return (p, k) => (t(), n("article", Lu, [
      s("div", Vu, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Du)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: Q({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, V(e.document.blocks, (m, h) => (t(), n(z, { key: h }, [
        m.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: Q({ borderColor: a() })
        }, [
          s("div", null, [
            s("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: Q({ color: a() })
            }, f(m.title), 5),
            m.subtitle ? (t(), n("p", Tu, f(m.subtitle), 1)) : _("", !0),
            m.reference ? (t(), n("p", Eu, f(m.reference), 1)) : _("", !0)
          ]),
          r(m).length ? (t(), n("dl", Fu, [
            (t(!0), n(z, null, V(r(m), (M, w) => (t(), n("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              s("dt", Iu, f(M.label), 1),
              s("dd", Nu, f(M.value), 1)
            ]))), 128))
          ])) : _("", !0)
        ], 4)) : m.type === "party" ? (t(), n("section", Ru, [
          s("h2", Uu, f(m.heading), 1),
          s("p", Hu, f(m.name), 1),
          (t(!0), n(z, null, V(d(m.lines), (M, w) => (t(), n("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, f(M), 1))), 128))
        ])) : m.type === "lines" ? (t(), n("section", Ku, [
          s("table", qu, [
            s("thead", null, [
              s("tr", {
                class: "border-b-2 text-left",
                style: Q({ borderColor: a() })
              }, [
                (t(!0), n(z, null, V(d(m.columns), (M, w) => (t(), n("th", {
                  key: w,
                  class: A(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(M), 3))), 128))
              ], 4)
            ]),
            s("tbody", null, [
              (t(!0), n(z, null, V(o(m), (M, w) => (t(), n("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                s("td", Gu, [
                  s("p", null, f(M.description), 1),
                  M.detail ? (t(), n("p", Wu, f(M.detail), 1)) : _("", !0)
                ]),
                (t(!0), n(z, null, V(M.cells, (C, g) => (t(), n("td", {
                  key: g,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(C), 1))), 128))
              ]))), 128)),
              o(m).length === 0 ? (t(), n("tr", Zu, [
                s("td", {
                  colspan: d(m.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(m.empty), 9, Ju)
              ])) : _("", !0)
            ])
          ]),
          i(m).length ? (t(), n("div", Yu, [
            s("dl", Xu, [
              (t(!0), n(z, null, V(i(m), (M, w) => (t(), n("div", {
                key: w,
                class: A([
                  "flex justify-between py-1",
                  M.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: Q(M.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                s("dt", {
                  class: A(M.strong ? "" : "text-neutral-600")
                }, f(M.label), 3),
                s("dd", Qu, f(M.value), 1)
              ], 6))), 128))
            ])
          ])) : _("", !0)
        ])) : m.type === "code" ? (t(), n("section", ec, [
          E(aa, {
            code: u(m.code),
            caption: u(m.caption),
            style: Q(u(m.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : m.type === "steps" ? (t(), n("section", tc, [
          s("h2", ac, f(m.heading), 1),
          s("ol", nc, [
            (t(!0), n(z, null, V(d(m.items), (M, w) => (t(), n("li", {
              key: w,
              class: "flex gap-2"
            }, [
              s("span", {
                class: "font-semibold tabular-nums",
                style: Q({ color: a() })
              }, f(w + 1) + ".", 5),
              s("span", null, f(M), 1)
            ]))), 128))
          ])
        ])) : m.type === "note" ? (t(), n("p", {
          key: 5,
          class: A(["text-sm", m.emphasis ? "font-medium" : "text-neutral-600"]),
          style: Q(m.emphasis ? { color: a() } : void 0)
        }, f(m.text), 7)) : m.type === "footer" ? (t(), n("footer", lc, [
          m.text ? (t(), n("p", sc, f(m.text), 1)) : _("", !0),
          d(m.contacts).length ? (t(), n("p", oc, f(d(m.contacts).join(" · ")), 1)) : _("", !0)
        ])) : (t(), n("p", rc, " This document contains a “" + f(m.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), dc = ["aria-label", "title"], uc = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, cc = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, E$ = /* @__PURE__ */ P({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Jt(), r = $(() => l.value.theme === "dark");
    function o() {
      a({ theme: r.value ? "light" : "dark" });
    }
    return (i, d) => (t(), n("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: o
    }, [
      (t(), n("svg", uc, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = s("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = s("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", cc))
      ]))
    ], 8, dc));
  }
}), fc = ["width", "height"], mc = { key: 0 }, pc = ["x1", "x2", "y1", "y2"], vc = ["x", "y"], gc = ["x1", "x2", "y1", "y2"], hc = ["x", "y"], bc = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], xc = ["x", "y", "width", "height", "fill", "fill-opacity"], yc = ["x", "y"], kc = ["x", "y"], $c = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, wc = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Cc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, _c = { class: "text-xs font-semibold tabular-nums" }, Mc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Sc = { class: "text-muted-foreground" }, Lt = 5.6, F$ = /* @__PURE__ */ P({
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
    function r(L) {
      return a[L] ?? L;
    }
    function o(L, Z) {
      if (!l.thresholds?.length)
        return Z;
      const K = l.thresholds.find((X) => L < X.max);
      return r(K ? K.color : l.aboveColor);
    }
    const i = G(null), d = G(560), u = G(null);
    let p = null;
    de(() => {
      p = new ResizeObserver((L) => {
        d.value = Math.max(160, L[0].contentRect.width);
      }), i.value && p.observe(i.value);
    }), me(() => p?.disconnect());
    const k = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = $(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Z, K) => ({
      ...Z,
      color: Z.color ?? k[K % k.length]
    }))), h = $(() => m.value[0]?.points.map((L) => L.label) ?? []), M = $(() => h.value.length), w = $(() => l.orientation === "horizontal"), C = $(() => Math.max(0, ...h.value.map((L) => L.length))), g = $(() => {
      if (!w.value)
        return l.showAxis ? 44 : 8;
      const L = C.value * Lt + 16;
      return Math.round(Math.min(Math.max(60, L), d.value * 0.4));
    }), c = $(() => Math.max(4, Math.floor((g.value - 16) / Lt)));
    function x(L) {
      return L.length <= c.value ? L : `${L.slice(0, c.value - 1)}…`;
    }
    const v = $(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: g.value
    })), y = $(() => ({
      w: Math.max(1, d.value - v.value.left - v.value.right),
      h: Math.max(1, l.height - v.value.top - v.value.bottom)
    })), S = (L) => l.format ? l.format(L) : B(L);
    function B(L) {
      return Math.abs(L) >= 1e6 ? `${(L / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(L) >= 1e3 ? `${(L / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(L * 100) / 100);
    }
    const q = $(() => {
      const L = h.value.map(
        (ie, ge) => l.stacked ? m.value.reduce((ae, ve) => ae + Math.max(0, ve.points[ge]?.value ?? 0), 0) : Math.max(...m.value.map((ae) => ae.points[ge]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const Z = Math.max(...L, 0);
      if (Z <= 0)
        return 1;
      const K = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((ie) => Z <= ie * K) ?? 10) * K;
    }), N = $(
      () => (w.value ? y.value.h : y.value.w) / Math.max(1, M.value)
    ), Y = $(() => N.value * 0.68), F = $(
      () => l.stacked || m.value.length <= 1 ? Y.value : Y.value / m.value.length
    ), T = $(() => {
      const L = [], Z = new Array(M.value).fill(0);
      return m.value.forEach((K, X) => {
        K.points.forEach((ie, ge) => {
          const ve = Math.max(0, ie.value) / q.value * (w.value ? y.value.w : y.value.h), Ie = (w.value ? v.value.top : v.value.left) + ge * N.value + (N.value - Y.value) / 2, Mt = l.stacked ? 0 : X * F.value;
          L.push(
            w.value ? {
              x: v.value.left + Z[ge],
              y: Ie + Mt,
              w: ve,
              h: Math.max(0, F.value - 2),
              color: o(ie.value, K.color),
              label: ie.label,
              name: K.name,
              value: ie.value,
              index: ge
            } : {
              x: Ie + Mt,
              y: v.value.top + y.value.h - ve - Z[ge],
              w: Math.max(0, F.value - 2),
              h: ve,
              color: o(ie.value, K.color),
              label: ie.label,
              name: K.name,
              value: ie.value,
              index: ge
            }
          ), l.stacked && (Z[ge] += ve);
        });
      }), L;
    }), j = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((L) => ({
        value: q.value * (w.value ? L : 1 - L),
        x: v.value.left + y.value.w * L,
        y: v.value.top + y.value.h * L
      }))
    ), W = $(() => Math.max(1, Math.ceil(M.value / (w.value ? 14 : 10))));
    function I(L) {
      return L === M.value - 1 || L % W.value === 0;
    }
    function R(L) {
      return (w.value ? v.value.top : v.value.left) + L * N.value + N.value / 2;
    }
    const te = $(() => u.value === null ? null : {
      label: h.value[u.value],
      rows: m.value.map((L) => ({
        name: L.name,
        color: L.color,
        value: L.points[u.value]?.value ?? 0
      }))
    });
    return (L, Z) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      M.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: Z[0] || (Z[0] = (K) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", mc, [
            w.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, V(j.value, (K) => (t(), n("line", {
                key: `g-${K.x}`,
                x1: K.x,
                x2: K.x,
                y1: v.value.top,
                y2: v.value.top + y.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, pc))), 128)),
              (t(!0), n(z, null, V(j.value, (K) => (t(), n("text", {
                key: `gt-${K.x}`,
                x: K.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(B(K.value)), 9, vc))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, V(j.value, (K) => (t(), n("line", {
                key: `g-${K.y}`,
                x1: v.value.left,
                x2: d.value - v.value.right,
                y1: K.y,
                y2: K.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, gc))), 128)),
              (t(!0), n(z, null, V(j.value, (K) => (t(), n("text", {
                key: `gt-${K.y}`,
                x: v.value.left - 8,
                y: K.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(B(K.value)), 9, hc))), 128))
            ], 64))
          ])) : _("", !0),
          (t(!0), n(z, null, V(h.value, (K, X) => (t(), n("rect", {
            key: `hit-${X}`,
            x: w.value ? v.value.left : v.value.left + X * N.value,
            y: w.value ? v.value.top + X * N.value : v.value.top,
            width: w.value ? y.value.w : N.value,
            height: w.value ? N.value : y.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === X ? 0.4 : 0,
            onMouseenter: (ie) => u.value = X
          }, null, 40, bc))), 128)),
          (t(!0), n(z, null, V(T.value, (K, X) => (t(), n("rect", {
            key: `b-${X}`,
            x: K.x,
            y: K.y,
            width: K.w,
            height: K.h,
            fill: K.color,
            "fill-opacity": u.value === null || u.value === K.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, xc))), 128)),
          w.value ? (t(!0), n(z, { key: 1 }, V(h.value, (K, X) => oe((t(), n("text", {
            key: `c-${X}`,
            x: v.value.left - 8,
            y: R(X) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(f(x(K)) + " ", 1),
            s("title", null, f(K), 1)
          ], 8, yc)), [
            [_e, I(X)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, V(h.value, (K, X) => oe((t(), n("text", {
            key: `c-${X}`,
            x: R(X),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(K), 9, kc)), [
            [_e, I(X)]
          ])), 128))
        ], 40, fc)),
        te.value ? (t(), n("div", $c, [
          s("p", wc, f(te.value.label), 1),
          (t(!0), n(z, null, V(te.value.rows, (K, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: K.color })
            }, null, 4),
            s("span", Cc, f(K.name || "Value"), 1),
            s("span", _c, f(S(K.value)), 1)
          ]))), 128))
        ])) : _("", !0),
        e.showLegend && m.value.length > 1 ? (t(), n("div", Mc, [
          (t(!0), n(z, null, V(m.value, (K, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: K.color })
            }, null, 4),
            s("span", Sc, f(K.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Bc = ["width", "height"], zc = ["id"], Pc = ["stop-color"], Ac = ["stop-color"], jc = { key: 0 }, Oc = ["x1", "x2", "y1", "y2"], Lc = ["x", "y"], Vc = ["x", "y"], Dc = ["x1", "x2", "y1", "y2"], Tc = ["d", "fill"], Ec = ["d", "stroke", "stroke-dasharray"], Fc = ["cx", "cy", "fill"], Ic = { key: 1 }, Nc = ["x1", "x2", "y1", "y2"], Rc = ["cx", "cy", "fill"], Uc = ["x", "y"], Hc = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Kc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, qc = { class: "text-xs font-semibold tabular-nums" }, Gc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Wc = { class: "text-muted-foreground" }, Zc = /* @__PURE__ */ P({
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
    const l = e, a = $(() => k.value.some((L) => L.axis === "right")), r = G(null), o = G(560), i = G(null);
    let d = null;
    de(() => {
      d = new ResizeObserver((L) => {
        o.value = Math.max(160, L[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), me(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = Math.random().toString(36).slice(2, 9), k = $(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Z, K) => ({
      ...Z,
      color: Z.color ?? u[K % u.length]
    }))), m = $(() => k.value[0]?.points.map((L) => L.label) ?? []), h = $(() => m.value.length), M = $(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), w = (L) => l.format ? l.format(L) : C(L);
    function C(L) {
      return Math.abs(L) >= 1e6 ? `${(L / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(L) >= 1e3 ? `${(L / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(L * 100) / 100);
    }
    function g(L) {
      const Z = Math.max(...L, 0);
      if (Z <= 0)
        return 1;
      const K = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((ie) => Z <= ie * K) ?? 10) * K;
    }
    const c = $(
      () => g(
        k.value.filter((L) => L.axis !== "right").flatMap((L) => L.points.map((Z) => Z.value))
      )
    ), x = $(
      () => g(
        k.value.filter((L) => L.axis === "right").flatMap((L) => L.points.map((Z) => Z.value))
      )
    ), v = $(() => ({
      w: Math.max(1, o.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    }));
    function y(L) {
      return M.value.left + (h.value <= 1 ? 0 : L / (h.value - 1) * v.value.w);
    }
    function S(L, Z = "left") {
      const K = Z === "right" ? x.value : c.value;
      return M.value.top + v.value.h - L / K * v.value.h;
    }
    const B = $(
      () => k.value.map((L) => {
        const Z = L.points.map((X, ie) => ({
          ...X,
          x: y(ie),
          y: S(X.value, L.axis ?? "left")
        })), K = L.stepped ? q(Z) : N(Z);
        return { ...L, pts: Z, line: K, area: Y(K, Z) };
      })
    );
    function q(L) {
      if (L.length === 0)
        return "";
      let Z = `M${L[0].x.toFixed(2)},${L[0].y.toFixed(2)}`;
      for (let K = 1; K < L.length; K++)
        Z += ` L${L[K].x.toFixed(2)},${L[K - 1].y.toFixed(2)} L${L[K].x.toFixed(2)},${L[K].y.toFixed(2)}`;
      return Z;
    }
    function N(L) {
      const Z = L.length;
      if (Z === 0)
        return "";
      if (Z === 1)
        return `M${L[0].x},${L[0].y}`;
      const K = [], X = [];
      for (let ae = 0; ae < Z - 1; ae++)
        K[ae] = L[ae + 1].x - L[ae].x, X[ae] = K[ae] === 0 ? 0 : (L[ae + 1].y - L[ae].y) / K[ae];
      const ie = [X[0]];
      for (let ae = 1; ae < Z - 1; ae++)
        if (X[ae - 1] * X[ae] <= 0)
          ie[ae] = 0;
        else {
          const ve = 2 * K[ae] + K[ae - 1], Ie = K[ae] + 2 * K[ae - 1];
          ie[ae] = (ve + Ie) / (ve / X[ae - 1] + Ie / X[ae]);
        }
      ie[Z - 1] = X[Z - 2];
      let ge = `M${L[0].x.toFixed(2)},${L[0].y.toFixed(2)}`;
      for (let ae = 0; ae < Z - 1; ae++) {
        const ve = K[ae] / 3;
        ge += ` C${(L[ae].x + ve).toFixed(2)},${(L[ae].y + ie[ae] * ve).toFixed(2)} ${(L[ae + 1].x - ve).toFixed(2)},${(L[ae + 1].y - ie[ae + 1] * ve).toFixed(2)} ${L[ae + 1].x.toFixed(2)},${L[ae + 1].y.toFixed(2)}`;
      }
      return ge;
    }
    function Y(L, Z) {
      if (Z.length === 0)
        return "";
      const K = M.value.top + v.value.h;
      return `${L} L${Z[Z.length - 1].x.toFixed(2)},${K} L${Z[0].x.toFixed(2)},${K} Z`;
    }
    const F = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((L) => ({
        y: M.value.top + v.value.h * L,
        value: c.value * (1 - L)
      }))
    ), T = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((L) => ({
        y: M.value.top + v.value.h * L,
        value: x.value * (1 - L)
      }))
    ), j = $(() => Math.max(1, Math.ceil(h.value / 8)));
    function W(L) {
      return L === h.value - 1 || L % j.value === 0;
    }
    function I(L) {
      const Z = L.currentTarget.getBoundingClientRect(), K = L.clientX - Z.left - M.value.left, X = h.value <= 1 ? 1 : v.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(K / X)));
    }
    const R = $(() => {
      if (i.value === null || h.value === 0)
        return null;
      const L = i.value;
      return {
        i: L,
        x: y(L),
        label: m.value[L],
        rows: B.value.map((Z) => ({
          name: Z.name,
          color: Z.color,
          value: Z.points[L]?.value ?? 0,
          y: Z.pts[L]?.y ?? 0
        }))
      };
    }), te = $(() => {
      if (!R.value)
        return {};
      const L = R.value.x > o.value * 0.6;
      return {
        left: `${R.value.x}px`,
        top: "8px",
        transform: L ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (L, Z) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: o.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: I,
          onMouseleave: Z[0] || (Z[0] = (K) => i.value = null)
        }, [
          s("defs", null, [
            (t(!0), n(z, null, V(B.value, (K, X) => (t(), n("linearGradient", {
              id: `pk-fill-${b(p)}-${X}`,
              key: X,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              s("stop", {
                offset: "0%",
                "stop-color": K.color,
                "stop-opacity": "0.25"
              }, null, 8, Pc),
              s("stop", {
                offset: "100%",
                "stop-color": K.color,
                "stop-opacity": "0.01"
              }, null, 8, Ac)
            ], 8, zc))), 128))
          ]),
          e.showAxis ? (t(), n("g", jc, [
            (t(!0), n(z, null, V(F.value, (K) => (t(), n("line", {
              key: K.y,
              x1: M.value.left,
              x2: o.value - M.value.right,
              y1: K.y,
              y2: K.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Oc))), 128)),
            (t(!0), n(z, null, V(F.value, (K) => (t(), n("text", {
              key: `t-${K.y}`,
              x: M.value.left - 8,
              y: K.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(C(K.value)), 9, Lc))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, V(T.value, (K) => (t(), n("text", {
              key: `rt-${K.y}`,
              x: o.value - M.value.right + 8,
              y: K.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(C(K.value)), 9, Vc))), 128)) : _("", !0)
          ])) : _("", !0),
          (t(!0), n(z, null, V(m.value, (K, X) => oe((t(), n("line", {
            key: `v-${X}`,
            x1: y(X),
            x2: y(X),
            y1: M.value.top,
            y2: M.value.top + v.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Dc)), [
            [_e, W(X)]
          ])), 128)),
          (t(!0), n(z, null, V(B.value, (K, X) => (t(), n("g", {
            key: `s-${X}`
          }, [
            K.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: K.area,
              fill: `url(#pk-fill-${b(p)}-${X})`
            }, null, 8, Tc)) : _("", !0),
            s("path", {
              d: K.line,
              fill: "none",
              stroke: K.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": K.dashed ? "6 4" : void 0
            }, null, 8, Ec),
            K.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: K.pts[0].x,
              cy: K.pts[0].y,
              r: "3",
              fill: K.color
            }, null, 8, Fc)) : _("", !0)
          ]))), 128)),
          R.value ? (t(), n("g", Ic, [
            s("line", {
              x1: R.value.x,
              x2: R.value.x,
              y1: M.value.top,
              y2: M.value.top + v.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Nc),
            (t(!0), n(z, null, V(R.value.rows, (K, X) => (t(), n("circle", {
              key: `d-${X}`,
              cx: R.value.x,
              cy: K.y,
              r: "4",
              fill: K.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Rc))), 128))
          ])) : _("", !0),
          (t(!0), n(z, null, V(m.value, (K, X) => oe((t(), n("text", {
            key: `x-${X}`,
            x: y(X),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(K), 9, Uc)), [
            [_e, W(X)]
          ])), 128))
        ], 40, Bc)),
        R.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: Q(te.value)
        }, [
          s("p", Hc, f(R.value.label), 1),
          (t(!0), n(z, null, V(R.value.rows, (K, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: K.color })
            }, null, 4),
            s("span", Kc, f(K.name || "Value"), 1),
            s("span", qc, f(w(K.value)), 1)
          ]))), 128))
        ], 4)) : _("", !0),
        e.showLegend && k.value.length > 1 ? (t(), n("div", Gc, [
          (t(!0), n(z, null, V(B.value, (K, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: K.color })
            }, null, 4),
            s("span", Wc, f(K.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Jc = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Yc = { class: "text-muted-foreground text-[11px] capitalize" }, Xc = { class: "text-sm font-semibold tabular-nums" }, Qc = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, We = /* @__PURE__ */ P({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Jc, [
      s("p", Yc, f(e.label), 1),
      s("p", Xc, [
        U(f(e.value) + " ", 1),
        e.share ? (t(), n("span", Qc, " (" + f(e.share) + ") ", 1)) : _("", !0)
      ])
    ]));
  }
}), ef = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, tf = ["width", "height", "viewBox", "aria-label"], af = ["d", "fill", "fill-opacity", "onMouseenter"], nf = ["x", "y"], lf = ["x", "y"], sf = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, of = ["onMouseenter"], rf = { class: "min-w-0 flex-1 truncate capitalize" }, df = { class: "tabular-nums font-medium" }, uf = { class: "text-muted-foreground w-9 text-right tabular-nums" }, I$ = /* @__PURE__ */ P({
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
    ], r = $(() => l.data.reduce((c, x) => c + x.value, 0)), o = G(null), i = $(() => l.height), d = $(() => i.value / 2 - 4), u = $(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function p(c) {
      return a[c % a.length];
    }
    function k(c) {
      return 1 - Math.min(0.55, Math.floor(c / a.length) * 0.28);
    }
    const m = $(() => {
      if (r.value <= 0)
        return [];
      const c = i.value / 2;
      let x = -Math.PI / 2;
      return l.data.map((v, y) => {
        const S = v.value / r.value, B = S * Math.PI * 2, q = x, N = x + B;
        return x = N, {
          ...v,
          share: S,
          colour: p(y),
          opacity: k(y),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: S >= 0.9999 ? w(c) : M(c, q, N, d.value, u.value)
        };
      });
    });
    function h(c, x, v) {
      return `${(c + Math.cos(x) * v).toFixed(2)},${(c + Math.sin(x) * v).toFixed(2)}`;
    }
    function M(c, x, v, y, S) {
      const B = v - x > Math.PI ? 1 : 0;
      return S <= 0 ? `M${c},${c} L${h(c, x, y)} A${y},${y} 0 ${B} 1 ${h(c, v, y)} Z` : [
        `M${h(c, x, y)}`,
        `A${y},${y} 0 ${B} 1 ${h(c, v, y)}`,
        `L${h(c, v, S)}`,
        `A${S},${S} 0 ${B} 0 ${h(c, x, S)}`,
        "Z"
      ].join(" ");
    }
    function w(c) {
      const x = d.value, v = u.value, y = [
        `M${c - x},${c}`,
        `A${x},${x} 0 1 1 ${c + x},${c}`,
        `A${x},${x} 0 1 1 ${c - x},${c}`,
        "Z"
      ];
      return v <= 0 ? y.join(" ") : [
        ...y,
        `M${c - v},${c}`,
        `A${v},${v} 0 1 0 ${c + v},${c}`,
        `A${v},${v} 0 1 0 ${c - v},${c}`,
        "Z"
      ].join(" ");
    }
    const C = (c) => l.format ? l.format(c) : new Intl.NumberFormat().format(c), g = (c) => `${(c * 100).toFixed(c < 0.01 ? 2 : 0)}%`;
    return (c, x) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", ef, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), n(z, null, V(m.value, (v, y) => (t(), n("path", {
          key: y,
          d: v.path,
          fill: v.colour,
          "fill-opacity": o.value === null || o.value === y ? v.opacity : v.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (S) => o.value = y,
          onMouseleave: x[0] || (x[0] = (S) => o.value = null)
        }, null, 40, af))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          s("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(C(o.value === null ? r.value : m.value[o.value].value)), 9, nf),
          s("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(o.value === null ? "Total" : m.value[o.value].label), 9, lf)
        ], 64)) : _("", !0)
      ], 8, tf)),
      s("ul", sf, [
        (t(!0), n(z, null, V(m.value, (v, y) => (t(), n("li", {
          key: y,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", o.value === y ? "bg-muted" : ""]),
          onMouseenter: (S) => o.value = y,
          onMouseleave: x[1] || (x[1] = (S) => o.value = null)
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: v.colour, opacity: v.opacity })
          }, null, 4),
          s("span", rf, f(v.label), 1),
          s("span", df, f(C(v.value)), 1),
          s("span", uf, f(g(v.share)), 1)
        ], 42, of))), 128))
      ]),
      o.value !== null && e.type === "pie" ? (t(), D(We, {
        key: 0,
        label: m.value[o.value].label,
        value: C(m.value[o.value].value),
        share: g(m.value[o.value].share)
      }, null, 8, ["label", "value", "share"])) : _("", !0)
    ]));
  }
}), cf = ["width", "height", "viewBox", "aria-label"], ff = { class: "text-border" }, mf = ["x1", "x2", "y1", "y2", "stroke-dasharray"], pf = { class: "fill-muted-foreground text-[10px]" }, vf = ["x", "y"], gf = ["x", "y"], hf = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], bf = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, N$ = /* @__PURE__ */ P({
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
    ], r = G(null), o = G(560), i = G(null);
    let d = null;
    de(() => {
      d = new ResizeObserver((j) => {
        const W = j[0]?.contentRect.width ?? 0;
        W > 0 && (o.value = W);
      }), r.value && d.observe(r.value);
    }), me(() => d?.disconnect());
    const u = $(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), p = (j, W) => W.color ?? a[j % a.length], k = $(() => u.value.flatMap((j) => j.points)), m = $(() => k.value.some((j) => typeof j.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, M = $(() => Math.max(10, o.value - h.left - h.right)), w = $(() => Math.max(10, l.height - h.top - h.bottom));
    function C(j) {
      if (j.length === 0)
        return [0, 1];
      const W = Math.min(...j), I = Math.max(...j), R = I - W || Math.abs(I) || 1;
      return [W - R * 0.08, I + R * 0.08];
    }
    const g = $(() => C(k.value.map((j) => j.x))), c = $(() => C(k.value.map((j) => j.y))), x = (j) => {
      const [W, I] = g.value;
      return h.left + (j - W) / (I - W) * M.value;
    }, v = (j) => {
      const [W, I] = c.value;
      return h.top + w.value - (j - W) / (I - W) * w.value;
    }, y = $(() => Math.max(...k.value.map((j) => j.r ?? 0), 0));
    function S(j) {
      if (!m.value || !y.value)
        return 4;
      const W = Math.max(0, j.r ?? 0) / y.value;
      return 3 + Math.sqrt(W) * (l.maxRadius - 3);
    }
    function B([j, W]) {
      return Array.from({ length: 5 }, (I, R) => j + (W - j) / 4 * R);
    }
    const q = $(() => B(g.value)), N = $(() => B(c.value)), Y = (j) => l.formatX?.(j) ?? String(Math.round(j * 100) / 100), F = (j) => l.formatY?.(j) ?? String(Math.round(j * 100) / 100), T = $(() => {
      if (!i.value)
        return null;
      const j = u.value[i.value.s], W = j?.points[i.value.p];
      return W ? { series: j, point: W } : null;
    });
    return (j, W) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "w-full"
    }, [
      (t(), n("svg", {
        width: o.value,
        height: e.height,
        viewBox: `0 0 ${o.value} ${e.height}`,
        class: "overflow-visible",
        role: "img",
        "aria-label": m.value ? "Bubble chart" : "Scatter chart"
      }, [
        s("g", ff, [
          (t(!0), n(z, null, V(N.value, (I, R) => (t(), n("line", {
            key: `gy-${R}`,
            x1: h.left,
            x2: h.left + M.value,
            y1: v(I),
            y2: v(I),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": R === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, mf))), 128))
        ]),
        s("g", pf, [
          (t(!0), n(z, null, V(N.value, (I, R) => (t(), n("text", {
            key: `ty-${R}`,
            x: h.left - 8,
            y: v(I) + 3,
            "text-anchor": "end"
          }, f(F(I)), 9, vf))), 128)),
          (t(!0), n(z, null, V(q.value, (I, R) => (t(), n("text", {
            key: `tx-${R}`,
            x: x(I),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(Y(I)), 9, gf))), 128))
        ]),
        (t(!0), n(z, null, V(u.value, (I, R) => (t(), n("g", {
          key: `s-${R}`
        }, [
          (t(!0), n(z, null, V(I.points, (te, L) => (t(), n("circle", {
            key: `p-${R}-${L}`,
            cx: x(te.x),
            cy: v(te.y),
            r: S(te),
            fill: p(R, I),
            "fill-opacity": m.value ? 0.55 : 0.85,
            stroke: p(R, I),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== R || i.value.p !== L) ? 0.35 : 1,
            onMouseenter: (Z) => i.value = { s: R, p: L },
            onMouseleave: W[0] || (W[0] = (Z) => i.value = null)
          }, null, 40, hf))), 128))
        ]))), 128))
      ], 8, cf)),
      T.value ? (t(), D(We, {
        key: 0,
        label: T.value.point.label ?? T.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${Y(T.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${F(T.value.point.y)}`,
        share: m.value && T.value.point.r != null ? String(T.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : _("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", bf, [
        (t(!0), n(z, null, V(u.value, (I, R) => (t(), n("span", {
          key: `l-${R}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          s("span", {
            class: "size-2.5 rounded-full",
            style: Q({ backgroundColor: p(R, I) }),
            "aria-hidden": "true"
          }, null, 4),
          U(" " + f(I.name), 1)
        ]))), 128))
      ])) : _("", !0)
    ], 512));
  }
}), xf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, yf = ["width", "height", "viewBox"], kf = ["points"], $f = ["x1", "y1", "x2", "y2"], wf = ["points", "fill", "stroke"], Cf = ["cx", "cy", "fill", "onMouseenter"], _f = ["x", "y", "text-anchor"], Mf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Sf = { class: "truncate" }, R$ = /* @__PURE__ */ P({
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
    ], r = $(
      () => l.series.map((v, y) => ({
        ...v,
        color: v.color ?? a[y % a.length]
      }))
    ), o = $(() => r.value[0]?.points.map((v) => v.label) ?? []), i = $(() => o.value.length), d = $(() => l.height), u = $(() => d.value / 2), p = $(() => d.value / 2 - 34), k = $(() => {
      const v = Math.max(...r.value.flatMap((B) => B.points.map((q) => q.value)), 0);
      if (v <= 0)
        return 1;
      const y = 10 ** Math.floor(Math.log10(v));
      return ([1, 2, 2.5, 5, 10].find((B) => v <= B * y) ?? 10) * y;
    });
    function m(v) {
      return v / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(v, y) {
      const S = m(v);
      return {
        x: u.value + Math.cos(S) * p.value * y,
        y: u.value + Math.sin(S) * p.value * y
      };
    }
    function M(v) {
      return Array.from({ length: i.value }, (y, S) => {
        const B = h(S, v);
        return `${B.x.toFixed(2)},${B.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = $(() => [0.25, 0.5, 0.75, 1].map((v) => ({ f: v, points: M(v) }))), C = $(
      () => r.value.map((v) => {
        const y = v.points.map((S) => Math.max(0, S.value) / k.value);
        return {
          name: v.name,
          color: v.color,
          values: v.points,
          outline: y.map((S, B) => {
            const q = h(B, S);
            return `${q.x.toFixed(2)},${q.y.toFixed(2)}`;
          }).join(" "),
          dots: y.map((S, B) => h(B, S))
        };
      })
    ), g = $(
      () => o.value.map((v, y) => {
        const S = m(y), B = u.value + Math.cos(S) * (p.value + 14), q = u.value + Math.sin(S) * (p.value + 14), N = Math.cos(S);
        return {
          label: v,
          x: B,
          y: q + 3,
          anchor: Math.abs(N) < 0.2 ? "middle" : N > 0 ? "start" : "end"
        };
      })
    ), c = G(null), x = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v);
    return (v, y) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", xf, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, V(w.value, (S) => (t(), n("polygon", {
          key: S.f,
          points: S.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, kf))), 128)),
        (t(!0), n(z, null, V(o.value, (S, B) => (t(), n("line", {
          key: `spoke-${B}`,
          x1: u.value,
          y1: u.value,
          x2: h(B, 1).x,
          y2: h(B, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, $f))), 128)),
        (t(!0), n(z, null, V(C.value, (S, B) => (t(), n("g", {
          key: `s-${B}`
        }, [
          s("polygon", {
            points: S.outline,
            fill: S.color,
            "fill-opacity": "0.16",
            stroke: S.color,
            "stroke-width": "2"
          }, null, 8, wf),
          (t(!0), n(z, null, V(S.dots, (q, N) => (t(), n("circle", {
            key: N,
            cx: q.x,
            cy: q.y,
            r: "3",
            fill: S.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (Y) => c.value = {
              series: S.name,
              axis: o.value[N],
              value: S.values[N]?.value ?? 0
            },
            onMouseleave: y[0] || (y[0] = (Y) => c.value = null)
          }, null, 40, Cf))), 128))
        ]))), 128)),
        (t(!0), n(z, null, V(g.value, (S, B) => (t(), n("text", {
          key: `l-${B}`,
          x: S.x,
          y: S.y,
          "text-anchor": S.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(S.label), 9, _f))), 128))
      ], 8, yf)),
      e.showLegend ? (t(), n("ul", Mf, [
        (t(!0), n(z, null, V(r.value, (S, B) => (t(), n("li", {
          key: B,
          class: "flex items-center gap-2 text-xs"
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: S.color })
          }, null, 4),
          s("span", Sf, f(S.name), 1)
        ]))), 128))
      ])) : _("", !0),
      c.value ? (t(), D(We, {
        key: 1,
        label: `${c.value.series} — ${c.value.axis}`,
        value: x(c.value.value)
      }, null, 8, ["label", "value"])) : _("", !0)
    ]));
  }
}), Bf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, zf = ["width", "height", "viewBox"], Pf = ["cx", "cy", "r"], Af = ["d", "fill", "fill-opacity", "onMouseenter"], jf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Of = { class: "min-w-0 flex-1 truncate capitalize" }, Lf = { class: "font-medium tabular-nums" }, U$ = /* @__PURE__ */ P({
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
    ], r = G(null), o = $(() => l.height), i = $(() => o.value / 2), d = $(() => o.value / 2 - 6), u = $(() => Math.max(...l.data.map((M) => Math.max(0, M.value)), 0)), p = $(() => {
      const M = l.data.length;
      if (M === 0 || u.value <= 0)
        return [];
      const w = Math.PI * 2 / M;
      return l.data.map((C, g) => {
        const c = Math.sqrt(Math.max(0, C.value) / u.value), x = d.value * c, v = g * w - Math.PI / 2, y = v + w;
        return {
          ...C,
          color: a[g % a.length],
          share: u.value === 0 ? 0 : C.value / u.value,
          path: k(i.value, v, y, x)
        };
      });
    });
    function k(M, w, C, g) {
      if (g <= 0)
        return "";
      if (C - w >= Math.PI * 2 - 1e-6)
        return `M${M - g},${M} A${g},${g} 0 1 1 ${M + g},${M} A${g},${g} 0 1 1 ${M - g},${M} Z`;
      const c = C - w > Math.PI ? 1 : 0, x = M + Math.cos(w) * g, v = M + Math.sin(w) * g, y = M + Math.cos(C) * g, S = M + Math.sin(C) * g;
      return `M${M},${M} L${x.toFixed(2)},${v.toFixed(2)} A${g.toFixed(2)},${g.toFixed(2)} 0 ${c} 1 ${y.toFixed(2)},${S.toFixed(2)} Z`;
    }
    const m = $(() => [0.5, 0.75, 1].map((M) => d.value * M)), h = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, w) => p.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Bf, [
      (t(), n("svg", {
        width: o.value,
        height: o.value,
        viewBox: `0 0 ${o.value} ${o.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, V(m.value, (C) => (t(), n("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Pf))), 128)),
        (t(!0), n(z, null, V(p.value, (C, g) => (t(), n("path", {
          key: g,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === g ? 0.75 : 0.3,
          onMouseenter: (c) => r.value = g,
          onMouseleave: w[0] || (w[0] = (c) => r.value = null)
        }, null, 40, Af))), 128))
      ], 8, zf)),
      e.showLegend ? (t(), n("ul", jf, [
        (t(!0), n(z, null, V(p.value, (C, g) => (t(), n("li", {
          key: g,
          class: "flex items-center gap-2 text-xs"
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: C.color })
          }, null, 4),
          s("span", Of, f(C.label), 1),
          s("span", Lf, f(h(C.value)), 1)
        ]))), 128))
      ])) : _("", !0),
      r.value !== null ? (t(), D(We, {
        key: 1,
        label: p.value[r.value].label,
        value: h(p.value[r.value].value)
      }, null, 8, ["label", "value"])) : _("", !0)
    ]));
  }
}), Vf = ["width", "height"], Df = ["x1", "x2", "y1", "y2"], Tf = ["x", "y"], Ef = ["x", "y"], Ff = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], If = ["x", "y", "width", "height", "fill", "fill-opacity"], Nf = ["d", "stroke"], Rf = ["cx", "cy", "fill"], Uf = ["x", "y"], Hf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Kf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, qf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Gf = { class: "text-xs font-semibold tabular-nums" }, Wf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Zf = { class: "text-muted-foreground" }, H$ = /* @__PURE__ */ P({
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
    const l = e, a = G(null), r = G(560), o = G(null);
    let i = null;
    de(() => {
      i = new ResizeObserver((R) => {
        r.value = Math.max(160, R[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), me(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], p = $(
      () => l.bars.map((R, te) => ({
        ...R,
        color: R.color ?? d[te % d.length]
      }))
    ), k = $(
      () => l.lines.map((R, te) => ({
        ...R,
        color: R.color ?? u[te % u.length]
      }))
    ), m = $(
      () => p.value[0]?.points.map((R) => R.label) ?? k.value[0]?.points.map((R) => R.label) ?? []
    ), h = $(() => m.value.length), M = $(() => l.lineAxis === "right"), w = $(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = $(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function g(R) {
      const te = Math.max(...R, 0);
      if (te <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(te));
      return ([1, 2, 2.5, 5, 10].find((K) => te <= K * L) ?? 10) * L;
    }
    const c = $(
      () => g([
        ...p.value.flatMap((R) => R.points.map((te) => te.value)),
        ...M.value ? [] : k.value.flatMap((R) => R.points.map((te) => te.value))
      ])
    ), x = $(
      () => M.value ? g(k.value.flatMap((R) => R.points.map((te) => te.value))) : c.value
    ), v = $(() => C.value.w / Math.max(1, h.value)), y = $(() => v.value * 0.6), S = $(() => y.value / Math.max(1, p.value.length));
    function B(R) {
      return w.value.left + R * v.value + v.value / 2;
    }
    const q = $(
      () => p.value.flatMap(
        (R, te) => R.points.map((L, Z) => {
          const K = Math.max(0, L.value) / c.value * C.value.h;
          return {
            x: B(Z) - y.value / 2 + te * S.value,
            y: w.value.top + C.value.h - K,
            w: Math.max(0, S.value - 2),
            h: K,
            color: R.color,
            index: Z,
            name: R.name,
            value: L.value,
            label: L.label
          };
        })
      )
    ), N = $(
      () => k.value.map((R) => {
        const te = R.points.map((L, Z) => ({
          x: B(Z),
          y: w.value.top + C.value.h - Math.max(0, L.value) / x.value * C.value.h,
          value: L.value
        }));
        return {
          ...R,
          pts: te,
          d: te.map((L, Z) => `${Z === 0 ? "M" : "L"}${L.x.toFixed(2)},${L.y.toFixed(2)}`).join(" ")
        };
      })
    ), Y = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((R) => ({
        y: w.value.top + C.value.h * R,
        left: c.value * (1 - R),
        right: x.value * (1 - R)
      }))
    ), F = $(() => Math.max(1, Math.ceil(h.value / 10)));
    function T(R) {
      return R === h.value - 1 || R % F.value === 0;
    }
    const j = (R) => l.format ? l.format(R) : W(R);
    function W(R) {
      return Math.abs(R) >= 1e6 ? `${(R / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(R) >= 1e3 ? `${(R / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(R * 100) / 100);
    }
    const I = $(() => {
      if (o.value === null)
        return null;
      const R = o.value;
      return {
        label: m.value[R],
        rows: [
          ...p.value.map((te) => ({
            name: te.name,
            color: te.color,
            value: te.points[R]?.value ?? 0
          })),
          ...k.value.map((te) => ({
            name: te.name,
            color: te.color,
            value: te.points[R]?.value ?? 0
          }))
        ]
      };
    });
    return (R, te) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: te[0] || (te[0] = (L) => o.value = null)
        }, [
          (t(!0), n(z, null, V(Y.value, (L) => (t(), n("line", {
            key: `g-${L.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: L.y,
            y2: L.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Df))), 128)),
          (t(!0), n(z, null, V(Y.value, (L) => (t(), n("text", {
            key: `lt-${L.y}`,
            x: w.value.left - 8,
            y: L.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(W(L.left)), 9, Tf))), 128)),
          M.value ? (t(!0), n(z, { key: 0 }, V(Y.value, (L) => (t(), n("text", {
            key: `rt-${L.y}`,
            x: r.value - w.value.right + 8,
            y: L.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(W(L.right)), 9, Ef))), 128)) : _("", !0),
          (t(!0), n(z, null, V(m.value, (L, Z) => (t(), n("rect", {
            key: `hit-${Z}`,
            x: w.value.left + Z * v.value,
            y: w.value.top,
            width: v.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": o.value === Z ? 0.4 : 0,
            onMouseenter: (K) => o.value = Z
          }, null, 40, Ff))), 128)),
          (t(!0), n(z, null, V(q.value, (L, Z) => (t(), n("rect", {
            key: `b-${Z}`,
            x: L.x,
            y: L.y,
            width: L.w,
            height: L.h,
            fill: L.color,
            "fill-opacity": o.value === null || o.value === L.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, If))), 128)),
          (t(!0), n(z, null, V(N.value, (L, Z) => (t(), n("g", {
            key: `l-${Z}`
          }, [
            s("path", {
              d: L.d,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Nf),
            o.value !== null && L.pts[o.value] ? (t(), n("circle", {
              key: 0,
              cx: L.pts[o.value].x,
              cy: L.pts[o.value].y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Rf)) : _("", !0)
          ]))), 128)),
          (t(!0), n(z, null, V(m.value, (L, Z) => oe((t(), n("text", {
            key: `x-${Z}`,
            x: B(Z),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, Uf)), [
            [_e, T(Z)]
          ])), 128))
        ], 40, Vf)),
        I.value ? (t(), n("div", Hf, [
          s("p", Kf, f(I.value.label), 1),
          (t(!0), n(z, null, V(I.value.rows, (L, Z) => (t(), n("div", {
            key: Z,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: L.color })
            }, null, 4),
            s("span", qf, f(L.name), 1),
            s("span", Gf, f(j(L.value)), 1)
          ]))), 128))
        ])) : _("", !0),
        e.showLegend ? (t(), n("div", Wf, [
          (t(!0), n(z, null, V([...p.value, ...k.value], (L, Z) => (t(), n("span", {
            key: Z,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: L.color })
            }, null, 4),
            s("span", Zf, f(L.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Jf = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Yf = { class: "text-muted-foreground" }, Xf = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Qf = ["width", "height"], em = ["x", "y"], tm = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], am = ["x", "y"], nm = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, lm = { class: "text-[11px] font-medium capitalize" }, sm = { class: "text-muted-foreground text-[11px] capitalize" }, om = { class: "text-sm font-semibold tabular-nums" }, rm = { class: "text-muted-foreground text-xs font-normal" }, K$ = /* @__PURE__ */ P({
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
    const l = e, a = G(null), r = G(560), o = G(null);
    let i = null;
    de(() => {
      i = new ResizeObserver((y) => {
        r.value = Math.max(160, y[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), me(() => i?.disconnect());
    const d = $(() => l.series[0]?.points.map((y) => y.label) ?? []), u = $(() => l.series.length), p = $(() => d.value.length), k = $(() => Math.min(140, Math.max(60, r.value * 0.16))), m = $(() => Math.max(1, r.value - k.value - 8)), h = $(() => m.value / Math.max(1, p.value)), M = $(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function w(y) {
      if (y === 0)
        return "var(--muted)";
      const S = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(y / S * 100)}%, var(--muted))`;
    }
    function C(y) {
      for (let S = 0; S < l.buckets.length; S++) {
        const B = l.buckets[S].max;
        if (B === void 0 || y < B)
          return S;
      }
      return l.buckets.length - 1;
    }
    const g = $(
      () => l.series.flatMap(
        (y, S) => y.points.map((B, q) => {
          const N = C(B.value);
          return {
            row: S,
            col: q,
            x: k.value + q * h.value,
            y: 4 + S * M.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, M.value - 4),
            colour: w(N),
            label: B.label,
            value: B.value,
            rowName: y.name,
            bucketLabel: l.buckets[N].label
          };
        })
      )
    ), c = $(() => h.value < 2), x = $(() => o.value ? g.value.find((y) => y.row === o.value.row && y.col === o.value.col) ?? null : null), v = (y) => l.format ? l.format(y) : new Intl.NumberFormat().format(y);
    return (y, S) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || p.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        s("div", Jf, [
          (t(!0), n(z, null, V(e.buckets, (B, q) => (t(), n("span", {
            key: q,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            s("span", {
              class: "size-3 rounded-sm border",
              style: Q({ background: w(q) })
            }, null, 4),
            s("span", Yf, f(B.label), 1)
          ]))), 128))
        ]),
        c.value ? (t(), n("p", Xf, f(p.value) + " columns - too many to label individually ", 1)) : _("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: S[0] || (S[0] = (B) => o.value = null)
        }, [
          (t(!0), n(z, null, V(e.series, (B, q) => (t(), n("text", {
            key: `r-${q}`,
            x: k.value - 10,
            y: 4 + q * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(B.name), 9, em))), 128)),
          (t(!0), n(z, null, V(g.value, (B, q) => (t(), n("rect", {
            key: q,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.colour,
            "fill-opacity": o.value === null || o.value.row === B.row && o.value.col === B.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (N) => o.value = { row: B.row, col: B.col }
          }, null, 40, tm))), 128)),
          e.showColumnLabels && !c.value ? (t(!0), n(z, { key: 0 }, V(d.value, (B, q) => (t(), n("text", {
            key: `c-${q}`,
            x: k.value + q * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(B), 9, am))), 128)) : _("", !0)
        ], 40, Qf)),
        x.value ? (t(), n("div", nm, [
          s("p", lm, f(x.value.label), 1),
          s("p", sm, f(x.value.rowName), 1),
          s("p", om, [
            U(f(v(x.value.value)) + " ", 1),
            s("span", rm, "(" + f(x.value.bucketLabel) + ")", 1)
          ])
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), im = ["viewBox"], dm = { key: 0 }, um = ["id"], cm = ["stop-color"], fm = ["stop-color"], mm = ["d", "fill"], pm = ["d", "stroke"], Vt = 100, Ne = 30, et = /* @__PURE__ */ P({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = Math.random().toString(36).slice(2, 9), r = $(() => {
      const u = l.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const p = Math.min(...u), m = Math.max(...u) - p || 1;
      return u.map((h, M) => ({
        x: M / (u.length - 1) * Vt,
        y: Ne - (h - p) / m * (Ne - 4) - 2
      }));
    });
    function o(u) {
      const p = u.length;
      if (p < 2)
        return "";
      const k = [], m = [];
      for (let w = 0; w < p - 1; w++)
        k[w] = u[w + 1].x - u[w].x, m[w] = k[w] === 0 ? 0 : (u[w + 1].y - u[w].y) / k[w];
      const h = [m[0]];
      for (let w = 1; w < p - 1; w++)
        if (m[w - 1] * m[w] <= 0)
          h[w] = 0;
        else {
          const C = 2 * k[w] + k[w - 1], g = k[w] + 2 * k[w - 1];
          h[w] = (C + g) / (C / m[w - 1] + g / m[w]);
        }
      h[p - 1] = m[p - 2];
      let M = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let w = 0; w < p - 1; w++) {
        const C = k[w] / 3;
        M += ` C${(u[w].x + C).toFixed(2)},${(u[w].y + h[w] * C).toFixed(2)} ${(u[w + 1].x - C).toFixed(2)},${(u[w + 1].y - h[w + 1] * C).toFixed(2)} ${u[w + 1].x.toFixed(2)},${u[w + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = $(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? o(u) : u.map((p, k) => `${k === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
    }), d = $(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${Ne} L${u[0].x.toFixed(2)},${Ne} Z`;
    });
    return (u, p) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${Vt} ${Ne}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: Q({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", dm, [
        s("linearGradient", {
          id: `pk-spark-${b(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          s("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, cm),
          s("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, fm)
        ], 8, um)
      ])) : _("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${b(a)})`
      }, null, 8, mm)) : _("", !0),
      s("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, pm)
    ], 12, im)) : _("", !0);
  }
}), vm = { class: "flex items-center gap-1 text-xs" }, gm = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, hm = {
  key: 0,
  class: "text-muted-foreground truncate"
}, na = /* @__PURE__ */ P({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, a = $(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = $(
      () => a.value === null ? "text-muted-foreground" : a.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), o = $(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = $(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (d, u) => (t(), n("span", vm, [
      s("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        s("span", gm, f(o.value), 1),
        U(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", hm, f(e.comparison), 1)) : _("", !0)
    ]));
  }
}), bm = ["aria-label"], De = /* @__PURE__ */ P({
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
    }, r = $(() => a[l.variant] ?? a.text), o = $(() => Math.max(1, Math.min(l.count, 50)));
    function i(d) {
      if (!(l.variant !== "text" || o.value === 1))
        return d === o.value - 1 ? "60%" : void 0;
    }
    return (d, u) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: Q(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(z, null, V(o.value, (p) => (t(), n("span", {
        key: p,
        "aria-hidden": "true",
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: Q({
          width: i(p - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, bm));
  }
}), xm = {
  class: "bg-card flex flex-col gap-3 rounded-lg border p-4",
  "data-slot": "chart-card"
}, ym = { class: "flex flex-wrap items-start justify-between gap-2" }, km = { class: "flex min-w-0 items-start gap-2" }, $m = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wm = ["d"], Cm = { class: "min-w-0" }, _m = { class: "text-sm font-medium" }, Mm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Sm = { class: "flex shrink-0 items-center gap-1.5" }, Bm = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, zm = ["aria-pressed", "onClick"], Pm = ["aria-expanded", "aria-label", "title"], Am = ["aria-label"], jm = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Om = ["d"], Lm = /* @__PURE__ */ P({
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
    const l = e, a = ca(), r = G(l.defaultCollapsed), o = $(() => !!l.icon && !a.icon), i = $(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", xm, [
      s("div", ym, [
        s("div", km, [
          H(d.$slots, "icon", {}, () => [
            o.value ? (t(), n("svg", $m, [
              s("path", {
                d: b(se)(e.icon)
              }, null, 8, wm)
            ])) : _("", !0)
          ]),
          s("div", Cm, [
            s("p", _m, f(e.label), 1),
            e.description ? (t(), n("p", Mm, f(e.description), 1)) : _("", !0),
            H(d.$slots, "trend")
          ])
        ]),
        s("div", Sm, [
          H(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Bm, [
            (t(!0), n(z, null, V(e.periods, (p) => (t(), n("button", {
              key: p.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === p.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === p.value,
              onClick: (k) => d.$emit("update:period", p.value)
            }, f(p.label), 11, zm))), 128))
          ])) : _("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: u[0] || (u[0] = (p) => r.value = !r.value)
          }, [
            (t(), n("svg", {
              class: A(["size-4 transition-transform", r.value ? "-rotate-90" : ""]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [...u[2] || (u[2] = [
              s("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, Pm)) : _("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (p) => d.$emit("hide"))
          }, [
            (t(), n("svg", jm, [
              s("path", {
                d: b(se)("eye-off")
              }, null, 8, Om)
            ]))
          ], 8, Am)) : _("", !0)
        ])
      ]),
      oe(s("div", {
        style: Q(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), D(De, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: Q({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : H(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4), [
        [_e, !r.value]
      ])
    ]));
  }
}), Vm = ["aria-pressed", "aria-label", "title"], Dm = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tm = ["d"], Em = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Fm = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Im = ["href"], Nm = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rm = ["d"], Um = ["aria-label", "onClick"], Hm = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Km = ["d"], qm = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gm = ["d"], Wm = {
  key: 0,
  class: "flex flex-col gap-1"
}, Zm = ["onClick"], Jm = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ym = ["d"], Xm = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Qm = /* @__PURE__ */ P({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(!1), i = G(!1), d = $(
      () => a.catalog.filter((k) => !a.items.some((m) => m.id === k.id))
    );
    function u(k) {
      r(
        "update:items",
        a.items.filter((m) => m.id !== k)
      );
    }
    function p(k) {
      r("update:items", [...a.items, k]), i.value = !1;
    }
    return (k, m) => (t(), n(z, null, [
      E(Lm, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: m[3] || (m[3] = (h) => r("hide"))
      }, {
        actions: O(() => [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": o.value,
            "aria-label": o.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: o.value ? "Done" : "Edit",
            onClick: m[0] || (m[0] = (h) => o.value = !o.value)
          }, [
            (t(), n("svg", Dm, [
              s("path", {
                d: b(se)(o.value ? "check" : "pencil")
              }, null, 8, Tm)
            ]))
          ], 8, Vm)
        ]),
        default: O(() => [
          e.items.length === 0 ? (t(), n("div", Em, [
            m[7] || (m[7] = s("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            E(ne, {
              size: "sm",
              variant: "outline",
              onClick: m[1] || (m[1] = (h) => i.value = !0)
            }, {
              default: O(() => [...m[6] || (m[6] = [
                U("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Fm, [
            (t(!0), n(z, null, V(e.items, (h) => (t(), n("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              s("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Nm, [
                  s("path", {
                    d: b(se)(h.icon)
                  }, null, 8, Rm)
                ])),
                U(" " + f(h.label), 1)
              ], 8, Im),
              o.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (M) => u(h.id)
              }, [
                (t(), n("svg", Hm, [
                  s("path", {
                    d: b(se)("x")
                  }, null, 8, Km)
                ]))
              ], 8, Um)) : _("", !0)
            ]))), 128)),
            o.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: m[2] || (m[2] = (h) => i.value = !0)
            }, [
              (t(), n("svg", qm, [
                s("path", {
                  d: b(se)("plus")
                }, null, 8, Gm)
              ])),
              m[8] || (m[8] = U(" Add ", -1))
            ])) : _("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      E(rt, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: m[5] || (m[5] = (h) => i.value = !1)
      }, {
        footer: O(() => [
          E(ne, {
            variant: "outline",
            onClick: m[4] || (m[4] = (h) => i.value = !1)
          }, {
            default: O(() => [...m[9] || (m[9] = [
              U("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: O(() => [
          d.value.length ? (t(), n("ul", Wm, [
            (t(!0), n(z, null, V(d.value, (h) => (t(), n("li", {
              key: h.id
            }, [
              s("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => p(h)
              }, [
                (t(), n("svg", Jm, [
                  s("path", {
                    d: b(se)(h.icon)
                  }, null, 8, Ym)
                ])),
                U(" " + f(h.label), 1)
              ], 8, Zm)
            ]))), 128))
          ])) : (t(), n("p", Xm, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), ep = { class: "mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6" }, tp = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, ap = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, np = { class: "relative w-full max-w-xl" }, lp = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sp = ["d"], op = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, rp = ["data-slot"], ip = { class: "px-5 py-4" }, dp = { class: "mb-3 text-sm font-semibold" }, up = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, cp = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fp = ["d"], mp = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, q$ = /* @__PURE__ */ P({
  __name: "DirectoryPage",
  props: {
    title: {},
    description: { default: null },
    searchPlaceholder: { default: "Search" },
    sections: {}
  },
  setup(e) {
    const l = e, a = G(""), r = Gt({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function o(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const i = $(() => {
      const d = a.value.trim().toLowerCase();
      return l.sections.map((u) => ({
        ...u,
        links: d ? u.links.filter((p) => p.label.toLowerCase().includes(d)) : u.links
      })).filter((u) => u.links.length > 0);
    });
    return (d, u) => (t(), n("div", ep, [
      s("header", null, [
        s("h1", tp, f(e.title), 1),
        e.description ? (t(), n("p", ap, f(e.description), 1)) : _("", !0)
      ]),
      s("div", np, [
        (t(), n("svg", lp, [
          s("path", {
            d: b(se)("search")
          }, null, 8, sp)
        ])),
        E(fe, {
          modelValue: a.value,
          "onUpdate:modelValue": u[0] || (u[0] = (p) => a.value = p),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      i.value.length ? (t(), n("div", op, [
        (t(!0), n(z, null, V(i.value, (p) => (t(), n("section", {
          key: p.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${p.key}`
        }, [
          s("div", ip, [
            s("h2", dp, f(p.title), 1),
            s("div", up, [
              (t(!0), n(z, null, V(p.links, (k) => (t(), D(Pe(o(k) ? "a" : b(vn)), {
                key: k.href + k.label,
                href: k.href,
                class: A(b(r)),
                target: o(k) ? "_blank" : void 0,
                rel: o(k) ? "noopener noreferrer" : void 0
              }, {
                default: O(() => [
                  (t(), n("svg", cp, [
                    s("path", {
                      d: b(se)(k.icon)
                    }, null, 8, fp)
                  ])),
                  U(" " + f(k.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, rp))), 128))
      ])) : (t(), n("p", mp, ' Nothing matches "' + f(a.value) + '". ', 1))
    ]));
  }
}), pp = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, vp = { class: "flex flex-1 flex-col gap-1 p-4" }, gp = { class: "text-muted-foreground relative text-xs font-medium" }, hp = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, bp = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, xp = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, yp = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, G$ = /* @__PURE__ */ P({
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
    return (a, r) => (t(), n("div", pp, [
      s("div", vp, [
        s("p", gp, f(e.label), 1),
        e.loading ? (t(), D(De, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", hp, " Could not load ")) : (t(), n("span", bp, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(na, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", xp, f(e.description), 1)) : _("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", yp, [
        E(et, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : _("", !0)
    ]));
  }
}), kp = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, $p = { class: "flex flex-col gap-1 p-4" }, wp = { class: "flex items-start justify-between gap-2" }, Cp = { class: "text-sm font-medium" }, _p = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Mp = { class: "mt-1 flex flex-wrap items-center gap-2" }, Sp = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Bp = {
  key: 0,
  class: "-mb-px"
}, Ye = /* @__PURE__ */ P({
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
    const l = e, a = $(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = $(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), o = $(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), n("div", kp, [
      s("div", $p, [
        s("div", wp, [
          s("p", Cp, f(e.label), 1),
          H(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", _p, f(e.caption), 1)) : _("", !0),
        s("div", Mp, [
          e.loading ? (t(), D(De, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Sp, f(o.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : _("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Bp, [
        E(et, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : _("", !0)
    ]));
  }
}), zp = { class: "relative flex flex-col gap-2" }, Pp = ["aria-label"], Ap = ["onMouseenter"], jp = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Op = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Lp = { class: "truncate" }, Vp = { class: "text-sm font-semibold tabular-nums" }, W$ = /* @__PURE__ */ P({
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
    ], r = $(() => l.segments.reduce((k, m) => k + Math.max(0, m.value), 0)), o = $(() => Math.max(l.total ?? r.value, r.value, 1)), i = $(
      () => l.segments.map((k, m) => {
        const h = Math.max(0, k.value) / o.value;
        return {
          ...k,
          color: k.color ?? a[m % a.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: k.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (k) => l.format ? l.format(k) : new Intl.NumberFormat().format(k), u = G(null), p = (k) => `${(k * 100).toFixed(k > 0 && k < 0.01 ? 1 : 0)}%`;
    return (k, m) => (t(), n("div", zp, [
      s("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: Q({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, V(i.value, (h, M) => (t(), n("span", {
          key: M,
          class: A(["h-full transition-all", [
            M === 0 ? "rounded-l-full" : "",
            M === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: Q({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === M ? 1 : 0.4
          }),
          onMouseenter: (w) => u.value = M,
          onMouseleave: m[0] || (m[0] = (w) => u.value = null)
        }, null, 46, Ap))), 128))
      ], 12, Pp),
      e.showLegend ? (t(), n("div", jp, [
        (t(!0), n(z, null, V(i.value, (h, M) => (t(), n("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          s("span", Op, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: h.color })
            }, null, 4),
            s("span", Lp, f(h.label), 1)
          ]),
          s("span", Vp, f(d(h.value)), 1)
        ]))), 128))
      ])) : _("", !0),
      u.value !== null ? (t(), D(We, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: p(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : _("", !0)
    ]));
  }
}), Dp = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Tp = ["data-heading"], Ep = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Fp = { class: "text-muted-foreground truncate" }, Ip = ["aria-label"], Z$ = /* @__PURE__ */ P({
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
    }, o = $(
      () => l.rows.map((i) => {
        if (!i.bar || i.bar.segments.length === 0)
          return { ...i, segments: [] };
        const d = i.bar.segments.reduce((p, k) => p + Math.max(0, k.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
        return {
          ...i,
          segments: i.bar.segments.map((p) => ({
            ...p,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: p.value > 0 ? `max(2px, ${(Math.max(0, p.value) / u * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, d) => (t(), n("div", Dp, [
      (t(!0), n(z, null, V(o.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), n("div", Ep, [
          s("span", Fp, f(u.label), 1),
          s("span", {
            class: A(["shrink-0 font-medium tabular-nums", u.tone ? a[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((p) => `${p.label} ${p.value}`).join(", ")
        }, [
          (t(!0), n(z, null, V(u.segments, (p, k) => (t(), n("span", {
            key: k,
            class: A(["h-full transition-all", r[p.tone ?? "neutral"]]),
            style: Q({ width: p.width })
          }, null, 6))), 128))
        ], 8, Ip)) : _("", !0)
      ], 8, Tp))), 128))
    ]));
  }
}), Np = {
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
}, Rp = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Up(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Hp(e, l) {
  return l || (e ? Np[Up(e)] ?? "neutral" : "neutral");
}
function Kp(e, l) {
  return Rp[Hp(e, l)];
}
const pe = /* @__PURE__ */ P({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = $(() => Kp(l.status, l.tone));
    return (r, o) => (t(), D(Re, {
      variant: a.value,
      class: A(l.class)
    }, {
      default: O(() => [
        H(r.$slots, "default", {}, () => [
          U(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), qp = ["data-layout"], Gp = ["src", "alt"], Wp = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Zp = ["src"], Jp = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Yp = ["onMouseenter"], Xp = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Qp = { class: "min-w-0" }, ev = { class: "truncate text-sm font-medium" }, tv = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, av = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, nv = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, lv = { class: "min-w-0" }, sv = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, ov = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, rv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, iv = ["d"], dv = ["aria-label"], uv = /* @__PURE__ */ P({
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
    }, r = e, o = l, i = G(0);
    function d(g) {
      if (typeof g != "string")
        return null;
      const c = g.trim();
      return c === "" ? null : /^(https?:)?\/\//i.test(c) ? c : null;
    }
    const u = $(() => {
      const g = [r.item.image, ...r.item.images ?? []].map(d).filter((c) => c !== null);
      return [...new Set(g)];
    }), p = $(() => u.value[i.value] ?? u.value[0] ?? null), k = $(
      () => r.item.label.split(/\s+/).slice(0, 2).map((g) => g[0]?.toUpperCase() ?? "").join("")
    ), m = $(() => {
      const g = r.item.progress;
      if (!g)
        return null;
      const c = Math.max(g.total ?? 100, g.value, 1);
      return `${Math.min(100, Math.max(0, g.value / c * 100)).toFixed(2)}%`;
    }), h = $(() => u.value.length > 1 ? u.value[1] : null), M = $(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = $(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(g) {
      g.stopPropagation(), o("cart", r.item.key);
    }
    return (g, c) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: A(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: c[0] || (c[0] = (x) => o("select", e.item.key)),
      onKeydown: c[1] || (c[1] = fa(ce((x) => o("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: c[2] || (c[2] = (x) => i.value = 0)
    }, [
      s("div", {
        class: A([
          "bg-muted relative overflow-hidden",
          e.layout === "list" ? "aspect-square w-20 shrink-0 sm:w-24" : "aspect-[4/3] w-full"
        ])
      }, [
        p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, Gp)) : (t(), n("span", Wp, f(k.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Zp)) : _("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", Jp, [
          (t(!0), n(z, null, V(u.value, (x, v) => (t(), n("span", {
            key: v,
            class: A(["size-1.5 rounded-full", v === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (y) => i.value = v
          }, null, 42, Yp))), 128))
        ])) : _("", !0)
      ], 2),
      s("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        s("div", Xp, [
          s("div", Qp, [
            s("p", ev, f(e.item.label), 1),
            e.item.caption ? (t(), n("p", tv, f(e.item.caption), 1)) : _("", !0),
            e.item.facts?.length ? (t(), n("p", av, f(e.item.facts.join(" · ")), 1)) : _("", !0)
          ]),
          e.item.status ? (t(), D(pe, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : _("", !0)
        ]),
        s("div", nv, [
          s("div", lv, [
            e.item.price ? (t(), n("p", sv, f(e.item.price), 1)) : _("", !0),
            w.value ? (t(), n("p", ov, f(w.value), 1)) : _("", !0)
          ]),
          M.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), n("svg", rv, [
              s("path", {
                d: b(se)("cart")
              }, null, 8, iv)
            ]))
          ])) : _("", !0)
        ]),
        m.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          s("span", {
            class: A(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: Q({ width: m.value })
          }, null, 6)
        ], 8, dv)) : _("", !0)
      ], 2)
    ], 42, qp));
  }
});
function cv(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function fv(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function mv(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const pv = ["data-featured", "data-recommended"], vv = { class: "flex flex-col gap-1" }, gv = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, hv = { key: 0 }, bv = { key: 1 }, xv = { key: 2 }, yv = { key: 3 }, kv = { class: "text-sm font-semibold" }, $v = { class: "flex items-baseline gap-1" }, wv = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Cv = { class: "text-muted-foreground text-sm" }, _v = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Mv = { class: "text-muted-foreground mt-1 text-xs" }, Sv = { class: "flex flex-1 flex-col gap-2 text-sm" }, Bv = { class: "flex min-w-0 items-start gap-2" }, zv = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Pv = ["d"], Av = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, jv = ["d"], Ov = { class: "capitalize" }, Lv = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Vv = { class: "text-foreground font-medium" }, Dv = { class: "mt-auto flex gap-2 pt-2" }, Tv = /* @__PURE__ */ P({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(
      () => a.plan.priceFormatted ?? String(a.plan.price)
    ), i = $(
      () => !!(a.plan.featured || a.plan.recommended)
    ), d = $(() => {
      const p = a.plan.perks ?? {};
      return Object.entries(p).map(([k, m]) => ({
        key: k,
        label: k.replace(/_/g, " "),
        granted: mv(m.value),
        display: fv(m.value)
      }));
    }), u = $(() => a.plan.extraPerks ?? []);
    return (p, k) => (t(), n("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      s("header", vv, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", gv, [
          e.plan.recommended ? (t(), n("span", hv, "Recommended")) : e.plan.featured ? (t(), n("span", bv, "Featured")) : _("", !0),
          e.plan.trial ? (t(), n("span", xv, "Trial")) : _("", !0),
          e.plan.active === !1 ? (t(), n("span", yv, "Inactive")) : _("", !0)
        ])) : _("", !0),
        s("h3", kv, f(e.plan.name), 1),
        s("p", $v, [
          s("span", wv, f(o.value), 1),
          s("span", Cv, f(b(cv)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", _v, f(e.plan.shortDescription), 1)) : _("", !0),
        s("p", Mv, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      s("ul", Sv, [
        (t(!0), n(z, null, V(d.value, (m) => (t(), n("li", {
          key: m.key,
          class: "flex items-start justify-between gap-3"
        }, [
          s("span", Bv, [
            s("span", {
              class: A(["mt-0.5 shrink-0", m.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              m.granted ? (t(), n("svg", zv, [
                s("path", {
                  d: b(se)("check")
                }, null, 8, Pv)
              ])) : (t(), n("svg", Av, [
                s("path", {
                  d: b(se)("x")
                }, null, 8, jv)
              ]))
            ], 2),
            s("span", Ov, f(m.label), 1)
          ]),
          m.display ? (t(), n("span", Lv, f(m.display), 1)) : _("", !0)
        ]))), 128)),
        (t(!0), n(z, null, V(u.value, (m, h) => (t(), n("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          s("span", null, f(m.key), 1),
          s("span", Vv, f(m.value), 1)
        ]))), 128))
      ]),
      s("footer", Dv, [
        E(ne, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: k[0] || (k[0] = (m) => r("edit", e.plan.id))
        }, {
          default: O(() => [...k[2] || (k[2] = [
            U(" Edit ", -1)
          ])]),
          _: 1
        }),
        E(ne, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: k[1] || (k[1] = (m) => r("delete", e.plan.id))
        }, {
          default: O(() => [...k[3] || (k[3] = [
            U(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, pv));
  }
}), Ev = {
  class: "mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6",
  "data-slot": "plan-grid"
}, Fv = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Iv = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Nv = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Rv = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Uv = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, J$ = /* @__PURE__ */ P({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: {}
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: l }) {
    const a = l;
    return (r, o) => (t(), n("div", Ev, [
      s("header", Fv, [
        s("div", null, [
          e.title ? (t(), n("h1", Iv, f(e.title), 1)) : _("", !0),
          e.description ? (t(), n("p", Nv, f(e.description), 1)) : _("", !0)
        ]),
        E(ne, {
          type: "button",
          onClick: o[0] || (o[0] = (i) => a("create"))
        }, {
          default: O(() => [...o[3] || (o[3] = [
            U("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", Rv, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", Uv, [
        (t(!0), n(z, null, V(e.plans, (i) => (t(), D(Tv, {
          key: i.id,
          plan: i,
          onEdit: o[1] || (o[1] = (d) => a("edit", d)),
          onDelete: o[2] || (o[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ]));
  }
}), Hv = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Kv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, qv = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Gv = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Wv = { class: "space-y-1.5" }, Zv = { class: "space-y-1.5" }, Jv = { class: "space-y-1.5" }, Yv = { class: "space-y-1.5" }, Xv = { class: "space-y-1.5" }, Qv = { class: "flex items-center gap-3 text-sm" }, eg = { class: "flex items-center gap-3 text-sm" }, tg = { class: "flex items-center gap-3 text-sm" }, ag = {
  key: 0,
  class: "space-y-1.5"
}, ng = { class: "flex items-center gap-3 text-sm" }, lg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, sg = { class: "space-y-1.5" }, og = ["value"], rg = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, ig = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, dg = ["id", "value", "onInput"], ug = { class: "space-y-2" }, cg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, fg = ["d"], mg = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", st = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Y$ = /* @__PURE__ */ P({
  __name: "PlanEditor",
  props: {
    plan: { default: null },
    modules: { default: () => [] },
    limits: { default: () => [] },
    mode: { default: "create" },
    processing: { type: Boolean, default: !1 }
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
    }), r = e, o = l, i = Ue(a());
    function d(g, c) {
      const x = i.perks?.[g]?.value;
      return x ?? c;
    }
    function u(g, c, x) {
      const v = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: c,
          overview: x ?? v?.overview ?? ""
        }
      };
    }
    function p(g, c) {
      const x = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: x?.value ?? (g === "modules" ? [] : 0),
          overview: c
        }
      };
    }
    function k(g) {
      const c = g ? { ...a(), ...g } : a();
      i.id = c.id, i.name = c.name, i.shortDescription = c.shortDescription ?? "", i.description = c.description ?? "", i.days = c.days, i.price = c.price, i.featured = c.featured ?? !1, i.recommended = c.recommended ?? !1, i.trial = c.trial ?? !1, i.trialDays = c.trialDays ?? 0, i.active = c.active ?? !0, i.perks = { ...c.perks ?? {} }, i.extraPerks = [...c.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    k(r.plan), re(
      () => r.plan,
      (g) => k(g),
      { deep: !0 }
    );
    const m = $({
      get: () => {
        const g = d("modules", []);
        return Array.isArray(g) ? g.map(String) : [];
      },
      set: (g) => {
        u("modules", g.map(String), i.perks?.modules?.overview ?? "");
      }
    }), h = $(
      () => r.modules.map((g) => ({ value: g.key, label: g.label }))
    );
    function M() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function w(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((c, x) => x !== g);
    }
    function C() {
      o("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, c) => (t(), n("form", {
      class: "mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6",
      "data-slot": "plan-editor",
      onSubmit: ce(C, ["prevent"])
    }, [
      s("header", Hv, [
        s("div", null, [
          s("h1", Kv, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          c[13] || (c[13] = s("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(ne, {
          type: "button",
          variant: "outline",
          onClick: c[0] || (c[0] = (x) => o("cancel"))
        }, {
          default: O(() => [...c[14] || (c[14] = [
            U("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      s("div", qv, [
        s("section", Gv, [
          c[26] || (c[26] = s("h2", { class: "font-semibold" }, "Plan details", -1)),
          s("div", Wv, [
            E(he, { for: "plan-name" }, {
              default: O(() => [...c[15] || (c[15] = [
                U("Plan name", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": c[1] || (c[1] = (x) => i.name = x),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          s("div", Zv, [
            E(he, { for: "plan-short" }, {
              default: O(() => [...c[16] || (c[16] = [
                U("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": c[2] || (c[2] = (x) => i.shortDescription = x),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          s("div", Jv, [
            E(he, { for: "plan-description" }, {
              default: O(() => [...c[17] || (c[17] = [
                U("Plan description", -1)
              ])]),
              _: 1
            }),
            oe(s("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": c[3] || (c[3] = (x) => i.description = x),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: A(st)
            }, null, 512), [
              [Ce, i.description]
            ])
          ]),
          s("div", Yv, [
            E(he, { for: "plan-days" }, {
              default: O(() => [...c[18] || (c[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            oe(s("select", {
              id: "plan-days",
              "onUpdate:modelValue": c[4] || (c[4] = (x) => i.days = x),
              class: A(mg)
            }, [...c[19] || (c[19] = [
              s("option", { value: 30 }, "Monthly", -1),
              s("option", { value: 365 }, "Yearly", -1),
              s("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Oe,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          s("div", Xv, [
            E(he, { for: "plan-price" }, {
              default: O(() => [...c[20] || (c[20] = [
                U("Price", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": c[5] || (c[5] = (x) => i.price = Number(x))
            }, null, 8, ["model-value"])
          ]),
          s("label", Qv, [
            E(b(Le), {
              checked: !!i.featured,
              "onUpdate:checked": c[6] || (c[6] = (x) => i.featured = x)
            }, null, 8, ["checked"]),
            c[21] || (c[21] = U(" Featured ", -1))
          ]),
          s("label", eg, [
            E(b(Le), {
              checked: !!i.recommended,
              "onUpdate:checked": c[7] || (c[7] = (x) => i.recommended = x)
            }, null, 8, ["checked"]),
            c[22] || (c[22] = U(" Recommended ", -1))
          ]),
          s("label", tg, [
            E(b(Le), {
              checked: !!i.trial,
              "onUpdate:checked": c[8] || (c[8] = (x) => i.trial = x)
            }, null, 8, ["checked"]),
            c[23] || (c[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", ag, [
            E(he, { for: "plan-trial-days" }, {
              default: O(() => [...c[24] || (c[24] = [
                U("Trial days", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": c[9] || (c[9] = (x) => i.trialDays = Number(x))
            }, null, 8, ["model-value"])
          ])) : _("", !0),
          s("label", ng, [
            E(b(Le), {
              checked: i.active !== !1,
              "onUpdate:checked": c[10] || (c[10] = (x) => i.active = x)
            }, null, 8, ["checked"]),
            c[25] || (c[25] = U(" Active ", -1))
          ]),
          E(ne, {
            type: "submit",
            disabled: e.processing
          }, {
            default: O(() => [
              U(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        s("section", lg, [
          c[33] || (c[33] = s("h2", { class: "font-semibold" }, "Plan perks", -1)),
          s("div", sg, [
            E(he, null, {
              default: O(() => [...c[27] || (c[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            E(Ct, {
              modelValue: m.value,
              "onUpdate:modelValue": c[11] || (c[11] = (x) => m.value = x),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(he, { for: "plan-modules-overview" }, {
              default: O(() => [...c[28] || (c[28] = [
                U("Overview", -1)
              ])]),
              _: 1
            }),
            s("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: A(st),
              onInput: c[12] || (c[12] = (x) => p(
                "modules",
                x.target.value
              ))
            }, null, 40, og)
          ]),
          (t(!0), n(z, null, V(e.limits, (x) => (t(), n("div", {
            key: x.key,
            class: "space-y-1.5"
          }, [
            x.kind === "toggle" ? (t(), n("label", rg, [
              E(b(Le), {
                checked: !!d(x.key, !1),
                "onUpdate:checked": (v) => u(
                  x.key,
                  v,
                  i.perks?.[x.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              U(" " + f(x.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              E(he, {
                for: `plan-limit-${x.key}`
              }, {
                default: O(() => [
                  U(f(x.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              x.hint ? (t(), n("p", ig, f(x.hint), 1)) : _("", !0),
              E(fe, {
                id: `plan-limit-${x.key}`,
                "model-value": Number(d(x.key, 0)),
                type: "number",
                step: x.step ?? 1,
                required: "",
                "onUpdate:modelValue": (v) => u(
                  x.key,
                  Number(v),
                  i.perks?.[x.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              c[29] || (c[29] = s("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            E(he, {
              for: `plan-overview-${x.key}`
            }, {
              default: O(() => [...c[30] || (c[30] = [
                U("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            s("textarea", {
              id: `plan-overview-${x.key}`,
              value: i.perks?.[x.key]?.overview ?? "",
              class: A(st),
              onInput: (v) => p(
                x.key,
                v.target.value
              )
            }, null, 40, dg)
          ]))), 128)),
          s("div", ug, [
            c[32] || (c[32] = s("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, V(i.extraPerks ?? [], (x, v) => (t(), n("div", {
              key: v,
              class: "flex items-center gap-2"
            }, [
              E(fe, {
                modelValue: x.key,
                "onUpdate:modelValue": (y) => x.key = y,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(fe, {
                modelValue: x.value,
                "onUpdate:modelValue": (y) => x.value = y,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(ne, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (y) => w(v)
              }, {
                default: O(() => [
                  (t(), n("svg", cg, [
                    s("path", {
                      d: b(se)("x")
                    }, null, 8, fg)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            E(ne, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: M
            }, {
              default: O(() => [...c[31] || (c[31] = [
                U(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 32));
  }
}), pg = { class: "flex flex-col gap-4" }, vg = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, gg = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, hg = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, bg = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, xg = ["d"], yg = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, kg = ["aria-pressed"], $g = ["aria-pressed"], wg = {
  key: 0,
  class: "flex flex-col gap-2"
}, Cg = ["aria-label"], _g = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Mg = ["aria-pressed", "onClick"], Sg = ["aria-label"], Bg = { class: "text-muted-foreground mr-1 text-xs font-medium" }, zg = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Pg = ["data-slot"], Ag = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, jg = { class: "text-muted-foreground text-xs tabular-nums" }, Og = { class: "flex items-center gap-2" }, Lg = ["disabled"], Vg = ["disabled"], la = /* @__PURE__ */ P({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Ae({
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
  emits: /* @__PURE__ */ Ae(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(""), i = Xe(e, "modelValue"), d = Ue({}), u = Ue({});
    re(o, () => h());
    function p(N) {
      const Y = N.trim();
      if (Y === "")
        return null;
      const F = Number(Y);
      return Number.isFinite(F) ? F : null;
    }
    function k() {
      const N = {};
      for (const [Y, F] of Object.entries(u))
        N[Y] = { min: p(F.min), max: p(F.max) };
      return N;
    }
    function m() {
      return { query: o.value, selected: { ...d }, ranges: k() };
    }
    function h() {
      r("filter", m());
    }
    function M(N, Y) {
      d[N] = d[N] === Y ? null : Y, h();
    }
    function w(N) {
      return u[N] ?? { min: "", max: "" };
    }
    function C(N, Y, F) {
      const T = u[N] ?? { min: "", max: "" };
      u[N] = { ...T, [Y]: F }, h();
    }
    function g(N) {
      N.key === "Enter" && (N.preventDefault(), r("scan", o.value.trim()));
    }
    const c = $(() => a.facets.filter((N) => (N.kind ?? "chips") === "chips")), x = $(() => a.facets.filter((N) => N.kind === "range")), v = $(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), y = G(1);
    re(
      () => a.items.map((N) => N.key).join(","),
      () => {
        y.value = 1;
      }
    );
    const S = $(() => {
      const N = a.pageSize;
      return !N || N < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / N));
    }), B = $(() => {
      const N = a.pageSize;
      if (!N || N < 1)
        return a.items;
      const Y = (y.value - 1) * N;
      return a.items.slice(Y, Y + N);
    });
    function q(N) {
      y.value = Math.min(S.value, Math.max(1, N));
    }
    return (N, Y) => (t(), n("div", pg, [
      v.value ? (t(), n("div", vg, [
        s("div", gg, [
          e.searchable ? (t(), n("div", hg, [
            (t(), n("svg", bg, [
              s("path", {
                d: b(se)("search")
              }, null, 8, xg)
            ])),
            E(fe, {
              modelValue: o.value,
              "onUpdate:modelValue": Y[0] || (Y[0] = (F) => o.value = F),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: g
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : _("", !0),
          H(N.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", yg, [
            s("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: Y[1] || (Y[1] = (F) => i.value = "grid")
            }, " Tiles ", 10, kg),
            s("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: Y[2] || (Y[2] = (F) => i.value = "list")
            }, " List ", 10, $g)
          ])) : _("", !0)
        ]),
        c.value.length || x.value.length ? (t(), n("div", wg, [
          (t(!0), n(z, null, V(c.value, (F) => (t(), n("div", {
            key: F.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": F.label ?? F.key
          }, [
            F.label ? (t(), n("span", _g, f(F.label), 1)) : _("", !0),
            (t(!0), n(z, null, V(F.options ?? [], (T) => (t(), n("button", {
              key: T.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[F.key] === T.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[F.key] === T.value ? "true" : "false",
              onClick: (j) => M(F.key, T.value)
            }, f(T.label), 11, Mg))), 128))
          ], 8, Cg))), 128)),
          (t(!0), n(z, null, V(x.value, (F) => (t(), n("div", {
            key: F.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": F.label ?? F.key,
            "data-slot": "catalog-range"
          }, [
            s("span", Bg, f(F.label ?? F.key), 1),
            E(fe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${F.label ?? F.key} from`,
              "model-value": w(F.key).min,
              "onUpdate:modelValue": (T) => C(F.key, "min", String(T))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            Y[7] || (Y[7] = s("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            E(fe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${F.label ?? F.key} to`,
              "model-value": w(F.key).max,
              "onUpdate:modelValue": (T) => C(F.key, "max", String(T))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Sg))), 128))
        ])) : _("", !0)
      ])) : _("", !0),
      e.items.length === 0 ? (t(), n("p", zg, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: A(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, V(B.value, (F) => (t(), D(uv, {
          key: F.key,
          item: F,
          layout: i.value,
          onSelect: Y[3] || (Y[3] = (T) => r("select", T)),
          onCart: Y[4] || (Y[4] = (T) => r("cart", T))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Pg)),
      e.pageSize && S.value > 1 ? (t(), n("div", Ag, [
        s("p", jg, " Page " + f(y.value) + " of " + f(S.value), 1),
        s("div", Og, [
          s("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: y.value <= 1,
            onClick: Y[5] || (Y[5] = (F) => q(y.value - 1))
          }, " Previous ", 8, Lg),
          s("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: y.value >= S.value,
            onClick: Y[6] || (Y[6] = (F) => q(y.value + 1))
          }, " Next ", 8, Vg)
        ])
      ])) : _("", !0)
    ]));
  }
}), Dg = ["aria-label"], Tg = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Eg = { class: "min-w-0" }, Fg = { class: "text-base font-semibold" }, Ig = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ng = { class: "flex shrink-0 items-center gap-2" }, Rg = { class: "min-h-0 flex-1 overflow-y-auto" }, Ug = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, _t = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null);
    let i = null, d = "";
    function u(p) {
      if (!a.open)
        return;
      if (p.key === "Escape") {
        p.stopPropagation(), r("close");
        return;
      }
      if (p.key !== "Tab" || !o.value)
        return;
      const k = o.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (k.length === 0)
        return;
      const m = k[0], h = k[k.length - 1];
      p.shiftKey && document.activeElement === m ? (p.preventDefault(), h.focus()) : !p.shiftKey && document.activeElement === h && (p.preventDefault(), m.focus());
    }
    return re(
      () => a.open,
      async (p) => {
        if (p) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await we(), o.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), me(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (p, k) => (t(), D(Te, { to: "body" }, [
      E(ze, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: k[0] || (k[0] = (m) => r("close"))
          })) : _("", !0)
        ]),
        _: 1
      }),
      E(ze, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: O(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: o,
            class: A(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            s("header", Tg, [
              s("div", Eg, [
                s("h2", Fg, f(e.title), 1),
                e.description ? (t(), n("p", Ig, f(e.description), 1)) : _("", !0)
              ]),
              s("div", Ng, [
                H(p.$slots, "header-actions"),
                s("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: k[1] || (k[1] = (m) => r("close"))
                }, [...k[2] || (k[2] = [
                  s("svg", {
                    viewBox: "0 0 24 24",
                    class: "size-4",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    s("path", { d: "M18 6 6 18M6 6l12 12" })
                  ], -1)
                ])])
              ])
            ]),
            s("div", Rg, [
              H(p.$slots, "default")
            ]),
            p.$slots.footer ? (t(), n("footer", Ug, [
              H(p.$slots, "footer")
            ])) : _("", !0)
          ], 10, Dg)) : _("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), Hg = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Kg = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, qg = ["src", "alt"], Gg = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Wg = ["src"], Zg = { class: "flex items-start justify-between gap-3" }, Jg = { class: "text-lg font-semibold tabular-nums" }, Yg = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Xg = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Qg = { class: "grid grid-cols-2 gap-3" }, eh = { class: "flex flex-col gap-2" }, th = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, X$ = /* @__PURE__ */ P({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function o(m) {
      let h = 0;
      for (const M of m)
        h = h * 31 + M.charCodeAt(0) >>> 0;
      return h;
    }
    function i(m, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((w, C) => ({
        label: w,
        value: Math.max(0, Math.round(m + Math.sin(C + h) * m * 0.18))
      }));
    }
    const d = $(() => a.item?.kind === "unit"), u = $(() => {
      const m = a.item;
      if (!m)
        return [];
      const h = m.stock ?? m.progress?.value ?? m.metrics?.price ?? m.metrics?.rent ?? 12;
      return i(Number(h) || 12, o(m.key) % 7);
    }), p = $(() => {
      const m = a.item;
      if (!m)
        return [];
      const h = m.progress?.value ?? (m.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, o(m.key) % 5 + 1);
    }), k = $(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (m, h) => (t(), D(_t, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: h[1] || (h[1] = (M) => r("close"))
    }, ma({
      default: O(() => [
        e.item ? (t(), n("div", Hg, [
          s("div", Kg, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, qg)) : _("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Gg, [
            (t(!0), n(z, null, V(e.item.images, (M, w) => (t(), n("img", {
              key: w,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Wg))), 128))
          ])) : _("", !0),
          s("div", Zg, [
            s("div", null, [
              s("p", Jg, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", Yg, f(e.item.stock) + " in stock ", 1)) : _("", !0)
            ]),
            e.item.status ? (t(), D(pe, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : _("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", Xg, f(e.item.facts.join(" · ")), 1)) : _("", !0),
          s("div", Qg, [
            E(Ye, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? p.value : u.value
            }, null, 8, ["label", "value", "series"]),
            E(Ye, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          s("div", eh, [
            s("p", th, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(et, {
              data: d.value ? p.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : _("", !0)
      ]),
      _: 2
    }, [
      k.value && e.item ? {
        name: "footer",
        fn: O(() => [
          s("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: h[0] || (h[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), ah = { class: "flex flex-col gap-10" }, nh = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, lh = { class: "flex flex-col gap-3" }, sh = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, oh = ["src", "alt"], rh = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, ih = ["aria-label", "aria-pressed", "onClick"], dh = ["src"], uh = { class: "flex flex-col gap-5" }, ch = { class: "flex flex-wrap items-start justify-between gap-3" }, fh = { class: "min-w-0" }, mh = { class: "text-2xl font-semibold tracking-tight" }, ph = { class: "text-muted-foreground mt-1 text-sm" }, vh = { class: "text-2xl font-semibold tabular-nums" }, gh = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, hh = { class: "grid grid-cols-2 gap-3 text-sm" }, bh = {
  key: 0,
  class: "rounded-lg border p-3"
}, xh = { class: "mt-1 font-medium" }, yh = { class: "rounded-lg border p-3" }, kh = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, $h = { class: "mt-1 font-medium" }, wh = { class: "flex flex-col gap-4" }, Ch = { class: "grid gap-4 sm:grid-cols-2" }, _h = { class: "bg-card rounded-lg border p-4" }, Mh = { class: "mb-3 text-sm font-medium" }, Sh = /* @__PURE__ */ P({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function o(w) {
      let C = 0;
      for (const g of w)
        C = C * 31 + g.charCodeAt(0) >>> 0;
      return C;
    }
    function i(w, C) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((c, x) => ({
        label: c,
        value: Math.max(0, Math.round(w + Math.sin(x + C) * w * 0.18))
      }));
    }
    const d = $(() => a.item.kind === "unit"), u = $(() => {
      const w = [a.item.image, ...a.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(w)];
    }), p = G(0), k = $(() => {
      const w = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, o(a.item.key) % 7);
    }), m = $(() => {
      const w = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, o(a.item.key) % 5 + 1);
    }), h = $(() => d.value ? m.value : k.value), M = $(() => !d.value && a.item.status !== "out-of-stock");
    return (w, C) => (t(), n("div", ah, [
      s("div", nh, [
        s("div", lh, [
          s("div", sh, [
            u.value[p.value] ? (t(), n("img", {
              key: 0,
              src: u.value[p.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, oh)) : _("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", rh, [
            (t(!0), n(z, null, V(u.value, (g, c) => (t(), n("button", {
              key: g,
              type: "button",
              class: A(["size-16 shrink-0 overflow-hidden rounded-md border", c === p.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${c + 1}`,
              "aria-pressed": c === p.value ? "true" : "false",
              onClick: (x) => p.value = c
            }, [
              s("img", {
                src: g,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, dh)
            ], 10, ih))), 128))
          ])) : _("", !0)
        ]),
        s("div", uh, [
          s("div", ch, [
            s("div", fh, [
              s("h1", mh, f(e.item.label), 1),
              s("p", ph, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D(pe, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : _("", !0)
          ]),
          s("p", vh, f(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", gh, f(e.item.facts.join(" · ")), 1)) : _("", !0),
          s("dl", hh, [
            e.item.sku ? (t(), n("div", bh, [
              C[1] || (C[1] = s("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              s("dd", xh, f(e.item.sku), 1)
            ])) : _("", !0),
            s("div", yh, [
              s("dt", kh, f(d.value ? "Occupancy" : "Stock"), 1),
              s("dd", $h, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (g) => r("cart", e.item.key))
          }, " Add to cart ")) : _("", !0)
        ])
      ]),
      s("section", wh, [
        C[2] || (C[2] = s("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        s("div", Ch, [
          E(Ye, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          E(Ye, {
            label: "Price",
            value: e.item.price ?? "-",
            series: k.value
          }, null, 8, ["value", "series"])
        ]),
        s("div", _h, [
          s("p", Mh, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(Zc, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), Bh = { class: "mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6" }, zh = ["href"], Q$ = /* @__PURE__ */ P({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" }
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = l;
    return (r, o) => (t(), n("div", Bh, [
      s("a", {
        href: e.catalogHref,
        class: "text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1.5 text-sm"
      }, [
        o[1] || (o[1] = s("svg", {
          class: "size-4",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          s("path", { d: "m15 18-6-6 6-6" })
        ], -1)),
        U(" " + f(e.backLabel), 1)
      ], 8, zh),
      E(Sh, {
        item: e.item,
        onCart: o[0] || (o[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ]));
  }
});
function Ve() {
  return { query: "", selected: {}, ranges: {} };
}
function Ph(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const o = Number(r);
  return Number.isFinite(o) ? o : null;
}
function Ah(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function sa(e, l) {
  const a = l.query.trim().toLowerCase();
  if (a !== "" && ![
    e.key,
    e.sku ?? "",
    e.label,
    e.caption ?? "",
    ...e.facts ?? []
  ].join(" ").toLowerCase().includes(a))
    return !1;
  for (const [r, o] of Object.entries(l.selected ?? {}))
    if (o && (e.facets?.[r] ?? null) !== o)
      return !1;
  for (const [r, o] of Object.entries(l.ranges ?? {}))
    if (!Ah(Ph(e, r), o))
      return !1;
  return !0;
}
function ew(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const o = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return o === a || i === a;
  }) ?? null;
}
function Dt(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const jh = { class: "flex flex-col gap-6 p-4" }, Oh = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Lh = { class: "text-sm font-semibold" }, Vh = { class: "flex flex-wrap items-center gap-1.5" }, Dh = ["aria-pressed", "onClick"], Th = { class: "text-sm font-semibold" }, Eh = { class: "flex flex-wrap items-center gap-1.5" }, Fh = { key: 0 }, Ih = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(""), i = Ue({}), d = Ue({}), u = $(
      () => a.facets.filter((S) => (S.kind ?? "chips") === "chips")
    ), p = $(() => a.facets.filter((S) => S.kind === "range"));
    function k(S) {
      return S == null ? "" : String(S);
    }
    function m() {
      o.value = a.applied.query ?? "";
      for (const S of Object.keys(i))
        delete i[S];
      for (const [S, B] of Object.entries(a.applied.selected ?? {}))
        i[S] = B;
      for (const S of Object.keys(d))
        delete d[S];
      for (const [S, B] of Object.entries(a.applied.ranges ?? {}))
        d[S] = { min: k(B.min), max: k(B.max) };
    }
    re(
      () => a.open,
      (S) => {
        S && m();
      }
    );
    function h(S) {
      const B = S.trim();
      if (B === "")
        return null;
      const q = Number(B);
      return Number.isFinite(q) ? q : null;
    }
    function M() {
      const S = {};
      for (const [B, q] of Object.entries(d))
        S[B] = { min: h(q.min), max: h(q.max) };
      return S;
    }
    function w() {
      return {
        query: a.hideSearch ? a.applied.query : o.value,
        selected: { ...i },
        ranges: M()
      };
    }
    const C = $(() => {
      let S = a.hideSearch || o.value.trim() === "" ? 0 : 1;
      for (const B of Object.values(i))
        B && (S += 1);
      for (const B of Object.values(M()))
        (B.min !== null || B.max !== null) && (S += 1);
      return S;
    });
    function g(S, B) {
      i[S] = i[S] === B ? null : B;
    }
    function c(S) {
      return d[S] ?? { min: "", max: "" };
    }
    function x(S, B, q) {
      const N = d[S] ?? { min: "", max: "" };
      d[S] = { ...N, [B]: q };
    }
    function v() {
      r("apply", w());
    }
    function y() {
      o.value = "";
      for (const S of Object.keys(i))
        i[S] = null;
      for (const S of Object.keys(d))
        d[S] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Ve(), query: a.applied.query } : Ve()
      );
    }
    return (S, B) => (t(), D(_t, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: B[2] || (B[2] = (q) => r("close"))
    }, {
      footer: O(() => [
        s("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: y
        }, " Reset all "),
        E(ne, {
          variant: "outline",
          size: "sm",
          onClick: B[1] || (B[1] = (q) => r("close"))
        }, {
          default: O(() => [...B[5] || (B[5] = [
            U("Cancel", -1)
          ])]),
          _: 1
        }),
        E(ne, {
          size: "sm",
          onClick: v
        }, {
          default: O(() => [
            B[6] || (B[6] = U(" Apply", -1)),
            C.value ? (t(), n("span", Fh, " (" + f(C.value) + ")", 1)) : _("", !0)
          ]),
          _: 1
        })
      ]),
      default: O(() => [
        s("div", jh, [
          e.hideSearch ? _("", !0) : (t(), n("label", Oh, [
            B[3] || (B[3] = s("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E(fe, {
              modelValue: o.value,
              "onUpdate:modelValue": B[0] || (B[0] = (q) => o.value = q),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, V(u.value, (q) => (t(), n("section", {
            key: q.key,
            class: "flex flex-col gap-2"
          }, [
            s("h3", Lh, f(q.label ?? q.key), 1),
            s("div", Vh, [
              (t(!0), n(z, null, V(q.options ?? [], (N) => (t(), n("button", {
                key: N.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[q.key] === N.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[q.key] === N.value ? "true" : "false",
                onClick: (Y) => g(q.key, N.value)
              }, f(N.label), 11, Dh))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, V(p.value, (q) => (t(), n("section", {
            key: q.key,
            class: "flex flex-col gap-2"
          }, [
            s("h3", Th, f(q.label ?? q.key), 1),
            s("div", Eh, [
              E(fe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${q.label ?? q.key} from`,
                "model-value": c(q.key).min,
                "onUpdate:modelValue": (N) => x(q.key, "min", String(N))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              B[4] || (B[4] = s("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              E(fe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${q.label ?? q.key} to`,
                "model-value": c(q.key).max,
                "onUpdate:modelValue": (N) => x(q.key, "max", String(N))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), Nh = { class: "mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6" }, Rh = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, Uh = ["aria-selected", "onClick"], Hh = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, Kh = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, qh = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, Gh = ["aria-pressed"], Wh = ["aria-pressed"], tw = /* @__PURE__ */ P({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Ae({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Ae(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(a.tabs[0]?.key ?? ""), i = Xe(e, "layout"), d = G({}), u = G(!1);
    re(
      () => a.tabs.map((g) => g.key).join(","),
      (g) => {
        g.split(",").includes(o.value) || (o.value = a.tabs[0]?.key ?? "");
      }
    );
    function p(g) {
      return d.value[g] ?? Ve();
    }
    const k = $(
      () => a.tabs.find((g) => g.key === o.value) ?? a.tabs[0] ?? null
    ), m = $(
      () => k.value ? p(k.value.key) : Ve()
    ), h = $(() => {
      const g = k.value;
      return g ? g.items.filter((c) => sa(c, p(g.key))) : [];
    });
    function M(g) {
      const c = k.value?.key;
      c && (d.value = {
        ...d.value,
        [c]: { ...p(c), query: g }
      });
    }
    function w() {
      const g = k.value?.key;
      g && (d.value = { ...d.value, [g]: Ve() });
    }
    function C(g) {
      const c = k.value?.key;
      c && (d.value = { ...d.value, [c]: g }, u.value = !1);
    }
    return (g, c) => (t(), n(z, null, [
      s("div", Nh, [
        E(Be, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", Rh, [
          (t(!0), n(z, null, V(e.tabs, (x) => (t(), n("button", {
            key: x.key,
            type: "button",
            class: A([
              "px-3 py-1.5 text-sm transition-colors",
              o.value === x.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": o.value === x.key ? "true" : "false",
            onClick: (v) => o.value = x.key
          }, f(x.label), 11, Uh))), 128))
        ])) : _("", !0),
        s("div", Hh, [
          E(fe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": m.value.query,
            type: "search",
            placeholder: k.value?.searchPlaceholder ?? "Search…",
            "aria-label": k.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": c[0] || (c[0] = (x) => M(String(x)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b(Dt)(m.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: w
          }, " Clear ")) : _("", !0),
          (k.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: c[1] || (c[1] = (x) => u.value = !0)
          }, [
            c[8] || (c[8] = s("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              s("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            c[9] || (c[9] = U(" Filters ", -1)),
            b(Dt)(m.value) ? (t(), n("span", Kh, " on ")) : _("", !0)
          ])) : _("", !0),
          s("div", qh, [
            s("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: c[2] || (c[2] = (x) => i.value = "grid")
            }, " Tiles ", 10, Gh),
            s("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: c[3] || (c[3] = (x) => i.value = "list")
            }, " List ", 10, Wh)
          ])
        ]),
        E(la, {
          layout: i.value,
          "onUpdate:layout": c[4] || (c[4] = (x) => i.value = x),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: c[5] || (c[5] = (x) => r("select", x)),
          onCart: c[6] || (c[6] = (x) => r("cart", x))
        }, null, 8, ["layout", "page-size", "items"])
      ]),
      E(Ih, {
        open: u.value,
        title: k.value?.filterTitle ?? "Filters",
        "search-placeholder": k.value?.searchPlaceholder ?? "Search…",
        facets: k.value?.facets ?? [],
        applied: m.value,
        onClose: c[7] || (c[7] = (x) => u.value = !1),
        onApply: C,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), Zh = { class: "mx-auto flex w-full max-w-6xl flex-col gap-10 p-4 sm:p-6" }, Jh = { class: "flex flex-col gap-4" }, Yh = { class: "flex flex-col gap-4" }, aw = /* @__PURE__ */ P({
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
    emptyTitle: { default: "Nothing here" }
  },
  setup(e) {
    const l = e, a = G(Ve()), r = $(
      () => l.cards.filter((o) => sa(o, a.value))
    );
    return (o, i) => (t(), n("div", Zh, [
      E(Be, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      s("section", Jh, [
        E(Be, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(la, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: r.value,
          onFilter: i[0] || (i[0] = (d) => a.value = d)
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      s("section", Yh, [
        E(Be, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(Zn, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": O(({ value: d }) => [
            E(pe, {
              status: String(d)
            }, {
              default: O(() => [
                U(f(d), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ]));
  }
}), Xh = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Qh = { class: "text-sm font-medium" }, e1 = ["width", "height", "aria-label"], t1 = { class: "flex items-center gap-2" }, a1 = /* @__PURE__ */ P({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(null), i = G(!1);
    let d = null;
    function u() {
      return o.value?.getContext("2d") ?? null;
    }
    function p(g) {
      const c = o.value;
      if (!c)
        return null;
      const x = c.getBoundingClientRect(), v = c.width / x.width, y = c.height / x.height;
      return {
        x: (g.clientX - x.left) * v,
        y: (g.clientY - x.top) * y
      };
    }
    function k(g) {
      a.disabled || (i.value = !0, d = p(g), o.value?.setPointerCapture(g.pointerId));
    }
    function m(g) {
      if (!i.value || a.disabled)
        return;
      const c = u(), x = p(g);
      !c || !x || !d || (c.strokeStyle = "#111827", c.lineWidth = 2.4, c.lineCap = "round", c.lineJoin = "round", c.beginPath(), c.moveTo(d.x, d.y), c.lineTo(x.x, x.y), c.stroke(), d = x);
    }
    function h() {
      i.value = !1, d = null;
    }
    function M() {
      const g = o.value, c = u();
      !g || !c || (c.clearRect(0, 0, g.width, g.height), r("clear"));
    }
    function w() {
      const g = o.value;
      g && r("save", g.toDataURL("image/png"));
    }
    function C() {
      const g = o.value, c = u();
      !g || !c || (c.fillStyle = "#ffffff", c.fillRect(0, 0, g.width, g.height));
    }
    return de(C), me(() => {
      i.value = !1;
    }), (g, c) => (t(), n("div", Xh, [
      s("p", Qh, f(e.label), 1),
      s("canvas", {
        ref_key: "canvas",
        ref: o,
        width: e.width,
        height: e.height,
        class: A(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(k, ["prevent"]),
        onPointermove: ce(m, ["prevent"]),
        onPointerup: ce(h, ["prevent"]),
        onPointerleave: ce(h, ["prevent"])
      }, null, 42, e1),
      s("div", t1, [
        E(ne, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: O(() => [...c[0] || (c[0] = [
            U(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(ne, {
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: O(() => [...c[1] || (c[1] = [
            U("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), n1 = { class: "mx-auto flex w-full max-w-6xl flex-col gap-10 p-4 sm:p-6" }, l1 = { class: "grid gap-8 lg:grid-cols-2" }, s1 = { class: "flex flex-col gap-3" }, o1 = { class: "text-muted-foreground text-xs" }, r1 = {
  key: 0,
  class: "flex flex-col gap-3"
}, i1 = { class: "flex flex-wrap gap-3" }, d1 = ["onClick"], u1 = ["src", "alt"], c1 = {
  key: 1,
  class: "flex flex-col gap-3"
}, f1 = { class: "flex flex-wrap gap-3" }, m1 = ["onClick"], p1 = ["src", "alt"], v1 = {
  key: 2,
  class: "flex flex-col gap-4"
}, g1 = { class: "flex flex-wrap items-center gap-2" }, h1 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, b1 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, x1 = { class: "flex flex-col gap-2" }, y1 = ["src"], k1 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, $1 = ["src"], nw = /* @__PURE__ */ P({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null }
  },
  setup(e) {
    const l = e, a = G([]), r = G([]), o = G(null), i = G(null), d = G(null), u = G(l.documents[0]?.key ?? "");
    function p(g) {
      try {
        const c = localStorage.getItem(g), x = c ? JSON.parse(c) : [];
        return Array.isArray(x) ? x : [];
      } catch {
        return [];
      }
    }
    de(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = p(`${l.storageKey}.signatures`), r.value = p(`${l.storageKey}.stamps`), o.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), re(
      a,
      (g) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(g));
      },
      { deep: !0 }
    ), re(
      r,
      (g) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(g));
      },
      { deep: !0 }
    );
    function k(g) {
      const c = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: g
      };
      a.value = [c, ...a.value].slice(0, 8), o.value = c.id;
    }
    async function m(g, c) {
      await Go(g), c(40);
      const x = await new Promise((v, y) => {
        const S = new FileReader();
        S.onload = () => v(String(S.result)), S.onerror = () => y(new Error("Could not read the file")), S.readAsDataURL(g);
      });
      return c(100), { value: x, name: g.name, size: g.size, url: x };
    }
    function h() {
      const g = d.value?.url ?? d.value?.value;
      if (!g)
        return;
      const c = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: g
      };
      r.value = [c, ...r.value].slice(0, 8), i.value = c.id;
    }
    const M = $(
      () => a.value.find((g) => g.id === o.value)?.dataUrl ?? null
    ), w = $(
      () => r.value.find((g) => g.id === i.value)?.dataUrl ?? null
    ), C = $(() => {
      const g = l.documents.find((x) => x.key === u.value)?.document ?? l.documents[0]?.document ?? {}, c = {
        ...g?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...g,
        branding: c
      };
    });
    return (g, c) => (t(), n("div", n1, [
      E(Be, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      s("section", l1, [
        E(a1, {
          label: "Draw a signature",
          onSave: k
        }),
        s("div", s1, [
          c[2] || (c[2] = s("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          s("p", o1, f(b(Xt)), 1),
          E(Qt, {
            modelValue: d.value,
            "onUpdate:modelValue": c[0] || (c[0] = (x) => d.value = x),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: m
          }, null, 8, ["modelValue"]),
          E(ne, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
          }, {
            default: O(() => [...c[1] || (c[1] = [
              U(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", r1, [
        E(Be, {
          variant: "small",
          title: "Saved signatures"
        }),
        s("div", i1, [
          (t(!0), n(z, null, V(a.value, (x) => (t(), n("button", {
            key: x.id,
            type: "button",
            class: A(["rounded-md border p-2", x.id === o.value ? "ring-ring ring-2" : ""]),
            onClick: (v) => o.value = x.id
          }, [
            s("img", {
              src: x.dataUrl,
              alt: x.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, u1)
          ], 10, d1))), 128))
        ])
      ])) : _("", !0),
      r.value.length ? (t(), n("section", c1, [
        E(Be, {
          variant: "small",
          title: "Saved stamps"
        }),
        s("div", f1, [
          (t(!0), n(z, null, V(r.value, (x) => (t(), n("button", {
            key: x.id,
            type: "button",
            class: A(["rounded-md border p-2", x.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (v) => i.value = x.id
          }, [
            s("img", {
              src: x.dataUrl,
              alt: x.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, p1)
          ], 10, m1))), 128))
        ])
      ])) : _("", !0),
      e.documents.length ? (t(), n("section", v1, [
        s("div", g1, [
          (t(!0), n(z, null, V(e.documents, (x) => (t(), D(ne, {
            key: x.key,
            size: "sm",
            variant: u.value === x.key ? "default" : "outline",
            onClick: (v) => u.value = x.key
          }, {
            default: O(() => [
              U(f(x.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        s("div", h1, [
          E(ic, {
            document: C.value
          }, null, 8, ["document"]),
          s("div", b1, [
            s("div", x1, [
              c[3] || (c[3] = s("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), n("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, y1)) : (t(), n("p", k1, "Draw and save a signature"))
            ]),
            w.value ? (t(), n("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, $1)) : _("", !0)
          ])
        ])
      ])) : _("", !0)
    ]));
  }
}), lw = "panel.dashboard.hiddenWidgets", w1 = /* @__PURE__ */ Symbol("dashboardHide"), C1 = {
  key: 0,
  class: "lg:col-span-2",
  "data-slot": "dashboard-shortcuts"
}, sw = /* @__PURE__ */ P({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = pa(w1, null), r = G(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), o = G(!1);
    de(() => {
      if (a?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        o.value = !0;
        return;
      }
      try {
        const d = localStorage.getItem(l.storageKey);
        if (d) {
          const u = JSON.parse(d);
          Array.isArray(u) && (r.value = u.filter(
            (p) => typeof p?.id == "string" && typeof p.label == "string" && typeof p.href == "string"
          ));
        }
      } catch {
      }
      o.value = !0;
    }), re(
      r,
      (d) => {
        if (!(!o.value || !l.storageKey))
          try {
            localStorage.setItem(l.storageKey, JSON.stringify(d));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = $(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? _("", !0) : (t(), n("div", C1, [
      E(Qm, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (p) => r.value = p),
        onHide: u[1] || (u[1] = (p) => b(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), _1 = ["aria-disabled"], M1 = ["disabled"], S1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, B1 = ["d"], z1 = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, P1 = ["disabled"], A1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, j1 = ["d"], O1 = /* @__PURE__ */ P({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Ae({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ae(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = Xe(e, "modelValue"), r = l, o = $(() => a.value <= e.min), i = $(() => e.max !== null && a.value >= e.max);
    function d(u) {
      if (e.disabled)
        return;
      const p = a.value + u;
      p < e.min || e.max !== null && p > e.max || (a.value = p, u < 0 ? r("decrease", p) : r("increase", p));
    }
    return (u, p) => (t(), n("div", {
      class: "inline-flex h-8 items-center rounded-md border",
      "data-slot": "qty-stepper",
      role: "group",
      "aria-disabled": e.disabled ? "true" : void 0
    }, [
      s("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || o.value,
        "aria-label": "Decrease quantity",
        onClick: p[0] || (p[0] = (k) => d(-1))
      }, [
        (t(), n("svg", S1, [
          s("path", {
            d: b(se)("minus")
          }, null, 8, B1)
        ]))
      ], 8, M1),
      s("span", z1, f(a.value), 1),
      s("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: p[1] || (p[1] = (k) => d(1))
      }, [
        (t(), n("svg", A1, [
          s("path", {
            d: b(se)("plus")
          }, null, 8, j1)
        ]))
      ], 8, P1)
    ], 8, _1));
  }
}), L1 = { class: "divide-border flex flex-col divide-y" }, V1 = { class: "min-w-0" }, D1 = { class: "truncate text-sm font-medium" }, T1 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, E1 = { class: "flex shrink-0 items-center gap-2 text-sm" }, F1 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, I1 = {
  key: 2,
  class: "font-medium tabular-nums"
}, N1 = ["aria-label", "onClick"], R1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, U1 = ["d"], H1 = /* @__PURE__ */ P({
  __name: "LineItems",
  props: {
    items: {},
    editable: { type: Boolean, default: !1 }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: l }) {
    const a = l;
    function r(o) {
      const i = o.qty;
      if (typeof i == "number" && Number.isFinite(i))
        return i;
      const d = Number(i);
      return Number.isFinite(d) && d > 0 ? d : 1;
    }
    return (o, i) => (t(), n("div", L1, [
      (t(!0), n(z, null, V(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        s("div", V1, [
          s("p", D1, f(d.label), 1),
          d.detail ? (t(), n("p", T1, f(d.detail), 1)) : _("", !0)
        ]),
        s("div", E1, [
          e.editable ? (t(), D(O1, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", F1, " ×" + f(d.qty), 1)) : _("", !0),
          d.amount ? (t(), n("span", I1, f(d.amount), 1)) : _("", !0),
          d.status ? (t(), D(pe, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : _("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => a("remove", d.key)
          }, [
            (t(), n("svg", R1, [
              s("path", {
                d: b(se)("trash")
              }, null, 8, U1)
            ]))
          ], 8, N1)) : _("", !0)
        ])
      ]))), 128))
    ]));
  }
}), K1 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, q1 = { class: "border-b px-4 py-3" }, G1 = { class: "text-sm font-medium" }, W1 = { class: "flex-1 px-4 py-3" }, Z1 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, J1 = { class: "text-foreground block font-medium" }, Y1 = { class: "mt-1 block" }, X1 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Q1 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, eb = { class: "tabular-nums" }, tb = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, ab = { class: "text-muted-foreground" }, nb = {
  key: 0,
  class: "tabular-nums"
}, lb = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, sb = { class: "text-muted-foreground" }, ob = { class: "tabular-nums" }, rb = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, ib = { class: "tabular-nums" }, db = {
  key: 4,
  class: "pt-1"
}, ow = /* @__PURE__ */ P({
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
    return (r, o) => (t(), n("aside", K1, [
      s("header", q1, [
        s("h2", G1, f(e.title), 1)
      ]),
      s("div", W1, [
        e.items.length === 0 ? (t(), n("p", Z1, [
          s("span", J1, f(e.emptyTitle), 1),
          s("span", Y1, f(e.emptyDescription), 1)
        ])) : (t(), D(H1, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: o[0] || (o[0] = (i, d) => a("qty", i, d)),
          onRemove: o[1] || (o[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", X1, [
        e.subtotal ? (t(), n("div", Q1, [
          o[2] || (o[2] = s("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          s("span", eb, f(e.subtotal), 1)
        ])) : _("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", tb, [
          s("span", ab, f(e.discountLabel), 1),
          e.discount ? (t(), n("span", nb, f(e.discount), 1)) : _("", !0),
          H(r.$slots, "discount")
        ])) : _("", !0),
        e.tax ? (t(), n("div", lb, [
          s("span", sb, f(e.taxLabel), 1),
          s("span", ob, f(e.tax), 1)
        ])) : _("", !0),
        e.total ? (t(), n("div", rb, [
          o[3] || (o[3] = s("span", null, "Total", -1)),
          s("span", ib, f(e.total), 1)
        ])) : _("", !0),
        r.$slots.pay ? (t(), n("div", db, [
          H(r.$slots, "pay")
        ])) : _("", !0)
      ])) : _("", !0)
    ]));
  }
}), ub = { class: "flex flex-col gap-3" }, cb = ["data-slot"], fb = ["aria-pressed", "aria-label", "title"], mb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, pb = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, vb = { class: "flex h-8 items-center" }, gb = ["aria-label", "title", "onClick"], hb = ["aria-label", "title", "onClick"], bb = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, xb = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, rw = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(a.maskable ? !a.hidden : !0), i = G(/* @__PURE__ */ new Set());
    function d(v) {
      return a.maskable && (v.sensitive ?? !0);
    }
    function u(v) {
      return d(v) && !o.value && !i.value.has(v.key);
    }
    const p = $(() => a.segments.some(u)), k = $(() => a.segments.some(d)), m = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = $(() => m[a.columns] ?? m[4]), M = $(() => {
      const v = a.columns ?? 4, y = Math.floor(a.segments.length / v) * v;
      return a.segments.slice(0, y);
    }), w = $(() => {
      const v = a.columns ?? 4, y = Math.floor(a.segments.length / v) * v;
      return a.segments.slice(y);
    }), C = $(() => {
      const v = [];
      return M.value.length > 0 && v.push({ key: "packed", joined: !0, segments: M.value }), w.value.length > 0 && v.push({ key: "leftover", joined: !1, segments: w.value }), v;
    });
    function g() {
      const v = p.value === !1;
      o.value = !v, i.value = /* @__PURE__ */ new Set(), r("toggle", v);
    }
    function c(v) {
      if (!d(v))
        return;
      const y = new Set(i.value);
      if (u(v))
        y.add(v.key);
      else if (y.delete(v.key), o.value) {
        o.value = !1;
        for (const S of a.segments)
          S.key !== v.key && d(S) && y.add(S.key);
      }
      i.value = y, r("toggle", p.value);
    }
    function x(v) {
      return typeof v == "number" ? new Intl.NumberFormat().format(v) : v;
    }
    return (v, y) => (t(), n("div", ub, [
      (t(!0), n(z, null, V(C.value, (S) => (t(), n("div", {
        key: S.key,
        class: A(["relative shrink-0", S.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": S.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && k.value && S.key === C.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": p.value,
          "aria-label": p.value ? "Show all values" : "Hide all values",
          title: p.value ? "Show all values" : "Hide all values",
          onClick: g
        }, [
          (t(), n("svg", mb, [
            p.value ? (t(), n(z, { key: 0 }, [
              y[0] || (y[0] = s("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              y[1] || (y[1] = s("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              y[2] || (y[2] = s("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              y[3] || (y[3] = s("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              y[4] || (y[4] = s("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              y[5] || (y[5] = s("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, fb)) : _("", !0),
        s("div", {
          class: A(["grid", [S.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), n(z, null, V(S.segments, (B) => (t(), n("div", {
            key: B.key,
            class: A(["bg-card flex flex-col gap-2 p-4", S.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            s("p", pb, f(B.label), 1),
            s("div", vb, [
              e.loading ? (t(), D(De, {
                key: 0,
                variant: "number"
              })) : u(B) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${B.label} hidden. Show it.`,
                title: `Show ${B.label}`,
                onClick: (q) => c(B)
              }, [
                (t(), n(z, null, V(5, (q) => s("span", {
                  key: q,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, gb)) : d(B) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${B.label}, ${x(B.value)}. Hide it.`,
                title: `Hide ${B.label}`,
                onClick: (q) => c(B)
              }, f(x(B.value)), 9, hb)) : (t(), n("span", bb, f(x(B.value)), 1)),
              B.trend && !e.loading && !u(B) ? (t(), D(na, {
                key: 4,
                direction: B.trend.direction,
                percentage: B.trend.percentage,
                inverted: B.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : _("", !0)
            ]),
            B.sparkline?.length && !e.loading && !u(B) ? (t(), D(et, {
              key: 0,
              data: B.sparkline,
              height: 24
            }, null, 8, ["data"])) : _("", !0),
            B.caption || B.comparison && B.trend ? (t(), n("p", xb, f(B.caption ?? B.comparison), 1)) : _("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, cb))), 128))
    ]));
  }
}), yb = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, kb = { class: "flex items-center justify-between gap-2" }, $b = ["href"], wb = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Cb = { class: "flex flex-col gap-0.5" }, _b = { class: "text-sm font-medium" }, Mb = { class: "text-xs text-muted-foreground" }, Sb = {
  key: 1,
  class: "flex flex-col gap-2"
}, Bb = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, zb = { class: "flex flex-col gap-0.5" }, Pb = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, iw = /* @__PURE__ */ P({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: {}
  },
  setup(e) {
    const l = e, a = l.items.find((o) => !o.done) ?? null, r = l.items.filter((o) => o.key !== a?.key);
    return (o, i) => e.items.length ? (t(), n("section", yb, [
      s("div", kb, [
        i[0] || (i[0] = s("h2", { class: "text-sm font-semibold" }, "Setup checklist", -1)),
        e.reportHref ? (t(), n("a", {
          key: 0,
          href: e.reportHref,
          class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
        }, " Full report ", 8, $b)) : _("", !0)
      ]),
      b(a) ? (t(), n("div", wb, [
        i[1] || (i[1] = s("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        s("div", Cb, [
          s("p", _b, f(b(a).title), 1),
          s("p", Mb, f(b(a).detail), 1)
        ])
      ])) : _("", !0),
      b(r).length ? (t(), n("ul", Sb, [
        (t(!0), n(z, null, V(b(r), (d) => (t(), n("li", {
          key: d.key,
          class: "flex items-start gap-3"
        }, [
          s("span", {
            class: A([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              d.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            d.done ? (t(), n("svg", Bb, [...i[2] || (i[2] = [
              s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : _("", !0)
          ], 2),
          s("div", zb, [
            s("p", {
              class: A(["text-sm", d.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(d.title), 3),
            d.done ? _("", !0) : (t(), n("p", Pb, f(d.detail), 1))
          ])
        ]))), 128))
      ])) : _("", !0)
    ])) : _("", !0);
  }
}), Ab = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, jb = { class: "flex items-center gap-2" }, Ob = { class: "font-medium tabular-nums" }, Lb = { class: "ml-auto flex items-center gap-3" }, dw = /* @__PURE__ */ P({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = (o) => new Intl.NumberFormat().format(o);
    return (o, i) => (t(), n("div", Ab, [
      s("div", jb, [
        H(o.$slots, "actions")
      ]),
      s("span", Ob, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          U(" All " + f(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          U(f(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      s("div", Lb, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (d) => a("select-all-matching"))
        }, " Select all " + f(r(e.total)), 1)) : _("", !0),
        s("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (d) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), Vb = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Db = { class: "text-muted-foreground text-xs tabular-nums" }, Tb = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Eb = ["value"], Fb = ["value"], Ib = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Nb = ["disabled"], Rb = ["disabled"], Ub = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Hb = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Kb = ["disabled"], uw = /* @__PURE__ */ P({
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
    const a = e, r = l, o = (p) => new Intl.NumberFormat().format(p), i = $(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = $(() => (a.page - 1) * a.perPage + a.rowsOnPage), u = $(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (p, k) => (t(), n("div", Vb, [
      s("p", Db, [
        U(" Showing " + f(o(i.value)) + "-" + f(o(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          U("of " + f(o(e.total)), 1)
        ], 64)) : _("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Tb, [
        k[4] || (k[4] = s("span", null, "Per page", -1)),
        s("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: k[0] || (k[0] = (m) => r("update:perPage", Number(m.target.value)))
        }, [
          (t(!0), n(z, null, V(e.perPageOptions, (m) => (t(), n("option", {
            key: m,
            value: m
          }, f(m), 9, Fb))), 128))
        ], 40, Eb)
      ])) : _("", !0),
      s("nav", Ib, [
        s("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: k[1] || (k[1] = (m) => r("first"))
        }, [...k[5] || (k[5] = [
          s("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            s("path", { d: "m17 18-6-6 6-6M11 18l-6-6 6-6" })
          ], -1)
        ])], 8, Nb),
        s("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: k[2] || (k[2] = (m) => r("previous"))
        }, [...k[6] || (k[6] = [
          s("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            s("path", { d: "m15 18-6-6 6-6" })
          ], -1)
        ])], 8, Rb),
        s("span", Ub, f(e.page), 1),
        u.value !== null ? (t(), n("span", Hb, " of " + f(o(u.value)), 1)) : _("", !0),
        s("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: k[3] || (k[3] = (m) => r("next"))
        }, [...k[7] || (k[7] = [
          s("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            s("path", { d: "m9 18 6-6-6-6" })
          ], -1)
        ])], 8, Kb)
      ])
    ]));
  }
}), qb = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, Gb = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, Wb = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, Zb = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, cw = /* @__PURE__ */ P({
  __name: "TableShell",
  setup(e) {
    return (l, a) => (t(), n("div", qb, [
      l.$slots.tabs ? (t(), n("div", Gb, [
        H(l.$slots, "tabs")
      ])) : _("", !0),
      l.$slots.toolbar ? (t(), n("div", Wb, [
        H(l.$slots, "toolbar")
      ])) : _("", !0),
      H(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Zb, [
        H(l.$slots, "pagination")
      ])) : _("", !0)
    ]));
  }
}), Jb = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Yb = ["aria-current"], Xb = ["title"], Qb = ["aria-current", "onClick"], ex = ["title"], tx = /* @__PURE__ */ P({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = l;
    function r(o) {
      return o >= 1e6 ? (o / 1e6).toFixed(o % 1e6 === 0 ? 0 : 1) + "M" : o >= 1e4 ? Math.round(o / 1e3) + "k" : new Intl.NumberFormat().format(o);
    }
    return (o, i) => (t(), n("div", Jb, [
      s("button", {
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => a("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Xb)) : (t(), D(De, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Yb),
      (t(!0), n(z, null, V(e.tabs, (d) => (t(), n("button", {
        key: d,
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => a("select", d)
      }, [
        U(f(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, ex)) : (t(), D(De, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Qb))), 128))
    ]));
  }
}), fw = /* @__PURE__ */ yt(tx, [["__scopeId", "data-v-3967c945"]]), ax = { class: "flex flex-wrap items-center justify-end gap-2" }, nx = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, lx = ["placeholder", "title", "aria-label"], sx = ["aria-label"], ox = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, rx = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, ix = { class: "text-xs font-medium" }, dx = ["value", "onChange"], ux = ["value"], cx = { class: "grid grid-cols-2 gap-2" }, fx = ["value", "onChange"], mx = ["value", "onChange"], px = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, vx = ["value", "onChange"], gx = ["value", "onChange"], hx = {
  key: 4,
  class: "flex items-center gap-2"
}, bx = ["aria-checked", "onClick"], xx = { class: "text-xs" }, yx = ["onClick"], kx = ["value", "onChange"], $x = ["value"], wx = ["disabled", "onClick"], Cx = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, _x = ["disabled", "onClick"], Mx = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Sx = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Bx = ["aria-pressed", "aria-label", "title"], zx = {
  key: 3,
  class: "text-muted-foreground shrink-0 text-xs"
}, mw = /* @__PURE__ */ P({
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
    reordering: { type: Boolean, default: !1 }
  },
  emits: ["update:search", "apply-filters", "apply-columns", "clear", "toggle-reorder"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(a.search);
    re(
      () => a.search,
      (T) => {
        T !== o.value && (o.value = T);
      }
    );
    let i;
    re(o, (T) => {
      clearTimeout(i), i = setTimeout(() => {
        T !== a.search && r("update:search", T);
      }, 250);
    });
    const d = G({ ...a.filters });
    re(
      () => a.filters,
      (T) => {
        d.value = { ...T };
      },
      { deep: !0 }
    );
    const u = $(
      () => a.filterSchema.filter(
        (T) => a.filters[T.key] !== null && a.filters[T.key] !== void 0
      ).length
    ), p = $(() => JSON.stringify(d.value) !== JSON.stringify(a.filters)), k = $(() => a.search !== "" || u.value > 0);
    function m(T) {
      return T.type === "multiselect";
    }
    function h(T) {
      const j = d.value[T.key];
      return Array.isArray(j) ? j : j == null ? [] : [j];
    }
    function M(T) {
      return h(T).filter(
        (j) => typeof j == "string" || typeof j == "number"
      );
    }
    function w(T) {
      return B(T).flatMap(
        (j) => typeof j.value == "string" || typeof j.value == "number" ? [{ value: j.value, label: j.label }] : []
      );
    }
    function C(T, j) {
      d.value = { ...d.value, [T.key]: j === "" ? null : j };
    }
    function g(T, j) {
      const W = d.value[T.key];
      if (typeof W != "string" || !W.includes(".."))
        return "";
      const [I, R] = W.split("..");
      return j === "from" ? I ?? "" : R ?? "";
    }
    function c(T, j, W) {
      const I = j === "from" ? W : g(T, "from"), R = j === "to" ? W : g(T, "to");
      d.value = {
        ...d.value,
        [T.key]: I && R ? `${I}..${R}` : null
      };
    }
    function x(T, j, W) {
      const I = j === "from" ? W : g(T, "from"), R = j === "to" ? W : g(T, "to");
      d.value = {
        ...d.value,
        [T.key]: I || R ? `${I}..${R}` : null
      };
    }
    function v(T) {
      r("apply-filters", { ...d.value }), T();
    }
    function y(T, j) {
      d.value[T] = j, r("apply-filters", { ...d.value });
    }
    function S() {
      d.value = Object.fromEntries(a.filterSchema.map((T) => [T.key, null]));
    }
    function B(T) {
      return T.type === "boolean" ? [
        { value: !0, label: T.trueLabel ?? "Yes" },
        { value: !1, label: T.falseLabel ?? "No" }
      ] : T.type === "daterange" ? Object.entries(T.presets ?? {}).map(([j, W]) => ({
        value: j,
        label: W
      })) : (T.options ?? []).map((j) => ({ value: j, label: j }));
    }
    const q = G(new Set(a.hidden));
    re(
      () => a.hidden,
      (T) => {
        q.value = new Set(T);
      },
      { deep: !0 }
    );
    function N(T) {
      const j = new Set(q.value);
      j.has(T) ? j.delete(T) : j.add(T), q.value = j, r("apply-columns", [...j]);
    }
    function Y() {
      q.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function F() {
      o.value = "", r("clear");
    }
    return (T, j) => (t(), n("div", ax, [
      s("div", nx, [
        j[4] || (j[4] = s("svg", {
          class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, [
          s("circle", {
            cx: "11",
            cy: "11",
            r: "7"
          }),
          s("path", { d: "m20 20-3.5-3.5" })
        ], -1)),
        oe(s("input", {
          "onUpdate:modelValue": j[0] || (j[0] = (W) => o.value = W),
          type: "search",
          placeholder: e.searchPlaceholder,
          title: e.searchHint,
          "aria-label": e.searchHint ?? e.searchPlaceholder,
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
        }, null, 8, lx), [
          [Ce, o.value]
        ]),
        o.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
          "aria-label": "Clear search",
          onClick: j[1] || (j[1] = (W) => o.value = "")
        }, [...j[3] || (j[3] = [
          s("svg", {
            viewBox: "0 0 24 24",
            class: "size-3.5",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [
            s("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])])) : _("", !0)
      ]),
      e.filterSchema.length ? (t(), D(He, {
        key: 0,
        width: "w-80",
        "dismiss-on-panel-click": !1
      }, {
        trigger: O(() => [
          s("button", {
            type: "button",
            dusk: "filters-trigger",
            class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", u.value ? "border-primary text-primary" : ""]),
            "aria-label": u.value ? `Filters (${u.value} active)` : "Filters",
            title: "Filters"
          }, [
            j[5] || (j[5] = s("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, [
              s("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            u.value ? (t(), n("span", ox, f(u.value), 1)) : _("", !0)
          ], 10, sx)
        ]),
        panel: O(({ close: W }) => [
          s("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
            j[6] || (j[6] = s("span", { class: "text-sm font-semibold" }, "Filters", -1)),
            s("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: S
            }, " Reset ")
          ]),
          j[9] || (j[9] = s("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
          s("div", rx, [
            (t(!0), n(z, null, V(e.filterSchema, (I) => (t(), n("div", {
              key: I.key,
              class: "flex flex-col gap-1.5"
            }, [
              s("label", ix, f(I.label), 1),
              m(I) ? (t(), D(Ct, {
                key: 0,
                "model-value": M(I),
                options: w(I),
                placeholder: `Any ${I.label.toLowerCase()}`,
                "onUpdate:modelValue": (R) => d.value[I.key] = R.length ? R : null
              }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : I.type === "querybuilder" ? (t(), D(us, {
                key: 1,
                "model-value": d.value[I.key] ?? null,
                fields: I.fields ?? {},
                operators: I.operators ?? {},
                "max-depth": I.maxDepth ?? 5,
                onApply: (R) => y(I.key, R)
              }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : I.type === "daterange" ? (t(), n(z, { key: 2 }, [
                s("select", {
                  value: typeof d.value[I.key] == "string" && !String(d.value[I.key]).includes("..") ? d.value[I.key] : "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                  onChange: (R) => C(I, R.target.value)
                }, [
                  j[7] || (j[7] = s("option", { value: "" }, "Any time", -1)),
                  (t(!0), n(z, null, V(B(I), (R) => (t(), n("option", {
                    key: String(R.value),
                    value: R.value
                  }, f(R.label), 9, ux))), 128))
                ], 40, dx),
                s("div", cx, [
                  s("input", {
                    type: "date",
                    value: g(I, "from"),
                    "aria-label": "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (R) => c(
                      I,
                      "from",
                      R.target.value
                    )
                  }, null, 40, fx),
                  s("input", {
                    type: "date",
                    value: g(I, "to"),
                    "aria-label": "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (R) => c(
                      I,
                      "to",
                      R.target.value
                    )
                  }, null, 40, mx)
                ])
              ], 64)) : I.type === "numberrange" ? (t(), n("div", px, [
                s("input", {
                  type: "number",
                  value: g(I, "from"),
                  "aria-label": "From",
                  placeholder: "From",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (R) => x(
                    I,
                    "from",
                    R.target.value
                  )
                }, null, 40, vx),
                s("input", {
                  type: "number",
                  value: g(I, "to"),
                  "aria-label": "To",
                  placeholder: "To",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (R) => x(
                    I,
                    "to",
                    R.target.value
                  )
                }, null, 40, gx)
              ])) : I.type === "boolean" ? (t(), n("div", hx, [
                s("button", {
                  type: "button",
                  role: "switch",
                  "aria-checked": d.value[I.key] === !0,
                  class: A([
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    d.value[I.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                  ]),
                  onClick: (R) => C(I, d.value[I.key] === !0 ? null : !0)
                }, [
                  s("span", {
                    class: A(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[I.key] === !0 ? "left-4.5" : "left-0.5"])
                  }, null, 2)
                ], 10, bx),
                s("span", xx, f(I.trueLabel ?? "Yes"), 1),
                s("button", {
                  type: "button",
                  class: A([
                    "text-muted-foreground ml-auto text-xs hover:underline",
                    d.value[I.key] === !1 ? "text-primary font-medium" : ""
                  ]),
                  onClick: (R) => C(I, d.value[I.key] === !1 ? null : !1)
                }, f(I.falseLabel ?? "No") + " only ", 11, yx)
              ])) : (t(), n("select", {
                key: 5,
                value: d.value[I.key] ?? "",
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                onChange: (R) => C(I, R.target.value)
              }, [
                j[8] || (j[8] = s("option", { value: "" }, "All", -1)),
                (t(!0), n(z, null, V(B(I), (R) => (t(), n("option", {
                  key: String(R.value),
                  value: R.value
                }, f(R.label), 9, $x))), 128))
              ], 40, kx))
            ]))), 128))
          ]),
          s("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
            disabled: !p.value,
            onClick: (I) => v(W)
          }, " Apply filters ", 8, wx)
        ]),
        _: 1
      })) : _("", !0),
      E(He, { "dismiss-on-panel-click": !1 }, {
        trigger: O(() => [...j[10] || (j[10] = [
          s("button", {
            type: "button",
            class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 transition-colors",
            "aria-label": "Toggle columns"
          }, [
            s("svg", {
              viewBox: "0 0 24 24",
              class: "size-4 shrink-0",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              s("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "16",
                rx: "2"
              }),
              s("path", { d: "M9 4v16M15 4v16" })
            ]),
            s("span", { class: "text-sm" }, "Columns View")
          ], -1)
        ])]),
        panel: O(() => [
          j[13] || (j[13] = s("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
          s("div", Cx, [
            (t(!0), n(z, null, V(e.columns, (W) => (t(), n("button", {
              key: W.key,
              type: "button",
              class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", W.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
              disabled: W.locked,
              onClick: (I) => N(W.key)
            }, [
              q.value.has(W.key) ? (t(), n("span", Sx)) : (t(), n("svg", Mx, [...j[11] || (j[11] = [
                s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])),
              U(" " + f(W.label), 1)
            ], 10, _x))), 128))
          ]),
          s("div", { class: "border-t" }, [
            s("button", {
              type: "button",
              class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
              onClick: Y
            }, [...j[12] || (j[12] = [
              s("svg", {
                viewBox: "0 0 24 24",
                class: "size-4 shrink-0",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                s("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
                s("path", { d: "M3 3v5h5" })
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
        class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
        "aria-pressed": e.reordering,
        "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
        title: e.reordering ? "Finish reordering" : "Reorder records",
        onClick: j[2] || (j[2] = (W) => r("toggle-reorder"))
      }, [...j[14] || (j[14] = [
        s("svg", {
          viewBox: "0 0 24 24",
          class: "size-4",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [
          s("path", { d: "m3 16 4 4 4-4M7 20V4m14 4-4-4-4 4m4-4v16" })
        ], -1)
      ])], 10, Bx)) : _("", !0),
      k.value ? (t(), n("button", {
        key: 2,
        type: "button",
        class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
        onClick: F
      }, " Clear ")) : _("", !0),
      e.loading ? (t(), n("span", zx, "Loading…")) : _("", !0)
    ]));
  }
}), Px = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ax = { class: "grid gap-2" }, jx = {
  key: 0,
  class: "text-destructive text-sm"
}, Ox = { class: "flex gap-2" }, pw = /* @__PURE__ */ P({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, o = G((() => {
      const M = navigator.userAgent, w = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: g }) => g.test(M))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: g }) => g.test(M))?.name;
      return [w, C].filter(Boolean).join(" on ") || "";
    })()), i = G(!1), d = va(null), u = $(() => d.value?.isLoading.value ?? !1), p = $(() => d.value?.error.value ?? null), k = $(() => d.value?.isSupported.value ?? !1);
    de(async () => {
      try {
        const { usePasskeyRegister: M } = await import("@laravel/passkeys/vue");
        d.value = M({
          onSuccess: () => {
            o.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        d.value = null;
      }
    });
    const m = async (M) => {
      M.preventDefault(), !(!o.value.trim() || d.value === null) && await d.value.register(o.value);
    }, h = () => {
      i.value = !1, o.value = "";
    };
    return (M, w) => k.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: m
    }, [
      s("div", Ax, [
        w[3] || (w[3] = s("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        oe(s("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": w[1] || (w[1] = (C) => o.value = C),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Ce, o.value]
        ]),
        w[4] || (w[4] = s("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      p.value ? (t(), n("p", jx, f(p.value), 1)) : _("", !0),
      s("div", Ox, [
        E(ne, {
          type: "submit",
          disabled: u.value || !o.value.trim()
        }, {
          default: O(() => [
            U(f(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        E(ne, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: O(() => [...w[5] || (w[5] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(ne, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = (C) => i.value = !0)
    }, {
      default: O(() => [...w[2] || (w[2] = [
        U(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", Px, " Passkeys are not supported in this browser. "));
  }
}), Lx = { class: "text-sm font-semibold" }, Vx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Dx = {
  key: 4,
  class: "flex flex-col gap-3"
}, Tx = { class: "text-sm font-medium" }, Ex = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Fx = {
  key: 0,
  class: "mb-1 font-medium"
}, Ix = ["onClick"], Nx = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Rx = { class: "flex items-center justify-between gap-3 border-t p-4" }, Ux = ["disabled"], Hx = /* @__PURE__ */ P({
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
  emits: ["change"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(!a.node.collapsed), i = G(0), d = G(0), u = $(
      () => (a.node.children ?? []).map((g) => ({
        label: g.label ?? "",
        description: g.description
      }))
    ), p = $(() => a.depth === 0), k = $(() => {
      const g = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, c = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        g[a.node.align ?? "start"] ?? "items-start",
        c[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), m = $(() => {
      const g = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return g[a.node.tone ?? "info"] ?? g.info;
    }), h = $(() => {
      const g = a.node.columns ?? 1;
      return g >= 3 ? "sm:grid-cols-3" : g === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function M(g) {
      const c = [], x = (v) => {
        v.component === "field" && v.key && c.push(v.key), v.children?.forEach(x);
      };
      return x(g), c.some((v) => a.errors[v]);
    }
    function w(g) {
      const c = g.visibleWhen;
      return c ? a.values[c.field] == c.value : !0;
    }
    function C(g) {
      if (a.upload)
        return (c, x) => a.upload(g, c, x);
    }
    return (g, c) => {
      const x = pt("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), D(Ke, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (v) => e.searchOptions(e.node.key, v) : void 0,
        upload: C(e.node.key),
        discard: e.discard,
        onChange: c[0] || (c[0] = (v) => r("change", e.node.key, v))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && w(e.node) ? (t(), n("section", {
        key: 1,
        class: A(p.value ? "bg-card rounded-lg border" : "")
      }, [
        s("header", {
          class: A(["flex items-start justify-between gap-3", [
            p.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: c[1] || (c[1] = (v) => e.node.collapsible && (o.value = !o.value))
        }, [
          s("div", null, [
            s("h3", Lx, f(e.node.label), 1),
            e.node.description ? (t(), n("p", Vx, f(e.node.description), 1)) : _("", !0)
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", o.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...c[11] || (c[11] = [
            s("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : _("", !0)
        ], 2),
        o.value ? (t(), n("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [h.value, p.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (v, y) => (t(), D(x, {
            key: y,
            node: v,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: A(v.span && v.span >= 2 ? "sm:col-span-2" : ""),
            onChange: c[2] || (c[2] = (S, B) => r("change", S, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : _("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (v, y) => (t(), D(x, {
          key: y,
          node: v,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: c[3] || (c[3] = (S, B) => r("change", S, B))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 3,
        class: A(["flex", k.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (v, y) => (t(), D(x, {
          key: y,
          node: v,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: c[4] || (c[4] = (S, B) => r("change", S, B))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Dx, [
        s("legend", Tx, f(e.node.label), 1),
        e.node.description ? (t(), n("p", Ex, f(e.node.description), 1)) : _("", !0),
        s("div", {
          class: A(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (v, y) => (t(), D(x, {
            key: y,
            node: v,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[5] || (c[5] = (S, B) => r("change", S, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 5,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", m.value])
      }, [
        e.node.title ? (t(), n("p", Fx, f(e.node.title), 1)) : _("", !0),
        s("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: A(p.value ? "bg-card rounded-lg border" : "")
      }, [
        s("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", p.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (v, y) => (t(), n("button", {
            key: y,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === y ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (S) => i.value = y
          }, [
            U(f(v.label) + " ", 1),
            M(v) ? (t(), n("span", Nx)) : _("", !0)
          ], 10, Ix))), 128))
        ], 2),
        (t(!0), n(z, null, V(e.node.children ?? [], (v, y) => oe((t(), n("div", {
          key: y,
          class: A(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(v.children ?? [], (S, B) => (t(), D(x, {
            key: B,
            node: S,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[6] || (c[6] = (q, N) => r("change", q, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [_e, i.value === y]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: A(p.value ? "bg-card rounded-lg border" : "")
      }, [
        E(Rr, {
          class: A(["p-4", p.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (v) => M((e.node.children ?? [])[v]),
          "onUpdate:activeStep": c[7] || (c[7] = (v) => d.value = v)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, V(e.node.children ?? [], (v, y) => oe((t(), n("div", {
          key: y,
          class: A(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(v.children ?? [], (S, B) => (t(), D(x, {
            key: B,
            node: S,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[8] || (c[8] = (q, N) => r("change", q, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [_e, d.value === y]
        ])), 128)),
        s("div", Rx, [
          s("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: c[9] || (c[9] = (v) => d.value--)
          }, " Back ", 8, Ux),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: c[10] || (c[10] = (v) => d.value++)
          }, " Next ")) : _("", !0)
        ])
      ], 2)) : _("", !0);
    };
  }
}), Kx = { class: "flex flex-col gap-4" }, qx = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, vw = /* @__PURE__ */ P({
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
    discard: {}
  },
  emits: ["change"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(() => a.nodes.length > 0), i = $(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = $(() => a.errors._conflict);
    function u(p) {
      if (a.upload)
        return (k, m) => a.upload(p, k, m);
    }
    return (p, k) => (t(), n("div", Kx, [
      d.value ? (t(), n("p", qx, f(d.value), 1)) : _("", !0),
      o.value ? (t(!0), n(z, { key: 1 }, V(e.nodes, (m, h) => (t(), D(Hx, {
        key: h,
        node: m,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: k[0] || (k[0] = (M, w) => r("change", M, w))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, V(e.fields, (m) => (t(), D(Ke, {
          key: m.key,
          field: m,
          value: e.modelValue[m.key],
          error: e.errors[m.key],
          errors: e.errors,
          options: e.options[m.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": m.searchable && e.searchOptions ? (h) => e.searchOptions(m.key, h) : void 0,
          upload: u(m.key),
          discard: e.discard,
          class: A(m.span && m.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", m.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), Gx = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, Wx = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, Zx = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Jx = ["disabled"], Yx = ["disabled"], Xx = ["disabled"], gw = /* @__PURE__ */ P({
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
    return (l, a) => (t(), D(Te, { to: "body" }, [
      E(ze, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: O(() => [
          e.show ? (t(), n("div", Gx, [
            s("div", Wx, [
              a[3] || (a[3] = s("span", {
                class: "text-amber-500",
                "aria-hidden": "true"
              }, [
                s("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  s("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9"
                  }),
                  s("path", { d: "M12 8v4M12 16h.01" })
                ])
              ], -1)),
              s("span", Zx, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, f(e.discardLabel), 9, Jx)) : _("", !0),
              s("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, f(e.cancelLabel), 9, Yx),
              s("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Xx)
            ])
          ])) : _("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function hw(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = G(ot(e.value)), o = $(() => ot(e.value) !== r.value);
  function i() {
    r.value = ot(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(p) {
    o.value && (p.preventDefault(), p.returnValue = "");
  }
  return de(() => {
    a && window.addEventListener("beforeunload", u);
  }), me(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: o, commit: i, discard: d, baseline: r };
}
function ot(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [o]) => r.localeCompare(o))
  ));
}
const Qx = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, ey = { class: "text-muted-foreground text-xs font-medium" }, ty = { class: "text-sm" }, ay = { key: 1 }, ny = { class: "text-sm font-semibold" }, ly = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, sy = ["onClick"], bw = /* @__PURE__ */ P({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  setup(e) {
    const l = e, a = G(!l.node.collapsed), r = G(0), o = $(() => l.depth === 0), i = $(() => {
      const m = l.node.columns ?? 1;
      return m >= 3 ? "sm:grid-cols-3" : m === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), d = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, u = $(() => l.node.key ? l.record[l.node.key] : null), p = $(() => {
      const m = u.value;
      if (m == null || m === "")
        return "-";
      if (l.node.type === "date" || l.node.type === "datetime")
        return new Date(String(m)).toLocaleDateString(void 0, d[l.node.type]);
      let h = String(m);
      return l.node.transform === "upper" && (h = h.toUpperCase()), l.node.transform === "lower" && (h = h.toLowerCase()), [l.node.prefix, h, l.node.suffix].filter(Boolean).join(" ");
    }), k = $(() => {
      const m = typeof u.value == "boolean" ? u.value ? "1" : "" : String(u.value), h = l.node.colors?.[m] ?? l.node.defaultColor ?? "neutral";
      return kt[h] ?? "outline";
    });
    return (m, h) => {
      const M = pt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", Qx, [
        s("dt", ey, f(e.node.label), 1),
        s("dd", ty, [
          e.node.type === "badge" && b(xs)(u.value) ? (t(), D(Re, {
            key: 0,
            variant: k.value,
            class: "capitalize"
          }, {
            default: O(() => [
              U(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", ay, "-")) : (t(), n("span", {
            key: 2,
            class: A([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, f(p.value), 3))
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: A(o.value ? "bg-card rounded-lg border" : "")
      }, [
        s("header", {
          class: A(["flex items-start justify-between gap-3", [
            o.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: h[0] || (h[0] = (w) => e.node.collapsible && (a.value = !a.value))
        }, [
          s("div", null, [
            s("h3", ny, f(e.node.label), 1),
            e.node.description ? (t(), n("p", ly, f(e.node.description), 1)) : _("", !0)
          ])
        ], 2),
        a.value ? (t(), n("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [i.value, o.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (w, C) => (t(), D(M, {
            key: C,
            node: w,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : _("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (w, C) => (t(), D(M, {
          key: C,
          node: w,
          record: e.record,
          depth: e.depth + 1
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: A(o.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        s("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", o.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (w, C) => (t(), n("button", {
            key: C,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              r.value === C ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (g) => r.value = C
          }, f(w.label), 11, sy))), 128))
        ], 2),
        (t(!0), n(z, null, V(e.node.children ?? [], (w, C) => oe((t(), n("div", {
          key: C,
          class: A(["flex flex-col gap-5", o.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(w.children ?? [], (g, c) => (t(), D(M, {
            key: c,
            node: g,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [_e, r.value === C]
        ])), 128))
      ], 2)) : _("", !0);
    };
  }
}), oy = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, ry = { class: "text-muted-foreground text-sm" }, iy = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, dy = { class: "flex items-start gap-3" }, uy = { class: "min-w-0 flex-1" }, cy = { class: "flex flex-wrap items-center gap-2" }, fy = { class: "truncate text-sm font-medium" }, my = { class: "text-muted-foreground mt-0.5 text-xs" }, py = { class: "text-muted-foreground text-xs" }, vy = { class: "mt-auto flex items-center gap-2" }, gy = /* @__PURE__ */ P({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), n("div", oy, [
      s("p", ry, f(o.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      s("div", iy, [
        (t(!0), n(z, null, V(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          s("div", dy, [
            s("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: Q({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            s("div", uy, [
              s("div", cy, [
                s("h3", fy, f(u.label), 1),
                E(pe, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: O(() => [
                    U(f(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), D(pe, {
                  key: 0,
                  status: "offered"
                }, {
                  default: O(() => [...d[0] || (d[0] = [
                    U(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), D(pe, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: O(() => [...d[1] || (d[1] = [
                    U(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : _("", !0),
                u.isDefault ? (t(), D(pe, {
                  key: 2,
                  status: "default"
                }, {
                  default: O(() => [...d[2] || (d[2] = [
                    U(" Default ", -1)
                  ])]),
                  _: 1
                })) : _("", !0),
                u.connected && u.mode ? (t(), D(pe, {
                  key: 3,
                  status: u.mode
                }, {
                  default: O(() => [
                    U(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : _("", !0)
              ]),
              s("p", my, f(u.caption), 1)
            ])
          ]),
          s("p", py, f(u.methods.join(" · ")), 1),
          s("div", vy, [
            E(ne, {
              size: "sm",
              variant: "outline",
              onClick: (p) => r("configure", u.key)
            }, {
              default: O(() => [...d[3] || (d[3] = [
                U(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(ne, {
              size: "sm",
              variant: "ghost",
              onClick: (p) => r("toggle", u.key)
            }, {
              default: O(() => [
                U(f(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), hy = { class: "flex flex-col gap-6" }, by = { class: "relative" }, xy = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, yy = ["d"], ky = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, $y = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, wy = { class: "flex flex-wrap items-center gap-2" }, Cy = { class: "text-muted-foreground text-sm" }, _y = { class: "flex flex-col gap-1 text-sm" }, My = ["value"], Sy = {
  key: 0,
  class: "flex flex-col gap-2"
}, By = { class: "flex flex-wrap items-center gap-2" }, zy = {
  key: 1,
  class: "flex items-center gap-2"
}, xw = /* @__PURE__ */ P({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Ae({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const l = Xe(e, "gateways"), a = G(null), r = G(""), o = $(
      () => l.value.find((w) => w.key === a.value) ?? null
    ), i = $(() => {
      const w = r.value.trim().toLowerCase();
      return w === "" ? l.value : l.value.filter((C) => [C.key, C.label, C.caption, ...C.methods].join(" ").toLowerCase().includes(w));
    });
    function d(w) {
      return w.connected && w.enabled !== !1;
    }
    function u(w, C) {
      l.value = l.value.map(
        (g) => g.key === w ? { ...g, ...C } : g
      );
    }
    function p(w) {
      a.value = w;
    }
    function k(w) {
      const C = l.value.find((c) => c.key === w);
      if (!C)
        return;
      const g = !C.connected;
      u(w, {
        connected: g,
        mode: g ? C.mode ?? "test" : null,
        enabled: g,
        isDefault: !1
      });
    }
    function m(w, C) {
      const g = l.value.find((c) => c.key === w);
      g?.connected && u(w, { enabled: C, isDefault: C ? g.isDefault : !1 });
    }
    function h(w) {
      const C = l.value.find((g) => g.key === w);
      !C || !d(C) || (l.value = l.value.map((g) => ({
        ...g,
        isDefault: g.key === w
      })));
    }
    function M(w) {
      const C = a.value;
      !C || !l.value.find((c) => c.key === C)?.connected || u(C, { mode: w });
    }
    return (w, C) => (t(), n(z, null, [
      s("div", hy, [
        E(Be, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        s("div", by, [
          (t(), n("svg", xy, [
            s("path", {
              d: b(se)("search")
            }, null, 8, yy)
          ])),
          E(fe, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (g) => r.value = g),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(gy, {
          key: 0,
          gateways: i.value,
          onConfigure: p,
          onToggle: k
        }, null, 8, ["gateways"])) : (t(), n("p", ky, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      E(_t, {
        open: o.value !== null,
        title: o.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: C[8] || (C[8] = (g) => a.value = null)
      }, {
        footer: O(() => [
          E(ne, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (g) => a.value = null)
          }, {
            default: O(() => [...C[21] || (C[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          o.value ? (t(), D(ne, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (g) => k(o.value.key))
          }, {
            default: O(() => [
              U(f(o.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : _("", !0)
        ]),
        default: O(() => [
          o.value ? (t(), n("div", $y, [
            s("div", wy, [
              E(pe, {
                status: o.value.connected ? "connected" : "disconnected"
              }, {
                default: O(() => [
                  U(f(o.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              o.value.connected && o.value.enabled !== !1 ? (t(), D(pe, {
                key: 0,
                status: "offered"
              }, {
                default: O(() => [...C[9] || (C[9] = [
                  U(" Offered ", -1)
                ])]),
                _: 1
              })) : o.value.connected ? (t(), D(pe, {
                key: 1,
                status: "disabled"
              }, {
                default: O(() => [...C[10] || (C[10] = [
                  U(" Disabled ", -1)
                ])]),
                _: 1
              })) : _("", !0),
              o.value.isDefault ? (t(), D(pe, {
                key: 2,
                status: "default"
              }, {
                default: O(() => [...C[11] || (C[11] = [
                  U(" Default ", -1)
                ])]),
                _: 1
              })) : _("", !0),
              o.value.connected && o.value.mode ? (t(), D(pe, {
                key: 3,
                status: o.value.mode
              }, {
                default: O(() => [
                  U(f(o.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : _("", !0)
            ]),
            s("p", Cy, f(o.value.caption), 1),
            s("label", _y, [
              C[12] || (C[12] = U(" Display name ", -1)),
              s("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: o.value.label,
                readonly: ""
              }, null, 8, My)
            ]),
            C[20] || (C[20] = s("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              s("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            o.value.connected ? (t(), n("div", Sy, [
              C[16] || (C[16] = s("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = s("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              s("div", By, [
                E(ne, {
                  size: "sm",
                  variant: o.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (g) => m(o.value.key, !0))
                }, {
                  default: O(() => [...C[13] || (C[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ne, {
                  size: "sm",
                  variant: o.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (g) => m(o.value.key, !1))
                }, {
                  default: O(() => [...C[14] || (C[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ne, {
                  size: "sm",
                  variant: o.value.isDefault ? "default" : "outline",
                  disabled: !d(o.value),
                  onClick: C[3] || (C[3] = (g) => h(o.value.key))
                }, {
                  default: O(() => [...C[15] || (C[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : _("", !0),
            o.value.connected ? (t(), n("div", zy, [
              E(ne, {
                size: "sm",
                variant: o.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (g) => M("test"))
              }, {
                default: O(() => [...C[18] || (C[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(ne, {
                size: "sm",
                variant: o.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (g) => M("live"))
              }, {
                default: O(() => [...C[19] || (C[19] = [
                  U(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : _("", !0)
          ])) : _("", !0)
        ]),
        _: 1
      }, 8, ["open", "title"])
    ], 64));
  }
});
function Tt(e) {
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
function yw(e) {
  const l = G(Tt(e));
  de(() => {
    l.value = Tt(e);
  }), re(
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
    const p = new Set(l.value);
    p.has(u) ? p.delete(u) : p.add(u), l.value = p;
  }
  function r(u) {
    const p = new Set(l.value);
    p.add(u), l.value = p;
  }
  function o(u) {
    const p = new Set(l.value);
    p.delete(u), l.value = p;
  }
  function i(u) {
    l.value = new Set(u);
  }
  function d() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: a, hide: r, show: o, setHidden: i, reset: d };
}
function kw(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: o, onResync: i, onInsert: d } = e, u = G(
    l.driver === "none" ? "off" : "connecting"
  ), p = G(/* @__PURE__ */ new Set());
  let k = /* @__PURE__ */ new Map(), m, h, M, w = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function g(T, j) {
    k.set(T, { ...k.get(T) ?? {}, ...j }), !m && (m = setTimeout(() => {
      m = void 0, c();
    }, l.batchMs));
  }
  function c() {
    if (k.size === 0)
      return;
    const T = k;
    k = /* @__PURE__ */ new Map();
    const j = /* @__PURE__ */ new Set();
    for (const [W, I] of T) {
      const R = a.value.find((te) => te[r] === W);
      if (!R) {
        d?.(W, I);
        continue;
      }
      Object.assign(R, I), j.add(W);
    }
    j.size !== 0 && (p.value = /* @__PURE__ */ new Set([...p.value, ...j]), setTimeout(() => {
      const W = new Set(p.value);
      j.forEach((I) => W.delete(I)), p.value = W;
    }, 1500));
  }
  async function x() {
    if (!(!o || a.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const T = a.value.map((I) => I[r]), { records: j, at: W } = await o(T, w);
        w = W, u.value = "live";
        for (const I of j)
          g(I[r], I);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function v() {
    y(), u.value = "live", h = setInterval(x, l.intervalMs);
  }
  function y() {
    clearInterval(h), h = void 0, M?.abort();
  }
  function S() {
    return window.Echo ?? null;
  }
  function B() {
    const T = S();
    if (!T || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const j = T.private(l.channel);
    for (const W of l.events)
      j.listen(W, (I) => {
        I?.[r] !== void 0 && g(I[r], I);
      });
    u.value = "live", T.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), T.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function q() {
    C && (S()?.leave(C), C = null);
  }
  function N() {
    l.driver === "poll" && v(), l.driver === "broadcast" && B();
  }
  function Y() {
    y(), q(), clearTimeout(m), m = void 0, k = /* @__PURE__ */ new Map();
  }
  function F() {
    l.pauseWhenHidden && (document.hidden ? (Y(), u.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), N(), i?.()));
  }
  return de(() => {
    l.driver !== "none" && (N(), l.pauseWhenHidden && document.addEventListener("visibilitychange", F));
  }), me(() => {
    document.removeEventListener("visibilitychange", F), Y();
  }), { status: u, recentlyChanged: p, applyPatch: g, flush: c, pollOnce: x };
}
const Py = /^[a-z0-9-]+$/, Ay = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function $w(e) {
  ga(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !Py.test(a) || typeof r != "string" || !Ay.test(r) || (l[`--${a}`] = r);
    Ks(l);
  });
}
const jy = { class: "flex items-center gap-0.5" }, Oy = /* @__PURE__ */ P({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", jy, [
      String(e.value) === "mono" ? (t(), n(z, { key: 0 }, [
        a[0] || (a[0] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        a[1] || (a[1] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        a[2] || (a[2] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), n(z, { key: 1 }, [
        a[3] || (a[3] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        a[4] || (a[4] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        a[5] || (a[5] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), Ly = /* @__PURE__ */ P({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), D(aa, {
      code: "AB-1234",
      style: Q(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Vy = { class: "flex flex-col gap-2" }, Dy = { class: "bg-card rounded-lg border p-4" }, Ty = { class: "text-muted-foreground truncate text-xs" }, Ey = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Fy = /* @__PURE__ */ P({
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
    }, r = $(() => ({ ...a, ...l.field.limits ?? {} })), o = $(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = $(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = $(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = $(() => {
      const C = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return C === "" ? d.value : `${d.value} › ${C.split("/").join(" › ")}`;
    });
    function p(C, g) {
      return C.length <= g ? C : `${C.slice(0, g - 1).trimEnd()}…`;
    }
    const k = $(() => p(o.value, r.value.titleMax)), m = $(() => p(i.value, r.value.descriptionMax));
    function h(C, g, c) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > c ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < g ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = $(
      () => h(o.value.length, r.value.titleMin, r.value.titleMax)
    ), w = $(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, g) => (t(), n("div", Vy, [
      s("div", Dy, [
        s("p", Ty, f(u.value), 1),
        s("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", k.value === "" ? "text-muted-foreground italic" : ""])
        }, f(k.value || "Untitled page"), 3),
        s("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", m.value === "" ? "italic" : ""])
        }, f(m.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      s("div", Ey, [
        s("span", {
          class: A(M.value.tone)
        }, " Title " + f(o.value.length) + "/" + f(r.value.titleMax) + " · " + f(M.value.note), 3),
        s("span", {
          class: A(w.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(w.value.note), 3)
      ]),
      g[0] || (g[0] = s("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function Iy() {
  ke("radio", Rd), ke("checkboxlist", Kd), ke("tags", Xd), ke("colour", uu), ke("slider", gu), ke("visual-select", zu), ke("markdown", kd), ke("code", Bd), ke("seo-preview", Fy), lt("swatch", Au), lt("voucher-code-box", Ly), lt("document-colour-mode", Oy);
}
function oa() {
  const e = G(null), l = G(!1);
  let a = null;
  return de(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      l.value = !0;
      return;
    }
    a = new IntersectionObserver(
      (o) => {
        for (const i of o)
          i.isIntersecting && (l.value = !0, a?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), a.observe(e.value);
  }), me(() => a?.disconnect()), { el: e, shown: l };
}
const Ny = /* @__PURE__ */ P({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = oa();
    return (r, o) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: Q({ transitionDelay: `${e.delay}ms` })
    }, [
      H(r.$slots, "default")
    ], 6));
  }
}), Ry = ["id"], ye = /* @__PURE__ */ P({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, a) => (t(), n("section", {
      id: e.id,
      class: A(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      s("div", {
        class: A(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        E(Ny, null, {
          default: O(() => [
            H(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Ry));
  }
}), Uy = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Hy = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, Ky = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, je = /* @__PURE__ */ P({
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
      class: A(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", Uy, f(e.eyebrow), 1)) : _("", !0),
      e.title ? (t(), n("h2", Hy, f(e.title), 1)) : _("", !0),
      e.body ? (t(), n("p", Ky, f(e.body), 1)) : _("", !0)
    ], 2)) : _("", !0);
  }
});
function qy() {
  const e = G(null);
  let l = null;
  function a(o) {
    if (!l)
      return;
    const i = l.getBoundingClientRect();
    l.style.setProperty("--pk-px", String((o.clientX - i.left) / i.width)), l.style.setProperty("--pk-py", String((o.clientY - i.top) / i.height));
  }
  function r() {
    l?.style.setProperty("--pk-px", "0.5"), l?.style.setProperty("--pk-py", "0.5");
  }
  return de(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), me(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const Gy = { class: "pk-tilt-inner relative h-full" }, Wy = /* @__PURE__ */ P({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = qy();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      s("div", Gy, [
        r[0] || (r[0] = s("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        H(a.$slots, "default")
      ])
    ], 512));
  }
}), Zy = { class: "flex flex-col gap-10" }, Jy = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, Yy = { class: "text-base font-semibold" }, Xy = { class: "text-sm text-pretty text-muted-foreground" }, Qy = /* @__PURE__ */ P({
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
    return (a, r) => (t(), D(ye, null, {
      default: O(() => [
        s("div", Zy, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("div", Jy, [
            (t(!0), n(z, null, V(e.items ?? [], (o, i) => (t(), D(Wy, {
              key: i,
              class: A(l(o.span))
            }, {
              default: O(() => [
                s("div", {
                  class: A([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    o.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  s("h3", Yy, f(o.title), 1),
                  s("p", Xy, f(o.body), 1)
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
}), e0 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, t0 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, a0 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, n0 = ["href"], l0 = /* @__PURE__ */ P({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), D(ye, null, {
      default: O(() => [
        s("div", e0, [
          s("h2", t0, f(e.title), 1),
          e.body ? (t(), n("p", a0, f(e.body), 1)) : _("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, n0)) : _("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), s0 = { class: "flex flex-col gap-8" }, o0 = { class: "divide-y rounded-lg border" }, r0 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, i0 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, d0 = /* @__PURE__ */ P({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(ye, { narrow: "" }, {
      default: O(() => [
        s("div", s0, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("div", o0, [
            (t(!0), n(z, null, V(e.items ?? [], (r, o) => (t(), n("details", {
              key: o,
              class: "group"
            }, [
              s("summary", r0, [
                U(f(r.question) + " ", 1),
                a[0] || (a[0] = s("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              s("p", i0, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), u0 = { class: "flex flex-col gap-10" }, c0 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, f0 = { class: "text-sm font-semibold" }, m0 = { class: "text-sm text-pretty text-muted-foreground" }, p0 = /* @__PURE__ */ P({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(ye, null, {
      default: O(() => [
        s("div", u0, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("ul", c0, [
            (t(!0), n(z, null, V(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              s("h3", f0, f(r.title), 1),
              s("p", m0, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), v0 = { class: "flex flex-col items-center gap-6 text-center" }, g0 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, h0 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, b0 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, x0 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, y0 = ["href"], k0 = ["href"], $0 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, w0 = /* @__PURE__ */ P({
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
    return (l, a) => (t(), D(ye, null, {
      default: O(() => [
        s("div", v0, [
          e.eyebrow ? (t(), n("p", g0, f(e.eyebrow), 1)) : _("", !0),
          s("h1", h0, f(e.title), 1),
          e.body ? (t(), n("p", b0, f(e.body), 1)) : _("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", x0, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, y0)) : _("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, k0)) : _("", !0)
          ])) : _("", !0),
          e.note ? (t(), n("p", $0, f(e.note), 1)) : _("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), C0 = { class: "flex flex-col items-center gap-6" }, _0 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, M0 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, S0 = /* @__PURE__ */ P({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(ye, { muted: "" }, {
      default: O(() => [
        s("div", C0, [
          e.title ? (t(), n("p", _0, f(e.title), 1)) : _("", !0),
          s("ul", M0, [
            (t(!0), n(z, null, V(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), B0 = { class: "flex flex-col gap-10" }, z0 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, P0 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, A0 = ["aria-pressed"], j0 = ["aria-pressed"], O0 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, L0 = { class: "grid gap-4 md:grid-cols-3" }, V0 = { class: "flex flex-col gap-1" }, D0 = { class: "text-sm font-semibold" }, T0 = { class: "flex items-baseline gap-1" }, E0 = { class: "text-3xl font-semibold tracking-tight" }, F0 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, I0 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, N0 = { class: "flex flex-col gap-2 text-sm" }, R0 = { class: "text-muted-foreground" }, U0 = ["href"], H0 = /* @__PURE__ */ P({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = G(!1), r = $(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function o(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), D(ye, { muted: "" }, {
      default: O(() => [
        s("div", B0, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", z0, [
            s("div", P0, [
              s("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, A0),
              s("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, j0)
            ]),
            e.annualNote ? (t(), n("p", O0, f(e.annualNote), 1)) : _("", !0)
          ])) : _("", !0),
          s("ul", L0, [
            (t(!0), n(z, null, V(e.items ?? [], (u, p) => (t(), n("li", {
              key: p,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              s("div", V0, [
                s("h3", D0, f(u.name), 1),
                s("p", T0, [
                  s("span", E0, f(o(u)), 1),
                  u.period ? (t(), n("span", F0, f(u.period), 1)) : _("", !0)
                ]),
                u.body ? (t(), n("p", I0, f(u.body), 1)) : _("", !0)
              ]),
              s("ul", N0, [
                (t(!0), n(z, null, V(u.features ?? [], (k, m) => (t(), n("li", {
                  key: m,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = s("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  s("span", R0, f(k.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, U0)) : _("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function K0() {
  const e = G(null);
  let l = null, a = null, r = !1, o = !1;
  function i() {
    if (r = !1, !l || !o)
      return;
    const u = l.getBoundingClientRect(), p = u.height + window.innerHeight, k = p <= 0 ? 0 : (window.innerHeight - u.top) / p;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(k, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return de(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, u || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((p) => {
        o = p.some((k) => k.isIntersecting), o && d();
      }), a.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), me(() => {
    a?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const q0 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, G0 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, W0 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Z0 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, J0 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Y0 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, X0 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, Q0 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, e2 = { class: "ml-3 truncate text-xs text-muted-foreground" }, t2 = { class: "flex" }, a2 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, n2 = { class: "min-w-0 flex-1 p-4" }, l2 = { class: "flex flex-col divide-y rounded-md border" }, s2 = /* @__PURE__ */ P({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = K0();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      s("div", q0, [
        s("div", G0, [
          s("div", W0, [
            s("h2", Z0, f(e.title), 1),
            e.body ? (t(), n("p", J0, f(e.body), 1)) : _("", !0)
          ]),
          s("div", Y0, [
            s("div", X0, [
              s("div", Q0, [
                r[0] || (r[0] = s("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = s("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = s("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                s("span", e2, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              s("div", t2, [
                s("div", a2, [
                  (t(), n(z, null, V(6, (o) => s("span", {
                    key: o,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: Q({ width: `${55 + o * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                s("div", n2, [
                  r[4] || (r[4] = s("div", { class: "mb-3 flex gap-2" }, [
                    s("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    s("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    s("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  s("div", l2, [
                    (t(!0), n(z, null, V(e.rows, (o) => (t(), n("div", {
                      key: o,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: Q({ "--pk-row": String(o) })
                    }, [...r[3] || (r[3] = [
                      s("span", { class: "size-6 shrink-0 rounded-full bg-foreground/10" }, null, -1),
                      s("span", { class: "h-2.5 flex-1 rounded bg-foreground/10" }, null, -1),
                      s("span", { class: "hidden h-2.5 w-24 rounded bg-foreground/[0.07] sm:block" }, null, -1),
                      s("span", { class: "h-5 w-14 rounded-full bg-emerald-500/20" }, null, -1)
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
}), o2 = /* @__PURE__ */ P({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = oa(), o = G(0);
    return re(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        o.value = l.to;
        return;
      }
      const u = performance.now(), p = (k) => {
        const m = Math.min((k - u) / l.duration, 1);
        o.value = l.to * (1 - Math.pow(1 - m, 3)), m < 1 ? requestAnimationFrame(p) : o.value = l.to;
      };
      requestAnimationFrame(p);
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, f(e.prefix ?? "") + f(o.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), r2 = { class: "flex flex-col gap-10" }, i2 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, d2 = { class: "order-2 text-sm text-muted-foreground" }, u2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, c2 = /* @__PURE__ */ P({
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
      const o = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: o };
    }
    return (a, r) => (t(), D(ye, { muted: "" }, {
      default: O(() => [
        s("div", r2, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("dl", i2, [
            (t(!0), n(z, null, V(e.items ?? [], (o, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              s("dt", d2, f(o.label), 1),
              s("dd", u2, [
                l(o.value) ? (t(), D(o2, {
                  key: 0,
                  to: l(o.value).number,
                  prefix: l(o.value).prefix,
                  suffix: l(o.value).suffix,
                  decimals: l(o.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
                  U(f(o.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), f2 = { class: "flex flex-col gap-10" }, m2 = { class: "grid gap-6 md:grid-cols-3" }, p2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, v2 = { class: "text-sm font-semibold" }, g2 = { class: "text-sm text-pretty text-muted-foreground" }, h2 = /* @__PURE__ */ P({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(ye, null, {
      default: O(() => [
        s("div", f2, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("ol", m2, [
            (t(!0), n(z, null, V(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-2"
            }, [
              s("span", p2, f(o + 1), 1),
              s("h3", v2, f(r.title), 1),
              s("p", g2, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), b2 = { class: "flex flex-col gap-10" }, x2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, y2 = { class: "text-pretty text-sm leading-relaxed" }, k2 = { class: "mt-auto flex items-center gap-3" }, $2 = ["src"], w2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, C2 = { class: "min-w-0" }, _2 = { class: "block truncate text-sm font-medium" }, M2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, S2 = /* @__PURE__ */ P({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(ye, null, {
      default: O(() => [
        s("div", b2, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("ul", x2, [
            (t(!0), n(z, null, V(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              s("blockquote", y2, " “" + f(r.quote) + "” ", 1),
              s("figcaption", k2, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, $2)) : (t(), n("span", w2, f((r.name ?? "?").slice(0, 1)), 1)),
                s("span", C2, [
                  s("span", _2, f(r.name), 1),
                  r.role ? (t(), n("span", M2, f(r.role), 1)) : _("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ww = /* @__PURE__ */ P({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: w0,
      logos: S0,
      features: p0,
      bento: Qy,
      showcase: s2,
      steps: h2,
      stats: c2,
      testimonials: S2,
      pricing: H0,
      faq: d0,
      cta: l0
    }, o = $(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(z, null, V(o.value, (u) => (t(), D(Pe(u.component), ee({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), B2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Cw = /* @__PURE__ */ P({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", B2, [
      s("div", {
        class: A([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      s("div", {
        class: A([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      s("div", {
        class: A([
          "pk-blob absolute top-1/3 left-1/4 size-[30rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-40 dark:opacity-30" : "opacity-20 dark:opacity-10"
        ]),
        style: { background: "radial-gradient(circle at 40% 60%, var(--pk-aurora-3), transparent 70%)", "animation-delay": "-14s" }
      }, null, 2),
      a[0] || (a[0] = s("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), z2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, _w = /* @__PURE__ */ P({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", z2, [...a[0] || (a[0] = [
      mt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), P2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Mw = /* @__PURE__ */ P({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", P2, [...a[0] || (a[0] = [
      s("div", {
        class: "absolute inset-0 opacity-[0.18] dark:opacity-[0.14]",
        style: { "background-image": "radial-gradient(currentColor 1px, transparent 1px)", "background-size": "22px 22px", "mask-image": "radial-gradient(ellipse 90% 70% at 50% 0%, black, transparent 80%)" }
      }, null, -1),
      s("div", {
        class: "absolute inset-x-0 top-0 h-[36rem]",
        style: { background: `radial-gradient(
                    ellipse 60% 100% at 50% 0%,
                    var(--pk-console-glow),
                    transparent 70%
                )` }
      }, null, -1),
      s("div", { class: "pk-scanlines absolute inset-0" }, null, -1)
    ])]));
  }
});
Iy();
const Sw = "0.0.1";
export {
  q$ as AdminDirectory,
  Lo as Alert,
  Vo as AlertDescription,
  Do as AlertTitle,
  Q2 as AppearanceDrawer,
  Gk as Avatar,
  Wk as AvatarFallback,
  Zk as AvatarImage,
  kt as BADGE_VARIANTS,
  Z2 as BadgeResolver,
  F$ as BarChart,
  Jk as Breadcrumb,
  Yk as BreadcrumbEllipsis,
  Xk as BreadcrumbItem,
  Qk as BreadcrumbLink,
  e$ as BreadcrumbList,
  t$ as BreadcrumbPage,
  a$ as BreadcrumbSeparator,
  F2 as BulkActions,
  k$ as Card,
  $$ as CardAction,
  w$ as CardContent,
  C$ as CardDescription,
  _$ as CardFooter,
  M$ as CardHeader,
  S$ as CardTitle,
  ow as CartPanel,
  tw as CatalogBrowser,
  uv as CatalogCard,
  Ih as CatalogFilterSheet,
  la as CatalogGrid,
  X$ as CatalogInspect,
  Sh as CatalogItemDetail,
  Q$ as CatalogItemView,
  aw as CatalogRegister,
  Lm as ChartCard,
  yr as Checkbox,
  H2 as CheckboxCell,
  K2 as CodeCell,
  U2 as ColourCell,
  H$ as ComboChart,
  lw as DASHBOARD_HIDDEN_STORAGE_KEY,
  w1 as DASHBOARD_HIDE_KEY,
  sw as DashboardShortcuts,
  Zn as DataTable,
  u$ as Dialog,
  c$ as DialogClose,
  f$ as DialogContent,
  m$ as DialogDescription,
  p$ as DialogFooter,
  v$ as DialogHeader,
  xr as DialogOverlay,
  g$ as DialogScrollContent,
  h$ as DialogTitle,
  b$ as DialogTrigger,
  q$ as DirectoryPage,
  Ok as DropdownMenu,
  Lk as DropdownMenuCheckboxItem,
  Vk as DropdownMenuContent,
  Dk as DropdownMenuGroup,
  Tk as DropdownMenuItem,
  Ek as DropdownMenuLabel,
  Pw as DropdownMenuPortal,
  Fk as DropdownMenuRadioGroup,
  Ik as DropdownMenuRadioItem,
  Nk as DropdownMenuSeparator,
  Rk as DropdownMenuShortcut,
  Uk as DropdownMenuSub,
  Hk as DropdownMenuSubContent,
  Kk as DropdownMenuSubTrigger,
  qk as DropdownMenuTrigger,
  G2 as EditableCell,
  Ke as FormFieldControl,
  K$ as HeatmapChart,
  tt as ICON_PATHS,
  N2 as IconCell,
  R2 as ImageCell,
  bw as InfoNode,
  Ro as JPEG_IMAGE_ERROR,
  q2 as KeyValueCell,
  x$ as Label,
  Zc as LineChart,
  H1 as LineItems,
  Ye as MiniStatCard,
  n$ as NavigationMenu,
  l$ as NavigationMenuContent,
  s$ as NavigationMenuIndicator,
  o$ as NavigationMenuItem,
  r$ as NavigationMenuLink,
  i$ as NavigationMenuList,
  d$ as NavigationMenuTrigger,
  hr as NavigationMenuViewport,
  No as OPAQUE_IMAGE_ERROR,
  xw as PaymentGatewaySettings,
  gy as PaymentGateways,
  I$ as PieChart,
  lk as PkAlertError,
  Cw as PkAuroraBackdrop,
  Re as PkBadge,
  Qy as PkBento,
  ek as PkBottomNav,
  B$ as PkBoundary,
  V$ as PkBuilder,
  ne as PkButton,
  z$ as PkCard,
  Kd as PkCheckboxList,
  aa as PkCodeBox,
  Bd as PkCodeInput,
  uu as PkColourPicker,
  Mw as PkConsoleBackdrop,
  o2 as PkCountUp,
  l0 as PkCta,
  P$ as PkDeviceFrame,
  ic as PkDocument,
  He as PkDropdown,
  _w as PkEditorialBackdrop,
  d0 as PkFaq,
  p0 as PkFeatureGrid,
  he as PkFieldLabel,
  Qt as PkFileUpload,
  Be as PkHeading,
  w0 as PkHero,
  Mi as PkKeyValue,
  ww as PkLandingSections,
  S0 as PkLogoCloud,
  kd as PkMarkdownInput,
  rt as PkModal,
  Ct as PkMultiSelect,
  ak as PkOtpInput,
  pw as PkPasskeyRegister,
  sk as PkPasswordInput,
  H0 as PkPricing,
  O1 as PkQtyStepper,
  us as PkQueryBuilder,
  Rd as PkRadioGroup,
  L$ as PkRepeater,
  Ny as PkReveal,
  Di as PkRichEditor,
  ye as PkSection,
  je as PkSectionHeading,
  s2 as PkShowcase,
  a1 as PkSignaturePad,
  De as PkSkeleton,
  _t as PkSlideover,
  gu as PkSlider,
  tk as PkSpinner,
  c2 as PkStats,
  pe as PkStatusBadge,
  Rr as PkStepIndicator,
  h2 as PkSteps,
  Au as PkSwatchPreview,
  Xd as PkTagsInput,
  S2 as PkTestimonials,
  fe as PkTextInput,
  Wy as PkTiltCard,
  zu as PkVisualSelect,
  Tv as PlanCard,
  Y$ as PlanEditor,
  J$ as PlanGrid,
  U$ as PolarAreaChart,
  R$ as RadarChart,
  J2 as RecordActions,
  vw as RecordForm,
  I2 as RelationPanel,
  Np as STATUS_TONES,
  N$ as ScatterChart,
  Hx as SchemaNode,
  W$ as SegmentedBar,
  dw as SelectionBar,
  fr as Separator,
  iw as SetupChecklist,
  Yt as ShadcnInput,
  Wo as Sheet,
  ok as SheetClose,
  Jo as SheetContent,
  Yo as SheetDescription,
  rk as SheetFooter,
  Xo as SheetHeader,
  Qo as SheetTitle,
  ik as SheetTrigger,
  Qm as ShortcutsWidget,
  dk as Sidebar,
  uk as SidebarContent,
  ck as SidebarFooter,
  fk as SidebarGroup,
  mk as SidebarGroupAction,
  pk as SidebarGroupContent,
  vk as SidebarGroupLabel,
  gk as SidebarHeader,
  hk as SidebarInput,
  bk as SidebarInset,
  xk as SidebarMenu,
  yk as SidebarMenuAction,
  kk as SidebarMenuBadge,
  wk as SidebarMenuButton,
  Ck as SidebarMenuItem,
  _k as SidebarMenuSkeleton,
  Mk as SidebarMenuSub,
  Sk as SidebarMenuSubButton,
  Bk as SidebarMenuSubItem,
  zk as SidebarProvider,
  Pk as SidebarRail,
  Ak as SidebarSeparator,
  jk as SidebarTrigger,
  nw as SignatureStudio,
  et as Sparkline,
  y$ as Spinner,
  G$ as StatCard,
  Z$ as StatListChart,
  rw as StatStrip,
  Le as Switch,
  Xt as TRANSPARENT_IMAGE_HELP,
  uw as TablePagination,
  cw as TableShell,
  fw as TableTabs,
  mw as TableToolbar,
  E$ as ThemeToggle,
  dr as Tooltip,
  ur as TooltipContent,
  $k as TooltipProvider,
  cr as TooltipTrigger,
  na as TrendBadge,
  gw as UnsavedBar,
  To as alertVariants,
  Hs as appearanceVars,
  ct as applyAppearance,
  Go as assertTransparentImage,
  Gt as buttonClasses,
  Dt as catalogFiltersActive,
  J as cn,
  cv as cycleLabel,
  Ve as emptyCatalogFilters,
  Ur as fieldControl,
  ew as findExactSku,
  fv as formatPerkValue,
  xs as hasBadgeValue,
  A$ as hasFieldControl,
  D$ as hasOptionPreview,
  se as iconPath,
  Ko as imageHasTransparency,
  Y2 as initializeAppearance,
  ut as isDark,
  sa as matchCatalogItem,
  br as navigationMenuTriggerStyle,
  hu as optionPreview,
  mv as perkGranted,
  wt as readAppearance,
  Iy as registerBuiltInFieldControls,
  ke as registerFieldControl,
  lt as registerOptionPreview,
  j$ as registeredFieldTypes,
  bu as registeredOptionPreviews,
  O$ as resetFieldControls,
  T$ as resetOptionPreviews,
  X2 as setAppearancePersister,
  mr as sidebarMenuButtonVariants,
  Kp as statusBadgeVariant,
  Hp as statusTone,
  nk as toUrl,
  Jt as useAppearance,
  yw as useColumnVisibility,
  kw as useLiveUpdates,
  qy as usePointer,
  oa as useReveal,
  W2 as useSchemaColumns,
  K0 as useScrollProgress,
  Qe as useSidebar,
  $w as useTenantTheme,
  hw as useUnsavedChanges,
  Sw as version
};
//# sourceMappingURL=index.js.map
