import './ui.css';
import { defineComponent as A, ref as K, watch as de, useId as pa, computed as k, openBlock as t, createElementBlock as a, normalizeClass as j, createElementVNode as o, createCommentVNode as $, withModifiers as ce, unref as x, Fragment as z, renderList as D, createTextVNode as R, toDisplayString as c, createStaticVNode as ht, renderSlot as q, nextTick as Se, onBeforeUnmount as ve, createBlock as T, Teleport as Fe, createVNode as F, Transition as Ae, withCtx as L, onMounted as fe, normalizeStyle as ae, resolveDynamicComponent as he, mergeProps as le, withDirectives as ue, vModelText as xe, normalizeProps as ye, guardReactiveProps as Pe, defineAsyncComponent as Ot, inject as Xe, resolveComponent as bt, vShow as je, vModelSelect as Ve, vModelDynamic as va, isRef as ga, useTemplateRef as ha, onErrorCaptured as ba, provide as ct, useSlots as xa, markRaw as Ut, withKeys as ya, reactive as qe, useModel as We, mergeModels as _e, createSlots as ka, shallowRef as $a, watchEffect as wa } from "vue";
import { Check as Ht, AlertCircle as Ca, EyeOff as Sa, Eye as Ma, X as xt, PanelLeftOpen as Ba, PanelLeftClose as _a, Circle as Pa, ChevronRight as qt, MoreHorizontal as za, ChevronDown as Aa, Loader2Icon as ja } from "@lucide/vue";
import { reactiveOmit as re, useVModel as Kt, useMediaQuery as Oa, useEventListener as La, defaultDocument as Va } from "@vueuse/core";
import { useForwardPropsEmits as me, CheckboxRoot as Da, CheckboxIndicator as Ta, SwitchRoot as Ia, SwitchThumb as Fa, DialogRoot as Gt, DialogClose as Ee, DialogOverlay as yt, DialogPortal as kt, DialogContent as $t, DialogDescription as Wt, DialogTitle as Zt, DialogTrigger as Jt, createContext as Ea, Primitive as Ne, TooltipRoot as Na, TooltipPortal as Ra, TooltipContent as Ua, TooltipArrow as Ha, TooltipProvider as Yt, TooltipTrigger as qa, Separator as Ka, DropdownMenuRoot as Ga, DropdownMenuCheckboxItem as Wa, DropdownMenuItemIndicator as Xt, DropdownMenuPortal as Za, DropdownMenuContent as Ja, DropdownMenuGroup as Ya, useForwardProps as ke, DropdownMenuItem as Xa, DropdownMenuLabel as Qa, DropdownMenuRadioGroup as en, DropdownMenuRadioItem as tn, DropdownMenuSeparator as an, DropdownMenuSub as nn, DropdownMenuSubContent as ln, DropdownMenuSubTrigger as on, DropdownMenuTrigger as sn, AvatarRoot as rn, AvatarFallback as un, AvatarImage as dn, NavigationMenuViewport as cn, NavigationMenuRoot as fn, NavigationMenuContent as mn, NavigationMenuIndicator as pn, NavigationMenuItem as vn, NavigationMenuLink as gn, NavigationMenuList as hn, NavigationMenuTrigger as bn, Label as xn } from "reka-ui";
import { DropdownMenuPortal as W4 } from "reka-ui";
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
}, jn = { key: 1 }, On = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Ln = {
  key: 0,
  class: "bg-muted/40"
}, Vn = ["colspan"], Dn = ["aria-expanded", "dusk", "onClick"], Tn = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, In = {
  key: 1,
  dusk: "group-header"
}, Fn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], En = {
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
    const n = e;
    function r(O) {
      if (!O || !n.groupBy)
        return "";
      if (O.__group !== void 0 && O.__group !== null)
        return String(O.__group);
      const J = O[n.groupBy.key];
      return J == null || J === "" ? "" : String(J);
    }
    function s(O) {
      return n.groupBy ? O === 0 ? !0 : r(n.rows[O]) !== r(n.rows[O - 1]) : !1;
    }
    function i(O) {
      if (O.__groupTitle)
        return String(O.__groupTitle);
      const J = n.groupBy ? O[n.groupBy.key] : null, Q = J == null || J === "" ? "None" : String(J);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? Q : `${n.groupBy.label}: ${Q}`;
    }
    const u = K(/* @__PURE__ */ new Set()), d = K(/* @__PURE__ */ new Set());
    function m(O) {
      return n.groupBy?.collapsible ? u.value.has(O) : !1;
    }
    function h(O) {
      if (!n.groupBy?.collapsible)
        return;
      const J = new Set(d.value);
      J.add(O), d.value = J;
      const Q = new Set(u.value);
      Q.has(O) ? Q.delete(O) : Q.add(O), u.value = Q;
    }
    function p(O) {
      return n.groupBy?.collapsible ? !m(r(n.rows[O])) : !0;
    }
    de(
      () => n.rows,
      (O) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const J = new Set(u.value);
        for (const Q of O) {
          const ne = r(Q);
          ne !== "" && !d.value.has(ne) && J.add(ne);
        }
        u.value = J;
      },
      { immediate: !0 }
    );
    const y = K(null), M = K(null);
    function w(O, J) {
      y.value = O, J.dataTransfer?.setData("text/plain", String(O)), J.dataTransfer && (J.dataTransfer.effectAllowed = "move");
    }
    function C() {
      y.value = null, M.value = null;
    }
    function b(O) {
      return y.value === null || M.value !== O ? "" : y.value > O ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function v(O, J) {
      y.value !== null && (J.preventDefault(), M.value = O);
    }
    function g(O) {
      const J = y.value;
      if (y.value = null, M.value = null, J === null || J === O)
        return;
      const Q = n.rows.map((oe) => oe[n.rowKey]), [ne] = Q.splice(J, 1);
      Q.splice(O, 0, ne), f("reorder", Q);
    }
    const f = l;
    function S(O, J) {
      !n.rowClickable || n.reordering || J.button !== 0 || J.metaKey || J.ctrlKey || J.shiftKey || J.altKey || J.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || f("row-click", O);
    }
    const B = K(null), P = pa(), G = k(() => n.columns.filter((O) => !n.hidden?.has(O.key)));
    function N(O) {
      const J = O[n.rowKey];
      return J == null || J === "" ? null : J;
    }
    function ee(O) {
      const J = N(O);
      return J !== null && !!n.selected?.has(J);
    }
    function H(O) {
      const J = N(O);
      J !== null && f("toggle-row", J);
    }
    const W = k(
      () => n.rows.map((O) => N(O)).filter((O) => O !== null)
    ), Z = k(
      () => W.value.length > 0 && W.value.every((O) => n.selected?.has(O))
    ), te = k(
      () => !Z.value && W.value.some((O) => n.selected?.has(O))
    );
    function U(O) {
      return O.sortKey ?? O.key;
    }
    function I(O) {
      return n.sort === U(O);
    }
    async function Y(O, J, Q) {
      try {
        await navigator.clipboard.writeText(String(Q)), B.value = `${O}-${J.key}`, setTimeout(() => B.value = null, 1200);
      } catch {
      }
    }
    const _ = k(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function E(O) {
      return n.summaries?.[O] ?? null;
    }
    function V(O) {
      const J = n.summaries?.[O], Q = n.summaryValues?.[O];
      if (!J)
        return "";
      if (Q == null)
        return "-";
      const ne = J.divideBy ? Q / J.divideBy : Q, oe = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: J.decimals,
        maximumFractionDigits: J.decimals
      }).format(ne);
      return `${J.prefix ?? ""}${oe}${J.suffix ?? ""}`;
    }
    return (O, J) => (t(), a("div", {
      class: j(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", wn, [
        o("thead", Cn, [
          o("tr", Sn, [
            e.reordering ? (t(), a("th", Mn)) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Bn, [
              o("input", {
                id: `${x(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: Z.value,
                indeterminate: te.value,
                "aria-label": "Select all rows on this page",
                onClick: J[0] || (J[0] = ce(() => {
                }, ["stop"])),
                onChange: J[1] || (J[1] = ce((Q) => f("toggle-page", !Z.value), ["stop"]))
              }, null, 40, _n)
            ])) : $("", !0),
            (t(!0), a(z, null, D(G.value, (Q) => (t(), a("th", {
              key: Q.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              Q.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ne) => f("sort", U(Q))
              }, [
                R(c(Q.label) + " ", 1),
                I(Q) ? (t(), a("span", zn, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", An, "↕"))
              ], 8, Pn)) : (t(), a("span", jn, c(Q.label), 1))
            ]))), 128)),
            O.$slots.actions ? (t(), a("th", On, [...J[3] || (J[3] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        o("tbody", {
          class: j(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(z, null, D(e.rows, (Q, ne) => (t(), a(z, {
            key: N(Q) ?? `row-${ne}`
          }, [
            e.groupBy && s(ne) ? (t(), a("tr", Ln, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !m(r(Q)),
                  dusk: `group-header-${r(Q) || "none"}`,
                  onClick: (oe) => h(r(Q))
                }, [
                  o("span", Tn, c(m(r(Q)) ? "▸" : "▾"), 1),
                  R(" " + c(i(Q)), 1)
                ], 8, Dn)) : (t(), a("span", In, c(i(Q)), 1))
              ], 8, Vn)
            ])) : $("", !0),
            p(ne) ? (t(), a("tr", {
              key: 1,
              class: j(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                ee(Q) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                y.value === ne ? "opacity-40" : "",
                b(ne),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (oe) => w(ne, oe),
              onDragover: (oe) => v(ne, oe),
              onDrop: ce((oe) => g(ne), ["prevent"]),
              onDragend: C,
              onContextmenu: (oe) => f("row-contextmenu", Q, oe),
              onClick: (oe) => S(Q, oe)
            }, [
              e.reordering ? (t(), a("td", En, [...J[4] || (J[4] = [
                ht('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-0d8c8f99><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-0d8c8f99><circle cx="9" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="18" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="18" r="1.5" data-v-0d8c8f99></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), a("td", Nn, [
                o("input", {
                  id: `${x(P)}-row-${N(Q) ?? ne}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: N(Q) ?? void 0,
                  checked: ee(Q),
                  disabled: N(Q) === null,
                  "aria-label": N(Q) === null ? "This row has no id and cannot be selected" : `Select row ${N(Q)}`,
                  onClick: J[2] || (J[2] = ce(() => {
                  }, ["stop"])),
                  onChange: ce((oe) => H(Q), ["stop"])
                }, null, 40, Rn)
              ])) : $("", !0),
              (t(!0), a(z, null, D(G.value, (oe) => (t(), a("td", {
                key: oe.key,
                class: j(["px-3 py-2 whitespace-nowrap", oe.cellClass])
              }, [
                q(O.$slots, `cell:${oe.key}`, {
                  row: Q,
                  value: Q[oe.key],
                  column: oe
                }, () => [
                  oe.copyable ? (t(), a("span", Un, [
                    R(c(Q[oe.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${oe.label.toLowerCase()}`,
                      onClick: (Le) => Y(String(Q[e.rowKey]), oe, Q[oe.key])
                    }, [
                      o("span", qn, c(B.value === `${Q[e.rowKey]}-${oe.key}` ? "✓" : "⧉"), 1)
                    ], 8, Hn)
                  ])) : (t(), a("span", Kn, c(Q[oe.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              O.$slots.actions ? (t(), a("td", Gn, [
                q(O.$slots, "actions", { row: Q }, void 0, !0)
              ])) : $("", !0)
            ], 42, Fn)) : $("", !0)
          ], 64))), 128))
        ], 2),
        _.value ? (t(), a("tfoot", Wn, [
          o("tr", null, [
            e.selectable ? (t(), a("td", Zn)) : $("", !0),
            (t(!0), a(z, null, D(e.columns, (Q) => (t(), a(z, {
              key: `s-${Q.key}`
            }, [
              e.hidden?.has(Q.key) ? $("", !0) : (t(), a("td", {
                key: 0,
                class: j(["px-3 py-2 align-top text-sm whitespace-nowrap", Q.cellClass])
              }, [
                E(Q.key) ? (t(), a(z, { key: 0 }, [
                  o("span", Jn, c(E(Q.key).label), 1),
                  o("span", Yn, c(V(Q.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            O.$slots.actions ? (t(), a("td", Xn)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), a("div", Qn, [
        J[5] || (J[5] = o("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        q(O.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), a("div", el, [
        o("p", tl, c(e.emptyTitle), 1),
        e.emptyHint ? (t(), a("p", al, c(e.emptyHint), 1)) : $("", !0)
      ])) : $("", !0)
    ], 2));
  }
}), Ct = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of l)
    n[r] = s;
  return n;
}, ll = /* @__PURE__ */ Ct(nl, [["__scopeId", "data-v-0d8c8f99"]]), ol = ["aria-label"], sl = { class: "border-b px-5 py-4" }, rl = { class: "text-base font-semibold" }, il = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, ul = { class: "px-5 py-4" }, dl = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, Ke = /* @__PURE__ */ A({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(null);
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
      const y = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (y.length === 0)
        return;
      const M = y[0], w = y[y.length - 1];
      p.shiftKey && document.activeElement === M ? (p.preventDefault(), w.focus()) : !p.shiftKey && document.activeElement === w && (p.preventDefault(), M.focus());
    }
    return de(
      () => n.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", h), Se(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", h), i?.focus(), i = null);
      }
    ), ve(() => document.removeEventListener("keydown", h)), (p, y) => (t(), T(Fe, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: d,
            onPointerup: m
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
                e.description ? (t(), a("p", il, c(e.description), 1)) : $("", !0)
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
    const n = e, r = K(!1), s = K(null), i = K(null), u = K({ top: 0, left: 0, minWidth: 0 }), d = K(null);
    let m = null;
    function h(S) {
      !n.dismissOnPanelClick || S.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await Se(), b());
    }
    function y() {
      m = setTimeout(C, 180);
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
      const P = B.getBoundingClientRect(), G = 8, N = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : S.getBoundingClientRect();
      let ee, H;
      if (n.placement === "bottom")
        ee = N.bottom + n.offset, ee + P.height > window.innerHeight - G && N.top - P.height - n.offset > G && (ee = N.top - P.height - n.offset), H = n.align === "end" && !d.value ? N.right - P.width : N.left;
      else {
        ee = N.top;
        const W = n.placement === "right", Z = N.right + n.offset + P.width < window.innerWidth - G, te = N.left - n.offset - P.width > G;
        H = (W ? Z || !te : !te && Z) ? N.right + n.offset : N.left - n.offset - P.width;
      }
      H = Math.min(Math.max(G, H), window.innerWidth - P.width - G), ee = Math.min(Math.max(G, ee), window.innerHeight - P.height - G), u.value = { top: ee, left: H, minWidth: Math.max(N.width, cl) };
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
        b();
      }
    }
    return fe(() => {
      document.addEventListener("pointerdown", v), document.addEventListener("keydown", g), window.addEventListener("scroll", f, !0), window.addEventListener("resize", f);
    }), ve(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", g), window.removeEventListener("scroll", f, !0), window.removeEventListener("resize", f);
    }), l({ close: C, openAt: w }), (S, B) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: B[2] || (B[2] = (P) => e.hoverable && p()),
      onPointerleave: B[3] || (B[3] = (P) => e.hoverable && y())
    }, [
      o("div", { onClick: M }, [
        q(S.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Fe, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: L(() => [
            r.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: j([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: ae({
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
              onPointerleave: B[1] || (B[1] = (P) => e.hoverable && y()),
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
}, Al = ["disabled"], n$ = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(null), i = K(!1), u = k(() => n.allMatching ? n.total : n.count), d = k(() => u.value !== void 0), m = k(() => d.value && u.value === 0), h = k(() => n.actions.filter((g) => !g.destructive)), p = k(() => n.actions.filter((g) => g.destructive)), y = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function M(g) {
      return y[g.color ?? "gray"] ?? y.gray;
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
    return (g, f) => (t(), a(z, null, [
      F(Te, null, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...f[5] || (f[5] = [
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
          ])], 8, fl)
        ]),
        panel: L(() => [
          o("div", ml, [
            (t(!0), a(z, null, D(h.value, (S) => (t(), a("button", {
              key: S.key,
              type: "button",
              role: "menuitem",
              class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(S)]),
              disabled: e.busy,
              onClick: (B) => w(S)
            }, [
              (t(), a("svg", vl, [
                o("path", {
                  d: x(ie)(S.icon)
                }, null, 8, gl)
              ])),
              R(" " + c(S.label), 1)
            ], 10, pl))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: f[0] || (f[0] = (S) => i.value = !0)
            }, [
              (t(), a("svg", bl, [
                o("path", {
                  d: x(ie)("download")
                }, null, 8, xl)
              ])),
              f[6] || (f[6] = R(" Export CSV ", -1))
            ], 8, hl)) : $("", !0),
            p.value.length ? (t(), a("div", yl, [
              (t(!0), a(z, null, D(p.value, (S) => (t(), a("button", {
                key: S.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (B) => w(S)
              }, [
                (t(), a("svg", $l, [
                  o("path", {
                    d: x(ie)(S.icon ?? "trash")
                  }, null, 8, wl)
                ])),
                R(" " + c(S.label), 1)
              ], 8, kl))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      F(Ke, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: f[2] || (f[2] = (S) => s.value = null)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: f[1] || (f[1] = (S) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: j([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || m.value,
            onClick: C
          }, c(s.value?.label), 11, Bl)
        ]),
        default: L(() => [
          o("p", Cl, [
            f[7] || (f[7] = R(" This will affect ", -1)),
            o("span", Sl, [
              d.value ? (t(), a(z, { key: 1 }, [
                R(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            f[8] || (f[8] = R(" . ", -1))
          ]),
          m.value ? (t(), a("p", Ml, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      F(Ke, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: f[4] || (f[4] = (S) => i.value = !1)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: f[3] || (f[3] = (S) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || m.value,
            onClick: b
          }, " Export CSV ", 8, Al)
        ]),
        default: L(() => [
          o("p", _l, [
            f[9] || (f[9] = R(" This will export ", -1)),
            o("span", Pl, [
              d.value ? (t(), a(z, { key: 1 }, [
                R(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            f[10] || (f[10] = R(" . ", -1))
          ]),
          m.value ? (t(), a("p", zl, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), jl = { class: "bg-card overflow-hidden rounded-lg border" }, Ol = { class: "pk-scroll w-full overflow-x-auto" }, Ll = { class: "w-full border-collapse text-sm" }, Vl = { class: "bg-muted/40" }, Dl = { class: "divide-y" }, Tl = { key: 0 }, Il = ["colspan"], Fl = { key: 1 }, El = ["colspan"], Nl = ["href"], Rl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Ul = ["disabled"], Hl = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, ql = ["href"], l$ = /* @__PURE__ */ A({
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
    const n = e, r = l, s = k(() => n.columns.filter((u) => u.type !== "image"));
    function i(u, d) {
      return d == null || d === "" ? "-" : u.type === "date" || u.type === "datetime" ? new Date(String(d)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...u.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof d == "number" ? new Intl.NumberFormat().format(d) : String(d);
    }
    return (u, d) => (t(), a("div", jl, [
      o("div", Ol, [
        o("table", Ll, [
          o("thead", Vl, [
            o("tr", null, [
              (t(!0), a(z, null, D(s.value, (m) => (t(), a("th", {
                key: m.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, c(m.label), 1))), 128))
            ])
          ]),
          o("tbody", Dl, [
            e.loading && e.rows.length === 0 ? (t(), a("tr", Tl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, Il)
            ])) : e.loaded && e.rows.length === 0 ? (t(), a("tr", Fl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, c(e.emptyText), 9, El)
            ])) : $("", !0),
            (t(!0), a(z, null, D(e.rows, (m, h) => (t(), a("tr", {
              key: m.id ?? h,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), a(z, null, D(s.value, (p) => (t(), a("td", {
                key: p.key,
                class: j(["px-3 py-2 whitespace-nowrap", [
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
                  }, c(i(p, m[p.key])), 9, Nl)) : (t(), a(z, { key: 1 }, [
                    R(c(i(p, m[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), a("div", Rl, [
        o("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (m) => r("load", e.nextCursor))
        }, c(e.loading ? "Loading…" : "Load more"), 9, Ul)
      ])) : e.capped ? (t(), a("p", Hl, [
        R(" Showing the first " + c(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), a("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, ql)) : (t(), a(z, { key: 1 }, [
          R("Open the full list to search or filter the rest.")
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
function Ue(e = {}) {
  const l = e.variant ?? "default", n = e.size ?? "default";
  return [Kl, Gl[l], Wl[n], e.class].filter(Boolean).join(" ");
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
    const l = e, n = k(
      () => Ue({ variant: l.variant, size: l.size, class: l.class })
    ), r = k(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(he(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: j(n.value)
    }, {
      default: L(() => [
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
    const n = e, r = l;
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
    return (m, h) => (t(), a("ol", Zl, [
      (t(!0), a(z, null, D(e.steps, (p, y) => (t(), a("li", {
        key: y,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(he(e.interactive ? "button" : "div"), le({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(y)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: y > e.activeStep } : {}, {
          onClick: (M) => e.interactive && y <= e.activeStep && r("update:activeStep", y)
        }), {
          default: L(() => [
            o("span", {
              class: j(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(y)])
            }, [
              d(y) ? (t(), a("svg", Jl, [...h[0] || (h[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(y) ? (t(), a("svg", Yl, [...h[1] || (h[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(z, { key: 2 }, [
                R(c(y + 1), 1)
              ], 64))
            ], 2),
            o("span", Xl, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), a("span", Ql, c(p.description), 1)) : $("", !0)
            ]),
            e.hasError(y) ? (t(), a("span", eo)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        y < e.steps.length - 1 ? (t(), a("span", to)) : $("", !0)
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
function o$(e) {
  return Ze.has(e);
}
function s$() {
  return [...Ze.keys()].sort();
}
function r$() {
  Ze.clear();
}
const lo = ["aria-expanded"], oo = ["aria-label", "onClick"], so = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, ro = { class: "ml-auto flex shrink-0 items-center gap-1" }, io = {
  key: 0,
  class: "border-b p-1"
}, uo = ["placeholder"], co = { class: "max-h-60 overflow-y-auto p-1" }, fo = ["aria-selected", "onMouseenter", "onClick"], mo = {
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
    const n = e, r = l, s = K(null), i = K(null), u = K(null), d = K(!1), m = K(""), h = K(0), p = K({ top: 0, left: 0, width: 0 }), y = k(
      () => n.modelValue.map(
        (H) => n.options.find((W) => W.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), M = k(() => n.searchable ?? n.options.length > 6), w = k(() => {
      const H = new Set(n.modelValue), W = m.value.trim().toLowerCase();
      return n.options.filter((Z) => !H.has(Z.value)).filter((Z) => W ? Z.label.toLowerCase().includes(W) : !0);
    }), C = k(() => n.max !== null && n.modelValue.length >= n.max);
    function b() {
      const H = s.value, W = i.value;
      if (!H || !W)
        return;
      const Z = H.getBoundingClientRect(), te = W.getBoundingClientRect(), U = 8;
      let I = Z.bottom + 4;
      I + te.height > window.innerHeight - U && Z.top - te.height - 4 > U && (I = Z.top - te.height - 4), p.value = {
        top: I,
        left: Math.min(Math.max(U, Z.left), window.innerWidth - Z.width - U),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function v() {
      n.disabled || d.value || (d.value = !0, m.value = "", h.value = 0, await Se(), b(), u.value?.focus());
    }
    function g() {
      d.value = !1, m.value = "";
    }
    function f() {
      d.value ? g() : v();
    }
    function S(H) {
      C.value || (r("update:modelValue", [...n.modelValue, H.value]), m.value = "", h.value = 0, Se(() => {
        b(), u.value?.focus();
      }));
    }
    function B(H) {
      r(
        "update:modelValue",
        n.modelValue.filter((W) => W !== H)
      ), Se(b);
    }
    function P() {
      r("update:modelValue", []), Se(b);
    }
    function G(H) {
      if (!n.disabled) {
        if (H.key === "Escape" && d.value) {
          H.stopPropagation(), g();
          return;
        }
        if (H.key === "Backspace" && m.value === "" && n.modelValue.length > 0) {
          B(n.modelValue[n.modelValue.length - 1]);
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
            const W = w.value[h.value];
            W && S(W);
          }
        }
      }
    }
    function N(H) {
      if (!d.value)
        return;
      const W = H.target;
      s.value?.contains(W) || i.value?.contains(W) || g();
    }
    function ee() {
      d.value && b();
    }
    return de(w, (H) => {
      h.value > H.length - 1 && (h.value = Math.max(0, H.length - 1));
    }), fe(() => {
      document.addEventListener("pointerdown", N), window.addEventListener("scroll", ee, !0), window.addEventListener("resize", ee);
    }), ve(() => {
      document.removeEventListener("pointerdown", N), window.removeEventListener("scroll", ee, !0), window.removeEventListener("resize", ee);
    }), (H, W) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: G
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
        onClick: f
      }, [
        (t(!0), a(z, null, D(y.value, (Z) => (t(), a("span", {
          key: Z.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(c(Z.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${Z.label}`,
            onClick: ce((te) => B(Z.value), ["stop"])
          }, [...W[1] || (W[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, oo)
        ]))), 128)),
        y.value.length === 0 ? (t(), a("span", so, c(e.placeholder), 1)) : $("", !0),
        o("span", ro, [
          y.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ce(P, ["stop"])
          }, " Clear ")) : $("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: j(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...W[2] || (W[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, lo),
      (t(), T(Fe, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: L(() => [
            d.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: ae({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              M.value ? (t(), a("div", io, [
                ue(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": W[0] || (W[0] = (Z) => m.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: G
                }, null, 40, uo), [
                  [xe, m.value]
                ])
              ])) : $("", !0),
              o("div", co, [
                (t(!0), a(z, null, D(w.value, (Z, te) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: j(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", te === h.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": te === h.value,
                  onMouseenter: (U) => h.value = te,
                  onClick: (U) => S(Z)
                }, c(Z.label), 43, fo))), 128)),
                w.value.length === 0 ? (t(), a("p", mo, [
                  C.value ? (t(), a(z, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), a(z, { key: 1 }, [
                    R("Nothing matches “" + c(m.value) + "”.", 1)
                  ], 64)) : (t(), a(z, { key: 2 }, [
                    R("Everything is selected.")
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
});
function X(...e) {
  return kn(yn(e));
}
function i$(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const po = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(Da), le({ "data-slot": "checkbox" }, x(i), {
      class: x(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: L((m) => [
        F(x(Ta), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            q(u.$slots, "default", ye(Pe(m)), () => [
              F(x(Ht), { class: "size-3.5" })
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
    const n = e, r = l, s = me(re(n, "class"), r);
    return (i, u) => (t(), T(x(Ia), le({ "data-slot": "switch" }, x(s), {
      class: x(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: L(() => [
        F(x(Fa), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), vo = ["accept", "disabled"], go = { class: "text-sm font-medium" }, ho = { key: 0 }, bo = { key: 1 }, xo = { class: "text-muted-foreground text-xs" }, yo = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ko = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, $o = ["src"], wo = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Co = { class: "min-w-0 flex-1" }, So = { class: "block truncate text-sm font-medium" }, Mo = { class: "text-muted-foreground text-xs" }, Bo = ["href"], _o = {
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
    const n = e, r = l, s = K(null), i = K(!1), u = K(null), d = K(null), m = K(null), h = k(() => n.accept.map((S) => `.${S}`).join(",")), p = k(() => m.value ?? n.modelValue?.url ?? null), y = k(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(n.maxKilobytes * 1024)}`);
    function M(S) {
      if (!S)
        return "";
      const B = ["B", "KB", "MB", "GB"];
      let P = S, G = 0;
      for (; P >= 1024 && G < B.length - 1; )
        P /= 1024, G++;
      return `${P.toFixed(P < 10 && G > 0 ? 1 : 0)} ${B[G]}`;
    }
    function w(S) {
      return S.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(S) {
      return n.accept.length && !n.accept.includes(w(S.name)) ? `${w(S.name).toUpperCase() || "That"} files are not accepted here.` : S.size > n.maxKilobytes * 1024 ? `That file is ${M(S.size)}; the limit is ${M(n.maxKilobytes * 1024)}.` : null;
    }
    async function b(S) {
      const B = S?.[0];
      if (!(!B || n.disabled) && (d.value = C(B), !d.value)) {
        v(), n.image && B.type.startsWith("image/") && (m.value = URL.createObjectURL(B)), u.value = 0;
        try {
          const P = await n.upload(B, (G) => {
            u.value = G;
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
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function g() {
      const S = n.modelValue;
      v(), d.value = null, r("update:modelValue", null), S && !S.url && n.discard && await n.discard(S.value).catch(() => {
      });
    }
    function f(S) {
      i.value = !1, b(S.dataTransfer?.files ?? null);
    }
    return (S, B) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", ko, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, $o)) : (t(), a("span", wo, c(w(e.modelValue.name) || "file"), 1)),
        o("span", Co, [
          o("span", So, c(e.modelValue.name), 1),
          o("span", Mo, [
            R(c(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(z, { key: 0 }, [
              B[4] || (B[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Bo)
            ], 64)) : (t(), a(z, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? $("", !0) : (t(), a("button", {
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
      ])) : (t(), a("label", {
        key: 0,
        class: j(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: B[1] || (B[1] = ce((P) => i.value = !0, ["prevent"])),
        onDragleave: B[2] || (B[2] = ce((P) => i.value = !1, ["prevent"])),
        onDrop: ce(f, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: h.value,
          disabled: e.disabled,
          onChange: B[0] || (B[0] = (P) => b(P.target.files))
        }, null, 40, vo),
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
        o("span", go, [
          u.value === null ? (t(), a("span", ho, "Drop a file or click to choose")) : (t(), a("span", bo, "Uploading…"))
        ]),
        o("span", xo, c(y.value), 1),
        u.value !== null ? (t(), a("span", yo, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ae({ width: `${u.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      d.value ? (t(), a("p", _o, c(d.value), 1)) : $("", !0)
    ]));
  }
}), Po = { class: "flex flex-col gap-2" }, zo = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Ao = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, jo = { class: "flex flex-col gap-1" }, Oo = ["onUpdate:modelValue", "disabled", "aria-label"], Lo = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Vo = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Do = ["onUpdate:modelValue", "disabled", "aria-label"], To = ["disabled", "aria-label", "onClick"], Io = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Fo = { class: "flex items-center gap-3" }, Eo = ["disabled"], No = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Ro = /* @__PURE__ */ A({
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
    const n = e, r = l, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const u = K(d(n.modelValue));
    function d(b) {
      return b ? Object.entries(b).map(([v, g]) => ({
        uid: i++,
        key: v,
        value: g ?? ""
      })) : [];
    }
    de(
      () => n.modelValue,
      (b) => {
        JSON.stringify(b ?? null) !== JSON.stringify(m()) && (u.value = d(b));
      }
    );
    function m() {
      const b = {};
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && (b[g] = v.value);
      }
      return Object.keys(b).length ? b : null;
    }
    function h() {
      r("update:modelValue", m());
    }
    const p = k(() => {
      const b = /* @__PURE__ */ new Map();
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && b.set(g, (b.get(g) ?? 0) + 1);
      }
      return new Set([...b.entries()].filter(([, v]) => v > 1).map(([v]) => v));
    }), y = k(
      () => new Set(
        u.value.map((b) => b.key.trim()).filter((b) => b !== "" && !s.test(b))
      )
    ), M = k(() => n.maxPairs !== null && u.value.length >= n.maxPairs);
    function w() {
      M.value || n.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function C(b) {
      u.value = u.value.filter((v) => v.uid !== b), h();
    }
    return (b, v) => (t(), a("div", Po, [
      u.value.length ? (t(), a("div", zo, [
        o("div", Ao, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          v[0] || (v[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(z, null, D(u.value, (g) => (t(), a("div", {
          key: g.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", jo, [
            ue(o("input", {
              "onUpdate:modelValue": (f) => g.key = f,
              type: "text",
              class: j([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(g.key.trim()) || y.value.has(g.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: h
            }, null, 42, Oo), [
              [xe, g.key]
            ]),
            y.value.has(g.key.trim()) ? (t(), a("p", Lo, " Letters, numbers, underscores and dashes only. ")) : p.value.has(g.key.trim()) ? (t(), a("p", Vo, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          ue(o("input", {
            "onUpdate:modelValue": (f) => g.value = f,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: h
          }, null, 40, Do), [
            [xe, g.value]
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
          ])], 8, To)
        ]))), 128))
      ])) : (t(), a("p", Io, " Nothing here yet. ")),
      o("div", Fo, [
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
          R(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, Eo),
        e.maxPairs !== null ? (t(), a("p", No, c(u.value.length) + " of " + c(e.maxPairs), 1)) : $("", !0)
      ])
    ]));
  }
}), Uo = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Ho = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, qo = ["disabled", "title", "aria-label", "onClick"], Ko = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Go = ["d"], Wo = ["disabled"], Zo = ["contenteditable", "data-placeholder"], Jo = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Yo = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(null);
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
    ], d = k(() => u.filter((C) => n.toolbar.includes(C.id))), m = k(() => n.toolbar.includes("link")), h = K(0);
    function p() {
      const C = s.value?.innerHTML ?? "", b = (s.value?.innerText ?? "").trim();
      h.value = b.length;
      const v = b === "" ? null : C;
      i = v, r("update:modelValue", v);
    }
    function y(C) {
      n.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), p());
    }
    function M() {
      if (n.disabled)
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
      s.value && (s.value.innerHTML = n.modelValue ?? "", h.value = s.value.innerText.trim().length);
    }), de(
      () => n.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", h.value = s.value.innerText.trim().length);
      }
    ), (C, b) => (t(), a("div", Uo, [
      o("div", Ho, [
        (t(!0), a(z, null, D(d.value, (v) => (t(), a("button", {
          key: v.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: v.label,
          "aria-label": v.label,
          onMousedown: b[0] || (b[0] = ce(() => {
          }, ["prevent"])),
          onClick: (g) => y(v)
        }, [
          (t(), a("svg", Ko, [
            o("path", {
              d: v.path
            }, null, 8, Go)
          ]))
        ], 40, qo))), 128)),
        m.value ? (t(), a("button", {
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
        ])], 40, Wo)) : $("", !0)
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
        onPaste: w
      }, null, 42, Zo),
      e.maxLength !== null ? (t(), a("div", Jo, c(h.value) + " / " + c(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), Xo = /* @__PURE__ */ Ct(Yo, [["__scopeId", "data-v-32c63bc7"]]), Qo = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, es = { class: "flex items-center justify-between gap-2" }, ts = ["for"], as = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, ns = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs"
}, ls = ["aria-label", "disabled"], os = {
  key: 7,
  class: "flex flex-col gap-2"
}, ss = ["id", "value", "disabled"], rs = ["value"], is = {
  key: 0,
  class: "relative"
}, us = ["disabled"], ds = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, cs = { class: "max-h-56 overflow-y-auto p-1" }, fs = ["onClick"], ms = {
  key: 8,
  class: "relative"
}, ps = ["disabled", "aria-invalid"], vs = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, gs = { class: "max-h-56 overflow-y-auto p-1" }, hs = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, bs = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, xs = ["onClick"], ys = ["id", "value", "disabled", "aria-invalid"], ks = ["value"], $s = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, ws = { class: "text-muted-foreground" }, Cs = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Ss = { class: "text-muted-foreground" }, Ms = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Bs = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, _s = ["aria-label", "disabled"], Ps = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], zs = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, As = ["aria-label", "disabled"], js = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Os = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ls = ["aria-label", "disabled"], Vs = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ds = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ts = ["aria-label", "disabled"], Is = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Fs = ["disabled", "aria-pressed", "onClick"], Es = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Ns = ["title", "disabled", "onClick"], Rs = ["href"], Us = {
  key: 19,
  class: "text-destructive text-xs",
  role: "alert"
}, Hs = {
  key: 20,
  class: "text-muted-foreground text-xs"
}, qs = { class: "space-y-3" }, Ks = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Gs = ["for"], Ws = ["id", "type", "required", "placeholder", "value", "onInput"], Zs = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", Js = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Ge = /* @__PURE__ */ A({
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
    const n = Ot(() => import("./PkRepeater-J84jGe3T.js")), r = Ot(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = K(!1), d = K(""), m = K([]), h = K(!1), p = K(null);
    let y;
    de(d, (E) => {
      s.searchOptions && (clearTimeout(y), h.value = !0, y = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(E);
        } catch {
        } finally {
          h.value = !1;
        }
      }, 200));
    });
    async function M() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, m.value.length === 0 && s.searchOptions)) {
        h.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          h.value = !1;
        }
      }
    }
    function w(E) {
      p.value = E.label, i("change", E.value), u.value = !1, d.value = "";
    }
    function C() {
      p.value = null, i("change", null);
    }
    const b = Xe("panelPicker", null), v = Xe("panelCreateOption", null), g = K(!1), f = K(!1), S = K({}), B = K(null);
    function P() {
      S.value = {}, B.value = null, g.value = !0, u.value = !1;
    }
    async function G() {
      if (v) {
        f.value = !0, B.value = null;
        try {
          const E = await v.run(s.field.key, { ...S.value });
          w(E), g.value = !1;
        } catch (E) {
          B.value = E instanceof Error ? E.message : "Could not create that option.";
        } finally {
          f.value = !1;
        }
      }
    }
    const N = k(() => {
      if (!s.field.tableSelect || !b?.base)
        return;
      const E = b.returnUrl || "/";
      return `${b.base}/pick/${s.field.key}?return=${encodeURIComponent(E)}`;
    }), ee = k(() => s.field.morphTo ?? []), H = k(() => {
      const E = s.value;
      return E && typeof E == "object" && !Array.isArray(E) ? E : { type: void 0, id: void 0 };
    });
    function W(E) {
      i("change", { type: E || null, id: null });
    }
    function Z(E) {
      i("change", { type: H.value.type ?? null, id: E });
    }
    function te(E) {
      p.value = E.label, Z(E.value), u.value = !1, d.value = "";
    }
    ve(() => clearTimeout(y));
    const U = k(() => no(s.field.type)), I = k(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function Y(E) {
      if (E) {
        if (E.copy) {
          const V = s.value == null ? "" : String(s.value);
          V !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(V);
          return;
        }
        E.url && typeof window < "u" && window.open(E.url, "_blank", "noopener,noreferrer");
      }
    }
    function _(E) {
      const V = document.getElementById(`f-${s.field.key}`);
      if (!(V instanceof HTMLTextAreaElement) && !(V instanceof HTMLInputElement))
        return;
      const O = V.selectionStart ?? V.value.length, J = V.selectionEnd ?? O;
      V.setRangeText(E, O, J, "end"), V.dispatchEvent(new Event("input", { bubbles: !0 })), V.focus();
    }
    return (E, V) => (t(), a(z, null, [
      e.field.type === "hidden" ? (t(), a(z, { key: 0 }, [], 64)) : (t(), a("div", Qo, [
        o("div", es, [
          o("label", {
            for: `f-${e.field.key}`,
            class: j(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
          }, [
            R(c(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", as, "*")) : $("", !0)
          ], 10, ts),
          e.field.hint ? (t(), a("span", ns, [
            R(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: V[0] || (V[0] = (O) => Y(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, ls)) : $("", !0)
          ])) : $("", !0)
        ]),
        U.value ? (t(), T(he(U.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": V[1] || (V[1] = (O) => i("change", O))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(ea, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": V[2] || (V[2] = (O) => i("change", O))
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
          "onUpdate:modelValue": V[3] || (V[3] = (O) => i("change", O))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(x(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": V[4] || (V[4] = (O) => i("change", O))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Xo, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": V[5] || (V[5] = (O) => i("change", O))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(Ro, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": V[6] || (V[6] = (O) => i("change", O))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(St, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": V[7] || (V[7] = (O) => i("change", O))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : ee.value.length ? (t(), a("div", os, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: H.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            onChange: V[8] || (V[8] = (O) => W(O.target.value))
          }, [
            V[26] || (V[26] = o("option", { value: "" }, "Type", -1)),
            (t(!0), a(z, null, D(ee.value, (O) => (t(), a("option", {
              key: O.value,
              value: O.value
            }, c(O.label), 9, rs))), 128))
          ], 40, ss),
          H.value.type && e.searchOptions ? (t(), a("div", is, [
            o("button", {
              type: "button",
              class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              disabled: e.field.disabled || e.processing,
              onClick: M
            }, [
              o("span", {
                class: j(p.value || H.value.id ? "" : "text-muted-foreground")
              }, c(p.value ?? (H.value.id ? String(H.value.id) : "Search…")), 3)
            ], 8, us),
            u.value ? (t(), a("div", ds, [
              ue(o("input", {
                "onUpdate:modelValue": V[9] || (V[9] = (O) => d.value = O),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [xe, d.value]
              ]),
              o("div", cs, [
                (t(!0), a(z, null, D(m.value, (O) => (t(), a("button", {
                  key: String(O.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (J) => te(O)
                }, c(O.label), 9, fs))), 128))
              ])
            ])) : $("", !0),
            u.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: V[10] || (V[10] = (O) => u.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", ms, [
          o("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: M
          }, [
            o("span", {
              class: j(p.value || e.value ? "" : "text-muted-foreground")
            }, c(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: ce(C, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 8, ps),
          u.value ? (t(), a("div", vs, [
            ue(o("input", {
              "onUpdate:modelValue": V[11] || (V[11] = (O) => d.value = O),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [xe, d.value]
            ]),
            o("div", gs, [
              h.value ? (t(), a("p", hs, " Searching… ")) : m.value.length === 0 ? (t(), a("p", bs, " No matches ")) : $("", !0),
              (t(!0), a(z, null, D(m.value, (O) => (t(), a("button", {
                key: String(O.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (J) => w(O)
              }, c(O.label), 9, xs))), 128)),
              e.field.createOption && x(v) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 w-full rounded border-t px-2 py-1.5 text-left text-sm",
                onClick: P
              }, " Create new ")) : $("", !0)
            ])
          ])) : $("", !0),
          u.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: V[12] || (V[12] = (O) => u.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: V[13] || (V[13] = (O) => i("change", O.target.value || null))
        }, [
          V[27] || (V[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), a(z, null, D(e.options, (O) => (t(), a("option", {
            key: String(O.value),
            value: O.value
          }, c(O.label), 9, ks))), 128))
        ], 40, ys)) : e.field.type === "toggle" ? (t(), a("label", $s, [
          F(x(De), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": V[14] || (V[14] = (O) => i("change", O))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", ws, c(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", Cs, [
          F(x(po), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": V[15] || (V[15] = (O) => i("change", O === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", Ss, c(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !I.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onInput: V[16] || (V[16] = (O) => i("change", O.target.value))
        }, null, 40, Ms)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: j(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Bs, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: V[17] || (V[17] = (O) => Y(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, _s)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: V[18] || (V[18] = (O) => i("change", O.target.value))
          }, null, 40, Ps),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", zs, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: V[19] || (V[19] = (O) => Y(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, As)) : $("", !0)
        ], 2)) : I.value ? (t(), a("div", {
          key: 15,
          class: j(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Os, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: V[21] || (V[21] = (O) => Y(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Ls)) : $("", !0),
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
            class: j(Js),
            onInput: V[22] || (V[22] = (O) => i("change", O.target.value))
          }, null, 40, Vs),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Ds, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: V[23] || (V[23] = (O) => Y(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Ts)) : $("", !0)
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
          class: j(Zs),
          onInput: V[20] || (V[20] = (O) => i("change", O.target.value))
        }, null, 40, js)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", Is, [
          (t(!0), a(z, null, D(e.field.presets, (O) => (t(), a("button", {
            key: O,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: j([
              "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == O ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == O
            ),
            onClick: (J) => i("change", String(O))
          }, c(O), 11, Fs))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", Es, [
          (t(!0), a(z, null, D(e.field.chips, (O, J) => (t(), a("button", {
            key: J,
            type: "button",
            title: O,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (Q) => _(String(J))
          }, c(J), 9, Ns))), 128))
        ])) : $("", !0),
        N.value ? (t(), a("a", {
          key: 18,
          href: N.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Rs)) : $("", !0),
        e.error ? (t(), a("p", Us, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", Hs, c(e.field.help), 1)) : $("", !0)
      ])),
      e.field.createOption && x(v) ? (t(), T(Ke, {
        key: 2,
        open: g.value,
        title: "Create",
        busy: f.value,
        onClose: V[25] || (V[25] = (O) => g.value = !1)
      }, {
        footer: L(() => [
          F(se, {
            type: "button",
            variant: "outline",
            disabled: f.value,
            onClick: V[24] || (V[24] = (O) => g.value = !1)
          }, {
            default: L(() => [...V[28] || (V[28] = [
              R(" Cancel ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          F(se, {
            type: "button",
            disabled: f.value,
            onClick: G
          }, {
            default: L(() => [...V[29] || (V[29] = [
              R("Save", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ]),
        default: L(() => [
          o("div", qs, [
            B.value ? (t(), a("p", Ks, c(B.value), 1)) : $("", !0),
            (t(!0), a(z, null, D(e.field.createOption, (O) => (t(), a("div", {
              key: O.key,
              class: "flex flex-col gap-1"
            }, [
              o("label", {
                class: "text-sm font-medium",
                for: `create-${e.field.key}-${O.key}`
              }, c(O.label), 9, Gs),
              o("input", {
                id: `create-${e.field.key}-${O.key}`,
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                type: O.inputType === "email" ? "email" : "text",
                required: O.required,
                placeholder: O.placeholder,
                value: S.value[O.key] ?? "",
                onInput: (J) => S.value[O.key] = J.target.value
              }, null, 40, Ws)
            ]))), 128))
          ])
        ]),
        _: 1
      }, 8, ["open", "busy"])) : $("", !0)
    ], 64));
  }
}), Ys = { class: "text-sm font-semibold" }, Xs = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Qs = {
  key: 4,
  class: "flex flex-col gap-3"
}, er = { class: "text-sm font-medium" }, tr = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, ar = {
  key: 0,
  class: "mb-1 font-medium"
}, nr = ["onClick"], lr = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, or = { class: "flex items-center justify-between gap-3 border-t p-4" }, sr = ["disabled"], ta = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(!n.node.collapsed), i = K(0), u = K(0), d = k(
      () => (n.node.children ?? []).map((b) => ({
        label: b.label ?? "",
        description: b.description
      }))
    ), m = k(() => n.depth === 0), h = k(() => {
      const b = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, v = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        b[n.node.align ?? "start"] ?? "items-start",
        v[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = k(() => {
      const b = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return b[n.node.tone ?? "info"] ?? b.info;
    }), y = k(() => {
      const b = n.node.columns ?? 1;
      return b >= 3 ? "sm:grid-cols-3" : b === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function M(b) {
      const v = [], g = (f) => {
        f.component === "field" && f.key && v.push(f.key), f.children?.forEach(g);
      };
      return g(b), v.some((f) => n.errors[f]);
    }
    function w(b) {
      if (b.hidden)
        return !1;
      const v = b.visibleWhen;
      return v ? n.values[v.field] == v.value : !0;
    }
    function C(b) {
      if (n.upload)
        return (v, g) => n.upload(b, v, g);
    }
    return (b, v) => {
      const g = bt("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), T(Ge, {
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
        onChange: v[0] || (v[0] = (f) => r("change", e.node.key, f))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && w(e.node) ? (t(), a("section", {
        key: 1,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: j(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: v[1] || (v[1] = (f) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", Ys, c(e.node.label), 1),
            e.node.description ? (t(), a("p", Xs, c(e.node.description), 1)) : $("", !0)
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: j(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...v[11] || (v[11] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : $("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [y.value, m.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), T(g, {
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
            class: j(f.span && f.span >= 2 ? "sm:col-span-2" : ""),
            onChange: v[2] || (v[2] = (B, P) => r("change", B, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", y.value])
      }, [
        (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), T(g, {
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
          onChange: v[3] || (v[3] = (B, P) => r("change", B, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), a("div", {
        key: 3,
        class: j(["flex", h.value])
      }, [
        (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), T(g, {
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
          onChange: v[4] || (v[4] = (B, P) => r("change", B, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", Qs, [
        o("legend", er, c(e.node.label), 1),
        e.node.description ? (t(), a("p", tr, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: j(["grid grid-cols-1 gap-4", y.value])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), T(g, {
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
            onChange: v[5] || (v[5] = (B, P) => r("change", B, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), a("div", {
        key: 5,
        role: "note",
        class: j(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", ar, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 6,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), a("button", {
            key: S,
            type: "button",
            class: j([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === S ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (B) => i.value = S
          }, [
            R(c(f.label) + " ", 1),
            M(f) ? (t(), a("span", lr)) : $("", !0)
          ], 10, nr))), 128))
        ], 2),
        (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => ue((t(), a("div", {
          key: S,
          class: j(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, D(f.children ?? [], (B, P) => (t(), T(g, {
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
            onChange: v[6] || (v[6] = (G, N) => r("change", G, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, i.value === S]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), a("div", {
        key: 7,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        F(ao, {
          class: j(["p-4", m.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (f) => M((e.node.children ?? [])[f]),
          "onUpdate:activeStep": v[7] || (v[7] = (f) => u.value = f)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => ue((t(), a("div", {
          key: S,
          class: j(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, D(f.children ?? [], (B, P) => (t(), T(g, {
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
            onChange: v[8] || (v[8] = (G, N) => r("change", G, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, u.value === S]
        ])), 128)),
        o("div", or, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: v[9] || (v[9] = (f) => u.value--)
          }, " Back ", 8, sr),
          u.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: v[10] || (v[10] = (f) => u.value++)
          }, " Next ")) : $("", !0)
        ])
      ], 2)) : $("", !0);
    };
  }
}), u$ = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K({});
    de(
      () => n.open,
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), T(Ke, {
      open: e.open,
      title: e.title,
      busy: e.processing,
      onClose: d[2] || (d[2] = (m) => r("close"))
    }, {
      footer: L(() => [
        F(se, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: d[1] || (d[1] = (m) => r("close"))
        }, {
          default: L(() => [...d[3] || (d[3] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: L(() => [
            R(c(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: L(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ce(i, ["prevent"])
        }, [
          (t(!0), a(z, null, D(e.form?.nodes ?? [], (m, h) => (t(), T(ta, {
            key: h,
            node: m,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: d[0] || (d[0] = (p, y) => s.value[p] = y)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), rr = ["title"], ir = ["aria-label"], ur = ["d"], dr = { class: "sr-only" }, cr = /* @__PURE__ */ A({
  __name: "IconCell",
  props: {
    value: {},
    icons: { default: () => ({}) },
    colors: { default: () => ({}) },
    labels: { default: () => ({}) },
    defaultIcon: { default: "dot" }
  },
  setup(e) {
    const l = e, n = {
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
    }, s = k(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = k(() => l.icons[s.value] ?? l.defaultIcon), u = k(() => n[i.value] ?? n.dot), d = k(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), m = k(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (h, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: m.value
    }, [
      (t(), a("svg", {
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
        o("path", { d: u.value }, null, 8, ur)
      ], 10, ir)),
      o("span", dr, c(m.value), 1)
    ], 8, rr));
  }
}), fr = ["src"], mr = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, pr = /* @__PURE__ */ A({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const l = e, n = K(!1);
    de(
      () => l.src,
      () => n.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = k(() => {
      const u = typeof l.src == "string" ? l.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = k(() => {
      const u = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), a("span", {
      class: j(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (m) => n.value = !0)
      }, null, 40, fr)) : e.fallback === "initials" ? (t(), a(z, { key: 1 }, [
        R(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", mr, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
    ], 2));
  }
}), vr = {
  key: 0,
  class: "text-muted-foreground"
}, gr = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, hr = {
  key: 0,
  class: "font-mono text-xs"
}, br = {
  key: 1,
  class: "sr-only"
}, xr = /* @__PURE__ */ A({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = k(() => {
      const s = (l.value ?? "").trim();
      return n.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", vr, "-")) : (t(), a("span", gr, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ae({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", hr, c(r.value), 1)) : (t(), a("span", br, c(r.value), 1))
    ]));
  }
}), yr = { class: "inline-flex items-center" }, kr = ["checked", "aria-label"], $r = { class: "sr-only" }, d$ = /* @__PURE__ */ A({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, n = k(() => {
      const s = l.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = k(
      () => n.value ? l.trueLabel ?? "Yes" : l.falseLabel ?? "No"
    );
    return (s, i) => (t(), a("span", yr, [
      o("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, kr),
      o("span", $r, c(r.value), 1)
    ]));
  }
}), wr = {
  key: 0,
  class: "text-muted-foreground"
}, Cr = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, c$ = /* @__PURE__ */ A({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = k(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", Cr, c(n.value), 1)) : (t(), a("span", wr, "—"));
  }
}), Sr = { class: "flex items-center gap-2" }, Mr = ["onUpdate:modelValue", "onChange"], Br = ["value"], _r = ["onUpdate:modelValue"], Pr = ["value"], zr = ["onUpdate:modelValue"], Ar = ["onUpdate:modelValue", "multiple"], jr = ["value"], Or = ["onUpdate:modelValue", "type"], Lr = ["aria-label", "onClick"], Vr = { class: "flex items-center gap-2" }, Dr = /* @__PURE__ */ A({
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
    const n = e, r = l, s = () => ({ logic: "and", rules: [] }), i = K(n.modelValue ? structuredClone(n.modelValue) : s());
    de(
      () => n.modelValue,
      (f) => {
        i.value = f ? structuredClone(f) : s();
      }
    );
    const u = (f) => "rules" in f, d = k(() => Object.keys(n.fields));
    function m(f) {
      const S = f ? n.fields[f]?.kind : void 0;
      return S ? n.operators[S] ?? [] : [];
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
    function y() {
      const f = d.value[0];
      i.value.rules.push({
        field: f,
        operator: m(f)[0],
        value: void 0
      }), p();
    }
    function M() {
      i.value.rules.push(s()), p();
    }
    function w(f) {
      i.value.rules.splice(f, 1), p();
    }
    function C(f) {
      f.operator = m(f.field)[0], f.value = void 0, p();
    }
    const b = k(() => n.depth + 1 < n.maxDepth);
    function v() {
      i.value = s(), p(), r("apply", null);
    }
    function g() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (f, S) => {
      const B = bt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: j(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", Sr, [
          ue(o("select", {
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
        (t(!0), a(z, null, D(i.value.rules, (P, G) => (t(), a("div", {
          key: G,
          class: "flex items-start gap-2"
        }, [
          u(P) ? (t(), T(B, {
            key: 0,
            modelValue: i.value.rules[G],
            "onUpdate:modelValue": [(N) => i.value.rules[G] = N, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(z, { key: 1 }, [
            ue(o("select", {
              "onUpdate:modelValue": (N) => P.field = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (N) => C(P)
            }, [
              (t(!0), a(z, null, D(d.value, (N) => (t(), a("option", {
                key: N,
                value: N
              }, c(e.fields[N].label), 9, Br))), 128))
            ], 40, Mr), [
              [Ve, P.field]
            ]),
            ue(o("select", {
              "onUpdate:modelValue": (N) => P.operator = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(z, null, D(m(P.field), (N) => (t(), a("option", {
                key: N,
                value: N
              }, c(h[N] ?? N), 9, Pr))), 128))
            ], 40, _r), [
              [Ve, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? ue((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (N) => P.value = N,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...S[3] || (S[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, zr)), [
              [Ve, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? ue((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (N) => P.value = N,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(z, null, D(e.fields[P.field].options, (N) => (t(), a("option", {
                key: N,
                value: N
              }, c(N), 9, jr))), 128))
            ], 40, Ar)), [
              [Ve, P.value]
            ]) : ue((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (N) => P.value = N,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Or)), [
              [va, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(P) ? "group" : "rule"}`,
            onClick: (N) => w(G)
          }, " × ", 8, Lr)
        ]))), 128)),
        o("div", Vr, [
          F(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: y
          }, {
            default: L(() => [...S[4] || (S[4] = [
              R("Add rule", -1)
            ])]),
            _: 1
          }),
          b.value ? (t(), T(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: L(() => [...S[5] || (S[5] = [
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), a(z, { key: 1 }, [
            S[8] || (S[8] = o("span", { class: "flex-1" }, null, -1)),
            F(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: L(() => [...S[6] || (S[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            F(se, {
              type: "button",
              size: "sm",
              onClick: g
            }, {
              default: L(() => [...S[7] || (S[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : $("", !0)
        ])
      ], 2);
    };
  }
}), Tr = {
  key: 0,
  class: "font-mono text-xs"
}, Ir = {
  key: 1,
  class: "text-muted-foreground"
}, Fr = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, f$ = /* @__PURE__ */ A({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = k(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", Tr, c(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", Ir, "—")) : (t(), a("span", Fr, c(n.value.length) + " " + c(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Er = ["aria-checked", "aria-label", "title", "disabled"], Nr = ["value", "disabled"], Rr = ["value"], m$ = /* @__PURE__ */ A({
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
    const n = e, r = l, s = k(() => n.value === !0 || n.value === 1 || n.value === "1"), i = k(() => n.busy || n.disabled), u = k(
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
      class: j(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ce(d, ["stop"])
    }, [
      o("span", {
        class: j(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Er)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = ce(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), a(z, null, D(e.options, (y, M) => (t(), a("option", {
        key: M,
        value: M
      }, c(y), 9, Rr))), 128))
    ], 40, Nr));
  }
}), Ur = ["data-variant"], Hr = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", He = /* @__PURE__ */ A({
  __name: "PkBadge",
  props: {
    variant: { default: "default" },
    class: {}
  },
  setup(e) {
    const l = e, n = {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white dark:bg-destructive/60",
      outline: "text-foreground",
      success: "border-transparent bg-success text-success-foreground",
      warning: "border-transparent bg-warning text-warning-foreground",
      info: "border-transparent bg-info text-info-foreground"
    }, r = k(
      () => [Hr, n[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: j(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, Ur));
  }
}), Mt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function qr(e) {
  return e != null && e !== "";
}
function Kr(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function p$(e) {
  const l = k(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Kr(s)
    }))
  ), n = k(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = n.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), m = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return Mt[m] ?? "outline";
  }
  return { columns: l, byKey: n, badgeVariant: r };
}
const Gr = ["disabled", "aria-label", "aria-busy"], Wr = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Zr = ["d"], Jr = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Yr = ["disabled", "onClick"], Xr = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Qr = ["d"], ei = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, v$ = /* @__PURE__ */ A({
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
    const n = e, r = l, s = k(() => n.busy || n.disabled), i = k(() => String(n.value ?? "")), u = k(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function d(y) {
      return typeof y == "boolean" ? y ? "1" : "" : String(y ?? "");
    }
    function m(y) {
      const M = n.colors[d(y)] ?? n.defaultColor ?? "neutral";
      return Mt[M] ?? "outline";
    }
    function h(y) {
      return n.options[y] ?? y;
    }
    function p(y, M) {
      if (s.value || y === i.value) {
        M();
        return;
      }
      r("change", y), M();
    }
    return (y, M) => (t(), a("div", {
      onClick: M[0] || (M[0] = ce(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(He, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: L(() => [
          R(c(h(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(Te, {
        key: 0,
        align: "start"
      }, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            F(He, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                R(c(h(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", Wr, [
              o("path", {
                d: x(ie)("chevron-down")
              }, null, 8, Zr)
            ]))
          ], 8, Gr)
        ]),
        panel: L(({ close: w }) => [
          o("div", Jr, c(u.value), 1),
          (t(!0), a(z, null, D(e.options, (C, b) => (t(), a("button", {
            key: b,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (v) => p(String(b), w)
          }, [
            F(He, {
              variant: m(b),
              class: "capitalize"
            }, {
              default: L(() => [
                R(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(b) === i.value ? (t(), a("svg", Xr, [
              o("path", {
                d: x(ie)("check")
              }, null, 8, Qr)
            ])) : (t(), a("span", ei))
          ], 8, Yr))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), ti = { class: "flex items-center justify-end" }, ai = ["aria-label"], ni = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, li = ["d"], oi = ["href"], si = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ri = ["d"], ii = ["disabled", "onClick"], ui = ["d"], di = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, ci = ["disabled", "onClick"], fi = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mi = ["d"], g$ = /* @__PURE__ */ A({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = K(null), u = K(null), d = k(() => r.groups.flatMap((v) => v.actions)), m = k(() => d.value.filter((v) => !v.destructive)), h = k(() => d.value.filter((v) => v.destructive)), p = {
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
      const f = g.indexOf(document.activeElement), S = v.key === "ArrowDown" ? 1 : -1, B = (f + S + g.length) % g.length;
      g[B]?.focus();
    }
    return l({ openContextMenu: C }), (v, g) => (t(), a("div", ti, [
      M.value ? $("", !0) : (t(), T(Te, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), a("svg", ni, [
              o("path", {
                d: x(ie)("more-vertical")
              }, null, 8, li)
            ]))
          ], 8, ai)
        ]),
        panel: L(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: b
          }, [
            (t(!0), a(z, null, D(m.value, (f) => (t(), a(z, {
              key: f.key
            }, [
              f.link ? (t(), a("a", {
                key: 0,
                href: f.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", y(f)])
              }, [
                (t(), a("svg", si, [
                  o("path", {
                    d: x(ie)(f.icon)
                  }, null, 8, ri)
                ])),
                R(" " + c(f.label), 1)
              ], 10, oi)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", y(f)]),
                disabled: e.busy === f.key,
                onClick: (S) => w(f)
              }, [
                (t(), a("svg", {
                  class: j(["size-4 shrink-0", e.busy === f.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: x(ie)(f.icon)
                  }, null, 8, ui)
                ], 2)),
                R(" " + c(f.label), 1)
              ], 10, ii))
            ], 64))), 128)),
            h.value.length ? (t(), a("div", di, [
              (t(!0), a(z, null, D(h.value, (f) => (t(), a("button", {
                key: f.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === f.key,
                onClick: (S) => w(f)
              }, [
                (t(), a("svg", fi, [
                  o("path", {
                    d: x(ie)(f.icon ?? "trash")
                  }, null, 8, mi)
                ])),
                R(" " + c(f.label), 1)
              ], 8, ci))), 128))
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
}, Qe = 12, et = 20, pi = [0, 0.25, 0.5, 0.75, 1], Bt = "alxtexhpanel.appearance", Ce = {
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
}, ze = K({ ...Ce });
let Lt = !1;
const vi = "alxtexhpanel.appearance.vars";
function pt(e) {
  return e.theme === "dark";
}
const Vt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function gi(e) {
  const l = ft[e.primary] ?? ft.slate, n = mt[e.surface] ?? mt.neutral, r = n.chroma, s = n.hue, u = pt(e) ? {
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
    const n = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = n[l.fontSize] ?? Ce.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < Qe || l.fontSize > et) && (l.fontSize = Ce.fontSize), l;
  } catch {
    return { ...Ce };
  }
}
function h$(e) {
  const l = _t(), n = e ? { ...l, ...e } : l;
  if (ze.value = n, vt(n), e)
    try {
      localStorage.setItem(Bt, JSON.stringify(n));
    } catch {
    }
}
let aa = null;
function b$(e) {
  aa = e;
}
let na = {};
function hi(e) {
  if (na = e, !(typeof document > "u") && !_t().primaryChosen)
    for (const [l, n] of Object.entries(e))
      document.documentElement.style.setProperty(l, n);
}
function vt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, n = { ...gi(e), ...e.primaryChosen ? {} : na };
  l.classList.toggle("dark", pt(e));
  for (const [r, s] of Object.entries(n))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      vi,
      JSON.stringify({ dark: pt(e), theme: e.theme, vars: n })
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
  function n() {
    l({ ...Ce });
  }
  return fe(() => {
    Lt || (Lt = !0, ze.value = _t(), vt(ze.value));
  }), {
    appearance: k(() => ze.value),
    set: l,
    reset: n,
    PRIMARY_COLORS: ft,
    SURFACE_TINTS: mt,
    FONT_SIZE_MIN: Qe,
    FONT_SIZE_MAX: et,
    RADIUS_OPTIONS: pi
  };
}
const bi = { class: "flex items-center justify-between border-b px-4 py-3" }, xi = { class: "flex items-center gap-2" }, yi = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, ki = { class: "flex flex-col gap-2" }, $i = { class: "grid grid-cols-8 gap-2" }, wi = ["title", "aria-label", "aria-pressed", "onClick"], Ci = { class: "flex flex-col gap-2" }, Si = { class: "grid grid-cols-8 gap-2" }, Mi = ["title", "aria-label", "aria-pressed", "onClick"], Bi = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, _i = { class: "flex flex-col gap-2" }, Pi = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, zi = ["aria-pressed", "aria-label", "onClick"], Ai = { class: "text-sm font-semibold" }, ji = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Oi = ["onClick"], Li = { class: "flex flex-col gap-2" }, Vi = { class: "flex items-center justify-between" }, Di = { class: "text-muted-foreground text-xs tabular-nums" }, Ti = { class: "flex items-center gap-2" }, Ii = ["disabled"], Fi = ["min", "max", "value"], Ei = ["disabled"], x$ = /* @__PURE__ */ A({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = la(), d = K(!1), m = k(() => l.value.sidebarSide === "right"), h = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], y = [
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
    return (v, g) => (t(), a(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: g[0] || (g[0] = (f) => d.value = !0)
      }, [...g[7] || (g[7] = [
        ht('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Fe, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: L(() => [
            d.value ? (t(), a("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: g[1] || (g[1] = (f) => d.value = !1)
            })) : $("", !0)
          ]),
          _: 1
        }),
        F(Ae, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": m.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": m.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: L(() => [
            d.value ? (t(), a("aside", {
              key: 0,
              class: j(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", bi, [
                g[9] || (g[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", xi, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: g[2] || (g[2] = //@ts-ignore
                    (...f) => x(r) && x(r)(...f))
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
              o("div", yi, [
                o("section", ki, [
                  g[11] || (g[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", $i, [
                    (t(!0), a(z, null, D(x(s), (f, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ae({ background: f.value }),
                      title: f.label,
                      "aria-label": f.label,
                      "aria-pressed": x(l).primary === S,
                      onClick: (B) => x(n)({ primary: S })
                    }, [
                      x(l).primary === S ? (t(), a("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ae({ color: f.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...g[10] || (g[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : $("", !0)
                    ], 12, wi))), 128))
                  ])
                ]),
                o("section", Ci, [
                  g[13] || (g[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", Si, [
                    (t(!0), a(z, null, D(x(i), (f, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ae({ background: b(f.hue, f.chroma) }),
                      title: f.label,
                      "aria-label": f.label,
                      "aria-pressed": x(l).surface === S,
                      onClick: (B) => x(n)({ surface: S })
                    }, [
                      x(l).surface === S ? (t(), a("svg", Bi, [...g[12] || (g[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : $("", !0)
                    ], 12, Mi))), 128))
                  ])
                ]),
                o("section", _i, [
                  g[14] || (g[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", Pi, [
                    (t(!0), a(z, null, D(x(u), (f) => (t(), a("button", {
                      key: f,
                      type: "button",
                      class: j([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l).radius === f ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(l).radius === f,
                      "aria-label": `${f}rem radius`,
                      onClick: (S) => x(n)({ radius: f })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ae({ borderRadius: `${Math.min(f, 0.5)}rem` })
                      }, null, 4),
                      R(" " + c(f), 1)
                    ], 10, zi))), 128))
                  ])
                ]),
                (t(!0), a(z, null, D([
                  { label: "Color scheme", key: "theme", options: h },
                  { label: "Card style", key: "cardStyle", options: y },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: C }
                ], (f) => (t(), a("section", {
                  key: f.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", Ai, c(f.label), 1),
                  o("div", ji, [
                    (t(!0), a(z, null, D(f.options, (S) => (t(), a("button", {
                      key: String(S.value),
                      type: "button",
                      class: j([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l)[f.key] === S.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (B) => x(n)({ [f.key]: S.value })
                    }, c(S.label), 11, Oi))), 128))
                  ])
                ]))), 128)),
                o("section", Li, [
                  o("div", Vi, [
                    g[15] || (g[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Di, c(x(l).fontSize) + "px", 1)
                  ]),
                  o("div", Ti, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize <= x(Qe),
                      "aria-label": "Decrease font size",
                      onClick: g[4] || (g[4] = (f) => x(n)({ fontSize: x(l).fontSize - 1 }))
                    }, " − ", 8, Ii),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(Qe),
                      max: x(et),
                      value: x(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: g[5] || (g[5] = (f) => x(n)({
                        fontSize: Number(f.target.value)
                      }))
                    }, null, 40, Fi),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize >= x(et),
                      "aria-label": "Increase font size",
                      onClick: g[6] || (g[6] = (f) => x(n)({ fontSize: x(l).fontSize + 1 }))
                    }, " + ", 8, Ei)
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
}), Ni = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Ri = { class: "flex items-stretch" }, Ui = ["href", "aria-current"], Hi = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qi = ["d"], Ki = { class: "w-full truncate text-center" }, Gi = {
  key: 0,
  class: "flex-1"
}, Wi = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Zi = ["d"], Ji = { class: "w-full truncate text-center" }, st = 5, y$ = /* @__PURE__ */ A({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = k(
      () => n.items.length <= st ? n.items : n.items.slice(0, st - 1)
    ), i = k(() => n.items.length > st);
    function u(d) {
      return d === "/" ? n.current === "/" : n.current === d || n.current.startsWith(`${d}/`);
    }
    return (d, m) => (t(), a("nav", Ni, [
      o("ul", Ri, [
        (t(!0), a(z, null, D(s.value, (h) => (t(), a("li", {
          key: h.key,
          class: "flex-1"
        }, [
          o("a", {
            href: h.href,
            class: j([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(h.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(h.href) ? "page" : void 0
          }, [
            (t(), a("svg", Hi, [
              o("path", {
                d: x(ie)(h.icon)
              }, null, 8, qi)
            ])),
            o("span", Ki, c(h.title), 1)
          ], 10, Ui)
        ]))), 128)),
        i.value ? (t(), a("li", Gi, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (h) => r("more"))
          }, [
            (t(), a("svg", Wi, [
              o("path", {
                d: x(ie)("more-horizontal")
              }, null, 8, Zi)
            ])),
            o("span", Ji, c(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), Yi = ["value"], Xi = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", pe = /* @__PURE__ */ A({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    return (s, i) => (t(), a("input", {
      "data-slot": "input",
      value: n.modelValue ?? n.defaultValue,
      class: j([Xi, n.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, Yi));
  }
}), Qi = ["for"], be = /* @__PURE__ */ A({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, n) => (t(), a("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: j([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      q(l.$slots, "default")
    ], 10, Qi));
  }
}), k$ = /* @__PURE__ */ A({
  __name: "PkSpinner",
  props: {
    class: {}
  },
  setup(e) {
    return (l, n) => (t(), a("svg", {
      role: "status",
      "aria-label": "Loading",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      class: j(["size-4 animate-spin", l.$props.class])
    }, [...n[0] || (n[0] = [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      o("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), eu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, tu = ["id", "name", "value", "disabled", "maxlength"], au = ["data-active"], nu = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, $$ = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(!1), i = K(null);
    fe(() => {
      n.autofocus && i.value?.focus();
    });
    const u = k(
      () => Array.from({ length: n.length }, (h, p) => n.modelValue[p] ?? "")
    ), d = k(() => Math.min(n.modelValue.length, n.length - 1));
    function m(h) {
      const p = h.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (h, p) => (t(), a("div", eu, [
      o("input", {
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
        onFocus: p[0] || (p[0] = (y) => s.value = !0),
        onBlur: p[1] || (p[1] = (y) => s.value = !1)
      }, null, 40, tu),
      (t(!0), a(z, null, D(u.value, (y, M) => (t(), a("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": s.value && M === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(c(y) + " ", 1),
        s.value && M === d.value && y === "" ? (t(), a("div", nu, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, au))), 128))
    ]));
  }
}), lu = {
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
    return (l, n) => (t(), a("header", {
      class: j(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: j(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), a("p", lu, c(e.description), 1)) : $("", !0)
    ], 2));
  }
}), ou = /* @__PURE__ */ A({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: j(x(X)(x(iu)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), su = /* @__PURE__ */ A({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: j(x(X)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), ru = /* @__PURE__ */ A({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: j(x(X)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), iu = wt(
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
), uu = { class: "list-inside list-disc text-sm" }, w$ = /* @__PURE__ */ A({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, n = k(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(x(ou), { variant: "destructive" }, {
      default: L(() => [
        F(x(Ca), { class: "size-4" }),
        F(x(ru), null, {
          default: L(() => [
            R(c(e.title), 1)
          ]),
          _: 1
        }),
        F(x(su), null, {
          default: L(() => [
            o("ul", uu, [
              (t(!0), a(z, null, D(n.value, (i, u) => (t(), a("li", { key: u }, c(i), 1))), 128))
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
    const n = e, s = Kt(n, "modelValue", l, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, u) => ue((t(), a("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => ga(s) ? s.value = d : null),
      "data-slot": "input",
      class: j(
        x(X)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [xe, x(s)]
    ]);
  }
}), du = { class: "relative" }, cu = ["aria-label"], C$ = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const n = e, r = K(!1), s = ha("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), a("div", du, [
      F(x(oa), le({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(X)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: j(
          x(X)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), T(x(Sa), {
          key: 0,
          class: "size-4"
        })) : (t(), T(x(Ma), {
          key: 1,
          class: "size-4"
        }))
      ], 10, cu)
    ]));
  }
});
function S$(e, l) {
  const n = Math.max(1, Math.floor(l));
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
const sa = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", fu = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", mu = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function pu(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function vu(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function gu(e) {
  const l = URL.createObjectURL(e);
  try {
    const n = await hu(l), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
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
    URL.revokeObjectURL(l);
  }
}
function hu(e) {
  return new Promise((l, n) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function bu(e) {
  if (pu(e))
    throw new Error(mu);
  if (!vu(e))
    throw new Error(sa);
  if (!await gu(e))
    throw new Error(fu);
}
const xu = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(x(Gt), le({ "data-slot": "sheet" }, x(s)), {
      default: L((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), M$ = /* @__PURE__ */ A({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ee), le({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yu = /* @__PURE__ */ A({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(yt), le({
      "data-slot": "sheet-overlay",
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, x(n)), {
      default: L(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ku = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class", "side"), i = me(s, r);
    return (u, d) => (t(), T(x(kt), null, {
      default: L(() => [
        F(yu),
        F(x($t), le({
          "data-slot": "sheet-content",
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...u.$attrs, ...x(i) }), {
          default: L(() => [
            q(u.$slots, "default"),
            F(x(Ee), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                F(x(xt), { class: "size-4" }),
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
}), $u = /* @__PURE__ */ A({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(Wt), le({
      "data-slot": "sheet-description",
      class: x(X)("text-muted-foreground text-sm", l.class)
    }, x(n)), {
      default: L(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B$ = /* @__PURE__ */ A({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: j(x(X)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), wu = /* @__PURE__ */ A({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: j(x(X)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Cu = /* @__PURE__ */ A({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(Zt), le({
      "data-slot": "sheet-title",
      class: x(X)("text-foreground font-semibold", l.class)
    }, x(n)), {
      default: L(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _$ = /* @__PURE__ */ A({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Jt), le({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dt = "sidebar_state", Su = 3600 * 24 * 7, Mu = "16rem", Bu = "18rem", _u = "3rem", Pu = "b", [nt, zu] = Ea("Sidebar"), Au = { class: "flex h-full w-full flex-col" }, ju = ["data-state", "data-collapsible", "data-variant", "data-side"], Ou = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, P$ = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = nt();
    return (u, d) => e.collapsible === "none" ? (t(), a("div", le({
      key: 0,
      "data-slot": "sidebar",
      class: x(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      q(u.$slots, "default")
    ], 16)) : x(n) ? (t(), T(x(xu), le({
      key: 1,
      open: x(s)
    }, u.$attrs, { "onUpdate:open": x(i) }), {
      default: L(() => [
        F(x(ku), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ae({
            "--sidebar-width": x(Bu)
          })
        }, {
          default: L(() => [
            F(wu, { class: "sr-only" }, {
              default: L(() => [
                F(Cu, null, {
                  default: L(() => [...d[0] || (d[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                F($u, null, {
                  default: L(() => [...d[1] || (d[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Au, [
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
      "data-state": x(r),
      "data-collapsible": x(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: j(
          x(X)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", le({
        class: x(X)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        o("div", Ou, [
          q(u.$slots, "default")
        ])
      ], 16)
    ], 8, ju));
  }
}), z$ = /* @__PURE__ */ A({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: j(
        x(X)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), A$ = /* @__PURE__ */ A({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: j(x(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), j$ = /* @__PURE__ */ A({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: j(x(X)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), O$ = /* @__PURE__ */ A({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ne), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        x(X)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), L$ = /* @__PURE__ */ A({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: j(x(X)("w-full text-sm", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), V$ = /* @__PURE__ */ A({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ne), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        x(X)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), D$ = /* @__PURE__ */ A({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: j(x(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), T$ = /* @__PURE__ */ A({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(oa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: j(x(X)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        q(n.$slots, "default")
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
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: j(
        x(X)(
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
      q(n.$slots, "default")
    ], 2));
  }
}), F$ = /* @__PURE__ */ A({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: j(x(X)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), E$ = /* @__PURE__ */ A({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ne), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: j(
        x(X)(
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
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), N$ = /* @__PURE__ */ A({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: j(
        x(X)(
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
      q(n.$slots, "default")
    ], 2));
  }
}), Lu = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(x(Na), le({ "data-slot": "tooltip" }, x(s)), {
      default: L((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Vu = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(Ra), null, {
      default: L(() => [
        F(x(Ua), le({ "data-slot": "tooltip-content" }, { ...x(i), ...u.$attrs }, {
          class: x(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: L(() => [
            q(u.$slots, "default"),
            F(x(Ha), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), R$ = /* @__PURE__ */ A({
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
    return (n, r) => (t(), T(x(Yt), ye(Pe(l)), {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Du = /* @__PURE__ */ A({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(qa), le({ "data-slot": "tooltip-trigger" }, l), {
      default: L(() => [
        q(n.$slots, "default")
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
    return (n, r) => (t(), T(x(Ne), le({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(X)(x(Iu)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), U$ = /* @__PURE__ */ A({
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
    const l = e, { isMobile: n, state: r } = nt(), s = re(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), T(x(Lu), { key: 1 }, {
      default: L(() => [
        F(x(Du), { "as-child": "" }, {
          default: L(() => [
            F(Tt, ye(Pe({ ...x(s), ...i.$attrs })), {
              default: L(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        F(x(Vu), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(n)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), a(z, { key: 0 }, [
              R(c(e.tooltip), 1)
            ], 64)) : (t(), T(he(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(Tt, ye(le({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: L(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H$ = /* @__PURE__ */ A({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: j(x(X)("group/menu-item relative", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), It = "animate-pulse rounded-md bg-primary/10", q$ = /* @__PURE__ */ A({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = k(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: j(x(X)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: j(x(X)(It, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: j(x(X)(It, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ae({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), K$ = /* @__PURE__ */ A({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: j(
        x(X)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), G$ = /* @__PURE__ */ A({
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
    return (n, r) => (t(), T(x(Ne), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: j(
        x(X)(
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
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), W$ = /* @__PURE__ */ A({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: j(x(X)("group/menu-sub-item relative", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Z$ = /* @__PURE__ */ A({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Va?.cookie.includes(`${Dt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = Oa("(max-width: 767px)"), i = K(!1), u = Kt(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function d(y) {
      u.value = y, document.cookie = `${Dt}=${u.value}; path=/; max-age=${Su}`;
    }
    function m(y) {
      i.value = y;
    }
    function h() {
      return s.value ? m(!i.value) : d(!u.value);
    }
    La("keydown", (y) => {
      y.key === Pu && (y.metaKey || y.ctrlKey) && (y.preventDefault(), h());
    });
    const p = k(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return zu({
      state: p,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: h
    }), (y, M) => (t(), T(x(Yt), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", le({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(Mu),
            "--sidebar-width-icon": x(_u)
          },
          class: x(X)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, y.$attrs), [
          q(y.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), J$ = /* @__PURE__ */ A({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: n } = nt();
    return (r, s) => (t(), a("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: j(
        x(X)(
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
      (...i) => x(n) && x(n)(...i))
    }, [
      q(r.$slots, "default")
    ], 2));
  }
}), Tu = /* @__PURE__ */ A({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(Ka), le({ "data-slot": "separator" }, x(n), {
      class: x(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), Y$ = /* @__PURE__ */ A({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Tu), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: j(x(X)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), X$ = /* @__PURE__ */ A({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, toggleSidebar: s } = nt();
    return (i, u) => (t(), T(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: j(x(X)("h-7 w-7", l.class)),
      onClick: x(s)
    }, {
      default: L(() => [
        x(n) || x(r) === "collapsed" ? (t(), T(x(Ba), { key: 0 })) : (t(), T(x(_a), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Iu = wt(
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
), Q$ = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(x(Ga), le({ "data-slot": "dropdown-menu" }, x(s)), {
      default: L((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Fu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, ew = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(Wa), le({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        o("span", Fu, [
          F(x(Xt), null, {
            default: L(() => [
              q(u.$slots, "indicator-icon", {}, () => [
                F(x(Ht), { class: "size-4" })
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
}), tw = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(Za), null, {
      default: L(() => [
        F(x(Ja), le({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: L(() => [
            q(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), aw = /* @__PURE__ */ A({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ya), le({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nw = /* @__PURE__ */ A({
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
    const l = e, n = re(l, "inset", "variant", "class"), r = ke(n);
    return (s, i) => (t(), T(x(Xa), le({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: L(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), lw = /* @__PURE__ */ A({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, n = re(l, "class", "inset"), r = ke(n);
    return (s, i) => (t(), T(x(Qa), le({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), ow = /* @__PURE__ */ A({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), T(x(en), le({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: L(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eu = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, sw = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(tn), le({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        o("span", Eu, [
          F(x(Xt), null, {
            default: L(() => [
              q(u.$slots, "indicator-icon", {}, () => [
                F(x(Pa), { class: "size-2 fill-current" })
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
}), rw = /* @__PURE__ */ A({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(an), le({ "data-slot": "dropdown-menu-separator" }, x(n), {
      class: x(X)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), iw = /* @__PURE__ */ A({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: j(x(X)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), uw = /* @__PURE__ */ A({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), T(x(nn), le({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: L((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), dw = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(ln), le({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(X)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: L(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cw = /* @__PURE__ */ A({
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
    const l = e, n = re(l, "class", "inset"), r = ke(n);
    return (s, i) => (t(), T(x(on), le({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        q(s.$slots, "default"),
        F(x(qt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), fw = /* @__PURE__ */ A({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = ke(e);
    return (r, s) => (t(), T(x(sn), le({ "data-slot": "dropdown-menu-trigger" }, x(n)), {
      default: L(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mw = /* @__PURE__ */ A({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(rn), {
      "data-slot": "avatar",
      class: j(x(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pw = /* @__PURE__ */ A({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(un), le({ "data-slot": "avatar-fallback" }, x(n), {
      class: x(X)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vw = /* @__PURE__ */ A({
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
    return (n, r) => (t(), T(x(dn), le({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gw = /* @__PURE__ */ A({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: j(l.class)
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), hw = /* @__PURE__ */ A({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: j(x(X)("flex size-9 items-center justify-center", l.class))
    }, [
      q(n.$slots, "default", {}, () => [
        F(x(za), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), bw = /* @__PURE__ */ A({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: j(x(X)("inline-flex items-center gap-1.5", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), xw = /* @__PURE__ */ A({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ne), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: j(x(X)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), yw = /* @__PURE__ */ A({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: j(
        x(X)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), kw = /* @__PURE__ */ A({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: j(x(X)("text-foreground font-normal", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), $w = /* @__PURE__ */ A({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: j(x(X)("[&>svg]:size-3.5", l.class))
    }, [
      q(n.$slots, "default", {}, () => [
        F(x(qt))
      ])
    ], 2));
  }
}), Nu = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Ru = /* @__PURE__ */ A({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), a("div", Nu, [
      F(x(cn), le({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), ww = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class", "viewport"), i = me(s, r);
    return (u, d) => (t(), T(x(fn), le({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: L((m) => [
        q(u.$slots, "default", ye(Pe(m))),
        e.viewport ? (t(), T(Ru, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), Cw = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(mn), le({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(X)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: L(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sw = /* @__PURE__ */ A({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), T(x(pn), le({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(X)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        l.class
      )
    }), {
      default: L(() => [...i[0] || (i[0] = [
        o("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), Mw = /* @__PURE__ */ A({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(vn), le({ "data-slot": "navigation-menu-item" }, x(n), {
      class: x(X)("relative", l.class)
    }), {
      default: L(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bw = /* @__PURE__ */ A({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(gn), le({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(X)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _w = /* @__PURE__ */ A({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), T(x(hn), le({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(X)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pw = /* @__PURE__ */ A({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), T(x(bn), le({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(X)(x(Uu)(), "group", l.class)
    }), {
      default: L(() => [
        q(s.$slots, "default"),
        F(x(Aa), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uu = wt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), zw = /* @__PURE__ */ A({
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
    return (i, u) => (t(), T(x(Gt), le({ "data-slot": "dialog" }, x(s)), {
      default: L((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Aw = /* @__PURE__ */ A({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(Ee), le({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hu = /* @__PURE__ */ A({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(yt), le({ "data-slot": "dialog-overlay" }, x(n), {
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: L(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jw = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(kt), null, {
      default: L(() => [
        F(Hu),
        F(x($t), le({ "data-slot": "dialog-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: L(() => [
            q(u.$slots, "default"),
            e.showCloseButton ? (t(), T(x(Ee), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                F(x(xt)),
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
}), Ow = /* @__PURE__ */ A({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), T(x(Wt), le({ "data-slot": "dialog-description" }, x(r), {
      class: x(X)("text-muted-foreground text-sm", l.class)
    }), {
      default: L(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lw = /* @__PURE__ */ A({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: j(x(X)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      q(n.$slots, "default"),
      e.showCloseButton ? (t(), T(x(Ee), {
        key: 0,
        "as-child": ""
      }, {
        default: L(() => [
          F(se, { variant: "outline" }, {
            default: L(() => [...r[0] || (r[0] = [
              R(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : $("", !0)
    ], 2));
  }
}), Vw = /* @__PURE__ */ A({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: j(x(X)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Dw = /* @__PURE__ */ A({
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), T(x(kt), null, {
      default: L(() => [
        F(x(yt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            F(x($t), le({
              class: x(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...u.$attrs, ...x(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (m) => {
                const h = m.detail.originalEvent, p = h.target;
                (h.offsetX > p.clientWidth || h.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: L(() => [
                q(u.$slots, "default"),
                F(x(Ee), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    F(x(xt), { class: "w-4 h-4" }),
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
}), Tw = /* @__PURE__ */ A({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), T(x(Zt), le({ "data-slot": "dialog-title" }, x(r), {
      class: x(X)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
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
    return (n, r) => (t(), T(x(Jt), le({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fw = /* @__PURE__ */ A({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), T(x(xn), le({ "data-slot": "label" }, x(n), {
      class: x(X)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: L(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ew = /* @__PURE__ */ A({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), T(x(ja), {
      role: "status",
      "aria-label": "Loading",
      class: j(x(X)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), Nw = /* @__PURE__ */ A({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: j(
        x(X)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Rw = /* @__PURE__ */ A({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: j(x(X)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Uw = /* @__PURE__ */ A({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: j(x(X)("px-6", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Hw = /* @__PURE__ */ A({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: j(x(X)("text-muted-foreground text-sm", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), qw = /* @__PURE__ */ A({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: j(x(X)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Kw = /* @__PURE__ */ A({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: j(
        x(X)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Gw = /* @__PURE__ */ A({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: j(x(X)("leading-none font-semibold", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), qu = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Ku = { class: "flex items-start gap-3" }, Gu = { class: "min-w-0 flex-1" }, Wu = { class: "text-foreground text-sm font-medium" }, Zu = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Ww = /* @__PURE__ */ A({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = K(!1), u = K(null), d = K(0);
    ba((h) => (console.error(`[PkBoundary] ${r.label} failed to render`, h), i.value = !0, u.value = h instanceof Error ? h.message : null, s("error", h), !1));
    function m() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: m }), (h, p) => (t(), a("div", {
      class: j(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", qu, [
        o("div", Ku, [
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
          o("div", Gu, [
            o("p", Wu, c(e.label) + " could not be displayed ", 1),
            u.value ? (t(), a("p", Zu, c(u.value), 1)) : $("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: m
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
      ])) : i.value ? $("", !0) : q(h.$slots, "default", { key: d.value })
    ], 2));
  }
}), Ju = { class: "bg-card rounded-lg border" }, Yu = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Xu = { class: "min-w-0" }, Qu = {
  key: 0,
  class: "truncate text-sm font-medium"
}, ed = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, td = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, ad = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, Zw = /* @__PURE__ */ A({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, n) => (t(), a("section", Ju, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), a("header", Yu, [
        o("div", Xu, [
          q(l.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", Qu, c(e.title), 1)) : $("", !0),
            e.description ? (t(), a("p", ed, c(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), a("div", td, [
          q(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: j(e.padded ? "p-4" : "")
      }, [
        q(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", ad, [
        q(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), ra = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function Jw() {
  const e = Qt(), l = k(() => e.props.panel?.pageFooter === !0);
  return ct(ra, l), l;
}
const nd = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, ld = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, od = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, Yw = /* @__PURE__ */ A({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, n = Qt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = k(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), u = Xe(ra, k(() => !1)), d = k(() => !l.host && x(u) === !0);
    return (m, h) => d.value ? $("", !0) : (t(), a("footer", nd, [
      o("div", ld, [
        o("p", null, "© " + c(x(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), a("nav", od, [
          (t(!0), a(z, null, D(i.value, (p) => (t(), T(x($n), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              R(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), sd = { class: "flex shrink-0 flex-col items-center" }, rd = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, Xw = /* @__PURE__ */ A({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, n = k(() => l.kind === "laptop"), r = k(
      () => n.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = k(() => n.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, u) => (t(), a("div", sd, [
      o("div", {
        class: j(["relative box-content shadow-2xl", r.value]),
        style: ae({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", rd)) : $("", !0),
        o("div", {
          class: j(["size-full overflow-hidden bg-white", s.value])
        }, [
          q(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(z, { key: 0 }, [
        o("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: ae({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        o("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: ae({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : $("", !0)
    ]));
  }
}), id = { class: "flex flex-col gap-2" }, ud = { class: "min-w-0 flex-1" }, dd = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, cd = ["disabled", "aria-label", "onClick"], fd = ["disabled", "aria-label", "onClick"], md = ["disabled", "title", "aria-label", "onClick"], pd = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, vd = ["disabled"], Qw = /* @__PURE__ */ A({
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
    const n = e, r = l;
    let s = 0;
    const i = K(u(n.modelValue));
    function u(g) {
      return Array.isArray(g) ? g.map((f) => ({ uid: s++, data: { ...f } })) : [];
    }
    de(
      () => n.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(d()) && (i.value = u(g));
      }
    );
    function d() {
      const g = [];
      for (const f of i.value) {
        const S = {};
        let B = !1;
        for (const P of n.children) {
          const G = f.data[P.key] ?? null;
          S[P.key] = G, G !== null && G !== "" && !(Array.isArray(G) && G.length === 0) && (B = !0);
        }
        B && g.push(S);
      }
      return g.length ? g : null;
    }
    function m() {
      r("update:modelValue", d());
    }
    const h = k(() => n.maxItems !== null && i.value.length >= n.maxItems), p = k(() => n.minItems !== null && i.value.length <= n.minItems), y = k(() => n.children.length === 1);
    function M() {
      if (h.value || n.disabled)
        return;
      const g = {};
      for (const f of n.children)
        g[f.key] = null;
      i.value.push({ uid: s++, data: g });
    }
    function w(g) {
      i.value = i.value.filter((f) => f.uid !== g), m();
    }
    function C(g, f) {
      const S = g + f;
      if (S < 0 || S >= i.value.length)
        return;
      const B = [...i.value], [P] = B.splice(g, 1);
      B.splice(S, 0, P), i.value = B, m();
    }
    function b(g, f, S) {
      const B = i.value.find((P) => P.uid === g);
      B && (B.data[f] = S, m());
    }
    function v(g, f) {
      return n.errors[`${n.fieldKey}.${g}.${f}`];
    }
    return (g, f) => (t(), a("div", id, [
      (t(!0), a(z, null, D(i.value, (S, B) => (t(), a("div", {
        key: S.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: j(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", y.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, c(B + 1), 3),
        o("div", ud, [
          y.value ? (t(), T(Ge, {
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
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", dd, [
            (t(!0), a(z, null, D(e.children, (P) => (t(), T(Ge, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: S.data[P.key],
              error: v(B, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (G) => b(S.uid, P.key, G)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: j(["flex shrink-0 items-center gap-0.5", y.value ? "mt-1" : "mt-0"])
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
          ])], 8, cd),
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
          ])], 8, fd),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
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
          ])], 8, md)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", pd, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
      h.value ? $("", !0) : (t(), a("button", {
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
        R(" Add " + c(e.itemLabel.toLowerCase()), 1)
      ], 8, vd))
    ]));
  }
}), gd = { class: "space-y-1" }, hd = { class: "flex items-center gap-1" }, bd = ["disabled", "title", "aria-label", "onClick"], xd = ["aria-pressed"], yd = ["id", "value", "rows", "disabled"], kd = ["innerHTML"], $d = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(!1), i = k(() => n.modelValue ?? "");
    function u(y) {
      return y.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = k(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(y, M = y) {
      const w = document.getElementById(n.id ?? "");
      if (w === null)
        return;
      const C = w.selectionStart, b = w.selectionEnd, v = i.value.slice(C, b);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${y}${v}${M}${i.value.slice(b)}`
      );
    }
    const h = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = k(
      () => (n.toolbar ?? Object.keys(h)).filter((y) => y in h)
    );
    return (y, M) => (t(), a("div", gd, [
      o("div", hd, [
        (t(!0), a(z, null, D(p.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => h[w].run()
        }, c(h[w].label), 9, bd))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: M[0] || (M[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, xd)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, kd)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, yd))
    ]));
  }
}), wd = { class: "space-y-1" }, Cd = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Sd = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Md = ["id", "value", "rows", "disabled"], Bd = { class: "text-muted-foreground text-xs" }, _d = {
  key: 0,
  class: "text-destructive text-xs"
}, Pd = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(null), i = K(!0), u = k(() => n.modelValue ?? ""), d = k(() => Math.max(u.value.split(`
`).length, 1)), m = k(() => {
      if (n.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
      } catch (y) {
        return y instanceof Error ? y.message : "Not valid JSON.";
      }
    });
    function h(y) {
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
      const M = y.target, w = M.selectionStart, C = M.selectionEnd, b = `${u.value.slice(0, w)}    ${u.value.slice(C)}`;
      r("update:modelValue", b), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = w + 4;
      });
    }
    return (y, M) => (t(), a("div", wd, [
      o("div", Cd, [
        o("div", Sd, [
          (t(!0), a(z, null, D(d.value, (w) => (t(), a("div", { key: w }, c(w), 1))), 128))
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
        }, null, 40, Md)
      ]),
      o("p", Bd, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", _d, c(m.value), 1)) : $("", !0)
    ]));
  }
}), zd = { class: "space-y-3" }, Ad = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, jd = { class: "text-sm font-medium" }, Od = { class: "flex items-center gap-1" }, Ld = ["disabled", "onClick"], Vd = ["disabled", "onClick"], Dd = ["disabled", "onClick"], Td = { class: "space-y-3 p-3" }, Id = { class: "flex flex-wrap items-center gap-2" }, Fd = ["disabled", "onClick"], Ed = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, e4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = k(() => n.modelValue ?? []), i = k(
      () => Object.fromEntries(n.blocks.map((M) => [M.type, M]))
    ), u = k(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function d(M) {
      r("update:modelValue", M);
    }
    function m(M) {
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
    function y(M, w, C) {
      d(
        s.value.map(
          (b, v) => v === M ? { ...b, data: { ...b.data, [w]: C } } : b
        )
      );
    }
    return (M, w) => (t(), a("div", zd, [
      (t(!0), a(z, null, D(s.value, (C, b) => (t(), a("div", {
        key: `${C.type}-${b}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Ad, [
          o("span", jd, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", Od, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || b === 0,
              "aria-label": "Move up",
              onClick: (v) => p(b, -1)
            }, " ↑ ", 8, Ld),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || b === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (v) => p(b, 1)
            }, " ↓ ", 8, Vd),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (v) => h(b)
            }, " Remove ", 8, Dd)
          ])
        ]),
        o("div", Td, [
          (t(!0), a(z, null, D(i.value[C.type]?.fields ?? [], (v) => (t(), T(Ge, {
            key: v.key,
            field: v,
            value: C.data[v.key] ?? null,
            error: e.errors?.[v.key],
            processing: e.disabled,
            onChange: (g) => y(b, v.key, g)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Id, [
        (t(!0), a(z, null, D(e.blocks, (C) => (t(), a("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (b) => m(C.type)
        }, " + " + c(C.label), 9, Fd))), 128)),
        u.value ? (t(), a("span", Ed, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), Nd = ["name", "value", "checked", "disabled", "onChange"], Rd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ud = /* @__PURE__ */ A({
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
    const n = e, r = l;
    function s(i) {
      return n.modelValue != null && i.value == n.modelValue;
    }
    return (i, u) => (t(), a("div", {
      role: "radiogroup",
      class: j(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(z, null, D(e.options, (d) => (t(), a("label", {
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
          onChange: (m) => r("update:modelValue", d.value)
        }, null, 40, Nd),
        R(" " + c(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Rd, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), Hd = ["value", "checked", "disabled", "onChange"], qd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Kd = /* @__PURE__ */ A({
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
    const n = e, r = l, s = k(
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
    const d = k(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, h) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ae(d.value)
    }, [
      (t(!0), a(z, null, D(e.options, (p) => (t(), a("label", {
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
        }, null, 40, Hd),
        R(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", qd, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), Gd = { class: "flex flex-col gap-1.5" }, Wd = ["aria-label", "onClick"], Zd = ["placeholder", "disabled", "maxlength"], Jd = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Yd = ["onClick"], Xd = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Qd = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(""), i = k(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), u = k(() => i.value.length >= (n.field.max ?? 25)), d = k(
      () => (n.field.suggestions ?? []).filter(
        (y) => !i.value.some((M) => M.toLowerCase() === y.toLowerCase())
      )
    );
    function m(y) {
      const M = y.trim().slice(0, n.field.maxLength ?? 40);
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
    function h(y) {
      r(
        "update:modelValue",
        i.value.filter((M, w) => w !== y)
      );
    }
    function p(y) {
      if (y.key === "Enter" || y.key === ",") {
        y.preventDefault(), m(s.value);
        return;
      }
      y.key === "Backspace" && s.value === "" && i.value.length > 0 && h(i.value.length - 1);
    }
    return (y, M) => (t(), a("div", Gd, [
      o("div", {
        class: j(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(z, null, D(i.value, (w, C) => (t(), a("span", {
          key: `${w}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(c(w) + " ", 1),
          e.disabled ? $("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (b) => h(C)
          }, " × ", 8, Wd))
        ]))), 128)),
        ue(o("input", {
          "onUpdate:modelValue": M[0] || (M[0] = (w) => s.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: M[1] || (M[1] = (w) => m(s.value))
        }, null, 40, Zd), [
          [xe, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), a("div", Jd, [
        M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(z, null, D(d.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => m(w)
        }, c(w), 9, Yd))), 128))
      ])) : $("", !0),
      u.value ? (t(), a("p", Xd, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), ec = 4.5, Ft = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ia(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function rt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function gt(e) {
  const [l, n, r] = ia(e);
  return 0.2126 * rt(l) + 0.7152 * rt(n) + 0.0722 * rt(r);
}
function ua(e, l) {
  const n = gt(e), r = gt(l);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function tc(e, l, n) {
  if (!Ft.test(e) || !Ft.test(l))
    return e;
  const r = gt(l) > 0.5, s = r ? 0 : 255;
  let i = ia(e);
  for (let u = 0; u <= 20; u++) {
    const d = ac(i);
    if (ua(d, l) >= n)
      return d;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function ac(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const nc = { class: "flex flex-col gap-2" }, lc = { class: "flex items-center gap-2" }, oc = {
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
}, sc = ["value", "disabled", "aria-label"], rc = ["value", "disabled", "placeholder"], ic = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, uc = ["aria-label", "title", "onClick"], dc = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, cc = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = k(() => typeof n.modelValue == "string" ? n.modelValue : ""), u = k(() => s.test(i.value));
    function d(w) {
      const C = w.trim();
      if (C === "")
        return "";
      const b = C.startsWith("#") ? C : `#${C}`;
      return s.test(b) ? b.toLowerCase() : C;
    }
    function m(w) {
      r("update:modelValue", d(w.target.value));
    }
    const h = k(() => !u.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : ua(i.value, n.field.contrastBackground)), p = k(() => n.field.contrastMinRatio ?? ec), y = k(() => h.value !== null && h.value < p.value);
    function M() {
      n.field.contrastBackground && r(
        "update:modelValue",
        tc(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (w, C) => (t(), a("div", nc, [
      o("div", lc, [
        u.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (b) => r("update:modelValue", b.target.value))
        }, null, 40, sc)) : (t(), a("span", oc)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, rc)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", ic, [
        (t(!0), a(z, null, D(e.field.presets, (b) => (t(), a("button", {
          key: b,
          type: "button",
          class: j(["size-6 rounded border", i.value.toLowerCase() === b.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ae({ backgroundColor: b }),
          "aria-label": b,
          title: b,
          onClick: (v) => r("update:modelValue", b.toLowerCase())
        }, null, 14, uc))), 128))
      ])) : $("", !0),
      y.value ? (t(), a("p", dc, [
        o("span", null, " This fails contrast at " + c(h.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), fc = { class: "flex items-center gap-3" }, mc = ["min", "max", "step", "value", "disabled", "aria-label"], pc = { class: "flex shrink-0 items-center gap-1" }, vc = ["min", "max", "step", "value", "disabled"], gc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, hc = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = k(() => n.field.min ?? 0), i = k(() => n.field.max ?? 100), u = k(() => n.field.step ?? 1), d = k(() => {
      const p = Number(n.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), m = k(
      () => n.modelValue === null || n.modelValue === void 0 || n.modelValue === ""
    );
    function h(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const y = Number(p);
      r("update:modelValue", Number.isFinite(y) ? y : null);
    }
    return (p, y) => (t(), a("div", fc, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: y[0] || (y[0] = (M) => h(M.target.value))
      }, null, 40, mc),
      o("div", pc, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: m.value ? "" : d.value,
          disabled: e.disabled,
          onInput: y[1] || (y[1] = (M) => h(M.target.value))
        }, null, 40, vc),
        e.field.unit ? (t(), a("span", gc, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), Je = /* @__PURE__ */ new Map();
function it(e, l) {
  Je.set(e, l);
}
function bc(e) {
  return Je.get(e);
}
function t4(e) {
  return Je.has(e);
}
function xc() {
  return [...Je.keys()].sort();
}
function a4() {
  Je.clear();
}
const yc = ["name", "value", "checked", "disabled", "onChange"], kc = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, $c = { class: "whitespace-nowrap" }, wc = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Cc = ["name", "value", "checked", "disabled", "onChange"], Sc = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Mc = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Bc = { class: "text-center text-xs font-medium" }, _c = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Pc = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, zc = /* @__PURE__ */ A({
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
    const n = e, r = l, s = k(
      () => n.field.preview ? bc(n.field.preview) : void 0
    ), i = k(() => !!n.field.preview && !s.value), u = k(() => n.field.layout === "segmented"), d = k(() => {
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
      class: j(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(z, null, D(e.options, (y) => (t(), a("label", {
        key: String(y.value),
        class: j(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(y) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: y.value,
          checked: m(y),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", y.value)
        }, null, 40, yc),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", kc, [
          (t(), T(he(s.value), {
            value: y.value,
            label: y.label,
            selected: m(y)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", $c, c(y.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", wc, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: j(["grid gap-3", d.value])
    }, [
      (t(!0), a(z, null, D(e.options, (y) => (t(), a("label", {
        key: String(y.value),
        class: j(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(y) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: y.value,
          checked: m(y),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", y.value)
        }, null, 40, Cc),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Sc, [
          s.value ? (t(), T(he(s.value), {
            key: 0,
            value: y.value,
            label: y.label,
            selected: m(y)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", Mc, " no preview ")) : $("", !0)
        ]),
        o("span", Bc, c(y.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", _c, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", Pc, [
        p[2] || (p[2] = R(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        R(". Registered: " + c(x(xc)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), Ac = {
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
    return (l, n) => (t(), a("span", Ac, [
      o("span", {
        class: "block size-full",
        style: ae({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Oc = { class: "flex flex-col items-center gap-1 text-center" }, Lc = {
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
    const l = e, n = k(() => l.mono ? "#000000" : l.accent), r = k(() => {
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
    return (s, i) => (t(), a("div", Oc, [
      o("div", {
        class: j(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ae({ borderColor: n.value, color: n.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", Lc, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), Vc = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Dc = { class: "flex items-center gap-3" }, Tc = ["src"], Ic = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Fc = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Ec = {
  key: 0,
  class: "text-right text-sm"
}, Nc = { class: "text-neutral-500" }, Rc = { class: "tabular-nums" }, Uc = { key: 1 }, Hc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, qc = { class: "mt-2 font-medium" }, Kc = { key: 2 }, Gc = { class: "w-full text-sm" }, Wc = { class: "w-full py-3 pr-2" }, Zc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Jc = { key: 0 }, Yc = ["colspan"], Xc = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Qc = { class: "w-64 text-sm" }, ef = { class: "tabular-nums" }, tf = {
  key: 3,
  class: "py-2"
}, af = { key: 4 }, nf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, lf = { class: "mt-2 flex flex-col gap-1 text-sm" }, of = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, sf = { key: 0 }, rf = {
  key: 1,
  class: "mt-1"
}, uf = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, df = /* @__PURE__ */ A({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function n() {
      return l.document.branding.mono ? "#000000" : l.document.branding.accent;
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
    return (m, h) => (t(), a("article", Vc, [
      o("div", Dc, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Tc)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ae({ color: n() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), a(z, null, D(e.document.blocks, (p, y) => (t(), a(z, { key: y }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ae({ borderColor: n() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ae({ color: n() })
            }, c(p.title), 5),
            p.subtitle ? (t(), a("p", Ic, c(p.subtitle), 1)) : $("", !0),
            p.reference ? (t(), a("p", Fc, c(p.reference), 1)) : $("", !0)
          ]),
          r(p).length ? (t(), a("dl", Ec, [
            (t(!0), a(z, null, D(r(p), (M, w) => (t(), a("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Nc, c(M.label), 1),
              o("dd", Rc, c(M.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", Uc, [
          o("h2", Hc, c(p.heading), 1),
          o("p", qc, c(p.name), 1),
          (t(!0), a(z, null, D(u(p.lines), (M, w) => (t(), a("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, c(M), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", Kc, [
          o("table", Gc, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ae({ borderColor: n() })
              }, [
                (t(!0), a(z, null, D(u(p.columns), (M, w) => (t(), a("th", {
                  key: w,
                  class: j(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(M), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(z, null, D(s(p), (M, w) => (t(), a("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                o("td", Wc, [
                  o("p", null, c(M.description), 1),
                  M.detail ? (t(), a("p", Zc, c(M.detail), 1)) : $("", !0)
                ]),
                (t(!0), a(z, null, D(M.cells, (C, b) => (t(), a("td", {
                  key: b,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Jc, [
                o("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, Yc)
              ])) : $("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Xc, [
            o("dl", Qc, [
              (t(!0), a(z, null, D(i(p), (M, w) => (t(), a("div", {
                key: w,
                class: j([
                  "flex justify-between py-1",
                  M.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ae(M.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                o("dt", {
                  class: j(M.strong ? "" : "text-neutral-600")
                }, c(M.label), 3),
                o("dd", ef, c(M.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : p.type === "code" ? (t(), a("section", tf, [
          F(da, {
            code: d(p.code),
            caption: d(p.caption),
            style: ae(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", af, [
          o("h2", nf, c(p.heading), 1),
          o("ol", lf, [
            (t(!0), a(z, null, D(u(p.items), (M, w) => (t(), a("li", {
              key: w,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ae({ color: n() })
              }, c(w + 1) + ".", 5),
              o("span", null, c(M), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: j(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ae(p.emphasis ? { color: n() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), a("footer", of, [
          p.text ? (t(), a("p", sf, c(p.text), 1)) : $("", !0),
          u(p.contacts).length ? (t(), a("p", rf, c(u(p.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), a("p", uf, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), cf = ["aria-label", "title"], ff = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mf = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, n4 = /* @__PURE__ */ A({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: n } = la(), r = k(() => l.value.theme === "dark");
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
      (t(), a("svg", ff, [
        r.value ? (t(), a(z, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", mf))
      ]))
    ], 8, cf));
  }
}), pf = ["width", "height"], vf = { key: 0 }, gf = ["x1", "x2", "y1", "y2"], hf = ["x", "y"], bf = ["x1", "x2", "y1", "y2"], xf = ["x", "y"], yf = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], kf = ["x", "y", "width", "height", "fill", "fill-opacity"], $f = ["x", "y"], wf = ["x", "y"], Cf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Sf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Mf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Bf = { class: "text-xs font-semibold tabular-nums" }, _f = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Pf = { class: "text-muted-foreground" }, Et = 5.6, l4 = /* @__PURE__ */ A({
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
    const l = e, n = {
      danger: "var(--destructive)",
      warning: "var(--chart-4)",
      success: "var(--chart-2)",
      neutral: "var(--muted-foreground)"
    };
    function r(_) {
      return n[_] ?? _;
    }
    function s(_, E) {
      if (!l.thresholds?.length)
        return E;
      const V = l.thresholds.find((O) => _ < O.max);
      return r(V ? V.color : l.aboveColor);
    }
    const i = K(null), u = K(560), d = K(null);
    let m = null;
    fe(() => {
      m = new ResizeObserver((_) => {
        u.value = Math.max(160, _[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), ve(() => m?.disconnect());
    const h = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((E, V) => ({
      ...E,
      color: E.color ?? h[V % h.length]
    }))), y = k(() => p.value[0]?.points.map((_) => _.label) ?? []), M = k(() => y.value.length), w = k(() => l.orientation === "horizontal"), C = k(() => Math.max(0, ...y.value.map((_) => _.length))), b = k(() => {
      if (!w.value)
        return l.showAxis ? 44 : 8;
      const _ = C.value * Et + 16;
      return Math.round(Math.min(Math.max(60, _), u.value * 0.4));
    }), v = k(() => Math.max(4, Math.floor((b.value - 16) / Et)));
    function g(_) {
      return _.length <= v.value ? _ : `${_.slice(0, v.value - 1)}…`;
    }
    const f = k(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: b.value
    })), S = k(() => ({
      w: Math.max(1, u.value - f.value.left - f.value.right),
      h: Math.max(1, l.height - f.value.top - f.value.bottom)
    })), B = (_) => l.format ? l.format(_) : P(_);
    function P(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const G = k(() => {
      const _ = y.value.map(
        (J, Q) => l.stacked ? p.value.reduce((ne, oe) => ne + Math.max(0, oe.points[Q]?.value ?? 0), 0) : Math.max(...p.value.map((ne) => ne.points[Q]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const E = Math.max(..._, 0);
      if (E <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(E));
      return ([1, 2, 2.5, 5, 10].find((J) => E <= J * V) ?? 10) * V;
    }), N = k(
      () => (w.value ? S.value.h : S.value.w) / Math.max(1, M.value)
    ), ee = k(() => N.value * 0.68), H = k(
      () => l.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), W = k(() => {
      const _ = [], E = new Array(M.value).fill(0);
      return p.value.forEach((V, O) => {
        V.points.forEach((J, Q) => {
          const oe = Math.max(0, J.value) / G.value * (w.value ? S.value.w : S.value.h), Le = (w.value ? f.value.top : f.value.left) + Q * N.value + (N.value - ee.value) / 2, jt = l.stacked ? 0 : O * H.value;
          _.push(
            w.value ? {
              x: f.value.left + E[Q],
              y: Le + jt,
              w: oe,
              h: Math.max(0, H.value - 2),
              color: s(J.value, V.color),
              label: J.label,
              name: V.name,
              value: J.value,
              index: Q
            } : {
              x: Le + jt,
              y: f.value.top + S.value.h - oe - E[Q],
              w: Math.max(0, H.value - 2),
              h: oe,
              color: s(J.value, V.color),
              label: J.label,
              name: V.name,
              value: J.value,
              index: Q
            }
          ), l.stacked && (E[Q] += oe);
        });
      }), _;
    }), Z = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: G.value * (w.value ? _ : 1 - _),
        x: f.value.left + S.value.w * _,
        y: f.value.top + S.value.h * _
      }))
    ), te = k(() => Math.max(1, Math.ceil(M.value / (w.value ? 14 : 10))));
    function U(_) {
      return _ === M.value - 1 || _ % te.value === 0;
    }
    function I(_) {
      return (w.value ? f.value.top : f.value.left) + _ * N.value + N.value / 2;
    }
    const Y = k(() => d.value === null ? null : {
      label: y.value[d.value],
      rows: p.value.map((_) => ({
        name: _.name,
        color: _.color,
        value: _.points[d.value]?.value ?? 0
      }))
    });
    return (_, E) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      M.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ae({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: E[0] || (E[0] = (V) => d.value = null)
        }, [
          e.showAxis ? (t(), a("g", vf, [
            w.value ? (t(), a(z, { key: 0 }, [
              (t(!0), a(z, null, D(Z.value, (V) => (t(), a("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: f.value.top,
                y2: f.value.top + S.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, gf))), 128)),
              (t(!0), a(z, null, D(Z.value, (V) => (t(), a("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(V.value)), 9, hf))), 128))
            ], 64)) : (t(), a(z, { key: 1 }, [
              (t(!0), a(z, null, D(Z.value, (V) => (t(), a("line", {
                key: `g-${V.y}`,
                x1: f.value.left,
                x2: u.value - f.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, bf))), 128)),
              (t(!0), a(z, null, D(Z.value, (V) => (t(), a("text", {
                key: `gt-${V.y}`,
                x: f.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(V.value)), 9, xf))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), a(z, null, D(y.value, (V, O) => (t(), a("rect", {
            key: `hit-${O}`,
            x: w.value ? f.value.left : f.value.left + O * N.value,
            y: w.value ? f.value.top + O * N.value : f.value.top,
            width: w.value ? S.value.w : N.value,
            height: w.value ? N.value : S.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === O ? 0.4 : 0,
            onMouseenter: (J) => d.value = O
          }, null, 40, yf))), 128)),
          (t(!0), a(z, null, D(W.value, (V, O) => (t(), a("rect", {
            key: `b-${O}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": d.value === null || d.value === V.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, kf))), 128)),
          w.value ? (t(!0), a(z, { key: 1 }, D(y.value, (V, O) => ue((t(), a("text", {
            key: `c-${O}`,
            x: f.value.left - 8,
            y: I(O) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(c(g(V)) + " ", 1),
            o("title", null, c(V), 1)
          ], 8, $f)), [
            [je, U(O)]
          ])), 128)) : (t(!0), a(z, { key: 2 }, D(y.value, (V, O) => ue((t(), a("text", {
            key: `c-${O}`,
            x: I(O),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(V), 9, wf)), [
            [je, U(O)]
          ])), 128))
        ], 40, pf)),
        Y.value ? (t(), a("div", Cf, [
          o("p", Sf, c(Y.value.label), 1),
          (t(!0), a(z, null, D(Y.value.rows, (V, O) => (t(), a("div", {
            key: O,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ae({ background: V.color })
            }, null, 4),
            o("span", Mf, c(V.name || "Value"), 1),
            o("span", Bf, c(B(V.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", _f, [
          (t(!0), a(z, null, D(p.value, (V, O) => (t(), a("span", {
            key: O,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ae({ background: V.color })
            }, null, 4),
            o("span", Pf, c(V.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), zf = ["width", "height"], Af = ["id"], jf = ["stop-color"], Of = ["stop-color"], Lf = { key: 0 }, Vf = ["x1", "x2", "y1", "y2"], Df = ["x", "y"], Tf = ["x", "y"], If = ["x1", "x2", "y1", "y2"], Ff = ["d", "fill"], Ef = ["d", "stroke", "stroke-dasharray"], Nf = ["cx", "cy", "fill"], Rf = { key: 1 }, Uf = ["x1", "x2", "y1", "y2"], Hf = ["cx", "cy", "fill"], qf = ["x", "y"], Kf = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Gf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Wf = { class: "text-xs font-semibold tabular-nums" }, Zf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Jf = { class: "text-muted-foreground" }, Yf = /* @__PURE__ */ A({
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
    const l = e, n = k(() => h.value.some((_) => _.axis === "right")), r = K(null), s = K(560), i = K(null);
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
    ], m = Math.random().toString(36).slice(2, 9), h = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((E, V) => ({
      ...E,
      color: E.color ?? d[V % d.length]
    }))), p = k(() => h.value[0]?.points.map((_) => _.label) ?? []), y = k(() => p.value.length), M = k(() => ({
      top: 12,
      right: l.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), w = (_) => l.format ? l.format(_) : C(_);
    function C(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    function b(_) {
      const E = Math.max(..._, 0);
      if (E <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(E));
      return ([1, 2, 2.5, 5, 10].find((J) => E <= J * V) ?? 10) * V;
    }
    const v = k(
      () => b(
        h.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((E) => E.value))
      )
    ), g = k(
      () => b(
        h.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((E) => E.value))
      )
    ), f = k(() => ({
      w: Math.max(1, s.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    }));
    function S(_) {
      return M.value.left + (y.value <= 1 ? 0 : _ / (y.value - 1) * f.value.w);
    }
    function B(_, E = "left") {
      const V = E === "right" ? g.value : v.value;
      return M.value.top + f.value.h - _ / V * f.value.h;
    }
    const P = k(
      () => h.value.map((_) => {
        const E = _.points.map((O, J) => ({
          ...O,
          x: S(J),
          y: B(O.value, _.axis ?? "left")
        })), V = _.stepped ? G(E) : N(E);
        return { ..._, pts: E, line: V, area: ee(V, E) };
      })
    );
    function G(_) {
      if (_.length === 0)
        return "";
      let E = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let V = 1; V < _.length; V++)
        E += ` L${_[V].x.toFixed(2)},${_[V - 1].y.toFixed(2)} L${_[V].x.toFixed(2)},${_[V].y.toFixed(2)}`;
      return E;
    }
    function N(_) {
      const E = _.length;
      if (E === 0)
        return "";
      if (E === 1)
        return `M${_[0].x},${_[0].y}`;
      const V = [], O = [];
      for (let ne = 0; ne < E - 1; ne++)
        V[ne] = _[ne + 1].x - _[ne].x, O[ne] = V[ne] === 0 ? 0 : (_[ne + 1].y - _[ne].y) / V[ne];
      const J = [O[0]];
      for (let ne = 1; ne < E - 1; ne++)
        if (O[ne - 1] * O[ne] <= 0)
          J[ne] = 0;
        else {
          const oe = 2 * V[ne] + V[ne - 1], Le = V[ne] + 2 * V[ne - 1];
          J[ne] = (oe + Le) / (oe / O[ne - 1] + Le / O[ne]);
        }
      J[E - 1] = O[E - 2];
      let Q = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let ne = 0; ne < E - 1; ne++) {
        const oe = V[ne] / 3;
        Q += ` C${(_[ne].x + oe).toFixed(2)},${(_[ne].y + J[ne] * oe).toFixed(2)} ${(_[ne + 1].x - oe).toFixed(2)},${(_[ne + 1].y - J[ne + 1] * oe).toFixed(2)} ${_[ne + 1].x.toFixed(2)},${_[ne + 1].y.toFixed(2)}`;
      }
      return Q;
    }
    function ee(_, E) {
      if (E.length === 0)
        return "";
      const V = M.value.top + f.value.h;
      return `${_} L${E[E.length - 1].x.toFixed(2)},${V} L${E[0].x.toFixed(2)},${V} Z`;
    }
    const H = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: M.value.top + f.value.h * _,
        value: v.value * (1 - _)
      }))
    ), W = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: M.value.top + f.value.h * _,
        value: g.value * (1 - _)
      }))
    ), Z = k(() => Math.max(1, Math.ceil(y.value / 8)));
    function te(_) {
      return _ === y.value - 1 || _ % Z.value === 0;
    }
    function U(_) {
      const E = _.currentTarget.getBoundingClientRect(), V = _.clientX - E.left - M.value.left, O = y.value <= 1 ? 1 : f.value.w / (y.value - 1);
      i.value = Math.min(y.value - 1, Math.max(0, Math.round(V / O)));
    }
    const I = k(() => {
      if (i.value === null || y.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: S(_),
        label: p.value[_],
        rows: P.value.map((E) => ({
          name: E.name,
          color: E.color,
          value: E.points[_]?.value ?? 0,
          y: E.pts[_]?.y ?? 0
        }))
      };
    }), Y = k(() => {
      if (!I.value)
        return {};
      const _ = I.value.x > s.value * 0.6;
      return {
        left: `${I.value.x}px`,
        top: "8px",
        transform: _ ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (_, E) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      y.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ae({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: U,
          onMouseleave: E[0] || (E[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(z, null, D(P.value, (V, O) => (t(), a("linearGradient", {
              id: `pk-fill-${x(m)}-${O}`,
              key: O,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": V.color,
                "stop-opacity": "0.25"
              }, null, 8, jf),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, Of)
            ], 8, Af))), 128))
          ]),
          e.showAxis ? (t(), a("g", Lf, [
            (t(!0), a(z, null, D(H.value, (V) => (t(), a("line", {
              key: V.y,
              x1: M.value.left,
              x2: s.value - M.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Vf))), 128)),
            (t(!0), a(z, null, D(H.value, (V) => (t(), a("text", {
              key: `t-${V.y}`,
              x: M.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(V.value)), 9, Df))), 128)),
            n.value ? (t(!0), a(z, { key: 0 }, D(W.value, (V) => (t(), a("text", {
              key: `rt-${V.y}`,
              x: s.value - M.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(V.value)), 9, Tf))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), a(z, null, D(p.value, (V, O) => ue((t(), a("line", {
            key: `v-${O}`,
            x1: S(O),
            x2: S(O),
            y1: M.value.top,
            y2: M.value.top + f.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, If)), [
            [je, te(O)]
          ])), 128)),
          (t(!0), a(z, null, D(P.value, (V, O) => (t(), a("g", {
            key: `s-${O}`
          }, [
            V.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${x(m)}-${O})`
            }, null, 8, Ff)) : $("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Ef),
            V.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, Nf)) : $("", !0)
          ]))), 128)),
          I.value ? (t(), a("g", Rf, [
            o("line", {
              x1: I.value.x,
              x2: I.value.x,
              y1: M.value.top,
              y2: M.value.top + f.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Uf),
            (t(!0), a(z, null, D(I.value.rows, (V, O) => (t(), a("circle", {
              key: `d-${O}`,
              cx: I.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Hf))), 128))
          ])) : $("", !0),
          (t(!0), a(z, null, D(p.value, (V, O) => ue((t(), a("text", {
            key: `x-${O}`,
            x: S(O),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(V), 9, qf)), [
            [je, te(O)]
          ])), 128))
        ], 40, zf)),
        I.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ae(Y.value)
        }, [
          o("p", Kf, c(I.value.label), 1),
          (t(!0), a(z, null, D(I.value.rows, (V, O) => (t(), a("div", {
            key: O,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ae({ background: V.color })
            }, null, 4),
            o("span", Gf, c(V.name || "Value"), 1),
            o("span", Wf, c(w(V.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && h.value.length > 1 ? (t(), a("div", Zf, [
          (t(!0), a(z, null, D(P.value, (V, O) => (t(), a("span", {
            key: O,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ae({ background: V.color })
            }, null, 4),
            o("span", Jf, c(V.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Xf = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Qf = { class: "text-muted-foreground text-[11px] capitalize" }, em = { class: "text-sm font-semibold tabular-nums" }, tm = {
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
    return (l, n) => (t(), a("div", Xf, [
      o("p", Qf, c(e.label), 1),
      o("p", em, [
        R(c(e.value) + " ", 1),
        e.share ? (t(), a("span", tm, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), am = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, nm = ["width", "height", "viewBox", "aria-label"], lm = ["d", "fill", "fill-opacity", "onMouseenter"], om = ["x", "y"], sm = ["x", "y"], rm = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, im = ["onMouseenter"], um = { class: "min-w-0 flex-1 truncate capitalize" }, dm = { class: "tabular-nums font-medium" }, cm = { class: "text-muted-foreground w-9 text-right tabular-nums" }, o4 = /* @__PURE__ */ A({
  __name: "PieChart",
  props: {
    data: {},
    height: { default: 220 },
    type: { default: "doughnut" },
    format: {}
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = k(() => l.data.reduce((v, g) => v + g.value, 0)), s = K(null), i = k(() => l.height), u = k(() => i.value / 2 - 4), d = k(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function m(v) {
      return n[v % n.length];
    }
    function h(v) {
      return 1 - Math.min(0.55, Math.floor(v / n.length) * 0.28);
    }
    const p = k(() => {
      if (r.value <= 0)
        return [];
      const v = i.value / 2;
      let g = -Math.PI / 2;
      return l.data.map((f, S) => {
        const B = f.value / r.value, P = B * Math.PI * 2, G = g, N = g + P;
        return g = N, {
          ...f,
          share: B,
          colour: m(S),
          opacity: h(S),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: B >= 0.9999 ? w(v) : M(v, G, N, u.value, d.value)
        };
      });
    });
    function y(v, g, f) {
      return `${(v + Math.cos(g) * f).toFixed(2)},${(v + Math.sin(g) * f).toFixed(2)}`;
    }
    function M(v, g, f, S, B) {
      const P = f - g > Math.PI ? 1 : 0;
      return B <= 0 ? `M${v},${v} L${y(v, g, S)} A${S},${S} 0 ${P} 1 ${y(v, f, S)} Z` : [
        `M${y(v, g, S)}`,
        `A${S},${S} 0 ${P} 1 ${y(v, f, S)}`,
        `L${y(v, f, B)}`,
        `A${B},${B} 0 ${P} 0 ${y(v, g, B)}`,
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
    const C = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), b = (v) => `${(v * 100).toFixed(v < 0.01 ? 2 : 0)}%`;
    return (v, g) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ae({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", am, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), a(z, null, D(p.value, (f, S) => (t(), a("path", {
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
        }, null, 40, lm))), 128)),
        e.type === "doughnut" ? (t(), a(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : p.value[s.value].value)), 9, om),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, sm)
        ], 64)) : $("", !0)
      ], 8, nm)),
      o("ul", rm, [
        (t(!0), a(z, null, D(p.value, (f, S) => (t(), a("li", {
          key: S,
          class: j(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === S ? "bg-muted" : ""]),
          onMouseenter: (B) => s.value = S,
          onMouseleave: g[1] || (g[1] = (B) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ae({ background: f.colour, opacity: f.opacity })
          }, null, 4),
          o("span", um, c(f.label), 1),
          o("span", dm, c(C(f.value)), 1),
          o("span", cm, c(b(f.share)), 1)
        ], 42, im))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(Ye, {
        key: 0,
        label: p.value[s.value].label,
        value: C(p.value[s.value].value),
        share: b(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), fm = ["width", "height", "viewBox", "aria-label"], mm = { class: "text-border" }, pm = ["x1", "x2", "y1", "y2", "stroke-dasharray"], vm = { class: "fill-muted-foreground text-[10px]" }, gm = ["x", "y"], hm = ["x", "y"], bm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], xm = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, s4 = /* @__PURE__ */ A({
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
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = K(null), s = K(560), i = K(null);
    let u = null;
    fe(() => {
      u = new ResizeObserver((Z) => {
        const te = Z[0]?.contentRect.width ?? 0;
        te > 0 && (s.value = te);
      }), r.value && u.observe(r.value);
    }), ve(() => u?.disconnect());
    const d = k(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), m = (Z, te) => te.color ?? n[Z % n.length], h = k(() => d.value.flatMap((Z) => Z.points)), p = k(() => h.value.some((Z) => typeof Z.r == "number")), y = { top: 12, right: 16, bottom: 32, left: 48 }, M = k(() => Math.max(10, s.value - y.left - y.right)), w = k(() => Math.max(10, l.height - y.top - y.bottom));
    function C(Z) {
      if (Z.length === 0)
        return [0, 1];
      const te = Math.min(...Z), U = Math.max(...Z), I = U - te || Math.abs(U) || 1;
      return [te - I * 0.08, U + I * 0.08];
    }
    const b = k(() => C(h.value.map((Z) => Z.x))), v = k(() => C(h.value.map((Z) => Z.y))), g = (Z) => {
      const [te, U] = b.value;
      return y.left + (Z - te) / (U - te) * M.value;
    }, f = (Z) => {
      const [te, U] = v.value;
      return y.top + w.value - (Z - te) / (U - te) * w.value;
    }, S = k(() => Math.max(...h.value.map((Z) => Z.r ?? 0), 0));
    function B(Z) {
      if (!p.value || !S.value)
        return 4;
      const te = Math.max(0, Z.r ?? 0) / S.value;
      return 3 + Math.sqrt(te) * (l.maxRadius - 3);
    }
    function P([Z, te]) {
      return Array.from({ length: 5 }, (U, I) => Z + (te - Z) / 4 * I);
    }
    const G = k(() => P(b.value)), N = k(() => P(v.value)), ee = (Z) => l.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), H = (Z) => l.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), W = k(() => {
      if (!i.value)
        return null;
      const Z = d.value[i.value.s], te = Z?.points[i.value.p];
      return te ? { series: Z, point: te } : null;
    });
    return (Z, te) => (t(), a("div", {
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
        o("g", mm, [
          (t(!0), a(z, null, D(N.value, (U, I) => (t(), a("line", {
            key: `gy-${I}`,
            x1: y.left,
            x2: y.left + M.value,
            y1: f(U),
            y2: f(U),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": I === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, pm))), 128))
        ]),
        o("g", vm, [
          (t(!0), a(z, null, D(N.value, (U, I) => (t(), a("text", {
            key: `ty-${I}`,
            x: y.left - 8,
            y: f(U) + 3,
            "text-anchor": "end"
          }, c(H(U)), 9, gm))), 128)),
          (t(!0), a(z, null, D(G.value, (U, I) => (t(), a("text", {
            key: `tx-${I}`,
            x: g(U),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(ee(U)), 9, hm))), 128))
        ]),
        (t(!0), a(z, null, D(d.value, (U, I) => (t(), a("g", {
          key: `s-${I}`
        }, [
          (t(!0), a(z, null, D(U.points, (Y, _) => (t(), a("circle", {
            key: `p-${I}-${_}`,
            cx: g(Y.x),
            cy: f(Y.y),
            r: B(Y),
            fill: m(I, U),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(I, U),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== I || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (E) => i.value = { s: I, p: _ },
            onMouseleave: te[0] || (te[0] = (E) => i.value = null)
          }, null, 40, bm))), 128))
        ]))), 128))
      ], 8, fm)),
      W.value ? (t(), T(Ye, {
        key: 0,
        label: W.value.point.label ?? W.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(W.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(W.value.point.y)}`,
        share: p.value && W.value.point.r != null ? String(W.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && d.value.length > 1 ? (t(), a("div", xm, [
        (t(!0), a(z, null, D(d.value, (U, I) => (t(), a("span", {
          key: `l-${I}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ae({ backgroundColor: m(I, U) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + c(U.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), ym = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, km = ["width", "height", "viewBox"], $m = ["points"], wm = ["x1", "y1", "x2", "y2"], Cm = ["points", "fill", "stroke"], Sm = ["cx", "cy", "fill", "onMouseenter"], Mm = ["x", "y", "text-anchor"], Bm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, _m = { class: "truncate" }, r4 = /* @__PURE__ */ A({
  __name: "RadarChart",
  props: {
    series: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = k(
      () => l.series.map((f, S) => ({
        ...f,
        color: f.color ?? n[S % n.length]
      }))
    ), s = k(() => r.value[0]?.points.map((f) => f.label) ?? []), i = k(() => s.value.length), u = k(() => l.height), d = k(() => u.value / 2), m = k(() => u.value / 2 - 34), h = k(() => {
      const f = Math.max(...r.value.flatMap((P) => P.points.map((G) => G.value)), 0);
      if (f <= 0)
        return 1;
      const S = 10 ** Math.floor(Math.log10(f));
      return ([1, 2, 2.5, 5, 10].find((P) => f <= P * S) ?? 10) * S;
    });
    function p(f) {
      return f / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function y(f, S) {
      const B = p(f);
      return {
        x: d.value + Math.cos(B) * m.value * S,
        y: d.value + Math.sin(B) * m.value * S
      };
    }
    function M(f) {
      return Array.from({ length: i.value }, (S, B) => {
        const P = y(B, f);
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
            const G = y(P, B);
            return `${G.x.toFixed(2)},${G.y.toFixed(2)}`;
          }).join(" "),
          dots: S.map((B, P) => y(P, B))
        };
      })
    ), b = k(
      () => s.value.map((f, S) => {
        const B = p(S), P = d.value + Math.cos(B) * (m.value + 14), G = d.value + Math.sin(B) * (m.value + 14), N = Math.cos(B);
        return {
          label: f,
          x: P,
          y: G + 3,
          anchor: Math.abs(N) < 0.2 ? "middle" : N > 0 ? "start" : "end"
        };
      })
    ), v = K(null), g = (f) => l.format ? l.format(f) : new Intl.NumberFormat().format(f);
    return (f, S) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ae({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", ym, [
      (t(), a("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, D(w.value, (B) => (t(), a("polygon", {
          key: B.f,
          points: B.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, $m))), 128)),
        (t(!0), a(z, null, D(s.value, (B, P) => (t(), a("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: y(P, 1).x,
          y2: y(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, wm))), 128)),
        (t(!0), a(z, null, D(C.value, (B, P) => (t(), a("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: B.outline,
            fill: B.color,
            "fill-opacity": "0.16",
            stroke: B.color,
            "stroke-width": "2"
          }, null, 8, Cm),
          (t(!0), a(z, null, D(B.dots, (G, N) => (t(), a("circle", {
            key: N,
            cx: G.x,
            cy: G.y,
            r: "3",
            fill: B.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => v.value = {
              series: B.name,
              axis: s.value[N],
              value: B.values[N]?.value ?? 0
            },
            onMouseleave: S[0] || (S[0] = (ee) => v.value = null)
          }, null, 40, Sm))), 128))
        ]))), 128)),
        (t(!0), a(z, null, D(b.value, (B, P) => (t(), a("text", {
          key: `l-${P}`,
          x: B.x,
          y: B.y,
          "text-anchor": B.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(B.label), 9, Mm))), 128))
      ], 8, km)),
      e.showLegend ? (t(), a("ul", Bm, [
        (t(!0), a(z, null, D(r.value, (B, P) => (t(), a("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ae({ background: B.color })
          }, null, 4),
          o("span", _m, c(B.name), 1)
        ]))), 128))
      ])) : $("", !0),
      v.value ? (t(), T(Ye, {
        key: 1,
        label: `${v.value.series} — ${v.value.axis}`,
        value: g(v.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Pm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, zm = ["width", "height", "viewBox"], Am = ["cx", "cy", "r"], jm = ["d", "fill", "fill-opacity", "onMouseenter"], Om = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Lm = { class: "min-w-0 flex-1 truncate capitalize" }, Vm = { class: "font-medium tabular-nums" }, i4 = /* @__PURE__ */ A({
  __name: "PolarAreaChart",
  props: {
    data: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = K(null), s = k(() => l.height), i = k(() => s.value / 2), u = k(() => s.value / 2 - 6), d = k(() => Math.max(...l.data.map((M) => Math.max(0, M.value)), 0)), m = k(() => {
      const M = l.data.length;
      if (M === 0 || d.value <= 0)
        return [];
      const w = Math.PI * 2 / M;
      return l.data.map((C, b) => {
        const v = Math.sqrt(Math.max(0, C.value) / d.value), g = u.value * v, f = b * w - Math.PI / 2, S = f + w;
        return {
          ...C,
          color: n[b % n.length],
          share: d.value === 0 ? 0 : C.value / d.value,
          path: h(i.value, f, S, g)
        };
      });
    });
    function h(M, w, C, b) {
      if (b <= 0)
        return "";
      if (C - w >= Math.PI * 2 - 1e-6)
        return `M${M - b},${M} A${b},${b} 0 1 1 ${M + b},${M} A${b},${b} 0 1 1 ${M - b},${M} Z`;
      const v = C - w > Math.PI ? 1 : 0, g = M + Math.cos(w) * b, f = M + Math.sin(w) * b, S = M + Math.cos(C) * b, B = M + Math.sin(C) * b;
      return `M${M},${M} L${g.toFixed(2)},${f.toFixed(2)} A${b.toFixed(2)},${b.toFixed(2)} 0 ${v} 1 ${S.toFixed(2)},${B.toFixed(2)} Z`;
    }
    const p = k(() => [0.5, 0.75, 1].map((M) => u.value * M)), y = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, w) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ae({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Pm, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, D(p.value, (C) => (t(), a("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Am))), 128)),
        (t(!0), a(z, null, D(m.value, (C, b) => (t(), a("path", {
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
      ], 8, zm)),
      e.showLegend ? (t(), a("ul", Om, [
        (t(!0), a(z, null, D(m.value, (C, b) => (t(), a("li", {
          key: b,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ae({ background: C.color })
          }, null, 4),
          o("span", Lm, c(C.label), 1),
          o("span", Vm, c(y(C.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), T(Ye, {
        key: 1,
        label: m.value[r.value].label,
        value: y(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Dm = ["width", "height"], Tm = ["x1", "x2", "y1", "y2"], Im = ["x", "y"], Fm = ["x", "y"], Em = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Nm = ["x", "y", "width", "height", "fill", "fill-opacity"], Rm = ["d", "stroke"], Um = ["cx", "cy", "fill"], Hm = ["x", "y"], qm = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Km = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Gm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Wm = { class: "text-xs font-semibold tabular-nums" }, Zm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Jm = { class: "text-muted-foreground" }, u4 = /* @__PURE__ */ A({
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
    const l = e, n = K(null), r = K(560), s = K(null);
    let i = null;
    fe(() => {
      i = new ResizeObserver((I) => {
        r.value = Math.max(160, I[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ve(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], m = k(
      () => l.bars.map((I, Y) => ({
        ...I,
        color: I.color ?? u[Y % u.length]
      }))
    ), h = k(
      () => l.lines.map((I, Y) => ({
        ...I,
        color: I.color ?? d[Y % d.length]
      }))
    ), p = k(
      () => m.value[0]?.points.map((I) => I.label) ?? h.value[0]?.points.map((I) => I.label) ?? []
    ), y = k(() => p.value.length), M = k(() => l.lineAxis === "right"), w = k(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = k(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function b(I) {
      const Y = Math.max(...I, 0);
      if (Y <= 0)
        return 1;
      const _ = 10 ** Math.floor(Math.log10(Y));
      return ([1, 2, 2.5, 5, 10].find((V) => Y <= V * _) ?? 10) * _;
    }
    const v = k(
      () => b([
        ...m.value.flatMap((I) => I.points.map((Y) => Y.value)),
        ...M.value ? [] : h.value.flatMap((I) => I.points.map((Y) => Y.value))
      ])
    ), g = k(
      () => M.value ? b(h.value.flatMap((I) => I.points.map((Y) => Y.value))) : v.value
    ), f = k(() => C.value.w / Math.max(1, y.value)), S = k(() => f.value * 0.6), B = k(() => S.value / Math.max(1, m.value.length));
    function P(I) {
      return w.value.left + I * f.value + f.value / 2;
    }
    const G = k(
      () => m.value.flatMap(
        (I, Y) => I.points.map((_, E) => {
          const V = Math.max(0, _.value) / v.value * C.value.h;
          return {
            x: P(E) - S.value / 2 + Y * B.value,
            y: w.value.top + C.value.h - V,
            w: Math.max(0, B.value - 2),
            h: V,
            color: I.color,
            index: E,
            name: I.name,
            value: _.value,
            label: _.label
          };
        })
      )
    ), N = k(
      () => h.value.map((I) => {
        const Y = I.points.map((_, E) => ({
          x: P(E),
          y: w.value.top + C.value.h - Math.max(0, _.value) / g.value * C.value.h,
          value: _.value
        }));
        return {
          ...I,
          pts: Y,
          d: Y.map((_, E) => `${E === 0 ? "M" : "L"}${_.x.toFixed(2)},${_.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((I) => ({
        y: w.value.top + C.value.h * I,
        left: v.value * (1 - I),
        right: g.value * (1 - I)
      }))
    ), H = k(() => Math.max(1, Math.ceil(y.value / 10)));
    function W(I) {
      return I === y.value - 1 || I % H.value === 0;
    }
    const Z = (I) => l.format ? l.format(I) : te(I);
    function te(I) {
      return Math.abs(I) >= 1e6 ? `${(I / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(I) >= 1e3 ? `${(I / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(I * 100) / 100);
    }
    const U = k(() => {
      if (s.value === null)
        return null;
      const I = s.value;
      return {
        label: p.value[I],
        rows: [
          ...m.value.map((Y) => ({
            name: Y.name,
            color: Y.color,
            value: Y.points[I]?.value ?? 0
          })),
          ...h.value.map((Y) => ({
            name: Y.name,
            color: Y.color,
            value: Y.points[I]?.value ?? 0
          }))
        ]
      };
    });
    return (I, Y) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      y.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ae({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Y[0] || (Y[0] = (_) => s.value = null)
        }, [
          (t(!0), a(z, null, D(ee.value, (_) => (t(), a("line", {
            key: `g-${_.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Tm))), 128)),
          (t(!0), a(z, null, D(ee.value, (_) => (t(), a("text", {
            key: `lt-${_.y}`,
            x: w.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(te(_.left)), 9, Im))), 128)),
          M.value ? (t(!0), a(z, { key: 0 }, D(ee.value, (_) => (t(), a("text", {
            key: `rt-${_.y}`,
            x: r.value - w.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(te(_.right)), 9, Fm))), 128)) : $("", !0),
          (t(!0), a(z, null, D(p.value, (_, E) => (t(), a("rect", {
            key: `hit-${E}`,
            x: w.value.left + E * f.value,
            y: w.value.top,
            width: f.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === E ? 0.4 : 0,
            onMouseenter: (V) => s.value = E
          }, null, 40, Em))), 128)),
          (t(!0), a(z, null, D(G.value, (_, E) => (t(), a("rect", {
            key: `b-${E}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Nm))), 128)),
          (t(!0), a(z, null, D(N.value, (_, E) => (t(), a("g", {
            key: `l-${E}`
          }, [
            o("path", {
              d: _.d,
              fill: "none",
              stroke: _.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Rm),
            s.value !== null && _.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Um)) : $("", !0)
          ]))), 128)),
          (t(!0), a(z, null, D(p.value, (_, E) => ue((t(), a("text", {
            key: `x-${E}`,
            x: P(E),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(_), 9, Hm)), [
            [je, W(E)]
          ])), 128))
        ], 40, Dm)),
        U.value ? (t(), a("div", qm, [
          o("p", Km, c(U.value.label), 1),
          (t(!0), a(z, null, D(U.value.rows, (_, E) => (t(), a("div", {
            key: E,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ae({ background: _.color })
            }, null, 4),
            o("span", Gm, c(_.name), 1),
            o("span", Wm, c(Z(_.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), a("div", Zm, [
          (t(!0), a(z, null, D([...m.value, ...h.value], (_, E) => (t(), a("span", {
            key: E,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ae({ background: _.color })
            }, null, 4),
            o("span", Jm, c(_.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Ym = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Xm = { class: "text-muted-foreground" }, Qm = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, ep = ["width", "height"], tp = ["x", "y"], ap = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], np = ["x", "y"], lp = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, op = { class: "text-[11px] font-medium capitalize" }, sp = { class: "text-muted-foreground text-[11px] capitalize" }, rp = { class: "text-sm font-semibold tabular-nums" }, ip = { class: "text-muted-foreground text-xs font-normal" }, d4 = /* @__PURE__ */ A({
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
    const l = e, n = K(null), r = K(560), s = K(null);
    let i = null;
    fe(() => {
      i = new ResizeObserver((S) => {
        r.value = Math.max(160, S[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ve(() => i?.disconnect());
    const u = k(() => l.series[0]?.points.map((S) => S.label) ?? []), d = k(() => l.series.length), m = k(() => u.value.length), h = k(() => Math.min(140, Math.max(60, r.value * 0.16))), p = k(() => Math.max(1, r.value - h.value - 8)), y = k(() => p.value / Math.max(1, m.value)), M = k(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
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
        (S, B) => S.points.map((P, G) => {
          const N = C(P.value);
          return {
            row: B,
            col: G,
            x: h.value + G * y.value,
            y: 4 + B * M.value,
            w: Math.max(1, y.value - 1),
            h: Math.max(1, M.value - 4),
            colour: w(N),
            label: P.label,
            value: P.value,
            rowName: S.name,
            bucketLabel: l.buckets[N].label
          };
        })
      )
    ), v = k(() => y.value < 2), g = k(() => s.value ? b.value.find((S) => S.row === s.value.row && S.col === s.value.col) ?? null : null), f = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S);
    return (S, B) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      d.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ae({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        o("div", Ym, [
          (t(!0), a(z, null, D(e.buckets, (P, G) => (t(), a("span", {
            key: G,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ae({ background: w(G) })
            }, null, 4),
            o("span", Xm, c(P.label), 1)
          ]))), 128))
        ]),
        v.value ? (t(), a("p", Qm, c(m.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: B[0] || (B[0] = (P) => s.value = null)
        }, [
          (t(!0), a(z, null, D(e.series, (P, G) => (t(), a("text", {
            key: `r-${G}`,
            x: h.value - 10,
            y: 4 + G * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(P.name), 9, tp))), 128)),
          (t(!0), a(z, null, D(b.value, (P, G) => (t(), a("rect", {
            key: G,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (N) => s.value = { row: P.row, col: P.col }
          }, null, 40, ap))), 128)),
          e.showColumnLabels && !v.value ? (t(!0), a(z, { key: 0 }, D(u.value, (P, G) => (t(), a("text", {
            key: `c-${G}`,
            x: h.value + G * y.value + y.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(P), 9, np))), 128)) : $("", !0)
        ], 40, ep)),
        g.value ? (t(), a("div", lp, [
          o("p", op, c(g.value.label), 1),
          o("p", sp, c(g.value.rowName), 1),
          o("p", rp, [
            R(c(f(g.value.value)) + " ", 1),
            o("span", ip, "(" + c(g.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), up = ["viewBox"], dp = { key: 0 }, cp = ["id"], fp = ["stop-color"], mp = ["stop-color"], pp = ["d", "fill"], vp = ["d", "stroke"], Nt = 100, Re = 30, lt = /* @__PURE__ */ A({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = Math.random().toString(36).slice(2, 9), r = k(() => {
      const d = l.data.map((y) => y.value);
      if (d.length < 2)
        return [];
      const m = Math.min(...d), p = Math.max(...d) - m || 1;
      return d.map((y, M) => ({
        x: M / (d.length - 1) * Nt,
        y: Re - (y - m) / p * (Re - 4) - 2
      }));
    });
    function s(d) {
      const m = d.length;
      if (m < 2)
        return "";
      const h = [], p = [];
      for (let w = 0; w < m - 1; w++)
        h[w] = d[w + 1].x - d[w].x, p[w] = h[w] === 0 ? 0 : (d[w + 1].y - d[w].y) / h[w];
      const y = [p[0]];
      for (let w = 1; w < m - 1; w++)
        if (p[w - 1] * p[w] <= 0)
          y[w] = 0;
        else {
          const C = 2 * h[w] + h[w - 1], b = h[w] + 2 * h[w - 1];
          y[w] = (C + b) / (C / p[w - 1] + b / p[w]);
        }
      y[m - 1] = p[m - 2];
      let M = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let w = 0; w < m - 1; w++) {
        const C = h[w] / 3;
        M += ` C${(d[w].x + C).toFixed(2)},${(d[w].y + y[w] * C).toFixed(2)} ${(d[w + 1].x - C).toFixed(2)},${(d[w + 1].y - y[w + 1] * C).toFixed(2)} ${d[w + 1].x.toFixed(2)},${d[w + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = k(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((m, h) => `${h === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), u = k(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Re} L${d[0].x.toFixed(2)},${Re} Z`;
    });
    return (d, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Nt} ${Re}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ae({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", dp, [
        o("linearGradient", {
          id: `pk-spark-${x(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, fp),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, mp)
        ], 8, cp)
      ])) : $("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${x(n)})`
      }, null, 8, pp)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, vp)
    ], 12, up)) : $("", !0);
  }
}), gp = { class: "flex items-center gap-1 text-xs" }, hp = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, bp = {
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
    const l = e, n = k(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = k(
      () => n.value === null ? "text-muted-foreground" : n.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = k(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = k(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (u, d) => (t(), a("span", gp, [
      o("span", {
        class: j(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", hp, c(s.value), 1),
        R(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", bp, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), xp = ["aria-label"], Ie = /* @__PURE__ */ A({
  __name: "PkSkeleton",
  props: {
    variant: { default: "text" },
    count: { default: 1 },
    height: {},
    label: { default: "Loading" }
  },
  setup(e) {
    const l = e, n = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = k(() => n[l.variant] ?? n.text), s = k(() => Math.max(1, Math.min(l.count, 50)));
    function i(u) {
      if (!(l.variant !== "text" || s.value === 1))
        return u === s.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), a("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: ae(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(z, null, D(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: j(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ae({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, xp));
  }
}), yp = ["data-collapsed"], kp = { class: "flex flex-wrap items-start justify-between gap-2" }, $p = { class: "flex min-w-0 items-start gap-2" }, wp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Cp = ["d"], Sp = { class: "min-w-0" }, Mp = { class: "text-sm font-medium" }, Bp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, _p = { class: "flex shrink-0 items-center gap-1.5" }, Pp = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, zp = ["aria-pressed", "onClick"], Ap = ["aria-expanded", "aria-label", "title"], jp = ["aria-label"], Op = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lp = ["d"], Vp = /* @__PURE__ */ A({
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
    const l = e, n = xa(), r = K(l.defaultCollapsed), s = k(() => !!l.icon && !n.icon), i = k(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), a("div", {
      class: j(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", kp, [
        o("div", $p, [
          q(u.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", wp, [
              o("path", {
                d: x(ie)(e.icon)
              }, null, 8, Cp)
            ])) : $("", !0)
          ]),
          o("div", Sp, [
            o("p", Mp, c(e.label), 1),
            e.description ? (t(), a("p", Bp, c(e.description), 1)) : $("", !0),
            q(u.$slots, "trend")
          ])
        ]),
        o("div", _p, [
          q(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", Pp, [
            (t(!0), a(z, null, D(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: j([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (h) => u.$emit("update:period", m.value)
            }, c(m.label), 11, zp))), 128))
          ])) : $("", !0),
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
          ], 8, Ap)) : $("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (m) => u.$emit("hide"))
          }, [
            (t(), a("svg", Op, [
              o("path", {
                d: x(ie)("eye-off")
              }, null, 8, Lp)
            ]))
          ], 8, jp)) : $("", !0)
        ])
      ]),
      r.value ? $("", !0) : (t(), a("div", {
        key: 0,
        style: ae(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(Ie, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), a("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ae({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : q(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, yp));
  }
}), Dp = ["aria-pressed", "aria-label", "title"], Tp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ip = ["d"], Fp = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Ep = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Np = ["href"], Rp = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Up = ["d"], Hp = ["aria-label", "onClick"], qp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kp = ["d"], Gp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wp = ["d"], Zp = {
  key: 0,
  class: "flex flex-col gap-1"
}, Jp = ["onClick"], Yp = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xp = ["d"], Qp = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, ev = /* @__PURE__ */ A({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(!1), i = K(!1), u = k(
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
    return (h, p) => (t(), a(z, null, [
      F(Vp, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (y) => r("hide"))
      }, {
        actions: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (y) => s.value = !s.value)
          }, [
            (t(), a("svg", Tp, [
              o("path", {
                d: x(ie)(s.value ? "check" : "pencil")
              }, null, 8, Ip)
            ]))
          ], 8, Dp)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), a("div", Fp, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            F(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (y) => i.value = !0)
            }, {
              default: L(() => [...p[6] || (p[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", Ep, [
            (t(!0), a(z, null, D(e.items, (y) => (t(), a("div", {
              key: y.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: y.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", Rp, [
                  o("path", {
                    d: x(ie)(y.icon)
                  }, null, 8, Up)
                ])),
                R(" " + c(y.label), 1)
              ], 8, Np),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${y.label}`,
                onClick: (M) => d(y.id)
              }, [
                (t(), a("svg", qp, [
                  o("path", {
                    d: x(ie)("x")
                  }, null, 8, Kp)
                ]))
              ], 8, Hp)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (y) => i.value = !0)
            }, [
              (t(), a("svg", Gp, [
                o("path", {
                  d: x(ie)("plus")
                }, null, 8, Wp)
              ])),
              p[8] || (p[8] = R(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      F(Ke, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (y) => i.value = !1)
      }, {
        footer: L(() => [
          F(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (y) => i.value = !1)
          }, {
            default: L(() => [...p[9] || (p[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          u.value.length ? (t(), a("ul", Zp, [
            (t(!0), a(z, null, D(u.value, (y) => (t(), a("li", {
              key: y.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => m(y)
              }, [
                (t(), a("svg", Yp, [
                  o("path", {
                    d: x(ie)(y.icon)
                  }, null, 8, Xp)
                ])),
                R(" " + c(y.label), 1)
              ], 8, Jp)
            ]))), 128))
          ])) : (t(), a("p", Qp, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), tv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, av = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, nv = { class: "relative w-full max-w-xl" }, lv = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ov = ["d"], sv = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, rv = ["data-slot"], iv = { class: "px-5 py-4" }, uv = { class: "mb-3 text-sm font-semibold" }, dv = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, cv = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fv = ["d"], mv = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, c4 = /* @__PURE__ */ A({
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
    const l = e, n = K(""), r = k(() => {
      const d = l.linkComponent;
      return typeof d == "string" ? d : Ut(d);
    }), s = Ue({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = k(() => {
      const d = n.value.trim().toLowerCase();
      return l.sections.map((m) => ({
        ...m,
        links: d ? m.links.filter((h) => h.label.toLowerCase().includes(d)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (d, m) => (t(), a("div", {
      class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      o("header", null, [
        o("h1", tv, c(e.title), 1),
        e.description ? (t(), a("p", av, c(e.description), 1)) : $("", !0)
      ]),
      o("div", nv, [
        (t(), a("svg", lv, [
          o("path", {
            d: x(ie)("search")
          }, null, 8, ov)
        ])),
        F(pe, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (h) => n.value = h),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), a("div", sv, [
        (t(!0), a(z, null, D(u.value, (h) => (t(), a("section", {
          key: h.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${h.key}`
        }, [
          o("div", iv, [
            o("h2", uv, c(h.title), 1),
            o("div", dv, [
              (t(!0), a(z, null, D(h.links, (p) => (t(), T(he(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: j(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), a("svg", cv, [
                    o("path", {
                      d: x(ie)(p.icon)
                    }, null, 8, fv)
                  ])),
                  R(" " + c(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, rv))), 128))
      ])) : (t(), a("p", mv, ' Nothing matches "' + c(n.value) + '". ', 1))
    ], 2));
  }
}), pv = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, vv = { class: "flex flex-1 flex-col gap-1 p-4" }, gv = { class: "text-muted-foreground relative text-xs font-medium" }, hv = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, bv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, xv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, yv = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, f4 = /* @__PURE__ */ A({
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
    const l = (n) => typeof n == "number" ? new Intl.NumberFormat().format(n) : String(n ?? "-");
    return (n, r) => (t(), a("div", pv, [
      o("div", vv, [
        o("p", gv, c(e.label), 1),
        e.loading ? (t(), T(Ie, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", hv, " Could not load ")) : (t(), a("span", bv, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(ca, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", xv, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", yv, [
        F(lt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), kv = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, $v = { class: "flex flex-col gap-1 p-4" }, wv = { class: "flex items-start justify-between gap-2" }, Cv = { class: "text-sm font-medium" }, Sv = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Mv = { class: "mt-1 flex flex-wrap items-center gap-2" }, Bv = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, _v = {
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
    const l = e, n = k(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = k(
      () => n.value === null ? "bg-muted text-muted-foreground" : n.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = k(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, u) => (t(), a("div", kv, [
      o("div", $v, [
        o("div", wv, [
          o("p", Cv, c(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", Sv, c(e.caption), 1)) : $("", !0),
        o("div", Mv, [
          e.loading ? (t(), T(Ie, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", Bv, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: j(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", _v, [
        F(lt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), Pv = { class: "relative flex flex-col gap-2" }, zv = ["aria-label"], Av = ["onMouseenter"], jv = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Ov = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Lv = { class: "truncate" }, Vv = { class: "text-sm font-semibold tabular-nums" }, m4 = /* @__PURE__ */ A({
  __name: "SegmentedBar",
  props: {
    segments: {},
    total: { default: null },
    format: {},
    showLegend: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = k(() => l.segments.reduce((h, p) => h + Math.max(0, p.value), 0)), s = k(() => Math.max(l.total ?? r.value, r.value, 1)), i = k(
      () => l.segments.map((h, p) => {
        const y = Math.max(0, h.value) / s.value;
        return {
          ...h,
          color: h.color ?? n[p % n.length],
          share: y,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: h.value > 0 ? `max(2px, ${(y * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h), d = K(null), m = (h) => `${(h * 100).toFixed(h > 0 && h < 0.01 ? 1 : 0)}%`;
    return (h, p) => (t(), a("div", Pv, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ae({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((y) => `${y.label} ${u(y.value)}`).join(", ")
      }, [
        (t(!0), a(z, null, D(i.value, (y, M) => (t(), a("span", {
          key: M,
          class: j(["h-full transition-all", [
            M === 0 ? "rounded-l-full" : "",
            M === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ae({
            width: y.width,
            background: y.color,
            opacity: d.value === null || d.value === M ? 1 : 0.4
          }),
          onMouseenter: (w) => d.value = M,
          onMouseleave: p[0] || (p[0] = (w) => d.value = null)
        }, null, 46, Av))), 128))
      ], 12, zv),
      e.showLegend ? (t(), a("div", jv, [
        (t(!0), a(z, null, D(i.value, (y, M) => (t(), a("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", Ov, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ae({ background: y.color })
            }, null, 4),
            o("span", Lv, c(y.label), 1)
          ]),
          o("span", Vv, c(u(y.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      d.value !== null ? (t(), T(Ye, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: m(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Dv = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Tv = ["data-heading"], Iv = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Fv = { class: "text-muted-foreground truncate" }, Ev = ["aria-label"], p4 = /* @__PURE__ */ A({
  __name: "StatListChart",
  props: {
    rows: {}
  },
  setup(e) {
    const l = e, n = {
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
    return (i, u) => (t(), a("div", Dv, [
      (t(!0), a(z, null, D(s.value, (d) => (t(), a("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), a("div", {
          key: 0,
          class: j(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? n[d.tone] : "text-muted-foreground"])
        }, c(d.label), 3)) : (t(), a("div", Iv, [
          o("span", Fv, c(d.label), 1),
          o("span", {
            class: j(["shrink-0 font-medium tabular-nums", d.tone ? n[d.tone] : "text-foreground"])
          }, c(d.value), 3)
        ])),
        d.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(z, null, D(d.segments, (m, h) => (t(), a("span", {
            key: h,
            class: j(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ae({ width: m.width })
          }, null, 6))), 128))
        ], 8, Ev)) : $("", !0)
      ], 8, Tv))), 128))
    ]));
  }
}), Nv = {
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
}, Rv = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Uv(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Hv(e, l) {
  return l || (e ? Nv[Uv(e)] ?? "neutral" : "neutral");
}
function qv(e, l) {
  return Rv[Hv(e, l)];
}
const ge = /* @__PURE__ */ A({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, n = k(() => qv(l.status, l.tone));
    return (r, s) => (t(), T(He, {
      variant: n.value,
      class: j(l.class)
    }, {
      default: L(() => [
        q(r.$slots, "default", {}, () => [
          R(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Kv = ["data-layout"], Gv = ["src", "alt"], Wv = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Zv = ["src"], Jv = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Yv = ["onMouseenter"], Xv = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Qv = { class: "min-w-0" }, eg = { class: "truncate text-sm font-medium" }, tg = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, ag = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, ng = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, lg = { class: "min-w-0" }, og = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, sg = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, rg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ig = ["d"], ug = ["aria-label"], dg = /* @__PURE__ */ A({
  __name: "CatalogCard",
  props: {
    item: {},
    layout: { default: "grid" }
  },
  emits: ["select", "cart"],
  setup(e, { emit: l }) {
    const n = {
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-destructive",
      info: "bg-info",
      neutral: "bg-muted-foreground/40"
    }, r = e, s = l, i = K(0);
    function u(b) {
      if (typeof b != "string")
        return null;
      const v = b.trim();
      return v === "" ? null : /^(https?:)?\/\//i.test(v) ? v : null;
    }
    const d = k(() => {
      const b = [r.item.image, ...r.item.images ?? []].map(u).filter((v) => v !== null);
      return [...new Set(b)];
    }), m = k(() => d.value[i.value] ?? d.value[0] ?? null), h = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((b) => b[0]?.toUpperCase() ?? "").join("")
    ), p = k(() => {
      const b = r.item.progress;
      if (!b)
        return null;
      const v = Math.max(b.total ?? 100, b.value, 1);
      return `${Math.min(100, Math.max(0, b.value / v * 100)).toFixed(2)}%`;
    }), y = k(() => d.value.length > 1 ? d.value[1] : null), M = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(b) {
      b.stopPropagation(), s("cart", r.item.key);
    }
    return (b, v) => (t(), a("article", {
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
        m.value ? (t(), a("img", {
          key: 0,
          src: m.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, Gv)) : (t(), a("span", Wv, c(h.value), 1)),
        e.layout === "grid" && y.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: y.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Zv)) : $("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), a("div", Jv, [
          (t(!0), a(z, null, D(d.value, (g, f) => (t(), a("span", {
            key: f,
            class: j(["size-1.5 rounded-full", f === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (S) => i.value = f
          }, null, 42, Yv))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: j(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Xv, [
          o("div", Qv, [
            o("p", eg, c(e.item.label), 1),
            e.item.caption ? (t(), a("p", tg, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), a("p", ag, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), T(ge, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", ng, [
          o("div", lg, [
            e.item.price ? (t(), a("p", og, c(e.item.price), 1)) : $("", !0),
            w.value ? (t(), a("p", sg, c(w.value), 1)) : $("", !0)
          ]),
          M.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), a("svg", rg, [
              o("path", {
                d: x(ie)("cart")
              }, null, 8, ig)
            ]))
          ])) : $("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: j(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: ae({ width: p.value })
          }, null, 6)
        ], 8, ug)) : $("", !0)
      ], 2)
    ], 42, Kv));
  }
});
function cg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function fg(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function mg(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const pg = ["data-featured", "data-recommended"], vg = { class: "flex flex-col gap-1" }, gg = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, hg = { key: 0 }, bg = { key: 1 }, xg = { key: 2 }, yg = { key: 3 }, kg = { class: "text-sm font-semibold" }, $g = { class: "flex items-baseline gap-1" }, wg = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Cg = { class: "text-muted-foreground text-sm" }, Sg = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Mg = { class: "text-muted-foreground mt-1 text-xs" }, Bg = { class: "flex flex-1 flex-col gap-2 text-sm" }, _g = { class: "flex min-w-0 items-start gap-2" }, Pg = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, zg = ["d"], Ag = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, jg = ["d"], Og = { class: "capitalize" }, Lg = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Vg = { class: "text-foreground font-medium" }, Dg = { class: "mt-auto flex gap-2 pt-2" }, Tg = /* @__PURE__ */ A({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = k(
      () => n.plan.priceFormatted ?? String(n.plan.price)
    ), i = k(
      () => !!(n.plan.featured || n.plan.recommended)
    ), u = k(() => {
      const m = n.plan.perks ?? {};
      return Object.entries(m).map(([h, p]) => ({
        key: h,
        label: h.replace(/_/g, " "),
        granted: mg(p.value),
        display: fg(p.value)
      }));
    }), d = k(() => n.plan.extraPerks ?? []);
    return (m, h) => (t(), a("article", {
      class: j(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", vg, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", gg, [
          e.plan.recommended ? (t(), a("span", hg, "Recommended")) : e.plan.featured ? (t(), a("span", bg, "Featured")) : $("", !0),
          e.plan.trial ? (t(), a("span", xg, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), a("span", yg, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", kg, c(e.plan.name), 1),
        o("p", $g, [
          o("span", wg, c(s.value), 1),
          o("span", Cg, c(x(cg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", Sg, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", Mg, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", Bg, [
        (t(!0), a(z, null, D(u.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", _g, [
            o("span", {
              class: j(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", Pg, [
                o("path", {
                  d: x(ie)("check")
                }, null, 8, zg)
              ])) : (t(), a("svg", Ag, [
                o("path", {
                  d: x(ie)("x")
                }, null, 8, jg)
              ]))
            ], 2),
            o("span", Og, c(p.label), 1)
          ]),
          p.display ? (t(), a("span", Lg, c(p.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), a(z, null, D(d.value, (p, y) => (t(), a("li", {
          key: `extra-${y}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", Vg, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", Dg, [
        F(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: h[0] || (h[0] = (p) => r("edit", e.plan.id))
        }, {
          default: L(() => [...h[2] || (h[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        F(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: h[1] || (h[1] = (p) => r("delete", e.plan.id))
        }, {
          default: L(() => [...h[3] || (h[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, pg));
  }
}), Ig = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Fg = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Eg = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Ng = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Rg = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, v4 = /* @__PURE__ */ A({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: l }) {
    const n = l;
    return (r, s) => (t(), a("div", {
      class: j(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-grid"
    }, [
      o("header", Ig, [
        o("div", null, [
          e.title ? (t(), a("h1", Fg, c(e.title), 1)) : $("", !0),
          e.description ? (t(), a("p", Eg, c(e.description), 1)) : $("", !0)
        ]),
        F(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: L(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", Ng, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", Rg, [
        (t(!0), a(z, null, D(e.plans, (i) => (t(), T(Tg, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => n("edit", u)),
          onDelete: s[2] || (s[2] = (u) => n("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Ug = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Hg = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, qg = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Kg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Gg = { class: "space-y-1.5" }, Wg = { class: "space-y-1.5" }, Zg = { class: "space-y-1.5" }, Jg = { class: "space-y-1.5" }, Yg = { class: "space-y-1.5" }, Xg = { class: "flex items-center gap-3 text-sm" }, Qg = { class: "flex items-center gap-3 text-sm" }, eh = { class: "flex items-center gap-3 text-sm" }, th = {
  key: 0,
  class: "space-y-1.5"
}, ah = { class: "flex items-center gap-3 text-sm" }, nh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, lh = { class: "space-y-1.5" }, oh = ["value"], sh = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, rh = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, ih = ["id", "value", "onInput"], uh = { class: "space-y-2" }, dh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, ch = ["d"], fh = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ut = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", g4 = /* @__PURE__ */ A({
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
    }), r = e, s = l, i = qe(n());
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
    function m(v, g) {
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
      const g = v ? { ...n(), ...v } : n();
      i.id = g.id, i.name = g.name, i.shortDescription = g.shortDescription ?? "", i.description = g.description ?? "", i.days = g.days, i.price = g.price, i.featured = g.featured ?? !1, i.recommended = g.recommended ?? !1, i.trial = g.trial ?? !1, i.trialDays = g.trialDays ?? 0, i.active = g.active ?? !0, i.perks = { ...g.perks ?? {} }, i.extraPerks = [...g.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    h(r.plan), de(
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
    }), y = k(
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
    function b() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((v) => v.key.trim() !== "")
      });
    }
    return (v, g) => (t(), a("form", {
      class: j(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-editor",
      onSubmit: ce(b, ["prevent"])
    }, [
      o("header", Ug, [
        o("div", null, [
          o("h1", Hg, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          g[13] || (g[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        F(se, {
          type: "button",
          variant: "outline",
          onClick: g[0] || (g[0] = (f) => s("cancel"))
        }, {
          default: L(() => [...g[14] || (g[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", qg, [
        o("section", Kg, [
          g[26] || (g[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", Gg, [
            F(be, { for: "plan-name" }, {
              default: L(() => [...g[15] || (g[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            F(pe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": g[1] || (g[1] = (f) => i.name = f),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", Wg, [
            F(be, { for: "plan-short" }, {
              default: L(() => [...g[16] || (g[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            F(pe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": g[2] || (g[2] = (f) => i.shortDescription = f),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", Zg, [
            F(be, { for: "plan-description" }, {
              default: L(() => [...g[17] || (g[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            ue(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": g[3] || (g[3] = (f) => i.description = f),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: j(ut)
            }, null, 512), [
              [xe, i.description]
            ])
          ]),
          o("div", Jg, [
            F(be, { for: "plan-days" }, {
              default: L(() => [...g[18] || (g[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            ue(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": g[4] || (g[4] = (f) => i.days = f),
              class: j(fh)
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
          o("div", Yg, [
            F(be, { for: "plan-price" }, {
              default: L(() => [...g[20] || (g[20] = [
                R("Price", -1)
              ])]),
              _: 1
            }),
            F(pe, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": g[5] || (g[5] = (f) => i.price = Number(f))
            }, null, 8, ["model-value"])
          ]),
          o("label", Xg, [
            F(x(De), {
              checked: !!i.featured,
              "onUpdate:checked": g[6] || (g[6] = (f) => i.featured = f)
            }, null, 8, ["checked"]),
            g[21] || (g[21] = R(" Featured ", -1))
          ]),
          o("label", Qg, [
            F(x(De), {
              checked: !!i.recommended,
              "onUpdate:checked": g[7] || (g[7] = (f) => i.recommended = f)
            }, null, 8, ["checked"]),
            g[22] || (g[22] = R(" Recommended ", -1))
          ]),
          o("label", eh, [
            F(x(De), {
              checked: !!i.trial,
              "onUpdate:checked": g[8] || (g[8] = (f) => i.trial = f)
            }, null, 8, ["checked"]),
            g[23] || (g[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", th, [
            F(be, { for: "plan-trial-days" }, {
              default: L(() => [...g[24] || (g[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            F(pe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": g[9] || (g[9] = (f) => i.trialDays = Number(f))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", ah, [
            F(x(De), {
              checked: i.active !== !1,
              "onUpdate:checked": g[10] || (g[10] = (f) => i.active = f)
            }, null, 8, ["checked"]),
            g[25] || (g[25] = R(" Active ", -1))
          ]),
          F(se, {
            type: "submit",
            disabled: e.processing
          }, {
            default: L(() => [
              R(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", nh, [
          g[33] || (g[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", lh, [
            F(be, null, {
              default: L(() => [...g[27] || (g[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            F(St, {
              modelValue: p.value,
              "onUpdate:modelValue": g[11] || (g[11] = (f) => p.value = f),
              options: y.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            F(be, { for: "plan-modules-overview" }, {
              default: L(() => [...g[28] || (g[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: j(ut),
              onInput: g[12] || (g[12] = (f) => m(
                "modules",
                f.target.value
              ))
            }, null, 40, oh)
          ]),
          (t(!0), a(z, null, D(e.limits, (f) => (t(), a("div", {
            key: f.key,
            class: "space-y-1.5"
          }, [
            f.kind === "toggle" ? (t(), a("label", sh, [
              F(x(De), {
                checked: !!u(f.key, !1),
                "onUpdate:checked": (S) => d(
                  f.key,
                  S,
                  i.perks?.[f.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + c(f.label), 1)
            ])) : (t(), a(z, { key: 1 }, [
              F(be, {
                for: `plan-limit-${f.key}`
              }, {
                default: L(() => [
                  R(c(f.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              f.hint ? (t(), a("p", rh, c(f.hint), 1)) : $("", !0),
              F(pe, {
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
            F(be, {
              for: `plan-overview-${f.key}`
            }, {
              default: L(() => [...g[30] || (g[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${f.key}`,
              value: i.perks?.[f.key]?.overview ?? "",
              class: j(ut),
              onInput: (S) => m(
                f.key,
                S.target.value
              )
            }, null, 40, ih)
          ]))), 128)),
          o("div", uh, [
            g[32] || (g[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(z, null, D(i.extraPerks ?? [], (f, S) => (t(), a("div", {
              key: S,
              class: "flex items-center gap-2"
            }, [
              F(pe, {
                modelValue: f.key,
                "onUpdate:modelValue": (B) => f.key = B,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(pe, {
                modelValue: f.value,
                "onUpdate:modelValue": (B) => f.value = B,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (B) => C(S)
              }, {
                default: L(() => [
                  (t(), a("svg", dh, [
                    o("path", {
                      d: x(ie)("x")
                    }, null, 8, ch)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            F(se, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: w
            }, {
              default: L(() => [...g[31] || (g[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), mh = { class: "flex flex-col gap-4" }, ph = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, vh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, gh = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, hh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, bh = ["d"], xh = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, yh = ["aria-pressed"], kh = ["aria-pressed"], $h = {
  key: 0,
  class: "flex flex-col gap-2"
}, wh = ["aria-label"], Ch = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Sh = ["aria-pressed", "onClick"], Mh = ["aria-label"], Bh = { class: "text-muted-foreground mr-1 text-xs font-medium" }, _h = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Ph = ["data-slot"], zh = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Ah = { class: "text-muted-foreground text-xs tabular-nums" }, jh = { class: "flex items-center gap-2" }, Oh = ["disabled"], Lh = ["disabled"], Pt = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(""), i = We(e, "modelValue"), u = qe({}), d = qe({});
    de(s, () => y());
    function m(N) {
      const ee = N.trim();
      if (ee === "")
        return null;
      const H = Number(ee);
      return Number.isFinite(H) ? H : null;
    }
    function h() {
      const N = {};
      for (const [ee, H] of Object.entries(d))
        N[ee] = { min: m(H.min), max: m(H.max) };
      return N;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: h() };
    }
    function y() {
      r("filter", p());
    }
    function M(N, ee) {
      u[N] = u[N] === ee ? null : ee, y();
    }
    function w(N) {
      return d[N] ?? { min: "", max: "" };
    }
    function C(N, ee, H) {
      const W = d[N] ?? { min: "", max: "" };
      d[N] = { ...W, [ee]: H }, y();
    }
    function b(N) {
      N.key === "Enter" && (N.preventDefault(), r("scan", s.value.trim()));
    }
    const v = k(() => n.facets.filter((N) => (N.kind ?? "chips") === "chips")), g = k(() => n.facets.filter((N) => N.kind === "range")), f = k(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), S = K(1);
    de(
      () => n.items.map((N) => N.key).join(","),
      () => {
        S.value = 1;
      }
    );
    const B = k(() => {
      const N = n.pageSize;
      return !N || N < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / N));
    }), P = k(() => {
      const N = n.pageSize;
      if (!N || N < 1)
        return n.items;
      const ee = (S.value - 1) * N;
      return n.items.slice(ee, ee + N);
    });
    function G(N) {
      S.value = Math.min(B.value, Math.max(1, N));
    }
    return (N, ee) => (t(), a("div", mh, [
      f.value ? (t(), a("div", ph, [
        o("div", vh, [
          e.searchable ? (t(), a("div", gh, [
            (t(), a("svg", hh, [
              o("path", {
                d: x(ie)("search")
              }, null, 8, bh)
            ])),
            F(pe, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: b
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : $("", !0),
          q(N.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", xh, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, yh),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, kh)
          ])) : $("", !0)
        ]),
        v.value.length || g.value.length ? (t(), a("div", $h, [
          (t(!0), a(z, null, D(v.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", Ch, c(H.label), 1)) : $("", !0),
            (t(!0), a(z, null, D(H.options ?? [], (W) => (t(), a("button", {
              key: W.value,
              type: "button",
              class: j([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === W.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === W.value ? "true" : "false",
              onClick: (Z) => M(H.key, W.value)
            }, c(W.label), 11, Sh))), 128))
          ], 8, wh))), 128)),
          (t(!0), a(z, null, D(g.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Bh, c(H.label ?? H.key), 1),
            F(pe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": w(H.key).min,
              "onUpdate:modelValue": (W) => C(H.key, "min", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            F(pe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": w(H.key).max,
              "onUpdate:modelValue": (W) => C(H.key, "max", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Mh))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), a("p", _h, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: j(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(z, null, D(P.value, (H) => (t(), T(dg, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (W) => r("select", W)),
          onCart: ee[4] || (ee[4] = (W) => r("cart", W))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Ph)),
      e.pageSize && B.value > 1 ? (t(), a("div", zh, [
        o("p", Ah, " Page " + c(S.value) + " of " + c(B.value), 1),
        o("div", jh, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => G(S.value - 1))
          }, " Previous ", 8, Oh),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value >= B.value,
            onClick: ee[6] || (ee[6] = (H) => G(S.value + 1))
          }, " Next ", 8, Lh)
        ])
      ])) : $("", !0)
    ]));
  }
}), Vh = ["aria-label"], Dh = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Th = { class: "min-w-0" }, Ih = { class: "text-base font-semibold" }, Fh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Eh = { class: "flex shrink-0 items-center gap-2" }, Nh = { class: "min-h-0 flex-1 overflow-y-auto" }, Rh = {
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
    const n = e, r = l, s = K(null);
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
      const p = h[0], y = h[h.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), y.focus()) : !m.shiftKey && document.activeElement === y && (m.preventDefault(), p.focus());
    }
    return de(
      () => n.open,
      async (m) => {
        if (m) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Se(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), ve(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (m, h) => (t(), T(Fe, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: h[0] || (h[0] = (p) => r("close"))
          })) : $("", !0)
        ]),
        _: 1
      }),
      F(Ae, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: L(() => [
          e.open ? (t(), a("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: j(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", Dh, [
              o("div", Th, [
                o("h2", Ih, c(e.title), 1),
                e.description ? (t(), a("p", Fh, c(e.description), 1)) : $("", !0)
              ]),
              o("div", Eh, [
                q(m.$slots, "header-actions"),
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
            o("div", Nh, [
              q(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", Rh, [
              q(m.$slots, "footer")
            ])) : $("", !0)
          ], 10, Vh)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Be() {
  return { query: "", selected: {}, ranges: {} };
}
function Uh(e, l) {
  const n = e.metrics?.[l];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Hh(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function At(e, l) {
  const n = l.query.trim().toLowerCase();
  if (n !== "" && ![
    e.key,
    e.sku ?? "",
    e.label,
    e.caption ?? "",
    ...e.facts ?? []
  ].join(" ").toLowerCase().includes(n))
    return !1;
  for (const [r, s] of Object.entries(l.selected ?? {}))
    if (s && (e.facets?.[r] ?? null) !== s)
      return !1;
  for (const [r, s] of Object.entries(l.ranges ?? {}))
    if (!Hh(Uh(e, r), s))
      return !1;
  return !0;
}
function qh(e, l) {
  const n = l.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function at(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Kh = { class: "flex flex-col gap-6 p-4" }, Gh = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Wh = { class: "text-sm font-semibold" }, Zh = { class: "flex flex-wrap items-center gap-1.5" }, Jh = ["aria-pressed", "onClick"], Yh = { class: "text-sm font-semibold" }, Xh = { class: "flex flex-wrap items-center gap-1.5" }, Qh = { key: 0 }, fa = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(""), i = qe({}), u = qe({}), d = k(
      () => n.facets.filter((B) => (B.kind ?? "chips") === "chips")
    ), m = k(() => n.facets.filter((B) => B.kind === "range"));
    function h(B) {
      return B == null ? "" : String(B);
    }
    function p() {
      s.value = n.applied.query ?? "";
      for (const B of Object.keys(i))
        delete i[B];
      for (const [B, P] of Object.entries(n.applied.selected ?? {}))
        i[B] = P;
      for (const B of Object.keys(u))
        delete u[B];
      for (const [B, P] of Object.entries(n.applied.ranges ?? {}))
        u[B] = { min: h(P.min), max: h(P.max) };
    }
    de(
      () => n.open,
      (B) => {
        B && p();
      }
    );
    function y(B) {
      const P = B.trim();
      if (P === "")
        return null;
      const G = Number(P);
      return Number.isFinite(G) ? G : null;
    }
    function M() {
      const B = {};
      for (const [P, G] of Object.entries(u))
        B[P] = { min: y(G.min), max: y(G.max) };
      return B;
    }
    function w() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: M()
      };
    }
    const C = k(() => {
      let B = n.hideSearch || s.value.trim() === "" ? 0 : 1;
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
    function g(B, P, G) {
      const N = u[B] ?? { min: "", max: "" };
      u[B] = { ...N, [P]: G };
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
        n.hideSearch ? { ...Be(), query: n.applied.query } : Be()
      );
    }
    return (B, P) => (t(), T(zt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (G) => r("close"))
    }, {
      footer: L(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: S
        }, " Reset all "),
        F(se, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (G) => r("close"))
        }, {
          default: L(() => [...P[5] || (P[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        F(se, {
          size: "sm",
          onClick: f
        }, {
          default: L(() => [
            P[6] || (P[6] = R(" Apply", -1)),
            C.value ? (t(), a("span", Qh, " (" + c(C.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", Kh, [
          e.hideSearch ? $("", !0) : (t(), a("label", Gh, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            F(pe, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (G) => s.value = G),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(z, null, D(d.value, (G) => (t(), a("section", {
            key: G.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Wh, c(G.label ?? G.key), 1),
            o("div", Zh, [
              (t(!0), a(z, null, D(G.options ?? [], (N) => (t(), a("button", {
                key: N.value,
                type: "button",
                class: j([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[G.key] === N.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[G.key] === N.value ? "true" : "false",
                onClick: (ee) => b(G.key, N.value)
              }, c(N.label), 11, Jh))), 128))
            ])
          ]))), 128)),
          (t(!0), a(z, null, D(m.value, (G) => (t(), a("section", {
            key: G.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Yh, c(G.label ?? G.key), 1),
            o("div", Xh, [
              F(pe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${G.label ?? G.key} from`,
                "model-value": v(G.key).min,
                "onUpdate:modelValue": (N) => g(G.key, "min", String(N))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              F(pe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${G.label ?? G.key} to`,
                "model-value": v(G.key).max,
                "onUpdate:modelValue": (N) => g(G.key, "max", String(N))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), eb = ["aria-disabled"], tb = ["disabled"], ab = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, nb = ["d"], lb = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, ob = ["disabled"], sb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, rb = ["d"], ib = /* @__PURE__ */ A({
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
    const n = We(e, "modelValue"), r = l, s = k(() => n.value <= e.min), i = k(() => e.max !== null && n.value >= e.max);
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
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || s.value,
        "aria-label": "Decrease quantity",
        onClick: m[0] || (m[0] = (h) => u(-1))
      }, [
        (t(), a("svg", ab, [
          o("path", {
            d: x(ie)("minus")
          }, null, 8, nb)
        ]))
      ], 8, tb),
      o("span", lb, c(n.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (h) => u(1))
      }, [
        (t(), a("svg", sb, [
          o("path", {
            d: x(ie)("plus")
          }, null, 8, rb)
        ]))
      ], 8, ob)
    ], 8, eb));
  }
}), ub = { class: "divide-border flex flex-col divide-y" }, db = { class: "min-w-0" }, cb = { class: "truncate text-sm font-medium" }, fb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, mb = { class: "flex shrink-0 items-center gap-2 text-sm" }, pb = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, vb = {
  key: 2,
  class: "font-medium tabular-nums"
}, gb = ["aria-label", "onClick"], hb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, bb = ["d"], xb = /* @__PURE__ */ A({
  __name: "LineItems",
  props: {
    items: {},
    editable: { type: Boolean, default: !1 }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: l }) {
    const n = l;
    function r(s) {
      const i = s.qty;
      if (typeof i == "number" && Number.isFinite(i))
        return i;
      const u = Number(i);
      return Number.isFinite(u) && u > 0 ? u : 1;
    }
    return (s, i) => (t(), a("div", ub, [
      (t(!0), a(z, null, D(e.items, (u) => (t(), a("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", db, [
          o("p", cb, c(u.label), 1),
          u.detail ? (t(), a("p", fb, c(u.detail), 1)) : $("", !0)
        ]),
        o("div", mb, [
          e.editable ? (t(), T(ib, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => n("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), a("span", pb, " ×" + c(u.qty), 1)) : $("", !0),
          u.amount ? (t(), a("span", vb, c(u.amount), 1)) : $("", !0),
          u.status ? (t(), T(ge, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : $("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => n("remove", u.key)
          }, [
            (t(), a("svg", hb, [
              o("path", {
                d: x(ie)("trash")
              }, null, 8, bb)
            ]))
          ], 8, gb)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), yb = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, kb = { class: "border-b px-4 py-3" }, $b = { class: "text-sm font-medium" }, wb = { class: "flex-1 px-4 py-3" }, Cb = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Sb = { class: "text-foreground block font-medium" }, Mb = { class: "mt-1 block" }, Bb = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, _b = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Pb = { class: "tabular-nums" }, zb = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Ab = { class: "text-muted-foreground" }, jb = {
  key: 0,
  class: "tabular-nums"
}, Ob = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Lb = { class: "text-muted-foreground" }, Vb = { class: "tabular-nums" }, Db = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Tb = { class: "tabular-nums" }, Ib = {
  key: 4,
  class: "pt-1"
}, Fb = /* @__PURE__ */ A({
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
    const n = l;
    return (r, s) => (t(), a("aside", yb, [
      o("header", kb, [
        o("h2", $b, c(e.title), 1)
      ]),
      o("div", wb, [
        e.items.length === 0 ? (t(), a("p", Cb, [
          o("span", Sb, c(e.emptyTitle), 1),
          o("span", Mb, c(e.emptyDescription), 1)
        ])) : (t(), T(xb, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => n("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", Bb, [
        e.subtotal ? (t(), a("div", _b, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Pb, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", zb, [
          o("span", Ab, c(e.discountLabel), 1),
          e.discount ? (t(), a("span", jb, c(e.discount), 1)) : $("", !0),
          q(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), a("div", Ob, [
          o("span", Lb, c(e.taxLabel), 1),
          o("span", Vb, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), a("div", Db, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", Tb, c(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), a("div", Ib, [
          q(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Eb = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Nb = { class: "flex flex-col gap-4" }, Rb = { class: "flex flex-wrap items-start justify-between gap-3" }, Ub = { class: "flex items-center gap-2" }, Hb = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, h4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(Be()), i = K(!1), u = We(e, "cart"), d = K(!1), m = k(
      () => n.items.filter((H) => At(H, s.value))
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
    function y(H) {
      return H ? n.parsePrice(H) : 0;
    }
    function M(H, W, Z) {
      return {
        ...H,
        qty: W,
        amount: n.formatMoney(Z * W)
      };
    }
    function w(H) {
      const W = qh(n.items, H);
      W && C(W.key);
    }
    function C(H) {
      const W = n.items.find((U) => U.key === H);
      if (!W || W.status === "out-of-stock")
        return;
      d.value = !1;
      const Z = y(W);
      if (u.value.find((U) => U.key === H)) {
        u.value = u.value.map(
          (U) => U.key === H ? M(U, Number(U.qty ?? 1) + 1, Z) : U
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: W.key,
          label: W.label,
          detail: W.caption ?? null,
          qty: 1,
          amount: n.formatMoney(Z)
        }
      ];
    }
    function b(H, W) {
      const Z = n.items.find((U) => U.key === H), te = y(Z);
      u.value = u.value.map(
        (U) => U.key === H ? M(U, W, te) : U
      );
    }
    function v(H) {
      u.value = u.value.filter((W) => W.key !== H);
    }
    const g = k(
      () => u.value.reduce((H, W) => {
        const Z = n.items.find((te) => te.key === W.key);
        return H + y(Z) * Number(W.qty ?? 1);
      }, 0)
    ), f = k(
      () => n.discountRate > 0 ? Math.round(g.value * n.discountRate) : 0
    ), S = k(
      () => Math.round((g.value - f.value) * n.taxRate)
    ), B = k(
      () => u.value.length ? n.formatMoney(g.value) : null
    ), P = k(
      () => u.value.length && f.value > 0 ? `−${n.formatMoney(f.value)}` : null
    ), G = k(
      () => u.value.length && n.taxRate > 0 ? n.formatMoney(S.value) : null
    ), N = k(
      () => u.value.length ? n.formatMoney(
        g.value - f.value + S.value
      ) : null
    );
    function ee() {
      d.value = !0, r("pay", u.value);
    }
    return (H, W) => (t(), a(z, null, [
      o("div", Eb, [
        o("section", Nb, [
          o("div", Rb, [
            F(Me, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", Ub, [
              x(at)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: W[0] || (W[0] = (Z) => s.value = {
                  ...x(Be)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: W[1] || (W[1] = (Z) => i.value = !0)
              }, [
                W[5] || (W[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                W[6] || (W[6] = R(" Filters ", -1)),
                x(at)(s.value) ? (t(), a("span", Hb, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          F(Pt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: h,
            onSelect: W[2] || (W[2] = (Z) => r("select", Z)),
            onCart: C,
            onScan: w
          }, null, 8, ["search-placeholder", "items"])
        ]),
        F(Fb, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: B.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: G.value,
          total: N.value,
          onQty: b,
          onRemove: v
        }, {
          pay: L(() => [
            q(H.$slots, "pay", {
              cart: u.value,
              paid: d.value,
              pay: ee
            }, () => [
              F(se, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: ee
              }, {
                default: L(() => [
                  R(c(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      F(fa, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: W[3] || (W[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: W[4] || (W[4] = (Z) => s.value = { ...x(Be)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), qb = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Kb = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Gb = ["src", "alt"], Wb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Zb = ["src"], Jb = { class: "flex items-start justify-between gap-3" }, Yb = { class: "text-lg font-semibold tabular-nums" }, Xb = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Qb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, e1 = { class: "grid grid-cols-2 gap-3" }, t1 = { class: "flex flex-col gap-2" }, a1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, b4 = /* @__PURE__ */ A({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(p) {
      let y = 0;
      for (const M of p)
        y = y * 31 + M.charCodeAt(0) >>> 0;
      return y;
    }
    function i(p, y) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((w, C) => ({
        label: w,
        value: Math.max(0, Math.round(p + Math.sin(C + y) * p * 0.18))
      }));
    }
    const u = k(() => n.item?.kind === "unit"), d = k(() => {
      const p = n.item;
      if (!p)
        return [];
      const y = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(y) || 12, s(p.key) % 7);
    }), m = k(() => {
      const p = n.item;
      if (!p)
        return [];
      const y = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(y) || 20, s(p.key) % 5 + 1);
    }), h = k(
      () => !!n.item && !u.value && n.item?.status !== "out-of-stock"
    );
    return (p, y) => (t(), T(zt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: y[1] || (y[1] = (M) => r("close"))
    }, ka({
      default: L(() => [
        e.item ? (t(), a("div", qb, [
          o("div", Kb, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Gb)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", Wb, [
            (t(!0), a(z, null, D(e.item.images, (M, w) => (t(), a("img", {
              key: w,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Zb))), 128))
          ])) : $("", !0),
          o("div", Jb, [
            o("div", null, [
              o("p", Yb, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", Xb, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), T(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", Qb, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", e1, [
            F(tt, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? m.value : d.value
            }, null, 8, ["label", "value", "series"]),
            F(tt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", t1, [
            o("p", a1, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            F(lt, {
              data: u.value ? m.value : d.value,
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
        fn: L(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: y[0] || (y[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), n1 = { class: "flex flex-col gap-10" }, l1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, o1 = { class: "flex flex-col gap-3" }, s1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, r1 = ["src", "alt"], i1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, u1 = ["aria-label", "aria-pressed", "onClick"], d1 = ["src"], c1 = { class: "flex flex-col gap-5" }, f1 = { class: "flex flex-wrap items-start justify-between gap-3" }, m1 = { class: "min-w-0" }, p1 = { class: "text-2xl font-semibold tracking-tight" }, v1 = { class: "text-muted-foreground mt-1 text-sm" }, g1 = { class: "text-2xl font-semibold tabular-nums" }, h1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, b1 = { class: "grid grid-cols-2 gap-3 text-sm" }, x1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, y1 = { class: "mt-1 font-medium" }, k1 = { class: "rounded-lg border p-3" }, $1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, w1 = { class: "mt-1 font-medium" }, C1 = { class: "flex flex-col gap-4" }, S1 = { class: "grid gap-4 sm:grid-cols-2" }, M1 = { class: "bg-card rounded-lg border p-4" }, B1 = { class: "mb-3 text-sm font-medium" }, _1 = /* @__PURE__ */ A({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
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
    const u = k(() => n.item.kind === "unit"), d = k(() => {
      const w = [n.item.image, ...n.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(w)];
    }), m = K(0), h = k(() => {
      const w = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, s(n.item.key) % 7);
    }), p = k(() => {
      const w = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, s(n.item.key) % 5 + 1);
    }), y = k(() => u.value ? p.value : h.value), M = k(() => !u.value && n.item.status !== "out-of-stock");
    return (w, C) => (t(), a("div", n1, [
      o("div", l1, [
        o("div", o1, [
          o("div", s1, [
            d.value[m.value] ? (t(), a("img", {
              key: 0,
              src: d.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, r1)) : $("", !0)
          ]),
          d.value.length > 1 ? (t(), a("div", i1, [
            (t(!0), a(z, null, D(d.value, (b, v) => (t(), a("button", {
              key: b,
              type: "button",
              class: j(["size-16 shrink-0 overflow-hidden rounded-md border", v === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${v + 1}`,
              "aria-pressed": v === m.value ? "true" : "false",
              onClick: (g) => m.value = v
            }, [
              o("img", {
                src: b,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, d1)
            ], 10, u1))), 128))
          ])) : $("", !0)
        ]),
        o("div", c1, [
          o("div", f1, [
            o("div", m1, [
              o("h1", p1, c(e.item.label), 1),
              o("p", v1, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", g1, c(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", h1, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", b1, [
            e.item.sku ? (t(), a("div", x1, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", y1, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", k1, [
              o("dt", $1, c(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", w1, c(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (b) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", C1, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", S1, [
          F(tt, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: y.value
          }, null, 8, ["label", "value", "series"]),
          F(tt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: h.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", M1, [
          o("p", B1, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          F(Yf, {
            data: y.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), P1 = ["href"], x4 = /* @__PURE__ */ A({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = l;
    return (r, s) => (t(), a("div", {
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
        R(" " + c(e.backLabel), 1)
      ], 8, P1),
      F(_1, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), z1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, A1 = ["aria-selected", "onClick"], j1 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, O1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, L1 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, V1 = ["aria-pressed"], D1 = ["aria-pressed"], y4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(n.tabs[0]?.key ?? ""), i = We(e, "layout"), u = K({}), d = K(!1);
    de(
      () => n.tabs.map((b) => b.key).join(","),
      (b) => {
        b.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function m(b) {
      return u.value[b] ?? Be();
    }
    const h = k(
      () => n.tabs.find((b) => b.key === s.value) ?? n.tabs[0] ?? null
    ), p = k(
      () => h.value ? m(h.value.key) : Be()
    ), y = k(() => {
      const b = h.value;
      return b ? b.items.filter((v) => At(v, m(b.key))) : [];
    });
    function M(b) {
      const v = h.value?.key;
      v && (u.value = {
        ...u.value,
        [v]: { ...m(v), query: b }
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
    return (b, v) => (t(), a(z, null, [
      o("div", {
        class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        F(Me, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", z1, [
          (t(!0), a(z, null, D(e.tabs, (g) => (t(), a("button", {
            key: g.key,
            type: "button",
            class: j([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === g.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === g.key ? "true" : "false",
            onClick: (f) => s.value = g.key
          }, c(g.label), 11, A1))), 128))
        ])) : $("", !0),
        o("div", j1, [
          F(pe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: h.value?.searchPlaceholder ?? "Search…",
            "aria-label": h.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": v[0] || (v[0] = (g) => M(String(g)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(at)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: w
          }, " Clear ")) : $("", !0),
          (h.value?.facets ?? []).length > 0 ? (t(), a("button", {
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
            x(at)(p.value) ? (t(), a("span", O1, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", L1, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: v[2] || (v[2] = (g) => i.value = "grid")
            }, " Tiles ", 10, V1),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: v[3] || (v[3] = (g) => i.value = "list")
            }, " List ", 10, D1)
          ])
        ]),
        F(Pt, {
          layout: i.value,
          "onUpdate:layout": v[4] || (v[4] = (g) => i.value = g),
          "page-size": e.pageSize,
          items: y.value,
          onSelect: v[5] || (v[5] = (g) => r("select", g)),
          onCart: v[6] || (v[6] = (g) => r("cart", g))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      F(fa, {
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
}), T1 = { class: "flex flex-col gap-4" }, I1 = { class: "flex flex-col gap-4" }, k4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(Be()), i = k(
      () => n.cards.filter((u) => At(u, s.value))
    );
    return (u, d) => (t(), a("div", {
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      F(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", T1, [
        F(Me, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        F(Pt, {
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
      o("section", I1, [
        F(Me, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        F(ll, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": L(({ value: m }) => [
            F(ge, {
              status: String(m)
            }, {
              default: L(() => [
                R(c(m), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), F1 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, E1 = { class: "text-sm font-medium" }, N1 = ["width", "height", "aria-label"], R1 = { class: "flex items-center gap-2" }, U1 = /* @__PURE__ */ A({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(null), i = K(!1);
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function m(b) {
      const v = s.value;
      if (!v)
        return null;
      const g = v.getBoundingClientRect(), f = v.width / g.width, S = v.height / g.height;
      return {
        x: (b.clientX - g.left) * f,
        y: (b.clientY - g.top) * S
      };
    }
    function h(b) {
      n.disabled || (i.value = !0, u = m(b), s.value?.setPointerCapture(b.pointerId));
    }
    function p(b) {
      if (!i.value || n.disabled)
        return;
      const v = d(), g = m(b);
      !v || !g || !u || (v.strokeStyle = "#111827", v.lineWidth = 2.4, v.lineCap = "round", v.lineJoin = "round", v.beginPath(), v.moveTo(u.x, u.y), v.lineTo(g.x, g.y), v.stroke(), u = g);
    }
    function y() {
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
    }), (b, v) => (t(), a("div", F1, [
      o("p", E1, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: j(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(h, ["prevent"]),
        onPointermove: ce(p, ["prevent"]),
        onPointerup: ce(y, ["prevent"]),
        onPointerleave: ce(y, ["prevent"])
      }, null, 42, N1),
      o("div", R1, [
        F(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: L(() => [...v[0] || (v[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: L(() => [...v[1] || (v[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), H1 = { class: "grid gap-8 lg:grid-cols-2" }, q1 = { class: "flex flex-col gap-3" }, K1 = { class: "text-muted-foreground text-xs" }, G1 = {
  key: 0,
  class: "flex flex-col gap-3"
}, W1 = { class: "flex flex-wrap gap-3" }, Z1 = ["onClick"], J1 = ["src", "alt"], Y1 = {
  key: 1,
  class: "flex flex-col gap-3"
}, X1 = { class: "flex flex-wrap gap-3" }, Q1 = ["onClick"], ex = ["src", "alt"], tx = {
  key: 2,
  class: "flex flex-col gap-4"
}, ax = { class: "flex flex-wrap items-center gap-2" }, nx = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, lx = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, ox = { class: "flex flex-col gap-2" }, sx = ["src"], rx = {
  key: 1,
  class: "text-sm text-neutral-400"
}, ix = ["src"], $4 = /* @__PURE__ */ A({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = K([]), r = K([]), s = K(null), i = K(null), u = K(null), d = K(l.documents[0]?.key ?? "");
    function m(b) {
      try {
        const v = localStorage.getItem(b), g = v ? JSON.parse(v) : [];
        return Array.isArray(g) ? g : [];
      } catch {
        return [];
      }
    }
    fe(() => {
      !l.storageKey || typeof localStorage > "u" || (n.value = m(`${l.storageKey}.signatures`), r.value = m(`${l.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), de(
      n,
      (b) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(b));
      },
      { deep: !0 }
    ), de(
      r,
      (b) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(b));
      },
      { deep: !0 }
    );
    function h(b) {
      const v = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: b
      };
      n.value = [v, ...n.value].slice(0, 8), s.value = v.id;
    }
    async function p(b, v) {
      await bu(b), v(40);
      const g = await new Promise((f, S) => {
        const B = new FileReader();
        B.onload = () => f(String(B.result)), B.onerror = () => S(new Error("Could not read the file")), B.readAsDataURL(b);
      });
      return v(100), { value: g, name: b.name, size: b.size, url: g };
    }
    function y() {
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
      () => n.value.find((b) => b.id === s.value)?.dataUrl ?? null
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
    return (b, v) => (t(), a("div", {
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      F(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", H1, [
        F(U1, {
          label: "Draw a signature",
          onSave: h
        }),
        o("div", q1, [
          v[2] || (v[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", K1, c(x(sa)), 1),
          F(ea, {
            modelValue: u.value,
            "onUpdate:modelValue": v[0] || (v[0] = (g) => u.value = g),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          F(se, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: y
          }, {
            default: L(() => [...v[1] || (v[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", G1, [
        F(Me, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", W1, [
          (t(!0), a(z, null, D(n.value, (g) => (t(), a("button", {
            key: g.id,
            type: "button",
            class: j(["rounded-md border p-2", g.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (f) => s.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, J1)
          ], 10, Z1))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), a("section", Y1, [
        F(Me, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", X1, [
          (t(!0), a(z, null, D(r.value, (g) => (t(), a("button", {
            key: g.id,
            type: "button",
            class: j(["rounded-md border p-2", g.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (f) => i.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, ex)
          ], 10, Q1))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), a("section", tx, [
        o("div", ax, [
          (t(!0), a(z, null, D(e.documents, (g) => (t(), T(se, {
            key: g.key,
            size: "sm",
            variant: d.value === g.key ? "default" : "outline",
            onClick: (f) => d.value = g.key
          }, {
            default: L(() => [
              R(c(g.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", nx, [
          F(df, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", lx, [
            o("div", ox, [
              v[3] || (v[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), a("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, sx)) : (t(), a("p", rx, "Draw and save a signature"))
            ]),
            w.value ? (t(), a("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, ix)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), w4 = "panel.dashboard.hiddenWidgets", ux = /* @__PURE__ */ Symbol("dashboardHide"), dx = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, C4 = /* @__PURE__ */ A({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, n = Xe(ux, null), r = K(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), s = K(!1);
    fe(() => {
      if (n?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        s.value = !0;
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
    const i = k(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? $("", !0) : (t(), a("div", dx, [
      F(ev, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (m) => r.value = m),
        onHide: d[1] || (d[1] = (m) => x(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), cx = { class: "flex flex-col gap-3" }, fx = ["data-slot"], mx = ["aria-pressed", "aria-label", "title"], px = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vx = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, gx = { class: "flex h-8 items-center" }, hx = ["aria-label", "title", "onClick"], bx = ["aria-label", "title", "onClick"], xx = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, yx = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, S4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(n.maskable ? !n.hidden : !0), i = K(/* @__PURE__ */ new Set());
    function u(f) {
      return n.maskable && (f.sensitive ?? !0);
    }
    function d(f) {
      return u(f) && !s.value && !i.value.has(f.key);
    }
    const m = k(() => n.segments.some(d)), h = k(() => n.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, y = k(() => p[n.columns] ?? p[4]), M = k(() => {
      const f = n.columns ?? 4, S = Math.floor(n.segments.length / f) * f;
      return n.segments.slice(0, S);
    }), w = k(() => {
      const f = n.columns ?? 4, S = Math.floor(n.segments.length / f) * f;
      return n.segments.slice(S);
    }), C = k(() => {
      const f = [];
      return M.value.length > 0 && f.push({ key: "packed", joined: !0, segments: M.value }), w.value.length > 0 && f.push({ key: "leftover", joined: !1, segments: w.value }), f;
    });
    function b() {
      const f = m.value === !1;
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
        for (const B of n.segments)
          B.key !== f.key && u(B) && S.add(B.key);
      }
      i.value = S, r("toggle", m.value);
    }
    function g(f) {
      return typeof f == "number" ? new Intl.NumberFormat().format(f) : f;
    }
    return (f, S) => (t(), a("div", cx, [
      (t(!0), a(z, null, D(C.value, (B) => (t(), a("div", {
        key: B.key,
        class: j(["relative shrink-0", B.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": B.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && h.value && B.key === C.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: b
        }, [
          (t(), a("svg", px, [
            m.value ? (t(), a(z, { key: 0 }, [
              S[0] || (S[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              S[1] || (S[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              S[2] || (S[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              S[3] || (S[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(z, { key: 1 }, [
              S[4] || (S[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              S[5] || (S[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, mx)) : $("", !0),
        o("div", {
          class: j(["grid", [B.joined ? "gap-px" : "gap-3", y.value]])
        }, [
          (t(!0), a(z, null, D(B.segments, (P) => (t(), a("div", {
            key: P.key,
            class: j(["bg-card flex flex-col gap-2 p-4", B.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", vx, c(P.label), 1),
            o("div", gx, [
              e.loading ? (t(), T(Ie, {
                key: 0,
                variant: "number"
              })) : d(P) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (G) => v(P)
              }, [
                (t(), a(z, null, D(5, (G) => o("span", {
                  key: G,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, hx)) : u(P) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${g(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (G) => v(P)
              }, c(g(P.value)), 9, bx)) : (t(), a("span", xx, c(g(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), T(ca, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), T(lt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            P.caption || P.comparison && P.trend ? (t(), a("p", yx, c(P.caption ?? P.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, fx))), 128))
    ]));
  }
}), kx = ["aria-label"], $x = ["aria-valuenow", "aria-label"], wx = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Cx = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Sx = ["title"], Mx = { class: "font-medium" }, Bx = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, _x = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Px = { class: "flex items-center justify-between gap-2" }, zx = { class: "text-sm font-semibold" }, Ax = { class: "flex items-center gap-3" }, jx = ["href"], Ox = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Lx = { class: "flex min-w-0 flex-col gap-0.5" }, Vx = { class: "text-sm font-medium" }, Dx = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Tx = {
  key: 1,
  class: "flex flex-col gap-2"
}, Ix = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Fx = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Ex = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, M4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = k(() => n.items.find((C) => !C.done) ?? null), i = k(() => n.items.filter((C) => C.key !== s.value?.key)), u = k(() => n.items.length), d = k(() => n.items.filter((C) => C.done).length), m = k(() => {
      if (!s.value)
        return u.value;
      const C = n.items.findIndex((b) => b.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), h = k(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
    ), p = k(() => {
      const C = n.linkComponent;
      return typeof C == "string" ? C : Ut(C);
    }), y = Ue({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), M = Ue({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), w = Ue({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (C, b) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
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
          style: ae({ width: `${h.value}%` })
        }, null, 4)
      ], 8, $x),
      o("div", wx, [
        o("span", Cx, " Step " + c(m.value) + " of " + c(u.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Mx, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", Bx, c(": " + s.value.detail), 1)) : $("", !0)
        ], 8, Sx),
        s.value?.href ? (t(), T(he(p.value), {
          key: 0,
          href: s.value.href,
          class: j(x(M))
        }, {
          default: L(() => [
            R(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : $("", !0),
        e.skipLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: b[0] || (b[0] = (v) => r("skip"))
        }, c(e.skipLabel), 1)) : $("", !0)
      ])
    ], 8, kx)) : e.items.length ? (t(), a("section", _x, [
      o("div", Px, [
        o("h2", zx, c(e.heading), 1),
        o("div", Ax, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: b[1] || (b[1] = (v) => r("skip"))
          }, c(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, jx)) : $("", !0)
        ])
      ]),
      s.value ? (t(), a("div", Ox, [
        b[2] || (b[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Lx, [
          o("p", Vx, c(s.value.title), 1),
          s.value.detail ? (t(), a("p", Dx, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), T(he(p.value), {
            key: 1,
            href: s.value.href,
            class: j(x(y))
          }, {
            default: L(() => [
              R(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])
      ])) : $("", !0),
      i.value.length ? (t(), a("ul", Tx, [
        (t(!0), a(z, null, D(i.value, (v) => (t(), a("li", {
          key: v.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: j([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              v.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            v.done ? (t(), a("svg", Ix, [...b[3] || (b[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", Fx, [
            o("p", {
              class: j(["text-sm", v.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(v.title), 3),
            !v.done && v.detail ? (t(), a("p", Ex, c(v.detail), 1)) : $("", !0)
          ]),
          !v.done && v.href ? (t(), T(he(p.value), {
            key: 0,
            href: v.href,
            class: j(x(w))
          }, {
            default: L(() => [
              R(c(v.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : $("", !0)
        ]))), 128))
      ])) : $("", !0)
    ])) : $("", !0);
  }
}), Nx = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, Rx = { class: "flex items-center gap-2" }, Ux = { class: "font-medium tabular-nums" }, Hx = { class: "ml-auto flex items-center gap-3" }, B4 = /* @__PURE__ */ A({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const n = l, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), a("div", Nx, [
      o("div", Rx, [
        q(s.$slots, "actions")
      ]),
      o("span", Ux, [
        e.allMatching ? (t(), a(z, { key: 0 }, [
          R(" All " + c(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(z, { key: 1 }, [
          R(c(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", Hx, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (u) => n("select-all-matching"))
        }, " Select all " + c(r(e.total)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (u) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), qx = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Kx = { class: "text-muted-foreground text-xs tabular-nums" }, Gx = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Wx = ["value"], Zx = ["value"], Jx = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Yx = ["disabled"], Xx = ["disabled"], Qx = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, ey = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, ty = ["disabled"], _4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = (m) => new Intl.NumberFormat().format(m), i = k(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), u = k(() => (n.page - 1) * n.perPage + n.rowsOnPage), d = k(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (m, h) => (t(), a("div", qx, [
      o("p", Kx, [
        R(" Showing " + c(s(i.value)) + "-" + c(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(z, { key: 0 }, [
          R("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", Gx, [
        h[4] || (h[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: h[0] || (h[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(z, null, D(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, c(p), 9, Zx))), 128))
        ], 40, Wx)
      ])) : $("", !0),
      o("nav", Jx, [
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
        ])], 8, Yx),
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
        ])], 8, Xx),
        o("span", Qx, c(e.page), 1),
        d.value !== null ? (t(), a("span", ey, " of " + c(s(d.value)), 1)) : $("", !0),
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
        ])], 8, ty)
      ])
    ]));
  }
}), ay = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, ny = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, ly = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, oy = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, P4 = /* @__PURE__ */ A({
  __name: "TableShell",
  setup(e) {
    return (l, n) => (t(), a("div", ay, [
      l.$slots.tabs ? (t(), a("div", ny, [
        q(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), a("div", ly, [
        q(l.$slots, "toolbar")
      ])) : $("", !0),
      q(l.$slots, "default"),
      l.$slots.pagination ? (t(), a("div", oy, [
        q(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), sy = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, ry = ["aria-current"], iy = ["title"], uy = ["aria-current", "onClick"], dy = ["title"], cy = /* @__PURE__ */ A({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = l;
    function r(s) {
      return s >= 1e6 ? (s / 1e6).toFixed(s % 1e6 === 0 ? 0 : 1) + "M" : s >= 1e4 ? Math.round(s / 1e3) + "k" : new Intl.NumberFormat().format(s);
    }
    return (s, i) => (t(), a("div", sy, [
      o("button", {
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => n("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, iy)) : (t(), T(Ie, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, ry),
      (t(!0), a(z, null, D(e.tabs, (u) => (t(), a("button", {
        key: u,
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => n("select", u)
      }, [
        R(c(u) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, c(r(e.counts[u] ?? 0)), 11, dy)) : (t(), T(Ie, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, uy))), 128))
    ]));
  }
}), z4 = /* @__PURE__ */ Ct(cy, [["__scopeId", "data-v-3967c945"]]), fy = { class: "flex flex-col gap-2" }, my = { class: "flex flex-wrap items-center justify-end gap-2" }, py = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, vy = ["placeholder", "title", "aria-label"], gy = ["aria-label"], hy = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, by = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, xy = { class: "text-xs font-medium" }, yy = ["value", "onChange"], ky = ["value"], $y = { class: "grid grid-cols-2 gap-2" }, wy = ["value", "onChange"], Cy = ["value", "onChange"], Sy = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, My = ["value", "onChange"], By = ["value", "onChange"], _y = {
  key: 4,
  class: "flex items-center gap-2"
}, Py = ["aria-checked", "onClick"], zy = { class: "text-xs" }, Ay = ["onClick"], jy = ["value", "onChange"], Oy = ["value"], Ly = ["disabled", "onClick"], Vy = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Dy = ["disabled", "onClick"], Ty = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Iy = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Fy = ["aria-pressed", "aria-label", "title"], Ey = ["aria-label", "title"], Ny = { class: "flex flex-col gap-0.5 p-1" }, Ry = ["onClick"], Uy = ["onClick"], Hy = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, qy = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Ky = ["dusk"], Gy = ["aria-label", "onClick"], A4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = K(n.search);
    de(
      () => n.search,
      (U) => {
        U !== s.value && (s.value = U);
      }
    );
    let i;
    de(s, (U) => {
      clearTimeout(i), i = setTimeout(() => {
        U !== n.search && r("update:search", U);
      }, 250);
    });
    const u = K({ ...n.filters });
    de(
      () => n.filters,
      (U) => {
        u.value = { ...U };
      },
      { deep: !0 }
    );
    const d = k(
      () => n.filterSchema.filter(
        (U) => n.filters[U.key] !== null && n.filters[U.key] !== void 0
      ).length
    ), m = k(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), h = k(() => n.search !== "" || d.value > 0), p = k(() => n.indicators.length ? n.indicators : n.filterSchema.filter((U) => n.filters[U.key] !== null && n.filters[U.key] !== void 0).map((U) => ({
      key: U.key,
      label: `${U.label}: ${String(n.filters[U.key])}`,
      removable: !0
    })));
    function y(U) {
      r("group", U);
    }
    function M(U) {
      r("clear-filter", U);
    }
    function w(U) {
      return U.type === "multiselect";
    }
    function C(U) {
      const I = u.value[U.key];
      return Array.isArray(I) ? I : I == null ? [] : [I];
    }
    function b(U) {
      return C(U).filter(
        (I) => typeof I == "string" || typeof I == "number"
      );
    }
    function v(U) {
      return ee(U).flatMap(
        (I) => typeof I.value == "string" || typeof I.value == "number" ? [{ value: I.value, label: I.label }] : []
      );
    }
    function g(U, I) {
      u.value = { ...u.value, [U.key]: I === "" ? null : I };
    }
    function f(U, I) {
      const Y = u.value[U.key];
      if (typeof Y != "string" || !Y.includes(".."))
        return "";
      const [_, E] = Y.split("..");
      return I === "from" ? _ ?? "" : E ?? "";
    }
    function S(U, I, Y) {
      const _ = I === "from" ? Y : f(U, "from"), E = I === "to" ? Y : f(U, "to");
      u.value = {
        ...u.value,
        [U.key]: _ && E ? `${_}..${E}` : null
      };
    }
    function B(U, I, Y) {
      const _ = I === "from" ? Y : f(U, "from"), E = I === "to" ? Y : f(U, "to");
      u.value = {
        ...u.value,
        [U.key]: _ || E ? `${_}..${E}` : null
      };
    }
    function P(U) {
      r("apply-filters", { ...u.value }), U();
    }
    function G(U, I) {
      u.value[U] = I, r("apply-filters", { ...u.value });
    }
    function N() {
      u.value = Object.fromEntries(n.filterSchema.map((U) => [U.key, null]));
    }
    function ee(U) {
      return U.type === "boolean" ? [
        { value: !0, label: U.trueLabel ?? "Yes" },
        { value: !1, label: U.falseLabel ?? "No" }
      ] : U.type === "daterange" ? Object.entries(U.presets ?? {}).map(([I, Y]) => ({
        value: I,
        label: Y
      })) : (U.options ?? []).map((I) => ({ value: I, label: I }));
    }
    const H = K(new Set(n.hidden));
    de(
      () => n.hidden,
      (U) => {
        H.value = new Set(U);
      },
      { deep: !0 }
    );
    function W(U) {
      const I = new Set(H.value);
      I.has(U) ? I.delete(U) : I.add(U), H.value = I, r("apply-columns", [...I]);
    }
    function Z() {
      H.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function te() {
      s.value = "", r("clear");
    }
    return (U, I) => (t(), a("div", fy, [
      o("div", my, [
        o("div", py, [
          I[5] || (I[5] = o("svg", {
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
            "onUpdate:modelValue": I[0] || (I[0] = (Y) => s.value = Y),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, vy), [
            [xe, s.value]
          ]),
          s.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: I[1] || (I[1] = (Y) => s.value = "")
          }, [...I[4] || (I[4] = [
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
        e.filterSchema.length ? (t(), T(Te, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: L(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", d.value ? "border-primary text-primary" : ""]),
              "aria-label": d.value ? `Filters (${d.value} active)` : "Filters",
              title: "Filters"
            }, [
              I[6] || (I[6] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              d.value ? (t(), a("span", hy, c(d.value), 1)) : $("", !0)
            ], 10, gy)
          ]),
          panel: L(({ close: Y }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              I[7] || (I[7] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: N
              }, " Reset ")
            ]),
            I[10] || (I[10] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", by, [
              (t(!0), a(z, null, D(e.filterSchema, (_) => (t(), a("div", {
                key: _.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", xy, c(_.label), 1),
                w(_) ? (t(), T(St, {
                  key: 0,
                  "model-value": b(_),
                  options: v(_),
                  placeholder: `Any ${_.label.toLowerCase()}`,
                  "onUpdate:modelValue": (E) => u.value[_.key] = E.length ? E : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : _.type === "querybuilder" ? (t(), T(Dr, {
                  key: 1,
                  "model-value": u.value[_.key] ?? null,
                  fields: _.fields ?? {},
                  operators: _.operators ?? {},
                  "max-depth": _.maxDepth ?? 5,
                  onApply: (E) => G(_.key, E)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : _.type === "daterange" ? (t(), a(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[_.key] == "string" && !String(u.value[_.key]).includes("..") ? u.value[_.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (E) => g(_, E.target.value)
                  }, [
                    I[8] || (I[8] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(z, null, D(ee(_), (E) => (t(), a("option", {
                      key: String(E.value),
                      value: E.value
                    }, c(E.label), 9, ky))), 128))
                  ], 40, yy),
                  o("div", $y, [
                    o("input", {
                      type: "date",
                      value: f(_, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (E) => S(
                        _,
                        "from",
                        E.target.value
                      )
                    }, null, 40, wy),
                    o("input", {
                      type: "date",
                      value: f(_, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (E) => S(
                        _,
                        "to",
                        E.target.value
                      )
                    }, null, 40, Cy)
                  ])
                ], 64)) : _.type === "numberrange" ? (t(), a("div", Sy, [
                  o("input", {
                    type: "number",
                    value: f(_, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (E) => B(
                      _,
                      "from",
                      E.target.value
                    )
                  }, null, 40, My),
                  o("input", {
                    type: "number",
                    value: f(_, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (E) => B(
                      _,
                      "to",
                      E.target.value
                    )
                  }, null, 40, By)
                ])) : _.type === "boolean" ? (t(), a("div", _y, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[_.key] === !0,
                    class: j([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[_.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (E) => g(_, u.value[_.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: j(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[_.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, Py),
                  o("span", zy, c(_.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: j([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[_.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (E) => g(_, u.value[_.key] === !1 ? null : !1)
                  }, c(_.falseLabel ?? "No") + " only ", 11, Ay)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[_.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (E) => g(_, E.target.value)
                }, [
                  I[9] || (I[9] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(z, null, D(ee(_), (E) => (t(), a("option", {
                    key: String(E.value),
                    value: E.value
                  }, c(E.label), 9, Oy))), 128))
                ], 40, jy))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !m.value,
              onClick: (_) => P(Y)
            }, " Apply filters ", 8, Ly)
          ]),
          _: 1
        })) : $("", !0),
        F(Te, { "dismiss-on-panel-click": !1 }, {
          trigger: L(() => [...I[11] || (I[11] = [
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
          panel: L(() => [
            I[14] || (I[14] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", Vy, [
              (t(!0), a(z, null, D(e.columns, (Y) => (t(), a("button", {
                key: Y.key,
                type: "button",
                class: j(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", Y.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: Y.locked,
                onClick: (_) => W(Y.key)
              }, [
                H.value.has(Y.key) ? (t(), a("span", Iy)) : (t(), a("svg", Ty, [...I[12] || (I[12] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                R(" " + c(Y.label), 1)
              ], 10, Dy))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: Z
              }, [...I[13] || (I[13] = [
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
        e.reorderable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: I[2] || (I[2] = (Y) => r("toggle-reorder"))
        }, [...I[15] || (I[15] = [
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
        ])], 10, Fy)) : $("", !0),
        e.groups.length ? (t(), T(Te, {
          key: 2,
          align: "end"
        }, {
          trigger: L(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...I[16] || (I[16] = [
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
            ])], 10, Ey)
          ]),
          panel: L(({ close: Y }) => [
            o("div", Ny, [
              o("button", {
                type: "button",
                class: j(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (_) => {
                  y(null), Y();
                }
              }, " No grouping ", 10, Ry),
              (t(!0), a(z, null, D(e.groups, (_) => (t(), a("button", {
                key: _.key,
                type: "button",
                class: j(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === _.key ? "text-primary font-medium" : ""]),
                onClick: (E) => {
                  y(_.key), Y();
                }
              }, c(_.label), 11, Uy))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        h.value ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: te
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), a("span", Hy, "Loading…")) : $("", !0)
      ]),
      p.value.length ? (t(), a("div", qy, [
        (t(!0), a(z, null, D(p.value, (Y) => (t(), a("span", {
          key: Y.key + Y.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${Y.key}`
        }, [
          R(c(Y.label) + " ", 1),
          Y.removable !== !1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${Y.label}`,
            onClick: (_) => M(Y.key)
          }, [...I[17] || (I[17] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Gy)) : $("", !0)
        ], 8, Ky))), 128)),
        p.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: I[3] || (I[3] = (Y) => r("clear-filters"))
        }, " Clear all ")) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Wy = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Zy = { class: "grid gap-2" }, Jy = {
  key: 0,
  class: "text-destructive text-sm"
}, Yy = { class: "flex gap-2" }, j4 = /* @__PURE__ */ A({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const n = l, s = K((() => {
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
    })()), i = K(!1), u = $a(null), d = k(() => u.value?.isLoading.value ?? !1), m = k(() => u.value?.error.value ?? null), h = k(() => u.value?.isSupported.value ?? !1);
    fe(async () => {
      try {
        const { usePasskeyRegister: M } = await import("@laravel/passkeys/vue");
        u.value = M({
          onSuccess: () => {
            s.value = "", i.value = !1, n("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const p = async (M) => {
      M.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, y = () => {
      i.value = !1, s.value = "";
    };
    return (M, w) => h.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", Zy, [
        w[3] || (w[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ue(o("input", {
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
      m.value ? (t(), a("p", Jy, c(m.value), 1)) : $("", !0),
      o("div", Yy, [
        F(se, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: L(() => [
            R(c(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          type: "button",
          variant: "ghost",
          onClick: y
        }, {
          default: L(() => [...w[5] || (w[5] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(se, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = (C) => i.value = !0)
    }, {
      default: L(() => [...w[2] || (w[2] = [
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", Wy, " Passkeys are not supported in this browser. "));
  }
}), Xy = { class: "flex flex-col gap-4" }, Qy = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, O4 = /* @__PURE__ */ A({
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
  emits: ["change"],
  setup(e, { emit: l }) {
    const n = e;
    ct("panelPicker", {
      get base() {
        return n.pickerBase ?? "";
      },
      get returnUrl() {
        return n.returnUrl ?? "";
      }
    }), ct("panelCreateOption", {
      run(m, h) {
        return n.createOption ? n.createOption(m, h) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = k(() => n.nodes.length > 0), i = k(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = k(() => n.errors._conflict);
    function d(m) {
      if (n.upload)
        return (h, p) => n.upload(m, h, p);
    }
    return (m, h) => (t(), a("div", Xy, [
      u.value ? (t(), a("p", Qy, c(u.value), 1)) : $("", !0),
      s.value ? (t(!0), a(z, { key: 1 }, D(e.nodes, (p, y) => (t(), T(ta, {
        key: y,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: h[0] || (h[0] = (M, w) => r("change", M, w))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(z, null, D(e.fields, (p) => (t(), T(Ge, {
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
}), e0 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, t0 = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, a0 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, n0 = ["disabled"], l0 = ["disabled"], o0 = ["disabled"], L4 = /* @__PURE__ */ A({
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
    return (l, n) => (t(), T(Fe, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: L(() => [
          e.show ? (t(), a("div", e0, [
            o("div", t0, [
              n[3] || (n[3] = o("span", {
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
              o("span", a0, c(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => l.$emit("discard"))
              }, c(e.discardLabel), 9, n0)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => l.$emit("cancel"))
              }, c(e.cancelLabel), 9, l0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => l.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, o0)
            ])
          ])) : $("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function V4(e, l = {}) {
  const { warnOnUnload: n = !0 } = l, r = K(dt(e.value)), s = k(() => dt(e.value) !== r.value);
  function i() {
    r.value = dt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(m) {
    s.value && (m.preventDefault(), m.returnValue = "");
  }
  return fe(() => {
    n && window.addEventListener("beforeunload", d);
  }), ve(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function dt(e) {
  return JSON.stringify(e, (l, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const s0 = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, r0 = { class: "text-muted-foreground text-xs font-medium" }, i0 = { class: "text-sm" }, u0 = { key: 1 }, d0 = {
  key: 5,
  class: "max-w-full"
}, c0 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, f0 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, m0 = { key: 6 }, p0 = {
  key: 0,
  class: "divide-y rounded-md border"
}, v0 = { class: "text-muted-foreground truncate font-medium" }, g0 = { class: "col-span-2 break-words" }, h0 = {
  key: 1,
  class: "text-muted-foreground"
}, b0 = {
  key: 7,
  class: "flex flex-col gap-3"
}, x0 = {
  key: 0,
  class: "text-muted-foreground"
}, y0 = ["href"], k0 = { class: "text-sm font-semibold" }, $0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, w0 = ["onClick"], D4 = /* @__PURE__ */ A({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(!n.node.collapsed), i = K(0), u = k(() => n.depth === 0), d = k(() => {
      const M = n.node.columns ?? 1;
      return M >= 3 ? "sm:grid-cols-3" : M === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), m = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, h = k(() => n.node.key ? n.record[n.node.key] : null), p = k(() => {
      const M = h.value;
      if (M == null || M === "")
        return "-";
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, m[n.node.type]);
      let w = String(M);
      return n.node.transform === "upper" && (w = w.toUpperCase()), n.node.transform === "lower" && (w = w.toLowerCase()), [n.node.prefix, w, n.node.suffix].filter(Boolean).join(" ");
    }), y = k(() => {
      const M = typeof h.value == "boolean" ? h.value ? "1" : "" : String(h.value), w = n.node.colors?.[M] ?? n.node.defaultColor ?? "neutral";
      return Mt[w] ?? "outline";
    });
    return (M, w) => {
      const C = bt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", s0, [
        o("dt", r0, c(e.node.label), 1),
        o("dd", i0, [
          e.node.type === "badge" && x(qr)(h.value) ? (t(), T(He, {
            key: 0,
            variant: y.value,
            class: "capitalize"
          }, {
            default: L(() => [
              R(c(h.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", u0, "-")) : e.node.type === "icon" ? (t(), T(cr, {
            key: 2,
            value: h.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(pr, {
            key: 3,
            src: h.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(xr, {
            key: 4,
            value: typeof h.value == "string" ? h.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", d0, [
            e.node.language ? (t(), a("p", c0, c(e.node.language), 1)) : $("", !0),
            o("pre", f0, [
              o("code", null, c(h.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", m0, [
            h.value && typeof h.value == "object" && !Array.isArray(h.value) && Object.keys(h.value).length ? (t(), a("dl", p0, [
              (t(!0), a(z, null, D(h.value, (b, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", v0, c(v), 1),
                o("dd", g0, c(b), 1)
              ]))), 128))
            ])) : (t(), a("span", h0, "-"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", b0, [
            (t(!0), a(z, null, D(Array.isArray(h.value) ? h.value : [], (b, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(z, null, D(e.node.entries ?? [], (g, f) => (t(), T(C, {
                key: f,
                node: g,
                record: b,
                depth: e.depth + 1,
                onAction: w[0] || (w[0] = (S) => r("action", S))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(h.value) || h.value.length === 0 ? (t(), a("span", x0, "-")) : $("", !0)
          ])) : e.node.url ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, c(p.value), 9, y0)) : (t(), a("span", {
            key: 9,
            class: j([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, c(p.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
            onClick: w[1] || (w[1] = (b) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : $("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: j(u.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: j(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: w[2] || (w[2] = (b) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", k0, c(e.node.label), 1),
            e.node.description ? (t(), a("p", $0, c(e.node.description), 1)) : $("", !0)
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (b, v) => (t(), T(C, {
            key: v,
            node: b,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[3] || (w[3] = (g) => r("action", g))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), a(z, null, D(e.node.children ?? [], (b, v) => (t(), T(C, {
          key: v,
          node: b,
          record: e.record,
          depth: e.depth + 1,
          onAction: w[4] || (w[4] = (g) => r("action", g))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: j(u.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (b, v) => (t(), a("button", {
            key: v,
            type: "button",
            class: j([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (g) => i.value = v
          }, c(b.label), 11, w0))), 128))
        ], 2),
        (t(!0), a(z, null, D(e.node.children ?? [], (b, v) => ue((t(), a("div", {
          key: v,
          class: j(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, D(b.children ?? [], (g, f) => (t(), T(C, {
            key: f,
            node: g,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[5] || (w[5] = (S) => r("action", S))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [je, i.value === v]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), C0 = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, S0 = { class: "text-muted-foreground text-sm" }, M0 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, B0 = { class: "flex items-start gap-3" }, _0 = { class: "min-w-0 flex-1" }, P0 = { class: "flex flex-wrap items-center gap-2" }, z0 = { class: "truncate text-sm font-medium" }, A0 = { class: "text-muted-foreground mt-0.5 text-xs" }, j0 = { class: "text-muted-foreground text-xs" }, O0 = { class: "mt-auto flex items-center gap-2" }, L0 = /* @__PURE__ */ A({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = k(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), a("div", C0, [
      o("p", S0, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", M0, [
        (t(!0), a(z, null, D(e.gateways, (d) => (t(), a("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", B0, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ae({ background: d.color }),
              "aria-hidden": "true"
            }, c(d.mark), 5),
            o("div", _0, [
              o("div", P0, [
                o("h3", z0, c(d.label), 1),
                F(ge, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: L(() => [
                    R(c(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), T(ge, {
                  key: 0,
                  status: "offered"
                }, {
                  default: L(() => [...u[0] || (u[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), T(ge, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: L(() => [...u[1] || (u[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.isDefault ? (t(), T(ge, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...u[2] || (u[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.connected && d.mode ? (t(), T(ge, {
                  key: 3,
                  status: d.mode
                }, {
                  default: L(() => [
                    R(c(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", A0, c(d.caption), 1)
            ])
          ]),
          o("p", j0, c(d.methods.join(" · ")), 1),
          o("div", O0, [
            F(se, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", d.key)
            }, {
              default: L(() => [...u[3] || (u[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            F(se, {
              size: "sm",
              variant: "ghost",
              onClick: (m) => r("toggle", d.key)
            }, {
              default: L(() => [
                R(c(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), V0 = { class: "flex flex-col gap-6" }, D0 = { class: "relative" }, T0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, I0 = ["d"], F0 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, E0 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, N0 = { class: "flex flex-wrap items-center gap-2" }, R0 = { class: "text-muted-foreground text-sm" }, U0 = { class: "flex flex-col gap-1 text-sm" }, H0 = ["value"], q0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, K0 = { class: "flex flex-wrap items-center gap-2" }, G0 = {
  key: 1,
  class: "flex items-center gap-2"
}, T4 = /* @__PURE__ */ A({
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
    const l = We(e, "gateways"), n = K(null), r = K(""), s = k(
      () => l.value.find((w) => w.key === n.value) ?? null
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
    function m(w) {
      n.value = w;
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
    function y(w) {
      const C = l.value.find((b) => b.key === w);
      !C || !u(C) || (l.value = l.value.map((b) => ({
        ...b,
        isDefault: b.key === w
      })));
    }
    function M(w) {
      const C = n.value;
      !C || !l.value.find((v) => v.key === C)?.connected || d(C, { mode: w });
    }
    return (w, C) => (t(), a(z, null, [
      o("div", V0, [
        F(Me, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", D0, [
          (t(), a("svg", T0, [
            o("path", {
              d: x(ie)("search")
            }, null, 8, I0)
          ])),
          F(pe, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (b) => r.value = b),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(L0, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: h
        }, null, 8, ["gateways"])) : (t(), a("p", F0, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      F(zt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: C[8] || (C[8] = (b) => n.value = null)
      }, {
        footer: L(() => [
          F(se, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (b) => n.value = null)
          }, {
            default: L(() => [...C[21] || (C[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(se, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (b) => h(s.value.key))
          }, {
            default: L(() => [
              R(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), a("div", E0, [
            o("div", N0, [
              F(ge, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: L(() => [
                  R(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(ge, {
                key: 0,
                status: "offered"
              }, {
                default: L(() => [...C[9] || (C[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(ge, {
                key: 1,
                status: "disabled"
              }, {
                default: L(() => [...C[10] || (C[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), T(ge, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [...C[11] || (C[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), T(ge, {
                key: 3,
                status: s.value.mode
              }, {
                default: L(() => [
                  R(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", R0, c(s.value.caption), 1),
            o("label", U0, [
              C[12] || (C[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, H0)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", q0, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", K0, [
                F(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (b) => p(s.value.key, !0))
                }, {
                  default: L(() => [...C[13] || (C[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                F(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (b) => p(s.value.key, !1))
                }, {
                  default: L(() => [...C[14] || (C[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                F(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: C[3] || (C[3] = (b) => y(s.value.key))
                }, {
                  default: L(() => [...C[15] || (C[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), a("div", G0, [
              F(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (b) => M("test"))
              }, {
                default: L(() => [...C[18] || (C[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              F(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (b) => M("live"))
              }, {
                default: L(() => [...C[19] || (C[19] = [
                  R(" Live ", -1)
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
  const l = K(Rt(e));
  fe(() => {
    l.value = Rt(e);
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
  function n(d) {
    const m = new Set(l.value);
    m.has(d) ? m.delete(d) : m.add(d), l.value = m;
  }
  function r(d) {
    const m = new Set(l.value);
    m.add(d), l.value = m;
  }
  function s(d) {
    const m = new Set(l.value);
    m.delete(d), l.value = m;
  }
  function i(d) {
    l.value = new Set(d);
  }
  function u() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: n, hide: r, show: s, setHidden: i, reset: u };
}
function F4(e) {
  const { config: l, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = K(
    l.driver === "none" ? "off" : "connecting"
  ), m = K(/* @__PURE__ */ new Set());
  let h = /* @__PURE__ */ new Map(), p, y, M, w = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function b(W, Z) {
    h.set(W, { ...h.get(W) ?? {}, ...Z }), !p && (p = setTimeout(() => {
      p = void 0, v();
    }, l.batchMs));
  }
  function v() {
    if (h.size === 0)
      return;
    const W = h;
    h = /* @__PURE__ */ new Map();
    const Z = /* @__PURE__ */ new Set();
    for (const [te, U] of W) {
      const I = n.value.find((Y) => Y[r] === te);
      if (!I) {
        u?.(te, U);
        continue;
      }
      Object.assign(I, U), Z.add(te);
    }
    Z.size !== 0 && (m.value = /* @__PURE__ */ new Set([...m.value, ...Z]), setTimeout(() => {
      const te = new Set(m.value);
      Z.forEach((U) => te.delete(U)), m.value = te;
    }, 1500));
  }
  async function g() {
    if (!(!s || n.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const W = n.value.map((U) => U[r]), { records: Z, at: te } = await s(W, w);
        w = te, d.value = "live";
        for (const U of Z)
          b(U[r], U);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function f() {
    S(), d.value = "live", y = setInterval(g, l.intervalMs);
  }
  function S() {
    clearInterval(y), y = void 0, M?.abort();
  }
  function B() {
    return window.Echo ?? null;
  }
  function P() {
    const W = B();
    if (!W || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const Z = W.private(l.channel);
    for (const te of l.events)
      Z.listen(te, (U) => {
        U?.[r] !== void 0 && b(U[r], U);
      });
    d.value = "live", W.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), W.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function G() {
    C && (B()?.leave(C), C = null);
  }
  function N() {
    l.driver === "poll" && f(), l.driver === "broadcast" && P();
  }
  function ee() {
    S(), G(), clearTimeout(p), p = void 0, h = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (ee(), d.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), N(), i?.()));
  }
  return fe(() => {
    l.driver !== "none" && (N(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ve(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: d, recentlyChanged: m, applyPatch: b, flush: v, pollOnce: g };
}
const W0 = /^[a-z0-9-]+$/, Z0 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function E4(e) {
  wa(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !W0.test(n) || typeof r != "string" || !Z0.test(r) || (l[`--${n}`] = r);
    hi(l);
  });
}
const J0 = { class: "flex items-center gap-0.5" }, Y0 = /* @__PURE__ */ A({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", J0, [
      String(e.value) === "mono" ? (t(), a(z, { key: 0 }, [
        n[0] || (n[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        n[1] || (n[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        n[2] || (n[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(z, { key: 1 }, [
        n[3] || (n[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        n[4] || (n[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        n[5] || (n[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), X0 = /* @__PURE__ */ A({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), T(da, {
      code: "AB-1234",
      style: ae(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Q0 = { class: "flex flex-col gap-2" }, ek = { class: "bg-card rounded-lg border p-4" }, tk = { class: "text-muted-foreground truncate text-xs" }, ak = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, nk = /* @__PURE__ */ A({
  __name: "PkSeoPreview",
  props: {
    field: {},
    values: { default: () => ({}) }
  },
  setup(e) {
    const l = e, n = {
      titleMax: 60,
      titleMin: 30,
      descriptionMax: 160,
      descriptionMin: 70
    }, r = k(() => ({ ...n, ...l.field.limits ?? {} })), s = k(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = k(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), u = k(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = k(() => {
      const C = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return C === "" ? u.value : `${u.value} › ${C.split("/").join(" › ")}`;
    });
    function m(C, b) {
      return C.length <= b ? C : `${C.slice(0, b - 1).trimEnd()}…`;
    }
    const h = k(() => m(s.value, r.value.titleMax)), p = k(() => m(i.value, r.value.descriptionMax));
    function y(C, b, v) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > v ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < b ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = k(
      () => y(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = k(
      () => y(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, b) => (t(), a("div", Q0, [
      o("div", ek, [
        o("p", tk, c(d.value), 1),
        o("p", {
          class: j(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", h.value === "" ? "text-muted-foreground italic" : ""])
        }, c(h.value || "Untitled page"), 3),
        o("p", {
          class: j(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", ak, [
        o("span", {
          class: j(M.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(M.value.note), 3),
        o("span", {
          class: j(w.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(w.value.note), 3)
      ]),
      b[0] || (b[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function lk() {
  we("radio", Ud), we("checkboxlist", Kd), we("tags", Qd), we("colour", cc), we("slider", hc), we("visual-select", zc), we("markdown", $d), we("code", Pd), we("seo-preview", nk), it("swatch", jc), it("voucher-code-box", X0), it("document-colour-mode", Y0);
}
function ma() {
  const e = K(null), l = K(!1);
  let n = null;
  return fe(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      l.value = !0;
      return;
    }
    n = new IntersectionObserver(
      (s) => {
        for (const i of s)
          i.isIntersecting && (l.value = !0, n?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), n.observe(e.value);
  }), ve(() => n?.disconnect()), { el: e, shown: l };
}
const ok = /* @__PURE__ */ A({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: n } = ma();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: j(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ae({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), sk = ["id"], $e = /* @__PURE__ */ A({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, n) => (t(), a("section", {
      id: e.id,
      class: j(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: j(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        F(ok, null, {
          default: L(() => [
            q(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, sk));
  }
}), rk = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, ik = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, uk = {
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
    return (l, n) => e.title || e.body || e.eyebrow ? (t(), a("div", {
      key: 0,
      class: j(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", rk, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), a("h2", ik, c(e.title), 1)) : $("", !0),
      e.body ? (t(), a("p", uk, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
});
function dk() {
  const e = K(null);
  let l = null;
  function n(s) {
    if (!l)
      return;
    const i = l.getBoundingClientRect();
    l.style.setProperty("--pk-px", String((s.clientX - i.left) / i.width)), l.style.setProperty("--pk-py", String((s.clientY - i.top) / i.height));
  }
  function r() {
    l?.style.setProperty("--pk-px", "0.5"), l?.style.setProperty("--pk-py", "0.5");
  }
  return fe(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", n, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ve(() => {
    l?.removeEventListener("pointermove", n), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const ck = { class: "pk-tilt-inner relative h-full" }, fk = /* @__PURE__ */ A({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = dk();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", ck, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(n.$slots, "default")
      ])
    ], 512));
  }
}), mk = { class: "flex flex-col gap-10" }, pk = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, vk = { class: "text-base font-semibold" }, gk = { class: "text-sm text-pretty text-muted-foreground" }, hk = /* @__PURE__ */ A({
  __name: "PkBento",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function l(n) {
      return {
        wide: "sm:col-span-2",
        tall: "sm:row-span-2",
        large: "sm:col-span-2 sm:row-span-2"
      }[n ?? ""] ?? "";
    }
    return (n, r) => (t(), T($e, null, {
      default: L(() => [
        o("div", mk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", pk, [
            (t(!0), a(z, null, D(e.items ?? [], (s, i) => (t(), T(fk, {
              key: i,
              class: j(l(s.span))
            }, {
              default: L(() => [
                o("div", {
                  class: j([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", vk, c(s.title), 1),
                  o("p", gk, c(s.body), 1)
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
}), bk = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, xk = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, yk = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, kk = ["href"], $k = /* @__PURE__ */ A({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, n) => (t(), T($e, null, {
      default: L(() => [
        o("div", bk, [
          o("h2", xk, c(e.title), 1),
          e.body ? (t(), a("p", yk, c(e.body), 1)) : $("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, kk)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), wk = { class: "flex flex-col gap-8" }, Ck = { class: "divide-y rounded-lg border" }, Sk = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Mk = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Bk = /* @__PURE__ */ A({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T($e, { narrow: "" }, {
      default: L(() => [
        o("div", wk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Ck, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", Sk, [
                R(c(r.question) + " ", 1),
                n[0] || (n[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Mk, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), _k = { class: "flex flex-col gap-10" }, Pk = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, zk = { class: "text-sm font-semibold" }, Ak = { class: "text-sm text-pretty text-muted-foreground" }, jk = /* @__PURE__ */ A({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T($e, null, {
      default: L(() => [
        o("div", _k, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Pk, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", zk, c(r.title), 1),
              o("p", Ak, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ok = { class: "flex flex-col items-center gap-6 text-center" }, Lk = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Vk = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, Dk = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Tk = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Ik = ["href"], Fk = ["href"], Ek = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, Nk = /* @__PURE__ */ A({
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
    return (l, n) => (t(), T($e, null, {
      default: L(() => [
        o("div", Ok, [
          e.eyebrow ? (t(), a("p", Lk, c(e.eyebrow), 1)) : $("", !0),
          o("h1", Vk, c(e.title), 1),
          e.body ? (t(), a("p", Dk, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", Tk, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, Ik)) : $("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, Fk)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), a("p", Ek, c(e.note), 1)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Rk = { class: "flex flex-col items-center gap-6" }, Uk = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, Hk = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, qk = /* @__PURE__ */ A({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T($e, { muted: "" }, {
      default: L(() => [
        o("div", Rk, [
          e.title ? (t(), a("p", Uk, c(e.title), 1)) : $("", !0),
          o("ul", Hk, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Kk = { class: "flex flex-col gap-10" }, Gk = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Wk = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, Zk = ["aria-pressed"], Jk = ["aria-pressed"], Yk = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Xk = { class: "grid gap-4 md:grid-cols-3" }, Qk = { class: "flex flex-col gap-1" }, e2 = { class: "text-sm font-semibold" }, t2 = { class: "flex items-baseline gap-1" }, a2 = { class: "text-3xl font-semibold tracking-tight" }, n2 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, l2 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, o2 = { class: "flex flex-col gap-2 text-sm" }, s2 = { class: "text-muted-foreground" }, r2 = ["href"], i2 = /* @__PURE__ */ A({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, n = K(!1), r = k(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, u) => (t(), T($e, { muted: "" }, {
      default: L(() => [
        o("div", Kk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", Gk, [
            o("div", Wk, [
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: u[0] || (u[0] = (d) => n.value = !1)
              }, " Monthly ", 10, Zk),
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: u[1] || (u[1] = (d) => n.value = !0)
              }, " Annual ", 10, Jk)
            ]),
            e.annualNote ? (t(), a("p", Yk, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", Xk, [
            (t(!0), a(z, null, D(e.items ?? [], (d, m) => (t(), a("li", {
              key: m,
              class: j(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", Qk, [
                o("h3", e2, c(d.name), 1),
                o("p", t2, [
                  o("span", a2, c(s(d)), 1),
                  d.period ? (t(), a("span", n2, c(d.period), 1)) : $("", !0)
                ]),
                d.body ? (t(), a("p", l2, c(d.body), 1)) : $("", !0)
              ]),
              o("ul", o2, [
                (t(!0), a(z, null, D(d.features ?? [], (h, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", s2, c(h.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), a("a", {
                key: 0,
                href: d.href ?? "#",
                class: j([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(d.label), 11, r2)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function u2() {
  const e = K(null);
  let l = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), m = d.height + window.innerHeight, h = m <= 0 ? 0 : (window.innerHeight - d.top) / m;
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
      l.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((m) => {
        s = m.some((h) => h.isIntersecting), s && u();
      }), n.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), ve(() => {
    n?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const d2 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, c2 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, f2 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, m2 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, p2 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, v2 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, g2 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, h2 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, b2 = { class: "ml-3 truncate text-xs text-muted-foreground" }, x2 = { class: "flex" }, y2 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, k2 = { class: "min-w-0 flex-1 p-4" }, $2 = { class: "flex flex-col divide-y rounded-md border" }, w2 = /* @__PURE__ */ A({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = u2();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", d2, [
        o("div", c2, [
          o("div", f2, [
            o("h2", m2, c(e.title), 1),
            e.body ? (t(), a("p", p2, c(e.body), 1)) : $("", !0)
          ]),
          o("div", v2, [
            o("div", g2, [
              o("div", h2, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", b2, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", x2, [
                o("div", y2, [
                  (t(), a(z, null, D(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ae({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", k2, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", $2, [
                    (t(!0), a(z, null, D(e.rows, (s) => (t(), a("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: ae({ "--pk-row": String(s) })
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
}), C2 = /* @__PURE__ */ A({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: n, shown: r } = ma(), s = K(0);
    return de(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), m = (h) => {
        const p = Math.min((h - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = l.to;
      };
      requestAnimationFrame(m);
    }), (i, u) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), S2 = { class: "flex flex-col gap-10" }, M2 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, B2 = { class: "order-2 text-sm text-muted-foreground" }, _2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, P2 = /* @__PURE__ */ A({
  __name: "PkStats",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function l(n) {
      const r = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/.exec((n ?? "").trim());
      if (!r)
        return null;
      const s = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: s };
    }
    return (n, r) => (t(), T($e, { muted: "" }, {
      default: L(() => [
        o("div", S2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", M2, [
            (t(!0), a(z, null, D(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", B2, c(s.label), 1),
              o("dd", _2, [
                l(s.value) ? (t(), T(C2, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(z, { key: 1 }, [
                  R(c(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), z2 = { class: "flex flex-col gap-10" }, A2 = { class: "grid gap-6 md:grid-cols-3" }, j2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, O2 = { class: "text-sm font-semibold" }, L2 = { class: "text-sm text-pretty text-muted-foreground" }, V2 = /* @__PURE__ */ A({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T($e, null, {
      default: L(() => [
        o("div", z2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", A2, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", j2, c(s + 1), 1),
              o("h3", O2, c(r.title), 1),
              o("p", L2, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), D2 = { class: "flex flex-col gap-10" }, T2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, I2 = { class: "text-pretty text-sm leading-relaxed" }, F2 = { class: "mt-auto flex items-center gap-3" }, E2 = ["src"], N2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, R2 = { class: "min-w-0" }, U2 = { class: "block truncate text-sm font-medium" }, H2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, q2 = /* @__PURE__ */ A({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), T($e, null, {
      default: L(() => [
        o("div", D2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", T2, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", I2, " “" + c(r.quote) + "” ", 1),
              o("figcaption", F2, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, E2)) : (t(), a("span", N2, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", R2, [
                  o("span", U2, c(r.name), 1),
                  r.role ? (t(), a("span", H2, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), N4 = /* @__PURE__ */ A({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const n = e, r = {
      hero: Nk,
      logos: qk,
      features: jk,
      bento: hk,
      showcase: w2,
      steps: V2,
      stats: P2,
      testimonials: q2,
      pricing: i2,
      faq: Bk,
      cta: $k
    }, s = k(
      () => (n.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), a(z, null, D(s.value, (d) => (t(), T(he(d.component), le({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), K2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, R4 = /* @__PURE__ */ A({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", K2, [
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
      n[0] || (n[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), G2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, U4 = /* @__PURE__ */ A({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", G2, [...n[0] || (n[0] = [
      ht('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), W2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, H4 = /* @__PURE__ */ A({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", W2, [...n[0] || (n[0] = [
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
lk();
const q4 = "0.0.1";
export {
  c4 as AdminDirectory,
  ou as Alert,
  su as AlertDescription,
  ru as AlertTitle,
  Yw as AppPageFooter,
  x$ as AppearanceDrawer,
  mw as Avatar,
  pw as AvatarFallback,
  vw as AvatarImage,
  Mt as BADGE_VARIANTS,
  v$ as BadgeResolver,
  l4 as BarChart,
  gw as Breadcrumb,
  hw as BreadcrumbEllipsis,
  bw as BreadcrumbItem,
  xw as BreadcrumbLink,
  yw as BreadcrumbList,
  kw as BreadcrumbPage,
  $w as BreadcrumbSeparator,
  n$ as BulkActions,
  Nw as Card,
  Rw as CardAction,
  Uw as CardContent,
  Hw as CardDescription,
  qw as CardFooter,
  Kw as CardHeader,
  Gw as CardTitle,
  Fb as CartPanel,
  y4 as CatalogBrowser,
  dg as CatalogCard,
  fa as CatalogFilterSheet,
  Pt as CatalogGrid,
  b4 as CatalogInspect,
  _1 as CatalogItemDetail,
  x4 as CatalogItemView,
  k4 as CatalogRegister,
  h4 as CatalogTill,
  Vp as ChartCard,
  Ye as ChartTooltip,
  po as Checkbox,
  d$ as CheckboxCell,
  c$ as CodeCell,
  xr as ColourCell,
  u4 as ComboChart,
  w4 as DASHBOARD_HIDDEN_STORAGE_KEY,
  ux as DASHBOARD_HIDE_KEY,
  C4 as DashboardShortcuts,
  ll as DataTable,
  zw as Dialog,
  Aw as DialogClose,
  jw as DialogContent,
  Ow as DialogDescription,
  Lw as DialogFooter,
  Vw as DialogHeader,
  Hu as DialogOverlay,
  Dw as DialogScrollContent,
  Tw as DialogTitle,
  Iw as DialogTrigger,
  c4 as DirectoryPage,
  Q$ as DropdownMenu,
  ew as DropdownMenuCheckboxItem,
  tw as DropdownMenuContent,
  aw as DropdownMenuGroup,
  nw as DropdownMenuItem,
  lw as DropdownMenuLabel,
  W4 as DropdownMenuPortal,
  ow as DropdownMenuRadioGroup,
  sw as DropdownMenuRadioItem,
  rw as DropdownMenuSeparator,
  iw as DropdownMenuShortcut,
  uw as DropdownMenuSub,
  dw as DropdownMenuSubContent,
  cw as DropdownMenuSubTrigger,
  fw as DropdownMenuTrigger,
  m$ as EditableCell,
  Ge as FormFieldControl,
  d4 as HeatmapChart,
  ot as ICON_PATHS,
  cr as IconCell,
  pr as ImageCell,
  D4 as InfoNode,
  mu as JPEG_IMAGE_ERROR,
  f$ as KeyValueCell,
  Fw as Label,
  Yf as LineChart,
  xb as LineItems,
  tt as MiniStatCard,
  ww as NavigationMenu,
  Cw as NavigationMenuContent,
  Sw as NavigationMenuIndicator,
  Mw as NavigationMenuItem,
  Bw as NavigationMenuLink,
  _w as NavigationMenuList,
  Pw as NavigationMenuTrigger,
  Ru as NavigationMenuViewport,
  fu as OPAQUE_IMAGE_ERROR,
  T4 as PaymentGatewaySettings,
  L0 as PaymentGateways,
  o4 as PieChart,
  w$ as PkAlertError,
  R4 as PkAuroraBackdrop,
  He as PkBadge,
  hk as PkBento,
  y$ as PkBottomNav,
  Ww as PkBoundary,
  e4 as PkBuilder,
  se as PkButton,
  Zw as PkCard,
  Kd as PkCheckboxList,
  da as PkCodeBox,
  Pd as PkCodeInput,
  cc as PkColourPicker,
  H4 as PkConsoleBackdrop,
  C2 as PkCountUp,
  $k as PkCta,
  Xw as PkDeviceFrame,
  df as PkDocument,
  Te as PkDropdown,
  U4 as PkEditorialBackdrop,
  Bk as PkFaq,
  jk as PkFeatureGrid,
  be as PkFieldLabel,
  ea as PkFileUpload,
  Me as PkHeading,
  Nk as PkHero,
  Ro as PkKeyValue,
  N4 as PkLandingSections,
  qk as PkLogoCloud,
  $d as PkMarkdownInput,
  Ke as PkModal,
  St as PkMultiSelect,
  $$ as PkOtpInput,
  j4 as PkPasskeyRegister,
  C$ as PkPasswordInput,
  i2 as PkPricing,
  ib as PkQtyStepper,
  Dr as PkQueryBuilder,
  Ud as PkRadioGroup,
  Qw as PkRepeater,
  ok as PkReveal,
  Xo as PkRichEditor,
  $e as PkSection,
  Oe as PkSectionHeading,
  w2 as PkShowcase,
  U1 as PkSignaturePad,
  Ie as PkSkeleton,
  zt as PkSlideover,
  hc as PkSlider,
  k$ as PkSpinner,
  P2 as PkStats,
  ge as PkStatusBadge,
  ao as PkStepIndicator,
  V2 as PkSteps,
  jc as PkSwatchPreview,
  Qd as PkTagsInput,
  q2 as PkTestimonials,
  pe as PkTextInput,
  fk as PkTiltCard,
  zc as PkVisualSelect,
  Tg as PlanCard,
  g4 as PlanEditor,
  v4 as PlanGrid,
  i4 as PolarAreaChart,
  r4 as RadarChart,
  g$ as RecordActions,
  O4 as RecordForm,
  u$ as RelationCreateDialog,
  l$ as RelationPanel,
  Nv as STATUS_TONES,
  s4 as ScatterChart,
  ta as SchemaNode,
  m4 as SegmentedBar,
  B4 as SelectionBar,
  Tu as Separator,
  M4 as SetupChecklist,
  oa as ShadcnInput,
  xu as Sheet,
  M$ as SheetClose,
  ku as SheetContent,
  $u as SheetDescription,
  B$ as SheetFooter,
  wu as SheetHeader,
  Cu as SheetTitle,
  _$ as SheetTrigger,
  ev as ShortcutsWidget,
  P$ as Sidebar,
  z$ as SidebarContent,
  A$ as SidebarFooter,
  j$ as SidebarGroup,
  O$ as SidebarGroupAction,
  L$ as SidebarGroupContent,
  V$ as SidebarGroupLabel,
  D$ as SidebarHeader,
  T$ as SidebarInput,
  I$ as SidebarInset,
  F$ as SidebarMenu,
  E$ as SidebarMenuAction,
  N$ as SidebarMenuBadge,
  U$ as SidebarMenuButton,
  H$ as SidebarMenuItem,
  q$ as SidebarMenuSkeleton,
  K$ as SidebarMenuSub,
  G$ as SidebarMenuSubButton,
  W$ as SidebarMenuSubItem,
  Z$ as SidebarProvider,
  J$ as SidebarRail,
  Y$ as SidebarSeparator,
  X$ as SidebarTrigger,
  $4 as SignatureStudio,
  lt as Sparkline,
  Ew as Spinner,
  f4 as StatCard,
  p4 as StatListChart,
  S4 as StatStrip,
  De as Switch,
  sa as TRANSPARENT_IMAGE_HELP,
  _4 as TablePagination,
  P4 as TableShell,
  z4 as TableTabs,
  A4 as TableToolbar,
  n4 as ThemeToggle,
  Lu as Tooltip,
  Vu as TooltipContent,
  R$ as TooltipProvider,
  Du as TooltipTrigger,
  ca as TrendBadge,
  L4 as UnsavedBar,
  iu as alertVariants,
  gi as appearanceVars,
  vt as applyAppearance,
  bu as assertTransparentImage,
  Ue as buttonClasses,
  at as catalogFiltersActive,
  X as cn,
  cg as cycleLabel,
  Be as emptyCatalogFilters,
  no as fieldControl,
  qh as findExactSku,
  fg as formatPerkValue,
  qr as hasBadgeValue,
  o$ as hasFieldControl,
  t4 as hasOptionPreview,
  ie as iconPath,
  gu as imageHasTransparency,
  h$ as initializeAppearance,
  pt as isDark,
  At as matchCatalogItem,
  Uu as navigationMenuTriggerStyle,
  bc as optionPreview,
  S$ as packWidgetColumns,
  mg as perkGranted,
  _t as readAppearance,
  lk as registerBuiltInFieldControls,
  we as registerFieldControl,
  it as registerOptionPreview,
  s$ as registeredFieldTypes,
  xc as registeredOptionPreviews,
  r$ as resetFieldControls,
  a4 as resetOptionPreviews,
  b$ as setAppearancePersister,
  Iu as sidebarMenuButtonVariants,
  qv as statusBadgeVariant,
  Hv as statusTone,
  i$ as toUrl,
  la as useAppearance,
  I4 as useColumnVisibility,
  F4 as useLiveUpdates,
  dk as usePointer,
  ma as useReveal,
  p$ as useSchemaColumns,
  u2 as useScrollProgress,
  Jw as useShellPageFooter,
  nt as useSidebar,
  E4 as useTenantTheme,
  V4 as useUnsavedChanges,
  q4 as version
};
//# sourceMappingURL=index.js.map
