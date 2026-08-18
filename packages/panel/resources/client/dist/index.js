import './ui.css';
import { defineComponent as A, ref as G, watch as de, useId as fa, computed as k, openBlock as t, createElementBlock as n, normalizeClass as j, createElementVNode as o, createCommentVNode as w, withModifiers as ce, unref as h, Fragment as z, renderList as L, createTextVNode as R, toDisplayString as m, createStaticVNode as pt, renderSlot as H, nextTick as Ce, onBeforeUnmount as ve, createBlock as T, Teleport as Ee, createVNode as E, Transition as ze, withCtx as O, onMounted as fe, normalizeStyle as ne, resolveDynamicComponent as Ae, resolveComponent as vt, withDirectives as ue, vModelSelect as Ve, vModelDynamic as ma, isRef as pa, vModelText as be, useTemplateRef as va, mergeProps as le, normalizeProps as ye, guardReactiveProps as Be, onErrorCaptured as ga, provide as Nt, inject as gt, defineAsyncComponent as At, vShow as je, useSlots as ha, markRaw as ba, withKeys as ya, reactive as He, useModel as Ke, mergeModels as Me, createSlots as xa, shallowRef as ka, watchEffect as $a } from "vue";
import { AlertCircle as wa, EyeOff as Ca, Eye as _a, X as ht, PanelLeftOpen as Sa, PanelLeftClose as Ma, Check as Rt, Circle as Ba, ChevronRight as Ut, MoreHorizontal as Pa, ChevronDown as za, Loader2Icon as Aa } from "@lucide/vue";
import { cva as bt } from "class-variance-authority";
import { clsx as ja } from "clsx";
import { twMerge as Oa } from "tailwind-merge";
import { useVModel as Ht, reactiveOmit as re, useMediaQuery as La, useEventListener as Va, defaultDocument as Da } from "@vueuse/core";
import { useForwardPropsEmits as me, DialogRoot as qt, DialogClose as Ie, DialogOverlay as yt, DialogPortal as xt, DialogContent as kt, DialogDescription as Kt, DialogTitle as Gt, DialogTrigger as Wt, createContext as Ta, Primitive as Ne, TooltipRoot as Fa, TooltipPortal as Ea, TooltipContent as Ia, TooltipArrow as Na, TooltipProvider as Zt, TooltipTrigger as Ra, Separator as Ua, DropdownMenuRoot as Ha, DropdownMenuCheckboxItem as qa, DropdownMenuItemIndicator as Jt, DropdownMenuPortal as Ka, DropdownMenuContent as Ga, DropdownMenuGroup as Wa, useForwardProps as xe, DropdownMenuItem as Za, DropdownMenuLabel as Ja, DropdownMenuRadioGroup as Ya, DropdownMenuRadioItem as Xa, DropdownMenuSeparator as Qa, DropdownMenuSub as en, DropdownMenuSubContent as tn, DropdownMenuSubTrigger as an, DropdownMenuTrigger as nn, AvatarRoot as ln, AvatarFallback as on, AvatarImage as sn, NavigationMenuViewport as rn, NavigationMenuRoot as un, NavigationMenuContent as dn, NavigationMenuIndicator as cn, NavigationMenuItem as fn, NavigationMenuLink as mn, NavigationMenuList as pn, NavigationMenuTrigger as vn, Label as gn, CheckboxRoot as hn, CheckboxIndicator as bn, SwitchRoot as yn, SwitchThumb as xn } from "reka-ui";
import { DropdownMenuPortal as y4 } from "reka-ui";
import { usePage as Yt, Link as kn } from "@inertiajs/vue3";
const $n = { class: "w-full border-collapse text-sm" }, wn = { class: "bg-background sticky top-0 z-10" }, Cn = { class: "bg-muted/50" }, _n = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Sn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Mn = ["id", "checked", "indeterminate"], Bn = ["onClick"], Pn = {
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
}, Ln = ["colspan"], Vn = ["aria-expanded", "dusk", "onClick"], Dn = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Tn = {
  key: 1,
  dusk: "group-header"
}, Fn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], En = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, In = {
  key: 1,
  class: "px-3 py-2"
}, Nn = ["id", "value", "checked", "disabled", "aria-label", "onChange"], Rn = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Un = ["aria-label", "onClick"], Hn = { class: "text-xs" }, qn = { key: 1 }, Kn = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Gn = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, Wn = { key: 0 }, Zn = { class: "text-muted-foreground block text-[10px] font-medium" }, Jn = { class: "font-semibold tabular-nums" }, Yn = { key: 1 }, Xn = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, Qn = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, el = { class: "font-medium" }, tl = {
  key: 0,
  class: "text-sm"
}, al = /* @__PURE__ */ A({
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
      const Y = U[a.groupBy.key];
      return Y == null || Y === "" ? "" : String(Y);
    }
    function s(U) {
      return a.groupBy ? U === 0 ? !0 : r(a.rows[U]) !== r(a.rows[U - 1]) : !1;
    }
    function i(U) {
      if (U.__groupTitle)
        return String(U.__groupTitle);
      const Y = a.groupBy ? U[a.groupBy.key] : null, ee = Y == null || Y === "" ? "None" : String(Y);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? ee : `${a.groupBy.label}: ${ee}`;
    }
    const u = G(/* @__PURE__ */ new Set()), d = G(/* @__PURE__ */ new Set());
    function f(U) {
      return a.groupBy?.collapsible ? u.value.has(U) : !1;
    }
    function b(U) {
      if (!a.groupBy?.collapsible)
        return;
      const Y = new Set(d.value);
      Y.add(U), d.value = Y;
      const ee = new Set(u.value);
      ee.has(U) ? ee.delete(U) : ee.add(U), u.value = ee;
    }
    function p(U) {
      return a.groupBy?.collapsible ? !f(r(a.rows[U])) : !0;
    }
    de(
      () => a.rows,
      (U) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const Y = new Set(u.value);
        for (const ee of U) {
          const ae = r(ee);
          ae !== "" && !d.value.has(ae) && Y.add(ae);
        }
        u.value = Y;
      },
      { immediate: !0 }
    );
    const y = G(null), S = G(null);
    function $(U, Y) {
      y.value = U, Y.dataTransfer?.setData("text/plain", String(U)), Y.dataTransfer && (Y.dataTransfer.effectAllowed = "move");
    }
    function _() {
      y.value = null, S.value = null;
    }
    function x(U) {
      return y.value === null || S.value !== U ? "" : y.value > U ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function v(U, Y) {
      y.value !== null && (Y.preventDefault(), S.value = U);
    }
    function g(U) {
      const Y = y.value;
      if (y.value = null, S.value = null, Y === null || Y === U)
        return;
      const ee = a.rows.map((oe) => oe[a.rowKey]), [ae] = ee.splice(Y, 1);
      ee.splice(U, 0, ae), c("reorder", ee);
    }
    const c = l;
    function C(U, Y) {
      !a.rowClickable || a.reordering || Y.button !== 0 || Y.metaKey || Y.ctrlKey || Y.shiftKey || Y.altKey || Y.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", U);
    }
    const M = G(null), P = fa(), W = k(() => a.columns.filter((U) => !a.hidden?.has(U.key)));
    function I(U) {
      const Y = U[a.rowKey];
      return Y == null || Y === "" ? null : Y;
    }
    function J(U) {
      const Y = I(U);
      return Y !== null && !!a.selected?.has(Y);
    }
    function V(U) {
      const Y = I(U);
      Y !== null && c("toggle-row", Y);
    }
    const F = k(
      () => a.rows.map((U) => I(U)).filter((U) => U !== null)
    ), Z = k(
      () => F.value.length > 0 && F.value.every((U) => a.selected?.has(U))
    ), te = k(
      () => !Z.value && F.value.some((U) => a.selected?.has(U))
    );
    function N(U) {
      return U.sortKey ?? U.key;
    }
    function D(U) {
      return a.sort === N(U);
    }
    async function Q(U, Y, ee) {
      try {
        await navigator.clipboard.writeText(String(ee)), M.value = `${U}-${Y.key}`, setTimeout(() => M.value = null, 1200);
      } catch {
      }
    }
    const B = k(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function K(U) {
      return a.summaries?.[U] ?? null;
    }
    function q(U) {
      const Y = a.summaries?.[U], ee = a.summaryValues?.[U];
      if (!Y)
        return "";
      if (ee == null)
        return "-";
      const ae = Y.divideBy ? ee / Y.divideBy : ee, oe = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: Y.decimals,
        maximumFractionDigits: Y.decimals
      }).format(ae);
      return `${Y.prefix ?? ""}${oe}${Y.suffix ?? ""}`;
    }
    return (U, Y) => (t(), n("div", {
      class: j(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", $n, [
        o("thead", wn, [
          o("tr", Cn, [
            e.reordering ? (t(), n("th", _n)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Sn, [
              o("input", {
                id: `${h(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: Z.value,
                indeterminate: te.value,
                "aria-label": "Select all rows on this page",
                onClick: Y[0] || (Y[0] = ce(() => {
                }, ["stop"])),
                onChange: Y[1] || (Y[1] = ce((ee) => c("toggle-page", !Z.value), ["stop"]))
              }, null, 40, Mn)
            ])) : w("", !0),
            (t(!0), n(z, null, L(W.value, (ee) => (t(), n("th", {
              key: ee.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              ee.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ae) => c("sort", N(ee))
              }, [
                R(m(ee.label) + " ", 1),
                D(ee) ? (t(), n("span", Pn, m(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", zn, "↕"))
              ], 8, Bn)) : (t(), n("span", An, m(ee.label), 1))
            ]))), 128)),
            U.$slots.actions ? (t(), n("th", jn, [...Y[3] || (Y[3] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : w("", !0)
          ])
        ]),
        o("tbody", {
          class: j(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, L(e.rows, (ee, ae) => (t(), n(z, {
            key: I(ee) ?? `row-${ae}`
          }, [
            e.groupBy && s(ae) ? (t(), n("tr", On, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !f(r(ee)),
                  dusk: `group-header-${r(ee) || "none"}`,
                  onClick: (oe) => b(r(ee))
                }, [
                  o("span", Dn, m(f(r(ee)) ? "▸" : "▾"), 1),
                  R(" " + m(i(ee)), 1)
                ], 8, Vn)) : (t(), n("span", Tn, m(i(ee)), 1))
              ], 8, Ln)
            ])) : w("", !0),
            p(ae) ? (t(), n("tr", {
              key: 1,
              class: j(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                J(ee) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                y.value === ae ? "opacity-40" : "",
                x(ae),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (oe) => $(ae, oe),
              onDragover: (oe) => v(ae, oe),
              onDrop: ce((oe) => g(ae), ["prevent"]),
              onDragend: _,
              onContextmenu: (oe) => c("row-contextmenu", ee, oe),
              onClick: (oe) => C(ee, oe)
            }, [
              e.reordering ? (t(), n("td", En, [...Y[4] || (Y[4] = [
                pt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-0d8c8f99><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-0d8c8f99><circle cx="9" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="18" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="18" r="1.5" data-v-0d8c8f99></circle></svg></span>', 1)
              ])])) : w("", !0),
              e.selectable && !e.reordering ? (t(), n("td", In, [
                o("input", {
                  id: `${h(P)}-row-${I(ee) ?? ae}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: I(ee) ?? void 0,
                  checked: J(ee),
                  disabled: I(ee) === null,
                  "aria-label": I(ee) === null ? "This row has no id and cannot be selected" : `Select row ${I(ee)}`,
                  onClick: Y[2] || (Y[2] = ce(() => {
                  }, ["stop"])),
                  onChange: ce((oe) => V(ee), ["stop"])
                }, null, 40, Nn)
              ])) : w("", !0),
              (t(!0), n(z, null, L(W.value, (oe) => (t(), n("td", {
                key: oe.key,
                class: j(["px-3 py-2 whitespace-nowrap", oe.cellClass])
              }, [
                H(U.$slots, `cell:${oe.key}`, {
                  row: ee,
                  value: ee[oe.key],
                  column: oe
                }, () => [
                  oe.copyable ? (t(), n("span", Rn, [
                    R(m(ee[oe.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${oe.label.toLowerCase()}`,
                      onClick: (Le) => Q(String(ee[e.rowKey]), oe, ee[oe.key])
                    }, [
                      o("span", Hn, m(M.value === `${ee[e.rowKey]}-${oe.key}` ? "✓" : "⧉"), 1)
                    ], 8, Un)
                  ])) : (t(), n("span", qn, m(ee[oe.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              U.$slots.actions ? (t(), n("td", Kn, [
                H(U.$slots, "actions", { row: ee }, void 0, !0)
              ])) : w("", !0)
            ], 42, Fn)) : w("", !0)
          ], 64))), 128))
        ], 2),
        B.value ? (t(), n("tfoot", Gn, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Wn)) : w("", !0),
            (t(!0), n(z, null, L(e.columns, (ee) => (t(), n(z, {
              key: `s-${ee.key}`
            }, [
              e.hidden?.has(ee.key) ? w("", !0) : (t(), n("td", {
                key: 0,
                class: j(["px-3 py-2 align-top text-sm whitespace-nowrap", ee.cellClass])
              }, [
                K(ee.key) ? (t(), n(z, { key: 0 }, [
                  o("span", Zn, m(K(ee.key).label), 1),
                  o("span", Jn, m(q(ee.key)), 1)
                ], 64)) : w("", !0)
              ], 2))
            ], 64))), 128)),
            U.$slots.actions ? (t(), n("td", Yn)) : w("", !0)
          ])
        ])) : w("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", Xn, [
        Y[5] || (Y[5] = o("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        H(U.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", Qn, [
        o("p", el, m(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", tl, m(e.emptyHint), 1)) : w("", !0)
      ])) : w("", !0)
    ], 2));
  }
}), $t = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, nl = /* @__PURE__ */ $t(al, [["__scopeId", "data-v-0d8c8f99"]]), ll = ["aria-label"], ol = { class: "border-b px-5 py-4" }, sl = { class: "text-base font-semibold" }, rl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, il = { class: "px-5 py-4" }, ul = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, it = /* @__PURE__ */ A({
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
    function b(p) {
      if (!a.open)
        return;
      if (p.key === "Escape" && !a.busy) {
        p.stopPropagation(), r("close");
        return;
      }
      if (p.key !== "Tab" || !s.value)
        return;
      const y = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (y.length === 0)
        return;
      const S = y[0], $ = y[y.length - 1];
      p.shiftKey && document.activeElement === S ? (p.preventDefault(), $.focus()) : !p.shiftKey && document.activeElement === $ && (p.preventDefault(), S.focus());
    }
    return de(
      () => a.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", b), Ce(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", b), i?.focus(), i = null);
      }
    ), ve(() => document.removeEventListener("keydown", b)), (p, y) => (t(), T(Ee, { to: "body" }, [
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
              o("div", ol, [
                o("h2", sl, m(e.title), 1),
                e.description ? (t(), n("p", rl, m(e.description), 1)) : w("", !0)
              ]),
              o("div", il, [
                H(p.$slots, "default")
              ]),
              o("div", ul, [
                H(p.$slots, "footer")
              ])
            ], 8, ll)
          ], 32)) : w("", !0)
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
function ie(e) {
  return e ? at[e] ?? at.dot : at.dot;
}
const dl = 160, Te = /* @__PURE__ */ A({
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
    function b(C) {
      !a.dismissOnPanelClick || C.target?.closest("input, select, textarea, label, [data-keep-open]") || _();
    }
    async function p() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await Ce(), x());
    }
    function y() {
      f = setTimeout(_, 180);
    }
    async function S() {
      d.value = null, r.value = !r.value, r.value && (await Ce(), x());
    }
    async function $(C, M) {
      d.value = { x: C, y: M }, r.value = !0, await Ce(), x();
    }
    function _() {
      r.value = !1, d.value = null;
    }
    function x() {
      const C = s.value, M = i.value;
      if (!C || !M)
        return;
      const P = M.getBoundingClientRect(), W = 8, I = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : C.getBoundingClientRect();
      let J, V;
      if (a.placement === "bottom")
        J = I.bottom + a.offset, J + P.height > window.innerHeight - W && I.top - P.height - a.offset > W && (J = I.top - P.height - a.offset), V = a.align === "end" && !d.value ? I.right - P.width : I.left;
      else {
        J = I.top;
        const F = a.placement === "right", Z = I.right + a.offset + P.width < window.innerWidth - W, te = I.left - a.offset - P.width > W;
        V = (F ? Z || !te : !te && Z) ? I.right + a.offset : I.left - a.offset - P.width;
      }
      V = Math.min(Math.max(W, V), window.innerWidth - P.width - W), J = Math.min(Math.max(W, J), window.innerHeight - P.height - W), u.value = { top: J, left: V, minWidth: Math.max(I.width, dl) };
    }
    function v(C) {
      if (!r.value)
        return;
      const M = C.target;
      s.value?.contains(M) || i.value?.contains(M) || (M instanceof Element ? M : M.parentElement)?.closest("[data-pk-overlay]") || _();
    }
    function g(C) {
      C.key === "Escape" && r.value && (C.stopPropagation(), _());
    }
    function c() {
      if (r.value) {
        if (d.value) {
          _();
          return;
        }
        x();
      }
    }
    return fe(() => {
      document.addEventListener("pointerdown", v), document.addEventListener("keydown", g), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), ve(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", g), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), l({ close: _, openAt: $ }), (C, M) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: M[2] || (M[2] = (P) => e.hoverable && p()),
      onPointerleave: M[3] || (M[3] = (P) => e.hoverable && y())
    }, [
      o("div", { onClick: S }, [
        H(C.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Ee, { to: "body" }, [
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
              class: j([
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
              onPointerenter: M[0] || (M[0] = (P) => e.hoverable && p()),
              onPointerleave: M[1] || (M[1] = (P) => e.hoverable && y()),
              onClick: b
            }, [
              H(C.$slots, "panel", { close: _ })
            ], 38)) : w("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), cl = ["disabled"], fl = { class: "py-0.5" }, ml = ["disabled", "onClick"], pl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vl = ["d"], gl = ["disabled"], hl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bl = ["d"], yl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, xl = ["disabled", "onClick"], kl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $l = ["d"], wl = { class: "text-muted-foreground text-sm" }, Cl = { class: "text-foreground font-medium tabular-nums" }, _l = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Sl = ["disabled"], Ml = { class: "text-muted-foreground text-sm" }, Bl = { class: "text-foreground font-medium tabular-nums" }, Pl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, zl = ["disabled"], P2 = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(null), i = G(!1), u = k(() => a.allMatching ? a.total : a.count), d = k(() => u.value !== void 0), f = k(() => d.value && u.value === 0), b = k(() => a.actions.filter((g) => !g.destructive)), p = k(() => a.actions.filter((g) => g.destructive)), y = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function S(g) {
      return y[g.color ?? "gray"] ?? y.gray;
    }
    function $(g) {
      if (g.confirmation) {
        s.value = g;
        return;
      }
      r("run", g.key);
    }
    function _() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function x() {
      i.value = !1, r("export");
    }
    const v = (g) => new Intl.NumberFormat().format(g);
    return (g, c) => (t(), n(z, null, [
      E(Te, null, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...c[5] || (c[5] = [
            R(" Bulk actions ", -1),
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
          ])], 8, cl)
        ]),
        panel: O(() => [
          o("div", fl, [
            (t(!0), n(z, null, L(b.value, (C) => (t(), n("button", {
              key: C.key,
              type: "button",
              role: "menuitem",
              class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", S(C)]),
              disabled: e.busy,
              onClick: (M) => $(C)
            }, [
              (t(), n("svg", pl, [
                o("path", {
                  d: h(ie)(C.icon)
                }, null, 8, vl)
              ])),
              R(" " + m(C.label), 1)
            ], 10, ml))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (C) => i.value = !0)
            }, [
              (t(), n("svg", hl, [
                o("path", {
                  d: h(ie)("download")
                }, null, 8, bl)
              ])),
              c[6] || (c[6] = R(" Export CSV ", -1))
            ], 8, gl)) : w("", !0),
            p.value.length ? (t(), n("div", yl, [
              (t(!0), n(z, null, L(p.value, (C) => (t(), n("button", {
                key: C.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (M) => $(C)
              }, [
                (t(), n("svg", kl, [
                  o("path", {
                    d: h(ie)(C.icon ?? "trash")
                  }, null, 8, $l)
                ])),
                R(" " + m(C.label), 1)
              ], 8, xl))), 128))
            ])) : w("", !0)
          ])
        ]),
        _: 1
      }),
      E(it, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: c[2] || (c[2] = (C) => s.value = null)
      }, {
        footer: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[1] || (c[1] = (C) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: j([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || f.value,
            onClick: _
          }, m(s.value?.label), 11, Sl)
        ]),
        default: O(() => [
          o("p", wl, [
            c[7] || (c[7] = R(" This will affect ", -1)),
            o("span", Cl, [
              d.value ? (t(), n(z, { key: 1 }, [
                R(m(v(u.value)) + " record" + m(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            c[8] || (c[8] = R(" . ", -1))
          ]),
          f.value ? (t(), n("p", _l, " Nothing matches the current filters - there is nothing to " + m(s.value?.label?.toLowerCase()) + ". ", 1)) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(it, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: c[4] || (c[4] = (C) => i.value = !1)
      }, {
        footer: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[3] || (c[3] = (C) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || f.value,
            onClick: x
          }, " Export CSV ", 8, zl)
        ]),
        default: O(() => [
          o("p", Ml, [
            c[9] || (c[9] = R(" This will export ", -1)),
            o("span", Bl, [
              d.value ? (t(), n(z, { key: 1 }, [
                R(m(v(u.value)) + " record" + m(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            c[10] || (c[10] = R(" . ", -1))
          ]),
          f.value ? (t(), n("p", Pl, " Nothing matches the current filters - there is nothing to export. ")) : w("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Al = { class: "bg-card overflow-hidden rounded-lg border" }, jl = { class: "pk-scroll w-full overflow-x-auto" }, Ol = { class: "w-full border-collapse text-sm" }, Ll = { class: "bg-muted/40" }, Vl = { class: "divide-y" }, Dl = { key: 0 }, Tl = ["colspan"], Fl = { key: 1 }, El = ["colspan"], Il = ["href"], Nl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Rl = ["disabled"], Ul = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, Hl = ["href"], z2 = /* @__PURE__ */ A({
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
    return (u, d) => (t(), n("div", Al, [
      o("div", jl, [
        o("table", Ol, [
          o("thead", Ll, [
            o("tr", null, [
              (t(!0), n(z, null, L(s.value, (f) => (t(), n("th", {
                key: f.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, m(f.label), 1))), 128))
            ])
          ]),
          o("tbody", Vl, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", Dl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, Tl)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", Fl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, m(e.emptyText), 9, El)
            ])) : w("", !0),
            (t(!0), n(z, null, L(e.rows, (f, b) => (t(), n("tr", {
              key: f.id ?? b,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(z, null, L(s.value, (p) => (t(), n("td", {
                key: p.key,
                class: j(["px-3 py-2 whitespace-nowrap", [
                  p.mono ? "font-mono text-xs" : "",
                  p.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                H(u.$slots, `cell:${p.key}`, {
                  row: f,
                  value: f[p.key],
                  column: p
                }, () => [
                  e.recordBase && f.id != null && p === s.value[0] ? (t(), n("a", {
                    key: 0,
                    href: `${e.recordBase}/${f.id}`,
                    class: "text-foreground underline-offset-2 hover:underline"
                  }, m(i(p, f[p.key])), 9, Il)) : (t(), n(z, { key: 1 }, [
                    R(m(i(p, f[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", Nl, [
        o("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (f) => r("load", e.nextCursor))
        }, m(e.loading ? "Loading…" : "Load more"), 9, Rl)
      ])) : e.capped ? (t(), n("p", Ul, [
        R(" Showing the first " + m(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), n("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, Hl)) : (t(), n(z, { key: 1 }, [
          R("Open the full list to search or filter the rest.")
        ], 64))
      ])) : w("", !0)
    ]));
  }
}), ql = ["title"], Kl = ["aria-label"], Gl = ["d"], Wl = { class: "sr-only" }, Zl = /* @__PURE__ */ A({
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
    return (b, p) => (t(), n("span", {
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
        o("path", { d: u.value }, null, 8, Gl)
      ], 10, Kl)),
      o("span", Wl, m(f.value), 1)
    ], 8, ql));
  }
}), Jl = ["src"], Yl = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Xl = /* @__PURE__ */ A({
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
    de(
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
      class: j(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (f) => a.value = !0)
      }, null, 40, Jl)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        R(m(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Yl, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : w("", !0)
    ], 2));
  }
}), Ql = {
  key: 0,
  class: "text-muted-foreground"
}, eo = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, to = {
  key: 0,
  class: "font-mono text-xs"
}, ao = {
  key: 1,
  class: "sr-only"
}, no = /* @__PURE__ */ A({
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
    return (s, i) => r.value === null ? (t(), n("span", Ql, "-")) : (t(), n("span", eo, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", to, m(r.value), 1)) : (t(), n("span", ao, m(r.value), 1))
    ]));
  }
}), lo = { class: "inline-flex items-center" }, oo = ["checked", "aria-label"], so = { class: "sr-only" }, A2 = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("span", lo, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, oo),
      o("span", so, m(r.value), 1)
    ]));
  }
}), ro = {
  key: 0,
  class: "text-muted-foreground"
}, io = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, j2 = /* @__PURE__ */ A({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = k(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", io, m(a.value), 1)) : (t(), n("span", ro, "—"));
  }
}), uo = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", co = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, fo = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Xt(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [uo, co[l], fo[a], e.class].filter(Boolean).join(" ");
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
      () => Xt({ variant: l.variant, size: l.size, class: l.class })
    ), r = k(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(Ae(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: j(a.value)
    }, {
      default: O(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), mo = { class: "flex items-center gap-2" }, po = ["onUpdate:modelValue", "onChange"], vo = ["value"], go = ["onUpdate:modelValue"], ho = ["value"], bo = ["onUpdate:modelValue"], yo = ["onUpdate:modelValue", "multiple"], xo = ["value"], ko = ["onUpdate:modelValue", "type"], $o = ["aria-label", "onClick"], wo = { class: "flex items-center gap-2" }, Co = /* @__PURE__ */ A({
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
    de(
      () => a.modelValue,
      (c) => {
        i.value = c ? structuredClone(c) : s();
      }
    );
    const u = (c) => "rules" in c, d = k(() => Object.keys(a.fields));
    function f(c) {
      const C = c ? a.fields[c]?.kind : void 0;
      return C ? a.operators[C] ?? [] : [];
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
    function y() {
      const c = d.value[0];
      i.value.rules.push({
        field: c,
        operator: f(c)[0],
        value: void 0
      }), p();
    }
    function S() {
      i.value.rules.push(s()), p();
    }
    function $(c) {
      i.value.rules.splice(c, 1), p();
    }
    function _(c) {
      c.operator = f(c.field)[0], c.value = void 0, p();
    }
    const x = k(() => a.depth + 1 < a.maxDepth);
    function v() {
      i.value = s(), p(), r("apply", null);
    }
    function g() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, C) => {
      const M = vt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: j(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", mo, [
          ue(o("select", {
            "onUpdate:modelValue": C[0] || (C[0] = (P) => i.value.logic = P),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...C[1] || (C[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ve, i.value.logic]
          ]),
          C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, L(i.value.rules, (P, W) => (t(), n("div", {
          key: W,
          class: "flex items-start gap-2"
        }, [
          u(P) ? (t(), T(M, {
            key: 0,
            modelValue: i.value.rules[W],
            "onUpdate:modelValue": [(I) => i.value.rules[W] = I, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            ue(o("select", {
              "onUpdate:modelValue": (I) => P.field = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (I) => _(P)
            }, [
              (t(!0), n(z, null, L(d.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, m(e.fields[I].label), 9, vo))), 128))
            ], 40, po), [
              [Ve, P.field]
            ]),
            ue(o("select", {
              "onUpdate:modelValue": (I) => P.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(z, null, L(f(P.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, m(b[I] ?? I), 9, ho))), 128))
            ], 40, go), [
              [Ve, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? ue((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (I) => P.value = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...C[3] || (C[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, bo)), [
              [Ve, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? ue((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (I) => P.value = I,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(z, null, L(e.fields[P.field].options, (I) => (t(), n("option", {
                key: I,
                value: I
              }, m(I), 9, xo))), 128))
            ], 40, yo)), [
              [Ve, P.value]
            ]) : ue((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (I) => P.value = I,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, ko)), [
              [ma, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(P) ? "group" : "rule"}`,
            onClick: (I) => $(W)
          }, " × ", 8, $o)
        ]))), 128)),
        o("div", wo, [
          E(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: y
          }, {
            default: O(() => [...C[4] || (C[4] = [
              R("Add rule", -1)
            ])]),
            _: 1
          }),
          x.value ? (t(), T(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: S
          }, {
            default: O(() => [...C[5] || (C[5] = [
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : w("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            C[8] || (C[8] = o("span", { class: "flex-1" }, null, -1)),
            E(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: O(() => [...C[6] || (C[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(se, {
              type: "button",
              size: "sm",
              onClick: g
            }, {
              default: O(() => [...C[7] || (C[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : w("", !0)
        ])
      ], 2);
    };
  }
}), _o = {
  key: 0,
  class: "font-mono text-xs"
}, So = {
  key: 1,
  class: "text-muted-foreground"
}, Mo = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, O2 = /* @__PURE__ */ A({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = k(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", _o, m(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", So, "—")) : (t(), n("span", Mo, m(a.value.length) + " " + m(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Bo = ["aria-checked", "aria-label", "title", "disabled"], Po = ["value", "disabled"], zo = ["value"], L2 = /* @__PURE__ */ A({
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
    function f(b) {
      const p = b.target.value;
      p !== String(a.value ?? "") && r("change", p);
    }
    return (b, p) => e.type === "toggle" ? (t(), n("button", {
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
    ], 10, Bo)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = ce(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), n(z, null, L(e.options, (y, S) => (t(), n("option", {
        key: S,
        value: S
      }, m(y), 9, zo))), 128))
    ], 40, Po));
  }
}), Ao = ["data-variant"], jo = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ue = /* @__PURE__ */ A({
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
      () => [jo, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: j(r.value)
    }, [
      H(s.$slots, "default")
    ], 10, Ao));
  }
}), wt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Oo(e) {
  return e != null && e !== "";
}
function Lo(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function V2(e) {
  const l = k(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Lo(s)
    }))
  ), a = k(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = a.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), f = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return wt[f] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const Vo = ["disabled", "aria-label", "aria-busy"], Do = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, To = ["d"], Fo = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Eo = ["disabled", "onClick"], Io = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, No = ["d"], Ro = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, D2 = /* @__PURE__ */ A({
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
    function d(y) {
      return typeof y == "boolean" ? y ? "1" : "" : String(y ?? "");
    }
    function f(y) {
      const S = a.colors[d(y)] ?? a.defaultColor ?? "neutral";
      return wt[S] ?? "outline";
    }
    function b(y) {
      return a.options[y] ?? y;
    }
    function p(y, S) {
      if (s.value || y === i.value) {
        S();
        return;
      }
      r("change", y), S();
    }
    return (y, S) => (t(), n("div", {
      onClick: S[0] || (S[0] = ce(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(Ue, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: O(() => [
          R(m(b(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(Te, {
        key: 0,
        align: "start"
      }, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            E(Ue, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: O(() => [
                R(m(b(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Do, [
              o("path", {
                d: h(ie)("chevron-down")
              }, null, 8, To)
            ]))
          ], 8, Vo)
        ]),
        panel: O(({ close: $ }) => [
          o("div", Fo, m(u.value), 1),
          (t(!0), n(z, null, L(e.options, (_, x) => (t(), n("button", {
            key: x,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (v) => p(String(x), $)
          }, [
            E(Ue, {
              variant: f(x),
              class: "capitalize"
            }, {
              default: O(() => [
                R(m(_), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(x) === i.value ? (t(), n("svg", Io, [
              o("path", {
                d: h(ie)("check")
              }, null, 8, No)
            ])) : (t(), n("span", Ro))
          ], 8, Eo))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Uo = { class: "flex items-center justify-end" }, Ho = ["aria-label"], qo = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ko = ["d"], Go = ["href"], Wo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Zo = ["d"], Jo = ["disabled", "onClick"], Yo = ["d"], Xo = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Qo = ["disabled", "onClick"], es = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ts = ["d"], T2 = /* @__PURE__ */ A({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = G(null), u = G(null), d = k(() => r.groups.flatMap((v) => v.actions)), f = k(() => d.value.filter((v) => !v.destructive)), b = k(() => d.value.filter((v) => v.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function y(v) {
      return p[v.color ?? "gray"] ?? p.gray;
    }
    const S = k(() => d.value.length === 0);
    function $(v) {
      s("run", v);
    }
    function _(v) {
      S.value || (v.preventDefault(), i.value?.openAt(v.clientX, v.clientY));
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
      const c = g.indexOf(document.activeElement), C = v.key === "ArrowDown" ? 1 : -1, M = (c + C + g.length) % g.length;
      g[M]?.focus();
    }
    return l({ openContextMenu: _ }), (v, g) => (t(), n("div", Uo, [
      S.value ? w("", !0) : (t(), T(Te, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), n("svg", qo, [
              o("path", {
                d: h(ie)("more-vertical")
              }, null, 8, Ko)
            ]))
          ], 8, Ho)
        ]),
        panel: O(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: x
          }, [
            (t(!0), n(z, null, L(f.value, (c) => (t(), n(z, {
              key: c.key
            }, [
              c.link ? (t(), n("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", y(c)])
              }, [
                (t(), n("svg", Wo, [
                  o("path", {
                    d: h(ie)(c.icon)
                  }, null, 8, Zo)
                ])),
                R(" " + m(c.label), 1)
              ], 10, Go)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", y(c)]),
                disabled: e.busy === c.key,
                onClick: (C) => $(c)
              }, [
                (t(), n("svg", {
                  class: j(["size-4 shrink-0", e.busy === c.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: h(ie)(c.icon)
                  }, null, 8, Yo)
                ], 2)),
                R(" " + m(c.label), 1)
              ], 10, Jo))
            ], 64))), 128)),
            b.value.length ? (t(), n("div", Xo, [
              (t(!0), n(z, null, L(b.value, (c) => (t(), n("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (C) => $(c)
              }, [
                (t(), n("svg", es, [
                  o("path", {
                    d: h(ie)(c.icon ?? "trash")
                  }, null, 8, ts)
                ])),
                R(" " + m(c.label), 1)
              ], 8, Qo))), 128))
            ])) : w("", !0)
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
}, Je = 12, Ye = 20, as = [0, 0.25, 0.5, 0.75, 1], Ct = "alxtexhpanel.appearance", we = {
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
}, Pe = G({ ...we });
let jt = !1;
const ns = "alxtexhpanel.appearance.vars";
function ct(e) {
  return e.theme === "dark";
}
const Ot = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function ls(e) {
  const l = ut[e.primary] ?? ut.slate, a = dt[e.surface] ?? dt.neutral, r = a.chroma, s = a.hue, u = ct(e) ? {
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
    "--pk-row-padding": Ot[e.density] ?? Ot.comfortable
  };
}
function _t() {
  if (typeof window > "u")
    return { ...we };
  try {
    const e = localStorage.getItem(Ct);
    if (!e)
      return { ...we };
    const l = { ...we, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = we.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? we.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < Je || l.fontSize > Ye) && (l.fontSize = we.fontSize), l;
  } catch {
    return { ...we };
  }
}
function F2(e) {
  const l = _t(), a = e ? { ...l, ...e } : l;
  if (Pe.value = a, ft(a), e)
    try {
      localStorage.setItem(Ct, JSON.stringify(a));
    } catch {
    }
}
let Qt = null;
function E2(e) {
  Qt = e;
}
let ea = {};
function os(e) {
  if (ea = e, !(typeof document > "u") && !_t().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function ft(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...ls(e), ...e.primaryChosen ? {} : ea };
  l.classList.toggle("dark", ct(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      ns,
      JSON.stringify({ dark: ct(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function ta() {
  function e(r) {
    ft(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Pe.value = { ...Pe.value, ...r, ...s };
    try {
      localStorage.setItem(Ct, JSON.stringify(Pe.value));
    } catch {
    }
    e(Pe.value), Qt?.({ ...r, ...s });
  }
  function a() {
    l({ ...we });
  }
  return fe(() => {
    jt || (jt = !0, Pe.value = _t(), ft(Pe.value));
  }), {
    appearance: k(() => Pe.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: ut,
    SURFACE_TINTS: dt,
    FONT_SIZE_MIN: Je,
    FONT_SIZE_MAX: Ye,
    RADIUS_OPTIONS: as
  };
}
const ss = { class: "flex items-center justify-between border-b px-4 py-3" }, rs = { class: "flex items-center gap-2" }, is = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, us = { class: "flex flex-col gap-2" }, ds = { class: "grid grid-cols-8 gap-2" }, cs = ["title", "aria-label", "aria-pressed", "onClick"], fs = { class: "flex flex-col gap-2" }, ms = { class: "grid grid-cols-8 gap-2" }, ps = ["title", "aria-label", "aria-pressed", "onClick"], vs = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, gs = { class: "flex flex-col gap-2" }, hs = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, bs = ["aria-pressed", "aria-label", "onClick"], ys = { class: "text-sm font-semibold" }, xs = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ks = ["onClick"], $s = { class: "flex flex-col gap-2" }, ws = { class: "flex items-center justify-between" }, Cs = { class: "text-muted-foreground text-xs tabular-nums" }, _s = { class: "flex items-center gap-2" }, Ss = ["disabled"], Ms = ["min", "max", "value"], Bs = ["disabled"], I2 = /* @__PURE__ */ A({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = ta(), d = G(!1), f = k(() => l.value.sidebarSide === "right"), b = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], y = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], S = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], $ = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], _ = [
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
        onClick: g[0] || (g[0] = (c) => d.value = !0)
      }, [...g[7] || (g[7] = [
        pt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Ee, { to: "body" }, [
        E(ze, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: O(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: g[1] || (g[1] = (c) => d.value = !1)
            })) : w("", !0)
          ]),
          _: 1
        }),
        E(ze, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": f.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": f.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: O(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: j(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", f.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", ss, [
                g[9] || (g[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", rs, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: g[2] || (g[2] = //@ts-ignore
                    (...c) => h(r) && h(r)(...c))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: g[3] || (g[3] = (c) => d.value = !1)
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
              o("div", is, [
                o("section", us, [
                  g[11] || (g[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", ds, [
                    (t(!0), n(z, null, L(h(s), (c, C) => (t(), n("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": h(l).primary === C,
                      onClick: (M) => h(a)({ primary: C })
                    }, [
                      h(l).primary === C ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ne({ color: c.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...g[10] || (g[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : w("", !0)
                    ], 12, cs))), 128))
                  ])
                ]),
                o("section", fs, [
                  g[13] || (g[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", ms, [
                    (t(!0), n(z, null, L(h(i), (c, C) => (t(), n("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: x(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": h(l).surface === C,
                      onClick: (M) => h(a)({ surface: C })
                    }, [
                      h(l).surface === C ? (t(), n("svg", vs, [...g[12] || (g[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : w("", !0)
                    ], 12, ps))), 128))
                  ])
                ]),
                o("section", gs, [
                  g[14] || (g[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", hs, [
                    (t(!0), n(z, null, L(h(u), (c) => (t(), n("button", {
                      key: c,
                      type: "button",
                      class: j([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        h(l).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": h(l).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (C) => h(a)({ radius: c })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      R(" " + m(c), 1)
                    ], 10, bs))), 128))
                  ])
                ]),
                (t(!0), n(z, null, L([
                  { label: "Color scheme", key: "theme", options: b },
                  { label: "Card style", key: "cardStyle", options: y },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: S },
                  { label: "Content layout", key: "contentLayout", options: $ },
                  { label: "Menu style", key: "menuStyle", options: _ }
                ], (c) => (t(), n("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", ys, m(c.label), 1),
                  o("div", xs, [
                    (t(!0), n(z, null, L(c.options, (C) => (t(), n("button", {
                      key: String(C.value),
                      type: "button",
                      class: j([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        h(l)[c.key] === C.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (M) => h(a)({ [c.key]: C.value })
                    }, m(C.label), 11, ks))), 128))
                  ])
                ]))), 128)),
                o("section", $s, [
                  o("div", ws, [
                    g[15] || (g[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Cs, m(h(l).fontSize) + "px", 1)
                  ]),
                  o("div", _s, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: h(l).fontSize <= h(Je),
                      "aria-label": "Decrease font size",
                      onClick: g[4] || (g[4] = (c) => h(a)({ fontSize: h(l).fontSize - 1 }))
                    }, " − ", 8, Ss),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: h(Je),
                      max: h(Ye),
                      value: h(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: g[5] || (g[5] = (c) => h(a)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, Ms),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: h(l).fontSize >= h(Ye),
                      "aria-label": "Increase font size",
                      onClick: g[6] || (g[6] = (c) => h(a)({ fontSize: h(l).fontSize + 1 }))
                    }, " + ", 8, Bs)
                  ])
                ])
              ])
            ], 2)) : w("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), Ps = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, zs = { class: "flex items-stretch" }, As = ["href", "aria-current"], js = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Os = ["d"], Ls = { class: "w-full truncate text-center" }, Vs = {
  key: 0,
  class: "flex-1"
}, Ds = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ts = ["d"], Fs = { class: "w-full truncate text-center" }, nt = 5, N2 = /* @__PURE__ */ A({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(
      () => a.items.length <= nt ? a.items : a.items.slice(0, nt - 1)
    ), i = k(() => a.items.length > nt);
    function u(d) {
      return d === "/" ? a.current === "/" : a.current === d || a.current.startsWith(`${d}/`);
    }
    return (d, f) => (t(), n("nav", Ps, [
      o("ul", zs, [
        (t(!0), n(z, null, L(s.value, (b) => (t(), n("li", {
          key: b.key,
          class: "flex-1"
        }, [
          o("a", {
            href: b.href,
            class: j([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(b.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(b.href) ? "page" : void 0
          }, [
            (t(), n("svg", js, [
              o("path", {
                d: h(ie)(b.icon)
              }, null, 8, Os)
            ])),
            o("span", Ls, m(b.title), 1)
          ], 10, As)
        ]))), 128)),
        i.value ? (t(), n("li", Vs, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (b) => r("more"))
          }, [
            (t(), n("svg", Ds, [
              o("path", {
                d: h(ie)("more-horizontal")
              }, null, 8, Ts)
            ])),
            o("span", Fs, m(e.moreLabel), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}), Es = ["value"], Is = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", pe = /* @__PURE__ */ A({
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
      class: j([Is, a.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, Es));
  }
}), Ns = ["for"], he = /* @__PURE__ */ A({
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
    ], 10, Ns));
  }
}), R2 = /* @__PURE__ */ A({
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
}), Rs = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Us = ["id", "name", "value", "disabled", "maxlength"], Hs = ["data-active"], qs = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, U2 = /* @__PURE__ */ A({
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
      () => Array.from({ length: a.length }, (b, p) => a.modelValue[p] ?? "")
    ), d = k(() => Math.min(a.modelValue.length, a.length - 1));
    function f(b) {
      const p = b.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, a.length));
    }
    return (b, p) => (t(), n("div", Rs, [
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
        onFocus: p[0] || (p[0] = (y) => s.value = !0),
        onBlur: p[1] || (p[1] = (y) => s.value = !1)
      }, null, 40, Us),
      (t(!0), n(z, null, L(u.value, (y, S) => (t(), n("div", {
        key: S,
        "data-slot": "input-otp-slot",
        "data-active": s.value && S === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(m(y) + " ", 1),
        s.value && S === d.value && y === "" ? (t(), n("div", qs, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : w("", !0)
      ], 8, Hs))), 128))
    ]));
  }
}), Ks = {
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
      class: j(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: j(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, m(e.title), 3),
      e.description ? (t(), n("p", Ks, m(e.description), 1)) : w("", !0)
    ], 2));
  }
});
function X(...e) {
  return Oa(ja(e));
}
function H2(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Gs = /* @__PURE__ */ A({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: j(h(X)(h(Js)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Ws = /* @__PURE__ */ A({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: j(h(X)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Zs = /* @__PURE__ */ A({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: j(h(X)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Js = bt(
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
), Ys = { class: "list-inside list-disc text-sm" }, q2 = /* @__PURE__ */ A({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = k(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(h(Gs), { variant: "destructive" }, {
      default: O(() => [
        E(h(wa), { class: "size-4" }),
        E(h(Zs), null, {
          default: O(() => [
            R(m(e.title), 1)
          ]),
          _: 1
        }),
        E(h(Ws), null, {
          default: O(() => [
            o("ul", Ys, [
              (t(!0), n(z, null, L(a.value, (i, u) => (t(), n("li", { key: u }, m(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), aa = /* @__PURE__ */ A({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Ht(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, u) => ue((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => pa(s) ? s.value = d : null),
      "data-slot": "input",
      class: j(
        h(X)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [be, h(s)]
    ]);
  }
}), Xs = { class: "relative" }, Qs = ["aria-label"], K2 = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = G(!1), s = va("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), n("div", Xs, [
      E(h(aa), le({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: h(X)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: j(
          h(X)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), T(h(Ca), {
          key: 0,
          class: "size-4"
        })) : (t(), T(h(_a), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Qs)
    ]));
  }
});
function G2(e, l) {
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
const na = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", er = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", tr = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function ar(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function nr(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function lr(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await or(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function or(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function sr(e) {
  if (ar(e))
    throw new Error(tr);
  if (!nr(e))
    throw new Error(na);
  if (!await lr(e))
    throw new Error(er);
}
const rr = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(h(qt), le({ "data-slot": "sheet" }, h(s)), {
      default: O((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), W2 = /* @__PURE__ */ A({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Ie), le({ "data-slot": "sheet-close" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ir = /* @__PURE__ */ A({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), T(h(yt), le({
      "data-slot": "sheet-overlay",
      class: h(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, h(a)), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ur = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(xt), null, {
      default: O(() => [
        E(ir),
        E(h(kt), le({
          "data-slot": "sheet-content",
          class: h(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...h(i) }), {
          default: O(() => [
            H(u.$slots, "default"),
            E(h(Ie), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: O(() => [
                E(h(ht), { class: "size-4" }),
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
}), dr = /* @__PURE__ */ A({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), T(h(Kt), le({
      "data-slot": "sheet-description",
      class: h(X)("text-muted-foreground text-sm", l.class)
    }, h(a)), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z2 = /* @__PURE__ */ A({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: j(h(X)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), cr = /* @__PURE__ */ A({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: j(h(X)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), fr = /* @__PURE__ */ A({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), T(h(Gt), le({
      "data-slot": "sheet-title",
      class: h(X)("text-foreground font-semibold", l.class)
    }, h(a)), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J2 = /* @__PURE__ */ A({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Wt), le({ "data-slot": "sheet-trigger" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lt = "sidebar_state", mr = 3600 * 24 * 7, pr = "16rem", vr = "18rem", gr = "3rem", hr = "b", [et, br] = Ta("Sidebar"), yr = { class: "flex h-full w-full flex-col" }, xr = ["data-state", "data-collapsible", "data-variant", "data-side"], kr = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Y2 = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = et();
    return (u, d) => e.collapsible === "none" ? (t(), n("div", le({
      key: 0,
      "data-slot": "sidebar",
      class: h(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      H(u.$slots, "default")
    ], 16)) : h(a) ? (t(), T(h(rr), le({
      key: 1,
      open: h(s)
    }, u.$attrs, { "onUpdate:open": h(i) }), {
      default: O(() => [
        E(h(ur), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": h(vr)
          })
        }, {
          default: O(() => [
            E(cr, { class: "sr-only" }, {
              default: O(() => [
                E(fr, null, {
                  default: O(() => [...d[0] || (d[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(dr, null, {
                  default: O(() => [...d[1] || (d[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", yr, [
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
      "data-state": h(r),
      "data-collapsible": h(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: j(
          h(X)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", le({
        class: h(X)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        o("div", kr, [
          H(u.$slots, "default")
        ])
      ], 16)
    ], 8, xr));
  }
}), X2 = /* @__PURE__ */ A({
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
        h(X)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Q2 = /* @__PURE__ */ A({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: j(h(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), e$ = /* @__PURE__ */ A({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: j(h(X)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), t$ = /* @__PURE__ */ A({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Ne), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        h(X)(
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
}), a$ = /* @__PURE__ */ A({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: j(h(X)("w-full text-sm", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), n$ = /* @__PURE__ */ A({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Ne), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        h(X)(
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
}), l$ = /* @__PURE__ */ A({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: j(h(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), o$ = /* @__PURE__ */ A({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(aa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: j(h(X)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), s$ = /* @__PURE__ */ A({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: j(
        h(X)(
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
}), r$ = /* @__PURE__ */ A({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: j(h(X)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), i$ = /* @__PURE__ */ A({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Ne), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: j(
        h(X)(
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
}), u$ = /* @__PURE__ */ A({
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
        h(X)(
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
}), $r = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(h(Fa), le({ "data-slot": "tooltip" }, h(s)), {
      default: O((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), wr = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(Ea), null, {
      default: O(() => [
        E(h(Ia), le({ "data-slot": "tooltip-content" }, { ...h(i), ...u.$attrs }, {
          class: h(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: O(() => [
            H(u.$slots, "default"),
            E(h(Na), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), d$ = /* @__PURE__ */ A({
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
    return (a, r) => (t(), T(h(Zt), ye(Be(l)), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cr = /* @__PURE__ */ A({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Ra), le({ "data-slot": "tooltip-trigger" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vt = /* @__PURE__ */ A({
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
    return (a, r) => (t(), T(h(Ne), le({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: h(X)(h(Sr)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), c$ = /* @__PURE__ */ A({
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
    const l = e, { isMobile: a, state: r } = et(), s = re(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), T(h($r), { key: 1 }, {
      default: O(() => [
        E(h(Cr), { "as-child": "" }, {
          default: O(() => [
            E(Vt, ye(Be({ ...h(s), ...i.$attrs })), {
              default: O(() => [
                H(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(h(wr), {
          side: "right",
          align: "center",
          hidden: h(r) !== "collapsed" || h(a)
        }, {
          default: O(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              R(m(e.tooltip), 1)
            ], 64)) : (t(), T(Ae(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(Vt, ye(le({ key: 0 }, { ...h(s), ...i.$attrs })), {
      default: O(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f$ = /* @__PURE__ */ A({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: j(h(X)("group/menu-item relative", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Dt = "animate-pulse rounded-md bg-primary/10", m$ = /* @__PURE__ */ A({
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
      class: j(h(X)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: j(h(X)(Dt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : w("", !0),
      o("div", {
        class: j(h(X)(Dt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), p$ = /* @__PURE__ */ A({
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
        h(X)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), v$ = /* @__PURE__ */ A({
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
    return (a, r) => (t(), T(h(Ne), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: j(
        h(X)(
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
}), g$ = /* @__PURE__ */ A({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: j(h(X)("group/menu-sub-item relative", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), h$ = /* @__PURE__ */ A({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Da?.cookie.includes(`${Lt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = La("(max-width: 767px)"), i = G(!1), u = Ht(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function d(y) {
      u.value = y, document.cookie = `${Lt}=${u.value}; path=/; max-age=${mr}`;
    }
    function f(y) {
      i.value = y;
    }
    function b() {
      return s.value ? f(!i.value) : d(!u.value);
    }
    Va("keydown", (y) => {
      y.key === hr && (y.metaKey || y.ctrlKey) && (y.preventDefault(), b());
    });
    const p = k(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return br({
      state: p,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: b
    }), (y, S) => (t(), T(h(Zt), { "delay-duration": 0 }, {
      default: O(() => [
        o("div", le({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": h(pr),
            "--sidebar-width-icon": h(gr)
          },
          class: h(X)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, y.$attrs), [
          H(y.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), b$ = /* @__PURE__ */ A({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = et();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: j(
        h(X)(
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
      (...i) => h(a) && h(a)(...i))
    }, [
      H(r.$slots, "default")
    ], 2));
  }
}), _r = /* @__PURE__ */ A({
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
    return (r, s) => (t(), T(h(Ua), le({ "data-slot": "separator" }, h(a), {
      class: h(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), y$ = /* @__PURE__ */ A({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(_r), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: j(h(X)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), x$ = /* @__PURE__ */ A({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = et();
    return (i, u) => (t(), T(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: j(h(X)("h-7 w-7", l.class)),
      onClick: h(s)
    }, {
      default: O(() => [
        h(a) || h(r) === "collapsed" ? (t(), T(h(Sa), { key: 0 })) : (t(), T(h(Ma), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Sr = bt(
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
), k$ = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(h(Ha), le({ "data-slot": "dropdown-menu" }, h(s)), {
      default: O((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), Mr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, $$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(qa), le({ "data-slot": "dropdown-menu-checkbox-item" }, h(i), {
      class: h(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        o("span", Mr, [
          E(h(Jt), null, {
            default: O(() => [
              H(u.$slots, "indicator-icon", {}, () => [
                E(h(Rt), { class: "size-4" })
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
}), w$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(Ka), null, {
      default: O(() => [
        E(h(Ga), le({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...h(i) }, {
          class: h(X)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: O(() => [
            H(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), C$ = /* @__PURE__ */ A({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Wa), le({ "data-slot": "dropdown-menu-group" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _$ = /* @__PURE__ */ A({
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
    const l = e, a = re(l, "inset", "variant", "class"), r = xe(a);
    return (s, i) => (t(), T(h(Za), le({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, h(r), {
      class: h(X)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: O(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), S$ = /* @__PURE__ */ A({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = re(l, "class", "inset"), r = xe(a);
    return (s, i) => (t(), T(h(Ja), le({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, h(r), {
      class: h(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: O(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), M$ = /* @__PURE__ */ A({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), T(h(Ya), le({ "data-slot": "dropdown-menu-radio-group" }, h(s)), {
      default: O(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Br = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, B$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(Xa), le({ "data-slot": "dropdown-menu-radio-item" }, h(i), {
      class: h(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        o("span", Br, [
          E(h(Jt), null, {
            default: O(() => [
              H(u.$slots, "indicator-icon", {}, () => [
                E(h(Ba), { class: "size-2 fill-current" })
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
}), P$ = /* @__PURE__ */ A({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), T(h(Qa), le({ "data-slot": "dropdown-menu-separator" }, h(a), {
      class: h(X)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), z$ = /* @__PURE__ */ A({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: j(h(X)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), A$ = /* @__PURE__ */ A({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), T(h(en), le({ "data-slot": "dropdown-menu-sub" }, h(s)), {
      default: O((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), j$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(tn), le({ "data-slot": "dropdown-menu-sub-content" }, h(i), {
      class: h(X)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: O(() => [
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O$ = /* @__PURE__ */ A({
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
    const l = e, a = re(l, "class", "inset"), r = xe(a);
    return (s, i) => (t(), T(h(an), le({ "data-slot": "dropdown-menu-sub-trigger" }, h(r), {
      "data-inset": e.inset ? "" : void 0,
      class: h(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: O(() => [
        H(s.$slots, "default"),
        E(h(Ut), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), L$ = /* @__PURE__ */ A({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = xe(e);
    return (r, s) => (t(), T(h(nn), le({ "data-slot": "dropdown-menu-trigger" }, h(a)), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V$ = /* @__PURE__ */ A({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(ln), {
      "data-slot": "avatar",
      class: j(h(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), D$ = /* @__PURE__ */ A({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), T(h(on), le({ "data-slot": "avatar-fallback" }, h(a), {
      class: h(X)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), T$ = /* @__PURE__ */ A({
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
    return (a, r) => (t(), T(h(sn), le({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F$ = /* @__PURE__ */ A({
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
}), E$ = /* @__PURE__ */ A({
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
      class: j(h(X)("flex size-9 items-center justify-center", l.class))
    }, [
      H(a.$slots, "default", {}, () => [
        E(h(Pa), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), I$ = /* @__PURE__ */ A({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: j(h(X)("inline-flex items-center gap-1.5", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), N$ = /* @__PURE__ */ A({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Ne), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: j(h(X)("hover:text-foreground transition-colors", l.class))
    }, {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), R$ = /* @__PURE__ */ A({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: j(
        h(X)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), U$ = /* @__PURE__ */ A({
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
      class: j(h(X)("text-foreground font-normal", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), H$ = /* @__PURE__ */ A({
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
      class: j(h(X)("[&>svg]:size-3.5", l.class))
    }, [
      H(a.$slots, "default", {}, () => [
        E(h(Ut))
      ])
    ], 2));
  }
}), Pr = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, zr = /* @__PURE__ */ A({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = xe(a);
    return (s, i) => (t(), n("div", Pr, [
      E(h(rn), le({ "data-slot": "navigation-menu-viewport" }, h(r), {
        class: h(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), q$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(un), le({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, h(i), {
      class: h(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: O((f) => [
        H(u.$slots, "default", ye(Be(f))),
        e.viewport ? (t(), T(zr, { key: 0 })) : w("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), K$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(dn), le({ "data-slot": "navigation-menu-content" }, h(i), {
      class: h(X)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: O(() => [
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G$ = /* @__PURE__ */ A({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = xe(a);
    return (s, i) => (t(), T(h(cn), le({ "data-slot": "navigation-menu-indicator" }, h(r), {
      class: h(X)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        l.class
      )
    }), {
      default: O(() => [...i[0] || (i[0] = [
        o("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), W$ = /* @__PURE__ */ A({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), T(h(fn), le({ "data-slot": "navigation-menu-item" }, h(a), {
      class: h(X)("relative", l.class)
    }), {
      default: O(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(mn), le({ "data-slot": "navigation-menu-link" }, h(i), {
      class: h(X)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J$ = /* @__PURE__ */ A({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = xe(a);
    return (s, i) => (t(), T(h(pn), le({ "data-slot": "navigation-menu-list" }, h(r), {
      class: h(X)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: O(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y$ = /* @__PURE__ */ A({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = xe(a);
    return (s, i) => (t(), T(h(vn), le({ "data-slot": "navigation-menu-trigger" }, h(r), {
      class: h(X)(h(Ar)(), "group", l.class)
    }), {
      default: O(() => [
        H(s.$slots, "default"),
        E(h(za), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ar = bt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), X$ = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(h(qt), le({ "data-slot": "dialog" }, h(s)), {
      default: O((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), Q$ = /* @__PURE__ */ A({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Ie), le({ "data-slot": "dialog-close" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jr = /* @__PURE__ */ A({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), T(h(yt), le({ "data-slot": "dialog-overlay" }, h(a), {
      class: h(X)(
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
}), ew = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(xt), null, {
      default: O(() => [
        E(jr),
        E(h(kt), le({ "data-slot": "dialog-content" }, { ...u.$attrs, ...h(i) }, {
          class: h(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: O(() => [
            H(u.$slots, "default"),
            e.showCloseButton ? (t(), T(h(Ie), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: O(() => [
                E(h(ht)),
                d[0] || (d[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : w("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), tw = /* @__PURE__ */ A({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = xe(a);
    return (s, i) => (t(), T(h(Kt), le({ "data-slot": "dialog-description" }, h(r), {
      class: h(X)("text-muted-foreground text-sm", l.class)
    }), {
      default: O(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aw = /* @__PURE__ */ A({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: j(h(X)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      H(a.$slots, "default"),
      e.showCloseButton ? (t(), T(h(Ie), {
        key: 0,
        "as-child": ""
      }, {
        default: O(() => [
          E(se, { variant: "outline" }, {
            default: O(() => [...r[0] || (r[0] = [
              R(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : w("", !0)
    ], 2));
  }
}), nw = /* @__PURE__ */ A({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: j(h(X)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), lw = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(xt), null, {
      default: O(() => [
        E(h(yt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: O(() => [
            E(h(kt), le({
              class: h(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...h(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (f) => {
                const b = f.detail.originalEvent, p = b.target;
                (b.offsetX > p.clientWidth || b.offsetY > p.clientHeight) && f.preventDefault();
              })
            }), {
              default: O(() => [
                H(u.$slots, "default"),
                E(h(Ie), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: O(() => [
                    E(h(ht), { class: "w-4 h-4" }),
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
}), ow = /* @__PURE__ */ A({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class"), r = xe(a);
    return (s, i) => (t(), T(h(Gt), le({ "data-slot": "dialog-title" }, h(r), {
      class: h(X)("text-lg leading-none font-semibold", l.class)
    }), {
      default: O(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sw = /* @__PURE__ */ A({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Wt), le({ "data-slot": "dialog-trigger" }, l), {
      default: O(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rw = /* @__PURE__ */ A({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = re(l, "class");
    return (r, s) => (t(), T(h(gn), le({ "data-slot": "label" }, h(a), {
      class: h(X)(
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
}), iw = /* @__PURE__ */ A({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(h(Aa), {
      role: "status",
      "aria-label": "Loading",
      class: j(h(X)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), uw = /* @__PURE__ */ A({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: j(
        h(X)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), dw = /* @__PURE__ */ A({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: j(h(X)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), cw = /* @__PURE__ */ A({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: j(h(X)("px-6", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), fw = /* @__PURE__ */ A({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: j(h(X)("text-muted-foreground text-sm", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), mw = /* @__PURE__ */ A({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: j(h(X)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), pw = /* @__PURE__ */ A({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: j(
        h(X)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), vw = /* @__PURE__ */ A({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: j(h(X)("leading-none font-semibold", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Or = /* @__PURE__ */ A({
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
    return (u, d) => (t(), T(h(hn), le({ "data-slot": "checkbox" }, h(i), {
      class: h(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: O((f) => [
        E(h(bn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: O(() => [
            H(u.$slots, "default", ye(Be(f)), () => [
              E(h(Rt), { class: "size-3.5" })
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
    return (i, u) => (t(), T(h(yn), le({ "data-slot": "switch" }, h(s), {
      class: h(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: O(() => [
        E(h(xn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Lr = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Vr = { class: "flex items-start gap-3" }, Dr = { class: "min-w-0 flex-1" }, Tr = { class: "text-foreground text-sm font-medium" }, Fr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, gw = /* @__PURE__ */ A({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = G(!1), u = G(null), d = G(0);
    ga((b) => (console.error(`[PkBoundary] ${r.label} failed to render`, b), i.value = !0, u.value = b instanceof Error ? b.message : null, s("error", b), !1));
    function f() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: f }), (b, p) => (t(), n("div", {
      class: j(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Lr, [
        o("div", Vr, [
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
          o("div", Dr, [
            o("p", Tr, m(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", Fr, m(u.value), 1)) : w("", !0),
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
              R(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? w("", !0) : H(b.$slots, "default", { key: d.value })
    ], 2));
  }
}), Er = { class: "bg-card rounded-lg border" }, Ir = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Nr = { class: "min-w-0" }, Rr = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Ur = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Hr = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, qr = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, hw = /* @__PURE__ */ A({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Er, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Ir, [
        o("div", Nr, [
          H(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Rr, m(e.title), 1)) : w("", !0),
            e.description ? (t(), n("p", Ur, m(e.description), 1)) : w("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Hr, [
          H(l.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      o("div", {
        class: j(e.padded ? "p-4" : "")
      }, [
        H(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", qr, [
        H(l.$slots, "footer")
      ])) : w("", !0)
    ]));
  }
}), la = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function bw() {
  const e = Yt(), l = k(() => e.props.panel?.pageFooter === !0);
  return Nt(la, l), l;
}
const Kr = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Gr = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Wr = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, yw = /* @__PURE__ */ A({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = Yt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = k(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), u = gt(la, k(() => !1)), d = k(() => !l.host && h(u) === !0);
    return (f, b) => d.value ? w("", !0) : (t(), n("footer", Kr, [
      o("div", Gr, [
        o("p", null, "© " + m(h(r)) + " " + m(s.value), 1),
        i.value.length ? (t(), n("nav", Wr, [
          (t(!0), n(z, null, L(i.value, (p) => (t(), T(h(kn), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: O(() => [
              R(m(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), Zr = { class: "flex shrink-0 flex-col items-center" }, Jr = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, xw = /* @__PURE__ */ A({
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
    return (i, u) => (t(), n("div", Zr, [
      o("div", {
        class: j(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Jr)) : w("", !0),
        o("div", {
          class: j(["size-full overflow-hidden bg-white", s.value])
        }, [
          H(i.$slots, "default")
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
      ], 64)) : w("", !0)
    ]));
  }
}), Yr = { class: "flex items-center gap-2 overflow-x-auto" }, Xr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ei = { class: "flex flex-col" }, ti = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, ai = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, ni = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, li = /* @__PURE__ */ A({
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
    return (f, b) => (t(), n("ol", Yr, [
      (t(!0), n(z, null, L(e.steps, (p, y) => (t(), n("li", {
        key: y,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(Ae(e.interactive ? "button" : "div"), le({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(y)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: y > e.activeStep } : {}, {
          onClick: (S) => e.interactive && y <= e.activeStep && r("update:activeStep", y)
        }), {
          default: O(() => [
            o("span", {
              class: j(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(y)])
            }, [
              d(y) ? (t(), n("svg", Xr, [...b[0] || (b[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(y) ? (t(), n("svg", Qr, [...b[1] || (b[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                R(m(y + 1), 1)
              ], 64))
            ], 2),
            o("span", ei, [
              o("span", null, m(p.label), 1),
              p.description ? (t(), n("span", ti, m(p.description), 1)) : w("", !0)
            ]),
            e.hasError(y) ? (t(), n("span", ai)) : w("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        y < e.steps.length - 1 ? (t(), n("span", ni)) : w("", !0)
      ]))), 128))
    ]));
  }
}), Ge = /* @__PURE__ */ new Map();
function $e(e, l) {
  Ge.set(e, l);
}
function oi(e) {
  return Ge.get(e);
}
function kw(e) {
  return Ge.has(e);
}
function $w() {
  return [...Ge.keys()].sort();
}
function ww() {
  Ge.clear();
}
const si = ["aria-expanded"], ri = ["aria-label", "onClick"], ii = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, ui = { class: "ml-auto flex shrink-0 items-center gap-1" }, di = {
  key: 0,
  class: "border-b p-1"
}, ci = ["placeholder"], fi = { class: "max-h-60 overflow-y-auto p-1" }, mi = ["aria-selected", "onMouseenter", "onClick"], pi = {
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
    const a = e, r = l, s = G(null), i = G(null), u = G(null), d = G(!1), f = G(""), b = G(0), p = G({ top: 0, left: 0, width: 0 }), y = k(
      () => a.modelValue.map(
        (V) => a.options.find((F) => F.value === V) ?? {
          value: V,
          label: String(V)
        }
      ).filter(Boolean)
    ), S = k(() => a.searchable ?? a.options.length > 6), $ = k(() => {
      const V = new Set(a.modelValue), F = f.value.trim().toLowerCase();
      return a.options.filter((Z) => !V.has(Z.value)).filter((Z) => F ? Z.label.toLowerCase().includes(F) : !0);
    }), _ = k(() => a.max !== null && a.modelValue.length >= a.max);
    function x() {
      const V = s.value, F = i.value;
      if (!V || !F)
        return;
      const Z = V.getBoundingClientRect(), te = F.getBoundingClientRect(), N = 8;
      let D = Z.bottom + 4;
      D + te.height > window.innerHeight - N && Z.top - te.height - 4 > N && (D = Z.top - te.height - 4), p.value = {
        top: D,
        left: Math.min(Math.max(N, Z.left), window.innerWidth - Z.width - N),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function v() {
      a.disabled || d.value || (d.value = !0, f.value = "", b.value = 0, await Ce(), x(), u.value?.focus());
    }
    function g() {
      d.value = !1, f.value = "";
    }
    function c() {
      d.value ? g() : v();
    }
    function C(V) {
      _.value || (r("update:modelValue", [...a.modelValue, V.value]), f.value = "", b.value = 0, Ce(() => {
        x(), u.value?.focus();
      }));
    }
    function M(V) {
      r(
        "update:modelValue",
        a.modelValue.filter((F) => F !== V)
      ), Ce(x);
    }
    function P() {
      r("update:modelValue", []), Ce(x);
    }
    function W(V) {
      if (!a.disabled) {
        if (V.key === "Escape" && d.value) {
          V.stopPropagation(), g();
          return;
        }
        if (V.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          M(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (V.key === "ArrowDown" || V.key === "Enter")) {
          V.preventDefault(), v();
          return;
        }
        if (d.value) {
          if (V.key === "ArrowDown")
            V.preventDefault(), b.value = Math.min(b.value + 1, $.value.length - 1);
          else if (V.key === "ArrowUp")
            V.preventDefault(), b.value = Math.max(b.value - 1, 0);
          else if (V.key === "Enter") {
            V.preventDefault();
            const F = $.value[b.value];
            F && C(F);
          }
        }
      }
    }
    function I(V) {
      if (!d.value)
        return;
      const F = V.target;
      s.value?.contains(F) || i.value?.contains(F) || g();
    }
    function J() {
      d.value && x();
    }
    return de($, (V) => {
      b.value > V.length - 1 && (b.value = Math.max(0, V.length - 1));
    }), fe(() => {
      document.addEventListener("pointerdown", I), window.addEventListener("scroll", J, !0), window.addEventListener("resize", J);
    }), ve(() => {
      document.removeEventListener("pointerdown", I), window.removeEventListener("scroll", J, !0), window.removeEventListener("resize", J);
    }), (V, F) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: W
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
        onClick: c
      }, [
        (t(!0), n(z, null, L(y.value, (Z) => (t(), n("span", {
          key: Z.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(m(Z.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${Z.label}`,
            onClick: ce((te) => M(Z.value), ["stop"])
          }, [...F[1] || (F[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, ri)
        ]))), 128)),
        y.value.length === 0 ? (t(), n("span", ii, m(e.placeholder), 1)) : w("", !0),
        o("span", ui, [
          y.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ce(P, ["stop"])
          }, " Clear ")) : w("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: j(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...F[2] || (F[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, si),
      (t(), T(Ee, { to: "body" }, [
        E(ze, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
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
              S.value ? (t(), n("div", di, [
                ue(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": F[0] || (F[0] = (Z) => f.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: W
                }, null, 40, ci), [
                  [be, f.value]
                ])
              ])) : w("", !0),
              o("div", fi, [
                (t(!0), n(z, null, L($.value, (Z, te) => (t(), n("button", {
                  key: Z.value,
                  type: "button",
                  class: j(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", te === b.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": te === b.value,
                  onMouseenter: (N) => b.value = te,
                  onClick: (N) => C(Z)
                }, m(Z.label), 43, mi))), 128)),
                $.value.length === 0 ? (t(), n("p", pi, [
                  _.value ? (t(), n(z, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(z, { key: 1 }, [
                    R("Nothing matches “" + m(f.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
                    R("Everything is selected.")
                  ], 64))
                ])) : w("", !0)
              ])
            ], 4)) : w("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
  }
}), vi = ["accept", "disabled"], gi = { class: "text-sm font-medium" }, hi = { key: 0 }, bi = { key: 1 }, yi = { class: "text-muted-foreground text-xs" }, xi = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ki = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, $i = ["src"], wi = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Ci = { class: "min-w-0 flex-1" }, _i = { class: "block truncate text-sm font-medium" }, Si = { class: "text-muted-foreground text-xs" }, Mi = ["href"], Bi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, oa = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(null), i = G(!1), u = G(null), d = G(null), f = G(null), b = k(() => a.accept.map((C) => `.${C}`).join(",")), p = k(() => f.value ?? a.modelValue?.url ?? null), y = k(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${S(a.maxKilobytes * 1024)}`);
    function S(C) {
      if (!C)
        return "";
      const M = ["B", "KB", "MB", "GB"];
      let P = C, W = 0;
      for (; P >= 1024 && W < M.length - 1; )
        P /= 1024, W++;
      return `${P.toFixed(P < 10 && W > 0 ? 1 : 0)} ${M[W]}`;
    }
    function $(C) {
      return C.split(".").pop()?.toLowerCase() ?? "";
    }
    function _(C) {
      return a.accept.length && !a.accept.includes($(C.name)) ? `${$(C.name).toUpperCase() || "That"} files are not accepted here.` : C.size > a.maxKilobytes * 1024 ? `That file is ${S(C.size)}; the limit is ${S(a.maxKilobytes * 1024)}.` : null;
    }
    async function x(C) {
      const M = C?.[0];
      if (!(!M || a.disabled) && (d.value = _(M), !d.value)) {
        v(), a.image && M.type.startsWith("image/") && (f.value = URL.createObjectURL(M)), u.value = 0;
        try {
          const P = await a.upload(M, (W) => {
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
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function g() {
      const C = a.modelValue;
      v(), d.value = null, r("update:modelValue", null), C && !C.url && a.discard && await a.discard(C.value).catch(() => {
      });
    }
    function c(C) {
      i.value = !1, x(C.dataTransfer?.files ?? null);
    }
    return (C, M) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", ki, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, $i)) : (t(), n("span", wi, m($(e.modelValue.name) || "file"), 1)),
        o("span", Ci, [
          o("span", _i, m(e.modelValue.name), 1),
          o("span", Si, [
            R(m(S(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              M[4] || (M[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Mi)
            ], 64)) : (t(), n(z, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: g
        }, [...M[5] || (M[5] = [
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
        onDragover: M[1] || (M[1] = ce((P) => i.value = !0, ["prevent"])),
        onDragleave: M[2] || (M[2] = ce((P) => i.value = !1, ["prevent"])),
        onDrop: ce(c, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: b.value,
          disabled: e.disabled,
          onChange: M[0] || (M[0] = (P) => x(P.target.files))
        }, null, 40, vi),
        M[3] || (M[3] = o("svg", {
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
        o("span", gi, [
          u.value === null ? (t(), n("span", hi, "Drop a file or click to choose")) : (t(), n("span", bi, "Uploading…"))
        ]),
        o("span", yi, m(y.value), 1),
        u.value !== null ? (t(), n("span", xi, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${u.value}%` })
          }, null, 4)
        ])) : w("", !0)
      ], 34)),
      d.value ? (t(), n("p", Bi, m(d.value), 1)) : w("", !0)
    ]));
  }
}), Pi = { class: "flex flex-col gap-2" }, zi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Ai = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, ji = { class: "flex flex-col gap-1" }, Oi = ["onUpdate:modelValue", "disabled", "aria-label"], Li = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Vi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Di = ["onUpdate:modelValue", "disabled", "aria-label"], Ti = ["disabled", "aria-label", "onClick"], Fi = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Ei = { class: "flex items-center gap-3" }, Ii = ["disabled"], Ni = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Ri = /* @__PURE__ */ A({
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
    function d(x) {
      return x ? Object.entries(x).map(([v, g]) => ({
        uid: i++,
        key: v,
        value: g ?? ""
      })) : [];
    }
    de(
      () => a.modelValue,
      (x) => {
        JSON.stringify(x ?? null) !== JSON.stringify(f()) && (u.value = d(x));
      }
    );
    function f() {
      const x = {};
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && (x[g] = v.value);
      }
      return Object.keys(x).length ? x : null;
    }
    function b() {
      r("update:modelValue", f());
    }
    const p = k(() => {
      const x = /* @__PURE__ */ new Map();
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && x.set(g, (x.get(g) ?? 0) + 1);
      }
      return new Set([...x.entries()].filter(([, v]) => v > 1).map(([v]) => v));
    }), y = k(
      () => new Set(
        u.value.map((x) => x.key.trim()).filter((x) => x !== "" && !s.test(x))
      )
    ), S = k(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function $() {
      S.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function _(x) {
      u.value = u.value.filter((v) => v.uid !== x), b();
    }
    return (x, v) => (t(), n("div", Pi, [
      u.value.length ? (t(), n("div", zi, [
        o("div", Ai, [
          o("span", null, m(e.keyLabel), 1),
          o("span", null, m(e.valueLabel), 1),
          v[0] || (v[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, L(u.value, (g) => (t(), n("div", {
          key: g.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", ji, [
            ue(o("input", {
              "onUpdate:modelValue": (c) => g.key = c,
              type: "text",
              class: j([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(g.key.trim()) || y.value.has(g.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: b
            }, null, 42, Oi), [
              [be, g.key]
            ]),
            y.value.has(g.key.trim()) ? (t(), n("p", Li, " Letters, numbers, underscores and dashes only. ")) : p.value.has(g.key.trim()) ? (t(), n("p", Vi, " Used twice - only the last value will be saved. ")) : w("", !0)
          ]),
          ue(o("input", {
            "onUpdate:modelValue": (c) => g.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: b
          }, null, 40, Di), [
            [be, g.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${g.key || "this entry"}`,
            onClick: (c) => _(g.uid)
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
          ])], 8, Ti)
        ]))), 128))
      ])) : (t(), n("p", Fi, " Nothing here yet. ")),
      o("div", Ei, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || S.value,
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
          R(" Add " + m(e.keyLabel.toLowerCase()), 1)
        ], 8, Ii),
        e.maxPairs !== null ? (t(), n("p", Ni, m(u.value.length) + " of " + m(e.maxPairs), 1)) : w("", !0)
      ])
    ]));
  }
}), Ui = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Hi = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, qi = ["disabled", "title", "aria-label", "onClick"], Ki = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gi = ["d"], Wi = ["disabled"], Zi = ["contenteditable", "data-placeholder"], Ji = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Yi = /* @__PURE__ */ A({
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
    ], d = k(() => u.filter((_) => a.toolbar.includes(_.id))), f = k(() => a.toolbar.includes("link")), b = G(0);
    function p() {
      const _ = s.value?.innerHTML ?? "", x = (s.value?.innerText ?? "").trim();
      b.value = x.length;
      const v = x === "" ? null : _;
      i = v, r("update:modelValue", v);
    }
    function y(_) {
      a.disabled || (s.value?.focus(), document.execCommand(_.command, !1, _.argument), p());
    }
    function S() {
      if (a.disabled)
        return;
      const _ = window.prompt("Link address");
      _ && (s.value?.focus(), document.execCommand("createLink", !1, _), p());
    }
    function $(_) {
      _.preventDefault();
      const x = _.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, x), p();
    }
    return fe(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", b.value = s.value.innerText.trim().length);
    }), de(
      () => a.modelValue,
      (_) => {
        _ !== i && s.value && (s.value.innerHTML = _ ?? "", b.value = s.value.innerText.trim().length);
      }
    ), (_, x) => (t(), n("div", Ui, [
      o("div", Hi, [
        (t(!0), n(z, null, L(d.value, (v) => (t(), n("button", {
          key: v.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: v.label,
          "aria-label": v.label,
          onMousedown: x[0] || (x[0] = ce(() => {
          }, ["prevent"])),
          onClick: (g) => y(v)
        }, [
          (t(), n("svg", Ki, [
            o("path", {
              d: v.path
            }, null, 8, Gi)
          ]))
        ], 40, qi))), 128)),
        f.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: x[1] || (x[1] = ce(() => {
          }, ["prevent"])),
          onClick: S
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
        ])], 40, Wi)) : w("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: j(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: $
      }, null, 42, Zi),
      e.maxLength !== null ? (t(), n("div", Ji, m(b.value) + " / " + m(e.maxLength), 1)) : w("", !0)
    ]));
  }
}), Xi = /* @__PURE__ */ $t(Yi, [["__scopeId", "data-v-32c63bc7"]]), Qi = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, eu = ["for"], tu = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, au = {
  key: 7,
  class: "flex flex-col gap-2"
}, nu = ["id", "value", "disabled"], lu = ["value"], ou = {
  key: 0,
  class: "relative"
}, su = ["disabled"], ru = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, iu = { class: "max-h-56 overflow-y-auto p-1" }, uu = ["onClick"], du = {
  key: 8,
  class: "relative"
}, cu = ["disabled", "aria-invalid"], fu = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, mu = { class: "max-h-56 overflow-y-auto p-1" }, pu = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, vu = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, gu = ["onClick"], hu = ["id", "value", "disabled", "aria-invalid"], bu = ["value"], yu = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, xu = { class: "text-muted-foreground" }, ku = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, $u = { class: "text-muted-foreground" }, wu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Cu = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], _u = {
  key: 14,
  class: "flex flex-wrap gap-1.5"
}, Su = ["disabled", "aria-pressed", "onClick"], Mu = {
  key: 15,
  class: "flex flex-wrap gap-1.5"
}, Bu = ["title", "disabled", "onClick"], Pu = ["href"], zu = {
  key: 17,
  class: "text-destructive text-xs",
  role: "alert"
}, Au = {
  key: 18,
  class: "text-muted-foreground text-xs"
}, qe = /* @__PURE__ */ A({
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
    const a = At(() => import("./PkRepeater-J84jGe3T.js")), r = At(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = G(!1), d = G(""), f = G([]), b = G(!1), p = G(null);
    let y;
    de(d, (J) => {
      s.searchOptions && (clearTimeout(y), b.value = !0, y = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(J);
        } catch {
        } finally {
          b.value = !1;
        }
      }, 200));
    });
    async function S() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, f.value.length === 0 && s.searchOptions)) {
        b.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          b.value = !1;
        }
      }
    }
    function $(J) {
      p.value = J.label, i("change", J.value), u.value = !1, d.value = "";
    }
    function _() {
      p.value = null, i("change", null);
    }
    const x = gt("panelPicker", null), v = k(() => {
      if (!s.field.tableSelect || !x?.base)
        return;
      const J = x.returnUrl || "/";
      return `${x.base}/pick/${s.field.key}?return=${encodeURIComponent(J)}`;
    }), g = k(() => s.field.morphTo ?? []), c = k(() => {
      const J = s.value;
      return J && typeof J == "object" && !Array.isArray(J) ? J : { type: void 0, id: void 0 };
    });
    function C(J) {
      i("change", { type: J || null, id: null });
    }
    function M(J) {
      i("change", { type: c.value.type ?? null, id: J });
    }
    function P(J) {
      p.value = J.label, M(J.value), u.value = !1, d.value = "";
    }
    ve(() => clearTimeout(y));
    const W = k(() => oi(s.field.type));
    function I(J) {
      const V = document.getElementById(`f-${s.field.key}`);
      if (!(V instanceof HTMLTextAreaElement) && !(V instanceof HTMLInputElement))
        return;
      const F = V.selectionStart ?? V.value.length, Z = V.selectionEnd ?? F;
      V.setRangeText(J, F, Z, "end"), V.dispatchEvent(new Event("input", { bubbles: !0 })), V.focus();
    }
    return (J, V) => e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", Qi, [
      o("label", {
        for: `f-${e.field.key}`,
        class: j(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
      }, [
        R(m(e.field.label) + " ", 1),
        e.field.required ? (t(), n("span", tu, "*")) : w("", !0)
      ], 10, eu),
      W.value ? (t(), T(Ae(W.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": V[0] || (V[0] = (F) => i("change", F))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(oa, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": V[1] || (V[1] = (F) => i("change", F))
      }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(h(a), {
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
        "onUpdate:modelValue": V[2] || (V[2] = (F) => i("change", F))
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(h(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": V[3] || (V[3] = (F) => i("change", F))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Xi, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": V[4] || (V[4] = (F) => i("change", F))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(Ri, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": V[5] || (V[5] = (F) => i("change", F))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(St, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": V[6] || (V[6] = (F) => i("change", F))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : g.value.length ? (t(), n("div", au, [
        o("select", {
          id: `f-${e.field.key}-type`,
          value: c.value.type ?? "",
          disabled: e.field.disabled || e.processing,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: V[7] || (V[7] = (F) => C(F.target.value))
        }, [
          V[17] || (V[17] = o("option", { value: "" }, "Type", -1)),
          (t(!0), n(z, null, L(g.value, (F) => (t(), n("option", {
            key: F.value,
            value: F.value
          }, m(F.label), 9, lu))), 128))
        ], 40, nu),
        c.value.type && e.searchOptions ? (t(), n("div", ou, [
          o("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            onClick: S
          }, [
            o("span", {
              class: j(p.value || c.value.id ? "" : "text-muted-foreground")
            }, m(p.value ?? (c.value.id ? String(c.value.id) : "Search…")), 3)
          ], 8, su),
          u.value ? (t(), n("div", ru, [
            ue(o("input", {
              "onUpdate:modelValue": V[8] || (V[8] = (F) => d.value = F),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [be, d.value]
            ]),
            o("div", iu, [
              (t(!0), n(z, null, L(f.value, (F) => (t(), n("button", {
                key: String(F.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Z) => P(F)
              }, m(F.label), 9, uu))), 128))
            ])
          ])) : w("", !0),
          u.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: V[9] || (V[9] = (F) => u.value = !1)
          })) : w("", !0)
        ])) : w("", !0)
      ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", du, [
        o("button", {
          type: "button",
          class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          onClick: S
        }, [
          o("span", {
            class: j(p.value || e.value ? "" : "text-muted-foreground")
          }, m(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), n("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: ce(_, ["stop"])
          }, " ✕ ")) : w("", !0)
        ], 8, cu),
        u.value ? (t(), n("div", fu, [
          ue(o("input", {
            "onUpdate:modelValue": V[10] || (V[10] = (F) => d.value = F),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [be, d.value]
          ]),
          o("div", mu, [
            b.value ? (t(), n("p", pu, " Searching… ")) : f.value.length === 0 ? (t(), n("p", vu, " No matches ")) : w("", !0),
            (t(!0), n(z, null, L(f.value, (F) => (t(), n("button", {
              key: String(F.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (Z) => $(F)
            }, m(F.label), 9, gu))), 128))
          ])
        ])) : w("", !0),
        u.value ? (t(), n("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: V[11] || (V[11] = (F) => u.value = !1)
        })) : w("", !0)
      ])) : e.field.type === "select" ? (t(), n("select", {
        key: 9,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onChange: V[12] || (V[12] = (F) => i("change", F.target.value || null))
      }, [
        V[18] || (V[18] = o("option", { value: "" }, "-", -1)),
        (t(!0), n(z, null, L(e.options, (F) => (t(), n("option", {
          key: String(F.value),
          value: F.value
        }, m(F.label), 9, bu))), 128))
      ], 40, hu)) : e.field.type === "toggle" ? (t(), n("label", yu, [
        E(h(De), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": V[13] || (V[13] = (F) => i("change", F))
        }, null, 8, ["id", "model-value", "disabled"]),
        o("span", xu, m(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), n("label", ku, [
        E(h(Or), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": V[14] || (V[14] = (F) => i("change", F === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        o("span", $u, m(e.field.help ?? e.field.label), 1)
      ])) : e.field.type === "textarea" ? (t(), n("textarea", {
        key: 12,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        rows: e.field.rows ?? 3,
        placeholder: e.field.placeholder,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: V[15] || (V[15] = (F) => i("change", F.target.value))
      }, null, 40, wu)) : (t(), n("input", {
        key: 13,
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
        onInput: V[16] || (V[16] = (F) => i("change", F.target.value))
      }, null, 40, Cu)),
      e.field.type === "number" && e.field.presets?.length ? (t(), n("div", _u, [
        (t(!0), n(z, null, L(e.field.presets, (F) => (t(), n("button", {
          key: F,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: j([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == F ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == F
          ),
          onClick: (Z) => i("change", String(F))
        }, m(F), 11, Su))), 128))
      ])) : w("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Mu, [
        (t(!0), n(z, null, L(e.field.chips, (F, Z) => (t(), n("button", {
          key: Z,
          type: "button",
          title: F,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (te) => I(String(Z))
        }, m(Z), 9, Bu))), 128))
      ])) : w("", !0),
      v.value ? (t(), n("a", {
        key: 16,
        href: v.value,
        class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
      }, " Browse ", 8, Pu)) : w("", !0),
      e.error ? (t(), n("p", zu, m(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", Au, m(e.field.help), 1)) : w("", !0)
    ]));
  }
}), ju = { class: "flex flex-col gap-2" }, Ou = { class: "min-w-0 flex-1" }, Lu = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Vu = ["disabled", "aria-label", "onClick"], Du = ["disabled", "aria-label", "onClick"], Tu = ["disabled", "title", "aria-label", "onClick"], Fu = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Eu = ["disabled"], Cw = /* @__PURE__ */ A({
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
      return Array.isArray(g) ? g.map((c) => ({ uid: s++, data: { ...c } })) : [];
    }
    de(
      () => a.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(d()) && (i.value = u(g));
      }
    );
    function d() {
      const g = [];
      for (const c of i.value) {
        const C = {};
        let M = !1;
        for (const P of a.children) {
          const W = c.data[P.key] ?? null;
          C[P.key] = W, W !== null && W !== "" && !(Array.isArray(W) && W.length === 0) && (M = !0);
        }
        M && g.push(C);
      }
      return g.length ? g : null;
    }
    function f() {
      r("update:modelValue", d());
    }
    const b = k(() => a.maxItems !== null && i.value.length >= a.maxItems), p = k(() => a.minItems !== null && i.value.length <= a.minItems), y = k(() => a.children.length === 1);
    function S() {
      if (b.value || a.disabled)
        return;
      const g = {};
      for (const c of a.children)
        g[c.key] = null;
      i.value.push({ uid: s++, data: g });
    }
    function $(g) {
      i.value = i.value.filter((c) => c.uid !== g), f();
    }
    function _(g, c) {
      const C = g + c;
      if (C < 0 || C >= i.value.length)
        return;
      const M = [...i.value], [P] = M.splice(g, 1);
      M.splice(C, 0, P), i.value = M, f();
    }
    function x(g, c, C) {
      const M = i.value.find((P) => P.uid === g);
      M && (M.data[c] = C, f());
    }
    function v(g, c) {
      return a.errors[`${a.fieldKey}.${g}.${c}`];
    }
    return (g, c) => (t(), n("div", ju, [
      (t(!0), n(z, null, L(i.value, (C, M) => (t(), n("div", {
        key: C.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: j(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", y.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, m(M + 1), 3),
        o("div", Ou, [
          y.value ? (t(), T(qe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: C.data[e.children[0].key],
            error: v(M, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => x(C.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", Lu, [
            (t(!0), n(z, null, L(e.children, (P) => (t(), T(qe, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: C.data[P.key],
              error: v(M, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (W) => x(C.uid, P.key, W)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: j(["flex shrink-0 items-center gap-0.5", y.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || M === 0,
            "aria-label": `Move ${e.itemLabel} ${M + 1} up`,
            onClick: (P) => _(M, -1)
          }, [...c[0] || (c[0] = [
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
          ])], 8, Vu),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || M === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${M + 1} down`,
            onClick: (P) => _(M, 1)
          }, [...c[1] || (c[1] = [
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
          ])], 8, Du),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${M + 1}`,
            onClick: (P) => $(C.uid)
          }, [...c[2] || (c[2] = [
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
          ])], 8, Tu)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", Fu, " No " + m(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : w("", !0),
      b.value ? w("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: S
      }, [
        c[3] || (c[3] = o("svg", {
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
        R(" Add " + m(e.itemLabel.toLowerCase()), 1)
      ], 8, Eu))
    ]));
  }
}), Iu = { class: "space-y-1" }, Nu = { class: "flex items-center gap-1" }, Ru = ["disabled", "title", "aria-label", "onClick"], Uu = ["aria-pressed"], Hu = ["id", "value", "rows", "disabled"], qu = ["innerHTML"], Ku = /* @__PURE__ */ A({
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
    function u(y) {
      return y.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = k(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(y, S = y) {
      const $ = document.getElementById(a.id ?? "");
      if ($ === null)
        return;
      const _ = $.selectionStart, x = $.selectionEnd, v = i.value.slice(_, x);
      r(
        "update:modelValue",
        `${i.value.slice(0, _)}${y}${v}${S}${i.value.slice(x)}`
      );
    }
    const b = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, p = k(
      () => (a.toolbar ?? Object.keys(b)).filter((y) => y in b)
    );
    return (y, S) => (t(), n("div", Iu, [
      o("div", Nu, [
        (t(!0), n(z, null, L(p.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          disabled: e.disabled,
          title: $,
          "aria-label": $,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (_) => b[$].run()
        }, m(b[$].label), 9, Ru))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: S[0] || (S[0] = ($) => s.value = !s.value)
        }, " Preview ", 8, Uu)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, qu)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: S[1] || (S[1] = ($) => r("update:modelValue", $.target.value))
      }, null, 40, Hu))
    ]));
  }
}), Gu = { class: "space-y-1" }, Wu = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Zu = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Ju = ["id", "value", "rows", "disabled"], Yu = { class: "text-muted-foreground text-xs" }, Xu = {
  key: 0,
  class: "text-destructive text-xs"
}, Qu = /* @__PURE__ */ A({
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
      } catch (y) {
        return y instanceof Error ? y.message : "Not valid JSON.";
      }
    });
    function b(y) {
      r("update:modelValue", y.target.value);
    }
    function p(y) {
      if (y.key === "Escape") {
        i.value = !1;
        return;
      }
      if (y.key !== "Tab" && (i.value = !0), y.key !== "Tab" || !i.value)
        return;
      y.preventDefault();
      const S = y.target, $ = S.selectionStart, _ = S.selectionEnd, x = `${u.value.slice(0, $)}    ${u.value.slice(_)}`;
      r("update:modelValue", x), requestAnimationFrame(() => {
        S.selectionStart = S.selectionEnd = $ + 4;
      });
    }
    return (y, S) => (t(), n("div", Gu, [
      o("div", Wu, [
        o("div", Zu, [
          (t(!0), n(z, null, L(d.value, ($) => (t(), n("div", { key: $ }, m($), 1))), 128))
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
          onInput: b,
          onKeydown: p
        }, null, 40, Ju)
      ]),
      o("p", Yu, m(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", Xu, m(f.value), 1)) : w("", !0)
    ]));
  }
}), ed = { class: "space-y-3" }, td = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, ad = { class: "text-sm font-medium" }, nd = { class: "flex items-center gap-1" }, ld = ["disabled", "onClick"], od = ["disabled", "onClick"], sd = ["disabled", "onClick"], rd = { class: "space-y-3 p-3" }, id = { class: "flex flex-wrap items-center gap-2" }, ud = ["disabled", "onClick"], dd = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, _w = /* @__PURE__ */ A({
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
      () => Object.fromEntries(a.blocks.map((S) => [S.type, S]))
    ), u = k(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function d(S) {
      r("update:modelValue", S);
    }
    function f(S) {
      u.value || d([...s.value, { type: S, data: {} }]);
    }
    function b(S) {
      d(s.value.filter(($, _) => _ !== S));
    }
    function p(S, $) {
      const _ = S + $;
      if (_ < 0 || _ >= s.value.length)
        return;
      const x = [...s.value], [v] = x.splice(S, 1);
      x.splice(_, 0, v), d(x);
    }
    function y(S, $, _) {
      d(
        s.value.map(
          (x, v) => v === S ? { ...x, data: { ...x.data, [$]: _ } } : x
        )
      );
    }
    return (S, $) => (t(), n("div", ed, [
      (t(!0), n(z, null, L(s.value, (_, x) => (t(), n("div", {
        key: `${_.type}-${x}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", td, [
          o("span", ad, m(i.value[_.type]?.label ?? _.type), 1),
          o("div", nd, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || x === 0,
              "aria-label": "Move up",
              onClick: (v) => p(x, -1)
            }, " ↑ ", 8, ld),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || x === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (v) => p(x, 1)
            }, " ↓ ", 8, od),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (v) => b(x)
            }, " Remove ", 8, sd)
          ])
        ]),
        o("div", rd, [
          (t(!0), n(z, null, L(i.value[_.type]?.fields ?? [], (v) => (t(), T(qe, {
            key: v.key,
            field: v,
            value: _.data[v.key] ?? null,
            error: e.errors?.[v.key],
            processing: e.disabled,
            onChange: (g) => y(x, v.key, g)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", id, [
        (t(!0), n(z, null, L(e.blocks, (_) => (t(), n("button", {
          key: _.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (x) => f(_.type)
        }, " + " + m(_.label), 9, ud))), 128)),
        u.value ? (t(), n("span", dd, m(e.maxBlocks) + " is the maximum here. ", 1)) : w("", !0)
      ])
    ]));
  }
}), cd = ["name", "value", "checked", "disabled", "onChange"], fd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, md = /* @__PURE__ */ A({
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
      (t(!0), n(z, null, L(e.options, (d) => (t(), n("label", {
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
        }, null, 40, cd),
        R(" " + m(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", fd, " Nothing to choose from yet. ")) : w("", !0)
    ], 2));
  }
}), pd = ["value", "checked", "disabled", "onChange"], vd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, gd = /* @__PURE__ */ A({
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
      return s.value.some((b) => b == f.value);
    }
    function u(f) {
      r(
        "update:modelValue",
        i(f) ? s.value.filter((b) => b != f.value) : [...s.value, f.value]
      );
    }
    const d = k(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, b) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(d.value)
    }, [
      (t(!0), n(z, null, L(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: j(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (y) => u(p)
        }, null, 40, pd),
        R(" " + m(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", vd, " Nothing to choose from yet. ")) : w("", !0)
    ], 4));
  }
}), hd = { class: "flex flex-col gap-1.5" }, bd = ["aria-label", "onClick"], yd = ["placeholder", "disabled", "maxlength"], xd = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, kd = ["onClick"], $d = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, wd = /* @__PURE__ */ A({
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
        (y) => !i.value.some((S) => S.toLowerCase() === y.toLowerCase())
      )
    );
    function f(y) {
      const S = y.trim().slice(0, a.field.maxLength ?? 40);
      if (S === "" || u.value) {
        s.value = "";
        return;
      }
      if (i.value.some(($) => $.toLowerCase() === S.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, S]), s.value = "";
    }
    function b(y) {
      r(
        "update:modelValue",
        i.value.filter((S, $) => $ !== y)
      );
    }
    function p(y) {
      if (y.key === "Enter" || y.key === ",") {
        y.preventDefault(), f(s.value);
        return;
      }
      y.key === "Backspace" && s.value === "" && i.value.length > 0 && b(i.value.length - 1);
    }
    return (y, S) => (t(), n("div", hd, [
      o("div", {
        class: j(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, L(i.value, ($, _) => (t(), n("span", {
          key: `${$}-${_}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(m($) + " ", 1),
          e.disabled ? w("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${$}`,
            onClick: (x) => b(_)
          }, " × ", 8, bd))
        ]))), 128)),
        ue(o("input", {
          "onUpdate:modelValue": S[0] || (S[0] = ($) => s.value = $),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: S[1] || (S[1] = ($) => f(s.value))
        }, null, 40, yd), [
          [be, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", xd, [
        S[2] || (S[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(z, null, L(d.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (_) => f($)
        }, m($), 9, kd))), 128))
      ])) : w("", !0),
      u.value ? (t(), n("p", $d, " That is the maximum of " + m(e.field.max ?? 25) + " tags. ", 1)) : w("", !0)
    ]));
  }
}), Cd = 4.5, Tt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function sa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function lt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function mt(e) {
  const [l, a, r] = sa(e);
  return 0.2126 * lt(l) + 0.7152 * lt(a) + 0.0722 * lt(r);
}
function ra(e, l) {
  const a = mt(e), r = mt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function _d(e, l, a) {
  if (!Tt.test(e) || !Tt.test(l))
    return e;
  const r = mt(l) > 0.5, s = r ? 0 : 255;
  let i = sa(e);
  for (let u = 0; u <= 20; u++) {
    const d = Sd(i);
    if (ra(d, l) >= a)
      return d;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Sd(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Md = { class: "flex flex-col gap-2" }, Bd = { class: "flex items-center gap-2" }, Pd = {
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
}, zd = ["value", "disabled", "aria-label"], Ad = ["value", "disabled", "placeholder"], jd = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Od = ["aria-label", "title", "onClick"], Ld = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Vd = /* @__PURE__ */ A({
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
    function d($) {
      const _ = $.trim();
      if (_ === "")
        return "";
      const x = _.startsWith("#") ? _ : `#${_}`;
      return s.test(x) ? x.toLowerCase() : _;
    }
    function f($) {
      r("update:modelValue", d($.target.value));
    }
    const b = k(() => !u.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : ra(i.value, a.field.contrastBackground)), p = k(() => a.field.contrastMinRatio ?? Cd), y = k(() => b.value !== null && b.value < p.value);
    function S() {
      a.field.contrastBackground && r(
        "update:modelValue",
        _d(i.value, a.field.contrastBackground, p.value)
      );
    }
    return ($, _) => (t(), n("div", Md, [
      o("div", Bd, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: _[0] || (_[0] = (x) => r("update:modelValue", x.target.value))
        }, null, 40, zd)) : (t(), n("span", Pd)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, Ad)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", jd, [
        (t(!0), n(z, null, L(e.field.presets, (x) => (t(), n("button", {
          key: x,
          type: "button",
          class: j(["size-6 rounded border", i.value.toLowerCase() === x.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: x }),
          "aria-label": x,
          title: x,
          onClick: (v) => r("update:modelValue", x.toLowerCase())
        }, null, 14, Od))), 128))
      ])) : w("", !0),
      y.value ? (t(), n("p", Ld, [
        o("span", null, " This fails contrast at " + m(b.value.toFixed(1)) + ":1 - it needs at least " + m(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: S
        }, " Use a readable shade "))
      ])) : w("", !0)
    ]));
  }
}), Dd = { class: "flex items-center gap-3" }, Td = ["min", "max", "step", "value", "disabled", "aria-label"], Fd = { class: "flex shrink-0 items-center gap-1" }, Ed = ["min", "max", "step", "value", "disabled"], Id = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Nd = /* @__PURE__ */ A({
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
    function b(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const y = Number(p);
      r("update:modelValue", Number.isFinite(y) ? y : null);
    }
    return (p, y) => (t(), n("div", Dd, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: y[0] || (y[0] = (S) => b(S.target.value))
      }, null, 40, Td),
      o("div", Fd, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: f.value ? "" : d.value,
          disabled: e.disabled,
          onInput: y[1] || (y[1] = (S) => b(S.target.value))
        }, null, 40, Ed),
        e.field.unit ? (t(), n("span", Id, m(e.field.unit), 1)) : w("", !0)
      ])
    ]));
  }
}), We = /* @__PURE__ */ new Map();
function ot(e, l) {
  We.set(e, l);
}
function Rd(e) {
  return We.get(e);
}
function Sw(e) {
  return We.has(e);
}
function Ud() {
  return [...We.keys()].sort();
}
function Mw() {
  We.clear();
}
const Hd = ["name", "value", "checked", "disabled", "onChange"], qd = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Kd = { class: "whitespace-nowrap" }, Gd = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Wd = ["name", "value", "checked", "disabled", "onChange"], Zd = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Jd = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Yd = { class: "text-center text-xs font-medium" }, Xd = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Qd = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, ec = /* @__PURE__ */ A({
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
      () => a.field.preview ? Rd(a.field.preview) : void 0
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
    function f(b) {
      return a.modelValue != null && b.value == a.modelValue;
    }
    return (b, p) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: j(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, L(e.options, (y) => (t(), n("label", {
        key: String(y.value),
        class: j(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          f(y) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: y.value,
          checked: f(y),
          disabled: e.disabled,
          onChange: (S) => r("update:modelValue", y.value)
        }, null, 40, Hd),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", qd, [
          (t(), T(Ae(s.value), {
            value: y.value,
            label: y.label,
            selected: f(y)
          }, null, 8, ["value", "label", "selected"]))
        ])) : w("", !0),
        o("span", Kd, m(y.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Gd, " Nothing to choose from yet. ")) : w("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: j(["grid gap-3", d.value])
    }, [
      (t(!0), n(z, null, L(e.options, (y) => (t(), n("label", {
        key: String(y.value),
        class: j(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          f(y) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: y.value,
          checked: f(y),
          disabled: e.disabled,
          onChange: (S) => r("update:modelValue", y.value)
        }, null, 40, Wd),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Zd, [
          s.value ? (t(), T(Ae(s.value), {
            key: 0,
            value: y.value,
            label: y.label,
            selected: f(y)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Jd, " no preview ")) : w("", !0)
        ]),
        o("span", Yd, m(y.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Xd, " Nothing to choose from yet. ")) : w("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Qd, [
        p[2] || (p[2] = R(" No preview registered for ", -1)),
        o("code", null, m(e.field.preview), 1),
        R(". Registered: " + m(h(Ud)().join(", ") || "none") + ". ", 1)
      ])) : w("", !0)
    ], 2));
  }
}), tc = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, ac = /* @__PURE__ */ A({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", tc, [
      o("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), nc = { class: "flex flex-col items-center gap-1 text-center" }, lc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ia = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("div", nc, [
      o("div", {
        class: j(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: a.value, color: a.value })
      }, m(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", lc, m(e.caption), 1)) : w("", !0)
    ]));
  }
}), oc = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, sc = { class: "flex items-center gap-3" }, rc = ["src"], ic = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, uc = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, dc = {
  key: 0,
  class: "text-right text-sm"
}, cc = { class: "text-neutral-500" }, fc = { class: "tabular-nums" }, mc = { key: 1 }, pc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, vc = { class: "mt-2 font-medium" }, gc = { key: 2 }, hc = { class: "w-full text-sm" }, bc = { class: "w-full py-3 pr-2" }, yc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, xc = { key: 0 }, kc = ["colspan"], $c = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, wc = { class: "w-64 text-sm" }, Cc = { class: "tabular-nums" }, _c = {
  key: 3,
  class: "py-2"
}, Sc = { key: 4 }, Mc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Bc = { class: "mt-2 flex flex-col gap-1 text-sm" }, Pc = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, zc = { key: 0 }, Ac = {
  key: 1,
  class: "mt-1"
}, jc = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Oc = /* @__PURE__ */ A({
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
    return (f, b) => (t(), n("article", oc, [
      o("div", sc, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, rc)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: a() })
        }, m(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, L(e.document.blocks, (p, y) => (t(), n(z, { key: y }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ne({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ne({ color: a() })
            }, m(p.title), 5),
            p.subtitle ? (t(), n("p", ic, m(p.subtitle), 1)) : w("", !0),
            p.reference ? (t(), n("p", uc, m(p.reference), 1)) : w("", !0)
          ]),
          r(p).length ? (t(), n("dl", dc, [
            (t(!0), n(z, null, L(r(p), (S, $) => (t(), n("div", {
              key: $,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", cc, m(S.label), 1),
              o("dd", fc, m(S.value), 1)
            ]))), 128))
          ])) : w("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", mc, [
          o("h2", pc, m(p.heading), 1),
          o("p", vc, m(p.name), 1),
          (t(!0), n(z, null, L(u(p.lines), (S, $) => (t(), n("p", {
            key: $,
            class: "text-sm text-neutral-600"
          }, m(S), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", gc, [
          o("table", hc, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: a() })
              }, [
                (t(!0), n(z, null, L(u(p.columns), (S, $) => (t(), n("th", {
                  key: $,
                  class: j(["pb-2 font-medium", $ > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, m(S), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, L(s(p), (S, $) => (t(), n("tr", {
                key: $,
                class: "border-b border-neutral-200"
              }, [
                o("td", bc, [
                  o("p", null, m(S.description), 1),
                  S.detail ? (t(), n("p", yc, m(S.detail), 1)) : w("", !0)
                ]),
                (t(!0), n(z, null, L(S.cells, (_, x) => (t(), n("td", {
                  key: x,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, m(_), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", xc, [
                o("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, m(p.empty), 9, kc)
              ])) : w("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", $c, [
            o("dl", wc, [
              (t(!0), n(z, null, L(i(p), (S, $) => (t(), n("div", {
                key: $,
                class: j([
                  "flex justify-between py-1",
                  S.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(S.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: j(S.strong ? "" : "text-neutral-600")
                }, m(S.label), 3),
                o("dd", Cc, m(S.value), 1)
              ], 6))), 128))
            ])
          ])) : w("", !0)
        ])) : p.type === "code" ? (t(), n("section", _c, [
          E(ia, {
            code: d(p.code),
            caption: d(p.caption),
            style: ne(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", Sc, [
          o("h2", Mc, m(p.heading), 1),
          o("ol", Bc, [
            (t(!0), n(z, null, L(u(p.items), (S, $) => (t(), n("li", {
              key: $,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ne({ color: a() })
              }, m($ + 1) + ".", 5),
              o("span", null, m(S), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: j(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: a() } : void 0)
        }, m(p.text), 7)) : p.type === "footer" ? (t(), n("footer", Pc, [
          p.text ? (t(), n("p", zc, m(p.text), 1)) : w("", !0),
          u(p.contacts).length ? (t(), n("p", Ac, m(u(p.contacts).join(" · ")), 1)) : w("", !0)
        ])) : (t(), n("p", jc, " This document contains a “" + m(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Lc = ["aria-label", "title"], Vc = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Dc = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, Bw = /* @__PURE__ */ A({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = ta(), r = k(() => l.value.theme === "dark");
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
      (t(), n("svg", Vc, [
        r.value ? (t(), n(z, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", Dc))
      ]))
    ], 8, Lc));
  }
}), Tc = ["width", "height"], Fc = { key: 0 }, Ec = ["x1", "x2", "y1", "y2"], Ic = ["x", "y"], Nc = ["x1", "x2", "y1", "y2"], Rc = ["x", "y"], Uc = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Hc = ["x", "y", "width", "height", "fill", "fill-opacity"], qc = ["x", "y"], Kc = ["x", "y"], Gc = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Wc = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Zc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Jc = { class: "text-xs font-semibold tabular-nums" }, Yc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Xc = { class: "text-muted-foreground" }, Ft = 5.6, Pw = /* @__PURE__ */ A({
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
    function r(B) {
      return a[B] ?? B;
    }
    function s(B, K) {
      if (!l.thresholds?.length)
        return K;
      const q = l.thresholds.find((U) => B < U.max);
      return r(q ? q.color : l.aboveColor);
    }
    const i = G(null), u = G(560), d = G(null);
    let f = null;
    fe(() => {
      f = new ResizeObserver((B) => {
        u.value = Math.max(160, B[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), ve(() => f?.disconnect());
    const b = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((K, q) => ({
      ...K,
      color: K.color ?? b[q % b.length]
    }))), y = k(() => p.value[0]?.points.map((B) => B.label) ?? []), S = k(() => y.value.length), $ = k(() => l.orientation === "horizontal"), _ = k(() => Math.max(0, ...y.value.map((B) => B.length))), x = k(() => {
      if (!$.value)
        return l.showAxis ? 44 : 8;
      const B = _.value * Ft + 16;
      return Math.round(Math.min(Math.max(60, B), u.value * 0.4));
    }), v = k(() => Math.max(4, Math.floor((x.value - 16) / Ft)));
    function g(B) {
      return B.length <= v.value ? B : `${B.slice(0, v.value - 1)}…`;
    }
    const c = k(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: x.value
    })), C = k(() => ({
      w: Math.max(1, u.value - c.value.left - c.value.right),
      h: Math.max(1, l.height - c.value.top - c.value.bottom)
    })), M = (B) => l.format ? l.format(B) : P(B);
    function P(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const W = k(() => {
      const B = y.value.map(
        (Y, ee) => l.stacked ? p.value.reduce((ae, oe) => ae + Math.max(0, oe.points[ee]?.value ?? 0), 0) : Math.max(...p.value.map((ae) => ae.points[ee]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const K = Math.max(...B, 0);
      if (K <= 0)
        return 1;
      const q = 10 ** Math.floor(Math.log10(K));
      return ([1, 2, 2.5, 5, 10].find((Y) => K <= Y * q) ?? 10) * q;
    }), I = k(
      () => ($.value ? C.value.h : C.value.w) / Math.max(1, S.value)
    ), J = k(() => I.value * 0.68), V = k(
      () => l.stacked || p.value.length <= 1 ? J.value : J.value / p.value.length
    ), F = k(() => {
      const B = [], K = new Array(S.value).fill(0);
      return p.value.forEach((q, U) => {
        q.points.forEach((Y, ee) => {
          const oe = Math.max(0, Y.value) / W.value * ($.value ? C.value.w : C.value.h), Le = ($.value ? c.value.top : c.value.left) + ee * I.value + (I.value - J.value) / 2, zt = l.stacked ? 0 : U * V.value;
          B.push(
            $.value ? {
              x: c.value.left + K[ee],
              y: Le + zt,
              w: oe,
              h: Math.max(0, V.value - 2),
              color: s(Y.value, q.color),
              label: Y.label,
              name: q.name,
              value: Y.value,
              index: ee
            } : {
              x: Le + zt,
              y: c.value.top + C.value.h - oe - K[ee],
              w: Math.max(0, V.value - 2),
              h: oe,
              color: s(Y.value, q.color),
              label: Y.label,
              name: q.name,
              value: Y.value,
              index: ee
            }
          ), l.stacked && (K[ee] += oe);
        });
      }), B;
    }), Z = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: W.value * ($.value ? B : 1 - B),
        x: c.value.left + C.value.w * B,
        y: c.value.top + C.value.h * B
      }))
    ), te = k(() => Math.max(1, Math.ceil(S.value / ($.value ? 14 : 10))));
    function N(B) {
      return B === S.value - 1 || B % te.value === 0;
    }
    function D(B) {
      return ($.value ? c.value.top : c.value.left) + B * I.value + I.value / 2;
    }
    const Q = k(() => d.value === null ? null : {
      label: y.value[d.value],
      rows: p.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[d.value]?.value ?? 0
      }))
    });
    return (B, K) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      S.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: K[0] || (K[0] = (q) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", Fc, [
            $.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, L(Z.value, (q) => (t(), n("line", {
                key: `g-${q.x}`,
                x1: q.x,
                x2: q.x,
                y1: c.value.top,
                y2: c.value.top + C.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Ec))), 128)),
              (t(!0), n(z, null, L(Z.value, (q) => (t(), n("text", {
                key: `gt-${q.x}`,
                x: q.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, m(P(q.value)), 9, Ic))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, L(Z.value, (q) => (t(), n("line", {
                key: `g-${q.y}`,
                x1: c.value.left,
                x2: u.value - c.value.right,
                y1: q.y,
                y2: q.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Nc))), 128)),
              (t(!0), n(z, null, L(Z.value, (q) => (t(), n("text", {
                key: `gt-${q.y}`,
                x: c.value.left - 8,
                y: q.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, m(P(q.value)), 9, Rc))), 128))
            ], 64))
          ])) : w("", !0),
          (t(!0), n(z, null, L(y.value, (q, U) => (t(), n("rect", {
            key: `hit-${U}`,
            x: $.value ? c.value.left : c.value.left + U * I.value,
            y: $.value ? c.value.top + U * I.value : c.value.top,
            width: $.value ? C.value.w : I.value,
            height: $.value ? I.value : C.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === U ? 0.4 : 0,
            onMouseenter: (Y) => d.value = U
          }, null, 40, Uc))), 128)),
          (t(!0), n(z, null, L(F.value, (q, U) => (t(), n("rect", {
            key: `b-${U}`,
            x: q.x,
            y: q.y,
            width: q.w,
            height: q.h,
            fill: q.color,
            "fill-opacity": d.value === null || d.value === q.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Hc))), 128)),
          $.value ? (t(!0), n(z, { key: 1 }, L(y.value, (q, U) => ue((t(), n("text", {
            key: `c-${U}`,
            x: c.value.left - 8,
            y: D(U) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(m(g(q)) + " ", 1),
            o("title", null, m(q), 1)
          ], 8, qc)), [
            [je, N(U)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, L(y.value, (q, U) => ue((t(), n("text", {
            key: `c-${U}`,
            x: D(U),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(q), 9, Kc)), [
            [je, N(U)]
          ])), 128))
        ], 40, Tc)),
        Q.value ? (t(), n("div", Gc, [
          o("p", Wc, m(Q.value.label), 1),
          (t(!0), n(z, null, L(Q.value.rows, (q, U) => (t(), n("div", {
            key: U,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: q.color })
            }, null, 4),
            o("span", Zc, m(q.name || "Value"), 1),
            o("span", Jc, m(M(q.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", Yc, [
          (t(!0), n(z, null, L(p.value, (q, U) => (t(), n("span", {
            key: U,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: q.color })
            }, null, 4),
            o("span", Xc, m(q.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Qc = ["width", "height"], ef = ["id"], tf = ["stop-color"], af = ["stop-color"], nf = { key: 0 }, lf = ["x1", "x2", "y1", "y2"], of = ["x", "y"], sf = ["x", "y"], rf = ["x1", "x2", "y1", "y2"], uf = ["d", "fill"], df = ["d", "stroke", "stroke-dasharray"], cf = ["cx", "cy", "fill"], ff = { key: 1 }, mf = ["x1", "x2", "y1", "y2"], pf = ["cx", "cy", "fill"], vf = ["x", "y"], gf = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, hf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, bf = { class: "text-xs font-semibold tabular-nums" }, yf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, xf = { class: "text-muted-foreground" }, kf = /* @__PURE__ */ A({
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
    const l = e, a = k(() => b.value.some((B) => B.axis === "right")), r = G(null), s = G(560), i = G(null);
    let u = null;
    fe(() => {
      u = new ResizeObserver((B) => {
        s.value = Math.max(160, B[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), ve(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = Math.random().toString(36).slice(2, 9), b = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((K, q) => ({
      ...K,
      color: K.color ?? d[q % d.length]
    }))), p = k(() => b.value[0]?.points.map((B) => B.label) ?? []), y = k(() => p.value.length), S = k(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), $ = (B) => l.format ? l.format(B) : _(B);
    function _(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function x(B) {
      const K = Math.max(...B, 0);
      if (K <= 0)
        return 1;
      const q = 10 ** Math.floor(Math.log10(K));
      return ([1, 2, 2.5, 5, 10].find((Y) => K <= Y * q) ?? 10) * q;
    }
    const v = k(
      () => x(
        b.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((K) => K.value))
      )
    ), g = k(
      () => x(
        b.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((K) => K.value))
      )
    ), c = k(() => ({
      w: Math.max(1, s.value - S.value.left - S.value.right),
      h: Math.max(1, l.height - S.value.top - S.value.bottom)
    }));
    function C(B) {
      return S.value.left + (y.value <= 1 ? 0 : B / (y.value - 1) * c.value.w);
    }
    function M(B, K = "left") {
      const q = K === "right" ? g.value : v.value;
      return S.value.top + c.value.h - B / q * c.value.h;
    }
    const P = k(
      () => b.value.map((B) => {
        const K = B.points.map((U, Y) => ({
          ...U,
          x: C(Y),
          y: M(U.value, B.axis ?? "left")
        })), q = B.stepped ? W(K) : I(K);
        return { ...B, pts: K, line: q, area: J(q, K) };
      })
    );
    function W(B) {
      if (B.length === 0)
        return "";
      let K = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let q = 1; q < B.length; q++)
        K += ` L${B[q].x.toFixed(2)},${B[q - 1].y.toFixed(2)} L${B[q].x.toFixed(2)},${B[q].y.toFixed(2)}`;
      return K;
    }
    function I(B) {
      const K = B.length;
      if (K === 0)
        return "";
      if (K === 1)
        return `M${B[0].x},${B[0].y}`;
      const q = [], U = [];
      for (let ae = 0; ae < K - 1; ae++)
        q[ae] = B[ae + 1].x - B[ae].x, U[ae] = q[ae] === 0 ? 0 : (B[ae + 1].y - B[ae].y) / q[ae];
      const Y = [U[0]];
      for (let ae = 1; ae < K - 1; ae++)
        if (U[ae - 1] * U[ae] <= 0)
          Y[ae] = 0;
        else {
          const oe = 2 * q[ae] + q[ae - 1], Le = q[ae] + 2 * q[ae - 1];
          Y[ae] = (oe + Le) / (oe / U[ae - 1] + Le / U[ae]);
        }
      Y[K - 1] = U[K - 2];
      let ee = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let ae = 0; ae < K - 1; ae++) {
        const oe = q[ae] / 3;
        ee += ` C${(B[ae].x + oe).toFixed(2)},${(B[ae].y + Y[ae] * oe).toFixed(2)} ${(B[ae + 1].x - oe).toFixed(2)},${(B[ae + 1].y - Y[ae + 1] * oe).toFixed(2)} ${B[ae + 1].x.toFixed(2)},${B[ae + 1].y.toFixed(2)}`;
      }
      return ee;
    }
    function J(B, K) {
      if (K.length === 0)
        return "";
      const q = S.value.top + c.value.h;
      return `${B} L${K[K.length - 1].x.toFixed(2)},${q} L${K[0].x.toFixed(2)},${q} Z`;
    }
    const V = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: S.value.top + c.value.h * B,
        value: v.value * (1 - B)
      }))
    ), F = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: S.value.top + c.value.h * B,
        value: g.value * (1 - B)
      }))
    ), Z = k(() => Math.max(1, Math.ceil(y.value / 8)));
    function te(B) {
      return B === y.value - 1 || B % Z.value === 0;
    }
    function N(B) {
      const K = B.currentTarget.getBoundingClientRect(), q = B.clientX - K.left - S.value.left, U = y.value <= 1 ? 1 : c.value.w / (y.value - 1);
      i.value = Math.min(y.value - 1, Math.max(0, Math.round(q / U)));
    }
    const D = k(() => {
      if (i.value === null || y.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: C(B),
        label: p.value[B],
        rows: P.value.map((K) => ({
          name: K.name,
          color: K.color,
          value: K.points[B]?.value ?? 0,
          y: K.pts[B]?.y ?? 0
        }))
      };
    }), Q = k(() => {
      if (!D.value)
        return {};
      const B = D.value.x > s.value * 0.6;
      return {
        left: `${D.value.x}px`,
        top: "8px",
        transform: B ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (B, K) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      y.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: N,
          onMouseleave: K[0] || (K[0] = (q) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, L(P.value, (q, U) => (t(), n("linearGradient", {
              id: `pk-fill-${h(f)}-${U}`,
              key: U,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": q.color,
                "stop-opacity": "0.25"
              }, null, 8, tf),
              o("stop", {
                offset: "100%",
                "stop-color": q.color,
                "stop-opacity": "0.01"
              }, null, 8, af)
            ], 8, ef))), 128))
          ]),
          e.showAxis ? (t(), n("g", nf, [
            (t(!0), n(z, null, L(V.value, (q) => (t(), n("line", {
              key: q.y,
              x1: S.value.left,
              x2: s.value - S.value.right,
              y1: q.y,
              y2: q.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, lf))), 128)),
            (t(!0), n(z, null, L(V.value, (q) => (t(), n("text", {
              key: `t-${q.y}`,
              x: S.value.left - 8,
              y: q.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, m(_(q.value)), 9, of))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, L(F.value, (q) => (t(), n("text", {
              key: `rt-${q.y}`,
              x: s.value - S.value.right + 8,
              y: q.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, m(_(q.value)), 9, sf))), 128)) : w("", !0)
          ])) : w("", !0),
          (t(!0), n(z, null, L(p.value, (q, U) => ue((t(), n("line", {
            key: `v-${U}`,
            x1: C(U),
            x2: C(U),
            y1: S.value.top,
            y2: S.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, rf)), [
            [je, te(U)]
          ])), 128)),
          (t(!0), n(z, null, L(P.value, (q, U) => (t(), n("g", {
            key: `s-${U}`
          }, [
            q.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: q.area,
              fill: `url(#pk-fill-${h(f)}-${U})`
            }, null, 8, uf)) : w("", !0),
            o("path", {
              d: q.line,
              fill: "none",
              stroke: q.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": q.dashed ? "6 4" : void 0
            }, null, 8, df),
            q.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: q.pts[0].x,
              cy: q.pts[0].y,
              r: "3",
              fill: q.color
            }, null, 8, cf)) : w("", !0)
          ]))), 128)),
          D.value ? (t(), n("g", ff, [
            o("line", {
              x1: D.value.x,
              x2: D.value.x,
              y1: S.value.top,
              y2: S.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, mf),
            (t(!0), n(z, null, L(D.value.rows, (q, U) => (t(), n("circle", {
              key: `d-${U}`,
              cx: D.value.x,
              cy: q.y,
              r: "4",
              fill: q.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, pf))), 128))
          ])) : w("", !0),
          (t(!0), n(z, null, L(p.value, (q, U) => ue((t(), n("text", {
            key: `x-${U}`,
            x: C(U),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, m(q), 9, vf)), [
            [je, te(U)]
          ])), 128))
        ], 40, Qc)),
        D.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(Q.value)
        }, [
          o("p", gf, m(D.value.label), 1),
          (t(!0), n(z, null, L(D.value.rows, (q, U) => (t(), n("div", {
            key: U,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: q.color })
            }, null, 4),
            o("span", hf, m(q.name || "Value"), 1),
            o("span", bf, m($(q.value)), 1)
          ]))), 128))
        ], 4)) : w("", !0),
        e.showLegend && b.value.length > 1 ? (t(), n("div", yf, [
          (t(!0), n(z, null, L(P.value, (q, U) => (t(), n("span", {
            key: U,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: q.color })
            }, null, 4),
            o("span", xf, m(q.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), $f = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, wf = { class: "text-muted-foreground text-[11px] capitalize" }, Cf = { class: "text-sm font-semibold tabular-nums" }, _f = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ze = /* @__PURE__ */ A({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", $f, [
      o("p", wf, m(e.label), 1),
      o("p", Cf, [
        R(m(e.value) + " ", 1),
        e.share ? (t(), n("span", _f, " (" + m(e.share) + ") ", 1)) : w("", !0)
      ])
    ]));
  }
}), Sf = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Mf = ["width", "height", "viewBox", "aria-label"], Bf = ["d", "fill", "fill-opacity", "onMouseenter"], Pf = ["x", "y"], zf = ["x", "y"], Af = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, jf = ["onMouseenter"], Of = { class: "min-w-0 flex-1 truncate capitalize" }, Lf = { class: "tabular-nums font-medium" }, Vf = { class: "text-muted-foreground w-9 text-right tabular-nums" }, zw = /* @__PURE__ */ A({
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
    function b(v) {
      return 1 - Math.min(0.55, Math.floor(v / a.length) * 0.28);
    }
    const p = k(() => {
      if (r.value <= 0)
        return [];
      const v = i.value / 2;
      let g = -Math.PI / 2;
      return l.data.map((c, C) => {
        const M = c.value / r.value, P = M * Math.PI * 2, W = g, I = g + P;
        return g = I, {
          ...c,
          share: M,
          colour: f(C),
          opacity: b(C),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: M >= 0.9999 ? $(v) : S(v, W, I, u.value, d.value)
        };
      });
    });
    function y(v, g, c) {
      return `${(v + Math.cos(g) * c).toFixed(2)},${(v + Math.sin(g) * c).toFixed(2)}`;
    }
    function S(v, g, c, C, M) {
      const P = c - g > Math.PI ? 1 : 0;
      return M <= 0 ? `M${v},${v} L${y(v, g, C)} A${C},${C} 0 ${P} 1 ${y(v, c, C)} Z` : [
        `M${y(v, g, C)}`,
        `A${C},${C} 0 ${P} 1 ${y(v, c, C)}`,
        `L${y(v, c, M)}`,
        `A${M},${M} 0 ${P} 0 ${y(v, g, M)}`,
        "Z"
      ].join(" ");
    }
    function $(v) {
      const g = u.value, c = d.value, C = [
        `M${v - g},${v}`,
        `A${g},${g} 0 1 1 ${v + g},${v}`,
        `A${g},${g} 0 1 1 ${v - g},${v}`,
        "Z"
      ];
      return c <= 0 ? C.join(" ") : [
        ...C,
        `M${v - c},${v}`,
        `A${c},${c} 0 1 0 ${v + c},${v}`,
        `A${c},${c} 0 1 0 ${v - c},${v}`,
        "Z"
      ].join(" ");
    }
    const _ = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), x = (v) => `${(v * 100).toFixed(v < 0.01 ? 2 : 0)}%`;
    return (v, g) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Sf, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${_(r.value)}`
      }, [
        (t(!0), n(z, null, L(p.value, (c, C) => (t(), n("path", {
          key: C,
          d: c.path,
          fill: c.colour,
          "fill-opacity": s.value === null || s.value === C ? c.opacity : c.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (M) => s.value = C,
          onMouseleave: g[0] || (g[0] = (M) => s.value = null)
        }, null, 40, Bf))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, m(_(s.value === null ? r.value : p.value[s.value].value)), 9, Pf),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(s.value === null ? "Total" : p.value[s.value].label), 9, zf)
        ], 64)) : w("", !0)
      ], 8, Mf)),
      o("ul", Af, [
        (t(!0), n(z, null, L(p.value, (c, C) => (t(), n("li", {
          key: C,
          class: j(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === C ? "bg-muted" : ""]),
          onMouseenter: (M) => s.value = C,
          onMouseleave: g[1] || (g[1] = (M) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          o("span", Of, m(c.label), 1),
          o("span", Lf, m(_(c.value)), 1),
          o("span", Vf, m(x(c.share)), 1)
        ], 42, jf))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(Ze, {
        key: 0,
        label: p.value[s.value].label,
        value: _(p.value[s.value].value),
        share: x(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), Df = ["width", "height", "viewBox", "aria-label"], Tf = { class: "text-border" }, Ff = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Ef = { class: "fill-muted-foreground text-[10px]" }, If = ["x", "y"], Nf = ["x", "y"], Rf = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Uf = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, Aw = /* @__PURE__ */ A({
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
      u = new ResizeObserver((Z) => {
        const te = Z[0]?.contentRect.width ?? 0;
        te > 0 && (s.value = te);
      }), r.value && u.observe(r.value);
    }), ve(() => u?.disconnect());
    const d = k(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (Z, te) => te.color ?? a[Z % a.length], b = k(() => d.value.flatMap((Z) => Z.points)), p = k(() => b.value.some((Z) => typeof Z.r == "number")), y = { top: 12, right: 16, bottom: 32, left: 48 }, S = k(() => Math.max(10, s.value - y.left - y.right)), $ = k(() => Math.max(10, l.height - y.top - y.bottom));
    function _(Z) {
      if (Z.length === 0)
        return [0, 1];
      const te = Math.min(...Z), N = Math.max(...Z), D = N - te || Math.abs(N) || 1;
      return [te - D * 0.08, N + D * 0.08];
    }
    const x = k(() => _(b.value.map((Z) => Z.x))), v = k(() => _(b.value.map((Z) => Z.y))), g = (Z) => {
      const [te, N] = x.value;
      return y.left + (Z - te) / (N - te) * S.value;
    }, c = (Z) => {
      const [te, N] = v.value;
      return y.top + $.value - (Z - te) / (N - te) * $.value;
    }, C = k(() => Math.max(...b.value.map((Z) => Z.r ?? 0), 0));
    function M(Z) {
      if (!p.value || !C.value)
        return 4;
      const te = Math.max(0, Z.r ?? 0) / C.value;
      return 3 + Math.sqrt(te) * (l.maxRadius - 3);
    }
    function P([Z, te]) {
      return Array.from({ length: 5 }, (N, D) => Z + (te - Z) / 4 * D);
    }
    const W = k(() => P(x.value)), I = k(() => P(v.value)), J = (Z) => l.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), V = (Z) => l.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), F = k(() => {
      if (!i.value)
        return null;
      const Z = d.value[i.value.s], te = Z?.points[i.value.p];
      return te ? { series: Z, point: te } : null;
    });
    return (Z, te) => (t(), n("div", {
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
        o("g", Tf, [
          (t(!0), n(z, null, L(I.value, (N, D) => (t(), n("line", {
            key: `gy-${D}`,
            x1: y.left,
            x2: y.left + S.value,
            y1: c(N),
            y2: c(N),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": D === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Ff))), 128))
        ]),
        o("g", Ef, [
          (t(!0), n(z, null, L(I.value, (N, D) => (t(), n("text", {
            key: `ty-${D}`,
            x: y.left - 8,
            y: c(N) + 3,
            "text-anchor": "end"
          }, m(V(N)), 9, If))), 128)),
          (t(!0), n(z, null, L(W.value, (N, D) => (t(), n("text", {
            key: `tx-${D}`,
            x: g(N),
            y: e.height - 10,
            "text-anchor": "middle"
          }, m(J(N)), 9, Nf))), 128))
        ]),
        (t(!0), n(z, null, L(d.value, (N, D) => (t(), n("g", {
          key: `s-${D}`
        }, [
          (t(!0), n(z, null, L(N.points, (Q, B) => (t(), n("circle", {
            key: `p-${D}-${B}`,
            cx: g(Q.x),
            cy: c(Q.y),
            r: M(Q),
            fill: f(D, N),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: f(D, N),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== D || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (K) => i.value = { s: D, p: B },
            onMouseleave: te[0] || (te[0] = (K) => i.value = null)
          }, null, 40, Rf))), 128))
        ]))), 128))
      ], 8, Df)),
      F.value ? (t(), T(Ze, {
        key: 0,
        label: F.value.point.label ?? F.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${J(F.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${V(F.value.point.y)}`,
        share: p.value && F.value.point.r != null ? String(F.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : w("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", Uf, [
        (t(!0), n(z, null, L(d.value, (N, D) => (t(), n("span", {
          key: `l-${D}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: f(D, N) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + m(N.name), 1)
        ]))), 128))
      ])) : w("", !0)
    ], 512));
  }
}), Hf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, qf = ["width", "height", "viewBox"], Kf = ["points"], Gf = ["x1", "y1", "x2", "y2"], Wf = ["points", "fill", "stroke"], Zf = ["cx", "cy", "fill", "onMouseenter"], Jf = ["x", "y", "text-anchor"], Yf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Xf = { class: "truncate" }, jw = /* @__PURE__ */ A({
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
      () => l.series.map((c, C) => ({
        ...c,
        color: c.color ?? a[C % a.length]
      }))
    ), s = k(() => r.value[0]?.points.map((c) => c.label) ?? []), i = k(() => s.value.length), u = k(() => l.height), d = k(() => u.value / 2), f = k(() => u.value / 2 - 34), b = k(() => {
      const c = Math.max(...r.value.flatMap((P) => P.points.map((W) => W.value)), 0);
      if (c <= 0)
        return 1;
      const C = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((P) => c <= P * C) ?? 10) * C;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function y(c, C) {
      const M = p(c);
      return {
        x: d.value + Math.cos(M) * f.value * C,
        y: d.value + Math.sin(M) * f.value * C
      };
    }
    function S(c) {
      return Array.from({ length: i.value }, (C, M) => {
        const P = y(M, c);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const $ = k(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: S(c) }))), _ = k(
      () => r.value.map((c) => {
        const C = c.points.map((M) => Math.max(0, M.value) / b.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: C.map((M, P) => {
            const W = y(P, M);
            return `${W.x.toFixed(2)},${W.y.toFixed(2)}`;
          }).join(" "),
          dots: C.map((M, P) => y(P, M))
        };
      })
    ), x = k(
      () => s.value.map((c, C) => {
        const M = p(C), P = d.value + Math.cos(M) * (f.value + 14), W = d.value + Math.sin(M) * (f.value + 14), I = Math.cos(M);
        return {
          label: c,
          x: P,
          y: W + 3,
          anchor: Math.abs(I) < 0.2 ? "middle" : I > 0 ? "start" : "end"
        };
      })
    ), v = G(null), g = (c) => l.format ? l.format(c) : new Intl.NumberFormat().format(c);
    return (c, C) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Hf, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L($.value, (M) => (t(), n("polygon", {
          key: M.f,
          points: M.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Kf))), 128)),
        (t(!0), n(z, null, L(s.value, (M, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: y(P, 1).x,
          y2: y(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Gf))), 128)),
        (t(!0), n(z, null, L(_.value, (M, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: M.outline,
            fill: M.color,
            "fill-opacity": "0.16",
            stroke: M.color,
            "stroke-width": "2"
          }, null, 8, Wf),
          (t(!0), n(z, null, L(M.dots, (W, I) => (t(), n("circle", {
            key: I,
            cx: W.x,
            cy: W.y,
            r: "3",
            fill: M.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (J) => v.value = {
              series: M.name,
              axis: s.value[I],
              value: M.values[I]?.value ?? 0
            },
            onMouseleave: C[0] || (C[0] = (J) => v.value = null)
          }, null, 40, Zf))), 128))
        ]))), 128)),
        (t(!0), n(z, null, L(x.value, (M, P) => (t(), n("text", {
          key: `l-${P}`,
          x: M.x,
          y: M.y,
          "text-anchor": M.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, m(M.label), 9, Jf))), 128))
      ], 8, qf)),
      e.showLegend ? (t(), n("ul", Yf, [
        (t(!0), n(z, null, L(r.value, (M, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: M.color })
          }, null, 4),
          o("span", Xf, m(M.name), 1)
        ]))), 128))
      ])) : w("", !0),
      v.value ? (t(), T(Ze, {
        key: 1,
        label: `${v.value.series} — ${v.value.axis}`,
        value: g(v.value.value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), Qf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, em = ["width", "height", "viewBox"], tm = ["cx", "cy", "r"], am = ["d", "fill", "fill-opacity", "onMouseenter"], nm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, lm = { class: "min-w-0 flex-1 truncate capitalize" }, om = { class: "font-medium tabular-nums" }, Ow = /* @__PURE__ */ A({
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
    ], r = G(null), s = k(() => l.height), i = k(() => s.value / 2), u = k(() => s.value / 2 - 6), d = k(() => Math.max(...l.data.map((S) => Math.max(0, S.value)), 0)), f = k(() => {
      const S = l.data.length;
      if (S === 0 || d.value <= 0)
        return [];
      const $ = Math.PI * 2 / S;
      return l.data.map((_, x) => {
        const v = Math.sqrt(Math.max(0, _.value) / d.value), g = u.value * v, c = x * $ - Math.PI / 2, C = c + $;
        return {
          ..._,
          color: a[x % a.length],
          share: d.value === 0 ? 0 : _.value / d.value,
          path: b(i.value, c, C, g)
        };
      });
    });
    function b(S, $, _, x) {
      if (x <= 0)
        return "";
      if (_ - $ >= Math.PI * 2 - 1e-6)
        return `M${S - x},${S} A${x},${x} 0 1 1 ${S + x},${S} A${x},${x} 0 1 1 ${S - x},${S} Z`;
      const v = _ - $ > Math.PI ? 1 : 0, g = S + Math.cos($) * x, c = S + Math.sin($) * x, C = S + Math.cos(_) * x, M = S + Math.sin(_) * x;
      return `M${S},${S} L${g.toFixed(2)},${c.toFixed(2)} A${x.toFixed(2)},${x.toFixed(2)} 0 ${v} 1 ${C.toFixed(2)},${M.toFixed(2)} Z`;
    }
    const p = k(() => [0.5, 0.75, 1].map((S) => u.value * S)), y = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S);
    return (S, $) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Qf, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, L(p.value, (_) => (t(), n("circle", {
          key: _,
          cx: i.value,
          cy: i.value,
          r: _,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, tm))), 128)),
        (t(!0), n(z, null, L(f.value, (_, x) => (t(), n("path", {
          key: x,
          d: _.path,
          fill: _.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === x ? 0.75 : 0.3,
          onMouseenter: (v) => r.value = x,
          onMouseleave: $[0] || ($[0] = (v) => r.value = null)
        }, null, 40, am))), 128))
      ], 8, em)),
      e.showLegend ? (t(), n("ul", nm, [
        (t(!0), n(z, null, L(f.value, (_, x) => (t(), n("li", {
          key: x,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: _.color })
          }, null, 4),
          o("span", lm, m(_.label), 1),
          o("span", om, m(y(_.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      r.value !== null ? (t(), T(Ze, {
        key: 1,
        label: f.value[r.value].label,
        value: y(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), sm = ["width", "height"], rm = ["x1", "x2", "y1", "y2"], im = ["x", "y"], um = ["x", "y"], dm = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], cm = ["x", "y", "width", "height", "fill", "fill-opacity"], fm = ["d", "stroke"], mm = ["cx", "cy", "fill"], pm = ["x", "y"], vm = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, gm = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, hm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, bm = { class: "text-xs font-semibold tabular-nums" }, ym = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, xm = { class: "text-muted-foreground" }, Lw = /* @__PURE__ */ A({
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
      () => l.bars.map((D, Q) => ({
        ...D,
        color: D.color ?? u[Q % u.length]
      }))
    ), b = k(
      () => l.lines.map((D, Q) => ({
        ...D,
        color: D.color ?? d[Q % d.length]
      }))
    ), p = k(
      () => f.value[0]?.points.map((D) => D.label) ?? b.value[0]?.points.map((D) => D.label) ?? []
    ), y = k(() => p.value.length), S = k(() => l.lineAxis === "right"), $ = k(() => ({
      top: 12,
      right: S.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), _ = k(() => ({
      w: Math.max(1, r.value - $.value.left - $.value.right),
      h: Math.max(1, l.height - $.value.top - $.value.bottom)
    }));
    function x(D) {
      const Q = Math.max(...D, 0);
      if (Q <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(Q));
      return ([1, 2, 2.5, 5, 10].find((q) => Q <= q * B) ?? 10) * B;
    }
    const v = k(
      () => x([
        ...f.value.flatMap((D) => D.points.map((Q) => Q.value)),
        ...S.value ? [] : b.value.flatMap((D) => D.points.map((Q) => Q.value))
      ])
    ), g = k(
      () => S.value ? x(b.value.flatMap((D) => D.points.map((Q) => Q.value))) : v.value
    ), c = k(() => _.value.w / Math.max(1, y.value)), C = k(() => c.value * 0.6), M = k(() => C.value / Math.max(1, f.value.length));
    function P(D) {
      return $.value.left + D * c.value + c.value / 2;
    }
    const W = k(
      () => f.value.flatMap(
        (D, Q) => D.points.map((B, K) => {
          const q = Math.max(0, B.value) / v.value * _.value.h;
          return {
            x: P(K) - C.value / 2 + Q * M.value,
            y: $.value.top + _.value.h - q,
            w: Math.max(0, M.value - 2),
            h: q,
            color: D.color,
            index: K,
            name: D.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), I = k(
      () => b.value.map((D) => {
        const Q = D.points.map((B, K) => ({
          x: P(K),
          y: $.value.top + _.value.h - Math.max(0, B.value) / g.value * _.value.h,
          value: B.value
        }));
        return {
          ...D,
          pts: Q,
          d: Q.map((B, K) => `${K === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), J = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((D) => ({
        y: $.value.top + _.value.h * D,
        left: v.value * (1 - D),
        right: g.value * (1 - D)
      }))
    ), V = k(() => Math.max(1, Math.ceil(y.value / 10)));
    function F(D) {
      return D === y.value - 1 || D % V.value === 0;
    }
    const Z = (D) => l.format ? l.format(D) : te(D);
    function te(D) {
      return Math.abs(D) >= 1e6 ? `${(D / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(D) >= 1e3 ? `${(D / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(D * 100) / 100);
    }
    const N = k(() => {
      if (s.value === null)
        return null;
      const D = s.value;
      return {
        label: p.value[D],
        rows: [
          ...f.value.map((Q) => ({
            name: Q.name,
            color: Q.color,
            value: Q.points[D]?.value ?? 0
          })),
          ...b.value.map((Q) => ({
            name: Q.name,
            color: Q.color,
            value: Q.points[D]?.value ?? 0
          }))
        ]
      };
    });
    return (D, Q) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      y.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Q[0] || (Q[0] = (B) => s.value = null)
        }, [
          (t(!0), n(z, null, L(J.value, (B) => (t(), n("line", {
            key: `g-${B.y}`,
            x1: $.value.left,
            x2: r.value - $.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, rm))), 128)),
          (t(!0), n(z, null, L(J.value, (B) => (t(), n("text", {
            key: `lt-${B.y}`,
            x: $.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, m(te(B.left)), 9, im))), 128)),
          S.value ? (t(!0), n(z, { key: 0 }, L(J.value, (B) => (t(), n("text", {
            key: `rt-${B.y}`,
            x: r.value - $.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, m(te(B.right)), 9, um))), 128)) : w("", !0),
          (t(!0), n(z, null, L(p.value, (B, K) => (t(), n("rect", {
            key: `hit-${K}`,
            x: $.value.left + K * c.value,
            y: $.value.top,
            width: c.value,
            height: _.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === K ? 0.4 : 0,
            onMouseenter: (q) => s.value = K
          }, null, 40, dm))), 128)),
          (t(!0), n(z, null, L(W.value, (B, K) => (t(), n("rect", {
            key: `b-${K}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, cm))), 128)),
          (t(!0), n(z, null, L(I.value, (B, K) => (t(), n("g", {
            key: `l-${K}`
          }, [
            o("path", {
              d: B.d,
              fill: "none",
              stroke: B.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, fm),
            s.value !== null && B.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, mm)) : w("", !0)
          ]))), 128)),
          (t(!0), n(z, null, L(p.value, (B, K) => ue((t(), n("text", {
            key: `x-${K}`,
            x: P(K),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(B), 9, pm)), [
            [je, F(K)]
          ])), 128))
        ], 40, sm)),
        N.value ? (t(), n("div", vm, [
          o("p", gm, m(N.value.label), 1),
          (t(!0), n(z, null, L(N.value.rows, (B, K) => (t(), n("div", {
            key: K,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            o("span", hm, m(B.name), 1),
            o("span", bm, m(Z(B.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend ? (t(), n("div", ym, [
          (t(!0), n(z, null, L([...f.value, ...b.value], (B, K) => (t(), n("span", {
            key: K,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: B.color })
            }, null, 4),
            o("span", xm, m(B.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), km = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, $m = { class: "text-muted-foreground" }, wm = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Cm = ["width", "height"], _m = ["x", "y"], Sm = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Mm = ["x", "y"], Bm = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Pm = { class: "text-[11px] font-medium capitalize" }, zm = { class: "text-muted-foreground text-[11px] capitalize" }, Am = { class: "text-sm font-semibold tabular-nums" }, jm = { class: "text-muted-foreground text-xs font-normal" }, Vw = /* @__PURE__ */ A({
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
      i = new ResizeObserver((C) => {
        r.value = Math.max(160, C[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ve(() => i?.disconnect());
    const u = k(() => l.series[0]?.points.map((C) => C.label) ?? []), d = k(() => l.series.length), f = k(() => u.value.length), b = k(() => Math.min(140, Math.max(60, r.value * 0.16))), p = k(() => Math.max(1, r.value - b.value - 8)), y = k(() => p.value / Math.max(1, f.value)), S = k(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function $(C) {
      if (C === 0)
        return "var(--muted)";
      const M = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(C / M * 100)}%, var(--muted))`;
    }
    function _(C) {
      for (let M = 0; M < l.buckets.length; M++) {
        const P = l.buckets[M].max;
        if (P === void 0 || C < P)
          return M;
      }
      return l.buckets.length - 1;
    }
    const x = k(
      () => l.series.flatMap(
        (C, M) => C.points.map((P, W) => {
          const I = _(P.value);
          return {
            row: M,
            col: W,
            x: b.value + W * y.value,
            y: 4 + M * S.value,
            w: Math.max(1, y.value - 1),
            h: Math.max(1, S.value - 4),
            colour: $(I),
            label: P.label,
            value: P.value,
            rowName: C.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), v = k(() => y.value < 2), g = k(() => s.value ? x.value.find((C) => C.row === s.value.row && C.col === s.value.col) ?? null : null), c = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, M) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", km, [
          (t(!0), n(z, null, L(e.buckets, (P, W) => (t(), n("span", {
            key: W,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: $(W) })
            }, null, 4),
            o("span", $m, m(P.label), 1)
          ]))), 128))
        ]),
        v.value ? (t(), n("p", wm, m(f.value) + " columns - too many to label individually ", 1)) : w("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: M[0] || (M[0] = (P) => s.value = null)
        }, [
          (t(!0), n(z, null, L(e.series, (P, W) => (t(), n("text", {
            key: `r-${W}`,
            x: b.value - 10,
            y: 4 + W * S.value + S.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, m(P.name), 9, _m))), 128)),
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
            onMouseenter: (I) => s.value = { row: P.row, col: P.col }
          }, null, 40, Sm))), 128)),
          e.showColumnLabels && !v.value ? (t(!0), n(z, { key: 0 }, L(u.value, (P, W) => (t(), n("text", {
            key: `c-${W}`,
            x: b.value + W * y.value + y.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, m(P), 9, Mm))), 128)) : w("", !0)
        ], 40, Cm)),
        g.value ? (t(), n("div", Bm, [
          o("p", Pm, m(g.value.label), 1),
          o("p", zm, m(g.value.rowName), 1),
          o("p", Am, [
            R(m(c(g.value.value)) + " ", 1),
            o("span", jm, "(" + m(g.value.bucketLabel) + ")", 1)
          ])
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Om = ["viewBox"], Lm = { key: 0 }, Vm = ["id"], Dm = ["stop-color"], Tm = ["stop-color"], Fm = ["d", "fill"], Em = ["d", "stroke"], Et = 100, Re = 30, tt = /* @__PURE__ */ A({
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
      const d = l.data.map((y) => y.value);
      if (d.length < 2)
        return [];
      const f = Math.min(...d), p = Math.max(...d) - f || 1;
      return d.map((y, S) => ({
        x: S / (d.length - 1) * Et,
        y: Re - (y - f) / p * (Re - 4) - 2
      }));
    });
    function s(d) {
      const f = d.length;
      if (f < 2)
        return "";
      const b = [], p = [];
      for (let $ = 0; $ < f - 1; $++)
        b[$] = d[$ + 1].x - d[$].x, p[$] = b[$] === 0 ? 0 : (d[$ + 1].y - d[$].y) / b[$];
      const y = [p[0]];
      for (let $ = 1; $ < f - 1; $++)
        if (p[$ - 1] * p[$] <= 0)
          y[$] = 0;
        else {
          const _ = 2 * b[$] + b[$ - 1], x = b[$] + 2 * b[$ - 1];
          y[$] = (_ + x) / (_ / p[$ - 1] + x / p[$]);
        }
      y[f - 1] = p[f - 2];
      let S = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let $ = 0; $ < f - 1; $++) {
        const _ = b[$] / 3;
        S += ` C${(d[$].x + _).toFixed(2)},${(d[$].y + y[$] * _).toFixed(2)} ${(d[$ + 1].x - _).toFixed(2)},${(d[$ + 1].y - y[$ + 1] * _).toFixed(2)} ${d[$ + 1].x.toFixed(2)},${d[$ + 1].y.toFixed(2)}`;
      }
      return S;
    }
    const i = k(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((f, b) => `${b === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), u = k(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Re} L${d[0].x.toFixed(2)},${Re} Z`;
    });
    return (d, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${Et} ${Re}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", Lm, [
        o("linearGradient", {
          id: `pk-spark-${h(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Dm),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Tm)
        ], 8, Vm)
      ])) : w("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${h(a)})`
      }, null, 8, Fm)) : w("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Em)
    ], 12, Om)) : w("", !0);
  }
}), Im = { class: "flex items-center gap-1 text-xs" }, Nm = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Rm = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ua = /* @__PURE__ */ A({
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
    return (u, d) => (t(), n("span", Im, [
      o("span", {
        class: j(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Nm, m(s.value), 1),
        R(" " + m(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Rm, m(e.comparison), 1)) : w("", !0)
    ]));
  }
}), Um = ["aria-label"], Fe = /* @__PURE__ */ A({
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
        class: j(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Um));
  }
}), Hm = ["data-collapsed"], qm = { class: "flex flex-wrap items-start justify-between gap-2" }, Km = { class: "flex min-w-0 items-start gap-2" }, Gm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wm = ["d"], Zm = { class: "min-w-0" }, Jm = { class: "text-sm font-medium" }, Ym = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Xm = { class: "flex shrink-0 items-center gap-1.5" }, Qm = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, ep = ["aria-pressed", "onClick"], tp = ["aria-expanded", "aria-label", "title"], ap = ["aria-label"], np = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, lp = ["d"], op = /* @__PURE__ */ A({
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
    const l = e, a = ha(), r = G(l.defaultCollapsed), s = k(() => !!l.icon && !a.icon), i = k(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), n("div", {
      class: j(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", qm, [
        o("div", Km, [
          H(u.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", Gm, [
              o("path", {
                d: h(ie)(e.icon)
              }, null, 8, Wm)
            ])) : w("", !0)
          ]),
          o("div", Zm, [
            o("p", Jm, m(e.label), 1),
            e.description ? (t(), n("p", Ym, m(e.description), 1)) : w("", !0),
            H(u.$slots, "trend")
          ])
        ]),
        o("div", Xm, [
          H(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Qm, [
            (t(!0), n(z, null, L(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: j([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (b) => u.$emit("update:period", f.value)
            }, m(f.label), 11, ep))), 128))
          ])) : w("", !0),
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
              class: j(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, tp)) : w("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (f) => u.$emit("hide"))
          }, [
            (t(), n("svg", np, [
              o("path", {
                d: h(ie)("eye-off")
              }, null, 8, lp)
            ]))
          ], 8, ap)) : w("", !0)
        ])
      ]),
      r.value ? w("", !0) : (t(), n("div", {
        key: 0,
        style: ne(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(Fe, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ne({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : H(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, Hm));
  }
}), sp = ["aria-pressed", "aria-label", "title"], rp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ip = ["d"], up = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, dp = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, cp = ["href"], fp = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mp = ["d"], pp = ["aria-label", "onClick"], vp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gp = ["d"], hp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bp = ["d"], yp = {
  key: 0,
  class: "flex flex-col gap-1"
}, xp = ["onClick"], kp = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $p = ["d"], wp = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Cp = /* @__PURE__ */ A({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(!1), i = G(!1), u = k(
      () => a.catalog.filter((b) => !a.items.some((p) => p.id === b.id))
    );
    function d(b) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== b)
      );
    }
    function f(b) {
      r("update:items", [...a.items, b]), i.value = !1;
    }
    return (b, p) => (t(), n(z, null, [
      E(op, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (y) => r("hide"))
      }, {
        actions: O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (y) => s.value = !s.value)
          }, [
            (t(), n("svg", rp, [
              o("path", {
                d: h(ie)(s.value ? "check" : "pencil")
              }, null, 8, ip)
            ]))
          ], 8, sp)
        ]),
        default: O(() => [
          e.items.length === 0 ? (t(), n("div", up, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            E(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (y) => i.value = !0)
            }, {
              default: O(() => [...p[6] || (p[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", dp, [
            (t(!0), n(z, null, L(e.items, (y) => (t(), n("div", {
              key: y.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: y.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", fp, [
                  o("path", {
                    d: h(ie)(y.icon)
                  }, null, 8, mp)
                ])),
                R(" " + m(y.label), 1)
              ], 8, cp),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${y.label}`,
                onClick: (S) => d(y.id)
              }, [
                (t(), n("svg", vp, [
                  o("path", {
                    d: h(ie)("x")
                  }, null, 8, gp)
                ]))
              ], 8, pp)) : w("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (y) => i.value = !0)
            }, [
              (t(), n("svg", hp, [
                o("path", {
                  d: h(ie)("plus")
                }, null, 8, bp)
              ])),
              p[8] || (p[8] = R(" Add ", -1))
            ])) : w("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      E(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (y) => i.value = !1)
      }, {
        footer: O(() => [
          E(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (y) => i.value = !1)
          }, {
            default: O(() => [...p[9] || (p[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: O(() => [
          u.value.length ? (t(), n("ul", yp, [
            (t(!0), n(z, null, L(u.value, (y) => (t(), n("li", {
              key: y.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (S) => f(y)
              }, [
                (t(), n("svg", kp, [
                  o("path", {
                    d: h(ie)(y.icon)
                  }, null, 8, $p)
                ])),
                R(" " + m(y.label), 1)
              ], 8, xp)
            ]))), 128))
          ])) : (t(), n("p", wp, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), _p = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Sp = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Mp = { class: "relative w-full max-w-xl" }, Bp = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Pp = ["d"], zp = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Ap = ["data-slot"], jp = { class: "px-5 py-4" }, Op = { class: "mb-3 text-sm font-semibold" }, Lp = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Vp = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Dp = ["d"], Tp = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, Dw = /* @__PURE__ */ A({
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
      return typeof d == "string" ? d : ba(d);
    }), s = Xt({
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
        links: d ? f.links.filter((b) => b.label.toLowerCase().includes(d)) : f.links
      })).filter((f) => f.links.length > 0);
    });
    return (d, f) => (t(), n("div", {
      class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      o("header", null, [
        o("h1", _p, m(e.title), 1),
        e.description ? (t(), n("p", Sp, m(e.description), 1)) : w("", !0)
      ]),
      o("div", Mp, [
        (t(), n("svg", Bp, [
          o("path", {
            d: h(ie)("search")
          }, null, 8, Pp)
        ])),
        E(pe, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (b) => a.value = b),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), n("div", zp, [
        (t(!0), n(z, null, L(u.value, (b) => (t(), n("section", {
          key: b.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${b.key}`
        }, [
          o("div", jp, [
            o("h2", Op, m(b.title), 1),
            o("div", Lp, [
              (t(!0), n(z, null, L(b.links, (p) => (t(), T(Ae(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: j(h(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: O(() => [
                  (t(), n("svg", Vp, [
                    o("path", {
                      d: h(ie)(p.icon)
                    }, null, 8, Dp)
                  ])),
                  R(" " + m(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Ap))), 128))
      ])) : (t(), n("p", Tp, ' Nothing matches "' + m(a.value) + '". ', 1))
    ], 2));
  }
}), Fp = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Ep = { class: "flex flex-1 flex-col gap-1 p-4" }, Ip = { class: "text-muted-foreground relative text-xs font-medium" }, Np = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Rp = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Up = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Hp = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, Tw = /* @__PURE__ */ A({
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
    return (a, r) => (t(), n("div", Fp, [
      o("div", Ep, [
        o("p", Ip, m(e.label), 1),
        e.loading ? (t(), T(Fe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Np, " Could not load ")) : (t(), n("span", Rp, m(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(ua, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", Up, m(e.description), 1)) : w("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Hp, [
        E(tt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : w("", !0)
    ]));
  }
}), qp = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Kp = { class: "flex flex-col gap-1 p-4" }, Gp = { class: "flex items-start justify-between gap-2" }, Wp = { class: "text-sm font-medium" }, Zp = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Jp = { class: "mt-1 flex flex-wrap items-center gap-2" }, Yp = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Xp = {
  key: 0,
  class: "-mb-px"
}, Xe = /* @__PURE__ */ A({
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
    return (i, u) => (t(), n("div", qp, [
      o("div", Kp, [
        o("div", Gp, [
          o("p", Wp, m(e.label), 1),
          H(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Zp, m(e.caption), 1)) : w("", !0),
        o("div", Jp, [
          e.loading ? (t(), T(Fe, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Yp, m(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: j(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, m(e.delta > 0 ? "+" : "") + m(e.delta) + "% ", 3)) : w("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Xp, [
        E(tt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : w("", !0)
    ]));
  }
}), Qp = { class: "relative flex flex-col gap-2" }, ev = ["aria-label"], tv = ["onMouseenter"], av = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, nv = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, lv = { class: "truncate" }, ov = { class: "text-sm font-semibold tabular-nums" }, Fw = /* @__PURE__ */ A({
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
    ], r = k(() => l.segments.reduce((b, p) => b + Math.max(0, p.value), 0)), s = k(() => Math.max(l.total ?? r.value, r.value, 1)), i = k(
      () => l.segments.map((b, p) => {
        const y = Math.max(0, b.value) / s.value;
        return {
          ...b,
          color: b.color ?? a[p % a.length],
          share: y,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: b.value > 0 ? `max(2px, ${(y * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (b) => l.format ? l.format(b) : new Intl.NumberFormat().format(b), d = G(null), f = (b) => `${(b * 100).toFixed(b > 0 && b < 0.01 ? 1 : 0)}%`;
    return (b, p) => (t(), n("div", Qp, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((y) => `${y.label} ${u(y.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, L(i.value, (y, S) => (t(), n("span", {
          key: S,
          class: j(["h-full transition-all", [
            S === 0 ? "rounded-l-full" : "",
            S === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: y.width,
            background: y.color,
            opacity: d.value === null || d.value === S ? 1 : 0.4
          }),
          onMouseenter: ($) => d.value = S,
          onMouseleave: p[0] || (p[0] = ($) => d.value = null)
        }, null, 46, tv))), 128))
      ], 12, ev),
      e.showLegend ? (t(), n("div", av, [
        (t(!0), n(z, null, L(i.value, (y, S) => (t(), n("div", {
          key: S,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", nv, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: y.color })
            }, null, 4),
            o("span", lv, m(y.label), 1)
          ]),
          o("span", ov, m(u(y.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      d.value !== null ? (t(), T(Ze, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: f(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), sv = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, rv = ["data-heading"], iv = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, uv = { class: "text-muted-foreground truncate" }, dv = ["aria-label"], Ew = /* @__PURE__ */ A({
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
        const u = i.bar.segments.reduce((f, b) => f + Math.max(0, b.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
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
    return (i, u) => (t(), n("div", sv, [
      (t(!0), n(z, null, L(s.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: j(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, m(d.label), 3)) : (t(), n("div", iv, [
          o("span", uv, m(d.label), 1),
          o("span", {
            class: j(["shrink-0 font-medium tabular-nums", d.tone ? a[d.tone] : "text-foreground"])
          }, m(d.value), 3)
        ])),
        d.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), n(z, null, L(d.segments, (f, b) => (t(), n("span", {
            key: b,
            class: j(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: ne({ width: f.width })
          }, null, 6))), 128))
        ], 8, dv)) : w("", !0)
      ], 8, rv))), 128))
    ]));
  }
}), cv = {
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
}, fv = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function mv(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function pv(e, l) {
  return l || (e ? cv[mv(e)] ?? "neutral" : "neutral");
}
function vv(e, l) {
  return fv[pv(e, l)];
}
const ge = /* @__PURE__ */ A({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = k(() => vv(l.status, l.tone));
    return (r, s) => (t(), T(Ue, {
      variant: a.value,
      class: j(l.class)
    }, {
      default: O(() => [
        H(r.$slots, "default", {}, () => [
          R(m(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), gv = ["data-layout"], hv = ["src", "alt"], bv = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, yv = ["src"], xv = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, kv = ["onMouseenter"], $v = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, wv = { class: "min-w-0" }, Cv = { class: "truncate text-sm font-medium" }, _v = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Sv = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Mv = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Bv = { class: "min-w-0" }, Pv = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, zv = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Av = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jv = ["d"], Ov = ["aria-label"], Lv = /* @__PURE__ */ A({
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
    function u(x) {
      if (typeof x != "string")
        return null;
      const v = x.trim();
      return v === "" ? null : /^(https?:)?\/\//i.test(v) ? v : null;
    }
    const d = k(() => {
      const x = [r.item.image, ...r.item.images ?? []].map(u).filter((v) => v !== null);
      return [...new Set(x)];
    }), f = k(() => d.value[i.value] ?? d.value[0] ?? null), b = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((x) => x[0]?.toUpperCase() ?? "").join("")
    ), p = k(() => {
      const x = r.item.progress;
      if (!x)
        return null;
      const v = Math.max(x.total ?? 100, x.value, 1);
      return `${Math.min(100, Math.max(0, x.value / v * 100)).toFixed(2)}%`;
    }), y = k(() => d.value.length > 1 ? d.value[1] : null), S = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), $ = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function _(x) {
      x.stopPropagation(), s("cart", r.item.key);
    }
    return (x, v) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: j(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: v[0] || (v[0] = (g) => s("select", e.item.key)),
      onKeydown: v[1] || (v[1] = ya(ce((g) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: v[2] || (v[2] = (g) => i.value = 0)
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
        }, null, 8, hv)) : (t(), n("span", bv, m(b.value), 1)),
        e.layout === "grid" && y.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: y.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, yv)) : w("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", xv, [
          (t(!0), n(z, null, L(d.value, (g, c) => (t(), n("span", {
            key: c,
            class: j(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (C) => i.value = c
          }, null, 42, kv))), 128))
        ])) : w("", !0)
      ], 2),
      o("div", {
        class: j(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", $v, [
          o("div", wv, [
            o("p", Cv, m(e.item.label), 1),
            e.item.caption ? (t(), n("p", _v, m(e.item.caption), 1)) : w("", !0),
            e.item.facts?.length ? (t(), n("p", Sv, m(e.item.facts.join(" · ")), 1)) : w("", !0)
          ]),
          e.item.status ? (t(), T(ge, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : w("", !0)
        ]),
        o("div", Mv, [
          o("div", Bv, [
            e.item.price ? (t(), n("p", Pv, m(e.item.price), 1)) : w("", !0),
            $.value ? (t(), n("p", zv, m($.value), 1)) : w("", !0)
          ]),
          S.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: _
          }, [
            (t(), n("svg", Av, [
              o("path", {
                d: h(ie)("cart")
              }, null, 8, jv)
            ]))
          ])) : w("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: j(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, Ov)) : w("", !0)
      ], 2)
    ], 42, gv));
  }
});
function Vv(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Dv(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Tv(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Fv = ["data-featured", "data-recommended"], Ev = { class: "flex flex-col gap-1" }, Iv = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Nv = { key: 0 }, Rv = { key: 1 }, Uv = { key: 2 }, Hv = { key: 3 }, qv = { class: "text-sm font-semibold" }, Kv = { class: "flex items-baseline gap-1" }, Gv = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Wv = { class: "text-muted-foreground text-sm" }, Zv = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Jv = { class: "text-muted-foreground mt-1 text-xs" }, Yv = { class: "flex flex-1 flex-col gap-2 text-sm" }, Xv = { class: "flex min-w-0 items-start gap-2" }, Qv = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, eg = ["d"], tg = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ag = ["d"], ng = { class: "capitalize" }, lg = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, og = { class: "text-foreground font-medium" }, sg = { class: "mt-auto flex gap-2 pt-2" }, rg = /* @__PURE__ */ A({
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
      return Object.entries(f).map(([b, p]) => ({
        key: b,
        label: b.replace(/_/g, " "),
        granted: Tv(p.value),
        display: Dv(p.value)
      }));
    }), d = k(() => a.plan.extraPerks ?? []);
    return (f, b) => (t(), n("article", {
      class: j(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", Ev, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", Iv, [
          e.plan.recommended ? (t(), n("span", Nv, "Recommended")) : e.plan.featured ? (t(), n("span", Rv, "Featured")) : w("", !0),
          e.plan.trial ? (t(), n("span", Uv, "Trial")) : w("", !0),
          e.plan.active === !1 ? (t(), n("span", Hv, "Inactive")) : w("", !0)
        ])) : w("", !0),
        o("h3", qv, m(e.plan.name), 1),
        o("p", Kv, [
          o("span", Gv, m(s.value), 1),
          o("span", Wv, m(h(Vv)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", Zv, m(e.plan.shortDescription), 1)) : w("", !0),
        o("p", Jv, " Active seats: " + m(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", Yv, [
        (t(!0), n(z, null, L(u.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", Xv, [
            o("span", {
              class: j(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", Qv, [
                o("path", {
                  d: h(ie)("check")
                }, null, 8, eg)
              ])) : (t(), n("svg", tg, [
                o("path", {
                  d: h(ie)("x")
                }, null, 8, ag)
              ]))
            ], 2),
            o("span", ng, m(p.label), 1)
          ]),
          p.display ? (t(), n("span", lg, m(p.display), 1)) : w("", !0)
        ]))), 128)),
        (t(!0), n(z, null, L(d.value, (p, y) => (t(), n("li", {
          key: `extra-${y}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, m(p.key), 1),
          o("span", og, m(p.value), 1)
        ]))), 128))
      ]),
      o("footer", sg, [
        E(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: b[0] || (b[0] = (p) => r("edit", e.plan.id))
        }, {
          default: O(() => [...b[2] || (b[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        E(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: b[1] || (b[1] = (p) => r("delete", e.plan.id))
        }, {
          default: O(() => [...b[3] || (b[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Fv));
  }
}), ig = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, ug = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, dg = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, cg = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, fg = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, Iw = /* @__PURE__ */ A({
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
      class: j(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-grid"
    }, [
      o("header", ig, [
        o("div", null, [
          e.title ? (t(), n("h1", ug, m(e.title), 1)) : w("", !0),
          e.description ? (t(), n("p", dg, m(e.description), 1)) : w("", !0)
        ]),
        E(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: O(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", cg, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", fg, [
        (t(!0), n(z, null, L(e.plans, (i) => (t(), T(rg, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => a("edit", u)),
          onDelete: s[2] || (s[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), mg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, pg = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, vg = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, gg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, hg = { class: "space-y-1.5" }, bg = { class: "space-y-1.5" }, yg = { class: "space-y-1.5" }, xg = { class: "space-y-1.5" }, kg = { class: "space-y-1.5" }, $g = { class: "flex items-center gap-3 text-sm" }, wg = { class: "flex items-center gap-3 text-sm" }, Cg = { class: "flex items-center gap-3 text-sm" }, _g = {
  key: 0,
  class: "space-y-1.5"
}, Sg = { class: "flex items-center gap-3 text-sm" }, Mg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Bg = { class: "space-y-1.5" }, Pg = ["value"], zg = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Ag = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, jg = ["id", "value", "onInput"], Og = { class: "space-y-2" }, Lg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Vg = ["d"], Dg = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", st = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Nw = /* @__PURE__ */ A({
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
    }), r = e, s = l, i = He(a());
    function u(v, g) {
      const c = i.perks?.[v]?.value;
      return c ?? g;
    }
    function d(v, g, c) {
      const C = i.perks?.[v];
      i.perks = {
        ...i.perks ?? {},
        [v]: {
          value: g,
          overview: c ?? C?.overview ?? ""
        }
      };
    }
    function f(v, g) {
      const c = i.perks?.[v];
      i.perks = {
        ...i.perks ?? {},
        [v]: {
          value: c?.value ?? (v === "modules" ? [] : 0),
          overview: g
        }
      };
    }
    function b(v) {
      const g = v ? { ...a(), ...v } : a();
      i.id = g.id, i.name = g.name, i.shortDescription = g.shortDescription ?? "", i.description = g.description ?? "", i.days = g.days, i.price = g.price, i.featured = g.featured ?? !1, i.recommended = g.recommended ?? !1, i.trial = g.trial ?? !1, i.trialDays = g.trialDays ?? 0, i.active = g.active ?? !0, i.perks = { ...g.perks ?? {} }, i.extraPerks = [...g.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    b(r.plan), de(
      () => r.plan,
      (v) => b(v),
      { deep: !0 }
    );
    const p = k({
      get: () => {
        const v = u("modules", []);
        return Array.isArray(v) ? v.map(String) : [];
      },
      set: (v) => {
        d("modules", S(v.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), y = k(
      () => r.modules.map((v) => ({ value: v.key, label: v.label }))
    );
    function S(v) {
      const g = Object.fromEntries(r.modules.map((M) => [M.key, M])), c = new Set(v);
      for (const M of r.modules)
        if (!c.has(M.key))
          for (const P of M.children ?? [])
            c.delete(P);
      let C = !0;
      for (; C; ) {
        C = !1;
        for (const M of [...c])
          for (const P of g[M]?.requires ?? [])
            c.has(P) || (c.add(P), C = !0);
      }
      return [...c];
    }
    function $() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function _(v) {
      i.extraPerks = (i.extraPerks ?? []).filter((g, c) => c !== v);
    }
    function x() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((v) => v.key.trim() !== "")
      });
    }
    return (v, g) => (t(), n("form", {
      class: j(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-editor",
      onSubmit: ce(x, ["prevent"])
    }, [
      o("header", mg, [
        o("div", null, [
          o("h1", pg, m(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          g[13] || (g[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(se, {
          type: "button",
          variant: "outline",
          onClick: g[0] || (g[0] = (c) => s("cancel"))
        }, {
          default: O(() => [...g[14] || (g[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", vg, [
        o("section", gg, [
          g[26] || (g[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", hg, [
            E(he, { for: "plan-name" }, {
              default: O(() => [...g[15] || (g[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            E(pe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": g[1] || (g[1] = (c) => i.name = c),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", bg, [
            E(he, { for: "plan-short" }, {
              default: O(() => [...g[16] || (g[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E(pe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": g[2] || (g[2] = (c) => i.shortDescription = c),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", yg, [
            E(he, { for: "plan-description" }, {
              default: O(() => [...g[17] || (g[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            ue(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": g[3] || (g[3] = (c) => i.description = c),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: j(st)
            }, null, 512), [
              [be, i.description]
            ])
          ]),
          o("div", xg, [
            E(he, { for: "plan-days" }, {
              default: O(() => [...g[18] || (g[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            ue(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": g[4] || (g[4] = (c) => i.days = c),
              class: j(Dg)
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
          o("div", kg, [
            E(he, { for: "plan-price" }, {
              default: O(() => [...g[20] || (g[20] = [
                R("Price", -1)
              ])]),
              _: 1
            }),
            E(pe, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": g[5] || (g[5] = (c) => i.price = Number(c))
            }, null, 8, ["model-value"])
          ]),
          o("label", $g, [
            E(h(De), {
              checked: !!i.featured,
              "onUpdate:checked": g[6] || (g[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            g[21] || (g[21] = R(" Featured ", -1))
          ]),
          o("label", wg, [
            E(h(De), {
              checked: !!i.recommended,
              "onUpdate:checked": g[7] || (g[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            g[22] || (g[22] = R(" Recommended ", -1))
          ]),
          o("label", Cg, [
            E(h(De), {
              checked: !!i.trial,
              "onUpdate:checked": g[8] || (g[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            g[23] || (g[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", _g, [
            E(he, { for: "plan-trial-days" }, {
              default: O(() => [...g[24] || (g[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            E(pe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": g[9] || (g[9] = (c) => i.trialDays = Number(c))
            }, null, 8, ["model-value"])
          ])) : w("", !0),
          o("label", Sg, [
            E(h(De), {
              checked: i.active !== !1,
              "onUpdate:checked": g[10] || (g[10] = (c) => i.active = c)
            }, null, 8, ["checked"]),
            g[25] || (g[25] = R(" Active ", -1))
          ]),
          E(se, {
            type: "submit",
            disabled: e.processing
          }, {
            default: O(() => [
              R(m(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Mg, [
          g[33] || (g[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Bg, [
            E(he, null, {
              default: O(() => [...g[27] || (g[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            E(St, {
              modelValue: p.value,
              "onUpdate:modelValue": g[11] || (g[11] = (c) => p.value = c),
              options: y.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(he, { for: "plan-modules-overview" }, {
              default: O(() => [...g[28] || (g[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: j(st),
              onInput: g[12] || (g[12] = (c) => f(
                "modules",
                c.target.value
              ))
            }, null, 40, Pg)
          ]),
          (t(!0), n(z, null, L(e.limits, (c) => (t(), n("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), n("label", zg, [
              E(h(De), {
                checked: !!u(c.key, !1),
                "onUpdate:checked": (C) => d(
                  c.key,
                  C,
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + m(c.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              E(he, {
                for: `plan-limit-${c.key}`
              }, {
                default: O(() => [
                  R(m(c.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              c.hint ? (t(), n("p", Ag, m(c.hint), 1)) : w("", !0),
              E(pe, {
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
              g[29] || (g[29] = o("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            E(he, {
              for: `plan-overview-${c.key}`
            }, {
              default: O(() => [...g[30] || (g[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${c.key}`,
              value: i.perks?.[c.key]?.overview ?? "",
              class: j(st),
              onInput: (C) => f(
                c.key,
                C.target.value
              )
            }, null, 40, jg)
          ]))), 128)),
          o("div", Og, [
            g[32] || (g[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, L(i.extraPerks ?? [], (c, C) => (t(), n("div", {
              key: C,
              class: "flex items-center gap-2"
            }, [
              E(pe, {
                modelValue: c.key,
                "onUpdate:modelValue": (M) => c.key = M,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(pe, {
                modelValue: c.value,
                "onUpdate:modelValue": (M) => c.value = M,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (M) => _(C)
              }, {
                default: O(() => [
                  (t(), n("svg", Lg, [
                    o("path", {
                      d: h(ie)("x")
                    }, null, 8, Vg)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            E(se, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: $
            }, {
              default: O(() => [...g[31] || (g[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Tg = { class: "flex flex-col gap-4" }, Fg = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Eg = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Ig = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Ng = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Rg = ["d"], Ug = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Hg = ["aria-pressed"], qg = ["aria-pressed"], Kg = {
  key: 0,
  class: "flex flex-col gap-2"
}, Gg = ["aria-label"], Wg = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Zg = ["aria-pressed", "onClick"], Jg = ["aria-label"], Yg = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Xg = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Qg = ["data-slot"], eh = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, th = { class: "text-muted-foreground text-xs tabular-nums" }, ah = { class: "flex items-center gap-2" }, nh = ["disabled"], lh = ["disabled"], Mt = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(""), i = Ke(e, "modelValue"), u = He({}), d = He({});
    de(s, () => y());
    function f(I) {
      const J = I.trim();
      if (J === "")
        return null;
      const V = Number(J);
      return Number.isFinite(V) ? V : null;
    }
    function b() {
      const I = {};
      for (const [J, V] of Object.entries(d))
        I[J] = { min: f(V.min), max: f(V.max) };
      return I;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: b() };
    }
    function y() {
      r("filter", p());
    }
    function S(I, J) {
      u[I] = u[I] === J ? null : J, y();
    }
    function $(I) {
      return d[I] ?? { min: "", max: "" };
    }
    function _(I, J, V) {
      const F = d[I] ?? { min: "", max: "" };
      d[I] = { ...F, [J]: V }, y();
    }
    function x(I) {
      I.key === "Enter" && (I.preventDefault(), r("scan", s.value.trim()));
    }
    const v = k(() => a.facets.filter((I) => (I.kind ?? "chips") === "chips")), g = k(() => a.facets.filter((I) => I.kind === "range")), c = k(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), C = G(1);
    de(
      () => a.items.map((I) => I.key).join(","),
      () => {
        C.value = 1;
      }
    );
    const M = k(() => {
      const I = a.pageSize;
      return !I || I < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / I));
    }), P = k(() => {
      const I = a.pageSize;
      if (!I || I < 1)
        return a.items;
      const J = (C.value - 1) * I;
      return a.items.slice(J, J + I);
    });
    function W(I) {
      C.value = Math.min(M.value, Math.max(1, I));
    }
    return (I, J) => (t(), n("div", Tg, [
      c.value ? (t(), n("div", Fg, [
        o("div", Eg, [
          e.searchable ? (t(), n("div", Ig, [
            (t(), n("svg", Ng, [
              o("path", {
                d: h(ie)("search")
              }, null, 8, Rg)
            ])),
            E(pe, {
              modelValue: s.value,
              "onUpdate:modelValue": J[0] || (J[0] = (V) => s.value = V),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: x
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : w("", !0),
          H(I.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Ug, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: J[1] || (J[1] = (V) => i.value = "grid")
            }, " Tiles ", 10, Hg),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: J[2] || (J[2] = (V) => i.value = "list")
            }, " List ", 10, qg)
          ])) : w("", !0)
        ]),
        v.value.length || g.value.length ? (t(), n("div", Kg, [
          (t(!0), n(z, null, L(v.value, (V) => (t(), n("div", {
            key: V.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": V.label ?? V.key
          }, [
            V.label ? (t(), n("span", Wg, m(V.label), 1)) : w("", !0),
            (t(!0), n(z, null, L(V.options ?? [], (F) => (t(), n("button", {
              key: F.value,
              type: "button",
              class: j([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[V.key] === F.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[V.key] === F.value ? "true" : "false",
              onClick: (Z) => S(V.key, F.value)
            }, m(F.label), 11, Zg))), 128))
          ], 8, Gg))), 128)),
          (t(!0), n(z, null, L(g.value, (V) => (t(), n("div", {
            key: V.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": V.label ?? V.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Yg, m(V.label ?? V.key), 1),
            E(pe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${V.label ?? V.key} from`,
              "model-value": $(V.key).min,
              "onUpdate:modelValue": (F) => _(V.key, "min", String(F))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            J[7] || (J[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            E(pe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${V.label ?? V.key} to`,
              "model-value": $(V.key).max,
              "onUpdate:modelValue": (F) => _(V.key, "max", String(F))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Jg))), 128))
        ])) : w("", !0)
      ])) : w("", !0),
      e.items.length === 0 ? (t(), n("p", Xg, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: j(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, L(P.value, (V) => (t(), T(Lv, {
          key: V.key,
          item: V,
          layout: i.value,
          onSelect: J[3] || (J[3] = (F) => r("select", F)),
          onCart: J[4] || (J[4] = (F) => r("cart", F))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Qg)),
      e.pageSize && M.value > 1 ? (t(), n("div", eh, [
        o("p", th, " Page " + m(C.value) + " of " + m(M.value), 1),
        o("div", ah, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value <= 1,
            onClick: J[5] || (J[5] = (V) => W(C.value - 1))
          }, " Previous ", 8, nh),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value >= M.value,
            onClick: J[6] || (J[6] = (V) => W(C.value + 1))
          }, " Next ", 8, lh)
        ])
      ])) : w("", !0)
    ]));
  }
}), oh = ["aria-label"], sh = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, rh = { class: "min-w-0" }, ih = { class: "text-base font-semibold" }, uh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, dh = { class: "flex shrink-0 items-center gap-2" }, ch = { class: "min-h-0 flex-1 overflow-y-auto" }, fh = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Bt = /* @__PURE__ */ A({
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
      const b = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (b.length === 0)
        return;
      const p = b[0], y = b[b.length - 1];
      f.shiftKey && document.activeElement === p ? (f.preventDefault(), y.focus()) : !f.shiftKey && document.activeElement === y && (f.preventDefault(), p.focus());
    }
    return de(
      () => a.open,
      async (f) => {
        if (f) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Ce(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), ve(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (f, b) => (t(), T(Ee, { to: "body" }, [
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
            onClick: b[0] || (b[0] = (p) => r("close"))
          })) : w("", !0)
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
            ref: s,
            class: j(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", sh, [
              o("div", rh, [
                o("h2", ih, m(e.title), 1),
                e.description ? (t(), n("p", uh, m(e.description), 1)) : w("", !0)
              ]),
              o("div", dh, [
                H(f.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: b[1] || (b[1] = (p) => r("close"))
                }, [...b[2] || (b[2] = [
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
            o("div", ch, [
              H(f.$slots, "default")
            ]),
            f.$slots.footer ? (t(), n("footer", fh, [
              H(f.$slots, "footer")
            ])) : w("", !0)
          ], 10, oh)) : w("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Se() {
  return { query: "", selected: {}, ranges: {} };
}
function mh(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function ph(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function Pt(e, l) {
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
    if (!ph(mh(e, r), s))
      return !1;
  return !0;
}
function vh(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function Qe(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const gh = { class: "flex flex-col gap-6 p-4" }, hh = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, bh = { class: "text-sm font-semibold" }, yh = { class: "flex flex-wrap items-center gap-1.5" }, xh = ["aria-pressed", "onClick"], kh = { class: "text-sm font-semibold" }, $h = { class: "flex flex-wrap items-center gap-1.5" }, wh = { key: 0 }, da = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(""), i = He({}), u = He({}), d = k(
      () => a.facets.filter((M) => (M.kind ?? "chips") === "chips")
    ), f = k(() => a.facets.filter((M) => M.kind === "range"));
    function b(M) {
      return M == null ? "" : String(M);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const M of Object.keys(i))
        delete i[M];
      for (const [M, P] of Object.entries(a.applied.selected ?? {}))
        i[M] = P;
      for (const M of Object.keys(u))
        delete u[M];
      for (const [M, P] of Object.entries(a.applied.ranges ?? {}))
        u[M] = { min: b(P.min), max: b(P.max) };
    }
    de(
      () => a.open,
      (M) => {
        M && p();
      }
    );
    function y(M) {
      const P = M.trim();
      if (P === "")
        return null;
      const W = Number(P);
      return Number.isFinite(W) ? W : null;
    }
    function S() {
      const M = {};
      for (const [P, W] of Object.entries(u))
        M[P] = { min: y(W.min), max: y(W.max) };
      return M;
    }
    function $() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: S()
      };
    }
    const _ = k(() => {
      let M = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const P of Object.values(i))
        P && (M += 1);
      for (const P of Object.values(S()))
        (P.min !== null || P.max !== null) && (M += 1);
      return M;
    });
    function x(M, P) {
      i[M] = i[M] === P ? null : P;
    }
    function v(M) {
      return u[M] ?? { min: "", max: "" };
    }
    function g(M, P, W) {
      const I = u[M] ?? { min: "", max: "" };
      u[M] = { ...I, [P]: W };
    }
    function c() {
      r("apply", $());
    }
    function C() {
      s.value = "";
      for (const M of Object.keys(i))
        i[M] = null;
      for (const M of Object.keys(u))
        u[M] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Se(), query: a.applied.query } : Se()
      );
    }
    return (M, P) => (t(), T(Bt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (W) => r("close"))
    }, {
      footer: O(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: C
        }, " Reset all "),
        E(se, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (W) => r("close"))
        }, {
          default: O(() => [...P[5] || (P[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        E(se, {
          size: "sm",
          onClick: c
        }, {
          default: O(() => [
            P[6] || (P[6] = R(" Apply", -1)),
            _.value ? (t(), n("span", wh, " (" + m(_.value) + ")", 1)) : w("", !0)
          ]),
          _: 1
        })
      ]),
      default: O(() => [
        o("div", gh, [
          e.hideSearch ? w("", !0) : (t(), n("label", hh, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E(pe, {
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
            o("h3", bh, m(W.label ?? W.key), 1),
            o("div", yh, [
              (t(!0), n(z, null, L(W.options ?? [], (I) => (t(), n("button", {
                key: I.value,
                type: "button",
                class: j([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[W.key] === I.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[W.key] === I.value ? "true" : "false",
                onClick: (J) => x(W.key, I.value)
              }, m(I.label), 11, xh))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, L(f.value, (W) => (t(), n("section", {
            key: W.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", kh, m(W.label ?? W.key), 1),
            o("div", $h, [
              E(pe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${W.label ?? W.key} from`,
                "model-value": v(W.key).min,
                "onUpdate:modelValue": (I) => g(W.key, "min", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              E(pe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${W.label ?? W.key} to`,
                "model-value": v(W.key).max,
                "onUpdate:modelValue": (I) => g(W.key, "max", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), Ch = ["aria-disabled"], _h = ["disabled"], Sh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Mh = ["d"], Bh = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Ph = ["disabled"], zh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ah = ["d"], jh = /* @__PURE__ */ A({
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
    const a = Ke(e, "modelValue"), r = l, s = k(() => a.value <= e.min), i = k(() => e.max !== null && a.value >= e.max);
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
        onClick: f[0] || (f[0] = (b) => u(-1))
      }, [
        (t(), n("svg", Sh, [
          o("path", {
            d: h(ie)("minus")
          }, null, 8, Mh)
        ]))
      ], 8, _h),
      o("span", Bh, m(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (b) => u(1))
      }, [
        (t(), n("svg", zh, [
          o("path", {
            d: h(ie)("plus")
          }, null, 8, Ah)
        ]))
      ], 8, Ph)
    ], 8, Ch));
  }
}), Oh = { class: "divide-border flex flex-col divide-y" }, Lh = { class: "min-w-0" }, Vh = { class: "truncate text-sm font-medium" }, Dh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Th = { class: "flex shrink-0 items-center gap-2 text-sm" }, Fh = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Eh = {
  key: 2,
  class: "font-medium tabular-nums"
}, Ih = ["aria-label", "onClick"], Nh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Rh = ["d"], Uh = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("div", Oh, [
      (t(!0), n(z, null, L(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Lh, [
          o("p", Vh, m(u.label), 1),
          u.detail ? (t(), n("p", Dh, m(u.detail), 1)) : w("", !0)
        ]),
        o("div", Th, [
          e.editable ? (t(), T(jh, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", Fh, " ×" + m(u.qty), 1)) : w("", !0),
          u.amount ? (t(), n("span", Eh, m(u.amount), 1)) : w("", !0),
          u.status ? (t(), T(ge, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : w("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => a("remove", u.key)
          }, [
            (t(), n("svg", Nh, [
              o("path", {
                d: h(ie)("trash")
              }, null, 8, Rh)
            ]))
          ], 8, Ih)) : w("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Hh = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, qh = { class: "border-b px-4 py-3" }, Kh = { class: "text-sm font-medium" }, Gh = { class: "flex-1 px-4 py-3" }, Wh = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Zh = { class: "text-foreground block font-medium" }, Jh = { class: "mt-1 block" }, Yh = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Xh = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Qh = { class: "tabular-nums" }, e1 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, t1 = { class: "text-muted-foreground" }, a1 = {
  key: 0,
  class: "tabular-nums"
}, n1 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, l1 = { class: "text-muted-foreground" }, o1 = { class: "tabular-nums" }, s1 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, r1 = { class: "tabular-nums" }, i1 = {
  key: 4,
  class: "pt-1"
}, u1 = /* @__PURE__ */ A({
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
    return (r, s) => (t(), n("aside", Hh, [
      o("header", qh, [
        o("h2", Kh, m(e.title), 1)
      ]),
      o("div", Gh, [
        e.items.length === 0 ? (t(), n("p", Wh, [
          o("span", Zh, m(e.emptyTitle), 1),
          o("span", Jh, m(e.emptyDescription), 1)
        ])) : (t(), T(Uh, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => a("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Yh, [
        e.subtotal ? (t(), n("div", Xh, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Qh, m(e.subtotal), 1)
        ])) : w("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", e1, [
          o("span", t1, m(e.discountLabel), 1),
          e.discount ? (t(), n("span", a1, m(e.discount), 1)) : w("", !0),
          H(r.$slots, "discount")
        ])) : w("", !0),
        e.tax ? (t(), n("div", n1, [
          o("span", l1, m(e.taxLabel), 1),
          o("span", o1, m(e.tax), 1)
        ])) : w("", !0),
        e.total ? (t(), n("div", s1, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", r1, m(e.total), 1)
        ])) : w("", !0),
        r.$slots.pay ? (t(), n("div", i1, [
          H(r.$slots, "pay")
        ])) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), d1 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, c1 = { class: "flex flex-col gap-4" }, f1 = { class: "flex flex-wrap items-start justify-between gap-3" }, m1 = { class: "flex items-center gap-2" }, p1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, Rw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(Se()), i = G(!1), u = Ke(e, "cart"), d = G(!1), f = k(
      () => a.items.filter((V) => Pt(V, s.value))
    );
    function b(V) {
      s.value = { ...s.value, query: V.query };
    }
    function p(V) {
      s.value = {
        ...s.value,
        selected: V.selected,
        ranges: V.ranges,
        query: s.value.query
      }, i.value = !1;
    }
    function y(V) {
      return V ? a.parsePrice(V) : 0;
    }
    function S(V, F, Z) {
      return {
        ...V,
        qty: F,
        amount: a.formatMoney(Z * F)
      };
    }
    function $(V) {
      const F = vh(a.items, V);
      F && _(F.key);
    }
    function _(V) {
      const F = a.items.find((N) => N.key === V);
      if (!F || F.status === "out-of-stock")
        return;
      d.value = !1;
      const Z = y(F);
      if (u.value.find((N) => N.key === V)) {
        u.value = u.value.map(
          (N) => N.key === V ? S(N, Number(N.qty ?? 1) + 1, Z) : N
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: F.key,
          label: F.label,
          detail: F.caption ?? null,
          qty: 1,
          amount: a.formatMoney(Z)
        }
      ];
    }
    function x(V, F) {
      const Z = a.items.find((N) => N.key === V), te = y(Z);
      u.value = u.value.map(
        (N) => N.key === V ? S(N, F, te) : N
      );
    }
    function v(V) {
      u.value = u.value.filter((F) => F.key !== V);
    }
    const g = k(
      () => u.value.reduce((V, F) => {
        const Z = a.items.find((te) => te.key === F.key);
        return V + y(Z) * Number(F.qty ?? 1);
      }, 0)
    ), c = k(
      () => a.discountRate > 0 ? Math.round(g.value * a.discountRate) : 0
    ), C = k(
      () => Math.round((g.value - c.value) * a.taxRate)
    ), M = k(
      () => u.value.length ? a.formatMoney(g.value) : null
    ), P = k(
      () => u.value.length && c.value > 0 ? `−${a.formatMoney(c.value)}` : null
    ), W = k(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(C.value) : null
    ), I = k(
      () => u.value.length ? a.formatMoney(
        g.value - c.value + C.value
      ) : null
    );
    function J() {
      d.value = !0, r("pay", u.value);
    }
    return (V, F) => (t(), n(z, null, [
      o("div", d1, [
        o("section", c1, [
          o("div", f1, [
            E(_e, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", m1, [
              h(Qe)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: F[0] || (F[0] = (Z) => s.value = {
                  ...h(Se)(),
                  query: s.value.query
                })
              }, " Clear ")) : w("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: F[1] || (F[1] = (Z) => i.value = !0)
              }, [
                F[5] || (F[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                F[6] || (F[6] = R(" Filters ", -1)),
                h(Qe)(s.value) ? (t(), n("span", p1, " on ")) : w("", !0)
              ])) : w("", !0)
            ])
          ]),
          E(Mt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: b,
            onSelect: F[2] || (F[2] = (Z) => r("select", Z)),
            onCart: _,
            onScan: $
          }, null, 8, ["search-placeholder", "items"])
        ]),
        E(u1, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: M.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: W.value,
          total: I.value,
          onQty: x,
          onRemove: v
        }, {
          pay: O(() => [
            H(V.$slots, "pay", {
              cart: u.value,
              paid: d.value,
              pay: J
            }, () => [
              E(se, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: J
              }, {
                default: O(() => [
                  R(m(d.value ? "Paid" : "Pay"), 1)
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
        applied: s.value,
        onClose: F[3] || (F[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: F[4] || (F[4] = (Z) => s.value = { ...h(Se)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), v1 = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, g1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, h1 = ["src", "alt"], b1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, y1 = ["src"], x1 = { class: "flex items-start justify-between gap-3" }, k1 = { class: "text-lg font-semibold tabular-nums" }, $1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, w1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, C1 = { class: "grid grid-cols-2 gap-3" }, _1 = { class: "flex flex-col gap-2" }, S1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, Uw = /* @__PURE__ */ A({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(p) {
      let y = 0;
      for (const S of p)
        y = y * 31 + S.charCodeAt(0) >>> 0;
      return y;
    }
    function i(p, y) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(($, _) => ({
        label: $,
        value: Math.max(0, Math.round(p + Math.sin(_ + y) * p * 0.18))
      }));
    }
    const u = k(() => a.item?.kind === "unit"), d = k(() => {
      const p = a.item;
      if (!p)
        return [];
      const y = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(y) || 12, s(p.key) % 7);
    }), f = k(() => {
      const p = a.item;
      if (!p)
        return [];
      const y = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(y) || 20, s(p.key) % 5 + 1);
    }), b = k(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (p, y) => (t(), T(Bt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: y[1] || (y[1] = (S) => r("close"))
    }, xa({
      default: O(() => [
        e.item ? (t(), n("div", v1, [
          o("div", g1, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, h1)) : w("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", b1, [
            (t(!0), n(z, null, L(e.item.images, (S, $) => (t(), n("img", {
              key: $,
              src: S,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, y1))), 128))
          ])) : w("", !0),
          o("div", x1, [
            o("div", null, [
              o("p", k1, m(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", $1, m(e.item.stock) + " in stock ", 1)) : w("", !0)
            ]),
            e.item.status ? (t(), T(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", w1, m(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("div", C1, [
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
          o("div", _1, [
            o("p", S1, m(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(tt, {
              data: u.value ? f.value : d.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : w("", !0)
      ]),
      _: 2
    }, [
      b.value && e.item ? {
        name: "footer",
        fn: O(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: y[0] || (y[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), M1 = { class: "flex flex-col gap-10" }, B1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, P1 = { class: "flex flex-col gap-3" }, z1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, A1 = ["src", "alt"], j1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, O1 = ["aria-label", "aria-pressed", "onClick"], L1 = ["src"], V1 = { class: "flex flex-col gap-5" }, D1 = { class: "flex flex-wrap items-start justify-between gap-3" }, T1 = { class: "min-w-0" }, F1 = { class: "text-2xl font-semibold tracking-tight" }, E1 = { class: "text-muted-foreground mt-1 text-sm" }, I1 = { class: "text-2xl font-semibold tabular-nums" }, N1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, R1 = { class: "grid grid-cols-2 gap-3 text-sm" }, U1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, H1 = { class: "mt-1 font-medium" }, q1 = { class: "rounded-lg border p-3" }, K1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, G1 = { class: "mt-1 font-medium" }, W1 = { class: "flex flex-col gap-4" }, Z1 = { class: "grid gap-4 sm:grid-cols-2" }, J1 = { class: "bg-card rounded-lg border p-4" }, Y1 = { class: "mb-3 text-sm font-medium" }, X1 = /* @__PURE__ */ A({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s($) {
      let _ = 0;
      for (const x of $)
        _ = _ * 31 + x.charCodeAt(0) >>> 0;
      return _;
    }
    function i($, _) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((v, g) => ({
        label: v,
        value: Math.max(0, Math.round($ + Math.sin(g + _) * $ * 0.18))
      }));
    }
    const u = k(() => a.item.kind === "unit"), d = k(() => {
      const $ = [a.item.image, ...a.item.images ?? []].filter(
        (_) => typeof _ == "string" && _ !== ""
      );
      return [...new Set($)];
    }), f = G(0), b = k(() => {
      const $ = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number($) || 12, s(a.item.key) % 7);
    }), p = k(() => {
      const $ = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number($) || 20, s(a.item.key) % 5 + 1);
    }), y = k(() => u.value ? p.value : b.value), S = k(() => !u.value && a.item.status !== "out-of-stock");
    return ($, _) => (t(), n("div", M1, [
      o("div", B1, [
        o("div", P1, [
          o("div", z1, [
            d.value[f.value] ? (t(), n("img", {
              key: 0,
              src: d.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, A1)) : w("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", j1, [
            (t(!0), n(z, null, L(d.value, (x, v) => (t(), n("button", {
              key: x,
              type: "button",
              class: j(["size-16 shrink-0 overflow-hidden rounded-md border", v === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${v + 1}`,
              "aria-pressed": v === f.value ? "true" : "false",
              onClick: (g) => f.value = v
            }, [
              o("img", {
                src: x,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, L1)
            ], 10, O1))), 128))
          ])) : w("", !0)
        ]),
        o("div", V1, [
          o("div", D1, [
            o("div", T1, [
              o("h1", F1, m(e.item.label), 1),
              o("p", E1, m(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          o("p", I1, m(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", N1, m(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("dl", R1, [
            e.item.sku ? (t(), n("div", U1, [
              _[1] || (_[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", H1, m(e.item.sku), 1)
            ])) : w("", !0),
            o("div", q1, [
              o("dt", K1, m(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", G1, m(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          S.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: _[0] || (_[0] = (x) => r("cart", e.item.key))
          }, " Add to cart ")) : w("", !0)
        ])
      ]),
      o("section", W1, [
        _[2] || (_[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", Z1, [
          E(Xe, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: y.value
          }, null, 8, ["label", "value", "series"]),
          E(Xe, {
            label: "Price",
            value: e.item.price ?? "-",
            series: b.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", J1, [
          o("p", Y1, m(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(kf, {
            data: y.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), Q1 = ["href"], Hw = /* @__PURE__ */ A({
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
      class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
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
        R(" " + m(e.backLabel), 1)
      ], 8, Q1),
      E(X1, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), eb = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, tb = ["aria-selected", "onClick"], ab = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, nb = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, lb = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, ob = ["aria-pressed"], sb = ["aria-pressed"], qw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(a.tabs[0]?.key ?? ""), i = Ke(e, "layout"), u = G({}), d = G(!1);
    de(
      () => a.tabs.map((x) => x.key).join(","),
      (x) => {
        x.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function f(x) {
      return u.value[x] ?? Se();
    }
    const b = k(
      () => a.tabs.find((x) => x.key === s.value) ?? a.tabs[0] ?? null
    ), p = k(
      () => b.value ? f(b.value.key) : Se()
    ), y = k(() => {
      const x = b.value;
      return x ? x.items.filter((v) => Pt(v, f(x.key))) : [];
    });
    function S(x) {
      const v = b.value?.key;
      v && (u.value = {
        ...u.value,
        [v]: { ...f(v), query: x }
      });
    }
    function $() {
      const x = b.value?.key;
      x && (u.value = { ...u.value, [x]: Se() });
    }
    function _(x) {
      const v = b.value?.key;
      v && (u.value = { ...u.value, [v]: x }, d.value = !1);
    }
    return (x, v) => (t(), n(z, null, [
      o("div", {
        class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        E(_e, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", eb, [
          (t(!0), n(z, null, L(e.tabs, (g) => (t(), n("button", {
            key: g.key,
            type: "button",
            class: j([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === g.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === g.key ? "true" : "false",
            onClick: (c) => s.value = g.key
          }, m(g.label), 11, tb))), 128))
        ])) : w("", !0),
        o("div", ab, [
          E(pe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: b.value?.searchPlaceholder ?? "Search…",
            "aria-label": b.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": v[0] || (v[0] = (g) => S(String(g)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          h(Qe)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: $
          }, " Clear ")) : w("", !0),
          (b.value?.facets ?? []).length > 0 ? (t(), n("button", {
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
            v[9] || (v[9] = R(" Filters ", -1)),
            h(Qe)(p.value) ? (t(), n("span", nb, " on ")) : w("", !0)
          ])) : w("", !0),
          o("div", lb, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: v[2] || (v[2] = (g) => i.value = "grid")
            }, " Tiles ", 10, ob),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: v[3] || (v[3] = (g) => i.value = "list")
            }, " List ", 10, sb)
          ])
        ]),
        E(Mt, {
          layout: i.value,
          "onUpdate:layout": v[4] || (v[4] = (g) => i.value = g),
          "page-size": e.pageSize,
          items: y.value,
          onSelect: v[5] || (v[5] = (g) => r("select", g)),
          onCart: v[6] || (v[6] = (g) => r("cart", g))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      E(da, {
        open: d.value,
        title: b.value?.filterTitle ?? "Filters",
        "search-placeholder": b.value?.searchPlaceholder ?? "Search…",
        facets: b.value?.facets ?? [],
        applied: p.value,
        onClose: v[7] || (v[7] = (g) => d.value = !1),
        onApply: _,
        onReset: $
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), rb = { class: "flex flex-col gap-4" }, ib = { class: "flex flex-col gap-4" }, Kw = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(Se()), i = k(
      () => a.cards.filter((u) => Pt(u, s.value))
    );
    return (u, d) => (t(), n("div", {
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      E(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", rb, [
        E(_e, {
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
          onFilter: d[0] || (d[0] = (f) => s.value = f),
          onSelect: d[1] || (d[1] = (f) => r("select", f)),
          onCart: d[2] || (d[2] = (f) => r("cart", f))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", ib, [
        E(_e, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(nl, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": O(({ value: f }) => [
            E(ge, {
              status: String(f)
            }, {
              default: O(() => [
                R(m(f), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), ub = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, db = { class: "text-sm font-medium" }, cb = ["width", "height", "aria-label"], fb = { class: "flex items-center gap-2" }, mb = /* @__PURE__ */ A({
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
    function f(x) {
      const v = s.value;
      if (!v)
        return null;
      const g = v.getBoundingClientRect(), c = v.width / g.width, C = v.height / g.height;
      return {
        x: (x.clientX - g.left) * c,
        y: (x.clientY - g.top) * C
      };
    }
    function b(x) {
      a.disabled || (i.value = !0, u = f(x), s.value?.setPointerCapture(x.pointerId));
    }
    function p(x) {
      if (!i.value || a.disabled)
        return;
      const v = d(), g = f(x);
      !v || !g || !u || (v.strokeStyle = "#111827", v.lineWidth = 2.4, v.lineCap = "round", v.lineJoin = "round", v.beginPath(), v.moveTo(u.x, u.y), v.lineTo(g.x, g.y), v.stroke(), u = g);
    }
    function y() {
      i.value = !1, u = null;
    }
    function S() {
      const x = s.value, v = d();
      !x || !v || (v.clearRect(0, 0, x.width, x.height), r("clear"));
    }
    function $() {
      const x = s.value;
      x && r("save", x.toDataURL("image/png"));
    }
    function _() {
      const x = s.value, v = d();
      !x || !v || (v.fillStyle = "#ffffff", v.fillRect(0, 0, x.width, x.height));
    }
    return fe(_), ve(() => {
      i.value = !1;
    }), (x, v) => (t(), n("div", ub, [
      o("p", db, m(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: j(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(b, ["prevent"]),
        onPointermove: ce(p, ["prevent"]),
        onPointerup: ce(y, ["prevent"]),
        onPointerleave: ce(y, ["prevent"])
      }, null, 42, cb),
      o("div", fb, [
        E(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: S
        }, {
          default: O(() => [...v[0] || (v[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: $
        }, {
          default: O(() => [...v[1] || (v[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), pb = { class: "grid gap-8 lg:grid-cols-2" }, vb = { class: "flex flex-col gap-3" }, gb = { class: "text-muted-foreground text-xs" }, hb = {
  key: 0,
  class: "flex flex-col gap-3"
}, bb = { class: "flex flex-wrap gap-3" }, yb = ["onClick"], xb = ["src", "alt"], kb = {
  key: 1,
  class: "flex flex-col gap-3"
}, $b = { class: "flex flex-wrap gap-3" }, wb = ["onClick"], Cb = ["src", "alt"], _b = {
  key: 2,
  class: "flex flex-col gap-4"
}, Sb = { class: "flex flex-wrap items-center gap-2" }, Mb = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Bb = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Pb = { class: "flex flex-col gap-2" }, zb = ["src"], Ab = {
  key: 1,
  class: "text-sm text-neutral-400"
}, jb = ["src"], Gw = /* @__PURE__ */ A({
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
    function f(x) {
      try {
        const v = localStorage.getItem(x), g = v ? JSON.parse(v) : [];
        return Array.isArray(g) ? g : [];
      } catch {
        return [];
      }
    }
    fe(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), de(
      a,
      (x) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(x));
      },
      { deep: !0 }
    ), de(
      r,
      (x) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(x));
      },
      { deep: !0 }
    );
    function b(x) {
      const v = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: x
      };
      a.value = [v, ...a.value].slice(0, 8), s.value = v.id;
    }
    async function p(x, v) {
      await sr(x), v(40);
      const g = await new Promise((c, C) => {
        const M = new FileReader();
        M.onload = () => c(String(M.result)), M.onerror = () => C(new Error("Could not read the file")), M.readAsDataURL(x);
      });
      return v(100), { value: g, name: x.name, size: x.size, url: g };
    }
    function y() {
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
    const S = k(
      () => a.value.find((x) => x.id === s.value)?.dataUrl ?? null
    ), $ = k(
      () => r.value.find((x) => x.id === i.value)?.dataUrl ?? null
    ), _ = k(() => {
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
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      E(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", pb, [
        E(mb, {
          label: "Draw a signature",
          onSave: b
        }),
        o("div", vb, [
          v[2] || (v[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", gb, m(h(na)), 1),
          E(oa, {
            modelValue: u.value,
            "onUpdate:modelValue": v[0] || (v[0] = (g) => u.value = g),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          E(se, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: y
          }, {
            default: O(() => [...v[1] || (v[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", hb, [
        E(_e, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", bb, [
          (t(!0), n(z, null, L(a.value, (g) => (t(), n("button", {
            key: g.id,
            type: "button",
            class: j(["rounded-md border p-2", g.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, xb)
          ], 10, yb))), 128))
        ])
      ])) : w("", !0),
      r.value.length ? (t(), n("section", kb, [
        E(_e, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", $b, [
          (t(!0), n(z, null, L(r.value, (g) => (t(), n("button", {
            key: g.id,
            type: "button",
            class: j(["rounded-md border p-2", g.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Cb)
          ], 10, wb))), 128))
        ])
      ])) : w("", !0),
      e.documents.length ? (t(), n("section", _b, [
        o("div", Sb, [
          (t(!0), n(z, null, L(e.documents, (g) => (t(), T(se, {
            key: g.key,
            size: "sm",
            variant: d.value === g.key ? "default" : "outline",
            onClick: (c) => d.value = g.key
          }, {
            default: O(() => [
              R(m(g.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", Mb, [
          E(Oc, {
            document: _.value
          }, null, 8, ["document"]),
          o("div", Bb, [
            o("div", Pb, [
              v[3] || (v[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              S.value ? (t(), n("img", {
                key: 0,
                src: S.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, zb)) : (t(), n("p", Ab, "Draw and save a signature"))
            ]),
            $.value ? (t(), n("img", {
              key: 0,
              src: $.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, jb)) : w("", !0)
          ])
        ])
      ])) : w("", !0)
    ], 2));
  }
}), Ww = "panel.dashboard.hiddenWidgets", Ob = /* @__PURE__ */ Symbol("dashboardHide"), Lb = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, Zw = /* @__PURE__ */ A({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = gt(Ob, null), r = G(
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
    }), de(
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
    return (u, d) => i.value ? w("", !0) : (t(), n("div", Lb, [
      E(Cp, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (f) => r.value = f),
        onHide: d[1] || (d[1] = (f) => h(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Vb = { class: "flex flex-col gap-3" }, Db = ["data-slot"], Tb = ["aria-pressed", "aria-label", "title"], Fb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Eb = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Ib = { class: "flex h-8 items-center" }, Nb = ["aria-label", "title", "onClick"], Rb = ["aria-label", "title", "onClick"], Ub = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Hb = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, Jw = /* @__PURE__ */ A({
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
    function u(c) {
      return a.maskable && (c.sensitive ?? !0);
    }
    function d(c) {
      return u(c) && !s.value && !i.value.has(c.key);
    }
    const f = k(() => a.segments.some(d)), b = k(() => a.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, y = k(() => p[a.columns] ?? p[4]), S = k(() => {
      const c = a.columns ?? 4, C = Math.floor(a.segments.length / c) * c;
      return a.segments.slice(0, C);
    }), $ = k(() => {
      const c = a.columns ?? 4, C = Math.floor(a.segments.length / c) * c;
      return a.segments.slice(C);
    }), _ = k(() => {
      const c = [];
      return S.value.length > 0 && c.push({ key: "packed", joined: !0, segments: S.value }), $.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: $.value }), c;
    });
    function x() {
      const c = f.value === !1;
      s.value = !c, i.value = /* @__PURE__ */ new Set(), r("toggle", c);
    }
    function v(c) {
      if (!u(c))
        return;
      const C = new Set(i.value);
      if (d(c))
        C.add(c.key);
      else if (C.delete(c.key), s.value) {
        s.value = !1;
        for (const M of a.segments)
          M.key !== c.key && u(M) && C.add(M.key);
      }
      i.value = C, r("toggle", f.value);
    }
    function g(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, C) => (t(), n("div", Vb, [
      (t(!0), n(z, null, L(_.value, (M) => (t(), n("div", {
        key: M.key,
        class: j(["relative shrink-0", M.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": M.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && b.value && M.key === _.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: x
        }, [
          (t(), n("svg", Fb, [
            f.value ? (t(), n(z, { key: 0 }, [
              C[0] || (C[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              C[1] || (C[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              C[2] || (C[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              C[3] || (C[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              C[4] || (C[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              C[5] || (C[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Tb)) : w("", !0),
        o("div", {
          class: j(["grid", [M.joined ? "gap-px" : "gap-3", y.value]])
        }, [
          (t(!0), n(z, null, L(M.segments, (P) => (t(), n("div", {
            key: P.key,
            class: j(["bg-card flex flex-col gap-2 p-4", M.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", Eb, m(P.label), 1),
            o("div", Ib, [
              e.loading ? (t(), T(Fe, {
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
              ], 8, Nb)) : u(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${g(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (W) => v(P)
              }, m(g(P.value)), 9, Rb)) : (t(), n("span", Ub, m(g(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), T(ua, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : w("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), T(tt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : w("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", Hb, m(P.caption ?? P.comparison), 1)) : w("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Db))), 128))
    ]));
  }
}), qb = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Kb = { class: "flex items-center justify-between gap-2" }, Gb = ["href"], Wb = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Zb = { class: "flex flex-col gap-0.5" }, Jb = { class: "text-sm font-medium" }, Yb = { class: "text-xs text-muted-foreground" }, Xb = {
  key: 1,
  class: "flex flex-col gap-2"
}, Qb = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ey = { class: "flex flex-col gap-0.5" }, ty = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Yw = /* @__PURE__ */ A({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: {}
  },
  setup(e) {
    const l = e, a = l.items.find((s) => !s.done) ?? null, r = l.items.filter((s) => s.key !== a?.key);
    return (s, i) => e.items.length ? (t(), n("section", qb, [
      o("div", Kb, [
        i[0] || (i[0] = o("h2", { class: "text-sm font-semibold" }, "Setup checklist", -1)),
        e.reportHref ? (t(), n("a", {
          key: 0,
          href: e.reportHref,
          class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
        }, " Full report ", 8, Gb)) : w("", !0)
      ]),
      h(a) ? (t(), n("div", Wb, [
        i[1] || (i[1] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Zb, [
          o("p", Jb, m(h(a).title), 1),
          o("p", Yb, m(h(a).detail), 1)
        ])
      ])) : w("", !0),
      h(r).length ? (t(), n("ul", Xb, [
        (t(!0), n(z, null, L(h(r), (u) => (t(), n("li", {
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
            u.done ? (t(), n("svg", Qb, [...i[2] || (i[2] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : w("", !0)
          ], 2),
          o("div", ey, [
            o("p", {
              class: j(["text-sm", u.done ? "text-muted-foreground line-through" : "font-medium"])
            }, m(u.title), 3),
            u.done ? w("", !0) : (t(), n("p", ty, m(u.detail), 1))
          ])
        ]))), 128))
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), ay = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, ny = { class: "flex items-center gap-2" }, ly = { class: "font-medium tabular-nums" }, oy = { class: "ml-auto flex items-center gap-3" }, Xw = /* @__PURE__ */ A({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), n("div", ay, [
      o("div", ny, [
        H(s.$slots, "actions")
      ]),
      o("span", ly, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          R(" All " + m(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          R(m(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", oy, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (u) => a("select-all-matching"))
        }, " Select all " + m(r(e.total)), 1)) : w("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), sy = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, ry = { class: "text-muted-foreground text-xs tabular-nums" }, iy = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, uy = ["value"], dy = ["value"], cy = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, fy = ["disabled"], my = ["disabled"], py = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, vy = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, gy = ["disabled"], Qw = /* @__PURE__ */ A({
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
    return (f, b) => (t(), n("div", sy, [
      o("p", ry, [
        R(" Showing " + m(s(i.value)) + "-" + m(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          R("of " + m(s(e.total)), 1)
        ], 64)) : w("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", iy, [
        b[4] || (b[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: b[0] || (b[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(z, null, L(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, m(p), 9, dy))), 128))
        ], 40, uy)
      ])) : w("", !0),
      o("nav", cy, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: b[1] || (b[1] = (p) => r("first"))
        }, [...b[5] || (b[5] = [
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
        ])], 8, fy),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: b[2] || (b[2] = (p) => r("previous"))
        }, [...b[6] || (b[6] = [
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
        ])], 8, my),
        o("span", py, m(e.page), 1),
        d.value !== null ? (t(), n("span", vy, " of " + m(s(d.value)), 1)) : w("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: b[3] || (b[3] = (p) => r("next"))
        }, [...b[7] || (b[7] = [
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
        ])], 8, gy)
      ])
    ]));
  }
}), hy = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, by = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, yy = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, xy = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, e4 = /* @__PURE__ */ A({
  __name: "TableShell",
  setup(e) {
    return (l, a) => (t(), n("div", hy, [
      l.$slots.tabs ? (t(), n("div", by, [
        H(l.$slots, "tabs")
      ])) : w("", !0),
      l.$slots.toolbar ? (t(), n("div", yy, [
        H(l.$slots, "toolbar")
      ])) : w("", !0),
      H(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", xy, [
        H(l.$slots, "pagination")
      ])) : w("", !0)
    ]));
  }
}), ky = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, $y = ["aria-current"], wy = ["title"], Cy = ["aria-current", "onClick"], _y = ["title"], Sy = /* @__PURE__ */ A({
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
    return (s, i) => (t(), n("div", ky, [
      o("button", {
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
        }, m(r(e.counts.all ?? 0)), 11, wy)) : (t(), T(Fe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, $y),
      (t(!0), n(z, null, L(e.tabs, (u) => (t(), n("button", {
        key: u,
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => a("select", u)
      }, [
        R(m(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, m(r(e.counts[u] ?? 0)), 11, _y)) : (t(), T(Fe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Cy))), 128))
    ]));
  }
}), t4 = /* @__PURE__ */ $t(Sy, [["__scopeId", "data-v-3967c945"]]), My = { class: "flex flex-col gap-2" }, By = { class: "flex flex-wrap items-center justify-end gap-2" }, Py = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, zy = ["placeholder", "title", "aria-label"], Ay = ["aria-label"], jy = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Oy = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Ly = { class: "text-xs font-medium" }, Vy = ["value", "onChange"], Dy = ["value"], Ty = { class: "grid grid-cols-2 gap-2" }, Fy = ["value", "onChange"], Ey = ["value", "onChange"], Iy = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Ny = ["value", "onChange"], Ry = ["value", "onChange"], Uy = {
  key: 4,
  class: "flex items-center gap-2"
}, Hy = ["aria-checked", "onClick"], qy = { class: "text-xs" }, Ky = ["onClick"], Gy = ["value", "onChange"], Wy = ["value"], Zy = ["disabled", "onClick"], Jy = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Yy = ["disabled", "onClick"], Xy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Qy = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, ex = ["aria-pressed", "aria-label", "title"], tx = ["aria-label", "title"], ax = { class: "flex flex-col gap-0.5 p-1" }, nx = ["onClick"], lx = ["onClick"], ox = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, sx = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, rx = ["dusk"], ix = ["aria-label", "onClick"], a4 = /* @__PURE__ */ A({
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
    de(
      () => a.search,
      (N) => {
        N !== s.value && (s.value = N);
      }
    );
    let i;
    de(s, (N) => {
      clearTimeout(i), i = setTimeout(() => {
        N !== a.search && r("update:search", N);
      }, 250);
    });
    const u = G({ ...a.filters });
    de(
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
    ), f = k(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), b = k(() => a.search !== "" || d.value > 0), p = k(() => a.indicators.length ? a.indicators : a.filterSchema.filter((N) => a.filters[N.key] !== null && a.filters[N.key] !== void 0).map((N) => ({
      key: N.key,
      label: `${N.label}: ${String(a.filters[N.key])}`,
      removable: !0
    })));
    function y(N) {
      r("group", N);
    }
    function S(N) {
      r("clear-filter", N);
    }
    function $(N) {
      return N.type === "multiselect";
    }
    function _(N) {
      const D = u.value[N.key];
      return Array.isArray(D) ? D : D == null ? [] : [D];
    }
    function x(N) {
      return _(N).filter(
        (D) => typeof D == "string" || typeof D == "number"
      );
    }
    function v(N) {
      return J(N).flatMap(
        (D) => typeof D.value == "string" || typeof D.value == "number" ? [{ value: D.value, label: D.label }] : []
      );
    }
    function g(N, D) {
      u.value = { ...u.value, [N.key]: D === "" ? null : D };
    }
    function c(N, D) {
      const Q = u.value[N.key];
      if (typeof Q != "string" || !Q.includes(".."))
        return "";
      const [B, K] = Q.split("..");
      return D === "from" ? B ?? "" : K ?? "";
    }
    function C(N, D, Q) {
      const B = D === "from" ? Q : c(N, "from"), K = D === "to" ? Q : c(N, "to");
      u.value = {
        ...u.value,
        [N.key]: B && K ? `${B}..${K}` : null
      };
    }
    function M(N, D, Q) {
      const B = D === "from" ? Q : c(N, "from"), K = D === "to" ? Q : c(N, "to");
      u.value = {
        ...u.value,
        [N.key]: B || K ? `${B}..${K}` : null
      };
    }
    function P(N) {
      r("apply-filters", { ...u.value }), N();
    }
    function W(N, D) {
      u.value[N] = D, r("apply-filters", { ...u.value });
    }
    function I() {
      u.value = Object.fromEntries(a.filterSchema.map((N) => [N.key, null]));
    }
    function J(N) {
      return N.type === "boolean" ? [
        { value: !0, label: N.trueLabel ?? "Yes" },
        { value: !1, label: N.falseLabel ?? "No" }
      ] : N.type === "daterange" ? Object.entries(N.presets ?? {}).map(([D, Q]) => ({
        value: D,
        label: Q
      })) : (N.options ?? []).map((D) => ({ value: D, label: D }));
    }
    const V = G(new Set(a.hidden));
    de(
      () => a.hidden,
      (N) => {
        V.value = new Set(N);
      },
      { deep: !0 }
    );
    function F(N) {
      const D = new Set(V.value);
      D.has(N) ? D.delete(N) : D.add(N), V.value = D, r("apply-columns", [...D]);
    }
    function Z() {
      V.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function te() {
      s.value = "", r("clear");
    }
    return (N, D) => (t(), n("div", My, [
      o("div", By, [
        o("div", Py, [
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
          ue(o("input", {
            "onUpdate:modelValue": D[0] || (D[0] = (Q) => s.value = Q),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, zy), [
            [be, s.value]
          ]),
          s.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: D[1] || (D[1] = (Q) => s.value = "")
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
          ])])) : w("", !0)
        ]),
        e.filterSchema.length ? (t(), T(Te, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: O(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", d.value ? "border-primary text-primary" : ""]),
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
              d.value ? (t(), n("span", jy, m(d.value), 1)) : w("", !0)
            ], 10, Ay)
          ]),
          panel: O(({ close: Q }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              D[7] || (D[7] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: I
              }, " Reset ")
            ]),
            D[10] || (D[10] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Oy, [
              (t(!0), n(z, null, L(e.filterSchema, (B) => (t(), n("div", {
                key: B.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Ly, m(B.label), 1),
                $(B) ? (t(), T(St, {
                  key: 0,
                  "model-value": x(B),
                  options: v(B),
                  placeholder: `Any ${B.label.toLowerCase()}`,
                  "onUpdate:modelValue": (K) => u.value[B.key] = K.length ? K : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : B.type === "querybuilder" ? (t(), T(Co, {
                  key: 1,
                  "model-value": u.value[B.key] ?? null,
                  fields: B.fields ?? {},
                  operators: B.operators ?? {},
                  "max-depth": B.maxDepth ?? 5,
                  onApply: (K) => W(B.key, K)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : B.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[B.key] == "string" && !String(u.value[B.key]).includes("..") ? u.value[B.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (K) => g(B, K.target.value)
                  }, [
                    D[8] || (D[8] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, L(J(B), (K) => (t(), n("option", {
                      key: String(K.value),
                      value: K.value
                    }, m(K.label), 9, Dy))), 128))
                  ], 40, Vy),
                  o("div", Ty, [
                    o("input", {
                      type: "date",
                      value: c(B, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (K) => C(
                        B,
                        "from",
                        K.target.value
                      )
                    }, null, 40, Fy),
                    o("input", {
                      type: "date",
                      value: c(B, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (K) => C(
                        B,
                        "to",
                        K.target.value
                      )
                    }, null, 40, Ey)
                  ])
                ], 64)) : B.type === "numberrange" ? (t(), n("div", Iy, [
                  o("input", {
                    type: "number",
                    value: c(B, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (K) => M(
                      B,
                      "from",
                      K.target.value
                    )
                  }, null, 40, Ny),
                  o("input", {
                    type: "number",
                    value: c(B, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (K) => M(
                      B,
                      "to",
                      K.target.value
                    )
                  }, null, 40, Ry)
                ])) : B.type === "boolean" ? (t(), n("div", Uy, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[B.key] === !0,
                    class: j([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[B.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (K) => g(B, u.value[B.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: j(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[B.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, Hy),
                  o("span", qy, m(B.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: j([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[B.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (K) => g(B, u.value[B.key] === !1 ? null : !1)
                  }, m(B.falseLabel ?? "No") + " only ", 11, Ky)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[B.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (K) => g(B, K.target.value)
                }, [
                  D[9] || (D[9] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, L(J(B), (K) => (t(), n("option", {
                    key: String(K.value),
                    value: K.value
                  }, m(K.label), 9, Wy))), 128))
                ], 40, Gy))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !f.value,
              onClick: (B) => P(Q)
            }, " Apply filters ", 8, Zy)
          ]),
          _: 1
        })) : w("", !0),
        E(Te, { "dismiss-on-panel-click": !1 }, {
          trigger: O(() => [...D[11] || (D[11] = [
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
          panel: O(() => [
            D[14] || (D[14] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", Jy, [
              (t(!0), n(z, null, L(e.columns, (Q) => (t(), n("button", {
                key: Q.key,
                type: "button",
                class: j(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", Q.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: Q.locked,
                onClick: (B) => F(Q.key)
              }, [
                V.value.has(Q.key) ? (t(), n("span", Qy)) : (t(), n("svg", Xy, [...D[12] || (D[12] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                R(" " + m(Q.label), 1)
              ], 10, Yy))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: Z
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
          onClick: D[2] || (D[2] = (Q) => r("toggle-reorder"))
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
        ])], 10, ex)) : w("", !0),
        e.groups.length ? (t(), T(Te, {
          key: 2,
          align: "end"
        }, {
          trigger: O(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
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
            ])], 10, tx)
          ]),
          panel: O(({ close: Q }) => [
            o("div", ax, [
              o("button", {
                type: "button",
                class: j(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (B) => {
                  y(null), Q();
                }
              }, " No grouping ", 10, nx),
              (t(!0), n(z, null, L(e.groups, (B) => (t(), n("button", {
                key: B.key,
                type: "button",
                class: j(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === B.key ? "text-primary font-medium" : ""]),
                onClick: (K) => {
                  y(B.key), Q();
                }
              }, m(B.label), 11, lx))), 128))
            ])
          ]),
          _: 1
        })) : w("", !0),
        b.value ? (t(), n("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: te
        }, " Clear ")) : w("", !0),
        e.loading ? (t(), n("span", ox, "Loading…")) : w("", !0)
      ]),
      p.value.length ? (t(), n("div", sx, [
        (t(!0), n(z, null, L(p.value, (Q) => (t(), n("span", {
          key: Q.key + Q.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${Q.key}`
        }, [
          R(m(Q.label) + " ", 1),
          Q.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${Q.label}`,
            onClick: (B) => S(Q.key)
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
          ])], 8, ix)) : w("", !0)
        ], 8, rx))), 128)),
        p.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: D[3] || (D[3] = (Q) => r("clear-filters"))
        }, " Clear all ")) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), ux = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, dx = { class: "grid gap-2" }, cx = {
  key: 0,
  class: "text-destructive text-sm"
}, fx = { class: "flex gap-2" }, n4 = /* @__PURE__ */ A({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = G((() => {
      const S = navigator.userAgent, $ = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: x }) => x.test(S))?.name, _ = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: x }) => x.test(S))?.name;
      return [$, _].filter(Boolean).join(" on ") || "";
    })()), i = G(!1), u = ka(null), d = k(() => u.value?.isLoading.value ?? !1), f = k(() => u.value?.error.value ?? null), b = k(() => u.value?.isSupported.value ?? !1);
    fe(async () => {
      try {
        const { usePasskeyRegister: S } = await import("@laravel/passkeys/vue");
        u.value = S({
          onSuccess: () => {
            s.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const p = async (S) => {
      S.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, y = () => {
      i.value = !1, s.value = "";
    };
    return (S, $) => b.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", dx, [
        $[3] || ($[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ue(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": $[1] || ($[1] = (_) => s.value = _),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [be, s.value]
        ]),
        $[4] || ($[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      f.value ? (t(), n("p", cx, m(f.value), 1)) : w("", !0),
      o("div", fx, [
        E(se, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: O(() => [
            R(m(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        E(se, {
          type: "button",
          variant: "ghost",
          onClick: y
        }, {
          default: O(() => [...$[5] || ($[5] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(se, {
      key: 1,
      variant: "outline",
      onClick: $[0] || ($[0] = (_) => i.value = !0)
    }, {
      default: O(() => [...$[2] || ($[2] = [
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", ux, " Passkeys are not supported in this browser. "));
  }
}), mx = { class: "text-sm font-semibold" }, px = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, vx = {
  key: 4,
  class: "flex flex-col gap-3"
}, gx = { class: "text-sm font-medium" }, hx = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, bx = {
  key: 0,
  class: "mb-1 font-medium"
}, yx = ["onClick"], xx = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, kx = { class: "flex items-center justify-between gap-3 border-t p-4" }, $x = ["disabled"], wx = /* @__PURE__ */ A({
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
    const a = e, r = l, s = G(!a.node.collapsed), i = G(0), u = G(0), d = k(
      () => (a.node.children ?? []).map((x) => ({
        label: x.label ?? "",
        description: x.description
      }))
    ), f = k(() => a.depth === 0), b = k(() => {
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
    }), p = k(() => {
      const x = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return x[a.node.tone ?? "info"] ?? x.info;
    }), y = k(() => {
      const x = a.node.columns ?? 1;
      return x >= 3 ? "sm:grid-cols-3" : x === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function S(x) {
      const v = [], g = (c) => {
        c.component === "field" && c.key && v.push(c.key), c.children?.forEach(g);
      };
      return g(x), v.some((c) => a.errors[c]);
    }
    function $(x) {
      if (x.hidden)
        return !1;
      const v = x.visibleWhen;
      return v ? a.values[v.field] == v.value : !0;
    }
    function _(x) {
      if (a.upload)
        return (v, g) => a.upload(x, v, g);
    }
    return (x, v) => {
      const g = vt("SchemaNode", !0);
      return e.node.component === "field" && $(e.node) ? (t(), T(qe, {
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
        upload: _(e.node.key),
        discard: e.discard,
        onChange: v[0] || (v[0] = (c) => r("change", e.node.key, c))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && $(e.node) ? (t(), n("section", {
        key: 1,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: j(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: v[1] || (v[1] = (c) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", mx, m(e.node.label), 1),
            e.node.description ? (t(), n("p", px, m(e.node.description), 1)) : w("", !0)
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
          ])], 2)) : w("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [y.value, f.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (c, C) => (t(), T(g, {
            key: C,
            node: c,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: j(c.span && c.span >= 2 ? "sm:col-span-2" : ""),
            onChange: v[2] || (v[2] = (M, P) => r("change", M, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", y.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (c, C) => (t(), T(g, {
          key: C,
          node: c,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: v[3] || (v[3] = (M, P) => r("change", M, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 3,
        class: j(["flex", b.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (c, C) => (t(), T(g, {
          key: C,
          node: c,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: v[4] || (v[4] = (M, P) => r("change", M, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", vx, [
        o("legend", gx, m(e.node.label), 1),
        e.node.description ? (t(), n("p", hx, m(e.node.description), 1)) : w("", !0),
        o("div", {
          class: j(["grid grid-cols-1 gap-4", y.value])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (c, C) => (t(), T(g, {
            key: C,
            node: c,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: v[5] || (v[5] = (M, P) => r("change", M, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 5,
        role: "note",
        class: j(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", bx, m(e.node.title), 1)) : w("", !0),
        o("p", null, m(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (c, C) => (t(), n("button", {
            key: C,
            type: "button",
            class: j([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === C ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (M) => i.value = C
          }, [
            R(m(c.label) + " ", 1),
            S(c) ? (t(), n("span", xx)) : w("", !0)
          ], 10, yx))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (c, C) => ue((t(), n("div", {
          key: C,
          class: j(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(c.children ?? [], (M, P) => (t(), T(g, {
            key: P,
            node: M,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: v[6] || (v[6] = (W, I) => r("change", W, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, i.value === C]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        E(li, {
          class: j(["p-4", f.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (c) => S((e.node.children ?? [])[c]),
          "onUpdate:activeStep": v[7] || (v[7] = (c) => u.value = c)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, L(e.node.children ?? [], (c, C) => ue((t(), n("div", {
          key: C,
          class: j(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(c.children ?? [], (M, P) => (t(), T(g, {
            key: P,
            node: M,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: v[8] || (v[8] = (W, I) => r("change", W, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, u.value === C]
        ])), 128)),
        o("div", kx, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: v[9] || (v[9] = (c) => u.value--)
          }, " Back ", 8, $x),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: v[10] || (v[10] = (c) => u.value++)
          }, " Next ")) : w("", !0)
        ])
      ], 2)) : w("", !0);
    };
  }
}), Cx = { class: "flex flex-col gap-4" }, _x = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, l4 = /* @__PURE__ */ A({
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
    returnUrl: {}
  },
  emits: ["change"],
  setup(e, { emit: l }) {
    const a = e;
    Nt("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    });
    const r = l, s = k(() => a.nodes.length > 0), i = k(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = k(() => a.errors._conflict);
    function d(f) {
      if (a.upload)
        return (b, p) => a.upload(f, b, p);
    }
    return (f, b) => (t(), n("div", Cx, [
      u.value ? (t(), n("p", _x, m(u.value), 1)) : w("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, L(e.nodes, (p, y) => (t(), T(wx, {
        key: y,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: b[0] || (b[0] = (S, $) => r("change", S, $))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, L(e.fields, (p) => (t(), T(qe, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (y) => e.searchOptions(p.key, y) : void 0,
          upload: d(p.key),
          discard: e.discard,
          class: j(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (y) => r("change", p.key, y)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), Sx = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, Mx = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, Bx = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Px = ["disabled"], zx = ["disabled"], Ax = ["disabled"], o4 = /* @__PURE__ */ A({
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
    return (l, a) => (t(), T(Ee, { to: "body" }, [
      E(ze, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: O(() => [
          e.show ? (t(), n("div", Sx, [
            o("div", Mx, [
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
              o("span", Bx, m(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, m(e.discardLabel), 9, Px)) : w("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, m(e.cancelLabel), 9, zx),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, m(e.processing ? "Saving…" : e.saveLabel), 9, Ax)
            ])
          ])) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function s4(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = G(rt(e.value)), s = k(() => rt(e.value) !== r.value);
  function i() {
    r.value = rt(e.value);
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
function rt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const jx = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, Ox = { class: "text-muted-foreground text-xs font-medium" }, Lx = { class: "text-sm" }, Vx = { key: 1 }, Dx = {
  key: 5,
  class: "max-w-full"
}, Tx = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, Fx = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, Ex = { key: 6 }, Ix = {
  key: 0,
  class: "divide-y rounded-md border"
}, Nx = { class: "text-muted-foreground truncate font-medium" }, Rx = { class: "col-span-2 break-words" }, Ux = {
  key: 1,
  class: "text-muted-foreground"
}, Hx = {
  key: 7,
  class: "flex flex-col gap-3"
}, qx = {
  key: 0,
  class: "text-muted-foreground"
}, Kx = ["href"], Gx = { class: "text-sm font-semibold" }, Wx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Zx = ["onClick"], r4 = /* @__PURE__ */ A({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(!a.node.collapsed), i = G(0), u = k(() => a.depth === 0), d = k(() => {
      const S = a.node.columns ?? 1;
      return S >= 3 ? "sm:grid-cols-3" : S === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), f = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, b = k(() => a.node.key ? a.record[a.node.key] : null), p = k(() => {
      const S = b.value;
      if (S == null || S === "")
        return "-";
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(S)).toLocaleDateString(void 0, f[a.node.type]);
      let $ = String(S);
      return a.node.transform === "upper" && ($ = $.toUpperCase()), a.node.transform === "lower" && ($ = $.toLowerCase()), [a.node.prefix, $, a.node.suffix].filter(Boolean).join(" ");
    }), y = k(() => {
      const S = typeof b.value == "boolean" ? b.value ? "1" : "" : String(b.value), $ = a.node.colors?.[S] ?? a.node.defaultColor ?? "neutral";
      return wt[$] ?? "outline";
    });
    return (S, $) => {
      const _ = vt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", jx, [
        o("dt", Ox, m(e.node.label), 1),
        o("dd", Lx, [
          e.node.type === "badge" && h(Oo)(b.value) ? (t(), T(Ue, {
            key: 0,
            variant: y.value,
            class: "capitalize"
          }, {
            default: O(() => [
              R(m(b.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", Vx, "-")) : e.node.type === "icon" ? (t(), T(Zl, {
            key: 2,
            value: b.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(Xl, {
            key: 3,
            src: b.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(no, {
            key: 4,
            value: typeof b.value == "string" ? b.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", Dx, [
            e.node.language ? (t(), n("p", Tx, m(e.node.language), 1)) : w("", !0),
            o("pre", Fx, [
              o("code", null, m(b.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", Ex, [
            b.value && typeof b.value == "object" && !Array.isArray(b.value) && Object.keys(b.value).length ? (t(), n("dl", Ix, [
              (t(!0), n(z, null, L(b.value, (x, v) => (t(), n("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", Nx, m(v), 1),
                o("dd", Rx, m(x), 1)
              ]))), 128))
            ])) : (t(), n("span", Ux, "-"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", Hx, [
            (t(!0), n(z, null, L(Array.isArray(b.value) ? b.value : [], (x, v) => (t(), n("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, L(e.node.entries ?? [], (g, c) => (t(), T(_, {
                key: c,
                node: g,
                record: x,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (C) => r("action", C))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(b.value) || b.value.length === 0 ? (t(), n("span", qx, "-")) : w("", !0)
          ])) : e.node.url ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, m(p.value), 9, Kx)) : (t(), n("span", {
            key: 9,
            class: j([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, m(p.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
            onClick: $[1] || ($[1] = (x) => r("action", e.node.action))
          }, m(e.node.action.label), 1)) : w("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: j(u.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: j(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: $[2] || ($[2] = (x) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", Gx, m(e.node.label), 1),
            e.node.description ? (t(), n("p", Wx, m(e.node.description), 1)) : w("", !0)
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (x, v) => (t(), T(_, {
            key: v,
            node: x,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[3] || ($[3] = (g) => r("action", g))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), n(z, null, L(e.node.children ?? [], (x, v) => (t(), T(_, {
          key: v,
          node: x,
          record: e.record,
          depth: e.depth + 1,
          onAction: $[4] || ($[4] = (g) => r("action", g))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: j(u.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, L(e.node.children ?? [], (x, v) => (t(), n("button", {
            key: v,
            type: "button",
            class: j([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (g) => i.value = v
          }, m(x.label), 11, Zx))), 128))
        ], 2),
        (t(!0), n(z, null, L(e.node.children ?? [], (x, v) => ue((t(), n("div", {
          key: v,
          class: j(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, L(x.children ?? [], (g, c) => (t(), T(_, {
            key: c,
            node: g,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (C) => r("action", C))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [je, i.value === v]
        ])), 128))
      ], 2)) : w("", !0);
    };
  }
}), Jx = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, Yx = { class: "text-muted-foreground text-sm" }, Xx = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, Qx = { class: "flex items-start gap-3" }, e0 = { class: "min-w-0 flex-1" }, t0 = { class: "flex flex-wrap items-center gap-2" }, a0 = { class: "truncate text-sm font-medium" }, n0 = { class: "text-muted-foreground mt-0.5 text-xs" }, l0 = { class: "text-muted-foreground text-xs" }, o0 = { class: "mt-auto flex items-center gap-2" }, s0 = /* @__PURE__ */ A({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", Jx, [
      o("p", Yx, m(s.value) + " of " + m(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", Xx, [
        (t(!0), n(z, null, L(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", Qx, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: d.color }),
              "aria-hidden": "true"
            }, m(d.mark), 5),
            o("div", e0, [
              o("div", t0, [
                o("h3", a0, m(d.label), 1),
                E(ge, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: O(() => [
                    R(m(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), T(ge, {
                  key: 0,
                  status: "offered"
                }, {
                  default: O(() => [...u[0] || (u[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), T(ge, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: O(() => [...u[1] || (u[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                d.isDefault ? (t(), T(ge, {
                  key: 2,
                  status: "default"
                }, {
                  default: O(() => [...u[2] || (u[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                d.connected && d.mode ? (t(), T(ge, {
                  key: 3,
                  status: d.mode
                }, {
                  default: O(() => [
                    R(m(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : w("", !0)
              ]),
              o("p", n0, m(d.caption), 1)
            ])
          ]),
          o("p", l0, m(d.methods.join(" · ")), 1),
          o("div", o0, [
            E(se, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", d.key)
            }, {
              default: O(() => [...u[3] || (u[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(se, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", d.key)
            }, {
              default: O(() => [
                R(m(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), r0 = { class: "flex flex-col gap-6" }, i0 = { class: "relative" }, u0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, d0 = ["d"], c0 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, f0 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, m0 = { class: "flex flex-wrap items-center gap-2" }, p0 = { class: "text-muted-foreground text-sm" }, v0 = { class: "flex flex-col gap-1 text-sm" }, g0 = ["value"], h0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, b0 = { class: "flex flex-wrap items-center gap-2" }, y0 = {
  key: 1,
  class: "flex items-center gap-2"
}, i4 = /* @__PURE__ */ A({
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
    const l = Ke(e, "gateways"), a = G(null), r = G(""), s = k(
      () => l.value.find(($) => $.key === a.value) ?? null
    ), i = k(() => {
      const $ = r.value.trim().toLowerCase();
      return $ === "" ? l.value : l.value.filter((_) => [_.key, _.label, _.caption, ..._.methods].join(" ").toLowerCase().includes($));
    });
    function u($) {
      return $.connected && $.enabled !== !1;
    }
    function d($, _) {
      l.value = l.value.map(
        (x) => x.key === $ ? { ...x, ..._ } : x
      );
    }
    function f($) {
      a.value = $;
    }
    function b($) {
      const _ = l.value.find((v) => v.key === $);
      if (!_)
        return;
      const x = !_.connected;
      d($, {
        connected: x,
        mode: x ? _.mode ?? "test" : null,
        enabled: x,
        isDefault: !1
      });
    }
    function p($, _) {
      const x = l.value.find((v) => v.key === $);
      x?.connected && d($, { enabled: _, isDefault: _ ? x.isDefault : !1 });
    }
    function y($) {
      const _ = l.value.find((x) => x.key === $);
      !_ || !u(_) || (l.value = l.value.map((x) => ({
        ...x,
        isDefault: x.key === $
      })));
    }
    function S($) {
      const _ = a.value;
      !_ || !l.value.find((v) => v.key === _)?.connected || d(_, { mode: $ });
    }
    return ($, _) => (t(), n(z, null, [
      o("div", r0, [
        E(_e, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", i0, [
          (t(), n("svg", u0, [
            o("path", {
              d: h(ie)("search")
            }, null, 8, d0)
          ])),
          E(pe, {
            modelValue: r.value,
            "onUpdate:modelValue": _[0] || (_[0] = (x) => r.value = x),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(s0, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: b
        }, null, 8, ["gateways"])) : (t(), n("p", c0, " No gateways match “" + m(r.value.trim()) + "”. ", 1))
      ]),
      E(Bt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: _[8] || (_[8] = (x) => a.value = null)
      }, {
        footer: O(() => [
          E(se, {
            variant: "outline",
            size: "sm",
            onClick: _[6] || (_[6] = (x) => a.value = null)
          }, {
            default: O(() => [..._[21] || (_[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(se, {
            key: 0,
            size: "sm",
            onClick: _[7] || (_[7] = (x) => b(s.value.key))
          }, {
            default: O(() => [
              R(m(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : w("", !0)
        ]),
        default: O(() => [
          s.value ? (t(), n("div", f0, [
            o("div", m0, [
              E(ge, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: O(() => [
                  R(m(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(ge, {
                key: 0,
                status: "offered"
              }, {
                default: O(() => [..._[9] || (_[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(ge, {
                key: 1,
                status: "disabled"
              }, {
                default: O(() => [..._[10] || (_[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.isDefault ? (t(), T(ge, {
                key: 2,
                status: "default"
              }, {
                default: O(() => [..._[11] || (_[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.connected && s.value.mode ? (t(), T(ge, {
                key: 3,
                status: s.value.mode
              }, {
                default: O(() => [
                  R(m(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : w("", !0)
            ]),
            o("p", p0, m(s.value.caption), 1),
            o("label", v0, [
              _[12] || (_[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, g0)
            ]),
            _[20] || (_[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", h0, [
              _[16] || (_[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              _[17] || (_[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", b0, [
                E(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: _[1] || (_[1] = (x) => p(s.value.key, !0))
                }, {
                  default: O(() => [..._[13] || (_[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: _[2] || (_[2] = (x) => p(s.value.key, !1))
                }, {
                  default: O(() => [..._[14] || (_[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: _[3] || (_[3] = (x) => y(s.value.key))
                }, {
                  default: O(() => [..._[15] || (_[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : w("", !0),
            s.value.connected ? (t(), n("div", y0, [
              E(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: _[4] || (_[4] = (x) => S("test"))
              }, {
                default: O(() => [..._[18] || (_[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: _[5] || (_[5] = (x) => S("live"))
              }, {
                default: O(() => [..._[19] || (_[19] = [
                  R(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : w("", !0)
          ])) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title"])
    ], 64));
  }
});
function It(e) {
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
function u4(e) {
  const l = G(It(e));
  fe(() => {
    l.value = It(e);
  }), de(
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
function d4(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = G(
    l.driver === "none" ? "off" : "connecting"
  ), f = G(/* @__PURE__ */ new Set());
  let b = /* @__PURE__ */ new Map(), p, y, S, $ = (/* @__PURE__ */ new Date()).toISOString(), _ = null;
  function x(F, Z) {
    b.set(F, { ...b.get(F) ?? {}, ...Z }), !p && (p = setTimeout(() => {
      p = void 0, v();
    }, l.batchMs));
  }
  function v() {
    if (b.size === 0)
      return;
    const F = b;
    b = /* @__PURE__ */ new Map();
    const Z = /* @__PURE__ */ new Set();
    for (const [te, N] of F) {
      const D = a.value.find((Q) => Q[r] === te);
      if (!D) {
        u?.(te, N);
        continue;
      }
      Object.assign(D, N), Z.add(te);
    }
    Z.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...Z]), setTimeout(() => {
      const te = new Set(f.value);
      Z.forEach((N) => te.delete(N)), f.value = te;
    }, 1500));
  }
  async function g() {
    if (!(!s || a.value.length === 0)) {
      S?.abort(), S = new AbortController();
      try {
        const F = a.value.map((N) => N[r]), { records: Z, at: te } = await s(F, $);
        $ = te, d.value = "live";
        for (const N of Z)
          x(N[r], N);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function c() {
    C(), d.value = "live", y = setInterval(g, l.intervalMs);
  }
  function C() {
    clearInterval(y), y = void 0, S?.abort();
  }
  function M() {
    return window.Echo ?? null;
  }
  function P() {
    const F = M();
    if (!F || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    _ = l.channel;
    const Z = F.private(l.channel);
    for (const te of l.events)
      Z.listen(te, (N) => {
        N?.[r] !== void 0 && x(N[r], N);
      });
    d.value = "live", F.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), F.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function W() {
    _ && (M()?.leave(_), _ = null);
  }
  function I() {
    l.driver === "poll" && c(), l.driver === "broadcast" && P();
  }
  function J() {
    C(), W(), clearTimeout(p), p = void 0, b = /* @__PURE__ */ new Map();
  }
  function V() {
    l.pauseWhenHidden && (document.hidden ? (J(), d.value = "paused") : ($ = (/* @__PURE__ */ new Date()).toISOString(), I(), i?.()));
  }
  return fe(() => {
    l.driver !== "none" && (I(), l.pauseWhenHidden && document.addEventListener("visibilitychange", V));
  }), ve(() => {
    document.removeEventListener("visibilitychange", V), J();
  }), { status: d, recentlyChanged: f, applyPatch: x, flush: v, pollOnce: g };
}
const x0 = /^[a-z0-9-]+$/, k0 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function c4(e) {
  $a(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !x0.test(a) || typeof r != "string" || !k0.test(r) || (l[`--${a}`] = r);
    os(l);
  });
}
const $0 = { class: "flex items-center gap-0.5" }, w0 = /* @__PURE__ */ A({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", $0, [
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
}), C0 = /* @__PURE__ */ A({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(ia, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), _0 = { class: "flex flex-col gap-2" }, S0 = { class: "bg-card rounded-lg border p-4" }, M0 = { class: "text-muted-foreground truncate text-xs" }, B0 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, P0 = /* @__PURE__ */ A({
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
      const _ = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return _ === "" ? u.value : `${u.value} › ${_.split("/").join(" › ")}`;
    });
    function f(_, x) {
      return _.length <= x ? _ : `${_.slice(0, x - 1).trimEnd()}…`;
    }
    const b = k(() => f(s.value, r.value.titleMax)), p = k(() => f(i.value, r.value.descriptionMax));
    function y(_, x, v) {
      return _ === 0 ? { tone: "text-muted-foreground", note: "empty" } : _ > v ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : _ < x ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const S = k(
      () => y(s.value.length, r.value.titleMin, r.value.titleMax)
    ), $ = k(
      () => y(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (_, x) => (t(), n("div", _0, [
      o("div", S0, [
        o("p", M0, m(d.value), 1),
        o("p", {
          class: j(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", b.value === "" ? "text-muted-foreground italic" : ""])
        }, m(b.value || "Untitled page"), 3),
        o("p", {
          class: j(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, m(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", B0, [
        o("span", {
          class: j(S.value.tone)
        }, " Title " + m(s.value.length) + "/" + m(r.value.titleMax) + " · " + m(S.value.note), 3),
        o("span", {
          class: j($.value.tone)
        }, " Description " + m(i.value.length) + "/" + m(r.value.descriptionMax) + " · " + m($.value.note), 3)
      ]),
      x[0] || (x[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function z0() {
  $e("radio", md), $e("checkboxlist", gd), $e("tags", wd), $e("colour", Vd), $e("slider", Nd), $e("visual-select", ec), $e("markdown", Ku), $e("code", Qu), $e("seo-preview", P0), ot("swatch", ac), ot("voucher-code-box", C0), ot("document-colour-mode", w0);
}
function ca() {
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
const A0 = /* @__PURE__ */ A({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = ca();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: j(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", h(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      H(r.$slots, "default")
    ], 6));
  }
}), j0 = ["id"], ke = /* @__PURE__ */ A({
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
        E(A0, null, {
          default: O(() => [
            H(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, j0));
  }
}), O0 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, L0 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, V0 = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Oe = /* @__PURE__ */ A({
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
      e.eyebrow ? (t(), n("p", O0, m(e.eyebrow), 1)) : w("", !0),
      e.title ? (t(), n("h2", L0, m(e.title), 1)) : w("", !0),
      e.body ? (t(), n("p", V0, m(e.body), 1)) : w("", !0)
    ], 2)) : w("", !0);
  }
});
function D0() {
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
const T0 = { class: "pk-tilt-inner relative h-full" }, F0 = /* @__PURE__ */ A({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = D0();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", T0, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        H(a.$slots, "default")
      ])
    ], 512));
  }
}), E0 = { class: "flex flex-col gap-10" }, I0 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, N0 = { class: "text-base font-semibold" }, R0 = { class: "text-sm text-pretty text-muted-foreground" }, U0 = /* @__PURE__ */ A({
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
    return (a, r) => (t(), T(ke, null, {
      default: O(() => [
        o("div", E0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", I0, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), T(F0, {
              key: i,
              class: j(l(s.span))
            }, {
              default: O(() => [
                o("div", {
                  class: j([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", N0, m(s.title), 1),
                  o("p", R0, m(s.body), 1)
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
}), H0 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, q0 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, K0 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, G0 = ["href"], W0 = /* @__PURE__ */ A({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), T(ke, null, {
      default: O(() => [
        o("div", H0, [
          o("h2", q0, m(e.title), 1),
          e.body ? (t(), n("p", K0, m(e.body), 1)) : w("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, m(e.label), 9, G0)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Z0 = { class: "flex flex-col gap-8" }, J0 = { class: "divide-y rounded-lg border" }, Y0 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, X0 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Q0 = /* @__PURE__ */ A({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(ke, { narrow: "" }, {
      default: O(() => [
        o("div", Z0, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", J0, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", Y0, [
                R(m(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", X0, m(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ek = { class: "flex flex-col gap-10" }, tk = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, ak = { class: "text-sm font-semibold" }, nk = { class: "text-sm text-pretty text-muted-foreground" }, lk = /* @__PURE__ */ A({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(ke, null, {
      default: O(() => [
        o("div", ek, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", tk, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", ak, m(r.title), 1),
              o("p", nk, m(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ok = { class: "flex flex-col items-center gap-6 text-center" }, sk = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, rk = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, ik = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, uk = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, dk = ["href"], ck = ["href"], fk = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, mk = /* @__PURE__ */ A({
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
    return (l, a) => (t(), T(ke, null, {
      default: O(() => [
        o("div", ok, [
          e.eyebrow ? (t(), n("p", sk, m(e.eyebrow), 1)) : w("", !0),
          o("h1", rk, m(e.title), 1),
          e.body ? (t(), n("p", ik, m(e.body), 1)) : w("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", uk, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, m(e.secondaryLabel), 9, dk)) : w("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, m(e.primaryLabel), 9, ck)) : w("", !0)
          ])) : w("", !0),
          e.note ? (t(), n("p", fk, m(e.note), 1)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), pk = { class: "flex flex-col items-center gap-6" }, vk = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, gk = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, hk = /* @__PURE__ */ A({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(ke, { muted: "" }, {
      default: O(() => [
        o("div", pk, [
          e.title ? (t(), n("p", vk, m(e.title), 1)) : w("", !0),
          o("ul", gk, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, m(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), bk = { class: "flex flex-col gap-10" }, yk = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, xk = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, kk = ["aria-pressed"], $k = ["aria-pressed"], wk = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Ck = { class: "grid gap-4 md:grid-cols-3" }, _k = { class: "flex flex-col gap-1" }, Sk = { class: "text-sm font-semibold" }, Mk = { class: "flex items-baseline gap-1" }, Bk = { class: "text-3xl font-semibold tracking-tight" }, Pk = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, zk = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, Ak = { class: "flex flex-col gap-2 text-sm" }, jk = { class: "text-muted-foreground" }, Ok = ["href"], Lk = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(ke, { muted: "" }, {
      default: O(() => [
        o("div", bk, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", yk, [
            o("div", xk, [
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, kk),
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, $k)
            ]),
            e.annualNote ? (t(), n("p", wk, m(e.annualNote), 1)) : w("", !0)
          ])) : w("", !0),
          o("ul", Ck, [
            (t(!0), n(z, null, L(e.items ?? [], (d, f) => (t(), n("li", {
              key: f,
              class: j(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", _k, [
                o("h3", Sk, m(d.name), 1),
                o("p", Mk, [
                  o("span", Bk, m(s(d)), 1),
                  d.period ? (t(), n("span", Pk, m(d.period), 1)) : w("", !0)
                ]),
                d.body ? (t(), n("p", zk, m(d.body), 1)) : w("", !0)
              ]),
              o("ul", Ak, [
                (t(!0), n(z, null, L(d.features ?? [], (b, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", jk, m(b.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: j([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, m(d.label), 11, Ok)) : w("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function Vk() {
  const e = G(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), f = d.height + window.innerHeight, b = f <= 0 ? 0 : (window.innerHeight - d.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(b, 0), 1)));
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
        s = f.some((b) => b.isIntersecting), s && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), ve(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const Dk = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, Tk = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Fk = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Ek = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Ik = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Nk = { class: "pk-showcase-stage w-full [perspective:1400px]" }, Rk = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, Uk = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Hk = { class: "ml-3 truncate text-xs text-muted-foreground" }, qk = { class: "flex" }, Kk = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, Gk = { class: "min-w-0 flex-1 p-4" }, Wk = { class: "flex flex-col divide-y rounded-md border" }, Zk = /* @__PURE__ */ A({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = Vk();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Dk, [
        o("div", Tk, [
          o("div", Fk, [
            o("h2", Ek, m(e.title), 1),
            e.body ? (t(), n("p", Ik, m(e.body), 1)) : w("", !0)
          ]),
          o("div", Nk, [
            o("div", Rk, [
              o("div", Uk, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", Hk, m(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", qk, [
                o("div", Kk, [
                  (t(), n(z, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", Gk, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", Wk, [
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
}), Jk = /* @__PURE__ */ A({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = ca(), s = G(0);
    return de(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), f = (b) => {
        const p = Math.min((b - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, m(e.prefix ?? "") + m(s.value.toFixed(e.decimals)) + m(e.suffix ?? ""), 513));
  }
}), Yk = { class: "flex flex-col gap-10" }, Xk = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, Qk = { class: "order-2 text-sm text-muted-foreground" }, e2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, t2 = /* @__PURE__ */ A({
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
    return (a, r) => (t(), T(ke, { muted: "" }, {
      default: O(() => [
        o("div", Yk, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", Xk, [
            (t(!0), n(z, null, L(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", Qk, m(s.label), 1),
              o("dd", e2, [
                l(s.value) ? (t(), T(Jk, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
                  R(m(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), a2 = { class: "flex flex-col gap-10" }, n2 = { class: "grid gap-6 md:grid-cols-3" }, l2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, o2 = { class: "text-sm font-semibold" }, s2 = { class: "text-sm text-pretty text-muted-foreground" }, r2 = /* @__PURE__ */ A({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(ke, null, {
      default: O(() => [
        o("div", a2, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", n2, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", l2, m(s + 1), 1),
              o("h3", o2, m(r.title), 1),
              o("p", s2, m(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), i2 = { class: "flex flex-col gap-10" }, u2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, d2 = { class: "text-pretty text-sm leading-relaxed" }, c2 = { class: "mt-auto flex items-center gap-3" }, f2 = ["src"], m2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, p2 = { class: "min-w-0" }, v2 = { class: "block truncate text-sm font-medium" }, g2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, h2 = /* @__PURE__ */ A({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(ke, null, {
      default: O(() => [
        o("div", i2, [
          E(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", u2, [
            (t(!0), n(z, null, L(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", d2, " “" + m(r.quote) + "” ", 1),
              o("figcaption", c2, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, f2)) : (t(), n("span", m2, m((r.name ?? "?").slice(0, 1)), 1)),
                o("span", p2, [
                  o("span", v2, m(r.name), 1),
                  r.role ? (t(), n("span", g2, m(r.role), 1)) : w("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), f4 = /* @__PURE__ */ A({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: mk,
      logos: hk,
      features: lk,
      bento: U0,
      showcase: Zk,
      steps: r2,
      stats: t2,
      testimonials: h2,
      pricing: Lk,
      faq: Q0,
      cta: W0
    }, s = k(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(z, null, L(s.value, (d) => (t(), T(Ae(d.component), le({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), b2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, m4 = /* @__PURE__ */ A({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", b2, [
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
}), y2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, p4 = /* @__PURE__ */ A({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", y2, [...a[0] || (a[0] = [
      pt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), x2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, v4 = /* @__PURE__ */ A({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", x2, [...a[0] || (a[0] = [
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
z0();
const g4 = "0.0.1";
export {
  Dw as AdminDirectory,
  Gs as Alert,
  Ws as AlertDescription,
  Zs as AlertTitle,
  yw as AppPageFooter,
  I2 as AppearanceDrawer,
  V$ as Avatar,
  D$ as AvatarFallback,
  T$ as AvatarImage,
  wt as BADGE_VARIANTS,
  D2 as BadgeResolver,
  Pw as BarChart,
  F$ as Breadcrumb,
  E$ as BreadcrumbEllipsis,
  I$ as BreadcrumbItem,
  N$ as BreadcrumbLink,
  R$ as BreadcrumbList,
  U$ as BreadcrumbPage,
  H$ as BreadcrumbSeparator,
  P2 as BulkActions,
  uw as Card,
  dw as CardAction,
  cw as CardContent,
  fw as CardDescription,
  mw as CardFooter,
  pw as CardHeader,
  vw as CardTitle,
  u1 as CartPanel,
  qw as CatalogBrowser,
  Lv as CatalogCard,
  da as CatalogFilterSheet,
  Mt as CatalogGrid,
  Uw as CatalogInspect,
  X1 as CatalogItemDetail,
  Hw as CatalogItemView,
  Kw as CatalogRegister,
  Rw as CatalogTill,
  op as ChartCard,
  Ze as ChartTooltip,
  Or as Checkbox,
  A2 as CheckboxCell,
  j2 as CodeCell,
  no as ColourCell,
  Lw as ComboChart,
  Ww as DASHBOARD_HIDDEN_STORAGE_KEY,
  Ob as DASHBOARD_HIDE_KEY,
  Zw as DashboardShortcuts,
  nl as DataTable,
  X$ as Dialog,
  Q$ as DialogClose,
  ew as DialogContent,
  tw as DialogDescription,
  aw as DialogFooter,
  nw as DialogHeader,
  jr as DialogOverlay,
  lw as DialogScrollContent,
  ow as DialogTitle,
  sw as DialogTrigger,
  Dw as DirectoryPage,
  k$ as DropdownMenu,
  $$ as DropdownMenuCheckboxItem,
  w$ as DropdownMenuContent,
  C$ as DropdownMenuGroup,
  _$ as DropdownMenuItem,
  S$ as DropdownMenuLabel,
  y4 as DropdownMenuPortal,
  M$ as DropdownMenuRadioGroup,
  B$ as DropdownMenuRadioItem,
  P$ as DropdownMenuSeparator,
  z$ as DropdownMenuShortcut,
  A$ as DropdownMenuSub,
  j$ as DropdownMenuSubContent,
  O$ as DropdownMenuSubTrigger,
  L$ as DropdownMenuTrigger,
  L2 as EditableCell,
  qe as FormFieldControl,
  Vw as HeatmapChart,
  at as ICON_PATHS,
  Zl as IconCell,
  Xl as ImageCell,
  r4 as InfoNode,
  tr as JPEG_IMAGE_ERROR,
  O2 as KeyValueCell,
  rw as Label,
  kf as LineChart,
  Uh as LineItems,
  Xe as MiniStatCard,
  q$ as NavigationMenu,
  K$ as NavigationMenuContent,
  G$ as NavigationMenuIndicator,
  W$ as NavigationMenuItem,
  Z$ as NavigationMenuLink,
  J$ as NavigationMenuList,
  Y$ as NavigationMenuTrigger,
  zr as NavigationMenuViewport,
  er as OPAQUE_IMAGE_ERROR,
  i4 as PaymentGatewaySettings,
  s0 as PaymentGateways,
  zw as PieChart,
  q2 as PkAlertError,
  m4 as PkAuroraBackdrop,
  Ue as PkBadge,
  U0 as PkBento,
  N2 as PkBottomNav,
  gw as PkBoundary,
  _w as PkBuilder,
  se as PkButton,
  hw as PkCard,
  gd as PkCheckboxList,
  ia as PkCodeBox,
  Qu as PkCodeInput,
  Vd as PkColourPicker,
  v4 as PkConsoleBackdrop,
  Jk as PkCountUp,
  W0 as PkCta,
  xw as PkDeviceFrame,
  Oc as PkDocument,
  Te as PkDropdown,
  p4 as PkEditorialBackdrop,
  Q0 as PkFaq,
  lk as PkFeatureGrid,
  he as PkFieldLabel,
  oa as PkFileUpload,
  _e as PkHeading,
  mk as PkHero,
  Ri as PkKeyValue,
  f4 as PkLandingSections,
  hk as PkLogoCloud,
  Ku as PkMarkdownInput,
  it as PkModal,
  St as PkMultiSelect,
  U2 as PkOtpInput,
  n4 as PkPasskeyRegister,
  K2 as PkPasswordInput,
  Lk as PkPricing,
  jh as PkQtyStepper,
  Co as PkQueryBuilder,
  md as PkRadioGroup,
  Cw as PkRepeater,
  A0 as PkReveal,
  Xi as PkRichEditor,
  ke as PkSection,
  Oe as PkSectionHeading,
  Zk as PkShowcase,
  mb as PkSignaturePad,
  Fe as PkSkeleton,
  Bt as PkSlideover,
  Nd as PkSlider,
  R2 as PkSpinner,
  t2 as PkStats,
  ge as PkStatusBadge,
  li as PkStepIndicator,
  r2 as PkSteps,
  ac as PkSwatchPreview,
  wd as PkTagsInput,
  h2 as PkTestimonials,
  pe as PkTextInput,
  F0 as PkTiltCard,
  ec as PkVisualSelect,
  rg as PlanCard,
  Nw as PlanEditor,
  Iw as PlanGrid,
  Ow as PolarAreaChart,
  jw as RadarChart,
  T2 as RecordActions,
  l4 as RecordForm,
  z2 as RelationPanel,
  cv as STATUS_TONES,
  Aw as ScatterChart,
  wx as SchemaNode,
  Fw as SegmentedBar,
  Xw as SelectionBar,
  _r as Separator,
  Yw as SetupChecklist,
  aa as ShadcnInput,
  rr as Sheet,
  W2 as SheetClose,
  ur as SheetContent,
  dr as SheetDescription,
  Z2 as SheetFooter,
  cr as SheetHeader,
  fr as SheetTitle,
  J2 as SheetTrigger,
  Cp as ShortcutsWidget,
  Y2 as Sidebar,
  X2 as SidebarContent,
  Q2 as SidebarFooter,
  e$ as SidebarGroup,
  t$ as SidebarGroupAction,
  a$ as SidebarGroupContent,
  n$ as SidebarGroupLabel,
  l$ as SidebarHeader,
  o$ as SidebarInput,
  s$ as SidebarInset,
  r$ as SidebarMenu,
  i$ as SidebarMenuAction,
  u$ as SidebarMenuBadge,
  c$ as SidebarMenuButton,
  f$ as SidebarMenuItem,
  m$ as SidebarMenuSkeleton,
  p$ as SidebarMenuSub,
  v$ as SidebarMenuSubButton,
  g$ as SidebarMenuSubItem,
  h$ as SidebarProvider,
  b$ as SidebarRail,
  y$ as SidebarSeparator,
  x$ as SidebarTrigger,
  Gw as SignatureStudio,
  tt as Sparkline,
  iw as Spinner,
  Tw as StatCard,
  Ew as StatListChart,
  Jw as StatStrip,
  De as Switch,
  na as TRANSPARENT_IMAGE_HELP,
  Qw as TablePagination,
  e4 as TableShell,
  t4 as TableTabs,
  a4 as TableToolbar,
  Bw as ThemeToggle,
  $r as Tooltip,
  wr as TooltipContent,
  d$ as TooltipProvider,
  Cr as TooltipTrigger,
  ua as TrendBadge,
  o4 as UnsavedBar,
  Js as alertVariants,
  ls as appearanceVars,
  ft as applyAppearance,
  sr as assertTransparentImage,
  Xt as buttonClasses,
  Qe as catalogFiltersActive,
  X as cn,
  Vv as cycleLabel,
  Se as emptyCatalogFilters,
  oi as fieldControl,
  vh as findExactSku,
  Dv as formatPerkValue,
  Oo as hasBadgeValue,
  kw as hasFieldControl,
  Sw as hasOptionPreview,
  ie as iconPath,
  lr as imageHasTransparency,
  F2 as initializeAppearance,
  ct as isDark,
  Pt as matchCatalogItem,
  Ar as navigationMenuTriggerStyle,
  Rd as optionPreview,
  G2 as packWidgetColumns,
  Tv as perkGranted,
  _t as readAppearance,
  z0 as registerBuiltInFieldControls,
  $e as registerFieldControl,
  ot as registerOptionPreview,
  $w as registeredFieldTypes,
  Ud as registeredOptionPreviews,
  ww as resetFieldControls,
  Mw as resetOptionPreviews,
  E2 as setAppearancePersister,
  Sr as sidebarMenuButtonVariants,
  vv as statusBadgeVariant,
  pv as statusTone,
  H2 as toUrl,
  ta as useAppearance,
  u4 as useColumnVisibility,
  d4 as useLiveUpdates,
  D0 as usePointer,
  ca as useReveal,
  V2 as useSchemaColumns,
  Vk as useScrollProgress,
  bw as useShellPageFooter,
  et as useSidebar,
  c4 as useTenantTheme,
  s4 as useUnsavedChanges,
  g4 as version
};
//# sourceMappingURL=index.js.map
