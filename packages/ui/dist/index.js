import './ui.css';
import { defineComponent as z, ref as q, computed as y, openBlock as t, createElementBlock as n, normalizeClass as j, createElementVNode as o, createCommentVNode as _, Fragment as P, renderList as L, createTextVNode as G, toDisplayString as c, withModifiers as ce, createStaticVNode as dt, renderSlot as R, watch as re, nextTick as ke, onBeforeUnmount as fe, createBlock as D, Teleport as Le, createVNode as U, Transition as Se, withCtx as V, onMounted as ue, normalizeStyle as Q, unref as b, resolveDynamicComponent as ze, resolveComponent as ct, withDirectives as se, vModelSelect as Fe, vModelDynamic as na, isRef as la, vModelText as Be, useTemplateRef as oa, mergeProps as ee, normalizeProps as ge, guardReactiveProps as _e, onErrorCaptured as sa, defineAsyncComponent as wt, vShow as we, useSlots as ra, withKeys as ia, useModel as Je, reactive as qe, mergeModels as Pe, createSlots as ua, inject as da, shallowRef as ca, watchEffect as fa } from "vue";
import { AlertCircle as ma, EyeOff as pa, Eye as va, X as ft, PanelLeftOpen as ga, PanelLeftClose as ha, Check as Lt, Circle as ba, ChevronRight as Vt, MoreHorizontal as xa, ChevronDown as ya, Loader2Icon as ka } from "@lucide/vue";
import { cva as mt } from "class-variance-authority";
import { clsx as $a } from "clsx";
import { twMerge as wa } from "tailwind-merge";
import { useVModel as Dt, reactiveOmit as ne, useMediaQuery as _a, useEventListener as Ca, defaultDocument as Ma } from "@vueuse/core";
import { useForwardPropsEmits as de, DialogRoot as Tt, DialogClose as Ve, DialogOverlay as pt, DialogPortal as vt, DialogContent as gt, DialogDescription as Ft, DialogTitle as Et, DialogTrigger as It, createContext as Sa, Primitive as De, TooltipRoot as Ba, TooltipPortal as za, TooltipContent as Pa, TooltipArrow as Aa, TooltipProvider as Nt, TooltipTrigger as ja, Separator as Oa, DropdownMenuRoot as La, DropdownMenuCheckboxItem as Va, DropdownMenuItemIndicator as Rt, DropdownMenuPortal as Da, DropdownMenuContent as Ta, DropdownMenuGroup as Fa, useForwardProps as he, DropdownMenuItem as Ea, DropdownMenuLabel as Ia, DropdownMenuRadioGroup as Na, DropdownMenuRadioItem as Ra, DropdownMenuSeparator as Ha, DropdownMenuSub as Ua, DropdownMenuSubContent as Ka, DropdownMenuSubTrigger as qa, DropdownMenuTrigger as Ga, AvatarRoot as Wa, AvatarFallback as Za, AvatarImage as Ja, NavigationMenuViewport as Ya, NavigationMenuRoot as Xa, NavigationMenuContent as Qa, NavigationMenuIndicator as en, NavigationMenuItem as tn, NavigationMenuLink as an, NavigationMenuList as nn, NavigationMenuTrigger as ln, Label as on, CheckboxRoot as sn, CheckboxIndicator as rn, SwitchRoot as un, SwitchThumb as dn } from "reka-ui";
import { DropdownMenuPortal as w$ } from "reka-ui";
const cn = { class: "w-full border-collapse text-sm" }, fn = { class: "bg-background sticky top-0 z-10" }, mn = { class: "bg-muted/50" }, pn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, vn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, gn = ["checked", "indeterminate"], hn = ["onClick"], bn = {
  key: 0,
  class: "text-xs"
}, xn = {
  key: 1,
  class: "text-xs opacity-40"
}, yn = { key: 1 }, kn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, $n = {
  key: 0,
  class: "bg-muted/40"
}, wn = ["colspan"], _n = { class: "text-muted-foreground/70" }, Cn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Mn = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Sn = {
  key: 1,
  class: "px-3 py-2"
}, Bn = ["checked", "aria-label", "onChange"], zn = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Pn = ["aria-label", "onClick"], An = { class: "text-xs" }, jn = { key: 1 }, On = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Ln = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, Vn = { key: 0 }, Dn = { class: "text-muted-foreground block text-[10px] font-medium" }, Tn = { class: "font-semibold tabular-nums" }, Fn = { key: 1 }, En = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, In = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, Nn = { class: "font-medium" }, Rn = {
  key: 0,
  class: "text-sm"
}, Hn = /* @__PURE__ */ z({
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
    function s(F) {
      const T = a.groupBy ? F[a.groupBy.key] : null;
      return T == null || T === "" ? "None" : String(T);
    }
    const i = q(null), u = q(null);
    function d(F, T) {
      i.value = F, T.dataTransfer?.setData("text/plain", String(F)), T.dataTransfer && (T.dataTransfer.effectAllowed = "move");
    }
    function f() {
      i.value = null, u.value = null;
    }
    function k(F) {
      return i.value === null || u.value !== F ? "" : i.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function m(F, T) {
      i.value !== null && (T.preventDefault(), u.value = F);
    }
    function g(F) {
      const T = i.value;
      if (i.value = null, u.value = null, T === null || T === F)
        return;
      const A = a.rows.map((E) => E[a.rowKey]), [W] = A.splice(T, 1);
      A.splice(F, 0, W), M("reorder", A);
    }
    const M = l;
    function $(F, T) {
      !a.rowClickable || a.reordering || T.button !== 0 || T.metaKey || T.ctrlKey || T.shiftKey || T.altKey || T.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || M("row-click", F);
    }
    const w = q(null), h = y(() => a.columns.filter((F) => !a.hidden?.has(F.key))), v = y(() => a.rows.map((F) => F[a.rowKey])), C = y(
      () => v.value.length > 0 && v.value.every((F) => a.selected?.has(F))
    ), p = y(
      () => !C.value && v.value.some((F) => a.selected?.has(F))
    );
    function x(F) {
      return F.sortKey ?? F.key;
    }
    function S(F) {
      return a.sort === x(F);
    }
    async function B(F, T, A) {
      try {
        await navigator.clipboard.writeText(String(A)), w.value = `${F}-${T.key}`, setTimeout(() => w.value = null, 1200);
      } catch {
      }
    }
    const K = y(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function I(F) {
      return a.summaries?.[F] ?? null;
    }
    function Y(F) {
      const T = a.summaries?.[F], A = a.summaryValues?.[F];
      if (!T)
        return "";
      if (A == null)
        return "-";
      const W = T.divideBy ? A / T.divideBy : A, E = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: T.decimals,
        maximumFractionDigits: T.decimals
      }).format(W);
      return `${T.prefix ?? ""}${E}${T.suffix ?? ""}`;
    }
    return (F, T) => (t(), n("div", {
      class: j(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", cn, [
        o("thead", fn, [
          o("tr", mn, [
            e.reordering ? (t(), n("th", pn)) : _("", !0),
            e.selectable && !e.reordering ? (t(), n("th", vn, [
              o("input", {
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: C.value,
                indeterminate: p.value,
                "aria-label": "Select all rows on this page",
                onChange: T[0] || (T[0] = (A) => M("toggle-page", !C.value))
              }, null, 40, gn)
            ])) : _("", !0),
            (t(!0), n(P, null, L(h.value, (A) => (t(), n("th", {
              key: A.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              A.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (W) => M("sort", x(A))
              }, [
                G(c(A.label) + " ", 1),
                S(A) ? (t(), n("span", bn, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", xn, "↕"))
              ], 8, hn)) : (t(), n("span", yn, c(A.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), n("th", kn, [...T[1] || (T[1] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : _("", !0)
          ])
        ]),
        o("tbody", {
          class: j(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(P, null, L(e.rows, (A, W) => (t(), n(P, {
            key: A[e.rowKey]
          }, [
            e.groupBy && r(W) ? (t(), n("tr", $n, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                o("span", _n, c(e.groupBy.label) + ":", 1),
                G(" " + c(s(A)), 1)
              ], 8, wn)
            ])) : _("", !0),
            o("tr", {
              class: j(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                e.selected?.has(A[e.rowKey]) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                i.value === W ? "opacity-40" : "",
                k(W),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (E) => d(W, E),
              onDragover: (E) => m(W, E),
              onDrop: ce((E) => g(W), ["prevent"]),
              onDragend: f,
              onContextmenu: (E) => M("row-contextmenu", A, E),
              onClick: (E) => $(A, E)
            }, [
              e.reordering ? (t(), n("td", Mn, [...T[2] || (T[2] = [
                dt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-4805f648><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4805f648><circle cx="9" cy="6" r="1.5" data-v-4805f648></circle><circle cx="15" cy="6" r="1.5" data-v-4805f648></circle><circle cx="9" cy="12" r="1.5" data-v-4805f648></circle><circle cx="15" cy="12" r="1.5" data-v-4805f648></circle><circle cx="9" cy="18" r="1.5" data-v-4805f648></circle><circle cx="15" cy="18" r="1.5" data-v-4805f648></circle></svg></span>', 1)
              ])])) : _("", !0),
              e.selectable && !e.reordering ? (t(), n("td", Sn, [
                o("input", {
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  checked: e.selected?.has(A[e.rowKey]),
                  "aria-label": `Select row ${A[e.rowKey]}`,
                  onChange: (E) => M("toggle-row", A[e.rowKey])
                }, null, 40, Bn)
              ])) : _("", !0),
              (t(!0), n(P, null, L(h.value, (E) => (t(), n("td", {
                key: E.key,
                class: j(["px-3 py-2 whitespace-nowrap", E.cellClass])
              }, [
                R(F.$slots, `cell:${E.key}`, {
                  row: A,
                  value: A[E.key],
                  column: E
                }, () => [
                  E.copyable ? (t(), n("span", zn, [
                    G(c(A[E.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${E.label.toLowerCase()}`,
                      onClick: (N) => B(String(A[e.rowKey]), E, A[E.key])
                    }, [
                      o("span", An, c(w.value === `${A[e.rowKey]}-${E.key}` ? "✓" : "⧉"), 1)
                    ], 8, Pn)
                  ])) : (t(), n("span", jn, c(A[E.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              F.$slots.actions ? (t(), n("td", On, [
                R(F.$slots, "actions", { row: A }, void 0, !0)
              ])) : _("", !0)
            ], 42, Cn)
          ], 64))), 128))
        ], 2),
        K.value ? (t(), n("tfoot", Ln, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Vn)) : _("", !0),
            (t(!0), n(P, null, L(e.columns, (A) => (t(), n(P, {
              key: `s-${A.key}`
            }, [
              e.hidden?.has(A.key) ? _("", !0) : (t(), n("td", {
                key: 0,
                class: j(["px-3 py-2 align-top text-sm whitespace-nowrap", A.cellClass])
              }, [
                I(A.key) ? (t(), n(P, { key: 0 }, [
                  o("span", Dn, c(I(A.key).label), 1),
                  o("span", Tn, c(Y(A.key)), 1)
                ], 64)) : _("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), n("td", Fn)) : _("", !0)
          ])
        ])) : _("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", En, [
        T[3] || (T[3] = o("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        R(F.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", In, [
        o("p", Nn, c(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", Rn, c(e.emptyHint), 1)) : _("", !0)
      ])) : _("", !0)
    ], 2));
  }
}), ht = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, Un = /* @__PURE__ */ ht(Hn, [["__scopeId", "data-v-4805f648"]]), Kn = ["aria-label"], qn = { class: "border-b px-5 py-4" }, Gn = { class: "text-base font-semibold" }, Wn = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Zn = { class: "px-5 py-4" }, Jn = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, lt = /* @__PURE__ */ z({
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
    const u = q(!1);
    function d(m) {
      u.value = m.target === m.currentTarget;
    }
    function f(m) {
      u.value && m.target === m.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function k(m) {
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
      const M = g[0], $ = g[g.length - 1];
      m.shiftKey && document.activeElement === M ? (m.preventDefault(), $.focus()) : !m.shiftKey && document.activeElement === $ && (m.preventDefault(), M.focus());
    }
    return re(
      () => a.open,
      (m) => {
        m ? (i = document.activeElement, document.addEventListener("keydown", k), ke(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", k), i?.focus(), i = null);
      }
    ), fe(() => document.removeEventListener("keydown", k)), (m, g) => (t(), D(Le, { to: "body" }, [
      U(Se, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: V(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: d,
            onPointerup: f
          }, [
            o("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
            }, [
              o("div", qn, [
                o("h2", Gn, c(e.title), 1),
                e.description ? (t(), n("p", Wn, c(e.description), 1)) : _("", !0)
              ]),
              o("div", Zn, [
                R(m.$slots, "default")
              ]),
              o("div", Jn, [
                R(m.$slots, "footer")
              ])
            ], 8, Kn)
          ], 32)) : _("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Qe = {
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
function oe(e) {
  return e ? Qe[e] ?? Qe.dot : Qe.dot;
}
const Yn = 160, Ne = /* @__PURE__ */ z({
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
    const a = e, r = q(!1), s = q(null), i = q(null), u = q({ top: 0, left: 0, minWidth: 0 }), d = q(null);
    let f = null;
    function k(x) {
      !a.dismissOnPanelClick || x.target?.closest("input, select, textarea, label, [data-keep-open]") || w();
    }
    async function m() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await ke(), h());
    }
    function g() {
      f = setTimeout(w, 180);
    }
    async function M() {
      d.value = null, r.value = !r.value, r.value && (await ke(), h());
    }
    async function $(x, S) {
      d.value = { x, y: S }, r.value = !0, await ke(), h();
    }
    function w() {
      r.value = !1, d.value = null;
    }
    function h() {
      const x = s.value, S = i.value;
      if (!x || !S)
        return;
      const B = S.getBoundingClientRect(), K = 8, I = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : x.getBoundingClientRect();
      let Y, F;
      if (a.placement === "bottom")
        Y = I.bottom + a.offset, Y + B.height > window.innerHeight - K && I.top - B.height - a.offset > K && (Y = I.top - B.height - a.offset), F = a.align === "end" && !d.value ? I.right - B.width : I.left;
      else {
        Y = I.top;
        const T = a.placement === "right", A = I.right + a.offset + B.width < window.innerWidth - K, W = I.left - a.offset - B.width > K;
        F = (T ? A || !W : !W && A) ? I.right + a.offset : I.left - a.offset - B.width;
      }
      F = Math.min(Math.max(K, F), window.innerWidth - B.width - K), Y = Math.min(Math.max(K, Y), window.innerHeight - B.height - K), u.value = { top: Y, left: F, minWidth: Math.max(I.width, Yn) };
    }
    function v(x) {
      if (!r.value)
        return;
      const S = x.target;
      s.value?.contains(S) || i.value?.contains(S) || (S instanceof Element ? S : S.parentElement)?.closest("[data-pk-overlay]") || w();
    }
    function C(x) {
      x.key === "Escape" && r.value && (x.stopPropagation(), w());
    }
    function p() {
      if (r.value) {
        if (d.value) {
          w();
          return;
        }
        h();
      }
    }
    return ue(() => {
      document.addEventListener("pointerdown", v), document.addEventListener("keydown", C), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p);
    }), fe(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", C), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    }), l({ close: w, openAt: $ }), (x, S) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: S[2] || (S[2] = (B) => e.hoverable && m()),
      onPointerleave: S[3] || (S[3] = (B) => e.hoverable && g())
    }, [
      o("div", { onClick: M }, [
        R(x.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(Le, { to: "body" }, [
        U(Se, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: V(() => [
            r.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: j([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: Q({
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
              onPointerenter: S[0] || (S[0] = (B) => e.hoverable && m()),
              onPointerleave: S[1] || (S[1] = (B) => e.hoverable && g()),
              onClick: k
            }, [
              R(x.$slots, "panel", { close: w })
            ], 38)) : _("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), Xn = ["disabled"], Qn = { class: "py-0.5" }, el = ["disabled", "onClick"], tl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, al = ["d"], nl = ["disabled"], ll = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ol = ["d"], sl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, rl = ["disabled", "onClick"], il = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ul = ["d"], dl = { class: "text-muted-foreground text-sm" }, cl = { class: "text-foreground font-medium tabular-nums" }, fl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, ml = ["disabled"], pl = { class: "text-muted-foreground text-sm" }, vl = { class: "text-foreground font-medium tabular-nums" }, gl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, hl = ["disabled"], O0 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = q(null), i = q(!1), u = y(() => a.allMatching ? a.total : a.count), d = y(() => u.value !== void 0), f = y(() => d.value && u.value === 0), k = y(() => a.actions.filter((C) => !C.destructive)), m = y(() => a.actions.filter((C) => C.destructive)), g = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function M(C) {
      return g[C.color ?? "gray"] ?? g.gray;
    }
    function $(C) {
      if (C.confirmation) {
        s.value = C;
        return;
      }
      r("run", C.key);
    }
    function w() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function h() {
      i.value = !1, r("export");
    }
    const v = (C) => new Intl.NumberFormat().format(C);
    return (C, p) => (t(), n(P, null, [
      U(Ne, null, {
        trigger: V(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...p[5] || (p[5] = [
            G(" Bulk actions ", -1),
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
          ])], 8, Xn)
        ]),
        panel: V(() => [
          o("div", Qn, [
            (t(!0), n(P, null, L(k.value, (x) => (t(), n("button", {
              key: x.key,
              type: "button",
              role: "menuitem",
              class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(x)]),
              disabled: e.busy,
              onClick: (S) => $(x)
            }, [
              (t(), n("svg", tl, [
                o("path", {
                  d: b(oe)(x.icon)
                }, null, 8, al)
              ])),
              G(" " + c(x.label), 1)
            ], 10, el))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: p[0] || (p[0] = (x) => i.value = !0)
            }, [
              (t(), n("svg", ll, [
                o("path", {
                  d: b(oe)("download")
                }, null, 8, ol)
              ])),
              p[6] || (p[6] = G(" Export CSV ", -1))
            ], 8, nl)) : _("", !0),
            m.value.length ? (t(), n("div", sl, [
              (t(!0), n(P, null, L(m.value, (x) => (t(), n("button", {
                key: x.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (S) => $(x)
              }, [
                (t(), n("svg", il, [
                  o("path", {
                    d: b(oe)(x.icon ?? "trash")
                  }, null, 8, ul)
                ])),
                G(" " + c(x.label), 1)
              ], 8, rl))), 128))
            ])) : _("", !0)
          ])
        ]),
        _: 1
      }),
      U(lt, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: p[2] || (p[2] = (x) => s.value = null)
      }, {
        footer: V(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: p[1] || (p[1] = (x) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: j([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || f.value,
            onClick: w
          }, c(s.value?.label), 11, ml)
        ]),
        default: V(() => [
          o("p", dl, [
            p[7] || (p[7] = G(" This will affect ", -1)),
            o("span", cl, [
              d.value ? (t(), n(P, { key: 1 }, [
                G(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(P, { key: 0 }, [
                G("…")
              ], 64))
            ]),
            p[8] || (p[8] = G(" . ", -1))
          ]),
          f.value ? (t(), n("p", fl, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : _("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      U(lt, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: p[4] || (p[4] = (x) => i.value = !1)
      }, {
        footer: V(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: p[3] || (p[3] = (x) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || f.value,
            onClick: h
          }, " Export CSV ", 8, hl)
        ]),
        default: V(() => [
          o("p", pl, [
            p[9] || (p[9] = G(" This will export ", -1)),
            o("span", vl, [
              d.value ? (t(), n(P, { key: 1 }, [
                G(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(P, { key: 0 }, [
                G("…")
              ], 64))
            ]),
            p[10] || (p[10] = G(" . ", -1))
          ]),
          f.value ? (t(), n("p", gl, " Nothing matches the current filters - there is nothing to export. ")) : _("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), bl = { class: "bg-card overflow-hidden rounded-lg border" }, xl = { class: "pk-scroll w-full overflow-x-auto" }, yl = { class: "w-full border-collapse text-sm" }, kl = { class: "bg-muted/40" }, $l = { class: "divide-y" }, wl = { key: 0 }, _l = ["colspan"], Cl = { key: 1 }, Ml = ["colspan"], Sl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Bl = ["disabled"], zl = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, L0 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = y(() => a.columns.filter((u) => u.type !== "image"));
    function i(u, d) {
      return d == null || d === "" ? "-" : u.type === "date" || u.type === "datetime" ? new Date(String(d)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...u.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof d == "number" ? new Intl.NumberFormat().format(d) : String(d);
    }
    return (u, d) => (t(), n("div", bl, [
      o("div", xl, [
        o("table", yl, [
          o("thead", kl, [
            o("tr", null, [
              (t(!0), n(P, null, L(s.value, (f) => (t(), n("th", {
                key: f.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, c(f.label), 1))), 128))
            ])
          ]),
          o("tbody", $l, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", wl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, _l)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", Cl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, c(e.emptyText), 9, Ml)
            ])) : _("", !0),
            (t(!0), n(P, null, L(e.rows, (f, k) => (t(), n("tr", {
              key: f.id ?? k,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(P, null, L(s.value, (m) => (t(), n("td", {
                key: m.key,
                class: j(["px-3 py-2 whitespace-nowrap", [
                  m.mono ? "font-mono text-xs" : "",
                  m.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                R(u.$slots, `cell:${m.key}`, {
                  row: f,
                  value: f[m.key],
                  column: m
                }, () => [
                  G(c(i(m, f[m.key])), 1)
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", Sl, [
        o("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (f) => r("load", e.nextCursor))
        }, c(e.loading ? "Loading…" : "Load more"), 9, Bl)
      ])) : e.capped ? (t(), n("p", zl, " Showing the first " + c(e.rows.length) + ". Open the full list to search or filter the rest. ", 1)) : _("", !0)
    ]));
  }
}), Pl = ["title"], Al = ["aria-label"], jl = ["d"], Ol = { class: "sr-only" }, V0 = /* @__PURE__ */ z({
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
    }, s = y(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = y(() => l.icons[s.value] ?? l.defaultIcon), u = y(() => a[i.value] ?? a.dot), d = y(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), f = y(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (k, m) => (t(), n("span", {
      class: "inline-flex items-center",
      title: f.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: j(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": f.value
      }, [
        o("path", { d: u.value }, null, 8, jl)
      ], 10, Al)),
      o("span", Ol, c(f.value), 1)
    ], 8, Pl));
  }
}), Ll = ["src"], Vl = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, D0 = /* @__PURE__ */ z({
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
    re(
      () => l.src,
      () => a.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = y(() => {
      const u = typeof l.src == "string" ? l.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = y(() => {
      const u = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), n("span", {
      class: j(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (f) => a.value = !0)
      }, null, 40, Ll)) : e.fallback === "initials" ? (t(), n(P, { key: 1 }, [
        G(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Vl, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : _("", !0)
    ], 2));
  }
}), Dl = {
  key: 0,
  class: "text-muted-foreground"
}, Tl = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Fl = {
  key: 0,
  class: "font-mono text-xs"
}, El = {
  key: 1,
  class: "sr-only"
}, T0 = /* @__PURE__ */ z({
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
    return (s, i) => r.value === null ? (t(), n("span", Dl, "-")) : (t(), n("span", Tl, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: Q({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Fl, c(r.value), 1)) : (t(), n("span", El, c(r.value), 1))
    ]));
  }
}), Il = { class: "inline-flex items-center" }, Nl = ["checked", "aria-label"], Rl = { class: "sr-only" }, F0 = /* @__PURE__ */ z({
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
    return (s, i) => (t(), n("span", Il, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Nl),
      o("span", Rl, c(r.value), 1)
    ]));
  }
}), Hl = {
  key: 0,
  class: "text-muted-foreground"
}, Ul = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, E0 = /* @__PURE__ */ z({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", Ul, c(a.value), 1)) : (t(), n("span", Hl, "—"));
  }
}), Kl = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ql = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Gl = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Wl(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Kl, ql[l], Gl[a], e.class].filter(Boolean).join(" ");
}
const le = /* @__PURE__ */ z({
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
      () => Wl({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), D(ze(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: j(a.value)
    }, {
      default: V(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), Zl = { class: "flex items-center gap-2" }, Jl = ["onUpdate:modelValue", "onChange"], Yl = ["value"], Xl = ["onUpdate:modelValue"], Ql = ["value"], eo = ["onUpdate:modelValue"], to = ["onUpdate:modelValue", "multiple"], ao = ["value"], no = ["onUpdate:modelValue", "type"], lo = ["aria-label", "onClick"], oo = { class: "flex items-center gap-2" }, so = /* @__PURE__ */ z({
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
    re(
      () => a.modelValue,
      (p) => {
        i.value = p ? structuredClone(p) : s();
      }
    );
    const u = (p) => "rules" in p, d = y(() => Object.keys(a.fields));
    function f(p) {
      const x = p ? a.fields[p]?.kind : void 0;
      return x ? a.operators[x] ?? [] : [];
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
    function g() {
      const p = d.value[0];
      i.value.rules.push({
        field: p,
        operator: f(p)[0],
        value: void 0
      }), m();
    }
    function M() {
      i.value.rules.push(s()), m();
    }
    function $(p) {
      i.value.rules.splice(p, 1), m();
    }
    function w(p) {
      p.operator = f(p.field)[0], p.value = void 0, m();
    }
    const h = y(() => a.depth + 1 < a.maxDepth);
    function v() {
      i.value = s(), m(), r("apply", null);
    }
    function C() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (p, x) => {
      const S = ct("PkQueryBuilder", !0);
      return t(), n("div", {
        class: j(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Zl, [
          se(o("select", {
            "onUpdate:modelValue": x[0] || (x[0] = (B) => i.value.logic = B),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: m
          }, [...x[1] || (x[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Fe, i.value.logic]
          ]),
          x[2] || (x[2] = o("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(P, null, L(i.value.rules, (B, K) => (t(), n("div", {
          key: K,
          class: "flex items-start gap-2"
        }, [
          u(B) ? (t(), D(S, {
            key: 0,
            modelValue: i.value.rules[K],
            "onUpdate:modelValue": [(I) => i.value.rules[K] = I, m],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(P, { key: 1 }, [
            se(o("select", {
              "onUpdate:modelValue": (I) => B.field = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (I) => w(B)
            }, [
              (t(!0), n(P, null, L(d.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, c(e.fields[I].label), 9, Yl))), 128))
            ], 40, Jl), [
              [Fe, B.field]
            ]),
            se(o("select", {
              "onUpdate:modelValue": (I) => B.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: m
            }, [
              (t(!0), n(P, null, L(f(B.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, c(k[I] ?? I), 9, Ql))), 128))
            ], 40, Xl), [
              [Fe, B.operator]
            ]),
            B.field && e.fields[B.field]?.kind === "boolean" ? se((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (I) => B.value = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [...x[3] || (x[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, eo)), [
              [Fe, B.value]
            ]) : B.field && e.fields[B.field]?.options?.length ? se((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (I) => B.value = I,
              multiple: e.fields[B.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [
              (t(!0), n(P, null, L(e.fields[B.field].options, (I) => (t(), n("option", {
                key: I,
                value: I
              }, c(I), 9, ao))), 128))
            ], 40, to)), [
              [Fe, B.value]
            ]) : se((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (I) => B.value = I,
              type: B.field && e.fields[B.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, null, 40, no)), [
              [na, B.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(B) ? "group" : "rule"}`,
            onClick: (I) => $(K)
          }, " × ", 8, lo)
        ]))), 128)),
        o("div", oo, [
          U(le, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: g
          }, {
            default: V(() => [...x[4] || (x[4] = [
              G("Add rule", -1)
            ])]),
            _: 1
          }),
          h.value ? (t(), D(le, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: V(() => [...x[5] || (x[5] = [
              G(" Add group ", -1)
            ])]),
            _: 1
          })) : _("", !0),
          e.root ? (t(), n(P, { key: 1 }, [
            x[8] || (x[8] = o("span", { class: "flex-1" }, null, -1)),
            U(le, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: V(() => [...x[6] || (x[6] = [
                G(" Clear ", -1)
              ])]),
              _: 1
            }),
            U(le, {
              type: "button",
              size: "sm",
              onClick: C
            }, {
              default: V(() => [...x[7] || (x[7] = [
                G(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : _("", !0)
        ])
      ], 2);
    };
  }
}), ro = {
  key: 0,
  class: "font-mono text-xs"
}, io = {
  key: 1,
  class: "text-muted-foreground"
}, uo = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, I0 = /* @__PURE__ */ z({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", ro, c(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", io, "—")) : (t(), n("span", uo, c(a.value.length) + " " + c(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), co = ["aria-checked", "aria-label", "title", "disabled"], fo = ["value", "disabled"], mo = ["value"], N0 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = y(() => a.value === !0 || a.value === 1 || a.value === "1"), i = y(() => a.busy || a.disabled), u = y(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function d() {
      i.value || r("change", !s.value);
    }
    function f(k) {
      const m = k.target.value;
      m !== String(a.value ?? "") && r("change", m);
    }
    return (k, m) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: j(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ce(d, ["stop"])
    }, [
      o("span", {
        class: j(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, co)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: m[0] || (m[0] = ce(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), n(P, null, L(e.options, (g, M) => (t(), n("option", {
        key: M,
        value: M
      }, c(g), 9, mo))), 128))
    ], 40, fo));
  }
}), po = ["data-variant"], vo = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ie = /* @__PURE__ */ z({
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
      () => [vo, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: j(r.value)
    }, [
      R(s.$slots, "default")
    ], 10, po));
  }
}), bt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function go(e) {
  return e != null && e !== "";
}
function ho(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function R0(e) {
  const l = y(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: ho(s)
    }))
  ), a = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = a.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), f = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return bt[f] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const bo = ["disabled", "aria-label", "aria-busy"], xo = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yo = ["d"], ko = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, $o = ["disabled", "onClick"], wo = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, _o = ["d"], Co = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, H0 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = y(() => a.busy || a.disabled), i = y(() => String(a.value ?? "")), u = y(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function d(g) {
      return typeof g == "boolean" ? g ? "1" : "" : String(g ?? "");
    }
    function f(g) {
      const M = a.colors[d(g)] ?? a.defaultColor ?? "neutral";
      return bt[M] ?? "outline";
    }
    function k(g) {
      return a.options[g] ?? g;
    }
    function m(g, M) {
      if (s.value || g === i.value) {
        M();
        return;
      }
      r("change", g), M();
    }
    return (g, M) => (t(), n("div", {
      onClick: M[0] || (M[0] = ce(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(Ie, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: V(() => [
          G(c(k(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), D(Ne, {
        key: 0,
        align: "start"
      }, {
        trigger: V(() => [
          o("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            U(Ie, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: V(() => [
                G(c(k(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", xo, [
              o("path", {
                d: b(oe)("chevron-down")
              }, null, 8, yo)
            ]))
          ], 8, bo)
        ]),
        panel: V(({ close: $ }) => [
          o("div", ko, c(u.value), 1),
          (t(!0), n(P, null, L(e.options, (w, h) => (t(), n("button", {
            key: h,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (v) => m(String(h), $)
          }, [
            U(Ie, {
              variant: f(h),
              class: "capitalize"
            }, {
              default: V(() => [
                G(c(w), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(h) === i.value ? (t(), n("svg", wo, [
              o("path", {
                d: b(oe)("check")
              }, null, 8, _o)
            ])) : (t(), n("span", Co))
          ], 8, $o))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Mo = { class: "flex items-center justify-end" }, So = ["aria-label"], Bo = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, zo = ["d"], Po = ["href"], Ao = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jo = ["d"], Oo = ["disabled", "onClick"], Lo = ["d"], Vo = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Do = ["disabled", "onClick"], To = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fo = ["d"], U0 = /* @__PURE__ */ z({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = q(null), u = q(null), d = y(() => r.groups.flatMap((v) => v.actions)), f = y(() => d.value.filter((v) => !v.destructive)), k = y(() => d.value.filter((v) => v.destructive)), m = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function g(v) {
      return m[v.color ?? "gray"] ?? m.gray;
    }
    const M = y(() => d.value.length === 0);
    function $(v) {
      s("run", v);
    }
    function w(v) {
      M.value || (v.preventDefault(), i.value?.openAt(v.clientX, v.clientY));
    }
    function h(v) {
      if (v.key !== "ArrowDown" && v.key !== "ArrowUp")
        return;
      const C = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (C.length === 0)
        return;
      v.preventDefault();
      const p = C.indexOf(document.activeElement), x = v.key === "ArrowDown" ? 1 : -1, S = (p + x + C.length) % C.length;
      C[S]?.focus();
    }
    return l({ openContextMenu: w }), (v, C) => (t(), n("div", Mo, [
      M.value ? _("", !0) : (t(), D(Ne, {
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
            (t(), n("svg", Bo, [
              o("path", {
                d: b(oe)("more-vertical")
              }, null, 8, zo)
            ]))
          ], 8, So)
        ]),
        panel: V(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: h
          }, [
            (t(!0), n(P, null, L(f.value, (p) => (t(), n(P, {
              key: p.key
            }, [
              p.link ? (t(), n("a", {
                key: 0,
                href: p.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g(p)])
              }, [
                (t(), n("svg", Ao, [
                  o("path", {
                    d: b(oe)(p.icon)
                  }, null, 8, jo)
                ])),
                G(" " + c(p.label), 1)
              ], 10, Po)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", g(p)]),
                disabled: e.busy === p.key,
                onClick: (x) => $(p)
              }, [
                (t(), n("svg", {
                  class: j(["size-4 shrink-0", e.busy === p.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: b(oe)(p.icon)
                  }, null, 8, Lo)
                ], 2)),
                G(" " + c(p.label), 1)
              ], 10, Oo))
            ], 64))), 128)),
            k.value.length ? (t(), n("div", Vo, [
              (t(!0), n(P, null, L(k.value, (p) => (t(), n("button", {
                key: p.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === p.key,
                onClick: (x) => $(p)
              }, [
                (t(), n("svg", To, [
                  o("path", {
                    d: b(oe)(p.icon ?? "trash")
                  }, null, 8, Fo)
                ])),
                G(" " + c(p.label), 1)
              ], 8, Do))), 128))
            ])) : _("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), ot = {
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
}, st = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, Ge = 12, We = 20, Eo = [0, 0.25, 0.5, 0.75, 1], xt = "alxtexhpanel.appearance", ye = {
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
}, Ce = q({ ...ye });
let _t = !1;
const Io = "alxtexhpanel.appearance.vars";
function rt(e) {
  return e.theme === "dark";
}
const Ct = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function No(e) {
  const l = ot[e.primary] ?? ot.slate, a = st[e.surface] ?? st.neutral, r = a.chroma, s = a.hue, u = rt(e) ? {
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
    "--pk-row-padding": Ct[e.density] ?? Ct.comfortable
  };
}
function yt() {
  if (typeof window > "u")
    return { ...ye };
  try {
    const e = localStorage.getItem(xt);
    if (!e)
      return { ...ye };
    const l = { ...ye, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = ye.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? ye.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < Ge || l.fontSize > We) && (l.fontSize = ye.fontSize), l;
  } catch {
    return { ...ye };
  }
}
function K0(e) {
  const l = yt(), a = e ? { ...l, ...e } : l;
  if (Ce.value = a, it(a), e)
    try {
      localStorage.setItem(xt, JSON.stringify(a));
    } catch {
    }
}
let Ht = null;
function q0(e) {
  Ht = e;
}
let Ut = {};
function Ro(e) {
  if (Ut = e, !(typeof document > "u") && !yt().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function it(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...No(e), ...e.primaryChosen ? {} : Ut };
  l.classList.toggle("dark", rt(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Io,
      JSON.stringify({ dark: rt(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function Kt() {
  function e(r) {
    it(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Ce.value = { ...Ce.value, ...r, ...s };
    try {
      localStorage.setItem(xt, JSON.stringify(Ce.value));
    } catch {
    }
    e(Ce.value), Ht?.({ ...r, ...s });
  }
  function a() {
    l({ ...ye });
  }
  return ue(() => {
    _t || (_t = !0, Ce.value = yt(), it(Ce.value));
  }), {
    appearance: y(() => Ce.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: ot,
    SURFACE_TINTS: st,
    FONT_SIZE_MIN: Ge,
    FONT_SIZE_MAX: We,
    RADIUS_OPTIONS: Eo
  };
}
const Ho = { class: "flex items-center justify-between border-b px-4 py-3" }, Uo = { class: "flex items-center gap-2" }, Ko = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, qo = { class: "flex flex-col gap-2" }, Go = { class: "grid grid-cols-8 gap-2" }, Wo = ["title", "aria-label", "aria-pressed", "onClick"], Zo = { class: "flex flex-col gap-2" }, Jo = { class: "grid grid-cols-8 gap-2" }, Yo = ["title", "aria-label", "aria-pressed", "onClick"], Xo = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Qo = { class: "flex flex-col gap-2" }, es = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ts = ["aria-pressed", "aria-label", "onClick"], as = { class: "text-sm font-semibold" }, ns = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ls = ["onClick"], os = { class: "flex flex-col gap-2" }, ss = { class: "flex items-center justify-between" }, rs = { class: "text-muted-foreground text-xs tabular-nums" }, is = { class: "flex items-center gap-2" }, us = ["disabled"], ds = ["min", "max", "value"], cs = ["disabled"], G0 = /* @__PURE__ */ z({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = Kt(), d = q(!1), f = y(() => l.value.sidebarSide === "right"), k = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], m = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], g = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], M = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], $ = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], w = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function h(v, C) {
      return `oklch(0.72 ${C * 3} ${v})`;
    }
    return (v, C) => (t(), n(P, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: C[0] || (C[0] = (p) => d.value = !0)
      }, [...C[7] || (C[7] = [
        dt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), D(Le, { to: "body" }, [
        U(Se, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: V(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: C[1] || (C[1] = (p) => d.value = !1)
            })) : _("", !0)
          ]),
          _: 1
        }),
        U(Se, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": f.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": f.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: V(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: j(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", f.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", Ho, [
                C[9] || (C[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", Uo, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: C[2] || (C[2] = //@ts-ignore
                    (...p) => b(r) && b(r)(...p))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: C[3] || (C[3] = (p) => d.value = !1)
                  }, [...C[8] || (C[8] = [
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
              o("div", Ko, [
                o("section", qo, [
                  C[11] || (C[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", Go, [
                    (t(!0), n(P, null, L(b(s), (p, x) => (t(), n("button", {
                      key: x,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: Q({ background: p.value }),
                      title: p.label,
                      "aria-label": p.label,
                      "aria-pressed": b(l).primary === x,
                      onClick: (S) => b(a)({ primary: x })
                    }, [
                      b(l).primary === x ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: Q({ color: p.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...C[10] || (C[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : _("", !0)
                    ], 12, Wo))), 128))
                  ])
                ]),
                o("section", Zo, [
                  C[13] || (C[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", Jo, [
                    (t(!0), n(P, null, L(b(i), (p, x) => (t(), n("button", {
                      key: x,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: Q({ background: h(p.hue, p.chroma) }),
                      title: p.label,
                      "aria-label": p.label,
                      "aria-pressed": b(l).surface === x,
                      onClick: (S) => b(a)({ surface: x })
                    }, [
                      b(l).surface === x ? (t(), n("svg", Xo, [...C[12] || (C[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : _("", !0)
                    ], 12, Yo))), 128))
                  ])
                ]),
                o("section", Qo, [
                  C[14] || (C[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", es, [
                    (t(!0), n(P, null, L(b(u), (p) => (t(), n("button", {
                      key: p,
                      type: "button",
                      class: j([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l).radius === p ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": b(l).radius === p,
                      "aria-label": `${p}rem radius`,
                      onClick: (x) => b(a)({ radius: p })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: Q({ borderRadius: `${Math.min(p, 0.5)}rem` })
                      }, null, 4),
                      G(" " + c(p), 1)
                    ], 10, ts))), 128))
                  ])
                ]),
                (t(!0), n(P, null, L([
                  { label: "Color scheme", key: "theme", options: k },
                  { label: "Card style", key: "cardStyle", options: g },
                  { label: "Table density", key: "density", options: m },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: $ },
                  { label: "Menu style", key: "menuStyle", options: w }
                ], (p) => (t(), n("section", {
                  key: p.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", as, c(p.label), 1),
                  o("div", ns, [
                    (t(!0), n(P, null, L(p.options, (x) => (t(), n("button", {
                      key: String(x.value),
                      type: "button",
                      class: j([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l)[p.key] === x.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (S) => b(a)({ [p.key]: x.value })
                    }, c(x.label), 11, ls))), 128))
                  ])
                ]))), 128)),
                o("section", os, [
                  o("div", ss, [
                    C[15] || (C[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", rs, c(b(l).fontSize) + "px", 1)
                  ]),
                  o("div", is, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize <= b(Ge),
                      "aria-label": "Decrease font size",
                      onClick: C[4] || (C[4] = (p) => b(a)({ fontSize: b(l).fontSize - 1 }))
                    }, " − ", 8, us),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(Ge),
                      max: b(We),
                      value: b(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: C[5] || (C[5] = (p) => b(a)({
                        fontSize: Number(p.target.value)
                      }))
                    }, null, 40, ds),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize >= b(We),
                      "aria-label": "Increase font size",
                      onClick: C[6] || (C[6] = (p) => b(a)({ fontSize: b(l).fontSize + 1 }))
                    }, " + ", 8, cs)
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
}), fs = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, ms = { class: "flex items-stretch" }, ps = ["href", "aria-current"], vs = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gs = ["d"], hs = { class: "w-full truncate text-center" }, bs = {
  key: 0,
  class: "flex-1"
}, xs = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ys = ["d"], ks = { class: "w-full truncate text-center" }, et = 5, W0 = /* @__PURE__ */ z({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.items.length <= et ? a.items : a.items.slice(0, et - 1)
    ), i = y(() => a.items.length > et);
    function u(d) {
      return d === "/" ? a.current === "/" : a.current === d || a.current.startsWith(`${d}/`);
    }
    return (d, f) => (t(), n("nav", fs, [
      o("ul", ms, [
        (t(!0), n(P, null, L(s.value, (k) => (t(), n("li", {
          key: k.key,
          class: "flex-1"
        }, [
          o("a", {
            href: k.href,
            class: j([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(k.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(k.href) ? "page" : void 0
          }, [
            (t(), n("svg", vs, [
              o("path", {
                d: b(oe)(k.icon)
              }, null, 8, gs)
            ])),
            o("span", hs, c(k.title), 1)
          ], 10, ps)
        ]))), 128)),
        i.value ? (t(), n("li", bs, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (k) => r("more"))
          }, [
            (t(), n("svg", xs, [
              o("path", {
                d: b(oe)("more-horizontal")
              }, null, 8, ys)
            ])),
            o("span", ks, c(e.moreLabel), 1)
          ])
        ])) : _("", !0)
      ])
    ]));
  }
}), $s = ["value"], ws = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", $e = /* @__PURE__ */ z({
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
      class: j([ws, a.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, $s));
  }
}), _s = ["for"], Z0 = /* @__PURE__ */ z({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, a) => (t(), n("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: j([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      R(l.$slots, "default")
    ], 10, _s));
  }
}), J0 = /* @__PURE__ */ z({
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
      class: j(["size-4 animate-spin", l.$props.class])
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
}), Cs = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Ms = ["id", "name", "value", "disabled", "maxlength"], Ss = ["data-active"], Bs = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Y0 = /* @__PURE__ */ z({
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
    ue(() => {
      a.autofocus && i.value?.focus();
    });
    const u = y(
      () => Array.from({ length: a.length }, (k, m) => a.modelValue[m] ?? "")
    ), d = y(() => Math.min(a.modelValue.length, a.length - 1));
    function f(k) {
      const m = k.target.value;
      r("update:modelValue", m.replace(/\D/g, "").slice(0, a.length));
    }
    return (k, m) => (t(), n("div", Cs, [
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
        onInput: f,
        onFocus: m[0] || (m[0] = (g) => s.value = !0),
        onBlur: m[1] || (m[1] = (g) => s.value = !1)
      }, null, 40, Ms),
      (t(!0), n(P, null, L(u.value, (g, M) => (t(), n("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": s.value && M === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        G(c(g) + " ", 1),
        s.value && M === d.value && g === "" ? (t(), n("div", Bs, [...m[2] || (m[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : _("", !0)
      ], 8, Ss))), 128))
    ]));
  }
}), zs = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Me = /* @__PURE__ */ z({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (l, a) => (t(), n("header", {
      class: j(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: j(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), n("p", zs, c(e.description), 1)) : _("", !0)
    ], 2));
  }
});
function J(...e) {
  return wa($a(e));
}
function X0(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Ps = /* @__PURE__ */ z({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: j(b(J)(b(Os)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), As = /* @__PURE__ */ z({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: j(b(J)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), js = /* @__PURE__ */ z({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: j(b(J)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), Os = mt(
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
), Ls = { class: "list-inside list-disc text-sm" }, Q0 = /* @__PURE__ */ z({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(b(Ps), { variant: "destructive" }, {
      default: V(() => [
        U(b(ma), { class: "size-4" }),
        U(b(js), null, {
          default: V(() => [
            G(c(e.title), 1)
          ]),
          _: 1
        }),
        U(b(As), null, {
          default: V(() => [
            o("ul", Ls, [
              (t(!0), n(P, null, L(a.value, (i, u) => (t(), n("li", { key: u }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), qt = /* @__PURE__ */ z({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Dt(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => se((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => la(s) ? s.value = d : null),
      "data-slot": "input",
      class: j(
        b(J)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Be, b(s)]
    ]);
  }
}), Vs = { class: "relative" }, Ds = ["aria-label"], e2 = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = q(!1), s = oa("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), n("div", Vs, [
      U(b(qt), ee({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: b(J)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: j(
          b(J)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), D(b(pa), {
          key: 0,
          class: "size-4"
        })) : (t(), D(b(va), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Ds)
    ]));
  }
}), Gt = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Ts = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Fs = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Es(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Is(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Ns(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Rs(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = s, r.height = i;
    const u = r.getContext("2d", { willReadFrequently: !0 });
    if (!u)
      return !1;
    u.drawImage(a, 0, 0);
    const { data: d } = u.getImageData(0, 0, s, i);
    for (let f = 3; f < d.length; f += 4)
      if ((d[f] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function Rs(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Hs(e) {
  if (Es(e))
    throw new Error(Fs);
  if (!Is(e))
    throw new Error(Gt);
  if (!await Ns(e))
    throw new Error(Ts);
}
const Us = /* @__PURE__ */ z({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = de(e, l);
    return (i, u) => (t(), D(b(Tt), ee({ "data-slot": "sheet" }, b(s)), {
      default: V((d) => [
        R(i.$slots, "default", ge(_e(d)))
      ]),
      _: 3
    }, 16));
  }
}), t2 = /* @__PURE__ */ z({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Ve), ee({ "data-slot": "sheet-close" }, l), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ks = /* @__PURE__ */ z({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(pt), ee({
      "data-slot": "sheet-overlay",
      class: b(J)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, b(a)), {
      default: V(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qs = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class", "side"), i = de(s, r);
    return (u, d) => (t(), D(b(vt), null, {
      default: V(() => [
        U(Ks),
        U(b(gt), ee({
          "data-slot": "sheet-content",
          class: b(J)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...b(i) }), {
          default: V(() => [
            R(u.$slots, "default"),
            U(b(Ve), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: V(() => [
                U(b(ft), { class: "size-4" }),
                d[0] || (d[0] = o("span", { class: "sr-only" }, "Close", -1))
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
}), Gs = /* @__PURE__ */ z({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(Ft), ee({
      "data-slot": "sheet-description",
      class: b(J)("text-muted-foreground text-sm", l.class)
    }, b(a)), {
      default: V(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a2 = /* @__PURE__ */ z({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: j(b(J)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), Ws = /* @__PURE__ */ z({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: j(b(J)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), Zs = /* @__PURE__ */ z({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(Et), ee({
      "data-slot": "sheet-title",
      class: b(J)("text-foreground font-semibold", l.class)
    }, b(a)), {
      default: V(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n2 = /* @__PURE__ */ z({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(It), ee({ "data-slot": "sheet-trigger" }, l), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mt = "sidebar_state", Js = 3600 * 24 * 7, Ys = "16rem", Xs = "18rem", Qs = "3rem", er = "b", [Ye, tr] = Sa("Sidebar"), ar = { class: "flex h-full w-full flex-col" }, nr = ["data-state", "data-collapsible", "data-variant", "data-side"], lr = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, l2 = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = Ye();
    return (u, d) => e.collapsible === "none" ? (t(), n("div", ee({
      key: 0,
      "data-slot": "sidebar",
      class: b(J)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      R(u.$slots, "default")
    ], 16)) : b(a) ? (t(), D(b(Us), ee({
      key: 1,
      open: b(s)
    }, u.$attrs, { "onUpdate:open": b(i) }), {
      default: V(() => [
        U(b(qs), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: Q({
            "--sidebar-width": b(Xs)
          })
        }, {
          default: V(() => [
            U(Ws, { class: "sr-only" }, {
              default: V(() => [
                U(Zs, null, {
                  default: V(() => [...d[0] || (d[0] = [
                    G("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                U(Gs, null, {
                  default: V(() => [...d[1] || (d[1] = [
                    G("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", ar, [
              R(u.$slots, "default")
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
        class: j(
          b(J)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", ee({
        class: b(J)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        o("div", lr, [
          R(u.$slots, "default")
        ])
      ], 16)
    ], 8, nr));
  }
}), o2 = /* @__PURE__ */ z({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: j(
        b(J)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), s2 = /* @__PURE__ */ z({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: j(b(J)("flex flex-col gap-2 p-2", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), r2 = /* @__PURE__ */ z({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: j(b(J)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), i2 = /* @__PURE__ */ z({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(De), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        b(J)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), u2 = /* @__PURE__ */ z({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: j(b(J)("w-full text-sm", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), d2 = /* @__PURE__ */ z({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(De), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        b(J)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), c2 = /* @__PURE__ */ z({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: j(b(J)("flex flex-col gap-2 p-2", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), f2 = /* @__PURE__ */ z({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(qt), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: j(b(J)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), m2 = /* @__PURE__ */ z({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: j(
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
      R(a.$slots, "default")
    ], 2));
  }
}), p2 = /* @__PURE__ */ z({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: j(b(J)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), v2 = /* @__PURE__ */ z({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(De), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: j(
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
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), g2 = /* @__PURE__ */ z({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: j(
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
      R(a.$slots, "default")
    ], 2));
  }
}), or = /* @__PURE__ */ z({
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
    const s = de(e, l);
    return (i, u) => (t(), D(b(Ba), ee({ "data-slot": "tooltip" }, b(s)), {
      default: V((d) => [
        R(i.$slots, "default", ge(_e(d)))
      ]),
      _: 3
    }, 16));
  }
}), sr = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(za), null, {
      default: V(() => [
        U(b(Pa), ee({ "data-slot": "tooltip-content" }, { ...b(i), ...u.$attrs }, {
          class: b(J)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: V(() => [
            R(u.$slots, "default"),
            U(b(Aa), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), h2 = /* @__PURE__ */ z({
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
    return (a, r) => (t(), D(b(Nt), ge(_e(l)), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rr = /* @__PURE__ */ z({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(ja), ee({ "data-slot": "tooltip-trigger" }, l), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), St = /* @__PURE__ */ z({
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
    return (a, r) => (t(), D(b(De), ee({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: b(J)(b(ur)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), b2 = /* @__PURE__ */ z({
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
    const l = e, { isMobile: a, state: r } = Ye(), s = ne(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), D(b(or), { key: 1 }, {
      default: V(() => [
        U(b(rr), { "as-child": "" }, {
          default: V(() => [
            U(St, ge(_e({ ...b(s), ...i.$attrs })), {
              default: V(() => [
                R(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        U(b(sr), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(a)
        }, {
          default: V(() => [
            typeof e.tooltip == "string" ? (t(), n(P, { key: 0 }, [
              G(c(e.tooltip), 1)
            ], 64)) : (t(), D(ze(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D(St, ge(ee({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: V(() => [
        R(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), x2 = /* @__PURE__ */ z({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: j(b(J)("group/menu-item relative", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), Bt = "animate-pulse rounded-md bg-primary/10", y2 = /* @__PURE__ */ z({
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
      class: j(b(J)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: j(b(J)(Bt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : _("", !0),
      o("div", {
        class: j(b(J)(Bt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: Q({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), k2 = /* @__PURE__ */ z({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: j(
        b(J)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), $2 = /* @__PURE__ */ z({
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
    return (a, r) => (t(), D(b(De), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: j(
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
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), w2 = /* @__PURE__ */ z({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: j(b(J)("group/menu-sub-item relative", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), _2 = /* @__PURE__ */ z({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ma?.cookie.includes(`${Mt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = _a("(max-width: 767px)"), i = q(!1), u = Dt(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(g) {
      u.value = g, document.cookie = `${Mt}=${u.value}; path=/; max-age=${Js}`;
    }
    function f(g) {
      i.value = g;
    }
    function k() {
      return s.value ? f(!i.value) : d(!u.value);
    }
    Ca("keydown", (g) => {
      g.key === er && (g.metaKey || g.ctrlKey) && (g.preventDefault(), k());
    });
    const m = y(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return tr({
      state: m,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: k
    }), (g, M) => (t(), D(b(Nt), { "delay-duration": 0 }, {
      default: V(() => [
        o("div", ee({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(Ys),
            "--sidebar-width-icon": b(Qs)
          },
          class: b(J)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, g.$attrs), [
          R(g.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), C2 = /* @__PURE__ */ z({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = Ye();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: j(
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
      onClick: s[0] || (s[0] = //@ts-ignore
      (...i) => b(a) && b(a)(...i))
    }, [
      R(r.$slots, "default")
    ], 2));
  }
}), ir = /* @__PURE__ */ z({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(Oa), ee({ "data-slot": "separator" }, b(a), {
      class: b(J)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), M2 = /* @__PURE__ */ z({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(ir), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: j(b(J)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), S2 = /* @__PURE__ */ z({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = Ye();
    return (i, u) => (t(), D(le, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: j(b(J)("h-7 w-7", l.class)),
      onClick: b(s)
    }, {
      default: V(() => [
        b(a) || b(r) === "collapsed" ? (t(), D(b(ga), { key: 0 })) : (t(), D(b(ha), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), ur = mt(
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
), B2 = /* @__PURE__ */ z({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = de(e, l);
    return (i, u) => (t(), D(b(La), ee({ "data-slot": "dropdown-menu" }, b(s)), {
      default: V((d) => [
        R(i.$slots, "default", ge(_e(d)))
      ]),
      _: 3
    }, 16));
  }
}), dr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, z2 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(Va), ee({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(J)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: V(() => [
        o("span", dr, [
          U(b(Rt), null, {
            default: V(() => [
              R(u.$slots, "indicator-icon", {}, () => [
                U(b(Lt), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        R(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P2 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(Da), null, {
      default: V(() => [
        U(b(Ta), ee({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(J)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: V(() => [
            R(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), A2 = /* @__PURE__ */ z({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Fa), ee({ "data-slot": "dropdown-menu-group" }, l), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), j2 = /* @__PURE__ */ z({
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
    const l = e, a = ne(l, "inset", "variant", "class"), r = he(a);
    return (s, i) => (t(), D(b(Ea), ee({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, b(r), {
      class: b(J)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: V(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), O2 = /* @__PURE__ */ z({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = ne(l, "class", "inset"), r = he(a);
    return (s, i) => (t(), D(b(Ia), ee({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, b(r), {
      class: b(J)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: V(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), L2 = /* @__PURE__ */ z({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = de(e, l);
    return (i, u) => (t(), D(b(Na), ee({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: V(() => [
        R(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, V2 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(Ra), ee({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(J)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: V(() => [
        o("span", cr, [
          U(b(Rt), null, {
            default: V(() => [
              R(u.$slots, "indicator-icon", {}, () => [
                U(b(ba), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        R(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D2 = /* @__PURE__ */ z({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(Ha), ee({ "data-slot": "dropdown-menu-separator" }, b(a), {
      class: b(J)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), T2 = /* @__PURE__ */ z({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: j(b(J)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), F2 = /* @__PURE__ */ z({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = de(e, l);
    return (i, u) => (t(), D(b(Ua), ee({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: V((d) => [
        R(i.$slots, "default", ge(_e(d)))
      ]),
      _: 3
    }, 16));
  }
}), E2 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(Ka), ee({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(J)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: V(() => [
        R(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I2 = /* @__PURE__ */ z({
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
    const l = e, a = ne(l, "class", "inset"), r = he(a);
    return (s, i) => (t(), D(b(qa), ee({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(J)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: V(() => [
        R(s.$slots, "default"),
        U(b(Vt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), N2 = /* @__PURE__ */ z({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = he(e);
    return (r, s) => (t(), D(b(Ga), ee({ "data-slot": "dropdown-menu-trigger" }, b(a)), {
      default: V(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R2 = /* @__PURE__ */ z({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Wa), {
      "data-slot": "avatar",
      class: j(b(J)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), H2 = /* @__PURE__ */ z({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(Za), ee({ "data-slot": "avatar-fallback" }, b(a), {
      class: b(J)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: V(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U2 = /* @__PURE__ */ z({
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
    return (a, r) => (t(), D(b(Ja), ee({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), K2 = /* @__PURE__ */ z({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: j(l.class)
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), q2 = /* @__PURE__ */ z({
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
      class: j(b(J)("flex size-9 items-center justify-center", l.class))
    }, [
      R(a.$slots, "default", {}, () => [
        U(b(xa), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), G2 = /* @__PURE__ */ z({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: j(b(J)("inline-flex items-center gap-1.5", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), W2 = /* @__PURE__ */ z({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(De), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: j(b(J)("hover:text-foreground transition-colors", l.class))
    }, {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Z2 = /* @__PURE__ */ z({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: j(
        b(J)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), J2 = /* @__PURE__ */ z({
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
      class: j(b(J)("text-foreground font-normal", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), Y2 = /* @__PURE__ */ z({
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
      class: j(b(J)("[&>svg]:size-3.5", l.class))
    }, [
      R(a.$slots, "default", {}, () => [
        U(b(Vt))
      ])
    ], 2));
  }
}), fr = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, mr = /* @__PURE__ */ z({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class"), r = he(a);
    return (s, i) => (t(), n("div", fr, [
      U(b(Ya), ee({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(J)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), X2 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class", "viewport"), i = de(s, r);
    return (u, d) => (t(), D(b(Xa), ee({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(J)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: V((f) => [
        R(u.$slots, "default", ge(_e(f))),
        e.viewport ? (t(), D(mr, { key: 0 })) : _("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), Q2 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(Qa), ee({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(J)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: V(() => [
        R(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ek = /* @__PURE__ */ z({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class"), r = he(a);
    return (s, i) => (t(), D(b(en), ee({ "data-slot": "navigation-menu-indicator" }, b(r), {
      class: b(J)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        l.class
      )
    }), {
      default: V(() => [...i[0] || (i[0] = [
        o("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), tk = /* @__PURE__ */ z({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(tn), ee({ "data-slot": "navigation-menu-item" }, b(a), {
      class: b(J)("relative", l.class)
    }), {
      default: V(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ak = /* @__PURE__ */ z({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(an), ee({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(J)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: V(() => [
        R(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nk = /* @__PURE__ */ z({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class"), r = he(a);
    return (s, i) => (t(), D(b(nn), ee({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(J)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: V(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lk = /* @__PURE__ */ z({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class"), r = he(a);
    return (s, i) => (t(), D(b(ln), ee({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(J)(b(pr)(), "group", l.class)
    }), {
      default: V(() => [
        R(s.$slots, "default"),
        U(b(ya), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pr = mt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), ok = /* @__PURE__ */ z({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = de(e, l);
    return (i, u) => (t(), D(b(Tt), ee({ "data-slot": "dialog" }, b(s)), {
      default: V((d) => [
        R(i.$slots, "default", ge(_e(d)))
      ]),
      _: 3
    }, 16));
  }
}), sk = /* @__PURE__ */ z({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(Ve), ee({ "data-slot": "dialog-close" }, l), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vr = /* @__PURE__ */ z({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(pt), ee({ "data-slot": "dialog-overlay" }, b(a), {
      class: b(J)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: V(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rk = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(vt), null, {
      default: V(() => [
        U(vr),
        U(b(gt), ee({ "data-slot": "dialog-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(J)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: V(() => [
            R(u.$slots, "default"),
            e.showCloseButton ? (t(), D(b(Ve), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: V(() => [
                U(b(ft)),
                d[0] || (d[0] = o("span", { class: "sr-only" }, "Close", -1))
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
}), ik = /* @__PURE__ */ z({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class"), r = he(a);
    return (s, i) => (t(), D(b(Ft), ee({ "data-slot": "dialog-description" }, b(r), {
      class: b(J)("text-muted-foreground text-sm", l.class)
    }), {
      default: V(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uk = /* @__PURE__ */ z({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: j(b(J)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      R(a.$slots, "default"),
      e.showCloseButton ? (t(), D(b(Ve), {
        key: 0,
        "as-child": ""
      }, {
        default: V(() => [
          U(le, { variant: "outline" }, {
            default: V(() => [...r[0] || (r[0] = [
              G(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : _("", !0)
    ], 2));
  }
}), dk = /* @__PURE__ */ z({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: j(b(J)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), ck = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(vt), null, {
      default: V(() => [
        U(b(pt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: V(() => [
            U(b(gt), ee({
              class: b(J)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...b(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (f) => {
                const k = f.detail.originalEvent, m = k.target;
                (k.offsetX > m.clientWidth || k.offsetY > m.clientHeight) && f.preventDefault();
              })
            }), {
              default: V(() => [
                R(u.$slots, "default"),
                U(b(Ve), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: V(() => [
                    U(b(ft), { class: "w-4 h-4" }),
                    d[1] || (d[1] = o("span", { class: "sr-only" }, "Close", -1))
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
}), fk = /* @__PURE__ */ z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class"), r = he(a);
    return (s, i) => (t(), D(b(Et), ee({ "data-slot": "dialog-title" }, b(r), {
      class: b(J)("text-lg leading-none font-semibold", l.class)
    }), {
      default: V(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mk = /* @__PURE__ */ z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(It), ee({ "data-slot": "dialog-trigger" }, l), {
      default: V(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pk = /* @__PURE__ */ z({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ne(l, "class");
    return (r, s) => (t(), D(b(on), ee({ "data-slot": "label" }, b(a), {
      class: b(J)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: V(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vk = /* @__PURE__ */ z({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(b(ka), {
      role: "status",
      "aria-label": "Loading",
      class: j(b(J)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), gk = /* @__PURE__ */ z({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: j(
        b(J)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), hk = /* @__PURE__ */ z({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: j(b(J)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), bk = /* @__PURE__ */ z({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: j(b(J)("px-6", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), xk = /* @__PURE__ */ z({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: j(b(J)("text-muted-foreground text-sm", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), yk = /* @__PURE__ */ z({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: j(b(J)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), kk = /* @__PURE__ */ z({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: j(
        b(J)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), $k = /* @__PURE__ */ z({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: j(b(J)("leading-none font-semibold", l.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), gr = /* @__PURE__ */ z({
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
    const a = e, r = l, s = ne(a, "class"), i = de(s, r);
    return (u, d) => (t(), D(b(sn), ee({ "data-slot": "checkbox" }, b(i), {
      class: b(J)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: V((f) => [
        U(b(rn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: V(() => [
            R(u.$slots, "default", ge(_e(f)), () => [
              U(b(Lt), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hr = /* @__PURE__ */ z({
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
    const a = e, r = l, s = de(ne(a, "class"), r);
    return (i, u) => (t(), D(b(un), ee({ "data-slot": "switch" }, b(s), {
      class: b(J)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: V(() => [
        U(b(dn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), br = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, xr = { class: "flex items-start gap-3" }, yr = { class: "min-w-0 flex-1" }, kr = { class: "text-foreground text-sm font-medium" }, $r = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, wk = /* @__PURE__ */ z({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = q(!1), u = q(null), d = q(0);
    sa((k) => (console.error(`[PkBoundary] ${r.label} failed to render`, k), i.value = !0, u.value = k instanceof Error ? k.message : null, s("error", k), !1));
    function f() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: f }), (k, m) => (t(), n("div", {
      class: j(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", br, [
        o("div", xr, [
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
          o("div", yr, [
            o("p", kr, c(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", $r, c(u.value), 1)) : _("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: f
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
              G(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? _("", !0) : R(k.$slots, "default", { key: d.value })
    ], 2));
  }
}), wr = { class: "bg-card rounded-lg border" }, _r = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Cr = { class: "min-w-0" }, Mr = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Sr = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Br = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, zr = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, _k = /* @__PURE__ */ z({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", wr, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", _r, [
        o("div", Cr, [
          R(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Mr, c(e.title), 1)) : _("", !0),
            e.description ? (t(), n("p", Sr, c(e.description), 1)) : _("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Br, [
          R(l.$slots, "actions")
        ])) : _("", !0)
      ])) : _("", !0),
      o("div", {
        class: j(e.padded ? "p-4" : "")
      }, [
        R(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", zr, [
        R(l.$slots, "footer")
      ])) : _("", !0)
    ]));
  }
}), Pr = { class: "flex shrink-0 flex-col items-center" }, Ar = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, Ck = /* @__PURE__ */ z({
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
    return (i, u) => (t(), n("div", Pr, [
      o("div", {
        class: j(["relative box-content shadow-2xl", r.value]),
        style: Q({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Ar)) : _("", !0),
        o("div", {
          class: j(["size-full overflow-hidden bg-white", s.value])
        }, [
          R(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(P, { key: 0 }, [
        o("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: Q({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        o("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: Q({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : _("", !0)
    ]));
  }
}), jr = { class: "flex items-center gap-2 overflow-x-auto" }, Or = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vr = { class: "flex flex-col" }, Dr = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Tr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Fr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Er = /* @__PURE__ */ z({
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
    function s(f) {
      return a.failedStep !== null && f === a.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : a.failedStep !== null && f > a.failedStep ? "" : f < a.activeStep ? "bg-primary text-primary-foreground border-primary" : f === a.activeStep ? "border-primary text-primary" : "";
    }
    function i(f) {
      if (a.failedStep !== null) {
        if (f === a.failedStep)
          return "text-destructive font-medium";
        if (f > a.failedStep)
          return "text-muted-foreground/60";
      }
      return f === a.activeStep ? "text-foreground font-medium" : f < a.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function u(f) {
      return a.failedStep !== null ? f < a.failedStep : f < a.activeStep;
    }
    function d(f) {
      return a.failedStep === f;
    }
    return (f, k) => (t(), n("ol", jr, [
      (t(!0), n(P, null, L(e.steps, (m, g) => (t(), n("li", {
        key: g,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(ze(e.interactive ? "button" : "div"), ee({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(g)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: g > e.activeStep } : {}, {
          onClick: (M) => e.interactive && g <= e.activeStep && r("update:activeStep", g)
        }), {
          default: V(() => [
            o("span", {
              class: j(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(g)])
            }, [
              d(g) ? (t(), n("svg", Or, [...k[0] || (k[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(g) ? (t(), n("svg", Lr, [...k[1] || (k[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(P, { key: 2 }, [
                G(c(g + 1), 1)
              ], 64))
            ], 2),
            o("span", Vr, [
              o("span", null, c(m.label), 1),
              m.description ? (t(), n("span", Dr, c(m.description), 1)) : _("", !0)
            ]),
            e.hasError(g) ? (t(), n("span", Tr)) : _("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        g < e.steps.length - 1 ? (t(), n("span", Fr)) : _("", !0)
      ]))), 128))
    ]));
  }
}), He = /* @__PURE__ */ new Map();
function xe(e, l) {
  He.set(e, l);
}
function Ir(e) {
  return He.get(e);
}
function Mk(e) {
  return He.has(e);
}
function Sk() {
  return [...He.keys()].sort();
}
function Bk() {
  He.clear();
}
const Nr = ["aria-expanded"], Rr = ["aria-label", "onClick"], Hr = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Ur = { class: "ml-auto flex shrink-0 items-center gap-1" }, Kr = {
  key: 0,
  class: "border-b p-1"
}, qr = ["placeholder"], Gr = { class: "max-h-60 overflow-y-auto p-1" }, Wr = ["aria-selected", "onMouseenter", "onClick"], Zr = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Wt = /* @__PURE__ */ z({
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
    const a = e, r = l, s = q(null), i = q(null), u = q(null), d = q(!1), f = q(""), k = q(0), m = q({ top: 0, left: 0, width: 0 }), g = y(
      () => a.modelValue.map(
        (F) => a.options.find((T) => T.value === F) ?? {
          value: F,
          label: String(F)
        }
      ).filter(Boolean)
    ), M = y(() => a.searchable ?? a.options.length > 6), $ = y(() => {
      const F = new Set(a.modelValue), T = f.value.trim().toLowerCase();
      return a.options.filter((A) => !F.has(A.value)).filter((A) => T ? A.label.toLowerCase().includes(T) : !0);
    }), w = y(() => a.max !== null && a.modelValue.length >= a.max);
    function h() {
      const F = s.value, T = i.value;
      if (!F || !T)
        return;
      const A = F.getBoundingClientRect(), W = T.getBoundingClientRect(), E = 8;
      let N = A.bottom + 4;
      N + W.height > window.innerHeight - E && A.top - W.height - 4 > E && (N = A.top - W.height - 4), m.value = {
        top: N,
        left: Math.min(Math.max(E, A.left), window.innerWidth - A.width - E),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: A.width
      };
    }
    async function v() {
      a.disabled || d.value || (d.value = !0, f.value = "", k.value = 0, await ke(), h(), u.value?.focus());
    }
    function C() {
      d.value = !1, f.value = "";
    }
    function p() {
      d.value ? C() : v();
    }
    function x(F) {
      w.value || (r("update:modelValue", [...a.modelValue, F.value]), f.value = "", k.value = 0, ke(() => {
        h(), u.value?.focus();
      }));
    }
    function S(F) {
      r(
        "update:modelValue",
        a.modelValue.filter((T) => T !== F)
      ), ke(h);
    }
    function B() {
      r("update:modelValue", []), ke(h);
    }
    function K(F) {
      if (!a.disabled) {
        if (F.key === "Escape" && d.value) {
          F.stopPropagation(), C();
          return;
        }
        if (F.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          S(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (F.key === "ArrowDown" || F.key === "Enter")) {
          F.preventDefault(), v();
          return;
        }
        if (d.value) {
          if (F.key === "ArrowDown")
            F.preventDefault(), k.value = Math.min(k.value + 1, $.value.length - 1);
          else if (F.key === "ArrowUp")
            F.preventDefault(), k.value = Math.max(k.value - 1, 0);
          else if (F.key === "Enter") {
            F.preventDefault();
            const T = $.value[k.value];
            T && x(T);
          }
        }
      }
    }
    function I(F) {
      if (!d.value)
        return;
      const T = F.target;
      s.value?.contains(T) || i.value?.contains(T) || C();
    }
    function Y() {
      d.value && h();
    }
    return re($, (F) => {
      k.value > F.length - 1 && (k.value = Math.max(0, F.length - 1));
    }), ue(() => {
      document.addEventListener("pointerdown", I), window.addEventListener("scroll", Y, !0), window.addEventListener("resize", Y);
    }), fe(() => {
      document.removeEventListener("pointerdown", I), window.removeEventListener("scroll", Y, !0), window.removeEventListener("resize", Y);
    }), (F, T) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: K
    }, [
      o("div", {
        class: j(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: p
      }, [
        (t(!0), n(P, null, L(g.value, (A) => (t(), n("span", {
          key: A.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          G(c(A.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${A.label}`,
            onClick: ce((W) => S(A.value), ["stop"])
          }, [...T[1] || (T[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Rr)
        ]))), 128)),
        g.value.length === 0 ? (t(), n("span", Hr, c(e.placeholder), 1)) : _("", !0),
        o("span", Ur, [
          g.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ce(B, ["stop"])
          }, " Clear ")) : _("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: j(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...T[2] || (T[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Nr),
      (t(), D(Le, { to: "body" }, [
        U(Se, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: V(() => [
            d.value ? (t(), n("div", {
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
              M.value ? (t(), n("div", Kr, [
                se(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": T[0] || (T[0] = (A) => f.value = A),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: K
                }, null, 40, qr), [
                  [Be, f.value]
                ])
              ])) : _("", !0),
              o("div", Gr, [
                (t(!0), n(P, null, L($.value, (A, W) => (t(), n("button", {
                  key: A.value,
                  type: "button",
                  class: j(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", W === k.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": W === k.value,
                  onMouseenter: (E) => k.value = W,
                  onClick: (E) => x(A)
                }, c(A.label), 43, Wr))), 128)),
                $.value.length === 0 ? (t(), n("p", Zr, [
                  w.value ? (t(), n(P, { key: 0 }, [
                    G("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(P, { key: 1 }, [
                    G("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), n(P, { key: 2 }, [
                    G("Everything is selected.")
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
}), Jr = ["accept", "disabled"], Yr = { class: "text-sm font-medium" }, Xr = { key: 0 }, Qr = { key: 1 }, ei = { class: "text-muted-foreground text-xs" }, ti = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ai = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, ni = ["src"], li = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, oi = { class: "min-w-0 flex-1" }, si = { class: "block truncate text-sm font-medium" }, ri = { class: "text-muted-foreground text-xs" }, ii = ["href"], ui = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, Zt = /* @__PURE__ */ z({
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
    const a = e, r = l, s = q(null), i = q(!1), u = q(null), d = q(null), f = q(null), k = y(() => a.accept.map((x) => `.${x}`).join(",")), m = y(() => f.value ?? a.modelValue?.url ?? null), g = y(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(a.maxKilobytes * 1024)}`);
    function M(x) {
      if (!x)
        return "";
      const S = ["B", "KB", "MB", "GB"];
      let B = x, K = 0;
      for (; B >= 1024 && K < S.length - 1; )
        B /= 1024, K++;
      return `${B.toFixed(B < 10 && K > 0 ? 1 : 0)} ${S[K]}`;
    }
    function $(x) {
      return x.split(".").pop()?.toLowerCase() ?? "";
    }
    function w(x) {
      return a.accept.length && !a.accept.includes($(x.name)) ? `${$(x.name).toUpperCase() || "That"} files are not accepted here.` : x.size > a.maxKilobytes * 1024 ? `That file is ${M(x.size)}; the limit is ${M(a.maxKilobytes * 1024)}.` : null;
    }
    async function h(x) {
      const S = x?.[0];
      if (!(!S || a.disabled) && (d.value = w(S), !d.value)) {
        v(), a.image && S.type.startsWith("image/") && (f.value = URL.createObjectURL(S)), u.value = 0;
        try {
          const B = await a.upload(S, (K) => {
            u.value = K;
          });
          r("update:modelValue", B);
        } catch (B) {
          d.value = B instanceof Error ? B.message : "The upload failed.", v();
        } finally {
          u.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function v() {
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function C() {
      const x = a.modelValue;
      v(), d.value = null, r("update:modelValue", null), x && !x.url && a.discard && await a.discard(x.value).catch(() => {
      });
    }
    function p(x) {
      i.value = !1, h(x.dataTransfer?.files ?? null);
    }
    return (x, S) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", ai, [
        e.image && m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ni)) : (t(), n("span", li, c($(e.modelValue.name) || "file"), 1)),
        o("span", oi, [
          o("span", si, c(e.modelValue.name), 1),
          o("span", ri, [
            G(c(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(P, { key: 0 }, [
              S[4] || (S[4] = G(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, ii)
            ], 64)) : (t(), n(P, { key: 1 }, [
              G(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? _("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: C
        }, [...S[5] || (S[5] = [
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
        class: j(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: S[1] || (S[1] = ce((B) => i.value = !0, ["prevent"])),
        onDragleave: S[2] || (S[2] = ce((B) => i.value = !1, ["prevent"])),
        onDrop: ce(p, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: k.value,
          disabled: e.disabled,
          onChange: S[0] || (S[0] = (B) => h(B.target.files))
        }, null, 40, Jr),
        S[3] || (S[3] = o("svg", {
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
        o("span", Yr, [
          u.value === null ? (t(), n("span", Xr, "Drop a file or click to choose")) : (t(), n("span", Qr, "Uploading…"))
        ]),
        o("span", ei, c(g.value), 1),
        u.value !== null ? (t(), n("span", ti, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: Q({ width: `${u.value}%` })
          }, null, 4)
        ])) : _("", !0)
      ], 34)),
      d.value ? (t(), n("p", ui, c(d.value), 1)) : _("", !0)
    ]));
  }
}), di = { class: "flex flex-col gap-2" }, ci = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, fi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, mi = { class: "flex flex-col gap-1" }, pi = ["onUpdate:modelValue", "disabled", "aria-label"], vi = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, gi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, hi = ["onUpdate:modelValue", "disabled", "aria-label"], bi = ["disabled", "aria-label", "onClick"], xi = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, yi = { class: "flex items-center gap-3" }, ki = ["disabled"], $i = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, wi = /* @__PURE__ */ z({
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
    const u = q(d(a.modelValue));
    function d(h) {
      return h ? Object.entries(h).map(([v, C]) => ({
        uid: i++,
        key: v,
        value: C ?? ""
      })) : [];
    }
    re(
      () => a.modelValue,
      (h) => {
        JSON.stringify(h ?? null) !== JSON.stringify(f()) && (u.value = d(h));
      }
    );
    function f() {
      const h = {};
      for (const v of u.value) {
        const C = v.key.trim();
        C !== "" && (h[C] = v.value);
      }
      return Object.keys(h).length ? h : null;
    }
    function k() {
      r("update:modelValue", f());
    }
    const m = y(() => {
      const h = /* @__PURE__ */ new Map();
      for (const v of u.value) {
        const C = v.key.trim();
        C !== "" && h.set(C, (h.get(C) ?? 0) + 1);
      }
      return new Set([...h.entries()].filter(([, v]) => v > 1).map(([v]) => v));
    }), g = y(
      () => new Set(
        u.value.map((h) => h.key.trim()).filter((h) => h !== "" && !s.test(h))
      )
    ), M = y(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function $() {
      M.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function w(h) {
      u.value = u.value.filter((v) => v.uid !== h), k();
    }
    return (h, v) => (t(), n("div", di, [
      u.value.length ? (t(), n("div", ci, [
        o("div", fi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          v[0] || (v[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(P, null, L(u.value, (C) => (t(), n("div", {
          key: C.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", mi, [
            se(o("input", {
              "onUpdate:modelValue": (p) => C.key = p,
              type: "text",
              class: j([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                m.value.has(C.key.trim()) || g.value.has(C.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: k
            }, null, 42, pi), [
              [Be, C.key]
            ]),
            g.value.has(C.key.trim()) ? (t(), n("p", vi, " Letters, numbers, underscores and dashes only. ")) : m.value.has(C.key.trim()) ? (t(), n("p", gi, " Used twice - only the last value will be saved. ")) : _("", !0)
          ]),
          se(o("input", {
            "onUpdate:modelValue": (p) => C.value = p,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: k
          }, null, 40, hi), [
            [Be, C.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${C.key || "this entry"}`,
            onClick: (p) => w(C.uid)
          }, [...v[1] || (v[1] = [
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
          ])], 8, bi)
        ]))), 128))
      ])) : (t(), n("p", xi, " Nothing here yet. ")),
      o("div", yi, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || M.value,
          onClick: $
        }, [
          v[2] || (v[2] = o("svg", {
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
          G(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, ki),
        e.maxPairs !== null ? (t(), n("p", $i, c(u.value.length) + " of " + c(e.maxPairs), 1)) : _("", !0)
      ])
    ]));
  }
}), _i = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Ci = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Mi = ["disabled", "title", "aria-label", "onClick"], Si = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bi = ["d"], zi = ["disabled"], Pi = ["contenteditable", "data-placeholder"], Ai = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, ji = /* @__PURE__ */ z({
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
    ], d = y(() => u.filter((w) => a.toolbar.includes(w.id))), f = y(() => a.toolbar.includes("link")), k = q(0);
    function m() {
      const w = s.value?.innerHTML ?? "", h = (s.value?.innerText ?? "").trim();
      k.value = h.length;
      const v = h === "" ? null : w;
      i = v, r("update:modelValue", v);
    }
    function g(w) {
      a.disabled || (s.value?.focus(), document.execCommand(w.command, !1, w.argument), m());
    }
    function M() {
      if (a.disabled)
        return;
      const w = window.prompt("Link address");
      w && (s.value?.focus(), document.execCommand("createLink", !1, w), m());
    }
    function $(w) {
      w.preventDefault();
      const h = w.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, h), m();
    }
    return ue(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", k.value = s.value.innerText.trim().length);
    }), re(
      () => a.modelValue,
      (w) => {
        w !== i && s.value && (s.value.innerHTML = w ?? "", k.value = s.value.innerText.trim().length);
      }
    ), (w, h) => (t(), n("div", _i, [
      o("div", Ci, [
        (t(!0), n(P, null, L(d.value, (v) => (t(), n("button", {
          key: v.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: v.label,
          "aria-label": v.label,
          onMousedown: h[0] || (h[0] = ce(() => {
          }, ["prevent"])),
          onClick: (C) => g(v)
        }, [
          (t(), n("svg", Si, [
            o("path", {
              d: v.path
            }, null, 8, Bi)
          ]))
        ], 40, Mi))), 128)),
        f.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: h[1] || (h[1] = ce(() => {
          }, ["prevent"])),
          onClick: M
        }, [...h[2] || (h[2] = [
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
        ])], 40, zi)) : _("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: j(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: m,
        onBlur: m,
        onPaste: $
      }, null, 42, Pi),
      e.maxLength !== null ? (t(), n("div", Ai, c(k.value) + " / " + c(e.maxLength), 1)) : _("", !0)
    ]));
  }
}), Oi = /* @__PURE__ */ ht(ji, [["__scopeId", "data-v-32c63bc7"]]), Li = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, Vi = ["for"], Di = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Ti = {
  key: 7,
  class: "relative"
}, Fi = ["disabled", "aria-invalid"], Ei = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ii = { class: "max-h-56 overflow-y-auto p-1" }, Ni = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ri = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Hi = ["onClick"], Ui = ["id", "value", "disabled", "aria-invalid"], Ki = ["value"], qi = {
  key: 9,
  class: "flex items-center gap-2 text-sm"
}, Gi = { class: "text-muted-foreground" }, Wi = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Zi = { class: "text-muted-foreground" }, Ji = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Yi = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Xi = {
  key: 13,
  class: "flex flex-wrap gap-1.5"
}, Qi = ["disabled", "aria-pressed", "onClick"], eu = {
  key: 14,
  class: "flex flex-wrap gap-1.5"
}, tu = ["title", "disabled", "onClick"], au = {
  key: 15,
  class: "text-destructive text-xs",
  role: "alert"
}, nu = {
  key: 16,
  class: "text-muted-foreground text-xs"
}, Re = /* @__PURE__ */ z({
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
    const a = wt(() => import("./PkRepeater-J84jGe3T.js")), r = wt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = q(!1), d = q(""), f = q([]), k = q(!1), m = q(null);
    let g;
    re(d, (C) => {
      s.searchOptions && (clearTimeout(g), k.value = !0, g = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(C);
        } catch {
        } finally {
          k.value = !1;
        }
      }, 200));
    });
    async function M() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, f.value.length === 0 && s.searchOptions)) {
        k.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          k.value = !1;
        }
      }
    }
    function $(C) {
      m.value = C.label, i("change", C.value), u.value = !1, d.value = "";
    }
    function w() {
      m.value = null, i("change", null);
    }
    fe(() => clearTimeout(g));
    const h = y(() => Ir(s.field.type));
    function v(C) {
      const p = document.getElementById(`f-${s.field.key}`);
      if (!(p instanceof HTMLTextAreaElement) && !(p instanceof HTMLInputElement))
        return;
      const x = p.selectionStart ?? p.value.length, S = p.selectionEnd ?? x;
      p.setRangeText(C, x, S, "end"), p.dispatchEvent(new Event("input", { bubbles: !0 })), p.focus();
    }
    return (C, p) => e.field.type === "hidden" ? (t(), n(P, { key: 0 }, [], 64)) : (t(), n("div", Li, [
      o("label", {
        for: `f-${e.field.key}`,
        class: j(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
      }, [
        G(c(e.field.label) + " ", 1),
        e.field.required ? (t(), n("span", Di, "*")) : _("", !0)
      ], 10, Vi),
      h.value ? (t(), D(ze(h.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": p[0] || (p[0] = (x) => i("change", x))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(Zt, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": p[1] || (p[1] = (x) => i("change", x))
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
        "onUpdate:modelValue": p[2] || (p[2] = (x) => i("change", x))
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(b(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": p[3] || (p[3] = (x) => i("change", x))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Oi, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": p[4] || (p[4] = (x) => i("change", x))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(wi, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": p[5] || (p[5] = (x) => i("change", x))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(Wt, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": p[6] || (p[6] = (x) => i("change", x))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Ti, [
        o("button", {
          type: "button",
          class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          onClick: M
        }, [
          o("span", {
            class: j(m.value || e.value ? "" : "text-muted-foreground")
          }, c(m.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), n("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: ce(w, ["stop"])
          }, " ✕ ")) : _("", !0)
        ], 8, Fi),
        u.value ? (t(), n("div", Ei, [
          se(o("input", {
            "onUpdate:modelValue": p[7] || (p[7] = (x) => d.value = x),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [Be, d.value]
          ]),
          o("div", Ii, [
            k.value ? (t(), n("p", Ni, " Searching… ")) : f.value.length === 0 ? (t(), n("p", Ri, " No matches ")) : _("", !0),
            (t(!0), n(P, null, L(f.value, (x) => (t(), n("button", {
              key: String(x.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (S) => $(x)
            }, c(x.label), 9, Hi))), 128))
          ])
        ])) : _("", !0),
        u.value ? (t(), n("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: p[8] || (p[8] = (x) => u.value = !1)
        })) : _("", !0)
      ])) : e.field.type === "select" ? (t(), n("select", {
        key: 8,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onChange: p[9] || (p[9] = (x) => i("change", x.target.value || null))
      }, [
        p[14] || (p[14] = o("option", { value: "" }, "-", -1)),
        (t(!0), n(P, null, L(e.options, (x) => (t(), n("option", {
          key: String(x.value),
          value: x.value
        }, c(x.label), 9, Ki))), 128))
      ], 40, Ui)) : e.field.type === "toggle" ? (t(), n("label", qi, [
        U(b(hr), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": p[10] || (p[10] = (x) => i("change", x))
        }, null, 8, ["id", "model-value", "disabled"]),
        o("span", Gi, c(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), n("label", Wi, [
        U(b(gr), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": p[11] || (p[11] = (x) => i("change", x === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        o("span", Zi, c(e.field.help ?? e.field.label), 1)
      ])) : e.field.type === "textarea" ? (t(), n("textarea", {
        key: 11,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        rows: e.field.rows ?? 3,
        placeholder: e.field.placeholder,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: p[12] || (p[12] = (x) => i("change", x.target.value))
      }, null, 40, Ji)) : (t(), n("input", {
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
        onInput: p[13] || (p[13] = (x) => i("change", x.target.value))
      }, null, 40, Yi)),
      e.field.type === "number" && e.field.presets?.length ? (t(), n("div", Xi, [
        (t(!0), n(P, null, L(e.field.presets, (x) => (t(), n("button", {
          key: x,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: j([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == x ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == x
          ),
          onClick: (S) => i("change", String(x))
        }, c(x), 11, Qi))), 128))
      ])) : _("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", eu, [
        (t(!0), n(P, null, L(e.field.chips, (x, S) => (t(), n("button", {
          key: S,
          type: "button",
          title: x,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (B) => v(String(S))
        }, c(S), 9, tu))), 128))
      ])) : _("", !0),
      e.error ? (t(), n("p", au, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", nu, c(e.field.help), 1)) : _("", !0)
    ]));
  }
}), lu = { class: "flex flex-col gap-2" }, ou = { class: "min-w-0 flex-1" }, su = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, ru = ["disabled", "aria-label", "onClick"], iu = ["disabled", "aria-label", "onClick"], uu = ["disabled", "title", "aria-label", "onClick"], du = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, cu = ["disabled"], zk = /* @__PURE__ */ z({
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
    const i = q(u(a.modelValue));
    function u(C) {
      return Array.isArray(C) ? C.map((p) => ({ uid: s++, data: { ...p } })) : [];
    }
    re(
      () => a.modelValue,
      (C) => {
        JSON.stringify(C ?? null) !== JSON.stringify(d()) && (i.value = u(C));
      }
    );
    function d() {
      const C = [];
      for (const p of i.value) {
        const x = {};
        let S = !1;
        for (const B of a.children) {
          const K = p.data[B.key] ?? null;
          x[B.key] = K, K !== null && K !== "" && !(Array.isArray(K) && K.length === 0) && (S = !0);
        }
        S && C.push(x);
      }
      return C.length ? C : null;
    }
    function f() {
      r("update:modelValue", d());
    }
    const k = y(() => a.maxItems !== null && i.value.length >= a.maxItems), m = y(() => a.minItems !== null && i.value.length <= a.minItems), g = y(() => a.children.length === 1);
    function M() {
      if (k.value || a.disabled)
        return;
      const C = {};
      for (const p of a.children)
        C[p.key] = null;
      i.value.push({ uid: s++, data: C });
    }
    function $(C) {
      i.value = i.value.filter((p) => p.uid !== C), f();
    }
    function w(C, p) {
      const x = C + p;
      if (x < 0 || x >= i.value.length)
        return;
      const S = [...i.value], [B] = S.splice(C, 1);
      S.splice(x, 0, B), i.value = S, f();
    }
    function h(C, p, x) {
      const S = i.value.find((B) => B.uid === C);
      S && (S.data[p] = x, f());
    }
    function v(C, p) {
      return a.errors[`${a.fieldKey}.${C}.${p}`];
    }
    return (C, p) => (t(), n("div", lu, [
      (t(!0), n(P, null, L(i.value, (x, S) => (t(), n("div", {
        key: x.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: j(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", g.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, c(S + 1), 3),
        o("div", ou, [
          g.value ? (t(), D(Re, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: x.data[e.children[0].key],
            error: v(S, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (B) => h(x.uid, e.children[0].key, B)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", su, [
            (t(!0), n(P, null, L(e.children, (B) => (t(), D(Re, {
              key: B.key,
              field: { ...B, disabled: B.disabled || e.disabled },
              value: x.data[B.key],
              error: v(S, B.key),
              options: e.childOptions[B.key] ?? [],
              onChange: (K) => h(x.uid, B.key, K)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: j(["flex shrink-0 items-center gap-0.5", g.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || S === 0,
            "aria-label": `Move ${e.itemLabel} ${S + 1} up`,
            onClick: (B) => w(S, -1)
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
          ])], 8, ru),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || S === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${S + 1} down`,
            onClick: (B) => w(S, 1)
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
          ])], 8, iu),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || m.value,
            title: m.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${S + 1}`,
            onClick: (B) => $(x.uid)
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
          ])], 8, uu)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", du, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : _("", !0),
      k.value ? _("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: M
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
        G(" Add " + c(e.itemLabel.toLowerCase()), 1)
      ], 8, cu))
    ]));
  }
}), fu = { class: "space-y-1" }, mu = { class: "flex items-center gap-1" }, pu = ["disabled", "title", "aria-label", "onClick"], vu = ["aria-pressed"], gu = ["id", "value", "rows", "disabled"], hu = ["innerHTML"], bu = /* @__PURE__ */ z({
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
    function u(g) {
      return g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = y(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(g, M = g) {
      const $ = document.getElementById(a.id ?? "");
      if ($ === null)
        return;
      const w = $.selectionStart, h = $.selectionEnd, v = i.value.slice(w, h);
      r(
        "update:modelValue",
        `${i.value.slice(0, w)}${g}${v}${M}${i.value.slice(h)}`
      );
    }
    const k = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, m = y(
      () => (a.toolbar ?? Object.keys(k)).filter((g) => g in k)
    );
    return (g, M) => (t(), n("div", fu, [
      o("div", mu, [
        (t(!0), n(P, null, L(m.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          disabled: e.disabled,
          title: $,
          "aria-label": $,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (w) => k[$].run()
        }, c(k[$].label), 9, pu))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: M[0] || (M[0] = ($) => s.value = !s.value)
        }, " Preview ", 8, vu)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, hu)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = ($) => r("update:modelValue", $.target.value))
      }, null, 40, gu))
    ]));
  }
}), xu = { class: "space-y-1" }, yu = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, ku = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, $u = ["id", "value", "rows", "disabled"], wu = { class: "text-muted-foreground text-xs" }, _u = {
  key: 0,
  class: "text-destructive text-xs"
}, Cu = /* @__PURE__ */ z({
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
    const a = e, r = l, s = q(null), i = q(!0), u = y(() => a.modelValue ?? ""), d = y(() => Math.max(u.value.split(`
`).length, 1)), f = y(() => {
      if (a.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
      } catch (g) {
        return g instanceof Error ? g.message : "Not valid JSON.";
      }
    });
    function k(g) {
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
      const M = g.target, $ = M.selectionStart, w = M.selectionEnd, h = `${u.value.slice(0, $)}    ${u.value.slice(w)}`;
      r("update:modelValue", h), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = $ + 4;
      });
    }
    return (g, M) => (t(), n("div", xu, [
      o("div", yu, [
        o("div", ku, [
          (t(!0), n(P, null, L(d.value, ($) => (t(), n("div", { key: $ }, c($), 1))), 128))
        ]),
        o("textarea", {
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
          onInput: k,
          onKeydown: m
        }, null, 40, $u)
      ]),
      o("p", wu, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", _u, c(f.value), 1)) : _("", !0)
    ]));
  }
}), Mu = { class: "space-y-3" }, Su = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Bu = { class: "text-sm font-medium" }, zu = { class: "flex items-center gap-1" }, Pu = ["disabled", "onClick"], Au = ["disabled", "onClick"], ju = ["disabled", "onClick"], Ou = { class: "space-y-3 p-3" }, Lu = { class: "flex flex-wrap items-center gap-2" }, Vu = ["disabled", "onClick"], Du = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Pk = /* @__PURE__ */ z({
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
      () => Object.fromEntries(a.blocks.map((M) => [M.type, M]))
    ), u = y(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function d(M) {
      r("update:modelValue", M);
    }
    function f(M) {
      u.value || d([...s.value, { type: M, data: {} }]);
    }
    function k(M) {
      d(s.value.filter(($, w) => w !== M));
    }
    function m(M, $) {
      const w = M + $;
      if (w < 0 || w >= s.value.length)
        return;
      const h = [...s.value], [v] = h.splice(M, 1);
      h.splice(w, 0, v), d(h);
    }
    function g(M, $, w) {
      d(
        s.value.map(
          (h, v) => v === M ? { ...h, data: { ...h.data, [$]: w } } : h
        )
      );
    }
    return (M, $) => (t(), n("div", Mu, [
      (t(!0), n(P, null, L(s.value, (w, h) => (t(), n("div", {
        key: `${w.type}-${h}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Su, [
          o("span", Bu, c(i.value[w.type]?.label ?? w.type), 1),
          o("div", zu, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || h === 0,
              "aria-label": "Move up",
              onClick: (v) => m(h, -1)
            }, " ↑ ", 8, Pu),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || h === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (v) => m(h, 1)
            }, " ↓ ", 8, Au),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (v) => k(h)
            }, " Remove ", 8, ju)
          ])
        ]),
        o("div", Ou, [
          (t(!0), n(P, null, L(i.value[w.type]?.fields ?? [], (v) => (t(), D(Re, {
            key: v.key,
            field: v,
            value: w.data[v.key] ?? null,
            error: e.errors?.[v.key],
            processing: e.disabled,
            onChange: (C) => g(h, v.key, C)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Lu, [
        (t(!0), n(P, null, L(e.blocks, (w) => (t(), n("button", {
          key: w.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (h) => f(w.type)
        }, " + " + c(w.label), 9, Vu))), 128)),
        u.value ? (t(), n("span", Du, c(e.maxBlocks) + " is the maximum here. ", 1)) : _("", !0)
      ])
    ]));
  }
}), Tu = ["name", "value", "checked", "disabled", "onChange"], Fu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Eu = /* @__PURE__ */ z({
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
    return (i, u) => (t(), n("div", {
      role: "radiogroup",
      class: j(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(P, null, L(e.options, (d) => (t(), n("label", {
        key: String(d.value),
        class: j(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: s(d),
          disabled: e.disabled,
          onChange: (f) => r("update:modelValue", d.value)
        }, null, 40, Tu),
        G(" " + c(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Fu, " Nothing to choose from yet. ")) : _("", !0)
    ], 2));
  }
}), Iu = ["value", "checked", "disabled", "onChange"], Nu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ru = /* @__PURE__ */ z({
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
    function i(f) {
      return s.value.some((k) => k == f.value);
    }
    function u(f) {
      r(
        "update:modelValue",
        i(f) ? s.value.filter((k) => k != f.value) : [...s.value, f.value]
      );
    }
    const d = y(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, k) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: Q(d.value)
    }, [
      (t(!0), n(P, null, L(e.options, (m) => (t(), n("label", {
        key: String(m.value),
        class: j(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: m.value,
          checked: i(m),
          disabled: e.disabled,
          onChange: (g) => u(m)
        }, null, 40, Iu),
        G(" " + c(m.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Nu, " Nothing to choose from yet. ")) : _("", !0)
    ], 4));
  }
}), Hu = { class: "flex flex-col gap-1.5" }, Uu = ["aria-label", "onClick"], Ku = ["placeholder", "disabled", "maxlength"], qu = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Gu = ["onClick"], Wu = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Zu = /* @__PURE__ */ z({
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
    ), u = y(() => i.value.length >= (a.field.max ?? 25)), d = y(
      () => (a.field.suggestions ?? []).filter(
        (g) => !i.value.some((M) => M.toLowerCase() === g.toLowerCase())
      )
    );
    function f(g) {
      const M = g.trim().slice(0, a.field.maxLength ?? 40);
      if (M === "" || u.value) {
        s.value = "";
        return;
      }
      if (i.value.some(($) => $.toLowerCase() === M.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, M]), s.value = "";
    }
    function k(g) {
      r(
        "update:modelValue",
        i.value.filter((M, $) => $ !== g)
      );
    }
    function m(g) {
      if (g.key === "Enter" || g.key === ",") {
        g.preventDefault(), f(s.value);
        return;
      }
      g.key === "Backspace" && s.value === "" && i.value.length > 0 && k(i.value.length - 1);
    }
    return (g, M) => (t(), n("div", Hu, [
      o("div", {
        class: j(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(P, null, L(i.value, ($, w) => (t(), n("span", {
          key: `${$}-${w}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          G(c($) + " ", 1),
          e.disabled ? _("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${$}`,
            onClick: (h) => k(w)
          }, " × ", 8, Uu))
        ]))), 128)),
        se(o("input", {
          "onUpdate:modelValue": M[0] || (M[0] = ($) => s.value = $),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: m,
          onBlur: M[1] || (M[1] = ($) => f(s.value))
        }, null, 40, Ku), [
          [Be, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", qu, [
        M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(P, null, L(d.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (w) => f($)
        }, c($), 9, Gu))), 128))
      ])) : _("", !0),
      u.value ? (t(), n("p", Wu, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : _("", !0)
    ]));
  }
}), Ju = 4.5, zt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Jt(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function tt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function ut(e) {
  const [l, a, r] = Jt(e);
  return 0.2126 * tt(l) + 0.7152 * tt(a) + 0.0722 * tt(r);
}
function Yt(e, l) {
  const a = ut(e), r = ut(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function Yu(e, l, a) {
  if (!zt.test(e) || !zt.test(l))
    return e;
  const r = ut(l) > 0.5, s = r ? 0 : 255;
  let i = Jt(e);
  for (let u = 0; u <= 20; u++) {
    const d = Xu(i);
    if (Yt(d, l) >= a)
      return d;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Xu(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Qu = { class: "flex flex-col gap-2" }, ed = { class: "flex items-center gap-2" }, td = {
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
}, ad = ["value", "disabled", "aria-label"], nd = ["value", "disabled", "placeholder"], ld = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, od = ["aria-label", "title", "onClick"], sd = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, rd = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = y(() => typeof a.modelValue == "string" ? a.modelValue : ""), u = y(() => s.test(i.value));
    function d($) {
      const w = $.trim();
      if (w === "")
        return "";
      const h = w.startsWith("#") ? w : `#${w}`;
      return s.test(h) ? h.toLowerCase() : w;
    }
    function f($) {
      r("update:modelValue", d($.target.value));
    }
    const k = y(() => !u.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Yt(i.value, a.field.contrastBackground)), m = y(() => a.field.contrastMinRatio ?? Ju), g = y(() => k.value !== null && k.value < m.value);
    function M() {
      a.field.contrastBackground && r(
        "update:modelValue",
        Yu(i.value, a.field.contrastBackground, m.value)
      );
    }
    return ($, w) => (t(), n("div", Qu, [
      o("div", ed, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: w[0] || (w[0] = (h) => r("update:modelValue", h.target.value))
        }, null, 40, ad)) : (t(), n("span", td)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, nd)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", ld, [
        (t(!0), n(P, null, L(e.field.presets, (h) => (t(), n("button", {
          key: h,
          type: "button",
          class: j(["size-6 rounded border", i.value.toLowerCase() === h.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: Q({ backgroundColor: h }),
          "aria-label": h,
          title: h,
          onClick: (v) => r("update:modelValue", h.toLowerCase())
        }, null, 14, od))), 128))
      ])) : _("", !0),
      g.value ? (t(), n("p", sd, [
        o("span", null, " This fails contrast at " + c(k.value.toFixed(1)) + ":1 - it needs at least " + c(m.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? _("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : _("", !0)
    ]));
  }
}), id = { class: "flex items-center gap-3" }, ud = ["min", "max", "step", "value", "disabled", "aria-label"], dd = { class: "flex shrink-0 items-center gap-1" }, cd = ["min", "max", "step", "value", "disabled"], fd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, md = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.field.min ?? 0), i = y(() => a.field.max ?? 100), u = y(() => a.field.step ?? 1), d = y(() => {
      const m = Number(a.modelValue);
      return Number.isFinite(m) ? m : s.value;
    }), f = y(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function k(m) {
      if (m === "") {
        r("update:modelValue", null);
        return;
      }
      const g = Number(m);
      r("update:modelValue", Number.isFinite(g) ? g : null);
    }
    return (m, g) => (t(), n("div", id, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: g[0] || (g[0] = (M) => k(M.target.value))
      }, null, 40, ud),
      o("div", dd, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: f.value ? "" : d.value,
          disabled: e.disabled,
          onInput: g[1] || (g[1] = (M) => k(M.target.value))
        }, null, 40, cd),
        e.field.unit ? (t(), n("span", fd, c(e.field.unit), 1)) : _("", !0)
      ])
    ]));
  }
}), Ue = /* @__PURE__ */ new Map();
function at(e, l) {
  Ue.set(e, l);
}
function pd(e) {
  return Ue.get(e);
}
function Ak(e) {
  return Ue.has(e);
}
function vd() {
  return [...Ue.keys()].sort();
}
function jk() {
  Ue.clear();
}
const gd = ["name", "value", "checked", "disabled", "onChange"], hd = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, bd = { class: "whitespace-nowrap" }, xd = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, yd = ["name", "value", "checked", "disabled", "onChange"], kd = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, $d = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, wd = { class: "text-center text-xs font-medium" }, _d = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Cd = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Md = /* @__PURE__ */ z({
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
      () => a.field.preview ? pd(a.field.preview) : void 0
    ), i = y(() => !!a.field.preview && !s.value), u = y(() => a.field.layout === "segmented"), d = y(() => {
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
    function f(k) {
      return a.modelValue != null && k.value == a.modelValue;
    }
    return (k, m) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: j(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(P, null, L(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: j(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          f(g) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: g.value,
          checked: f(g),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", g.value)
        }, null, 40, gd),
        m[0] || (m[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", hd, [
          (t(), D(ze(s.value), {
            value: g.value,
            label: g.label,
            selected: f(g)
          }, null, 8, ["value", "label", "selected"]))
        ])) : _("", !0),
        o("span", bd, c(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", xd, " Nothing to choose from yet. ")) : _("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: j(["grid gap-3", d.value])
    }, [
      (t(!0), n(P, null, L(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: j(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          f(g) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: g.value,
          checked: f(g),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", g.value)
        }, null, 40, yd),
        m[1] || (m[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", kd, [
          s.value ? (t(), D(ze(s.value), {
            key: 0,
            value: g.value,
            label: g.label,
            selected: f(g)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", $d, " no preview ")) : _("", !0)
        ]),
        o("span", wd, c(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", _d, " Nothing to choose from yet. ")) : _("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Cd, [
        m[2] || (m[2] = G(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        G(". Registered: " + c(b(vd)().join(", ") || "none") + ". ", 1)
      ])) : _("", !0)
    ], 2));
  }
}), Sd = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Bd = /* @__PURE__ */ z({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Sd, [
      o("span", {
        class: "block size-full",
        style: Q({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), zd = { class: "flex flex-col items-center gap-1 text-center" }, Pd = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Xt = /* @__PURE__ */ z({
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
    return (s, i) => (t(), n("div", zd, [
      o("div", {
        class: j(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: Q({ borderColor: a.value, color: a.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Pd, c(e.caption), 1)) : _("", !0)
    ]));
  }
}), Ad = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, jd = { class: "flex items-center gap-3" }, Od = ["src"], Ld = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Vd = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Dd = {
  key: 0,
  class: "text-right text-sm"
}, Td = { class: "text-neutral-500" }, Fd = { class: "tabular-nums" }, Ed = { key: 1 }, Id = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Nd = { class: "mt-2 font-medium" }, Rd = { key: 2 }, Hd = { class: "w-full text-sm" }, Ud = { class: "w-full py-3 pr-2" }, Kd = {
  key: 0,
  class: "text-xs text-neutral-500"
}, qd = { key: 0 }, Gd = ["colspan"], Wd = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Zd = { class: "w-64 text-sm" }, Jd = { class: "tabular-nums" }, Yd = {
  key: 3,
  class: "py-2"
}, Xd = { key: 4 }, Qd = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, ec = { class: "mt-2 flex flex-col gap-1 text-sm" }, tc = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, ac = { key: 0 }, nc = {
  key: 1,
  class: "mt-1"
}, lc = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, oc = /* @__PURE__ */ z({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function a() {
      return l.document.branding.mono ? "#000000" : l.document.branding.accent;
    }
    function r(f) {
      return f.meta ?? [];
    }
    function s(f) {
      return f.rows ?? [];
    }
    function i(f) {
      return f.totals ?? [];
    }
    function u(f) {
      return f ?? [];
    }
    function d(f) {
      return f ?? "";
    }
    return (f, k) => (t(), n("article", Ad, [
      o("div", jd, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Od)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: Q({ color: a() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), n(P, null, L(e.document.blocks, (m, g) => (t(), n(P, { key: g }, [
        m.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: Q({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: Q({ color: a() })
            }, c(m.title), 5),
            m.subtitle ? (t(), n("p", Ld, c(m.subtitle), 1)) : _("", !0),
            m.reference ? (t(), n("p", Vd, c(m.reference), 1)) : _("", !0)
          ]),
          r(m).length ? (t(), n("dl", Dd, [
            (t(!0), n(P, null, L(r(m), (M, $) => (t(), n("div", {
              key: $,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Td, c(M.label), 1),
              o("dd", Fd, c(M.value), 1)
            ]))), 128))
          ])) : _("", !0)
        ], 4)) : m.type === "party" ? (t(), n("section", Ed, [
          o("h2", Id, c(m.heading), 1),
          o("p", Nd, c(m.name), 1),
          (t(!0), n(P, null, L(u(m.lines), (M, $) => (t(), n("p", {
            key: $,
            class: "text-sm text-neutral-600"
          }, c(M), 1))), 128))
        ])) : m.type === "lines" ? (t(), n("section", Rd, [
          o("table", Hd, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: Q({ borderColor: a() })
              }, [
                (t(!0), n(P, null, L(u(m.columns), (M, $) => (t(), n("th", {
                  key: $,
                  class: j(["pb-2 font-medium", $ > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(M), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(P, null, L(s(m), (M, $) => (t(), n("tr", {
                key: $,
                class: "border-b border-neutral-200"
              }, [
                o("td", Ud, [
                  o("p", null, c(M.description), 1),
                  M.detail ? (t(), n("p", Kd, c(M.detail), 1)) : _("", !0)
                ]),
                (t(!0), n(P, null, L(M.cells, (w, h) => (t(), n("td", {
                  key: h,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(w), 1))), 128))
              ]))), 128)),
              s(m).length === 0 ? (t(), n("tr", qd, [
                o("td", {
                  colspan: u(m.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(m.empty), 9, Gd)
              ])) : _("", !0)
            ])
          ]),
          i(m).length ? (t(), n("div", Wd, [
            o("dl", Zd, [
              (t(!0), n(P, null, L(i(m), (M, $) => (t(), n("div", {
                key: $,
                class: j([
                  "flex justify-between py-1",
                  M.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: Q(M.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: j(M.strong ? "" : "text-neutral-600")
                }, c(M.label), 3),
                o("dd", Jd, c(M.value), 1)
              ], 6))), 128))
            ])
          ])) : _("", !0)
        ])) : m.type === "code" ? (t(), n("section", Yd, [
          U(Xt, {
            code: d(m.code),
            caption: d(m.caption),
            style: Q(d(m.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : m.type === "steps" ? (t(), n("section", Xd, [
          o("h2", Qd, c(m.heading), 1),
          o("ol", ec, [
            (t(!0), n(P, null, L(u(m.items), (M, $) => (t(), n("li", {
              key: $,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: Q({ color: a() })
              }, c($ + 1) + ".", 5),
              o("span", null, c(M), 1)
            ]))), 128))
          ])
        ])) : m.type === "note" ? (t(), n("p", {
          key: 5,
          class: j(["text-sm", m.emphasis ? "font-medium" : "text-neutral-600"]),
          style: Q(m.emphasis ? { color: a() } : void 0)
        }, c(m.text), 7)) : m.type === "footer" ? (t(), n("footer", tc, [
          m.text ? (t(), n("p", ac, c(m.text), 1)) : _("", !0),
          u(m.contacts).length ? (t(), n("p", nc, c(u(m.contacts).join(" · ")), 1)) : _("", !0)
        ])) : (t(), n("p", lc, " This document contains a “" + c(m.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), sc = ["aria-label", "title"], rc = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ic = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, Ok = /* @__PURE__ */ z({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Kt(), r = y(() => l.value.theme === "dark");
    function s() {
      a({ theme: r.value ? "light" : "dark" });
    }
    return (i, u) => (t(), n("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), n("svg", rc, [
        r.value ? (t(), n(P, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", ic))
      ]))
    ], 8, sc));
  }
}), uc = ["width", "height"], dc = { key: 0 }, cc = ["x1", "x2", "y1", "y2"], fc = ["x", "y"], mc = ["x1", "x2", "y1", "y2"], pc = ["x", "y"], vc = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], gc = ["x", "y", "width", "height", "fill", "fill-opacity"], hc = ["x", "y"], bc = ["x", "y"], xc = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, yc = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, kc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, $c = { class: "text-xs font-semibold tabular-nums" }, wc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, _c = { class: "text-muted-foreground" }, Pt = 5.6, Lk = /* @__PURE__ */ z({
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
    function r(O) {
      return a[O] ?? O;
    }
    function s(O, Z) {
      if (!l.thresholds?.length)
        return Z;
      const H = l.thresholds.find((X) => O < X.max);
      return r(H ? H.color : l.aboveColor);
    }
    const i = q(null), u = q(560), d = q(null);
    let f = null;
    ue(() => {
      f = new ResizeObserver((O) => {
        u.value = Math.max(160, O[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), fe(() => f?.disconnect());
    const k = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Z, H) => ({
      ...Z,
      color: Z.color ?? k[H % k.length]
    }))), g = y(() => m.value[0]?.points.map((O) => O.label) ?? []), M = y(() => g.value.length), $ = y(() => l.orientation === "horizontal"), w = y(() => Math.max(0, ...g.value.map((O) => O.length))), h = y(() => {
      if (!$.value)
        return l.showAxis ? 44 : 8;
      const O = w.value * Pt + 16;
      return Math.round(Math.min(Math.max(60, O), u.value * 0.4));
    }), v = y(() => Math.max(4, Math.floor((h.value - 16) / Pt)));
    function C(O) {
      return O.length <= v.value ? O : `${O.slice(0, v.value - 1)}…`;
    }
    const p = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: h.value
    })), x = y(() => ({
      w: Math.max(1, u.value - p.value.left - p.value.right),
      h: Math.max(1, l.height - p.value.top - p.value.bottom)
    })), S = (O) => l.format ? l.format(O) : B(O);
    function B(O) {
      return Math.abs(O) >= 1e6 ? `${(O / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(O) >= 1e3 ? `${(O / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(O * 100) / 100);
    }
    const K = y(() => {
      const O = g.value.map(
        (ie, ve) => l.stacked ? m.value.reduce((ae, pe) => ae + Math.max(0, pe.points[ve]?.value ?? 0), 0) : Math.max(...m.value.map((ae) => ae.points[ve]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const Z = Math.max(...O, 0);
      if (Z <= 0)
        return 1;
      const H = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((ie) => Z <= ie * H) ?? 10) * H;
    }), I = y(
      () => ($.value ? x.value.h : x.value.w) / Math.max(1, M.value)
    ), Y = y(() => I.value * 0.68), F = y(
      () => l.stacked || m.value.length <= 1 ? Y.value : Y.value / m.value.length
    ), T = y(() => {
      const O = [], Z = new Array(M.value).fill(0);
      return m.value.forEach((H, X) => {
        H.points.forEach((ie, ve) => {
          const pe = Math.max(0, ie.value) / K.value * ($.value ? x.value.w : x.value.h), Te = ($.value ? p.value.top : p.value.left) + ve * I.value + (I.value - Y.value) / 2, $t = l.stacked ? 0 : X * F.value;
          O.push(
            $.value ? {
              x: p.value.left + Z[ve],
              y: Te + $t,
              w: pe,
              h: Math.max(0, F.value - 2),
              color: s(ie.value, H.color),
              label: ie.label,
              name: H.name,
              value: ie.value,
              index: ve
            } : {
              x: Te + $t,
              y: p.value.top + x.value.h - pe - Z[ve],
              w: Math.max(0, F.value - 2),
              h: pe,
              color: s(ie.value, H.color),
              label: ie.label,
              name: H.name,
              value: ie.value,
              index: ve
            }
          ), l.stacked && (Z[ve] += pe);
        });
      }), O;
    }), A = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((O) => ({
        value: K.value * ($.value ? O : 1 - O),
        x: p.value.left + x.value.w * O,
        y: p.value.top + x.value.h * O
      }))
    ), W = y(() => Math.max(1, Math.ceil(M.value / ($.value ? 14 : 10))));
    function E(O) {
      return O === M.value - 1 || O % W.value === 0;
    }
    function N(O) {
      return ($.value ? p.value.top : p.value.left) + O * I.value + I.value / 2;
    }
    const te = y(() => d.value === null ? null : {
      label: g.value[d.value],
      rows: m.value.map((O) => ({
        name: O.name,
        color: O.color,
        value: O.points[d.value]?.value ?? 0
      }))
    });
    return (O, Z) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      M.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: Z[0] || (Z[0] = (H) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", dc, [
            $.value ? (t(), n(P, { key: 0 }, [
              (t(!0), n(P, null, L(A.value, (H) => (t(), n("line", {
                key: `g-${H.x}`,
                x1: H.x,
                x2: H.x,
                y1: p.value.top,
                y2: p.value.top + x.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, cc))), 128)),
              (t(!0), n(P, null, L(A.value, (H) => (t(), n("text", {
                key: `gt-${H.x}`,
                x: H.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(B(H.value)), 9, fc))), 128))
            ], 64)) : (t(), n(P, { key: 1 }, [
              (t(!0), n(P, null, L(A.value, (H) => (t(), n("line", {
                key: `g-${H.y}`,
                x1: p.value.left,
                x2: u.value - p.value.right,
                y1: H.y,
                y2: H.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, mc))), 128)),
              (t(!0), n(P, null, L(A.value, (H) => (t(), n("text", {
                key: `gt-${H.y}`,
                x: p.value.left - 8,
                y: H.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(B(H.value)), 9, pc))), 128))
            ], 64))
          ])) : _("", !0),
          (t(!0), n(P, null, L(g.value, (H, X) => (t(), n("rect", {
            key: `hit-${X}`,
            x: $.value ? p.value.left : p.value.left + X * I.value,
            y: $.value ? p.value.top + X * I.value : p.value.top,
            width: $.value ? x.value.w : I.value,
            height: $.value ? I.value : x.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === X ? 0.4 : 0,
            onMouseenter: (ie) => d.value = X
          }, null, 40, vc))), 128)),
          (t(!0), n(P, null, L(T.value, (H, X) => (t(), n("rect", {
            key: `b-${X}`,
            x: H.x,
            y: H.y,
            width: H.w,
            height: H.h,
            fill: H.color,
            "fill-opacity": d.value === null || d.value === H.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, gc))), 128)),
          $.value ? (t(!0), n(P, { key: 1 }, L(g.value, (H, X) => se((t(), n("text", {
            key: `c-${X}`,
            x: p.value.left - 8,
            y: N(X) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            G(c(C(H)) + " ", 1),
            o("title", null, c(H), 1)
          ], 8, hc)), [
            [we, E(X)]
          ])), 128)) : (t(!0), n(P, { key: 2 }, L(g.value, (H, X) => se((t(), n("text", {
            key: `c-${X}`,
            x: N(X),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(H), 9, bc)), [
            [we, E(X)]
          ])), 128))
        ], 40, uc)),
        te.value ? (t(), n("div", xc, [
          o("p", yc, c(te.value.label), 1),
          (t(!0), n(P, null, L(te.value.rows, (H, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: H.color })
            }, null, 4),
            o("span", kc, c(H.name || "Value"), 1),
            o("span", $c, c(S(H.value)), 1)
          ]))), 128))
        ])) : _("", !0),
        e.showLegend && m.value.length > 1 ? (t(), n("div", wc, [
          (t(!0), n(P, null, L(m.value, (H, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: Q({ background: H.color })
            }, null, 4),
            o("span", _c, c(H.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Cc = ["width", "height"], Mc = ["id"], Sc = ["stop-color"], Bc = ["stop-color"], zc = { key: 0 }, Pc = ["x1", "x2", "y1", "y2"], Ac = ["x", "y"], jc = ["x", "y"], Oc = ["x1", "x2", "y1", "y2"], Lc = ["d", "fill"], Vc = ["d", "stroke", "stroke-dasharray"], Dc = ["cx", "cy", "fill"], Tc = { key: 1 }, Fc = ["x1", "x2", "y1", "y2"], Ec = ["cx", "cy", "fill"], Ic = ["x", "y"], Nc = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Rc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Hc = { class: "text-xs font-semibold tabular-nums" }, Uc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Kc = { class: "text-muted-foreground" }, qc = /* @__PURE__ */ z({
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
    const l = e, a = y(() => k.value.some((O) => O.axis === "right")), r = q(null), s = q(560), i = q(null);
    let u = null;
    ue(() => {
      u = new ResizeObserver((O) => {
        s.value = Math.max(160, O[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), fe(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = Math.random().toString(36).slice(2, 9), k = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Z, H) => ({
      ...Z,
      color: Z.color ?? d[H % d.length]
    }))), m = y(() => k.value[0]?.points.map((O) => O.label) ?? []), g = y(() => m.value.length), M = y(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), $ = (O) => l.format ? l.format(O) : w(O);
    function w(O) {
      return Math.abs(O) >= 1e6 ? `${(O / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(O) >= 1e3 ? `${(O / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(O * 100) / 100);
    }
    function h(O) {
      const Z = Math.max(...O, 0);
      if (Z <= 0)
        return 1;
      const H = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((ie) => Z <= ie * H) ?? 10) * H;
    }
    const v = y(
      () => h(
        k.value.filter((O) => O.axis !== "right").flatMap((O) => O.points.map((Z) => Z.value))
      )
    ), C = y(
      () => h(
        k.value.filter((O) => O.axis === "right").flatMap((O) => O.points.map((Z) => Z.value))
      )
    ), p = y(() => ({
      w: Math.max(1, s.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    }));
    function x(O) {
      return M.value.left + (g.value <= 1 ? 0 : O / (g.value - 1) * p.value.w);
    }
    function S(O, Z = "left") {
      const H = Z === "right" ? C.value : v.value;
      return M.value.top + p.value.h - O / H * p.value.h;
    }
    const B = y(
      () => k.value.map((O) => {
        const Z = O.points.map((X, ie) => ({
          ...X,
          x: x(ie),
          y: S(X.value, O.axis ?? "left")
        })), H = O.stepped ? K(Z) : I(Z);
        return { ...O, pts: Z, line: H, area: Y(H, Z) };
      })
    );
    function K(O) {
      if (O.length === 0)
        return "";
      let Z = `M${O[0].x.toFixed(2)},${O[0].y.toFixed(2)}`;
      for (let H = 1; H < O.length; H++)
        Z += ` L${O[H].x.toFixed(2)},${O[H - 1].y.toFixed(2)} L${O[H].x.toFixed(2)},${O[H].y.toFixed(2)}`;
      return Z;
    }
    function I(O) {
      const Z = O.length;
      if (Z === 0)
        return "";
      if (Z === 1)
        return `M${O[0].x},${O[0].y}`;
      const H = [], X = [];
      for (let ae = 0; ae < Z - 1; ae++)
        H[ae] = O[ae + 1].x - O[ae].x, X[ae] = H[ae] === 0 ? 0 : (O[ae + 1].y - O[ae].y) / H[ae];
      const ie = [X[0]];
      for (let ae = 1; ae < Z - 1; ae++)
        if (X[ae - 1] * X[ae] <= 0)
          ie[ae] = 0;
        else {
          const pe = 2 * H[ae] + H[ae - 1], Te = H[ae] + 2 * H[ae - 1];
          ie[ae] = (pe + Te) / (pe / X[ae - 1] + Te / X[ae]);
        }
      ie[Z - 1] = X[Z - 2];
      let ve = `M${O[0].x.toFixed(2)},${O[0].y.toFixed(2)}`;
      for (let ae = 0; ae < Z - 1; ae++) {
        const pe = H[ae] / 3;
        ve += ` C${(O[ae].x + pe).toFixed(2)},${(O[ae].y + ie[ae] * pe).toFixed(2)} ${(O[ae + 1].x - pe).toFixed(2)},${(O[ae + 1].y - ie[ae + 1] * pe).toFixed(2)} ${O[ae + 1].x.toFixed(2)},${O[ae + 1].y.toFixed(2)}`;
      }
      return ve;
    }
    function Y(O, Z) {
      if (Z.length === 0)
        return "";
      const H = M.value.top + p.value.h;
      return `${O} L${Z[Z.length - 1].x.toFixed(2)},${H} L${Z[0].x.toFixed(2)},${H} Z`;
    }
    const F = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((O) => ({
        y: M.value.top + p.value.h * O,
        value: v.value * (1 - O)
      }))
    ), T = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((O) => ({
        y: M.value.top + p.value.h * O,
        value: C.value * (1 - O)
      }))
    ), A = y(() => Math.max(1, Math.ceil(g.value / 8)));
    function W(O) {
      return O === g.value - 1 || O % A.value === 0;
    }
    function E(O) {
      const Z = O.currentTarget.getBoundingClientRect(), H = O.clientX - Z.left - M.value.left, X = g.value <= 1 ? 1 : p.value.w / (g.value - 1);
      i.value = Math.min(g.value - 1, Math.max(0, Math.round(H / X)));
    }
    const N = y(() => {
      if (i.value === null || g.value === 0)
        return null;
      const O = i.value;
      return {
        i: O,
        x: x(O),
        label: m.value[O],
        rows: B.value.map((Z) => ({
          name: Z.name,
          color: Z.color,
          value: Z.points[O]?.value ?? 0,
          y: Z.pts[O]?.y ?? 0
        }))
      };
    }), te = y(() => {
      if (!N.value)
        return {};
      const O = N.value.x > s.value * 0.6;
      return {
        left: `${N.value.x}px`,
        top: "8px",
        transform: O ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (O, Z) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      g.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: E,
          onMouseleave: Z[0] || (Z[0] = (H) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(P, null, L(B.value, (H, X) => (t(), n("linearGradient", {
              id: `pk-fill-${b(f)}-${X}`,
              key: X,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": H.color,
                "stop-opacity": "0.25"
              }, null, 8, Sc),
              o("stop", {
                offset: "100%",
                "stop-color": H.color,
                "stop-opacity": "0.01"
              }, null, 8, Bc)
            ], 8, Mc))), 128))
          ]),
          e.showAxis ? (t(), n("g", zc, [
            (t(!0), n(P, null, L(F.value, (H) => (t(), n("line", {
              key: H.y,
              x1: M.value.left,
              x2: s.value - M.value.right,
              y1: H.y,
              y2: H.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Pc))), 128)),
            (t(!0), n(P, null, L(F.value, (H) => (t(), n("text", {
              key: `t-${H.y}`,
              x: M.value.left - 8,
              y: H.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(w(H.value)), 9, Ac))), 128)),
            a.value ? (t(!0), n(P, { key: 0 }, L(T.value, (H) => (t(), n("text", {
              key: `rt-${H.y}`,
              x: s.value - M.value.right + 8,
              y: H.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(w(H.value)), 9, jc))), 128)) : _("", !0)
          ])) : _("", !0),
          (t(!0), n(P, null, L(m.value, (H, X) => se((t(), n("line", {
            key: `v-${X}`,
            x1: x(X),
            x2: x(X),
            y1: M.value.top,
            y2: M.value.top + p.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Oc)), [
            [we, W(X)]
          ])), 128)),
          (t(!0), n(P, null, L(B.value, (H, X) => (t(), n("g", {
            key: `s-${X}`
          }, [
            H.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: H.area,
              fill: `url(#pk-fill-${b(f)}-${X})`
            }, null, 8, Lc)) : _("", !0),
            o("path", {
              d: H.line,
              fill: "none",
              stroke: H.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": H.dashed ? "6 4" : void 0
            }, null, 8, Vc),
            H.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: H.pts[0].x,
              cy: H.pts[0].y,
              r: "3",
              fill: H.color
            }, null, 8, Dc)) : _("", !0)
          ]))), 128)),
          N.value ? (t(), n("g", Tc, [
            o("line", {
              x1: N.value.x,
              x2: N.value.x,
              y1: M.value.top,
              y2: M.value.top + p.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Fc),
            (t(!0), n(P, null, L(N.value.rows, (H, X) => (t(), n("circle", {
              key: `d-${X}`,
              cx: N.value.x,
              cy: H.y,
              r: "4",
              fill: H.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Ec))), 128))
          ])) : _("", !0),
          (t(!0), n(P, null, L(m.value, (H, X) => se((t(), n("text", {
            key: `x-${X}`,
            x: x(X),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(H), 9, Ic)), [
            [we, W(X)]
          ])), 128))
        ], 40, Cc)),
        N.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: Q(te.value)
        }, [
          o("p", Nc, c(N.value.label), 1),
          (t(!0), n(P, null, L(N.value.rows, (H, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: H.color })
            }, null, 4),
            o("span", Rc, c(H.name || "Value"), 1),
            o("span", Hc, c($(H.value)), 1)
          ]))), 128))
        ], 4)) : _("", !0),
        e.showLegend && k.value.length > 1 ? (t(), n("div", Uc, [
          (t(!0), n(P, null, L(B.value, (H, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: Q({ background: H.color })
            }, null, 4),
            o("span", Kc, c(H.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Gc = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Wc = { class: "text-muted-foreground text-[11px] capitalize" }, Zc = { class: "text-sm font-semibold tabular-nums" }, Jc = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ke = /* @__PURE__ */ z({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Gc, [
      o("p", Wc, c(e.label), 1),
      o("p", Zc, [
        G(c(e.value) + " ", 1),
        e.share ? (t(), n("span", Jc, " (" + c(e.share) + ") ", 1)) : _("", !0)
      ])
    ]));
  }
}), Yc = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Xc = ["width", "height", "viewBox", "aria-label"], Qc = ["d", "fill", "fill-opacity", "onMouseenter"], ef = ["x", "y"], tf = ["x", "y"], af = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, nf = ["onMouseenter"], lf = { class: "min-w-0 flex-1 truncate capitalize" }, of = { class: "tabular-nums font-medium" }, sf = { class: "text-muted-foreground w-9 text-right tabular-nums" }, Vk = /* @__PURE__ */ z({
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
    ], r = y(() => l.data.reduce((v, C) => v + C.value, 0)), s = q(null), i = y(() => l.height), u = y(() => i.value / 2 - 4), d = y(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function f(v) {
      return a[v % a.length];
    }
    function k(v) {
      return 1 - Math.min(0.55, Math.floor(v / a.length) * 0.28);
    }
    const m = y(() => {
      if (r.value <= 0)
        return [];
      const v = i.value / 2;
      let C = -Math.PI / 2;
      return l.data.map((p, x) => {
        const S = p.value / r.value, B = S * Math.PI * 2, K = C, I = C + B;
        return C = I, {
          ...p,
          share: S,
          colour: f(x),
          opacity: k(x),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: S >= 0.9999 ? $(v) : M(v, K, I, u.value, d.value)
        };
      });
    });
    function g(v, C, p) {
      return `${(v + Math.cos(C) * p).toFixed(2)},${(v + Math.sin(C) * p).toFixed(2)}`;
    }
    function M(v, C, p, x, S) {
      const B = p - C > Math.PI ? 1 : 0;
      return S <= 0 ? `M${v},${v} L${g(v, C, x)} A${x},${x} 0 ${B} 1 ${g(v, p, x)} Z` : [
        `M${g(v, C, x)}`,
        `A${x},${x} 0 ${B} 1 ${g(v, p, x)}`,
        `L${g(v, p, S)}`,
        `A${S},${S} 0 ${B} 0 ${g(v, C, S)}`,
        "Z"
      ].join(" ");
    }
    function $(v) {
      const C = u.value, p = d.value, x = [
        `M${v - C},${v}`,
        `A${C},${C} 0 1 1 ${v + C},${v}`,
        `A${C},${C} 0 1 1 ${v - C},${v}`,
        "Z"
      ];
      return p <= 0 ? x.join(" ") : [
        ...x,
        `M${v - p},${v}`,
        `A${p},${p} 0 1 0 ${v + p},${v}`,
        `A${p},${p} 0 1 0 ${v - p},${v}`,
        "Z"
      ].join(" ");
    }
    const w = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), h = (v) => `${(v * 100).toFixed(v < 0.01 ? 2 : 0)}%`;
    return (v, C) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Yc, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${w(r.value)}`
      }, [
        (t(!0), n(P, null, L(m.value, (p, x) => (t(), n("path", {
          key: x,
          d: p.path,
          fill: p.colour,
          "fill-opacity": s.value === null || s.value === x ? p.opacity : p.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (S) => s.value = x,
          onMouseleave: C[0] || (C[0] = (S) => s.value = null)
        }, null, 40, Qc))), 128)),
        e.type === "doughnut" ? (t(), n(P, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(w(s.value === null ? r.value : m.value[s.value].value)), 9, ef),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : m.value[s.value].label), 9, tf)
        ], 64)) : _("", !0)
      ], 8, Xc)),
      o("ul", af, [
        (t(!0), n(P, null, L(m.value, (p, x) => (t(), n("li", {
          key: x,
          class: j(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === x ? "bg-muted" : ""]),
          onMouseenter: (S) => s.value = x,
          onMouseleave: C[1] || (C[1] = (S) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: p.colour, opacity: p.opacity })
          }, null, 4),
          o("span", lf, c(p.label), 1),
          o("span", of, c(w(p.value)), 1),
          o("span", sf, c(h(p.share)), 1)
        ], 42, nf))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(Ke, {
        key: 0,
        label: m.value[s.value].label,
        value: w(m.value[s.value].value),
        share: h(m.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : _("", !0)
    ]));
  }
}), rf = ["width", "height", "viewBox", "aria-label"], uf = { class: "text-border" }, df = ["x1", "x2", "y1", "y2", "stroke-dasharray"], cf = { class: "fill-muted-foreground text-[10px]" }, ff = ["x", "y"], mf = ["x", "y"], pf = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], vf = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, Dk = /* @__PURE__ */ z({
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
    let u = null;
    ue(() => {
      u = new ResizeObserver((A) => {
        const W = A[0]?.contentRect.width ?? 0;
        W > 0 && (s.value = W);
      }), r.value && u.observe(r.value);
    }), fe(() => u?.disconnect());
    const d = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (A, W) => W.color ?? a[A % a.length], k = y(() => d.value.flatMap((A) => A.points)), m = y(() => k.value.some((A) => typeof A.r == "number")), g = { top: 12, right: 16, bottom: 32, left: 48 }, M = y(() => Math.max(10, s.value - g.left - g.right)), $ = y(() => Math.max(10, l.height - g.top - g.bottom));
    function w(A) {
      if (A.length === 0)
        return [0, 1];
      const W = Math.min(...A), E = Math.max(...A), N = E - W || Math.abs(E) || 1;
      return [W - N * 0.08, E + N * 0.08];
    }
    const h = y(() => w(k.value.map((A) => A.x))), v = y(() => w(k.value.map((A) => A.y))), C = (A) => {
      const [W, E] = h.value;
      return g.left + (A - W) / (E - W) * M.value;
    }, p = (A) => {
      const [W, E] = v.value;
      return g.top + $.value - (A - W) / (E - W) * $.value;
    }, x = y(() => Math.max(...k.value.map((A) => A.r ?? 0), 0));
    function S(A) {
      if (!m.value || !x.value)
        return 4;
      const W = Math.max(0, A.r ?? 0) / x.value;
      return 3 + Math.sqrt(W) * (l.maxRadius - 3);
    }
    function B([A, W]) {
      return Array.from({ length: 5 }, (E, N) => A + (W - A) / 4 * N);
    }
    const K = y(() => B(h.value)), I = y(() => B(v.value)), Y = (A) => l.formatX?.(A) ?? String(Math.round(A * 100) / 100), F = (A) => l.formatY?.(A) ?? String(Math.round(A * 100) / 100), T = y(() => {
      if (!i.value)
        return null;
      const A = d.value[i.value.s], W = A?.points[i.value.p];
      return W ? { series: A, point: W } : null;
    });
    return (A, W) => (t(), n("div", {
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
        o("g", uf, [
          (t(!0), n(P, null, L(I.value, (E, N) => (t(), n("line", {
            key: `gy-${N}`,
            x1: g.left,
            x2: g.left + M.value,
            y1: p(E),
            y2: p(E),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": N === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, df))), 128))
        ]),
        o("g", cf, [
          (t(!0), n(P, null, L(I.value, (E, N) => (t(), n("text", {
            key: `ty-${N}`,
            x: g.left - 8,
            y: p(E) + 3,
            "text-anchor": "end"
          }, c(F(E)), 9, ff))), 128)),
          (t(!0), n(P, null, L(K.value, (E, N) => (t(), n("text", {
            key: `tx-${N}`,
            x: C(E),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(Y(E)), 9, mf))), 128))
        ]),
        (t(!0), n(P, null, L(d.value, (E, N) => (t(), n("g", {
          key: `s-${N}`
        }, [
          (t(!0), n(P, null, L(E.points, (te, O) => (t(), n("circle", {
            key: `p-${N}-${O}`,
            cx: C(te.x),
            cy: p(te.y),
            r: S(te),
            fill: f(N, E),
            "fill-opacity": m.value ? 0.55 : 0.85,
            stroke: f(N, E),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== N || i.value.p !== O) ? 0.35 : 1,
            onMouseenter: (Z) => i.value = { s: N, p: O },
            onMouseleave: W[0] || (W[0] = (Z) => i.value = null)
          }, null, 40, pf))), 128))
        ]))), 128))
      ], 8, rf)),
      T.value ? (t(), D(Ke, {
        key: 0,
        label: T.value.point.label ?? T.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${Y(T.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${F(T.value.point.y)}`,
        share: m.value && T.value.point.r != null ? String(T.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : _("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", vf, [
        (t(!0), n(P, null, L(d.value, (E, N) => (t(), n("span", {
          key: `l-${N}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: Q({ backgroundColor: f(N, E) }),
            "aria-hidden": "true"
          }, null, 4),
          G(" " + c(E.name), 1)
        ]))), 128))
      ])) : _("", !0)
    ], 512));
  }
}), gf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, hf = ["width", "height", "viewBox"], bf = ["points"], xf = ["x1", "y1", "x2", "y2"], yf = ["points", "fill", "stroke"], kf = ["cx", "cy", "fill", "onMouseenter"], $f = ["x", "y", "text-anchor"], wf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, _f = { class: "truncate" }, Tk = /* @__PURE__ */ z({
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
      () => l.series.map((p, x) => ({
        ...p,
        color: p.color ?? a[x % a.length]
      }))
    ), s = y(() => r.value[0]?.points.map((p) => p.label) ?? []), i = y(() => s.value.length), u = y(() => l.height), d = y(() => u.value / 2), f = y(() => u.value / 2 - 34), k = y(() => {
      const p = Math.max(...r.value.flatMap((B) => B.points.map((K) => K.value)), 0);
      if (p <= 0)
        return 1;
      const x = 10 ** Math.floor(Math.log10(p));
      return ([1, 2, 2.5, 5, 10].find((B) => p <= B * x) ?? 10) * x;
    });
    function m(p) {
      return p / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function g(p, x) {
      const S = m(p);
      return {
        x: d.value + Math.cos(S) * f.value * x,
        y: d.value + Math.sin(S) * f.value * x
      };
    }
    function M(p) {
      return Array.from({ length: i.value }, (x, S) => {
        const B = g(S, p);
        return `${B.x.toFixed(2)},${B.y.toFixed(2)}`;
      }).join(" ");
    }
    const $ = y(() => [0.25, 0.5, 0.75, 1].map((p) => ({ f: p, points: M(p) }))), w = y(
      () => r.value.map((p) => {
        const x = p.points.map((S) => Math.max(0, S.value) / k.value);
        return {
          name: p.name,
          color: p.color,
          values: p.points,
          outline: x.map((S, B) => {
            const K = g(B, S);
            return `${K.x.toFixed(2)},${K.y.toFixed(2)}`;
          }).join(" "),
          dots: x.map((S, B) => g(B, S))
        };
      })
    ), h = y(
      () => s.value.map((p, x) => {
        const S = m(x), B = d.value + Math.cos(S) * (f.value + 14), K = d.value + Math.sin(S) * (f.value + 14), I = Math.cos(S);
        return {
          label: p,
          x: B,
          y: K + 3,
          anchor: Math.abs(I) < 0.2 ? "middle" : I > 0 ? "start" : "end"
        };
      })
    ), v = q(null), C = (p) => l.format ? l.format(p) : new Intl.NumberFormat().format(p);
    return (p, x) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", gf, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(P, null, L($.value, (S) => (t(), n("polygon", {
          key: S.f,
          points: S.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, bf))), 128)),
        (t(!0), n(P, null, L(s.value, (S, B) => (t(), n("line", {
          key: `spoke-${B}`,
          x1: d.value,
          y1: d.value,
          x2: g(B, 1).x,
          y2: g(B, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, xf))), 128)),
        (t(!0), n(P, null, L(w.value, (S, B) => (t(), n("g", {
          key: `s-${B}`
        }, [
          o("polygon", {
            points: S.outline,
            fill: S.color,
            "fill-opacity": "0.16",
            stroke: S.color,
            "stroke-width": "2"
          }, null, 8, yf),
          (t(!0), n(P, null, L(S.dots, (K, I) => (t(), n("circle", {
            key: I,
            cx: K.x,
            cy: K.y,
            r: "3",
            fill: S.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (Y) => v.value = {
              series: S.name,
              axis: s.value[I],
              value: S.values[I]?.value ?? 0
            },
            onMouseleave: x[0] || (x[0] = (Y) => v.value = null)
          }, null, 40, kf))), 128))
        ]))), 128)),
        (t(!0), n(P, null, L(h.value, (S, B) => (t(), n("text", {
          key: `l-${B}`,
          x: S.x,
          y: S.y,
          "text-anchor": S.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(S.label), 9, $f))), 128))
      ], 8, hf)),
      e.showLegend ? (t(), n("ul", wf, [
        (t(!0), n(P, null, L(r.value, (S, B) => (t(), n("li", {
          key: B,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: S.color })
          }, null, 4),
          o("span", _f, c(S.name), 1)
        ]))), 128))
      ])) : _("", !0),
      v.value ? (t(), D(Ke, {
        key: 1,
        label: `${v.value.series} — ${v.value.axis}`,
        value: C(v.value.value)
      }, null, 8, ["label", "value"])) : _("", !0)
    ]));
  }
}), Cf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Mf = ["width", "height", "viewBox"], Sf = ["cx", "cy", "r"], Bf = ["d", "fill", "fill-opacity", "onMouseenter"], zf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Pf = { class: "min-w-0 flex-1 truncate capitalize" }, Af = { class: "font-medium tabular-nums" }, Fk = /* @__PURE__ */ z({
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
    ], r = q(null), s = y(() => l.height), i = y(() => s.value / 2), u = y(() => s.value / 2 - 6), d = y(() => Math.max(...l.data.map((M) => Math.max(0, M.value)), 0)), f = y(() => {
      const M = l.data.length;
      if (M === 0 || d.value <= 0)
        return [];
      const $ = Math.PI * 2 / M;
      return l.data.map((w, h) => {
        const v = Math.sqrt(Math.max(0, w.value) / d.value), C = u.value * v, p = h * $ - Math.PI / 2, x = p + $;
        return {
          ...w,
          color: a[h % a.length],
          share: d.value === 0 ? 0 : w.value / d.value,
          path: k(i.value, p, x, C)
        };
      });
    });
    function k(M, $, w, h) {
      if (h <= 0)
        return "";
      if (w - $ >= Math.PI * 2 - 1e-6)
        return `M${M - h},${M} A${h},${h} 0 1 1 ${M + h},${M} A${h},${h} 0 1 1 ${M - h},${M} Z`;
      const v = w - $ > Math.PI ? 1 : 0, C = M + Math.cos($) * h, p = M + Math.sin($) * h, x = M + Math.cos(w) * h, S = M + Math.sin(w) * h;
      return `M${M},${M} L${C.toFixed(2)},${p.toFixed(2)} A${h.toFixed(2)},${h.toFixed(2)} 0 ${v} 1 ${x.toFixed(2)},${S.toFixed(2)} Z`;
    }
    const m = y(() => [0.5, 0.75, 1].map((M) => u.value * M)), g = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, $) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Cf, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(P, null, L(m.value, (w) => (t(), n("circle", {
          key: w,
          cx: i.value,
          cy: i.value,
          r: w,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Sf))), 128)),
        (t(!0), n(P, null, L(f.value, (w, h) => (t(), n("path", {
          key: h,
          d: w.path,
          fill: w.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === h ? 0.75 : 0.3,
          onMouseenter: (v) => r.value = h,
          onMouseleave: $[0] || ($[0] = (v) => r.value = null)
        }, null, 40, Bf))), 128))
      ], 8, Mf)),
      e.showLegend ? (t(), n("ul", zf, [
        (t(!0), n(P, null, L(f.value, (w, h) => (t(), n("li", {
          key: h,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: w.color })
          }, null, 4),
          o("span", Pf, c(w.label), 1),
          o("span", Af, c(g(w.value)), 1)
        ]))), 128))
      ])) : _("", !0),
      r.value !== null ? (t(), D(Ke, {
        key: 1,
        label: f.value[r.value].label,
        value: g(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : _("", !0)
    ]));
  }
}), jf = ["width", "height"], Of = ["x1", "x2", "y1", "y2"], Lf = ["x", "y"], Vf = ["x", "y"], Df = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Tf = ["x", "y", "width", "height", "fill", "fill-opacity"], Ff = ["d", "stroke"], Ef = ["cx", "cy", "fill"], If = ["x", "y"], Nf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Rf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Hf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Uf = { class: "text-xs font-semibold tabular-nums" }, Kf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, qf = { class: "text-muted-foreground" }, Ek = /* @__PURE__ */ z({
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
    ue(() => {
      i = new ResizeObserver((N) => {
        r.value = Math.max(160, N[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), fe(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], f = y(
      () => l.bars.map((N, te) => ({
        ...N,
        color: N.color ?? u[te % u.length]
      }))
    ), k = y(
      () => l.lines.map((N, te) => ({
        ...N,
        color: N.color ?? d[te % d.length]
      }))
    ), m = y(
      () => f.value[0]?.points.map((N) => N.label) ?? k.value[0]?.points.map((N) => N.label) ?? []
    ), g = y(() => m.value.length), M = y(() => l.lineAxis === "right"), $ = y(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), w = y(() => ({
      w: Math.max(1, r.value - $.value.left - $.value.right),
      h: Math.max(1, l.height - $.value.top - $.value.bottom)
    }));
    function h(N) {
      const te = Math.max(...N, 0);
      if (te <= 0)
        return 1;
      const O = 10 ** Math.floor(Math.log10(te));
      return ([1, 2, 2.5, 5, 10].find((H) => te <= H * O) ?? 10) * O;
    }
    const v = y(
      () => h([
        ...f.value.flatMap((N) => N.points.map((te) => te.value)),
        ...M.value ? [] : k.value.flatMap((N) => N.points.map((te) => te.value))
      ])
    ), C = y(
      () => M.value ? h(k.value.flatMap((N) => N.points.map((te) => te.value))) : v.value
    ), p = y(() => w.value.w / Math.max(1, g.value)), x = y(() => p.value * 0.6), S = y(() => x.value / Math.max(1, f.value.length));
    function B(N) {
      return $.value.left + N * p.value + p.value / 2;
    }
    const K = y(
      () => f.value.flatMap(
        (N, te) => N.points.map((O, Z) => {
          const H = Math.max(0, O.value) / v.value * w.value.h;
          return {
            x: B(Z) - x.value / 2 + te * S.value,
            y: $.value.top + w.value.h - H,
            w: Math.max(0, S.value - 2),
            h: H,
            color: N.color,
            index: Z,
            name: N.name,
            value: O.value,
            label: O.label
          };
        })
      )
    ), I = y(
      () => k.value.map((N) => {
        const te = N.points.map((O, Z) => ({
          x: B(Z),
          y: $.value.top + w.value.h - Math.max(0, O.value) / C.value * w.value.h,
          value: O.value
        }));
        return {
          ...N,
          pts: te,
          d: te.map((O, Z) => `${Z === 0 ? "M" : "L"}${O.x.toFixed(2)},${O.y.toFixed(2)}`).join(" ")
        };
      })
    ), Y = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((N) => ({
        y: $.value.top + w.value.h * N,
        left: v.value * (1 - N),
        right: C.value * (1 - N)
      }))
    ), F = y(() => Math.max(1, Math.ceil(g.value / 10)));
    function T(N) {
      return N === g.value - 1 || N % F.value === 0;
    }
    const A = (N) => l.format ? l.format(N) : W(N);
    function W(N) {
      return Math.abs(N) >= 1e6 ? `${(N / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(N) >= 1e3 ? `${(N / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(N * 100) / 100);
    }
    const E = y(() => {
      if (s.value === null)
        return null;
      const N = s.value;
      return {
        label: m.value[N],
        rows: [
          ...f.value.map((te) => ({
            name: te.name,
            color: te.color,
            value: te.points[N]?.value ?? 0
          })),
          ...k.value.map((te) => ({
            name: te.name,
            color: te.color,
            value: te.points[N]?.value ?? 0
          }))
        ]
      };
    });
    return (N, te) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      g.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: te[0] || (te[0] = (O) => s.value = null)
        }, [
          (t(!0), n(P, null, L(Y.value, (O) => (t(), n("line", {
            key: `g-${O.y}`,
            x1: $.value.left,
            x2: r.value - $.value.right,
            y1: O.y,
            y2: O.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Of))), 128)),
          (t(!0), n(P, null, L(Y.value, (O) => (t(), n("text", {
            key: `lt-${O.y}`,
            x: $.value.left - 8,
            y: O.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(O.left)), 9, Lf))), 128)),
          M.value ? (t(!0), n(P, { key: 0 }, L(Y.value, (O) => (t(), n("text", {
            key: `rt-${O.y}`,
            x: r.value - $.value.right + 8,
            y: O.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(O.right)), 9, Vf))), 128)) : _("", !0),
          (t(!0), n(P, null, L(m.value, (O, Z) => (t(), n("rect", {
            key: `hit-${Z}`,
            x: $.value.left + Z * p.value,
            y: $.value.top,
            width: p.value,
            height: w.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === Z ? 0.4 : 0,
            onMouseenter: (H) => s.value = Z
          }, null, 40, Df))), 128)),
          (t(!0), n(P, null, L(K.value, (O, Z) => (t(), n("rect", {
            key: `b-${Z}`,
            x: O.x,
            y: O.y,
            width: O.w,
            height: O.h,
            fill: O.color,
            "fill-opacity": s.value === null || s.value === O.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Tf))), 128)),
          (t(!0), n(P, null, L(I.value, (O, Z) => (t(), n("g", {
            key: `l-${Z}`
          }, [
            o("path", {
              d: O.d,
              fill: "none",
              stroke: O.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Ff),
            s.value !== null && O.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: O.pts[s.value].x,
              cy: O.pts[s.value].y,
              r: "4",
              fill: O.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Ef)) : _("", !0)
          ]))), 128)),
          (t(!0), n(P, null, L(m.value, (O, Z) => se((t(), n("text", {
            key: `x-${Z}`,
            x: B(Z),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(O), 9, If)), [
            [we, T(Z)]
          ])), 128))
        ], 40, jf)),
        E.value ? (t(), n("div", Nf, [
          o("p", Rf, c(E.value.label), 1),
          (t(!0), n(P, null, L(E.value.rows, (O, Z) => (t(), n("div", {
            key: Z,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: O.color })
            }, null, 4),
            o("span", Hf, c(O.name), 1),
            o("span", Uf, c(A(O.value)), 1)
          ]))), 128))
        ])) : _("", !0),
        e.showLegend ? (t(), n("div", Kf, [
          (t(!0), n(P, null, L([...f.value, ...k.value], (O, Z) => (t(), n("span", {
            key: Z,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: Q({ background: O.color })
            }, null, 4),
            o("span", qf, c(O.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Gf = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Wf = { class: "text-muted-foreground" }, Zf = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Jf = ["width", "height"], Yf = ["x", "y"], Xf = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Qf = ["x", "y"], em = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, tm = { class: "text-[11px] font-medium capitalize" }, am = { class: "text-muted-foreground text-[11px] capitalize" }, nm = { class: "text-sm font-semibold tabular-nums" }, lm = { class: "text-muted-foreground text-xs font-normal" }, Ik = /* @__PURE__ */ z({
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
    ue(() => {
      i = new ResizeObserver((x) => {
        r.value = Math.max(160, x[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), fe(() => i?.disconnect());
    const u = y(() => l.series[0]?.points.map((x) => x.label) ?? []), d = y(() => l.series.length), f = y(() => u.value.length), k = y(() => Math.min(140, Math.max(60, r.value * 0.16))), m = y(() => Math.max(1, r.value - k.value - 8)), g = y(() => m.value / Math.max(1, f.value)), M = y(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function $(x) {
      if (x === 0)
        return "var(--muted)";
      const S = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(x / S * 100)}%, var(--muted))`;
    }
    function w(x) {
      for (let S = 0; S < l.buckets.length; S++) {
        const B = l.buckets[S].max;
        if (B === void 0 || x < B)
          return S;
      }
      return l.buckets.length - 1;
    }
    const h = y(
      () => l.series.flatMap(
        (x, S) => x.points.map((B, K) => {
          const I = w(B.value);
          return {
            row: S,
            col: K,
            x: k.value + K * g.value,
            y: 4 + S * M.value,
            w: Math.max(1, g.value - 1),
            h: Math.max(1, M.value - 4),
            colour: $(I),
            label: B.label,
            value: B.value,
            rowName: x.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), v = y(() => g.value < 2), C = y(() => s.value ? h.value.find((x) => x.row === s.value.row && x.col === s.value.col) ?? null : null), p = (x) => l.format ? l.format(x) : new Intl.NumberFormat().format(x);
    return (x, S) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        o("div", Gf, [
          (t(!0), n(P, null, L(e.buckets, (B, K) => (t(), n("span", {
            key: K,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: Q({ background: $(K) })
            }, null, 4),
            o("span", Wf, c(B.label), 1)
          ]))), 128))
        ]),
        v.value ? (t(), n("p", Zf, c(f.value) + " columns - too many to label individually ", 1)) : _("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: S[0] || (S[0] = (B) => s.value = null)
        }, [
          (t(!0), n(P, null, L(e.series, (B, K) => (t(), n("text", {
            key: `r-${K}`,
            x: k.value - 10,
            y: 4 + K * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(B.name), 9, Yf))), 128)),
          (t(!0), n(P, null, L(h.value, (B, K) => (t(), n("rect", {
            key: K,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.colour,
            "fill-opacity": s.value === null || s.value.row === B.row && s.value.col === B.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (I) => s.value = { row: B.row, col: B.col }
          }, null, 40, Xf))), 128)),
          e.showColumnLabels && !v.value ? (t(!0), n(P, { key: 0 }, L(u.value, (B, K) => (t(), n("text", {
            key: `c-${K}`,
            x: k.value + K * g.value + g.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(B), 9, Qf))), 128)) : _("", !0)
        ], 40, Jf)),
        C.value ? (t(), n("div", em, [
          o("p", tm, c(C.value.label), 1),
          o("p", am, c(C.value.rowName), 1),
          o("p", nm, [
            G(c(p(C.value.value)) + " ", 1),
            o("span", lm, "(" + c(C.value.bucketLabel) + ")", 1)
          ])
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), om = ["viewBox"], sm = { key: 0 }, rm = ["id"], im = ["stop-color"], um = ["stop-color"], dm = ["d", "fill"], cm = ["d", "stroke"], At = 100, Ee = 30, Xe = /* @__PURE__ */ z({
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
      const d = l.data.map((g) => g.value);
      if (d.length < 2)
        return [];
      const f = Math.min(...d), m = Math.max(...d) - f || 1;
      return d.map((g, M) => ({
        x: M / (d.length - 1) * At,
        y: Ee - (g - f) / m * (Ee - 4) - 2
      }));
    });
    function s(d) {
      const f = d.length;
      if (f < 2)
        return "";
      const k = [], m = [];
      for (let $ = 0; $ < f - 1; $++)
        k[$] = d[$ + 1].x - d[$].x, m[$] = k[$] === 0 ? 0 : (d[$ + 1].y - d[$].y) / k[$];
      const g = [m[0]];
      for (let $ = 1; $ < f - 1; $++)
        if (m[$ - 1] * m[$] <= 0)
          g[$] = 0;
        else {
          const w = 2 * k[$] + k[$ - 1], h = k[$] + 2 * k[$ - 1];
          g[$] = (w + h) / (w / m[$ - 1] + h / m[$]);
        }
      g[f - 1] = m[f - 2];
      let M = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let $ = 0; $ < f - 1; $++) {
        const w = k[$] / 3;
        M += ` C${(d[$].x + w).toFixed(2)},${(d[$].y + g[$] * w).toFixed(2)} ${(d[$ + 1].x - w).toFixed(2)},${(d[$ + 1].y - g[$ + 1] * w).toFixed(2)} ${d[$ + 1].x.toFixed(2)},${d[$ + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = y(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((f, k) => `${k === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), u = y(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Ee} L${d[0].x.toFixed(2)},${Ee} Z`;
    });
    return (d, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${At} ${Ee}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: Q({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", sm, [
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
          }, null, 8, im),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, um)
        ], 8, rm)
      ])) : _("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${b(a)})`
      }, null, 8, dm)) : _("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, cm)
    ], 12, om)) : _("", !0);
  }
}), fm = { class: "flex items-center gap-1 text-xs" }, mm = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, pm = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Qt = /* @__PURE__ */ z({
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
    return (u, d) => (t(), n("span", fm, [
      o("span", {
        class: j(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", mm, c(s.value), 1),
        G(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", pm, c(e.comparison), 1)) : _("", !0)
    ]));
  }
}), vm = ["aria-label"], Oe = /* @__PURE__ */ z({
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
    function i(u) {
      if (!(l.variant !== "text" || s.value === 1))
        return u === s.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: Q(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(P, null, L(s.value, (f) => (t(), n("span", {
        key: f,
        "aria-hidden": "true",
        class: j(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: Q({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, vm));
  }
}), gm = {
  class: "bg-card flex flex-col gap-3 rounded-lg border p-4",
  "data-slot": "chart-card"
}, hm = { class: "flex flex-wrap items-start justify-between gap-2" }, bm = { class: "flex min-w-0 items-start gap-2" }, xm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ym = ["d"], km = { class: "min-w-0" }, $m = { class: "text-sm font-medium" }, wm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, _m = { class: "flex shrink-0 items-center gap-1.5" }, Cm = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Mm = ["aria-pressed", "onClick"], Sm = ["aria-expanded", "aria-label", "title"], Bm = ["aria-label"], zm = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Pm = ["d"], Am = /* @__PURE__ */ z({
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
    const l = e, a = ra(), r = q(l.defaultCollapsed), s = y(() => !!l.icon && !a.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", gm, [
      o("div", hm, [
        o("div", bm, [
          R(u.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", xm, [
              o("path", {
                d: b(oe)(e.icon)
              }, null, 8, ym)
            ])) : _("", !0)
          ]),
          o("div", km, [
            o("p", $m, c(e.label), 1),
            e.description ? (t(), n("p", wm, c(e.description), 1)) : _("", !0),
            R(u.$slots, "trend")
          ])
        ]),
        o("div", _m, [
          R(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Cm, [
            (t(!0), n(P, null, L(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: j([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (k) => u.$emit("update:period", f.value)
            }, c(f.label), 11, Mm))), 128))
          ])) : _("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: d[0] || (d[0] = (f) => r.value = !r.value)
          }, [
            (t(), n("svg", {
              class: j(["size-4 transition-transform", r.value ? "-rotate-90" : ""]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [...d[2] || (d[2] = [
              o("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, Sm)) : _("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (f) => u.$emit("hide"))
          }, [
            (t(), n("svg", zm, [
              o("path", {
                d: b(oe)("eye-off")
              }, null, 8, Pm)
            ]))
          ], 8, Bm)) : _("", !0)
        ])
      ]),
      se(o("div", {
        style: Q(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), D(Oe, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: Q({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : R(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4), [
        [we, !r.value]
      ])
    ]));
  }
}), jm = ["aria-pressed", "aria-label", "title"], Om = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lm = ["d"], Vm = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Dm = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Tm = ["href"], Fm = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Em = ["d"], Im = ["aria-label", "onClick"], Nm = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rm = ["d"], Hm = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Um = ["d"], Km = {
  key: 0,
  class: "flex flex-col gap-1"
}, qm = ["onClick"], Gm = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wm = ["d"], Zm = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Jm = /* @__PURE__ */ z({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(!1), i = q(!1), u = y(
      () => a.catalog.filter((k) => !a.items.some((m) => m.id === k.id))
    );
    function d(k) {
      r(
        "update:items",
        a.items.filter((m) => m.id !== k)
      );
    }
    function f(k) {
      r("update:items", [...a.items, k]), i.value = !1;
    }
    return (k, m) => (t(), n(P, null, [
      U(Am, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: m[3] || (m[3] = (g) => r("hide"))
      }, {
        actions: V(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: m[0] || (m[0] = (g) => s.value = !s.value)
          }, [
            (t(), n("svg", Om, [
              o("path", {
                d: b(oe)(s.value ? "check" : "pencil")
              }, null, 8, Lm)
            ]))
          ], 8, jm)
        ]),
        default: V(() => [
          e.items.length === 0 ? (t(), n("div", Vm, [
            m[7] || (m[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            U(le, {
              size: "sm",
              variant: "outline",
              onClick: m[1] || (m[1] = (g) => i.value = !0)
            }, {
              default: V(() => [...m[6] || (m[6] = [
                G("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Dm, [
            (t(!0), n(P, null, L(e.items, (g) => (t(), n("div", {
              key: g.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: g.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Fm, [
                  o("path", {
                    d: b(oe)(g.icon)
                  }, null, 8, Em)
                ])),
                G(" " + c(g.label), 1)
              ], 8, Tm),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${g.label}`,
                onClick: (M) => d(g.id)
              }, [
                (t(), n("svg", Nm, [
                  o("path", {
                    d: b(oe)("x")
                  }, null, 8, Rm)
                ]))
              ], 8, Im)) : _("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: m[2] || (m[2] = (g) => i.value = !0)
            }, [
              (t(), n("svg", Hm, [
                o("path", {
                  d: b(oe)("plus")
                }, null, 8, Um)
              ])),
              m[8] || (m[8] = G(" Add ", -1))
            ])) : _("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      U(lt, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: m[5] || (m[5] = (g) => i.value = !1)
      }, {
        footer: V(() => [
          U(le, {
            variant: "outline",
            onClick: m[4] || (m[4] = (g) => i.value = !1)
          }, {
            default: V(() => [...m[9] || (m[9] = [
              G("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: V(() => [
          u.value.length ? (t(), n("ul", Km, [
            (t(!0), n(P, null, L(u.value, (g) => (t(), n("li", {
              key: g.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => f(g)
              }, [
                (t(), n("svg", Gm, [
                  o("path", {
                    d: b(oe)(g.icon)
                  }, null, 8, Wm)
                ])),
                G(" " + c(g.label), 1)
              ], 8, qm)
            ]))), 128))
          ])) : (t(), n("p", Zm, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Ym = { class: "mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6" }, Xm = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Qm = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, ep = { class: "relative w-full max-w-xl" }, tp = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ap = ["d"], np = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, lp = ["data-slot"], op = { class: "px-5 py-4" }, sp = { class: "mb-3 text-sm font-semibold" }, rp = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, ip = ["href"], up = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, dp = ["d"], cp = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, Nk = /* @__PURE__ */ z({
  __name: "DirectoryPage",
  props: {
    title: {},
    description: { default: null },
    searchPlaceholder: { default: "Search" },
    sections: {}
  },
  setup(e) {
    const l = e, a = q(""), r = y(() => {
      const s = a.value.trim().toLowerCase();
      return l.sections.map((i) => ({
        ...i,
        links: s ? i.links.filter((u) => u.label.toLowerCase().includes(s)) : i.links
      })).filter((i) => i.links.length > 0);
    });
    return (s, i) => (t(), n("div", Ym, [
      o("header", null, [
        o("h1", Xm, c(e.title), 1),
        e.description ? (t(), n("p", Qm, c(e.description), 1)) : _("", !0)
      ]),
      o("div", ep, [
        (t(), n("svg", tp, [
          o("path", {
            d: b(oe)("search")
          }, null, 8, ap)
        ])),
        U($e, {
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => a.value = u),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      r.value.length ? (t(), n("div", np, [
        (t(!0), n(P, null, L(r.value, (u) => (t(), n("section", {
          key: u.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${u.key}`
        }, [
          o("div", op, [
            o("h2", sp, c(u.title), 1),
            o("div", rp, [
              (t(!0), n(P, null, L(u.links, (d) => (t(), n("a", {
                key: d.href + d.label,
                href: d.href,
                class: "text-primary inline-flex items-center gap-2 text-sm hover:underline"
              }, [
                (t(), n("svg", up, [
                  o("path", {
                    d: b(oe)(d.icon)
                  }, null, 8, dp)
                ])),
                G(" " + c(d.label), 1)
              ], 8, ip))), 128))
            ])
          ])
        ], 8, lp))), 128))
      ])) : (t(), n("p", cp, ' Nothing matches "' + c(a.value) + '". ', 1))
    ]));
  }
}), fp = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, mp = { class: "flex flex-1 flex-col gap-1 p-4" }, pp = { class: "text-muted-foreground relative text-xs font-medium" }, vp = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, gp = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, hp = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, bp = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, Rk = /* @__PURE__ */ z({
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
    return (a, r) => (t(), n("div", fp, [
      o("div", mp, [
        o("p", pp, c(e.label), 1),
        e.loading ? (t(), D(Oe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", vp, " Could not load ")) : (t(), n("span", gp, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(Qt, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", hp, c(e.description), 1)) : _("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", bp, [
        U(Xe, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : _("", !0)
    ]));
  }
}), xp = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, yp = { class: "flex flex-col gap-1 p-4" }, kp = { class: "flex items-start justify-between gap-2" }, $p = { class: "text-sm font-medium" }, wp = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, _p = { class: "mt-1 flex flex-wrap items-center gap-2" }, Cp = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Mp = {
  key: 0,
  class: "-mb-px"
}, Ze = /* @__PURE__ */ z({
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
    return (i, u) => (t(), n("div", xp, [
      o("div", yp, [
        o("div", kp, [
          o("p", $p, c(e.label), 1),
          R(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", wp, c(e.caption), 1)) : _("", !0),
        o("div", _p, [
          e.loading ? (t(), D(Oe, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Cp, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: j(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : _("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Mp, [
        U(Xe, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : _("", !0)
    ]));
  }
}), Sp = { class: "relative flex flex-col gap-2" }, Bp = ["aria-label"], zp = ["onMouseenter"], Pp = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Ap = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, jp = { class: "truncate" }, Op = { class: "text-sm font-semibold tabular-nums" }, Hk = /* @__PURE__ */ z({
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
    ], r = y(() => l.segments.reduce((k, m) => k + Math.max(0, m.value), 0)), s = y(() => Math.max(l.total ?? r.value, r.value, 1)), i = y(
      () => l.segments.map((k, m) => {
        const g = Math.max(0, k.value) / s.value;
        return {
          ...k,
          color: k.color ?? a[m % a.length],
          share: g,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: k.value > 0 ? `max(2px, ${(g * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (k) => l.format ? l.format(k) : new Intl.NumberFormat().format(k), d = q(null), f = (k) => `${(k * 100).toFixed(k > 0 && k < 0.01 ? 1 : 0)}%`;
    return (k, m) => (t(), n("div", Sp, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: Q({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((g) => `${g.label} ${u(g.value)}`).join(", ")
      }, [
        (t(!0), n(P, null, L(i.value, (g, M) => (t(), n("span", {
          key: M,
          class: j(["h-full transition-all", [
            M === 0 ? "rounded-l-full" : "",
            M === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: Q({
            width: g.width,
            background: g.color,
            opacity: d.value === null || d.value === M ? 1 : 0.4
          }),
          onMouseenter: ($) => d.value = M,
          onMouseleave: m[0] || (m[0] = ($) => d.value = null)
        }, null, 46, zp))), 128))
      ], 12, Bp),
      e.showLegend ? (t(), n("div", Pp, [
        (t(!0), n(P, null, L(i.value, (g, M) => (t(), n("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", Ap, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: g.color })
            }, null, 4),
            o("span", jp, c(g.label), 1)
          ]),
          o("span", Op, c(u(g.value)), 1)
        ]))), 128))
      ])) : _("", !0),
      d.value !== null ? (t(), D(Ke, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: f(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : _("", !0)
    ]));
  }
}), Lp = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Vp = ["data-heading"], Dp = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Tp = { class: "text-muted-foreground truncate" }, Fp = ["aria-label"], Uk = /* @__PURE__ */ z({
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
        const u = i.bar.segments.reduce((f, k) => f + Math.max(0, k.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
        return {
          ...i,
          segments: i.bar.segments.map((f) => ({
            ...f,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: f.value > 0 ? `max(2px, ${(Math.max(0, f.value) / d * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, u) => (t(), n("div", Lp, [
      (t(!0), n(P, null, L(s.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: j(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, c(d.label), 3)) : (t(), n("div", Dp, [
          o("span", Tp, c(d.label), 1),
          o("span", {
            class: j(["shrink-0 font-medium tabular-nums", d.tone ? a[d.tone] : "text-foreground"])
          }, c(d.value), 3)
        ])),
        d.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), n(P, null, L(d.segments, (f, k) => (t(), n("span", {
            key: k,
            class: j(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: Q({ width: f.width })
          }, null, 6))), 128))
        ], 8, Fp)) : _("", !0)
      ], 8, Vp))), 128))
    ]));
  }
}), Ep = {
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
}, Ip = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Np(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Rp(e, l) {
  return l || (e ? Ep[Np(e)] ?? "neutral" : "neutral");
}
function Hp(e, l) {
  return Ip[Rp(e, l)];
}
const me = /* @__PURE__ */ z({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = y(() => Hp(l.status, l.tone));
    return (r, s) => (t(), D(Ie, {
      variant: a.value,
      class: j(l.class)
    }, {
      default: V(() => [
        R(r.$slots, "default", {}, () => [
          G(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Up = ["data-layout"], Kp = ["src", "alt"], qp = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Gp = ["src"], Wp = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Zp = ["onMouseenter"], Jp = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Yp = { class: "min-w-0" }, Xp = { class: "truncate text-sm font-medium" }, Qp = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, ev = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, tv = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, av = { class: "min-w-0" }, nv = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, lv = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, ov = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sv = ["d"], rv = ["aria-label"], iv = /* @__PURE__ */ z({
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
    function u(h) {
      if (typeof h != "string")
        return null;
      const v = h.trim();
      return v === "" ? null : /^(https?:)?\/\//i.test(v) ? v : null;
    }
    const d = y(() => {
      const h = [r.item.image, ...r.item.images ?? []].map(u).filter((v) => v !== null);
      return [...new Set(h)];
    }), f = y(() => d.value[i.value] ?? d.value[0] ?? null), k = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((h) => h[0]?.toUpperCase() ?? "").join("")
    ), m = y(() => {
      const h = r.item.progress;
      if (!h)
        return null;
      const v = Math.max(h.total ?? 100, h.value, 1);
      return `${Math.min(100, Math.max(0, h.value / v * 100)).toFixed(2)}%`;
    }), g = y(() => d.value.length > 1 ? d.value[1] : null), M = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), $ = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function w(h) {
      h.stopPropagation(), s("cart", r.item.key);
    }
    return (h, v) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: j(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: v[0] || (v[0] = (C) => s("select", e.item.key)),
      onKeydown: v[1] || (v[1] = ia(ce((C) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: v[2] || (v[2] = (C) => i.value = 0)
    }, [
      o("div", {
        class: j([
          "bg-muted relative overflow-hidden",
          e.layout === "list" ? "aspect-square w-20 shrink-0 sm:w-24" : "aspect-[4/3] w-full"
        ])
      }, [
        f.value ? (t(), n("img", {
          key: 0,
          src: f.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, Kp)) : (t(), n("span", qp, c(k.value), 1)),
        e.layout === "grid" && g.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: g.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Gp)) : _("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", Wp, [
          (t(!0), n(P, null, L(d.value, (C, p) => (t(), n("span", {
            key: p,
            class: j(["size-1.5 rounded-full", p === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (x) => i.value = p
          }, null, 42, Zp))), 128))
        ])) : _("", !0)
      ], 2),
      o("div", {
        class: j(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Jp, [
          o("div", Yp, [
            o("p", Xp, c(e.item.label), 1),
            e.item.caption ? (t(), n("p", Qp, c(e.item.caption), 1)) : _("", !0),
            e.item.facts?.length ? (t(), n("p", ev, c(e.item.facts.join(" · ")), 1)) : _("", !0)
          ]),
          e.item.status ? (t(), D(me, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : _("", !0)
        ]),
        o("div", tv, [
          o("div", av, [
            e.item.price ? (t(), n("p", nv, c(e.item.price), 1)) : _("", !0),
            $.value ? (t(), n("p", lv, c($.value), 1)) : _("", !0)
          ]),
          M.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: w
          }, [
            (t(), n("svg", ov, [
              o("path", {
                d: b(oe)("cart")
              }, null, 8, sv)
            ]))
          ])) : _("", !0)
        ]),
        m.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: j(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: Q({ width: m.value })
          }, null, 6)
        ], 8, rv)) : _("", !0)
      ], 2)
    ], 42, Up));
  }
}), uv = { class: "flex flex-col gap-4" }, dv = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, cv = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, fv = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, mv = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, pv = ["d"], vv = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, gv = ["aria-pressed"], hv = ["aria-pressed"], bv = {
  key: 0,
  class: "flex flex-col gap-2"
}, xv = ["aria-label"], yv = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, kv = ["aria-pressed", "onClick"], $v = ["aria-label"], wv = { class: "text-muted-foreground mr-1 text-xs font-medium" }, _v = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Cv = ["data-slot"], Mv = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Sv = { class: "text-muted-foreground text-xs tabular-nums" }, Bv = { class: "flex items-center gap-2" }, zv = ["disabled"], Pv = ["disabled"], ea = /* @__PURE__ */ z({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(""), i = Je(e, "modelValue"), u = qe({}), d = qe({});
    re(s, () => g());
    function f(I) {
      const Y = I.trim();
      if (Y === "")
        return null;
      const F = Number(Y);
      return Number.isFinite(F) ? F : null;
    }
    function k() {
      const I = {};
      for (const [Y, F] of Object.entries(d))
        I[Y] = { min: f(F.min), max: f(F.max) };
      return I;
    }
    function m() {
      return { query: s.value, selected: { ...u }, ranges: k() };
    }
    function g() {
      r("filter", m());
    }
    function M(I, Y) {
      u[I] = u[I] === Y ? null : Y, g();
    }
    function $(I) {
      return d[I] ?? { min: "", max: "" };
    }
    function w(I, Y, F) {
      const T = d[I] ?? { min: "", max: "" };
      d[I] = { ...T, [Y]: F }, g();
    }
    function h(I) {
      I.key === "Enter" && (I.preventDefault(), r("scan", s.value.trim()));
    }
    const v = y(() => a.facets.filter((I) => (I.kind ?? "chips") === "chips")), C = y(() => a.facets.filter((I) => I.kind === "range")), p = y(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), x = q(1);
    re(
      () => a.items.map((I) => I.key).join(","),
      () => {
        x.value = 1;
      }
    );
    const S = y(() => {
      const I = a.pageSize;
      return !I || I < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / I));
    }), B = y(() => {
      const I = a.pageSize;
      if (!I || I < 1)
        return a.items;
      const Y = (x.value - 1) * I;
      return a.items.slice(Y, Y + I);
    });
    function K(I) {
      x.value = Math.min(S.value, Math.max(1, I));
    }
    return (I, Y) => (t(), n("div", uv, [
      p.value ? (t(), n("div", dv, [
        o("div", cv, [
          e.searchable ? (t(), n("div", fv, [
            (t(), n("svg", mv, [
              o("path", {
                d: b(oe)("search")
              }, null, 8, pv)
            ])),
            U($e, {
              modelValue: s.value,
              "onUpdate:modelValue": Y[0] || (Y[0] = (F) => s.value = F),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: h
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : _("", !0),
          R(I.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", vv, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: Y[1] || (Y[1] = (F) => i.value = "grid")
            }, " Tiles ", 10, gv),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: Y[2] || (Y[2] = (F) => i.value = "list")
            }, " List ", 10, hv)
          ])) : _("", !0)
        ]),
        v.value.length || C.value.length ? (t(), n("div", bv, [
          (t(!0), n(P, null, L(v.value, (F) => (t(), n("div", {
            key: F.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": F.label ?? F.key
          }, [
            F.label ? (t(), n("span", yv, c(F.label), 1)) : _("", !0),
            (t(!0), n(P, null, L(F.options ?? [], (T) => (t(), n("button", {
              key: T.value,
              type: "button",
              class: j([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[F.key] === T.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[F.key] === T.value ? "true" : "false",
              onClick: (A) => M(F.key, T.value)
            }, c(T.label), 11, kv))), 128))
          ], 8, xv))), 128)),
          (t(!0), n(P, null, L(C.value, (F) => (t(), n("div", {
            key: F.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": F.label ?? F.key,
            "data-slot": "catalog-range"
          }, [
            o("span", wv, c(F.label ?? F.key), 1),
            U($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${F.label ?? F.key} from`,
              "model-value": $(F.key).min,
              "onUpdate:modelValue": (T) => w(F.key, "min", String(T))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            Y[7] || (Y[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            U($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${F.label ?? F.key} to`,
              "model-value": $(F.key).max,
              "onUpdate:modelValue": (T) => w(F.key, "max", String(T))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, $v))), 128))
        ])) : _("", !0)
      ])) : _("", !0),
      e.items.length === 0 ? (t(), n("p", _v, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: j(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(P, null, L(B.value, (F) => (t(), D(iv, {
          key: F.key,
          item: F,
          layout: i.value,
          onSelect: Y[3] || (Y[3] = (T) => r("select", T)),
          onCart: Y[4] || (Y[4] = (T) => r("cart", T))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Cv)),
      e.pageSize && S.value > 1 ? (t(), n("div", Mv, [
        o("p", Sv, " Page " + c(x.value) + " of " + c(S.value), 1),
        o("div", Bv, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: x.value <= 1,
            onClick: Y[5] || (Y[5] = (F) => K(x.value - 1))
          }, " Previous ", 8, zv),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: x.value >= S.value,
            onClick: Y[6] || (Y[6] = (F) => K(x.value + 1))
          }, " Next ", 8, Pv)
        ])
      ])) : _("", !0)
    ]));
  }
}), Av = ["aria-label"], jv = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Ov = { class: "min-w-0" }, Lv = { class: "text-base font-semibold" }, Vv = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Dv = { class: "flex shrink-0 items-center gap-2" }, Tv = { class: "min-h-0 flex-1 overflow-y-auto" }, Fv = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, kt = /* @__PURE__ */ z({
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
    let i = null, u = "";
    function d(f) {
      if (!a.open)
        return;
      if (f.key === "Escape") {
        f.stopPropagation(), r("close");
        return;
      }
      if (f.key !== "Tab" || !s.value)
        return;
      const k = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (k.length === 0)
        return;
      const m = k[0], g = k[k.length - 1];
      f.shiftKey && document.activeElement === m ? (f.preventDefault(), g.focus()) : !f.shiftKey && document.activeElement === g && (f.preventDefault(), m.focus());
    }
    return re(
      () => a.open,
      async (f) => {
        if (f) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await ke(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), fe(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (f, k) => (t(), D(Le, { to: "body" }, [
      U(Se, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: V(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: k[0] || (k[0] = (m) => r("close"))
          })) : _("", !0)
        ]),
        _: 1
      }),
      U(Se, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: V(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: j(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", jv, [
              o("div", Ov, [
                o("h2", Lv, c(e.title), 1),
                e.description ? (t(), n("p", Vv, c(e.description), 1)) : _("", !0)
              ]),
              o("div", Dv, [
                R(f.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: k[1] || (k[1] = (m) => r("close"))
                }, [...k[2] || (k[2] = [
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
            o("div", Tv, [
              R(f.$slots, "default")
            ]),
            f.$slots.footer ? (t(), n("footer", Fv, [
              R(f.$slots, "footer")
            ])) : _("", !0)
          ], 10, Av)) : _("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), Ev = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Iv = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Nv = ["src", "alt"], Rv = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Hv = ["src"], Uv = { class: "flex items-start justify-between gap-3" }, Kv = { class: "text-lg font-semibold tabular-nums" }, qv = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Gv = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Wv = { class: "grid grid-cols-2 gap-3" }, Zv = { class: "flex flex-col gap-2" }, Jv = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, Kk = /* @__PURE__ */ z({
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
      for (const M of m)
        g = g * 31 + M.charCodeAt(0) >>> 0;
      return g;
    }
    function i(m, g) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(($, w) => ({
        label: $,
        value: Math.max(0, Math.round(m + Math.sin(w + g) * m * 0.18))
      }));
    }
    const u = y(() => a.item?.kind === "unit"), d = y(() => {
      const m = a.item;
      if (!m)
        return [];
      const g = m.stock ?? m.progress?.value ?? m.metrics?.price ?? m.metrics?.rent ?? 12;
      return i(Number(g) || 12, s(m.key) % 7);
    }), f = y(() => {
      const m = a.item;
      if (!m)
        return [];
      const g = m.progress?.value ?? (m.status === "occupied" ? 80 : 20);
      return i(Number(g) || 20, s(m.key) % 5 + 1);
    }), k = y(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (m, g) => (t(), D(kt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: g[1] || (g[1] = (M) => r("close"))
    }, ua({
      default: V(() => [
        e.item ? (t(), n("div", Ev, [
          o("div", Iv, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Nv)) : _("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Rv, [
            (t(!0), n(P, null, L(e.item.images, (M, $) => (t(), n("img", {
              key: $,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Hv))), 128))
          ])) : _("", !0),
          o("div", Uv, [
            o("div", null, [
              o("p", Kv, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", qv, c(e.item.stock) + " in stock ", 1)) : _("", !0)
            ]),
            e.item.status ? (t(), D(me, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : _("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", Gv, c(e.item.facts.join(" · ")), 1)) : _("", !0),
          o("div", Wv, [
            U(Ze, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? f.value : d.value
            }, null, 8, ["label", "value", "series"]),
            U(Ze, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", Zv, [
            o("p", Jv, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            U(Xe, {
              data: u.value ? f.value : d.value,
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
        fn: V(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: g[0] || (g[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), Yv = { class: "flex flex-col gap-10" }, Xv = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Qv = { class: "flex flex-col gap-3" }, eg = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, tg = ["src", "alt"], ag = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, ng = ["aria-label", "aria-pressed", "onClick"], lg = ["src"], og = { class: "flex flex-col gap-5" }, sg = { class: "flex flex-wrap items-start justify-between gap-3" }, rg = { class: "min-w-0" }, ig = { class: "text-2xl font-semibold tracking-tight" }, ug = { class: "text-muted-foreground mt-1 text-sm" }, dg = { class: "text-2xl font-semibold tabular-nums" }, cg = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, fg = { class: "grid grid-cols-2 gap-3 text-sm" }, mg = {
  key: 0,
  class: "rounded-lg border p-3"
}, pg = { class: "mt-1 font-medium" }, vg = { class: "rounded-lg border p-3" }, gg = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, hg = { class: "mt-1 font-medium" }, bg = { class: "flex flex-col gap-4" }, xg = { class: "grid gap-4 sm:grid-cols-2" }, yg = { class: "bg-card rounded-lg border p-4" }, kg = { class: "mb-3 text-sm font-medium" }, $g = /* @__PURE__ */ z({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s($) {
      let w = 0;
      for (const h of $)
        w = w * 31 + h.charCodeAt(0) >>> 0;
      return w;
    }
    function i($, w) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((v, C) => ({
        label: v,
        value: Math.max(0, Math.round($ + Math.sin(C + w) * $ * 0.18))
      }));
    }
    const u = y(() => a.item.kind === "unit"), d = y(() => {
      const $ = [a.item.image, ...a.item.images ?? []].filter(
        (w) => typeof w == "string" && w !== ""
      );
      return [...new Set($)];
    }), f = q(0), k = y(() => {
      const $ = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number($) || 12, s(a.item.key) % 7);
    }), m = y(() => {
      const $ = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number($) || 20, s(a.item.key) % 5 + 1);
    }), g = y(() => u.value ? m.value : k.value), M = y(() => !u.value && a.item.status !== "out-of-stock");
    return ($, w) => (t(), n("div", Yv, [
      o("div", Xv, [
        o("div", Qv, [
          o("div", eg, [
            d.value[f.value] ? (t(), n("img", {
              key: 0,
              src: d.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, tg)) : _("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", ag, [
            (t(!0), n(P, null, L(d.value, (h, v) => (t(), n("button", {
              key: h,
              type: "button",
              class: j(["size-16 shrink-0 overflow-hidden rounded-md border", v === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${v + 1}`,
              "aria-pressed": v === f.value ? "true" : "false",
              onClick: (C) => f.value = v
            }, [
              o("img", {
                src: h,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, lg)
            ], 10, ng))), 128))
          ])) : _("", !0)
        ]),
        o("div", og, [
          o("div", sg, [
            o("div", rg, [
              o("h1", ig, c(e.item.label), 1),
              o("p", ug, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D(me, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : _("", !0)
          ]),
          o("p", dg, c(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", cg, c(e.item.facts.join(" · ")), 1)) : _("", !0),
          o("dl", fg, [
            e.item.sku ? (t(), n("div", mg, [
              w[1] || (w[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", pg, c(e.item.sku), 1)
            ])) : _("", !0),
            o("div", vg, [
              o("dt", gg, c(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", hg, c(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: w[0] || (w[0] = (h) => r("cart", e.item.key))
          }, " Add to cart ")) : _("", !0)
        ])
      ]),
      o("section", bg, [
        w[2] || (w[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", xg, [
          U(Ze, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: g.value
          }, null, 8, ["label", "value", "series"]),
          U(Ze, {
            label: "Price",
            value: e.item.price ?? "-",
            series: k.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", yg, [
          o("p", kg, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          U(qc, {
            data: g.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), wg = { class: "mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6" }, _g = ["href"], qk = /* @__PURE__ */ z({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" }
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = l;
    return (r, s) => (t(), n("div", wg, [
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
        G(" " + c(e.backLabel), 1)
      ], 8, _g),
      U($g, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ]));
  }
});
function je() {
  return { query: "", selected: {}, ranges: {} };
}
function Cg(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Mg(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function ta(e, l) {
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
    if (!Mg(Cg(e, r), s))
      return !1;
  return !0;
}
function Gk(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function jt(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Sg = { class: "flex flex-col gap-6 p-4" }, Bg = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, zg = { class: "text-sm font-semibold" }, Pg = { class: "flex flex-wrap items-center gap-1.5" }, Ag = ["aria-pressed", "onClick"], jg = { class: "text-sm font-semibold" }, Og = { class: "flex flex-wrap items-center gap-1.5" }, Lg = { key: 0 }, Vg = /* @__PURE__ */ z({
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
    const a = e, r = l, s = q(""), i = qe({}), u = qe({}), d = y(
      () => a.facets.filter((S) => (S.kind ?? "chips") === "chips")
    ), f = y(() => a.facets.filter((S) => S.kind === "range"));
    function k(S) {
      return S == null ? "" : String(S);
    }
    function m() {
      s.value = a.applied.query ?? "";
      for (const S of Object.keys(i))
        delete i[S];
      for (const [S, B] of Object.entries(a.applied.selected ?? {}))
        i[S] = B;
      for (const S of Object.keys(u))
        delete u[S];
      for (const [S, B] of Object.entries(a.applied.ranges ?? {}))
        u[S] = { min: k(B.min), max: k(B.max) };
    }
    re(
      () => a.open,
      (S) => {
        S && m();
      }
    );
    function g(S) {
      const B = S.trim();
      if (B === "")
        return null;
      const K = Number(B);
      return Number.isFinite(K) ? K : null;
    }
    function M() {
      const S = {};
      for (const [B, K] of Object.entries(u))
        S[B] = { min: g(K.min), max: g(K.max) };
      return S;
    }
    function $() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: M()
      };
    }
    const w = y(() => {
      let S = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const B of Object.values(i))
        B && (S += 1);
      for (const B of Object.values(M()))
        (B.min !== null || B.max !== null) && (S += 1);
      return S;
    });
    function h(S, B) {
      i[S] = i[S] === B ? null : B;
    }
    function v(S) {
      return u[S] ?? { min: "", max: "" };
    }
    function C(S, B, K) {
      const I = u[S] ?? { min: "", max: "" };
      u[S] = { ...I, [B]: K };
    }
    function p() {
      r("apply", $());
    }
    function x() {
      s.value = "";
      for (const S of Object.keys(i))
        i[S] = null;
      for (const S of Object.keys(u))
        u[S] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...je(), query: a.applied.query } : je()
      );
    }
    return (S, B) => (t(), D(kt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: B[2] || (B[2] = (K) => r("close"))
    }, {
      footer: V(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: x
        }, " Reset all "),
        U(le, {
          variant: "outline",
          size: "sm",
          onClick: B[1] || (B[1] = (K) => r("close"))
        }, {
          default: V(() => [...B[5] || (B[5] = [
            G("Cancel", -1)
          ])]),
          _: 1
        }),
        U(le, {
          size: "sm",
          onClick: p
        }, {
          default: V(() => [
            B[6] || (B[6] = G(" Apply", -1)),
            w.value ? (t(), n("span", Lg, " (" + c(w.value) + ")", 1)) : _("", !0)
          ]),
          _: 1
        })
      ]),
      default: V(() => [
        o("div", Sg, [
          e.hideSearch ? _("", !0) : (t(), n("label", Bg, [
            B[3] || (B[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            U($e, {
              modelValue: s.value,
              "onUpdate:modelValue": B[0] || (B[0] = (K) => s.value = K),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(P, null, L(d.value, (K) => (t(), n("section", {
            key: K.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", zg, c(K.label ?? K.key), 1),
            o("div", Pg, [
              (t(!0), n(P, null, L(K.options ?? [], (I) => (t(), n("button", {
                key: I.value,
                type: "button",
                class: j([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[K.key] === I.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[K.key] === I.value ? "true" : "false",
                onClick: (Y) => h(K.key, I.value)
              }, c(I.label), 11, Ag))), 128))
            ])
          ]))), 128)),
          (t(!0), n(P, null, L(f.value, (K) => (t(), n("section", {
            key: K.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", jg, c(K.label ?? K.key), 1),
            o("div", Og, [
              U($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${K.label ?? K.key} from`,
                "model-value": v(K.key).min,
                "onUpdate:modelValue": (I) => C(K.key, "min", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              B[4] || (B[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              U($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${K.label ?? K.key} to`,
                "model-value": v(K.key).max,
                "onUpdate:modelValue": (I) => C(K.key, "max", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), Dg = { class: "mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6" }, Tg = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, Fg = ["aria-selected", "onClick"], Eg = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, Ig = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, Ng = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, Rg = ["aria-pressed"], Hg = ["aria-pressed"], Wk = /* @__PURE__ */ z({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Pe({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Pe(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(a.tabs[0]?.key ?? ""), i = Je(e, "layout"), u = q({}), d = q(!1);
    re(
      () => a.tabs.map((h) => h.key).join(","),
      (h) => {
        h.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function f(h) {
      return u.value[h] ?? je();
    }
    const k = y(
      () => a.tabs.find((h) => h.key === s.value) ?? a.tabs[0] ?? null
    ), m = y(
      () => k.value ? f(k.value.key) : je()
    ), g = y(() => {
      const h = k.value;
      return h ? h.items.filter((v) => ta(v, f(h.key))) : [];
    });
    function M(h) {
      const v = k.value?.key;
      v && (u.value = {
        ...u.value,
        [v]: { ...f(v), query: h }
      });
    }
    function $() {
      const h = k.value?.key;
      h && (u.value = { ...u.value, [h]: je() });
    }
    function w(h) {
      const v = k.value?.key;
      v && (u.value = { ...u.value, [v]: h }, d.value = !1);
    }
    return (h, v) => (t(), n(P, null, [
      o("div", Dg, [
        U(Me, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", Tg, [
          (t(!0), n(P, null, L(e.tabs, (C) => (t(), n("button", {
            key: C.key,
            type: "button",
            class: j([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === C.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === C.key ? "true" : "false",
            onClick: (p) => s.value = C.key
          }, c(C.label), 11, Fg))), 128))
        ])) : _("", !0),
        o("div", Eg, [
          U($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": m.value.query,
            type: "search",
            placeholder: k.value?.searchPlaceholder ?? "Search…",
            "aria-label": k.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": v[0] || (v[0] = (C) => M(String(C)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b(jt)(m.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: $
          }, " Clear ")) : _("", !0),
          (k.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: v[1] || (v[1] = (C) => d.value = !0)
          }, [
            v[8] || (v[8] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            v[9] || (v[9] = G(" Filters ", -1)),
            b(jt)(m.value) ? (t(), n("span", Ig, " on ")) : _("", !0)
          ])) : _("", !0),
          o("div", Ng, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: v[2] || (v[2] = (C) => i.value = "grid")
            }, " Tiles ", 10, Rg),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: v[3] || (v[3] = (C) => i.value = "list")
            }, " List ", 10, Hg)
          ])
        ]),
        U(ea, {
          layout: i.value,
          "onUpdate:layout": v[4] || (v[4] = (C) => i.value = C),
          "page-size": e.pageSize,
          items: g.value,
          onSelect: v[5] || (v[5] = (C) => r("select", C)),
          onCart: v[6] || (v[6] = (C) => r("cart", C))
        }, null, 8, ["layout", "page-size", "items"])
      ]),
      U(Vg, {
        open: d.value,
        title: k.value?.filterTitle ?? "Filters",
        "search-placeholder": k.value?.searchPlaceholder ?? "Search…",
        facets: k.value?.facets ?? [],
        applied: m.value,
        onClose: v[7] || (v[7] = (C) => d.value = !1),
        onApply: w,
        onReset: $
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), Ug = { class: "mx-auto flex w-full max-w-6xl flex-col gap-10 p-4 sm:p-6" }, Kg = { class: "flex flex-col gap-4" }, qg = { class: "flex flex-col gap-4" }, Zk = /* @__PURE__ */ z({
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
    const l = e, a = q(je()), r = y(
      () => l.cards.filter((s) => ta(s, a.value))
    );
    return (s, i) => (t(), n("div", Ug, [
      U(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", Kg, [
        U(Me, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        U(ea, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: r.value,
          onFilter: i[0] || (i[0] = (u) => a.value = u)
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", qg, [
        U(Me, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        U(Un, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": V(({ value: u }) => [
            U(me, {
              status: String(u)
            }, {
              default: V(() => [
                G(c(u), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ]));
  }
}), Gg = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Wg = { class: "text-sm font-medium" }, Zg = ["width", "height", "aria-label"], Jg = { class: "flex items-center gap-2" }, Yg = /* @__PURE__ */ z({
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
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function f(h) {
      const v = s.value;
      if (!v)
        return null;
      const C = v.getBoundingClientRect(), p = v.width / C.width, x = v.height / C.height;
      return {
        x: (h.clientX - C.left) * p,
        y: (h.clientY - C.top) * x
      };
    }
    function k(h) {
      a.disabled || (i.value = !0, u = f(h), s.value?.setPointerCapture(h.pointerId));
    }
    function m(h) {
      if (!i.value || a.disabled)
        return;
      const v = d(), C = f(h);
      !v || !C || !u || (v.strokeStyle = "#111827", v.lineWidth = 2.4, v.lineCap = "round", v.lineJoin = "round", v.beginPath(), v.moveTo(u.x, u.y), v.lineTo(C.x, C.y), v.stroke(), u = C);
    }
    function g() {
      i.value = !1, u = null;
    }
    function M() {
      const h = s.value, v = d();
      !h || !v || (v.clearRect(0, 0, h.width, h.height), r("clear"));
    }
    function $() {
      const h = s.value;
      h && r("save", h.toDataURL("image/png"));
    }
    function w() {
      const h = s.value, v = d();
      !h || !v || (v.fillStyle = "#ffffff", v.fillRect(0, 0, h.width, h.height));
    }
    return ue(w), fe(() => {
      i.value = !1;
    }), (h, v) => (t(), n("div", Gg, [
      o("p", Wg, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: j(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(k, ["prevent"]),
        onPointermove: ce(m, ["prevent"]),
        onPointerup: ce(g, ["prevent"]),
        onPointerleave: ce(g, ["prevent"])
      }, null, 42, Zg),
      o("div", Jg, [
        U(le, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: V(() => [...v[0] || (v[0] = [
            G(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        U(le, {
          size: "sm",
          disabled: e.disabled,
          onClick: $
        }, {
          default: V(() => [...v[1] || (v[1] = [
            G("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Xg = { class: "mx-auto flex w-full max-w-6xl flex-col gap-10 p-4 sm:p-6" }, Qg = { class: "grid gap-8 lg:grid-cols-2" }, eh = { class: "flex flex-col gap-3" }, th = { class: "text-muted-foreground text-xs" }, ah = {
  key: 0,
  class: "flex flex-col gap-3"
}, nh = { class: "flex flex-wrap gap-3" }, lh = ["onClick"], oh = ["src", "alt"], sh = {
  key: 1,
  class: "flex flex-col gap-3"
}, rh = { class: "flex flex-wrap gap-3" }, ih = ["onClick"], uh = ["src", "alt"], dh = {
  key: 2,
  class: "flex flex-col gap-4"
}, ch = { class: "flex flex-wrap items-center gap-2" }, fh = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, mh = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, ph = { class: "flex flex-col gap-2" }, vh = ["src"], gh = {
  key: 1,
  class: "text-sm text-neutral-400"
}, hh = ["src"], Jk = /* @__PURE__ */ z({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null }
  },
  setup(e) {
    const l = e, a = q([]), r = q([]), s = q(null), i = q(null), u = q(null), d = q(l.documents[0]?.key ?? "");
    function f(h) {
      try {
        const v = localStorage.getItem(h), C = v ? JSON.parse(v) : [];
        return Array.isArray(C) ? C : [];
      } catch {
        return [];
      }
    }
    ue(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), re(
      a,
      (h) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(h));
      },
      { deep: !0 }
    ), re(
      r,
      (h) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(h));
      },
      { deep: !0 }
    );
    function k(h) {
      const v = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: h
      };
      a.value = [v, ...a.value].slice(0, 8), s.value = v.id;
    }
    async function m(h, v) {
      await Hs(h), v(40);
      const C = await new Promise((p, x) => {
        const S = new FileReader();
        S.onload = () => p(String(S.result)), S.onerror = () => x(new Error("Could not read the file")), S.readAsDataURL(h);
      });
      return v(100), { value: C, name: h.name, size: h.size, url: C };
    }
    function g() {
      const h = u.value?.url ?? u.value?.value;
      if (!h)
        return;
      const v = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: h
      };
      r.value = [v, ...r.value].slice(0, 8), i.value = v.id;
    }
    const M = y(
      () => a.value.find((h) => h.id === s.value)?.dataUrl ?? null
    ), $ = y(
      () => r.value.find((h) => h.id === i.value)?.dataUrl ?? null
    ), w = y(() => {
      const h = l.documents.find((C) => C.key === d.value)?.document ?? l.documents[0]?.document ?? {}, v = {
        ...h?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...h,
        branding: v
      };
    });
    return (h, v) => (t(), n("div", Xg, [
      U(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", Qg, [
        U(Yg, {
          label: "Draw a signature",
          onSave: k
        }),
        o("div", eh, [
          v[2] || (v[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", th, c(b(Gt)), 1),
          U(Zt, {
            modelValue: u.value,
            "onUpdate:modelValue": v[0] || (v[0] = (C) => u.value = C),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: m
          }, null, 8, ["modelValue"]),
          U(le, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: g
          }, {
            default: V(() => [...v[1] || (v[1] = [
              G(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", ah, [
        U(Me, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", nh, [
          (t(!0), n(P, null, L(a.value, (C) => (t(), n("button", {
            key: C.id,
            type: "button",
            class: j(["rounded-md border p-2", C.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => s.value = C.id
          }, [
            o("img", {
              src: C.dataUrl,
              alt: C.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, oh)
          ], 10, lh))), 128))
        ])
      ])) : _("", !0),
      r.value.length ? (t(), n("section", sh, [
        U(Me, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", rh, [
          (t(!0), n(P, null, L(r.value, (C) => (t(), n("button", {
            key: C.id,
            type: "button",
            class: j(["rounded-md border p-2", C.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => i.value = C.id
          }, [
            o("img", {
              src: C.dataUrl,
              alt: C.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, uh)
          ], 10, ih))), 128))
        ])
      ])) : _("", !0),
      e.documents.length ? (t(), n("section", dh, [
        o("div", ch, [
          (t(!0), n(P, null, L(e.documents, (C) => (t(), D(le, {
            key: C.key,
            size: "sm",
            variant: d.value === C.key ? "default" : "outline",
            onClick: (p) => d.value = C.key
          }, {
            default: V(() => [
              G(c(C.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", fh, [
          U(oc, {
            document: w.value
          }, null, 8, ["document"]),
          o("div", mh, [
            o("div", ph, [
              v[3] || (v[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), n("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, vh)) : (t(), n("p", gh, "Draw and save a signature"))
            ]),
            $.value ? (t(), n("img", {
              key: 0,
              src: $.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, hh)) : _("", !0)
          ])
        ])
      ])) : _("", !0)
    ]));
  }
}), Yk = "panel.dashboard.hiddenWidgets", bh = /* @__PURE__ */ Symbol("dashboardHide"), xh = {
  key: 0,
  class: "lg:col-span-2",
  "data-slot": "dashboard-shortcuts"
}, Xk = /* @__PURE__ */ z({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = da(bh, null), r = q(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), s = q(!1);
    ue(() => {
      if (a?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const u = localStorage.getItem(l.storageKey);
        if (u) {
          const d = JSON.parse(u);
          Array.isArray(d) && (r.value = d.filter(
            (f) => typeof f?.id == "string" && typeof f.label == "string" && typeof f.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), re(
      r,
      (u) => {
        if (!(!s.value || !l.storageKey))
          try {
            localStorage.setItem(l.storageKey, JSON.stringify(u));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = y(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? _("", !0) : (t(), n("div", xh, [
      U(Jm, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (f) => r.value = f),
        onHide: d[1] || (d[1] = (f) => b(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), yh = ["aria-disabled"], kh = ["disabled"], $h = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, wh = ["d"], _h = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Ch = ["disabled"], Mh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Sh = ["d"], Bh = /* @__PURE__ */ z({
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
  setup(e, { emit: l }) {
    const a = Je(e, "modelValue"), r = l, s = y(() => a.value <= e.min), i = y(() => e.max !== null && a.value >= e.max);
    function u(d) {
      if (e.disabled)
        return;
      const f = a.value + d;
      f < e.min || e.max !== null && f > e.max || (a.value = f, d < 0 ? r("decrease", f) : r("increase", f));
    }
    return (d, f) => (t(), n("div", {
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
        onClick: f[0] || (f[0] = (k) => u(-1))
      }, [
        (t(), n("svg", $h, [
          o("path", {
            d: b(oe)("minus")
          }, null, 8, wh)
        ]))
      ], 8, kh),
      o("span", _h, c(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (k) => u(1))
      }, [
        (t(), n("svg", Mh, [
          o("path", {
            d: b(oe)("plus")
          }, null, 8, Sh)
        ]))
      ], 8, Ch)
    ], 8, yh));
  }
}), zh = { class: "divide-border flex flex-col divide-y" }, Ph = { class: "min-w-0" }, Ah = { class: "truncate text-sm font-medium" }, jh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Oh = { class: "flex shrink-0 items-center gap-2 text-sm" }, Lh = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Vh = {
  key: 2,
  class: "font-medium tabular-nums"
}, Dh = ["aria-label", "onClick"], Th = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Fh = ["d"], Eh = /* @__PURE__ */ z({
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
      const u = Number(i);
      return Number.isFinite(u) && u > 0 ? u : 1;
    }
    return (s, i) => (t(), n("div", zh, [
      (t(!0), n(P, null, L(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Ph, [
          o("p", Ah, c(u.label), 1),
          u.detail ? (t(), n("p", jh, c(u.detail), 1)) : _("", !0)
        ]),
        o("div", Oh, [
          e.editable ? (t(), D(Bh, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", Lh, " ×" + c(u.qty), 1)) : _("", !0),
          u.amount ? (t(), n("span", Vh, c(u.amount), 1)) : _("", !0),
          u.status ? (t(), D(me, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : _("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => a("remove", u.key)
          }, [
            (t(), n("svg", Th, [
              o("path", {
                d: b(oe)("trash")
              }, null, 8, Fh)
            ]))
          ], 8, Dh)) : _("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Ih = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Nh = { class: "border-b px-4 py-3" }, Rh = { class: "text-sm font-medium" }, Hh = { class: "flex-1 px-4 py-3" }, Uh = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Kh = { class: "text-foreground block font-medium" }, qh = { class: "mt-1 block" }, Gh = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Wh = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Zh = { class: "tabular-nums" }, Jh = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Yh = { class: "text-muted-foreground" }, Xh = {
  key: 0,
  class: "tabular-nums"
}, Qh = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, eb = { class: "text-muted-foreground" }, tb = { class: "tabular-nums" }, ab = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, nb = { class: "tabular-nums" }, lb = {
  key: 4,
  class: "pt-1"
}, Qk = /* @__PURE__ */ z({
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
    return (r, s) => (t(), n("aside", Ih, [
      o("header", Nh, [
        o("h2", Rh, c(e.title), 1)
      ]),
      o("div", Hh, [
        e.items.length === 0 ? (t(), n("p", Uh, [
          o("span", Kh, c(e.emptyTitle), 1),
          o("span", qh, c(e.emptyDescription), 1)
        ])) : (t(), D(Eh, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => a("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Gh, [
        e.subtotal ? (t(), n("div", Wh, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Zh, c(e.subtotal), 1)
        ])) : _("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Jh, [
          o("span", Yh, c(e.discountLabel), 1),
          e.discount ? (t(), n("span", Xh, c(e.discount), 1)) : _("", !0),
          R(r.$slots, "discount")
        ])) : _("", !0),
        e.tax ? (t(), n("div", Qh, [
          o("span", eb, c(e.taxLabel), 1),
          o("span", tb, c(e.tax), 1)
        ])) : _("", !0),
        e.total ? (t(), n("div", ab, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", nb, c(e.total), 1)
        ])) : _("", !0),
        r.$slots.pay ? (t(), n("div", lb, [
          R(r.$slots, "pay")
        ])) : _("", !0)
      ])) : _("", !0)
    ]));
  }
}), ob = { class: "flex flex-col gap-3" }, sb = ["data-slot"], rb = ["aria-pressed", "aria-label", "title"], ib = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ub = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, db = { class: "flex h-8 items-center" }, cb = ["aria-label", "title", "onClick"], fb = ["aria-label", "title", "onClick"], mb = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, pb = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, e$ = /* @__PURE__ */ z({
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
    function u(p) {
      return a.maskable && (p.sensitive ?? !0);
    }
    function d(p) {
      return u(p) && !s.value && !i.value.has(p.key);
    }
    const f = y(() => a.segments.some(d)), k = y(() => a.segments.some(u)), m = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, g = y(() => m[a.columns] ?? m[4]), M = y(() => {
      const p = a.columns ?? 4, x = Math.floor(a.segments.length / p) * p;
      return a.segments.slice(0, x);
    }), $ = y(() => {
      const p = a.columns ?? 4, x = Math.floor(a.segments.length / p) * p;
      return a.segments.slice(x);
    }), w = y(() => {
      const p = [];
      return M.value.length > 0 && p.push({ key: "packed", joined: !0, segments: M.value }), $.value.length > 0 && p.push({ key: "leftover", joined: !1, segments: $.value }), p;
    });
    function h() {
      const p = f.value === !1;
      s.value = !p, i.value = /* @__PURE__ */ new Set(), r("toggle", p);
    }
    function v(p) {
      if (!u(p))
        return;
      const x = new Set(i.value);
      if (d(p))
        x.add(p.key);
      else if (x.delete(p.key), s.value) {
        s.value = !1;
        for (const S of a.segments)
          S.key !== p.key && u(S) && x.add(S.key);
      }
      i.value = x, r("toggle", f.value);
    }
    function C(p) {
      return typeof p == "number" ? new Intl.NumberFormat().format(p) : p;
    }
    return (p, x) => (t(), n("div", ob, [
      (t(!0), n(P, null, L(w.value, (S) => (t(), n("div", {
        key: S.key,
        class: j(["relative shrink-0", S.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": S.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && k.value && S.key === w.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: h
        }, [
          (t(), n("svg", ib, [
            f.value ? (t(), n(P, { key: 0 }, [
              x[0] || (x[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              x[1] || (x[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              x[2] || (x[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              x[3] || (x[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(P, { key: 1 }, [
              x[4] || (x[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              x[5] || (x[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, rb)) : _("", !0),
        o("div", {
          class: j(["grid", [S.joined ? "gap-px" : "gap-3", g.value]])
        }, [
          (t(!0), n(P, null, L(S.segments, (B) => (t(), n("div", {
            key: B.key,
            class: j(["bg-card flex flex-col gap-2 p-4", S.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", ub, c(B.label), 1),
            o("div", db, [
              e.loading ? (t(), D(Oe, {
                key: 0,
                variant: "number"
              })) : d(B) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${B.label} hidden. Show it.`,
                title: `Show ${B.label}`,
                onClick: (K) => v(B)
              }, [
                (t(), n(P, null, L(5, (K) => o("span", {
                  key: K,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, cb)) : u(B) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${B.label}, ${C(B.value)}. Hide it.`,
                title: `Hide ${B.label}`,
                onClick: (K) => v(B)
              }, c(C(B.value)), 9, fb)) : (t(), n("span", mb, c(C(B.value)), 1)),
              B.trend && !e.loading && !d(B) ? (t(), D(Qt, {
                key: 4,
                direction: B.trend.direction,
                percentage: B.trend.percentage,
                inverted: B.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : _("", !0)
            ]),
            B.sparkline?.length && !e.loading && !d(B) ? (t(), D(Xe, {
              key: 0,
              data: B.sparkline,
              height: 24
            }, null, 8, ["data"])) : _("", !0),
            B.caption || B.comparison && B.trend ? (t(), n("p", pb, c(B.caption ?? B.comparison), 1)) : _("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, sb))), 128))
    ]));
  }
}), vb = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, gb = { class: "flex items-center justify-between gap-2" }, hb = ["href"], bb = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, xb = { class: "flex flex-col gap-0.5" }, yb = { class: "text-sm font-medium" }, kb = { class: "text-xs text-muted-foreground" }, $b = {
  key: 1,
  class: "flex flex-col gap-2"
}, wb = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, _b = { class: "flex flex-col gap-0.5" }, Cb = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, t$ = /* @__PURE__ */ z({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: {}
  },
  setup(e) {
    const l = e, a = l.items.find((s) => !s.done) ?? null, r = l.items.filter((s) => s.key !== a?.key);
    return (s, i) => e.items.length ? (t(), n("section", vb, [
      o("div", gb, [
        i[0] || (i[0] = o("h2", { class: "text-sm font-semibold" }, "Setup checklist", -1)),
        e.reportHref ? (t(), n("a", {
          key: 0,
          href: e.reportHref,
          class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
        }, " Full report ", 8, hb)) : _("", !0)
      ]),
      b(a) ? (t(), n("div", bb, [
        i[1] || (i[1] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", xb, [
          o("p", yb, c(b(a).title), 1),
          o("p", kb, c(b(a).detail), 1)
        ])
      ])) : _("", !0),
      b(r).length ? (t(), n("ul", $b, [
        (t(!0), n(P, null, L(b(r), (u) => (t(), n("li", {
          key: u.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: j([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              u.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            u.done ? (t(), n("svg", wb, [...i[2] || (i[2] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : _("", !0)
          ], 2),
          o("div", _b, [
            o("p", {
              class: j(["text-sm", u.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(u.title), 3),
            u.done ? _("", !0) : (t(), n("p", Cb, c(u.detail), 1))
          ])
        ]))), 128))
      ])) : _("", !0)
    ])) : _("", !0);
  }
}), Mb = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, Sb = { class: "flex items-center gap-2" }, Bb = { class: "font-medium tabular-nums" }, zb = { class: "ml-auto flex items-center gap-3" }, a$ = /* @__PURE__ */ z({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), n("div", Mb, [
      o("div", Sb, [
        R(s.$slots, "actions")
      ]),
      o("span", Bb, [
        e.allMatching ? (t(), n(P, { key: 0 }, [
          G(" All " + c(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(P, { key: 1 }, [
          G(c(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", zb, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (u) => a("select-all-matching"))
        }, " Select all " + c(r(e.total)), 1)) : _("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), Pb = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Ab = { class: "text-muted-foreground text-xs tabular-nums" }, jb = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Ob = ["value"], Lb = ["value"], Vb = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Db = ["disabled"], Tb = ["disabled"], Fb = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Eb = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Ib = ["disabled"], n$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = (f) => new Intl.NumberFormat().format(f), i = y(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), u = y(() => (a.page - 1) * a.perPage + a.rowsOnPage), d = y(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (f, k) => (t(), n("div", Pb, [
      o("p", Ab, [
        G(" Showing " + c(s(i.value)) + "-" + c(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(P, { key: 0 }, [
          G("of " + c(s(e.total)), 1)
        ], 64)) : _("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", jb, [
        k[4] || (k[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: k[0] || (k[0] = (m) => r("update:perPage", Number(m.target.value)))
        }, [
          (t(!0), n(P, null, L(e.perPageOptions, (m) => (t(), n("option", {
            key: m,
            value: m
          }, c(m), 9, Lb))), 128))
        ], 40, Ob)
      ])) : _("", !0),
      o("nav", Vb, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: k[1] || (k[1] = (m) => r("first"))
        }, [...k[5] || (k[5] = [
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
        ])], 8, Db),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: k[2] || (k[2] = (m) => r("previous"))
        }, [...k[6] || (k[6] = [
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
        ])], 8, Tb),
        o("span", Fb, c(e.page), 1),
        d.value !== null ? (t(), n("span", Eb, " of " + c(s(d.value)), 1)) : _("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: k[3] || (k[3] = (m) => r("next"))
        }, [...k[7] || (k[7] = [
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
        ])], 8, Ib)
      ])
    ]));
  }
}), Nb = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, Rb = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, Hb = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, Ub = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, l$ = /* @__PURE__ */ z({
  __name: "TableShell",
  setup(e) {
    return (l, a) => (t(), n("div", Nb, [
      l.$slots.tabs ? (t(), n("div", Rb, [
        R(l.$slots, "tabs")
      ])) : _("", !0),
      l.$slots.toolbar ? (t(), n("div", Hb, [
        R(l.$slots, "toolbar")
      ])) : _("", !0),
      R(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Ub, [
        R(l.$slots, "pagination")
      ])) : _("", !0)
    ]));
  }
}), Kb = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, qb = ["aria-current"], Gb = ["title"], Wb = ["aria-current", "onClick"], Zb = ["title"], Jb = /* @__PURE__ */ z({
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
    return (s, i) => (t(), n("div", Kb, [
      o("button", {
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => a("select", null))
      }, [
        i[1] || (i[1] = G(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, Gb)) : (t(), D(Oe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, qb),
      (t(!0), n(P, null, L(e.tabs, (u) => (t(), n("button", {
        key: u,
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => a("select", u)
      }, [
        G(c(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, c(r(e.counts[u] ?? 0)), 11, Zb)) : (t(), D(Oe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Wb))), 128))
    ]));
  }
}), o$ = /* @__PURE__ */ ht(Jb, [["__scopeId", "data-v-3967c945"]]), Yb = { class: "flex flex-wrap items-center justify-end gap-2" }, Xb = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Qb = ["placeholder", "title", "aria-label"], e1 = ["aria-label"], t1 = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, a1 = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, n1 = { class: "text-xs font-medium" }, l1 = ["value", "onChange"], o1 = ["value"], s1 = { class: "grid grid-cols-2 gap-2" }, r1 = ["value", "onChange"], i1 = ["value", "onChange"], u1 = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, d1 = ["value", "onChange"], c1 = ["value", "onChange"], f1 = {
  key: 4,
  class: "flex items-center gap-2"
}, m1 = ["aria-checked", "onClick"], p1 = { class: "text-xs" }, v1 = ["onClick"], g1 = ["value", "onChange"], h1 = ["value"], b1 = ["disabled", "onClick"], x1 = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, y1 = ["disabled", "onClick"], k1 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, $1 = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, w1 = ["aria-pressed", "aria-label", "title"], _1 = {
  key: 3,
  class: "text-muted-foreground shrink-0 text-xs"
}, s$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = q(a.search);
    re(
      () => a.search,
      (T) => {
        T !== s.value && (s.value = T);
      }
    );
    let i;
    re(s, (T) => {
      clearTimeout(i), i = setTimeout(() => {
        T !== a.search && r("update:search", T);
      }, 250);
    });
    const u = q({ ...a.filters });
    re(
      () => a.filters,
      (T) => {
        u.value = { ...T };
      },
      { deep: !0 }
    );
    const d = y(
      () => a.filterSchema.filter(
        (T) => a.filters[T.key] !== null && a.filters[T.key] !== void 0
      ).length
    ), f = y(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), k = y(() => a.search !== "" || d.value > 0);
    function m(T) {
      return T.type === "multiselect";
    }
    function g(T) {
      const A = u.value[T.key];
      return Array.isArray(A) ? A : A == null ? [] : [A];
    }
    function M(T) {
      return g(T).filter(
        (A) => typeof A == "string" || typeof A == "number"
      );
    }
    function $(T) {
      return B(T).flatMap(
        (A) => typeof A.value == "string" || typeof A.value == "number" ? [{ value: A.value, label: A.label }] : []
      );
    }
    function w(T, A) {
      u.value = { ...u.value, [T.key]: A === "" ? null : A };
    }
    function h(T, A) {
      const W = u.value[T.key];
      if (typeof W != "string" || !W.includes(".."))
        return "";
      const [E, N] = W.split("..");
      return A === "from" ? E ?? "" : N ?? "";
    }
    function v(T, A, W) {
      const E = A === "from" ? W : h(T, "from"), N = A === "to" ? W : h(T, "to");
      u.value = {
        ...u.value,
        [T.key]: E && N ? `${E}..${N}` : null
      };
    }
    function C(T, A, W) {
      const E = A === "from" ? W : h(T, "from"), N = A === "to" ? W : h(T, "to");
      u.value = {
        ...u.value,
        [T.key]: E || N ? `${E}..${N}` : null
      };
    }
    function p(T) {
      r("apply-filters", { ...u.value }), T();
    }
    function x(T, A) {
      u.value[T] = A, r("apply-filters", { ...u.value });
    }
    function S() {
      u.value = Object.fromEntries(a.filterSchema.map((T) => [T.key, null]));
    }
    function B(T) {
      return T.type === "boolean" ? [
        { value: !0, label: T.trueLabel ?? "Yes" },
        { value: !1, label: T.falseLabel ?? "No" }
      ] : T.type === "daterange" ? Object.entries(T.presets ?? {}).map(([A, W]) => ({
        value: A,
        label: W
      })) : (T.options ?? []).map((A) => ({ value: A, label: A }));
    }
    const K = q(new Set(a.hidden));
    re(
      () => a.hidden,
      (T) => {
        K.value = new Set(T);
      },
      { deep: !0 }
    );
    function I(T) {
      const A = new Set(K.value);
      A.has(T) ? A.delete(T) : A.add(T), K.value = A, r("apply-columns", [...A]);
    }
    function Y() {
      K.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function F() {
      s.value = "", r("clear");
    }
    return (T, A) => (t(), n("div", Yb, [
      o("div", Xb, [
        A[4] || (A[4] = o("svg", {
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
        se(o("input", {
          "onUpdate:modelValue": A[0] || (A[0] = (W) => s.value = W),
          type: "search",
          placeholder: e.searchPlaceholder,
          title: e.searchHint,
          "aria-label": e.searchHint ?? e.searchPlaceholder,
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
        }, null, 8, Qb), [
          [Be, s.value]
        ]),
        s.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
          "aria-label": "Clear search",
          onClick: A[1] || (A[1] = (W) => s.value = "")
        }, [...A[3] || (A[3] = [
          o("svg", {
            viewBox: "0 0 24 24",
            class: "size-3.5",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [
            o("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])])) : _("", !0)
      ]),
      e.filterSchema.length ? (t(), D(Ne, {
        key: 0,
        width: "w-80",
        "dismiss-on-panel-click": !1
      }, {
        trigger: V(() => [
          o("button", {
            type: "button",
            dusk: "filters-trigger",
            class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", d.value ? "border-primary text-primary" : ""]),
            "aria-label": d.value ? `Filters (${d.value} active)` : "Filters",
            title: "Filters"
          }, [
            A[5] || (A[5] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            d.value ? (t(), n("span", t1, c(d.value), 1)) : _("", !0)
          ], 10, e1)
        ]),
        panel: V(({ close: W }) => [
          o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
            A[6] || (A[6] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
            o("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: S
            }, " Reset ")
          ]),
          A[9] || (A[9] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
          o("div", a1, [
            (t(!0), n(P, null, L(e.filterSchema, (E) => (t(), n("div", {
              key: E.key,
              class: "flex flex-col gap-1.5"
            }, [
              o("label", n1, c(E.label), 1),
              m(E) ? (t(), D(Wt, {
                key: 0,
                "model-value": M(E),
                options: $(E),
                placeholder: `Any ${E.label.toLowerCase()}`,
                "onUpdate:modelValue": (N) => u.value[E.key] = N.length ? N : null
              }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : E.type === "querybuilder" ? (t(), D(so, {
                key: 1,
                "model-value": u.value[E.key] ?? null,
                fields: E.fields ?? {},
                operators: E.operators ?? {},
                "max-depth": E.maxDepth ?? 5,
                onApply: (N) => x(E.key, N)
              }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : E.type === "daterange" ? (t(), n(P, { key: 2 }, [
                o("select", {
                  value: typeof u.value[E.key] == "string" && !String(u.value[E.key]).includes("..") ? u.value[E.key] : "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                  onChange: (N) => w(E, N.target.value)
                }, [
                  A[7] || (A[7] = o("option", { value: "" }, "Any time", -1)),
                  (t(!0), n(P, null, L(B(E), (N) => (t(), n("option", {
                    key: String(N.value),
                    value: N.value
                  }, c(N.label), 9, o1))), 128))
                ], 40, l1),
                o("div", s1, [
                  o("input", {
                    type: "date",
                    value: h(E, "from"),
                    "aria-label": "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (N) => v(
                      E,
                      "from",
                      N.target.value
                    )
                  }, null, 40, r1),
                  o("input", {
                    type: "date",
                    value: h(E, "to"),
                    "aria-label": "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (N) => v(
                      E,
                      "to",
                      N.target.value
                    )
                  }, null, 40, i1)
                ])
              ], 64)) : E.type === "numberrange" ? (t(), n("div", u1, [
                o("input", {
                  type: "number",
                  value: h(E, "from"),
                  "aria-label": "From",
                  placeholder: "From",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (N) => C(
                    E,
                    "from",
                    N.target.value
                  )
                }, null, 40, d1),
                o("input", {
                  type: "number",
                  value: h(E, "to"),
                  "aria-label": "To",
                  placeholder: "To",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (N) => C(
                    E,
                    "to",
                    N.target.value
                  )
                }, null, 40, c1)
              ])) : E.type === "boolean" ? (t(), n("div", f1, [
                o("button", {
                  type: "button",
                  role: "switch",
                  "aria-checked": u.value[E.key] === !0,
                  class: j([
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    u.value[E.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                  ]),
                  onClick: (N) => w(E, u.value[E.key] === !0 ? null : !0)
                }, [
                  o("span", {
                    class: j(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[E.key] === !0 ? "left-4.5" : "left-0.5"])
                  }, null, 2)
                ], 10, m1),
                o("span", p1, c(E.trueLabel ?? "Yes"), 1),
                o("button", {
                  type: "button",
                  class: j([
                    "text-muted-foreground ml-auto text-xs hover:underline",
                    u.value[E.key] === !1 ? "text-primary font-medium" : ""
                  ]),
                  onClick: (N) => w(E, u.value[E.key] === !1 ? null : !1)
                }, c(E.falseLabel ?? "No") + " only ", 11, v1)
              ])) : (t(), n("select", {
                key: 5,
                value: u.value[E.key] ?? "",
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                onChange: (N) => w(E, N.target.value)
              }, [
                A[8] || (A[8] = o("option", { value: "" }, "All", -1)),
                (t(!0), n(P, null, L(B(E), (N) => (t(), n("option", {
                  key: String(N.value),
                  value: N.value
                }, c(N.label), 9, h1))), 128))
              ], 40, g1))
            ]))), 128))
          ]),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
            disabled: !f.value,
            onClick: (E) => p(W)
          }, " Apply filters ", 8, b1)
        ]),
        _: 1
      })) : _("", !0),
      U(Ne, { "dismiss-on-panel-click": !1 }, {
        trigger: V(() => [...A[10] || (A[10] = [
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
          A[13] || (A[13] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
          o("div", x1, [
            (t(!0), n(P, null, L(e.columns, (W) => (t(), n("button", {
              key: W.key,
              type: "button",
              class: j(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", W.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
              disabled: W.locked,
              onClick: (E) => I(W.key)
            }, [
              K.value.has(W.key) ? (t(), n("span", $1)) : (t(), n("svg", k1, [...A[11] || (A[11] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])),
              G(" " + c(W.label), 1)
            ], 10, y1))), 128))
          ]),
          o("div", { class: "border-t" }, [
            o("button", {
              type: "button",
              class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
              onClick: Y
            }, [...A[12] || (A[12] = [
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
              G(" Reset ", -1)
            ])])
          ])
        ]),
        _: 1
      }),
      e.reorderable ? (t(), n("button", {
        key: 1,
        type: "button",
        class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
        "aria-pressed": e.reordering,
        "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
        title: e.reordering ? "Finish reordering" : "Reorder records",
        onClick: A[2] || (A[2] = (W) => r("toggle-reorder"))
      }, [...A[14] || (A[14] = [
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
      ])], 10, w1)) : _("", !0),
      k.value ? (t(), n("button", {
        key: 2,
        type: "button",
        class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
        onClick: F
      }, " Clear ")) : _("", !0),
      e.loading ? (t(), n("span", _1, "Loading…")) : _("", !0)
    ]));
  }
}), C1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, M1 = { class: "grid gap-2" }, S1 = {
  key: 0,
  class: "text-destructive text-sm"
}, B1 = { class: "flex gap-2" }, r$ = /* @__PURE__ */ z({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = q((() => {
      const M = navigator.userAgent, $ = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: h }) => h.test(M))?.name, w = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: h }) => h.test(M))?.name;
      return [$, w].filter(Boolean).join(" on ") || "";
    })()), i = q(!1), u = ca(null), d = y(() => u.value?.isLoading.value ?? !1), f = y(() => u.value?.error.value ?? null), k = y(() => u.value?.isSupported.value ?? !1);
    ue(async () => {
      try {
        const { usePasskeyRegister: M } = await import("@laravel/passkeys/vue");
        u.value = M({
          onSuccess: () => {
            s.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const m = async (M) => {
      M.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, g = () => {
      i.value = !1, s.value = "";
    };
    return (M, $) => k.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: m
    }, [
      o("div", M1, [
        $[3] || ($[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        se(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": $[1] || ($[1] = (w) => s.value = w),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Be, s.value]
        ]),
        $[4] || ($[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      f.value ? (t(), n("p", S1, c(f.value), 1)) : _("", !0),
      o("div", B1, [
        U(le, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: V(() => [
            G(c(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        U(le, {
          type: "button",
          variant: "ghost",
          onClick: g
        }, {
          default: V(() => [...$[5] || ($[5] = [
            G(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(le, {
      key: 1,
      variant: "outline",
      onClick: $[0] || ($[0] = (w) => i.value = !0)
    }, {
      default: V(() => [...$[2] || ($[2] = [
        G(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", C1, " Passkeys are not supported in this browser. "));
  }
}), z1 = { class: "text-sm font-semibold" }, P1 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, A1 = {
  key: 4,
  class: "flex flex-col gap-3"
}, j1 = { class: "text-sm font-medium" }, O1 = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, L1 = {
  key: 0,
  class: "mb-1 font-medium"
}, V1 = ["onClick"], D1 = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, T1 = { class: "flex items-center justify-between gap-3 border-t p-4" }, F1 = ["disabled"], E1 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = q(!a.node.collapsed), i = q(0), u = q(0), d = y(
      () => (a.node.children ?? []).map((h) => ({
        label: h.label ?? "",
        description: h.description
      }))
    ), f = y(() => a.depth === 0), k = y(() => {
      const h = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, v = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        h[a.node.align ?? "start"] ?? "items-start",
        v[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), m = y(() => {
      const h = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return h[a.node.tone ?? "info"] ?? h.info;
    }), g = y(() => {
      const h = a.node.columns ?? 1;
      return h >= 3 ? "sm:grid-cols-3" : h === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function M(h) {
      const v = [], C = (p) => {
        p.component === "field" && p.key && v.push(p.key), p.children?.forEach(C);
      };
      return C(h), v.some((p) => a.errors[p]);
    }
    function $(h) {
      const v = h.visibleWhen;
      return v ? a.values[v.field] == v.value : !0;
    }
    function w(h) {
      if (a.upload)
        return (v, C) => a.upload(h, v, C);
    }
    return (h, v) => {
      const C = ct("SchemaNode", !0);
      return e.node.component === "field" && $(e.node) ? (t(), D(Re, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (p) => e.searchOptions(e.node.key, p) : void 0,
        upload: w(e.node.key),
        discard: e.discard,
        onChange: v[0] || (v[0] = (p) => r("change", e.node.key, p))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && $(e.node) ? (t(), n("section", {
        key: 1,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: j(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: v[1] || (v[1] = (p) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", z1, c(e.node.label), 1),
            e.node.description ? (t(), n("p", P1, c(e.node.description), 1)) : _("", !0)
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: j(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...v[11] || (v[11] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : _("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [g.value, f.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(P, null, L(e.node.children ?? [], (p, x) => (t(), D(C, {
            key: x,
            node: p,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: j(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
            onChange: v[2] || (v[2] = (S, B) => r("change", S, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : _("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", g.value])
      }, [
        (t(!0), n(P, null, L(e.node.children ?? [], (p, x) => (t(), D(C, {
          key: x,
          node: p,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: v[3] || (v[3] = (S, B) => r("change", S, B))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 3,
        class: j(["flex", k.value])
      }, [
        (t(!0), n(P, null, L(e.node.children ?? [], (p, x) => (t(), D(C, {
          key: x,
          node: p,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: v[4] || (v[4] = (S, B) => r("change", S, B))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", A1, [
        o("legend", j1, c(e.node.label), 1),
        e.node.description ? (t(), n("p", O1, c(e.node.description), 1)) : _("", !0),
        o("div", {
          class: j(["grid grid-cols-1 gap-4", g.value])
        }, [
          (t(!0), n(P, null, L(e.node.children ?? [], (p, x) => (t(), D(C, {
            key: x,
            node: p,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: v[5] || (v[5] = (S, B) => r("change", S, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 5,
        role: "note",
        class: j(["rounded-lg border px-4 py-3 text-sm", m.value])
      }, [
        e.node.title ? (t(), n("p", L1, c(e.node.title), 1)) : _("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(P, null, L(e.node.children ?? [], (p, x) => (t(), n("button", {
            key: x,
            type: "button",
            class: j([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === x ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (S) => i.value = x
          }, [
            G(c(p.label) + " ", 1),
            M(p) ? (t(), n("span", D1)) : _("", !0)
          ], 10, V1))), 128))
        ], 2),
        (t(!0), n(P, null, L(e.node.children ?? [], (p, x) => se((t(), n("div", {
          key: x,
          class: j(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, L(p.children ?? [], (S, B) => (t(), D(C, {
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
            onChange: v[6] || (v[6] = (K, I) => r("change", K, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [we, i.value === x]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        U(Er, {
          class: j(["p-4", f.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (p) => M((e.node.children ?? [])[p]),
          "onUpdate:activeStep": v[7] || (v[7] = (p) => u.value = p)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(P, null, L(e.node.children ?? [], (p, x) => se((t(), n("div", {
          key: x,
          class: j(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, L(p.children ?? [], (S, B) => (t(), D(C, {
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
            onChange: v[8] || (v[8] = (K, I) => r("change", K, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [we, u.value === x]
        ])), 128)),
        o("div", T1, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: v[9] || (v[9] = (p) => u.value--)
          }, " Back ", 8, F1),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: v[10] || (v[10] = (p) => u.value++)
          }, " Next ")) : _("", !0)
        ])
      ], 2)) : _("", !0);
    };
  }
}), I1 = { class: "flex flex-col gap-4" }, N1 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, i$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = y(() => a.nodes.length > 0), i = y(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = y(() => a.errors._conflict);
    function d(f) {
      if (a.upload)
        return (k, m) => a.upload(f, k, m);
    }
    return (f, k) => (t(), n("div", I1, [
      u.value ? (t(), n("p", N1, c(u.value), 1)) : _("", !0),
      s.value ? (t(!0), n(P, { key: 1 }, L(e.nodes, (m, g) => (t(), D(E1, {
        key: g,
        node: m,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: k[0] || (k[0] = (M, $) => r("change", M, $))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(P, null, L(e.fields, (m) => (t(), D(Re, {
          key: m.key,
          field: m,
          value: e.modelValue[m.key],
          error: e.errors[m.key],
          errors: e.errors,
          options: e.options[m.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": m.searchable && e.searchOptions ? (g) => e.searchOptions(m.key, g) : void 0,
          upload: d(m.key),
          discard: e.discard,
          class: j(m.span && m.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (g) => r("change", m.key, g)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), R1 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, H1 = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, U1 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, K1 = ["disabled"], q1 = ["disabled"], G1 = ["disabled"], u$ = /* @__PURE__ */ z({
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
    return (l, a) => (t(), D(Le, { to: "body" }, [
      U(Se, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: V(() => [
          e.show ? (t(), n("div", R1, [
            o("div", H1, [
              a[3] || (a[3] = o("span", {
                class: "text-amber-500",
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
              o("span", U1, c(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, c(e.discardLabel), 9, K1)) : _("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, c(e.cancelLabel), 9, q1),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, G1)
            ])
          ])) : _("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function d$(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = q(nt(e.value)), s = y(() => nt(e.value) !== r.value);
  function i() {
    r.value = nt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(f) {
    s.value && (f.preventDefault(), f.returnValue = "");
  }
  return ue(() => {
    a && window.addEventListener("beforeunload", d);
  }), fe(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function nt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const W1 = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, Z1 = { class: "text-muted-foreground text-xs font-medium" }, J1 = { class: "text-sm" }, Y1 = { key: 1 }, X1 = { class: "text-sm font-semibold" }, Q1 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, ex = ["onClick"], c$ = /* @__PURE__ */ z({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  setup(e) {
    const l = e, a = q(!l.node.collapsed), r = q(0), s = y(() => l.depth === 0), i = y(() => {
      const m = l.node.columns ?? 1;
      return m >= 3 ? "sm:grid-cols-3" : m === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), u = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, d = y(() => l.node.key ? l.record[l.node.key] : null), f = y(() => {
      const m = d.value;
      if (m == null || m === "")
        return "-";
      if (l.node.type === "date" || l.node.type === "datetime")
        return new Date(String(m)).toLocaleDateString(void 0, u[l.node.type]);
      let g = String(m);
      return l.node.transform === "upper" && (g = g.toUpperCase()), l.node.transform === "lower" && (g = g.toLowerCase()), [l.node.prefix, g, l.node.suffix].filter(Boolean).join(" ");
    }), k = y(() => {
      const m = typeof d.value == "boolean" ? d.value ? "1" : "" : String(d.value), g = l.node.colors?.[m] ?? l.node.defaultColor ?? "neutral";
      return bt[g] ?? "outline";
    });
    return (m, g) => {
      const M = ct("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", W1, [
        o("dt", Z1, c(e.node.label), 1),
        o("dd", J1, [
          e.node.type === "badge" && b(go)(d.value) ? (t(), D(Ie, {
            key: 0,
            variant: k.value,
            class: "capitalize"
          }, {
            default: V(() => [
              G(c(d.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", Y1, "-")) : (t(), n("span", {
            key: 2,
            class: j([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, c(f.value), 3))
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: j(s.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: j(["flex items-start justify-between gap-3", [
            s.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: g[0] || (g[0] = ($) => e.node.collapsible && (a.value = !a.value))
        }, [
          o("div", null, [
            o("h3", X1, c(e.node.label), 1),
            e.node.description ? (t(), n("p", Q1, c(e.node.description), 1)) : _("", !0)
          ])
        ], 2),
        a.value ? (t(), n("dl", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [i.value, s.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(P, null, L(e.node.children ?? [], ($, w) => (t(), D(M, {
            key: w,
            node: $,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : _("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(P, null, L(e.node.children ?? [], ($, w) => (t(), D(M, {
          key: w,
          node: $,
          record: e.record,
          depth: e.depth + 1
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: j(s.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", s.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(P, null, L(e.node.children ?? [], ($, w) => (t(), n("button", {
            key: w,
            type: "button",
            class: j([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              r.value === w ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (h) => r.value = w
          }, c($.label), 11, ex))), 128))
        ], 2),
        (t(!0), n(P, null, L(e.node.children ?? [], ($, w) => se((t(), n("div", {
          key: w,
          class: j(["flex flex-col gap-5", s.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, L($.children ?? [], (h, v) => (t(), D(M, {
            key: v,
            node: h,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [we, r.value === w]
        ])), 128))
      ], 2)) : _("", !0);
    };
  }
}), tx = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, ax = { class: "text-muted-foreground text-sm" }, nx = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, lx = { class: "flex items-start gap-3" }, ox = { class: "min-w-0 flex-1" }, sx = { class: "flex flex-wrap items-center gap-2" }, rx = { class: "truncate text-sm font-medium" }, ix = { class: "text-muted-foreground mt-0.5 text-xs" }, ux = { class: "text-muted-foreground text-xs" }, dx = { class: "mt-auto flex items-center gap-2" }, cx = /* @__PURE__ */ z({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", tx, [
      o("p", ax, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", nx, [
        (t(!0), n(P, null, L(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", lx, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: Q({ background: d.color }),
              "aria-hidden": "true"
            }, c(d.mark), 5),
            o("div", ox, [
              o("div", sx, [
                o("h3", rx, c(d.label), 1),
                U(me, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: V(() => [
                    G(c(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), D(me, {
                  key: 0,
                  status: "offered"
                }, {
                  default: V(() => [...u[0] || (u[0] = [
                    G(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), D(me, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: V(() => [...u[1] || (u[1] = [
                    G(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : _("", !0),
                d.isDefault ? (t(), D(me, {
                  key: 2,
                  status: "default"
                }, {
                  default: V(() => [...u[2] || (u[2] = [
                    G(" Default ", -1)
                  ])]),
                  _: 1
                })) : _("", !0),
                d.connected && d.mode ? (t(), D(me, {
                  key: 3,
                  status: d.mode
                }, {
                  default: V(() => [
                    G(c(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : _("", !0)
              ]),
              o("p", ix, c(d.caption), 1)
            ])
          ]),
          o("p", ux, c(d.methods.join(" · ")), 1),
          o("div", dx, [
            U(le, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", d.key)
            }, {
              default: V(() => [...u[3] || (u[3] = [
                G(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            U(le, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", d.key)
            }, {
              default: V(() => [
                G(c(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), fx = { class: "flex flex-col gap-6" }, mx = { class: "relative" }, px = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, vx = ["d"], gx = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, hx = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, bx = { class: "flex flex-wrap items-center gap-2" }, xx = { class: "text-muted-foreground text-sm" }, yx = { class: "flex flex-col gap-1 text-sm" }, kx = ["value"], $x = {
  key: 0,
  class: "flex flex-col gap-2"
}, wx = { class: "flex flex-wrap items-center gap-2" }, _x = {
  key: 1,
  class: "flex items-center gap-2"
}, f$ = /* @__PURE__ */ z({
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
    const l = Je(e, "gateways"), a = q(null), r = q(""), s = y(
      () => l.value.find(($) => $.key === a.value) ?? null
    ), i = y(() => {
      const $ = r.value.trim().toLowerCase();
      return $ === "" ? l.value : l.value.filter((w) => [w.key, w.label, w.caption, ...w.methods].join(" ").toLowerCase().includes($));
    });
    function u($) {
      return $.connected && $.enabled !== !1;
    }
    function d($, w) {
      l.value = l.value.map(
        (h) => h.key === $ ? { ...h, ...w } : h
      );
    }
    function f($) {
      a.value = $;
    }
    function k($) {
      const w = l.value.find((v) => v.key === $);
      if (!w)
        return;
      const h = !w.connected;
      d($, {
        connected: h,
        mode: h ? w.mode ?? "test" : null,
        enabled: h,
        isDefault: !1
      });
    }
    function m($, w) {
      const h = l.value.find((v) => v.key === $);
      h?.connected && d($, { enabled: w, isDefault: w ? h.isDefault : !1 });
    }
    function g($) {
      const w = l.value.find((h) => h.key === $);
      !w || !u(w) || (l.value = l.value.map((h) => ({
        ...h,
        isDefault: h.key === $
      })));
    }
    function M($) {
      const w = a.value;
      !w || !l.value.find((v) => v.key === w)?.connected || d(w, { mode: $ });
    }
    return ($, w) => (t(), n(P, null, [
      o("div", fx, [
        U(Me, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", mx, [
          (t(), n("svg", px, [
            o("path", {
              d: b(oe)("search")
            }, null, 8, vx)
          ])),
          U($e, {
            modelValue: r.value,
            "onUpdate:modelValue": w[0] || (w[0] = (h) => r.value = h),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(cx, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: k
        }, null, 8, ["gateways"])) : (t(), n("p", gx, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      U(kt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: w[8] || (w[8] = (h) => a.value = null)
      }, {
        footer: V(() => [
          U(le, {
            variant: "outline",
            size: "sm",
            onClick: w[6] || (w[6] = (h) => a.value = null)
          }, {
            default: V(() => [...w[21] || (w[21] = [
              G("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(le, {
            key: 0,
            size: "sm",
            onClick: w[7] || (w[7] = (h) => k(s.value.key))
          }, {
            default: V(() => [
              G(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : _("", !0)
        ]),
        default: V(() => [
          s.value ? (t(), n("div", hx, [
            o("div", bx, [
              U(me, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: V(() => [
                  G(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), D(me, {
                key: 0,
                status: "offered"
              }, {
                default: V(() => [...w[9] || (w[9] = [
                  G(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), D(me, {
                key: 1,
                status: "disabled"
              }, {
                default: V(() => [...w[10] || (w[10] = [
                  G(" Disabled ", -1)
                ])]),
                _: 1
              })) : _("", !0),
              s.value.isDefault ? (t(), D(me, {
                key: 2,
                status: "default"
              }, {
                default: V(() => [...w[11] || (w[11] = [
                  G(" Default ", -1)
                ])]),
                _: 1
              })) : _("", !0),
              s.value.connected && s.value.mode ? (t(), D(me, {
                key: 3,
                status: s.value.mode
              }, {
                default: V(() => [
                  G(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : _("", !0)
            ]),
            o("p", xx, c(s.value.caption), 1),
            o("label", yx, [
              w[12] || (w[12] = G(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, kx)
            ]),
            w[20] || (w[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              G(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", $x, [
              w[16] || (w[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              w[17] || (w[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", wx, [
                U(le, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: w[1] || (w[1] = (h) => m(s.value.key, !0))
                }, {
                  default: V(() => [...w[13] || (w[13] = [
                    G(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                U(le, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: w[2] || (w[2] = (h) => m(s.value.key, !1))
                }, {
                  default: V(() => [...w[14] || (w[14] = [
                    G(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                U(le, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: w[3] || (w[3] = (h) => g(s.value.key))
                }, {
                  default: V(() => [...w[15] || (w[15] = [
                    G(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : _("", !0),
            s.value.connected ? (t(), n("div", _x, [
              U(le, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: w[4] || (w[4] = (h) => M("test"))
              }, {
                default: V(() => [...w[18] || (w[18] = [
                  G(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              U(le, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: w[5] || (w[5] = (h) => M("live"))
              }, {
                default: V(() => [...w[19] || (w[19] = [
                  G(" Live ", -1)
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
function Ot(e) {
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
function m$(e) {
  const l = q(Ot(e));
  ue(() => {
    l.value = Ot(e);
  }), re(
    l,
    (d) => {
      try {
        localStorage.setItem(e, JSON.stringify([...d]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function a(d) {
    const f = new Set(l.value);
    f.has(d) ? f.delete(d) : f.add(d), l.value = f;
  }
  function r(d) {
    const f = new Set(l.value);
    f.add(d), l.value = f;
  }
  function s(d) {
    const f = new Set(l.value);
    f.delete(d), l.value = f;
  }
  function i(d) {
    l.value = new Set(d);
  }
  function u() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: a, hide: r, show: s, setHidden: i, reset: u };
}
function p$(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = q(
    l.driver === "none" ? "off" : "connecting"
  ), f = q(/* @__PURE__ */ new Set());
  let k = /* @__PURE__ */ new Map(), m, g, M, $ = (/* @__PURE__ */ new Date()).toISOString(), w = null;
  function h(T, A) {
    k.set(T, { ...k.get(T) ?? {}, ...A }), !m && (m = setTimeout(() => {
      m = void 0, v();
    }, l.batchMs));
  }
  function v() {
    if (k.size === 0)
      return;
    const T = k;
    k = /* @__PURE__ */ new Map();
    const A = /* @__PURE__ */ new Set();
    for (const [W, E] of T) {
      const N = a.value.find((te) => te[r] === W);
      if (!N) {
        u?.(W, E);
        continue;
      }
      Object.assign(N, E), A.add(W);
    }
    A.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...A]), setTimeout(() => {
      const W = new Set(f.value);
      A.forEach((E) => W.delete(E)), f.value = W;
    }, 1500));
  }
  async function C() {
    if (!(!s || a.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const T = a.value.map((E) => E[r]), { records: A, at: W } = await s(T, $);
        $ = W, d.value = "live";
        for (const E of A)
          h(E[r], E);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function p() {
    x(), d.value = "live", g = setInterval(C, l.intervalMs);
  }
  function x() {
    clearInterval(g), g = void 0, M?.abort();
  }
  function S() {
    return window.Echo ?? null;
  }
  function B() {
    const T = S();
    if (!T || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    w = l.channel;
    const A = T.private(l.channel);
    for (const W of l.events)
      A.listen(W, (E) => {
        E?.[r] !== void 0 && h(E[r], E);
      });
    d.value = "live", T.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), T.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function K() {
    w && (S()?.leave(w), w = null);
  }
  function I() {
    l.driver === "poll" && p(), l.driver === "broadcast" && B();
  }
  function Y() {
    x(), K(), clearTimeout(m), m = void 0, k = /* @__PURE__ */ new Map();
  }
  function F() {
    l.pauseWhenHidden && (document.hidden ? (Y(), d.value = "paused") : ($ = (/* @__PURE__ */ new Date()).toISOString(), I(), i?.()));
  }
  return ue(() => {
    l.driver !== "none" && (I(), l.pauseWhenHidden && document.addEventListener("visibilitychange", F));
  }), fe(() => {
    document.removeEventListener("visibilitychange", F), Y();
  }), { status: d, recentlyChanged: f, applyPatch: h, flush: v, pollOnce: C };
}
const Cx = /^[a-z0-9-]+$/, Mx = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function v$(e) {
  fa(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !Cx.test(a) || typeof r != "string" || !Mx.test(r) || (l[`--${a}`] = r);
    Ro(l);
  });
}
const Sx = { class: "flex items-center gap-0.5" }, Bx = /* @__PURE__ */ z({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Sx, [
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
}), zx = /* @__PURE__ */ z({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), D(Xt, {
      code: "AB-1234",
      style: Q(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Px = { class: "flex flex-col gap-2" }, Ax = { class: "bg-card rounded-lg border p-4" }, jx = { class: "text-muted-foreground truncate text-xs" }, Ox = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Lx = /* @__PURE__ */ z({
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
    ), u = y(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = y(() => {
      const w = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return w === "" ? u.value : `${u.value} › ${w.split("/").join(" › ")}`;
    });
    function f(w, h) {
      return w.length <= h ? w : `${w.slice(0, h - 1).trimEnd()}…`;
    }
    const k = y(() => f(s.value, r.value.titleMax)), m = y(() => f(i.value, r.value.descriptionMax));
    function g(w, h, v) {
      return w === 0 ? { tone: "text-muted-foreground", note: "empty" } : w > v ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : w < h ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = y(
      () => g(s.value.length, r.value.titleMin, r.value.titleMax)
    ), $ = y(
      () => g(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (w, h) => (t(), n("div", Px, [
      o("div", Ax, [
        o("p", jx, c(d.value), 1),
        o("p", {
          class: j(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", k.value === "" ? "text-muted-foreground italic" : ""])
        }, c(k.value || "Untitled page"), 3),
        o("p", {
          class: j(["text-muted-foreground mt-1 line-clamp-2 text-sm", m.value === "" ? "italic" : ""])
        }, c(m.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", Ox, [
        o("span", {
          class: j(M.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(M.value.note), 3),
        o("span", {
          class: j($.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c($.value.note), 3)
      ]),
      h[0] || (h[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function Vx() {
  xe("radio", Eu), xe("checkboxlist", Ru), xe("tags", Zu), xe("colour", rd), xe("slider", md), xe("visual-select", Md), xe("markdown", bu), xe("code", Cu), xe("seo-preview", Lx), at("swatch", Bd), at("voucher-code-box", zx), at("document-colour-mode", Bx);
}
function aa() {
  const e = q(null), l = q(!1);
  let a = null;
  return ue(() => {
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
  }), fe(() => a?.disconnect()), { el: e, shown: l };
}
const Dx = /* @__PURE__ */ z({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = aa();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: j(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: Q({ transitionDelay: `${e.delay}ms` })
    }, [
      R(r.$slots, "default")
    ], 6));
  }
}), Tx = ["id"], be = /* @__PURE__ */ z({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, a) => (t(), n("section", {
      id: e.id,
      class: j(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: j(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        U(Dx, null, {
          default: V(() => [
            R(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Tx));
  }
}), Fx = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Ex = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, Ix = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Ae = /* @__PURE__ */ z({
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
      class: j(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", Fx, c(e.eyebrow), 1)) : _("", !0),
      e.title ? (t(), n("h2", Ex, c(e.title), 1)) : _("", !0),
      e.body ? (t(), n("p", Ix, c(e.body), 1)) : _("", !0)
    ], 2)) : _("", !0);
  }
});
function Nx() {
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
  return ue(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), fe(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const Rx = { class: "pk-tilt-inner relative h-full" }, Hx = /* @__PURE__ */ z({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = Nx();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", Rx, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        R(a.$slots, "default")
      ])
    ], 512));
  }
}), Ux = { class: "flex flex-col gap-10" }, Kx = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, qx = { class: "text-base font-semibold" }, Gx = { class: "text-sm text-pretty text-muted-foreground" }, Wx = /* @__PURE__ */ z({
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
    return (a, r) => (t(), D(be, null, {
      default: V(() => [
        o("div", Ux, [
          U(Ae, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Kx, [
            (t(!0), n(P, null, L(e.items ?? [], (s, i) => (t(), D(Hx, {
              key: i,
              class: j(l(s.span))
            }, {
              default: V(() => [
                o("div", {
                  class: j([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", qx, c(s.title), 1),
                  o("p", Gx, c(s.body), 1)
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
}), Zx = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Jx = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Yx = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Xx = ["href"], Qx = /* @__PURE__ */ z({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), D(be, null, {
      default: V(() => [
        o("div", Zx, [
          o("h2", Jx, c(e.title), 1),
          e.body ? (t(), n("p", Yx, c(e.body), 1)) : _("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, Xx)) : _("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), ey = { class: "flex flex-col gap-8" }, ty = { class: "divide-y rounded-lg border" }, ay = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, ny = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, ly = /* @__PURE__ */ z({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(be, { narrow: "" }, {
      default: V(() => [
        o("div", ey, [
          U(Ae, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", ty, [
            (t(!0), n(P, null, L(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", ay, [
                G(c(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", ny, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), oy = { class: "flex flex-col gap-10" }, sy = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, ry = { class: "text-sm font-semibold" }, iy = { class: "text-sm text-pretty text-muted-foreground" }, uy = /* @__PURE__ */ z({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(be, null, {
      default: V(() => [
        o("div", oy, [
          U(Ae, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", sy, [
            (t(!0), n(P, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", ry, c(r.title), 1),
              o("p", iy, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), dy = { class: "flex flex-col items-center gap-6 text-center" }, cy = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, fy = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, my = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, py = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, vy = ["href"], gy = ["href"], hy = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, by = /* @__PURE__ */ z({
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
    return (l, a) => (t(), D(be, null, {
      default: V(() => [
        o("div", dy, [
          e.eyebrow ? (t(), n("p", cy, c(e.eyebrow), 1)) : _("", !0),
          o("h1", fy, c(e.title), 1),
          e.body ? (t(), n("p", my, c(e.body), 1)) : _("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", py, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, vy)) : _("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, gy)) : _("", !0)
          ])) : _("", !0),
          e.note ? (t(), n("p", hy, c(e.note), 1)) : _("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), xy = { class: "flex flex-col items-center gap-6" }, yy = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, ky = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, $y = /* @__PURE__ */ z({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(be, { muted: "" }, {
      default: V(() => [
        o("div", xy, [
          e.title ? (t(), n("p", yy, c(e.title), 1)) : _("", !0),
          o("ul", ky, [
            (t(!0), n(P, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), wy = { class: "flex flex-col gap-10" }, _y = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Cy = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, My = ["aria-pressed"], Sy = ["aria-pressed"], By = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, zy = { class: "grid gap-4 md:grid-cols-3" }, Py = { class: "flex flex-col gap-1" }, Ay = { class: "text-sm font-semibold" }, jy = { class: "flex items-baseline gap-1" }, Oy = { class: "text-3xl font-semibold tracking-tight" }, Ly = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, Vy = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, Dy = { class: "flex flex-col gap-2 text-sm" }, Ty = { class: "text-muted-foreground" }, Fy = ["href"], Ey = /* @__PURE__ */ z({
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
    return (i, u) => (t(), D(be, { muted: "" }, {
      default: V(() => [
        o("div", wy, [
          U(Ae, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", _y, [
            o("div", Cy, [
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, My),
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, Sy)
            ]),
            e.annualNote ? (t(), n("p", By, c(e.annualNote), 1)) : _("", !0)
          ])) : _("", !0),
          o("ul", zy, [
            (t(!0), n(P, null, L(e.items ?? [], (d, f) => (t(), n("li", {
              key: f,
              class: j(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", Py, [
                o("h3", Ay, c(d.name), 1),
                o("p", jy, [
                  o("span", Oy, c(s(d)), 1),
                  d.period ? (t(), n("span", Ly, c(d.period), 1)) : _("", !0)
                ]),
                d.body ? (t(), n("p", Vy, c(d.body), 1)) : _("", !0)
              ]),
              o("ul", Dy, [
                (t(!0), n(P, null, L(d.features ?? [], (k, m) => (t(), n("li", {
                  key: m,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-primary",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", Ty, c(k.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: j([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(d.label), 11, Fy)) : _("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function Iy() {
  const e = q(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), f = d.height + window.innerHeight, k = f <= 0 ? 0 : (window.innerHeight - d.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(k, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return ue(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, d || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((f) => {
        s = f.some((k) => k.isIntersecting), s && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), fe(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const Ny = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, Ry = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Hy = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Uy = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Ky = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, qy = { class: "pk-showcase-stage w-full [perspective:1400px]" }, Gy = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, Wy = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Zy = { class: "ml-3 truncate text-xs text-muted-foreground" }, Jy = { class: "flex" }, Yy = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, Xy = { class: "min-w-0 flex-1 p-4" }, Qy = { class: "flex flex-col divide-y rounded-md border" }, e0 = /* @__PURE__ */ z({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = Iy();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Ny, [
        o("div", Ry, [
          o("div", Hy, [
            o("h2", Uy, c(e.title), 1),
            e.body ? (t(), n("p", Ky, c(e.body), 1)) : _("", !0)
          ]),
          o("div", qy, [
            o("div", Gy, [
              o("div", Wy, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", Zy, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", Jy, [
                o("div", Yy, [
                  (t(), n(P, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: Q({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", Xy, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", Qy, [
                    (t(!0), n(P, null, L(e.rows, (s) => (t(), n("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: Q({ "--pk-row": String(s) })
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
}), t0 = /* @__PURE__ */ z({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = aa(), s = q(0);
    return re(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), f = (k) => {
        const m = Math.min((k - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - m, 3)), m < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), a0 = { class: "flex flex-col gap-10" }, n0 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, l0 = { class: "order-2 text-sm text-muted-foreground" }, o0 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, s0 = /* @__PURE__ */ z({
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
    return (a, r) => (t(), D(be, { muted: "" }, {
      default: V(() => [
        o("div", a0, [
          U(Ae, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", n0, [
            (t(!0), n(P, null, L(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", l0, c(s.label), 1),
              o("dd", o0, [
                l(s.value) ? (t(), D(t0, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(P, { key: 1 }, [
                  G(c(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), r0 = { class: "flex flex-col gap-10" }, i0 = { class: "grid gap-6 md:grid-cols-3" }, u0 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, d0 = { class: "text-sm font-semibold" }, c0 = { class: "text-sm text-pretty text-muted-foreground" }, f0 = /* @__PURE__ */ z({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(be, null, {
      default: V(() => [
        o("div", r0, [
          U(Ae, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", i0, [
            (t(!0), n(P, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", u0, c(s + 1), 1),
              o("h3", d0, c(r.title), 1),
              o("p", c0, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), m0 = { class: "flex flex-col gap-10" }, p0 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, v0 = { class: "text-pretty text-sm leading-relaxed" }, g0 = { class: "mt-auto flex items-center gap-3" }, h0 = ["src"], b0 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, x0 = { class: "min-w-0" }, y0 = { class: "block truncate text-sm font-medium" }, k0 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, $0 = /* @__PURE__ */ z({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(be, null, {
      default: V(() => [
        o("div", m0, [
          U(Ae, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", p0, [
            (t(!0), n(P, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", v0, " “" + c(r.quote) + "” ", 1),
              o("figcaption", g0, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, h0)) : (t(), n("span", b0, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", x0, [
                  o("span", y0, c(r.name), 1),
                  r.role ? (t(), n("span", k0, c(r.role), 1)) : _("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), g$ = /* @__PURE__ */ z({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: by,
      logos: $y,
      features: uy,
      bento: Wx,
      showcase: e0,
      steps: f0,
      stats: s0,
      testimonials: $0,
      pricing: Ey,
      faq: ly,
      cta: Qx
    }, s = y(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(P, null, L(s.value, (d) => (t(), D(ze(d.component), ee({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), w0 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, h$ = /* @__PURE__ */ z({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", w0, [
      o("div", {
        class: j([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      o("div", {
        class: j([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      o("div", {
        class: j([
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
}), _0 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, b$ = /* @__PURE__ */ z({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", _0, [...a[0] || (a[0] = [
      dt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), C0 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, x$ = /* @__PURE__ */ z({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", C0, [...a[0] || (a[0] = [
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
Vx();
const y$ = "0.0.1";
export {
  Nk as AdminDirectory,
  Ps as Alert,
  As as AlertDescription,
  js as AlertTitle,
  G0 as AppearanceDrawer,
  R2 as Avatar,
  H2 as AvatarFallback,
  U2 as AvatarImage,
  bt as BADGE_VARIANTS,
  H0 as BadgeResolver,
  Lk as BarChart,
  K2 as Breadcrumb,
  q2 as BreadcrumbEllipsis,
  G2 as BreadcrumbItem,
  W2 as BreadcrumbLink,
  Z2 as BreadcrumbList,
  J2 as BreadcrumbPage,
  Y2 as BreadcrumbSeparator,
  O0 as BulkActions,
  gk as Card,
  hk as CardAction,
  bk as CardContent,
  xk as CardDescription,
  yk as CardFooter,
  kk as CardHeader,
  $k as CardTitle,
  Qk as CartPanel,
  Wk as CatalogBrowser,
  iv as CatalogCard,
  Vg as CatalogFilterSheet,
  ea as CatalogGrid,
  Kk as CatalogInspect,
  $g as CatalogItemDetail,
  qk as CatalogItemView,
  Zk as CatalogRegister,
  Am as ChartCard,
  gr as Checkbox,
  F0 as CheckboxCell,
  E0 as CodeCell,
  T0 as ColourCell,
  Ek as ComboChart,
  Yk as DASHBOARD_HIDDEN_STORAGE_KEY,
  bh as DASHBOARD_HIDE_KEY,
  Xk as DashboardShortcuts,
  Un as DataTable,
  ok as Dialog,
  sk as DialogClose,
  rk as DialogContent,
  ik as DialogDescription,
  uk as DialogFooter,
  dk as DialogHeader,
  vr as DialogOverlay,
  ck as DialogScrollContent,
  fk as DialogTitle,
  mk as DialogTrigger,
  Nk as DirectoryPage,
  B2 as DropdownMenu,
  z2 as DropdownMenuCheckboxItem,
  P2 as DropdownMenuContent,
  A2 as DropdownMenuGroup,
  j2 as DropdownMenuItem,
  O2 as DropdownMenuLabel,
  w$ as DropdownMenuPortal,
  L2 as DropdownMenuRadioGroup,
  V2 as DropdownMenuRadioItem,
  D2 as DropdownMenuSeparator,
  T2 as DropdownMenuShortcut,
  F2 as DropdownMenuSub,
  E2 as DropdownMenuSubContent,
  I2 as DropdownMenuSubTrigger,
  N2 as DropdownMenuTrigger,
  N0 as EditableCell,
  Re as FormFieldControl,
  Ik as HeatmapChart,
  Qe as ICON_PATHS,
  V0 as IconCell,
  D0 as ImageCell,
  c$ as InfoNode,
  Fs as JPEG_IMAGE_ERROR,
  I0 as KeyValueCell,
  pk as Label,
  qc as LineChart,
  Eh as LineItems,
  Ze as MiniStatCard,
  X2 as NavigationMenu,
  Q2 as NavigationMenuContent,
  ek as NavigationMenuIndicator,
  tk as NavigationMenuItem,
  ak as NavigationMenuLink,
  nk as NavigationMenuList,
  lk as NavigationMenuTrigger,
  mr as NavigationMenuViewport,
  Ts as OPAQUE_IMAGE_ERROR,
  f$ as PaymentGatewaySettings,
  cx as PaymentGateways,
  Vk as PieChart,
  Q0 as PkAlertError,
  h$ as PkAuroraBackdrop,
  Ie as PkBadge,
  Wx as PkBento,
  W0 as PkBottomNav,
  wk as PkBoundary,
  Pk as PkBuilder,
  le as PkButton,
  _k as PkCard,
  Ru as PkCheckboxList,
  Xt as PkCodeBox,
  Cu as PkCodeInput,
  rd as PkColourPicker,
  x$ as PkConsoleBackdrop,
  t0 as PkCountUp,
  Qx as PkCta,
  Ck as PkDeviceFrame,
  oc as PkDocument,
  Ne as PkDropdown,
  b$ as PkEditorialBackdrop,
  ly as PkFaq,
  uy as PkFeatureGrid,
  Z0 as PkFieldLabel,
  Zt as PkFileUpload,
  Me as PkHeading,
  by as PkHero,
  wi as PkKeyValue,
  g$ as PkLandingSections,
  $y as PkLogoCloud,
  bu as PkMarkdownInput,
  lt as PkModal,
  Wt as PkMultiSelect,
  Y0 as PkOtpInput,
  r$ as PkPasskeyRegister,
  e2 as PkPasswordInput,
  Ey as PkPricing,
  Bh as PkQtyStepper,
  so as PkQueryBuilder,
  Eu as PkRadioGroup,
  zk as PkRepeater,
  Dx as PkReveal,
  Oi as PkRichEditor,
  be as PkSection,
  Ae as PkSectionHeading,
  e0 as PkShowcase,
  Yg as PkSignaturePad,
  Oe as PkSkeleton,
  kt as PkSlideover,
  md as PkSlider,
  J0 as PkSpinner,
  s0 as PkStats,
  me as PkStatusBadge,
  Er as PkStepIndicator,
  f0 as PkSteps,
  Bd as PkSwatchPreview,
  Zu as PkTagsInput,
  $0 as PkTestimonials,
  $e as PkTextInput,
  Hx as PkTiltCard,
  Md as PkVisualSelect,
  Fk as PolarAreaChart,
  Tk as RadarChart,
  U0 as RecordActions,
  i$ as RecordForm,
  L0 as RelationPanel,
  Ep as STATUS_TONES,
  Dk as ScatterChart,
  E1 as SchemaNode,
  Hk as SegmentedBar,
  a$ as SelectionBar,
  ir as Separator,
  t$ as SetupChecklist,
  qt as ShadcnInput,
  Us as Sheet,
  t2 as SheetClose,
  qs as SheetContent,
  Gs as SheetDescription,
  a2 as SheetFooter,
  Ws as SheetHeader,
  Zs as SheetTitle,
  n2 as SheetTrigger,
  Jm as ShortcutsWidget,
  l2 as Sidebar,
  o2 as SidebarContent,
  s2 as SidebarFooter,
  r2 as SidebarGroup,
  i2 as SidebarGroupAction,
  u2 as SidebarGroupContent,
  d2 as SidebarGroupLabel,
  c2 as SidebarHeader,
  f2 as SidebarInput,
  m2 as SidebarInset,
  p2 as SidebarMenu,
  v2 as SidebarMenuAction,
  g2 as SidebarMenuBadge,
  b2 as SidebarMenuButton,
  x2 as SidebarMenuItem,
  y2 as SidebarMenuSkeleton,
  k2 as SidebarMenuSub,
  $2 as SidebarMenuSubButton,
  w2 as SidebarMenuSubItem,
  _2 as SidebarProvider,
  C2 as SidebarRail,
  M2 as SidebarSeparator,
  S2 as SidebarTrigger,
  Jk as SignatureStudio,
  Xe as Sparkline,
  vk as Spinner,
  Rk as StatCard,
  Uk as StatListChart,
  e$ as StatStrip,
  hr as Switch,
  Gt as TRANSPARENT_IMAGE_HELP,
  n$ as TablePagination,
  l$ as TableShell,
  o$ as TableTabs,
  s$ as TableToolbar,
  Ok as ThemeToggle,
  or as Tooltip,
  sr as TooltipContent,
  h2 as TooltipProvider,
  rr as TooltipTrigger,
  Qt as TrendBadge,
  u$ as UnsavedBar,
  Os as alertVariants,
  No as appearanceVars,
  it as applyAppearance,
  Hs as assertTransparentImage,
  Wl as buttonClasses,
  jt as catalogFiltersActive,
  J as cn,
  je as emptyCatalogFilters,
  Ir as fieldControl,
  Gk as findExactSku,
  go as hasBadgeValue,
  Mk as hasFieldControl,
  Ak as hasOptionPreview,
  oe as iconPath,
  Ns as imageHasTransparency,
  K0 as initializeAppearance,
  rt as isDark,
  ta as matchCatalogItem,
  pr as navigationMenuTriggerStyle,
  pd as optionPreview,
  yt as readAppearance,
  Vx as registerBuiltInFieldControls,
  xe as registerFieldControl,
  at as registerOptionPreview,
  Sk as registeredFieldTypes,
  vd as registeredOptionPreviews,
  Bk as resetFieldControls,
  jk as resetOptionPreviews,
  q0 as setAppearancePersister,
  ur as sidebarMenuButtonVariants,
  Hp as statusBadgeVariant,
  Rp as statusTone,
  X0 as toUrl,
  Kt as useAppearance,
  m$ as useColumnVisibility,
  p$ as useLiveUpdates,
  Nx as usePointer,
  aa as useReveal,
  R0 as useSchemaColumns,
  Iy as useScrollProgress,
  Ye as useSidebar,
  v$ as useTenantTheme,
  d$ as useUnsavedChanges,
  y$ as version
};
//# sourceMappingURL=index.js.map
