import './ui.css';
import { defineComponent as A, ref as Z, watch as de, useId as ma, computed as k, openBlock as t, createElementBlock as a, normalizeClass as j, createElementVNode as o, createCommentVNode as $, withModifiers as ce, unref as x, Fragment as z, renderList as L, createTextVNode as N, toDisplayString as f, createStaticVNode as vt, renderSlot as K, nextTick as Se, onBeforeUnmount as ve, createBlock as D, Teleport as Ie, createVNode as F, Transition as Ae, withCtx as O, onMounted as fe, normalizeStyle as ne, resolveDynamicComponent as be, resolveComponent as gt, withDirectives as ue, vModelSelect as Ve, vModelDynamic as pa, isRef as va, vModelText as xe, useTemplateRef as ga, mergeProps as le, normalizeProps as ye, guardReactiveProps as Pe, onErrorCaptured as ha, provide as Rt, inject as ht, defineAsyncComponent as jt, vShow as je, useSlots as ba, markRaw as Ut, withKeys as xa, reactive as He, useModel as Ke, mergeModels as _e, createSlots as ya, shallowRef as ka, watchEffect as $a } from "vue";
import { AlertCircle as wa, EyeOff as Ca, Eye as Sa, X as bt, PanelLeftOpen as Ma, PanelLeftClose as Ba, Check as Ht, Circle as _a, ChevronRight as qt, MoreHorizontal as Pa, ChevronDown as za, Loader2Icon as Aa } from "@lucide/vue";
import { cva as xt } from "class-variance-authority";
import { clsx as ja } from "clsx";
import { twMerge as Oa } from "tailwind-merge";
import { useVModel as Kt, reactiveOmit as re, useMediaQuery as La, useEventListener as Va, defaultDocument as Da } from "@vueuse/core";
import { useForwardPropsEmits as me, DialogRoot as Gt, DialogClose as Ee, DialogOverlay as yt, DialogPortal as kt, DialogContent as $t, DialogDescription as Wt, DialogTitle as Zt, DialogTrigger as Jt, createContext as Ta, Primitive as Ne, TooltipRoot as Fa, TooltipPortal as Ia, TooltipContent as Ea, TooltipArrow as Na, TooltipProvider as Yt, TooltipTrigger as Ra, Separator as Ua, DropdownMenuRoot as Ha, DropdownMenuCheckboxItem as qa, DropdownMenuItemIndicator as Xt, DropdownMenuPortal as Ka, DropdownMenuContent as Ga, DropdownMenuGroup as Wa, useForwardProps as ke, DropdownMenuItem as Za, DropdownMenuLabel as Ja, DropdownMenuRadioGroup as Ya, DropdownMenuRadioItem as Xa, DropdownMenuSeparator as Qa, DropdownMenuSub as en, DropdownMenuSubContent as tn, DropdownMenuSubTrigger as an, DropdownMenuTrigger as nn, AvatarRoot as ln, AvatarFallback as on, AvatarImage as sn, NavigationMenuViewport as rn, NavigationMenuRoot as un, NavigationMenuContent as dn, NavigationMenuIndicator as cn, NavigationMenuItem as fn, NavigationMenuLink as mn, NavigationMenuList as pn, NavigationMenuTrigger as vn, Label as gn, CheckboxRoot as hn, CheckboxIndicator as bn, SwitchRoot as xn, SwitchThumb as yn } from "reka-ui";
import { DropdownMenuPortal as D4 } from "reka-ui";
import { usePage as Qt, Link as kn } from "@inertiajs/vue3";
const $n = { class: "w-full border-collapse text-sm" }, wn = { class: "bg-background sticky top-0 z-10" }, Cn = { class: "bg-muted/50" }, Sn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Mn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Bn = ["id", "checked", "indeterminate"], _n = ["onClick"], Pn = {
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
}, Fn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], In = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, En = {
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
    const n = e;
    function r(H) {
      if (!H || !n.groupBy)
        return "";
      if (H.__group !== void 0 && H.__group !== null)
        return String(H.__group);
      const Y = H[n.groupBy.key];
      return Y == null || Y === "" ? "" : String(Y);
    }
    function s(H) {
      return n.groupBy ? H === 0 ? !0 : r(n.rows[H]) !== r(n.rows[H - 1]) : !1;
    }
    function i(H) {
      if (H.__groupTitle)
        return String(H.__groupTitle);
      const Y = n.groupBy ? H[n.groupBy.key] : null, te = Y == null || Y === "" ? "None" : String(Y);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? te : `${n.groupBy.label}: ${te}`;
    }
    const u = Z(/* @__PURE__ */ new Set()), d = Z(/* @__PURE__ */ new Set());
    function m(H) {
      return n.groupBy?.collapsible ? u.value.has(H) : !1;
    }
    function b(H) {
      if (!n.groupBy?.collapsible)
        return;
      const Y = new Set(d.value);
      Y.add(H), d.value = Y;
      const te = new Set(u.value);
      te.has(H) ? te.delete(H) : te.add(H), u.value = te;
    }
    function p(H) {
      return n.groupBy?.collapsible ? !m(r(n.rows[H])) : !0;
    }
    de(
      () => n.rows,
      (H) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const Y = new Set(u.value);
        for (const te of H) {
          const ae = r(te);
          ae !== "" && !d.value.has(ae) && Y.add(ae);
        }
        u.value = Y;
      },
      { immediate: !0 }
    );
    const h = Z(null), M = Z(null);
    function w(H, Y) {
      h.value = H, Y.dataTransfer?.setData("text/plain", String(H)), Y.dataTransfer && (Y.dataTransfer.effectAllowed = "move");
    }
    function S() {
      h.value = null, M.value = null;
    }
    function y(H) {
      return h.value === null || M.value !== H ? "" : h.value > H ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function v(H, Y) {
      h.value !== null && (Y.preventDefault(), M.value = H);
    }
    function g(H) {
      const Y = h.value;
      if (h.value = null, M.value = null, Y === null || Y === H)
        return;
      const te = n.rows.map((oe) => oe[n.rowKey]), [ae] = te.splice(Y, 1);
      te.splice(H, 0, ae), c("reorder", te);
    }
    const c = l;
    function C(H, Y) {
      !n.rowClickable || n.reordering || Y.button !== 0 || Y.metaKey || Y.ctrlKey || Y.shiftKey || Y.altKey || Y.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", H);
    }
    const B = Z(null), P = ma(), J = k(() => n.columns.filter((H) => !n.hidden?.has(H.key)));
    function E(H) {
      const Y = H[n.rowKey];
      return Y == null || Y === "" ? null : Y;
    }
    function ee(H) {
      const Y = E(H);
      return Y !== null && !!n.selected?.has(Y);
    }
    function q(H) {
      const Y = E(H);
      Y !== null && c("toggle-row", Y);
    }
    const R = k(
      () => n.rows.map((H) => E(H)).filter((H) => H !== null)
    ), T = k(
      () => R.value.length > 0 && R.value.every((H) => n.selected?.has(H))
    ), U = k(
      () => !T.value && R.value.some((H) => n.selected?.has(H))
    );
    function I(H) {
      return H.sortKey ?? H.key;
    }
    function V(H) {
      return n.sort === I(H);
    }
    async function Q(H, Y, te) {
      try {
        await navigator.clipboard.writeText(String(te)), B.value = `${H}-${Y.key}`, setTimeout(() => B.value = null, 1200);
      } catch {
      }
    }
    const _ = k(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function W(H) {
      return n.summaries?.[H] ?? null;
    }
    function G(H) {
      const Y = n.summaries?.[H], te = n.summaryValues?.[H];
      if (!Y)
        return "";
      if (te == null)
        return "-";
      const ae = Y.divideBy ? te / Y.divideBy : te, oe = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: Y.decimals,
        maximumFractionDigits: Y.decimals
      }).format(ae);
      return `${Y.prefix ?? ""}${oe}${Y.suffix ?? ""}`;
    }
    return (H, Y) => (t(), a("div", {
      class: j(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", $n, [
        o("thead", wn, [
          o("tr", Cn, [
            e.reordering ? (t(), a("th", Sn)) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Mn, [
              o("input", {
                id: `${x(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: T.value,
                indeterminate: U.value,
                "aria-label": "Select all rows on this page",
                onClick: Y[0] || (Y[0] = ce(() => {
                }, ["stop"])),
                onChange: Y[1] || (Y[1] = ce((te) => c("toggle-page", !T.value), ["stop"]))
              }, null, 40, Bn)
            ])) : $("", !0),
            (t(!0), a(z, null, L(J.value, (te) => (t(), a("th", {
              key: te.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              te.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ae) => c("sort", I(te))
              }, [
                N(f(te.label) + " ", 1),
                V(te) ? (t(), a("span", Pn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", zn, "↕"))
              ], 8, _n)) : (t(), a("span", An, f(te.label), 1))
            ]))), 128)),
            H.$slots.actions ? (t(), a("th", jn, [...Y[3] || (Y[3] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        o("tbody", {
          class: j(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(z, null, L(e.rows, (te, ae) => (t(), a(z, {
            key: E(te) ?? `row-${ae}`
          }, [
            e.groupBy && s(ae) ? (t(), a("tr", On, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !m(r(te)),
                  dusk: `group-header-${r(te) || "none"}`,
                  onClick: (oe) => b(r(te))
                }, [
                  o("span", Dn, f(m(r(te)) ? "▸" : "▾"), 1),
                  N(" " + f(i(te)), 1)
                ], 8, Vn)) : (t(), a("span", Tn, f(i(te)), 1))
              ], 8, Ln)
            ])) : $("", !0),
            p(ae) ? (t(), a("tr", {
              key: 1,
              class: j(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                ee(te) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                h.value === ae ? "opacity-40" : "",
                y(ae),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (oe) => w(ae, oe),
              onDragover: (oe) => v(ae, oe),
              onDrop: ce((oe) => g(ae), ["prevent"]),
              onDragend: S,
              onContextmenu: (oe) => c("row-contextmenu", te, oe),
              onClick: (oe) => C(te, oe)
            }, [
              e.reordering ? (t(), a("td", In, [...Y[4] || (Y[4] = [
                vt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-0d8c8f99><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-0d8c8f99><circle cx="9" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="6" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="12" r="1.5" data-v-0d8c8f99></circle><circle cx="9" cy="18" r="1.5" data-v-0d8c8f99></circle><circle cx="15" cy="18" r="1.5" data-v-0d8c8f99></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), a("td", En, [
                o("input", {
                  id: `${x(P)}-row-${E(te) ?? ae}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: E(te) ?? void 0,
                  checked: ee(te),
                  disabled: E(te) === null,
                  "aria-label": E(te) === null ? "This row has no id and cannot be selected" : `Select row ${E(te)}`,
                  onClick: Y[2] || (Y[2] = ce(() => {
                  }, ["stop"])),
                  onChange: ce((oe) => q(te), ["stop"])
                }, null, 40, Nn)
              ])) : $("", !0),
              (t(!0), a(z, null, L(J.value, (oe) => (t(), a("td", {
                key: oe.key,
                class: j(["px-3 py-2 whitespace-nowrap", oe.cellClass])
              }, [
                K(H.$slots, `cell:${oe.key}`, {
                  row: te,
                  value: te[oe.key],
                  column: oe
                }, () => [
                  oe.copyable ? (t(), a("span", Rn, [
                    N(f(te[oe.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${oe.label.toLowerCase()}`,
                      onClick: (Le) => Q(String(te[e.rowKey]), oe, te[oe.key])
                    }, [
                      o("span", Hn, f(B.value === `${te[e.rowKey]}-${oe.key}` ? "✓" : "⧉"), 1)
                    ], 8, Un)
                  ])) : (t(), a("span", qn, f(te[oe.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              H.$slots.actions ? (t(), a("td", Kn, [
                K(H.$slots, "actions", { row: te }, void 0, !0)
              ])) : $("", !0)
            ], 42, Fn)) : $("", !0)
          ], 64))), 128))
        ], 2),
        _.value ? (t(), a("tfoot", Gn, [
          o("tr", null, [
            e.selectable ? (t(), a("td", Wn)) : $("", !0),
            (t(!0), a(z, null, L(e.columns, (te) => (t(), a(z, {
              key: `s-${te.key}`
            }, [
              e.hidden?.has(te.key) ? $("", !0) : (t(), a("td", {
                key: 0,
                class: j(["px-3 py-2 align-top text-sm whitespace-nowrap", te.cellClass])
              }, [
                W(te.key) ? (t(), a(z, { key: 0 }, [
                  o("span", Zn, f(W(te.key).label), 1),
                  o("span", Jn, f(G(te.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            H.$slots.actions ? (t(), a("td", Yn)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), a("div", Xn, [
        Y[5] || (Y[5] = o("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        K(H.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), a("div", Qn, [
        o("p", el, f(e.emptyTitle), 1),
        e.emptyHint ? (t(), a("p", tl, f(e.emptyHint), 1)) : $("", !0)
      ])) : $("", !0)
    ], 2));
  }
}), wt = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of l)
    n[r] = s;
  return n;
}, nl = /* @__PURE__ */ wt(al, [["__scopeId", "data-v-0d8c8f99"]]), ll = ["aria-label"], ol = { class: "border-b px-5 py-4" }, sl = { class: "text-base font-semibold" }, rl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, il = { class: "px-5 py-4" }, ul = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, ut = /* @__PURE__ */ A({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = Z(null);
    let i = null;
    const u = Z(!1);
    function d(p) {
      u.value = p.target === p.currentTarget;
    }
    function m(p) {
      u.value && p.target === p.currentTarget && !n.busy && r("close"), u.value = !1;
    }
    function b(p) {
      if (!n.open)
        return;
      if (p.key === "Escape" && !n.busy) {
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
      const M = h[0], w = h[h.length - 1];
      p.shiftKey && document.activeElement === M ? (p.preventDefault(), w.focus()) : !p.shiftKey && document.activeElement === w && (p.preventDefault(), M.focus());
    }
    return de(
      () => n.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", b), Se(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", b), i?.focus(), i = null);
      }
    ), ve(() => document.removeEventListener("keydown", b)), (p, h) => (t(), D(Ie, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
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
              o("div", ol, [
                o("h2", sl, f(e.title), 1),
                e.description ? (t(), a("p", rl, f(e.description), 1)) : $("", !0)
              ]),
              o("div", il, [
                K(p.$slots, "default")
              ]),
              o("div", ul, [
                K(p.$slots, "footer")
              ])
            ], 8, ll)
          ], 32)) : $("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), nt = {
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
  return e ? nt[e] ?? nt.dot : nt.dot;
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
    const n = e, r = Z(!1), s = Z(null), i = Z(null), u = Z({ top: 0, left: 0, minWidth: 0 }), d = Z(null);
    let m = null;
    function b(C) {
      !n.dismissOnPanelClick || C.target?.closest("input, select, textarea, label, [data-keep-open]") || S();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await Se(), y());
    }
    function h() {
      m = setTimeout(S, 180);
    }
    async function M() {
      d.value = null, r.value = !r.value, r.value && (await Se(), y());
    }
    async function w(C, B) {
      d.value = { x: C, y: B }, r.value = !0, await Se(), y();
    }
    function S() {
      r.value = !1, d.value = null;
    }
    function y() {
      const C = s.value, B = i.value;
      if (!C || !B)
        return;
      const P = B.getBoundingClientRect(), J = 8, E = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : C.getBoundingClientRect();
      let ee, q;
      if (n.placement === "bottom")
        ee = E.bottom + n.offset, ee + P.height > window.innerHeight - J && E.top - P.height - n.offset > J && (ee = E.top - P.height - n.offset), q = n.align === "end" && !d.value ? E.right - P.width : E.left;
      else {
        ee = E.top;
        const R = n.placement === "right", T = E.right + n.offset + P.width < window.innerWidth - J, U = E.left - n.offset - P.width > J;
        q = (R ? T || !U : !U && T) ? E.right + n.offset : E.left - n.offset - P.width;
      }
      q = Math.min(Math.max(J, q), window.innerWidth - P.width - J), ee = Math.min(Math.max(J, ee), window.innerHeight - P.height - J), u.value = { top: ee, left: q, minWidth: Math.max(E.width, dl) };
    }
    function v(C) {
      if (!r.value)
        return;
      const B = C.target;
      s.value?.contains(B) || i.value?.contains(B) || (B instanceof Element ? B : B.parentElement)?.closest("[data-pk-overlay]") || S();
    }
    function g(C) {
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
    return fe(() => {
      document.addEventListener("pointerdown", v), document.addEventListener("keydown", g), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), ve(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", v), document.removeEventListener("keydown", g), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), l({ close: S, openAt: w }), (C, B) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: B[2] || (B[2] = (P) => e.hoverable && p()),
      onPointerleave: B[3] || (B[3] = (P) => e.hoverable && h())
    }, [
      o("div", { onClick: M }, [
        K(C.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(Ie, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
            r.value ? (t(), a("div", {
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
              onPointerenter: B[0] || (B[0] = (P) => e.hoverable && p()),
              onPointerleave: B[1] || (B[1] = (P) => e.hoverable && h()),
              onClick: b
            }, [
              K(C.$slots, "panel", { close: S })
            ], 38)) : $("", !0)
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
}, bl = ["d"], xl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, yl = ["disabled", "onClick"], kl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $l = ["d"], wl = { class: "text-muted-foreground text-sm" }, Cl = { class: "text-foreground font-medium tabular-nums" }, Sl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Ml = ["disabled"], Bl = { class: "text-muted-foreground text-sm" }, _l = { class: "text-foreground font-medium tabular-nums" }, Pl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, zl = ["disabled"], K2 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(null), i = Z(!1), u = k(() => n.allMatching ? n.total : n.count), d = k(() => u.value !== void 0), m = k(() => d.value && u.value === 0), b = k(() => n.actions.filter((g) => !g.destructive)), p = k(() => n.actions.filter((g) => g.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function M(g) {
      return h[g.color ?? "gray"] ?? h.gray;
    }
    function w(g) {
      if (g.confirmation) {
        s.value = g;
        return;
      }
      r("run", g.key);
    }
    function S() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function y() {
      i.value = !1, r("export");
    }
    const v = (g) => new Intl.NumberFormat().format(g);
    return (g, c) => (t(), a(z, null, [
      F(Te, null, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...c[5] || (c[5] = [
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
          ])], 8, cl)
        ]),
        panel: O(() => [
          o("div", fl, [
            (t(!0), a(z, null, L(b.value, (C) => (t(), a("button", {
              key: C.key,
              type: "button",
              role: "menuitem",
              class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(C)]),
              disabled: e.busy,
              onClick: (B) => w(C)
            }, [
              (t(), a("svg", pl, [
                o("path", {
                  d: x(ie)(C.icon)
                }, null, 8, vl)
              ])),
              N(" " + f(C.label), 1)
            ], 10, ml))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (C) => i.value = !0)
            }, [
              (t(), a("svg", hl, [
                o("path", {
                  d: x(ie)("download")
                }, null, 8, bl)
              ])),
              c[6] || (c[6] = N(" Export CSV ", -1))
            ], 8, gl)) : $("", !0),
            p.value.length ? (t(), a("div", xl, [
              (t(!0), a(z, null, L(p.value, (C) => (t(), a("button", {
                key: C.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (B) => w(C)
              }, [
                (t(), a("svg", kl, [
                  o("path", {
                    d: x(ie)(C.icon ?? "trash")
                  }, null, 8, $l)
                ])),
                N(" " + f(C.label), 1)
              ], 8, yl))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      F(ut, {
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
            disabled: !d.value || m.value,
            onClick: S
          }, f(s.value?.label), 11, Ml)
        ]),
        default: O(() => [
          o("p", wl, [
            c[7] || (c[7] = N(" This will affect ", -1)),
            o("span", Cl, [
              d.value ? (t(), a(z, { key: 1 }, [
                N(f(v(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            c[8] || (c[8] = N(" . ", -1))
          ]),
          m.value ? (t(), a("p", Sl, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      F(ut, {
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
            disabled: !d.value || m.value,
            onClick: y
          }, " Export CSV ", 8, zl)
        ]),
        default: O(() => [
          o("p", Bl, [
            c[9] || (c[9] = N(" This will export ", -1)),
            o("span", _l, [
              d.value ? (t(), a(z, { key: 1 }, [
                N(f(v(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            c[10] || (c[10] = N(" . ", -1))
          ]),
          m.value ? (t(), a("p", Pl, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Al = { class: "bg-card overflow-hidden rounded-lg border" }, jl = { class: "pk-scroll w-full overflow-x-auto" }, Ol = { class: "w-full border-collapse text-sm" }, Ll = { class: "bg-muted/40" }, Vl = { class: "divide-y" }, Dl = { key: 0 }, Tl = ["colspan"], Fl = { key: 1 }, Il = ["colspan"], El = ["href"], Nl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Rl = ["disabled"], Ul = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, Hl = ["href"], G2 = /* @__PURE__ */ A({
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
    return (u, d) => (t(), a("div", Al, [
      o("div", jl, [
        o("table", Ol, [
          o("thead", Ll, [
            o("tr", null, [
              (t(!0), a(z, null, L(s.value, (m) => (t(), a("th", {
                key: m.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, f(m.label), 1))), 128))
            ])
          ]),
          o("tbody", Vl, [
            e.loading && e.rows.length === 0 ? (t(), a("tr", Dl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, Tl)
            ])) : e.loaded && e.rows.length === 0 ? (t(), a("tr", Fl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, f(e.emptyText), 9, Il)
            ])) : $("", !0),
            (t(!0), a(z, null, L(e.rows, (m, b) => (t(), a("tr", {
              key: m.id ?? b,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), a(z, null, L(s.value, (p) => (t(), a("td", {
                key: p.key,
                class: j(["px-3 py-2 whitespace-nowrap", [
                  p.mono ? "font-mono text-xs" : "",
                  p.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                K(u.$slots, `cell:${p.key}`, {
                  row: m,
                  value: m[p.key],
                  column: p
                }, () => [
                  e.recordBase && m.id != null && p === s.value[0] ? (t(), a("a", {
                    key: 0,
                    href: `${e.recordBase}/${m.id}`,
                    class: "text-foreground underline-offset-2 hover:underline"
                  }, f(i(p, m[p.key])), 9, El)) : (t(), a(z, { key: 1 }, [
                    N(f(i(p, m[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), a("div", Nl, [
        o("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (m) => r("load", e.nextCursor))
        }, f(e.loading ? "Loading…" : "Load more"), 9, Rl)
      ])) : e.capped ? (t(), a("p", Ul, [
        N(" Showing the first " + f(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), a("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, Hl)) : (t(), a(z, { key: 1 }, [
          N("Open the full list to search or filter the rest.")
        ], 64))
      ])) : $("", !0)
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
    return (b, p) => (t(), a("span", {
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
        o("path", { d: u.value }, null, 8, Gl)
      ], 10, Kl)),
      o("span", Wl, f(m.value), 1)
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
    const l = e, n = Z(!1);
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
      }, null, 40, Jl)) : e.fallback === "initials" ? (t(), a(z, { key: 1 }, [
        N(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", Yl, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
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
    const l = e, n = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = k(() => {
      const s = (l.value ?? "").trim();
      return n.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", Ql, "-")) : (t(), a("span", eo, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", to, f(r.value), 1)) : (t(), a("span", ao, f(r.value), 1))
    ]));
  }
}), lo = { class: "inline-flex items-center" }, oo = ["checked", "aria-label"], so = { class: "sr-only" }, W2 = /* @__PURE__ */ A({
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
    return (s, i) => (t(), a("span", lo, [
      o("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, oo),
      o("span", so, f(r.value), 1)
    ]));
  }
}), ro = {
  key: 0,
  class: "text-muted-foreground"
}, io = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, Z2 = /* @__PURE__ */ A({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = k(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", io, f(n.value), 1)) : (t(), a("span", ro, "—"));
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
function Je(e = {}) {
  const l = e.variant ?? "default", n = e.size ?? "default";
  return [uo, co[l], fo[n], e.class].filter(Boolean).join(" ");
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
      () => Je({ variant: l.variant, size: l.size, class: l.class })
    ), r = k(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), D(be(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: j(n.value)
    }, {
      default: O(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), mo = { class: "flex items-center gap-2" }, po = ["onUpdate:modelValue", "onChange"], vo = ["value"], go = ["onUpdate:modelValue"], ho = ["value"], bo = ["onUpdate:modelValue"], xo = ["onUpdate:modelValue", "multiple"], yo = ["value"], ko = ["onUpdate:modelValue", "type"], $o = ["aria-label", "onClick"], wo = { class: "flex items-center gap-2" }, Co = /* @__PURE__ */ A({
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
    const n = e, r = l, s = () => ({ logic: "and", rules: [] }), i = Z(n.modelValue ? structuredClone(n.modelValue) : s());
    de(
      () => n.modelValue,
      (c) => {
        i.value = c ? structuredClone(c) : s();
      }
    );
    const u = (c) => "rules" in c, d = k(() => Object.keys(n.fields));
    function m(c) {
      const C = c ? n.fields[c]?.kind : void 0;
      return C ? n.operators[C] ?? [] : [];
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
    function h() {
      const c = d.value[0];
      i.value.rules.push({
        field: c,
        operator: m(c)[0],
        value: void 0
      }), p();
    }
    function M() {
      i.value.rules.push(s()), p();
    }
    function w(c) {
      i.value.rules.splice(c, 1), p();
    }
    function S(c) {
      c.operator = m(c.field)[0], c.value = void 0, p();
    }
    const y = k(() => n.depth + 1 < n.maxDepth);
    function v() {
      i.value = s(), p(), r("apply", null);
    }
    function g() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, C) => {
      const B = gt("PkQueryBuilder", !0);
      return t(), a("div", {
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
        (t(!0), a(z, null, L(i.value.rules, (P, J) => (t(), a("div", {
          key: J,
          class: "flex items-start gap-2"
        }, [
          u(P) ? (t(), D(B, {
            key: 0,
            modelValue: i.value.rules[J],
            "onUpdate:modelValue": [(E) => i.value.rules[J] = E, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(z, { key: 1 }, [
            ue(o("select", {
              "onUpdate:modelValue": (E) => P.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => S(P)
            }, [
              (t(!0), a(z, null, L(d.value, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, vo))), 128))
            ], 40, po), [
              [Ve, P.field]
            ]),
            ue(o("select", {
              "onUpdate:modelValue": (E) => P.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(z, null, L(m(P.field), (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(b[E] ?? E), 9, ho))), 128))
            ], 40, go), [
              [Ve, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? ue((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (E) => P.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...C[3] || (C[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, bo)), [
              [Ve, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? ue((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (E) => P.value = E,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(z, null, L(e.fields[P.field].options, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(E), 9, yo))), 128))
            ], 40, xo)), [
              [Ve, P.value]
            ]) : ue((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (E) => P.value = E,
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
            onClick: (E) => w(J)
          }, " × ", 8, $o)
        ]))), 128)),
        o("div", wo, [
          F(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: O(() => [...C[4] || (C[4] = [
              N("Add rule", -1)
            ])]),
            _: 1
          }),
          y.value ? (t(), D(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: O(() => [...C[5] || (C[5] = [
              N(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), a(z, { key: 1 }, [
            C[8] || (C[8] = o("span", { class: "flex-1" }, null, -1)),
            F(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: O(() => [...C[6] || (C[6] = [
                N(" Clear ", -1)
              ])]),
              _: 1
            }),
            F(se, {
              type: "button",
              size: "sm",
              onClick: g
            }, {
              default: O(() => [...C[7] || (C[7] = [
                N(" Apply ", -1)
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
}, Bo = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, J2 = /* @__PURE__ */ A({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = k(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", So, f(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", Mo, "—")) : (t(), a("span", Bo, f(n.value.length) + " " + f(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), _o = ["aria-checked", "aria-label", "title", "disabled"], Po = ["value", "disabled"], zo = ["value"], Y2 = /* @__PURE__ */ A({
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
    function m(b) {
      const p = b.target.value;
      p !== String(n.value ?? "") && r("change", p);
    }
    return (b, p) => e.type === "toggle" ? (t(), a("button", {
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
    ], 10, _o)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = ce(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), a(z, null, L(e.options, (h, M) => (t(), a("option", {
        key: M,
        value: M
      }, f(h), 9, zo))), 128))
    ], 40, Po));
  }
}), Ao = ["data-variant"], jo = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ue = /* @__PURE__ */ A({
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
      () => [jo, n[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: j(r.value)
    }, [
      K(s.$slots, "default")
    ], 10, Ao));
  }
}), Ct = {
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
function X2(e) {
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
  ), n = k(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = n.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), m = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return Ct[m] ?? "outline";
  }
  return { columns: l, byKey: n, badgeVariant: r };
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
}, To = ["d"], Fo = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Io = ["disabled", "onClick"], Eo = {
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
}, Q2 = /* @__PURE__ */ A({
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
    function d(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function m(h) {
      const M = n.colors[d(h)] ?? n.defaultColor ?? "neutral";
      return Ct[M] ?? "outline";
    }
    function b(h) {
      return n.options[h] ?? h;
    }
    function p(h, M) {
      if (s.value || h === i.value) {
        M();
        return;
      }
      r("change", h), M();
    }
    return (h, M) => (t(), a("div", {
      onClick: M[0] || (M[0] = ce(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(Ue, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: O(() => [
          N(f(b(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), D(Te, {
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
            F(Ue, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: O(() => [
                N(f(b(i.value) || "-"), 1)
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
        panel: O(({ close: w }) => [
          o("div", Fo, f(u.value), 1),
          (t(!0), a(z, null, L(e.options, (S, y) => (t(), a("button", {
            key: y,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (v) => p(String(y), w)
          }, [
            F(Ue, {
              variant: m(y),
              class: "capitalize"
            }, {
              default: O(() => [
                N(f(S), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(y) === i.value ? (t(), a("svg", Eo, [
              o("path", {
                d: x(ie)("check")
              }, null, 8, No)
            ])) : (t(), a("span", Ro))
          ], 8, Io))), 128))
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
}, ts = ["d"], e$ = /* @__PURE__ */ A({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = Z(null), u = Z(null), d = k(() => r.groups.flatMap((v) => v.actions)), m = k(() => d.value.filter((v) => !v.destructive)), b = k(() => d.value.filter((v) => v.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(v) {
      return p[v.color ?? "gray"] ?? p.gray;
    }
    const M = k(() => d.value.length === 0);
    function w(v) {
      s("run", v);
    }
    function S(v) {
      M.value || (v.preventDefault(), i.value?.openAt(v.clientX, v.clientY));
    }
    function y(v) {
      if (v.key !== "ArrowDown" && v.key !== "ArrowUp")
        return;
      const g = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (g.length === 0)
        return;
      v.preventDefault();
      const c = g.indexOf(document.activeElement), C = v.key === "ArrowDown" ? 1 : -1, B = (c + C + g.length) % g.length;
      g[B]?.focus();
    }
    return l({ openContextMenu: S }), (v, g) => (t(), a("div", Uo, [
      M.value ? $("", !0) : (t(), D(Te, {
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
            (t(), a("svg", qo, [
              o("path", {
                d: x(ie)("more-vertical")
              }, null, 8, Ko)
            ]))
          ], 8, Ho)
        ]),
        panel: O(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: y
          }, [
            (t(!0), a(z, null, L(m.value, (c) => (t(), a(z, {
              key: c.key
            }, [
              c.link ? (t(), a("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(c)])
              }, [
                (t(), a("svg", Wo, [
                  o("path", {
                    d: x(ie)(c.icon)
                  }, null, 8, Zo)
                ])),
                N(" " + f(c.label), 1)
              ], 10, Go)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(c)]),
                disabled: e.busy === c.key,
                onClick: (C) => w(c)
              }, [
                (t(), a("svg", {
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
                    d: x(ie)(c.icon)
                  }, null, 8, Yo)
                ], 2)),
                N(" " + f(c.label), 1)
              ], 10, Jo))
            ], 64))), 128)),
            b.value.length ? (t(), a("div", Xo, [
              (t(!0), a(z, null, L(b.value, (c) => (t(), a("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (C) => w(c)
              }, [
                (t(), a("svg", es, [
                  o("path", {
                    d: x(ie)(c.icon ?? "trash")
                  }, null, 8, ts)
                ])),
                N(" " + f(c.label), 1)
              ], 8, Qo))), 128))
            ])) : $("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), dt = {
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
}, ct = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, Ye = 12, Xe = 20, as = [0, 0.25, 0.5, 0.75, 1], St = "alxtexhpanel.appearance", Ce = {
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
}, ze = Z({ ...Ce });
let Ot = !1;
const ns = "alxtexhpanel.appearance.vars";
function ft(e) {
  return e.theme === "dark";
}
const Lt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function ls(e) {
  const l = dt[e.primary] ?? dt.slate, n = ct[e.surface] ?? ct.neutral, r = n.chroma, s = n.hue, u = ft(e) ? {
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
    "--pk-row-padding": Lt[e.density] ?? Lt.comfortable
  };
}
function Mt() {
  if (typeof window > "u")
    return { ...Ce };
  try {
    const e = localStorage.getItem(St);
    if (!e)
      return { ...Ce };
    const l = { ...Ce, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Ce.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = n[l.fontSize] ?? Ce.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < Ye || l.fontSize > Xe) && (l.fontSize = Ce.fontSize), l;
  } catch {
    return { ...Ce };
  }
}
function t$(e) {
  const l = Mt(), n = e ? { ...l, ...e } : l;
  if (ze.value = n, mt(n), e)
    try {
      localStorage.setItem(St, JSON.stringify(n));
    } catch {
    }
}
let ea = null;
function a$(e) {
  ea = e;
}
let ta = {};
function os(e) {
  if (ta = e, !(typeof document > "u") && !Mt().primaryChosen)
    for (const [l, n] of Object.entries(e))
      document.documentElement.style.setProperty(l, n);
}
function mt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, n = { ...ls(e), ...e.primaryChosen ? {} : ta };
  l.classList.toggle("dark", ft(e));
  for (const [r, s] of Object.entries(n))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      ns,
      JSON.stringify({ dark: ft(e), theme: e.theme, vars: n })
    );
  } catch {
  }
}
function aa() {
  function e(r) {
    mt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    ze.value = { ...ze.value, ...r, ...s };
    try {
      localStorage.setItem(St, JSON.stringify(ze.value));
    } catch {
    }
    e(ze.value), ea?.({ ...r, ...s });
  }
  function n() {
    l({ ...Ce });
  }
  return fe(() => {
    Ot || (Ot = !0, ze.value = Mt(), mt(ze.value));
  }), {
    appearance: k(() => ze.value),
    set: l,
    reset: n,
    PRIMARY_COLORS: dt,
    SURFACE_TINTS: ct,
    FONT_SIZE_MIN: Ye,
    FONT_SIZE_MAX: Xe,
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
}, gs = { class: "flex flex-col gap-2" }, hs = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, bs = ["aria-pressed", "aria-label", "onClick"], xs = { class: "text-sm font-semibold" }, ys = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ks = ["onClick"], $s = { class: "flex flex-col gap-2" }, ws = { class: "flex items-center justify-between" }, Cs = { class: "text-muted-foreground text-xs tabular-nums" }, Ss = { class: "flex items-center gap-2" }, Ms = ["disabled"], Bs = ["min", "max", "value"], _s = ["disabled"], n$ = /* @__PURE__ */ A({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = aa(), d = Z(!1), m = k(() => l.value.sidebarSide === "right"), b = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
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
    ], S = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function y(v, g) {
      return `oklch(0.72 ${g * 3} ${v})`;
    }
    return (v, g) => (t(), a(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: g[0] || (g[0] = (c) => d.value = !0)
      }, [...g[7] || (g[7] = [
        vt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), D(Ie, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: O(() => [
            d.value ? (t(), a("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: g[1] || (g[1] = (c) => d.value = !1)
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
          default: O(() => [
            d.value ? (t(), a("aside", {
              key: 0,
              class: j(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", ss, [
                g[9] || (g[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", rs, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: g[2] || (g[2] = //@ts-ignore
                    (...c) => x(r) && x(r)(...c))
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
                    (t(!0), a(z, null, L(x(s), (c, C) => (t(), a("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": x(l).primary === C,
                      onClick: (B) => x(n)({ primary: C })
                    }, [
                      x(l).primary === C ? (t(), a("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ne({ color: c.foreground }),
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
                    (t(!0), a(z, null, L(x(i), (c, C) => (t(), a("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: y(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": x(l).surface === C,
                      onClick: (B) => x(n)({ surface: C })
                    }, [
                      x(l).surface === C ? (t(), a("svg", vs, [...g[12] || (g[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : $("", !0)
                    ], 12, ps))), 128))
                  ])
                ]),
                o("section", gs, [
                  g[14] || (g[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", hs, [
                    (t(!0), a(z, null, L(x(u), (c) => (t(), a("button", {
                      key: c,
                      type: "button",
                      class: j([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(l).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (C) => x(n)({ radius: c })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      N(" " + f(c), 1)
                    ], 10, bs))), 128))
                  ])
                ]),
                (t(!0), a(z, null, L([
                  { label: "Color scheme", key: "theme", options: b },
                  { label: "Card style", key: "cardStyle", options: h },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: S }
                ], (c) => (t(), a("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", xs, f(c.label), 1),
                  o("div", ys, [
                    (t(!0), a(z, null, L(c.options, (C) => (t(), a("button", {
                      key: String(C.value),
                      type: "button",
                      class: j([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l)[c.key] === C.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (B) => x(n)({ [c.key]: C.value })
                    }, f(C.label), 11, ks))), 128))
                  ])
                ]))), 128)),
                o("section", $s, [
                  o("div", ws, [
                    g[15] || (g[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Cs, f(x(l).fontSize) + "px", 1)
                  ]),
                  o("div", Ss, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize <= x(Ye),
                      "aria-label": "Decrease font size",
                      onClick: g[4] || (g[4] = (c) => x(n)({ fontSize: x(l).fontSize - 1 }))
                    }, " − ", 8, Ms),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(Ye),
                      max: x(Xe),
                      value: x(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: g[5] || (g[5] = (c) => x(n)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, Bs),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize >= x(Xe),
                      "aria-label": "Increase font size",
                      onClick: g[6] || (g[6] = (c) => x(n)({ fontSize: x(l).fontSize + 1 }))
                    }, " + ", 8, _s)
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
}, Ts = ["d"], Fs = { class: "w-full truncate text-center" }, lt = 5, l$ = /* @__PURE__ */ A({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = k(
      () => n.items.length <= lt ? n.items : n.items.slice(0, lt - 1)
    ), i = k(() => n.items.length > lt);
    function u(d) {
      return d === "/" ? n.current === "/" : n.current === d || n.current.startsWith(`${d}/`);
    }
    return (d, m) => (t(), a("nav", Ps, [
      o("ul", zs, [
        (t(!0), a(z, null, L(s.value, (b) => (t(), a("li", {
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
            (t(), a("svg", js, [
              o("path", {
                d: x(ie)(b.icon)
              }, null, 8, Os)
            ])),
            o("span", Ls, f(b.title), 1)
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
            o("span", Fs, f(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), Is = ["value"], Es = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", pe = /* @__PURE__ */ A({
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
      class: j([Es, n.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, Is));
  }
}), Ns = ["for"], he = /* @__PURE__ */ A({
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
      K(l.$slots, "default")
    ], 10, Ns));
  }
}), o$ = /* @__PURE__ */ A({
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
}), Rs = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Us = ["id", "name", "value", "disabled", "maxlength"], Hs = ["data-active"], qs = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, s$ = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(!1), i = Z(null);
    fe(() => {
      n.autofocus && i.value?.focus();
    });
    const u = k(
      () => Array.from({ length: n.length }, (b, p) => n.modelValue[p] ?? "")
    ), d = k(() => Math.min(n.modelValue.length, n.length - 1));
    function m(b) {
      const p = b.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (b, p) => (t(), a("div", Rs, [
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
        onFocus: p[0] || (p[0] = (h) => s.value = !0),
        onBlur: p[1] || (p[1] = (h) => s.value = !1)
      }, null, 40, Us),
      (t(!0), a(z, null, L(u.value, (h, M) => (t(), a("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": s.value && M === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(f(h) + " ", 1),
        s.value && M === d.value && h === "" ? (t(), a("div", qs, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, Hs))), 128))
    ]));
  }
}), Ks = {
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
      }, f(e.title), 3),
      e.description ? (t(), a("p", Ks, f(e.description), 1)) : $("", !0)
    ], 2));
  }
});
function X(...e) {
  return Oa(ja(e));
}
function r$(e) {
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
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: j(x(X)(x(Js)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Ws = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Zs = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Js = xt(
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
), Ys = { class: "list-inside list-disc text-sm" }, i$ = /* @__PURE__ */ A({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, n = k(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(x(Gs), { variant: "destructive" }, {
      default: O(() => [
        F(x(wa), { class: "size-4" }),
        F(x(Zs), null, {
          default: O(() => [
            N(f(e.title), 1)
          ]),
          _: 1
        }),
        F(x(Ws), null, {
          default: O(() => [
            o("ul", Ys, [
              (t(!0), a(z, null, L(n.value, (i, u) => (t(), a("li", { key: u }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), na = /* @__PURE__ */ A({
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
      "onUpdate:modelValue": u[0] || (u[0] = (d) => va(s) ? s.value = d : null),
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
}), Xs = { class: "relative" }, Qs = ["aria-label"], u$ = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const n = e, r = Z(!1), s = ga("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), a("div", Xs, [
      F(x(na), le({
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
        r.value ? (t(), D(x(Ca), {
          key: 0,
          class: "size-4"
        })) : (t(), D(x(Sa), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Qs)
    ]));
  }
});
function d$(e, l) {
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
const la = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", er = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", tr = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function ar(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function nr(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function lr(e) {
  const l = URL.createObjectURL(e);
  try {
    const n = await or(l), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
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
function or(e) {
  return new Promise((l, n) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function sr(e) {
  if (ar(e))
    throw new Error(tr);
  if (!nr(e))
    throw new Error(la);
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
    return (i, u) => (t(), D(x(Gt), le({ "data-slot": "sheet" }, x(s)), {
      default: O((d) => [
        K(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), c$ = /* @__PURE__ */ A({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ee), le({ "data-slot": "sheet-close" }, l), {
      default: O(() => [
        K(n.$slots, "default")
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
    const l = e, n = re(l, "class");
    return (r, s) => (t(), D(x(yt), le({
      "data-slot": "sheet-overlay",
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, x(n)), {
      default: O(() => [
        K(r.$slots, "default")
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
    const n = e, r = l, s = re(n, "class", "side"), i = me(s, r);
    return (u, d) => (t(), D(x(kt), null, {
      default: O(() => [
        F(ir),
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
          default: O(() => [
            K(u.$slots, "default"),
            F(x(Ee), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: O(() => [
                F(x(bt), { class: "size-4" }),
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
    const l = e, n = re(l, "class");
    return (r, s) => (t(), D(x(Wt), le({
      "data-slot": "sheet-description",
      class: x(X)("text-muted-foreground text-sm", l.class)
    }, x(n)), {
      default: O(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), cr = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
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
    const l = e, n = re(l, "class");
    return (r, s) => (t(), D(x(Zt), le({
      "data-slot": "sheet-title",
      class: x(X)("text-foreground font-semibold", l.class)
    }, x(n)), {
      default: O(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m$ = /* @__PURE__ */ A({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Jt), le({ "data-slot": "sheet-trigger" }, l), {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vt = "sidebar_state", mr = 3600 * 24 * 7, pr = "16rem", vr = "18rem", gr = "3rem", hr = "b", [tt, br] = Ta("Sidebar"), xr = { class: "flex h-full w-full flex-col" }, yr = ["data-state", "data-collapsible", "data-variant", "data-side"], kr = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, p$ = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = tt();
    return (u, d) => e.collapsible === "none" ? (t(), a("div", le({
      key: 0,
      "data-slot": "sidebar",
      class: x(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      K(u.$slots, "default")
    ], 16)) : x(n) ? (t(), D(x(rr), le({
      key: 1,
      open: x(s)
    }, u.$attrs, { "onUpdate:open": x(i) }), {
      default: O(() => [
        F(x(ur), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": x(vr)
          })
        }, {
          default: O(() => [
            F(cr, { class: "sr-only" }, {
              default: O(() => [
                F(fr, null, {
                  default: O(() => [...d[0] || (d[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                F(dr, null, {
                  default: O(() => [...d[1] || (d[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", xr, [
              K(u.$slots, "default")
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
        o("div", kr, [
          K(u.$slots, "default")
        ])
      ], 16)
    ], 8, yr));
  }
}), v$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), g$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), h$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), b$ = /* @__PURE__ */ A({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ne), {
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
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), x$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), y$ = /* @__PURE__ */ A({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ne), {
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
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), k$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), $$ = /* @__PURE__ */ A({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(na), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: j(x(X)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), w$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), C$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), S$ = /* @__PURE__ */ A({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ne), {
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
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), M$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
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
    return (i, u) => (t(), D(x(Fa), le({ "data-slot": "tooltip" }, x(s)), {
      default: O((d) => [
        K(i.$slots, "default", ye(Pe(d)))
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), D(x(Ia), null, {
      default: O(() => [
        F(x(Ea), le({ "data-slot": "tooltip-content" }, { ...x(i), ...u.$attrs }, {
          class: x(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: O(() => [
            K(u.$slots, "default"),
            F(x(Na), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), B$ = /* @__PURE__ */ A({
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
    return (n, r) => (t(), D(x(Yt), ye(Pe(l)), {
      default: O(() => [
        K(n.$slots, "default")
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
    return (n, r) => (t(), D(x(Ra), le({ "data-slot": "tooltip-trigger" }, l), {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dt = /* @__PURE__ */ A({
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
    return (n, r) => (t(), D(x(Ne), le({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(X)(x(Mr)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), _$ = /* @__PURE__ */ A({
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
    const l = e, { isMobile: n, state: r } = tt(), s = re(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), D(x($r), { key: 1 }, {
      default: O(() => [
        F(x(Cr), { "as-child": "" }, {
          default: O(() => [
            F(Dt, ye(Pe({ ...x(s), ...i.$attrs })), {
              default: O(() => [
                K(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        F(x(wr), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(n)
        }, {
          default: O(() => [
            typeof e.tooltip == "string" ? (t(), a(z, { key: 0 }, [
              N(f(e.tooltip), 1)
            ], 64)) : (t(), D(be(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D(Dt, ye(le({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: O(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Tt = "animate-pulse rounded-md bg-primary/10", z$ = /* @__PURE__ */ A({
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
        class: j(x(X)(Tt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: j(x(X)(Tt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), A$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), j$ = /* @__PURE__ */ A({
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
    return (n, r) => (t(), D(x(Ne), {
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
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), O$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), L$ = /* @__PURE__ */ A({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Da?.cookie.includes(`${Vt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = La("(max-width: 767px)"), i = Z(!1), u = Kt(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function d(h) {
      u.value = h, document.cookie = `${Vt}=${u.value}; path=/; max-age=${mr}`;
    }
    function m(h) {
      i.value = h;
    }
    function b() {
      return s.value ? m(!i.value) : d(!u.value);
    }
    Va("keydown", (h) => {
      h.key === hr && (h.metaKey || h.ctrlKey) && (h.preventDefault(), b());
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
    }), (h, M) => (t(), D(x(Yt), { "delay-duration": 0 }, {
      default: O(() => [
        o("div", le({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(pr),
            "--sidebar-width-icon": x(gr)
          },
          class: x(X)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, h.$attrs), [
          K(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), V$ = /* @__PURE__ */ A({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: n } = tt();
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
      K(r.$slots, "default")
    ], 2));
  }
}), Sr = /* @__PURE__ */ A({
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
    return (r, s) => (t(), D(x(Ua), le({ "data-slot": "separator" }, x(n), {
      class: x(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), D$ = /* @__PURE__ */ A({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Sr), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: j(x(X)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), T$ = /* @__PURE__ */ A({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, toggleSidebar: s } = tt();
    return (i, u) => (t(), D(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: j(x(X)("h-7 w-7", l.class)),
      onClick: x(s)
    }, {
      default: O(() => [
        x(n) || x(r) === "collapsed" ? (t(), D(x(Ma), { key: 0 })) : (t(), D(x(Ba), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Mr = xt(
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
), F$ = /* @__PURE__ */ A({
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
    return (i, u) => (t(), D(x(Ha), le({ "data-slot": "dropdown-menu" }, x(s)), {
      default: O((d) => [
        K(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Br = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, I$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(qa), le({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        o("span", Br, [
          F(x(Xt), null, {
            default: O(() => [
              K(u.$slots, "indicator-icon", {}, () => [
                F(x(Ht), { class: "size-4" })
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
}), E$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(Ka), null, {
      default: O(() => [
        F(x(Ga), le({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: O(() => [
            K(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), N$ = /* @__PURE__ */ A({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Wa), le({ "data-slot": "dropdown-menu-group" }, l), {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R$ = /* @__PURE__ */ A({
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
    return (s, i) => (t(), D(x(Za), le({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: O(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), U$ = /* @__PURE__ */ A({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, n = re(l, "class", "inset"), r = ke(n);
    return (s, i) => (t(), D(x(Ja), le({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: O(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), H$ = /* @__PURE__ */ A({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), D(x(Ya), le({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: O(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _r = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, q$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(Xa), le({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        o("span", _r, [
          F(x(Xt), null, {
            default: O(() => [
              K(u.$slots, "indicator-icon", {}, () => [
                F(x(_a), { class: "size-2 fill-current" })
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
}), K$ = /* @__PURE__ */ A({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), D(x(Qa), le({ "data-slot": "dropdown-menu-separator" }, x(n), {
      class: x(X)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), G$ = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), W$ = /* @__PURE__ */ A({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = me(e, l);
    return (i, u) => (t(), D(x(en), le({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: O((d) => [
        K(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), Z$ = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(tn), le({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(X)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: O(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J$ = /* @__PURE__ */ A({
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
    return (s, i) => (t(), D(x(an), le({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: O(() => [
        K(s.$slots, "default"),
        F(x(qt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Y$ = /* @__PURE__ */ A({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = ke(e);
    return (r, s) => (t(), D(x(nn), le({ "data-slot": "dropdown-menu-trigger" }, x(n)), {
      default: O(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X$ = /* @__PURE__ */ A({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(ln), {
      "data-slot": "avatar",
      class: j(x(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Q$ = /* @__PURE__ */ A({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), D(x(on), le({ "data-slot": "avatar-fallback" }, x(n), {
      class: x(X)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: O(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ew = /* @__PURE__ */ A({
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
    return (n, r) => (t(), D(x(sn), le({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), aw = /* @__PURE__ */ A({
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
      K(n.$slots, "default", {}, () => [
        F(x(Pa), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), nw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), lw = /* @__PURE__ */ A({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ne), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: j(x(X)("hover:text-foreground transition-colors", l.class))
    }, {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), ow = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), sw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), rw = /* @__PURE__ */ A({
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
      K(n.$slots, "default", {}, () => [
        F(x(qt))
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
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), a("div", Pr, [
      F(x(rn), le({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), iw = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(un), le({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: O((m) => [
        K(u.$slots, "default", ye(Pe(m))),
        e.viewport ? (t(), D(zr, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), uw = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(dn), le({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(X)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: O(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dw = /* @__PURE__ */ A({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), D(x(cn), le({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(X)(
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
}), cw = /* @__PURE__ */ A({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), D(x(fn), le({ "data-slot": "navigation-menu-item" }, x(n), {
      class: x(X)("relative", l.class)
    }), {
      default: O(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fw = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(mn), le({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(X)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mw = /* @__PURE__ */ A({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), D(x(pn), le({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(X)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: O(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pw = /* @__PURE__ */ A({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), D(x(vn), le({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(X)(x(Ar)(), "group", l.class)
    }), {
      default: O(() => [
        K(s.$slots, "default"),
        F(x(za), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ar = xt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), vw = /* @__PURE__ */ A({
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
    return (i, u) => (t(), D(x(Gt), le({ "data-slot": "dialog" }, x(s)), {
      default: O((d) => [
        K(i.$slots, "default", ye(Pe(d)))
      ]),
      _: 3
    }, 16));
  }
}), gw = /* @__PURE__ */ A({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ee), le({ "data-slot": "dialog-close" }, l), {
      default: O(() => [
        K(n.$slots, "default")
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
    const l = e, n = re(l, "class");
    return (r, s) => (t(), D(x(yt), le({ "data-slot": "dialog-overlay" }, x(n), {
      class: x(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: O(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hw = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(kt), null, {
      default: O(() => [
        F(jr),
        F(x($t), le({ "data-slot": "dialog-content" }, { ...u.$attrs, ...x(i) }, {
          class: x(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: O(() => [
            K(u.$slots, "default"),
            e.showCloseButton ? (t(), D(x(Ee), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: O(() => [
                F(x(bt)),
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
}), bw = /* @__PURE__ */ A({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), D(x(Wt), le({ "data-slot": "dialog-description" }, x(r), {
      class: x(X)("text-muted-foreground text-sm", l.class)
    }), {
      default: O(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xw = /* @__PURE__ */ A({
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
      K(n.$slots, "default"),
      e.showCloseButton ? (t(), D(x(Ee), {
        key: 0,
        "as-child": ""
      }, {
        default: O(() => [
          F(se, { variant: "outline" }, {
            default: O(() => [...r[0] || (r[0] = [
              N(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : $("", !0)
    ], 2));
  }
}), yw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), kw = /* @__PURE__ */ A({
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
    return (u, d) => (t(), D(x(kt), null, {
      default: O(() => [
        F(x(yt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: O(() => [
            F(x($t), le({
              class: x(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...u.$attrs, ...x(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (m) => {
                const b = m.detail.originalEvent, p = b.target;
                (b.offsetX > p.clientWidth || b.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: O(() => [
                K(u.$slots, "default"),
                F(x(Ee), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: O(() => [
                    F(x(bt), { class: "w-4 h-4" }),
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
}), $w = /* @__PURE__ */ A({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class"), r = ke(n);
    return (s, i) => (t(), D(x(Zt), le({ "data-slot": "dialog-title" }, x(r), {
      class: x(X)("text-lg leading-none font-semibold", l.class)
    }), {
      default: O(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ww = /* @__PURE__ */ A({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Jt), le({ "data-slot": "dialog-trigger" }, l), {
      default: O(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cw = /* @__PURE__ */ A({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = re(l, "class");
    return (r, s) => (t(), D(x(gn), le({ "data-slot": "label" }, x(n), {
      class: x(X)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: O(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sw = /* @__PURE__ */ A({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Aa), {
      role: "status",
      "aria-label": "Loading",
      class: j(x(X)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), Mw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Bw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), _w = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Pw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), zw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Aw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
    ], 2));
  }
}), jw = /* @__PURE__ */ A({
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
      K(n.$slots, "default")
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
    const n = e, r = l, s = re(n, "class"), i = me(s, r);
    return (u, d) => (t(), D(x(hn), le({ "data-slot": "checkbox" }, x(i), {
      class: x(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: O((m) => [
        F(x(bn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: O(() => [
            K(u.$slots, "default", ye(Pe(m)), () => [
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
    return (i, u) => (t(), D(x(xn), le({ "data-slot": "switch" }, x(s), {
      class: x(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: O(() => [
        F(x(yn), {
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
}, Ow = /* @__PURE__ */ A({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = Z(!1), u = Z(null), d = Z(0);
    ha((b) => (console.error(`[PkBoundary] ${r.label} failed to render`, b), i.value = !0, u.value = b instanceof Error ? b.message : null, s("error", b), !1));
    function m() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: m }), (b, p) => (t(), a("div", {
      class: j(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
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
            o("p", Tr, f(e.label) + " could not be displayed ", 1),
            u.value ? (t(), a("p", Fr, f(u.value), 1)) : $("", !0),
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
              N(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? $("", !0) : K(b.$slots, "default", { key: d.value })
    ], 2));
  }
}), Ir = { class: "bg-card rounded-lg border" }, Er = {
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
}, Lw = /* @__PURE__ */ A({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, n) => (t(), a("section", Ir, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), a("header", Er, [
        o("div", Nr, [
          K(l.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", Rr, f(e.title), 1)) : $("", !0),
            e.description ? (t(), a("p", Ur, f(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), a("div", Hr, [
          K(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: j(e.padded ? "p-4" : "")
      }, [
        K(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", qr, [
        K(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), oa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function Vw() {
  const e = Qt(), l = k(() => e.props.panel?.pageFooter === !0);
  return Rt(oa, l), l;
}
const Kr = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Gr = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Wr = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, Dw = /* @__PURE__ */ A({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, n = Qt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = k(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), u = ht(oa, k(() => !1)), d = k(() => !l.host && x(u) === !0);
    return (m, b) => d.value ? $("", !0) : (t(), a("footer", Kr, [
      o("div", Gr, [
        o("p", null, "© " + f(x(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", Wr, [
          (t(!0), a(z, null, L(i.value, (p) => (t(), D(x(kn), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: O(() => [
              N(f(p.label), 1)
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
}, Tw = /* @__PURE__ */ A({
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
    return (i, u) => (t(), a("div", Zr, [
      o("div", {
        class: j(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Jr)) : $("", !0),
        o("div", {
          class: j(["size-full overflow-hidden bg-white", s.value])
        }, [
          K(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(z, { key: 0 }, [
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
    return (m, b) => (t(), a("ol", Yr, [
      (t(!0), a(z, null, L(e.steps, (p, h) => (t(), a("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(be(e.interactive ? "button" : "div"), le({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (M) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: O(() => [
            o("span", {
              class: j(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              d(h) ? (t(), a("svg", Xr, [...b[0] || (b[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(h) ? (t(), a("svg", Qr, [...b[1] || (b[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(z, { key: 2 }, [
                N(f(h + 1), 1)
              ], 64))
            ], 2),
            o("span", ei, [
              o("span", null, f(p.label), 1),
              p.description ? (t(), a("span", ti, f(p.description), 1)) : $("", !0)
            ]),
            e.hasError(h) ? (t(), a("span", ai)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), a("span", ni)) : $("", !0)
      ]))), 128))
    ]));
  }
}), Ge = /* @__PURE__ */ new Map();
function we(e, l) {
  Ge.set(e, l);
}
function oi(e) {
  return Ge.get(e);
}
function Fw(e) {
  return Ge.has(e);
}
function Iw() {
  return [...Ge.keys()].sort();
}
function Ew() {
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
}, Bt = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(null), i = Z(null), u = Z(null), d = Z(!1), m = Z(""), b = Z(0), p = Z({ top: 0, left: 0, width: 0 }), h = k(
      () => n.modelValue.map(
        (q) => n.options.find((R) => R.value === q) ?? {
          value: q,
          label: String(q)
        }
      ).filter(Boolean)
    ), M = k(() => n.searchable ?? n.options.length > 6), w = k(() => {
      const q = new Set(n.modelValue), R = m.value.trim().toLowerCase();
      return n.options.filter((T) => !q.has(T.value)).filter((T) => R ? T.label.toLowerCase().includes(R) : !0);
    }), S = k(() => n.max !== null && n.modelValue.length >= n.max);
    function y() {
      const q = s.value, R = i.value;
      if (!q || !R)
        return;
      const T = q.getBoundingClientRect(), U = R.getBoundingClientRect(), I = 8;
      let V = T.bottom + 4;
      V + U.height > window.innerHeight - I && T.top - U.height - 4 > I && (V = T.top - U.height - 4), p.value = {
        top: V,
        left: Math.min(Math.max(I, T.left), window.innerWidth - T.width - I),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: T.width
      };
    }
    async function v() {
      n.disabled || d.value || (d.value = !0, m.value = "", b.value = 0, await Se(), y(), u.value?.focus());
    }
    function g() {
      d.value = !1, m.value = "";
    }
    function c() {
      d.value ? g() : v();
    }
    function C(q) {
      S.value || (r("update:modelValue", [...n.modelValue, q.value]), m.value = "", b.value = 0, Se(() => {
        y(), u.value?.focus();
      }));
    }
    function B(q) {
      r(
        "update:modelValue",
        n.modelValue.filter((R) => R !== q)
      ), Se(y);
    }
    function P() {
      r("update:modelValue", []), Se(y);
    }
    function J(q) {
      if (!n.disabled) {
        if (q.key === "Escape" && d.value) {
          q.stopPropagation(), g();
          return;
        }
        if (q.key === "Backspace" && m.value === "" && n.modelValue.length > 0) {
          B(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!d.value && (q.key === "ArrowDown" || q.key === "Enter")) {
          q.preventDefault(), v();
          return;
        }
        if (d.value) {
          if (q.key === "ArrowDown")
            q.preventDefault(), b.value = Math.min(b.value + 1, w.value.length - 1);
          else if (q.key === "ArrowUp")
            q.preventDefault(), b.value = Math.max(b.value - 1, 0);
          else if (q.key === "Enter") {
            q.preventDefault();
            const R = w.value[b.value];
            R && C(R);
          }
        }
      }
    }
    function E(q) {
      if (!d.value)
        return;
      const R = q.target;
      s.value?.contains(R) || i.value?.contains(R) || g();
    }
    function ee() {
      d.value && y();
    }
    return de(w, (q) => {
      b.value > q.length - 1 && (b.value = Math.max(0, q.length - 1));
    }), fe(() => {
      document.addEventListener("pointerdown", E), window.addEventListener("scroll", ee, !0), window.addEventListener("resize", ee);
    }), ve(() => {
      document.removeEventListener("pointerdown", E), window.removeEventListener("scroll", ee, !0), window.removeEventListener("resize", ee);
    }), (q, R) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: J
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
        (t(!0), a(z, null, L(h.value, (T) => (t(), a("span", {
          key: T.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          N(f(T.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${T.label}`,
            onClick: ce((U) => B(T.value), ["stop"])
          }, [...R[1] || (R[1] = [
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
        h.value.length === 0 ? (t(), a("span", ii, f(e.placeholder), 1)) : $("", !0),
        o("span", ui, [
          h.value.length > 1 ? (t(), a("button", {
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
          }, [...R[2] || (R[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, si),
      (t(), D(Ie, { to: "body" }, [
        F(Ae, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
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
              M.value ? (t(), a("div", di, [
                ue(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": R[0] || (R[0] = (T) => m.value = T),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: J
                }, null, 40, ci), [
                  [xe, m.value]
                ])
              ])) : $("", !0),
              o("div", fi, [
                (t(!0), a(z, null, L(w.value, (T, U) => (t(), a("button", {
                  key: T.value,
                  type: "button",
                  class: j(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", U === b.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": U === b.value,
                  onMouseenter: (I) => b.value = U,
                  onClick: (I) => C(T)
                }, f(T.label), 43, mi))), 128)),
                w.value.length === 0 ? (t(), a("p", pi, [
                  S.value ? (t(), a(z, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), a(z, { key: 1 }, [
                    N("Nothing matches “" + f(m.value) + "”.", 1)
                  ], 64)) : (t(), a(z, { key: 2 }, [
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
}), vi = ["accept", "disabled"], gi = { class: "text-sm font-medium" }, hi = { key: 0 }, bi = { key: 1 }, xi = { class: "text-muted-foreground text-xs" }, yi = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ki = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, $i = ["src"], wi = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Ci = { class: "min-w-0 flex-1" }, Si = { class: "block truncate text-sm font-medium" }, Mi = { class: "text-muted-foreground text-xs" }, Bi = ["href"], _i = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, sa = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(null), i = Z(!1), u = Z(null), d = Z(null), m = Z(null), b = k(() => n.accept.map((C) => `.${C}`).join(",")), p = k(() => m.value ?? n.modelValue?.url ?? null), h = k(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(n.maxKilobytes * 1024)}`);
    function M(C) {
      if (!C)
        return "";
      const B = ["B", "KB", "MB", "GB"];
      let P = C, J = 0;
      for (; P >= 1024 && J < B.length - 1; )
        P /= 1024, J++;
      return `${P.toFixed(P < 10 && J > 0 ? 1 : 0)} ${B[J]}`;
    }
    function w(C) {
      return C.split(".").pop()?.toLowerCase() ?? "";
    }
    function S(C) {
      return n.accept.length && !n.accept.includes(w(C.name)) ? `${w(C.name).toUpperCase() || "That"} files are not accepted here.` : C.size > n.maxKilobytes * 1024 ? `That file is ${M(C.size)}; the limit is ${M(n.maxKilobytes * 1024)}.` : null;
    }
    async function y(C) {
      const B = C?.[0];
      if (!(!B || n.disabled) && (d.value = S(B), !d.value)) {
        v(), n.image && B.type.startsWith("image/") && (m.value = URL.createObjectURL(B)), u.value = 0;
        try {
          const P = await n.upload(B, (J) => {
            u.value = J;
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
      const C = n.modelValue;
      v(), d.value = null, r("update:modelValue", null), C && !C.url && n.discard && await n.discard(C.value).catch(() => {
      });
    }
    function c(C) {
      i.value = !1, y(C.dataTransfer?.files ?? null);
    }
    return (C, B) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", ki, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, $i)) : (t(), a("span", wi, f(w(e.modelValue.name) || "file"), 1)),
        o("span", Ci, [
          o("span", Si, f(e.modelValue.name), 1),
          o("span", Mi, [
            N(f(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(z, { key: 0 }, [
              B[4] || (B[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Bi)
            ], 64)) : (t(), a(z, { key: 1 }, [
              N(" · not saved yet")
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
        onDrop: ce(c, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: b.value,
          disabled: e.disabled,
          onChange: B[0] || (B[0] = (P) => y(P.target.files))
        }, null, 40, vi),
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
        o("span", gi, [
          u.value === null ? (t(), a("span", hi, "Drop a file or click to choose")) : (t(), a("span", bi, "Uploading…"))
        ]),
        o("span", xi, f(h.value), 1),
        u.value !== null ? (t(), a("span", yi, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${u.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      d.value ? (t(), a("p", _i, f(d.value), 1)) : $("", !0)
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
}, Ii = { class: "flex items-center gap-3" }, Ei = ["disabled"], Ni = {
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
    const n = e, r = l, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const u = Z(d(n.modelValue));
    function d(y) {
      return y ? Object.entries(y).map(([v, g]) => ({
        uid: i++,
        key: v,
        value: g ?? ""
      })) : [];
    }
    de(
      () => n.modelValue,
      (y) => {
        JSON.stringify(y ?? null) !== JSON.stringify(m()) && (u.value = d(y));
      }
    );
    function m() {
      const y = {};
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && (y[g] = v.value);
      }
      return Object.keys(y).length ? y : null;
    }
    function b() {
      r("update:modelValue", m());
    }
    const p = k(() => {
      const y = /* @__PURE__ */ new Map();
      for (const v of u.value) {
        const g = v.key.trim();
        g !== "" && y.set(g, (y.get(g) ?? 0) + 1);
      }
      return new Set([...y.entries()].filter(([, v]) => v > 1).map(([v]) => v));
    }), h = k(
      () => new Set(
        u.value.map((y) => y.key.trim()).filter((y) => y !== "" && !s.test(y))
      )
    ), M = k(() => n.maxPairs !== null && u.value.length >= n.maxPairs);
    function w() {
      M.value || n.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function S(y) {
      u.value = u.value.filter((v) => v.uid !== y), b();
    }
    return (y, v) => (t(), a("div", Pi, [
      u.value.length ? (t(), a("div", zi, [
        o("div", Ai, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          v[0] || (v[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(z, null, L(u.value, (g) => (t(), a("div", {
          key: g.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", ji, [
            ue(o("input", {
              "onUpdate:modelValue": (c) => g.key = c,
              type: "text",
              class: j([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(g.key.trim()) || h.value.has(g.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: b
            }, null, 42, Oi), [
              [xe, g.key]
            ]),
            h.value.has(g.key.trim()) ? (t(), a("p", Li, " Letters, numbers, underscores and dashes only. ")) : p.value.has(g.key.trim()) ? (t(), a("p", Vi, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          ue(o("input", {
            "onUpdate:modelValue": (c) => g.value = c,
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
            onClick: (c) => S(g.uid)
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
      ])) : (t(), a("p", Fi, " Nothing here yet. ")),
      o("div", Ii, [
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
          N(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, Ei),
        e.maxPairs !== null ? (t(), a("p", Ni, f(u.value.length) + " of " + f(e.maxPairs), 1)) : $("", !0)
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
    const n = e, r = l, s = Z(null);
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
    ], d = k(() => u.filter((S) => n.toolbar.includes(S.id))), m = k(() => n.toolbar.includes("link")), b = Z(0);
    function p() {
      const S = s.value?.innerHTML ?? "", y = (s.value?.innerText ?? "").trim();
      b.value = y.length;
      const v = y === "" ? null : S;
      i = v, r("update:modelValue", v);
    }
    function h(S) {
      n.disabled || (s.value?.focus(), document.execCommand(S.command, !1, S.argument), p());
    }
    function M() {
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
    return fe(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", b.value = s.value.innerText.trim().length);
    }), de(
      () => n.modelValue,
      (S) => {
        S !== i && s.value && (s.value.innerHTML = S ?? "", b.value = s.value.innerText.trim().length);
      }
    ), (S, y) => (t(), a("div", Ui, [
      o("div", Hi, [
        (t(!0), a(z, null, L(d.value, (v) => (t(), a("button", {
          key: v.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: v.label,
          "aria-label": v.label,
          onMousedown: y[0] || (y[0] = ce(() => {
          }, ["prevent"])),
          onClick: (g) => h(v)
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
          onMousedown: y[1] || (y[1] = ce(() => {
          }, ["prevent"])),
          onClick: M
        }, [...y[2] || (y[2] = [
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
        class: j(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: w
      }, null, 42, Zi),
      e.maxLength !== null ? (t(), a("div", Ji, f(b.value) + " / " + f(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), Xi = /* @__PURE__ */ wt(Yi, [["__scopeId", "data-v-32c63bc7"]]), Qi = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, eu = { class: "flex items-center justify-between gap-2" }, tu = ["for"], au = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, nu = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs"
}, lu = ["aria-label", "disabled"], ou = {
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
}, Su = { class: "text-muted-foreground" }, Mu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Bu = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, _u = ["aria-label", "disabled"], Pu = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], zu = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Au = ["aria-label", "disabled"], ju = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ou = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Lu = ["aria-label", "disabled"], Vu = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Du = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Tu = ["aria-label", "disabled"], Fu = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Iu = ["disabled", "aria-pressed", "onClick"], Eu = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Nu = ["title", "disabled", "onClick"], Ru = ["href"], Uu = {
  key: 19,
  class: "text-destructive text-xs",
  role: "alert"
}, Hu = {
  key: 20,
  class: "text-muted-foreground text-xs"
}, qu = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", Ku = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", qe = /* @__PURE__ */ A({
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
    const n = jt(() => import("./PkRepeater-J84jGe3T.js")), r = jt(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = Z(!1), d = Z(""), m = Z([]), b = Z(!1), p = Z(null);
    let h;
    de(d, (R) => {
      s.searchOptions && (clearTimeout(h), b.value = !0, h = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(R);
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
    function w(R) {
      p.value = R.label, i("change", R.value), u.value = !1, d.value = "";
    }
    function S() {
      p.value = null, i("change", null);
    }
    const y = ht("panelPicker", null), v = k(() => {
      if (!s.field.tableSelect || !y?.base)
        return;
      const R = y.returnUrl || "/";
      return `${y.base}/pick/${s.field.key}?return=${encodeURIComponent(R)}`;
    }), g = k(() => s.field.morphTo ?? []), c = k(() => {
      const R = s.value;
      return R && typeof R == "object" && !Array.isArray(R) ? R : { type: void 0, id: void 0 };
    });
    function C(R) {
      i("change", { type: R || null, id: null });
    }
    function B(R) {
      i("change", { type: c.value.type ?? null, id: R });
    }
    function P(R) {
      p.value = R.label, B(R.value), u.value = !1, d.value = "";
    }
    ve(() => clearTimeout(h));
    const J = k(() => oi(s.field.type)), E = k(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function ee(R) {
      if (R) {
        if (R.copy) {
          const T = s.value == null ? "" : String(s.value);
          T !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(T);
          return;
        }
        R.url && typeof window < "u" && window.open(R.url, "_blank", "noopener,noreferrer");
      }
    }
    function q(R) {
      const T = document.getElementById(`f-${s.field.key}`);
      if (!(T instanceof HTMLTextAreaElement) && !(T instanceof HTMLInputElement))
        return;
      const U = T.selectionStart ?? T.value.length, I = T.selectionEnd ?? U;
      T.setRangeText(R, U, I, "end"), T.dispatchEvent(new Event("input", { bubbles: !0 })), T.focus();
    }
    return (R, T) => e.field.type === "hidden" ? (t(), a(z, { key: 0 }, [], 64)) : (t(), a("div", Qi, [
      o("div", eu, [
        o("label", {
          for: `f-${e.field.key}`,
          class: j(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
        }, [
          N(f(e.field.label) + " ", 1),
          e.field.required ? (t(), a("span", au, "*")) : $("", !0)
        ], 10, tu),
        e.field.hint ? (t(), a("span", nu, [
          N(f(e.field.hint) + " ", 1),
          e.field.hintAction ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground rounded px-1",
            "aria-label": e.field.hintAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: T[0] || (T[0] = (U) => ee(e.field.hintAction))
          }, f(e.field.hintAction.label ?? "⧉"), 9, lu)) : $("", !0)
        ])) : $("", !0)
      ]),
      J.value ? (t(), D(be(J.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": T[1] || (T[1] = (U) => i("change", U))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(sa, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": T[2] || (T[2] = (U) => i("change", U))
      }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), D(x(n), {
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
        "onUpdate:modelValue": T[3] || (T[3] = (U) => i("change", U))
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(x(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": T[4] || (T[4] = (U) => i("change", U))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Xi, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": T[5] || (T[5] = (U) => i("change", U))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(Ri, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": T[6] || (T[6] = (U) => i("change", U))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(Bt, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": T[7] || (T[7] = (U) => i("change", U))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : g.value.length ? (t(), a("div", ou, [
        o("select", {
          id: `f-${e.field.key}-type`,
          value: c.value.type ?? "",
          disabled: e.field.disabled || e.processing,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: T[8] || (T[8] = (U) => C(U.target.value))
        }, [
          T[24] || (T[24] = o("option", { value: "" }, "Type", -1)),
          (t(!0), a(z, null, L(g.value, (U) => (t(), a("option", {
            key: U.value,
            value: U.value
          }, f(U.label), 9, ru))), 128))
        ], 40, su),
        c.value.type && e.searchOptions ? (t(), a("div", iu, [
          o("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            onClick: M
          }, [
            o("span", {
              class: j(p.value || c.value.id ? "" : "text-muted-foreground")
            }, f(p.value ?? (c.value.id ? String(c.value.id) : "Search…")), 3)
          ], 8, uu),
          u.value ? (t(), a("div", du, [
            ue(o("input", {
              "onUpdate:modelValue": T[9] || (T[9] = (U) => d.value = U),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [xe, d.value]
            ]),
            o("div", cu, [
              (t(!0), a(z, null, L(m.value, (U) => (t(), a("button", {
                key: String(U.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (I) => P(U)
              }, f(U.label), 9, fu))), 128))
            ])
          ])) : $("", !0),
          u.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: T[10] || (T[10] = (U) => u.value = !1)
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
            class: j(p.value || e.value ? "" : "text-muted-foreground")
          }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), a("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: ce(S, ["stop"])
          }, " ✕ ")) : $("", !0)
        ], 8, pu),
        u.value ? (t(), a("div", vu, [
          ue(o("input", {
            "onUpdate:modelValue": T[11] || (T[11] = (U) => d.value = U),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [xe, d.value]
          ]),
          o("div", gu, [
            b.value ? (t(), a("p", hu, " Searching… ")) : m.value.length === 0 ? (t(), a("p", bu, " No matches ")) : $("", !0),
            (t(!0), a(z, null, L(m.value, (U) => (t(), a("button", {
              key: String(U.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (I) => w(U)
            }, f(U.label), 9, xu))), 128))
          ])
        ])) : $("", !0),
        u.value ? (t(), a("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: T[12] || (T[12] = (U) => u.value = !1)
        })) : $("", !0)
      ])) : e.field.type === "select" ? (t(), a("select", {
        key: 9,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onChange: T[13] || (T[13] = (U) => i("change", U.target.value || null))
      }, [
        T[25] || (T[25] = o("option", { value: "" }, "-", -1)),
        (t(!0), a(z, null, L(e.options, (U) => (t(), a("option", {
          key: String(U.value),
          value: U.value
        }, f(U.label), 9, ku))), 128))
      ], 40, yu)) : e.field.type === "toggle" ? (t(), a("label", $u, [
        F(x(De), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": T[14] || (T[14] = (U) => i("change", U))
        }, null, 8, ["id", "model-value", "disabled"]),
        o("span", wu, f(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), a("label", Cu, [
        F(x(Or), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": T[15] || (T[15] = (U) => i("change", U === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        o("span", Su, f(e.field.help ?? e.field.label), 1)
      ])) : e.field.type === "textarea" && !E.value ? (t(), a("textarea", {
        key: 12,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        rows: e.field.rows ?? 3,
        placeholder: e.field.placeholder,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: T[16] || (T[16] = (U) => i("change", U.target.value))
      }, null, 40, Mu)) : e.field.type === "textarea" ? (t(), a("div", {
        key: 13,
        class: j(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
      }, [
        e.field.prefix || e.field.prefixIcon ? (t(), a("span", Bu, f(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
        e.field.prefixAction ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
          "aria-label": e.field.prefixAction.label ?? "Action",
          disabled: e.field.disabled || e.processing,
          onClick: T[17] || (T[17] = (U) => ee(e.field.prefixAction))
        }, f(e.field.prefixAction.label ?? "⧉"), 9, _u)) : $("", !0),
        o("textarea", {
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
          onInput: T[18] || (T[18] = (U) => i("change", U.target.value))
        }, null, 40, Pu),
        e.field.suffix || e.field.suffixIcon ? (t(), a("span", zu, f(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
        e.field.suffixAction ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
          "aria-label": e.field.suffixAction.label ?? "Copy",
          disabled: e.field.disabled || e.processing,
          onClick: T[19] || (T[19] = (U) => ee(e.field.suffixAction))
        }, f(e.field.suffixAction.label ?? "⧉"), 9, Au)) : $("", !0)
      ], 2)) : E.value ? (t(), a("div", {
        key: 15,
        class: j(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
      }, [
        e.field.prefix || e.field.prefixIcon ? (t(), a("span", Ou, f(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
        e.field.prefixAction ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
          "aria-label": e.field.prefixAction.label ?? "Action",
          disabled: e.field.disabled || e.processing,
          onClick: T[21] || (T[21] = (U) => ee(e.field.prefixAction))
        }, f(e.field.prefixAction.label ?? "⧉"), 9, Lu)) : $("", !0),
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
          class: j(Ku),
          onInput: T[22] || (T[22] = (U) => i("change", U.target.value))
        }, null, 40, Vu),
        e.field.suffix || e.field.suffixIcon ? (t(), a("span", Du, f(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
        e.field.suffixAction ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
          "aria-label": e.field.suffixAction.label ?? "Copy",
          disabled: e.field.disabled || e.processing,
          onClick: T[23] || (T[23] = (U) => ee(e.field.suffixAction))
        }, f(e.field.suffixAction.label ?? "⧉"), 9, Tu)) : $("", !0)
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
        class: j(qu),
        onInput: T[20] || (T[20] = (U) => i("change", U.target.value))
      }, null, 40, ju)),
      e.field.type === "number" && e.field.presets?.length ? (t(), a("div", Fu, [
        (t(!0), a(z, null, L(e.field.presets, (U) => (t(), a("button", {
          key: U,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: j([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == U ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == U
          ),
          onClick: (I) => i("change", String(U))
        }, f(U), 11, Iu))), 128))
      ])) : $("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", Eu, [
        (t(!0), a(z, null, L(e.field.chips, (U, I) => (t(), a("button", {
          key: I,
          type: "button",
          title: U,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (V) => q(String(I))
        }, f(I), 9, Nu))), 128))
      ])) : $("", !0),
      v.value ? (t(), a("a", {
        key: 18,
        href: v.value,
        class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
      }, " Browse ", 8, Ru)) : $("", !0),
      e.error ? (t(), a("p", Uu, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", Hu, f(e.field.help), 1)) : $("", !0)
    ]));
  }
}), Gu = { class: "flex flex-col gap-2" }, Wu = { class: "min-w-0 flex-1" }, Zu = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Ju = ["disabled", "aria-label", "onClick"], Yu = ["disabled", "aria-label", "onClick"], Xu = ["disabled", "title", "aria-label", "onClick"], Qu = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ed = ["disabled"], Nw = /* @__PURE__ */ A({
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
    const i = Z(u(n.modelValue));
    function u(g) {
      return Array.isArray(g) ? g.map((c) => ({ uid: s++, data: { ...c } })) : [];
    }
    de(
      () => n.modelValue,
      (g) => {
        JSON.stringify(g ?? null) !== JSON.stringify(d()) && (i.value = u(g));
      }
    );
    function d() {
      const g = [];
      for (const c of i.value) {
        const C = {};
        let B = !1;
        for (const P of n.children) {
          const J = c.data[P.key] ?? null;
          C[P.key] = J, J !== null && J !== "" && !(Array.isArray(J) && J.length === 0) && (B = !0);
        }
        B && g.push(C);
      }
      return g.length ? g : null;
    }
    function m() {
      r("update:modelValue", d());
    }
    const b = k(() => n.maxItems !== null && i.value.length >= n.maxItems), p = k(() => n.minItems !== null && i.value.length <= n.minItems), h = k(() => n.children.length === 1);
    function M() {
      if (b.value || n.disabled)
        return;
      const g = {};
      for (const c of n.children)
        g[c.key] = null;
      i.value.push({ uid: s++, data: g });
    }
    function w(g) {
      i.value = i.value.filter((c) => c.uid !== g), m();
    }
    function S(g, c) {
      const C = g + c;
      if (C < 0 || C >= i.value.length)
        return;
      const B = [...i.value], [P] = B.splice(g, 1);
      B.splice(C, 0, P), i.value = B, m();
    }
    function y(g, c, C) {
      const B = i.value.find((P) => P.uid === g);
      B && (B.data[c] = C, m());
    }
    function v(g, c) {
      return n.errors[`${n.fieldKey}.${g}.${c}`];
    }
    return (g, c) => (t(), a("div", Gu, [
      (t(!0), a(z, null, L(i.value, (C, B) => (t(), a("div", {
        key: C.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: j(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(B + 1), 3),
        o("div", Wu, [
          h.value ? (t(), D(qe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: C.data[e.children[0].key],
            error: v(B, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => y(C.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Zu, [
            (t(!0), a(z, null, L(e.children, (P) => (t(), D(qe, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: C.data[P.key],
              error: v(B, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (J) => y(C.uid, P.key, J)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: j(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === 0,
            "aria-label": `Move ${e.itemLabel} ${B + 1} up`,
            onClick: (P) => S(B, -1)
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
          ])], 8, Ju),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${B + 1} down`,
            onClick: (P) => S(B, 1)
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
          ])], 8, Yu),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${B + 1}`,
            onClick: (P) => w(C.uid)
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
          ])], 8, Xu)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", Qu, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
      b.value ? $("", !0) : (t(), a("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: M
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
        N(" Add " + f(e.itemLabel.toLowerCase()), 1)
      ], 8, ed))
    ]));
  }
}), td = { class: "space-y-1" }, ad = { class: "flex items-center gap-1" }, nd = ["disabled", "title", "aria-label", "onClick"], ld = ["aria-pressed"], od = ["id", "value", "rows", "disabled"], sd = ["innerHTML"], rd = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(!1), i = k(() => n.modelValue ?? "");
    function u(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = k(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(h, M = h) {
      const w = document.getElementById(n.id ?? "");
      if (w === null)
        return;
      const S = w.selectionStart, y = w.selectionEnd, v = i.value.slice(S, y);
      r(
        "update:modelValue",
        `${i.value.slice(0, S)}${h}${v}${M}${i.value.slice(y)}`
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
      () => (n.toolbar ?? Object.keys(b)).filter((h) => h in b)
    );
    return (h, M) => (t(), a("div", td, [
      o("div", ad, [
        (t(!0), a(z, null, L(p.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (S) => b[w].run()
        }, f(b[w].label), 9, nd))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: M[0] || (M[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, ld)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, sd)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, od))
    ]));
  }
}), id = { class: "space-y-1" }, ud = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, dd = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, cd = ["id", "value", "rows", "disabled"], fd = { class: "text-muted-foreground text-xs" }, md = {
  key: 0,
  class: "text-destructive text-xs"
}, pd = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(null), i = Z(!0), u = k(() => n.modelValue ?? ""), d = k(() => Math.max(u.value.split(`
`).length, 1)), m = k(() => {
      if (n.language !== "json" || u.value.trim() === "")
        return null;
      try {
        return JSON.parse(u.value), null;
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function b(h) {
      r("update:modelValue", h.target.value);
    }
    function p(h) {
      if (h.key === "Escape") {
        i.value = !1;
        return;
      }
      if (h.key !== "Tab" && (i.value = !0), h.key !== "Tab" || !i.value)
        return;
      h.preventDefault();
      const M = h.target, w = M.selectionStart, S = M.selectionEnd, y = `${u.value.slice(0, w)}    ${u.value.slice(S)}`;
      r("update:modelValue", y), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = w + 4;
      });
    }
    return (h, M) => (t(), a("div", id, [
      o("div", ud, [
        o("div", dd, [
          (t(!0), a(z, null, L(d.value, (w) => (t(), a("div", { key: w }, f(w), 1))), 128))
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
        }, null, 40, cd)
      ]),
      o("p", fd, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", md, f(m.value), 1)) : $("", !0)
    ]));
  }
}), vd = { class: "space-y-3" }, gd = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, hd = { class: "text-sm font-medium" }, bd = { class: "flex items-center gap-1" }, xd = ["disabled", "onClick"], yd = ["disabled", "onClick"], kd = ["disabled", "onClick"], $d = { class: "space-y-3 p-3" }, wd = { class: "flex flex-wrap items-center gap-2" }, Cd = ["disabled", "onClick"], Sd = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Rw = /* @__PURE__ */ A({
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
    function b(M) {
      d(s.value.filter((w, S) => S !== M));
    }
    function p(M, w) {
      const S = M + w;
      if (S < 0 || S >= s.value.length)
        return;
      const y = [...s.value], [v] = y.splice(M, 1);
      y.splice(S, 0, v), d(y);
    }
    function h(M, w, S) {
      d(
        s.value.map(
          (y, v) => v === M ? { ...y, data: { ...y.data, [w]: S } } : y
        )
      );
    }
    return (M, w) => (t(), a("div", vd, [
      (t(!0), a(z, null, L(s.value, (S, y) => (t(), a("div", {
        key: `${S.type}-${y}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", gd, [
          o("span", hd, f(i.value[S.type]?.label ?? S.type), 1),
          o("div", bd, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || y === 0,
              "aria-label": "Move up",
              onClick: (v) => p(y, -1)
            }, " ↑ ", 8, xd),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || y === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (v) => p(y, 1)
            }, " ↓ ", 8, yd),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (v) => b(y)
            }, " Remove ", 8, kd)
          ])
        ]),
        o("div", $d, [
          (t(!0), a(z, null, L(i.value[S.type]?.fields ?? [], (v) => (t(), D(qe, {
            key: v.key,
            field: v,
            value: S.data[v.key] ?? null,
            error: e.errors?.[v.key],
            processing: e.disabled,
            onChange: (g) => h(y, v.key, g)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", wd, [
        (t(!0), a(z, null, L(e.blocks, (S) => (t(), a("button", {
          key: S.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (y) => m(S.type)
        }, " + " + f(S.label), 9, Cd))), 128)),
        u.value ? (t(), a("span", Sd, f(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), Md = ["name", "value", "checked", "disabled", "onChange"], Bd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, _d = /* @__PURE__ */ A({
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
      (t(!0), a(z, null, L(e.options, (d) => (t(), a("label", {
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
        }, null, 40, Md),
        N(" " + f(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Bd, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), Pd = ["value", "checked", "disabled", "onChange"], zd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ad = /* @__PURE__ */ A({
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
      return s.value.some((b) => b == m.value);
    }
    function u(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((b) => b != m.value) : [...s.value, m.value]
      );
    }
    const d = k(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, b) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(d.value)
    }, [
      (t(!0), a(z, null, L(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: j(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (h) => u(p)
        }, null, 40, Pd),
        N(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", zd, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), jd = { class: "flex flex-col gap-1.5" }, Od = ["aria-label", "onClick"], Ld = ["placeholder", "disabled", "maxlength"], Vd = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Dd = ["onClick"], Td = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, Fd = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = Z(""), i = k(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), u = k(() => i.value.length >= (n.field.max ?? 25)), d = k(
      () => (n.field.suggestions ?? []).filter(
        (h) => !i.value.some((M) => M.toLowerCase() === h.toLowerCase())
      )
    );
    function m(h) {
      const M = h.trim().slice(0, n.field.maxLength ?? 40);
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
    function b(h) {
      r(
        "update:modelValue",
        i.value.filter((M, w) => w !== h)
      );
    }
    function p(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), m(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && b(i.value.length - 1);
    }
    return (h, M) => (t(), a("div", jd, [
      o("div", {
        class: j(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(z, null, L(i.value, (w, S) => (t(), a("span", {
          key: `${w}-${S}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(f(w) + " ", 1),
          e.disabled ? $("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (y) => b(S)
          }, " × ", 8, Od))
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
        }, null, 40, Ld), [
          [xe, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), a("div", Vd, [
        M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(z, null, L(d.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (S) => m(w)
        }, f(w), 9, Dd))), 128))
      ])) : $("", !0),
      u.value ? (t(), a("p", Td, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), Id = 4.5, Ft = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ra(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function ot(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function pt(e) {
  const [l, n, r] = ra(e);
  return 0.2126 * ot(l) + 0.7152 * ot(n) + 0.0722 * ot(r);
}
function ia(e, l) {
  const n = pt(e), r = pt(l);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ed(e, l, n) {
  if (!Ft.test(e) || !Ft.test(l))
    return e;
  const r = pt(l) > 0.5, s = r ? 0 : 255;
  let i = ra(e);
  for (let u = 0; u <= 20; u++) {
    const d = Nd(i);
    if (ia(d, l) >= n)
      return d;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Nd(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Rd = { class: "flex flex-col gap-2" }, Ud = { class: "flex items-center gap-2" }, Hd = {
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
}, qd = ["value", "disabled", "aria-label"], Kd = ["value", "disabled", "placeholder"], Gd = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Wd = ["aria-label", "title", "onClick"], Zd = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Jd = /* @__PURE__ */ A({
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
      const S = w.trim();
      if (S === "")
        return "";
      const y = S.startsWith("#") ? S : `#${S}`;
      return s.test(y) ? y.toLowerCase() : S;
    }
    function m(w) {
      r("update:modelValue", d(w.target.value));
    }
    const b = k(() => !u.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : ia(i.value, n.field.contrastBackground)), p = k(() => n.field.contrastMinRatio ?? Id), h = k(() => b.value !== null && b.value < p.value);
    function M() {
      n.field.contrastBackground && r(
        "update:modelValue",
        Ed(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (w, S) => (t(), a("div", Rd, [
      o("div", Ud, [
        u.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: S[0] || (S[0] = (y) => r("update:modelValue", y.target.value))
        }, null, 40, qd)) : (t(), a("span", Hd)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, Kd)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Gd, [
        (t(!0), a(z, null, L(e.field.presets, (y) => (t(), a("button", {
          key: y,
          type: "button",
          class: j(["size-6 rounded border", i.value.toLowerCase() === y.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: y }),
          "aria-label": y,
          title: y,
          onClick: (v) => r("update:modelValue", y.toLowerCase())
        }, null, 14, Wd))), 128))
      ])) : $("", !0),
      h.value ? (t(), a("p", Zd, [
        o("span", null, " This fails contrast at " + f(b.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), Yd = { class: "flex items-center gap-3" }, Xd = ["min", "max", "step", "value", "disabled", "aria-label"], Qd = { class: "flex shrink-0 items-center gap-1" }, ec = ["min", "max", "step", "value", "disabled"], tc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ac = /* @__PURE__ */ A({
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
    function b(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(p);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (p, h) => (t(), a("div", Yd, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (M) => b(M.target.value))
      }, null, 40, Xd),
      o("div", Qd, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: m.value ? "" : d.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (M) => b(M.target.value))
        }, null, 40, ec),
        e.field.unit ? (t(), a("span", tc, f(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), We = /* @__PURE__ */ new Map();
function st(e, l) {
  We.set(e, l);
}
function nc(e) {
  return We.get(e);
}
function Uw(e) {
  return We.has(e);
}
function lc() {
  return [...We.keys()].sort();
}
function Hw() {
  We.clear();
}
const oc = ["name", "value", "checked", "disabled", "onChange"], sc = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, rc = { class: "whitespace-nowrap" }, ic = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, uc = ["name", "value", "checked", "disabled", "onChange"], dc = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, cc = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, fc = { class: "text-center text-xs font-medium" }, mc = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, pc = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, vc = /* @__PURE__ */ A({
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
      () => n.field.preview ? nc(n.field.preview) : void 0
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
    function m(b) {
      return n.modelValue != null && b.value == n.modelValue;
    }
    return (b, p) => u.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: j(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(z, null, L(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: j(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(h) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: m(h),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", h.value)
        }, null, 40, oc),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", sc, [
          (t(), D(be(s.value), {
            value: h.value,
            label: h.label,
            selected: m(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", rc, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", ic, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: j(["grid gap-3", d.value])
    }, [
      (t(!0), a(z, null, L(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: j(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(h) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: m(h),
          disabled: e.disabled,
          onChange: (M) => r("update:modelValue", h.value)
        }, null, 40, uc),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", dc, [
          s.value ? (t(), D(be(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: m(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", cc, " no preview ")) : $("", !0)
        ]),
        o("span", fc, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", mc, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", pc, [
        p[2] || (p[2] = N(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        N(". Registered: " + f(x(lc)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), gc = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, hc = /* @__PURE__ */ A({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", gc, [
      o("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), bc = { class: "flex flex-col items-center gap-1 text-center" }, xc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ua = /* @__PURE__ */ A({
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
    return (s, i) => (t(), a("div", bc, [
      o("div", {
        class: j(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: n.value, color: n.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", xc, f(e.caption), 1)) : $("", !0)
    ]));
  }
}), yc = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, kc = { class: "flex items-center gap-3" }, $c = ["src"], wc = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Cc = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Sc = {
  key: 0,
  class: "text-right text-sm"
}, Mc = { class: "text-neutral-500" }, Bc = { class: "tabular-nums" }, _c = { key: 1 }, Pc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, zc = { class: "mt-2 font-medium" }, Ac = { key: 2 }, jc = { class: "w-full text-sm" }, Oc = { class: "w-full py-3 pr-2" }, Lc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Vc = { key: 0 }, Dc = ["colspan"], Tc = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Fc = { class: "w-64 text-sm" }, Ic = { class: "tabular-nums" }, Ec = {
  key: 3,
  class: "py-2"
}, Nc = { key: 4 }, Rc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Uc = { class: "mt-2 flex flex-col gap-1 text-sm" }, Hc = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, qc = { key: 0 }, Kc = {
  key: 1,
  class: "mt-1"
}, Gc = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Wc = /* @__PURE__ */ A({
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
    return (m, b) => (t(), a("article", yc, [
      o("div", kc, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, $c)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: n() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), a(z, null, L(e.document.blocks, (p, h) => (t(), a(z, { key: h }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ne({ borderColor: n() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ne({ color: n() })
            }, f(p.title), 5),
            p.subtitle ? (t(), a("p", wc, f(p.subtitle), 1)) : $("", !0),
            p.reference ? (t(), a("p", Cc, f(p.reference), 1)) : $("", !0)
          ]),
          r(p).length ? (t(), a("dl", Sc, [
            (t(!0), a(z, null, L(r(p), (M, w) => (t(), a("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Mc, f(M.label), 1),
              o("dd", Bc, f(M.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", _c, [
          o("h2", Pc, f(p.heading), 1),
          o("p", zc, f(p.name), 1),
          (t(!0), a(z, null, L(u(p.lines), (M, w) => (t(), a("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, f(M), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", Ac, [
          o("table", jc, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: n() })
              }, [
                (t(!0), a(z, null, L(u(p.columns), (M, w) => (t(), a("th", {
                  key: w,
                  class: j(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(M), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(z, null, L(s(p), (M, w) => (t(), a("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                o("td", Oc, [
                  o("p", null, f(M.description), 1),
                  M.detail ? (t(), a("p", Lc, f(M.detail), 1)) : $("", !0)
                ]),
                (t(!0), a(z, null, L(M.cells, (S, y) => (t(), a("td", {
                  key: y,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(S), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Vc, [
                o("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, Dc)
              ])) : $("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Tc, [
            o("dl", Fc, [
              (t(!0), a(z, null, L(i(p), (M, w) => (t(), a("div", {
                key: w,
                class: j([
                  "flex justify-between py-1",
                  M.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(M.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                o("dt", {
                  class: j(M.strong ? "" : "text-neutral-600")
                }, f(M.label), 3),
                o("dd", Ic, f(M.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : p.type === "code" ? (t(), a("section", Ec, [
          F(ua, {
            code: d(p.code),
            caption: d(p.caption),
            style: ne(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", Nc, [
          o("h2", Rc, f(p.heading), 1),
          o("ol", Uc, [
            (t(!0), a(z, null, L(u(p.items), (M, w) => (t(), a("li", {
              key: w,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ne({ color: n() })
              }, f(w + 1) + ".", 5),
              o("span", null, f(M), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: j(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: n() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", Hc, [
          p.text ? (t(), a("p", qc, f(p.text), 1)) : $("", !0),
          u(p.contacts).length ? (t(), a("p", Kc, f(u(p.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), a("p", Gc, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Zc = ["aria-label", "title"], Jc = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yc = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, qw = /* @__PURE__ */ A({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: n } = aa(), r = k(() => l.value.theme === "dark");
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
      (t(), a("svg", Jc, [
        r.value ? (t(), a(z, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", Yc))
      ]))
    ], 8, Zc));
  }
}), Xc = ["width", "height"], Qc = { key: 0 }, ef = ["x1", "x2", "y1", "y2"], tf = ["x", "y"], af = ["x1", "x2", "y1", "y2"], nf = ["x", "y"], lf = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], of = ["x", "y", "width", "height", "fill", "fill-opacity"], sf = ["x", "y"], rf = ["x", "y"], uf = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, df = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, cf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, ff = { class: "text-xs font-semibold tabular-nums" }, mf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, pf = { class: "text-muted-foreground" }, It = 5.6, Kw = /* @__PURE__ */ A({
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
    function s(_, W) {
      if (!l.thresholds?.length)
        return W;
      const G = l.thresholds.find((H) => _ < H.max);
      return r(G ? G.color : l.aboveColor);
    }
    const i = Z(null), u = Z(560), d = Z(null);
    let m = null;
    fe(() => {
      m = new ResizeObserver((_) => {
        u.value = Math.max(160, _[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), ve(() => m?.disconnect());
    const b = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((W, G) => ({
      ...W,
      color: W.color ?? b[G % b.length]
    }))), h = k(() => p.value[0]?.points.map((_) => _.label) ?? []), M = k(() => h.value.length), w = k(() => l.orientation === "horizontal"), S = k(() => Math.max(0, ...h.value.map((_) => _.length))), y = k(() => {
      if (!w.value)
        return l.showAxis ? 44 : 8;
      const _ = S.value * It + 16;
      return Math.round(Math.min(Math.max(60, _), u.value * 0.4));
    }), v = k(() => Math.max(4, Math.floor((y.value - 16) / It)));
    function g(_) {
      return _.length <= v.value ? _ : `${_.slice(0, v.value - 1)}…`;
    }
    const c = k(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: y.value
    })), C = k(() => ({
      w: Math.max(1, u.value - c.value.left - c.value.right),
      h: Math.max(1, l.height - c.value.top - c.value.bottom)
    })), B = (_) => l.format ? l.format(_) : P(_);
    function P(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const J = k(() => {
      const _ = h.value.map(
        (Y, te) => l.stacked ? p.value.reduce((ae, oe) => ae + Math.max(0, oe.points[te]?.value ?? 0), 0) : Math.max(...p.value.map((ae) => ae.points[te]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const W = Math.max(..._, 0);
      if (W <= 0)
        return 1;
      const G = 10 ** Math.floor(Math.log10(W));
      return ([1, 2, 2.5, 5, 10].find((Y) => W <= Y * G) ?? 10) * G;
    }), E = k(
      () => (w.value ? C.value.h : C.value.w) / Math.max(1, M.value)
    ), ee = k(() => E.value * 0.68), q = k(
      () => l.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), R = k(() => {
      const _ = [], W = new Array(M.value).fill(0);
      return p.value.forEach((G, H) => {
        G.points.forEach((Y, te) => {
          const oe = Math.max(0, Y.value) / J.value * (w.value ? C.value.w : C.value.h), Le = (w.value ? c.value.top : c.value.left) + te * E.value + (E.value - ee.value) / 2, At = l.stacked ? 0 : H * q.value;
          _.push(
            w.value ? {
              x: c.value.left + W[te],
              y: Le + At,
              w: oe,
              h: Math.max(0, q.value - 2),
              color: s(Y.value, G.color),
              label: Y.label,
              name: G.name,
              value: Y.value,
              index: te
            } : {
              x: Le + At,
              y: c.value.top + C.value.h - oe - W[te],
              w: Math.max(0, q.value - 2),
              h: oe,
              color: s(Y.value, G.color),
              label: Y.label,
              name: G.name,
              value: Y.value,
              index: te
            }
          ), l.stacked && (W[te] += oe);
        });
      }), _;
    }), T = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: J.value * (w.value ? _ : 1 - _),
        x: c.value.left + C.value.w * _,
        y: c.value.top + C.value.h * _
      }))
    ), U = k(() => Math.max(1, Math.ceil(M.value / (w.value ? 14 : 10))));
    function I(_) {
      return _ === M.value - 1 || _ % U.value === 0;
    }
    function V(_) {
      return (w.value ? c.value.top : c.value.left) + _ * E.value + E.value / 2;
    }
    const Q = k(() => d.value === null ? null : {
      label: h.value[d.value],
      rows: p.value.map((_) => ({
        name: _.name,
        color: _.color,
        value: _.points[d.value]?.value ?? 0
      }))
    });
    return (_, W) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      M.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: W[0] || (W[0] = (G) => d.value = null)
        }, [
          e.showAxis ? (t(), a("g", Qc, [
            w.value ? (t(), a(z, { key: 0 }, [
              (t(!0), a(z, null, L(T.value, (G) => (t(), a("line", {
                key: `g-${G.x}`,
                x1: G.x,
                x2: G.x,
                y1: c.value.top,
                y2: c.value.top + C.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, ef))), 128)),
              (t(!0), a(z, null, L(T.value, (G) => (t(), a("text", {
                key: `gt-${G.x}`,
                x: G.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(G.value)), 9, tf))), 128))
            ], 64)) : (t(), a(z, { key: 1 }, [
              (t(!0), a(z, null, L(T.value, (G) => (t(), a("line", {
                key: `g-${G.y}`,
                x1: c.value.left,
                x2: u.value - c.value.right,
                y1: G.y,
                y2: G.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, af))), 128)),
              (t(!0), a(z, null, L(T.value, (G) => (t(), a("text", {
                key: `gt-${G.y}`,
                x: c.value.left - 8,
                y: G.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(P(G.value)), 9, nf))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), a(z, null, L(h.value, (G, H) => (t(), a("rect", {
            key: `hit-${H}`,
            x: w.value ? c.value.left : c.value.left + H * E.value,
            y: w.value ? c.value.top + H * E.value : c.value.top,
            width: w.value ? C.value.w : E.value,
            height: w.value ? E.value : C.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === H ? 0.4 : 0,
            onMouseenter: (Y) => d.value = H
          }, null, 40, lf))), 128)),
          (t(!0), a(z, null, L(R.value, (G, H) => (t(), a("rect", {
            key: `b-${H}`,
            x: G.x,
            y: G.y,
            width: G.w,
            height: G.h,
            fill: G.color,
            "fill-opacity": d.value === null || d.value === G.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, of))), 128)),
          w.value ? (t(!0), a(z, { key: 1 }, L(h.value, (G, H) => ue((t(), a("text", {
            key: `c-${H}`,
            x: c.value.left - 8,
            y: V(H) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(f(g(G)) + " ", 1),
            o("title", null, f(G), 1)
          ], 8, sf)), [
            [je, I(H)]
          ])), 128)) : (t(!0), a(z, { key: 2 }, L(h.value, (G, H) => ue((t(), a("text", {
            key: `c-${H}`,
            x: V(H),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(G), 9, rf)), [
            [je, I(H)]
          ])), 128))
        ], 40, Xc)),
        Q.value ? (t(), a("div", uf, [
          o("p", df, f(Q.value.label), 1),
          (t(!0), a(z, null, L(Q.value.rows, (G, H) => (t(), a("div", {
            key: H,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: G.color })
            }, null, 4),
            o("span", cf, f(G.name || "Value"), 1),
            o("span", ff, f(B(G.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", mf, [
          (t(!0), a(z, null, L(p.value, (G, H) => (t(), a("span", {
            key: H,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: G.color })
            }, null, 4),
            o("span", pf, f(G.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), vf = ["width", "height"], gf = ["id"], hf = ["stop-color"], bf = ["stop-color"], xf = { key: 0 }, yf = ["x1", "x2", "y1", "y2"], kf = ["x", "y"], $f = ["x", "y"], wf = ["x1", "x2", "y1", "y2"], Cf = ["d", "fill"], Sf = ["d", "stroke", "stroke-dasharray"], Mf = ["cx", "cy", "fill"], Bf = { key: 1 }, _f = ["x1", "x2", "y1", "y2"], Pf = ["cx", "cy", "fill"], zf = ["x", "y"], Af = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, jf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Of = { class: "text-xs font-semibold tabular-nums" }, Lf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Vf = { class: "text-muted-foreground" }, Df = /* @__PURE__ */ A({
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
    const l = e, n = k(() => b.value.some((_) => _.axis === "right")), r = Z(null), s = Z(560), i = Z(null);
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
    ], m = Math.random().toString(36).slice(2, 9), b = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((W, G) => ({
      ...W,
      color: W.color ?? d[G % d.length]
    }))), p = k(() => b.value[0]?.points.map((_) => _.label) ?? []), h = k(() => p.value.length), M = k(() => ({
      top: 12,
      right: l.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), w = (_) => l.format ? l.format(_) : S(_);
    function S(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    function y(_) {
      const W = Math.max(..._, 0);
      if (W <= 0)
        return 1;
      const G = 10 ** Math.floor(Math.log10(W));
      return ([1, 2, 2.5, 5, 10].find((Y) => W <= Y * G) ?? 10) * G;
    }
    const v = k(
      () => y(
        b.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((W) => W.value))
      )
    ), g = k(
      () => y(
        b.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((W) => W.value))
      )
    ), c = k(() => ({
      w: Math.max(1, s.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    }));
    function C(_) {
      return M.value.left + (h.value <= 1 ? 0 : _ / (h.value - 1) * c.value.w);
    }
    function B(_, W = "left") {
      const G = W === "right" ? g.value : v.value;
      return M.value.top + c.value.h - _ / G * c.value.h;
    }
    const P = k(
      () => b.value.map((_) => {
        const W = _.points.map((H, Y) => ({
          ...H,
          x: C(Y),
          y: B(H.value, _.axis ?? "left")
        })), G = _.stepped ? J(W) : E(W);
        return { ..._, pts: W, line: G, area: ee(G, W) };
      })
    );
    function J(_) {
      if (_.length === 0)
        return "";
      let W = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let G = 1; G < _.length; G++)
        W += ` L${_[G].x.toFixed(2)},${_[G - 1].y.toFixed(2)} L${_[G].x.toFixed(2)},${_[G].y.toFixed(2)}`;
      return W;
    }
    function E(_) {
      const W = _.length;
      if (W === 0)
        return "";
      if (W === 1)
        return `M${_[0].x},${_[0].y}`;
      const G = [], H = [];
      for (let ae = 0; ae < W - 1; ae++)
        G[ae] = _[ae + 1].x - _[ae].x, H[ae] = G[ae] === 0 ? 0 : (_[ae + 1].y - _[ae].y) / G[ae];
      const Y = [H[0]];
      for (let ae = 1; ae < W - 1; ae++)
        if (H[ae - 1] * H[ae] <= 0)
          Y[ae] = 0;
        else {
          const oe = 2 * G[ae] + G[ae - 1], Le = G[ae] + 2 * G[ae - 1];
          Y[ae] = (oe + Le) / (oe / H[ae - 1] + Le / H[ae]);
        }
      Y[W - 1] = H[W - 2];
      let te = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let ae = 0; ae < W - 1; ae++) {
        const oe = G[ae] / 3;
        te += ` C${(_[ae].x + oe).toFixed(2)},${(_[ae].y + Y[ae] * oe).toFixed(2)} ${(_[ae + 1].x - oe).toFixed(2)},${(_[ae + 1].y - Y[ae + 1] * oe).toFixed(2)} ${_[ae + 1].x.toFixed(2)},${_[ae + 1].y.toFixed(2)}`;
      }
      return te;
    }
    function ee(_, W) {
      if (W.length === 0)
        return "";
      const G = M.value.top + c.value.h;
      return `${_} L${W[W.length - 1].x.toFixed(2)},${G} L${W[0].x.toFixed(2)},${G} Z`;
    }
    const q = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: M.value.top + c.value.h * _,
        value: v.value * (1 - _)
      }))
    ), R = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: M.value.top + c.value.h * _,
        value: g.value * (1 - _)
      }))
    ), T = k(() => Math.max(1, Math.ceil(h.value / 8)));
    function U(_) {
      return _ === h.value - 1 || _ % T.value === 0;
    }
    function I(_) {
      const W = _.currentTarget.getBoundingClientRect(), G = _.clientX - W.left - M.value.left, H = h.value <= 1 ? 1 : c.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(G / H)));
    }
    const V = k(() => {
      if (i.value === null || h.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: C(_),
        label: p.value[_],
        rows: P.value.map((W) => ({
          name: W.name,
          color: W.color,
          value: W.points[_]?.value ?? 0,
          y: W.pts[_]?.y ?? 0
        }))
      };
    }), Q = k(() => {
      if (!V.value)
        return {};
      const _ = V.value.x > s.value * 0.6;
      return {
        left: `${V.value.x}px`,
        top: "8px",
        transform: _ ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (_, W) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: I,
          onMouseleave: W[0] || (W[0] = (G) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(z, null, L(P.value, (G, H) => (t(), a("linearGradient", {
              id: `pk-fill-${x(m)}-${H}`,
              key: H,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": G.color,
                "stop-opacity": "0.25"
              }, null, 8, hf),
              o("stop", {
                offset: "100%",
                "stop-color": G.color,
                "stop-opacity": "0.01"
              }, null, 8, bf)
            ], 8, gf))), 128))
          ]),
          e.showAxis ? (t(), a("g", xf, [
            (t(!0), a(z, null, L(q.value, (G) => (t(), a("line", {
              key: G.y,
              x1: M.value.left,
              x2: s.value - M.value.right,
              y1: G.y,
              y2: G.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, yf))), 128)),
            (t(!0), a(z, null, L(q.value, (G) => (t(), a("text", {
              key: `t-${G.y}`,
              x: M.value.left - 8,
              y: G.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(S(G.value)), 9, kf))), 128)),
            n.value ? (t(!0), a(z, { key: 0 }, L(R.value, (G) => (t(), a("text", {
              key: `rt-${G.y}`,
              x: s.value - M.value.right + 8,
              y: G.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(S(G.value)), 9, $f))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), a(z, null, L(p.value, (G, H) => ue((t(), a("line", {
            key: `v-${H}`,
            x1: C(H),
            x2: C(H),
            y1: M.value.top,
            y2: M.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, wf)), [
            [je, U(H)]
          ])), 128)),
          (t(!0), a(z, null, L(P.value, (G, H) => (t(), a("g", {
            key: `s-${H}`
          }, [
            G.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: G.area,
              fill: `url(#pk-fill-${x(m)}-${H})`
            }, null, 8, Cf)) : $("", !0),
            o("path", {
              d: G.line,
              fill: "none",
              stroke: G.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": G.dashed ? "6 4" : void 0
            }, null, 8, Sf),
            G.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: G.pts[0].x,
              cy: G.pts[0].y,
              r: "3",
              fill: G.color
            }, null, 8, Mf)) : $("", !0)
          ]))), 128)),
          V.value ? (t(), a("g", Bf, [
            o("line", {
              x1: V.value.x,
              x2: V.value.x,
              y1: M.value.top,
              y2: M.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, _f),
            (t(!0), a(z, null, L(V.value.rows, (G, H) => (t(), a("circle", {
              key: `d-${H}`,
              cx: V.value.x,
              cy: G.y,
              r: "4",
              fill: G.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Pf))), 128))
          ])) : $("", !0),
          (t(!0), a(z, null, L(p.value, (G, H) => ue((t(), a("text", {
            key: `x-${H}`,
            x: C(H),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(G), 9, zf)), [
            [je, U(H)]
          ])), 128))
        ], 40, vf)),
        V.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(Q.value)
        }, [
          o("p", Af, f(V.value.label), 1),
          (t(!0), a(z, null, L(V.value.rows, (G, H) => (t(), a("div", {
            key: H,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: G.color })
            }, null, 4),
            o("span", jf, f(G.name || "Value"), 1),
            o("span", Of, f(w(G.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && b.value.length > 1 ? (t(), a("div", Lf, [
          (t(!0), a(z, null, L(P.value, (G, H) => (t(), a("span", {
            key: H,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: G.color })
            }, null, 4),
            o("span", Vf, f(G.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Tf = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Ff = { class: "text-muted-foreground text-[11px] capitalize" }, If = { class: "text-sm font-semibold tabular-nums" }, Ef = {
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
    return (l, n) => (t(), a("div", Tf, [
      o("p", Ff, f(e.label), 1),
      o("p", If, [
        N(f(e.value) + " ", 1),
        e.share ? (t(), a("span", Ef, " (" + f(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), Nf = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Rf = ["width", "height", "viewBox", "aria-label"], Uf = ["d", "fill", "fill-opacity", "onMouseenter"], Hf = ["x", "y"], qf = ["x", "y"], Kf = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Gf = ["onMouseenter"], Wf = { class: "min-w-0 flex-1 truncate capitalize" }, Zf = { class: "tabular-nums font-medium" }, Jf = { class: "text-muted-foreground w-9 text-right tabular-nums" }, Gw = /* @__PURE__ */ A({
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
    ], r = k(() => l.data.reduce((v, g) => v + g.value, 0)), s = Z(null), i = k(() => l.height), u = k(() => i.value / 2 - 4), d = k(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function m(v) {
      return n[v % n.length];
    }
    function b(v) {
      return 1 - Math.min(0.55, Math.floor(v / n.length) * 0.28);
    }
    const p = k(() => {
      if (r.value <= 0)
        return [];
      const v = i.value / 2;
      let g = -Math.PI / 2;
      return l.data.map((c, C) => {
        const B = c.value / r.value, P = B * Math.PI * 2, J = g, E = g + P;
        return g = E, {
          ...c,
          share: B,
          colour: m(C),
          opacity: b(C),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: B >= 0.9999 ? w(v) : M(v, J, E, u.value, d.value)
        };
      });
    });
    function h(v, g, c) {
      return `${(v + Math.cos(g) * c).toFixed(2)},${(v + Math.sin(g) * c).toFixed(2)}`;
    }
    function M(v, g, c, C, B) {
      const P = c - g > Math.PI ? 1 : 0;
      return B <= 0 ? `M${v},${v} L${h(v, g, C)} A${C},${C} 0 ${P} 1 ${h(v, c, C)} Z` : [
        `M${h(v, g, C)}`,
        `A${C},${C} 0 ${P} 1 ${h(v, c, C)}`,
        `L${h(v, c, B)}`,
        `A${B},${B} 0 ${P} 0 ${h(v, g, B)}`,
        "Z"
      ].join(" ");
    }
    function w(v) {
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
    const S = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), y = (v) => `${(v * 100).toFixed(v < 0.01 ? 2 : 0)}%`;
    return (v, g) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Nf, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${S(r.value)}`
      }, [
        (t(!0), a(z, null, L(p.value, (c, C) => (t(), a("path", {
          key: C,
          d: c.path,
          fill: c.colour,
          "fill-opacity": s.value === null || s.value === C ? c.opacity : c.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (B) => s.value = C,
          onMouseleave: g[0] || (g[0] = (B) => s.value = null)
        }, null, 40, Uf))), 128)),
        e.type === "doughnut" ? (t(), a(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(S(s.value === null ? r.value : p.value[s.value].value)), 9, Hf),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, qf)
        ], 64)) : $("", !0)
      ], 8, Rf)),
      o("ul", Kf, [
        (t(!0), a(z, null, L(p.value, (c, C) => (t(), a("li", {
          key: C,
          class: j(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === C ? "bg-muted" : ""]),
          onMouseenter: (B) => s.value = C,
          onMouseleave: g[1] || (g[1] = (B) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          o("span", Wf, f(c.label), 1),
          o("span", Zf, f(S(c.value)), 1),
          o("span", Jf, f(y(c.share)), 1)
        ], 42, Gf))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(Ze, {
        key: 0,
        label: p.value[s.value].label,
        value: S(p.value[s.value].value),
        share: y(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Yf = ["width", "height", "viewBox", "aria-label"], Xf = { class: "text-border" }, Qf = ["x1", "x2", "y1", "y2", "stroke-dasharray"], em = { class: "fill-muted-foreground text-[10px]" }, tm = ["x", "y"], am = ["x", "y"], nm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], lm = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, Ww = /* @__PURE__ */ A({
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
    ], r = Z(null), s = Z(560), i = Z(null);
    let u = null;
    fe(() => {
      u = new ResizeObserver((T) => {
        const U = T[0]?.contentRect.width ?? 0;
        U > 0 && (s.value = U);
      }), r.value && u.observe(r.value);
    }), ve(() => u?.disconnect());
    const d = k(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), m = (T, U) => U.color ?? n[T % n.length], b = k(() => d.value.flatMap((T) => T.points)), p = k(() => b.value.some((T) => typeof T.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, M = k(() => Math.max(10, s.value - h.left - h.right)), w = k(() => Math.max(10, l.height - h.top - h.bottom));
    function S(T) {
      if (T.length === 0)
        return [0, 1];
      const U = Math.min(...T), I = Math.max(...T), V = I - U || Math.abs(I) || 1;
      return [U - V * 0.08, I + V * 0.08];
    }
    const y = k(() => S(b.value.map((T) => T.x))), v = k(() => S(b.value.map((T) => T.y))), g = (T) => {
      const [U, I] = y.value;
      return h.left + (T - U) / (I - U) * M.value;
    }, c = (T) => {
      const [U, I] = v.value;
      return h.top + w.value - (T - U) / (I - U) * w.value;
    }, C = k(() => Math.max(...b.value.map((T) => T.r ?? 0), 0));
    function B(T) {
      if (!p.value || !C.value)
        return 4;
      const U = Math.max(0, T.r ?? 0) / C.value;
      return 3 + Math.sqrt(U) * (l.maxRadius - 3);
    }
    function P([T, U]) {
      return Array.from({ length: 5 }, (I, V) => T + (U - T) / 4 * V);
    }
    const J = k(() => P(y.value)), E = k(() => P(v.value)), ee = (T) => l.formatX?.(T) ?? String(Math.round(T * 100) / 100), q = (T) => l.formatY?.(T) ?? String(Math.round(T * 100) / 100), R = k(() => {
      if (!i.value)
        return null;
      const T = d.value[i.value.s], U = T?.points[i.value.p];
      return U ? { series: T, point: U } : null;
    });
    return (T, U) => (t(), a("div", {
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
        o("g", Xf, [
          (t(!0), a(z, null, L(E.value, (I, V) => (t(), a("line", {
            key: `gy-${V}`,
            x1: h.left,
            x2: h.left + M.value,
            y1: c(I),
            y2: c(I),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": V === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Qf))), 128))
        ]),
        o("g", em, [
          (t(!0), a(z, null, L(E.value, (I, V) => (t(), a("text", {
            key: `ty-${V}`,
            x: h.left - 8,
            y: c(I) + 3,
            "text-anchor": "end"
          }, f(q(I)), 9, tm))), 128)),
          (t(!0), a(z, null, L(J.value, (I, V) => (t(), a("text", {
            key: `tx-${V}`,
            x: g(I),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ee(I)), 9, am))), 128))
        ]),
        (t(!0), a(z, null, L(d.value, (I, V) => (t(), a("g", {
          key: `s-${V}`
        }, [
          (t(!0), a(z, null, L(I.points, (Q, _) => (t(), a("circle", {
            key: `p-${V}-${_}`,
            cx: g(Q.x),
            cy: c(Q.y),
            r: B(Q),
            fill: m(V, I),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(V, I),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== V || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (W) => i.value = { s: V, p: _ },
            onMouseleave: U[0] || (U[0] = (W) => i.value = null)
          }, null, 40, nm))), 128))
        ]))), 128))
      ], 8, Yf)),
      R.value ? (t(), D(Ze, {
        key: 0,
        label: R.value.point.label ?? R.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(R.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${q(R.value.point.y)}`,
        share: p.value && R.value.point.r != null ? String(R.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && d.value.length > 1 ? (t(), a("div", lm, [
        (t(!0), a(z, null, L(d.value, (I, V) => (t(), a("span", {
          key: `l-${V}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: m(V, I) }),
            "aria-hidden": "true"
          }, null, 4),
          N(" " + f(I.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), om = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, sm = ["width", "height", "viewBox"], rm = ["points"], im = ["x1", "y1", "x2", "y2"], um = ["points", "fill", "stroke"], dm = ["cx", "cy", "fill", "onMouseenter"], cm = ["x", "y", "text-anchor"], fm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, mm = { class: "truncate" }, Zw = /* @__PURE__ */ A({
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
      () => l.series.map((c, C) => ({
        ...c,
        color: c.color ?? n[C % n.length]
      }))
    ), s = k(() => r.value[0]?.points.map((c) => c.label) ?? []), i = k(() => s.value.length), u = k(() => l.height), d = k(() => u.value / 2), m = k(() => u.value / 2 - 34), b = k(() => {
      const c = Math.max(...r.value.flatMap((P) => P.points.map((J) => J.value)), 0);
      if (c <= 0)
        return 1;
      const C = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((P) => c <= P * C) ?? 10) * C;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(c, C) {
      const B = p(c);
      return {
        x: d.value + Math.cos(B) * m.value * C,
        y: d.value + Math.sin(B) * m.value * C
      };
    }
    function M(c) {
      return Array.from({ length: i.value }, (C, B) => {
        const P = h(B, c);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = k(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: M(c) }))), S = k(
      () => r.value.map((c) => {
        const C = c.points.map((B) => Math.max(0, B.value) / b.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: C.map((B, P) => {
            const J = h(P, B);
            return `${J.x.toFixed(2)},${J.y.toFixed(2)}`;
          }).join(" "),
          dots: C.map((B, P) => h(P, B))
        };
      })
    ), y = k(
      () => s.value.map((c, C) => {
        const B = p(C), P = d.value + Math.cos(B) * (m.value + 14), J = d.value + Math.sin(B) * (m.value + 14), E = Math.cos(B);
        return {
          label: c,
          x: P,
          y: J + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), v = Z(null), g = (c) => l.format ? l.format(c) : new Intl.NumberFormat().format(c);
    return (c, C) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", om, [
      (t(), a("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, L(w.value, (B) => (t(), a("polygon", {
          key: B.f,
          points: B.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, rm))), 128)),
        (t(!0), a(z, null, L(s.value, (B, P) => (t(), a("line", {
          key: `spoke-${P}`,
          x1: d.value,
          y1: d.value,
          x2: h(P, 1).x,
          y2: h(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, im))), 128)),
        (t(!0), a(z, null, L(S.value, (B, P) => (t(), a("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: B.outline,
            fill: B.color,
            "fill-opacity": "0.16",
            stroke: B.color,
            "stroke-width": "2"
          }, null, 8, um),
          (t(!0), a(z, null, L(B.dots, (J, E) => (t(), a("circle", {
            key: E,
            cx: J.x,
            cy: J.y,
            r: "3",
            fill: B.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => v.value = {
              series: B.name,
              axis: s.value[E],
              value: B.values[E]?.value ?? 0
            },
            onMouseleave: C[0] || (C[0] = (ee) => v.value = null)
          }, null, 40, dm))), 128))
        ]))), 128)),
        (t(!0), a(z, null, L(y.value, (B, P) => (t(), a("text", {
          key: `l-${P}`,
          x: B.x,
          y: B.y,
          "text-anchor": B.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(B.label), 9, cm))), 128))
      ], 8, sm)),
      e.showLegend ? (t(), a("ul", fm, [
        (t(!0), a(z, null, L(r.value, (B, P) => (t(), a("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: B.color })
          }, null, 4),
          o("span", mm, f(B.name), 1)
        ]))), 128))
      ])) : $("", !0),
      v.value ? (t(), D(Ze, {
        key: 1,
        label: `${v.value.series} — ${v.value.axis}`,
        value: g(v.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), pm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, vm = ["width", "height", "viewBox"], gm = ["cx", "cy", "r"], hm = ["d", "fill", "fill-opacity", "onMouseenter"], bm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, xm = { class: "min-w-0 flex-1 truncate capitalize" }, ym = { class: "font-medium tabular-nums" }, Jw = /* @__PURE__ */ A({
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
    ], r = Z(null), s = k(() => l.height), i = k(() => s.value / 2), u = k(() => s.value / 2 - 6), d = k(() => Math.max(...l.data.map((M) => Math.max(0, M.value)), 0)), m = k(() => {
      const M = l.data.length;
      if (M === 0 || d.value <= 0)
        return [];
      const w = Math.PI * 2 / M;
      return l.data.map((S, y) => {
        const v = Math.sqrt(Math.max(0, S.value) / d.value), g = u.value * v, c = y * w - Math.PI / 2, C = c + w;
        return {
          ...S,
          color: n[y % n.length],
          share: d.value === 0 ? 0 : S.value / d.value,
          path: b(i.value, c, C, g)
        };
      });
    });
    function b(M, w, S, y) {
      if (y <= 0)
        return "";
      if (S - w >= Math.PI * 2 - 1e-6)
        return `M${M - y},${M} A${y},${y} 0 1 1 ${M + y},${M} A${y},${y} 0 1 1 ${M - y},${M} Z`;
      const v = S - w > Math.PI ? 1 : 0, g = M + Math.cos(w) * y, c = M + Math.sin(w) * y, C = M + Math.cos(S) * y, B = M + Math.sin(S) * y;
      return `M${M},${M} L${g.toFixed(2)},${c.toFixed(2)} A${y.toFixed(2)},${y.toFixed(2)} 0 ${v} 1 ${C.toFixed(2)},${B.toFixed(2)} Z`;
    }
    const p = k(() => [0.5, 0.75, 1].map((M) => u.value * M)), h = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, w) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", pm, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, L(p.value, (S) => (t(), a("circle", {
          key: S,
          cx: i.value,
          cy: i.value,
          r: S,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, gm))), 128)),
        (t(!0), a(z, null, L(m.value, (S, y) => (t(), a("path", {
          key: y,
          d: S.path,
          fill: S.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === y ? 0.75 : 0.3,
          onMouseenter: (v) => r.value = y,
          onMouseleave: w[0] || (w[0] = (v) => r.value = null)
        }, null, 40, hm))), 128))
      ], 8, vm)),
      e.showLegend ? (t(), a("ul", bm, [
        (t(!0), a(z, null, L(m.value, (S, y) => (t(), a("li", {
          key: y,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: S.color })
          }, null, 4),
          o("span", xm, f(S.label), 1),
          o("span", ym, f(h(S.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), D(Ze, {
        key: 1,
        label: m.value[r.value].label,
        value: h(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), km = ["width", "height"], $m = ["x1", "x2", "y1", "y2"], wm = ["x", "y"], Cm = ["x", "y"], Sm = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Mm = ["x", "y", "width", "height", "fill", "fill-opacity"], Bm = ["d", "stroke"], _m = ["cx", "cy", "fill"], Pm = ["x", "y"], zm = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Am = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, jm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Om = { class: "text-xs font-semibold tabular-nums" }, Lm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Vm = { class: "text-muted-foreground" }, Yw = /* @__PURE__ */ A({
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
    const l = e, n = Z(null), r = Z(560), s = Z(null);
    let i = null;
    fe(() => {
      i = new ResizeObserver((V) => {
        r.value = Math.max(160, V[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ve(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], m = k(
      () => l.bars.map((V, Q) => ({
        ...V,
        color: V.color ?? u[Q % u.length]
      }))
    ), b = k(
      () => l.lines.map((V, Q) => ({
        ...V,
        color: V.color ?? d[Q % d.length]
      }))
    ), p = k(
      () => m.value[0]?.points.map((V) => V.label) ?? b.value[0]?.points.map((V) => V.label) ?? []
    ), h = k(() => p.value.length), M = k(() => l.lineAxis === "right"), w = k(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), S = k(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function y(V) {
      const Q = Math.max(...V, 0);
      if (Q <= 0)
        return 1;
      const _ = 10 ** Math.floor(Math.log10(Q));
      return ([1, 2, 2.5, 5, 10].find((G) => Q <= G * _) ?? 10) * _;
    }
    const v = k(
      () => y([
        ...m.value.flatMap((V) => V.points.map((Q) => Q.value)),
        ...M.value ? [] : b.value.flatMap((V) => V.points.map((Q) => Q.value))
      ])
    ), g = k(
      () => M.value ? y(b.value.flatMap((V) => V.points.map((Q) => Q.value))) : v.value
    ), c = k(() => S.value.w / Math.max(1, h.value)), C = k(() => c.value * 0.6), B = k(() => C.value / Math.max(1, m.value.length));
    function P(V) {
      return w.value.left + V * c.value + c.value / 2;
    }
    const J = k(
      () => m.value.flatMap(
        (V, Q) => V.points.map((_, W) => {
          const G = Math.max(0, _.value) / v.value * S.value.h;
          return {
            x: P(W) - C.value / 2 + Q * B.value,
            y: w.value.top + S.value.h - G,
            w: Math.max(0, B.value - 2),
            h: G,
            color: V.color,
            index: W,
            name: V.name,
            value: _.value,
            label: _.label
          };
        })
      )
    ), E = k(
      () => b.value.map((V) => {
        const Q = V.points.map((_, W) => ({
          x: P(W),
          y: w.value.top + S.value.h - Math.max(0, _.value) / g.value * S.value.h,
          value: _.value
        }));
        return {
          ...V,
          pts: Q,
          d: Q.map((_, W) => `${W === 0 ? "M" : "L"}${_.x.toFixed(2)},${_.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((V) => ({
        y: w.value.top + S.value.h * V,
        left: v.value * (1 - V),
        right: g.value * (1 - V)
      }))
    ), q = k(() => Math.max(1, Math.ceil(h.value / 10)));
    function R(V) {
      return V === h.value - 1 || V % q.value === 0;
    }
    const T = (V) => l.format ? l.format(V) : U(V);
    function U(V) {
      return Math.abs(V) >= 1e6 ? `${(V / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(V) >= 1e3 ? `${(V / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(V * 100) / 100);
    }
    const I = k(() => {
      if (s.value === null)
        return null;
      const V = s.value;
      return {
        label: p.value[V],
        rows: [
          ...m.value.map((Q) => ({
            name: Q.name,
            color: Q.color,
            value: Q.points[V]?.value ?? 0
          })),
          ...b.value.map((Q) => ({
            name: Q.name,
            color: Q.color,
            value: Q.points[V]?.value ?? 0
          }))
        ]
      };
    });
    return (V, Q) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: Q[0] || (Q[0] = (_) => s.value = null)
        }, [
          (t(!0), a(z, null, L(ee.value, (_) => (t(), a("line", {
            key: `g-${_.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, $m))), 128)),
          (t(!0), a(z, null, L(ee.value, (_) => (t(), a("text", {
            key: `lt-${_.y}`,
            x: w.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(U(_.left)), 9, wm))), 128)),
          M.value ? (t(!0), a(z, { key: 0 }, L(ee.value, (_) => (t(), a("text", {
            key: `rt-${_.y}`,
            x: r.value - w.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(U(_.right)), 9, Cm))), 128)) : $("", !0),
          (t(!0), a(z, null, L(p.value, (_, W) => (t(), a("rect", {
            key: `hit-${W}`,
            x: w.value.left + W * c.value,
            y: w.value.top,
            width: c.value,
            height: S.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === W ? 0.4 : 0,
            onMouseenter: (G) => s.value = W
          }, null, 40, Sm))), 128)),
          (t(!0), a(z, null, L(J.value, (_, W) => (t(), a("rect", {
            key: `b-${W}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Mm))), 128)),
          (t(!0), a(z, null, L(E.value, (_, W) => (t(), a("g", {
            key: `l-${W}`
          }, [
            o("path", {
              d: _.d,
              fill: "none",
              stroke: _.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Bm),
            s.value !== null && _.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, _m)) : $("", !0)
          ]))), 128)),
          (t(!0), a(z, null, L(p.value, (_, W) => ue((t(), a("text", {
            key: `x-${W}`,
            x: P(W),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(_), 9, Pm)), [
            [je, R(W)]
          ])), 128))
        ], 40, km)),
        I.value ? (t(), a("div", zm, [
          o("p", Am, f(I.value.label), 1),
          (t(!0), a(z, null, L(I.value.rows, (_, W) => (t(), a("div", {
            key: W,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: _.color })
            }, null, 4),
            o("span", jm, f(_.name), 1),
            o("span", Om, f(T(_.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), a("div", Lm, [
          (t(!0), a(z, null, L([...m.value, ...b.value], (_, W) => (t(), a("span", {
            key: W,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ne({ background: _.color })
            }, null, 4),
            o("span", Vm, f(_.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Dm = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Tm = { class: "text-muted-foreground" }, Fm = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Im = ["width", "height"], Em = ["x", "y"], Nm = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Rm = ["x", "y"], Um = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Hm = { class: "text-[11px] font-medium capitalize" }, qm = { class: "text-muted-foreground text-[11px] capitalize" }, Km = { class: "text-sm font-semibold tabular-nums" }, Gm = { class: "text-muted-foreground text-xs font-normal" }, Xw = /* @__PURE__ */ A({
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
    const l = e, n = Z(null), r = Z(560), s = Z(null);
    let i = null;
    fe(() => {
      i = new ResizeObserver((C) => {
        r.value = Math.max(160, C[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ve(() => i?.disconnect());
    const u = k(() => l.series[0]?.points.map((C) => C.label) ?? []), d = k(() => l.series.length), m = k(() => u.value.length), b = k(() => Math.min(140, Math.max(60, r.value * 0.16))), p = k(() => Math.max(1, r.value - b.value - 8)), h = k(() => p.value / Math.max(1, m.value)), M = k(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function w(C) {
      if (C === 0)
        return "var(--muted)";
      const B = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(C / B * 100)}%, var(--muted))`;
    }
    function S(C) {
      for (let B = 0; B < l.buckets.length; B++) {
        const P = l.buckets[B].max;
        if (P === void 0 || C < P)
          return B;
      }
      return l.buckets.length - 1;
    }
    const y = k(
      () => l.series.flatMap(
        (C, B) => C.points.map((P, J) => {
          const E = S(P.value);
          return {
            row: B,
            col: J,
            x: b.value + J * h.value,
            y: 4 + B * M.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, M.value - 4),
            colour: w(E),
            label: P.label,
            value: P.value,
            rowName: C.name,
            bucketLabel: l.buckets[E].label
          };
        })
      )
    ), v = k(() => h.value < 2), g = k(() => s.value ? y.value.find((C) => C.row === s.value.row && C.col === s.value.col) ?? null : null), c = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, B) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      d.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        o("div", Dm, [
          (t(!0), a(z, null, L(e.buckets, (P, J) => (t(), a("span", {
            key: J,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: w(J) })
            }, null, 4),
            o("span", Tm, f(P.label), 1)
          ]))), 128))
        ]),
        v.value ? (t(), a("p", Fm, f(m.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: B[0] || (B[0] = (P) => s.value = null)
        }, [
          (t(!0), a(z, null, L(e.series, (P, J) => (t(), a("text", {
            key: `r-${J}`,
            x: b.value - 10,
            y: 4 + J * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(P.name), 9, Em))), 128)),
          (t(!0), a(z, null, L(y.value, (P, J) => (t(), a("rect", {
            key: J,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (E) => s.value = { row: P.row, col: P.col }
          }, null, 40, Nm))), 128)),
          e.showColumnLabels && !v.value ? (t(!0), a(z, { key: 0 }, L(u.value, (P, J) => (t(), a("text", {
            key: `c-${J}`,
            x: b.value + J * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(P), 9, Rm))), 128)) : $("", !0)
        ], 40, Im)),
        g.value ? (t(), a("div", Um, [
          o("p", Hm, f(g.value.label), 1),
          o("p", qm, f(g.value.rowName), 1),
          o("p", Km, [
            N(f(c(g.value.value)) + " ", 1),
            o("span", Gm, "(" + f(g.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Wm = ["viewBox"], Zm = { key: 0 }, Jm = ["id"], Ym = ["stop-color"], Xm = ["stop-color"], Qm = ["d", "fill"], ep = ["d", "stroke"], Et = 100, Re = 30, at = /* @__PURE__ */ A({
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
      const d = l.data.map((h) => h.value);
      if (d.length < 2)
        return [];
      const m = Math.min(...d), p = Math.max(...d) - m || 1;
      return d.map((h, M) => ({
        x: M / (d.length - 1) * Et,
        y: Re - (h - m) / p * (Re - 4) - 2
      }));
    });
    function s(d) {
      const m = d.length;
      if (m < 2)
        return "";
      const b = [], p = [];
      for (let w = 0; w < m - 1; w++)
        b[w] = d[w + 1].x - d[w].x, p[w] = b[w] === 0 ? 0 : (d[w + 1].y - d[w].y) / b[w];
      const h = [p[0]];
      for (let w = 1; w < m - 1; w++)
        if (p[w - 1] * p[w] <= 0)
          h[w] = 0;
        else {
          const S = 2 * b[w] + b[w - 1], y = b[w] + 2 * b[w - 1];
          h[w] = (S + y) / (S / p[w - 1] + y / p[w]);
        }
      h[m - 1] = p[m - 2];
      let M = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let w = 0; w < m - 1; w++) {
        const S = b[w] / 3;
        M += ` C${(d[w].x + S).toFixed(2)},${(d[w].y + h[w] * S).toFixed(2)} ${(d[w + 1].x - S).toFixed(2)},${(d[w + 1].y - h[w + 1] * S).toFixed(2)} ${d[w + 1].x.toFixed(2)},${d[w + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = k(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((m, b) => `${b === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), u = k(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Re} L${d[0].x.toFixed(2)},${Re} Z`;
    });
    return (d, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Et} ${Re}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Zm, [
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
          }, null, 8, Ym),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Xm)
        ], 8, Jm)
      ])) : $("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${x(n)})`
      }, null, 8, Qm)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, ep)
    ], 12, Wm)) : $("", !0);
  }
}), tp = { class: "flex items-center gap-1 text-xs" }, ap = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, np = {
  key: 0,
  class: "text-muted-foreground truncate"
}, da = /* @__PURE__ */ A({
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
    return (u, d) => (t(), a("span", tp, [
      o("span", {
        class: j(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", ap, f(s.value), 1),
        N(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", np, f(e.comparison), 1)) : $("", !0)
    ]));
  }
}), lp = ["aria-label"], Fe = /* @__PURE__ */ A({
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
      style: ne(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(z, null, L(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: j(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, lp));
  }
}), op = ["data-collapsed"], sp = { class: "flex flex-wrap items-start justify-between gap-2" }, rp = { class: "flex min-w-0 items-start gap-2" }, ip = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, up = ["d"], dp = { class: "min-w-0" }, cp = { class: "text-sm font-medium" }, fp = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, mp = { class: "flex shrink-0 items-center gap-1.5" }, pp = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, vp = ["aria-pressed", "onClick"], gp = ["aria-expanded", "aria-label", "title"], hp = ["aria-label"], bp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xp = ["d"], yp = /* @__PURE__ */ A({
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
    const l = e, n = ba(), r = Z(l.defaultCollapsed), s = k(() => !!l.icon && !n.icon), i = k(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (u, d) => (t(), a("div", {
      class: j(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", sp, [
        o("div", rp, [
          K(u.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", ip, [
              o("path", {
                d: x(ie)(e.icon)
              }, null, 8, up)
            ])) : $("", !0)
          ]),
          o("div", dp, [
            o("p", cp, f(e.label), 1),
            e.description ? (t(), a("p", fp, f(e.description), 1)) : $("", !0),
            K(u.$slots, "trend")
          ])
        ]),
        o("div", mp, [
          K(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", pp, [
            (t(!0), a(z, null, L(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: j([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (b) => u.$emit("update:period", m.value)
            }, f(m.label), 11, vp))), 128))
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
          ], 8, gp)) : $("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (m) => u.$emit("hide"))
          }, [
            (t(), a("svg", bp, [
              o("path", {
                d: x(ie)("eye-off")
              }, null, 8, xp)
            ]))
          ], 8, hp)) : $("", !0)
        ])
      ]),
      r.value ? $("", !0) : (t(), a("div", {
        key: 0,
        style: ne(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), D(Fe, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), a("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ne({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : K(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, op));
  }
}), kp = ["aria-pressed", "aria-label", "title"], $p = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wp = ["d"], Cp = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Sp = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Mp = ["href"], Bp = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, _p = ["d"], Pp = ["aria-label", "onClick"], zp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ap = ["d"], jp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Op = ["d"], Lp = {
  key: 0,
  class: "flex flex-col gap-1"
}, Vp = ["onClick"], Dp = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tp = ["d"], Fp = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Ip = /* @__PURE__ */ A({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = Z(!1), i = Z(!1), u = k(
      () => n.catalog.filter((b) => !n.items.some((p) => p.id === b.id))
    );
    function d(b) {
      r(
        "update:items",
        n.items.filter((p) => p.id !== b)
      );
    }
    function m(b) {
      r("update:items", [...n.items, b]), i.value = !1;
    }
    return (b, p) => (t(), a(z, null, [
      F(yp, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (h) => r("hide"))
      }, {
        actions: O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (h) => s.value = !s.value)
          }, [
            (t(), a("svg", $p, [
              o("path", {
                d: x(ie)(s.value ? "check" : "pencil")
              }, null, 8, wp)
            ]))
          ], 8, kp)
        ]),
        default: O(() => [
          e.items.length === 0 ? (t(), a("div", Cp, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            F(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: O(() => [...p[6] || (p[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", Sp, [
            (t(!0), a(z, null, L(e.items, (h) => (t(), a("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", Bp, [
                  o("path", {
                    d: x(ie)(h.icon)
                  }, null, 8, _p)
                ])),
                N(" " + f(h.label), 1)
              ], 8, Mp),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (M) => d(h.id)
              }, [
                (t(), a("svg", zp, [
                  o("path", {
                    d: x(ie)("x")
                  }, null, 8, Ap)
                ]))
              ], 8, Pp)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), a("svg", jp, [
                o("path", {
                  d: x(ie)("plus")
                }, null, 8, Op)
              ])),
              p[8] || (p[8] = N(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      F(ut, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (h) => i.value = !1)
      }, {
        footer: O(() => [
          F(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: O(() => [...p[9] || (p[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: O(() => [
          u.value.length ? (t(), a("ul", Lp, [
            (t(!0), a(z, null, L(u.value, (h) => (t(), a("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => m(h)
              }, [
                (t(), a("svg", Dp, [
                  o("path", {
                    d: x(ie)(h.icon)
                  }, null, 8, Tp)
                ])),
                N(" " + f(h.label), 1)
              ], 8, Vp)
            ]))), 128))
          ])) : (t(), a("p", Fp, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Ep = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Np = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Rp = { class: "relative w-full max-w-xl" }, Up = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hp = ["d"], qp = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Kp = ["data-slot"], Gp = { class: "px-5 py-4" }, Wp = { class: "mb-3 text-sm font-semibold" }, Zp = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Jp = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yp = ["d"], Xp = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, Qw = /* @__PURE__ */ A({
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
    const l = e, n = Z(""), r = k(() => {
      const d = l.linkComponent;
      return typeof d == "string" ? d : Ut(d);
    }), s = Je({
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
        links: d ? m.links.filter((b) => b.label.toLowerCase().includes(d)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (d, m) => (t(), a("div", {
      class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      o("header", null, [
        o("h1", Ep, f(e.title), 1),
        e.description ? (t(), a("p", Np, f(e.description), 1)) : $("", !0)
      ]),
      o("div", Rp, [
        (t(), a("svg", Up, [
          o("path", {
            d: x(ie)("search")
          }, null, 8, Hp)
        ])),
        F(pe, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (b) => n.value = b),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), a("div", qp, [
        (t(!0), a(z, null, L(u.value, (b) => (t(), a("section", {
          key: b.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${b.key}`
        }, [
          o("div", Gp, [
            o("h2", Wp, f(b.title), 1),
            o("div", Zp, [
              (t(!0), a(z, null, L(b.links, (p) => (t(), D(be(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: j(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: O(() => [
                  (t(), a("svg", Jp, [
                    o("path", {
                      d: x(ie)(p.icon)
                    }, null, 8, Yp)
                  ])),
                  N(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Kp))), 128))
      ])) : (t(), a("p", Xp, ' Nothing matches "' + f(n.value) + '". ', 1))
    ], 2));
  }
}), Qp = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, ev = { class: "flex flex-1 flex-col gap-1 p-4" }, tv = { class: "text-muted-foreground relative text-xs font-medium" }, av = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, nv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, lv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, ov = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, e4 = /* @__PURE__ */ A({
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
    return (n, r) => (t(), a("div", Qp, [
      o("div", ev, [
        o("p", tv, f(e.label), 1),
        e.loading ? (t(), D(Fe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", av, " Could not load ")) : (t(), a("span", nv, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(da, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", lv, f(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", ov, [
        F(at, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), sv = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, rv = { class: "flex flex-col gap-1 p-4" }, iv = { class: "flex items-start justify-between gap-2" }, uv = { class: "text-sm font-medium" }, dv = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, cv = { class: "mt-1 flex flex-wrap items-center gap-2" }, fv = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, mv = {
  key: 0,
  class: "-mb-px"
}, Qe = /* @__PURE__ */ A({
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
    return (i, u) => (t(), a("div", sv, [
      o("div", rv, [
        o("div", iv, [
          o("p", uv, f(e.label), 1),
          K(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", dv, f(e.caption), 1)) : $("", !0),
        o("div", cv, [
          e.loading ? (t(), D(Fe, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", fv, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: j(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", mv, [
        F(at, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), pv = { class: "relative flex flex-col gap-2" }, vv = ["aria-label"], gv = ["onMouseenter"], hv = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, bv = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, xv = { class: "truncate" }, yv = { class: "text-sm font-semibold tabular-nums" }, t4 = /* @__PURE__ */ A({
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
    ], r = k(() => l.segments.reduce((b, p) => b + Math.max(0, p.value), 0)), s = k(() => Math.max(l.total ?? r.value, r.value, 1)), i = k(
      () => l.segments.map((b, p) => {
        const h = Math.max(0, b.value) / s.value;
        return {
          ...b,
          color: b.color ?? n[p % n.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: b.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (b) => l.format ? l.format(b) : new Intl.NumberFormat().format(b), d = Z(null), m = (b) => `${(b * 100).toFixed(b > 0 && b < 0.01 ? 1 : 0)}%`;
    return (b, p) => (t(), a("div", pv, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${u(h.value)}`).join(", ")
      }, [
        (t(!0), a(z, null, L(i.value, (h, M) => (t(), a("span", {
          key: M,
          class: j(["h-full transition-all", [
            M === 0 ? "rounded-l-full" : "",
            M === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: h.width,
            background: h.color,
            opacity: d.value === null || d.value === M ? 1 : 0.4
          }),
          onMouseenter: (w) => d.value = M,
          onMouseleave: p[0] || (p[0] = (w) => d.value = null)
        }, null, 46, gv))), 128))
      ], 12, vv),
      e.showLegend ? (t(), a("div", hv, [
        (t(!0), a(z, null, L(i.value, (h, M) => (t(), a("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", bv, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: h.color })
            }, null, 4),
            o("span", xv, f(h.label), 1)
          ]),
          o("span", yv, f(u(h.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      d.value !== null ? (t(), D(Ze, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: m(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), kv = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, $v = ["data-heading"], wv = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Cv = { class: "text-muted-foreground truncate" }, Sv = ["aria-label"], a4 = /* @__PURE__ */ A({
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
    return (i, u) => (t(), a("div", kv, [
      (t(!0), a(z, null, L(s.value, (d) => (t(), a("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), a("div", {
          key: 0,
          class: j(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? n[d.tone] : "text-muted-foreground"])
        }, f(d.label), 3)) : (t(), a("div", wv, [
          o("span", Cv, f(d.label), 1),
          o("span", {
            class: j(["shrink-0 font-medium tabular-nums", d.tone ? n[d.tone] : "text-foreground"])
          }, f(d.value), 3)
        ])),
        d.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(z, null, L(d.segments, (m, b) => (t(), a("span", {
            key: b,
            class: j(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ne({ width: m.width })
          }, null, 6))), 128))
        ], 8, Sv)) : $("", !0)
      ], 8, $v))), 128))
    ]));
  }
}), Mv = {
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
}, Bv = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function _v(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Pv(e, l) {
  return l || (e ? Mv[_v(e)] ?? "neutral" : "neutral");
}
function zv(e, l) {
  return Bv[Pv(e, l)];
}
const ge = /* @__PURE__ */ A({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, n = k(() => zv(l.status, l.tone));
    return (r, s) => (t(), D(Ue, {
      variant: n.value,
      class: j(l.class)
    }, {
      default: O(() => [
        K(r.$slots, "default", {}, () => [
          N(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), Av = ["data-layout"], jv = ["src", "alt"], Ov = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, Lv = ["src"], Vv = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Dv = ["onMouseenter"], Tv = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Fv = { class: "min-w-0" }, Iv = { class: "truncate text-sm font-medium" }, Ev = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Nv = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Rv = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Uv = { class: "min-w-0" }, Hv = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, qv = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Kv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gv = ["d"], Wv = ["aria-label"], Zv = /* @__PURE__ */ A({
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
    }, r = e, s = l, i = Z(0);
    function u(y) {
      if (typeof y != "string")
        return null;
      const v = y.trim();
      return v === "" ? null : /^(https?:)?\/\//i.test(v) ? v : null;
    }
    const d = k(() => {
      const y = [r.item.image, ...r.item.images ?? []].map(u).filter((v) => v !== null);
      return [...new Set(y)];
    }), m = k(() => d.value[i.value] ?? d.value[0] ?? null), b = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((y) => y[0]?.toUpperCase() ?? "").join("")
    ), p = k(() => {
      const y = r.item.progress;
      if (!y)
        return null;
      const v = Math.max(y.total ?? 100, y.value, 1);
      return `${Math.min(100, Math.max(0, y.value / v * 100)).toFixed(2)}%`;
    }), h = k(() => d.value.length > 1 ? d.value[1] : null), M = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function S(y) {
      y.stopPropagation(), s("cart", r.item.key);
    }
    return (y, v) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: j(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: v[0] || (v[0] = (g) => s("select", e.item.key)),
      onKeydown: v[1] || (v[1] = xa(ce((g) => s("select", e.item.key), ["prevent"]), ["enter"])),
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
        }, null, 8, jv)) : (t(), a("span", Ov, f(b.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, Lv)) : $("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), a("div", Vv, [
          (t(!0), a(z, null, L(d.value, (g, c) => (t(), a("span", {
            key: c,
            class: j(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (C) => i.value = c
          }, null, 42, Dv))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: j(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Tv, [
          o("div", Fv, [
            o("p", Iv, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", Ev, f(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), a("p", Nv, f(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), D(ge, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", Rv, [
          o("div", Uv, [
            e.item.price ? (t(), a("p", Hv, f(e.item.price), 1)) : $("", !0),
            w.value ? (t(), a("p", qv, f(w.value), 1)) : $("", !0)
          ]),
          M.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: S
          }, [
            (t(), a("svg", Kv, [
              o("path", {
                d: x(ie)("cart")
              }, null, 8, Gv)
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
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, Wv)) : $("", !0)
      ], 2)
    ], 42, Av));
  }
});
function Jv(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Yv(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Xv(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Qv = ["data-featured", "data-recommended"], eg = { class: "flex flex-col gap-1" }, tg = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, ag = { key: 0 }, ng = { key: 1 }, lg = { key: 2 }, og = { key: 3 }, sg = { class: "text-sm font-semibold" }, rg = { class: "flex items-baseline gap-1" }, ig = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, ug = { class: "text-muted-foreground text-sm" }, dg = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, cg = { class: "text-muted-foreground mt-1 text-xs" }, fg = { class: "flex flex-1 flex-col gap-2 text-sm" }, mg = { class: "flex min-w-0 items-start gap-2" }, pg = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, vg = ["d"], gg = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, hg = ["d"], bg = { class: "capitalize" }, xg = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, yg = { class: "text-foreground font-medium" }, kg = { class: "mt-auto flex gap-2 pt-2" }, $g = /* @__PURE__ */ A({
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
      return Object.entries(m).map(([b, p]) => ({
        key: b,
        label: b.replace(/_/g, " "),
        granted: Xv(p.value),
        display: Yv(p.value)
      }));
    }), d = k(() => n.plan.extraPerks ?? []);
    return (m, b) => (t(), a("article", {
      class: j(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", eg, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", tg, [
          e.plan.recommended ? (t(), a("span", ag, "Recommended")) : e.plan.featured ? (t(), a("span", ng, "Featured")) : $("", !0),
          e.plan.trial ? (t(), a("span", lg, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), a("span", og, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", sg, f(e.plan.name), 1),
        o("p", rg, [
          o("span", ig, f(s.value), 1),
          o("span", ug, f(x(Jv)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", dg, f(e.plan.shortDescription), 1)) : $("", !0),
        o("p", cg, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", fg, [
        (t(!0), a(z, null, L(u.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", mg, [
            o("span", {
              class: j(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", pg, [
                o("path", {
                  d: x(ie)("check")
                }, null, 8, vg)
              ])) : (t(), a("svg", gg, [
                o("path", {
                  d: x(ie)("x")
                }, null, 8, hg)
              ]))
            ], 2),
            o("span", bg, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", xg, f(p.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), a(z, null, L(d.value, (p, h) => (t(), a("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(p.key), 1),
          o("span", yg, f(p.value), 1)
        ]))), 128))
      ]),
      o("footer", kg, [
        F(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: b[0] || (b[0] = (p) => r("edit", e.plan.id))
        }, {
          default: O(() => [...b[2] || (b[2] = [
            N(" Edit ", -1)
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
          default: O(() => [...b[3] || (b[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Qv));
  }
}), wg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Cg = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Sg = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Mg = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Bg = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, n4 = /* @__PURE__ */ A({
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
      o("header", wg, [
        o("div", null, [
          e.title ? (t(), a("h1", Cg, f(e.title), 1)) : $("", !0),
          e.description ? (t(), a("p", Sg, f(e.description), 1)) : $("", !0)
        ]),
        F(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: O(() => [...s[3] || (s[3] = [
            N("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", Mg, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", Bg, [
        (t(!0), a(z, null, L(e.plans, (i) => (t(), D($g, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => n("edit", u)),
          onDelete: s[2] || (s[2] = (u) => n("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), _g = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Pg = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, zg = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Ag = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, jg = { class: "space-y-1.5" }, Og = { class: "space-y-1.5" }, Lg = { class: "space-y-1.5" }, Vg = { class: "space-y-1.5" }, Dg = { class: "space-y-1.5" }, Tg = { class: "flex items-center gap-3 text-sm" }, Fg = { class: "flex items-center gap-3 text-sm" }, Ig = { class: "flex items-center gap-3 text-sm" }, Eg = {
  key: 0,
  class: "space-y-1.5"
}, Ng = { class: "flex items-center gap-3 text-sm" }, Rg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Ug = { class: "space-y-1.5" }, Hg = ["value"], qg = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Kg = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Gg = ["id", "value", "onInput"], Wg = { class: "space-y-2" }, Zg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Jg = ["d"], Yg = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", rt = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", l4 = /* @__PURE__ */ A({
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
    }), r = e, s = l, i = He(n());
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
    function m(v, g) {
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
      const g = v ? { ...n(), ...v } : n();
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
    }), h = k(
      () => r.modules.map((v) => ({ value: v.key, label: v.label }))
    );
    function M(v) {
      const g = Object.fromEntries(r.modules.map((B) => [B.key, B])), c = new Set(v);
      for (const B of r.modules)
        if (!c.has(B.key))
          for (const P of B.children ?? [])
            c.delete(P);
      let C = !0;
      for (; C; ) {
        C = !1;
        for (const B of [...c])
          for (const P of g[B]?.requires ?? [])
            c.has(P) || (c.add(P), C = !0);
      }
      return [...c];
    }
    function w() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function S(v) {
      i.extraPerks = (i.extraPerks ?? []).filter((g, c) => c !== v);
    }
    function y() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((v) => v.key.trim() !== "")
      });
    }
    return (v, g) => (t(), a("form", {
      class: j(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-editor",
      onSubmit: ce(y, ["prevent"])
    }, [
      o("header", _g, [
        o("div", null, [
          o("h1", Pg, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          g[13] || (g[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        F(se, {
          type: "button",
          variant: "outline",
          onClick: g[0] || (g[0] = (c) => s("cancel"))
        }, {
          default: O(() => [...g[14] || (g[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", zg, [
        o("section", Ag, [
          g[26] || (g[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", jg, [
            F(he, { for: "plan-name" }, {
              default: O(() => [...g[15] || (g[15] = [
                N("Plan name", -1)
              ])]),
              _: 1
            }),
            F(pe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": g[1] || (g[1] = (c) => i.name = c),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", Og, [
            F(he, { for: "plan-short" }, {
              default: O(() => [...g[16] || (g[16] = [
                N("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            F(pe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": g[2] || (g[2] = (c) => i.shortDescription = c),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", Lg, [
            F(he, { for: "plan-description" }, {
              default: O(() => [...g[17] || (g[17] = [
                N("Plan description", -1)
              ])]),
              _: 1
            }),
            ue(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": g[3] || (g[3] = (c) => i.description = c),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: j(rt)
            }, null, 512), [
              [xe, i.description]
            ])
          ]),
          o("div", Vg, [
            F(he, { for: "plan-days" }, {
              default: O(() => [...g[18] || (g[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            ue(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": g[4] || (g[4] = (c) => i.days = c),
              class: j(Yg)
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
          o("div", Dg, [
            F(he, { for: "plan-price" }, {
              default: O(() => [...g[20] || (g[20] = [
                N("Price", -1)
              ])]),
              _: 1
            }),
            F(pe, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": g[5] || (g[5] = (c) => i.price = Number(c))
            }, null, 8, ["model-value"])
          ]),
          o("label", Tg, [
            F(x(De), {
              checked: !!i.featured,
              "onUpdate:checked": g[6] || (g[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            g[21] || (g[21] = N(" Featured ", -1))
          ]),
          o("label", Fg, [
            F(x(De), {
              checked: !!i.recommended,
              "onUpdate:checked": g[7] || (g[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            g[22] || (g[22] = N(" Recommended ", -1))
          ]),
          o("label", Ig, [
            F(x(De), {
              checked: !!i.trial,
              "onUpdate:checked": g[8] || (g[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            g[23] || (g[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Eg, [
            F(he, { for: "plan-trial-days" }, {
              default: O(() => [...g[24] || (g[24] = [
                N("Trial days", -1)
              ])]),
              _: 1
            }),
            F(pe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": g[9] || (g[9] = (c) => i.trialDays = Number(c))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", Ng, [
            F(x(De), {
              checked: i.active !== !1,
              "onUpdate:checked": g[10] || (g[10] = (c) => i.active = c)
            }, null, 8, ["checked"]),
            g[25] || (g[25] = N(" Active ", -1))
          ]),
          F(se, {
            type: "submit",
            disabled: e.processing
          }, {
            default: O(() => [
              N(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Rg, [
          g[33] || (g[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Ug, [
            F(he, null, {
              default: O(() => [...g[27] || (g[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            F(Bt, {
              modelValue: p.value,
              "onUpdate:modelValue": g[11] || (g[11] = (c) => p.value = c),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            F(he, { for: "plan-modules-overview" }, {
              default: O(() => [...g[28] || (g[28] = [
                N("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: j(rt),
              onInput: g[12] || (g[12] = (c) => m(
                "modules",
                c.target.value
              ))
            }, null, 40, Hg)
          ]),
          (t(!0), a(z, null, L(e.limits, (c) => (t(), a("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), a("label", qg, [
              F(x(De), {
                checked: !!u(c.key, !1),
                "onUpdate:checked": (C) => d(
                  c.key,
                  C,
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + f(c.label), 1)
            ])) : (t(), a(z, { key: 1 }, [
              F(he, {
                for: `plan-limit-${c.key}`
              }, {
                default: O(() => [
                  N(f(c.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              c.hint ? (t(), a("p", Kg, f(c.hint), 1)) : $("", !0),
              F(pe, {
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
            F(he, {
              for: `plan-overview-${c.key}`
            }, {
              default: O(() => [...g[30] || (g[30] = [
                N("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${c.key}`,
              value: i.perks?.[c.key]?.overview ?? "",
              class: j(rt),
              onInput: (C) => m(
                c.key,
                C.target.value
              )
            }, null, 40, Gg)
          ]))), 128)),
          o("div", Wg, [
            g[32] || (g[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(z, null, L(i.extraPerks ?? [], (c, C) => (t(), a("div", {
              key: C,
              class: "flex items-center gap-2"
            }, [
              F(pe, {
                modelValue: c.key,
                "onUpdate:modelValue": (B) => c.key = B,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(pe, {
                modelValue: c.value,
                "onUpdate:modelValue": (B) => c.value = B,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (B) => S(C)
              }, {
                default: O(() => [
                  (t(), a("svg", Zg, [
                    o("path", {
                      d: x(ie)("x")
                    }, null, 8, Jg)
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
              default: O(() => [...g[31] || (g[31] = [
                N(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Xg = { class: "flex flex-col gap-4" }, Qg = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, eh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, th = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, ah = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, nh = ["d"], lh = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, oh = ["aria-pressed"], sh = ["aria-pressed"], rh = {
  key: 0,
  class: "flex flex-col gap-2"
}, ih = ["aria-label"], uh = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, dh = ["aria-pressed", "onClick"], ch = ["aria-label"], fh = { class: "text-muted-foreground mr-1 text-xs font-medium" }, mh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, ph = ["data-slot"], vh = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, gh = { class: "text-muted-foreground text-xs tabular-nums" }, hh = { class: "flex items-center gap-2" }, bh = ["disabled"], xh = ["disabled"], _t = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(""), i = Ke(e, "modelValue"), u = He({}), d = He({});
    de(s, () => h());
    function m(E) {
      const ee = E.trim();
      if (ee === "")
        return null;
      const q = Number(ee);
      return Number.isFinite(q) ? q : null;
    }
    function b() {
      const E = {};
      for (const [ee, q] of Object.entries(d))
        E[ee] = { min: m(q.min), max: m(q.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: b() };
    }
    function h() {
      r("filter", p());
    }
    function M(E, ee) {
      u[E] = u[E] === ee ? null : ee, h();
    }
    function w(E) {
      return d[E] ?? { min: "", max: "" };
    }
    function S(E, ee, q) {
      const R = d[E] ?? { min: "", max: "" };
      d[E] = { ...R, [ee]: q }, h();
    }
    function y(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const v = k(() => n.facets.filter((E) => (E.kind ?? "chips") === "chips")), g = k(() => n.facets.filter((E) => E.kind === "range")), c = k(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), C = Z(1);
    de(
      () => n.items.map((E) => E.key).join(","),
      () => {
        C.value = 1;
      }
    );
    const B = k(() => {
      const E = n.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / E));
    }), P = k(() => {
      const E = n.pageSize;
      if (!E || E < 1)
        return n.items;
      const ee = (C.value - 1) * E;
      return n.items.slice(ee, ee + E);
    });
    function J(E) {
      C.value = Math.min(B.value, Math.max(1, E));
    }
    return (E, ee) => (t(), a("div", Xg, [
      c.value ? (t(), a("div", Qg, [
        o("div", eh, [
          e.searchable ? (t(), a("div", th, [
            (t(), a("svg", ah, [
              o("path", {
                d: x(ie)("search")
              }, null, 8, nh)
            ])),
            F(pe, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (q) => s.value = q),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: y
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : $("", !0),
          K(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", lh, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (q) => i.value = "grid")
            }, " Tiles ", 10, oh),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (q) => i.value = "list")
            }, " List ", 10, sh)
          ])) : $("", !0)
        ]),
        v.value.length || g.value.length ? (t(), a("div", rh, [
          (t(!0), a(z, null, L(v.value, (q) => (t(), a("div", {
            key: q.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": q.label ?? q.key
          }, [
            q.label ? (t(), a("span", uh, f(q.label), 1)) : $("", !0),
            (t(!0), a(z, null, L(q.options ?? [], (R) => (t(), a("button", {
              key: R.value,
              type: "button",
              class: j([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[q.key] === R.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[q.key] === R.value ? "true" : "false",
              onClick: (T) => M(q.key, R.value)
            }, f(R.label), 11, dh))), 128))
          ], 8, ih))), 128)),
          (t(!0), a(z, null, L(g.value, (q) => (t(), a("div", {
            key: q.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": q.label ?? q.key,
            "data-slot": "catalog-range"
          }, [
            o("span", fh, f(q.label ?? q.key), 1),
            F(pe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${q.label ?? q.key} from`,
              "model-value": w(q.key).min,
              "onUpdate:modelValue": (R) => S(q.key, "min", String(R))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            F(pe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${q.label ?? q.key} to`,
              "model-value": w(q.key).max,
              "onUpdate:modelValue": (R) => S(q.key, "max", String(R))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, ch))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), a("p", mh, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: j(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(z, null, L(P.value, (q) => (t(), D(Zv, {
          key: q.key,
          item: q,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (R) => r("select", R)),
          onCart: ee[4] || (ee[4] = (R) => r("cart", R))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, ph)),
      e.pageSize && B.value > 1 ? (t(), a("div", vh, [
        o("p", gh, " Page " + f(C.value) + " of " + f(B.value), 1),
        o("div", hh, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value <= 1,
            onClick: ee[5] || (ee[5] = (q) => J(C.value - 1))
          }, " Previous ", 8, bh),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value >= B.value,
            onClick: ee[6] || (ee[6] = (q) => J(C.value + 1))
          }, " Next ", 8, xh)
        ])
      ])) : $("", !0)
    ]));
  }
}), yh = ["aria-label"], kh = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, $h = { class: "min-w-0" }, wh = { class: "text-base font-semibold" }, Ch = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Sh = { class: "flex shrink-0 items-center gap-2" }, Mh = { class: "min-h-0 flex-1 overflow-y-auto" }, Bh = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Pt = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(null);
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
      const b = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (b.length === 0)
        return;
      const p = b[0], h = b[b.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), h.focus()) : !m.shiftKey && document.activeElement === h && (m.preventDefault(), p.focus());
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
    }), (m, b) => (t(), D(Ie, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
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
        default: O(() => [
          e.open ? (t(), a("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: j(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", kh, [
              o("div", $h, [
                o("h2", wh, f(e.title), 1),
                e.description ? (t(), a("p", Ch, f(e.description), 1)) : $("", !0)
              ]),
              o("div", Sh, [
                K(m.$slots, "header-actions"),
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
            o("div", Mh, [
              K(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", Bh, [
              K(m.$slots, "footer")
            ])) : $("", !0)
          ], 10, yh)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Be() {
  return { query: "", selected: {}, ranges: {} };
}
function _h(e, l) {
  const n = e.metrics?.[l];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Ph(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function zt(e, l) {
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
    if (!Ph(_h(e, r), s))
      return !1;
  return !0;
}
function zh(e, l) {
  const n = l.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function et(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Ah = { class: "flex flex-col gap-6 p-4" }, jh = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Oh = { class: "text-sm font-semibold" }, Lh = { class: "flex flex-wrap items-center gap-1.5" }, Vh = ["aria-pressed", "onClick"], Dh = { class: "text-sm font-semibold" }, Th = { class: "flex flex-wrap items-center gap-1.5" }, Fh = { key: 0 }, ca = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(""), i = He({}), u = He({}), d = k(
      () => n.facets.filter((B) => (B.kind ?? "chips") === "chips")
    ), m = k(() => n.facets.filter((B) => B.kind === "range"));
    function b(B) {
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
        u[B] = { min: b(P.min), max: b(P.max) };
    }
    de(
      () => n.open,
      (B) => {
        B && p();
      }
    );
    function h(B) {
      const P = B.trim();
      if (P === "")
        return null;
      const J = Number(P);
      return Number.isFinite(J) ? J : null;
    }
    function M() {
      const B = {};
      for (const [P, J] of Object.entries(u))
        B[P] = { min: h(J.min), max: h(J.max) };
      return B;
    }
    function w() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: M()
      };
    }
    const S = k(() => {
      let B = n.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const P of Object.values(i))
        P && (B += 1);
      for (const P of Object.values(M()))
        (P.min !== null || P.max !== null) && (B += 1);
      return B;
    });
    function y(B, P) {
      i[B] = i[B] === P ? null : P;
    }
    function v(B) {
      return u[B] ?? { min: "", max: "" };
    }
    function g(B, P, J) {
      const E = u[B] ?? { min: "", max: "" };
      u[B] = { ...E, [P]: J };
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
        n.hideSearch ? { ...Be(), query: n.applied.query } : Be()
      );
    }
    return (B, P) => (t(), D(Pt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: P[2] || (P[2] = (J) => r("close"))
    }, {
      footer: O(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: C
        }, " Reset all "),
        F(se, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (J) => r("close"))
        }, {
          default: O(() => [...P[5] || (P[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        F(se, {
          size: "sm",
          onClick: c
        }, {
          default: O(() => [
            P[6] || (P[6] = N(" Apply", -1)),
            S.value ? (t(), a("span", Fh, " (" + f(S.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: O(() => [
        o("div", Ah, [
          e.hideSearch ? $("", !0) : (t(), a("label", jh, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            F(pe, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (J) => s.value = J),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(z, null, L(d.value, (J) => (t(), a("section", {
            key: J.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Oh, f(J.label ?? J.key), 1),
            o("div", Lh, [
              (t(!0), a(z, null, L(J.options ?? [], (E) => (t(), a("button", {
                key: E.value,
                type: "button",
                class: j([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[J.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[J.key] === E.value ? "true" : "false",
                onClick: (ee) => y(J.key, E.value)
              }, f(E.label), 11, Vh))), 128))
            ])
          ]))), 128)),
          (t(!0), a(z, null, L(m.value, (J) => (t(), a("section", {
            key: J.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Dh, f(J.label ?? J.key), 1),
            o("div", Th, [
              F(pe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${J.label ?? J.key} from`,
                "model-value": v(J.key).min,
                "onUpdate:modelValue": (E) => g(J.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              F(pe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${J.label ?? J.key} to`,
                "model-value": v(J.key).max,
                "onUpdate:modelValue": (E) => g(J.key, "max", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), Ih = ["aria-disabled"], Eh = ["disabled"], Nh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Rh = ["d"], Uh = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Hh = ["disabled"], qh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Kh = ["d"], Gh = /* @__PURE__ */ A({
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
    const n = Ke(e, "modelValue"), r = l, s = k(() => n.value <= e.min), i = k(() => e.max !== null && n.value >= e.max);
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
        onClick: m[0] || (m[0] = (b) => u(-1))
      }, [
        (t(), a("svg", Nh, [
          o("path", {
            d: x(ie)("minus")
          }, null, 8, Rh)
        ]))
      ], 8, Eh),
      o("span", Uh, f(n.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (b) => u(1))
      }, [
        (t(), a("svg", qh, [
          o("path", {
            d: x(ie)("plus")
          }, null, 8, Kh)
        ]))
      ], 8, Hh)
    ], 8, Ih));
  }
}), Wh = { class: "divide-border flex flex-col divide-y" }, Zh = { class: "min-w-0" }, Jh = { class: "truncate text-sm font-medium" }, Yh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Xh = { class: "flex shrink-0 items-center gap-2 text-sm" }, Qh = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, eb = {
  key: 2,
  class: "font-medium tabular-nums"
}, tb = ["aria-label", "onClick"], ab = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, nb = ["d"], lb = /* @__PURE__ */ A({
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
    return (s, i) => (t(), a("div", Wh, [
      (t(!0), a(z, null, L(e.items, (u) => (t(), a("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Zh, [
          o("p", Jh, f(u.label), 1),
          u.detail ? (t(), a("p", Yh, f(u.detail), 1)) : $("", !0)
        ]),
        o("div", Xh, [
          e.editable ? (t(), D(Gh, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => n("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), a("span", Qh, " ×" + f(u.qty), 1)) : $("", !0),
          u.amount ? (t(), a("span", eb, f(u.amount), 1)) : $("", !0),
          u.status ? (t(), D(ge, {
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
            (t(), a("svg", ab, [
              o("path", {
                d: x(ie)("trash")
              }, null, 8, nb)
            ]))
          ], 8, tb)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), ob = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, sb = { class: "border-b px-4 py-3" }, rb = { class: "text-sm font-medium" }, ib = { class: "flex-1 px-4 py-3" }, ub = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, db = { class: "text-foreground block font-medium" }, cb = { class: "mt-1 block" }, fb = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, mb = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, pb = { class: "tabular-nums" }, vb = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, gb = { class: "text-muted-foreground" }, hb = {
  key: 0,
  class: "tabular-nums"
}, bb = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, xb = { class: "text-muted-foreground" }, yb = { class: "tabular-nums" }, kb = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, $b = { class: "tabular-nums" }, wb = {
  key: 4,
  class: "pt-1"
}, Cb = /* @__PURE__ */ A({
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
    return (r, s) => (t(), a("aside", ob, [
      o("header", sb, [
        o("h2", rb, f(e.title), 1)
      ]),
      o("div", ib, [
        e.items.length === 0 ? (t(), a("p", ub, [
          o("span", db, f(e.emptyTitle), 1),
          o("span", cb, f(e.emptyDescription), 1)
        ])) : (t(), D(lb, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => n("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", fb, [
        e.subtotal ? (t(), a("div", mb, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", pb, f(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", vb, [
          o("span", gb, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", hb, f(e.discount), 1)) : $("", !0),
          K(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), a("div", bb, [
          o("span", xb, f(e.taxLabel), 1),
          o("span", yb, f(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), a("div", kb, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", $b, f(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), a("div", wb, [
          K(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Sb = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Mb = { class: "flex flex-col gap-4" }, Bb = { class: "flex flex-wrap items-start justify-between gap-3" }, _b = { class: "flex items-center gap-2" }, Pb = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, o4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(Be()), i = Z(!1), u = Ke(e, "cart"), d = Z(!1), m = k(
      () => n.items.filter((q) => zt(q, s.value))
    );
    function b(q) {
      s.value = { ...s.value, query: q.query };
    }
    function p(q) {
      s.value = {
        ...s.value,
        selected: q.selected,
        ranges: q.ranges,
        query: s.value.query
      }, i.value = !1;
    }
    function h(q) {
      return q ? n.parsePrice(q) : 0;
    }
    function M(q, R, T) {
      return {
        ...q,
        qty: R,
        amount: n.formatMoney(T * R)
      };
    }
    function w(q) {
      const R = zh(n.items, q);
      R && S(R.key);
    }
    function S(q) {
      const R = n.items.find((I) => I.key === q);
      if (!R || R.status === "out-of-stock")
        return;
      d.value = !1;
      const T = h(R);
      if (u.value.find((I) => I.key === q)) {
        u.value = u.value.map(
          (I) => I.key === q ? M(I, Number(I.qty ?? 1) + 1, T) : I
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: R.key,
          label: R.label,
          detail: R.caption ?? null,
          qty: 1,
          amount: n.formatMoney(T)
        }
      ];
    }
    function y(q, R) {
      const T = n.items.find((I) => I.key === q), U = h(T);
      u.value = u.value.map(
        (I) => I.key === q ? M(I, R, U) : I
      );
    }
    function v(q) {
      u.value = u.value.filter((R) => R.key !== q);
    }
    const g = k(
      () => u.value.reduce((q, R) => {
        const T = n.items.find((U) => U.key === R.key);
        return q + h(T) * Number(R.qty ?? 1);
      }, 0)
    ), c = k(
      () => n.discountRate > 0 ? Math.round(g.value * n.discountRate) : 0
    ), C = k(
      () => Math.round((g.value - c.value) * n.taxRate)
    ), B = k(
      () => u.value.length ? n.formatMoney(g.value) : null
    ), P = k(
      () => u.value.length && c.value > 0 ? `−${n.formatMoney(c.value)}` : null
    ), J = k(
      () => u.value.length && n.taxRate > 0 ? n.formatMoney(C.value) : null
    ), E = k(
      () => u.value.length ? n.formatMoney(
        g.value - c.value + C.value
      ) : null
    );
    function ee() {
      d.value = !0, r("pay", u.value);
    }
    return (q, R) => (t(), a(z, null, [
      o("div", Sb, [
        o("section", Mb, [
          o("div", Bb, [
            F(Me, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", _b, [
              x(et)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: R[0] || (R[0] = (T) => s.value = {
                  ...x(Be)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: R[1] || (R[1] = (T) => i.value = !0)
              }, [
                R[5] || (R[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                R[6] || (R[6] = N(" Filters ", -1)),
                x(et)(s.value) ? (t(), a("span", Pb, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          F(_t, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: b,
            onSelect: R[2] || (R[2] = (T) => r("select", T)),
            onCart: S,
            onScan: w
          }, null, 8, ["search-placeholder", "items"])
        ]),
        F(Cb, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: B.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: J.value,
          total: E.value,
          onQty: y,
          onRemove: v
        }, {
          pay: O(() => [
            K(q.$slots, "pay", {
              cart: u.value,
              paid: d.value,
              pay: ee
            }, () => [
              F(se, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: ee
              }, {
                default: O(() => [
                  N(f(d.value ? "Paid" : "Pay"), 1)
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
        onClose: R[3] || (R[3] = (T) => i.value = !1),
        onApply: p,
        onReset: R[4] || (R[4] = (T) => s.value = { ...x(Be)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), zb = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, Ab = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, jb = ["src", "alt"], Ob = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Lb = ["src"], Vb = { class: "flex items-start justify-between gap-3" }, Db = { class: "text-lg font-semibold tabular-nums" }, Tb = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Fb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Ib = { class: "grid grid-cols-2 gap-3" }, Eb = { class: "flex flex-col gap-2" }, Nb = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, s4 = /* @__PURE__ */ A({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(p) {
      let h = 0;
      for (const M of p)
        h = h * 31 + M.charCodeAt(0) >>> 0;
      return h;
    }
    function i(p, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((w, S) => ({
        label: w,
        value: Math.max(0, Math.round(p + Math.sin(S + h) * p * 0.18))
      }));
    }
    const u = k(() => n.item?.kind === "unit"), d = k(() => {
      const p = n.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), m = k(() => {
      const p = n.item;
      if (!p)
        return [];
      const h = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(p.key) % 5 + 1);
    }), b = k(
      () => !!n.item && !u.value && n.item?.status !== "out-of-stock"
    );
    return (p, h) => (t(), D(Pt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: h[1] || (h[1] = (M) => r("close"))
    }, ya({
      default: O(() => [
        e.item ? (t(), a("div", zb, [
          o("div", Ab, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, jb)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", Ob, [
            (t(!0), a(z, null, L(e.item.images, (M, w) => (t(), a("img", {
              key: w,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, Lb))), 128))
          ])) : $("", !0),
          o("div", Vb, [
            o("div", null, [
              o("p", Db, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", Tb, f(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), D(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", Fb, f(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", Ib, [
            F(Qe, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? m.value : d.value
            }, null, 8, ["label", "value", "series"]),
            F(Qe, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", Eb, [
            o("p", Nb, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            F(at, {
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
        fn: O(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: h[0] || (h[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), Rb = { class: "flex flex-col gap-10" }, Ub = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, Hb = { class: "flex flex-col gap-3" }, qb = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Kb = ["src", "alt"], Gb = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Wb = ["aria-label", "aria-pressed", "onClick"], Zb = ["src"], Jb = { class: "flex flex-col gap-5" }, Yb = { class: "flex flex-wrap items-start justify-between gap-3" }, Xb = { class: "min-w-0" }, Qb = { class: "text-2xl font-semibold tracking-tight" }, e1 = { class: "text-muted-foreground mt-1 text-sm" }, t1 = { class: "text-2xl font-semibold tabular-nums" }, a1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, n1 = { class: "grid grid-cols-2 gap-3 text-sm" }, l1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, o1 = { class: "mt-1 font-medium" }, s1 = { class: "rounded-lg border p-3" }, r1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, i1 = { class: "mt-1 font-medium" }, u1 = { class: "flex flex-col gap-4" }, d1 = { class: "grid gap-4 sm:grid-cols-2" }, c1 = { class: "bg-card rounded-lg border p-4" }, f1 = { class: "mb-3 text-sm font-medium" }, m1 = /* @__PURE__ */ A({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(w) {
      let S = 0;
      for (const y of w)
        S = S * 31 + y.charCodeAt(0) >>> 0;
      return S;
    }
    function i(w, S) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((v, g) => ({
        label: v,
        value: Math.max(0, Math.round(w + Math.sin(g + S) * w * 0.18))
      }));
    }
    const u = k(() => n.item.kind === "unit"), d = k(() => {
      const w = [n.item.image, ...n.item.images ?? []].filter(
        (S) => typeof S == "string" && S !== ""
      );
      return [...new Set(w)];
    }), m = Z(0), b = k(() => {
      const w = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, s(n.item.key) % 7);
    }), p = k(() => {
      const w = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, s(n.item.key) % 5 + 1);
    }), h = k(() => u.value ? p.value : b.value), M = k(() => !u.value && n.item.status !== "out-of-stock");
    return (w, S) => (t(), a("div", Rb, [
      o("div", Ub, [
        o("div", Hb, [
          o("div", qb, [
            d.value[m.value] ? (t(), a("img", {
              key: 0,
              src: d.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Kb)) : $("", !0)
          ]),
          d.value.length > 1 ? (t(), a("div", Gb, [
            (t(!0), a(z, null, L(d.value, (y, v) => (t(), a("button", {
              key: y,
              type: "button",
              class: j(["size-16 shrink-0 overflow-hidden rounded-md border", v === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${v + 1}`,
              "aria-pressed": v === m.value ? "true" : "false",
              onClick: (g) => m.value = v
            }, [
              o("img", {
                src: y,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, Zb)
            ], 10, Wb))), 128))
          ])) : $("", !0)
        ]),
        o("div", Jb, [
          o("div", Yb, [
            o("div", Xb, [
              o("h1", Qb, f(e.item.label), 1),
              o("p", e1, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D(ge, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", t1, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", a1, f(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", n1, [
            e.item.sku ? (t(), a("div", l1, [
              S[1] || (S[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", o1, f(e.item.sku), 1)
            ])) : $("", !0),
            o("div", s1, [
              o("dt", r1, f(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", i1, f(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: S[0] || (S[0] = (y) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", u1, [
        S[2] || (S[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", d1, [
          F(Qe, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          F(Qe, {
            label: "Price",
            value: e.item.price ?? "-",
            series: b.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", c1, [
          o("p", f1, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          F(Df, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), p1 = ["href"], r4 = /* @__PURE__ */ A({
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
        N(" " + f(e.backLabel), 1)
      ], 8, p1),
      F(m1, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), v1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, g1 = ["aria-selected", "onClick"], h1 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, b1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, x1 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, y1 = ["aria-pressed"], k1 = ["aria-pressed"], i4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(n.tabs[0]?.key ?? ""), i = Ke(e, "layout"), u = Z({}), d = Z(!1);
    de(
      () => n.tabs.map((y) => y.key).join(","),
      (y) => {
        y.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function m(y) {
      return u.value[y] ?? Be();
    }
    const b = k(
      () => n.tabs.find((y) => y.key === s.value) ?? n.tabs[0] ?? null
    ), p = k(
      () => b.value ? m(b.value.key) : Be()
    ), h = k(() => {
      const y = b.value;
      return y ? y.items.filter((v) => zt(v, m(y.key))) : [];
    });
    function M(y) {
      const v = b.value?.key;
      v && (u.value = {
        ...u.value,
        [v]: { ...m(v), query: y }
      });
    }
    function w() {
      const y = b.value?.key;
      y && (u.value = { ...u.value, [y]: Be() });
    }
    function S(y) {
      const v = b.value?.key;
      v && (u.value = { ...u.value, [v]: y }, d.value = !1);
    }
    return (y, v) => (t(), a(z, null, [
      o("div", {
        class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        F(Me, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", v1, [
          (t(!0), a(z, null, L(e.tabs, (g) => (t(), a("button", {
            key: g.key,
            type: "button",
            class: j([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === g.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === g.key ? "true" : "false",
            onClick: (c) => s.value = g.key
          }, f(g.label), 11, g1))), 128))
        ])) : $("", !0),
        o("div", h1, [
          F(pe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: b.value?.searchPlaceholder ?? "Search…",
            "aria-label": b.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": v[0] || (v[0] = (g) => M(String(g)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(et)(p.value) ? (t(), a("button", {
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
            v[9] || (v[9] = N(" Filters ", -1)),
            x(et)(p.value) ? (t(), a("span", b1, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", x1, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: v[2] || (v[2] = (g) => i.value = "grid")
            }, " Tiles ", 10, y1),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: v[3] || (v[3] = (g) => i.value = "list")
            }, " List ", 10, k1)
          ])
        ]),
        F(_t, {
          layout: i.value,
          "onUpdate:layout": v[4] || (v[4] = (g) => i.value = g),
          "page-size": e.pageSize,
          items: h.value,
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
        onApply: S,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), $1 = { class: "flex flex-col gap-4" }, w1 = { class: "flex flex-col gap-4" }, u4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(Be()), i = k(
      () => n.cards.filter((u) => zt(u, s.value))
    );
    return (u, d) => (t(), a("div", {
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      F(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", $1, [
        F(Me, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        F(_t, {
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
      o("section", w1, [
        F(Me, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        F(nl, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": O(({ value: m }) => [
            F(ge, {
              status: String(m)
            }, {
              default: O(() => [
                N(f(m), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), C1 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, S1 = { class: "text-sm font-medium" }, M1 = ["width", "height", "aria-label"], B1 = { class: "flex items-center gap-2" }, _1 = /* @__PURE__ */ A({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = Z(null), i = Z(!1);
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function m(y) {
      const v = s.value;
      if (!v)
        return null;
      const g = v.getBoundingClientRect(), c = v.width / g.width, C = v.height / g.height;
      return {
        x: (y.clientX - g.left) * c,
        y: (y.clientY - g.top) * C
      };
    }
    function b(y) {
      n.disabled || (i.value = !0, u = m(y), s.value?.setPointerCapture(y.pointerId));
    }
    function p(y) {
      if (!i.value || n.disabled)
        return;
      const v = d(), g = m(y);
      !v || !g || !u || (v.strokeStyle = "#111827", v.lineWidth = 2.4, v.lineCap = "round", v.lineJoin = "round", v.beginPath(), v.moveTo(u.x, u.y), v.lineTo(g.x, g.y), v.stroke(), u = g);
    }
    function h() {
      i.value = !1, u = null;
    }
    function M() {
      const y = s.value, v = d();
      !y || !v || (v.clearRect(0, 0, y.width, y.height), r("clear"));
    }
    function w() {
      const y = s.value;
      y && r("save", y.toDataURL("image/png"));
    }
    function S() {
      const y = s.value, v = d();
      !y || !v || (v.fillStyle = "#ffffff", v.fillRect(0, 0, y.width, y.height));
    }
    return fe(S), ve(() => {
      i.value = !1;
    }), (y, v) => (t(), a("div", C1, [
      o("p", S1, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: j(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ce(b, ["prevent"]),
        onPointermove: ce(p, ["prevent"]),
        onPointerup: ce(h, ["prevent"]),
        onPointerleave: ce(h, ["prevent"])
      }, null, 42, M1),
      o("div", B1, [
        F(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: O(() => [...v[0] || (v[0] = [
            N(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: O(() => [...v[1] || (v[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), P1 = { class: "grid gap-8 lg:grid-cols-2" }, z1 = { class: "flex flex-col gap-3" }, A1 = { class: "text-muted-foreground text-xs" }, j1 = {
  key: 0,
  class: "flex flex-col gap-3"
}, O1 = { class: "flex flex-wrap gap-3" }, L1 = ["onClick"], V1 = ["src", "alt"], D1 = {
  key: 1,
  class: "flex flex-col gap-3"
}, T1 = { class: "flex flex-wrap gap-3" }, F1 = ["onClick"], I1 = ["src", "alt"], E1 = {
  key: 2,
  class: "flex flex-col gap-4"
}, N1 = { class: "flex flex-wrap items-center gap-2" }, R1 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, U1 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, H1 = { class: "flex flex-col gap-2" }, q1 = ["src"], K1 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, G1 = ["src"], d4 = /* @__PURE__ */ A({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = Z([]), r = Z([]), s = Z(null), i = Z(null), u = Z(null), d = Z(l.documents[0]?.key ?? "");
    function m(y) {
      try {
        const v = localStorage.getItem(y), g = v ? JSON.parse(v) : [];
        return Array.isArray(g) ? g : [];
      } catch {
        return [];
      }
    }
    fe(() => {
      !l.storageKey || typeof localStorage > "u" || (n.value = m(`${l.storageKey}.signatures`), r.value = m(`${l.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), de(
      n,
      (y) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(y));
      },
      { deep: !0 }
    ), de(
      r,
      (y) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(y));
      },
      { deep: !0 }
    );
    function b(y) {
      const v = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: y
      };
      n.value = [v, ...n.value].slice(0, 8), s.value = v.id;
    }
    async function p(y, v) {
      await sr(y), v(40);
      const g = await new Promise((c, C) => {
        const B = new FileReader();
        B.onload = () => c(String(B.result)), B.onerror = () => C(new Error("Could not read the file")), B.readAsDataURL(y);
      });
      return v(100), { value: g, name: y.name, size: y.size, url: g };
    }
    function h() {
      const y = u.value?.url ?? u.value?.value;
      if (!y)
        return;
      const v = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: y
      };
      r.value = [v, ...r.value].slice(0, 8), i.value = v.id;
    }
    const M = k(
      () => n.value.find((y) => y.id === s.value)?.dataUrl ?? null
    ), w = k(
      () => r.value.find((y) => y.id === i.value)?.dataUrl ?? null
    ), S = k(() => {
      const y = l.documents.find((g) => g.key === d.value)?.document ?? l.documents[0]?.document ?? {}, v = {
        ...y?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...y,
        branding: v
      };
    });
    return (y, v) => (t(), a("div", {
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      F(Me, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", P1, [
        F(_1, {
          label: "Draw a signature",
          onSave: b
        }),
        o("div", z1, [
          v[2] || (v[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", A1, f(x(la)), 1),
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
            onClick: h
          }, {
            default: O(() => [...v[1] || (v[1] = [
              N(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", j1, [
        F(Me, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", O1, [
          (t(!0), a(z, null, L(n.value, (g) => (t(), a("button", {
            key: g.id,
            type: "button",
            class: j(["rounded-md border p-2", g.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, V1)
          ], 10, L1))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), a("section", D1, [
        F(Me, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", T1, [
          (t(!0), a(z, null, L(r.value, (g) => (t(), a("button", {
            key: g.id,
            type: "button",
            class: j(["rounded-md border p-2", g.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = g.id
          }, [
            o("img", {
              src: g.dataUrl,
              alt: g.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, I1)
          ], 10, F1))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), a("section", E1, [
        o("div", N1, [
          (t(!0), a(z, null, L(e.documents, (g) => (t(), D(se, {
            key: g.key,
            size: "sm",
            variant: d.value === g.key ? "default" : "outline",
            onClick: (c) => d.value = g.key
          }, {
            default: O(() => [
              N(f(g.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", R1, [
          F(Wc, {
            document: S.value
          }, null, 8, ["document"]),
          o("div", U1, [
            o("div", H1, [
              v[3] || (v[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), a("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, q1)) : (t(), a("p", K1, "Draw and save a signature"))
            ]),
            w.value ? (t(), a("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, G1)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), c4 = "panel.dashboard.hiddenWidgets", W1 = /* @__PURE__ */ Symbol("dashboardHide"), Z1 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, f4 = /* @__PURE__ */ A({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, n = ht(W1, null), r = Z(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), s = Z(!1);
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
    return (u, d) => i.value ? $("", !0) : (t(), a("div", Z1, [
      F(Ip, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (m) => r.value = m),
        onHide: d[1] || (d[1] = (m) => x(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), J1 = { class: "flex flex-col gap-3" }, Y1 = ["data-slot"], X1 = ["aria-pressed", "aria-label", "title"], Q1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ex = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, tx = { class: "flex h-8 items-center" }, ax = ["aria-label", "title", "onClick"], nx = ["aria-label", "title", "onClick"], lx = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, ox = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, m4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(n.maskable ? !n.hidden : !0), i = Z(/* @__PURE__ */ new Set());
    function u(c) {
      return n.maskable && (c.sensitive ?? !0);
    }
    function d(c) {
      return u(c) && !s.value && !i.value.has(c.key);
    }
    const m = k(() => n.segments.some(d)), b = k(() => n.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = k(() => p[n.columns] ?? p[4]), M = k(() => {
      const c = n.columns ?? 4, C = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(0, C);
    }), w = k(() => {
      const c = n.columns ?? 4, C = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(C);
    }), S = k(() => {
      const c = [];
      return M.value.length > 0 && c.push({ key: "packed", joined: !0, segments: M.value }), w.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: w.value }), c;
    });
    function y() {
      const c = m.value === !1;
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
        for (const B of n.segments)
          B.key !== c.key && u(B) && C.add(B.key);
      }
      i.value = C, r("toggle", m.value);
    }
    function g(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, C) => (t(), a("div", J1, [
      (t(!0), a(z, null, L(S.value, (B) => (t(), a("div", {
        key: B.key,
        class: j(["relative shrink-0", B.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": B.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && b.value && B.key === S.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: y
        }, [
          (t(), a("svg", Q1, [
            m.value ? (t(), a(z, { key: 0 }, [
              C[0] || (C[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              C[1] || (C[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              C[2] || (C[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              C[3] || (C[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(z, { key: 1 }, [
              C[4] || (C[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              C[5] || (C[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, X1)) : $("", !0),
        o("div", {
          class: j(["grid", [B.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), a(z, null, L(B.segments, (P) => (t(), a("div", {
            key: P.key,
            class: j(["bg-card flex flex-col gap-2 p-4", B.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", ex, f(P.label), 1),
            o("div", tx, [
              e.loading ? (t(), D(Fe, {
                key: 0,
                variant: "number"
              })) : d(P) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (J) => v(P)
              }, [
                (t(), a(z, null, L(5, (J) => o("span", {
                  key: J,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, ax)) : u(P) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${g(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (J) => v(P)
              }, f(g(P.value)), 9, nx)) : (t(), a("span", lx, f(g(P.value)), 1)),
              P.trend && !e.loading && !d(P) ? (t(), D(da, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            P.sparkline?.length && !e.loading && !d(P) ? (t(), D(at, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            P.caption || P.comparison && P.trend ? (t(), a("p", ox, f(P.caption ?? P.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Y1))), 128))
    ]));
  }
}), sx = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, rx = { class: "flex items-center justify-between gap-2" }, ix = { class: "text-sm font-semibold" }, ux = { class: "flex items-center gap-3" }, dx = ["href"], cx = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, fx = { class: "flex min-w-0 flex-col gap-0.5" }, mx = { class: "text-sm font-medium" }, px = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, vx = {
  key: 1,
  class: "flex flex-col gap-2"
}, gx = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, hx = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, bx = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, p4 = /* @__PURE__ */ A({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: { default: null },
    heading: { default: "Setup checklist" },
    skipLabel: { default: null },
    linkComponent: { default: "a" }
  },
  emits: ["skip"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = k(() => n.items.find((b) => !b.done) ?? null), i = k(() => n.items.filter((b) => b.key !== s.value?.key)), u = k(() => {
      const b = n.linkComponent;
      return typeof b == "string" ? b : Ut(b);
    }), d = Je({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), m = Je({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (b, p) => e.items.length ? (t(), a("section", sx, [
      o("div", rx, [
        o("h2", ix, f(e.heading), 1),
        o("div", ux, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: p[0] || (p[0] = (h) => r("skip"))
          }, f(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, dx)) : $("", !0)
        ])
      ]),
      s.value ? (t(), a("div", cx, [
        p[1] || (p[1] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", fx, [
          o("p", mx, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", px, f(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), D(be(u.value), {
            key: 1,
            href: s.value.href,
            class: j(x(d))
          }, {
            default: O(() => [
              N(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])
      ])) : $("", !0),
      i.value.length ? (t(), a("ul", vx, [
        (t(!0), a(z, null, L(i.value, (h) => (t(), a("li", {
          key: h.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: j([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              h.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            h.done ? (t(), a("svg", gx, [...p[2] || (p[2] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", hx, [
            o("p", {
              class: j(["text-sm", h.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(h.title), 3),
            !h.done && h.detail ? (t(), a("p", bx, f(h.detail), 1)) : $("", !0)
          ]),
          !h.done && h.href ? (t(), D(be(u.value), {
            key: 0,
            href: h.href,
            class: j(x(m))
          }, {
            default: O(() => [
              N(f(h.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : $("", !0)
        ]))), 128))
      ])) : $("", !0)
    ])) : $("", !0);
  }
}), xx = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, yx = { class: "flex items-center gap-2" }, kx = { class: "font-medium tabular-nums" }, $x = { class: "ml-auto flex items-center gap-3" }, v4 = /* @__PURE__ */ A({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const n = l, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), a("div", xx, [
      o("div", yx, [
        K(s.$slots, "actions")
      ]),
      o("span", kx, [
        e.allMatching ? (t(), a(z, { key: 0 }, [
          N(" All " + f(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(z, { key: 1 }, [
          N(f(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", $x, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (u) => n("select-all-matching"))
        }, " Select all " + f(r(e.total)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (u) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), wx = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Cx = { class: "text-muted-foreground text-xs tabular-nums" }, Sx = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Mx = ["value"], Bx = ["value"], _x = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Px = ["disabled"], zx = ["disabled"], Ax = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, jx = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Ox = ["disabled"], g4 = /* @__PURE__ */ A({
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
    return (m, b) => (t(), a("div", wx, [
      o("p", Cx, [
        N(" Showing " + f(s(i.value)) + "-" + f(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(z, { key: 0 }, [
          N("of " + f(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", Sx, [
        b[4] || (b[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: b[0] || (b[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(z, null, L(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, Bx))), 128))
        ], 40, Mx)
      ])) : $("", !0),
      o("nav", _x, [
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
        ])], 8, Px),
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
        ])], 8, zx),
        o("span", Ax, f(e.page), 1),
        d.value !== null ? (t(), a("span", jx, " of " + f(s(d.value)), 1)) : $("", !0),
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
        ])], 8, Ox)
      ])
    ]));
  }
}), Lx = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, Vx = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, Dx = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, Tx = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, h4 = /* @__PURE__ */ A({
  __name: "TableShell",
  setup(e) {
    return (l, n) => (t(), a("div", Lx, [
      l.$slots.tabs ? (t(), a("div", Vx, [
        K(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), a("div", Dx, [
        K(l.$slots, "toolbar")
      ])) : $("", !0),
      K(l.$slots, "default"),
      l.$slots.pagination ? (t(), a("div", Tx, [
        K(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), Fx = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Ix = ["aria-current"], Ex = ["title"], Nx = ["aria-current", "onClick"], Rx = ["title"], Ux = /* @__PURE__ */ A({
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
    return (s, i) => (t(), a("div", Fx, [
      o("button", {
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => n("select", null))
      }, [
        i[1] || (i[1] = N(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Ex)) : (t(), D(Fe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Ix),
      (t(!0), a(z, null, L(e.tabs, (u) => (t(), a("button", {
        key: u,
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => n("select", u)
      }, [
        N(f(u) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, f(r(e.counts[u] ?? 0)), 11, Rx)) : (t(), D(Fe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Nx))), 128))
    ]));
  }
}), b4 = /* @__PURE__ */ wt(Ux, [["__scopeId", "data-v-3967c945"]]), Hx = { class: "flex flex-col gap-2" }, qx = { class: "flex flex-wrap items-center justify-end gap-2" }, Kx = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Gx = ["placeholder", "title", "aria-label"], Wx = ["aria-label"], Zx = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Jx = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Yx = { class: "text-xs font-medium" }, Xx = ["value", "onChange"], Qx = ["value"], ey = { class: "grid grid-cols-2 gap-2" }, ty = ["value", "onChange"], ay = ["value", "onChange"], ny = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, ly = ["value", "onChange"], oy = ["value", "onChange"], sy = {
  key: 4,
  class: "flex items-center gap-2"
}, ry = ["aria-checked", "onClick"], iy = { class: "text-xs" }, uy = ["onClick"], dy = ["value", "onChange"], cy = ["value"], fy = ["disabled", "onClick"], my = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, py = ["disabled", "onClick"], vy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, gy = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, hy = ["aria-pressed", "aria-label", "title"], by = ["aria-label", "title"], xy = { class: "flex flex-col gap-0.5 p-1" }, yy = ["onClick"], ky = ["onClick"], $y = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, wy = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, Cy = ["dusk"], Sy = ["aria-label", "onClick"], x4 = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(n.search);
    de(
      () => n.search,
      (I) => {
        I !== s.value && (s.value = I);
      }
    );
    let i;
    de(s, (I) => {
      clearTimeout(i), i = setTimeout(() => {
        I !== n.search && r("update:search", I);
      }, 250);
    });
    const u = Z({ ...n.filters });
    de(
      () => n.filters,
      (I) => {
        u.value = { ...I };
      },
      { deep: !0 }
    );
    const d = k(
      () => n.filterSchema.filter(
        (I) => n.filters[I.key] !== null && n.filters[I.key] !== void 0
      ).length
    ), m = k(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), b = k(() => n.search !== "" || d.value > 0), p = k(() => n.indicators.length ? n.indicators : n.filterSchema.filter((I) => n.filters[I.key] !== null && n.filters[I.key] !== void 0).map((I) => ({
      key: I.key,
      label: `${I.label}: ${String(n.filters[I.key])}`,
      removable: !0
    })));
    function h(I) {
      r("group", I);
    }
    function M(I) {
      r("clear-filter", I);
    }
    function w(I) {
      return I.type === "multiselect";
    }
    function S(I) {
      const V = u.value[I.key];
      return Array.isArray(V) ? V : V == null ? [] : [V];
    }
    function y(I) {
      return S(I).filter(
        (V) => typeof V == "string" || typeof V == "number"
      );
    }
    function v(I) {
      return ee(I).flatMap(
        (V) => typeof V.value == "string" || typeof V.value == "number" ? [{ value: V.value, label: V.label }] : []
      );
    }
    function g(I, V) {
      u.value = { ...u.value, [I.key]: V === "" ? null : V };
    }
    function c(I, V) {
      const Q = u.value[I.key];
      if (typeof Q != "string" || !Q.includes(".."))
        return "";
      const [_, W] = Q.split("..");
      return V === "from" ? _ ?? "" : W ?? "";
    }
    function C(I, V, Q) {
      const _ = V === "from" ? Q : c(I, "from"), W = V === "to" ? Q : c(I, "to");
      u.value = {
        ...u.value,
        [I.key]: _ && W ? `${_}..${W}` : null
      };
    }
    function B(I, V, Q) {
      const _ = V === "from" ? Q : c(I, "from"), W = V === "to" ? Q : c(I, "to");
      u.value = {
        ...u.value,
        [I.key]: _ || W ? `${_}..${W}` : null
      };
    }
    function P(I) {
      r("apply-filters", { ...u.value }), I();
    }
    function J(I, V) {
      u.value[I] = V, r("apply-filters", { ...u.value });
    }
    function E() {
      u.value = Object.fromEntries(n.filterSchema.map((I) => [I.key, null]));
    }
    function ee(I) {
      return I.type === "boolean" ? [
        { value: !0, label: I.trueLabel ?? "Yes" },
        { value: !1, label: I.falseLabel ?? "No" }
      ] : I.type === "daterange" ? Object.entries(I.presets ?? {}).map(([V, Q]) => ({
        value: V,
        label: Q
      })) : (I.options ?? []).map((V) => ({ value: V, label: V }));
    }
    const q = Z(new Set(n.hidden));
    de(
      () => n.hidden,
      (I) => {
        q.value = new Set(I);
      },
      { deep: !0 }
    );
    function R(I) {
      const V = new Set(q.value);
      V.has(I) ? V.delete(I) : V.add(I), q.value = V, r("apply-columns", [...V]);
    }
    function T() {
      q.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function U() {
      s.value = "", r("clear");
    }
    return (I, V) => (t(), a("div", Hx, [
      o("div", qx, [
        o("div", Kx, [
          V[5] || (V[5] = o("svg", {
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
            "onUpdate:modelValue": V[0] || (V[0] = (Q) => s.value = Q),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, Gx), [
            [xe, s.value]
          ]),
          s.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: V[1] || (V[1] = (Q) => s.value = "")
          }, [...V[4] || (V[4] = [
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
        e.filterSchema.length ? (t(), D(Te, {
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
              V[6] || (V[6] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              d.value ? (t(), a("span", Zx, f(d.value), 1)) : $("", !0)
            ], 10, Wx)
          ]),
          panel: O(({ close: Q }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              V[7] || (V[7] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: E
              }, " Reset ")
            ]),
            V[10] || (V[10] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Jx, [
              (t(!0), a(z, null, L(e.filterSchema, (_) => (t(), a("div", {
                key: _.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Yx, f(_.label), 1),
                w(_) ? (t(), D(Bt, {
                  key: 0,
                  "model-value": y(_),
                  options: v(_),
                  placeholder: `Any ${_.label.toLowerCase()}`,
                  "onUpdate:modelValue": (W) => u.value[_.key] = W.length ? W : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : _.type === "querybuilder" ? (t(), D(Co, {
                  key: 1,
                  "model-value": u.value[_.key] ?? null,
                  fields: _.fields ?? {},
                  operators: _.operators ?? {},
                  "max-depth": _.maxDepth ?? 5,
                  onApply: (W) => J(_.key, W)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : _.type === "daterange" ? (t(), a(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[_.key] == "string" && !String(u.value[_.key]).includes("..") ? u.value[_.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (W) => g(_, W.target.value)
                  }, [
                    V[8] || (V[8] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(z, null, L(ee(_), (W) => (t(), a("option", {
                      key: String(W.value),
                      value: W.value
                    }, f(W.label), 9, Qx))), 128))
                  ], 40, Xx),
                  o("div", ey, [
                    o("input", {
                      type: "date",
                      value: c(_, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (W) => C(
                        _,
                        "from",
                        W.target.value
                      )
                    }, null, 40, ty),
                    o("input", {
                      type: "date",
                      value: c(_, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (W) => C(
                        _,
                        "to",
                        W.target.value
                      )
                    }, null, 40, ay)
                  ])
                ], 64)) : _.type === "numberrange" ? (t(), a("div", ny, [
                  o("input", {
                    type: "number",
                    value: c(_, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (W) => B(
                      _,
                      "from",
                      W.target.value
                    )
                  }, null, 40, ly),
                  o("input", {
                    type: "number",
                    value: c(_, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (W) => B(
                      _,
                      "to",
                      W.target.value
                    )
                  }, null, 40, oy)
                ])) : _.type === "boolean" ? (t(), a("div", sy, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[_.key] === !0,
                    class: j([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[_.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (W) => g(_, u.value[_.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: j(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[_.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, ry),
                  o("span", iy, f(_.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: j([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[_.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (W) => g(_, u.value[_.key] === !1 ? null : !1)
                  }, f(_.falseLabel ?? "No") + " only ", 11, uy)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[_.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (W) => g(_, W.target.value)
                }, [
                  V[9] || (V[9] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(z, null, L(ee(_), (W) => (t(), a("option", {
                    key: String(W.value),
                    value: W.value
                  }, f(W.label), 9, cy))), 128))
                ], 40, dy))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !m.value,
              onClick: (_) => P(Q)
            }, " Apply filters ", 8, fy)
          ]),
          _: 1
        })) : $("", !0),
        F(Te, { "dismiss-on-panel-click": !1 }, {
          trigger: O(() => [...V[11] || (V[11] = [
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
            V[14] || (V[14] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", my, [
              (t(!0), a(z, null, L(e.columns, (Q) => (t(), a("button", {
                key: Q.key,
                type: "button",
                class: j(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", Q.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: Q.locked,
                onClick: (_) => R(Q.key)
              }, [
                q.value.has(Q.key) ? (t(), a("span", gy)) : (t(), a("svg", vy, [...V[12] || (V[12] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + f(Q.label), 1)
              ], 10, py))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: T
              }, [...V[13] || (V[13] = [
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
        e.reorderable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: j(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: V[2] || (V[2] = (Q) => r("toggle-reorder"))
        }, [...V[15] || (V[15] = [
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
        ])], 10, hy)) : $("", !0),
        e.groups.length ? (t(), D(Te, {
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
            }, [...V[16] || (V[16] = [
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
            ])], 10, by)
          ]),
          panel: O(({ close: Q }) => [
            o("div", xy, [
              o("button", {
                type: "button",
                class: j(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (_) => {
                  h(null), Q();
                }
              }, " No grouping ", 10, yy),
              (t(!0), a(z, null, L(e.groups, (_) => (t(), a("button", {
                key: _.key,
                type: "button",
                class: j(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === _.key ? "text-primary font-medium" : ""]),
                onClick: (W) => {
                  h(_.key), Q();
                }
              }, f(_.label), 11, ky))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        b.value ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: U
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), a("span", $y, "Loading…")) : $("", !0)
      ]),
      p.value.length ? (t(), a("div", wy, [
        (t(!0), a(z, null, L(p.value, (Q) => (t(), a("span", {
          key: Q.key + Q.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${Q.key}`
        }, [
          N(f(Q.label) + " ", 1),
          Q.removable !== !1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${Q.label}`,
            onClick: (_) => M(Q.key)
          }, [...V[17] || (V[17] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Sy)) : $("", !0)
        ], 8, Cy))), 128)),
        p.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: V[3] || (V[3] = (Q) => r("clear-filters"))
        }, " Clear all ")) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), My = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, By = { class: "grid gap-2" }, _y = {
  key: 0,
  class: "text-destructive text-sm"
}, Py = { class: "flex gap-2" }, y4 = /* @__PURE__ */ A({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const n = l, s = Z((() => {
      const M = navigator.userAgent, w = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: y }) => y.test(M))?.name, S = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: y }) => y.test(M))?.name;
      return [w, S].filter(Boolean).join(" on ") || "";
    })()), i = Z(!1), u = ka(null), d = k(() => u.value?.isLoading.value ?? !1), m = k(() => u.value?.error.value ?? null), b = k(() => u.value?.isSupported.value ?? !1);
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
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (M, w) => b.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", By, [
        w[3] || (w[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ue(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": w[1] || (w[1] = (S) => s.value = S),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [xe, s.value]
        ]),
        w[4] || (w[4] = o("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      m.value ? (t(), a("p", _y, f(m.value), 1)) : $("", !0),
      o("div", Py, [
        F(se, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: O(() => [
            N(f(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        F(se, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: O(() => [...w[5] || (w[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(se, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = (S) => i.value = !0)
    }, {
      default: O(() => [...w[2] || (w[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", My, " Passkeys are not supported in this browser. "));
  }
}), zy = { class: "text-sm font-semibold" }, Ay = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, jy = {
  key: 4,
  class: "flex flex-col gap-3"
}, Oy = { class: "text-sm font-medium" }, Ly = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Vy = {
  key: 0,
  class: "mb-1 font-medium"
}, Dy = ["onClick"], Ty = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Fy = { class: "flex items-center justify-between gap-3 border-t p-4" }, Iy = ["disabled"], Ey = /* @__PURE__ */ A({
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
    const n = e, r = l, s = Z(!n.node.collapsed), i = Z(0), u = Z(0), d = k(
      () => (n.node.children ?? []).map((y) => ({
        label: y.label ?? "",
        description: y.description
      }))
    ), m = k(() => n.depth === 0), b = k(() => {
      const y = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, v = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        y[n.node.align ?? "start"] ?? "items-start",
        v[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = k(() => {
      const y = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return y[n.node.tone ?? "info"] ?? y.info;
    }), h = k(() => {
      const y = n.node.columns ?? 1;
      return y >= 3 ? "sm:grid-cols-3" : y === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function M(y) {
      const v = [], g = (c) => {
        c.component === "field" && c.key && v.push(c.key), c.children?.forEach(g);
      };
      return g(y), v.some((c) => n.errors[c]);
    }
    function w(y) {
      if (y.hidden)
        return !1;
      const v = y.visibleWhen;
      return v ? n.values[v.field] == v.value : !0;
    }
    function S(y) {
      if (n.upload)
        return (v, g) => n.upload(y, v, g);
    }
    return (y, v) => {
      const g = gt("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), D(qe, {
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
        upload: S(e.node.key),
        discard: e.discard,
        onChange: v[0] || (v[0] = (c) => r("change", e.node.key, c))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && w(e.node) ? (t(), a("section", {
        key: 1,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: j(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: v[1] || (v[1] = (c) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", zy, f(e.node.label), 1),
            e.node.description ? (t(), a("p", Ay, f(e.node.description), 1)) : $("", !0)
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
          class: j(["grid grid-cols-1 gap-4", [h.value, m.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), a(z, null, L(e.node.children ?? [], (c, C) => (t(), D(g, {
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
            onChange: v[2] || (v[2] = (B, P) => r("change", B, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), a(z, null, L(e.node.children ?? [], (c, C) => (t(), D(g, {
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
          onChange: v[3] || (v[3] = (B, P) => r("change", B, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), a("div", {
        key: 3,
        class: j(["flex", b.value])
      }, [
        (t(!0), a(z, null, L(e.node.children ?? [], (c, C) => (t(), D(g, {
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
          onChange: v[4] || (v[4] = (B, P) => r("change", B, P))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", jy, [
        o("legend", Oy, f(e.node.label), 1),
        e.node.description ? (t(), a("p", Ly, f(e.node.description), 1)) : $("", !0),
        o("div", {
          class: j(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), a(z, null, L(e.node.children ?? [], (c, C) => (t(), D(g, {
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
            onChange: v[5] || (v[5] = (B, P) => r("change", B, P))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), a("div", {
        key: 5,
        role: "note",
        class: j(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", Vy, f(e.node.title), 1)) : $("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 6,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, L(e.node.children ?? [], (c, C) => (t(), a("button", {
            key: C,
            type: "button",
            class: j([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === C ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (B) => i.value = C
          }, [
            N(f(c.label) + " ", 1),
            M(c) ? (t(), a("span", Ty)) : $("", !0)
          ], 10, Dy))), 128))
        ], 2),
        (t(!0), a(z, null, L(e.node.children ?? [], (c, C) => ue((t(), a("div", {
          key: C,
          class: j(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, L(c.children ?? [], (B, P) => (t(), D(g, {
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
            onChange: v[6] || (v[6] = (J, E) => r("change", J, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, i.value === C]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), a("div", {
        key: 7,
        class: j(m.value ? "bg-card rounded-lg border" : "")
      }, [
        F(li, {
          class: j(["p-4", m.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (c) => M((e.node.children ?? [])[c]),
          "onUpdate:activeStep": v[7] || (v[7] = (c) => u.value = c)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(z, null, L(e.node.children ?? [], (c, C) => ue((t(), a("div", {
          key: C,
          class: j(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, L(c.children ?? [], (B, P) => (t(), D(g, {
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
            onChange: v[8] || (v[8] = (J, E) => r("change", J, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, u.value === C]
        ])), 128)),
        o("div", Fy, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: v[9] || (v[9] = (c) => u.value--)
          }, " Back ", 8, Iy),
          u.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: v[10] || (v[10] = (c) => u.value++)
          }, " Next ")) : $("", !0)
        ])
      ], 2)) : $("", !0);
    };
  }
}), Ny = { class: "flex flex-col gap-4" }, Ry = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, k4 = /* @__PURE__ */ A({
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
    const n = e;
    Rt("panelPicker", {
      get base() {
        return n.pickerBase ?? "";
      },
      get returnUrl() {
        return n.returnUrl ?? "";
      }
    });
    const r = l, s = k(() => n.nodes.length > 0), i = k(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = k(() => n.errors._conflict);
    function d(m) {
      if (n.upload)
        return (b, p) => n.upload(m, b, p);
    }
    return (m, b) => (t(), a("div", Ny, [
      u.value ? (t(), a("p", Ry, f(u.value), 1)) : $("", !0),
      s.value ? (t(!0), a(z, { key: 1 }, L(e.nodes, (p, h) => (t(), D(Ey, {
        key: h,
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
        class: j(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(z, null, L(e.fields, (p) => (t(), D(qe, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (h) => e.searchOptions(p.key, h) : void 0,
          upload: d(p.key),
          discard: e.discard,
          class: j(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", p.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), Uy = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, Hy = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, qy = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Ky = ["disabled"], Gy = ["disabled"], Wy = ["disabled"], $4 = /* @__PURE__ */ A({
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
    return (l, n) => (t(), D(Ie, { to: "body" }, [
      F(Ae, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: O(() => [
          e.show ? (t(), a("div", Uy, [
            o("div", Hy, [
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
              o("span", qy, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => l.$emit("discard"))
              }, f(e.discardLabel), 9, Ky)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => l.$emit("cancel"))
              }, f(e.cancelLabel), 9, Gy),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => l.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Wy)
            ])
          ])) : $("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function w4(e, l = {}) {
  const { warnOnUnload: n = !0 } = l, r = Z(it(e.value)), s = k(() => it(e.value) !== r.value);
  function i() {
    r.value = it(e.value);
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
function it(e) {
  return JSON.stringify(e, (l, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const Zy = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, Jy = { class: "text-muted-foreground text-xs font-medium" }, Yy = { class: "text-sm" }, Xy = { key: 1 }, Qy = {
  key: 5,
  class: "max-w-full"
}, e0 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, t0 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, a0 = { key: 6 }, n0 = {
  key: 0,
  class: "divide-y rounded-md border"
}, l0 = { class: "text-muted-foreground truncate font-medium" }, o0 = { class: "col-span-2 break-words" }, s0 = {
  key: 1,
  class: "text-muted-foreground"
}, r0 = {
  key: 7,
  class: "flex flex-col gap-3"
}, i0 = {
  key: 0,
  class: "text-muted-foreground"
}, u0 = ["href"], d0 = { class: "text-sm font-semibold" }, c0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, f0 = ["onClick"], C4 = /* @__PURE__ */ A({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = Z(!n.node.collapsed), i = Z(0), u = k(() => n.depth === 0), d = k(() => {
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
    }, b = k(() => n.node.key ? n.record[n.node.key] : null), p = k(() => {
      const M = b.value;
      if (M == null || M === "")
        return "-";
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, m[n.node.type]);
      let w = String(M);
      return n.node.transform === "upper" && (w = w.toUpperCase()), n.node.transform === "lower" && (w = w.toLowerCase()), [n.node.prefix, w, n.node.suffix].filter(Boolean).join(" ");
    }), h = k(() => {
      const M = typeof b.value == "boolean" ? b.value ? "1" : "" : String(b.value), w = n.node.colors?.[M] ?? n.node.defaultColor ?? "neutral";
      return Ct[w] ?? "outline";
    });
    return (M, w) => {
      const S = gt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", Zy, [
        o("dt", Jy, f(e.node.label), 1),
        o("dd", Yy, [
          e.node.type === "badge" && x(Oo)(b.value) ? (t(), D(Ue, {
            key: 0,
            variant: h.value,
            class: "capitalize"
          }, {
            default: O(() => [
              N(f(b.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", Xy, "-")) : e.node.type === "icon" ? (t(), D(Zl, {
            key: 2,
            value: b.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), D(Xl, {
            key: 3,
            src: b.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), D(no, {
            key: 4,
            value: typeof b.value == "string" ? b.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", Qy, [
            e.node.language ? (t(), a("p", e0, f(e.node.language), 1)) : $("", !0),
            o("pre", t0, [
              o("code", null, f(b.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", a0, [
            b.value && typeof b.value == "object" && !Array.isArray(b.value) && Object.keys(b.value).length ? (t(), a("dl", n0, [
              (t(!0), a(z, null, L(b.value, (y, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", l0, f(v), 1),
                o("dd", o0, f(y), 1)
              ]))), 128))
            ])) : (t(), a("span", s0, "-"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", r0, [
            (t(!0), a(z, null, L(Array.isArray(b.value) ? b.value : [], (y, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(z, null, L(e.node.entries ?? [], (g, c) => (t(), D(S, {
                key: c,
                node: g,
                record: y,
                depth: e.depth + 1,
                onAction: w[0] || (w[0] = (C) => r("action", C))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(b.value) || b.value.length === 0 ? (t(), a("span", i0, "-")) : $("", !0)
          ])) : e.node.url ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, f(p.value), 9, u0)) : (t(), a("span", {
            key: 9,
            class: j([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, f(p.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
            onClick: w[1] || (w[1] = (y) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : $("", !0)
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
          onClick: w[2] || (w[2] = (y) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", d0, f(e.node.label), 1),
            e.node.description ? (t(), a("p", c0, f(e.node.description), 1)) : $("", !0)
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), a(z, null, L(e.node.children ?? [], (y, v) => (t(), D(S, {
            key: v,
            node: y,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[3] || (w[3] = (g) => r("action", g))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), a(z, null, L(e.node.children ?? [], (y, v) => (t(), D(S, {
          key: v,
          node: y,
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
          (t(!0), a(z, null, L(e.node.children ?? [], (y, v) => (t(), a("button", {
            key: v,
            type: "button",
            class: j([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (g) => i.value = v
          }, f(y.label), 11, f0))), 128))
        ], 2),
        (t(!0), a(z, null, L(e.node.children ?? [], (y, v) => ue((t(), a("div", {
          key: v,
          class: j(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, L(y.children ?? [], (g, c) => (t(), D(S, {
            key: c,
            node: g,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[5] || (w[5] = (C) => r("action", C))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [je, i.value === v]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), m0 = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, p0 = { class: "text-muted-foreground text-sm" }, v0 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, g0 = { class: "flex items-start gap-3" }, h0 = { class: "min-w-0 flex-1" }, b0 = { class: "flex flex-wrap items-center gap-2" }, x0 = { class: "truncate text-sm font-medium" }, y0 = { class: "text-muted-foreground mt-0.5 text-xs" }, k0 = { class: "text-muted-foreground text-xs" }, $0 = { class: "mt-auto flex items-center gap-2" }, w0 = /* @__PURE__ */ A({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = k(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), a("div", m0, [
      o("p", p0, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", v0, [
        (t(!0), a(z, null, L(e.gateways, (d) => (t(), a("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", g0, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: d.color }),
              "aria-hidden": "true"
            }, f(d.mark), 5),
            o("div", h0, [
              o("div", b0, [
                o("h3", x0, f(d.label), 1),
                F(ge, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: O(() => [
                    N(f(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), D(ge, {
                  key: 0,
                  status: "offered"
                }, {
                  default: O(() => [...u[0] || (u[0] = [
                    N(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), D(ge, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: O(() => [...u[1] || (u[1] = [
                    N(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.isDefault ? (t(), D(ge, {
                  key: 2,
                  status: "default"
                }, {
                  default: O(() => [...u[2] || (u[2] = [
                    N(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                d.connected && d.mode ? (t(), D(ge, {
                  key: 3,
                  status: d.mode
                }, {
                  default: O(() => [
                    N(f(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", y0, f(d.caption), 1)
            ])
          ]),
          o("p", k0, f(d.methods.join(" · ")), 1),
          o("div", $0, [
            F(se, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", d.key)
            }, {
              default: O(() => [...u[3] || (u[3] = [
                N(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            F(se, {
              size: "sm",
              variant: "ghost",
              onClick: (m) => r("toggle", d.key)
            }, {
              default: O(() => [
                N(f(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), C0 = { class: "flex flex-col gap-6" }, S0 = { class: "relative" }, M0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, B0 = ["d"], _0 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, P0 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, z0 = { class: "flex flex-wrap items-center gap-2" }, A0 = { class: "text-muted-foreground text-sm" }, j0 = { class: "flex flex-col gap-1 text-sm" }, O0 = ["value"], L0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, V0 = { class: "flex flex-wrap items-center gap-2" }, D0 = {
  key: 1,
  class: "flex items-center gap-2"
}, S4 = /* @__PURE__ */ A({
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
    const l = Ke(e, "gateways"), n = Z(null), r = Z(""), s = k(
      () => l.value.find((w) => w.key === n.value) ?? null
    ), i = k(() => {
      const w = r.value.trim().toLowerCase();
      return w === "" ? l.value : l.value.filter((S) => [S.key, S.label, S.caption, ...S.methods].join(" ").toLowerCase().includes(w));
    });
    function u(w) {
      return w.connected && w.enabled !== !1;
    }
    function d(w, S) {
      l.value = l.value.map(
        (y) => y.key === w ? { ...y, ...S } : y
      );
    }
    function m(w) {
      n.value = w;
    }
    function b(w) {
      const S = l.value.find((v) => v.key === w);
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
      const y = l.value.find((v) => v.key === w);
      y?.connected && d(w, { enabled: S, isDefault: S ? y.isDefault : !1 });
    }
    function h(w) {
      const S = l.value.find((y) => y.key === w);
      !S || !u(S) || (l.value = l.value.map((y) => ({
        ...y,
        isDefault: y.key === w
      })));
    }
    function M(w) {
      const S = n.value;
      !S || !l.value.find((v) => v.key === S)?.connected || d(S, { mode: w });
    }
    return (w, S) => (t(), a(z, null, [
      o("div", C0, [
        F(Me, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", S0, [
          (t(), a("svg", M0, [
            o("path", {
              d: x(ie)("search")
            }, null, 8, B0)
          ])),
          F(pe, {
            modelValue: r.value,
            "onUpdate:modelValue": S[0] || (S[0] = (y) => r.value = y),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(w0, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: b
        }, null, 8, ["gateways"])) : (t(), a("p", _0, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      F(Pt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: S[8] || (S[8] = (y) => n.value = null)
      }, {
        footer: O(() => [
          F(se, {
            variant: "outline",
            size: "sm",
            onClick: S[6] || (S[6] = (y) => n.value = null)
          }, {
            default: O(() => [...S[21] || (S[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(se, {
            key: 0,
            size: "sm",
            onClick: S[7] || (S[7] = (y) => b(s.value.key))
          }, {
            default: O(() => [
              N(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: O(() => [
          s.value ? (t(), a("div", P0, [
            o("div", z0, [
              F(ge, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: O(() => [
                  N(f(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), D(ge, {
                key: 0,
                status: "offered"
              }, {
                default: O(() => [...S[9] || (S[9] = [
                  N(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), D(ge, {
                key: 1,
                status: "disabled"
              }, {
                default: O(() => [...S[10] || (S[10] = [
                  N(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), D(ge, {
                key: 2,
                status: "default"
              }, {
                default: O(() => [...S[11] || (S[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), D(ge, {
                key: 3,
                status: s.value.mode
              }, {
                default: O(() => [
                  N(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", A0, f(s.value.caption), 1),
            o("label", j0, [
              S[12] || (S[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, O0)
            ]),
            S[20] || (S[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", L0, [
              S[16] || (S[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              S[17] || (S[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", V0, [
                F(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: S[1] || (S[1] = (y) => p(s.value.key, !0))
                }, {
                  default: O(() => [...S[13] || (S[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                F(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: S[2] || (S[2] = (y) => p(s.value.key, !1))
                }, {
                  default: O(() => [...S[14] || (S[14] = [
                    N(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                F(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: S[3] || (S[3] = (y) => h(s.value.key))
                }, {
                  default: O(() => [...S[15] || (S[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), a("div", D0, [
              F(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: S[4] || (S[4] = (y) => M("test"))
              }, {
                default: O(() => [...S[18] || (S[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              F(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: S[5] || (S[5] = (y) => M("live"))
              }, {
                default: O(() => [...S[19] || (S[19] = [
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
function Nt(e) {
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
function M4(e) {
  const l = Z(Nt(e));
  fe(() => {
    l.value = Nt(e);
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
function B4(e) {
  const { config: l, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = Z(
    l.driver === "none" ? "off" : "connecting"
  ), m = Z(/* @__PURE__ */ new Set());
  let b = /* @__PURE__ */ new Map(), p, h, M, w = (/* @__PURE__ */ new Date()).toISOString(), S = null;
  function y(R, T) {
    b.set(R, { ...b.get(R) ?? {}, ...T }), !p && (p = setTimeout(() => {
      p = void 0, v();
    }, l.batchMs));
  }
  function v() {
    if (b.size === 0)
      return;
    const R = b;
    b = /* @__PURE__ */ new Map();
    const T = /* @__PURE__ */ new Set();
    for (const [U, I] of R) {
      const V = n.value.find((Q) => Q[r] === U);
      if (!V) {
        u?.(U, I);
        continue;
      }
      Object.assign(V, I), T.add(U);
    }
    T.size !== 0 && (m.value = /* @__PURE__ */ new Set([...m.value, ...T]), setTimeout(() => {
      const U = new Set(m.value);
      T.forEach((I) => U.delete(I)), m.value = U;
    }, 1500));
  }
  async function g() {
    if (!(!s || n.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const R = n.value.map((I) => I[r]), { records: T, at: U } = await s(R, w);
        w = U, d.value = "live";
        for (const I of T)
          y(I[r], I);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function c() {
    C(), d.value = "live", h = setInterval(g, l.intervalMs);
  }
  function C() {
    clearInterval(h), h = void 0, M?.abort();
  }
  function B() {
    return window.Echo ?? null;
  }
  function P() {
    const R = B();
    if (!R || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    S = l.channel;
    const T = R.private(l.channel);
    for (const U of l.events)
      T.listen(U, (I) => {
        I?.[r] !== void 0 && y(I[r], I);
      });
    d.value = "live", R.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), R.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function J() {
    S && (B()?.leave(S), S = null);
  }
  function E() {
    l.driver === "poll" && c(), l.driver === "broadcast" && P();
  }
  function ee() {
    C(), J(), clearTimeout(p), p = void 0, b = /* @__PURE__ */ new Map();
  }
  function q() {
    l.pauseWhenHidden && (document.hidden ? (ee(), d.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return fe(() => {
    l.driver !== "none" && (E(), l.pauseWhenHidden && document.addEventListener("visibilitychange", q));
  }), ve(() => {
    document.removeEventListener("visibilitychange", q), ee();
  }), { status: d, recentlyChanged: m, applyPatch: y, flush: v, pollOnce: g };
}
const T0 = /^[a-z0-9-]+$/, F0 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function _4(e) {
  $a(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !T0.test(n) || typeof r != "string" || !F0.test(r) || (l[`--${n}`] = r);
    os(l);
  });
}
const I0 = { class: "flex items-center gap-0.5" }, E0 = /* @__PURE__ */ A({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", I0, [
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
}), N0 = /* @__PURE__ */ A({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), D(ua, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), R0 = { class: "flex flex-col gap-2" }, U0 = { class: "bg-card rounded-lg border p-4" }, H0 = { class: "text-muted-foreground truncate text-xs" }, q0 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, K0 = /* @__PURE__ */ A({
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
      const S = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return S === "" ? u.value : `${u.value} › ${S.split("/").join(" › ")}`;
    });
    function m(S, y) {
      return S.length <= y ? S : `${S.slice(0, y - 1).trimEnd()}…`;
    }
    const b = k(() => m(s.value, r.value.titleMax)), p = k(() => m(i.value, r.value.descriptionMax));
    function h(S, y, v) {
      return S === 0 ? { tone: "text-muted-foreground", note: "empty" } : S > v ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : S < y ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = k(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = k(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (S, y) => (t(), a("div", R0, [
      o("div", U0, [
        o("p", H0, f(d.value), 1),
        o("p", {
          class: j(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", b.value === "" ? "text-muted-foreground italic" : ""])
        }, f(b.value || "Untitled page"), 3),
        o("p", {
          class: j(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", q0, [
        o("span", {
          class: j(M.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(M.value.note), 3),
        o("span", {
          class: j(w.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(w.value.note), 3)
      ]),
      y[0] || (y[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function G0() {
  we("radio", _d), we("checkboxlist", Ad), we("tags", Fd), we("colour", Jd), we("slider", ac), we("visual-select", vc), we("markdown", rd), we("code", pd), we("seo-preview", K0), st("swatch", hc), st("voucher-code-box", N0), st("document-colour-mode", E0);
}
function fa() {
  const e = Z(null), l = Z(!1);
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
const W0 = /* @__PURE__ */ A({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: n } = fa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: j(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      K(r.$slots, "default")
    ], 6));
  }
}), Z0 = ["id"], $e = /* @__PURE__ */ A({
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
        F(W0, null, {
          default: O(() => [
            K(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Z0));
  }
}), J0 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Y0 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, X0 = {
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
      e.eyebrow ? (t(), a("p", J0, f(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), a("h2", Y0, f(e.title), 1)) : $("", !0),
      e.body ? (t(), a("p", X0, f(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
});
function Q0() {
  const e = Z(null);
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
const ek = { class: "pk-tilt-inner relative h-full" }, tk = /* @__PURE__ */ A({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = Q0();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", ek, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        K(n.$slots, "default")
      ])
    ], 512));
  }
}), ak = { class: "flex flex-col gap-10" }, nk = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, lk = { class: "text-base font-semibold" }, ok = { class: "text-sm text-pretty text-muted-foreground" }, sk = /* @__PURE__ */ A({
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
    return (n, r) => (t(), D($e, null, {
      default: O(() => [
        o("div", ak, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", nk, [
            (t(!0), a(z, null, L(e.items ?? [], (s, i) => (t(), D(tk, {
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
                  o("h3", lk, f(s.title), 1),
                  o("p", ok, f(s.body), 1)
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
}), rk = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, ik = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, uk = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, dk = ["href"], ck = /* @__PURE__ */ A({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, n) => (t(), D($e, null, {
      default: O(() => [
        o("div", rk, [
          o("h2", ik, f(e.title), 1),
          e.body ? (t(), a("p", uk, f(e.body), 1)) : $("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, dk)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), fk = { class: "flex flex-col gap-8" }, mk = { class: "divide-y rounded-lg border" }, pk = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, vk = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, gk = /* @__PURE__ */ A({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D($e, { narrow: "" }, {
      default: O(() => [
        o("div", fk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", mk, [
            (t(!0), a(z, null, L(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", pk, [
                N(f(r.question) + " ", 1),
                n[0] || (n[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", vk, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), hk = { class: "flex flex-col gap-10" }, bk = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, xk = { class: "text-sm font-semibold" }, yk = { class: "text-sm text-pretty text-muted-foreground" }, kk = /* @__PURE__ */ A({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D($e, null, {
      default: O(() => [
        o("div", hk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", bk, [
            (t(!0), a(z, null, L(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", xk, f(r.title), 1),
              o("p", yk, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), $k = { class: "flex flex-col items-center gap-6 text-center" }, wk = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Ck = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, Sk = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Mk = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Bk = ["href"], _k = ["href"], Pk = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, zk = /* @__PURE__ */ A({
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
    return (l, n) => (t(), D($e, null, {
      default: O(() => [
        o("div", $k, [
          e.eyebrow ? (t(), a("p", wk, f(e.eyebrow), 1)) : $("", !0),
          o("h1", Ck, f(e.title), 1),
          e.body ? (t(), a("p", Sk, f(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", Mk, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, Bk)) : $("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, _k)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), a("p", Pk, f(e.note), 1)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Ak = { class: "flex flex-col items-center gap-6" }, jk = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, Ok = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, Lk = /* @__PURE__ */ A({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D($e, { muted: "" }, {
      default: O(() => [
        o("div", Ak, [
          e.title ? (t(), a("p", jk, f(e.title), 1)) : $("", !0),
          o("ul", Ok, [
            (t(!0), a(z, null, L(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Vk = { class: "flex flex-col gap-10" }, Dk = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Tk = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, Fk = ["aria-pressed"], Ik = ["aria-pressed"], Ek = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Nk = { class: "grid gap-4 md:grid-cols-3" }, Rk = { class: "flex flex-col gap-1" }, Uk = { class: "text-sm font-semibold" }, Hk = { class: "flex items-baseline gap-1" }, qk = { class: "text-3xl font-semibold tracking-tight" }, Kk = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, Gk = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, Wk = { class: "flex flex-col gap-2 text-sm" }, Zk = { class: "text-muted-foreground" }, Jk = ["href"], Yk = /* @__PURE__ */ A({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, n = Z(!1), r = k(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, u) => (t(), D($e, { muted: "" }, {
      default: O(() => [
        o("div", Vk, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", Dk, [
            o("div", Tk, [
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: u[0] || (u[0] = (d) => n.value = !1)
              }, " Monthly ", 10, Fk),
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: u[1] || (u[1] = (d) => n.value = !0)
              }, " Annual ", 10, Ik)
            ]),
            e.annualNote ? (t(), a("p", Ek, f(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", Nk, [
            (t(!0), a(z, null, L(e.items ?? [], (d, m) => (t(), a("li", {
              key: m,
              class: j(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", Rk, [
                o("h3", Uk, f(d.name), 1),
                o("p", Hk, [
                  o("span", qk, f(s(d)), 1),
                  d.period ? (t(), a("span", Kk, f(d.period), 1)) : $("", !0)
                ]),
                d.body ? (t(), a("p", Gk, f(d.body), 1)) : $("", !0)
              ]),
              o("ul", Wk, [
                (t(!0), a(z, null, L(d.features ?? [], (b, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", Zk, f(b.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), a("a", {
                key: 0,
                href: d.href ?? "#",
                class: j([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(d.label), 11, Jk)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function Xk() {
  const e = Z(null);
  let l = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), m = d.height + window.innerHeight, b = m <= 0 ? 0 : (window.innerHeight - d.top) / m;
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
      l.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((m) => {
        s = m.some((b) => b.isIntersecting), s && u();
      }), n.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), ve(() => {
    n?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const Qk = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, e2 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, t2 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, a2 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, n2 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, l2 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, o2 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, s2 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, r2 = { class: "ml-3 truncate text-xs text-muted-foreground" }, i2 = { class: "flex" }, u2 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, d2 = { class: "min-w-0 flex-1 p-4" }, c2 = { class: "flex flex-col divide-y rounded-md border" }, f2 = /* @__PURE__ */ A({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = Xk();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Qk, [
        o("div", e2, [
          o("div", t2, [
            o("h2", a2, f(e.title), 1),
            e.body ? (t(), a("p", n2, f(e.body), 1)) : $("", !0)
          ]),
          o("div", l2, [
            o("div", o2, [
              o("div", s2, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", r2, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", i2, [
                o("div", u2, [
                  (t(), a(z, null, L(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", d2, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", c2, [
                    (t(!0), a(z, null, L(e.rows, (s) => (t(), a("div", {
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
}), m2 = /* @__PURE__ */ A({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: n, shown: r } = fa(), s = Z(0);
    return de(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), m = (b) => {
        const p = Math.min((b - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = l.to;
      };
      requestAnimationFrame(m);
    }), (i, u) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), p2 = { class: "flex flex-col gap-10" }, v2 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, g2 = { class: "order-2 text-sm text-muted-foreground" }, h2 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, b2 = /* @__PURE__ */ A({
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
    return (n, r) => (t(), D($e, { muted: "" }, {
      default: O(() => [
        o("div", p2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", v2, [
            (t(!0), a(z, null, L(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", g2, f(s.label), 1),
              o("dd", h2, [
                l(s.value) ? (t(), D(m2, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(z, { key: 1 }, [
                  N(f(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), x2 = { class: "flex flex-col gap-10" }, y2 = { class: "grid gap-6 md:grid-cols-3" }, k2 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, $2 = { class: "text-sm font-semibold" }, w2 = { class: "text-sm text-pretty text-muted-foreground" }, C2 = /* @__PURE__ */ A({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D($e, null, {
      default: O(() => [
        o("div", x2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", y2, [
            (t(!0), a(z, null, L(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", k2, f(s + 1), 1),
              o("h3", $2, f(r.title), 1),
              o("p", w2, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), S2 = { class: "flex flex-col gap-10" }, M2 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, B2 = { class: "text-pretty text-sm leading-relaxed" }, _2 = { class: "mt-auto flex items-center gap-3" }, P2 = ["src"], z2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, A2 = { class: "min-w-0" }, j2 = { class: "block truncate text-sm font-medium" }, O2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, L2 = /* @__PURE__ */ A({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D($e, null, {
      default: O(() => [
        o("div", S2, [
          F(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", M2, [
            (t(!0), a(z, null, L(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", B2, " “" + f(r.quote) + "” ", 1),
              o("figcaption", _2, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, P2)) : (t(), a("span", z2, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", A2, [
                  o("span", j2, f(r.name), 1),
                  r.role ? (t(), a("span", O2, f(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), P4 = /* @__PURE__ */ A({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const n = e, r = {
      hero: zk,
      logos: Lk,
      features: kk,
      bento: sk,
      showcase: f2,
      steps: C2,
      stats: b2,
      testimonials: L2,
      pricing: Yk,
      faq: gk,
      cta: ck
    }, s = k(
      () => (n.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), a(z, null, L(s.value, (d) => (t(), D(be(d.component), le({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), V2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, z4 = /* @__PURE__ */ A({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", V2, [
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
}), D2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, A4 = /* @__PURE__ */ A({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", D2, [...n[0] || (n[0] = [
      vt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), T2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, j4 = /* @__PURE__ */ A({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", T2, [...n[0] || (n[0] = [
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
G0();
const O4 = "0.0.1";
export {
  Qw as AdminDirectory,
  Gs as Alert,
  Ws as AlertDescription,
  Zs as AlertTitle,
  Dw as AppPageFooter,
  n$ as AppearanceDrawer,
  X$ as Avatar,
  Q$ as AvatarFallback,
  ew as AvatarImage,
  Ct as BADGE_VARIANTS,
  Q2 as BadgeResolver,
  Kw as BarChart,
  tw as Breadcrumb,
  aw as BreadcrumbEllipsis,
  nw as BreadcrumbItem,
  lw as BreadcrumbLink,
  ow as BreadcrumbList,
  sw as BreadcrumbPage,
  rw as BreadcrumbSeparator,
  K2 as BulkActions,
  Mw as Card,
  Bw as CardAction,
  _w as CardContent,
  Pw as CardDescription,
  zw as CardFooter,
  Aw as CardHeader,
  jw as CardTitle,
  Cb as CartPanel,
  i4 as CatalogBrowser,
  Zv as CatalogCard,
  ca as CatalogFilterSheet,
  _t as CatalogGrid,
  s4 as CatalogInspect,
  m1 as CatalogItemDetail,
  r4 as CatalogItemView,
  u4 as CatalogRegister,
  o4 as CatalogTill,
  yp as ChartCard,
  Ze as ChartTooltip,
  Or as Checkbox,
  W2 as CheckboxCell,
  Z2 as CodeCell,
  no as ColourCell,
  Yw as ComboChart,
  c4 as DASHBOARD_HIDDEN_STORAGE_KEY,
  W1 as DASHBOARD_HIDE_KEY,
  f4 as DashboardShortcuts,
  nl as DataTable,
  vw as Dialog,
  gw as DialogClose,
  hw as DialogContent,
  bw as DialogDescription,
  xw as DialogFooter,
  yw as DialogHeader,
  jr as DialogOverlay,
  kw as DialogScrollContent,
  $w as DialogTitle,
  ww as DialogTrigger,
  Qw as DirectoryPage,
  F$ as DropdownMenu,
  I$ as DropdownMenuCheckboxItem,
  E$ as DropdownMenuContent,
  N$ as DropdownMenuGroup,
  R$ as DropdownMenuItem,
  U$ as DropdownMenuLabel,
  D4 as DropdownMenuPortal,
  H$ as DropdownMenuRadioGroup,
  q$ as DropdownMenuRadioItem,
  K$ as DropdownMenuSeparator,
  G$ as DropdownMenuShortcut,
  W$ as DropdownMenuSub,
  Z$ as DropdownMenuSubContent,
  J$ as DropdownMenuSubTrigger,
  Y$ as DropdownMenuTrigger,
  Y2 as EditableCell,
  qe as FormFieldControl,
  Xw as HeatmapChart,
  nt as ICON_PATHS,
  Zl as IconCell,
  Xl as ImageCell,
  C4 as InfoNode,
  tr as JPEG_IMAGE_ERROR,
  J2 as KeyValueCell,
  Cw as Label,
  Df as LineChart,
  lb as LineItems,
  Qe as MiniStatCard,
  iw as NavigationMenu,
  uw as NavigationMenuContent,
  dw as NavigationMenuIndicator,
  cw as NavigationMenuItem,
  fw as NavigationMenuLink,
  mw as NavigationMenuList,
  pw as NavigationMenuTrigger,
  zr as NavigationMenuViewport,
  er as OPAQUE_IMAGE_ERROR,
  S4 as PaymentGatewaySettings,
  w0 as PaymentGateways,
  Gw as PieChart,
  i$ as PkAlertError,
  z4 as PkAuroraBackdrop,
  Ue as PkBadge,
  sk as PkBento,
  l$ as PkBottomNav,
  Ow as PkBoundary,
  Rw as PkBuilder,
  se as PkButton,
  Lw as PkCard,
  Ad as PkCheckboxList,
  ua as PkCodeBox,
  pd as PkCodeInput,
  Jd as PkColourPicker,
  j4 as PkConsoleBackdrop,
  m2 as PkCountUp,
  ck as PkCta,
  Tw as PkDeviceFrame,
  Wc as PkDocument,
  Te as PkDropdown,
  A4 as PkEditorialBackdrop,
  gk as PkFaq,
  kk as PkFeatureGrid,
  he as PkFieldLabel,
  sa as PkFileUpload,
  Me as PkHeading,
  zk as PkHero,
  Ri as PkKeyValue,
  P4 as PkLandingSections,
  Lk as PkLogoCloud,
  rd as PkMarkdownInput,
  ut as PkModal,
  Bt as PkMultiSelect,
  s$ as PkOtpInput,
  y4 as PkPasskeyRegister,
  u$ as PkPasswordInput,
  Yk as PkPricing,
  Gh as PkQtyStepper,
  Co as PkQueryBuilder,
  _d as PkRadioGroup,
  Nw as PkRepeater,
  W0 as PkReveal,
  Xi as PkRichEditor,
  $e as PkSection,
  Oe as PkSectionHeading,
  f2 as PkShowcase,
  _1 as PkSignaturePad,
  Fe as PkSkeleton,
  Pt as PkSlideover,
  ac as PkSlider,
  o$ as PkSpinner,
  b2 as PkStats,
  ge as PkStatusBadge,
  li as PkStepIndicator,
  C2 as PkSteps,
  hc as PkSwatchPreview,
  Fd as PkTagsInput,
  L2 as PkTestimonials,
  pe as PkTextInput,
  tk as PkTiltCard,
  vc as PkVisualSelect,
  $g as PlanCard,
  l4 as PlanEditor,
  n4 as PlanGrid,
  Jw as PolarAreaChart,
  Zw as RadarChart,
  e$ as RecordActions,
  k4 as RecordForm,
  G2 as RelationPanel,
  Mv as STATUS_TONES,
  Ww as ScatterChart,
  Ey as SchemaNode,
  t4 as SegmentedBar,
  v4 as SelectionBar,
  Sr as Separator,
  p4 as SetupChecklist,
  na as ShadcnInput,
  rr as Sheet,
  c$ as SheetClose,
  ur as SheetContent,
  dr as SheetDescription,
  f$ as SheetFooter,
  cr as SheetHeader,
  fr as SheetTitle,
  m$ as SheetTrigger,
  Ip as ShortcutsWidget,
  p$ as Sidebar,
  v$ as SidebarContent,
  g$ as SidebarFooter,
  h$ as SidebarGroup,
  b$ as SidebarGroupAction,
  x$ as SidebarGroupContent,
  y$ as SidebarGroupLabel,
  k$ as SidebarHeader,
  $$ as SidebarInput,
  w$ as SidebarInset,
  C$ as SidebarMenu,
  S$ as SidebarMenuAction,
  M$ as SidebarMenuBadge,
  _$ as SidebarMenuButton,
  P$ as SidebarMenuItem,
  z$ as SidebarMenuSkeleton,
  A$ as SidebarMenuSub,
  j$ as SidebarMenuSubButton,
  O$ as SidebarMenuSubItem,
  L$ as SidebarProvider,
  V$ as SidebarRail,
  D$ as SidebarSeparator,
  T$ as SidebarTrigger,
  d4 as SignatureStudio,
  at as Sparkline,
  Sw as Spinner,
  e4 as StatCard,
  a4 as StatListChart,
  m4 as StatStrip,
  De as Switch,
  la as TRANSPARENT_IMAGE_HELP,
  g4 as TablePagination,
  h4 as TableShell,
  b4 as TableTabs,
  x4 as TableToolbar,
  qw as ThemeToggle,
  $r as Tooltip,
  wr as TooltipContent,
  B$ as TooltipProvider,
  Cr as TooltipTrigger,
  da as TrendBadge,
  $4 as UnsavedBar,
  Js as alertVariants,
  ls as appearanceVars,
  mt as applyAppearance,
  sr as assertTransparentImage,
  Je as buttonClasses,
  et as catalogFiltersActive,
  X as cn,
  Jv as cycleLabel,
  Be as emptyCatalogFilters,
  oi as fieldControl,
  zh as findExactSku,
  Yv as formatPerkValue,
  Oo as hasBadgeValue,
  Fw as hasFieldControl,
  Uw as hasOptionPreview,
  ie as iconPath,
  lr as imageHasTransparency,
  t$ as initializeAppearance,
  ft as isDark,
  zt as matchCatalogItem,
  Ar as navigationMenuTriggerStyle,
  nc as optionPreview,
  d$ as packWidgetColumns,
  Xv as perkGranted,
  Mt as readAppearance,
  G0 as registerBuiltInFieldControls,
  we as registerFieldControl,
  st as registerOptionPreview,
  Iw as registeredFieldTypes,
  lc as registeredOptionPreviews,
  Ew as resetFieldControls,
  Hw as resetOptionPreviews,
  a$ as setAppearancePersister,
  Mr as sidebarMenuButtonVariants,
  zv as statusBadgeVariant,
  Pv as statusTone,
  r$ as toUrl,
  aa as useAppearance,
  M4 as useColumnVisibility,
  B4 as useLiveUpdates,
  Q0 as usePointer,
  fa as useReveal,
  X2 as useSchemaColumns,
  Xk as useScrollProgress,
  Vw as useShellPageFooter,
  tt as useSidebar,
  _4 as useTenantTheme,
  w4 as useUnsavedChanges,
  O4 as version
};
//# sourceMappingURL=index.js.map
