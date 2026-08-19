import './ui.css';
import { defineComponent as j, ref as K, watch as de, useId as ma, computed as k, openBlock as t, createElementBlock as a, normalizeClass as A, createElementVNode as o, createCommentVNode as $, withModifiers as ce, unref as x, Fragment as z, renderList as D, createTextVNode as R, toDisplayString as c, createStaticVNode as ht, renderSlot as q, nextTick as Se, onBeforeUnmount as ve, createBlock as I, Teleport as Fe, createVNode as F, Transition as Ae, withCtx as V, onMounted as fe, normalizeStyle as ae, resolveDynamicComponent as he, resolveComponent as bt, withDirectives as ue, vModelSelect as Ve, vModelDynamic as pa, isRef as va, vModelText as xe, useTemplateRef as ga, mergeProps as ne, normalizeProps as ye, guardReactiveProps as Pe, onErrorCaptured as ha, provide as ct, inject as Je, defineAsyncComponent as Ot, vShow as je, useSlots as ba, markRaw as Ut, withKeys as xa, reactive as He, useModel as Ke, mergeModels as Be, createSlots as ya, shallowRef as ka, watchEffect as $a } from "vue";
import { AlertCircle as wa, EyeOff as Ca, Eye as Sa, X as xt, PanelLeftOpen as Ma, PanelLeftClose as _a, Check as Ht, Circle as Ba, ChevronRight as qt, MoreHorizontal as Pa, ChevronDown as za, Loader2Icon as Aa } from "@lucide/vue";
import { cva as yt } from "class-variance-authority";
import { clsx as ja } from "clsx";
import { twMerge as Oa } from "tailwind-merge";
import { useVModel as Kt, reactiveOmit as re, useMediaQuery as La, useEventListener as Va, defaultDocument as Da } from "@vueuse/core";
import { useForwardPropsEmits as me, DialogRoot as Gt, DialogClose as Ee, DialogOverlay as kt, DialogPortal as $t, DialogContent as wt, DialogDescription as Wt, DialogTitle as Zt, DialogTrigger as Jt, createContext as Ta, Primitive as Ne, TooltipRoot as Ia, TooltipPortal as Fa, TooltipContent as Ea, TooltipArrow as Na, TooltipProvider as Yt, TooltipTrigger as Ra, Separator as Ua, DropdownMenuRoot as Ha, DropdownMenuCheckboxItem as qa, DropdownMenuItemIndicator as Xt, DropdownMenuPortal as Ka, DropdownMenuContent as Ga, DropdownMenuGroup as Wa, useForwardProps as ke, DropdownMenuItem as Za, DropdownMenuLabel as Ja, DropdownMenuRadioGroup as Ya, DropdownMenuRadioItem as Xa, DropdownMenuSeparator as Qa, DropdownMenuSub as el, DropdownMenuSubContent as tl, DropdownMenuSubTrigger as al, DropdownMenuTrigger as ll, AvatarRoot as nl, AvatarFallback as ol, AvatarImage as sl, NavigationMenuViewport as rl, NavigationMenuRoot as il, NavigationMenuContent as ul, NavigationMenuIndicator as dl, NavigationMenuItem as cl, NavigationMenuLink as fl, NavigationMenuList as ml, NavigationMenuTrigger as pl, Label as vl, CheckboxRoot as gl, CheckboxIndicator as hl, SwitchRoot as bl, SwitchThumb as xl } from "reka-ui";
import { DropdownMenuPortal as Y4 } from "reka-ui";
import { usePage as Qt, Link as yl } from "@inertiajs/vue3";
const kl = { class: "w-full border-collapse text-sm" }, $l = { class: "bg-background sticky top-0 z-10" }, wl = { class: "bg-muted/50" }, Cl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Sl = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Ml = ["id", "checked", "indeterminate"], _l = ["onClick"], Bl = {
  key: 0,
  class: "text-xs"
}, Pl = {
  key: 1,
  class: "text-xs opacity-40"
}, zl = { key: 1 }, Al = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, jl = {
  key: 0,
  class: "bg-muted/40"
}, Ol = ["colspan"], Ll = ["aria-expanded", "dusk", "onClick"], Vl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Dl = {
  key: 1,
  dusk: "group-header"
}, Tl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Il = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Fl = {
  key: 1,
  class: "px-3 py-2"
}, El = ["id", "value", "checked", "disabled", "aria-label", "onChange"], Nl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Rl = ["aria-label", "onClick"], Ul = { class: "text-xs" }, Hl = { key: 1 }, ql = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Kl = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, Gl = { key: 0 }, Wl = { class: "text-muted-foreground block text-[10px] font-medium" }, Zl = { class: "font-semibold tabular-nums" }, Jl = { key: 1 }, Yl = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, Xl = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, Ql = { class: "font-medium" }, en = {
  key: 0,
  class: "text-sm"
}, tn = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e;
    function r(O) {
      if (!O || !l.groupBy)
        return "";
      if (O.__group !== void 0 && O.__group !== null)
        return String(O.__group);
      const J = O[l.groupBy.key];
      return J == null || J === "" ? "" : String(J);
    }
    function s(O) {
      return l.groupBy ? O === 0 ? !0 : r(l.rows[O]) !== r(l.rows[O - 1]) : !1;
    }
    function i(O) {
      if (O.__groupTitle)
        return String(O.__groupTitle);
      const J = l.groupBy ? O[l.groupBy.key] : null, Q = J == null || J === "" ? "None" : String(J);
      return !l.groupBy || l.groupBy.titlePrefixed === !1 ? Q : `${l.groupBy.label}: ${Q}`;
    }
    const u = K(/* @__PURE__ */ new Set()), d = K(/* @__PURE__ */ new Set());
    function m(O) {
      return l.groupBy?.collapsible ? u.value.has(O) : !1;
    }
    function b(O) {
      if (!l.groupBy?.collapsible)
        return;
      const J = new Set(d.value);
      J.add(O), d.value = J;
      const Q = new Set(u.value);
      Q.has(O) ? Q.delete(O) : Q.add(O), u.value = Q;
    }
    function p(O) {
      return l.groupBy?.collapsible ? !m(r(l.rows[O])) : !0;
    }
    de(
      () => l.rows,
      (O) => {
        if (!l.groupBy?.collapsible || !l.collapsedGroupsByDefault)
          return;
        const J = new Set(u.value);
        for (const Q of O) {
          const le = r(Q);
          le !== "" && !d.value.has(le) && J.add(le);
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
    function h(O) {
      return y.value === null || M.value !== O ? "" : y.value > O ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function v(O, J) {
      y.value !== null && (J.preventDefault(), M.value = O);
    }
    function g(O) {
      const J = y.value;
      if (y.value = null, M.value = null, J === null || J === O)
        return;
      const Q = l.rows.map((oe) => oe[l.rowKey]), [le] = Q.splice(J, 1);
      Q.splice(O, 0, le), f("reorder", Q);
    }
    const f = n;
    function S(O, J) {
      !l.rowClickable || l.reordering || J.button !== 0 || J.metaKey || J.ctrlKey || J.shiftKey || J.altKey || J.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || f("row-click", O);
    }
    const _ = K(null), P = ma(), G = k(() => l.columns.filter((O) => !l.hidden?.has(O.key)));
    function N(O) {
      const J = O[l.rowKey];
      return J == null || J === "" ? null : J;
    }
    function ee(O) {
      const J = N(O);
      return J !== null && !!l.selected?.has(J);
    }
    function H(O) {
      const J = N(O);
      J !== null && f("toggle-row", J);
    }
    const W = k(
      () => l.rows.map((O) => N(O)).filter((O) => O !== null)
    ), Z = k(
      () => W.value.length > 0 && W.value.every((O) => l.selected?.has(O))
    ), te = k(
      () => !Z.value && W.value.some((O) => l.selected?.has(O))
    );
    function U(O) {
      return O.sortKey ?? O.key;
    }
    function T(O) {
      return l.sort === U(O);
    }
    async function Y(O, J, Q) {
      try {
        await navigator.clipboard.writeText(String(Q)), _.value = `${O}-${J.key}`, setTimeout(() => _.value = null, 1200);
      } catch {
      }
    }
    const B = k(
      () => !!l.summaries && !!l.summaryValues && Object.keys(l.summaries).length > 0
    );
    function E(O) {
      return l.summaries?.[O] ?? null;
    }
    function L(O) {
      const J = l.summaries?.[O], Q = l.summaryValues?.[O];
      if (!J)
        return "";
      if (Q == null)
        return "-";
      const le = J.divideBy ? Q / J.divideBy : Q, oe = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: J.decimals,
        maximumFractionDigits: J.decimals
      }).format(le);
      return `${J.prefix ?? ""}${oe}${J.suffix ?? ""}`;
    }
    return (O, J) => (t(), a("div", {
      class: A(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", kl, [
        o("thead", $l, [
          o("tr", wl, [
            e.reordering ? (t(), a("th", Cl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Sl, [
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
              }, null, 40, Ml)
            ])) : $("", !0),
            (t(!0), a(z, null, D(G.value, (Q) => (t(), a("th", {
              key: Q.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              Q.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (le) => f("sort", U(Q))
              }, [
                R(c(Q.label) + " ", 1),
                T(Q) ? (t(), a("span", Bl, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Pl, "↕"))
              ], 8, _l)) : (t(), a("span", zl, c(Q.label), 1))
            ]))), 128)),
            O.$slots.actions ? (t(), a("th", Al, [...J[3] || (J[3] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        o("tbody", {
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(z, null, D(e.rows, (Q, le) => (t(), a(z, {
            key: N(Q) ?? `row-${le}`
          }, [
            e.groupBy && s(le) ? (t(), a("tr", jl, [
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
                  onClick: (oe) => b(r(Q))
                }, [
                  o("span", Vl, c(m(r(Q)) ? "▸" : "▾"), 1),
                  R(" " + c(i(Q)), 1)
                ], 8, Ll)) : (t(), a("span", Dl, c(i(Q)), 1))
              ], 8, Ol)
            ])) : $("", !0),
            p(le) ? (t(), a("tr", {
              key: 1,
              class: A(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                ee(Q) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                y.value === le ? "opacity-40" : "",
                h(le),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (oe) => w(le, oe),
              onDragover: (oe) => v(le, oe),
              onDrop: ce((oe) => g(le), ["prevent"]),
              onDragend: C,
              onContextmenu: (oe) => f("row-contextmenu", Q, oe),
              onClick: (oe) => S(Q, oe)
            }, [
              e.reordering ? (t(), a("td", Il, [...J[4] || (J[4] = [
                ht('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-0d8c8f99><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-0d8c8f99><circle cx="9" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="18" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="18" r="1.5" data-v-0d8c8f99></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), a("td", Fl, [
                o("input", {
                  id: `${x(P)}-row-${N(Q) ?? le}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: N(Q) ?? void 0,
                  checked: ee(Q),
                  disabled: N(Q) === null,
                  "aria-label": N(Q) === null ? "This row has no id and cannot be selected" : `Select row ${N(Q)}`,
                  onClick: J[2] || (J[2] = ce(() => {
                  }, ["stop"])),
                  onChange: ce((oe) => H(Q), ["stop"])
                }, null, 40, El)
              ])) : $("", !0),
              (t(!0), a(z, null, D(G.value, (oe) => (t(), a("td", {
                key: oe.key,
                class: A(["px-3 py-2 whitespace-nowrap", oe.cellClass])
              }, [
                q(O.$slots, `cell:${oe.key}`, {
                  row: Q,
                  value: Q[oe.key],
                  column: oe
                }, () => [
                  oe.copyable ? (t(), a("span", Nl, [
                    R(c(Q[oe.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${oe.label.toLowerCase()}`,
                      onClick: (Le) => Y(String(Q[e.rowKey]), oe, Q[oe.key])
                    }, [
                      o("span", Ul, c(_.value === `${Q[e.rowKey]}-${oe.key}` ? "✓" : "⧉"), 1)
                    ], 8, Rl)
                  ])) : (t(), a("span", Hl, c(Q[oe.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              O.$slots.actions ? (t(), a("td", ql, [
                q(O.$slots, "actions", { row: Q }, void 0, !0)
              ])) : $("", !0)
            ], 42, Tl)) : $("", !0)
          ], 64))), 128))
        ], 2),
        B.value ? (t(), a("tfoot", Kl, [
          o("tr", null, [
            e.selectable ? (t(), a("td", Gl)) : $("", !0),
            (t(!0), a(z, null, D(e.columns, (Q) => (t(), a(z, {
              key: `s-${Q.key}`
            }, [
              e.hidden?.has(Q.key) ? $("", !0) : (t(), a("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", Q.cellClass])
              }, [
                E(Q.key) ? (t(), a(z, { key: 0 }, [
                  o("span", Wl, c(E(Q.key).label), 1),
                  o("span", Zl, c(L(Q.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            O.$slots.actions ? (t(), a("td", Jl)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), a("div", Yl, [
        J[5] || (J[5] = o("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        q(O.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), a("div", Xl, [
        o("p", Ql, c(e.emptyTitle), 1),
        e.emptyHint ? (t(), a("p", en, c(e.emptyHint), 1)) : $("", !0)
      ])) : $("", !0)
    ], 2));
  }
}), Ct = (e, n) => {
  const l = e.__vccOpts || e;
  for (const [r, s] of n)
    l[r] = s;
  return l;
}, an = /* @__PURE__ */ Ct(tn, [["__scopeId", "data-v-0d8c8f99"]]), ln = ["aria-label"], nn = { class: "border-b px-5 py-4" }, on = { class: "text-base font-semibold" }, sn = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, rn = { class: "px-5 py-4" }, un = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, Ye = /* @__PURE__ */ j({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null);
    let i = null;
    const u = K(!1);
    function d(p) {
      u.value = p.target === p.currentTarget;
    }
    function m(p) {
      u.value && p.target === p.currentTarget && !l.busy && r("close"), u.value = !1;
    }
    function b(p) {
      if (!l.open)
        return;
      if (p.key === "Escape" && !l.busy) {
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
      () => l.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", b), Se(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", b), i?.focus(), i = null);
      }
    ), ve(() => document.removeEventListener("keydown", b)), (p, y) => (t(), I(Fe, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: V(() => [
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
              o("div", nn, [
                o("h2", on, c(e.title), 1),
                e.description ? (t(), a("p", sn, c(e.description), 1)) : $("", !0)
              ]),
              o("div", rn, [
                q(p.$slots, "default")
              ]),
              o("div", un, [
                q(p.$slots, "footer")
              ])
            ], 8, ln)
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
const dn = 160, Te = /* @__PURE__ */ j({
  __name: "PkDropdown",
  props: {
    align: { default: "end" },
    width: { default: "max-w-sm" },
    offset: { default: 4 },
    placement: { default: "bottom" },
    hoverable: { type: Boolean, default: !1 },
    dismissOnPanelClick: { type: Boolean, default: !0 }
  },
  setup(e, { expose: n }) {
    const l = e, r = K(!1), s = K(null), i = K(null), u = K({ top: 0, left: 0, minWidth: 0 }), d = K(null);
    let m = null;
    function b(S) {
      !l.dismissOnPanelClick || S.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await Se(), h());
    }
    function y() {
      m = setTimeout(C, 180);
    }
    async function M() {
      d.value = null, r.value = !r.value, r.value && (await Se(), h());
    }
    async function w(S, _) {
      d.value = { x: S, y: _ }, r.value = !0, await Se(), h();
    }
    function C() {
      r.value = !1, d.value = null;
    }
    function h() {
      const S = s.value, _ = i.value;
      if (!S || !_)
        return;
      const P = _.getBoundingClientRect(), G = 8, N = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : S.getBoundingClientRect();
      let ee, H;
      if (l.placement === "bottom")
        ee = N.bottom + l.offset, ee + P.height > window.innerHeight - G && N.top - P.height - l.offset > G && (ee = N.top - P.height - l.offset), H = l.align === "end" && !d.value ? N.right - P.width : N.left;
      else {
        ee = N.top;
        const W = l.placement === "right", Z = N.right + l.offset + P.width < window.innerWidth - G, te = N.left - l.offset - P.width > G;
        H = (W ? Z || !te : !te && Z) ? N.right + l.offset : N.left - l.offset - P.width;
      }
      H = Math.min(Math.max(G, H), window.innerWidth - P.width - G), ee = Math.min(Math.max(G, ee), window.innerHeight - P.height - G), u.value = { top: ee, left: H, minWidth: Math.max(N.width, dn) };
    }
    function v(S) {
      if (!r.value)
        return;
      const _ = S.target;
      s.value?.contains(_) || i.value?.contains(_) || (_ instanceof Element ? _ : _.parentElement)?.closest("[data-pk-overlay]") || C();
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
        h();
      }
    }
    return fe(() => {
      document.addEventListener("pointerdown", v), document.addEventListener("keydown", g), window.addEventListener("scroll", f, !0), window.addEventListener("resize", f);
    }), ve(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", g), window.removeEventListener("scroll", f, !0), window.removeEventListener("resize", f);
    }), n({ close: C, openAt: w }), (S, _) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: _[2] || (_[2] = (P) => e.hoverable && p()),
      onPointerleave: _[3] || (_[3] = (P) => e.hoverable && y())
    }, [
      o("div", { onClick: M }, [
        q(S.$slots, "trigger", { open: r.value })
      ]),
      (t(), I(Fe, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: V(() => [
            r.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: A([
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
              onPointerenter: _[0] || (_[0] = (P) => e.hoverable && p()),
              onPointerleave: _[1] || (_[1] = (P) => e.hoverable && y()),
              onClick: b
            }, [
              q(S.$slots, "panel", { close: C })
            ], 38)) : $("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), cn = ["disabled"], fn = { class: "py-0.5" }, mn = ["disabled", "onClick"], pn = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vn = ["d"], gn = ["disabled"], hn = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bn = ["d"], xn = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, yn = ["disabled", "onClick"], kn = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $n = ["d"], wn = { class: "text-muted-foreground text-sm" }, Cn = { class: "text-foreground font-medium tabular-nums" }, Sn = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Mn = ["disabled"], _n = { class: "text-muted-foreground text-sm" }, Bn = { class: "text-foreground font-medium tabular-nums" }, Pn = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, zn = ["disabled"], r$ = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(!1), u = k(() => l.allMatching ? l.total : l.count), d = k(() => u.value !== void 0), m = k(() => d.value && u.value === 0), b = k(() => l.actions.filter((g) => !g.destructive)), p = k(() => l.actions.filter((g) => g.destructive)), y = {
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
    function h() {
      i.value = !1, r("export");
    }
    const v = (g) => new Intl.NumberFormat().format(g);
    return (g, f) => (t(), a(z, null, [
      F(Te, null, {
        trigger: V(() => [
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
          ])], 8, cn)
        ]),
        panel: V(() => [
          o("div", fn, [
            (t(!0), a(z, null, D(b.value, (S) => (t(), a("button", {
              key: S.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(S)]),
              disabled: e.busy,
              onClick: (_) => w(S)
            }, [
              (t(), a("svg", pn, [
                o("path", {
                  d: x(ie)(S.icon)
                }, null, 8, vn)
              ])),
              R(" " + c(S.label), 1)
            ], 10, mn))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: f[0] || (f[0] = (S) => i.value = !0)
            }, [
              (t(), a("svg", hn, [
                o("path", {
                  d: x(ie)("download")
                }, null, 8, bn)
              ])),
              f[6] || (f[6] = R(" Export CSV ", -1))
            ], 8, gn)) : $("", !0),
            p.value.length ? (t(), a("div", xn, [
              (t(!0), a(z, null, D(p.value, (S) => (t(), a("button", {
                key: S.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (_) => w(S)
              }, [
                (t(), a("svg", kn, [
                  o("path", {
                    d: x(ie)(S.icon ?? "trash")
                  }, null, 8, $n)
                ])),
                R(" " + c(S.label), 1)
              ], 8, yn))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      F(Ye, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: f[2] || (f[2] = (S) => s.value = null)
      }, {
        footer: V(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: f[1] || (f[1] = (S) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: A([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || m.value,
            onClick: C
          }, c(s.value?.label), 11, Mn)
        ]),
        default: V(() => [
          o("p", wn, [
            f[7] || (f[7] = R(" This will affect ", -1)),
            o("span", Cn, [
              d.value ? (t(), a(z, { key: 1 }, [
                R(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            f[8] || (f[8] = R(" . ", -1))
          ]),
          m.value ? (t(), a("p", Sn, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      F(Ye, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: f[4] || (f[4] = (S) => i.value = !1)
      }, {
        footer: V(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: f[3] || (f[3] = (S) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || m.value,
            onClick: h
          }, " Export CSV ", 8, zn)
        ]),
        default: V(() => [
          o("p", _n, [
            f[9] || (f[9] = R(" This will export ", -1)),
            o("span", Bn, [
              d.value ? (t(), a(z, { key: 1 }, [
                R(c(v(u.value)) + " record" + c(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            f[10] || (f[10] = R(" . ", -1))
          ]),
          m.value ? (t(), a("p", Pn, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), An = { class: "bg-card overflow-hidden rounded-lg border" }, jn = { class: "pk-scroll w-full overflow-x-auto" }, On = { class: "w-full border-collapse text-sm" }, Ln = { class: "bg-muted/40" }, Vn = { class: "divide-y" }, Dn = { key: 0 }, Tn = ["colspan"], In = { key: 1 }, Fn = ["colspan"], En = ["href"], Nn = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Rn = ["disabled"], Un = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, Hn = ["href"], i$ = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(() => l.columns.filter((u) => u.type !== "image"));
    function i(u, d) {
      return d == null || d === "" ? "-" : u.type === "date" || u.type === "datetime" ? new Date(String(d)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...u.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof d == "number" ? new Intl.NumberFormat().format(d) : String(d);
    }
    return (u, d) => (t(), a("div", An, [
      o("div", jn, [
        o("table", On, [
          o("thead", Ln, [
            o("tr", null, [
              (t(!0), a(z, null, D(s.value, (m) => (t(), a("th", {
                key: m.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, c(m.label), 1))), 128))
            ])
          ]),
          o("tbody", Vn, [
            e.loading && e.rows.length === 0 ? (t(), a("tr", Dn, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, Tn)
            ])) : e.loaded && e.rows.length === 0 ? (t(), a("tr", In, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, c(e.emptyText), 9, Fn)
            ])) : $("", !0),
            (t(!0), a(z, null, D(e.rows, (m, b) => (t(), a("tr", {
              key: m.id ?? b,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), a(z, null, D(s.value, (p) => (t(), a("td", {
                key: p.key,
                class: A(["px-3 py-2 whitespace-nowrap", [
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
                  }, c(i(p, m[p.key])), 9, En)) : (t(), a(z, { key: 1 }, [
                    R(c(i(p, m[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), a("div", Nn, [
        o("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (m) => r("load", e.nextCursor))
        }, c(e.loading ? "Loading…" : "Load more"), 9, Rn)
      ])) : e.capped ? (t(), a("p", Un, [
        R(" Showing the first " + c(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), a("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, Hn)) : (t(), a(z, { key: 1 }, [
          R("Open the full list to search or filter the rest.")
        ], 64))
      ])) : $("", !0)
    ]));
  }
}), qn = ["title"], Kn = ["aria-label"], Gn = ["d"], Wn = { class: "sr-only" }, Zn = /* @__PURE__ */ j({
  __name: "IconCell",
  props: {
    value: {},
    icons: { default: () => ({}) },
    colors: { default: () => ({}) },
    labels: { default: () => ({}) },
    defaultIcon: { default: "dot" }
  },
  setup(e) {
    const n = e, l = {
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
    }, s = k(() => typeof n.value == "boolean" ? n.value ? "1" : "" : n.value === null || n.value === void 0 ? "" : String(n.value)), i = k(() => n.icons[s.value] ?? n.defaultIcon), u = k(() => l[i.value] ?? l.dot), d = k(() => r[n.colors[s.value] ?? "neutral"] ?? r.neutral), m = k(() => n.labels[s.value] ?? String(n.value ?? "-"));
    return (b, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: m.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: A(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": m.value
      }, [
        o("path", { d: u.value }, null, 8, Gn)
      ], 10, Kn)),
      o("span", Wn, c(m.value), 1)
    ], 8, qn));
  }
}), Jn = ["src"], Yn = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Xn = /* @__PURE__ */ j({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const n = e, l = K(!1);
    de(
      () => n.src,
      () => l.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = k(() => {
      const u = typeof n.src == "string" ? n.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = k(() => {
      const u = typeof n.fallbackText == "string" ? n.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), a("span", {
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !l.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (m) => l.value = !0)
      }, null, 40, Jn)) : e.fallback === "initials" ? (t(), a(z, { key: 1 }, [
        R(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", Yn, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
    ], 2));
  }
}), Qn = {
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
}, lo = /* @__PURE__ */ j({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = k(() => {
      const s = (n.value ?? "").trim();
      return l.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", Qn, "-")) : (t(), a("span", eo, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ae({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", to, c(r.value), 1)) : (t(), a("span", ao, c(r.value), 1))
    ]));
  }
}), no = { class: "inline-flex items-center" }, oo = ["checked", "aria-label"], so = { class: "sr-only" }, u$ = /* @__PURE__ */ j({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const n = e, l = k(() => {
      const s = n.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = k(
      () => l.value ? n.trueLabel ?? "Yes" : n.falseLabel ?? "No"
    );
    return (s, i) => (t(), a("span", no, [
      o("input", {
        type: "checkbox",
        checked: l.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, oo),
      o("span", so, c(r.value), 1)
    ]));
  }
}), ro = {
  key: 0,
  class: "text-muted-foreground"
}, io = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, d$ = /* @__PURE__ */ j({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const n = e, l = k(
      () => String(n.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => l.value ? (t(), a("code", io, c(l.value), 1)) : (t(), a("span", ro, "—"));
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
function Xe(e = {}) {
  const n = e.variant ?? "default", l = e.size ?? "default";
  return [uo, co[n], fo[l], e.class].filter(Boolean).join(" ");
}
const se = /* @__PURE__ */ j({
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
    const n = e, l = k(
      () => Xe({ variant: n.variant, size: n.size, class: n.class })
    ), r = k(() => n.as === "button" ? n.type : void 0);
    return (s, i) => (t(), I(he(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: A(l.value)
    }, {
      default: V(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), mo = { class: "flex items-center gap-2" }, po = ["onUpdate:modelValue", "onChange"], vo = ["value"], go = ["onUpdate:modelValue"], ho = ["value"], bo = ["onUpdate:modelValue"], xo = ["onUpdate:modelValue", "multiple"], yo = ["value"], ko = ["onUpdate:modelValue", "type"], $o = ["aria-label", "onClick"], wo = { class: "flex items-center gap-2" }, Co = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = () => ({ logic: "and", rules: [] }), i = K(l.modelValue ? structuredClone(l.modelValue) : s());
    de(
      () => l.modelValue,
      (f) => {
        i.value = f ? structuredClone(f) : s();
      }
    );
    const u = (f) => "rules" in f, d = k(() => Object.keys(l.fields));
    function m(f) {
      const S = f ? l.fields[f]?.kind : void 0;
      return S ? l.operators[S] ?? [] : [];
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
    const h = k(() => l.depth + 1 < l.maxDepth);
    function v() {
      i.value = s(), p(), r("apply", null);
    }
    function g() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (f, S) => {
      const _ = bt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", mo, [
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
          u(P) ? (t(), I(_, {
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
              }, c(e.fields[N].label), 9, vo))), 128))
            ], 40, po), [
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
              }, c(b[N] ?? N), 9, ho))), 128))
            ], 40, go), [
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
            ])], 40, bo)), [
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
              }, c(N), 9, yo))), 128))
            ], 40, xo)), [
              [Ve, P.value]
            ]) : ue((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (N) => P.value = N,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, ko)), [
              [pa, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(P) ? "group" : "rule"}`,
            onClick: (N) => w(G)
          }, " × ", 8, $o)
        ]))), 128)),
        o("div", wo, [
          F(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: y
          }, {
            default: V(() => [...S[4] || (S[4] = [
              R("Add rule", -1)
            ])]),
            _: 1
          }),
          h.value ? (t(), I(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: V(() => [...S[5] || (S[5] = [
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
              default: V(() => [...S[6] || (S[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            F(se, {
              type: "button",
              size: "sm",
              onClick: g
            }, {
              default: V(() => [...S[7] || (S[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : $("", !0)
        ])
      ], 2);
    };
  }
}), So = {
  key: 0,
  class: "font-mono text-xs"
}, Mo = {
  key: 1,
  class: "text-muted-foreground"
}, _o = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, c$ = /* @__PURE__ */ j({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const n = e, l = k(
      () => n.value && typeof n.value == "object" && !Array.isArray(n.value) ? Object.keys(n.value) : null
    );
    return (r, s) => l.value === null && e.value != null ? (t(), a("span", So, c(e.value), 1)) : !l.value || l.value.length === 0 ? (t(), a("span", Mo, "—")) : (t(), a("span", _o, c(l.value.length) + " " + c(l.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Bo = ["aria-checked", "aria-label", "title", "disabled"], Po = ["value", "disabled"], zo = ["value"], f$ = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(() => l.value === !0 || l.value === 1 || l.value === "1"), i = k(() => l.busy || l.disabled), u = k(
      () => s.value ? l.onLabel ?? "Enabled" : l.offLabel ?? "Disabled"
    );
    function d() {
      i.value || r("change", !s.value);
    }
    function m(b) {
      const p = b.target.value;
      p !== String(l.value ?? "") && r("change", p);
    }
    return (b, p) => e.type === "toggle" ? (t(), a("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: A(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ce(d, ["stop"])
    }, [
      o("span", {
        class: A(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Bo)) : (t(), a("select", {
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
      }, c(y), 9, zo))), 128))
    ], 40, Po));
  }
}), Ao = ["data-variant"], jo = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ue = /* @__PURE__ */ j({
  __name: "PkBadge",
  props: {
    variant: { default: "default" },
    class: {}
  },
  setup(e) {
    const n = e, l = {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white dark:bg-destructive/60",
      outline: "text-foreground",
      success: "border-transparent bg-success text-success-foreground",
      warning: "border-transparent bg-warning text-warning-foreground",
      info: "border-transparent bg-info text-info-foreground"
    }, r = k(
      () => [jo, l[n.variant], n.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, Ao));
  }
}), St = {
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
  const n = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && n.push("text-right"), e.align === "center" && n.push("text-center"), n.join(" ")) : (e.key === "name" && n.push("font-medium"), e.mono && n.push("font-mono text-xs"), e.muted && n.push("text-muted-foreground"), e.transform === "upper" && n.push("uppercase"), e.transform === "lower" && n.push("lowercase"), e.align === "right" && n.push("text-right"), e.align === "center" && n.push("text-center"), n.join(" "));
}
function m$(e) {
  const n = k(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: Lo(s)
    }))
  ), l = k(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = l.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), m = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return St[m] ?? "outline";
  }
  return { columns: n, byKey: l, badgeVariant: r };
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
}, To = ["d"], Io = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Fo = ["disabled", "onClick"], Eo = {
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
}, p$ = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(() => l.busy || l.disabled), i = k(() => String(l.value ?? "")), u = k(() => `Select ${(l.label || "value").trim().toLowerCase()}`);
    function d(y) {
      return typeof y == "boolean" ? y ? "1" : "" : String(y ?? "");
    }
    function m(y) {
      const M = l.colors[d(y)] ?? l.defaultColor ?? "neutral";
      return St[M] ?? "outline";
    }
    function b(y) {
      return l.options[y] ?? y;
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
      e.disabled ? (t(), I(Ue, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: V(() => [
          R(c(b(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), I(Te, {
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
            F(Ue, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: V(() => [
                R(c(b(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", Do, [
              o("path", {
                d: x(ie)("chevron-down")
              }, null, 8, To)
            ]))
          ], 8, Vo)
        ]),
        panel: V(({ close: w }) => [
          o("div", Io, c(u.value), 1),
          (t(!0), a(z, null, D(e.options, (C, h) => (t(), a("button", {
            key: h,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (v) => p(String(h), w)
          }, [
            F(Ue, {
              variant: m(h),
              class: "capitalize"
            }, {
              default: V(() => [
                R(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(h) === i.value ? (t(), a("svg", Eo, [
              o("path", {
                d: x(ie)("check")
              }, null, 8, No)
            ])) : (t(), a("span", Ro))
          ], 8, Fo))), 128))
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
}, ts = ["d"], v$ = /* @__PURE__ */ j({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: n, emit: l }) {
    const r = e, s = l, i = K(null), u = K(null), d = k(() => r.groups.flatMap((v) => v.actions)), m = k(() => d.value.filter((v) => !v.destructive)), b = k(() => d.value.filter((v) => v.destructive)), p = {
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
    function h(v) {
      if (v.key !== "ArrowDown" && v.key !== "ArrowUp")
        return;
      const g = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (g.length === 0)
        return;
      v.preventDefault();
      const f = g.indexOf(document.activeElement), S = v.key === "ArrowDown" ? 1 : -1, _ = (f + S + g.length) % g.length;
      g[_]?.focus();
    }
    return n({ openContextMenu: C }), (v, g) => (t(), a("div", Uo, [
      M.value ? $("", !0) : (t(), I(Te, {
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
            (t(), a("svg", qo, [
              o("path", {
                d: x(ie)("more-vertical")
              }, null, 8, Ko)
            ]))
          ], 8, Ho)
        ]),
        panel: V(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: h
          }, [
            (t(!0), a(z, null, D(m.value, (f) => (t(), a(z, {
              key: f.key
            }, [
              f.link ? (t(), a("a", {
                key: 0,
                href: f.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", y(f)])
              }, [
                (t(), a("svg", Wo, [
                  o("path", {
                    d: x(ie)(f.icon)
                  }, null, 8, Zo)
                ])),
                R(" " + c(f.label), 1)
              ], 10, Go)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", y(f)]),
                disabled: e.busy === f.key,
                onClick: (S) => w(f)
              }, [
                (t(), a("svg", {
                  class: A(["size-4 shrink-0", e.busy === f.key && "animate-pulse"]),
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
                  }, null, 8, Yo)
                ], 2)),
                R(" " + c(f.label), 1)
              ], 10, Jo))
            ], 64))), 128)),
            b.value.length ? (t(), a("div", Xo, [
              (t(!0), a(z, null, D(b.value, (f) => (t(), a("button", {
                key: f.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === f.key,
                onClick: (S) => w(f)
              }, [
                (t(), a("svg", es, [
                  o("path", {
                    d: x(ie)(f.icon ?? "trash")
                  }, null, 8, ts)
                ])),
                R(" " + c(f.label), 1)
              ], 8, Qo))), 128))
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
}, Qe = 12, et = 20, as = [0, 0.25, 0.5, 0.75, 1], Mt = "alxtexhpanel.appearance", Ce = {
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
const ls = "alxtexhpanel.appearance.vars";
function pt(e) {
  return e.theme === "dark";
}
const Vt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function ns(e) {
  const n = ft[e.primary] ?? ft.slate, l = mt[e.surface] ?? mt.neutral, r = l.chroma, s = l.hue, u = pt(e) ? {
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
    "--primary": n.value,
    "--primary-foreground": n.foreground,
    "--ring": n.value,
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
    const e = localStorage.getItem(Mt);
    if (!e)
      return { ...Ce };
    const n = { ...Ce, ...JSON.parse(e) };
    n.theme === "system" && (n.theme = Ce.theme);
    const l = { small: 14, normal: 16, large: 18 };
    return typeof n.fontSize == "string" && (n.fontSize = l[n.fontSize] ?? Ce.fontSize), (typeof n.fontSize != "number" || Number.isNaN(n.fontSize) || n.fontSize < Qe || n.fontSize > et) && (n.fontSize = Ce.fontSize), n;
  } catch {
    return { ...Ce };
  }
}
function g$(e) {
  const n = _t(), l = e ? { ...n, ...e } : n;
  if (ze.value = l, vt(l), e)
    try {
      localStorage.setItem(Mt, JSON.stringify(l));
    } catch {
    }
}
let ea = null;
function h$(e) {
  ea = e;
}
let ta = {};
function os(e) {
  if (ta = e, !(typeof document > "u") && !_t().primaryChosen)
    for (const [n, l] of Object.entries(e))
      document.documentElement.style.setProperty(n, l);
}
function vt(e) {
  if (typeof document > "u")
    return;
  const n = document.documentElement, l = { ...ns(e), ...e.primaryChosen ? {} : ta };
  n.classList.toggle("dark", pt(e));
  for (const [r, s] of Object.entries(l))
    n.style.setProperty(r, s);
  n.dataset.sidebar = e.sidebarSide, n.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      ls,
      JSON.stringify({ dark: pt(e), theme: e.theme, vars: l })
    );
  } catch {
  }
}
function aa() {
  function e(r) {
    vt(r);
  }
  function n(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    ze.value = { ...ze.value, ...r, ...s };
    try {
      localStorage.setItem(Mt, JSON.stringify(ze.value));
    } catch {
    }
    e(ze.value), ea?.({ ...r, ...s });
  }
  function l() {
    n({ ...Ce });
  }
  return fe(() => {
    Lt || (Lt = !0, ze.value = _t(), vt(ze.value));
  }), {
    appearance: k(() => ze.value),
    set: n,
    reset: l,
    PRIMARY_COLORS: ft,
    SURFACE_TINTS: mt,
    FONT_SIZE_MIN: Qe,
    FONT_SIZE_MAX: et,
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
}, gs = { class: "flex flex-col gap-2" }, hs = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, bs = ["aria-pressed", "aria-label", "onClick"], xs = { class: "text-sm font-semibold" }, ys = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ks = ["onClick"], $s = { class: "flex flex-col gap-2" }, ws = { class: "flex items-center justify-between" }, Cs = { class: "text-muted-foreground text-xs tabular-nums" }, Ss = { class: "flex items-center gap-2" }, Ms = ["disabled"], _s = ["min", "max", "value"], Bs = ["disabled"], b$ = /* @__PURE__ */ j({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: n, set: l, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = aa(), d = K(!1), m = k(() => n.value.sidebarSide === "right"), b = [
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
    function h(v, g) {
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
      (t(), I(Fe, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: V(() => [
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
          default: V(() => [
            d.value ? (t(), a("aside", {
              key: 0,
              class: A(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", ss, [
                g[9] || (g[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", rs, [
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
              o("div", is, [
                o("section", us, [
                  g[11] || (g[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", ds, [
                    (t(!0), a(z, null, D(x(s), (f, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ae({ background: f.value }),
                      title: f.label,
                      "aria-label": f.label,
                      "aria-pressed": x(n).primary === S,
                      onClick: (_) => x(l)({ primary: S })
                    }, [
                      x(n).primary === S ? (t(), a("svg", {
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
                    ], 12, cs))), 128))
                  ])
                ]),
                o("section", fs, [
                  g[13] || (g[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", ms, [
                    (t(!0), a(z, null, D(x(i), (f, S) => (t(), a("button", {
                      key: S,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ae({ background: h(f.hue, f.chroma) }),
                      title: f.label,
                      "aria-label": f.label,
                      "aria-pressed": x(n).surface === S,
                      onClick: (_) => x(l)({ surface: S })
                    }, [
                      x(n).surface === S ? (t(), a("svg", vs, [...g[12] || (g[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : $("", !0)
                    ], 12, ps))), 128))
                  ])
                ]),
                o("section", gs, [
                  g[14] || (g[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", hs, [
                    (t(!0), a(z, null, D(x(u), (f) => (t(), a("button", {
                      key: f,
                      type: "button",
                      class: A([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(n).radius === f ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(n).radius === f,
                      "aria-label": `${f}rem radius`,
                      onClick: (S) => x(l)({ radius: f })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ae({ borderRadius: `${Math.min(f, 0.5)}rem` })
                      }, null, 4),
                      R(" " + c(f), 1)
                    ], 10, bs))), 128))
                  ])
                ]),
                (t(!0), a(z, null, D([
                  { label: "Color scheme", key: "theme", options: b },
                  { label: "Card style", key: "cardStyle", options: y },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: C }
                ], (f) => (t(), a("section", {
                  key: f.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", xs, c(f.label), 1),
                  o("div", ys, [
                    (t(!0), a(z, null, D(f.options, (S) => (t(), a("button", {
                      key: String(S.value),
                      type: "button",
                      class: A([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(n)[f.key] === S.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (_) => x(l)({ [f.key]: S.value })
                    }, c(S.label), 11, ks))), 128))
                  ])
                ]))), 128)),
                o("section", $s, [
                  o("div", ws, [
                    g[15] || (g[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Cs, c(x(n).fontSize) + "px", 1)
                  ]),
                  o("div", Ss, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(n).fontSize <= x(Qe),
                      "aria-label": "Decrease font size",
                      onClick: g[4] || (g[4] = (f) => x(l)({ fontSize: x(n).fontSize - 1 }))
                    }, " − ", 8, Ms),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(Qe),
                      max: x(et),
                      value: x(n).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: g[5] || (g[5] = (f) => x(l)({
                        fontSize: Number(f.target.value)
                      }))
                    }, null, 40, _s),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(n).fontSize >= x(et),
                      "aria-label": "Increase font size",
                      onClick: g[6] || (g[6] = (f) => x(l)({ fontSize: x(n).fontSize + 1 }))
                    }, " + ", 8, Bs)
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
}, Ts = ["d"], Is = { class: "w-full truncate text-center" }, st = 5, x$ = /* @__PURE__ */ j({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(
      () => l.items.length <= st ? l.items : l.items.slice(0, st - 1)
    ), i = k(() => l.items.length > st);
    function u(d) {
      return d === "/" ? l.current === "/" : l.current === d || l.current.startsWith(`${d}/`);
    }
    return (d, m) => (t(), a("nav", Ps, [
      o("ul", zs, [
        (t(!0), a(z, null, D(s.value, (b) => (t(), a("li", {
          key: b.key,
          class: "flex-1"
        }, [
          o("a", {
            href: b.href,
            class: A([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(b.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(b.href) ? "page" : void 0
          }, [
            (t(), a("svg", js, [
              o("path", {
                d: x(ie)(b.icon)
              }, null, 8, Os)
            ])),
            o("span", Ls, c(b.title), 1)
          ], 10, As)
        ]))), 128)),
        i.value ? (t(), a("li", Vs, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (b) => r("more"))
          }, [
            (t(), a("svg", Ds, [
              o("path", {
                d: x(ie)("more-horizontal")
              }, null, 8, Ts)
            ])),
            o("span", Is, c(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), Fs = ["value"], Es = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", pe = /* @__PURE__ */ j({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n;
    return (s, i) => (t(), a("input", {
      "data-slot": "input",
      value: l.modelValue ?? l.defaultValue,
      class: A([Es, l.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, Fs));
  }
}), Ns = ["for"], be = /* @__PURE__ */ j({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (n, l) => (t(), a("label", {
      "data-slot": "label",
      for: n.$props.for,
      class: A([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        n.$props.class
      ])
    }, [
      q(n.$slots, "default")
    ], 10, Ns));
  }
}), y$ = /* @__PURE__ */ j({
  __name: "PkSpinner",
  props: {
    class: {}
  },
  setup(e) {
    return (n, l) => (t(), a("svg", {
      role: "status",
      "aria-label": "Loading",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      class: A(["size-4 animate-spin", n.$props.class])
    }, [...l[0] || (l[0] = [
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
}, k$ = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!1), i = K(null);
    fe(() => {
      l.autofocus && i.value?.focus();
    });
    const u = k(
      () => Array.from({ length: l.length }, (b, p) => l.modelValue[p] ?? "")
    ), d = k(() => Math.min(l.modelValue.length, l.length - 1));
    function m(b) {
      const p = b.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, l.length));
    }
    return (b, p) => (t(), a("div", Rs, [
      o("input", {
        ref_key: "field",
        ref: i,
        id: l.id,
        name: l.name,
        value: l.modelValue,
        disabled: l.disabled,
        inputmode: "numeric",
        autocomplete: "one-time-code",
        maxlength: l.length,
        class: "absolute inset-0 z-10 w-full cursor-default bg-transparent text-transparent caret-transparent outline-none disabled:cursor-not-allowed",
        onInput: m,
        onFocus: p[0] || (p[0] = (y) => s.value = !0),
        onBlur: p[1] || (p[1] = (y) => s.value = !1)
      }, null, 40, Us),
      (t(!0), a(z, null, D(u.value, (y, M) => (t(), a("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": s.value && M === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(c(y) + " ", 1),
        s.value && M === d.value && y === "" ? (t(), a("div", qs, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, Hs))), 128))
    ]));
  }
}), Ks = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Me = /* @__PURE__ */ j({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (n, l) => (t(), a("header", {
      class: A(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: A(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), a("p", Ks, c(e.description), 1)) : $("", !0)
    ], 2));
  }
});
function X(...e) {
  return Oa(ja(e));
}
function $$(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Gs = /* @__PURE__ */ j({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "alert",
      class: A(x(X)(x(Js)({ variant: e.variant }), n.class)),
      role: "alert"
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Ws = /* @__PURE__ */ j({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: A(x(X)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Zs = /* @__PURE__ */ j({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: A(x(X)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Js = yt(
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
), Ys = { class: "list-inside list-disc text-sm" }, w$ = /* @__PURE__ */ j({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const n = e, l = k(() => Array.from(new Set(n.errors)));
    return (r, s) => (t(), I(x(Gs), { variant: "destructive" }, {
      default: V(() => [
        F(x(wa), { class: "size-4" }),
        F(x(Zs), null, {
          default: V(() => [
            R(c(e.title), 1)
          ]),
          _: 1
        }),
        F(x(Ws), null, {
          default: V(() => [
            o("ul", Ys, [
              (t(!0), a(z, null, D(l.value, (i, u) => (t(), a("li", { key: u }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), la = /* @__PURE__ */ j({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, s = Kt(l, "modelValue", n, {
      passive: !0,
      defaultValue: l.defaultValue
    });
    return (i, u) => ue((t(), a("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => va(s) ? s.value = d : null),
      "data-slot": "input",
      class: A(
        x(X)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          l.class
        )
      )
    }, null, 2)), [
      [xe, x(s)]
    ]);
  }
}), Xs = { class: "relative" }, Qs = ["aria-label"], C$ = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: n }) {
    const l = e, r = K(!1), s = ga("inputRef");
    return n({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), a("div", Xs, [
      F(x(la), ne({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(X)("pr-10", l.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: A(
          x(X)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), I(x(Ca), {
          key: 0,
          class: "size-4"
        })) : (t(), I(x(Sa), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Qs)
    ]));
  }
});
function S$(e, n) {
  const l = Math.max(1, Math.floor(n));
  if (e.length === 0)
    return [];
  if (l === 1)
    return [{ type: "columns", columns: [[...e]] }];
  const r = [];
  let s = [];
  const i = () => {
    if (s.length === 0)
      return;
    const u = Array.from({ length: l }, () => []);
    s.forEach((d, m) => {
      u[m % l].push(d);
    }), r.push({ type: "columns", columns: u }), s = [];
  };
  for (const u of e)
    (u.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: u })) : s.push(u);
  return i(), r;
}
const na = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", er = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", tr = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function ar(e) {
  const n = e.name.toLowerCase(), l = e.type.toLowerCase();
  return l === "image/jpeg" || l === "image/jpg" || n.endsWith(".jpg") || n.endsWith(".jpeg");
}
function lr(e) {
  const n = e.name.toLowerCase(), l = e.type.toLowerCase();
  return l === "image/png" || l === "image/webp" || n.endsWith(".png") || n.endsWith(".webp");
}
async function nr(e) {
  const n = URL.createObjectURL(e);
  try {
    const l = await or(n), r = document.createElement("canvas"), s = Math.max(1, l.naturalWidth), i = Math.max(1, l.naturalHeight);
    r.width = s, r.height = i;
    const u = r.getContext("2d", { willReadFrequently: !0 });
    if (!u)
      return !1;
    u.drawImage(l, 0, 0);
    const { data: d } = u.getImageData(0, 0, s, i);
    for (let m = 3; m < d.length; m += 4)
      if ((d[m] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(n);
  }
}
function or(e) {
  return new Promise((n, l) => {
    const r = new Image();
    r.onload = () => n(r), r.onerror = () => l(new Error("Could not read that image.")), r.src = e;
  });
}
async function sr(e) {
  if (ar(e))
    throw new Error(tr);
  if (!lr(e))
    throw new Error(na);
  if (!await nr(e))
    throw new Error(er);
}
const rr = /* @__PURE__ */ j({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const s = me(e, n);
    return (i, u) => (t(), I(x(Gt), ne({ "data-slot": "sheet" }, x(s)), {
      default: V((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), M$ = /* @__PURE__ */ j({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Ee), ne({ "data-slot": "sheet-close" }, n), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ir = /* @__PURE__ */ j({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(kt), ne({
      "data-slot": "sheet-overlay",
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        n.class
      )
    }, x(l)), {
      default: V(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ur = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class", "side"), i = me(s, r);
    return (u, d) => (t(), I(x($t), null, {
      default: V(() => [
        F(ir),
        F(x(wt), ne({
          "data-slot": "sheet-content",
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            l.class
          )
        }, { ...u.$attrs, ...x(i) }), {
          default: V(() => [
            q(u.$slots, "default"),
            F(x(Ee), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: V(() => [
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
}), dr = /* @__PURE__ */ j({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(Wt), ne({
      "data-slot": "sheet-description",
      class: x(X)("text-muted-foreground text-sm", n.class)
    }, x(l)), {
      default: V(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _$ = /* @__PURE__ */ j({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: A(x(X)("mt-auto flex flex-col gap-2 p-4", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), cr = /* @__PURE__ */ j({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: A(x(X)("flex flex-col gap-1.5 p-4", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), fr = /* @__PURE__ */ j({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(Zt), ne({
      "data-slot": "sheet-title",
      class: x(X)("text-foreground font-semibold", n.class)
    }, x(l)), {
      default: V(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B$ = /* @__PURE__ */ j({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Jt), ne({ "data-slot": "sheet-trigger" }, n), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dt = "sidebar_state", mr = 3600 * 24 * 7, pr = "16rem", vr = "18rem", gr = "3rem", hr = "b", [lt, br] = Ta("Sidebar"), xr = { class: "flex h-full w-full flex-col" }, yr = ["data-state", "data-collapsible", "data-variant", "data-side"], kr = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, P$ = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, { isMobile: l, state: r, openMobile: s, setOpenMobile: i } = lt();
    return (u, d) => e.collapsible === "none" ? (t(), a("div", ne({
      key: 0,
      "data-slot": "sidebar",
      class: x(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n.class
      )
    }, u.$attrs), [
      q(u.$slots, "default")
    ], 16)) : x(l) ? (t(), I(x(rr), ne({
      key: 1,
      open: x(s)
    }, u.$attrs, { "onUpdate:open": x(i) }), {
      default: V(() => [
        F(x(ur), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ae({
            "--sidebar-width": x(vr)
          })
        }, {
          default: V(() => [
            F(cr, { class: "sr-only" }, {
              default: V(() => [
                F(fr, null, {
                  default: V(() => [...d[0] || (d[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                F(dr, null, {
                  default: V(() => [...d[1] || (d[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", xr, [
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
        class: A(
          x(X)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", ne({
        class: x(X)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          n.class
        )
      }, u.$attrs), [
        o("div", kr, [
          q(u.$slots, "default")
        ])
      ], 16)
    ], 8, yr));
  }
}), z$ = /* @__PURE__ */ j({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: A(
        x(X)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          n.class
        )
      )
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), A$ = /* @__PURE__ */ j({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(x(X)("flex flex-col gap-2 p-2", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), j$ = /* @__PURE__ */ j({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(x(X)("relative flex w-full min-w-0 flex-col p-2", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), O$ = /* @__PURE__ */ j({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Ne), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        x(X)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          n.class
        )
      )
    }, {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), L$ = /* @__PURE__ */ j({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(x(X)("w-full text-sm", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), V$ = /* @__PURE__ */ j({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Ne), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        x(X)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          n.class
        )
      )
    }, {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), D$ = /* @__PURE__ */ j({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(x(X)("flex flex-col gap-2 p-2", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), T$ = /* @__PURE__ */ j({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(la), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(x(X)("bg-background h-8 w-full shadow-none", n.class))
    }, {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), I$ = /* @__PURE__ */ j({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: A(
        x(X)(
          "bg-background relative flex min-h-0 w-full flex-1 flex-col overflow-y-auto",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          // Side-aware insets. The upstream component hardcodes ml-0, so with the
          // sidebar on the right the content kept a left gutter it did not need and
          // reserved nothing on the right - the panel then overlapped the table.
          "md:peer-data-[variant=inset]:peer-data-[side=left]:ml-0 md:peer-data-[variant=inset]:peer-data-[side=left]:peer-data-[state=collapsed]:ml-2",
          "md:peer-data-[variant=inset]:peer-data-[side=right]:mr-0 md:peer-data-[variant=inset]:peer-data-[side=right]:peer-data-[state=collapsed]:mr-2",
          n.class
        )
      )
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), F$ = /* @__PURE__ */ j({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(x(X)("flex w-full min-w-0 flex-col gap-1", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), E$ = /* @__PURE__ */ j({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Ne), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: A(
        x(X)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          n.class
        )
      ),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), N$ = /* @__PURE__ */ j({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: A(
        x(X)(
          "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          n.class
        )
      )
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), $r = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const s = me(e, n);
    return (i, u) => (t(), I(x(Ia), ne({ "data-slot": "tooltip" }, x(s)), {
      default: V((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), wr = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x(Fa), null, {
      default: V(() => [
        F(x(Ea), ne({ "data-slot": "tooltip-content" }, { ...x(i), ...u.$attrs }, {
          class: x(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            l.class
          )
        }), {
          default: V(() => [
            q(u.$slots, "default"),
            F(x(Na), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), R$ = /* @__PURE__ */ j({
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
    const n = e;
    return (l, r) => (t(), I(x(Yt), ye(Pe(n)), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cr = /* @__PURE__ */ j({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Ra), ne({ "data-slot": "tooltip-trigger" }, n), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tt = /* @__PURE__ */ j({
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
    const n = e;
    return (l, r) => (t(), I(x(Ne), ne({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(X)(x(Mr)({ variant: e.variant, size: e.size }), n.class),
      as: e.as,
      "as-child": e.asChild
    }, l.$attrs), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), U$ = /* @__PURE__ */ j({
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
    const n = e, { isMobile: l, state: r } = lt(), s = re(n, "tooltip");
    return (i, u) => e.tooltip ? (t(), I(x($r), { key: 1 }, {
      default: V(() => [
        F(x(Cr), { "as-child": "" }, {
          default: V(() => [
            F(Tt, ye(Pe({ ...x(s), ...i.$attrs })), {
              default: V(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        F(x(wr), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(l)
        }, {
          default: V(() => [
            typeof e.tooltip == "string" ? (t(), a(z, { key: 0 }, [
              R(c(e.tooltip), 1)
            ], 64)) : (t(), I(he(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), I(Tt, ye(ne({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: V(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H$ = /* @__PURE__ */ j({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(x(X)("group/menu-item relative", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), It = "animate-pulse rounded-md bg-primary/10", q$ = /* @__PURE__ */ j({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = k(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: A(x(X)("flex h-8 items-center gap-2 rounded-md px-2", n.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: A(x(X)(It, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: A(x(X)(It, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ae({ "--skeleton-width": l.value })
      }, null, 6)
    ], 2));
  }
}), K$ = /* @__PURE__ */ j({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: A(
        x(X)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          n.class
        )
      )
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), G$ = /* @__PURE__ */ j({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Ne), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: A(
        x(X)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-primary/10 data-[active=true]:text-primary",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          n.class
        )
      )
    }, {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), W$ = /* @__PURE__ */ j({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(x(X)("group/menu-sub-item relative", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Z$ = /* @__PURE__ */ j({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Da?.cookie.includes(`${Dt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = La("(max-width: 767px)"), i = K(!1), u = Kt(l, "open", r, {
      defaultValue: l.defaultOpen ?? !1,
      passive: l.open === void 0
    });
    function d(y) {
      u.value = y, document.cookie = `${Dt}=${u.value}; path=/; max-age=${mr}`;
    }
    function m(y) {
      i.value = y;
    }
    function b() {
      return s.value ? m(!i.value) : d(!u.value);
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
      setOpenMobile: m,
      toggleSidebar: b
    }), (y, M) => (t(), I(x(Yt), { "delay-duration": 0 }, {
      default: V(() => [
        o("div", ne({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(pr),
            "--sidebar-width-icon": x(gr)
          },
          class: x(X)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            l.class
          )
        }, y.$attrs), [
          q(y.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), J$ = /* @__PURE__ */ j({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, { toggleSidebar: l } = lt();
    return (r, s) => (t(), a("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: A(
        x(X)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          n.class
        )
      ),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...i) => x(l) && x(l)(...i))
    }, [
      q(r.$slots, "default")
    ], 2));
  }
}), Sr = /* @__PURE__ */ j({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(Ua), ne({ "data-slot": "separator" }, x(l), {
      class: x(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        n.class
      )
    }), null, 16, ["class"]));
  }
}), Y$ = /* @__PURE__ */ j({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Sr), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(x(X)("bg-sidebar-border mx-2 w-auto", n.class))
    }, {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), X$ = /* @__PURE__ */ j({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, { isMobile: l, state: r, toggleSidebar: s } = lt();
    return (i, u) => (t(), I(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: A(x(X)("h-7 w-7", n.class)),
      onClick: x(s)
    }, {
      default: V(() => [
        x(l) || x(r) === "collapsed" ? (t(), I(x(Ma), { key: 0 })) : (t(), I(x(_a), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Mr = yt(
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
), Q$ = /* @__PURE__ */ j({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const s = me(e, n);
    return (i, u) => (t(), I(x(Ha), ne({ "data-slot": "dropdown-menu" }, x(s)), {
      default: V((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), _r = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, ew = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x(qa), ne({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: V(() => [
        o("span", _r, [
          F(x(Xt), null, {
            default: V(() => [
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
}), tw = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x(Ka), null, {
      default: V(() => [
        F(x(Ga), ne({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            l.class
          )
        }), {
          default: V(() => [
            q(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), aw = /* @__PURE__ */ j({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Wa), ne({ "data-slot": "dropdown-menu-group" }, n), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lw = /* @__PURE__ */ j({
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
    const n = e, l = re(n, "inset", "variant", "class"), r = ke(l);
    return (s, i) => (t(), I(x(Za), ne({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: V(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), nw = /* @__PURE__ */ j({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const n = e, l = re(n, "class", "inset"), r = ke(l);
    return (s, i) => (t(), I(x(Ja), ne({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", n.class)
    }), {
      default: V(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), ow = /* @__PURE__ */ j({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const s = me(e, n);
    return (i, u) => (t(), I(x(Ya), ne({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: V(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Br = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, sw = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x(Xa), ne({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: V(() => [
        o("span", Br, [
          F(x(Xt), null, {
            default: V(() => [
              q(u.$slots, "indicator-icon", {}, () => [
                F(x(Ba), { class: "size-2 fill-current" })
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
}), rw = /* @__PURE__ */ j({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(Qa), ne({ "data-slot": "dropdown-menu-separator" }, x(l), {
      class: x(X)("bg-border -mx-1 my-1 h-px", n.class)
    }), null, 16, ["class"]));
  }
}), iw = /* @__PURE__ */ j({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(x(X)("text-muted-foreground ml-auto text-xs tracking-widest", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), uw = /* @__PURE__ */ j({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const s = me(e, n);
    return (i, u) => (t(), I(x(el), ne({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: V((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), dw = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x(tl), ne({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(X)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        l.class
      )
    }), {
      default: V(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cw = /* @__PURE__ */ j({
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
    const n = e, l = re(n, "class", "inset"), r = ke(l);
    return (s, i) => (t(), I(x(al), ne({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        n.class
      )
    }), {
      default: V(() => [
        q(s.$slots, "default"),
        F(x(qt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), fw = /* @__PURE__ */ j({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = ke(e);
    return (r, s) => (t(), I(x(ll), ne({ "data-slot": "dropdown-menu-trigger" }, x(l)), {
      default: V(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mw = /* @__PURE__ */ j({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(nl), {
      "data-slot": "avatar",
      class: A(x(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", n.class))
    }, {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pw = /* @__PURE__ */ j({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(ol), ne({ "data-slot": "avatar-fallback" }, x(l), {
      class: x(X)("bg-muted flex size-full items-center justify-center rounded-full", n.class)
    }), {
      default: V(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vw = /* @__PURE__ */ j({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(sl), ne({ "data-slot": "avatar-image" }, n, { class: "aspect-square size-full" }), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gw = /* @__PURE__ */ j({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: A(n.class)
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), hw = /* @__PURE__ */ j({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("span", {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: A(x(X)("flex size-9 items-center justify-center", n.class))
    }, [
      q(l.$slots, "default", {}, () => [
        F(x(Pa), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), bw = /* @__PURE__ */ j({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: A(x(X)("inline-flex items-center gap-1.5", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), xw = /* @__PURE__ */ j({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Ne), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: A(x(X)("hover:text-foreground transition-colors", n.class))
    }, {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), yw = /* @__PURE__ */ j({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        x(X)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          n.class
        )
      )
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), kw = /* @__PURE__ */ j({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("span", {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: A(x(X)("text-foreground font-normal", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), $w = /* @__PURE__ */ j({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("li", {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: A(x(X)("[&>svg]:size-3.5", n.class))
    }, [
      q(l.$slots, "default", {}, () => [
        F(x(qt))
      ])
    ], 2));
  }
}), Pr = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, zr = /* @__PURE__ */ j({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class"), r = ke(l);
    return (s, i) => (t(), a("div", Pr, [
      F(x(rl), ne({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          n.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), ww = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class", "viewport"), i = me(s, r);
    return (u, d) => (t(), I(x(il), ne({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        l.class
      )
    }), {
      default: V((m) => [
        q(u.$slots, "default", ye(Pe(m))),
        e.viewport ? (t(), I(zr, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), Cw = /* @__PURE__ */ j({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x(ul), ne({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(X)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        l.class
      )
    }), {
      default: V(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sw = /* @__PURE__ */ j({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class"), r = ke(l);
    return (s, i) => (t(), I(x(dl), ne({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(X)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        n.class
      )
    }), {
      default: V(() => [...i[0] || (i[0] = [
        o("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), Mw = /* @__PURE__ */ j({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(cl), ne({ "data-slot": "navigation-menu-item" }, x(l), {
      class: x(X)("relative", n.class)
    }), {
      default: V(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _w = /* @__PURE__ */ j({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x(fl), ne({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(X)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: V(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bw = /* @__PURE__ */ j({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class"), r = ke(l);
    return (s, i) => (t(), I(x(ml), ne({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(X)("group flex flex-1 list-none items-center justify-center gap-1", n.class)
    }), {
      default: V(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pw = /* @__PURE__ */ j({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class"), r = ke(l);
    return (s, i) => (t(), I(x(pl), ne({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(X)(x(Ar)(), "group", n.class)
    }), {
      default: V(() => [
        q(s.$slots, "default"),
        F(x(za), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ar = yt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), zw = /* @__PURE__ */ j({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: n }) {
    const s = me(e, n);
    return (i, u) => (t(), I(x(Gt), ne({ "data-slot": "dialog" }, x(s)), {
      default: V((d) => [
        q(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Aw = /* @__PURE__ */ j({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Ee), ne({ "data-slot": "dialog-close" }, n), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jr = /* @__PURE__ */ j({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(kt), ne({ "data-slot": "dialog-overlay" }, x(l), {
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        n.class
      )
    }), {
      default: V(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jw = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x($t), null, {
      default: V(() => [
        F(jr),
        F(x(wt), ne({ "data-slot": "dialog-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            l.class
          )
        }), {
          default: V(() => [
            q(u.$slots, "default"),
            e.showCloseButton ? (t(), I(x(Ee), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: V(() => [
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
}), Ow = /* @__PURE__ */ j({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class"), r = ke(l);
    return (s, i) => (t(), I(x(Wt), ne({ "data-slot": "dialog-description" }, x(r), {
      class: x(X)("text-muted-foreground text-sm", n.class)
    }), {
      default: V(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lw = /* @__PURE__ */ j({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: A(x(X)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", n.class))
    }, [
      q(l.$slots, "default"),
      e.showCloseButton ? (t(), I(x(Ee), {
        key: 0,
        "as-child": ""
      }, {
        default: V(() => [
          F(se, { variant: "outline" }, {
            default: V(() => [...r[0] || (r[0] = [
              R(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : $("", !0)
    ], 2));
  }
}), Vw = /* @__PURE__ */ j({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: A(x(X)("flex flex-col gap-2 text-center sm:text-left", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Dw = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x($t), null, {
      default: V(() => [
        F(x(kt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: V(() => [
            F(x(wt), ne({
              class: x(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                l.class
              )
            }, { ...u.$attrs, ...x(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (m) => {
                const b = m.detail.originalEvent, p = b.target;
                (b.offsetX > p.clientWidth || b.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: V(() => [
                q(u.$slots, "default"),
                F(x(Ee), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: V(() => [
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
}), Tw = /* @__PURE__ */ j({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class"), r = ke(l);
    return (s, i) => (t(), I(x(Zt), ne({ "data-slot": "dialog-title" }, x(r), {
      class: x(X)("text-lg leading-none font-semibold", n.class)
    }), {
      default: V(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Iw = /* @__PURE__ */ j({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Jt), ne({ "data-slot": "dialog-trigger" }, n), {
      default: V(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fw = /* @__PURE__ */ j({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e, l = re(n, "class");
    return (r, s) => (t(), I(x(vl), ne({ "data-slot": "label" }, x(l), {
      class: x(X)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        n.class
      )
    }), {
      default: V(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ew = /* @__PURE__ */ j({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), I(x(Aa), {
      role: "status",
      "aria-label": "Loading",
      class: A(x(X)("size-4 animate-spin", n.class))
    }, null, 8, ["class"]));
  }
}), Nw = /* @__PURE__ */ j({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card",
      class: A(
        x(X)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          n.class
        )
      )
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Rw = /* @__PURE__ */ j({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: A(x(X)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Uw = /* @__PURE__ */ j({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: A(x(X)("px-6", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Hw = /* @__PURE__ */ j({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: A(x(X)("text-muted-foreground text-sm", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), qw = /* @__PURE__ */ j({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: A(x(X)("flex items-center px-6 [.border-t]:pt-6", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Kw = /* @__PURE__ */ j({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: A(
        x(X)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          n.class
        )
      )
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Gw = /* @__PURE__ */ j({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const n = e;
    return (l, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: A(x(X)("leading-none font-semibold", n.class))
    }, [
      q(l.$slots, "default")
    ], 2));
  }
}), Or = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = re(l, "class"), i = me(s, r);
    return (u, d) => (t(), I(x(gl), ne({ "data-slot": "checkbox" }, x(i), {
      class: x(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        l.class
      )
    }), {
      default: V((m) => [
        F(x(hl), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: V(() => [
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
}), De = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = me(re(l, "class"), r);
    return (i, u) => (t(), I(x(bl), ne({ "data-slot": "switch" }, x(s), {
      class: x(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        l.class
      )
    }), {
      default: V(() => [
        F(x(xl), {
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
}, Vr = { class: "flex items-start gap-3" }, Dr = { class: "min-w-0 flex-1" }, Tr = { class: "text-foreground text-sm font-medium" }, Ir = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Ww = /* @__PURE__ */ j({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: n, emit: l }) {
    const r = e, s = l, i = K(!1), u = K(null), d = K(0);
    ha((b) => (console.error(`[PkBoundary] ${r.label} failed to render`, b), i.value = !0, u.value = b instanceof Error ? b.message : null, s("error", b), !1));
    function m() {
      i.value = !1, u.value = null, d.value++;
    }
    return n({ retry: m }), (b, p) => (t(), a("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", Lr, [
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
            o("p", Tr, c(e.label) + " could not be displayed ", 1),
            u.value ? (t(), a("p", Ir, c(u.value), 1)) : $("", !0),
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
      ])) : i.value ? $("", !0) : q(b.$slots, "default", { key: d.value })
    ], 2));
  }
}), Fr = { class: "bg-card rounded-lg border" }, Er = {
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
}, Zw = /* @__PURE__ */ j({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (n, l) => (t(), a("section", Fr, [
      e.title || e.description || n.$slots.header || n.$slots.actions ? (t(), a("header", Er, [
        o("div", Nr, [
          q(n.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", Rr, c(e.title), 1)) : $("", !0),
            e.description ? (t(), a("p", Ur, c(e.description), 1)) : $("", !0)
          ])
        ]),
        n.$slots.actions ? (t(), a("div", Hr, [
          q(n.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        q(n.$slots, "default")
      ], 2),
      n.$slots.footer ? (t(), a("footer", qr, [
        q(n.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), oa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function Jw() {
  const e = Qt(), n = k(() => e.props.panel?.pageFooter === !0);
  return ct(oa, n), n;
}
const Kr = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Gr = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Wr = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, Yw = /* @__PURE__ */ j({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const n = e, l = Qt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => l.props.panel?.brand || l.props.panelBrand || l.props.name || "Panel"), i = k(() => {
      const m = l.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), u = Je(oa, k(() => !1)), d = k(() => !n.host && x(u) === !0);
    return (m, b) => d.value ? $("", !0) : (t(), a("footer", Kr, [
      o("div", Gr, [
        o("p", null, "© " + c(x(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), a("nav", Wr, [
          (t(!0), a(z, null, D(i.value, (p) => (t(), I(x(yl), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: V(() => [
              R(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), Zr = { class: "flex shrink-0 flex-col items-center" }, Jr = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, Xw = /* @__PURE__ */ j({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const n = e, l = k(() => n.kind === "laptop"), r = k(
      () => l.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = k(() => l.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, u) => (t(), a("div", Zr, [
      o("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: ae({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !l.value ? (t(), a("div", Jr)) : $("", !0),
        o("div", {
          class: A(["size-full overflow-hidden bg-white", s.value])
        }, [
          q(i.$slots, "default")
        ], 2)
      ], 6),
      l.value ? (t(), a(z, { key: 0 }, [
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
}, li = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, ni = /* @__PURE__ */ j({
  __name: "PkStepIndicator",
  props: {
    steps: {},
    activeStep: {},
    hasError: { type: Function, default: () => !1 },
    failedStep: { default: null },
    interactive: { type: Boolean, default: !0 }
  },
  emits: ["update:activeStep"],
  setup(e, { emit: n }) {
    const l = e, r = n;
    function s(m) {
      return l.failedStep !== null && m === l.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : l.failedStep !== null && m > l.failedStep ? "" : m < l.activeStep ? "bg-primary text-primary-foreground border-primary" : m === l.activeStep ? "border-primary text-primary" : "";
    }
    function i(m) {
      if (l.failedStep !== null) {
        if (m === l.failedStep)
          return "text-destructive font-medium";
        if (m > l.failedStep)
          return "text-muted-foreground/60";
      }
      return m === l.activeStep ? "text-foreground font-medium" : m < l.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function u(m) {
      return l.failedStep !== null ? m < l.failedStep : m < l.activeStep;
    }
    function d(m) {
      return l.failedStep === m;
    }
    return (m, b) => (t(), a("ol", Yr, [
      (t(!0), a(z, null, D(e.steps, (p, y) => (t(), a("li", {
        key: y,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), I(he(e.interactive ? "button" : "div"), ne({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(y)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: y > e.activeStep } : {}, {
          onClick: (M) => e.interactive && y <= e.activeStep && r("update:activeStep", y)
        }), {
          default: V(() => [
            o("span", {
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(y)])
            }, [
              d(y) ? (t(), a("svg", Xr, [...b[0] || (b[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(y) ? (t(), a("svg", Qr, [...b[1] || (b[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(z, { key: 2 }, [
                R(c(y + 1), 1)
              ], 64))
            ], 2),
            o("span", ei, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), a("span", ti, c(p.description), 1)) : $("", !0)
            ]),
            e.hasError(y) ? (t(), a("span", ai)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        y < e.steps.length - 1 ? (t(), a("span", li)) : $("", !0)
      ]))), 128))
    ]));
  }
}), Ge = /* @__PURE__ */ new Map();
function we(e, n) {
  Ge.set(e, n);
}
function oi(e) {
  return Ge.get(e);
}
function Qw(e) {
  return Ge.has(e);
}
function e4() {
  return [...Ge.keys()].sort();
}
function t4() {
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
}, Bt = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(null), u = K(null), d = K(!1), m = K(""), b = K(0), p = K({ top: 0, left: 0, width: 0 }), y = k(
      () => l.modelValue.map(
        (H) => l.options.find((W) => W.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), M = k(() => l.searchable ?? l.options.length > 6), w = k(() => {
      const H = new Set(l.modelValue), W = m.value.trim().toLowerCase();
      return l.options.filter((Z) => !H.has(Z.value)).filter((Z) => W ? Z.label.toLowerCase().includes(W) : !0);
    }), C = k(() => l.max !== null && l.modelValue.length >= l.max);
    function h() {
      const H = s.value, W = i.value;
      if (!H || !W)
        return;
      const Z = H.getBoundingClientRect(), te = W.getBoundingClientRect(), U = 8;
      let T = Z.bottom + 4;
      T + te.height > window.innerHeight - U && Z.top - te.height - 4 > U && (T = Z.top - te.height - 4), p.value = {
        top: T,
        left: Math.min(Math.max(U, Z.left), window.innerWidth - Z.width - U),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function v() {
      l.disabled || d.value || (d.value = !0, m.value = "", b.value = 0, await Se(), h(), u.value?.focus());
    }
    function g() {
      d.value = !1, m.value = "";
    }
    function f() {
      d.value ? g() : v();
    }
    function S(H) {
      C.value || (r("update:modelValue", [...l.modelValue, H.value]), m.value = "", b.value = 0, Se(() => {
        h(), u.value?.focus();
      }));
    }
    function _(H) {
      r(
        "update:modelValue",
        l.modelValue.filter((W) => W !== H)
      ), Se(h);
    }
    function P() {
      r("update:modelValue", []), Se(h);
    }
    function G(H) {
      if (!l.disabled) {
        if (H.key === "Escape" && d.value) {
          H.stopPropagation(), g();
          return;
        }
        if (H.key === "Backspace" && m.value === "" && l.modelValue.length > 0) {
          _(l.modelValue[l.modelValue.length - 1]);
          return;
        }
        if (!d.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), v();
          return;
        }
        if (d.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), b.value = Math.min(b.value + 1, w.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), b.value = Math.max(b.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const W = w.value[b.value];
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
      d.value && h();
    }
    return de(w, (H) => {
      b.value > H.length - 1 && (b.value = Math.max(0, H.length - 1));
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
        class: A(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
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
            onClick: ce((te) => _(Z.value), ["stop"])
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
          ])], 8, ri)
        ]))), 128)),
        y.value.length === 0 ? (t(), a("span", ii, c(e.placeholder), 1)) : $("", !0),
        o("span", ui, [
          y.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ce(P, ["stop"])
          }, " Clear ")) : $("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...W[2] || (W[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, si),
      (t(), I(Fe, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: V(() => [
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
              M.value ? (t(), a("div", di, [
                ue(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": W[0] || (W[0] = (Z) => m.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: G
                }, null, 40, ci), [
                  [xe, m.value]
                ])
              ])) : $("", !0),
              o("div", fi, [
                (t(!0), a(z, null, D(w.value, (Z, te) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", te === b.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": te === b.value,
                  onMouseenter: (U) => b.value = te,
                  onClick: (U) => S(Z)
                }, c(Z.label), 43, mi))), 128)),
                w.value.length === 0 ? (t(), a("p", pi, [
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
}), vi = ["accept", "disabled"], gi = { class: "text-sm font-medium" }, hi = { key: 0 }, bi = { key: 1 }, xi = { class: "text-muted-foreground text-xs" }, yi = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ki = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, $i = ["src"], wi = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Ci = { class: "min-w-0 flex-1" }, Si = { class: "block truncate text-sm font-medium" }, Mi = { class: "text-muted-foreground text-xs" }, _i = ["href"], Bi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, sa = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(!1), u = K(null), d = K(null), m = K(null), b = k(() => l.accept.map((S) => `.${S}`).join(",")), p = k(() => m.value ?? l.modelValue?.url ?? null), y = k(() => `${l.accept.length ? l.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(l.maxKilobytes * 1024)}`);
    function M(S) {
      if (!S)
        return "";
      const _ = ["B", "KB", "MB", "GB"];
      let P = S, G = 0;
      for (; P >= 1024 && G < _.length - 1; )
        P /= 1024, G++;
      return `${P.toFixed(P < 10 && G > 0 ? 1 : 0)} ${_[G]}`;
    }
    function w(S) {
      return S.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(S) {
      return l.accept.length && !l.accept.includes(w(S.name)) ? `${w(S.name).toUpperCase() || "That"} files are not accepted here.` : S.size > l.maxKilobytes * 1024 ? `That file is ${M(S.size)}; the limit is ${M(l.maxKilobytes * 1024)}.` : null;
    }
    async function h(S) {
      const _ = S?.[0];
      if (!(!_ || l.disabled) && (d.value = C(_), !d.value)) {
        v(), l.image && _.type.startsWith("image/") && (m.value = URL.createObjectURL(_)), u.value = 0;
        try {
          const P = await l.upload(_, (G) => {
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
      const S = l.modelValue;
      v(), d.value = null, r("update:modelValue", null), S && !S.url && l.discard && await l.discard(S.value).catch(() => {
      });
    }
    function f(S) {
      i.value = !1, h(S.dataTransfer?.files ?? null);
    }
    return (S, _) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", ki, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, $i)) : (t(), a("span", wi, c(w(e.modelValue.name) || "file"), 1)),
        o("span", Ci, [
          o("span", Si, c(e.modelValue.name), 1),
          o("span", Mi, [
            R(c(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(z, { key: 0 }, [
              _[4] || (_[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, _i)
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
        }, [..._[5] || (_[5] = [
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
        class: A(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: _[1] || (_[1] = ce((P) => i.value = !0, ["prevent"])),
        onDragleave: _[2] || (_[2] = ce((P) => i.value = !1, ["prevent"])),
        onDrop: ce(f, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: b.value,
          disabled: e.disabled,
          onChange: _[0] || (_[0] = (P) => h(P.target.files))
        }, null, 40, vi),
        _[3] || (_[3] = o("svg", {
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
          u.value === null ? (t(), a("span", hi, "Drop a file or click to choose")) : (t(), a("span", bi, "Uploading…"))
        ]),
        o("span", xi, c(y.value), 1),
        u.value !== null ? (t(), a("span", yi, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ae({ width: `${u.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      d.value ? (t(), a("p", Bi, c(d.value), 1)) : $("", !0)
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
}, Di = ["onUpdate:modelValue", "disabled", "aria-label"], Ti = ["disabled", "aria-label", "onClick"], Ii = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Fi = { class: "flex items-center gap-3" }, Ei = ["disabled"], Ni = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Ri = /* @__PURE__ */ j({
  __name: "PkKeyValue",
  props: {
    modelValue: {},
    keyLabel: { default: "Key" },
    valueLabel: { default: "Value" },
    maxPairs: { default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const u = K(d(l.modelValue));
    function d(h) {
      return h ? Object.entries(h).map(([v, g]) => ({
        uid: i++,
        key: v,
        value: g ?? ""
      })) : [];
    }
    de(
      () => l.modelValue,
      (h) => {
        JSON.stringify(h ?? null) !== JSON.stringify(m()) && (u.value = d(h));
      }
    );
    function m() {
      const h = {};
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && (h[g] = v.value);
      }
      return Object.keys(h).length ? h : null;
    }
    function b() {
      r("update:modelValue", m());
    }
    const p = k(() => {
      const h = /* @__PURE__ */ new Map();
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && h.set(g, (h.get(g) ?? 0) + 1);
      }
      return new Set([...h.entries()].filter(([, v]) => v > 1).map(([v]) => v));
    }), y = k(
      () => new Set(
        u.value.map((h) => h.key.trim()).filter((h) => h !== "" && !s.test(h))
      )
    ), M = k(() => l.maxPairs !== null && u.value.length >= l.maxPairs);
    function w() {
      M.value || l.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function C(h) {
      u.value = u.value.filter((v) => v.uid !== h), b();
    }
    return (h, v) => (t(), a("div", Pi, [
      u.value.length ? (t(), a("div", zi, [
        o("div", Ai, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          v[0] || (v[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(z, null, D(u.value, (g) => (t(), a("div", {
          key: g.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", ji, [
            ue(o("input", {
              "onUpdate:modelValue": (f) => g.key = f,
              type: "text",
              class: A([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(g.key.trim()) || y.value.has(g.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: b
            }, null, 42, Oi), [
              [xe, g.key]
            ]),
            y.value.has(g.key.trim()) ? (t(), a("p", Li, " Letters, numbers, underscores and dashes only. ")) : p.value.has(g.key.trim()) ? (t(), a("p", Vi, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          ue(o("input", {
            "onUpdate:modelValue": (f) => g.value = f,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: b
          }, null, 40, Di), [
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
          ])], 8, Ti)
        ]))), 128))
      ])) : (t(), a("p", Ii, " Nothing here yet. ")),
      o("div", Fi, [
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
        ], 8, Ei),
        e.maxPairs !== null ? (t(), a("p", Ni, c(u.value.length) + " of " + c(e.maxPairs), 1)) : $("", !0)
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
}, Yi = /* @__PURE__ */ j({
  __name: "PkRichEditor",
  props: {
    modelValue: {},
    toolbar: { default: () => ["bold", "italic", "heading", "list", "link"] },
    maxLength: { default: null },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: "Write a note…" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null);
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
    ], d = k(() => u.filter((C) => l.toolbar.includes(C.id))), m = k(() => l.toolbar.includes("link")), b = K(0);
    function p() {
      const C = s.value?.innerHTML ?? "", h = (s.value?.innerText ?? "").trim();
      b.value = h.length;
      const v = h === "" ? null : C;
      i = v, r("update:modelValue", v);
    }
    function y(C) {
      l.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), p());
    }
    function M() {
      if (l.disabled)
        return;
      const C = window.prompt("Link address");
      C && (s.value?.focus(), document.execCommand("createLink", !1, C), p());
    }
    function w(C) {
      C.preventDefault();
      const h = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, h), p();
    }
    return fe(() => {
      s.value && (s.value.innerHTML = l.modelValue ?? "", b.value = s.value.innerText.trim().length);
    }), de(
      () => l.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", b.value = s.value.innerText.trim().length);
      }
    ), (C, h) => (t(), a("div", Ui, [
      o("div", Hi, [
        (t(!0), a(z, null, D(d.value, (v) => (t(), a("button", {
          key: v.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: v.label,
          "aria-label": v.label,
          onMousedown: h[0] || (h[0] = ce(() => {
          }, ["prevent"])),
          onClick: (g) => y(v)
        }, [
          (t(), a("svg", Ki, [
            o("path", {
              d: v.path
            }, null, 8, Gi)
          ]))
        ], 40, qi))), 128)),
        m.value ? (t(), a("button", {
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
        ])], 40, Wi)) : $("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: A(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: w
      }, null, 42, Zi),
      e.maxLength !== null ? (t(), a("div", Ji, c(b.value) + " / " + c(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), Xi = /* @__PURE__ */ Ct(Yi, [["__scopeId", "data-v-32c63bc7"]]), Qi = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, eu = { class: "flex items-center justify-between gap-2" }, tu = ["for"], au = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, lu = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs"
}, nu = ["aria-label", "disabled"], ou = {
  key: 7,
  class: "flex flex-col gap-2"
}, su = ["id", "value", "disabled"], ru = ["value"], iu = {
  key: 0,
  class: "relative"
}, uu = ["disabled"], du = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, cu = { class: "max-h-56 overflow-y-auto p-1" }, fu = ["onClick"], mu = {
  key: 8,
  class: "relative"
}, pu = ["disabled", "aria-invalid"], vu = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, gu = { class: "max-h-56 overflow-y-auto p-1" }, hu = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, bu = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, xu = ["onClick"], yu = ["id", "value", "disabled", "aria-invalid"], ku = ["value"], $u = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, wu = { class: "text-muted-foreground" }, Cu = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Su = { class: "text-muted-foreground" }, Mu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], _u = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Bu = ["aria-label", "disabled"], Pu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], zu = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Au = ["aria-label", "disabled"], ju = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ou = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Lu = ["aria-label", "disabled"], Vu = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Du = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Tu = ["aria-label", "disabled"], Iu = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Fu = ["disabled", "aria-pressed", "onClick"], Eu = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Nu = ["title", "disabled", "onClick"], Ru = ["href"], Uu = {
  key: 19,
  class: "text-destructive text-xs",
  role: "alert"
}, Hu = {
  key: 20,
  class: "text-muted-foreground text-xs"
}, qu = { class: "space-y-3" }, Ku = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Gu = ["for"], Wu = ["id", "type", "required", "placeholder", "value", "onInput"], Zu = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", Ju = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", qe = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = Ot(() => import("./PkRepeater-J84jGe3T.js")), r = Ot(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = n, u = K(!1), d = K(""), m = K([]), b = K(!1), p = K(null);
    let y;
    de(d, (E) => {
      s.searchOptions && (clearTimeout(y), b.value = !0, y = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(E);
        } catch {
        } finally {
          b.value = !1;
        }
      }, 200));
    });
    async function M() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, m.value.length === 0 && s.searchOptions)) {
        b.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          b.value = !1;
        }
      }
    }
    function w(E) {
      p.value = E.label, i("change", E.value), u.value = !1, d.value = "";
    }
    function C() {
      p.value = null, i("change", null);
    }
    const h = Je("panelPicker", null), v = Je("panelCreateOption", null), g = K(!1), f = K(!1), S = K({}), _ = K(null);
    function P() {
      S.value = {}, _.value = null, g.value = !0, u.value = !1;
    }
    async function G() {
      if (v) {
        f.value = !0, _.value = null;
        try {
          const E = await v.run(s.field.key, { ...S.value });
          w(E), g.value = !1;
        } catch (E) {
          _.value = E instanceof Error ? E.message : "Could not create that option.";
        } finally {
          f.value = !1;
        }
      }
    }
    const N = k(() => {
      if (!s.field.tableSelect || !h?.base)
        return;
      const E = h.returnUrl || "/";
      return `${h.base}/pick/${s.field.key}?return=${encodeURIComponent(E)}`;
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
    const U = k(() => oi(s.field.type)), T = k(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function Y(E) {
      if (E) {
        if (E.copy) {
          const L = s.value == null ? "" : String(s.value);
          L !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(L);
          return;
        }
        E.url && typeof window < "u" && window.open(E.url, "_blank", "noopener,noreferrer");
      }
    }
    function B(E) {
      const L = document.getElementById(`f-${s.field.key}`);
      if (!(L instanceof HTMLTextAreaElement) && !(L instanceof HTMLInputElement))
        return;
      const O = L.selectionStart ?? L.value.length, J = L.selectionEnd ?? O;
      L.setRangeText(E, O, J, "end"), L.dispatchEvent(new Event("input", { bubbles: !0 })), L.focus();
    }
    return (E, L) => (t(), a(z, null, [
      e.field.type === "hidden" ? (t(), a(z, { key: 0 }, [], 64)) : (t(), a("div", Qi, [
        o("div", eu, [
          o("label", {
            for: `f-${e.field.key}`,
            class: A(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
          }, [
            R(c(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", au, "*")) : $("", !0)
          ], 10, tu),
          e.field.hint ? (t(), a("span", lu, [
            R(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: L[0] || (L[0] = (O) => Y(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, nu)) : $("", !0)
          ])) : $("", !0)
        ]),
        U.value ? (t(), I(he(U.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": L[1] || (L[1] = (O) => i("change", O))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), I(sa, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": L[2] || (L[2] = (O) => i("change", O))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), I(x(l), {
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
          "onUpdate:modelValue": L[3] || (L[3] = (O) => i("change", O))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), I(x(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": L[4] || (L[4] = (O) => i("change", O))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), I(Xi, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": L[5] || (L[5] = (O) => i("change", O))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), I(Ri, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": L[6] || (L[6] = (O) => i("change", O))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), I(Bt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": L[7] || (L[7] = (O) => i("change", O))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : ee.value.length ? (t(), a("div", ou, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: H.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            onChange: L[8] || (L[8] = (O) => W(O.target.value))
          }, [
            L[26] || (L[26] = o("option", { value: "" }, "Type", -1)),
            (t(!0), a(z, null, D(ee.value, (O) => (t(), a("option", {
              key: O.value,
              value: O.value
            }, c(O.label), 9, ru))), 128))
          ], 40, su),
          H.value.type && e.searchOptions ? (t(), a("div", iu, [
            o("button", {
              type: "button",
              class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              disabled: e.field.disabled || e.processing,
              onClick: M
            }, [
              o("span", {
                class: A(p.value || H.value.id ? "" : "text-muted-foreground")
              }, c(p.value ?? (H.value.id ? String(H.value.id) : "Search…")), 3)
            ], 8, uu),
            u.value ? (t(), a("div", du, [
              ue(o("input", {
                "onUpdate:modelValue": L[9] || (L[9] = (O) => d.value = O),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [xe, d.value]
              ]),
              o("div", cu, [
                (t(!0), a(z, null, D(m.value, (O) => (t(), a("button", {
                  key: String(O.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (J) => te(O)
                }, c(O.label), 9, fu))), 128))
              ])
            ])) : $("", !0),
            u.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: L[10] || (L[10] = (O) => u.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", mu, [
          o("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: M
          }, [
            o("span", {
              class: A(p.value || e.value ? "" : "text-muted-foreground")
            }, c(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: ce(C, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 8, pu),
          u.value ? (t(), a("div", vu, [
            ue(o("input", {
              "onUpdate:modelValue": L[11] || (L[11] = (O) => d.value = O),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [xe, d.value]
            ]),
            o("div", gu, [
              b.value ? (t(), a("p", hu, " Searching… ")) : m.value.length === 0 ? (t(), a("p", bu, " No matches ")) : $("", !0),
              (t(!0), a(z, null, D(m.value, (O) => (t(), a("button", {
                key: String(O.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (J) => w(O)
              }, c(O.label), 9, xu))), 128)),
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
            onClick: L[12] || (L[12] = (O) => u.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: L[13] || (L[13] = (O) => i("change", O.target.value || null))
        }, [
          L[27] || (L[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), a(z, null, D(e.options, (O) => (t(), a("option", {
            key: String(O.value),
            value: O.value
          }, c(O.label), 9, ku))), 128))
        ], 40, yu)) : e.field.type === "toggle" ? (t(), a("label", $u, [
          F(x(De), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": L[14] || (L[14] = (O) => i("change", O))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", wu, c(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", Cu, [
          F(x(Or), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": L[15] || (L[15] = (O) => i("change", O === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", Su, c(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !T.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onInput: L[16] || (L[16] = (O) => i("change", O.target.value))
        }, null, 40, Mu)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: A(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", _u, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: L[17] || (L[17] = (O) => Y(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Bu)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: L[18] || (L[18] = (O) => i("change", O.target.value))
          }, null, 40, Pu),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", zu, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: L[19] || (L[19] = (O) => Y(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Au)) : $("", !0)
        ], 2)) : T.value ? (t(), a("div", {
          key: 15,
          class: A(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Ou, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: L[21] || (L[21] = (O) => Y(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Lu)) : $("", !0),
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
            class: A(Ju),
            onInput: L[22] || (L[22] = (O) => i("change", O.target.value))
          }, null, 40, Vu),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Du, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: L[23] || (L[23] = (O) => Y(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Tu)) : $("", !0)
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
          class: A(Zu),
          onInput: L[20] || (L[20] = (O) => i("change", O.target.value))
        }, null, 40, ju)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", Iu, [
          (t(!0), a(z, null, D(e.field.presets, (O) => (t(), a("button", {
            key: O,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: A([
              "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == O ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == O
            ),
            onClick: (J) => i("change", String(O))
          }, c(O), 11, Fu))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", Eu, [
          (t(!0), a(z, null, D(e.field.chips, (O, J) => (t(), a("button", {
            key: J,
            type: "button",
            title: O,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (Q) => B(String(J))
          }, c(J), 9, Nu))), 128))
        ])) : $("", !0),
        N.value ? (t(), a("a", {
          key: 18,
          href: N.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Ru)) : $("", !0),
        e.error ? (t(), a("p", Uu, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", Hu, c(e.field.help), 1)) : $("", !0)
      ])),
      e.field.createOption && x(v) ? (t(), I(Ye, {
        key: 2,
        open: g.value,
        title: "Create",
        busy: f.value,
        onClose: L[25] || (L[25] = (O) => g.value = !1)
      }, {
        footer: V(() => [
          F(se, {
            type: "button",
            variant: "outline",
            disabled: f.value,
            onClick: L[24] || (L[24] = (O) => g.value = !1)
          }, {
            default: V(() => [...L[28] || (L[28] = [
              R(" Cancel ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          F(se, {
            type: "button",
            disabled: f.value,
            onClick: G
          }, {
            default: V(() => [...L[29] || (L[29] = [
              R("Save", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ]),
        default: V(() => [
          o("div", qu, [
            _.value ? (t(), a("p", Ku, c(_.value), 1)) : $("", !0),
            (t(!0), a(z, null, D(e.field.createOption, (O) => (t(), a("div", {
              key: O.key,
              class: "flex flex-col gap-1"
            }, [
              o("label", {
                class: "text-sm font-medium",
                for: `create-${e.field.key}-${O.key}`
              }, c(O.label), 9, Gu),
              o("input", {
                id: `create-${e.field.key}-${O.key}`,
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                type: O.inputType === "email" ? "email" : "text",
                required: O.required,
                placeholder: O.placeholder,
                value: S.value[O.key] ?? "",
                onInput: (J) => S.value[O.key] = J.target.value
              }, null, 40, Wu)
            ]))), 128))
          ])
        ]),
        _: 1
      }, 8, ["open", "busy"])) : $("", !0)
    ], 64));
  }
}), Yu = { class: "flex flex-col gap-2" }, Xu = { class: "min-w-0 flex-1" }, Qu = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, ed = ["disabled", "aria-label", "onClick"], td = ["disabled", "aria-label", "onClick"], ad = ["disabled", "title", "aria-label", "onClick"], ld = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, nd = ["disabled"], a4 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n;
    let s = 0;
    const i = K(u(l.modelValue));
    function u(g) {
      return Array.isArray(g) ? g.map((f) => ({ uid: s++, data: { ...f } })) : [];
    }
    de(
      () => l.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(d()) && (i.value = u(g));
      }
    );
    function d() {
      const g = [];
      for (const f of i.value) {
        const S = {};
        let _ = !1;
        for (const P of l.children) {
          const G = f.data[P.key] ?? null;
          S[P.key] = G, G !== null && G !== "" && !(Array.isArray(G) && G.length === 0) && (_ = !0);
        }
        _ && g.push(S);
      }
      return g.length ? g : null;
    }
    function m() {
      r("update:modelValue", d());
    }
    const b = k(() => l.maxItems !== null && i.value.length >= l.maxItems), p = k(() => l.minItems !== null && i.value.length <= l.minItems), y = k(() => l.children.length === 1);
    function M() {
      if (b.value || l.disabled)
        return;
      const g = {};
      for (const f of l.children)
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
      const _ = [...i.value], [P] = _.splice(g, 1);
      _.splice(S, 0, P), i.value = _, m();
    }
    function h(g, f, S) {
      const _ = i.value.find((P) => P.uid === g);
      _ && (_.data[f] = S, m());
    }
    function v(g, f) {
      return l.errors[`${l.fieldKey}.${g}.${f}`];
    }
    return (g, f) => (t(), a("div", Yu, [
      (t(!0), a(z, null, D(i.value, (S, _) => (t(), a("div", {
        key: S.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", y.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, c(_ + 1), 3),
        o("div", Xu, [
          y.value ? (t(), I(qe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: S.data[e.children[0].key],
            error: v(_, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => h(S.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Qu, [
            (t(!0), a(z, null, D(e.children, (P) => (t(), I(qe, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: S.data[P.key],
              error: v(_, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (G) => h(S.uid, P.key, G)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: A(["flex shrink-0 items-center gap-0.5", y.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === 0,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} up`,
            onClick: (P) => C(_, -1)
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
          ])], 8, ed),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || _ === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${_ + 1} down`,
            onClick: (P) => C(_, 1)
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
          ])], 8, td),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${_ + 1}`,
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
          ])], 8, ad)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", ld, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
      b.value ? $("", !0) : (t(), a("button", {
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
      ], 8, nd))
    ]));
  }
}), od = { class: "space-y-1" }, sd = { class: "flex items-center gap-1" }, rd = ["disabled", "title", "aria-label", "onClick"], id = ["aria-pressed"], ud = ["id", "value", "rows", "disabled"], dd = ["innerHTML"], cd = /* @__PURE__ */ j({
  __name: "PkMarkdownInput",
  props: {
    modelValue: { default: "" },
    rows: { default: 12 },
    toolbar: {},
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!1), i = k(() => l.modelValue ?? "");
    function u(y) {
      return y.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = k(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(y, M = y) {
      const w = document.getElementById(l.id ?? "");
      if (w === null)
        return;
      const C = w.selectionStart, h = w.selectionEnd, v = i.value.slice(C, h);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${y}${v}${M}${i.value.slice(h)}`
      );
    }
    const b = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = k(
      () => (l.toolbar ?? Object.keys(b)).filter((y) => y in b)
    );
    return (y, M) => (t(), a("div", od, [
      o("div", sd, [
        (t(!0), a(z, null, D(p.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => b[w].run()
        }, c(b[w].label), 9, rd))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: M[0] || (M[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, id)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, dd)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, ud))
    ]));
  }
}), fd = { class: "space-y-1" }, md = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, pd = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, vd = ["id", "value", "rows", "disabled"], gd = { class: "text-muted-foreground text-xs" }, hd = {
  key: 0,
  class: "text-destructive text-xs"
}, bd = /* @__PURE__ */ j({
  __name: "PkCodeInput",
  props: {
    modelValue: { default: "" },
    language: { default: "plain" },
    rows: { default: 14 },
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(!0), u = k(() => l.modelValue ?? ""), d = k(() => Math.max(u.value.split(`
`).length, 1)), m = k(() => {
      if (l.language !== "json" || u.value.trim() === "")
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
      const M = y.target, w = M.selectionStart, C = M.selectionEnd, h = `${u.value.slice(0, w)}    ${u.value.slice(C)}`;
      r("update:modelValue", h), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = w + 4;
      });
    }
    return (y, M) => (t(), a("div", fd, [
      o("div", md, [
        o("div", pd, [
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
          onInput: b,
          onKeydown: p
        }, null, 40, vd)
      ]),
      o("p", gd, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", hd, c(m.value), 1)) : $("", !0)
    ]));
  }
}), xd = { class: "space-y-3" }, yd = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, kd = { class: "text-sm font-medium" }, $d = { class: "flex items-center gap-1" }, wd = ["disabled", "onClick"], Cd = ["disabled", "onClick"], Sd = ["disabled", "onClick"], Md = { class: "space-y-3 p-3" }, _d = { class: "flex flex-wrap items-center gap-2" }, Bd = ["disabled", "onClick"], Pd = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, l4 = /* @__PURE__ */ j({
  __name: "PkBuilder",
  props: {
    modelValue: { default: null },
    blocks: { default: () => [] },
    maxBlocks: { default: null },
    disabled: { type: Boolean, default: !1 },
    errors: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(() => l.modelValue ?? []), i = k(
      () => Object.fromEntries(l.blocks.map((M) => [M.type, M]))
    ), u = k(() => l.maxBlocks !== null && s.value.length >= l.maxBlocks);
    function d(M) {
      r("update:modelValue", M);
    }
    function m(M) {
      u.value || d([...s.value, { type: M, data: {} }]);
    }
    function b(M) {
      d(s.value.filter((w, C) => C !== M));
    }
    function p(M, w) {
      const C = M + w;
      if (C < 0 || C >= s.value.length)
        return;
      const h = [...s.value], [v] = h.splice(M, 1);
      h.splice(C, 0, v), d(h);
    }
    function y(M, w, C) {
      d(
        s.value.map(
          (h, v) => v === M ? { ...h, data: { ...h.data, [w]: C } } : h
        )
      );
    }
    return (M, w) => (t(), a("div", xd, [
      (t(!0), a(z, null, D(s.value, (C, h) => (t(), a("div", {
        key: `${C.type}-${h}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", yd, [
          o("span", kd, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", $d, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || h === 0,
              "aria-label": "Move up",
              onClick: (v) => p(h, -1)
            }, " ↑ ", 8, wd),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || h === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (v) => p(h, 1)
            }, " ↓ ", 8, Cd),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (v) => b(h)
            }, " Remove ", 8, Sd)
          ])
        ]),
        o("div", Md, [
          (t(!0), a(z, null, D(i.value[C.type]?.fields ?? [], (v) => (t(), I(qe, {
            key: v.key,
            field: v,
            value: C.data[v.key] ?? null,
            error: e.errors?.[v.key],
            processing: e.disabled,
            onChange: (g) => y(h, v.key, g)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", _d, [
        (t(!0), a(z, null, D(e.blocks, (C) => (t(), a("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (h) => m(C.type)
        }, " + " + c(C.label), 9, Bd))), 128)),
        u.value ? (t(), a("span", Pd, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), zd = ["name", "value", "checked", "disabled", "onChange"], Ad = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, jd = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PkRadioGroup",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n;
    function s(i) {
      return l.modelValue != null && i.value == l.modelValue;
    }
    return (i, u) => (t(), a("div", {
      role: "radiogroup",
      class: A(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(z, null, D(e.options, (d) => (t(), a("label", {
        key: String(d.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: s(d),
          disabled: e.disabled,
          onChange: (m) => r("update:modelValue", d.value)
        }, null, 40, zd),
        R(" " + c(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Ad, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), Od = ["value", "checked", "disabled", "onChange"], Ld = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Vd = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PkCheckboxList",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
    );
    function i(m) {
      return s.value.some((b) => b == m.value);
    }
    function u(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((b) => b != m.value) : [...s.value, m.value]
      );
    }
    const d = k(
      () => l.field.columns && l.field.columns > 1 ? { gridTemplateColumns: `repeat(${l.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, b) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ae(d.value)
    }, [
      (t(!0), a(z, null, D(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (y) => u(p)
        }, null, 40, Od),
        R(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Ld, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), Dd = { class: "flex flex-col gap-1.5" }, Td = ["aria-label", "onClick"], Id = ["placeholder", "disabled", "maxlength"], Fd = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Ed = ["onClick"], Nd = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Rd = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(""), i = k(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
    ), u = k(() => i.value.length >= (l.field.max ?? 25)), d = k(
      () => (l.field.suggestions ?? []).filter(
        (y) => !i.value.some((M) => M.toLowerCase() === y.toLowerCase())
      )
    );
    function m(y) {
      const M = y.trim().slice(0, l.field.maxLength ?? 40);
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
    function b(y) {
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
      y.key === "Backspace" && s.value === "" && i.value.length > 0 && b(i.value.length - 1);
    }
    return (y, M) => (t(), a("div", Dd, [
      o("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
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
            onClick: (h) => b(C)
          }, " × ", 8, Td))
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
        }, null, 40, Id), [
          [xe, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), a("div", Fd, [
        M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(z, null, D(d.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => m(w)
        }, c(w), 9, Ed))), 128))
      ])) : $("", !0),
      u.value ? (t(), a("p", Nd, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), Ud = 4.5, Ft = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ra(e) {
  let n = e.replace("#", "");
  return n.length === 3 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}
function rt(e) {
  const n = e / 255;
  return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
}
function gt(e) {
  const [n, l, r] = ra(e);
  return 0.2126 * rt(n) + 0.7152 * rt(l) + 0.0722 * rt(r);
}
function ia(e, n) {
  const l = gt(e), r = gt(n);
  return (Math.max(l, r) + 0.05) / (Math.min(l, r) + 0.05);
}
function Hd(e, n, l) {
  if (!Ft.test(e) || !Ft.test(n))
    return e;
  const r = gt(n) > 0.5, s = r ? 0 : 255;
  let i = ra(e);
  for (let u = 0; u <= 20; u++) {
    const d = qd(i);
    if (ia(d, n) >= l)
      return d;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function qd(e) {
  return "#" + e.map(
    (n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")
  ).join("");
}
const Kd = { class: "flex flex-col gap-2" }, Gd = { class: "flex items-center gap-2" }, Wd = {
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
}, Zd = ["value", "disabled", "aria-label"], Jd = ["value", "disabled", "placeholder"], Yd = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Xd = ["aria-label", "title", "onClick"], Qd = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, ec = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = k(() => typeof l.modelValue == "string" ? l.modelValue : ""), u = k(() => s.test(i.value));
    function d(w) {
      const C = w.trim();
      if (C === "")
        return "";
      const h = C.startsWith("#") ? C : `#${C}`;
      return s.test(h) ? h.toLowerCase() : C;
    }
    function m(w) {
      r("update:modelValue", d(w.target.value));
    }
    const b = k(() => !u.value || !l.field.contrastBackground || !s.test(l.field.contrastBackground) ? null : ia(i.value, l.field.contrastBackground)), p = k(() => l.field.contrastMinRatio ?? Ud), y = k(() => b.value !== null && b.value < p.value);
    function M() {
      l.field.contrastBackground && r(
        "update:modelValue",
        Hd(i.value, l.field.contrastBackground, p.value)
      );
    }
    return (w, C) => (t(), a("div", Kd, [
      o("div", Gd, [
        u.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (h) => r("update:modelValue", h.target.value))
        }, null, 40, Zd)) : (t(), a("span", Wd)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, Jd)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Yd, [
        (t(!0), a(z, null, D(e.field.presets, (h) => (t(), a("button", {
          key: h,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === h.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ae({ backgroundColor: h }),
          "aria-label": h,
          title: h,
          onClick: (v) => r("update:modelValue", h.toLowerCase())
        }, null, 14, Xd))), 128))
      ])) : $("", !0),
      y.value ? (t(), a("p", Qd, [
        o("span", null, " This fails contrast at " + c(b.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), tc = { class: "flex items-center gap-3" }, ac = ["min", "max", "step", "value", "disabled", "aria-label"], lc = { class: "flex shrink-0 items-center gap-1" }, nc = ["min", "max", "step", "value", "disabled"], oc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, sc = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(() => l.field.min ?? 0), i = k(() => l.field.max ?? 100), u = k(() => l.field.step ?? 1), d = k(() => {
      const p = Number(l.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), m = k(
      () => l.modelValue === null || l.modelValue === void 0 || l.modelValue === ""
    );
    function b(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const y = Number(p);
      r("update:modelValue", Number.isFinite(y) ? y : null);
    }
    return (p, y) => (t(), a("div", tc, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: y[0] || (y[0] = (M) => b(M.target.value))
      }, null, 40, ac),
      o("div", lc, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: m.value ? "" : d.value,
          disabled: e.disabled,
          onInput: y[1] || (y[1] = (M) => b(M.target.value))
        }, null, 40, nc),
        e.field.unit ? (t(), a("span", oc, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), We = /* @__PURE__ */ new Map();
function it(e, n) {
  We.set(e, n);
}
function rc(e) {
  return We.get(e);
}
function n4(e) {
  return We.has(e);
}
function ic() {
  return [...We.keys()].sort();
}
function o4() {
  We.clear();
}
const uc = ["name", "value", "checked", "disabled", "onChange"], dc = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, cc = { class: "whitespace-nowrap" }, fc = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, mc = ["name", "value", "checked", "disabled", "onChange"], pc = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, vc = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, gc = { class: "text-center text-xs font-medium" }, hc = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, bc = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, xc = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PkVisualSelect",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(
      () => l.field.preview ? rc(l.field.preview) : void 0
    ), i = k(() => !!l.field.preview && !s.value), u = k(() => l.field.layout === "segmented"), d = k(() => {
      switch (l.field.columns ?? 3) {
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
    function m(b) {
      return l.modelValue != null && b.value == l.modelValue;
    }
    return (b, p) => u.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(z, null, D(e.options, (y) => (t(), a("label", {
        key: String(y.value),
        class: A(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
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
        }, null, 40, uc),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", dc, [
          (t(), I(he(s.value), {
            value: y.value,
            label: y.label,
            selected: m(y)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", cc, c(y.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", fc, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", d.value])
    }, [
      (t(!0), a(z, null, D(e.options, (y) => (t(), a("label", {
        key: String(y.value),
        class: A(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
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
        }, null, 40, mc),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", pc, [
          s.value ? (t(), I(he(s.value), {
            key: 0,
            value: y.value,
            label: y.label,
            selected: m(y)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", vc, " no preview ")) : $("", !0)
        ]),
        o("span", gc, c(y.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", hc, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", bc, [
        p[2] || (p[2] = R(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        R(". Registered: " + c(x(ic)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), yc = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, kc = /* @__PURE__ */ j({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (n, l) => (t(), a("span", yc, [
      o("span", {
        class: "block size-full",
        style: ae({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), $c = { class: "flex flex-col items-center gap-1 text-center" }, wc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ua = /* @__PURE__ */ j({
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
    const n = e, l = k(() => n.mono ? "#000000" : n.accent), r = k(() => {
      switch (n.style) {
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
    return (s, i) => (t(), a("div", $c, [
      o("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ae({ borderColor: l.value, color: l.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", wc, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), Cc = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Sc = { class: "flex items-center gap-3" }, Mc = ["src"], _c = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Bc = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Pc = {
  key: 0,
  class: "text-right text-sm"
}, zc = { class: "text-neutral-500" }, Ac = { class: "tabular-nums" }, jc = { key: 1 }, Oc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Lc = { class: "mt-2 font-medium" }, Vc = { key: 2 }, Dc = { class: "w-full text-sm" }, Tc = { class: "w-full py-3 pr-2" }, Ic = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Fc = { key: 0 }, Ec = ["colspan"], Nc = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Rc = { class: "w-64 text-sm" }, Uc = { class: "tabular-nums" }, Hc = {
  key: 3,
  class: "py-2"
}, qc = { key: 4 }, Kc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Gc = { class: "mt-2 flex flex-col gap-1 text-sm" }, Wc = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Zc = { key: 0 }, Jc = {
  key: 1,
  class: "mt-1"
}, Yc = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Xc = /* @__PURE__ */ j({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const n = e;
    function l() {
      return n.document.branding.mono ? "#000000" : n.document.branding.accent;
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
    return (m, b) => (t(), a("article", Cc, [
      o("div", Sc, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Mc)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ae({ color: l() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), a(z, null, D(e.document.blocks, (p, y) => (t(), a(z, { key: y }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ae({ borderColor: l() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ae({ color: l() })
            }, c(p.title), 5),
            p.subtitle ? (t(), a("p", _c, c(p.subtitle), 1)) : $("", !0),
            p.reference ? (t(), a("p", Bc, c(p.reference), 1)) : $("", !0)
          ]),
          r(p).length ? (t(), a("dl", Pc, [
            (t(!0), a(z, null, D(r(p), (M, w) => (t(), a("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", zc, c(M.label), 1),
              o("dd", Ac, c(M.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", jc, [
          o("h2", Oc, c(p.heading), 1),
          o("p", Lc, c(p.name), 1),
          (t(!0), a(z, null, D(u(p.lines), (M, w) => (t(), a("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, c(M), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", Vc, [
          o("table", Dc, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ae({ borderColor: l() })
              }, [
                (t(!0), a(z, null, D(u(p.columns), (M, w) => (t(), a("th", {
                  key: w,
                  class: A(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(M), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(z, null, D(s(p), (M, w) => (t(), a("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                o("td", Tc, [
                  o("p", null, c(M.description), 1),
                  M.detail ? (t(), a("p", Ic, c(M.detail), 1)) : $("", !0)
                ]),
                (t(!0), a(z, null, D(M.cells, (C, h) => (t(), a("td", {
                  key: h,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Fc, [
                o("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, Ec)
              ])) : $("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Nc, [
            o("dl", Rc, [
              (t(!0), a(z, null, D(i(p), (M, w) => (t(), a("div", {
                key: w,
                class: A([
                  "flex justify-between py-1",
                  M.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ae(M.strong ? { color: l(), borderColor: l() } : void 0)
              }, [
                o("dt", {
                  class: A(M.strong ? "" : "text-neutral-600")
                }, c(M.label), 3),
                o("dd", Uc, c(M.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : p.type === "code" ? (t(), a("section", Hc, [
          F(ua, {
            code: d(p.code),
            caption: d(p.caption),
            style: ae(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", qc, [
          o("h2", Kc, c(p.heading), 1),
          o("ol", Gc, [
            (t(!0), a(z, null, D(u(p.items), (M, w) => (t(), a("li", {
              key: w,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ae({ color: l() })
              }, c(w + 1) + ".", 5),
              o("span", null, c(M), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: A(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ae(p.emphasis ? { color: l() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), a("footer", Wc, [
          p.text ? (t(), a("p", Zc, c(p.text), 1)) : $("", !0),
          u(p.contacts).length ? (t(), a("p", Jc, c(u(p.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), a("p", Yc, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Qc = ["aria-label", "title"], ef = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, tf = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, s4 = /* @__PURE__ */ j({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: n, set: l } = aa(), r = k(() => n.value.theme === "dark");
    function s() {
      l({ theme: r.value ? "light" : "dark" });
    }
    return (i, u) => (t(), a("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), a("svg", ef, [
        r.value ? (t(), a(z, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", tf))
      ]))
    ], 8, Qc));
  }
}), af = ["width", "height"], lf = { key: 0 }, nf = ["x1", "x2", "y1", "y2"], of = ["x", "y"], sf = ["x1", "x2", "y1", "y2"], rf = ["x", "y"], uf = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], df = ["x", "y", "width", "height", "fill", "fill-opacity"], cf = ["x", "y"], ff = ["x", "y"], mf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, pf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, vf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, gf = { class: "text-xs font-semibold tabular-nums" }, hf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, bf = { class: "text-muted-foreground" }, Et = 5.6, r4 = /* @__PURE__ */ j({
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
    const n = e, l = {
      danger: "var(--destructive)",
      warning: "var(--chart-4)",
      success: "var(--chart-2)",
      neutral: "var(--muted-foreground)"
    };
    function r(B) {
      return l[B] ?? B;
    }
    function s(B, E) {
      if (!n.thresholds?.length)
        return E;
      const L = n.thresholds.find((O) => B < O.max);
      return r(L ? L.color : n.aboveColor);
    }
    const i = K(null), u = K(560), d = K(null);
    let m = null;
    fe(() => {
      m = new ResizeObserver((B) => {
        u.value = Math.max(160, B[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), ve(() => m?.disconnect());
    const b = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = k(() => (n.series?.length ? n.series : n.data?.length ? [{ name: "", points: n.data }] : []).map((E, L) => ({
      ...E,
      color: E.color ?? b[L % b.length]
    }))), y = k(() => p.value[0]?.points.map((B) => B.label) ?? []), M = k(() => y.value.length), w = k(() => n.orientation === "horizontal"), C = k(() => Math.max(0, ...y.value.map((B) => B.length))), h = k(() => {
      if (!w.value)
        return n.showAxis ? 44 : 8;
      const B = C.value * Et + 16;
      return Math.round(Math.min(Math.max(60, B), u.value * 0.4));
    }), v = k(() => Math.max(4, Math.floor((h.value - 16) / Et)));
    function g(B) {
      return B.length <= v.value ? B : `${B.slice(0, v.value - 1)}…`;
    }
    const f = k(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: h.value
    })), S = k(() => ({
      w: Math.max(1, u.value - f.value.left - f.value.right),
      h: Math.max(1, n.height - f.value.top - f.value.bottom)
    })), _ = (B) => n.format ? n.format(B) : P(B);
    function P(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const G = k(() => {
      const B = y.value.map(
        (J, Q) => n.stacked ? p.value.reduce((le, oe) => le + Math.max(0, oe.points[Q]?.value ?? 0), 0) : Math.max(...p.value.map((le) => le.points[Q]?.value ?? 0))
      );
      if (n.maxValue)
        return n.maxValue;
      const E = Math.max(...B, 0);
      if (E <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(E));
      return ([1, 2, 2.5, 5, 10].find((J) => E <= J * L) ?? 10) * L;
    }), N = k(
      () => (w.value ? S.value.h : S.value.w) / Math.max(1, M.value)
    ), ee = k(() => N.value * 0.68), H = k(
      () => n.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), W = k(() => {
      const B = [], E = new Array(M.value).fill(0);
      return p.value.forEach((L, O) => {
        L.points.forEach((J, Q) => {
          const oe = Math.max(0, J.value) / G.value * (w.value ? S.value.w : S.value.h), Le = (w.value ? f.value.top : f.value.left) + Q * N.value + (N.value - ee.value) / 2, jt = n.stacked ? 0 : O * H.value;
          B.push(
            w.value ? {
              x: f.value.left + E[Q],
              y: Le + jt,
              w: oe,
              h: Math.max(0, H.value - 2),
              color: s(J.value, L.color),
              label: J.label,
              name: L.name,
              value: J.value,
              index: Q
            } : {
              x: Le + jt,
              y: f.value.top + S.value.h - oe - E[Q],
              w: Math.max(0, H.value - 2),
              h: oe,
              color: s(J.value, L.color),
              label: J.label,
              name: L.name,
              value: J.value,
              index: Q
            }
          ), n.stacked && (E[Q] += oe);
        });
      }), B;
    }), Z = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: G.value * (w.value ? B : 1 - B),
        x: f.value.left + S.value.w * B,
        y: f.value.top + S.value.h * B
      }))
    ), te = k(() => Math.max(1, Math.ceil(M.value / (w.value ? 14 : 10))));
    function U(B) {
      return B === M.value - 1 || B % te.value === 0;
    }
    function T(B) {
      return (w.value ? f.value.top : f.value.left) + B * N.value + N.value / 2;
    }
    const Y = k(() => d.value === null ? null : {
      label: y.value[d.value],
      rows: p.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[d.value]?.value ?? 0
      }))
    });
    return (B, E) => (t(), a("div", {
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
          onMouseleave: E[0] || (E[0] = (L) => d.value = null)
        }, [
          e.showAxis ? (t(), a("g", lf, [
            w.value ? (t(), a(z, { key: 0 }, [
              (t(!0), a(z, null, D(Z.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: f.value.top,
                y2: f.value.top + S.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, nf))), 128)),
              (t(!0), a(z, null, D(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(L.value)), 9, of))), 128))
            ], 64)) : (t(), a(z, { key: 1 }, [
              (t(!0), a(z, null, D(Z.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: f.value.left,
                x2: u.value - f.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, sf))), 128)),
              (t(!0), a(z, null, D(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: f.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(L.value)), 9, rf))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), a(z, null, D(y.value, (L, O) => (t(), a("rect", {
            key: `hit-${O}`,
            x: w.value ? f.value.left : f.value.left + O * N.value,
            y: w.value ? f.value.top + O * N.value : f.value.top,
            width: w.value ? S.value.w : N.value,
            height: w.value ? N.value : S.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === O ? 0.4 : 0,
            onMouseenter: (J) => d.value = O
          }, null, 40, uf))), 128)),
          (t(!0), a(z, null, D(W.value, (L, O) => (t(), a("rect", {
            key: `b-${O}`,
            x: L.x,
            y: L.y,
            width: L.w,
            height: L.h,
            fill: L.color,
            "fill-opacity": d.value === null || d.value === L.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, df))), 128)),
          w.value ? (t(!0), a(z, { key: 1 }, D(y.value, (L, O) => ue((t(), a("text", {
            key: `c-${O}`,
            x: f.value.left - 8,
            y: T(O) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(c(g(L)) + " ", 1),
            o("title", null, c(L), 1)
          ], 8, cf)), [
            [je, U(O)]
          ])), 128)) : (t(!0), a(z, { key: 2 }, D(y.value, (L, O) => ue((t(), a("text", {
            key: `c-${O}`,
            x: T(O),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(L), 9, ff)), [
            [je, U(O)]
          ])), 128))
        ], 40, af)),
        Y.value ? (t(), a("div", mf, [
          o("p", pf, c(Y.value.label), 1),
          (t(!0), a(z, null, D(Y.value.rows, (L, O) => (t(), a("div", {
            key: O,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ae({ background: L.color })
            }, null, 4),
            o("span", vf, c(L.name || "Value"), 1),
            o("span", gf, c(_(L.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", hf, [
          (t(!0), a(z, null, D(p.value, (L, O) => (t(), a("span", {
            key: O,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ae({ background: L.color })
            }, null, 4),
            o("span", bf, c(L.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), xf = ["width", "height"], yf = ["id"], kf = ["stop-color"], $f = ["stop-color"], wf = { key: 0 }, Cf = ["x1", "x2", "y1", "y2"], Sf = ["x", "y"], Mf = ["x", "y"], _f = ["x1", "x2", "y1", "y2"], Bf = ["d", "fill"], Pf = ["d", "stroke", "stroke-dasharray"], zf = ["cx", "cy", "fill"], Af = { key: 1 }, jf = ["x1", "x2", "y1", "y2"], Of = ["cx", "cy", "fill"], Lf = ["x", "y"], Vf = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Df = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Tf = { class: "text-xs font-semibold tabular-nums" }, If = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Ff = { class: "text-muted-foreground" }, Ef = /* @__PURE__ */ j({
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
    const n = e, l = k(() => b.value.some((B) => B.axis === "right")), r = K(null), s = K(560), i = K(null);
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
    ], m = Math.random().toString(36).slice(2, 9), b = k(() => (n.series?.length ? n.series : n.data?.length ? [{ name: "", points: n.data }] : []).map((E, L) => ({
      ...E,
      color: E.color ?? d[L % d.length]
    }))), p = k(() => b.value[0]?.points.map((B) => B.label) ?? []), y = k(() => p.value.length), M = k(() => ({
      top: 12,
      right: n.showAxis && l.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: n.showAxis ? 44 : 8
    })), w = (B) => n.format ? n.format(B) : C(B);
    function C(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function h(B) {
      const E = Math.max(...B, 0);
      if (E <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(E));
      return ([1, 2, 2.5, 5, 10].find((J) => E <= J * L) ?? 10) * L;
    }
    const v = k(
      () => h(
        b.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((E) => E.value))
      )
    ), g = k(
      () => h(
        b.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((E) => E.value))
      )
    ), f = k(() => ({
      w: Math.max(1, s.value - M.value.left - M.value.right),
      h: Math.max(1, n.height - M.value.top - M.value.bottom)
    }));
    function S(B) {
      return M.value.left + (y.value <= 1 ? 0 : B / (y.value - 1) * f.value.w);
    }
    function _(B, E = "left") {
      const L = E === "right" ? g.value : v.value;
      return M.value.top + f.value.h - B / L * f.value.h;
    }
    const P = k(
      () => b.value.map((B) => {
        const E = B.points.map((O, J) => ({
          ...O,
          x: S(J),
          y: _(O.value, B.axis ?? "left")
        })), L = B.stepped ? G(E) : N(E);
        return { ...B, pts: E, line: L, area: ee(L, E) };
      })
    );
    function G(B) {
      if (B.length === 0)
        return "";
      let E = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let L = 1; L < B.length; L++)
        E += ` L${B[L].x.toFixed(2)},${B[L - 1].y.toFixed(2)} L${B[L].x.toFixed(2)},${B[L].y.toFixed(2)}`;
      return E;
    }
    function N(B) {
      const E = B.length;
      if (E === 0)
        return "";
      if (E === 1)
        return `M${B[0].x},${B[0].y}`;
      const L = [], O = [];
      for (let le = 0; le < E - 1; le++)
        L[le] = B[le + 1].x - B[le].x, O[le] = L[le] === 0 ? 0 : (B[le + 1].y - B[le].y) / L[le];
      const J = [O[0]];
      for (let le = 1; le < E - 1; le++)
        if (O[le - 1] * O[le] <= 0)
          J[le] = 0;
        else {
          const oe = 2 * L[le] + L[le - 1], Le = L[le] + 2 * L[le - 1];
          J[le] = (oe + Le) / (oe / O[le - 1] + Le / O[le]);
        }
      J[E - 1] = O[E - 2];
      let Q = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let le = 0; le < E - 1; le++) {
        const oe = L[le] / 3;
        Q += ` C${(B[le].x + oe).toFixed(2)},${(B[le].y + J[le] * oe).toFixed(2)} ${(B[le + 1].x - oe).toFixed(2)},${(B[le + 1].y - J[le + 1] * oe).toFixed(2)} ${B[le + 1].x.toFixed(2)},${B[le + 1].y.toFixed(2)}`;
      }
      return Q;
    }
    function ee(B, E) {
      if (E.length === 0)
        return "";
      const L = M.value.top + f.value.h;
      return `${B} L${E[E.length - 1].x.toFixed(2)},${L} L${E[0].x.toFixed(2)},${L} Z`;
    }
    const H = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: M.value.top + f.value.h * B,
        value: v.value * (1 - B)
      }))
    ), W = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: M.value.top + f.value.h * B,
        value: g.value * (1 - B)
      }))
    ), Z = k(() => Math.max(1, Math.ceil(y.value / 8)));
    function te(B) {
      return B === y.value - 1 || B % Z.value === 0;
    }
    function U(B) {
      const E = B.currentTarget.getBoundingClientRect(), L = B.clientX - E.left - M.value.left, O = y.value <= 1 ? 1 : f.value.w / (y.value - 1);
      i.value = Math.min(y.value - 1, Math.max(0, Math.round(L / O)));
    }
    const T = k(() => {
      if (i.value === null || y.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: S(B),
        label: p.value[B],
        rows: P.value.map((E) => ({
          name: E.name,
          color: E.color,
          value: E.points[B]?.value ?? 0,
          y: E.pts[B]?.y ?? 0
        }))
      };
    }), Y = k(() => {
      if (!T.value)
        return {};
      const B = T.value.x > s.value * 0.6;
      return {
        left: `${T.value.x}px`,
        top: "8px",
        transform: B ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (B, E) => (t(), a("div", {
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
          onMouseleave: E[0] || (E[0] = (L) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(z, null, D(P.value, (L, O) => (t(), a("linearGradient", {
              id: `pk-fill-${x(m)}-${O}`,
              key: O,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": L.color,
                "stop-opacity": "0.25"
              }, null, 8, kf),
              o("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, $f)
            ], 8, yf))), 128))
          ]),
          e.showAxis ? (t(), a("g", wf, [
            (t(!0), a(z, null, D(H.value, (L) => (t(), a("line", {
              key: L.y,
              x1: M.value.left,
              x2: s.value - M.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Cf))), 128)),
            (t(!0), a(z, null, D(H.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: M.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(L.value)), 9, Sf))), 128)),
            l.value ? (t(!0), a(z, { key: 0 }, D(W.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - M.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(L.value)), 9, Mf))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), a(z, null, D(p.value, (L, O) => ue((t(), a("line", {
            key: `v-${O}`,
            x1: S(O),
            x2: S(O),
            y1: M.value.top,
            y2: M.value.top + f.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, _f)), [
            [je, te(O)]
          ])), 128)),
          (t(!0), a(z, null, D(P.value, (L, O) => (t(), a("g", {
            key: `s-${O}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${x(m)}-${O})`
            }, null, 8, Bf)) : $("", !0),
            o("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, Pf),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, zf)) : $("", !0)
          ]))), 128)),
          T.value ? (t(), a("g", Af, [
            o("line", {
              x1: T.value.x,
              x2: T.value.x,
              y1: M.value.top,
              y2: M.value.top + f.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, jf),
            (t(!0), a(z, null, D(T.value.rows, (L, O) => (t(), a("circle", {
              key: `d-${O}`,
              cx: T.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Of))), 128))
          ])) : $("", !0),
          (t(!0), a(z, null, D(p.value, (L, O) => ue((t(), a("text", {
            key: `x-${O}`,
            x: S(O),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(L), 9, Lf)), [
            [je, te(O)]
          ])), 128))
        ], 40, xf)),
        T.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ae(Y.value)
        }, [
          o("p", Vf, c(T.value.label), 1),
          (t(!0), a(z, null, D(T.value.rows, (L, O) => (t(), a("div", {
            key: O,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ae({ background: L.color })
            }, null, 4),
            o("span", Df, c(L.name || "Value"), 1),
            o("span", Tf, c(w(L.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && b.value.length > 1 ? (t(), a("div", If, [
          (t(!0), a(z, null, D(P.value, (L, O) => (t(), a("span", {
            key: O,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ae({ background: L.color })
            }, null, 4),
            o("span", Ff, c(L.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Nf = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Rf = { class: "text-muted-foreground text-[11px] capitalize" }, Uf = { class: "text-sm font-semibold tabular-nums" }, Hf = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ze = /* @__PURE__ */ j({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (n, l) => (t(), a("div", Nf, [
      o("p", Rf, c(e.label), 1),
      o("p", Uf, [
        R(c(e.value) + " ", 1),
        e.share ? (t(), a("span", Hf, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), qf = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Kf = ["width", "height", "viewBox", "aria-label"], Gf = ["d", "fill", "fill-opacity", "onMouseenter"], Wf = ["x", "y"], Zf = ["x", "y"], Jf = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Yf = ["onMouseenter"], Xf = { class: "min-w-0 flex-1 truncate capitalize" }, Qf = { class: "tabular-nums font-medium" }, em = { class: "text-muted-foreground w-9 text-right tabular-nums" }, i4 = /* @__PURE__ */ j({
  __name: "PieChart",
  props: {
    data: {},
    height: { default: 220 },
    type: { default: "doughnut" },
    format: {}
  },
  setup(e) {
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = k(() => n.data.reduce((v, g) => v + g.value, 0)), s = K(null), i = k(() => n.height), u = k(() => i.value / 2 - 4), d = k(() => n.type === "doughnut" ? u.value * 0.62 : 0);
    function m(v) {
      return l[v % l.length];
    }
    function b(v) {
      return 1 - Math.min(0.55, Math.floor(v / l.length) * 0.28);
    }
    const p = k(() => {
      if (r.value <= 0)
        return [];
      const v = i.value / 2;
      let g = -Math.PI / 2;
      return n.data.map((f, S) => {
        const _ = f.value / r.value, P = _ * Math.PI * 2, G = g, N = g + P;
        return g = N, {
          ...f,
          share: _,
          colour: m(S),
          opacity: b(S),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: _ >= 0.9999 ? w(v) : M(v, G, N, u.value, d.value)
        };
      });
    });
    function y(v, g, f) {
      return `${(v + Math.cos(g) * f).toFixed(2)},${(v + Math.sin(g) * f).toFixed(2)}`;
    }
    function M(v, g, f, S, _) {
      const P = f - g > Math.PI ? 1 : 0;
      return _ <= 0 ? `M${v},${v} L${y(v, g, S)} A${S},${S} 0 ${P} 1 ${y(v, f, S)} Z` : [
        `M${y(v, g, S)}`,
        `A${S},${S} 0 ${P} 1 ${y(v, f, S)}`,
        `L${y(v, f, _)}`,
        `A${_},${_} 0 ${P} 0 ${y(v, g, _)}`,
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
    const C = (v) => n.format ? n.format(v) : new Intl.NumberFormat().format(v), h = (v) => `${(v * 100).toFixed(v < 0.01 ? 2 : 0)}%`;
    return (v, g) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ae({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", qf, [
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
          onMouseenter: (_) => s.value = S,
          onMouseleave: g[0] || (g[0] = (_) => s.value = null)
        }, null, 40, Gf))), 128)),
        e.type === "doughnut" ? (t(), a(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : p.value[s.value].value)), 9, Wf),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, Zf)
        ], 64)) : $("", !0)
      ], 8, Kf)),
      o("ul", Jf, [
        (t(!0), a(z, null, D(p.value, (f, S) => (t(), a("li", {
          key: S,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === S ? "bg-muted" : ""]),
          onMouseenter: (_) => s.value = S,
          onMouseleave: g[1] || (g[1] = (_) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ae({ background: f.colour, opacity: f.opacity })
          }, null, 4),
          o("span", Xf, c(f.label), 1),
          o("span", Qf, c(C(f.value)), 1),
          o("span", em, c(h(f.share)), 1)
        ], 42, Yf))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), I(Ze, {
        key: 0,
        label: p.value[s.value].label,
        value: C(p.value[s.value].value),
        share: h(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), tm = ["width", "height", "viewBox", "aria-label"], am = { class: "text-border" }, lm = ["x1", "x2", "y1", "y2", "stroke-dasharray"], nm = { class: "fill-muted-foreground text-[10px]" }, om = ["x", "y"], sm = ["x", "y"], rm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], im = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, u4 = /* @__PURE__ */ j({
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
    const n = e, l = [
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
      () => n.series?.length ? n.series : [{ name: "", points: n.data ?? [] }]
    ), m = (Z, te) => te.color ?? l[Z % l.length], b = k(() => d.value.flatMap((Z) => Z.points)), p = k(() => b.value.some((Z) => typeof Z.r == "number")), y = { top: 12, right: 16, bottom: 32, left: 48 }, M = k(() => Math.max(10, s.value - y.left - y.right)), w = k(() => Math.max(10, n.height - y.top - y.bottom));
    function C(Z) {
      if (Z.length === 0)
        return [0, 1];
      const te = Math.min(...Z), U = Math.max(...Z), T = U - te || Math.abs(U) || 1;
      return [te - T * 0.08, U + T * 0.08];
    }
    const h = k(() => C(b.value.map((Z) => Z.x))), v = k(() => C(b.value.map((Z) => Z.y))), g = (Z) => {
      const [te, U] = h.value;
      return y.left + (Z - te) / (U - te) * M.value;
    }, f = (Z) => {
      const [te, U] = v.value;
      return y.top + w.value - (Z - te) / (U - te) * w.value;
    }, S = k(() => Math.max(...b.value.map((Z) => Z.r ?? 0), 0));
    function _(Z) {
      if (!p.value || !S.value)
        return 4;
      const te = Math.max(0, Z.r ?? 0) / S.value;
      return 3 + Math.sqrt(te) * (n.maxRadius - 3);
    }
    function P([Z, te]) {
      return Array.from({ length: 5 }, (U, T) => Z + (te - Z) / 4 * T);
    }
    const G = k(() => P(h.value)), N = k(() => P(v.value)), ee = (Z) => n.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), H = (Z) => n.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), W = k(() => {
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
        o("g", am, [
          (t(!0), a(z, null, D(N.value, (U, T) => (t(), a("line", {
            key: `gy-${T}`,
            x1: y.left,
            x2: y.left + M.value,
            y1: f(U),
            y2: f(U),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": T === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, lm))), 128))
        ]),
        o("g", nm, [
          (t(!0), a(z, null, D(N.value, (U, T) => (t(), a("text", {
            key: `ty-${T}`,
            x: y.left - 8,
            y: f(U) + 3,
            "text-anchor": "end"
          }, c(H(U)), 9, om))), 128)),
          (t(!0), a(z, null, D(G.value, (U, T) => (t(), a("text", {
            key: `tx-${T}`,
            x: g(U),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(ee(U)), 9, sm))), 128))
        ]),
        (t(!0), a(z, null, D(d.value, (U, T) => (t(), a("g", {
          key: `s-${T}`
        }, [
          (t(!0), a(z, null, D(U.points, (Y, B) => (t(), a("circle", {
            key: `p-${T}-${B}`,
            cx: g(Y.x),
            cy: f(Y.y),
            r: _(Y),
            fill: m(T, U),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(T, U),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== T || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (E) => i.value = { s: T, p: B },
            onMouseleave: te[0] || (te[0] = (E) => i.value = null)
          }, null, 40, rm))), 128))
        ]))), 128))
      ], 8, tm)),
      W.value ? (t(), I(Ze, {
        key: 0,
        label: W.value.point.label ?? W.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(W.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(W.value.point.y)}`,
        share: p.value && W.value.point.r != null ? String(W.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && d.value.length > 1 ? (t(), a("div", im, [
        (t(!0), a(z, null, D(d.value, (U, T) => (t(), a("span", {
          key: `l-${T}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ae({ backgroundColor: m(T, U) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + c(U.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), um = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, dm = ["width", "height", "viewBox"], cm = ["points"], fm = ["x1", "y1", "x2", "y2"], mm = ["points", "fill", "stroke"], pm = ["cx", "cy", "fill", "onMouseenter"], vm = ["x", "y", "text-anchor"], gm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, hm = { class: "truncate" }, d4 = /* @__PURE__ */ j({
  __name: "RadarChart",
  props: {
    series: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = k(
      () => n.series.map((f, S) => ({
        ...f,
        color: f.color ?? l[S % l.length]
      }))
    ), s = k(() => r.value[0]?.points.map((f) => f.label) ?? []), i = k(() => s.value.length), u = k(() => n.height), d = k(() => u.value / 2), m = k(() => u.value / 2 - 34), b = k(() => {
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
      const _ = p(f);
      return {
        x: d.value + Math.cos(_) * m.value * S,
        y: d.value + Math.sin(_) * m.value * S
      };
    }
    function M(f) {
      return Array.from({ length: i.value }, (S, _) => {
        const P = y(_, f);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = k(() => [0.25, 0.5, 0.75, 1].map((f) => ({ f, points: M(f) }))), C = k(
      () => r.value.map((f) => {
        const S = f.points.map((_) => Math.max(0, _.value) / b.value);
        return {
          name: f.name,
          color: f.color,
          values: f.points,
          outline: S.map((_, P) => {
            const G = y(P, _);
            return `${G.x.toFixed(2)},${G.y.toFixed(2)}`;
          }).join(" "),
          dots: S.map((_, P) => y(P, _))
        };
      })
    ), h = k(
      () => s.value.map((f, S) => {
        const _ = p(S), P = d.value + Math.cos(_) * (m.value + 14), G = d.value + Math.sin(_) * (m.value + 14), N = Math.cos(_);
        return {
          label: f,
          x: P,
          y: G + 3,
          anchor: Math.abs(N) < 0.2 ? "middle" : N > 0 ? "start" : "end"
        };
      })
    ), v = K(null), g = (f) => n.format ? n.format(f) : new Intl.NumberFormat().format(f);
    return (f, S) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ae({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", um, [
      (t(), a("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, D(w.value, (_) => (t(), a("polygon", {
          key: _.f,
          points: _.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, cm))), 128)),
        (t(!0), a(z, null, D(s.value, (_, P) => (t(), a("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: y(P, 1).x,
          y2: y(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, fm))), 128)),
        (t(!0), a(z, null, D(C.value, (_, P) => (t(), a("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: _.outline,
            fill: _.color,
            "fill-opacity": "0.16",
            stroke: _.color,
            "stroke-width": "2"
          }, null, 8, mm),
          (t(!0), a(z, null, D(_.dots, (G, N) => (t(), a("circle", {
            key: N,
            cx: G.x,
            cy: G.y,
            r: "3",
            fill: _.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => v.value = {
              series: _.name,
              axis: s.value[N],
              value: _.values[N]?.value ?? 0
            },
            onMouseleave: S[0] || (S[0] = (ee) => v.value = null)
          }, null, 40, pm))), 128))
        ]))), 128)),
        (t(!0), a(z, null, D(h.value, (_, P) => (t(), a("text", {
          key: `l-${P}`,
          x: _.x,
          y: _.y,
          "text-anchor": _.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(_.label), 9, vm))), 128))
      ], 8, dm)),
      e.showLegend ? (t(), a("ul", gm, [
        (t(!0), a(z, null, D(r.value, (_, P) => (t(), a("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ae({ background: _.color })
          }, null, 4),
          o("span", hm, c(_.name), 1)
        ]))), 128))
      ])) : $("", !0),
      v.value ? (t(), I(Ze, {
        key: 1,
        label: `${v.value.series} — ${v.value.axis}`,
        value: g(v.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), bm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, xm = ["width", "height", "viewBox"], ym = ["cx", "cy", "r"], km = ["d", "fill", "fill-opacity", "onMouseenter"], $m = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, wm = { class: "min-w-0 flex-1 truncate capitalize" }, Cm = { class: "font-medium tabular-nums" }, c4 = /* @__PURE__ */ j({
  __name: "PolarAreaChart",
  props: {
    data: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = K(null), s = k(() => n.height), i = k(() => s.value / 2), u = k(() => s.value / 2 - 6), d = k(() => Math.max(...n.data.map((M) => Math.max(0, M.value)), 0)), m = k(() => {
      const M = n.data.length;
      if (M === 0 || d.value <= 0)
        return [];
      const w = Math.PI * 2 / M;
      return n.data.map((C, h) => {
        const v = Math.sqrt(Math.max(0, C.value) / d.value), g = u.value * v, f = h * w - Math.PI / 2, S = f + w;
        return {
          ...C,
          color: l[h % l.length],
          share: d.value === 0 ? 0 : C.value / d.value,
          path: b(i.value, f, S, g)
        };
      });
    });
    function b(M, w, C, h) {
      if (h <= 0)
        return "";
      if (C - w >= Math.PI * 2 - 1e-6)
        return `M${M - h},${M} A${h},${h} 0 1 1 ${M + h},${M} A${h},${h} 0 1 1 ${M - h},${M} Z`;
      const v = C - w > Math.PI ? 1 : 0, g = M + Math.cos(w) * h, f = M + Math.sin(w) * h, S = M + Math.cos(C) * h, _ = M + Math.sin(C) * h;
      return `M${M},${M} L${g.toFixed(2)},${f.toFixed(2)} A${h.toFixed(2)},${h.toFixed(2)} 0 ${v} 1 ${S.toFixed(2)},${_.toFixed(2)} Z`;
    }
    const p = k(() => [0.5, 0.75, 1].map((M) => u.value * M)), y = (M) => n.format ? n.format(M) : new Intl.NumberFormat().format(M);
    return (M, w) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ae({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", bm, [
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
        }, null, 8, ym))), 128)),
        (t(!0), a(z, null, D(m.value, (C, h) => (t(), a("path", {
          key: h,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === h ? 0.75 : 0.3,
          onMouseenter: (v) => r.value = h,
          onMouseleave: w[0] || (w[0] = (v) => r.value = null)
        }, null, 40, km))), 128))
      ], 8, xm)),
      e.showLegend ? (t(), a("ul", $m, [
        (t(!0), a(z, null, D(m.value, (C, h) => (t(), a("li", {
          key: h,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ae({ background: C.color })
          }, null, 4),
          o("span", wm, c(C.label), 1),
          o("span", Cm, c(y(C.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), I(Ze, {
        key: 1,
        label: m.value[r.value].label,
        value: y(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Sm = ["width", "height"], Mm = ["x1", "x2", "y1", "y2"], _m = ["x", "y"], Bm = ["x", "y"], Pm = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], zm = ["x", "y", "width", "height", "fill", "fill-opacity"], Am = ["d", "stroke"], jm = ["cx", "cy", "fill"], Om = ["x", "y"], Lm = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Vm = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Dm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Tm = { class: "text-xs font-semibold tabular-nums" }, Im = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Fm = { class: "text-muted-foreground" }, f4 = /* @__PURE__ */ j({
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
    const n = e, l = K(null), r = K(560), s = K(null);
    let i = null;
    fe(() => {
      i = new ResizeObserver((T) => {
        r.value = Math.max(160, T[0].contentRect.width);
      }), l.value && i.observe(l.value);
    }), ve(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], m = k(
      () => n.bars.map((T, Y) => ({
        ...T,
        color: T.color ?? u[Y % u.length]
      }))
    ), b = k(
      () => n.lines.map((T, Y) => ({
        ...T,
        color: T.color ?? d[Y % d.length]
      }))
    ), p = k(
      () => m.value[0]?.points.map((T) => T.label) ?? b.value[0]?.points.map((T) => T.label) ?? []
    ), y = k(() => p.value.length), M = k(() => n.lineAxis === "right"), w = k(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = k(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, n.height - w.value.top - w.value.bottom)
    }));
    function h(T) {
      const Y = Math.max(...T, 0);
      if (Y <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(Y));
      return ([1, 2, 2.5, 5, 10].find((L) => Y <= L * B) ?? 10) * B;
    }
    const v = k(
      () => h([
        ...m.value.flatMap((T) => T.points.map((Y) => Y.value)),
        ...M.value ? [] : b.value.flatMap((T) => T.points.map((Y) => Y.value))
      ])
    ), g = k(
      () => M.value ? h(b.value.flatMap((T) => T.points.map((Y) => Y.value))) : v.value
    ), f = k(() => C.value.w / Math.max(1, y.value)), S = k(() => f.value * 0.6), _ = k(() => S.value / Math.max(1, m.value.length));
    function P(T) {
      return w.value.left + T * f.value + f.value / 2;
    }
    const G = k(
      () => m.value.flatMap(
        (T, Y) => T.points.map((B, E) => {
          const L = Math.max(0, B.value) / v.value * C.value.h;
          return {
            x: P(E) - S.value / 2 + Y * _.value,
            y: w.value.top + C.value.h - L,
            w: Math.max(0, _.value - 2),
            h: L,
            color: T.color,
            index: E,
            name: T.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), N = k(
      () => b.value.map((T) => {
        const Y = T.points.map((B, E) => ({
          x: P(E),
          y: w.value.top + C.value.h - Math.max(0, B.value) / g.value * C.value.h,
          value: B.value
        }));
        return {
          ...T,
          pts: Y,
          d: Y.map((B, E) => `${E === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((T) => ({
        y: w.value.top + C.value.h * T,
        left: v.value * (1 - T),
        right: g.value * (1 - T)
      }))
    ), H = k(() => Math.max(1, Math.ceil(y.value / 10)));
    function W(T) {
      return T === y.value - 1 || T % H.value === 0;
    }
    const Z = (T) => n.format ? n.format(T) : te(T);
    function te(T) {
      return Math.abs(T) >= 1e6 ? `${(T / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(T) >= 1e3 ? `${(T / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(T * 100) / 100);
    }
    const U = k(() => {
      if (s.value === null)
        return null;
      const T = s.value;
      return {
        label: p.value[T],
        rows: [
          ...m.value.map((Y) => ({
            name: Y.name,
            color: Y.color,
            value: Y.points[T]?.value ?? 0
          })),
          ...b.value.map((Y) => ({
            name: Y.name,
            color: Y.color,
            value: Y.points[T]?.value ?? 0
          }))
        ]
      };
    });
    return (T, Y) => (t(), a("div", {
      ref_key: "host",
      ref: l,
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
          onMouseleave: Y[0] || (Y[0] = (B) => s.value = null)
        }, [
          (t(!0), a(z, null, D(ee.value, (B) => (t(), a("line", {
            key: `g-${B.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Mm))), 128)),
          (t(!0), a(z, null, D(ee.value, (B) => (t(), a("text", {
            key: `lt-${B.y}`,
            x: w.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(te(B.left)), 9, _m))), 128)),
          M.value ? (t(!0), a(z, { key: 0 }, D(ee.value, (B) => (t(), a("text", {
            key: `rt-${B.y}`,
            x: r.value - w.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(te(B.right)), 9, Bm))), 128)) : $("", !0),
          (t(!0), a(z, null, D(p.value, (B, E) => (t(), a("rect", {
            key: `hit-${E}`,
            x: w.value.left + E * f.value,
            y: w.value.top,
            width: f.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === E ? 0.4 : 0,
            onMouseenter: (L) => s.value = E
          }, null, 40, Pm))), 128)),
          (t(!0), a(z, null, D(G.value, (B, E) => (t(), a("rect", {
            key: `b-${E}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, zm))), 128)),
          (t(!0), a(z, null, D(N.value, (B, E) => (t(), a("g", {
            key: `l-${E}`
          }, [
            o("path", {
              d: B.d,
              fill: "none",
              stroke: B.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Am),
            s.value !== null && B.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, jm)) : $("", !0)
          ]))), 128)),
          (t(!0), a(z, null, D(p.value, (B, E) => ue((t(), a("text", {
            key: `x-${E}`,
            x: P(E),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(B), 9, Om)), [
            [je, W(E)]
          ])), 128))
        ], 40, Sm)),
        U.value ? (t(), a("div", Lm, [
          o("p", Vm, c(U.value.label), 1),
          (t(!0), a(z, null, D(U.value.rows, (B, E) => (t(), a("div", {
            key: E,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ae({ background: B.color })
            }, null, 4),
            o("span", Dm, c(B.name), 1),
            o("span", Tm, c(Z(B.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), a("div", Im, [
          (t(!0), a(z, null, D([...m.value, ...b.value], (B, E) => (t(), a("span", {
            key: E,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ae({ background: B.color })
            }, null, 4),
            o("span", Fm, c(B.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Em = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Nm = { class: "text-muted-foreground" }, Rm = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Um = ["width", "height"], Hm = ["x", "y"], qm = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Km = ["x", "y"], Gm = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Wm = { class: "text-[11px] font-medium capitalize" }, Zm = { class: "text-muted-foreground text-[11px] capitalize" }, Jm = { class: "text-sm font-semibold tabular-nums" }, Ym = { class: "text-muted-foreground text-xs font-normal" }, m4 = /* @__PURE__ */ j({
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
    const n = e, l = K(null), r = K(560), s = K(null);
    let i = null;
    fe(() => {
      i = new ResizeObserver((S) => {
        r.value = Math.max(160, S[0].contentRect.width);
      }), l.value && i.observe(l.value);
    }), ve(() => i?.disconnect());
    const u = k(() => n.series[0]?.points.map((S) => S.label) ?? []), d = k(() => n.series.length), m = k(() => u.value.length), b = k(() => Math.min(140, Math.max(60, r.value * 0.16))), p = k(() => Math.max(1, r.value - b.value - 8)), y = k(() => p.value / Math.max(1, m.value)), M = k(() => Math.max(1, (n.height - 8) / Math.max(1, d.value)));
    function w(S) {
      if (S === 0)
        return "var(--muted)";
      const _ = Math.max(1, n.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(S / _ * 100)}%, var(--muted))`;
    }
    function C(S) {
      for (let _ = 0; _ < n.buckets.length; _++) {
        const P = n.buckets[_].max;
        if (P === void 0 || S < P)
          return _;
      }
      return n.buckets.length - 1;
    }
    const h = k(
      () => n.series.flatMap(
        (S, _) => S.points.map((P, G) => {
          const N = C(P.value);
          return {
            row: _,
            col: G,
            x: b.value + G * y.value,
            y: 4 + _ * M.value,
            w: Math.max(1, y.value - 1),
            h: Math.max(1, M.value - 4),
            colour: w(N),
            label: P.label,
            value: P.value,
            rowName: S.name,
            bucketLabel: n.buckets[N].label
          };
        })
      )
    ), v = k(() => y.value < 2), g = k(() => s.value ? h.value.find((S) => S.row === s.value.row && S.col === s.value.col) ?? null : null), f = (S) => n.format ? n.format(S) : new Intl.NumberFormat().format(S);
    return (S, _) => (t(), a("div", {
      ref_key: "host",
      ref: l,
      class: "relative w-full"
    }, [
      d.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ae({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        o("div", Em, [
          (t(!0), a(z, null, D(e.buckets, (P, G) => (t(), a("span", {
            key: G,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ae({ background: w(G) })
            }, null, 4),
            o("span", Nm, c(P.label), 1)
          ]))), 128))
        ]),
        v.value ? (t(), a("p", Rm, c(m.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: _[0] || (_[0] = (P) => s.value = null)
        }, [
          (t(!0), a(z, null, D(e.series, (P, G) => (t(), a("text", {
            key: `r-${G}`,
            x: b.value - 10,
            y: 4 + G * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(P.name), 9, Hm))), 128)),
          (t(!0), a(z, null, D(h.value, (P, G) => (t(), a("rect", {
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
          }, null, 40, qm))), 128)),
          e.showColumnLabels && !v.value ? (t(!0), a(z, { key: 0 }, D(u.value, (P, G) => (t(), a("text", {
            key: `c-${G}`,
            x: b.value + G * y.value + y.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(P), 9, Km))), 128)) : $("", !0)
        ], 40, Um)),
        g.value ? (t(), a("div", Gm, [
          o("p", Wm, c(g.value.label), 1),
          o("p", Zm, c(g.value.rowName), 1),
          o("p", Jm, [
            R(c(f(g.value.value)) + " ", 1),
            o("span", Ym, "(" + c(g.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Xm = ["viewBox"], Qm = { key: 0 }, ep = ["id"], tp = ["stop-color"], ap = ["stop-color"], lp = ["d", "fill"], np = ["d", "stroke"], Nt = 100, Re = 30, nt = /* @__PURE__ */ j({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = Math.random().toString(36).slice(2, 9), r = k(() => {
      const d = n.data.map((y) => y.value);
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
      const b = [], p = [];
      for (let w = 0; w < m - 1; w++)
        b[w] = d[w + 1].x - d[w].x, p[w] = b[w] === 0 ? 0 : (d[w + 1].y - d[w].y) / b[w];
      const y = [p[0]];
      for (let w = 1; w < m - 1; w++)
        if (p[w - 1] * p[w] <= 0)
          y[w] = 0;
        else {
          const C = 2 * b[w] + b[w - 1], h = b[w] + 2 * b[w - 1];
          y[w] = (C + h) / (C / p[w - 1] + h / p[w]);
        }
      y[m - 1] = p[m - 2];
      let M = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let w = 0; w < m - 1; w++) {
        const C = b[w] / 3;
        M += ` C${(d[w].x + C).toFixed(2)},${(d[w].y + y[w] * C).toFixed(2)} ${(d[w + 1].x - C).toFixed(2)},${(d[w + 1].y - y[w + 1] * C).toFixed(2)} ${d[w + 1].x.toFixed(2)},${d[w + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = k(() => {
      const d = r.value;
      return d.length < 2 ? "" : n.smooth ? s(d) : d.map((m, b) => `${b === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), u = k(() => {
      const d = r.value;
      return !n.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Re} L${d[0].x.toFixed(2)},${Re} Z`;
    });
    return (d, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Nt} ${Re}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ae({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Qm, [
        o("linearGradient", {
          id: `pk-spark-${x(l)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, tp),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, ap)
        ], 8, ep)
      ])) : $("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${x(l)})`
      }, null, 8, lp)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, np)
    ], 12, Xm)) : $("", !0);
  }
}), op = { class: "flex items-center gap-1 text-xs" }, sp = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, rp = {
  key: 0,
  class: "text-muted-foreground truncate"
}, da = /* @__PURE__ */ j({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, l = k(() => n.direction === "flat" ? null : n.direction === "new" ? !n.inverted : n.inverted ? n.direction === "down" : n.direction === "up"), r = k(
      () => l.value === null ? "text-muted-foreground" : l.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = k(
      () => n.direction === "flat" ? "→" : n.direction === "down" ? "▼" : "▲"
    ), i = k(() => n.direction === "new" ? "New" : n.percentage === null ? "-" : `${Math.abs(n.percentage)}%`);
    return (u, d) => (t(), a("span", op, [
      o("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", sp, c(s.value), 1),
        R(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", rp, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), ip = ["aria-label"], Ie = /* @__PURE__ */ j({
  __name: "PkSkeleton",
  props: {
    variant: { default: "text" },
    count: { default: 1 },
    height: {},
    label: { default: "Loading" }
  },
  setup(e) {
    const n = e, l = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = k(() => l[n.variant] ?? l.text), s = k(() => Math.max(1, Math.min(n.count, 50)));
    function i(u) {
      if (!(n.variant !== "text" || s.value === 1))
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
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ae({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, ip));
  }
}), up = ["data-collapsed"], dp = { class: "flex flex-wrap items-start justify-between gap-2" }, cp = { class: "flex min-w-0 items-start gap-2" }, fp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mp = ["d"], pp = { class: "min-w-0" }, vp = { class: "text-sm font-medium" }, gp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, hp = { class: "flex shrink-0 items-center gap-1.5" }, bp = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, xp = ["aria-pressed", "onClick"], yp = ["aria-expanded", "aria-label", "title"], kp = ["aria-label"], $p = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wp = ["d"], Cp = /* @__PURE__ */ j({
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
    const n = e, l = ba(), r = K(n.defaultCollapsed), s = k(() => !!n.icon && !l.icon), i = k(() => {
      if (!(n.fitBody && !n.loading && !n.error))
        return { minHeight: `${n.bodyHeight}px` };
    });
    return (u, d) => (t(), a("div", {
      class: A(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", dp, [
        o("div", cp, [
          q(u.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", fp, [
              o("path", {
                d: x(ie)(e.icon)
              }, null, 8, mp)
            ])) : $("", !0)
          ]),
          o("div", pp, [
            o("p", vp, c(e.label), 1),
            e.description ? (t(), a("p", gp, c(e.description), 1)) : $("", !0),
            q(u.$slots, "trend")
          ])
        ]),
        o("div", hp, [
          q(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", bp, [
            (t(!0), a(z, null, D(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (b) => u.$emit("update:period", m.value)
            }, c(m.label), 11, xp))), 128))
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
              class: A(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, yp)) : $("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (m) => u.$emit("hide"))
          }, [
            (t(), a("svg", $p, [
              o("path", {
                d: x(ie)("eye-off")
              }, null, 8, wp)
            ]))
          ], 8, kp)) : $("", !0)
        ])
      ]),
      r.value ? $("", !0) : (t(), a("div", {
        key: 0,
        style: ae(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), I(Ie, {
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
    ], 10, up));
  }
}), Sp = ["aria-pressed", "aria-label", "title"], Mp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, _p = ["d"], Bp = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Pp = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, zp = ["href"], Ap = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jp = ["d"], Op = ["aria-label", "onClick"], Lp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vp = ["d"], Dp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tp = ["d"], Ip = {
  key: 0,
  class: "flex flex-col gap-1"
}, Fp = ["onClick"], Ep = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Np = ["d"], Rp = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Up = /* @__PURE__ */ j({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!1), i = K(!1), u = k(
      () => l.catalog.filter((b) => !l.items.some((p) => p.id === b.id))
    );
    function d(b) {
      r(
        "update:items",
        l.items.filter((p) => p.id !== b)
      );
    }
    function m(b) {
      r("update:items", [...l.items, b]), i.value = !1;
    }
    return (b, p) => (t(), a(z, null, [
      F(Cp, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (y) => r("hide"))
      }, {
        actions: V(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (y) => s.value = !s.value)
          }, [
            (t(), a("svg", Mp, [
              o("path", {
                d: x(ie)(s.value ? "check" : "pencil")
              }, null, 8, _p)
            ]))
          ], 8, Sp)
        ]),
        default: V(() => [
          e.items.length === 0 ? (t(), a("div", Bp, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            F(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (y) => i.value = !0)
            }, {
              default: V(() => [...p[6] || (p[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", Pp, [
            (t(!0), a(z, null, D(e.items, (y) => (t(), a("div", {
              key: y.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: y.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", Ap, [
                  o("path", {
                    d: x(ie)(y.icon)
                  }, null, 8, jp)
                ])),
                R(" " + c(y.label), 1)
              ], 8, zp),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${y.label}`,
                onClick: (M) => d(y.id)
              }, [
                (t(), a("svg", Lp, [
                  o("path", {
                    d: x(ie)("x")
                  }, null, 8, Vp)
                ]))
              ], 8, Op)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (y) => i.value = !0)
            }, [
              (t(), a("svg", Dp, [
                o("path", {
                  d: x(ie)("plus")
                }, null, 8, Tp)
              ])),
              p[8] || (p[8] = R(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      F(Ye, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (y) => i.value = !1)
      }, {
        footer: V(() => [
          F(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (y) => i.value = !1)
          }, {
            default: V(() => [...p[9] || (p[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: V(() => [
          u.value.length ? (t(), a("ul", Ip, [
            (t(!0), a(z, null, D(u.value, (y) => (t(), a("li", {
              key: y.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => m(y)
              }, [
                (t(), a("svg", Ep, [
                  o("path", {
                    d: x(ie)(y.icon)
                  }, null, 8, Np)
                ])),
                R(" " + c(y.label), 1)
              ], 8, Fp)
            ]))), 128))
          ])) : (t(), a("p", Rp, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Hp = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, qp = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Kp = { class: "relative w-full max-w-xl" }, Gp = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Wp = ["d"], Zp = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Jp = ["data-slot"], Yp = { class: "px-5 py-4" }, Xp = { class: "mb-3 text-sm font-semibold" }, Qp = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, ev = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, tv = ["d"], av = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, p4 = /* @__PURE__ */ j({
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
    const n = e, l = K(""), r = k(() => {
      const d = n.linkComponent;
      return typeof d == "string" ? d : Ut(d);
    }), s = Xe({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = k(() => {
      const d = l.value.trim().toLowerCase();
      return n.sections.map((m) => ({
        ...m,
        links: d ? m.links.filter((b) => b.label.toLowerCase().includes(d)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (d, m) => (t(), a("div", {
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      o("header", null, [
        o("h1", Hp, c(e.title), 1),
        e.description ? (t(), a("p", qp, c(e.description), 1)) : $("", !0)
      ]),
      o("div", Kp, [
        (t(), a("svg", Gp, [
          o("path", {
            d: x(ie)("search")
          }, null, 8, Wp)
        ])),
        F(pe, {
          modelValue: l.value,
          "onUpdate:modelValue": m[0] || (m[0] = (b) => l.value = b),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), a("div", Zp, [
        (t(!0), a(z, null, D(u.value, (b) => (t(), a("section", {
          key: b.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${b.key}`
        }, [
          o("div", Yp, [
            o("h2", Xp, c(b.title), 1),
            o("div", Qp, [
              (t(!0), a(z, null, D(b.links, (p) => (t(), I(he(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: A(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: V(() => [
                  (t(), a("svg", ev, [
                    o("path", {
                      d: x(ie)(p.icon)
                    }, null, 8, tv)
                  ])),
                  R(" " + c(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Jp))), 128))
      ])) : (t(), a("p", av, ' Nothing matches "' + c(l.value) + '". ', 1))
    ], 2));
  }
}), lv = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, nv = { class: "flex flex-1 flex-col gap-1 p-4" }, ov = { class: "text-muted-foreground relative text-xs font-medium" }, sv = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, rv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, iv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, uv = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, v4 = /* @__PURE__ */ j({
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
    const n = (l) => typeof l == "number" ? new Intl.NumberFormat().format(l) : String(l ?? "-");
    return (l, r) => (t(), a("div", lv, [
      o("div", nv, [
        o("p", ov, c(e.label), 1),
        e.loading ? (t(), I(Ie, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", sv, " Could not load ")) : (t(), a("span", rv, c(n(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), I(da, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", iv, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", uv, [
        F(nt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), dv = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, cv = { class: "flex flex-col gap-1 p-4" }, fv = { class: "flex items-start justify-between gap-2" }, mv = { class: "text-sm font-medium" }, pv = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, vv = { class: "mt-1 flex flex-wrap items-center gap-2" }, gv = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, hv = {
  key: 0,
  class: "-mb-px"
}, tt = /* @__PURE__ */ j({
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
    const n = e, l = k(() => n.delta === null || n.delta === 0 ? null : n.inverted ? n.delta < 0 : n.delta > 0), r = k(
      () => l.value === null ? "bg-muted text-muted-foreground" : l.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = k(
      () => typeof n.value == "number" ? new Intl.NumberFormat().format(n.value) : n.value
    );
    return (i, u) => (t(), a("div", dv, [
      o("div", cv, [
        o("div", fv, [
          o("p", mv, c(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", pv, c(e.caption), 1)) : $("", !0),
        o("div", vv, [
          e.loading ? (t(), I(Ie, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", gv, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", hv, [
        F(nt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), bv = { class: "relative flex flex-col gap-2" }, xv = ["aria-label"], yv = ["onMouseenter"], kv = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, $v = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, wv = { class: "truncate" }, Cv = { class: "text-sm font-semibold tabular-nums" }, g4 = /* @__PURE__ */ j({
  __name: "SegmentedBar",
  props: {
    segments: {},
    total: { default: null },
    format: {},
    showLegend: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const n = e, l = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = k(() => n.segments.reduce((b, p) => b + Math.max(0, p.value), 0)), s = k(() => Math.max(n.total ?? r.value, r.value, 1)), i = k(
      () => n.segments.map((b, p) => {
        const y = Math.max(0, b.value) / s.value;
        return {
          ...b,
          color: b.color ?? l[p % l.length],
          share: y,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: b.value > 0 ? `max(2px, ${(y * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (b) => n.format ? n.format(b) : new Intl.NumberFormat().format(b), d = K(null), m = (b) => `${(b * 100).toFixed(b > 0 && b < 0.01 ? 1 : 0)}%`;
    return (b, p) => (t(), a("div", bv, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ae({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((y) => `${y.label} ${u(y.value)}`).join(", ")
      }, [
        (t(!0), a(z, null, D(i.value, (y, M) => (t(), a("span", {
          key: M,
          class: A(["h-full transition-all", [
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
        }, null, 46, yv))), 128))
      ], 12, xv),
      e.showLegend ? (t(), a("div", kv, [
        (t(!0), a(z, null, D(i.value, (y, M) => (t(), a("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", $v, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ae({ background: y.color })
            }, null, 4),
            o("span", wv, c(y.label), 1)
          ]),
          o("span", Cv, c(u(y.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      d.value !== null ? (t(), I(Ze, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: m(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Sv = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Mv = ["data-heading"], _v = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Bv = { class: "text-muted-foreground truncate" }, Pv = ["aria-label"], h4 = /* @__PURE__ */ j({
  __name: "StatListChart",
  props: {
    rows: {}
  },
  setup(e) {
    const n = e, l = {
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
      () => n.rows.map((i) => {
        if (!i.bar || i.bar.segments.length === 0)
          return { ...i, segments: [] };
        const u = i.bar.segments.reduce((m, b) => m + Math.max(0, b.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
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
    return (i, u) => (t(), a("div", Sv, [
      (t(!0), a(z, null, D(s.value, (d) => (t(), a("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), a("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? l[d.tone] : "text-muted-foreground"])
        }, c(d.label), 3)) : (t(), a("div", _v, [
          o("span", Bv, c(d.label), 1),
          o("span", {
            class: A(["shrink-0 font-medium tabular-nums", d.tone ? l[d.tone] : "text-foreground"])
          }, c(d.value), 3)
        ])),
        d.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(z, null, D(d.segments, (m, b) => (t(), a("span", {
            key: b,
            class: A(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ae({ width: m.width })
          }, null, 6))), 128))
        ], 8, Pv)) : $("", !0)
      ], 8, Mv))), 128))
    ]));
  }
}), zv = {
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
}, Av = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function jv(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Ov(e, n) {
  return n || (e ? zv[jv(e)] ?? "neutral" : "neutral");
}
function Lv(e, n) {
  return Av[Ov(e, n)];
}
const ge = /* @__PURE__ */ j({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const n = e, l = k(() => Lv(n.status, n.tone));
    return (r, s) => (t(), I(Ue, {
      variant: l.value,
      class: A(n.class)
    }, {
      default: V(() => [
        q(r.$slots, "default", {}, () => [
          R(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Vv = ["data-layout"], Dv = ["src", "alt"], Tv = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Iv = ["src"], Fv = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Ev = ["onMouseenter"], Nv = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Rv = { class: "min-w-0" }, Uv = { class: "truncate text-sm font-medium" }, Hv = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, qv = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Kv = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Gv = { class: "min-w-0" }, Wv = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Zv = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Jv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yv = ["d"], Xv = ["aria-label"], Qv = /* @__PURE__ */ j({
  __name: "CatalogCard",
  props: {
    item: {},
    layout: { default: "grid" }
  },
  emits: ["select", "cart"],
  setup(e, { emit: n }) {
    const l = {
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-destructive",
      info: "bg-info",
      neutral: "bg-muted-foreground/40"
    }, r = e, s = n, i = K(0);
    function u(h) {
      if (typeof h != "string")
        return null;
      const v = h.trim();
      return v === "" ? null : /^(https?:)?\/\//i.test(v) ? v : null;
    }
    const d = k(() => {
      const h = [r.item.image, ...r.item.images ?? []].map(u).filter((v) => v !== null);
      return [...new Set(h)];
    }), m = k(() => d.value[i.value] ?? d.value[0] ?? null), b = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((h) => h[0]?.toUpperCase() ?? "").join("")
    ), p = k(() => {
      const h = r.item.progress;
      if (!h)
        return null;
      const v = Math.max(h.total ?? 100, h.value, 1);
      return `${Math.min(100, Math.max(0, h.value / v * 100)).toFixed(2)}%`;
    }), y = k(() => d.value.length > 1 ? d.value[1] : null), M = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(h) {
      h.stopPropagation(), s("cart", r.item.key);
    }
    return (h, v) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: A(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: v[0] || (v[0] = (g) => s("select", e.item.key)),
      onKeydown: v[1] || (v[1] = xa(ce((g) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: v[2] || (v[2] = (g) => i.value = 0)
    }, [
      o("div", {
        class: A([
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
        }, null, 8, Dv)) : (t(), a("span", Tv, c(b.value), 1)),
        e.layout === "grid" && y.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: y.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Iv)) : $("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), a("div", Fv, [
          (t(!0), a(z, null, D(d.value, (g, f) => (t(), a("span", {
            key: f,
            class: A(["size-1.5 rounded-full", f === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (S) => i.value = f
          }, null, 42, Ev))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Nv, [
          o("div", Rv, [
            o("p", Uv, c(e.item.label), 1),
            e.item.caption ? (t(), a("p", Hv, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), a("p", qv, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), I(ge, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", Kv, [
          o("div", Gv, [
            e.item.price ? (t(), a("p", Wv, c(e.item.price), 1)) : $("", !0),
            w.value ? (t(), a("p", Zv, c(w.value), 1)) : $("", !0)
          ]),
          M.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), a("svg", Jv, [
              o("path", {
                d: x(ie)("cart")
              }, null, 8, Yv)
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
            class: A(["block h-full", l[e.item.progress?.tone ?? "neutral"]]),
            style: ae({ width: p.value })
          }, null, 6)
        ], 8, Xv)) : $("", !0)
      ], 2)
    ], 42, Vv));
  }
});
function eg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function tg(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function ag(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const lg = ["data-featured", "data-recommended"], ng = { class: "flex flex-col gap-1" }, og = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, sg = { key: 0 }, rg = { key: 1 }, ig = { key: 2 }, ug = { key: 3 }, dg = { class: "text-sm font-semibold" }, cg = { class: "flex items-baseline gap-1" }, fg = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, mg = { class: "text-muted-foreground text-sm" }, pg = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, vg = { class: "text-muted-foreground mt-1 text-xs" }, gg = { class: "flex flex-1 flex-col gap-2 text-sm" }, hg = { class: "flex min-w-0 items-start gap-2" }, bg = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, xg = ["d"], yg = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, kg = ["d"], $g = { class: "capitalize" }, wg = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Cg = { class: "text-foreground font-medium" }, Sg = { class: "mt-auto flex gap-2 pt-2" }, Mg = /* @__PURE__ */ j({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(
      () => l.plan.priceFormatted ?? String(l.plan.price)
    ), i = k(
      () => !!(l.plan.featured || l.plan.recommended)
    ), u = k(() => {
      const m = l.plan.perks ?? {};
      return Object.entries(m).map(([b, p]) => ({
        key: b,
        label: b.replace(/_/g, " "),
        granted: ag(p.value),
        display: tg(p.value)
      }));
    }), d = k(() => l.plan.extraPerks ?? []);
    return (m, b) => (t(), a("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", ng, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", og, [
          e.plan.recommended ? (t(), a("span", sg, "Recommended")) : e.plan.featured ? (t(), a("span", rg, "Featured")) : $("", !0),
          e.plan.trial ? (t(), a("span", ig, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), a("span", ug, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", dg, c(e.plan.name), 1),
        o("p", cg, [
          o("span", fg, c(s.value), 1),
          o("span", mg, c(x(eg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", pg, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", vg, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", gg, [
        (t(!0), a(z, null, D(u.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", hg, [
            o("span", {
              class: A(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", bg, [
                o("path", {
                  d: x(ie)("check")
                }, null, 8, xg)
              ])) : (t(), a("svg", yg, [
                o("path", {
                  d: x(ie)("x")
                }, null, 8, kg)
              ]))
            ], 2),
            o("span", $g, c(p.label), 1)
          ]),
          p.display ? (t(), a("span", wg, c(p.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), a(z, null, D(d.value, (p, y) => (t(), a("li", {
          key: `extra-${y}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", Cg, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", Sg, [
        F(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: b[0] || (b[0] = (p) => r("edit", e.plan.id))
        }, {
          default: V(() => [...b[2] || (b[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        F(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: b[1] || (b[1] = (p) => r("delete", e.plan.id))
        }, {
          default: V(() => [...b[3] || (b[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, lg));
  }
}), _g = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Bg = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Pg = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, zg = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Ag = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, b4 = /* @__PURE__ */ j({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: n }) {
    const l = n;
    return (r, s) => (t(), a("div", {
      class: A(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-grid"
    }, [
      o("header", _g, [
        o("div", null, [
          e.title ? (t(), a("h1", Bg, c(e.title), 1)) : $("", !0),
          e.description ? (t(), a("p", Pg, c(e.description), 1)) : $("", !0)
        ]),
        F(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => l("create"))
        }, {
          default: V(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", zg, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", Ag, [
        (t(!0), a(z, null, D(e.plans, (i) => (t(), I(Mg, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => l("edit", u)),
          onDelete: s[2] || (s[2] = (u) => l("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), jg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Og = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Lg = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Vg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Dg = { class: "space-y-1.5" }, Tg = { class: "space-y-1.5" }, Ig = { class: "space-y-1.5" }, Fg = { class: "space-y-1.5" }, Eg = { class: "space-y-1.5" }, Ng = { class: "flex items-center gap-3 text-sm" }, Rg = { class: "flex items-center gap-3 text-sm" }, Ug = { class: "flex items-center gap-3 text-sm" }, Hg = {
  key: 0,
  class: "space-y-1.5"
}, qg = { class: "flex items-center gap-3 text-sm" }, Kg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Gg = { class: "space-y-1.5" }, Wg = ["value"], Zg = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Jg = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Yg = ["id", "value", "onInput"], Xg = { class: "space-y-2" }, Qg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, eh = ["d"], th = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ut = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", x4 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = () => ({
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
    }), r = e, s = n, i = He(l());
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
    function b(v) {
      const g = v ? { ...l(), ...v } : l();
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
        d("modules", M(v.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), y = k(
      () => r.modules.map((v) => ({ value: v.key, label: v.label }))
    );
    function M(v) {
      const g = Object.fromEntries(r.modules.map((_) => [_.key, _])), f = new Set(v);
      for (const _ of r.modules)
        if (!f.has(_.key))
          for (const P of _.children ?? [])
            f.delete(P);
      let S = !0;
      for (; S; ) {
        S = !1;
        for (const _ of [...f])
          for (const P of g[_]?.requires ?? [])
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
    function h() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((v) => v.key.trim() !== "")
      });
    }
    return (v, g) => (t(), a("form", {
      class: A(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-editor",
      onSubmit: ce(h, ["prevent"])
    }, [
      o("header", jg, [
        o("div", null, [
          o("h1", Og, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          g[13] || (g[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        F(se, {
          type: "button",
          variant: "outline",
          onClick: g[0] || (g[0] = (f) => s("cancel"))
        }, {
          default: V(() => [...g[14] || (g[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", Lg, [
        o("section", Vg, [
          g[26] || (g[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", Dg, [
            F(be, { for: "plan-name" }, {
              default: V(() => [...g[15] || (g[15] = [
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
          o("div", Tg, [
            F(be, { for: "plan-short" }, {
              default: V(() => [...g[16] || (g[16] = [
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
          o("div", Ig, [
            F(be, { for: "plan-description" }, {
              default: V(() => [...g[17] || (g[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            ue(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": g[3] || (g[3] = (f) => i.description = f),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: A(ut)
            }, null, 512), [
              [xe, i.description]
            ])
          ]),
          o("div", Fg, [
            F(be, { for: "plan-days" }, {
              default: V(() => [...g[18] || (g[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            ue(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": g[4] || (g[4] = (f) => i.days = f),
              class: A(th)
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
          o("div", Eg, [
            F(be, { for: "plan-price" }, {
              default: V(() => [...g[20] || (g[20] = [
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
          o("label", Ng, [
            F(x(De), {
              checked: !!i.featured,
              "onUpdate:checked": g[6] || (g[6] = (f) => i.featured = f)
            }, null, 8, ["checked"]),
            g[21] || (g[21] = R(" Featured ", -1))
          ]),
          o("label", Rg, [
            F(x(De), {
              checked: !!i.recommended,
              "onUpdate:checked": g[7] || (g[7] = (f) => i.recommended = f)
            }, null, 8, ["checked"]),
            g[22] || (g[22] = R(" Recommended ", -1))
          ]),
          o("label", Ug, [
            F(x(De), {
              checked: !!i.trial,
              "onUpdate:checked": g[8] || (g[8] = (f) => i.trial = f)
            }, null, 8, ["checked"]),
            g[23] || (g[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Hg, [
            F(be, { for: "plan-trial-days" }, {
              default: V(() => [...g[24] || (g[24] = [
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
          o("label", qg, [
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
            default: V(() => [
              R(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Kg, [
          g[33] || (g[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Gg, [
            F(be, null, {
              default: V(() => [...g[27] || (g[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            F(Bt, {
              modelValue: p.value,
              "onUpdate:modelValue": g[11] || (g[11] = (f) => p.value = f),
              options: y.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            F(be, { for: "plan-modules-overview" }, {
              default: V(() => [...g[28] || (g[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: A(ut),
              onInput: g[12] || (g[12] = (f) => m(
                "modules",
                f.target.value
              ))
            }, null, 40, Wg)
          ]),
          (t(!0), a(z, null, D(e.limits, (f) => (t(), a("div", {
            key: f.key,
            class: "space-y-1.5"
          }, [
            f.kind === "toggle" ? (t(), a("label", Zg, [
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
                default: V(() => [
                  R(c(f.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              f.hint ? (t(), a("p", Jg, c(f.hint), 1)) : $("", !0),
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
              default: V(() => [...g[30] || (g[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${f.key}`,
              value: i.perks?.[f.key]?.overview ?? "",
              class: A(ut),
              onInput: (S) => m(
                f.key,
                S.target.value
              )
            }, null, 40, Yg)
          ]))), 128)),
          o("div", Xg, [
            g[32] || (g[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(z, null, D(i.extraPerks ?? [], (f, S) => (t(), a("div", {
              key: S,
              class: "flex items-center gap-2"
            }, [
              F(pe, {
                modelValue: f.key,
                "onUpdate:modelValue": (_) => f.key = _,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(pe, {
                modelValue: f.value,
                "onUpdate:modelValue": (_) => f.value = _,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (_) => C(S)
              }, {
                default: V(() => [
                  (t(), a("svg", Qg, [
                    o("path", {
                      d: x(ie)("x")
                    }, null, 8, eh)
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
              default: V(() => [...g[31] || (g[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), ah = { class: "flex flex-col gap-4" }, lh = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, nh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, oh = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, sh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, rh = ["d"], ih = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, uh = ["aria-pressed"], dh = ["aria-pressed"], ch = {
  key: 0,
  class: "flex flex-col gap-2"
}, fh = ["aria-label"], mh = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, ph = ["aria-pressed", "onClick"], vh = ["aria-label"], gh = { class: "text-muted-foreground mr-1 text-xs font-medium" }, hh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, bh = ["data-slot"], xh = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, yh = { class: "text-muted-foreground text-xs tabular-nums" }, kh = { class: "flex items-center gap-2" }, $h = ["disabled"], wh = ["disabled"], Pt = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(""), i = Ke(e, "modelValue"), u = He({}), d = He({});
    de(s, () => y());
    function m(N) {
      const ee = N.trim();
      if (ee === "")
        return null;
      const H = Number(ee);
      return Number.isFinite(H) ? H : null;
    }
    function b() {
      const N = {};
      for (const [ee, H] of Object.entries(d))
        N[ee] = { min: m(H.min), max: m(H.max) };
      return N;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: b() };
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
    function h(N) {
      N.key === "Enter" && (N.preventDefault(), r("scan", s.value.trim()));
    }
    const v = k(() => l.facets.filter((N) => (N.kind ?? "chips") === "chips")), g = k(() => l.facets.filter((N) => N.kind === "range")), f = k(
      () => l.searchable || l.facets.length > 0 || l.layoutToggle
    ), S = K(1);
    de(
      () => l.items.map((N) => N.key).join(","),
      () => {
        S.value = 1;
      }
    );
    const _ = k(() => {
      const N = l.pageSize;
      return !N || N < 1 ? 1 : Math.max(1, Math.ceil(l.items.length / N));
    }), P = k(() => {
      const N = l.pageSize;
      if (!N || N < 1)
        return l.items;
      const ee = (S.value - 1) * N;
      return l.items.slice(ee, ee + N);
    });
    function G(N) {
      S.value = Math.min(_.value, Math.max(1, N));
    }
    return (N, ee) => (t(), a("div", ah, [
      f.value ? (t(), a("div", lh, [
        o("div", nh, [
          e.searchable ? (t(), a("div", oh, [
            (t(), a("svg", sh, [
              o("path", {
                d: x(ie)("search")
              }, null, 8, rh)
            ])),
            F(pe, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: h
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : $("", !0),
          q(N.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", ih, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, uh),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, dh)
          ])) : $("", !0)
        ]),
        v.value.length || g.value.length ? (t(), a("div", ch, [
          (t(!0), a(z, null, D(v.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", mh, c(H.label), 1)) : $("", !0),
            (t(!0), a(z, null, D(H.options ?? [], (W) => (t(), a("button", {
              key: W.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === W.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === W.value ? "true" : "false",
              onClick: (Z) => M(H.key, W.value)
            }, c(W.label), 11, ph))), 128))
          ], 8, fh))), 128)),
          (t(!0), a(z, null, D(g.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", gh, c(H.label ?? H.key), 1),
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
          ], 8, vh))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), a("p", hh, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: A(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(z, null, D(P.value, (H) => (t(), I(Qv, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (W) => r("select", W)),
          onCart: ee[4] || (ee[4] = (W) => r("cart", W))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, bh)),
      e.pageSize && _.value > 1 ? (t(), a("div", xh, [
        o("p", yh, " Page " + c(S.value) + " of " + c(_.value), 1),
        o("div", kh, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => G(S.value - 1))
          }, " Previous ", 8, $h),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: S.value >= _.value,
            onClick: ee[6] || (ee[6] = (H) => G(S.value + 1))
          }, " Next ", 8, wh)
        ])
      ])) : $("", !0)
    ]));
  }
}), Ch = ["aria-label"], Sh = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Mh = { class: "min-w-0" }, _h = { class: "text-base font-semibold" }, Bh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ph = { class: "flex shrink-0 items-center gap-2" }, zh = { class: "min-h-0 flex-1 overflow-y-auto" }, Ah = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, zt = /* @__PURE__ */ j({
  __name: "PkSlideover",
  props: {
    open: { type: Boolean },
    title: {},
    description: { default: null },
    side: { default: "right" },
    width: { default: "w-96" }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null);
    let i = null, u = "";
    function d(m) {
      if (!l.open)
        return;
      if (m.key === "Escape") {
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
      const p = b[0], y = b[b.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), y.focus()) : !m.shiftKey && document.activeElement === y && (m.preventDefault(), p.focus());
    }
    return de(
      () => l.open,
      async (m) => {
        if (m) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Se(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), ve(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (m, b) => (t(), I(Fe, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: V(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: b[0] || (b[0] = (p) => r("close"))
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
        default: V(() => [
          e.open ? (t(), a("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: A(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", Sh, [
              o("div", Mh, [
                o("h2", _h, c(e.title), 1),
                e.description ? (t(), a("p", Bh, c(e.description), 1)) : $("", !0)
              ]),
              o("div", Ph, [
                q(m.$slots, "header-actions"),
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
            o("div", zh, [
              q(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", Ah, [
              q(m.$slots, "footer")
            ])) : $("", !0)
          ], 10, Ch)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function _e() {
  return { query: "", selected: {}, ranges: {} };
}
function jh(e, n) {
  const l = e.metrics?.[n];
  if (typeof l == "number" && Number.isFinite(l))
    return l;
  const r = e.facets?.[n];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Oh(e, n) {
  return !n || n.min === null && n.max === null ? !0 : !(e === null || n.min !== null && e < n.min || n.max !== null && e > n.max);
}
function At(e, n) {
  const l = n.query.trim().toLowerCase();
  if (l !== "" && ![
    e.key,
    e.sku ?? "",
    e.label,
    e.caption ?? "",
    ...e.facts ?? []
  ].join(" ").toLowerCase().includes(l))
    return !1;
  for (const [r, s] of Object.entries(n.selected ?? {}))
    if (s && (e.facets?.[r] ?? null) !== s)
      return !1;
  for (const [r, s] of Object.entries(n.ranges ?? {}))
    if (!Oh(jh(e, r), s))
      return !1;
  return !0;
}
function Lh(e, n) {
  const l = n.trim().toLowerCase();
  return l === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === l || i === l;
  }) ?? null;
}
function at(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (n) => n.min !== null || n.max !== null
  );
}
const Vh = { class: "flex flex-col gap-6 p-4" }, Dh = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Th = { class: "text-sm font-semibold" }, Ih = { class: "flex flex-wrap items-center gap-1.5" }, Fh = ["aria-pressed", "onClick"], Eh = { class: "text-sm font-semibold" }, Nh = { class: "flex flex-wrap items-center gap-1.5" }, Rh = { key: 0 }, ca = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(""), i = He({}), u = He({}), d = k(
      () => l.facets.filter((_) => (_.kind ?? "chips") === "chips")
    ), m = k(() => l.facets.filter((_) => _.kind === "range"));
    function b(_) {
      return _ == null ? "" : String(_);
    }
    function p() {
      s.value = l.applied.query ?? "";
      for (const _ of Object.keys(i))
        delete i[_];
      for (const [_, P] of Object.entries(l.applied.selected ?? {}))
        i[_] = P;
      for (const _ of Object.keys(u))
        delete u[_];
      for (const [_, P] of Object.entries(l.applied.ranges ?? {}))
        u[_] = { min: b(P.min), max: b(P.max) };
    }
    de(
      () => l.open,
      (_) => {
        _ && p();
      }
    );
    function y(_) {
      const P = _.trim();
      if (P === "")
        return null;
      const G = Number(P);
      return Number.isFinite(G) ? G : null;
    }
    function M() {
      const _ = {};
      for (const [P, G] of Object.entries(u))
        _[P] = { min: y(G.min), max: y(G.max) };
      return _;
    }
    function w() {
      return {
        query: l.hideSearch ? l.applied.query : s.value,
        selected: { ...i },
        ranges: M()
      };
    }
    const C = k(() => {
      let _ = l.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const P of Object.values(i))
        P && (_ += 1);
      for (const P of Object.values(M()))
        (P.min !== null || P.max !== null) && (_ += 1);
      return _;
    });
    function h(_, P) {
      i[_] = i[_] === P ? null : P;
    }
    function v(_) {
      return u[_] ?? { min: "", max: "" };
    }
    function g(_, P, G) {
      const N = u[_] ?? { min: "", max: "" };
      u[_] = { ...N, [P]: G };
    }
    function f() {
      r("apply", w());
    }
    function S() {
      s.value = "";
      for (const _ of Object.keys(i))
        i[_] = null;
      for (const _ of Object.keys(u))
        u[_] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        l.hideSearch ? { ..._e(), query: l.applied.query } : _e()
      );
    }
    return (_, P) => (t(), I(zt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (G) => r("close"))
    }, {
      footer: V(() => [
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
          default: V(() => [...P[5] || (P[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        F(se, {
          size: "sm",
          onClick: f
        }, {
          default: V(() => [
            P[6] || (P[6] = R(" Apply", -1)),
            C.value ? (t(), a("span", Rh, " (" + c(C.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: V(() => [
        o("div", Vh, [
          e.hideSearch ? $("", !0) : (t(), a("label", Dh, [
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
            o("h3", Th, c(G.label ?? G.key), 1),
            o("div", Ih, [
              (t(!0), a(z, null, D(G.options ?? [], (N) => (t(), a("button", {
                key: N.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[G.key] === N.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[G.key] === N.value ? "true" : "false",
                onClick: (ee) => h(G.key, N.value)
              }, c(N.label), 11, Fh))), 128))
            ])
          ]))), 128)),
          (t(!0), a(z, null, D(m.value, (G) => (t(), a("section", {
            key: G.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Eh, c(G.label ?? G.key), 1),
            o("div", Nh, [
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
}), Uh = ["aria-disabled"], Hh = ["disabled"], qh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Kh = ["d"], Gh = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Wh = ["disabled"], Zh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Jh = ["d"], Yh = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = Ke(e, "modelValue"), r = n, s = k(() => l.value <= e.min), i = k(() => e.max !== null && l.value >= e.max);
    function u(d) {
      if (e.disabled)
        return;
      const m = l.value + d;
      m < e.min || e.max !== null && m > e.max || (l.value = m, d < 0 ? r("decrease", m) : r("increase", m));
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
        onClick: m[0] || (m[0] = (b) => u(-1))
      }, [
        (t(), a("svg", qh, [
          o("path", {
            d: x(ie)("minus")
          }, null, 8, Kh)
        ]))
      ], 8, Hh),
      o("span", Gh, c(l.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (b) => u(1))
      }, [
        (t(), a("svg", Zh, [
          o("path", {
            d: x(ie)("plus")
          }, null, 8, Jh)
        ]))
      ], 8, Wh)
    ], 8, Uh));
  }
}), Xh = { class: "divide-border flex flex-col divide-y" }, Qh = { class: "min-w-0" }, eb = { class: "truncate text-sm font-medium" }, tb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, ab = { class: "flex shrink-0 items-center gap-2 text-sm" }, lb = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, nb = {
  key: 2,
  class: "font-medium tabular-nums"
}, ob = ["aria-label", "onClick"], sb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, rb = ["d"], ib = /* @__PURE__ */ j({
  __name: "LineItems",
  props: {
    items: {},
    editable: { type: Boolean, default: !1 }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: n }) {
    const l = n;
    function r(s) {
      const i = s.qty;
      if (typeof i == "number" && Number.isFinite(i))
        return i;
      const u = Number(i);
      return Number.isFinite(u) && u > 0 ? u : 1;
    }
    return (s, i) => (t(), a("div", Xh, [
      (t(!0), a(z, null, D(e.items, (u) => (t(), a("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Qh, [
          o("p", eb, c(u.label), 1),
          u.detail ? (t(), a("p", tb, c(u.detail), 1)) : $("", !0)
        ]),
        o("div", ab, [
          e.editable ? (t(), I(Yh, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => l("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), a("span", lb, " ×" + c(u.qty), 1)) : $("", !0),
          u.amount ? (t(), a("span", nb, c(u.amount), 1)) : $("", !0),
          u.status ? (t(), I(ge, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : $("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => l("remove", u.key)
          }, [
            (t(), a("svg", sb, [
              o("path", {
                d: x(ie)("trash")
              }, null, 8, rb)
            ]))
          ], 8, ob)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), ub = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, db = { class: "border-b px-4 py-3" }, cb = { class: "text-sm font-medium" }, fb = { class: "flex-1 px-4 py-3" }, mb = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, pb = { class: "text-foreground block font-medium" }, vb = { class: "mt-1 block" }, gb = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, hb = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, bb = { class: "tabular-nums" }, xb = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, yb = { class: "text-muted-foreground" }, kb = {
  key: 0,
  class: "tabular-nums"
}, $b = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, wb = { class: "text-muted-foreground" }, Cb = { class: "tabular-nums" }, Sb = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Mb = { class: "tabular-nums" }, _b = {
  key: 4,
  class: "pt-1"
}, Bb = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = n;
    return (r, s) => (t(), a("aside", ub, [
      o("header", db, [
        o("h2", cb, c(e.title), 1)
      ]),
      o("div", fb, [
        e.items.length === 0 ? (t(), a("p", mb, [
          o("span", pb, c(e.emptyTitle), 1),
          o("span", vb, c(e.emptyDescription), 1)
        ])) : (t(), I(ib, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => l("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => l("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", gb, [
        e.subtotal ? (t(), a("div", hb, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", bb, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", xb, [
          o("span", yb, c(e.discountLabel), 1),
          e.discount ? (t(), a("span", kb, c(e.discount), 1)) : $("", !0),
          q(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), a("div", $b, [
          o("span", wb, c(e.taxLabel), 1),
          o("span", Cb, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), a("div", Sb, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", Mb, c(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), a("div", _b, [
          q(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Pb = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, zb = { class: "flex flex-col gap-4" }, Ab = { class: "flex flex-wrap items-start justify-between gap-3" }, jb = { class: "flex items-center gap-2" }, Ob = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, y4 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(_e()), i = K(!1), u = Ke(e, "cart"), d = K(!1), m = k(
      () => l.items.filter((H) => At(H, s.value))
    );
    function b(H) {
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
      return H ? l.parsePrice(H) : 0;
    }
    function M(H, W, Z) {
      return {
        ...H,
        qty: W,
        amount: l.formatMoney(Z * W)
      };
    }
    function w(H) {
      const W = Lh(l.items, H);
      W && C(W.key);
    }
    function C(H) {
      const W = l.items.find((U) => U.key === H);
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
          amount: l.formatMoney(Z)
        }
      ];
    }
    function h(H, W) {
      const Z = l.items.find((U) => U.key === H), te = y(Z);
      u.value = u.value.map(
        (U) => U.key === H ? M(U, W, te) : U
      );
    }
    function v(H) {
      u.value = u.value.filter((W) => W.key !== H);
    }
    const g = k(
      () => u.value.reduce((H, W) => {
        const Z = l.items.find((te) => te.key === W.key);
        return H + y(Z) * Number(W.qty ?? 1);
      }, 0)
    ), f = k(
      () => l.discountRate > 0 ? Math.round(g.value * l.discountRate) : 0
    ), S = k(
      () => Math.round((g.value - f.value) * l.taxRate)
    ), _ = k(
      () => u.value.length ? l.formatMoney(g.value) : null
    ), P = k(
      () => u.value.length && f.value > 0 ? `−${l.formatMoney(f.value)}` : null
    ), G = k(
      () => u.value.length && l.taxRate > 0 ? l.formatMoney(S.value) : null
    ), N = k(
      () => u.value.length ? l.formatMoney(
        g.value - f.value + S.value
      ) : null
    );
    function ee() {
      d.value = !0, r("pay", u.value);
    }
    return (H, W) => (t(), a(z, null, [
      o("div", Pb, [
        o("section", zb, [
          o("div", Ab, [
            F(Me, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", jb, [
              x(at)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: W[0] || (W[0] = (Z) => s.value = {
                  ...x(_e)(),
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
                x(at)(s.value) ? (t(), a("span", Ob, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          F(Pt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: b,
            onSelect: W[2] || (W[2] = (Z) => r("select", Z)),
            onCart: C,
            onScan: w
          }, null, 8, ["search-placeholder", "items"])
        ]),
        F(Bb, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: _.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: G.value,
          total: N.value,
          onQty: h,
          onRemove: v
        }, {
          pay: V(() => [
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
                default: V(() => [
                  R(c(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      F(ca, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: W[3] || (W[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: W[4] || (W[4] = (Z) => s.value = { ...x(_e)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), Lb = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Vb = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, Db = ["src", "alt"], Tb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Ib = ["src"], Fb = { class: "flex items-start justify-between gap-3" }, Eb = { class: "text-lg font-semibold tabular-nums" }, Nb = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Rb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Ub = { class: "grid grid-cols-2 gap-3" }, Hb = { class: "flex flex-col gap-2" }, qb = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, k4 = /* @__PURE__ */ j({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: n }) {
    const l = e, r = n;
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
    const u = k(() => l.item?.kind === "unit"), d = k(() => {
      const p = l.item;
      if (!p)
        return [];
      const y = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(y) || 12, s(p.key) % 7);
    }), m = k(() => {
      const p = l.item;
      if (!p)
        return [];
      const y = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(y) || 20, s(p.key) % 5 + 1);
    }), b = k(
      () => !!l.item && !u.value && l.item?.status !== "out-of-stock"
    );
    return (p, y) => (t(), I(zt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: y[1] || (y[1] = (M) => r("close"))
    }, ya({
      default: V(() => [
        e.item ? (t(), a("div", Lb, [
          o("div", Vb, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Db)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", Tb, [
            (t(!0), a(z, null, D(e.item.images, (M, w) => (t(), a("img", {
              key: w,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Ib))), 128))
          ])) : $("", !0),
          o("div", Fb, [
            o("div", null, [
              o("p", Eb, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", Nb, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), I(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", Rb, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", Ub, [
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
          o("div", Hb, [
            o("p", qb, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            F(nt, {
              data: u.value ? m.value : d.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : $("", !0)
      ]),
      _: 2
    }, [
      b.value && e.item ? {
        name: "footer",
        fn: V(() => [
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
}), Kb = { class: "flex flex-col gap-10" }, Gb = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Wb = { class: "flex flex-col gap-3" }, Zb = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Jb = ["src", "alt"], Yb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Xb = ["aria-label", "aria-pressed", "onClick"], Qb = ["src"], e1 = { class: "flex flex-col gap-5" }, t1 = { class: "flex flex-wrap items-start justify-between gap-3" }, a1 = { class: "min-w-0" }, l1 = { class: "text-2xl font-semibold tracking-tight" }, n1 = { class: "text-muted-foreground mt-1 text-sm" }, o1 = { class: "text-2xl font-semibold tabular-nums" }, s1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, r1 = { class: "grid grid-cols-2 gap-3 text-sm" }, i1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, u1 = { class: "mt-1 font-medium" }, d1 = { class: "rounded-lg border p-3" }, c1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, f1 = { class: "mt-1 font-medium" }, m1 = { class: "flex flex-col gap-4" }, p1 = { class: "grid gap-4 sm:grid-cols-2" }, v1 = { class: "bg-card rounded-lg border p-4" }, g1 = { class: "mb-3 text-sm font-medium" }, h1 = /* @__PURE__ */ j({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: n }) {
    const l = e, r = n;
    function s(w) {
      let C = 0;
      for (const h of w)
        C = C * 31 + h.charCodeAt(0) >>> 0;
      return C;
    }
    function i(w, C) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((v, g) => ({
        label: v,
        value: Math.max(0, Math.round(w + Math.sin(g + C) * w * 0.18))
      }));
    }
    const u = k(() => l.item.kind === "unit"), d = k(() => {
      const w = [l.item.image, ...l.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(w)];
    }), m = K(0), b = k(() => {
      const w = l.item.stock ?? l.item.progress?.value ?? l.item.metrics?.price ?? l.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, s(l.item.key) % 7);
    }), p = k(() => {
      const w = l.item.progress?.value ?? (l.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, s(l.item.key) % 5 + 1);
    }), y = k(() => u.value ? p.value : b.value), M = k(() => !u.value && l.item.status !== "out-of-stock");
    return (w, C) => (t(), a("div", Kb, [
      o("div", Gb, [
        o("div", Wb, [
          o("div", Zb, [
            d.value[m.value] ? (t(), a("img", {
              key: 0,
              src: d.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Jb)) : $("", !0)
          ]),
          d.value.length > 1 ? (t(), a("div", Yb, [
            (t(!0), a(z, null, D(d.value, (h, v) => (t(), a("button", {
              key: h,
              type: "button",
              class: A(["size-16 shrink-0 overflow-hidden rounded-md border", v === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${v + 1}`,
              "aria-pressed": v === m.value ? "true" : "false",
              onClick: (g) => m.value = v
            }, [
              o("img", {
                src: h,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, Qb)
            ], 10, Xb))), 128))
          ])) : $("", !0)
        ]),
        o("div", e1, [
          o("div", t1, [
            o("div", a1, [
              o("h1", l1, c(e.item.label), 1),
              o("p", n1, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), I(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", o1, c(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", s1, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", r1, [
            e.item.sku ? (t(), a("div", i1, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", u1, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", d1, [
              o("dt", c1, c(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", f1, c(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (h) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", m1, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", p1, [
          F(tt, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: y.value
          }, null, 8, ["label", "value", "series"]),
          F(tt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: b.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", v1, [
          o("p", g1, c(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          F(Ef, {
            data: y.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), b1 = ["href"], $4 = /* @__PURE__ */ j({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["cart"],
  setup(e, { emit: n }) {
    const l = n;
    return (r, s) => (t(), a("div", {
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
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
      ], 8, b1),
      F(h1, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => l("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), x1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, y1 = ["aria-selected", "onClick"], k1 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, $1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, w1 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, C1 = ["aria-pressed"], S1 = ["aria-pressed"], w4 = /* @__PURE__ */ j({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Be({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Be(["select", "cart"], ["update:layout"]),
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(l.tabs[0]?.key ?? ""), i = Ke(e, "layout"), u = K({}), d = K(!1);
    de(
      () => l.tabs.map((h) => h.key).join(","),
      (h) => {
        h.split(",").includes(s.value) || (s.value = l.tabs[0]?.key ?? "");
      }
    );
    function m(h) {
      return u.value[h] ?? _e();
    }
    const b = k(
      () => l.tabs.find((h) => h.key === s.value) ?? l.tabs[0] ?? null
    ), p = k(
      () => b.value ? m(b.value.key) : _e()
    ), y = k(() => {
      const h = b.value;
      return h ? h.items.filter((v) => At(v, m(h.key))) : [];
    });
    function M(h) {
      const v = b.value?.key;
      v && (u.value = {
        ...u.value,
        [v]: { ...m(v), query: h }
      });
    }
    function w() {
      const h = b.value?.key;
      h && (u.value = { ...u.value, [h]: _e() });
    }
    function C(h) {
      const v = b.value?.key;
      v && (u.value = { ...u.value, [v]: h }, d.value = !1);
    }
    return (h, v) => (t(), a(z, null, [
      o("div", {
        class: A(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        F(Me, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", x1, [
          (t(!0), a(z, null, D(e.tabs, (g) => (t(), a("button", {
            key: g.key,
            type: "button",
            class: A([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === g.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === g.key ? "true" : "false",
            onClick: (f) => s.value = g.key
          }, c(g.label), 11, y1))), 128))
        ])) : $("", !0),
        o("div", k1, [
          F(pe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: b.value?.searchPlaceholder ?? "Search…",
            "aria-label": b.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": v[0] || (v[0] = (g) => M(String(g)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(at)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: w
          }, " Clear ")) : $("", !0),
          (b.value?.facets ?? []).length > 0 ? (t(), a("button", {
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
            x(at)(p.value) ? (t(), a("span", $1, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", w1, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: v[2] || (v[2] = (g) => i.value = "grid")
            }, " Tiles ", 10, C1),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: v[3] || (v[3] = (g) => i.value = "list")
            }, " List ", 10, S1)
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
      F(ca, {
        open: d.value,
        title: b.value?.filterTitle ?? "Filters",
        "search-placeholder": b.value?.searchPlaceholder ?? "Search…",
        facets: b.value?.facets ?? [],
        applied: p.value,
        onClose: v[7] || (v[7] = (g) => d.value = !1),
        onApply: C,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), M1 = { class: "flex flex-col gap-4" }, _1 = { class: "flex flex-col gap-4" }, C4 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(_e()), i = k(
      () => l.cards.filter((u) => At(u, s.value))
    );
    return (u, d) => (t(), a("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      F(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", M1, [
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
      o("section", _1, [
        F(Me, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        F(an, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": V(({ value: m }) => [
            F(ge, {
              status: String(m)
            }, {
              default: V(() => [
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
}), B1 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, P1 = { class: "text-sm font-medium" }, z1 = ["width", "height", "aria-label"], A1 = { class: "flex items-center gap-2" }, j1 = /* @__PURE__ */ j({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(null), i = K(!1);
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function m(h) {
      const v = s.value;
      if (!v)
        return null;
      const g = v.getBoundingClientRect(), f = v.width / g.width, S = v.height / g.height;
      return {
        x: (h.clientX - g.left) * f,
        y: (h.clientY - g.top) * S
      };
    }
    function b(h) {
      l.disabled || (i.value = !0, u = m(h), s.value?.setPointerCapture(h.pointerId));
    }
    function p(h) {
      if (!i.value || l.disabled)
        return;
      const v = d(), g = m(h);
      !v || !g || !u || (v.strokeStyle = "#111827", v.lineWidth = 2.4, v.lineCap = "round", v.lineJoin = "round", v.beginPath(), v.moveTo(u.x, u.y), v.lineTo(g.x, g.y), v.stroke(), u = g);
    }
    function y() {
      i.value = !1, u = null;
    }
    function M() {
      const h = s.value, v = d();
      !h || !v || (v.clearRect(0, 0, h.width, h.height), r("clear"));
    }
    function w() {
      const h = s.value;
      h && r("save", h.toDataURL("image/png"));
    }
    function C() {
      const h = s.value, v = d();
      !h || !v || (v.fillStyle = "#ffffff", v.fillRect(0, 0, h.width, h.height));
    }
    return fe(C), ve(() => {
      i.value = !1;
    }), (h, v) => (t(), a("div", B1, [
      o("p", P1, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: A(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(b, ["prevent"]),
        onPointermove: ce(p, ["prevent"]),
        onPointerup: ce(y, ["prevent"]),
        onPointerleave: ce(y, ["prevent"])
      }, null, 42, z1),
      o("div", A1, [
        F(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: V(() => [...v[0] || (v[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: V(() => [...v[1] || (v[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), O1 = { class: "grid gap-8 lg:grid-cols-2" }, L1 = { class: "flex flex-col gap-3" }, V1 = { class: "text-muted-foreground text-xs" }, D1 = {
  key: 0,
  class: "flex flex-col gap-3"
}, T1 = { class: "flex flex-wrap gap-3" }, I1 = ["onClick"], F1 = ["src", "alt"], E1 = {
  key: 1,
  class: "flex flex-col gap-3"
}, N1 = { class: "flex flex-wrap gap-3" }, R1 = ["onClick"], U1 = ["src", "alt"], H1 = {
  key: 2,
  class: "flex flex-col gap-4"
}, q1 = { class: "flex flex-wrap items-center gap-2" }, K1 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, G1 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, W1 = { class: "flex flex-col gap-2" }, Z1 = ["src"], J1 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Y1 = ["src"], S4 = /* @__PURE__ */ j({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, l = K([]), r = K([]), s = K(null), i = K(null), u = K(null), d = K(n.documents[0]?.key ?? "");
    function m(h) {
      try {
        const v = localStorage.getItem(h), g = v ? JSON.parse(v) : [];
        return Array.isArray(g) ? g : [];
      } catch {
        return [];
      }
    }
    fe(() => {
      !n.storageKey || typeof localStorage > "u" || (l.value = m(`${n.storageKey}.signatures`), r.value = m(`${n.storageKey}.stamps`), s.value = l.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), de(
      l,
      (h) => {
        !n.storageKey || typeof localStorage > "u" || localStorage.setItem(`${n.storageKey}.signatures`, JSON.stringify(h));
      },
      { deep: !0 }
    ), de(
      r,
      (h) => {
        !n.storageKey || typeof localStorage > "u" || localStorage.setItem(`${n.storageKey}.stamps`, JSON.stringify(h));
      },
      { deep: !0 }
    );
    function b(h) {
      const v = {
        id: `sig-${Date.now()}`,
        name: `Signature ${l.value.length + 1}`,
        dataUrl: h
      };
      l.value = [v, ...l.value].slice(0, 8), s.value = v.id;
    }
    async function p(h, v) {
      await sr(h), v(40);
      const g = await new Promise((f, S) => {
        const _ = new FileReader();
        _.onload = () => f(String(_.result)), _.onerror = () => S(new Error("Could not read the file")), _.readAsDataURL(h);
      });
      return v(100), { value: g, name: h.name, size: h.size, url: g };
    }
    function y() {
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
    const M = k(
      () => l.value.find((h) => h.id === s.value)?.dataUrl ?? null
    ), w = k(
      () => r.value.find((h) => h.id === i.value)?.dataUrl ?? null
    ), C = k(() => {
      const h = n.documents.find((g) => g.key === d.value)?.document ?? n.documents[0]?.document ?? {}, v = {
        ...h?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...h,
        branding: v
      };
    });
    return (h, v) => (t(), a("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      F(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", O1, [
        F(j1, {
          label: "Draw a signature",
          onSave: b
        }),
        o("div", L1, [
          v[2] || (v[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", V1, c(x(na)), 1),
          F(sa, {
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
            default: V(() => [...v[1] || (v[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      l.value.length ? (t(), a("section", D1, [
        F(Me, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", T1, [
          (t(!0), a(z, null, D(l.value, (g) => (t(), a("button", {
            key: g.id,
            type: "button",
            class: A(["rounded-md border p-2", g.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (f) => s.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, F1)
          ], 10, I1))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), a("section", E1, [
        F(Me, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", N1, [
          (t(!0), a(z, null, D(r.value, (g) => (t(), a("button", {
            key: g.id,
            type: "button",
            class: A(["rounded-md border p-2", g.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (f) => i.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, U1)
          ], 10, R1))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), a("section", H1, [
        o("div", q1, [
          (t(!0), a(z, null, D(e.documents, (g) => (t(), I(se, {
            key: g.key,
            size: "sm",
            variant: d.value === g.key ? "default" : "outline",
            onClick: (f) => d.value = g.key
          }, {
            default: V(() => [
              R(c(g.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", K1, [
          F(Xc, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", G1, [
            o("div", W1, [
              v[3] || (v[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), a("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Z1)) : (t(), a("p", J1, "Draw and save a signature"))
            ]),
            w.value ? (t(), a("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Y1)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), M4 = "panel.dashboard.hiddenWidgets", X1 = /* @__PURE__ */ Symbol("dashboardHide"), Q1 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, _4 = /* @__PURE__ */ j({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const n = e, l = Je(X1, null), r = K(
      n.catalog.filter((u) => n.defaults.includes(u.id))
    ), s = K(!1);
    fe(() => {
      if (l?.register("shortcuts", "Shortcuts"), !n.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const u = localStorage.getItem(n.storageKey);
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
        if (!(!s.value || !n.storageKey))
          try {
            localStorage.setItem(n.storageKey, JSON.stringify(u));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = k(() => l?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? $("", !0) : (t(), a("div", Q1, [
      F(Up, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (m) => r.value = m),
        onHide: d[1] || (d[1] = (m) => x(l)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), ex = { class: "flex flex-col gap-3" }, tx = ["data-slot"], ax = ["aria-pressed", "aria-label", "title"], lx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nx = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, ox = { class: "flex h-8 items-center" }, sx = ["aria-label", "title", "onClick"], rx = ["aria-label", "title", "onClick"], ix = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, ux = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, B4 = /* @__PURE__ */ j({
  __name: "StatStrip",
  props: {
    segments: {},
    columns: { default: 4 },
    maskable: { type: Boolean, default: !0 },
    hidden: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(l.maskable ? !l.hidden : !0), i = K(/* @__PURE__ */ new Set());
    function u(f) {
      return l.maskable && (f.sensitive ?? !0);
    }
    function d(f) {
      return u(f) && !s.value && !i.value.has(f.key);
    }
    const m = k(() => l.segments.some(d)), b = k(() => l.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, y = k(() => p[l.columns] ?? p[4]), M = k(() => {
      const f = l.columns ?? 4, S = Math.floor(l.segments.length / f) * f;
      return l.segments.slice(0, S);
    }), w = k(() => {
      const f = l.columns ?? 4, S = Math.floor(l.segments.length / f) * f;
      return l.segments.slice(S);
    }), C = k(() => {
      const f = [];
      return M.value.length > 0 && f.push({ key: "packed", joined: !0, segments: M.value }), w.value.length > 0 && f.push({ key: "leftover", joined: !1, segments: w.value }), f;
    });
    function h() {
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
        for (const _ of l.segments)
          _.key !== f.key && u(_) && S.add(_.key);
      }
      i.value = S, r("toggle", m.value);
    }
    function g(f) {
      return typeof f == "number" ? new Intl.NumberFormat().format(f) : f;
    }
    return (f, S) => (t(), a("div", ex, [
      (t(!0), a(z, null, D(C.value, (_) => (t(), a("div", {
        key: _.key,
        class: A(["relative shrink-0", _.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": _.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && b.value && _.key === C.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: h
        }, [
          (t(), a("svg", lx, [
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
        ], 8, ax)) : $("", !0),
        o("div", {
          class: A(["grid", [_.joined ? "gap-px" : "gap-3", y.value]])
        }, [
          (t(!0), a(z, null, D(_.segments, (P) => (t(), a("div", {
            key: P.key,
            class: A(["bg-card flex flex-col gap-2 p-4", _.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", nx, c(P.label), 1),
            o("div", ox, [
              e.loading ? (t(), I(Ie, {
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
              ], 8, sx)) : u(P) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${g(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (G) => v(P)
              }, c(g(P.value)), 9, rx)) : (t(), a("span", ix, c(g(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), I(da, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), I(nt, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            P.caption || P.comparison && P.trend ? (t(), a("p", ux, c(P.caption ?? P.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, tx))), 128))
    ]));
  }
}), dx = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, cx = { class: "flex items-center justify-between gap-2" }, fx = { class: "text-sm font-semibold" }, mx = { class: "flex items-center gap-3" }, px = ["href"], vx = {
  key: 0,
  class: "flex flex-col gap-3"
}, gx = { class: "flex items-center justify-between gap-2 text-xs text-muted-foreground" }, hx = { class: "flex flex-col gap-2" }, bx = ["aria-valuenow", "aria-label"], xx = { class: "flex items-center justify-between gap-1" }, yx = ["aria-label"], kx = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $x = {
  key: 1,
  "aria-hidden": "true"
}, wx = {
  key: 0,
  class: "flex flex-col gap-0.5 pt-0.5"
}, Cx = { class: "text-sm font-medium" }, Sx = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Mx = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, _x = { class: "flex min-w-0 flex-col gap-0.5" }, Bx = { class: "text-sm font-medium" }, Px = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, zx = {
  key: 1,
  class: "flex flex-col gap-2"
}, Ax = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, jx = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Ox = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, P4 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(() => l.items.find((C) => !C.done) ?? null), i = k(() => l.items.filter((C) => C.key !== s.value?.key)), u = k(() => l.items.length), d = k(() => l.items.filter((C) => C.done).length), m = k(() => {
      if (!s.value)
        return u.value;
      const C = l.items.findIndex((h) => h.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), b = k(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
    ), p = k(() => {
      const C = l.linkComponent;
      return typeof C == "string" ? C : Ut(C);
    }), y = Xe({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), M = Xe({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    function w(C) {
      return C.done ? "border border-emerald-500/40 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : s.value?.key === C.key ? "border-2 border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300" : "border border-muted-foreground/25 bg-muted/40 text-muted-foreground";
    }
    return (C, h) => e.items.length ? (t(), a("section", dx, [
      o("div", cx, [
        o("h2", fx, c(e.heading), 1),
        o("div", mx, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: h[0] || (h[0] = (v) => r("skip"))
          }, c(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, px)) : $("", !0)
        ])
      ]),
      e.variant === "onboarding" ? (t(), a("div", vx, [
        o("div", gx, [
          o("span", null, "Step " + c(m.value) + " of " + c(u.value), 1),
          o("span", null, c(d.value) + " complete", 1)
        ]),
        o("div", hx, [
          o("div", {
            class: "h-1.5 w-full overflow-hidden rounded-full bg-muted",
            role: "progressbar",
            "aria-valuenow": b.value,
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            "aria-label": `Setup progress, ${b.value} percent complete`
          }, [
            o("div", {
              class: "h-full rounded-full bg-amber-500 transition-[width] duration-300 ease-out",
              style: ae({ width: `${b.value}%` })
            }, null, 4)
          ], 8, bx),
          o("div", xx, [
            (t(!0), a(z, null, D(e.items, (v, g) => (t(), a("span", {
              key: v.key,
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold leading-none", w(v)]),
              "aria-label": `${v.title}${v.done ? ", completed" : s.value?.key === v.key ? ", current step" : ""}`
            }, [
              v.done ? (t(), a("svg", kx, [...h[1] || (h[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a("span", $x, c(g + 1), 1))
            ], 10, yx))), 128))
          ])
        ]),
        s.value ? (t(), a("div", wx, [
          o("p", Cx, c(s.value.title), 1),
          s.value.detail ? (t(), a("p", Sx, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), I(he(p.value), {
            key: 1,
            href: s.value.href,
            class: A(x(y))
          }, {
            default: V(() => [
              R(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])) : $("", !0)
      ])) : (t(), a(z, { key: 1 }, [
        s.value ? (t(), a("div", Mx, [
          h[2] || (h[2] = o("span", {
            class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
            "aria-hidden": "true"
          }, null, -1)),
          o("div", _x, [
            o("p", Bx, c(s.value.title), 1),
            s.value.detail ? (t(), a("p", Px, c(s.value.detail), 1)) : $("", !0),
            s.value.href ? (t(), I(he(p.value), {
              key: 1,
              href: s.value.href,
              class: A(x(y))
            }, {
              default: V(() => [
                R(c(s.value.actionLabel || "Open"), 1)
              ]),
              _: 1
            }, 8, ["href", "class"])) : $("", !0)
          ])
        ])) : $("", !0),
        i.value.length ? (t(), a("ul", zx, [
          (t(!0), a(z, null, D(i.value, (v) => (t(), a("li", {
            key: v.key,
            class: "flex items-start gap-3"
          }, [
            o("span", {
              class: A([
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                v.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
              ]),
              "aria-hidden": "true"
            }, [
              v.done ? (t(), a("svg", Ax, [...h[3] || (h[3] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : $("", !0)
            ], 2),
            o("div", jx, [
              o("p", {
                class: A(["text-sm", v.done ? "text-muted-foreground line-through" : "font-medium"])
              }, c(v.title), 3),
              !v.done && v.detail ? (t(), a("p", Ox, c(v.detail), 1)) : $("", !0)
            ]),
            !v.done && v.href ? (t(), I(he(p.value), {
              key: 0,
              href: v.href,
              class: A(x(M))
            }, {
              default: V(() => [
                R(c(v.actionLabel || "Open"), 1)
              ]),
              _: 2
            }, 1032, ["href", "class"])) : $("", !0)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ])) : $("", !0);
  }
}), Lx = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, Vx = { class: "flex items-center gap-2" }, Dx = { class: "font-medium tabular-nums" }, Tx = { class: "ml-auto flex items-center gap-3" }, z4 = /* @__PURE__ */ j({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: n }) {
    const l = n, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), a("div", Lx, [
      o("div", Vx, [
        q(s.$slots, "actions")
      ]),
      o("span", Dx, [
        e.allMatching ? (t(), a(z, { key: 0 }, [
          R(" All " + c(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(z, { key: 1 }, [
          R(c(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", Tx, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (u) => l("select-all-matching"))
        }, " Select all " + c(r(e.total)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (u) => l("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), Ix = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Fx = { class: "text-muted-foreground text-xs tabular-nums" }, Ex = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Nx = ["value"], Rx = ["value"], Ux = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Hx = ["disabled"], qx = ["disabled"], Kx = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Gx = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Wx = ["disabled"], A4 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = (m) => new Intl.NumberFormat().format(m), i = k(() => l.rowsOnPage === 0 ? 0 : (l.page - 1) * l.perPage + 1), u = k(() => (l.page - 1) * l.perPage + l.rowsOnPage), d = k(
      () => l.total === void 0 ? null : Math.max(1, Math.ceil(l.total / l.perPage))
    );
    return (m, b) => (t(), a("div", Ix, [
      o("p", Fx, [
        R(" Showing " + c(s(i.value)) + "-" + c(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(z, { key: 0 }, [
          R("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", Ex, [
        b[4] || (b[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: b[0] || (b[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(z, null, D(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, c(p), 9, Rx))), 128))
        ], 40, Nx)
      ])) : $("", !0),
      o("nav", Ux, [
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
        ])], 8, Hx),
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
        ])], 8, qx),
        o("span", Kx, c(e.page), 1),
        d.value !== null ? (t(), a("span", Gx, " of " + c(s(d.value)), 1)) : $("", !0),
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
        ])], 8, Wx)
      ])
    ]));
  }
}), Zx = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, Jx = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, Yx = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, Xx = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, j4 = /* @__PURE__ */ j({
  __name: "TableShell",
  setup(e) {
    return (n, l) => (t(), a("div", Zx, [
      n.$slots.tabs ? (t(), a("div", Jx, [
        q(n.$slots, "tabs")
      ])) : $("", !0),
      n.$slots.toolbar ? (t(), a("div", Yx, [
        q(n.$slots, "toolbar")
      ])) : $("", !0),
      q(n.$slots, "default"),
      n.$slots.pagination ? (t(), a("div", Xx, [
        q(n.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), Qx = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, ey = ["aria-current"], ty = ["title"], ay = ["aria-current", "onClick"], ly = ["title"], ny = /* @__PURE__ */ j({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const l = n;
    function r(s) {
      return s >= 1e6 ? (s / 1e6).toFixed(s % 1e6 === 0 ? 0 : 1) + "M" : s >= 1e4 ? Math.round(s / 1e3) + "k" : new Intl.NumberFormat().format(s);
    }
    return (s, i) => (t(), a("div", Qx, [
      o("button", {
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => l("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, ty)) : (t(), I(Ie, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, ey),
      (t(!0), a(z, null, D(e.tabs, (u) => (t(), a("button", {
        key: u,
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => l("select", u)
      }, [
        R(c(u) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, c(r(e.counts[u] ?? 0)), 11, ly)) : (t(), I(Ie, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, ay))), 128))
    ]));
  }
}), O4 = /* @__PURE__ */ Ct(ny, [["__scopeId", "data-v-3967c945"]]), oy = { class: "flex flex-col gap-2" }, sy = { class: "flex flex-wrap items-center justify-end gap-2" }, ry = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, iy = ["placeholder", "title", "aria-label"], uy = ["aria-label"], dy = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, cy = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, fy = { class: "text-xs font-medium" }, my = ["value", "onChange"], py = ["value"], vy = { class: "grid grid-cols-2 gap-2" }, gy = ["value", "onChange"], hy = ["value", "onChange"], by = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, xy = ["value", "onChange"], yy = ["value", "onChange"], ky = {
  key: 4,
  class: "flex items-center gap-2"
}, $y = ["aria-checked", "onClick"], wy = { class: "text-xs" }, Cy = ["onClick"], Sy = ["value", "onChange"], My = ["value"], _y = ["disabled", "onClick"], By = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Py = ["disabled", "onClick"], zy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ay = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, jy = ["aria-pressed", "aria-label", "title"], Oy = ["aria-label", "title"], Ly = { class: "flex flex-col gap-0.5 p-1" }, Vy = ["onClick"], Dy = ["onClick"], Ty = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, Iy = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Fy = ["dusk"], Ey = ["aria-label", "onClick"], L4 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(l.search);
    de(
      () => l.search,
      (U) => {
        U !== s.value && (s.value = U);
      }
    );
    let i;
    de(s, (U) => {
      clearTimeout(i), i = setTimeout(() => {
        U !== l.search && r("update:search", U);
      }, 250);
    });
    const u = K({ ...l.filters });
    de(
      () => l.filters,
      (U) => {
        u.value = { ...U };
      },
      { deep: !0 }
    );
    const d = k(
      () => l.filterSchema.filter(
        (U) => l.filters[U.key] !== null && l.filters[U.key] !== void 0
      ).length
    ), m = k(() => JSON.stringify(u.value) !== JSON.stringify(l.filters)), b = k(() => l.search !== "" || d.value > 0), p = k(() => l.indicators.length ? l.indicators : l.filterSchema.filter((U) => l.filters[U.key] !== null && l.filters[U.key] !== void 0).map((U) => ({
      key: U.key,
      label: `${U.label}: ${String(l.filters[U.key])}`,
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
      const T = u.value[U.key];
      return Array.isArray(T) ? T : T == null ? [] : [T];
    }
    function h(U) {
      return C(U).filter(
        (T) => typeof T == "string" || typeof T == "number"
      );
    }
    function v(U) {
      return ee(U).flatMap(
        (T) => typeof T.value == "string" || typeof T.value == "number" ? [{ value: T.value, label: T.label }] : []
      );
    }
    function g(U, T) {
      u.value = { ...u.value, [U.key]: T === "" ? null : T };
    }
    function f(U, T) {
      const Y = u.value[U.key];
      if (typeof Y != "string" || !Y.includes(".."))
        return "";
      const [B, E] = Y.split("..");
      return T === "from" ? B ?? "" : E ?? "";
    }
    function S(U, T, Y) {
      const B = T === "from" ? Y : f(U, "from"), E = T === "to" ? Y : f(U, "to");
      u.value = {
        ...u.value,
        [U.key]: B && E ? `${B}..${E}` : null
      };
    }
    function _(U, T, Y) {
      const B = T === "from" ? Y : f(U, "from"), E = T === "to" ? Y : f(U, "to");
      u.value = {
        ...u.value,
        [U.key]: B || E ? `${B}..${E}` : null
      };
    }
    function P(U) {
      r("apply-filters", { ...u.value }), U();
    }
    function G(U, T) {
      u.value[U] = T, r("apply-filters", { ...u.value });
    }
    function N() {
      u.value = Object.fromEntries(l.filterSchema.map((U) => [U.key, null]));
    }
    function ee(U) {
      return U.type === "boolean" ? [
        { value: !0, label: U.trueLabel ?? "Yes" },
        { value: !1, label: U.falseLabel ?? "No" }
      ] : U.type === "daterange" ? Object.entries(U.presets ?? {}).map(([T, Y]) => ({
        value: T,
        label: Y
      })) : (U.options ?? []).map((T) => ({ value: T, label: T }));
    }
    const H = K(new Set(l.hidden));
    de(
      () => l.hidden,
      (U) => {
        H.value = new Set(U);
      },
      { deep: !0 }
    );
    function W(U) {
      const T = new Set(H.value);
      T.has(U) ? T.delete(U) : T.add(U), H.value = T, r("apply-columns", [...T]);
    }
    function Z() {
      H.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function te() {
      s.value = "", r("clear");
    }
    return (U, T) => (t(), a("div", oy, [
      o("div", sy, [
        o("div", ry, [
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
          ue(o("input", {
            "onUpdate:modelValue": T[0] || (T[0] = (Y) => s.value = Y),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, iy), [
            [xe, s.value]
          ]),
          s.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: T[1] || (T[1] = (Y) => s.value = "")
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
        e.filterSchema.length ? (t(), I(Te, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: V(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", d.value ? "border-primary text-primary" : ""]),
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
              d.value ? (t(), a("span", dy, c(d.value), 1)) : $("", !0)
            ], 10, uy)
          ]),
          panel: V(({ close: Y }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              T[7] || (T[7] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: N
              }, " Reset ")
            ]),
            T[10] || (T[10] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", cy, [
              (t(!0), a(z, null, D(e.filterSchema, (B) => (t(), a("div", {
                key: B.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", fy, c(B.label), 1),
                w(B) ? (t(), I(Bt, {
                  key: 0,
                  "model-value": h(B),
                  options: v(B),
                  placeholder: `Any ${B.label.toLowerCase()}`,
                  "onUpdate:modelValue": (E) => u.value[B.key] = E.length ? E : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : B.type === "querybuilder" ? (t(), I(Co, {
                  key: 1,
                  "model-value": u.value[B.key] ?? null,
                  fields: B.fields ?? {},
                  operators: B.operators ?? {},
                  "max-depth": B.maxDepth ?? 5,
                  onApply: (E) => G(B.key, E)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : B.type === "daterange" ? (t(), a(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[B.key] == "string" && !String(u.value[B.key]).includes("..") ? u.value[B.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (E) => g(B, E.target.value)
                  }, [
                    T[8] || (T[8] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(z, null, D(ee(B), (E) => (t(), a("option", {
                      key: String(E.value),
                      value: E.value
                    }, c(E.label), 9, py))), 128))
                  ], 40, my),
                  o("div", vy, [
                    o("input", {
                      type: "date",
                      value: f(B, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (E) => S(
                        B,
                        "from",
                        E.target.value
                      )
                    }, null, 40, gy),
                    o("input", {
                      type: "date",
                      value: f(B, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (E) => S(
                        B,
                        "to",
                        E.target.value
                      )
                    }, null, 40, hy)
                  ])
                ], 64)) : B.type === "numberrange" ? (t(), a("div", by, [
                  o("input", {
                    type: "number",
                    value: f(B, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (E) => _(
                      B,
                      "from",
                      E.target.value
                    )
                  }, null, 40, xy),
                  o("input", {
                    type: "number",
                    value: f(B, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (E) => _(
                      B,
                      "to",
                      E.target.value
                    )
                  }, null, 40, yy)
                ])) : B.type === "boolean" ? (t(), a("div", ky, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[B.key] === !0,
                    class: A([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[B.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (E) => g(B, u.value[B.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: A(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[B.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, $y),
                  o("span", wy, c(B.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: A([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[B.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (E) => g(B, u.value[B.key] === !1 ? null : !1)
                  }, c(B.falseLabel ?? "No") + " only ", 11, Cy)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[B.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (E) => g(B, E.target.value)
                }, [
                  T[9] || (T[9] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(z, null, D(ee(B), (E) => (t(), a("option", {
                    key: String(E.value),
                    value: E.value
                  }, c(E.label), 9, My))), 128))
                ], 40, Sy))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !m.value,
              onClick: (B) => P(Y)
            }, " Apply filters ", 8, _y)
          ]),
          _: 1
        })) : $("", !0),
        F(Te, { "dismiss-on-panel-click": !1 }, {
          trigger: V(() => [...T[11] || (T[11] = [
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
            T[14] || (T[14] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", By, [
              (t(!0), a(z, null, D(e.columns, (Y) => (t(), a("button", {
                key: Y.key,
                type: "button",
                class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", Y.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: Y.locked,
                onClick: (B) => W(Y.key)
              }, [
                H.value.has(Y.key) ? (t(), a("span", Ay)) : (t(), a("svg", zy, [...T[12] || (T[12] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                R(" " + c(Y.label), 1)
              ], 10, Py))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: Z
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
                R(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.reorderable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: T[2] || (T[2] = (Y) => r("toggle-reorder"))
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
        ])], 10, jy)) : $("", !0),
        e.groups.length ? (t(), I(Te, {
          key: 2,
          align: "end"
        }, {
          trigger: V(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
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
            ])], 10, Oy)
          ]),
          panel: V(({ close: Y }) => [
            o("div", Ly, [
              o("button", {
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (B) => {
                  y(null), Y();
                }
              }, " No grouping ", 10, Vy),
              (t(!0), a(z, null, D(e.groups, (B) => (t(), a("button", {
                key: B.key,
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === B.key ? "text-primary font-medium" : ""]),
                onClick: (E) => {
                  y(B.key), Y();
                }
              }, c(B.label), 11, Dy))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        b.value ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: te
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), a("span", Ty, "Loading…")) : $("", !0)
      ]),
      p.value.length ? (t(), a("div", Iy, [
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
            onClick: (B) => M(Y.key)
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
          ])], 8, Ey)) : $("", !0)
        ], 8, Fy))), 128)),
        p.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: T[3] || (T[3] = (Y) => r("clear-filters"))
        }, " Clear all ")) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Ny = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ry = { class: "grid gap-2" }, Uy = {
  key: 0,
  class: "text-destructive text-sm"
}, Hy = { class: "flex gap-2" }, V4 = /* @__PURE__ */ j({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: n }) {
    const l = n, s = K((() => {
      const M = navigator.userAgent, w = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: h }) => h.test(M))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: h }) => h.test(M))?.name;
      return [w, C].filter(Boolean).join(" on ") || "";
    })()), i = K(!1), u = ka(null), d = k(() => u.value?.isLoading.value ?? !1), m = k(() => u.value?.error.value ?? null), b = k(() => u.value?.isSupported.value ?? !1);
    fe(async () => {
      try {
        const { usePasskeyRegister: M } = await import("@laravel/passkeys/vue");
        u.value = M({
          onSuccess: () => {
            s.value = "", i.value = !1, l("success");
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
    return (M, w) => b.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", Ry, [
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
      m.value ? (t(), a("p", Uy, c(m.value), 1)) : $("", !0),
      o("div", Hy, [
        F(se, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: V(() => [
            R(c(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          type: "button",
          variant: "ghost",
          onClick: y
        }, {
          default: V(() => [...w[5] || (w[5] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), I(se, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = (C) => i.value = !0)
    }, {
      default: V(() => [...w[2] || (w[2] = [
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", Ny, " Passkeys are not supported in this browser. "));
  }
}), qy = { class: "text-sm font-semibold" }, Ky = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Gy = {
  key: 4,
  class: "flex flex-col gap-3"
}, Wy = { class: "text-sm font-medium" }, Zy = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Jy = {
  key: 0,
  class: "mb-1 font-medium"
}, Yy = ["onClick"], Xy = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Qy = { class: "flex items-center justify-between gap-3 border-t p-4" }, e0 = ["disabled"], t0 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!l.node.collapsed), i = K(0), u = K(0), d = k(
      () => (l.node.children ?? []).map((h) => ({
        label: h.label ?? "",
        description: h.description
      }))
    ), m = k(() => l.depth === 0), b = k(() => {
      const h = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, v = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        h[l.node.align ?? "start"] ?? "items-start",
        v[l.node.gap ?? "md"] ?? "gap-4",
        l.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = k(() => {
      const h = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return h[l.node.tone ?? "info"] ?? h.info;
    }), y = k(() => {
      const h = l.node.columns ?? 1;
      return h >= 3 ? "sm:grid-cols-3" : h === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function M(h) {
      const v = [], g = (f) => {
        f.component === "field" && f.key && v.push(f.key), f.children?.forEach(g);
      };
      return g(h), v.some((f) => l.errors[f]);
    }
    function w(h) {
      if (h.hidden)
        return !1;
      const v = h.visibleWhen;
      return v ? l.values[v.field] == v.value : !0;
    }
    function C(h) {
      if (l.upload)
        return (v, g) => l.upload(h, v, g);
    }
    return (h, v) => {
      const g = bt("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), I(qe, {
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
        class: A(m.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: v[1] || (v[1] = (f) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", qy, c(e.node.label), 1),
            e.node.description ? (t(), a("p", Ky, c(e.node.description), 1)) : $("", !0)
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...v[11] || (v[11] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : $("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [y.value, m.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), I(g, {
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
            class: A(f.span && f.span >= 2 ? "sm:col-span-2" : ""),
            onChange: v[2] || (v[2] = (_, P) => r("change", _, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", y.value])
      }, [
        (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), I(g, {
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
          onChange: v[3] || (v[3] = (_, P) => r("change", _, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), a("div", {
        key: 3,
        class: A(["flex", b.value])
      }, [
        (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), I(g, {
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
          onChange: v[4] || (v[4] = (_, P) => r("change", _, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", Gy, [
        o("legend", Wy, c(e.node.label), 1),
        e.node.description ? (t(), a("p", Zy, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: A(["grid grid-cols-1 gap-4", y.value])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), I(g, {
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
            onChange: v[5] || (v[5] = (_, P) => r("change", _, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), a("div", {
        key: 5,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", Jy, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 6,
        class: A(m.value ? "bg-card rounded-lg border" : "")
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => (t(), a("button", {
            key: S,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === S ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (_) => i.value = S
          }, [
            R(c(f.label) + " ", 1),
            M(f) ? (t(), a("span", Xy)) : $("", !0)
          ], 10, Yy))), 128))
        ], 2),
        (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => ue((t(), a("div", {
          key: S,
          class: A(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, D(f.children ?? [], (_, P) => (t(), I(g, {
            key: P,
            node: _,
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
        class: A(m.value ? "bg-card rounded-lg border" : "")
      }, [
        F(ni, {
          class: A(["p-4", m.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (f) => M((e.node.children ?? [])[f]),
          "onUpdate:activeStep": v[7] || (v[7] = (f) => u.value = f)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(z, null, D(e.node.children ?? [], (f, S) => ue((t(), a("div", {
          key: S,
          class: A(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, D(f.children ?? [], (_, P) => (t(), I(g, {
            key: P,
            node: _,
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
        o("div", Qy, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: v[9] || (v[9] = (f) => u.value--)
          }, " Back ", 8, e0),
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
}), a0 = { class: "flex flex-col gap-4" }, l0 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, D4 = /* @__PURE__ */ j({
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
  setup(e, { emit: n }) {
    const l = e;
    ct("panelPicker", {
      get base() {
        return l.pickerBase ?? "";
      },
      get returnUrl() {
        return l.returnUrl ?? "";
      }
    }), ct("panelCreateOption", {
      run(m, b) {
        return l.createOption ? l.createOption(m, b) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = n, s = k(() => l.nodes.length > 0), i = k(() => l.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = k(() => l.errors._conflict);
    function d(m) {
      if (l.upload)
        return (b, p) => l.upload(m, b, p);
    }
    return (m, b) => (t(), a("div", a0, [
      u.value ? (t(), a("p", l0, c(u.value), 1)) : $("", !0),
      s.value ? (t(!0), a(z, { key: 1 }, D(e.nodes, (p, y) => (t(), I(t0, {
        key: y,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: b[0] || (b[0] = (M, w) => r("change", M, w))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(z, null, D(e.fields, (p) => (t(), I(qe, {
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
          class: A(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (y) => r("change", p.key, y)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), n0 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, o0 = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, s0 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, r0 = ["disabled"], i0 = ["disabled"], u0 = ["disabled"], T4 = /* @__PURE__ */ j({
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
    return (n, l) => (t(), I(Fe, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: V(() => [
          e.show ? (t(), a("div", n0, [
            o("div", o0, [
              l[3] || (l[3] = o("span", {
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
              o("span", s0, c(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: l[0] || (l[0] = (r) => n.$emit("discard"))
              }, c(e.discardLabel), 9, r0)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: l[1] || (l[1] = (r) => n.$emit("cancel"))
              }, c(e.cancelLabel), 9, i0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: l[2] || (l[2] = (r) => n.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, u0)
            ])
          ])) : $("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function I4(e, n = {}) {
  const { warnOnUnload: l = !0 } = n, r = K(dt(e.value)), s = k(() => dt(e.value) !== r.value);
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
    l && window.addEventListener("beforeunload", d);
  }), ve(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function dt(e) {
  return JSON.stringify(e, (n, l) => l === void 0 ? null : l === null || typeof l != "object" || Array.isArray(l) ? l : Object.fromEntries(
    Object.entries(l).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const d0 = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, c0 = { class: "text-muted-foreground text-xs font-medium" }, f0 = { class: "text-sm" }, m0 = { key: 1 }, p0 = {
  key: 5,
  class: "max-w-full"
}, v0 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, g0 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, h0 = { key: 6 }, b0 = {
  key: 0,
  class: "divide-y rounded-md border"
}, x0 = { class: "text-muted-foreground truncate font-medium" }, y0 = { class: "col-span-2 break-words" }, k0 = {
  key: 1,
  class: "text-muted-foreground"
}, $0 = {
  key: 7,
  class: "flex flex-col gap-3"
}, w0 = {
  key: 0,
  class: "text-muted-foreground"
}, C0 = ["href"], S0 = { class: "text-sm font-semibold" }, M0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, _0 = ["onClick"], F4 = /* @__PURE__ */ j({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = K(!l.node.collapsed), i = K(0), u = k(() => l.depth === 0), d = k(() => {
      const M = l.node.columns ?? 1;
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
    }, b = k(() => l.node.key ? l.record[l.node.key] : null), p = k(() => {
      const M = b.value;
      if (M == null || M === "")
        return "-";
      if (l.node.type === "date" || l.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, m[l.node.type]);
      let w = String(M);
      return l.node.transform === "upper" && (w = w.toUpperCase()), l.node.transform === "lower" && (w = w.toLowerCase()), [l.node.prefix, w, l.node.suffix].filter(Boolean).join(" ");
    }), y = k(() => {
      const M = typeof b.value == "boolean" ? b.value ? "1" : "" : String(b.value), w = l.node.colors?.[M] ?? l.node.defaultColor ?? "neutral";
      return St[w] ?? "outline";
    });
    return (M, w) => {
      const C = bt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", d0, [
        o("dt", c0, c(e.node.label), 1),
        o("dd", f0, [
          e.node.type === "badge" && x(Oo)(b.value) ? (t(), I(Ue, {
            key: 0,
            variant: y.value,
            class: "capitalize"
          }, {
            default: V(() => [
              R(c(b.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", m0, "-")) : e.node.type === "icon" ? (t(), I(Zn, {
            key: 2,
            value: b.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), I(Xn, {
            key: 3,
            src: b.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), I(lo, {
            key: 4,
            value: typeof b.value == "string" ? b.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", p0, [
            e.node.language ? (t(), a("p", v0, c(e.node.language), 1)) : $("", !0),
            o("pre", g0, [
              o("code", null, c(b.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", h0, [
            b.value && typeof b.value == "object" && !Array.isArray(b.value) && Object.keys(b.value).length ? (t(), a("dl", b0, [
              (t(!0), a(z, null, D(b.value, (h, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", x0, c(v), 1),
                o("dd", y0, c(h), 1)
              ]))), 128))
            ])) : (t(), a("span", k0, "-"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", $0, [
            (t(!0), a(z, null, D(Array.isArray(b.value) ? b.value : [], (h, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(z, null, D(e.node.entries ?? [], (g, f) => (t(), I(C, {
                key: f,
                node: g,
                record: h,
                depth: e.depth + 1,
                onAction: w[0] || (w[0] = (S) => r("action", S))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(b.value) || b.value.length === 0 ? (t(), a("span", w0, "-")) : $("", !0)
          ])) : e.node.url ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, c(p.value), 9, C0)) : (t(), a("span", {
            key: 9,
            class: A([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, c(p.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
            onClick: w[1] || (w[1] = (h) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : $("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: A(u.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: w[2] || (w[2] = (h) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", S0, c(e.node.label), 1),
            e.node.description ? (t(), a("p", M0, c(e.node.description), 1)) : $("", !0)
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (h, v) => (t(), I(C, {
            key: v,
            node: h,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[3] || (w[3] = (g) => r("action", g))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), a(z, null, D(e.node.children ?? [], (h, v) => (t(), I(C, {
          key: v,
          node: h,
          record: e.record,
          depth: e.depth + 1,
          onAction: w[4] || (w[4] = (g) => r("action", g))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: A(u.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, D(e.node.children ?? [], (h, v) => (t(), a("button", {
            key: v,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (g) => i.value = v
          }, c(h.label), 11, _0))), 128))
        ], 2),
        (t(!0), a(z, null, D(e.node.children ?? [], (h, v) => ue((t(), a("div", {
          key: v,
          class: A(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, D(h.children ?? [], (g, f) => (t(), I(C, {
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
}), B0 = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, P0 = { class: "text-muted-foreground text-sm" }, z0 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, A0 = { class: "flex items-start gap-3" }, j0 = { class: "min-w-0 flex-1" }, O0 = { class: "flex flex-wrap items-center gap-2" }, L0 = { class: "truncate text-sm font-medium" }, V0 = { class: "text-muted-foreground mt-0.5 text-xs" }, D0 = { class: "text-muted-foreground text-xs" }, T0 = { class: "mt-auto flex items-center gap-2" }, I0 = /* @__PURE__ */ j({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: n }) {
    const l = e, r = n, s = k(
      () => l.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), a("div", B0, [
      o("p", P0, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", z0, [
        (t(!0), a(z, null, D(e.gateways, (d) => (t(), a("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", A0, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ae({ background: d.color }),
              "aria-hidden": "true"
            }, c(d.mark), 5),
            o("div", j0, [
              o("div", O0, [
                o("h3", L0, c(d.label), 1),
                F(ge, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: V(() => [
                    R(c(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), I(ge, {
                  key: 0,
                  status: "offered"
                }, {
                  default: V(() => [...u[0] || (u[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), I(ge, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: V(() => [...u[1] || (u[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.isDefault ? (t(), I(ge, {
                  key: 2,
                  status: "default"
                }, {
                  default: V(() => [...u[2] || (u[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.connected && d.mode ? (t(), I(ge, {
                  key: 3,
                  status: d.mode
                }, {
                  default: V(() => [
                    R(c(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", V0, c(d.caption), 1)
            ])
          ]),
          o("p", D0, c(d.methods.join(" · ")), 1),
          o("div", T0, [
            F(se, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", d.key)
            }, {
              default: V(() => [...u[3] || (u[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            F(se, {
              size: "sm",
              variant: "ghost",
              onClick: (m) => r("toggle", d.key)
            }, {
              default: V(() => [
                R(c(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), F0 = { class: "flex flex-col gap-6" }, E0 = { class: "relative" }, N0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, R0 = ["d"], U0 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, H0 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, q0 = { class: "flex flex-wrap items-center gap-2" }, K0 = { class: "text-muted-foreground text-sm" }, G0 = { class: "flex flex-col gap-1 text-sm" }, W0 = ["value"], Z0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, J0 = { class: "flex flex-wrap items-center gap-2" }, Y0 = {
  key: 1,
  class: "flex items-center gap-2"
}, E4 = /* @__PURE__ */ j({
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
    const n = Ke(e, "gateways"), l = K(null), r = K(""), s = k(
      () => n.value.find((w) => w.key === l.value) ?? null
    ), i = k(() => {
      const w = r.value.trim().toLowerCase();
      return w === "" ? n.value : n.value.filter((C) => [C.key, C.label, C.caption, ...C.methods].join(" ").toLowerCase().includes(w));
    });
    function u(w) {
      return w.connected && w.enabled !== !1;
    }
    function d(w, C) {
      n.value = n.value.map(
        (h) => h.key === w ? { ...h, ...C } : h
      );
    }
    function m(w) {
      l.value = w;
    }
    function b(w) {
      const C = n.value.find((v) => v.key === w);
      if (!C)
        return;
      const h = !C.connected;
      d(w, {
        connected: h,
        mode: h ? C.mode ?? "test" : null,
        enabled: h,
        isDefault: !1
      });
    }
    function p(w, C) {
      const h = n.value.find((v) => v.key === w);
      h?.connected && d(w, { enabled: C, isDefault: C ? h.isDefault : !1 });
    }
    function y(w) {
      const C = n.value.find((h) => h.key === w);
      !C || !u(C) || (n.value = n.value.map((h) => ({
        ...h,
        isDefault: h.key === w
      })));
    }
    function M(w) {
      const C = l.value;
      !C || !n.value.find((v) => v.key === C)?.connected || d(C, { mode: w });
    }
    return (w, C) => (t(), a(z, null, [
      o("div", F0, [
        F(Me, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", E0, [
          (t(), a("svg", N0, [
            o("path", {
              d: x(ie)("search")
            }, null, 8, R0)
          ])),
          F(pe, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (h) => r.value = h),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), I(I0, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: b
        }, null, 8, ["gateways"])) : (t(), a("p", U0, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      F(zt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: C[8] || (C[8] = (h) => l.value = null)
      }, {
        footer: V(() => [
          F(se, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (h) => l.value = null)
          }, {
            default: V(() => [...C[21] || (C[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), I(se, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (h) => b(s.value.key))
          }, {
            default: V(() => [
              R(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: V(() => [
          s.value ? (t(), a("div", H0, [
            o("div", q0, [
              F(ge, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: V(() => [
                  R(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), I(ge, {
                key: 0,
                status: "offered"
              }, {
                default: V(() => [...C[9] || (C[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), I(ge, {
                key: 1,
                status: "disabled"
              }, {
                default: V(() => [...C[10] || (C[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), I(ge, {
                key: 2,
                status: "default"
              }, {
                default: V(() => [...C[11] || (C[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), I(ge, {
                key: 3,
                status: s.value.mode
              }, {
                default: V(() => [
                  R(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", K0, c(s.value.caption), 1),
            o("label", G0, [
              C[12] || (C[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, W0)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", Z0, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", J0, [
                F(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (h) => p(s.value.key, !0))
                }, {
                  default: V(() => [...C[13] || (C[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                F(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (h) => p(s.value.key, !1))
                }, {
                  default: V(() => [...C[14] || (C[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                F(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: C[3] || (C[3] = (h) => y(s.value.key))
                }, {
                  default: V(() => [...C[15] || (C[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), a("div", Y0, [
              F(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (h) => M("test"))
              }, {
                default: V(() => [...C[18] || (C[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              F(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (h) => M("live"))
              }, {
                default: V(() => [...C[19] || (C[19] = [
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
    const n = localStorage.getItem(e);
    if (n)
      return new Set(JSON.parse(n));
  } catch {
  }
  return /* @__PURE__ */ new Set();
}
function N4(e) {
  const n = K(Rt(e));
  fe(() => {
    n.value = Rt(e);
  }), de(
    n,
    (d) => {
      try {
        localStorage.setItem(e, JSON.stringify([...d]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function l(d) {
    const m = new Set(n.value);
    m.has(d) ? m.delete(d) : m.add(d), n.value = m;
  }
  function r(d) {
    const m = new Set(n.value);
    m.add(d), n.value = m;
  }
  function s(d) {
    const m = new Set(n.value);
    m.delete(d), n.value = m;
  }
  function i(d) {
    n.value = new Set(d);
  }
  function u() {
    n.value = /* @__PURE__ */ new Set();
  }
  return { hidden: n, toggle: l, hide: r, show: s, setHidden: i, reset: u };
}
function R4(e) {
  const { config: n, rows: l, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = K(
    n.driver === "none" ? "off" : "connecting"
  ), m = K(/* @__PURE__ */ new Set());
  let b = /* @__PURE__ */ new Map(), p, y, M, w = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function h(W, Z) {
    b.set(W, { ...b.get(W) ?? {}, ...Z }), !p && (p = setTimeout(() => {
      p = void 0, v();
    }, n.batchMs));
  }
  function v() {
    if (b.size === 0)
      return;
    const W = b;
    b = /* @__PURE__ */ new Map();
    const Z = /* @__PURE__ */ new Set();
    for (const [te, U] of W) {
      const T = l.value.find((Y) => Y[r] === te);
      if (!T) {
        u?.(te, U);
        continue;
      }
      Object.assign(T, U), Z.add(te);
    }
    Z.size !== 0 && (m.value = /* @__PURE__ */ new Set([...m.value, ...Z]), setTimeout(() => {
      const te = new Set(m.value);
      Z.forEach((U) => te.delete(U)), m.value = te;
    }, 1500));
  }
  async function g() {
    if (!(!s || l.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const W = l.value.map((U) => U[r]), { records: Z, at: te } = await s(W, w);
        w = te, d.value = "live";
        for (const U of Z)
          h(U[r], U);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function f() {
    S(), d.value = "live", y = setInterval(g, n.intervalMs);
  }
  function S() {
    clearInterval(y), y = void 0, M?.abort();
  }
  function _() {
    return window.Echo ?? null;
  }
  function P() {
    const W = _();
    if (!W || !n.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = n.channel;
    const Z = W.private(n.channel);
    for (const te of n.events)
      Z.listen(te, (U) => {
        U?.[r] !== void 0 && h(U[r], U);
      });
    d.value = "live", W.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), W.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function G() {
    C && (_()?.leave(C), C = null);
  }
  function N() {
    n.driver === "poll" && f(), n.driver === "broadcast" && P();
  }
  function ee() {
    S(), G(), clearTimeout(p), p = void 0, b = /* @__PURE__ */ new Map();
  }
  function H() {
    n.pauseWhenHidden && (document.hidden ? (ee(), d.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), N(), i?.()));
  }
  return fe(() => {
    n.driver !== "none" && (N(), n.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ve(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: d, recentlyChanged: m, applyPatch: h, flush: v, pollOnce: g };
}
const X0 = /^[a-z0-9-]+$/, Q0 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function U4(e) {
  $a(() => {
    if (typeof document > "u")
      return;
    const n = {};
    for (const [l, r] of Object.entries(e.value ?? {}))
      !X0.test(l) || typeof r != "string" || !Q0.test(r) || (n[`--${l}`] = r);
    os(n);
  });
}
const ek = { class: "flex items-center gap-0.5" }, tk = /* @__PURE__ */ j({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (n, l) => (t(), a("span", ek, [
      String(e.value) === "mono" ? (t(), a(z, { key: 0 }, [
        l[0] || (l[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        l[1] || (l[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        l[2] || (l[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(z, { key: 1 }, [
        l[3] || (l[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        l[4] || (l[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        l[5] || (l[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), ak = /* @__PURE__ */ j({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (n, l) => (t(), I(ua, {
      code: "AB-1234",
      style: ae(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), lk = { class: "flex flex-col gap-2" }, nk = { class: "bg-card rounded-lg border p-4" }, ok = { class: "text-muted-foreground truncate text-xs" }, sk = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, rk = /* @__PURE__ */ j({
  __name: "PkSeoPreview",
  props: {
    field: {},
    values: { default: () => ({}) }
  },
  setup(e) {
    const n = e, l = {
      titleMax: 60,
      titleMin: 30,
      descriptionMax: 160,
      descriptionMin: 70
    }, r = k(() => ({ ...l, ...n.field.limits ?? {} })), s = k(
      () => String(n.values[n.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = k(
      () => String(n.values[n.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), u = k(
      () => String(n.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = k(() => {
      const C = String(n.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return C === "" ? u.value : `${u.value} › ${C.split("/").join(" › ")}`;
    });
    function m(C, h) {
      return C.length <= h ? C : `${C.slice(0, h - 1).trimEnd()}…`;
    }
    const b = k(() => m(s.value, r.value.titleMax)), p = k(() => m(i.value, r.value.descriptionMax));
    function y(C, h, v) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > v ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < h ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = k(
      () => y(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = k(
      () => y(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, h) => (t(), a("div", lk, [
      o("div", nk, [
        o("p", ok, c(d.value), 1),
        o("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", b.value === "" ? "text-muted-foreground italic" : ""])
        }, c(b.value || "Untitled page"), 3),
        o("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", sk, [
        o("span", {
          class: A(M.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(M.value.note), 3),
        o("span", {
          class: A(w.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(w.value.note), 3)
      ]),
      h[0] || (h[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function ik() {
  we("radio", jd), we("checkboxlist", Vd), we("tags", Rd), we("colour", ec), we("slider", sc), we("visual-select", xc), we("markdown", cd), we("code", bd), we("seo-preview", rk), it("swatch", kc), it("voucher-code-box", ak), it("document-colour-mode", tk);
}
function fa() {
  const e = K(null), n = K(!1);
  let l = null;
  return fe(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      n.value = !0;
      return;
    }
    l = new IntersectionObserver(
      (s) => {
        for (const i of s)
          i.isIntersecting && (n.value = !0, l?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), l.observe(e.value);
  }), ve(() => l?.disconnect()), { el: e, shown: n };
}
const uk = /* @__PURE__ */ j({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: n, shown: l } = fa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: n,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(l) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ae({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), dk = ["id"], $e = /* @__PURE__ */ j({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (n, l) => (t(), a("section", {
      id: e.id,
      class: A(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: A(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        F(uk, null, {
          default: V(() => [
            q(n.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, dk));
  }
}), ck = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, fk = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, mk = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Oe = /* @__PURE__ */ j({
  __name: "PkSectionHeading",
  props: {
    eyebrow: {},
    title: {},
    body: {},
    centred: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (n, l) => e.title || e.body || e.eyebrow ? (t(), a("div", {
      key: 0,
      class: A(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", ck, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), a("h2", fk, c(e.title), 1)) : $("", !0),
      e.body ? (t(), a("p", mk, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
});
function pk() {
  const e = K(null);
  let n = null;
  function l(s) {
    if (!n)
      return;
    const i = n.getBoundingClientRect();
    n.style.setProperty("--pk-px", String((s.clientX - i.left) / i.width)), n.style.setProperty("--pk-py", String((s.clientY - i.top) / i.height));
  }
  function r() {
    n?.style.setProperty("--pk-px", "0.5"), n?.style.setProperty("--pk-py", "0.5");
  }
  return fe(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (n = e.value, r(), n.addEventListener("pointermove", l, { passive: !0 }), n.addEventListener("pointerleave", r, { passive: !0 }));
  }), ve(() => {
    n?.removeEventListener("pointermove", l), n?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const vk = { class: "pk-tilt-inner relative h-full" }, gk = /* @__PURE__ */ j({
  __name: "PkTiltCard",
  setup(e) {
    const { el: n } = pk();
    return (l, r) => (t(), a("div", {
      ref_key: "el",
      ref: n,
      class: "pk-tilt group/tilt"
    }, [
      o("div", vk, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(l.$slots, "default")
      ])
    ], 512));
  }
}), hk = { class: "flex flex-col gap-10" }, bk = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, xk = { class: "text-base font-semibold" }, yk = { class: "text-sm text-pretty text-muted-foreground" }, kk = /* @__PURE__ */ j({
  __name: "PkBento",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function n(l) {
      return {
        wide: "sm:col-span-2",
        tall: "sm:row-span-2",
        large: "sm:col-span-2 sm:row-span-2"
      }[l ?? ""] ?? "";
    }
    return (l, r) => (t(), I($e, null, {
      default: V(() => [
        o("div", hk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", bk, [
            (t(!0), a(z, null, D(e.items ?? [], (s, i) => (t(), I(gk, {
              key: i,
              class: A(n(s.span))
            }, {
              default: V(() => [
                o("div", {
                  class: A([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", xk, c(s.title), 1),
                  o("p", yk, c(s.body), 1)
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
}), $k = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, wk = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Ck = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Sk = ["href"], Mk = /* @__PURE__ */ j({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (n, l) => (t(), I($e, null, {
      default: V(() => [
        o("div", $k, [
          o("h2", wk, c(e.title), 1),
          e.body ? (t(), a("p", Ck, c(e.body), 1)) : $("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, Sk)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), _k = { class: "flex flex-col gap-8" }, Bk = { class: "divide-y rounded-lg border" }, Pk = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, zk = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Ak = /* @__PURE__ */ j({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), I($e, { narrow: "" }, {
      default: V(() => [
        o("div", _k, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Bk, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", Pk, [
                R(c(r.question) + " ", 1),
                l[0] || (l[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", zk, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), jk = { class: "flex flex-col gap-10" }, Ok = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Lk = { class: "text-sm font-semibold" }, Vk = { class: "text-sm text-pretty text-muted-foreground" }, Dk = /* @__PURE__ */ j({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), I($e, null, {
      default: V(() => [
        o("div", jk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Ok, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", Lk, c(r.title), 1),
              o("p", Vk, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Tk = { class: "flex flex-col items-center gap-6 text-center" }, Ik = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Fk = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, Ek = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Nk = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Rk = ["href"], Uk = ["href"], Hk = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, qk = /* @__PURE__ */ j({
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
    return (n, l) => (t(), I($e, null, {
      default: V(() => [
        o("div", Tk, [
          e.eyebrow ? (t(), a("p", Ik, c(e.eyebrow), 1)) : $("", !0),
          o("h1", Fk, c(e.title), 1),
          e.body ? (t(), a("p", Ek, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", Nk, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, Rk)) : $("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, Uk)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), a("p", Hk, c(e.note), 1)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Kk = { class: "flex flex-col items-center gap-6" }, Gk = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, Wk = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, Zk = /* @__PURE__ */ j({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), I($e, { muted: "" }, {
      default: V(() => [
        o("div", Kk, [
          e.title ? (t(), a("p", Gk, c(e.title), 1)) : $("", !0),
          o("ul", Wk, [
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
}), Jk = { class: "flex flex-col gap-10" }, Yk = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Xk = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, Qk = ["aria-pressed"], e2 = ["aria-pressed"], t2 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, a2 = { class: "grid gap-4 md:grid-cols-3" }, l2 = { class: "flex flex-col gap-1" }, n2 = { class: "text-sm font-semibold" }, o2 = { class: "flex items-baseline gap-1" }, s2 = { class: "text-3xl font-semibold tracking-tight" }, r2 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, i2 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, u2 = { class: "flex flex-col gap-2 text-sm" }, d2 = { class: "text-muted-foreground" }, c2 = ["href"], f2 = /* @__PURE__ */ j({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const n = e, l = K(!1), r = k(() => (n.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return l.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, u) => (t(), I($e, { muted: "" }, {
      default: V(() => [
        o("div", Jk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", Yk, [
            o("div", Xk, [
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  l.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !l.value,
                onClick: u[0] || (u[0] = (d) => l.value = !1)
              }, " Monthly ", 10, Qk),
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  l.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": l.value,
                onClick: u[1] || (u[1] = (d) => l.value = !0)
              }, " Annual ", 10, e2)
            ]),
            e.annualNote ? (t(), a("p", t2, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", a2, [
            (t(!0), a(z, null, D(e.items ?? [], (d, m) => (t(), a("li", {
              key: m,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", l2, [
                o("h3", n2, c(d.name), 1),
                o("p", o2, [
                  o("span", s2, c(s(d)), 1),
                  d.period ? (t(), a("span", r2, c(d.period), 1)) : $("", !0)
                ]),
                d.body ? (t(), a("p", i2, c(d.body), 1)) : $("", !0)
              ]),
              o("ul", u2, [
                (t(!0), a(z, null, D(d.features ?? [], (b, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", d2, c(b.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), a("a", {
                key: 0,
                href: d.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(d.label), 11, c2)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function m2() {
  const e = K(null);
  let n = null, l = null, r = !1, s = !1;
  function i() {
    if (r = !1, !n || !s)
      return;
    const d = n.getBoundingClientRect(), m = d.height + window.innerHeight, b = m <= 0 ? 0 : (window.innerHeight - d.top) / m;
    n.style.setProperty("--pk-progress", String(Math.min(Math.max(b, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return fe(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (n = e.value, d || typeof IntersectionObserver > "u") {
        n.style.setProperty("--pk-progress", "1");
        return;
      }
      n.style.setProperty("--pk-progress", "0"), l = new IntersectionObserver((m) => {
        s = m.some((b) => b.isIntersecting), s && u();
      }), l.observe(n), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), ve(() => {
    l?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const p2 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, v2 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, g2 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, h2 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, b2 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, x2 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, y2 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, k2 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, $2 = { class: "ml-3 truncate text-xs text-muted-foreground" }, w2 = { class: "flex" }, C2 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, S2 = { class: "min-w-0 flex-1 p-4" }, M2 = { class: "flex flex-col divide-y rounded-md border" }, _2 = /* @__PURE__ */ j({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: n } = m2();
    return (l, r) => (t(), a("section", {
      ref_key: "el",
      ref: n,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", p2, [
        o("div", v2, [
          o("div", g2, [
            o("h2", h2, c(e.title), 1),
            e.body ? (t(), a("p", b2, c(e.body), 1)) : $("", !0)
          ]),
          o("div", x2, [
            o("div", y2, [
              o("div", k2, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", $2, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", w2, [
                o("div", C2, [
                  (t(), a(z, null, D(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ae({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", S2, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", M2, [
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
}), B2 = /* @__PURE__ */ j({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const n = e, { el: l, shown: r } = fa(), s = K(0);
    return de(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = n.to;
        return;
      }
      const d = performance.now(), m = (b) => {
        const p = Math.min((b - d) / n.duration, 1);
        s.value = n.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = n.to;
      };
      requestAnimationFrame(m);
    }), (i, u) => (t(), a("span", {
      ref_key: "el",
      ref: l
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), P2 = { class: "flex flex-col gap-10" }, z2 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, A2 = { class: "order-2 text-sm text-muted-foreground" }, j2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, O2 = /* @__PURE__ */ j({
  __name: "PkStats",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function n(l) {
      const r = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/.exec((l ?? "").trim());
      if (!r)
        return null;
      const s = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: s };
    }
    return (l, r) => (t(), I($e, { muted: "" }, {
      default: V(() => [
        o("div", P2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", z2, [
            (t(!0), a(z, null, D(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", A2, c(s.label), 1),
              o("dd", j2, [
                n(s.value) ? (t(), I(B2, {
                  key: 0,
                  to: n(s.value).number,
                  prefix: n(s.value).prefix,
                  suffix: n(s.value).suffix,
                  decimals: n(s.value).decimals
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
}), L2 = { class: "flex flex-col gap-10" }, V2 = { class: "grid gap-6 md:grid-cols-3" }, D2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, T2 = { class: "text-sm font-semibold" }, I2 = { class: "text-sm text-pretty text-muted-foreground" }, F2 = /* @__PURE__ */ j({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), I($e, null, {
      default: V(() => [
        o("div", L2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", V2, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", D2, c(s + 1), 1),
              o("h3", T2, c(r.title), 1),
              o("p", I2, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), E2 = { class: "flex flex-col gap-10" }, N2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, R2 = { class: "text-pretty text-sm leading-relaxed" }, U2 = { class: "mt-auto flex items-center gap-3" }, H2 = ["src"], q2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, K2 = { class: "min-w-0" }, G2 = { class: "block truncate text-sm font-medium" }, W2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, Z2 = /* @__PURE__ */ j({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (n, l) => (t(), I($e, null, {
      default: V(() => [
        o("div", E2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", N2, [
            (t(!0), a(z, null, D(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", R2, " “" + c(r.quote) + "” ", 1),
              o("figcaption", U2, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, H2)) : (t(), a("span", q2, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", K2, [
                  o("span", G2, c(r.name), 1),
                  r.role ? (t(), a("span", W2, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), H4 = /* @__PURE__ */ j({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: n }) {
    const l = e, r = {
      hero: qk,
      logos: Zk,
      features: Dk,
      bento: kk,
      showcase: _2,
      steps: F2,
      stats: O2,
      testimonials: Z2,
      pricing: f2,
      faq: Ak,
      cta: Mk
    }, s = k(
      () => (l.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && l.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return n({ known: Object.keys(r) }), (i, u) => (t(!0), a(z, null, D(s.value, (d) => (t(), I(he(d.component), ne({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), J2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, q4 = /* @__PURE__ */ j({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (n, l) => (t(), a("div", J2, [
      o("div", {
        class: A([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      o("div", {
        class: A([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      o("div", {
        class: A([
          "pk-blob absolute top-1/3 left-1/4 size-[30rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-40 dark:opacity-30" : "opacity-20 dark:opacity-10"
        ]),
        style: { background: "radial-gradient(circle at 40% 60%, var(--pk-aurora-3), transparent 70%)", "animation-delay": "-14s" }
      }, null, 2),
      l[0] || (l[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), Y2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, K4 = /* @__PURE__ */ j({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (n, l) => (t(), a("div", Y2, [...l[0] || (l[0] = [
      ht('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), X2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, G4 = /* @__PURE__ */ j({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (n, l) => (t(), a("div", X2, [...l[0] || (l[0] = [
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
ik();
const W4 = "0.0.1";
export {
  p4 as AdminDirectory,
  Gs as Alert,
  Ws as AlertDescription,
  Zs as AlertTitle,
  Yw as AppPageFooter,
  b$ as AppearanceDrawer,
  mw as Avatar,
  pw as AvatarFallback,
  vw as AvatarImage,
  St as BADGE_VARIANTS,
  p$ as BadgeResolver,
  r4 as BarChart,
  gw as Breadcrumb,
  hw as BreadcrumbEllipsis,
  bw as BreadcrumbItem,
  xw as BreadcrumbLink,
  yw as BreadcrumbList,
  kw as BreadcrumbPage,
  $w as BreadcrumbSeparator,
  r$ as BulkActions,
  Nw as Card,
  Rw as CardAction,
  Uw as CardContent,
  Hw as CardDescription,
  qw as CardFooter,
  Kw as CardHeader,
  Gw as CardTitle,
  Bb as CartPanel,
  w4 as CatalogBrowser,
  Qv as CatalogCard,
  ca as CatalogFilterSheet,
  Pt as CatalogGrid,
  k4 as CatalogInspect,
  h1 as CatalogItemDetail,
  $4 as CatalogItemView,
  C4 as CatalogRegister,
  y4 as CatalogTill,
  Cp as ChartCard,
  Ze as ChartTooltip,
  Or as Checkbox,
  u$ as CheckboxCell,
  d$ as CodeCell,
  lo as ColourCell,
  f4 as ComboChart,
  M4 as DASHBOARD_HIDDEN_STORAGE_KEY,
  X1 as DASHBOARD_HIDE_KEY,
  _4 as DashboardShortcuts,
  an as DataTable,
  zw as Dialog,
  Aw as DialogClose,
  jw as DialogContent,
  Ow as DialogDescription,
  Lw as DialogFooter,
  Vw as DialogHeader,
  jr as DialogOverlay,
  Dw as DialogScrollContent,
  Tw as DialogTitle,
  Iw as DialogTrigger,
  p4 as DirectoryPage,
  Q$ as DropdownMenu,
  ew as DropdownMenuCheckboxItem,
  tw as DropdownMenuContent,
  aw as DropdownMenuGroup,
  lw as DropdownMenuItem,
  nw as DropdownMenuLabel,
  Y4 as DropdownMenuPortal,
  ow as DropdownMenuRadioGroup,
  sw as DropdownMenuRadioItem,
  rw as DropdownMenuSeparator,
  iw as DropdownMenuShortcut,
  uw as DropdownMenuSub,
  dw as DropdownMenuSubContent,
  cw as DropdownMenuSubTrigger,
  fw as DropdownMenuTrigger,
  f$ as EditableCell,
  qe as FormFieldControl,
  m4 as HeatmapChart,
  ot as ICON_PATHS,
  Zn as IconCell,
  Xn as ImageCell,
  F4 as InfoNode,
  tr as JPEG_IMAGE_ERROR,
  c$ as KeyValueCell,
  Fw as Label,
  Ef as LineChart,
  ib as LineItems,
  tt as MiniStatCard,
  ww as NavigationMenu,
  Cw as NavigationMenuContent,
  Sw as NavigationMenuIndicator,
  Mw as NavigationMenuItem,
  _w as NavigationMenuLink,
  Bw as NavigationMenuList,
  Pw as NavigationMenuTrigger,
  zr as NavigationMenuViewport,
  er as OPAQUE_IMAGE_ERROR,
  E4 as PaymentGatewaySettings,
  I0 as PaymentGateways,
  i4 as PieChart,
  w$ as PkAlertError,
  q4 as PkAuroraBackdrop,
  Ue as PkBadge,
  kk as PkBento,
  x$ as PkBottomNav,
  Ww as PkBoundary,
  l4 as PkBuilder,
  se as PkButton,
  Zw as PkCard,
  Vd as PkCheckboxList,
  ua as PkCodeBox,
  bd as PkCodeInput,
  ec as PkColourPicker,
  G4 as PkConsoleBackdrop,
  B2 as PkCountUp,
  Mk as PkCta,
  Xw as PkDeviceFrame,
  Xc as PkDocument,
  Te as PkDropdown,
  K4 as PkEditorialBackdrop,
  Ak as PkFaq,
  Dk as PkFeatureGrid,
  be as PkFieldLabel,
  sa as PkFileUpload,
  Me as PkHeading,
  qk as PkHero,
  Ri as PkKeyValue,
  H4 as PkLandingSections,
  Zk as PkLogoCloud,
  cd as PkMarkdownInput,
  Ye as PkModal,
  Bt as PkMultiSelect,
  k$ as PkOtpInput,
  V4 as PkPasskeyRegister,
  C$ as PkPasswordInput,
  f2 as PkPricing,
  Yh as PkQtyStepper,
  Co as PkQueryBuilder,
  jd as PkRadioGroup,
  a4 as PkRepeater,
  uk as PkReveal,
  Xi as PkRichEditor,
  $e as PkSection,
  Oe as PkSectionHeading,
  _2 as PkShowcase,
  j1 as PkSignaturePad,
  Ie as PkSkeleton,
  zt as PkSlideover,
  sc as PkSlider,
  y$ as PkSpinner,
  O2 as PkStats,
  ge as PkStatusBadge,
  ni as PkStepIndicator,
  F2 as PkSteps,
  kc as PkSwatchPreview,
  Rd as PkTagsInput,
  Z2 as PkTestimonials,
  pe as PkTextInput,
  gk as PkTiltCard,
  xc as PkVisualSelect,
  Mg as PlanCard,
  x4 as PlanEditor,
  b4 as PlanGrid,
  c4 as PolarAreaChart,
  d4 as RadarChart,
  v$ as RecordActions,
  D4 as RecordForm,
  i$ as RelationPanel,
  zv as STATUS_TONES,
  u4 as ScatterChart,
  t0 as SchemaNode,
  g4 as SegmentedBar,
  z4 as SelectionBar,
  Sr as Separator,
  P4 as SetupChecklist,
  la as ShadcnInput,
  rr as Sheet,
  M$ as SheetClose,
  ur as SheetContent,
  dr as SheetDescription,
  _$ as SheetFooter,
  cr as SheetHeader,
  fr as SheetTitle,
  B$ as SheetTrigger,
  Up as ShortcutsWidget,
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
  S4 as SignatureStudio,
  nt as Sparkline,
  Ew as Spinner,
  v4 as StatCard,
  h4 as StatListChart,
  B4 as StatStrip,
  De as Switch,
  na as TRANSPARENT_IMAGE_HELP,
  A4 as TablePagination,
  j4 as TableShell,
  O4 as TableTabs,
  L4 as TableToolbar,
  s4 as ThemeToggle,
  $r as Tooltip,
  wr as TooltipContent,
  R$ as TooltipProvider,
  Cr as TooltipTrigger,
  da as TrendBadge,
  T4 as UnsavedBar,
  Js as alertVariants,
  ns as appearanceVars,
  vt as applyAppearance,
  sr as assertTransparentImage,
  Xe as buttonClasses,
  at as catalogFiltersActive,
  X as cn,
  eg as cycleLabel,
  _e as emptyCatalogFilters,
  oi as fieldControl,
  Lh as findExactSku,
  tg as formatPerkValue,
  Oo as hasBadgeValue,
  Qw as hasFieldControl,
  n4 as hasOptionPreview,
  ie as iconPath,
  nr as imageHasTransparency,
  g$ as initializeAppearance,
  pt as isDark,
  At as matchCatalogItem,
  Ar as navigationMenuTriggerStyle,
  rc as optionPreview,
  S$ as packWidgetColumns,
  ag as perkGranted,
  _t as readAppearance,
  ik as registerBuiltInFieldControls,
  we as registerFieldControl,
  it as registerOptionPreview,
  e4 as registeredFieldTypes,
  ic as registeredOptionPreviews,
  t4 as resetFieldControls,
  o4 as resetOptionPreviews,
  h$ as setAppearancePersister,
  Mr as sidebarMenuButtonVariants,
  Lv as statusBadgeVariant,
  Ov as statusTone,
  $$ as toUrl,
  aa as useAppearance,
  N4 as useColumnVisibility,
  R4 as useLiveUpdates,
  pk as usePointer,
  fa as useReveal,
  m$ as useSchemaColumns,
  m2 as useScrollProgress,
  Jw as useShellPageFooter,
  lt as useSidebar,
  U4 as useTenantTheme,
  I4 as useUnsavedChanges,
  W4 as version
};
//# sourceMappingURL=index.js.map
