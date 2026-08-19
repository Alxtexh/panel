import './ui.css';
import { defineComponent as A, ref as G, watch as ue, useId as pa, computed as k, openBlock as t, createElementBlock as n, normalizeClass as O, createElementVNode as o, createCommentVNode as $, withModifiers as ce, unref as y, Fragment as z, renderList as L, createTextVNode as I, toDisplayString as c, createStaticVNode as ht, renderSlot as q, nextTick as Se, onBeforeUnmount as ve, createBlock as V, Teleport as Ie, createVNode as T, Transition as Ae, withCtx as j, onMounted as fe, normalizeStyle as ne, resolveDynamicComponent as he, mergeProps as le, withDirectives as de, vModelText as xe, normalizeProps as ye, guardReactiveProps as Pe, defineAsyncComponent as jt, inject as Xe, resolveComponent as bt, vShow as Oe, vModelSelect as Ve, vModelDynamic as va, isRef as ga, useTemplateRef as ha, onErrorCaptured as ba, provide as ct, useSlots as xa, markRaw as Ut, withKeys as ya, reactive as Ke, useModel as We, mergeModels as _e, createSlots as ka, shallowRef as $a, watchEffect as wa } from "vue";
import { Check as Ht, AlertCircle as Ca, EyeOff as Sa, Eye as Ma, X as xt, PanelLeftOpen as Ba, PanelLeftClose as _a, Circle as Pa, ChevronRight as qt, MoreHorizontal as za, ChevronDown as Aa, Loader2Icon as Oa } from "@lucide/vue";
import { reactiveOmit as re, useVModel as Kt, useMediaQuery as ja, useEventListener as La, defaultDocument as Va } from "@vueuse/core";
import { useForwardPropsEmits as me, CheckboxRoot as Da, CheckboxIndicator as Ta, SwitchRoot as Ea, SwitchThumb as Fa, DialogRoot as Gt, DialogClose as Ne, DialogOverlay as yt, DialogPortal as kt, DialogContent as $t, DialogDescription as Wt, DialogTitle as Zt, DialogTrigger as Jt, createContext as Ia, Primitive as Re, TooltipRoot as Na, TooltipPortal as Ra, TooltipContent as Ua, TooltipArrow as Ha, TooltipProvider as Yt, TooltipTrigger as qa, Separator as Ka, DropdownMenuRoot as Ga, DropdownMenuCheckboxItem as Wa, DropdownMenuItemIndicator as Xt, DropdownMenuPortal as Za, DropdownMenuContent as Ja, DropdownMenuGroup as Ya, useForwardProps as ke, DropdownMenuItem as Xa, DropdownMenuLabel as Qa, DropdownMenuRadioGroup as en, DropdownMenuRadioItem as tn, DropdownMenuSeparator as an, DropdownMenuSub as nn, DropdownMenuSubContent as ln, DropdownMenuSubTrigger as on, DropdownMenuTrigger as sn, AvatarRoot as rn, AvatarFallback as un, AvatarImage as dn, NavigationMenuViewport as cn, NavigationMenuRoot as fn, NavigationMenuContent as mn, NavigationMenuIndicator as pn, NavigationMenuItem as vn, NavigationMenuLink as gn, NavigationMenuList as hn, NavigationMenuTrigger as bn, Label as xn } from "reka-ui";
import { DropdownMenuPortal as J4 } from "reka-ui";
import { clsx as yn } from "clsx";
import { twMerge as kn } from "tailwind-merge";
import { cva as wt } from "class-variance-authority";
import { usePage as Qt, Link as $n } from "@inertiajs/vue3";
const wn = { class: "w-full border-collapse text-sm" }, Cn = { class: "bg-background sticky top-0 z-10" }, Sn = { class: "bg-muted/50" }, Mn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Bn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, _n = ["id", "checked", "indeterminate"], Pn = ["onClick"], zn = {
  key: 0,
  class: "text-xs"
}, An = {
  key: 1,
  class: "text-xs opacity-40"
}, On = { key: 1 }, jn = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Ln = {
  key: 0,
  class: "bg-muted/40"
}, Vn = ["colspan"], Dn = ["aria-expanded", "dusk", "onClick"], Tn = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, En = {
  key: 1,
  dusk: "group-header"
}, Fn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], In = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Nn = {
  key: 1,
  class: "px-3 py-2"
}, Rn = ["id", "value", "checked", "disabled", "aria-label", "onChange"], Un = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Hn = ["aria-label", "onClick"], qn = { class: "text-xs" }, Kn = { key: 1 }, Gn = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Wn = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, Zn = { key: 0 }, Jn = { class: "text-muted-foreground block text-[10px] font-medium" }, Yn = { class: "font-semibold tabular-nums" }, Xn = { key: 1 }, Qn = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, el = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, tl = { class: "font-medium" }, al = {
  key: 0,
  class: "text-sm"
}, nl = /* @__PURE__ */ A({
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
    function r(U) {
      if (!U || !a.groupBy)
        return "";
      if (U.__group !== void 0 && U.__group !== null)
        return String(U.__group);
      const J = U[a.groupBy.key];
      return J == null || J === "" ? "" : String(J);
    }
    function s(U) {
      return a.groupBy ? U === 0 ? !0 : r(a.rows[U]) !== r(a.rows[U - 1]) : !1;
    }
    function i(U) {
      if (U.__groupTitle)
        return String(U.__groupTitle);
      const J = a.groupBy ? U[a.groupBy.key] : null, E = J == null || J === "" ? "None" : String(J);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? E : `${a.groupBy.label}: ${E}`;
    }
    const u = G(/* @__PURE__ */ new Set()), d = G(/* @__PURE__ */ new Set());
    function f(U) {
      return a.groupBy?.collapsible ? u.value.has(U) : !1;
    }
    function h(U) {
      if (!a.groupBy?.collapsible)
        return;
      const J = new Set(d.value);
      J.add(U), d.value = J;
      const E = new Set(u.value);
      E.has(U) ? E.delete(U) : E.add(U), u.value = E;
    }
    function p(U) {
      return a.groupBy?.collapsible ? !f(r(a.rows[U])) : !0;
    }
    ue(
      () => a.rows,
      (U) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const J = new Set(u.value);
        for (const E of U) {
          const W = r(E);
          W !== "" && !d.value.has(W) && J.add(W);
        }
        u.value = J;
      },
      { immediate: !0 }
    );
    const x = G(null), M = G(null);
    function w(U, J) {
      x.value = U, J.dataTransfer?.setData("text/plain", String(U)), J.dataTransfer && (J.dataTransfer.effectAllowed = "move");
    }
    function C() {
      x.value = null, M.value = null;
    }
    function b(U) {
      return x.value === null || M.value !== U ? "" : x.value > U ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function v(U, J) {
      x.value !== null && (J.preventDefault(), M.value = U);
    }
    function g(U) {
      const J = x.value;
      if (x.value = null, M.value = null, J === null || J === U)
        return;
      const E = a.rows.map((oe) => oe[a.rowKey]), [W] = E.splice(J, 1);
      E.splice(U, 0, W), m("reorder", E);
    }
    const m = l;
    function S(U, J) {
      !a.rowClickable || a.reordering || J.button !== 0 || J.metaKey || J.ctrlKey || J.shiftKey || J.altKey || J.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", U);
    }
    const B = G(null), P = pa(), Z = k(() => a.columns.filter((U) => !a.hidden?.has(U.key)));
    function F(U) {
      const J = U[a.rowKey];
      return J == null || J === "" ? null : J;
    }
    function te(U) {
      const J = F(U);
      return J !== null && !!a.selected?.has(J);
    }
    function H(U) {
      const J = F(U);
      J !== null && m("toggle-row", J);
    }
    const Y = k(
      () => a.rows.map((U) => F(U)).filter((U) => U !== null)
    ), X = k(
      () => Y.value.length > 0 && Y.value.every((U) => a.selected?.has(U))
    ), ae = k(
      () => !X.value && Y.value.some((U) => a.selected?.has(U))
    );
    function N(U) {
      return U.sortKey ?? U.key;
    }
    function D(U) {
      return a.sort === N(U);
    }
    async function ee(U, J, E) {
      try {
        await navigator.clipboard.writeText(String(E)), B.value = `${U}-${J.key}`, setTimeout(() => B.value = null, 1200);
      } catch {
      }
    }
    const _ = k(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function K(U) {
      return a.summaries?.[U] ?? null;
    }
    function R(U) {
      const J = a.summaries?.[U], E = a.summaryValues?.[U];
      if (!J)
        return "";
      if (E == null)
        return "-";
      const W = J.divideBy ? E / J.divideBy : E, oe = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: J.decimals,
        maximumFractionDigits: J.decimals
      }).format(W);
      return `${J.prefix ?? ""}${oe}${J.suffix ?? ""}`;
    }
    return (U, J) => (t(), n("div", {
      class: O(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", wn, [
        o("thead", Cn, [
          o("tr", Sn, [
            e.reordering ? (t(), n("th", Mn)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Bn, [
              o("input", {
                id: `${y(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: X.value,
                indeterminate: ae.value,
                "aria-label": "Select all rows on this page",
                onClick: J[0] || (J[0] = ce(() => {
                }, ["stop"])),
                onChange: J[1] || (J[1] = ce((E) => m("toggle-page", !X.value), ["stop"]))
              }, null, 40, _n)
            ])) : $("", !0),
            (t(!0), n(z, null, L(Z.value, (E) => (t(), n("th", {
              key: E.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              E.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (W) => m("sort", N(E))
              }, [
                I(c(E.label) + " ", 1),
                D(E) ? (t(), n("span", zn, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", An, "↕"))
              ], 8, Pn)) : (t(), n("span", On, c(E.label), 1))
            ]))), 128)),
            U.$slots.actions ? (t(), n("th", jn, [...J[3] || (J[3] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        o("tbody", {
          class: O(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, L(e.rows, (E, W) => (t(), n(z, {
            key: F(E) ?? `row-${W}`
          }, [
            e.groupBy && s(W) ? (t(), n("tr", Ln, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !f(r(E)),
                  dusk: `group-header-${r(E) || "none"}`,
                  onClick: (oe) => h(r(E))
                }, [
                  o("span", Tn, c(f(r(E)) ? "▸" : "▾"), 1),
                  I(" " + c(i(E)), 1)
                ], 8, Dn)) : (t(), n("span", En, c(i(E)), 1))
              ], 8, Vn)
            ])) : $("", !0),
            p(W) ? (t(), n("tr", {
              key: 1,
              class: O(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                te(E) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                x.value === W ? "opacity-40" : "",
                b(W),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (oe) => w(W, oe),
              onDragover: (oe) => v(W, oe),
              onDrop: ce((oe) => g(W), ["prevent"]),
              onDragend: C,
              onContextmenu: (oe) => m("row-contextmenu", E, oe),
              onClick: (oe) => S(E, oe)
            }, [
              e.reordering ? (t(), n("td", In, [...J[4] || (J[4] = [
                ht('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-0d8c8f99><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-0d8c8f99><circle cx="9" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="18" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="18" r="1.5" data-v-0d8c8f99></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), n("td", Nn, [
                o("input", {
                  id: `${y(P)}-row-${F(E) ?? W}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: F(E) ?? void 0,
                  checked: te(E),
                  disabled: F(E) === null,
                  "aria-label": F(E) === null ? "This row has no id and cannot be selected" : `Select row ${F(E)}`,
                  onClick: J[2] || (J[2] = ce(() => {
                  }, ["stop"])),
                  onChange: ce((oe) => H(E), ["stop"])
                }, null, 40, Rn)
              ])) : $("", !0),
              (t(!0), n(z, null, L(Z.value, (oe) => (t(), n("td", {
                key: oe.key,
                class: O(["px-3 py-2 whitespace-nowrap", oe.cellClass])
              }, [
                q(U.$slots, `cell:${oe.key}`, {
                  row: E,
                  value: E[oe.key],
                  column: oe
                }, () => [
                  oe.copyable ? (t(), n("span", Un, [
                    I(c(E[oe.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${oe.label.toLowerCase()}`,
                      onClick: (je) => ee(String(E[e.rowKey]), oe, E[oe.key])
                    }, [
                      o("span", qn, c(B.value === `${E[e.rowKey]}-${oe.key}` ? "✓" : "⧉"), 1)
                    ], 8, Hn)
                  ])) : (t(), n("span", Kn, c(E[oe.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              U.$slots.actions ? (t(), n("td", Gn, [
                q(U.$slots, "actions", { row: E }, void 0, !0)
              ])) : $("", !0)
            ], 42, Fn)) : $("", !0)
          ], 64))), 128))
        ], 2),
        _.value ? (t(), n("tfoot", Wn, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Zn)) : $("", !0),
            (t(!0), n(z, null, L(e.columns, (E) => (t(), n(z, {
              key: `s-${E.key}`
            }, [
              e.hidden?.has(E.key) ? $("", !0) : (t(), n("td", {
                key: 0,
                class: O(["px-3 py-2 align-top text-sm whitespace-nowrap", E.cellClass])
              }, [
                K(E.key) ? (t(), n(z, { key: 0 }, [
                  o("span", Jn, c(K(E.key).label), 1),
                  o("span", Yn, c(R(E.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            U.$slots.actions ? (t(), n("td", Xn)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", Qn, [
        J[5] || (J[5] = o("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        q(U.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", el, [
        o("p", tl, c(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", al, c(e.emptyHint), 1)) : $("", !0)
      ])) : $("", !0)
    ], 2));
  }
}), Ct = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, ll = /* @__PURE__ */ Ct(nl, [["__scopeId", "data-v-0d8c8f99"]]), ol = ["aria-label"], sl = { class: "border-b px-5 py-4" }, rl = { class: "text-base font-semibold" }, il = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, ul = { class: "px-5 py-4" }, dl = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, Ge = /* @__PURE__ */ A({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(null);
    let i = null;
    const u = G(!1);
    function d(p) {
      u.value = p.target === p.currentTarget;
    }
    function f(p) {
      u.value && p.target === p.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function h(p) {
      if (!a.open)
        return;
      if (p.key === "Escape" && !a.busy) {
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
      const M = x[0], w = x[x.length - 1];
      p.shiftKey && document.activeElement === M ? (p.preventDefault(), w.focus()) : !p.shiftKey && document.activeElement === w && (p.preventDefault(), M.focus());
    }
    return ue(
      () => a.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", h), Se(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", h), i?.focus(), i = null);
      }
    ), ve(() => document.removeEventListener("keydown", h)), (p, x) => (t(), V(Ie, { to: "body" }, [
      T(Ae, {
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
              o("div", sl, [
                o("h2", rl, c(e.title), 1),
                e.description ? (t(), n("p", il, c(e.description), 1)) : $("", !0)
              ]),
              o("div", ul, [
                q(p.$slots, "default")
              ]),
              o("div", dl, [
                q(p.$slots, "footer")
              ])
            ], 8, ol)
          ], 32)) : $("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ot = {
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
function ie(e) {
  return e ? ot[e] ?? ot.dot : ot.dot;
}
const cl = 160, Te = /* @__PURE__ */ A({
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
    const a = e, r = G(!1), s = G(null), i = G(null), u = G({ top: 0, left: 0, minWidth: 0 }), d = G(null);
    let f = null;
    function h(S) {
      !a.dismissOnPanelClick || S.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function p() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await Se(), b());
    }
    function x() {
      f = setTimeout(C, 180);
    }
    async function M() {
      d.value = null, r.value = !r.value, r.value && (await Se(), b());
    }
    async function w(S, B) {
      d.value = { x: S, y: B }, r.value = !0, await Se(), b();
    }
    function C() {
      r.value = !1, d.value = null;
    }
    function b() {
      const S = s.value, B = i.value;
      if (!S || !B)
        return;
      const P = B.getBoundingClientRect(), Z = 8, F = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : S.getBoundingClientRect();
      let te, H;
      if (a.placement === "bottom")
        te = F.bottom + a.offset, te + P.height > window.innerHeight - Z && F.top - P.height - a.offset > Z && (te = F.top - P.height - a.offset), H = a.align === "end" && !d.value ? F.right - P.width : F.left;
      else {
        te = F.top;
        const Y = a.placement === "right", X = F.right + a.offset + P.width < window.innerWidth - Z, ae = F.left - a.offset - P.width > Z;
        H = (Y ? X || !ae : !ae && X) ? F.right + a.offset : F.left - a.offset - P.width;
      }
      H = Math.min(Math.max(Z, H), window.innerWidth - P.width - Z), te = Math.min(Math.max(Z, te), window.innerHeight - P.height - Z), u.value = { top: te, left: H, minWidth: Math.max(F.width, cl) };
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
    function m() {
      if (r.value) {
        if (d.value) {
          C();
          return;
        }
        b();
      }
    }
    return fe(() => {
      document.addEventListener("pointerdown", v), document.addEventListener("keydown", g), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m);
    }), ve(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", g), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), l({ close: C, openAt: w }), (S, B) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: B[2] || (B[2] = (P) => e.hoverable && p()),
      onPointerleave: B[3] || (B[3] = (P) => e.hoverable && x())
    }, [
      o("div", { onClick: M }, [
        q(S.$slots, "trigger", { open: r.value })
      ]),
      (t(), V(Ie, { to: "body" }, [
        T(Ae, {
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
              onPointerenter: B[0] || (B[0] = (P) => e.hoverable && p()),
              onPointerleave: B[1] || (B[1] = (P) => e.hoverable && x()),
              onClick: h
            }, [
              q(S.$slots, "panel", { close: C })
            ], 38)) : $("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), fl = ["disabled"], ml = { class: "py-0.5" }, pl = ["disabled", "onClick"], vl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gl = ["d"], hl = ["disabled"], bl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xl = ["d"], yl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, kl = ["disabled", "onClick"], $l = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wl = ["d"], Cl = { class: "text-muted-foreground text-sm" }, Sl = { class: "text-foreground font-medium tabular-nums" }, Ml = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Bl = ["disabled"], _l = { class: "text-muted-foreground text-sm" }, Pl = { class: "text-foreground font-medium tabular-nums" }, zl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Al = ["disabled"], l$ = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(null), i = G(!1), u = k(() => a.allMatching ? a.total : a.count), d = k(() => u.value !== void 0), f = k(() => d.value && u.value === 0), h = k(() => a.actions.filter((g) => !g.destructive)), p = k(() => a.actions.filter((g) => g.destructive)), x = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function M(g) {
      return x[g.color ?? "gray"] ?? x.gray;
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
    function b() {
      i.value = !1, r("export");
    }
    const v = (g) => new Intl.NumberFormat().format(g);
    return (g, m) => (t(), n(z, null, [
      T(Te, null, {
        trigger: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...m[5] || (m[5] = [
            I(" Bulk actions ", -1),
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
          ])], 8, fl)
        ]),
        panel: j(() => [
          o("div", ml, [
            (t(!0), n(z, null, L(h.value, (S) => (t(), n("button", {
              key: S.key,
              type: "button",
              role: "menuitem",
              class: O(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(S)]),
              disabled: e.busy,
              onClick: (B) => w(S)
            }, [
              (t(), n("svg", vl, [
                o("path", {
                  d: y(ie)(S.icon)
                }, null, 8, gl)
              ])),
              I(" " + c(S.label), 1)
            ], 10, pl))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (S) => i.value = !0)
            }, [
              (t(), n("svg", bl, [
                o("path", {
                  d: y(ie)("download")
                }, null, 8, xl)
              ])),
              m[6] || (m[6] = I(" Export CSV ", -1))
            ], 8, hl)) : $("", !0),
            p.value.length ? (t(), n("div", yl, [
              (t(!0), n(z, null, L(p.value, (S) => (t(), n("button", {
                key: S.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (B) => w(S)
              }, [
                (t(), n("svg", $l, [
                  o("path", {
                    d: y(ie)(S.icon ?? "trash")
                  }, null, 8, wl)
                ])),
                I(" " + c(S.label), 1)
              ], 8, kl))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      T(Ge, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: m[2] || (m[2] = (S) => s.value = null)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[1] || (m[1] = (S) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: O([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || f.value,
            onClick: C
          }, c(s.value?.label), 11, Bl)
        ]),
        default: j(() => [
          o("p", Cl, [
            m[7] || (m[7] = I(" This will affect ", -1)),
            o("span", Sl, [
              d.value ? (t(), n(z, { key: 1 }, [
                I(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                I("…")
              ], 64))
            ]),
            m[8] || (m[8] = I(" . ", -1))
          ]),
          f.value ? (t(), n("p", Ml, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      T(Ge, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: m[4] || (m[4] = (S) => i.value = !1)
      }, {
        footer: j(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[3] || (m[3] = (S) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || f.value,
            onClick: b
          }, " Export CSV ", 8, Al)
        ]),
        default: j(() => [
          o("p", _l, [
            m[9] || (m[9] = I(" This will export ", -1)),
            o("span", Pl, [
              d.value ? (t(), n(z, { key: 1 }, [
                I(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                I("…")
              ], 64))
            ]),
            m[10] || (m[10] = I(" . ", -1))
          ]),
          f.value ? (t(), n("p", zl, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Ol = { class: "bg-card overflow-hidden rounded-lg border" }, jl = { class: "pk-scroll w-full overflow-x-auto" }, Ll = { class: "w-full border-collapse text-sm" }, Vl = { class: "bg-muted/40" }, Dl = { class: "divide-y" }, Tl = { key: 0 }, El = ["colspan"], Fl = { key: 1 }, Il = ["colspan"], Nl = ["href"], Rl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Ul = ["disabled"], Hl = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, ql = ["href"], o$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), n("div", Ol, [
      o("div", jl, [
        o("table", Ll, [
          o("thead", Vl, [
            o("tr", null, [
              (t(!0), n(z, null, L(s.value, (f) => (t(), n("th", {
                key: f.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, c(f.label), 1))), 128))
            ])
          ]),
          o("tbody", Dl, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", Tl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, El)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", Fl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, c(e.emptyText), 9, Il)
            ])) : $("", !0),
            (t(!0), n(z, null, L(e.rows, (f, h) => (t(), n("tr", {
              key: f.id ?? h,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(z, null, L(s.value, (p) => (t(), n("td", {
                key: p.key,
                class: O(["px-3 py-2 whitespace-nowrap", [
                  p.mono ? "font-mono text-xs" : "",
                  p.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                q(u.$slots, `cell:${p.key}`, {
                  row: f,
                  value: f[p.key],
                  column: p
                }, () => [
                  e.recordBase && f.id != null && p === s.value[0] ? (t(), n("a", {
                    key: 0,
                    href: `${e.recordBase}/${f.id}`,
                    class: "text-foreground underline-offset-2 hover:underline"
                  }, c(i(p, f[p.key])), 9, Nl)) : (t(), n(z, { key: 1 }, [
                    I(c(i(p, f[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", Rl, [
        o("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (f) => r("load", e.nextCursor))
        }, c(e.loading ? "Loading…" : "Load more"), 9, Ul)
      ])) : e.capped ? (t(), n("p", Hl, [
        I(" Showing the first " + c(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), n("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, ql)) : (t(), n(z, { key: 1 }, [
          I("Open the full list to search or filter the rest.")
        ], 64))
      ])) : $("", !0)
    ]));
  }
}), Kl = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Gl = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Wl = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function He(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [Kl, Gl[l], Wl[a], e.class].filter(Boolean).join(" ");
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
      () => He({ variant: l.variant, size: l.size, class: l.class })
    ), r = k(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), V(he(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: O(a.value)
    }, {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), Zl = { class: "flex items-center gap-2 overflow-x-auto" }, Jl = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yl = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xl = { class: "flex flex-col" }, Ql = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, eo = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, to = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, ao = /* @__PURE__ */ A({
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
    return (f, h) => (t(), n("ol", Zl, [
      (t(!0), n(z, null, L(e.steps, (p, x) => (t(), n("li", {
        key: x,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), V(he(e.interactive ? "button" : "div"), le({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(x)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: x > e.activeStep } : {}, {
          onClick: (M) => e.interactive && x <= e.activeStep && r("update:activeStep", x)
        }), {
          default: j(() => [
            o("span", {
              class: O(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(x)])
            }, [
              d(x) ? (t(), n("svg", Jl, [...h[0] || (h[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(x) ? (t(), n("svg", Yl, [...h[1] || (h[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                I(c(x + 1), 1)
              ], 64))
            ], 2),
            o("span", Xl, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), n("span", Ql, c(p.description), 1)) : $("", !0)
            ]),
            e.hasError(x) ? (t(), n("span", eo)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        x < e.steps.length - 1 ? (t(), n("span", to)) : $("", !0)
      ]))), 128))
    ]));
  }
}), Ze = /* @__PURE__ */ new Map();
function we(e, l) {
  Ze.set(e, l);
}
function no(e) {
  return Ze.get(e);
}
function s$(e) {
  return Ze.has(e);
}
function r$() {
  return [...Ze.keys()].sort();
}
function i$() {
  Ze.clear();
}
class lo extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function u$(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function oo(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function so(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const ro = ["aria-expanded"], io = ["aria-label", "onClick"], uo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, co = { class: "ml-auto flex shrink-0 items-center gap-1" }, fo = {
  key: 0,
  class: "border-b p-1"
}, mo = ["placeholder"], po = { class: "max-h-60 overflow-y-auto p-1" }, vo = ["aria-selected", "onMouseenter", "onClick"], go = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, St = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(null), i = G(null), u = G(null), d = G(!1), f = G(""), h = G(0), p = G({ top: 0, left: 0, width: 0 }), x = k(
      () => a.modelValue.map(
        (H) => a.options.find((Y) => Y.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), M = k(() => a.searchable ?? a.options.length > 6), w = k(() => {
      const H = new Set(a.modelValue), Y = f.value.trim().toLowerCase();
      return a.options.filter((X) => !H.has(X.value)).filter((X) => Y ? X.label.toLowerCase().includes(Y) : !0);
    }), C = k(() => a.max !== null && a.modelValue.length >= a.max);
    function b() {
      const H = s.value, Y = i.value;
      if (!H || !Y)
        return;
      const X = H.getBoundingClientRect(), ae = Y.getBoundingClientRect(), N = 8;
      let D = X.bottom + 4;
      D + ae.height > window.innerHeight - N && X.top - ae.height - 4 > N && (D = X.top - ae.height - 4), p.value = {
        top: D,
        left: Math.min(Math.max(N, X.left), window.innerWidth - X.width - N),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: X.width
      };
    }
    async function v() {
      a.disabled || d.value || (d.value = !0, f.value = "", h.value = 0, await Se(), b(), u.value?.focus());
    }
    function g() {
      d.value = !1, f.value = "";
    }
    function m() {
      d.value ? g() : v();
    }
    function S(H) {
      C.value || (r("update:modelValue", [...a.modelValue, H.value]), f.value = "", h.value = 0, Se(() => {
        b(), u.value?.focus();
      }));
    }
    function B(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((Y) => Y !== H)
      ), Se(b);
    }
    function P() {
      r("update:modelValue", []), Se(b);
    }
    function Z(H) {
      if (!a.disabled) {
        if (H.key === "Escape" && d.value) {
          H.stopPropagation(), g();
          return;
        }
        if (H.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          B(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), v();
          return;
        }
        if (d.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), h.value = Math.min(h.value + 1, w.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), h.value = Math.max(h.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const Y = w.value[h.value];
            Y && S(Y);
          }
        }
      }
    }
    function F(H) {
      if (!d.value)
        return;
      const Y = H.target;
      s.value?.contains(Y) || i.value?.contains(Y) || g();
    }
    function te() {
      d.value && b();
    }
    return ue(w, (H) => {
      h.value > H.length - 1 && (h.value = Math.max(0, H.length - 1));
    }), fe(() => {
      document.addEventListener("pointerdown", F), window.addEventListener("scroll", te, !0), window.addEventListener("resize", te);
    }), ve(() => {
      document.removeEventListener("pointerdown", F), window.removeEventListener("scroll", te, !0), window.removeEventListener("resize", te);
    }), (H, Y) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: Z
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
        onClick: m
      }, [
        (t(!0), n(z, null, L(x.value, (X) => (t(), n("span", {
          key: X.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          I(c(X.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${X.label}`,
            onClick: ce((ae) => B(X.value), ["stop"])
          }, [...Y[1] || (Y[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, io)
        ]))), 128)),
        x.value.length === 0 ? (t(), n("span", uo, c(e.placeholder), 1)) : $("", !0),
        o("span", co, [
          x.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ce(P, ["stop"])
          }, " Clear ")) : $("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: O(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...Y[2] || (Y[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, ro),
      (t(), V(Ie, { to: "body" }, [
        T(Ae, {
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
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              M.value ? (t(), n("div", fo, [
                de(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": Y[0] || (Y[0] = (X) => f.value = X),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: Z
                }, null, 40, mo), [
                  [xe, f.value]
                ])
              ])) : $("", !0),
              o("div", po, [
                (t(!0), n(z, null, L(w.value, (X, ae) => (t(), n("button", {
                  key: X.value,
                  type: "button",
                  class: O(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ae === h.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ae === h.value,
                  onMouseenter: (N) => h.value = ae,
                  onClick: (N) => S(X)
                }, c(X.label), 43, vo))), 128)),
                w.value.length === 0 ? (t(), n("p", go, [
                  C.value ? (t(), n(z, { key: 0 }, [
                    I("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(z, { key: 1 }, [
                    I("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
                    I("Everything is selected.")
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
}), ho = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, bo = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G({});
    ue(
      () => a.open,
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), V(Ge, {
      open: e.open,
      title: e.title,
      description: e.description,
      busy: e.processing,
      onClose: d[1] || (d[1] = (f) => r("close"))
    }, {
      footer: j(() => [
        T(se, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: d[0] || (d[0] = (f) => r("close"))
        }, {
          default: j(() => [...d[2] || (d[2] = [
            I(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        T(se, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            I(c(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ce(i, ["prevent"])
        }, [
          e.generalError ? (t(), n("p", ho, c(e.generalError), 1)) : $("", !0),
          (t(!0), n(z, null, L(e.fields, (f) => (t(), V(Ee, {
            key: f.key,
            field: f,
            value: s.value[f.key],
            error: e.errors[f.key],
            processing: e.processing,
            onChange: (h) => s.value[f.key] = h
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
});
function Q(...e) {
  return kn(yn(e));
}
function d$(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const xo = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(Da), le({ "data-slot": "checkbox" }, y(i), {
      class: y(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j((f) => [
        T(y(Ta), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            q(u.$slots, "default", ye(Pe(f)), () => [
              T(y(Ht), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), De = /* @__PURE__ */ A({
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
    const a = e, r = l, s = me(re(a, "class"), r);
    return (i, u) => (t(), V(y(Ea), le({ "data-slot": "switch" }, y(s), {
      class: y(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: j(() => [
        T(y(Fa), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), yo = ["accept", "disabled"], ko = { class: "text-sm font-medium" }, $o = { key: 0 }, wo = { key: 1 }, Co = { class: "text-muted-foreground text-xs" }, So = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Mo = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, Bo = ["src"], _o = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Po = { class: "min-w-0 flex-1" }, zo = { class: "block truncate text-sm font-medium" }, Ao = { class: "text-muted-foreground text-xs" }, Oo = ["href"], jo = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, ea = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(null), i = G(!1), u = G(null), d = G(null), f = G(null), h = k(() => a.accept.map((S) => `.${S}`).join(",")), p = k(() => f.value ?? a.modelValue?.url ?? null), x = k(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(a.maxKilobytes * 1024)}`);
    function M(S) {
      if (!S)
        return "";
      const B = ["B", "KB", "MB", "GB"];
      let P = S, Z = 0;
      for (; P >= 1024 && Z < B.length - 1; )
        P /= 1024, Z++;
      return `${P.toFixed(P < 10 && Z > 0 ? 1 : 0)} ${B[Z]}`;
    }
    function w(S) {
      return S.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(S) {
      return a.accept.length && !a.accept.includes(w(S.name)) ? `${w(S.name).toUpperCase() || "That"} files are not accepted here.` : S.size > a.maxKilobytes * 1024 ? `That file is ${M(S.size)}; the limit is ${M(a.maxKilobytes * 1024)}.` : null;
    }
    async function b(S) {
      const B = S?.[0];
      if (!(!B || a.disabled) && (d.value = C(B), !d.value)) {
        v(), a.image && B.type.startsWith("image/") && (f.value = URL.createObjectURL(B)), u.value = 0;
        try {
          const P = await a.upload(B, (Z) => {
            u.value = Z;
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
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function g() {
      const S = a.modelValue;
      v(), d.value = null, r("update:modelValue", null), S && !S.url && a.discard && await a.discard(S.value).catch(() => {
      });
    }
    function m(S) {
      i.value = !1, b(S.dataTransfer?.files ?? null);
    }
    return (S, B) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", Mo, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, Bo)) : (t(), n("span", _o, c(w(e.modelValue.name) || "file"), 1)),
        o("span", Po, [
          o("span", zo, c(e.modelValue.name), 1),
          o("span", Ao, [
            I(c(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              B[4] || (B[4] = I(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Oo)
            ], 64)) : (t(), n(z, { key: 1 }, [
              I(" · not saved yet")
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
        onDragover: B[1] || (B[1] = ce((P) => i.value = !0, ["prevent"])),
        onDragleave: B[2] || (B[2] = ce((P) => i.value = !1, ["prevent"])),
        onDrop: ce(m, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: h.value,
          disabled: e.disabled,
          onChange: B[0] || (B[0] = (P) => b(P.target.files))
        }, null, 40, yo),
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
        o("span", ko, [
          u.value === null ? (t(), n("span", $o, "Drop a file or click to choose")) : (t(), n("span", wo, "Uploading…"))
        ]),
        o("span", Co, c(x.value), 1),
        u.value !== null ? (t(), n("span", So, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${u.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      d.value ? (t(), n("p", jo, c(d.value), 1)) : $("", !0)
    ]));
  }
}), Lo = { class: "flex flex-col gap-2" }, Vo = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Do = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, To = { class: "flex flex-col gap-1" }, Eo = ["onUpdate:modelValue", "disabled", "aria-label"], Fo = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Io = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, No = ["onUpdate:modelValue", "disabled", "aria-label"], Ro = ["disabled", "aria-label", "onClick"], Uo = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Ho = { class: "flex items-center gap-3" }, qo = ["disabled"], Ko = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Go = /* @__PURE__ */ A({
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
    const u = G(d(a.modelValue));
    function d(b) {
      return b ? Object.entries(b).map(([v, g]) => ({
        uid: i++,
        key: v,
        value: g ?? ""
      })) : [];
    }
    ue(
      () => a.modelValue,
      (b) => {
        JSON.stringify(b ?? null) !== JSON.stringify(f()) && (u.value = d(b));
      }
    );
    function f() {
      const b = {};
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && (b[g] = v.value);
      }
      return Object.keys(b).length ? b : null;
    }
    function h() {
      r("update:modelValue", f());
    }
    const p = k(() => {
      const b = /* @__PURE__ */ new Map();
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && b.set(g, (b.get(g) ?? 0) + 1);
      }
      return new Set([...b.entries()].filter(([, v]) => v > 1).map(([v]) => v));
    }), x = k(
      () => new Set(
        u.value.map((b) => b.key.trim()).filter((b) => b !== "" && !s.test(b))
      )
    ), M = k(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function w() {
      M.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function C(b) {
      u.value = u.value.filter((v) => v.uid !== b), h();
    }
    return (b, v) => (t(), n("div", Lo, [
      u.value.length ? (t(), n("div", Vo, [
        o("div", Do, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          v[0] || (v[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, L(u.value, (g) => (t(), n("div", {
          key: g.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", To, [
            de(o("input", {
              "onUpdate:modelValue": (m) => g.key = m,
              type: "text",
              class: O([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(g.key.trim()) || x.value.has(g.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: h
            }, null, 42, Eo), [
              [xe, g.key]
            ]),
            x.value.has(g.key.trim()) ? (t(), n("p", Fo, " Letters, numbers, underscores and dashes only. ")) : p.value.has(g.key.trim()) ? (t(), n("p", Io, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          de(o("input", {
            "onUpdate:modelValue": (m) => g.value = m,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: h
          }, null, 40, No), [
            [xe, g.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${g.key || "this entry"}`,
            onClick: (m) => C(g.uid)
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
          ])], 8, Ro)
        ]))), 128))
      ])) : (t(), n("p", Uo, " Nothing here yet. ")),
      o("div", Ho, [
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
          I(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, qo),
        e.maxPairs !== null ? (t(), n("p", Ko, c(u.value.length) + " of " + c(e.maxPairs), 1)) : $("", !0)
      ])
    ]));
  }
}), Wo = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Zo = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Jo = ["disabled", "title", "aria-label", "onClick"], Yo = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xo = ["d"], Qo = ["disabled"], es = ["contenteditable", "data-placeholder"], ts = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, as = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(null);
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
    ], d = k(() => u.filter((C) => a.toolbar.includes(C.id))), f = k(() => a.toolbar.includes("link")), h = G(0);
    function p() {
      const C = s.value?.innerHTML ?? "", b = (s.value?.innerText ?? "").trim();
      h.value = b.length;
      const v = b === "" ? null : C;
      i = v, r("update:modelValue", v);
    }
    function x(C) {
      a.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), p());
    }
    function M() {
      if (a.disabled)
        return;
      const C = window.prompt("Link address");
      C && (s.value?.focus(), document.execCommand("createLink", !1, C), p());
    }
    function w(C) {
      C.preventDefault();
      const b = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, b), p();
    }
    return fe(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", h.value = s.value.innerText.trim().length);
    }), ue(
      () => a.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", h.value = s.value.innerText.trim().length);
      }
    ), (C, b) => (t(), n("div", Wo, [
      o("div", Zo, [
        (t(!0), n(z, null, L(d.value, (v) => (t(), n("button", {
          key: v.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: v.label,
          "aria-label": v.label,
          onMousedown: b[0] || (b[0] = ce(() => {
          }, ["prevent"])),
          onClick: (g) => x(v)
        }, [
          (t(), n("svg", Yo, [
            o("path", {
              d: v.path
            }, null, 8, Xo)
          ]))
        ], 40, Jo))), 128)),
        f.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: b[1] || (b[1] = ce(() => {
          }, ["prevent"])),
          onClick: M
        }, [...b[2] || (b[2] = [
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
        ])], 40, Qo)) : $("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: O(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: w
      }, null, 42, es),
      e.maxLength !== null ? (t(), n("div", ts, c(h.value) + " / " + c(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), ns = /* @__PURE__ */ Ct(as, [["__scopeId", "data-v-32c63bc7"]]), ls = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, os = { class: "flex items-center justify-between gap-2" }, ss = ["for"], rs = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, is = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs"
}, us = ["aria-label", "disabled"], ds = {
  key: 7,
  class: "flex flex-col gap-2"
}, cs = ["id", "value", "disabled"], fs = ["value"], ms = {
  key: 0,
  class: "relative"
}, ps = ["disabled"], vs = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, gs = { class: "max-h-56 overflow-y-auto p-1" }, hs = ["onClick"], bs = {
  key: 8,
  class: "relative"
}, xs = ["disabled", "aria-invalid"], ys = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, ks = { class: "max-h-56 overflow-y-auto p-1" }, $s = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, ws = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Cs = ["onClick"], Ss = ["id", "value", "disabled", "aria-invalid"], Ms = ["value"], Bs = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, _s = { class: "text-muted-foreground" }, Ps = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, zs = { class: "text-muted-foreground" }, As = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Os = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, js = ["aria-label", "disabled"], Ls = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Vs = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ds = ["aria-label", "disabled"], Ts = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Es = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Fs = ["aria-label", "disabled"], Is = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ns = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Rs = ["aria-label", "disabled"], Us = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Hs = ["disabled", "aria-pressed", "onClick"], qs = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Ks = ["title", "disabled", "onClick"], Gs = ["href"], Ws = {
  key: 19,
  class: "text-destructive text-xs",
  role: "alert"
}, Zs = {
  key: 20,
  class: "text-muted-foreground text-xs"
}, Js = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", Ys = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Ee = /* @__PURE__ */ A({
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
    const a = jt(() => import("./PkRepeater-J84jGe3T.js")), r = jt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = G(!1), d = G(""), f = G([]), h = G(!1), p = G(null);
    let x;
    ue(d, (J) => {
      s.searchOptions && (clearTimeout(x), h.value = !0, x = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(J);
        } catch {
        } finally {
          h.value = !1;
        }
      }, 200));
    });
    async function M() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, f.value.length === 0 && s.searchOptions)) {
        h.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          h.value = !1;
        }
      }
    }
    function w(J) {
      p.value = J.label, i("change", J.value), u.value = !1, d.value = "";
    }
    function C() {
      p.value = null, i("change", null);
    }
    const b = Xe("panelPicker", null), v = Xe("panelCreateOption", null), g = G(!1), m = G(!1), S = G({}), B = G(null), P = k(() => oo(s.field)), Z = k(() => so(s.field));
    function F() {
      S.value = {}, B.value = null, g.value = !0, u.value = !1;
    }
    function te() {
      m.value || (g.value = !1, S.value = {}, B.value = null);
    }
    async function H(J) {
      if (v) {
        m.value = !0, S.value = {}, B.value = null;
        try {
          const E = await v.run(s.field.key, { ...J });
          w(E), g.value = !1;
        } catch (E) {
          E instanceof lo ? (S.value = E.fieldErrors, B.value = Object.keys(E.fieldErrors).length === 0 ? E.message : null) : B.value = E instanceof Error ? E.message : "Could not create that option.";
        } finally {
          m.value = !1;
        }
      }
    }
    const Y = k(() => {
      if (!s.field.tableSelect || !b?.base)
        return;
      const J = b.returnUrl || "/";
      return `${b.base}/pick/${s.field.key}?return=${encodeURIComponent(J)}`;
    }), X = k(() => s.field.morphTo ?? []), ae = k(() => {
      const J = s.value;
      return J && typeof J == "object" && !Array.isArray(J) ? J : { type: void 0, id: void 0 };
    });
    function N(J) {
      i("change", { type: J || null, id: null });
    }
    function D(J) {
      i("change", { type: ae.value.type ?? null, id: J });
    }
    function ee(J) {
      p.value = J.label, D(J.value), u.value = !1, d.value = "";
    }
    ve(() => clearTimeout(x));
    const _ = k(() => no(s.field.type)), K = k(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function R(J) {
      if (J) {
        if (J.copy) {
          const E = s.value == null ? "" : String(s.value);
          E !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(E);
          return;
        }
        if (J.url && typeof window < "u") {
          window.open(J.url, "_blank", "noopener,noreferrer");
          return;
        }
        J.key && i("affix-action", J.key);
      }
    }
    function U(J) {
      const E = document.getElementById(`f-${s.field.key}`);
      if (!(E instanceof HTMLTextAreaElement) && !(E instanceof HTMLInputElement))
        return;
      const W = E.selectionStart ?? E.value.length, oe = E.selectionEnd ?? W;
      E.setRangeText(J, W, oe, "end"), E.dispatchEvent(new Event("input", { bubbles: !0 })), E.focus();
    }
    return (J, E) => (t(), n(z, null, [
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", ls, [
        o("div", os, [
          o("label", {
            for: `f-${e.field.key}`,
            class: O(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
          }, [
            I(c(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", rs, "*")) : $("", !0)
          ], 10, ss),
          e.field.hint ? (t(), n("span", is, [
            I(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: E[0] || (E[0] = (W) => R(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, us)) : $("", !0)
          ])) : $("", !0)
        ]),
        _.value ? (t(), V(he(_.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": E[1] || (E[1] = (W) => i("change", W))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), V(ea, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": E[2] || (E[2] = (W) => i("change", W))
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
          "onUpdate:modelValue": E[3] || (E[3] = (W) => i("change", W))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), V(y(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": E[4] || (E[4] = (W) => i("change", W))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), V(ns, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": E[5] || (E[5] = (W) => i("change", W))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), V(Go, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": E[6] || (E[6] = (W) => i("change", W))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), V(St, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": E[7] || (E[7] = (W) => i("change", W))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : X.value.length ? (t(), n("div", ds, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: ae.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            onChange: E[8] || (E[8] = (W) => N(W.target.value))
          }, [
            E[24] || (E[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, L(X.value, (W) => (t(), n("option", {
              key: W.value,
              value: W.value
            }, c(W.label), 9, fs))), 128))
          ], 40, cs),
          ae.value.type && e.searchOptions ? (t(), n("div", ms, [
            o("button", {
              type: "button",
              class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              disabled: e.field.disabled || e.processing,
              onClick: M
            }, [
              o("span", {
                class: O(p.value || ae.value.id ? "" : "text-muted-foreground")
              }, c(p.value ?? (ae.value.id ? String(ae.value.id) : "Search…")), 3)
            ], 8, ps),
            u.value ? (t(), n("div", vs, [
              de(o("input", {
                "onUpdate:modelValue": E[9] || (E[9] = (W) => d.value = W),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [xe, d.value]
              ]),
              o("div", gs, [
                (t(!0), n(z, null, L(f.value, (W) => (t(), n("button", {
                  key: String(W.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (oe) => ee(W)
                }, c(W.label), 9, hs))), 128))
              ])
            ])) : $("", !0),
            u.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: E[10] || (E[10] = (W) => u.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", bs, [
          o("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: M
          }, [
            o("span", {
              class: O(p.value || e.value ? "" : "text-muted-foreground")
            }, c(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: ce(C, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 8, xs),
          u.value ? (t(), n("div", ys, [
            de(o("input", {
              "onUpdate:modelValue": E[11] || (E[11] = (W) => d.value = W),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [xe, d.value]
            ]),
            o("div", ks, [
              h.value ? (t(), n("p", $s, " Searching… ")) : f.value.length === 0 ? (t(), n("p", ws, " No matches ")) : $("", !0),
              (t(!0), n(z, null, L(f.value, (W) => (t(), n("button", {
                key: String(W.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (oe) => w(W)
              }, c(W.label), 9, Cs))), 128)),
              e.field.createOption && y(v) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: F
              }, [
                E[25] || (E[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                I(" " + c(Z.value), 1)
              ])) : $("", !0)
            ])
          ])) : $("", !0),
          u.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: E[12] || (E[12] = (W) => u.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: E[13] || (E[13] = (W) => i("change", W.target.value || null))
        }, [
          E[26] || (E[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, L(e.options, (W) => (t(), n("option", {
            key: String(W.value),
            value: W.value
          }, c(W.label), 9, Ms))), 128))
        ], 40, Ss)) : e.field.type === "toggle" ? (t(), n("label", Bs, [
          T(y(De), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": E[14] || (E[14] = (W) => i("change", W))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", _s, c(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), n("label", Ps, [
          T(y(xo), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": E[15] || (E[15] = (W) => i("change", W === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", zs, c(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !K.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onInput: E[16] || (E[16] = (W) => i("change", W.target.value))
        }, null, 40, As)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: O(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Os, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: E[17] || (E[17] = (W) => R(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, js)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: E[18] || (E[18] = (W) => i("change", W.target.value))
          }, null, 40, Ls),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Vs, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: E[19] || (E[19] = (W) => R(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Ds)) : $("", !0)
        ], 2)) : K.value ? (t(), n("div", {
          key: 15,
          class: O(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Es, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: E[21] || (E[21] = (W) => R(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Fs)) : $("", !0),
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
            class: O(Ys),
            onInput: E[22] || (E[22] = (W) => i("change", W.target.value))
          }, null, 40, Is),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Ns, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: E[23] || (E[23] = (W) => R(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Rs)) : $("", !0)
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
          class: O(Js),
          onInput: E[20] || (E[20] = (W) => i("change", W.target.value))
        }, null, 40, Ts)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", Us, [
          (t(!0), n(z, null, L(e.field.presets, (W) => (t(), n("button", {
            key: W,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: O([
              "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == W ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == W
            ),
            onClick: (oe) => i("change", String(W))
          }, c(W), 11, Hs))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", qs, [
          (t(!0), n(z, null, L(e.field.chips, (W, oe) => (t(), n("button", {
            key: oe,
            type: "button",
            title: W,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (je) => U(String(oe))
          }, c(oe), 9, Ks))), 128))
        ])) : $("", !0),
        Y.value ? (t(), n("a", {
          key: 18,
          href: Y.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Gs)) : $("", !0),
        e.error ? (t(), n("p", Ws, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", Zs, c(e.field.help), 1)) : $("", !0)
      ])),
      e.field.createOption && y(v) ? (t(), V(bo, {
        key: 2,
        open: g.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: S.value,
        "general-error": B.value,
        onClose: te,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : $("", !0)
    ], 64));
  }
}), Xs = { class: "text-sm font-semibold" }, Qs = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, er = {
  key: 4,
  class: "flex flex-col gap-3"
}, tr = { class: "text-sm font-medium" }, ar = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, nr = {
  key: 0,
  class: "mb-1 font-medium"
}, lr = ["onClick"], or = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, sr = { class: "flex items-center justify-between gap-3 border-t p-4" }, rr = ["disabled"], ta = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(!a.node.collapsed), i = G(0), u = G(0), d = k(
      () => (a.node.children ?? []).map((b) => ({
        label: b.label ?? "",
        description: b.description
      }))
    ), f = k(() => a.depth === 0), h = k(() => {
      const b = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, v = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        b[a.node.align ?? "start"] ?? "items-start",
        v[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = k(() => {
      const b = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return b[a.node.tone ?? "info"] ?? b.info;
    }), x = k(() => {
      const b = a.node.columns ?? 1;
      return b >= 3 ? "sm:grid-cols-3" : b === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function M(b) {
      const v = [], g = (m) => {
        m.component === "field" && m.key && v.push(m.key), m.children?.forEach(g);
      };
      return g(b), v.some((m) => a.errors[m]);
    }
    function w(b) {
      if (b.hidden)
        return !1;
      const v = b.visibleWhen;
      return v ? a.values[v.field] == v.value : !0;
    }
    function C(b) {
      if (a.upload)
        return (v, g) => a.upload(b, v, g);
    }
    return (b, v) => {
      const g = bt("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), V(Ee, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (m) => e.searchOptions(e.node.key, m) : void 0,
        upload: C(e.node.key),
        discard: e.discard,
        onChange: v[0] || (v[0] = (m) => r("change", e.node.key, m)),
        onAffixAction: v[1] || (v[1] = (m) => r("affix-action", e.node.key, m))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && w(e.node) ? (t(), n("section", {
        key: 1,
        class: O(f.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: O(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: v[2] || (v[2] = (m) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", Xs, c(e.node.label), 1),
            e.node.description ? (t(), n("p", Qs, c(e.node.description), 1)) : $("", !0)
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
          class: O(["grid grid-cols-1 gap-4", [x.value, f.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (m, S) => (t(), V(g, {
            key: S,
            node: m,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: O(m.span && m.span >= 2 ? "sm:col-span-2" : ""),
            onChange: v[3] || (v[3] = (B, P) => r("change", B, P)),
            onAffixAction: v[4] || (v[4] = (B, P) => r("affix-action", B, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: O(["grid grid-cols-1 gap-4", x.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (m, S) => (t(), V(g, {
          key: S,
          node: m,
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
        (t(!0), n(z, null, L(e.node.children ?? [], (m, S) => (t(), V(g, {
          key: S,
          node: m,
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
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", er, [
        o("legend", tr, c(e.node.label), 1),
        e.node.description ? (t(), n("p", ar, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: O(["grid grid-cols-1 gap-4", x.value])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (m, S) => (t(), V(g, {
            key: S,
            node: m,
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
        class: O(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", nr, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: O(f.value ? "bg-card rounded-lg border" : "")
      }, [
        o("div", {
          class: O(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (m, S) => (t(), n("button", {
            key: S,
            type: "button",
            class: O([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === S ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (B) => i.value = S
          }, [
            I(c(m.label) + " ", 1),
            M(m) ? (t(), n("span", or)) : $("", !0)
          ], 10, lr))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (m, S) => de((t(), n("div", {
          key: S,
          class: O(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(m.children ?? [], (B, P) => (t(), V(g, {
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
            onChange: v[11] || (v[11] = (Z, F) => r("change", Z, F)),
            onAffixAction: v[12] || (v[12] = (Z, F) => r("affix-action", Z, F))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Oe, i.value === S]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: O(f.value ? "bg-card rounded-lg border" : "")
      }, [
        T(ao, {
          class: O(["p-4", f.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (m) => M((e.node.children ?? [])[m]),
          "onUpdate:activeStep": v[13] || (v[13] = (m) => u.value = m)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, L(e.node.children ?? [], (m, S) => de((t(), n("div", {
          key: S,
          class: O(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(m.children ?? [], (B, P) => (t(), V(g, {
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
            onChange: v[14] || (v[14] = (Z, F) => r("change", Z, F)),
            onAffixAction: v[15] || (v[15] = (Z, F) => r("affix-action", Z, F))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Oe, u.value === S]
        ])), 128)),
        o("div", sr, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: v[16] || (v[16] = (m) => u.value--)
          }, " Back ", 8, rr),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: v[17] || (v[17] = (m) => u.value++)
          }, " Next ")) : $("", !0)
        ])
      ], 2)) : $("", !0);
    };
  }
}), c$ = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G({});
    ue(
      () => a.open,
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), V(Ge, {
      open: e.open,
      title: e.title,
      busy: e.processing,
      onClose: d[2] || (d[2] = (f) => r("close"))
    }, {
      footer: j(() => [
        T(se, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: d[1] || (d[1] = (f) => r("close"))
        }, {
          default: j(() => [...d[3] || (d[3] = [
            I(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        T(se, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            I(c(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ce(i, ["prevent"])
        }, [
          (t(!0), n(z, null, L(e.form?.nodes ?? [], (f, h) => (t(), V(ta, {
            key: h,
            node: f,
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
}), ir = ["title"], ur = ["aria-label"], dr = ["d"], cr = { class: "sr-only" }, fr = /* @__PURE__ */ A({
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
    }, s = k(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = k(() => l.icons[s.value] ?? l.defaultIcon), u = k(() => a[i.value] ?? a.dot), d = k(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), f = k(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (h, p) => (t(), n("span", {
      class: "inline-flex items-center",
      title: f.value
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
        "aria-label": f.value
      }, [
        o("path", { d: u.value }, null, 8, dr)
      ], 10, ur)),
      o("span", cr, c(f.value), 1)
    ], 8, ir));
  }
}), mr = ["src"], pr = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, vr = /* @__PURE__ */ A({
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
    ue(
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
        onError: d[0] || (d[0] = (f) => a.value = !0)
      }, null, 40, mr)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        I(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", pr, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
    ], 2));
  }
}), gr = {
  key: 0,
  class: "text-muted-foreground"
}, hr = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, br = {
  key: 0,
  class: "font-mono text-xs"
}, xr = {
  key: 1,
  class: "sr-only"
}, yr = /* @__PURE__ */ A({
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
    return (s, i) => r.value === null ? (t(), n("span", gr, "-")) : (t(), n("span", hr, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", br, c(r.value), 1)) : (t(), n("span", xr, c(r.value), 1))
    ]));
  }
}), kr = { class: "inline-flex items-center" }, $r = ["checked", "aria-label"], wr = { class: "sr-only" }, f$ = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("span", kr, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, $r),
      o("span", wr, c(r.value), 1)
    ]));
  }
}), Cr = {
  key: 0,
  class: "text-muted-foreground"
}, Sr = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, m$ = /* @__PURE__ */ A({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = k(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", Sr, c(a.value), 1)) : (t(), n("span", Cr, "—"));
  }
}), Mr = { class: "flex items-center gap-2" }, Br = ["onUpdate:modelValue", "onChange"], _r = ["value"], Pr = ["onUpdate:modelValue"], zr = ["value"], Ar = ["onUpdate:modelValue"], Or = ["onUpdate:modelValue", "multiple"], jr = ["value"], Lr = ["onUpdate:modelValue", "type"], Vr = ["aria-label", "onClick"], Dr = { class: "flex items-center gap-2" }, Tr = /* @__PURE__ */ A({
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
    const a = e, r = l, s = () => ({ logic: "and", rules: [] }), i = G(a.modelValue ? structuredClone(a.modelValue) : s());
    ue(
      () => a.modelValue,
      (m) => {
        i.value = m ? structuredClone(m) : s();
      }
    );
    const u = (m) => "rules" in m, d = k(() => Object.keys(a.fields));
    function f(m) {
      const S = m ? a.fields[m]?.kind : void 0;
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
    function p() {
      r("update:modelValue", i.value);
    }
    function x() {
      const m = d.value[0];
      i.value.rules.push({
        field: m,
        operator: f(m)[0],
        value: void 0
      }), p();
    }
    function M() {
      i.value.rules.push(s()), p();
    }
    function w(m) {
      i.value.rules.splice(m, 1), p();
    }
    function C(m) {
      m.operator = f(m.field)[0], m.value = void 0, p();
    }
    const b = k(() => a.depth + 1 < a.maxDepth);
    function v() {
      i.value = s(), p(), r("apply", null);
    }
    function g() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, S) => {
      const B = bt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: O(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Mr, [
          de(o("select", {
            "onUpdate:modelValue": S[0] || (S[0] = (P) => i.value.logic = P),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...S[1] || (S[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ve, i.value.logic]
          ]),
          S[2] || (S[2] = o("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, L(i.value.rules, (P, Z) => (t(), n("div", {
          key: Z,
          class: "flex items-start gap-2"
        }, [
          u(P) ? (t(), V(B, {
            key: 0,
            modelValue: i.value.rules[Z],
            "onUpdate:modelValue": [(F) => i.value.rules[Z] = F, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            de(o("select", {
              "onUpdate:modelValue": (F) => P.field = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (F) => C(P)
            }, [
              (t(!0), n(z, null, L(d.value, (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(e.fields[F].label), 9, _r))), 128))
            ], 40, Br), [
              [Ve, P.field]
            ]),
            de(o("select", {
              "onUpdate:modelValue": (F) => P.operator = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(z, null, L(f(P.field), (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(h[F] ?? F), 9, zr))), 128))
            ], 40, Pr), [
              [Ve, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? de((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (F) => P.value = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...S[3] || (S[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, Ar)), [
              [Ve, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? de((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (F) => P.value = F,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(z, null, L(e.fields[P.field].options, (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(F), 9, jr))), 128))
            ], 40, Or)), [
              [Ve, P.value]
            ]) : de((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (F) => P.value = F,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Lr)), [
              [va, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(P) ? "group" : "rule"}`,
            onClick: (F) => w(Z)
          }, " × ", 8, Vr)
        ]))), 128)),
        o("div", Dr, [
          T(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: x
          }, {
            default: j(() => [...S[4] || (S[4] = [
              I("Add rule", -1)
            ])]),
            _: 1
          }),
          b.value ? (t(), V(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: j(() => [...S[5] || (S[5] = [
              I(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            S[8] || (S[8] = o("span", { class: "flex-1" }, null, -1)),
            T(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: j(() => [...S[6] || (S[6] = [
                I(" Clear ", -1)
              ])]),
              _: 1
            }),
            T(se, {
              type: "button",
              size: "sm",
              onClick: g
            }, {
              default: j(() => [...S[7] || (S[7] = [
                I(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : $("", !0)
        ])
      ], 2);
    };
  }
}), Er = {
  key: 0,
  class: "font-mono text-xs"
}, Fr = {
  key: 1,
  class: "text-muted-foreground"
}, Ir = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, p$ = /* @__PURE__ */ A({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = k(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", Er, c(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", Fr, "—")) : (t(), n("span", Ir, c(a.value.length) + " " + c(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Nr = ["aria-checked", "aria-label", "title", "disabled"], Rr = ["value", "disabled"], Ur = ["value"], v$ = /* @__PURE__ */ A({
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
    function f(h) {
      const p = h.target.value;
      p !== String(a.value ?? "") && r("change", p);
    }
    return (h, p) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: O(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ce(d, ["stop"])
    }, [
      o("span", {
        class: O(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Nr)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = ce(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), n(z, null, L(e.options, (x, M) => (t(), n("option", {
        key: M,
        value: M
      }, c(x), 9, Ur))), 128))
    ], 40, Rr));
  }
}), Hr = ["data-variant"], qr = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", qe = /* @__PURE__ */ A({
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
      () => [qr, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: O(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, Hr));
  }
}), Mt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Kr(e) {
  return e != null && e !== "";
}
function Gr(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function g$(e) {
  const l = k(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Gr(s)
    }))
  ), a = k(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = a.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), f = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return Mt[f] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const Wr = ["disabled", "aria-label", "aria-busy"], Zr = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jr = ["d"], Yr = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Xr = ["disabled", "onClick"], Qr = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, ei = ["d"], ti = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, h$ = /* @__PURE__ */ A({
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
    function d(x) {
      return typeof x == "boolean" ? x ? "1" : "" : String(x ?? "");
    }
    function f(x) {
      const M = a.colors[d(x)] ?? a.defaultColor ?? "neutral";
      return Mt[M] ?? "outline";
    }
    function h(x) {
      return a.options[x] ?? x;
    }
    function p(x, M) {
      if (s.value || x === i.value) {
        M();
        return;
      }
      r("change", x), M();
    }
    return (x, M) => (t(), n("div", {
      onClick: M[0] || (M[0] = ce(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), V(qe, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          I(c(h(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), V(Te, {
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
            T(qe, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                I(c(h(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Zr, [
              o("path", {
                d: y(ie)("chevron-down")
              }, null, 8, Jr)
            ]))
          ], 8, Wr)
        ]),
        panel: j(({ close: w }) => [
          o("div", Yr, c(u.value), 1),
          (t(!0), n(z, null, L(e.options, (C, b) => (t(), n("button", {
            key: b,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (v) => p(String(b), w)
          }, [
            T(qe, {
              variant: f(b),
              class: "capitalize"
            }, {
              default: j(() => [
                I(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(b) === i.value ? (t(), n("svg", Qr, [
              o("path", {
                d: y(ie)("check")
              }, null, 8, ei)
            ])) : (t(), n("span", ti))
          ], 8, Xr))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), ai = { class: "flex items-center justify-end" }, ni = ["aria-label"], li = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, oi = ["d"], si = ["href"], ri = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ii = ["d"], ui = ["disabled", "onClick"], di = ["d"], ci = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, fi = ["disabled", "onClick"], mi = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, pi = ["d"], b$ = /* @__PURE__ */ A({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = G(null), u = G(null), d = k(() => r.groups.flatMap((v) => v.actions)), f = k(() => d.value.filter((v) => !v.destructive)), h = k(() => d.value.filter((v) => v.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function x(v) {
      return p[v.color ?? "gray"] ?? p.gray;
    }
    const M = k(() => d.value.length === 0);
    function w(v) {
      s("run", v);
    }
    function C(v) {
      M.value || (v.preventDefault(), i.value?.openAt(v.clientX, v.clientY));
    }
    function b(v) {
      if (v.key !== "ArrowDown" && v.key !== "ArrowUp")
        return;
      const g = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (g.length === 0)
        return;
      v.preventDefault();
      const m = g.indexOf(document.activeElement), S = v.key === "ArrowDown" ? 1 : -1, B = (m + S + g.length) % g.length;
      g[B]?.focus();
    }
    return l({ openContextMenu: C }), (v, g) => (t(), n("div", ai, [
      M.value ? $("", !0) : (t(), V(Te, {
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
            (t(), n("svg", li, [
              o("path", {
                d: y(ie)("more-vertical")
              }, null, 8, oi)
            ]))
          ], 8, ni)
        ]),
        panel: j(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: b
          }, [
            (t(!0), n(z, null, L(f.value, (m) => (t(), n(z, {
              key: m.key
            }, [
              m.link ? (t(), n("a", {
                key: 0,
                href: m.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: O(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", x(m)])
              }, [
                (t(), n("svg", ri, [
                  o("path", {
                    d: y(ie)(m.icon)
                  }, null, 8, ii)
                ])),
                I(" " + c(m.label), 1)
              ], 10, si)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: O(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", x(m)]),
                disabled: e.busy === m.key,
                onClick: (S) => w(m)
              }, [
                (t(), n("svg", {
                  class: O(["size-4 shrink-0", e.busy === m.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: y(ie)(m.icon)
                  }, null, 8, di)
                ], 2)),
                I(" " + c(m.label), 1)
              ], 10, ui))
            ], 64))), 128)),
            h.value.length ? (t(), n("div", ci, [
              (t(!0), n(z, null, L(h.value, (m) => (t(), n("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (S) => w(m)
              }, [
                (t(), n("svg", mi, [
                  o("path", {
                    d: y(ie)(m.icon ?? "trash")
                  }, null, 8, pi)
                ])),
                I(" " + c(m.label), 1)
              ], 8, fi))), 128))
            ])) : $("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), ft = {
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
}, mt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, Qe = 12, et = 20, vi = [0, 0.25, 0.5, 0.75, 1], Bt = "alxtexhpanel.appearance", Ce = {
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
}, ze = G({ ...Ce });
let Lt = !1;
const gi = "alxtexhpanel.appearance.vars";
function pt(e) {
  return e.theme === "dark";
}
const Vt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function hi(e) {
  const l = ft[e.primary] ?? ft.slate, a = mt[e.surface] ?? mt.neutral, r = a.chroma, s = a.hue, u = pt(e) ? {
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
    "--pk-row-padding": Vt[e.density] ?? Vt.comfortable
  };
}
function _t() {
  if (typeof window > "u")
    return { ...Ce };
  try {
    const e = localStorage.getItem(Bt);
    if (!e)
      return { ...Ce };
    const l = { ...Ce, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Ce.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? Ce.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < Qe || l.fontSize > et) && (l.fontSize = Ce.fontSize), l;
  } catch {
    return { ...Ce };
  }
}
function x$(e) {
  const l = _t(), a = e ? { ...l, ...e } : l;
  if (ze.value = a, vt(a), e)
    try {
      localStorage.setItem(Bt, JSON.stringify(a));
    } catch {
    }
}
let aa = null;
function y$(e) {
  aa = e;
}
let na = {};
function bi(e) {
  if (na = e, !(typeof document > "u") && !_t().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function vt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...hi(e), ...e.primaryChosen ? {} : na };
  l.classList.toggle("dark", pt(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      gi,
      JSON.stringify({ dark: pt(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function la() {
  function e(r) {
    vt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    ze.value = { ...ze.value, ...r, ...s };
    try {
      localStorage.setItem(Bt, JSON.stringify(ze.value));
    } catch {
    }
    e(ze.value), aa?.({ ...r, ...s });
  }
  function a() {
    l({ ...Ce });
  }
  return fe(() => {
    Lt || (Lt = !0, ze.value = _t(), vt(ze.value));
  }), {
    appearance: k(() => ze.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: ft,
    SURFACE_TINTS: mt,
    FONT_SIZE_MIN: Qe,
    FONT_SIZE_MAX: et,
    RADIUS_OPTIONS: vi
  };
}
const xi = { class: "flex items-center justify-between border-b px-4 py-3" }, yi = { class: "flex items-center gap-2" }, ki = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, $i = { class: "flex flex-col gap-2" }, wi = { class: "grid grid-cols-8 gap-2" }, Ci = ["title", "aria-label", "aria-pressed", "onClick"], Si = { class: "flex flex-col gap-2" }, Mi = { class: "grid grid-cols-8 gap-2" }, Bi = ["title", "aria-label", "aria-pressed", "onClick"], _i = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Pi = { class: "flex flex-col gap-2" }, zi = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ai = ["aria-pressed", "aria-label", "onClick"], Oi = { class: "text-sm font-semibold" }, ji = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Li = ["onClick"], Vi = { class: "flex flex-col gap-2" }, Di = { class: "flex items-center justify-between" }, Ti = { class: "text-muted-foreground text-xs tabular-nums" }, Ei = { class: "flex items-center gap-2" }, Fi = ["disabled"], Ii = ["min", "max", "value"], Ni = ["disabled"], k$ = /* @__PURE__ */ A({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = la(), d = G(!1), f = k(() => l.value.sidebarSide === "right"), h = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], x = [
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
    function b(v, g) {
      return `oklch(0.72 ${g * 3} ${v})`;
    }
    return (v, g) => (t(), n(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: g[0] || (g[0] = (m) => d.value = !0)
      }, [...g[7] || (g[7] = [
        ht('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), V(Ie, { to: "body" }, [
        T(Ae, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: g[1] || (g[1] = (m) => d.value = !1)
            })) : $("", !0)
          ]),
          _: 1
        }),
        T(Ae, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": f.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": f.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: O(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", f.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", xi, [
                g[9] || (g[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", yi, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: g[2] || (g[2] = //@ts-ignore
                    (...m) => y(r) && y(r)(...m))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: g[3] || (g[3] = (m) => d.value = !1)
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
              o("div", ki, [
                o("section", $i, [
                  g[11] || (g[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", wi, [
                    (t(!0), n(z, null, L(y(s), (m, S) => (t(), n("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: m.value }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": y(l).primary === S,
                      onClick: (B) => y(a)({ primary: S })
                    }, [
                      y(l).primary === S ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ne({ color: m.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...g[10] || (g[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : $("", !0)
                    ], 12, Ci))), 128))
                  ])
                ]),
                o("section", Si, [
                  g[13] || (g[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", Mi, [
                    (t(!0), n(z, null, L(y(i), (m, S) => (t(), n("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: b(m.hue, m.chroma) }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": y(l).surface === S,
                      onClick: (B) => y(a)({ surface: S })
                    }, [
                      y(l).surface === S ? (t(), n("svg", _i, [...g[12] || (g[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : $("", !0)
                    ], 12, Bi))), 128))
                  ])
                ]),
                o("section", Pi, [
                  g[14] || (g[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", zi, [
                    (t(!0), n(z, null, L(y(u), (m) => (t(), n("button", {
                      key: m,
                      type: "button",
                      class: O([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        y(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": y(l).radius === m,
                      "aria-label": `${m}rem radius`,
                      onClick: (S) => y(a)({ radius: m })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(m, 0.5)}rem` })
                      }, null, 4),
                      I(" " + c(m), 1)
                    ], 10, Ai))), 128))
                  ])
                ]),
                (t(!0), n(z, null, L([
                  { label: "Color scheme", key: "theme", options: h },
                  { label: "Card style", key: "cardStyle", options: x },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: C }
                ], (m) => (t(), n("section", {
                  key: m.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", Oi, c(m.label), 1),
                  o("div", ji, [
                    (t(!0), n(z, null, L(m.options, (S) => (t(), n("button", {
                      key: String(S.value),
                      type: "button",
                      class: O([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        y(l)[m.key] === S.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (B) => y(a)({ [m.key]: S.value })
                    }, c(S.label), 11, Li))), 128))
                  ])
                ]))), 128)),
                o("section", Vi, [
                  o("div", Di, [
                    g[15] || (g[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Ti, c(y(l).fontSize) + "px", 1)
                  ]),
                  o("div", Ei, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: y(l).fontSize <= y(Qe),
                      "aria-label": "Decrease font size",
                      onClick: g[4] || (g[4] = (m) => y(a)({ fontSize: y(l).fontSize - 1 }))
                    }, " − ", 8, Fi),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: y(Qe),
                      max: y(et),
                      value: y(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: g[5] || (g[5] = (m) => y(a)({
                        fontSize: Number(m.target.value)
                      }))
                    }, null, 40, Ii),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: y(l).fontSize >= y(et),
                      "aria-label": "Increase font size",
                      onClick: g[6] || (g[6] = (m) => y(a)({ fontSize: y(l).fontSize + 1 }))
                    }, " + ", 8, Ni)
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
}), Ri = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Ui = { class: "flex items-stretch" }, Hi = ["href", "aria-current"], qi = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ki = ["d"], Gi = { class: "w-full truncate text-center" }, Wi = {
  key: 0,
  class: "flex-1"
}, Zi = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ji = ["d"], Yi = { class: "w-full truncate text-center" }, st = 5, $$ = /* @__PURE__ */ A({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(
      () => a.items.length <= st ? a.items : a.items.slice(0, st - 1)
    ), i = k(() => a.items.length > st);
    function u(d) {
      return d === "/" ? a.current === "/" : a.current === d || a.current.startsWith(`${d}/`);
    }
    return (d, f) => (t(), n("nav", Ri, [
      o("ul", Ui, [
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
            (t(), n("svg", qi, [
              o("path", {
                d: y(ie)(h.icon)
              }, null, 8, Ki)
            ])),
            o("span", Gi, c(h.title), 1)
          ], 10, Hi)
        ]))), 128)),
        i.value ? (t(), n("li", Wi, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (h) => r("more"))
          }, [
            (t(), n("svg", Zi, [
              o("path", {
                d: y(ie)("more-horizontal")
              }, null, 8, Ji)
            ])),
            o("span", Yi, c(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), Xi = ["value"], Qi = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", pe = /* @__PURE__ */ A({
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
      class: O([Qi, a.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, Xi));
  }
}), eu = ["for"], be = /* @__PURE__ */ A({
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
      q(l.$slots, "default")
    ], 10, eu));
  }
}), w$ = /* @__PURE__ */ A({
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
}), tu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, au = ["id", "name", "value", "disabled", "maxlength"], nu = ["data-active"], lu = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, C$ = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(!1), i = G(null);
    fe(() => {
      a.autofocus && i.value?.focus();
    });
    const u = k(
      () => Array.from({ length: a.length }, (h, p) => a.modelValue[p] ?? "")
    ), d = k(() => Math.min(a.modelValue.length, a.length - 1));
    function f(h) {
      const p = h.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, a.length));
    }
    return (h, p) => (t(), n("div", tu, [
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
        onFocus: p[0] || (p[0] = (x) => s.value = !0),
        onBlur: p[1] || (p[1] = (x) => s.value = !1)
      }, null, 40, au),
      (t(!0), n(z, null, L(u.value, (x, M) => (t(), n("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": s.value && M === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        I(c(x) + " ", 1),
        s.value && M === d.value && x === "" ? (t(), n("div", lu, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, nu))), 128))
    ]));
  }
}), ou = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Me = /* @__PURE__ */ A({
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
      e.description ? (t(), n("p", ou, c(e.description), 1)) : $("", !0)
    ], 2));
  }
}), su = /* @__PURE__ */ A({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: O(y(Q)(y(uu)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), ru = /* @__PURE__ */ A({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: O(y(Q)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), iu = /* @__PURE__ */ A({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: O(y(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), uu = wt(
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
), du = { class: "list-inside list-disc text-sm" }, S$ = /* @__PURE__ */ A({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = k(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), V(y(su), { variant: "destructive" }, {
      default: j(() => [
        T(y(Ca), { class: "size-4" }),
        T(y(iu), null, {
          default: j(() => [
            I(c(e.title), 1)
          ]),
          _: 1
        }),
        T(y(ru), null, {
          default: j(() => [
            o("ul", du, [
              (t(!0), n(z, null, L(a.value, (i, u) => (t(), n("li", { key: u }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), oa = /* @__PURE__ */ A({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Kt(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => de((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => ga(s) ? s.value = d : null),
      "data-slot": "input",
      class: O(
        y(Q)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [xe, y(s)]
    ]);
  }
}), cu = { class: "relative" }, fu = ["aria-label"], M$ = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = G(!1), s = ha("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), n("div", cu, [
      T(y(oa), le({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: y(Q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: O(
          y(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), V(y(Sa), {
          key: 0,
          class: "size-4"
        })) : (t(), V(y(Ma), {
          key: 1,
          class: "size-4"
        }))
      ], 10, fu)
    ]));
  }
});
function B$(e, l) {
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
    s.forEach((d, f) => {
      u[f % a].push(d);
    }), r.push({ type: "columns", columns: u }), s = [];
  };
  for (const u of e)
    (u.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: u })) : s.push(u);
  return i(), r;
}
const sa = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", mu = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", pu = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function vu(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function gu(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function hu(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await bu(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function bu(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function xu(e) {
  if (vu(e))
    throw new Error(pu);
  if (!gu(e))
    throw new Error(sa);
  if (!await hu(e))
    throw new Error(mu);
}
const yu = /* @__PURE__ */ A({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), V(y(Gt), le({ "data-slot": "sheet" }, y(s)), {
      default: j((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), _$ = /* @__PURE__ */ A({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Ne), le({ "data-slot": "sheet-close" }, l), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ku = /* @__PURE__ */ A({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(yt), le({
      "data-slot": "sheet-overlay",
      class: y(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, y(a)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $u = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class", "side"), i = me(s, r);
    return (u, d) => (t(), V(y(kt), null, {
      default: j(() => [
        T(ku),
        T(y($t), le({
          "data-slot": "sheet-content",
          class: y(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...y(i) }), {
          default: j(() => [
            q(u.$slots, "default"),
            T(y(Ne), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                T(y(xt), { class: "size-4" }),
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
}), wu = /* @__PURE__ */ A({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(Wt), le({
      "data-slot": "sheet-description",
      class: y(Q)("text-muted-foreground text-sm", l.class)
    }, y(a)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P$ = /* @__PURE__ */ A({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: O(y(Q)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Cu = /* @__PURE__ */ A({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: O(y(Q)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Su = /* @__PURE__ */ A({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(Zt), le({
      "data-slot": "sheet-title",
      class: y(Q)("text-foreground font-semibold", l.class)
    }, y(a)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z$ = /* @__PURE__ */ A({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Jt), le({ "data-slot": "sheet-trigger" }, l), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dt = "sidebar_state", Mu = 3600 * 24 * 7, Bu = "16rem", _u = "18rem", Pu = "3rem", zu = "b", [nt, Au] = Ia("Sidebar"), Ou = { class: "flex h-full w-full flex-col" }, ju = ["data-state", "data-collapsible", "data-variant", "data-side"], Lu = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, A$ = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = nt();
    return (u, d) => e.collapsible === "none" ? (t(), n("div", le({
      key: 0,
      "data-slot": "sidebar",
      class: y(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      q(u.$slots, "default")
    ], 16)) : y(a) ? (t(), V(y(yu), le({
      key: 1,
      open: y(s)
    }, u.$attrs, { "onUpdate:open": y(i) }), {
      default: j(() => [
        T(y($u), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": y(_u)
          })
        }, {
          default: j(() => [
            T(Cu, { class: "sr-only" }, {
              default: j(() => [
                T(Su, null, {
                  default: j(() => [...d[0] || (d[0] = [
                    I("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                T(wu, null, {
                  default: j(() => [...d[1] || (d[1] = [
                    I("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Ou, [
              q(u.$slots, "default")
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
          y(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", le({
        class: y(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        o("div", Lu, [
          q(u.$slots, "default")
        ])
      ], 16)
    ], 8, ju));
  }
}), O$ = /* @__PURE__ */ A({
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
        y(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), j$ = /* @__PURE__ */ A({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: O(y(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), L$ = /* @__PURE__ */ A({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: O(y(Q)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), V$ = /* @__PURE__ */ A({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Re), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: O(
        y(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), D$ = /* @__PURE__ */ A({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: O(y(Q)("w-full text-sm", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), T$ = /* @__PURE__ */ A({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Re), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: O(
        y(Q)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), E$ = /* @__PURE__ */ A({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: O(y(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), F$ = /* @__PURE__ */ A({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(oa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: O(y(Q)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), I$ = /* @__PURE__ */ A({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: O(
        y(Q)(
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
      q(a.$slots, "default")
    ], 2));
  }
}), N$ = /* @__PURE__ */ A({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: O(y(Q)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), R$ = /* @__PURE__ */ A({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Re), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: O(
        y(Q)(
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
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), U$ = /* @__PURE__ */ A({
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
        y(Q)(
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
      q(a.$slots, "default")
    ], 2));
  }
}), Vu = /* @__PURE__ */ A({
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
    const s = me(e, l);
    return (i, u) => (t(), V(y(Na), le({ "data-slot": "tooltip" }, y(s)), {
      default: j((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Du = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(Ra), null, {
      default: j(() => [
        T(y(Ua), le({ "data-slot": "tooltip-content" }, { ...y(i), ...u.$attrs }, {
          class: y(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: j(() => [
            q(u.$slots, "default"),
            T(y(Ha), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), H$ = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(y(Yt), ye(Pe(l)), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tu = /* @__PURE__ */ A({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(qa), le({ "data-slot": "tooltip-trigger" }, l), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tt = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(y(Re), le({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: y(Q)(y(Fu)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), q$ = /* @__PURE__ */ A({
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
    const l = e, { isMobile: a, state: r } = nt(), s = re(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), V(y(Vu), { key: 1 }, {
      default: j(() => [
        T(y(Tu), { "as-child": "" }, {
          default: j(() => [
            T(Tt, ye(Pe({ ...y(s), ...i.$attrs })), {
              default: j(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        T(y(Du), {
          side: "right",
          align: "center",
          hidden: y(r) !== "collapsed" || y(a)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              I(c(e.tooltip), 1)
            ], 64)) : (t(), V(he(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), V(Tt, ye(le({ key: 0 }, { ...y(s), ...i.$attrs })), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), K$ = /* @__PURE__ */ A({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: O(y(Q)("group/menu-item relative", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Et = "animate-pulse rounded-md bg-primary/10", G$ = /* @__PURE__ */ A({
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
      class: O(y(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: O(y(Q)(Et, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: O(y(Q)(Et, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), W$ = /* @__PURE__ */ A({
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
        y(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Z$ = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(y(Re), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: O(
        y(Q)(
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
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), J$ = /* @__PURE__ */ A({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: O(y(Q)("group/menu-sub-item relative", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Y$ = /* @__PURE__ */ A({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Va?.cookie.includes(`${Dt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = ja("(max-width: 767px)"), i = G(!1), u = Kt(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(x) {
      u.value = x, document.cookie = `${Dt}=${u.value}; path=/; max-age=${Mu}`;
    }
    function f(x) {
      i.value = x;
    }
    function h() {
      return s.value ? f(!i.value) : d(!u.value);
    }
    La("keydown", (x) => {
      x.key === zu && (x.metaKey || x.ctrlKey) && (x.preventDefault(), h());
    });
    const p = k(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return Au({
      state: p,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: h
    }), (x, M) => (t(), V(y(Yt), { "delay-duration": 0 }, {
      default: j(() => [
        o("div", le({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": y(Bu),
            "--sidebar-width-icon": y(Pu)
          },
          class: y(Q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, x.$attrs), [
          q(x.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), X$ = /* @__PURE__ */ A({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = nt();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: O(
        y(Q)(
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
      q(r.$slots, "default")
    ], 2));
  }
}), Eu = /* @__PURE__ */ A({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(Ka), le({ "data-slot": "separator" }, y(a), {
      class: y(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), Q$ = /* @__PURE__ */ A({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Eu), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: O(y(Q)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ew = /* @__PURE__ */ A({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = nt();
    return (i, u) => (t(), V(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: O(y(Q)("h-7 w-7", l.class)),
      onClick: y(s)
    }, {
      default: j(() => [
        y(a) || y(r) === "collapsed" ? (t(), V(y(Ba), { key: 0 })) : (t(), V(y(_a), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Fu = wt(
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
), tw = /* @__PURE__ */ A({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), V(y(Ga), le({ "data-slot": "dropdown-menu" }, y(s)), {
      default: j((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Iu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, aw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(Wa), le({ "data-slot": "dropdown-menu-checkbox-item" }, y(i), {
      class: y(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", Iu, [
          T(y(Xt), null, {
            default: j(() => [
              q(u.$slots, "indicator-icon", {}, () => [
                T(y(Ht), { class: "size-4" })
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
}), nw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(Za), null, {
      default: j(() => [
        T(y(Ja), le({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...y(i) }, {
          class: y(Q)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
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
}), lw = /* @__PURE__ */ A({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Ya), le({ "data-slot": "dropdown-menu-group" }, l), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ow = /* @__PURE__ */ A({
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
    const l = e, a = re(l, "inset", "variant", "class"), r = ke(a);
    return (s, i) => (t(), V(y(Xa), le({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, y(r), {
      class: y(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), sw = /* @__PURE__ */ A({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = re(l, "class", "inset"), r = ke(a);
    return (s, i) => (t(), V(y(Qa), le({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, y(r), {
      class: y(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), rw = /* @__PURE__ */ A({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), V(y(en), le({ "data-slot": "dropdown-menu-radio-group" }, y(s)), {
      default: j(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, iw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(tn), le({ "data-slot": "dropdown-menu-radio-item" }, y(i), {
      class: y(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        o("span", Nu, [
          T(y(Xt), null, {
            default: j(() => [
              q(u.$slots, "indicator-icon", {}, () => [
                T(y(Pa), { class: "size-2 fill-current" })
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
}), uw = /* @__PURE__ */ A({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(an), le({ "data-slot": "dropdown-menu-separator" }, y(a), {
      class: y(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), dw = /* @__PURE__ */ A({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: O(y(Q)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), cw = /* @__PURE__ */ A({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), V(y(nn), le({ "data-slot": "dropdown-menu-sub" }, y(s)), {
      default: j((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), fw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(ln), le({ "data-slot": "dropdown-menu-sub-content" }, y(i), {
      class: y(Q)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: j(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mw = /* @__PURE__ */ A({
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
    const l = e, a = re(l, "class", "inset"), r = ke(a);
    return (s, i) => (t(), V(y(on), le({ "data-slot": "dropdown-menu-sub-trigger" }, y(r), {
      "data-inset": e.inset ? "" : void 0,
      class: y(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        T(y(qt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), pw = /* @__PURE__ */ A({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ke(e);
    return (r, s) => (t(), V(y(sn), le({ "data-slot": "dropdown-menu-trigger" }, y(a)), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vw = /* @__PURE__ */ A({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(rn), {
      "data-slot": "avatar",
      class: O(y(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), gw = /* @__PURE__ */ A({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(un), le({ "data-slot": "avatar-fallback" }, y(a), {
      class: y(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hw = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V(y(dn), le({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bw = /* @__PURE__ */ A({
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
      q(a.$slots, "default")
    ], 2));
  }
}), xw = /* @__PURE__ */ A({
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
      class: O(y(Q)("flex size-9 items-center justify-center", l.class))
    }, [
      q(a.$slots, "default", {}, () => [
        T(y(za), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), yw = /* @__PURE__ */ A({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: O(y(Q)("inline-flex items-center gap-1.5", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), kw = /* @__PURE__ */ A({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Re), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: O(y(Q)("hover:text-foreground transition-colors", l.class))
    }, {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), $w = /* @__PURE__ */ A({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: O(
        y(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), ww = /* @__PURE__ */ A({
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
      class: O(y(Q)("text-foreground font-normal", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Cw = /* @__PURE__ */ A({
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
      class: O(y(Q)("[&>svg]:size-3.5", l.class))
    }, [
      q(a.$slots, "default", {}, () => [
        T(y(qt))
      ])
    ], 2));
  }
}), Ru = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Uu = /* @__PURE__ */ A({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = ke(a);
    return (s, i) => (t(), n("div", Ru, [
      T(y(cn), le({ "data-slot": "navigation-menu-viewport" }, y(r), {
        class: y(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Sw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class", "viewport"), i = me(s, r);
    return (u, d) => (t(), V(y(fn), le({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, y(i), {
      class: y(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: j((f) => [
        q(u.$slots, "default", ye(Pe(f))),
        e.viewport ? (t(), V(Uu, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), Mw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(mn), le({ "data-slot": "navigation-menu-content" }, y(i), {
      class: y(Q)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: j(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bw = /* @__PURE__ */ A({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = ke(a);
    return (s, i) => (t(), V(y(pn), le({ "data-slot": "navigation-menu-indicator" }, y(r), {
      class: y(Q)(
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
}), _w = /* @__PURE__ */ A({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(vn), le({ "data-slot": "navigation-menu-item" }, y(a), {
      class: y(Q)("relative", l.class)
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pw = /* @__PURE__ */ A({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(gn), le({ "data-slot": "navigation-menu-link" }, y(i), {
      class: y(Q)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: j(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zw = /* @__PURE__ */ A({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = ke(a);
    return (s, i) => (t(), V(y(hn), le({ "data-slot": "navigation-menu-list" }, y(r), {
      class: y(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Aw = /* @__PURE__ */ A({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = ke(a);
    return (s, i) => (t(), V(y(bn), le({ "data-slot": "navigation-menu-trigger" }, y(r), {
      class: y(Q)(y(Hu)(), "group", l.class)
    }), {
      default: j(() => [
        q(s.$slots, "default"),
        T(y(Aa), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hu = wt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), Ow = /* @__PURE__ */ A({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), V(y(Gt), le({ "data-slot": "dialog" }, y(s)), {
      default: j((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), jw = /* @__PURE__ */ A({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Ne), le({ "data-slot": "dialog-close" }, l), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qu = /* @__PURE__ */ A({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(yt), le({ "data-slot": "dialog-overlay" }, y(a), {
      class: y(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(kt), null, {
      default: j(() => [
        T(qu),
        T(y($t), le({ "data-slot": "dialog-content" }, { ...u.$attrs, ...y(i) }, {
          class: y(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: j(() => [
            q(u.$slots, "default"),
            e.showCloseButton ? (t(), V(y(Ne), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                T(y(xt)),
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
}), Vw = /* @__PURE__ */ A({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = ke(a);
    return (s, i) => (t(), V(y(Wt), le({ "data-slot": "dialog-description" }, y(r), {
      class: y(Q)("text-muted-foreground text-sm", l.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dw = /* @__PURE__ */ A({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: O(y(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      q(a.$slots, "default"),
      e.showCloseButton ? (t(), V(y(Ne), {
        key: 0,
        "as-child": ""
      }, {
        default: j(() => [
          T(se, { variant: "outline" }, {
            default: j(() => [...r[0] || (r[0] = [
              I(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : $("", !0)
    ], 2));
  }
}), Tw = /* @__PURE__ */ A({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: O(y(Q)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Ew = /* @__PURE__ */ A({
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
    const a = e, r = l, s = re(a, "class"), i = me(s, r);
    return (u, d) => (t(), V(y(kt), null, {
      default: j(() => [
        T(y(yt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            T(y($t), le({
              class: y(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...y(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (f) => {
                const h = f.detail.originalEvent, p = h.target;
                (h.offsetX > p.clientWidth || h.offsetY > p.clientHeight) && f.preventDefault();
              })
            }), {
              default: j(() => [
                q(u.$slots, "default"),
                T(y(Ne), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    T(y(xt), { class: "w-4 h-4" }),
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
}), Fw = /* @__PURE__ */ A({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = ke(a);
    return (s, i) => (t(), V(y(Zt), le({ "data-slot": "dialog-title" }, y(r), {
      class: y(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: j(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Iw = /* @__PURE__ */ A({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Jt), le({ "data-slot": "dialog-trigger" }, l), {
      default: j(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nw = /* @__PURE__ */ A({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), V(y(xn), le({ "data-slot": "label" }, y(a), {
      class: y(Q)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: j(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rw = /* @__PURE__ */ A({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), V(y(Oa), {
      role: "status",
      "aria-label": "Loading",
      class: O(y(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), Uw = /* @__PURE__ */ A({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: O(
        y(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Hw = /* @__PURE__ */ A({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: O(y(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), qw = /* @__PURE__ */ A({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: O(y(Q)("px-6", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Kw = /* @__PURE__ */ A({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: O(y(Q)("text-muted-foreground text-sm", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Gw = /* @__PURE__ */ A({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: O(y(Q)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Ww = /* @__PURE__ */ A({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: O(
        y(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Zw = /* @__PURE__ */ A({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: O(y(Q)("leading-none font-semibold", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Ku = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Gu = { class: "flex items-start gap-3" }, Wu = { class: "min-w-0 flex-1" }, Zu = { class: "text-foreground text-sm font-medium" }, Ju = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Jw = /* @__PURE__ */ A({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = G(!1), u = G(null), d = G(0);
    ba((h) => (console.error(`[PkBoundary] ${r.label} failed to render`, h), i.value = !0, u.value = h instanceof Error ? h.message : null, s("error", h), !1));
    function f() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: f }), (h, p) => (t(), n("div", {
      class: O(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Ku, [
        o("div", Gu, [
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
          o("div", Wu, [
            o("p", Zu, c(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", Ju, c(u.value), 1)) : $("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: f
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
              I(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? $("", !0) : q(h.$slots, "default", { key: d.value })
    ], 2));
  }
}), Yu = { class: "bg-card rounded-lg border" }, Xu = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Qu = { class: "min-w-0" }, ed = {
  key: 0,
  class: "truncate text-sm font-medium"
}, td = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, ad = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, nd = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, Yw = /* @__PURE__ */ A({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Yu, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Xu, [
        o("div", Qu, [
          q(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", ed, c(e.title), 1)) : $("", !0),
            e.description ? (t(), n("p", td, c(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", ad, [
          q(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: O(e.padded ? "p-4" : "")
      }, [
        q(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", nd, [
        q(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), ra = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function Xw() {
  const e = Qt(), l = k(() => e.props.panel?.pageFooter === !0);
  return ct(ra, l), l;
}
const ld = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, od = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, sd = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, Qw = /* @__PURE__ */ A({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = Qt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = k(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), u = Xe(ra, k(() => !1)), d = k(() => !l.host && y(u) === !0);
    return (f, h) => d.value ? $("", !0) : (t(), n("footer", ld, [
      o("div", od, [
        o("p", null, "© " + c(y(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), n("nav", sd, [
          (t(!0), n(z, null, L(i.value, (p) => (t(), V(y($n), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              I(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), rd = { class: "flex shrink-0 flex-col items-center" }, id = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, e4 = /* @__PURE__ */ A({
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
    return (i, u) => (t(), n("div", rd, [
      o("div", {
        class: O(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", id)) : $("", !0),
        o("div", {
          class: O(["size-full overflow-hidden bg-white", s.value])
        }, [
          q(i.$slots, "default")
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
}), ud = { class: "flex flex-col gap-2" }, dd = { class: "min-w-0 flex-1" }, cd = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, fd = ["disabled", "aria-label", "onClick"], md = ["disabled", "aria-label", "onClick"], pd = ["disabled", "title", "aria-label", "onClick"], vd = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, gd = ["disabled"], t4 = /* @__PURE__ */ A({
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
    const i = G(u(a.modelValue));
    function u(g) {
      return Array.isArray(g) ? g.map((m) => ({ uid: s++, data: { ...m } })) : [];
    }
    ue(
      () => a.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(d()) && (i.value = u(g));
      }
    );
    function d() {
      const g = [];
      for (const m of i.value) {
        const S = {};
        let B = !1;
        for (const P of a.children) {
          const Z = m.data[P.key] ?? null;
          S[P.key] = Z, Z !== null && Z !== "" && !(Array.isArray(Z) && Z.length === 0) && (B = !0);
        }
        B && g.push(S);
      }
      return g.length ? g : null;
    }
    function f() {
      r("update:modelValue", d());
    }
    const h = k(() => a.maxItems !== null && i.value.length >= a.maxItems), p = k(() => a.minItems !== null && i.value.length <= a.minItems), x = k(() => a.children.length === 1);
    function M() {
      if (h.value || a.disabled)
        return;
      const g = {};
      for (const m of a.children)
        g[m.key] = null;
      i.value.push({ uid: s++, data: g });
    }
    function w(g) {
      i.value = i.value.filter((m) => m.uid !== g), f();
    }
    function C(g, m) {
      const S = g + m;
      if (S < 0 || S >= i.value.length)
        return;
      const B = [...i.value], [P] = B.splice(g, 1);
      B.splice(S, 0, P), i.value = B, f();
    }
    function b(g, m, S) {
      const B = i.value.find((P) => P.uid === g);
      B && (B.data[m] = S, f());
    }
    function v(g, m) {
      return a.errors[`${a.fieldKey}.${g}.${m}`];
    }
    return (g, m) => (t(), n("div", ud, [
      (t(!0), n(z, null, L(i.value, (S, B) => (t(), n("div", {
        key: S.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: O(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", x.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, c(B + 1), 3),
        o("div", dd, [
          x.value ? (t(), V(Ee, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: S.data[e.children[0].key],
            error: v(B, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => b(S.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", cd, [
            (t(!0), n(z, null, L(e.children, (P) => (t(), V(Ee, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: S.data[P.key],
              error: v(B, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (Z) => b(S.uid, P.key, Z)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: O(["flex shrink-0 items-center gap-0.5", x.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === 0,
            "aria-label": `Move ${e.itemLabel} ${B + 1} up`,
            onClick: (P) => C(B, -1)
          }, [...m[0] || (m[0] = [
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
          ])], 8, fd),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${B + 1} down`,
            onClick: (P) => C(B, 1)
          }, [...m[1] || (m[1] = [
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
          ])], 8, md),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${B + 1}`,
            onClick: (P) => w(S.uid)
          }, [...m[2] || (m[2] = [
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
          ])], 8, pd)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", vd, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
      h.value ? $("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: M
      }, [
        m[3] || (m[3] = o("svg", {
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
        I(" Add " + c(e.itemLabel.toLowerCase()), 1)
      ], 8, gd))
    ]));
  }
}), hd = { class: "space-y-1" }, bd = { class: "flex items-center gap-1" }, xd = ["disabled", "title", "aria-label", "onClick"], yd = ["aria-pressed"], kd = ["id", "value", "rows", "disabled"], $d = ["innerHTML"], wd = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(!1), i = k(() => a.modelValue ?? "");
    function u(x) {
      return x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = k(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(x, M = x) {
      const w = document.getElementById(a.id ?? "");
      if (w === null)
        return;
      const C = w.selectionStart, b = w.selectionEnd, v = i.value.slice(C, b);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${x}${v}${M}${i.value.slice(b)}`
      );
    }
    const h = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, p = k(
      () => (a.toolbar ?? Object.keys(h)).filter((x) => x in h)
    );
    return (x, M) => (t(), n("div", hd, [
      o("div", bd, [
        (t(!0), n(z, null, L(p.value, (w) => (t(), n("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => h[w].run()
        }, c(h[w].label), 9, xd))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: M[0] || (M[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, yd)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, $d)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, kd))
    ]));
  }
}), Cd = { class: "space-y-1" }, Sd = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Md = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Bd = ["id", "value", "rows", "disabled"], _d = { class: "text-muted-foreground text-xs" }, Pd = {
  key: 0,
  class: "text-destructive text-xs"
}, zd = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(null), i = G(!0), u = k(() => a.modelValue ?? ""), d = k(() => Math.max(u.value.split(`
`).length, 1)), f = k(() => {
      if (a.language !== "json" || u.value.trim() === "")
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
      const M = x.target, w = M.selectionStart, C = M.selectionEnd, b = `${u.value.slice(0, w)}    ${u.value.slice(C)}`;
      r("update:modelValue", b), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = w + 4;
      });
    }
    return (x, M) => (t(), n("div", Cd, [
      o("div", Sd, [
        o("div", Md, [
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
          onKeydown: p
        }, null, 40, Bd)
      ]),
      o("p", _d, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", Pd, c(f.value), 1)) : $("", !0)
    ]));
  }
}), Ad = { class: "space-y-3" }, Od = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, jd = { class: "text-sm font-medium" }, Ld = { class: "flex items-center gap-1" }, Vd = ["disabled", "onClick"], Dd = ["disabled", "onClick"], Td = ["disabled", "onClick"], Ed = { class: "space-y-3 p-3" }, Fd = { class: "flex flex-wrap items-center gap-2" }, Id = ["disabled", "onClick"], Nd = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, a4 = /* @__PURE__ */ A({
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
    function f(M) {
      u.value || d([...s.value, { type: M, data: {} }]);
    }
    function h(M) {
      d(s.value.filter((w, C) => C !== M));
    }
    function p(M, w) {
      const C = M + w;
      if (C < 0 || C >= s.value.length)
        return;
      const b = [...s.value], [v] = b.splice(M, 1);
      b.splice(C, 0, v), d(b);
    }
    function x(M, w, C) {
      d(
        s.value.map(
          (b, v) => v === M ? { ...b, data: { ...b.data, [w]: C } } : b
        )
      );
    }
    return (M, w) => (t(), n("div", Ad, [
      (t(!0), n(z, null, L(s.value, (C, b) => (t(), n("div", {
        key: `${C.type}-${b}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Od, [
          o("span", jd, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", Ld, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || b === 0,
              "aria-label": "Move up",
              onClick: (v) => p(b, -1)
            }, " ↑ ", 8, Vd),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || b === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (v) => p(b, 1)
            }, " ↓ ", 8, Dd),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (v) => h(b)
            }, " Remove ", 8, Td)
          ])
        ]),
        o("div", Ed, [
          (t(!0), n(z, null, L(i.value[C.type]?.fields ?? [], (v) => (t(), V(Ee, {
            key: v.key,
            field: v,
            value: C.data[v.key] ?? null,
            error: e.errors?.[v.key],
            processing: e.disabled,
            onChange: (g) => x(b, v.key, g)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Fd, [
        (t(!0), n(z, null, L(e.blocks, (C) => (t(), n("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (b) => f(C.type)
        }, " + " + c(C.label), 9, Id))), 128)),
        u.value ? (t(), n("span", Nd, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), Rd = ["name", "value", "checked", "disabled", "onChange"], Ud = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Hd = /* @__PURE__ */ A({
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
          onChange: (f) => r("update:modelValue", d.value)
        }, null, 40, Rd),
        I(" " + c(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ud, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), qd = ["value", "checked", "disabled", "onChange"], Kd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Gd = /* @__PURE__ */ A({
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
    function i(f) {
      return s.value.some((h) => h == f.value);
    }
    function u(f) {
      r(
        "update:modelValue",
        i(f) ? s.value.filter((h) => h != f.value) : [...s.value, f.value]
      );
    }
    const d = k(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, h) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(d.value)
    }, [
      (t(!0), n(z, null, L(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: O(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (x) => u(p)
        }, null, 40, qd),
        I(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Kd, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), Wd = { class: "flex flex-col gap-1.5" }, Zd = ["aria-label", "onClick"], Jd = ["placeholder", "disabled", "maxlength"], Yd = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Xd = ["onClick"], Qd = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, ec = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(""), i = k(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), u = k(() => i.value.length >= (a.field.max ?? 25)), d = k(
      () => (a.field.suggestions ?? []).filter(
        (x) => !i.value.some((M) => M.toLowerCase() === x.toLowerCase())
      )
    );
    function f(x) {
      const M = x.trim().slice(0, a.field.maxLength ?? 40);
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
    function h(x) {
      r(
        "update:modelValue",
        i.value.filter((M, w) => w !== x)
      );
    }
    function p(x) {
      if (x.key === "Enter" || x.key === ",") {
        x.preventDefault(), f(s.value);
        return;
      }
      x.key === "Backspace" && s.value === "" && i.value.length > 0 && h(i.value.length - 1);
    }
    return (x, M) => (t(), n("div", Wd, [
      o("div", {
        class: O(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, L(i.value, (w, C) => (t(), n("span", {
          key: `${w}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          I(c(w) + " ", 1),
          e.disabled ? $("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (b) => h(C)
          }, " × ", 8, Zd))
        ]))), 128)),
        de(o("input", {
          "onUpdate:modelValue": M[0] || (M[0] = (w) => s.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: M[1] || (M[1] = (w) => f(s.value))
        }, null, 40, Jd), [
          [xe, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", Yd, [
        M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(z, null, L(d.value, (w) => (t(), n("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => f(w)
        }, c(w), 9, Xd))), 128))
      ])) : $("", !0),
      u.value ? (t(), n("p", Qd, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), tc = 4.5, Ft = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ia(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function rt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function gt(e) {
  const [l, a, r] = ia(e);
  return 0.2126 * rt(l) + 0.7152 * rt(a) + 0.0722 * rt(r);
}
function ua(e, l) {
  const a = gt(e), r = gt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function ac(e, l, a) {
  if (!Ft.test(e) || !Ft.test(l))
    return e;
  const r = gt(l) > 0.5, s = r ? 0 : 255;
  let i = ia(e);
  for (let u = 0; u <= 20; u++) {
    const d = nc(i);
    if (ua(d, l) >= a)
      return d;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function nc(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const lc = { class: "flex flex-col gap-2" }, oc = { class: "flex items-center gap-2" }, sc = {
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
}, rc = ["value", "disabled", "aria-label"], ic = ["value", "disabled", "placeholder"], uc = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, dc = ["aria-label", "title", "onClick"], cc = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, fc = /* @__PURE__ */ A({
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
      const b = C.startsWith("#") ? C : `#${C}`;
      return s.test(b) ? b.toLowerCase() : C;
    }
    function f(w) {
      r("update:modelValue", d(w.target.value));
    }
    const h = k(() => !u.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : ua(i.value, a.field.contrastBackground)), p = k(() => a.field.contrastMinRatio ?? tc), x = k(() => h.value !== null && h.value < p.value);
    function M() {
      a.field.contrastBackground && r(
        "update:modelValue",
        ac(i.value, a.field.contrastBackground, p.value)
      );
    }
    return (w, C) => (t(), n("div", lc, [
      o("div", oc, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (b) => r("update:modelValue", b.target.value))
        }, null, 40, rc)) : (t(), n("span", sc)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, ic)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", uc, [
        (t(!0), n(z, null, L(e.field.presets, (b) => (t(), n("button", {
          key: b,
          type: "button",
          class: O(["size-6 rounded border", i.value.toLowerCase() === b.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: b }),
          "aria-label": b,
          title: b,
          onClick: (v) => r("update:modelValue", b.toLowerCase())
        }, null, 14, dc))), 128))
      ])) : $("", !0),
      x.value ? (t(), n("p", cc, [
        o("span", null, " This fails contrast at " + c(h.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), mc = { class: "flex items-center gap-3" }, pc = ["min", "max", "step", "value", "disabled", "aria-label"], vc = { class: "flex shrink-0 items-center gap-1" }, gc = ["min", "max", "step", "value", "disabled"], hc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, bc = /* @__PURE__ */ A({
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
      const p = Number(a.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), f = k(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function h(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const x = Number(p);
      r("update:modelValue", Number.isFinite(x) ? x : null);
    }
    return (p, x) => (t(), n("div", mc, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: x[0] || (x[0] = (M) => h(M.target.value))
      }, null, 40, pc),
      o("div", vc, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: f.value ? "" : d.value,
          disabled: e.disabled,
          onInput: x[1] || (x[1] = (M) => h(M.target.value))
        }, null, 40, gc),
        e.field.unit ? (t(), n("span", hc, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), Je = /* @__PURE__ */ new Map();
function it(e, l) {
  Je.set(e, l);
}
function xc(e) {
  return Je.get(e);
}
function n4(e) {
  return Je.has(e);
}
function yc() {
  return [...Je.keys()].sort();
}
function l4() {
  Je.clear();
}
const kc = ["name", "value", "checked", "disabled", "onChange"], $c = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, wc = { class: "whitespace-nowrap" }, Cc = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Sc = ["name", "value", "checked", "disabled", "onChange"], Mc = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Bc = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, _c = { class: "text-center text-xs font-medium" }, Pc = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, zc = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Ac = /* @__PURE__ */ A({
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
      () => a.field.preview ? xc(a.field.preview) : void 0
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
    function f(h) {
      return a.modelValue != null && h.value == a.modelValue;
    }
    return (h, p) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: O(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, L(e.options, (x) => (t(), n("label", {
        key: String(x.value),
        class: O(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          f(x) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: x.value,
          checked: f(x),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", x.value)
        }, null, 40, kc),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", $c, [
          (t(), V(he(s.value), {
            value: x.value,
            label: x.label,
            selected: f(x)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", wc, c(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Cc, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: O(["grid gap-3", d.value])
    }, [
      (t(!0), n(z, null, L(e.options, (x) => (t(), n("label", {
        key: String(x.value),
        class: O(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          f(x) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: x.value,
          checked: f(x),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", x.value)
        }, null, 40, Sc),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Mc, [
          s.value ? (t(), V(he(s.value), {
            key: 0,
            value: x.value,
            label: x.label,
            selected: f(x)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Bc, " no preview ")) : $("", !0)
        ]),
        o("span", _c, c(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Pc, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", zc, [
        p[2] || (p[2] = I(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        I(". Registered: " + c(y(yc)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), Oc = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, jc = /* @__PURE__ */ A({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Oc, [
      o("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Lc = { class: "flex flex-col items-center gap-1 text-center" }, Vc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, da = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("div", Lc, [
      o("div", {
        class: O(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: a.value, color: a.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Vc, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), Dc = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Tc = { class: "flex items-center gap-3" }, Ec = ["src"], Fc = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Ic = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Nc = {
  key: 0,
  class: "text-right text-sm"
}, Rc = { class: "text-neutral-500" }, Uc = { class: "tabular-nums" }, Hc = { key: 1 }, qc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Kc = { class: "mt-2 font-medium" }, Gc = { key: 2 }, Wc = { class: "w-full text-sm" }, Zc = { class: "w-full py-3 pr-2" }, Jc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Yc = { key: 0 }, Xc = ["colspan"], Qc = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, ef = { class: "w-64 text-sm" }, tf = { class: "tabular-nums" }, af = {
  key: 3,
  class: "py-2"
}, nf = { key: 4 }, lf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, of = { class: "mt-2 flex flex-col gap-1 text-sm" }, sf = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, rf = { key: 0 }, uf = {
  key: 1,
  class: "mt-1"
}, df = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, cf = /* @__PURE__ */ A({
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
    return (f, h) => (t(), n("article", Dc, [
      o("div", Tc, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Ec)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: a() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, L(e.document.blocks, (p, x) => (t(), n(z, { key: x }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ne({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ne({ color: a() })
            }, c(p.title), 5),
            p.subtitle ? (t(), n("p", Fc, c(p.subtitle), 1)) : $("", !0),
            p.reference ? (t(), n("p", Ic, c(p.reference), 1)) : $("", !0)
          ]),
          r(p).length ? (t(), n("dl", Nc, [
            (t(!0), n(z, null, L(r(p), (M, w) => (t(), n("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Rc, c(M.label), 1),
              o("dd", Uc, c(M.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", Hc, [
          o("h2", qc, c(p.heading), 1),
          o("p", Kc, c(p.name), 1),
          (t(!0), n(z, null, L(u(p.lines), (M, w) => (t(), n("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, c(M), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", Gc, [
          o("table", Wc, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: a() })
              }, [
                (t(!0), n(z, null, L(u(p.columns), (M, w) => (t(), n("th", {
                  key: w,
                  class: O(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(M), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, L(s(p), (M, w) => (t(), n("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                o("td", Zc, [
                  o("p", null, c(M.description), 1),
                  M.detail ? (t(), n("p", Jc, c(M.detail), 1)) : $("", !0)
                ]),
                (t(!0), n(z, null, L(M.cells, (C, b) => (t(), n("td", {
                  key: b,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", Yc, [
                o("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, Xc)
              ])) : $("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", Qc, [
            o("dl", ef, [
              (t(!0), n(z, null, L(i(p), (M, w) => (t(), n("div", {
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
                o("dd", tf, c(M.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : p.type === "code" ? (t(), n("section", af, [
          T(da, {
            code: d(p.code),
            caption: d(p.caption),
            style: ne(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", nf, [
          o("h2", lf, c(p.heading), 1),
          o("ol", of, [
            (t(!0), n(z, null, L(u(p.items), (M, w) => (t(), n("li", {
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
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: O(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: a() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), n("footer", sf, [
          p.text ? (t(), n("p", rf, c(p.text), 1)) : $("", !0),
          u(p.contacts).length ? (t(), n("p", uf, c(u(p.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), n("p", df, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), ff = ["aria-label", "title"], mf = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, pf = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, o4 = /* @__PURE__ */ A({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = la(), r = k(() => l.value.theme === "dark");
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
      (t(), n("svg", mf, [
        r.value ? (t(), n(z, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", pf))
      ]))
    ], 8, ff));
  }
}), vf = ["width", "height"], gf = { key: 0 }, hf = ["x1", "x2", "y1", "y2"], bf = ["x", "y"], xf = ["x1", "x2", "y1", "y2"], yf = ["x", "y"], kf = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], $f = ["x", "y", "width", "height", "fill", "fill-opacity"], wf = ["x", "y"], Cf = ["x", "y"], Sf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Mf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Bf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, _f = { class: "text-xs font-semibold tabular-nums" }, Pf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, zf = { class: "text-muted-foreground" }, It = 5.6, s4 = /* @__PURE__ */ A({
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
    function s(_, K) {
      if (!l.thresholds?.length)
        return K;
      const R = l.thresholds.find((U) => _ < U.max);
      return r(R ? R.color : l.aboveColor);
    }
    const i = G(null), u = G(560), d = G(null);
    let f = null;
    fe(() => {
      f = new ResizeObserver((_) => {
        u.value = Math.max(160, _[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), ve(() => f?.disconnect());
    const h = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((K, R) => ({
      ...K,
      color: K.color ?? h[R % h.length]
    }))), x = k(() => p.value[0]?.points.map((_) => _.label) ?? []), M = k(() => x.value.length), w = k(() => l.orientation === "horizontal"), C = k(() => Math.max(0, ...x.value.map((_) => _.length))), b = k(() => {
      if (!w.value)
        return l.showAxis ? 44 : 8;
      const _ = C.value * It + 16;
      return Math.round(Math.min(Math.max(60, _), u.value * 0.4));
    }), v = k(() => Math.max(4, Math.floor((b.value - 16) / It)));
    function g(_) {
      return _.length <= v.value ? _ : `${_.slice(0, v.value - 1)}…`;
    }
    const m = k(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: b.value
    })), S = k(() => ({
      w: Math.max(1, u.value - m.value.left - m.value.right),
      h: Math.max(1, l.height - m.value.top - m.value.bottom)
    })), B = (_) => l.format ? l.format(_) : P(_);
    function P(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const Z = k(() => {
      const _ = x.value.map(
        (J, E) => l.stacked ? p.value.reduce((W, oe) => W + Math.max(0, oe.points[E]?.value ?? 0), 0) : Math.max(...p.value.map((W) => W.points[E]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const K = Math.max(..._, 0);
      if (K <= 0)
        return 1;
      const R = 10 ** Math.floor(Math.log10(K));
      return ([1, 2, 2.5, 5, 10].find((J) => K <= J * R) ?? 10) * R;
    }), F = k(
      () => (w.value ? S.value.h : S.value.w) / Math.max(1, M.value)
    ), te = k(() => F.value * 0.68), H = k(
      () => l.stacked || p.value.length <= 1 ? te.value : te.value / p.value.length
    ), Y = k(() => {
      const _ = [], K = new Array(M.value).fill(0);
      return p.value.forEach((R, U) => {
        R.points.forEach((J, E) => {
          const oe = Math.max(0, J.value) / Z.value * (w.value ? S.value.w : S.value.h), je = (w.value ? m.value.top : m.value.left) + E * F.value + (F.value - te.value) / 2, Ot = l.stacked ? 0 : U * H.value;
          _.push(
            w.value ? {
              x: m.value.left + K[E],
              y: je + Ot,
              w: oe,
              h: Math.max(0, H.value - 2),
              color: s(J.value, R.color),
              label: J.label,
              name: R.name,
              value: J.value,
              index: E
            } : {
              x: je + Ot,
              y: m.value.top + S.value.h - oe - K[E],
              w: Math.max(0, H.value - 2),
              h: oe,
              color: s(J.value, R.color),
              label: J.label,
              name: R.name,
              value: J.value,
              index: E
            }
          ), l.stacked && (K[E] += oe);
        });
      }), _;
    }), X = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: Z.value * (w.value ? _ : 1 - _),
        x: m.value.left + S.value.w * _,
        y: m.value.top + S.value.h * _
      }))
    ), ae = k(() => Math.max(1, Math.ceil(M.value / (w.value ? 14 : 10))));
    function N(_) {
      return _ === M.value - 1 || _ % ae.value === 0;
    }
    function D(_) {
      return (w.value ? m.value.top : m.value.left) + _ * F.value + F.value / 2;
    }
    const ee = k(() => d.value === null ? null : {
      label: x.value[d.value],
      rows: p.value.map((_) => ({
        name: _.name,
        color: _.color,
        value: _.points[d.value]?.value ?? 0
      }))
    });
    return (_, K) => (t(), n("div", {
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
          onMouseleave: K[0] || (K[0] = (R) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", gf, [
            w.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, L(X.value, (R) => (t(), n("line", {
                key: `g-${R.x}`,
                x1: R.x,
                x2: R.x,
                y1: m.value.top,
                y2: m.value.top + S.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, hf))), 128)),
              (t(!0), n(z, null, L(X.value, (R) => (t(), n("text", {
                key: `gt-${R.x}`,
                x: R.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(R.value)), 9, bf))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, L(X.value, (R) => (t(), n("line", {
                key: `g-${R.y}`,
                x1: m.value.left,
                x2: u.value - m.value.right,
                y1: R.y,
                y2: R.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, xf))), 128)),
              (t(!0), n(z, null, L(X.value, (R) => (t(), n("text", {
                key: `gt-${R.y}`,
                x: m.value.left - 8,
                y: R.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(R.value)), 9, yf))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), n(z, null, L(x.value, (R, U) => (t(), n("rect", {
            key: `hit-${U}`,
            x: w.value ? m.value.left : m.value.left + U * F.value,
            y: w.value ? m.value.top + U * F.value : m.value.top,
            width: w.value ? S.value.w : F.value,
            height: w.value ? F.value : S.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === U ? 0.4 : 0,
            onMouseenter: (J) => d.value = U
          }, null, 40, kf))), 128)),
          (t(!0), n(z, null, L(Y.value, (R, U) => (t(), n("rect", {
            key: `b-${U}`,
            x: R.x,
            y: R.y,
            width: R.w,
            height: R.h,
            fill: R.color,
            "fill-opacity": d.value === null || d.value === R.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, $f))), 128)),
          w.value ? (t(!0), n(z, { key: 1 }, L(x.value, (R, U) => de((t(), n("text", {
            key: `c-${U}`,
            x: m.value.left - 8,
            y: D(U) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            I(c(g(R)) + " ", 1),
            o("title", null, c(R), 1)
          ], 8, wf)), [
            [Oe, N(U)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, L(x.value, (R, U) => de((t(), n("text", {
            key: `c-${U}`,
            x: D(U),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(R), 9, Cf)), [
            [Oe, N(U)]
          ])), 128))
        ], 40, vf)),
        ee.value ? (t(), n("div", Sf, [
          o("p", Mf, c(ee.value.label), 1),
          (t(!0), n(z, null, L(ee.value.rows, (R, U) => (t(), n("div", {
            key: U,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: R.color })
            }, null, 4),
            o("span", Bf, c(R.name || "Value"), 1),
            o("span", _f, c(B(R.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", Pf, [
          (t(!0), n(z, null, L(p.value, (R, U) => (t(), n("span", {
            key: U,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: R.color })
            }, null, 4),
            o("span", zf, c(R.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Af = ["width", "height"], Of = ["id"], jf = ["stop-color"], Lf = ["stop-color"], Vf = { key: 0 }, Df = ["x1", "x2", "y1", "y2"], Tf = ["x", "y"], Ef = ["x", "y"], Ff = ["x1", "x2", "y1", "y2"], If = ["d", "fill"], Nf = ["d", "stroke", "stroke-dasharray"], Rf = ["cx", "cy", "fill"], Uf = { key: 1 }, Hf = ["x1", "x2", "y1", "y2"], qf = ["cx", "cy", "fill"], Kf = ["x", "y"], Gf = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Wf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Zf = { class: "text-xs font-semibold tabular-nums" }, Jf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Yf = { class: "text-muted-foreground" }, Xf = /* @__PURE__ */ A({
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
    const l = e, a = k(() => h.value.some((_) => _.axis === "right")), r = G(null), s = G(560), i = G(null);
    let u = null;
    fe(() => {
      u = new ResizeObserver((_) => {
        s.value = Math.max(160, _[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), ve(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = Math.random().toString(36).slice(2, 9), h = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((K, R) => ({
      ...K,
      color: K.color ?? d[R % d.length]
    }))), p = k(() => h.value[0]?.points.map((_) => _.label) ?? []), x = k(() => p.value.length), M = k(() => ({
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
    function b(_) {
      const K = Math.max(..._, 0);
      if (K <= 0)
        return 1;
      const R = 10 ** Math.floor(Math.log10(K));
      return ([1, 2, 2.5, 5, 10].find((J) => K <= J * R) ?? 10) * R;
    }
    const v = k(
      () => b(
        h.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((K) => K.value))
      )
    ), g = k(
      () => b(
        h.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((K) => K.value))
      )
    ), m = k(() => ({
      w: Math.max(1, s.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    }));
    function S(_) {
      return M.value.left + (x.value <= 1 ? 0 : _ / (x.value - 1) * m.value.w);
    }
    function B(_, K = "left") {
      const R = K === "right" ? g.value : v.value;
      return M.value.top + m.value.h - _ / R * m.value.h;
    }
    const P = k(
      () => h.value.map((_) => {
        const K = _.points.map((U, J) => ({
          ...U,
          x: S(J),
          y: B(U.value, _.axis ?? "left")
        })), R = _.stepped ? Z(K) : F(K);
        return { ..._, pts: K, line: R, area: te(R, K) };
      })
    );
    function Z(_) {
      if (_.length === 0)
        return "";
      let K = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let R = 1; R < _.length; R++)
        K += ` L${_[R].x.toFixed(2)},${_[R - 1].y.toFixed(2)} L${_[R].x.toFixed(2)},${_[R].y.toFixed(2)}`;
      return K;
    }
    function F(_) {
      const K = _.length;
      if (K === 0)
        return "";
      if (K === 1)
        return `M${_[0].x},${_[0].y}`;
      const R = [], U = [];
      for (let W = 0; W < K - 1; W++)
        R[W] = _[W + 1].x - _[W].x, U[W] = R[W] === 0 ? 0 : (_[W + 1].y - _[W].y) / R[W];
      const J = [U[0]];
      for (let W = 1; W < K - 1; W++)
        if (U[W - 1] * U[W] <= 0)
          J[W] = 0;
        else {
          const oe = 2 * R[W] + R[W - 1], je = R[W] + 2 * R[W - 1];
          J[W] = (oe + je) / (oe / U[W - 1] + je / U[W]);
        }
      J[K - 1] = U[K - 2];
      let E = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let W = 0; W < K - 1; W++) {
        const oe = R[W] / 3;
        E += ` C${(_[W].x + oe).toFixed(2)},${(_[W].y + J[W] * oe).toFixed(2)} ${(_[W + 1].x - oe).toFixed(2)},${(_[W + 1].y - J[W + 1] * oe).toFixed(2)} ${_[W + 1].x.toFixed(2)},${_[W + 1].y.toFixed(2)}`;
      }
      return E;
    }
    function te(_, K) {
      if (K.length === 0)
        return "";
      const R = M.value.top + m.value.h;
      return `${_} L${K[K.length - 1].x.toFixed(2)},${R} L${K[0].x.toFixed(2)},${R} Z`;
    }
    const H = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: M.value.top + m.value.h * _,
        value: v.value * (1 - _)
      }))
    ), Y = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: M.value.top + m.value.h * _,
        value: g.value * (1 - _)
      }))
    ), X = k(() => Math.max(1, Math.ceil(x.value / 8)));
    function ae(_) {
      return _ === x.value - 1 || _ % X.value === 0;
    }
    function N(_) {
      const K = _.currentTarget.getBoundingClientRect(), R = _.clientX - K.left - M.value.left, U = x.value <= 1 ? 1 : m.value.w / (x.value - 1);
      i.value = Math.min(x.value - 1, Math.max(0, Math.round(R / U)));
    }
    const D = k(() => {
      if (i.value === null || x.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: S(_),
        label: p.value[_],
        rows: P.value.map((K) => ({
          name: K.name,
          color: K.color,
          value: K.points[_]?.value ?? 0,
          y: K.pts[_]?.y ?? 0
        }))
      };
    }), ee = k(() => {
      if (!D.value)
        return {};
      const _ = D.value.x > s.value * 0.6;
      return {
        left: `${D.value.x}px`,
        top: "8px",
        transform: _ ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (_, K) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: N,
          onMouseleave: K[0] || (K[0] = (R) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, L(P.value, (R, U) => (t(), n("linearGradient", {
              id: `pk-fill-${y(f)}-${U}`,
              key: U,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": R.color,
                "stop-opacity": "0.25"
              }, null, 8, jf),
              o("stop", {
                offset: "100%",
                "stop-color": R.color,
                "stop-opacity": "0.01"
              }, null, 8, Lf)
            ], 8, Of))), 128))
          ]),
          e.showAxis ? (t(), n("g", Vf, [
            (t(!0), n(z, null, L(H.value, (R) => (t(), n("line", {
              key: R.y,
              x1: M.value.left,
              x2: s.value - M.value.right,
              y1: R.y,
              y2: R.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Df))), 128)),
            (t(!0), n(z, null, L(H.value, (R) => (t(), n("text", {
              key: `t-${R.y}`,
              x: M.value.left - 8,
              y: R.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(R.value)), 9, Tf))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, L(Y.value, (R) => (t(), n("text", {
              key: `rt-${R.y}`,
              x: s.value - M.value.right + 8,
              y: R.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(R.value)), 9, Ef))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), n(z, null, L(p.value, (R, U) => de((t(), n("line", {
            key: `v-${U}`,
            x1: S(U),
            x2: S(U),
            y1: M.value.top,
            y2: M.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Ff)), [
            [Oe, ae(U)]
          ])), 128)),
          (t(!0), n(z, null, L(P.value, (R, U) => (t(), n("g", {
            key: `s-${U}`
          }, [
            R.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: R.area,
              fill: `url(#pk-fill-${y(f)}-${U})`
            }, null, 8, If)) : $("", !0),
            o("path", {
              d: R.line,
              fill: "none",
              stroke: R.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": R.dashed ? "6 4" : void 0
            }, null, 8, Nf),
            R.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: R.pts[0].x,
              cy: R.pts[0].y,
              r: "3",
              fill: R.color
            }, null, 8, Rf)) : $("", !0)
          ]))), 128)),
          D.value ? (t(), n("g", Uf, [
            o("line", {
              x1: D.value.x,
              x2: D.value.x,
              y1: M.value.top,
              y2: M.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Hf),
            (t(!0), n(z, null, L(D.value.rows, (R, U) => (t(), n("circle", {
              key: `d-${U}`,
              cx: D.value.x,
              cy: R.y,
              r: "4",
              fill: R.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, qf))), 128))
          ])) : $("", !0),
          (t(!0), n(z, null, L(p.value, (R, U) => de((t(), n("text", {
            key: `x-${U}`,
            x: S(U),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(R), 9, Kf)), [
            [Oe, ae(U)]
          ])), 128))
        ], 40, Af)),
        D.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(ee.value)
        }, [
          o("p", Gf, c(D.value.label), 1),
          (t(!0), n(z, null, L(D.value.rows, (R, U) => (t(), n("div", {
            key: U,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: R.color })
            }, null, 4),
            o("span", Wf, c(R.name || "Value"), 1),
            o("span", Zf, c(w(R.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && h.value.length > 1 ? (t(), n("div", Jf, [
          (t(!0), n(z, null, L(P.value, (R, U) => (t(), n("span", {
            key: U,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: R.color })
            }, null, 4),
            o("span", Yf, c(R.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Qf = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, em = { class: "text-muted-foreground text-[11px] capitalize" }, tm = { class: "text-sm font-semibold tabular-nums" }, am = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ye = /* @__PURE__ */ A({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Qf, [
      o("p", em, c(e.label), 1),
      o("p", tm, [
        I(c(e.value) + " ", 1),
        e.share ? (t(), n("span", am, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), nm = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, lm = ["width", "height", "viewBox", "aria-label"], om = ["d", "fill", "fill-opacity", "onMouseenter"], sm = ["x", "y"], rm = ["x", "y"], im = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, um = ["onMouseenter"], dm = { class: "min-w-0 flex-1 truncate capitalize" }, cm = { class: "tabular-nums font-medium" }, fm = { class: "text-muted-foreground w-9 text-right tabular-nums" }, r4 = /* @__PURE__ */ A({
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
    ], r = k(() => l.data.reduce((v, g) => v + g.value, 0)), s = G(null), i = k(() => l.height), u = k(() => i.value / 2 - 4), d = k(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function f(v) {
      return a[v % a.length];
    }
    function h(v) {
      return 1 - Math.min(0.55, Math.floor(v / a.length) * 0.28);
    }
    const p = k(() => {
      if (r.value <= 0)
        return [];
      const v = i.value / 2;
      let g = -Math.PI / 2;
      return l.data.map((m, S) => {
        const B = m.value / r.value, P = B * Math.PI * 2, Z = g, F = g + P;
        return g = F, {
          ...m,
          share: B,
          colour: f(S),
          opacity: h(S),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: B >= 0.9999 ? w(v) : M(v, Z, F, u.value, d.value)
        };
      });
    });
    function x(v, g, m) {
      return `${(v + Math.cos(g) * m).toFixed(2)},${(v + Math.sin(g) * m).toFixed(2)}`;
    }
    function M(v, g, m, S, B) {
      const P = m - g > Math.PI ? 1 : 0;
      return B <= 0 ? `M${v},${v} L${x(v, g, S)} A${S},${S} 0 ${P} 1 ${x(v, m, S)} Z` : [
        `M${x(v, g, S)}`,
        `A${S},${S} 0 ${P} 1 ${x(v, m, S)}`,
        `L${x(v, m, B)}`,
        `A${B},${B} 0 ${P} 0 ${x(v, g, B)}`,
        "Z"
      ].join(" ");
    }
    function w(v) {
      const g = u.value, m = d.value, S = [
        `M${v - g},${v}`,
        `A${g},${g} 0 1 1 ${v + g},${v}`,
        `A${g},${g} 0 1 1 ${v - g},${v}`,
        "Z"
      ];
      return m <= 0 ? S.join(" ") : [
        ...S,
        `M${v - m},${v}`,
        `A${m},${m} 0 1 0 ${v + m},${v}`,
        `A${m},${m} 0 1 0 ${v - m},${v}`,
        "Z"
      ].join(" ");
    }
    const C = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), b = (v) => `${(v * 100).toFixed(v < 0.01 ? 2 : 0)}%`;
    return (v, g) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", nm, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), n(z, null, L(p.value, (m, S) => (t(), n("path", {
          key: S,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === S ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (B) => s.value = S,
          onMouseleave: g[0] || (g[0] = (B) => s.value = null)
        }, null, 40, om))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : p.value[s.value].value)), 9, sm),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, rm)
        ], 64)) : $("", !0)
      ], 8, lm)),
      o("ul", im, [
        (t(!0), n(z, null, L(p.value, (m, S) => (t(), n("li", {
          key: S,
          class: O(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === S ? "bg-muted" : ""]),
          onMouseenter: (B) => s.value = S,
          onMouseleave: g[1] || (g[1] = (B) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", dm, c(m.label), 1),
          o("span", cm, c(C(m.value)), 1),
          o("span", fm, c(b(m.share)), 1)
        ], 42, um))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), V(Ye, {
        key: 0,
        label: p.value[s.value].label,
        value: C(p.value[s.value].value),
        share: b(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), mm = ["width", "height", "viewBox", "aria-label"], pm = { class: "text-border" }, vm = ["x1", "x2", "y1", "y2", "stroke-dasharray"], gm = { class: "fill-muted-foreground text-[10px]" }, hm = ["x", "y"], bm = ["x", "y"], xm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], ym = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, i4 = /* @__PURE__ */ A({
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
    ], r = G(null), s = G(560), i = G(null);
    let u = null;
    fe(() => {
      u = new ResizeObserver((X) => {
        const ae = X[0]?.contentRect.width ?? 0;
        ae > 0 && (s.value = ae);
      }), r.value && u.observe(r.value);
    }), ve(() => u?.disconnect());
    const d = k(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (X, ae) => ae.color ?? a[X % a.length], h = k(() => d.value.flatMap((X) => X.points)), p = k(() => h.value.some((X) => typeof X.r == "number")), x = { top: 12, right: 16, bottom: 32, left: 48 }, M = k(() => Math.max(10, s.value - x.left - x.right)), w = k(() => Math.max(10, l.height - x.top - x.bottom));
    function C(X) {
      if (X.length === 0)
        return [0, 1];
      const ae = Math.min(...X), N = Math.max(...X), D = N - ae || Math.abs(N) || 1;
      return [ae - D * 0.08, N + D * 0.08];
    }
    const b = k(() => C(h.value.map((X) => X.x))), v = k(() => C(h.value.map((X) => X.y))), g = (X) => {
      const [ae, N] = b.value;
      return x.left + (X - ae) / (N - ae) * M.value;
    }, m = (X) => {
      const [ae, N] = v.value;
      return x.top + w.value - (X - ae) / (N - ae) * w.value;
    }, S = k(() => Math.max(...h.value.map((X) => X.r ?? 0), 0));
    function B(X) {
      if (!p.value || !S.value)
        return 4;
      const ae = Math.max(0, X.r ?? 0) / S.value;
      return 3 + Math.sqrt(ae) * (l.maxRadius - 3);
    }
    function P([X, ae]) {
      return Array.from({ length: 5 }, (N, D) => X + (ae - X) / 4 * D);
    }
    const Z = k(() => P(b.value)), F = k(() => P(v.value)), te = (X) => l.formatX?.(X) ?? String(Math.round(X * 100) / 100), H = (X) => l.formatY?.(X) ?? String(Math.round(X * 100) / 100), Y = k(() => {
      if (!i.value)
        return null;
      const X = d.value[i.value.s], ae = X?.points[i.value.p];
      return ae ? { series: X, point: ae } : null;
    });
    return (X, ae) => (t(), n("div", {
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
        o("g", pm, [
          (t(!0), n(z, null, L(F.value, (N, D) => (t(), n("line", {
            key: `gy-${D}`,
            x1: x.left,
            x2: x.left + M.value,
            y1: m(N),
            y2: m(N),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": D === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, vm))), 128))
        ]),
        o("g", gm, [
          (t(!0), n(z, null, L(F.value, (N, D) => (t(), n("text", {
            key: `ty-${D}`,
            x: x.left - 8,
            y: m(N) + 3,
            "text-anchor": "end"
          }, c(H(N)), 9, hm))), 128)),
          (t(!0), n(z, null, L(Z.value, (N, D) => (t(), n("text", {
            key: `tx-${D}`,
            x: g(N),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(te(N)), 9, bm))), 128))
        ]),
        (t(!0), n(z, null, L(d.value, (N, D) => (t(), n("g", {
          key: `s-${D}`
        }, [
          (t(!0), n(z, null, L(N.points, (ee, _) => (t(), n("circle", {
            key: `p-${D}-${_}`,
            cx: g(ee.x),
            cy: m(ee.y),
            r: B(ee),
            fill: f(D, N),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: f(D, N),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== D || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (K) => i.value = { s: D, p: _ },
            onMouseleave: ae[0] || (ae[0] = (K) => i.value = null)
          }, null, 40, xm))), 128))
        ]))), 128))
      ], 8, mm)),
      Y.value ? (t(), V(Ye, {
        key: 0,
        label: Y.value.point.label ?? Y.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(Y.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(Y.value.point.y)}`,
        share: p.value && Y.value.point.r != null ? String(Y.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", ym, [
        (t(!0), n(z, null, L(d.value, (N, D) => (t(), n("span", {
          key: `l-${D}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: f(D, N) }),
            "aria-hidden": "true"
          }, null, 4),
          I(" " + c(N.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), km = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, $m = ["width", "height", "viewBox"], wm = ["points"], Cm = ["x1", "y1", "x2", "y2"], Sm = ["points", "fill", "stroke"], Mm = ["cx", "cy", "fill", "onMouseenter"], Bm = ["x", "y", "text-anchor"], _m = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Pm = { class: "truncate" }, u4 = /* @__PURE__ */ A({
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
      () => l.series.map((m, S) => ({
        ...m,
        color: m.color ?? a[S % a.length]
      }))
    ), s = k(() => r.value[0]?.points.map((m) => m.label) ?? []), i = k(() => s.value.length), u = k(() => l.height), d = k(() => u.value / 2), f = k(() => u.value / 2 - 34), h = k(() => {
      const m = Math.max(...r.value.flatMap((P) => P.points.map((Z) => Z.value)), 0);
      if (m <= 0)
        return 1;
      const S = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((P) => m <= P * S) ?? 10) * S;
    });
    function p(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function x(m, S) {
      const B = p(m);
      return {
        x: d.value + Math.cos(B) * f.value * S,
        y: d.value + Math.sin(B) * f.value * S
      };
    }
    function M(m) {
      return Array.from({ length: i.value }, (S, B) => {
        const P = x(B, m);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = k(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: M(m) }))), C = k(
      () => r.value.map((m) => {
        const S = m.points.map((B) => Math.max(0, B.value) / h.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: S.map((B, P) => {
            const Z = x(P, B);
            return `${Z.x.toFixed(2)},${Z.y.toFixed(2)}`;
          }).join(" "),
          dots: S.map((B, P) => x(P, B))
        };
      })
    ), b = k(
      () => s.value.map((m, S) => {
        const B = p(S), P = d.value + Math.cos(B) * (f.value + 14), Z = d.value + Math.sin(B) * (f.value + 14), F = Math.cos(B);
        return {
          label: m,
          x: P,
          y: Z + 3,
          anchor: Math.abs(F) < 0.2 ? "middle" : F > 0 ? "start" : "end"
        };
      })
    ), v = G(null), g = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, S) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", km, [
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
        }, null, 8, wm))), 128)),
        (t(!0), n(z, null, L(s.value, (B, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: x(P, 1).x,
          y2: x(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Cm))), 128)),
        (t(!0), n(z, null, L(C.value, (B, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: B.outline,
            fill: B.color,
            "fill-opacity": "0.16",
            stroke: B.color,
            "stroke-width": "2"
          }, null, 8, Sm),
          (t(!0), n(z, null, L(B.dots, (Z, F) => (t(), n("circle", {
            key: F,
            cx: Z.x,
            cy: Z.y,
            r: "3",
            fill: B.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => v.value = {
              series: B.name,
              axis: s.value[F],
              value: B.values[F]?.value ?? 0
            },
            onMouseleave: S[0] || (S[0] = (te) => v.value = null)
          }, null, 40, Mm))), 128))
        ]))), 128)),
        (t(!0), n(z, null, L(b.value, (B, P) => (t(), n("text", {
          key: `l-${P}`,
          x: B.x,
          y: B.y,
          "text-anchor": B.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(B.label), 9, Bm))), 128))
      ], 8, $m)),
      e.showLegend ? (t(), n("ul", _m, [
        (t(!0), n(z, null, L(r.value, (B, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: B.color })
          }, null, 4),
          o("span", Pm, c(B.name), 1)
        ]))), 128))
      ])) : $("", !0),
      v.value ? (t(), V(Ye, {
        key: 1,
        label: `${v.value.series} — ${v.value.axis}`,
        value: g(v.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), zm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Am = ["width", "height", "viewBox"], Om = ["cx", "cy", "r"], jm = ["d", "fill", "fill-opacity", "onMouseenter"], Lm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Vm = { class: "min-w-0 flex-1 truncate capitalize" }, Dm = { class: "font-medium tabular-nums" }, d4 = /* @__PURE__ */ A({
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
    ], r = G(null), s = k(() => l.height), i = k(() => s.value / 2), u = k(() => s.value / 2 - 6), d = k(() => Math.max(...l.data.map((M) => Math.max(0, M.value)), 0)), f = k(() => {
      const M = l.data.length;
      if (M === 0 || d.value <= 0)
        return [];
      const w = Math.PI * 2 / M;
      return l.data.map((C, b) => {
        const v = Math.sqrt(Math.max(0, C.value) / d.value), g = u.value * v, m = b * w - Math.PI / 2, S = m + w;
        return {
          ...C,
          color: a[b % a.length],
          share: d.value === 0 ? 0 : C.value / d.value,
          path: h(i.value, m, S, g)
        };
      });
    });
    function h(M, w, C, b) {
      if (b <= 0)
        return "";
      if (C - w >= Math.PI * 2 - 1e-6)
        return `M${M - b},${M} A${b},${b} 0 1 1 ${M + b},${M} A${b},${b} 0 1 1 ${M - b},${M} Z`;
      const v = C - w > Math.PI ? 1 : 0, g = M + Math.cos(w) * b, m = M + Math.sin(w) * b, S = M + Math.cos(C) * b, B = M + Math.sin(C) * b;
      return `M${M},${M} L${g.toFixed(2)},${m.toFixed(2)} A${b.toFixed(2)},${b.toFixed(2)} 0 ${v} 1 ${S.toFixed(2)},${B.toFixed(2)} Z`;
    }
    const p = k(() => [0.5, 0.75, 1].map((M) => u.value * M)), x = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, w) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", zm, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L(p.value, (C) => (t(), n("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Om))), 128)),
        (t(!0), n(z, null, L(f.value, (C, b) => (t(), n("path", {
          key: b,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === b ? 0.75 : 0.3,
          onMouseenter: (v) => r.value = b,
          onMouseleave: w[0] || (w[0] = (v) => r.value = null)
        }, null, 40, jm))), 128))
      ], 8, Am)),
      e.showLegend ? (t(), n("ul", Lm, [
        (t(!0), n(z, null, L(f.value, (C, b) => (t(), n("li", {
          key: b,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: C.color })
          }, null, 4),
          o("span", Vm, c(C.label), 1),
          o("span", Dm, c(x(C.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), V(Ye, {
        key: 1,
        label: f.value[r.value].label,
        value: x(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Tm = ["width", "height"], Em = ["x1", "x2", "y1", "y2"], Fm = ["x", "y"], Im = ["x", "y"], Nm = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Rm = ["x", "y", "width", "height", "fill", "fill-opacity"], Um = ["d", "stroke"], Hm = ["cx", "cy", "fill"], qm = ["x", "y"], Km = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Gm = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Wm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Zm = { class: "text-xs font-semibold tabular-nums" }, Jm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Ym = { class: "text-muted-foreground" }, c4 = /* @__PURE__ */ A({
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
    const l = e, a = G(null), r = G(560), s = G(null);
    let i = null;
    fe(() => {
      i = new ResizeObserver((D) => {
        r.value = Math.max(160, D[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ve(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], f = k(
      () => l.bars.map((D, ee) => ({
        ...D,
        color: D.color ?? u[ee % u.length]
      }))
    ), h = k(
      () => l.lines.map((D, ee) => ({
        ...D,
        color: D.color ?? d[ee % d.length]
      }))
    ), p = k(
      () => f.value[0]?.points.map((D) => D.label) ?? h.value[0]?.points.map((D) => D.label) ?? []
    ), x = k(() => p.value.length), M = k(() => l.lineAxis === "right"), w = k(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = k(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function b(D) {
      const ee = Math.max(...D, 0);
      if (ee <= 0)
        return 1;
      const _ = 10 ** Math.floor(Math.log10(ee));
      return ([1, 2, 2.5, 5, 10].find((R) => ee <= R * _) ?? 10) * _;
    }
    const v = k(
      () => b([
        ...f.value.flatMap((D) => D.points.map((ee) => ee.value)),
        ...M.value ? [] : h.value.flatMap((D) => D.points.map((ee) => ee.value))
      ])
    ), g = k(
      () => M.value ? b(h.value.flatMap((D) => D.points.map((ee) => ee.value))) : v.value
    ), m = k(() => C.value.w / Math.max(1, x.value)), S = k(() => m.value * 0.6), B = k(() => S.value / Math.max(1, f.value.length));
    function P(D) {
      return w.value.left + D * m.value + m.value / 2;
    }
    const Z = k(
      () => f.value.flatMap(
        (D, ee) => D.points.map((_, K) => {
          const R = Math.max(0, _.value) / v.value * C.value.h;
          return {
            x: P(K) - S.value / 2 + ee * B.value,
            y: w.value.top + C.value.h - R,
            w: Math.max(0, B.value - 2),
            h: R,
            color: D.color,
            index: K,
            name: D.name,
            value: _.value,
            label: _.label
          };
        })
      )
    ), F = k(
      () => h.value.map((D) => {
        const ee = D.points.map((_, K) => ({
          x: P(K),
          y: w.value.top + C.value.h - Math.max(0, _.value) / g.value * C.value.h,
          value: _.value
        }));
        return {
          ...D,
          pts: ee,
          d: ee.map((_, K) => `${K === 0 ? "M" : "L"}${_.x.toFixed(2)},${_.y.toFixed(2)}`).join(" ")
        };
      })
    ), te = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((D) => ({
        y: w.value.top + C.value.h * D,
        left: v.value * (1 - D),
        right: g.value * (1 - D)
      }))
    ), H = k(() => Math.max(1, Math.ceil(x.value / 10)));
    function Y(D) {
      return D === x.value - 1 || D % H.value === 0;
    }
    const X = (D) => l.format ? l.format(D) : ae(D);
    function ae(D) {
      return Math.abs(D) >= 1e6 ? `${(D / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(D) >= 1e3 ? `${(D / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(D * 100) / 100);
    }
    const N = k(() => {
      if (s.value === null)
        return null;
      const D = s.value;
      return {
        label: p.value[D],
        rows: [
          ...f.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[D]?.value ?? 0
          })),
          ...h.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[D]?.value ?? 0
          }))
        ]
      };
    });
    return (D, ee) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: ee[0] || (ee[0] = (_) => s.value = null)
        }, [
          (t(!0), n(z, null, L(te.value, (_) => (t(), n("line", {
            key: `g-${_.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Em))), 128)),
          (t(!0), n(z, null, L(te.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: w.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(ae(_.left)), 9, Fm))), 128)),
          M.value ? (t(!0), n(z, { key: 0 }, L(te.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - w.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(ae(_.right)), 9, Im))), 128)) : $("", !0),
          (t(!0), n(z, null, L(p.value, (_, K) => (t(), n("rect", {
            key: `hit-${K}`,
            x: w.value.left + K * m.value,
            y: w.value.top,
            width: m.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === K ? 0.4 : 0,
            onMouseenter: (R) => s.value = K
          }, null, 40, Nm))), 128)),
          (t(!0), n(z, null, L(Z.value, (_, K) => (t(), n("rect", {
            key: `b-${K}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Rm))), 128)),
          (t(!0), n(z, null, L(F.value, (_, K) => (t(), n("g", {
            key: `l-${K}`
          }, [
            o("path", {
              d: _.d,
              fill: "none",
              stroke: _.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Um),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Hm)) : $("", !0)
          ]))), 128)),
          (t(!0), n(z, null, L(p.value, (_, K) => de((t(), n("text", {
            key: `x-${K}`,
            x: P(K),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(_), 9, qm)), [
            [Oe, Y(K)]
          ])), 128))
        ], 40, Tm)),
        N.value ? (t(), n("div", Km, [
          o("p", Gm, c(N.value.label), 1),
          (t(!0), n(z, null, L(N.value.rows, (_, K) => (t(), n("div", {
            key: K,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: _.color })
            }, null, 4),
            o("span", Wm, c(_.name), 1),
            o("span", Zm, c(X(_.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), n("div", Jm, [
          (t(!0), n(z, null, L([...f.value, ...h.value], (_, K) => (t(), n("span", {
            key: K,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: _.color })
            }, null, 4),
            o("span", Ym, c(_.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Xm = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Qm = { class: "text-muted-foreground" }, ep = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, tp = ["width", "height"], ap = ["x", "y"], np = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], lp = ["x", "y"], op = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, sp = { class: "text-[11px] font-medium capitalize" }, rp = { class: "text-muted-foreground text-[11px] capitalize" }, ip = { class: "text-sm font-semibold tabular-nums" }, up = { class: "text-muted-foreground text-xs font-normal" }, f4 = /* @__PURE__ */ A({
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
    const l = e, a = G(null), r = G(560), s = G(null);
    let i = null;
    fe(() => {
      i = new ResizeObserver((S) => {
        r.value = Math.max(160, S[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ve(() => i?.disconnect());
    const u = k(() => l.series[0]?.points.map((S) => S.label) ?? []), d = k(() => l.series.length), f = k(() => u.value.length), h = k(() => Math.min(140, Math.max(60, r.value * 0.16))), p = k(() => Math.max(1, r.value - h.value - 8)), x = k(() => p.value / Math.max(1, f.value)), M = k(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
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
    const b = k(
      () => l.series.flatMap(
        (S, B) => S.points.map((P, Z) => {
          const F = C(P.value);
          return {
            row: B,
            col: Z,
            x: h.value + Z * x.value,
            y: 4 + B * M.value,
            w: Math.max(1, x.value - 1),
            h: Math.max(1, M.value - 4),
            colour: w(F),
            label: P.label,
            value: P.value,
            rowName: S.name,
            bucketLabel: l.buckets[F].label
          };
        })
      )
    ), v = k(() => x.value < 2), g = k(() => s.value ? b.value.find((S) => S.row === s.value.row && S.col === s.value.col) ?? null : null), m = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S);
    return (S, B) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", Xm, [
          (t(!0), n(z, null, L(e.buckets, (P, Z) => (t(), n("span", {
            key: Z,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: w(Z) })
            }, null, 4),
            o("span", Qm, c(P.label), 1)
          ]))), 128))
        ]),
        v.value ? (t(), n("p", ep, c(f.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: B[0] || (B[0] = (P) => s.value = null)
        }, [
          (t(!0), n(z, null, L(e.series, (P, Z) => (t(), n("text", {
            key: `r-${Z}`,
            x: h.value - 10,
            y: 4 + Z * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(P.name), 9, ap))), 128)),
          (t(!0), n(z, null, L(b.value, (P, Z) => (t(), n("rect", {
            key: Z,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (F) => s.value = { row: P.row, col: P.col }
          }, null, 40, np))), 128)),
          e.showColumnLabels && !v.value ? (t(!0), n(z, { key: 0 }, L(u.value, (P, Z) => (t(), n("text", {
            key: `c-${Z}`,
            x: h.value + Z * x.value + x.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(P), 9, lp))), 128)) : $("", !0)
        ], 40, tp)),
        g.value ? (t(), n("div", op, [
          o("p", sp, c(g.value.label), 1),
          o("p", rp, c(g.value.rowName), 1),
          o("p", ip, [
            I(c(m(g.value.value)) + " ", 1),
            o("span", up, "(" + c(g.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), dp = ["viewBox"], cp = { key: 0 }, fp = ["id"], mp = ["stop-color"], pp = ["stop-color"], vp = ["d", "fill"], gp = ["d", "stroke"], Nt = 100, Ue = 30, lt = /* @__PURE__ */ A({
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
      const d = l.data.map((x) => x.value);
      if (d.length < 2)
        return [];
      const f = Math.min(...d), p = Math.max(...d) - f || 1;
      return d.map((x, M) => ({
        x: M / (d.length - 1) * Nt,
        y: Ue - (x - f) / p * (Ue - 4) - 2
      }));
    });
    function s(d) {
      const f = d.length;
      if (f < 2)
        return "";
      const h = [], p = [];
      for (let w = 0; w < f - 1; w++)
        h[w] = d[w + 1].x - d[w].x, p[w] = h[w] === 0 ? 0 : (d[w + 1].y - d[w].y) / h[w];
      const x = [p[0]];
      for (let w = 1; w < f - 1; w++)
        if (p[w - 1] * p[w] <= 0)
          x[w] = 0;
        else {
          const C = 2 * h[w] + h[w - 1], b = h[w] + 2 * h[w - 1];
          x[w] = (C + b) / (C / p[w - 1] + b / p[w]);
        }
      x[f - 1] = p[f - 2];
      let M = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let w = 0; w < f - 1; w++) {
        const C = h[w] / 3;
        M += ` C${(d[w].x + C).toFixed(2)},${(d[w].y + x[w] * C).toFixed(2)} ${(d[w + 1].x - C).toFixed(2)},${(d[w + 1].y - x[w + 1] * C).toFixed(2)} ${d[w + 1].x.toFixed(2)},${d[w + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = k(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((f, h) => `${h === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), u = k(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Ue} L${d[0].x.toFixed(2)},${Ue} Z`;
    });
    return (d, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${Nt} ${Ue}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", cp, [
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
          }, null, 8, mp),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, pp)
        ], 8, fp)
      ])) : $("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${y(a)})`
      }, null, 8, vp)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, gp)
    ], 12, dp)) : $("", !0);
  }
}), hp = { class: "flex items-center gap-1 text-xs" }, bp = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, xp = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ca = /* @__PURE__ */ A({
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
    return (u, d) => (t(), n("span", hp, [
      o("span", {
        class: O(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", bp, c(s.value), 1),
        I(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", xp, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), yp = ["aria-label"], Fe = /* @__PURE__ */ A({
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
      (t(!0), n(z, null, L(s.value, (f) => (t(), n("span", {
        key: f,
        "aria-hidden": "true",
        class: O(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, yp));
  }
}), kp = ["data-collapsed"], $p = { class: "flex flex-wrap items-start justify-between gap-2" }, wp = { class: "flex min-w-0 items-start gap-2" }, Cp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sp = ["d"], Mp = { class: "min-w-0" }, Bp = { class: "text-sm font-medium" }, _p = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Pp = { class: "flex shrink-0 items-center gap-1.5" }, zp = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Ap = ["aria-pressed", "onClick"], Op = ["aria-expanded", "aria-label", "title"], jp = ["aria-label"], Lp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vp = ["d"], Dp = /* @__PURE__ */ A({
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
    const l = e, a = xa(), r = G(l.defaultCollapsed), s = k(() => !!l.icon && !a.icon), i = k(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", {
      class: O(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", $p, [
        o("div", wp, [
          q(u.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", Cp, [
              o("path", {
                d: y(ie)(e.icon)
              }, null, 8, Sp)
            ])) : $("", !0)
          ]),
          o("div", Mp, [
            o("p", Bp, c(e.label), 1),
            e.description ? (t(), n("p", _p, c(e.description), 1)) : $("", !0),
            q(u.$slots, "trend")
          ])
        ]),
        o("div", Pp, [
          q(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", zp, [
            (t(!0), n(z, null, L(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: O([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (h) => u.$emit("update:period", f.value)
            }, c(f.label), 11, Ap))), 128))
          ])) : $("", !0),
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
          ], 8, Op)) : $("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (f) => u.$emit("hide"))
          }, [
            (t(), n("svg", Lp, [
              o("path", {
                d: y(ie)("eye-off")
              }, null, 8, Vp)
            ]))
          ], 8, jp)) : $("", !0)
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
        }, " Could not load ", 4)) : q(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, kp));
  }
}), Tp = ["aria-pressed", "aria-label", "title"], Ep = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fp = ["d"], Ip = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Np = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Rp = ["href"], Up = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hp = ["d"], qp = ["aria-label", "onClick"], Kp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gp = ["d"], Wp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Zp = ["d"], Jp = {
  key: 0,
  class: "flex flex-col gap-1"
}, Yp = ["onClick"], Xp = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qp = ["d"], ev = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, tv = /* @__PURE__ */ A({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(!1), i = G(!1), u = k(
      () => a.catalog.filter((h) => !a.items.some((p) => p.id === h.id))
    );
    function d(h) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== h)
      );
    }
    function f(h) {
      r("update:items", [...a.items, h]), i.value = !1;
    }
    return (h, p) => (t(), n(z, null, [
      T(Dp, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (x) => r("hide"))
      }, {
        actions: j(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (x) => s.value = !s.value)
          }, [
            (t(), n("svg", Ep, [
              o("path", {
                d: y(ie)(s.value ? "check" : "pencil")
              }, null, 8, Fp)
            ]))
          ], 8, Tp)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), n("div", Ip, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            T(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (x) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                I("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Np, [
            (t(!0), n(z, null, L(e.items, (x) => (t(), n("div", {
              key: x.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: x.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Up, [
                  o("path", {
                    d: y(ie)(x.icon)
                  }, null, 8, Hp)
                ])),
                I(" " + c(x.label), 1)
              ], 8, Rp),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${x.label}`,
                onClick: (M) => d(x.id)
              }, [
                (t(), n("svg", Kp, [
                  o("path", {
                    d: y(ie)("x")
                  }, null, 8, Gp)
                ]))
              ], 8, qp)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (x) => i.value = !0)
            }, [
              (t(), n("svg", Wp, [
                o("path", {
                  d: y(ie)("plus")
                }, null, 8, Zp)
              ])),
              p[8] || (p[8] = I(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      T(Ge, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (x) => i.value = !1)
      }, {
        footer: j(() => [
          T(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (x) => i.value = !1)
          }, {
            default: j(() => [...p[9] || (p[9] = [
              I("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          u.value.length ? (t(), n("ul", Jp, [
            (t(!0), n(z, null, L(u.value, (x) => (t(), n("li", {
              key: x.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => f(x)
              }, [
                (t(), n("svg", Xp, [
                  o("path", {
                    d: y(ie)(x.icon)
                  }, null, 8, Qp)
                ])),
                I(" " + c(x.label), 1)
              ], 8, Yp)
            ]))), 128))
          ])) : (t(), n("p", ev, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), av = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, nv = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, lv = { class: "relative w-full max-w-xl" }, ov = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sv = ["d"], rv = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, iv = ["data-slot"], uv = { class: "px-5 py-4" }, dv = { class: "mb-3 text-sm font-semibold" }, cv = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, fv = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mv = ["d"], pv = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, m4 = /* @__PURE__ */ A({
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
    const l = e, a = G(""), r = k(() => {
      const d = l.linkComponent;
      return typeof d == "string" ? d : Ut(d);
    }), s = He({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = k(() => {
      const d = a.value.trim().toLowerCase();
      return l.sections.map((f) => ({
        ...f,
        links: d ? f.links.filter((h) => h.label.toLowerCase().includes(d)) : f.links
      })).filter((f) => f.links.length > 0);
    });
    return (d, f) => (t(), n("div", {
      class: O(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      o("header", null, [
        o("h1", av, c(e.title), 1),
        e.description ? (t(), n("p", nv, c(e.description), 1)) : $("", !0)
      ]),
      o("div", lv, [
        (t(), n("svg", ov, [
          o("path", {
            d: y(ie)("search")
          }, null, 8, sv)
        ])),
        T(pe, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (h) => a.value = h),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), n("div", rv, [
        (t(!0), n(z, null, L(u.value, (h) => (t(), n("section", {
          key: h.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${h.key}`
        }, [
          o("div", uv, [
            o("h2", dv, c(h.title), 1),
            o("div", cv, [
              (t(!0), n(z, null, L(h.links, (p) => (t(), V(he(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: O(y(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), n("svg", fv, [
                    o("path", {
                      d: y(ie)(p.icon)
                    }, null, 8, mv)
                  ])),
                  I(" " + c(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, iv))), 128))
      ])) : (t(), n("p", pv, ' Nothing matches "' + c(a.value) + '". ', 1))
    ], 2));
  }
}), vv = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, gv = { class: "flex flex-1 flex-col gap-1 p-4" }, hv = { class: "text-muted-foreground relative text-xs font-medium" }, bv = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, xv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, yv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, kv = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, p4 = /* @__PURE__ */ A({
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
    return (a, r) => (t(), n("div", vv, [
      o("div", gv, [
        o("p", hv, c(e.label), 1),
        e.loading ? (t(), V(Fe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", bv, " Could not load ")) : (t(), n("span", xv, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), V(ca, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", yv, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", kv, [
        T(lt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), $v = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, wv = { class: "flex flex-col gap-1 p-4" }, Cv = { class: "flex items-start justify-between gap-2" }, Sv = { class: "text-sm font-medium" }, Mv = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Bv = { class: "mt-1 flex flex-wrap items-center gap-2" }, _v = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Pv = {
  key: 0,
  class: "-mb-px"
}, tt = /* @__PURE__ */ A({
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
    return (i, u) => (t(), n("div", $v, [
      o("div", wv, [
        o("div", Cv, [
          o("p", Sv, c(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Mv, c(e.caption), 1)) : $("", !0),
        o("div", Bv, [
          e.loading ? (t(), V(Fe, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", _v, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: O(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Pv, [
        T(lt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), zv = { class: "relative flex flex-col gap-2" }, Av = ["aria-label"], Ov = ["onMouseenter"], jv = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Lv = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Vv = { class: "truncate" }, Dv = { class: "text-sm font-semibold tabular-nums" }, v4 = /* @__PURE__ */ A({
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
    ], r = k(() => l.segments.reduce((h, p) => h + Math.max(0, p.value), 0)), s = k(() => Math.max(l.total ?? r.value, r.value, 1)), i = k(
      () => l.segments.map((h, p) => {
        const x = Math.max(0, h.value) / s.value;
        return {
          ...h,
          color: h.color ?? a[p % a.length],
          share: x,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: h.value > 0 ? `max(2px, ${(x * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h), d = G(null), f = (h) => `${(h * 100).toFixed(h > 0 && h < 0.01 ? 1 : 0)}%`;
    return (h, p) => (t(), n("div", zv, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((x) => `${x.label} ${u(x.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, L(i.value, (x, M) => (t(), n("span", {
          key: M,
          class: O(["h-full transition-all", [
            M === 0 ? "rounded-l-full" : "",
            M === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: x.width,
            background: x.color,
            opacity: d.value === null || d.value === M ? 1 : 0.4
          }),
          onMouseenter: (w) => d.value = M,
          onMouseleave: p[0] || (p[0] = (w) => d.value = null)
        }, null, 46, Ov))), 128))
      ], 12, Av),
      e.showLegend ? (t(), n("div", jv, [
        (t(!0), n(z, null, L(i.value, (x, M) => (t(), n("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", Lv, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: x.color })
            }, null, 4),
            o("span", Vv, c(x.label), 1)
          ]),
          o("span", Dv, c(u(x.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      d.value !== null ? (t(), V(Ye, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: f(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Tv = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Ev = ["data-heading"], Fv = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Iv = { class: "text-muted-foreground truncate" }, Nv = ["aria-label"], g4 = /* @__PURE__ */ A({
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
        const u = i.bar.segments.reduce((f, h) => f + Math.max(0, h.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
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
    return (i, u) => (t(), n("div", Tv, [
      (t(!0), n(z, null, L(s.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: O(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, c(d.label), 3)) : (t(), n("div", Fv, [
          o("span", Iv, c(d.label), 1),
          o("span", {
            class: O(["shrink-0 font-medium tabular-nums", d.tone ? a[d.tone] : "text-foreground"])
          }, c(d.value), 3)
        ])),
        d.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), n(z, null, L(d.segments, (f, h) => (t(), n("span", {
            key: h,
            class: O(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: ne({ width: f.width })
          }, null, 6))), 128))
        ], 8, Nv)) : $("", !0)
      ], 8, Ev))), 128))
    ]));
  }
}), Rv = {
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
}, Uv = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Hv(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function qv(e, l) {
  return l || (e ? Rv[Hv(e)] ?? "neutral" : "neutral");
}
function Kv(e, l) {
  return Uv[qv(e, l)];
}
const ge = /* @__PURE__ */ A({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = k(() => Kv(l.status, l.tone));
    return (r, s) => (t(), V(qe, {
      variant: a.value,
      class: O(l.class)
    }, {
      default: j(() => [
        q(r.$slots, "default", {}, () => [
          I(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Gv = ["data-layout"], Wv = ["src", "alt"], Zv = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Jv = ["src"], Yv = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Xv = ["onMouseenter"], Qv = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, eg = { class: "min-w-0" }, tg = { class: "truncate text-sm font-medium" }, ag = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, ng = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, lg = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, og = { class: "min-w-0" }, sg = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, rg = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, ig = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ug = ["d"], dg = ["aria-label"], cg = /* @__PURE__ */ A({
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
    }, r = e, s = l, i = G(0);
    function u(b) {
      if (typeof b != "string")
        return null;
      const v = b.trim();
      return v === "" ? null : /^(https?:)?\/\//i.test(v) ? v : null;
    }
    const d = k(() => {
      const b = [r.item.image, ...r.item.images ?? []].map(u).filter((v) => v !== null);
      return [...new Set(b)];
    }), f = k(() => d.value[i.value] ?? d.value[0] ?? null), h = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((b) => b[0]?.toUpperCase() ?? "").join("")
    ), p = k(() => {
      const b = r.item.progress;
      if (!b)
        return null;
      const v = Math.max(b.total ?? 100, b.value, 1);
      return `${Math.min(100, Math.max(0, b.value / v * 100)).toFixed(2)}%`;
    }), x = k(() => d.value.length > 1 ? d.value[1] : null), M = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(b) {
      b.stopPropagation(), s("cart", r.item.key);
    }
    return (b, v) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: O(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: v[0] || (v[0] = (g) => s("select", e.item.key)),
      onKeydown: v[1] || (v[1] = ya(ce((g) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: v[2] || (v[2] = (g) => i.value = 0)
    }, [
      o("div", {
        class: O([
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
        }, null, 8, Wv)) : (t(), n("span", Zv, c(h.value), 1)),
        e.layout === "grid" && x.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: x.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Jv)) : $("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", Yv, [
          (t(!0), n(z, null, L(d.value, (g, m) => (t(), n("span", {
            key: m,
            class: O(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (S) => i.value = m
          }, null, 42, Xv))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: O(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Qv, [
          o("div", eg, [
            o("p", tg, c(e.item.label), 1),
            e.item.caption ? (t(), n("p", ag, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), n("p", ng, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), V(ge, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", lg, [
          o("div", og, [
            e.item.price ? (t(), n("p", sg, c(e.item.price), 1)) : $("", !0),
            w.value ? (t(), n("p", rg, c(w.value), 1)) : $("", !0)
          ]),
          M.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), n("svg", ig, [
              o("path", {
                d: y(ie)("cart")
              }, null, 8, ug)
            ]))
          ])) : $("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: O(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, dg)) : $("", !0)
      ], 2)
    ], 42, Gv));
  }
});
function fg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function mg(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function pg(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const vg = ["data-featured", "data-recommended"], gg = { class: "flex flex-col gap-1" }, hg = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, bg = { key: 0 }, xg = { key: 1 }, yg = { key: 2 }, kg = { key: 3 }, $g = { class: "text-sm font-semibold" }, wg = { class: "flex items-baseline gap-1" }, Cg = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Sg = { class: "text-muted-foreground text-sm" }, Mg = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Bg = { class: "text-muted-foreground mt-1 text-xs" }, _g = { class: "flex flex-1 flex-col gap-2 text-sm" }, Pg = { class: "flex min-w-0 items-start gap-2" }, zg = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ag = ["d"], Og = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, jg = ["d"], Lg = { class: "capitalize" }, Vg = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Dg = { class: "text-foreground font-medium" }, Tg = { class: "mt-auto flex gap-2 pt-2" }, Eg = /* @__PURE__ */ A({
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
      const f = a.plan.perks ?? {};
      return Object.entries(f).map(([h, p]) => ({
        key: h,
        label: h.replace(/_/g, " "),
        granted: pg(p.value),
        display: mg(p.value)
      }));
    }), d = k(() => a.plan.extraPerks ?? []);
    return (f, h) => (t(), n("article", {
      class: O(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", gg, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", hg, [
          e.plan.recommended ? (t(), n("span", bg, "Recommended")) : e.plan.featured ? (t(), n("span", xg, "Featured")) : $("", !0),
          e.plan.trial ? (t(), n("span", yg, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), n("span", kg, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", $g, c(e.plan.name), 1),
        o("p", wg, [
          o("span", Cg, c(s.value), 1),
          o("span", Sg, c(y(fg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", Mg, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", Bg, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", _g, [
        (t(!0), n(z, null, L(u.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", Pg, [
            o("span", {
              class: O(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", zg, [
                o("path", {
                  d: y(ie)("check")
                }, null, 8, Ag)
              ])) : (t(), n("svg", Og, [
                o("path", {
                  d: y(ie)("x")
                }, null, 8, jg)
              ]))
            ], 2),
            o("span", Lg, c(p.label), 1)
          ]),
          p.display ? (t(), n("span", Vg, c(p.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), n(z, null, L(d.value, (p, x) => (t(), n("li", {
          key: `extra-${x}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", Dg, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", Tg, [
        T(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: h[0] || (h[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...h[2] || (h[2] = [
            I(" Edit ", -1)
          ])]),
          _: 1
        }),
        T(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: h[1] || (h[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...h[3] || (h[3] = [
            I(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, vg));
  }
}), Fg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Ig = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Ng = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Rg = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Ug = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, h4 = /* @__PURE__ */ A({
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
      o("header", Fg, [
        o("div", null, [
          e.title ? (t(), n("h1", Ig, c(e.title), 1)) : $("", !0),
          e.description ? (t(), n("p", Ng, c(e.description), 1)) : $("", !0)
        ]),
        T(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: j(() => [...s[3] || (s[3] = [
            I("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", Rg, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", Ug, [
        (t(!0), n(z, null, L(e.plans, (i) => (t(), V(Eg, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => a("edit", u)),
          onDelete: s[2] || (s[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Hg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, qg = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Kg = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Gg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Wg = { class: "space-y-1.5" }, Zg = { class: "space-y-1.5" }, Jg = { class: "space-y-1.5" }, Yg = { class: "space-y-1.5" }, Xg = { class: "space-y-1.5" }, Qg = { class: "flex items-center gap-3 text-sm" }, eh = { class: "flex items-center gap-3 text-sm" }, th = { class: "flex items-center gap-3 text-sm" }, ah = {
  key: 0,
  class: "space-y-1.5"
}, nh = { class: "flex items-center gap-3 text-sm" }, lh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, oh = { class: "space-y-1.5" }, sh = ["value"], rh = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, ih = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, uh = ["id", "value", "onInput"], dh = { class: "space-y-2" }, ch = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, fh = ["d"], mh = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ut = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", b4 = /* @__PURE__ */ A({
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
    }), r = e, s = l, i = Ke(a());
    function u(v, g) {
      const m = i.perks?.[v]?.value;
      return m ?? g;
    }
    function d(v, g, m) {
      const S = i.perks?.[v];
      i.perks = {
        ...i.perks ?? {},
        [v]: {
          value: g,
          overview: m ?? S?.overview ?? ""
        }
      };
    }
    function f(v, g) {
      const m = i.perks?.[v];
      i.perks = {
        ...i.perks ?? {},
        [v]: {
          value: m?.value ?? (v === "modules" ? [] : 0),
          overview: g
        }
      };
    }
    function h(v) {
      const g = v ? { ...a(), ...v } : a();
      i.id = g.id, i.name = g.name, i.shortDescription = g.shortDescription ?? "", i.description = g.description ?? "", i.days = g.days, i.price = g.price, i.featured = g.featured ?? !1, i.recommended = g.recommended ?? !1, i.trial = g.trial ?? !1, i.trialDays = g.trialDays ?? 0, i.active = g.active ?? !0, i.perks = { ...g.perks ?? {} }, i.extraPerks = [...g.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    h(r.plan), ue(
      () => r.plan,
      (v) => h(v),
      { deep: !0 }
    );
    const p = k({
      get: () => {
        const v = u("modules", []);
        return Array.isArray(v) ? v.map(String) : [];
      },
      set: (v) => {
        d("modules", M(v.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), x = k(
      () => r.modules.map((v) => ({ value: v.key, label: v.label }))
    );
    function M(v) {
      const g = Object.fromEntries(r.modules.map((B) => [B.key, B])), m = new Set(v);
      for (const B of r.modules)
        if (!m.has(B.key))
          for (const P of B.children ?? [])
            m.delete(P);
      let S = !0;
      for (; S; ) {
        S = !1;
        for (const B of [...m])
          for (const P of g[B]?.requires ?? [])
            m.has(P) || (m.add(P), S = !0);
      }
      return [...m];
    }
    function w() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C(v) {
      i.extraPerks = (i.extraPerks ?? []).filter((g, m) => m !== v);
    }
    function b() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((v) => v.key.trim() !== "")
      });
    }
    return (v, g) => (t(), n("form", {
      class: O(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-editor",
      onSubmit: ce(b, ["prevent"])
    }, [
      o("header", Hg, [
        o("div", null, [
          o("h1", qg, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          g[13] || (g[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        T(se, {
          type: "button",
          variant: "outline",
          onClick: g[0] || (g[0] = (m) => s("cancel"))
        }, {
          default: j(() => [...g[14] || (g[14] = [
            I("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", Kg, [
        o("section", Gg, [
          g[26] || (g[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", Wg, [
            T(be, { for: "plan-name" }, {
              default: j(() => [...g[15] || (g[15] = [
                I("Plan name", -1)
              ])]),
              _: 1
            }),
            T(pe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": g[1] || (g[1] = (m) => i.name = m),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", Zg, [
            T(be, { for: "plan-short" }, {
              default: j(() => [...g[16] || (g[16] = [
                I("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            T(pe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": g[2] || (g[2] = (m) => i.shortDescription = m),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", Jg, [
            T(be, { for: "plan-description" }, {
              default: j(() => [...g[17] || (g[17] = [
                I("Plan description", -1)
              ])]),
              _: 1
            }),
            de(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": g[3] || (g[3] = (m) => i.description = m),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: O(ut)
            }, null, 512), [
              [xe, i.description]
            ])
          ]),
          o("div", Yg, [
            T(be, { for: "plan-days" }, {
              default: j(() => [...g[18] || (g[18] = [
                I("Duration", -1)
              ])]),
              _: 1
            }),
            de(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": g[4] || (g[4] = (m) => i.days = m),
              class: O(mh)
            }, [...g[19] || (g[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Ve,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", Xg, [
            T(be, { for: "plan-price" }, {
              default: j(() => [...g[20] || (g[20] = [
                I("Price", -1)
              ])]),
              _: 1
            }),
            T(pe, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": g[5] || (g[5] = (m) => i.price = Number(m))
            }, null, 8, ["model-value"])
          ]),
          o("label", Qg, [
            T(y(De), {
              checked: !!i.featured,
              "onUpdate:checked": g[6] || (g[6] = (m) => i.featured = m)
            }, null, 8, ["checked"]),
            g[21] || (g[21] = I(" Featured ", -1))
          ]),
          o("label", eh, [
            T(y(De), {
              checked: !!i.recommended,
              "onUpdate:checked": g[7] || (g[7] = (m) => i.recommended = m)
            }, null, 8, ["checked"]),
            g[22] || (g[22] = I(" Recommended ", -1))
          ]),
          o("label", th, [
            T(y(De), {
              checked: !!i.trial,
              "onUpdate:checked": g[8] || (g[8] = (m) => i.trial = m)
            }, null, 8, ["checked"]),
            g[23] || (g[23] = I(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", ah, [
            T(be, { for: "plan-trial-days" }, {
              default: j(() => [...g[24] || (g[24] = [
                I("Trial days", -1)
              ])]),
              _: 1
            }),
            T(pe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": g[9] || (g[9] = (m) => i.trialDays = Number(m))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", nh, [
            T(y(De), {
              checked: i.active !== !1,
              "onUpdate:checked": g[10] || (g[10] = (m) => i.active = m)
            }, null, 8, ["checked"]),
            g[25] || (g[25] = I(" Active ", -1))
          ]),
          T(se, {
            type: "submit",
            disabled: e.processing
          }, {
            default: j(() => [
              I(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", lh, [
          g[33] || (g[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", oh, [
            T(be, null, {
              default: j(() => [...g[27] || (g[27] = [
                I("Modules access", -1)
              ])]),
              _: 1
            }),
            T(St, {
              modelValue: p.value,
              "onUpdate:modelValue": g[11] || (g[11] = (m) => p.value = m),
              options: x.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            T(be, { for: "plan-modules-overview" }, {
              default: j(() => [...g[28] || (g[28] = [
                I("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: O(ut),
              onInput: g[12] || (g[12] = (m) => f(
                "modules",
                m.target.value
              ))
            }, null, 40, sh)
          ]),
          (t(!0), n(z, null, L(e.limits, (m) => (t(), n("div", {
            key: m.key,
            class: "space-y-1.5"
          }, [
            m.kind === "toggle" ? (t(), n("label", rh, [
              T(y(De), {
                checked: !!u(m.key, !1),
                "onUpdate:checked": (S) => d(
                  m.key,
                  S,
                  i.perks?.[m.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              I(" " + c(m.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              T(be, {
                for: `plan-limit-${m.key}`
              }, {
                default: j(() => [
                  I(c(m.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              m.hint ? (t(), n("p", ih, c(m.hint), 1)) : $("", !0),
              T(pe, {
                id: `plan-limit-${m.key}`,
                "model-value": Number(u(m.key, 0)),
                type: "number",
                step: m.step ?? 1,
                required: "",
                "onUpdate:modelValue": (S) => d(
                  m.key,
                  Number(S),
                  i.perks?.[m.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              g[29] || (g[29] = o("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            T(be, {
              for: `plan-overview-${m.key}`
            }, {
              default: j(() => [...g[30] || (g[30] = [
                I("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${m.key}`,
              value: i.perks?.[m.key]?.overview ?? "",
              class: O(ut),
              onInput: (S) => f(
                m.key,
                S.target.value
              )
            }, null, 40, uh)
          ]))), 128)),
          o("div", dh, [
            g[32] || (g[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, L(i.extraPerks ?? [], (m, S) => (t(), n("div", {
              key: S,
              class: "flex items-center gap-2"
            }, [
              T(pe, {
                modelValue: m.key,
                "onUpdate:modelValue": (B) => m.key = B,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              T(pe, {
                modelValue: m.value,
                "onUpdate:modelValue": (B) => m.value = B,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              T(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (B) => C(S)
              }, {
                default: j(() => [
                  (t(), n("svg", ch, [
                    o("path", {
                      d: y(ie)("x")
                    }, null, 8, fh)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            T(se, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: w
            }, {
              default: j(() => [...g[31] || (g[31] = [
                I(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), ph = { class: "flex flex-col gap-4" }, vh = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, gh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, hh = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, bh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, xh = ["d"], yh = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, kh = ["aria-pressed"], $h = ["aria-pressed"], wh = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ch = ["aria-label"], Sh = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Mh = ["aria-pressed", "onClick"], Bh = ["aria-label"], _h = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Ph = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, zh = ["data-slot"], Ah = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Oh = { class: "text-muted-foreground text-xs tabular-nums" }, jh = { class: "flex items-center gap-2" }, Lh = ["disabled"], Vh = ["disabled"], Pt = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(""), i = We(e, "modelValue"), u = Ke({}), d = Ke({});
    ue(s, () => x());
    function f(F) {
      const te = F.trim();
      if (te === "")
        return null;
      const H = Number(te);
      return Number.isFinite(H) ? H : null;
    }
    function h() {
      const F = {};
      for (const [te, H] of Object.entries(d))
        F[te] = { min: f(H.min), max: f(H.max) };
      return F;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: h() };
    }
    function x() {
      r("filter", p());
    }
    function M(F, te) {
      u[F] = u[F] === te ? null : te, x();
    }
    function w(F) {
      return d[F] ?? { min: "", max: "" };
    }
    function C(F, te, H) {
      const Y = d[F] ?? { min: "", max: "" };
      d[F] = { ...Y, [te]: H }, x();
    }
    function b(F) {
      F.key === "Enter" && (F.preventDefault(), r("scan", s.value.trim()));
    }
    const v = k(() => a.facets.filter((F) => (F.kind ?? "chips") === "chips")), g = k(() => a.facets.filter((F) => F.kind === "range")), m = k(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), S = G(1);
    ue(
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
      const te = (S.value - 1) * F;
      return a.items.slice(te, te + F);
    });
    function Z(F) {
      S.value = Math.min(B.value, Math.max(1, F));
    }
    return (F, te) => (t(), n("div", ph, [
      m.value ? (t(), n("div", vh, [
        o("div", gh, [
          e.searchable ? (t(), n("div", hh, [
            (t(), n("svg", bh, [
              o("path", {
                d: y(ie)("search")
              }, null, 8, xh)
            ])),
            T(pe, {
              modelValue: s.value,
              "onUpdate:modelValue": te[0] || (te[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: b
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : $("", !0),
          q(F.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", yh, [
            o("button", {
              type: "button",
              class: O([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, kh),
            o("button", {
              type: "button",
              class: O([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, $h)
          ])) : $("", !0)
        ]),
        v.value.length || g.value.length ? (t(), n("div", wh, [
          (t(!0), n(z, null, L(v.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", Sh, c(H.label), 1)) : $("", !0),
            (t(!0), n(z, null, L(H.options ?? [], (Y) => (t(), n("button", {
              key: Y.value,
              type: "button",
              class: O([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === Y.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === Y.value ? "true" : "false",
              onClick: (X) => M(H.key, Y.value)
            }, c(Y.label), 11, Mh))), 128))
          ], 8, Ch))), 128)),
          (t(!0), n(z, null, L(g.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", _h, c(H.label ?? H.key), 1),
            T(pe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": w(H.key).min,
              "onUpdate:modelValue": (Y) => C(H.key, "min", String(Y))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            T(pe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": w(H.key).max,
              "onUpdate:modelValue": (Y) => C(H.key, "max", String(Y))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Bh))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), n("p", Ph, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: O(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, L(P.value, (H) => (t(), V(cg, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (Y) => r("select", Y)),
          onCart: te[4] || (te[4] = (Y) => r("cart", Y))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, zh)),
      e.pageSize && B.value > 1 ? (t(), n("div", Ah, [
        o("p", Oh, " Page " + c(S.value) + " of " + c(B.value), 1),
        o("div", jh, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value <= 1,
            onClick: te[5] || (te[5] = (H) => Z(S.value - 1))
          }, " Previous ", 8, Lh),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value >= B.value,
            onClick: te[6] || (te[6] = (H) => Z(S.value + 1))
          }, " Next ", 8, Vh)
        ])
      ])) : $("", !0)
    ]));
  }
}), Dh = ["aria-label"], Th = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Eh = { class: "min-w-0" }, Fh = { class: "text-base font-semibold" }, Ih = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Nh = { class: "flex shrink-0 items-center gap-2" }, Rh = { class: "min-h-0 flex-1 overflow-y-auto" }, Uh = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, zt = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(null);
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
      const h = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (h.length === 0)
        return;
      const p = h[0], x = h[h.length - 1];
      f.shiftKey && document.activeElement === p ? (f.preventDefault(), x.focus()) : !f.shiftKey && document.activeElement === x && (f.preventDefault(), p.focus());
    }
    return ue(
      () => a.open,
      async (f) => {
        if (f) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Se(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), ve(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (f, h) => (t(), V(Ie, { to: "body" }, [
      T(Ae, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: h[0] || (h[0] = (p) => r("close"))
          })) : $("", !0)
        ]),
        _: 1
      }),
      T(Ae, {
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
            o("header", Th, [
              o("div", Eh, [
                o("h2", Fh, c(e.title), 1),
                e.description ? (t(), n("p", Ih, c(e.description), 1)) : $("", !0)
              ]),
              o("div", Nh, [
                q(f.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: h[1] || (h[1] = (p) => r("close"))
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
            o("div", Rh, [
              q(f.$slots, "default")
            ]),
            f.$slots.footer ? (t(), n("footer", Uh, [
              q(f.$slots, "footer")
            ])) : $("", !0)
          ], 10, Dh)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Be() {
  return { query: "", selected: {}, ranges: {} };
}
function Hh(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function qh(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function At(e, l) {
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
    if (!qh(Hh(e, r), s))
      return !1;
  return !0;
}
function Kh(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function at(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Gh = { class: "flex flex-col gap-6 p-4" }, Wh = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Zh = { class: "text-sm font-semibold" }, Jh = { class: "flex flex-wrap items-center gap-1.5" }, Yh = ["aria-pressed", "onClick"], Xh = { class: "text-sm font-semibold" }, Qh = { class: "flex flex-wrap items-center gap-1.5" }, eb = { key: 0 }, fa = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(""), i = Ke({}), u = Ke({}), d = k(
      () => a.facets.filter((B) => (B.kind ?? "chips") === "chips")
    ), f = k(() => a.facets.filter((B) => B.kind === "range"));
    function h(B) {
      return B == null ? "" : String(B);
    }
    function p() {
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
    ue(
      () => a.open,
      (B) => {
        B && p();
      }
    );
    function x(B) {
      const P = B.trim();
      if (P === "")
        return null;
      const Z = Number(P);
      return Number.isFinite(Z) ? Z : null;
    }
    function M() {
      const B = {};
      for (const [P, Z] of Object.entries(u))
        B[P] = { min: x(Z.min), max: x(Z.max) };
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
    function b(B, P) {
      i[B] = i[B] === P ? null : P;
    }
    function v(B) {
      return u[B] ?? { min: "", max: "" };
    }
    function g(B, P, Z) {
      const F = u[B] ?? { min: "", max: "" };
      u[B] = { ...F, [P]: Z };
    }
    function m() {
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
        a.hideSearch ? { ...Be(), query: a.applied.query } : Be()
      );
    }
    return (B, P) => (t(), V(zt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (Z) => r("close"))
    }, {
      footer: j(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: S
        }, " Reset all "),
        T(se, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (Z) => r("close"))
        }, {
          default: j(() => [...P[5] || (P[5] = [
            I("Cancel", -1)
          ])]),
          _: 1
        }),
        T(se, {
          size: "sm",
          onClick: m
        }, {
          default: j(() => [
            P[6] || (P[6] = I(" Apply", -1)),
            C.value ? (t(), n("span", eb, " (" + c(C.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        o("div", Gh, [
          e.hideSearch ? $("", !0) : (t(), n("label", Wh, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            T(pe, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (Z) => s.value = Z),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, L(d.value, (Z) => (t(), n("section", {
            key: Z.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Zh, c(Z.label ?? Z.key), 1),
            o("div", Jh, [
              (t(!0), n(z, null, L(Z.options ?? [], (F) => (t(), n("button", {
                key: F.value,
                type: "button",
                class: O([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[Z.key] === F.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[Z.key] === F.value ? "true" : "false",
                onClick: (te) => b(Z.key, F.value)
              }, c(F.label), 11, Yh))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, L(f.value, (Z) => (t(), n("section", {
            key: Z.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Xh, c(Z.label ?? Z.key), 1),
            o("div", Qh, [
              T(pe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${Z.label ?? Z.key} from`,
                "model-value": v(Z.key).min,
                "onUpdate:modelValue": (F) => g(Z.key, "min", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              T(pe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${Z.label ?? Z.key} to`,
                "model-value": v(Z.key).max,
                "onUpdate:modelValue": (F) => g(Z.key, "max", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), tb = ["aria-disabled"], ab = ["disabled"], nb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, lb = ["d"], ob = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, sb = ["disabled"], rb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ib = ["d"], ub = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = We(e, "modelValue"), r = l, s = k(() => a.value <= e.min), i = k(() => e.max !== null && a.value >= e.max);
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
        onClick: f[0] || (f[0] = (h) => u(-1))
      }, [
        (t(), n("svg", nb, [
          o("path", {
            d: y(ie)("minus")
          }, null, 8, lb)
        ]))
      ], 8, ab),
      o("span", ob, c(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (h) => u(1))
      }, [
        (t(), n("svg", rb, [
          o("path", {
            d: y(ie)("plus")
          }, null, 8, ib)
        ]))
      ], 8, sb)
    ], 8, tb));
  }
}), db = { class: "divide-border flex flex-col divide-y" }, cb = { class: "min-w-0" }, fb = { class: "truncate text-sm font-medium" }, mb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, pb = { class: "flex shrink-0 items-center gap-2 text-sm" }, vb = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, gb = {
  key: 2,
  class: "font-medium tabular-nums"
}, hb = ["aria-label", "onClick"], bb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, xb = ["d"], yb = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("div", db, [
      (t(!0), n(z, null, L(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", cb, [
          o("p", fb, c(u.label), 1),
          u.detail ? (t(), n("p", mb, c(u.detail), 1)) : $("", !0)
        ]),
        o("div", pb, [
          e.editable ? (t(), V(ub, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", vb, " ×" + c(u.qty), 1)) : $("", !0),
          u.amount ? (t(), n("span", gb, c(u.amount), 1)) : $("", !0),
          u.status ? (t(), V(ge, {
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
            (t(), n("svg", bb, [
              o("path", {
                d: y(ie)("trash")
              }, null, 8, xb)
            ]))
          ], 8, hb)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), kb = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, $b = { class: "border-b px-4 py-3" }, wb = { class: "text-sm font-medium" }, Cb = { class: "flex-1 px-4 py-3" }, Sb = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Mb = { class: "text-foreground block font-medium" }, Bb = { class: "mt-1 block" }, _b = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Pb = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, zb = { class: "tabular-nums" }, Ab = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Ob = { class: "text-muted-foreground" }, jb = {
  key: 0,
  class: "tabular-nums"
}, Lb = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Vb = { class: "text-muted-foreground" }, Db = { class: "tabular-nums" }, Tb = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Eb = { class: "tabular-nums" }, Fb = {
  key: 4,
  class: "pt-1"
}, Ib = /* @__PURE__ */ A({
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
    return (r, s) => (t(), n("aside", kb, [
      o("header", $b, [
        o("h2", wb, c(e.title), 1)
      ]),
      o("div", Cb, [
        e.items.length === 0 ? (t(), n("p", Sb, [
          o("span", Mb, c(e.emptyTitle), 1),
          o("span", Bb, c(e.emptyDescription), 1)
        ])) : (t(), V(yb, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => a("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", _b, [
        e.subtotal ? (t(), n("div", Pb, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", zb, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Ab, [
          o("span", Ob, c(e.discountLabel), 1),
          e.discount ? (t(), n("span", jb, c(e.discount), 1)) : $("", !0),
          q(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), n("div", Lb, [
          o("span", Vb, c(e.taxLabel), 1),
          o("span", Db, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), n("div", Tb, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", Eb, c(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), n("div", Fb, [
          q(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Nb = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Rb = { class: "flex flex-col gap-4" }, Ub = { class: "flex flex-wrap items-start justify-between gap-3" }, Hb = { class: "flex items-center gap-2" }, qb = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, x4 = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(Be()), i = G(!1), u = We(e, "cart"), d = G(!1), f = k(
      () => a.items.filter((H) => At(H, s.value))
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
      return H ? a.parsePrice(H) : 0;
    }
    function M(H, Y, X) {
      return {
        ...H,
        qty: Y,
        amount: a.formatMoney(X * Y)
      };
    }
    function w(H) {
      const Y = Kh(a.items, H);
      Y && C(Y.key);
    }
    function C(H) {
      const Y = a.items.find((N) => N.key === H);
      if (!Y || Y.status === "out-of-stock")
        return;
      d.value = !1;
      const X = x(Y);
      if (u.value.find((N) => N.key === H)) {
        u.value = u.value.map(
          (N) => N.key === H ? M(N, Number(N.qty ?? 1) + 1, X) : N
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: Y.key,
          label: Y.label,
          detail: Y.caption ?? null,
          qty: 1,
          amount: a.formatMoney(X)
        }
      ];
    }
    function b(H, Y) {
      const X = a.items.find((N) => N.key === H), ae = x(X);
      u.value = u.value.map(
        (N) => N.key === H ? M(N, Y, ae) : N
      );
    }
    function v(H) {
      u.value = u.value.filter((Y) => Y.key !== H);
    }
    const g = k(
      () => u.value.reduce((H, Y) => {
        const X = a.items.find((ae) => ae.key === Y.key);
        return H + x(X) * Number(Y.qty ?? 1);
      }, 0)
    ), m = k(
      () => a.discountRate > 0 ? Math.round(g.value * a.discountRate) : 0
    ), S = k(
      () => Math.round((g.value - m.value) * a.taxRate)
    ), B = k(
      () => u.value.length ? a.formatMoney(g.value) : null
    ), P = k(
      () => u.value.length && m.value > 0 ? `−${a.formatMoney(m.value)}` : null
    ), Z = k(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(S.value) : null
    ), F = k(
      () => u.value.length ? a.formatMoney(
        g.value - m.value + S.value
      ) : null
    );
    function te() {
      d.value = !0, r("pay", u.value);
    }
    return (H, Y) => (t(), n(z, null, [
      o("div", Nb, [
        o("section", Rb, [
          o("div", Ub, [
            T(Me, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", Hb, [
              y(at)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: Y[0] || (Y[0] = (X) => s.value = {
                  ...y(Be)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: Y[1] || (Y[1] = (X) => i.value = !0)
              }, [
                Y[5] || (Y[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                Y[6] || (Y[6] = I(" Filters ", -1)),
                y(at)(s.value) ? (t(), n("span", qb, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          T(Pt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: h,
            onSelect: Y[2] || (Y[2] = (X) => r("select", X)),
            onCart: C,
            onScan: w
          }, null, 8, ["search-placeholder", "items"])
        ]),
        T(Ib, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: B.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: Z.value,
          total: F.value,
          onQty: b,
          onRemove: v
        }, {
          pay: j(() => [
            q(H.$slots, "pay", {
              cart: u.value,
              paid: d.value,
              pay: te
            }, () => [
              T(se, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: te
              }, {
                default: j(() => [
                  I(c(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      T(fa, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: Y[3] || (Y[3] = (X) => i.value = !1),
        onApply: p,
        onReset: Y[4] || (Y[4] = (X) => s.value = { ...y(Be)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Kb = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Gb = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Wb = ["src", "alt"], Zb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Jb = ["src"], Yb = { class: "flex items-start justify-between gap-3" }, Xb = { class: "text-lg font-semibold tabular-nums" }, Qb = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, e1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, t1 = { class: "grid grid-cols-2 gap-3" }, a1 = { class: "flex flex-col gap-2" }, n1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, y4 = /* @__PURE__ */ A({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(p) {
      let x = 0;
      for (const M of p)
        x = x * 31 + M.charCodeAt(0) >>> 0;
      return x;
    }
    function i(p, x) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((w, C) => ({
        label: w,
        value: Math.max(0, Math.round(p + Math.sin(C + x) * p * 0.18))
      }));
    }
    const u = k(() => a.item?.kind === "unit"), d = k(() => {
      const p = a.item;
      if (!p)
        return [];
      const x = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(x) || 12, s(p.key) % 7);
    }), f = k(() => {
      const p = a.item;
      if (!p)
        return [];
      const x = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(x) || 20, s(p.key) % 5 + 1);
    }), h = k(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (p, x) => (t(), V(zt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: x[1] || (x[1] = (M) => r("close"))
    }, ka({
      default: j(() => [
        e.item ? (t(), n("div", Kb, [
          o("div", Gb, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Wb)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", Zb, [
            (t(!0), n(z, null, L(e.item.images, (M, w) => (t(), n("img", {
              key: w,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Jb))), 128))
          ])) : $("", !0),
          o("div", Yb, [
            o("div", null, [
              o("p", Xb, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", Qb, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), V(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", e1, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", t1, [
            T(tt, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? f.value : d.value
            }, null, 8, ["label", "value", "series"]),
            T(tt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", a1, [
            o("p", n1, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            T(lt, {
              data: u.value ? f.value : d.value,
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
            onClick: x[0] || (x[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), l1 = { class: "flex flex-col gap-10" }, o1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, s1 = { class: "flex flex-col gap-3" }, r1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, i1 = ["src", "alt"], u1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, d1 = ["aria-label", "aria-pressed", "onClick"], c1 = ["src"], f1 = { class: "flex flex-col gap-5" }, m1 = { class: "flex flex-wrap items-start justify-between gap-3" }, p1 = { class: "min-w-0" }, v1 = { class: "text-2xl font-semibold tracking-tight" }, g1 = { class: "text-muted-foreground mt-1 text-sm" }, h1 = { class: "text-2xl font-semibold tabular-nums" }, b1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, x1 = { class: "grid grid-cols-2 gap-3 text-sm" }, y1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, k1 = { class: "mt-1 font-medium" }, $1 = { class: "rounded-lg border p-3" }, w1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, C1 = { class: "mt-1 font-medium" }, S1 = { class: "flex flex-col gap-4" }, M1 = { class: "grid gap-4 sm:grid-cols-2" }, B1 = { class: "bg-card rounded-lg border p-4" }, _1 = { class: "mb-3 text-sm font-medium" }, P1 = /* @__PURE__ */ A({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(w) {
      let C = 0;
      for (const b of w)
        C = C * 31 + b.charCodeAt(0) >>> 0;
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
    }), f = G(0), h = k(() => {
      const w = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, s(a.item.key) % 7);
    }), p = k(() => {
      const w = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, s(a.item.key) % 5 + 1);
    }), x = k(() => u.value ? p.value : h.value), M = k(() => !u.value && a.item.status !== "out-of-stock");
    return (w, C) => (t(), n("div", l1, [
      o("div", o1, [
        o("div", s1, [
          o("div", r1, [
            d.value[f.value] ? (t(), n("img", {
              key: 0,
              src: d.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, i1)) : $("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", u1, [
            (t(!0), n(z, null, L(d.value, (b, v) => (t(), n("button", {
              key: b,
              type: "button",
              class: O(["size-16 shrink-0 overflow-hidden rounded-md border", v === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${v + 1}`,
              "aria-pressed": v === f.value ? "true" : "false",
              onClick: (g) => f.value = v
            }, [
              o("img", {
                src: b,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, c1)
            ], 10, d1))), 128))
          ])) : $("", !0)
        ]),
        o("div", f1, [
          o("div", m1, [
            o("div", p1, [
              o("h1", v1, c(e.item.label), 1),
              o("p", g1, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), V(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", h1, c(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", b1, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", x1, [
            e.item.sku ? (t(), n("div", y1, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", k1, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", $1, [
              o("dt", w1, c(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", C1, c(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (b) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", S1, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", M1, [
          T(tt, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: x.value
          }, null, 8, ["label", "value", "series"]),
          T(tt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: h.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", B1, [
          o("p", _1, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          T(Xf, {
            data: x.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), z1 = ["href"], k4 = /* @__PURE__ */ A({
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
        I(" " + c(e.backLabel), 1)
      ], 8, z1),
      T(P1, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), A1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, O1 = ["aria-selected", "onClick"], j1 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, L1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, V1 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, D1 = ["aria-pressed"], T1 = ["aria-pressed"], $4 = /* @__PURE__ */ A({
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
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(a.tabs[0]?.key ?? ""), i = We(e, "layout"), u = G({}), d = G(!1);
    ue(
      () => a.tabs.map((b) => b.key).join(","),
      (b) => {
        b.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function f(b) {
      return u.value[b] ?? Be();
    }
    const h = k(
      () => a.tabs.find((b) => b.key === s.value) ?? a.tabs[0] ?? null
    ), p = k(
      () => h.value ? f(h.value.key) : Be()
    ), x = k(() => {
      const b = h.value;
      return b ? b.items.filter((v) => At(v, f(b.key))) : [];
    });
    function M(b) {
      const v = h.value?.key;
      v && (u.value = {
        ...u.value,
        [v]: { ...f(v), query: b }
      });
    }
    function w() {
      const b = h.value?.key;
      b && (u.value = { ...u.value, [b]: Be() });
    }
    function C(b) {
      const v = h.value?.key;
      v && (u.value = { ...u.value, [v]: b }, d.value = !1);
    }
    return (b, v) => (t(), n(z, null, [
      o("div", {
        class: O(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        T(Me, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", A1, [
          (t(!0), n(z, null, L(e.tabs, (g) => (t(), n("button", {
            key: g.key,
            type: "button",
            class: O([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === g.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === g.key ? "true" : "false",
            onClick: (m) => s.value = g.key
          }, c(g.label), 11, O1))), 128))
        ])) : $("", !0),
        o("div", j1, [
          T(pe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: h.value?.searchPlaceholder ?? "Search…",
            "aria-label": h.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": v[0] || (v[0] = (g) => M(String(g)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          y(at)(p.value) ? (t(), n("button", {
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
            v[9] || (v[9] = I(" Filters ", -1)),
            y(at)(p.value) ? (t(), n("span", L1, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", V1, [
            o("button", {
              type: "button",
              class: O([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: v[2] || (v[2] = (g) => i.value = "grid")
            }, " Tiles ", 10, D1),
            o("button", {
              type: "button",
              class: O([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: v[3] || (v[3] = (g) => i.value = "list")
            }, " List ", 10, T1)
          ])
        ]),
        T(Pt, {
          layout: i.value,
          "onUpdate:layout": v[4] || (v[4] = (g) => i.value = g),
          "page-size": e.pageSize,
          items: x.value,
          onSelect: v[5] || (v[5] = (g) => r("select", g)),
          onCart: v[6] || (v[6] = (g) => r("cart", g))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      T(fa, {
        open: d.value,
        title: h.value?.filterTitle ?? "Filters",
        "search-placeholder": h.value?.searchPlaceholder ?? "Search…",
        facets: h.value?.facets ?? [],
        applied: p.value,
        onClose: v[7] || (v[7] = (g) => d.value = !1),
        onApply: C,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), E1 = { class: "flex flex-col gap-4" }, F1 = { class: "flex flex-col gap-4" }, w4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(Be()), i = k(
      () => a.cards.filter((u) => At(u, s.value))
    );
    return (u, d) => (t(), n("div", {
      class: O(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      T(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", E1, [
        T(Me, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        T(Pt, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: d[0] || (d[0] = (f) => s.value = f),
          onSelect: d[1] || (d[1] = (f) => r("select", f)),
          onCart: d[2] || (d[2] = (f) => r("cart", f))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", F1, [
        T(Me, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        T(ll, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": j(({ value: f }) => [
            T(ge, {
              status: String(f)
            }, {
              default: j(() => [
                I(c(f), 1)
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
}, N1 = { class: "text-sm font-medium" }, R1 = ["width", "height", "aria-label"], U1 = { class: "flex items-center gap-2" }, H1 = /* @__PURE__ */ A({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(null), i = G(!1);
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function f(b) {
      const v = s.value;
      if (!v)
        return null;
      const g = v.getBoundingClientRect(), m = v.width / g.width, S = v.height / g.height;
      return {
        x: (b.clientX - g.left) * m,
        y: (b.clientY - g.top) * S
      };
    }
    function h(b) {
      a.disabled || (i.value = !0, u = f(b), s.value?.setPointerCapture(b.pointerId));
    }
    function p(b) {
      if (!i.value || a.disabled)
        return;
      const v = d(), g = f(b);
      !v || !g || !u || (v.strokeStyle = "#111827", v.lineWidth = 2.4, v.lineCap = "round", v.lineJoin = "round", v.beginPath(), v.moveTo(u.x, u.y), v.lineTo(g.x, g.y), v.stroke(), u = g);
    }
    function x() {
      i.value = !1, u = null;
    }
    function M() {
      const b = s.value, v = d();
      !b || !v || (v.clearRect(0, 0, b.width, b.height), r("clear"));
    }
    function w() {
      const b = s.value;
      b && r("save", b.toDataURL("image/png"));
    }
    function C() {
      const b = s.value, v = d();
      !b || !v || (v.fillStyle = "#ffffff", v.fillRect(0, 0, b.width, b.height));
    }
    return fe(C), ve(() => {
      i.value = !1;
    }), (b, v) => (t(), n("div", I1, [
      o("p", N1, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: O(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(h, ["prevent"]),
        onPointermove: ce(p, ["prevent"]),
        onPointerup: ce(x, ["prevent"]),
        onPointerleave: ce(x, ["prevent"])
      }, null, 42, R1),
      o("div", U1, [
        T(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: j(() => [...v[0] || (v[0] = [
            I(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        T(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: j(() => [...v[1] || (v[1] = [
            I("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), q1 = { class: "grid gap-8 lg:grid-cols-2" }, K1 = { class: "flex flex-col gap-3" }, G1 = { class: "text-muted-foreground text-xs" }, W1 = {
  key: 0,
  class: "flex flex-col gap-3"
}, Z1 = { class: "flex flex-wrap gap-3" }, J1 = ["onClick"], Y1 = ["src", "alt"], X1 = {
  key: 1,
  class: "flex flex-col gap-3"
}, Q1 = { class: "flex flex-wrap gap-3" }, ex = ["onClick"], tx = ["src", "alt"], ax = {
  key: 2,
  class: "flex flex-col gap-4"
}, nx = { class: "flex flex-wrap items-center gap-2" }, lx = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, ox = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, sx = { class: "flex flex-col gap-2" }, rx = ["src"], ix = {
  key: 1,
  class: "text-sm text-neutral-400"
}, ux = ["src"], C4 = /* @__PURE__ */ A({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = G([]), r = G([]), s = G(null), i = G(null), u = G(null), d = G(l.documents[0]?.key ?? "");
    function f(b) {
      try {
        const v = localStorage.getItem(b), g = v ? JSON.parse(v) : [];
        return Array.isArray(g) ? g : [];
      } catch {
        return [];
      }
    }
    fe(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), ue(
      a,
      (b) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(b));
      },
      { deep: !0 }
    ), ue(
      r,
      (b) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(b));
      },
      { deep: !0 }
    );
    function h(b) {
      const v = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: b
      };
      a.value = [v, ...a.value].slice(0, 8), s.value = v.id;
    }
    async function p(b, v) {
      await xu(b), v(40);
      const g = await new Promise((m, S) => {
        const B = new FileReader();
        B.onload = () => m(String(B.result)), B.onerror = () => S(new Error("Could not read the file")), B.readAsDataURL(b);
      });
      return v(100), { value: g, name: b.name, size: b.size, url: g };
    }
    function x() {
      const b = u.value?.url ?? u.value?.value;
      if (!b)
        return;
      const v = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: b
      };
      r.value = [v, ...r.value].slice(0, 8), i.value = v.id;
    }
    const M = k(
      () => a.value.find((b) => b.id === s.value)?.dataUrl ?? null
    ), w = k(
      () => r.value.find((b) => b.id === i.value)?.dataUrl ?? null
    ), C = k(() => {
      const b = l.documents.find((g) => g.key === d.value)?.document ?? l.documents[0]?.document ?? {}, v = {
        ...b?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...b,
        branding: v
      };
    });
    return (b, v) => (t(), n("div", {
      class: O(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      T(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", q1, [
        T(H1, {
          label: "Draw a signature",
          onSave: h
        }),
        o("div", K1, [
          v[2] || (v[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", G1, c(y(sa)), 1),
          T(ea, {
            modelValue: u.value,
            "onUpdate:modelValue": v[0] || (v[0] = (g) => u.value = g),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          T(se, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: x
          }, {
            default: j(() => [...v[1] || (v[1] = [
              I(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", W1, [
        T(Me, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", Z1, [
          (t(!0), n(z, null, L(a.value, (g) => (t(), n("button", {
            key: g.id,
            type: "button",
            class: O(["rounded-md border p-2", g.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => s.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Y1)
          ], 10, J1))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), n("section", X1, [
        T(Me, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", Q1, [
          (t(!0), n(z, null, L(r.value, (g) => (t(), n("button", {
            key: g.id,
            type: "button",
            class: O(["rounded-md border p-2", g.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => i.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, tx)
          ], 10, ex))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), n("section", ax, [
        o("div", nx, [
          (t(!0), n(z, null, L(e.documents, (g) => (t(), V(se, {
            key: g.key,
            size: "sm",
            variant: d.value === g.key ? "default" : "outline",
            onClick: (m) => d.value = g.key
          }, {
            default: j(() => [
              I(c(g.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", lx, [
          T(cf, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", ox, [
            o("div", sx, [
              v[3] || (v[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), n("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, rx)) : (t(), n("p", ix, "Draw and save a signature"))
            ]),
            w.value ? (t(), n("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, ux)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), S4 = "panel.dashboard.hiddenWidgets", dx = /* @__PURE__ */ Symbol("dashboardHide"), cx = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, M4 = /* @__PURE__ */ A({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = Xe(dx, null), r = G(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), s = G(!1);
    fe(() => {
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
    }), ue(
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
    return (u, d) => i.value ? $("", !0) : (t(), n("div", cx, [
      T(tv, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (f) => r.value = f),
        onHide: d[1] || (d[1] = (f) => y(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), fx = { class: "flex flex-col gap-3" }, mx = ["data-slot"], px = ["aria-pressed", "aria-label", "title"], vx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gx = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, hx = { class: "flex h-8 items-center" }, bx = ["aria-label", "title", "onClick"], xx = ["aria-label", "title", "onClick"], yx = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, kx = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, B4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(a.maskable ? !a.hidden : !0), i = G(/* @__PURE__ */ new Set());
    function u(m) {
      return a.maskable && (m.sensitive ?? !0);
    }
    function d(m) {
      return u(m) && !s.value && !i.value.has(m.key);
    }
    const f = k(() => a.segments.some(d)), h = k(() => a.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, x = k(() => p[a.columns] ?? p[4]), M = k(() => {
      const m = a.columns ?? 4, S = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(0, S);
    }), w = k(() => {
      const m = a.columns ?? 4, S = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(S);
    }), C = k(() => {
      const m = [];
      return M.value.length > 0 && m.push({ key: "packed", joined: !0, segments: M.value }), w.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: w.value }), m;
    });
    function b() {
      const m = f.value === !1;
      s.value = !m, i.value = /* @__PURE__ */ new Set(), r("toggle", m);
    }
    function v(m) {
      if (!u(m))
        return;
      const S = new Set(i.value);
      if (d(m))
        S.add(m.key);
      else if (S.delete(m.key), s.value) {
        s.value = !1;
        for (const B of a.segments)
          B.key !== m.key && u(B) && S.add(B.key);
      }
      i.value = S, r("toggle", f.value);
    }
    function g(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, S) => (t(), n("div", fx, [
      (t(!0), n(z, null, L(C.value, (B) => (t(), n("div", {
        key: B.key,
        class: O(["relative shrink-0", B.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": B.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && h.value && B.key === C.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: b
        }, [
          (t(), n("svg", vx, [
            f.value ? (t(), n(z, { key: 0 }, [
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
        ], 8, px)) : $("", !0),
        o("div", {
          class: O(["grid", [B.joined ? "gap-px" : "gap-3", x.value]])
        }, [
          (t(!0), n(z, null, L(B.segments, (P) => (t(), n("div", {
            key: P.key,
            class: O(["bg-card flex flex-col gap-2 p-4", B.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", gx, c(P.label), 1),
            o("div", hx, [
              e.loading ? (t(), V(Fe, {
                key: 0,
                variant: "number"
              })) : d(P) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (Z) => v(P)
              }, [
                (t(), n(z, null, L(5, (Z) => o("span", {
                  key: Z,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, bx)) : u(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${g(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (Z) => v(P)
              }, c(g(P.value)), 9, xx)) : (t(), n("span", yx, c(g(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), V(ca, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), V(lt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", kx, c(P.caption ?? P.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, mx))), 128))
    ]));
  }
}), $x = ["aria-label"], wx = ["aria-valuenow", "aria-label"], Cx = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Sx = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Mx = ["title"], Bx = { class: "font-medium" }, _x = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, Px = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, zx = { class: "flex items-center justify-between gap-2" }, Ax = { class: "text-sm font-semibold" }, Ox = { class: "flex items-center gap-3" }, jx = ["href"], Lx = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Vx = { class: "flex min-w-0 flex-col gap-0.5" }, Dx = { class: "text-sm font-medium" }, Tx = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Ex = {
  key: 1,
  class: "flex flex-col gap-2"
}, Fx = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ix = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Nx = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, _4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = k(() => a.items.find((C) => !C.done) ?? null), i = k(() => a.items.filter((C) => C.key !== s.value?.key)), u = k(() => a.items.length), d = k(() => a.items.filter((C) => C.done).length), f = k(() => {
      if (!s.value)
        return u.value;
      const C = a.items.findIndex((b) => b.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), h = k(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
    ), p = k(() => {
      const C = a.linkComponent;
      return typeof C == "string" ? C : Ut(C);
    }), x = He({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), M = He({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), w = He({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (C, b) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
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
      ], 8, wx),
      o("div", Cx, [
        o("span", Sx, " Step " + c(f.value) + " of " + c(u.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Bx, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", _x, c(": " + s.value.detail), 1)) : $("", !0)
        ], 8, Mx),
        s.value?.href ? (t(), V(he(p.value), {
          key: 0,
          href: s.value.href,
          class: O(y(M))
        }, {
          default: j(() => [
            I(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : $("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: b[0] || (b[0] = (v) => r("skip"))
        }, c(e.skipLabel), 1)) : $("", !0)
      ])
    ], 8, $x)) : e.items.length ? (t(), n("section", Px, [
      o("div", zx, [
        o("h2", Ax, c(e.heading), 1),
        o("div", Ox, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: b[1] || (b[1] = (v) => r("skip"))
          }, c(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, jx)) : $("", !0)
        ])
      ]),
      s.value ? (t(), n("div", Lx, [
        b[2] || (b[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Vx, [
          o("p", Dx, c(s.value.title), 1),
          s.value.detail ? (t(), n("p", Tx, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), V(he(p.value), {
            key: 1,
            href: s.value.href,
            class: O(y(x))
          }, {
            default: j(() => [
              I(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])
      ])) : $("", !0),
      i.value.length ? (t(), n("ul", Ex, [
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
            v.done ? (t(), n("svg", Fx, [...b[3] || (b[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", Ix, [
            o("p", {
              class: O(["text-sm", v.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(v.title), 3),
            !v.done && v.detail ? (t(), n("p", Nx, c(v.detail), 1)) : $("", !0)
          ]),
          !v.done && v.href ? (t(), V(he(p.value), {
            key: 0,
            href: v.href,
            class: O(y(w))
          }, {
            default: j(() => [
              I(c(v.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : $("", !0)
        ]))), 128))
      ])) : $("", !0)
    ])) : $("", !0);
  }
}), Rx = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, Ux = { class: "flex items-center gap-2" }, Hx = { class: "font-medium tabular-nums" }, qx = { class: "ml-auto flex items-center gap-3" }, P4 = /* @__PURE__ */ A({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), n("div", Rx, [
      o("div", Ux, [
        q(s.$slots, "actions")
      ]),
      o("span", Hx, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          I(" All " + c(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          I(c(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", qx, [
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
}), Kx = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Gx = { class: "text-muted-foreground text-xs tabular-nums" }, Wx = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Zx = ["value"], Jx = ["value"], Yx = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Xx = ["disabled"], Qx = ["disabled"], ey = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, ty = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, ay = ["disabled"], z4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = (f) => new Intl.NumberFormat().format(f), i = k(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), u = k(() => (a.page - 1) * a.perPage + a.rowsOnPage), d = k(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (f, h) => (t(), n("div", Kx, [
      o("p", Gx, [
        I(" Showing " + c(s(i.value)) + "-" + c(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          I("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", Wx, [
        h[4] || (h[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: h[0] || (h[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(z, null, L(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, c(p), 9, Jx))), 128))
        ], 40, Zx)
      ])) : $("", !0),
      o("nav", Yx, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: h[1] || (h[1] = (p) => r("first"))
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
        ])], 8, Xx),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: h[2] || (h[2] = (p) => r("previous"))
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
        ])], 8, Qx),
        o("span", ey, c(e.page), 1),
        d.value !== null ? (t(), n("span", ty, " of " + c(s(d.value)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: h[3] || (h[3] = (p) => r("next"))
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
        ])], 8, ay)
      ])
    ]));
  }
}), ny = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, ly = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, oy = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, sy = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, A4 = /* @__PURE__ */ A({
  __name: "TableShell",
  setup(e) {
    return (l, a) => (t(), n("div", ny, [
      l.$slots.tabs ? (t(), n("div", ly, [
        q(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), n("div", oy, [
        q(l.$slots, "toolbar")
      ])) : $("", !0),
      q(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", sy, [
        q(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), ry = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, iy = ["aria-current"], uy = ["title"], dy = ["aria-current", "onClick"], cy = ["title"], fy = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("div", ry, [
      o("button", {
        type: "button",
        class: O([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => a("select", null))
      }, [
        i[1] || (i[1] = I(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: O([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, uy)) : (t(), V(Fe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, iy),
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
        I(c(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: O([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, c(r(e.counts[u] ?? 0)), 11, cy)) : (t(), V(Fe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, dy))), 128))
    ]));
  }
}), O4 = /* @__PURE__ */ Ct(fy, [["__scopeId", "data-v-3967c945"]]), my = { class: "flex flex-col gap-2" }, py = { class: "flex flex-wrap items-center justify-end gap-2" }, vy = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, gy = ["placeholder", "title", "aria-label"], hy = ["aria-label"], by = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, xy = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, yy = { class: "text-xs font-medium" }, ky = ["value", "onChange"], $y = ["value"], wy = { class: "grid grid-cols-2 gap-2" }, Cy = ["value", "onChange"], Sy = ["value", "onChange"], My = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, By = ["value", "onChange"], _y = ["value", "onChange"], Py = {
  key: 4,
  class: "flex items-center gap-2"
}, zy = ["aria-checked", "onClick"], Ay = { class: "text-xs" }, Oy = ["onClick"], jy = ["value", "onChange"], Ly = ["value"], Vy = ["disabled", "onClick"], Dy = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Ty = ["disabled", "onClick"], Ey = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Fy = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Iy = ["aria-pressed", "aria-label", "title"], Ny = ["aria-label", "title"], Ry = { class: "flex flex-col gap-0.5 p-1" }, Uy = ["onClick"], Hy = ["onClick"], qy = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, Ky = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Gy = ["dusk"], Wy = ["aria-label", "onClick"], j4 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(a.search);
    ue(
      () => a.search,
      (N) => {
        N !== s.value && (s.value = N);
      }
    );
    let i;
    ue(s, (N) => {
      clearTimeout(i), i = setTimeout(() => {
        N !== a.search && r("update:search", N);
      }, 250);
    });
    const u = G({ ...a.filters });
    ue(
      () => a.filters,
      (N) => {
        u.value = { ...N };
      },
      { deep: !0 }
    );
    const d = k(
      () => a.filterSchema.filter(
        (N) => a.filters[N.key] !== null && a.filters[N.key] !== void 0
      ).length
    ), f = k(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), h = k(() => a.search !== "" || d.value > 0), p = k(() => a.indicators.length ? a.indicators : a.filterSchema.filter((N) => a.filters[N.key] !== null && a.filters[N.key] !== void 0).map((N) => ({
      key: N.key,
      label: `${N.label}: ${String(a.filters[N.key])}`,
      removable: !0
    })));
    function x(N) {
      r("group", N);
    }
    function M(N) {
      r("clear-filter", N);
    }
    function w(N) {
      return N.type === "multiselect";
    }
    function C(N) {
      const D = u.value[N.key];
      return Array.isArray(D) ? D : D == null ? [] : [D];
    }
    function b(N) {
      return C(N).filter(
        (D) => typeof D == "string" || typeof D == "number"
      );
    }
    function v(N) {
      return te(N).flatMap(
        (D) => typeof D.value == "string" || typeof D.value == "number" ? [{ value: D.value, label: D.label }] : []
      );
    }
    function g(N, D) {
      u.value = { ...u.value, [N.key]: D === "" ? null : D };
    }
    function m(N, D) {
      const ee = u.value[N.key];
      if (typeof ee != "string" || !ee.includes(".."))
        return "";
      const [_, K] = ee.split("..");
      return D === "from" ? _ ?? "" : K ?? "";
    }
    function S(N, D, ee) {
      const _ = D === "from" ? ee : m(N, "from"), K = D === "to" ? ee : m(N, "to");
      u.value = {
        ...u.value,
        [N.key]: _ && K ? `${_}..${K}` : null
      };
    }
    function B(N, D, ee) {
      const _ = D === "from" ? ee : m(N, "from"), K = D === "to" ? ee : m(N, "to");
      u.value = {
        ...u.value,
        [N.key]: _ || K ? `${_}..${K}` : null
      };
    }
    function P(N) {
      r("apply-filters", { ...u.value }), N();
    }
    function Z(N, D) {
      u.value[N] = D, r("apply-filters", { ...u.value });
    }
    function F() {
      u.value = Object.fromEntries(a.filterSchema.map((N) => [N.key, null]));
    }
    function te(N) {
      return N.type === "boolean" ? [
        { value: !0, label: N.trueLabel ?? "Yes" },
        { value: !1, label: N.falseLabel ?? "No" }
      ] : N.type === "daterange" ? Object.entries(N.presets ?? {}).map(([D, ee]) => ({
        value: D,
        label: ee
      })) : (N.options ?? []).map((D) => ({ value: D, label: D }));
    }
    const H = G(new Set(a.hidden));
    ue(
      () => a.hidden,
      (N) => {
        H.value = new Set(N);
      },
      { deep: !0 }
    );
    function Y(N) {
      const D = new Set(H.value);
      D.has(N) ? D.delete(N) : D.add(N), H.value = D, r("apply-columns", [...D]);
    }
    function X() {
      H.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function ae() {
      s.value = "", r("clear");
    }
    return (N, D) => (t(), n("div", my, [
      o("div", py, [
        o("div", vy, [
          D[5] || (D[5] = o("svg", {
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
          de(o("input", {
            "onUpdate:modelValue": D[0] || (D[0] = (ee) => s.value = ee),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, gy), [
            [xe, s.value]
          ]),
          s.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: D[1] || (D[1] = (ee) => s.value = "")
          }, [...D[4] || (D[4] = [
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
        e.filterSchema.length ? (t(), V(Te, {
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
              D[6] || (D[6] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              d.value ? (t(), n("span", by, c(d.value), 1)) : $("", !0)
            ], 10, hy)
          ]),
          panel: j(({ close: ee }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              D[7] || (D[7] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: F
              }, " Reset ")
            ]),
            D[10] || (D[10] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", xy, [
              (t(!0), n(z, null, L(e.filterSchema, (_) => (t(), n("div", {
                key: _.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", yy, c(_.label), 1),
                w(_) ? (t(), V(St, {
                  key: 0,
                  "model-value": b(_),
                  options: v(_),
                  placeholder: `Any ${_.label.toLowerCase()}`,
                  "onUpdate:modelValue": (K) => u.value[_.key] = K.length ? K : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : _.type === "querybuilder" ? (t(), V(Tr, {
                  key: 1,
                  "model-value": u.value[_.key] ?? null,
                  fields: _.fields ?? {},
                  operators: _.operators ?? {},
                  "max-depth": _.maxDepth ?? 5,
                  onApply: (K) => Z(_.key, K)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : _.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[_.key] == "string" && !String(u.value[_.key]).includes("..") ? u.value[_.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (K) => g(_, K.target.value)
                  }, [
                    D[8] || (D[8] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, L(te(_), (K) => (t(), n("option", {
                      key: String(K.value),
                      value: K.value
                    }, c(K.label), 9, $y))), 128))
                  ], 40, ky),
                  o("div", wy, [
                    o("input", {
                      type: "date",
                      value: m(_, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (K) => S(
                        _,
                        "from",
                        K.target.value
                      )
                    }, null, 40, Cy),
                    o("input", {
                      type: "date",
                      value: m(_, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (K) => S(
                        _,
                        "to",
                        K.target.value
                      )
                    }, null, 40, Sy)
                  ])
                ], 64)) : _.type === "numberrange" ? (t(), n("div", My, [
                  o("input", {
                    type: "number",
                    value: m(_, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (K) => B(
                      _,
                      "from",
                      K.target.value
                    )
                  }, null, 40, By),
                  o("input", {
                    type: "number",
                    value: m(_, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (K) => B(
                      _,
                      "to",
                      K.target.value
                    )
                  }, null, 40, _y)
                ])) : _.type === "boolean" ? (t(), n("div", Py, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[_.key] === !0,
                    class: O([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[_.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (K) => g(_, u.value[_.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: O(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[_.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, zy),
                  o("span", Ay, c(_.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: O([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[_.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (K) => g(_, u.value[_.key] === !1 ? null : !1)
                  }, c(_.falseLabel ?? "No") + " only ", 11, Oy)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[_.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (K) => g(_, K.target.value)
                }, [
                  D[9] || (D[9] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, L(te(_), (K) => (t(), n("option", {
                    key: String(K.value),
                    value: K.value
                  }, c(K.label), 9, Ly))), 128))
                ], 40, jy))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !f.value,
              onClick: (_) => P(ee)
            }, " Apply filters ", 8, Vy)
          ]),
          _: 1
        })) : $("", !0),
        T(Te, { "dismiss-on-panel-click": !1 }, {
          trigger: j(() => [...D[11] || (D[11] = [
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
            D[14] || (D[14] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", Dy, [
              (t(!0), n(z, null, L(e.columns, (ee) => (t(), n("button", {
                key: ee.key,
                type: "button",
                class: O(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", ee.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: ee.locked,
                onClick: (_) => Y(ee.key)
              }, [
                H.value.has(ee.key) ? (t(), n("span", Fy)) : (t(), n("svg", Ey, [...D[12] || (D[12] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                I(" " + c(ee.label), 1)
              ], 10, Ty))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: X
              }, [...D[13] || (D[13] = [
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
                I(" Reset ", -1)
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
          onClick: D[2] || (D[2] = (ee) => r("toggle-reorder"))
        }, [...D[15] || (D[15] = [
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
        ])], 10, Iy)) : $("", !0),
        e.groups.length ? (t(), V(Te, {
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
            }, [...D[16] || (D[16] = [
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
            ])], 10, Ny)
          ]),
          panel: j(({ close: ee }) => [
            o("div", Ry, [
              o("button", {
                type: "button",
                class: O(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (_) => {
                  x(null), ee();
                }
              }, " No grouping ", 10, Uy),
              (t(!0), n(z, null, L(e.groups, (_) => (t(), n("button", {
                key: _.key,
                type: "button",
                class: O(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === _.key ? "text-primary font-medium" : ""]),
                onClick: (K) => {
                  x(_.key), ee();
                }
              }, c(_.label), 11, Hy))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        h.value ? (t(), n("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: ae
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), n("span", qy, "Loading…")) : $("", !0)
      ]),
      p.value.length ? (t(), n("div", Ky, [
        (t(!0), n(z, null, L(p.value, (ee) => (t(), n("span", {
          key: ee.key + ee.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${ee.key}`
        }, [
          I(c(ee.label) + " ", 1),
          ee.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${ee.label}`,
            onClick: (_) => M(ee.key)
          }, [...D[17] || (D[17] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Wy)) : $("", !0)
        ], 8, Gy))), 128)),
        p.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: D[3] || (D[3] = (ee) => r("clear-filters"))
        }, " Clear all ")) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Zy = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Jy = { class: "grid gap-2" }, Yy = {
  key: 0,
  class: "text-destructive text-sm"
}, Xy = { class: "flex gap-2" }, L4 = /* @__PURE__ */ A({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = G((() => {
      const M = navigator.userAgent, w = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: b }) => b.test(M))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: b }) => b.test(M))?.name;
      return [w, C].filter(Boolean).join(" on ") || "";
    })()), i = G(!1), u = $a(null), d = k(() => u.value?.isLoading.value ?? !1), f = k(() => u.value?.error.value ?? null), h = k(() => u.value?.isSupported.value ?? !1);
    fe(async () => {
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
    const p = async (M) => {
      M.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, x = () => {
      i.value = !1, s.value = "";
    };
    return (M, w) => h.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", Jy, [
        w[3] || (w[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        de(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": w[1] || (w[1] = (C) => s.value = C),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [xe, s.value]
        ]),
        w[4] || (w[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      f.value ? (t(), n("p", Yy, c(f.value), 1)) : $("", !0),
      o("div", Xy, [
        T(se, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: j(() => [
            I(c(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        T(se, {
          type: "button",
          variant: "ghost",
          onClick: x
        }, {
          default: j(() => [...w[5] || (w[5] = [
            I(" Cancel ", -1)
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
        I(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", Zy, " Passkeys are not supported in this browser. "));
  }
}), Qy = { class: "flex flex-col gap-4" }, e0 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, V4 = /* @__PURE__ */ A({
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
    ct("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), ct("panelCreateOption", {
      run(f, h) {
        return a.createOption ? a.createOption(f, h) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = k(() => a.nodes.length > 0), i = k(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = k(() => a.errors._conflict);
    function d(f) {
      if (a.upload)
        return (h, p) => a.upload(f, h, p);
    }
    return (f, h) => (t(), n("div", Qy, [
      u.value ? (t(), n("p", e0, c(u.value), 1)) : $("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, L(e.nodes, (p, x) => (t(), V(ta, {
        key: x,
        node: p,
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
        (t(!0), n(z, null, L(e.fields, (p) => (t(), V(Ee, {
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
          class: O(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (x) => r("change", p.key, x),
          onAffixAction: (x) => r("affix-action", p.key, x)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), t0 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, a0 = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, n0 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, l0 = ["disabled"], o0 = ["disabled"], s0 = ["disabled"], D4 = /* @__PURE__ */ A({
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
    return (l, a) => (t(), V(Ie, { to: "body" }, [
      T(Ae, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), n("div", t0, [
            o("div", a0, [
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
              o("span", n0, c(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, c(e.discardLabel), 9, l0)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, c(e.cancelLabel), 9, o0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, s0)
            ])
          ])) : $("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function T4(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = G(dt(e.value)), s = k(() => dt(e.value) !== r.value);
  function i() {
    r.value = dt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(f) {
    s.value && (f.preventDefault(), f.returnValue = "");
  }
  return fe(() => {
    a && window.addEventListener("beforeunload", d);
  }), ve(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function dt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const r0 = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, i0 = { class: "text-muted-foreground text-xs font-medium" }, u0 = { class: "text-sm" }, d0 = { key: 1 }, c0 = {
  key: 5,
  class: "max-w-full"
}, f0 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, m0 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, p0 = { key: 6 }, v0 = {
  key: 0,
  class: "divide-y rounded-md border"
}, g0 = { class: "text-muted-foreground truncate font-medium" }, h0 = { class: "col-span-2 break-words" }, b0 = {
  key: 1,
  class: "text-muted-foreground"
}, x0 = {
  key: 7,
  class: "flex flex-col gap-3"
}, y0 = {
  key: 0,
  class: "text-muted-foreground"
}, k0 = ["href"], $0 = { class: "text-sm font-semibold" }, w0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, C0 = ["onClick"], E4 = /* @__PURE__ */ A({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(!a.node.collapsed), i = G(0), u = k(() => a.depth === 0), d = k(() => {
      const M = a.node.columns ?? 1;
      return M >= 3 ? "sm:grid-cols-3" : M === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), f = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, h = k(() => a.node.key ? a.record[a.node.key] : null), p = k(() => {
      const M = h.value;
      if (M == null || M === "")
        return "-";
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, f[a.node.type]);
      let w = String(M);
      return a.node.transform === "upper" && (w = w.toUpperCase()), a.node.transform === "lower" && (w = w.toLowerCase()), [a.node.prefix, w, a.node.suffix].filter(Boolean).join(" ");
    }), x = k(() => {
      const M = typeof h.value == "boolean" ? h.value ? "1" : "" : String(h.value), w = a.node.colors?.[M] ?? a.node.defaultColor ?? "neutral";
      return Mt[w] ?? "outline";
    });
    return (M, w) => {
      const C = bt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", r0, [
        o("dt", i0, c(e.node.label), 1),
        o("dd", u0, [
          e.node.type === "badge" && y(Kr)(h.value) ? (t(), V(qe, {
            key: 0,
            variant: x.value,
            class: "capitalize"
          }, {
            default: j(() => [
              I(c(h.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", d0, "-")) : e.node.type === "icon" ? (t(), V(fr, {
            key: 2,
            value: h.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), V(vr, {
            key: 3,
            src: h.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), V(yr, {
            key: 4,
            value: typeof h.value == "string" ? h.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", c0, [
            e.node.language ? (t(), n("p", f0, c(e.node.language), 1)) : $("", !0),
            o("pre", m0, [
              o("code", null, c(h.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", p0, [
            h.value && typeof h.value == "object" && !Array.isArray(h.value) && Object.keys(h.value).length ? (t(), n("dl", v0, [
              (t(!0), n(z, null, L(h.value, (b, v) => (t(), n("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", g0, c(v), 1),
                o("dd", h0, c(b), 1)
              ]))), 128))
            ])) : (t(), n("span", b0, "-"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", x0, [
            (t(!0), n(z, null, L(Array.isArray(h.value) ? h.value : [], (b, v) => (t(), n("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, L(e.node.entries ?? [], (g, m) => (t(), V(C, {
                key: m,
                node: g,
                record: b,
                depth: e.depth + 1,
                onAction: w[0] || (w[0] = (S) => r("action", S))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(h.value) || h.value.length === 0 ? (t(), n("span", y0, "-")) : $("", !0)
          ])) : e.node.url ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, c(p.value), 9, k0)) : (t(), n("span", {
            key: 9,
            class: O([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, c(p.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
            onClick: w[1] || (w[1] = (b) => r("action", e.node.action))
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
          onClick: w[2] || (w[2] = (b) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", $0, c(e.node.label), 1),
            e.node.description ? (t(), n("p", w0, c(e.node.description), 1)) : $("", !0)
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: O(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (b, v) => (t(), V(C, {
            key: v,
            node: b,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[3] || (w[3] = (g) => r("action", g))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: O(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (b, v) => (t(), V(C, {
          key: v,
          node: b,
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
          (t(!0), n(z, null, L(e.node.children ?? [], (b, v) => (t(), n("button", {
            key: v,
            type: "button",
            class: O([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (g) => i.value = v
          }, c(b.label), 11, C0))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (b, v) => de((t(), n("div", {
          key: v,
          class: O(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(b.children ?? [], (g, m) => (t(), V(C, {
            key: m,
            node: g,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[5] || (w[5] = (S) => r("action", S))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Oe, i.value === v]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), S0 = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, M0 = { class: "text-muted-foreground text-sm" }, B0 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, _0 = { class: "flex items-start gap-3" }, P0 = { class: "min-w-0 flex-1" }, z0 = { class: "flex flex-wrap items-center gap-2" }, A0 = { class: "truncate text-sm font-medium" }, O0 = { class: "text-muted-foreground mt-0.5 text-xs" }, j0 = { class: "text-muted-foreground text-xs" }, L0 = { class: "mt-auto flex items-center gap-2" }, V0 = /* @__PURE__ */ A({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", S0, [
      o("p", M0, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", B0, [
        (t(!0), n(z, null, L(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", _0, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: d.color }),
              "aria-hidden": "true"
            }, c(d.mark), 5),
            o("div", P0, [
              o("div", z0, [
                o("h3", A0, c(d.label), 1),
                T(ge, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    I(c(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), V(ge, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...u[0] || (u[0] = [
                    I(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), V(ge, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...u[1] || (u[1] = [
                    I(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.isDefault ? (t(), V(ge, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...u[2] || (u[2] = [
                    I(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.connected && d.mode ? (t(), V(ge, {
                  key: 3,
                  status: d.mode
                }, {
                  default: j(() => [
                    I(c(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", O0, c(d.caption), 1)
            ])
          ]),
          o("p", j0, c(d.methods.join(" · ")), 1),
          o("div", L0, [
            T(se, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", d.key)
            }, {
              default: j(() => [...u[3] || (u[3] = [
                I(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            T(se, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", d.key)
            }, {
              default: j(() => [
                I(c(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), D0 = { class: "flex flex-col gap-6" }, T0 = { class: "relative" }, E0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, F0 = ["d"], I0 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, N0 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, R0 = { class: "flex flex-wrap items-center gap-2" }, U0 = { class: "text-muted-foreground text-sm" }, H0 = { class: "flex flex-col gap-1 text-sm" }, q0 = ["value"], K0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, G0 = { class: "flex flex-wrap items-center gap-2" }, W0 = {
  key: 1,
  class: "flex items-center gap-2"
}, F4 = /* @__PURE__ */ A({
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
    const l = We(e, "gateways"), a = G(null), r = G(""), s = k(
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
        (b) => b.key === w ? { ...b, ...C } : b
      );
    }
    function f(w) {
      a.value = w;
    }
    function h(w) {
      const C = l.value.find((v) => v.key === w);
      if (!C)
        return;
      const b = !C.connected;
      d(w, {
        connected: b,
        mode: b ? C.mode ?? "test" : null,
        enabled: b,
        isDefault: !1
      });
    }
    function p(w, C) {
      const b = l.value.find((v) => v.key === w);
      b?.connected && d(w, { enabled: C, isDefault: C ? b.isDefault : !1 });
    }
    function x(w) {
      const C = l.value.find((b) => b.key === w);
      !C || !u(C) || (l.value = l.value.map((b) => ({
        ...b,
        isDefault: b.key === w
      })));
    }
    function M(w) {
      const C = a.value;
      !C || !l.value.find((v) => v.key === C)?.connected || d(C, { mode: w });
    }
    return (w, C) => (t(), n(z, null, [
      o("div", D0, [
        T(Me, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", T0, [
          (t(), n("svg", E0, [
            o("path", {
              d: y(ie)("search")
            }, null, 8, F0)
          ])),
          T(pe, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (b) => r.value = b),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), V(V0, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: h
        }, null, 8, ["gateways"])) : (t(), n("p", I0, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      T(zt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: C[8] || (C[8] = (b) => a.value = null)
      }, {
        footer: j(() => [
          T(se, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (b) => a.value = null)
          }, {
            default: j(() => [...C[21] || (C[21] = [
              I("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), V(se, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (b) => h(s.value.key))
          }, {
            default: j(() => [
              I(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), n("div", N0, [
            o("div", R0, [
              T(ge, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: j(() => [
                  I(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), V(ge, {
                key: 0,
                status: "offered"
              }, {
                default: j(() => [...C[9] || (C[9] = [
                  I(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), V(ge, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...C[10] || (C[10] = [
                  I(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), V(ge, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...C[11] || (C[11] = [
                  I(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), V(ge, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  I(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", U0, c(s.value.caption), 1),
            o("label", H0, [
              C[12] || (C[12] = I(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, q0)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              I(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", K0, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", G0, [
                T(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (b) => p(s.value.key, !0))
                }, {
                  default: j(() => [...C[13] || (C[13] = [
                    I(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                T(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (b) => p(s.value.key, !1))
                }, {
                  default: j(() => [...C[14] || (C[14] = [
                    I(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                T(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: C[3] || (C[3] = (b) => x(s.value.key))
                }, {
                  default: j(() => [...C[15] || (C[15] = [
                    I(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), n("div", W0, [
              T(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (b) => M("test"))
              }, {
                default: j(() => [...C[18] || (C[18] = [
                  I(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              T(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (b) => M("live"))
              }, {
                default: j(() => [...C[19] || (C[19] = [
                  I(" Live ", -1)
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
function Rt(e) {
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
function I4(e) {
  const l = G(Rt(e));
  fe(() => {
    l.value = Rt(e);
  }), ue(
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
function N4(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = G(
    l.driver === "none" ? "off" : "connecting"
  ), f = G(/* @__PURE__ */ new Set());
  let h = /* @__PURE__ */ new Map(), p, x, M, w = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function b(Y, X) {
    h.set(Y, { ...h.get(Y) ?? {}, ...X }), !p && (p = setTimeout(() => {
      p = void 0, v();
    }, l.batchMs));
  }
  function v() {
    if (h.size === 0)
      return;
    const Y = h;
    h = /* @__PURE__ */ new Map();
    const X = /* @__PURE__ */ new Set();
    for (const [ae, N] of Y) {
      const D = a.value.find((ee) => ee[r] === ae);
      if (!D) {
        u?.(ae, N);
        continue;
      }
      Object.assign(D, N), X.add(ae);
    }
    X.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...X]), setTimeout(() => {
      const ae = new Set(f.value);
      X.forEach((N) => ae.delete(N)), f.value = ae;
    }, 1500));
  }
  async function g() {
    if (!(!s || a.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const Y = a.value.map((N) => N[r]), { records: X, at: ae } = await s(Y, w);
        w = ae, d.value = "live";
        for (const N of X)
          b(N[r], N);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function m() {
    S(), d.value = "live", x = setInterval(g, l.intervalMs);
  }
  function S() {
    clearInterval(x), x = void 0, M?.abort();
  }
  function B() {
    return window.Echo ?? null;
  }
  function P() {
    const Y = B();
    if (!Y || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const X = Y.private(l.channel);
    for (const ae of l.events)
      X.listen(ae, (N) => {
        N?.[r] !== void 0 && b(N[r], N);
      });
    d.value = "live", Y.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), Y.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function Z() {
    C && (B()?.leave(C), C = null);
  }
  function F() {
    l.driver === "poll" && m(), l.driver === "broadcast" && P();
  }
  function te() {
    S(), Z(), clearTimeout(p), p = void 0, h = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), d.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), F(), i?.()));
  }
  return fe(() => {
    l.driver !== "none" && (F(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ve(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: d, recentlyChanged: f, applyPatch: b, flush: v, pollOnce: g };
}
const Z0 = /^[a-z0-9-]+$/, J0 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function R4(e) {
  wa(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !Z0.test(a) || typeof r != "string" || !J0.test(r) || (l[`--${a}`] = r);
    bi(l);
  });
}
const Y0 = { class: "flex items-center gap-0.5" }, X0 = /* @__PURE__ */ A({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Y0, [
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
}), Q0 = /* @__PURE__ */ A({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), V(da, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), ek = { class: "flex flex-col gap-2" }, tk = { class: "bg-card rounded-lg border p-4" }, ak = { class: "text-muted-foreground truncate text-xs" }, nk = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, lk = /* @__PURE__ */ A({
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
    function f(C, b) {
      return C.length <= b ? C : `${C.slice(0, b - 1).trimEnd()}…`;
    }
    const h = k(() => f(s.value, r.value.titleMax)), p = k(() => f(i.value, r.value.descriptionMax));
    function x(C, b, v) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > v ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < b ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = k(
      () => x(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = k(
      () => x(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, b) => (t(), n("div", ek, [
      o("div", tk, [
        o("p", ak, c(d.value), 1),
        o("p", {
          class: O(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", h.value === "" ? "text-muted-foreground italic" : ""])
        }, c(h.value || "Untitled page"), 3),
        o("p", {
          class: O(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", nk, [
        o("span", {
          class: O(M.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(M.value.note), 3),
        o("span", {
          class: O(w.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(w.value.note), 3)
      ]),
      b[0] || (b[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function ok() {
  we("radio", Hd), we("checkboxlist", Gd), we("tags", ec), we("colour", fc), we("slider", bc), we("visual-select", Ac), we("markdown", wd), we("code", zd), we("seo-preview", lk), it("swatch", jc), it("voucher-code-box", Q0), it("document-colour-mode", X0);
}
function ma() {
  const e = G(null), l = G(!1);
  let a = null;
  return fe(() => {
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
  }), ve(() => a?.disconnect()), { el: e, shown: l };
}
const sk = /* @__PURE__ */ A({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = ma();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: O(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", y(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), rk = ["id"], $e = /* @__PURE__ */ A({
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
        T(sk, null, {
          default: j(() => [
            q(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, rk));
  }
}), ik = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, uk = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, dk = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Le = /* @__PURE__ */ A({
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
      e.eyebrow ? (t(), n("p", ik, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), n("h2", uk, c(e.title), 1)) : $("", !0),
      e.body ? (t(), n("p", dk, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
});
function ck() {
  const e = G(null);
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
  return fe(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ve(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const fk = { class: "pk-tilt-inner relative h-full" }, mk = /* @__PURE__ */ A({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = ck();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", fk, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(a.$slots, "default")
      ])
    ], 512));
  }
}), pk = { class: "flex flex-col gap-10" }, vk = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, gk = { class: "text-base font-semibold" }, hk = { class: "text-sm text-pretty text-muted-foreground" }, bk = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V($e, null, {
      default: j(() => [
        o("div", pk, [
          T(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", vk, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), V(mk, {
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
                  o("h3", gk, c(s.title), 1),
                  o("p", hk, c(s.body), 1)
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
}), xk = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, yk = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, kk = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, $k = ["href"], wk = /* @__PURE__ */ A({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), V($e, null, {
      default: j(() => [
        o("div", xk, [
          o("h2", yk, c(e.title), 1),
          e.body ? (t(), n("p", kk, c(e.body), 1)) : $("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, $k)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Ck = { class: "flex flex-col gap-8" }, Sk = { class: "divide-y rounded-lg border" }, Mk = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Bk = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, _k = /* @__PURE__ */ A({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V($e, { narrow: "" }, {
      default: j(() => [
        o("div", Ck, [
          T(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Sk, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", Mk, [
                I(c(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Bk, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Pk = { class: "flex flex-col gap-10" }, zk = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Ak = { class: "text-sm font-semibold" }, Ok = { class: "text-sm text-pretty text-muted-foreground" }, jk = /* @__PURE__ */ A({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V($e, null, {
      default: j(() => [
        o("div", Pk, [
          T(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", zk, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", Ak, c(r.title), 1),
              o("p", Ok, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Lk = { class: "flex flex-col items-center gap-6 text-center" }, Vk = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Dk = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, Tk = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Ek = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Fk = ["href"], Ik = ["href"], Nk = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, Rk = /* @__PURE__ */ A({
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
    return (l, a) => (t(), V($e, null, {
      default: j(() => [
        o("div", Lk, [
          e.eyebrow ? (t(), n("p", Vk, c(e.eyebrow), 1)) : $("", !0),
          o("h1", Dk, c(e.title), 1),
          e.body ? (t(), n("p", Tk, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", Ek, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, Fk)) : $("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, Ik)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), n("p", Nk, c(e.note), 1)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Uk = { class: "flex flex-col items-center gap-6" }, Hk = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, qk = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, Kk = /* @__PURE__ */ A({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V($e, { muted: "" }, {
      default: j(() => [
        o("div", Uk, [
          e.title ? (t(), n("p", Hk, c(e.title), 1)) : $("", !0),
          o("ul", qk, [
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
}), Gk = { class: "flex flex-col gap-10" }, Wk = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Zk = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, Jk = ["aria-pressed"], Yk = ["aria-pressed"], Xk = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Qk = { class: "grid gap-4 md:grid-cols-3" }, e2 = { class: "flex flex-col gap-1" }, t2 = { class: "text-sm font-semibold" }, a2 = { class: "flex items-baseline gap-1" }, n2 = { class: "text-3xl font-semibold tracking-tight" }, l2 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, o2 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, s2 = { class: "flex flex-col gap-2 text-sm" }, r2 = { class: "text-muted-foreground" }, i2 = ["href"], u2 = /* @__PURE__ */ A({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = G(!1), r = k(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, u) => (t(), V($e, { muted: "" }, {
      default: j(() => [
        o("div", Gk, [
          T(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", Wk, [
            o("div", Zk, [
              o("button", {
                type: "button",
                class: O([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, Jk),
              o("button", {
                type: "button",
                class: O([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, Yk)
            ]),
            e.annualNote ? (t(), n("p", Xk, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", Qk, [
            (t(!0), n(z, null, L(e.items ?? [], (d, f) => (t(), n("li", {
              key: f,
              class: O(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", e2, [
                o("h3", t2, c(d.name), 1),
                o("p", a2, [
                  o("span", n2, c(s(d)), 1),
                  d.period ? (t(), n("span", l2, c(d.period), 1)) : $("", !0)
                ]),
                d.body ? (t(), n("p", o2, c(d.body), 1)) : $("", !0)
              ]),
              o("ul", s2, [
                (t(!0), n(z, null, L(d.features ?? [], (h, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", r2, c(h.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: O([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(d.label), 11, i2)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function d2() {
  const e = G(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), f = d.height + window.innerHeight, h = f <= 0 ? 0 : (window.innerHeight - d.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(h, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return fe(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, d || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((f) => {
        s = f.some((h) => h.isIntersecting), s && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), ve(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const c2 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, f2 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, m2 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, p2 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, v2 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, g2 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, h2 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, b2 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, x2 = { class: "ml-3 truncate text-xs text-muted-foreground" }, y2 = { class: "flex" }, k2 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, $2 = { class: "min-w-0 flex-1 p-4" }, w2 = { class: "flex flex-col divide-y rounded-md border" }, C2 = /* @__PURE__ */ A({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = d2();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", c2, [
        o("div", f2, [
          o("div", m2, [
            o("h2", p2, c(e.title), 1),
            e.body ? (t(), n("p", v2, c(e.body), 1)) : $("", !0)
          ]),
          o("div", g2, [
            o("div", h2, [
              o("div", b2, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", x2, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", y2, [
                o("div", k2, [
                  (t(), n(z, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", $2, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", w2, [
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
}), S2 = /* @__PURE__ */ A({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = ma(), s = G(0);
    return ue(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), f = (h) => {
        const p = Math.min((h - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), M2 = { class: "flex flex-col gap-10" }, B2 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, _2 = { class: "order-2 text-sm text-muted-foreground" }, P2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, z2 = /* @__PURE__ */ A({
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
    return (a, r) => (t(), V($e, { muted: "" }, {
      default: j(() => [
        o("div", M2, [
          T(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", B2, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", _2, c(s.label), 1),
              o("dd", P2, [
                l(s.value) ? (t(), V(S2, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
                  I(c(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), A2 = { class: "flex flex-col gap-10" }, O2 = { class: "grid gap-6 md:grid-cols-3" }, j2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, L2 = { class: "text-sm font-semibold" }, V2 = { class: "text-sm text-pretty text-muted-foreground" }, D2 = /* @__PURE__ */ A({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V($e, null, {
      default: j(() => [
        o("div", A2, [
          T(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", O2, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", j2, c(s + 1), 1),
              o("h3", L2, c(r.title), 1),
              o("p", V2, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), T2 = { class: "flex flex-col gap-10" }, E2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, F2 = { class: "text-pretty text-sm leading-relaxed" }, I2 = { class: "mt-auto flex items-center gap-3" }, N2 = ["src"], R2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, U2 = { class: "min-w-0" }, H2 = { class: "block truncate text-sm font-medium" }, q2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, K2 = /* @__PURE__ */ A({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), V($e, null, {
      default: j(() => [
        o("div", T2, [
          T(Le, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", E2, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", F2, " “" + c(r.quote) + "” ", 1),
              o("figcaption", I2, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, N2)) : (t(), n("span", R2, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", U2, [
                  o("span", H2, c(r.name), 1),
                  r.role ? (t(), n("span", q2, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), U4 = /* @__PURE__ */ A({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: Rk,
      logos: Kk,
      features: jk,
      bento: bk,
      showcase: C2,
      steps: D2,
      stats: z2,
      testimonials: K2,
      pricing: u2,
      faq: _k,
      cta: wk
    }, s = k(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(z, null, L(s.value, (d) => (t(), V(he(d.component), le({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), G2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, H4 = /* @__PURE__ */ A({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", G2, [
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
}), W2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, q4 = /* @__PURE__ */ A({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", W2, [...a[0] || (a[0] = [
      ht('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), Z2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, K4 = /* @__PURE__ */ A({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", Z2, [...a[0] || (a[0] = [
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
ok();
const G4 = "0.0.1";
export {
  m4 as AdminDirectory,
  su as Alert,
  ru as AlertDescription,
  iu as AlertTitle,
  Qw as AppPageFooter,
  k$ as AppearanceDrawer,
  vw as Avatar,
  gw as AvatarFallback,
  hw as AvatarImage,
  Mt as BADGE_VARIANTS,
  h$ as BadgeResolver,
  s4 as BarChart,
  bw as Breadcrumb,
  xw as BreadcrumbEllipsis,
  yw as BreadcrumbItem,
  kw as BreadcrumbLink,
  $w as BreadcrumbList,
  ww as BreadcrumbPage,
  Cw as BreadcrumbSeparator,
  l$ as BulkActions,
  Uw as Card,
  Hw as CardAction,
  qw as CardContent,
  Kw as CardDescription,
  Gw as CardFooter,
  Ww as CardHeader,
  Zw as CardTitle,
  Ib as CartPanel,
  $4 as CatalogBrowser,
  cg as CatalogCard,
  fa as CatalogFilterSheet,
  Pt as CatalogGrid,
  y4 as CatalogInspect,
  P1 as CatalogItemDetail,
  k4 as CatalogItemView,
  w4 as CatalogRegister,
  x4 as CatalogTill,
  Dp as ChartCard,
  Ye as ChartTooltip,
  xo as Checkbox,
  f$ as CheckboxCell,
  m$ as CodeCell,
  yr as ColourCell,
  c4 as ComboChart,
  bo as CreateOptionDialog,
  lo as CreateOptionError,
  S4 as DASHBOARD_HIDDEN_STORAGE_KEY,
  dx as DASHBOARD_HIDE_KEY,
  M4 as DashboardShortcuts,
  ll as DataTable,
  Ow as Dialog,
  jw as DialogClose,
  Lw as DialogContent,
  Vw as DialogDescription,
  Dw as DialogFooter,
  Tw as DialogHeader,
  qu as DialogOverlay,
  Ew as DialogScrollContent,
  Fw as DialogTitle,
  Iw as DialogTrigger,
  m4 as DirectoryPage,
  tw as DropdownMenu,
  aw as DropdownMenuCheckboxItem,
  nw as DropdownMenuContent,
  lw as DropdownMenuGroup,
  ow as DropdownMenuItem,
  sw as DropdownMenuLabel,
  J4 as DropdownMenuPortal,
  rw as DropdownMenuRadioGroup,
  iw as DropdownMenuRadioItem,
  uw as DropdownMenuSeparator,
  dw as DropdownMenuShortcut,
  cw as DropdownMenuSub,
  fw as DropdownMenuSubContent,
  mw as DropdownMenuSubTrigger,
  pw as DropdownMenuTrigger,
  v$ as EditableCell,
  Ee as FormFieldControl,
  f4 as HeatmapChart,
  ot as ICON_PATHS,
  fr as IconCell,
  vr as ImageCell,
  E4 as InfoNode,
  pu as JPEG_IMAGE_ERROR,
  p$ as KeyValueCell,
  Nw as Label,
  Xf as LineChart,
  yb as LineItems,
  tt as MiniStatCard,
  Sw as NavigationMenu,
  Mw as NavigationMenuContent,
  Bw as NavigationMenuIndicator,
  _w as NavigationMenuItem,
  Pw as NavigationMenuLink,
  zw as NavigationMenuList,
  Aw as NavigationMenuTrigger,
  Uu as NavigationMenuViewport,
  mu as OPAQUE_IMAGE_ERROR,
  F4 as PaymentGatewaySettings,
  V0 as PaymentGateways,
  r4 as PieChart,
  S$ as PkAlertError,
  H4 as PkAuroraBackdrop,
  qe as PkBadge,
  bk as PkBento,
  $$ as PkBottomNav,
  Jw as PkBoundary,
  a4 as PkBuilder,
  se as PkButton,
  Yw as PkCard,
  Gd as PkCheckboxList,
  da as PkCodeBox,
  zd as PkCodeInput,
  fc as PkColourPicker,
  K4 as PkConsoleBackdrop,
  S2 as PkCountUp,
  wk as PkCta,
  e4 as PkDeviceFrame,
  cf as PkDocument,
  Te as PkDropdown,
  q4 as PkEditorialBackdrop,
  _k as PkFaq,
  jk as PkFeatureGrid,
  be as PkFieldLabel,
  ea as PkFileUpload,
  Me as PkHeading,
  Rk as PkHero,
  Go as PkKeyValue,
  U4 as PkLandingSections,
  Kk as PkLogoCloud,
  wd as PkMarkdownInput,
  Ge as PkModal,
  St as PkMultiSelect,
  C$ as PkOtpInput,
  L4 as PkPasskeyRegister,
  M$ as PkPasswordInput,
  u2 as PkPricing,
  ub as PkQtyStepper,
  Tr as PkQueryBuilder,
  Hd as PkRadioGroup,
  t4 as PkRepeater,
  sk as PkReveal,
  ns as PkRichEditor,
  $e as PkSection,
  Le as PkSectionHeading,
  C2 as PkShowcase,
  H1 as PkSignaturePad,
  Fe as PkSkeleton,
  zt as PkSlideover,
  bc as PkSlider,
  w$ as PkSpinner,
  z2 as PkStats,
  ge as PkStatusBadge,
  ao as PkStepIndicator,
  D2 as PkSteps,
  jc as PkSwatchPreview,
  ec as PkTagsInput,
  K2 as PkTestimonials,
  pe as PkTextInput,
  mk as PkTiltCard,
  Ac as PkVisualSelect,
  Eg as PlanCard,
  b4 as PlanEditor,
  h4 as PlanGrid,
  d4 as PolarAreaChart,
  u4 as RadarChart,
  b$ as RecordActions,
  V4 as RecordForm,
  c$ as RelationCreateDialog,
  o$ as RelationPanel,
  Rv as STATUS_TONES,
  i4 as ScatterChart,
  ta as SchemaNode,
  v4 as SegmentedBar,
  P4 as SelectionBar,
  Eu as Separator,
  _4 as SetupChecklist,
  oa as ShadcnInput,
  yu as Sheet,
  _$ as SheetClose,
  $u as SheetContent,
  wu as SheetDescription,
  P$ as SheetFooter,
  Cu as SheetHeader,
  Su as SheetTitle,
  z$ as SheetTrigger,
  tv as ShortcutsWidget,
  A$ as Sidebar,
  O$ as SidebarContent,
  j$ as SidebarFooter,
  L$ as SidebarGroup,
  V$ as SidebarGroupAction,
  D$ as SidebarGroupContent,
  T$ as SidebarGroupLabel,
  E$ as SidebarHeader,
  F$ as SidebarInput,
  I$ as SidebarInset,
  N$ as SidebarMenu,
  R$ as SidebarMenuAction,
  U$ as SidebarMenuBadge,
  q$ as SidebarMenuButton,
  K$ as SidebarMenuItem,
  G$ as SidebarMenuSkeleton,
  W$ as SidebarMenuSub,
  Z$ as SidebarMenuSubButton,
  J$ as SidebarMenuSubItem,
  Y$ as SidebarProvider,
  X$ as SidebarRail,
  Q$ as SidebarSeparator,
  ew as SidebarTrigger,
  C4 as SignatureStudio,
  lt as Sparkline,
  Rw as Spinner,
  p4 as StatCard,
  g4 as StatListChart,
  B4 as StatStrip,
  De as Switch,
  sa as TRANSPARENT_IMAGE_HELP,
  z4 as TablePagination,
  A4 as TableShell,
  O4 as TableTabs,
  j4 as TableToolbar,
  o4 as ThemeToggle,
  Vu as Tooltip,
  Du as TooltipContent,
  H$ as TooltipProvider,
  Tu as TooltipTrigger,
  ca as TrendBadge,
  D4 as UnsavedBar,
  uu as alertVariants,
  hi as appearanceVars,
  vt as applyAppearance,
  xu as assertTransparentImage,
  He as buttonClasses,
  at as catalogFiltersActive,
  Q as cn,
  so as createOptionActionLabel,
  oo as createOptionTitle,
  fg as cycleLabel,
  Be as emptyCatalogFilters,
  no as fieldControl,
  u$ as fieldErrorsFromPayload,
  Kh as findExactSku,
  mg as formatPerkValue,
  Kr as hasBadgeValue,
  s$ as hasFieldControl,
  n4 as hasOptionPreview,
  ie as iconPath,
  hu as imageHasTransparency,
  x$ as initializeAppearance,
  pt as isDark,
  At as matchCatalogItem,
  Hu as navigationMenuTriggerStyle,
  xc as optionPreview,
  B$ as packWidgetColumns,
  pg as perkGranted,
  _t as readAppearance,
  ok as registerBuiltInFieldControls,
  we as registerFieldControl,
  it as registerOptionPreview,
  r$ as registeredFieldTypes,
  yc as registeredOptionPreviews,
  i$ as resetFieldControls,
  l4 as resetOptionPreviews,
  y$ as setAppearancePersister,
  Fu as sidebarMenuButtonVariants,
  Kv as statusBadgeVariant,
  qv as statusTone,
  d$ as toUrl,
  la as useAppearance,
  I4 as useColumnVisibility,
  N4 as useLiveUpdates,
  ck as usePointer,
  ma as useReveal,
  g$ as useSchemaColumns,
  d2 as useScrollProgress,
  Xw as useShellPageFooter,
  nt as useSidebar,
  R4 as useTenantTheme,
  T4 as useUnsavedChanges,
  G4 as version
};
//# sourceMappingURL=index.js.map
