import './ui.css';
import { defineComponent as A, ref as q, watch as ce, useId as ka, computed as k, openBlock as t, createElementBlock as n, normalizeClass as O, createElementVNode as o, createCommentVNode as $, withModifiers as me, unref as y, Fragment as z, renderList as L, createTextVNode as N, toDisplayString as c, createStaticVNode as $t, renderSlot as K, nextTick as Be, onBeforeUnmount as he, createBlock as V, Teleport as Ne, createVNode as I, Transition as je, withCtx as j, onMounted as pe, normalizeStyle as ne, resolveDynamicComponent as xe, mergeProps as oe, withDirectives as fe, vModelText as ke, normalizeProps as $e, guardReactiveProps as Ae, defineAsyncComponent as Tt, inject as tt, resolveComponent as wt, vShow as Le, vModelSelect as De, vModelDynamic as $a, isRef as wa, useTemplateRef as Ca, onErrorCaptured as Sa, provide as gt, useSlots as Ma, markRaw as Gt, withKeys as Ba, reactive as Ge, useModel as Ze, mergeModels as ze, createSlots as _a, shallowRef as Pa, watchEffect as za } from "vue";
import { Check as Wt, AlertCircle as Aa, EyeOff as Oa, Eye as ja, X as Ct, PanelLeftOpen as La, PanelLeftClose as Va, Circle as Da, ChevronRight as Zt, MoreHorizontal as Ta, ChevronDown as Ea, Loader2Icon as Ia } from "@lucide/vue";
import { reactiveOmit as ie, useVModel as Jt, useMediaQuery as Fa, useEventListener as Na, defaultDocument as Ra } from "@vueuse/core";
import { useForwardPropsEmits as ve, CheckboxRoot as Ua, CheckboxIndicator as Ha, SwitchRoot as qa, SwitchThumb as Ka, DialogRoot as Yt, DialogClose as Re, DialogOverlay as St, DialogPortal as Mt, DialogContent as Bt, DialogDescription as Xt, DialogTitle as Qt, DialogTrigger as ea, createContext as Ga, Primitive as Ue, TooltipRoot as Wa, TooltipPortal as Za, TooltipContent as Ja, TooltipArrow as Ya, TooltipProvider as ta, TooltipTrigger as Xa, Separator as Qa, DropdownMenuRoot as en, DropdownMenuCheckboxItem as tn, DropdownMenuItemIndicator as aa, DropdownMenuPortal as an, DropdownMenuContent as nn, DropdownMenuGroup as ln, useForwardProps as we, DropdownMenuItem as on, DropdownMenuLabel as sn, DropdownMenuRadioGroup as rn, DropdownMenuRadioItem as un, DropdownMenuSeparator as dn, DropdownMenuSub as cn, DropdownMenuSubContent as fn, DropdownMenuSubTrigger as mn, DropdownMenuTrigger as pn, AvatarRoot as vn, AvatarFallback as gn, AvatarImage as hn, NavigationMenuViewport as bn, NavigationMenuRoot as xn, NavigationMenuContent as yn, NavigationMenuIndicator as kn, NavigationMenuItem as $n, NavigationMenuLink as wn, NavigationMenuList as Cn, NavigationMenuTrigger as Sn, Label as Mn } from "reka-ui";
import { DropdownMenuPortal as l5 } from "reka-ui";
import { clsx as Bn } from "clsx";
import { twMerge as _n } from "tailwind-merge";
import { cva as _t } from "class-variance-authority";
import { usePage as na, Link as Pn } from "@inertiajs/vue3";
const zn = { class: "w-full border-collapse text-sm" }, An = { class: "bg-background sticky top-0 z-10" }, On = { class: "bg-muted/50" }, jn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Ln = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Vn = ["id", "checked", "indeterminate"], Dn = ["onClick"], Tn = {
  key: 0,
  class: "text-xs"
}, En = {
  key: 1,
  class: "text-xs opacity-40"
}, In = { key: 1 }, Fn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Nn = {
  key: 0,
  class: "bg-muted/40"
}, Rn = ["colspan"], Un = ["aria-expanded", "dusk", "onClick"], Hn = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, qn = {
  key: 1,
  dusk: "group-header"
}, Kn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Gn = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Wn = {
  key: 1,
  class: "px-3 py-2"
}, Zn = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Jn = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Yn = ["aria-label", "onClick"], Xn = { class: "text-xs" }, Qn = { key: 1 }, el = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, tl = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, al = { key: 0 }, nl = { class: "text-muted-foreground block text-[10px] font-medium" }, ll = { class: "font-semibold tabular-nums" }, ol = { key: 1 }, sl = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, rl = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, il = { class: "font-medium" }, ul = {
  key: 0,
  class: "text-sm"
}, dl = /* @__PURE__ */ A({
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
    summaries: { default: null },
    summaryValues: { default: null },
    framed: { type: Boolean, default: !0 }
  },
  emits: ["sort", "toggle-row", "toggle-page", "reorder", "row-contextmenu", "row-click"],
  setup(e, { emit: l }) {
    const a = e;
    function r(E) {
      if (!E || !a.groupBy)
        return "";
      if (E.__group !== void 0 && E.__group !== null)
        return String(E.__group);
      const D = E[a.groupBy.key];
      return D == null || D === "" ? "" : String(D);
    }
    function s(E) {
      return a.groupBy ? E === 0 ? !0 : r(a.rows[E]) !== r(a.rows[E - 1]) : !1;
    }
    function i(E) {
      if (E.__groupTitle)
        return String(E.__groupTitle);
      const D = a.groupBy ? E[a.groupBy.key] : null, Y = D == null || D === "" ? "None" : String(D);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? Y : `${a.groupBy.label}: ${Y}`;
    }
    const u = q(/* @__PURE__ */ new Set()), d = q(/* @__PURE__ */ new Set());
    function p(E) {
      return a.groupBy?.collapsible ? u.value.has(E) : !1;
    }
    function h(E) {
      if (!a.groupBy?.collapsible)
        return;
      const D = new Set(d.value);
      D.add(E), d.value = D;
      const Y = new Set(u.value);
      Y.has(E) ? Y.delete(E) : Y.add(E), u.value = Y;
    }
    function m(E) {
      return a.groupBy?.collapsible ? !p(r(a.rows[E])) : !0;
    }
    ce(
      () => a.rows,
      (E) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const D = new Set(u.value);
        for (const Y of E) {
          const de = r(Y);
          de !== "" && !d.value.has(de) && D.add(de);
        }
        u.value = D;
      },
      { immediate: !0 }
    );
    const b = q(null), M = q(null);
    function w(E, D) {
      b.value = E, D.dataTransfer?.setData("text/plain", String(E)), D.dataTransfer && (D.dataTransfer.effectAllowed = "move");
    }
    function C() {
      b.value = null, M.value = null;
    }
    function x(E) {
      return b.value === null || M.value !== E ? "" : b.value > E ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function v(E, D) {
      b.value !== null && (D.preventDefault(), M.value = E);
    }
    function g(E) {
      const D = b.value;
      if (b.value = null, M.value = null, D === null || D === E)
        return;
      const Y = a.rows.map((re) => re[a.rowKey]), [de] = Y.splice(D, 1);
      Y.splice(E, 0, de), f("reorder", Y);
    }
    const f = l;
    function S(E, D) {
      !a.rowClickable || a.reordering || D.button !== 0 || D.metaKey || D.ctrlKey || D.shiftKey || D.altKey || D.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || f("row-click", E);
    }
    const B = q(null), P = ka(), W = k(() => a.columns.filter((E) => !a.hidden?.has(E.key)));
    function F(E) {
      const D = E[a.rowKey];
      return D == null || D === "" ? null : D;
    }
    function ee(E) {
      const D = F(E);
      return D !== null && !!a.selected?.has(D);
    }
    const U = q(null);
    function Z(E) {
      return a.rows.findIndex((D) => {
        const Y = F(D);
        return Y !== null && Y === E;
      });
    }
    function J(E, D) {
      const Y = F(E);
      if (Y === null)
        return;
      const de = D.shiftKey, re = !!a.selected?.has(Y);
      if (de && U.value !== null && U.value !== Y) {
        const Qe = Z(U.value), it = Z(Y);
        if (Qe !== -1 && it !== -1) {
          const ba = Math.min(Qe, it), xa = Math.max(Qe, it), ya = !re;
          for (let et = ba; et <= xa; et++) {
            if (!m(et))
              continue;
            const ut = F(a.rows[et]);
            if (ut === null)
              continue;
            !!a.selected?.has(ut) !== ya && f("toggle-row", ut);
          }
          U.value = Y;
          return;
        }
      }
      f("toggle-row", Y), U.value = Y;
    }
    const te = k(
      () => a.rows.map((E) => F(E)).filter((E) => E !== null)
    ), R = k(
      () => te.value.length > 0 && te.value.every((E) => a.selected?.has(E))
    ), T = k(
      () => !R.value && te.value.some((E) => a.selected?.has(E))
    );
    function Q(E) {
      return E.sortKey ?? E.key;
    }
    function _(E) {
      return a.sort === Q(E);
    }
    async function G(E, D, Y) {
      try {
        await navigator.clipboard.writeText(String(Y)), B.value = `${E}-${D.key}`, setTimeout(() => B.value = null, 1200);
      } catch {
      }
    }
    const H = k(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function ae(E) {
      return a.summaries?.[E] ?? null;
    }
    function le(E) {
      const D = a.summaries?.[E], Y = a.summaryValues?.[E];
      if (!D)
        return "";
      if (Y == null)
        return "-";
      const de = D.divideBy ? Y / D.divideBy : Y, re = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: D.decimals,
        maximumFractionDigits: D.decimals
      }).format(de);
      return `${D.prefix ?? ""}${re}${D.suffix ?? ""}`;
    }
    return (E, D) => (t(), n("div", {
      class: O(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", zn, [
        o("thead", An, [
          o("tr", On, [
            e.reordering ? (t(), n("th", jn)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Ln, [
              o("input", {
                id: `${y(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: R.value,
                indeterminate: T.value,
                "aria-label": "Select all rows on this page",
                onClick: D[0] || (D[0] = me(() => {
                }, ["stop"])),
                onChange: D[1] || (D[1] = me((Y) => f("toggle-page", !R.value), ["stop"]))
              }, null, 40, Vn)
            ])) : $("", !0),
            (t(!0), n(z, null, L(W.value, (Y) => (t(), n("th", {
              key: Y.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              Y.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (de) => f("sort", Q(Y))
              }, [
                N(c(Y.label) + " ", 1),
                _(Y) ? (t(), n("span", Tn, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", En, "↕"))
              ], 8, Dn)) : (t(), n("span", In, c(Y.label), 1))
            ]))), 128)),
            E.$slots.actions ? (t(), n("th", Fn, [...D[2] || (D[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        o("tbody", {
          class: O(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, L(e.rows, (Y, de) => (t(), n(z, {
            key: F(Y) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), n("tr", Nn, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !p(r(Y)),
                  dusk: `group-header-${r(Y) || "none"}`,
                  onClick: (re) => h(r(Y))
                }, [
                  o("span", Hn, c(p(r(Y)) ? "▸" : "▾"), 1),
                  N(" " + c(i(Y)), 1)
                ], 8, Un)) : (t(), n("span", qn, c(i(Y)), 1))
              ], 8, Rn)
            ])) : $("", !0),
            m(de) ? (t(), n("tr", {
              key: 1,
              class: O(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                ee(Y) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                b.value === de ? "opacity-40" : "",
                x(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (re) => w(de, re),
              onDragover: (re) => v(de, re),
              onDrop: me((re) => g(de), ["prevent"]),
              onDragend: C,
              onContextmenu: (re) => f("row-contextmenu", Y, re),
              onClick: (re) => S(Y, re)
            }, [
              e.reordering ? (t(), n("td", Gn, [...D[3] || (D[3] = [
                $t('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-5f636bf6><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-5f636bf6><circle cx="9" cy="6" r="1.5" data-v-5f636bf6></circle><circle cx="15" cy="6" r="1.5" data-v-5f636bf6></circle><circle cx="9" cy="12" r="1.5" data-v-5f636bf6></circle><circle cx="15" cy="12" r="1.5" data-v-5f636bf6></circle><circle cx="9" cy="18" r="1.5" data-v-5f636bf6></circle><circle cx="15" cy="18" r="1.5" data-v-5f636bf6></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), n("td", Wn, [
                o("input", {
                  id: `${y(P)}-row-${F(Y) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: F(Y) ?? void 0,
                  checked: ee(Y),
                  disabled: F(Y) === null,
                  "aria-label": F(Y) === null ? "This row has no id and cannot be selected" : `Select row ${F(Y)}`,
                  onClick: me((re) => J(Y, re), ["stop"])
                }, null, 8, Zn)
              ])) : $("", !0),
              (t(!0), n(z, null, L(W.value, (re) => (t(), n("td", {
                key: re.key,
                class: O(["px-3 py-2 whitespace-nowrap", re.cellClass])
              }, [
                K(E.$slots, `cell:${re.key}`, {
                  row: Y,
                  value: Y[re.key],
                  column: re
                }, () => [
                  re.copyable ? (t(), n("span", Jn, [
                    N(c(Y[re.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${re.label.toLowerCase()}`,
                      onClick: (Qe) => G(String(Y[e.rowKey]), re, Y[re.key])
                    }, [
                      o("span", Xn, c(B.value === `${Y[e.rowKey]}-${re.key}` ? "✓" : "⧉"), 1)
                    ], 8, Yn)
                  ])) : (t(), n("span", Qn, c(Y[re.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              E.$slots.actions ? (t(), n("td", el, [
                K(E.$slots, "actions", { row: Y }, void 0, !0)
              ])) : $("", !0)
            ], 42, Kn)) : $("", !0)
          ], 64))), 128))
        ], 2),
        H.value ? (t(), n("tfoot", tl, [
          o("tr", null, [
            e.selectable ? (t(), n("td", al)) : $("", !0),
            (t(!0), n(z, null, L(e.columns, (Y) => (t(), n(z, {
              key: `s-${Y.key}`
            }, [
              e.hidden?.has(Y.key) ? $("", !0) : (t(), n("td", {
                key: 0,
                class: O(["px-3 py-2 align-top text-sm whitespace-nowrap", Y.cellClass])
              }, [
                ae(Y.key) ? (t(), n(z, { key: 0 }, [
                  o("span", nl, c(ae(Y.key).label), 1),
                  o("span", ll, c(le(Y.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            E.$slots.actions ? (t(), n("td", ol)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", sl, [
        D[4] || (D[4] = o("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        K(E.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", rl, [
        o("p", il, c(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", ul, c(e.emptyHint), 1)) : $("", !0)
      ])) : $("", !0)
    ], 2));
  }
}), Pt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, cl = /* @__PURE__ */ Pt(dl, [["__scopeId", "data-v-5f636bf6"]]), fl = ["aria-label"], ml = { class: "border-b px-5 py-4" }, pl = { class: "text-base font-semibold" }, vl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, gl = { class: "px-5 py-4" }, hl = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, We = /* @__PURE__ */ A({
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
    function p(m) {
      u.value && m.target === m.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function h(m) {
      if (!a.open)
        return;
      if (m.key === "Escape" && !a.busy) {
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
      const M = b[0], w = b[b.length - 1];
      m.shiftKey && document.activeElement === M ? (m.preventDefault(), w.focus()) : !m.shiftKey && document.activeElement === w && (m.preventDefault(), M.focus());
    }
    return ce(
      () => a.open,
      (m) => {
        m ? (i = document.activeElement, document.addEventListener("keydown", h), Be(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", h), i?.focus(), i = null);
      }
    ), he(() => document.removeEventListener("keydown", h)), (m, b) => (t(), V(Ne, { to: "body" }, [
      I(je, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: d,
            onPointerup: p
          }, [
            o("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
            }, [
              o("div", ml, [
                o("h2", pl, c(e.title), 1),
                e.description ? (t(), n("p", vl, c(e.description), 1)) : $("", !0)
              ]),
              o("div", gl, [
                K(m.$slots, "default")
              ]),
              o("div", hl, [
                K(m.$slots, "footer")
              ])
            ], 8, fl)
          ], 32)) : $("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), dt = {
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
function ue(e) {
  return e ? dt[e] ?? dt.dot : dt.dot;
}
const bl = 160, Ee = /* @__PURE__ */ A({
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
    let p = null;
    function h(S) {
      !a.dismissOnPanelClick || S.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function m() {
      p && (clearTimeout(p), p = null), !r.value && (r.value = !0, await Be(), x());
    }
    function b() {
      p = setTimeout(C, 180);
    }
    async function M() {
      d.value = null, r.value = !r.value, r.value && (await Be(), x());
    }
    async function w(S, B) {
      d.value = { x: S, y: B }, r.value = !0, await Be(), x();
    }
    function C() {
      r.value = !1, d.value = null;
    }
    function x() {
      const S = s.value, B = i.value;
      if (!S || !B)
        return;
      const P = B.getBoundingClientRect(), W = 8, F = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : S.getBoundingClientRect();
      let ee, U;
      if (a.placement === "bottom")
        ee = F.bottom + a.offset, ee + P.height > window.innerHeight - W && F.top - P.height - a.offset > W && (ee = F.top - P.height - a.offset), U = a.align === "end" && !d.value ? F.right - P.width : F.left;
      else {
        ee = F.top;
        const Z = a.placement === "right", J = F.right + a.offset + P.width < window.innerWidth - W, te = F.left - a.offset - P.width > W;
        U = (Z ? J || !te : !te && J) ? F.right + a.offset : F.left - a.offset - P.width;
      }
      U = Math.min(Math.max(W, U), window.innerWidth - P.width - W), ee = Math.min(Math.max(W, ee), window.innerHeight - P.height - W), u.value = { top: ee, left: U, minWidth: Math.max(F.width, bl) };
    }
    function v(S) {
      if (!r.value)
        return;
      const B = S.target;
      s.value?.contains(B) || i.value?.contains(B) || (B instanceof Element ? B : B.parentElement)?.closest("[data-pk-overlay]") || C();
    }
    function g(S) {
      S.key === "Escape" && r.value && (S.stopPropagation(), C());
    }
    function f() {
      if (r.value) {
        if (d.value) {
          C();
          return;
        }
        x();
      }
    }
    return pe(() => {
      document.addEventListener("pointerdown", v), document.addEventListener("keydown", g), window.addEventListener("scroll", f, !0), window.addEventListener("resize", f);
    }), he(() => {
      p && clearTimeout(p), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", g), window.removeEventListener("scroll", f, !0), window.removeEventListener("resize", f);
    }), l({ close: C, openAt: w }), (S, B) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: B[2] || (B[2] = (P) => e.hoverable && m()),
      onPointerleave: B[3] || (B[3] = (P) => e.hoverable && b())
    }, [
      o("div", { onClick: M }, [
        K(S.$slots, "trigger", { open: r.value })
      ]),
      (t(), V(Ne, { to: "body" }, [
        I(je, {
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
              class: O([
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
              onPointerenter: B[0] || (B[0] = (P) => e.hoverable && m()),
              onPointerleave: B[1] || (B[1] = (P) => e.hoverable && b()),
              onClick: h
            }, [
              K(S.$slots, "panel", { close: C })
            ], 38)) : $("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), xl = ["disabled"], yl = { class: "py-0.5" }, kl = ["disabled", "onClick"], $l = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wl = ["d"], Cl = ["disabled"], Sl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ml = ["d"], Bl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, _l = ["disabled", "onClick"], Pl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zl = ["d"], Al = { class: "text-muted-foreground text-sm" }, Ol = { class: "text-foreground font-medium tabular-nums" }, jl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Ll = ["disabled"], Vl = { class: "text-muted-foreground text-sm" }, Dl = { class: "text-foreground font-medium tabular-nums" }, Tl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, El = ["disabled"], f$ = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(null), i = q(!1), u = k(() => a.allMatching ? a.total : a.count), d = k(() => u.value !== void 0), p = k(() => d.value && u.value === 0), h = k(() => a.actions.filter((g) => !g.destructive)), m = k(() => a.actions.filter((g) => g.destructive)), b = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function M(g) {
      return b[g.color ?? "gray"] ?? b.gray;
    }
    function w(g) {
      if (g.confirmation) {
        s.value = g;
        return;
      }
      r("run", g.key);
    }
    function C() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function x() {
      i.value = !1, r("export");
    }
    const v = (g) => new Intl.NumberFormat().format(g);
    return (g, f) => (t(), n(z, null, [
      I(Ee, null, {
        trigger: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...f[5] || (f[5] = [
            N(" Bulk actions ", -1),
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
          ])], 8, xl)
        ]),
        panel: j(() => [
          o("div", yl, [
            (t(!0), n(z, null, L(h.value, (S) => (t(), n("button", {
              key: S.key,
              type: "button",
              role: "menuitem",
              class: O(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(S)]),
              disabled: e.busy,
              onClick: (B) => w(S)
            }, [
              (t(), n("svg", $l, [
                o("path", {
                  d: y(ue)(S.icon)
                }, null, 8, wl)
              ])),
              N(" " + c(S.label), 1)
            ], 10, kl))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: f[0] || (f[0] = (S) => i.value = !0)
            }, [
              (t(), n("svg", Sl, [
                o("path", {
                  d: y(ue)("download")
                }, null, 8, Ml)
              ])),
              f[6] || (f[6] = N(" Export CSV ", -1))
            ], 8, Cl)) : $("", !0),
            m.value.length ? (t(), n("div", Bl, [
              (t(!0), n(z, null, L(m.value, (S) => (t(), n("button", {
                key: S.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (B) => w(S)
              }, [
                (t(), n("svg", Pl, [
                  o("path", {
                    d: y(ue)(S.icon ?? "trash")
                  }, null, 8, zl)
                ])),
                N(" " + c(S.label), 1)
              ], 8, _l))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      I(We, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: f[2] || (f[2] = (S) => s.value = null)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: f[1] || (f[1] = (S) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: O([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || p.value,
            onClick: C
          }, c(s.value?.label), 11, Ll)
        ]),
        default: j(() => [
          o("p", Al, [
            f[7] || (f[7] = N(" This will affect ", -1)),
            o("span", Ol, [
              d.value ? (t(), n(z, { key: 1 }, [
                N(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            f[8] || (f[8] = N(" . ", -1))
          ]),
          p.value ? (t(), n("p", jl, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      I(We, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: f[4] || (f[4] = (S) => i.value = !1)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: f[3] || (f[3] = (S) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || p.value,
            onClick: x
          }, " Export CSV ", 8, El)
        ]),
        default: j(() => [
          o("p", Vl, [
            f[9] || (f[9] = N(" This will export ", -1)),
            o("span", Dl, [
              d.value ? (t(), n(z, { key: 1 }, [
                N(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            f[10] || (f[10] = N(" . ", -1))
          ]),
          p.value ? (t(), n("p", Tl, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Il = { class: "bg-card overflow-hidden rounded-lg border" }, Fl = { class: "pk-scroll w-full overflow-x-auto" }, Nl = { class: "w-full border-collapse text-sm" }, Rl = { class: "bg-muted/40" }, Ul = { class: "divide-y" }, Hl = { key: 0 }, ql = ["colspan"], Kl = { key: 1 }, Gl = ["colspan"], Wl = ["href"], Zl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Jl = ["disabled"], Yl = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, Xl = ["href"], m$ = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(() => a.columns.filter((u) => u.type !== "image"));
    function i(u, d) {
      return d == null || d === "" ? "-" : u.type === "date" || u.type === "datetime" ? new Date(String(d)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...u.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof d == "number" ? new Intl.NumberFormat().format(d) : String(d);
    }
    return (u, d) => (t(), n("div", Il, [
      o("div", Fl, [
        o("table", Nl, [
          o("thead", Rl, [
            o("tr", null, [
              (t(!0), n(z, null, L(s.value, (p) => (t(), n("th", {
                key: p.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, c(p.label), 1))), 128))
            ])
          ]),
          o("tbody", Ul, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", Hl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, ql)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", Kl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, c(e.emptyText), 9, Gl)
            ])) : $("", !0),
            (t(!0), n(z, null, L(e.rows, (p, h) => (t(), n("tr", {
              key: p.id ?? h,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(z, null, L(s.value, (m) => (t(), n("td", {
                key: m.key,
                class: O(["px-3 py-2 whitespace-nowrap", [
                  m.mono ? "font-mono text-xs" : "",
                  m.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                K(u.$slots, `cell:${m.key}`, {
                  row: p,
                  value: p[m.key],
                  column: m
                }, () => [
                  e.recordBase && p.id != null && m === s.value[0] ? (t(), n("a", {
                    key: 0,
                    href: `${e.recordBase}/${p.id}`,
                    class: "text-foreground underline-offset-2 hover:underline"
                  }, c(i(m, p[m.key])), 9, Wl)) : (t(), n(z, { key: 1 }, [
                    N(c(i(m, p[m.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", Zl, [
        o("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (p) => r("load", e.nextCursor))
        }, c(e.loading ? "Loading…" : "Load more"), 9, Jl)
      ])) : e.capped ? (t(), n("p", Yl, [
        N(" Showing the first " + c(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), n("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, Xl)) : (t(), n(z, { key: 1 }, [
          N("Open the full list to search or filter the rest.")
        ], 64))
      ])) : $("", !0)
    ]));
  }
}), Ql = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", eo = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, to = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function qe(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Ql, eo[l], to[a], e.class].filter(Boolean).join(" ");
}
const se = /* @__PURE__ */ A({
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
    const l = e, a = k(
      () => qe({ variant: l.variant, size: l.size, class: l.class })
    ), r = k(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), V(xe(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: O(a.value)
    }, {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), ao = { class: "flex items-center gap-2 overflow-x-auto" }, no = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, lo = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, oo = { class: "flex flex-col" }, so = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, ro = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, io = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, uo = /* @__PURE__ */ A({
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
    function s(p) {
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
    function u(p) {
      return a.failedStep !== null ? p < a.failedStep : p < a.activeStep;
    }
    function d(p) {
      return a.failedStep === p;
    }
    return (p, h) => (t(), n("ol", ao, [
      (t(!0), n(z, null, L(e.steps, (m, b) => (t(), n("li", {
        key: b,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), V(xe(e.interactive ? "button" : "div"), oe({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(b)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: b > e.activeStep } : {}, {
          onClick: (M) => e.interactive && b <= e.activeStep && r("update:activeStep", b)
        }), {
          default: j(() => [
            o("span", {
              class: O(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(b)])
            }, [
              d(b) ? (t(), n("svg", no, [...h[0] || (h[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(b) ? (t(), n("svg", lo, [...h[1] || (h[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                N(c(b + 1), 1)
              ], 64))
            ], 2),
            o("span", oo, [
              o("span", null, c(m.label), 1),
              m.description ? (t(), n("span", so, c(m.description), 1)) : $("", !0)
            ]),
            e.hasError(b) ? (t(), n("span", ro)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        b < e.steps.length - 1 ? (t(), n("span", io)) : $("", !0)
      ]))), 128))
    ]));
  }
}), Je = /* @__PURE__ */ new Map();
function Se(e, l) {
  Je.set(e, l);
}
function co(e) {
  return Je.get(e);
}
function p$(e) {
  return Je.has(e);
}
function v$() {
  return [...Je.keys()].sort();
}
function g$() {
  Je.clear();
}
class fo extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function h$(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function mo(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function po(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const vo = ["aria-expanded"], go = ["aria-label", "onClick"], ho = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, bo = { class: "ml-auto flex shrink-0 items-center gap-1" }, xo = {
  key: 0,
  class: "border-b p-1"
}, yo = ["placeholder"], ko = { class: "max-h-60 overflow-y-auto p-1" }, $o = ["aria-selected", "onMouseenter", "onClick"], wo = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, zt = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(null), i = q(null), u = q(null), d = q(!1), p = q(""), h = q(0), m = q({ top: 0, left: 0, width: 0 }), b = k(
      () => a.modelValue.map(
        (U) => a.options.find((Z) => Z.value === U) ?? {
          value: U,
          label: String(U)
        }
      ).filter(Boolean)
    ), M = k(() => a.searchable ?? a.options.length > 6), w = k(() => {
      const U = new Set(a.modelValue), Z = p.value.trim().toLowerCase();
      return a.options.filter((J) => !U.has(J.value)).filter((J) => Z ? J.label.toLowerCase().includes(Z) : !0);
    }), C = k(() => a.max !== null && a.modelValue.length >= a.max);
    function x() {
      const U = s.value, Z = i.value;
      if (!U || !Z)
        return;
      const J = U.getBoundingClientRect(), te = Z.getBoundingClientRect(), R = 8;
      let T = J.bottom + 4;
      T + te.height > window.innerHeight - R && J.top - te.height - 4 > R && (T = J.top - te.height - 4), m.value = {
        top: T,
        left: Math.min(Math.max(R, J.left), window.innerWidth - J.width - R),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: J.width
      };
    }
    async function v() {
      a.disabled || d.value || (d.value = !0, p.value = "", h.value = 0, await Be(), x(), u.value?.focus());
    }
    function g() {
      d.value = !1, p.value = "";
    }
    function f() {
      d.value ? g() : v();
    }
    function S(U) {
      C.value || (r("update:modelValue", [...a.modelValue, U.value]), p.value = "", h.value = 0, Be(() => {
        x(), u.value?.focus();
      }));
    }
    function B(U) {
      r(
        "update:modelValue",
        a.modelValue.filter((Z) => Z !== U)
      ), Be(x);
    }
    function P() {
      r("update:modelValue", []), Be(x);
    }
    function W(U) {
      if (!a.disabled) {
        if (U.key === "Escape" && d.value) {
          U.stopPropagation(), g();
          return;
        }
        if (U.key === "Backspace" && p.value === "" && a.modelValue.length > 0) {
          B(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (U.key === "ArrowDown" || U.key === "Enter")) {
          U.preventDefault(), v();
          return;
        }
        if (d.value) {
          if (U.key === "ArrowDown")
            U.preventDefault(), h.value = Math.min(h.value + 1, w.value.length - 1);
          else if (U.key === "ArrowUp")
            U.preventDefault(), h.value = Math.max(h.value - 1, 0);
          else if (U.key === "Enter") {
            U.preventDefault();
            const Z = w.value[h.value];
            Z && S(Z);
          }
        }
      }
    }
    function F(U) {
      if (!d.value)
        return;
      const Z = U.target;
      s.value?.contains(Z) || i.value?.contains(Z) || g();
    }
    function ee() {
      d.value && x();
    }
    return ce(w, (U) => {
      h.value > U.length - 1 && (h.value = Math.max(0, U.length - 1));
    }), pe(() => {
      document.addEventListener("pointerdown", F), window.addEventListener("scroll", ee, !0), window.addEventListener("resize", ee);
    }), he(() => {
      document.removeEventListener("pointerdown", F), window.removeEventListener("scroll", ee, !0), window.removeEventListener("resize", ee);
    }), (U, Z) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: W
    }, [
      o("div", {
        class: O(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: f
      }, [
        (t(!0), n(z, null, L(b.value, (J) => (t(), n("span", {
          key: J.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          N(c(J.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${J.label}`,
            onClick: me((te) => B(J.value), ["stop"])
          }, [...Z[1] || (Z[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, go)
        ]))), 128)),
        b.value.length === 0 ? (t(), n("span", ho, c(e.placeholder), 1)) : $("", !0),
        o("span", bo, [
          b.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: me(P, ["stop"])
          }, " Clear ")) : $("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: O(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...Z[2] || (Z[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, vo),
      (t(), V(Ne, { to: "body" }, [
        I(je, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: j(() => [
            d.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: ne({
                top: `${m.value.top}px`,
                left: `${m.value.left}px`,
                width: `${m.value.width}px`
              }),
              role: "listbox"
            }, [
              M.value ? (t(), n("div", xo, [
                fe(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": Z[0] || (Z[0] = (J) => p.value = J),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: W
                }, null, 40, yo), [
                  [ke, p.value]
                ])
              ])) : $("", !0),
              o("div", ko, [
                (t(!0), n(z, null, L(w.value, (J, te) => (t(), n("button", {
                  key: J.value,
                  type: "button",
                  class: O(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", te === h.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": te === h.value,
                  onMouseenter: (R) => h.value = te,
                  onClick: (R) => S(J)
                }, c(J.label), 43, $o))), 128)),
                w.value.length === 0 ? (t(), n("p", wo, [
                  C.value ? (t(), n(z, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : p.value ? (t(), n(z, { key: 1 }, [
                    N("Nothing matches “" + c(p.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
                    N("Everything is selected.")
                  ], 64))
                ])) : $("", !0)
              ])
            ], 4)) : $("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
  }
}), Co = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, So = /* @__PURE__ */ A({
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
    ce(
      () => a.open,
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), V(We, {
      open: e.open,
      title: e.title,
      description: e.description,
      busy: e.processing,
      onClose: d[1] || (d[1] = (p) => r("close"))
    }, {
      footer: j(() => [
        I(se, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: d[0] || (d[0] = (p) => r("close"))
        }, {
          default: j(() => [...d[2] || (d[2] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            N(c(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: me(i, ["prevent"])
        }, [
          e.generalError ? (t(), n("p", Co, c(e.generalError), 1)) : $("", !0),
          (t(!0), n(z, null, L(e.fields, (p) => (t(), V(Ie, {
            key: p.key,
            field: p,
            value: s.value[p.key],
            error: e.errors[p.key],
            processing: e.processing,
            onChange: (h) => s.value[p.key] = h
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
});
function X(...e) {
  return _n(Bn(e));
}
function b$(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Mo = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(Ua), oe({ "data-slot": "checkbox" }, y(i), {
      class: y(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j((p) => [
        I(y(Ha), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            K(u.$slots, "default", $e(Ae(p)), () => [
              I(y(Wt), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Te = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ve(ie(a, "class"), r);
    return (i, u) => (t(), V(y(qa), oe({ "data-slot": "switch" }, y(s), {
      class: y(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j(() => [
        I(y(Ka), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Bo = ["accept", "disabled"], _o = { class: "text-sm font-medium" }, Po = { key: 0 }, zo = { key: 1 }, Ao = { class: "text-muted-foreground text-xs" }, Oo = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, jo = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Lo = ["src"], Vo = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Do = { class: "min-w-0 flex-1" }, To = { class: "block truncate text-sm font-medium" }, Eo = { class: "text-muted-foreground text-xs" }, Io = ["href"], Fo = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, la = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(null), i = q(!1), u = q(null), d = q(null), p = q(null), h = k(() => a.accept.map((S) => `.${S}`).join(",")), m = k(() => p.value ?? a.modelValue?.url ?? null), b = k(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(a.maxKilobytes * 1024)}`);
    function M(S) {
      if (!S)
        return "";
      const B = ["B", "KB", "MB", "GB"];
      let P = S, W = 0;
      for (; P >= 1024 && W < B.length - 1; )
        P /= 1024, W++;
      return `${P.toFixed(P < 10 && W > 0 ? 1 : 0)} ${B[W]}`;
    }
    function w(S) {
      return S.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(S) {
      return a.accept.length && !a.accept.includes(w(S.name)) ? `${w(S.name).toUpperCase() || "That"} files are not accepted here.` : S.size > a.maxKilobytes * 1024 ? `That file is ${M(S.size)}; the limit is ${M(a.maxKilobytes * 1024)}.` : null;
    }
    async function x(S) {
      const B = S?.[0];
      if (!(!B || a.disabled) && (d.value = C(B), !d.value)) {
        v(), a.image && B.type.startsWith("image/") && (p.value = URL.createObjectURL(B)), u.value = 0;
        try {
          const P = await a.upload(B, (W) => {
            u.value = W;
          });
          r("update:modelValue", P);
        } catch (P) {
          d.value = P instanceof Error ? P.message : "The upload failed.", v();
        } finally {
          u.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function v() {
      p.value && URL.revokeObjectURL(p.value), p.value = null;
    }
    async function g() {
      const S = a.modelValue;
      v(), d.value = null, r("update:modelValue", null), S && !S.url && a.discard && await a.discard(S.value).catch(() => {
      });
    }
    function f(S) {
      i.value = !1, x(S.dataTransfer?.files ?? null);
    }
    return (S, B) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", jo, [
        e.image && m.value ? (t(), n("img", {
          key: 0,
          src: m.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Lo)) : (t(), n("span", Vo, c(w(e.modelValue.name) || "file"), 1)),
        o("span", Do, [
          o("span", To, c(e.modelValue.name), 1),
          o("span", Eo, [
            N(c(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              B[4] || (B[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Io)
            ], 64)) : (t(), n(z, { key: 1 }, [
              N(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: g
        }, [...B[5] || (B[5] = [
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
        class: O(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: B[1] || (B[1] = me((P) => i.value = !0, ["prevent"])),
        onDragleave: B[2] || (B[2] = me((P) => i.value = !1, ["prevent"])),
        onDrop: me(f, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: h.value,
          disabled: e.disabled,
          onChange: B[0] || (B[0] = (P) => x(P.target.files))
        }, null, 40, Bo),
        B[3] || (B[3] = o("svg", {
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
        o("span", _o, [
          u.value === null ? (t(), n("span", Po, "Drop a file or click to choose")) : (t(), n("span", zo, "Uploading…"))
        ]),
        o("span", Ao, c(b.value), 1),
        u.value !== null ? (t(), n("span", Oo, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${u.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      d.value ? (t(), n("p", Fo, c(d.value), 1)) : $("", !0)
    ]));
  }
}), No = { class: "flex flex-col gap-2" }, Ro = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Uo = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Ho = { class: "flex flex-col gap-1" }, qo = ["onUpdate:modelValue", "disabled", "aria-label"], Ko = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Go = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Wo = ["onUpdate:modelValue", "disabled", "aria-label"], Zo = ["disabled", "aria-label", "onClick"], Jo = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Yo = { class: "flex items-center gap-3" }, Xo = ["disabled"], Qo = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, es = /* @__PURE__ */ A({
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
    function d(x) {
      return x ? Object.entries(x).map(([v, g]) => ({
        uid: i++,
        key: v,
        value: g ?? ""
      })) : [];
    }
    ce(
      () => a.modelValue,
      (x) => {
        JSON.stringify(x ?? null) !== JSON.stringify(p()) && (u.value = d(x));
      }
    );
    function p() {
      const x = {};
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && (x[g] = v.value);
      }
      return Object.keys(x).length ? x : null;
    }
    function h() {
      r("update:modelValue", p());
    }
    const m = k(() => {
      const x = /* @__PURE__ */ new Map();
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && x.set(g, (x.get(g) ?? 0) + 1);
      }
      return new Set([...x.entries()].filter(([, v]) => v > 1).map(([v]) => v));
    }), b = k(
      () => new Set(
        u.value.map((x) => x.key.trim()).filter((x) => x !== "" && !s.test(x))
      )
    ), M = k(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function w() {
      M.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function C(x) {
      u.value = u.value.filter((v) => v.uid !== x), h();
    }
    return (x, v) => (t(), n("div", No, [
      u.value.length ? (t(), n("div", Ro, [
        o("div", Uo, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          v[0] || (v[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, L(u.value, (g) => (t(), n("div", {
          key: g.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", Ho, [
            fe(o("input", {
              "onUpdate:modelValue": (f) => g.key = f,
              type: "text",
              class: O([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                m.value.has(g.key.trim()) || b.value.has(g.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: h
            }, null, 42, qo), [
              [ke, g.key]
            ]),
            b.value.has(g.key.trim()) ? (t(), n("p", Ko, " Letters, numbers, underscores and dashes only. ")) : m.value.has(g.key.trim()) ? (t(), n("p", Go, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          fe(o("input", {
            "onUpdate:modelValue": (f) => g.value = f,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: h
          }, null, 40, Wo), [
            [ke, g.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${g.key || "this entry"}`,
            onClick: (f) => C(g.uid)
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
          ])], 8, Zo)
        ]))), 128))
      ])) : (t(), n("p", Jo, " Nothing here yet. ")),
      o("div", Yo, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || M.value,
          onClick: w
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
          N(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, Xo),
        e.maxPairs !== null ? (t(), n("p", Qo, c(u.value.length) + " of " + c(e.maxPairs), 1)) : $("", !0)
      ])
    ]));
  }
}), ts = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, as = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, ns = ["disabled", "title", "aria-label", "onClick"], ls = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, os = ["d"], ss = ["disabled"], rs = ["contenteditable", "data-placeholder"], is = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, us = /* @__PURE__ */ A({
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
    ], d = k(() => u.filter((C) => a.toolbar.includes(C.id))), p = k(() => a.toolbar.includes("link")), h = q(0);
    function m() {
      const C = s.value?.innerHTML ?? "", x = (s.value?.innerText ?? "").trim();
      h.value = x.length;
      const v = x === "" ? null : C;
      i = v, r("update:modelValue", v);
    }
    function b(C) {
      a.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), m());
    }
    function M() {
      if (a.disabled)
        return;
      const C = window.prompt("Link address");
      C && (s.value?.focus(), document.execCommand("createLink", !1, C), m());
    }
    function w(C) {
      C.preventDefault();
      const x = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, x), m();
    }
    return pe(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", h.value = s.value.innerText.trim().length);
    }), ce(
      () => a.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", h.value = s.value.innerText.trim().length);
      }
    ), (C, x) => (t(), n("div", ts, [
      o("div", as, [
        (t(!0), n(z, null, L(d.value, (v) => (t(), n("button", {
          key: v.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: v.label,
          "aria-label": v.label,
          onMousedown: x[0] || (x[0] = me(() => {
          }, ["prevent"])),
          onClick: (g) => b(v)
        }, [
          (t(), n("svg", ls, [
            o("path", {
              d: v.path
            }, null, 8, os)
          ]))
        ], 40, ns))), 128)),
        p.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: x[1] || (x[1] = me(() => {
          }, ["prevent"])),
          onClick: M
        }, [...x[2] || (x[2] = [
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
        ])], 40, ss)) : $("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: O(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: m,
        onBlur: m,
        onPaste: w
      }, null, 42, rs),
      e.maxLength !== null ? (t(), n("div", is, c(h.value) + " / " + c(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), ds = /* @__PURE__ */ Pt(us, [["__scopeId", "data-v-32c63bc7"]]), cs = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, fs = { class: "flex items-center justify-between gap-2" }, ms = ["for"], ps = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, vs = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs"
}, gs = ["aria-label", "disabled"], hs = {
  key: 7,
  class: "flex flex-col gap-2"
}, bs = ["id", "value", "disabled"], xs = ["value"], ys = {
  key: 0,
  class: "relative"
}, ks = ["disabled"], $s = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, ws = { class: "max-h-56 overflow-y-auto p-1" }, Cs = ["onClick"], Ss = {
  key: 8,
  class: "relative"
}, Ms = ["disabled", "aria-invalid"], Bs = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, _s = { class: "max-h-56 overflow-y-auto p-1" }, Ps = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, zs = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, As = ["onClick"], Os = ["id", "value", "disabled", "aria-invalid"], js = ["value"], Ls = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Vs = { class: "text-muted-foreground" }, Ds = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ts = { class: "text-muted-foreground" }, Es = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Is = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Fs = ["aria-label", "disabled"], Ns = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Rs = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Us = ["aria-label", "disabled"], Hs = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], qs = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ks = ["aria-label", "disabled"], Gs = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ws = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Zs = ["aria-label", "disabled"], Js = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Ys = ["disabled", "aria-pressed", "onClick"], Xs = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Qs = ["title", "disabled", "onClick"], er = ["href"], tr = {
  key: 19,
  class: "text-destructive text-xs",
  role: "alert"
}, ar = {
  key: 20,
  class: "text-muted-foreground text-xs"
}, nr = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", lr = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Ie = /* @__PURE__ */ A({
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
    const a = Tt(() => import("./PkRepeater-J84jGe3T.js")), r = Tt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = q(!1), d = q(""), p = q([]), h = q(!1), m = q(null);
    let b;
    ce(d, (le) => {
      s.searchOptions && (clearTimeout(b), h.value = !0, b = setTimeout(async () => {
        try {
          p.value = await s.searchOptions(le);
        } catch {
        } finally {
          h.value = !1;
        }
      }, 200));
    });
    async function M() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, p.value.length === 0 && s.searchOptions)) {
        h.value = !0;
        try {
          p.value = await s.searchOptions("");
        } finally {
          h.value = !1;
        }
      }
    }
    function w(le) {
      m.value = le.label, i("change", le.value), u.value = !1, d.value = "";
    }
    function C() {
      m.value = null, i("change", null);
    }
    const x = tt("panelPicker", null), v = tt("panelCreateOption", null), g = q(!1), f = q(!1), S = q({}), B = q(null), P = k(() => mo(s.field)), W = k(() => po(s.field));
    function F() {
      S.value = {}, B.value = null, g.value = !0, u.value = !1;
    }
    function ee() {
      f.value || (g.value = !1, S.value = {}, B.value = null);
    }
    async function U(le) {
      if (v) {
        f.value = !0, S.value = {}, B.value = null;
        try {
          const E = await v.run(s.field.key, { ...le });
          w(E), g.value = !1;
        } catch (E) {
          E instanceof fo ? (S.value = E.fieldErrors, B.value = Object.keys(E.fieldErrors).length === 0 ? E.message : null) : B.value = E instanceof Error ? E.message : "Could not create that option.";
        } finally {
          f.value = !1;
        }
      }
    }
    const Z = k(() => {
      if (!s.field.tableSelect || !x?.base)
        return;
      const le = x.returnUrl || "/";
      return `${x.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
    }), J = k(() => s.field.morphTo ?? []), te = k(() => {
      const le = s.value;
      return le && typeof le == "object" && !Array.isArray(le) ? le : { type: void 0, id: void 0 };
    });
    function R(le) {
      i("change", { type: le || null, id: null });
    }
    function T(le) {
      i("change", { type: te.value.type ?? null, id: le });
    }
    function Q(le) {
      m.value = le.label, T(le.value), u.value = !1, d.value = "";
    }
    he(() => clearTimeout(b));
    const _ = k(() => co(s.field.type)), G = k(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function H(le) {
      if (le) {
        if (le.copy) {
          const E = s.value == null ? "" : String(s.value);
          E !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(E);
          return;
        }
        if (le.url && typeof window < "u") {
          window.open(le.url, "_blank", "noopener,noreferrer");
          return;
        }
        le.key && i("affix-action", le.key);
      }
    }
    function ae(le) {
      const E = document.getElementById(`f-${s.field.key}`);
      if (!(E instanceof HTMLTextAreaElement) && !(E instanceof HTMLInputElement))
        return;
      const D = E.selectionStart ?? E.value.length, Y = E.selectionEnd ?? D;
      E.setRangeText(le, D, Y, "end"), E.dispatchEvent(new Event("input", { bubbles: !0 })), E.focus();
    }
    return (le, E) => (t(), n(z, null, [
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", cs, [
        o("div", fs, [
          o("label", {
            for: `f-${e.field.key}`,
            class: O(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
          }, [
            N(c(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", ps, "*")) : $("", !0)
          ], 10, ms),
          e.field.hint ? (t(), n("span", vs, [
            N(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: E[0] || (E[0] = (D) => H(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, gs)) : $("", !0)
          ])) : $("", !0)
        ]),
        _.value ? (t(), V(xe(_.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": E[1] || (E[1] = (D) => i("change", D))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), V(la, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": E[2] || (E[2] = (D) => i("change", D))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), V(y(a), {
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
          "onUpdate:modelValue": E[3] || (E[3] = (D) => i("change", D))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), V(y(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": E[4] || (E[4] = (D) => i("change", D))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), V(ds, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": E[5] || (E[5] = (D) => i("change", D))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), V(es, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": E[6] || (E[6] = (D) => i("change", D))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), V(zt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": E[7] || (E[7] = (D) => i("change", D))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : J.value.length ? (t(), n("div", hs, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: te.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            onChange: E[8] || (E[8] = (D) => R(D.target.value))
          }, [
            E[24] || (E[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, L(J.value, (D) => (t(), n("option", {
              key: D.value,
              value: D.value
            }, c(D.label), 9, xs))), 128))
          ], 40, bs),
          te.value.type && e.searchOptions ? (t(), n("div", ys, [
            o("button", {
              type: "button",
              class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              disabled: e.field.disabled || e.processing,
              onClick: M
            }, [
              o("span", {
                class: O(m.value || te.value.id ? "" : "text-muted-foreground")
              }, c(m.value ?? (te.value.id ? String(te.value.id) : "Search…")), 3)
            ], 8, ks),
            u.value ? (t(), n("div", $s, [
              fe(o("input", {
                "onUpdate:modelValue": E[9] || (E[9] = (D) => d.value = D),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ke, d.value]
              ]),
              o("div", ws, [
                (t(!0), n(z, null, L(p.value, (D) => (t(), n("button", {
                  key: String(D.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Y) => Q(D)
                }, c(D.label), 9, Cs))), 128))
              ])
            ])) : $("", !0),
            u.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: E[10] || (E[10] = (D) => u.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Ss, [
          o("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: M
          }, [
            o("span", {
              class: O(m.value || e.value ? "" : "text-muted-foreground")
            }, c(m.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: me(C, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 8, Ms),
          u.value ? (t(), n("div", Bs, [
            fe(o("input", {
              "onUpdate:modelValue": E[11] || (E[11] = (D) => d.value = D),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ke, d.value]
            ]),
            o("div", _s, [
              h.value ? (t(), n("p", Ps, " Searching… ")) : p.value.length === 0 ? (t(), n("p", zs, " No matches ")) : $("", !0),
              (t(!0), n(z, null, L(p.value, (D) => (t(), n("button", {
                key: String(D.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Y) => w(D)
              }, c(D.label), 9, As))), 128)),
              e.field.createOption && y(v) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: F
              }, [
                E[25] || (E[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + c(W.value), 1)
              ])) : $("", !0)
            ])
          ])) : $("", !0),
          u.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: E[12] || (E[12] = (D) => u.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: E[13] || (E[13] = (D) => i("change", D.target.value || null))
        }, [
          E[26] || (E[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, L(e.options, (D) => (t(), n("option", {
            key: String(D.value),
            value: D.value
          }, c(D.label), 9, js))), 128))
        ], 40, Os)) : e.field.type === "toggle" ? (t(), n("label", Ls, [
          I(y(Te), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": E[14] || (E[14] = (D) => i("change", D))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", Vs, c(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), n("label", Ds, [
          I(y(Mo), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": E[15] || (E[15] = (D) => i("change", D === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", Ts, c(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !G.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onInput: E[16] || (E[16] = (D) => i("change", D.target.value))
        }, null, 40, Es)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: O(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Is, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: E[17] || (E[17] = (D) => H(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Fs)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: E[18] || (E[18] = (D) => i("change", D.target.value))
          }, null, 40, Ns),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Rs, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: E[19] || (E[19] = (D) => H(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Us)) : $("", !0)
        ], 2)) : G.value ? (t(), n("div", {
          key: 15,
          class: O(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", qs, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: E[21] || (E[21] = (D) => H(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Ks)) : $("", !0),
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
            class: O(lr),
            onInput: E[22] || (E[22] = (D) => i("change", D.target.value))
          }, null, 40, Gs),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Ws, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: E[23] || (E[23] = (D) => H(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Zs)) : $("", !0)
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
          class: O(nr),
          onInput: E[20] || (E[20] = (D) => i("change", D.target.value))
        }, null, 40, Hs)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", Js, [
          (t(!0), n(z, null, L(e.field.presets, (D) => (t(), n("button", {
            key: D,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: O([
              "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == D ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == D
            ),
            onClick: (Y) => i("change", String(D))
          }, c(D), 11, Ys))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Xs, [
          (t(!0), n(z, null, L(e.field.chips, (D, Y) => (t(), n("button", {
            key: Y,
            type: "button",
            title: D,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (de) => ae(String(Y))
          }, c(Y), 9, Qs))), 128))
        ])) : $("", !0),
        Z.value ? (t(), n("a", {
          key: 18,
          href: Z.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, er)) : $("", !0),
        e.error ? (t(), n("p", tr, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", ar, c(e.field.help), 1)) : $("", !0)
      ])),
      e.field.createOption && y(v) ? (t(), V(So, {
        key: 2,
        open: g.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: f.value,
        errors: S.value,
        "general-error": B.value,
        onClose: ee,
        onSubmit: U
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : $("", !0)
    ], 64));
  }
}), or = { class: "text-sm font-semibold" }, sr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, rr = {
  key: 4,
  class: "flex flex-col gap-3"
}, ir = { class: "text-sm font-medium" }, ur = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, dr = {
  key: 0,
  class: "mb-1 font-medium"
}, cr = ["onClick"], fr = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, mr = { class: "flex items-center justify-between gap-3 border-t p-4" }, pr = ["disabled"], oa = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(!a.node.collapsed), i = q(0), u = q(0), d = k(
      () => (a.node.children ?? []).map((x) => ({
        label: x.label ?? "",
        description: x.description
      }))
    ), p = k(() => a.depth === 0), h = k(() => {
      const x = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, v = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        x[a.node.align ?? "start"] ?? "items-start",
        v[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), m = k(() => {
      const x = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return x[a.node.tone ?? "info"] ?? x.info;
    }), b = k(() => {
      const x = a.node.columns ?? 1;
      return x >= 3 ? "sm:grid-cols-3" : x === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function M(x) {
      const v = [], g = (f) => {
        f.component === "field" && f.key && v.push(f.key), f.children?.forEach(g);
      };
      return g(x), v.some((f) => a.errors[f]);
    }
    function w(x) {
      if (x.hidden)
        return !1;
      const v = x.visibleWhen;
      return v ? a.values[v.field] == v.value : !0;
    }
    function C(x) {
      if (a.upload)
        return (v, g) => a.upload(x, v, g);
    }
    return (x, v) => {
      const g = wt("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), V(Ie, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (f) => e.searchOptions(e.node.key, f) : void 0,
        upload: C(e.node.key),
        discard: e.discard,
        onChange: v[0] || (v[0] = (f) => r("change", e.node.key, f)),
        onAffixAction: v[1] || (v[1] = (f) => r("affix-action", e.node.key, f))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && w(e.node) ? (t(), n("section", {
        key: 1,
        class: O(p.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: O(["flex items-start justify-between gap-3", [
            p.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: v[2] || (v[2] = (f) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", or, c(e.node.label), 1),
            e.node.description ? (t(), n("p", sr, c(e.node.description), 1)) : $("", !0)
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: O(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...v[18] || (v[18] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : $("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: O(["grid grid-cols-1 gap-4", [b.value, p.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (f, S) => (t(), V(g, {
            key: S,
            node: f,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: O(f.span && f.span >= 2 ? "sm:col-span-2" : ""),
            onChange: v[3] || (v[3] = (B, P) => r("change", B, P)),
            onAffixAction: v[4] || (v[4] = (B, P) => r("affix-action", B, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: O(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (f, S) => (t(), V(g, {
          key: S,
          node: f,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: v[5] || (v[5] = (B, P) => r("change", B, P)),
          onAffixAction: v[6] || (v[6] = (B, P) => r("affix-action", B, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 3,
        class: O(["flex", h.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (f, S) => (t(), V(g, {
          key: S,
          node: f,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: v[7] || (v[7] = (B, P) => r("change", B, P)),
          onAffixAction: v[8] || (v[8] = (B, P) => r("affix-action", B, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", rr, [
        o("legend", ir, c(e.node.label), 1),
        e.node.description ? (t(), n("p", ur, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: O(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (f, S) => (t(), V(g, {
            key: S,
            node: f,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: v[9] || (v[9] = (B, P) => r("change", B, P)),
            onAffixAction: v[10] || (v[10] = (B, P) => r("affix-action", B, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 5,
        role: "note",
        class: O(["rounded-lg border px-4 py-3 text-sm", m.value])
      }, [
        e.node.title ? (t(), n("p", dr, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: O(p.value ? "bg-card rounded-lg border" : "")
      }, [
        o("div", {
          class: O(["bg-muted/30 flex gap-1 overflow-x-auto p-1", p.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (f, S) => (t(), n("button", {
            key: S,
            type: "button",
            class: O([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === S ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (B) => i.value = S
          }, [
            N(c(f.label) + " ", 1),
            M(f) ? (t(), n("span", fr)) : $("", !0)
          ], 10, cr))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (f, S) => fe((t(), n("div", {
          key: S,
          class: O(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(f.children ?? [], (B, P) => (t(), V(g, {
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
            onChange: v[11] || (v[11] = (W, F) => r("change", W, F)),
            onAffixAction: v[12] || (v[12] = (W, F) => r("affix-action", W, F))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Le, i.value === S]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: O(p.value ? "bg-card rounded-lg border" : "")
      }, [
        I(uo, {
          class: O(["p-4", p.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (f) => M((e.node.children ?? [])[f]),
          "onUpdate:activeStep": v[13] || (v[13] = (f) => u.value = f)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, L(e.node.children ?? [], (f, S) => fe((t(), n("div", {
          key: S,
          class: O(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(f.children ?? [], (B, P) => (t(), V(g, {
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
            onChange: v[14] || (v[14] = (W, F) => r("change", W, F)),
            onAffixAction: v[15] || (v[15] = (W, F) => r("affix-action", W, F))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Le, u.value === S]
        ])), 128)),
        o("div", mr, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: v[16] || (v[16] = (f) => u.value--)
          }, " Back ", 8, pr),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: v[17] || (v[17] = (f) => u.value++)
          }, " Next ")) : $("", !0)
        ])
      ], 2)) : $("", !0);
    };
  }
}), x$ = /* @__PURE__ */ A({
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
    ce(
      () => a.open,
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), V(We, {
      open: e.open,
      title: e.title,
      busy: e.processing,
      onClose: d[2] || (d[2] = (p) => r("close"))
    }, {
      footer: j(() => [
        I(se, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: d[1] || (d[1] = (p) => r("close"))
        }, {
          default: j(() => [...d[3] || (d[3] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            N(c(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: me(i, ["prevent"])
        }, [
          (t(!0), n(z, null, L(e.form?.nodes ?? [], (p, h) => (t(), V(oa, {
            key: h,
            node: p,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: d[0] || (d[0] = (m, b) => s.value[m] = b)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), vr = ["title"], gr = ["aria-label"], hr = ["d"], br = { class: "sr-only" }, xr = /* @__PURE__ */ A({
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
    }, s = k(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = k(() => l.icons[s.value] ?? l.defaultIcon), u = k(() => a[i.value] ?? a.dot), d = k(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), p = k(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (h, m) => (t(), n("span", {
      class: "inline-flex items-center",
      title: p.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: O(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": p.value
      }, [
        o("path", { d: u.value }, null, 8, hr)
      ], 10, gr)),
      o("span", br, c(p.value), 1)
    ], 8, vr));
  }
}), yr = ["src"], kr = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, $r = /* @__PURE__ */ A({
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
    ce(
      () => l.src,
      () => a.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = k(() => {
      const u = typeof l.src == "string" ? l.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = k(() => {
      const u = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), n("span", {
      class: O(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (p) => a.value = !0)
      }, null, 40, yr)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        N(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", kr, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
    ], 2));
  }
}), wr = {
  key: 0,
  class: "text-muted-foreground"
}, Cr = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Sr = {
  key: 0,
  class: "font-mono text-xs"
}, Mr = {
  key: 1,
  class: "sr-only"
}, Br = /* @__PURE__ */ A({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = k(() => {
      const s = (l.value ?? "").trim();
      return a.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), n("span", wr, "-")) : (t(), n("span", Cr, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Sr, c(r.value), 1)) : (t(), n("span", Mr, c(r.value), 1))
    ]));
  }
}), _r = { class: "inline-flex items-center" }, Pr = ["checked", "aria-label"], zr = { class: "sr-only" }, y$ = /* @__PURE__ */ A({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, a = k(() => {
      const s = l.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = k(
      () => a.value ? l.trueLabel ?? "Yes" : l.falseLabel ?? "No"
    );
    return (s, i) => (t(), n("span", _r, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Pr),
      o("span", zr, c(r.value), 1)
    ]));
  }
}), Ar = {
  key: 0,
  class: "text-muted-foreground"
}, Or = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, k$ = /* @__PURE__ */ A({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = k(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", Or, c(a.value), 1)) : (t(), n("span", Ar, "—"));
  }
}), jr = { class: "flex items-center gap-2" }, Lr = ["onUpdate:modelValue", "onChange"], Vr = ["value"], Dr = ["onUpdate:modelValue"], Tr = ["value"], Er = ["onUpdate:modelValue"], Ir = ["onUpdate:modelValue", "multiple"], Fr = ["value"], Nr = ["onUpdate:modelValue", "type"], Rr = ["aria-label", "onClick"], Ur = { class: "flex items-center gap-2" }, Hr = /* @__PURE__ */ A({
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
    ce(
      () => a.modelValue,
      (f) => {
        i.value = f ? structuredClone(f) : s();
      }
    );
    const u = (f) => "rules" in f, d = k(() => Object.keys(a.fields));
    function p(f) {
      const S = f ? a.fields[f]?.kind : void 0;
      return S ? a.operators[S] ?? [] : [];
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
    function m() {
      r("update:modelValue", i.value);
    }
    function b() {
      const f = d.value[0];
      i.value.rules.push({
        field: f,
        operator: p(f)[0],
        value: void 0
      }), m();
    }
    function M() {
      i.value.rules.push(s()), m();
    }
    function w(f) {
      i.value.rules.splice(f, 1), m();
    }
    function C(f) {
      f.operator = p(f.field)[0], f.value = void 0, m();
    }
    const x = k(() => a.depth + 1 < a.maxDepth);
    function v() {
      i.value = s(), m(), r("apply", null);
    }
    function g() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (f, S) => {
      const B = wt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: O(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", jr, [
          fe(o("select", {
            "onUpdate:modelValue": S[0] || (S[0] = (P) => i.value.logic = P),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: m
          }, [...S[1] || (S[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [De, i.value.logic]
          ]),
          S[2] || (S[2] = o("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, L(i.value.rules, (P, W) => (t(), n("div", {
          key: W,
          class: "flex items-start gap-2"
        }, [
          u(P) ? (t(), V(B, {
            key: 0,
            modelValue: i.value.rules[W],
            "onUpdate:modelValue": [(F) => i.value.rules[W] = F, m],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            fe(o("select", {
              "onUpdate:modelValue": (F) => P.field = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (F) => C(P)
            }, [
              (t(!0), n(z, null, L(d.value, (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(e.fields[F].label), 9, Vr))), 128))
            ], 40, Lr), [
              [De, P.field]
            ]),
            fe(o("select", {
              "onUpdate:modelValue": (F) => P.operator = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: m
            }, [
              (t(!0), n(z, null, L(p(P.field), (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(h[F] ?? F), 9, Tr))), 128))
            ], 40, Dr), [
              [De, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? fe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (F) => P.value = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [...S[3] || (S[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, Er)), [
              [De, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? fe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (F) => P.value = F,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, [
              (t(!0), n(z, null, L(e.fields[P.field].options, (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(F), 9, Fr))), 128))
            ], 40, Ir)), [
              [De, P.value]
            ]) : fe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (F) => P.value = F,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: m
            }, null, 40, Nr)), [
              [$a, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(P) ? "group" : "rule"}`,
            onClick: (F) => w(W)
          }, " × ", 8, Rr)
        ]))), 128)),
        o("div", Ur, [
          I(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: b
          }, {
            default: j(() => [...S[4] || (S[4] = [
              N("Add rule", -1)
            ])]),
            _: 1
          }),
          x.value ? (t(), V(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: j(() => [...S[5] || (S[5] = [
              N(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            S[8] || (S[8] = o("span", { class: "flex-1" }, null, -1)),
            I(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: j(() => [...S[6] || (S[6] = [
                N(" Clear ", -1)
              ])]),
              _: 1
            }),
            I(se, {
              type: "button",
              size: "sm",
              onClick: g
            }, {
              default: j(() => [...S[7] || (S[7] = [
                N(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : $("", !0)
        ])
      ], 2);
    };
  }
}), qr = {
  key: 0,
  class: "font-mono text-xs"
}, Kr = {
  key: 1,
  class: "text-muted-foreground"
}, Gr = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, $$ = /* @__PURE__ */ A({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = k(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", qr, c(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", Kr, "—")) : (t(), n("span", Gr, c(a.value.length) + " " + c(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Wr = ["aria-checked", "aria-label", "title", "disabled"], Zr = ["value", "disabled"], Jr = ["value"], w$ = /* @__PURE__ */ A({
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
    const a = e, r = l, s = k(() => a.value === !0 || a.value === 1 || a.value === "1"), i = k(() => a.busy || a.disabled), u = k(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function d() {
      i.value || r("change", !s.value);
    }
    function p(h) {
      const m = h.target.value;
      m !== String(a.value ?? "") && r("change", m);
    }
    return (h, m) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: O(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: me(d, ["stop"])
    }, [
      o("span", {
        class: O(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Wr)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: m[0] || (m[0] = me(() => {
      }, ["stop"])),
      onChange: p
    }, [
      (t(!0), n(z, null, L(e.options, (b, M) => (t(), n("option", {
        key: M,
        value: M
      }, c(b), 9, Jr))), 128))
    ], 40, Zr));
  }
}), Yr = ["data-variant"], Xr = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ke = /* @__PURE__ */ A({
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
    }, r = k(
      () => [Xr, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: O(r.value)
    }, [
      K(s.$slots, "default")
    ], 10, Yr));
  }
}), At = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Qr(e) {
  return e != null && e !== "";
}
function ei(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function C$(e) {
  const l = k(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: ei(s)
    }))
  ), a = k(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = a.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), p = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return At[p] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const ti = ["disabled", "aria-label", "aria-busy"], ai = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ni = ["d"], li = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, oi = ["disabled", "onClick"], si = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, ri = ["d"], ii = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, S$ = /* @__PURE__ */ A({
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
    const a = e, r = l, s = k(() => a.busy || a.disabled), i = k(() => String(a.value ?? "")), u = k(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function d(b) {
      return typeof b == "boolean" ? b ? "1" : "" : String(b ?? "");
    }
    function p(b) {
      const M = a.colors[d(b)] ?? a.defaultColor ?? "neutral";
      return At[M] ?? "outline";
    }
    function h(b) {
      return a.options[b] ?? b;
    }
    function m(b, M) {
      if (s.value || b === i.value) {
        M();
        return;
      }
      r("change", b), M();
    }
    return (b, M) => (t(), n("div", {
      onClick: M[0] || (M[0] = me(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), V(Ke, {
        key: 1,
        variant: p(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          N(c(h(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), V(Ee, {
        key: 0,
        align: "start"
      }, {
        trigger: j(() => [
          o("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            I(Ke, {
              variant: p(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                N(c(h(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", ai, [
              o("path", {
                d: y(ue)("chevron-down")
              }, null, 8, ni)
            ]))
          ], 8, ti)
        ]),
        panel: j(({ close: w }) => [
          o("div", li, c(u.value), 1),
          (t(!0), n(z, null, L(e.options, (C, x) => (t(), n("button", {
            key: x,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (v) => m(String(x), w)
          }, [
            I(Ke, {
              variant: p(x),
              class: "capitalize"
            }, {
              default: j(() => [
                N(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(x) === i.value ? (t(), n("svg", si, [
              o("path", {
                d: y(ue)("check")
              }, null, 8, ri)
            ])) : (t(), n("span", ii))
          ], 8, oi))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), ui = { class: "flex items-center justify-end" }, di = ["aria-label"], ci = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, fi = ["d"], mi = ["href"], pi = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vi = ["d"], gi = ["disabled", "onClick"], hi = ["d"], bi = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, xi = ["disabled", "onClick"], yi = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ki = ["d"], M$ = /* @__PURE__ */ A({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = q(null), u = q(null), d = k(() => r.groups.flatMap((v) => v.actions)), p = k(() => d.value.filter((v) => !v.destructive)), h = k(() => d.value.filter((v) => v.destructive)), m = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function b(v) {
      return m[v.color ?? "gray"] ?? m.gray;
    }
    const M = k(() => d.value.length === 0);
    function w(v) {
      s("run", v);
    }
    function C(v) {
      M.value || (v.preventDefault(), i.value?.openAt(v.clientX, v.clientY));
    }
    function x(v) {
      if (v.key !== "ArrowDown" && v.key !== "ArrowUp")
        return;
      const g = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (g.length === 0)
        return;
      v.preventDefault();
      const f = g.indexOf(document.activeElement), S = v.key === "ArrowDown" ? 1 : -1, B = (f + S + g.length) % g.length;
      g[B]?.focus();
    }
    return l({ openContextMenu: C }), (v, g) => (t(), n("div", ui, [
      M.value ? $("", !0) : (t(), V(Ee, {
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
            (t(), n("svg", ci, [
              o("path", {
                d: y(ue)("more-vertical")
              }, null, 8, fi)
            ]))
          ], 8, di)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: x
          }, [
            (t(!0), n(z, null, L(p.value, (f) => (t(), n(z, {
              key: f.key
            }, [
              f.link ? (t(), n("a", {
                key: 0,
                href: f.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: O(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", b(f)])
              }, [
                (t(), n("svg", pi, [
                  o("path", {
                    d: y(ue)(f.icon)
                  }, null, 8, vi)
                ])),
                N(" " + c(f.label), 1)
              ], 10, mi)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: O(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", b(f)]),
                disabled: e.busy === f.key,
                onClick: (S) => w(f)
              }, [
                (t(), n("svg", {
                  class: O(["size-4 shrink-0", e.busy === f.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: y(ue)(f.icon)
                  }, null, 8, hi)
                ], 2)),
                N(" " + c(f.label), 1)
              ], 10, gi))
            ], 64))), 128)),
            h.value.length ? (t(), n("div", bi, [
              (t(!0), n(z, null, L(h.value, (f) => (t(), n("button", {
                key: f.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === f.key,
                onClick: (S) => w(f)
              }, [
                (t(), n("svg", yi, [
                  o("path", {
                    d: y(ue)(f.icon ?? "trash")
                  }, null, 8, ki)
                ])),
                N(" " + c(f.label), 1)
              ], 8, xi))), 128))
            ])) : $("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), ht = {
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
}, bt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, at = 12, nt = 20, $i = [0, 0.25, 0.5, 0.75, 1], Ot = "alxtexhpanel.appearance", Me = {
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
}, Oe = q({ ...Me });
let Et = !1;
const wi = "alxtexhpanel.appearance.vars";
function xt(e) {
  return e.theme === "dark";
}
const It = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function Ci(e) {
  const l = ht[e.primary] ?? ht.slate, a = bt[e.surface] ?? bt.neutral, r = a.chroma, s = a.hue, u = xt(e) ? {
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
    "--pk-row-padding": It[e.density] ?? It.comfortable
  };
}
function jt() {
  if (typeof window > "u")
    return { ...Me };
  try {
    const e = localStorage.getItem(Ot);
    if (!e)
      return { ...Me };
    const l = { ...Me, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Me.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? Me.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < at || l.fontSize > nt) && (l.fontSize = Me.fontSize), l;
  } catch {
    return { ...Me };
  }
}
function B$(e) {
  const l = jt(), a = e ? { ...l, ...e } : l;
  if (Oe.value = a, yt(a), e)
    try {
      localStorage.setItem(Ot, JSON.stringify(a));
    } catch {
    }
}
let sa = null;
function _$(e) {
  sa = e;
}
let ra = {};
function Si(e) {
  if (ra = e, !(typeof document > "u") && !jt().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function yt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...Ci(e), ...e.primaryChosen ? {} : ra };
  l.classList.toggle("dark", xt(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      wi,
      JSON.stringify({ dark: xt(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function ia() {
  function e(r) {
    yt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Oe.value = { ...Oe.value, ...r, ...s };
    try {
      localStorage.setItem(Ot, JSON.stringify(Oe.value));
    } catch {
    }
    e(Oe.value), sa?.({ ...r, ...s });
  }
  function a() {
    l({ ...Me });
  }
  return pe(() => {
    Et || (Et = !0, Oe.value = jt(), yt(Oe.value));
  }), {
    appearance: k(() => Oe.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: ht,
    SURFACE_TINTS: bt,
    FONT_SIZE_MIN: at,
    FONT_SIZE_MAX: nt,
    RADIUS_OPTIONS: $i
  };
}
const Mi = { class: "flex items-center justify-between border-b px-4 py-3" }, Bi = { class: "flex items-center gap-2" }, _i = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Pi = { class: "flex flex-col gap-2" }, zi = { class: "grid grid-cols-8 gap-2" }, Ai = ["title", "aria-label", "aria-pressed", "onClick"], Oi = { class: "flex flex-col gap-2" }, ji = { class: "grid grid-cols-8 gap-2" }, Li = ["title", "aria-label", "aria-pressed", "onClick"], Vi = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Di = { class: "flex flex-col gap-2" }, Ti = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ei = ["aria-pressed", "aria-label", "onClick"], Ii = { class: "text-sm font-semibold" }, Fi = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ni = ["onClick"], Ri = { class: "flex flex-col gap-2" }, Ui = { class: "flex items-center justify-between" }, Hi = { class: "text-muted-foreground text-xs tabular-nums" }, qi = { class: "flex items-center gap-2" }, Ki = ["disabled"], Gi = ["min", "max", "value"], Wi = ["disabled"], P$ = /* @__PURE__ */ A({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = ia(), d = q(!1), p = k(() => l.value.sidebarSide === "right"), h = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], m = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], b = [
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
    function x(v, g) {
      return `oklch(0.72 ${g * 3} ${v})`;
    }
    return (v, g) => (t(), n(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: g[0] || (g[0] = (f) => d.value = !0)
      }, [...g[7] || (g[7] = [
        $t('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), V(Ne, { to: "body" }, [
        I(je, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: g[1] || (g[1] = (f) => d.value = !1)
            })) : $("", !0)
          ]),
          _: 1
        }),
        I(je, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": p.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": p.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: O(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", p.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", Mi, [
                g[9] || (g[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", Bi, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: g[2] || (g[2] = //@ts-ignore
                    (...f) => y(r) && y(r)(...f))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: g[3] || (g[3] = (f) => d.value = !1)
                  }, [...g[8] || (g[8] = [
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
              o("div", _i, [
                o("section", Pi, [
                  g[11] || (g[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", zi, [
                    (t(!0), n(z, null, L(y(s), (f, S) => (t(), n("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: f.value }),
                      title: f.label,
                      "aria-label": f.label,
                      "aria-pressed": y(l).primary === S,
                      onClick: (B) => y(a)({ primary: S })
                    }, [
                      y(l).primary === S ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ne({ color: f.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...g[10] || (g[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : $("", !0)
                    ], 12, Ai))), 128))
                  ])
                ]),
                o("section", Oi, [
                  g[13] || (g[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", ji, [
                    (t(!0), n(z, null, L(y(i), (f, S) => (t(), n("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: x(f.hue, f.chroma) }),
                      title: f.label,
                      "aria-label": f.label,
                      "aria-pressed": y(l).surface === S,
                      onClick: (B) => y(a)({ surface: S })
                    }, [
                      y(l).surface === S ? (t(), n("svg", Vi, [...g[12] || (g[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : $("", !0)
                    ], 12, Li))), 128))
                  ])
                ]),
                o("section", Di, [
                  g[14] || (g[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Ti, [
                    (t(!0), n(z, null, L(y(u), (f) => (t(), n("button", {
                      key: f,
                      type: "button",
                      class: O([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        y(l).radius === f ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": y(l).radius === f,
                      "aria-label": `${f}rem radius`,
                      onClick: (S) => y(a)({ radius: f })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(f, 0.5)}rem` })
                      }, null, 4),
                      N(" " + c(f), 1)
                    ], 10, Ei))), 128))
                  ])
                ]),
                (t(!0), n(z, null, L([
                  { label: "Color scheme", key: "theme", options: h },
                  { label: "Card style", key: "cardStyle", options: b },
                  { label: "Table density", key: "density", options: m },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: C }
                ], (f) => (t(), n("section", {
                  key: f.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", Ii, c(f.label), 1),
                  o("div", Fi, [
                    (t(!0), n(z, null, L(f.options, (S) => (t(), n("button", {
                      key: String(S.value),
                      type: "button",
                      class: O([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        y(l)[f.key] === S.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (B) => y(a)({ [f.key]: S.value })
                    }, c(S.label), 11, Ni))), 128))
                  ])
                ]))), 128)),
                o("section", Ri, [
                  o("div", Ui, [
                    g[15] || (g[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Hi, c(y(l).fontSize) + "px", 1)
                  ]),
                  o("div", qi, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: y(l).fontSize <= y(at),
                      "aria-label": "Decrease font size",
                      onClick: g[4] || (g[4] = (f) => y(a)({ fontSize: y(l).fontSize - 1 }))
                    }, " − ", 8, Ki),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: y(at),
                      max: y(nt),
                      value: y(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: g[5] || (g[5] = (f) => y(a)({
                        fontSize: Number(f.target.value)
                      }))
                    }, null, 40, Gi),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: y(l).fontSize >= y(nt),
                      "aria-label": "Increase font size",
                      onClick: g[6] || (g[6] = (f) => y(a)({ fontSize: y(l).fontSize + 1 }))
                    }, " + ", 8, Wi)
                  ])
                ])
              ])
            ], 2)) : $("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), Zi = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Ji = { class: "flex items-stretch" }, Yi = ["href", "aria-current"], Xi = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qi = ["d"], eu = { class: "w-full truncate text-center" }, tu = {
  key: 0,
  class: "flex-1"
}, au = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, nu = ["d"], lu = { class: "w-full truncate text-center" }, ct = 5, z$ = /* @__PURE__ */ A({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(
      () => a.items.length <= ct ? a.items : a.items.slice(0, ct - 1)
    ), i = k(() => a.items.length > ct);
    function u(d) {
      return d === "/" ? a.current === "/" : a.current === d || a.current.startsWith(`${d}/`);
    }
    return (d, p) => (t(), n("nav", Zi, [
      o("ul", Ji, [
        (t(!0), n(z, null, L(s.value, (h) => (t(), n("li", {
          key: h.key,
          class: "flex-1"
        }, [
          o("a", {
            href: h.href,
            class: O([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(h.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(h.href) ? "page" : void 0
          }, [
            (t(), n("svg", Xi, [
              o("path", {
                d: y(ue)(h.icon)
              }, null, 8, Qi)
            ])),
            o("span", eu, c(h.title), 1)
          ], 10, Yi)
        ]))), 128)),
        i.value ? (t(), n("li", tu, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: p[0] || (p[0] = (h) => r("more"))
          }, [
            (t(), n("svg", au, [
              o("path", {
                d: y(ue)("more-horizontal")
              }, null, 8, nu)
            ])),
            o("span", lu, c(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), ou = ["value"], su = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", ge = /* @__PURE__ */ A({
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
      class: O([su, a.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, ou));
  }
}), ru = ["for"], ye = /* @__PURE__ */ A({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, a) => (t(), n("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: O([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      K(l.$slots, "default")
    ], 10, ru));
  }
}), A$ = /* @__PURE__ */ A({
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
      class: O(["size-4 animate-spin", l.$props.class])
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
}), iu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, uu = ["id", "name", "value", "disabled", "maxlength"], du = ["data-active"], cu = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, O$ = /* @__PURE__ */ A({
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
    const u = k(
      () => Array.from({ length: a.length }, (h, m) => a.modelValue[m] ?? "")
    ), d = k(() => Math.min(a.modelValue.length, a.length - 1));
    function p(h) {
      const m = h.target.value;
      r("update:modelValue", m.replace(/\D/g, "").slice(0, a.length));
    }
    return (h, m) => (t(), n("div", iu, [
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
        onInput: p,
        onFocus: m[0] || (m[0] = (b) => s.value = !0),
        onBlur: m[1] || (m[1] = (b) => s.value = !1)
      }, null, 40, uu),
      (t(!0), n(z, null, L(u.value, (b, M) => (t(), n("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": s.value && M === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(c(b) + " ", 1),
        s.value && M === d.value && b === "" ? (t(), n("div", cu, [...m[2] || (m[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, du))), 128))
    ]));
  }
}), fu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, _e = /* @__PURE__ */ A({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (l, a) => (t(), n("header", {
      class: O(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: O(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), n("p", fu, c(e.description), 1)) : $("", !0)
    ], 2));
  }
}), mu = /* @__PURE__ */ A({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: O(y(X)(y(gu)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), pu = /* @__PURE__ */ A({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: O(y(X)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), vu = /* @__PURE__ */ A({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: O(y(X)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), gu = _t(
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
), hu = { class: "list-inside list-disc text-sm" }, j$ = /* @__PURE__ */ A({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = k(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), V(y(mu), { variant: "destructive" }, {
      default: j(() => [
        I(y(Aa), { class: "size-4" }),
        I(y(vu), null, {
          default: j(() => [
            N(c(e.title), 1)
          ]),
          _: 1
        }),
        I(y(pu), null, {
          default: j(() => [
            o("ul", hu, [
              (t(!0), n(z, null, L(a.value, (i, u) => (t(), n("li", { key: u }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ua = /* @__PURE__ */ A({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Jt(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => fe((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => wa(s) ? s.value = d : null),
      "data-slot": "input",
      class: O(
        y(X)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [ke, y(s)]
    ]);
  }
}), bu = { class: "relative" }, xu = ["aria-label"], L$ = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = q(!1), s = Ca("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), n("div", bu, [
      I(y(ua), oe({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: y(X)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: O(
          y(X)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), V(y(Oa), {
          key: 0,
          class: "size-4"
        })) : (t(), V(y(ja), {
          key: 1,
          class: "size-4"
        }))
      ], 10, xu)
    ]));
  }
});
function V$(e, l) {
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
    const u = Array.from({ length: a }, () => []);
    s.forEach((d, p) => {
      u[p % a].push(d);
    }), r.push({ type: "columns", columns: u }), s = [];
  };
  for (const u of e)
    (u.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: u })) : s.push(u);
  return i(), r;
}
const da = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", yu = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", ku = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function $u(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function wu(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Cu(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Su(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = s, r.height = i;
    const u = r.getContext("2d", { willReadFrequently: !0 });
    if (!u)
      return !1;
    u.drawImage(a, 0, 0);
    const { data: d } = u.getImageData(0, 0, s, i);
    for (let p = 3; p < d.length; p += 4)
      if ((d[p] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function Su(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Mu(e) {
  if ($u(e))
    throw new Error(ku);
  if (!wu(e))
    throw new Error(da);
  if (!await Cu(e))
    throw new Error(yu);
}
const Bu = /* @__PURE__ */ A({
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
    return (i, u) => (t(), V(y(Yt), oe({ "data-slot": "sheet" }, y(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(Ae(d)))
      ]),
      _: 3
    }, 16));
  }
}), D$ = /* @__PURE__ */ A({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Re), oe({ "data-slot": "sheet-close" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _u = /* @__PURE__ */ A({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y(St), oe({
      "data-slot": "sheet-overlay",
      class: y(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, y(a)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pu = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class", "side"), i = ve(s, r);
    return (u, d) => (t(), V(y(Mt), null, {
      default: j(() => [
        I(_u),
        I(y(Bt), oe({
          "data-slot": "sheet-content",
          class: y(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...y(i) }), {
          default: j(() => [
            K(u.$slots, "default"),
            I(y(Re), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                I(y(Ct), { class: "size-4" }),
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
}), zu = /* @__PURE__ */ A({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y(Xt), oe({
      "data-slot": "sheet-description",
      class: y(X)("text-muted-foreground text-sm", l.class)
    }, y(a)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), T$ = /* @__PURE__ */ A({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: O(y(X)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Au = /* @__PURE__ */ A({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: O(y(X)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Ou = /* @__PURE__ */ A({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y(Qt), oe({
      "data-slot": "sheet-title",
      class: y(X)("text-foreground font-semibold", l.class)
    }, y(a)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E$ = /* @__PURE__ */ A({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(ea), oe({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ft = "sidebar_state", ju = 3600 * 24 * 7, Lu = "16rem", Vu = "18rem", Du = "3rem", Tu = "b", [st, Eu] = Ga("Sidebar"), Iu = { class: "flex h-full w-full flex-col" }, Fu = ["data-state", "data-collapsible", "data-variant", "data-side"], Nu = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, I$ = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = st();
    return (u, d) => e.collapsible === "none" ? (t(), n("div", oe({
      key: 0,
      "data-slot": "sidebar",
      class: y(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      K(u.$slots, "default")
    ], 16)) : y(a) ? (t(), V(y(Bu), oe({
      key: 1,
      open: y(s)
    }, u.$attrs, { "onUpdate:open": y(i) }), {
      default: j(() => [
        I(y(Pu), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": y(Vu)
          })
        }, {
          default: j(() => [
            I(Au, { class: "sr-only" }, {
              default: j(() => [
                I(Ou, null, {
                  default: j(() => [...d[0] || (d[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(zu, null, {
                  default: j(() => [...d[1] || (d[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Iu, [
              K(u.$slots, "default")
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
      "data-state": y(r),
      "data-collapsible": y(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: O(
          y(X)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", oe({
        class: y(X)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        o("div", Nu, [
          K(u.$slots, "default")
        ])
      ], 16)
    ], 8, Fu));
  }
}), F$ = /* @__PURE__ */ A({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: O(
        y(X)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), N$ = /* @__PURE__ */ A({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: O(y(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), R$ = /* @__PURE__ */ A({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: O(y(X)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), U$ = /* @__PURE__ */ A({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Ue), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: O(
        y(X)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
}), H$ = /* @__PURE__ */ A({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: O(y(X)("w-full text-sm", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), q$ = /* @__PURE__ */ A({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Ue), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: O(
        y(X)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
}), K$ = /* @__PURE__ */ A({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: O(y(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), G$ = /* @__PURE__ */ A({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(ua), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: O(y(X)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), W$ = /* @__PURE__ */ A({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: O(
        y(X)(
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
}), Z$ = /* @__PURE__ */ A({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: O(y(X)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), J$ = /* @__PURE__ */ A({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Ue), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: O(
        y(X)(
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
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), Y$ = /* @__PURE__ */ A({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: O(
        y(X)(
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
}), Ru = /* @__PURE__ */ A({
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
    return (i, u) => (t(), V(y(Wa), oe({ "data-slot": "tooltip" }, y(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(Ae(d)))
      ]),
      _: 3
    }, 16));
  }
}), Uu = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(Za), null, {
      default: j(() => [
        I(y(Ja), oe({ "data-slot": "tooltip-content" }, { ...y(i), ...u.$attrs }, {
          class: y(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: j(() => [
            K(u.$slots, "default"),
            I(y(Ya), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), X$ = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(y(ta), $e(Ae(l)), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hu = /* @__PURE__ */ A({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Xa), oe({ "data-slot": "tooltip-trigger" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nt = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(y(Ue), oe({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: y(X)(y(Ku)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Q$ = /* @__PURE__ */ A({
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
    const l = e, { isMobile: a, state: r } = st(), s = ie(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), V(y(Ru), { key: 1 }, {
      default: j(() => [
        I(y(Hu), { "as-child": "" }, {
          default: j(() => [
            I(Nt, $e(Ae({ ...y(s), ...i.$attrs })), {
              default: j(() => [
                K(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(y(Uu), {
          side: "right",
          align: "center",
          hidden: y(r) !== "collapsed" || y(a)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              N(c(e.tooltip), 1)
            ], 64)) : (t(), V(xe(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), V(Nt, $e(oe({ key: 0 }, { ...y(s), ...i.$attrs })), {
      default: j(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ew = /* @__PURE__ */ A({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: O(y(X)("group/menu-item relative", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Rt = "animate-pulse rounded-md bg-primary/10", tw = /* @__PURE__ */ A({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = k(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), n("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: O(y(X)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: O(y(X)(Rt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: O(y(X)(Rt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), aw = /* @__PURE__ */ A({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: O(
        y(X)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), nw = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(y(Ue), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: O(
        y(X)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
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
}), lw = /* @__PURE__ */ A({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: O(y(X)("group/menu-sub-item relative", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), ow = /* @__PURE__ */ A({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ra?.cookie.includes(`${Ft}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = Fa("(max-width: 767px)"), i = q(!1), u = Jt(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(b) {
      u.value = b, document.cookie = `${Ft}=${u.value}; path=/; max-age=${ju}`;
    }
    function p(b) {
      i.value = b;
    }
    function h() {
      return s.value ? p(!i.value) : d(!u.value);
    }
    Na("keydown", (b) => {
      b.key === Tu && (b.metaKey || b.ctrlKey) && (b.preventDefault(), h());
    });
    const m = k(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return Eu({
      state: m,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: p,
      toggleSidebar: h
    }), (b, M) => (t(), V(y(ta), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", oe({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": y(Lu),
            "--sidebar-width-icon": y(Du)
          },
          class: y(X)(
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
}), sw = /* @__PURE__ */ A({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = st();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: O(
        y(X)(
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
      (...i) => y(a) && y(a)(...i))
    }, [
      K(r.$slots, "default")
    ], 2));
  }
}), qu = /* @__PURE__ */ A({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y(Qa), oe({ "data-slot": "separator" }, y(a), {
      class: y(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), rw = /* @__PURE__ */ A({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(qu), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: O(y(X)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), iw = /* @__PURE__ */ A({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = st();
    return (i, u) => (t(), V(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: O(y(X)("h-7 w-7", l.class)),
      onClick: y(s)
    }, {
      default: j(() => [
        y(a) || y(r) === "collapsed" ? (t(), V(y(La), { key: 0 })) : (t(), V(y(Va), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Ku = _t(
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
), uw = /* @__PURE__ */ A({
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
    return (i, u) => (t(), V(y(en), oe({ "data-slot": "dropdown-menu" }, y(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(Ae(d)))
      ]),
      _: 3
    }, 16));
  }
}), Gu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, dw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(tn), oe({ "data-slot": "dropdown-menu-checkbox-item" }, y(i), {
      class: y(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", Gu, [
          I(y(aa), null, {
            default: j(() => [
              K(u.$slots, "indicator-icon", {}, () => [
                I(y(Wt), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(an), null, {
      default: j(() => [
        I(y(nn), oe({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...y(i) }, {
          class: y(X)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: j(() => [
            K(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), fw = /* @__PURE__ */ A({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(ln), oe({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mw = /* @__PURE__ */ A({
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
    const l = e, a = ie(l, "inset", "variant", "class"), r = we(a);
    return (s, i) => (t(), V(y(on), oe({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, y(r), {
      class: y(X)(
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
}), pw = /* @__PURE__ */ A({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = ie(l, "class", "inset"), r = we(a);
    return (s, i) => (t(), V(y(sn), oe({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, y(r), {
      class: y(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), vw = /* @__PURE__ */ A({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = ve(e, l);
    return (i, u) => (t(), V(y(rn), oe({ "data-slot": "dropdown-menu-radio-group" }, y(s)), {
      default: j(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, gw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(un), oe({ "data-slot": "dropdown-menu-radio-item" }, y(i), {
      class: y(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", Wu, [
          I(y(aa), null, {
            default: j(() => [
              K(u.$slots, "indicator-icon", {}, () => [
                I(y(Da), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hw = /* @__PURE__ */ A({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y(dn), oe({ "data-slot": "dropdown-menu-separator" }, y(a), {
      class: y(X)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), bw = /* @__PURE__ */ A({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: O(y(X)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), xw = /* @__PURE__ */ A({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ve(e, l);
    return (i, u) => (t(), V(y(cn), oe({ "data-slot": "dropdown-menu-sub" }, y(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(Ae(d)))
      ]),
      _: 3
    }, 16));
  }
}), yw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(fn), oe({ "data-slot": "dropdown-menu-sub-content" }, y(i), {
      class: y(X)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: j(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kw = /* @__PURE__ */ A({
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
    const l = e, a = ie(l, "class", "inset"), r = we(a);
    return (s, i) => (t(), V(y(mn), oe({ "data-slot": "dropdown-menu-sub-trigger" }, y(r), {
      "data-inset": e.inset ? "" : void 0,
      class: y(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: j(() => [
        K(s.$slots, "default"),
        I(y(Zt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), $w = /* @__PURE__ */ A({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = we(e);
    return (r, s) => (t(), V(y(pn), oe({ "data-slot": "dropdown-menu-trigger" }, y(a)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ww = /* @__PURE__ */ A({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(vn), {
      "data-slot": "avatar",
      class: O(y(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Cw = /* @__PURE__ */ A({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y(gn), oe({ "data-slot": "avatar-fallback" }, y(a), {
      class: y(X)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sw = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(y(hn), oe({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mw = /* @__PURE__ */ A({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: O(l.class)
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Bw = /* @__PURE__ */ A({
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
      class: O(y(X)("flex size-9 items-center justify-center", l.class))
    }, [
      K(a.$slots, "default", {}, () => [
        I(y(Ta), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), _w = /* @__PURE__ */ A({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: O(y(X)("inline-flex items-center gap-1.5", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Pw = /* @__PURE__ */ A({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Ue), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: O(y(X)("hover:text-foreground transition-colors", l.class))
    }, {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), zw = /* @__PURE__ */ A({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: O(
        y(X)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Aw = /* @__PURE__ */ A({
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
      class: O(y(X)("text-foreground font-normal", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Ow = /* @__PURE__ */ A({
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
      class: O(y(X)("[&>svg]:size-3.5", l.class))
    }, [
      K(a.$slots, "default", {}, () => [
        I(y(Zt))
      ])
    ], 2));
  }
}), Zu = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Ju = /* @__PURE__ */ A({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class"), r = we(a);
    return (s, i) => (t(), n("div", Zu, [
      I(y(bn), oe({ "data-slot": "navigation-menu-viewport" }, y(r), {
        class: y(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), jw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class", "viewport"), i = ve(s, r);
    return (u, d) => (t(), V(y(xn), oe({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, y(i), {
      class: y(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: j((p) => [
        K(u.$slots, "default", $e(Ae(p))),
        e.viewport ? (t(), V(Ju, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), Lw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(yn), oe({ "data-slot": "navigation-menu-content" }, y(i), {
      class: y(X)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: j(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vw = /* @__PURE__ */ A({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class"), r = we(a);
    return (s, i) => (t(), V(y(kn), oe({ "data-slot": "navigation-menu-indicator" }, y(r), {
      class: y(X)(
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
}), Dw = /* @__PURE__ */ A({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y($n), oe({ "data-slot": "navigation-menu-item" }, y(a), {
      class: y(X)("relative", l.class)
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tw = /* @__PURE__ */ A({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(wn), oe({ "data-slot": "navigation-menu-link" }, y(i), {
      class: y(X)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ew = /* @__PURE__ */ A({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class"), r = we(a);
    return (s, i) => (t(), V(y(Cn), oe({ "data-slot": "navigation-menu-list" }, y(r), {
      class: y(X)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Iw = /* @__PURE__ */ A({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class"), r = we(a);
    return (s, i) => (t(), V(y(Sn), oe({ "data-slot": "navigation-menu-trigger" }, y(r), {
      class: y(X)(y(Yu)(), "group", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default"),
        I(y(Ea), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yu = _t(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), Fw = /* @__PURE__ */ A({
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
    return (i, u) => (t(), V(y(Yt), oe({ "data-slot": "dialog" }, y(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(Ae(d)))
      ]),
      _: 3
    }, 16));
  }
}), Nw = /* @__PURE__ */ A({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Re), oe({ "data-slot": "dialog-close" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xu = /* @__PURE__ */ A({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y(St), oe({ "data-slot": "dialog-overlay" }, y(a), {
      class: y(X)(
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
}), Rw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(Mt), null, {
      default: j(() => [
        I(Xu),
        I(y(Bt), oe({ "data-slot": "dialog-content" }, { ...u.$attrs, ...y(i) }, {
          class: y(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: j(() => [
            K(u.$slots, "default"),
            e.showCloseButton ? (t(), V(y(Re), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                I(y(Ct)),
                d[0] || (d[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : $("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Uw = /* @__PURE__ */ A({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class"), r = we(a);
    return (s, i) => (t(), V(y(Xt), oe({ "data-slot": "dialog-description" }, y(r), {
      class: y(X)("text-muted-foreground text-sm", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hw = /* @__PURE__ */ A({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: O(y(X)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      K(a.$slots, "default"),
      e.showCloseButton ? (t(), V(y(Re), {
        key: 0,
        "as-child": ""
      }, {
        default: j(() => [
          I(se, { variant: "outline" }, {
            default: j(() => [...r[0] || (r[0] = [
              N(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : $("", !0)
    ], 2));
  }
}), qw = /* @__PURE__ */ A({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: O(y(X)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Kw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = ie(a, "class"), i = ve(s, r);
    return (u, d) => (t(), V(y(Mt), null, {
      default: j(() => [
        I(y(St), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            I(y(Bt), oe({
              class: y(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...y(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (p) => {
                const h = p.detail.originalEvent, m = h.target;
                (h.offsetX > m.clientWidth || h.offsetY > m.clientHeight) && p.preventDefault();
              })
            }), {
              default: j(() => [
                K(u.$slots, "default"),
                I(y(Re), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    I(y(Ct), { class: "w-4 h-4" }),
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
}), Gw = /* @__PURE__ */ A({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class"), r = we(a);
    return (s, i) => (t(), V(y(Qt), oe({ "data-slot": "dialog-title" }, y(r), {
      class: y(X)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ww = /* @__PURE__ */ A({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(ea), oe({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zw = /* @__PURE__ */ A({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ie(l, "class");
    return (r, s) => (t(), V(y(Mn), oe({ "data-slot": "label" }, y(a), {
      class: y(X)(
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
}), Jw = /* @__PURE__ */ A({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Ia), {
      role: "status",
      "aria-label": "Loading",
      class: O(y(X)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), Yw = /* @__PURE__ */ A({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: O(
        y(X)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Xw = /* @__PURE__ */ A({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: O(y(X)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Qw = /* @__PURE__ */ A({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: O(y(X)("px-6", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), e4 = /* @__PURE__ */ A({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: O(y(X)("text-muted-foreground text-sm", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), t4 = /* @__PURE__ */ A({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: O(y(X)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), a4 = /* @__PURE__ */ A({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: O(
        y(X)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), n4 = /* @__PURE__ */ A({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: O(y(X)("leading-none font-semibold", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Qu = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, ed = { class: "flex items-start gap-3" }, td = { class: "min-w-0 flex-1" }, ad = { class: "text-foreground text-sm font-medium" }, nd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, l4 = /* @__PURE__ */ A({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = q(!1), u = q(null), d = q(0);
    Sa((h) => (console.error(`[PkBoundary] ${r.label} failed to render`, h), i.value = !0, u.value = h instanceof Error ? h.message : null, s("error", h), !1));
    function p() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: p }), (h, m) => (t(), n("div", {
      class: O(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Qu, [
        o("div", ed, [
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
          o("div", td, [
            o("p", ad, c(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", nd, c(u.value), 1)) : $("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: p
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
              N(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? $("", !0) : K(h.$slots, "default", { key: d.value })
    ], 2));
  }
}), ld = { class: "bg-card rounded-lg border" }, od = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, sd = { class: "min-w-0" }, rd = {
  key: 0,
  class: "truncate text-sm font-medium"
}, id = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, ud = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, dd = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, o4 = /* @__PURE__ */ A({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", ld, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", od, [
        o("div", sd, [
          K(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", rd, c(e.title), 1)) : $("", !0),
            e.description ? (t(), n("p", id, c(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", ud, [
          K(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: O(e.padded ? "p-4" : "")
      }, [
        K(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", dd, [
        K(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), ca = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function s4() {
  const e = na(), l = k(() => e.props.panel?.pageFooter === !0);
  return gt(ca, l), l;
}
const cd = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, fd = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, md = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, r4 = /* @__PURE__ */ A({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = na(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = k(() => {
      const p = a.props.panel;
      return Array.isArray(p?.footerLinks) ? p.footerLinks : [];
    }), u = tt(ca, k(() => !1)), d = k(() => !l.host && y(u) === !0);
    return (p, h) => d.value ? $("", !0) : (t(), n("footer", cd, [
      o("div", fd, [
        o("p", null, "© " + c(y(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), n("nav", md, [
          (t(!0), n(z, null, L(i.value, (m) => (t(), V(y(Pn), {
            key: m.href,
            href: m.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              N(c(m.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), pd = { class: "flex shrink-0 flex-col items-center" }, vd = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, i4 = /* @__PURE__ */ A({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, a = k(() => l.kind === "laptop"), r = k(
      () => a.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = k(() => a.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, u) => (t(), n("div", pd, [
      o("div", {
        class: O(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", vd)) : $("", !0),
        o("div", {
          class: O(["size-full overflow-hidden bg-white", s.value])
        }, [
          K(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(z, { key: 0 }, [
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
      ], 64)) : $("", !0)
    ]));
  }
}), gd = { class: "flex flex-col gap-2" }, hd = { class: "min-w-0 flex-1" }, bd = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, xd = ["disabled", "aria-label", "onClick"], yd = ["disabled", "aria-label", "onClick"], kd = ["disabled", "title", "aria-label", "onClick"], $d = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, wd = ["disabled"], u4 = /* @__PURE__ */ A({
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
    function u(g) {
      return Array.isArray(g) ? g.map((f) => ({ uid: s++, data: { ...f } })) : [];
    }
    ce(
      () => a.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(d()) && (i.value = u(g));
      }
    );
    function d() {
      const g = [];
      for (const f of i.value) {
        const S = {};
        let B = !1;
        for (const P of a.children) {
          const W = f.data[P.key] ?? null;
          S[P.key] = W, W !== null && W !== "" && !(Array.isArray(W) && W.length === 0) && (B = !0);
        }
        B && g.push(S);
      }
      return g.length ? g : null;
    }
    function p() {
      r("update:modelValue", d());
    }
    const h = k(() => a.maxItems !== null && i.value.length >= a.maxItems), m = k(() => a.minItems !== null && i.value.length <= a.minItems), b = k(() => a.children.length === 1);
    function M() {
      if (h.value || a.disabled)
        return;
      const g = {};
      for (const f of a.children)
        g[f.key] = null;
      i.value.push({ uid: s++, data: g });
    }
    function w(g) {
      i.value = i.value.filter((f) => f.uid !== g), p();
    }
    function C(g, f) {
      const S = g + f;
      if (S < 0 || S >= i.value.length)
        return;
      const B = [...i.value], [P] = B.splice(g, 1);
      B.splice(S, 0, P), i.value = B, p();
    }
    function x(g, f, S) {
      const B = i.value.find((P) => P.uid === g);
      B && (B.data[f] = S, p());
    }
    function v(g, f) {
      return a.errors[`${a.fieldKey}.${g}.${f}`];
    }
    return (g, f) => (t(), n("div", gd, [
      (t(!0), n(z, null, L(i.value, (S, B) => (t(), n("div", {
        key: S.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: O(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", b.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, c(B + 1), 3),
        o("div", hd, [
          b.value ? (t(), V(Ie, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: S.data[e.children[0].key],
            error: v(B, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => x(S.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", bd, [
            (t(!0), n(z, null, L(e.children, (P) => (t(), V(Ie, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: S.data[P.key],
              error: v(B, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (W) => x(S.uid, P.key, W)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: O(["flex shrink-0 items-center gap-0.5", b.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === 0,
            "aria-label": `Move ${e.itemLabel} ${B + 1} up`,
            onClick: (P) => C(B, -1)
          }, [...f[0] || (f[0] = [
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
          ])], 8, xd),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${B + 1} down`,
            onClick: (P) => C(B, 1)
          }, [...f[1] || (f[1] = [
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
          ])], 8, yd),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || m.value,
            title: m.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${B + 1}`,
            onClick: (P) => w(S.uid)
          }, [...f[2] || (f[2] = [
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
          ])], 8, kd)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", $d, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
      h.value ? $("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: M
      }, [
        f[3] || (f[3] = o("svg", {
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
        N(" Add " + c(e.itemLabel.toLowerCase()), 1)
      ], 8, wd))
    ]));
  }
}), Cd = { class: "space-y-1" }, Sd = { class: "flex items-center gap-1" }, Md = ["disabled", "title", "aria-label", "onClick"], Bd = ["aria-pressed"], _d = ["id", "value", "rows", "disabled"], Pd = ["innerHTML"], zd = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(!1), i = k(() => a.modelValue ?? "");
    function u(b) {
      return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = k(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function p(b, M = b) {
      const w = document.getElementById(a.id ?? "");
      if (w === null)
        return;
      const C = w.selectionStart, x = w.selectionEnd, v = i.value.slice(C, x);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${b}${v}${M}${i.value.slice(x)}`
      );
    }
    const h = {
      bold: { label: "B", run: () => p("**") },
      italic: { label: "I", run: () => p("*") },
      code: { label: "</>", run: () => p("`") },
      heading: { label: "H", run: () => p("## ", "") },
      list: { label: "•", run: () => p("- ", "") },
      link: { label: "🔗", run: () => p("[", "](https://)") }
    }, m = k(
      () => (a.toolbar ?? Object.keys(h)).filter((b) => b in h)
    );
    return (b, M) => (t(), n("div", Cd, [
      o("div", Sd, [
        (t(!0), n(z, null, L(m.value, (w) => (t(), n("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => h[w].run()
        }, c(h[w].label), 9, Md))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: M[0] || (M[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, Bd)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, Pd)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, _d))
    ]));
  }
}), Ad = { class: "space-y-1" }, Od = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, jd = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Ld = ["id", "value", "rows", "disabled"], Vd = { class: "text-muted-foreground text-xs" }, Dd = {
  key: 0,
  class: "text-destructive text-xs"
}, Td = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(null), i = q(!0), u = k(() => a.modelValue ?? ""), d = k(() => Math.max(u.value.split(`
`).length, 1)), p = k(() => {
      if (a.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
      } catch (b) {
        return b instanceof Error ? b.message : "Not valid JSON.";
      }
    });
    function h(b) {
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
      const M = b.target, w = M.selectionStart, C = M.selectionEnd, x = `${u.value.slice(0, w)}    ${u.value.slice(C)}`;
      r("update:modelValue", x), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = w + 4;
      });
    }
    return (b, M) => (t(), n("div", Ad, [
      o("div", Od, [
        o("div", jd, [
          (t(!0), n(z, null, L(d.value, (w) => (t(), n("div", { key: w }, c(w), 1))), 128))
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
          onInput: h,
          onKeydown: m
        }, null, 40, Ld)
      ]),
      o("p", Vd, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      p.value ? (t(), n("p", Dd, c(p.value), 1)) : $("", !0)
    ]));
  }
}), Ed = { class: "space-y-3" }, Id = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Fd = { class: "text-sm font-medium" }, Nd = { class: "flex items-center gap-1" }, Rd = ["disabled", "onClick"], Ud = ["disabled", "onClick"], Hd = ["disabled", "onClick"], qd = { class: "space-y-3 p-3" }, Kd = { class: "flex flex-wrap items-center gap-2" }, Gd = ["disabled", "onClick"], Wd = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, d4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = k(() => a.modelValue ?? []), i = k(
      () => Object.fromEntries(a.blocks.map((M) => [M.type, M]))
    ), u = k(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function d(M) {
      r("update:modelValue", M);
    }
    function p(M) {
      u.value || d([...s.value, { type: M, data: {} }]);
    }
    function h(M) {
      d(s.value.filter((w, C) => C !== M));
    }
    function m(M, w) {
      const C = M + w;
      if (C < 0 || C >= s.value.length)
        return;
      const x = [...s.value], [v] = x.splice(M, 1);
      x.splice(C, 0, v), d(x);
    }
    function b(M, w, C) {
      d(
        s.value.map(
          (x, v) => v === M ? { ...x, data: { ...x.data, [w]: C } } : x
        )
      );
    }
    return (M, w) => (t(), n("div", Ed, [
      (t(!0), n(z, null, L(s.value, (C, x) => (t(), n("div", {
        key: `${C.type}-${x}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Id, [
          o("span", Fd, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", Nd, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || x === 0,
              "aria-label": "Move up",
              onClick: (v) => m(x, -1)
            }, " ↑ ", 8, Rd),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || x === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (v) => m(x, 1)
            }, " ↓ ", 8, Ud),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (v) => h(x)
            }, " Remove ", 8, Hd)
          ])
        ]),
        o("div", qd, [
          (t(!0), n(z, null, L(i.value[C.type]?.fields ?? [], (v) => (t(), V(Ie, {
            key: v.key,
            field: v,
            value: C.data[v.key] ?? null,
            error: e.errors?.[v.key],
            processing: e.disabled,
            onChange: (g) => b(x, v.key, g)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Kd, [
        (t(!0), n(z, null, L(e.blocks, (C) => (t(), n("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (x) => p(C.type)
        }, " + " + c(C.label), 9, Gd))), 128)),
        u.value ? (t(), n("span", Wd, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), Zd = ["name", "value", "checked", "disabled", "onChange"], Jd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Yd = /* @__PURE__ */ A({
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
      class: O(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(z, null, L(e.options, (d) => (t(), n("label", {
        key: String(d.value),
        class: O(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: s(d),
          disabled: e.disabled,
          onChange: (p) => r("update:modelValue", d.value)
        }, null, 40, Zd),
        N(" " + c(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Jd, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), Xd = ["value", "checked", "disabled", "onChange"], Qd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ec = /* @__PURE__ */ A({
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
    const a = e, r = l, s = k(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function i(p) {
      return s.value.some((h) => h == p.value);
    }
    function u(p) {
      r(
        "update:modelValue",
        i(p) ? s.value.filter((h) => h != p.value) : [...s.value, p.value]
      );
    }
    const d = k(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (p, h) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(d.value)
    }, [
      (t(!0), n(z, null, L(e.options, (m) => (t(), n("label", {
        key: String(m.value),
        class: O(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: m.value,
          checked: i(m),
          disabled: e.disabled,
          onChange: (b) => u(m)
        }, null, 40, Xd),
        N(" " + c(m.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Qd, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), tc = { class: "flex flex-col gap-1.5" }, ac = ["aria-label", "onClick"], nc = ["placeholder", "disabled", "maxlength"], lc = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, oc = ["onClick"], sc = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, rc = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(""), i = k(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), u = k(() => i.value.length >= (a.field.max ?? 25)), d = k(
      () => (a.field.suggestions ?? []).filter(
        (b) => !i.value.some((M) => M.toLowerCase() === b.toLowerCase())
      )
    );
    function p(b) {
      const M = b.trim().slice(0, a.field.maxLength ?? 40);
      if (M === "" || u.value) {
        s.value = "";
        return;
      }
      if (i.value.some((w) => w.toLowerCase() === M.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, M]), s.value = "";
    }
    function h(b) {
      r(
        "update:modelValue",
        i.value.filter((M, w) => w !== b)
      );
    }
    function m(b) {
      if (b.key === "Enter" || b.key === ",") {
        b.preventDefault(), p(s.value);
        return;
      }
      b.key === "Backspace" && s.value === "" && i.value.length > 0 && h(i.value.length - 1);
    }
    return (b, M) => (t(), n("div", tc, [
      o("div", {
        class: O(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, L(i.value, (w, C) => (t(), n("span", {
          key: `${w}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(c(w) + " ", 1),
          e.disabled ? $("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (x) => h(C)
          }, " × ", 8, ac))
        ]))), 128)),
        fe(o("input", {
          "onUpdate:modelValue": M[0] || (M[0] = (w) => s.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: m,
          onBlur: M[1] || (M[1] = (w) => p(s.value))
        }, null, 40, nc), [
          [ke, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", lc, [
        M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(z, null, L(d.value, (w) => (t(), n("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => p(w)
        }, c(w), 9, oc))), 128))
      ])) : $("", !0),
      u.value ? (t(), n("p", sc, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), ic = 4.5, Ut = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function fa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function ft(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function kt(e) {
  const [l, a, r] = fa(e);
  return 0.2126 * ft(l) + 0.7152 * ft(a) + 0.0722 * ft(r);
}
function ma(e, l) {
  const a = kt(e), r = kt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function uc(e, l, a) {
  if (!Ut.test(e) || !Ut.test(l))
    return e;
  const r = kt(l) > 0.5, s = r ? 0 : 255;
  let i = fa(e);
  for (let u = 0; u <= 20; u++) {
    const d = dc(i);
    if (ma(d, l) >= a)
      return d;
    i = i.map((p) => p + (s - p) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function dc(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const cc = { class: "flex flex-col gap-2" }, fc = { class: "flex items-center gap-2" }, mc = {
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
}, pc = ["value", "disabled", "aria-label"], vc = ["value", "disabled", "placeholder"], gc = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, hc = ["aria-label", "title", "onClick"], bc = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, xc = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = k(() => typeof a.modelValue == "string" ? a.modelValue : ""), u = k(() => s.test(i.value));
    function d(w) {
      const C = w.trim();
      if (C === "")
        return "";
      const x = C.startsWith("#") ? C : `#${C}`;
      return s.test(x) ? x.toLowerCase() : C;
    }
    function p(w) {
      r("update:modelValue", d(w.target.value));
    }
    const h = k(() => !u.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : ma(i.value, a.field.contrastBackground)), m = k(() => a.field.contrastMinRatio ?? ic), b = k(() => h.value !== null && h.value < m.value);
    function M() {
      a.field.contrastBackground && r(
        "update:modelValue",
        uc(i.value, a.field.contrastBackground, m.value)
      );
    }
    return (w, C) => (t(), n("div", cc, [
      o("div", fc, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (x) => r("update:modelValue", x.target.value))
        }, null, 40, pc)) : (t(), n("span", mc)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: p
        }, null, 40, vc)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", gc, [
        (t(!0), n(z, null, L(e.field.presets, (x) => (t(), n("button", {
          key: x,
          type: "button",
          class: O(["size-6 rounded border", i.value.toLowerCase() === x.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: x }),
          "aria-label": x,
          title: x,
          onClick: (v) => r("update:modelValue", x.toLowerCase())
        }, null, 14, hc))), 128))
      ])) : $("", !0),
      b.value ? (t(), n("p", bc, [
        o("span", null, " This fails contrast at " + c(h.value.toFixed(1)) + ":1 - it needs at least " + c(m.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), yc = { class: "flex items-center gap-3" }, kc = ["min", "max", "step", "value", "disabled", "aria-label"], $c = { class: "flex shrink-0 items-center gap-1" }, wc = ["min", "max", "step", "value", "disabled"], Cc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Sc = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(() => a.field.min ?? 0), i = k(() => a.field.max ?? 100), u = k(() => a.field.step ?? 1), d = k(() => {
      const m = Number(a.modelValue);
      return Number.isFinite(m) ? m : s.value;
    }), p = k(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function h(m) {
      if (m === "") {
        r("update:modelValue", null);
        return;
      }
      const b = Number(m);
      r("update:modelValue", Number.isFinite(b) ? b : null);
    }
    return (m, b) => (t(), n("div", yc, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: b[0] || (b[0] = (M) => h(M.target.value))
      }, null, 40, kc),
      o("div", $c, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: p.value ? "" : d.value,
          disabled: e.disabled,
          onInput: b[1] || (b[1] = (M) => h(M.target.value))
        }, null, 40, wc),
        e.field.unit ? (t(), n("span", Cc, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ new Map();
function mt(e, l) {
  Ye.set(e, l);
}
function Mc(e) {
  return Ye.get(e);
}
function c4(e) {
  return Ye.has(e);
}
function Bc() {
  return [...Ye.keys()].sort();
}
function f4() {
  Ye.clear();
}
const _c = ["name", "value", "checked", "disabled", "onChange"], Pc = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, zc = { class: "whitespace-nowrap" }, Ac = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Oc = ["name", "value", "checked", "disabled", "onChange"], jc = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Lc = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Vc = { class: "text-center text-xs font-medium" }, Dc = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Tc = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Ec = /* @__PURE__ */ A({
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
    const a = e, r = l, s = k(
      () => a.field.preview ? Mc(a.field.preview) : void 0
    ), i = k(() => !!a.field.preview && !s.value), u = k(() => a.field.layout === "segmented"), d = k(() => {
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
    function p(h) {
      return a.modelValue != null && h.value == a.modelValue;
    }
    return (h, m) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: O(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, L(e.options, (b) => (t(), n("label", {
        key: String(b.value),
        class: O(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          p(b) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: p(b),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", b.value)
        }, null, 40, _c),
        m[0] || (m[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Pc, [
          (t(), V(xe(s.value), {
            value: b.value,
            label: b.label,
            selected: p(b)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", zc, c(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ac, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: O(["grid gap-3", d.value])
    }, [
      (t(!0), n(z, null, L(e.options, (b) => (t(), n("label", {
        key: String(b.value),
        class: O(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          p(b) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: b.value,
          checked: p(b),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", b.value)
        }, null, 40, Oc),
        m[1] || (m[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", jc, [
          s.value ? (t(), V(xe(s.value), {
            key: 0,
            value: b.value,
            label: b.label,
            selected: p(b)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Lc, " no preview ")) : $("", !0)
        ]),
        o("span", Vc, c(b.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Dc, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Tc, [
        m[2] || (m[2] = N(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        N(". Registered: " + c(y(Bc)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), Ic = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Fc = /* @__PURE__ */ A({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Ic, [
      o("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Nc = { class: "flex flex-col items-center gap-1 text-center" }, Rc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, pa = /* @__PURE__ */ A({
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
    const l = e, a = k(() => l.mono ? "#000000" : l.accent), r = k(() => {
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
    return (s, i) => (t(), n("div", Nc, [
      o("div", {
        class: O(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: a.value, color: a.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Rc, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), Uc = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Hc = { class: "flex items-center gap-3" }, qc = ["src"], Kc = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Gc = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Wc = {
  key: 0,
  class: "text-right text-sm"
}, Zc = { class: "text-neutral-500" }, Jc = { class: "tabular-nums" }, Yc = { key: 1 }, Xc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Qc = { class: "mt-2 font-medium" }, ef = { key: 2 }, tf = { class: "w-full text-sm" }, af = { class: "w-full py-3 pr-2" }, nf = {
  key: 0,
  class: "text-xs text-neutral-500"
}, lf = { key: 0 }, of = ["colspan"], sf = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, rf = { class: "w-64 text-sm" }, uf = { class: "tabular-nums" }, df = {
  key: 3,
  class: "py-2"
}, cf = { key: 4 }, ff = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, mf = { class: "mt-2 flex flex-col gap-1 text-sm" }, pf = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, vf = { key: 0 }, gf = {
  key: 1,
  class: "mt-1"
}, hf = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, bf = /* @__PURE__ */ A({
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
    function s(p) {
      return p.rows ?? [];
    }
    function i(p) {
      return p.totals ?? [];
    }
    function u(p) {
      return p ?? [];
    }
    function d(p) {
      return p ?? "";
    }
    return (p, h) => (t(), n("article", Uc, [
      o("div", Hc, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, qc)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: a() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, L(e.document.blocks, (m, b) => (t(), n(z, { key: b }, [
        m.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ne({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ne({ color: a() })
            }, c(m.title), 5),
            m.subtitle ? (t(), n("p", Kc, c(m.subtitle), 1)) : $("", !0),
            m.reference ? (t(), n("p", Gc, c(m.reference), 1)) : $("", !0)
          ]),
          r(m).length ? (t(), n("dl", Wc, [
            (t(!0), n(z, null, L(r(m), (M, w) => (t(), n("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Zc, c(M.label), 1),
              o("dd", Jc, c(M.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : m.type === "party" ? (t(), n("section", Yc, [
          o("h2", Xc, c(m.heading), 1),
          o("p", Qc, c(m.name), 1),
          (t(!0), n(z, null, L(u(m.lines), (M, w) => (t(), n("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, c(M), 1))), 128))
        ])) : m.type === "lines" ? (t(), n("section", ef, [
          o("table", tf, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: a() })
              }, [
                (t(!0), n(z, null, L(u(m.columns), (M, w) => (t(), n("th", {
                  key: w,
                  class: O(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(M), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, L(s(m), (M, w) => (t(), n("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                o("td", af, [
                  o("p", null, c(M.description), 1),
                  M.detail ? (t(), n("p", nf, c(M.detail), 1)) : $("", !0)
                ]),
                (t(!0), n(z, null, L(M.cells, (C, x) => (t(), n("td", {
                  key: x,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(m).length === 0 ? (t(), n("tr", lf, [
                o("td", {
                  colspan: u(m.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(m.empty), 9, of)
              ])) : $("", !0)
            ])
          ]),
          i(m).length ? (t(), n("div", sf, [
            o("dl", rf, [
              (t(!0), n(z, null, L(i(m), (M, w) => (t(), n("div", {
                key: w,
                class: O([
                  "flex justify-between py-1",
                  M.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(M.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: O(M.strong ? "" : "text-neutral-600")
                }, c(M.label), 3),
                o("dd", uf, c(M.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : m.type === "code" ? (t(), n("section", df, [
          I(pa, {
            code: d(m.code),
            caption: d(m.caption),
            style: ne(d(m.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : m.type === "steps" ? (t(), n("section", cf, [
          o("h2", ff, c(m.heading), 1),
          o("ol", mf, [
            (t(!0), n(z, null, L(u(m.items), (M, w) => (t(), n("li", {
              key: w,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ne({ color: a() })
              }, c(w + 1) + ".", 5),
              o("span", null, c(M), 1)
            ]))), 128))
          ])
        ])) : m.type === "note" ? (t(), n("p", {
          key: 5,
          class: O(["text-sm", m.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(m.emphasis ? { color: a() } : void 0)
        }, c(m.text), 7)) : m.type === "footer" ? (t(), n("footer", pf, [
          m.text ? (t(), n("p", vf, c(m.text), 1)) : $("", !0),
          u(m.contacts).length ? (t(), n("p", gf, c(u(m.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), n("p", hf, " This document contains a “" + c(m.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), xf = ["aria-label", "title"], yf = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kf = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, m4 = /* @__PURE__ */ A({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = ia(), r = k(() => l.value.theme === "dark");
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
      (t(), n("svg", yf, [
        r.value ? (t(), n(z, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", kf))
      ]))
    ], 8, xf));
  }
}), $f = ["width", "height"], wf = { key: 0 }, Cf = ["x1", "x2", "y1", "y2"], Sf = ["x", "y"], Mf = ["x1", "x2", "y1", "y2"], Bf = ["x", "y"], _f = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Pf = ["x", "y", "width", "height", "fill", "fill-opacity"], zf = ["x", "y"], Af = ["x", "y"], Of = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, jf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Lf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Vf = { class: "text-xs font-semibold tabular-nums" }, Df = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Tf = { class: "text-muted-foreground" }, Ht = 5.6, p4 = /* @__PURE__ */ A({
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
    function r(_) {
      return a[_] ?? _;
    }
    function s(_, G) {
      if (!l.thresholds?.length)
        return G;
      const H = l.thresholds.find((ae) => _ < ae.max);
      return r(H ? H.color : l.aboveColor);
    }
    const i = q(null), u = q(560), d = q(null);
    let p = null;
    pe(() => {
      p = new ResizeObserver((_) => {
        u.value = Math.max(160, _[0].contentRect.width);
      }), i.value && p.observe(i.value);
    }), he(() => p?.disconnect());
    const h = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((G, H) => ({
      ...G,
      color: G.color ?? h[H % h.length]
    }))), b = k(() => m.value[0]?.points.map((_) => _.label) ?? []), M = k(() => b.value.length), w = k(() => l.orientation === "horizontal"), C = k(() => Math.max(0, ...b.value.map((_) => _.length))), x = k(() => {
      if (!w.value)
        return l.showAxis ? 44 : 8;
      const _ = C.value * Ht + 16;
      return Math.round(Math.min(Math.max(60, _), u.value * 0.4));
    }), v = k(() => Math.max(4, Math.floor((x.value - 16) / Ht)));
    function g(_) {
      return _.length <= v.value ? _ : `${_.slice(0, v.value - 1)}…`;
    }
    const f = k(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: x.value
    })), S = k(() => ({
      w: Math.max(1, u.value - f.value.left - f.value.right),
      h: Math.max(1, l.height - f.value.top - f.value.bottom)
    })), B = (_) => l.format ? l.format(_) : P(_);
    function P(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const W = k(() => {
      const _ = b.value.map(
        (le, E) => l.stacked ? m.value.reduce((D, Y) => D + Math.max(0, Y.points[E]?.value ?? 0), 0) : Math.max(...m.value.map((D) => D.points[E]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const G = Math.max(..._, 0);
      if (G <= 0)
        return 1;
      const H = 10 ** Math.floor(Math.log10(G));
      return ([1, 2, 2.5, 5, 10].find((le) => G <= le * H) ?? 10) * H;
    }), F = k(
      () => (w.value ? S.value.h : S.value.w) / Math.max(1, M.value)
    ), ee = k(() => F.value * 0.68), U = k(
      () => l.stacked || m.value.length <= 1 ? ee.value : ee.value / m.value.length
    ), Z = k(() => {
      const _ = [], G = new Array(M.value).fill(0);
      return m.value.forEach((H, ae) => {
        H.points.forEach((le, E) => {
          const Y = Math.max(0, le.value) / W.value * (w.value ? S.value.w : S.value.h), de = (w.value ? f.value.top : f.value.left) + E * F.value + (F.value - ee.value) / 2, re = l.stacked ? 0 : ae * U.value;
          _.push(
            w.value ? {
              x: f.value.left + G[E],
              y: de + re,
              w: Y,
              h: Math.max(0, U.value - 2),
              color: s(le.value, H.color),
              label: le.label,
              name: H.name,
              value: le.value,
              index: E
            } : {
              x: de + re,
              y: f.value.top + S.value.h - Y - G[E],
              w: Math.max(0, U.value - 2),
              h: Y,
              color: s(le.value, H.color),
              label: le.label,
              name: H.name,
              value: le.value,
              index: E
            }
          ), l.stacked && (G[E] += Y);
        });
      }), _;
    }), J = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: W.value * (w.value ? _ : 1 - _),
        x: f.value.left + S.value.w * _,
        y: f.value.top + S.value.h * _
      }))
    ), te = k(() => Math.max(1, Math.ceil(M.value / (w.value ? 14 : 10))));
    function R(_) {
      return _ === M.value - 1 || _ % te.value === 0;
    }
    function T(_) {
      return (w.value ? f.value.top : f.value.left) + _ * F.value + F.value / 2;
    }
    const Q = k(() => d.value === null ? null : {
      label: b.value[d.value],
      rows: m.value.map((_) => ({
        name: _.name,
        color: _.color,
        value: _.points[d.value]?.value ?? 0
      }))
    });
    return (_, G) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      M.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: G[0] || (G[0] = (H) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", wf, [
            w.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, L(J.value, (H) => (t(), n("line", {
                key: `g-${H.x}`,
                x1: H.x,
                x2: H.x,
                y1: f.value.top,
                y2: f.value.top + S.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Cf))), 128)),
              (t(!0), n(z, null, L(J.value, (H) => (t(), n("text", {
                key: `gt-${H.x}`,
                x: H.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(H.value)), 9, Sf))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, L(J.value, (H) => (t(), n("line", {
                key: `g-${H.y}`,
                x1: f.value.left,
                x2: u.value - f.value.right,
                y1: H.y,
                y2: H.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Mf))), 128)),
              (t(!0), n(z, null, L(J.value, (H) => (t(), n("text", {
                key: `gt-${H.y}`,
                x: f.value.left - 8,
                y: H.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(H.value)), 9, Bf))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), n(z, null, L(b.value, (H, ae) => (t(), n("rect", {
            key: `hit-${ae}`,
            x: w.value ? f.value.left : f.value.left + ae * F.value,
            y: w.value ? f.value.top + ae * F.value : f.value.top,
            width: w.value ? S.value.w : F.value,
            height: w.value ? F.value : S.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === ae ? 0.4 : 0,
            onMouseenter: (le) => d.value = ae
          }, null, 40, _f))), 128)),
          (t(!0), n(z, null, L(Z.value, (H, ae) => (t(), n("rect", {
            key: `b-${ae}`,
            x: H.x,
            y: H.y,
            width: H.w,
            height: H.h,
            fill: H.color,
            "fill-opacity": d.value === null || d.value === H.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Pf))), 128)),
          w.value ? (t(!0), n(z, { key: 1 }, L(b.value, (H, ae) => fe((t(), n("text", {
            key: `c-${ae}`,
            x: f.value.left - 8,
            y: T(ae) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(c(g(H)) + " ", 1),
            o("title", null, c(H), 1)
          ], 8, zf)), [
            [Le, R(ae)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, L(b.value, (H, ae) => fe((t(), n("text", {
            key: `c-${ae}`,
            x: T(ae),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(H), 9, Af)), [
            [Le, R(ae)]
          ])), 128))
        ], 40, $f)),
        Q.value ? (t(), n("div", Of, [
          o("p", jf, c(Q.value.label), 1),
          (t(!0), n(z, null, L(Q.value.rows, (H, ae) => (t(), n("div", {
            key: ae,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: H.color })
            }, null, 4),
            o("span", Lf, c(H.name || "Value"), 1),
            o("span", Vf, c(B(H.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && m.value.length > 1 ? (t(), n("div", Df, [
          (t(!0), n(z, null, L(m.value, (H, ae) => (t(), n("span", {
            key: ae,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: H.color })
            }, null, 4),
            o("span", Tf, c(H.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Ef = ["width", "height"], If = ["id"], Ff = ["stop-color"], Nf = ["stop-color"], Rf = { key: 0 }, Uf = ["x1", "x2", "y1", "y2"], Hf = ["x", "y"], qf = ["x", "y"], Kf = ["x1", "x2", "y1", "y2"], Gf = ["d", "fill"], Wf = ["d", "stroke", "stroke-dasharray"], Zf = ["cx", "cy", "fill"], Jf = { key: 1 }, Yf = ["x1", "x2", "y1", "y2"], Xf = ["cx", "cy", "fill"], Qf = ["x", "y"], em = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, tm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, am = { class: "text-xs font-semibold tabular-nums" }, nm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, lm = { class: "text-muted-foreground" }, om = /* @__PURE__ */ A({
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
    const l = e, a = k(() => h.value.some((_) => _.axis === "right")), r = q(null), s = q(560), i = q(null);
    let u = null;
    pe(() => {
      u = new ResizeObserver((_) => {
        s.value = Math.max(160, _[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), he(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = Math.random().toString(36).slice(2, 9), h = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((G, H) => ({
      ...G,
      color: G.color ?? d[H % d.length]
    }))), m = k(() => h.value[0]?.points.map((_) => _.label) ?? []), b = k(() => m.value.length), M = k(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), w = (_) => l.format ? l.format(_) : C(_);
    function C(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    function x(_) {
      const G = Math.max(..._, 0);
      if (G <= 0)
        return 1;
      const H = 10 ** Math.floor(Math.log10(G));
      return ([1, 2, 2.5, 5, 10].find((le) => G <= le * H) ?? 10) * H;
    }
    const v = k(
      () => x(
        h.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((G) => G.value))
      )
    ), g = k(
      () => x(
        h.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((G) => G.value))
      )
    ), f = k(() => ({
      w: Math.max(1, s.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    }));
    function S(_) {
      return M.value.left + (b.value <= 1 ? 0 : _ / (b.value - 1) * f.value.w);
    }
    function B(_, G = "left") {
      const H = G === "right" ? g.value : v.value;
      return M.value.top + f.value.h - _ / H * f.value.h;
    }
    const P = k(
      () => h.value.map((_) => {
        const G = _.points.map((ae, le) => ({
          ...ae,
          x: S(le),
          y: B(ae.value, _.axis ?? "left")
        })), H = _.stepped ? W(G) : F(G);
        return { ..._, pts: G, line: H, area: ee(H, G) };
      })
    );
    function W(_) {
      if (_.length === 0)
        return "";
      let G = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let H = 1; H < _.length; H++)
        G += ` L${_[H].x.toFixed(2)},${_[H - 1].y.toFixed(2)} L${_[H].x.toFixed(2)},${_[H].y.toFixed(2)}`;
      return G;
    }
    function F(_) {
      const G = _.length;
      if (G === 0)
        return "";
      if (G === 1)
        return `M${_[0].x},${_[0].y}`;
      const H = [], ae = [];
      for (let D = 0; D < G - 1; D++)
        H[D] = _[D + 1].x - _[D].x, ae[D] = H[D] === 0 ? 0 : (_[D + 1].y - _[D].y) / H[D];
      const le = [ae[0]];
      for (let D = 1; D < G - 1; D++)
        if (ae[D - 1] * ae[D] <= 0)
          le[D] = 0;
        else {
          const Y = 2 * H[D] + H[D - 1], de = H[D] + 2 * H[D - 1];
          le[D] = (Y + de) / (Y / ae[D - 1] + de / ae[D]);
        }
      le[G - 1] = ae[G - 2];
      let E = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let D = 0; D < G - 1; D++) {
        const Y = H[D] / 3;
        E += ` C${(_[D].x + Y).toFixed(2)},${(_[D].y + le[D] * Y).toFixed(2)} ${(_[D + 1].x - Y).toFixed(2)},${(_[D + 1].y - le[D + 1] * Y).toFixed(2)} ${_[D + 1].x.toFixed(2)},${_[D + 1].y.toFixed(2)}`;
      }
      return E;
    }
    function ee(_, G) {
      if (G.length === 0)
        return "";
      const H = M.value.top + f.value.h;
      return `${_} L${G[G.length - 1].x.toFixed(2)},${H} L${G[0].x.toFixed(2)},${H} Z`;
    }
    const U = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: M.value.top + f.value.h * _,
        value: v.value * (1 - _)
      }))
    ), Z = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: M.value.top + f.value.h * _,
        value: g.value * (1 - _)
      }))
    ), J = k(() => Math.max(1, Math.ceil(b.value / 8)));
    function te(_) {
      return _ === b.value - 1 || _ % J.value === 0;
    }
    function R(_) {
      const G = _.currentTarget.getBoundingClientRect(), H = _.clientX - G.left - M.value.left, ae = b.value <= 1 ? 1 : f.value.w / (b.value - 1);
      i.value = Math.min(b.value - 1, Math.max(0, Math.round(H / ae)));
    }
    const T = k(() => {
      if (i.value === null || b.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: S(_),
        label: m.value[_],
        rows: P.value.map((G) => ({
          name: G.name,
          color: G.color,
          value: G.points[_]?.value ?? 0,
          y: G.pts[_]?.y ?? 0
        }))
      };
    }), Q = k(() => {
      if (!T.value)
        return {};
      const _ = T.value.x > s.value * 0.6;
      return {
        left: `${T.value.x}px`,
        top: "8px",
        transform: _ ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (_, G) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      b.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: R,
          onMouseleave: G[0] || (G[0] = (H) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, L(P.value, (H, ae) => (t(), n("linearGradient", {
              id: `pk-fill-${y(p)}-${ae}`,
              key: ae,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": H.color,
                "stop-opacity": "0.25"
              }, null, 8, Ff),
              o("stop", {
                offset: "100%",
                "stop-color": H.color,
                "stop-opacity": "0.01"
              }, null, 8, Nf)
            ], 8, If))), 128))
          ]),
          e.showAxis ? (t(), n("g", Rf, [
            (t(!0), n(z, null, L(U.value, (H) => (t(), n("line", {
              key: H.y,
              x1: M.value.left,
              x2: s.value - M.value.right,
              y1: H.y,
              y2: H.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Uf))), 128)),
            (t(!0), n(z, null, L(U.value, (H) => (t(), n("text", {
              key: `t-${H.y}`,
              x: M.value.left - 8,
              y: H.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(H.value)), 9, Hf))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, L(Z.value, (H) => (t(), n("text", {
              key: `rt-${H.y}`,
              x: s.value - M.value.right + 8,
              y: H.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(H.value)), 9, qf))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), n(z, null, L(m.value, (H, ae) => fe((t(), n("line", {
            key: `v-${ae}`,
            x1: S(ae),
            x2: S(ae),
            y1: M.value.top,
            y2: M.value.top + f.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Kf)), [
            [Le, te(ae)]
          ])), 128)),
          (t(!0), n(z, null, L(P.value, (H, ae) => (t(), n("g", {
            key: `s-${ae}`
          }, [
            H.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: H.area,
              fill: `url(#pk-fill-${y(p)}-${ae})`
            }, null, 8, Gf)) : $("", !0),
            o("path", {
              d: H.line,
              fill: "none",
              stroke: H.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": H.dashed ? "6 4" : void 0
            }, null, 8, Wf),
            H.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: H.pts[0].x,
              cy: H.pts[0].y,
              r: "3",
              fill: H.color
            }, null, 8, Zf)) : $("", !0)
          ]))), 128)),
          T.value ? (t(), n("g", Jf, [
            o("line", {
              x1: T.value.x,
              x2: T.value.x,
              y1: M.value.top,
              y2: M.value.top + f.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Yf),
            (t(!0), n(z, null, L(T.value.rows, (H, ae) => (t(), n("circle", {
              key: `d-${ae}`,
              cx: T.value.x,
              cy: H.y,
              r: "4",
              fill: H.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Xf))), 128))
          ])) : $("", !0),
          (t(!0), n(z, null, L(m.value, (H, ae) => fe((t(), n("text", {
            key: `x-${ae}`,
            x: S(ae),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(H), 9, Qf)), [
            [Le, te(ae)]
          ])), 128))
        ], 40, Ef)),
        T.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(Q.value)
        }, [
          o("p", em, c(T.value.label), 1),
          (t(!0), n(z, null, L(T.value.rows, (H, ae) => (t(), n("div", {
            key: ae,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: H.color })
            }, null, 4),
            o("span", tm, c(H.name || "Value"), 1),
            o("span", am, c(w(H.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && h.value.length > 1 ? (t(), n("div", nm, [
          (t(!0), n(z, null, L(P.value, (H, ae) => (t(), n("span", {
            key: ae,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: H.color })
            }, null, 4),
            o("span", lm, c(H.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), sm = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, rm = { class: "text-muted-foreground text-[11px] capitalize" }, im = { class: "text-sm font-semibold tabular-nums" }, um = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Xe = /* @__PURE__ */ A({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", sm, [
      o("p", rm, c(e.label), 1),
      o("p", im, [
        N(c(e.value) + " ", 1),
        e.share ? (t(), n("span", um, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), dm = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, cm = ["width", "height", "viewBox", "aria-label"], fm = ["d", "fill", "fill-opacity", "onMouseenter"], mm = ["x", "y"], pm = ["x", "y"], vm = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, gm = ["onMouseenter"], hm = { class: "min-w-0 flex-1 truncate capitalize" }, bm = { class: "tabular-nums font-medium" }, xm = { class: "text-muted-foreground w-9 text-right tabular-nums" }, v4 = /* @__PURE__ */ A({
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
    ], r = k(() => l.data.reduce((v, g) => v + g.value, 0)), s = q(null), i = k(() => l.height), u = k(() => i.value / 2 - 4), d = k(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function p(v) {
      return a[v % a.length];
    }
    function h(v) {
      return 1 - Math.min(0.55, Math.floor(v / a.length) * 0.28);
    }
    const m = k(() => {
      if (r.value <= 0)
        return [];
      const v = i.value / 2;
      let g = -Math.PI / 2;
      return l.data.map((f, S) => {
        const B = f.value / r.value, P = B * Math.PI * 2, W = g, F = g + P;
        return g = F, {
          ...f,
          share: B,
          colour: p(S),
          opacity: h(S),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: B >= 0.9999 ? w(v) : M(v, W, F, u.value, d.value)
        };
      });
    });
    function b(v, g, f) {
      return `${(v + Math.cos(g) * f).toFixed(2)},${(v + Math.sin(g) * f).toFixed(2)}`;
    }
    function M(v, g, f, S, B) {
      const P = f - g > Math.PI ? 1 : 0;
      return B <= 0 ? `M${v},${v} L${b(v, g, S)} A${S},${S} 0 ${P} 1 ${b(v, f, S)} Z` : [
        `M${b(v, g, S)}`,
        `A${S},${S} 0 ${P} 1 ${b(v, f, S)}`,
        `L${b(v, f, B)}`,
        `A${B},${B} 0 ${P} 0 ${b(v, g, B)}`,
        "Z"
      ].join(" ");
    }
    function w(v) {
      const g = u.value, f = d.value, S = [
        `M${v - g},${v}`,
        `A${g},${g} 0 1 1 ${v + g},${v}`,
        `A${g},${g} 0 1 1 ${v - g},${v}`,
        "Z"
      ];
      return f <= 0 ? S.join(" ") : [
        ...S,
        `M${v - f},${v}`,
        `A${f},${f} 0 1 0 ${v + f},${v}`,
        `A${f},${f} 0 1 0 ${v - f},${v}`,
        "Z"
      ].join(" ");
    }
    const C = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), x = (v) => `${(v * 100).toFixed(v < 0.01 ? 2 : 0)}%`;
    return (v, g) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", dm, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), n(z, null, L(m.value, (f, S) => (t(), n("path", {
          key: S,
          d: f.path,
          fill: f.colour,
          "fill-opacity": s.value === null || s.value === S ? f.opacity : f.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (B) => s.value = S,
          onMouseleave: g[0] || (g[0] = (B) => s.value = null)
        }, null, 40, fm))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : m.value[s.value].value)), 9, mm),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : m.value[s.value].label), 9, pm)
        ], 64)) : $("", !0)
      ], 8, cm)),
      o("ul", vm, [
        (t(!0), n(z, null, L(m.value, (f, S) => (t(), n("li", {
          key: S,
          class: O(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === S ? "bg-muted" : ""]),
          onMouseenter: (B) => s.value = S,
          onMouseleave: g[1] || (g[1] = (B) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: f.colour, opacity: f.opacity })
          }, null, 4),
          o("span", hm, c(f.label), 1),
          o("span", bm, c(C(f.value)), 1),
          o("span", xm, c(x(f.share)), 1)
        ], 42, gm))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), V(Xe, {
        key: 0,
        label: m.value[s.value].label,
        value: C(m.value[s.value].value),
        share: x(m.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), ym = ["width", "height", "viewBox", "aria-label"], km = { class: "text-border" }, $m = ["x1", "x2", "y1", "y2", "stroke-dasharray"], wm = { class: "fill-muted-foreground text-[10px]" }, Cm = ["x", "y"], Sm = ["x", "y"], Mm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Bm = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, g4 = /* @__PURE__ */ A({
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
    pe(() => {
      u = new ResizeObserver((J) => {
        const te = J[0]?.contentRect.width ?? 0;
        te > 0 && (s.value = te);
      }), r.value && u.observe(r.value);
    }), he(() => u?.disconnect());
    const d = k(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), p = (J, te) => te.color ?? a[J % a.length], h = k(() => d.value.flatMap((J) => J.points)), m = k(() => h.value.some((J) => typeof J.r == "number")), b = { top: 12, right: 16, bottom: 32, left: 48 }, M = k(() => Math.max(10, s.value - b.left - b.right)), w = k(() => Math.max(10, l.height - b.top - b.bottom));
    function C(J) {
      if (J.length === 0)
        return [0, 1];
      const te = Math.min(...J), R = Math.max(...J), T = R - te || Math.abs(R) || 1;
      return [te - T * 0.08, R + T * 0.08];
    }
    const x = k(() => C(h.value.map((J) => J.x))), v = k(() => C(h.value.map((J) => J.y))), g = (J) => {
      const [te, R] = x.value;
      return b.left + (J - te) / (R - te) * M.value;
    }, f = (J) => {
      const [te, R] = v.value;
      return b.top + w.value - (J - te) / (R - te) * w.value;
    }, S = k(() => Math.max(...h.value.map((J) => J.r ?? 0), 0));
    function B(J) {
      if (!m.value || !S.value)
        return 4;
      const te = Math.max(0, J.r ?? 0) / S.value;
      return 3 + Math.sqrt(te) * (l.maxRadius - 3);
    }
    function P([J, te]) {
      return Array.from({ length: 5 }, (R, T) => J + (te - J) / 4 * T);
    }
    const W = k(() => P(x.value)), F = k(() => P(v.value)), ee = (J) => l.formatX?.(J) ?? String(Math.round(J * 100) / 100), U = (J) => l.formatY?.(J) ?? String(Math.round(J * 100) / 100), Z = k(() => {
      if (!i.value)
        return null;
      const J = d.value[i.value.s], te = J?.points[i.value.p];
      return te ? { series: J, point: te } : null;
    });
    return (J, te) => (t(), n("div", {
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
        o("g", km, [
          (t(!0), n(z, null, L(F.value, (R, T) => (t(), n("line", {
            key: `gy-${T}`,
            x1: b.left,
            x2: b.left + M.value,
            y1: f(R),
            y2: f(R),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": T === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, $m))), 128))
        ]),
        o("g", wm, [
          (t(!0), n(z, null, L(F.value, (R, T) => (t(), n("text", {
            key: `ty-${T}`,
            x: b.left - 8,
            y: f(R) + 3,
            "text-anchor": "end"
          }, c(U(R)), 9, Cm))), 128)),
          (t(!0), n(z, null, L(W.value, (R, T) => (t(), n("text", {
            key: `tx-${T}`,
            x: g(R),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(ee(R)), 9, Sm))), 128))
        ]),
        (t(!0), n(z, null, L(d.value, (R, T) => (t(), n("g", {
          key: `s-${T}`
        }, [
          (t(!0), n(z, null, L(R.points, (Q, _) => (t(), n("circle", {
            key: `p-${T}-${_}`,
            cx: g(Q.x),
            cy: f(Q.y),
            r: B(Q),
            fill: p(T, R),
            "fill-opacity": m.value ? 0.55 : 0.85,
            stroke: p(T, R),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== T || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (G) => i.value = { s: T, p: _ },
            onMouseleave: te[0] || (te[0] = (G) => i.value = null)
          }, null, 40, Mm))), 128))
        ]))), 128))
      ], 8, ym)),
      Z.value ? (t(), V(Xe, {
        key: 0,
        label: Z.value.point.label ?? Z.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(Z.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${U(Z.value.point.y)}`,
        share: m.value && Z.value.point.r != null ? String(Z.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", Bm, [
        (t(!0), n(z, null, L(d.value, (R, T) => (t(), n("span", {
          key: `l-${T}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: p(T, R) }),
            "aria-hidden": "true"
          }, null, 4),
          N(" " + c(R.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), _m = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Pm = ["width", "height", "viewBox"], zm = ["points"], Am = ["x1", "y1", "x2", "y2"], Om = ["points", "fill", "stroke"], jm = ["cx", "cy", "fill", "onMouseenter"], Lm = ["x", "y", "text-anchor"], Vm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Dm = { class: "truncate" }, h4 = /* @__PURE__ */ A({
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
    ], r = k(
      () => l.series.map((f, S) => ({
        ...f,
        color: f.color ?? a[S % a.length]
      }))
    ), s = k(() => r.value[0]?.points.map((f) => f.label) ?? []), i = k(() => s.value.length), u = k(() => l.height), d = k(() => u.value / 2), p = k(() => u.value / 2 - 34), h = k(() => {
      const f = Math.max(...r.value.flatMap((P) => P.points.map((W) => W.value)), 0);
      if (f <= 0)
        return 1;
      const S = 10 ** Math.floor(Math.log10(f));
      return ([1, 2, 2.5, 5, 10].find((P) => f <= P * S) ?? 10) * S;
    });
    function m(f) {
      return f / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function b(f, S) {
      const B = m(f);
      return {
        x: d.value + Math.cos(B) * p.value * S,
        y: d.value + Math.sin(B) * p.value * S
      };
    }
    function M(f) {
      return Array.from({ length: i.value }, (S, B) => {
        const P = b(B, f);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = k(() => [0.25, 0.5, 0.75, 1].map((f) => ({ f, points: M(f) }))), C = k(
      () => r.value.map((f) => {
        const S = f.points.map((B) => Math.max(0, B.value) / h.value);
        return {
          name: f.name,
          color: f.color,
          values: f.points,
          outline: S.map((B, P) => {
            const W = b(P, B);
            return `${W.x.toFixed(2)},${W.y.toFixed(2)}`;
          }).join(" "),
          dots: S.map((B, P) => b(P, B))
        };
      })
    ), x = k(
      () => s.value.map((f, S) => {
        const B = m(S), P = d.value + Math.cos(B) * (p.value + 14), W = d.value + Math.sin(B) * (p.value + 14), F = Math.cos(B);
        return {
          label: f,
          x: P,
          y: W + 3,
          anchor: Math.abs(F) < 0.2 ? "middle" : F > 0 ? "start" : "end"
        };
      })
    ), v = q(null), g = (f) => l.format ? l.format(f) : new Intl.NumberFormat().format(f);
    return (f, S) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", _m, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L(w.value, (B) => (t(), n("polygon", {
          key: B.f,
          points: B.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, zm))), 128)),
        (t(!0), n(z, null, L(s.value, (B, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: b(P, 1).x,
          y2: b(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Am))), 128)),
        (t(!0), n(z, null, L(C.value, (B, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: B.outline,
            fill: B.color,
            "fill-opacity": "0.16",
            stroke: B.color,
            "stroke-width": "2"
          }, null, 8, Om),
          (t(!0), n(z, null, L(B.dots, (W, F) => (t(), n("circle", {
            key: F,
            cx: W.x,
            cy: W.y,
            r: "3",
            fill: B.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => v.value = {
              series: B.name,
              axis: s.value[F],
              value: B.values[F]?.value ?? 0
            },
            onMouseleave: S[0] || (S[0] = (ee) => v.value = null)
          }, null, 40, jm))), 128))
        ]))), 128)),
        (t(!0), n(z, null, L(x.value, (B, P) => (t(), n("text", {
          key: `l-${P}`,
          x: B.x,
          y: B.y,
          "text-anchor": B.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(B.label), 9, Lm))), 128))
      ], 8, Pm)),
      e.showLegend ? (t(), n("ul", Vm, [
        (t(!0), n(z, null, L(r.value, (B, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: B.color })
          }, null, 4),
          o("span", Dm, c(B.name), 1)
        ]))), 128))
      ])) : $("", !0),
      v.value ? (t(), V(Xe, {
        key: 1,
        label: `${v.value.series} — ${v.value.axis}`,
        value: g(v.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Tm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Em = ["width", "height", "viewBox"], Im = ["cx", "cy", "r"], Fm = ["d", "fill", "fill-opacity", "onMouseenter"], Nm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Rm = { class: "min-w-0 flex-1 truncate capitalize" }, Um = { class: "font-medium tabular-nums" }, b4 = /* @__PURE__ */ A({
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
    ], r = q(null), s = k(() => l.height), i = k(() => s.value / 2), u = k(() => s.value / 2 - 6), d = k(() => Math.max(...l.data.map((M) => Math.max(0, M.value)), 0)), p = k(() => {
      const M = l.data.length;
      if (M === 0 || d.value <= 0)
        return [];
      const w = Math.PI * 2 / M;
      return l.data.map((C, x) => {
        const v = Math.sqrt(Math.max(0, C.value) / d.value), g = u.value * v, f = x * w - Math.PI / 2, S = f + w;
        return {
          ...C,
          color: a[x % a.length],
          share: d.value === 0 ? 0 : C.value / d.value,
          path: h(i.value, f, S, g)
        };
      });
    });
    function h(M, w, C, x) {
      if (x <= 0)
        return "";
      if (C - w >= Math.PI * 2 - 1e-6)
        return `M${M - x},${M} A${x},${x} 0 1 1 ${M + x},${M} A${x},${x} 0 1 1 ${M - x},${M} Z`;
      const v = C - w > Math.PI ? 1 : 0, g = M + Math.cos(w) * x, f = M + Math.sin(w) * x, S = M + Math.cos(C) * x, B = M + Math.sin(C) * x;
      return `M${M},${M} L${g.toFixed(2)},${f.toFixed(2)} A${x.toFixed(2)},${x.toFixed(2)} 0 ${v} 1 ${S.toFixed(2)},${B.toFixed(2)} Z`;
    }
    const m = k(() => [0.5, 0.75, 1].map((M) => u.value * M)), b = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, w) => p.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Tm, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L(m.value, (C) => (t(), n("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Im))), 128)),
        (t(!0), n(z, null, L(p.value, (C, x) => (t(), n("path", {
          key: x,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === x ? 0.75 : 0.3,
          onMouseenter: (v) => r.value = x,
          onMouseleave: w[0] || (w[0] = (v) => r.value = null)
        }, null, 40, Fm))), 128))
      ], 8, Em)),
      e.showLegend ? (t(), n("ul", Nm, [
        (t(!0), n(z, null, L(p.value, (C, x) => (t(), n("li", {
          key: x,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: C.color })
          }, null, 4),
          o("span", Rm, c(C.label), 1),
          o("span", Um, c(b(C.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), V(Xe, {
        key: 1,
        label: p.value[r.value].label,
        value: b(p.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Hm = ["width", "height"], qm = ["x1", "x2", "y1", "y2"], Km = ["x", "y"], Gm = ["x", "y"], Wm = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Zm = ["x", "y", "width", "height", "fill", "fill-opacity"], Jm = ["d", "stroke"], Ym = ["cx", "cy", "fill"], Xm = ["x", "y"], Qm = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, ep = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, tp = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, ap = { class: "text-xs font-semibold tabular-nums" }, np = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, lp = { class: "text-muted-foreground" }, x4 = /* @__PURE__ */ A({
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
      i = new ResizeObserver((T) => {
        r.value = Math.max(160, T[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), he(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], p = k(
      () => l.bars.map((T, Q) => ({
        ...T,
        color: T.color ?? u[Q % u.length]
      }))
    ), h = k(
      () => l.lines.map((T, Q) => ({
        ...T,
        color: T.color ?? d[Q % d.length]
      }))
    ), m = k(
      () => p.value[0]?.points.map((T) => T.label) ?? h.value[0]?.points.map((T) => T.label) ?? []
    ), b = k(() => m.value.length), M = k(() => l.lineAxis === "right"), w = k(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = k(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function x(T) {
      const Q = Math.max(...T, 0);
      if (Q <= 0)
        return 1;
      const _ = 10 ** Math.floor(Math.log10(Q));
      return ([1, 2, 2.5, 5, 10].find((H) => Q <= H * _) ?? 10) * _;
    }
    const v = k(
      () => x([
        ...p.value.flatMap((T) => T.points.map((Q) => Q.value)),
        ...M.value ? [] : h.value.flatMap((T) => T.points.map((Q) => Q.value))
      ])
    ), g = k(
      () => M.value ? x(h.value.flatMap((T) => T.points.map((Q) => Q.value))) : v.value
    ), f = k(() => C.value.w / Math.max(1, b.value)), S = k(() => f.value * 0.6), B = k(() => S.value / Math.max(1, p.value.length));
    function P(T) {
      return w.value.left + T * f.value + f.value / 2;
    }
    const W = k(
      () => p.value.flatMap(
        (T, Q) => T.points.map((_, G) => {
          const H = Math.max(0, _.value) / v.value * C.value.h;
          return {
            x: P(G) - S.value / 2 + Q * B.value,
            y: w.value.top + C.value.h - H,
            w: Math.max(0, B.value - 2),
            h: H,
            color: T.color,
            index: G,
            name: T.name,
            value: _.value,
            label: _.label
          };
        })
      )
    ), F = k(
      () => h.value.map((T) => {
        const Q = T.points.map((_, G) => ({
          x: P(G),
          y: w.value.top + C.value.h - Math.max(0, _.value) / g.value * C.value.h,
          value: _.value
        }));
        return {
          ...T,
          pts: Q,
          d: Q.map((_, G) => `${G === 0 ? "M" : "L"}${_.x.toFixed(2)},${_.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((T) => ({
        y: w.value.top + C.value.h * T,
        left: v.value * (1 - T),
        right: g.value * (1 - T)
      }))
    ), U = k(() => Math.max(1, Math.ceil(b.value / 10)));
    function Z(T) {
      return T === b.value - 1 || T % U.value === 0;
    }
    const J = (T) => l.format ? l.format(T) : te(T);
    function te(T) {
      return Math.abs(T) >= 1e6 ? `${(T / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(T) >= 1e3 ? `${(T / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(T * 100) / 100);
    }
    const R = k(() => {
      if (s.value === null)
        return null;
      const T = s.value;
      return {
        label: m.value[T],
        rows: [
          ...p.value.map((Q) => ({
            name: Q.name,
            color: Q.color,
            value: Q.points[T]?.value ?? 0
          })),
          ...h.value.map((Q) => ({
            name: Q.name,
            color: Q.color,
            value: Q.points[T]?.value ?? 0
          }))
        ]
      };
    });
    return (T, Q) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      b.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Q[0] || (Q[0] = (_) => s.value = null)
        }, [
          (t(!0), n(z, null, L(ee.value, (_) => (t(), n("line", {
            key: `g-${_.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, qm))), 128)),
          (t(!0), n(z, null, L(ee.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: w.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(te(_.left)), 9, Km))), 128)),
          M.value ? (t(!0), n(z, { key: 0 }, L(ee.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - w.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(te(_.right)), 9, Gm))), 128)) : $("", !0),
          (t(!0), n(z, null, L(m.value, (_, G) => (t(), n("rect", {
            key: `hit-${G}`,
            x: w.value.left + G * f.value,
            y: w.value.top,
            width: f.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === G ? 0.4 : 0,
            onMouseenter: (H) => s.value = G
          }, null, 40, Wm))), 128)),
          (t(!0), n(z, null, L(W.value, (_, G) => (t(), n("rect", {
            key: `b-${G}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Zm))), 128)),
          (t(!0), n(z, null, L(F.value, (_, G) => (t(), n("g", {
            key: `l-${G}`
          }, [
            o("path", {
              d: _.d,
              fill: "none",
              stroke: _.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Jm),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Ym)) : $("", !0)
          ]))), 128)),
          (t(!0), n(z, null, L(m.value, (_, G) => fe((t(), n("text", {
            key: `x-${G}`,
            x: P(G),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(_), 9, Xm)), [
            [Le, Z(G)]
          ])), 128))
        ], 40, Hm)),
        R.value ? (t(), n("div", Qm, [
          o("p", ep, c(R.value.label), 1),
          (t(!0), n(z, null, L(R.value.rows, (_, G) => (t(), n("div", {
            key: G,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: _.color })
            }, null, 4),
            o("span", tp, c(_.name), 1),
            o("span", ap, c(J(_.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), n("div", np, [
          (t(!0), n(z, null, L([...p.value, ...h.value], (_, G) => (t(), n("span", {
            key: G,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: _.color })
            }, null, 4),
            o("span", lp, c(_.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), op = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, sp = { class: "text-muted-foreground" }, rp = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, ip = ["width", "height"], up = ["x", "y"], dp = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], cp = ["x", "y"], fp = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, mp = { class: "text-[11px] font-medium capitalize" }, pp = { class: "text-muted-foreground text-[11px] capitalize" }, vp = { class: "text-sm font-semibold tabular-nums" }, gp = { class: "text-muted-foreground text-xs font-normal" }, y4 = /* @__PURE__ */ A({
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
      i = new ResizeObserver((S) => {
        r.value = Math.max(160, S[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), he(() => i?.disconnect());
    const u = k(() => l.series[0]?.points.map((S) => S.label) ?? []), d = k(() => l.series.length), p = k(() => u.value.length), h = k(() => Math.min(140, Math.max(60, r.value * 0.16))), m = k(() => Math.max(1, r.value - h.value - 8)), b = k(() => m.value / Math.max(1, p.value)), M = k(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function w(S) {
      if (S === 0)
        return "var(--muted)";
      const B = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(S / B * 100)}%, var(--muted))`;
    }
    function C(S) {
      for (let B = 0; B < l.buckets.length; B++) {
        const P = l.buckets[B].max;
        if (P === void 0 || S < P)
          return B;
      }
      return l.buckets.length - 1;
    }
    const x = k(
      () => l.series.flatMap(
        (S, B) => S.points.map((P, W) => {
          const F = C(P.value);
          return {
            row: B,
            col: W,
            x: h.value + W * b.value,
            y: 4 + B * M.value,
            w: Math.max(1, b.value - 1),
            h: Math.max(1, M.value - 4),
            colour: w(F),
            label: P.label,
            value: P.value,
            rowName: S.name,
            bucketLabel: l.buckets[F].label
          };
        })
      )
    ), v = k(() => b.value < 2), g = k(() => s.value ? x.value.find((S) => S.row === s.value.row && S.col === s.value.col) ?? null : null), f = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S);
    return (S, B) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || p.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", op, [
          (t(!0), n(z, null, L(e.buckets, (P, W) => (t(), n("span", {
            key: W,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: w(W) })
            }, null, 4),
            o("span", sp, c(P.label), 1)
          ]))), 128))
        ]),
        v.value ? (t(), n("p", rp, c(p.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: B[0] || (B[0] = (P) => s.value = null)
        }, [
          (t(!0), n(z, null, L(e.series, (P, W) => (t(), n("text", {
            key: `r-${W}`,
            x: h.value - 10,
            y: 4 + W * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(P.name), 9, up))), 128)),
          (t(!0), n(z, null, L(x.value, (P, W) => (t(), n("rect", {
            key: W,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (F) => s.value = { row: P.row, col: P.col }
          }, null, 40, dp))), 128)),
          e.showColumnLabels && !v.value ? (t(!0), n(z, { key: 0 }, L(u.value, (P, W) => (t(), n("text", {
            key: `c-${W}`,
            x: h.value + W * b.value + b.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(P), 9, cp))), 128)) : $("", !0)
        ], 40, ip)),
        g.value ? (t(), n("div", fp, [
          o("p", mp, c(g.value.label), 1),
          o("p", pp, c(g.value.rowName), 1),
          o("p", vp, [
            N(c(f(g.value.value)) + " ", 1),
            o("span", gp, "(" + c(g.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), hp = ["viewBox"], bp = { key: 0 }, xp = ["id"], yp = ["stop-color"], kp = ["stop-color"], $p = ["d", "fill"], wp = ["d", "stroke"], qt = 100, He = 30, rt = /* @__PURE__ */ A({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = Math.random().toString(36).slice(2, 9), r = k(() => {
      const d = l.data.map((b) => b.value);
      if (d.length < 2)
        return [];
      const p = Math.min(...d), m = Math.max(...d) - p || 1;
      return d.map((b, M) => ({
        x: M / (d.length - 1) * qt,
        y: He - (b - p) / m * (He - 4) - 2
      }));
    });
    function s(d) {
      const p = d.length;
      if (p < 2)
        return "";
      const h = [], m = [];
      for (let w = 0; w < p - 1; w++)
        h[w] = d[w + 1].x - d[w].x, m[w] = h[w] === 0 ? 0 : (d[w + 1].y - d[w].y) / h[w];
      const b = [m[0]];
      for (let w = 1; w < p - 1; w++)
        if (m[w - 1] * m[w] <= 0)
          b[w] = 0;
        else {
          const C = 2 * h[w] + h[w - 1], x = h[w] + 2 * h[w - 1];
          b[w] = (C + x) / (C / m[w - 1] + x / m[w]);
        }
      b[p - 1] = m[p - 2];
      let M = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let w = 0; w < p - 1; w++) {
        const C = h[w] / 3;
        M += ` C${(d[w].x + C).toFixed(2)},${(d[w].y + b[w] * C).toFixed(2)} ${(d[w + 1].x - C).toFixed(2)},${(d[w + 1].y - b[w + 1] * C).toFixed(2)} ${d[w + 1].x.toFixed(2)},${d[w + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = k(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((p, h) => `${h === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
    }), u = k(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${He} L${d[0].x.toFixed(2)},${He} Z`;
    });
    return (d, p) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${qt} ${He}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", bp, [
        o("linearGradient", {
          id: `pk-spark-${y(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, yp),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, kp)
        ], 8, xp)
      ])) : $("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${y(a)})`
      }, null, 8, $p)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, wp)
    ], 12, hp)) : $("", !0);
  }
}), Cp = { class: "flex items-center gap-1 text-xs" }, Sp = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Mp = {
  key: 0,
  class: "text-muted-foreground truncate"
}, va = /* @__PURE__ */ A({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, a = k(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = k(
      () => a.value === null ? "text-muted-foreground" : a.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = k(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = k(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (u, d) => (t(), n("span", Cp, [
      o("span", {
        class: O(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Sp, c(s.value), 1),
        N(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Mp, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), Bp = ["aria-label"], Fe = /* @__PURE__ */ A({
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
    }, r = k(() => a[l.variant] ?? a.text), s = k(() => Math.max(1, Math.min(l.count, 50)));
    function i(u) {
      if (!(l.variant !== "text" || s.value === 1))
        return u === s.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: ne(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(z, null, L(s.value, (p) => (t(), n("span", {
        key: p,
        "aria-hidden": "true",
        class: O(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(p - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Bp));
  }
}), _p = ["data-collapsed"], Pp = { class: "flex flex-wrap items-start justify-between gap-2" }, zp = { class: "flex min-w-0 items-start gap-2" }, Ap = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Op = ["d"], jp = { class: "min-w-0" }, Lp = { class: "text-sm font-medium" }, Vp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Dp = { class: "flex shrink-0 items-center gap-1.5" }, Tp = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Ep = ["aria-pressed", "onClick"], Ip = ["aria-expanded", "aria-label", "title"], Fp = ["aria-label"], Np = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rp = ["d"], Up = /* @__PURE__ */ A({
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
    const l = e, a = Ma(), r = q(l.defaultCollapsed), s = k(() => !!l.icon && !a.icon), i = k(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", {
      class: O(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Pp, [
        o("div", zp, [
          K(u.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", Ap, [
              o("path", {
                d: y(ue)(e.icon)
              }, null, 8, Op)
            ])) : $("", !0)
          ]),
          o("div", jp, [
            o("p", Lp, c(e.label), 1),
            e.description ? (t(), n("p", Vp, c(e.description), 1)) : $("", !0),
            K(u.$slots, "trend")
          ])
        ]),
        o("div", Dp, [
          K(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Tp, [
            (t(!0), n(z, null, L(e.periods, (p) => (t(), n("button", {
              key: p.value,
              type: "button",
              class: O([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === p.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === p.value,
              onClick: (h) => u.$emit("update:period", p.value)
            }, c(p.label), 11, Ep))), 128))
          ])) : $("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: d[0] || (d[0] = (p) => r.value = !r.value)
          }, [
            (t(), n("svg", {
              class: O(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, Ip)) : $("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (p) => u.$emit("hide"))
          }, [
            (t(), n("svg", Np, [
              o("path", {
                d: y(ue)("eye-off")
              }, null, 8, Rp)
            ]))
          ], 8, Fp)) : $("", !0)
        ])
      ]),
      r.value ? $("", !0) : (t(), n("div", {
        key: 0,
        style: ne(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), V(Fe, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ne({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : K(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, _p));
  }
}), Hp = ["aria-pressed", "aria-label", "title"], qp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kp = ["d"], Gp = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Wp = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Zp = ["href"], Jp = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yp = ["d"], Xp = ["aria-label", "onClick"], Qp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ev = ["d"], tv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, av = ["d"], nv = {
  key: 0,
  class: "flex flex-col gap-1"
}, lv = ["onClick"], ov = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sv = ["d"], rv = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, iv = /* @__PURE__ */ A({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(!1), i = q(!1), u = k(
      () => a.catalog.filter((h) => !a.items.some((m) => m.id === h.id))
    );
    function d(h) {
      r(
        "update:items",
        a.items.filter((m) => m.id !== h)
      );
    }
    function p(h) {
      r("update:items", [...a.items, h]), i.value = !1;
    }
    return (h, m) => (t(), n(z, null, [
      I(Up, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: m[3] || (m[3] = (b) => r("hide"))
      }, {
        actions: j(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: m[0] || (m[0] = (b) => s.value = !s.value)
          }, [
            (t(), n("svg", qp, [
              o("path", {
                d: y(ue)(s.value ? "check" : "pencil")
              }, null, 8, Kp)
            ]))
          ], 8, Hp)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), n("div", Gp, [
            m[7] || (m[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: m[1] || (m[1] = (b) => i.value = !0)
            }, {
              default: j(() => [...m[6] || (m[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Wp, [
            (t(!0), n(z, null, L(e.items, (b) => (t(), n("div", {
              key: b.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: b.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Jp, [
                  o("path", {
                    d: y(ue)(b.icon)
                  }, null, 8, Yp)
                ])),
                N(" " + c(b.label), 1)
              ], 8, Zp),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${b.label}`,
                onClick: (M) => d(b.id)
              }, [
                (t(), n("svg", Qp, [
                  o("path", {
                    d: y(ue)("x")
                  }, null, 8, ev)
                ]))
              ], 8, Xp)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: m[2] || (m[2] = (b) => i.value = !0)
            }, [
              (t(), n("svg", tv, [
                o("path", {
                  d: y(ue)("plus")
                }, null, 8, av)
              ])),
              m[8] || (m[8] = N(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      I(We, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: m[5] || (m[5] = (b) => i.value = !1)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            onClick: m[4] || (m[4] = (b) => i.value = !1)
          }, {
            default: j(() => [...m[9] || (m[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          u.value.length ? (t(), n("ul", nv, [
            (t(!0), n(z, null, L(u.value, (b) => (t(), n("li", {
              key: b.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => p(b)
              }, [
                (t(), n("svg", ov, [
                  o("path", {
                    d: y(ue)(b.icon)
                  }, null, 8, sv)
                ])),
                N(" " + c(b.label), 1)
              ], 8, lv)
            ]))), 128))
          ])) : (t(), n("p", rv, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), uv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, dv = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, cv = { class: "relative w-full max-w-xl" }, fv = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mv = ["d"], pv = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, vv = ["data-slot"], gv = { class: "px-5 py-4" }, hv = { class: "mb-3 text-sm font-semibold" }, bv = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, xv = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yv = ["d"], kv = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, k4 = /* @__PURE__ */ A({
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
    const l = e, a = q(""), r = k(() => {
      const d = l.linkComponent;
      return typeof d == "string" ? d : Gt(d);
    }), s = qe({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = k(() => {
      const d = a.value.trim().toLowerCase();
      return l.sections.map((p) => ({
        ...p,
        links: d ? p.links.filter((h) => h.label.toLowerCase().includes(d)) : p.links
      })).filter((p) => p.links.length > 0);
    });
    return (d, p) => (t(), n("div", {
      class: O(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      o("header", null, [
        o("h1", uv, c(e.title), 1),
        e.description ? (t(), n("p", dv, c(e.description), 1)) : $("", !0)
      ]),
      o("div", cv, [
        (t(), n("svg", fv, [
          o("path", {
            d: y(ue)("search")
          }, null, 8, mv)
        ])),
        I(ge, {
          modelValue: a.value,
          "onUpdate:modelValue": p[0] || (p[0] = (h) => a.value = h),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), n("div", pv, [
        (t(!0), n(z, null, L(u.value, (h) => (t(), n("section", {
          key: h.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${h.key}`
        }, [
          o("div", gv, [
            o("h2", hv, c(h.title), 1),
            o("div", bv, [
              (t(!0), n(z, null, L(h.links, (m) => (t(), V(xe(i(m) ? "a" : r.value), {
                key: m.href + m.label,
                href: m.href,
                class: O(y(s)),
                target: i(m) ? "_blank" : void 0,
                rel: i(m) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), n("svg", xv, [
                    o("path", {
                      d: y(ue)(m.icon)
                    }, null, 8, yv)
                  ])),
                  N(" " + c(m.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, vv))), 128))
      ])) : (t(), n("p", kv, ' Nothing matches "' + c(a.value) + '". ', 1))
    ], 2));
  }
}), $v = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, wv = { class: "flex flex-1 flex-col gap-1 p-4" }, Cv = { class: "text-muted-foreground relative text-xs font-medium" }, Sv = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Mv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Bv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, _v = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, $4 = /* @__PURE__ */ A({
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
    return (a, r) => (t(), n("div", $v, [
      o("div", wv, [
        o("p", Cv, c(e.label), 1),
        e.loading ? (t(), V(Fe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Sv, " Could not load ")) : (t(), n("span", Mv, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), V(va, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", Bv, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", _v, [
        I(rt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), Pv = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, zv = { class: "flex flex-col gap-1 p-4" }, Av = { class: "flex items-start justify-between gap-2" }, Ov = { class: "text-sm font-medium" }, jv = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Lv = { class: "mt-1 flex flex-wrap items-center gap-2" }, Vv = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Dv = {
  key: 0,
  class: "-mb-px"
}, lt = /* @__PURE__ */ A({
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
    const l = e, a = k(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = k(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = k(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, u) => (t(), n("div", Pv, [
      o("div", zv, [
        o("div", Av, [
          o("p", Ov, c(e.label), 1),
          K(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", jv, c(e.caption), 1)) : $("", !0),
        o("div", Lv, [
          e.loading ? (t(), V(Fe, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Vv, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: O(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Dv, [
        I(rt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), Tv = { class: "relative flex flex-col gap-2" }, Ev = ["aria-label"], Iv = ["onMouseenter"], Fv = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Nv = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Rv = { class: "truncate" }, Uv = { class: "text-sm font-semibold tabular-nums" }, w4 = /* @__PURE__ */ A({
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
    ], r = k(() => l.segments.reduce((h, m) => h + Math.max(0, m.value), 0)), s = k(() => Math.max(l.total ?? r.value, r.value, 1)), i = k(
      () => l.segments.map((h, m) => {
        const b = Math.max(0, h.value) / s.value;
        return {
          ...h,
          color: h.color ?? a[m % a.length],
          share: b,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: h.value > 0 ? `max(2px, ${(b * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h), d = q(null), p = (h) => `${(h * 100).toFixed(h > 0 && h < 0.01 ? 1 : 0)}%`;
    return (h, m) => (t(), n("div", Tv, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((b) => `${b.label} ${u(b.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, L(i.value, (b, M) => (t(), n("span", {
          key: M,
          class: O(["h-full transition-all", [
            M === 0 ? "rounded-l-full" : "",
            M === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: b.width,
            background: b.color,
            opacity: d.value === null || d.value === M ? 1 : 0.4
          }),
          onMouseenter: (w) => d.value = M,
          onMouseleave: m[0] || (m[0] = (w) => d.value = null)
        }, null, 46, Iv))), 128))
      ], 12, Ev),
      e.showLegend ? (t(), n("div", Fv, [
        (t(!0), n(z, null, L(i.value, (b, M) => (t(), n("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", Nv, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: b.color })
            }, null, 4),
            o("span", Rv, c(b.label), 1)
          ]),
          o("span", Uv, c(u(b.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      d.value !== null ? (t(), V(Xe, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: p(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Hv = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, qv = ["data-heading"], Kv = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Gv = { class: "text-muted-foreground truncate" }, Wv = ["aria-label"], C4 = /* @__PURE__ */ A({
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
    }, s = k(
      () => l.rows.map((i) => {
        if (!i.bar || i.bar.segments.length === 0)
          return { ...i, segments: [] };
        const u = i.bar.segments.reduce((p, h) => p + Math.max(0, h.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
        return {
          ...i,
          segments: i.bar.segments.map((p) => ({
            ...p,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: p.value > 0 ? `max(2px, ${(Math.max(0, p.value) / d * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, u) => (t(), n("div", Hv, [
      (t(!0), n(z, null, L(s.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: O(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, c(d.label), 3)) : (t(), n("div", Kv, [
          o("span", Gv, c(d.label), 1),
          o("span", {
            class: O(["shrink-0 font-medium tabular-nums", d.tone ? a[d.tone] : "text-foreground"])
          }, c(d.value), 3)
        ])),
        d.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((p) => `${p.label} ${p.value}`).join(", ")
        }, [
          (t(!0), n(z, null, L(d.segments, (p, h) => (t(), n("span", {
            key: h,
            class: O(["h-full transition-all", r[p.tone ?? "neutral"]]),
            style: ne({ width: p.width })
          }, null, 6))), 128))
        ], 8, Wv)) : $("", !0)
      ], 8, qv))), 128))
    ]));
  }
}), Zv = {
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
}, Jv = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Yv(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Xv(e, l) {
  return l || (e ? Zv[Yv(e)] ?? "neutral" : "neutral");
}
function Qv(e, l) {
  return Jv[Xv(e, l)];
}
const be = /* @__PURE__ */ A({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = k(() => Qv(l.status, l.tone));
    return (r, s) => (t(), V(Ke, {
      variant: a.value,
      class: O(l.class)
    }, {
      default: j(() => [
        K(r.$slots, "default", {}, () => [
          N(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), eg = ["data-layout"], tg = ["src", "alt"], ag = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, ng = ["src"], lg = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, og = ["onMouseenter"], sg = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, rg = { class: "min-w-0" }, ig = { class: "truncate text-sm font-medium" }, ug = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, dg = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, cg = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, fg = { class: "min-w-0" }, mg = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, pg = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, vg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gg = ["d"], hg = ["aria-label"], bg = /* @__PURE__ */ A({
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
    function u(x) {
      if (typeof x != "string")
        return null;
      const v = x.trim();
      return v === "" ? null : /^(https?:)?\/\//i.test(v) ? v : null;
    }
    const d = k(() => {
      const x = [r.item.image, ...r.item.images ?? []].map(u).filter((v) => v !== null);
      return [...new Set(x)];
    }), p = k(() => d.value[i.value] ?? d.value[0] ?? null), h = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((x) => x[0]?.toUpperCase() ?? "").join("")
    ), m = k(() => {
      const x = r.item.progress;
      if (!x)
        return null;
      const v = Math.max(x.total ?? 100, x.value, 1);
      return `${Math.min(100, Math.max(0, x.value / v * 100)).toFixed(2)}%`;
    }), b = k(() => d.value.length > 1 ? d.value[1] : null), M = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(x) {
      x.stopPropagation(), s("cart", r.item.key);
    }
    return (x, v) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: O(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: v[0] || (v[0] = (g) => s("select", e.item.key)),
      onKeydown: v[1] || (v[1] = Ba(me((g) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: v[2] || (v[2] = (g) => i.value = 0)
    }, [
      o("div", {
        class: O([
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
        }, null, 8, tg)) : (t(), n("span", ag, c(h.value), 1)),
        e.layout === "grid" && b.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: b.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, ng)) : $("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", lg, [
          (t(!0), n(z, null, L(d.value, (g, f) => (t(), n("span", {
            key: f,
            class: O(["size-1.5 rounded-full", f === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (S) => i.value = f
          }, null, 42, og))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: O(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", sg, [
          o("div", rg, [
            o("p", ig, c(e.item.label), 1),
            e.item.caption ? (t(), n("p", ug, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), n("p", dg, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), V(be, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", cg, [
          o("div", fg, [
            e.item.price ? (t(), n("p", mg, c(e.item.price), 1)) : $("", !0),
            w.value ? (t(), n("p", pg, c(w.value), 1)) : $("", !0)
          ]),
          M.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), n("svg", vg, [
              o("path", {
                d: y(ue)("cart")
              }, null, 8, gg)
            ]))
          ])) : $("", !0)
        ]),
        m.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: O(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: ne({ width: m.value })
          }, null, 6)
        ], 8, hg)) : $("", !0)
      ], 2)
    ], 42, eg));
  }
});
function xg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function yg(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function kg(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const $g = ["data-featured", "data-recommended"], wg = { class: "flex flex-col gap-1" }, Cg = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Sg = { key: 0 }, Mg = { key: 1 }, Bg = { key: 2 }, _g = { key: 3 }, Pg = { class: "text-sm font-semibold" }, zg = { class: "flex items-baseline gap-1" }, Ag = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Og = { class: "text-muted-foreground text-sm" }, jg = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Lg = { class: "text-muted-foreground mt-1 text-xs" }, Vg = { class: "flex flex-1 flex-col gap-2 text-sm" }, Dg = { class: "flex min-w-0 items-start gap-2" }, Tg = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Eg = ["d"], Ig = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Fg = ["d"], Ng = { class: "capitalize" }, Rg = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Ug = { class: "text-foreground font-medium" }, Hg = { class: "mt-auto flex gap-2 pt-2" }, qg = /* @__PURE__ */ A({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(
      () => a.plan.priceFormatted ?? String(a.plan.price)
    ), i = k(
      () => !!(a.plan.featured || a.plan.recommended)
    ), u = k(() => {
      const p = a.plan.perks ?? {};
      return Object.entries(p).map(([h, m]) => ({
        key: h,
        label: h.replace(/_/g, " "),
        granted: kg(m.value),
        display: yg(m.value)
      }));
    }), d = k(() => a.plan.extraPerks ?? []);
    return (p, h) => (t(), n("article", {
      class: O(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", wg, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", Cg, [
          e.plan.recommended ? (t(), n("span", Sg, "Recommended")) : e.plan.featured ? (t(), n("span", Mg, "Featured")) : $("", !0),
          e.plan.trial ? (t(), n("span", Bg, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), n("span", _g, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", Pg, c(e.plan.name), 1),
        o("p", zg, [
          o("span", Ag, c(s.value), 1),
          o("span", Og, c(y(xg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", jg, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", Lg, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", Vg, [
        (t(!0), n(z, null, L(u.value, (m) => (t(), n("li", {
          key: m.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", Dg, [
            o("span", {
              class: O(["mt-0.5 shrink-0", m.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              m.granted ? (t(), n("svg", Tg, [
                o("path", {
                  d: y(ue)("check")
                }, null, 8, Eg)
              ])) : (t(), n("svg", Ig, [
                o("path", {
                  d: y(ue)("x")
                }, null, 8, Fg)
              ]))
            ], 2),
            o("span", Ng, c(m.label), 1)
          ]),
          m.display ? (t(), n("span", Rg, c(m.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), n(z, null, L(d.value, (m, b) => (t(), n("li", {
          key: `extra-${b}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(m.key), 1),
          o("span", Ug, c(m.value), 1)
        ]))), 128))
      ]),
      o("footer", Hg, [
        I(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: h[0] || (h[0] = (m) => r("edit", e.plan.id))
        }, {
          default: j(() => [...h[2] || (h[2] = [
            N(" Edit ", -1)
          ])]),
          _: 1
        }),
        I(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: h[1] || (h[1] = (m) => r("delete", e.plan.id))
        }, {
          default: j(() => [...h[3] || (h[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, $g));
  }
}), Kg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Gg = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Wg = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Zg = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Jg = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, S4 = /* @__PURE__ */ A({
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
      class: O(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-grid"
    }, [
      o("header", Kg, [
        o("div", null, [
          e.title ? (t(), n("h1", Gg, c(e.title), 1)) : $("", !0),
          e.description ? (t(), n("p", Wg, c(e.description), 1)) : $("", !0)
        ]),
        I(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: j(() => [...s[3] || (s[3] = [
            N("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", Zg, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", Jg, [
        (t(!0), n(z, null, L(e.plans, (i) => (t(), V(qg, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => a("edit", u)),
          onDelete: s[2] || (s[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Yg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Xg = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Qg = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, eh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, th = { class: "space-y-1.5" }, ah = { class: "space-y-1.5" }, nh = { class: "space-y-1.5" }, lh = { class: "space-y-1.5" }, oh = { class: "space-y-1.5" }, sh = { class: "flex items-center gap-3 text-sm" }, rh = { class: "flex items-center gap-3 text-sm" }, ih = { class: "flex items-center gap-3 text-sm" }, uh = {
  key: 0,
  class: "space-y-1.5"
}, dh = { class: "flex items-center gap-3 text-sm" }, ch = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, fh = { class: "space-y-1.5" }, mh = ["value"], ph = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, vh = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, gh = ["id", "value", "onInput"], hh = { class: "space-y-2" }, bh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, xh = ["d"], yh = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", pt = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", M4 = /* @__PURE__ */ A({
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
    }), r = e, s = l, i = Ge(a());
    function u(v, g) {
      const f = i.perks?.[v]?.value;
      return f ?? g;
    }
    function d(v, g, f) {
      const S = i.perks?.[v];
      i.perks = {
        ...i.perks ?? {},
        [v]: {
          value: g,
          overview: f ?? S?.overview ?? ""
        }
      };
    }
    function p(v, g) {
      const f = i.perks?.[v];
      i.perks = {
        ...i.perks ?? {},
        [v]: {
          value: f?.value ?? (v === "modules" ? [] : 0),
          overview: g
        }
      };
    }
    function h(v) {
      const g = v ? { ...a(), ...v } : a();
      i.id = g.id, i.name = g.name, i.shortDescription = g.shortDescription ?? "", i.description = g.description ?? "", i.days = g.days, i.price = g.price, i.featured = g.featured ?? !1, i.recommended = g.recommended ?? !1, i.trial = g.trial ?? !1, i.trialDays = g.trialDays ?? 0, i.active = g.active ?? !0, i.perks = { ...g.perks ?? {} }, i.extraPerks = [...g.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    h(r.plan), ce(
      () => r.plan,
      (v) => h(v),
      { deep: !0 }
    );
    const m = k({
      get: () => {
        const v = u("modules", []);
        return Array.isArray(v) ? v.map(String) : [];
      },
      set: (v) => {
        d("modules", M(v.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), b = k(
      () => r.modules.map((v) => ({ value: v.key, label: v.label }))
    );
    function M(v) {
      const g = Object.fromEntries(r.modules.map((B) => [B.key, B])), f = new Set(v);
      for (const B of r.modules)
        if (!f.has(B.key))
          for (const P of B.children ?? [])
            f.delete(P);
      let S = !0;
      for (; S; ) {
        S = !1;
        for (const B of [...f])
          for (const P of g[B]?.requires ?? [])
            f.has(P) || (f.add(P), S = !0);
      }
      return [...f];
    }
    function w() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C(v) {
      i.extraPerks = (i.extraPerks ?? []).filter((g, f) => f !== v);
    }
    function x() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((v) => v.key.trim() !== "")
      });
    }
    return (v, g) => (t(), n("form", {
      class: O(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-editor",
      onSubmit: me(x, ["prevent"])
    }, [
      o("header", Yg, [
        o("div", null, [
          o("h1", Xg, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          g[13] || (g[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        I(se, {
          type: "button",
          variant: "outline",
          onClick: g[0] || (g[0] = (f) => s("cancel"))
        }, {
          default: j(() => [...g[14] || (g[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", Qg, [
        o("section", eh, [
          g[26] || (g[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", th, [
            I(ye, { for: "plan-name" }, {
              default: j(() => [...g[15] || (g[15] = [
                N("Plan name", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": g[1] || (g[1] = (f) => i.name = f),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", ah, [
            I(ye, { for: "plan-short" }, {
              default: j(() => [...g[16] || (g[16] = [
                N("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": g[2] || (g[2] = (f) => i.shortDescription = f),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", nh, [
            I(ye, { for: "plan-description" }, {
              default: j(() => [...g[17] || (g[17] = [
                N("Plan description", -1)
              ])]),
              _: 1
            }),
            fe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": g[3] || (g[3] = (f) => i.description = f),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: O(pt)
            }, null, 512), [
              [ke, i.description]
            ])
          ]),
          o("div", lh, [
            I(ye, { for: "plan-days" }, {
              default: j(() => [...g[18] || (g[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            fe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": g[4] || (g[4] = (f) => i.days = f),
              class: O(yh)
            }, [...g[19] || (g[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                De,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", oh, [
            I(ye, { for: "plan-price" }, {
              default: j(() => [...g[20] || (g[20] = [
                N("Price", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": g[5] || (g[5] = (f) => i.price = Number(f))
            }, null, 8, ["model-value"])
          ]),
          o("label", sh, [
            I(y(Te), {
              checked: !!i.featured,
              "onUpdate:checked": g[6] || (g[6] = (f) => i.featured = f)
            }, null, 8, ["checked"]),
            g[21] || (g[21] = N(" Featured ", -1))
          ]),
          o("label", rh, [
            I(y(Te), {
              checked: !!i.recommended,
              "onUpdate:checked": g[7] || (g[7] = (f) => i.recommended = f)
            }, null, 8, ["checked"]),
            g[22] || (g[22] = N(" Recommended ", -1))
          ]),
          o("label", ih, [
            I(y(Te), {
              checked: !!i.trial,
              "onUpdate:checked": g[8] || (g[8] = (f) => i.trial = f)
            }, null, 8, ["checked"]),
            g[23] || (g[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", uh, [
            I(ye, { for: "plan-trial-days" }, {
              default: j(() => [...g[24] || (g[24] = [
                N("Trial days", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": g[9] || (g[9] = (f) => i.trialDays = Number(f))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", dh, [
            I(y(Te), {
              checked: i.active !== !1,
              "onUpdate:checked": g[10] || (g[10] = (f) => i.active = f)
            }, null, 8, ["checked"]),
            g[25] || (g[25] = N(" Active ", -1))
          ]),
          I(se, {
            type: "submit",
            disabled: e.processing
          }, {
            default: j(() => [
              N(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", ch, [
          g[33] || (g[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", fh, [
            I(ye, null, {
              default: j(() => [...g[27] || (g[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            I(zt, {
              modelValue: m.value,
              "onUpdate:modelValue": g[11] || (g[11] = (f) => m.value = f),
              options: b.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            I(ye, { for: "plan-modules-overview" }, {
              default: j(() => [...g[28] || (g[28] = [
                N("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: O(pt),
              onInput: g[12] || (g[12] = (f) => p(
                "modules",
                f.target.value
              ))
            }, null, 40, mh)
          ]),
          (t(!0), n(z, null, L(e.limits, (f) => (t(), n("div", {
            key: f.key,
            class: "space-y-1.5"
          }, [
            f.kind === "toggle" ? (t(), n("label", ph, [
              I(y(Te), {
                checked: !!u(f.key, !1),
                "onUpdate:checked": (S) => d(
                  f.key,
                  S,
                  i.perks?.[f.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + c(f.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              I(ye, {
                for: `plan-limit-${f.key}`
              }, {
                default: j(() => [
                  N(c(f.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              f.hint ? (t(), n("p", vh, c(f.hint), 1)) : $("", !0),
              I(ge, {
                id: `plan-limit-${f.key}`,
                "model-value": Number(u(f.key, 0)),
                type: "number",
                step: f.step ?? 1,
                required: "",
                "onUpdate:modelValue": (S) => d(
                  f.key,
                  Number(S),
                  i.perks?.[f.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              g[29] || (g[29] = o("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            I(ye, {
              for: `plan-overview-${f.key}`
            }, {
              default: j(() => [...g[30] || (g[30] = [
                N("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${f.key}`,
              value: i.perks?.[f.key]?.overview ?? "",
              class: O(pt),
              onInput: (S) => p(
                f.key,
                S.target.value
              )
            }, null, 40, gh)
          ]))), 128)),
          o("div", hh, [
            g[32] || (g[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, L(i.extraPerks ?? [], (f, S) => (t(), n("div", {
              key: S,
              class: "flex items-center gap-2"
            }, [
              I(ge, {
                modelValue: f.key,
                "onUpdate:modelValue": (B) => f.key = B,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(ge, {
                modelValue: f.value,
                "onUpdate:modelValue": (B) => f.value = B,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (B) => C(S)
              }, {
                default: j(() => [
                  (t(), n("svg", bh, [
                    o("path", {
                      d: y(ue)("x")
                    }, null, 8, xh)
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
              default: j(() => [...g[31] || (g[31] = [
                N(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), kh = { class: "flex flex-col gap-4" }, $h = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, wh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Ch = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Sh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Mh = ["d"], Bh = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, _h = ["aria-pressed"], Ph = ["aria-pressed"], zh = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ah = ["aria-label"], Oh = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, jh = ["aria-pressed", "onClick"], Lh = ["aria-label"], Vh = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Dh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Th = ["data-slot"], Eh = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Ih = { class: "text-muted-foreground text-xs tabular-nums" }, Fh = { class: "flex items-center gap-2" }, Nh = ["disabled"], Rh = ["disabled"], Lt = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(""), i = Ze(e, "modelValue"), u = Ge({}), d = Ge({});
    ce(s, () => b());
    function p(F) {
      const ee = F.trim();
      if (ee === "")
        return null;
      const U = Number(ee);
      return Number.isFinite(U) ? U : null;
    }
    function h() {
      const F = {};
      for (const [ee, U] of Object.entries(d))
        F[ee] = { min: p(U.min), max: p(U.max) };
      return F;
    }
    function m() {
      return { query: s.value, selected: { ...u }, ranges: h() };
    }
    function b() {
      r("filter", m());
    }
    function M(F, ee) {
      u[F] = u[F] === ee ? null : ee, b();
    }
    function w(F) {
      return d[F] ?? { min: "", max: "" };
    }
    function C(F, ee, U) {
      const Z = d[F] ?? { min: "", max: "" };
      d[F] = { ...Z, [ee]: U }, b();
    }
    function x(F) {
      F.key === "Enter" && (F.preventDefault(), r("scan", s.value.trim()));
    }
    const v = k(() => a.facets.filter((F) => (F.kind ?? "chips") === "chips")), g = k(() => a.facets.filter((F) => F.kind === "range")), f = k(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), S = q(1);
    ce(
      () => a.items.map((F) => F.key).join(","),
      () => {
        S.value = 1;
      }
    );
    const B = k(() => {
      const F = a.pageSize;
      return !F || F < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / F));
    }), P = k(() => {
      const F = a.pageSize;
      if (!F || F < 1)
        return a.items;
      const ee = (S.value - 1) * F;
      return a.items.slice(ee, ee + F);
    });
    function W(F) {
      S.value = Math.min(B.value, Math.max(1, F));
    }
    return (F, ee) => (t(), n("div", kh, [
      f.value ? (t(), n("div", $h, [
        o("div", wh, [
          e.searchable ? (t(), n("div", Ch, [
            (t(), n("svg", Sh, [
              o("path", {
                d: y(ue)("search")
              }, null, 8, Mh)
            ])),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (U) => s.value = U),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: x
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : $("", !0),
          K(F.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Bh, [
            o("button", {
              type: "button",
              class: O([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (U) => i.value = "grid")
            }, " Tiles ", 10, _h),
            o("button", {
              type: "button",
              class: O([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (U) => i.value = "list")
            }, " List ", 10, Ph)
          ])) : $("", !0)
        ]),
        v.value.length || g.value.length ? (t(), n("div", zh, [
          (t(!0), n(z, null, L(v.value, (U) => (t(), n("div", {
            key: U.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": U.label ?? U.key
          }, [
            U.label ? (t(), n("span", Oh, c(U.label), 1)) : $("", !0),
            (t(!0), n(z, null, L(U.options ?? [], (Z) => (t(), n("button", {
              key: Z.value,
              type: "button",
              class: O([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[U.key] === Z.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[U.key] === Z.value ? "true" : "false",
              onClick: (J) => M(U.key, Z.value)
            }, c(Z.label), 11, jh))), 128))
          ], 8, Ah))), 128)),
          (t(!0), n(z, null, L(g.value, (U) => (t(), n("div", {
            key: U.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": U.label ?? U.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Vh, c(U.label ?? U.key), 1),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${U.label ?? U.key} from`,
              "model-value": w(U.key).min,
              "onUpdate:modelValue": (Z) => C(U.key, "min", String(Z))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${U.label ?? U.key} to`,
              "model-value": w(U.key).max,
              "onUpdate:modelValue": (Z) => C(U.key, "max", String(Z))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Lh))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), n("p", Dh, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: O(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, L(P.value, (U) => (t(), V(bg, {
          key: U.key,
          item: U,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (Z) => r("select", Z)),
          onCart: ee[4] || (ee[4] = (Z) => r("cart", Z))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Th)),
      e.pageSize && B.value > 1 ? (t(), n("div", Eh, [
        o("p", Ih, " Page " + c(S.value) + " of " + c(B.value), 1),
        o("div", Fh, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value <= 1,
            onClick: ee[5] || (ee[5] = (U) => W(S.value - 1))
          }, " Previous ", 8, Nh),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value >= B.value,
            onClick: ee[6] || (ee[6] = (U) => W(S.value + 1))
          }, " Next ", 8, Rh)
        ])
      ])) : $("", !0)
    ]));
  }
}), Uh = ["aria-label"], Hh = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, qh = { class: "min-w-0" }, Kh = { class: "text-base font-semibold" }, Gh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Wh = { class: "flex shrink-0 items-center gap-2" }, Zh = { class: "min-h-0 flex-1 overflow-y-auto" }, Jh = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Vt = /* @__PURE__ */ A({
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
    function d(p) {
      if (!a.open)
        return;
      if (p.key === "Escape") {
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
      const m = h[0], b = h[h.length - 1];
      p.shiftKey && document.activeElement === m ? (p.preventDefault(), b.focus()) : !p.shiftKey && document.activeElement === b && (p.preventDefault(), m.focus());
    }
    return ce(
      () => a.open,
      async (p) => {
        if (p) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Be(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), he(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (p, h) => (t(), V(Ne, { to: "body" }, [
      I(je, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: h[0] || (h[0] = (m) => r("close"))
          })) : $("", !0)
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
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: O(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", Hh, [
              o("div", qh, [
                o("h2", Kh, c(e.title), 1),
                e.description ? (t(), n("p", Gh, c(e.description), 1)) : $("", !0)
              ]),
              o("div", Wh, [
                K(p.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: h[1] || (h[1] = (m) => r("close"))
                }, [...h[2] || (h[2] = [
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
            o("div", Zh, [
              K(p.$slots, "default")
            ]),
            p.$slots.footer ? (t(), n("footer", Jh, [
              K(p.$slots, "footer")
            ])) : $("", !0)
          ], 10, Uh)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Pe() {
  return { query: "", selected: {}, ranges: {} };
}
function Yh(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Xh(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function Dt(e, l) {
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
    if (!Xh(Yh(e, r), s))
      return !1;
  return !0;
}
function Qh(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function ot(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const eb = { class: "flex flex-col gap-6 p-4" }, tb = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, ab = { class: "text-sm font-semibold" }, nb = { class: "flex flex-wrap items-center gap-1.5" }, lb = ["aria-pressed", "onClick"], ob = { class: "text-sm font-semibold" }, sb = { class: "flex flex-wrap items-center gap-1.5" }, rb = { key: 0 }, ga = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(""), i = Ge({}), u = Ge({}), d = k(
      () => a.facets.filter((B) => (B.kind ?? "chips") === "chips")
    ), p = k(() => a.facets.filter((B) => B.kind === "range"));
    function h(B) {
      return B == null ? "" : String(B);
    }
    function m() {
      s.value = a.applied.query ?? "";
      for (const B of Object.keys(i))
        delete i[B];
      for (const [B, P] of Object.entries(a.applied.selected ?? {}))
        i[B] = P;
      for (const B of Object.keys(u))
        delete u[B];
      for (const [B, P] of Object.entries(a.applied.ranges ?? {}))
        u[B] = { min: h(P.min), max: h(P.max) };
    }
    ce(
      () => a.open,
      (B) => {
        B && m();
      }
    );
    function b(B) {
      const P = B.trim();
      if (P === "")
        return null;
      const W = Number(P);
      return Number.isFinite(W) ? W : null;
    }
    function M() {
      const B = {};
      for (const [P, W] of Object.entries(u))
        B[P] = { min: b(W.min), max: b(W.max) };
      return B;
    }
    function w() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: M()
      };
    }
    const C = k(() => {
      let B = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const P of Object.values(i))
        P && (B += 1);
      for (const P of Object.values(M()))
        (P.min !== null || P.max !== null) && (B += 1);
      return B;
    });
    function x(B, P) {
      i[B] = i[B] === P ? null : P;
    }
    function v(B) {
      return u[B] ?? { min: "", max: "" };
    }
    function g(B, P, W) {
      const F = u[B] ?? { min: "", max: "" };
      u[B] = { ...F, [P]: W };
    }
    function f() {
      r("apply", w());
    }
    function S() {
      s.value = "";
      for (const B of Object.keys(i))
        i[B] = null;
      for (const B of Object.keys(u))
        u[B] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Pe(), query: a.applied.query } : Pe()
      );
    }
    return (B, P) => (t(), V(Vt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (W) => r("close"))
    }, {
      footer: j(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: S
        }, " Reset all "),
        I(se, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (W) => r("close"))
        }, {
          default: j(() => [...P[5] || (P[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        I(se, {
          size: "sm",
          onClick: f
        }, {
          default: j(() => [
            P[6] || (P[6] = N(" Apply", -1)),
            C.value ? (t(), n("span", rb, " (" + c(C.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", eb, [
          e.hideSearch ? $("", !0) : (t(), n("label", tb, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (W) => s.value = W),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, L(d.value, (W) => (t(), n("section", {
            key: W.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", ab, c(W.label ?? W.key), 1),
            o("div", nb, [
              (t(!0), n(z, null, L(W.options ?? [], (F) => (t(), n("button", {
                key: F.value,
                type: "button",
                class: O([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[W.key] === F.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[W.key] === F.value ? "true" : "false",
                onClick: (ee) => x(W.key, F.value)
              }, c(F.label), 11, lb))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, L(p.value, (W) => (t(), n("section", {
            key: W.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", ob, c(W.label ?? W.key), 1),
            o("div", sb, [
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${W.label ?? W.key} from`,
                "model-value": v(W.key).min,
                "onUpdate:modelValue": (F) => g(W.key, "min", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${W.label ?? W.key} to`,
                "model-value": v(W.key).max,
                "onUpdate:modelValue": (F) => g(W.key, "max", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), ib = ["aria-disabled"], ub = ["disabled"], db = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, cb = ["d"], fb = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, mb = ["disabled"], pb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, vb = ["d"], gb = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = Ze(e, "modelValue"), r = l, s = k(() => a.value <= e.min), i = k(() => e.max !== null && a.value >= e.max);
    function u(d) {
      if (e.disabled)
        return;
      const p = a.value + d;
      p < e.min || e.max !== null && p > e.max || (a.value = p, d < 0 ? r("decrease", p) : r("increase", p));
    }
    return (d, p) => (t(), n("div", {
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
        onClick: p[0] || (p[0] = (h) => u(-1))
      }, [
        (t(), n("svg", db, [
          o("path", {
            d: y(ue)("minus")
          }, null, 8, cb)
        ]))
      ], 8, ub),
      o("span", fb, c(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: p[1] || (p[1] = (h) => u(1))
      }, [
        (t(), n("svg", pb, [
          o("path", {
            d: y(ue)("plus")
          }, null, 8, vb)
        ]))
      ], 8, mb)
    ], 8, ib));
  }
}), hb = { class: "divide-border flex flex-col divide-y" }, bb = { class: "min-w-0" }, xb = { class: "truncate text-sm font-medium" }, yb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, kb = { class: "flex shrink-0 items-center gap-2 text-sm" }, $b = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, wb = {
  key: 2,
  class: "font-medium tabular-nums"
}, Cb = ["aria-label", "onClick"], Sb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Mb = ["d"], Bb = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("div", hb, [
      (t(!0), n(z, null, L(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", bb, [
          o("p", xb, c(u.label), 1),
          u.detail ? (t(), n("p", yb, c(u.detail), 1)) : $("", !0)
        ]),
        o("div", kb, [
          e.editable ? (t(), V(gb, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", $b, " ×" + c(u.qty), 1)) : $("", !0),
          u.amount ? (t(), n("span", wb, c(u.amount), 1)) : $("", !0),
          u.status ? (t(), V(be, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : $("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => a("remove", u.key)
          }, [
            (t(), n("svg", Sb, [
              o("path", {
                d: y(ue)("trash")
              }, null, 8, Mb)
            ]))
          ], 8, Cb)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), _b = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Pb = { class: "border-b px-4 py-3" }, zb = { class: "text-sm font-medium" }, Ab = { class: "flex-1 px-4 py-3" }, Ob = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, jb = { class: "text-foreground block font-medium" }, Lb = { class: "mt-1 block" }, Vb = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Db = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Tb = { class: "tabular-nums" }, Eb = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Ib = { class: "text-muted-foreground" }, Fb = {
  key: 0,
  class: "tabular-nums"
}, Nb = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Rb = { class: "text-muted-foreground" }, Ub = { class: "tabular-nums" }, Hb = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, qb = { class: "tabular-nums" }, Kb = {
  key: 4,
  class: "pt-1"
}, Gb = /* @__PURE__ */ A({
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
    return (r, s) => (t(), n("aside", _b, [
      o("header", Pb, [
        o("h2", zb, c(e.title), 1)
      ]),
      o("div", Ab, [
        e.items.length === 0 ? (t(), n("p", Ob, [
          o("span", jb, c(e.emptyTitle), 1),
          o("span", Lb, c(e.emptyDescription), 1)
        ])) : (t(), V(Bb, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => a("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Vb, [
        e.subtotal ? (t(), n("div", Db, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Tb, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Eb, [
          o("span", Ib, c(e.discountLabel), 1),
          e.discount ? (t(), n("span", Fb, c(e.discount), 1)) : $("", !0),
          K(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), n("div", Nb, [
          o("span", Rb, c(e.taxLabel), 1),
          o("span", Ub, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), n("div", Hb, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", qb, c(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), n("div", Kb, [
          K(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Wb = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Zb = { class: "flex flex-col gap-4" }, Jb = { class: "flex flex-wrap items-start justify-between gap-3" }, Yb = { class: "flex items-center gap-2" }, Xb = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, B4 = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(Pe()), i = q(!1), u = Ze(e, "cart"), d = q(!1), p = k(
      () => a.items.filter((U) => Dt(U, s.value))
    );
    function h(U) {
      s.value = { ...s.value, query: U.query };
    }
    function m(U) {
      s.value = {
        ...s.value,
        selected: U.selected,
        ranges: U.ranges,
        query: s.value.query
      }, i.value = !1;
    }
    function b(U) {
      return U ? a.parsePrice(U) : 0;
    }
    function M(U, Z, J) {
      return {
        ...U,
        qty: Z,
        amount: a.formatMoney(J * Z)
      };
    }
    function w(U) {
      const Z = Qh(a.items, U);
      Z && C(Z.key);
    }
    function C(U) {
      const Z = a.items.find((R) => R.key === U);
      if (!Z || Z.status === "out-of-stock")
        return;
      d.value = !1;
      const J = b(Z);
      if (u.value.find((R) => R.key === U)) {
        u.value = u.value.map(
          (R) => R.key === U ? M(R, Number(R.qty ?? 1) + 1, J) : R
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: Z.key,
          label: Z.label,
          detail: Z.caption ?? null,
          qty: 1,
          amount: a.formatMoney(J)
        }
      ];
    }
    function x(U, Z) {
      const J = a.items.find((R) => R.key === U), te = b(J);
      u.value = u.value.map(
        (R) => R.key === U ? M(R, Z, te) : R
      );
    }
    function v(U) {
      u.value = u.value.filter((Z) => Z.key !== U);
    }
    const g = k(
      () => u.value.reduce((U, Z) => {
        const J = a.items.find((te) => te.key === Z.key);
        return U + b(J) * Number(Z.qty ?? 1);
      }, 0)
    ), f = k(
      () => a.discountRate > 0 ? Math.round(g.value * a.discountRate) : 0
    ), S = k(
      () => Math.round((g.value - f.value) * a.taxRate)
    ), B = k(
      () => u.value.length ? a.formatMoney(g.value) : null
    ), P = k(
      () => u.value.length && f.value > 0 ? `−${a.formatMoney(f.value)}` : null
    ), W = k(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(S.value) : null
    ), F = k(
      () => u.value.length ? a.formatMoney(
        g.value - f.value + S.value
      ) : null
    );
    function ee() {
      d.value = !0, r("pay", u.value);
    }
    return (U, Z) => (t(), n(z, null, [
      o("div", Wb, [
        o("section", Zb, [
          o("div", Jb, [
            I(_e, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", Yb, [
              y(ot)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: Z[0] || (Z[0] = (J) => s.value = {
                  ...y(Pe)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: Z[1] || (Z[1] = (J) => i.value = !0)
              }, [
                Z[5] || (Z[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                Z[6] || (Z[6] = N(" Filters ", -1)),
                y(ot)(s.value) ? (t(), n("span", Xb, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          I(Lt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: p.value,
            onFilter: h,
            onSelect: Z[2] || (Z[2] = (J) => r("select", J)),
            onCart: C,
            onScan: w
          }, null, 8, ["search-placeholder", "items"])
        ]),
        I(Gb, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: B.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: W.value,
          total: F.value,
          onQty: x,
          onRemove: v
        }, {
          pay: j(() => [
            K(U.$slots, "pay", {
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
                  N(c(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      I(ga, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: Z[3] || (Z[3] = (J) => i.value = !1),
        onApply: m,
        onReset: Z[4] || (Z[4] = (J) => s.value = { ...y(Pe)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Qb = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, e1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, t1 = ["src", "alt"], a1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, n1 = ["src"], l1 = { class: "flex items-start justify-between gap-3" }, o1 = { class: "text-lg font-semibold tabular-nums" }, s1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, r1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, i1 = { class: "grid grid-cols-2 gap-3" }, u1 = { class: "flex flex-col gap-2" }, d1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, _4 = /* @__PURE__ */ A({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(m) {
      let b = 0;
      for (const M of m)
        b = b * 31 + M.charCodeAt(0) >>> 0;
      return b;
    }
    function i(m, b) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((w, C) => ({
        label: w,
        value: Math.max(0, Math.round(m + Math.sin(C + b) * m * 0.18))
      }));
    }
    const u = k(() => a.item?.kind === "unit"), d = k(() => {
      const m = a.item;
      if (!m)
        return [];
      const b = m.stock ?? m.progress?.value ?? m.metrics?.price ?? m.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(m.key) % 7);
    }), p = k(() => {
      const m = a.item;
      if (!m)
        return [];
      const b = m.progress?.value ?? (m.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(m.key) % 5 + 1);
    }), h = k(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (m, b) => (t(), V(Vt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: b[1] || (b[1] = (M) => r("close"))
    }, _a({
      default: j(() => [
        e.item ? (t(), n("div", Qb, [
          o("div", e1, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, t1)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", a1, [
            (t(!0), n(z, null, L(e.item.images, (M, w) => (t(), n("img", {
              key: w,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, n1))), 128))
          ])) : $("", !0),
          o("div", l1, [
            o("div", null, [
              o("p", o1, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", s1, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), V(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", r1, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", i1, [
            I(lt, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? p.value : d.value
            }, null, 8, ["label", "value", "series"]),
            I(lt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", u1, [
            o("p", d1, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            I(rt, {
              data: u.value ? p.value : d.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : $("", !0)
      ]),
      _: 2
    }, [
      h.value && e.item ? {
        name: "footer",
        fn: j(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: b[0] || (b[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), c1 = { class: "flex flex-col gap-10" }, f1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, m1 = { class: "flex flex-col gap-3" }, p1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, v1 = ["src", "alt"], g1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, h1 = ["aria-label", "aria-pressed", "onClick"], b1 = ["src"], x1 = { class: "flex flex-col gap-5" }, y1 = { class: "flex flex-wrap items-start justify-between gap-3" }, k1 = { class: "min-w-0" }, $1 = { class: "text-2xl font-semibold tracking-tight" }, w1 = { class: "text-muted-foreground mt-1 text-sm" }, C1 = { class: "text-2xl font-semibold tabular-nums" }, S1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, M1 = { class: "grid grid-cols-2 gap-3 text-sm" }, B1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, _1 = { class: "mt-1 font-medium" }, P1 = { class: "rounded-lg border p-3" }, z1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, A1 = { class: "mt-1 font-medium" }, O1 = { class: "flex flex-col gap-4" }, j1 = { class: "grid gap-4 sm:grid-cols-2" }, L1 = { class: "bg-card rounded-lg border p-4" }, V1 = { class: "mb-3 text-sm font-medium" }, D1 = /* @__PURE__ */ A({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(w) {
      let C = 0;
      for (const x of w)
        C = C * 31 + x.charCodeAt(0) >>> 0;
      return C;
    }
    function i(w, C) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((v, g) => ({
        label: v,
        value: Math.max(0, Math.round(w + Math.sin(g + C) * w * 0.18))
      }));
    }
    const u = k(() => a.item.kind === "unit"), d = k(() => {
      const w = [a.item.image, ...a.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(w)];
    }), p = q(0), h = k(() => {
      const w = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, s(a.item.key) % 7);
    }), m = k(() => {
      const w = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, s(a.item.key) % 5 + 1);
    }), b = k(() => u.value ? m.value : h.value), M = k(() => !u.value && a.item.status !== "out-of-stock");
    return (w, C) => (t(), n("div", c1, [
      o("div", f1, [
        o("div", m1, [
          o("div", p1, [
            d.value[p.value] ? (t(), n("img", {
              key: 0,
              src: d.value[p.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, v1)) : $("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", g1, [
            (t(!0), n(z, null, L(d.value, (x, v) => (t(), n("button", {
              key: x,
              type: "button",
              class: O(["size-16 shrink-0 overflow-hidden rounded-md border", v === p.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${v + 1}`,
              "aria-pressed": v === p.value ? "true" : "false",
              onClick: (g) => p.value = v
            }, [
              o("img", {
                src: x,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, b1)
            ], 10, h1))), 128))
          ])) : $("", !0)
        ]),
        o("div", x1, [
          o("div", y1, [
            o("div", k1, [
              o("h1", $1, c(e.item.label), 1),
              o("p", w1, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), V(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", C1, c(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", S1, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", M1, [
            e.item.sku ? (t(), n("div", B1, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", _1, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", P1, [
              o("dt", z1, c(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", A1, c(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (x) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", O1, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", j1, [
          I(lt, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: b.value
          }, null, 8, ["label", "value", "series"]),
          I(lt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: h.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", L1, [
          o("p", V1, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(om, {
            data: b.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), T1 = ["href"], P4 = /* @__PURE__ */ A({
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
      class: O(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
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
        N(" " + c(e.backLabel), 1)
      ], 8, T1),
      I(D1, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), E1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, I1 = ["aria-selected", "onClick"], F1 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, N1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, R1 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, U1 = ["aria-pressed"], H1 = ["aria-pressed"], z4 = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(a.tabs[0]?.key ?? ""), i = Ze(e, "layout"), u = q({}), d = q(!1);
    ce(
      () => a.tabs.map((x) => x.key).join(","),
      (x) => {
        x.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function p(x) {
      return u.value[x] ?? Pe();
    }
    const h = k(
      () => a.tabs.find((x) => x.key === s.value) ?? a.tabs[0] ?? null
    ), m = k(
      () => h.value ? p(h.value.key) : Pe()
    ), b = k(() => {
      const x = h.value;
      return x ? x.items.filter((v) => Dt(v, p(x.key))) : [];
    });
    function M(x) {
      const v = h.value?.key;
      v && (u.value = {
        ...u.value,
        [v]: { ...p(v), query: x }
      });
    }
    function w() {
      const x = h.value?.key;
      x && (u.value = { ...u.value, [x]: Pe() });
    }
    function C(x) {
      const v = h.value?.key;
      v && (u.value = { ...u.value, [v]: x }, d.value = !1);
    }
    return (x, v) => (t(), n(z, null, [
      o("div", {
        class: O(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        I(_e, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", E1, [
          (t(!0), n(z, null, L(e.tabs, (g) => (t(), n("button", {
            key: g.key,
            type: "button",
            class: O([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === g.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === g.key ? "true" : "false",
            onClick: (f) => s.value = g.key
          }, c(g.label), 11, I1))), 128))
        ])) : $("", !0),
        o("div", F1, [
          I(ge, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": m.value.query,
            type: "search",
            placeholder: h.value?.searchPlaceholder ?? "Search…",
            "aria-label": h.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": v[0] || (v[0] = (g) => M(String(g)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          y(ot)(m.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: w
          }, " Clear ")) : $("", !0),
          (h.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: v[1] || (v[1] = (g) => d.value = !0)
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
            v[9] || (v[9] = N(" Filters ", -1)),
            y(ot)(m.value) ? (t(), n("span", N1, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", R1, [
            o("button", {
              type: "button",
              class: O([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: v[2] || (v[2] = (g) => i.value = "grid")
            }, " Tiles ", 10, U1),
            o("button", {
              type: "button",
              class: O([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: v[3] || (v[3] = (g) => i.value = "list")
            }, " List ", 10, H1)
          ])
        ]),
        I(Lt, {
          layout: i.value,
          "onUpdate:layout": v[4] || (v[4] = (g) => i.value = g),
          "page-size": e.pageSize,
          items: b.value,
          onSelect: v[5] || (v[5] = (g) => r("select", g)),
          onCart: v[6] || (v[6] = (g) => r("cart", g))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      I(ga, {
        open: d.value,
        title: h.value?.filterTitle ?? "Filters",
        "search-placeholder": h.value?.searchPlaceholder ?? "Search…",
        facets: h.value?.facets ?? [],
        applied: m.value,
        onClose: v[7] || (v[7] = (g) => d.value = !1),
        onApply: C,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), q1 = { class: "flex flex-col gap-4" }, K1 = { class: "flex flex-col gap-4" }, A4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(Pe()), i = k(
      () => a.cards.filter((u) => Dt(u, s.value))
    );
    return (u, d) => (t(), n("div", {
      class: O(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      I(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", q1, [
        I(_e, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(Lt, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: d[0] || (d[0] = (p) => s.value = p),
          onSelect: d[1] || (d[1] = (p) => r("select", p)),
          onCart: d[2] || (d[2] = (p) => r("cart", p))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", K1, [
        I(_e, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(cl, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": j(({ value: p }) => [
            I(be, {
              status: String(p)
            }, {
              default: j(() => [
                N(c(p), 1)
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
}, W1 = { class: "text-sm font-medium" }, Z1 = ["width", "height", "aria-label"], J1 = { class: "flex items-center gap-2" }, Y1 = /* @__PURE__ */ A({
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
    function p(x) {
      const v = s.value;
      if (!v)
        return null;
      const g = v.getBoundingClientRect(), f = v.width / g.width, S = v.height / g.height;
      return {
        x: (x.clientX - g.left) * f,
        y: (x.clientY - g.top) * S
      };
    }
    function h(x) {
      a.disabled || (i.value = !0, u = p(x), s.value?.setPointerCapture(x.pointerId));
    }
    function m(x) {
      if (!i.value || a.disabled)
        return;
      const v = d(), g = p(x);
      !v || !g || !u || (v.strokeStyle = "#111827", v.lineWidth = 2.4, v.lineCap = "round", v.lineJoin = "round", v.beginPath(), v.moveTo(u.x, u.y), v.lineTo(g.x, g.y), v.stroke(), u = g);
    }
    function b() {
      i.value = !1, u = null;
    }
    function M() {
      const x = s.value, v = d();
      !x || !v || (v.clearRect(0, 0, x.width, x.height), r("clear"));
    }
    function w() {
      const x = s.value;
      x && r("save", x.toDataURL("image/png"));
    }
    function C() {
      const x = s.value, v = d();
      !x || !v || (v.fillStyle = "#ffffff", v.fillRect(0, 0, x.width, x.height));
    }
    return pe(C), he(() => {
      i.value = !1;
    }), (x, v) => (t(), n("div", G1, [
      o("p", W1, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: O(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: me(h, ["prevent"]),
        onPointermove: me(m, ["prevent"]),
        onPointerup: me(b, ["prevent"]),
        onPointerleave: me(b, ["prevent"])
      }, null, 42, Z1),
      o("div", J1, [
        I(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: j(() => [...v[0] || (v[0] = [
            N(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: j(() => [...v[1] || (v[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), X1 = { class: "grid gap-8 lg:grid-cols-2" }, Q1 = { class: "flex flex-col gap-3" }, ex = { class: "text-muted-foreground text-xs" }, tx = {
  key: 0,
  class: "flex flex-col gap-3"
}, ax = { class: "flex flex-wrap gap-3" }, nx = ["onClick"], lx = ["src", "alt"], ox = {
  key: 1,
  class: "flex flex-col gap-3"
}, sx = { class: "flex flex-wrap gap-3" }, rx = ["onClick"], ix = ["src", "alt"], ux = {
  key: 2,
  class: "flex flex-col gap-4"
}, dx = { class: "flex flex-wrap items-center gap-2" }, cx = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, fx = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, mx = { class: "flex flex-col gap-2" }, px = ["src"], vx = {
  key: 1,
  class: "text-sm text-neutral-400"
}, gx = ["src"], O4 = /* @__PURE__ */ A({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = q([]), r = q([]), s = q(null), i = q(null), u = q(null), d = q(l.documents[0]?.key ?? "");
    function p(x) {
      try {
        const v = localStorage.getItem(x), g = v ? JSON.parse(v) : [];
        return Array.isArray(g) ? g : [];
      } catch {
        return [];
      }
    }
    pe(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = p(`${l.storageKey}.signatures`), r.value = p(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), ce(
      a,
      (x) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(x));
      },
      { deep: !0 }
    ), ce(
      r,
      (x) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(x));
      },
      { deep: !0 }
    );
    function h(x) {
      const v = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: x
      };
      a.value = [v, ...a.value].slice(0, 8), s.value = v.id;
    }
    async function m(x, v) {
      await Mu(x), v(40);
      const g = await new Promise((f, S) => {
        const B = new FileReader();
        B.onload = () => f(String(B.result)), B.onerror = () => S(new Error("Could not read the file")), B.readAsDataURL(x);
      });
      return v(100), { value: g, name: x.name, size: x.size, url: g };
    }
    function b() {
      const x = u.value?.url ?? u.value?.value;
      if (!x)
        return;
      const v = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: x
      };
      r.value = [v, ...r.value].slice(0, 8), i.value = v.id;
    }
    const M = k(
      () => a.value.find((x) => x.id === s.value)?.dataUrl ?? null
    ), w = k(
      () => r.value.find((x) => x.id === i.value)?.dataUrl ?? null
    ), C = k(() => {
      const x = l.documents.find((g) => g.key === d.value)?.document ?? l.documents[0]?.document ?? {}, v = {
        ...x?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...x,
        branding: v
      };
    });
    return (x, v) => (t(), n("div", {
      class: O(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      I(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", X1, [
        I(Y1, {
          label: "Draw a signature",
          onSave: h
        }),
        o("div", Q1, [
          v[2] || (v[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", ex, c(y(da)), 1),
          I(la, {
            modelValue: u.value,
            "onUpdate:modelValue": v[0] || (v[0] = (g) => u.value = g),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: m
          }, null, 8, ["modelValue"]),
          I(se, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: b
          }, {
            default: j(() => [...v[1] || (v[1] = [
              N(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", tx, [
        I(_e, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", ax, [
          (t(!0), n(z, null, L(a.value, (g) => (t(), n("button", {
            key: g.id,
            type: "button",
            class: O(["rounded-md border p-2", g.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (f) => s.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, lx)
          ], 10, nx))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), n("section", ox, [
        I(_e, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", sx, [
          (t(!0), n(z, null, L(r.value, (g) => (t(), n("button", {
            key: g.id,
            type: "button",
            class: O(["rounded-md border p-2", g.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (f) => i.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, ix)
          ], 10, rx))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), n("section", ux, [
        o("div", dx, [
          (t(!0), n(z, null, L(e.documents, (g) => (t(), V(se, {
            key: g.key,
            size: "sm",
            variant: d.value === g.key ? "default" : "outline",
            onClick: (f) => d.value = g.key
          }, {
            default: j(() => [
              N(c(g.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", cx, [
          I(bf, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", fx, [
            o("div", mx, [
              v[3] || (v[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), n("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, px)) : (t(), n("p", vx, "Draw and save a signature"))
            ]),
            w.value ? (t(), n("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, gx)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), j4 = "panel.dashboard.hiddenWidgets", hx = /* @__PURE__ */ Symbol("dashboardHide"), bx = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, L4 = /* @__PURE__ */ A({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = tt(hx, null), r = q(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), s = q(!1);
    pe(() => {
      if (a?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const u = localStorage.getItem(l.storageKey);
        if (u) {
          const d = JSON.parse(u);
          Array.isArray(d) && (r.value = d.filter(
            (p) => typeof p?.id == "string" && typeof p.label == "string" && typeof p.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), ce(
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
    const i = k(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? $("", !0) : (t(), n("div", bx, [
      I(iv, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (p) => r.value = p),
        onHide: d[1] || (d[1] = (p) => y(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), xx = { class: "flex flex-col gap-3" }, yx = ["data-slot"], kx = ["aria-pressed", "aria-label", "title"], $x = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wx = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Cx = { class: "flex h-8 items-center" }, Sx = ["aria-label", "title", "onClick"], Mx = ["aria-label", "title", "onClick"], Bx = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, _x = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, V4 = /* @__PURE__ */ A({
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
    function u(f) {
      return a.maskable && (f.sensitive ?? !0);
    }
    function d(f) {
      return u(f) && !s.value && !i.value.has(f.key);
    }
    const p = k(() => a.segments.some(d)), h = k(() => a.segments.some(u)), m = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, b = k(() => m[a.columns] ?? m[4]), M = k(() => {
      const f = a.columns ?? 4, S = Math.floor(a.segments.length / f) * f;
      return a.segments.slice(0, S);
    }), w = k(() => {
      const f = a.columns ?? 4, S = Math.floor(a.segments.length / f) * f;
      return a.segments.slice(S);
    }), C = k(() => {
      const f = [];
      return M.value.length > 0 && f.push({ key: "packed", joined: !0, segments: M.value }), w.value.length > 0 && f.push({ key: "leftover", joined: !1, segments: w.value }), f;
    });
    function x() {
      const f = p.value === !1;
      s.value = !f, i.value = /* @__PURE__ */ new Set(), r("toggle", f);
    }
    function v(f) {
      if (!u(f))
        return;
      const S = new Set(i.value);
      if (d(f))
        S.add(f.key);
      else if (S.delete(f.key), s.value) {
        s.value = !1;
        for (const B of a.segments)
          B.key !== f.key && u(B) && S.add(B.key);
      }
      i.value = S, r("toggle", p.value);
    }
    function g(f) {
      return typeof f == "number" ? new Intl.NumberFormat().format(f) : f;
    }
    return (f, S) => (t(), n("div", xx, [
      (t(!0), n(z, null, L(C.value, (B) => (t(), n("div", {
        key: B.key,
        class: O(["relative shrink-0", B.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": B.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && h.value && B.key === C.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": p.value,
          "aria-label": p.value ? "Show all values" : "Hide all values",
          title: p.value ? "Show all values" : "Hide all values",
          onClick: x
        }, [
          (t(), n("svg", $x, [
            p.value ? (t(), n(z, { key: 0 }, [
              S[0] || (S[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              S[1] || (S[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              S[2] || (S[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              S[3] || (S[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              S[4] || (S[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              S[5] || (S[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, kx)) : $("", !0),
        o("div", {
          class: O(["grid", [B.joined ? "gap-px" : "gap-3", b.value]])
        }, [
          (t(!0), n(z, null, L(B.segments, (P) => (t(), n("div", {
            key: P.key,
            class: O(["bg-card flex flex-col gap-2 p-4", B.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", wx, c(P.label), 1),
            o("div", Cx, [
              e.loading ? (t(), V(Fe, {
                key: 0,
                variant: "number"
              })) : d(P) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (W) => v(P)
              }, [
                (t(), n(z, null, L(5, (W) => o("span", {
                  key: W,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, Sx)) : u(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${g(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (W) => v(P)
              }, c(g(P.value)), 9, Mx)) : (t(), n("span", Bx, c(g(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), V(va, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), V(rt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", _x, c(P.caption ?? P.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, yx))), 128))
    ]));
  }
}), Px = ["aria-label"], zx = ["aria-valuenow", "aria-label"], Ax = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Ox = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, jx = ["title"], Lx = { class: "font-medium" }, Vx = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, Dx = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Tx = { class: "flex items-center justify-between gap-2" }, Ex = { class: "text-sm font-semibold" }, Ix = { class: "flex items-center gap-3" }, Fx = ["href"], Nx = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Rx = { class: "flex min-w-0 flex-col gap-0.5" }, Ux = { class: "text-sm font-medium" }, Hx = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, qx = {
  key: 1,
  class: "flex flex-col gap-2"
}, Kx = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Gx = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Wx = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, D4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = k(() => a.items.find((C) => !C.done) ?? null), i = k(() => a.items.filter((C) => C.key !== s.value?.key)), u = k(() => a.items.length), d = k(() => a.items.filter((C) => C.done).length), p = k(() => {
      if (!s.value)
        return u.value;
      const C = a.items.findIndex((x) => x.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), h = k(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
    ), m = k(() => {
      const C = a.linkComponent;
      return typeof C == "string" ? C : Gt(C);
    }), b = qe({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), M = qe({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), w = qe({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (C, x) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
      key: 0,
      class: "overflow-hidden rounded-md border bg-card",
      "aria-label": e.heading
    }, [
      o("div", {
        class: "h-0.5 w-full bg-muted",
        role: "progressbar",
        "aria-valuenow": h.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${h.value} percent complete`
      }, [
        o("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: ne({ width: `${h.value}%` })
        }, null, 4)
      ], 8, zx),
      o("div", Ax, [
        o("span", Ox, " Step " + c(p.value) + " of " + c(u.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Lx, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", Vx, c(": " + s.value.detail), 1)) : $("", !0)
        ], 8, jx),
        s.value?.href ? (t(), V(xe(m.value), {
          key: 0,
          href: s.value.href,
          class: O(y(M))
        }, {
          default: j(() => [
            N(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : $("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: x[0] || (x[0] = (v) => r("skip"))
        }, c(e.skipLabel), 1)) : $("", !0)
      ])
    ], 8, Px)) : e.items.length ? (t(), n("section", Dx, [
      o("div", Tx, [
        o("h2", Ex, c(e.heading), 1),
        o("div", Ix, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: x[1] || (x[1] = (v) => r("skip"))
          }, c(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, Fx)) : $("", !0)
        ])
      ]),
      s.value ? (t(), n("div", Nx, [
        x[2] || (x[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Rx, [
          o("p", Ux, c(s.value.title), 1),
          s.value.detail ? (t(), n("p", Hx, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), V(xe(m.value), {
            key: 1,
            href: s.value.href,
            class: O(y(b))
          }, {
            default: j(() => [
              N(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])
      ])) : $("", !0),
      i.value.length ? (t(), n("ul", qx, [
        (t(!0), n(z, null, L(i.value, (v) => (t(), n("li", {
          key: v.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: O([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              v.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            v.done ? (t(), n("svg", Kx, [...x[3] || (x[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", Gx, [
            o("p", {
              class: O(["text-sm", v.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(v.title), 3),
            !v.done && v.detail ? (t(), n("p", Wx, c(v.detail), 1)) : $("", !0)
          ]),
          !v.done && v.href ? (t(), V(xe(m.value), {
            key: 0,
            href: v.href,
            class: O(y(w))
          }, {
            default: j(() => [
              N(c(v.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : $("", !0)
        ]))), 128))
      ])) : $("", !0)
    ])) : $("", !0);
  }
}), Zx = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, Jx = { class: "flex items-center gap-2" }, Yx = { class: "font-medium tabular-nums" }, Xx = { class: "ml-auto flex items-center gap-3" }, T4 = /* @__PURE__ */ A({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), n("div", Zx, [
      o("div", Jx, [
        K(s.$slots, "actions")
      ]),
      o("span", Yx, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          N(" All " + c(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          N(c(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", Xx, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (u) => a("select-all-matching"))
        }, " Select all " + c(r(e.total)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), Qx = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, ey = { class: "text-muted-foreground text-xs tabular-nums" }, ty = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, ay = ["value"], ny = ["value"], ly = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, oy = ["disabled"], sy = ["disabled"], ry = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, iy = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, uy = ["disabled"], E4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = (p) => new Intl.NumberFormat().format(p), i = k(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), u = k(() => (a.page - 1) * a.perPage + a.rowsOnPage), d = k(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (p, h) => (t(), n("div", Qx, [
      o("p", ey, [
        N(" Showing " + c(s(i.value)) + "-" + c(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          N("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", ty, [
        h[4] || (h[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: h[0] || (h[0] = (m) => r("update:perPage", Number(m.target.value)))
        }, [
          (t(!0), n(z, null, L(e.perPageOptions, (m) => (t(), n("option", {
            key: m,
            value: m
          }, c(m), 9, ny))), 128))
        ], 40, ay)
      ])) : $("", !0),
      o("nav", ly, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: h[1] || (h[1] = (m) => r("first"))
        }, [...h[5] || (h[5] = [
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
        ])], 8, oy),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: h[2] || (h[2] = (m) => r("previous"))
        }, [...h[6] || (h[6] = [
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
        ])], 8, sy),
        o("span", ry, c(e.page), 1),
        d.value !== null ? (t(), n("span", iy, " of " + c(s(d.value)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: h[3] || (h[3] = (m) => r("next"))
        }, [...h[7] || (h[7] = [
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
        ])], 8, uy)
      ])
    ]));
  }
}), dy = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, cy = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, fy = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, my = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, I4 = /* @__PURE__ */ A({
  __name: "TableShell",
  setup(e) {
    return (l, a) => (t(), n("div", dy, [
      l.$slots.tabs ? (t(), n("div", cy, [
        K(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), n("div", fy, [
        K(l.$slots, "toolbar")
      ])) : $("", !0),
      K(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", my, [
        K(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), py = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, vy = ["aria-current"], gy = ["title"], hy = ["aria-current", "onClick"], by = ["title"], xy = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("div", py, [
      o("button", {
        type: "button",
        class: O([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => a("select", null))
      }, [
        i[1] || (i[1] = N(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: O([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, gy)) : (t(), V(Fe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, vy),
      (t(!0), n(z, null, L(e.tabs, (u) => (t(), n("button", {
        key: u,
        type: "button",
        class: O([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => a("select", u)
      }, [
        N(c(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: O([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, c(r(e.counts[u] ?? 0)), 11, by)) : (t(), V(Fe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, hy))), 128))
    ]));
  }
}), F4 = /* @__PURE__ */ Pt(xy, [["__scopeId", "data-v-3967c945"]]), yy = { class: "flex flex-col gap-2" }, ky = { class: "flex flex-wrap items-center justify-end gap-2" }, $y = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, wy = ["placeholder", "title", "aria-label"], Cy = ["aria-label"], Sy = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, My = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, By = { class: "text-xs font-medium" }, _y = ["value", "onChange"], Py = ["value"], zy = { class: "grid grid-cols-2 gap-2" }, Ay = ["value", "onChange"], Oy = ["value", "onChange"], jy = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Ly = ["value", "onChange"], Vy = ["value", "onChange"], Dy = {
  key: 4,
  class: "flex items-center gap-2"
}, Ty = ["aria-checked", "onClick"], Ey = { class: "text-xs" }, Iy = ["onClick"], Fy = ["value", "onChange"], Ny = ["value"], Ry = ["disabled", "onClick"], Uy = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Hy = ["disabled", "onClick"], qy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ky = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Gy = ["aria-pressed", "aria-label", "title"], Wy = ["aria-label", "title"], Zy = { class: "flex flex-col gap-0.5 p-1" }, Jy = ["onClick"], Yy = ["onClick"], Xy = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, Qy = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, e0 = ["dusk"], t0 = ["aria-label", "onClick"], N4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = q(a.search);
    ce(
      () => a.search,
      (R) => {
        R !== s.value && (s.value = R);
      }
    );
    let i;
    ce(s, (R) => {
      clearTimeout(i), i = setTimeout(() => {
        R !== a.search && r("update:search", R);
      }, 250);
    });
    const u = q({ ...a.filters });
    ce(
      () => a.filters,
      (R) => {
        u.value = { ...R };
      },
      { deep: !0 }
    );
    const d = k(
      () => a.filterSchema.filter(
        (R) => a.filters[R.key] !== null && a.filters[R.key] !== void 0
      ).length
    ), p = k(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), h = k(() => a.search !== "" || d.value > 0), m = k(() => a.indicators.length ? a.indicators : a.filterSchema.filter((R) => a.filters[R.key] !== null && a.filters[R.key] !== void 0).map((R) => ({
      key: R.key,
      label: `${R.label}: ${String(a.filters[R.key])}`,
      removable: !0
    })));
    function b(R) {
      r("group", R);
    }
    function M(R) {
      r("clear-filter", R);
    }
    function w(R) {
      return R.type === "multiselect";
    }
    function C(R) {
      const T = u.value[R.key];
      return Array.isArray(T) ? T : T == null ? [] : [T];
    }
    function x(R) {
      return C(R).filter(
        (T) => typeof T == "string" || typeof T == "number"
      );
    }
    function v(R) {
      return ee(R).flatMap(
        (T) => typeof T.value == "string" || typeof T.value == "number" ? [{ value: T.value, label: T.label }] : []
      );
    }
    function g(R, T) {
      u.value = { ...u.value, [R.key]: T === "" ? null : T };
    }
    function f(R, T) {
      const Q = u.value[R.key];
      if (typeof Q != "string" || !Q.includes(".."))
        return "";
      const [_, G] = Q.split("..");
      return T === "from" ? _ ?? "" : G ?? "";
    }
    function S(R, T, Q) {
      const _ = T === "from" ? Q : f(R, "from"), G = T === "to" ? Q : f(R, "to");
      u.value = {
        ...u.value,
        [R.key]: _ && G ? `${_}..${G}` : null
      };
    }
    function B(R, T, Q) {
      const _ = T === "from" ? Q : f(R, "from"), G = T === "to" ? Q : f(R, "to");
      u.value = {
        ...u.value,
        [R.key]: _ || G ? `${_}..${G}` : null
      };
    }
    function P(R) {
      r("apply-filters", { ...u.value }), R();
    }
    function W(R, T) {
      u.value[R] = T, r("apply-filters", { ...u.value });
    }
    function F() {
      u.value = Object.fromEntries(a.filterSchema.map((R) => [R.key, null]));
    }
    function ee(R) {
      return R.type === "boolean" ? [
        { value: !0, label: R.trueLabel ?? "Yes" },
        { value: !1, label: R.falseLabel ?? "No" }
      ] : R.type === "daterange" ? Object.entries(R.presets ?? {}).map(([T, Q]) => ({
        value: T,
        label: Q
      })) : (R.options ?? []).map((T) => ({ value: T, label: T }));
    }
    const U = q(new Set(a.hidden));
    ce(
      () => a.hidden,
      (R) => {
        U.value = new Set(R);
      },
      { deep: !0 }
    );
    function Z(R) {
      const T = new Set(U.value);
      T.has(R) ? T.delete(R) : T.add(R), U.value = T, r("apply-columns", [...T]);
    }
    function J() {
      U.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function te() {
      s.value = "", r("clear");
    }
    return (R, T) => (t(), n("div", yy, [
      o("div", ky, [
        o("div", $y, [
          T[5] || (T[5] = o("svg", {
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
          fe(o("input", {
            "onUpdate:modelValue": T[0] || (T[0] = (Q) => s.value = Q),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, wy), [
            [ke, s.value]
          ]),
          s.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: T[1] || (T[1] = (Q) => s.value = "")
          }, [...T[4] || (T[4] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3.5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])])) : $("", !0)
        ]),
        e.filterSchema.length ? (t(), V(Ee, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: j(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: O(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", d.value ? "border-primary text-primary" : ""]),
              "aria-label": d.value ? `Filters (${d.value} active)` : "Filters",
              title: "Filters"
            }, [
              T[6] || (T[6] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              d.value ? (t(), n("span", Sy, c(d.value), 1)) : $("", !0)
            ], 10, Cy)
          ]),
          panel: j(({ close: Q }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              T[7] || (T[7] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: F
              }, " Reset ")
            ]),
            T[10] || (T[10] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", My, [
              (t(!0), n(z, null, L(e.filterSchema, (_) => (t(), n("div", {
                key: _.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", By, c(_.label), 1),
                w(_) ? (t(), V(zt, {
                  key: 0,
                  "model-value": x(_),
                  options: v(_),
                  placeholder: `Any ${_.label.toLowerCase()}`,
                  "onUpdate:modelValue": (G) => u.value[_.key] = G.length ? G : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : _.type === "querybuilder" ? (t(), V(Hr, {
                  key: 1,
                  "model-value": u.value[_.key] ?? null,
                  fields: _.fields ?? {},
                  operators: _.operators ?? {},
                  "max-depth": _.maxDepth ?? 5,
                  onApply: (G) => W(_.key, G)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : _.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[_.key] == "string" && !String(u.value[_.key]).includes("..") ? u.value[_.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (G) => g(_, G.target.value)
                  }, [
                    T[8] || (T[8] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, L(ee(_), (G) => (t(), n("option", {
                      key: String(G.value),
                      value: G.value
                    }, c(G.label), 9, Py))), 128))
                  ], 40, _y),
                  o("div", zy, [
                    o("input", {
                      type: "date",
                      value: f(_, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (G) => S(
                        _,
                        "from",
                        G.target.value
                      )
                    }, null, 40, Ay),
                    o("input", {
                      type: "date",
                      value: f(_, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (G) => S(
                        _,
                        "to",
                        G.target.value
                      )
                    }, null, 40, Oy)
                  ])
                ], 64)) : _.type === "numberrange" ? (t(), n("div", jy, [
                  o("input", {
                    type: "number",
                    value: f(_, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (G) => B(
                      _,
                      "from",
                      G.target.value
                    )
                  }, null, 40, Ly),
                  o("input", {
                    type: "number",
                    value: f(_, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (G) => B(
                      _,
                      "to",
                      G.target.value
                    )
                  }, null, 40, Vy)
                ])) : _.type === "boolean" ? (t(), n("div", Dy, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[_.key] === !0,
                    class: O([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[_.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (G) => g(_, u.value[_.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: O(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[_.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, Ty),
                  o("span", Ey, c(_.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: O([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[_.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (G) => g(_, u.value[_.key] === !1 ? null : !1)
                  }, c(_.falseLabel ?? "No") + " only ", 11, Iy)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[_.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (G) => g(_, G.target.value)
                }, [
                  T[9] || (T[9] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, L(ee(_), (G) => (t(), n("option", {
                    key: String(G.value),
                    value: G.value
                  }, c(G.label), 9, Ny))), 128))
                ], 40, Fy))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !p.value,
              onClick: (_) => P(Q)
            }, " Apply filters ", 8, Ry)
          ]),
          _: 1
        })) : $("", !0),
        I(Ee, { "dismiss-on-panel-click": !1 }, {
          trigger: j(() => [...T[11] || (T[11] = [
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
            T[14] || (T[14] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", Uy, [
              (t(!0), n(z, null, L(e.columns, (Q) => (t(), n("button", {
                key: Q.key,
                type: "button",
                class: O(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", Q.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: Q.locked,
                onClick: (_) => Z(Q.key)
              }, [
                U.value.has(Q.key) ? (t(), n("span", Ky)) : (t(), n("svg", qy, [...T[12] || (T[12] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + c(Q.label), 1)
              ], 10, Hy))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: J
              }, [...T[13] || (T[13] = [
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
                N(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.reorderable ? (t(), n("button", {
          key: 1,
          type: "button",
          class: O(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: T[2] || (T[2] = (Q) => r("toggle-reorder"))
        }, [...T[15] || (T[15] = [
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
        ])], 10, Gy)) : $("", !0),
        e.groups.length ? (t(), V(Ee, {
          key: 2,
          align: "end"
        }, {
          trigger: j(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: O(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...T[16] || (T[16] = [
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
            ])], 10, Wy)
          ]),
          panel: j(({ close: Q }) => [
            o("div", Zy, [
              o("button", {
                type: "button",
                class: O(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (_) => {
                  b(null), Q();
                }
              }, " No grouping ", 10, Jy),
              (t(!0), n(z, null, L(e.groups, (_) => (t(), n("button", {
                key: _.key,
                type: "button",
                class: O(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === _.key ? "text-primary font-medium" : ""]),
                onClick: (G) => {
                  b(_.key), Q();
                }
              }, c(_.label), 11, Yy))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        h.value ? (t(), n("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: te
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), n("span", Xy, "Loading…")) : $("", !0)
      ]),
      m.value.length ? (t(), n("div", Qy, [
        (t(!0), n(z, null, L(m.value, (Q) => (t(), n("span", {
          key: Q.key + Q.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${Q.key}`
        }, [
          N(c(Q.label) + " ", 1),
          Q.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${Q.label}`,
            onClick: (_) => M(Q.key)
          }, [...T[17] || (T[17] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, t0)) : $("", !0)
        ], 8, e0))), 128)),
        m.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: T[3] || (T[3] = (Q) => r("clear-filters"))
        }, " Clear all ")) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), a0 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, n0 = { class: "grid gap-2" }, l0 = {
  key: 0,
  class: "text-destructive text-sm"
}, o0 = { class: "flex gap-2" }, R4 = /* @__PURE__ */ A({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = q((() => {
      const M = navigator.userAgent, w = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: x }) => x.test(M))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: x }) => x.test(M))?.name;
      return [w, C].filter(Boolean).join(" on ") || "";
    })()), i = q(!1), u = Pa(null), d = k(() => u.value?.isLoading.value ?? !1), p = k(() => u.value?.error.value ?? null), h = k(() => u.value?.isSupported.value ?? !1);
    pe(async () => {
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
    }, b = () => {
      i.value = !1, s.value = "";
    };
    return (M, w) => h.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: m
    }, [
      o("div", n0, [
        w[3] || (w[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        fe(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": w[1] || (w[1] = (C) => s.value = C),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [ke, s.value]
        ]),
        w[4] || (w[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      p.value ? (t(), n("p", l0, c(p.value), 1)) : $("", !0),
      o("div", o0, [
        I(se, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: j(() => [
            N(c(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          type: "button",
          variant: "ghost",
          onClick: b
        }, {
          default: j(() => [...w[5] || (w[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), V(se, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = (C) => i.value = !0)
    }, {
      default: j(() => [...w[2] || (w[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", a0, " Passkeys are not supported in this browser. "));
  }
}), s0 = { class: "flex flex-col gap-4" }, r0 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, U4 = /* @__PURE__ */ A({
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
    gt("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), gt("panelCreateOption", {
      run(p, h) {
        return a.createOption ? a.createOption(p, h) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = k(() => a.nodes.length > 0), i = k(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = k(() => a.errors._conflict);
    function d(p) {
      if (a.upload)
        return (h, m) => a.upload(p, h, m);
    }
    return (p, h) => (t(), n("div", s0, [
      u.value ? (t(), n("p", r0, c(u.value), 1)) : $("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, L(e.nodes, (m, b) => (t(), V(oa, {
        key: b,
        node: m,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: h[0] || (h[0] = (M, w) => r("change", M, w)),
        onAffixAction: h[1] || (h[1] = (M, w) => r("affix-action", M, w))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: O(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, L(e.fields, (m) => (t(), V(Ie, {
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
          class: O(m.span && m.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (b) => r("change", m.key, b),
          onAffixAction: (b) => r("affix-action", m.key, b)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), i0 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, u0 = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, d0 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, c0 = ["disabled"], f0 = ["disabled"], m0 = ["disabled"], H4 = /* @__PURE__ */ A({
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
    return (l, a) => (t(), V(Ne, { to: "body" }, [
      I(je, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), n("div", i0, [
            o("div", u0, [
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
              o("span", d0, c(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, c(e.discardLabel), 9, c0)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, c(e.cancelLabel), 9, f0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, m0)
            ])
          ])) : $("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function q4(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = q(vt(e.value)), s = k(() => vt(e.value) !== r.value);
  function i() {
    r.value = vt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(p) {
    s.value && (p.preventDefault(), p.returnValue = "");
  }
  return pe(() => {
    a && window.addEventListener("beforeunload", d);
  }), he(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function vt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const p0 = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, v0 = { class: "text-muted-foreground text-xs font-medium" }, g0 = { class: "text-sm" }, h0 = { key: 1 }, b0 = {
  key: 5,
  class: "max-w-full"
}, x0 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, y0 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, k0 = { key: 6 }, $0 = {
  key: 0,
  class: "divide-y rounded-md border"
}, w0 = { class: "text-muted-foreground truncate font-medium" }, C0 = { class: "col-span-2 break-words" }, S0 = {
  key: 1,
  class: "text-muted-foreground"
}, M0 = {
  key: 7,
  class: "flex flex-col gap-3"
}, B0 = {
  key: 0,
  class: "text-muted-foreground"
}, _0 = ["href"], P0 = { class: "text-sm font-semibold" }, z0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, A0 = ["onClick"], K4 = /* @__PURE__ */ A({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = q(!a.node.collapsed), i = q(0), u = k(() => a.depth === 0), d = k(() => {
      const M = a.node.columns ?? 1;
      return M >= 3 ? "sm:grid-cols-3" : M === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), p = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, h = k(() => a.node.key ? a.record[a.node.key] : null), m = k(() => {
      const M = h.value;
      if (M == null || M === "")
        return "-";
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, p[a.node.type]);
      let w = String(M);
      return a.node.transform === "upper" && (w = w.toUpperCase()), a.node.transform === "lower" && (w = w.toLowerCase()), [a.node.prefix, w, a.node.suffix].filter(Boolean).join(" ");
    }), b = k(() => {
      const M = typeof h.value == "boolean" ? h.value ? "1" : "" : String(h.value), w = a.node.colors?.[M] ?? a.node.defaultColor ?? "neutral";
      return At[w] ?? "outline";
    });
    return (M, w) => {
      const C = wt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", p0, [
        o("dt", v0, c(e.node.label), 1),
        o("dd", g0, [
          e.node.type === "badge" && y(Qr)(h.value) ? (t(), V(Ke, {
            key: 0,
            variant: b.value,
            class: "capitalize"
          }, {
            default: j(() => [
              N(c(h.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", h0, "-")) : e.node.type === "icon" ? (t(), V(xr, {
            key: 2,
            value: h.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), V($r, {
            key: 3,
            src: h.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), V(Br, {
            key: 4,
            value: typeof h.value == "string" ? h.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", b0, [
            e.node.language ? (t(), n("p", x0, c(e.node.language), 1)) : $("", !0),
            o("pre", y0, [
              o("code", null, c(h.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", k0, [
            h.value && typeof h.value == "object" && !Array.isArray(h.value) && Object.keys(h.value).length ? (t(), n("dl", $0, [
              (t(!0), n(z, null, L(h.value, (x, v) => (t(), n("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", w0, c(v), 1),
                o("dd", C0, c(x), 1)
              ]))), 128))
            ])) : (t(), n("span", S0, "-"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", M0, [
            (t(!0), n(z, null, L(Array.isArray(h.value) ? h.value : [], (x, v) => (t(), n("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, L(e.node.entries ?? [], (g, f) => (t(), V(C, {
                key: f,
                node: g,
                record: x,
                depth: e.depth + 1,
                onAction: w[0] || (w[0] = (S) => r("action", S))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(h.value) || h.value.length === 0 ? (t(), n("span", B0, "-")) : $("", !0)
          ])) : e.node.url ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, c(m.value), 9, _0)) : (t(), n("span", {
            key: 9,
            class: O([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, c(m.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
            onClick: w[1] || (w[1] = (x) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : $("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: O(u.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: O(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: w[2] || (w[2] = (x) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", P0, c(e.node.label), 1),
            e.node.description ? (t(), n("p", z0, c(e.node.description), 1)) : $("", !0)
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: O(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (x, v) => (t(), V(C, {
            key: v,
            node: x,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[3] || (w[3] = (g) => r("action", g))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: O(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (x, v) => (t(), V(C, {
          key: v,
          node: x,
          record: e.record,
          depth: e.depth + 1,
          onAction: w[4] || (w[4] = (g) => r("action", g))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: O(u.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        o("div", {
          class: O(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (x, v) => (t(), n("button", {
            key: v,
            type: "button",
            class: O([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (g) => i.value = v
          }, c(x.label), 11, A0))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (x, v) => fe((t(), n("div", {
          key: v,
          class: O(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(x.children ?? [], (g, f) => (t(), V(C, {
            key: f,
            node: g,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[5] || (w[5] = (S) => r("action", S))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Le, i.value === v]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), O0 = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, j0 = { class: "text-muted-foreground text-sm" }, L0 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, V0 = { class: "flex items-start gap-3" }, D0 = { class: "min-w-0 flex-1" }, T0 = { class: "flex flex-wrap items-center gap-2" }, E0 = { class: "truncate text-sm font-medium" }, I0 = { class: "text-muted-foreground mt-0.5 text-xs" }, F0 = { class: "text-muted-foreground text-xs" }, N0 = { class: "mt-auto flex items-center gap-2" }, R0 = /* @__PURE__ */ A({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", O0, [
      o("p", j0, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", L0, [
        (t(!0), n(z, null, L(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", V0, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: d.color }),
              "aria-hidden": "true"
            }, c(d.mark), 5),
            o("div", D0, [
              o("div", T0, [
                o("h3", E0, c(d.label), 1),
                I(be, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    N(c(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), V(be, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...u[0] || (u[0] = [
                    N(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), V(be, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...u[1] || (u[1] = [
                    N(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.isDefault ? (t(), V(be, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...u[2] || (u[2] = [
                    N(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.connected && d.mode ? (t(), V(be, {
                  key: 3,
                  status: d.mode
                }, {
                  default: j(() => [
                    N(c(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", I0, c(d.caption), 1)
            ])
          ]),
          o("p", F0, c(d.methods.join(" · ")), 1),
          o("div", N0, [
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: (p) => r("configure", d.key)
            }, {
              default: j(() => [...u[3] || (u[3] = [
                N(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            I(se, {
              size: "sm",
              variant: "ghost",
              onClick: (p) => r("toggle", d.key)
            }, {
              default: j(() => [
                N(c(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), U0 = { class: "flex flex-col gap-6" }, H0 = { class: "relative" }, q0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, K0 = ["d"], G0 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, W0 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Z0 = { class: "flex flex-wrap items-center gap-2" }, J0 = { class: "text-muted-foreground text-sm" }, Y0 = { class: "flex flex-col gap-1 text-sm" }, X0 = ["value"], Q0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, ek = { class: "flex flex-wrap items-center gap-2" }, tk = {
  key: 1,
  class: "flex items-center gap-2"
}, G4 = /* @__PURE__ */ A({
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
    const l = Ze(e, "gateways"), a = q(null), r = q(""), s = k(
      () => l.value.find((w) => w.key === a.value) ?? null
    ), i = k(() => {
      const w = r.value.trim().toLowerCase();
      return w === "" ? l.value : l.value.filter((C) => [C.key, C.label, C.caption, ...C.methods].join(" ").toLowerCase().includes(w));
    });
    function u(w) {
      return w.connected && w.enabled !== !1;
    }
    function d(w, C) {
      l.value = l.value.map(
        (x) => x.key === w ? { ...x, ...C } : x
      );
    }
    function p(w) {
      a.value = w;
    }
    function h(w) {
      const C = l.value.find((v) => v.key === w);
      if (!C)
        return;
      const x = !C.connected;
      d(w, {
        connected: x,
        mode: x ? C.mode ?? "test" : null,
        enabled: x,
        isDefault: !1
      });
    }
    function m(w, C) {
      const x = l.value.find((v) => v.key === w);
      x?.connected && d(w, { enabled: C, isDefault: C ? x.isDefault : !1 });
    }
    function b(w) {
      const C = l.value.find((x) => x.key === w);
      !C || !u(C) || (l.value = l.value.map((x) => ({
        ...x,
        isDefault: x.key === w
      })));
    }
    function M(w) {
      const C = a.value;
      !C || !l.value.find((v) => v.key === C)?.connected || d(C, { mode: w });
    }
    return (w, C) => (t(), n(z, null, [
      o("div", U0, [
        I(_e, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", H0, [
          (t(), n("svg", q0, [
            o("path", {
              d: y(ue)("search")
            }, null, 8, K0)
          ])),
          I(ge, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (x) => r.value = x),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), V(R0, {
          key: 0,
          gateways: i.value,
          onConfigure: p,
          onToggle: h
        }, null, 8, ["gateways"])) : (t(), n("p", G0, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      I(Vt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: C[8] || (C[8] = (x) => a.value = null)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (x) => a.value = null)
          }, {
            default: j(() => [...C[21] || (C[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), V(se, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (x) => h(s.value.key))
          }, {
            default: j(() => [
              N(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), n("div", W0, [
            o("div", Z0, [
              I(be, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: j(() => [
                  N(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), V(be, {
                key: 0,
                status: "offered"
              }, {
                default: j(() => [...C[9] || (C[9] = [
                  N(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), V(be, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...C[10] || (C[10] = [
                  N(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), V(be, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...C[11] || (C[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), V(be, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  N(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", J0, c(s.value.caption), 1),
            o("label", Y0, [
              C[12] || (C[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, X0)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", Q0, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", ek, [
                I(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (x) => m(s.value.key, !0))
                }, {
                  default: j(() => [...C[13] || (C[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (x) => m(s.value.key, !1))
                }, {
                  default: j(() => [...C[14] || (C[14] = [
                    N(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: C[3] || (C[3] = (x) => b(s.value.key))
                }, {
                  default: j(() => [...C[15] || (C[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), n("div", tk, [
              I(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (x) => M("test"))
              }, {
                default: j(() => [...C[18] || (C[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              I(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (x) => M("live"))
              }, {
                default: j(() => [...C[19] || (C[19] = [
                  N(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : $("", !0)
          ])) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title"])
    ], 64));
  }
});
function Kt(e) {
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
function W4(e, l) {
  const a = Kt(e), r = typeof localStorage < "u" && localStorage.getItem(e) !== null, s = q(r ? a : l ?? /* @__PURE__ */ new Set());
  pe(() => {
    s.value = Kt(e);
  }), ce(
    s,
    (m) => {
      try {
        localStorage.setItem(e, JSON.stringify([...m]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function i(m) {
    const b = new Set(s.value);
    b.has(m) ? b.delete(m) : b.add(m), s.value = b;
  }
  function u(m) {
    const b = new Set(s.value);
    b.add(m), s.value = b;
  }
  function d(m) {
    const b = new Set(s.value);
    b.delete(m), s.value = b;
  }
  function p(m) {
    s.value = new Set(m);
  }
  function h() {
    s.value = /* @__PURE__ */ new Set();
  }
  return { hidden: s, toggle: i, hide: u, show: d, setHidden: p, reset: h };
}
function Z4(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = q(
    l.driver === "none" ? "off" : "connecting"
  ), p = q(/* @__PURE__ */ new Set());
  let h = /* @__PURE__ */ new Map(), m, b, M, w = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function x(Z, J) {
    h.set(Z, { ...h.get(Z) ?? {}, ...J }), !m && (m = setTimeout(() => {
      m = void 0, v();
    }, l.batchMs));
  }
  function v() {
    if (h.size === 0)
      return;
    const Z = h;
    h = /* @__PURE__ */ new Map();
    const J = /* @__PURE__ */ new Set();
    for (const [te, R] of Z) {
      const T = a.value.find((Q) => Q[r] === te);
      if (!T) {
        u?.(te, R);
        continue;
      }
      Object.assign(T, R), J.add(te);
    }
    J.size !== 0 && (p.value = /* @__PURE__ */ new Set([...p.value, ...J]), setTimeout(() => {
      const te = new Set(p.value);
      J.forEach((R) => te.delete(R)), p.value = te;
    }, 1500));
  }
  async function g() {
    if (!(!s || a.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const Z = a.value.map((R) => R[r]), { records: J, at: te } = await s(Z, w);
        w = te, d.value = "live";
        for (const R of J)
          x(R[r], R);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function f() {
    S(), d.value = "live", b = setInterval(g, l.intervalMs);
  }
  function S() {
    clearInterval(b), b = void 0, M?.abort();
  }
  function B() {
    return window.Echo ?? null;
  }
  function P() {
    const Z = B();
    if (!Z || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const J = Z.private(l.channel);
    for (const te of l.events)
      J.listen(te, (R) => {
        R?.[r] !== void 0 && x(R[r], R);
      });
    d.value = "live", Z.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), Z.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function W() {
    C && (B()?.leave(C), C = null);
  }
  function F() {
    l.driver === "poll" && f(), l.driver === "broadcast" && P();
  }
  function ee() {
    S(), W(), clearTimeout(m), m = void 0, h = /* @__PURE__ */ new Map();
  }
  function U() {
    l.pauseWhenHidden && (document.hidden ? (ee(), d.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), F(), i?.()));
  }
  return pe(() => {
    l.driver !== "none" && (F(), l.pauseWhenHidden && document.addEventListener("visibilitychange", U));
  }), he(() => {
    document.removeEventListener("visibilitychange", U), ee();
  }), { status: d, recentlyChanged: p, applyPatch: x, flush: v, pollOnce: g };
}
const ak = /^[a-z0-9-]+$/, nk = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function J4(e) {
  za(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !ak.test(a) || typeof r != "string" || !nk.test(r) || (l[`--${a}`] = r);
    Si(l);
  });
}
const lk = { class: "flex items-center gap-0.5" }, ok = /* @__PURE__ */ A({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", lk, [
      String(e.value) === "mono" ? (t(), n(z, { key: 0 }, [
        a[0] || (a[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        a[1] || (a[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        a[2] || (a[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), n(z, { key: 1 }, [
        a[3] || (a[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        a[4] || (a[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        a[5] || (a[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), sk = /* @__PURE__ */ A({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), V(pa, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), rk = { class: "flex flex-col gap-2" }, ik = { class: "bg-card rounded-lg border p-4" }, uk = { class: "text-muted-foreground truncate text-xs" }, dk = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, ck = /* @__PURE__ */ A({
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
    }, r = k(() => ({ ...a, ...l.field.limits ?? {} })), s = k(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = k(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), u = k(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = k(() => {
      const C = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return C === "" ? u.value : `${u.value} › ${C.split("/").join(" › ")}`;
    });
    function p(C, x) {
      return C.length <= x ? C : `${C.slice(0, x - 1).trimEnd()}…`;
    }
    const h = k(() => p(s.value, r.value.titleMax)), m = k(() => p(i.value, r.value.descriptionMax));
    function b(C, x, v) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > v ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < x ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = k(
      () => b(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = k(
      () => b(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, x) => (t(), n("div", rk, [
      o("div", ik, [
        o("p", uk, c(d.value), 1),
        o("p", {
          class: O(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", h.value === "" ? "text-muted-foreground italic" : ""])
        }, c(h.value || "Untitled page"), 3),
        o("p", {
          class: O(["text-muted-foreground mt-1 line-clamp-2 text-sm", m.value === "" ? "italic" : ""])
        }, c(m.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", dk, [
        o("span", {
          class: O(M.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(M.value.note), 3),
        o("span", {
          class: O(w.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(w.value.note), 3)
      ]),
      x[0] || (x[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function fk() {
  Se("radio", Yd), Se("checkboxlist", ec), Se("tags", rc), Se("colour", xc), Se("slider", Sc), Se("visual-select", Ec), Se("markdown", zd), Se("code", Td), Se("seo-preview", ck), mt("swatch", Fc), mt("voucher-code-box", sk), mt("document-colour-mode", ok);
}
function ha() {
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
  }), he(() => a?.disconnect()), { el: e, shown: l };
}
const mk = /* @__PURE__ */ A({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = ha();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: O(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", y(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      K(r.$slots, "default")
    ], 6));
  }
}), pk = ["id"], Ce = /* @__PURE__ */ A({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, a) => (t(), n("section", {
      id: e.id,
      class: O(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: O(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        I(mk, null, {
          default: j(() => [
            K(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, pk));
  }
}), vk = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, gk = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, hk = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Ve = /* @__PURE__ */ A({
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
      class: O(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", vk, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), n("h2", gk, c(e.title), 1)) : $("", !0),
      e.body ? (t(), n("p", hk, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
});
function bk() {
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
  }), he(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const xk = { class: "pk-tilt-inner relative h-full" }, yk = /* @__PURE__ */ A({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = bk();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", xk, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        K(a.$slots, "default")
      ])
    ], 512));
  }
}), kk = { class: "flex flex-col gap-10" }, $k = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, wk = { class: "text-base font-semibold" }, Ck = { class: "text-sm text-pretty text-muted-foreground" }, Sk = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(Ce, null, {
      default: j(() => [
        o("div", kk, [
          I(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", $k, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), V(yk, {
              key: i,
              class: O(l(s.span))
            }, {
              default: j(() => [
                o("div", {
                  class: O([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", wk, c(s.title), 1),
                  o("p", Ck, c(s.body), 1)
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
}), Mk = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Bk = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, _k = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Pk = ["href"], zk = /* @__PURE__ */ A({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), V(Ce, null, {
      default: j(() => [
        o("div", Mk, [
          o("h2", Bk, c(e.title), 1),
          e.body ? (t(), n("p", _k, c(e.body), 1)) : $("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, Pk)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Ak = { class: "flex flex-col gap-8" }, Ok = { class: "divide-y rounded-lg border" }, jk = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Lk = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Vk = /* @__PURE__ */ A({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V(Ce, { narrow: "" }, {
      default: j(() => [
        o("div", Ak, [
          I(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Ok, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", jk, [
                N(c(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Lk, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Dk = { class: "flex flex-col gap-10" }, Tk = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Ek = { class: "text-sm font-semibold" }, Ik = { class: "text-sm text-pretty text-muted-foreground" }, Fk = /* @__PURE__ */ A({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V(Ce, null, {
      default: j(() => [
        o("div", Dk, [
          I(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Tk, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", Ek, c(r.title), 1),
              o("p", Ik, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Nk = { class: "flex flex-col items-center gap-6 text-center" }, Rk = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Uk = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, Hk = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, qk = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Kk = ["href"], Gk = ["href"], Wk = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, Zk = /* @__PURE__ */ A({
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
    return (l, a) => (t(), V(Ce, null, {
      default: j(() => [
        o("div", Nk, [
          e.eyebrow ? (t(), n("p", Rk, c(e.eyebrow), 1)) : $("", !0),
          o("h1", Uk, c(e.title), 1),
          e.body ? (t(), n("p", Hk, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", qk, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, Kk)) : $("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, Gk)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), n("p", Wk, c(e.note), 1)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Jk = { class: "flex flex-col items-center gap-6" }, Yk = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, Xk = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, Qk = /* @__PURE__ */ A({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V(Ce, { muted: "" }, {
      default: j(() => [
        o("div", Jk, [
          e.title ? (t(), n("p", Yk, c(e.title), 1)) : $("", !0),
          o("ul", Xk, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), e2 = { class: "flex flex-col gap-10" }, t2 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, a2 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, n2 = ["aria-pressed"], l2 = ["aria-pressed"], o2 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, s2 = { class: "grid gap-4 md:grid-cols-3" }, r2 = { class: "flex flex-col gap-1" }, i2 = { class: "text-sm font-semibold" }, u2 = { class: "flex items-baseline gap-1" }, d2 = { class: "text-3xl font-semibold tracking-tight" }, c2 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, f2 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, m2 = { class: "flex flex-col gap-2 text-sm" }, p2 = { class: "text-muted-foreground" }, v2 = ["href"], g2 = /* @__PURE__ */ A({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = q(!1), r = k(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, u) => (t(), V(Ce, { muted: "" }, {
      default: j(() => [
        o("div", e2, [
          I(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", t2, [
            o("div", a2, [
              o("button", {
                type: "button",
                class: O([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, n2),
              o("button", {
                type: "button",
                class: O([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, l2)
            ]),
            e.annualNote ? (t(), n("p", o2, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", s2, [
            (t(!0), n(z, null, L(e.items ?? [], (d, p) => (t(), n("li", {
              key: p,
              class: O(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", r2, [
                o("h3", i2, c(d.name), 1),
                o("p", u2, [
                  o("span", d2, c(s(d)), 1),
                  d.period ? (t(), n("span", c2, c(d.period), 1)) : $("", !0)
                ]),
                d.body ? (t(), n("p", f2, c(d.body), 1)) : $("", !0)
              ]),
              o("ul", m2, [
                (t(!0), n(z, null, L(d.features ?? [], (h, m) => (t(), n("li", {
                  key: m,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", p2, c(h.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: O([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(d.label), 11, v2)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function h2() {
  const e = q(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), p = d.height + window.innerHeight, h = p <= 0 ? 0 : (window.innerHeight - d.top) / p;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(h, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return pe(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, d || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((p) => {
        s = p.some((h) => h.isIntersecting), s && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), he(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const b2 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, x2 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, y2 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, k2 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, $2 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, w2 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, C2 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, S2 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, M2 = { class: "ml-3 truncate text-xs text-muted-foreground" }, B2 = { class: "flex" }, _2 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, P2 = { class: "min-w-0 flex-1 p-4" }, z2 = { class: "flex flex-col divide-y rounded-md border" }, A2 = /* @__PURE__ */ A({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = h2();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", b2, [
        o("div", x2, [
          o("div", y2, [
            o("h2", k2, c(e.title), 1),
            e.body ? (t(), n("p", $2, c(e.body), 1)) : $("", !0)
          ]),
          o("div", w2, [
            o("div", C2, [
              o("div", S2, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", M2, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", B2, [
                o("div", _2, [
                  (t(), n(z, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", P2, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", z2, [
                    (t(!0), n(z, null, L(e.rows, (s) => (t(), n("div", {
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
}), O2 = /* @__PURE__ */ A({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = ha(), s = q(0);
    return ce(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), p = (h) => {
        const m = Math.min((h - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - m, 3)), m < 1 ? requestAnimationFrame(p) : s.value = l.to;
      };
      requestAnimationFrame(p);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), j2 = { class: "flex flex-col gap-10" }, L2 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, V2 = { class: "order-2 text-sm text-muted-foreground" }, D2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, T2 = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(Ce, { muted: "" }, {
      default: j(() => [
        o("div", j2, [
          I(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", L2, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", V2, c(s.label), 1),
              o("dd", D2, [
                l(s.value) ? (t(), V(O2, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
                  N(c(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), E2 = { class: "flex flex-col gap-10" }, I2 = { class: "grid gap-6 md:grid-cols-3" }, F2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, N2 = { class: "text-sm font-semibold" }, R2 = { class: "text-sm text-pretty text-muted-foreground" }, U2 = /* @__PURE__ */ A({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V(Ce, null, {
      default: j(() => [
        o("div", E2, [
          I(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", I2, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", F2, c(s + 1), 1),
              o("h3", N2, c(r.title), 1),
              o("p", R2, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), H2 = { class: "flex flex-col gap-10" }, q2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, K2 = { class: "text-pretty text-sm leading-relaxed" }, G2 = { class: "mt-auto flex items-center gap-3" }, W2 = ["src"], Z2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, J2 = { class: "min-w-0" }, Y2 = { class: "block truncate text-sm font-medium" }, X2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, Q2 = /* @__PURE__ */ A({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V(Ce, null, {
      default: j(() => [
        o("div", H2, [
          I(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", q2, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", K2, " “" + c(r.quote) + "” ", 1),
              o("figcaption", G2, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, W2)) : (t(), n("span", Z2, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", J2, [
                  o("span", Y2, c(r.name), 1),
                  r.role ? (t(), n("span", X2, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Y4 = /* @__PURE__ */ A({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: Zk,
      logos: Qk,
      features: Fk,
      bento: Sk,
      showcase: A2,
      steps: U2,
      stats: T2,
      testimonials: Q2,
      pricing: g2,
      faq: Vk,
      cta: zk
    }, s = k(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(z, null, L(s.value, (d) => (t(), V(xe(d.component), oe({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), e$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, X4 = /* @__PURE__ */ A({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", e$, [
      o("div", {
        class: O([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      o("div", {
        class: O([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      o("div", {
        class: O([
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
}), t$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Q4 = /* @__PURE__ */ A({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", t$, [...a[0] || (a[0] = [
      $t('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), a$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, e5 = /* @__PURE__ */ A({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", a$, [...a[0] || (a[0] = [
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
fk();
const t5 = "0.0.1";
export {
  k4 as AdminDirectory,
  mu as Alert,
  pu as AlertDescription,
  vu as AlertTitle,
  r4 as AppPageFooter,
  P$ as AppearanceDrawer,
  ww as Avatar,
  Cw as AvatarFallback,
  Sw as AvatarImage,
  At as BADGE_VARIANTS,
  S$ as BadgeResolver,
  p4 as BarChart,
  Mw as Breadcrumb,
  Bw as BreadcrumbEllipsis,
  _w as BreadcrumbItem,
  Pw as BreadcrumbLink,
  zw as BreadcrumbList,
  Aw as BreadcrumbPage,
  Ow as BreadcrumbSeparator,
  f$ as BulkActions,
  Yw as Card,
  Xw as CardAction,
  Qw as CardContent,
  e4 as CardDescription,
  t4 as CardFooter,
  a4 as CardHeader,
  n4 as CardTitle,
  Gb as CartPanel,
  z4 as CatalogBrowser,
  bg as CatalogCard,
  ga as CatalogFilterSheet,
  Lt as CatalogGrid,
  _4 as CatalogInspect,
  D1 as CatalogItemDetail,
  P4 as CatalogItemView,
  A4 as CatalogRegister,
  B4 as CatalogTill,
  Up as ChartCard,
  Xe as ChartTooltip,
  Mo as Checkbox,
  y$ as CheckboxCell,
  k$ as CodeCell,
  Br as ColourCell,
  x4 as ComboChart,
  So as CreateOptionDialog,
  fo as CreateOptionError,
  j4 as DASHBOARD_HIDDEN_STORAGE_KEY,
  hx as DASHBOARD_HIDE_KEY,
  L4 as DashboardShortcuts,
  cl as DataTable,
  Fw as Dialog,
  Nw as DialogClose,
  Rw as DialogContent,
  Uw as DialogDescription,
  Hw as DialogFooter,
  qw as DialogHeader,
  Xu as DialogOverlay,
  Kw as DialogScrollContent,
  Gw as DialogTitle,
  Ww as DialogTrigger,
  k4 as DirectoryPage,
  uw as DropdownMenu,
  dw as DropdownMenuCheckboxItem,
  cw as DropdownMenuContent,
  fw as DropdownMenuGroup,
  mw as DropdownMenuItem,
  pw as DropdownMenuLabel,
  l5 as DropdownMenuPortal,
  vw as DropdownMenuRadioGroup,
  gw as DropdownMenuRadioItem,
  hw as DropdownMenuSeparator,
  bw as DropdownMenuShortcut,
  xw as DropdownMenuSub,
  yw as DropdownMenuSubContent,
  kw as DropdownMenuSubTrigger,
  $w as DropdownMenuTrigger,
  w$ as EditableCell,
  Ie as FormFieldControl,
  y4 as HeatmapChart,
  dt as ICON_PATHS,
  xr as IconCell,
  $r as ImageCell,
  K4 as InfoNode,
  ku as JPEG_IMAGE_ERROR,
  $$ as KeyValueCell,
  Zw as Label,
  om as LineChart,
  Bb as LineItems,
  lt as MiniStatCard,
  jw as NavigationMenu,
  Lw as NavigationMenuContent,
  Vw as NavigationMenuIndicator,
  Dw as NavigationMenuItem,
  Tw as NavigationMenuLink,
  Ew as NavigationMenuList,
  Iw as NavigationMenuTrigger,
  Ju as NavigationMenuViewport,
  yu as OPAQUE_IMAGE_ERROR,
  G4 as PaymentGatewaySettings,
  R0 as PaymentGateways,
  v4 as PieChart,
  j$ as PkAlertError,
  X4 as PkAuroraBackdrop,
  Ke as PkBadge,
  Sk as PkBento,
  z$ as PkBottomNav,
  l4 as PkBoundary,
  d4 as PkBuilder,
  se as PkButton,
  o4 as PkCard,
  ec as PkCheckboxList,
  pa as PkCodeBox,
  Td as PkCodeInput,
  xc as PkColourPicker,
  e5 as PkConsoleBackdrop,
  O2 as PkCountUp,
  zk as PkCta,
  i4 as PkDeviceFrame,
  bf as PkDocument,
  Ee as PkDropdown,
  Q4 as PkEditorialBackdrop,
  Vk as PkFaq,
  Fk as PkFeatureGrid,
  ye as PkFieldLabel,
  la as PkFileUpload,
  _e as PkHeading,
  Zk as PkHero,
  es as PkKeyValue,
  Y4 as PkLandingSections,
  Qk as PkLogoCloud,
  zd as PkMarkdownInput,
  We as PkModal,
  zt as PkMultiSelect,
  O$ as PkOtpInput,
  R4 as PkPasskeyRegister,
  L$ as PkPasswordInput,
  g2 as PkPricing,
  gb as PkQtyStepper,
  Hr as PkQueryBuilder,
  Yd as PkRadioGroup,
  u4 as PkRepeater,
  mk as PkReveal,
  ds as PkRichEditor,
  Ce as PkSection,
  Ve as PkSectionHeading,
  A2 as PkShowcase,
  Y1 as PkSignaturePad,
  Fe as PkSkeleton,
  Vt as PkSlideover,
  Sc as PkSlider,
  A$ as PkSpinner,
  T2 as PkStats,
  be as PkStatusBadge,
  uo as PkStepIndicator,
  U2 as PkSteps,
  Fc as PkSwatchPreview,
  rc as PkTagsInput,
  Q2 as PkTestimonials,
  ge as PkTextInput,
  yk as PkTiltCard,
  Ec as PkVisualSelect,
  qg as PlanCard,
  M4 as PlanEditor,
  S4 as PlanGrid,
  b4 as PolarAreaChart,
  h4 as RadarChart,
  M$ as RecordActions,
  U4 as RecordForm,
  x$ as RelationCreateDialog,
  m$ as RelationPanel,
  Zv as STATUS_TONES,
  g4 as ScatterChart,
  oa as SchemaNode,
  w4 as SegmentedBar,
  T4 as SelectionBar,
  qu as Separator,
  D4 as SetupChecklist,
  ua as ShadcnInput,
  Bu as Sheet,
  D$ as SheetClose,
  Pu as SheetContent,
  zu as SheetDescription,
  T$ as SheetFooter,
  Au as SheetHeader,
  Ou as SheetTitle,
  E$ as SheetTrigger,
  iv as ShortcutsWidget,
  I$ as Sidebar,
  F$ as SidebarContent,
  N$ as SidebarFooter,
  R$ as SidebarGroup,
  U$ as SidebarGroupAction,
  H$ as SidebarGroupContent,
  q$ as SidebarGroupLabel,
  K$ as SidebarHeader,
  G$ as SidebarInput,
  W$ as SidebarInset,
  Z$ as SidebarMenu,
  J$ as SidebarMenuAction,
  Y$ as SidebarMenuBadge,
  Q$ as SidebarMenuButton,
  ew as SidebarMenuItem,
  tw as SidebarMenuSkeleton,
  aw as SidebarMenuSub,
  nw as SidebarMenuSubButton,
  lw as SidebarMenuSubItem,
  ow as SidebarProvider,
  sw as SidebarRail,
  rw as SidebarSeparator,
  iw as SidebarTrigger,
  O4 as SignatureStudio,
  rt as Sparkline,
  Jw as Spinner,
  $4 as StatCard,
  C4 as StatListChart,
  V4 as StatStrip,
  Te as Switch,
  da as TRANSPARENT_IMAGE_HELP,
  E4 as TablePagination,
  I4 as TableShell,
  F4 as TableTabs,
  N4 as TableToolbar,
  m4 as ThemeToggle,
  Ru as Tooltip,
  Uu as TooltipContent,
  X$ as TooltipProvider,
  Hu as TooltipTrigger,
  va as TrendBadge,
  H4 as UnsavedBar,
  gu as alertVariants,
  Ci as appearanceVars,
  yt as applyAppearance,
  Mu as assertTransparentImage,
  qe as buttonClasses,
  ot as catalogFiltersActive,
  X as cn,
  po as createOptionActionLabel,
  mo as createOptionTitle,
  xg as cycleLabel,
  Pe as emptyCatalogFilters,
  co as fieldControl,
  h$ as fieldErrorsFromPayload,
  Qh as findExactSku,
  yg as formatPerkValue,
  Qr as hasBadgeValue,
  p$ as hasFieldControl,
  c4 as hasOptionPreview,
  ue as iconPath,
  Cu as imageHasTransparency,
  B$ as initializeAppearance,
  xt as isDark,
  Dt as matchCatalogItem,
  Yu as navigationMenuTriggerStyle,
  Mc as optionPreview,
  V$ as packWidgetColumns,
  kg as perkGranted,
  jt as readAppearance,
  fk as registerBuiltInFieldControls,
  Se as registerFieldControl,
  mt as registerOptionPreview,
  v$ as registeredFieldTypes,
  Bc as registeredOptionPreviews,
  g$ as resetFieldControls,
  f4 as resetOptionPreviews,
  _$ as setAppearancePersister,
  Ku as sidebarMenuButtonVariants,
  Qv as statusBadgeVariant,
  Xv as statusTone,
  b$ as toUrl,
  ia as useAppearance,
  W4 as useColumnVisibility,
  Z4 as useLiveUpdates,
  bk as usePointer,
  ha as useReveal,
  C$ as useSchemaColumns,
  h2 as useScrollProgress,
  s4 as useShellPageFooter,
  st as useSidebar,
  J4 as useTenantTheme,
  q4 as useUnsavedChanges,
  t5 as version
};
//# sourceMappingURL=index.js.map
