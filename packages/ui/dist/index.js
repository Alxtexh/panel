import './ui.css';
import { defineComponent as O, ref as q, watch as fe, useId as Ca, computed as $, openBlock as t, createElementBlock as a, normalizeClass as z, createElementVNode as l, createCommentVNode as k, withModifiers as me, unref as b, Fragment as P, renderList as V, createTextVNode as U, toDisplayString as f, createStaticVNode as wt, renderSlot as K, nextTick as Be, onBeforeUnmount as he, createBlock as D, Teleport as Re, createVNode as I, Transition as je, withCtx as j, onMounted as pe, normalizeStyle as ne, resolveDynamicComponent as xe, mergeProps as oe, withDirectives as ce, vModelText as ye, normalizeProps as $e, guardReactiveProps as ze, defineAsyncComponent as Ft, inject as at, resolveComponent as Ct, vShow as Le, vModelSelect as Te, vModelDynamic as Sa, isRef as Ma, useTemplateRef as Ba, onErrorCaptured as _a, provide as ht, useSlots as Aa, markRaw as Jt, withKeys as Pa, reactive as We, useModel as Je, mergeModels as Pe, createSlots as za, shallowRef as Oa, watchEffect as ja } from "vue";
import { Check as Yt, AlertCircle as La, EyeOff as Va, Eye as Da, X as St, PanelLeftOpen as Ta, PanelLeftClose as Ea, Circle as Ia, ChevronRight as Xt, MoreHorizontal as Fa, ChevronDown as Na, Loader2Icon as Ra } from "@lucide/vue";
import { reactiveOmit as ie, useVModel as Qt, useMediaQuery as Ua, useEventListener as Ha, defaultDocument as qa } from "@vueuse/core";
import { useForwardPropsEmits as ve, CheckboxRoot as Ka, CheckboxIndicator as Ga, SwitchRoot as Wa, SwitchThumb as Za, DialogRoot as ea, DialogClose as Ue, DialogOverlay as Mt, DialogPortal as Bt, DialogContent as _t, DialogDescription as ta, DialogTitle as aa, DialogTrigger as na, createContext as Ja, Primitive as He, TooltipRoot as Ya, TooltipPortal as Xa, TooltipContent as Qa, TooltipArrow as en, TooltipProvider as la, TooltipTrigger as tn, Separator as an, DropdownMenuRoot as nn, DropdownMenuCheckboxItem as ln, DropdownMenuItemIndicator as oa, DropdownMenuPortal as on, DropdownMenuContent as sn, DropdownMenuGroup as rn, useForwardProps as we, DropdownMenuItem as un, DropdownMenuLabel as dn, DropdownMenuRadioGroup as cn, DropdownMenuRadioItem as fn, DropdownMenuSeparator as mn, DropdownMenuSub as pn, DropdownMenuSubContent as vn, DropdownMenuSubTrigger as gn, DropdownMenuTrigger as hn, AvatarRoot as bn, AvatarFallback as xn, AvatarImage as yn, NavigationMenuViewport as kn, NavigationMenuRoot as $n, NavigationMenuContent as wn, NavigationMenuIndicator as Cn, NavigationMenuItem as Sn, NavigationMenuLink as Mn, NavigationMenuList as Bn, NavigationMenuTrigger as _n, Label as An } from "reka-ui";
import { DropdownMenuPortal as E5 } from "reka-ui";
import { clsx as Pn } from "clsx";
import { twMerge as zn } from "tailwind-merge";
import { cva as At } from "class-variance-authority";
import { usePage as sa, Link as On } from "@inertiajs/vue3";
const jn = { class: "w-full border-collapse text-sm" }, Ln = { class: "bg-background sticky top-0 z-10" }, Vn = { class: "bg-muted/50" }, Dn = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Tn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, En = ["id", "checked", "indeterminate"], In = ["onClick"], Fn = {
  key: 0,
  class: "text-xs"
}, Nn = {
  key: 1,
  class: "text-xs opacity-40"
}, Rn = { key: 1 }, Un = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Hn = {
  key: 0,
  class: "bg-muted/40"
}, qn = ["colspan"], Kn = ["aria-expanded", "dusk", "onClick"], Gn = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Wn = {
  key: 1,
  dusk: "group-header"
}, Zn = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Jn = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Yn = {
  key: 1,
  class: "px-3 py-2"
}, Xn = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Qn = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, el = ["aria-label", "onClick"], tl = { class: "text-xs" }, al = { key: 1 }, nl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, ll = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, ol = { key: 0 }, sl = { class: "text-muted-foreground block text-[10px] font-medium" }, rl = { class: "font-semibold tabular-nums" }, il = { key: 1 }, ul = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, dl = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, cl = { class: "font-medium" }, fl = {
  key: 0,
  class: "text-sm"
}, ml = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e;
    function r(F) {
      if (!F || !n.groupBy)
        return "";
      if (F.__group !== void 0 && F.__group !== null)
        return String(F.__group);
      const T = F[n.groupBy.key];
      return T == null || T === "" ? "" : String(T);
    }
    function s(F) {
      return n.groupBy ? F === 0 ? !0 : r(n.rows[F]) !== r(n.rows[F - 1]) : !1;
    }
    function i(F) {
      if (F.__groupTitle)
        return String(F.__groupTitle);
      const T = n.groupBy ? F[n.groupBy.key] : null, X = T == null || T === "" ? "None" : String(T);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? X : `${n.groupBy.label}: ${X}`;
    }
    const u = q(/* @__PURE__ */ new Set()), d = q(/* @__PURE__ */ new Set());
    function m(F) {
      return n.groupBy?.collapsible ? u.value.has(F) : !1;
    }
    function h(F) {
      if (!n.groupBy?.collapsible)
        return;
      const T = new Set(d.value);
      T.add(F), d.value = T;
      const X = new Set(u.value);
      X.has(F) ? X.delete(F) : X.add(F), u.value = X;
    }
    function p(F) {
      return n.groupBy?.collapsible ? !m(r(n.rows[F])) : !0;
    }
    fe(
      () => n.rows,
      (F) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const T = new Set(u.value);
        for (const X of F) {
          const de = r(X);
          de !== "" && !d.value.has(de) && T.add(de);
        }
        u.value = T;
      },
      { immediate: !0 }
    );
    const x = q(null), _ = q(null);
    function w(F, T) {
      x.value = F, T.dataTransfer?.setData("text/plain", String(F)), T.dataTransfer && (T.dataTransfer.effectAllowed = "move");
    }
    function S() {
      x.value = null, _.value = null;
    }
    function y(F) {
      return x.value === null || _.value !== F ? "" : x.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function g(F, T) {
      x.value !== null && (T.preventDefault(), _.value = F);
    }
    function v(F) {
      const T = x.value;
      if (x.value = null, _.value = null, T === null || T === F)
        return;
      const X = n.rows.map((re) => re[n.rowKey]), [de] = X.splice(T, 1);
      X.splice(F, 0, de), c("reorder", X);
    }
    const c = o;
    function C(F, T) {
      !n.rowClickable || n.reordering || T.button !== 0 || T.metaKey || T.ctrlKey || T.shiftKey || T.altKey || T.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || c("row-click", F);
    }
    const B = q(null), A = Ca(), R = $(() => n.columns.filter((F) => !n.hidden?.has(F.key)));
    function E(F) {
      const T = F[n.rowKey];
      return T == null || T === "" ? null : T;
    }
    function ee(F) {
      const T = E(F);
      return T !== null && !!n.selected?.has(T);
    }
    const H = q(null);
    function G(F) {
      return n.rows.findIndex((T) => {
        const X = E(T);
        return X !== null && X === F;
      });
    }
    function Z(F, T) {
      const X = E(F);
      if (X === null)
        return;
      const de = T.shiftKey, re = !!n.selected?.has(X);
      if (de && H.value !== null && H.value !== X) {
        const et = G(H.value), ut = G(X);
        if (et !== -1 && ut !== -1) {
          const ka = Math.min(et, ut), $a = Math.max(et, ut), wa = !re;
          for (let tt = ka; tt <= $a; tt++) {
            if (!p(tt))
              continue;
            const dt = E(n.rows[tt]);
            if (dt === null)
              continue;
            !!n.selected?.has(dt) !== wa && c("toggle-row", dt);
          }
          H.value = X;
          return;
        }
      }
      c("toggle-row", X), H.value = X;
    }
    const ae = $(
      () => n.rows.map((F) => E(F)).filter((F) => F !== null)
    ), te = $(
      () => ae.value.length > 0 && ae.value.every((F) => n.selected?.has(F))
    ), J = $(
      () => !te.value && ae.value.some((F) => n.selected?.has(F))
    );
    function W(F) {
      return F.sortKey ?? F.key;
    }
    function M(F) {
      return n.sort === W(F);
    }
    async function N(F, T, X) {
      try {
        await navigator.clipboard.writeText(String(X)), B.value = `${F}-${T.key}`, setTimeout(() => B.value = null, 1200);
      } catch {
      }
    }
    const L = $(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function Y(F) {
      return n.summaries?.[F] ?? null;
    }
    function le(F) {
      const T = n.summaries?.[F], X = n.summaryValues?.[F];
      if (!T)
        return "";
      if (X == null)
        return "-";
      const de = T.divideBy ? X / T.divideBy : X, re = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: T.decimals,
        maximumFractionDigits: T.decimals
      }).format(de);
      return `${T.prefix ?? ""}${re}${T.suffix ?? ""}`;
    }
    return (F, T) => (t(), a("div", {
      class: z(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      l("table", jn, [
        l("thead", Ln, [
          l("tr", Vn, [
            e.reordering ? (t(), a("th", Dn)) : k("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Tn, [
              l("input", {
                id: `${b(A)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: te.value,
                indeterminate: J.value,
                "aria-label": "Select all rows on this page",
                onClick: T[0] || (T[0] = me(() => {
                }, ["stop"])),
                onChange: T[1] || (T[1] = me((X) => c("toggle-page", !te.value), ["stop"]))
              }, null, 40, En)
            ])) : k("", !0),
            (t(!0), a(P, null, V(R.value, (X) => (t(), a("th", {
              key: X.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              X.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (de) => c("sort", W(X))
              }, [
                U(f(X.label) + " ", 1),
                M(X) ? (t(), a("span", Fn, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Nn, "↕"))
              ], 8, In)) : (t(), a("span", Rn, f(X.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), a("th", Un, [...T[2] || (T[2] = [
              l("span", { class: "sr-only" }, "Actions", -1)
            ])])) : k("", !0)
          ])
        ]),
        l("tbody", {
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(P, null, V(e.rows, (X, de) => (t(), a(P, {
            key: E(X) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), a("tr", Hn, [
              l("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !m(r(X)),
                  dusk: `group-header-${r(X) || "none"}`,
                  onClick: (re) => h(r(X))
                }, [
                  l("span", Gn, f(m(r(X)) ? "▸" : "▾"), 1),
                  U(" " + f(i(X)), 1)
                ], 8, Kn)) : (t(), a("span", Wn, f(i(X)), 1))
              ], 8, qn)
            ])) : k("", !0),
            p(de) ? (t(), a("tr", {
              key: 1,
              class: z(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                ee(X) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                x.value === de ? "opacity-40" : "",
                y(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (re) => w(de, re),
              onDragover: (re) => g(de, re),
              onDrop: me((re) => v(de), ["prevent"]),
              onDragend: S,
              onContextmenu: (re) => c("row-contextmenu", X, re),
              onClick: (re) => C(X, re)
            }, [
              e.reordering ? (t(), a("td", Jn, [...T[3] || (T[3] = [
                wt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-5f636bf6><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-5f636bf6><circle cx="9" cy="6" r="1.5" data-v-5f636bf6></circle><circle cx="15" cy="6" r="1.5" data-v-5f636bf6></circle><circle cx="9" cy="12" r="1.5" data-v-5f636bf6></circle><circle cx="15" cy="12" r="1.5" data-v-5f636bf6></circle><circle cx="9" cy="18" r="1.5" data-v-5f636bf6></circle><circle cx="15" cy="18" r="1.5" data-v-5f636bf6></circle></svg></span>', 1)
              ])])) : k("", !0),
              e.selectable && !e.reordering ? (t(), a("td", Yn, [
                l("input", {
                  id: `${b(A)}-row-${E(X) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: E(X) ?? void 0,
                  checked: ee(X),
                  disabled: E(X) === null,
                  "aria-label": E(X) === null ? "This row has no id and cannot be selected" : `Select row ${E(X)}`,
                  onClick: me((re) => Z(X, re), ["stop"])
                }, null, 8, Xn)
              ])) : k("", !0),
              (t(!0), a(P, null, V(R.value, (re) => (t(), a("td", {
                key: re.key,
                class: z(["px-3 py-2 whitespace-nowrap", re.cellClass])
              }, [
                K(F.$slots, `cell:${re.key}`, {
                  row: X,
                  value: X[re.key],
                  column: re
                }, () => [
                  re.copyable ? (t(), a("span", Qn, [
                    U(f(X[re.key]) + " ", 1),
                    l("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${re.label.toLowerCase()}`,
                      onClick: (et) => N(String(X[e.rowKey]), re, X[re.key])
                    }, [
                      l("span", tl, f(B.value === `${X[e.rowKey]}-${re.key}` ? "✓" : "⧉"), 1)
                    ], 8, el)
                  ])) : (t(), a("span", al, f(X[re.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              F.$slots.actions ? (t(), a("td", nl, [
                K(F.$slots, "actions", { row: X }, void 0, !0)
              ])) : k("", !0)
            ], 42, Zn)) : k("", !0)
          ], 64))), 128))
        ], 2),
        L.value ? (t(), a("tfoot", ll, [
          l("tr", null, [
            e.selectable ? (t(), a("td", ol)) : k("", !0),
            (t(!0), a(P, null, V(e.columns, (X) => (t(), a(P, {
              key: `s-${X.key}`
            }, [
              e.hidden?.has(X.key) ? k("", !0) : (t(), a("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", X.cellClass])
              }, [
                Y(X.key) ? (t(), a(P, { key: 0 }, [
                  l("span", sl, f(Y(X.key).label), 1),
                  l("span", rl, f(le(X.key)), 1)
                ], 64)) : k("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), a("td", il)) : k("", !0)
          ])
        ])) : k("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), a("div", ul, [
        T[4] || (T[4] = l("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        K(F.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), a("div", dl, [
        l("p", cl, f(e.emptyTitle), 1),
        e.emptyHint ? (t(), a("p", fl, f(e.emptyHint), 1)) : k("", !0)
      ])) : k("", !0)
    ], 2));
  }
}), Pt = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of o)
    n[r] = s;
  return n;
}, pl = /* @__PURE__ */ Pt(ml, [["__scopeId", "data-v-5f636bf6"]]), vl = ["aria-label"], gl = { class: "border-b px-5 py-4" }, hl = { class: "text-base font-semibold" }, bl = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, xl = { class: "px-5 py-4" }, yl = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, Ze = /* @__PURE__ */ O({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(null);
    let i = null;
    const u = q(!1);
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
      const x = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (x.length === 0)
        return;
      const _ = x[0], w = x[x.length - 1];
      p.shiftKey && document.activeElement === _ ? (p.preventDefault(), w.focus()) : !p.shiftKey && document.activeElement === w && (p.preventDefault(), _.focus());
    }
    return fe(
      () => n.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", h), Be(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", h), i?.focus(), i = null);
      }
    ), he(() => document.removeEventListener("keydown", h)), (p, x) => (t(), D(Re, { to: "body" }, [
      I(je, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: d,
            onPointerup: m
          }, [
            l("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
            }, [
              l("div", gl, [
                l("h2", hl, f(e.title), 1),
                e.description ? (t(), a("p", bl, f(e.description), 1)) : k("", !0)
              ]),
              l("div", xl, [
                K(p.$slots, "default")
              ]),
              l("div", yl, [
                K(p.$slots, "footer")
              ])
            ], 8, vl)
          ], 32)) : k("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ct = {
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
  return e ? ct[e] ?? ct.dot : ct.dot;
}
const kl = 160, Ie = /* @__PURE__ */ O({
  __name: "PkDropdown",
  props: {
    align: { default: "end" },
    width: { default: "max-w-sm" },
    offset: { default: 4 },
    placement: { default: "bottom" },
    hoverable: { type: Boolean, default: !1 },
    dismissOnPanelClick: { type: Boolean, default: !0 }
  },
  setup(e, { expose: o }) {
    const n = e, r = q(!1), s = q(null), i = q(null), u = q({ top: 0, left: 0, minWidth: 0 }), d = q(null);
    let m = null;
    function h(C) {
      !n.dismissOnPanelClick || C.target?.closest("input, select, textarea, label, [data-keep-open]") || S();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await Be(), y());
    }
    function x() {
      m = setTimeout(S, 180);
    }
    async function _() {
      d.value = null, r.value = !r.value, r.value && (await Be(), y());
    }
    async function w(C, B) {
      d.value = { x: C, y: B }, r.value = !0, await Be(), y();
    }
    function S() {
      r.value = !1, d.value = null;
    }
    function y() {
      const C = s.value, B = i.value;
      if (!C || !B)
        return;
      const A = B.getBoundingClientRect(), R = 8, E = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : C.getBoundingClientRect();
      let ee, H;
      if (n.placement === "bottom")
        ee = E.bottom + n.offset, ee + A.height > window.innerHeight - R && E.top - A.height - n.offset > R && (ee = E.top - A.height - n.offset), H = n.align === "end" && !d.value ? E.right - A.width : E.left;
      else {
        ee = E.top;
        const G = n.placement === "right", Z = E.right + n.offset + A.width < window.innerWidth - R, ae = E.left - n.offset - A.width > R;
        H = (G ? Z || !ae : !ae && Z) ? E.right + n.offset : E.left - n.offset - A.width;
      }
      H = Math.min(Math.max(R, H), window.innerWidth - A.width - R), ee = Math.min(Math.max(R, ee), window.innerHeight - A.height - R), u.value = { top: ee, left: H, minWidth: Math.max(E.width, kl) };
    }
    function g(C) {
      if (!r.value)
        return;
      const B = C.target;
      s.value?.contains(B) || i.value?.contains(B) || (B instanceof Element ? B : B.parentElement)?.closest("[data-pk-overlay]") || S();
    }
    function v(C) {
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
    return pe(() => {
      document.addEventListener("pointerdown", g), document.addEventListener("keydown", v), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), he(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", g), document.removeEventListener("keydown", v), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), o({ close: S, openAt: w }), (C, B) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: B[2] || (B[2] = (A) => e.hoverable && p()),
      onPointerleave: B[3] || (B[3] = (A) => e.hoverable && x())
    }, [
      l("div", { onClick: _ }, [
        K(C.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(Re, { to: "body" }, [
        I(je, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: j(() => [
            r.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: z([
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
              onPointerenter: B[0] || (B[0] = (A) => e.hoverable && p()),
              onPointerleave: B[1] || (B[1] = (A) => e.hoverable && x()),
              onClick: h
            }, [
              K(C.$slots, "panel", { close: S })
            ], 38)) : k("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), $l = ["disabled"], wl = { class: "py-0.5" }, Cl = ["disabled", "onClick"], Sl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ml = ["d"], Bl = ["disabled"], _l = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Al = ["d"], Pl = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, zl = ["disabled", "onClick"], Ol = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jl = ["d"], Ll = { class: "text-muted-foreground text-sm" }, Vl = { class: "text-foreground font-medium tabular-nums" }, Dl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Tl = ["disabled"], El = { class: "text-muted-foreground text-sm" }, Il = { class: "text-foreground font-medium tabular-nums" }, Fl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Nl = ["disabled"], R$ = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(null), i = q(!1), u = $(() => n.allMatching ? n.total : n.count), d = $(() => u.value !== void 0), m = $(() => d.value && u.value === 0), h = $(() => n.actions.filter((v) => !v.destructive)), p = $(() => n.actions.filter((v) => v.destructive)), x = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function _(v) {
      return x[v.color ?? "gray"] ?? x.gray;
    }
    function w(v) {
      if (v.confirmation) {
        s.value = v;
        return;
      }
      r("run", v.key);
    }
    function S() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function y() {
      i.value = !1, r("export");
    }
    const g = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), a(P, null, [
      I(Ie, null, {
        trigger: j(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...c[5] || (c[5] = [
            U(" Bulk actions ", -1),
            l("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "m6 9 6 6 6-6" })
            ], -1)
          ])], 8, $l)
        ]),
        panel: j(() => [
          l("div", wl, [
            (t(!0), a(P, null, V(h.value, (C) => (t(), a("button", {
              key: C.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", _(C)]),
              disabled: e.busy,
              onClick: (B) => w(C)
            }, [
              (t(), a("svg", Sl, [
                l("path", {
                  d: b(ue)(C.icon)
                }, null, 8, Ml)
              ])),
              U(" " + f(C.label), 1)
            ], 10, Cl))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (C) => i.value = !0)
            }, [
              (t(), a("svg", _l, [
                l("path", {
                  d: b(ue)("download")
                }, null, 8, Al)
              ])),
              c[6] || (c[6] = U(" Export CSV ", -1))
            ], 8, Bl)) : k("", !0),
            p.value.length ? (t(), a("div", Pl, [
              (t(!0), a(P, null, V(p.value, (C) => (t(), a("button", {
                key: C.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (B) => w(C)
              }, [
                (t(), a("svg", Ol, [
                  l("path", {
                    d: b(ue)(C.icon ?? "trash")
                  }, null, 8, jl)
                ])),
                U(" " + f(C.label), 1)
              ], 8, zl))), 128))
            ])) : k("", !0)
          ])
        ]),
        _: 1
      }),
      I(Ze, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: c[2] || (c[2] = (C) => s.value = null)
      }, {
        footer: j(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[1] || (c[1] = (C) => s.value = null)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: z([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !d.value || m.value,
            onClick: S
          }, f(s.value?.label), 11, Tl)
        ]),
        default: j(() => [
          l("p", Ll, [
            c[7] || (c[7] = U(" This will affect ", -1)),
            l("span", Vl, [
              d.value ? (t(), a(P, { key: 1 }, [
                U(f(g(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[8] || (c[8] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Dl, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : k("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      I(Ze, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: c[4] || (c[4] = (C) => i.value = !1)
      }, {
        footer: j(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[3] || (c[3] = (C) => i.value = !1)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || m.value,
            onClick: y
          }, " Export CSV ", 8, Nl)
        ]),
        default: j(() => [
          l("p", El, [
            c[9] || (c[9] = U(" This will export ", -1)),
            l("span", Il, [
              d.value ? (t(), a(P, { key: 1 }, [
                U(f(g(u.value)) + " record" + f(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[10] || (c[10] = U(" . ", -1))
          ]),
          m.value ? (t(), a("p", Fl, " Nothing matches the current filters - there is nothing to export. ")) : k("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Rl = { class: "bg-card overflow-hidden rounded-lg border" }, Ul = { class: "pk-scroll w-full overflow-x-auto" }, Hl = { class: "w-full border-collapse text-sm" }, ql = { class: "bg-muted/40" }, Kl = { class: "divide-y" }, Gl = { key: 0 }, Wl = ["colspan"], Zl = { key: 1 }, Jl = ["colspan"], Yl = ["href"], Xl = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Ql = ["disabled"], eo = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, to = ["href"], U$ = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.columns.filter((u) => u.type !== "image"));
    function i(u, d) {
      return d == null || d === "" ? "-" : u.type === "date" || u.type === "datetime" ? new Date(String(d)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...u.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof d == "number" ? new Intl.NumberFormat().format(d) : String(d);
    }
    return (u, d) => (t(), a("div", Rl, [
      l("div", Ul, [
        l("table", Hl, [
          l("thead", ql, [
            l("tr", null, [
              (t(!0), a(P, null, V(s.value, (m) => (t(), a("th", {
                key: m.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, f(m.label), 1))), 128))
            ])
          ]),
          l("tbody", Kl, [
            e.loading && e.rows.length === 0 ? (t(), a("tr", Gl, [
              l("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, Wl)
            ])) : e.loaded && e.rows.length === 0 ? (t(), a("tr", Zl, [
              l("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, f(e.emptyText), 9, Jl)
            ])) : k("", !0),
            (t(!0), a(P, null, V(e.rows, (m, h) => (t(), a("tr", {
              key: m.id ?? h,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), a(P, null, V(s.value, (p) => (t(), a("td", {
                key: p.key,
                class: z(["px-3 py-2 whitespace-nowrap", [
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
                  }, f(i(p, m[p.key])), 9, Yl)) : (t(), a(P, { key: 1 }, [
                    U(f(i(p, m[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), a("div", Xl, [
        l("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (m) => r("load", e.nextCursor))
        }, f(e.loading ? "Loading…" : "Load more"), 9, Ql)
      ])) : e.capped ? (t(), a("p", eo, [
        U(" Showing the first " + f(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), a("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, to)) : (t(), a(P, { key: 1 }, [
          U("Open the full list to search or filter the rest.")
        ], 64))
      ])) : k("", !0)
    ]));
  }
}), ao = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", no = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, lo = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Ke(e = {}) {
  const o = e.variant ?? "default", n = e.size ?? "default";
  return [ao, no[o], lo[n], e.class].filter(Boolean).join(" ");
}
const se = /* @__PURE__ */ O({
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
    const o = e, n = $(
      () => Ke({ variant: o.variant, size: o.size, class: o.class })
    ), r = $(() => o.as === "button" ? o.type : void 0);
    return (s, i) => (t(), D(xe(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: z(n.value)
    }, {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), oo = { class: "flex items-center gap-2 overflow-x-auto" }, so = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ro = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, io = { class: "flex flex-col" }, uo = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, co = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, fo = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, mo = /* @__PURE__ */ O({
  __name: "PkStepIndicator",
  props: {
    steps: {},
    activeStep: {},
    hasError: { type: Function, default: () => !1 },
    failedStep: { default: null },
    interactive: { type: Boolean, default: !0 }
  },
  emits: ["update:activeStep"],
  setup(e, { emit: o }) {
    const n = e, r = o;
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
    return (m, h) => (t(), a("ol", oo, [
      (t(!0), a(P, null, V(e.steps, (p, x) => (t(), a("li", {
        key: x,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(xe(e.interactive ? "button" : "div"), oe({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(x)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: x > e.activeStep } : {}, {
          onClick: (_) => e.interactive && x <= e.activeStep && r("update:activeStep", x)
        }), {
          default: j(() => [
            l("span", {
              class: z(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(x)])
            }, [
              d(x) ? (t(), a("svg", so, [...h[0] || (h[0] = [
                l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(x) ? (t(), a("svg", ro, [...h[1] || (h[1] = [
                l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(P, { key: 2 }, [
                U(f(x + 1), 1)
              ], 64))
            ], 2),
            l("span", io, [
              l("span", null, f(p.label), 1),
              p.description ? (t(), a("span", uo, f(p.description), 1)) : k("", !0)
            ]),
            e.hasError(x) ? (t(), a("span", co)) : k("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        x < e.steps.length - 1 ? (t(), a("span", fo)) : k("", !0)
      ]))), 128))
    ]));
  }
}), Ye = /* @__PURE__ */ new Map();
function Se(e, o) {
  Ye.set(e, o);
}
function po(e) {
  return Ye.get(e);
}
function H$(e) {
  return Ye.has(e);
}
function q$() {
  return [...Ye.keys()].sort();
}
function K$() {
  Ye.clear();
}
class vo extends Error {
  fieldErrors;
  constructor(o, n = {}) {
    super(o), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function G$(e) {
  if (!e || typeof e != "object")
    return {};
  const o = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (o[n] = s);
  }
  return o;
}
function go(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create option";
}
function ho(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const o = e.label.replace(/\s*id$/i, "").trim();
  return o !== "" ? `Create ${o.toLowerCase()}` : "Create new";
}
const bo = ["aria-expanded"], xo = ["aria-label", "onClick"], yo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, ko = { class: "ml-auto flex shrink-0 items-center gap-1" }, $o = {
  key: 0,
  class: "border-b p-1"
}, wo = ["placeholder"], Co = { class: "max-h-60 overflow-y-auto p-1" }, So = ["aria-selected", "onMouseenter", "onClick"], Mo = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, zt = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(null), i = q(null), u = q(null), d = q(!1), m = q(""), h = q(0), p = q({ top: 0, left: 0, width: 0 }), x = $(
      () => n.modelValue.map(
        (H) => n.options.find((G) => G.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), _ = $(() => n.searchable ?? n.options.length > 6), w = $(() => {
      const H = new Set(n.modelValue), G = m.value.trim().toLowerCase();
      return n.options.filter((Z) => !H.has(Z.value)).filter((Z) => G ? Z.label.toLowerCase().includes(G) : !0);
    }), S = $(() => n.max !== null && n.modelValue.length >= n.max);
    function y() {
      const H = s.value, G = i.value;
      if (!H || !G)
        return;
      const Z = H.getBoundingClientRect(), ae = G.getBoundingClientRect(), te = 8;
      let J = Z.bottom + 4;
      J + ae.height > window.innerHeight - te && Z.top - ae.height - 4 > te && (J = Z.top - ae.height - 4), p.value = {
        top: J,
        left: Math.min(Math.max(te, Z.left), window.innerWidth - Z.width - te),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function g() {
      n.disabled || d.value || (d.value = !0, m.value = "", h.value = 0, await Be(), y(), u.value?.focus());
    }
    function v() {
      d.value = !1, m.value = "";
    }
    function c() {
      d.value ? v() : g();
    }
    function C(H) {
      S.value || (r("update:modelValue", [...n.modelValue, H.value]), m.value = "", h.value = 0, Be(() => {
        y(), u.value?.focus();
      }));
    }
    function B(H) {
      r(
        "update:modelValue",
        n.modelValue.filter((G) => G !== H)
      ), Be(y);
    }
    function A() {
      r("update:modelValue", []), Be(y);
    }
    function R(H) {
      if (!n.disabled) {
        if (H.key === "Escape" && d.value) {
          H.stopPropagation(), v();
          return;
        }
        if (H.key === "Backspace" && m.value === "" && n.modelValue.length > 0) {
          B(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!d.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), g();
          return;
        }
        if (d.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), h.value = Math.min(h.value + 1, w.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), h.value = Math.max(h.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const G = w.value[h.value];
            G && C(G);
          }
        }
      }
    }
    function E(H) {
      if (!d.value)
        return;
      const G = H.target;
      s.value?.contains(G) || i.value?.contains(G) || v();
    }
    function ee() {
      d.value && y();
    }
    return fe(w, (H) => {
      h.value > H.length - 1 && (h.value = Math.max(0, H.length - 1));
    }), pe(() => {
      document.addEventListener("pointerdown", E), window.addEventListener("scroll", ee, !0), window.addEventListener("resize", ee);
    }), he(() => {
      document.removeEventListener("pointerdown", E), window.removeEventListener("scroll", ee, !0), window.removeEventListener("resize", ee);
    }), (H, G) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: R
    }, [
      l("div", {
        class: z(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          d.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": d.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: c
      }, [
        (t(!0), a(P, null, V(x.value, (Z) => (t(), a("span", {
          key: Z.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          U(f(Z.label) + " ", 1),
          l("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${Z.label}`,
            onClick: me((ae) => B(Z.value), ["stop"])
          }, [...G[1] || (G[1] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, xo)
        ]))), 128)),
        x.value.length === 0 ? (t(), a("span", yo, f(e.placeholder), 1)) : k("", !0),
        l("span", ko, [
          x.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: me(A, ["stop"])
          }, " Clear ")) : k("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...G[2] || (G[2] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, bo),
      (t(), D(Re, { to: "body" }, [
        I(je, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: j(() => [
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
              _.value ? (t(), a("div", $o, [
                ce(l("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": G[0] || (G[0] = (Z) => m.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: R
                }, null, 40, wo), [
                  [ye, m.value]
                ])
              ])) : k("", !0),
              l("div", Co, [
                (t(!0), a(P, null, V(w.value, (Z, ae) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", ae === h.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": ae === h.value,
                  onMouseenter: (te) => h.value = ae,
                  onClick: (te) => C(Z)
                }, f(Z.label), 43, So))), 128)),
                w.value.length === 0 ? (t(), a("p", Mo, [
                  S.value ? (t(), a(P, { key: 0 }, [
                    U("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), a(P, { key: 1 }, [
                    U("Nothing matches “" + f(m.value) + "”.", 1)
                  ], 64)) : (t(), a(P, { key: 2 }, [
                    U("Everything is selected.")
                  ], 64))
                ])) : k("", !0)
              ])
            ], 4)) : k("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
  }
}), Bo = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, _o = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q({});
    fe(
      () => n.open,
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), D(Ze, {
      open: e.open,
      title: e.title,
      description: e.description,
      busy: e.processing,
      onClose: d[1] || (d[1] = (m) => r("close"))
    }, {
      footer: j(() => [
        I(se, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: d[0] || (d[0] = (m) => r("close"))
        }, {
          default: j(() => [...d[2] || (d[2] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            U(f(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        l("form", {
          class: "flex flex-col gap-4",
          onSubmit: me(i, ["prevent"])
        }, [
          e.generalError ? (t(), a("p", Bo, f(e.generalError), 1)) : k("", !0),
          (t(!0), a(P, null, V(e.fields, (m) => (t(), D(Fe, {
            key: m.key,
            field: m,
            value: s.value[m.key],
            error: e.errors[m.key],
            processing: e.processing,
            onChange: (h) => s.value[m.key] = h
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
});
function Q(...e) {
  return zn(Pn(e));
}
function W$(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Ao = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(Ka), oe({ "data-slot": "checkbox" }, b(i), {
      class: b(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j((m) => [
        I(b(Ga), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: j(() => [
            K(u.$slots, "default", $e(ze(m)), () => [
              I(b(Yt), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ee = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ve(ie(n, "class"), r);
    return (i, u) => (t(), D(b(Wa), oe({ "data-slot": "switch" }, b(s), {
      class: b(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: j(() => [
        I(b(Za), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Po = ["accept", "disabled"], zo = { class: "text-sm font-medium" }, Oo = { key: 0 }, jo = { key: 1 }, Lo = { class: "text-muted-foreground text-xs" }, Vo = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, Do = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, To = ["src"], Eo = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, Io = { class: "min-w-0 flex-1" }, Fo = { class: "block truncate text-sm font-medium" }, No = { class: "text-muted-foreground text-xs" }, Ro = ["href"], Uo = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, ra = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(null), i = q(!1), u = q(null), d = q(null), m = q(null), h = $(() => n.accept.map((C) => `.${C}`).join(",")), p = $(() => m.value ?? n.modelValue?.url ?? null), x = $(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${_(n.maxKilobytes * 1024)}`);
    function _(C) {
      if (!C)
        return "";
      const B = ["B", "KB", "MB", "GB"];
      let A = C, R = 0;
      for (; A >= 1024 && R < B.length - 1; )
        A /= 1024, R++;
      return `${A.toFixed(A < 10 && R > 0 ? 1 : 0)} ${B[R]}`;
    }
    function w(C) {
      return C.split(".").pop()?.toLowerCase() ?? "";
    }
    function S(C) {
      return n.accept.length && !n.accept.includes(w(C.name)) ? `${w(C.name).toUpperCase() || "That"} files are not accepted here.` : C.size > n.maxKilobytes * 1024 ? `That file is ${_(C.size)}; the limit is ${_(n.maxKilobytes * 1024)}.` : null;
    }
    async function y(C) {
      const B = C?.[0];
      if (!(!B || n.disabled) && (d.value = S(B), !d.value)) {
        g(), n.image && B.type.startsWith("image/") && (m.value = URL.createObjectURL(B)), u.value = 0;
        try {
          const A = await n.upload(B, (R) => {
            u.value = R;
          });
          r("update:modelValue", A);
        } catch (A) {
          d.value = A instanceof Error ? A.message : "The upload failed.", g();
        } finally {
          u.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function g() {
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function v() {
      const C = n.modelValue;
      g(), d.value = null, r("update:modelValue", null), C && !C.url && n.discard && await n.discard(C.value).catch(() => {
      });
    }
    function c(C) {
      i.value = !1, y(C.dataTransfer?.files ?? null);
    }
    return (C, B) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", Do, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, To)) : (t(), a("span", Eo, f(w(e.modelValue.name) || "file"), 1)),
        l("span", Io, [
          l("span", Fo, f(e.modelValue.name), 1),
          l("span", No, [
            U(f(_(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(P, { key: 0 }, [
              B[4] || (B[4] = U(" · ", -1)),
              l("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, Ro)
            ], 64)) : (t(), a(P, { key: 1 }, [
              U(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? k("", !0) : (t(), a("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: v
        }, [...B[5] || (B[5] = [
          l("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])]))
      ])) : (t(), a("label", {
        key: 0,
        class: z(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: B[1] || (B[1] = me((A) => i.value = !0, ["prevent"])),
        onDragleave: B[2] || (B[2] = me((A) => i.value = !1, ["prevent"])),
        onDrop: me(c, ["prevent"])
      }, [
        l("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: h.value,
          disabled: e.disabled,
          onChange: B[0] || (B[0] = (A) => y(A.target.files))
        }, null, 40, Po),
        B[3] || (B[3] = l("svg", {
          class: "text-muted-foreground size-6",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          l("path", { d: "M12 16V4" }),
          l("path", { d: "m7 9 5-5 5 5" }),
          l("path", { d: "M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" })
        ], -1)),
        l("span", zo, [
          u.value === null ? (t(), a("span", Oo, "Drop a file or click to choose")) : (t(), a("span", jo, "Uploading…"))
        ]),
        l("span", Lo, f(x.value), 1),
        u.value !== null ? (t(), a("span", Vo, [
          l("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ne({ width: `${u.value}%` })
          }, null, 4)
        ])) : k("", !0)
      ], 34)),
      d.value ? (t(), a("p", Uo, f(d.value), 1)) : k("", !0)
    ]));
  }
}), Ho = { class: "flex flex-col gap-2" }, qo = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Ko = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Go = { class: "flex flex-col gap-1" }, Wo = ["onUpdate:modelValue", "disabled", "aria-label"], Zo = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Jo = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Yo = ["onUpdate:modelValue", "disabled", "aria-label"], Xo = ["disabled", "aria-label", "onClick"], Qo = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, es = { class: "flex items-center gap-3" }, ts = ["disabled"], as = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, ns = /* @__PURE__ */ O({
  __name: "PkKeyValue",
  props: {
    modelValue: {},
    keyLabel: { default: "Key" },
    valueLabel: { default: "Value" },
    maxPairs: { default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const u = q(d(n.modelValue));
    function d(y) {
      return y ? Object.entries(y).map(([g, v]) => ({
        uid: i++,
        key: g,
        value: v ?? ""
      })) : [];
    }
    fe(
      () => n.modelValue,
      (y) => {
        JSON.stringify(y ?? null) !== JSON.stringify(m()) && (u.value = d(y));
      }
    );
    function m() {
      const y = {};
      for (const g of u.value) {
        const v = g.key.trim();
        v !== "" && (y[v] = g.value);
      }
      return Object.keys(y).length ? y : null;
    }
    function h() {
      r("update:modelValue", m());
    }
    const p = $(() => {
      const y = /* @__PURE__ */ new Map();
      for (const g of u.value) {
        const v = g.key.trim();
        v !== "" && y.set(v, (y.get(v) ?? 0) + 1);
      }
      return new Set([...y.entries()].filter(([, g]) => g > 1).map(([g]) => g));
    }), x = $(
      () => new Set(
        u.value.map((y) => y.key.trim()).filter((y) => y !== "" && !s.test(y))
      )
    ), _ = $(() => n.maxPairs !== null && u.value.length >= n.maxPairs);
    function w() {
      _.value || n.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function S(y) {
      u.value = u.value.filter((g) => g.uid !== y), h();
    }
    return (y, g) => (t(), a("div", Ho, [
      u.value.length ? (t(), a("div", qo, [
        l("div", Ko, [
          l("span", null, f(e.keyLabel), 1),
          l("span", null, f(e.valueLabel), 1),
          g[0] || (g[0] = l("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(P, null, V(u.value, (v) => (t(), a("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          l("div", Go, [
            ce(l("input", {
              "onUpdate:modelValue": (c) => v.key = c,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || x.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: h
            }, null, 42, Wo), [
              [ye, v.key]
            ]),
            x.value.has(v.key.trim()) ? (t(), a("p", Zo, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), a("p", Jo, " Used twice - only the last value will be saved. ")) : k("", !0)
          ]),
          ce(l("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: h
          }, null, 40, Yo), [
            [ye, v.value]
          ]),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (c) => S(v.uid)
          }, [...g[1] || (g[1] = [
            l("svg", {
              class: "size-4",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Xo)
        ]))), 128))
      ])) : (t(), a("p", Qo, " Nothing here yet. ")),
      l("div", es, [
        l("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || _.value,
          onClick: w
        }, [
          g[2] || (g[2] = l("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "M12 5v14M5 12h14" })
          ], -1)),
          U(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, ts),
        e.maxPairs !== null ? (t(), a("p", as, f(u.value.length) + " of " + f(e.maxPairs), 1)) : k("", !0)
      ])
    ]));
  }
}), ls = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, os = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, ss = ["disabled", "title", "aria-label", "onClick"], rs = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, is = ["d"], us = ["disabled"], ds = ["contenteditable", "data-placeholder"], cs = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, fs = /* @__PURE__ */ O({
  __name: "PkRichEditor",
  props: {
    modelValue: {},
    toolbar: { default: () => ["bold", "italic", "heading", "list", "link"] },
    maxLength: { default: null },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: "Write a note…" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(null);
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
    ], d = $(() => u.filter((S) => n.toolbar.includes(S.id))), m = $(() => n.toolbar.includes("link")), h = q(0);
    function p() {
      const S = s.value?.innerHTML ?? "", y = (s.value?.innerText ?? "").trim();
      h.value = y.length;
      const g = y === "" ? null : S;
      i = g, r("update:modelValue", g);
    }
    function x(S) {
      n.disabled || (s.value?.focus(), document.execCommand(S.command, !1, S.argument), p());
    }
    function _() {
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
    return pe(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", h.value = s.value.innerText.trim().length);
    }), fe(
      () => n.modelValue,
      (S) => {
        S !== i && s.value && (s.value.innerHTML = S ?? "", h.value = s.value.innerText.trim().length);
      }
    ), (S, y) => (t(), a("div", ls, [
      l("div", os, [
        (t(!0), a(P, null, V(d.value, (g) => (t(), a("button", {
          key: g.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: g.label,
          "aria-label": g.label,
          onMousedown: y[0] || (y[0] = me(() => {
          }, ["prevent"])),
          onClick: (v) => x(g)
        }, [
          (t(), a("svg", rs, [
            l("path", {
              d: g.path
            }, null, 8, is)
          ]))
        ], 40, ss))), 128)),
        m.value ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: y[1] || (y[1] = me(() => {
          }, ["prevent"])),
          onClick: _
        }, [...y[2] || (y[2] = [
          l("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" })
          ], -1)
        ])], 40, us)) : k("", !0)
      ]),
      l("div", {
        ref_key: "editor",
        ref: s,
        class: z(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: w
      }, null, 42, ds),
      e.maxLength !== null ? (t(), a("div", cs, f(h.value) + " / " + f(e.maxLength), 1)) : k("", !0)
    ]));
  }
}), ms = /* @__PURE__ */ Pt(fs, [["__scopeId", "data-v-32c63bc7"]]), ps = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, vs = { class: "flex items-center justify-between gap-2" }, gs = ["for"], hs = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, bs = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-1 text-xs"
}, xs = ["aria-label", "disabled"], ys = {
  key: 7,
  class: "flex flex-col gap-2"
}, ks = ["id", "value", "disabled"], $s = ["value"], ws = {
  key: 0,
  class: "relative"
}, Cs = ["disabled"], Ss = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Ms = { class: "max-h-56 overflow-y-auto p-1" }, Bs = ["onClick"], _s = {
  key: 8,
  class: "relative"
}, As = ["disabled", "aria-invalid"], Ps = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, zs = { class: "max-h-56 overflow-y-auto p-1" }, Os = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, js = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Ls = ["onClick"], Vs = ["id", "value", "disabled", "aria-invalid"], Ds = ["value"], Ts = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, Es = { class: "text-muted-foreground" }, Is = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, Fs = { class: "text-muted-foreground" }, Ns = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], Rs = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Us = ["aria-label", "disabled"], Hs = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], qs = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ks = ["aria-label", "disabled"], Gs = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ws = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Zs = ["aria-label", "disabled"], Js = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ys = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Xs = ["aria-label", "disabled"], Qs = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, er = ["disabled", "aria-pressed", "onClick"], tr = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, ar = ["title", "disabled", "onClick"], nr = ["href"], lr = {
  key: 19,
  class: "text-destructive text-xs",
  role: "alert"
}, or = {
  key: 20,
  class: "text-muted-foreground text-xs"
}, sr = "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50", rr = "bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50", Fe = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = Ft(() => import("./PkRepeater-J84jGe3T.js")), r = Ft(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = o, u = q(!1), d = q(""), m = q([]), h = q(!1), p = q(null);
    let x;
    fe(d, (le) => {
      s.searchOptions && (clearTimeout(x), h.value = !0, x = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(le);
        } catch {
        } finally {
          h.value = !1;
        }
      }, 200));
    });
    async function _() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, m.value.length === 0 && s.searchOptions)) {
        h.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          h.value = !1;
        }
      }
    }
    function w(le) {
      p.value = le.label, i("change", le.value), u.value = !1, d.value = "";
    }
    function S() {
      p.value = null, i("change", null);
    }
    const y = at("panelPicker", null), g = at("panelCreateOption", null), v = q(!1), c = q(!1), C = q({}), B = q(null), A = $(() => go(s.field)), R = $(() => ho(s.field));
    function E() {
      C.value = {}, B.value = null, v.value = !0, u.value = !1;
    }
    function ee() {
      c.value || (v.value = !1, C.value = {}, B.value = null);
    }
    async function H(le) {
      if (g) {
        c.value = !0, C.value = {}, B.value = null;
        try {
          const F = await g.run(s.field.key, { ...le });
          w(F), v.value = !1;
        } catch (F) {
          F instanceof vo ? (C.value = F.fieldErrors, B.value = Object.keys(F.fieldErrors).length === 0 ? F.message : null) : B.value = F instanceof Error ? F.message : "Could not create that option.";
        } finally {
          c.value = !1;
        }
      }
    }
    const G = $(() => {
      if (!s.field.tableSelect || !y?.base)
        return;
      const le = y.returnUrl || "/";
      return `${y.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
    }), Z = $(() => s.field.morphTo ?? []), ae = $(() => {
      const le = s.value;
      return le && typeof le == "object" && !Array.isArray(le) ? le : { type: void 0, id: void 0 };
    });
    function te(le) {
      i("change", { type: le || null, id: null });
    }
    function J(le) {
      i("change", { type: ae.value.type ?? null, id: le });
    }
    function W(le) {
      p.value = le.label, J(le.value), u.value = !1, d.value = "";
    }
    he(() => clearTimeout(x));
    const M = $(() => po(s.field.type)), N = $(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function L(le) {
      if (le) {
        if (le.copy) {
          const F = s.value == null ? "" : String(s.value);
          F !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(F);
          return;
        }
        if (le.url && typeof window < "u") {
          window.open(le.url, "_blank", "noopener,noreferrer");
          return;
        }
        le.key && i("affix-action", le.key);
      }
    }
    function Y(le) {
      const F = document.getElementById(`f-${s.field.key}`);
      if (!(F instanceof HTMLTextAreaElement) && !(F instanceof HTMLInputElement))
        return;
      const T = F.selectionStart ?? F.value.length, X = F.selectionEnd ?? T;
      F.setRangeText(le, T, X, "end"), F.dispatchEvent(new Event("input", { bubbles: !0 })), F.focus();
    }
    return (le, F) => (t(), a(P, null, [
      e.field.type === "hidden" ? (t(), a(P, { key: 0 }, [], 64)) : (t(), a("div", ps, [
        l("div", vs, [
          l("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
          }, [
            U(f(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", hs, "*")) : k("", !0)
          ], 10, gs),
          e.field.hint ? (t(), a("span", bs, [
            U(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: F[0] || (F[0] = (T) => L(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, xs)) : k("", !0)
          ])) : k("", !0)
        ]),
        M.value ? (t(), D(xe(M.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[1] || (F[1] = (T) => i("change", T))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(ra, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": F[2] || (F[2] = (T) => i("change", T))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), D(b(n), {
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
          "onUpdate:modelValue": F[3] || (F[3] = (T) => i("change", T))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(b(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": F[4] || (F[4] = (T) => i("change", T))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(ms, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[5] || (F[5] = (T) => i("change", T))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(ns, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": F[6] || (F[6] = (T) => i("change", T))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(zt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": F[7] || (F[7] = (T) => i("change", T))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : Z.value.length ? (t(), a("div", ys, [
          l("select", {
            id: `f-${e.field.key}-type`,
            value: ae.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            onChange: F[8] || (F[8] = (T) => te(T.target.value))
          }, [
            F[24] || (F[24] = l("option", { value: "" }, "Type", -1)),
            (t(!0), a(P, null, V(Z.value, (T) => (t(), a("option", {
              key: T.value,
              value: T.value
            }, f(T.label), 9, $s))), 128))
          ], 40, ks),
          ae.value.type && e.searchOptions ? (t(), a("div", ws, [
            l("button", {
              type: "button",
              class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              disabled: e.field.disabled || e.processing,
              onClick: _
            }, [
              l("span", {
                class: z(p.value || ae.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (ae.value.id ? String(ae.value.id) : "Search…")), 3)
            ], 8, Cs),
            u.value ? (t(), a("div", Ss, [
              ce(l("input", {
                "onUpdate:modelValue": F[9] || (F[9] = (T) => d.value = T),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ye, d.value]
              ]),
              l("div", Ms, [
                (t(!0), a(P, null, V(m.value, (T) => (t(), a("button", {
                  key: String(T.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (X) => W(T)
                }, f(T.label), 9, Bs))), 128))
              ])
            ])) : k("", !0),
            u.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: F[10] || (F[10] = (T) => u.value = !1)
            })) : k("", !0)
          ])) : k("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", _s, [
          l("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: _
          }, [
            l("span", {
              class: z(p.value || e.value ? "" : "text-muted-foreground")
            }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: me(S, ["stop"])
            }, " ✕ ")) : k("", !0)
          ], 8, As),
          u.value ? (t(), a("div", Ps, [
            ce(l("input", {
              "onUpdate:modelValue": F[11] || (F[11] = (T) => d.value = T),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ye, d.value]
            ]),
            l("div", zs, [
              h.value ? (t(), a("p", Os, " Searching… ")) : m.value.length === 0 ? (t(), a("p", js, " No matches ")) : k("", !0),
              (t(!0), a(P, null, V(m.value, (T) => (t(), a("button", {
                key: String(T.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (X) => w(T)
              }, f(T.label), 9, Ls))), 128)),
              e.field.createOption && b(g) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                F[25] || (F[25] = l("span", { "aria-hidden": "true" }, "+", -1)),
                U(" " + f(R.value), 1)
              ])) : k("", !0)
            ])
          ])) : k("", !0),
          u.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: F[12] || (F[12] = (T) => u.value = !1)
          })) : k("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: F[13] || (F[13] = (T) => i("change", T.target.value || null))
        }, [
          F[26] || (F[26] = l("option", { value: "" }, "-", -1)),
          (t(!0), a(P, null, V(e.options, (T) => (t(), a("option", {
            key: String(T.value),
            value: T.value
          }, f(T.label), 9, Ds))), 128))
        ], 40, Vs)) : e.field.type === "toggle" ? (t(), a("label", Ts, [
          I(b(Ee), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": F[14] || (F[14] = (T) => i("change", T))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Es, f(e.field.help ?? "Enabled"), 1)
        ])) : e.field.type === "checkbox" ? (t(), a("label", Is, [
          I(b(Ao), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": F[15] || (F[15] = (T) => i("change", T === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          l("span", Fs, f(e.field.help ?? e.field.label), 1)
        ])) : e.field.type === "textarea" && !N.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onInput: F[16] || (F[16] = (T) => i("change", T.target.value))
        }, null, 40, Ns)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: z(["border-input focus-within:ring-ring flex overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Rs, f(e.field.prefix ?? e.field.prefixIcon), 1)) : k("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: F[17] || (F[17] = (T) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Us)) : k("", !0),
          l("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
            onInput: F[18] || (F[18] = (T) => i("change", T.target.value))
          }, null, 40, Hs),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", qs, f(e.field.suffix ?? e.field.suffixIcon), 1)) : k("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: F[19] || (F[19] = (T) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Ks)) : k("", !0)
        ], 2)) : N.value ? (t(), a("div", {
          key: 15,
          class: z(["border-input focus-within:ring-ring flex h-9 overflow-hidden rounded-md border focus-within:ring-2", { "opacity-50": e.field.disabled || e.processing }])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Ws, f(e.field.prefix ?? e.field.prefixIcon), 1)) : k("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: F[21] || (F[21] = (T) => L(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, Zs)) : k("", !0),
          l("input", {
            id: `f-${e.field.key}`,
            type: e.field.type === "number" ? "number" : e.field.type === "date" ? "date" : e.field.type === "datetime" ? "datetime-local" : e.field.type === "password" ? "password" : e.field.inputType ?? "text",
            value: e.value ?? "",
            placeholder: e.field.placeholder,
            autocomplete: e.field.type === "password" ? "new-password" : void 0,
            min: e.field.min,
            max: e.field.max,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: z(rr),
            onInput: F[22] || (F[22] = (T) => i("change", T.target.value))
          }, null, 40, Js),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Ys, f(e.field.suffix ?? e.field.suffixIcon), 1)) : k("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: F[23] || (F[23] = (T) => L(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Xs)) : k("", !0)
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
          class: z(sr),
          onInput: F[20] || (F[20] = (T) => i("change", T.target.value))
        }, null, 40, Gs)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", Qs, [
          (t(!0), a(P, null, V(e.field.presets, (T) => (t(), a("button", {
            key: T,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: z([
              "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == T ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == T
            ),
            onClick: (X) => i("change", String(T))
          }, f(T), 11, er))), 128))
        ])) : k("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", tr, [
          (t(!0), a(P, null, V(e.field.chips, (T, X) => (t(), a("button", {
            key: X,
            type: "button",
            title: T,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (de) => Y(String(X))
          }, f(X), 9, ar))), 128))
        ])) : k("", !0),
        G.value ? (t(), a("a", {
          key: 18,
          href: G.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, nr)) : k("", !0),
        e.error ? (t(), a("p", lr, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", or, f(e.field.help), 1)) : k("", !0)
      ])),
      e.field.createOption && b(g) ? (t(), D(_o, {
        key: 2,
        open: v.value,
        title: A.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: c.value,
        errors: C.value,
        "general-error": B.value,
        onClose: ee,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : k("", !0)
    ], 64));
  }
}), ir = { class: "text-sm font-semibold" }, ur = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, dr = {
  key: 2,
  class: "bg-card rounded-lg border"
}, cr = { class: "border-b px-4 py-3" }, fr = { class: "text-sm font-semibold" }, mr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, pr = {
  key: 4,
  class: "min-w-0 space-y-4"
}, vr = {
  key: 7,
  class: "flex flex-col gap-3"
}, gr = { class: "text-sm font-medium" }, hr = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, br = {
  key: 0,
  class: "mb-1 font-medium"
}, xr = ["onClick"], yr = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, kr = { class: "flex items-center justify-between gap-3 border-t p-4" }, $r = ["disabled"], ia = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(!n.node.collapsed), i = q(0), u = q(0), d = $(
      () => (n.node.children ?? []).map((v) => ({
        label: v.label ?? "",
        description: v.description
      }))
    ), m = $(() => n.depth === 0), h = $(() => {
      const v = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, c = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        v[n.node.align ?? "start"] ?? "items-start",
        c[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = $(() => {
      const v = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return v[n.node.tone ?? "info"] ?? v.info;
    }), x = $(() => {
      const v = n.node.columns ?? 1;
      return v >= 3 ? "sm:grid-cols-3" : v === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function _(v) {
      const c = v.children?.length ?? 1;
      return c >= 3 ? "md:grid-cols-3" : c === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function w(v = 1) {
      return v >= 4 ? "md:col-span-4" : v === 3 ? "md:col-span-3" : v === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function S(v) {
      const c = [], C = (B) => {
        B.component === "field" && B.key && c.push(B.key), B.children?.forEach(C);
      };
      return C(v), c.some((B) => n.errors[B]);
    }
    function y(v) {
      if (v.hidden)
        return !1;
      const c = v.visibleWhen;
      return c ? n.values[c.field] == c.value : !0;
    }
    function g(v) {
      if (n.upload)
        return (c, C) => n.upload(v, c, C);
    }
    return (v, c) => {
      const C = Ct("SchemaNode", !0);
      return e.node.component === "field" && y(e.node) ? (t(), D(Fe, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (B) => e.searchOptions(e.node.key, B) : void 0,
        upload: g(e.node.key),
        discard: e.discard,
        onChange: c[0] || (c[0] = (B) => r("change", e.node.key, B)),
        onAffixAction: c[1] || (c[1] = (B) => r("affix-action", e.node.key, B))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && y(e.node) ? (t(), a("section", {
        key: 1,
        class: z(m.value ? "bg-card rounded-lg border" : "")
      }, [
        l("header", {
          class: z(["flex items-start justify-between gap-3", [
            m.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: c[2] || (c[2] = (B) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", null, [
            l("h3", ir, f(e.node.label), 1),
            e.node.description ? (t(), a("p", ur, f(e.node.description), 1)) : k("", !0)
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...c[24] || (c[24] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : k("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [x.value, m.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => (t(), D(C, {
            key: A,
            node: B,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: z(B.span && B.span >= 2 ? "sm:col-span-2" : ""),
            onChange: c[3] || (c[3] = (R, E) => r("change", R, E)),
            onAffixAction: c[4] || (c[4] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : k("", !0)
      ], 2)) : e.node.component === "card" && y(e.node) ? (t(), a("section", dr, [
        l("header", cr, [
          l("h3", fr, f(e.node.title), 1),
          e.node.description ? (t(), a("p", mr, f(e.node.description), 1)) : k("", !0)
        ]),
        l("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", x.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => (t(), D(C, {
            key: A,
            node: B,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[5] || (c[5] = (R, E) => r("change", R, E)),
            onAffixAction: c[6] || (c[6] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && y(e.node) ? (t(), a("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", _(e.node)])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => (t(), D(C, {
          key: A,
          node: B,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: z(B.component === "column" ? w(B.span) : ""),
          onChange: c[7] || (c[7] = (R, E) => r("change", R, E)),
          onAffixAction: c[8] || (c[8] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && y(e.node) ? (t(), a("div", pr, [
        (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => (t(), D(C, {
          key: A,
          node: B,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: c[9] || (c[9] = (R, E) => r("change", R, E)),
          onAffixAction: c[10] || (c[10] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), a("div", {
        key: 5,
        class: z(["grid grid-cols-1 gap-4", x.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => (t(), D(C, {
          key: A,
          node: B,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: c[11] || (c[11] = (R, E) => r("change", R, E)),
          onAffixAction: c[12] || (c[12] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), a("div", {
        key: 6,
        class: z(["flex", h.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => (t(), D(C, {
          key: A,
          node: B,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: c[13] || (c[13] = (R, E) => r("change", R, E)),
          onAffixAction: c[14] || (c[14] = (R, E) => r("affix-action", R, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), a("fieldset", vr, [
        l("legend", gr, f(e.node.label), 1),
        e.node.description ? (t(), a("p", hr, f(e.node.description), 1)) : k("", !0),
        l("div", {
          class: z(["grid grid-cols-1 gap-4", x.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => (t(), D(C, {
            key: A,
            node: B,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[15] || (c[15] = (R, E) => r("change", R, E)),
            onAffixAction: c[16] || (c[16] = (R, E) => r("affix-action", R, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), a("div", {
        key: 8,
        role: "note",
        class: z(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), a("p", br, f(e.node.title), 1)) : k("", !0),
        l("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 9,
        class: z(m.value ? "bg-card rounded-lg border" : "")
      }, [
        l("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", m.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => (t(), a("button", {
            key: A,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (R) => i.value = A
          }, [
            U(f(B.label) + " ", 1),
            S(B) ? (t(), a("span", yr)) : k("", !0)
          ], 10, xr))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => ce((t(), a("div", {
          key: A,
          class: z(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(B.children ?? [], (R, E) => (t(), D(C, {
            key: E,
            node: R,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[17] || (c[17] = (ee, H) => r("change", ee, H)),
            onAffixAction: c[18] || (c[18] = (ee, H) => r("affix-action", ee, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Le, i.value === A]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), a("div", {
        key: 10,
        class: z(m.value ? "bg-card rounded-lg border" : "")
      }, [
        I(mo, {
          class: z(["p-4", m.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (B) => S((e.node.children ?? [])[B]),
          "onUpdate:activeStep": c[19] || (c[19] = (B) => u.value = B)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(P, null, V(e.node.children ?? [], (B, A) => ce((t(), a("div", {
          key: A,
          class: z(["flex flex-col gap-5", m.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(B.children ?? [], (R, E) => (t(), D(C, {
            key: E,
            node: R,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: c[20] || (c[20] = (ee, H) => r("change", ee, H)),
            onAffixAction: c[21] || (c[21] = (ee, H) => r("affix-action", ee, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Le, u.value === A]
        ])), 128)),
        l("div", kr, [
          l("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: c[22] || (c[22] = (B) => u.value--)
          }, " Back ", 8, $r),
          u.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: c[23] || (c[23] = (B) => u.value++)
          }, " Next ")) : k("", !0)
        ])
      ], 2)) : k("", !0);
    };
  }
}), Z$ = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q({});
    fe(
      () => n.open,
      (u) => {
        u && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (u, d) => (t(), D(Ze, {
      open: e.open,
      title: e.title,
      busy: e.processing,
      onClose: d[2] || (d[2] = (m) => r("close"))
    }, {
      footer: j(() => [
        I(se, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: d[1] || (d[1] = (m) => r("close"))
        }, {
          default: j(() => [...d[3] || (d[3] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: j(() => [
            U(f(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: j(() => [
        l("form", {
          class: "flex flex-col gap-4",
          onSubmit: me(i, ["prevent"])
        }, [
          (t(!0), a(P, null, V(e.form?.nodes ?? [], (m, h) => (t(), D(ia, {
            key: h,
            node: m,
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
}), wr = ["title"], Cr = ["aria-label"], Sr = ["d"], Mr = { class: "sr-only" }, Br = /* @__PURE__ */ O({
  __name: "IconCell",
  props: {
    value: {},
    icons: { default: () => ({}) },
    colors: { default: () => ({}) },
    labels: { default: () => ({}) },
    defaultIcon: { default: "dot" }
  },
  setup(e) {
    const o = e, n = {
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
    }, s = $(() => typeof o.value == "boolean" ? o.value ? "1" : "" : o.value === null || o.value === void 0 ? "" : String(o.value)), i = $(() => o.icons[s.value] ?? o.defaultIcon), u = $(() => n[i.value] ?? n.dot), d = $(() => r[o.colors[s.value] ?? "neutral"] ?? r.neutral), m = $(() => o.labels[s.value] ?? String(o.value ?? "-"));
    return (h, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: m.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: z(["size-4", d.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": m.value
      }, [
        l("path", { d: u.value }, null, 8, Sr)
      ], 10, Cr)),
      l("span", Mr, f(m.value), 1)
    ], 8, wr));
  }
}), _r = ["src"], Ar = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Pr = /* @__PURE__ */ O({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const o = e, n = q(!1);
    fe(
      () => o.src,
      () => n.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = $(() => {
      const u = typeof o.src == "string" ? o.src.trim() : "";
      return u === "" ? null : /^(https?:)?\/\//i.test(u) ? u : null;
    }), i = $(() => {
      const u = typeof o.fallbackText == "string" ? o.fallbackText.trim() : "";
      return u === "" ? "?" : u.split(/\s+/).slice(0, 2).map((d) => d[0]?.toUpperCase() ?? "").join("");
    });
    return (u, d) => (t(), a("span", {
      class: z(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: d[0] || (d[0] = (m) => n.value = !0)
      }, null, 40, _r)) : e.fallback === "initials" ? (t(), a(P, { key: 1 }, [
        U(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", Ar, [...d[1] || (d[1] = [
        l("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : k("", !0)
    ], 2));
  }
}), zr = {
  key: 0,
  class: "text-muted-foreground"
}, Or = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, jr = {
  key: 0,
  class: "font-mono text-xs"
}, Lr = {
  key: 1,
  class: "sr-only"
}, Vr = /* @__PURE__ */ O({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = $(() => {
      const s = (o.value ?? "").trim();
      return n.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", zr, "-")) : (t(), a("span", Or, [
      l("span", {
        class: "size-4 shrink-0 rounded border",
        style: ne({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", jr, f(r.value), 1)) : (t(), a("span", Lr, f(r.value), 1))
    ]));
  }
}), Dr = { class: "inline-flex items-center" }, Tr = ["checked", "aria-label"], Er = { class: "sr-only" }, J$ = /* @__PURE__ */ O({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const o = e, n = $(() => {
      const s = o.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = $(
      () => n.value ? o.trueLabel ?? "Yes" : o.falseLabel ?? "No"
    );
    return (s, i) => (t(), a("span", Dr, [
      l("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, Tr),
      l("span", Er, f(r.value), 1)
    ]));
  }
}), Ir = {
  key: 0,
  class: "text-muted-foreground"
}, Fr = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, Y$ = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = $(
      () => String(o.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", Fr, f(n.value), 1)) : (t(), a("span", Ir, "—"));
  }
}), Nr = { class: "flex items-center gap-2" }, Rr = ["onUpdate:modelValue", "onChange"], Ur = ["value"], Hr = ["onUpdate:modelValue"], qr = ["value"], Kr = ["onUpdate:modelValue"], Gr = ["onUpdate:modelValue", "multiple"], Wr = ["value"], Zr = ["onUpdate:modelValue", "type"], Jr = ["aria-label", "onClick"], Yr = { class: "flex items-center gap-2" }, Xr = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = () => ({ logic: "and", rules: [] }), i = q(n.modelValue ? structuredClone(n.modelValue) : s());
    fe(
      () => n.modelValue,
      (c) => {
        i.value = c ? structuredClone(c) : s();
      }
    );
    const u = (c) => "rules" in c, d = $(() => Object.keys(n.fields));
    function m(c) {
      const C = c ? n.fields[c]?.kind : void 0;
      return C ? n.operators[C] ?? [] : [];
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
      const c = d.value[0];
      i.value.rules.push({
        field: c,
        operator: m(c)[0],
        value: void 0
      }), p();
    }
    function _() {
      i.value.rules.push(s()), p();
    }
    function w(c) {
      i.value.rules.splice(c, 1), p();
    }
    function S(c) {
      c.operator = m(c.field)[0], c.value = void 0, p();
    }
    const y = $(() => n.depth + 1 < n.maxDepth);
    function g() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, C) => {
      const B = Ct("PkQueryBuilder", !0);
      return t(), a("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        l("div", Nr, [
          ce(l("select", {
            "onUpdate:modelValue": C[0] || (C[0] = (A) => i.value.logic = A),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...C[1] || (C[1] = [
            l("option", { value: "and" }, "Match all", -1),
            l("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Te, i.value.logic]
          ]),
          C[2] || (C[2] = l("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), a(P, null, V(i.value.rules, (A, R) => (t(), a("div", {
          key: R,
          class: "flex items-start gap-2"
        }, [
          u(A) ? (t(), D(B, {
            key: 0,
            modelValue: i.value.rules[R],
            "onUpdate:modelValue": [(E) => i.value.rules[R] = E, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(P, { key: 1 }, [
            ce(l("select", {
              "onUpdate:modelValue": (E) => A.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => S(A)
            }, [
              (t(!0), a(P, null, V(d.value, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(e.fields[E].label), 9, Ur))), 128))
            ], 40, Rr), [
              [Te, A.field]
            ]),
            ce(l("select", {
              "onUpdate:modelValue": (E) => A.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(P, null, V(m(A.field), (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(h[E] ?? E), 9, qr))), 128))
            ], 40, Hr), [
              [Te, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? ce((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (E) => A.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...C[3] || (C[3] = [
              l("option", { value: !0 }, "Yes", -1),
              l("option", { value: !1 }, "No", -1)
            ])], 40, Kr)), [
              [Te, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? ce((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (E) => A.value = E,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(P, null, V(e.fields[A.field].options, (E) => (t(), a("option", {
                key: E,
                value: E
              }, f(E), 9, Wr))), 128))
            ], 40, Gr)), [
              [Te, A.value]
            ]) : ce((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (E) => A.value = E,
              type: A.field && e.fields[A.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Zr)), [
              [Sa, A.value]
            ])
          ], 64)),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(A) ? "group" : "rule"}`,
            onClick: (E) => w(R)
          }, " × ", 8, Jr)
        ]))), 128)),
        l("div", Yr, [
          I(se, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: x
          }, {
            default: j(() => [...C[4] || (C[4] = [
              U("Add rule", -1)
            ])]),
            _: 1
          }),
          y.value ? (t(), D(se, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: _
          }, {
            default: j(() => [...C[5] || (C[5] = [
              U(" Add group ", -1)
            ])]),
            _: 1
          })) : k("", !0),
          e.root ? (t(), a(P, { key: 1 }, [
            C[8] || (C[8] = l("span", { class: "flex-1" }, null, -1)),
            I(se, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: g
            }, {
              default: j(() => [...C[6] || (C[6] = [
                U(" Clear ", -1)
              ])]),
              _: 1
            }),
            I(se, {
              type: "button",
              size: "sm",
              onClick: v
            }, {
              default: j(() => [...C[7] || (C[7] = [
                U(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : k("", !0)
        ])
      ], 2);
    };
  }
}), Qr = {
  key: 0,
  class: "font-mono text-xs"
}, ei = {
  key: 1,
  class: "text-muted-foreground"
}, ti = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, X$ = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, n = $(
      () => o.value && typeof o.value == "object" && !Array.isArray(o.value) ? Object.keys(o.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", Qr, f(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", ei, "—")) : (t(), a("span", ti, f(n.value.length) + " " + f(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), ai = ["aria-checked", "aria-label", "title", "disabled"], ni = ["value", "disabled"], li = ["value"], Q$ = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.value === !0 || n.value === 1 || n.value === "1"), i = $(() => n.busy || n.disabled), u = $(
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
      class: z(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: me(d, ["stop"])
    }, [
      l("span", {
        class: z(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, ai)) : (t(), a("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = me(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), a(P, null, V(e.options, (x, _) => (t(), a("option", {
        key: _,
        value: _
      }, f(x), 9, li))), 128))
    ], 40, ni));
  }
}), oi = ["data-variant"], si = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ge = /* @__PURE__ */ O({
  __name: "PkBadge",
  props: {
    variant: { default: "default" },
    class: {}
  },
  setup(e) {
    const o = e, n = {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white dark:bg-destructive/60",
      outline: "text-foreground",
      success: "border-transparent bg-success text-success-foreground",
      warning: "border-transparent bg-warning text-warning-foreground",
      info: "border-transparent bg-info text-info-foreground"
    }, r = $(
      () => [si, n[o.variant], o.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      K(s.$slots, "default")
    ], 10, oi));
  }
}), Ot = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function ri(e) {
  return e != null && e !== "";
}
function ii(e) {
  const o = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" ")) : (e.key === "name" && o.push("font-medium"), e.mono && o.push("font-mono text-xs"), e.muted && o.push("text-muted-foreground"), e.transform === "upper" && o.push("uppercase"), e.transform === "lower" && o.push("lowercase"), e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" "));
}
function ew(e) {
  const o = $(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: ii(s)
    }))
  ), n = $(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const u = n.value[s];
    if (!u)
      return "outline";
    const d = typeof i == "boolean" ? i ? "1" : "" : String(i), m = u.colors?.[d] ?? u.defaultColor ?? "neutral";
    return Ot[m] ?? "outline";
  }
  return { columns: o, byKey: n, badgeVariant: r };
}
const ui = ["disabled", "aria-label", "aria-busy"], di = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ci = ["d"], fi = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, mi = ["disabled", "onClick"], pi = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, vi = ["d"], gi = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, tw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.busy || n.disabled), i = $(() => String(n.value ?? "")), u = $(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function d(x) {
      return typeof x == "boolean" ? x ? "1" : "" : String(x ?? "");
    }
    function m(x) {
      const _ = n.colors[d(x)] ?? n.defaultColor ?? "neutral";
      return Ot[_] ?? "outline";
    }
    function h(x) {
      return n.options[x] ?? x;
    }
    function p(x, _) {
      if (s.value || x === i.value) {
        _();
        return;
      }
      r("change", x), _();
    }
    return (x, _) => (t(), a("div", {
      onClick: _[0] || (_[0] = me(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(Ge, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: j(() => [
          U(f(h(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), D(Ie, {
        key: 0,
        align: "start"
      }, {
        trigger: j(() => [
          l("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": u.value,
            "aria-busy": e.busy
          }, [
            I(Ge, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(h(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", di, [
              l("path", {
                d: b(ue)("chevron-down")
              }, null, 8, ci)
            ]))
          ], 8, ui)
        ]),
        panel: j(({ close: w }) => [
          l("div", fi, f(u.value), 1),
          (t(!0), a(P, null, V(e.options, (S, y) => (t(), a("button", {
            key: y,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (g) => p(String(y), w)
          }, [
            I(Ge, {
              variant: m(y),
              class: "capitalize"
            }, {
              default: j(() => [
                U(f(S), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(y) === i.value ? (t(), a("svg", pi, [
              l("path", {
                d: b(ue)("check")
              }, null, 8, vi)
            ])) : (t(), a("span", gi))
          ], 8, mi))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), hi = { class: "flex items-center justify-end" }, bi = ["aria-label"], xi = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, yi = ["d"], ki = ["href"], $i = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wi = ["d"], Ci = ["disabled", "onClick"], Si = ["d"], Mi = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Bi = ["disabled", "onClick"], _i = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ai = ["d"], aw = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = q(null), u = q(null), d = $(() => r.groups.flatMap((g) => g.actions)), m = $(() => d.value.filter((g) => !g.destructive)), h = $(() => d.value.filter((g) => g.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function x(g) {
      return p[g.color ?? "gray"] ?? p.gray;
    }
    const _ = $(() => d.value.length === 0);
    function w(g) {
      s("run", g);
    }
    function S(g) {
      _.value || (g.preventDefault(), i.value?.openAt(g.clientX, g.clientY));
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
      const c = v.indexOf(document.activeElement), C = g.key === "ArrowDown" ? 1 : -1, B = (c + C + v.length) % v.length;
      v[B]?.focus();
    }
    return o({ openContextMenu: S }), (g, v) => (t(), a("div", hi, [
      _.value ? k("", !0) : (t(), D(Ie, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: j(() => [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), a("svg", xi, [
              l("path", {
                d: b(ue)("more-vertical")
              }, null, 8, yi)
            ]))
          ], 8, bi)
        ]),
        panel: j(() => [
          l("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: y
          }, [
            (t(!0), a(P, null, V(m.value, (c) => (t(), a(P, {
              key: c.key
            }, [
              c.link ? (t(), a("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", x(c)])
              }, [
                (t(), a("svg", $i, [
                  l("path", {
                    d: b(ue)(c.icon)
                  }, null, 8, wi)
                ])),
                U(" " + f(c.label), 1)
              ], 10, ki)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", x(c)]),
                disabled: e.busy === c.key,
                onClick: (C) => w(c)
              }, [
                (t(), a("svg", {
                  class: z(["size-4 shrink-0", e.busy === c.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  l("path", {
                    d: b(ue)(c.icon)
                  }, null, 8, Si)
                ], 2)),
                U(" " + f(c.label), 1)
              ], 10, Ci))
            ], 64))), 128)),
            h.value.length ? (t(), a("div", Mi, [
              (t(!0), a(P, null, V(h.value, (c) => (t(), a("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (C) => w(c)
              }, [
                (t(), a("svg", _i, [
                  l("path", {
                    d: b(ue)(c.icon ?? "trash")
                  }, null, 8, Ai)
                ])),
                U(" " + f(c.label), 1)
              ], 8, Bi))), 128))
            ])) : k("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), bt = {
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
}, xt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, nt = 12, lt = 20, Pi = [0, 0.25, 0.5, 0.75, 1], jt = "alxtexhpanel.appearance", Me = {
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
let Nt = !1;
const zi = "alxtexhpanel.appearance.vars";
function yt(e) {
  return e.theme === "dark";
}
const Rt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function Oi(e) {
  const o = bt[e.primary] ?? bt.slate, n = xt[e.surface] ?? xt.neutral, r = n.chroma, s = n.hue, u = yt(e) ? {
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
    "--primary": o.value,
    "--primary-foreground": o.foreground,
    "--ring": o.value,
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
    "--pk-row-padding": Rt[e.density] ?? Rt.comfortable
  };
}
function Lt() {
  if (typeof window > "u")
    return { ...Me };
  try {
    const e = localStorage.getItem(jt);
    if (!e)
      return { ...Me };
    const o = { ...Me, ...JSON.parse(e) };
    o.theme === "system" && (o.theme = Me.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof o.fontSize == "string" && (o.fontSize = n[o.fontSize] ?? Me.fontSize), (typeof o.fontSize != "number" || Number.isNaN(o.fontSize) || o.fontSize < nt || o.fontSize > lt) && (o.fontSize = Me.fontSize), o;
  } catch {
    return { ...Me };
  }
}
function nw(e) {
  const o = Lt(), n = e ? { ...o, ...e } : o;
  if (Oe.value = n, kt(n), e)
    try {
      localStorage.setItem(jt, JSON.stringify(n));
    } catch {
    }
}
let ua = null;
function lw(e) {
  ua = e;
}
let da = {};
function ji(e) {
  if (da = e, !(typeof document > "u") && !Lt().primaryChosen)
    for (const [o, n] of Object.entries(e))
      document.documentElement.style.setProperty(o, n);
}
function kt(e) {
  if (typeof document > "u")
    return;
  const o = document.documentElement, n = { ...Oi(e), ...e.primaryChosen ? {} : da };
  o.classList.toggle("dark", yt(e));
  for (const [r, s] of Object.entries(n))
    o.style.setProperty(r, s);
  o.dataset.sidebar = e.sidebarSide, o.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      zi,
      JSON.stringify({ dark: yt(e), theme: e.theme, vars: n })
    );
  } catch {
  }
}
function ca() {
  function e(r) {
    kt(r);
  }
  function o(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Oe.value = { ...Oe.value, ...r, ...s };
    try {
      localStorage.setItem(jt, JSON.stringify(Oe.value));
    } catch {
    }
    e(Oe.value), ua?.({ ...r, ...s });
  }
  function n() {
    o({ ...Me });
  }
  return pe(() => {
    Nt || (Nt = !0, Oe.value = Lt(), kt(Oe.value));
  }), {
    appearance: $(() => Oe.value),
    set: o,
    reset: n,
    PRIMARY_COLORS: bt,
    SURFACE_TINTS: xt,
    FONT_SIZE_MIN: nt,
    FONT_SIZE_MAX: lt,
    RADIUS_OPTIONS: Pi
  };
}
const Li = { class: "flex items-center justify-between border-b px-4 py-3" }, Vi = { class: "flex items-center gap-2" }, Di = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, Ti = { class: "flex flex-col gap-2" }, Ei = { class: "grid grid-cols-8 gap-2" }, Ii = ["title", "aria-label", "aria-pressed", "onClick"], Fi = { class: "flex flex-col gap-2" }, Ni = { class: "grid grid-cols-8 gap-2" }, Ri = ["title", "aria-label", "aria-pressed", "onClick"], Ui = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Hi = { class: "flex flex-col gap-2" }, qi = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Ki = ["aria-pressed", "aria-label", "onClick"], Gi = { class: "text-sm font-semibold" }, Wi = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Zi = ["onClick"], Ji = { class: "flex flex-col gap-2" }, Yi = { class: "flex items-center justify-between" }, Xi = { class: "text-muted-foreground text-xs tabular-nums" }, Qi = { class: "flex items-center gap-2" }, eu = ["disabled"], tu = ["min", "max", "value"], au = ["disabled"], ow = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: o, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = ca(), d = q(!1), m = $(() => o.value.sidebarSide === "right"), h = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], x = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], _ = [
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
    function y(g, v) {
      return `oklch(0.72 ${v * 3} ${g})`;
    }
    return (g, v) => (t(), a(P, null, [
      l("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (c) => d.value = !0)
      }, [...v[7] || (v[7] = [
        wt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), D(Re, { to: "body" }, [
        I(je, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            d.value ? (t(), a("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: v[1] || (v[1] = (c) => d.value = !1)
            })) : k("", !0)
          ]),
          _: 1
        }),
        I(je, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": m.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": m.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: j(() => [
            d.value ? (t(), a("aside", {
              key: 0,
              class: z(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", m.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              l("header", Li, [
                v[9] || (v[9] = l("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                l("div", Vi, [
                  l("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => b(r) && b(r)(...c))
                  }, " Reset "),
                  l("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: v[3] || (v[3] = (c) => d.value = !1)
                  }, [...v[8] || (v[8] = [
                    l("svg", {
                      viewBox: "0 0 24 24",
                      class: "size-4",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      l("path", { d: "M18 6 6 18M6 6l12 12" })
                    ], -1)
                  ])])
                ])
              ]),
              l("div", Di, [
                l("section", Ti, [
                  v[11] || (v[11] = l("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  l("div", Ei, [
                    (t(!0), a(P, null, V(b(s), (c, C) => (t(), a("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ne({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": b(o).primary === C,
                      onClick: (B) => b(n)({ primary: C })
                    }, [
                      b(o).primary === C ? (t(), a("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ne({ color: c.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...v[10] || (v[10] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : k("", !0)
                    ], 12, Ii))), 128))
                  ])
                ]),
                l("section", Fi, [
                  v[13] || (v[13] = l("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  l("div", Ni, [
                    (t(!0), a(P, null, V(b(i), (c, C) => (t(), a("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ne({ background: y(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": b(o).surface === C,
                      onClick: (B) => b(n)({ surface: C })
                    }, [
                      b(o).surface === C ? (t(), a("svg", Ui, [...v[12] || (v[12] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : k("", !0)
                    ], 12, Ri))), 128))
                  ])
                ]),
                l("section", Hi, [
                  v[14] || (v[14] = l("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  l("div", qi, [
                    (t(!0), a(P, null, V(b(u), (c) => (t(), a("button", {
                      key: c,
                      type: "button",
                      class: z([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(o).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": b(o).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (C) => b(n)({ radius: c })
                    }, [
                      l("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ne({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      U(" " + f(c), 1)
                    ], 10, Ki))), 128))
                  ])
                ]),
                (t(!0), a(P, null, V([
                  { label: "Color scheme", key: "theme", options: h },
                  { label: "Card style", key: "cardStyle", options: x },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: _ },
                  { label: "Content layout", key: "contentLayout", options: w },
                  { label: "Menu style", key: "menuStyle", options: S }
                ], (c) => (t(), a("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  l("h3", Gi, f(c.label), 1),
                  l("div", Wi, [
                    (t(!0), a(P, null, V(c.options, (C) => (t(), a("button", {
                      key: String(C.value),
                      type: "button",
                      class: z([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(o)[c.key] === C.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (B) => b(n)({ [c.key]: C.value })
                    }, f(C.label), 11, Zi))), 128))
                  ])
                ]))), 128)),
                l("section", Ji, [
                  l("div", Yi, [
                    v[15] || (v[15] = l("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    l("span", Xi, f(b(o).fontSize) + "px", 1)
                  ]),
                  l("div", Qi, [
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(o).fontSize <= b(nt),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => b(n)({ fontSize: b(o).fontSize - 1 }))
                    }, " − ", 8, eu),
                    l("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(nt),
                      max: b(lt),
                      value: b(o).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (c) => b(n)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, tu),
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(o).fontSize >= b(lt),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => b(n)({ fontSize: b(o).fontSize + 1 }))
                    }, " + ", 8, au)
                  ])
                ])
              ])
            ], 2)) : k("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), nu = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, lu = { class: "flex items-stretch" }, ou = ["href", "aria-current"], su = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ru = ["d"], iu = { class: "w-full truncate text-center" }, uu = {
  key: 0,
  class: "flex-1"
}, du = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, cu = ["d"], fu = { class: "w-full truncate text-center" }, ft = 5, sw = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.items.length <= ft ? n.items : n.items.slice(0, ft - 1)
    ), i = $(() => n.items.length > ft);
    function u(d) {
      return d === "/" ? n.current === "/" : n.current === d || n.current.startsWith(`${d}/`);
    }
    return (d, m) => (t(), a("nav", nu, [
      l("ul", lu, [
        (t(!0), a(P, null, V(s.value, (h) => (t(), a("li", {
          key: h.key,
          class: "flex-1"
        }, [
          l("a", {
            href: h.href,
            class: z([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(h.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(h.href) ? "page" : void 0
          }, [
            (t(), a("svg", su, [
              l("path", {
                d: b(ue)(h.icon)
              }, null, 8, ru)
            ])),
            l("span", iu, f(h.title), 1)
          ], 10, ou)
        ]))), 128)),
        i.value ? (t(), a("li", uu, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (h) => r("more"))
          }, [
            (t(), a("svg", du, [
              l("path", {
                d: b(ue)("more-horizontal")
              }, null, 8, cu)
            ])),
            l("span", fu, f(e.moreLabel), 1)
          ])
        ])) : k("", !0)
      ])
    ]));
  }
}), mu = ["value"], pu = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", ge = /* @__PURE__ */ O({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    return (s, i) => (t(), a("input", {
      "data-slot": "input",
      value: n.modelValue ?? n.defaultValue,
      class: z([pu, n.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, mu));
  }
}), vu = ["for"], ke = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (o, n) => (t(), a("label", {
      "data-slot": "label",
      for: o.$props.for,
      class: z([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.$props.class
      ])
    }, [
      K(o.$slots, "default")
    ], 10, vu));
  }
}), rw = /* @__PURE__ */ O({
  __name: "PkSpinner",
  props: {
    class: {}
  },
  setup(e) {
    return (o, n) => (t(), a("svg", {
      role: "status",
      "aria-label": "Loading",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      class: z(["size-4 animate-spin", o.$props.class])
    }, [...n[0] || (n[0] = [
      l("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      l("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), gu = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, hu = ["id", "name", "value", "disabled", "maxlength"], bu = ["data-active"], xu = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, iw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(!1), i = q(null);
    pe(() => {
      n.autofocus && i.value?.focus();
    });
    const u = $(
      () => Array.from({ length: n.length }, (h, p) => n.modelValue[p] ?? "")
    ), d = $(() => Math.min(n.modelValue.length, n.length - 1));
    function m(h) {
      const p = h.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, n.length));
    }
    return (h, p) => (t(), a("div", gu, [
      l("input", {
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
        onFocus: p[0] || (p[0] = (x) => s.value = !0),
        onBlur: p[1] || (p[1] = (x) => s.value = !1)
      }, null, 40, hu),
      (t(!0), a(P, null, V(u.value, (x, _) => (t(), a("div", {
        key: _,
        "data-slot": "input-otp-slot",
        "data-active": s.value && _ === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(f(x) + " ", 1),
        s.value && _ === d.value && x === "" ? (t(), a("div", xu, [...p[2] || (p[2] = [
          l("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : k("", !0)
      ], 8, bu))), 128))
    ]));
  }
}), yu = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, _e = /* @__PURE__ */ O({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (o, n) => (t(), a("header", {
      class: z(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      l("h2", {
        class: z(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), a("p", yu, f(e.description), 1)) : k("", !0)
    ], 2));
  }
}), ku = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: z(b(Q)(b(Cu)({ variant: e.variant }), o.class)),
      role: "alert"
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), $u = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: z(b(Q)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), wu = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: z(b(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Cu = At(
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
), Su = { class: "list-inside list-disc text-sm" }, uw = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const o = e, n = $(() => Array.from(new Set(o.errors)));
    return (r, s) => (t(), D(b(ku), { variant: "destructive" }, {
      default: j(() => [
        I(b(La), { class: "size-4" }),
        I(b(wu), null, {
          default: j(() => [
            U(f(e.title), 1)
          ]),
          _: 1
        }),
        I(b($u), null, {
          default: j(() => [
            l("ul", Su, [
              (t(!0), a(P, null, V(n.value, (i, u) => (t(), a("li", { key: u }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), fa = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, s = Qt(n, "modelValue", o, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, u) => ce((t(), a("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => Ma(s) ? s.value = d : null),
      "data-slot": "input",
      class: z(
        b(Q)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [ye, b(s)]
    ]);
  }
}), Mu = { class: "relative" }, Bu = ["aria-label"], dw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: o }) {
    const n = e, r = q(!1), s = Ba("inputRef");
    return o({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, u) => (t(), a("div", Mu, [
      I(b(fa), oe({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: b(Q)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      l("button", {
        type: "button",
        class: z(
          b(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), D(b(Va), {
          key: 0,
          class: "size-4"
        })) : (t(), D(b(Da), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Bu)
    ]));
  }
}), _u = "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", cw = "grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3", Au = "grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3", Ve = "w-full min-w-0 px-4 py-6 sm:px-6", fw = "w-full min-w-0 p-3 sm:p-4", mw = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", pw = "w-full max-w-5xl";
function vw(e, o) {
  const n = Math.max(1, Math.floor(o));
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
const ma = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Pu = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", zu = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Ou(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || o.endsWith(".jpg") || o.endsWith(".jpeg");
}
function ju(e) {
  const o = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || o.endsWith(".png") || o.endsWith(".webp");
}
async function Lu(e) {
  const o = URL.createObjectURL(e);
  try {
    const n = await Vu(o), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
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
    URL.revokeObjectURL(o);
  }
}
function Vu(e) {
  return new Promise((o, n) => {
    const r = new Image();
    r.onload = () => o(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function Du(e) {
  if (Ou(e))
    throw new Error(zu);
  if (!ju(e))
    throw new Error(ma);
  if (!await Lu(e))
    throw new Error(Pu);
}
const Vt = /* @__PURE__ */ O({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, u) => (t(), D(b(ea), oe({ "data-slot": "sheet" }, b(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), gw = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(Ue), oe({ "data-slot": "sheet-close" }, o), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tu = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(Mt), oe({
      "data-slot": "sheet-overlay",
      class: b(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }, b(n)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dt = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class", "side"), i = ve(s, r);
    return (u, d) => (t(), D(b(Bt), null, {
      default: j(() => [
        I(Tu),
        I(b(_t), oe({
          "data-slot": "sheet-content",
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...u.$attrs, ...b(i) }), {
          default: j(() => [
            K(u.$slots, "default"),
            I(b(Ue), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: j(() => [
                I(b(St), { class: "size-4" }),
                d[0] || (d[0] = l("span", { class: "sr-only" }, "Close", -1))
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
}), Eu = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(ta), oe({
      "data-slot": "sheet-description",
      class: b(Q)("text-muted-foreground text-sm", o.class)
    }, b(n)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hw = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: z(b(Q)("mt-auto flex flex-col gap-2 p-4", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Iu = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: z(b(Q)("flex flex-col gap-1.5 p-4", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Fu = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(aa), oe({
      "data-slot": "sheet-title",
      class: b(Q)("text-foreground font-semibold", o.class)
    }, b(n)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bw = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(na), oe({ "data-slot": "sheet-trigger" }, o), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ut = "sidebar_state", Nu = 3600 * 24 * 7, Ru = "16rem", Uu = "18rem", Hu = "3rem", qu = "b", [rt, Ku] = Ja("Sidebar"), Gu = { class: "flex h-full w-full flex-col" }, Wu = ["data-state", "data-collapsible", "data-variant", "data-side"], Zu = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, xw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = rt();
    return (u, d) => e.collapsible === "none" ? (t(), a("div", oe({
      key: 0,
      "data-slot": "sidebar",
      class: b(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o.class
      )
    }, u.$attrs), [
      K(u.$slots, "default")
    ], 16)) : b(n) ? (t(), D(b(Vt), oe({
      key: 1,
      open: b(s)
    }, u.$attrs, { "onUpdate:open": b(i) }), {
      default: j(() => [
        I(b(Dt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ne({
            "--sidebar-width": b(Uu)
          })
        }, {
          default: j(() => [
            I(Iu, { class: "sr-only" }, {
              default: j(() => [
                I(Fu, null, {
                  default: j(() => [...d[0] || (d[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(Eu, null, {
                  default: j(() => [...d[1] || (d[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l("div", Gu, [
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
      "data-state": b(r),
      "data-collapsible": b(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      l("div", {
        class: z(
          b(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      l("div", oe({
        class: b(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          o.class
        )
      }, u.$attrs), [
        l("div", Zu, [
          K(u.$slots, "default")
        ])
      ], 16)
    ], 8, Wu));
  }
}), yw = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: z(
        b(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          o.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), kw = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: z(b(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), $w = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: z(b(Q)("relative flex w-full min-w-0 flex-col p-2", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), ww = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(He), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        b(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Cw = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: z(b(Q)("w-full text-sm", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Sw = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(He), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        b(Q)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          o.class
        )
      )
    }, {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Mw = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: z(b(Q)("flex flex-col gap-2 p-2", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Bw = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(fa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: z(b(Q)("bg-background h-8 w-full shadow-none", o.class))
    }, {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _w = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: z(
        b(Q)(
          "bg-background relative flex min-h-0 w-full flex-1 flex-col overflow-y-auto",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          // Side-aware insets. The upstream component hardcodes ml-0, so with the
          // sidebar on the right the content kept a left gutter it did not need and
          // reserved nothing on the right - the panel then overlapped the table.
          "md:peer-data-[variant=inset]:peer-data-[side=left]:ml-0 md:peer-data-[variant=inset]:peer-data-[side=left]:peer-data-[state=collapsed]:ml-2",
          "md:peer-data-[variant=inset]:peer-data-[side=right]:mr-0 md:peer-data-[variant=inset]:peer-data-[side=right]:peer-data-[state=collapsed]:mr-2",
          o.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Aw = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: z(b(Q)("flex w-full min-w-0 flex-col gap-1", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Pw = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(He), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: z(
        b(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          o.class
        )
      ),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), zw = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: z(
        b(Q)(
          "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Ju = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, u) => (t(), D(b(Ya), oe({ "data-slot": "tooltip" }, b(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), Yu = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(Xa), null, {
      default: j(() => [
        I(b(Qa), oe({ "data-slot": "tooltip-content" }, { ...b(i), ...u.$attrs }, {
          class: b(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: j(() => [
            K(u.$slots, "default"),
            I(b(en), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ow = /* @__PURE__ */ O({
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
    const o = e;
    return (n, r) => (t(), D(b(la), $e(ze(o)), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xu = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(tn), oe({ "data-slot": "tooltip-trigger" }, o), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ht = /* @__PURE__ */ O({
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
    const o = e;
    return (n, r) => (t(), D(b(He), oe({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: b(Q)(b(ed)({ variant: e.variant, size: e.size }), o.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), jw = /* @__PURE__ */ O({
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
    const o = e, { isMobile: n, state: r } = rt(), s = ie(o, "tooltip");
    return (i, u) => e.tooltip ? (t(), D(b(Ju), { key: 1 }, {
      default: j(() => [
        I(b(Xu), { "as-child": "" }, {
          default: j(() => [
            I(Ht, $e(ze({ ...b(s), ...i.$attrs })), {
              default: j(() => [
                K(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(b(Yu), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(n)
        }, {
          default: j(() => [
            typeof e.tooltip == "string" ? (t(), a(P, { key: 0 }, [
              U(f(e.tooltip), 1)
            ], 64)) : (t(), D(xe(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D(Ht, $e(oe({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: j(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lw = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: z(b(Q)("group/menu-item relative", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), qt = "animate-pulse rounded-md bg-primary/10", Vw = /* @__PURE__ */ O({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = $(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: z(b(Q)("flex h-8 items-center gap-2 rounded-md px-2", o.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: z(b(Q)(qt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : k("", !0),
      l("div", {
        class: z(b(Q)(qt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ne({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), Dw = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: z(
        b(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Tw = /* @__PURE__ */ O({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(He), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: z(
        b(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-primary/10 data-[active=true]:text-primary",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), Ew = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: z(b(Q)("group/menu-sub-item relative", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Iw = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !qa?.cookie.includes(`${Ut}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = Ua("(max-width: 767px)"), i = q(!1), u = Qt(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function d(x) {
      u.value = x, document.cookie = `${Ut}=${u.value}; path=/; max-age=${Nu}`;
    }
    function m(x) {
      i.value = x;
    }
    function h() {
      return s.value ? m(!i.value) : d(!u.value);
    }
    Ha("keydown", (x) => {
      x.key === qu && (x.metaKey || x.ctrlKey) && (x.preventDefault(), h());
    });
    const p = $(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return Ku({
      state: p,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: h
    }), (x, _) => (t(), D(b(la), { "delay-duration": 0 }, {
      default: j(() => [
        l("div", oe({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(Ru),
            "--sidebar-width-icon": b(Hu)
          },
          class: b(Q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, x.$attrs), [
          K(x.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), Fw = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { toggleSidebar: n } = rt();
    return (r, s) => (t(), a("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: z(
        b(Q)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          o.class
        )
      ),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...i) => b(n) && b(n)(...i))
    }, [
      K(r.$slots, "default")
    ], 2));
  }
}), Qu = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(an), oe({ "data-slot": "separator" }, b(n), {
      class: b(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        o.class
      )
    }), null, 16, ["class"]));
  }
}), Nw = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(Qu), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: z(b(Q)("bg-sidebar-border mx-2 w-auto", o.class))
    }, {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rw = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: n, state: r, toggleSidebar: s } = rt();
    return (i, u) => (t(), D(se, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(b(Q)("h-7 w-7", o.class)),
      onClick: b(s)
    }, {
      default: j(() => [
        b(n) || b(r) === "collapsed" ? (t(), D(b(Ta), { key: 0 })) : (t(), D(b(Ea), { key: 1 })),
        u[0] || (u[0] = l("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), ed = At(
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
), Uw = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, u) => (t(), D(b(nn), oe({ "data-slot": "dropdown-menu" }, b(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), td = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Hw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(ln), oe({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", td, [
          I(b(oa), null, {
            default: j(() => [
              K(u.$slots, "indicator-icon", {}, () => [
                I(b(Yt), { class: "size-4" })
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
}), qw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(on), null, {
      default: j(() => [
        I(b(sn), oe({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
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
}), Kw = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(rn), oe({ "data-slot": "dropdown-menu-group" }, o), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gw = /* @__PURE__ */ O({
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
    const o = e, n = ie(o, "inset", "variant", "class"), r = we(n);
    return (s, i) => (t(), D(b(un), oe({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, b(r), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        o.class
      )
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Ww = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const o = e, n = ie(o, "class", "inset"), r = we(n);
    return (s, i) => (t(), D(b(dn), oe({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, b(r), {
      class: b(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", o.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Zw = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, u) => (t(), D(b(cn), oe({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: j(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ad = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Jw = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(fn), oe({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        l("span", ad, [
          I(b(oa), null, {
            default: j(() => [
              K(u.$slots, "indicator-icon", {}, () => [
                I(b(Ia), { class: "size-2 fill-current" })
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
}), Yw = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(mn), oe({ "data-slot": "dropdown-menu-separator" }, b(n), {
      class: b(Q)("bg-border -mx-1 my-1 h-px", o.class)
    }), null, 16, ["class"]));
  }
}), Xw = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: z(b(Q)("text-muted-foreground ml-auto text-xs tracking-widest", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Qw = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, u) => (t(), D(b(pn), oe({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), e4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(vn), oe({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(Q)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: j(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t4 = /* @__PURE__ */ O({
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
    const o = e, n = ie(o, "class", "inset"), r = we(n);
    return (s, i) => (t(), D(b(gn), oe({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        o.class
      )
    }), {
      default: j(() => [
        K(s.$slots, "default"),
        I(b(Xt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), a4 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = we(e);
    return (r, s) => (t(), D(b(hn), oe({ "data-slot": "dropdown-menu-trigger" }, b(n)), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), n4 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(bn), {
      "data-slot": "avatar",
      class: z(b(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", o.class))
    }, {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), l4 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(xn), oe({ "data-slot": "avatar-fallback" }, b(n), {
      class: b(Q)("bg-muted flex size-full items-center justify-center rounded-full", o.class)
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o4 = /* @__PURE__ */ O({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(yn), oe({ "data-slot": "avatar-image" }, o, { class: "aspect-square size-full" }), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s4 = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: z(o.class)
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), r4 = /* @__PURE__ */ O({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: z(b(Q)("flex size-9 items-center justify-center", o.class))
    }, [
      K(n.$slots, "default", {}, () => [
        I(b(Fa), { class: "size-4" })
      ]),
      r[0] || (r[0] = l("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), i4 = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: z(b(Q)("inline-flex items-center gap-1.5", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), u4 = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(He), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: z(b(Q)("hover:text-foreground transition-colors", o.class))
    }, {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), d4 = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: z(
        b(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          o.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), c4 = /* @__PURE__ */ O({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: z(b(Q)("text-foreground font-normal", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), f4 = /* @__PURE__ */ O({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: z(b(Q)("[&>svg]:size-3.5", o.class))
    }, [
      K(n.$slots, "default", {}, () => [
        I(b(Xt))
      ])
    ], 2));
  }
}), nd = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, ld = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), a("div", nd, [
      I(b(kn), oe({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), m4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class", "viewport"), i = ve(s, r);
    return (u, d) => (t(), D(b($n), oe({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: j((m) => [
        K(u.$slots, "default", $e(ze(m))),
        e.viewport ? (t(), D(ld, { key: 0 })) : k("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), p4 = /* @__PURE__ */ O({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(wn), oe({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(Q)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: j(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v4 = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), D(b(Cn), oe({ "data-slot": "navigation-menu-indicator" }, b(r), {
      class: b(Q)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        o.class
      )
    }), {
      default: j(() => [...i[0] || (i[0] = [
        l("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), g4 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(Sn), oe({ "data-slot": "navigation-menu-item" }, b(n), {
      class: b(Q)("relative", o.class)
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h4 = /* @__PURE__ */ O({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(Mn), oe({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(Q)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: j(() => [
        K(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b4 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), D(b(Bn), oe({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(Q)("group flex flex-1 list-none items-center justify-center gap-1", o.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x4 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), D(b(_n), oe({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(Q)(b(od)(), "group", o.class)
    }), {
      default: j(() => [
        K(s.$slots, "default"),
        I(b(Na), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), od = At(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), y4 = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = ve(e, o);
    return (i, u) => (t(), D(b(ea), oe({ "data-slot": "dialog" }, b(s)), {
      default: j((d) => [
        K(i.$slots, "default", $e(ze(d)))
      ]),
      _: 3
    }, 16));
  }
}), k4 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(Ue), oe({ "data-slot": "dialog-close" }, o), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sd = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(Mt), oe({ "data-slot": "dialog-overlay" }, b(n), {
      class: b(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(Bt), null, {
      default: j(() => [
        I(sd),
        I(b(_t), oe({ "data-slot": "dialog-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: j(() => [
            K(u.$slots, "default"),
            e.showCloseButton ? (t(), D(b(Ue), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: j(() => [
                I(b(St)),
                d[0] || (d[0] = l("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : k("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), w4 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), D(b(ta), oe({ "data-slot": "dialog-description" }, b(r), {
      class: b(Q)("text-muted-foreground text-sm", o.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), C4 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: z(b(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", o.class))
    }, [
      K(n.$slots, "default"),
      e.showCloseButton ? (t(), D(b(Ue), {
        key: 0,
        "as-child": ""
      }, {
        default: j(() => [
          I(se, { variant: "outline" }, {
            default: j(() => [...r[0] || (r[0] = [
              U(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : k("", !0)
    ], 2));
  }
}), S4 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: z(b(Q)("flex flex-col gap-2 text-center sm:text-left", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), M4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = ie(n, "class"), i = ve(s, r);
    return (u, d) => (t(), D(b(Bt), null, {
      default: j(() => [
        I(b(Mt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: j(() => [
            I(b(_t), oe({
              class: b(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...u.$attrs, ...b(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (m) => {
                const h = m.detail.originalEvent, p = h.target;
                (h.offsetX > p.clientWidth || h.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: j(() => [
                K(u.$slots, "default"),
                I(b(Ue), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: j(() => [
                    I(b(St), { class: "w-4 h-4" }),
                    d[1] || (d[1] = l("span", { class: "sr-only" }, "Close", -1))
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
}), B4 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class"), r = we(n);
    return (s, i) => (t(), D(b(aa), oe({ "data-slot": "dialog-title" }, b(r), {
      class: b(Q)("text-lg leading-none font-semibold", o.class)
    }), {
      default: j(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _4 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(na), oe({ "data-slot": "dialog-trigger" }, o), {
      default: j(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), A4 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, n = ie(o, "class");
    return (r, s) => (t(), D(b(An), oe({ "data-slot": "label" }, b(n), {
      class: b(Q)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.class
      )
    }), {
      default: j(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P4 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), D(b(Ra), {
      role: "status",
      "aria-label": "Loading",
      class: z(b(Q)("size-4 animate-spin", o.class))
    }, null, 8, ["class"]));
  }
}), z4 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: z(
        b(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          o.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), O4 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: z(b(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), j4 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: z(b(Q)("px-6", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), L4 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: z(b(Q)("text-muted-foreground text-sm", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), V4 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: z(b(Q)("flex items-center px-6 [.border-t]:pt-6", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), D4 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: z(
        b(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          o.class
        )
      )
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), T4 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: z(b(Q)("leading-none font-semibold", o.class))
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), rd = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, id = { class: "flex items-start gap-3" }, ud = { class: "min-w-0 flex-1" }, dd = { class: "text-foreground text-sm font-medium" }, cd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, E4 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: o, emit: n }) {
    const r = e, s = n, i = q(!1), u = q(null), d = q(0);
    _a((h) => (console.error(`[PkBoundary] ${r.label} failed to render`, h), i.value = !0, u.value = h instanceof Error ? h.message : null, s("error", h), !1));
    function m() {
      i.value = !1, u.value = null, d.value++;
    }
    return o({ retry: m }), (h, p) => (t(), a("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", rd, [
        l("div", id, [
          p[1] || (p[1] = l("svg", {
            class: "text-destructive mt-0.5 size-4 shrink-0",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" })
          ], -1)),
          l("div", ud, [
            l("p", dd, f(e.label) + " could not be displayed ", 1),
            u.value ? (t(), a("p", cd, f(u.value), 1)) : k("", !0),
            l("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: m
            }, [...p[0] || (p[0] = [
              l("svg", {
                class: "size-3",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                l("path", { d: "M21 2v6h-6M3.5 9a9 9 0 0 1 14.9-3.4L21 8" })
              ], -1),
              U(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? k("", !0) : K(h.$slots, "default", { key: d.value })
    ], 2));
  }
}), fd = { class: "bg-card rounded-lg border" }, md = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, pd = { class: "min-w-0" }, vd = {
  key: 0,
  class: "truncate text-sm font-medium"
}, gd = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, hd = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, bd = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, I4 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, n) => (t(), a("section", fd, [
      e.title || e.description || o.$slots.header || o.$slots.actions ? (t(), a("header", md, [
        l("div", pd, [
          K(o.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", vd, f(e.title), 1)) : k("", !0),
            e.description ? (t(), a("p", gd, f(e.description), 1)) : k("", !0)
          ])
        ]),
        o.$slots.actions ? (t(), a("div", hd, [
          K(o.$slots, "actions")
        ])) : k("", !0)
      ])) : k("", !0),
      l("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        K(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (t(), a("footer", bd, [
        K(o.$slots, "footer")
      ])) : k("", !0)
    ]));
  }
}), pa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function F4() {
  const e = sa(), o = $(() => e.props.panel?.pageFooter === !0);
  return ht(pa, o), o;
}
const xd = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, yd = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, kd = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, N4 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const o = e, n = sa(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = $(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = $(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), u = at(pa, $(() => !1)), d = $(() => !o.host && b(u) === !0);
    return (m, h) => d.value ? k("", !0) : (t(), a("footer", xd, [
      l("div", yd, [
        l("p", null, "© " + f(b(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), a("nav", kd, [
          (t(!0), a(P, null, V(i.value, (p) => (t(), D(b(On), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: j(() => [
              U(f(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : k("", !0)
      ])
    ]));
  }
}), $d = { class: "flex shrink-0 flex-col items-center" }, wd = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, R4 = /* @__PURE__ */ O({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const o = e, n = $(() => o.kind === "laptop"), r = $(
      () => n.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = $(() => n.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, u) => (t(), a("div", $d, [
      l("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: ne({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", wd)) : k("", !0),
        l("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
        }, [
          K(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(P, { key: 0 }, [
        l("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: ne({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        l("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: ne({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : k("", !0)
    ]));
  }
}), Cd = { class: "flex flex-col gap-2" }, Sd = { class: "min-w-0 flex-1" }, Md = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Bd = ["disabled", "aria-label", "onClick"], _d = ["disabled", "aria-label", "onClick"], Ad = ["disabled", "title", "aria-label", "onClick"], Pd = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, zd = ["disabled"], U4 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o;
    let s = 0;
    const i = q(u(n.modelValue));
    function u(v) {
      return Array.isArray(v) ? v.map((c) => ({ uid: s++, data: { ...c } })) : [];
    }
    fe(
      () => n.modelValue,
      (v) => {
        JSON.stringify(v ?? null) !== JSON.stringify(d()) && (i.value = u(v));
      }
    );
    function d() {
      const v = [];
      for (const c of i.value) {
        const C = {};
        let B = !1;
        for (const A of n.children) {
          const R = c.data[A.key] ?? null;
          C[A.key] = R, R !== null && R !== "" && !(Array.isArray(R) && R.length === 0) && (B = !0);
        }
        B && v.push(C);
      }
      return v.length ? v : null;
    }
    function m() {
      r("update:modelValue", d());
    }
    const h = $(() => n.maxItems !== null && i.value.length >= n.maxItems), p = $(() => n.minItems !== null && i.value.length <= n.minItems), x = $(() => n.children.length === 1);
    function _() {
      if (h.value || n.disabled)
        return;
      const v = {};
      for (const c of n.children)
        v[c.key] = null;
      i.value.push({ uid: s++, data: v });
    }
    function w(v) {
      i.value = i.value.filter((c) => c.uid !== v), m();
    }
    function S(v, c) {
      const C = v + c;
      if (C < 0 || C >= i.value.length)
        return;
      const B = [...i.value], [A] = B.splice(v, 1);
      B.splice(C, 0, A), i.value = B, m();
    }
    function y(v, c, C) {
      const B = i.value.find((A) => A.uid === v);
      B && (B.data[c] = C, m());
    }
    function g(v, c) {
      return n.errors[`${n.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), a("div", Cd, [
      (t(!0), a(P, null, V(i.value, (C, B) => (t(), a("div", {
        key: C.uid,
        class: "flex items-start gap-2"
      }, [
        l("span", {
          class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", x.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(B + 1), 3),
        l("div", Sd, [
          x.value ? (t(), D(Fe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: C.data[e.children[0].key],
            error: g(B, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (A) => y(C.uid, e.children[0].key, A)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Md, [
            (t(!0), a(P, null, V(e.children, (A) => (t(), D(Fe, {
              key: A.key,
              field: { ...A, disabled: A.disabled || e.disabled },
              value: C.data[A.key],
              error: g(B, A.key),
              options: e.childOptions[A.key] ?? [],
              onChange: (R) => y(C.uid, A.key, R)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        l("div", {
          class: z(["flex shrink-0 items-center gap-0.5", x.value ? "mt-1" : "mt-0"])
        }, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === 0,
            "aria-label": `Move ${e.itemLabel} ${B + 1} up`,
            onClick: (A) => S(B, -1)
          }, [...c[0] || (c[0] = [
            l("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "m18 15-6-6-6 6" })
            ], -1)
          ])], 8, Bd),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || B === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${B + 1} down`,
            onClick: (A) => S(B, 1)
          }, [...c[1] || (c[1] = [
            l("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "m6 9 6 6 6-6" })
            ], -1)
          ])], 8, _d),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${B + 1}`,
            onClick: (A) => w(C.uid)
          }, [...c[2] || (c[2] = [
            l("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "aria-hidden": "true"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Ad)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), a("p", Pd, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : k("", !0),
      h.value ? k("", !0) : (t(), a("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: _
      }, [
        c[3] || (c[3] = l("svg", {
          class: "size-3.5",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "aria-hidden": "true"
        }, [
          l("path", { d: "M12 5v14M5 12h14" })
        ], -1)),
        U(" Add " + f(e.itemLabel.toLowerCase()), 1)
      ], 8, zd))
    ]));
  }
}), Od = { class: "space-y-1" }, jd = { class: "flex items-center gap-1" }, Ld = ["disabled", "title", "aria-label", "onClick"], Vd = ["aria-pressed"], Dd = ["id", "value", "rows", "disabled"], Td = ["innerHTML"], Ed = /* @__PURE__ */ O({
  __name: "PkMarkdownInput",
  props: {
    modelValue: { default: "" },
    rows: { default: 12 },
    toolbar: {},
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(!1), i = $(() => n.modelValue ?? "");
    function u(x) {
      return x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const d = $(
      () => u(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(x, _ = x) {
      const w = document.getElementById(n.id ?? "");
      if (w === null)
        return;
      const S = w.selectionStart, y = w.selectionEnd, g = i.value.slice(S, y);
      r(
        "update:modelValue",
        `${i.value.slice(0, S)}${x}${g}${_}${i.value.slice(y)}`
      );
    }
    const h = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = $(
      () => (n.toolbar ?? Object.keys(h)).filter((x) => x in h)
    );
    return (x, _) => (t(), a("div", Od, [
      l("div", jd, [
        (t(!0), a(P, null, V(p.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (S) => h[w].run()
        }, f(h[w].label), 9, Ld))), 128)),
        l("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: _[0] || (_[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, Vd)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, Td)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: _[1] || (_[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, Dd))
    ]));
  }
}), Id = { class: "space-y-1" }, Fd = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Nd = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Rd = ["id", "value", "rows", "disabled"], Ud = { class: "text-muted-foreground text-xs" }, Hd = {
  key: 0,
  class: "text-destructive text-xs"
}, qd = /* @__PURE__ */ O({
  __name: "PkCodeInput",
  props: {
    modelValue: { default: "" },
    language: { default: "plain" },
    rows: { default: 14 },
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(null), i = q(!0), u = $(() => n.modelValue ?? ""), d = $(() => Math.max(u.value.split(`
`).length, 1)), m = $(() => {
      if (n.language !== "json" || u.value.trim() === "")
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
      const _ = x.target, w = _.selectionStart, S = _.selectionEnd, y = `${u.value.slice(0, w)}    ${u.value.slice(S)}`;
      r("update:modelValue", y), requestAnimationFrame(() => {
        _.selectionStart = _.selectionEnd = w + 4;
      });
    }
    return (x, _) => (t(), a("div", Id, [
      l("div", Fd, [
        l("div", Nd, [
          (t(!0), a(P, null, V(d.value, (w) => (t(), a("div", { key: w }, f(w), 1))), 128))
        ]),
        l("textarea", {
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
        }, null, 40, Rd)
      ]),
      l("p", Ud, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", Hd, f(m.value), 1)) : k("", !0)
    ]));
  }
}), Kd = { class: "space-y-3" }, Gd = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Wd = { class: "text-sm font-medium" }, Zd = { class: "flex items-center gap-1" }, Jd = ["disabled", "onClick"], Yd = ["disabled", "onClick"], Xd = ["disabled", "onClick"], Qd = { class: "space-y-3 p-3" }, ec = { class: "flex flex-wrap items-center gap-2" }, tc = ["disabled", "onClick"], ac = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, H4 = /* @__PURE__ */ O({
  __name: "PkBuilder",
  props: {
    modelValue: { default: null },
    blocks: { default: () => [] },
    maxBlocks: { default: null },
    disabled: { type: Boolean, default: !1 },
    errors: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.modelValue ?? []), i = $(
      () => Object.fromEntries(n.blocks.map((_) => [_.type, _]))
    ), u = $(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function d(_) {
      r("update:modelValue", _);
    }
    function m(_) {
      u.value || d([...s.value, { type: _, data: {} }]);
    }
    function h(_) {
      d(s.value.filter((w, S) => S !== _));
    }
    function p(_, w) {
      const S = _ + w;
      if (S < 0 || S >= s.value.length)
        return;
      const y = [...s.value], [g] = y.splice(_, 1);
      y.splice(S, 0, g), d(y);
    }
    function x(_, w, S) {
      d(
        s.value.map(
          (y, g) => g === _ ? { ...y, data: { ...y.data, [w]: S } } : y
        )
      );
    }
    return (_, w) => (t(), a("div", Kd, [
      (t(!0), a(P, null, V(s.value, (S, y) => (t(), a("div", {
        key: `${S.type}-${y}`,
        class: "bg-card rounded-lg border"
      }, [
        l("div", Gd, [
          l("span", Wd, f(i.value[S.type]?.label ?? S.type), 1),
          l("div", Zd, [
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || y === 0,
              "aria-label": "Move up",
              onClick: (g) => p(y, -1)
            }, " ↑ ", 8, Jd),
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || y === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (g) => p(y, 1)
            }, " ↓ ", 8, Yd),
            l("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (g) => h(y)
            }, " Remove ", 8, Xd)
          ])
        ]),
        l("div", Qd, [
          (t(!0), a(P, null, V(i.value[S.type]?.fields ?? [], (g) => (t(), D(Fe, {
            key: g.key,
            field: g,
            value: S.data[g.key] ?? null,
            error: e.errors?.[g.key],
            processing: e.disabled,
            onChange: (v) => x(y, g.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      l("div", ec, [
        (t(!0), a(P, null, V(e.blocks, (S) => (t(), a("button", {
          key: S.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (y) => m(S.type)
        }, " + " + f(S.label), 9, tc))), 128)),
        u.value ? (t(), a("span", ac, f(e.maxBlocks) + " is the maximum here. ", 1)) : k("", !0)
      ])
    ]));
  }
}), nc = ["name", "value", "checked", "disabled", "onChange"], lc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, oc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRadioGroup",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(i) {
      return n.modelValue != null && i.value == n.modelValue;
    }
    return (i, u) => (t(), a("div", {
      role: "radiogroup",
      class: z(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(P, null, V(e.options, (d) => (t(), a("label", {
        key: String(d.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: d.value,
          checked: s(d),
          disabled: e.disabled,
          onChange: (m) => r("update:modelValue", d.value)
        }, null, 40, nc),
        U(" " + f(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", lc, " Nothing to choose from yet. ")) : k("", !0)
    ], 2));
  }
}), sc = ["value", "checked", "disabled", "onChange"], rc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ic = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkCheckboxList",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
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
    const d = $(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, h) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ne(d.value)
    }, [
      (t(!0), a(P, null, V(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (x) => u(p)
        }, null, 40, sc),
        U(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", rc, " Nothing to choose from yet. ")) : k("", !0)
    ], 4));
  }
}), uc = { class: "flex flex-col gap-1.5" }, dc = ["aria-label", "onClick"], cc = ["placeholder", "disabled", "maxlength"], fc = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, mc = ["onClick"], pc = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, vc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(""), i = $(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), u = $(() => i.value.length >= (n.field.max ?? 25)), d = $(
      () => (n.field.suggestions ?? []).filter(
        (x) => !i.value.some((_) => _.toLowerCase() === x.toLowerCase())
      )
    );
    function m(x) {
      const _ = x.trim().slice(0, n.field.maxLength ?? 40);
      if (_ === "" || u.value) {
        s.value = "";
        return;
      }
      if (i.value.some((w) => w.toLowerCase() === _.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, _]), s.value = "";
    }
    function h(x) {
      r(
        "update:modelValue",
        i.value.filter((_, w) => w !== x)
      );
    }
    function p(x) {
      if (x.key === "Enter" || x.key === ",") {
        x.preventDefault(), m(s.value);
        return;
      }
      x.key === "Backspace" && s.value === "" && i.value.length > 0 && h(i.value.length - 1);
    }
    return (x, _) => (t(), a("div", uc, [
      l("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(P, null, V(i.value, (w, S) => (t(), a("span", {
          key: `${w}-${S}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(f(w) + " ", 1),
          e.disabled ? k("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (y) => h(S)
          }, " × ", 8, dc))
        ]))), 128)),
        ce(l("input", {
          "onUpdate:modelValue": _[0] || (_[0] = (w) => s.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: _[1] || (_[1] = (w) => m(s.value))
        }, null, 40, cc), [
          [ye, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), a("div", fc, [
        _[2] || (_[2] = l("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), a(P, null, V(d.value, (w) => (t(), a("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (S) => m(w)
        }, f(w), 9, mc))), 128))
      ])) : k("", !0),
      u.value ? (t(), a("p", pc, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : k("", !0)
    ]));
  }
}), gc = 4.5, Kt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function va(e) {
  let o = e.replace("#", "");
  return o.length === 3 && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]), [parseInt(o.slice(0, 2), 16), parseInt(o.slice(2, 4), 16), parseInt(o.slice(4, 6), 16)];
}
function mt(e) {
  const o = e / 255;
  return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
}
function $t(e) {
  const [o, n, r] = va(e);
  return 0.2126 * mt(o) + 0.7152 * mt(n) + 0.0722 * mt(r);
}
function ga(e, o) {
  const n = $t(e), r = $t(o);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function hc(e, o, n) {
  if (!Kt.test(e) || !Kt.test(o))
    return e;
  const r = $t(o) > 0.5, s = r ? 0 : 255;
  let i = va(e);
  for (let u = 0; u <= 20; u++) {
    const d = bc(i);
    if (ga(d, o) >= n)
      return d;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function bc(e) {
  return "#" + e.map(
    (o) => Math.round(Math.max(0, Math.min(255, o))).toString(16).padStart(2, "0")
  ).join("");
}
const xc = { class: "flex flex-col gap-2" }, yc = { class: "flex items-center gap-2" }, kc = {
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
}, $c = ["value", "disabled", "aria-label"], wc = ["value", "disabled", "placeholder"], Cc = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Sc = ["aria-label", "title", "onClick"], Mc = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Bc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = $(() => typeof n.modelValue == "string" ? n.modelValue : ""), u = $(() => s.test(i.value));
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
    const h = $(() => !u.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : ga(i.value, n.field.contrastBackground)), p = $(() => n.field.contrastMinRatio ?? gc), x = $(() => h.value !== null && h.value < p.value);
    function _() {
      n.field.contrastBackground && r(
        "update:modelValue",
        hc(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (w, S) => (t(), a("div", xc, [
      l("div", yc, [
        u.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: S[0] || (S[0] = (y) => r("update:modelValue", y.target.value))
        }, null, 40, $c)) : (t(), a("span", kc)),
        l("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, wc)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Cc, [
        (t(!0), a(P, null, V(e.field.presets, (y) => (t(), a("button", {
          key: y,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === y.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ne({ backgroundColor: y }),
          "aria-label": y,
          title: y,
          onClick: (g) => r("update:modelValue", y.toLowerCase())
        }, null, 14, Sc))), 128))
      ])) : k("", !0),
      x.value ? (t(), a("p", Mc, [
        l("span", null, " This fails contrast at " + f(h.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? k("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: _
        }, " Use a readable shade "))
      ])) : k("", !0)
    ]));
  }
}), _c = { class: "flex items-center gap-3" }, Ac = ["min", "max", "step", "value", "disabled", "aria-label"], Pc = { class: "flex shrink-0 items-center gap-1" }, zc = ["min", "max", "step", "value", "disabled"], Oc = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, jc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.field.min ?? 0), i = $(() => n.field.max ?? 100), u = $(() => n.field.step ?? 1), d = $(() => {
      const p = Number(n.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), m = $(
      () => n.modelValue === null || n.modelValue === void 0 || n.modelValue === ""
    );
    function h(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const x = Number(p);
      r("update:modelValue", Number.isFinite(x) ? x : null);
    }
    return (p, x) => (t(), a("div", _c, [
      l("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: x[0] || (x[0] = (_) => h(_.target.value))
      }, null, 40, Ac),
      l("div", Pc, [
        l("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: m.value ? "" : d.value,
          disabled: e.disabled,
          onInput: x[1] || (x[1] = (_) => h(_.target.value))
        }, null, 40, zc),
        e.field.unit ? (t(), a("span", Oc, f(e.field.unit), 1)) : k("", !0)
      ])
    ]));
  }
}), Xe = /* @__PURE__ */ new Map();
function pt(e, o) {
  Xe.set(e, o);
}
function Lc(e) {
  return Xe.get(e);
}
function q4(e) {
  return Xe.has(e);
}
function Vc() {
  return [...Xe.keys()].sort();
}
function K4() {
  Xe.clear();
}
const Dc = ["name", "value", "checked", "disabled", "onChange"], Tc = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Ec = { class: "whitespace-nowrap" }, Ic = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Fc = ["name", "value", "checked", "disabled", "onChange"], Nc = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Rc = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Uc = { class: "text-center text-xs font-medium" }, Hc = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, qc = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Kc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkVisualSelect",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.field.preview ? Lc(n.field.preview) : void 0
    ), i = $(() => !!n.field.preview && !s.value), u = $(() => n.field.layout === "segmented"), d = $(() => {
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
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(P, null, V(e.options, (x) => (t(), a("label", {
        key: String(x.value),
        class: z(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(x) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: x.value,
          checked: m(x),
          disabled: e.disabled,
          onChange: (_) => r("update:modelValue", x.value)
        }, null, 40, Dc),
        p[0] || (p[0] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", Tc, [
          (t(), D(xe(s.value), {
            value: x.value,
            label: x.label,
            selected: m(x)
          }, null, 8, ["value", "label", "selected"]))
        ])) : k("", !0),
        l("span", Ec, f(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Ic, " Nothing to choose from yet. ")) : k("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", d.value])
    }, [
      (t(!0), a(P, null, V(e.options, (x) => (t(), a("label", {
        key: String(x.value),
        class: z(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(x) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: x.value,
          checked: m(x),
          disabled: e.disabled,
          onChange: (_) => r("update:modelValue", x.value)
        }, null, 40, Fc),
        p[1] || (p[1] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        l("span", Nc, [
          s.value ? (t(), D(xe(s.value), {
            key: 0,
            value: x.value,
            label: x.label,
            selected: m(x)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", Rc, " no preview ")) : k("", !0)
        ]),
        l("span", Uc, f(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Hc, " Nothing to choose from yet. ")) : k("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", qc, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        l("code", null, f(e.field.preview), 1),
        U(". Registered: " + f(b(Vc)().join(", ") || "none") + ". ", 1)
      ])) : k("", !0)
    ], 2));
  }
}), Gc = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Wc = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", Gc, [
      l("span", {
        class: "block size-full",
        style: ne({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Zc = { class: "flex flex-col items-center gap-1 text-center" }, Jc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ha = /* @__PURE__ */ O({
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
    const o = e, n = $(() => o.mono ? "#000000" : o.accent), r = $(() => {
      switch (o.style) {
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
    return (s, i) => (t(), a("div", Zc, [
      l("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ne({ borderColor: n.value, color: n.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", Jc, f(e.caption), 1)) : k("", !0)
    ]));
  }
}), Yc = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Xc = { class: "flex items-center gap-3" }, Qc = ["src"], ef = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, tf = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, af = {
  key: 0,
  class: "text-right text-sm"
}, nf = { class: "text-neutral-500" }, lf = { class: "tabular-nums" }, of = { key: 1 }, sf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, rf = { class: "mt-2 font-medium" }, uf = { key: 2 }, df = { class: "w-full text-sm" }, cf = { class: "w-full py-3 pr-2" }, ff = {
  key: 0,
  class: "text-xs text-neutral-500"
}, mf = { key: 0 }, pf = ["colspan"], vf = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, gf = { class: "w-64 text-sm" }, hf = { class: "tabular-nums" }, bf = {
  key: 3,
  class: "py-2"
}, xf = { key: 4 }, yf = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, kf = { class: "mt-2 flex flex-col gap-1 text-sm" }, $f = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, wf = { key: 0 }, Cf = {
  key: 1,
  class: "mt-1"
}, Sf = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Mf = /* @__PURE__ */ O({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const o = e;
    function n() {
      return o.document.branding.mono ? "#000000" : o.document.branding.accent;
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
    return (m, h) => (t(), a("article", Yc, [
      l("div", Xc, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Qc)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ne({ color: n() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), a(P, null, V(e.document.blocks, (p, x) => (t(), a(P, { key: x }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ne({ borderColor: n() })
        }, [
          l("div", null, [
            l("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ne({ color: n() })
            }, f(p.title), 5),
            p.subtitle ? (t(), a("p", ef, f(p.subtitle), 1)) : k("", !0),
            p.reference ? (t(), a("p", tf, f(p.reference), 1)) : k("", !0)
          ]),
          r(p).length ? (t(), a("dl", af, [
            (t(!0), a(P, null, V(r(p), (_, w) => (t(), a("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              l("dt", nf, f(_.label), 1),
              l("dd", lf, f(_.value), 1)
            ]))), 128))
          ])) : k("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", of, [
          l("h2", sf, f(p.heading), 1),
          l("p", rf, f(p.name), 1),
          (t(!0), a(P, null, V(u(p.lines), (_, w) => (t(), a("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, f(_), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", uf, [
          l("table", df, [
            l("thead", null, [
              l("tr", {
                class: "border-b-2 text-left",
                style: ne({ borderColor: n() })
              }, [
                (t(!0), a(P, null, V(u(p.columns), (_, w) => (t(), a("th", {
                  key: w,
                  class: z(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(_), 3))), 128))
              ], 4)
            ]),
            l("tbody", null, [
              (t(!0), a(P, null, V(s(p), (_, w) => (t(), a("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                l("td", cf, [
                  l("p", null, f(_.description), 1),
                  _.detail ? (t(), a("p", ff, f(_.detail), 1)) : k("", !0)
                ]),
                (t(!0), a(P, null, V(_.cells, (S, y) => (t(), a("td", {
                  key: y,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(S), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", mf, [
                l("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, pf)
              ])) : k("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", vf, [
            l("dl", gf, [
              (t(!0), a(P, null, V(i(p), (_, w) => (t(), a("div", {
                key: w,
                class: z([
                  "flex justify-between py-1",
                  _.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ne(_.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                l("dt", {
                  class: z(_.strong ? "" : "text-neutral-600")
                }, f(_.label), 3),
                l("dd", hf, f(_.value), 1)
              ], 6))), 128))
            ])
          ])) : k("", !0)
        ])) : p.type === "code" ? (t(), a("section", bf, [
          I(ha, {
            code: d(p.code),
            caption: d(p.caption),
            style: ne(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", xf, [
          l("h2", yf, f(p.heading), 1),
          l("ol", kf, [
            (t(!0), a(P, null, V(u(p.items), (_, w) => (t(), a("li", {
              key: w,
              class: "flex gap-2"
            }, [
              l("span", {
                class: "font-semibold tabular-nums",
                style: ne({ color: n() })
              }, f(w + 1) + ".", 5),
              l("span", null, f(_), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: z(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ne(p.emphasis ? { color: n() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), a("footer", $f, [
          p.text ? (t(), a("p", wf, f(p.text), 1)) : k("", !0),
          u(p.contacts).length ? (t(), a("p", Cf, f(u(p.contacts).join(" · ")), 1)) : k("", !0)
        ])) : (t(), a("p", Sf, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Bf = ["aria-label", "title"], _f = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Af = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, G4 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: o, set: n } = ca(), r = $(() => o.value.theme === "dark");
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
      (t(), a("svg", _f, [
        r.value ? (t(), a(P, { key: 0 }, [
          u[0] || (u[0] = l("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = l("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", Af))
      ]))
    ], 8, Bf));
  }
}), Pf = ["width", "height"], zf = { key: 0 }, Of = ["x1", "x2", "y1", "y2"], jf = ["x", "y"], Lf = ["x1", "x2", "y1", "y2"], Vf = ["x", "y"], Df = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Tf = ["x", "y", "width", "height", "fill", "fill-opacity"], Ef = ["x", "y"], If = ["x", "y"], Ff = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Nf = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Rf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Uf = { class: "text-xs font-semibold tabular-nums" }, Hf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, qf = { class: "text-muted-foreground" }, Gt = 5.6, W4 = /* @__PURE__ */ O({
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
    const o = e, n = {
      danger: "var(--destructive)",
      warning: "var(--chart-4)",
      success: "var(--chart-2)",
      neutral: "var(--muted-foreground)"
    };
    function r(M) {
      return n[M] ?? M;
    }
    function s(M, N) {
      if (!o.thresholds?.length)
        return N;
      const L = o.thresholds.find((Y) => M < Y.max);
      return r(L ? L.color : o.aboveColor);
    }
    const i = q(null), u = q(560), d = q(null);
    let m = null;
    pe(() => {
      m = new ResizeObserver((M) => {
        u.value = Math.max(160, M[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), he(() => m?.disconnect());
    const h = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = $(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? h[L % h.length]
    }))), x = $(() => p.value[0]?.points.map((M) => M.label) ?? []), _ = $(() => x.value.length), w = $(() => o.orientation === "horizontal"), S = $(() => Math.max(0, ...x.value.map((M) => M.length))), y = $(() => {
      if (!w.value)
        return o.showAxis ? 44 : 8;
      const M = S.value * Gt + 16;
      return Math.round(Math.min(Math.max(60, M), u.value * 0.4));
    }), g = $(() => Math.max(4, Math.floor((y.value - 16) / Gt)));
    function v(M) {
      return M.length <= g.value ? M : `${M.slice(0, g.value - 1)}…`;
    }
    const c = $(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: y.value
    })), C = $(() => ({
      w: Math.max(1, u.value - c.value.left - c.value.right),
      h: Math.max(1, o.height - c.value.top - c.value.bottom)
    })), B = (M) => o.format ? o.format(M) : A(M);
    function A(M) {
      return Math.abs(M) >= 1e6 ? `${(M / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(M) >= 1e3 ? `${(M / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(M * 100) / 100);
    }
    const R = $(() => {
      const M = x.value.map(
        (le, F) => o.stacked ? p.value.reduce((T, X) => T + Math.max(0, X.points[F]?.value ?? 0), 0) : Math.max(...p.value.map((T) => T.points[F]?.value ?? 0))
      );
      if (o.maxValue)
        return o.maxValue;
      const N = Math.max(...M, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((le) => N <= le * L) ?? 10) * L;
    }), E = $(
      () => (w.value ? C.value.h : C.value.w) / Math.max(1, _.value)
    ), ee = $(() => E.value * 0.68), H = $(
      () => o.stacked || p.value.length <= 1 ? ee.value : ee.value / p.value.length
    ), G = $(() => {
      const M = [], N = new Array(_.value).fill(0);
      return p.value.forEach((L, Y) => {
        L.points.forEach((le, F) => {
          const X = Math.max(0, le.value) / R.value * (w.value ? C.value.w : C.value.h), de = (w.value ? c.value.top : c.value.left) + F * E.value + (E.value - ee.value) / 2, re = o.stacked ? 0 : Y * H.value;
          M.push(
            w.value ? {
              x: c.value.left + N[F],
              y: de + re,
              w: X,
              h: Math.max(0, H.value - 2),
              color: s(le.value, L.color),
              label: le.label,
              name: L.name,
              value: le.value,
              index: F
            } : {
              x: de + re,
              y: c.value.top + C.value.h - X - N[F],
              w: Math.max(0, H.value - 2),
              h: X,
              color: s(le.value, L.color),
              label: le.label,
              name: L.name,
              value: le.value,
              index: F
            }
          ), o.stacked && (N[F] += X);
        });
      }), M;
    }), Z = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        value: R.value * (w.value ? M : 1 - M),
        x: c.value.left + C.value.w * M,
        y: c.value.top + C.value.h * M
      }))
    ), ae = $(() => Math.max(1, Math.ceil(_.value / (w.value ? 14 : 10))));
    function te(M) {
      return M === _.value - 1 || M % ae.value === 0;
    }
    function J(M) {
      return (w.value ? c.value.top : c.value.left) + M * E.value + E.value / 2;
    }
    const W = $(() => d.value === null ? null : {
      label: x.value[d.value],
      rows: p.value.map((M) => ({
        name: M.name,
        color: M.color,
        value: M.points[d.value]?.value ?? 0
      }))
    });
    return (M, N) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      _.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: N[0] || (N[0] = (L) => d.value = null)
        }, [
          e.showAxis ? (t(), a("g", zf, [
            w.value ? (t(), a(P, { key: 0 }, [
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("line", {
                key: `g-${L.x}`,
                x1: L.x,
                x2: L.x,
                y1: c.value.top,
                y2: c.value.top + C.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Of))), 128)),
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.x}`,
                x: L.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(L.value)), 9, jf))), 128))
            ], 64)) : (t(), a(P, { key: 1 }, [
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("line", {
                key: `g-${L.y}`,
                x1: c.value.left,
                x2: u.value - c.value.right,
                y1: L.y,
                y2: L.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Lf))), 128)),
              (t(!0), a(P, null, V(Z.value, (L) => (t(), a("text", {
                key: `gt-${L.y}`,
                x: c.value.left - 8,
                y: L.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(L.value)), 9, Vf))), 128))
            ], 64))
          ])) : k("", !0),
          (t(!0), a(P, null, V(x.value, (L, Y) => (t(), a("rect", {
            key: `hit-${Y}`,
            x: w.value ? c.value.left : c.value.left + Y * E.value,
            y: w.value ? c.value.top + Y * E.value : c.value.top,
            width: w.value ? C.value.w : E.value,
            height: w.value ? E.value : C.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === Y ? 0.4 : 0,
            onMouseenter: (le) => d.value = Y
          }, null, 40, Df))), 128)),
          (t(!0), a(P, null, V(G.value, (L, Y) => (t(), a("rect", {
            key: `b-${Y}`,
            x: L.x,
            y: L.y,
            width: L.w,
            height: L.h,
            fill: L.color,
            "fill-opacity": d.value === null || d.value === L.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Tf))), 128)),
          w.value ? (t(!0), a(P, { key: 1 }, V(x.value, (L, Y) => ce((t(), a("text", {
            key: `c-${Y}`,
            x: c.value.left - 8,
            y: J(Y) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(f(v(L)) + " ", 1),
            l("title", null, f(L), 1)
          ], 8, Ef)), [
            [Le, te(Y)]
          ])), 128)) : (t(!0), a(P, { key: 2 }, V(x.value, (L, Y) => ce((t(), a("text", {
            key: `c-${Y}`,
            x: J(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(L), 9, If)), [
            [Le, te(Y)]
          ])), 128))
        ], 40, Pf)),
        W.value ? (t(), a("div", Ff, [
          l("p", Nf, f(W.value.label), 1),
          (t(!0), a(P, null, V(W.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", Rf, f(L.name || "Value"), 1),
            l("span", Uf, f(B(L.value)), 1)
          ]))), 128))
        ])) : k("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", Hf, [
          (t(!0), a(P, null, V(p.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", qf, f(L.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), Kf = ["width", "height"], Gf = ["id"], Wf = ["stop-color"], Zf = ["stop-color"], Jf = { key: 0 }, Yf = ["x1", "x2", "y1", "y2"], Xf = ["x", "y"], Qf = ["x", "y"], em = ["x1", "x2", "y1", "y2"], tm = ["d", "fill"], am = ["d", "stroke", "stroke-dasharray"], nm = ["cx", "cy", "fill"], lm = { key: 1 }, om = ["x1", "x2", "y1", "y2"], sm = ["cx", "cy", "fill"], rm = ["x", "y"], im = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, um = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, dm = { class: "text-xs font-semibold tabular-nums" }, cm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, fm = { class: "text-muted-foreground" }, mm = /* @__PURE__ */ O({
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
    const o = e, n = $(() => h.value.some((M) => M.axis === "right")), r = q(null), s = q(560), i = q(null);
    let u = null;
    pe(() => {
      u = new ResizeObserver((M) => {
        s.value = Math.max(160, M[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), he(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = Math.random().toString(36).slice(2, 9), h = $(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((N, L) => ({
      ...N,
      color: N.color ?? d[L % d.length]
    }))), p = $(() => h.value[0]?.points.map((M) => M.label) ?? []), x = $(() => p.value.length), _ = $(() => ({
      top: 12,
      right: o.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: o.showAxis ? 44 : 8
    })), w = (M) => o.format ? o.format(M) : S(M);
    function S(M) {
      return Math.abs(M) >= 1e6 ? `${(M / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(M) >= 1e3 ? `${(M / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(M * 100) / 100);
    }
    function y(M) {
      const N = Math.max(...M, 0);
      if (N <= 0)
        return 1;
      const L = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((le) => N <= le * L) ?? 10) * L;
    }
    const g = $(
      () => y(
        h.value.filter((M) => M.axis !== "right").flatMap((M) => M.points.map((N) => N.value))
      )
    ), v = $(
      () => y(
        h.value.filter((M) => M.axis === "right").flatMap((M) => M.points.map((N) => N.value))
      )
    ), c = $(() => ({
      w: Math.max(1, s.value - _.value.left - _.value.right),
      h: Math.max(1, o.height - _.value.top - _.value.bottom)
    }));
    function C(M) {
      return _.value.left + (x.value <= 1 ? 0 : M / (x.value - 1) * c.value.w);
    }
    function B(M, N = "left") {
      const L = N === "right" ? v.value : g.value;
      return _.value.top + c.value.h - M / L * c.value.h;
    }
    const A = $(
      () => h.value.map((M) => {
        const N = M.points.map((Y, le) => ({
          ...Y,
          x: C(le),
          y: B(Y.value, M.axis ?? "left")
        })), L = M.stepped ? R(N) : E(N);
        return { ...M, pts: N, line: L, area: ee(L, N) };
      })
    );
    function R(M) {
      if (M.length === 0)
        return "";
      let N = `M${M[0].x.toFixed(2)},${M[0].y.toFixed(2)}`;
      for (let L = 1; L < M.length; L++)
        N += ` L${M[L].x.toFixed(2)},${M[L - 1].y.toFixed(2)} L${M[L].x.toFixed(2)},${M[L].y.toFixed(2)}`;
      return N;
    }
    function E(M) {
      const N = M.length;
      if (N === 0)
        return "";
      if (N === 1)
        return `M${M[0].x},${M[0].y}`;
      const L = [], Y = [];
      for (let T = 0; T < N - 1; T++)
        L[T] = M[T + 1].x - M[T].x, Y[T] = L[T] === 0 ? 0 : (M[T + 1].y - M[T].y) / L[T];
      const le = [Y[0]];
      for (let T = 1; T < N - 1; T++)
        if (Y[T - 1] * Y[T] <= 0)
          le[T] = 0;
        else {
          const X = 2 * L[T] + L[T - 1], de = L[T] + 2 * L[T - 1];
          le[T] = (X + de) / (X / Y[T - 1] + de / Y[T]);
        }
      le[N - 1] = Y[N - 2];
      let F = `M${M[0].x.toFixed(2)},${M[0].y.toFixed(2)}`;
      for (let T = 0; T < N - 1; T++) {
        const X = L[T] / 3;
        F += ` C${(M[T].x + X).toFixed(2)},${(M[T].y + le[T] * X).toFixed(2)} ${(M[T + 1].x - X).toFixed(2)},${(M[T + 1].y - le[T + 1] * X).toFixed(2)} ${M[T + 1].x.toFixed(2)},${M[T + 1].y.toFixed(2)}`;
      }
      return F;
    }
    function ee(M, N) {
      if (N.length === 0)
        return "";
      const L = _.value.top + c.value.h;
      return `${M} L${N[N.length - 1].x.toFixed(2)},${L} L${N[0].x.toFixed(2)},${L} Z`;
    }
    const H = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        y: _.value.top + c.value.h * M,
        value: g.value * (1 - M)
      }))
    ), G = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((M) => ({
        y: _.value.top + c.value.h * M,
        value: v.value * (1 - M)
      }))
    ), Z = $(() => Math.max(1, Math.ceil(x.value / 8)));
    function ae(M) {
      return M === x.value - 1 || M % Z.value === 0;
    }
    function te(M) {
      const N = M.currentTarget.getBoundingClientRect(), L = M.clientX - N.left - _.value.left, Y = x.value <= 1 ? 1 : c.value.w / (x.value - 1);
      i.value = Math.min(x.value - 1, Math.max(0, Math.round(L / Y)));
    }
    const J = $(() => {
      if (i.value === null || x.value === 0)
        return null;
      const M = i.value;
      return {
        i: M,
        x: C(M),
        label: p.value[M],
        rows: A.value.map((N) => ({
          name: N.name,
          color: N.color,
          value: N.points[M]?.value ?? 0,
          y: N.pts[M]?.y ?? 0
        }))
      };
    }), W = $(() => {
      if (!J.value)
        return {};
      const M = J.value.x > s.value * 0.6;
      return {
        left: `${J.value.x}px`,
        top: "8px",
        transform: M ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (M, N) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: te,
          onMouseleave: N[0] || (N[0] = (L) => i.value = null)
        }, [
          l("defs", null, [
            (t(!0), a(P, null, V(A.value, (L, Y) => (t(), a("linearGradient", {
              id: `pk-fill-${b(m)}-${Y}`,
              key: Y,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              l("stop", {
                offset: "0%",
                "stop-color": L.color,
                "stop-opacity": "0.25"
              }, null, 8, Wf),
              l("stop", {
                offset: "100%",
                "stop-color": L.color,
                "stop-opacity": "0.01"
              }, null, 8, Zf)
            ], 8, Gf))), 128))
          ]),
          e.showAxis ? (t(), a("g", Jf, [
            (t(!0), a(P, null, V(H.value, (L) => (t(), a("line", {
              key: L.y,
              x1: _.value.left,
              x2: s.value - _.value.right,
              y1: L.y,
              y2: L.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Yf))), 128)),
            (t(!0), a(P, null, V(H.value, (L) => (t(), a("text", {
              key: `t-${L.y}`,
              x: _.value.left - 8,
              y: L.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(S(L.value)), 9, Xf))), 128)),
            n.value ? (t(!0), a(P, { key: 0 }, V(G.value, (L) => (t(), a("text", {
              key: `rt-${L.y}`,
              x: s.value - _.value.right + 8,
              y: L.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(S(L.value)), 9, Qf))), 128)) : k("", !0)
          ])) : k("", !0),
          (t(!0), a(P, null, V(p.value, (L, Y) => ce((t(), a("line", {
            key: `v-${Y}`,
            x1: C(Y),
            x2: C(Y),
            y1: _.value.top,
            y2: _.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, em)), [
            [Le, ae(Y)]
          ])), 128)),
          (t(!0), a(P, null, V(A.value, (L, Y) => (t(), a("g", {
            key: `s-${Y}`
          }, [
            L.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: L.area,
              fill: `url(#pk-fill-${b(m)}-${Y})`
            }, null, 8, tm)) : k("", !0),
            l("path", {
              d: L.line,
              fill: "none",
              stroke: L.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": L.dashed ? "6 4" : void 0
            }, null, 8, am),
            L.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: L.pts[0].x,
              cy: L.pts[0].y,
              r: "3",
              fill: L.color
            }, null, 8, nm)) : k("", !0)
          ]))), 128)),
          J.value ? (t(), a("g", lm, [
            l("line", {
              x1: J.value.x,
              x2: J.value.x,
              y1: _.value.top,
              y2: _.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, om),
            (t(!0), a(P, null, V(J.value.rows, (L, Y) => (t(), a("circle", {
              key: `d-${Y}`,
              cx: J.value.x,
              cy: L.y,
              r: "4",
              fill: L.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, sm))), 128))
          ])) : k("", !0),
          (t(!0), a(P, null, V(p.value, (L, Y) => ce((t(), a("text", {
            key: `x-${Y}`,
            x: C(Y),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(L), 9, rm)), [
            [Le, ae(Y)]
          ])), 128))
        ], 40, Kf)),
        J.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ne(W.value)
        }, [
          l("p", im, f(J.value.label), 1),
          (t(!0), a(P, null, V(J.value.rows, (L, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", um, f(L.name || "Value"), 1),
            l("span", dm, f(w(L.value)), 1)
          ]))), 128))
        ], 4)) : k("", !0),
        e.showLegend && h.value.length > 1 ? (t(), a("div", cm, [
          (t(!0), a(P, null, V(A.value, (L, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: L.color })
            }, null, 4),
            l("span", fm, f(L.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), pm = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, vm = { class: "text-muted-foreground text-[11px] capitalize" }, gm = { class: "text-sm font-semibold tabular-nums" }, hm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Qe = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (o, n) => (t(), a("div", pm, [
      l("p", vm, f(e.label), 1),
      l("p", gm, [
        U(f(e.value) + " ", 1),
        e.share ? (t(), a("span", hm, " (" + f(e.share) + ") ", 1)) : k("", !0)
      ])
    ]));
  }
}), bm = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, xm = ["width", "height", "viewBox", "aria-label"], ym = ["d", "fill", "fill-opacity", "onMouseenter"], km = ["x", "y"], $m = ["x", "y"], wm = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Cm = ["onMouseenter"], Sm = { class: "min-w-0 flex-1 truncate capitalize" }, Mm = { class: "tabular-nums font-medium" }, Bm = { class: "text-muted-foreground w-9 text-right tabular-nums" }, Z4 = /* @__PURE__ */ O({
  __name: "PieChart",
  props: {
    data: {},
    height: { default: 220 },
    type: { default: "doughnut" },
    format: {}
  },
  setup(e) {
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = $(() => o.data.reduce((g, v) => g + v.value, 0)), s = q(null), i = $(() => o.height), u = $(() => i.value / 2 - 4), d = $(() => o.type === "doughnut" ? u.value * 0.62 : 0);
    function m(g) {
      return n[g % n.length];
    }
    function h(g) {
      return 1 - Math.min(0.55, Math.floor(g / n.length) * 0.28);
    }
    const p = $(() => {
      if (r.value <= 0)
        return [];
      const g = i.value / 2;
      let v = -Math.PI / 2;
      return o.data.map((c, C) => {
        const B = c.value / r.value, A = B * Math.PI * 2, R = v, E = v + A;
        return v = E, {
          ...c,
          share: B,
          colour: m(C),
          opacity: h(C),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: B >= 0.9999 ? w(g) : _(g, R, E, u.value, d.value)
        };
      });
    });
    function x(g, v, c) {
      return `${(g + Math.cos(v) * c).toFixed(2)},${(g + Math.sin(v) * c).toFixed(2)}`;
    }
    function _(g, v, c, C, B) {
      const A = c - v > Math.PI ? 1 : 0;
      return B <= 0 ? `M${g},${g} L${x(g, v, C)} A${C},${C} 0 ${A} 1 ${x(g, c, C)} Z` : [
        `M${x(g, v, C)}`,
        `A${C},${C} 0 ${A} 1 ${x(g, c, C)}`,
        `L${x(g, c, B)}`,
        `A${B},${B} 0 ${A} 0 ${x(g, v, B)}`,
        "Z"
      ].join(" ");
    }
    function w(g) {
      const v = u.value, c = d.value, C = [
        `M${g - v},${g}`,
        `A${v},${v} 0 1 1 ${g + v},${g}`,
        `A${v},${v} 0 1 1 ${g - v},${g}`,
        "Z"
      ];
      return c <= 0 ? C.join(" ") : [
        ...C,
        `M${g - c},${g}`,
        `A${c},${c} 0 1 0 ${g + c},${g}`,
        `A${c},${c} 0 1 0 ${g - c},${g}`,
        "Z"
      ].join(" ");
    }
    const S = (g) => o.format ? o.format(g) : new Intl.NumberFormat().format(g), y = (g) => `${(g * 100).toFixed(g < 0.01 ? 2 : 0)}%`;
    return (g, v) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", bm, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${S(r.value)}`
      }, [
        (t(!0), a(P, null, V(p.value, (c, C) => (t(), a("path", {
          key: C,
          d: c.path,
          fill: c.colour,
          "fill-opacity": s.value === null || s.value === C ? c.opacity : c.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (B) => s.value = C,
          onMouseleave: v[0] || (v[0] = (B) => s.value = null)
        }, null, 40, ym))), 128)),
        e.type === "doughnut" ? (t(), a(P, { key: 0 }, [
          l("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(S(s.value === null ? r.value : p.value[s.value].value)), 9, km),
          l("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, $m)
        ], 64)) : k("", !0)
      ], 8, xm)),
      l("ul", wm, [
        (t(!0), a(P, null, V(p.value, (c, C) => (t(), a("li", {
          key: C,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === C ? "bg-muted" : ""]),
          onMouseenter: (B) => s.value = C,
          onMouseleave: v[1] || (v[1] = (B) => s.value = null)
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          l("span", Sm, f(c.label), 1),
          l("span", Mm, f(S(c.value)), 1),
          l("span", Bm, f(y(c.share)), 1)
        ], 42, Cm))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(Qe, {
        key: 0,
        label: p.value[s.value].label,
        value: S(p.value[s.value].value),
        share: y(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : k("", !0)
    ]));
  }
}), _m = ["width", "height", "viewBox", "aria-label"], Am = { class: "text-border" }, Pm = ["x1", "x2", "y1", "y2", "stroke-dasharray"], zm = { class: "fill-muted-foreground text-[10px]" }, Om = ["x", "y"], jm = ["x", "y"], Lm = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Vm = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, J4 = /* @__PURE__ */ O({
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
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = q(null), s = q(560), i = q(null);
    let u = null;
    pe(() => {
      u = new ResizeObserver((Z) => {
        const ae = Z[0]?.contentRect.width ?? 0;
        ae > 0 && (s.value = ae);
      }), r.value && u.observe(r.value);
    }), he(() => u?.disconnect());
    const d = $(
      () => o.series?.length ? o.series : [{ name: "", points: o.data ?? [] }]
    ), m = (Z, ae) => ae.color ?? n[Z % n.length], h = $(() => d.value.flatMap((Z) => Z.points)), p = $(() => h.value.some((Z) => typeof Z.r == "number")), x = { top: 12, right: 16, bottom: 32, left: 48 }, _ = $(() => Math.max(10, s.value - x.left - x.right)), w = $(() => Math.max(10, o.height - x.top - x.bottom));
    function S(Z) {
      if (Z.length === 0)
        return [0, 1];
      const ae = Math.min(...Z), te = Math.max(...Z), J = te - ae || Math.abs(te) || 1;
      return [ae - J * 0.08, te + J * 0.08];
    }
    const y = $(() => S(h.value.map((Z) => Z.x))), g = $(() => S(h.value.map((Z) => Z.y))), v = (Z) => {
      const [ae, te] = y.value;
      return x.left + (Z - ae) / (te - ae) * _.value;
    }, c = (Z) => {
      const [ae, te] = g.value;
      return x.top + w.value - (Z - ae) / (te - ae) * w.value;
    }, C = $(() => Math.max(...h.value.map((Z) => Z.r ?? 0), 0));
    function B(Z) {
      if (!p.value || !C.value)
        return 4;
      const ae = Math.max(0, Z.r ?? 0) / C.value;
      return 3 + Math.sqrt(ae) * (o.maxRadius - 3);
    }
    function A([Z, ae]) {
      return Array.from({ length: 5 }, (te, J) => Z + (ae - Z) / 4 * J);
    }
    const R = $(() => A(y.value)), E = $(() => A(g.value)), ee = (Z) => o.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), H = (Z) => o.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), G = $(() => {
      if (!i.value)
        return null;
      const Z = d.value[i.value.s], ae = Z?.points[i.value.p];
      return ae ? { series: Z, point: ae } : null;
    });
    return (Z, ae) => (t(), a("div", {
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
        l("g", Am, [
          (t(!0), a(P, null, V(E.value, (te, J) => (t(), a("line", {
            key: `gy-${J}`,
            x1: x.left,
            x2: x.left + _.value,
            y1: c(te),
            y2: c(te),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": J === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Pm))), 128))
        ]),
        l("g", zm, [
          (t(!0), a(P, null, V(E.value, (te, J) => (t(), a("text", {
            key: `ty-${J}`,
            x: x.left - 8,
            y: c(te) + 3,
            "text-anchor": "end"
          }, f(H(te)), 9, Om))), 128)),
          (t(!0), a(P, null, V(R.value, (te, J) => (t(), a("text", {
            key: `tx-${J}`,
            x: v(te),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ee(te)), 9, jm))), 128))
        ]),
        (t(!0), a(P, null, V(d.value, (te, J) => (t(), a("g", {
          key: `s-${J}`
        }, [
          (t(!0), a(P, null, V(te.points, (W, M) => (t(), a("circle", {
            key: `p-${J}-${M}`,
            cx: v(W.x),
            cy: c(W.y),
            r: B(W),
            fill: m(J, te),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(J, te),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== J || i.value.p !== M) ? 0.35 : 1,
            onMouseenter: (N) => i.value = { s: J, p: M },
            onMouseleave: ae[0] || (ae[0] = (N) => i.value = null)
          }, null, 40, Lm))), 128))
        ]))), 128))
      ], 8, _m)),
      G.value ? (t(), D(Qe, {
        key: 0,
        label: G.value.point.label ?? G.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ee(G.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(G.value.point.y)}`,
        share: p.value && G.value.point.r != null ? String(G.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : k("", !0),
      e.showLegend && d.value.length > 1 ? (t(), a("div", Vm, [
        (t(!0), a(P, null, V(d.value, (te, J) => (t(), a("span", {
          key: `l-${J}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          l("span", {
            class: "size-2.5 rounded-full",
            style: ne({ backgroundColor: m(J, te) }),
            "aria-hidden": "true"
          }, null, 4),
          U(" " + f(te.name), 1)
        ]))), 128))
      ])) : k("", !0)
    ], 512));
  }
}), Dm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Tm = ["width", "height", "viewBox"], Em = ["points"], Im = ["x1", "y1", "x2", "y2"], Fm = ["points", "fill", "stroke"], Nm = ["cx", "cy", "fill", "onMouseenter"], Rm = ["x", "y", "text-anchor"], Um = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Hm = { class: "truncate" }, Y4 = /* @__PURE__ */ O({
  __name: "RadarChart",
  props: {
    series: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = $(
      () => o.series.map((c, C) => ({
        ...c,
        color: c.color ?? n[C % n.length]
      }))
    ), s = $(() => r.value[0]?.points.map((c) => c.label) ?? []), i = $(() => s.value.length), u = $(() => o.height), d = $(() => u.value / 2), m = $(() => u.value / 2 - 34), h = $(() => {
      const c = Math.max(...r.value.flatMap((A) => A.points.map((R) => R.value)), 0);
      if (c <= 0)
        return 1;
      const C = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((A) => c <= A * C) ?? 10) * C;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function x(c, C) {
      const B = p(c);
      return {
        x: d.value + Math.cos(B) * m.value * C,
        y: d.value + Math.sin(B) * m.value * C
      };
    }
    function _(c) {
      return Array.from({ length: i.value }, (C, B) => {
        const A = x(B, c);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = $(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: _(c) }))), S = $(
      () => r.value.map((c) => {
        const C = c.points.map((B) => Math.max(0, B.value) / h.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: C.map((B, A) => {
            const R = x(A, B);
            return `${R.x.toFixed(2)},${R.y.toFixed(2)}`;
          }).join(" "),
          dots: C.map((B, A) => x(A, B))
        };
      })
    ), y = $(
      () => s.value.map((c, C) => {
        const B = p(C), A = d.value + Math.cos(B) * (m.value + 14), R = d.value + Math.sin(B) * (m.value + 14), E = Math.cos(B);
        return {
          label: c,
          x: A,
          y: R + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), g = q(null), v = (c) => o.format ? o.format(c) : new Intl.NumberFormat().format(c);
    return (c, C) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", Dm, [
      (t(), a("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(w.value, (B) => (t(), a("polygon", {
          key: B.f,
          points: B.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Em))), 128)),
        (t(!0), a(P, null, V(s.value, (B, A) => (t(), a("line", {
          key: `spoke-${A}`,
          x1: d.value,
          y1: d.value,
          x2: x(A, 1).x,
          y2: x(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Im))), 128)),
        (t(!0), a(P, null, V(S.value, (B, A) => (t(), a("g", {
          key: `s-${A}`
        }, [
          l("polygon", {
            points: B.outline,
            fill: B.color,
            "fill-opacity": "0.16",
            stroke: B.color,
            "stroke-width": "2"
          }, null, 8, Fm),
          (t(!0), a(P, null, V(B.dots, (R, E) => (t(), a("circle", {
            key: E,
            cx: R.x,
            cy: R.y,
            r: "3",
            fill: B.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ee) => g.value = {
              series: B.name,
              axis: s.value[E],
              value: B.values[E]?.value ?? 0
            },
            onMouseleave: C[0] || (C[0] = (ee) => g.value = null)
          }, null, 40, Nm))), 128))
        ]))), 128)),
        (t(!0), a(P, null, V(y.value, (B, A) => (t(), a("text", {
          key: `l-${A}`,
          x: B.x,
          y: B.y,
          "text-anchor": B.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(B.label), 9, Rm))), 128))
      ], 8, Tm)),
      e.showLegend ? (t(), a("ul", Um, [
        (t(!0), a(P, null, V(r.value, (B, A) => (t(), a("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: B.color })
          }, null, 4),
          l("span", Hm, f(B.name), 1)
        ]))), 128))
      ])) : k("", !0),
      g.value ? (t(), D(Qe, {
        key: 1,
        label: `${g.value.series} — ${g.value.axis}`,
        value: v(g.value.value)
      }, null, 8, ["label", "value"])) : k("", !0)
    ]));
  }
}), qm = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Km = ["width", "height", "viewBox"], Gm = ["cx", "cy", "r"], Wm = ["d", "fill", "fill-opacity", "onMouseenter"], Zm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Jm = { class: "min-w-0 flex-1 truncate capitalize" }, Ym = { class: "font-medium tabular-nums" }, X4 = /* @__PURE__ */ O({
  __name: "PolarAreaChart",
  props: {
    data: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = q(null), s = $(() => o.height), i = $(() => s.value / 2), u = $(() => s.value / 2 - 6), d = $(() => Math.max(...o.data.map((_) => Math.max(0, _.value)), 0)), m = $(() => {
      const _ = o.data.length;
      if (_ === 0 || d.value <= 0)
        return [];
      const w = Math.PI * 2 / _;
      return o.data.map((S, y) => {
        const g = Math.sqrt(Math.max(0, S.value) / d.value), v = u.value * g, c = y * w - Math.PI / 2, C = c + w;
        return {
          ...S,
          color: n[y % n.length],
          share: d.value === 0 ? 0 : S.value / d.value,
          path: h(i.value, c, C, v)
        };
      });
    });
    function h(_, w, S, y) {
      if (y <= 0)
        return "";
      if (S - w >= Math.PI * 2 - 1e-6)
        return `M${_ - y},${_} A${y},${y} 0 1 1 ${_ + y},${_} A${y},${y} 0 1 1 ${_ - y},${_} Z`;
      const g = S - w > Math.PI ? 1 : 0, v = _ + Math.cos(w) * y, c = _ + Math.sin(w) * y, C = _ + Math.cos(S) * y, B = _ + Math.sin(S) * y;
      return `M${_},${_} L${v.toFixed(2)},${c.toFixed(2)} A${y.toFixed(2)},${y.toFixed(2)} 0 ${g} 1 ${C.toFixed(2)},${B.toFixed(2)} Z`;
    }
    const p = $(() => [0.5, 0.75, 1].map((_) => u.value * _)), x = (_) => o.format ? o.format(_) : new Intl.NumberFormat().format(_);
    return (_, w) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ne({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", qm, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(p.value, (S) => (t(), a("circle", {
          key: S,
          cx: i.value,
          cy: i.value,
          r: S,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Gm))), 128)),
        (t(!0), a(P, null, V(m.value, (S, y) => (t(), a("path", {
          key: y,
          d: S.path,
          fill: S.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === y ? 0.75 : 0.3,
          onMouseenter: (g) => r.value = y,
          onMouseleave: w[0] || (w[0] = (g) => r.value = null)
        }, null, 40, Wm))), 128))
      ], 8, Km)),
      e.showLegend ? (t(), a("ul", Zm, [
        (t(!0), a(P, null, V(m.value, (S, y) => (t(), a("li", {
          key: y,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ne({ background: S.color })
          }, null, 4),
          l("span", Jm, f(S.label), 1),
          l("span", Ym, f(x(S.value)), 1)
        ]))), 128))
      ])) : k("", !0),
      r.value !== null ? (t(), D(Qe, {
        key: 1,
        label: m.value[r.value].label,
        value: x(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : k("", !0)
    ]));
  }
}), Xm = ["width", "height"], Qm = ["x1", "x2", "y1", "y2"], ep = ["x", "y"], tp = ["x", "y"], ap = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], np = ["x", "y", "width", "height", "fill", "fill-opacity"], lp = ["d", "stroke"], op = ["cx", "cy", "fill"], sp = ["x", "y"], rp = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, ip = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, up = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, dp = { class: "text-xs font-semibold tabular-nums" }, cp = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, fp = { class: "text-muted-foreground" }, Q4 = /* @__PURE__ */ O({
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
    const o = e, n = q(null), r = q(560), s = q(null);
    let i = null;
    pe(() => {
      i = new ResizeObserver((J) => {
        r.value = Math.max(160, J[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), he(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], m = $(
      () => o.bars.map((J, W) => ({
        ...J,
        color: J.color ?? u[W % u.length]
      }))
    ), h = $(
      () => o.lines.map((J, W) => ({
        ...J,
        color: J.color ?? d[W % d.length]
      }))
    ), p = $(
      () => m.value[0]?.points.map((J) => J.label) ?? h.value[0]?.points.map((J) => J.label) ?? []
    ), x = $(() => p.value.length), _ = $(() => o.lineAxis === "right"), w = $(() => ({
      top: 12,
      right: _.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), S = $(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, o.height - w.value.top - w.value.bottom)
    }));
    function y(J) {
      const W = Math.max(...J, 0);
      if (W <= 0)
        return 1;
      const M = 10 ** Math.floor(Math.log10(W));
      return ([1, 2, 2.5, 5, 10].find((L) => W <= L * M) ?? 10) * M;
    }
    const g = $(
      () => y([
        ...m.value.flatMap((J) => J.points.map((W) => W.value)),
        ..._.value ? [] : h.value.flatMap((J) => J.points.map((W) => W.value))
      ])
    ), v = $(
      () => _.value ? y(h.value.flatMap((J) => J.points.map((W) => W.value))) : g.value
    ), c = $(() => S.value.w / Math.max(1, x.value)), C = $(() => c.value * 0.6), B = $(() => C.value / Math.max(1, m.value.length));
    function A(J) {
      return w.value.left + J * c.value + c.value / 2;
    }
    const R = $(
      () => m.value.flatMap(
        (J, W) => J.points.map((M, N) => {
          const L = Math.max(0, M.value) / g.value * S.value.h;
          return {
            x: A(N) - C.value / 2 + W * B.value,
            y: w.value.top + S.value.h - L,
            w: Math.max(0, B.value - 2),
            h: L,
            color: J.color,
            index: N,
            name: J.name,
            value: M.value,
            label: M.label
          };
        })
      )
    ), E = $(
      () => h.value.map((J) => {
        const W = J.points.map((M, N) => ({
          x: A(N),
          y: w.value.top + S.value.h - Math.max(0, M.value) / v.value * S.value.h,
          value: M.value
        }));
        return {
          ...J,
          pts: W,
          d: W.map((M, N) => `${N === 0 ? "M" : "L"}${M.x.toFixed(2)},${M.y.toFixed(2)}`).join(" ")
        };
      })
    ), ee = $(
      () => [0, 0.25, 0.5, 0.75, 1].map((J) => ({
        y: w.value.top + S.value.h * J,
        left: g.value * (1 - J),
        right: v.value * (1 - J)
      }))
    ), H = $(() => Math.max(1, Math.ceil(x.value / 10)));
    function G(J) {
      return J === x.value - 1 || J % H.value === 0;
    }
    const Z = (J) => o.format ? o.format(J) : ae(J);
    function ae(J) {
      return Math.abs(J) >= 1e6 ? `${(J / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(J) >= 1e3 ? `${(J / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(J * 100) / 100);
    }
    const te = $(() => {
      if (s.value === null)
        return null;
      const J = s.value;
      return {
        label: p.value[J],
        rows: [
          ...m.value.map((W) => ({
            name: W.name,
            color: W.color,
            value: W.points[J]?.value ?? 0
          })),
          ...h.value.map((W) => ({
            name: W.name,
            color: W.color,
            value: W.points[J]?.value ?? 0
          }))
        ]
      };
    });
    return (J, W) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: W[0] || (W[0] = (M) => s.value = null)
        }, [
          (t(!0), a(P, null, V(ee.value, (M) => (t(), a("line", {
            key: `g-${M.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: M.y,
            y2: M.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Qm))), 128)),
          (t(!0), a(P, null, V(ee.value, (M) => (t(), a("text", {
            key: `lt-${M.y}`,
            x: w.value.left - 8,
            y: M.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(M.left)), 9, ep))), 128)),
          _.value ? (t(!0), a(P, { key: 0 }, V(ee.value, (M) => (t(), a("text", {
            key: `rt-${M.y}`,
            x: r.value - w.value.right + 8,
            y: M.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(ae(M.right)), 9, tp))), 128)) : k("", !0),
          (t(!0), a(P, null, V(p.value, (M, N) => (t(), a("rect", {
            key: `hit-${N}`,
            x: w.value.left + N * c.value,
            y: w.value.top,
            width: c.value,
            height: S.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === N ? 0.4 : 0,
            onMouseenter: (L) => s.value = N
          }, null, 40, ap))), 128)),
          (t(!0), a(P, null, V(R.value, (M, N) => (t(), a("rect", {
            key: `b-${N}`,
            x: M.x,
            y: M.y,
            width: M.w,
            height: M.h,
            fill: M.color,
            "fill-opacity": s.value === null || s.value === M.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, np))), 128)),
          (t(!0), a(P, null, V(E.value, (M, N) => (t(), a("g", {
            key: `l-${N}`
          }, [
            l("path", {
              d: M.d,
              fill: "none",
              stroke: M.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, lp),
            s.value !== null && M.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: M.pts[s.value].x,
              cy: M.pts[s.value].y,
              r: "4",
              fill: M.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, op)) : k("", !0)
          ]))), 128)),
          (t(!0), a(P, null, V(p.value, (M, N) => ce((t(), a("text", {
            key: `x-${N}`,
            x: A(N),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(M), 9, sp)), [
            [Le, G(N)]
          ])), 128))
        ], 40, Xm)),
        te.value ? (t(), a("div", rp, [
          l("p", ip, f(te.value.label), 1),
          (t(!0), a(P, null, V(te.value.rows, (M, N) => (t(), a("div", {
            key: N,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: M.color })
            }, null, 4),
            l("span", up, f(M.name), 1),
            l("span", dp, f(Z(M.value)), 1)
          ]))), 128))
        ])) : k("", !0),
        e.showLegend ? (t(), a("div", cp, [
          (t(!0), a(P, null, V([...m.value, ...h.value], (M, N) => (t(), a("span", {
            key: N,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: ne({ background: M.color })
            }, null, 4),
            l("span", fp, f(M.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), mp = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, pp = { class: "text-muted-foreground" }, vp = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, gp = ["width", "height"], hp = ["x", "y"], bp = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], xp = ["x", "y"], yp = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, kp = { class: "text-[11px] font-medium capitalize" }, $p = { class: "text-muted-foreground text-[11px] capitalize" }, wp = { class: "text-sm font-semibold tabular-nums" }, Cp = { class: "text-muted-foreground text-xs font-normal" }, e5 = /* @__PURE__ */ O({
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
    const o = e, n = q(null), r = q(560), s = q(null);
    let i = null;
    pe(() => {
      i = new ResizeObserver((C) => {
        r.value = Math.max(160, C[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), he(() => i?.disconnect());
    const u = $(() => o.series[0]?.points.map((C) => C.label) ?? []), d = $(() => o.series.length), m = $(() => u.value.length), h = $(() => Math.min(140, Math.max(60, r.value * 0.16))), p = $(() => Math.max(1, r.value - h.value - 8)), x = $(() => p.value / Math.max(1, m.value)), _ = $(() => Math.max(1, (o.height - 8) / Math.max(1, d.value)));
    function w(C) {
      if (C === 0)
        return "var(--muted)";
      const B = Math.max(1, o.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(C / B * 100)}%, var(--muted))`;
    }
    function S(C) {
      for (let B = 0; B < o.buckets.length; B++) {
        const A = o.buckets[B].max;
        if (A === void 0 || C < A)
          return B;
      }
      return o.buckets.length - 1;
    }
    const y = $(
      () => o.series.flatMap(
        (C, B) => C.points.map((A, R) => {
          const E = S(A.value);
          return {
            row: B,
            col: R,
            x: h.value + R * x.value,
            y: 4 + B * _.value,
            w: Math.max(1, x.value - 1),
            h: Math.max(1, _.value - 4),
            colour: w(E),
            label: A.label,
            value: A.value,
            rowName: C.name,
            bucketLabel: o.buckets[E].label
          };
        })
      )
    ), g = $(() => x.value < 2), v = $(() => s.value ? y.value.find((C) => C.row === s.value.row && C.col === s.value.col) ?? null : null), c = (C) => o.format ? o.format(C) : new Intl.NumberFormat().format(C);
    return (C, B) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      d.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ne({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        l("div", mp, [
          (t(!0), a(P, null, V(e.buckets, (A, R) => (t(), a("span", {
            key: R,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            l("span", {
              class: "size-3 rounded-sm border",
              style: ne({ background: w(R) })
            }, null, 4),
            l("span", pp, f(A.label), 1)
          ]))), 128))
        ]),
        g.value ? (t(), a("p", vp, f(m.value) + " columns - too many to label individually ", 1)) : k("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: B[0] || (B[0] = (A) => s.value = null)
        }, [
          (t(!0), a(P, null, V(e.series, (A, R) => (t(), a("text", {
            key: `r-${R}`,
            x: h.value - 10,
            y: 4 + R * _.value + _.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(A.name), 9, hp))), 128)),
          (t(!0), a(P, null, V(y.value, (A, R) => (t(), a("rect", {
            key: R,
            x: A.x,
            y: A.y,
            width: A.w,
            height: A.h,
            fill: A.colour,
            "fill-opacity": s.value === null || s.value.row === A.row && s.value.col === A.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (E) => s.value = { row: A.row, col: A.col }
          }, null, 40, bp))), 128)),
          e.showColumnLabels && !g.value ? (t(!0), a(P, { key: 0 }, V(u.value, (A, R) => (t(), a("text", {
            key: `c-${R}`,
            x: h.value + R * x.value + x.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(A), 9, xp))), 128)) : k("", !0)
        ], 40, gp)),
        v.value ? (t(), a("div", yp, [
          l("p", kp, f(v.value.label), 1),
          l("p", $p, f(v.value.rowName), 1),
          l("p", wp, [
            U(f(c(v.value.value)) + " ", 1),
            l("span", Cp, "(" + f(v.value.bucketLabel) + ")", 1)
          ])
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), Sp = ["viewBox"], Mp = { key: 0 }, Bp = ["id"], _p = ["stop-color"], Ap = ["stop-color"], Pp = ["d", "fill"], zp = ["d", "stroke"], Wt = 100, qe = 30, it = /* @__PURE__ */ O({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = Math.random().toString(36).slice(2, 9), r = $(() => {
      const d = o.data.map((x) => x.value);
      if (d.length < 2)
        return [];
      const m = Math.min(...d), p = Math.max(...d) - m || 1;
      return d.map((x, _) => ({
        x: _ / (d.length - 1) * Wt,
        y: qe - (x - m) / p * (qe - 4) - 2
      }));
    });
    function s(d) {
      const m = d.length;
      if (m < 2)
        return "";
      const h = [], p = [];
      for (let w = 0; w < m - 1; w++)
        h[w] = d[w + 1].x - d[w].x, p[w] = h[w] === 0 ? 0 : (d[w + 1].y - d[w].y) / h[w];
      const x = [p[0]];
      for (let w = 1; w < m - 1; w++)
        if (p[w - 1] * p[w] <= 0)
          x[w] = 0;
        else {
          const S = 2 * h[w] + h[w - 1], y = h[w] + 2 * h[w - 1];
          x[w] = (S + y) / (S / p[w - 1] + y / p[w]);
        }
      x[m - 1] = p[m - 2];
      let _ = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let w = 0; w < m - 1; w++) {
        const S = h[w] / 3;
        _ += ` C${(d[w].x + S).toFixed(2)},${(d[w].y + x[w] * S).toFixed(2)} ${(d[w + 1].x - S).toFixed(2)},${(d[w + 1].y - x[w + 1] * S).toFixed(2)} ${d[w + 1].x.toFixed(2)},${d[w + 1].y.toFixed(2)}`;
      }
      return _;
    }
    const i = $(() => {
      const d = r.value;
      return d.length < 2 ? "" : o.smooth ? s(d) : d.map((m, h) => `${h === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), u = $(() => {
      const d = r.value;
      return !o.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${qe} L${d[0].x.toFixed(2)},${qe} Z`;
    });
    return (d, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Wt} ${qe}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ne({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Mp, [
        l("linearGradient", {
          id: `pk-spark-${b(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          l("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, _p),
          l("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Ap)
        ], 8, Bp)
      ])) : k("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${b(n)})`
      }, null, 8, Pp)) : k("", !0),
      l("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, zp)
    ], 12, Sp)) : k("", !0);
  }
}), Op = { class: "flex items-center gap-1 text-xs" }, jp = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Lp = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ba = /* @__PURE__ */ O({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, n = $(() => o.direction === "flat" ? null : o.direction === "new" ? !o.inverted : o.inverted ? o.direction === "down" : o.direction === "up"), r = $(
      () => n.value === null ? "text-muted-foreground" : n.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = $(
      () => o.direction === "flat" ? "→" : o.direction === "down" ? "▼" : "▲"
    ), i = $(() => o.direction === "new" ? "New" : o.percentage === null ? "-" : `${Math.abs(o.percentage)}%`);
    return (u, d) => (t(), a("span", Op, [
      l("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        l("span", jp, f(s.value), 1),
        U(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", Lp, f(e.comparison), 1)) : k("", !0)
    ]));
  }
}), Vp = ["aria-label"], Ne = /* @__PURE__ */ O({
  __name: "PkSkeleton",
  props: {
    variant: { default: "text" },
    count: { default: 1 },
    height: {},
    label: { default: "Loading" }
  },
  setup(e) {
    const o = e, n = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = $(() => n[o.variant] ?? n.text), s = $(() => Math.max(1, Math.min(o.count, 50)));
    function i(u) {
      if (!(o.variant !== "text" || s.value === 1))
        return u === s.value - 1 ? "60%" : void 0;
    }
    return (u, d) => (t(), a("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: ne(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(P, null, V(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ne({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Vp));
  }
}), Dp = ["data-collapsed"], Tp = { class: "flex flex-wrap items-start justify-between gap-2" }, Ep = { class: "flex min-w-0 items-start gap-2" }, Ip = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fp = ["d"], Np = { class: "min-w-0" }, Rp = { class: "text-sm font-medium" }, Up = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Hp = { class: "flex shrink-0 items-center gap-1.5" }, qp = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Kp = ["aria-pressed", "onClick"], Gp = ["aria-expanded", "aria-label", "title"], Wp = ["aria-label"], Zp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jp = ["d"], Yp = /* @__PURE__ */ O({
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
    const o = e, n = Aa(), r = q(o.defaultCollapsed), s = $(() => !!o.icon && !n.icon), i = $(() => {
      if (!(o.fitBody && !o.loading && !o.error))
        return { minHeight: `${o.bodyHeight}px` };
    });
    return (u, d) => (t(), a("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      l("div", Tp, [
        l("div", Ep, [
          K(u.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", Ip, [
              l("path", {
                d: b(ue)(e.icon)
              }, null, 8, Fp)
            ])) : k("", !0)
          ]),
          l("div", Np, [
            l("p", Rp, f(e.label), 1),
            e.description ? (t(), a("p", Up, f(e.description), 1)) : k("", !0),
            K(u.$slots, "trend")
          ])
        ]),
        l("div", Hp, [
          K(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", qp, [
            (t(!0), a(P, null, V(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (h) => u.$emit("update:period", m.value)
            }, f(m.label), 11, Kp))), 128))
          ])) : k("", !0),
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
              class: z(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [...d[2] || (d[2] = [
              l("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, Gp)) : k("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (m) => u.$emit("hide"))
          }, [
            (t(), a("svg", Zp, [
              l("path", {
                d: b(ue)("eye-off")
              }, null, 8, Jp)
            ]))
          ], 8, Wp)) : k("", !0)
        ])
      ]),
      r.value ? k("", !0) : (t(), a("div", {
        key: 0,
        style: ne(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), D(Ne, {
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
    ], 10, Dp));
  }
}), Xp = ["aria-pressed", "aria-label", "title"], Qp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ev = ["d"], tv = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, av = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, nv = ["href"], lv = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ov = ["d"], sv = ["aria-label", "onClick"], rv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, iv = ["d"], uv = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, dv = ["d"], cv = {
  key: 0,
  class: "flex flex-col gap-1"
}, fv = ["onClick"], mv = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, pv = ["d"], vv = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, gv = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(!1), i = q(!1), u = $(
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
    return (h, p) => (t(), a(P, null, [
      I(Yp, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (x) => r("hide"))
      }, {
        actions: j(() => [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (x) => s.value = !s.value)
          }, [
            (t(), a("svg", Qp, [
              l("path", {
                d: b(ue)(s.value ? "check" : "pencil")
              }, null, 8, ev)
            ]))
          ], 8, Xp)
        ]),
        default: j(() => [
          e.items.length === 0 ? (t(), a("div", tv, [
            p[7] || (p[7] = l("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (x) => i.value = !0)
            }, {
              default: j(() => [...p[6] || (p[6] = [
                U("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", av, [
            (t(!0), a(P, null, V(e.items, (x) => (t(), a("div", {
              key: x.id,
              class: "inline-flex items-center gap-1"
            }, [
              l("a", {
                href: x.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", lv, [
                  l("path", {
                    d: b(ue)(x.icon)
                  }, null, 8, ov)
                ])),
                U(" " + f(x.label), 1)
              ], 8, nv),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${x.label}`,
                onClick: (_) => d(x.id)
              }, [
                (t(), a("svg", rv, [
                  l("path", {
                    d: b(ue)("x")
                  }, null, 8, iv)
                ]))
              ], 8, sv)) : k("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (x) => i.value = !0)
            }, [
              (t(), a("svg", uv, [
                l("path", {
                  d: b(ue)("plus")
                }, null, 8, dv)
              ])),
              p[8] || (p[8] = U(" Add ", -1))
            ])) : k("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      I(Ze, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (x) => i.value = !1)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            onClick: p[4] || (p[4] = (x) => i.value = !1)
          }, {
            default: j(() => [...p[9] || (p[9] = [
              U("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          u.value.length ? (t(), a("ul", cv, [
            (t(!0), a(P, null, V(u.value, (x) => (t(), a("li", {
              key: x.id
            }, [
              l("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (_) => m(x)
              }, [
                (t(), a("svg", mv, [
                  l("path", {
                    d: b(ue)(x.icon)
                  }, null, 8, pv)
                ])),
                U(" " + f(x.label), 1)
              ], 8, fv)
            ]))), 128))
          ])) : (t(), a("p", vv, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), hv = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, bv = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, xv = { class: "relative w-full max-w-xl" }, yv = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kv = ["d"], $v = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, wv = ["data-slot"], Cv = { class: "px-5 py-4" }, Sv = { class: "mb-3 text-sm font-semibold" }, Mv = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Bv = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, _v = ["d"], Av = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, t5 = /* @__PURE__ */ O({
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
    const o = e, n = q(""), r = $(() => {
      const d = o.linkComponent;
      return typeof d == "string" ? d : Jt(d);
    }), s = Ke({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(d) {
      return d.external === !0 || /^https?:\/\//.test(d.href);
    }
    const u = $(() => {
      const d = n.value.trim().toLowerCase();
      return o.sections.map((m) => ({
        ...m,
        links: d ? m.links.filter((h) => h.label.toLowerCase().includes(d)) : m.links
      })).filter((m) => m.links.length > 0);
    });
    return (d, m) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ve)])
    }, [
      l("header", null, [
        l("h1", hv, f(e.title), 1),
        e.description ? (t(), a("p", bv, f(e.description), 1)) : k("", !0)
      ]),
      l("div", xv, [
        (t(), a("svg", yv, [
          l("path", {
            d: b(ue)("search")
          }, null, 8, kv)
        ])),
        I(ge, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (h) => n.value = h),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), a("div", $v, [
        (t(!0), a(P, null, V(u.value, (h) => (t(), a("section", {
          key: h.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${h.key}`
        }, [
          l("div", Cv, [
            l("h2", Sv, f(h.title), 1),
            l("div", Mv, [
              (t(!0), a(P, null, V(h.links, (p) => (t(), D(xe(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: z(b(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: j(() => [
                  (t(), a("svg", Bv, [
                    l("path", {
                      d: b(ue)(p.icon)
                    }, null, 8, _v)
                  ])),
                  U(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, wv))), 128))
      ])) : (t(), a("p", Av, ' Nothing matches "' + f(n.value) + '". ', 1))
    ], 2));
  }
}), Pv = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, zv = { class: "flex flex-1 flex-col gap-1 p-4" }, Ov = { class: "text-muted-foreground relative text-xs font-medium" }, jv = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Lv = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Vv = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Dv = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, a5 = /* @__PURE__ */ O({
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
    const o = (n) => typeof n == "number" ? new Intl.NumberFormat().format(n) : String(n ?? "-");
    return (n, r) => (t(), a("div", Pv, [
      l("div", zv, [
        l("p", Ov, f(e.label), 1),
        e.loading ? (t(), D(Ne, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", jv, " Could not load ")) : (t(), a("span", Lv, f(o(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(ba, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", Vv, f(e.description), 1)) : k("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", Dv, [
        I(it, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : k("", !0)
    ]));
  }
}), Tv = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Ev = { class: "flex flex-col gap-1 p-4" }, Iv = { class: "flex items-start justify-between gap-2" }, Fv = { class: "text-sm font-medium" }, Nv = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Rv = { class: "mt-1 flex flex-wrap items-center gap-2" }, Uv = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Hv = {
  key: 0,
  class: "-mb-px"
}, ot = /* @__PURE__ */ O({
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
    const o = e, n = $(() => o.delta === null || o.delta === 0 ? null : o.inverted ? o.delta < 0 : o.delta > 0), r = $(
      () => n.value === null ? "bg-muted text-muted-foreground" : n.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = $(
      () => typeof o.value == "number" ? new Intl.NumberFormat().format(o.value) : o.value
    );
    return (i, u) => (t(), a("div", Tv, [
      l("div", Ev, [
        l("div", Iv, [
          l("p", Fv, f(e.label), 1),
          K(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", Nv, f(e.caption), 1)) : k("", !0),
        l("div", Rv, [
          e.loading ? (t(), D(Ne, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", Uv, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : k("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", Hv, [
        I(it, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : k("", !0)
    ]));
  }
}), qv = { class: "relative flex flex-col gap-2" }, Kv = ["aria-label"], Gv = ["onMouseenter"], Wv = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Zv = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Jv = { class: "truncate" }, Yv = { class: "text-sm font-semibold tabular-nums" }, n5 = /* @__PURE__ */ O({
  __name: "SegmentedBar",
  props: {
    segments: {},
    total: { default: null },
    format: {},
    showLegend: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const o = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = $(() => o.segments.reduce((h, p) => h + Math.max(0, p.value), 0)), s = $(() => Math.max(o.total ?? r.value, r.value, 1)), i = $(
      () => o.segments.map((h, p) => {
        const x = Math.max(0, h.value) / s.value;
        return {
          ...h,
          color: h.color ?? n[p % n.length],
          share: x,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: h.value > 0 ? `max(2px, ${(x * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (h) => o.format ? o.format(h) : new Intl.NumberFormat().format(h), d = q(null), m = (h) => `${(h * 100).toFixed(h > 0 && h < 0.01 ? 1 : 0)}%`;
    return (h, p) => (t(), a("div", qv, [
      l("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ne({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((x) => `${x.label} ${u(x.value)}`).join(", ")
      }, [
        (t(!0), a(P, null, V(i.value, (x, _) => (t(), a("span", {
          key: _,
          class: z(["h-full transition-all", [
            _ === 0 ? "rounded-l-full" : "",
            _ === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ne({
            width: x.width,
            background: x.color,
            opacity: d.value === null || d.value === _ ? 1 : 0.4
          }),
          onMouseenter: (w) => d.value = _,
          onMouseleave: p[0] || (p[0] = (w) => d.value = null)
        }, null, 46, Gv))), 128))
      ], 12, Kv),
      e.showLegend ? (t(), a("div", Wv, [
        (t(!0), a(P, null, V(i.value, (x, _) => (t(), a("div", {
          key: _,
          class: "flex min-w-0 flex-col"
        }, [
          l("span", Zv, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ne({ background: x.color })
            }, null, 4),
            l("span", Jv, f(x.label), 1)
          ]),
          l("span", Yv, f(u(x.value)), 1)
        ]))), 128))
      ])) : k("", !0),
      d.value !== null ? (t(), D(Qe, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: m(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : k("", !0)
    ]));
  }
}), Xv = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Qv = ["data-heading"], eg = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, tg = { class: "text-muted-foreground truncate" }, ag = ["aria-label"], l5 = /* @__PURE__ */ O({
  __name: "StatListChart",
  props: {
    rows: {}
  },
  setup(e) {
    const o = e, n = {
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
    }, s = $(
      () => o.rows.map((i) => {
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
    return (i, u) => (t(), a("div", Xv, [
      (t(!0), a(P, null, V(s.value, (d) => (t(), a("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), a("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? n[d.tone] : "text-muted-foreground"])
        }, f(d.label), 3)) : (t(), a("div", eg, [
          l("span", tg, f(d.label), 1),
          l("span", {
            class: z(["shrink-0 font-medium tabular-nums", d.tone ? n[d.tone] : "text-foreground"])
          }, f(d.value), 3)
        ])),
        d.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": d.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(P, null, V(d.segments, (m, h) => (t(), a("span", {
            key: h,
            class: z(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: ne({ width: m.width })
          }, null, 6))), 128))
        ], 8, ag)) : k("", !0)
      ], 8, Qv))), 128))
    ]));
  }
}), ng = {
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
}, lg = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function og(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function sg(e, o) {
  return o || (e ? ng[og(e)] ?? "neutral" : "neutral");
}
function rg(e, o) {
  return lg[sg(e, o)];
}
const be = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const o = e, n = $(() => rg(o.status, o.tone));
    return (r, s) => (t(), D(Ge, {
      variant: n.value,
      class: z(o.class)
    }, {
      default: j(() => [
        K(r.$slots, "default", {}, () => [
          U(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), ig = ["data-layout"], ug = ["src", "alt"], dg = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, cg = ["src"], fg = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, mg = ["onMouseenter"], pg = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, vg = { class: "min-w-0" }, gg = { class: "truncate text-sm font-medium" }, hg = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, bg = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, xg = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, yg = { class: "min-w-0" }, kg = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, $g = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, wg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Cg = ["d"], Sg = ["aria-label"], Mg = /* @__PURE__ */ O({
  __name: "CatalogCard",
  props: {
    item: {},
    layout: { default: "grid" }
  },
  emits: ["select", "cart"],
  setup(e, { emit: o }) {
    const n = {
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-destructive",
      info: "bg-info",
      neutral: "bg-muted-foreground/40"
    }, r = e, s = o, i = q(0);
    function u(y) {
      if (typeof y != "string")
        return null;
      const g = y.trim();
      return g === "" ? null : /^(https?:)?\/\//i.test(g) ? g : null;
    }
    const d = $(() => {
      const y = [r.item.image, ...r.item.images ?? []].map(u).filter((g) => g !== null);
      return [...new Set(y)];
    }), m = $(() => d.value[i.value] ?? d.value[0] ?? null), h = $(
      () => r.item.label.split(/\s+/).slice(0, 2).map((y) => y[0]?.toUpperCase() ?? "").join("")
    ), p = $(() => {
      const y = r.item.progress;
      if (!y)
        return null;
      const g = Math.max(y.total ?? 100, y.value, 1);
      return `${Math.min(100, Math.max(0, y.value / g * 100)).toFixed(2)}%`;
    }), x = $(() => d.value.length > 1 ? d.value[1] : null), _ = $(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), w = $(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function S(y) {
      y.stopPropagation(), s("cart", r.item.key);
    }
    return (y, g) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: z(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: g[0] || (g[0] = (v) => s("select", e.item.key)),
      onKeydown: g[1] || (g[1] = Pa(me((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: g[2] || (g[2] = (v) => i.value = 0)
    }, [
      l("div", {
        class: z([
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
        }, null, 8, ug)) : (t(), a("span", dg, f(h.value), 1)),
        e.layout === "grid" && x.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: x.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, cg)) : k("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), a("div", fg, [
          (t(!0), a(P, null, V(d.value, (v, c) => (t(), a("span", {
            key: c,
            class: z(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (C) => i.value = c
          }, null, 42, mg))), 128))
        ])) : k("", !0)
      ], 2),
      l("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        l("div", pg, [
          l("div", vg, [
            l("p", gg, f(e.item.label), 1),
            e.item.caption ? (t(), a("p", hg, f(e.item.caption), 1)) : k("", !0),
            e.item.facts?.length ? (t(), a("p", bg, f(e.item.facts.join(" · ")), 1)) : k("", !0)
          ]),
          e.item.status ? (t(), D(be, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : k("", !0)
        ]),
        l("div", xg, [
          l("div", yg, [
            e.item.price ? (t(), a("p", kg, f(e.item.price), 1)) : k("", !0),
            w.value ? (t(), a("p", $g, f(w.value), 1)) : k("", !0)
          ]),
          _.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: S
          }, [
            (t(), a("svg", wg, [
              l("path", {
                d: b(ue)("cart")
              }, null, 8, Cg)
            ]))
          ])) : k("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          l("span", {
            class: z(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: ne({ width: p.value })
          }, null, 6)
        ], 8, Sg)) : k("", !0)
      ], 2)
    ], 42, ig));
  }
});
function Bg(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function _g(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Ag(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Pg = ["data-featured", "data-recommended"], zg = { class: "flex flex-col gap-1" }, Og = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, jg = { key: 0 }, Lg = { key: 1 }, Vg = { key: 2 }, Dg = { key: 3 }, Tg = { class: "text-sm font-semibold" }, Eg = { class: "flex items-baseline gap-1" }, Ig = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Fg = { class: "text-muted-foreground text-sm" }, Ng = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Rg = { class: "text-muted-foreground mt-1 text-xs" }, Ug = { class: "flex flex-1 flex-col gap-2 text-sm" }, Hg = { class: "flex min-w-0 items-start gap-2" }, qg = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Kg = ["d"], Gg = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Wg = ["d"], Zg = { class: "capitalize" }, Jg = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Yg = { class: "text-foreground font-medium" }, Xg = { class: "mt-auto flex gap-2 pt-2" }, Qg = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.plan.priceFormatted ?? String(n.plan.price)
    ), i = $(
      () => !!(n.plan.featured || n.plan.recommended)
    ), u = $(() => {
      const m = n.plan.perks ?? {};
      return Object.entries(m).map(([h, p]) => ({
        key: h,
        label: h.replace(/_/g, " "),
        granted: Ag(p.value),
        display: _g(p.value)
      }));
    }), d = $(() => n.plan.extraPerks ?? []);
    return (m, h) => (t(), a("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      l("header", zg, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", Og, [
          e.plan.recommended ? (t(), a("span", jg, "Recommended")) : e.plan.featured ? (t(), a("span", Lg, "Featured")) : k("", !0),
          e.plan.trial ? (t(), a("span", Vg, "Trial")) : k("", !0),
          e.plan.active === !1 ? (t(), a("span", Dg, "Inactive")) : k("", !0)
        ])) : k("", !0),
        l("h3", Tg, f(e.plan.name), 1),
        l("p", Eg, [
          l("span", Ig, f(s.value), 1),
          l("span", Fg, f(b(Bg)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", Ng, f(e.plan.shortDescription), 1)) : k("", !0),
        l("p", Rg, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      l("ul", Ug, [
        (t(!0), a(P, null, V(u.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          l("span", Hg, [
            l("span", {
              class: z(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", qg, [
                l("path", {
                  d: b(ue)("check")
                }, null, 8, Kg)
              ])) : (t(), a("svg", Gg, [
                l("path", {
                  d: b(ue)("x")
                }, null, 8, Wg)
              ]))
            ], 2),
            l("span", Zg, f(p.label), 1)
          ]),
          p.display ? (t(), a("span", Jg, f(p.display), 1)) : k("", !0)
        ]))), 128)),
        (t(!0), a(P, null, V(d.value, (p, x) => (t(), a("li", {
          key: `extra-${x}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          l("span", null, f(p.key), 1),
          l("span", Yg, f(p.value), 1)
        ]))), 128))
      ]),
      l("footer", Xg, [
        I(se, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: h[0] || (h[0] = (p) => r("edit", e.plan.id))
        }, {
          default: j(() => [...h[2] || (h[2] = [
            U(" Edit ", -1)
          ])]),
          _: 1
        }),
        I(se, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: h[1] || (h[1] = (p) => r("delete", e.plan.id))
        }, {
          default: j(() => [...h[3] || (h[3] = [
            U(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Pg));
  }
}), eh = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, th = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, ah = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, nh = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, lh = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, o5 = /* @__PURE__ */ O({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: o }) {
    const n = o;
    return (r, s) => (t(), a("div", {
      class: z(["w-full space-y-6", e.embedded ? "" : b(Ve)]),
      "data-slot": "plan-grid"
    }, [
      l("header", eh, [
        l("div", null, [
          e.title ? (t(), a("h1", th, f(e.title), 1)) : k("", !0),
          e.description ? (t(), a("p", ah, f(e.description), 1)) : k("", !0)
        ]),
        I(se, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: j(() => [...s[3] || (s[3] = [
            U("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", nh, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", lh, [
        (t(!0), a(P, null, V(e.plans, (i) => (t(), D(Qg, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => n("edit", u)),
          onDelete: s[2] || (s[2] = (u) => n("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), oh = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, sh = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, rh = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, ih = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, uh = { class: "space-y-1.5" }, dh = { class: "space-y-1.5" }, ch = { class: "space-y-1.5" }, fh = { class: "space-y-1.5" }, mh = { class: "space-y-1.5" }, ph = { class: "flex items-center gap-3 text-sm" }, vh = { class: "flex items-center gap-3 text-sm" }, gh = { class: "flex items-center gap-3 text-sm" }, hh = {
  key: 0,
  class: "space-y-1.5"
}, bh = { class: "flex items-center gap-3 text-sm" }, xh = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, yh = { class: "space-y-1.5" }, kh = ["value"], $h = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, wh = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Ch = ["id", "value", "onInput"], Sh = { class: "space-y-2" }, Mh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Bh = ["d"], _h = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", vt = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", s5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
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
    }), r = e, s = o, i = We(n());
    function u(g, v) {
      const c = i.perks?.[g]?.value;
      return c ?? v;
    }
    function d(g, v, c) {
      const C = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: v,
          overview: c ?? C?.overview ?? ""
        }
      };
    }
    function m(g, v) {
      const c = i.perks?.[g];
      i.perks = {
        ...i.perks ?? {},
        [g]: {
          value: c?.value ?? (g === "modules" ? [] : 0),
          overview: v
        }
      };
    }
    function h(g) {
      const v = g ? { ...n(), ...g } : n();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    h(r.plan), fe(
      () => r.plan,
      (g) => h(g),
      { deep: !0 }
    );
    const p = $({
      get: () => {
        const g = u("modules", []);
        return Array.isArray(g) ? g.map(String) : [];
      },
      set: (g) => {
        d("modules", _(g.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), x = $(
      () => r.modules.map((g) => ({ value: g.key, label: g.label }))
    );
    function _(g) {
      const v = Object.fromEntries(r.modules.map((B) => [B.key, B])), c = new Set(g);
      for (const B of r.modules)
        if (!c.has(B.key))
          for (const A of B.children ?? [])
            c.delete(A);
      let C = !0;
      for (; C; ) {
        C = !1;
        for (const B of [...c])
          for (const A of v[B]?.requires ?? [])
            c.has(A) || (c.add(A), C = !0);
      }
      return [...c];
    }
    function w() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function S(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== g);
    }
    function y() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, v) => (t(), a("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : b(Ve)]),
      "data-slot": "plan-editor",
      onSubmit: me(y, ["prevent"])
    }, [
      l("header", oh, [
        l("div", null, [
          l("h1", sh, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = l("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        I(se, {
          type: "button",
          variant: "outline",
          onClick: v[0] || (v[0] = (c) => s("cancel"))
        }, {
          default: j(() => [...v[14] || (v[14] = [
            U("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      l("div", rh, [
        l("section", ih, [
          v[26] || (v[26] = l("h2", { class: "font-semibold" }, "Plan details", -1)),
          l("div", uh, [
            I(ke, { for: "plan-name" }, {
              default: j(() => [...v[15] || (v[15] = [
                U("Plan name", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (c) => i.name = c),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          l("div", dh, [
            I(ke, { for: "plan-short" }, {
              default: j(() => [...v[16] || (v[16] = [
                U("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (c) => i.shortDescription = c),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          l("div", ch, [
            I(ke, { for: "plan-description" }, {
              default: j(() => [...v[17] || (v[17] = [
                U("Plan description", -1)
              ])]),
              _: 1
            }),
            ce(l("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (c) => i.description = c),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: z(vt)
            }, null, 512), [
              [ye, i.description]
            ])
          ]),
          l("div", fh, [
            I(ke, { for: "plan-days" }, {
              default: j(() => [...v[18] || (v[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            ce(l("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: z(_h)
            }, [...v[19] || (v[19] = [
              l("option", { value: 30 }, "Monthly", -1),
              l("option", { value: 365 }, "Yearly", -1),
              l("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Te,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          l("div", mh, [
            I(ke, { for: "plan-price" }, {
              default: j(() => [...v[20] || (v[20] = [
                U("Price", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": v[5] || (v[5] = (c) => i.price = Number(c))
            }, null, 8, ["model-value"])
          ]),
          l("label", ph, [
            I(b(Ee), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = U(" Featured ", -1))
          ]),
          l("label", vh, [
            I(b(Ee), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = U(" Recommended ", -1))
          ]),
          l("label", gh, [
            I(b(Ee), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", hh, [
            I(ke, { for: "plan-trial-days" }, {
              default: j(() => [...v[24] || (v[24] = [
                U("Trial days", -1)
              ])]),
              _: 1
            }),
            I(ge, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (c) => i.trialDays = Number(c))
            }, null, 8, ["model-value"])
          ])) : k("", !0),
          l("label", bh, [
            I(b(Ee), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (c) => i.active = c)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = U(" Active ", -1))
          ]),
          I(se, {
            type: "submit",
            disabled: e.processing
          }, {
            default: j(() => [
              U(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        l("section", xh, [
          v[33] || (v[33] = l("h2", { class: "font-semibold" }, "Plan perks", -1)),
          l("div", yh, [
            I(ke, null, {
              default: j(() => [...v[27] || (v[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            I(zt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (c) => p.value = c),
              options: x.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            I(ke, { for: "plan-modules-overview" }, {
              default: j(() => [...v[28] || (v[28] = [
                U("Overview", -1)
              ])]),
              _: 1
            }),
            l("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: z(vt),
              onInput: v[12] || (v[12] = (c) => m(
                "modules",
                c.target.value
              ))
            }, null, 40, kh)
          ]),
          (t(!0), a(P, null, V(e.limits, (c) => (t(), a("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), a("label", $h, [
              I(b(Ee), {
                checked: !!u(c.key, !1),
                "onUpdate:checked": (C) => d(
                  c.key,
                  C,
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              U(" " + f(c.label), 1)
            ])) : (t(), a(P, { key: 1 }, [
              I(ke, {
                for: `plan-limit-${c.key}`
              }, {
                default: j(() => [
                  U(f(c.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              c.hint ? (t(), a("p", wh, f(c.hint), 1)) : k("", !0),
              I(ge, {
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
              v[29] || (v[29] = l("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            I(ke, {
              for: `plan-overview-${c.key}`
            }, {
              default: j(() => [...v[30] || (v[30] = [
                U("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            l("textarea", {
              id: `plan-overview-${c.key}`,
              value: i.perks?.[c.key]?.overview ?? "",
              class: z(vt),
              onInput: (C) => m(
                c.key,
                C.target.value
              )
            }, null, 40, Ch)
          ]))), 128)),
          l("div", Sh, [
            v[32] || (v[32] = l("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(P, null, V(i.extraPerks ?? [], (c, C) => (t(), a("div", {
              key: C,
              class: "flex items-center gap-2"
            }, [
              I(ge, {
                modelValue: c.key,
                "onUpdate:modelValue": (B) => c.key = B,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(ge, {
                modelValue: c.value,
                "onUpdate:modelValue": (B) => c.value = B,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(se, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (B) => S(C)
              }, {
                default: j(() => [
                  (t(), a("svg", Mh, [
                    l("path", {
                      d: b(ue)("x")
                    }, null, 8, Bh)
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
              default: j(() => [...v[31] || (v[31] = [
                U(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Ah = { class: "flex flex-col gap-4" }, Ph = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, zh = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Oh = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, jh = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Lh = ["d"], Vh = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Dh = ["aria-pressed"], Th = ["aria-pressed"], Eh = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ih = ["aria-label"], Fh = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Nh = ["aria-pressed", "onClick"], Rh = ["aria-label"], Uh = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Hh = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, qh = ["data-slot"], Kh = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Gh = { class: "text-muted-foreground text-xs tabular-nums" }, Wh = { class: "flex items-center gap-2" }, Zh = ["disabled"], Jh = ["disabled"], Tt = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(""), i = Je(e, "modelValue"), u = We({}), d = We({});
    fe(s, () => x());
    function m(E) {
      const ee = E.trim();
      if (ee === "")
        return null;
      const H = Number(ee);
      return Number.isFinite(H) ? H : null;
    }
    function h() {
      const E = {};
      for (const [ee, H] of Object.entries(d))
        E[ee] = { min: m(H.min), max: m(H.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: h() };
    }
    function x() {
      r("filter", p());
    }
    function _(E, ee) {
      u[E] = u[E] === ee ? null : ee, x();
    }
    function w(E) {
      return d[E] ?? { min: "", max: "" };
    }
    function S(E, ee, H) {
      const G = d[E] ?? { min: "", max: "" };
      d[E] = { ...G, [ee]: H }, x();
    }
    function y(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const g = $(() => n.facets.filter((E) => (E.kind ?? "chips") === "chips")), v = $(() => n.facets.filter((E) => E.kind === "range")), c = $(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), C = q(1);
    fe(
      () => n.items.map((E) => E.key).join(","),
      () => {
        C.value = 1;
      }
    );
    const B = $(() => {
      const E = n.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / E));
    }), A = $(() => {
      const E = n.pageSize;
      if (!E || E < 1)
        return n.items;
      const ee = (C.value - 1) * E;
      return n.items.slice(ee, ee + E);
    });
    function R(E) {
      C.value = Math.min(B.value, Math.max(1, E));
    }
    return (E, ee) => (t(), a("div", Ah, [
      c.value ? (t(), a("div", Ph, [
        l("div", zh, [
          e.searchable ? (t(), a("div", Oh, [
            (t(), a("svg", jh, [
              l("path", {
                d: b(ue)("search")
              }, null, 8, Lh)
            ])),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: y
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : k("", !0),
          K(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", Vh, [
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ee[1] || (ee[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Dh),
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ee[2] || (ee[2] = (H) => i.value = "list")
            }, " List ", 10, Th)
          ])) : k("", !0)
        ]),
        g.value.length || v.value.length ? (t(), a("div", Eh, [
          (t(!0), a(P, null, V(g.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", Fh, f(H.label), 1)) : k("", !0),
            (t(!0), a(P, null, V(H.options ?? [], (G) => (t(), a("button", {
              key: G.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[H.key] === G.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[H.key] === G.value ? "true" : "false",
              onClick: (Z) => _(H.key, G.value)
            }, f(G.label), 11, Nh))), 128))
          ], 8, Ih))), 128)),
          (t(!0), a(P, null, V(v.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            l("span", Uh, f(H.label ?? H.key), 1),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": w(H.key).min,
              "onUpdate:modelValue": (G) => S(H.key, "min", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ee[7] || (ee[7] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            I(ge, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": w(H.key).max,
              "onUpdate:modelValue": (G) => S(H.key, "max", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Rh))), 128))
        ])) : k("", !0)
      ])) : k("", !0),
      e.items.length === 0 ? (t(), a("p", Hh, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : b(Au)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(P, null, V(A.value, (H) => (t(), D(Mg, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ee[3] || (ee[3] = (G) => r("select", G)),
          onCart: ee[4] || (ee[4] = (G) => r("cart", G))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, qh)),
      e.pageSize && B.value > 1 ? (t(), a("div", Kh, [
        l("p", Gh, " Page " + f(C.value) + " of " + f(B.value), 1),
        l("div", Wh, [
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value <= 1,
            onClick: ee[5] || (ee[5] = (H) => R(C.value - 1))
          }, " Previous ", 8, Zh),
          l("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value >= B.value,
            onClick: ee[6] || (ee[6] = (H) => R(C.value + 1))
          }, " Next ", 8, Jh)
        ])
      ])) : k("", !0)
    ]));
  }
}), Yh = ["aria-label"], Xh = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Qh = { class: "min-w-0" }, eb = { class: "text-base font-semibold" }, tb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, ab = { class: "flex shrink-0 items-center gap-2" }, nb = { class: "min-h-0 flex-1 overflow-y-auto" }, lb = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Et = /* @__PURE__ */ O({
  __name: "PkSlideover",
  props: {
    open: { type: Boolean },
    title: {},
    description: { default: null },
    side: { default: "right" },
    width: { default: "w-96" }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(null);
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
      const p = h[0], x = h[h.length - 1];
      m.shiftKey && document.activeElement === p ? (m.preventDefault(), x.focus()) : !m.shiftKey && document.activeElement === x && (m.preventDefault(), p.focus());
    }
    return fe(
      () => n.open,
      async (m) => {
        if (m) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Be(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), he(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (m, h) => (t(), D(Re, { to: "body" }, [
      I(je, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: j(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: h[0] || (h[0] = (p) => r("close"))
          })) : k("", !0)
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
          e.open ? (t(), a("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: z(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            l("header", Xh, [
              l("div", Qh, [
                l("h2", eb, f(e.title), 1),
                e.description ? (t(), a("p", tb, f(e.description), 1)) : k("", !0)
              ]),
              l("div", ab, [
                K(m.$slots, "header-actions"),
                l("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: h[1] || (h[1] = (p) => r("close"))
                }, [...h[2] || (h[2] = [
                  l("svg", {
                    viewBox: "0 0 24 24",
                    class: "size-4",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    l("path", { d: "M18 6 6 18M6 6l12 12" })
                  ], -1)
                ])])
              ])
            ]),
            l("div", nb, [
              K(m.$slots, "default")
            ]),
            m.$slots.footer ? (t(), a("footer", lb, [
              K(m.$slots, "footer")
            ])) : k("", !0)
          ], 10, Yh)) : k("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Ae() {
  return { query: "", selected: {}, ranges: {} };
}
function ob(e, o) {
  const n = e.metrics?.[o];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[o];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function sb(e, o) {
  return !o || o.min === null && o.max === null ? !0 : !(e === null || o.min !== null && e < o.min || o.max !== null && e > o.max);
}
function It(e, o) {
  const n = o.query.trim().toLowerCase();
  if (n !== "" && ![
    e.key,
    e.sku ?? "",
    e.label,
    e.caption ?? "",
    ...e.facts ?? []
  ].join(" ").toLowerCase().includes(n))
    return !1;
  for (const [r, s] of Object.entries(o.selected ?? {}))
    if (s && (e.facets?.[r] ?? null) !== s)
      return !1;
  for (const [r, s] of Object.entries(o.ranges ?? {}))
    if (!sb(ob(e, r), s))
      return !1;
  return !0;
}
function rb(e, o) {
  const n = o.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function st(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (o) => o.min !== null || o.max !== null
  );
}
const ib = { class: "flex flex-col gap-6 p-4" }, ub = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, db = { class: "text-sm font-semibold" }, cb = { class: "flex flex-wrap items-center gap-1.5" }, fb = ["aria-pressed", "onClick"], mb = { class: "text-sm font-semibold" }, pb = { class: "flex flex-wrap items-center gap-1.5" }, vb = { key: 0 }, xa = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(""), i = We({}), u = We({}), d = $(
      () => n.facets.filter((B) => (B.kind ?? "chips") === "chips")
    ), m = $(() => n.facets.filter((B) => B.kind === "range"));
    function h(B) {
      return B == null ? "" : String(B);
    }
    function p() {
      s.value = n.applied.query ?? "";
      for (const B of Object.keys(i))
        delete i[B];
      for (const [B, A] of Object.entries(n.applied.selected ?? {}))
        i[B] = A;
      for (const B of Object.keys(u))
        delete u[B];
      for (const [B, A] of Object.entries(n.applied.ranges ?? {}))
        u[B] = { min: h(A.min), max: h(A.max) };
    }
    fe(
      () => n.open,
      (B) => {
        B && p();
      }
    );
    function x(B) {
      const A = B.trim();
      if (A === "")
        return null;
      const R = Number(A);
      return Number.isFinite(R) ? R : null;
    }
    function _() {
      const B = {};
      for (const [A, R] of Object.entries(u))
        B[A] = { min: x(R.min), max: x(R.max) };
      return B;
    }
    function w() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: _()
      };
    }
    const S = $(() => {
      let B = n.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const A of Object.values(i))
        A && (B += 1);
      for (const A of Object.values(_()))
        (A.min !== null || A.max !== null) && (B += 1);
      return B;
    });
    function y(B, A) {
      i[B] = i[B] === A ? null : A;
    }
    function g(B) {
      return u[B] ?? { min: "", max: "" };
    }
    function v(B, A, R) {
      const E = u[B] ?? { min: "", max: "" };
      u[B] = { ...E, [A]: R };
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
        n.hideSearch ? { ...Ae(), query: n.applied.query } : Ae()
      );
    }
    return (B, A) => (t(), D(Et, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: A[2] || (A[2] = (R) => r("close"))
    }, {
      footer: j(() => [
        l("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: C
        }, " Reset all "),
        I(se, {
          variant: "outline",
          size: "sm",
          onClick: A[1] || (A[1] = (R) => r("close"))
        }, {
          default: j(() => [...A[5] || (A[5] = [
            U("Cancel", -1)
          ])]),
          _: 1
        }),
        I(se, {
          size: "sm",
          onClick: c
        }, {
          default: j(() => [
            A[6] || (A[6] = U(" Apply", -1)),
            S.value ? (t(), a("span", vb, " (" + f(S.value) + ")", 1)) : k("", !0)
          ]),
          _: 1
        })
      ]),
      default: j(() => [
        l("div", ib, [
          e.hideSearch ? k("", !0) : (t(), a("label", ub, [
            A[3] || (A[3] = l("span", { class: "text-sm font-semibold" }, "Search", -1)),
            I(ge, {
              modelValue: s.value,
              "onUpdate:modelValue": A[0] || (A[0] = (R) => s.value = R),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(P, null, V(d.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", db, f(R.label ?? R.key), 1),
            l("div", cb, [
              (t(!0), a(P, null, V(R.options ?? [], (E) => (t(), a("button", {
                key: E.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[R.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[R.key] === E.value ? "true" : "false",
                onClick: (ee) => y(R.key, E.value)
              }, f(E.label), 11, fb))), 128))
            ])
          ]))), 128)),
          (t(!0), a(P, null, V(m.value, (R) => (t(), a("section", {
            key: R.key,
            class: "flex flex-col gap-2"
          }, [
            l("h3", mb, f(R.label ?? R.key), 1),
            l("div", pb, [
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${R.label ?? R.key} from`,
                "model-value": g(R.key).min,
                "onUpdate:modelValue": (E) => v(R.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = l("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              I(ge, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${R.label ?? R.key} to`,
                "model-value": g(R.key).max,
                "onUpdate:modelValue": (E) => v(R.key, "max", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), gb = ["aria-disabled"], hb = ["disabled"], bb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, xb = ["d"], yb = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, kb = ["disabled"], $b = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, wb = ["d"], Cb = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = Je(e, "modelValue"), r = o, s = $(() => n.value <= e.min), i = $(() => e.max !== null && n.value >= e.max);
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
      l("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || s.value,
        "aria-label": "Decrease quantity",
        onClick: m[0] || (m[0] = (h) => u(-1))
      }, [
        (t(), a("svg", bb, [
          l("path", {
            d: b(ue)("minus")
          }, null, 8, xb)
        ]))
      ], 8, hb),
      l("span", yb, f(n.value), 1),
      l("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (h) => u(1))
      }, [
        (t(), a("svg", $b, [
          l("path", {
            d: b(ue)("plus")
          }, null, 8, wb)
        ]))
      ], 8, kb)
    ], 8, gb));
  }
}), Sb = { class: "divide-border flex flex-col divide-y" }, Mb = { class: "min-w-0" }, Bb = { class: "truncate text-sm font-medium" }, _b = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Ab = { class: "flex shrink-0 items-center gap-2 text-sm" }, Pb = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, zb = {
  key: 2,
  class: "font-medium tabular-nums"
}, Ob = ["aria-label", "onClick"], jb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Lb = ["d"], Vb = /* @__PURE__ */ O({
  __name: "LineItems",
  props: {
    items: {},
    editable: { type: Boolean, default: !1 }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: o }) {
    const n = o;
    function r(s) {
      const i = s.qty;
      if (typeof i == "number" && Number.isFinite(i))
        return i;
      const u = Number(i);
      return Number.isFinite(u) && u > 0 ? u : 1;
    }
    return (s, i) => (t(), a("div", Sb, [
      (t(!0), a(P, null, V(e.items, (u) => (t(), a("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        l("div", Mb, [
          l("p", Bb, f(u.label), 1),
          u.detail ? (t(), a("p", _b, f(u.detail), 1)) : k("", !0)
        ]),
        l("div", Ab, [
          e.editable ? (t(), D(Cb, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => n("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), a("span", Pb, " ×" + f(u.qty), 1)) : k("", !0),
          u.amount ? (t(), a("span", zb, f(u.amount), 1)) : k("", !0),
          u.status ? (t(), D(be, {
            key: 3,
            status: u.status,
            tone: u.tone
          }, null, 8, ["status", "tone"])) : k("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${u.label}`,
            onClick: (d) => n("remove", u.key)
          }, [
            (t(), a("svg", jb, [
              l("path", {
                d: b(ue)("trash")
              }, null, 8, Lb)
            ]))
          ], 8, Ob)) : k("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Db = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Tb = { class: "border-b px-4 py-3" }, Eb = { class: "text-sm font-medium" }, Ib = { class: "flex-1 px-4 py-3" }, Fb = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Nb = { class: "text-foreground block font-medium" }, Rb = { class: "mt-1 block" }, Ub = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Hb = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, qb = { class: "tabular-nums" }, Kb = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Gb = { class: "text-muted-foreground" }, Wb = {
  key: 0,
  class: "tabular-nums"
}, Zb = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Jb = { class: "text-muted-foreground" }, Yb = { class: "tabular-nums" }, Xb = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Qb = { class: "tabular-nums" }, e1 = {
  key: 4,
  class: "pt-1"
}, t1 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = o;
    return (r, s) => (t(), a("aside", Db, [
      l("header", Tb, [
        l("h2", Eb, f(e.title), 1)
      ]),
      l("div", Ib, [
        e.items.length === 0 ? (t(), a("p", Fb, [
          l("span", Nb, f(e.emptyTitle), 1),
          l("span", Rb, f(e.emptyDescription), 1)
        ])) : (t(), D(Vb, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => n("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", Ub, [
        e.subtotal ? (t(), a("div", Hb, [
          s[2] || (s[2] = l("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          l("span", qb, f(e.subtotal), 1)
        ])) : k("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", Kb, [
          l("span", Gb, f(e.discountLabel), 1),
          e.discount ? (t(), a("span", Wb, f(e.discount), 1)) : k("", !0),
          K(r.$slots, "discount")
        ])) : k("", !0),
        e.tax ? (t(), a("div", Zb, [
          l("span", Jb, f(e.taxLabel), 1),
          l("span", Yb, f(e.tax), 1)
        ])) : k("", !0),
        e.total ? (t(), a("div", Xb, [
          s[3] || (s[3] = l("span", null, "Total", -1)),
          l("span", Qb, f(e.total), 1)
        ])) : k("", !0),
        r.$slots.pay ? (t(), a("div", e1, [
          K(r.$slots, "pay")
        ])) : k("", !0)
      ])) : k("", !0)
    ]));
  }
}), a1 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, n1 = { class: "flex flex-col gap-4" }, l1 = { class: "flex flex-wrap items-start justify-between gap-3" }, o1 = { class: "flex items-center gap-2" }, s1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, r5 = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Pe({
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
  emits: /* @__PURE__ */ Pe(["select", "pay"], ["update:cart"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(Ae()), i = q(!1), u = Je(e, "cart"), d = q(!1), m = $(
      () => n.items.filter((H) => It(H, s.value))
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
      return H ? n.parsePrice(H) : 0;
    }
    function _(H, G, Z) {
      return {
        ...H,
        qty: G,
        amount: n.formatMoney(Z * G)
      };
    }
    function w(H) {
      const G = rb(n.items, H);
      G && S(G.key);
    }
    function S(H) {
      const G = n.items.find((te) => te.key === H);
      if (!G || G.status === "out-of-stock")
        return;
      d.value = !1;
      const Z = x(G);
      if (u.value.find((te) => te.key === H)) {
        u.value = u.value.map(
          (te) => te.key === H ? _(te, Number(te.qty ?? 1) + 1, Z) : te
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: G.key,
          label: G.label,
          detail: G.caption ?? null,
          qty: 1,
          amount: n.formatMoney(Z)
        }
      ];
    }
    function y(H, G) {
      const Z = n.items.find((te) => te.key === H), ae = x(Z);
      u.value = u.value.map(
        (te) => te.key === H ? _(te, G, ae) : te
      );
    }
    function g(H) {
      u.value = u.value.filter((G) => G.key !== H);
    }
    const v = $(
      () => u.value.reduce((H, G) => {
        const Z = n.items.find((ae) => ae.key === G.key);
        return H + x(Z) * Number(G.qty ?? 1);
      }, 0)
    ), c = $(
      () => n.discountRate > 0 ? Math.round(v.value * n.discountRate) : 0
    ), C = $(
      () => Math.round((v.value - c.value) * n.taxRate)
    ), B = $(
      () => u.value.length ? n.formatMoney(v.value) : null
    ), A = $(
      () => u.value.length && c.value > 0 ? `−${n.formatMoney(c.value)}` : null
    ), R = $(
      () => u.value.length && n.taxRate > 0 ? n.formatMoney(C.value) : null
    ), E = $(
      () => u.value.length ? n.formatMoney(
        v.value - c.value + C.value
      ) : null
    );
    function ee() {
      d.value = !0, r("pay", u.value);
    }
    return (H, G) => (t(), a(P, null, [
      l("div", a1, [
        l("section", n1, [
          l("div", l1, [
            I(_e, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            l("div", o1, [
              b(st)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: G[0] || (G[0] = (Z) => s.value = {
                  ...b(Ae)(),
                  query: s.value.query
                })
              }, " Clear ")) : k("", !0),
              e.facets.length > 0 ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: G[1] || (G[1] = (Z) => i.value = !0)
              }, [
                G[5] || (G[5] = l("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  l("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                G[6] || (G[6] = U(" Filters ", -1)),
                b(st)(s.value) ? (t(), a("span", s1, " on ")) : k("", !0)
              ])) : k("", !0)
            ])
          ]),
          I(Tt, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: h,
            onSelect: G[2] || (G[2] = (Z) => r("select", Z)),
            onCart: S,
            onScan: w
          }, null, 8, ["search-placeholder", "items"])
        ]),
        I(t1, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: B.value,
          "discount-label": e.discountLabel,
          discount: A.value,
          "tax-label": e.taxLabel,
          tax: R.value,
          total: E.value,
          onQty: y,
          onRemove: g
        }, {
          pay: j(() => [
            K(H.$slots, "pay", {
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
                  U(f(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      I(xa, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: G[3] || (G[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: G[4] || (G[4] = (Z) => s.value = { ...b(Ae)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), r1 = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, i1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, u1 = ["src", "alt"], d1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, c1 = ["src"], f1 = { class: "flex items-start justify-between gap-3" }, m1 = { class: "text-lg font-semibold tabular-nums" }, p1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, v1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, g1 = { class: "grid grid-cols-2 gap-3" }, h1 = { class: "flex flex-col gap-2" }, b1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, i5 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(p) {
      let x = 0;
      for (const _ of p)
        x = x * 31 + _.charCodeAt(0) >>> 0;
      return x;
    }
    function i(p, x) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((w, S) => ({
        label: w,
        value: Math.max(0, Math.round(p + Math.sin(S + x) * p * 0.18))
      }));
    }
    const u = $(() => n.item?.kind === "unit"), d = $(() => {
      const p = n.item;
      if (!p)
        return [];
      const x = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(x) || 12, s(p.key) % 7);
    }), m = $(() => {
      const p = n.item;
      if (!p)
        return [];
      const x = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(x) || 20, s(p.key) % 5 + 1);
    }), h = $(
      () => !!n.item && !u.value && n.item?.status !== "out-of-stock"
    );
    return (p, x) => (t(), D(Et, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: x[1] || (x[1] = (_) => r("close"))
    }, za({
      default: j(() => [
        e.item ? (t(), a("div", r1, [
          l("div", i1, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, u1)) : k("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", d1, [
            (t(!0), a(P, null, V(e.item.images, (_, w) => (t(), a("img", {
              key: w,
              src: _,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, c1))), 128))
          ])) : k("", !0),
          l("div", f1, [
            l("div", null, [
              l("p", m1, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", p1, f(e.item.stock) + " in stock ", 1)) : k("", !0)
            ]),
            e.item.status ? (t(), D(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : k("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", v1, f(e.item.facts.join(" · ")), 1)) : k("", !0),
          l("div", g1, [
            I(ot, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? m.value : d.value
            }, null, 8, ["label", "value", "series"]),
            I(ot, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          l("div", h1, [
            l("p", b1, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            I(it, {
              data: u.value ? m.value : d.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : k("", !0)
      ]),
      _: 2
    }, [
      h.value && e.item ? {
        name: "footer",
        fn: j(() => [
          l("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: x[0] || (x[0] = (_) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), x1 = { class: "flex flex-col gap-10" }, y1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, k1 = { class: "flex flex-col gap-3" }, $1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, w1 = ["src", "alt"], C1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, S1 = ["aria-label", "aria-pressed", "onClick"], M1 = ["src"], B1 = { class: "flex flex-col gap-5" }, _1 = { class: "flex flex-wrap items-start justify-between gap-3" }, A1 = { class: "min-w-0" }, P1 = { class: "text-2xl font-semibold tracking-tight" }, z1 = { class: "text-muted-foreground mt-1 text-sm" }, O1 = { class: "text-2xl font-semibold tabular-nums" }, j1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, L1 = { class: "grid grid-cols-2 gap-3 text-sm" }, V1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, D1 = { class: "mt-1 font-medium" }, T1 = { class: "rounded-lg border p-3" }, E1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, I1 = { class: "mt-1 font-medium" }, F1 = { class: "flex flex-col gap-4" }, N1 = { class: "grid gap-4 sm:grid-cols-2" }, R1 = { class: "bg-card rounded-lg border p-4" }, U1 = { class: "mb-3 text-sm font-medium" }, H1 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: o }) {
    const n = e, r = o;
    function s(w) {
      let S = 0;
      for (const y of w)
        S = S * 31 + y.charCodeAt(0) >>> 0;
      return S;
    }
    function i(w, S) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((g, v) => ({
        label: g,
        value: Math.max(0, Math.round(w + Math.sin(v + S) * w * 0.18))
      }));
    }
    const u = $(() => n.item.kind === "unit"), d = $(() => {
      const w = [n.item.image, ...n.item.images ?? []].filter(
        (S) => typeof S == "string" && S !== ""
      );
      return [...new Set(w)];
    }), m = q(0), h = $(() => {
      const w = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(w) || 12, s(n.item.key) % 7);
    }), p = $(() => {
      const w = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(w) || 20, s(n.item.key) % 5 + 1);
    }), x = $(() => u.value ? p.value : h.value), _ = $(() => !u.value && n.item.status !== "out-of-stock");
    return (w, S) => (t(), a("div", x1, [
      l("div", y1, [
        l("div", k1, [
          l("div", $1, [
            d.value[m.value] ? (t(), a("img", {
              key: 0,
              src: d.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, w1)) : k("", !0)
          ]),
          d.value.length > 1 ? (t(), a("div", C1, [
            (t(!0), a(P, null, V(d.value, (y, g) => (t(), a("button", {
              key: y,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", g === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${g + 1}`,
              "aria-pressed": g === m.value ? "true" : "false",
              onClick: (v) => m.value = g
            }, [
              l("img", {
                src: y,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, M1)
            ], 10, S1))), 128))
          ])) : k("", !0)
        ]),
        l("div", B1, [
          l("div", _1, [
            l("div", A1, [
              l("h1", P1, f(e.item.label), 1),
              l("p", z1, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D(be, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : k("", !0)
          ]),
          l("p", O1, f(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", j1, f(e.item.facts.join(" · ")), 1)) : k("", !0),
          l("dl", L1, [
            e.item.sku ? (t(), a("div", V1, [
              S[1] || (S[1] = l("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              l("dd", D1, f(e.item.sku), 1)
            ])) : k("", !0),
            l("div", T1, [
              l("dt", E1, f(u.value ? "Occupancy" : "Stock"), 1),
              l("dd", I1, f(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          _.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: S[0] || (S[0] = (y) => r("cart", e.item.key))
          }, " Add to cart ")) : k("", !0)
        ])
      ]),
      l("section", F1, [
        S[2] || (S[2] = l("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        l("div", N1, [
          I(ot, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: x.value
          }, null, 8, ["label", "value", "series"]),
          I(ot, {
            label: "Price",
            value: e.item.price ?? "-",
            series: h.value
          }, null, 8, ["value", "series"])
        ]),
        l("div", R1, [
          l("p", U1, f(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(mm, {
            data: x.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), q1 = ["href"], u5 = /* @__PURE__ */ O({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["cart"],
  setup(e, { emit: o }) {
    const n = o;
    return (r, s) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ve)])
    }, [
      l("a", {
        href: e.catalogHref,
        class: "text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1.5 text-sm"
      }, [
        s[1] || (s[1] = l("svg", {
          class: "size-4",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          l("path", { d: "m15 18-6-6 6-6" })
        ], -1)),
        U(" " + f(e.backLabel), 1)
      ], 8, q1),
      I(H1, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), K1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, G1 = ["aria-selected", "onClick"], W1 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, Z1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, J1 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, Y1 = ["aria-pressed"], X1 = ["aria-pressed"], d5 = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Pe({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Pe(["select", "cart"], ["update:layout"]),
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(n.tabs[0]?.key ?? ""), i = Je(e, "layout"), u = q({}), d = q(!1);
    fe(
      () => n.tabs.map((y) => y.key).join(","),
      (y) => {
        y.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function m(y) {
      return u.value[y] ?? Ae();
    }
    const h = $(
      () => n.tabs.find((y) => y.key === s.value) ?? n.tabs[0] ?? null
    ), p = $(
      () => h.value ? m(h.value.key) : Ae()
    ), x = $(() => {
      const y = h.value;
      return y ? y.items.filter((g) => It(g, m(y.key))) : [];
    });
    function _(y) {
      const g = h.value?.key;
      g && (u.value = {
        ...u.value,
        [g]: { ...m(g), query: y }
      });
    }
    function w() {
      const y = h.value?.key;
      y && (u.value = { ...u.value, [y]: Ae() });
    }
    function S(y) {
      const g = h.value?.key;
      g && (u.value = { ...u.value, [g]: y }, d.value = !1);
    }
    return (y, g) => (t(), a(P, null, [
      l("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : b(Ve)])
      }, [
        I(_e, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", K1, [
          (t(!0), a(P, null, V(e.tabs, (v) => (t(), a("button", {
            key: v.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (c) => s.value = v.key
          }, f(v.label), 11, G1))), 128))
        ])) : k("", !0),
        l("div", W1, [
          I(ge, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: h.value?.searchPlaceholder ?? "Search…",
            "aria-label": h.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": g[0] || (g[0] = (v) => _(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b(st)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: w
          }, " Clear ")) : k("", !0),
          (h.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: g[1] || (g[1] = (v) => d.value = !0)
          }, [
            g[8] || (g[8] = l("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              l("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            g[9] || (g[9] = U(" Filters ", -1)),
            b(st)(p.value) ? (t(), a("span", Z1, " on ")) : k("", !0)
          ])) : k("", !0),
          l("div", J1, [
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: g[2] || (g[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, Y1),
            l("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: g[3] || (g[3] = (v) => i.value = "list")
            }, " List ", 10, X1)
          ])
        ]),
        I(Tt, {
          layout: i.value,
          "onUpdate:layout": g[4] || (g[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: x.value,
          onSelect: g[5] || (g[5] = (v) => r("select", v)),
          onCart: g[6] || (g[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      I(xa, {
        open: d.value,
        title: h.value?.filterTitle ?? "Filters",
        "search-placeholder": h.value?.searchPlaceholder ?? "Search…",
        facets: h.value?.facets ?? [],
        applied: p.value,
        onClose: g[7] || (g[7] = (v) => d.value = !1),
        onApply: S,
        onReset: w
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), Q1 = { class: "flex flex-col gap-4" }, ex = { class: "flex flex-col gap-4" }, c5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(Ae()), i = $(
      () => n.cards.filter((u) => It(u, s.value))
    );
    return (u, d) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ve)])
    }, [
      I(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", Q1, [
        I(_e, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(Tt, {
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
      l("section", ex, [
        I(_e, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(pl, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": j(({ value: m }) => [
            I(be, {
              status: String(m)
            }, {
              default: j(() => [
                U(f(m), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), tx = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, ax = { class: "text-sm font-medium" }, nx = ["width", "height", "aria-label"], lx = { class: "flex items-center gap-2" }, ox = /* @__PURE__ */ O({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(null), i = q(!1);
    let u = null;
    function d() {
      return s.value?.getContext("2d") ?? null;
    }
    function m(y) {
      const g = s.value;
      if (!g)
        return null;
      const v = g.getBoundingClientRect(), c = g.width / v.width, C = g.height / v.height;
      return {
        x: (y.clientX - v.left) * c,
        y: (y.clientY - v.top) * C
      };
    }
    function h(y) {
      n.disabled || (i.value = !0, u = m(y), s.value?.setPointerCapture(y.pointerId));
    }
    function p(y) {
      if (!i.value || n.disabled)
        return;
      const g = d(), v = m(y);
      !g || !v || !u || (g.strokeStyle = "#111827", g.lineWidth = 2.4, g.lineCap = "round", g.lineJoin = "round", g.beginPath(), g.moveTo(u.x, u.y), g.lineTo(v.x, v.y), g.stroke(), u = v);
    }
    function x() {
      i.value = !1, u = null;
    }
    function _() {
      const y = s.value, g = d();
      !y || !g || (g.clearRect(0, 0, y.width, y.height), r("clear"));
    }
    function w() {
      const y = s.value;
      y && r("save", y.toDataURL("image/png"));
    }
    function S() {
      const y = s.value, g = d();
      !y || !g || (g.fillStyle = "#ffffff", g.fillRect(0, 0, y.width, y.height));
    }
    return pe(S), he(() => {
      i.value = !1;
    }), (y, g) => (t(), a("div", tx, [
      l("p", ax, f(e.label), 1),
      l("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: me(h, ["prevent"]),
        onPointermove: me(p, ["prevent"]),
        onPointerup: me(x, ["prevent"]),
        onPointerleave: me(x, ["prevent"])
      }, null, 42, nx),
      l("div", lx, [
        I(se, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: _
        }, {
          default: j(() => [...g[0] || (g[0] = [
            U(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: j(() => [...g[1] || (g[1] = [
            U("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), sx = { class: "grid gap-8 lg:grid-cols-2" }, rx = { class: "flex flex-col gap-3" }, ix = { class: "text-muted-foreground text-xs" }, ux = {
  key: 0,
  class: "flex flex-col gap-3"
}, dx = { class: "flex flex-wrap gap-3" }, cx = ["onClick"], fx = ["src", "alt"], mx = {
  key: 1,
  class: "flex flex-col gap-3"
}, px = { class: "flex flex-wrap gap-3" }, vx = ["onClick"], gx = ["src", "alt"], hx = {
  key: 2,
  class: "flex flex-col gap-4"
}, bx = { class: "flex flex-wrap items-center gap-2" }, xx = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, yx = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, kx = { class: "flex flex-col gap-2" }, $x = ["src"], wx = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Cx = ["src"], f5 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, n = q([]), r = q([]), s = q(null), i = q(null), u = q(null), d = q(o.documents[0]?.key ?? "");
    function m(y) {
      try {
        const g = localStorage.getItem(y), v = g ? JSON.parse(g) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    pe(() => {
      !o.storageKey || typeof localStorage > "u" || (n.value = m(`${o.storageKey}.signatures`), r.value = m(`${o.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), fe(
      n,
      (y) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.signatures`, JSON.stringify(y));
      },
      { deep: !0 }
    ), fe(
      r,
      (y) => {
        !o.storageKey || typeof localStorage > "u" || localStorage.setItem(`${o.storageKey}.stamps`, JSON.stringify(y));
      },
      { deep: !0 }
    );
    function h(y) {
      const g = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: y
      };
      n.value = [g, ...n.value].slice(0, 8), s.value = g.id;
    }
    async function p(y, g) {
      await Du(y), g(40);
      const v = await new Promise((c, C) => {
        const B = new FileReader();
        B.onload = () => c(String(B.result)), B.onerror = () => C(new Error("Could not read the file")), B.readAsDataURL(y);
      });
      return g(100), { value: v, name: y.name, size: y.size, url: v };
    }
    function x() {
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
    const _ = $(
      () => n.value.find((y) => y.id === s.value)?.dataUrl ?? null
    ), w = $(
      () => r.value.find((y) => y.id === i.value)?.dataUrl ?? null
    ), S = $(() => {
      const y = o.documents.find((v) => v.key === d.value)?.document ?? o.documents[0]?.document ?? {}, g = {
        ...y?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...y,
        branding: g
      };
    });
    return (y, g) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : b(Ve)])
    }, [
      I(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      l("section", sx, [
        I(ox, {
          label: "Draw a signature",
          onSave: h
        }),
        l("div", rx, [
          g[2] || (g[2] = l("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          l("p", ix, f(b(ma)), 1),
          I(ra, {
            modelValue: u.value,
            "onUpdate:modelValue": g[0] || (g[0] = (v) => u.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          I(se, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: x
          }, {
            default: j(() => [...g[1] || (g[1] = [
              U(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", ux, [
        I(_e, {
          variant: "small",
          title: "Saved signatures"
        }),
        l("div", dx, [
          (t(!0), a(P, null, V(n.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, fx)
          ], 10, cx))), 128))
        ])
      ])) : k("", !0),
      r.value.length ? (t(), a("section", mx, [
        I(_e, {
          variant: "small",
          title: "Saved stamps"
        }),
        l("div", px, [
          (t(!0), a(P, null, V(r.value, (v) => (t(), a("button", {
            key: v.id,
            type: "button",
            class: z(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = v.id
          }, [
            l("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, gx)
          ], 10, vx))), 128))
        ])
      ])) : k("", !0),
      e.documents.length ? (t(), a("section", hx, [
        l("div", bx, [
          (t(!0), a(P, null, V(e.documents, (v) => (t(), D(se, {
            key: v.key,
            size: "sm",
            variant: d.value === v.key ? "default" : "outline",
            onClick: (c) => d.value = v.key
          }, {
            default: j(() => [
              U(f(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        l("div", xx, [
          I(Mf, {
            document: S.value
          }, null, 8, ["document"]),
          l("div", yx, [
            l("div", kx, [
              g[3] || (g[3] = l("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              _.value ? (t(), a("img", {
                key: 0,
                src: _.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, $x)) : (t(), a("p", wx, "Draw and save a signature"))
            ]),
            w.value ? (t(), a("img", {
              key: 0,
              src: w.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Cx)) : k("", !0)
          ])
        ])
      ])) : k("", !0)
    ], 2));
  }
}), m5 = "panel.dashboard.hiddenWidgets", Sx = /* @__PURE__ */ Symbol("dashboardHide"), Mx = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, p5 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const o = e, n = at(Sx, null), r = q(
      o.catalog.filter((u) => o.defaults.includes(u.id))
    ), s = q(!1);
    pe(() => {
      if (n?.register("shortcuts", "Shortcuts"), !o.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const u = localStorage.getItem(o.storageKey);
        if (u) {
          const d = JSON.parse(u);
          Array.isArray(d) && (r.value = d.filter(
            (m) => typeof m?.id == "string" && typeof m.label == "string" && typeof m.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), fe(
      r,
      (u) => {
        if (!(!s.value || !o.storageKey))
          try {
            localStorage.setItem(o.storageKey, JSON.stringify(u));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = $(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? k("", !0) : (t(), a("div", Mx, [
      I(gv, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (m) => r.value = m),
        onHide: d[1] || (d[1] = (m) => b(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Bx = { class: "flex flex-col gap-3" }, _x = ["data-slot"], Ax = ["aria-pressed", "aria-label", "title"], Px = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zx = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Ox = { class: "flex h-8 items-center" }, jx = ["aria-label", "title", "onClick"], Lx = ["aria-label", "title", "onClick"], Vx = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Dx = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, v5 = /* @__PURE__ */ O({
  __name: "StatStrip",
  props: {
    segments: {},
    columns: { default: 4 },
    maskable: { type: Boolean, default: !0 },
    hidden: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(n.maskable ? !n.hidden : !0), i = q(/* @__PURE__ */ new Set());
    function u(c) {
      return n.maskable && (c.sensitive ?? !0);
    }
    function d(c) {
      return u(c) && !s.value && !i.value.has(c.key);
    }
    const m = $(() => n.segments.some(d)), h = $(() => n.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, x = $(() => p[n.columns] ?? p[4]), _ = $(() => {
      const c = n.columns ?? 4, C = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(0, C);
    }), w = $(() => {
      const c = n.columns ?? 4, C = Math.floor(n.segments.length / c) * c;
      return n.segments.slice(C);
    }), S = $(() => {
      const c = [];
      return _.value.length > 0 && c.push({ key: "packed", joined: !0, segments: _.value }), w.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: w.value }), c;
    });
    function y() {
      const c = m.value === !1;
      s.value = !c, i.value = /* @__PURE__ */ new Set(), r("toggle", c);
    }
    function g(c) {
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
    function v(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, C) => (t(), a("div", Bx, [
      (t(!0), a(P, null, V(S.value, (B) => (t(), a("div", {
        key: B.key,
        class: z(["relative shrink-0", B.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": B.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && h.value && B.key === S.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: y
        }, [
          (t(), a("svg", Px, [
            m.value ? (t(), a(P, { key: 0 }, [
              C[0] || (C[0] = l("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              C[1] || (C[1] = l("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              C[2] || (C[2] = l("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              C[3] || (C[3] = l("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(P, { key: 1 }, [
              C[4] || (C[4] = l("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              C[5] || (C[5] = l("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Ax)) : k("", !0),
        l("div", {
          class: z(["grid", [B.joined ? "gap-px" : "gap-3", x.value]])
        }, [
          (t(!0), a(P, null, V(B.segments, (A) => (t(), a("div", {
            key: A.key,
            class: z(["bg-card flex flex-col gap-2 p-4", B.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            l("p", zx, f(A.label), 1),
            l("div", Ox, [
              e.loading ? (t(), D(Ne, {
                key: 0,
                variant: "number"
              })) : d(A) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${A.label} hidden. Show it.`,
                title: `Show ${A.label}`,
                onClick: (R) => g(A)
              }, [
                (t(), a(P, null, V(5, (R) => l("span", {
                  key: R,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, jx)) : u(A) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${A.label}, ${v(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (R) => g(A)
              }, f(v(A.value)), 9, Lx)) : (t(), a("span", Vx, f(v(A.value)), 1)),
              A.trend && !e.loading && !d(A) ? (t(), D(ba, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : k("", !0)
            ]),
            A.sparkline?.length && !e.loading && !d(A) ? (t(), D(it, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : k("", !0),
            A.caption || A.comparison && A.trend ? (t(), a("p", Dx, f(A.caption ?? A.comparison), 1)) : k("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, _x))), 128))
    ]));
  }
}), Tx = ["aria-label"], Ex = ["aria-valuenow", "aria-label"], Ix = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Fx = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Nx = ["title"], Rx = { class: "font-medium" }, Ux = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, Hx = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, qx = { class: "flex items-center justify-between gap-2" }, Kx = { class: "text-sm font-semibold" }, Gx = { class: "flex items-center gap-3" }, Wx = ["href"], Zx = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Jx = { class: "flex min-w-0 flex-col gap-0.5" }, Yx = { class: "text-sm font-medium" }, Xx = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Qx = {
  key: 1,
  class: "flex flex-col gap-2"
}, ey = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ty = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, ay = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, g5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(() => n.items.find((S) => !S.done) ?? null), i = $(() => n.items.filter((S) => S.key !== s.value?.key)), u = $(() => n.items.length), d = $(() => n.items.filter((S) => S.done).length), m = $(() => {
      if (!s.value)
        return u.value;
      const S = n.items.findIndex((y) => y.key === s.value?.key);
      return S >= 0 ? S + 1 : 1;
    }), h = $(
      () => u.value > 0 ? Math.round(d.value / u.value * 100) : 0
    ), p = $(() => {
      const S = n.linkComponent;
      return typeof S == "string" ? S : Jt(S);
    }), x = Ke({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), _ = Ke({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), w = Ke({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (S, y) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
      key: 0,
      class: "overflow-hidden rounded-md border bg-card",
      "aria-label": e.heading
    }, [
      l("div", {
        class: "h-0.5 w-full bg-muted",
        role: "progressbar",
        "aria-valuenow": h.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${h.value} percent complete`
      }, [
        l("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: ne({ width: `${h.value}%` })
        }, null, 4)
      ], 8, Ex),
      l("div", Ix, [
        l("span", Fx, " Step " + f(m.value) + " of " + f(u.value), 1),
        l("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          l("span", Rx, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", Ux, f(": " + s.value.detail), 1)) : k("", !0)
        ], 8, Nx),
        s.value?.href ? (t(), D(xe(p.value), {
          key: 0,
          href: s.value.href,
          class: z(b(_))
        }, {
          default: j(() => [
            U(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : k("", !0),
        e.skipLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: y[0] || (y[0] = (g) => r("skip"))
        }, f(e.skipLabel), 1)) : k("", !0)
      ])
    ], 8, Tx)) : e.items.length ? (t(), a("section", Hx, [
      l("div", qx, [
        l("h2", Kx, f(e.heading), 1),
        l("div", Gx, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline",
            onClick: y[1] || (y[1] = (g) => r("skip"))
          }, f(e.skipLabel), 1)) : k("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
          }, " Full report ", 8, Wx)) : k("", !0)
        ])
      ]),
      s.value ? (t(), a("div", Zx, [
        y[2] || (y[2] = l("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        l("div", Jx, [
          l("p", Yx, f(s.value.title), 1),
          s.value.detail ? (t(), a("p", Xx, f(s.value.detail), 1)) : k("", !0),
          s.value.href ? (t(), D(xe(p.value), {
            key: 1,
            href: s.value.href,
            class: z(b(x))
          }, {
            default: j(() => [
              U(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : k("", !0)
        ])
      ])) : k("", !0),
      i.value.length ? (t(), a("ul", Qx, [
        (t(!0), a(P, null, V(i.value, (g) => (t(), a("li", {
          key: g.key,
          class: "flex items-start gap-3"
        }, [
          l("span", {
            class: z([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              g.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            g.done ? (t(), a("svg", ey, [...y[3] || (y[3] = [
              l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : k("", !0)
          ], 2),
          l("div", ty, [
            l("p", {
              class: z(["text-sm", g.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(g.title), 3),
            !g.done && g.detail ? (t(), a("p", ay, f(g.detail), 1)) : k("", !0)
          ]),
          !g.done && g.href ? (t(), D(xe(p.value), {
            key: 0,
            href: g.href,
            class: z(b(w))
          }, {
            default: j(() => [
              U(f(g.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : k("", !0)
        ]))), 128))
      ])) : k("", !0)
    ])) : k("", !0);
  }
}), ny = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, ly = { class: "hidden items-center gap-2 md:flex" }, oy = { class: "md:hidden" }, sy = { class: "border-b px-4 py-3" }, ry = { class: "text-muted-foreground text-xs" }, iy = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, uy = { class: "font-medium tabular-nums" }, dy = { class: "ml-auto flex items-center gap-3" }, h5 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: o }) {
    const n = o, r = q(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, u) => (t(), a("div", ny, [
      l("div", ly, [
        K(i.$slots, "actions")
      ]),
      l("div", oy, [
        l("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: u[0] || (u[0] = (d) => r.value = !0)
        }, " Actions "),
        I(Vt, {
          open: r.value,
          "onUpdate:open": u[1] || (u[1] = (d) => r.value = d)
        }, {
          default: j(() => [
            I(Dt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", sy, [
                  u[4] || (u[4] = l("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  l("p", ry, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                l("div", iy, [
                  K(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      l("span", uy, [
        e.allMatching ? (t(), a(P, { key: 0 }, [
          U(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(P, { key: 1 }, [
          U(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      l("div", dy, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: u[2] || (u[2] = (d) => n("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : k("", !0),
        l("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: u[3] || (u[3] = (d) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), cy = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, fy = { class: "text-muted-foreground text-xs tabular-nums" }, my = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, py = ["value"], vy = ["value"], gy = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, hy = ["disabled"], by = ["disabled"], xy = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, yy = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, ky = ["disabled"], b5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = (m) => new Intl.NumberFormat().format(m), i = $(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), u = $(() => (n.page - 1) * n.perPage + n.rowsOnPage), d = $(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (m, h) => (t(), a("div", cy, [
      l("p", fy, [
        U(" Showing " + f(s(i.value)) + "-" + f(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(P, { key: 0 }, [
          U("of " + f(s(e.total)), 1)
        ], 64)) : k("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", my, [
        h[4] || (h[4] = l("span", null, "Per page", -1)),
        l("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: h[0] || (h[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(P, null, V(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, f(p), 9, vy))), 128))
        ], 40, py)
      ])) : k("", !0),
      l("nav", gy, [
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: h[1] || (h[1] = (p) => r("first"))
        }, [...h[5] || (h[5] = [
          l("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "m17 18-6-6 6-6M11 18l-6-6 6-6" })
          ], -1)
        ])], 8, hy),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: h[2] || (h[2] = (p) => r("previous"))
        }, [...h[6] || (h[6] = [
          l("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "m15 18-6-6 6-6" })
          ], -1)
        ])], 8, by),
        l("span", xy, f(e.page), 1),
        d.value !== null ? (t(), a("span", yy, " of " + f(s(d.value)), 1)) : k("", !0),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: h[3] || (h[3] = (p) => r("next"))
        }, [...h[7] || (h[7] = [
          l("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            l("path", { d: "m9 18 6-6-6-6" })
          ], -1)
        ])], 8, ky)
      ])
    ]));
  }
}), $y = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, wy = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, Cy = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, Sy = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, x5 = /* @__PURE__ */ O({
  __name: "TableShell",
  setup(e) {
    return (o, n) => (t(), a("div", $y, [
      o.$slots.tabs ? (t(), a("div", wy, [
        K(o.$slots, "tabs")
      ])) : k("", !0),
      o.$slots.toolbar ? (t(), a("div", Cy, [
        K(o.$slots, "toolbar")
      ])) : k("", !0),
      K(o.$slots, "default"),
      o.$slots.pagination ? (t(), a("div", Sy, [
        K(o.$slots, "pagination")
      ])) : k("", !0)
    ]));
  }
}), My = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, By = ["aria-current"], _y = ["title"], Ay = ["aria-current", "onClick"], Py = ["title"], zy = /* @__PURE__ */ O({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: o }) {
    const n = o;
    function r(s) {
      return s >= 1e6 ? (s / 1e6).toFixed(s % 1e6 === 0 ? 0 : 1) + "M" : s >= 1e4 ? Math.round(s / 1e3) + "k" : new Intl.NumberFormat().format(s);
    }
    return (s, i) => (t(), a("div", My, [
      l("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => n("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, _y)) : (t(), D(Ne, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, By),
      (t(!0), a(P, null, V(e.tabs, (u) => (t(), a("button", {
        key: u,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === u ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === u ? "page" : void 0,
        onClick: (d) => n("select", u)
      }, [
        U(f(u) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, f(r(e.counts[u] ?? 0)), 11, Py)) : (t(), D(Ne, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Ay))), 128))
    ]));
  }
}), y5 = /* @__PURE__ */ Pt(zy, [["__scopeId", "data-v-3967c945"]]), Oy = { class: "flex flex-col gap-2" }, jy = { class: "flex items-center gap-2 md:hidden" }, Ly = { class: "relative min-w-0 flex-1" }, Vy = ["placeholder", "title", "aria-label"], Dy = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Ty = { class: "flex max-h-[85vh] flex-col" }, Ey = { class: "flex-1 overflow-y-auto px-4 py-3" }, Iy = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Fy = { class: "text-xs font-medium" }, Ny = ["value", "onChange"], Ry = ["value"], Uy = { class: "mb-4" }, Hy = { class: "flex flex-col gap-1" }, qy = ["disabled", "onClick"], Ky = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Gy = {
  key: 1,
  class: "mb-4"
}, Wy = { class: "flex flex-col gap-1" }, Zy = ["onClick"], Jy = { class: "border-t p-4" }, Yy = ["disabled"], Xy = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Qy = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, e0 = ["placeholder", "title", "aria-label"], t0 = ["aria-label"], a0 = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, n0 = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, l0 = { class: "text-xs font-medium" }, o0 = ["value", "onChange"], s0 = ["value"], r0 = { class: "grid grid-cols-2 gap-2" }, i0 = ["value", "onChange"], u0 = ["value", "onChange"], d0 = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, c0 = ["value", "onChange"], f0 = ["value", "onChange"], m0 = {
  key: 4,
  class: "flex items-center gap-2"
}, p0 = ["aria-checked", "onClick"], v0 = { class: "text-xs" }, g0 = ["onClick"], h0 = ["value", "onChange"], b0 = ["value"], x0 = ["disabled", "onClick"], y0 = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, k0 = ["disabled", "onClick"], $0 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, w0 = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, C0 = ["aria-pressed", "aria-label", "title"], S0 = ["aria-label", "title"], M0 = { class: "flex flex-col gap-0.5 p-1" }, B0 = ["onClick"], _0 = ["onClick"], A0 = {
  key: 4,
  class: "text-muted-foreground shrink-0 text-xs"
}, P0 = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, z0 = ["dusk"], O0 = ["aria-label", "onClick"], k5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(!1), i = q(n.search);
    fe(
      () => n.search,
      (W) => {
        W !== i.value && (i.value = W);
      }
    );
    let u;
    fe(i, (W) => {
      clearTimeout(u), u = setTimeout(() => {
        W !== n.search && r("update:search", W);
      }, 250);
    });
    const d = q({ ...n.filters });
    fe(
      () => n.filters,
      (W) => {
        d.value = { ...W };
      },
      { deep: !0 }
    );
    const m = $(
      () => n.filterSchema.filter(
        (W) => n.filters[W.key] !== null && n.filters[W.key] !== void 0
      ).length
    ), h = $(() => JSON.stringify(d.value) !== JSON.stringify(n.filters)), p = $(() => n.search !== "" || m.value > 0), x = $(() => n.indicators.length ? n.indicators : n.filterSchema.filter((W) => n.filters[W.key] !== null && n.filters[W.key] !== void 0).map((W) => ({
      key: W.key,
      label: `${W.label}: ${String(n.filters[W.key])}`,
      removable: !0
    })));
    function _(W) {
      r("group", W);
    }
    function w(W) {
      r("clear-filter", W);
    }
    function S(W) {
      return W.type === "multiselect";
    }
    function y(W) {
      const M = d.value[W.key];
      return Array.isArray(M) ? M : M == null ? [] : [M];
    }
    function g(W) {
      return y(W).filter(
        (M) => typeof M == "string" || typeof M == "number"
      );
    }
    function v(W) {
      return H(W).flatMap(
        (M) => typeof M.value == "string" || typeof M.value == "number" ? [{ value: M.value, label: M.label }] : []
      );
    }
    function c(W, M) {
      d.value = { ...d.value, [W.key]: M === "" ? null : M };
    }
    function C(W, M) {
      const N = d.value[W.key];
      if (typeof N != "string" || !N.includes(".."))
        return "";
      const [L, Y] = N.split("..");
      return M === "from" ? L ?? "" : Y ?? "";
    }
    function B(W, M, N) {
      const L = M === "from" ? N : C(W, "from"), Y = M === "to" ? N : C(W, "to");
      d.value = {
        ...d.value,
        [W.key]: L && Y ? `${L}..${Y}` : null
      };
    }
    function A(W, M, N) {
      const L = M === "from" ? N : C(W, "from"), Y = M === "to" ? N : C(W, "to");
      d.value = {
        ...d.value,
        [W.key]: L || Y ? `${L}..${Y}` : null
      };
    }
    function R(W) {
      r("apply-filters", { ...d.value }), W();
    }
    function E(W, M) {
      d.value[W] = M, r("apply-filters", { ...d.value });
    }
    function ee() {
      d.value = Object.fromEntries(n.filterSchema.map((W) => [W.key, null]));
    }
    function H(W) {
      return W.type === "boolean" ? [
        { value: !0, label: W.trueLabel ?? "Yes" },
        { value: !1, label: W.falseLabel ?? "No" }
      ] : W.type === "daterange" ? Object.entries(W.presets ?? {}).map(([M, N]) => ({
        value: M,
        label: N
      })) : (W.options ?? []).map((M) => ({ value: M, label: M }));
    }
    const G = q(new Set(n.hidden));
    fe(
      () => n.hidden,
      (W) => {
        G.value = new Set(W);
      },
      { deep: !0 }
    );
    function Z(W) {
      const M = new Set(G.value);
      M.has(W) ? M.delete(W) : M.add(W), G.value = M, r("apply-columns", [...M]);
    }
    function ae() {
      G.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function te() {
      r("apply-filters", { ...d.value }), s.value = !1;
    }
    function J() {
      i.value = "", r("clear");
    }
    return (W, M) => (t(), a("div", Oy, [
      l("div", jy, [
        l("div", Ly, [
          M[9] || (M[9] = l("svg", {
            class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round"
          }, [
            l("circle", {
              cx: "11",
              cy: "11",
              r: "7"
            }),
            l("path", { d: "m20 20-3.5-3.5" })
          ], -1)),
          ce(l("input", {
            "onUpdate:modelValue": M[0] || (M[0] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, Vy), [
            [ye, i.value]
          ])
        ]),
        l("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: M[1] || (M[1] = (N) => s.value = !0)
        }, [
          M[10] || (M[10] = l("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            l("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          M[11] || (M[11] = U(" Tools ", -1)),
          m.value ? (t(), a("span", Dy, f(m.value), 1)) : k("", !0)
        ]),
        I(Vt, {
          open: s.value,
          "onUpdate:open": M[4] || (M[4] = (N) => s.value = N)
        }, {
          default: j(() => [
            I(Dt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: j(() => [
                l("div", Ty, [
                  M[16] || (M[16] = l("div", { class: "border-b px-4 py-3" }, [
                    l("p", { class: "text-sm font-semibold" }, "Table tools"),
                    l("p", { class: "text-muted-foreground text-xs" }, "Filters, columns, and grouping")
                  ], -1)),
                  l("div", Ey, [
                    e.filterSchema.length ? (t(), a("div", Iy, [
                      l("div", { class: "flex items-center justify-between" }, [
                        M[12] || (M[12] = l("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        l("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: ee
                        }, " Reset ")
                      ]),
                      (t(!0), a(P, null, V(e.filterSchema, (N) => (t(), a("div", {
                        key: `mobile-${N.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        l("label", Fy, f(N.label), 1),
                        N.type !== "multiselect" && N.type !== "querybuilder" && N.type !== "daterange" && N.type !== "numberrange" && N.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: d.value[N.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (L) => c(N, L.target.value)
                        }, [
                          M[13] || (M[13] = l("option", { value: "" }, "All", -1)),
                          (t(!0), a(P, null, V(H(N), (L) => (t(), a("option", {
                            key: String(L.value),
                            value: L.value
                          }, f(L.label), 9, Ry))), 128))
                        ], 40, Ny)) : k("", !0)
                      ]))), 128))
                    ])) : k("", !0),
                    l("div", Uy, [
                      M[14] || (M[14] = l("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      l("div", Hy, [
                        (t(!0), a(P, null, V(e.columns, (N) => (t(), a("button", {
                          key: `mobile-col-${N.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: N.locked,
                          onClick: (L) => Z(N.key)
                        }, [
                          l("span", null, f(N.label), 1),
                          G.value.has(N.key) ? k("", !0) : (t(), a("span", Ky, "On"))
                        ], 8, qy))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", Gy, [
                      M[15] || (M[15] = l("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      l("div", Wy, [
                        l("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: M[2] || (M[2] = (N) => {
                            _(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), a(P, null, V(e.groups, (N) => (t(), a("button", {
                          key: N.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (L) => {
                            _(N.key), s.value = !1;
                          }
                        }, f(N.label), 9, Zy))), 128))
                      ])
                    ])) : k("", !0)
                  ]),
                  l("div", Jy, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !h.value,
                      onClick: te
                    }, " Apply filters ", 8, Yy)) : k("", !0),
                    p.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: M[3] || (M[3] = (N) => {
                        J(), s.value = !1;
                      })
                    }, " Clear search and filters ")) : k("", !0)
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]),
      l("div", Xy, [
        l("div", Qy, [
          M[18] || (M[18] = l("svg", {
            class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round"
          }, [
            l("circle", {
              cx: "11",
              cy: "11",
              r: "7"
            }),
            l("path", { d: "m20 20-3.5-3.5" })
          ], -1)),
          ce(l("input", {
            "onUpdate:modelValue": M[5] || (M[5] = (N) => i.value = N),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          }, null, 8, e0), [
            [ye, i.value]
          ]),
          i.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: M[6] || (M[6] = (N) => i.value = "")
          }, [...M[17] || (M[17] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3.5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])])) : k("", !0)
        ]),
        e.filterSchema.length ? (t(), D(Ie, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: j(() => [
            l("button", {
              type: "button",
              dusk: "filters-trigger",
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", m.value ? "border-primary text-primary" : ""]),
              "aria-label": m.value ? `Filters (${m.value} active)` : "Filters",
              title: "Filters"
            }, [
              M[19] || (M[19] = l("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                l("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              m.value ? (t(), a("span", a0, f(m.value), 1)) : k("", !0)
            ], 10, t0)
          ]),
          panel: j(({ close: N }) => [
            l("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              M[20] || (M[20] = l("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              l("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: ee
              }, " Reset ")
            ]),
            M[23] || (M[23] = l("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            l("div", n0, [
              (t(!0), a(P, null, V(e.filterSchema, (L) => (t(), a("div", {
                key: L.key,
                class: "flex flex-col gap-1.5"
              }, [
                l("label", l0, f(L.label), 1),
                S(L) ? (t(), D(zt, {
                  key: 0,
                  "model-value": g(L),
                  options: v(L),
                  placeholder: `Any ${L.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Y) => d.value[L.key] = Y.length ? Y : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : L.type === "querybuilder" ? (t(), D(Xr, {
                  key: 1,
                  "model-value": d.value[L.key] ?? null,
                  fields: L.fields ?? {},
                  operators: L.operators ?? {},
                  "max-depth": L.maxDepth ?? 5,
                  onApply: (Y) => E(L.key, Y)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : L.type === "daterange" ? (t(), a(P, { key: 2 }, [
                  l("select", {
                    value: typeof d.value[L.key] == "string" && !String(d.value[L.key]).includes("..") ? d.value[L.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Y) => c(L, Y.target.value)
                  }, [
                    M[21] || (M[21] = l("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(P, null, V(H(L), (Y) => (t(), a("option", {
                      key: String(Y.value),
                      value: Y.value
                    }, f(Y.label), 9, s0))), 128))
                  ], 40, o0),
                  l("div", r0, [
                    l("input", {
                      type: "date",
                      value: C(L, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => B(
                        L,
                        "from",
                        Y.target.value
                      )
                    }, null, 40, i0),
                    l("input", {
                      type: "date",
                      value: C(L, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => B(
                        L,
                        "to",
                        Y.target.value
                      )
                    }, null, 40, u0)
                  ])
                ], 64)) : L.type === "numberrange" ? (t(), a("div", d0, [
                  l("input", {
                    type: "number",
                    value: C(L, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => A(
                      L,
                      "from",
                      Y.target.value
                    )
                  }, null, 40, c0),
                  l("input", {
                    type: "number",
                    value: C(L, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => A(
                      L,
                      "to",
                      Y.target.value
                    )
                  }, null, 40, f0)
                ])) : L.type === "boolean" ? (t(), a("div", m0, [
                  l("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": d.value[L.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      d.value[L.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Y) => c(L, d.value[L.key] === !0 ? null : !0)
                  }, [
                    l("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[L.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, p0),
                  l("span", v0, f(L.trueLabel ?? "Yes"), 1),
                  l("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      d.value[L.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Y) => c(L, d.value[L.key] === !1 ? null : !1)
                  }, f(L.falseLabel ?? "No") + " only ", 11, g0)
                ])) : (t(), a("select", {
                  key: 5,
                  value: d.value[L.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Y) => c(L, Y.target.value)
                }, [
                  M[22] || (M[22] = l("option", { value: "" }, "All", -1)),
                  (t(!0), a(P, null, V(H(L), (Y) => (t(), a("option", {
                    key: String(Y.value),
                    value: Y.value
                  }, f(Y.label), 9, b0))), 128))
                ], 40, h0))
              ]))), 128))
            ]),
            l("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !h.value,
              onClick: (L) => R(N)
            }, " Apply filters ", 8, x0)
          ]),
          _: 1
        })) : k("", !0),
        I(Ie, { "dismiss-on-panel-click": !1 }, {
          trigger: j(() => [...M[24] || (M[24] = [
            l("button", {
              type: "button",
              class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 transition-colors",
              "aria-label": "Toggle columns"
            }, [
              l("svg", {
                viewBox: "0 0 24 24",
                class: "size-4 shrink-0",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                l("rect", {
                  x: "3",
                  y: "4",
                  width: "18",
                  height: "16",
                  rx: "2"
                }),
                l("path", { d: "M9 4v16M15 4v16" })
              ]),
              l("span", { class: "text-sm" }, "Columns View")
            ], -1)
          ])]),
          panel: j(() => [
            M[27] || (M[27] = l("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            l("div", y0, [
              (t(!0), a(P, null, V(e.columns, (N) => (t(), a("button", {
                key: N.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: N.locked,
                onClick: (L) => Z(N.key)
              }, [
                G.value.has(N.key) ? (t(), a("span", w0)) : (t(), a("svg", $0, [...M[25] || (M[25] = [
                  l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                U(" " + f(N.label), 1)
              ], 10, k0))), 128))
            ]),
            l("div", { class: "border-t" }, [
              l("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: ae
              }, [...M[26] || (M[26] = [
                l("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4 shrink-0",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  l("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
                  l("path", { d: "M3 3v5h5" })
                ], -1),
                U(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.reorderable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: M[7] || (M[7] = (N) => r("toggle-reorder"))
        }, [...M[28] || (M[28] = [
          l("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            l("path", { d: "m3 16 4 4 4-4M7 20V4m14 4-4-4-4 4m4-4v16" })
          ], -1)
        ])], 10, C0)) : k("", !0),
        e.groups.length ? (t(), D(Ie, {
          key: 2,
          align: "end"
        }, {
          trigger: j(() => [
            l("button", {
              type: "button",
              dusk: "group-picker",
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...M[29] || (M[29] = [
              l("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                l("path", { d: "M4 6h16M4 12h10M4 18h7" })
              ], -1)
            ])], 10, S0)
          ]),
          panel: j(({ close: N }) => [
            l("div", M0, [
              l("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (L) => {
                  _(null), N();
                }
              }, " No grouping ", 10, B0),
              (t(!0), a(P, null, V(e.groups, (L) => (t(), a("button", {
                key: L.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === L.key ? "text-primary font-medium" : ""]),
                onClick: (Y) => {
                  _(L.key), N();
                }
              }, f(L.label), 11, _0))), 128))
            ])
          ]),
          _: 1
        })) : k("", !0),
        p.value ? (t(), a("button", {
          key: 3,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: J
        }, " Clear ")) : k("", !0),
        e.loading ? (t(), a("span", A0, "Loading…")) : k("", !0)
      ]),
      x.value.length ? (t(), a("div", P0, [
        (t(!0), a(P, null, V(x.value, (N) => (t(), a("span", {
          key: N.key + N.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${N.key}`
        }, [
          U(f(N.label) + " ", 1),
          N.removable !== !1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${N.label}`,
            onClick: (L) => w(N.key)
          }, [...M[30] || (M[30] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, O0)) : k("", !0)
        ], 8, z0))), 128)),
        x.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: M[8] || (M[8] = (N) => r("clear-filters"))
        }, " Clear all ")) : k("", !0)
      ])) : k("", !0)
    ]));
  }
}), j0 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, L0 = { class: "grid gap-2" }, V0 = {
  key: 0,
  class: "text-destructive text-sm"
}, D0 = { class: "flex gap-2" }, $5 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: o }) {
    const n = o, s = q((() => {
      const _ = navigator.userAgent, w = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: y }) => y.test(_))?.name, S = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: y }) => y.test(_))?.name;
      return [w, S].filter(Boolean).join(" on ") || "";
    })()), i = q(!1), u = Oa(null), d = $(() => u.value?.isLoading.value ?? !1), m = $(() => u.value?.error.value ?? null), h = $(() => u.value?.isSupported.value ?? !1);
    pe(async () => {
      try {
        const { usePasskeyRegister: _ } = await import("@laravel/passkeys/vue");
        u.value = _({
          onSuccess: () => {
            s.value = "", i.value = !1, n("success");
          }
        });
      } catch {
        u.value = null;
      }
    });
    const p = async (_) => {
      _.preventDefault(), !(!s.value.trim() || u.value === null) && await u.value.register(s.value);
    }, x = () => {
      i.value = !1, s.value = "";
    };
    return (_, w) => h.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      l("div", L0, [
        w[3] || (w[3] = l("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ce(l("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": w[1] || (w[1] = (S) => s.value = S),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [ye, s.value]
        ]),
        w[4] || (w[4] = l("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      m.value ? (t(), a("p", V0, f(m.value), 1)) : k("", !0),
      l("div", D0, [
        I(se, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: j(() => [
            U(f(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        I(se, {
          type: "button",
          variant: "ghost",
          onClick: x
        }, {
          default: j(() => [...w[5] || (w[5] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(se, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = (S) => i.value = !0)
    }, {
      default: j(() => [...w[2] || (w[2] = [
        U(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", j0, " Passkeys are not supported in this browser. "));
  }
}), T0 = { class: "flex flex-col gap-4" }, E0 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, w5 = /* @__PURE__ */ O({
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
  setup(e, { emit: o }) {
    const n = e;
    ht("panelPicker", {
      get base() {
        return n.pickerBase ?? "";
      },
      get returnUrl() {
        return n.returnUrl ?? "";
      }
    }), ht("panelCreateOption", {
      run(m, h) {
        return n.createOption ? n.createOption(m, h) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = o, s = $(() => n.nodes.length > 0), i = $(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), u = $(() => n.errors._conflict);
    function d(m) {
      if (n.upload)
        return (h, p) => n.upload(m, h, p);
    }
    return (m, h) => (t(), a("div", T0, [
      u.value ? (t(), a("p", E0, f(u.value), 1)) : k("", !0),
      s.value ? (t(!0), a(P, { key: 1 }, V(e.nodes, (p, x) => (t(), D(ia, {
        key: x,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: h[0] || (h[0] = (_, w) => r("change", _, w)),
        onAffixAction: h[1] || (h[1] = (_, w) => r("affix-action", _, w))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(P, null, V(e.fields, (p) => (t(), D(Fe, {
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
          class: z(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (x) => r("change", p.key, x),
          onAffixAction: (x) => r("affix-action", p.key, x)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), I0 = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, F0 = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, N0 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, R0 = ["disabled"], U0 = ["disabled"], H0 = ["disabled"], C5 = /* @__PURE__ */ O({
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
    return (o, n) => (t(), D(Re, { to: "body" }, [
      I(je, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: j(() => [
          e.show ? (t(), a("div", I0, [
            l("div", F0, [
              n[3] || (n[3] = l("span", {
                class: "text-amber-500",
                "aria-hidden": "true"
              }, [
                l("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  l("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9"
                  }),
                  l("path", { d: "M12 8v4M12 16h.01" })
                ])
              ], -1)),
              l("span", N0, f(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[0] || (n[0] = (r) => o.$emit("discard"))
              }, f(e.discardLabel), 9, R0)) : k("", !0),
              l("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: n[1] || (n[1] = (r) => o.$emit("cancel"))
              }, f(e.cancelLabel), 9, U0),
              l("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: n[2] || (n[2] = (r) => o.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, H0)
            ])
          ])) : k("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function S5(e, o = {}) {
  const { warnOnUnload: n = !0 } = o, r = q(gt(e.value)), s = $(() => gt(e.value) !== r.value);
  function i() {
    r.value = gt(e.value);
  }
  function u() {
    e.value = JSON.parse(r.value);
  }
  function d(m) {
    s.value && (m.preventDefault(), m.returnValue = "");
  }
  return pe(() => {
    n && window.addEventListener("beforeunload", d);
  }), he(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function gt(e) {
  return JSON.stringify(e, (o, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const q0 = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, K0 = { class: "text-muted-foreground text-xs font-medium" }, G0 = { class: "text-sm" }, W0 = { key: 1 }, Z0 = {
  key: 5,
  class: "max-w-full"
}, J0 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, Y0 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, X0 = { key: 6 }, Q0 = {
  key: 0,
  class: "divide-y rounded-md border"
}, ek = { class: "text-muted-foreground truncate font-medium" }, tk = { class: "col-span-2 break-words" }, ak = {
  key: 1,
  class: "text-muted-foreground"
}, nk = {
  key: 7,
  class: "flex flex-col gap-3"
}, lk = {
  key: 0,
  class: "text-muted-foreground"
}, ok = ["href"], sk = { class: "text-sm font-semibold" }, rk = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, ik = ["onClick"], M5 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = q(!n.node.collapsed), i = q(0), u = $(() => n.depth === 0), d = $(() => {
      const _ = n.node.columns ?? 1;
      return _ >= 3 ? "sm:grid-cols-3" : _ === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), m = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, h = $(() => n.node.key ? n.record[n.node.key] : null), p = $(() => {
      const _ = h.value;
      if (_ == null || _ === "")
        return "-";
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(_)).toLocaleDateString(void 0, m[n.node.type]);
      let w = String(_);
      return n.node.transform === "upper" && (w = w.toUpperCase()), n.node.transform === "lower" && (w = w.toLowerCase()), [n.node.prefix, w, n.node.suffix].filter(Boolean).join(" ");
    }), x = $(() => {
      const _ = typeof h.value == "boolean" ? h.value ? "1" : "" : String(h.value), w = n.node.colors?.[_] ?? n.node.defaultColor ?? "neutral";
      return Ot[w] ?? "outline";
    });
    return (_, w) => {
      const S = Ct("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", q0, [
        l("dt", K0, f(e.node.label), 1),
        l("dd", G0, [
          e.node.type === "badge" && b(ri)(h.value) ? (t(), D(Ge, {
            key: 0,
            variant: x.value,
            class: "capitalize"
          }, {
            default: j(() => [
              U(f(h.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", W0, "-")) : e.node.type === "icon" ? (t(), D(Br, {
            key: 2,
            value: h.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), D(Pr, {
            key: 3,
            src: h.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), D(Vr, {
            key: 4,
            value: typeof h.value == "string" ? h.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", Z0, [
            e.node.language ? (t(), a("p", J0, f(e.node.language), 1)) : k("", !0),
            l("pre", Y0, [
              l("code", null, f(h.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", X0, [
            h.value && typeof h.value == "object" && !Array.isArray(h.value) && Object.keys(h.value).length ? (t(), a("dl", Q0, [
              (t(!0), a(P, null, V(h.value, (y, g) => (t(), a("div", {
                key: g,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                l("dt", ek, f(g), 1),
                l("dd", tk, f(y), 1)
              ]))), 128))
            ])) : (t(), a("span", ak, "-"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", nk, [
            (t(!0), a(P, null, V(Array.isArray(h.value) ? h.value : [], (y, g) => (t(), a("div", {
              key: g,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(P, null, V(e.node.entries ?? [], (v, c) => (t(), D(S, {
                key: c,
                node: v,
                record: y,
                depth: e.depth + 1,
                onAction: w[0] || (w[0] = (C) => r("action", C))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(h.value) || h.value.length === 0 ? (t(), a("span", lk, "-")) : k("", !0)
          ])) : e.node.url ? (t(), a("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, f(p.value), 9, ok)) : (t(), a("span", {
            key: 9,
            class: z([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, f(p.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
            onClick: w[1] || (w[1] = (y) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : k("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: z(u.value ? "bg-card rounded-lg border" : "")
      }, [
        l("header", {
          class: z(["flex items-start justify-between gap-3", [
            u.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: w[2] || (w[2] = (y) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", null, [
            l("h3", sk, f(e.node.label), 1),
            e.node.description ? (t(), a("p", rk, f(e.node.description), 1)) : k("", !0)
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (y, g) => (t(), D(S, {
            key: g,
            node: y,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[3] || (w[3] = (v) => r("action", v))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : k("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (y, g) => (t(), D(S, {
          key: g,
          node: y,
          record: e.record,
          depth: e.depth + 1,
          onAction: w[4] || (w[4] = (v) => r("action", v))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: z(u.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        l("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (y, g) => (t(), a("button", {
            key: g,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (v) => i.value = g
          }, f(y.label), 11, ik))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (y, g) => ce((t(), a("div", {
          key: g,
          class: z(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(y.children ?? [], (v, c) => (t(), D(S, {
            key: c,
            node: v,
            record: e.record,
            depth: e.depth + 1,
            onAction: w[5] || (w[5] = (C) => r("action", C))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Le, i.value === g]
        ])), 128))
      ], 2)) : k("", !0);
    };
  }
}), uk = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, dk = { class: "text-muted-foreground text-sm" }, ck = { class: "flex items-start gap-3" }, fk = { class: "min-w-0 flex-1" }, mk = { class: "flex flex-wrap items-center gap-2" }, pk = { class: "truncate text-sm font-medium" }, vk = { class: "text-muted-foreground mt-0.5 text-xs" }, gk = { class: "text-muted-foreground text-xs" }, hk = { class: "mt-auto flex items-center gap-2" }, bk = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: o }) {
    const n = e, r = o, s = $(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), a("div", uk, [
      l("p", dk, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      l("div", {
        class: z(b(_u))
      }, [
        (t(!0), a(P, null, V(e.gateways, (d) => (t(), a("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          l("div", ck, [
            l("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ne({ background: d.color }),
              "aria-hidden": "true"
            }, f(d.mark), 5),
            l("div", fk, [
              l("div", mk, [
                l("h3", pk, f(d.label), 1),
                I(be, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: j(() => [
                    U(f(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), D(be, {
                  key: 0,
                  status: "offered"
                }, {
                  default: j(() => [...u[0] || (u[0] = [
                    U(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), D(be, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: j(() => [...u[1] || (u[1] = [
                    U(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : k("", !0),
                d.isDefault ? (t(), D(be, {
                  key: 2,
                  status: "default"
                }, {
                  default: j(() => [...u[2] || (u[2] = [
                    U(" Default ", -1)
                  ])]),
                  _: 1
                })) : k("", !0),
                d.connected && d.mode ? (t(), D(be, {
                  key: 3,
                  status: d.mode
                }, {
                  default: j(() => [
                    U(f(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : k("", !0)
              ]),
              l("p", vk, f(d.caption), 1)
            ])
          ]),
          l("p", gk, f(d.methods.join(" · ")), 1),
          l("div", hk, [
            I(se, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", d.key)
            }, {
              default: j(() => [...u[3] || (u[3] = [
                U(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            I(se, {
              size: "sm",
              variant: "ghost",
              onClick: (m) => r("toggle", d.key)
            }, {
              default: j(() => [
                U(f(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ]));
  }
}), xk = { class: "flex flex-col gap-6" }, yk = { class: "relative" }, kk = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, $k = ["d"], wk = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Ck = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, Sk = { class: "flex flex-wrap items-center gap-2" }, Mk = { class: "text-muted-foreground text-sm" }, Bk = { class: "flex flex-col gap-1 text-sm" }, _k = ["value"], Ak = {
  key: 0,
  class: "flex flex-col gap-2"
}, Pk = { class: "flex flex-wrap items-center gap-2" }, zk = {
  key: 1,
  class: "flex items-center gap-2"
}, B5 = /* @__PURE__ */ O({
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
    const o = Je(e, "gateways"), n = q(null), r = q(""), s = $(
      () => o.value.find((w) => w.key === n.value) ?? null
    ), i = $(() => {
      const w = r.value.trim().toLowerCase();
      return w === "" ? o.value : o.value.filter((S) => [S.key, S.label, S.caption, ...S.methods].join(" ").toLowerCase().includes(w));
    });
    function u(w) {
      return w.connected && w.enabled !== !1;
    }
    function d(w, S) {
      o.value = o.value.map(
        (y) => y.key === w ? { ...y, ...S } : y
      );
    }
    function m(w) {
      n.value = w;
    }
    function h(w) {
      const S = o.value.find((g) => g.key === w);
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
      const y = o.value.find((g) => g.key === w);
      y?.connected && d(w, { enabled: S, isDefault: S ? y.isDefault : !1 });
    }
    function x(w) {
      const S = o.value.find((y) => y.key === w);
      !S || !u(S) || (o.value = o.value.map((y) => ({
        ...y,
        isDefault: y.key === w
      })));
    }
    function _(w) {
      const S = n.value;
      !S || !o.value.find((g) => g.key === S)?.connected || d(S, { mode: w });
    }
    return (w, S) => (t(), a(P, null, [
      l("div", xk, [
        I(_e, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        l("div", yk, [
          (t(), a("svg", kk, [
            l("path", {
              d: b(ue)("search")
            }, null, 8, $k)
          ])),
          I(ge, {
            modelValue: r.value,
            "onUpdate:modelValue": S[0] || (S[0] = (y) => r.value = y),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(bk, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: h
        }, null, 8, ["gateways"])) : (t(), a("p", wk, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      I(Et, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: S[8] || (S[8] = (y) => n.value = null)
      }, {
        footer: j(() => [
          I(se, {
            variant: "outline",
            size: "sm",
            onClick: S[6] || (S[6] = (y) => n.value = null)
          }, {
            default: j(() => [...S[21] || (S[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(se, {
            key: 0,
            size: "sm",
            onClick: S[7] || (S[7] = (y) => h(s.value.key))
          }, {
            default: j(() => [
              U(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : k("", !0)
        ]),
        default: j(() => [
          s.value ? (t(), a("div", Ck, [
            l("div", Sk, [
              I(be, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: j(() => [
                  U(f(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), D(be, {
                key: 0,
                status: "offered"
              }, {
                default: j(() => [...S[9] || (S[9] = [
                  U(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), D(be, {
                key: 1,
                status: "disabled"
              }, {
                default: j(() => [...S[10] || (S[10] = [
                  U(" Disabled ", -1)
                ])]),
                _: 1
              })) : k("", !0),
              s.value.isDefault ? (t(), D(be, {
                key: 2,
                status: "default"
              }, {
                default: j(() => [...S[11] || (S[11] = [
                  U(" Default ", -1)
                ])]),
                _: 1
              })) : k("", !0),
              s.value.connected && s.value.mode ? (t(), D(be, {
                key: 3,
                status: s.value.mode
              }, {
                default: j(() => [
                  U(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : k("", !0)
            ]),
            l("p", Mk, f(s.value.caption), 1),
            l("label", Bk, [
              S[12] || (S[12] = U(" Display name ", -1)),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, _k)
            ]),
            S[20] || (S[20] = l("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              l("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", Ak, [
              S[16] || (S[16] = l("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              S[17] || (S[17] = l("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              l("div", Pk, [
                I(se, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: S[1] || (S[1] = (y) => p(s.value.key, !0))
                }, {
                  default: j(() => [...S[13] || (S[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: S[2] || (S[2] = (y) => p(s.value.key, !1))
                }, {
                  default: j(() => [...S[14] || (S[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(se, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: S[3] || (S[3] = (y) => x(s.value.key))
                }, {
                  default: j(() => [...S[15] || (S[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : k("", !0),
            s.value.connected ? (t(), a("div", zk, [
              I(se, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: S[4] || (S[4] = (y) => _("test"))
              }, {
                default: j(() => [...S[18] || (S[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              I(se, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: S[5] || (S[5] = (y) => _("live"))
              }, {
                default: j(() => [...S[19] || (S[19] = [
                  U(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : k("", !0)
          ])) : k("", !0)
        ]),
        _: 1
      }, 8, ["open", "title"])
    ], 64));
  }
});
function Zt(e) {
  if (typeof localStorage > "u")
    return /* @__PURE__ */ new Set();
  try {
    const o = localStorage.getItem(e);
    if (o)
      return new Set(JSON.parse(o));
  } catch {
  }
  return /* @__PURE__ */ new Set();
}
function _5(e) {
  const o = q(Zt(e));
  pe(() => {
    o.value = Zt(e);
  }), fe(
    o,
    (d) => {
      try {
        localStorage.setItem(e, JSON.stringify([...d]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function n(d) {
    const m = new Set(o.value);
    m.has(d) ? m.delete(d) : m.add(d), o.value = m;
  }
  function r(d) {
    const m = new Set(o.value);
    m.add(d), o.value = m;
  }
  function s(d) {
    const m = new Set(o.value);
    m.delete(d), o.value = m;
  }
  function i(d) {
    o.value = new Set(d);
  }
  function u() {
    o.value = /* @__PURE__ */ new Set();
  }
  return { hidden: o, toggle: n, hide: r, show: s, setHidden: i, reset: u };
}
function A5(e) {
  const { config: o, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = q(
    o.driver === "none" ? "off" : "connecting"
  ), m = q(/* @__PURE__ */ new Set());
  let h = /* @__PURE__ */ new Map(), p, x, _, w = (/* @__PURE__ */ new Date()).toISOString(), S = null;
  function y(G, Z) {
    h.set(G, { ...h.get(G) ?? {}, ...Z }), !p && (p = setTimeout(() => {
      p = void 0, g();
    }, o.batchMs));
  }
  function g() {
    if (h.size === 0)
      return;
    const G = h;
    h = /* @__PURE__ */ new Map();
    const Z = /* @__PURE__ */ new Set();
    for (const [ae, te] of G) {
      const J = n.value.find((W) => W[r] === ae);
      if (!J) {
        u?.(ae, te);
        continue;
      }
      Object.assign(J, te), Z.add(ae);
    }
    Z.size !== 0 && (m.value = /* @__PURE__ */ new Set([...m.value, ...Z]), setTimeout(() => {
      const ae = new Set(m.value);
      Z.forEach((te) => ae.delete(te)), m.value = ae;
    }, 1500));
  }
  async function v() {
    if (!(!s || n.value.length === 0)) {
      _?.abort(), _ = new AbortController();
      try {
        const G = n.value.map((te) => te[r]), { records: Z, at: ae } = await s(G, w);
        w = ae, d.value = "live";
        for (const te of Z)
          y(te[r], te);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function c() {
    C(), d.value = "live", x = setInterval(v, o.intervalMs);
  }
  function C() {
    clearInterval(x), x = void 0, _?.abort();
  }
  function B() {
    return window.Echo ?? null;
  }
  function A() {
    const G = B();
    if (!G || !o.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    S = o.channel;
    const Z = G.private(o.channel);
    for (const ae of o.events)
      Z.listen(ae, (te) => {
        te?.[r] !== void 0 && y(te[r], te);
      });
    d.value = "live", G.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), G.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function R() {
    S && (B()?.leave(S), S = null);
  }
  function E() {
    o.driver === "poll" && c(), o.driver === "broadcast" && A();
  }
  function ee() {
    C(), R(), clearTimeout(p), p = void 0, h = /* @__PURE__ */ new Map();
  }
  function H() {
    o.pauseWhenHidden && (document.hidden ? (ee(), d.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return pe(() => {
    o.driver !== "none" && (E(), o.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), he(() => {
    document.removeEventListener("visibilitychange", H), ee();
  }), { status: d, recentlyChanged: m, applyPatch: y, flush: g, pollOnce: v };
}
const Ok = /^[a-z0-9-]+$/, jk = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function P5(e) {
  ja(() => {
    if (typeof document > "u")
      return;
    const o = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !Ok.test(n) || typeof r != "string" || !jk.test(r) || (o[`--${n}`] = r);
    ji(o);
  });
}
const Lk = { class: "flex items-center gap-0.5" }, Vk = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), a("span", Lk, [
      String(e.value) === "mono" ? (t(), a(P, { key: 0 }, [
        n[0] || (n[0] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        n[1] || (n[1] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        n[2] || (n[2] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(P, { key: 1 }, [
        n[3] || (n[3] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        n[4] || (n[4] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        n[5] || (n[5] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), Dk = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, n) => (t(), D(ha, {
      code: "AB-1234",
      style: ne(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Tk = { class: "flex flex-col gap-2" }, Ek = { class: "bg-card rounded-lg border p-4" }, Ik = { class: "text-muted-foreground truncate text-xs" }, Fk = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Nk = /* @__PURE__ */ O({
  __name: "PkSeoPreview",
  props: {
    field: {},
    values: { default: () => ({}) }
  },
  setup(e) {
    const o = e, n = {
      titleMax: 60,
      titleMin: 30,
      descriptionMax: 160,
      descriptionMin: 70
    }, r = $(() => ({ ...n, ...o.field.limits ?? {} })), s = $(
      () => String(o.values[o.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = $(
      () => String(o.values[o.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), u = $(
      () => String(o.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), d = $(() => {
      const S = String(o.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return S === "" ? u.value : `${u.value} › ${S.split("/").join(" › ")}`;
    });
    function m(S, y) {
      return S.length <= y ? S : `${S.slice(0, y - 1).trimEnd()}…`;
    }
    const h = $(() => m(s.value, r.value.titleMax)), p = $(() => m(i.value, r.value.descriptionMax));
    function x(S, y, g) {
      return S === 0 ? { tone: "text-muted-foreground", note: "empty" } : S > g ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : S < y ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const _ = $(
      () => x(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = $(
      () => x(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (S, y) => (t(), a("div", Tk, [
      l("div", Ek, [
        l("p", Ik, f(d.value), 1),
        l("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", h.value === "" ? "text-muted-foreground italic" : ""])
        }, f(h.value || "Untitled page"), 3),
        l("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      l("div", Fk, [
        l("span", {
          class: z(_.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(_.value.note), 3),
        l("span", {
          class: z(w.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(w.value.note), 3)
      ]),
      y[0] || (y[0] = l("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function Rk() {
  Se("radio", oc), Se("checkboxlist", ic), Se("tags", vc), Se("colour", Bc), Se("slider", jc), Se("visual-select", Kc), Se("markdown", Ed), Se("code", qd), Se("seo-preview", Nk), pt("swatch", Wc), pt("voucher-code-box", Dk), pt("document-colour-mode", Vk);
}
function ya() {
  const e = q(null), o = q(!1);
  let n = null;
  return pe(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      o.value = !0;
      return;
    }
    n = new IntersectionObserver(
      (s) => {
        for (const i of s)
          i.isIntersecting && (o.value = !0, n?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), n.observe(e.value);
  }), he(() => n?.disconnect()), { el: e, shown: o };
}
const Uk = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: o, shown: n } = ya();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: z(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ne({ transitionDelay: `${e.delay}ms` })
    }, [
      K(r.$slots, "default")
    ], 6));
  }
}), Hk = ["id"], Ce = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (o, n) => (t(), a("section", {
      id: e.id,
      class: z(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      l("div", {
        class: z(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        I(Uk, null, {
          default: j(() => [
            K(o.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Hk));
  }
}), qk = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Kk = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, Gk = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, De = /* @__PURE__ */ O({
  __name: "PkSectionHeading",
  props: {
    eyebrow: {},
    title: {},
    body: {},
    centred: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, n) => e.title || e.body || e.eyebrow ? (t(), a("div", {
      key: 0,
      class: z(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", qk, f(e.eyebrow), 1)) : k("", !0),
      e.title ? (t(), a("h2", Kk, f(e.title), 1)) : k("", !0),
      e.body ? (t(), a("p", Gk, f(e.body), 1)) : k("", !0)
    ], 2)) : k("", !0);
  }
});
function Wk() {
  const e = q(null);
  let o = null;
  function n(s) {
    if (!o)
      return;
    const i = o.getBoundingClientRect();
    o.style.setProperty("--pk-px", String((s.clientX - i.left) / i.width)), o.style.setProperty("--pk-py", String((s.clientY - i.top) / i.height));
  }
  function r() {
    o?.style.setProperty("--pk-px", "0.5"), o?.style.setProperty("--pk-py", "0.5");
  }
  return pe(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (o = e.value, r(), o.addEventListener("pointermove", n, { passive: !0 }), o.addEventListener("pointerleave", r, { passive: !0 }));
  }), he(() => {
    o?.removeEventListener("pointermove", n), o?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const Zk = { class: "pk-tilt-inner relative h-full" }, Jk = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: o } = Wk();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: o,
      class: "pk-tilt group/tilt"
    }, [
      l("div", Zk, [
        r[0] || (r[0] = l("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        K(n.$slots, "default")
      ])
    ], 512));
  }
}), Yk = { class: "flex flex-col gap-10" }, Xk = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, Qk = { class: "text-base font-semibold" }, e2 = { class: "text-sm text-pretty text-muted-foreground" }, t2 = /* @__PURE__ */ O({
  __name: "PkBento",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function o(n) {
      return {
        wide: "sm:col-span-2",
        tall: "sm:row-span-2",
        large: "sm:col-span-2 sm:row-span-2"
      }[n ?? ""] ?? "";
    }
    return (n, r) => (t(), D(Ce, null, {
      default: j(() => [
        l("div", Yk, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", Xk, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), D(Jk, {
              key: i,
              class: z(o(s.span))
            }, {
              default: j(() => [
                l("div", {
                  class: z([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  l("h3", Qk, f(s.title), 1),
                  l("p", e2, f(s.body), 1)
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
}), a2 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, n2 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, l2 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, o2 = ["href"], s2 = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (o, n) => (t(), D(Ce, null, {
      default: j(() => [
        l("div", a2, [
          l("h2", n2, f(e.title), 1),
          e.body ? (t(), a("p", l2, f(e.body), 1)) : k("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, o2)) : k("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), r2 = { class: "flex flex-col gap-8" }, i2 = { class: "divide-y rounded-lg border" }, u2 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, d2 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, c2 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), D(Ce, { narrow: "" }, {
      default: j(() => [
        l("div", r2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", i2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              l("summary", u2, [
                U(f(r.question) + " ", 1),
                n[0] || (n[0] = l("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              l("p", d2, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), f2 = { class: "flex flex-col gap-10" }, m2 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, p2 = { class: "text-sm font-semibold" }, v2 = { class: "text-sm text-pretty text-muted-foreground" }, g2 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), D(Ce, null, {
      default: j(() => [
        l("div", f2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", m2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("h3", p2, f(r.title), 1),
              l("p", v2, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), h2 = { class: "flex flex-col items-center gap-6 text-center" }, b2 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, x2 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, y2 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, k2 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, $2 = ["href"], w2 = ["href"], C2 = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, S2 = /* @__PURE__ */ O({
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
    return (o, n) => (t(), D(Ce, null, {
      default: j(() => [
        l("div", h2, [
          e.eyebrow ? (t(), a("p", b2, f(e.eyebrow), 1)) : k("", !0),
          l("h1", x2, f(e.title), 1),
          e.body ? (t(), a("p", y2, f(e.body), 1)) : k("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", k2, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, $2)) : k("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, w2)) : k("", !0)
          ])) : k("", !0),
          e.note ? (t(), a("p", C2, f(e.note), 1)) : k("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), M2 = { class: "flex flex-col items-center gap-6" }, B2 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, _2 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, A2 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), D(Ce, { muted: "" }, {
      default: j(() => [
        l("div", M2, [
          e.title ? (t(), a("p", B2, f(e.title), 1)) : k("", !0),
          l("ul", _2, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), P2 = { class: "flex flex-col gap-10" }, z2 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, O2 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, j2 = ["aria-pressed"], L2 = ["aria-pressed"], V2 = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, D2 = { class: "grid gap-4 md:grid-cols-3" }, T2 = { class: "flex flex-col gap-1" }, E2 = { class: "text-sm font-semibold" }, I2 = { class: "flex items-baseline gap-1" }, F2 = { class: "text-3xl font-semibold tracking-tight" }, N2 = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, R2 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, U2 = { class: "flex flex-col gap-2 text-sm" }, H2 = { class: "text-muted-foreground" }, q2 = ["href"], K2 = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const o = e, n = q(!1), r = $(() => (o.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, u) => (t(), D(Ce, { muted: "" }, {
      default: j(() => [
        l("div", P2, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", z2, [
            l("div", O2, [
              l("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: u[0] || (u[0] = (d) => n.value = !1)
              }, " Monthly ", 10, j2),
              l("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: u[1] || (u[1] = (d) => n.value = !0)
              }, " Annual ", 10, L2)
            ]),
            e.annualNote ? (t(), a("p", V2, f(e.annualNote), 1)) : k("", !0)
          ])) : k("", !0),
          l("ul", D2, [
            (t(!0), a(P, null, V(e.items ?? [], (d, m) => (t(), a("li", {
              key: m,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              l("div", T2, [
                l("h3", E2, f(d.name), 1),
                l("p", I2, [
                  l("span", F2, f(s(d)), 1),
                  d.period ? (t(), a("span", N2, f(d.period), 1)) : k("", !0)
                ]),
                d.body ? (t(), a("p", R2, f(d.body), 1)) : k("", !0)
              ]),
              l("ul", U2, [
                (t(!0), a(P, null, V(d.features ?? [], (h, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = l("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  l("span", H2, f(h.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), a("a", {
                key: 0,
                href: d.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(d.label), 11, q2)) : k("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function G2() {
  const e = q(null);
  let o = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !o || !s)
      return;
    const d = o.getBoundingClientRect(), m = d.height + window.innerHeight, h = m <= 0 ? 0 : (window.innerHeight - d.top) / m;
    o.style.setProperty("--pk-progress", String(Math.min(Math.max(h, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return pe(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (o = e.value, d || typeof IntersectionObserver > "u") {
        o.style.setProperty("--pk-progress", "1");
        return;
      }
      o.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((m) => {
        s = m.some((h) => h.isIntersecting), s && u();
      }), n.observe(o), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), he(() => {
    n?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const W2 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, Z2 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, J2 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Y2 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, X2 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Q2 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, e$ = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, t$ = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, a$ = { class: "ml-3 truncate text-xs text-muted-foreground" }, n$ = { class: "flex" }, l$ = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, o$ = { class: "min-w-0 flex-1 p-4" }, s$ = { class: "flex flex-col divide-y rounded-md border" }, r$ = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: o } = G2();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: o,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      l("div", W2, [
        l("div", Z2, [
          l("div", J2, [
            l("h2", Y2, f(e.title), 1),
            e.body ? (t(), a("p", X2, f(e.body), 1)) : k("", !0)
          ]),
          l("div", Q2, [
            l("div", e$, [
              l("div", t$, [
                r[0] || (r[0] = l("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = l("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = l("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                l("span", a$, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              l("div", n$, [
                l("div", l$, [
                  (t(), a(P, null, V(6, (s) => l("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ne({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                l("div", o$, [
                  r[4] || (r[4] = l("div", { class: "mb-3 flex gap-2" }, [
                    l("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  l("div", s$, [
                    (t(!0), a(P, null, V(e.rows, (s) => (t(), a("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: ne({ "--pk-row": String(s) })
                    }, [...r[3] || (r[3] = [
                      l("span", { class: "size-6 shrink-0 rounded-full bg-foreground/10" }, null, -1),
                      l("span", { class: "h-2.5 flex-1 rounded bg-foreground/10" }, null, -1),
                      l("span", { class: "hidden h-2.5 w-24 rounded bg-foreground/[0.07] sm:block" }, null, -1),
                      l("span", { class: "h-5 w-14 rounded-full bg-emerald-500/20" }, null, -1)
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
}), i$ = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const o = e, { el: n, shown: r } = ya(), s = q(0);
    return fe(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = o.to;
        return;
      }
      const d = performance.now(), m = (h) => {
        const p = Math.min((h - d) / o.duration, 1);
        s.value = o.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = o.to;
      };
      requestAnimationFrame(m);
    }), (i, u) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), u$ = { class: "flex flex-col gap-10" }, d$ = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, c$ = { class: "order-2 text-sm text-muted-foreground" }, f$ = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, m$ = /* @__PURE__ */ O({
  __name: "PkStats",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function o(n) {
      const r = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/.exec((n ?? "").trim());
      if (!r)
        return null;
      const s = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: s };
    }
    return (n, r) => (t(), D(Ce, { muted: "" }, {
      default: j(() => [
        l("div", u$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("dl", d$, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              l("dt", c$, f(s.label), 1),
              l("dd", f$, [
                o(s.value) ? (t(), D(i$, {
                  key: 0,
                  to: o(s.value).number,
                  prefix: o(s.value).prefix,
                  suffix: o(s.value).suffix,
                  decimals: o(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(P, { key: 1 }, [
                  U(f(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), p$ = { class: "flex flex-col gap-10" }, v$ = { class: "grid gap-6 md:grid-cols-3" }, g$ = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, h$ = { class: "text-sm font-semibold" }, b$ = { class: "text-sm text-pretty text-muted-foreground" }, x$ = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), D(Ce, null, {
      default: j(() => [
        l("div", p$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ol", v$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              l("span", g$, f(s + 1), 1),
              l("h3", h$, f(r.title), 1),
              l("p", b$, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), y$ = { class: "flex flex-col gap-10" }, k$ = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, $$ = { class: "text-pretty text-sm leading-relaxed" }, w$ = { class: "mt-auto flex items-center gap-3" }, C$ = ["src"], S$ = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, M$ = { class: "min-w-0" }, B$ = { class: "block truncate text-sm font-medium" }, _$ = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, A$ = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, n) => (t(), D(Ce, null, {
      default: j(() => [
        l("div", y$, [
          I(De, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", k$, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("blockquote", $$, " “" + f(r.quote) + "” ", 1),
              l("figcaption", w$, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, C$)) : (t(), a("span", S$, f((r.name ?? "?").slice(0, 1)), 1)),
                l("span", M$, [
                  l("span", B$, f(r.name), 1),
                  r.role ? (t(), a("span", _$, f(r.role), 1)) : k("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), z5 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const n = e, r = {
      hero: S2,
      logos: A2,
      features: g2,
      bento: t2,
      showcase: r$,
      steps: x$,
      stats: m$,
      testimonials: A$,
      pricing: K2,
      faq: c2,
      cta: s2
    }, s = $(
      () => (n.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return o({ known: Object.keys(r) }), (i, u) => (t(!0), a(P, null, V(s.value, (d) => (t(), D(xe(d.component), oe({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), P$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, O5 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (o, n) => (t(), a("div", P$, [
      l("div", {
        class: z([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      l("div", {
        class: z([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      l("div", {
        class: z([
          "pk-blob absolute top-1/3 left-1/4 size-[30rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-40 dark:opacity-30" : "opacity-20 dark:opacity-10"
        ]),
        style: { background: "radial-gradient(circle at 40% 60%, var(--pk-aurora-3), transparent 70%)", "animation-delay": "-14s" }
      }, null, 2),
      n[0] || (n[0] = l("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), z$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, j5 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", z$, [...n[0] || (n[0] = [
      wt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), O$ = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, L5 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (o, n) => (t(), a("div", O$, [...n[0] || (n[0] = [
      l("div", {
        class: "absolute inset-0 opacity-[0.18] dark:opacity-[0.14]",
        style: { "background-image": "radial-gradient(currentColor 1px, transparent 1px)", "background-size": "22px 22px", "mask-image": "radial-gradient(ellipse 90% 70% at 50% 0%, black, transparent 80%)" }
      }, null, -1),
      l("div", {
        class: "absolute inset-x-0 top-0 h-[36rem]",
        style: { background: `radial-gradient(
                    ellipse 60% 100% at 50% 0%,
                    var(--pk-console-glow),
                    transparent 70%
                )` }
      }, null, -1),
      l("div", { class: "pk-scanlines absolute inset-0" }, null, -1)
    ])]));
  }
});
Rk();
const V5 = "0.0.1";
export {
  t5 as AdminDirectory,
  ku as Alert,
  $u as AlertDescription,
  wu as AlertTitle,
  N4 as AppPageFooter,
  ow as AppearanceDrawer,
  n4 as Avatar,
  l4 as AvatarFallback,
  o4 as AvatarImage,
  Ot as BADGE_VARIANTS,
  tw as BadgeResolver,
  W4 as BarChart,
  s4 as Breadcrumb,
  r4 as BreadcrumbEllipsis,
  i4 as BreadcrumbItem,
  u4 as BreadcrumbLink,
  d4 as BreadcrumbList,
  c4 as BreadcrumbPage,
  f4 as BreadcrumbSeparator,
  R$ as BulkActions,
  _u as CATALOGUE_GRID,
  cw as CATALOGUE_GRID_TIGHT,
  Au as CATALOGUE_GRID_TILES,
  z4 as Card,
  O4 as CardAction,
  j4 as CardContent,
  L4 as CardDescription,
  V4 as CardFooter,
  D4 as CardHeader,
  T4 as CardTitle,
  t1 as CartPanel,
  d5 as CatalogBrowser,
  Mg as CatalogCard,
  xa as CatalogFilterSheet,
  Tt as CatalogGrid,
  i5 as CatalogInspect,
  H1 as CatalogItemDetail,
  u5 as CatalogItemView,
  c5 as CatalogRegister,
  r5 as CatalogTill,
  Yp as ChartCard,
  Qe as ChartTooltip,
  Ao as Checkbox,
  J$ as CheckboxCell,
  Y$ as CodeCell,
  Vr as ColourCell,
  Q4 as ComboChart,
  _o as CreateOptionDialog,
  vo as CreateOptionError,
  m5 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Sx as DASHBOARD_HIDE_KEY,
  p5 as DashboardShortcuts,
  pl as DataTable,
  y4 as Dialog,
  k4 as DialogClose,
  $4 as DialogContent,
  w4 as DialogDescription,
  C4 as DialogFooter,
  S4 as DialogHeader,
  sd as DialogOverlay,
  M4 as DialogScrollContent,
  B4 as DialogTitle,
  _4 as DialogTrigger,
  t5 as DirectoryPage,
  Uw as DropdownMenu,
  Hw as DropdownMenuCheckboxItem,
  qw as DropdownMenuContent,
  Kw as DropdownMenuGroup,
  Gw as DropdownMenuItem,
  Ww as DropdownMenuLabel,
  E5 as DropdownMenuPortal,
  Zw as DropdownMenuRadioGroup,
  Jw as DropdownMenuRadioItem,
  Yw as DropdownMenuSeparator,
  Xw as DropdownMenuShortcut,
  Qw as DropdownMenuSub,
  e4 as DropdownMenuSubContent,
  t4 as DropdownMenuSubTrigger,
  a4 as DropdownMenuTrigger,
  Q$ as EditableCell,
  pw as FORM_MEASURE,
  Fe as FormFieldControl,
  e5 as HeatmapChart,
  ct as ICON_PATHS,
  Br as IconCell,
  Pr as ImageCell,
  M5 as InfoNode,
  zu as JPEG_IMAGE_ERROR,
  X$ as KeyValueCell,
  A4 as Label,
  mm as LineChart,
  Vb as LineItems,
  ot as MiniStatCard,
  m4 as NavigationMenu,
  p4 as NavigationMenuContent,
  v4 as NavigationMenuIndicator,
  g4 as NavigationMenuItem,
  h4 as NavigationMenuLink,
  b4 as NavigationMenuList,
  x4 as NavigationMenuTrigger,
  ld as NavigationMenuViewport,
  Pu as OPAQUE_IMAGE_ERROR,
  Ve as PAGE_SHELL,
  fw as PAGE_SHELL_COMPACT,
  mw as PAGE_SHELL_STACK,
  B5 as PaymentGatewaySettings,
  bk as PaymentGateways,
  Z4 as PieChart,
  uw as PkAlertError,
  O5 as PkAuroraBackdrop,
  Ge as PkBadge,
  t2 as PkBento,
  sw as PkBottomNav,
  E4 as PkBoundary,
  H4 as PkBuilder,
  se as PkButton,
  I4 as PkCard,
  ic as PkCheckboxList,
  ha as PkCodeBox,
  qd as PkCodeInput,
  Bc as PkColourPicker,
  L5 as PkConsoleBackdrop,
  i$ as PkCountUp,
  s2 as PkCta,
  R4 as PkDeviceFrame,
  Mf as PkDocument,
  Ie as PkDropdown,
  j5 as PkEditorialBackdrop,
  c2 as PkFaq,
  g2 as PkFeatureGrid,
  ke as PkFieldLabel,
  ra as PkFileUpload,
  _e as PkHeading,
  S2 as PkHero,
  ns as PkKeyValue,
  z5 as PkLandingSections,
  A2 as PkLogoCloud,
  Ed as PkMarkdownInput,
  Ze as PkModal,
  zt as PkMultiSelect,
  iw as PkOtpInput,
  $5 as PkPasskeyRegister,
  dw as PkPasswordInput,
  K2 as PkPricing,
  Cb as PkQtyStepper,
  Xr as PkQueryBuilder,
  oc as PkRadioGroup,
  U4 as PkRepeater,
  Uk as PkReveal,
  ms as PkRichEditor,
  Ce as PkSection,
  De as PkSectionHeading,
  r$ as PkShowcase,
  ox as PkSignaturePad,
  Ne as PkSkeleton,
  Et as PkSlideover,
  jc as PkSlider,
  rw as PkSpinner,
  m$ as PkStats,
  be as PkStatusBadge,
  mo as PkStepIndicator,
  x$ as PkSteps,
  Wc as PkSwatchPreview,
  vc as PkTagsInput,
  A$ as PkTestimonials,
  ge as PkTextInput,
  Jk as PkTiltCard,
  Kc as PkVisualSelect,
  Qg as PlanCard,
  s5 as PlanEditor,
  o5 as PlanGrid,
  X4 as PolarAreaChart,
  Y4 as RadarChart,
  aw as RecordActions,
  w5 as RecordForm,
  Z$ as RelationCreateDialog,
  U$ as RelationPanel,
  ng as STATUS_TONES,
  J4 as ScatterChart,
  ia as SchemaNode,
  n5 as SegmentedBar,
  h5 as SelectionBar,
  Qu as Separator,
  g5 as SetupChecklist,
  fa as ShadcnInput,
  Vt as Sheet,
  gw as SheetClose,
  Dt as SheetContent,
  Eu as SheetDescription,
  hw as SheetFooter,
  Iu as SheetHeader,
  Fu as SheetTitle,
  bw as SheetTrigger,
  gv as ShortcutsWidget,
  xw as Sidebar,
  yw as SidebarContent,
  kw as SidebarFooter,
  $w as SidebarGroup,
  ww as SidebarGroupAction,
  Cw as SidebarGroupContent,
  Sw as SidebarGroupLabel,
  Mw as SidebarHeader,
  Bw as SidebarInput,
  _w as SidebarInset,
  Aw as SidebarMenu,
  Pw as SidebarMenuAction,
  zw as SidebarMenuBadge,
  jw as SidebarMenuButton,
  Lw as SidebarMenuItem,
  Vw as SidebarMenuSkeleton,
  Dw as SidebarMenuSub,
  Tw as SidebarMenuSubButton,
  Ew as SidebarMenuSubItem,
  Iw as SidebarProvider,
  Fw as SidebarRail,
  Nw as SidebarSeparator,
  Rw as SidebarTrigger,
  f5 as SignatureStudio,
  it as Sparkline,
  P4 as Spinner,
  a5 as StatCard,
  l5 as StatListChart,
  v5 as StatStrip,
  Ee as Switch,
  ma as TRANSPARENT_IMAGE_HELP,
  b5 as TablePagination,
  x5 as TableShell,
  y5 as TableTabs,
  k5 as TableToolbar,
  G4 as ThemeToggle,
  Ju as Tooltip,
  Yu as TooltipContent,
  Ow as TooltipProvider,
  Xu as TooltipTrigger,
  ba as TrendBadge,
  C5 as UnsavedBar,
  Cu as alertVariants,
  Oi as appearanceVars,
  kt as applyAppearance,
  Du as assertTransparentImage,
  Ke as buttonClasses,
  st as catalogFiltersActive,
  Q as cn,
  ho as createOptionActionLabel,
  go as createOptionTitle,
  Bg as cycleLabel,
  Ae as emptyCatalogFilters,
  po as fieldControl,
  G$ as fieldErrorsFromPayload,
  rb as findExactSku,
  _g as formatPerkValue,
  ri as hasBadgeValue,
  H$ as hasFieldControl,
  q4 as hasOptionPreview,
  ue as iconPath,
  Lu as imageHasTransparency,
  nw as initializeAppearance,
  yt as isDark,
  It as matchCatalogItem,
  od as navigationMenuTriggerStyle,
  Lc as optionPreview,
  vw as packWidgetColumns,
  Ag as perkGranted,
  Lt as readAppearance,
  Rk as registerBuiltInFieldControls,
  Se as registerFieldControl,
  pt as registerOptionPreview,
  q$ as registeredFieldTypes,
  Vc as registeredOptionPreviews,
  K$ as resetFieldControls,
  K4 as resetOptionPreviews,
  lw as setAppearancePersister,
  ed as sidebarMenuButtonVariants,
  rg as statusBadgeVariant,
  sg as statusTone,
  W$ as toUrl,
  ca as useAppearance,
  _5 as useColumnVisibility,
  A5 as useLiveUpdates,
  Wk as usePointer,
  ya as useReveal,
  ew as useSchemaColumns,
  G2 as useScrollProgress,
  F4 as useShellPageFooter,
  rt as useSidebar,
  P5 as useTenantTheme,
  S5 as useUnsavedChanges,
  V5 as version
};
//# sourceMappingURL=index.js.map
