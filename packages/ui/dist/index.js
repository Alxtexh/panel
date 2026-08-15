import './ui.css';
import { defineComponent as z, ref as G, computed as $, openBlock as t, createElementBlock as n, normalizeClass as j, createElementVNode as s, createCommentVNode as _, Fragment as P, renderList as D, createTextVNode as R, toDisplayString as p, withModifiers as ce, createStaticVNode as pt, renderSlot as H, watch as re, nextTick as we, onBeforeUnmount as me, createBlock as F, Teleport as Te, createVNode as E, Transition as Ae, withCtx as L, onMounted as ue, normalizeStyle as Q, unref as x, resolveDynamicComponent as je, resolveComponent as vt, withDirectives as oe, vModelSelect as Le, vModelDynamic as ia, isRef as ua, vModelText as Me, useTemplateRef as da, mergeProps as ee, normalizeProps as be, guardReactiveProps as Pe, onErrorCaptured as ca, defineAsyncComponent as zt, vShow as Se, useSlots as fa, markRaw as ma, withKeys as pa, reactive as Ue, useModel as Ke, mergeModels as Be, createSlots as va, inject as ga, shallowRef as ha, watchEffect as ba } from "vue";
import { AlertCircle as xa, EyeOff as ya, Eye as ka, X as gt, PanelLeftOpen as $a, PanelLeftClose as wa, Check as It, Circle as Ca, ChevronRight as Nt, MoreHorizontal as _a, ChevronDown as Ma, Loader2Icon as Sa } from "@lucide/vue";
import { cva as ht } from "class-variance-authority";
import { clsx as Ba } from "clsx";
import { twMerge as Pa } from "tailwind-merge";
import { useVModel as Rt, reactiveOmit as le, useMediaQuery as za, useEventListener as Aa, defaultDocument as ja } from "@vueuse/core";
import { useForwardPropsEmits as de, DialogRoot as Ut, DialogClose as Fe, DialogOverlay as bt, DialogPortal as xt, DialogContent as yt, DialogDescription as Ht, DialogTitle as qt, DialogTrigger as Kt, createContext as Oa, Primitive as Ee, TooltipRoot as La, TooltipPortal as Va, TooltipContent as Da, TooltipArrow as Ta, TooltipProvider as Gt, TooltipTrigger as Fa, Separator as Ea, DropdownMenuRoot as Ia, DropdownMenuCheckboxItem as Na, DropdownMenuItemIndicator as Wt, DropdownMenuPortal as Ra, DropdownMenuContent as Ua, DropdownMenuGroup as Ha, useForwardProps as xe, DropdownMenuItem as qa, DropdownMenuLabel as Ka, DropdownMenuRadioGroup as Ga, DropdownMenuRadioItem as Wa, DropdownMenuSeparator as Za, DropdownMenuSub as Ja, DropdownMenuSubContent as Ya, DropdownMenuSubTrigger as Xa, DropdownMenuTrigger as Qa, AvatarRoot as en, AvatarFallback as tn, AvatarImage as an, NavigationMenuViewport as nn, NavigationMenuRoot as ln, NavigationMenuContent as sn, NavigationMenuIndicator as on, NavigationMenuItem as rn, NavigationMenuLink as un, NavigationMenuList as dn, NavigationMenuTrigger as cn, Label as fn, CheckboxRoot as mn, CheckboxIndicator as pn, SwitchRoot as vn, SwitchThumb as gn } from "reka-ui";
import { DropdownMenuPortal as Aw } from "reka-ui";
const hn = { class: "w-full border-collapse text-sm" }, bn = { class: "bg-background sticky top-0 z-10" }, xn = { class: "bg-muted/50" }, yn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, kn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, $n = ["checked", "indeterminate"], wn = ["onClick"], Cn = {
  key: 0,
  class: "text-xs"
}, _n = {
  key: 1,
  class: "text-xs opacity-40"
}, Mn = { key: 1 }, Sn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Bn = {
  key: 0,
  class: "bg-muted/40"
}, Pn = ["colspan"], zn = { class: "text-muted-foreground/70" }, An = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], jn = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, On = {
  key: 1,
  class: "px-3 py-2"
}, Ln = ["checked", "aria-label", "onChange"], Vn = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Dn = ["aria-label", "onClick"], Tn = { class: "text-xs" }, Fn = { key: 1 }, En = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, In = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, Nn = { key: 0 }, Rn = { class: "text-muted-foreground block text-[10px] font-medium" }, Un = { class: "font-semibold tabular-nums" }, Hn = { key: 1 }, qn = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, Kn = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, Gn = { class: "font-medium" }, Wn = {
  key: 0,
  class: "text-sm"
}, Zn = /* @__PURE__ */ z({
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
    function r(T) {
      return a.groupBy ? T === 0 ? !0 : a.rows[T]?.[a.groupBy.key] !== a.rows[T - 1]?.[a.groupBy.key] : !1;
    }
    function o(T) {
      const O = a.groupBy ? T[a.groupBy.key] : null;
      return O == null || O === "" ? "None" : String(O);
    }
    const i = G(null), u = G(null);
    function d(T, O) {
      i.value = T, O.dataTransfer?.setData("text/plain", String(T)), O.dataTransfer && (O.dataTransfer.effectAllowed = "move");
    }
    function m() {
      i.value = null, u.value = null;
    }
    function k(T) {
      return i.value === null || u.value !== T ? "" : i.value > T ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function f(T, O) {
      i.value !== null && (O.preventDefault(), u.value = T);
    }
    function h(T) {
      const O = i.value;
      if (i.value = null, u.value = null, O === null || O === T)
        return;
      const A = a.rows.map((I) => I[a.rowKey]), [W] = A.splice(O, 1);
      A.splice(T, 0, W), M("reorder", A);
    }
    const M = l;
    function C(T, O) {
      !a.rowClickable || a.reordering || O.button !== 0 || O.metaKey || O.ctrlKey || O.shiftKey || O.altKey || O.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || M("row-click", T);
    }
    const w = G(null), g = $(() => a.columns.filter((T) => !a.hidden?.has(T.key))), c = $(() => a.rows.map((T) => T[a.rowKey])), b = $(
      () => c.value.length > 0 && c.value.every((T) => a.selected?.has(T))
    ), v = $(
      () => !b.value && c.value.some((T) => a.selected?.has(T))
    );
    function y(T) {
      return T.sortKey ?? T.key;
    }
    function S(T) {
      return a.sort === y(T);
    }
    async function B(T, O, A) {
      try {
        await navigator.clipboard.writeText(String(A)), w.value = `${T}-${O.key}`, setTimeout(() => w.value = null, 1200);
      } catch {
      }
    }
    const K = $(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function N(T) {
      return a.summaries?.[T] ?? null;
    }
    function Y(T) {
      const O = a.summaries?.[T], A = a.summaryValues?.[T];
      if (!O)
        return "";
      if (A == null)
        return "-";
      const W = O.divideBy ? A / O.divideBy : A, I = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: O.decimals,
        maximumFractionDigits: O.decimals
      }).format(W);
      return `${O.prefix ?? ""}${I}${O.suffix ?? ""}`;
    }
    return (T, O) => (t(), n("div", {
      class: j(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      s("table", hn, [
        s("thead", bn, [
          s("tr", xn, [
            e.reordering ? (t(), n("th", yn)) : _("", !0),
            e.selectable && !e.reordering ? (t(), n("th", kn, [
              s("input", {
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: b.value,
                indeterminate: v.value,
                "aria-label": "Select all rows on this page",
                onChange: O[0] || (O[0] = (A) => M("toggle-page", !b.value))
              }, null, 40, $n)
            ])) : _("", !0),
            (t(!0), n(P, null, D(g.value, (A) => (t(), n("th", {
              key: A.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              A.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (W) => M("sort", y(A))
              }, [
                R(p(A.label) + " ", 1),
                S(A) ? (t(), n("span", Cn, p(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", _n, "↕"))
              ], 8, wn)) : (t(), n("span", Mn, p(A.label), 1))
            ]))), 128)),
            T.$slots.actions ? (t(), n("th", Sn, [...O[1] || (O[1] = [
              s("span", { class: "sr-only" }, "Actions", -1)
            ])])) : _("", !0)
          ])
        ]),
        s("tbody", {
          class: j(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(P, null, D(e.rows, (A, W) => (t(), n(P, {
            key: A[e.rowKey]
          }, [
            e.groupBy && r(W) ? (t(), n("tr", Bn, [
              s("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                s("span", zn, p(e.groupBy.label) + ":", 1),
                R(" " + p(o(A)), 1)
              ], 8, Pn)
            ])) : _("", !0),
            s("tr", {
              class: j(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                e.selected?.has(A[e.rowKey]) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                i.value === W ? "opacity-40" : "",
                k(W),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (I) => d(W, I),
              onDragover: (I) => f(W, I),
              onDrop: ce((I) => h(W), ["prevent"]),
              onDragend: m,
              onContextmenu: (I) => M("row-contextmenu", A, I),
              onClick: (I) => C(A, I)
            }, [
              e.reordering ? (t(), n("td", jn, [...O[2] || (O[2] = [
                pt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-4805f648><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4805f648><circle cx="9" cy="6" r="1.5" data-v-4805f648></circle><circle cx="15" cy="6" r="1.5" data-v-4805f648></circle><circle cx="9" cy="12" r="1.5" data-v-4805f648></circle><circle cx="15" cy="12" r="1.5" data-v-4805f648></circle><circle cx="9" cy="18" r="1.5" data-v-4805f648></circle><circle cx="15" cy="18" r="1.5" data-v-4805f648></circle></svg></span>', 1)
              ])])) : _("", !0),
              e.selectable && !e.reordering ? (t(), n("td", On, [
                s("input", {
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  checked: e.selected?.has(A[e.rowKey]),
                  "aria-label": `Select row ${A[e.rowKey]}`,
                  onChange: (I) => M("toggle-row", A[e.rowKey])
                }, null, 40, Ln)
              ])) : _("", !0),
              (t(!0), n(P, null, D(g.value, (I) => (t(), n("td", {
                key: I.key,
                class: j(["px-3 py-2 whitespace-nowrap", I.cellClass])
              }, [
                H(T.$slots, `cell:${I.key}`, {
                  row: A,
                  value: A[I.key],
                  column: I
                }, () => [
                  I.copyable ? (t(), n("span", Vn, [
                    R(p(A[I.key]) + " ", 1),
                    s("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${I.label.toLowerCase()}`,
                      onClick: (U) => B(String(A[e.rowKey]), I, A[I.key])
                    }, [
                      s("span", Tn, p(w.value === `${A[e.rowKey]}-${I.key}` ? "✓" : "⧉"), 1)
                    ], 8, Dn)
                  ])) : (t(), n("span", Fn, p(A[I.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              T.$slots.actions ? (t(), n("td", En, [
                H(T.$slots, "actions", { row: A }, void 0, !0)
              ])) : _("", !0)
            ], 42, An)
          ], 64))), 128))
        ], 2),
        K.value ? (t(), n("tfoot", In, [
          s("tr", null, [
            e.selectable ? (t(), n("td", Nn)) : _("", !0),
            (t(!0), n(P, null, D(e.columns, (A) => (t(), n(P, {
              key: `s-${A.key}`
            }, [
              e.hidden?.has(A.key) ? _("", !0) : (t(), n("td", {
                key: 0,
                class: j(["px-3 py-2 align-top text-sm whitespace-nowrap", A.cellClass])
              }, [
                N(A.key) ? (t(), n(P, { key: 0 }, [
                  s("span", Rn, p(N(A.key).label), 1),
                  s("span", Un, p(Y(A.key)), 1)
                ], 64)) : _("", !0)
              ], 2))
            ], 64))), 128)),
            T.$slots.actions ? (t(), n("td", Hn)) : _("", !0)
          ])
        ])) : _("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", qn, [
        O[3] || (O[3] = s("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        H(T.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", Kn, [
        s("p", Gn, p(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", Wn, p(e.emptyHint), 1)) : _("", !0)
      ])) : _("", !0)
    ], 2));
  }
}), kt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, o] of l)
    a[r] = o;
  return a;
}, Jn = /* @__PURE__ */ kt(Zn, [["__scopeId", "data-v-4805f648"]]), Yn = ["aria-label"], Xn = { class: "border-b px-5 py-4" }, Qn = { class: "text-base font-semibold" }, el = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, tl = { class: "px-5 py-4" }, al = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, it = /* @__PURE__ */ z({
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
    const u = G(!1);
    function d(f) {
      u.value = f.target === f.currentTarget;
    }
    function m(f) {
      u.value && f.target === f.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function k(f) {
      if (!a.open)
        return;
      if (f.key === "Escape" && !a.busy) {
        f.stopPropagation(), r("close");
        return;
      }
      if (f.key !== "Tab" || !o.value)
        return;
      const h = o.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (h.length === 0)
        return;
      const M = h[0], C = h[h.length - 1];
      f.shiftKey && document.activeElement === M ? (f.preventDefault(), C.focus()) : !f.shiftKey && document.activeElement === C && (f.preventDefault(), M.focus());
    }
    return re(
      () => a.open,
      (f) => {
        f ? (i = document.activeElement, document.addEventListener("keydown", k), we(
          () => o.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", k), i?.focus(), i = null);
      }
    ), me(() => document.removeEventListener("keydown", k)), (f, h) => (t(), F(Te, { to: "body" }, [
      E(Ae, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: d,
            onPointerup: m
          }, [
            s("div", {
              ref_key: "panel",
              ref: o,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
            }, [
              s("div", Xn, [
                s("h2", Qn, p(e.title), 1),
                e.description ? (t(), n("p", el, p(e.description), 1)) : _("", !0)
              ]),
              s("div", tl, [
                H(f.$slots, "default")
              ]),
              s("div", al, [
                H(f.$slots, "footer")
              ])
            ], 8, Yn)
          ], 32)) : _("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), at = {
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
  return e ? at[e] ?? at.dot : at.dot;
}
const nl = 160, He = /* @__PURE__ */ z({
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
    const a = e, r = G(!1), o = G(null), i = G(null), u = G({ top: 0, left: 0, minWidth: 0 }), d = G(null);
    let m = null;
    function k(y) {
      !a.dismissOnPanelClick || y.target?.closest("input, select, textarea, label, [data-keep-open]") || w();
    }
    async function f() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await we(), g());
    }
    function h() {
      m = setTimeout(w, 180);
    }
    async function M() {
      d.value = null, r.value = !r.value, r.value && (await we(), g());
    }
    async function C(y, S) {
      d.value = { x: y, y: S }, r.value = !0, await we(), g();
    }
    function w() {
      r.value = !1, d.value = null;
    }
    function g() {
      const y = o.value, S = i.value;
      if (!y || !S)
        return;
      const B = S.getBoundingClientRect(), K = 8, N = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : y.getBoundingClientRect();
      let Y, T;
      if (a.placement === "bottom")
        Y = N.bottom + a.offset, Y + B.height > window.innerHeight - K && N.top - B.height - a.offset > K && (Y = N.top - B.height - a.offset), T = a.align === "end" && !d.value ? N.right - B.width : N.left;
      else {
        Y = N.top;
        const O = a.placement === "right", A = N.right + a.offset + B.width < window.innerWidth - K, W = N.left - a.offset - B.width > K;
        T = (O ? A || !W : !W && A) ? N.right + a.offset : N.left - a.offset - B.width;
      }
      T = Math.min(Math.max(K, T), window.innerWidth - B.width - K), Y = Math.min(Math.max(K, Y), window.innerHeight - B.height - K), u.value = { top: Y, left: T, minWidth: Math.max(N.width, nl) };
    }
    function c(y) {
      if (!r.value)
        return;
      const S = y.target;
      o.value?.contains(S) || i.value?.contains(S) || (S instanceof Element ? S : S.parentElement)?.closest("[data-pk-overlay]") || w();
    }
    function b(y) {
      y.key === "Escape" && r.value && (y.stopPropagation(), w());
    }
    function v() {
      if (r.value) {
        if (d.value) {
          w();
          return;
        }
        g();
      }
    }
    return ue(() => {
      document.addEventListener("pointerdown", c), document.addEventListener("keydown", b), window.addEventListener("scroll", v, !0), window.addEventListener("resize", v);
    }), me(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", b), window.removeEventListener("scroll", v, !0), window.removeEventListener("resize", v);
    }), l({ close: w, openAt: C }), (y, S) => (t(), n("div", {
      ref_key: "root",
      ref: o,
      class: "relative",
      onPointerenter: S[2] || (S[2] = (B) => e.hoverable && f()),
      onPointerleave: S[3] || (S[3] = (B) => e.hoverable && h())
    }, [
      s("div", { onClick: M }, [
        H(y.$slots, "trigger", { open: r.value })
      ]),
      (t(), F(Te, { to: "body" }, [
        E(Ae, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: L(() => [
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
              onPointerenter: S[0] || (S[0] = (B) => e.hoverable && f()),
              onPointerleave: S[1] || (S[1] = (B) => e.hoverable && h()),
              onClick: k
            }, [
              H(y.$slots, "panel", { close: w })
            ], 38)) : _("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), ll = ["disabled"], sl = { class: "py-0.5" }, ol = ["disabled", "onClick"], rl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, il = ["d"], ul = ["disabled"], dl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, cl = ["d"], fl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, ml = ["disabled", "onClick"], pl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vl = ["d"], gl = { class: "text-muted-foreground text-sm" }, hl = { class: "text-foreground font-medium tabular-nums" }, bl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, xl = ["disabled"], yl = { class: "text-muted-foreground text-sm" }, kl = { class: "text-foreground font-medium tabular-nums" }, $l = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, wl = ["disabled"], N2 = /* @__PURE__ */ z({
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
    const a = e, r = l, o = G(null), i = G(!1), u = $(() => a.allMatching ? a.total : a.count), d = $(() => u.value !== void 0), m = $(() => d.value && u.value === 0), k = $(() => a.actions.filter((b) => !b.destructive)), f = $(() => a.actions.filter((b) => b.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function M(b) {
      return h[b.color ?? "gray"] ?? h.gray;
    }
    function C(b) {
      if (b.confirmation) {
        o.value = b;
        return;
      }
      r("run", b.key);
    }
    function w() {
      o.value && r("run", o.value.key), o.value = null;
    }
    function g() {
      i.value = !1, r("export");
    }
    const c = (b) => new Intl.NumberFormat().format(b);
    return (b, v) => (t(), n(P, null, [
      E(He, null, {
        trigger: L(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...v[5] || (v[5] = [
            R(" Bulk actions ", -1),
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
          ])], 8, ll)
        ]),
        panel: L(() => [
          s("div", sl, [
            (t(!0), n(P, null, D(k.value, (y) => (t(), n("button", {
              key: y.key,
              type: "button",
              role: "menuitem",
              class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(y)]),
              disabled: e.busy,
              onClick: (S) => C(y)
            }, [
              (t(), n("svg", rl, [
                s("path", {
                  d: x(se)(y.icon)
                }, null, 8, il)
              ])),
              R(" " + p(y.label), 1)
            ], 10, ol))), 128)),
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
                  d: x(se)("download")
                }, null, 8, cl)
              ])),
              v[6] || (v[6] = R(" Export CSV ", -1))
            ], 8, ul)) : _("", !0),
            f.value.length ? (t(), n("div", fl, [
              (t(!0), n(P, null, D(f.value, (y) => (t(), n("button", {
                key: y.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (S) => C(y)
              }, [
                (t(), n("svg", pl, [
                  s("path", {
                    d: x(se)(y.icon ?? "trash")
                  }, null, 8, vl)
                ])),
                R(" " + p(y.label), 1)
              ], 8, ml))), 128))
            ])) : _("", !0)
          ])
        ]),
        _: 1
      }),
      E(it, {
        open: o.value !== null,
        title: o.value?.label ?? "",
        description: o.value?.confirmation ?? "",
        onClose: v[2] || (v[2] = (y) => o.value = null)
      }, {
        footer: L(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: v[1] || (v[1] = (y) => o.value = null)
          }, " Cancel "),
          s("button", {
            type: "button",
            class: j([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              o.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || m.value,
            onClick: w
          }, p(o.value?.label), 11, xl)
        ]),
        default: L(() => [
          s("p", gl, [
            v[7] || (v[7] = R(" This will affect ", -1)),
            s("span", hl, [
              d.value ? (t(), n(P, { key: 1 }, [
                R(p(c(u.value)) + " record" + p(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(P, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            v[8] || (v[8] = R(" . ", -1))
          ]),
          m.value ? (t(), n("p", bl, " Nothing matches the current filters - there is nothing to " + p(o.value?.label?.toLowerCase()) + ". ", 1)) : _("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(it, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: v[4] || (v[4] = (y) => i.value = !1)
      }, {
        footer: L(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: v[3] || (v[3] = (y) => i.value = !1)
          }, " Cancel "),
          s("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || m.value,
            onClick: g
          }, " Export CSV ", 8, wl)
        ]),
        default: L(() => [
          s("p", yl, [
            v[9] || (v[9] = R(" This will export ", -1)),
            s("span", kl, [
              d.value ? (t(), n(P, { key: 1 }, [
                R(p(c(u.value)) + " record" + p(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(P, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            v[10] || (v[10] = R(" . ", -1))
          ]),
          m.value ? (t(), n("p", $l, " Nothing matches the current filters - there is nothing to export. ")) : _("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Cl = { class: "bg-card overflow-hidden rounded-lg border" }, _l = { class: "pk-scroll w-full overflow-x-auto" }, Ml = { class: "w-full border-collapse text-sm" }, Sl = { class: "bg-muted/40" }, Bl = { class: "divide-y" }, Pl = { key: 0 }, zl = ["colspan"], Al = { key: 1 }, jl = ["colspan"], Ol = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Ll = ["disabled"], Vl = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, R2 = /* @__PURE__ */ z({
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
    const a = e, r = l, o = $(() => a.columns.filter((u) => u.type !== "image"));
    function i(u, d) {
      return d == null || d === "" ? "-" : u.type === "date" || u.type === "datetime" ? new Date(String(d)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...u.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof d == "number" ? new Intl.NumberFormat().format(d) : String(d);
    }
    return (u, d) => (t(), n("div", Cl, [
      s("div", _l, [
        s("table", Ml, [
          s("thead", Sl, [
            s("tr", null, [
              (t(!0), n(P, null, D(o.value, (m) => (t(), n("th", {
                key: m.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, p(m.label), 1))), 128))
            ])
          ]),
          s("tbody", Bl, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", Pl, [
              s("td", {
                colspan: o.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, zl)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", Al, [
              s("td", {
                colspan: o.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, p(e.emptyText), 9, jl)
            ])) : _("", !0),
            (t(!0), n(P, null, D(e.rows, (m, k) => (t(), n("tr", {
              key: m.id ?? k,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(P, null, D(o.value, (f) => (t(), n("td", {
                key: f.key,
                class: j(["px-3 py-2 whitespace-nowrap", [
                  f.mono ? "font-mono text-xs" : "",
                  f.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                H(u.$slots, `cell:${f.key}`, {
                  row: m,
                  value: m[f.key],
                  column: f
                }, () => [
                  R(p(i(f, m[f.key])), 1)
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", Ol, [
        s("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (m) => r("load", e.nextCursor))
        }, p(e.loading ? "Loading…" : "Load more"), 9, Ll)
      ])) : e.capped ? (t(), n("p", Vl, " Showing the first " + p(e.rows.length) + ". Open the full list to search or filter the rest. ", 1)) : _("", !0)
    ]));
  }
}), Dl = ["title"], Tl = ["aria-label"], Fl = ["d"], El = { class: "sr-only" }, U2 = /* @__PURE__ */ z({
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
    }, o = $(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = $(() => l.icons[o.value] ?? l.defaultIcon), u = $(() => a[i.value] ?? a.dot), d = $(() => r[l.colors[o.value] ?? "neutral"] ?? r.neutral), m = $(() => l.labels[o.value] ?? String(l.value ?? "-"));
    return (k, f) => (t(), n("span", {
      class: "inline-flex items-center",
      title: m.value
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
        "aria-label": m.value
      }, [
        s("path", { d: u.value }, null, 8, Fl)
      ], 10, Tl)),
      s("span", El, p(m.value), 1)
    ], 8, Dl));
  }
}), Il = ["src"], Nl = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, H2 = /* @__PURE__ */ z({
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
      const u = typeof l.src == "string" ? l.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = $(() => {
      const u = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), n("span", {
      class: j(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      o.value && !a.value ? (t(), n("img", {
        key: 0,
        src: o.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (m) => a.value = !0)
      }, null, 40, Il)) : e.fallback === "initials" ? (t(), n(P, { key: 1 }, [
        R(p(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Nl, [...d[1] || (d[1] = [
        s("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : _("", !0)
    ], 2));
  }
}), Rl = {
  key: 0,
  class: "text-muted-foreground"
}, Ul = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Hl = {
  key: 0,
  class: "font-mono text-xs"
}, ql = {
  key: 1,
  class: "sr-only"
}, q2 = /* @__PURE__ */ z({
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
    return (o, i) => r.value === null ? (t(), n("span", Rl, "-")) : (t(), n("span", Ul, [
      s("span", {
        class: "size-4 shrink-0 rounded border",
        style: Q({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Hl, p(r.value), 1)) : (t(), n("span", ql, p(r.value), 1))
    ]));
  }
}), Kl = { class: "inline-flex items-center" }, Gl = ["checked", "aria-label"], Wl = { class: "sr-only" }, K2 = /* @__PURE__ */ z({
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
      }, null, 8, Gl),
      s("span", Wl, p(r.value), 1)
    ]));
  }
}), Zl = {
  key: 0,
  class: "text-muted-foreground"
}, Jl = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, G2 = /* @__PURE__ */ z({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = $(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, o) => a.value ? (t(), n("code", Jl, p(a.value), 1)) : (t(), n("span", Zl, "—"));
  }
}), Yl = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Xl = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Ql = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Zt(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Yl, Xl[l], Ql[a], e.class].filter(Boolean).join(" ");
}
const ne = /* @__PURE__ */ z({
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
      () => Zt({ variant: l.variant, size: l.size, class: l.class })
    ), r = $(() => l.as === "button" ? l.type : void 0);
    return (o, i) => (t(), F(je(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: j(a.value)
    }, {
      default: L(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), es = { class: "flex items-center gap-2" }, ts = ["onUpdate:modelValue", "onChange"], as = ["value"], ns = ["onUpdate:modelValue"], ls = ["value"], ss = ["onUpdate:modelValue"], os = ["onUpdate:modelValue", "multiple"], rs = ["value"], is = ["onUpdate:modelValue", "type"], us = ["aria-label", "onClick"], ds = { class: "flex items-center gap-2" }, cs = /* @__PURE__ */ z({
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
    const u = (v) => "rules" in v, d = $(() => Object.keys(a.fields));
    function m(v) {
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
    function f() {
      r("update:modelValue", i.value);
    }
    function h() {
      const v = d.value[0];
      i.value.rules.push({
        field: v,
        operator: m(v)[0],
        value: void 0
      }), f();
    }
    function M() {
      i.value.rules.push(o()), f();
    }
    function C(v) {
      i.value.rules.splice(v, 1), f();
    }
    function w(v) {
      v.operator = m(v.field)[0], v.value = void 0, f();
    }
    const g = $(() => a.depth + 1 < a.maxDepth);
    function c() {
      i.value = o(), f(), r("apply", null);
    }
    function b() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (v, y) => {
      const S = vt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: j(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        s("div", es, [
          oe(s("select", {
            "onUpdate:modelValue": y[0] || (y[0] = (B) => i.value.logic = B),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: f
          }, [...y[1] || (y[1] = [
            s("option", { value: "and" }, "Match all", -1),
            s("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Le, i.value.logic]
          ]),
          y[2] || (y[2] = s("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(P, null, D(i.value.rules, (B, K) => (t(), n("div", {
          key: K,
          class: "flex items-start gap-2"
        }, [
          u(B) ? (t(), F(S, {
            key: 0,
            modelValue: i.value.rules[K],
            "onUpdate:modelValue": [(N) => i.value.rules[K] = N, f],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(P, { key: 1 }, [
            oe(s("select", {
              "onUpdate:modelValue": (N) => B.field = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (N) => w(B)
            }, [
              (t(!0), n(P, null, D(d.value, (N) => (t(), n("option", {
                key: N,
                value: N
              }, p(e.fields[N].label), 9, as))), 128))
            ], 40, ts), [
              [Le, B.field]
            ]),
            oe(s("select", {
              "onUpdate:modelValue": (N) => B.operator = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: f
            }, [
              (t(!0), n(P, null, D(m(B.field), (N) => (t(), n("option", {
                key: N,
                value: N
              }, p(k[N] ?? N), 9, ls))), 128))
            ], 40, ns), [
              [Le, B.operator]
            ]),
            B.field && e.fields[B.field]?.kind === "boolean" ? oe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (N) => B.value = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: f
            }, [...y[3] || (y[3] = [
              s("option", { value: !0 }, "Yes", -1),
              s("option", { value: !1 }, "No", -1)
            ])], 40, ss)), [
              [Le, B.value]
            ]) : B.field && e.fields[B.field]?.options?.length ? oe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (N) => B.value = N,
              multiple: e.fields[B.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: f
            }, [
              (t(!0), n(P, null, D(e.fields[B.field].options, (N) => (t(), n("option", {
                key: N,
                value: N
              }, p(N), 9, rs))), 128))
            ], 40, os)), [
              [Le, B.value]
            ]) : oe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (N) => B.value = N,
              type: B.field && e.fields[B.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: f
            }, null, 40, is)), [
              [ia, B.value]
            ])
          ], 64)),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(B) ? "group" : "rule"}`,
            onClick: (N) => C(K)
          }, " × ", 8, us)
        ]))), 128)),
        s("div", ds, [
          E(ne, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: L(() => [...y[4] || (y[4] = [
              R("Add rule", -1)
            ])]),
            _: 1
          }),
          g.value ? (t(), F(ne, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: L(() => [...y[5] || (y[5] = [
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : _("", !0),
          e.root ? (t(), n(P, { key: 1 }, [
            y[8] || (y[8] = s("span", { class: "flex-1" }, null, -1)),
            E(ne, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: c
            }, {
              default: L(() => [...y[6] || (y[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(ne, {
              type: "button",
              size: "sm",
              onClick: b
            }, {
              default: L(() => [...y[7] || (y[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : _("", !0)
        ])
      ], 2);
    };
  }
}), fs = {
  key: 0,
  class: "font-mono text-xs"
}, ms = {
  key: 1,
  class: "text-muted-foreground"
}, ps = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, W2 = /* @__PURE__ */ z({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = $(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, o) => a.value === null && e.value != null ? (t(), n("span", fs, p(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", ms, "—")) : (t(), n("span", ps, p(a.value.length) + " " + p(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), vs = ["aria-checked", "aria-label", "title", "disabled"], gs = ["value", "disabled"], hs = ["value"], Z2 = /* @__PURE__ */ z({
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
    const a = e, r = l, o = $(() => a.value === !0 || a.value === 1 || a.value === "1"), i = $(() => a.busy || a.disabled), u = $(
      () => o.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function d() {
      i.value || r("change", !o.value);
    }
    function m(k) {
      const f = k.target.value;
      f !== String(a.value ?? "") && r("change", f);
    }
    return (k, f) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": o.value,
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: j(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", o.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ce(d, ["stop"])
    }, [
      s("span", {
        class: j(["bg-background size-4 rounded-full shadow-sm transition-transform", o.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, vs)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: f[0] || (f[0] = ce(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), n(P, null, D(e.options, (h, M) => (t(), n("option", {
        key: M,
        value: M
      }, p(h), 9, hs))), 128))
    ], 40, gs));
  }
}), bs = ["data-variant"], xs = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Re = /* @__PURE__ */ z({
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
      () => [xs, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (o, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: j(r.value)
    }, [
      H(o.$slots, "default")
    ], 10, bs));
  }
}), $t = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function ys(e) {
  return e != null && e !== "";
}
function ks(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function J2(e) {
  const l = $(
    () => e.value.map((o) => ({
      key: o.key,
      label: o.label,
      sortable: o.sortable,
      sortKey: o.sortKey,
      locked: o.locked,
      copyable: o.copyable,
      cellClass: ks(o)
    }))
  ), a = $(() => Object.fromEntries(e.value.map((o) => [o.key, o])));
  function r(o, i) {
    const u = a.value[o];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), m = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return $t[m] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const $s = ["disabled", "aria-label", "aria-busy"], ws = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Cs = ["d"], _s = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Ms = ["disabled", "onClick"], Ss = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Bs = ["d"], Ps = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Y2 = /* @__PURE__ */ z({
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
    const a = e, r = l, o = $(() => a.busy || a.disabled), i = $(() => String(a.value ?? "")), u = $(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function d(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function m(h) {
      const M = a.colors[d(h)] ?? a.defaultColor ?? "neutral";
      return $t[M] ?? "outline";
    }
    function k(h) {
      return a.options[h] ?? h;
    }
    function f(h, M) {
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
      e.disabled ? (t(), F(Re, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: L(() => [
          R(p(k(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), F(He, {
        key: 0,
        align: "start"
      }, {
        trigger: L(() => [
          s("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: o.value,
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            E(Re, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                R(p(k(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", ws, [
              s("path", {
                d: x(se)("chevron-down")
              }, null, 8, Cs)
            ]))
          ], 8, $s)
        ]),
        panel: L(({ close: C }) => [
          s("div", _s, p(u.value), 1),
          (t(!0), n(P, null, D(e.options, (w, g) => (t(), n("button", {
            key: g,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: o.value,
            onClick: (c) => f(String(g), C)
          }, [
            E(Re, {
              variant: m(g),
              class: "capitalize"
            }, {
              default: L(() => [
                R(p(w), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(g) === i.value ? (t(), n("svg", Ss, [
              s("path", {
                d: x(se)("check")
              }, null, 8, Bs)
            ])) : (t(), n("span", Ps))
          ], 8, Ms))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), zs = { class: "flex items-center justify-end" }, As = ["aria-label"], js = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Os = ["d"], Ls = ["href"], Vs = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ds = ["d"], Ts = ["disabled", "onClick"], Fs = ["d"], Es = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Is = ["disabled", "onClick"], Ns = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rs = ["d"], X2 = /* @__PURE__ */ z({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, o = a, i = G(null), u = G(null), d = $(() => r.groups.flatMap((c) => c.actions)), m = $(() => d.value.filter((c) => !c.destructive)), k = $(() => d.value.filter((c) => c.destructive)), f = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(c) {
      return f[c.color ?? "gray"] ?? f.gray;
    }
    const M = $(() => d.value.length === 0);
    function C(c) {
      o("run", c);
    }
    function w(c) {
      M.value || (c.preventDefault(), i.value?.openAt(c.clientX, c.clientY));
    }
    function g(c) {
      if (c.key !== "ArrowDown" && c.key !== "ArrowUp")
        return;
      const b = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (b.length === 0)
        return;
      c.preventDefault();
      const v = b.indexOf(document.activeElement), y = c.key === "ArrowDown" ? 1 : -1, S = (v + y + b.length) % b.length;
      b[S]?.focus();
    }
    return l({ openContextMenu: w }), (c, b) => (t(), n("div", zs, [
      M.value ? _("", !0) : (t(), F(He, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: L(() => [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), n("svg", js, [
              s("path", {
                d: x(se)("more-vertical")
              }, null, 8, Os)
            ]))
          ], 8, As)
        ]),
        panel: L(() => [
          s("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: g
          }, [
            (t(!0), n(P, null, D(m.value, (v) => (t(), n(P, {
              key: v.key
            }, [
              v.link ? (t(), n("a", {
                key: 0,
                href: v.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(v)])
              }, [
                (t(), n("svg", Vs, [
                  s("path", {
                    d: x(se)(v.icon)
                  }, null, 8, Ds)
                ])),
                R(" " + p(v.label), 1)
              ], 10, Ls)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(v)]),
                disabled: e.busy === v.key,
                onClick: (y) => C(v)
              }, [
                (t(), n("svg", {
                  class: j(["size-4 shrink-0", e.busy === v.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  s("path", {
                    d: x(se)(v.icon)
                  }, null, 8, Fs)
                ], 2)),
                R(" " + p(v.label), 1)
              ], 10, Ts))
            ], 64))), 128)),
            k.value.length ? (t(), n("div", Es, [
              (t(!0), n(P, null, D(k.value, (v) => (t(), n("button", {
                key: v.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === v.key,
                onClick: (y) => C(v)
              }, [
                (t(), n("svg", Ns, [
                  s("path", {
                    d: x(se)(v.icon ?? "trash")
                  }, null, 8, Rs)
                ])),
                R(" " + p(v.label), 1)
              ], 8, Is))), 128))
            ])) : _("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), ut = {
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
}, Je = 12, Ye = 20, Us = [0, 0.25, 0.5, 0.75, 1], wt = "alxtexhpanel.appearance", $e = {
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
}, ze = G({ ...$e });
let At = !1;
const Hs = "alxtexhpanel.appearance.vars";
function ct(e) {
  return e.theme === "dark";
}
const jt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function qs(e) {
  const l = ut[e.primary] ?? ut.slate, a = dt[e.surface] ?? dt.neutral, r = a.chroma, o = a.hue, u = ct(e) ? {
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
    "--pk-row-padding": jt[e.density] ?? jt.comfortable
  };
}
function Ct() {
  if (typeof window > "u")
    return { ...$e };
  try {
    const e = localStorage.getItem(wt);
    if (!e)
      return { ...$e };
    const l = { ...$e, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = $e.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? $e.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < Je || l.fontSize > Ye) && (l.fontSize = $e.fontSize), l;
  } catch {
    return { ...$e };
  }
}
function Q2(e) {
  const l = Ct(), a = e ? { ...l, ...e } : l;
  if (ze.value = a, ft(a), e)
    try {
      localStorage.setItem(wt, JSON.stringify(a));
    } catch {
    }
}
let Jt = null;
function ek(e) {
  Jt = e;
}
let Yt = {};
function Ks(e) {
  if (Yt = e, !(typeof document > "u") && !Ct().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function ft(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...qs(e), ...e.primaryChosen ? {} : Yt };
  l.classList.toggle("dark", ct(e));
  for (const [r, o] of Object.entries(a))
    l.style.setProperty(r, o);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Hs,
      JSON.stringify({ dark: ct(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function Xt() {
  function e(r) {
    ft(r);
  }
  function l(r) {
    const o = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    ze.value = { ...ze.value, ...r, ...o };
    try {
      localStorage.setItem(wt, JSON.stringify(ze.value));
    } catch {
    }
    e(ze.value), Jt?.({ ...r, ...o });
  }
  function a() {
    l({ ...$e });
  }
  return ue(() => {
    At || (At = !0, ze.value = Ct(), ft(ze.value));
  }), {
    appearance: $(() => ze.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: ut,
    SURFACE_TINTS: dt,
    FONT_SIZE_MIN: Je,
    FONT_SIZE_MAX: Ye,
    RADIUS_OPTIONS: Us
  };
}
const Gs = { class: "flex items-center justify-between border-b px-4 py-3" }, Ws = { class: "flex items-center gap-2" }, Zs = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Js = { class: "flex flex-col gap-2" }, Ys = { class: "grid grid-cols-8 gap-2" }, Xs = ["title", "aria-label", "aria-pressed", "onClick"], Qs = { class: "flex flex-col gap-2" }, eo = { class: "grid grid-cols-8 gap-2" }, to = ["title", "aria-label", "aria-pressed", "onClick"], ao = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, no = { class: "flex flex-col gap-2" }, lo = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, so = ["aria-pressed", "aria-label", "onClick"], oo = { class: "text-sm font-semibold" }, ro = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, io = ["onClick"], uo = { class: "flex flex-col gap-2" }, co = { class: "flex items-center justify-between" }, fo = { class: "text-muted-foreground text-xs tabular-nums" }, mo = { class: "flex items-center gap-2" }, po = ["disabled"], vo = ["min", "max", "value"], go = ["disabled"], tk = /* @__PURE__ */ z({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: o, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = Xt(), d = G(!1), m = $(() => l.value.sidebarSide === "right"), k = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], f = [
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
    ], C = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], w = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function g(c, b) {
      return `oklch(0.72 ${b * 3} ${c})`;
    }
    return (c, b) => (t(), n(P, null, [
      s("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: b[0] || (b[0] = (v) => d.value = !0)
      }, [...b[7] || (b[7] = [
        pt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), F(Te, { to: "body" }, [
        E(Ae, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: L(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: b[1] || (b[1] = (v) => d.value = !1)
            })) : _("", !0)
          ]),
          _: 1
        }),
        E(Ae, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": m.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": m.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: L(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: j(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              s("header", Gs, [
                b[9] || (b[9] = s("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                s("div", Ws, [
                  s("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: b[2] || (b[2] = //@ts-ignore
                    (...v) => x(r) && x(r)(...v))
                  }, " Reset "),
                  s("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: b[3] || (b[3] = (v) => d.value = !1)
                  }, [...b[8] || (b[8] = [
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
              s("div", Zs, [
                s("section", Js, [
                  b[11] || (b[11] = s("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  s("div", Ys, [
                    (t(!0), n(P, null, D(x(o), (v, y) => (t(), n("button", {
                      key: y,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: Q({ background: v.value }),
                      title: v.label,
                      "aria-label": v.label,
                      "aria-pressed": x(l).primary === y,
                      onClick: (S) => x(a)({ primary: y })
                    }, [
                      x(l).primary === y ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: Q({ color: v.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...b[10] || (b[10] = [
                        s("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : _("", !0)
                    ], 12, Xs))), 128))
                  ])
                ]),
                s("section", Qs, [
                  b[13] || (b[13] = s("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  s("div", eo, [
                    (t(!0), n(P, null, D(x(i), (v, y) => (t(), n("button", {
                      key: y,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: Q({ background: g(v.hue, v.chroma) }),
                      title: v.label,
                      "aria-label": v.label,
                      "aria-pressed": x(l).surface === y,
                      onClick: (S) => x(a)({ surface: y })
                    }, [
                      x(l).surface === y ? (t(), n("svg", ao, [...b[12] || (b[12] = [
                        s("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : _("", !0)
                    ], 12, to))), 128))
                  ])
                ]),
                s("section", no, [
                  b[14] || (b[14] = s("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  s("div", lo, [
                    (t(!0), n(P, null, D(x(u), (v) => (t(), n("button", {
                      key: v,
                      type: "button",
                      class: j([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l).radius === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(l).radius === v,
                      "aria-label": `${v}rem radius`,
                      onClick: (y) => x(a)({ radius: v })
                    }, [
                      s("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: Q({ borderRadius: `${Math.min(v, 0.5)}rem` })
                      }, null, 4),
                      R(" " + p(v), 1)
                    ], 10, so))), 128))
                  ])
                ]),
                (t(!0), n(P, null, D([
                  { label: "Color scheme", key: "theme", options: k },
                  { label: "Card style", key: "cardStyle", options: h },
                  { label: "Table density", key: "density", options: f },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: C },
                  { label: "Menu style", key: "menuStyle", options: w }
                ], (v) => (t(), n("section", {
                  key: v.key,
                  class: "flex flex-col gap-2"
                }, [
                  s("h3", oo, p(v.label), 1),
                  s("div", ro, [
                    (t(!0), n(P, null, D(v.options, (y) => (t(), n("button", {
                      key: String(y.value),
                      type: "button",
                      class: j([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l)[v.key] === y.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (S) => x(a)({ [v.key]: y.value })
                    }, p(y.label), 11, io))), 128))
                  ])
                ]))), 128)),
                s("section", uo, [
                  s("div", co, [
                    b[15] || (b[15] = s("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    s("span", fo, p(x(l).fontSize) + "px", 1)
                  ]),
                  s("div", mo, [
                    s("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize <= x(Je),
                      "aria-label": "Decrease font size",
                      onClick: b[4] || (b[4] = (v) => x(a)({ fontSize: x(l).fontSize - 1 }))
                    }, " − ", 8, po),
                    s("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(Je),
                      max: x(Ye),
                      value: x(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: b[5] || (b[5] = (v) => x(a)({
                        fontSize: Number(v.target.value)
                      }))
                    }, null, 40, vo),
                    s("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize >= x(Ye),
                      "aria-label": "Increase font size",
                      onClick: b[6] || (b[6] = (v) => x(a)({ fontSize: x(l).fontSize + 1 }))
                    }, " + ", 8, go)
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
}), ho = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, bo = { class: "flex items-stretch" }, xo = ["href", "aria-current"], yo = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ko = ["d"], $o = { class: "w-full truncate text-center" }, wo = {
  key: 0,
  class: "flex-1"
}, Co = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, _o = ["d"], Mo = { class: "w-full truncate text-center" }, nt = 5, ak = /* @__PURE__ */ z({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(
      () => a.items.length <= nt ? a.items : a.items.slice(0, nt - 1)
    ), i = $(() => a.items.length > nt);
    function u(d) {
      return d === "/" ? a.current === "/" : a.current === d || a.current.startsWith(`${d}/`);
    }
    return (d, m) => (t(), n("nav", ho, [
      s("ul", bo, [
        (t(!0), n(P, null, D(o.value, (k) => (t(), n("li", {
          key: k.key,
          class: "flex-1"
        }, [
          s("a", {
            href: k.href,
            class: j([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(k.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(k.href) ? "page" : void 0
          }, [
            (t(), n("svg", yo, [
              s("path", {
                d: x(se)(k.icon)
              }, null, 8, ko)
            ])),
            s("span", $o, p(k.title), 1)
          ], 10, xo)
        ]))), 128)),
        i.value ? (t(), n("li", wo, [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (k) => r("more"))
          }, [
            (t(), n("svg", Co, [
              s("path", {
                d: x(se)("more-horizontal")
              }, null, 8, _o)
            ])),
            s("span", Mo, p(e.moreLabel), 1)
          ])
        ])) : _("", !0)
      ])
    ]));
  }
}), So = ["value"], Bo = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", fe = /* @__PURE__ */ z({
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
      class: j([Bo, a.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, So));
  }
}), Po = ["for"], he = /* @__PURE__ */ z({
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
      H(l.$slots, "default")
    ], 10, Po));
  }
}), nk = /* @__PURE__ */ z({
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
      s("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      s("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), zo = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Ao = ["id", "name", "value", "disabled", "maxlength"], jo = ["data-active"], Oo = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, lk = /* @__PURE__ */ z({
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
    ue(() => {
      a.autofocus && i.value?.focus();
    });
    const u = $(
      () => Array.from({ length: a.length }, (k, f) => a.modelValue[f] ?? "")
    ), d = $(() => Math.min(a.modelValue.length, a.length - 1));
    function m(k) {
      const f = k.target.value;
      r("update:modelValue", f.replace(/\D/g, "").slice(0, a.length));
    }
    return (k, f) => (t(), n("div", zo, [
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
        onInput: m,
        onFocus: f[0] || (f[0] = (h) => o.value = !0),
        onBlur: f[1] || (f[1] = (h) => o.value = !1)
      }, null, 40, Ao),
      (t(!0), n(P, null, D(u.value, (h, M) => (t(), n("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": o.value && M === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(p(h) + " ", 1),
        o.value && M === d.value && h === "" ? (t(), n("div", Oo, [...f[2] || (f[2] = [
          s("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : _("", !0)
      ], 8, jo))), 128))
    ]));
  }
}), Lo = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ce = /* @__PURE__ */ z({
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
      s("h2", {
        class: j(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, p(e.title), 3),
      e.description ? (t(), n("p", Lo, p(e.description), 1)) : _("", !0)
    ], 2));
  }
});
function J(...e) {
  return Pa(Ba(e));
}
function sk(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Vo = /* @__PURE__ */ z({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: j(x(J)(x(Fo)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Do = /* @__PURE__ */ z({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: j(x(J)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), To = /* @__PURE__ */ z({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: j(x(J)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Fo = ht(
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
), Eo = { class: "list-inside list-disc text-sm" }, ok = /* @__PURE__ */ z({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = $(() => Array.from(new Set(l.errors)));
    return (r, o) => (t(), F(x(Vo), { variant: "destructive" }, {
      default: L(() => [
        E(x(xa), { class: "size-4" }),
        E(x(To), null, {
          default: L(() => [
            R(p(e.title), 1)
          ]),
          _: 1
        }),
        E(x(Do), null, {
          default: L(() => [
            s("ul", Eo, [
              (t(!0), n(P, null, D(a.value, (i, u) => (t(), n("li", { key: u }, p(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Qt = /* @__PURE__ */ z({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, o = Rt(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => oe((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => ua(o) ? o.value = d : null),
      "data-slot": "input",
      class: j(
        x(J)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Me, x(o)]
    ]);
  }
}), Io = { class: "relative" }, No = ["aria-label"], rk = /* @__PURE__ */ z({
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
    }), (i, u) => (t(), n("div", Io, [
      E(x(Qt), ee({
        ref_key: "inputRef",
        ref: o,
        type: r.value ? "text" : "password",
        class: x(J)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      s("button", {
        type: "button",
        class: j(
          x(J)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), F(x(ya), {
          key: 0,
          class: "size-4"
        })) : (t(), F(x(ka), {
          key: 1,
          class: "size-4"
        }))
      ], 10, No)
    ]));
  }
}), ea = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Ro = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Uo = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Ho(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function qo(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Ko(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Go(l), r = document.createElement("canvas"), o = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = o, r.height = i;
    const u = r.getContext("2d", { willReadFrequently: !0 });
    if (!u)
      return !1;
    u.drawImage(a, 0, 0);
    const { data: d } = u.getImageData(0, 0, o, i);
    for (let m = 3; m < d.length; m += 4)
      if ((d[m] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function Go(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Wo(e) {
  if (Ho(e))
    throw new Error(Uo);
  if (!qo(e))
    throw new Error(ea);
  if (!await Ko(e))
    throw new Error(Ro);
}
const Zo = /* @__PURE__ */ z({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = de(e, l);
    return (i, u) => (t(), F(x(Ut), ee({ "data-slot": "sheet" }, x(o)), {
      default: L((d) => [
        H(i.$slots, "default", be(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), ik = /* @__PURE__ */ z({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Fe), ee({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jo = /* @__PURE__ */ z({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(x(bt), ee({
      "data-slot": "sheet-overlay",
      class: x(J)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, x(a)), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yo = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class", "side"), i = de(o, r);
    return (u, d) => (t(), F(x(xt), null, {
      default: L(() => [
        E(Jo),
        E(x(yt), ee({
          "data-slot": "sheet-content",
          class: x(J)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...x(i) }), {
          default: L(() => [
            H(u.$slots, "default"),
            E(x(Fe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                E(x(gt), { class: "size-4" }),
                d[0] || (d[0] = s("span", { class: "sr-only" }, "Close", -1))
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
}), Xo = /* @__PURE__ */ z({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(x(Ht), ee({
      "data-slot": "sheet-description",
      class: x(J)("text-muted-foreground text-sm", l.class)
    }, x(a)), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uk = /* @__PURE__ */ z({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: j(x(J)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Qo = /* @__PURE__ */ z({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: j(x(J)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), er = /* @__PURE__ */ z({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(x(qt), ee({
      "data-slot": "sheet-title",
      class: x(J)("text-foreground font-semibold", l.class)
    }, x(a)), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dk = /* @__PURE__ */ z({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Kt), ee({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ot = "sidebar_state", tr = 3600 * 24 * 7, ar = "16rem", nr = "18rem", lr = "3rem", sr = "b", [et, or] = Oa("Sidebar"), rr = { class: "flex h-full w-full flex-col" }, ir = ["data-state", "data-collapsible", "data-variant", "data-side"], ur = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, ck = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: o, setOpenMobile: i } = et();
    return (u, d) => e.collapsible === "none" ? (t(), n("div", ee({
      key: 0,
      "data-slot": "sidebar",
      class: x(J)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      H(u.$slots, "default")
    ], 16)) : x(a) ? (t(), F(x(Zo), ee({
      key: 1,
      open: x(o)
    }, u.$attrs, { "onUpdate:open": x(i) }), {
      default: L(() => [
        E(x(Yo), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: Q({
            "--sidebar-width": x(nr)
          })
        }, {
          default: L(() => [
            E(Qo, { class: "sr-only" }, {
              default: L(() => [
                E(er, null, {
                  default: L(() => [...d[0] || (d[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(Xo, null, {
                  default: L(() => [...d[1] || (d[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            s("div", rr, [
              H(u.$slots, "default")
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
      s("div", {
        class: j(
          x(J)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      s("div", ee({
        class: x(J)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        s("div", ur, [
          H(u.$slots, "default")
        ])
      ], 16)
    ], 8, ir));
  }
}), fk = /* @__PURE__ */ z({
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
        x(J)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), mk = /* @__PURE__ */ z({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: j(x(J)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), pk = /* @__PURE__ */ z({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: j(x(J)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), vk = /* @__PURE__ */ z({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Ee), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        x(J)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), gk = /* @__PURE__ */ z({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: j(x(J)("w-full text-sm", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), hk = /* @__PURE__ */ z({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Ee), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        x(J)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), bk = /* @__PURE__ */ z({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: j(x(J)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), xk = /* @__PURE__ */ z({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Qt), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: j(x(J)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), yk = /* @__PURE__ */ z({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: j(
        x(J)(
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
      H(a.$slots, "default")
    ], 2));
  }
}), kk = /* @__PURE__ */ z({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: j(x(J)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), $k = /* @__PURE__ */ z({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Ee), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: j(
        x(J)(
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
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), wk = /* @__PURE__ */ z({
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
        x(J)(
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
}), dr = /* @__PURE__ */ z({
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
    const o = de(e, l);
    return (i, u) => (t(), F(x(La), ee({ "data-slot": "tooltip" }, x(o)), {
      default: L((d) => [
        H(i.$slots, "default", be(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), cr = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(Va), null, {
      default: L(() => [
        E(x(Da), ee({ "data-slot": "tooltip-content" }, { ...x(i), ...u.$attrs }, {
          class: x(J)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: L(() => [
            H(u.$slots, "default"),
            E(x(Ta), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ck = /* @__PURE__ */ z({
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
    return (a, r) => (t(), F(x(Gt), be(Pe(l)), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fr = /* @__PURE__ */ z({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Fa), ee({ "data-slot": "tooltip-trigger" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lt = /* @__PURE__ */ z({
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
    return (a, r) => (t(), F(x(Ee), ee({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(J)(x(pr)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), _k = /* @__PURE__ */ z({
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
    const l = e, { isMobile: a, state: r } = et(), o = le(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), F(x(dr), { key: 1 }, {
      default: L(() => [
        E(x(fr), { "as-child": "" }, {
          default: L(() => [
            E(Lt, be(Pe({ ...x(o), ...i.$attrs })), {
              default: L(() => [
                H(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(x(cr), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(a)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), n(P, { key: 0 }, [
              R(p(e.tooltip), 1)
            ], 64)) : (t(), F(je(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), F(Lt, be(ee({ key: 0 }, { ...x(o), ...i.$attrs })), {
      default: L(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mk = /* @__PURE__ */ z({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: j(x(J)("group/menu-item relative", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Vt = "animate-pulse rounded-md bg-primary/10", Sk = /* @__PURE__ */ z({
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
      class: j(x(J)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: j(x(J)(Vt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : _("", !0),
      s("div", {
        class: j(x(J)(Vt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: Q({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), Bk = /* @__PURE__ */ z({
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
        x(J)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Pk = /* @__PURE__ */ z({
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
    return (a, r) => (t(), F(x(Ee), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: j(
        x(J)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-primary/10 data-[active=true]:text-primary",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), zk = /* @__PURE__ */ z({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: j(x(J)("group/menu-sub-item relative", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Ak = /* @__PURE__ */ z({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !ja?.cookie.includes(`${Ot}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = za("(max-width: 767px)"), i = G(!1), u = Rt(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(h) {
      u.value = h, document.cookie = `${Ot}=${u.value}; path=/; max-age=${tr}`;
    }
    function m(h) {
      i.value = h;
    }
    function k() {
      return o.value ? m(!i.value) : d(!u.value);
    }
    Aa("keydown", (h) => {
      h.key === sr && (h.metaKey || h.ctrlKey) && (h.preventDefault(), k());
    });
    const f = $(
      () => o.value || u.value ? "expanded" : "collapsed"
    );
    return or({
      state: f,
      open: u,
      setOpen: d,
      isMobile: o,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: k
    }), (h, M) => (t(), F(x(Gt), { "delay-duration": 0 }, {
      default: L(() => [
        s("div", ee({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(ar),
            "--sidebar-width-icon": x(lr)
          },
          class: x(J)(
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
}), jk = /* @__PURE__ */ z({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = et();
    return (r, o) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: j(
        x(J)(
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
      (...i) => x(a) && x(a)(...i))
    }, [
      H(r.$slots, "default")
    ], 2));
  }
}), mr = /* @__PURE__ */ z({
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
    return (r, o) => (t(), F(x(Ea), ee({ "data-slot": "separator" }, x(a), {
      class: x(J)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), Ok = /* @__PURE__ */ z({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(mr), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: j(x(J)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Lk = /* @__PURE__ */ z({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: o } = et();
    return (i, u) => (t(), F(ne, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: j(x(J)("h-7 w-7", l.class)),
      onClick: x(o)
    }, {
      default: L(() => [
        x(a) || x(r) === "collapsed" ? (t(), F(x($a), { key: 0 })) : (t(), F(x(wa), { key: 1 })),
        u[0] || (u[0] = s("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), pr = ht(
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
), Vk = /* @__PURE__ */ z({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = de(e, l);
    return (i, u) => (t(), F(x(Ia), ee({ "data-slot": "dropdown-menu" }, x(o)), {
      default: L((d) => [
        H(i.$slots, "default", be(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), vr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Dk = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(Na), ee({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(J)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        s("span", vr, [
          E(x(Wt), null, {
            default: L(() => [
              H(u.$slots, "indicator-icon", {}, () => [
                E(x(It), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tk = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(Ra), null, {
      default: L(() => [
        E(x(Ua), ee({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(J)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: L(() => [
            H(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Fk = /* @__PURE__ */ z({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Ha), ee({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ek = /* @__PURE__ */ z({
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
    return (o, i) => (t(), F(x(qa), ee({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(J)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: L(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Ik = /* @__PURE__ */ z({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = le(l, "class", "inset"), r = xe(a);
    return (o, i) => (t(), F(x(Ka), ee({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(J)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Nk = /* @__PURE__ */ z({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const o = de(e, l);
    return (i, u) => (t(), F(x(Ga), ee({ "data-slot": "dropdown-menu-radio-group" }, x(o)), {
      default: L(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Rk = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(Wa), ee({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(J)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        s("span", gr, [
          E(x(Wt), null, {
            default: L(() => [
              H(u.$slots, "indicator-icon", {}, () => [
                E(x(Ca), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uk = /* @__PURE__ */ z({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(x(Za), ee({ "data-slot": "dropdown-menu-separator" }, x(a), {
      class: x(J)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), Hk = /* @__PURE__ */ z({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: j(x(J)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), qk = /* @__PURE__ */ z({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = de(e, l);
    return (i, u) => (t(), F(x(Ja), ee({ "data-slot": "dropdown-menu-sub" }, x(o)), {
      default: L((d) => [
        H(i.$slots, "default", be(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Kk = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(Ya), ee({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(J)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: L(() => [
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gk = /* @__PURE__ */ z({
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
    return (o, i) => (t(), F(x(Xa), ee({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(J)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        H(o.$slots, "default"),
        E(x(Nt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Wk = /* @__PURE__ */ z({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = xe(e);
    return (r, o) => (t(), F(x(Qa), ee({ "data-slot": "dropdown-menu-trigger" }, x(a)), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zk = /* @__PURE__ */ z({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(en), {
      "data-slot": "avatar",
      class: j(x(J)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Jk = /* @__PURE__ */ z({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(x(tn), ee({ "data-slot": "avatar-fallback" }, x(a), {
      class: x(J)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yk = /* @__PURE__ */ z({
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
    return (a, r) => (t(), F(x(an), ee({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xk = /* @__PURE__ */ z({
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
      H(a.$slots, "default")
    ], 2));
  }
}), Qk = /* @__PURE__ */ z({
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
      class: j(x(J)("flex size-9 items-center justify-center", l.class))
    }, [
      H(a.$slots, "default", {}, () => [
        E(x(_a), { class: "size-4" })
      ]),
      r[0] || (r[0] = s("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), e$ = /* @__PURE__ */ z({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: j(x(J)("inline-flex items-center gap-1.5", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), t$ = /* @__PURE__ */ z({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Ee), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: j(x(J)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), a$ = /* @__PURE__ */ z({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: j(
        x(J)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), n$ = /* @__PURE__ */ z({
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
      class: j(x(J)("text-foreground font-normal", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), l$ = /* @__PURE__ */ z({
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
      class: j(x(J)("[&>svg]:size-3.5", l.class))
    }, [
      H(a.$slots, "default", {}, () => [
        E(x(Nt))
      ])
    ], 2));
  }
}), hr = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, br = /* @__PURE__ */ z({
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
    return (o, i) => (t(), n("div", hr, [
      E(x(nn), ee({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(J)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), s$ = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class", "viewport"), i = de(o, r);
    return (u, d) => (t(), F(x(ln), ee({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(J)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: L((m) => [
        H(u.$slots, "default", be(Pe(m))),
        e.viewport ? (t(), F(br, { key: 0 })) : _("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), o$ = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(sn), ee({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(J)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: L(() => [
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r$ = /* @__PURE__ */ z({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(x(on), ee({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(J)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        l.class
      )
    }), {
      default: L(() => [...i[0] || (i[0] = [
        s("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), i$ = /* @__PURE__ */ z({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(x(rn), ee({ "data-slot": "navigation-menu-item" }, x(a), {
      class: x(J)("relative", l.class)
    }), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u$ = /* @__PURE__ */ z({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(un), ee({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(J)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d$ = /* @__PURE__ */ z({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(x(dn), ee({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(J)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c$ = /* @__PURE__ */ z({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(x(cn), ee({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(J)(x(xr)(), "group", l.class)
    }), {
      default: L(() => [
        H(o.$slots, "default"),
        E(x(Ma), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xr = ht(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), f$ = /* @__PURE__ */ z({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = de(e, l);
    return (i, u) => (t(), F(x(Ut), ee({ "data-slot": "dialog" }, x(o)), {
      default: L((d) => [
        H(i.$slots, "default", be(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), m$ = /* @__PURE__ */ z({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Fe), ee({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yr = /* @__PURE__ */ z({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(x(bt), ee({ "data-slot": "dialog-overlay" }, x(a), {
      class: x(J)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p$ = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(xt), null, {
      default: L(() => [
        E(yr),
        E(x(yt), ee({ "data-slot": "dialog-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(J)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: L(() => [
            H(u.$slots, "default"),
            e.showCloseButton ? (t(), F(x(Fe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                E(x(gt)),
                d[0] || (d[0] = s("span", { class: "sr-only" }, "Close", -1))
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
}), v$ = /* @__PURE__ */ z({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(x(Ht), ee({ "data-slot": "dialog-description" }, x(r), {
      class: x(J)("text-muted-foreground text-sm", l.class)
    }), {
      default: L(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g$ = /* @__PURE__ */ z({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: j(x(J)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      H(a.$slots, "default"),
      e.showCloseButton ? (t(), F(x(Fe), {
        key: 0,
        "as-child": ""
      }, {
        default: L(() => [
          E(ne, { variant: "outline" }, {
            default: L(() => [...r[0] || (r[0] = [
              R(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : _("", !0)
    ], 2));
  }
}), h$ = /* @__PURE__ */ z({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: j(x(J)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), b$ = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(xt), null, {
      default: L(() => [
        E(x(bt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            E(x(yt), ee({
              class: x(J)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...x(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (m) => {
                const k = m.detail.originalEvent, f = k.target;
                (k.offsetX > f.clientWidth || k.offsetY > f.clientHeight) && m.preventDefault();
              })
            }), {
              default: L(() => [
                H(u.$slots, "default"),
                E(x(Fe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    E(x(gt), { class: "w-4 h-4" }),
                    d[1] || (d[1] = s("span", { class: "sr-only" }, "Close", -1))
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
}), x$ = /* @__PURE__ */ z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(x(qt), ee({ "data-slot": "dialog-title" }, x(r), {
      class: x(J)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y$ = /* @__PURE__ */ z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Kt), ee({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k$ = /* @__PURE__ */ z({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(x(fn), ee({ "data-slot": "label" }, x(a), {
      class: x(J)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $$ = /* @__PURE__ */ z({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(x(Sa), {
      role: "status",
      "aria-label": "Loading",
      class: j(x(J)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), w$ = /* @__PURE__ */ z({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: j(
        x(J)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), C$ = /* @__PURE__ */ z({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: j(x(J)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), _$ = /* @__PURE__ */ z({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: j(x(J)("px-6", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), M$ = /* @__PURE__ */ z({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: j(x(J)("text-muted-foreground text-sm", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), S$ = /* @__PURE__ */ z({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: j(x(J)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), B$ = /* @__PURE__ */ z({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: j(
        x(J)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), P$ = /* @__PURE__ */ z({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: j(x(J)("leading-none font-semibold", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), kr = /* @__PURE__ */ z({
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
    const a = e, r = l, o = le(a, "class"), i = de(o, r);
    return (u, d) => (t(), F(x(mn), ee({ "data-slot": "checkbox" }, x(i), {
      class: x(J)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L((m) => [
        E(x(pn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            H(u.$slots, "default", be(Pe(m)), () => [
              E(x(It), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ve = /* @__PURE__ */ z({
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
    const a = e, r = l, o = de(le(a, "class"), r);
    return (i, u) => (t(), F(x(vn), ee({ "data-slot": "switch" }, x(o), {
      class: x(J)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L(() => [
        E(x(gn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), $r = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, wr = { class: "flex items-start gap-3" }, Cr = { class: "min-w-0 flex-1" }, _r = { class: "text-foreground text-sm font-medium" }, Mr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, z$ = /* @__PURE__ */ z({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, o = a, i = G(!1), u = G(null), d = G(0);
    ca((k) => (console.error(`[PkBoundary] ${r.label} failed to render`, k), i.value = !0, u.value = k instanceof Error ? k.message : null, o("error", k), !1));
    function m() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: m }), (k, f) => (t(), n("div", {
      class: j(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", $r, [
        s("div", wr, [
          f[1] || (f[1] = s("svg", {
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
          s("div", Cr, [
            s("p", _r, p(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", Mr, p(u.value), 1)) : _("", !0),
            s("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: m
            }, [...f[0] || (f[0] = [
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
              R(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? _("", !0) : H(k.$slots, "default", { key: d.value })
    ], 2));
  }
}), Sr = { class: "bg-card rounded-lg border" }, Br = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Pr = { class: "min-w-0" }, zr = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Ar = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, jr = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Or = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, A$ = /* @__PURE__ */ z({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Sr, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Br, [
        s("div", Pr, [
          H(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", zr, p(e.title), 1)) : _("", !0),
            e.description ? (t(), n("p", Ar, p(e.description), 1)) : _("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", jr, [
          H(l.$slots, "actions")
        ])) : _("", !0)
      ])) : _("", !0),
      s("div", {
        class: j(e.padded ? "p-4" : "")
      }, [
        H(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", Or, [
        H(l.$slots, "footer")
      ])) : _("", !0)
    ]));
  }
}), Lr = { class: "flex shrink-0 flex-col items-center" }, Vr = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, j$ = /* @__PURE__ */ z({
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
    return (i, u) => (t(), n("div", Lr, [
      s("div", {
        class: j(["relative box-content shadow-2xl", r.value]),
        style: Q({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Vr)) : _("", !0),
        s("div", {
          class: j(["size-full overflow-hidden bg-white", o.value])
        }, [
          H(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(P, { key: 0 }, [
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
}), Dr = { class: "flex items-center gap-2 overflow-x-auto" }, Tr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Er = { class: "flex flex-col" }, Ir = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Nr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Rr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Ur = /* @__PURE__ */ z({
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
    function o(m) {
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
    function u(m) {
      return a.failedStep !== null ? m < a.failedStep : m < a.activeStep;
    }
    function d(m) {
      return a.failedStep === m;
    }
    return (m, k) => (t(), n("ol", Dr, [
      (t(!0), n(P, null, D(e.steps, (f, h) => (t(), n("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), F(je(e.interactive ? "button" : "div"), ee({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (M) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: L(() => [
            s("span", {
              class: j(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", o(h)])
            }, [
              d(h) ? (t(), n("svg", Tr, [...k[0] || (k[0] = [
                s("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(h) ? (t(), n("svg", Fr, [...k[1] || (k[1] = [
                s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(P, { key: 2 }, [
                R(p(h + 1), 1)
              ], 64))
            ], 2),
            s("span", Er, [
              s("span", null, p(f.label), 1),
              f.description ? (t(), n("span", Ir, p(f.description), 1)) : _("", !0)
            ]),
            e.hasError(h) ? (t(), n("span", Nr)) : _("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), n("span", Rr)) : _("", !0)
      ]))), 128))
    ]));
  }
}), Ge = /* @__PURE__ */ new Map();
function ke(e, l) {
  Ge.set(e, l);
}
function Hr(e) {
  return Ge.get(e);
}
function O$(e) {
  return Ge.has(e);
}
function L$() {
  return [...Ge.keys()].sort();
}
function V$() {
  Ge.clear();
}
const qr = ["aria-expanded"], Kr = ["aria-label", "onClick"], Gr = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Wr = { class: "ml-auto flex shrink-0 items-center gap-1" }, Zr = {
  key: 0,
  class: "border-b p-1"
}, Jr = ["placeholder"], Yr = { class: "max-h-60 overflow-y-auto p-1" }, Xr = ["aria-selected", "onMouseenter", "onClick"], Qr = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, _t = /* @__PURE__ */ z({
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
    const a = e, r = l, o = G(null), i = G(null), u = G(null), d = G(!1), m = G(""), k = G(0), f = G({ top: 0, left: 0, width: 0 }), h = $(
      () => a.modelValue.map(
        (T) => a.options.find((O) => O.value === T) ?? {
          value: T,
          label: String(T)
        }
      ).filter(Boolean)
    ), M = $(() => a.searchable ?? a.options.length > 6), C = $(() => {
      const T = new Set(a.modelValue), O = m.value.trim().toLowerCase();
      return a.options.filter((A) => !T.has(A.value)).filter((A) => O ? A.label.toLowerCase().includes(O) : !0);
    }), w = $(() => a.max !== null && a.modelValue.length >= a.max);
    function g() {
      const T = o.value, O = i.value;
      if (!T || !O)
        return;
      const A = T.getBoundingClientRect(), W = O.getBoundingClientRect(), I = 8;
      let U = A.bottom + 4;
      U + W.height > window.innerHeight - I && A.top - W.height - 4 > I && (U = A.top - W.height - 4), f.value = {
        top: U,
        left: Math.min(Math.max(I, A.left), window.innerWidth - A.width - I),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: A.width
      };
    }
    async function c() {
      a.disabled || d.value || (d.value = !0, m.value = "", k.value = 0, await we(), g(), u.value?.focus());
    }
    function b() {
      d.value = !1, m.value = "";
    }
    function v() {
      d.value ? b() : c();
    }
    function y(T) {
      w.value || (r("update:modelValue", [...a.modelValue, T.value]), m.value = "", k.value = 0, we(() => {
        g(), u.value?.focus();
      }));
    }
    function S(T) {
      r(
        "update:modelValue",
        a.modelValue.filter((O) => O !== T)
      ), we(g);
    }
    function B() {
      r("update:modelValue", []), we(g);
    }
    function K(T) {
      if (!a.disabled) {
        if (T.key === "Escape" && d.value) {
          T.stopPropagation(), b();
          return;
        }
        if (T.key === "Backspace" && m.value === "" && a.modelValue.length > 0) {
          S(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (T.key === "ArrowDown" || T.key === "Enter")) {
          T.preventDefault(), c();
          return;
        }
        if (d.value) {
          if (T.key === "ArrowDown")
            T.preventDefault(), k.value = Math.min(k.value + 1, C.value.length - 1);
          else if (T.key === "ArrowUp")
            T.preventDefault(), k.value = Math.max(k.value - 1, 0);
          else if (T.key === "Enter") {
            T.preventDefault();
            const O = C.value[k.value];
            O && y(O);
          }
        }
      }
    }
    function N(T) {
      if (!d.value)
        return;
      const O = T.target;
      o.value?.contains(O) || i.value?.contains(O) || b();
    }
    function Y() {
      d.value && g();
    }
    return re(C, (T) => {
      k.value > T.length - 1 && (k.value = Math.max(0, T.length - 1));
    }), ue(() => {
      document.addEventListener("pointerdown", N), window.addEventListener("scroll", Y, !0), window.addEventListener("resize", Y);
    }), me(() => {
      document.removeEventListener("pointerdown", N), window.removeEventListener("scroll", Y, !0), window.removeEventListener("resize", Y);
    }), (T, O) => (t(), n("div", {
      ref_key: "root",
      ref: o,
      class: "relative w-full",
      onKeydown: K
    }, [
      s("div", {
        class: j(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: v
      }, [
        (t(!0), n(P, null, D(h.value, (A) => (t(), n("span", {
          key: A.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(p(A.label) + " ", 1),
          s("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${A.label}`,
            onClick: ce((W) => S(A.value), ["stop"])
          }, [...O[1] || (O[1] = [
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
        h.value.length === 0 ? (t(), n("span", Gr, p(e.placeholder), 1)) : _("", !0),
        s("span", Wr, [
          h.value.length > 1 ? (t(), n("button", {
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
          }, [...O[2] || (O[2] = [
            s("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, qr),
      (t(), F(Te, { to: "body" }, [
        E(Ae, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: L(() => [
            d.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: Q({
                top: `${f.value.top}px`,
                left: `${f.value.left}px`,
                width: `${f.value.width}px`
              }),
              role: "listbox"
            }, [
              M.value ? (t(), n("div", Zr, [
                oe(s("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": O[0] || (O[0] = (A) => m.value = A),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: K
                }, null, 40, Jr), [
                  [Me, m.value]
                ])
              ])) : _("", !0),
              s("div", Yr, [
                (t(!0), n(P, null, D(C.value, (A, W) => (t(), n("button", {
                  key: A.value,
                  type: "button",
                  class: j(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", W === k.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": W === k.value,
                  onMouseenter: (I) => k.value = W,
                  onClick: (I) => y(A)
                }, p(A.label), 43, Xr))), 128)),
                C.value.length === 0 ? (t(), n("p", Qr, [
                  w.value ? (t(), n(P, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), n(P, { key: 1 }, [
                    R("Nothing matches “" + p(m.value) + "”.", 1)
                  ], 64)) : (t(), n(P, { key: 2 }, [
                    R("Everything is selected.")
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
}), ei = ["accept", "disabled"], ti = { class: "text-sm font-medium" }, ai = { key: 0 }, ni = { key: 1 }, li = { class: "text-muted-foreground text-xs" }, si = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, oi = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, ri = ["src"], ii = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, ui = { class: "min-w-0 flex-1" }, di = { class: "block truncate text-sm font-medium" }, ci = { class: "text-muted-foreground text-xs" }, fi = ["href"], mi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, ta = /* @__PURE__ */ z({
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
    const a = e, r = l, o = G(null), i = G(!1), u = G(null), d = G(null), m = G(null), k = $(() => a.accept.map((y) => `.${y}`).join(",")), f = $(() => m.value ?? a.modelValue?.url ?? null), h = $(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(a.maxKilobytes * 1024)}`);
    function M(y) {
      if (!y)
        return "";
      const S = ["B", "KB", "MB", "GB"];
      let B = y, K = 0;
      for (; B >= 1024 && K < S.length - 1; )
        B /= 1024, K++;
      return `${B.toFixed(B < 10 && K > 0 ? 1 : 0)} ${S[K]}`;
    }
    function C(y) {
      return y.split(".").pop()?.toLowerCase() ?? "";
    }
    function w(y) {
      return a.accept.length && !a.accept.includes(C(y.name)) ? `${C(y.name).toUpperCase() || "That"} files are not accepted here.` : y.size > a.maxKilobytes * 1024 ? `That file is ${M(y.size)}; the limit is ${M(a.maxKilobytes * 1024)}.` : null;
    }
    async function g(y) {
      const S = y?.[0];
      if (!(!S || a.disabled) && (d.value = w(S), !d.value)) {
        c(), a.image && S.type.startsWith("image/") && (m.value = URL.createObjectURL(S)), u.value = 0;
        try {
          const B = await a.upload(S, (K) => {
            u.value = K;
          });
          r("update:modelValue", B);
        } catch (B) {
          d.value = B instanceof Error ? B.message : "The upload failed.", c();
        } finally {
          u.value = null, o.value && (o.value.value = "");
        }
      }
    }
    function c() {
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function b() {
      const y = a.modelValue;
      c(), d.value = null, r("update:modelValue", null), y && !y.url && a.discard && await a.discard(y.value).catch(() => {
      });
    }
    function v(y) {
      i.value = !1, g(y.dataTransfer?.files ?? null);
    }
    return (y, S) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", oi, [
        e.image && f.value ? (t(), n("img", {
          key: 0,
          src: f.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ri)) : (t(), n("span", ii, p(C(e.modelValue.name) || "file"), 1)),
        s("span", ui, [
          s("span", di, p(e.modelValue.name), 1),
          s("span", ci, [
            R(p(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(P, { key: 0 }, [
              S[4] || (S[4] = R(" · ", -1)),
              s("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, fi)
            ], 64)) : (t(), n(P, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? _("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: b
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
        class: j(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
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
        }, null, 40, ei),
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
        s("span", ti, [
          u.value === null ? (t(), n("span", ai, "Drop a file or click to choose")) : (t(), n("span", ni, "Uploading…"))
        ]),
        s("span", li, p(h.value), 1),
        u.value !== null ? (t(), n("span", si, [
          s("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: Q({ width: `${u.value}%` })
          }, null, 4)
        ])) : _("", !0)
      ], 34)),
      d.value ? (t(), n("p", mi, p(d.value), 1)) : _("", !0)
    ]));
  }
}), pi = { class: "flex flex-col gap-2" }, vi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, gi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, hi = { class: "flex flex-col gap-1" }, bi = ["onUpdate:modelValue", "disabled", "aria-label"], xi = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, yi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, ki = ["onUpdate:modelValue", "disabled", "aria-label"], $i = ["disabled", "aria-label", "onClick"], wi = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Ci = { class: "flex items-center gap-3" }, _i = ["disabled"], Mi = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Si = /* @__PURE__ */ z({
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
    const u = G(d(a.modelValue));
    function d(g) {
      return g ? Object.entries(g).map(([c, b]) => ({
        uid: i++,
        key: c,
        value: b ?? ""
      })) : [];
    }
    re(
      () => a.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(m()) && (u.value = d(g));
      }
    );
    function m() {
      const g = {};
      for (const c of u.value) {
        const b = c.key.trim();
        b !== "" && (g[b] = c.value);
      }
      return Object.keys(g).length ? g : null;
    }
    function k() {
      r("update:modelValue", m());
    }
    const f = $(() => {
      const g = /* @__PURE__ */ new Map();
      for (const c of u.value) {
        const b = c.key.trim();
        b !== "" && g.set(b, (g.get(b) ?? 0) + 1);
      }
      return new Set([...g.entries()].filter(([, c]) => c > 1).map(([c]) => c));
    }), h = $(
      () => new Set(
        u.value.map((g) => g.key.trim()).filter((g) => g !== "" && !o.test(g))
      )
    ), M = $(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function C() {
      M.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function w(g) {
      u.value = u.value.filter((c) => c.uid !== g), k();
    }
    return (g, c) => (t(), n("div", pi, [
      u.value.length ? (t(), n("div", vi, [
        s("div", gi, [
          s("span", null, p(e.keyLabel), 1),
          s("span", null, p(e.valueLabel), 1),
          c[0] || (c[0] = s("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(P, null, D(u.value, (b) => (t(), n("div", {
          key: b.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          s("div", hi, [
            oe(s("input", {
              "onUpdate:modelValue": (v) => b.key = v,
              type: "text",
              class: j([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                f.value.has(b.key.trim()) || h.value.has(b.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: k
            }, null, 42, bi), [
              [Me, b.key]
            ]),
            h.value.has(b.key.trim()) ? (t(), n("p", xi, " Letters, numbers, underscores and dashes only. ")) : f.value.has(b.key.trim()) ? (t(), n("p", yi, " Used twice - only the last value will be saved. ")) : _("", !0)
          ]),
          oe(s("input", {
            "onUpdate:modelValue": (v) => b.value = v,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: k
          }, null, 40, ki), [
            [Me, b.value]
          ]),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${b.key || "this entry"}`,
            onClick: (v) => w(b.uid)
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
          ])], 8, $i)
        ]))), 128))
      ])) : (t(), n("p", wi, " Nothing here yet. ")),
      s("div", Ci, [
        s("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || M.value,
          onClick: C
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
          R(" Add " + p(e.keyLabel.toLowerCase()), 1)
        ], 8, _i),
        e.maxPairs !== null ? (t(), n("p", Mi, p(u.value.length) + " of " + p(e.maxPairs), 1)) : _("", !0)
      ])
    ]));
  }
}), Bi = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Pi = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, zi = ["disabled", "title", "aria-label", "onClick"], Ai = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ji = ["d"], Oi = ["disabled"], Li = ["contenteditable", "data-placeholder"], Vi = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Di = /* @__PURE__ */ z({
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
    ], d = $(() => u.filter((w) => a.toolbar.includes(w.id))), m = $(() => a.toolbar.includes("link")), k = G(0);
    function f() {
      const w = o.value?.innerHTML ?? "", g = (o.value?.innerText ?? "").trim();
      k.value = g.length;
      const c = g === "" ? null : w;
      i = c, r("update:modelValue", c);
    }
    function h(w) {
      a.disabled || (o.value?.focus(), document.execCommand(w.command, !1, w.argument), f());
    }
    function M() {
      if (a.disabled)
        return;
      const w = window.prompt("Link address");
      w && (o.value?.focus(), document.execCommand("createLink", !1, w), f());
    }
    function C(w) {
      w.preventDefault();
      const g = w.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, g), f();
    }
    return ue(() => {
      o.value && (o.value.innerHTML = a.modelValue ?? "", k.value = o.value.innerText.trim().length);
    }), re(
      () => a.modelValue,
      (w) => {
        w !== i && o.value && (o.value.innerHTML = w ?? "", k.value = o.value.innerText.trim().length);
      }
    ), (w, g) => (t(), n("div", Bi, [
      s("div", Pi, [
        (t(!0), n(P, null, D(d.value, (c) => (t(), n("button", {
          key: c.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: c.label,
          "aria-label": c.label,
          onMousedown: g[0] || (g[0] = ce(() => {
          }, ["prevent"])),
          onClick: (b) => h(c)
        }, [
          (t(), n("svg", Ai, [
            s("path", {
              d: c.path
            }, null, 8, ji)
          ]))
        ], 40, zi))), 128)),
        m.value ? (t(), n("button", {
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
        ])], 40, Oi)) : _("", !0)
      ]),
      s("div", {
        ref_key: "editor",
        ref: o,
        class: j(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: f,
        onBlur: f,
        onPaste: C
      }, null, 42, Li),
      e.maxLength !== null ? (t(), n("div", Vi, p(k.value) + " / " + p(e.maxLength), 1)) : _("", !0)
    ]));
  }
}), Ti = /* @__PURE__ */ kt(Di, [["__scopeId", "data-v-32c63bc7"]]), Fi = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, Ei = ["for"], Ii = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Ni = {
  key: 7,
  class: "relative"
}, Ri = ["disabled", "aria-invalid"], Ui = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Hi = { class: "max-h-56 overflow-y-auto p-1" }, qi = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ki = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Gi = ["onClick"], Wi = ["id", "value", "disabled", "aria-invalid"], Zi = ["value"], Ji = {
  key: 9,
  class: "flex items-center gap-2 text-sm"
}, Yi = { class: "text-muted-foreground" }, Xi = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Qi = { class: "text-muted-foreground" }, eu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], tu = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], au = {
  key: 13,
  class: "flex flex-wrap gap-1.5"
}, nu = ["disabled", "aria-pressed", "onClick"], lu = {
  key: 14,
  class: "flex flex-wrap gap-1.5"
}, su = ["title", "disabled", "onClick"], ou = {
  key: 15,
  class: "text-destructive text-xs",
  role: "alert"
}, ru = {
  key: 16,
  class: "text-muted-foreground text-xs"
}, qe = /* @__PURE__ */ z({
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
    const a = zt(() => import("./PkRepeater-J84jGe3T.js")), r = zt(() => import("./PkBuilder-DXeyw3Du.js")), o = e, i = l, u = G(!1), d = G(""), m = G([]), k = G(!1), f = G(null);
    let h;
    re(d, (b) => {
      o.searchOptions && (clearTimeout(h), k.value = !0, h = setTimeout(async () => {
        try {
          m.value = await o.searchOptions(b);
        } catch {
        } finally {
          k.value = !1;
        }
      }, 200));
    });
    async function M() {
      if (!(o.processing || o.field.disabled) && (u.value = !0, m.value.length === 0 && o.searchOptions)) {
        k.value = !0;
        try {
          m.value = await o.searchOptions("");
        } finally {
          k.value = !1;
        }
      }
    }
    function C(b) {
      f.value = b.label, i("change", b.value), u.value = !1, d.value = "";
    }
    function w() {
      f.value = null, i("change", null);
    }
    me(() => clearTimeout(h));
    const g = $(() => Hr(o.field.type));
    function c(b) {
      const v = document.getElementById(`f-${o.field.key}`);
      if (!(v instanceof HTMLTextAreaElement) && !(v instanceof HTMLInputElement))
        return;
      const y = v.selectionStart ?? v.value.length, S = v.selectionEnd ?? y;
      v.setRangeText(b, y, S, "end"), v.dispatchEvent(new Event("input", { bubbles: !0 })), v.focus();
    }
    return (b, v) => e.field.type === "hidden" ? (t(), n(P, { key: 0 }, [], 64)) : (t(), n("div", Fi, [
      s("label", {
        for: `f-${e.field.key}`,
        class: j(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
      }, [
        R(p(e.field.label) + " ", 1),
        e.field.required ? (t(), n("span", Ii, "*")) : _("", !0)
      ], 10, Ei),
      g.value ? (t(), F(je(g.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": v[0] || (v[0] = (y) => i("change", y))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), F(ta, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": v[1] || (v[1] = (y) => i("change", y))
      }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), F(x(a), {
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
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), F(x(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": v[3] || (v[3] = (y) => i("change", y))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), F(Ti, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": v[4] || (v[4] = (y) => i("change", y))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), F(Si, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": v[5] || (v[5] = (y) => i("change", y))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), F(_t, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": v[6] || (v[6] = (y) => i("change", y))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Ni, [
        s("button", {
          type: "button",
          class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          onClick: M
        }, [
          s("span", {
            class: j(f.value || e.value ? "" : "text-muted-foreground")
          }, p(f.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), n("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: ce(w, ["stop"])
          }, " ✕ ")) : _("", !0)
        ], 8, Ri),
        u.value ? (t(), n("div", Ui, [
          oe(s("input", {
            "onUpdate:modelValue": v[7] || (v[7] = (y) => d.value = y),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [Me, d.value]
          ]),
          s("div", Hi, [
            k.value ? (t(), n("p", qi, " Searching… ")) : m.value.length === 0 ? (t(), n("p", Ki, " No matches ")) : _("", !0),
            (t(!0), n(P, null, D(m.value, (y) => (t(), n("button", {
              key: String(y.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (S) => C(y)
            }, p(y.label), 9, Gi))), 128))
          ])
        ])) : _("", !0),
        u.value ? (t(), n("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: v[8] || (v[8] = (y) => u.value = !1)
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
        (t(!0), n(P, null, D(e.options, (y) => (t(), n("option", {
          key: String(y.value),
          value: y.value
        }, p(y.label), 9, Zi))), 128))
      ], 40, Wi)) : e.field.type === "toggle" ? (t(), n("label", Ji, [
        E(x(Ve), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": v[10] || (v[10] = (y) => i("change", y))
        }, null, 8, ["id", "model-value", "disabled"]),
        s("span", Yi, p(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), n("label", Xi, [
        E(x(kr), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": v[11] || (v[11] = (y) => i("change", y === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        s("span", Qi, p(e.field.help ?? e.field.label), 1)
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
      }, null, 40, eu)) : (t(), n("input", {
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
      }, null, 40, tu)),
      e.field.type === "number" && e.field.presets?.length ? (t(), n("div", au, [
        (t(!0), n(P, null, D(e.field.presets, (y) => (t(), n("button", {
          key: y,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: j([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == y ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == y
          ),
          onClick: (S) => i("change", String(y))
        }, p(y), 11, nu))), 128))
      ])) : _("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", lu, [
        (t(!0), n(P, null, D(e.field.chips, (y, S) => (t(), n("button", {
          key: S,
          type: "button",
          title: y,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (B) => c(String(S))
        }, p(S), 9, su))), 128))
      ])) : _("", !0),
      e.error ? (t(), n("p", ou, p(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", ru, p(e.field.help), 1)) : _("", !0)
    ]));
  }
}), iu = { class: "flex flex-col gap-2" }, uu = { class: "min-w-0 flex-1" }, du = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, cu = ["disabled", "aria-label", "onClick"], fu = ["disabled", "aria-label", "onClick"], mu = ["disabled", "title", "aria-label", "onClick"], pu = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, vu = ["disabled"], D$ = /* @__PURE__ */ z({
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
    const i = G(u(a.modelValue));
    function u(b) {
      return Array.isArray(b) ? b.map((v) => ({ uid: o++, data: { ...v } })) : [];
    }
    re(
      () => a.modelValue,
      (b) => {
        JSON.stringify(b ?? null) !== JSON.stringify(d()) && (i.value = u(b));
      }
    );
    function d() {
      const b = [];
      for (const v of i.value) {
        const y = {};
        let S = !1;
        for (const B of a.children) {
          const K = v.data[B.key] ?? null;
          y[B.key] = K, K !== null && K !== "" && !(Array.isArray(K) && K.length === 0) && (S = !0);
        }
        S && b.push(y);
      }
      return b.length ? b : null;
    }
    function m() {
      r("update:modelValue", d());
    }
    const k = $(() => a.maxItems !== null && i.value.length >= a.maxItems), f = $(() => a.minItems !== null && i.value.length <= a.minItems), h = $(() => a.children.length === 1);
    function M() {
      if (k.value || a.disabled)
        return;
      const b = {};
      for (const v of a.children)
        b[v.key] = null;
      i.value.push({ uid: o++, data: b });
    }
    function C(b) {
      i.value = i.value.filter((v) => v.uid !== b), m();
    }
    function w(b, v) {
      const y = b + v;
      if (y < 0 || y >= i.value.length)
        return;
      const S = [...i.value], [B] = S.splice(b, 1);
      S.splice(y, 0, B), i.value = S, m();
    }
    function g(b, v, y) {
      const S = i.value.find((B) => B.uid === b);
      S && (S.data[v] = y, m());
    }
    function c(b, v) {
      return a.errors[`${a.fieldKey}.${b}.${v}`];
    }
    return (b, v) => (t(), n("div", iu, [
      (t(!0), n(P, null, D(i.value, (y, S) => (t(), n("div", {
        key: y.uid,
        class: "flex items-start gap-2"
      }, [
        s("span", {
          class: j(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, p(S + 1), 3),
        s("div", uu, [
          h.value ? (t(), F(qe, {
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
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", du, [
            (t(!0), n(P, null, D(e.children, (B) => (t(), F(qe, {
              key: B.key,
              field: { ...B, disabled: B.disabled || e.disabled },
              value: y.data[B.key],
              error: c(S, B.key),
              options: e.childOptions[B.key] ?? [],
              onChange: (K) => g(y.uid, B.key, K)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        s("div", {
          class: j(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
        }, [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || S === 0,
            "aria-label": `Move ${e.itemLabel} ${S + 1} up`,
            onClick: (B) => w(S, -1)
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
          ])], 8, cu),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || S === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${S + 1} down`,
            onClick: (B) => w(S, 1)
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
          ])], 8, fu),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || f.value,
            title: f.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${S + 1}`,
            onClick: (B) => C(y.uid)
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
          ])], 8, mu)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", pu, " No " + p(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : _("", !0),
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
        R(" Add " + p(e.itemLabel.toLowerCase()), 1)
      ], 8, vu))
    ]));
  }
}), gu = { class: "space-y-1" }, hu = { class: "flex items-center gap-1" }, bu = ["disabled", "title", "aria-label", "onClick"], xu = ["aria-pressed"], yu = ["id", "value", "rows", "disabled"], ku = ["innerHTML"], $u = /* @__PURE__ */ z({
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
    function u(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = $(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(h, M = h) {
      const C = document.getElementById(a.id ?? "");
      if (C === null)
        return;
      const w = C.selectionStart, g = C.selectionEnd, c = i.value.slice(w, g);
      r(
        "update:modelValue",
        `${i.value.slice(0, w)}${h}${c}${M}${i.value.slice(g)}`
      );
    }
    const k = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, f = $(
      () => (a.toolbar ?? Object.keys(k)).filter((h) => h in k)
    );
    return (h, M) => (t(), n("div", gu, [
      s("div", hu, [
        (t(!0), n(P, null, D(f.value, (C) => (t(), n("button", {
          key: C,
          type: "button",
          disabled: e.disabled,
          title: C,
          "aria-label": C,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (w) => k[C].run()
        }, p(k[C].label), 9, bu))), 128)),
        s("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": o.value,
          onClick: M[0] || (M[0] = (C) => o.value = !o.value)
        }, " Preview ", 8, xu)
      ]),
      o.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, ku)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = (C) => r("update:modelValue", C.target.value))
      }, null, 40, yu))
    ]));
  }
}), wu = { class: "space-y-1" }, Cu = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, _u = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Mu = ["id", "value", "rows", "disabled"], Su = { class: "text-muted-foreground text-xs" }, Bu = {
  key: 0,
  class: "text-destructive text-xs"
}, Pu = /* @__PURE__ */ z({
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
    const a = e, r = l, o = G(null), i = G(!0), u = $(() => a.modelValue ?? ""), d = $(() => Math.max(u.value.split(`
`).length, 1)), m = $(() => {
      if (a.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function k(h) {
      r("update:modelValue", h.target.value);
    }
    function f(h) {
      if (h.key === "Escape") {
        i.value = !1;
        return;
      }
      if (h.key !== "Tab" && (i.value = !0), h.key !== "Tab" || !i.value)
        return;
      h.preventDefault();
      const M = h.target, C = M.selectionStart, w = M.selectionEnd, g = `${u.value.slice(0, C)}    ${u.value.slice(w)}`;
      r("update:modelValue", g), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = C + 4;
      });
    }
    return (h, M) => (t(), n("div", wu, [
      s("div", Cu, [
        s("div", _u, [
          (t(!0), n(P, null, D(d.value, (C) => (t(), n("div", { key: C }, p(C), 1))), 128))
        ]),
        s("textarea", {
          id: e.id,
          ref_key: "area",
          ref: o,
          value: u.value,
          rows: e.rows,
          disabled: e.disabled,
          spellcheck: "false",
          autocapitalize: "off",
          autocomplete: "off",
          autocorrect: "off",
          class: "w-full resize-y bg-transparent px-3 py-2 leading-5 outline-none",
          onInput: k,
          onKeydown: f
        }, null, 40, Mu)
      ]),
      s("p", Su, p(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), n("p", Bu, p(m.value), 1)) : _("", !0)
    ]));
  }
}), zu = { class: "space-y-3" }, Au = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, ju = { class: "text-sm font-medium" }, Ou = { class: "flex items-center gap-1" }, Lu = ["disabled", "onClick"], Vu = ["disabled", "onClick"], Du = ["disabled", "onClick"], Tu = { class: "space-y-3 p-3" }, Fu = { class: "flex flex-wrap items-center gap-2" }, Eu = ["disabled", "onClick"], Iu = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, T$ = /* @__PURE__ */ z({
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
    ), u = $(() => a.maxBlocks !== null && o.value.length >= a.maxBlocks);
    function d(M) {
      r("update:modelValue", M);
    }
    function m(M) {
      u.value || d([...o.value, { type: M, data: {} }]);
    }
    function k(M) {
      d(o.value.filter((C, w) => w !== M));
    }
    function f(M, C) {
      const w = M + C;
      if (w < 0 || w >= o.value.length)
        return;
      const g = [...o.value], [c] = g.splice(M, 1);
      g.splice(w, 0, c), d(g);
    }
    function h(M, C, w) {
      d(
        o.value.map(
          (g, c) => c === M ? { ...g, data: { ...g.data, [C]: w } } : g
        )
      );
    }
    return (M, C) => (t(), n("div", zu, [
      (t(!0), n(P, null, D(o.value, (w, g) => (t(), n("div", {
        key: `${w.type}-${g}`,
        class: "bg-card rounded-lg border"
      }, [
        s("div", Au, [
          s("span", ju, p(i.value[w.type]?.label ?? w.type), 1),
          s("div", Ou, [
            s("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || g === 0,
              "aria-label": "Move up",
              onClick: (c) => f(g, -1)
            }, " ↑ ", 8, Lu),
            s("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || g === o.value.length - 1,
              "aria-label": "Move down",
              onClick: (c) => f(g, 1)
            }, " ↓ ", 8, Vu),
            s("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (c) => k(g)
            }, " Remove ", 8, Du)
          ])
        ]),
        s("div", Tu, [
          (t(!0), n(P, null, D(i.value[w.type]?.fields ?? [], (c) => (t(), F(qe, {
            key: c.key,
            field: c,
            value: w.data[c.key] ?? null,
            error: e.errors?.[c.key],
            processing: e.disabled,
            onChange: (b) => h(g, c.key, b)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      s("div", Fu, [
        (t(!0), n(P, null, D(e.blocks, (w) => (t(), n("button", {
          key: w.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (g) => m(w.type)
        }, " + " + p(w.label), 9, Eu))), 128)),
        u.value ? (t(), n("span", Iu, p(e.maxBlocks) + " is the maximum here. ", 1)) : _("", !0)
      ])
    ]));
  }
}), Nu = ["name", "value", "checked", "disabled", "onChange"], Ru = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Uu = /* @__PURE__ */ z({
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
    return (i, u) => (t(), n("div", {
      role: "radiogroup",
      class: j(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(P, null, D(e.options, (d) => (t(), n("label", {
        key: String(d.value),
        class: j(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        s("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: o(d),
          disabled: e.disabled,
          onChange: (m) => r("update:modelValue", d.value)
        }, null, 40, Nu),
        R(" " + p(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ru, " Nothing to choose from yet. ")) : _("", !0)
    ], 2));
  }
}), Hu = ["value", "checked", "disabled", "onChange"], qu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ku = /* @__PURE__ */ z({
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
    function i(m) {
      return o.value.some((k) => k == m.value);
    }
    function u(m) {
      r(
        "update:modelValue",
        i(m) ? o.value.filter((k) => k != m.value) : [...o.value, m.value]
      );
    }
    const d = $(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, k) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: Q(d.value)
    }, [
      (t(!0), n(P, null, D(e.options, (f) => (t(), n("label", {
        key: String(f.value),
        class: j(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        s("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: f.value,
          checked: i(f),
          disabled: e.disabled,
          onChange: (h) => u(f)
        }, null, 40, Hu),
        R(" " + p(f.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", qu, " Nothing to choose from yet. ")) : _("", !0)
    ], 4));
  }
}), Gu = { class: "flex flex-col gap-1.5" }, Wu = ["aria-label", "onClick"], Zu = ["placeholder", "disabled", "maxlength"], Ju = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Yu = ["onClick"], Xu = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Qu = /* @__PURE__ */ z({
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
    ), u = $(() => i.value.length >= (a.field.max ?? 25)), d = $(
      () => (a.field.suggestions ?? []).filter(
        (h) => !i.value.some((M) => M.toLowerCase() === h.toLowerCase())
      )
    );
    function m(h) {
      const M = h.trim().slice(0, a.field.maxLength ?? 40);
      if (M === "" || u.value) {
        o.value = "";
        return;
      }
      if (i.value.some((C) => C.toLowerCase() === M.toLowerCase())) {
        o.value = "";
        return;
      }
      r("update:modelValue", [...i.value, M]), o.value = "";
    }
    function k(h) {
      r(
        "update:modelValue",
        i.value.filter((M, C) => C !== h)
      );
    }
    function f(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), m(o.value);
        return;
      }
      h.key === "Backspace" && o.value === "" && i.value.length > 0 && k(i.value.length - 1);
    }
    return (h, M) => (t(), n("div", Gu, [
      s("div", {
        class: j(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(P, null, D(i.value, (C, w) => (t(), n("span", {
          key: `${C}-${w}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(p(C) + " ", 1),
          e.disabled ? _("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${C}`,
            onClick: (g) => k(w)
          }, " × ", 8, Wu))
        ]))), 128)),
        oe(s("input", {
          "onUpdate:modelValue": M[0] || (M[0] = (C) => o.value = C),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: f,
          onBlur: M[1] || (M[1] = (C) => m(o.value))
        }, null, 40, Zu), [
          [Me, o.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", Ju, [
        M[2] || (M[2] = s("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(P, null, D(d.value, (C) => (t(), n("button", {
          key: C,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (w) => m(C)
        }, p(C), 9, Yu))), 128))
      ])) : _("", !0),
      u.value ? (t(), n("p", Xu, " That is the maximum of " + p(e.field.max ?? 25) + " tags. ", 1)) : _("", !0)
    ]));
  }
}), ed = 4.5, Dt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function aa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function lt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function mt(e) {
  const [l, a, r] = aa(e);
  return 0.2126 * lt(l) + 0.7152 * lt(a) + 0.0722 * lt(r);
}
function na(e, l) {
  const a = mt(e), r = mt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function td(e, l, a) {
  if (!Dt.test(e) || !Dt.test(l))
    return e;
  const r = mt(l) > 0.5, o = r ? 0 : 255;
  let i = aa(e);
  for (let u = 0; u <= 20; u++) {
    const d = ad(i);
    if (na(d, l) >= a)
      return d;
    i = i.map((m) => m + (o - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function ad(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const nd = { class: "flex flex-col gap-2" }, ld = { class: "flex items-center gap-2" }, sd = {
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
}, od = ["value", "disabled", "aria-label"], rd = ["value", "disabled", "placeholder"], id = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, ud = ["aria-label", "title", "onClick"], dd = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, cd = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = $(() => typeof a.modelValue == "string" ? a.modelValue : ""), u = $(() => o.test(i.value));
    function d(C) {
      const w = C.trim();
      if (w === "")
        return "";
      const g = w.startsWith("#") ? w : `#${w}`;
      return o.test(g) ? g.toLowerCase() : w;
    }
    function m(C) {
      r("update:modelValue", d(C.target.value));
    }
    const k = $(() => !u.value || !a.field.contrastBackground || !o.test(a.field.contrastBackground) ? null : na(i.value, a.field.contrastBackground)), f = $(() => a.field.contrastMinRatio ?? ed), h = $(() => k.value !== null && k.value < f.value);
    function M() {
      a.field.contrastBackground && r(
        "update:modelValue",
        td(i.value, a.field.contrastBackground, f.value)
      );
    }
    return (C, w) => (t(), n("div", nd, [
      s("div", ld, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: w[0] || (w[0] = (g) => r("update:modelValue", g.target.value))
        }, null, 40, od)) : (t(), n("span", sd)),
        s("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, rd)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", id, [
        (t(!0), n(P, null, D(e.field.presets, (g) => (t(), n("button", {
          key: g,
          type: "button",
          class: j(["size-6 rounded border", i.value.toLowerCase() === g.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: Q({ backgroundColor: g }),
          "aria-label": g,
          title: g,
          onClick: (c) => r("update:modelValue", g.toLowerCase())
        }, null, 14, ud))), 128))
      ])) : _("", !0),
      h.value ? (t(), n("p", dd, [
        s("span", null, " This fails contrast at " + p(k.value.toFixed(1)) + ":1 - it needs at least " + p(f.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? _("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : _("", !0)
    ]));
  }
}), fd = { class: "flex items-center gap-3" }, md = ["min", "max", "step", "value", "disabled", "aria-label"], pd = { class: "flex shrink-0 items-center gap-1" }, vd = ["min", "max", "step", "value", "disabled"], gd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, hd = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(() => a.field.min ?? 0), i = $(() => a.field.max ?? 100), u = $(() => a.field.step ?? 1), d = $(() => {
      const f = Number(a.modelValue);
      return Number.isFinite(f) ? f : o.value;
    }), m = $(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function k(f) {
      if (f === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(f);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (f, h) => (t(), n("div", fd, [
      s("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: o.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (M) => k(M.target.value))
      }, null, 40, md),
      s("div", pd, [
        s("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: o.value,
          max: i.value,
          step: u.value,
          value: m.value ? "" : d.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (M) => k(M.target.value))
        }, null, 40, vd),
        e.field.unit ? (t(), n("span", gd, p(e.field.unit), 1)) : _("", !0)
      ])
    ]));
  }
}), We = /* @__PURE__ */ new Map();
function st(e, l) {
  We.set(e, l);
}
function bd(e) {
  return We.get(e);
}
function F$(e) {
  return We.has(e);
}
function xd() {
  return [...We.keys()].sort();
}
function E$() {
  We.clear();
}
const yd = ["name", "value", "checked", "disabled", "onChange"], kd = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, $d = { class: "whitespace-nowrap" }, wd = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Cd = ["name", "value", "checked", "disabled", "onChange"], _d = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Md = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Sd = { class: "text-center text-xs font-medium" }, Bd = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Pd = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, zd = /* @__PURE__ */ z({
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
      () => a.field.preview ? bd(a.field.preview) : void 0
    ), i = $(() => !!a.field.preview && !o.value), u = $(() => a.field.layout === "segmented"), d = $(() => {
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
    function m(k) {
      return a.modelValue != null && k.value == a.modelValue;
    }
    return (k, f) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: j(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(P, null, D(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: j(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(h) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        s("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: m(h),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", h.value)
        }, null, 40, yd),
        f[0] || (f[0] = s("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o.value ? (t(), n("span", kd, [
          (t(), F(je(o.value), {
            value: h.value,
            label: h.label,
            selected: m(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : _("", !0),
        s("span", $d, p(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", wd, " Nothing to choose from yet. ")) : _("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: j(["grid gap-3", d.value])
    }, [
      (t(!0), n(P, null, D(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: j(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(h) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        s("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: m(h),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", h.value)
        }, null, 40, Cd),
        f[1] || (f[1] = s("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s("span", _d, [
          o.value ? (t(), F(je(o.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: m(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Md, " no preview ")) : _("", !0)
        ]),
        s("span", Sd, p(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Bd, " Nothing to choose from yet. ")) : _("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Pd, [
        f[2] || (f[2] = R(" No preview registered for ", -1)),
        s("code", null, p(e.field.preview), 1),
        R(". Registered: " + p(x(xd)().join(", ") || "none") + ". ", 1)
      ])) : _("", !0)
    ], 2));
  }
}), Ad = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, jd = /* @__PURE__ */ z({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Ad, [
      s("span", {
        class: "block size-full",
        style: Q({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Od = { class: "flex flex-col items-center gap-1 text-center" }, Ld = {
  key: 0,
  class: "text-xs text-neutral-500"
}, la = /* @__PURE__ */ z({
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
    return (o, i) => (t(), n("div", Od, [
      s("div", {
        class: j(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: Q({ borderColor: a.value, color: a.value })
      }, p(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Ld, p(e.caption), 1)) : _("", !0)
    ]));
  }
}), Vd = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Dd = { class: "flex items-center gap-3" }, Td = ["src"], Fd = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Ed = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Id = {
  key: 0,
  class: "text-right text-sm"
}, Nd = { class: "text-neutral-500" }, Rd = { class: "tabular-nums" }, Ud = { key: 1 }, Hd = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, qd = { class: "mt-2 font-medium" }, Kd = { key: 2 }, Gd = { class: "w-full text-sm" }, Wd = { class: "w-full py-3 pr-2" }, Zd = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Jd = { key: 0 }, Yd = ["colspan"], Xd = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Qd = { class: "w-64 text-sm" }, ec = { class: "tabular-nums" }, tc = {
  key: 3,
  class: "py-2"
}, ac = { key: 4 }, nc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, lc = { class: "mt-2 flex flex-col gap-1 text-sm" }, sc = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, oc = { key: 0 }, rc = {
  key: 1,
  class: "mt-1"
}, ic = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, uc = /* @__PURE__ */ z({
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
    function o(m) {
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
    return (m, k) => (t(), n("article", Vd, [
      s("div", Dd, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Td)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: Q({ color: a() })
        }, p(e.document.branding.company), 5))
      ]),
      (t(!0), n(P, null, D(e.document.blocks, (f, h) => (t(), n(P, { key: h }, [
        f.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: Q({ borderColor: a() })
        }, [
          s("div", null, [
            s("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: Q({ color: a() })
            }, p(f.title), 5),
            f.subtitle ? (t(), n("p", Fd, p(f.subtitle), 1)) : _("", !0),
            f.reference ? (t(), n("p", Ed, p(f.reference), 1)) : _("", !0)
          ]),
          r(f).length ? (t(), n("dl", Id, [
            (t(!0), n(P, null, D(r(f), (M, C) => (t(), n("div", {
              key: C,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              s("dt", Nd, p(M.label), 1),
              s("dd", Rd, p(M.value), 1)
            ]))), 128))
          ])) : _("", !0)
        ], 4)) : f.type === "party" ? (t(), n("section", Ud, [
          s("h2", Hd, p(f.heading), 1),
          s("p", qd, p(f.name), 1),
          (t(!0), n(P, null, D(u(f.lines), (M, C) => (t(), n("p", {
            key: C,
            class: "text-sm text-neutral-600"
          }, p(M), 1))), 128))
        ])) : f.type === "lines" ? (t(), n("section", Kd, [
          s("table", Gd, [
            s("thead", null, [
              s("tr", {
                class: "border-b-2 text-left",
                style: Q({ borderColor: a() })
              }, [
                (t(!0), n(P, null, D(u(f.columns), (M, C) => (t(), n("th", {
                  key: C,
                  class: j(["pb-2 font-medium", C > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, p(M), 3))), 128))
              ], 4)
            ]),
            s("tbody", null, [
              (t(!0), n(P, null, D(o(f), (M, C) => (t(), n("tr", {
                key: C,
                class: "border-b border-neutral-200"
              }, [
                s("td", Wd, [
                  s("p", null, p(M.description), 1),
                  M.detail ? (t(), n("p", Zd, p(M.detail), 1)) : _("", !0)
                ]),
                (t(!0), n(P, null, D(M.cells, (w, g) => (t(), n("td", {
                  key: g,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, p(w), 1))), 128))
              ]))), 128)),
              o(f).length === 0 ? (t(), n("tr", Jd, [
                s("td", {
                  colspan: u(f.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, p(f.empty), 9, Yd)
              ])) : _("", !0)
            ])
          ]),
          i(f).length ? (t(), n("div", Xd, [
            s("dl", Qd, [
              (t(!0), n(P, null, D(i(f), (M, C) => (t(), n("div", {
                key: C,
                class: j([
                  "flex justify-between py-1",
                  M.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: Q(M.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                s("dt", {
                  class: j(M.strong ? "" : "text-neutral-600")
                }, p(M.label), 3),
                s("dd", ec, p(M.value), 1)
              ], 6))), 128))
            ])
          ])) : _("", !0)
        ])) : f.type === "code" ? (t(), n("section", tc, [
          E(la, {
            code: d(f.code),
            caption: d(f.caption),
            style: Q(d(f.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : f.type === "steps" ? (t(), n("section", ac, [
          s("h2", nc, p(f.heading), 1),
          s("ol", lc, [
            (t(!0), n(P, null, D(u(f.items), (M, C) => (t(), n("li", {
              key: C,
              class: "flex gap-2"
            }, [
              s("span", {
                class: "font-semibold tabular-nums",
                style: Q({ color: a() })
              }, p(C + 1) + ".", 5),
              s("span", null, p(M), 1)
            ]))), 128))
          ])
        ])) : f.type === "note" ? (t(), n("p", {
          key: 5,
          class: j(["text-sm", f.emphasis ? "font-medium" : "text-neutral-600"]),
          style: Q(f.emphasis ? { color: a() } : void 0)
        }, p(f.text), 7)) : f.type === "footer" ? (t(), n("footer", sc, [
          f.text ? (t(), n("p", oc, p(f.text), 1)) : _("", !0),
          u(f.contacts).length ? (t(), n("p", rc, p(u(f.contacts).join(" · ")), 1)) : _("", !0)
        ])) : (t(), n("p", ic, " This document contains a “" + p(f.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), dc = ["aria-label", "title"], cc = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fc = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, I$ = /* @__PURE__ */ z({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Xt(), r = $(() => l.value.theme === "dark");
    function o() {
      a({ theme: r.value ? "light" : "dark" });
    }
    return (i, u) => (t(), n("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: o
    }, [
      (t(), n("svg", cc, [
        r.value ? (t(), n(P, { key: 0 }, [
          u[0] || (u[0] = s("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = s("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", fc))
      ]))
    ], 8, dc));
  }
}), mc = ["width", "height"], pc = { key: 0 }, vc = ["x1", "x2", "y1", "y2"], gc = ["x", "y"], hc = ["x1", "x2", "y1", "y2"], bc = ["x", "y"], xc = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], yc = ["x", "y", "width", "height", "fill", "fill-opacity"], kc = ["x", "y"], $c = ["x", "y"], wc = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Cc = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, _c = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Mc = { class: "text-xs font-semibold tabular-nums" }, Sc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Bc = { class: "text-muted-foreground" }, Tt = 5.6, N$ = /* @__PURE__ */ z({
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
    function r(V) {
      return a[V] ?? V;
    }
    function o(V, Z) {
      if (!l.thresholds?.length)
        return Z;
      const q = l.thresholds.find((X) => V < X.max);
      return r(q ? q.color : l.aboveColor);
    }
    const i = G(null), u = G(560), d = G(null);
    let m = null;
    ue(() => {
      m = new ResizeObserver((V) => {
        u.value = Math.max(160, V[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), me(() => m?.disconnect());
    const k = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = $(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Z, q) => ({
      ...Z,
      color: Z.color ?? k[q % k.length]
    }))), h = $(() => f.value[0]?.points.map((V) => V.label) ?? []), M = $(() => h.value.length), C = $(() => l.orientation === "horizontal"), w = $(() => Math.max(0, ...h.value.map((V) => V.length))), g = $(() => {
      if (!C.value)
        return l.showAxis ? 44 : 8;
      const V = w.value * Tt + 16;
      return Math.round(Math.min(Math.max(60, V), u.value * 0.4));
    }), c = $(() => Math.max(4, Math.floor((g.value - 16) / Tt)));
    function b(V) {
      return V.length <= c.value ? V : `${V.slice(0, c.value - 1)}…`;
    }
    const v = $(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: g.value
    })), y = $(() => ({
      w: Math.max(1, u.value - v.value.left - v.value.right),
      h: Math.max(1, l.height - v.value.top - v.value.bottom)
    })), S = (V) => l.format ? l.format(V) : B(V);
    function B(V) {
      return Math.abs(V) >= 1e6 ? `${(V / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(V) >= 1e3 ? `${(V / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(V * 100) / 100);
    }
    const K = $(() => {
      const V = h.value.map(
        (ie, ge) => l.stacked ? f.value.reduce((ae, ve) => ae + Math.max(0, ve.points[ge]?.value ?? 0), 0) : Math.max(...f.value.map((ae) => ae.points[ge]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const Z = Math.max(...V, 0);
      if (Z <= 0)
        return 1;
      const q = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((ie) => Z <= ie * q) ?? 10) * q;
    }), N = $(
      () => (C.value ? y.value.h : y.value.w) / Math.max(1, M.value)
    ), Y = $(() => N.value * 0.68), T = $(
      () => l.stacked || f.value.length <= 1 ? Y.value : Y.value / f.value.length
    ), O = $(() => {
      const V = [], Z = new Array(M.value).fill(0);
      return f.value.forEach((q, X) => {
        q.points.forEach((ie, ge) => {
          const ve = Math.max(0, ie.value) / K.value * (C.value ? y.value.w : y.value.h), Ie = (C.value ? v.value.top : v.value.left) + ge * N.value + (N.value - Y.value) / 2, Pt = l.stacked ? 0 : X * T.value;
          V.push(
            C.value ? {
              x: v.value.left + Z[ge],
              y: Ie + Pt,
              w: ve,
              h: Math.max(0, T.value - 2),
              color: o(ie.value, q.color),
              label: ie.label,
              name: q.name,
              value: ie.value,
              index: ge
            } : {
              x: Ie + Pt,
              y: v.value.top + y.value.h - ve - Z[ge],
              w: Math.max(0, T.value - 2),
              h: ve,
              color: o(ie.value, q.color),
              label: ie.label,
              name: q.name,
              value: ie.value,
              index: ge
            }
          ), l.stacked && (Z[ge] += ve);
        });
      }), V;
    }), A = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((V) => ({
        value: K.value * (C.value ? V : 1 - V),
        x: v.value.left + y.value.w * V,
        y: v.value.top + y.value.h * V
      }))
    ), W = $(() => Math.max(1, Math.ceil(M.value / (C.value ? 14 : 10))));
    function I(V) {
      return V === M.value - 1 || V % W.value === 0;
    }
    function U(V) {
      return (C.value ? v.value.top : v.value.left) + V * N.value + N.value / 2;
    }
    const te = $(() => d.value === null ? null : {
      label: h.value[d.value],
      rows: f.value.map((V) => ({
        name: V.name,
        color: V.color,
        value: V.points[d.value]?.value ?? 0
      }))
    });
    return (V, Z) => (t(), n("div", {
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
          onMouseleave: Z[0] || (Z[0] = (q) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", pc, [
            C.value ? (t(), n(P, { key: 0 }, [
              (t(!0), n(P, null, D(A.value, (q) => (t(), n("line", {
                key: `g-${q.x}`,
                x1: q.x,
                x2: q.x,
                y1: v.value.top,
                y2: v.value.top + y.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, vc))), 128)),
              (t(!0), n(P, null, D(A.value, (q) => (t(), n("text", {
                key: `gt-${q.x}`,
                x: q.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, p(B(q.value)), 9, gc))), 128))
            ], 64)) : (t(), n(P, { key: 1 }, [
              (t(!0), n(P, null, D(A.value, (q) => (t(), n("line", {
                key: `g-${q.y}`,
                x1: v.value.left,
                x2: u.value - v.value.right,
                y1: q.y,
                y2: q.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, hc))), 128)),
              (t(!0), n(P, null, D(A.value, (q) => (t(), n("text", {
                key: `gt-${q.y}`,
                x: v.value.left - 8,
                y: q.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, p(B(q.value)), 9, bc))), 128))
            ], 64))
          ])) : _("", !0),
          (t(!0), n(P, null, D(h.value, (q, X) => (t(), n("rect", {
            key: `hit-${X}`,
            x: C.value ? v.value.left : v.value.left + X * N.value,
            y: C.value ? v.value.top + X * N.value : v.value.top,
            width: C.value ? y.value.w : N.value,
            height: C.value ? N.value : y.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === X ? 0.4 : 0,
            onMouseenter: (ie) => d.value = X
          }, null, 40, xc))), 128)),
          (t(!0), n(P, null, D(O.value, (q, X) => (t(), n("rect", {
            key: `b-${X}`,
            x: q.x,
            y: q.y,
            width: q.w,
            height: q.h,
            fill: q.color,
            "fill-opacity": d.value === null || d.value === q.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, yc))), 128)),
          C.value ? (t(!0), n(P, { key: 1 }, D(h.value, (q, X) => oe((t(), n("text", {
            key: `c-${X}`,
            x: v.value.left - 8,
            y: U(X) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(p(b(q)) + " ", 1),
            s("title", null, p(q), 1)
          ], 8, kc)), [
            [Se, I(X)]
          ])), 128)) : (t(!0), n(P, { key: 2 }, D(h.value, (q, X) => oe((t(), n("text", {
            key: `c-${X}`,
            x: U(X),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, p(q), 9, $c)), [
            [Se, I(X)]
          ])), 128))
        ], 40, mc)),
        te.value ? (t(), n("div", wc, [
          s("p", Cc, p(te.value.label), 1),
          (t(!0), n(P, null, D(te.value.rows, (q, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: q.color })
            }, null, 4),
            s("span", _c, p(q.name || "Value"), 1),
            s("span", Mc, p(S(q.value)), 1)
          ]))), 128))
        ])) : _("", !0),
        e.showLegend && f.value.length > 1 ? (t(), n("div", Sc, [
          (t(!0), n(P, null, D(f.value, (q, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: q.color })
            }, null, 4),
            s("span", Bc, p(q.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Pc = ["width", "height"], zc = ["id"], Ac = ["stop-color"], jc = ["stop-color"], Oc = { key: 0 }, Lc = ["x1", "x2", "y1", "y2"], Vc = ["x", "y"], Dc = ["x", "y"], Tc = ["x1", "x2", "y1", "y2"], Fc = ["d", "fill"], Ec = ["d", "stroke", "stroke-dasharray"], Ic = ["cx", "cy", "fill"], Nc = { key: 1 }, Rc = ["x1", "x2", "y1", "y2"], Uc = ["cx", "cy", "fill"], Hc = ["x", "y"], qc = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Kc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Gc = { class: "text-xs font-semibold tabular-nums" }, Wc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Zc = { class: "text-muted-foreground" }, Jc = /* @__PURE__ */ z({
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
    const l = e, a = $(() => k.value.some((V) => V.axis === "right")), r = G(null), o = G(560), i = G(null);
    let u = null;
    ue(() => {
      u = new ResizeObserver((V) => {
        o.value = Math.max(160, V[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), me(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = Math.random().toString(36).slice(2, 9), k = $(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Z, q) => ({
      ...Z,
      color: Z.color ?? d[q % d.length]
    }))), f = $(() => k.value[0]?.points.map((V) => V.label) ?? []), h = $(() => f.value.length), M = $(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), C = (V) => l.format ? l.format(V) : w(V);
    function w(V) {
      return Math.abs(V) >= 1e6 ? `${(V / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(V) >= 1e3 ? `${(V / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(V * 100) / 100);
    }
    function g(V) {
      const Z = Math.max(...V, 0);
      if (Z <= 0)
        return 1;
      const q = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((ie) => Z <= ie * q) ?? 10) * q;
    }
    const c = $(
      () => g(
        k.value.filter((V) => V.axis !== "right").flatMap((V) => V.points.map((Z) => Z.value))
      )
    ), b = $(
      () => g(
        k.value.filter((V) => V.axis === "right").flatMap((V) => V.points.map((Z) => Z.value))
      )
    ), v = $(() => ({
      w: Math.max(1, o.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    }));
    function y(V) {
      return M.value.left + (h.value <= 1 ? 0 : V / (h.value - 1) * v.value.w);
    }
    function S(V, Z = "left") {
      const q = Z === "right" ? b.value : c.value;
      return M.value.top + v.value.h - V / q * v.value.h;
    }
    const B = $(
      () => k.value.map((V) => {
        const Z = V.points.map((X, ie) => ({
          ...X,
          x: y(ie),
          y: S(X.value, V.axis ?? "left")
        })), q = V.stepped ? K(Z) : N(Z);
        return { ...V, pts: Z, line: q, area: Y(q, Z) };
      })
    );
    function K(V) {
      if (V.length === 0)
        return "";
      let Z = `M${V[0].x.toFixed(2)},${V[0].y.toFixed(2)}`;
      for (let q = 1; q < V.length; q++)
        Z += ` L${V[q].x.toFixed(2)},${V[q - 1].y.toFixed(2)} L${V[q].x.toFixed(2)},${V[q].y.toFixed(2)}`;
      return Z;
    }
    function N(V) {
      const Z = V.length;
      if (Z === 0)
        return "";
      if (Z === 1)
        return `M${V[0].x},${V[0].y}`;
      const q = [], X = [];
      for (let ae = 0; ae < Z - 1; ae++)
        q[ae] = V[ae + 1].x - V[ae].x, X[ae] = q[ae] === 0 ? 0 : (V[ae + 1].y - V[ae].y) / q[ae];
      const ie = [X[0]];
      for (let ae = 1; ae < Z - 1; ae++)
        if (X[ae - 1] * X[ae] <= 0)
          ie[ae] = 0;
        else {
          const ve = 2 * q[ae] + q[ae - 1], Ie = q[ae] + 2 * q[ae - 1];
          ie[ae] = (ve + Ie) / (ve / X[ae - 1] + Ie / X[ae]);
        }
      ie[Z - 1] = X[Z - 2];
      let ge = `M${V[0].x.toFixed(2)},${V[0].y.toFixed(2)}`;
      for (let ae = 0; ae < Z - 1; ae++) {
        const ve = q[ae] / 3;
        ge += ` C${(V[ae].x + ve).toFixed(2)},${(V[ae].y + ie[ae] * ve).toFixed(2)} ${(V[ae + 1].x - ve).toFixed(2)},${(V[ae + 1].y - ie[ae + 1] * ve).toFixed(2)} ${V[ae + 1].x.toFixed(2)},${V[ae + 1].y.toFixed(2)}`;
      }
      return ge;
    }
    function Y(V, Z) {
      if (Z.length === 0)
        return "";
      const q = M.value.top + v.value.h;
      return `${V} L${Z[Z.length - 1].x.toFixed(2)},${q} L${Z[0].x.toFixed(2)},${q} Z`;
    }
    const T = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((V) => ({
        y: M.value.top + v.value.h * V,
        value: c.value * (1 - V)
      }))
    ), O = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((V) => ({
        y: M.value.top + v.value.h * V,
        value: b.value * (1 - V)
      }))
    ), A = $(() => Math.max(1, Math.ceil(h.value / 8)));
    function W(V) {
      return V === h.value - 1 || V % A.value === 0;
    }
    function I(V) {
      const Z = V.currentTarget.getBoundingClientRect(), q = V.clientX - Z.left - M.value.left, X = h.value <= 1 ? 1 : v.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(q / X)));
    }
    const U = $(() => {
      if (i.value === null || h.value === 0)
        return null;
      const V = i.value;
      return {
        i: V,
        x: y(V),
        label: f.value[V],
        rows: B.value.map((Z) => ({
          name: Z.name,
          color: Z.color,
          value: Z.points[V]?.value ?? 0,
          y: Z.pts[V]?.y ?? 0
        }))
      };
    }), te = $(() => {
      if (!U.value)
        return {};
      const V = U.value.x > o.value * 0.6;
      return {
        left: `${U.value.x}px`,
        top: "8px",
        transform: V ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (V, Z) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: o.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: I,
          onMouseleave: Z[0] || (Z[0] = (q) => i.value = null)
        }, [
          s("defs", null, [
            (t(!0), n(P, null, D(B.value, (q, X) => (t(), n("linearGradient", {
              id: `pk-fill-${x(m)}-${X}`,
              key: X,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              s("stop", {
                offset: "0%",
                "stop-color": q.color,
                "stop-opacity": "0.25"
              }, null, 8, Ac),
              s("stop", {
                offset: "100%",
                "stop-color": q.color,
                "stop-opacity": "0.01"
              }, null, 8, jc)
            ], 8, zc))), 128))
          ]),
          e.showAxis ? (t(), n("g", Oc, [
            (t(!0), n(P, null, D(T.value, (q) => (t(), n("line", {
              key: q.y,
              x1: M.value.left,
              x2: o.value - M.value.right,
              y1: q.y,
              y2: q.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Lc))), 128)),
            (t(!0), n(P, null, D(T.value, (q) => (t(), n("text", {
              key: `t-${q.y}`,
              x: M.value.left - 8,
              y: q.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, p(w(q.value)), 9, Vc))), 128)),
            a.value ? (t(!0), n(P, { key: 0 }, D(O.value, (q) => (t(), n("text", {
              key: `rt-${q.y}`,
              x: o.value - M.value.right + 8,
              y: q.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, p(w(q.value)), 9, Dc))), 128)) : _("", !0)
          ])) : _("", !0),
          (t(!0), n(P, null, D(f.value, (q, X) => oe((t(), n("line", {
            key: `v-${X}`,
            x1: y(X),
            x2: y(X),
            y1: M.value.top,
            y2: M.value.top + v.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Tc)), [
            [Se, W(X)]
          ])), 128)),
          (t(!0), n(P, null, D(B.value, (q, X) => (t(), n("g", {
            key: `s-${X}`
          }, [
            q.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: q.area,
              fill: `url(#pk-fill-${x(m)}-${X})`
            }, null, 8, Fc)) : _("", !0),
            s("path", {
              d: q.line,
              fill: "none",
              stroke: q.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": q.dashed ? "6 4" : void 0
            }, null, 8, Ec),
            q.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: q.pts[0].x,
              cy: q.pts[0].y,
              r: "3",
              fill: q.color
            }, null, 8, Ic)) : _("", !0)
          ]))), 128)),
          U.value ? (t(), n("g", Nc, [
            s("line", {
              x1: U.value.x,
              x2: U.value.x,
              y1: M.value.top,
              y2: M.value.top + v.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Rc),
            (t(!0), n(P, null, D(U.value.rows, (q, X) => (t(), n("circle", {
              key: `d-${X}`,
              cx: U.value.x,
              cy: q.y,
              r: "4",
              fill: q.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Uc))), 128))
          ])) : _("", !0),
          (t(!0), n(P, null, D(f.value, (q, X) => oe((t(), n("text", {
            key: `x-${X}`,
            x: y(X),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, p(q), 9, Hc)), [
            [Se, W(X)]
          ])), 128))
        ], 40, Pc)),
        U.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: Q(te.value)
        }, [
          s("p", qc, p(U.value.label), 1),
          (t(!0), n(P, null, D(U.value.rows, (q, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: q.color })
            }, null, 4),
            s("span", Kc, p(q.name || "Value"), 1),
            s("span", Gc, p(C(q.value)), 1)
          ]))), 128))
        ], 4)) : _("", !0),
        e.showLegend && k.value.length > 1 ? (t(), n("div", Wc, [
          (t(!0), n(P, null, D(B.value, (q, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: q.color })
            }, null, 4),
            s("span", Zc, p(q.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Yc = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Xc = { class: "text-muted-foreground text-[11px] capitalize" }, Qc = { class: "text-sm font-semibold tabular-nums" }, ef = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ze = /* @__PURE__ */ z({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Yc, [
      s("p", Xc, p(e.label), 1),
      s("p", Qc, [
        R(p(e.value) + " ", 1),
        e.share ? (t(), n("span", ef, " (" + p(e.share) + ") ", 1)) : _("", !0)
      ])
    ]));
  }
}), tf = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, af = ["width", "height", "viewBox", "aria-label"], nf = ["d", "fill", "fill-opacity", "onMouseenter"], lf = ["x", "y"], sf = ["x", "y"], of = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, rf = ["onMouseenter"], uf = { class: "min-w-0 flex-1 truncate capitalize" }, df = { class: "tabular-nums font-medium" }, cf = { class: "text-muted-foreground w-9 text-right tabular-nums" }, R$ = /* @__PURE__ */ z({
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
    ], r = $(() => l.data.reduce((c, b) => c + b.value, 0)), o = G(null), i = $(() => l.height), u = $(() => i.value / 2 - 4), d = $(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function m(c) {
      return a[c % a.length];
    }
    function k(c) {
      return 1 - Math.min(0.55, Math.floor(c / a.length) * 0.28);
    }
    const f = $(() => {
      if (r.value <= 0)
        return [];
      const c = i.value / 2;
      let b = -Math.PI / 2;
      return l.data.map((v, y) => {
        const S = v.value / r.value, B = S * Math.PI * 2, K = b, N = b + B;
        return b = N, {
          ...v,
          share: S,
          colour: m(y),
          opacity: k(y),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: S >= 0.9999 ? C(c) : M(c, K, N, u.value, d.value)
        };
      });
    });
    function h(c, b, v) {
      return `${(c + Math.cos(b) * v).toFixed(2)},${(c + Math.sin(b) * v).toFixed(2)}`;
    }
    function M(c, b, v, y, S) {
      const B = v - b > Math.PI ? 1 : 0;
      return S <= 0 ? `M${c},${c} L${h(c, b, y)} A${y},${y} 0 ${B} 1 ${h(c, v, y)} Z` : [
        `M${h(c, b, y)}`,
        `A${y},${y} 0 ${B} 1 ${h(c, v, y)}`,
        `L${h(c, v, S)}`,
        `A${S},${S} 0 ${B} 0 ${h(c, b, S)}`,
        "Z"
      ].join(" ");
    }
    function C(c) {
      const b = u.value, v = d.value, y = [
        `M${c - b},${c}`,
        `A${b},${b} 0 1 1 ${c + b},${c}`,
        `A${b},${b} 0 1 1 ${c - b},${c}`,
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
    const w = (c) => l.format ? l.format(c) : new Intl.NumberFormat().format(c), g = (c) => `${(c * 100).toFixed(c < 0.01 ? 2 : 0)}%`;
    return (c, b) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", tf, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${w(r.value)}`
      }, [
        (t(!0), n(P, null, D(f.value, (v, y) => (t(), n("path", {
          key: y,
          d: v.path,
          fill: v.colour,
          "fill-opacity": o.value === null || o.value === y ? v.opacity : v.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (S) => o.value = y,
          onMouseleave: b[0] || (b[0] = (S) => o.value = null)
        }, null, 40, nf))), 128)),
        e.type === "doughnut" ? (t(), n(P, { key: 0 }, [
          s("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, p(w(o.value === null ? r.value : f.value[o.value].value)), 9, lf),
          s("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, p(o.value === null ? "Total" : f.value[o.value].label), 9, sf)
        ], 64)) : _("", !0)
      ], 8, af)),
      s("ul", of, [
        (t(!0), n(P, null, D(f.value, (v, y) => (t(), n("li", {
          key: y,
          class: j(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", o.value === y ? "bg-muted" : ""]),
          onMouseenter: (S) => o.value = y,
          onMouseleave: b[1] || (b[1] = (S) => o.value = null)
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: v.colour, opacity: v.opacity })
          }, null, 4),
          s("span", uf, p(v.label), 1),
          s("span", df, p(w(v.value)), 1),
          s("span", cf, p(g(v.share)), 1)
        ], 42, rf))), 128))
      ]),
      o.value !== null && e.type === "pie" ? (t(), F(Ze, {
        key: 0,
        label: f.value[o.value].label,
        value: w(f.value[o.value].value),
        share: g(f.value[o.value].share)
      }, null, 8, ["label", "value", "share"])) : _("", !0)
    ]));
  }
}), ff = ["width", "height", "viewBox", "aria-label"], mf = { class: "text-border" }, pf = ["x1", "x2", "y1", "y2", "stroke-dasharray"], vf = { class: "fill-muted-foreground text-[10px]" }, gf = ["x", "y"], hf = ["x", "y"], bf = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], xf = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, U$ = /* @__PURE__ */ z({
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
    let u = null;
    ue(() => {
      u = new ResizeObserver((A) => {
        const W = A[0]?.contentRect.width ?? 0;
        W > 0 && (o.value = W);
      }), r.value && u.observe(r.value);
    }), me(() => u?.disconnect());
    const d = $(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), m = (A, W) => W.color ?? a[A % a.length], k = $(() => d.value.flatMap((A) => A.points)), f = $(() => k.value.some((A) => typeof A.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, M = $(() => Math.max(10, o.value - h.left - h.right)), C = $(() => Math.max(10, l.height - h.top - h.bottom));
    function w(A) {
      if (A.length === 0)
        return [0, 1];
      const W = Math.min(...A), I = Math.max(...A), U = I - W || Math.abs(I) || 1;
      return [W - U * 0.08, I + U * 0.08];
    }
    const g = $(() => w(k.value.map((A) => A.x))), c = $(() => w(k.value.map((A) => A.y))), b = (A) => {
      const [W, I] = g.value;
      return h.left + (A - W) / (I - W) * M.value;
    }, v = (A) => {
      const [W, I] = c.value;
      return h.top + C.value - (A - W) / (I - W) * C.value;
    }, y = $(() => Math.max(...k.value.map((A) => A.r ?? 0), 0));
    function S(A) {
      if (!f.value || !y.value)
        return 4;
      const W = Math.max(0, A.r ?? 0) / y.value;
      return 3 + Math.sqrt(W) * (l.maxRadius - 3);
    }
    function B([A, W]) {
      return Array.from({ length: 5 }, (I, U) => A + (W - A) / 4 * U);
    }
    const K = $(() => B(g.value)), N = $(() => B(c.value)), Y = (A) => l.formatX?.(A) ?? String(Math.round(A * 100) / 100), T = (A) => l.formatY?.(A) ?? String(Math.round(A * 100) / 100), O = $(() => {
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
        width: o.value,
        height: e.height,
        viewBox: `0 0 ${o.value} ${e.height}`,
        class: "overflow-visible",
        role: "img",
        "aria-label": f.value ? "Bubble chart" : "Scatter chart"
      }, [
        s("g", mf, [
          (t(!0), n(P, null, D(N.value, (I, U) => (t(), n("line", {
            key: `gy-${U}`,
            x1: h.left,
            x2: h.left + M.value,
            y1: v(I),
            y2: v(I),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": U === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, pf))), 128))
        ]),
        s("g", vf, [
          (t(!0), n(P, null, D(N.value, (I, U) => (t(), n("text", {
            key: `ty-${U}`,
            x: h.left - 8,
            y: v(I) + 3,
            "text-anchor": "end"
          }, p(T(I)), 9, gf))), 128)),
          (t(!0), n(P, null, D(K.value, (I, U) => (t(), n("text", {
            key: `tx-${U}`,
            x: b(I),
            y: e.height - 10,
            "text-anchor": "middle"
          }, p(Y(I)), 9, hf))), 128))
        ]),
        (t(!0), n(P, null, D(d.value, (I, U) => (t(), n("g", {
          key: `s-${U}`
        }, [
          (t(!0), n(P, null, D(I.points, (te, V) => (t(), n("circle", {
            key: `p-${U}-${V}`,
            cx: b(te.x),
            cy: v(te.y),
            r: S(te),
            fill: m(U, I),
            "fill-opacity": f.value ? 0.55 : 0.85,
            stroke: m(U, I),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== U || i.value.p !== V) ? 0.35 : 1,
            onMouseenter: (Z) => i.value = { s: U, p: V },
            onMouseleave: W[0] || (W[0] = (Z) => i.value = null)
          }, null, 40, bf))), 128))
        ]))), 128))
      ], 8, ff)),
      O.value ? (t(), F(Ze, {
        key: 0,
        label: O.value.point.label ?? O.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${Y(O.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${T(O.value.point.y)}`,
        share: f.value && O.value.point.r != null ? String(O.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : _("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", xf, [
        (t(!0), n(P, null, D(d.value, (I, U) => (t(), n("span", {
          key: `l-${U}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          s("span", {
            class: "size-2.5 rounded-full",
            style: Q({ backgroundColor: m(U, I) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + p(I.name), 1)
        ]))), 128))
      ])) : _("", !0)
    ], 512));
  }
}), yf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, kf = ["width", "height", "viewBox"], $f = ["points"], wf = ["x1", "y1", "x2", "y2"], Cf = ["points", "fill", "stroke"], _f = ["cx", "cy", "fill", "onMouseenter"], Mf = ["x", "y", "text-anchor"], Sf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Bf = { class: "truncate" }, H$ = /* @__PURE__ */ z({
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
    ), o = $(() => r.value[0]?.points.map((v) => v.label) ?? []), i = $(() => o.value.length), u = $(() => l.height), d = $(() => u.value / 2), m = $(() => u.value / 2 - 34), k = $(() => {
      const v = Math.max(...r.value.flatMap((B) => B.points.map((K) => K.value)), 0);
      if (v <= 0)
        return 1;
      const y = 10 ** Math.floor(Math.log10(v));
      return ([1, 2, 2.5, 5, 10].find((B) => v <= B * y) ?? 10) * y;
    });
    function f(v) {
      return v / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(v, y) {
      const S = f(v);
      return {
        x: d.value + Math.cos(S) * m.value * y,
        y: d.value + Math.sin(S) * m.value * y
      };
    }
    function M(v) {
      return Array.from({ length: i.value }, (y, S) => {
        const B = h(S, v);
        return `${B.x.toFixed(2)},${B.y.toFixed(2)}`;
      }).join(" ");
    }
    const C = $(() => [0.25, 0.5, 0.75, 1].map((v) => ({ f: v, points: M(v) }))), w = $(
      () => r.value.map((v) => {
        const y = v.points.map((S) => Math.max(0, S.value) / k.value);
        return {
          name: v.name,
          color: v.color,
          values: v.points,
          outline: y.map((S, B) => {
            const K = h(B, S);
            return `${K.x.toFixed(2)},${K.y.toFixed(2)}`;
          }).join(" "),
          dots: y.map((S, B) => h(B, S))
        };
      })
    ), g = $(
      () => o.value.map((v, y) => {
        const S = f(y), B = d.value + Math.cos(S) * (m.value + 14), K = d.value + Math.sin(S) * (m.value + 14), N = Math.cos(S);
        return {
          label: v,
          x: B,
          y: K + 3,
          anchor: Math.abs(N) < 0.2 ? "middle" : N > 0 ? "start" : "end"
        };
      })
    ), c = G(null), b = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v);
    return (v, y) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", yf, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(P, null, D(C.value, (S) => (t(), n("polygon", {
          key: S.f,
          points: S.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, $f))), 128)),
        (t(!0), n(P, null, D(o.value, (S, B) => (t(), n("line", {
          key: `spoke-${B}`,
          x1: d.value,
          y1: d.value,
          x2: h(B, 1).x,
          y2: h(B, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, wf))), 128)),
        (t(!0), n(P, null, D(w.value, (S, B) => (t(), n("g", {
          key: `s-${B}`
        }, [
          s("polygon", {
            points: S.outline,
            fill: S.color,
            "fill-opacity": "0.16",
            stroke: S.color,
            "stroke-width": "2"
          }, null, 8, Cf),
          (t(!0), n(P, null, D(S.dots, (K, N) => (t(), n("circle", {
            key: N,
            cx: K.x,
            cy: K.y,
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
          }, null, 40, _f))), 128))
        ]))), 128)),
        (t(!0), n(P, null, D(g.value, (S, B) => (t(), n("text", {
          key: `l-${B}`,
          x: S.x,
          y: S.y,
          "text-anchor": S.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, p(S.label), 9, Mf))), 128))
      ], 8, kf)),
      e.showLegend ? (t(), n("ul", Sf, [
        (t(!0), n(P, null, D(r.value, (S, B) => (t(), n("li", {
          key: B,
          class: "flex items-center gap-2 text-xs"
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: S.color })
          }, null, 4),
          s("span", Bf, p(S.name), 1)
        ]))), 128))
      ])) : _("", !0),
      c.value ? (t(), F(Ze, {
        key: 1,
        label: `${c.value.series} — ${c.value.axis}`,
        value: b(c.value.value)
      }, null, 8, ["label", "value"])) : _("", !0)
    ]));
  }
}), Pf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, zf = ["width", "height", "viewBox"], Af = ["cx", "cy", "r"], jf = ["d", "fill", "fill-opacity", "onMouseenter"], Of = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Lf = { class: "min-w-0 flex-1 truncate capitalize" }, Vf = { class: "font-medium tabular-nums" }, q$ = /* @__PURE__ */ z({
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
    ], r = G(null), o = $(() => l.height), i = $(() => o.value / 2), u = $(() => o.value / 2 - 6), d = $(() => Math.max(...l.data.map((M) => Math.max(0, M.value)), 0)), m = $(() => {
      const M = l.data.length;
      if (M === 0 || d.value <= 0)
        return [];
      const C = Math.PI * 2 / M;
      return l.data.map((w, g) => {
        const c = Math.sqrt(Math.max(0, w.value) / d.value), b = u.value * c, v = g * C - Math.PI / 2, y = v + C;
        return {
          ...w,
          color: a[g % a.length],
          share: d.value === 0 ? 0 : w.value / d.value,
          path: k(i.value, v, y, b)
        };
      });
    });
    function k(M, C, w, g) {
      if (g <= 0)
        return "";
      if (w - C >= Math.PI * 2 - 1e-6)
        return `M${M - g},${M} A${g},${g} 0 1 1 ${M + g},${M} A${g},${g} 0 1 1 ${M - g},${M} Z`;
      const c = w - C > Math.PI ? 1 : 0, b = M + Math.cos(C) * g, v = M + Math.sin(C) * g, y = M + Math.cos(w) * g, S = M + Math.sin(w) * g;
      return `M${M},${M} L${b.toFixed(2)},${v.toFixed(2)} A${g.toFixed(2)},${g.toFixed(2)} 0 ${c} 1 ${y.toFixed(2)},${S.toFixed(2)} Z`;
    }
    const f = $(() => [0.5, 0.75, 1].map((M) => u.value * M)), h = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, C) => m.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Pf, [
      (t(), n("svg", {
        width: o.value,
        height: o.value,
        viewBox: `0 0 ${o.value} ${o.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(P, null, D(f.value, (w) => (t(), n("circle", {
          key: w,
          cx: i.value,
          cy: i.value,
          r: w,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Af))), 128)),
        (t(!0), n(P, null, D(m.value, (w, g) => (t(), n("path", {
          key: g,
          d: w.path,
          fill: w.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === g ? 0.75 : 0.3,
          onMouseenter: (c) => r.value = g,
          onMouseleave: C[0] || (C[0] = (c) => r.value = null)
        }, null, 40, jf))), 128))
      ], 8, zf)),
      e.showLegend ? (t(), n("ul", Of, [
        (t(!0), n(P, null, D(m.value, (w, g) => (t(), n("li", {
          key: g,
          class: "flex items-center gap-2 text-xs"
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: w.color })
          }, null, 4),
          s("span", Lf, p(w.label), 1),
          s("span", Vf, p(h(w.value)), 1)
        ]))), 128))
      ])) : _("", !0),
      r.value !== null ? (t(), F(Ze, {
        key: 1,
        label: m.value[r.value].label,
        value: h(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : _("", !0)
    ]));
  }
}), Df = ["width", "height"], Tf = ["x1", "x2", "y1", "y2"], Ff = ["x", "y"], Ef = ["x", "y"], If = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Nf = ["x", "y", "width", "height", "fill", "fill-opacity"], Rf = ["d", "stroke"], Uf = ["cx", "cy", "fill"], Hf = ["x", "y"], qf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Kf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Gf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Wf = { class: "text-xs font-semibold tabular-nums" }, Zf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Jf = { class: "text-muted-foreground" }, K$ = /* @__PURE__ */ z({
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
    ue(() => {
      i = new ResizeObserver((U) => {
        r.value = Math.max(160, U[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), me(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], m = $(
      () => l.bars.map((U, te) => ({
        ...U,
        color: U.color ?? u[te % u.length]
      }))
    ), k = $(
      () => l.lines.map((U, te) => ({
        ...U,
        color: U.color ?? d[te % d.length]
      }))
    ), f = $(
      () => m.value[0]?.points.map((U) => U.label) ?? k.value[0]?.points.map((U) => U.label) ?? []
    ), h = $(() => f.value.length), M = $(() => l.lineAxis === "right"), C = $(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), w = $(() => ({
      w: Math.max(1, r.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function g(U) {
      const te = Math.max(...U, 0);
      if (te <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(te));
      return ([1, 2, 2.5, 5, 10].find((q) => te <= q * V) ?? 10) * V;
    }
    const c = $(
      () => g([
        ...m.value.flatMap((U) => U.points.map((te) => te.value)),
        ...M.value ? [] : k.value.flatMap((U) => U.points.map((te) => te.value))
      ])
    ), b = $(
      () => M.value ? g(k.value.flatMap((U) => U.points.map((te) => te.value))) : c.value
    ), v = $(() => w.value.w / Math.max(1, h.value)), y = $(() => v.value * 0.6), S = $(() => y.value / Math.max(1, m.value.length));
    function B(U) {
      return C.value.left + U * v.value + v.value / 2;
    }
    const K = $(
      () => m.value.flatMap(
        (U, te) => U.points.map((V, Z) => {
          const q = Math.max(0, V.value) / c.value * w.value.h;
          return {
            x: B(Z) - y.value / 2 + te * S.value,
            y: C.value.top + w.value.h - q,
            w: Math.max(0, S.value - 2),
            h: q,
            color: U.color,
            index: Z,
            name: U.name,
            value: V.value,
            label: V.label
          };
        })
      )
    ), N = $(
      () => k.value.map((U) => {
        const te = U.points.map((V, Z) => ({
          x: B(Z),
          y: C.value.top + w.value.h - Math.max(0, V.value) / b.value * w.value.h,
          value: V.value
        }));
        return {
          ...U,
          pts: te,
          d: te.map((V, Z) => `${Z === 0 ? "M" : "L"}${V.x.toFixed(2)},${V.y.toFixed(2)}`).join(" ")
        };
      })
    ), Y = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((U) => ({
        y: C.value.top + w.value.h * U,
        left: c.value * (1 - U),
        right: b.value * (1 - U)
      }))
    ), T = $(() => Math.max(1, Math.ceil(h.value / 10)));
    function O(U) {
      return U === h.value - 1 || U % T.value === 0;
    }
    const A = (U) => l.format ? l.format(U) : W(U);
    function W(U) {
      return Math.abs(U) >= 1e6 ? `${(U / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(U) >= 1e3 ? `${(U / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(U * 100) / 100);
    }
    const I = $(() => {
      if (o.value === null)
        return null;
      const U = o.value;
      return {
        label: f.value[U],
        rows: [
          ...m.value.map((te) => ({
            name: te.name,
            color: te.color,
            value: te.points[U]?.value ?? 0
          })),
          ...k.value.map((te) => ({
            name: te.name,
            color: te.color,
            value: te.points[U]?.value ?? 0
          }))
        ]
      };
    });
    return (U, te) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: te[0] || (te[0] = (V) => o.value = null)
        }, [
          (t(!0), n(P, null, D(Y.value, (V) => (t(), n("line", {
            key: `g-${V.y}`,
            x1: C.value.left,
            x2: r.value - C.value.right,
            y1: V.y,
            y2: V.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Tf))), 128)),
          (t(!0), n(P, null, D(Y.value, (V) => (t(), n("text", {
            key: `lt-${V.y}`,
            x: C.value.left - 8,
            y: V.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, p(W(V.left)), 9, Ff))), 128)),
          M.value ? (t(!0), n(P, { key: 0 }, D(Y.value, (V) => (t(), n("text", {
            key: `rt-${V.y}`,
            x: r.value - C.value.right + 8,
            y: V.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, p(W(V.right)), 9, Ef))), 128)) : _("", !0),
          (t(!0), n(P, null, D(f.value, (V, Z) => (t(), n("rect", {
            key: `hit-${Z}`,
            x: C.value.left + Z * v.value,
            y: C.value.top,
            width: v.value,
            height: w.value.h,
            fill: "var(--muted)",
            "fill-opacity": o.value === Z ? 0.4 : 0,
            onMouseenter: (q) => o.value = Z
          }, null, 40, If))), 128)),
          (t(!0), n(P, null, D(K.value, (V, Z) => (t(), n("rect", {
            key: `b-${Z}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": o.value === null || o.value === V.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Nf))), 128)),
          (t(!0), n(P, null, D(N.value, (V, Z) => (t(), n("g", {
            key: `l-${Z}`
          }, [
            s("path", {
              d: V.d,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Rf),
            o.value !== null && V.pts[o.value] ? (t(), n("circle", {
              key: 0,
              cx: V.pts[o.value].x,
              cy: V.pts[o.value].y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Uf)) : _("", !0)
          ]))), 128)),
          (t(!0), n(P, null, D(f.value, (V, Z) => oe((t(), n("text", {
            key: `x-${Z}`,
            x: B(Z),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, p(V), 9, Hf)), [
            [Se, O(Z)]
          ])), 128))
        ], 40, Df)),
        I.value ? (t(), n("div", qf, [
          s("p", Kf, p(I.value.label), 1),
          (t(!0), n(P, null, D(I.value.rows, (V, Z) => (t(), n("div", {
            key: Z,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: V.color })
            }, null, 4),
            s("span", Gf, p(V.name), 1),
            s("span", Wf, p(A(V.value)), 1)
          ]))), 128))
        ])) : _("", !0),
        e.showLegend ? (t(), n("div", Zf, [
          (t(!0), n(P, null, D([...m.value, ...k.value], (V, Z) => (t(), n("span", {
            key: Z,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: V.color })
            }, null, 4),
            s("span", Jf, p(V.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Yf = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Xf = { class: "text-muted-foreground" }, Qf = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, em = ["width", "height"], tm = ["x", "y"], am = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], nm = ["x", "y"], lm = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, sm = { class: "text-[11px] font-medium capitalize" }, om = { class: "text-muted-foreground text-[11px] capitalize" }, rm = { class: "text-sm font-semibold tabular-nums" }, im = { class: "text-muted-foreground text-xs font-normal" }, G$ = /* @__PURE__ */ z({
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
    ue(() => {
      i = new ResizeObserver((y) => {
        r.value = Math.max(160, y[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), me(() => i?.disconnect());
    const u = $(() => l.series[0]?.points.map((y) => y.label) ?? []), d = $(() => l.series.length), m = $(() => u.value.length), k = $(() => Math.min(140, Math.max(60, r.value * 0.16))), f = $(() => Math.max(1, r.value - k.value - 8)), h = $(() => f.value / Math.max(1, m.value)), M = $(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function C(y) {
      if (y === 0)
        return "var(--muted)";
      const S = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(y / S * 100)}%, var(--muted))`;
    }
    function w(y) {
      for (let S = 0; S < l.buckets.length; S++) {
        const B = l.buckets[S].max;
        if (B === void 0 || y < B)
          return S;
      }
      return l.buckets.length - 1;
    }
    const g = $(
      () => l.series.flatMap(
        (y, S) => y.points.map((B, K) => {
          const N = w(B.value);
          return {
            row: S,
            col: K,
            x: k.value + K * h.value,
            y: 4 + S * M.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, M.value - 4),
            colour: C(N),
            label: B.label,
            value: B.value,
            rowName: y.name,
            bucketLabel: l.buckets[N].label
          };
        })
      )
    ), c = $(() => h.value < 2), b = $(() => o.value ? g.value.find((y) => y.row === o.value.row && y.col === o.value.col) ?? null : null), v = (y) => l.format ? l.format(y) : new Intl.NumberFormat().format(y);
    return (y, S) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || m.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        s("div", Yf, [
          (t(!0), n(P, null, D(e.buckets, (B, K) => (t(), n("span", {
            key: K,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            s("span", {
              class: "size-3 rounded-sm border",
              style: Q({ background: C(K) })
            }, null, 4),
            s("span", Xf, p(B.label), 1)
          ]))), 128))
        ]),
        c.value ? (t(), n("p", Qf, p(m.value) + " columns - too many to label individually ", 1)) : _("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: S[0] || (S[0] = (B) => o.value = null)
        }, [
          (t(!0), n(P, null, D(e.series, (B, K) => (t(), n("text", {
            key: `r-${K}`,
            x: k.value - 10,
            y: 4 + K * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, p(B.name), 9, tm))), 128)),
          (t(!0), n(P, null, D(g.value, (B, K) => (t(), n("rect", {
            key: K,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.colour,
            "fill-opacity": o.value === null || o.value.row === B.row && o.value.col === B.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (N) => o.value = { row: B.row, col: B.col }
          }, null, 40, am))), 128)),
          e.showColumnLabels && !c.value ? (t(!0), n(P, { key: 0 }, D(u.value, (B, K) => (t(), n("text", {
            key: `c-${K}`,
            x: k.value + K * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, p(B), 9, nm))), 128)) : _("", !0)
        ], 40, em)),
        b.value ? (t(), n("div", lm, [
          s("p", sm, p(b.value.label), 1),
          s("p", om, p(b.value.rowName), 1),
          s("p", rm, [
            R(p(v(b.value.value)) + " ", 1),
            s("span", im, "(" + p(b.value.bucketLabel) + ")", 1)
          ])
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), um = ["viewBox"], dm = { key: 0 }, cm = ["id"], fm = ["stop-color"], mm = ["stop-color"], pm = ["d", "fill"], vm = ["d", "stroke"], Ft = 100, Ne = 30, tt = /* @__PURE__ */ z({
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
      const d = l.data.map((h) => h.value);
      if (d.length < 2)
        return [];
      const m = Math.min(...d), f = Math.max(...d) - m || 1;
      return d.map((h, M) => ({
        x: M / (d.length - 1) * Ft,
        y: Ne - (h - m) / f * (Ne - 4) - 2
      }));
    });
    function o(d) {
      const m = d.length;
      if (m < 2)
        return "";
      const k = [], f = [];
      for (let C = 0; C < m - 1; C++)
        k[C] = d[C + 1].x - d[C].x, f[C] = k[C] === 0 ? 0 : (d[C + 1].y - d[C].y) / k[C];
      const h = [f[0]];
      for (let C = 1; C < m - 1; C++)
        if (f[C - 1] * f[C] <= 0)
          h[C] = 0;
        else {
          const w = 2 * k[C] + k[C - 1], g = k[C] + 2 * k[C - 1];
          h[C] = (w + g) / (w / f[C - 1] + g / f[C]);
        }
      h[m - 1] = f[m - 2];
      let M = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let C = 0; C < m - 1; C++) {
        const w = k[C] / 3;
        M += ` C${(d[C].x + w).toFixed(2)},${(d[C].y + h[C] * w).toFixed(2)} ${(d[C + 1].x - w).toFixed(2)},${(d[C + 1].y - h[C + 1] * w).toFixed(2)} ${d[C + 1].x.toFixed(2)},${d[C + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = $(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? o(d) : d.map((m, k) => `${k === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), u = $(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Ne} L${d[0].x.toFixed(2)},${Ne} Z`;
    });
    return (d, m) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${Ft} ${Ne}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: Q({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", dm, [
        s("linearGradient", {
          id: `pk-spark-${x(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          s("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, fm),
          s("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, mm)
        ], 8, cm)
      ])) : _("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${x(a)})`
      }, null, 8, pm)) : _("", !0),
      s("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, vm)
    ], 12, um)) : _("", !0);
  }
}), gm = { class: "flex items-center gap-1 text-xs" }, hm = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, bm = {
  key: 0,
  class: "text-muted-foreground truncate"
}, sa = /* @__PURE__ */ z({
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
    return (u, d) => (t(), n("span", gm, [
      s("span", {
        class: j(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        s("span", hm, p(o.value), 1),
        R(" " + p(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", bm, p(e.comparison), 1)) : _("", !0)
    ]));
  }
}), xm = ["aria-label"], De = /* @__PURE__ */ z({
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
    function i(u) {
      if (!(l.variant !== "text" || o.value === 1))
        return u === o.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: Q(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(P, null, D(o.value, (m) => (t(), n("span", {
        key: m,
        "aria-hidden": "true",
        class: j(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: Q({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, xm));
  }
}), ym = {
  class: "bg-card flex flex-col gap-3 rounded-lg border p-4",
  "data-slot": "chart-card"
}, km = { class: "flex flex-wrap items-start justify-between gap-2" }, $m = { class: "flex min-w-0 items-start gap-2" }, wm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Cm = ["d"], _m = { class: "min-w-0" }, Mm = { class: "text-sm font-medium" }, Sm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Bm = { class: "flex shrink-0 items-center gap-1.5" }, Pm = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, zm = ["aria-pressed", "onClick"], Am = ["aria-expanded", "aria-label", "title"], jm = ["aria-label"], Om = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lm = ["d"], Vm = /* @__PURE__ */ z({
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
    const l = e, a = fa(), r = G(l.defaultCollapsed), o = $(() => !!l.icon && !a.icon), i = $(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", ym, [
      s("div", km, [
        s("div", $m, [
          H(u.$slots, "icon", {}, () => [
            o.value ? (t(), n("svg", wm, [
              s("path", {
                d: x(se)(e.icon)
              }, null, 8, Cm)
            ])) : _("", !0)
          ]),
          s("div", _m, [
            s("p", Mm, p(e.label), 1),
            e.description ? (t(), n("p", Sm, p(e.description), 1)) : _("", !0),
            H(u.$slots, "trend")
          ])
        ]),
        s("div", Bm, [
          H(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Pm, [
            (t(!0), n(P, null, D(e.periods, (m) => (t(), n("button", {
              key: m.value,
              type: "button",
              class: j([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (k) => u.$emit("update:period", m.value)
            }, p(m.label), 11, zm))), 128))
          ])) : _("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: d[0] || (d[0] = (m) => r.value = !r.value)
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
              s("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, Am)) : _("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (m) => u.$emit("hide"))
          }, [
            (t(), n("svg", Om, [
              s("path", {
                d: x(se)("eye-off")
              }, null, 8, Lm)
            ]))
          ], 8, jm)) : _("", !0)
        ])
      ]),
      oe(s("div", {
        style: Q(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), F(De, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: Q({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : H(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4), [
        [Se, !r.value]
      ])
    ]));
  }
}), Dm = ["aria-pressed", "aria-label", "title"], Tm = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fm = ["d"], Em = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Im = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Nm = ["href"], Rm = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Um = ["d"], Hm = ["aria-label", "onClick"], qm = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Km = ["d"], Gm = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wm = ["d"], Zm = {
  key: 0,
  class: "flex flex-col gap-1"
}, Jm = ["onClick"], Ym = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xm = ["d"], Qm = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, ep = /* @__PURE__ */ z({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(!1), i = G(!1), u = $(
      () => a.catalog.filter((k) => !a.items.some((f) => f.id === k.id))
    );
    function d(k) {
      r(
        "update:items",
        a.items.filter((f) => f.id !== k)
      );
    }
    function m(k) {
      r("update:items", [...a.items, k]), i.value = !1;
    }
    return (k, f) => (t(), n(P, null, [
      E(Vm, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: f[3] || (f[3] = (h) => r("hide"))
      }, {
        actions: L(() => [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": o.value,
            "aria-label": o.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: o.value ? "Done" : "Edit",
            onClick: f[0] || (f[0] = (h) => o.value = !o.value)
          }, [
            (t(), n("svg", Tm, [
              s("path", {
                d: x(se)(o.value ? "check" : "pencil")
              }, null, 8, Fm)
            ]))
          ], 8, Dm)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", Em, [
            f[7] || (f[7] = s("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            E(ne, {
              size: "sm",
              variant: "outline",
              onClick: f[1] || (f[1] = (h) => i.value = !0)
            }, {
              default: L(() => [...f[6] || (f[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Im, [
            (t(!0), n(P, null, D(e.items, (h) => (t(), n("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              s("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Rm, [
                  s("path", {
                    d: x(se)(h.icon)
                  }, null, 8, Um)
                ])),
                R(" " + p(h.label), 1)
              ], 8, Nm),
              o.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (M) => d(h.id)
              }, [
                (t(), n("svg", qm, [
                  s("path", {
                    d: x(se)("x")
                  }, null, 8, Km)
                ]))
              ], 8, Hm)) : _("", !0)
            ]))), 128)),
            o.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: f[2] || (f[2] = (h) => i.value = !0)
            }, [
              (t(), n("svg", Gm, [
                s("path", {
                  d: x(se)("plus")
                }, null, 8, Wm)
              ])),
              f[8] || (f[8] = R(" Add ", -1))
            ])) : _("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      E(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: f[5] || (f[5] = (h) => i.value = !1)
      }, {
        footer: L(() => [
          E(ne, {
            variant: "outline",
            onClick: f[4] || (f[4] = (h) => i.value = !1)
          }, {
            default: L(() => [...f[9] || (f[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          u.value.length ? (t(), n("ul", Zm, [
            (t(!0), n(P, null, D(u.value, (h) => (t(), n("li", {
              key: h.id
            }, [
              s("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => m(h)
              }, [
                (t(), n("svg", Ym, [
                  s("path", {
                    d: x(se)(h.icon)
                  }, null, 8, Xm)
                ])),
                R(" " + p(h.label), 1)
              ], 8, Jm)
            ]))), 128))
          ])) : (t(), n("p", Qm, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), tp = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, ap = {
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
}, rp = ["data-slot"], ip = { class: "px-5 py-4" }, up = { class: "mb-3 text-sm font-semibold" }, dp = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, cp = {
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
}, W$ = /* @__PURE__ */ z({
  __name: "DirectoryPage",
  props: {
    title: {},
    description: { default: null },
    searchPlaceholder: { default: "Search" },
    sections: {},
    linkComponent: { default: "a" },
    embedded: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, a = G(""), r = $(() => {
      const d = l.linkComponent;
      return typeof d == "string" ? d : ma(d);
    }), o = Zt({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = $(() => {
      const d = a.value.trim().toLowerCase();
      return l.sections.map((m) => ({
        ...m,
        links: d ? m.links.filter((k) => k.label.toLowerCase().includes(d)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (d, m) => (t(), n("div", {
      class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      s("header", null, [
        s("h1", tp, p(e.title), 1),
        e.description ? (t(), n("p", ap, p(e.description), 1)) : _("", !0)
      ]),
      s("div", np, [
        (t(), n("svg", lp, [
          s("path", {
            d: x(se)("search")
          }, null, 8, sp)
        ])),
        E(fe, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (k) => a.value = k),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), n("div", op, [
        (t(!0), n(P, null, D(u.value, (k) => (t(), n("section", {
          key: k.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${k.key}`
        }, [
          s("div", ip, [
            s("h2", up, p(k.title), 1),
            s("div", dp, [
              (t(!0), n(P, null, D(k.links, (f) => (t(), F(je(i(f) ? "a" : r.value), {
                key: f.href + f.label,
                href: f.href,
                class: j(x(o)),
                target: i(f) ? "_blank" : void 0,
                rel: i(f) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", cp, [
                    s("path", {
                      d: x(se)(f.icon)
                    }, null, 8, fp)
                  ])),
                  R(" " + p(f.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, rp))), 128))
      ])) : (t(), n("p", mp, ' Nothing matches "' + p(a.value) + '". ', 1))
    ], 2));
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
}, Z$ = /* @__PURE__ */ z({
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
        s("p", gp, p(e.label), 1),
        e.loading ? (t(), F(De, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", hp, " Could not load ")) : (t(), n("span", bp, p(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), F(sa, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", xp, p(e.description), 1)) : _("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", yp, [
        E(tt, {
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
}, Xe = /* @__PURE__ */ z({
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
    return (i, u) => (t(), n("div", kp, [
      s("div", $p, [
        s("div", wp, [
          s("p", Cp, p(e.label), 1),
          H(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", _p, p(e.caption), 1)) : _("", !0),
        s("div", Mp, [
          e.loading ? (t(), F(De, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Sp, p(o.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: j(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, p(e.delta > 0 ? "+" : "") + p(e.delta) + "% ", 3)) : _("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Bp, [
        E(tt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : _("", !0)
    ]));
  }
}), Pp = { class: "relative flex flex-col gap-2" }, zp = ["aria-label"], Ap = ["onMouseenter"], jp = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Op = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Lp = { class: "truncate" }, Vp = { class: "text-sm font-semibold tabular-nums" }, J$ = /* @__PURE__ */ z({
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
    ], r = $(() => l.segments.reduce((k, f) => k + Math.max(0, f.value), 0)), o = $(() => Math.max(l.total ?? r.value, r.value, 1)), i = $(
      () => l.segments.map((k, f) => {
        const h = Math.max(0, k.value) / o.value;
        return {
          ...k,
          color: k.color ?? a[f % a.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: k.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (k) => l.format ? l.format(k) : new Intl.NumberFormat().format(k), d = G(null), m = (k) => `${(k * 100).toFixed(k > 0 && k < 0.01 ? 1 : 0)}%`;
    return (k, f) => (t(), n("div", Pp, [
      s("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: Q({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${u(h.value)}`).join(", ")
      }, [
        (t(!0), n(P, null, D(i.value, (h, M) => (t(), n("span", {
          key: M,
          class: j(["h-full transition-all", [
            M === 0 ? "rounded-l-full" : "",
            M === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: Q({
            width: h.width,
            background: h.color,
            opacity: d.value === null || d.value === M ? 1 : 0.4
          }),
          onMouseenter: (C) => d.value = M,
          onMouseleave: f[0] || (f[0] = (C) => d.value = null)
        }, null, 46, Ap))), 128))
      ], 12, zp),
      e.showLegend ? (t(), n("div", jp, [
        (t(!0), n(P, null, D(i.value, (h, M) => (t(), n("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          s("span", Op, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: h.color })
            }, null, 4),
            s("span", Lp, p(h.label), 1)
          ]),
          s("span", Vp, p(u(h.value)), 1)
        ]))), 128))
      ])) : _("", !0),
      d.value !== null ? (t(), F(Ze, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: m(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : _("", !0)
    ]));
  }
}), Dp = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Tp = ["data-heading"], Fp = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Ep = { class: "text-muted-foreground truncate" }, Ip = ["aria-label"], Y$ = /* @__PURE__ */ z({
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
        const u = i.bar.segments.reduce((m, k) => m + Math.max(0, k.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
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
    return (i, u) => (t(), n("div", Dp, [
      (t(!0), n(P, null, D(o.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: j(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, p(d.label), 3)) : (t(), n("div", Fp, [
          s("span", Ep, p(d.label), 1),
          s("span", {
            class: j(["shrink-0 font-medium tabular-nums", d.tone ? a[d.tone] : "text-foreground"])
          }, p(d.value), 3)
        ])),
        d.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), n(P, null, D(d.segments, (m, k) => (t(), n("span", {
            key: k,
            class: j(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: Q({ width: m.width })
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
function qp(e, l) {
  return Rp[Hp(e, l)];
}
const pe = /* @__PURE__ */ z({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = $(() => qp(l.status, l.tone));
    return (r, o) => (t(), F(Re, {
      variant: a.value,
      class: j(l.class)
    }, {
      default: L(() => [
        H(r.$slots, "default", {}, () => [
          R(p(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Kp = ["data-layout"], Gp = ["src", "alt"], Wp = {
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
}, iv = ["d"], uv = ["aria-label"], dv = /* @__PURE__ */ z({
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
    function u(g) {
      if (typeof g != "string")
        return null;
      const c = g.trim();
      return c === "" ? null : /^(https?:)?\/\//i.test(c) ? c : null;
    }
    const d = $(() => {
      const g = [r.item.image, ...r.item.images ?? []].map(u).filter((c) => c !== null);
      return [...new Set(g)];
    }), m = $(() => d.value[i.value] ?? d.value[0] ?? null), k = $(
      () => r.item.label.split(/\s+/).slice(0, 2).map((g) => g[0]?.toUpperCase() ?? "").join("")
    ), f = $(() => {
      const g = r.item.progress;
      if (!g)
        return null;
      const c = Math.max(g.total ?? 100, g.value, 1);
      return `${Math.min(100, Math.max(0, g.value / c * 100)).toFixed(2)}%`;
    }), h = $(() => d.value.length > 1 ? d.value[1] : null), M = $(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), C = $(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function w(g) {
      g.stopPropagation(), o("cart", r.item.key);
    }
    return (g, c) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: j(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: c[0] || (c[0] = (b) => o("select", e.item.key)),
      onKeydown: c[1] || (c[1] = pa(ce((b) => o("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: c[2] || (c[2] = (b) => i.value = 0)
    }, [
      s("div", {
        class: j([
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
        }, null, 8, Gp)) : (t(), n("span", Wp, p(k.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Zp)) : _("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", Jp, [
          (t(!0), n(P, null, D(d.value, (b, v) => (t(), n("span", {
            key: v,
            class: j(["size-1.5 rounded-full", v === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (y) => i.value = v
          }, null, 42, Yp))), 128))
        ])) : _("", !0)
      ], 2),
      s("div", {
        class: j(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        s("div", Xp, [
          s("div", Qp, [
            s("p", ev, p(e.item.label), 1),
            e.item.caption ? (t(), n("p", tv, p(e.item.caption), 1)) : _("", !0),
            e.item.facts?.length ? (t(), n("p", av, p(e.item.facts.join(" · ")), 1)) : _("", !0)
          ]),
          e.item.status ? (t(), F(pe, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : _("", !0)
        ]),
        s("div", nv, [
          s("div", lv, [
            e.item.price ? (t(), n("p", sv, p(e.item.price), 1)) : _("", !0),
            C.value ? (t(), n("p", ov, p(C.value), 1)) : _("", !0)
          ]),
          M.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: w
          }, [
            (t(), n("svg", rv, [
              s("path", {
                d: x(se)("cart")
              }, null, 8, iv)
            ]))
          ])) : _("", !0)
        ]),
        f.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          s("span", {
            class: j(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: Q({ width: f.value })
          }, null, 6)
        ], 8, uv)) : _("", !0)
      ], 2)
    ], 42, Kp));
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
}, Mv = { class: "text-muted-foreground mt-1 text-xs" }, Sv = { class: "flex flex-1 flex-col gap-2 text-sm" }, Bv = { class: "flex min-w-0 items-start gap-2" }, Pv = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, zv = ["d"], Av = {
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
}, Vv = { class: "text-foreground font-medium" }, Dv = { class: "mt-auto flex gap-2 pt-2" }, Tv = /* @__PURE__ */ z({
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
    ), u = $(() => {
      const m = a.plan.perks ?? {};
      return Object.entries(m).map(([k, f]) => ({
        key: k,
        label: k.replace(/_/g, " "),
        granted: mv(f.value),
        display: fv(f.value)
      }));
    }), d = $(() => a.plan.extraPerks ?? []);
    return (m, k) => (t(), n("article", {
      class: j(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
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
        s("h3", kv, p(e.plan.name), 1),
        s("p", $v, [
          s("span", wv, p(o.value), 1),
          s("span", Cv, p(x(cv)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", _v, p(e.plan.shortDescription), 1)) : _("", !0),
        s("p", Mv, " Active seats: " + p(e.plan.activeUsers ?? 0), 1)
      ]),
      s("ul", Sv, [
        (t(!0), n(P, null, D(u.value, (f) => (t(), n("li", {
          key: f.key,
          class: "flex items-start justify-between gap-3"
        }, [
          s("span", Bv, [
            s("span", {
              class: j(["mt-0.5 shrink-0", f.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              f.granted ? (t(), n("svg", Pv, [
                s("path", {
                  d: x(se)("check")
                }, null, 8, zv)
              ])) : (t(), n("svg", Av, [
                s("path", {
                  d: x(se)("x")
                }, null, 8, jv)
              ]))
            ], 2),
            s("span", Ov, p(f.label), 1)
          ]),
          f.display ? (t(), n("span", Lv, p(f.display), 1)) : _("", !0)
        ]))), 128)),
        (t(!0), n(P, null, D(d.value, (f, h) => (t(), n("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          s("span", null, p(f.key), 1),
          s("span", Vv, p(f.value), 1)
        ]))), 128))
      ]),
      s("footer", Dv, [
        E(ne, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: k[0] || (k[0] = (f) => r("edit", e.plan.id))
        }, {
          default: L(() => [...k[2] || (k[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        E(ne, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: k[1] || (k[1] = (f) => r("delete", e.plan.id))
        }, {
          default: L(() => [...k[3] || (k[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, pv));
  }
}), Fv = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Ev = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Iv = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Nv = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Rv = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, X$ = /* @__PURE__ */ z({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: {},
    embedded: { type: Boolean }
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: l }) {
    const a = l;
    return (r, o) => (t(), n("div", {
      class: j(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-grid"
    }, [
      s("header", Fv, [
        s("div", null, [
          e.title ? (t(), n("h1", Ev, p(e.title), 1)) : _("", !0),
          e.description ? (t(), n("p", Iv, p(e.description), 1)) : _("", !0)
        ]),
        E(ne, {
          type: "button",
          onClick: o[0] || (o[0] = (i) => a("create"))
        }, {
          default: L(() => [...o[3] || (o[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", Nv, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", Rv, [
        (t(!0), n(P, null, D(e.plans, (i) => (t(), F(Tv, {
          key: i.id,
          plan: i,
          onEdit: o[1] || (o[1] = (u) => a("edit", u)),
          onDelete: o[2] || (o[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Uv = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Hv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, qv = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Kv = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Gv = { class: "space-y-1.5" }, Wv = { class: "space-y-1.5" }, Zv = { class: "space-y-1.5" }, Jv = { class: "space-y-1.5" }, Yv = { class: "space-y-1.5" }, Xv = { class: "flex items-center gap-3 text-sm" }, Qv = { class: "flex items-center gap-3 text-sm" }, eg = { class: "flex items-center gap-3 text-sm" }, tg = {
  key: 0,
  class: "space-y-1.5"
}, ag = { class: "flex items-center gap-3 text-sm" }, ng = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, lg = { class: "space-y-1.5" }, sg = ["value"], og = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, rg = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, ig = ["id", "value", "onInput"], ug = { class: "space-y-2" }, dg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, cg = ["d"], fg = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ot = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Q$ = /* @__PURE__ */ z({
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
    function u(g, c) {
      const b = i.perks?.[g]?.value;
      return b ?? c;
    }
    function d(g, c, b) {
      const v = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: c,
          overview: b ?? v?.overview ?? ""
        }
      };
    }
    function m(g, c) {
      const b = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: b?.value ?? (g === "modules" ? [] : 0),
          overview: c
        }
      };
    }
    function k(g) {
      const c = g ? { ...a(), ...g } : a();
      i.id = c.id, i.name = c.name, i.shortDescription = c.shortDescription ?? "", i.description = c.description ?? "", i.days = c.days, i.price = c.price, i.featured = c.featured ?? !1, i.recommended = c.recommended ?? !1, i.trial = c.trial ?? !1, i.trialDays = c.trialDays ?? 0, i.active = c.active ?? !0, i.perks = { ...c.perks ?? {} }, i.extraPerks = [...c.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    k(r.plan), re(
      () => r.plan,
      (g) => k(g),
      { deep: !0 }
    );
    const f = $({
      get: () => {
        const g = u("modules", []);
        return Array.isArray(g) ? g.map(String) : [];
      },
      set: (g) => {
        d("modules", g.map(String), i.perks?.modules?.overview ?? "");
      }
    }), h = $(
      () => r.modules.map((g) => ({ value: g.key, label: g.label }))
    );
    function M() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((c, b) => b !== g);
    }
    function w() {
      o("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, c) => (t(), n("form", {
      class: "mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6",
      "data-slot": "plan-editor",
      onSubmit: ce(w, ["prevent"])
    }, [
      s("header", Uv, [
        s("div", null, [
          s("h1", Hv, p(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          c[13] || (c[13] = s("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(ne, {
          type: "button",
          variant: "outline",
          onClick: c[0] || (c[0] = (b) => o("cancel"))
        }, {
          default: L(() => [...c[14] || (c[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      s("div", qv, [
        s("section", Kv, [
          c[26] || (c[26] = s("h2", { class: "font-semibold" }, "Plan details", -1)),
          s("div", Gv, [
            E(he, { for: "plan-name" }, {
              default: L(() => [...c[15] || (c[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": c[1] || (c[1] = (b) => i.name = b),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          s("div", Wv, [
            E(he, { for: "plan-short" }, {
              default: L(() => [...c[16] || (c[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": c[2] || (c[2] = (b) => i.shortDescription = b),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          s("div", Zv, [
            E(he, { for: "plan-description" }, {
              default: L(() => [...c[17] || (c[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            oe(s("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": c[3] || (c[3] = (b) => i.description = b),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: j(ot)
            }, null, 512), [
              [Me, i.description]
            ])
          ]),
          s("div", Jv, [
            E(he, { for: "plan-days" }, {
              default: L(() => [...c[18] || (c[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            oe(s("select", {
              id: "plan-days",
              "onUpdate:modelValue": c[4] || (c[4] = (b) => i.days = b),
              class: j(fg)
            }, [...c[19] || (c[19] = [
              s("option", { value: 30 }, "Monthly", -1),
              s("option", { value: 365 }, "Yearly", -1),
              s("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Le,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          s("div", Yv, [
            E(he, { for: "plan-price" }, {
              default: L(() => [...c[20] || (c[20] = [
                R("Price", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": c[5] || (c[5] = (b) => i.price = Number(b))
            }, null, 8, ["model-value"])
          ]),
          s("label", Xv, [
            E(x(Ve), {
              checked: !!i.featured,
              "onUpdate:checked": c[6] || (c[6] = (b) => i.featured = b)
            }, null, 8, ["checked"]),
            c[21] || (c[21] = R(" Featured ", -1))
          ]),
          s("label", Qv, [
            E(x(Ve), {
              checked: !!i.recommended,
              "onUpdate:checked": c[7] || (c[7] = (b) => i.recommended = b)
            }, null, 8, ["checked"]),
            c[22] || (c[22] = R(" Recommended ", -1))
          ]),
          s("label", eg, [
            E(x(Ve), {
              checked: !!i.trial,
              "onUpdate:checked": c[8] || (c[8] = (b) => i.trial = b)
            }, null, 8, ["checked"]),
            c[23] || (c[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", tg, [
            E(he, { for: "plan-trial-days" }, {
              default: L(() => [...c[24] || (c[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": c[9] || (c[9] = (b) => i.trialDays = Number(b))
            }, null, 8, ["model-value"])
          ])) : _("", !0),
          s("label", ag, [
            E(x(Ve), {
              checked: i.active !== !1,
              "onUpdate:checked": c[10] || (c[10] = (b) => i.active = b)
            }, null, 8, ["checked"]),
            c[25] || (c[25] = R(" Active ", -1))
          ]),
          E(ne, {
            type: "submit",
            disabled: e.processing
          }, {
            default: L(() => [
              R(p(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        s("section", ng, [
          c[33] || (c[33] = s("h2", { class: "font-semibold" }, "Plan perks", -1)),
          s("div", lg, [
            E(he, null, {
              default: L(() => [...c[27] || (c[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            E(_t, {
              modelValue: f.value,
              "onUpdate:modelValue": c[11] || (c[11] = (b) => f.value = b),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(he, { for: "plan-modules-overview" }, {
              default: L(() => [...c[28] || (c[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            s("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: j(ot),
              onInput: c[12] || (c[12] = (b) => m(
                "modules",
                b.target.value
              ))
            }, null, 40, sg)
          ]),
          (t(!0), n(P, null, D(e.limits, (b) => (t(), n("div", {
            key: b.key,
            class: "space-y-1.5"
          }, [
            b.kind === "toggle" ? (t(), n("label", og, [
              E(x(Ve), {
                checked: !!u(b.key, !1),
                "onUpdate:checked": (v) => d(
                  b.key,
                  v,
                  i.perks?.[b.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + p(b.label), 1)
            ])) : (t(), n(P, { key: 1 }, [
              E(he, {
                for: `plan-limit-${b.key}`
              }, {
                default: L(() => [
                  R(p(b.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              b.hint ? (t(), n("p", rg, p(b.hint), 1)) : _("", !0),
              E(fe, {
                id: `plan-limit-${b.key}`,
                "model-value": Number(u(b.key, 0)),
                type: "number",
                step: b.step ?? 1,
                required: "",
                "onUpdate:modelValue": (v) => d(
                  b.key,
                  Number(v),
                  i.perks?.[b.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              c[29] || (c[29] = s("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            E(he, {
              for: `plan-overview-${b.key}`
            }, {
              default: L(() => [...c[30] || (c[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            s("textarea", {
              id: `plan-overview-${b.key}`,
              value: i.perks?.[b.key]?.overview ?? "",
              class: j(ot),
              onInput: (v) => m(
                b.key,
                v.target.value
              )
            }, null, 40, ig)
          ]))), 128)),
          s("div", ug, [
            c[32] || (c[32] = s("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(P, null, D(i.extraPerks ?? [], (b, v) => (t(), n("div", {
              key: v,
              class: "flex items-center gap-2"
            }, [
              E(fe, {
                modelValue: b.key,
                "onUpdate:modelValue": (y) => b.key = y,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(fe, {
                modelValue: b.value,
                "onUpdate:modelValue": (y) => b.value = y,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(ne, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (y) => C(v)
              }, {
                default: L(() => [
                  (t(), n("svg", dg, [
                    s("path", {
                      d: x(se)("x")
                    }, null, 8, cg)
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
              default: L(() => [...c[31] || (c[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 32));
  }
}), mg = { class: "flex flex-col gap-4" }, pg = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, vg = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, gg = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, hg = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, bg = ["d"], xg = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, yg = ["aria-pressed"], kg = ["aria-pressed"], $g = {
  key: 0,
  class: "flex flex-col gap-2"
}, wg = ["aria-label"], Cg = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, _g = ["aria-pressed", "onClick"], Mg = ["aria-label"], Sg = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Bg = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Pg = ["data-slot"], zg = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Ag = { class: "text-muted-foreground text-xs tabular-nums" }, jg = { class: "flex items-center gap-2" }, Og = ["disabled"], Lg = ["disabled"], Mt = /* @__PURE__ */ z({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Be({
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
  emits: /* @__PURE__ */ Be(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(""), i = Ke(e, "modelValue"), u = Ue({}), d = Ue({});
    re(o, () => h());
    function m(N) {
      const Y = N.trim();
      if (Y === "")
        return null;
      const T = Number(Y);
      return Number.isFinite(T) ? T : null;
    }
    function k() {
      const N = {};
      for (const [Y, T] of Object.entries(d))
        N[Y] = { min: m(T.min), max: m(T.max) };
      return N;
    }
    function f() {
      return { query: o.value, selected: { ...u }, ranges: k() };
    }
    function h() {
      r("filter", f());
    }
    function M(N, Y) {
      u[N] = u[N] === Y ? null : Y, h();
    }
    function C(N) {
      return d[N] ?? { min: "", max: "" };
    }
    function w(N, Y, T) {
      const O = d[N] ?? { min: "", max: "" };
      d[N] = { ...O, [Y]: T }, h();
    }
    function g(N) {
      N.key === "Enter" && (N.preventDefault(), r("scan", o.value.trim()));
    }
    const c = $(() => a.facets.filter((N) => (N.kind ?? "chips") === "chips")), b = $(() => a.facets.filter((N) => N.kind === "range")), v = $(
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
    function K(N) {
      y.value = Math.min(S.value, Math.max(1, N));
    }
    return (N, Y) => (t(), n("div", mg, [
      v.value ? (t(), n("div", pg, [
        s("div", vg, [
          e.searchable ? (t(), n("div", gg, [
            (t(), n("svg", hg, [
              s("path", {
                d: x(se)("search")
              }, null, 8, bg)
            ])),
            E(fe, {
              modelValue: o.value,
              "onUpdate:modelValue": Y[0] || (Y[0] = (T) => o.value = T),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: g
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : _("", !0),
          H(N.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", xg, [
            s("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: Y[1] || (Y[1] = (T) => i.value = "grid")
            }, " Tiles ", 10, yg),
            s("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: Y[2] || (Y[2] = (T) => i.value = "list")
            }, " List ", 10, kg)
          ])) : _("", !0)
        ]),
        c.value.length || b.value.length ? (t(), n("div", $g, [
          (t(!0), n(P, null, D(c.value, (T) => (t(), n("div", {
            key: T.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": T.label ?? T.key
          }, [
            T.label ? (t(), n("span", Cg, p(T.label), 1)) : _("", !0),
            (t(!0), n(P, null, D(T.options ?? [], (O) => (t(), n("button", {
              key: O.value,
              type: "button",
              class: j([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[T.key] === O.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[T.key] === O.value ? "true" : "false",
              onClick: (A) => M(T.key, O.value)
            }, p(O.label), 11, _g))), 128))
          ], 8, wg))), 128)),
          (t(!0), n(P, null, D(b.value, (T) => (t(), n("div", {
            key: T.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": T.label ?? T.key,
            "data-slot": "catalog-range"
          }, [
            s("span", Sg, p(T.label ?? T.key), 1),
            E(fe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${T.label ?? T.key} from`,
              "model-value": C(T.key).min,
              "onUpdate:modelValue": (O) => w(T.key, "min", String(O))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            Y[7] || (Y[7] = s("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            E(fe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${T.label ?? T.key} to`,
              "model-value": C(T.key).max,
              "onUpdate:modelValue": (O) => w(T.key, "max", String(O))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Mg))), 128))
        ])) : _("", !0)
      ])) : _("", !0),
      e.items.length === 0 ? (t(), n("p", Bg, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: j(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(P, null, D(B.value, (T) => (t(), F(dv, {
          key: T.key,
          item: T,
          layout: i.value,
          onSelect: Y[3] || (Y[3] = (O) => r("select", O)),
          onCart: Y[4] || (Y[4] = (O) => r("cart", O))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Pg)),
      e.pageSize && S.value > 1 ? (t(), n("div", zg, [
        s("p", Ag, " Page " + p(y.value) + " of " + p(S.value), 1),
        s("div", jg, [
          s("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: y.value <= 1,
            onClick: Y[5] || (Y[5] = (T) => K(y.value - 1))
          }, " Previous ", 8, Og),
          s("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: y.value >= S.value,
            onClick: Y[6] || (Y[6] = (T) => K(y.value + 1))
          }, " Next ", 8, Lg)
        ])
      ])) : _("", !0)
    ]));
  }
}), Vg = ["aria-label"], Dg = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Tg = { class: "min-w-0" }, Fg = { class: "text-base font-semibold" }, Eg = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ig = { class: "flex shrink-0 items-center gap-2" }, Ng = { class: "min-h-0 flex-1 overflow-y-auto" }, Rg = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, St = /* @__PURE__ */ z({
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
    let i = null, u = "";
    function d(m) {
      if (!a.open)
        return;
      if (m.key === "Escape") {
        m.stopPropagation(), r("close");
        return;
      }
      if (m.key !== "Tab" || !o.value)
        return;
      const k = o.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (k.length === 0)
        return;
      const f = k[0], h = k[k.length - 1];
      m.shiftKey && document.activeElement === f ? (m.preventDefault(), h.focus()) : !m.shiftKey && document.activeElement === h && (m.preventDefault(), f.focus());
    }
    return re(
      () => a.open,
      async (m) => {
        if (m) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await we(), o.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), me(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (m, k) => (t(), F(Te, { to: "body" }, [
      E(Ae, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: k[0] || (k[0] = (f) => r("close"))
          })) : _("", !0)
        ]),
        _: 1
      }),
      E(Ae, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: L(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: o,
            class: j(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            s("header", Dg, [
              s("div", Tg, [
                s("h2", Fg, p(e.title), 1),
                e.description ? (t(), n("p", Eg, p(e.description), 1)) : _("", !0)
              ]),
              s("div", Ig, [
                H(m.$slots, "header-actions"),
                s("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: k[1] || (k[1] = (f) => r("close"))
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
            s("div", Ng, [
              H(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), n("footer", Rg, [
              H(m.$slots, "footer")
            ])) : _("", !0)
          ], 10, Vg)) : _("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function _e() {
  return { query: "", selected: {}, ranges: {} };
}
function Ug(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const o = Number(r);
  return Number.isFinite(o) ? o : null;
}
function Hg(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function Bt(e, l) {
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
    if (!Hg(Ug(e, r), o))
      return !1;
  return !0;
}
function qg(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const o = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return o === a || i === a;
  }) ?? null;
}
function Qe(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Kg = { class: "flex flex-col gap-6 p-4" }, Gg = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Wg = { class: "text-sm font-semibold" }, Zg = { class: "flex flex-wrap items-center gap-1.5" }, Jg = ["aria-pressed", "onClick"], Yg = { class: "text-sm font-semibold" }, Xg = { class: "flex flex-wrap items-center gap-1.5" }, Qg = { key: 0 }, oa = /* @__PURE__ */ z({
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
    const a = e, r = l, o = G(""), i = Ue({}), u = Ue({}), d = $(
      () => a.facets.filter((S) => (S.kind ?? "chips") === "chips")
    ), m = $(() => a.facets.filter((S) => S.kind === "range"));
    function k(S) {
      return S == null ? "" : String(S);
    }
    function f() {
      o.value = a.applied.query ?? "";
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
        S && f();
      }
    );
    function h(S) {
      const B = S.trim();
      if (B === "")
        return null;
      const K = Number(B);
      return Number.isFinite(K) ? K : null;
    }
    function M() {
      const S = {};
      for (const [B, K] of Object.entries(u))
        S[B] = { min: h(K.min), max: h(K.max) };
      return S;
    }
    function C() {
      return {
        query: a.hideSearch ? a.applied.query : o.value,
        selected: { ...i },
        ranges: M()
      };
    }
    const w = $(() => {
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
      return u[S] ?? { min: "", max: "" };
    }
    function b(S, B, K) {
      const N = u[S] ?? { min: "", max: "" };
      u[S] = { ...N, [B]: K };
    }
    function v() {
      r("apply", C());
    }
    function y() {
      o.value = "";
      for (const S of Object.keys(i))
        i[S] = null;
      for (const S of Object.keys(u))
        u[S] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ..._e(), query: a.applied.query } : _e()
      );
    }
    return (S, B) => (t(), F(St, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: B[2] || (B[2] = (K) => r("close"))
    }, {
      footer: L(() => [
        s("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: y
        }, " Reset all "),
        E(ne, {
          variant: "outline",
          size: "sm",
          onClick: B[1] || (B[1] = (K) => r("close"))
        }, {
          default: L(() => [...B[5] || (B[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        E(ne, {
          size: "sm",
          onClick: v
        }, {
          default: L(() => [
            B[6] || (B[6] = R(" Apply", -1)),
            w.value ? (t(), n("span", Qg, " (" + p(w.value) + ")", 1)) : _("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        s("div", Kg, [
          e.hideSearch ? _("", !0) : (t(), n("label", Gg, [
            B[3] || (B[3] = s("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E(fe, {
              modelValue: o.value,
              "onUpdate:modelValue": B[0] || (B[0] = (K) => o.value = K),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(P, null, D(d.value, (K) => (t(), n("section", {
            key: K.key,
            class: "flex flex-col gap-2"
          }, [
            s("h3", Wg, p(K.label ?? K.key), 1),
            s("div", Zg, [
              (t(!0), n(P, null, D(K.options ?? [], (N) => (t(), n("button", {
                key: N.value,
                type: "button",
                class: j([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[K.key] === N.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[K.key] === N.value ? "true" : "false",
                onClick: (Y) => g(K.key, N.value)
              }, p(N.label), 11, Jg))), 128))
            ])
          ]))), 128)),
          (t(!0), n(P, null, D(m.value, (K) => (t(), n("section", {
            key: K.key,
            class: "flex flex-col gap-2"
          }, [
            s("h3", Yg, p(K.label ?? K.key), 1),
            s("div", Xg, [
              E(fe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${K.label ?? K.key} from`,
                "model-value": c(K.key).min,
                "onUpdate:modelValue": (N) => b(K.key, "min", String(N))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              B[4] || (B[4] = s("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              E(fe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${K.label ?? K.key} to`,
                "model-value": c(K.key).max,
                "onUpdate:modelValue": (N) => b(K.key, "max", String(N))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), eh = ["aria-disabled"], th = ["disabled"], ah = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, nh = ["d"], lh = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, sh = ["disabled"], oh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, rh = ["d"], ih = /* @__PURE__ */ z({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Be({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Be(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = Ke(e, "modelValue"), r = l, o = $(() => a.value <= e.min), i = $(() => e.max !== null && a.value >= e.max);
    function u(d) {
      if (e.disabled)
        return;
      const m = a.value + d;
      m < e.min || e.max !== null && m > e.max || (a.value = m, d < 0 ? r("decrease", m) : r("increase", m));
    }
    return (d, m) => (t(), n("div", {
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
        onClick: m[0] || (m[0] = (k) => u(-1))
      }, [
        (t(), n("svg", ah, [
          s("path", {
            d: x(se)("minus")
          }, null, 8, nh)
        ]))
      ], 8, th),
      s("span", lh, p(a.value), 1),
      s("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (k) => u(1))
      }, [
        (t(), n("svg", oh, [
          s("path", {
            d: x(se)("plus")
          }, null, 8, rh)
        ]))
      ], 8, sh)
    ], 8, eh));
  }
}), uh = { class: "divide-border flex flex-col divide-y" }, dh = { class: "min-w-0" }, ch = { class: "truncate text-sm font-medium" }, fh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, mh = { class: "flex shrink-0 items-center gap-2 text-sm" }, ph = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, vh = {
  key: 2,
  class: "font-medium tabular-nums"
}, gh = ["aria-label", "onClick"], hh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, bh = ["d"], xh = /* @__PURE__ */ z({
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
      const u = Number(i);
      return Number.isFinite(u) && u > 0 ? u : 1;
    }
    return (o, i) => (t(), n("div", uh, [
      (t(!0), n(P, null, D(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        s("div", dh, [
          s("p", ch, p(u.label), 1),
          u.detail ? (t(), n("p", fh, p(u.detail), 1)) : _("", !0)
        ]),
        s("div", mh, [
          e.editable ? (t(), F(ih, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", ph, " ×" + p(u.qty), 1)) : _("", !0),
          u.amount ? (t(), n("span", vh, p(u.amount), 1)) : _("", !0),
          u.status ? (t(), F(pe, {
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
            (t(), n("svg", hh, [
              s("path", {
                d: x(se)("trash")
              }, null, 8, bh)
            ]))
          ], 8, gh)) : _("", !0)
        ])
      ]))), 128))
    ]));
  }
}), yh = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, kh = { class: "border-b px-4 py-3" }, $h = { class: "text-sm font-medium" }, wh = { class: "flex-1 px-4 py-3" }, Ch = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, _h = { class: "text-foreground block font-medium" }, Mh = { class: "mt-1 block" }, Sh = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Bh = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Ph = { class: "tabular-nums" }, zh = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Ah = { class: "text-muted-foreground" }, jh = {
  key: 0,
  class: "tabular-nums"
}, Oh = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Lh = { class: "text-muted-foreground" }, Vh = { class: "tabular-nums" }, Dh = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Th = { class: "tabular-nums" }, Fh = {
  key: 4,
  class: "pt-1"
}, Eh = /* @__PURE__ */ z({
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
    return (r, o) => (t(), n("aside", yh, [
      s("header", kh, [
        s("h2", $h, p(e.title), 1)
      ]),
      s("div", wh, [
        e.items.length === 0 ? (t(), n("p", Ch, [
          s("span", _h, p(e.emptyTitle), 1),
          s("span", Mh, p(e.emptyDescription), 1)
        ])) : (t(), F(xh, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: o[0] || (o[0] = (i, u) => a("qty", i, u)),
          onRemove: o[1] || (o[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Sh, [
        e.subtotal ? (t(), n("div", Bh, [
          o[2] || (o[2] = s("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          s("span", Ph, p(e.subtotal), 1)
        ])) : _("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", zh, [
          s("span", Ah, p(e.discountLabel), 1),
          e.discount ? (t(), n("span", jh, p(e.discount), 1)) : _("", !0),
          H(r.$slots, "discount")
        ])) : _("", !0),
        e.tax ? (t(), n("div", Oh, [
          s("span", Lh, p(e.taxLabel), 1),
          s("span", Vh, p(e.tax), 1)
        ])) : _("", !0),
        e.total ? (t(), n("div", Dh, [
          o[3] || (o[3] = s("span", null, "Total", -1)),
          s("span", Th, p(e.total), 1)
        ])) : _("", !0),
        r.$slots.pay ? (t(), n("div", Fh, [
          H(r.$slots, "pay")
        ])) : _("", !0)
      ])) : _("", !0)
    ]));
  }
}), Ih = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Nh = { class: "flex flex-col gap-4" }, Rh = { class: "flex flex-wrap items-start justify-between gap-3" }, Uh = { class: "flex items-center gap-2" }, Hh = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, ew = /* @__PURE__ */ z({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Be({
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
  emits: /* @__PURE__ */ Be(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(_e()), i = G(!1), u = Ke(e, "cart"), d = G(!1), m = $(
      () => a.items.filter((T) => Bt(T, o.value))
    );
    function k(T) {
      o.value = { ...o.value, query: T.query };
    }
    function f(T) {
      o.value = {
        ...o.value,
        selected: T.selected,
        ranges: T.ranges,
        query: o.value.query
      }, i.value = !1;
    }
    function h(T) {
      return T ? a.parsePrice(T) : 0;
    }
    function M(T, O, A) {
      return {
        ...T,
        qty: O,
        amount: a.formatMoney(A * O)
      };
    }
    function C(T) {
      const O = qg(a.items, T);
      O && w(O.key);
    }
    function w(T) {
      const O = a.items.find((I) => I.key === T);
      if (!O || O.status === "out-of-stock")
        return;
      d.value = !1;
      const A = h(O);
      if (u.value.find((I) => I.key === T)) {
        u.value = u.value.map(
          (I) => I.key === T ? M(I, Number(I.qty ?? 1) + 1, A) : I
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: O.key,
          label: O.label,
          detail: O.caption ?? null,
          qty: 1,
          amount: a.formatMoney(A)
        }
      ];
    }
    function g(T, O) {
      const A = a.items.find((I) => I.key === T), W = h(A);
      u.value = u.value.map(
        (I) => I.key === T ? M(I, O, W) : I
      );
    }
    function c(T) {
      u.value = u.value.filter((O) => O.key !== T);
    }
    const b = $(
      () => u.value.reduce((T, O) => {
        const A = a.items.find((W) => W.key === O.key);
        return T + h(A) * Number(O.qty ?? 1);
      }, 0)
    ), v = $(
      () => a.discountRate > 0 ? Math.round(b.value * a.discountRate) : 0
    ), y = $(
      () => Math.round((b.value - v.value) * a.taxRate)
    ), S = $(
      () => u.value.length ? a.formatMoney(b.value) : null
    ), B = $(
      () => u.value.length && v.value > 0 ? `−${a.formatMoney(v.value)}` : null
    ), K = $(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(y.value) : null
    ), N = $(
      () => u.value.length ? a.formatMoney(
        b.value - v.value + y.value
      ) : null
    );
    function Y() {
      d.value = !0, r("pay", u.value);
    }
    return (T, O) => (t(), n(P, null, [
      s("div", Ih, [
        s("section", Nh, [
          s("div", Rh, [
            E(Ce, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            s("div", Uh, [
              x(Qe)(o.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: O[0] || (O[0] = (A) => o.value = {
                  ...x(_e)(),
                  query: o.value.query
                })
              }, " Clear ")) : _("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: O[1] || (O[1] = (A) => i.value = !0)
              }, [
                O[5] || (O[5] = s("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  s("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                O[6] || (O[6] = R(" Filters ", -1)),
                x(Qe)(o.value) ? (t(), n("span", Hh, " on ")) : _("", !0)
              ])) : _("", !0)
            ])
          ]),
          E(Mt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: k,
            onSelect: O[2] || (O[2] = (A) => r("select", A)),
            onCart: w,
            onScan: C
          }, null, 8, ["search-placeholder", "items"])
        ]),
        E(Eh, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: S.value,
          "discount-label": e.discountLabel,
          discount: B.value,
          "tax-label": e.taxLabel,
          tax: K.value,
          total: N.value,
          onQty: g,
          onRemove: c
        }, {
          pay: L(() => [
            H(T.$slots, "pay", {
              cart: u.value,
              paid: d.value,
              pay: Y
            }, () => [
              E(ne, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: Y
              }, {
                default: L(() => [
                  R(p(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      E(oa, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: o.value,
        onClose: O[3] || (O[3] = (A) => i.value = !1),
        onApply: f,
        onReset: O[4] || (O[4] = (A) => o.value = { ...x(_e)(), query: o.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), qh = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Kh = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Gh = ["src", "alt"], Wh = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Zh = ["src"], Jh = { class: "flex items-start justify-between gap-3" }, Yh = { class: "text-lg font-semibold tabular-nums" }, Xh = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Qh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, e1 = { class: "grid grid-cols-2 gap-3" }, t1 = { class: "flex flex-col gap-2" }, a1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, tw = /* @__PURE__ */ z({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function o(f) {
      let h = 0;
      for (const M of f)
        h = h * 31 + M.charCodeAt(0) >>> 0;
      return h;
    }
    function i(f, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((C, w) => ({
        label: C,
        value: Math.max(0, Math.round(f + Math.sin(w + h) * f * 0.18))
      }));
    }
    const u = $(() => a.item?.kind === "unit"), d = $(() => {
      const f = a.item;
      if (!f)
        return [];
      const h = f.stock ?? f.progress?.value ?? f.metrics?.price ?? f.metrics?.rent ?? 12;
      return i(Number(h) || 12, o(f.key) % 7);
    }), m = $(() => {
      const f = a.item;
      if (!f)
        return [];
      const h = f.progress?.value ?? (f.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, o(f.key) % 5 + 1);
    }), k = $(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (f, h) => (t(), F(St, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: h[1] || (h[1] = (M) => r("close"))
    }, va({
      default: L(() => [
        e.item ? (t(), n("div", qh, [
          s("div", Kh, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Gh)) : _("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Wh, [
            (t(!0), n(P, null, D(e.item.images, (M, C) => (t(), n("img", {
              key: C,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Zh))), 128))
          ])) : _("", !0),
          s("div", Jh, [
            s("div", null, [
              s("p", Yh, p(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", Xh, p(e.item.stock) + " in stock ", 1)) : _("", !0)
            ]),
            e.item.status ? (t(), F(pe, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : _("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", Qh, p(e.item.facts.join(" · ")), 1)) : _("", !0),
          s("div", e1, [
            E(Xe, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? m.value : d.value
            }, null, 8, ["label", "value", "series"]),
            E(Xe, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          s("div", t1, [
            s("p", a1, p(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(tt, {
              data: u.value ? m.value : d.value,
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
        fn: L(() => [
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
}), n1 = { class: "flex flex-col gap-10" }, l1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, s1 = { class: "flex flex-col gap-3" }, o1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, r1 = ["src", "alt"], i1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, u1 = ["aria-label", "aria-pressed", "onClick"], d1 = ["src"], c1 = { class: "flex flex-col gap-5" }, f1 = { class: "flex flex-wrap items-start justify-between gap-3" }, m1 = { class: "min-w-0" }, p1 = { class: "text-2xl font-semibold tracking-tight" }, v1 = { class: "text-muted-foreground mt-1 text-sm" }, g1 = { class: "text-2xl font-semibold tabular-nums" }, h1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, b1 = { class: "grid grid-cols-2 gap-3 text-sm" }, x1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, y1 = { class: "mt-1 font-medium" }, k1 = { class: "rounded-lg border p-3" }, $1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, w1 = { class: "mt-1 font-medium" }, C1 = { class: "flex flex-col gap-4" }, _1 = { class: "grid gap-4 sm:grid-cols-2" }, M1 = { class: "bg-card rounded-lg border p-4" }, S1 = { class: "mb-3 text-sm font-medium" }, B1 = /* @__PURE__ */ z({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function o(C) {
      let w = 0;
      for (const g of C)
        w = w * 31 + g.charCodeAt(0) >>> 0;
      return w;
    }
    function i(C, w) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((c, b) => ({
        label: c,
        value: Math.max(0, Math.round(C + Math.sin(b + w) * C * 0.18))
      }));
    }
    const u = $(() => a.item.kind === "unit"), d = $(() => {
      const C = [a.item.image, ...a.item.images ?? []].filter(
        (w) => typeof w == "string" && w !== ""
      );
      return [...new Set(C)];
    }), m = G(0), k = $(() => {
      const C = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(C) || 12, o(a.item.key) % 7);
    }), f = $(() => {
      const C = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(C) || 20, o(a.item.key) % 5 + 1);
    }), h = $(() => u.value ? f.value : k.value), M = $(() => !u.value && a.item.status !== "out-of-stock");
    return (C, w) => (t(), n("div", n1, [
      s("div", l1, [
        s("div", s1, [
          s("div", o1, [
            d.value[m.value] ? (t(), n("img", {
              key: 0,
              src: d.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, r1)) : _("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", i1, [
            (t(!0), n(P, null, D(d.value, (g, c) => (t(), n("button", {
              key: g,
              type: "button",
              class: j(["size-16 shrink-0 overflow-hidden rounded-md border", c === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${c + 1}`,
              "aria-pressed": c === m.value ? "true" : "false",
              onClick: (b) => m.value = c
            }, [
              s("img", {
                src: g,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, d1)
            ], 10, u1))), 128))
          ])) : _("", !0)
        ]),
        s("div", c1, [
          s("div", f1, [
            s("div", m1, [
              s("h1", p1, p(e.item.label), 1),
              s("p", v1, p(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), F(pe, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : _("", !0)
          ]),
          s("p", g1, p(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", h1, p(e.item.facts.join(" · ")), 1)) : _("", !0),
          s("dl", b1, [
            e.item.sku ? (t(), n("div", x1, [
              w[1] || (w[1] = s("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              s("dd", y1, p(e.item.sku), 1)
            ])) : _("", !0),
            s("div", k1, [
              s("dt", $1, p(u.value ? "Occupancy" : "Stock"), 1),
              s("dd", w1, p(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: w[0] || (w[0] = (g) => r("cart", e.item.key))
          }, " Add to cart ")) : _("", !0)
        ])
      ]),
      s("section", C1, [
        w[2] || (w[2] = s("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        s("div", _1, [
          E(Xe, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          E(Xe, {
            label: "Price",
            value: e.item.price ?? "-",
            series: k.value
          }, null, 8, ["value", "series"])
        ]),
        s("div", M1, [
          s("p", S1, p(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(Jc, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), P1 = { class: "mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6" }, z1 = ["href"], aw = /* @__PURE__ */ z({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" }
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = l;
    return (r, o) => (t(), n("div", P1, [
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
        R(" " + p(e.backLabel), 1)
      ], 8, z1),
      E(B1, {
        item: e.item,
        onCart: o[0] || (o[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ]));
  }
}), A1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, j1 = ["aria-selected", "onClick"], O1 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, L1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, V1 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, D1 = ["aria-pressed"], T1 = ["aria-pressed"], nw = /* @__PURE__ */ z({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Be({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !1 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Be(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(a.tabs[0]?.key ?? ""), i = Ke(e, "layout"), u = G({}), d = G(!1);
    re(
      () => a.tabs.map((g) => g.key).join(","),
      (g) => {
        g.split(",").includes(o.value) || (o.value = a.tabs[0]?.key ?? "");
      }
    );
    function m(g) {
      return u.value[g] ?? _e();
    }
    const k = $(
      () => a.tabs.find((g) => g.key === o.value) ?? a.tabs[0] ?? null
    ), f = $(
      () => k.value ? m(k.value.key) : _e()
    ), h = $(() => {
      const g = k.value;
      return g ? g.items.filter((c) => Bt(c, m(g.key))) : [];
    });
    function M(g) {
      const c = k.value?.key;
      c && (u.value = {
        ...u.value,
        [c]: { ...m(c), query: g }
      });
    }
    function C() {
      const g = k.value?.key;
      g && (u.value = { ...u.value, [g]: _e() });
    }
    function w(g) {
      const c = k.value?.key;
      c && (u.value = { ...u.value, [c]: g }, d.value = !1);
    }
    return (g, c) => (t(), n(P, null, [
      s("div", {
        class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        E(Ce, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", A1, [
          (t(!0), n(P, null, D(e.tabs, (b) => (t(), n("button", {
            key: b.key,
            type: "button",
            class: j([
              "px-3 py-1.5 text-sm transition-colors",
              o.value === b.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": o.value === b.key ? "true" : "false",
            onClick: (v) => o.value = b.key
          }, p(b.label), 11, j1))), 128))
        ])) : _("", !0),
        s("div", O1, [
          E(fe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": f.value.query,
            type: "search",
            placeholder: k.value?.searchPlaceholder ?? "Search…",
            "aria-label": k.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": c[0] || (c[0] = (b) => M(String(b)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(Qe)(f.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: C
          }, " Clear ")) : _("", !0),
          (k.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: c[1] || (c[1] = (b) => d.value = !0)
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
            c[9] || (c[9] = R(" Filters ", -1)),
            x(Qe)(f.value) ? (t(), n("span", L1, " on ")) : _("", !0)
          ])) : _("", !0),
          s("div", V1, [
            s("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: c[2] || (c[2] = (b) => i.value = "grid")
            }, " Tiles ", 10, D1),
            s("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: c[3] || (c[3] = (b) => i.value = "list")
            }, " List ", 10, T1)
          ])
        ]),
        E(Mt, {
          layout: i.value,
          "onUpdate:layout": c[4] || (c[4] = (b) => i.value = b),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: c[5] || (c[5] = (b) => r("select", b)),
          onCart: c[6] || (c[6] = (b) => r("cart", b))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      E(oa, {
        open: d.value,
        title: k.value?.filterTitle ?? "Filters",
        "search-placeholder": k.value?.searchPlaceholder ?? "Search…",
        facets: k.value?.facets ?? [],
        applied: f.value,
        onClose: c[7] || (c[7] = (b) => d.value = !1),
        onApply: w,
        onReset: C
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), F1 = { class: "flex flex-col gap-4" }, E1 = { class: "flex flex-col gap-4" }, lw = /* @__PURE__ */ z({
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
    embedded: { type: Boolean, default: !1 }
  },
  emits: ["select", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(_e()), i = $(
      () => a.cards.filter((u) => Bt(u, o.value))
    );
    return (u, d) => (t(), n("div", {
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      E(Ce, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      s("section", F1, [
        E(Ce, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(Mt, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: d[0] || (d[0] = (m) => o.value = m),
          onSelect: d[1] || (d[1] = (m) => r("select", m)),
          onCart: d[2] || (d[2] = (m) => r("cart", m))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      s("section", E1, [
        E(Ce, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(Jn, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": L(({ value: m }) => [
            E(pe, {
              status: String(m)
            }, {
              default: L(() => [
                R(p(m), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), I1 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, N1 = { class: "text-sm font-medium" }, R1 = ["width", "height", "aria-label"], U1 = { class: "flex items-center gap-2" }, H1 = /* @__PURE__ */ z({
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
    let u = null;
    function d() {
      return o.value?.getContext("2d") ?? null;
    }
    function m(g) {
      const c = o.value;
      if (!c)
        return null;
      const b = c.getBoundingClientRect(), v = c.width / b.width, y = c.height / b.height;
      return {
        x: (g.clientX - b.left) * v,
        y: (g.clientY - b.top) * y
      };
    }
    function k(g) {
      a.disabled || (i.value = !0, u = m(g), o.value?.setPointerCapture(g.pointerId));
    }
    function f(g) {
      if (!i.value || a.disabled)
        return;
      const c = d(), b = m(g);
      !c || !b || !u || (c.strokeStyle = "#111827", c.lineWidth = 2.4, c.lineCap = "round", c.lineJoin = "round", c.beginPath(), c.moveTo(u.x, u.y), c.lineTo(b.x, b.y), c.stroke(), u = b);
    }
    function h() {
      i.value = !1, u = null;
    }
    function M() {
      const g = o.value, c = d();
      !g || !c || (c.clearRect(0, 0, g.width, g.height), r("clear"));
    }
    function C() {
      const g = o.value;
      g && r("save", g.toDataURL("image/png"));
    }
    function w() {
      const g = o.value, c = d();
      !g || !c || (c.fillStyle = "#ffffff", c.fillRect(0, 0, g.width, g.height));
    }
    return ue(w), me(() => {
      i.value = !1;
    }), (g, c) => (t(), n("div", I1, [
      s("p", N1, p(e.label), 1),
      s("canvas", {
        ref_key: "canvas",
        ref: o,
        width: e.width,
        height: e.height,
        class: j(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(k, ["prevent"]),
        onPointermove: ce(f, ["prevent"]),
        onPointerup: ce(h, ["prevent"]),
        onPointerleave: ce(h, ["prevent"])
      }, null, 42, R1),
      s("div", U1, [
        E(ne, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: L(() => [...c[0] || (c[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(ne, {
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: L(() => [...c[1] || (c[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), q1 = { class: "mx-auto flex w-full max-w-6xl flex-col gap-10 p-4 sm:p-6" }, K1 = { class: "grid gap-8 lg:grid-cols-2" }, G1 = { class: "flex flex-col gap-3" }, W1 = { class: "text-muted-foreground text-xs" }, Z1 = {
  key: 0,
  class: "flex flex-col gap-3"
}, J1 = { class: "flex flex-wrap gap-3" }, Y1 = ["onClick"], X1 = ["src", "alt"], Q1 = {
  key: 1,
  class: "flex flex-col gap-3"
}, eb = { class: "flex flex-wrap gap-3" }, tb = ["onClick"], ab = ["src", "alt"], nb = {
  key: 2,
  class: "flex flex-col gap-4"
}, lb = { class: "flex flex-wrap items-center gap-2" }, sb = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, ob = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, rb = { class: "flex flex-col gap-2" }, ib = ["src"], ub = {
  key: 1,
  class: "text-sm text-neutral-400"
}, db = ["src"], sw = /* @__PURE__ */ z({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null }
  },
  setup(e) {
    const l = e, a = G([]), r = G([]), o = G(null), i = G(null), u = G(null), d = G(l.documents[0]?.key ?? "");
    function m(g) {
      try {
        const c = localStorage.getItem(g), b = c ? JSON.parse(c) : [];
        return Array.isArray(b) ? b : [];
      } catch {
        return [];
      }
    }
    ue(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = m(`${l.storageKey}.signatures`), r.value = m(`${l.storageKey}.stamps`), o.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
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
    async function f(g, c) {
      await Wo(g), c(40);
      const b = await new Promise((v, y) => {
        const S = new FileReader();
        S.onload = () => v(String(S.result)), S.onerror = () => y(new Error("Could not read the file")), S.readAsDataURL(g);
      });
      return c(100), { value: b, name: g.name, size: g.size, url: b };
    }
    function h() {
      const g = u.value?.url ?? u.value?.value;
      if (!g)
        return;
      const c = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: g
      };
      r.value = [c, ...r.value].slice(0, 8), i.value = c.id;
    }
    const M = $(
      () => a.value.find((g) => g.id === o.value)?.dataUrl ?? null
    ), C = $(
      () => r.value.find((g) => g.id === i.value)?.dataUrl ?? null
    ), w = $(() => {
      const g = l.documents.find((b) => b.key === d.value)?.document ?? l.documents[0]?.document ?? {}, c = {
        ...g?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...g,
        branding: c
      };
    });
    return (g, c) => (t(), n("div", q1, [
      E(Ce, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      s("section", K1, [
        E(H1, {
          label: "Draw a signature",
          onSave: k
        }),
        s("div", G1, [
          c[2] || (c[2] = s("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          s("p", W1, p(x(ea)), 1),
          E(ta, {
            modelValue: u.value,
            "onUpdate:modelValue": c[0] || (c[0] = (b) => u.value = b),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: f
          }, null, 8, ["modelValue"]),
          E(ne, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: h
          }, {
            default: L(() => [...c[1] || (c[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", Z1, [
        E(Ce, {
          variant: "small",
          title: "Saved signatures"
        }),
        s("div", J1, [
          (t(!0), n(P, null, D(a.value, (b) => (t(), n("button", {
            key: b.id,
            type: "button",
            class: j(["rounded-md border p-2", b.id === o.value ? "ring-ring ring-2" : ""]),
            onClick: (v) => o.value = b.id
          }, [
            s("img", {
              src: b.dataUrl,
              alt: b.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, X1)
          ], 10, Y1))), 128))
        ])
      ])) : _("", !0),
      r.value.length ? (t(), n("section", Q1, [
        E(Ce, {
          variant: "small",
          title: "Saved stamps"
        }),
        s("div", eb, [
          (t(!0), n(P, null, D(r.value, (b) => (t(), n("button", {
            key: b.id,
            type: "button",
            class: j(["rounded-md border p-2", b.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (v) => i.value = b.id
          }, [
            s("img", {
              src: b.dataUrl,
              alt: b.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, ab)
          ], 10, tb))), 128))
        ])
      ])) : _("", !0),
      e.documents.length ? (t(), n("section", nb, [
        s("div", lb, [
          (t(!0), n(P, null, D(e.documents, (b) => (t(), F(ne, {
            key: b.key,
            size: "sm",
            variant: d.value === b.key ? "default" : "outline",
            onClick: (v) => d.value = b.key
          }, {
            default: L(() => [
              R(p(b.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        s("div", sb, [
          E(uc, {
            document: w.value
          }, null, 8, ["document"]),
          s("div", ob, [
            s("div", rb, [
              c[3] || (c[3] = s("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), n("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, ib)) : (t(), n("p", ub, "Draw and save a signature"))
            ]),
            C.value ? (t(), n("img", {
              key: 0,
              src: C.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, db)) : _("", !0)
          ])
        ])
      ])) : _("", !0)
    ]));
  }
}), ow = "panel.dashboard.hiddenWidgets", cb = /* @__PURE__ */ Symbol("dashboardHide"), fb = {
  key: 0,
  class: "lg:col-span-2",
  "data-slot": "dashboard-shortcuts"
}, rw = /* @__PURE__ */ z({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = ga(cb, null), r = G(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), o = G(!1);
    ue(() => {
      if (a?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        o.value = !0;
        return;
      }
      try {
        const u = localStorage.getItem(l.storageKey);
        if (u) {
          const d = JSON.parse(u);
          Array.isArray(d) && (r.value = d.filter(
            (m) => typeof m?.id == "string" && typeof m.label == "string" && typeof m.href == "string"
          ));
        }
      } catch {
      }
      o.value = !0;
    }), re(
      r,
      (u) => {
        if (!(!o.value || !l.storageKey))
          try {
            localStorage.setItem(l.storageKey, JSON.stringify(u));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = $(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? _("", !0) : (t(), n("div", fb, [
      E(ep, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (m) => r.value = m),
        onHide: d[1] || (d[1] = (m) => x(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), mb = { class: "flex flex-col gap-3" }, pb = ["data-slot"], vb = ["aria-pressed", "aria-label", "title"], gb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hb = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, bb = { class: "flex h-8 items-center" }, xb = ["aria-label", "title", "onClick"], yb = ["aria-label", "title", "onClick"], kb = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, $b = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, iw = /* @__PURE__ */ z({
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
    function u(v) {
      return a.maskable && (v.sensitive ?? !0);
    }
    function d(v) {
      return u(v) && !o.value && !i.value.has(v.key);
    }
    const m = $(() => a.segments.some(d)), k = $(() => a.segments.some(u)), f = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = $(() => f[a.columns] ?? f[4]), M = $(() => {
      const v = a.columns ?? 4, y = Math.floor(a.segments.length / v) * v;
      return a.segments.slice(0, y);
    }), C = $(() => {
      const v = a.columns ?? 4, y = Math.floor(a.segments.length / v) * v;
      return a.segments.slice(y);
    }), w = $(() => {
      const v = [];
      return M.value.length > 0 && v.push({ key: "packed", joined: !0, segments: M.value }), C.value.length > 0 && v.push({ key: "leftover", joined: !1, segments: C.value }), v;
    });
    function g() {
      const v = m.value === !1;
      o.value = !v, i.value = /* @__PURE__ */ new Set(), r("toggle", v);
    }
    function c(v) {
      if (!u(v))
        return;
      const y = new Set(i.value);
      if (d(v))
        y.add(v.key);
      else if (y.delete(v.key), o.value) {
        o.value = !1;
        for (const S of a.segments)
          S.key !== v.key && u(S) && y.add(S.key);
      }
      i.value = y, r("toggle", m.value);
    }
    function b(v) {
      return typeof v == "number" ? new Intl.NumberFormat().format(v) : v;
    }
    return (v, y) => (t(), n("div", mb, [
      (t(!0), n(P, null, D(w.value, (S) => (t(), n("div", {
        key: S.key,
        class: j(["relative shrink-0", S.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": S.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && k.value && S.key === w.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: g
        }, [
          (t(), n("svg", gb, [
            m.value ? (t(), n(P, { key: 0 }, [
              y[0] || (y[0] = s("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              y[1] || (y[1] = s("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              y[2] || (y[2] = s("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              y[3] || (y[3] = s("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(P, { key: 1 }, [
              y[4] || (y[4] = s("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              y[5] || (y[5] = s("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, vb)) : _("", !0),
        s("div", {
          class: j(["grid", [S.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), n(P, null, D(S.segments, (B) => (t(), n("div", {
            key: B.key,
            class: j(["bg-card flex flex-col gap-2 p-4", S.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            s("p", hb, p(B.label), 1),
            s("div", bb, [
              e.loading ? (t(), F(De, {
                key: 0,
                variant: "number"
              })) : d(B) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${B.label} hidden. Show it.`,
                title: `Show ${B.label}`,
                onClick: (K) => c(B)
              }, [
                (t(), n(P, null, D(5, (K) => s("span", {
                  key: K,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, xb)) : u(B) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${B.label}, ${b(B.value)}. Hide it.`,
                title: `Hide ${B.label}`,
                onClick: (K) => c(B)
              }, p(b(B.value)), 9, yb)) : (t(), n("span", kb, p(b(B.value)), 1)),
              B.trend && !e.loading && !d(B) ? (t(), F(sa, {
                key: 4,
                direction: B.trend.direction,
                percentage: B.trend.percentage,
                inverted: B.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : _("", !0)
            ]),
            B.sparkline?.length && !e.loading && !d(B) ? (t(), F(tt, {
              key: 0,
              data: B.sparkline,
              height: 24
            }, null, 8, ["data"])) : _("", !0),
            B.caption || B.comparison && B.trend ? (t(), n("p", $b, p(B.caption ?? B.comparison), 1)) : _("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, pb))), 128))
    ]));
  }
}), wb = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Cb = { class: "flex items-center justify-between gap-2" }, _b = ["href"], Mb = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Sb = { class: "flex flex-col gap-0.5" }, Bb = { class: "text-sm font-medium" }, Pb = { class: "text-xs text-muted-foreground" }, zb = {
  key: 1,
  class: "flex flex-col gap-2"
}, Ab = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, jb = { class: "flex flex-col gap-0.5" }, Ob = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, uw = /* @__PURE__ */ z({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: {}
  },
  setup(e) {
    const l = e, a = l.items.find((o) => !o.done) ?? null, r = l.items.filter((o) => o.key !== a?.key);
    return (o, i) => e.items.length ? (t(), n("section", wb, [
      s("div", Cb, [
        i[0] || (i[0] = s("h2", { class: "text-sm font-semibold" }, "Setup checklist", -1)),
        e.reportHref ? (t(), n("a", {
          key: 0,
          href: e.reportHref,
          class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
        }, " Full report ", 8, _b)) : _("", !0)
      ]),
      x(a) ? (t(), n("div", Mb, [
        i[1] || (i[1] = s("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        s("div", Sb, [
          s("p", Bb, p(x(a).title), 1),
          s("p", Pb, p(x(a).detail), 1)
        ])
      ])) : _("", !0),
      x(r).length ? (t(), n("ul", zb, [
        (t(!0), n(P, null, D(x(r), (u) => (t(), n("li", {
          key: u.key,
          class: "flex items-start gap-3"
        }, [
          s("span", {
            class: j([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              u.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            u.done ? (t(), n("svg", Ab, [...i[2] || (i[2] = [
              s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : _("", !0)
          ], 2),
          s("div", jb, [
            s("p", {
              class: j(["text-sm", u.done ? "text-muted-foreground line-through" : "font-medium"])
            }, p(u.title), 3),
            u.done ? _("", !0) : (t(), n("p", Ob, p(u.detail), 1))
          ])
        ]))), 128))
      ])) : _("", !0)
    ])) : _("", !0);
  }
}), Lb = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, Vb = { class: "flex items-center gap-2" }, Db = { class: "font-medium tabular-nums" }, Tb = { class: "ml-auto flex items-center gap-3" }, dw = /* @__PURE__ */ z({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = (o) => new Intl.NumberFormat().format(o);
    return (o, i) => (t(), n("div", Lb, [
      s("div", Vb, [
        H(o.$slots, "actions")
      ]),
      s("span", Db, [
        e.allMatching ? (t(), n(P, { key: 0 }, [
          R(" All " + p(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(P, { key: 1 }, [
          R(p(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      s("div", Tb, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (u) => a("select-all-matching"))
        }, " Select all " + p(r(e.total)), 1)) : _("", !0),
        s("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), Fb = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Eb = { class: "text-muted-foreground text-xs tabular-nums" }, Ib = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Nb = ["value"], Rb = ["value"], Ub = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Hb = ["disabled"], qb = ["disabled"], Kb = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Gb = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Wb = ["disabled"], cw = /* @__PURE__ */ z({
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
    const a = e, r = l, o = (m) => new Intl.NumberFormat().format(m), i = $(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), u = $(() => (a.page - 1) * a.perPage + a.rowsOnPage), d = $(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (m, k) => (t(), n("div", Fb, [
      s("p", Eb, [
        R(" Showing " + p(o(i.value)) + "-" + p(o(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(P, { key: 0 }, [
          R("of " + p(o(e.total)), 1)
        ], 64)) : _("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Ib, [
        k[4] || (k[4] = s("span", null, "Per page", -1)),
        s("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: k[0] || (k[0] = (f) => r("update:perPage", Number(f.target.value)))
        }, [
          (t(!0), n(P, null, D(e.perPageOptions, (f) => (t(), n("option", {
            key: f,
            value: f
          }, p(f), 9, Rb))), 128))
        ], 40, Nb)
      ])) : _("", !0),
      s("nav", Ub, [
        s("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: k[1] || (k[1] = (f) => r("first"))
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
        ])], 8, Hb),
        s("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: k[2] || (k[2] = (f) => r("previous"))
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
        ])], 8, qb),
        s("span", Kb, p(e.page), 1),
        d.value !== null ? (t(), n("span", Gb, " of " + p(o(d.value)), 1)) : _("", !0),
        s("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: k[3] || (k[3] = (f) => r("next"))
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
        ])], 8, Wb)
      ])
    ]));
  }
}), Zb = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, Jb = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, Yb = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, Xb = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, fw = /* @__PURE__ */ z({
  __name: "TableShell",
  setup(e) {
    return (l, a) => (t(), n("div", Zb, [
      l.$slots.tabs ? (t(), n("div", Jb, [
        H(l.$slots, "tabs")
      ])) : _("", !0),
      l.$slots.toolbar ? (t(), n("div", Yb, [
        H(l.$slots, "toolbar")
      ])) : _("", !0),
      H(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Xb, [
        H(l.$slots, "pagination")
      ])) : _("", !0)
    ]));
  }
}), Qb = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, ex = ["aria-current"], tx = ["title"], ax = ["aria-current", "onClick"], nx = ["title"], lx = /* @__PURE__ */ z({
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
    return (o, i) => (t(), n("div", Qb, [
      s("button", {
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => a("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, p(r(e.counts.all ?? 0)), 11, tx)) : (t(), F(De, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, ex),
      (t(!0), n(P, null, D(e.tabs, (u) => (t(), n("button", {
        key: u,
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => a("select", u)
      }, [
        R(p(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, p(r(e.counts[u] ?? 0)), 11, nx)) : (t(), F(De, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, ax))), 128))
    ]));
  }
}), mw = /* @__PURE__ */ kt(lx, [["__scopeId", "data-v-3967c945"]]), sx = { class: "flex flex-wrap items-center justify-end gap-2" }, ox = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, rx = ["placeholder", "title", "aria-label"], ix = ["aria-label"], ux = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, dx = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, cx = { class: "text-xs font-medium" }, fx = ["value", "onChange"], mx = ["value"], px = { class: "grid grid-cols-2 gap-2" }, vx = ["value", "onChange"], gx = ["value", "onChange"], hx = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, bx = ["value", "onChange"], xx = ["value", "onChange"], yx = {
  key: 4,
  class: "flex items-center gap-2"
}, kx = ["aria-checked", "onClick"], $x = { class: "text-xs" }, wx = ["onClick"], Cx = ["value", "onChange"], _x = ["value"], Mx = ["disabled", "onClick"], Sx = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Bx = ["disabled", "onClick"], Px = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, zx = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Ax = ["aria-pressed", "aria-label", "title"], jx = {
  key: 3,
  class: "text-muted-foreground shrink-0 text-xs"
}, pw = /* @__PURE__ */ z({
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
      (O) => {
        O !== o.value && (o.value = O);
      }
    );
    let i;
    re(o, (O) => {
      clearTimeout(i), i = setTimeout(() => {
        O !== a.search && r("update:search", O);
      }, 250);
    });
    const u = G({ ...a.filters });
    re(
      () => a.filters,
      (O) => {
        u.value = { ...O };
      },
      { deep: !0 }
    );
    const d = $(
      () => a.filterSchema.filter(
        (O) => a.filters[O.key] !== null && a.filters[O.key] !== void 0
      ).length
    ), m = $(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), k = $(() => a.search !== "" || d.value > 0);
    function f(O) {
      return O.type === "multiselect";
    }
    function h(O) {
      const A = u.value[O.key];
      return Array.isArray(A) ? A : A == null ? [] : [A];
    }
    function M(O) {
      return h(O).filter(
        (A) => typeof A == "string" || typeof A == "number"
      );
    }
    function C(O) {
      return B(O).flatMap(
        (A) => typeof A.value == "string" || typeof A.value == "number" ? [{ value: A.value, label: A.label }] : []
      );
    }
    function w(O, A) {
      u.value = { ...u.value, [O.key]: A === "" ? null : A };
    }
    function g(O, A) {
      const W = u.value[O.key];
      if (typeof W != "string" || !W.includes(".."))
        return "";
      const [I, U] = W.split("..");
      return A === "from" ? I ?? "" : U ?? "";
    }
    function c(O, A, W) {
      const I = A === "from" ? W : g(O, "from"), U = A === "to" ? W : g(O, "to");
      u.value = {
        ...u.value,
        [O.key]: I && U ? `${I}..${U}` : null
      };
    }
    function b(O, A, W) {
      const I = A === "from" ? W : g(O, "from"), U = A === "to" ? W : g(O, "to");
      u.value = {
        ...u.value,
        [O.key]: I || U ? `${I}..${U}` : null
      };
    }
    function v(O) {
      r("apply-filters", { ...u.value }), O();
    }
    function y(O, A) {
      u.value[O] = A, r("apply-filters", { ...u.value });
    }
    function S() {
      u.value = Object.fromEntries(a.filterSchema.map((O) => [O.key, null]));
    }
    function B(O) {
      return O.type === "boolean" ? [
        { value: !0, label: O.trueLabel ?? "Yes" },
        { value: !1, label: O.falseLabel ?? "No" }
      ] : O.type === "daterange" ? Object.entries(O.presets ?? {}).map(([A, W]) => ({
        value: A,
        label: W
      })) : (O.options ?? []).map((A) => ({ value: A, label: A }));
    }
    const K = G(new Set(a.hidden));
    re(
      () => a.hidden,
      (O) => {
        K.value = new Set(O);
      },
      { deep: !0 }
    );
    function N(O) {
      const A = new Set(K.value);
      A.has(O) ? A.delete(O) : A.add(O), K.value = A, r("apply-columns", [...A]);
    }
    function Y() {
      K.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function T() {
      o.value = "", r("clear");
    }
    return (O, A) => (t(), n("div", sx, [
      s("div", ox, [
        A[4] || (A[4] = s("svg", {
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
          "onUpdate:modelValue": A[0] || (A[0] = (W) => o.value = W),
          type: "search",
          placeholder: e.searchPlaceholder,
          title: e.searchHint,
          "aria-label": e.searchHint ?? e.searchPlaceholder,
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
        }, null, 8, rx), [
          [Me, o.value]
        ]),
        o.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
          "aria-label": "Clear search",
          onClick: A[1] || (A[1] = (W) => o.value = "")
        }, [...A[3] || (A[3] = [
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
      e.filterSchema.length ? (t(), F(He, {
        key: 0,
        width: "w-80",
        "dismiss-on-panel-click": !1
      }, {
        trigger: L(() => [
          s("button", {
            type: "button",
            dusk: "filters-trigger",
            class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", d.value ? "border-primary text-primary" : ""]),
            "aria-label": d.value ? `Filters (${d.value} active)` : "Filters",
            title: "Filters"
          }, [
            A[5] || (A[5] = s("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, [
              s("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            d.value ? (t(), n("span", ux, p(d.value), 1)) : _("", !0)
          ], 10, ix)
        ]),
        panel: L(({ close: W }) => [
          s("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
            A[6] || (A[6] = s("span", { class: "text-sm font-semibold" }, "Filters", -1)),
            s("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: S
            }, " Reset ")
          ]),
          A[9] || (A[9] = s("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
          s("div", dx, [
            (t(!0), n(P, null, D(e.filterSchema, (I) => (t(), n("div", {
              key: I.key,
              class: "flex flex-col gap-1.5"
            }, [
              s("label", cx, p(I.label), 1),
              f(I) ? (t(), F(_t, {
                key: 0,
                "model-value": M(I),
                options: C(I),
                placeholder: `Any ${I.label.toLowerCase()}`,
                "onUpdate:modelValue": (U) => u.value[I.key] = U.length ? U : null
              }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : I.type === "querybuilder" ? (t(), F(cs, {
                key: 1,
                "model-value": u.value[I.key] ?? null,
                fields: I.fields ?? {},
                operators: I.operators ?? {},
                "max-depth": I.maxDepth ?? 5,
                onApply: (U) => y(I.key, U)
              }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : I.type === "daterange" ? (t(), n(P, { key: 2 }, [
                s("select", {
                  value: typeof u.value[I.key] == "string" && !String(u.value[I.key]).includes("..") ? u.value[I.key] : "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                  onChange: (U) => w(I, U.target.value)
                }, [
                  A[7] || (A[7] = s("option", { value: "" }, "Any time", -1)),
                  (t(!0), n(P, null, D(B(I), (U) => (t(), n("option", {
                    key: String(U.value),
                    value: U.value
                  }, p(U.label), 9, mx))), 128))
                ], 40, fx),
                s("div", px, [
                  s("input", {
                    type: "date",
                    value: g(I, "from"),
                    "aria-label": "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (U) => c(
                      I,
                      "from",
                      U.target.value
                    )
                  }, null, 40, vx),
                  s("input", {
                    type: "date",
                    value: g(I, "to"),
                    "aria-label": "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (U) => c(
                      I,
                      "to",
                      U.target.value
                    )
                  }, null, 40, gx)
                ])
              ], 64)) : I.type === "numberrange" ? (t(), n("div", hx, [
                s("input", {
                  type: "number",
                  value: g(I, "from"),
                  "aria-label": "From",
                  placeholder: "From",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (U) => b(
                    I,
                    "from",
                    U.target.value
                  )
                }, null, 40, bx),
                s("input", {
                  type: "number",
                  value: g(I, "to"),
                  "aria-label": "To",
                  placeholder: "To",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (U) => b(
                    I,
                    "to",
                    U.target.value
                  )
                }, null, 40, xx)
              ])) : I.type === "boolean" ? (t(), n("div", yx, [
                s("button", {
                  type: "button",
                  role: "switch",
                  "aria-checked": u.value[I.key] === !0,
                  class: j([
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    u.value[I.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                  ]),
                  onClick: (U) => w(I, u.value[I.key] === !0 ? null : !0)
                }, [
                  s("span", {
                    class: j(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[I.key] === !0 ? "left-4.5" : "left-0.5"])
                  }, null, 2)
                ], 10, kx),
                s("span", $x, p(I.trueLabel ?? "Yes"), 1),
                s("button", {
                  type: "button",
                  class: j([
                    "text-muted-foreground ml-auto text-xs hover:underline",
                    u.value[I.key] === !1 ? "text-primary font-medium" : ""
                  ]),
                  onClick: (U) => w(I, u.value[I.key] === !1 ? null : !1)
                }, p(I.falseLabel ?? "No") + " only ", 11, wx)
              ])) : (t(), n("select", {
                key: 5,
                value: u.value[I.key] ?? "",
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                onChange: (U) => w(I, U.target.value)
              }, [
                A[8] || (A[8] = s("option", { value: "" }, "All", -1)),
                (t(!0), n(P, null, D(B(I), (U) => (t(), n("option", {
                  key: String(U.value),
                  value: U.value
                }, p(U.label), 9, _x))), 128))
              ], 40, Cx))
            ]))), 128))
          ]),
          s("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
            disabled: !m.value,
            onClick: (I) => v(W)
          }, " Apply filters ", 8, Mx)
        ]),
        _: 1
      })) : _("", !0),
      E(He, { "dismiss-on-panel-click": !1 }, {
        trigger: L(() => [...A[10] || (A[10] = [
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
        panel: L(() => [
          A[13] || (A[13] = s("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
          s("div", Sx, [
            (t(!0), n(P, null, D(e.columns, (W) => (t(), n("button", {
              key: W.key,
              type: "button",
              class: j(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", W.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
              disabled: W.locked,
              onClick: (I) => N(W.key)
            }, [
              K.value.has(W.key) ? (t(), n("span", zx)) : (t(), n("svg", Px, [...A[11] || (A[11] = [
                s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])),
              R(" " + p(W.label), 1)
            ], 10, Bx))), 128))
          ]),
          s("div", { class: "border-t" }, [
            s("button", {
              type: "button",
              class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
              onClick: Y
            }, [...A[12] || (A[12] = [
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
              R(" Reset ", -1)
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
      ])], 10, Ax)) : _("", !0),
      k.value ? (t(), n("button", {
        key: 2,
        type: "button",
        class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
        onClick: T
      }, " Clear ")) : _("", !0),
      e.loading ? (t(), n("span", jx, "Loading…")) : _("", !0)
    ]));
  }
}), Ox = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Lx = { class: "grid gap-2" }, Vx = {
  key: 0,
  class: "text-destructive text-sm"
}, Dx = { class: "flex gap-2" }, vw = /* @__PURE__ */ z({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, o = G((() => {
      const M = navigator.userAgent, C = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: g }) => g.test(M))?.name, w = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: g }) => g.test(M))?.name;
      return [C, w].filter(Boolean).join(" on ") || "";
    })()), i = G(!1), u = ha(null), d = $(() => u.value?.isLoading.value ?? !1), m = $(() => u.value?.error.value ?? null), k = $(() => u.value?.isSupported.value ?? !1);
    ue(async () => {
      try {
        const { usePasskeyRegister: M } = await import("@laravel/passkeys/vue");
        u.value = M({
          onSuccess: () => {
            o.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const f = async (M) => {
      M.preventDefault(), !(!o.value.trim() || u.value === null) && await u.value.register(o.value);
    }, h = () => {
      i.value = !1, o.value = "";
    };
    return (M, C) => k.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: f
    }, [
      s("div", Lx, [
        C[3] || (C[3] = s("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        oe(s("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": C[1] || (C[1] = (w) => o.value = w),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Me, o.value]
        ]),
        C[4] || (C[4] = s("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      m.value ? (t(), n("p", Vx, p(m.value), 1)) : _("", !0),
      s("div", Dx, [
        E(ne, {
          type: "submit",
          disabled: d.value || !o.value.trim()
        }, {
          default: L(() => [
            R(p(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        E(ne, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: L(() => [...C[5] || (C[5] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), F(ne, {
      key: 1,
      variant: "outline",
      onClick: C[0] || (C[0] = (w) => i.value = !0)
    }, {
      default: L(() => [...C[2] || (C[2] = [
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", Ox, " Passkeys are not supported in this browser. "));
  }
}), Tx = { class: "text-sm font-semibold" }, Fx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ex = {
  key: 4,
  class: "flex flex-col gap-3"
}, Ix = { class: "text-sm font-medium" }, Nx = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Rx = {
  key: 0,
  class: "mb-1 font-medium"
}, Ux = ["onClick"], Hx = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, qx = { class: "flex items-center justify-between gap-3 border-t p-4" }, Kx = ["disabled"], Gx = /* @__PURE__ */ z({
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
    const a = e, r = l, o = G(!a.node.collapsed), i = G(0), u = G(0), d = $(
      () => (a.node.children ?? []).map((g) => ({
        label: g.label ?? "",
        description: g.description
      }))
    ), m = $(() => a.depth === 0), k = $(() => {
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
    }), f = $(() => {
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
      const c = [], b = (v) => {
        v.component === "field" && v.key && c.push(v.key), v.children?.forEach(b);
      };
      return b(g), c.some((v) => a.errors[v]);
    }
    function C(g) {
      const c = g.visibleWhen;
      return c ? a.values[c.field] == c.value : !0;
    }
    function w(g) {
      if (a.upload)
        return (c, b) => a.upload(g, c, b);
    }
    return (g, c) => {
      const b = vt("SchemaNode", !0);
      return e.node.component === "field" && C(e.node) ? (t(), F(qe, {
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
        upload: w(e.node.key),
        discard: e.discard,
        onChange: c[0] || (c[0] = (v) => r("change", e.node.key, v))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && C(e.node) ? (t(), n("section", {
        key: 1,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        s("header", {
          class: j(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: c[1] || (c[1] = (v) => e.node.collapsible && (o.value = !o.value))
        }, [
          s("div", null, [
            s("h3", Tx, p(e.node.label), 1),
            e.node.description ? (t(), n("p", Fx, p(e.node.description), 1)) : _("", !0)
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: j(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", o.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...c[11] || (c[11] = [
            s("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : _("", !0)
        ], 2),
        o.value ? (t(), n("div", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [h.value, m.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (v, y) => (t(), F(b, {
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
            class: j(v.span && v.span >= 2 ? "sm:col-span-2" : ""),
            onChange: c[2] || (c[2] = (S, B) => r("change", S, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : _("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), n(P, null, D(e.node.children ?? [], (v, y) => (t(), F(b, {
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
        class: j(["flex", k.value])
      }, [
        (t(!0), n(P, null, D(e.node.children ?? [], (v, y) => (t(), F(b, {
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
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Ex, [
        s("legend", Ix, p(e.node.label), 1),
        e.node.description ? (t(), n("p", Nx, p(e.node.description), 1)) : _("", !0),
        s("div", {
          class: j(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (v, y) => (t(), F(b, {
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
        class: j(["rounded-lg border px-4 py-3 text-sm", f.value])
      }, [
        e.node.title ? (t(), n("p", Rx, p(e.node.title), 1)) : _("", !0),
        s("p", null, p(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        s("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (v, y) => (t(), n("button", {
            key: y,
            type: "button",
            class: j([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === y ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (S) => i.value = y
          }, [
            R(p(v.label) + " ", 1),
            M(v) ? (t(), n("span", Hx)) : _("", !0)
          ], 10, Ux))), 128))
        ], 2),
        (t(!0), n(P, null, D(e.node.children ?? [], (v, y) => oe((t(), n("div", {
          key: y,
          class: j(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, D(v.children ?? [], (S, B) => (t(), F(b, {
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
            onChange: c[6] || (c[6] = (K, N) => r("change", K, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Se, i.value === y]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        E(Ur, {
          class: j(["p-4", m.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (v) => M((e.node.children ?? [])[v]),
          "onUpdate:activeStep": c[7] || (c[7] = (v) => u.value = v)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(P, null, D(e.node.children ?? [], (v, y) => oe((t(), n("div", {
          key: y,
          class: j(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, D(v.children ?? [], (S, B) => (t(), F(b, {
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
            onChange: c[8] || (c[8] = (K, N) => r("change", K, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Se, u.value === y]
        ])), 128)),
        s("div", qx, [
          s("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: c[9] || (c[9] = (v) => u.value--)
          }, " Back ", 8, Kx),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: c[10] || (c[10] = (v) => u.value++)
          }, " Next ")) : _("", !0)
        ])
      ], 2)) : _("", !0);
    };
  }
}), Wx = { class: "flex flex-col gap-4" }, Zx = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, gw = /* @__PURE__ */ z({
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
    const a = e, r = l, o = $(() => a.nodes.length > 0), i = $(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = $(() => a.errors._conflict);
    function d(m) {
      if (a.upload)
        return (k, f) => a.upload(m, k, f);
    }
    return (m, k) => (t(), n("div", Wx, [
      u.value ? (t(), n("p", Zx, p(u.value), 1)) : _("", !0),
      o.value ? (t(!0), n(P, { key: 1 }, D(e.nodes, (f, h) => (t(), F(Gx, {
        key: h,
        node: f,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: k[0] || (k[0] = (M, C) => r("change", M, C))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(P, null, D(e.fields, (f) => (t(), F(qe, {
          key: f.key,
          field: f,
          value: e.modelValue[f.key],
          error: e.errors[f.key],
          errors: e.errors,
          options: e.options[f.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": f.searchable && e.searchOptions ? (h) => e.searchOptions(f.key, h) : void 0,
          upload: d(f.key),
          discard: e.discard,
          class: j(f.span && f.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", f.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), Jx = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, Yx = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, Xx = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Qx = ["disabled"], ey = ["disabled"], ty = ["disabled"], hw = /* @__PURE__ */ z({
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
    return (l, a) => (t(), F(Te, { to: "body" }, [
      E(Ae, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: L(() => [
          e.show ? (t(), n("div", Jx, [
            s("div", Yx, [
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
              s("span", Xx, p(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, p(e.discardLabel), 9, Qx)) : _("", !0),
              s("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, p(e.cancelLabel), 9, ey),
              s("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, p(e.processing ? "Saving…" : e.saveLabel), 9, ty)
            ])
          ])) : _("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function bw(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = G(rt(e.value)), o = $(() => rt(e.value) !== r.value);
  function i() {
    r.value = rt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(m) {
    o.value && (m.preventDefault(), m.returnValue = "");
  }
  return ue(() => {
    a && window.addEventListener("beforeunload", d);
  }), me(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: o, commit: i, discard: u, baseline: r };
}
function rt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [o]) => r.localeCompare(o))
  ));
}
const ay = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, ny = { class: "text-muted-foreground text-xs font-medium" }, ly = { class: "text-sm" }, sy = { key: 1 }, oy = { class: "text-sm font-semibold" }, ry = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, iy = ["onClick"], xw = /* @__PURE__ */ z({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  setup(e) {
    const l = e, a = G(!l.node.collapsed), r = G(0), o = $(() => l.depth === 0), i = $(() => {
      const f = l.node.columns ?? 1;
      return f >= 3 ? "sm:grid-cols-3" : f === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), u = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, d = $(() => l.node.key ? l.record[l.node.key] : null), m = $(() => {
      const f = d.value;
      if (f == null || f === "")
        return "-";
      if (l.node.type === "date" || l.node.type === "datetime")
        return new Date(String(f)).toLocaleDateString(void 0, u[l.node.type]);
      let h = String(f);
      return l.node.transform === "upper" && (h = h.toUpperCase()), l.node.transform === "lower" && (h = h.toLowerCase()), [l.node.prefix, h, l.node.suffix].filter(Boolean).join(" ");
    }), k = $(() => {
      const f = typeof d.value == "boolean" ? d.value ? "1" : "" : String(d.value), h = l.node.colors?.[f] ?? l.node.defaultColor ?? "neutral";
      return $t[h] ?? "outline";
    });
    return (f, h) => {
      const M = vt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", ay, [
        s("dt", ny, p(e.node.label), 1),
        s("dd", ly, [
          e.node.type === "badge" && x(ys)(d.value) ? (t(), F(Re, {
            key: 0,
            variant: k.value,
            class: "capitalize"
          }, {
            default: L(() => [
              R(p(d.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", sy, "-")) : (t(), n("span", {
            key: 2,
            class: j([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, p(m.value), 3))
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: j(o.value ? "bg-card rounded-lg border" : "")
      }, [
        s("header", {
          class: j(["flex items-start justify-between gap-3", [
            o.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: h[0] || (h[0] = (C) => e.node.collapsible && (a.value = !a.value))
        }, [
          s("div", null, [
            s("h3", oy, p(e.node.label), 1),
            e.node.description ? (t(), n("p", ry, p(e.node.description), 1)) : _("", !0)
          ])
        ], 2),
        a.value ? (t(), n("dl", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [i.value, o.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (C, w) => (t(), F(M, {
            key: w,
            node: C,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : _("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(P, null, D(e.node.children ?? [], (C, w) => (t(), F(M, {
          key: w,
          node: C,
          record: e.record,
          depth: e.depth + 1
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: j(o.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        s("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", o.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (C, w) => (t(), n("button", {
            key: w,
            type: "button",
            class: j([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              r.value === w ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (g) => r.value = w
          }, p(C.label), 11, iy))), 128))
        ], 2),
        (t(!0), n(P, null, D(e.node.children ?? [], (C, w) => oe((t(), n("div", {
          key: w,
          class: j(["flex flex-col gap-5", o.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, D(C.children ?? [], (g, c) => (t(), F(M, {
            key: c,
            node: g,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Se, r.value === w]
        ])), 128))
      ], 2)) : _("", !0);
    };
  }
}), uy = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, dy = { class: "text-muted-foreground text-sm" }, cy = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, fy = { class: "flex items-start gap-3" }, my = { class: "min-w-0 flex-1" }, py = { class: "flex flex-wrap items-center gap-2" }, vy = { class: "truncate text-sm font-medium" }, gy = { class: "text-muted-foreground mt-0.5 text-xs" }, hy = { class: "text-muted-foreground text-xs" }, by = { class: "mt-auto flex items-center gap-2" }, xy = /* @__PURE__ */ z({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", uy, [
      s("p", dy, p(o.value) + " of " + p(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      s("div", cy, [
        (t(!0), n(P, null, D(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          s("div", fy, [
            s("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: Q({ background: d.color }),
              "aria-hidden": "true"
            }, p(d.mark), 5),
            s("div", my, [
              s("div", py, [
                s("h3", vy, p(d.label), 1),
                E(pe, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: L(() => [
                    R(p(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), F(pe, {
                  key: 0,
                  status: "offered"
                }, {
                  default: L(() => [...u[0] || (u[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), F(pe, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: L(() => [...u[1] || (u[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : _("", !0),
                d.isDefault ? (t(), F(pe, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...u[2] || (u[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : _("", !0),
                d.connected && d.mode ? (t(), F(pe, {
                  key: 3,
                  status: d.mode
                }, {
                  default: L(() => [
                    R(p(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : _("", !0)
              ]),
              s("p", gy, p(d.caption), 1)
            ])
          ]),
          s("p", hy, p(d.methods.join(" · ")), 1),
          s("div", by, [
            E(ne, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", d.key)
            }, {
              default: L(() => [...u[3] || (u[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(ne, {
              size: "sm",
              variant: "ghost",
              onClick: (m) => r("toggle", d.key)
            }, {
              default: L(() => [
                R(p(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), yy = { class: "flex flex-col gap-6" }, ky = { class: "relative" }, $y = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, wy = ["d"], Cy = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, _y = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, My = { class: "flex flex-wrap items-center gap-2" }, Sy = { class: "text-muted-foreground text-sm" }, By = { class: "flex flex-col gap-1 text-sm" }, Py = ["value"], zy = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ay = { class: "flex flex-wrap items-center gap-2" }, jy = {
  key: 1,
  class: "flex items-center gap-2"
}, yw = /* @__PURE__ */ z({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Be({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const l = Ke(e, "gateways"), a = G(null), r = G(""), o = $(
      () => l.value.find((C) => C.key === a.value) ?? null
    ), i = $(() => {
      const C = r.value.trim().toLowerCase();
      return C === "" ? l.value : l.value.filter((w) => [w.key, w.label, w.caption, ...w.methods].join(" ").toLowerCase().includes(C));
    });
    function u(C) {
      return C.connected && C.enabled !== !1;
    }
    function d(C, w) {
      l.value = l.value.map(
        (g) => g.key === C ? { ...g, ...w } : g
      );
    }
    function m(C) {
      a.value = C;
    }
    function k(C) {
      const w = l.value.find((c) => c.key === C);
      if (!w)
        return;
      const g = !w.connected;
      d(C, {
        connected: g,
        mode: g ? w.mode ?? "test" : null,
        enabled: g,
        isDefault: !1
      });
    }
    function f(C, w) {
      const g = l.value.find((c) => c.key === C);
      g?.connected && d(C, { enabled: w, isDefault: w ? g.isDefault : !1 });
    }
    function h(C) {
      const w = l.value.find((g) => g.key === C);
      !w || !u(w) || (l.value = l.value.map((g) => ({
        ...g,
        isDefault: g.key === C
      })));
    }
    function M(C) {
      const w = a.value;
      !w || !l.value.find((c) => c.key === w)?.connected || d(w, { mode: C });
    }
    return (C, w) => (t(), n(P, null, [
      s("div", yy, [
        E(Ce, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        s("div", ky, [
          (t(), n("svg", $y, [
            s("path", {
              d: x(se)("search")
            }, null, 8, wy)
          ])),
          E(fe, {
            modelValue: r.value,
            "onUpdate:modelValue": w[0] || (w[0] = (g) => r.value = g),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), F(xy, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: k
        }, null, 8, ["gateways"])) : (t(), n("p", Cy, " No gateways match “" + p(r.value.trim()) + "”. ", 1))
      ]),
      E(St, {
        open: o.value !== null,
        title: o.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: w[8] || (w[8] = (g) => a.value = null)
      }, {
        footer: L(() => [
          E(ne, {
            variant: "outline",
            size: "sm",
            onClick: w[6] || (w[6] = (g) => a.value = null)
          }, {
            default: L(() => [...w[21] || (w[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          o.value ? (t(), F(ne, {
            key: 0,
            size: "sm",
            onClick: w[7] || (w[7] = (g) => k(o.value.key))
          }, {
            default: L(() => [
              R(p(o.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : _("", !0)
        ]),
        default: L(() => [
          o.value ? (t(), n("div", _y, [
            s("div", My, [
              E(pe, {
                status: o.value.connected ? "connected" : "disconnected"
              }, {
                default: L(() => [
                  R(p(o.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              o.value.connected && o.value.enabled !== !1 ? (t(), F(pe, {
                key: 0,
                status: "offered"
              }, {
                default: L(() => [...w[9] || (w[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : o.value.connected ? (t(), F(pe, {
                key: 1,
                status: "disabled"
              }, {
                default: L(() => [...w[10] || (w[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : _("", !0),
              o.value.isDefault ? (t(), F(pe, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [...w[11] || (w[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : _("", !0),
              o.value.connected && o.value.mode ? (t(), F(pe, {
                key: 3,
                status: o.value.mode
              }, {
                default: L(() => [
                  R(p(o.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : _("", !0)
            ]),
            s("p", Sy, p(o.value.caption), 1),
            s("label", By, [
              w[12] || (w[12] = R(" Display name ", -1)),
              s("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: o.value.label,
                readonly: ""
              }, null, 8, Py)
            ]),
            w[20] || (w[20] = s("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              s("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            o.value.connected ? (t(), n("div", zy, [
              w[16] || (w[16] = s("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              w[17] || (w[17] = s("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              s("div", Ay, [
                E(ne, {
                  size: "sm",
                  variant: o.value.enabled !== !1 ? "default" : "outline",
                  onClick: w[1] || (w[1] = (g) => f(o.value.key, !0))
                }, {
                  default: L(() => [...w[13] || (w[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ne, {
                  size: "sm",
                  variant: o.value.enabled === !1 ? "default" : "outline",
                  onClick: w[2] || (w[2] = (g) => f(o.value.key, !1))
                }, {
                  default: L(() => [...w[14] || (w[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ne, {
                  size: "sm",
                  variant: o.value.isDefault ? "default" : "outline",
                  disabled: !u(o.value),
                  onClick: w[3] || (w[3] = (g) => h(o.value.key))
                }, {
                  default: L(() => [...w[15] || (w[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : _("", !0),
            o.value.connected ? (t(), n("div", jy, [
              E(ne, {
                size: "sm",
                variant: o.value.mode === "test" ? "default" : "outline",
                onClick: w[4] || (w[4] = (g) => M("test"))
              }, {
                default: L(() => [...w[18] || (w[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(ne, {
                size: "sm",
                variant: o.value.mode === "live" ? "default" : "outline",
                onClick: w[5] || (w[5] = (g) => M("live"))
              }, {
                default: L(() => [...w[19] || (w[19] = [
                  R(" Live ", -1)
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
function Et(e) {
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
function kw(e) {
  const l = G(Et(e));
  ue(() => {
    l.value = Et(e);
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
    const m = new Set(l.value);
    m.has(d) ? m.delete(d) : m.add(d), l.value = m;
  }
  function r(d) {
    const m = new Set(l.value);
    m.add(d), l.value = m;
  }
  function o(d) {
    const m = new Set(l.value);
    m.delete(d), l.value = m;
  }
  function i(d) {
    l.value = new Set(d);
  }
  function u() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: a, hide: r, show: o, setHidden: i, reset: u };
}
function $w(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: o, onResync: i, onInsert: u } = e, d = G(
    l.driver === "none" ? "off" : "connecting"
  ), m = G(/* @__PURE__ */ new Set());
  let k = /* @__PURE__ */ new Map(), f, h, M, C = (/* @__PURE__ */ new Date()).toISOString(), w = null;
  function g(O, A) {
    k.set(O, { ...k.get(O) ?? {}, ...A }), !f && (f = setTimeout(() => {
      f = void 0, c();
    }, l.batchMs));
  }
  function c() {
    if (k.size === 0)
      return;
    const O = k;
    k = /* @__PURE__ */ new Map();
    const A = /* @__PURE__ */ new Set();
    for (const [W, I] of O) {
      const U = a.value.find((te) => te[r] === W);
      if (!U) {
        u?.(W, I);
        continue;
      }
      Object.assign(U, I), A.add(W);
    }
    A.size !== 0 && (m.value = /* @__PURE__ */ new Set([...m.value, ...A]), setTimeout(() => {
      const W = new Set(m.value);
      A.forEach((I) => W.delete(I)), m.value = W;
    }, 1500));
  }
  async function b() {
    if (!(!o || a.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const O = a.value.map((I) => I[r]), { records: A, at: W } = await o(O, C);
        C = W, d.value = "live";
        for (const I of A)
          g(I[r], I);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function v() {
    y(), d.value = "live", h = setInterval(b, l.intervalMs);
  }
  function y() {
    clearInterval(h), h = void 0, M?.abort();
  }
  function S() {
    return window.Echo ?? null;
  }
  function B() {
    const O = S();
    if (!O || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    w = l.channel;
    const A = O.private(l.channel);
    for (const W of l.events)
      A.listen(W, (I) => {
        I?.[r] !== void 0 && g(I[r], I);
      });
    d.value = "live", O.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), O.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function K() {
    w && (S()?.leave(w), w = null);
  }
  function N() {
    l.driver === "poll" && v(), l.driver === "broadcast" && B();
  }
  function Y() {
    y(), K(), clearTimeout(f), f = void 0, k = /* @__PURE__ */ new Map();
  }
  function T() {
    l.pauseWhenHidden && (document.hidden ? (Y(), d.value = "paused") : (C = (/* @__PURE__ */ new Date()).toISOString(), N(), i?.()));
  }
  return ue(() => {
    l.driver !== "none" && (N(), l.pauseWhenHidden && document.addEventListener("visibilitychange", T));
  }), me(() => {
    document.removeEventListener("visibilitychange", T), Y();
  }), { status: d, recentlyChanged: m, applyPatch: g, flush: c, pollOnce: b };
}
const Oy = /^[a-z0-9-]+$/, Ly = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function ww(e) {
  ba(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !Oy.test(a) || typeof r != "string" || !Ly.test(r) || (l[`--${a}`] = r);
    Ks(l);
  });
}
const Vy = { class: "flex items-center gap-0.5" }, Dy = /* @__PURE__ */ z({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Vy, [
      String(e.value) === "mono" ? (t(), n(P, { key: 0 }, [
        a[0] || (a[0] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        a[1] || (a[1] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        a[2] || (a[2] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), n(P, { key: 1 }, [
        a[3] || (a[3] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        a[4] || (a[4] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        a[5] || (a[5] = s("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), Ty = /* @__PURE__ */ z({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), F(la, {
      code: "AB-1234",
      style: Q(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Fy = { class: "flex flex-col gap-2" }, Ey = { class: "bg-card rounded-lg border p-4" }, Iy = { class: "text-muted-foreground truncate text-xs" }, Ny = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Ry = /* @__PURE__ */ z({
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
    ), u = $(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = $(() => {
      const w = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return w === "" ? u.value : `${u.value} › ${w.split("/").join(" › ")}`;
    });
    function m(w, g) {
      return w.length <= g ? w : `${w.slice(0, g - 1).trimEnd()}…`;
    }
    const k = $(() => m(o.value, r.value.titleMax)), f = $(() => m(i.value, r.value.descriptionMax));
    function h(w, g, c) {
      return w === 0 ? { tone: "text-muted-foreground", note: "empty" } : w > c ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : w < g ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = $(
      () => h(o.value.length, r.value.titleMin, r.value.titleMax)
    ), C = $(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (w, g) => (t(), n("div", Fy, [
      s("div", Ey, [
        s("p", Iy, p(d.value), 1),
        s("p", {
          class: j(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", k.value === "" ? "text-muted-foreground italic" : ""])
        }, p(k.value || "Untitled page"), 3),
        s("p", {
          class: j(["text-muted-foreground mt-1 line-clamp-2 text-sm", f.value === "" ? "italic" : ""])
        }, p(f.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      s("div", Ny, [
        s("span", {
          class: j(M.value.tone)
        }, " Title " + p(o.value.length) + "/" + p(r.value.titleMax) + " · " + p(M.value.note), 3),
        s("span", {
          class: j(C.value.tone)
        }, " Description " + p(i.value.length) + "/" + p(r.value.descriptionMax) + " · " + p(C.value.note), 3)
      ]),
      g[0] || (g[0] = s("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function Uy() {
  ke("radio", Uu), ke("checkboxlist", Ku), ke("tags", Qu), ke("colour", cd), ke("slider", hd), ke("visual-select", zd), ke("markdown", $u), ke("code", Pu), ke("seo-preview", Ry), st("swatch", jd), st("voucher-code-box", Ty), st("document-colour-mode", Dy);
}
function ra() {
  const e = G(null), l = G(!1);
  let a = null;
  return ue(() => {
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
const Hy = /* @__PURE__ */ z({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = ra();
    return (r, o) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: j(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: Q({ transitionDelay: `${e.delay}ms` })
    }, [
      H(r.$slots, "default")
    ], 6));
  }
}), qy = ["id"], ye = /* @__PURE__ */ z({
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
      s("div", {
        class: j(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        E(Hy, null, {
          default: L(() => [
            H(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, qy));
  }
}), Ky = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Gy = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, Wy = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Oe = /* @__PURE__ */ z({
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
      e.eyebrow ? (t(), n("p", Ky, p(e.eyebrow), 1)) : _("", !0),
      e.title ? (t(), n("h2", Gy, p(e.title), 1)) : _("", !0),
      e.body ? (t(), n("p", Wy, p(e.body), 1)) : _("", !0)
    ], 2)) : _("", !0);
  }
});
function Zy() {
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
  return ue(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), me(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const Jy = { class: "pk-tilt-inner relative h-full" }, Yy = /* @__PURE__ */ z({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = Zy();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      s("div", Jy, [
        r[0] || (r[0] = s("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        H(a.$slots, "default")
      ])
    ], 512));
  }
}), Xy = { class: "flex flex-col gap-10" }, Qy = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, e0 = { class: "text-base font-semibold" }, t0 = { class: "text-sm text-pretty text-muted-foreground" }, a0 = /* @__PURE__ */ z({
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
    return (a, r) => (t(), F(ye, null, {
      default: L(() => [
        s("div", Xy, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("div", Qy, [
            (t(!0), n(P, null, D(e.items ?? [], (o, i) => (t(), F(Yy, {
              key: i,
              class: j(l(o.span))
            }, {
              default: L(() => [
                s("div", {
                  class: j([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    o.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  s("h3", e0, p(o.title), 1),
                  s("p", t0, p(o.body), 1)
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
}), n0 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, l0 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, s0 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, o0 = ["href"], r0 = /* @__PURE__ */ z({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, null, {
      default: L(() => [
        s("div", n0, [
          s("h2", l0, p(e.title), 1),
          e.body ? (t(), n("p", s0, p(e.body), 1)) : _("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, p(e.label), 9, o0)) : _("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), i0 = { class: "flex flex-col gap-8" }, u0 = { class: "divide-y rounded-lg border" }, d0 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, c0 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, f0 = /* @__PURE__ */ z({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, { narrow: "" }, {
      default: L(() => [
        s("div", i0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("div", u0, [
            (t(!0), n(P, null, D(e.items ?? [], (r, o) => (t(), n("details", {
              key: o,
              class: "group"
            }, [
              s("summary", d0, [
                R(p(r.question) + " ", 1),
                a[0] || (a[0] = s("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              s("p", c0, p(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), m0 = { class: "flex flex-col gap-10" }, p0 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, v0 = { class: "text-sm font-semibold" }, g0 = { class: "text-sm text-pretty text-muted-foreground" }, h0 = /* @__PURE__ */ z({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, null, {
      default: L(() => [
        s("div", m0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("ul", p0, [
            (t(!0), n(P, null, D(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              s("h3", v0, p(r.title), 1),
              s("p", g0, p(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), b0 = { class: "flex flex-col items-center gap-6 text-center" }, x0 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, y0 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, k0 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, $0 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, w0 = ["href"], C0 = ["href"], _0 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, M0 = /* @__PURE__ */ z({
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
    return (l, a) => (t(), F(ye, null, {
      default: L(() => [
        s("div", b0, [
          e.eyebrow ? (t(), n("p", x0, p(e.eyebrow), 1)) : _("", !0),
          s("h1", y0, p(e.title), 1),
          e.body ? (t(), n("p", k0, p(e.body), 1)) : _("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", $0, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, p(e.secondaryLabel), 9, w0)) : _("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, p(e.primaryLabel), 9, C0)) : _("", !0)
          ])) : _("", !0),
          e.note ? (t(), n("p", _0, p(e.note), 1)) : _("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), S0 = { class: "flex flex-col items-center gap-6" }, B0 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, P0 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, z0 = /* @__PURE__ */ z({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, { muted: "" }, {
      default: L(() => [
        s("div", S0, [
          e.title ? (t(), n("p", B0, p(e.title), 1)) : _("", !0),
          s("ul", P0, [
            (t(!0), n(P, null, D(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, p(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), A0 = { class: "flex flex-col gap-10" }, j0 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, O0 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, L0 = ["aria-pressed"], V0 = ["aria-pressed"], D0 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, T0 = { class: "grid gap-4 md:grid-cols-3" }, F0 = { class: "flex flex-col gap-1" }, E0 = { class: "text-sm font-semibold" }, I0 = { class: "flex items-baseline gap-1" }, N0 = { class: "text-3xl font-semibold tracking-tight" }, R0 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, U0 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, H0 = { class: "flex flex-col gap-2 text-sm" }, q0 = { class: "text-muted-foreground" }, K0 = ["href"], G0 = /* @__PURE__ */ z({
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
    return (i, u) => (t(), F(ye, { muted: "" }, {
      default: L(() => [
        s("div", A0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", j0, [
            s("div", O0, [
              s("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, L0),
              s("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, V0)
            ]),
            e.annualNote ? (t(), n("p", D0, p(e.annualNote), 1)) : _("", !0)
          ])) : _("", !0),
          s("ul", T0, [
            (t(!0), n(P, null, D(e.items ?? [], (d, m) => (t(), n("li", {
              key: m,
              class: j(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              s("div", F0, [
                s("h3", E0, p(d.name), 1),
                s("p", I0, [
                  s("span", N0, p(o(d)), 1),
                  d.period ? (t(), n("span", R0, p(d.period), 1)) : _("", !0)
                ]),
                d.body ? (t(), n("p", U0, p(d.body), 1)) : _("", !0)
              ]),
              s("ul", H0, [
                (t(!0), n(P, null, D(d.features ?? [], (k, f) => (t(), n("li", {
                  key: f,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = s("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  s("span", q0, p(k.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: j([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, p(d.label), 11, K0)) : _("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function W0() {
  const e = G(null);
  let l = null, a = null, r = !1, o = !1;
  function i() {
    if (r = !1, !l || !o)
      return;
    const d = l.getBoundingClientRect(), m = d.height + window.innerHeight, k = m <= 0 ? 0 : (window.innerHeight - d.top) / m;
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
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((m) => {
        o = m.some((k) => k.isIntersecting), o && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), me(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const Z0 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, J0 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Y0 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, X0 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Q0 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, e2 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, t2 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, a2 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, n2 = { class: "ml-3 truncate text-xs text-muted-foreground" }, l2 = { class: "flex" }, s2 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, o2 = { class: "min-w-0 flex-1 p-4" }, r2 = { class: "flex flex-col divide-y rounded-md border" }, i2 = /* @__PURE__ */ z({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = W0();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      s("div", Z0, [
        s("div", J0, [
          s("div", Y0, [
            s("h2", X0, p(e.title), 1),
            e.body ? (t(), n("p", Q0, p(e.body), 1)) : _("", !0)
          ]),
          s("div", e2, [
            s("div", t2, [
              s("div", a2, [
                r[0] || (r[0] = s("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = s("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = s("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                s("span", n2, p(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              s("div", l2, [
                s("div", s2, [
                  (t(), n(P, null, D(6, (o) => s("span", {
                    key: o,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: Q({ width: `${55 + o * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                s("div", o2, [
                  r[4] || (r[4] = s("div", { class: "mb-3 flex gap-2" }, [
                    s("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    s("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    s("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  s("div", r2, [
                    (t(!0), n(P, null, D(e.rows, (o) => (t(), n("div", {
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
}), u2 = /* @__PURE__ */ z({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = ra(), o = G(0);
    return re(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        o.value = l.to;
        return;
      }
      const d = performance.now(), m = (k) => {
        const f = Math.min((k - d) / l.duration, 1);
        o.value = l.to * (1 - Math.pow(1 - f, 3)), f < 1 ? requestAnimationFrame(m) : o.value = l.to;
      };
      requestAnimationFrame(m);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, p(e.prefix ?? "") + p(o.value.toFixed(e.decimals)) + p(e.suffix ?? ""), 513));
  }
}), d2 = { class: "flex flex-col gap-10" }, c2 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, f2 = { class: "order-2 text-sm text-muted-foreground" }, m2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, p2 = /* @__PURE__ */ z({
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
    return (a, r) => (t(), F(ye, { muted: "" }, {
      default: L(() => [
        s("div", d2, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("dl", c2, [
            (t(!0), n(P, null, D(e.items ?? [], (o, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              s("dt", f2, p(o.label), 1),
              s("dd", m2, [
                l(o.value) ? (t(), F(u2, {
                  key: 0,
                  to: l(o.value).number,
                  prefix: l(o.value).prefix,
                  suffix: l(o.value).suffix,
                  decimals: l(o.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(P, { key: 1 }, [
                  R(p(o.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), v2 = { class: "flex flex-col gap-10" }, g2 = { class: "grid gap-6 md:grid-cols-3" }, h2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, b2 = { class: "text-sm font-semibold" }, x2 = { class: "text-sm text-pretty text-muted-foreground" }, y2 = /* @__PURE__ */ z({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, null, {
      default: L(() => [
        s("div", v2, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("ol", g2, [
            (t(!0), n(P, null, D(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-2"
            }, [
              s("span", h2, p(o + 1), 1),
              s("h3", b2, p(r.title), 1),
              s("p", x2, p(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), k2 = { class: "flex flex-col gap-10" }, $2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, w2 = { class: "text-pretty text-sm leading-relaxed" }, C2 = { class: "mt-auto flex items-center gap-3" }, _2 = ["src"], M2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, S2 = { class: "min-w-0" }, B2 = { class: "block truncate text-sm font-medium" }, P2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, z2 = /* @__PURE__ */ z({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, null, {
      default: L(() => [
        s("div", k2, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("ul", $2, [
            (t(!0), n(P, null, D(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              s("blockquote", w2, " “" + p(r.quote) + "” ", 1),
              s("figcaption", C2, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, _2)) : (t(), n("span", M2, p((r.name ?? "?").slice(0, 1)), 1)),
                s("span", S2, [
                  s("span", B2, p(r.name), 1),
                  r.role ? (t(), n("span", P2, p(r.role), 1)) : _("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Cw = /* @__PURE__ */ z({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: M0,
      logos: z0,
      features: h0,
      bento: a0,
      showcase: i2,
      steps: y2,
      stats: p2,
      testimonials: z2,
      pricing: G0,
      faq: f0,
      cta: r0
    }, o = $(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(P, null, D(o.value, (d) => (t(), F(je(d.component), ee({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), A2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, _w = /* @__PURE__ */ z({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", A2, [
      s("div", {
        class: j([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      s("div", {
        class: j([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      s("div", {
        class: j([
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
}), j2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Mw = /* @__PURE__ */ z({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", j2, [...a[0] || (a[0] = [
      pt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), O2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Sw = /* @__PURE__ */ z({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", O2, [...a[0] || (a[0] = [
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
Uy();
const Bw = "0.0.1";
export {
  W$ as AdminDirectory,
  Vo as Alert,
  Do as AlertDescription,
  To as AlertTitle,
  tk as AppearanceDrawer,
  Zk as Avatar,
  Jk as AvatarFallback,
  Yk as AvatarImage,
  $t as BADGE_VARIANTS,
  Y2 as BadgeResolver,
  N$ as BarChart,
  Xk as Breadcrumb,
  Qk as BreadcrumbEllipsis,
  e$ as BreadcrumbItem,
  t$ as BreadcrumbLink,
  a$ as BreadcrumbList,
  n$ as BreadcrumbPage,
  l$ as BreadcrumbSeparator,
  N2 as BulkActions,
  w$ as Card,
  C$ as CardAction,
  _$ as CardContent,
  M$ as CardDescription,
  S$ as CardFooter,
  B$ as CardHeader,
  P$ as CardTitle,
  Eh as CartPanel,
  nw as CatalogBrowser,
  dv as CatalogCard,
  oa as CatalogFilterSheet,
  Mt as CatalogGrid,
  tw as CatalogInspect,
  B1 as CatalogItemDetail,
  aw as CatalogItemView,
  lw as CatalogRegister,
  ew as CatalogTill,
  Vm as ChartCard,
  Ze as ChartTooltip,
  kr as Checkbox,
  K2 as CheckboxCell,
  G2 as CodeCell,
  q2 as ColourCell,
  K$ as ComboChart,
  ow as DASHBOARD_HIDDEN_STORAGE_KEY,
  cb as DASHBOARD_HIDE_KEY,
  rw as DashboardShortcuts,
  Jn as DataTable,
  f$ as Dialog,
  m$ as DialogClose,
  p$ as DialogContent,
  v$ as DialogDescription,
  g$ as DialogFooter,
  h$ as DialogHeader,
  yr as DialogOverlay,
  b$ as DialogScrollContent,
  x$ as DialogTitle,
  y$ as DialogTrigger,
  W$ as DirectoryPage,
  Vk as DropdownMenu,
  Dk as DropdownMenuCheckboxItem,
  Tk as DropdownMenuContent,
  Fk as DropdownMenuGroup,
  Ek as DropdownMenuItem,
  Ik as DropdownMenuLabel,
  Aw as DropdownMenuPortal,
  Nk as DropdownMenuRadioGroup,
  Rk as DropdownMenuRadioItem,
  Uk as DropdownMenuSeparator,
  Hk as DropdownMenuShortcut,
  qk as DropdownMenuSub,
  Kk as DropdownMenuSubContent,
  Gk as DropdownMenuSubTrigger,
  Wk as DropdownMenuTrigger,
  Z2 as EditableCell,
  qe as FormFieldControl,
  G$ as HeatmapChart,
  at as ICON_PATHS,
  U2 as IconCell,
  H2 as ImageCell,
  xw as InfoNode,
  Uo as JPEG_IMAGE_ERROR,
  W2 as KeyValueCell,
  k$ as Label,
  Jc as LineChart,
  xh as LineItems,
  Xe as MiniStatCard,
  s$ as NavigationMenu,
  o$ as NavigationMenuContent,
  r$ as NavigationMenuIndicator,
  i$ as NavigationMenuItem,
  u$ as NavigationMenuLink,
  d$ as NavigationMenuList,
  c$ as NavigationMenuTrigger,
  br as NavigationMenuViewport,
  Ro as OPAQUE_IMAGE_ERROR,
  yw as PaymentGatewaySettings,
  xy as PaymentGateways,
  R$ as PieChart,
  ok as PkAlertError,
  _w as PkAuroraBackdrop,
  Re as PkBadge,
  a0 as PkBento,
  ak as PkBottomNav,
  z$ as PkBoundary,
  T$ as PkBuilder,
  ne as PkButton,
  A$ as PkCard,
  Ku as PkCheckboxList,
  la as PkCodeBox,
  Pu as PkCodeInput,
  cd as PkColourPicker,
  Sw as PkConsoleBackdrop,
  u2 as PkCountUp,
  r0 as PkCta,
  j$ as PkDeviceFrame,
  uc as PkDocument,
  He as PkDropdown,
  Mw as PkEditorialBackdrop,
  f0 as PkFaq,
  h0 as PkFeatureGrid,
  he as PkFieldLabel,
  ta as PkFileUpload,
  Ce as PkHeading,
  M0 as PkHero,
  Si as PkKeyValue,
  Cw as PkLandingSections,
  z0 as PkLogoCloud,
  $u as PkMarkdownInput,
  it as PkModal,
  _t as PkMultiSelect,
  lk as PkOtpInput,
  vw as PkPasskeyRegister,
  rk as PkPasswordInput,
  G0 as PkPricing,
  ih as PkQtyStepper,
  cs as PkQueryBuilder,
  Uu as PkRadioGroup,
  D$ as PkRepeater,
  Hy as PkReveal,
  Ti as PkRichEditor,
  ye as PkSection,
  Oe as PkSectionHeading,
  i2 as PkShowcase,
  H1 as PkSignaturePad,
  De as PkSkeleton,
  St as PkSlideover,
  hd as PkSlider,
  nk as PkSpinner,
  p2 as PkStats,
  pe as PkStatusBadge,
  Ur as PkStepIndicator,
  y2 as PkSteps,
  jd as PkSwatchPreview,
  Qu as PkTagsInput,
  z2 as PkTestimonials,
  fe as PkTextInput,
  Yy as PkTiltCard,
  zd as PkVisualSelect,
  Tv as PlanCard,
  Q$ as PlanEditor,
  X$ as PlanGrid,
  q$ as PolarAreaChart,
  H$ as RadarChart,
  X2 as RecordActions,
  gw as RecordForm,
  R2 as RelationPanel,
  Np as STATUS_TONES,
  U$ as ScatterChart,
  Gx as SchemaNode,
  J$ as SegmentedBar,
  dw as SelectionBar,
  mr as Separator,
  uw as SetupChecklist,
  Qt as ShadcnInput,
  Zo as Sheet,
  ik as SheetClose,
  Yo as SheetContent,
  Xo as SheetDescription,
  uk as SheetFooter,
  Qo as SheetHeader,
  er as SheetTitle,
  dk as SheetTrigger,
  ep as ShortcutsWidget,
  ck as Sidebar,
  fk as SidebarContent,
  mk as SidebarFooter,
  pk as SidebarGroup,
  vk as SidebarGroupAction,
  gk as SidebarGroupContent,
  hk as SidebarGroupLabel,
  bk as SidebarHeader,
  xk as SidebarInput,
  yk as SidebarInset,
  kk as SidebarMenu,
  $k as SidebarMenuAction,
  wk as SidebarMenuBadge,
  _k as SidebarMenuButton,
  Mk as SidebarMenuItem,
  Sk as SidebarMenuSkeleton,
  Bk as SidebarMenuSub,
  Pk as SidebarMenuSubButton,
  zk as SidebarMenuSubItem,
  Ak as SidebarProvider,
  jk as SidebarRail,
  Ok as SidebarSeparator,
  Lk as SidebarTrigger,
  sw as SignatureStudio,
  tt as Sparkline,
  $$ as Spinner,
  Z$ as StatCard,
  Y$ as StatListChart,
  iw as StatStrip,
  Ve as Switch,
  ea as TRANSPARENT_IMAGE_HELP,
  cw as TablePagination,
  fw as TableShell,
  mw as TableTabs,
  pw as TableToolbar,
  I$ as ThemeToggle,
  dr as Tooltip,
  cr as TooltipContent,
  Ck as TooltipProvider,
  fr as TooltipTrigger,
  sa as TrendBadge,
  hw as UnsavedBar,
  Fo as alertVariants,
  qs as appearanceVars,
  ft as applyAppearance,
  Wo as assertTransparentImage,
  Zt as buttonClasses,
  Qe as catalogFiltersActive,
  J as cn,
  cv as cycleLabel,
  _e as emptyCatalogFilters,
  Hr as fieldControl,
  qg as findExactSku,
  fv as formatPerkValue,
  ys as hasBadgeValue,
  O$ as hasFieldControl,
  F$ as hasOptionPreview,
  se as iconPath,
  Ko as imageHasTransparency,
  Q2 as initializeAppearance,
  ct as isDark,
  Bt as matchCatalogItem,
  xr as navigationMenuTriggerStyle,
  bd as optionPreview,
  mv as perkGranted,
  Ct as readAppearance,
  Uy as registerBuiltInFieldControls,
  ke as registerFieldControl,
  st as registerOptionPreview,
  L$ as registeredFieldTypes,
  xd as registeredOptionPreviews,
  V$ as resetFieldControls,
  E$ as resetOptionPreviews,
  ek as setAppearancePersister,
  pr as sidebarMenuButtonVariants,
  qp as statusBadgeVariant,
  Hp as statusTone,
  sk as toUrl,
  Xt as useAppearance,
  kw as useColumnVisibility,
  $w as useLiveUpdates,
  Zy as usePointer,
  ra as useReveal,
  J2 as useSchemaColumns,
  W0 as useScrollProgress,
  et as useSidebar,
  ww as useTenantTheme,
  bw as useUnsavedChanges,
  Bw as version
};
//# sourceMappingURL=index.js.map
