import './ui.css';
import { defineComponent as P, ref as G, computed as $, openBlock as t, createElementBlock as n, normalizeClass as A, createElementVNode as s, createCommentVNode as _, Fragment as z, renderList as D, createTextVNode as R, toDisplayString as p, withModifiers as ce, createStaticVNode as pt, renderSlot as U, watch as re, nextTick as we, onBeforeUnmount as me, createBlock as F, Teleport as Te, createVNode as E, Transition as ze, withCtx as L, onMounted as ue, normalizeStyle as Q, unref as h, resolveDynamicComponent as Ae, resolveComponent as vt, withDirectives as oe, vModelSelect as Le, vModelDynamic as fa, isRef as ma, vModelText as Se, useTemplateRef as pa, mergeProps as ee, normalizeProps as be, guardReactiveProps as Be, onErrorCaptured as va, provide as ga, inject as It, defineAsyncComponent as zt, vShow as je, useSlots as ha, markRaw as ba, withKeys as xa, reactive as Ue, useModel as Ke, mergeModels as Me, createSlots as ya, shallowRef as ka, watchEffect as $a } from "vue";
import { AlertCircle as wa, EyeOff as Ca, Eye as _a, X as gt, PanelLeftOpen as Sa, PanelLeftClose as Ma, Check as Nt, Circle as Ba, ChevronRight as Rt, MoreHorizontal as Pa, ChevronDown as za, Loader2Icon as Aa } from "@lucide/vue";
import { cva as ht } from "class-variance-authority";
import { clsx as ja } from "clsx";
import { twMerge as Oa } from "tailwind-merge";
import { useVModel as Ut, reactiveOmit as le, useMediaQuery as La, useEventListener as Va, defaultDocument as Da } from "@vueuse/core";
import { useForwardPropsEmits as de, DialogRoot as Ht, DialogClose as Fe, DialogOverlay as bt, DialogPortal as xt, DialogContent as yt, DialogDescription as qt, DialogTitle as Kt, DialogTrigger as Gt, createContext as Ta, Primitive as Ee, TooltipRoot as Fa, TooltipPortal as Ea, TooltipContent as Ia, TooltipArrow as Na, TooltipProvider as Wt, TooltipTrigger as Ra, Separator as Ua, DropdownMenuRoot as Ha, DropdownMenuCheckboxItem as qa, DropdownMenuItemIndicator as Zt, DropdownMenuPortal as Ka, DropdownMenuContent as Ga, DropdownMenuGroup as Wa, useForwardProps as xe, DropdownMenuItem as Za, DropdownMenuLabel as Ja, DropdownMenuRadioGroup as Ya, DropdownMenuRadioItem as Xa, DropdownMenuSeparator as Qa, DropdownMenuSub as en, DropdownMenuSubContent as tn, DropdownMenuSubTrigger as an, DropdownMenuTrigger as nn, AvatarRoot as ln, AvatarFallback as sn, AvatarImage as on, NavigationMenuViewport as rn, NavigationMenuRoot as un, NavigationMenuContent as dn, NavigationMenuIndicator as cn, NavigationMenuItem as fn, NavigationMenuLink as mn, NavigationMenuList as pn, NavigationMenuTrigger as vn, Label as gn, CheckboxRoot as hn, CheckboxIndicator as bn, SwitchRoot as xn, SwitchThumb as yn } from "reka-ui";
import { DropdownMenuPortal as Nw } from "reka-ui";
import { usePage as Jt, Link as kn } from "@inertiajs/vue3";
const $n = { class: "w-full border-collapse text-sm" }, wn = { class: "bg-background sticky top-0 z-10" }, Cn = { class: "bg-muted/50" }, _n = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Sn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Mn = ["checked", "indeterminate"], Bn = ["onClick"], Pn = {
  key: 0,
  class: "text-xs"
}, zn = {
  key: 1,
  class: "text-xs opacity-40"
}, An = { key: 1 }, jn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, On = {
  key: 0,
  class: "bg-muted/40"
}, Ln = ["colspan"], Vn = { class: "text-muted-foreground/70" }, Dn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Tn = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Fn = {
  key: 1,
  class: "px-3 py-2"
}, En = ["checked", "aria-label", "onChange"], In = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Nn = ["aria-label", "onClick"], Rn = { class: "text-xs" }, Un = { key: 1 }, Hn = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, qn = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, Kn = { key: 0 }, Gn = { class: "text-muted-foreground block text-[10px] font-medium" }, Wn = { class: "font-semibold tabular-nums" }, Zn = { key: 1 }, Jn = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, Yn = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, Xn = { class: "font-medium" }, Qn = {
  key: 0,
  class: "text-sm"
}, el = /* @__PURE__ */ P({
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
    function f() {
      i.value = null, u.value = null;
    }
    function k(T) {
      return i.value === null || u.value !== T ? "" : i.value > T ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function m(T, O) {
      i.value !== null && (O.preventDefault(), u.value = T);
    }
    function b(T) {
      const O = i.value;
      if (i.value = null, u.value = null, O === null || O === T)
        return;
      const j = a.rows.map((I) => I[a.rowKey]), [W] = j.splice(O, 1);
      j.splice(T, 0, W), S("reorder", j);
    }
    const S = l;
    function C(T, O) {
      !a.rowClickable || a.reordering || O.button !== 0 || O.metaKey || O.ctrlKey || O.shiftKey || O.altKey || O.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || S("row-click", T);
    }
    const w = G(null), y = $(() => a.columns.filter((T) => !a.hidden?.has(T.key))), g = $(() => a.rows.map((T) => T[a.rowKey])), v = $(
      () => g.value.length > 0 && g.value.every((T) => a.selected?.has(T))
    ), c = $(
      () => !v.value && g.value.some((T) => a.selected?.has(T))
    );
    function x(T) {
      return T.sortKey ?? T.key;
    }
    function M(T) {
      return a.sort === x(T);
    }
    async function B(T, O, j) {
      try {
        await navigator.clipboard.writeText(String(j)), w.value = `${T}-${O.key}`, setTimeout(() => w.value = null, 1200);
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
      const O = a.summaries?.[T], j = a.summaryValues?.[T];
      if (!O)
        return "";
      if (j == null)
        return "-";
      const W = O.divideBy ? j / O.divideBy : j, I = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: O.decimals,
        maximumFractionDigits: O.decimals
      }).format(W);
      return `${O.prefix ?? ""}${I}${O.suffix ?? ""}`;
    }
    return (T, O) => (t(), n("div", {
      class: A(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      s("table", $n, [
        s("thead", wn, [
          s("tr", Cn, [
            e.reordering ? (t(), n("th", _n)) : _("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Sn, [
              s("input", {
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: v.value,
                indeterminate: c.value,
                "aria-label": "Select all rows on this page",
                onChange: O[0] || (O[0] = (j) => S("toggle-page", !v.value))
              }, null, 40, Mn)
            ])) : _("", !0),
            (t(!0), n(z, null, D(y.value, (j) => (t(), n("th", {
              key: j.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              j.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (W) => S("sort", x(j))
              }, [
                R(p(j.label) + " ", 1),
                M(j) ? (t(), n("span", Pn, p(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", zn, "↕"))
              ], 8, Bn)) : (t(), n("span", An, p(j.label), 1))
            ]))), 128)),
            T.$slots.actions ? (t(), n("th", jn, [...O[1] || (O[1] = [
              s("span", { class: "sr-only" }, "Actions", -1)
            ])])) : _("", !0)
          ])
        ]),
        s("tbody", {
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, D(e.rows, (j, W) => (t(), n(z, {
            key: j[e.rowKey]
          }, [
            e.groupBy && r(W) ? (t(), n("tr", On, [
              s("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                s("span", Vn, p(e.groupBy.label) + ":", 1),
                R(" " + p(o(j)), 1)
              ], 8, Ln)
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
              onDragstart: (I) => d(W, I),
              onDragover: (I) => m(W, I),
              onDrop: ce((I) => b(W), ["prevent"]),
              onDragend: f,
              onContextmenu: (I) => S("row-contextmenu", j, I),
              onClick: (I) => C(j, I)
            }, [
              e.reordering ? (t(), n("td", Tn, [...O[2] || (O[2] = [
                pt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-4805f648><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4805f648><circle cx="9" cy="6" r="1.5" data-v-4805f648></circle><circle cx="15" cy="6" r="1.5" data-v-4805f648></circle><circle cx="9" cy="12" r="1.5" data-v-4805f648></circle><circle cx="15" cy="12" r="1.5" data-v-4805f648></circle><circle cx="9" cy="18" r="1.5" data-v-4805f648></circle><circle cx="15" cy="18" r="1.5" data-v-4805f648></circle></svg></span>', 1)
              ])])) : _("", !0),
              e.selectable && !e.reordering ? (t(), n("td", Fn, [
                s("input", {
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  checked: e.selected?.has(j[e.rowKey]),
                  "aria-label": `Select row ${j[e.rowKey]}`,
                  onChange: (I) => S("toggle-row", j[e.rowKey])
                }, null, 40, En)
              ])) : _("", !0),
              (t(!0), n(z, null, D(y.value, (I) => (t(), n("td", {
                key: I.key,
                class: A(["px-3 py-2 whitespace-nowrap", I.cellClass])
              }, [
                U(T.$slots, `cell:${I.key}`, {
                  row: j,
                  value: j[I.key],
                  column: I
                }, () => [
                  I.copyable ? (t(), n("span", In, [
                    R(p(j[I.key]) + " ", 1),
                    s("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${I.label.toLowerCase()}`,
                      onClick: (H) => B(String(j[e.rowKey]), I, j[I.key])
                    }, [
                      s("span", Rn, p(w.value === `${j[e.rowKey]}-${I.key}` ? "✓" : "⧉"), 1)
                    ], 8, Nn)
                  ])) : (t(), n("span", Un, p(j[I.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              T.$slots.actions ? (t(), n("td", Hn, [
                U(T.$slots, "actions", { row: j }, void 0, !0)
              ])) : _("", !0)
            ], 42, Dn)
          ], 64))), 128))
        ], 2),
        K.value ? (t(), n("tfoot", qn, [
          s("tr", null, [
            e.selectable ? (t(), n("td", Kn)) : _("", !0),
            (t(!0), n(z, null, D(e.columns, (j) => (t(), n(z, {
              key: `s-${j.key}`
            }, [
              e.hidden?.has(j.key) ? _("", !0) : (t(), n("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", j.cellClass])
              }, [
                N(j.key) ? (t(), n(z, { key: 0 }, [
                  s("span", Gn, p(N(j.key).label), 1),
                  s("span", Wn, p(Y(j.key)), 1)
                ], 64)) : _("", !0)
              ], 2))
            ], 64))), 128)),
            T.$slots.actions ? (t(), n("td", Zn)) : _("", !0)
          ])
        ])) : _("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", Jn, [
        O[3] || (O[3] = s("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        U(T.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", Yn, [
        s("p", Xn, p(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", Qn, p(e.emptyHint), 1)) : _("", !0)
      ])) : _("", !0)
    ], 2));
  }
}), kt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, o] of l)
    a[r] = o;
  return a;
}, tl = /* @__PURE__ */ kt(el, [["__scopeId", "data-v-4805f648"]]), al = ["aria-label"], nl = { class: "border-b px-5 py-4" }, ll = { class: "text-base font-semibold" }, sl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, ol = { class: "px-5 py-4" }, rl = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, it = /* @__PURE__ */ P({
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
      if (m.key !== "Tab" || !o.value)
        return;
      const b = o.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (b.length === 0)
        return;
      const S = b[0], C = b[b.length - 1];
      m.shiftKey && document.activeElement === S ? (m.preventDefault(), C.focus()) : !m.shiftKey && document.activeElement === C && (m.preventDefault(), S.focus());
    }
    return re(
      () => a.open,
      (m) => {
        m ? (i = document.activeElement, document.addEventListener("keydown", k), we(
          () => o.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", k), i?.focus(), i = null);
      }
    ), me(() => document.removeEventListener("keydown", k)), (m, b) => (t(), F(Te, { to: "body" }, [
      E(ze, {
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
            onPointerup: f
          }, [
            s("div", {
              ref_key: "panel",
              ref: o,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
            }, [
              s("div", nl, [
                s("h2", ll, p(e.title), 1),
                e.description ? (t(), n("p", sl, p(e.description), 1)) : _("", !0)
              ]),
              s("div", ol, [
                U(m.$slots, "default")
              ]),
              s("div", rl, [
                U(m.$slots, "footer")
              ])
            ], 8, al)
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
const il = 160, He = /* @__PURE__ */ P({
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
    let f = null;
    function k(x) {
      !a.dismissOnPanelClick || x.target?.closest("input, select, textarea, label, [data-keep-open]") || w();
    }
    async function m() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await we(), y());
    }
    function b() {
      f = setTimeout(w, 180);
    }
    async function S() {
      d.value = null, r.value = !r.value, r.value && (await we(), y());
    }
    async function C(x, M) {
      d.value = { x, y: M }, r.value = !0, await we(), y();
    }
    function w() {
      r.value = !1, d.value = null;
    }
    function y() {
      const x = o.value, M = i.value;
      if (!x || !M)
        return;
      const B = M.getBoundingClientRect(), K = 8, N = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : x.getBoundingClientRect();
      let Y, T;
      if (a.placement === "bottom")
        Y = N.bottom + a.offset, Y + B.height > window.innerHeight - K && N.top - B.height - a.offset > K && (Y = N.top - B.height - a.offset), T = a.align === "end" && !d.value ? N.right - B.width : N.left;
      else {
        Y = N.top;
        const O = a.placement === "right", j = N.right + a.offset + B.width < window.innerWidth - K, W = N.left - a.offset - B.width > K;
        T = (O ? j || !W : !W && j) ? N.right + a.offset : N.left - a.offset - B.width;
      }
      T = Math.min(Math.max(K, T), window.innerWidth - B.width - K), Y = Math.min(Math.max(K, Y), window.innerHeight - B.height - K), u.value = { top: Y, left: T, minWidth: Math.max(N.width, il) };
    }
    function g(x) {
      if (!r.value)
        return;
      const M = x.target;
      o.value?.contains(M) || i.value?.contains(M) || (M instanceof Element ? M : M.parentElement)?.closest("[data-pk-overlay]") || w();
    }
    function v(x) {
      x.key === "Escape" && r.value && (x.stopPropagation(), w());
    }
    function c() {
      if (r.value) {
        if (d.value) {
          w();
          return;
        }
        y();
      }
    }
    return ue(() => {
      document.addEventListener("pointerdown", g), document.addEventListener("keydown", v), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), me(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", g), document.removeEventListener("keydown", v), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), l({ close: w, openAt: C }), (x, M) => (t(), n("div", {
      ref_key: "root",
      ref: o,
      class: "relative",
      onPointerenter: M[2] || (M[2] = (B) => e.hoverable && m()),
      onPointerleave: M[3] || (M[3] = (B) => e.hoverable && b())
    }, [
      s("div", { onClick: S }, [
        U(x.$slots, "trigger", { open: r.value })
      ]),
      (t(), F(Te, { to: "body" }, [
        E(ze, {
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
              class: A([
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
              onPointerenter: M[0] || (M[0] = (B) => e.hoverable && m()),
              onPointerleave: M[1] || (M[1] = (B) => e.hoverable && b()),
              onClick: k
            }, [
              U(x.$slots, "panel", { close: w })
            ], 38)) : _("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), ul = ["disabled"], dl = { class: "py-0.5" }, cl = ["disabled", "onClick"], fl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ml = ["d"], pl = ["disabled"], vl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gl = ["d"], hl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, bl = ["disabled", "onClick"], xl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yl = ["d"], kl = { class: "text-muted-foreground text-sm" }, $l = { class: "text-foreground font-medium tabular-nums" }, wl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Cl = ["disabled"], _l = { class: "text-muted-foreground text-sm" }, Sl = { class: "text-foreground font-medium tabular-nums" }, Ml = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Bl = ["disabled"], W2 = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null), i = G(!1), u = $(() => a.allMatching ? a.total : a.count), d = $(() => u.value !== void 0), f = $(() => d.value && u.value === 0), k = $(() => a.actions.filter((v) => !v.destructive)), m = $(() => a.actions.filter((v) => v.destructive)), b = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function S(v) {
      return b[v.color ?? "gray"] ?? b.gray;
    }
    function C(v) {
      if (v.confirmation) {
        o.value = v;
        return;
      }
      r("run", v.key);
    }
    function w() {
      o.value && r("run", o.value.key), o.value = null;
    }
    function y() {
      i.value = !1, r("export");
    }
    const g = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), n(z, null, [
      E(He, null, {
        trigger: L(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...c[5] || (c[5] = [
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
          ])], 8, ul)
        ]),
        panel: L(() => [
          s("div", dl, [
            (t(!0), n(z, null, D(k.value, (x) => (t(), n("button", {
              key: x.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", S(x)]),
              disabled: e.busy,
              onClick: (M) => C(x)
            }, [
              (t(), n("svg", fl, [
                s("path", {
                  d: h(se)(x.icon)
                }, null, 8, ml)
              ])),
              R(" " + p(x.label), 1)
            ], 10, cl))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (x) => i.value = !0)
            }, [
              (t(), n("svg", vl, [
                s("path", {
                  d: h(se)("download")
                }, null, 8, gl)
              ])),
              c[6] || (c[6] = R(" Export CSV ", -1))
            ], 8, pl)) : _("", !0),
            m.value.length ? (t(), n("div", hl, [
              (t(!0), n(z, null, D(m.value, (x) => (t(), n("button", {
                key: x.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (M) => C(x)
              }, [
                (t(), n("svg", xl, [
                  s("path", {
                    d: h(se)(x.icon ?? "trash")
                  }, null, 8, yl)
                ])),
                R(" " + p(x.label), 1)
              ], 8, bl))), 128))
            ])) : _("", !0)
          ])
        ]),
        _: 1
      }),
      E(it, {
        open: o.value !== null,
        title: o.value?.label ?? "",
        description: o.value?.confirmation ?? "",
        onClose: c[2] || (c[2] = (x) => o.value = null)
      }, {
        footer: L(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[1] || (c[1] = (x) => o.value = null)
          }, " Cancel "),
          s("button", {
            type: "button",
            class: A([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              o.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || f.value,
            onClick: w
          }, p(o.value?.label), 11, Cl)
        ]),
        default: L(() => [
          s("p", kl, [
            c[7] || (c[7] = R(" This will affect ", -1)),
            s("span", $l, [
              d.value ? (t(), n(z, { key: 1 }, [
                R(p(g(u.value)) + " record" + p(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            c[8] || (c[8] = R(" . ", -1))
          ]),
          f.value ? (t(), n("p", wl, " Nothing matches the current filters - there is nothing to " + p(o.value?.label?.toLowerCase()) + ". ", 1)) : _("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(it, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: c[4] || (c[4] = (x) => i.value = !1)
      }, {
        footer: L(() => [
          s("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[3] || (c[3] = (x) => i.value = !1)
          }, " Cancel "),
          s("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || f.value,
            onClick: y
          }, " Export CSV ", 8, Bl)
        ]),
        default: L(() => [
          s("p", _l, [
            c[9] || (c[9] = R(" This will export ", -1)),
            s("span", Sl, [
              d.value ? (t(), n(z, { key: 1 }, [
                R(p(g(u.value)) + " record" + p(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            c[10] || (c[10] = R(" . ", -1))
          ]),
          f.value ? (t(), n("p", Ml, " Nothing matches the current filters - there is nothing to export. ")) : _("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Pl = { class: "bg-card overflow-hidden rounded-lg border" }, zl = { class: "pk-scroll w-full overflow-x-auto" }, Al = { class: "w-full border-collapse text-sm" }, jl = { class: "bg-muted/40" }, Ol = { class: "divide-y" }, Ll = { key: 0 }, Vl = ["colspan"], Dl = { key: 1 }, Tl = ["colspan"], Fl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, El = ["disabled"], Il = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, Z2 = /* @__PURE__ */ P({
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
    return (u, d) => (t(), n("div", Pl, [
      s("div", zl, [
        s("table", Al, [
          s("thead", jl, [
            s("tr", null, [
              (t(!0), n(z, null, D(o.value, (f) => (t(), n("th", {
                key: f.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, p(f.label), 1))), 128))
            ])
          ]),
          s("tbody", Ol, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", Ll, [
              s("td", {
                colspan: o.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, Vl)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", Dl, [
              s("td", {
                colspan: o.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, p(e.emptyText), 9, Tl)
            ])) : _("", !0),
            (t(!0), n(z, null, D(e.rows, (f, k) => (t(), n("tr", {
              key: f.id ?? k,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(z, null, D(o.value, (m) => (t(), n("td", {
                key: m.key,
                class: A(["px-3 py-2 whitespace-nowrap", [
                  m.mono ? "font-mono text-xs" : "",
                  m.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                U(u.$slots, `cell:${m.key}`, {
                  row: f,
                  value: f[m.key],
                  column: m
                }, () => [
                  R(p(i(m, f[m.key])), 1)
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", Fl, [
        s("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (f) => r("load", e.nextCursor))
        }, p(e.loading ? "Loading…" : "Load more"), 9, El)
      ])) : e.capped ? (t(), n("p", Il, " Showing the first " + p(e.rows.length) + ". Open the full list to search or filter the rest. ", 1)) : _("", !0)
    ]));
  }
}), Nl = ["title"], Rl = ["aria-label"], Ul = ["d"], Hl = { class: "sr-only" }, J2 = /* @__PURE__ */ P({
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
    }, o = $(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = $(() => l.icons[o.value] ?? l.defaultIcon), u = $(() => a[i.value] ?? a.dot), d = $(() => r[l.colors[o.value] ?? "neutral"] ?? r.neutral), f = $(() => l.labels[o.value] ?? String(l.value ?? "-"));
    return (k, m) => (t(), n("span", {
      class: "inline-flex items-center",
      title: f.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: A(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": f.value
      }, [
        s("path", { d: u.value }, null, 8, Ul)
      ], 10, Rl)),
      s("span", Hl, p(f.value), 1)
    ], 8, Nl));
  }
}), ql = ["src"], Kl = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Y2 = /* @__PURE__ */ P({
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
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      o.value && !a.value ? (t(), n("img", {
        key: 0,
        src: o.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (f) => a.value = !0)
      }, null, 40, ql)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        R(p(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Kl, [...d[1] || (d[1] = [
        s("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : _("", !0)
    ], 2));
  }
}), Gl = {
  key: 0,
  class: "text-muted-foreground"
}, Wl = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Zl = {
  key: 0,
  class: "font-mono text-xs"
}, Jl = {
  key: 1,
  class: "sr-only"
}, X2 = /* @__PURE__ */ P({
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
    return (o, i) => r.value === null ? (t(), n("span", Gl, "-")) : (t(), n("span", Wl, [
      s("span", {
        class: "size-4 shrink-0 rounded border",
        style: Q({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Zl, p(r.value), 1)) : (t(), n("span", Jl, p(r.value), 1))
    ]));
  }
}), Yl = { class: "inline-flex items-center" }, Xl = ["checked", "aria-label"], Ql = { class: "sr-only" }, Q2 = /* @__PURE__ */ P({
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
    return (o, i) => (t(), n("span", Yl, [
      s("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Xl),
      s("span", Ql, p(r.value), 1)
    ]));
  }
}), es = {
  key: 0,
  class: "text-muted-foreground"
}, ts = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, ek = /* @__PURE__ */ P({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = $(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, o) => a.value ? (t(), n("code", ts, p(a.value), 1)) : (t(), n("span", es, "—"));
  }
}), as = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ns = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, ls = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Yt(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [as, ns[l], ls[a], e.class].filter(Boolean).join(" ");
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
      () => Yt({ variant: l.variant, size: l.size, class: l.class })
    ), r = $(() => l.as === "button" ? l.type : void 0);
    return (o, i) => (t(), F(Ae(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: A(a.value)
    }, {
      default: L(() => [
        U(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), ss = { class: "flex items-center gap-2" }, os = ["onUpdate:modelValue", "onChange"], rs = ["value"], is = ["onUpdate:modelValue"], us = ["value"], ds = ["onUpdate:modelValue"], cs = ["onUpdate:modelValue", "multiple"], fs = ["value"], ms = ["onUpdate:modelValue", "type"], ps = ["aria-label", "onClick"], vs = { class: "flex items-center gap-2" }, gs = /* @__PURE__ */ P({
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
      (c) => {
        i.value = c ? structuredClone(c) : o();
      }
    );
    const u = (c) => "rules" in c, d = $(() => Object.keys(a.fields));
    function f(c) {
      const x = c ? a.fields[c]?.kind : void 0;
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
    function b() {
      const c = d.value[0];
      i.value.rules.push({
        field: c,
        operator: f(c)[0],
        value: void 0
      }), m();
    }
    function S() {
      i.value.rules.push(o()), m();
    }
    function C(c) {
      i.value.rules.splice(c, 1), m();
    }
    function w(c) {
      c.operator = f(c.field)[0], c.value = void 0, m();
    }
    const y = $(() => a.depth + 1 < a.maxDepth);
    function g() {
      i.value = o(), m(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, x) => {
      const M = vt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        s("div", ss, [
          oe(s("select", {
            "onUpdate:modelValue": x[0] || (x[0] = (B) => i.value.logic = B),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: m
          }, [...x[1] || (x[1] = [
            s("option", { value: "and" }, "Match all", -1),
            s("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Le, i.value.logic]
          ]),
          x[2] || (x[2] = s("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, D(i.value.rules, (B, K) => (t(), n("div", {
          key: K,
          class: "flex items-start gap-2"
        }, [
          u(B) ? (t(), F(M, {
            key: 0,
            modelValue: i.value.rules[K],
            "onUpdate:modelValue": [(N) => i.value.rules[K] = N, m],
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
              onChange: (N) => w(B)
            }, [
              (t(!0), n(z, null, D(d.value, (N) => (t(), n("option", {
                key: N,
                value: N
              }, p(e.fields[N].label), 9, rs))), 128))
            ], 40, os), [
              [Le, B.field]
            ]),
            oe(s("select", {
              "onUpdate:modelValue": (N) => B.operator = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: m
            }, [
              (t(!0), n(z, null, D(f(B.field), (N) => (t(), n("option", {
                key: N,
                value: N
              }, p(k[N] ?? N), 9, us))), 128))
            ], 40, is), [
              [Le, B.operator]
            ]),
            B.field && e.fields[B.field]?.kind === "boolean" ? oe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (N) => B.value = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [...x[3] || (x[3] = [
              s("option", { value: !0 }, "Yes", -1),
              s("option", { value: !1 }, "No", -1)
            ])], 40, ds)), [
              [Le, B.value]
            ]) : B.field && e.fields[B.field]?.options?.length ? oe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (N) => B.value = N,
              multiple: e.fields[B.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [
              (t(!0), n(z, null, D(e.fields[B.field].options, (N) => (t(), n("option", {
                key: N,
                value: N
              }, p(N), 9, fs))), 128))
            ], 40, cs)), [
              [Le, B.value]
            ]) : oe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (N) => B.value = N,
              type: B.field && e.fields[B.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, null, 40, ms)), [
              [fa, B.value]
            ])
          ], 64)),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(B) ? "group" : "rule"}`,
            onClick: (N) => C(K)
          }, " × ", 8, ps)
        ]))), 128)),
        s("div", vs, [
          E(ne, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: b
          }, {
            default: L(() => [...x[4] || (x[4] = [
              R("Add rule", -1)
            ])]),
            _: 1
          }),
          y.value ? (t(), F(ne, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: S
          }, {
            default: L(() => [...x[5] || (x[5] = [
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : _("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            x[8] || (x[8] = s("span", { class: "flex-1" }, null, -1)),
            E(ne, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: g
            }, {
              default: L(() => [...x[6] || (x[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(ne, {
              type: "button",
              size: "sm",
              onClick: v
            }, {
              default: L(() => [...x[7] || (x[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : _("", !0)
        ])
      ], 2);
    };
  }
}), hs = {
  key: 0,
  class: "font-mono text-xs"
}, bs = {
  key: 1,
  class: "text-muted-foreground"
}, xs = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, tk = /* @__PURE__ */ P({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = $(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, o) => a.value === null && e.value != null ? (t(), n("span", hs, p(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", bs, "—")) : (t(), n("span", xs, p(a.value.length) + " " + p(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), ys = ["aria-checked", "aria-label", "title", "disabled"], ks = ["value", "disabled"], $s = ["value"], ak = /* @__PURE__ */ P({
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
    function f(k) {
      const m = k.target.value;
      m !== String(a.value ?? "") && r("change", m);
    }
    return (k, m) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": o.value,
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: A(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", o.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ce(d, ["stop"])
    }, [
      s("span", {
        class: A(["bg-background size-4 rounded-full shadow-sm transition-transform", o.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, ys)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: m[0] || (m[0] = ce(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), n(z, null, D(e.options, (b, S) => (t(), n("option", {
        key: S,
        value: S
      }, p(b), 9, $s))), 128))
    ], 40, ks));
  }
}), ws = ["data-variant"], Cs = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Re = /* @__PURE__ */ P({
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
      () => [Cs, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (o, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      U(o.$slots, "default")
    ], 10, ws));
  }
}), $t = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function _s(e) {
  return e != null && e !== "";
}
function Ss(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function nk(e) {
  const l = $(
    () => e.value.map((o) => ({
      key: o.key,
      label: o.label,
      sortable: o.sortable,
      sortKey: o.sortKey,
      locked: o.locked,
      copyable: o.copyable,
      cellClass: Ss(o)
    }))
  ), a = $(() => Object.fromEntries(e.value.map((o) => [o.key, o])));
  function r(o, i) {
    const u = a.value[o];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), f = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return $t[f] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const Ms = ["disabled", "aria-label", "aria-busy"], Bs = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ps = ["d"], zs = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, As = ["disabled", "onClick"], js = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Os = ["d"], Ls = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, lk = /* @__PURE__ */ P({
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
    function d(b) {
      return typeof b == "boolean" ? b ? "1" : "" : String(b ?? "");
    }
    function f(b) {
      const S = a.colors[d(b)] ?? a.defaultColor ?? "neutral";
      return $t[S] ?? "outline";
    }
    function k(b) {
      return a.options[b] ?? b;
    }
    function m(b, S) {
      if (o.value || b === i.value) {
        S();
        return;
      }
      r("change", b), S();
    }
    return (b, S) => (t(), n("div", {
      onClick: S[0] || (S[0] = ce(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), F(Re, {
        key: 1,
        variant: f(e.value),
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
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                R(p(k(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Bs, [
              s("path", {
                d: h(se)("chevron-down")
              }, null, 8, Ps)
            ]))
          ], 8, Ms)
        ]),
        panel: L(({ close: C }) => [
          s("div", zs, p(u.value), 1),
          (t(!0), n(z, null, D(e.options, (w, y) => (t(), n("button", {
            key: y,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: o.value,
            onClick: (g) => m(String(y), C)
          }, [
            E(Re, {
              variant: f(y),
              class: "capitalize"
            }, {
              default: L(() => [
                R(p(w), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(y) === i.value ? (t(), n("svg", js, [
              s("path", {
                d: h(se)("check")
              }, null, 8, Os)
            ])) : (t(), n("span", Ls))
          ], 8, As))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Vs = { class: "flex items-center justify-end" }, Ds = ["aria-label"], Ts = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Fs = ["d"], Es = ["href"], Is = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ns = ["d"], Rs = ["disabled", "onClick"], Us = ["d"], Hs = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, qs = ["disabled", "onClick"], Ks = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gs = ["d"], sk = /* @__PURE__ */ P({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, o = a, i = G(null), u = G(null), d = $(() => r.groups.flatMap((g) => g.actions)), f = $(() => d.value.filter((g) => !g.destructive)), k = $(() => d.value.filter((g) => g.destructive)), m = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function b(g) {
      return m[g.color ?? "gray"] ?? m.gray;
    }
    const S = $(() => d.value.length === 0);
    function C(g) {
      o("run", g);
    }
    function w(g) {
      S.value || (g.preventDefault(), i.value?.openAt(g.clientX, g.clientY));
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
      const c = v.indexOf(document.activeElement), x = g.key === "ArrowDown" ? 1 : -1, M = (c + x + v.length) % v.length;
      v[M]?.focus();
    }
    return l({ openContextMenu: w }), (g, v) => (t(), n("div", Vs, [
      S.value ? _("", !0) : (t(), F(He, {
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
            (t(), n("svg", Ts, [
              s("path", {
                d: h(se)("more-vertical")
              }, null, 8, Fs)
            ]))
          ], 8, Ds)
        ]),
        panel: L(() => [
          s("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: y
          }, [
            (t(!0), n(z, null, D(f.value, (c) => (t(), n(z, {
              key: c.key
            }, [
              c.link ? (t(), n("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", b(c)])
              }, [
                (t(), n("svg", Is, [
                  s("path", {
                    d: h(se)(c.icon)
                  }, null, 8, Ns)
                ])),
                R(" " + p(c.label), 1)
              ], 10, Es)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", b(c)]),
                disabled: e.busy === c.key,
                onClick: (x) => C(c)
              }, [
                (t(), n("svg", {
                  class: A(["size-4 shrink-0", e.busy === c.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  s("path", {
                    d: h(se)(c.icon)
                  }, null, 8, Us)
                ], 2)),
                R(" " + p(c.label), 1)
              ], 10, Rs))
            ], 64))), 128)),
            k.value.length ? (t(), n("div", Hs, [
              (t(!0), n(z, null, D(k.value, (c) => (t(), n("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (x) => C(c)
              }, [
                (t(), n("svg", Ks, [
                  s("path", {
                    d: h(se)(c.icon ?? "trash")
                  }, null, 8, Gs)
                ])),
                R(" " + p(c.label), 1)
              ], 8, qs))), 128))
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
}, Je = 12, Ye = 20, Ws = [0, 0.25, 0.5, 0.75, 1], wt = "alxtexhpanel.appearance", $e = {
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
}, Pe = G({ ...$e });
let At = !1;
const Zs = "alxtexhpanel.appearance.vars";
function ct(e) {
  return e.theme === "dark";
}
const jt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function Js(e) {
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
function ok(e) {
  const l = Ct(), a = e ? { ...l, ...e } : l;
  if (Pe.value = a, ft(a), e)
    try {
      localStorage.setItem(wt, JSON.stringify(a));
    } catch {
    }
}
let Xt = null;
function rk(e) {
  Xt = e;
}
let Qt = {};
function Ys(e) {
  if (Qt = e, !(typeof document > "u") && !Ct().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function ft(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...Js(e), ...e.primaryChosen ? {} : Qt };
  l.classList.toggle("dark", ct(e));
  for (const [r, o] of Object.entries(a))
    l.style.setProperty(r, o);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      Zs,
      JSON.stringify({ dark: ct(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function ea() {
  function e(r) {
    ft(r);
  }
  function l(r) {
    const o = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Pe.value = { ...Pe.value, ...r, ...o };
    try {
      localStorage.setItem(wt, JSON.stringify(Pe.value));
    } catch {
    }
    e(Pe.value), Xt?.({ ...r, ...o });
  }
  function a() {
    l({ ...$e });
  }
  return ue(() => {
    At || (At = !0, Pe.value = Ct(), ft(Pe.value));
  }), {
    appearance: $(() => Pe.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: ut,
    SURFACE_TINTS: dt,
    FONT_SIZE_MIN: Je,
    FONT_SIZE_MAX: Ye,
    RADIUS_OPTIONS: Ws
  };
}
const Xs = { class: "flex items-center justify-between border-b px-4 py-3" }, Qs = { class: "flex items-center gap-2" }, eo = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, to = { class: "flex flex-col gap-2" }, ao = { class: "grid grid-cols-8 gap-2" }, no = ["title", "aria-label", "aria-pressed", "onClick"], lo = { class: "flex flex-col gap-2" }, so = { class: "grid grid-cols-8 gap-2" }, oo = ["title", "aria-label", "aria-pressed", "onClick"], ro = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, io = { class: "flex flex-col gap-2" }, uo = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, co = ["aria-pressed", "aria-label", "onClick"], fo = { class: "text-sm font-semibold" }, mo = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, po = ["onClick"], vo = { class: "flex flex-col gap-2" }, go = { class: "flex items-center justify-between" }, ho = { class: "text-muted-foreground text-xs tabular-nums" }, bo = { class: "flex items-center gap-2" }, xo = ["disabled"], yo = ["min", "max", "value"], ko = ["disabled"], ik = /* @__PURE__ */ P({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: o, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = ea(), d = G(!1), f = $(() => l.value.sidebarSide === "right"), k = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], m = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], b = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], S = [
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
    function y(g, v) {
      return `oklch(0.72 ${v * 3} ${g})`;
    }
    return (g, v) => (t(), n(z, null, [
      s("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (c) => d.value = !0)
      }, [...v[7] || (v[7] = [
        pt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), F(Te, { to: "body" }, [
        E(ze, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: L(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: v[1] || (v[1] = (c) => d.value = !1)
            })) : _("", !0)
          ]),
          _: 1
        }),
        E(ze, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": f.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": f.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: L(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: A(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", f.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              s("header", Xs, [
                v[9] || (v[9] = s("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                s("div", Qs, [
                  s("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => h(r) && h(r)(...c))
                  }, " Reset "),
                  s("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: v[3] || (v[3] = (c) => d.value = !1)
                  }, [...v[8] || (v[8] = [
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
              s("div", eo, [
                s("section", to, [
                  v[11] || (v[11] = s("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  s("div", ao, [
                    (t(!0), n(z, null, D(h(o), (c, x) => (t(), n("button", {
                      key: x,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: Q({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": h(l).primary === x,
                      onClick: (M) => h(a)({ primary: x })
                    }, [
                      h(l).primary === x ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: Q({ color: c.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...v[10] || (v[10] = [
                        s("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : _("", !0)
                    ], 12, no))), 128))
                  ])
                ]),
                s("section", lo, [
                  v[13] || (v[13] = s("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  s("div", so, [
                    (t(!0), n(z, null, D(h(i), (c, x) => (t(), n("button", {
                      key: x,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: Q({ background: y(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": h(l).surface === x,
                      onClick: (M) => h(a)({ surface: x })
                    }, [
                      h(l).surface === x ? (t(), n("svg", ro, [...v[12] || (v[12] = [
                        s("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : _("", !0)
                    ], 12, oo))), 128))
                  ])
                ]),
                s("section", io, [
                  v[14] || (v[14] = s("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  s("div", uo, [
                    (t(!0), n(z, null, D(h(u), (c) => (t(), n("button", {
                      key: c,
                      type: "button",
                      class: A([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        h(l).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": h(l).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (x) => h(a)({ radius: c })
                    }, [
                      s("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: Q({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      R(" " + p(c), 1)
                    ], 10, co))), 128))
                  ])
                ]),
                (t(!0), n(z, null, D([
                  { label: "Color scheme", key: "theme", options: k },
                  { label: "Card style", key: "cardStyle", options: b },
                  { label: "Table density", key: "density", options: m },
                  { label: "Sidebar", key: "sidebarSide", options: S },
                  { label: "Content layout", key: "contentLayout", options: C },
                  { label: "Menu style", key: "menuStyle", options: w }
                ], (c) => (t(), n("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  s("h3", fo, p(c.label), 1),
                  s("div", mo, [
                    (t(!0), n(z, null, D(c.options, (x) => (t(), n("button", {
                      key: String(x.value),
                      type: "button",
                      class: A([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        h(l)[c.key] === x.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (M) => h(a)({ [c.key]: x.value })
                    }, p(x.label), 11, po))), 128))
                  ])
                ]))), 128)),
                s("section", vo, [
                  s("div", go, [
                    v[15] || (v[15] = s("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    s("span", ho, p(h(l).fontSize) + "px", 1)
                  ]),
                  s("div", bo, [
                    s("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: h(l).fontSize <= h(Je),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => h(a)({ fontSize: h(l).fontSize - 1 }))
                    }, " − ", 8, xo),
                    s("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: h(Je),
                      max: h(Ye),
                      value: h(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (c) => h(a)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, yo),
                    s("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: h(l).fontSize >= h(Ye),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => h(a)({ fontSize: h(l).fontSize + 1 }))
                    }, " + ", 8, ko)
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
}), $o = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, wo = { class: "flex items-stretch" }, Co = ["href", "aria-current"], _o = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, So = ["d"], Mo = { class: "w-full truncate text-center" }, Bo = {
  key: 0,
  class: "flex-1"
}, Po = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, zo = ["d"], Ao = { class: "w-full truncate text-center" }, nt = 5, uk = /* @__PURE__ */ P({
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
    return (d, f) => (t(), n("nav", $o, [
      s("ul", wo, [
        (t(!0), n(z, null, D(o.value, (k) => (t(), n("li", {
          key: k.key,
          class: "flex-1"
        }, [
          s("a", {
            href: k.href,
            class: A([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(k.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(k.href) ? "page" : void 0
          }, [
            (t(), n("svg", _o, [
              s("path", {
                d: h(se)(k.icon)
              }, null, 8, So)
            ])),
            s("span", Mo, p(k.title), 1)
          ], 10, Co)
        ]))), 128)),
        i.value ? (t(), n("li", Bo, [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (k) => r("more"))
          }, [
            (t(), n("svg", Po, [
              s("path", {
                d: h(se)("more-horizontal")
              }, null, 8, zo)
            ])),
            s("span", Ao, p(e.moreLabel), 1)
          ])
        ])) : _("", !0)
      ])
    ]));
  }
}), jo = ["value"], Oo = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", fe = /* @__PURE__ */ P({
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
      class: A([Oo, a.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, jo));
  }
}), Lo = ["for"], he = /* @__PURE__ */ P({
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
      U(l.$slots, "default")
    ], 10, Lo));
  }
}), dk = /* @__PURE__ */ P({
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
}), Vo = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Do = ["id", "name", "value", "disabled", "maxlength"], To = ["data-active"], Fo = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, ck = /* @__PURE__ */ P({
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
      () => Array.from({ length: a.length }, (k, m) => a.modelValue[m] ?? "")
    ), d = $(() => Math.min(a.modelValue.length, a.length - 1));
    function f(k) {
      const m = k.target.value;
      r("update:modelValue", m.replace(/\D/g, "").slice(0, a.length));
    }
    return (k, m) => (t(), n("div", Vo, [
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
        onInput: f,
        onFocus: m[0] || (m[0] = (b) => o.value = !0),
        onBlur: m[1] || (m[1] = (b) => o.value = !1)
      }, null, 40, Do),
      (t(!0), n(z, null, D(u.value, (b, S) => (t(), n("div", {
        key: S,
        "data-slot": "input-otp-slot",
        "data-active": o.value && S === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(p(b) + " ", 1),
        o.value && S === d.value && b === "" ? (t(), n("div", Fo, [...m[2] || (m[2] = [
          s("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : _("", !0)
      ], 8, To))), 128))
    ]));
  }
}), Eo = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ce = /* @__PURE__ */ P({
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
      }, p(e.title), 3),
      e.description ? (t(), n("p", Eo, p(e.description), 1)) : _("", !0)
    ], 2));
  }
});
function J(...e) {
  return Oa(ja(e));
}
function fk(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Io = /* @__PURE__ */ P({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: A(h(J)(h(Uo)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), No = /* @__PURE__ */ P({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: A(h(J)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Ro = /* @__PURE__ */ P({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: A(h(J)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Uo = ht(
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
), Ho = { class: "list-inside list-disc text-sm" }, mk = /* @__PURE__ */ P({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = $(() => Array.from(new Set(l.errors)));
    return (r, o) => (t(), F(h(Io), { variant: "destructive" }, {
      default: L(() => [
        E(h(wa), { class: "size-4" }),
        E(h(Ro), null, {
          default: L(() => [
            R(p(e.title), 1)
          ]),
          _: 1
        }),
        E(h(No), null, {
          default: L(() => [
            s("ul", Ho, [
              (t(!0), n(z, null, D(a.value, (i, u) => (t(), n("li", { key: u }, p(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ta = /* @__PURE__ */ P({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, o = Ut(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => oe((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => ma(o) ? o.value = d : null),
      "data-slot": "input",
      class: A(
        h(J)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Se, h(o)]
    ]);
  }
}), qo = { class: "relative" }, Ko = ["aria-label"], pk = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = G(!1), o = pa("inputRef");
    return l({
      $el: o,
      focus: () => o.value?.$el?.focus()
    }), (i, u) => (t(), n("div", qo, [
      E(h(ta), ee({
        ref_key: "inputRef",
        ref: o,
        type: r.value ? "text" : "password",
        class: h(J)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      s("button", {
        type: "button",
        class: A(
          h(J)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), F(h(Ca), {
          key: 0,
          class: "size-4"
        })) : (t(), F(h(_a), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Ko)
    ]));
  }
});
function vk(e, l) {
  const a = Math.max(1, Math.floor(l));
  if (e.length === 0)
    return [];
  if (a === 1)
    return [{ type: "columns", columns: [[...e]] }];
  const r = [];
  let o = [];
  const i = () => {
    if (o.length === 0)
      return;
    const u = Array.from({ length: a }, () => []);
    o.forEach((d, f) => {
      u[f % a].push(d);
    }), r.push({ type: "columns", columns: u }), o = [];
  };
  for (const u of e)
    (u.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: u })) : o.push(u);
  return i(), r;
}
const aa = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Go = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Wo = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Zo(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Jo(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Yo(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Xo(l), r = document.createElement("canvas"), o = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = o, r.height = i;
    const u = r.getContext("2d", { willReadFrequently: !0 });
    if (!u)
      return !1;
    u.drawImage(a, 0, 0);
    const { data: d } = u.getImageData(0, 0, o, i);
    for (let f = 3; f < d.length; f += 4)
      if ((d[f] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function Xo(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Qo(e) {
  if (Zo(e))
    throw new Error(Wo);
  if (!Jo(e))
    throw new Error(aa);
  if (!await Yo(e))
    throw new Error(Go);
}
const er = /* @__PURE__ */ P({
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
    return (i, u) => (t(), F(h(Ht), ee({ "data-slot": "sheet" }, h(o)), {
      default: L((d) => [
        U(i.$slots, "default", be(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), gk = /* @__PURE__ */ P({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Fe), ee({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tr = /* @__PURE__ */ P({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(h(bt), ee({
      "data-slot": "sheet-overlay",
      class: h(J)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, h(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ar = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(xt), null, {
      default: L(() => [
        E(tr),
        E(h(yt), ee({
          "data-slot": "sheet-content",
          class: h(J)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...h(i) }), {
          default: L(() => [
            U(u.$slots, "default"),
            E(h(Fe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                E(h(gt), { class: "size-4" }),
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
}), nr = /* @__PURE__ */ P({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(h(qt), ee({
      "data-slot": "sheet-description",
      class: h(J)("text-muted-foreground text-sm", l.class)
    }, h(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hk = /* @__PURE__ */ P({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: A(h(J)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), lr = /* @__PURE__ */ P({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: A(h(J)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), sr = /* @__PURE__ */ P({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(h(Kt), ee({
      "data-slot": "sheet-title",
      class: h(J)("text-foreground font-semibold", l.class)
    }, h(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bk = /* @__PURE__ */ P({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Gt), ee({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ot = "sidebar_state", or = 3600 * 24 * 7, rr = "16rem", ir = "18rem", ur = "3rem", dr = "b", [et, cr] = Ta("Sidebar"), fr = { class: "flex h-full w-full flex-col" }, mr = ["data-state", "data-collapsible", "data-variant", "data-side"], pr = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, xk = /* @__PURE__ */ P({
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
      class: h(J)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      U(u.$slots, "default")
    ], 16)) : h(a) ? (t(), F(h(er), ee({
      key: 1,
      open: h(o)
    }, u.$attrs, { "onUpdate:open": h(i) }), {
      default: L(() => [
        E(h(ar), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: Q({
            "--sidebar-width": h(ir)
          })
        }, {
          default: L(() => [
            E(lr, { class: "sr-only" }, {
              default: L(() => [
                E(sr, null, {
                  default: L(() => [...d[0] || (d[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(nr, null, {
                  default: L(() => [...d[1] || (d[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            s("div", fr, [
              U(u.$slots, "default")
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
      "data-state": h(r),
      "data-collapsible": h(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      s("div", {
        class: A(
          h(J)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      s("div", ee({
        class: h(J)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        s("div", pr, [
          U(u.$slots, "default")
        ])
      ], 16)
    ], 8, mr));
  }
}), yk = /* @__PURE__ */ P({
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
        h(J)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), kk = /* @__PURE__ */ P({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(h(J)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), $k = /* @__PURE__ */ P({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(h(J)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), wk = /* @__PURE__ */ P({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Ee), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        h(J)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ck = /* @__PURE__ */ P({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(h(J)("w-full text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _k = /* @__PURE__ */ P({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Ee), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        h(J)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Sk = /* @__PURE__ */ P({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(h(J)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Mk = /* @__PURE__ */ P({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(ta), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(h(J)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bk = /* @__PURE__ */ P({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: A(
        h(J)(
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
      U(a.$slots, "default")
    ], 2));
  }
}), Pk = /* @__PURE__ */ P({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(h(J)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), zk = /* @__PURE__ */ P({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Ee), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: A(
        h(J)(
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
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), Ak = /* @__PURE__ */ P({
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
        h(J)(
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
      U(a.$slots, "default")
    ], 2));
  }
}), vr = /* @__PURE__ */ P({
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
    return (i, u) => (t(), F(h(Fa), ee({ "data-slot": "tooltip" }, h(o)), {
      default: L((d) => [
        U(i.$slots, "default", be(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), gr = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(Ea), null, {
      default: L(() => [
        E(h(Ia), ee({ "data-slot": "tooltip-content" }, { ...h(i), ...u.$attrs }, {
          class: h(J)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: L(() => [
            U(u.$slots, "default"),
            E(h(Na), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), jk = /* @__PURE__ */ P({
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
    return (a, r) => (t(), F(h(Wt), be(Be(l)), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hr = /* @__PURE__ */ P({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Ra), ee({ "data-slot": "tooltip-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lt = /* @__PURE__ */ P({
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
    return (a, r) => (t(), F(h(Ee), ee({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: h(J)(h(xr)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Ok = /* @__PURE__ */ P({
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
    return (i, u) => e.tooltip ? (t(), F(h(vr), { key: 1 }, {
      default: L(() => [
        E(h(hr), { "as-child": "" }, {
          default: L(() => [
            E(Lt, be(Be({ ...h(o), ...i.$attrs })), {
              default: L(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(h(gr), {
          side: "right",
          align: "center",
          hidden: h(r) !== "collapsed" || h(a)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              R(p(e.tooltip), 1)
            ], 64)) : (t(), F(Ae(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), F(Lt, be(ee({ key: 0 }, { ...h(o), ...i.$attrs })), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lk = /* @__PURE__ */ P({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(h(J)("group/menu-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Vt = "animate-pulse rounded-md bg-primary/10", Vk = /* @__PURE__ */ P({
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
      class: A(h(J)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: A(h(J)(Vt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : _("", !0),
      s("div", {
        class: A(h(J)(Vt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: Q({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), Dk = /* @__PURE__ */ P({
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
        h(J)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Tk = /* @__PURE__ */ P({
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
    return (a, r) => (t(), F(h(Ee), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: A(
        h(J)(
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
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), Fk = /* @__PURE__ */ P({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(h(J)("group/menu-sub-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Ek = /* @__PURE__ */ P({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Da?.cookie.includes(`${Ot}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = La("(max-width: 767px)"), i = G(!1), u = Ut(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(b) {
      u.value = b, document.cookie = `${Ot}=${u.value}; path=/; max-age=${or}`;
    }
    function f(b) {
      i.value = b;
    }
    function k() {
      return o.value ? f(!i.value) : d(!u.value);
    }
    Va("keydown", (b) => {
      b.key === dr && (b.metaKey || b.ctrlKey) && (b.preventDefault(), k());
    });
    const m = $(
      () => o.value || u.value ? "expanded" : "collapsed"
    );
    return cr({
      state: m,
      open: u,
      setOpen: d,
      isMobile: o,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: k
    }), (b, S) => (t(), F(h(Wt), { "delay-duration": 0 }, {
      default: L(() => [
        s("div", ee({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": h(rr),
            "--sidebar-width-icon": h(ur)
          },
          class: h(J)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, b.$attrs), [
          U(b.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), Ik = /* @__PURE__ */ P({
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
      class: A(
        h(J)(
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
      (...i) => h(a) && h(a)(...i))
    }, [
      U(r.$slots, "default")
    ], 2));
  }
}), na = /* @__PURE__ */ P({
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
    return (r, o) => (t(), F(h(Ua), ee({ "data-slot": "separator" }, h(a), {
      class: h(J)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), Nk = /* @__PURE__ */ P({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(na), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(h(J)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), br = /* @__PURE__ */ P({
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
      class: A(h(J)("h-7 w-7", l.class)),
      onClick: h(o)
    }, {
      default: L(() => [
        h(a) || h(r) === "collapsed" ? (t(), F(h(Sa), { key: 0 })) : (t(), F(h(Ma), { key: 1 })),
        u[0] || (u[0] = s("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), xr = ht(
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
), Rk = /* @__PURE__ */ P({
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
    return (i, u) => (t(), F(h(Ha), ee({ "data-slot": "dropdown-menu" }, h(o)), {
      default: L((d) => [
        U(i.$slots, "default", be(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), yr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Uk = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(qa), ee({ "data-slot": "dropdown-menu-checkbox-item" }, h(i), {
      class: h(J)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        s("span", yr, [
          E(h(Zt), null, {
            default: L(() => [
              U(u.$slots, "indicator-icon", {}, () => [
                E(h(Nt), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hk = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(Ka), null, {
      default: L(() => [
        E(h(Ga), ee({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...h(i) }, {
          class: h(J)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: L(() => [
            U(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), qk = /* @__PURE__ */ P({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Wa), ee({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kk = /* @__PURE__ */ P({
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
    return (o, i) => (t(), F(h(Za), ee({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, h(r), {
      class: h(J)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: L(() => [
        U(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Gk = /* @__PURE__ */ P({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = le(l, "class", "inset"), r = xe(a);
    return (o, i) => (t(), F(h(Ja), ee({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, h(r), {
      class: h(J)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        U(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Wk = /* @__PURE__ */ P({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const o = de(e, l);
    return (i, u) => (t(), F(h(Ya), ee({ "data-slot": "dropdown-menu-radio-group" }, h(o)), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Zk = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(Xa), ee({ "data-slot": "dropdown-menu-radio-item" }, h(i), {
      class: h(J)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        s("span", kr, [
          E(h(Zt), null, {
            default: L(() => [
              U(u.$slots, "indicator-icon", {}, () => [
                E(h(Ba), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jk = /* @__PURE__ */ P({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(h(Qa), ee({ "data-slot": "dropdown-menu-separator" }, h(a), {
      class: h(J)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), Yk = /* @__PURE__ */ P({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(h(J)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Xk = /* @__PURE__ */ P({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const o = de(e, l);
    return (i, u) => (t(), F(h(en), ee({ "data-slot": "dropdown-menu-sub" }, h(o)), {
      default: L((d) => [
        U(i.$slots, "default", be(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), Qk = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(tn), ee({ "data-slot": "dropdown-menu-sub-content" }, h(i), {
      class: h(J)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: L(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e$ = /* @__PURE__ */ P({
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
    return (o, i) => (t(), F(h(an), ee({ "data-slot": "dropdown-menu-sub-trigger" }, h(r), {
      "data-inset": e.inset ? "" : void 0,
      class: h(J)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        U(o.$slots, "default"),
        E(h(Rt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), t$ = /* @__PURE__ */ P({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = xe(e);
    return (r, o) => (t(), F(h(nn), ee({ "data-slot": "dropdown-menu-trigger" }, h(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a$ = /* @__PURE__ */ P({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(ln), {
      "data-slot": "avatar",
      class: A(h(J)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), n$ = /* @__PURE__ */ P({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(h(sn), ee({ "data-slot": "avatar-fallback" }, h(a), {
      class: h(J)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l$ = /* @__PURE__ */ P({
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
    return (a, r) => (t(), F(h(on), ee({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s$ = /* @__PURE__ */ P({
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
      U(a.$slots, "default")
    ], 2));
  }
}), o$ = /* @__PURE__ */ P({
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
      class: A(h(J)("flex size-9 items-center justify-center", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        E(h(Pa), { class: "size-4" })
      ]),
      r[0] || (r[0] = s("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), r$ = /* @__PURE__ */ P({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: A(h(J)("inline-flex items-center gap-1.5", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), i$ = /* @__PURE__ */ P({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Ee), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: A(h(J)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), u$ = /* @__PURE__ */ P({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        h(J)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), d$ = /* @__PURE__ */ P({
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
      class: A(h(J)("text-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), c$ = /* @__PURE__ */ P({
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
      class: A(h(J)("[&>svg]:size-3.5", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        E(h(Rt))
      ])
    ], 2));
  }
}), $r = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, wr = /* @__PURE__ */ P({
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
    return (o, i) => (t(), n("div", $r, [
      E(h(rn), ee({ "data-slot": "navigation-menu-viewport" }, h(r), {
        class: h(J)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), f$ = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(un), ee({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, h(i), {
      class: h(J)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: L((f) => [
        U(u.$slots, "default", be(Be(f))),
        e.viewport ? (t(), F(wr, { key: 0 })) : _("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), m$ = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(dn), ee({ "data-slot": "navigation-menu-content" }, h(i), {
      class: h(J)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: L(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p$ = /* @__PURE__ */ P({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(h(cn), ee({ "data-slot": "navigation-menu-indicator" }, h(r), {
      class: h(J)(
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
}), v$ = /* @__PURE__ */ P({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(h(fn), ee({ "data-slot": "navigation-menu-item" }, h(a), {
      class: h(J)("relative", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g$ = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(mn), ee({ "data-slot": "navigation-menu-link" }, h(i), {
      class: h(J)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h$ = /* @__PURE__ */ P({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(h(pn), ee({ "data-slot": "navigation-menu-list" }, h(r), {
      class: h(J)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        U(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b$ = /* @__PURE__ */ P({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(h(vn), ee({ "data-slot": "navigation-menu-trigger" }, h(r), {
      class: h(J)(h(Cr)(), "group", l.class)
    }), {
      default: L(() => [
        U(o.$slots, "default"),
        E(h(za), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cr = ht(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), x$ = /* @__PURE__ */ P({
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
    return (i, u) => (t(), F(h(Ht), ee({ "data-slot": "dialog" }, h(o)), {
      default: L((d) => [
        U(i.$slots, "default", be(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), y$ = /* @__PURE__ */ P({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Fe), ee({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _r = /* @__PURE__ */ P({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(h(bt), ee({ "data-slot": "dialog-overlay" }, h(a), {
      class: h(J)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k$ = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(xt), null, {
      default: L(() => [
        E(_r),
        E(h(yt), ee({ "data-slot": "dialog-content" }, { ...u.$attrs, ...h(i) }, {
          class: h(J)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: L(() => [
            U(u.$slots, "default"),
            e.showCloseButton ? (t(), F(h(Fe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                E(h(gt)),
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
}), $$ = /* @__PURE__ */ P({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(h(qt), ee({ "data-slot": "dialog-description" }, h(r), {
      class: h(J)("text-muted-foreground text-sm", l.class)
    }), {
      default: L(() => [
        U(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), w$ = /* @__PURE__ */ P({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: A(h(J)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      U(a.$slots, "default"),
      e.showCloseButton ? (t(), F(h(Fe), {
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
}), C$ = /* @__PURE__ */ P({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: A(h(J)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _$ = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(xt), null, {
      default: L(() => [
        E(h(bt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            E(h(yt), ee({
              class: h(J)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...h(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (f) => {
                const k = f.detail.originalEvent, m = k.target;
                (k.offsetX > m.clientWidth || k.offsetY > m.clientHeight) && f.preventDefault();
              })
            }), {
              default: L(() => [
                U(u.$slots, "default"),
                E(h(Fe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    E(h(gt), { class: "w-4 h-4" }),
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
}), S$ = /* @__PURE__ */ P({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (o, i) => (t(), F(h(Kt), ee({ "data-slot": "dialog-title" }, h(r), {
      class: h(J)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        U(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M$ = /* @__PURE__ */ P({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Gt), ee({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B$ = /* @__PURE__ */ P({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, o) => (t(), F(h(gn), ee({ "data-slot": "label" }, h(a), {
      class: h(J)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P$ = /* @__PURE__ */ P({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), F(h(Aa), {
      role: "status",
      "aria-label": "Loading",
      class: A(h(J)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), z$ = /* @__PURE__ */ P({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: A(
        h(J)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), A$ = /* @__PURE__ */ P({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: A(h(J)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), j$ = /* @__PURE__ */ P({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: A(h(J)("px-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), O$ = /* @__PURE__ */ P({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: A(h(J)("text-muted-foreground text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), L$ = /* @__PURE__ */ P({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: A(h(J)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), V$ = /* @__PURE__ */ P({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: A(
        h(J)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), D$ = /* @__PURE__ */ P({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: A(h(J)("leading-none font-semibold", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Sr = /* @__PURE__ */ P({
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
    return (u, d) => (t(), F(h(hn), ee({ "data-slot": "checkbox" }, h(i), {
      class: h(J)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L((f) => [
        E(h(bn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            U(u.$slots, "default", be(Be(f)), () => [
              E(h(Nt), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ve = /* @__PURE__ */ P({
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
    return (i, u) => (t(), F(h(xn), ee({ "data-slot": "switch" }, h(o), {
      class: h(J)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L(() => [
        E(h(yn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Mr = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Br = { class: "flex items-start gap-3" }, Pr = { class: "min-w-0 flex-1" }, zr = { class: "text-foreground text-sm font-medium" }, Ar = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, T$ = /* @__PURE__ */ P({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, o = a, i = G(!1), u = G(null), d = G(0);
    va((k) => (console.error(`[PkBoundary] ${r.label} failed to render`, k), i.value = !0, u.value = k instanceof Error ? k.message : null, o("error", k), !1));
    function f() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: f }), (k, m) => (t(), n("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Mr, [
        s("div", Br, [
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
          s("div", Pr, [
            s("p", zr, p(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", Ar, p(u.value), 1)) : _("", !0),
            s("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: f
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
              R(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? _("", !0) : U(k.$slots, "default", { key: d.value })
    ], 2));
  }
}), jr = { class: "bg-card rounded-lg border" }, Or = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Lr = { class: "min-w-0" }, Vr = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Dr = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Tr = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Fr = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, F$ = /* @__PURE__ */ P({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", jr, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Or, [
        s("div", Lr, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Vr, p(e.title), 1)) : _("", !0),
            e.description ? (t(), n("p", Dr, p(e.description), 1)) : _("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Tr, [
          U(l.$slots, "actions")
        ])) : _("", !0)
      ])) : _("", !0),
      s("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", Fr, [
        U(l.$slots, "footer")
      ])) : _("", !0)
    ]));
  }
}), E$ = /* @__PURE__ */ P({
  __name: "PkSiteHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    mirrored: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("header", {
      "data-slot": "site-header",
      class: A(
        h(J)(
          "flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/70 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sm:px-6 md:px-4",
          l.mirrored ? "flex-row-reverse" : "",
          l.class
        )
      )
    }, [
      s("div", {
        class: A(["flex min-w-0 items-center gap-2", l.mirrored ? "flex-row-reverse" : ""])
      }, [
        E(h(br), {
          class: A(l.mirrored ? "-mr-1" : "-ml-1")
        }, null, 8, ["class"]),
        E(na, {
          orientation: "vertical",
          class: "mx-2 data-[orientation=vertical]:h-4"
        }),
        U(a.$slots, "default")
      ], 2),
      a.$slots.trailing ? (t(), n("div", {
        key: 0,
        class: A(["flex items-center gap-2", l.mirrored ? "flex-row-reverse" : ""])
      }, [
        U(a.$slots, "trailing")
      ], 2)) : _("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function I$() {
  const e = Jt(), l = $(() => e.props.panel?.pageFooter === !0);
  return ga(la, l), l;
}
const Er = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Ir = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Nr = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, N$ = /* @__PURE__ */ P({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = Jt(), r = (/* @__PURE__ */ new Date()).getFullYear(), o = $(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = $(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), u = It(la, $(() => !1)), d = $(() => !l.host && h(u) === !0);
    return (f, k) => d.value ? _("", !0) : (t(), n("footer", Er, [
      s("div", Ir, [
        s("p", null, "© " + p(h(r)) + " " + p(o.value), 1),
        i.value.length ? (t(), n("nav", Nr, [
          (t(!0), n(z, null, D(i.value, (m) => (t(), F(h(kn), {
            key: m.href,
            href: m.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              R(p(m.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : _("", !0)
      ])
    ]));
  }
}), Rr = { class: "flex shrink-0 flex-col items-center" }, Ur = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, R$ = /* @__PURE__ */ P({
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
    return (i, u) => (t(), n("div", Rr, [
      s("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: Q({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Ur)) : _("", !0),
        s("div", {
          class: A(["size-full overflow-hidden bg-white", o.value])
        }, [
          U(i.$slots, "default")
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
}), Hr = { class: "flex items-center gap-2 overflow-x-auto" }, qr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gr = { class: "flex flex-col" }, Wr = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Zr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Jr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Yr = /* @__PURE__ */ P({
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
    function o(f) {
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
    return (f, k) => (t(), n("ol", Hr, [
      (t(!0), n(z, null, D(e.steps, (m, b) => (t(), n("li", {
        key: b,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), F(Ae(e.interactive ? "button" : "div"), ee({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(b)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: b > e.activeStep } : {}, {
          onClick: (S) => e.interactive && b <= e.activeStep && r("update:activeStep", b)
        }), {
          default: L(() => [
            s("span", {
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", o(b)])
            }, [
              d(b) ? (t(), n("svg", qr, [...k[0] || (k[0] = [
                s("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(b) ? (t(), n("svg", Kr, [...k[1] || (k[1] = [
                s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                R(p(b + 1), 1)
              ], 64))
            ], 2),
            s("span", Gr, [
              s("span", null, p(m.label), 1),
              m.description ? (t(), n("span", Wr, p(m.description), 1)) : _("", !0)
            ]),
            e.hasError(b) ? (t(), n("span", Zr)) : _("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        b < e.steps.length - 1 ? (t(), n("span", Jr)) : _("", !0)
      ]))), 128))
    ]));
  }
}), Ge = /* @__PURE__ */ new Map();
function ke(e, l) {
  Ge.set(e, l);
}
function Xr(e) {
  return Ge.get(e);
}
function U$(e) {
  return Ge.has(e);
}
function H$() {
  return [...Ge.keys()].sort();
}
function q$() {
  Ge.clear();
}
const Qr = ["aria-expanded"], ei = ["aria-label", "onClick"], ti = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, ai = { class: "ml-auto flex shrink-0 items-center gap-1" }, ni = {
  key: 0,
  class: "border-b p-1"
}, li = ["placeholder"], si = { class: "max-h-60 overflow-y-auto p-1" }, oi = ["aria-selected", "onMouseenter", "onClick"], ri = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, _t = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null), i = G(null), u = G(null), d = G(!1), f = G(""), k = G(0), m = G({ top: 0, left: 0, width: 0 }), b = $(
      () => a.modelValue.map(
        (T) => a.options.find((O) => O.value === T) ?? {
          value: T,
          label: String(T)
        }
      ).filter(Boolean)
    ), S = $(() => a.searchable ?? a.options.length > 6), C = $(() => {
      const T = new Set(a.modelValue), O = f.value.trim().toLowerCase();
      return a.options.filter((j) => !T.has(j.value)).filter((j) => O ? j.label.toLowerCase().includes(O) : !0);
    }), w = $(() => a.max !== null && a.modelValue.length >= a.max);
    function y() {
      const T = o.value, O = i.value;
      if (!T || !O)
        return;
      const j = T.getBoundingClientRect(), W = O.getBoundingClientRect(), I = 8;
      let H = j.bottom + 4;
      H + W.height > window.innerHeight - I && j.top - W.height - 4 > I && (H = j.top - W.height - 4), m.value = {
        top: H,
        left: Math.min(Math.max(I, j.left), window.innerWidth - j.width - I),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: j.width
      };
    }
    async function g() {
      a.disabled || d.value || (d.value = !0, f.value = "", k.value = 0, await we(), y(), u.value?.focus());
    }
    function v() {
      d.value = !1, f.value = "";
    }
    function c() {
      d.value ? v() : g();
    }
    function x(T) {
      w.value || (r("update:modelValue", [...a.modelValue, T.value]), f.value = "", k.value = 0, we(() => {
        y(), u.value?.focus();
      }));
    }
    function M(T) {
      r(
        "update:modelValue",
        a.modelValue.filter((O) => O !== T)
      ), we(y);
    }
    function B() {
      r("update:modelValue", []), we(y);
    }
    function K(T) {
      if (!a.disabled) {
        if (T.key === "Escape" && d.value) {
          T.stopPropagation(), v();
          return;
        }
        if (T.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          M(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (T.key === "ArrowDown" || T.key === "Enter")) {
          T.preventDefault(), g();
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
            O && x(O);
          }
        }
      }
    }
    function N(T) {
      if (!d.value)
        return;
      const O = T.target;
      o.value?.contains(O) || i.value?.contains(O) || v();
    }
    function Y() {
      d.value && y();
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
        class: A(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: c
      }, [
        (t(!0), n(z, null, D(b.value, (j) => (t(), n("span", {
          key: j.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(p(j.label) + " ", 1),
          s("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${j.label}`,
            onClick: ce((W) => M(j.value), ["stop"])
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
          ])], 8, ei)
        ]))), 128)),
        b.value.length === 0 ? (t(), n("span", ti, p(e.placeholder), 1)) : _("", !0),
        s("span", ai, [
          b.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ce(B, ["stop"])
          }, " Clear ")) : _("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...O[2] || (O[2] = [
            s("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Qr),
      (t(), F(Te, { to: "body" }, [
        E(ze, {
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
                top: `${m.value.top}px`,
                left: `${m.value.left}px`,
                width: `${m.value.width}px`
              }),
              role: "listbox"
            }, [
              S.value ? (t(), n("div", ni, [
                oe(s("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": O[0] || (O[0] = (j) => f.value = j),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: K
                }, null, 40, li), [
                  [Se, f.value]
                ])
              ])) : _("", !0),
              s("div", si, [
                (t(!0), n(z, null, D(C.value, (j, W) => (t(), n("button", {
                  key: j.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", W === k.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": W === k.value,
                  onMouseenter: (I) => k.value = W,
                  onClick: (I) => x(j)
                }, p(j.label), 43, oi))), 128)),
                C.value.length === 0 ? (t(), n("p", ri, [
                  w.value ? (t(), n(z, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(z, { key: 1 }, [
                    R("Nothing matches “" + p(f.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
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
}), ii = ["accept", "disabled"], ui = { class: "text-sm font-medium" }, di = { key: 0 }, ci = { key: 1 }, fi = { class: "text-muted-foreground text-xs" }, mi = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, pi = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, vi = ["src"], gi = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, hi = { class: "min-w-0 flex-1" }, bi = { class: "block truncate text-sm font-medium" }, xi = { class: "text-muted-foreground text-xs" }, yi = ["href"], ki = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, sa = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(null), i = G(!1), u = G(null), d = G(null), f = G(null), k = $(() => a.accept.map((x) => `.${x}`).join(",")), m = $(() => f.value ?? a.modelValue?.url ?? null), b = $(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${S(a.maxKilobytes * 1024)}`);
    function S(x) {
      if (!x)
        return "";
      const M = ["B", "KB", "MB", "GB"];
      let B = x, K = 0;
      for (; B >= 1024 && K < M.length - 1; )
        B /= 1024, K++;
      return `${B.toFixed(B < 10 && K > 0 ? 1 : 0)} ${M[K]}`;
    }
    function C(x) {
      return x.split(".").pop()?.toLowerCase() ?? "";
    }
    function w(x) {
      return a.accept.length && !a.accept.includes(C(x.name)) ? `${C(x.name).toUpperCase() || "That"} files are not accepted here.` : x.size > a.maxKilobytes * 1024 ? `That file is ${S(x.size)}; the limit is ${S(a.maxKilobytes * 1024)}.` : null;
    }
    async function y(x) {
      const M = x?.[0];
      if (!(!M || a.disabled) && (d.value = w(M), !d.value)) {
        g(), a.image && M.type.startsWith("image/") && (f.value = URL.createObjectURL(M)), u.value = 0;
        try {
          const B = await a.upload(M, (K) => {
            u.value = K;
          });
          r("update:modelValue", B);
        } catch (B) {
          d.value = B instanceof Error ? B.message : "The upload failed.", g();
        } finally {
          u.value = null, o.value && (o.value.value = "");
        }
      }
    }
    function g() {
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function v() {
      const x = a.modelValue;
      g(), d.value = null, r("update:modelValue", null), x && !x.url && a.discard && await a.discard(x.value).catch(() => {
      });
    }
    function c(x) {
      i.value = !1, y(x.dataTransfer?.files ?? null);
    }
    return (x, M) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", pi, [
        e.image && m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, vi)) : (t(), n("span", gi, p(C(e.modelValue.name) || "file"), 1)),
        s("span", hi, [
          s("span", bi, p(e.modelValue.name), 1),
          s("span", xi, [
            R(p(S(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              M[4] || (M[4] = R(" · ", -1)),
              s("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, yi)
            ], 64)) : (t(), n(z, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? _("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: v
        }, [...M[5] || (M[5] = [
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
        onDragover: M[1] || (M[1] = ce((B) => i.value = !0, ["prevent"])),
        onDragleave: M[2] || (M[2] = ce((B) => i.value = !1, ["prevent"])),
        onDrop: ce(c, ["prevent"])
      }, [
        s("input", {
          ref_key: "input",
          ref: o,
          type: "file",
          class: "sr-only",
          accept: k.value,
          disabled: e.disabled,
          onChange: M[0] || (M[0] = (B) => y(B.target.files))
        }, null, 40, ii),
        M[3] || (M[3] = s("svg", {
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
        s("span", ui, [
          u.value === null ? (t(), n("span", di, "Drop a file or click to choose")) : (t(), n("span", ci, "Uploading…"))
        ]),
        s("span", fi, p(b.value), 1),
        u.value !== null ? (t(), n("span", mi, [
          s("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: Q({ width: `${u.value}%` })
          }, null, 4)
        ])) : _("", !0)
      ], 34)),
      d.value ? (t(), n("p", ki, p(d.value), 1)) : _("", !0)
    ]));
  }
}), $i = { class: "flex flex-col gap-2" }, wi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Ci = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, _i = { class: "flex flex-col gap-1" }, Si = ["onUpdate:modelValue", "disabled", "aria-label"], Mi = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Bi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Pi = ["onUpdate:modelValue", "disabled", "aria-label"], zi = ["disabled", "aria-label", "onClick"], Ai = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ji = { class: "flex items-center gap-3" }, Oi = ["disabled"], Li = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Vi = /* @__PURE__ */ P({
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
    function d(y) {
      return y ? Object.entries(y).map(([g, v]) => ({
        uid: i++,
        key: g,
        value: v ?? ""
      })) : [];
    }
    re(
      () => a.modelValue,
      (y) => {
        JSON.stringify(y ?? null) !== JSON.stringify(f()) && (u.value = d(y));
      }
    );
    function f() {
      const y = {};
      for (const g of u.value) {
        const v = g.key.trim();
        v !== "" && (y[v] = g.value);
      }
      return Object.keys(y).length ? y : null;
    }
    function k() {
      r("update:modelValue", f());
    }
    const m = $(() => {
      const y = /* @__PURE__ */ new Map();
      for (const g of u.value) {
        const v = g.key.trim();
        v !== "" && y.set(v, (y.get(v) ?? 0) + 1);
      }
      return new Set([...y.entries()].filter(([, g]) => g > 1).map(([g]) => g));
    }), b = $(
      () => new Set(
        u.value.map((y) => y.key.trim()).filter((y) => y !== "" && !o.test(y))
      )
    ), S = $(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function C() {
      S.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function w(y) {
      u.value = u.value.filter((g) => g.uid !== y), k();
    }
    return (y, g) => (t(), n("div", $i, [
      u.value.length ? (t(), n("div", wi, [
        s("div", Ci, [
          s("span", null, p(e.keyLabel), 1),
          s("span", null, p(e.valueLabel), 1),
          g[0] || (g[0] = s("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, D(u.value, (v) => (t(), n("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          s("div", _i, [
            oe(s("input", {
              "onUpdate:modelValue": (c) => v.key = c,
              type: "text",
              class: A([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                m.value.has(v.key.trim()) || b.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: k
            }, null, 42, Si), [
              [Se, v.key]
            ]),
            b.value.has(v.key.trim()) ? (t(), n("p", Mi, " Letters, numbers, underscores and dashes only. ")) : m.value.has(v.key.trim()) ? (t(), n("p", Bi, " Used twice - only the last value will be saved. ")) : _("", !0)
          ]),
          oe(s("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: k
          }, null, 40, Pi), [
            [Se, v.value]
          ]),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (c) => w(v.uid)
          }, [...g[1] || (g[1] = [
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
          ])], 8, zi)
        ]))), 128))
      ])) : (t(), n("p", Ai, " Nothing here yet. ")),
      s("div", ji, [
        s("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || S.value,
          onClick: C
        }, [
          g[2] || (g[2] = s("svg", {
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
        ], 8, Oi),
        e.maxPairs !== null ? (t(), n("p", Li, p(u.value.length) + " of " + p(e.maxPairs), 1)) : _("", !0)
      ])
    ]));
  }
}), Di = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Ti = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Fi = ["disabled", "title", "aria-label", "onClick"], Ei = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ii = ["d"], Ni = ["disabled"], Ri = ["contenteditable", "data-placeholder"], Ui = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Hi = /* @__PURE__ */ P({
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
    ], d = $(() => u.filter((w) => a.toolbar.includes(w.id))), f = $(() => a.toolbar.includes("link")), k = G(0);
    function m() {
      const w = o.value?.innerHTML ?? "", y = (o.value?.innerText ?? "").trim();
      k.value = y.length;
      const g = y === "" ? null : w;
      i = g, r("update:modelValue", g);
    }
    function b(w) {
      a.disabled || (o.value?.focus(), document.execCommand(w.command, !1, w.argument), m());
    }
    function S() {
      if (a.disabled)
        return;
      const w = window.prompt("Link address");
      w && (o.value?.focus(), document.execCommand("createLink", !1, w), m());
    }
    function C(w) {
      w.preventDefault();
      const y = w.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, y), m();
    }
    return ue(() => {
      o.value && (o.value.innerHTML = a.modelValue ?? "", k.value = o.value.innerText.trim().length);
    }), re(
      () => a.modelValue,
      (w) => {
        w !== i && o.value && (o.value.innerHTML = w ?? "", k.value = o.value.innerText.trim().length);
      }
    ), (w, y) => (t(), n("div", Di, [
      s("div", Ti, [
        (t(!0), n(z, null, D(d.value, (g) => (t(), n("button", {
          key: g.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: g.label,
          "aria-label": g.label,
          onMousedown: y[0] || (y[0] = ce(() => {
          }, ["prevent"])),
          onClick: (v) => b(g)
        }, [
          (t(), n("svg", Ei, [
            s("path", {
              d: g.path
            }, null, 8, Ii)
          ]))
        ], 40, Fi))), 128)),
        f.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: y[1] || (y[1] = ce(() => {
          }, ["prevent"])),
          onClick: S
        }, [...y[2] || (y[2] = [
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
        ])], 40, Ni)) : _("", !0)
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
        onPaste: C
      }, null, 42, Ri),
      e.maxLength !== null ? (t(), n("div", Ui, p(k.value) + " / " + p(e.maxLength), 1)) : _("", !0)
    ]));
  }
}), qi = /* @__PURE__ */ kt(Hi, [["__scopeId", "data-v-32c63bc7"]]), Ki = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, Gi = ["for"], Wi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Zi = {
  key: 7,
  class: "relative"
}, Ji = ["disabled", "aria-invalid"], Yi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Xi = { class: "max-h-56 overflow-y-auto p-1" }, Qi = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, eu = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, tu = ["onClick"], au = ["id", "value", "disabled", "aria-invalid"], nu = ["value"], lu = {
  key: 9,
  class: "flex items-center gap-2 text-sm"
}, su = { class: "text-muted-foreground" }, ou = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, ru = { class: "text-muted-foreground" }, iu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], uu = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], du = {
  key: 13,
  class: "flex flex-wrap gap-1.5"
}, cu = ["disabled", "aria-pressed", "onClick"], fu = {
  key: 14,
  class: "flex flex-wrap gap-1.5"
}, mu = ["title", "disabled", "onClick"], pu = {
  key: 15,
  class: "text-destructive text-xs",
  role: "alert"
}, vu = {
  key: 16,
  class: "text-muted-foreground text-xs"
}, qe = /* @__PURE__ */ P({
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
    const a = zt(() => import("./PkRepeater-J84jGe3T.js")), r = zt(() => import("./PkBuilder-DXeyw3Du.js")), o = e, i = l, u = G(!1), d = G(""), f = G([]), k = G(!1), m = G(null);
    let b;
    re(d, (v) => {
      o.searchOptions && (clearTimeout(b), k.value = !0, b = setTimeout(async () => {
        try {
          f.value = await o.searchOptions(v);
        } catch {
        } finally {
          k.value = !1;
        }
      }, 200));
    });
    async function S() {
      if (!(o.processing || o.field.disabled) && (u.value = !0, f.value.length === 0 && o.searchOptions)) {
        k.value = !0;
        try {
          f.value = await o.searchOptions("");
        } finally {
          k.value = !1;
        }
      }
    }
    function C(v) {
      m.value = v.label, i("change", v.value), u.value = !1, d.value = "";
    }
    function w() {
      m.value = null, i("change", null);
    }
    me(() => clearTimeout(b));
    const y = $(() => Xr(o.field.type));
    function g(v) {
      const c = document.getElementById(`f-${o.field.key}`);
      if (!(c instanceof HTMLTextAreaElement) && !(c instanceof HTMLInputElement))
        return;
      const x = c.selectionStart ?? c.value.length, M = c.selectionEnd ?? x;
      c.setRangeText(v, x, M, "end"), c.dispatchEvent(new Event("input", { bubbles: !0 })), c.focus();
    }
    return (v, c) => e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", Ki, [
      s("label", {
        for: `f-${e.field.key}`,
        class: A(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
      }, [
        R(p(e.field.label) + " ", 1),
        e.field.required ? (t(), n("span", Wi, "*")) : _("", !0)
      ], 10, Gi),
      y.value ? (t(), F(Ae(y.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": c[0] || (c[0] = (x) => i("change", x))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), F(sa, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": c[1] || (c[1] = (x) => i("change", x))
      }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), F(h(a), {
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
        "onUpdate:modelValue": c[2] || (c[2] = (x) => i("change", x))
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), F(h(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": c[3] || (c[3] = (x) => i("change", x))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), F(qi, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": c[4] || (c[4] = (x) => i("change", x))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), F(Vi, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": c[5] || (c[5] = (x) => i("change", x))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), F(_t, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": c[6] || (c[6] = (x) => i("change", x))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Zi, [
        s("button", {
          type: "button",
          class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          onClick: S
        }, [
          s("span", {
            class: A(m.value || e.value ? "" : "text-muted-foreground")
          }, p(m.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), n("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: ce(w, ["stop"])
          }, " ✕ ")) : _("", !0)
        ], 8, Ji),
        u.value ? (t(), n("div", Yi, [
          oe(s("input", {
            "onUpdate:modelValue": c[7] || (c[7] = (x) => d.value = x),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [Se, d.value]
          ]),
          s("div", Xi, [
            k.value ? (t(), n("p", Qi, " Searching… ")) : f.value.length === 0 ? (t(), n("p", eu, " No matches ")) : _("", !0),
            (t(!0), n(z, null, D(f.value, (x) => (t(), n("button", {
              key: String(x.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (M) => C(x)
            }, p(x.label), 9, tu))), 128))
          ])
        ])) : _("", !0),
        u.value ? (t(), n("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: c[8] || (c[8] = (x) => u.value = !1)
        })) : _("", !0)
      ])) : e.field.type === "select" ? (t(), n("select", {
        key: 8,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onChange: c[9] || (c[9] = (x) => i("change", x.target.value || null))
      }, [
        c[14] || (c[14] = s("option", { value: "" }, "-", -1)),
        (t(!0), n(z, null, D(e.options, (x) => (t(), n("option", {
          key: String(x.value),
          value: x.value
        }, p(x.label), 9, nu))), 128))
      ], 40, au)) : e.field.type === "toggle" ? (t(), n("label", lu, [
        E(h(Ve), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": c[10] || (c[10] = (x) => i("change", x))
        }, null, 8, ["id", "model-value", "disabled"]),
        s("span", su, p(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), n("label", ou, [
        E(h(Sr), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": c[11] || (c[11] = (x) => i("change", x === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        s("span", ru, p(e.field.help ?? e.field.label), 1)
      ])) : e.field.type === "textarea" ? (t(), n("textarea", {
        key: 11,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        rows: e.field.rows ?? 3,
        placeholder: e.field.placeholder,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: c[12] || (c[12] = (x) => i("change", x.target.value))
      }, null, 40, iu)) : (t(), n("input", {
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
        onInput: c[13] || (c[13] = (x) => i("change", x.target.value))
      }, null, 40, uu)),
      e.field.type === "number" && e.field.presets?.length ? (t(), n("div", du, [
        (t(!0), n(z, null, D(e.field.presets, (x) => (t(), n("button", {
          key: x,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: A([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == x ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == x
          ),
          onClick: (M) => i("change", String(x))
        }, p(x), 11, cu))), 128))
      ])) : _("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", fu, [
        (t(!0), n(z, null, D(e.field.chips, (x, M) => (t(), n("button", {
          key: M,
          type: "button",
          title: x,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (B) => g(String(M))
        }, p(M), 9, mu))), 128))
      ])) : _("", !0),
      e.error ? (t(), n("p", pu, p(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", vu, p(e.field.help), 1)) : _("", !0)
    ]));
  }
}), gu = { class: "flex flex-col gap-2" }, hu = { class: "min-w-0 flex-1" }, bu = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, xu = ["disabled", "aria-label", "onClick"], yu = ["disabled", "aria-label", "onClick"], ku = ["disabled", "title", "aria-label", "onClick"], $u = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, wu = ["disabled"], K$ = /* @__PURE__ */ P({
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
    function u(v) {
      return Array.isArray(v) ? v.map((c) => ({ uid: o++, data: { ...c } })) : [];
    }
    re(
      () => a.modelValue,
      (v) => {
        JSON.stringify(v ?? null) !== JSON.stringify(d()) && (i.value = u(v));
      }
    );
    function d() {
      const v = [];
      for (const c of i.value) {
        const x = {};
        let M = !1;
        for (const B of a.children) {
          const K = c.data[B.key] ?? null;
          x[B.key] = K, K !== null && K !== "" && !(Array.isArray(K) && K.length === 0) && (M = !0);
        }
        M && v.push(x);
      }
      return v.length ? v : null;
    }
    function f() {
      r("update:modelValue", d());
    }
    const k = $(() => a.maxItems !== null && i.value.length >= a.maxItems), m = $(() => a.minItems !== null && i.value.length <= a.minItems), b = $(() => a.children.length === 1);
    function S() {
      if (k.value || a.disabled)
        return;
      const v = {};
      for (const c of a.children)
        v[c.key] = null;
      i.value.push({ uid: o++, data: v });
    }
    function C(v) {
      i.value = i.value.filter((c) => c.uid !== v), f();
    }
    function w(v, c) {
      const x = v + c;
      if (x < 0 || x >= i.value.length)
        return;
      const M = [...i.value], [B] = M.splice(v, 1);
      M.splice(x, 0, B), i.value = M, f();
    }
    function y(v, c, x) {
      const M = i.value.find((B) => B.uid === v);
      M && (M.data[c] = x, f());
    }
    function g(v, c) {
      return a.errors[`${a.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), n("div", gu, [
      (t(!0), n(z, null, D(i.value, (x, M) => (t(), n("div", {
        key: x.uid,
        class: "flex items-start gap-2"
      }, [
        s("span", {
          class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", b.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, p(M + 1), 3),
        s("div", hu, [
          b.value ? (t(), F(qe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: x.data[e.children[0].key],
            error: g(M, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (B) => y(x.uid, e.children[0].key, B)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", bu, [
            (t(!0), n(z, null, D(e.children, (B) => (t(), F(qe, {
              key: B.key,
              field: { ...B, disabled: B.disabled || e.disabled },
              value: x.data[B.key],
              error: g(M, B.key),
              options: e.childOptions[B.key] ?? [],
              onChange: (K) => y(x.uid, B.key, K)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        s("div", {
          class: A(["flex shrink-0 items-center gap-0.5", b.value ? "mt-1" : "mt-0"])
        }, [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || M === 0,
            "aria-label": `Move ${e.itemLabel} ${M + 1} up`,
            onClick: (B) => w(M, -1)
          }, [...c[0] || (c[0] = [
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
          ])], 8, xu),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || M === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${M + 1} down`,
            onClick: (B) => w(M, 1)
          }, [...c[1] || (c[1] = [
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
          ])], 8, yu),
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || m.value,
            title: m.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${M + 1}`,
            onClick: (B) => C(x.uid)
          }, [...c[2] || (c[2] = [
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
          ])], 8, ku)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", $u, " No " + p(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : _("", !0),
      k.value ? _("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: S
      }, [
        c[3] || (c[3] = s("svg", {
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
      ], 8, wu))
    ]));
  }
}), Cu = { class: "space-y-1" }, _u = { class: "flex items-center gap-1" }, Su = ["disabled", "title", "aria-label", "onClick"], Mu = ["aria-pressed"], Bu = ["id", "value", "rows", "disabled"], Pu = ["innerHTML"], zu = /* @__PURE__ */ P({
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
    function u(b) {
      return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = $(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(b, S = b) {
      const C = document.getElementById(a.id ?? "");
      if (C === null)
        return;
      const w = C.selectionStart, y = C.selectionEnd, g = i.value.slice(w, y);
      r(
        "update:modelValue",
        `${i.value.slice(0, w)}${b}${g}${S}${i.value.slice(y)}`
      );
    }
    const k = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, m = $(
      () => (a.toolbar ?? Object.keys(k)).filter((b) => b in k)
    );
    return (b, S) => (t(), n("div", Cu, [
      s("div", _u, [
        (t(!0), n(z, null, D(m.value, (C) => (t(), n("button", {
          key: C,
          type: "button",
          disabled: e.disabled,
          title: C,
          "aria-label": C,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (w) => k[C].run()
        }, p(k[C].label), 9, Su))), 128)),
        s("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": o.value,
          onClick: S[0] || (S[0] = (C) => o.value = !o.value)
        }, " Preview ", 8, Mu)
      ]),
      o.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, Pu)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: S[1] || (S[1] = (C) => r("update:modelValue", C.target.value))
      }, null, 40, Bu))
    ]));
  }
}), Au = { class: "space-y-1" }, ju = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Ou = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Lu = ["id", "value", "rows", "disabled"], Vu = { class: "text-muted-foreground text-xs" }, Du = {
  key: 0,
  class: "text-destructive text-xs"
}, Tu = /* @__PURE__ */ P({
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
`).length, 1)), f = $(() => {
      if (a.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
      } catch (b) {
        return b instanceof Error ? b.message : "Not valid JSON.";
      }
    });
    function k(b) {
      r("update:modelValue", b.target.value);
    }
    function m(b) {
      if (b.key === "Escape") {
        i.value = !1;
        return;
      }
      if (b.key !== "Tab" && (i.value = !0), b.key !== "Tab" || !i.value)
        return;
      b.preventDefault();
      const S = b.target, C = S.selectionStart, w = S.selectionEnd, y = `${u.value.slice(0, C)}    ${u.value.slice(w)}`;
      r("update:modelValue", y), requestAnimationFrame(() => {
        S.selectionStart = S.selectionEnd = C + 4;
      });
    }
    return (b, S) => (t(), n("div", Au, [
      s("div", ju, [
        s("div", Ou, [
          (t(!0), n(z, null, D(d.value, (C) => (t(), n("div", { key: C }, p(C), 1))), 128))
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
          onKeydown: m
        }, null, 40, Lu)
      ]),
      s("p", Vu, p(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", Du, p(f.value), 1)) : _("", !0)
    ]));
  }
}), Fu = { class: "space-y-3" }, Eu = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Iu = { class: "text-sm font-medium" }, Nu = { class: "flex items-center gap-1" }, Ru = ["disabled", "onClick"], Uu = ["disabled", "onClick"], Hu = ["disabled", "onClick"], qu = { class: "space-y-3 p-3" }, Ku = { class: "flex flex-wrap items-center gap-2" }, Gu = ["disabled", "onClick"], Wu = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, G$ = /* @__PURE__ */ P({
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
      () => Object.fromEntries(a.blocks.map((S) => [S.type, S]))
    ), u = $(() => a.maxBlocks !== null && o.value.length >= a.maxBlocks);
    function d(S) {
      r("update:modelValue", S);
    }
    function f(S) {
      u.value || d([...o.value, { type: S, data: {} }]);
    }
    function k(S) {
      d(o.value.filter((C, w) => w !== S));
    }
    function m(S, C) {
      const w = S + C;
      if (w < 0 || w >= o.value.length)
        return;
      const y = [...o.value], [g] = y.splice(S, 1);
      y.splice(w, 0, g), d(y);
    }
    function b(S, C, w) {
      d(
        o.value.map(
          (y, g) => g === S ? { ...y, data: { ...y.data, [C]: w } } : y
        )
      );
    }
    return (S, C) => (t(), n("div", Fu, [
      (t(!0), n(z, null, D(o.value, (w, y) => (t(), n("div", {
        key: `${w.type}-${y}`,
        class: "bg-card rounded-lg border"
      }, [
        s("div", Eu, [
          s("span", Iu, p(i.value[w.type]?.label ?? w.type), 1),
          s("div", Nu, [
            s("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || y === 0,
              "aria-label": "Move up",
              onClick: (g) => m(y, -1)
            }, " ↑ ", 8, Ru),
            s("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || y === o.value.length - 1,
              "aria-label": "Move down",
              onClick: (g) => m(y, 1)
            }, " ↓ ", 8, Uu),
            s("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (g) => k(y)
            }, " Remove ", 8, Hu)
          ])
        ]),
        s("div", qu, [
          (t(!0), n(z, null, D(i.value[w.type]?.fields ?? [], (g) => (t(), F(qe, {
            key: g.key,
            field: g,
            value: w.data[g.key] ?? null,
            error: e.errors?.[g.key],
            processing: e.disabled,
            onChange: (v) => b(y, g.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      s("div", Ku, [
        (t(!0), n(z, null, D(e.blocks, (w) => (t(), n("button", {
          key: w.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (y) => f(w.type)
        }, " + " + p(w.label), 9, Gu))), 128)),
        u.value ? (t(), n("span", Wu, p(e.maxBlocks) + " is the maximum here. ", 1)) : _("", !0)
      ])
    ]));
  }
}), Zu = ["name", "value", "checked", "disabled", "onChange"], Ju = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Yu = /* @__PURE__ */ P({
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
      class: A(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(z, null, D(e.options, (d) => (t(), n("label", {
        key: String(d.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        s("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: o(d),
          disabled: e.disabled,
          onChange: (f) => r("update:modelValue", d.value)
        }, null, 40, Zu),
        R(" " + p(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ju, " Nothing to choose from yet. ")) : _("", !0)
    ], 2));
  }
}), Xu = ["value", "checked", "disabled", "onChange"], Qu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ed = /* @__PURE__ */ P({
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
    function i(f) {
      return o.value.some((k) => k == f.value);
    }
    function u(f) {
      r(
        "update:modelValue",
        i(f) ? o.value.filter((k) => k != f.value) : [...o.value, f.value]
      );
    }
    const d = $(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, k) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: Q(d.value)
    }, [
      (t(!0), n(z, null, D(e.options, (m) => (t(), n("label", {
        key: String(m.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        s("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: m.value,
          checked: i(m),
          disabled: e.disabled,
          onChange: (b) => u(m)
        }, null, 40, Xu),
        R(" " + p(m.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Qu, " Nothing to choose from yet. ")) : _("", !0)
    ], 4));
  }
}), td = { class: "flex flex-col gap-1.5" }, ad = ["aria-label", "onClick"], nd = ["placeholder", "disabled", "maxlength"], ld = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, sd = ["onClick"], od = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, rd = /* @__PURE__ */ P({
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
        (b) => !i.value.some((S) => S.toLowerCase() === b.toLowerCase())
      )
    );
    function f(b) {
      const S = b.trim().slice(0, a.field.maxLength ?? 40);
      if (S === "" || u.value) {
        o.value = "";
        return;
      }
      if (i.value.some((C) => C.toLowerCase() === S.toLowerCase())) {
        o.value = "";
        return;
      }
      r("update:modelValue", [...i.value, S]), o.value = "";
    }
    function k(b) {
      r(
        "update:modelValue",
        i.value.filter((S, C) => C !== b)
      );
    }
    function m(b) {
      if (b.key === "Enter" || b.key === ",") {
        b.preventDefault(), f(o.value);
        return;
      }
      b.key === "Backspace" && o.value === "" && i.value.length > 0 && k(i.value.length - 1);
    }
    return (b, S) => (t(), n("div", td, [
      s("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, D(i.value, (C, w) => (t(), n("span", {
          key: `${C}-${w}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(p(C) + " ", 1),
          e.disabled ? _("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${C}`,
            onClick: (y) => k(w)
          }, " × ", 8, ad))
        ]))), 128)),
        oe(s("input", {
          "onUpdate:modelValue": S[0] || (S[0] = (C) => o.value = C),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: m,
          onBlur: S[1] || (S[1] = (C) => f(o.value))
        }, null, 40, nd), [
          [Se, o.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", ld, [
        S[2] || (S[2] = s("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(z, null, D(d.value, (C) => (t(), n("button", {
          key: C,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (w) => f(C)
        }, p(C), 9, sd))), 128))
      ])) : _("", !0),
      u.value ? (t(), n("p", od, " That is the maximum of " + p(e.field.max ?? 25) + " tags. ", 1)) : _("", !0)
    ]));
  }
}), id = 4.5, Dt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function oa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function lt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function mt(e) {
  const [l, a, r] = oa(e);
  return 0.2126 * lt(l) + 0.7152 * lt(a) + 0.0722 * lt(r);
}
function ra(e, l) {
  const a = mt(e), r = mt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function ud(e, l, a) {
  if (!Dt.test(e) || !Dt.test(l))
    return e;
  const r = mt(l) > 0.5, o = r ? 0 : 255;
  let i = oa(e);
  for (let u = 0; u <= 20; u++) {
    const d = dd(i);
    if (ra(d, l) >= a)
      return d;
    i = i.map((f) => f + (o - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function dd(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const cd = { class: "flex flex-col gap-2" }, fd = { class: "flex items-center gap-2" }, md = {
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
}, pd = ["value", "disabled", "aria-label"], vd = ["value", "disabled", "placeholder"], gd = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, hd = ["aria-label", "title", "onClick"], bd = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, xd = /* @__PURE__ */ P({
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
      const y = w.startsWith("#") ? w : `#${w}`;
      return o.test(y) ? y.toLowerCase() : w;
    }
    function f(C) {
      r("update:modelValue", d(C.target.value));
    }
    const k = $(() => !u.value || !a.field.contrastBackground || !o.test(a.field.contrastBackground) ? null : ra(i.value, a.field.contrastBackground)), m = $(() => a.field.contrastMinRatio ?? id), b = $(() => k.value !== null && k.value < m.value);
    function S() {
      a.field.contrastBackground && r(
        "update:modelValue",
        ud(i.value, a.field.contrastBackground, m.value)
      );
    }
    return (C, w) => (t(), n("div", cd, [
      s("div", fd, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: w[0] || (w[0] = (y) => r("update:modelValue", y.target.value))
        }, null, 40, pd)) : (t(), n("span", md)),
        s("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, vd)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", gd, [
        (t(!0), n(z, null, D(e.field.presets, (y) => (t(), n("button", {
          key: y,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === y.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: Q({ backgroundColor: y }),
          "aria-label": y,
          title: y,
          onClick: (g) => r("update:modelValue", y.toLowerCase())
        }, null, 14, hd))), 128))
      ])) : _("", !0),
      b.value ? (t(), n("p", bd, [
        s("span", null, " This fails contrast at " + p(k.value.toFixed(1)) + ":1 - it needs at least " + p(m.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? _("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: S
        }, " Use a readable shade "))
      ])) : _("", !0)
    ]));
  }
}), yd = { class: "flex items-center gap-3" }, kd = ["min", "max", "step", "value", "disabled", "aria-label"], $d = { class: "flex shrink-0 items-center gap-1" }, wd = ["min", "max", "step", "value", "disabled"], Cd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, _d = /* @__PURE__ */ P({
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
      const m = Number(a.modelValue);
      return Number.isFinite(m) ? m : o.value;
    }), f = $(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function k(m) {
      if (m === "") {
        r("update:modelValue", null);
        return;
      }
      const b = Number(m);
      r("update:modelValue", Number.isFinite(b) ? b : null);
    }
    return (m, b) => (t(), n("div", yd, [
      s("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: o.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: b[0] || (b[0] = (S) => k(S.target.value))
      }, null, 40, kd),
      s("div", $d, [
        s("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: o.value,
          max: i.value,
          step: u.value,
          value: f.value ? "" : d.value,
          disabled: e.disabled,
          onInput: b[1] || (b[1] = (S) => k(S.target.value))
        }, null, 40, wd),
        e.field.unit ? (t(), n("span", Cd, p(e.field.unit), 1)) : _("", !0)
      ])
    ]));
  }
}), We = /* @__PURE__ */ new Map();
function st(e, l) {
  We.set(e, l);
}
function Sd(e) {
  return We.get(e);
}
function W$(e) {
  return We.has(e);
}
function Md() {
  return [...We.keys()].sort();
}
function Z$() {
  We.clear();
}
const Bd = ["name", "value", "checked", "disabled", "onChange"], Pd = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, zd = { class: "whitespace-nowrap" }, Ad = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, jd = ["name", "value", "checked", "disabled", "onChange"], Od = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Ld = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Vd = { class: "text-center text-xs font-medium" }, Dd = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Td = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Fd = /* @__PURE__ */ P({
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
      () => a.field.preview ? Sd(a.field.preview) : void 0
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
    function f(k) {
      return a.modelValue != null && k.value == a.modelValue;
    }
    return (k, m) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, D(e.options, (b) => (t(), n("label", {
        key: String(b.value),
        class: A(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          f(b) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        s("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: f(b),
          disabled: e.disabled,
          onChange: (S) => r("update:modelValue", b.value)
        }, null, 40, Bd),
        m[0] || (m[0] = s("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o.value ? (t(), n("span", Pd, [
          (t(), F(Ae(o.value), {
            value: b.value,
            label: b.label,
            selected: f(b)
          }, null, 8, ["value", "label", "selected"]))
        ])) : _("", !0),
        s("span", zd, p(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ad, " Nothing to choose from yet. ")) : _("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", d.value])
    }, [
      (t(!0), n(z, null, D(e.options, (b) => (t(), n("label", {
        key: String(b.value),
        class: A(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          f(b) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        s("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: f(b),
          disabled: e.disabled,
          onChange: (S) => r("update:modelValue", b.value)
        }, null, 40, jd),
        m[1] || (m[1] = s("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s("span", Od, [
          o.value ? (t(), F(Ae(o.value), {
            key: 0,
            value: b.value,
            label: b.label,
            selected: f(b)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Ld, " no preview ")) : _("", !0)
        ]),
        s("span", Vd, p(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Dd, " Nothing to choose from yet. ")) : _("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Td, [
        m[2] || (m[2] = R(" No preview registered for ", -1)),
        s("code", null, p(e.field.preview), 1),
        R(". Registered: " + p(h(Md)().join(", ") || "none") + ". ", 1)
      ])) : _("", !0)
    ], 2));
  }
}), Ed = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Id = /* @__PURE__ */ P({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Ed, [
      s("span", {
        class: "block size-full",
        style: Q({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Nd = { class: "flex flex-col items-center gap-1 text-center" }, Rd = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ia = /* @__PURE__ */ P({
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
    return (o, i) => (t(), n("div", Nd, [
      s("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: Q({ borderColor: a.value, color: a.value })
      }, p(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Rd, p(e.caption), 1)) : _("", !0)
    ]));
  }
}), Ud = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Hd = { class: "flex items-center gap-3" }, qd = ["src"], Kd = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Gd = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Wd = {
  key: 0,
  class: "text-right text-sm"
}, Zd = { class: "text-neutral-500" }, Jd = { class: "tabular-nums" }, Yd = { key: 1 }, Xd = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Qd = { class: "mt-2 font-medium" }, ec = { key: 2 }, tc = { class: "w-full text-sm" }, ac = { class: "w-full py-3 pr-2" }, nc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, lc = { key: 0 }, sc = ["colspan"], oc = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, rc = { class: "w-64 text-sm" }, ic = { class: "tabular-nums" }, uc = {
  key: 3,
  class: "py-2"
}, dc = { key: 4 }, cc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, fc = { class: "mt-2 flex flex-col gap-1 text-sm" }, mc = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, pc = { key: 0 }, vc = {
  key: 1,
  class: "mt-1"
}, gc = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, hc = /* @__PURE__ */ P({
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
    function o(f) {
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
    return (f, k) => (t(), n("article", Ud, [
      s("div", Hd, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, qd)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: Q({ color: a() })
        }, p(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, D(e.document.blocks, (m, b) => (t(), n(z, { key: b }, [
        m.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: Q({ borderColor: a() })
        }, [
          s("div", null, [
            s("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: Q({ color: a() })
            }, p(m.title), 5),
            m.subtitle ? (t(), n("p", Kd, p(m.subtitle), 1)) : _("", !0),
            m.reference ? (t(), n("p", Gd, p(m.reference), 1)) : _("", !0)
          ]),
          r(m).length ? (t(), n("dl", Wd, [
            (t(!0), n(z, null, D(r(m), (S, C) => (t(), n("div", {
              key: C,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              s("dt", Zd, p(S.label), 1),
              s("dd", Jd, p(S.value), 1)
            ]))), 128))
          ])) : _("", !0)
        ], 4)) : m.type === "party" ? (t(), n("section", Yd, [
          s("h2", Xd, p(m.heading), 1),
          s("p", Qd, p(m.name), 1),
          (t(!0), n(z, null, D(u(m.lines), (S, C) => (t(), n("p", {
            key: C,
            class: "text-sm text-neutral-600"
          }, p(S), 1))), 128))
        ])) : m.type === "lines" ? (t(), n("section", ec, [
          s("table", tc, [
            s("thead", null, [
              s("tr", {
                class: "border-b-2 text-left",
                style: Q({ borderColor: a() })
              }, [
                (t(!0), n(z, null, D(u(m.columns), (S, C) => (t(), n("th", {
                  key: C,
                  class: A(["pb-2 font-medium", C > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, p(S), 3))), 128))
              ], 4)
            ]),
            s("tbody", null, [
              (t(!0), n(z, null, D(o(m), (S, C) => (t(), n("tr", {
                key: C,
                class: "border-b border-neutral-200"
              }, [
                s("td", ac, [
                  s("p", null, p(S.description), 1),
                  S.detail ? (t(), n("p", nc, p(S.detail), 1)) : _("", !0)
                ]),
                (t(!0), n(z, null, D(S.cells, (w, y) => (t(), n("td", {
                  key: y,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, p(w), 1))), 128))
              ]))), 128)),
              o(m).length === 0 ? (t(), n("tr", lc, [
                s("td", {
                  colspan: u(m.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, p(m.empty), 9, sc)
              ])) : _("", !0)
            ])
          ]),
          i(m).length ? (t(), n("div", oc, [
            s("dl", rc, [
              (t(!0), n(z, null, D(i(m), (S, C) => (t(), n("div", {
                key: C,
                class: A([
                  "flex justify-between py-1",
                  S.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: Q(S.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                s("dt", {
                  class: A(S.strong ? "" : "text-neutral-600")
                }, p(S.label), 3),
                s("dd", ic, p(S.value), 1)
              ], 6))), 128))
            ])
          ])) : _("", !0)
        ])) : m.type === "code" ? (t(), n("section", uc, [
          E(ia, {
            code: d(m.code),
            caption: d(m.caption),
            style: Q(d(m.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : m.type === "steps" ? (t(), n("section", dc, [
          s("h2", cc, p(m.heading), 1),
          s("ol", fc, [
            (t(!0), n(z, null, D(u(m.items), (S, C) => (t(), n("li", {
              key: C,
              class: "flex gap-2"
            }, [
              s("span", {
                class: "font-semibold tabular-nums",
                style: Q({ color: a() })
              }, p(C + 1) + ".", 5),
              s("span", null, p(S), 1)
            ]))), 128))
          ])
        ])) : m.type === "note" ? (t(), n("p", {
          key: 5,
          class: A(["text-sm", m.emphasis ? "font-medium" : "text-neutral-600"]),
          style: Q(m.emphasis ? { color: a() } : void 0)
        }, p(m.text), 7)) : m.type === "footer" ? (t(), n("footer", mc, [
          m.text ? (t(), n("p", pc, p(m.text), 1)) : _("", !0),
          u(m.contacts).length ? (t(), n("p", vc, p(u(m.contacts).join(" · ")), 1)) : _("", !0)
        ])) : (t(), n("p", gc, " This document contains a “" + p(m.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), bc = ["aria-label", "title"], xc = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yc = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, J$ = /* @__PURE__ */ P({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = ea(), r = $(() => l.value.theme === "dark");
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
      (t(), n("svg", xc, [
        r.value ? (t(), n(z, { key: 0 }, [
          u[0] || (u[0] = s("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = s("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", yc))
      ]))
    ], 8, bc));
  }
}), kc = ["width", "height"], $c = { key: 0 }, wc = ["x1", "x2", "y1", "y2"], Cc = ["x", "y"], _c = ["x1", "x2", "y1", "y2"], Sc = ["x", "y"], Mc = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Bc = ["x", "y", "width", "height", "fill", "fill-opacity"], Pc = ["x", "y"], zc = ["x", "y"], Ac = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, jc = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Oc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Lc = { class: "text-xs font-semibold tabular-nums" }, Vc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Dc = { class: "text-muted-foreground" }, Tt = 5.6, Y$ = /* @__PURE__ */ P({
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
    let f = null;
    ue(() => {
      f = new ResizeObserver((V) => {
        u.value = Math.max(160, V[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), me(() => f?.disconnect());
    const k = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = $(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Z, q) => ({
      ...Z,
      color: Z.color ?? k[q % k.length]
    }))), b = $(() => m.value[0]?.points.map((V) => V.label) ?? []), S = $(() => b.value.length), C = $(() => l.orientation === "horizontal"), w = $(() => Math.max(0, ...b.value.map((V) => V.length))), y = $(() => {
      if (!C.value)
        return l.showAxis ? 44 : 8;
      const V = w.value * Tt + 16;
      return Math.round(Math.min(Math.max(60, V), u.value * 0.4));
    }), g = $(() => Math.max(4, Math.floor((y.value - 16) / Tt)));
    function v(V) {
      return V.length <= g.value ? V : `${V.slice(0, g.value - 1)}…`;
    }
    const c = $(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: y.value
    })), x = $(() => ({
      w: Math.max(1, u.value - c.value.left - c.value.right),
      h: Math.max(1, l.height - c.value.top - c.value.bottom)
    })), M = (V) => l.format ? l.format(V) : B(V);
    function B(V) {
      return Math.abs(V) >= 1e6 ? `${(V / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(V) >= 1e3 ? `${(V / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(V * 100) / 100);
    }
    const K = $(() => {
      const V = b.value.map(
        (ie, ge) => l.stacked ? m.value.reduce((ae, ve) => ae + Math.max(0, ve.points[ge]?.value ?? 0), 0) : Math.max(...m.value.map((ae) => ae.points[ge]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const Z = Math.max(...V, 0);
      if (Z <= 0)
        return 1;
      const q = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((ie) => Z <= ie * q) ?? 10) * q;
    }), N = $(
      () => (C.value ? x.value.h : x.value.w) / Math.max(1, S.value)
    ), Y = $(() => N.value * 0.68), T = $(
      () => l.stacked || m.value.length <= 1 ? Y.value : Y.value / m.value.length
    ), O = $(() => {
      const V = [], Z = new Array(S.value).fill(0);
      return m.value.forEach((q, X) => {
        q.points.forEach((ie, ge) => {
          const ve = Math.max(0, ie.value) / K.value * (C.value ? x.value.w : x.value.h), Ie = (C.value ? c.value.top : c.value.left) + ge * N.value + (N.value - Y.value) / 2, Pt = l.stacked ? 0 : X * T.value;
          V.push(
            C.value ? {
              x: c.value.left + Z[ge],
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
              y: c.value.top + x.value.h - ve - Z[ge],
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
    }), j = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((V) => ({
        value: K.value * (C.value ? V : 1 - V),
        x: c.value.left + x.value.w * V,
        y: c.value.top + x.value.h * V
      }))
    ), W = $(() => Math.max(1, Math.ceil(S.value / (C.value ? 14 : 10))));
    function I(V) {
      return V === S.value - 1 || V % W.value === 0;
    }
    function H(V) {
      return (C.value ? c.value.top : c.value.left) + V * N.value + N.value / 2;
    }
    const te = $(() => d.value === null ? null : {
      label: b.value[d.value],
      rows: m.value.map((V) => ({
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
      S.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: Z[0] || (Z[0] = (q) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", $c, [
            C.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, D(j.value, (q) => (t(), n("line", {
                key: `g-${q.x}`,
                x1: q.x,
                x2: q.x,
                y1: c.value.top,
                y2: c.value.top + x.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, wc))), 128)),
              (t(!0), n(z, null, D(j.value, (q) => (t(), n("text", {
                key: `gt-${q.x}`,
                x: q.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, p(B(q.value)), 9, Cc))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, D(j.value, (q) => (t(), n("line", {
                key: `g-${q.y}`,
                x1: c.value.left,
                x2: u.value - c.value.right,
                y1: q.y,
                y2: q.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, _c))), 128)),
              (t(!0), n(z, null, D(j.value, (q) => (t(), n("text", {
                key: `gt-${q.y}`,
                x: c.value.left - 8,
                y: q.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, p(B(q.value)), 9, Sc))), 128))
            ], 64))
          ])) : _("", !0),
          (t(!0), n(z, null, D(b.value, (q, X) => (t(), n("rect", {
            key: `hit-${X}`,
            x: C.value ? c.value.left : c.value.left + X * N.value,
            y: C.value ? c.value.top + X * N.value : c.value.top,
            width: C.value ? x.value.w : N.value,
            height: C.value ? N.value : x.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === X ? 0.4 : 0,
            onMouseenter: (ie) => d.value = X
          }, null, 40, Mc))), 128)),
          (t(!0), n(z, null, D(O.value, (q, X) => (t(), n("rect", {
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
          }, null, 8, Bc))), 128)),
          C.value ? (t(!0), n(z, { key: 1 }, D(b.value, (q, X) => oe((t(), n("text", {
            key: `c-${X}`,
            x: c.value.left - 8,
            y: H(X) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(p(v(q)) + " ", 1),
            s("title", null, p(q), 1)
          ], 8, Pc)), [
            [je, I(X)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, D(b.value, (q, X) => oe((t(), n("text", {
            key: `c-${X}`,
            x: H(X),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, p(q), 9, zc)), [
            [je, I(X)]
          ])), 128))
        ], 40, kc)),
        te.value ? (t(), n("div", Ac, [
          s("p", jc, p(te.value.label), 1),
          (t(!0), n(z, null, D(te.value.rows, (q, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: q.color })
            }, null, 4),
            s("span", Oc, p(q.name || "Value"), 1),
            s("span", Lc, p(M(q.value)), 1)
          ]))), 128))
        ])) : _("", !0),
        e.showLegend && m.value.length > 1 ? (t(), n("div", Vc, [
          (t(!0), n(z, null, D(m.value, (q, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: q.color })
            }, null, 4),
            s("span", Dc, p(q.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), Tc = ["width", "height"], Fc = ["id"], Ec = ["stop-color"], Ic = ["stop-color"], Nc = { key: 0 }, Rc = ["x1", "x2", "y1", "y2"], Uc = ["x", "y"], Hc = ["x", "y"], qc = ["x1", "x2", "y1", "y2"], Kc = ["d", "fill"], Gc = ["d", "stroke", "stroke-dasharray"], Wc = ["cx", "cy", "fill"], Zc = { key: 1 }, Jc = ["x1", "x2", "y1", "y2"], Yc = ["cx", "cy", "fill"], Xc = ["x", "y"], Qc = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, ef = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, tf = { class: "text-xs font-semibold tabular-nums" }, af = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, nf = { class: "text-muted-foreground" }, lf = /* @__PURE__ */ P({
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
    ], f = Math.random().toString(36).slice(2, 9), k = $(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Z, q) => ({
      ...Z,
      color: Z.color ?? d[q % d.length]
    }))), m = $(() => k.value[0]?.points.map((V) => V.label) ?? []), b = $(() => m.value.length), S = $(() => ({
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
    function y(V) {
      const Z = Math.max(...V, 0);
      if (Z <= 0)
        return 1;
      const q = 10 ** Math.floor(Math.log10(Z));
      return ([1, 2, 2.5, 5, 10].find((ie) => Z <= ie * q) ?? 10) * q;
    }
    const g = $(
      () => y(
        k.value.filter((V) => V.axis !== "right").flatMap((V) => V.points.map((Z) => Z.value))
      )
    ), v = $(
      () => y(
        k.value.filter((V) => V.axis === "right").flatMap((V) => V.points.map((Z) => Z.value))
      )
    ), c = $(() => ({
      w: Math.max(1, o.value - S.value.left - S.value.right),
      h: Math.max(1, l.height - S.value.top - S.value.bottom)
    }));
    function x(V) {
      return S.value.left + (b.value <= 1 ? 0 : V / (b.value - 1) * c.value.w);
    }
    function M(V, Z = "left") {
      const q = Z === "right" ? v.value : g.value;
      return S.value.top + c.value.h - V / q * c.value.h;
    }
    const B = $(
      () => k.value.map((V) => {
        const Z = V.points.map((X, ie) => ({
          ...X,
          x: x(ie),
          y: M(X.value, V.axis ?? "left")
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
      const q = S.value.top + c.value.h;
      return `${V} L${Z[Z.length - 1].x.toFixed(2)},${q} L${Z[0].x.toFixed(2)},${q} Z`;
    }
    const T = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((V) => ({
        y: S.value.top + c.value.h * V,
        value: g.value * (1 - V)
      }))
    ), O = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((V) => ({
        y: S.value.top + c.value.h * V,
        value: v.value * (1 - V)
      }))
    ), j = $(() => Math.max(1, Math.ceil(b.value / 8)));
    function W(V) {
      return V === b.value - 1 || V % j.value === 0;
    }
    function I(V) {
      const Z = V.currentTarget.getBoundingClientRect(), q = V.clientX - Z.left - S.value.left, X = b.value <= 1 ? 1 : c.value.w / (b.value - 1);
      i.value = Math.min(b.value - 1, Math.max(0, Math.round(q / X)));
    }
    const H = $(() => {
      if (i.value === null || b.value === 0)
        return null;
      const V = i.value;
      return {
        i: V,
        x: x(V),
        label: m.value[V],
        rows: B.value.map((Z) => ({
          name: Z.name,
          color: Z.color,
          value: Z.points[V]?.value ?? 0,
          y: Z.pts[V]?.y ?? 0
        }))
      };
    }), te = $(() => {
      if (!H.value)
        return {};
      const V = H.value.x > o.value * 0.6;
      return {
        left: `${H.value.x}px`,
        top: "8px",
        transform: V ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (V, Z) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      b.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: o.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: I,
          onMouseleave: Z[0] || (Z[0] = (q) => i.value = null)
        }, [
          s("defs", null, [
            (t(!0), n(z, null, D(B.value, (q, X) => (t(), n("linearGradient", {
              id: `pk-fill-${h(f)}-${X}`,
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
              }, null, 8, Ec),
              s("stop", {
                offset: "100%",
                "stop-color": q.color,
                "stop-opacity": "0.01"
              }, null, 8, Ic)
            ], 8, Fc))), 128))
          ]),
          e.showAxis ? (t(), n("g", Nc, [
            (t(!0), n(z, null, D(T.value, (q) => (t(), n("line", {
              key: q.y,
              x1: S.value.left,
              x2: o.value - S.value.right,
              y1: q.y,
              y2: q.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Rc))), 128)),
            (t(!0), n(z, null, D(T.value, (q) => (t(), n("text", {
              key: `t-${q.y}`,
              x: S.value.left - 8,
              y: q.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, p(w(q.value)), 9, Uc))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, D(O.value, (q) => (t(), n("text", {
              key: `rt-${q.y}`,
              x: o.value - S.value.right + 8,
              y: q.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, p(w(q.value)), 9, Hc))), 128)) : _("", !0)
          ])) : _("", !0),
          (t(!0), n(z, null, D(m.value, (q, X) => oe((t(), n("line", {
            key: `v-${X}`,
            x1: x(X),
            x2: x(X),
            y1: S.value.top,
            y2: S.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, qc)), [
            [je, W(X)]
          ])), 128)),
          (t(!0), n(z, null, D(B.value, (q, X) => (t(), n("g", {
            key: `s-${X}`
          }, [
            q.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: q.area,
              fill: `url(#pk-fill-${h(f)}-${X})`
            }, null, 8, Kc)) : _("", !0),
            s("path", {
              d: q.line,
              fill: "none",
              stroke: q.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": q.dashed ? "6 4" : void 0
            }, null, 8, Gc),
            q.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: q.pts[0].x,
              cy: q.pts[0].y,
              r: "3",
              fill: q.color
            }, null, 8, Wc)) : _("", !0)
          ]))), 128)),
          H.value ? (t(), n("g", Zc, [
            s("line", {
              x1: H.value.x,
              x2: H.value.x,
              y1: S.value.top,
              y2: S.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Jc),
            (t(!0), n(z, null, D(H.value.rows, (q, X) => (t(), n("circle", {
              key: `d-${X}`,
              cx: H.value.x,
              cy: q.y,
              r: "4",
              fill: q.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Yc))), 128))
          ])) : _("", !0),
          (t(!0), n(z, null, D(m.value, (q, X) => oe((t(), n("text", {
            key: `x-${X}`,
            x: x(X),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, p(q), 9, Xc)), [
            [je, W(X)]
          ])), 128))
        ], 40, Tc)),
        H.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: Q(te.value)
        }, [
          s("p", Qc, p(H.value.label), 1),
          (t(!0), n(z, null, D(H.value.rows, (q, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: q.color })
            }, null, 4),
            s("span", ef, p(q.name || "Value"), 1),
            s("span", tf, p(C(q.value)), 1)
          ]))), 128))
        ], 4)) : _("", !0),
        e.showLegend && k.value.length > 1 ? (t(), n("div", af, [
          (t(!0), n(z, null, D(B.value, (q, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: q.color })
            }, null, 4),
            s("span", nf, p(q.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), sf = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, of = { class: "text-muted-foreground text-[11px] capitalize" }, rf = { class: "text-sm font-semibold tabular-nums" }, uf = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ze = /* @__PURE__ */ P({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", sf, [
      s("p", of, p(e.label), 1),
      s("p", rf, [
        R(p(e.value) + " ", 1),
        e.share ? (t(), n("span", uf, " (" + p(e.share) + ") ", 1)) : _("", !0)
      ])
    ]));
  }
}), df = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, cf = ["width", "height", "viewBox", "aria-label"], ff = ["d", "fill", "fill-opacity", "onMouseenter"], mf = ["x", "y"], pf = ["x", "y"], vf = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, gf = ["onMouseenter"], hf = { class: "min-w-0 flex-1 truncate capitalize" }, bf = { class: "tabular-nums font-medium" }, xf = { class: "text-muted-foreground w-9 text-right tabular-nums" }, X$ = /* @__PURE__ */ P({
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
    ], r = $(() => l.data.reduce((g, v) => g + v.value, 0)), o = G(null), i = $(() => l.height), u = $(() => i.value / 2 - 4), d = $(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function f(g) {
      return a[g % a.length];
    }
    function k(g) {
      return 1 - Math.min(0.55, Math.floor(g / a.length) * 0.28);
    }
    const m = $(() => {
      if (r.value <= 0)
        return [];
      const g = i.value / 2;
      let v = -Math.PI / 2;
      return l.data.map((c, x) => {
        const M = c.value / r.value, B = M * Math.PI * 2, K = v, N = v + B;
        return v = N, {
          ...c,
          share: M,
          colour: f(x),
          opacity: k(x),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: M >= 0.9999 ? C(g) : S(g, K, N, u.value, d.value)
        };
      });
    });
    function b(g, v, c) {
      return `${(g + Math.cos(v) * c).toFixed(2)},${(g + Math.sin(v) * c).toFixed(2)}`;
    }
    function S(g, v, c, x, M) {
      const B = c - v > Math.PI ? 1 : 0;
      return M <= 0 ? `M${g},${g} L${b(g, v, x)} A${x},${x} 0 ${B} 1 ${b(g, c, x)} Z` : [
        `M${b(g, v, x)}`,
        `A${x},${x} 0 ${B} 1 ${b(g, c, x)}`,
        `L${b(g, c, M)}`,
        `A${M},${M} 0 ${B} 0 ${b(g, v, M)}`,
        "Z"
      ].join(" ");
    }
    function C(g) {
      const v = u.value, c = d.value, x = [
        `M${g - v},${g}`,
        `A${v},${v} 0 1 1 ${g + v},${g}`,
        `A${v},${v} 0 1 1 ${g - v},${g}`,
        "Z"
      ];
      return c <= 0 ? x.join(" ") : [
        ...x,
        `M${g - c},${g}`,
        `A${c},${c} 0 1 0 ${g + c},${g}`,
        `A${c},${c} 0 1 0 ${g - c},${g}`,
        "Z"
      ].join(" ");
    }
    const w = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), y = (g) => `${(g * 100).toFixed(g < 0.01 ? 2 : 0)}%`;
    return (g, v) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", df, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${w(r.value)}`
      }, [
        (t(!0), n(z, null, D(m.value, (c, x) => (t(), n("path", {
          key: x,
          d: c.path,
          fill: c.colour,
          "fill-opacity": o.value === null || o.value === x ? c.opacity : c.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (M) => o.value = x,
          onMouseleave: v[0] || (v[0] = (M) => o.value = null)
        }, null, 40, ff))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          s("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, p(w(o.value === null ? r.value : m.value[o.value].value)), 9, mf),
          s("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, p(o.value === null ? "Total" : m.value[o.value].label), 9, pf)
        ], 64)) : _("", !0)
      ], 8, cf)),
      s("ul", vf, [
        (t(!0), n(z, null, D(m.value, (c, x) => (t(), n("li", {
          key: x,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", o.value === x ? "bg-muted" : ""]),
          onMouseenter: (M) => o.value = x,
          onMouseleave: v[1] || (v[1] = (M) => o.value = null)
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          s("span", hf, p(c.label), 1),
          s("span", bf, p(w(c.value)), 1),
          s("span", xf, p(y(c.share)), 1)
        ], 42, gf))), 128))
      ]),
      o.value !== null && e.type === "pie" ? (t(), F(Ze, {
        key: 0,
        label: m.value[o.value].label,
        value: w(m.value[o.value].value),
        share: y(m.value[o.value].share)
      }, null, 8, ["label", "value", "share"])) : _("", !0)
    ]));
  }
}), yf = ["width", "height", "viewBox", "aria-label"], kf = { class: "text-border" }, $f = ["x1", "x2", "y1", "y2", "stroke-dasharray"], wf = { class: "fill-muted-foreground text-[10px]" }, Cf = ["x", "y"], _f = ["x", "y"], Sf = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Mf = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, Q$ = /* @__PURE__ */ P({
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
      u = new ResizeObserver((j) => {
        const W = j[0]?.contentRect.width ?? 0;
        W > 0 && (o.value = W);
      }), r.value && u.observe(r.value);
    }), me(() => u?.disconnect());
    const d = $(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (j, W) => W.color ?? a[j % a.length], k = $(() => d.value.flatMap((j) => j.points)), m = $(() => k.value.some((j) => typeof j.r == "number")), b = { top: 12, right: 16, bottom: 32, left: 48 }, S = $(() => Math.max(10, o.value - b.left - b.right)), C = $(() => Math.max(10, l.height - b.top - b.bottom));
    function w(j) {
      if (j.length === 0)
        return [0, 1];
      const W = Math.min(...j), I = Math.max(...j), H = I - W || Math.abs(I) || 1;
      return [W - H * 0.08, I + H * 0.08];
    }
    const y = $(() => w(k.value.map((j) => j.x))), g = $(() => w(k.value.map((j) => j.y))), v = (j) => {
      const [W, I] = y.value;
      return b.left + (j - W) / (I - W) * S.value;
    }, c = (j) => {
      const [W, I] = g.value;
      return b.top + C.value - (j - W) / (I - W) * C.value;
    }, x = $(() => Math.max(...k.value.map((j) => j.r ?? 0), 0));
    function M(j) {
      if (!m.value || !x.value)
        return 4;
      const W = Math.max(0, j.r ?? 0) / x.value;
      return 3 + Math.sqrt(W) * (l.maxRadius - 3);
    }
    function B([j, W]) {
      return Array.from({ length: 5 }, (I, H) => j + (W - j) / 4 * H);
    }
    const K = $(() => B(y.value)), N = $(() => B(g.value)), Y = (j) => l.formatX?.(j) ?? String(Math.round(j * 100) / 100), T = (j) => l.formatY?.(j) ?? String(Math.round(j * 100) / 100), O = $(() => {
      if (!i.value)
        return null;
      const j = d.value[i.value.s], W = j?.points[i.value.p];
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
        s("g", kf, [
          (t(!0), n(z, null, D(N.value, (I, H) => (t(), n("line", {
            key: `gy-${H}`,
            x1: b.left,
            x2: b.left + S.value,
            y1: c(I),
            y2: c(I),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": H === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, $f))), 128))
        ]),
        s("g", wf, [
          (t(!0), n(z, null, D(N.value, (I, H) => (t(), n("text", {
            key: `ty-${H}`,
            x: b.left - 8,
            y: c(I) + 3,
            "text-anchor": "end"
          }, p(T(I)), 9, Cf))), 128)),
          (t(!0), n(z, null, D(K.value, (I, H) => (t(), n("text", {
            key: `tx-${H}`,
            x: v(I),
            y: e.height - 10,
            "text-anchor": "middle"
          }, p(Y(I)), 9, _f))), 128))
        ]),
        (t(!0), n(z, null, D(d.value, (I, H) => (t(), n("g", {
          key: `s-${H}`
        }, [
          (t(!0), n(z, null, D(I.points, (te, V) => (t(), n("circle", {
            key: `p-${H}-${V}`,
            cx: v(te.x),
            cy: c(te.y),
            r: M(te),
            fill: f(H, I),
            "fill-opacity": m.value ? 0.55 : 0.85,
            stroke: f(H, I),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== H || i.value.p !== V) ? 0.35 : 1,
            onMouseenter: (Z) => i.value = { s: H, p: V },
            onMouseleave: W[0] || (W[0] = (Z) => i.value = null)
          }, null, 40, Sf))), 128))
        ]))), 128))
      ], 8, yf)),
      O.value ? (t(), F(Ze, {
        key: 0,
        label: O.value.point.label ?? O.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${Y(O.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${T(O.value.point.y)}`,
        share: m.value && O.value.point.r != null ? String(O.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : _("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", Mf, [
        (t(!0), n(z, null, D(d.value, (I, H) => (t(), n("span", {
          key: `l-${H}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          s("span", {
            class: "size-2.5 rounded-full",
            style: Q({ backgroundColor: f(H, I) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + p(I.name), 1)
        ]))), 128))
      ])) : _("", !0)
    ], 512));
  }
}), Bf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Pf = ["width", "height", "viewBox"], zf = ["points"], Af = ["x1", "y1", "x2", "y2"], jf = ["points", "fill", "stroke"], Of = ["cx", "cy", "fill", "onMouseenter"], Lf = ["x", "y", "text-anchor"], Vf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Df = { class: "truncate" }, ew = /* @__PURE__ */ P({
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
      () => l.series.map((c, x) => ({
        ...c,
        color: c.color ?? a[x % a.length]
      }))
    ), o = $(() => r.value[0]?.points.map((c) => c.label) ?? []), i = $(() => o.value.length), u = $(() => l.height), d = $(() => u.value / 2), f = $(() => u.value / 2 - 34), k = $(() => {
      const c = Math.max(...r.value.flatMap((B) => B.points.map((K) => K.value)), 0);
      if (c <= 0)
        return 1;
      const x = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((B) => c <= B * x) ?? 10) * x;
    });
    function m(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function b(c, x) {
      const M = m(c);
      return {
        x: d.value + Math.cos(M) * f.value * x,
        y: d.value + Math.sin(M) * f.value * x
      };
    }
    function S(c) {
      return Array.from({ length: i.value }, (x, M) => {
        const B = b(M, c);
        return `${B.x.toFixed(2)},${B.y.toFixed(2)}`;
      }).join(" ");
    }
    const C = $(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: S(c) }))), w = $(
      () => r.value.map((c) => {
        const x = c.points.map((M) => Math.max(0, M.value) / k.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: x.map((M, B) => {
            const K = b(B, M);
            return `${K.x.toFixed(2)},${K.y.toFixed(2)}`;
          }).join(" "),
          dots: x.map((M, B) => b(B, M))
        };
      })
    ), y = $(
      () => o.value.map((c, x) => {
        const M = m(x), B = d.value + Math.cos(M) * (f.value + 14), K = d.value + Math.sin(M) * (f.value + 14), N = Math.cos(M);
        return {
          label: c,
          x: B,
          y: K + 3,
          anchor: Math.abs(N) < 0.2 ? "middle" : N > 0 ? "start" : "end"
        };
      })
    ), g = G(null), v = (c) => l.format ? l.format(c) : new Intl.NumberFormat().format(c);
    return (c, x) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Bf, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, D(C.value, (M) => (t(), n("polygon", {
          key: M.f,
          points: M.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, zf))), 128)),
        (t(!0), n(z, null, D(o.value, (M, B) => (t(), n("line", {
          key: `spoke-${B}`,
          x1: d.value,
          y1: d.value,
          x2: b(B, 1).x,
          y2: b(B, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Af))), 128)),
        (t(!0), n(z, null, D(w.value, (M, B) => (t(), n("g", {
          key: `s-${B}`
        }, [
          s("polygon", {
            points: M.outline,
            fill: M.color,
            "fill-opacity": "0.16",
            stroke: M.color,
            "stroke-width": "2"
          }, null, 8, jf),
          (t(!0), n(z, null, D(M.dots, (K, N) => (t(), n("circle", {
            key: N,
            cx: K.x,
            cy: K.y,
            r: "3",
            fill: M.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (Y) => g.value = {
              series: M.name,
              axis: o.value[N],
              value: M.values[N]?.value ?? 0
            },
            onMouseleave: x[0] || (x[0] = (Y) => g.value = null)
          }, null, 40, Of))), 128))
        ]))), 128)),
        (t(!0), n(z, null, D(y.value, (M, B) => (t(), n("text", {
          key: `l-${B}`,
          x: M.x,
          y: M.y,
          "text-anchor": M.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, p(M.label), 9, Lf))), 128))
      ], 8, Pf)),
      e.showLegend ? (t(), n("ul", Vf, [
        (t(!0), n(z, null, D(r.value, (M, B) => (t(), n("li", {
          key: B,
          class: "flex items-center gap-2 text-xs"
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: M.color })
          }, null, 4),
          s("span", Df, p(M.name), 1)
        ]))), 128))
      ])) : _("", !0),
      g.value ? (t(), F(Ze, {
        key: 1,
        label: `${g.value.series} — ${g.value.axis}`,
        value: v(g.value.value)
      }, null, 8, ["label", "value"])) : _("", !0)
    ]));
  }
}), Tf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Ff = ["width", "height", "viewBox"], Ef = ["cx", "cy", "r"], If = ["d", "fill", "fill-opacity", "onMouseenter"], Nf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Rf = { class: "min-w-0 flex-1 truncate capitalize" }, Uf = { class: "font-medium tabular-nums" }, tw = /* @__PURE__ */ P({
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
    ], r = G(null), o = $(() => l.height), i = $(() => o.value / 2), u = $(() => o.value / 2 - 6), d = $(() => Math.max(...l.data.map((S) => Math.max(0, S.value)), 0)), f = $(() => {
      const S = l.data.length;
      if (S === 0 || d.value <= 0)
        return [];
      const C = Math.PI * 2 / S;
      return l.data.map((w, y) => {
        const g = Math.sqrt(Math.max(0, w.value) / d.value), v = u.value * g, c = y * C - Math.PI / 2, x = c + C;
        return {
          ...w,
          color: a[y % a.length],
          share: d.value === 0 ? 0 : w.value / d.value,
          path: k(i.value, c, x, v)
        };
      });
    });
    function k(S, C, w, y) {
      if (y <= 0)
        return "";
      if (w - C >= Math.PI * 2 - 1e-6)
        return `M${S - y},${S} A${y},${y} 0 1 1 ${S + y},${S} A${y},${y} 0 1 1 ${S - y},${S} Z`;
      const g = w - C > Math.PI ? 1 : 0, v = S + Math.cos(C) * y, c = S + Math.sin(C) * y, x = S + Math.cos(w) * y, M = S + Math.sin(w) * y;
      return `M${S},${S} L${v.toFixed(2)},${c.toFixed(2)} A${y.toFixed(2)},${y.toFixed(2)} 0 ${g} 1 ${x.toFixed(2)},${M.toFixed(2)} Z`;
    }
    const m = $(() => [0.5, 0.75, 1].map((S) => u.value * S)), b = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S);
    return (S, C) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: Q({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Tf, [
      (t(), n("svg", {
        width: o.value,
        height: o.value,
        viewBox: `0 0 ${o.value} ${o.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, D(m.value, (w) => (t(), n("circle", {
          key: w,
          cx: i.value,
          cy: i.value,
          r: w,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Ef))), 128)),
        (t(!0), n(z, null, D(f.value, (w, y) => (t(), n("path", {
          key: y,
          d: w.path,
          fill: w.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === y ? 0.75 : 0.3,
          onMouseenter: (g) => r.value = y,
          onMouseleave: C[0] || (C[0] = (g) => r.value = null)
        }, null, 40, If))), 128))
      ], 8, Ff)),
      e.showLegend ? (t(), n("ul", Nf, [
        (t(!0), n(z, null, D(f.value, (w, y) => (t(), n("li", {
          key: y,
          class: "flex items-center gap-2 text-xs"
        }, [
          s("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: Q({ background: w.color })
          }, null, 4),
          s("span", Rf, p(w.label), 1),
          s("span", Uf, p(b(w.value)), 1)
        ]))), 128))
      ])) : _("", !0),
      r.value !== null ? (t(), F(Ze, {
        key: 1,
        label: f.value[r.value].label,
        value: b(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : _("", !0)
    ]));
  }
}), Hf = ["width", "height"], qf = ["x1", "x2", "y1", "y2"], Kf = ["x", "y"], Gf = ["x", "y"], Wf = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Zf = ["x", "y", "width", "height", "fill", "fill-opacity"], Jf = ["d", "stroke"], Yf = ["cx", "cy", "fill"], Xf = ["x", "y"], Qf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, em = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, tm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, am = { class: "text-xs font-semibold tabular-nums" }, nm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, lm = { class: "text-muted-foreground" }, aw = /* @__PURE__ */ P({
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
      i = new ResizeObserver((H) => {
        r.value = Math.max(160, H[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), me(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], f = $(
      () => l.bars.map((H, te) => ({
        ...H,
        color: H.color ?? u[te % u.length]
      }))
    ), k = $(
      () => l.lines.map((H, te) => ({
        ...H,
        color: H.color ?? d[te % d.length]
      }))
    ), m = $(
      () => f.value[0]?.points.map((H) => H.label) ?? k.value[0]?.points.map((H) => H.label) ?? []
    ), b = $(() => m.value.length), S = $(() => l.lineAxis === "right"), C = $(() => ({
      top: 12,
      right: S.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), w = $(() => ({
      w: Math.max(1, r.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function y(H) {
      const te = Math.max(...H, 0);
      if (te <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(te));
      return ([1, 2, 2.5, 5, 10].find((q) => te <= q * V) ?? 10) * V;
    }
    const g = $(
      () => y([
        ...f.value.flatMap((H) => H.points.map((te) => te.value)),
        ...S.value ? [] : k.value.flatMap((H) => H.points.map((te) => te.value))
      ])
    ), v = $(
      () => S.value ? y(k.value.flatMap((H) => H.points.map((te) => te.value))) : g.value
    ), c = $(() => w.value.w / Math.max(1, b.value)), x = $(() => c.value * 0.6), M = $(() => x.value / Math.max(1, f.value.length));
    function B(H) {
      return C.value.left + H * c.value + c.value / 2;
    }
    const K = $(
      () => f.value.flatMap(
        (H, te) => H.points.map((V, Z) => {
          const q = Math.max(0, V.value) / g.value * w.value.h;
          return {
            x: B(Z) - x.value / 2 + te * M.value,
            y: C.value.top + w.value.h - q,
            w: Math.max(0, M.value - 2),
            h: q,
            color: H.color,
            index: Z,
            name: H.name,
            value: V.value,
            label: V.label
          };
        })
      )
    ), N = $(
      () => k.value.map((H) => {
        const te = H.points.map((V, Z) => ({
          x: B(Z),
          y: C.value.top + w.value.h - Math.max(0, V.value) / v.value * w.value.h,
          value: V.value
        }));
        return {
          ...H,
          pts: te,
          d: te.map((V, Z) => `${Z === 0 ? "M" : "L"}${V.x.toFixed(2)},${V.y.toFixed(2)}`).join(" ")
        };
      })
    ), Y = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((H) => ({
        y: C.value.top + w.value.h * H,
        left: g.value * (1 - H),
        right: v.value * (1 - H)
      }))
    ), T = $(() => Math.max(1, Math.ceil(b.value / 10)));
    function O(H) {
      return H === b.value - 1 || H % T.value === 0;
    }
    const j = (H) => l.format ? l.format(H) : W(H);
    function W(H) {
      return Math.abs(H) >= 1e6 ? `${(H / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(H) >= 1e3 ? `${(H / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(H * 100) / 100);
    }
    const I = $(() => {
      if (o.value === null)
        return null;
      const H = o.value;
      return {
        label: m.value[H],
        rows: [
          ...f.value.map((te) => ({
            name: te.name,
            color: te.color,
            value: te.points[H]?.value ?? 0
          })),
          ...k.value.map((te) => ({
            name: te.name,
            color: te.color,
            value: te.points[H]?.value ?? 0
          }))
        ]
      };
    });
    return (H, te) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      b.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: te[0] || (te[0] = (V) => o.value = null)
        }, [
          (t(!0), n(z, null, D(Y.value, (V) => (t(), n("line", {
            key: `g-${V.y}`,
            x1: C.value.left,
            x2: r.value - C.value.right,
            y1: V.y,
            y2: V.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, qf))), 128)),
          (t(!0), n(z, null, D(Y.value, (V) => (t(), n("text", {
            key: `lt-${V.y}`,
            x: C.value.left - 8,
            y: V.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, p(W(V.left)), 9, Kf))), 128)),
          S.value ? (t(!0), n(z, { key: 0 }, D(Y.value, (V) => (t(), n("text", {
            key: `rt-${V.y}`,
            x: r.value - C.value.right + 8,
            y: V.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, p(W(V.right)), 9, Gf))), 128)) : _("", !0),
          (t(!0), n(z, null, D(m.value, (V, Z) => (t(), n("rect", {
            key: `hit-${Z}`,
            x: C.value.left + Z * c.value,
            y: C.value.top,
            width: c.value,
            height: w.value.h,
            fill: "var(--muted)",
            "fill-opacity": o.value === Z ? 0.4 : 0,
            onMouseenter: (q) => o.value = Z
          }, null, 40, Wf))), 128)),
          (t(!0), n(z, null, D(K.value, (V, Z) => (t(), n("rect", {
            key: `b-${Z}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": o.value === null || o.value === V.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Zf))), 128)),
          (t(!0), n(z, null, D(N.value, (V, Z) => (t(), n("g", {
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
            }, null, 8, Jf),
            o.value !== null && V.pts[o.value] ? (t(), n("circle", {
              key: 0,
              cx: V.pts[o.value].x,
              cy: V.pts[o.value].y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Yf)) : _("", !0)
          ]))), 128)),
          (t(!0), n(z, null, D(m.value, (V, Z) => oe((t(), n("text", {
            key: `x-${Z}`,
            x: B(Z),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, p(V), 9, Xf)), [
            [je, O(Z)]
          ])), 128))
        ], 40, Hf)),
        I.value ? (t(), n("div", Qf, [
          s("p", em, p(I.value.label), 1),
          (t(!0), n(z, null, D(I.value.rows, (V, Z) => (t(), n("div", {
            key: Z,
            class: "flex items-center gap-2 py-0.5"
          }, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: V.color })
            }, null, 4),
            s("span", tm, p(V.name), 1),
            s("span", am, p(j(V.value)), 1)
          ]))), 128))
        ])) : _("", !0),
        e.showLegend ? (t(), n("div", nm, [
          (t(!0), n(z, null, D([...f.value, ...k.value], (V, Z) => (t(), n("span", {
            key: Z,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            s("span", {
              class: "size-2 rounded-full",
              style: Q({ background: V.color })
            }, null, 4),
            s("span", lm, p(V.name), 1)
          ]))), 128))
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), sm = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, om = { class: "text-muted-foreground" }, rm = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, im = ["width", "height"], um = ["x", "y"], dm = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], cm = ["x", "y"], fm = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, mm = { class: "text-[11px] font-medium capitalize" }, pm = { class: "text-muted-foreground text-[11px] capitalize" }, vm = { class: "text-sm font-semibold tabular-nums" }, gm = { class: "text-muted-foreground text-xs font-normal" }, nw = /* @__PURE__ */ P({
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
      i = new ResizeObserver((x) => {
        r.value = Math.max(160, x[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), me(() => i?.disconnect());
    const u = $(() => l.series[0]?.points.map((x) => x.label) ?? []), d = $(() => l.series.length), f = $(() => u.value.length), k = $(() => Math.min(140, Math.max(60, r.value * 0.16))), m = $(() => Math.max(1, r.value - k.value - 8)), b = $(() => m.value / Math.max(1, f.value)), S = $(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function C(x) {
      if (x === 0)
        return "var(--muted)";
      const M = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(x / M * 100)}%, var(--muted))`;
    }
    function w(x) {
      for (let M = 0; M < l.buckets.length; M++) {
        const B = l.buckets[M].max;
        if (B === void 0 || x < B)
          return M;
      }
      return l.buckets.length - 1;
    }
    const y = $(
      () => l.series.flatMap(
        (x, M) => x.points.map((B, K) => {
          const N = w(B.value);
          return {
            row: M,
            col: K,
            x: k.value + K * b.value,
            y: 4 + M * S.value,
            w: Math.max(1, b.value - 1),
            h: Math.max(1, S.value - 4),
            colour: C(N),
            label: B.label,
            value: B.value,
            rowName: x.name,
            bucketLabel: l.buckets[N].label
          };
        })
      )
    ), g = $(() => b.value < 2), v = $(() => o.value ? y.value.find((x) => x.row === o.value.row && x.col === o.value.col) ?? null : null), c = (x) => l.format ? l.format(x) : new Intl.NumberFormat().format(x);
    return (x, M) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: Q({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        s("div", sm, [
          (t(!0), n(z, null, D(e.buckets, (B, K) => (t(), n("span", {
            key: K,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            s("span", {
              class: "size-3 rounded-sm border",
              style: Q({ background: C(K) })
            }, null, 4),
            s("span", om, p(B.label), 1)
          ]))), 128))
        ]),
        g.value ? (t(), n("p", rm, p(f.value) + " columns - too many to label individually ", 1)) : _("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: M[0] || (M[0] = (B) => o.value = null)
        }, [
          (t(!0), n(z, null, D(e.series, (B, K) => (t(), n("text", {
            key: `r-${K}`,
            x: k.value - 10,
            y: 4 + K * S.value + S.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, p(B.name), 9, um))), 128)),
          (t(!0), n(z, null, D(y.value, (B, K) => (t(), n("rect", {
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
          }, null, 40, dm))), 128)),
          e.showColumnLabels && !g.value ? (t(!0), n(z, { key: 0 }, D(u.value, (B, K) => (t(), n("text", {
            key: `c-${K}`,
            x: k.value + K * b.value + b.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, p(B), 9, cm))), 128)) : _("", !0)
        ], 40, im)),
        v.value ? (t(), n("div", fm, [
          s("p", mm, p(v.value.label), 1),
          s("p", pm, p(v.value.rowName), 1),
          s("p", vm, [
            R(p(c(v.value.value)) + " ", 1),
            s("span", gm, "(" + p(v.value.bucketLabel) + ")", 1)
          ])
        ])) : _("", !0)
      ], 64))
    ], 512));
  }
}), hm = ["viewBox"], bm = { key: 0 }, xm = ["id"], ym = ["stop-color"], km = ["stop-color"], $m = ["d", "fill"], wm = ["d", "stroke"], Ft = 100, Ne = 30, tt = /* @__PURE__ */ P({
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
      const d = l.data.map((b) => b.value);
      if (d.length < 2)
        return [];
      const f = Math.min(...d), m = Math.max(...d) - f || 1;
      return d.map((b, S) => ({
        x: S / (d.length - 1) * Ft,
        y: Ne - (b - f) / m * (Ne - 4) - 2
      }));
    });
    function o(d) {
      const f = d.length;
      if (f < 2)
        return "";
      const k = [], m = [];
      for (let C = 0; C < f - 1; C++)
        k[C] = d[C + 1].x - d[C].x, m[C] = k[C] === 0 ? 0 : (d[C + 1].y - d[C].y) / k[C];
      const b = [m[0]];
      for (let C = 1; C < f - 1; C++)
        if (m[C - 1] * m[C] <= 0)
          b[C] = 0;
        else {
          const w = 2 * k[C] + k[C - 1], y = k[C] + 2 * k[C - 1];
          b[C] = (w + y) / (w / m[C - 1] + y / m[C]);
        }
      b[f - 1] = m[f - 2];
      let S = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let C = 0; C < f - 1; C++) {
        const w = k[C] / 3;
        S += ` C${(d[C].x + w).toFixed(2)},${(d[C].y + b[C] * w).toFixed(2)} ${(d[C + 1].x - w).toFixed(2)},${(d[C + 1].y - b[C + 1] * w).toFixed(2)} ${d[C + 1].x.toFixed(2)},${d[C + 1].y.toFixed(2)}`;
      }
      return S;
    }
    const i = $(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? o(d) : d.map((f, k) => `${k === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), u = $(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Ne} L${d[0].x.toFixed(2)},${Ne} Z`;
    });
    return (d, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${Ft} ${Ne}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: Q({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", bm, [
        s("linearGradient", {
          id: `pk-spark-${h(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          s("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, ym),
          s("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, km)
        ], 8, xm)
      ])) : _("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${h(a)})`
      }, null, 8, $m)) : _("", !0),
      s("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, wm)
    ], 12, hm)) : _("", !0);
  }
}), Cm = { class: "flex items-center gap-1 text-xs" }, _m = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Sm = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ua = /* @__PURE__ */ P({
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
    return (u, d) => (t(), n("span", Cm, [
      s("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        s("span", _m, p(o.value), 1),
        R(" " + p(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Sm, p(e.comparison), 1)) : _("", !0)
    ]));
  }
}), Mm = ["aria-label"], De = /* @__PURE__ */ P({
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
      (t(!0), n(z, null, D(o.value, (f) => (t(), n("span", {
        key: f,
        "aria-hidden": "true",
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: Q({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Mm));
  }
}), Bm = ["data-collapsed"], Pm = {
  class: "bg-muted flex flex-wrap items-start justify-between gap-2 border-b px-5 py-4",
  "data-slot": "chart-card-header"
}, zm = { class: "flex min-w-0 items-start gap-2" }, Am = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jm = ["d"], Om = { class: "min-w-0" }, Lm = { class: "text-sm font-medium" }, Vm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Dm = { class: "flex shrink-0 items-center gap-1.5" }, Tm = {
  key: 0,
  class: "bg-background/70 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Fm = ["aria-pressed", "onClick"], Em = ["aria-expanded", "aria-label", "title"], Im = ["aria-label"], Nm = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rm = ["d"], Um = /* @__PURE__ */ P({
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
    const l = e, a = ha(), r = G(l.defaultCollapsed), o = $(() => !!l.icon && !a.icon), i = $(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", {
      class: "bg-card flex w-full flex-col self-start overflow-hidden rounded-xl border border-border/80 shadow-sm",
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      s("div", Pm, [
        s("div", zm, [
          U(u.$slots, "icon", {}, () => [
            o.value ? (t(), n("svg", Am, [
              s("path", {
                d: h(se)(e.icon)
              }, null, 8, jm)
            ])) : _("", !0)
          ]),
          s("div", Om, [
            s("p", Lm, p(e.label), 1),
            e.description ? (t(), n("p", Vm, p(e.description), 1)) : _("", !0),
            U(u.$slots, "trend")
          ])
        ]),
        s("div", Dm, [
          U(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Tm, [
            (t(!0), n(z, null, D(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (k) => u.$emit("update:period", f.value)
            }, p(f.label), 11, Fm))), 128))
          ])) : _("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-background/80 hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: d[0] || (d[0] = (f) => r.value = !r.value)
          }, [
            (t(), n("svg", {
              class: A(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, Em)) : _("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-background/80 hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (f) => u.$emit("hide"))
          }, [
            (t(), n("svg", Nm, [
              s("path", {
                d: h(se)("eye-off")
              }, null, 8, Rm)
            ]))
          ], 8, Im)) : _("", !0)
        ])
      ]),
      r.value ? _("", !0) : (t(), n("div", {
        key: 0,
        style: Q(i.value),
        class: "flex flex-col justify-center px-5 py-5",
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
        }, " Could not load ", 4)) : U(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 8, Bm));
  }
}), Hm = ["aria-pressed", "aria-label", "title"], qm = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Km = ["d"], Gm = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Wm = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Zm = ["href"], Jm = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ym = ["d"], Xm = ["aria-label", "onClick"], Qm = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ep = ["d"], tp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ap = ["d"], np = {
  key: 0,
  class: "flex flex-col gap-1"
}, lp = ["onClick"], sp = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, op = ["d"], rp = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, ip = /* @__PURE__ */ P({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(!1), i = G(!1), u = $(
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
    return (k, m) => (t(), n(z, null, [
      E(Um, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: m[3] || (m[3] = (b) => r("hide"))
      }, {
        actions: L(() => [
          s("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": o.value,
            "aria-label": o.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: o.value ? "Done" : "Edit",
            onClick: m[0] || (m[0] = (b) => o.value = !o.value)
          }, [
            (t(), n("svg", qm, [
              s("path", {
                d: h(se)(o.value ? "check" : "pencil")
              }, null, 8, Km)
            ]))
          ], 8, Hm)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", Gm, [
            m[7] || (m[7] = s("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            E(ne, {
              size: "sm",
              variant: "outline",
              onClick: m[1] || (m[1] = (b) => i.value = !0)
            }, {
              default: L(() => [...m[6] || (m[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Wm, [
            (t(!0), n(z, null, D(e.items, (b) => (t(), n("div", {
              key: b.id,
              class: "inline-flex items-center gap-1"
            }, [
              s("a", {
                href: b.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Jm, [
                  s("path", {
                    d: h(se)(b.icon)
                  }, null, 8, Ym)
                ])),
                R(" " + p(b.label), 1)
              ], 8, Zm),
              o.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${b.label}`,
                onClick: (S) => d(b.id)
              }, [
                (t(), n("svg", Qm, [
                  s("path", {
                    d: h(se)("x")
                  }, null, 8, ep)
                ]))
              ], 8, Xm)) : _("", !0)
            ]))), 128)),
            o.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: m[2] || (m[2] = (b) => i.value = !0)
            }, [
              (t(), n("svg", tp, [
                s("path", {
                  d: h(se)("plus")
                }, null, 8, ap)
              ])),
              m[8] || (m[8] = R(" Add ", -1))
            ])) : _("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      E(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: m[5] || (m[5] = (b) => i.value = !1)
      }, {
        footer: L(() => [
          E(ne, {
            variant: "outline",
            onClick: m[4] || (m[4] = (b) => i.value = !1)
          }, {
            default: L(() => [...m[9] || (m[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          u.value.length ? (t(), n("ul", np, [
            (t(!0), n(z, null, D(u.value, (b) => (t(), n("li", {
              key: b.id
            }, [
              s("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (S) => f(b)
              }, [
                (t(), n("svg", sp, [
                  s("path", {
                    d: h(se)(b.icon)
                  }, null, 8, op)
                ])),
                R(" " + p(b.label), 1)
              ], 8, lp)
            ]))), 128))
          ])) : (t(), n("p", rp, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), up = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, dp = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, cp = { class: "relative w-full max-w-xl" }, fp = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mp = ["d"], pp = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, vp = ["data-slot"], gp = { class: "px-5 py-4" }, hp = { class: "mb-3 text-sm font-semibold" }, bp = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, xp = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yp = ["d"], kp = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, lw = /* @__PURE__ */ P({
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
    const l = e, a = G(""), r = $(() => {
      const d = l.linkComponent;
      return typeof d == "string" ? d : ba(d);
    }), o = Yt({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = $(() => {
      const d = a.value.trim().toLowerCase();
      return l.sections.map((f) => ({
        ...f,
        links: d ? f.links.filter((k) => k.label.toLowerCase().includes(d)) : f.links
      })).filter((f) => f.links.length > 0);
    });
    return (d, f) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      s("header", null, [
        s("h1", up, p(e.title), 1),
        e.description ? (t(), n("p", dp, p(e.description), 1)) : _("", !0)
      ]),
      s("div", cp, [
        (t(), n("svg", fp, [
          s("path", {
            d: h(se)("search")
          }, null, 8, mp)
        ])),
        E(fe, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (k) => a.value = k),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), n("div", pp, [
        (t(!0), n(z, null, D(u.value, (k) => (t(), n("section", {
          key: k.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${k.key}`
        }, [
          s("div", gp, [
            s("h2", hp, p(k.title), 1),
            s("div", bp, [
              (t(!0), n(z, null, D(k.links, (m) => (t(), F(Ae(i(m) ? "a" : r.value), {
                key: m.href + m.label,
                href: m.href,
                class: A(h(o)),
                target: i(m) ? "_blank" : void 0,
                rel: i(m) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", xp, [
                    s("path", {
                      d: h(se)(m.icon)
                    }, null, 8, yp)
                  ])),
                  R(" " + p(m.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, vp))), 128))
      ])) : (t(), n("p", kp, ' Nothing matches "' + p(a.value) + '". ', 1))
    ], 2));
  }
}), $p = ["data-slot"], wp = {
  key: 0,
  class: "text-foreground inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 text-xs font-medium tabular-nums"
}, Cp = {
  key: 1,
  class: "text-muted-foreground relative flex flex-col gap-0.5 text-xs"
}, _p = {
  key: 0,
  class: "line-clamp-2"
}, Sp = {
  key: 1,
  class: "line-clamp-1"
}, Mp = {
  key: 2,
  class: "text-muted-foreground relative text-xs"
}, Bp = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, sw = /* @__PURE__ */ P({
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
    inverted: { type: Boolean, default: !1 },
    variant: { default: "default" }
  },
  setup(e) {
    const l = e, a = $(() => l.variant === "section"), r = (i) => typeof i == "number" ? new Intl.NumberFormat().format(i) : String(i ?? "-"), o = $(() => l.trend ? l.trend.direction === "new" ? "New" : l.trend.percentage === null ? "-" : `${l.trend.direction === "flat" ? "→" : l.trend.direction === "down" ? "▼" : "▲"} ${Math.abs(l.trend.percentage)}%` : null);
    return (i, u) => (t(), n("div", {
      class: A([
        "bg-card flex flex-col overflow-hidden border",
        a.value ? "min-h-[8.75rem] rounded-xl bg-gradient-to-t from-primary/5 to-card shadow-sm ring-1 ring-foreground/5" : "rounded-lg"
      ]),
      "data-slot": a.value ? "section-stat-card" : "stat-card"
    }, [
      s("div", {
        class: A(["flex flex-1 flex-col", a.value ? "gap-3 p-5 sm:p-6" : "gap-1 p-4"])
      }, [
        s("div", {
          class: A(["flex items-start justify-between gap-2", a.value ? "" : "flex-col gap-1"])
        }, [
          s("div", {
            class: A(["min-w-0 flex-1", a.value ? "flex flex-col gap-1" : "contents"])
          }, [
            s("p", {
              class: A(["text-muted-foreground relative font-medium", a.value ? "text-sm" : "text-xs"])
            }, p(e.label), 3),
            e.loading ? (t(), F(De, {
              key: 0,
              variant: "number",
              class: "my-1"
            })) : e.error ? (t(), n("span", {
              key: 1,
              class: A(["text-destructive relative flex items-center text-sm", a.value ? "h-10" : "h-8"]),
              role: "alert"
            }, " Could not load ", 2)) : (t(), n("span", {
              key: 2,
              class: A(["relative flex items-center font-semibold tabular-nums", a.value ? "h-10 text-3xl tracking-tight" : "h-8 text-2xl"])
            }, p(r(e.value)), 3))
          ], 2),
          a.value && e.trend && !e.loading && !e.error && o.value ? (t(), n("span", wp, p(o.value), 1)) : _("", !0)
        ], 2),
        !a.value && e.trend && !e.loading && !e.error ? (t(), F(ua, {
          key: 0,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : a.value && (e.description || e.trend && e.comparison) ? (t(), n("div", Cp, [
          e.description ? (t(), n("p", _p, p(e.description), 1)) : e.comparison ? (t(), n("p", Sp, p(e.comparison), 1)) : _("", !0)
        ])) : e.description ? (t(), n("p", Mp, p(e.description), 1)) : _("", !0)
      ], 2),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Bp, [
        E(tt, {
          data: e.sparkline,
          height: a.value ? 52 : 44,
          filled: ""
        }, null, 8, ["data", "height"])
      ])) : _("", !0)
    ], 10, $p));
  }
}), Pp = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, zp = { class: "flex flex-col gap-1 p-4" }, Ap = { class: "flex items-start justify-between gap-2" }, jp = { class: "text-sm font-medium" }, Op = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Lp = { class: "mt-1 flex flex-wrap items-center gap-2" }, Vp = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Dp = {
  key: 0,
  class: "-mb-px"
}, Xe = /* @__PURE__ */ P({
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
    return (i, u) => (t(), n("div", Pp, [
      s("div", zp, [
        s("div", Ap, [
          s("p", jp, p(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Op, p(e.caption), 1)) : _("", !0),
        s("div", Lp, [
          e.loading ? (t(), F(De, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Vp, p(o.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, p(e.delta > 0 ? "+" : "") + p(e.delta) + "% ", 3)) : _("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Dp, [
        E(tt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : _("", !0)
    ]));
  }
}), Tp = { class: "relative flex flex-col gap-2" }, Fp = ["aria-label"], Ep = ["onMouseenter"], Ip = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Np = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Rp = { class: "truncate" }, Up = { class: "text-sm font-semibold tabular-nums" }, ow = /* @__PURE__ */ P({
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
        const b = Math.max(0, k.value) / o.value;
        return {
          ...k,
          color: k.color ?? a[m % a.length],
          share: b,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: k.value > 0 ? `max(2px, ${(b * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (k) => l.format ? l.format(k) : new Intl.NumberFormat().format(k), d = G(null), f = (k) => `${(k * 100).toFixed(k > 0 && k < 0.01 ? 1 : 0)}%`;
    return (k, m) => (t(), n("div", Tp, [
      s("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: Q({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((b) => `${b.label} ${u(b.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, D(i.value, (b, S) => (t(), n("span", {
          key: S,
          class: A(["h-full transition-all", [
            S === 0 ? "rounded-l-full" : "",
            S === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: Q({
            width: b.width,
            background: b.color,
            opacity: d.value === null || d.value === S ? 1 : 0.4
          }),
          onMouseenter: (C) => d.value = S,
          onMouseleave: m[0] || (m[0] = (C) => d.value = null)
        }, null, 46, Ep))), 128))
      ], 12, Fp),
      e.showLegend ? (t(), n("div", Ip, [
        (t(!0), n(z, null, D(i.value, (b, S) => (t(), n("div", {
          key: S,
          class: "flex min-w-0 flex-col"
        }, [
          s("span", Np, [
            s("span", {
              class: "size-2 shrink-0 rounded-full",
              style: Q({ background: b.color })
            }, null, 4),
            s("span", Rp, p(b.label), 1)
          ]),
          s("span", Up, p(u(b.value)), 1)
        ]))), 128))
      ])) : _("", !0),
      d.value !== null ? (t(), F(Ze, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: f(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : _("", !0)
    ]));
  }
}), Hp = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, qp = ["data-heading"], Kp = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Gp = { class: "text-muted-foreground truncate" }, Wp = ["aria-label"], rw = /* @__PURE__ */ P({
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
    return (i, u) => (t(), n("div", Hp, [
      (t(!0), n(z, null, D(o.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, p(d.label), 3)) : (t(), n("div", Kp, [
          s("span", Gp, p(d.label), 1),
          s("span", {
            class: A(["shrink-0 font-medium tabular-nums", d.tone ? a[d.tone] : "text-foreground"])
          }, p(d.value), 3)
        ])),
        d.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), n(z, null, D(d.segments, (f, k) => (t(), n("span", {
            key: k,
            class: A(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: Q({ width: f.width })
          }, null, 6))), 128))
        ], 8, Wp)) : _("", !0)
      ], 8, qp))), 128))
    ]));
  }
}), Zp = {
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
}, Jp = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Yp(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Xp(e, l) {
  return l || (e ? Zp[Yp(e)] ?? "neutral" : "neutral");
}
function Qp(e, l) {
  return Jp[Xp(e, l)];
}
const pe = /* @__PURE__ */ P({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = $(() => Qp(l.status, l.tone));
    return (r, o) => (t(), F(Re, {
      variant: a.value,
      class: A(l.class)
    }, {
      default: L(() => [
        U(r.$slots, "default", {}, () => [
          R(p(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), ev = ["data-layout"], tv = ["src", "alt"], av = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, nv = ["src"], lv = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, sv = ["onMouseenter"], ov = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, rv = { class: "min-w-0" }, iv = { class: "truncate text-sm font-medium" }, uv = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, dv = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, cv = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, fv = { class: "min-w-0" }, mv = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, pv = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, vv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gv = ["d"], hv = ["aria-label"], bv = /* @__PURE__ */ P({
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
    function u(y) {
      if (typeof y != "string")
        return null;
      const g = y.trim();
      return g === "" ? null : /^(https?:)?\/\//i.test(g) ? g : null;
    }
    const d = $(() => {
      const y = [r.item.image, ...r.item.images ?? []].map(u).filter((g) => g !== null);
      return [...new Set(y)];
    }), f = $(() => d.value[i.value] ?? d.value[0] ?? null), k = $(
      () => r.item.label.split(/\s+/).slice(0, 2).map((y) => y[0]?.toUpperCase() ?? "").join("")
    ), m = $(() => {
      const y = r.item.progress;
      if (!y)
        return null;
      const g = Math.max(y.total ?? 100, y.value, 1);
      return `${Math.min(100, Math.max(0, y.value / g * 100)).toFixed(2)}%`;
    }), b = $(() => d.value.length > 1 ? d.value[1] : null), S = $(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), C = $(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function w(y) {
      y.stopPropagation(), o("cart", r.item.key);
    }
    return (y, g) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: A(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: g[0] || (g[0] = (v) => o("select", e.item.key)),
      onKeydown: g[1] || (g[1] = xa(ce((v) => o("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: g[2] || (g[2] = (v) => i.value = 0)
    }, [
      s("div", {
        class: A([
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
        }, null, 8, tv)) : (t(), n("span", av, p(k.value), 1)),
        e.layout === "grid" && b.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: b.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, nv)) : _("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", lv, [
          (t(!0), n(z, null, D(d.value, (v, c) => (t(), n("span", {
            key: c,
            class: A(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (x) => i.value = c
          }, null, 42, sv))), 128))
        ])) : _("", !0)
      ], 2),
      s("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        s("div", ov, [
          s("div", rv, [
            s("p", iv, p(e.item.label), 1),
            e.item.caption ? (t(), n("p", uv, p(e.item.caption), 1)) : _("", !0),
            e.item.facts?.length ? (t(), n("p", dv, p(e.item.facts.join(" · ")), 1)) : _("", !0)
          ]),
          e.item.status ? (t(), F(pe, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : _("", !0)
        ]),
        s("div", cv, [
          s("div", fv, [
            e.item.price ? (t(), n("p", mv, p(e.item.price), 1)) : _("", !0),
            C.value ? (t(), n("p", pv, p(C.value), 1)) : _("", !0)
          ]),
          S.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: w
          }, [
            (t(), n("svg", vv, [
              s("path", {
                d: h(se)("cart")
              }, null, 8, gv)
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
        ], 8, hv)) : _("", !0)
      ], 2)
    ], 42, ev));
  }
});
function xv(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function yv(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function kv(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const $v = ["data-featured", "data-recommended"], wv = { class: "flex flex-col gap-1" }, Cv = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, _v = { key: 0 }, Sv = { key: 1 }, Mv = { key: 2 }, Bv = { key: 3 }, Pv = { class: "text-sm font-semibold" }, zv = { class: "flex items-baseline gap-1" }, Av = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, jv = { class: "text-muted-foreground text-sm" }, Ov = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Lv = { class: "text-muted-foreground mt-1 text-xs" }, Vv = { class: "flex flex-1 flex-col gap-2 text-sm" }, Dv = { class: "flex min-w-0 items-start gap-2" }, Tv = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Fv = ["d"], Ev = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Iv = ["d"], Nv = { class: "capitalize" }, Rv = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Uv = { class: "text-foreground font-medium" }, Hv = { class: "mt-auto flex gap-2 pt-2" }, qv = /* @__PURE__ */ P({
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
      const f = a.plan.perks ?? {};
      return Object.entries(f).map(([k, m]) => ({
        key: k,
        label: k.replace(/_/g, " "),
        granted: kv(m.value),
        display: yv(m.value)
      }));
    }), d = $(() => a.plan.extraPerks ?? []);
    return (f, k) => (t(), n("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      s("header", wv, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", Cv, [
          e.plan.recommended ? (t(), n("span", _v, "Recommended")) : e.plan.featured ? (t(), n("span", Sv, "Featured")) : _("", !0),
          e.plan.trial ? (t(), n("span", Mv, "Trial")) : _("", !0),
          e.plan.active === !1 ? (t(), n("span", Bv, "Inactive")) : _("", !0)
        ])) : _("", !0),
        s("h3", Pv, p(e.plan.name), 1),
        s("p", zv, [
          s("span", Av, p(o.value), 1),
          s("span", jv, p(h(xv)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", Ov, p(e.plan.shortDescription), 1)) : _("", !0),
        s("p", Lv, " Active seats: " + p(e.plan.activeUsers ?? 0), 1)
      ]),
      s("ul", Vv, [
        (t(!0), n(z, null, D(u.value, (m) => (t(), n("li", {
          key: m.key,
          class: "flex items-start justify-between gap-3"
        }, [
          s("span", Dv, [
            s("span", {
              class: A(["mt-0.5 shrink-0", m.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              m.granted ? (t(), n("svg", Tv, [
                s("path", {
                  d: h(se)("check")
                }, null, 8, Fv)
              ])) : (t(), n("svg", Ev, [
                s("path", {
                  d: h(se)("x")
                }, null, 8, Iv)
              ]))
            ], 2),
            s("span", Nv, p(m.label), 1)
          ]),
          m.display ? (t(), n("span", Rv, p(m.display), 1)) : _("", !0)
        ]))), 128)),
        (t(!0), n(z, null, D(d.value, (m, b) => (t(), n("li", {
          key: `extra-${b}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          s("span", null, p(m.key), 1),
          s("span", Uv, p(m.value), 1)
        ]))), 128))
      ]),
      s("footer", Hv, [
        E(ne, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: k[0] || (k[0] = (m) => r("edit", e.plan.id))
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
          onClick: k[1] || (k[1] = (m) => r("delete", e.plan.id))
        }, {
          default: L(() => [...k[3] || (k[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, $v));
  }
}), Kv = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Gv = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Wv = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Zv = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Jv = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, iw = /* @__PURE__ */ P({
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
    return (r, o) => (t(), n("div", {
      class: A(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-grid"
    }, [
      s("header", Kv, [
        s("div", null, [
          e.title ? (t(), n("h1", Gv, p(e.title), 1)) : _("", !0),
          e.description ? (t(), n("p", Wv, p(e.description), 1)) : _("", !0)
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
      e.plans.length === 0 ? (t(), n("p", Zv, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", Jv, [
        (t(!0), n(z, null, D(e.plans, (i) => (t(), F(qv, {
          key: i.id,
          plan: i,
          onEdit: o[1] || (o[1] = (u) => a("edit", u)),
          onDelete: o[2] || (o[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Yv = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Xv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Qv = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, eg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, tg = { class: "space-y-1.5" }, ag = { class: "space-y-1.5" }, ng = { class: "space-y-1.5" }, lg = { class: "space-y-1.5" }, sg = { class: "space-y-1.5" }, og = { class: "flex items-center gap-3 text-sm" }, rg = { class: "flex items-center gap-3 text-sm" }, ig = { class: "flex items-center gap-3 text-sm" }, ug = {
  key: 0,
  class: "space-y-1.5"
}, dg = { class: "flex items-center gap-3 text-sm" }, cg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, fg = { class: "space-y-1.5" }, mg = ["value"], pg = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, vg = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, gg = ["id", "value", "onInput"], hg = { class: "space-y-2" }, bg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, xg = ["d"], yg = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ot = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", uw = /* @__PURE__ */ P({
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
    }), r = e, o = l, i = Ue(a());
    function u(g, v) {
      const c = i.perks?.[g]?.value;
      return c ?? v;
    }
    function d(g, v, c) {
      const x = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: v,
          overview: c ?? x?.overview ?? ""
        }
      };
    }
    function f(g, v) {
      const c = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: c?.value ?? (g === "modules" ? [] : 0),
          overview: v
        }
      };
    }
    function k(g) {
      const v = g ? { ...a(), ...g } : a();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    k(r.plan), re(
      () => r.plan,
      (g) => k(g),
      { deep: !0 }
    );
    const m = $({
      get: () => {
        const g = u("modules", []);
        return Array.isArray(g) ? g.map(String) : [];
      },
      set: (g) => {
        d("modules", S(g.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), b = $(
      () => r.modules.map((g) => ({ value: g.key, label: g.label }))
    );
    function S(g) {
      const v = Object.fromEntries(r.modules.map((M) => [M.key, M])), c = new Set(g);
      for (const M of r.modules)
        if (!c.has(M.key))
          for (const B of M.children ?? [])
            c.delete(B);
      let x = !0;
      for (; x; ) {
        x = !1;
        for (const M of [...c])
          for (const B of v[M]?.requires ?? [])
            c.has(B) || (c.add(B), x = !0);
      }
      return [...c];
    }
    function C() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function w(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== g);
    }
    function y() {
      o("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, v) => (t(), n("form", {
      class: A(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-editor",
      onSubmit: ce(y, ["prevent"])
    }, [
      s("header", Yv, [
        s("div", null, [
          s("h1", Xv, p(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = s("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(ne, {
          type: "button",
          variant: "outline",
          onClick: v[0] || (v[0] = (c) => o("cancel"))
        }, {
          default: L(() => [...v[14] || (v[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      s("div", Qv, [
        s("section", eg, [
          v[26] || (v[26] = s("h2", { class: "font-semibold" }, "Plan details", -1)),
          s("div", tg, [
            E(he, { for: "plan-name" }, {
              default: L(() => [...v[15] || (v[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (c) => i.name = c),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          s("div", ag, [
            E(he, { for: "plan-short" }, {
              default: L(() => [...v[16] || (v[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (c) => i.shortDescription = c),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          s("div", ng, [
            E(he, { for: "plan-description" }, {
              default: L(() => [...v[17] || (v[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            oe(s("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (c) => i.description = c),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: A(ot)
            }, null, 512), [
              [Se, i.description]
            ])
          ]),
          s("div", lg, [
            E(he, { for: "plan-days" }, {
              default: L(() => [...v[18] || (v[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            oe(s("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: A(yg)
            }, [...v[19] || (v[19] = [
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
          s("div", sg, [
            E(he, { for: "plan-price" }, {
              default: L(() => [...v[20] || (v[20] = [
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
              "onUpdate:modelValue": v[5] || (v[5] = (c) => i.price = Number(c))
            }, null, 8, ["model-value"])
          ]),
          s("label", og, [
            E(h(Ve), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = R(" Featured ", -1))
          ]),
          s("label", rg, [
            E(h(Ve), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = R(" Recommended ", -1))
          ]),
          s("label", ig, [
            E(h(Ve), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", ug, [
            E(he, { for: "plan-trial-days" }, {
              default: L(() => [...v[24] || (v[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            E(fe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (c) => i.trialDays = Number(c))
            }, null, 8, ["model-value"])
          ])) : _("", !0),
          s("label", dg, [
            E(h(Ve), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (c) => i.active = c)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = R(" Active ", -1))
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
        s("section", cg, [
          v[33] || (v[33] = s("h2", { class: "font-semibold" }, "Plan perks", -1)),
          s("div", fg, [
            E(he, null, {
              default: L(() => [...v[27] || (v[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            E(_t, {
              modelValue: m.value,
              "onUpdate:modelValue": v[11] || (v[11] = (c) => m.value = c),
              options: b.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(he, { for: "plan-modules-overview" }, {
              default: L(() => [...v[28] || (v[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            s("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: A(ot),
              onInput: v[12] || (v[12] = (c) => f(
                "modules",
                c.target.value
              ))
            }, null, 40, mg)
          ]),
          (t(!0), n(z, null, D(e.limits, (c) => (t(), n("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), n("label", pg, [
              E(h(Ve), {
                checked: !!u(c.key, !1),
                "onUpdate:checked": (x) => d(
                  c.key,
                  x,
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + p(c.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              E(he, {
                for: `plan-limit-${c.key}`
              }, {
                default: L(() => [
                  R(p(c.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              c.hint ? (t(), n("p", vg, p(c.hint), 1)) : _("", !0),
              E(fe, {
                id: `plan-limit-${c.key}`,
                "model-value": Number(u(c.key, 0)),
                type: "number",
                step: c.step ?? 1,
                required: "",
                "onUpdate:modelValue": (x) => d(
                  c.key,
                  Number(x),
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              v[29] || (v[29] = s("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            E(he, {
              for: `plan-overview-${c.key}`
            }, {
              default: L(() => [...v[30] || (v[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            s("textarea", {
              id: `plan-overview-${c.key}`,
              value: i.perks?.[c.key]?.overview ?? "",
              class: A(ot),
              onInput: (x) => f(
                c.key,
                x.target.value
              )
            }, null, 40, gg)
          ]))), 128)),
          s("div", hg, [
            v[32] || (v[32] = s("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, D(i.extraPerks ?? [], (c, x) => (t(), n("div", {
              key: x,
              class: "flex items-center gap-2"
            }, [
              E(fe, {
                modelValue: c.key,
                "onUpdate:modelValue": (M) => c.key = M,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(fe, {
                modelValue: c.value,
                "onUpdate:modelValue": (M) => c.value = M,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(ne, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (M) => w(x)
              }, {
                default: L(() => [
                  (t(), n("svg", bg, [
                    s("path", {
                      d: h(se)("x")
                    }, null, 8, xg)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            E(ne, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: C
            }, {
              default: L(() => [...v[31] || (v[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), kg = { class: "flex flex-col gap-4" }, $g = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, wg = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Cg = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, _g = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Sg = ["d"], Mg = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Bg = ["aria-pressed"], Pg = ["aria-pressed"], zg = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ag = ["aria-label"], jg = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Og = ["aria-pressed", "onClick"], Lg = ["aria-label"], Vg = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Dg = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Tg = ["data-slot"], Fg = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Eg = { class: "text-muted-foreground text-xs tabular-nums" }, Ig = { class: "flex items-center gap-2" }, Ng = ["disabled"], Rg = ["disabled"], St = /* @__PURE__ */ P({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Me({
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
  emits: /* @__PURE__ */ Me(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(""), i = Ke(e, "modelValue"), u = Ue({}), d = Ue({});
    re(o, () => b());
    function f(N) {
      const Y = N.trim();
      if (Y === "")
        return null;
      const T = Number(Y);
      return Number.isFinite(T) ? T : null;
    }
    function k() {
      const N = {};
      for (const [Y, T] of Object.entries(d))
        N[Y] = { min: f(T.min), max: f(T.max) };
      return N;
    }
    function m() {
      return { query: o.value, selected: { ...u }, ranges: k() };
    }
    function b() {
      r("filter", m());
    }
    function S(N, Y) {
      u[N] = u[N] === Y ? null : Y, b();
    }
    function C(N) {
      return d[N] ?? { min: "", max: "" };
    }
    function w(N, Y, T) {
      const O = d[N] ?? { min: "", max: "" };
      d[N] = { ...O, [Y]: T }, b();
    }
    function y(N) {
      N.key === "Enter" && (N.preventDefault(), r("scan", o.value.trim()));
    }
    const g = $(() => a.facets.filter((N) => (N.kind ?? "chips") === "chips")), v = $(() => a.facets.filter((N) => N.kind === "range")), c = $(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), x = G(1);
    re(
      () => a.items.map((N) => N.key).join(","),
      () => {
        x.value = 1;
      }
    );
    const M = $(() => {
      const N = a.pageSize;
      return !N || N < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / N));
    }), B = $(() => {
      const N = a.pageSize;
      if (!N || N < 1)
        return a.items;
      const Y = (x.value - 1) * N;
      return a.items.slice(Y, Y + N);
    });
    function K(N) {
      x.value = Math.min(M.value, Math.max(1, N));
    }
    return (N, Y) => (t(), n("div", kg, [
      c.value ? (t(), n("div", $g, [
        s("div", wg, [
          e.searchable ? (t(), n("div", Cg, [
            (t(), n("svg", _g, [
              s("path", {
                d: h(se)("search")
              }, null, 8, Sg)
            ])),
            E(fe, {
              modelValue: o.value,
              "onUpdate:modelValue": Y[0] || (Y[0] = (T) => o.value = T),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: y
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : _("", !0),
          U(N.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Mg, [
            s("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: Y[1] || (Y[1] = (T) => i.value = "grid")
            }, " Tiles ", 10, Bg),
            s("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: Y[2] || (Y[2] = (T) => i.value = "list")
            }, " List ", 10, Pg)
          ])) : _("", !0)
        ]),
        g.value.length || v.value.length ? (t(), n("div", zg, [
          (t(!0), n(z, null, D(g.value, (T) => (t(), n("div", {
            key: T.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": T.label ?? T.key
          }, [
            T.label ? (t(), n("span", jg, p(T.label), 1)) : _("", !0),
            (t(!0), n(z, null, D(T.options ?? [], (O) => (t(), n("button", {
              key: O.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[T.key] === O.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[T.key] === O.value ? "true" : "false",
              onClick: (j) => S(T.key, O.value)
            }, p(O.label), 11, Og))), 128))
          ], 8, Ag))), 128)),
          (t(!0), n(z, null, D(v.value, (T) => (t(), n("div", {
            key: T.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": T.label ?? T.key,
            "data-slot": "catalog-range"
          }, [
            s("span", Vg, p(T.label ?? T.key), 1),
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
          ], 8, Lg))), 128))
        ])) : _("", !0)
      ])) : _("", !0),
      e.items.length === 0 ? (t(), n("p", Dg, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: A(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, D(B.value, (T) => (t(), F(bv, {
          key: T.key,
          item: T,
          layout: i.value,
          onSelect: Y[3] || (Y[3] = (O) => r("select", O)),
          onCart: Y[4] || (Y[4] = (O) => r("cart", O))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Tg)),
      e.pageSize && M.value > 1 ? (t(), n("div", Fg, [
        s("p", Eg, " Page " + p(x.value) + " of " + p(M.value), 1),
        s("div", Ig, [
          s("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: x.value <= 1,
            onClick: Y[5] || (Y[5] = (T) => K(x.value - 1))
          }, " Previous ", 8, Ng),
          s("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: x.value >= M.value,
            onClick: Y[6] || (Y[6] = (T) => K(x.value + 1))
          }, " Next ", 8, Rg)
        ])
      ])) : _("", !0)
    ]));
  }
}), Ug = ["aria-label"], Hg = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, qg = { class: "min-w-0" }, Kg = { class: "text-base font-semibold" }, Gg = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Wg = { class: "flex shrink-0 items-center gap-2" }, Zg = { class: "min-h-0 flex-1 overflow-y-auto" }, Jg = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Mt = /* @__PURE__ */ P({
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
    function d(f) {
      if (!a.open)
        return;
      if (f.key === "Escape") {
        f.stopPropagation(), r("close");
        return;
      }
      if (f.key !== "Tab" || !o.value)
        return;
      const k = o.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (k.length === 0)
        return;
      const m = k[0], b = k[k.length - 1];
      f.shiftKey && document.activeElement === m ? (f.preventDefault(), b.focus()) : !f.shiftKey && document.activeElement === b && (f.preventDefault(), m.focus());
    }
    return re(
      () => a.open,
      async (f) => {
        if (f) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await we(), o.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), me(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (f, k) => (t(), F(Te, { to: "body" }, [
      E(ze, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
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
        default: L(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: o,
            class: A(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            s("header", Hg, [
              s("div", qg, [
                s("h2", Kg, p(e.title), 1),
                e.description ? (t(), n("p", Gg, p(e.description), 1)) : _("", !0)
              ]),
              s("div", Wg, [
                U(f.$slots, "header-actions"),
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
            s("div", Zg, [
              U(f.$slots, "default")
            ]),
            f.$slots.footer ? (t(), n("footer", Jg, [
              U(f.$slots, "footer")
            ])) : _("", !0)
          ], 10, Ug)) : _("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function _e() {
  return { query: "", selected: {}, ranges: {} };
}
function Yg(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const o = Number(r);
  return Number.isFinite(o) ? o : null;
}
function Xg(e, l) {
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
    if (!Xg(Yg(e, r), o))
      return !1;
  return !0;
}
function Qg(e, l) {
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
const eh = { class: "flex flex-col gap-6 p-4" }, th = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, ah = { class: "text-sm font-semibold" }, nh = { class: "flex flex-wrap items-center gap-1.5" }, lh = ["aria-pressed", "onClick"], sh = { class: "text-sm font-semibold" }, oh = { class: "flex flex-wrap items-center gap-1.5" }, rh = { key: 0 }, da = /* @__PURE__ */ P({
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
      () => a.facets.filter((M) => (M.kind ?? "chips") === "chips")
    ), f = $(() => a.facets.filter((M) => M.kind === "range"));
    function k(M) {
      return M == null ? "" : String(M);
    }
    function m() {
      o.value = a.applied.query ?? "";
      for (const M of Object.keys(i))
        delete i[M];
      for (const [M, B] of Object.entries(a.applied.selected ?? {}))
        i[M] = B;
      for (const M of Object.keys(u))
        delete u[M];
      for (const [M, B] of Object.entries(a.applied.ranges ?? {}))
        u[M] = { min: k(B.min), max: k(B.max) };
    }
    re(
      () => a.open,
      (M) => {
        M && m();
      }
    );
    function b(M) {
      const B = M.trim();
      if (B === "")
        return null;
      const K = Number(B);
      return Number.isFinite(K) ? K : null;
    }
    function S() {
      const M = {};
      for (const [B, K] of Object.entries(u))
        M[B] = { min: b(K.min), max: b(K.max) };
      return M;
    }
    function C() {
      return {
        query: a.hideSearch ? a.applied.query : o.value,
        selected: { ...i },
        ranges: S()
      };
    }
    const w = $(() => {
      let M = a.hideSearch || o.value.trim() === "" ? 0 : 1;
      for (const B of Object.values(i))
        B && (M += 1);
      for (const B of Object.values(S()))
        (B.min !== null || B.max !== null) && (M += 1);
      return M;
    });
    function y(M, B) {
      i[M] = i[M] === B ? null : B;
    }
    function g(M) {
      return u[M] ?? { min: "", max: "" };
    }
    function v(M, B, K) {
      const N = u[M] ?? { min: "", max: "" };
      u[M] = { ...N, [B]: K };
    }
    function c() {
      r("apply", C());
    }
    function x() {
      o.value = "";
      for (const M of Object.keys(i))
        i[M] = null;
      for (const M of Object.keys(u))
        u[M] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ..._e(), query: a.applied.query } : _e()
      );
    }
    return (M, B) => (t(), F(Mt, {
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
          onClick: x
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
          onClick: c
        }, {
          default: L(() => [
            B[6] || (B[6] = R(" Apply", -1)),
            w.value ? (t(), n("span", rh, " (" + p(w.value) + ")", 1)) : _("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        s("div", eh, [
          e.hideSearch ? _("", !0) : (t(), n("label", th, [
            B[3] || (B[3] = s("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E(fe, {
              modelValue: o.value,
              "onUpdate:modelValue": B[0] || (B[0] = (K) => o.value = K),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, D(d.value, (K) => (t(), n("section", {
            key: K.key,
            class: "flex flex-col gap-2"
          }, [
            s("h3", ah, p(K.label ?? K.key), 1),
            s("div", nh, [
              (t(!0), n(z, null, D(K.options ?? [], (N) => (t(), n("button", {
                key: N.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[K.key] === N.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[K.key] === N.value ? "true" : "false",
                onClick: (Y) => y(K.key, N.value)
              }, p(N.label), 11, lh))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, D(f.value, (K) => (t(), n("section", {
            key: K.key,
            class: "flex flex-col gap-2"
          }, [
            s("h3", sh, p(K.label ?? K.key), 1),
            s("div", oh, [
              E(fe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${K.label ?? K.key} from`,
                "model-value": g(K.key).min,
                "onUpdate:modelValue": (N) => v(K.key, "min", String(N))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              B[4] || (B[4] = s("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              E(fe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${K.label ?? K.key} to`,
                "model-value": g(K.key).max,
                "onUpdate:modelValue": (N) => v(K.key, "max", String(N))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), ih = ["aria-disabled"], uh = ["disabled"], dh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ch = ["d"], fh = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, mh = ["disabled"], ph = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, vh = ["d"], gh = /* @__PURE__ */ P({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Me({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Me(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = Ke(e, "modelValue"), r = l, o = $(() => a.value <= e.min), i = $(() => e.max !== null && a.value >= e.max);
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
      s("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || o.value,
        "aria-label": "Decrease quantity",
        onClick: f[0] || (f[0] = (k) => u(-1))
      }, [
        (t(), n("svg", dh, [
          s("path", {
            d: h(se)("minus")
          }, null, 8, ch)
        ]))
      ], 8, uh),
      s("span", fh, p(a.value), 1),
      s("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (k) => u(1))
      }, [
        (t(), n("svg", ph, [
          s("path", {
            d: h(se)("plus")
          }, null, 8, vh)
        ]))
      ], 8, mh)
    ], 8, ih));
  }
}), hh = { class: "divide-border flex flex-col divide-y" }, bh = { class: "min-w-0" }, xh = { class: "truncate text-sm font-medium" }, yh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, kh = { class: "flex shrink-0 items-center gap-2 text-sm" }, $h = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, wh = {
  key: 2,
  class: "font-medium tabular-nums"
}, Ch = ["aria-label", "onClick"], _h = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Sh = ["d"], Mh = /* @__PURE__ */ P({
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
    return (o, i) => (t(), n("div", hh, [
      (t(!0), n(z, null, D(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        s("div", bh, [
          s("p", xh, p(u.label), 1),
          u.detail ? (t(), n("p", yh, p(u.detail), 1)) : _("", !0)
        ]),
        s("div", kh, [
          e.editable ? (t(), F(gh, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", $h, " ×" + p(u.qty), 1)) : _("", !0),
          u.amount ? (t(), n("span", wh, p(u.amount), 1)) : _("", !0),
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
            (t(), n("svg", _h, [
              s("path", {
                d: h(se)("trash")
              }, null, 8, Sh)
            ]))
          ], 8, Ch)) : _("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Bh = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Ph = { class: "border-b px-4 py-3" }, zh = { class: "text-sm font-medium" }, Ah = { class: "flex-1 px-4 py-3" }, jh = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Oh = { class: "text-foreground block font-medium" }, Lh = { class: "mt-1 block" }, Vh = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Dh = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Th = { class: "tabular-nums" }, Fh = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Eh = { class: "text-muted-foreground" }, Ih = {
  key: 0,
  class: "tabular-nums"
}, Nh = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Rh = { class: "text-muted-foreground" }, Uh = { class: "tabular-nums" }, Hh = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, qh = { class: "tabular-nums" }, Kh = {
  key: 4,
  class: "pt-1"
}, Gh = /* @__PURE__ */ P({
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
    return (r, o) => (t(), n("aside", Bh, [
      s("header", Ph, [
        s("h2", zh, p(e.title), 1)
      ]),
      s("div", Ah, [
        e.items.length === 0 ? (t(), n("p", jh, [
          s("span", Oh, p(e.emptyTitle), 1),
          s("span", Lh, p(e.emptyDescription), 1)
        ])) : (t(), F(Mh, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: o[0] || (o[0] = (i, u) => a("qty", i, u)),
          onRemove: o[1] || (o[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Vh, [
        e.subtotal ? (t(), n("div", Dh, [
          o[2] || (o[2] = s("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          s("span", Th, p(e.subtotal), 1)
        ])) : _("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Fh, [
          s("span", Eh, p(e.discountLabel), 1),
          e.discount ? (t(), n("span", Ih, p(e.discount), 1)) : _("", !0),
          U(r.$slots, "discount")
        ])) : _("", !0),
        e.tax ? (t(), n("div", Nh, [
          s("span", Rh, p(e.taxLabel), 1),
          s("span", Uh, p(e.tax), 1)
        ])) : _("", !0),
        e.total ? (t(), n("div", Hh, [
          o[3] || (o[3] = s("span", null, "Total", -1)),
          s("span", qh, p(e.total), 1)
        ])) : _("", !0),
        r.$slots.pay ? (t(), n("div", Kh, [
          U(r.$slots, "pay")
        ])) : _("", !0)
      ])) : _("", !0)
    ]));
  }
}), Wh = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Zh = { class: "flex flex-col gap-4" }, Jh = { class: "flex flex-wrap items-start justify-between gap-3" }, Yh = { class: "flex items-center gap-2" }, Xh = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, dw = /* @__PURE__ */ P({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Me({
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
  emits: /* @__PURE__ */ Me(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(_e()), i = G(!1), u = Ke(e, "cart"), d = G(!1), f = $(
      () => a.items.filter((T) => Bt(T, o.value))
    );
    function k(T) {
      o.value = { ...o.value, query: T.query };
    }
    function m(T) {
      o.value = {
        ...o.value,
        selected: T.selected,
        ranges: T.ranges,
        query: o.value.query
      }, i.value = !1;
    }
    function b(T) {
      return T ? a.parsePrice(T) : 0;
    }
    function S(T, O, j) {
      return {
        ...T,
        qty: O,
        amount: a.formatMoney(j * O)
      };
    }
    function C(T) {
      const O = Qg(a.items, T);
      O && w(O.key);
    }
    function w(T) {
      const O = a.items.find((I) => I.key === T);
      if (!O || O.status === "out-of-stock")
        return;
      d.value = !1;
      const j = b(O);
      if (u.value.find((I) => I.key === T)) {
        u.value = u.value.map(
          (I) => I.key === T ? S(I, Number(I.qty ?? 1) + 1, j) : I
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
          amount: a.formatMoney(j)
        }
      ];
    }
    function y(T, O) {
      const j = a.items.find((I) => I.key === T), W = b(j);
      u.value = u.value.map(
        (I) => I.key === T ? S(I, O, W) : I
      );
    }
    function g(T) {
      u.value = u.value.filter((O) => O.key !== T);
    }
    const v = $(
      () => u.value.reduce((T, O) => {
        const j = a.items.find((W) => W.key === O.key);
        return T + b(j) * Number(O.qty ?? 1);
      }, 0)
    ), c = $(
      () => a.discountRate > 0 ? Math.round(v.value * a.discountRate) : 0
    ), x = $(
      () => Math.round((v.value - c.value) * a.taxRate)
    ), M = $(
      () => u.value.length ? a.formatMoney(v.value) : null
    ), B = $(
      () => u.value.length && c.value > 0 ? `−${a.formatMoney(c.value)}` : null
    ), K = $(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(x.value) : null
    ), N = $(
      () => u.value.length ? a.formatMoney(
        v.value - c.value + x.value
      ) : null
    );
    function Y() {
      d.value = !0, r("pay", u.value);
    }
    return (T, O) => (t(), n(z, null, [
      s("div", Wh, [
        s("section", Zh, [
          s("div", Jh, [
            E(Ce, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            s("div", Yh, [
              h(Qe)(o.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: O[0] || (O[0] = (j) => o.value = {
                  ...h(_e)(),
                  query: o.value.query
                })
              }, " Clear ")) : _("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: O[1] || (O[1] = (j) => i.value = !0)
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
                h(Qe)(o.value) ? (t(), n("span", Xh, " on ")) : _("", !0)
              ])) : _("", !0)
            ])
          ]),
          E(St, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: k,
            onSelect: O[2] || (O[2] = (j) => r("select", j)),
            onCart: w,
            onScan: C
          }, null, 8, ["search-placeholder", "items"])
        ]),
        E(Gh, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: M.value,
          "discount-label": e.discountLabel,
          discount: B.value,
          "tax-label": e.taxLabel,
          tax: K.value,
          total: N.value,
          onQty: y,
          onRemove: g
        }, {
          pay: L(() => [
            U(T.$slots, "pay", {
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
      E(da, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: o.value,
        onClose: O[3] || (O[3] = (j) => i.value = !1),
        onApply: m,
        onReset: O[4] || (O[4] = (j) => o.value = { ...h(_e)(), query: o.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Qh = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, e1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, t1 = ["src", "alt"], a1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, n1 = ["src"], l1 = { class: "flex items-start justify-between gap-3" }, s1 = { class: "text-lg font-semibold tabular-nums" }, o1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, r1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, i1 = { class: "grid grid-cols-2 gap-3" }, u1 = { class: "flex flex-col gap-2" }, d1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, cw = /* @__PURE__ */ P({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function o(m) {
      let b = 0;
      for (const S of m)
        b = b * 31 + S.charCodeAt(0) >>> 0;
      return b;
    }
    function i(m, b) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((C, w) => ({
        label: C,
        value: Math.max(0, Math.round(m + Math.sin(w + b) * m * 0.18))
      }));
    }
    const u = $(() => a.item?.kind === "unit"), d = $(() => {
      const m = a.item;
      if (!m)
        return [];
      const b = m.stock ?? m.progress?.value ?? m.metrics?.price ?? m.metrics?.rent ?? 12;
      return i(Number(b) || 12, o(m.key) % 7);
    }), f = $(() => {
      const m = a.item;
      if (!m)
        return [];
      const b = m.progress?.value ?? (m.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, o(m.key) % 5 + 1);
    }), k = $(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (m, b) => (t(), F(Mt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: b[1] || (b[1] = (S) => r("close"))
    }, ya({
      default: L(() => [
        e.item ? (t(), n("div", Qh, [
          s("div", e1, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, t1)) : _("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", a1, [
            (t(!0), n(z, null, D(e.item.images, (S, C) => (t(), n("img", {
              key: C,
              src: S,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, n1))), 128))
          ])) : _("", !0),
          s("div", l1, [
            s("div", null, [
              s("p", s1, p(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", o1, p(e.item.stock) + " in stock ", 1)) : _("", !0)
            ]),
            e.item.status ? (t(), F(pe, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : _("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", r1, p(e.item.facts.join(" · ")), 1)) : _("", !0),
          s("div", i1, [
            E(Xe, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? f.value : d.value
            }, null, 8, ["label", "value", "series"]),
            E(Xe, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          s("div", u1, [
            s("p", d1, p(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(tt, {
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
        fn: L(() => [
          s("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: b[0] || (b[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), c1 = { class: "flex flex-col gap-10" }, f1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, m1 = { class: "flex flex-col gap-3" }, p1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, v1 = ["src", "alt"], g1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, h1 = ["aria-label", "aria-pressed", "onClick"], b1 = ["src"], x1 = { class: "flex flex-col gap-5" }, y1 = { class: "flex flex-wrap items-start justify-between gap-3" }, k1 = { class: "min-w-0" }, $1 = { class: "text-2xl font-semibold tracking-tight" }, w1 = { class: "text-muted-foreground mt-1 text-sm" }, C1 = { class: "text-2xl font-semibold tabular-nums" }, _1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, S1 = { class: "grid grid-cols-2 gap-3 text-sm" }, M1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, B1 = { class: "mt-1 font-medium" }, P1 = { class: "rounded-lg border p-3" }, z1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, A1 = { class: "mt-1 font-medium" }, j1 = { class: "flex flex-col gap-4" }, O1 = { class: "grid gap-4 sm:grid-cols-2" }, L1 = { class: "bg-card rounded-lg border p-4" }, V1 = { class: "mb-3 text-sm font-medium" }, D1 = /* @__PURE__ */ P({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function o(C) {
      let w = 0;
      for (const y of C)
        w = w * 31 + y.charCodeAt(0) >>> 0;
      return w;
    }
    function i(C, w) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((g, v) => ({
        label: g,
        value: Math.max(0, Math.round(C + Math.sin(v + w) * C * 0.18))
      }));
    }
    const u = $(() => a.item.kind === "unit"), d = $(() => {
      const C = [a.item.image, ...a.item.images ?? []].filter(
        (w) => typeof w == "string" && w !== ""
      );
      return [...new Set(C)];
    }), f = G(0), k = $(() => {
      const C = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(C) || 12, o(a.item.key) % 7);
    }), m = $(() => {
      const C = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(C) || 20, o(a.item.key) % 5 + 1);
    }), b = $(() => u.value ? m.value : k.value), S = $(() => !u.value && a.item.status !== "out-of-stock");
    return (C, w) => (t(), n("div", c1, [
      s("div", f1, [
        s("div", m1, [
          s("div", p1, [
            d.value[f.value] ? (t(), n("img", {
              key: 0,
              src: d.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, v1)) : _("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", g1, [
            (t(!0), n(z, null, D(d.value, (y, g) => (t(), n("button", {
              key: y,
              type: "button",
              class: A(["size-16 shrink-0 overflow-hidden rounded-md border", g === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${g + 1}`,
              "aria-pressed": g === f.value ? "true" : "false",
              onClick: (v) => f.value = g
            }, [
              s("img", {
                src: y,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, b1)
            ], 10, h1))), 128))
          ])) : _("", !0)
        ]),
        s("div", x1, [
          s("div", y1, [
            s("div", k1, [
              s("h1", $1, p(e.item.label), 1),
              s("p", w1, p(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), F(pe, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : _("", !0)
          ]),
          s("p", C1, p(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", _1, p(e.item.facts.join(" · ")), 1)) : _("", !0),
          s("dl", S1, [
            e.item.sku ? (t(), n("div", M1, [
              w[1] || (w[1] = s("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              s("dd", B1, p(e.item.sku), 1)
            ])) : _("", !0),
            s("div", P1, [
              s("dt", z1, p(u.value ? "Occupancy" : "Stock"), 1),
              s("dd", A1, p(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          S.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: w[0] || (w[0] = (y) => r("cart", e.item.key))
          }, " Add to cart ")) : _("", !0)
        ])
      ]),
      s("section", j1, [
        w[2] || (w[2] = s("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        s("div", O1, [
          E(Xe, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: b.value
          }, null, 8, ["label", "value", "series"]),
          E(Xe, {
            label: "Price",
            value: e.item.price ?? "-",
            series: k.value
          }, null, 8, ["value", "series"])
        ]),
        s("div", L1, [
          s("p", V1, p(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(lf, {
            data: b.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), T1 = ["href"], fw = /* @__PURE__ */ P({
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
    return (r, o) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
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
      ], 8, T1),
      E(D1, {
        item: e.item,
        onCart: o[0] || (o[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), F1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, E1 = ["aria-selected", "onClick"], I1 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, N1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, R1 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, U1 = ["aria-pressed"], H1 = ["aria-pressed"], mw = /* @__PURE__ */ P({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Me({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Me(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, o = G(a.tabs[0]?.key ?? ""), i = Ke(e, "layout"), u = G({}), d = G(!1);
    re(
      () => a.tabs.map((y) => y.key).join(","),
      (y) => {
        y.split(",").includes(o.value) || (o.value = a.tabs[0]?.key ?? "");
      }
    );
    function f(y) {
      return u.value[y] ?? _e();
    }
    const k = $(
      () => a.tabs.find((y) => y.key === o.value) ?? a.tabs[0] ?? null
    ), m = $(
      () => k.value ? f(k.value.key) : _e()
    ), b = $(() => {
      const y = k.value;
      return y ? y.items.filter((g) => Bt(g, f(y.key))) : [];
    });
    function S(y) {
      const g = k.value?.key;
      g && (u.value = {
        ...u.value,
        [g]: { ...f(g), query: y }
      });
    }
    function C() {
      const y = k.value?.key;
      y && (u.value = { ...u.value, [y]: _e() });
    }
    function w(y) {
      const g = k.value?.key;
      g && (u.value = { ...u.value, [g]: y }, d.value = !1);
    }
    return (y, g) => (t(), n(z, null, [
      s("div", {
        class: A(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        E(Ce, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", F1, [
          (t(!0), n(z, null, D(e.tabs, (v) => (t(), n("button", {
            key: v.key,
            type: "button",
            class: A([
              "px-3 py-1.5 text-sm transition-colors",
              o.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": o.value === v.key ? "true" : "false",
            onClick: (c) => o.value = v.key
          }, p(v.label), 11, E1))), 128))
        ])) : _("", !0),
        s("div", I1, [
          E(fe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": m.value.query,
            type: "search",
            placeholder: k.value?.searchPlaceholder ?? "Search…",
            "aria-label": k.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": g[0] || (g[0] = (v) => S(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          h(Qe)(m.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: C
          }, " Clear ")) : _("", !0),
          (k.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: g[1] || (g[1] = (v) => d.value = !0)
          }, [
            g[8] || (g[8] = s("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              s("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            g[9] || (g[9] = R(" Filters ", -1)),
            h(Qe)(m.value) ? (t(), n("span", N1, " on ")) : _("", !0)
          ])) : _("", !0),
          s("div", R1, [
            s("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: g[2] || (g[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, U1),
            s("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: g[3] || (g[3] = (v) => i.value = "list")
            }, " List ", 10, H1)
          ])
        ]),
        E(St, {
          layout: i.value,
          "onUpdate:layout": g[4] || (g[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: b.value,
          onSelect: g[5] || (g[5] = (v) => r("select", v)),
          onCart: g[6] || (g[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      E(da, {
        open: d.value,
        title: k.value?.filterTitle ?? "Filters",
        "search-placeholder": k.value?.searchPlaceholder ?? "Search…",
        facets: k.value?.facets ?? [],
        applied: m.value,
        onClose: g[7] || (g[7] = (v) => d.value = !1),
        onApply: w,
        onReset: C
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), q1 = { class: "flex flex-col gap-4" }, K1 = { class: "flex flex-col gap-4" }, pw = /* @__PURE__ */ P({
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
    const a = e, r = l, o = G(_e()), i = $(
      () => a.cards.filter((u) => Bt(u, o.value))
    );
    return (u, d) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      E(Ce, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      s("section", q1, [
        E(Ce, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(St, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: d[0] || (d[0] = (f) => o.value = f),
          onSelect: d[1] || (d[1] = (f) => r("select", f)),
          onCart: d[2] || (d[2] = (f) => r("cart", f))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      s("section", K1, [
        E(Ce, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(tl, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": L(({ value: f }) => [
            E(pe, {
              status: String(f)
            }, {
              default: L(() => [
                R(p(f), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), G1 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, W1 = { class: "text-sm font-medium" }, Z1 = ["width", "height", "aria-label"], J1 = { class: "flex items-center gap-2" }, Y1 = /* @__PURE__ */ P({
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
    function f(y) {
      const g = o.value;
      if (!g)
        return null;
      const v = g.getBoundingClientRect(), c = g.width / v.width, x = g.height / v.height;
      return {
        x: (y.clientX - v.left) * c,
        y: (y.clientY - v.top) * x
      };
    }
    function k(y) {
      a.disabled || (i.value = !0, u = f(y), o.value?.setPointerCapture(y.pointerId));
    }
    function m(y) {
      if (!i.value || a.disabled)
        return;
      const g = d(), v = f(y);
      !g || !v || !u || (g.strokeStyle = "#111827", g.lineWidth = 2.4, g.lineCap = "round", g.lineJoin = "round", g.beginPath(), g.moveTo(u.x, u.y), g.lineTo(v.x, v.y), g.stroke(), u = v);
    }
    function b() {
      i.value = !1, u = null;
    }
    function S() {
      const y = o.value, g = d();
      !y || !g || (g.clearRect(0, 0, y.width, y.height), r("clear"));
    }
    function C() {
      const y = o.value;
      y && r("save", y.toDataURL("image/png"));
    }
    function w() {
      const y = o.value, g = d();
      !y || !g || (g.fillStyle = "#ffffff", g.fillRect(0, 0, y.width, y.height));
    }
    return ue(w), me(() => {
      i.value = !1;
    }), (y, g) => (t(), n("div", G1, [
      s("p", W1, p(e.label), 1),
      s("canvas", {
        ref_key: "canvas",
        ref: o,
        width: e.width,
        height: e.height,
        class: A(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(k, ["prevent"]),
        onPointermove: ce(m, ["prevent"]),
        onPointerup: ce(b, ["prevent"]),
        onPointerleave: ce(b, ["prevent"])
      }, null, 42, Z1),
      s("div", J1, [
        E(ne, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: S
        }, {
          default: L(() => [...g[0] || (g[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(ne, {
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: L(() => [...g[1] || (g[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), X1 = { class: "grid gap-8 lg:grid-cols-2" }, Q1 = { class: "flex flex-col gap-3" }, eb = { class: "text-muted-foreground text-xs" }, tb = {
  key: 0,
  class: "flex flex-col gap-3"
}, ab = { class: "flex flex-wrap gap-3" }, nb = ["onClick"], lb = ["src", "alt"], sb = {
  key: 1,
  class: "flex flex-col gap-3"
}, ob = { class: "flex flex-wrap gap-3" }, rb = ["onClick"], ib = ["src", "alt"], ub = {
  key: 2,
  class: "flex flex-col gap-4"
}, db = { class: "flex flex-wrap items-center gap-2" }, cb = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, fb = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, mb = { class: "flex flex-col gap-2" }, pb = ["src"], vb = {
  key: 1,
  class: "text-sm text-neutral-400"
}, gb = ["src"], vw = /* @__PURE__ */ P({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = G([]), r = G([]), o = G(null), i = G(null), u = G(null), d = G(l.documents[0]?.key ?? "");
    function f(y) {
      try {
        const g = localStorage.getItem(y), v = g ? JSON.parse(g) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    ue(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), o.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), re(
      a,
      (y) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(y));
      },
      { deep: !0 }
    ), re(
      r,
      (y) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(y));
      },
      { deep: !0 }
    );
    function k(y) {
      const g = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: y
      };
      a.value = [g, ...a.value].slice(0, 8), o.value = g.id;
    }
    async function m(y, g) {
      await Qo(y), g(40);
      const v = await new Promise((c, x) => {
        const M = new FileReader();
        M.onload = () => c(String(M.result)), M.onerror = () => x(new Error("Could not read the file")), M.readAsDataURL(y);
      });
      return g(100), { value: v, name: y.name, size: y.size, url: v };
    }
    function b() {
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
    const S = $(
      () => a.value.find((y) => y.id === o.value)?.dataUrl ?? null
    ), C = $(
      () => r.value.find((y) => y.id === i.value)?.dataUrl ?? null
    ), w = $(() => {
      const y = l.documents.find((v) => v.key === d.value)?.document ?? l.documents[0]?.document ?? {}, g = {
        ...y?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...y,
        branding: g
      };
    });
    return (y, g) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      E(Ce, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      s("section", X1, [
        E(Y1, {
          label: "Draw a signature",
          onSave: k
        }),
        s("div", Q1, [
          g[2] || (g[2] = s("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          s("p", eb, p(h(aa)), 1),
          E(sa, {
            modelValue: u.value,
            "onUpdate:modelValue": g[0] || (g[0] = (v) => u.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: m
          }, null, 8, ["modelValue"]),
          E(ne, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: b
          }, {
            default: L(() => [...g[1] || (g[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", tb, [
        E(Ce, {
          variant: "small",
          title: "Saved signatures"
        }),
        s("div", ab, [
          (t(!0), n(z, null, D(a.value, (v) => (t(), n("button", {
            key: v.id,
            type: "button",
            class: A(["rounded-md border p-2", v.id === o.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => o.value = v.id
          }, [
            s("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, lb)
          ], 10, nb))), 128))
        ])
      ])) : _("", !0),
      r.value.length ? (t(), n("section", sb, [
        E(Ce, {
          variant: "small",
          title: "Saved stamps"
        }),
        s("div", ob, [
          (t(!0), n(z, null, D(r.value, (v) => (t(), n("button", {
            key: v.id,
            type: "button",
            class: A(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = v.id
          }, [
            s("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, ib)
          ], 10, rb))), 128))
        ])
      ])) : _("", !0),
      e.documents.length ? (t(), n("section", ub, [
        s("div", db, [
          (t(!0), n(z, null, D(e.documents, (v) => (t(), F(ne, {
            key: v.key,
            size: "sm",
            variant: d.value === v.key ? "default" : "outline",
            onClick: (c) => d.value = v.key
          }, {
            default: L(() => [
              R(p(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        s("div", cb, [
          E(hc, {
            document: w.value
          }, null, 8, ["document"]),
          s("div", fb, [
            s("div", mb, [
              g[3] || (g[3] = s("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              S.value ? (t(), n("img", {
                key: 0,
                src: S.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, pb)) : (t(), n("p", vb, "Draw and save a signature"))
            ]),
            C.value ? (t(), n("img", {
              key: 0,
              src: C.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, gb)) : _("", !0)
          ])
        ])
      ])) : _("", !0)
    ], 2));
  }
}), gw = "panel.dashboard.hiddenWidgets", hb = /* @__PURE__ */ Symbol("dashboardHide"), bb = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, hw = /* @__PURE__ */ P({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = It(hb, null), r = G(
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
            (f) => typeof f?.id == "string" && typeof f.label == "string" && typeof f.href == "string"
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
    return (u, d) => i.value ? _("", !0) : (t(), n("div", bb, [
      E(ip, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (f) => r.value = f),
        onHide: d[1] || (d[1] = (f) => h(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), xb = { class: "flex flex-col gap-3" }, yb = ["data-slot"], kb = ["aria-pressed", "aria-label", "title"], $b = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wb = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Cb = { class: "flex h-8 items-center" }, _b = ["aria-label", "title", "onClick"], Sb = ["aria-label", "title", "onClick"], Mb = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Bb = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, bw = /* @__PURE__ */ P({
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
    function u(c) {
      return a.maskable && (c.sensitive ?? !0);
    }
    function d(c) {
      return u(c) && !o.value && !i.value.has(c.key);
    }
    const f = $(() => a.segments.some(d)), k = $(() => a.segments.some(u)), m = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, b = $(() => m[a.columns] ?? m[4]), S = $(() => {
      const c = a.columns ?? 4, x = Math.floor(a.segments.length / c) * c;
      return a.segments.slice(0, x);
    }), C = $(() => {
      const c = a.columns ?? 4, x = Math.floor(a.segments.length / c) * c;
      return a.segments.slice(x);
    }), w = $(() => {
      const c = [];
      return S.value.length > 0 && c.push({ key: "packed", joined: !0, segments: S.value }), C.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: C.value }), c;
    });
    function y() {
      const c = f.value === !1;
      o.value = !c, i.value = /* @__PURE__ */ new Set(), r("toggle", c);
    }
    function g(c) {
      if (!u(c))
        return;
      const x = new Set(i.value);
      if (d(c))
        x.add(c.key);
      else if (x.delete(c.key), o.value) {
        o.value = !1;
        for (const M of a.segments)
          M.key !== c.key && u(M) && x.add(M.key);
      }
      i.value = x, r("toggle", f.value);
    }
    function v(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, x) => (t(), n("div", xb, [
      (t(!0), n(z, null, D(w.value, (M) => (t(), n("div", {
        key: M.key,
        class: A(["relative shrink-0", M.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": M.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && k.value && M.key === w.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: y
        }, [
          (t(), n("svg", $b, [
            f.value ? (t(), n(z, { key: 0 }, [
              x[0] || (x[0] = s("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              x[1] || (x[1] = s("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              x[2] || (x[2] = s("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              x[3] || (x[3] = s("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              x[4] || (x[4] = s("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              x[5] || (x[5] = s("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, kb)) : _("", !0),
        s("div", {
          class: A(["grid", [M.joined ? "gap-px" : "gap-3", b.value]])
        }, [
          (t(!0), n(z, null, D(M.segments, (B) => (t(), n("div", {
            key: B.key,
            class: A(["bg-card flex flex-col gap-2 p-4", M.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            s("p", wb, p(B.label), 1),
            s("div", Cb, [
              e.loading ? (t(), F(De, {
                key: 0,
                variant: "number"
              })) : d(B) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${B.label} hidden. Show it.`,
                title: `Show ${B.label}`,
                onClick: (K) => g(B)
              }, [
                (t(), n(z, null, D(5, (K) => s("span", {
                  key: K,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, _b)) : u(B) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${B.label}, ${v(B.value)}. Hide it.`,
                title: `Hide ${B.label}`,
                onClick: (K) => g(B)
              }, p(v(B.value)), 9, Sb)) : (t(), n("span", Mb, p(v(B.value)), 1)),
              B.trend && !e.loading && !d(B) ? (t(), F(ua, {
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
            B.caption || B.comparison && B.trend ? (t(), n("p", Bb, p(B.caption ?? B.comparison), 1)) : _("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, yb))), 128))
    ]));
  }
}), Pb = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, zb = { class: "flex items-center justify-between gap-2" }, Ab = ["href"], jb = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Ob = { class: "flex flex-col gap-0.5" }, Lb = { class: "text-sm font-medium" }, Vb = { class: "text-xs text-muted-foreground" }, Db = {
  key: 1,
  class: "flex flex-col gap-2"
}, Tb = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Fb = { class: "flex flex-col gap-0.5" }, Eb = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, xw = /* @__PURE__ */ P({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: {}
  },
  setup(e) {
    const l = e, a = l.items.find((o) => !o.done) ?? null, r = l.items.filter((o) => o.key !== a?.key);
    return (o, i) => e.items.length ? (t(), n("section", Pb, [
      s("div", zb, [
        i[0] || (i[0] = s("h2", { class: "text-sm font-semibold" }, "Setup checklist", -1)),
        e.reportHref ? (t(), n("a", {
          key: 0,
          href: e.reportHref,
          class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
        }, " Full report ", 8, Ab)) : _("", !0)
      ]),
      h(a) ? (t(), n("div", jb, [
        i[1] || (i[1] = s("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        s("div", Ob, [
          s("p", Lb, p(h(a).title), 1),
          s("p", Vb, p(h(a).detail), 1)
        ])
      ])) : _("", !0),
      h(r).length ? (t(), n("ul", Db, [
        (t(!0), n(z, null, D(h(r), (u) => (t(), n("li", {
          key: u.key,
          class: "flex items-start gap-3"
        }, [
          s("span", {
            class: A([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              u.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            u.done ? (t(), n("svg", Tb, [...i[2] || (i[2] = [
              s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : _("", !0)
          ], 2),
          s("div", Fb, [
            s("p", {
              class: A(["text-sm", u.done ? "text-muted-foreground line-through" : "font-medium"])
            }, p(u.title), 3),
            u.done ? _("", !0) : (t(), n("p", Eb, p(u.detail), 1))
          ])
        ]))), 128))
      ])) : _("", !0)
    ])) : _("", !0);
  }
}), Ib = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, Nb = { class: "flex items-center gap-2" }, Rb = { class: "font-medium tabular-nums" }, Ub = { class: "ml-auto flex items-center gap-3" }, yw = /* @__PURE__ */ P({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = (o) => new Intl.NumberFormat().format(o);
    return (o, i) => (t(), n("div", Ib, [
      s("div", Nb, [
        U(o.$slots, "actions")
      ]),
      s("span", Rb, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          R(" All " + p(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          R(p(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      s("div", Ub, [
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
}), Hb = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, qb = { class: "text-muted-foreground text-xs tabular-nums" }, Kb = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Gb = ["value"], Wb = ["value"], Zb = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Jb = ["disabled"], Yb = ["disabled"], Xb = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Qb = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, ex = ["disabled"], kw = /* @__PURE__ */ P({
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
    const a = e, r = l, o = (f) => new Intl.NumberFormat().format(f), i = $(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), u = $(() => (a.page - 1) * a.perPage + a.rowsOnPage), d = $(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (f, k) => (t(), n("div", Hb, [
      s("p", qb, [
        R(" Showing " + p(o(i.value)) + "-" + p(o(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          R("of " + p(o(e.total)), 1)
        ], 64)) : _("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Kb, [
        k[4] || (k[4] = s("span", null, "Per page", -1)),
        s("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: k[0] || (k[0] = (m) => r("update:perPage", Number(m.target.value)))
        }, [
          (t(!0), n(z, null, D(e.perPageOptions, (m) => (t(), n("option", {
            key: m,
            value: m
          }, p(m), 9, Wb))), 128))
        ], 40, Gb)
      ])) : _("", !0),
      s("nav", Zb, [
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
        ])], 8, Jb),
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
        ])], 8, Yb),
        s("span", Xb, p(e.page), 1),
        d.value !== null ? (t(), n("span", Qb, " of " + p(o(d.value)), 1)) : _("", !0),
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
        ])], 8, ex)
      ])
    ]));
  }
}), tx = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, ax = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, nx = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, lx = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, $w = /* @__PURE__ */ P({
  __name: "TableShell",
  setup(e) {
    return (l, a) => (t(), n("div", tx, [
      l.$slots.tabs ? (t(), n("div", ax, [
        U(l.$slots, "tabs")
      ])) : _("", !0),
      l.$slots.toolbar ? (t(), n("div", nx, [
        U(l.$slots, "toolbar")
      ])) : _("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", lx, [
        U(l.$slots, "pagination")
      ])) : _("", !0)
    ]));
  }
}), sx = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, ox = ["aria-current"], rx = ["title"], ix = ["aria-current", "onClick"], ux = ["title"], dx = /* @__PURE__ */ P({
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
    return (o, i) => (t(), n("div", sx, [
      s("button", {
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => a("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, p(r(e.counts.all ?? 0)), 11, rx)) : (t(), F(De, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, ox),
      (t(!0), n(z, null, D(e.tabs, (u) => (t(), n("button", {
        key: u,
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => a("select", u)
      }, [
        R(p(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, p(r(e.counts[u] ?? 0)), 11, ux)) : (t(), F(De, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, ix))), 128))
    ]));
  }
}), ww = /* @__PURE__ */ kt(dx, [["__scopeId", "data-v-3967c945"]]), cx = { class: "flex flex-wrap items-center justify-end gap-2" }, fx = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, mx = ["placeholder", "title", "aria-label"], px = ["aria-label"], vx = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, gx = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, hx = { class: "text-xs font-medium" }, bx = ["value", "onChange"], xx = ["value"], yx = { class: "grid grid-cols-2 gap-2" }, kx = ["value", "onChange"], $x = ["value", "onChange"], wx = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Cx = ["value", "onChange"], _x = ["value", "onChange"], Sx = {
  key: 4,
  class: "flex items-center gap-2"
}, Mx = ["aria-checked", "onClick"], Bx = { class: "text-xs" }, Px = ["onClick"], zx = ["value", "onChange"], Ax = ["value"], jx = ["disabled", "onClick"], Ox = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Lx = ["disabled", "onClick"], Vx = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Dx = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Tx = ["aria-pressed", "aria-label", "title"], Fx = {
  key: 3,
  class: "text-muted-foreground shrink-0 text-xs"
}, Cw = /* @__PURE__ */ P({
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
    ), f = $(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), k = $(() => a.search !== "" || d.value > 0);
    function m(O) {
      return O.type === "multiselect";
    }
    function b(O) {
      const j = u.value[O.key];
      return Array.isArray(j) ? j : j == null ? [] : [j];
    }
    function S(O) {
      return b(O).filter(
        (j) => typeof j == "string" || typeof j == "number"
      );
    }
    function C(O) {
      return B(O).flatMap(
        (j) => typeof j.value == "string" || typeof j.value == "number" ? [{ value: j.value, label: j.label }] : []
      );
    }
    function w(O, j) {
      u.value = { ...u.value, [O.key]: j === "" ? null : j };
    }
    function y(O, j) {
      const W = u.value[O.key];
      if (typeof W != "string" || !W.includes(".."))
        return "";
      const [I, H] = W.split("..");
      return j === "from" ? I ?? "" : H ?? "";
    }
    function g(O, j, W) {
      const I = j === "from" ? W : y(O, "from"), H = j === "to" ? W : y(O, "to");
      u.value = {
        ...u.value,
        [O.key]: I && H ? `${I}..${H}` : null
      };
    }
    function v(O, j, W) {
      const I = j === "from" ? W : y(O, "from"), H = j === "to" ? W : y(O, "to");
      u.value = {
        ...u.value,
        [O.key]: I || H ? `${I}..${H}` : null
      };
    }
    function c(O) {
      r("apply-filters", { ...u.value }), O();
    }
    function x(O, j) {
      u.value[O] = j, r("apply-filters", { ...u.value });
    }
    function M() {
      u.value = Object.fromEntries(a.filterSchema.map((O) => [O.key, null]));
    }
    function B(O) {
      return O.type === "boolean" ? [
        { value: !0, label: O.trueLabel ?? "Yes" },
        { value: !1, label: O.falseLabel ?? "No" }
      ] : O.type === "daterange" ? Object.entries(O.presets ?? {}).map(([j, W]) => ({
        value: j,
        label: W
      })) : (O.options ?? []).map((j) => ({ value: j, label: j }));
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
      const j = new Set(K.value);
      j.has(O) ? j.delete(O) : j.add(O), K.value = j, r("apply-columns", [...j]);
    }
    function Y() {
      K.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function T() {
      o.value = "", r("clear");
    }
    return (O, j) => (t(), n("div", cx, [
      s("div", fx, [
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
        }, null, 8, mx), [
          [Se, o.value]
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
      e.filterSchema.length ? (t(), F(He, {
        key: 0,
        width: "w-80",
        "dismiss-on-panel-click": !1
      }, {
        trigger: L(() => [
          s("button", {
            type: "button",
            dusk: "filters-trigger",
            class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", d.value ? "border-primary text-primary" : ""]),
            "aria-label": d.value ? `Filters (${d.value} active)` : "Filters",
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
            d.value ? (t(), n("span", vx, p(d.value), 1)) : _("", !0)
          ], 10, px)
        ]),
        panel: L(({ close: W }) => [
          s("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
            j[6] || (j[6] = s("span", { class: "text-sm font-semibold" }, "Filters", -1)),
            s("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: M
            }, " Reset ")
          ]),
          j[9] || (j[9] = s("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
          s("div", gx, [
            (t(!0), n(z, null, D(e.filterSchema, (I) => (t(), n("div", {
              key: I.key,
              class: "flex flex-col gap-1.5"
            }, [
              s("label", hx, p(I.label), 1),
              m(I) ? (t(), F(_t, {
                key: 0,
                "model-value": S(I),
                options: C(I),
                placeholder: `Any ${I.label.toLowerCase()}`,
                "onUpdate:modelValue": (H) => u.value[I.key] = H.length ? H : null
              }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : I.type === "querybuilder" ? (t(), F(gs, {
                key: 1,
                "model-value": u.value[I.key] ?? null,
                fields: I.fields ?? {},
                operators: I.operators ?? {},
                "max-depth": I.maxDepth ?? 5,
                onApply: (H) => x(I.key, H)
              }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : I.type === "daterange" ? (t(), n(z, { key: 2 }, [
                s("select", {
                  value: typeof u.value[I.key] == "string" && !String(u.value[I.key]).includes("..") ? u.value[I.key] : "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                  onChange: (H) => w(I, H.target.value)
                }, [
                  j[7] || (j[7] = s("option", { value: "" }, "Any time", -1)),
                  (t(!0), n(z, null, D(B(I), (H) => (t(), n("option", {
                    key: String(H.value),
                    value: H.value
                  }, p(H.label), 9, xx))), 128))
                ], 40, bx),
                s("div", yx, [
                  s("input", {
                    type: "date",
                    value: y(I, "from"),
                    "aria-label": "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (H) => g(
                      I,
                      "from",
                      H.target.value
                    )
                  }, null, 40, kx),
                  s("input", {
                    type: "date",
                    value: y(I, "to"),
                    "aria-label": "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (H) => g(
                      I,
                      "to",
                      H.target.value
                    )
                  }, null, 40, $x)
                ])
              ], 64)) : I.type === "numberrange" ? (t(), n("div", wx, [
                s("input", {
                  type: "number",
                  value: y(I, "from"),
                  "aria-label": "From",
                  placeholder: "From",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (H) => v(
                    I,
                    "from",
                    H.target.value
                  )
                }, null, 40, Cx),
                s("input", {
                  type: "number",
                  value: y(I, "to"),
                  "aria-label": "To",
                  placeholder: "To",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (H) => v(
                    I,
                    "to",
                    H.target.value
                  )
                }, null, 40, _x)
              ])) : I.type === "boolean" ? (t(), n("div", Sx, [
                s("button", {
                  type: "button",
                  role: "switch",
                  "aria-checked": u.value[I.key] === !0,
                  class: A([
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    u.value[I.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                  ]),
                  onClick: (H) => w(I, u.value[I.key] === !0 ? null : !0)
                }, [
                  s("span", {
                    class: A(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[I.key] === !0 ? "left-4.5" : "left-0.5"])
                  }, null, 2)
                ], 10, Mx),
                s("span", Bx, p(I.trueLabel ?? "Yes"), 1),
                s("button", {
                  type: "button",
                  class: A([
                    "text-muted-foreground ml-auto text-xs hover:underline",
                    u.value[I.key] === !1 ? "text-primary font-medium" : ""
                  ]),
                  onClick: (H) => w(I, u.value[I.key] === !1 ? null : !1)
                }, p(I.falseLabel ?? "No") + " only ", 11, Px)
              ])) : (t(), n("select", {
                key: 5,
                value: u.value[I.key] ?? "",
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                onChange: (H) => w(I, H.target.value)
              }, [
                j[8] || (j[8] = s("option", { value: "" }, "All", -1)),
                (t(!0), n(z, null, D(B(I), (H) => (t(), n("option", {
                  key: String(H.value),
                  value: H.value
                }, p(H.label), 9, Ax))), 128))
              ], 40, zx))
            ]))), 128))
          ]),
          s("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
            disabled: !f.value,
            onClick: (I) => c(W)
          }, " Apply filters ", 8, jx)
        ]),
        _: 1
      })) : _("", !0),
      E(He, { "dismiss-on-panel-click": !1 }, {
        trigger: L(() => [...j[10] || (j[10] = [
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
          j[13] || (j[13] = s("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
          s("div", Ox, [
            (t(!0), n(z, null, D(e.columns, (W) => (t(), n("button", {
              key: W.key,
              type: "button",
              class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", W.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
              disabled: W.locked,
              onClick: (I) => N(W.key)
            }, [
              K.value.has(W.key) ? (t(), n("span", Dx)) : (t(), n("svg", Vx, [...j[11] || (j[11] = [
                s("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])),
              R(" " + p(W.label), 1)
            ], 10, Lx))), 128))
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
              R(" Reset ", -1)
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
      ])], 10, Tx)) : _("", !0),
      k.value ? (t(), n("button", {
        key: 2,
        type: "button",
        class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
        onClick: T
      }, " Clear ")) : _("", !0),
      e.loading ? (t(), n("span", Fx, "Loading…")) : _("", !0)
    ]));
  }
}), Ex = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ix = { class: "grid gap-2" }, Nx = {
  key: 0,
  class: "text-destructive text-sm"
}, Rx = { class: "flex gap-2" }, _w = /* @__PURE__ */ P({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, o = G((() => {
      const S = navigator.userAgent, C = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: y }) => y.test(S))?.name, w = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: y }) => y.test(S))?.name;
      return [C, w].filter(Boolean).join(" on ") || "";
    })()), i = G(!1), u = ka(null), d = $(() => u.value?.isLoading.value ?? !1), f = $(() => u.value?.error.value ?? null), k = $(() => u.value?.isSupported.value ?? !1);
    ue(async () => {
      try {
        const { usePasskeyRegister: S } = await import("@laravel/passkeys/vue");
        u.value = S({
          onSuccess: () => {
            o.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const m = async (S) => {
      S.preventDefault(), !(!o.value.trim() || u.value === null) && await u.value.register(o.value);
    }, b = () => {
      i.value = !1, o.value = "";
    };
    return (S, C) => k.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: m
    }, [
      s("div", Ix, [
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
          [Se, o.value]
        ]),
        C[4] || (C[4] = s("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      f.value ? (t(), n("p", Nx, p(f.value), 1)) : _("", !0),
      s("div", Rx, [
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
          onClick: b
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
    })) : (t(), n("p", Ex, " Passkeys are not supported in this browser. "));
  }
}), Ux = { class: "text-sm font-semibold" }, Hx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, qx = {
  key: 4,
  class: "flex flex-col gap-3"
}, Kx = { class: "text-sm font-medium" }, Gx = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Wx = {
  key: 0,
  class: "mb-1 font-medium"
}, Zx = ["onClick"], Jx = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Yx = { class: "flex items-center justify-between gap-3 border-t p-4" }, Xx = ["disabled"], Qx = /* @__PURE__ */ P({
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
      () => (a.node.children ?? []).map((y) => ({
        label: y.label ?? "",
        description: y.description
      }))
    ), f = $(() => a.depth === 0), k = $(() => {
      const y = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, g = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        y[a.node.align ?? "start"] ?? "items-start",
        g[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), m = $(() => {
      const y = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return y[a.node.tone ?? "info"] ?? y.info;
    }), b = $(() => {
      const y = a.node.columns ?? 1;
      return y >= 3 ? "sm:grid-cols-3" : y === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function S(y) {
      const g = [], v = (c) => {
        c.component === "field" && c.key && g.push(c.key), c.children?.forEach(v);
      };
      return v(y), g.some((c) => a.errors[c]);
    }
    function C(y) {
      const g = y.visibleWhen;
      return g ? a.values[g.field] == g.value : !0;
    }
    function w(y) {
      if (a.upload)
        return (g, v) => a.upload(y, g, v);
    }
    return (y, g) => {
      const v = vt("SchemaNode", !0);
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
        "search-options": e.node.searchable && e.searchOptions ? (c) => e.searchOptions(e.node.key, c) : void 0,
        upload: w(e.node.key),
        discard: e.discard,
        onChange: g[0] || (g[0] = (c) => r("change", e.node.key, c))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && C(e.node) ? (t(), n("section", {
        key: 1,
        class: A(f.value ? "bg-card rounded-lg border" : "")
      }, [
        s("header", {
          class: A(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: g[1] || (g[1] = (c) => e.node.collapsible && (o.value = !o.value))
        }, [
          s("div", null, [
            s("h3", Ux, p(e.node.label), 1),
            e.node.description ? (t(), n("p", Hx, p(e.node.description), 1)) : _("", !0)
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", o.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...g[11] || (g[11] = [
            s("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : _("", !0)
        ], 2),
        o.value ? (t(), n("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [b.value, f.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, D(e.node.children ?? [], (c, x) => (t(), F(v, {
            key: x,
            node: c,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: A(c.span && c.span >= 2 ? "sm:col-span-2" : ""),
            onChange: g[2] || (g[2] = (M, B) => r("change", M, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : _("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), n(z, null, D(e.node.children ?? [], (c, x) => (t(), F(v, {
          key: x,
          node: c,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: g[3] || (g[3] = (M, B) => r("change", M, B))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 3,
        class: A(["flex", k.value])
      }, [
        (t(!0), n(z, null, D(e.node.children ?? [], (c, x) => (t(), F(v, {
          key: x,
          node: c,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: g[4] || (g[4] = (M, B) => r("change", M, B))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", qx, [
        s("legend", Kx, p(e.node.label), 1),
        e.node.description ? (t(), n("p", Gx, p(e.node.description), 1)) : _("", !0),
        s("div", {
          class: A(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), n(z, null, D(e.node.children ?? [], (c, x) => (t(), F(v, {
            key: x,
            node: c,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[5] || (g[5] = (M, B) => r("change", M, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 5,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", m.value])
      }, [
        e.node.title ? (t(), n("p", Wx, p(e.node.title), 1)) : _("", !0),
        s("p", null, p(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: A(f.value ? "bg-card rounded-lg border" : "")
      }, [
        s("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, D(e.node.children ?? [], (c, x) => (t(), n("button", {
            key: x,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === x ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (M) => i.value = x
          }, [
            R(p(c.label) + " ", 1),
            S(c) ? (t(), n("span", Jx)) : _("", !0)
          ], 10, Zx))), 128))
        ], 2),
        (t(!0), n(z, null, D(e.node.children ?? [], (c, x) => oe((t(), n("div", {
          key: x,
          class: A(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, D(c.children ?? [], (M, B) => (t(), F(v, {
            key: B,
            node: M,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[6] || (g[6] = (K, N) => r("change", K, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, i.value === x]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: A(f.value ? "bg-card rounded-lg border" : "")
      }, [
        E(Yr, {
          class: A(["p-4", f.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (c) => S((e.node.children ?? [])[c]),
          "onUpdate:activeStep": g[7] || (g[7] = (c) => u.value = c)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, D(e.node.children ?? [], (c, x) => oe((t(), n("div", {
          key: x,
          class: A(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, D(c.children ?? [], (M, B) => (t(), F(v, {
            key: B,
            node: M,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[8] || (g[8] = (K, N) => r("change", K, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, u.value === x]
        ])), 128)),
        s("div", Yx, [
          s("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: g[9] || (g[9] = (c) => u.value--)
          }, " Back ", 8, Xx),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: g[10] || (g[10] = (c) => u.value++)
          }, " Next ")) : _("", !0)
        ])
      ], 2)) : _("", !0);
    };
  }
}), ey = { class: "flex flex-col gap-4" }, ty = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, Sw = /* @__PURE__ */ P({
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
    function d(f) {
      if (a.upload)
        return (k, m) => a.upload(f, k, m);
    }
    return (f, k) => (t(), n("div", ey, [
      u.value ? (t(), n("p", ty, p(u.value), 1)) : _("", !0),
      o.value ? (t(!0), n(z, { key: 1 }, D(e.nodes, (m, b) => (t(), F(Qx, {
        key: b,
        node: m,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: k[0] || (k[0] = (S, C) => r("change", S, C))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, D(e.fields, (m) => (t(), F(qe, {
          key: m.key,
          field: m,
          value: e.modelValue[m.key],
          error: e.errors[m.key],
          errors: e.errors,
          options: e.options[m.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": m.searchable && e.searchOptions ? (b) => e.searchOptions(m.key, b) : void 0,
          upload: d(m.key),
          discard: e.discard,
          class: A(m.span && m.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (b) => r("change", m.key, b)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), ay = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, ny = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, ly = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, sy = ["disabled"], oy = ["disabled"], ry = ["disabled"], Mw = /* @__PURE__ */ P({
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
      E(ze, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: L(() => [
          e.show ? (t(), n("div", ay, [
            s("div", ny, [
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
              s("span", ly, p(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, p(e.discardLabel), 9, sy)) : _("", !0),
              s("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, p(e.cancelLabel), 9, oy),
              s("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, p(e.processing ? "Saving…" : e.saveLabel), 9, ry)
            ])
          ])) : _("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function Bw(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = G(rt(e.value)), o = $(() => rt(e.value) !== r.value);
  function i() {
    r.value = rt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(f) {
    o.value && (f.preventDefault(), f.returnValue = "");
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
const iy = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, uy = { class: "text-muted-foreground text-xs font-medium" }, dy = { class: "text-sm" }, cy = { key: 1 }, fy = { class: "text-sm font-semibold" }, my = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, py = ["onClick"], Pw = /* @__PURE__ */ P({
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
    }), u = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, d = $(() => l.node.key ? l.record[l.node.key] : null), f = $(() => {
      const m = d.value;
      if (m == null || m === "")
        return "-";
      if (l.node.type === "date" || l.node.type === "datetime")
        return new Date(String(m)).toLocaleDateString(void 0, u[l.node.type]);
      let b = String(m);
      return l.node.transform === "upper" && (b = b.toUpperCase()), l.node.transform === "lower" && (b = b.toLowerCase()), [l.node.prefix, b, l.node.suffix].filter(Boolean).join(" ");
    }), k = $(() => {
      const m = typeof d.value == "boolean" ? d.value ? "1" : "" : String(d.value), b = l.node.colors?.[m] ?? l.node.defaultColor ?? "neutral";
      return $t[b] ?? "outline";
    });
    return (m, b) => {
      const S = vt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", iy, [
        s("dt", uy, p(e.node.label), 1),
        s("dd", dy, [
          e.node.type === "badge" && h(_s)(d.value) ? (t(), F(Re, {
            key: 0,
            variant: k.value,
            class: "capitalize"
          }, {
            default: L(() => [
              R(p(d.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", cy, "-")) : (t(), n("span", {
            key: 2,
            class: A([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, p(f.value), 3))
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
          onClick: b[0] || (b[0] = (C) => e.node.collapsible && (a.value = !a.value))
        }, [
          s("div", null, [
            s("h3", fy, p(e.node.label), 1),
            e.node.description ? (t(), n("p", my, p(e.node.description), 1)) : _("", !0)
          ])
        ], 2),
        a.value ? (t(), n("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [i.value, o.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, D(e.node.children ?? [], (C, w) => (t(), F(S, {
            key: w,
            node: C,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : _("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, D(e.node.children ?? [], (C, w) => (t(), F(S, {
          key: w,
          node: C,
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
          (t(!0), n(z, null, D(e.node.children ?? [], (C, w) => (t(), n("button", {
            key: w,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              r.value === w ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (y) => r.value = w
          }, p(C.label), 11, py))), 128))
        ], 2),
        (t(!0), n(z, null, D(e.node.children ?? [], (C, w) => oe((t(), n("div", {
          key: w,
          class: A(["flex flex-col gap-5", o.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, D(C.children ?? [], (y, g) => (t(), F(S, {
            key: g,
            node: y,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [je, r.value === w]
        ])), 128))
      ], 2)) : _("", !0);
    };
  }
}), vy = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, gy = { class: "text-muted-foreground text-sm" }, hy = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, by = { class: "flex items-start gap-3" }, xy = { class: "min-w-0 flex-1" }, yy = { class: "flex flex-wrap items-center gap-2" }, ky = { class: "truncate text-sm font-medium" }, $y = { class: "text-muted-foreground mt-0.5 text-xs" }, wy = { class: "text-muted-foreground text-xs" }, Cy = { class: "mt-auto flex items-center gap-2" }, _y = /* @__PURE__ */ P({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, o = $(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", vy, [
      s("p", gy, p(o.value) + " of " + p(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      s("div", hy, [
        (t(!0), n(z, null, D(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          s("div", by, [
            s("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: Q({ background: d.color }),
              "aria-hidden": "true"
            }, p(d.mark), 5),
            s("div", xy, [
              s("div", yy, [
                s("h3", ky, p(d.label), 1),
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
              s("p", $y, p(d.caption), 1)
            ])
          ]),
          s("p", wy, p(d.methods.join(" · ")), 1),
          s("div", Cy, [
            E(ne, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", d.key)
            }, {
              default: L(() => [...u[3] || (u[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(ne, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", d.key)
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
}), Sy = { class: "flex flex-col gap-6" }, My = { class: "relative" }, By = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Py = ["d"], zy = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Ay = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, jy = { class: "flex flex-wrap items-center gap-2" }, Oy = { class: "text-muted-foreground text-sm" }, Ly = { class: "flex flex-col gap-1 text-sm" }, Vy = ["value"], Dy = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ty = { class: "flex flex-wrap items-center gap-2" }, Fy = {
  key: 1,
  class: "flex items-center gap-2"
}, zw = /* @__PURE__ */ P({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Me({
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
        (y) => y.key === C ? { ...y, ...w } : y
      );
    }
    function f(C) {
      a.value = C;
    }
    function k(C) {
      const w = l.value.find((g) => g.key === C);
      if (!w)
        return;
      const y = !w.connected;
      d(C, {
        connected: y,
        mode: y ? w.mode ?? "test" : null,
        enabled: y,
        isDefault: !1
      });
    }
    function m(C, w) {
      const y = l.value.find((g) => g.key === C);
      y?.connected && d(C, { enabled: w, isDefault: w ? y.isDefault : !1 });
    }
    function b(C) {
      const w = l.value.find((y) => y.key === C);
      !w || !u(w) || (l.value = l.value.map((y) => ({
        ...y,
        isDefault: y.key === C
      })));
    }
    function S(C) {
      const w = a.value;
      !w || !l.value.find((g) => g.key === w)?.connected || d(w, { mode: C });
    }
    return (C, w) => (t(), n(z, null, [
      s("div", Sy, [
        E(Ce, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        s("div", My, [
          (t(), n("svg", By, [
            s("path", {
              d: h(se)("search")
            }, null, 8, Py)
          ])),
          E(fe, {
            modelValue: r.value,
            "onUpdate:modelValue": w[0] || (w[0] = (y) => r.value = y),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), F(_y, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: k
        }, null, 8, ["gateways"])) : (t(), n("p", zy, " No gateways match “" + p(r.value.trim()) + "”. ", 1))
      ]),
      E(Mt, {
        open: o.value !== null,
        title: o.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: w[8] || (w[8] = (y) => a.value = null)
      }, {
        footer: L(() => [
          E(ne, {
            variant: "outline",
            size: "sm",
            onClick: w[6] || (w[6] = (y) => a.value = null)
          }, {
            default: L(() => [...w[21] || (w[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          o.value ? (t(), F(ne, {
            key: 0,
            size: "sm",
            onClick: w[7] || (w[7] = (y) => k(o.value.key))
          }, {
            default: L(() => [
              R(p(o.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : _("", !0)
        ]),
        default: L(() => [
          o.value ? (t(), n("div", Ay, [
            s("div", jy, [
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
            s("p", Oy, p(o.value.caption), 1),
            s("label", Ly, [
              w[12] || (w[12] = R(" Display name ", -1)),
              s("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: o.value.label,
                readonly: ""
              }, null, 8, Vy)
            ]),
            w[20] || (w[20] = s("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              s("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            o.value.connected ? (t(), n("div", Dy, [
              w[16] || (w[16] = s("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              w[17] || (w[17] = s("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              s("div", Ty, [
                E(ne, {
                  size: "sm",
                  variant: o.value.enabled !== !1 ? "default" : "outline",
                  onClick: w[1] || (w[1] = (y) => m(o.value.key, !0))
                }, {
                  default: L(() => [...w[13] || (w[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ne, {
                  size: "sm",
                  variant: o.value.enabled === !1 ? "default" : "outline",
                  onClick: w[2] || (w[2] = (y) => m(o.value.key, !1))
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
                  onClick: w[3] || (w[3] = (y) => b(o.value.key))
                }, {
                  default: L(() => [...w[15] || (w[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : _("", !0),
            o.value.connected ? (t(), n("div", Fy, [
              E(ne, {
                size: "sm",
                variant: o.value.mode === "test" ? "default" : "outline",
                onClick: w[4] || (w[4] = (y) => S("test"))
              }, {
                default: L(() => [...w[18] || (w[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(ne, {
                size: "sm",
                variant: o.value.mode === "live" ? "default" : "outline",
                onClick: w[5] || (w[5] = (y) => S("live"))
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
function Aw(e) {
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
    const f = new Set(l.value);
    f.has(d) ? f.delete(d) : f.add(d), l.value = f;
  }
  function r(d) {
    const f = new Set(l.value);
    f.add(d), l.value = f;
  }
  function o(d) {
    const f = new Set(l.value);
    f.delete(d), l.value = f;
  }
  function i(d) {
    l.value = new Set(d);
  }
  function u() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: a, hide: r, show: o, setHidden: i, reset: u };
}
function jw(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: o, onResync: i, onInsert: u } = e, d = G(
    l.driver === "none" ? "off" : "connecting"
  ), f = G(/* @__PURE__ */ new Set());
  let k = /* @__PURE__ */ new Map(), m, b, S, C = (/* @__PURE__ */ new Date()).toISOString(), w = null;
  function y(O, j) {
    k.set(O, { ...k.get(O) ?? {}, ...j }), !m && (m = setTimeout(() => {
      m = void 0, g();
    }, l.batchMs));
  }
  function g() {
    if (k.size === 0)
      return;
    const O = k;
    k = /* @__PURE__ */ new Map();
    const j = /* @__PURE__ */ new Set();
    for (const [W, I] of O) {
      const H = a.value.find((te) => te[r] === W);
      if (!H) {
        u?.(W, I);
        continue;
      }
      Object.assign(H, I), j.add(W);
    }
    j.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...j]), setTimeout(() => {
      const W = new Set(f.value);
      j.forEach((I) => W.delete(I)), f.value = W;
    }, 1500));
  }
  async function v() {
    if (!(!o || a.value.length === 0)) {
      S?.abort(), S = new AbortController();
      try {
        const O = a.value.map((I) => I[r]), { records: j, at: W } = await o(O, C);
        C = W, d.value = "live";
        for (const I of j)
          y(I[r], I);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function c() {
    x(), d.value = "live", b = setInterval(v, l.intervalMs);
  }
  function x() {
    clearInterval(b), b = void 0, S?.abort();
  }
  function M() {
    return window.Echo ?? null;
  }
  function B() {
    const O = M();
    if (!O || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    w = l.channel;
    const j = O.private(l.channel);
    for (const W of l.events)
      j.listen(W, (I) => {
        I?.[r] !== void 0 && y(I[r], I);
      });
    d.value = "live", O.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), O.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function K() {
    w && (M()?.leave(w), w = null);
  }
  function N() {
    l.driver === "poll" && c(), l.driver === "broadcast" && B();
  }
  function Y() {
    x(), K(), clearTimeout(m), m = void 0, k = /* @__PURE__ */ new Map();
  }
  function T() {
    l.pauseWhenHidden && (document.hidden ? (Y(), d.value = "paused") : (C = (/* @__PURE__ */ new Date()).toISOString(), N(), i?.()));
  }
  return ue(() => {
    l.driver !== "none" && (N(), l.pauseWhenHidden && document.addEventListener("visibilitychange", T));
  }), me(() => {
    document.removeEventListener("visibilitychange", T), Y();
  }), { status: d, recentlyChanged: f, applyPatch: y, flush: g, pollOnce: v };
}
const Ey = /^[a-z0-9-]+$/, Iy = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function Ow(e) {
  $a(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !Ey.test(a) || typeof r != "string" || !Iy.test(r) || (l[`--${a}`] = r);
    Ys(l);
  });
}
const Ny = { class: "flex items-center gap-0.5" }, Ry = /* @__PURE__ */ P({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Ny, [
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
}), Uy = /* @__PURE__ */ P({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), F(ia, {
      code: "AB-1234",
      style: Q(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Hy = { class: "flex flex-col gap-2" }, qy = { class: "bg-card rounded-lg border p-4" }, Ky = { class: "text-muted-foreground truncate text-xs" }, Gy = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Wy = /* @__PURE__ */ P({
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
    function f(w, y) {
      return w.length <= y ? w : `${w.slice(0, y - 1).trimEnd()}…`;
    }
    const k = $(() => f(o.value, r.value.titleMax)), m = $(() => f(i.value, r.value.descriptionMax));
    function b(w, y, g) {
      return w === 0 ? { tone: "text-muted-foreground", note: "empty" } : w > g ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : w < y ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const S = $(
      () => b(o.value.length, r.value.titleMin, r.value.titleMax)
    ), C = $(
      () => b(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (w, y) => (t(), n("div", Hy, [
      s("div", qy, [
        s("p", Ky, p(d.value), 1),
        s("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", k.value === "" ? "text-muted-foreground italic" : ""])
        }, p(k.value || "Untitled page"), 3),
        s("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", m.value === "" ? "italic" : ""])
        }, p(m.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      s("div", Gy, [
        s("span", {
          class: A(S.value.tone)
        }, " Title " + p(o.value.length) + "/" + p(r.value.titleMax) + " · " + p(S.value.note), 3),
        s("span", {
          class: A(C.value.tone)
        }, " Description " + p(i.value.length) + "/" + p(r.value.descriptionMax) + " · " + p(C.value.note), 3)
      ]),
      y[0] || (y[0] = s("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function Zy() {
  ke("radio", Yu), ke("checkboxlist", ed), ke("tags", rd), ke("colour", xd), ke("slider", _d), ke("visual-select", Fd), ke("markdown", zu), ke("code", Tu), ke("seo-preview", Wy), st("swatch", Id), st("voucher-code-box", Uy), st("document-colour-mode", Ry);
}
function ca() {
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
const Jy = /* @__PURE__ */ P({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = ca();
    return (r, o) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", h(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: Q({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), Yy = ["id"], ye = /* @__PURE__ */ P({
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
        E(Jy, null, {
          default: L(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Yy));
  }
}), Xy = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Qy = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, e0 = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Oe = /* @__PURE__ */ P({
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
      e.eyebrow ? (t(), n("p", Xy, p(e.eyebrow), 1)) : _("", !0),
      e.title ? (t(), n("h2", Qy, p(e.title), 1)) : _("", !0),
      e.body ? (t(), n("p", e0, p(e.body), 1)) : _("", !0)
    ], 2)) : _("", !0);
  }
});
function t0() {
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
const a0 = { class: "pk-tilt-inner relative h-full" }, n0 = /* @__PURE__ */ P({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = t0();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      s("div", a0, [
        r[0] || (r[0] = s("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), l0 = { class: "flex flex-col gap-10" }, s0 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, o0 = { class: "text-base font-semibold" }, r0 = { class: "text-sm text-pretty text-muted-foreground" }, i0 = /* @__PURE__ */ P({
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
        s("div", l0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("div", s0, [
            (t(!0), n(z, null, D(e.items ?? [], (o, i) => (t(), F(n0, {
              key: i,
              class: A(l(o.span))
            }, {
              default: L(() => [
                s("div", {
                  class: A([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    o.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  s("h3", o0, p(o.title), 1),
                  s("p", r0, p(o.body), 1)
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
}), u0 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, d0 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, c0 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, f0 = ["href"], m0 = /* @__PURE__ */ P({
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
        s("div", u0, [
          s("h2", d0, p(e.title), 1),
          e.body ? (t(), n("p", c0, p(e.body), 1)) : _("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, p(e.label), 9, f0)) : _("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), p0 = { class: "flex flex-col gap-8" }, v0 = { class: "divide-y rounded-lg border" }, g0 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, h0 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, b0 = /* @__PURE__ */ P({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, { narrow: "" }, {
      default: L(() => [
        s("div", p0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("div", v0, [
            (t(!0), n(z, null, D(e.items ?? [], (r, o) => (t(), n("details", {
              key: o,
              class: "group"
            }, [
              s("summary", g0, [
                R(p(r.question) + " ", 1),
                a[0] || (a[0] = s("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              s("p", h0, p(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), x0 = { class: "flex flex-col gap-10" }, y0 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, k0 = { class: "text-sm font-semibold" }, $0 = { class: "text-sm text-pretty text-muted-foreground" }, w0 = /* @__PURE__ */ P({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, null, {
      default: L(() => [
        s("div", x0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("ul", y0, [
            (t(!0), n(z, null, D(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              s("h3", k0, p(r.title), 1),
              s("p", $0, p(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), C0 = { class: "flex flex-col items-center gap-6 text-center" }, _0 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, S0 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, M0 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, B0 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, P0 = ["href"], z0 = ["href"], A0 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, j0 = /* @__PURE__ */ P({
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
        s("div", C0, [
          e.eyebrow ? (t(), n("p", _0, p(e.eyebrow), 1)) : _("", !0),
          s("h1", S0, p(e.title), 1),
          e.body ? (t(), n("p", M0, p(e.body), 1)) : _("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", B0, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, p(e.secondaryLabel), 9, P0)) : _("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, p(e.primaryLabel), 9, z0)) : _("", !0)
          ])) : _("", !0),
          e.note ? (t(), n("p", A0, p(e.note), 1)) : _("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), O0 = { class: "flex flex-col items-center gap-6" }, L0 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, V0 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, D0 = /* @__PURE__ */ P({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, { muted: "" }, {
      default: L(() => [
        s("div", O0, [
          e.title ? (t(), n("p", L0, p(e.title), 1)) : _("", !0),
          s("ul", V0, [
            (t(!0), n(z, null, D(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, p(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), T0 = { class: "flex flex-col gap-10" }, F0 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, E0 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, I0 = ["aria-pressed"], N0 = ["aria-pressed"], R0 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, U0 = { class: "grid gap-4 md:grid-cols-3" }, H0 = { class: "flex flex-col gap-1" }, q0 = { class: "text-sm font-semibold" }, K0 = { class: "flex items-baseline gap-1" }, G0 = { class: "text-3xl font-semibold tracking-tight" }, W0 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, Z0 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, J0 = { class: "flex flex-col gap-2 text-sm" }, Y0 = { class: "text-muted-foreground" }, X0 = ["href"], Q0 = /* @__PURE__ */ P({
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
        s("div", T0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", F0, [
            s("div", E0, [
              s("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, I0),
              s("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, N0)
            ]),
            e.annualNote ? (t(), n("p", R0, p(e.annualNote), 1)) : _("", !0)
          ])) : _("", !0),
          s("ul", U0, [
            (t(!0), n(z, null, D(e.items ?? [], (d, f) => (t(), n("li", {
              key: f,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              s("div", H0, [
                s("h3", q0, p(d.name), 1),
                s("p", K0, [
                  s("span", G0, p(o(d)), 1),
                  d.period ? (t(), n("span", W0, p(d.period), 1)) : _("", !0)
                ]),
                d.body ? (t(), n("p", Z0, p(d.body), 1)) : _("", !0)
              ]),
              s("ul", J0, [
                (t(!0), n(z, null, D(d.features ?? [], (k, m) => (t(), n("li", {
                  key: m,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = s("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  s("span", Y0, p(k.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, p(d.label), 11, X0)) : _("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function e2() {
  const e = G(null);
  let l = null, a = null, r = !1, o = !1;
  function i() {
    if (r = !1, !l || !o)
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
        o = f.some((k) => k.isIntersecting), o && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), me(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const t2 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, a2 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, n2 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, l2 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, s2 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, o2 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, r2 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, i2 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, u2 = { class: "ml-3 truncate text-xs text-muted-foreground" }, d2 = { class: "flex" }, c2 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, f2 = { class: "min-w-0 flex-1 p-4" }, m2 = { class: "flex flex-col divide-y rounded-md border" }, p2 = /* @__PURE__ */ P({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = e2();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      s("div", t2, [
        s("div", a2, [
          s("div", n2, [
            s("h2", l2, p(e.title), 1),
            e.body ? (t(), n("p", s2, p(e.body), 1)) : _("", !0)
          ]),
          s("div", o2, [
            s("div", r2, [
              s("div", i2, [
                r[0] || (r[0] = s("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = s("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = s("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                s("span", u2, p(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              s("div", d2, [
                s("div", c2, [
                  (t(), n(z, null, D(6, (o) => s("span", {
                    key: o,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: Q({ width: `${55 + o * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                s("div", f2, [
                  r[4] || (r[4] = s("div", { class: "mb-3 flex gap-2" }, [
                    s("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    s("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    s("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  s("div", m2, [
                    (t(!0), n(z, null, D(e.rows, (o) => (t(), n("div", {
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
}), v2 = /* @__PURE__ */ P({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = ca(), o = G(0);
    return re(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        o.value = l.to;
        return;
      }
      const d = performance.now(), f = (k) => {
        const m = Math.min((k - d) / l.duration, 1);
        o.value = l.to * (1 - Math.pow(1 - m, 3)), m < 1 ? requestAnimationFrame(f) : o.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, p(e.prefix ?? "") + p(o.value.toFixed(e.decimals)) + p(e.suffix ?? ""), 513));
  }
}), g2 = { class: "flex flex-col gap-10" }, h2 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, b2 = { class: "order-2 text-sm text-muted-foreground" }, x2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, y2 = /* @__PURE__ */ P({
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
        s("div", g2, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("dl", h2, [
            (t(!0), n(z, null, D(e.items ?? [], (o, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              s("dt", b2, p(o.label), 1),
              s("dd", x2, [
                l(o.value) ? (t(), F(v2, {
                  key: 0,
                  to: l(o.value).number,
                  prefix: l(o.value).prefix,
                  suffix: l(o.value).suffix,
                  decimals: l(o.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
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
}), k2 = { class: "flex flex-col gap-10" }, $2 = { class: "grid gap-6 md:grid-cols-3" }, w2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, C2 = { class: "text-sm font-semibold" }, _2 = { class: "text-sm text-pretty text-muted-foreground" }, S2 = /* @__PURE__ */ P({
  __name: "PkSteps",
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
          s("ol", $2, [
            (t(!0), n(z, null, D(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-2"
            }, [
              s("span", w2, p(o + 1), 1),
              s("h3", C2, p(r.title), 1),
              s("p", _2, p(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), M2 = { class: "flex flex-col gap-10" }, B2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, P2 = { class: "text-pretty text-sm leading-relaxed" }, z2 = { class: "mt-auto flex items-center gap-3" }, A2 = ["src"], j2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, O2 = { class: "min-w-0" }, L2 = { class: "block truncate text-sm font-medium" }, V2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, D2 = /* @__PURE__ */ P({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), F(ye, null, {
      default: L(() => [
        s("div", M2, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          s("ul", B2, [
            (t(!0), n(z, null, D(e.items ?? [], (r, o) => (t(), n("li", {
              key: o,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              s("blockquote", P2, " “" + p(r.quote) + "” ", 1),
              s("figcaption", z2, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, A2)) : (t(), n("span", j2, p((r.name ?? "?").slice(0, 1)), 1)),
                s("span", O2, [
                  s("span", L2, p(r.name), 1),
                  r.role ? (t(), n("span", V2, p(r.role), 1)) : _("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Lw = /* @__PURE__ */ P({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: j0,
      logos: D0,
      features: w0,
      bento: i0,
      showcase: p2,
      steps: S2,
      stats: y2,
      testimonials: D2,
      pricing: Q0,
      faq: b0,
      cta: m0
    }, o = $(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(z, null, D(o.value, (d) => (t(), F(Ae(d.component), ee({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), T2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Vw = /* @__PURE__ */ P({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", T2, [
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
}), F2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Dw = /* @__PURE__ */ P({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", F2, [...a[0] || (a[0] = [
      pt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), E2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Tw = /* @__PURE__ */ P({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", E2, [...a[0] || (a[0] = [
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
Zy();
const Fw = "0.0.1";
export {
  lw as AdminDirectory,
  Io as Alert,
  No as AlertDescription,
  Ro as AlertTitle,
  N$ as AppPageFooter,
  ik as AppearanceDrawer,
  a$ as Avatar,
  n$ as AvatarFallback,
  l$ as AvatarImage,
  $t as BADGE_VARIANTS,
  lk as BadgeResolver,
  Y$ as BarChart,
  s$ as Breadcrumb,
  o$ as BreadcrumbEllipsis,
  r$ as BreadcrumbItem,
  i$ as BreadcrumbLink,
  u$ as BreadcrumbList,
  d$ as BreadcrumbPage,
  c$ as BreadcrumbSeparator,
  W2 as BulkActions,
  z$ as Card,
  A$ as CardAction,
  j$ as CardContent,
  O$ as CardDescription,
  L$ as CardFooter,
  V$ as CardHeader,
  D$ as CardTitle,
  Gh as CartPanel,
  mw as CatalogBrowser,
  bv as CatalogCard,
  da as CatalogFilterSheet,
  St as CatalogGrid,
  cw as CatalogInspect,
  D1 as CatalogItemDetail,
  fw as CatalogItemView,
  pw as CatalogRegister,
  dw as CatalogTill,
  Um as ChartCard,
  Ze as ChartTooltip,
  Sr as Checkbox,
  Q2 as CheckboxCell,
  ek as CodeCell,
  X2 as ColourCell,
  aw as ComboChart,
  gw as DASHBOARD_HIDDEN_STORAGE_KEY,
  hb as DASHBOARD_HIDE_KEY,
  hw as DashboardShortcuts,
  tl as DataTable,
  x$ as Dialog,
  y$ as DialogClose,
  k$ as DialogContent,
  $$ as DialogDescription,
  w$ as DialogFooter,
  C$ as DialogHeader,
  _r as DialogOverlay,
  _$ as DialogScrollContent,
  S$ as DialogTitle,
  M$ as DialogTrigger,
  lw as DirectoryPage,
  Rk as DropdownMenu,
  Uk as DropdownMenuCheckboxItem,
  Hk as DropdownMenuContent,
  qk as DropdownMenuGroup,
  Kk as DropdownMenuItem,
  Gk as DropdownMenuLabel,
  Nw as DropdownMenuPortal,
  Wk as DropdownMenuRadioGroup,
  Zk as DropdownMenuRadioItem,
  Jk as DropdownMenuSeparator,
  Yk as DropdownMenuShortcut,
  Xk as DropdownMenuSub,
  Qk as DropdownMenuSubContent,
  e$ as DropdownMenuSubTrigger,
  t$ as DropdownMenuTrigger,
  ak as EditableCell,
  qe as FormFieldControl,
  nw as HeatmapChart,
  at as ICON_PATHS,
  J2 as IconCell,
  Y2 as ImageCell,
  Pw as InfoNode,
  Wo as JPEG_IMAGE_ERROR,
  tk as KeyValueCell,
  B$ as Label,
  lf as LineChart,
  Mh as LineItems,
  Xe as MiniStatCard,
  f$ as NavigationMenu,
  m$ as NavigationMenuContent,
  p$ as NavigationMenuIndicator,
  v$ as NavigationMenuItem,
  g$ as NavigationMenuLink,
  h$ as NavigationMenuList,
  b$ as NavigationMenuTrigger,
  wr as NavigationMenuViewport,
  Go as OPAQUE_IMAGE_ERROR,
  zw as PaymentGatewaySettings,
  _y as PaymentGateways,
  X$ as PieChart,
  mk as PkAlertError,
  Vw as PkAuroraBackdrop,
  Re as PkBadge,
  i0 as PkBento,
  uk as PkBottomNav,
  T$ as PkBoundary,
  G$ as PkBuilder,
  ne as PkButton,
  F$ as PkCard,
  ed as PkCheckboxList,
  ia as PkCodeBox,
  Tu as PkCodeInput,
  xd as PkColourPicker,
  Tw as PkConsoleBackdrop,
  v2 as PkCountUp,
  m0 as PkCta,
  R$ as PkDeviceFrame,
  hc as PkDocument,
  He as PkDropdown,
  Dw as PkEditorialBackdrop,
  b0 as PkFaq,
  w0 as PkFeatureGrid,
  he as PkFieldLabel,
  sa as PkFileUpload,
  Ce as PkHeading,
  j0 as PkHero,
  Vi as PkKeyValue,
  Lw as PkLandingSections,
  D0 as PkLogoCloud,
  zu as PkMarkdownInput,
  it as PkModal,
  _t as PkMultiSelect,
  ck as PkOtpInput,
  _w as PkPasskeyRegister,
  pk as PkPasswordInput,
  Q0 as PkPricing,
  gh as PkQtyStepper,
  gs as PkQueryBuilder,
  Yu as PkRadioGroup,
  K$ as PkRepeater,
  Jy as PkReveal,
  qi as PkRichEditor,
  ye as PkSection,
  Oe as PkSectionHeading,
  p2 as PkShowcase,
  Y1 as PkSignaturePad,
  E$ as PkSiteHeader,
  De as PkSkeleton,
  Mt as PkSlideover,
  _d as PkSlider,
  dk as PkSpinner,
  y2 as PkStats,
  pe as PkStatusBadge,
  Yr as PkStepIndicator,
  S2 as PkSteps,
  Id as PkSwatchPreview,
  rd as PkTagsInput,
  D2 as PkTestimonials,
  fe as PkTextInput,
  n0 as PkTiltCard,
  Fd as PkVisualSelect,
  qv as PlanCard,
  uw as PlanEditor,
  iw as PlanGrid,
  tw as PolarAreaChart,
  ew as RadarChart,
  sk as RecordActions,
  Sw as RecordForm,
  Z2 as RelationPanel,
  Zp as STATUS_TONES,
  Q$ as ScatterChart,
  Qx as SchemaNode,
  ow as SegmentedBar,
  yw as SelectionBar,
  na as Separator,
  xw as SetupChecklist,
  ta as ShadcnInput,
  er as Sheet,
  gk as SheetClose,
  ar as SheetContent,
  nr as SheetDescription,
  hk as SheetFooter,
  lr as SheetHeader,
  sr as SheetTitle,
  bk as SheetTrigger,
  ip as ShortcutsWidget,
  xk as Sidebar,
  yk as SidebarContent,
  kk as SidebarFooter,
  $k as SidebarGroup,
  wk as SidebarGroupAction,
  Ck as SidebarGroupContent,
  _k as SidebarGroupLabel,
  Sk as SidebarHeader,
  Mk as SidebarInput,
  Bk as SidebarInset,
  Pk as SidebarMenu,
  zk as SidebarMenuAction,
  Ak as SidebarMenuBadge,
  Ok as SidebarMenuButton,
  Lk as SidebarMenuItem,
  Vk as SidebarMenuSkeleton,
  Dk as SidebarMenuSub,
  Tk as SidebarMenuSubButton,
  Fk as SidebarMenuSubItem,
  Ek as SidebarProvider,
  Ik as SidebarRail,
  Nk as SidebarSeparator,
  br as SidebarTrigger,
  vw as SignatureStudio,
  tt as Sparkline,
  P$ as Spinner,
  sw as StatCard,
  rw as StatListChart,
  bw as StatStrip,
  Ve as Switch,
  aa as TRANSPARENT_IMAGE_HELP,
  kw as TablePagination,
  $w as TableShell,
  ww as TableTabs,
  Cw as TableToolbar,
  J$ as ThemeToggle,
  vr as Tooltip,
  gr as TooltipContent,
  jk as TooltipProvider,
  hr as TooltipTrigger,
  ua as TrendBadge,
  Mw as UnsavedBar,
  Uo as alertVariants,
  Js as appearanceVars,
  ft as applyAppearance,
  Qo as assertTransparentImage,
  Yt as buttonClasses,
  Qe as catalogFiltersActive,
  J as cn,
  xv as cycleLabel,
  _e as emptyCatalogFilters,
  Xr as fieldControl,
  Qg as findExactSku,
  yv as formatPerkValue,
  _s as hasBadgeValue,
  U$ as hasFieldControl,
  W$ as hasOptionPreview,
  se as iconPath,
  Yo as imageHasTransparency,
  ok as initializeAppearance,
  ct as isDark,
  Bt as matchCatalogItem,
  Cr as navigationMenuTriggerStyle,
  Sd as optionPreview,
  vk as packWidgetColumns,
  kv as perkGranted,
  Ct as readAppearance,
  Zy as registerBuiltInFieldControls,
  ke as registerFieldControl,
  st as registerOptionPreview,
  H$ as registeredFieldTypes,
  Md as registeredOptionPreviews,
  q$ as resetFieldControls,
  Z$ as resetOptionPreviews,
  rk as setAppearancePersister,
  xr as sidebarMenuButtonVariants,
  Qp as statusBadgeVariant,
  Xp as statusTone,
  fk as toUrl,
  ea as useAppearance,
  Aw as useColumnVisibility,
  jw as useLiveUpdates,
  t0 as usePointer,
  ca as useReveal,
  nk as useSchemaColumns,
  e2 as useScrollProgress,
  I$ as useShellPageFooter,
  et as useSidebar,
  Ow as useTenantTheme,
  Bw as useUnsavedChanges,
  Fw as version
};
//# sourceMappingURL=index.js.map
