import './ui.css';
import { defineComponent as z, ref as G, useId as fa, computed as k, openBlock as t, createElementBlock as n, normalizeClass as j, createElementVNode as o, createCommentVNode as w, withModifiers as ie, unref as b, Fragment as P, renderList as D, createTextVNode as U, toDisplayString as m, createStaticVNode as pt, renderSlot as H, watch as re, nextTick as Ce, onBeforeUnmount as me, createBlock as I, Teleport as Te, createVNode as N, Transition as ze, withCtx as L, onMounted as de, normalizeStyle as ee, resolveDynamicComponent as Ae, resolveComponent as vt, withDirectives as se, vModelSelect as Le, vModelDynamic as ma, isRef as pa, vModelText as be, useTemplateRef as va, mergeProps as te, normalizeProps as ye, guardReactiveProps as Be, onErrorCaptured as ga, provide as Nt, inject as gt, defineAsyncComponent as At, vShow as je, useSlots as ha, markRaw as ba, withKeys as ya, reactive as Ue, useModel as Ke, mergeModels as Se, createSlots as xa, shallowRef as ka, watchEffect as $a } from "vue";
import { AlertCircle as wa, EyeOff as Ca, Eye as _a, X as ht, PanelLeftOpen as Ma, PanelLeftClose as Sa, Check as Rt, Circle as Ba, ChevronRight as Ut, MoreHorizontal as Pa, ChevronDown as za, Loader2Icon as Aa } from "@lucide/vue";
import { cva as bt } from "class-variance-authority";
import { clsx as ja } from "clsx";
import { twMerge as Oa } from "tailwind-merge";
import { useVModel as Ht, reactiveOmit as le, useMediaQuery as La, useEventListener as Va, defaultDocument as Da } from "@vueuse/core";
import { useForwardPropsEmits as ce, DialogRoot as qt, DialogClose as Fe, DialogOverlay as yt, DialogPortal as xt, DialogContent as kt, DialogDescription as Kt, DialogTitle as Gt, DialogTrigger as Wt, createContext as Ta, Primitive as Ee, TooltipRoot as Fa, TooltipPortal as Ea, TooltipContent as Ia, TooltipArrow as Na, TooltipProvider as Zt, TooltipTrigger as Ra, Separator as Ua, DropdownMenuRoot as Ha, DropdownMenuCheckboxItem as qa, DropdownMenuItemIndicator as Jt, DropdownMenuPortal as Ka, DropdownMenuContent as Ga, DropdownMenuGroup as Wa, useForwardProps as xe, DropdownMenuItem as Za, DropdownMenuLabel as Ja, DropdownMenuRadioGroup as Ya, DropdownMenuRadioItem as Xa, DropdownMenuSeparator as Qa, DropdownMenuSub as en, DropdownMenuSubContent as tn, DropdownMenuSubTrigger as an, DropdownMenuTrigger as nn, AvatarRoot as ln, AvatarFallback as on, AvatarImage as sn, NavigationMenuViewport as rn, NavigationMenuRoot as un, NavigationMenuContent as dn, NavigationMenuIndicator as cn, NavigationMenuItem as fn, NavigationMenuLink as mn, NavigationMenuList as pn, NavigationMenuTrigger as vn, Label as gn, CheckboxRoot as hn, CheckboxIndicator as bn, SwitchRoot as yn, SwitchThumb as xn } from "reka-ui";
import { DropdownMenuPortal as u4 } from "reka-ui";
import { usePage as Yt, Link as kn } from "@inertiajs/vue3";
const $n = { class: "w-full border-collapse text-sm" }, wn = { class: "bg-background sticky top-0 z-10" }, Cn = { class: "bg-muted/50" }, _n = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Mn = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, Sn = ["id", "checked", "indeterminate"], Bn = ["onClick"], Pn = {
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
}, En = ["id", "value", "checked", "disabled", "aria-label", "onChange"], In = {
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
}, el = /* @__PURE__ */ z({
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
      const V = a.groupBy ? F[a.groupBy.key] : null;
      return V == null || V === "" ? "None" : String(V);
    }
    const i = G(null), u = G(null);
    function d(F, V) {
      i.value = F, V.dataTransfer?.setData("text/plain", String(F)), V.dataTransfer && (V.dataTransfer.effectAllowed = "move");
    }
    function f() {
      i.value = null, u.value = null;
    }
    function y(F) {
      return i.value === null || u.value !== F ? "" : i.value > F ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function p(F, V) {
      i.value !== null && (V.preventDefault(), u.value = F);
    }
    function x(F) {
      const V = i.value;
      if (i.value = null, u.value = null, V === null || V === F)
        return;
      const J = a.rows.map((W) => W[a.rowKey]), [O] = J.splice(V, 1);
      J.splice(F, 0, O), M("reorder", J);
    }
    const M = l;
    function $(F, V) {
      !a.rowClickable || a.reordering || V.button !== 0 || V.metaKey || V.ctrlKey || V.shiftKey || V.altKey || V.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || M("row-click", F);
    }
    const _ = G(null), h = fa(), g = k(() => a.columns.filter((F) => !a.hidden?.has(F.key)));
    function v(F) {
      const V = F[a.rowKey];
      return V == null || V === "" ? null : V;
    }
    function c(F) {
      const V = v(F);
      return V !== null && !!a.selected?.has(V);
    }
    function C(F) {
      const V = v(F);
      V !== null && M("toggle-row", V);
    }
    const S = k(
      () => a.rows.map((F) => v(F)).filter((F) => F !== null)
    ), B = k(
      () => S.value.length > 0 && S.value.every((F) => a.selected?.has(F))
    ), K = k(
      () => !B.value && S.value.some((F) => a.selected?.has(F))
    );
    function R(F) {
      return F.sortKey ?? F.key;
    }
    function Z(F) {
      return a.sort === R(F);
    }
    async function E(F, V, J) {
      try {
        await navigator.clipboard.writeText(String(J)), _.value = `${F}-${V.key}`, setTimeout(() => _.value = null, 1200);
      } catch {
      }
    }
    const A = k(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function T(F) {
      return a.summaries?.[F] ?? null;
    }
    function Y(F) {
      const V = a.summaries?.[F], J = a.summaryValues?.[F];
      if (!V)
        return "";
      if (J == null)
        return "-";
      const O = V.divideBy ? J / V.divideBy : J, W = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: V.decimals,
        maximumFractionDigits: V.decimals
      }).format(O);
      return `${V.prefix ?? ""}${W}${V.suffix ?? ""}`;
    }
    return (F, V) => (t(), n("div", {
      class: j(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", $n, [
        o("thead", wn, [
          o("tr", Cn, [
            e.reordering ? (t(), n("th", _n)) : w("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Mn, [
              o("input", {
                id: `${b(h)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: B.value,
                indeterminate: K.value,
                "aria-label": "Select all rows on this page",
                onClick: V[0] || (V[0] = ie(() => {
                }, ["stop"])),
                onChange: V[1] || (V[1] = ie((J) => M("toggle-page", !B.value), ["stop"]))
              }, null, 40, Sn)
            ])) : w("", !0),
            (t(!0), n(P, null, D(g.value, (J) => (t(), n("th", {
              key: J.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              J.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (O) => M("sort", R(J))
              }, [
                U(m(J.label) + " ", 1),
                Z(J) ? (t(), n("span", Pn, m(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", zn, "↕"))
              ], 8, Bn)) : (t(), n("span", An, m(J.label), 1))
            ]))), 128)),
            F.$slots.actions ? (t(), n("th", jn, [...V[3] || (V[3] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : w("", !0)
          ])
        ]),
        o("tbody", {
          class: j(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(P, null, D(e.rows, (J, O) => (t(), n(P, {
            key: v(J) ?? `row-${O}`
          }, [
            e.groupBy && r(O) ? (t(), n("tr", On, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                o("span", Vn, m(e.groupBy.label) + ":", 1),
                U(" " + m(s(J)), 1)
              ], 8, Ln)
            ])) : w("", !0),
            o("tr", {
              class: j(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                c(J) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                i.value === O ? "opacity-40" : "",
                y(O),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (W) => d(O, W),
              onDragover: (W) => p(O, W),
              onDrop: ie((W) => x(O), ["prevent"]),
              onDragend: f,
              onContextmenu: (W) => M("row-contextmenu", J, W),
              onClick: (W) => $(J, W)
            }, [
              e.reordering ? (t(), n("td", Tn, [...V[4] || (V[4] = [
                pt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-a8aca8fd><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-a8aca8fd><circle cx="9" cy="6" r="1.5" data-v-a8aca8fd></circle><circle cx="15" cy="6" r="1.5" data-v-a8aca8fd></circle><circle cx="9" cy="12" r="1.5" data-v-a8aca8fd></circle><circle cx="15" cy="12" r="1.5" data-v-a8aca8fd></circle><circle cx="9" cy="18" r="1.5" data-v-a8aca8fd></circle><circle cx="15" cy="18" r="1.5" data-v-a8aca8fd></circle></svg></span>', 1)
              ])])) : w("", !0),
              e.selectable && !e.reordering ? (t(), n("td", Fn, [
                o("input", {
                  id: `${b(h)}-row-${v(J) ?? O}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: v(J) ?? void 0,
                  checked: c(J),
                  disabled: v(J) === null,
                  "aria-label": v(J) === null ? "This row has no id and cannot be selected" : `Select row ${v(J)}`,
                  onClick: V[2] || (V[2] = ie(() => {
                  }, ["stop"])),
                  onChange: ie((W) => C(J), ["stop"])
                }, null, 40, En)
              ])) : w("", !0),
              (t(!0), n(P, null, D(g.value, (W) => (t(), n("td", {
                key: W.key,
                class: j(["px-3 py-2 whitespace-nowrap", W.cellClass])
              }, [
                H(F.$slots, `cell:${W.key}`, {
                  row: J,
                  value: J[W.key],
                  column: W
                }, () => [
                  W.copyable ? (t(), n("span", In, [
                    U(m(J[W.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${W.label.toLowerCase()}`,
                      onClick: (q) => E(String(J[e.rowKey]), W, J[W.key])
                    }, [
                      o("span", Rn, m(_.value === `${J[e.rowKey]}-${W.key}` ? "✓" : "⧉"), 1)
                    ], 8, Nn)
                  ])) : (t(), n("span", Un, m(J[W.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              F.$slots.actions ? (t(), n("td", Hn, [
                H(F.$slots, "actions", { row: J }, void 0, !0)
              ])) : w("", !0)
            ], 42, Dn)
          ], 64))), 128))
        ], 2),
        A.value ? (t(), n("tfoot", qn, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Kn)) : w("", !0),
            (t(!0), n(P, null, D(e.columns, (J) => (t(), n(P, {
              key: `s-${J.key}`
            }, [
              e.hidden?.has(J.key) ? w("", !0) : (t(), n("td", {
                key: 0,
                class: j(["px-3 py-2 align-top text-sm whitespace-nowrap", J.cellClass])
              }, [
                T(J.key) ? (t(), n(P, { key: 0 }, [
                  o("span", Gn, m(T(J.key).label), 1),
                  o("span", Wn, m(Y(J.key)), 1)
                ], 64)) : w("", !0)
              ], 2))
            ], 64))), 128)),
            F.$slots.actions ? (t(), n("td", Zn)) : w("", !0)
          ])
        ])) : w("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", Jn, [
        V[5] || (V[5] = o("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        H(F.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", Yn, [
        o("p", Xn, m(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", Qn, m(e.emptyHint), 1)) : w("", !0)
      ])) : w("", !0)
    ], 2));
  }
}), $t = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, tl = /* @__PURE__ */ $t(el, [["__scopeId", "data-v-a8aca8fd"]]), al = ["aria-label"], nl = { class: "border-b px-5 py-4" }, ll = { class: "text-base font-semibold" }, ol = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, sl = { class: "px-5 py-4" }, rl = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, it = /* @__PURE__ */ z({
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
    function y(p) {
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
      const M = x[0], $ = x[x.length - 1];
      p.shiftKey && document.activeElement === M ? (p.preventDefault(), $.focus()) : !p.shiftKey && document.activeElement === $ && (p.preventDefault(), M.focus());
    }
    return re(
      () => a.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", y), Ce(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", y), i?.focus(), i = null);
      }
    ), me(() => document.removeEventListener("keydown", y)), (p, x) => (t(), I(Te, { to: "body" }, [
      N(ze, {
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
            o("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
            }, [
              o("div", nl, [
                o("h2", ll, m(e.title), 1),
                e.description ? (t(), n("p", ol, m(e.description), 1)) : w("", !0)
              ]),
              o("div", sl, [
                H(p.$slots, "default")
              ]),
              o("div", rl, [
                H(p.$slots, "footer")
              ])
            ], 8, al)
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
function oe(e) {
  return e ? at[e] ?? at.dot : at.dot;
}
const il = 160, He = /* @__PURE__ */ z({
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
    function y(C) {
      !a.dismissOnPanelClick || C.target?.closest("input, select, textarea, label, [data-keep-open]") || _();
    }
    async function p() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await Ce(), h());
    }
    function x() {
      f = setTimeout(_, 180);
    }
    async function M() {
      d.value = null, r.value = !r.value, r.value && (await Ce(), h());
    }
    async function $(C, S) {
      d.value = { x: C, y: S }, r.value = !0, await Ce(), h();
    }
    function _() {
      r.value = !1, d.value = null;
    }
    function h() {
      const C = s.value, S = i.value;
      if (!C || !S)
        return;
      const B = S.getBoundingClientRect(), K = 8, R = d.value ? new DOMRect(d.value.x, d.value.y, 0, 0) : C.getBoundingClientRect();
      let Z, E;
      if (a.placement === "bottom")
        Z = R.bottom + a.offset, Z + B.height > window.innerHeight - K && R.top - B.height - a.offset > K && (Z = R.top - B.height - a.offset), E = a.align === "end" && !d.value ? R.right - B.width : R.left;
      else {
        Z = R.top;
        const A = a.placement === "right", T = R.right + a.offset + B.width < window.innerWidth - K, Y = R.left - a.offset - B.width > K;
        E = (A ? T || !Y : !Y && T) ? R.right + a.offset : R.left - a.offset - B.width;
      }
      E = Math.min(Math.max(K, E), window.innerWidth - B.width - K), Z = Math.min(Math.max(K, Z), window.innerHeight - B.height - K), u.value = { top: Z, left: E, minWidth: Math.max(R.width, il) };
    }
    function g(C) {
      if (!r.value)
        return;
      const S = C.target;
      s.value?.contains(S) || i.value?.contains(S) || (S instanceof Element ? S : S.parentElement)?.closest("[data-pk-overlay]") || _();
    }
    function v(C) {
      C.key === "Escape" && r.value && (C.stopPropagation(), _());
    }
    function c() {
      if (r.value) {
        if (d.value) {
          _();
          return;
        }
        h();
      }
    }
    return de(() => {
      document.addEventListener("pointerdown", g), document.addEventListener("keydown", v), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c);
    }), me(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", g), document.removeEventListener("keydown", v), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    }), l({ close: _, openAt: $ }), (C, S) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: S[2] || (S[2] = (B) => e.hoverable && p()),
      onPointerleave: S[3] || (S[3] = (B) => e.hoverable && x())
    }, [
      o("div", { onClick: M }, [
        H(C.$slots, "trigger", { open: r.value })
      ]),
      (t(), I(Te, { to: "body" }, [
        N(ze, {
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
              style: ee({
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
              onPointerenter: S[0] || (S[0] = (B) => e.hoverable && p()),
              onPointerleave: S[1] || (S[1] = (B) => e.hoverable && x()),
              onClick: y
            }, [
              H(C.$slots, "panel", { close: _ })
            ], 38)) : w("", !0)
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
}, bl = ["disabled", "onClick"], yl = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xl = ["d"], kl = { class: "text-muted-foreground text-sm" }, $l = { class: "text-foreground font-medium tabular-nums" }, wl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Cl = ["disabled"], _l = { class: "text-muted-foreground text-sm" }, Ml = { class: "text-foreground font-medium tabular-nums" }, Sl = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Bl = ["disabled"], y2 = /* @__PURE__ */ z({
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
    const a = e, r = l, s = G(null), i = G(!1), u = k(() => a.allMatching ? a.total : a.count), d = k(() => u.value !== void 0), f = k(() => d.value && u.value === 0), y = k(() => a.actions.filter((v) => !v.destructive)), p = k(() => a.actions.filter((v) => v.destructive)), x = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function M(v) {
      return x[v.color ?? "gray"] ?? x.gray;
    }
    function $(v) {
      if (v.confirmation) {
        s.value = v;
        return;
      }
      r("run", v.key);
    }
    function _() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function h() {
      i.value = !1, r("export");
    }
    const g = (v) => new Intl.NumberFormat().format(v);
    return (v, c) => (t(), n(P, null, [
      N(He, null, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...c[5] || (c[5] = [
            U(" Bulk actions ", -1),
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
          ])], 8, ul)
        ]),
        panel: L(() => [
          o("div", dl, [
            (t(!0), n(P, null, D(y.value, (C) => (t(), n("button", {
              key: C.key,
              type: "button",
              role: "menuitem",
              class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", M(C)]),
              disabled: e.busy,
              onClick: (S) => $(C)
            }, [
              (t(), n("svg", fl, [
                o("path", {
                  d: b(oe)(C.icon)
                }, null, 8, ml)
              ])),
              U(" " + m(C.label), 1)
            ], 10, cl))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: c[0] || (c[0] = (C) => i.value = !0)
            }, [
              (t(), n("svg", vl, [
                o("path", {
                  d: b(oe)("download")
                }, null, 8, gl)
              ])),
              c[6] || (c[6] = U(" Export CSV ", -1))
            ], 8, pl)) : w("", !0),
            p.value.length ? (t(), n("div", hl, [
              (t(!0), n(P, null, D(p.value, (C) => (t(), n("button", {
                key: C.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (S) => $(C)
              }, [
                (t(), n("svg", yl, [
                  o("path", {
                    d: b(oe)(C.icon ?? "trash")
                  }, null, 8, xl)
                ])),
                U(" " + m(C.label), 1)
              ], 8, bl))), 128))
            ])) : w("", !0)
          ])
        ]),
        _: 1
      }),
      N(it, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: c[2] || (c[2] = (C) => s.value = null)
      }, {
        footer: L(() => [
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
          }, m(s.value?.label), 11, Cl)
        ]),
        default: L(() => [
          o("p", kl, [
            c[7] || (c[7] = U(" This will affect ", -1)),
            o("span", $l, [
              d.value ? (t(), n(P, { key: 1 }, [
                U(m(g(u.value)) + " record" + m(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[8] || (c[8] = U(" . ", -1))
          ]),
          f.value ? (t(), n("p", wl, " Nothing matches the current filters - there is nothing to " + m(s.value?.label?.toLowerCase()) + ". ", 1)) : w("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      N(it, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: c[4] || (c[4] = (C) => i.value = !1)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: c[3] || (c[3] = (C) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !d.value || f.value,
            onClick: h
          }, " Export CSV ", 8, Bl)
        ]),
        default: L(() => [
          o("p", _l, [
            c[9] || (c[9] = U(" This will export ", -1)),
            o("span", Ml, [
              d.value ? (t(), n(P, { key: 1 }, [
                U(m(g(u.value)) + " record" + m(u.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(P, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            c[10] || (c[10] = U(" . ", -1))
          ]),
          f.value ? (t(), n("p", Sl, " Nothing matches the current filters - there is nothing to export. ")) : w("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Pl = { class: "bg-card overflow-hidden rounded-lg border" }, zl = { class: "pk-scroll w-full overflow-x-auto" }, Al = { class: "w-full border-collapse text-sm" }, jl = { class: "bg-muted/40" }, Ol = { class: "divide-y" }, Ll = { key: 0 }, Vl = ["colspan"], Dl = { key: 1 }, Tl = ["colspan"], Fl = ["href"], El = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, Il = ["disabled"], Nl = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, Rl = ["href"], x2 = /* @__PURE__ */ z({
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
    return (u, d) => (t(), n("div", Pl, [
      o("div", zl, [
        o("table", Al, [
          o("thead", jl, [
            o("tr", null, [
              (t(!0), n(P, null, D(s.value, (f) => (t(), n("th", {
                key: f.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, m(f.label), 1))), 128))
            ])
          ]),
          o("tbody", Ol, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", Ll, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, Vl)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", Dl, [
              o("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, m(e.emptyText), 9, Tl)
            ])) : w("", !0),
            (t(!0), n(P, null, D(e.rows, (f, y) => (t(), n("tr", {
              key: f.id ?? y,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(P, null, D(s.value, (p) => (t(), n("td", {
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
                  }, m(i(p, f[p.key])), 9, Fl)) : (t(), n(P, { key: 1 }, [
                    U(m(i(p, f[p.key])), 1)
                  ], 64))
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", El, [
        o("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: d[0] || (d[0] = (f) => r("load", e.nextCursor))
        }, m(e.loading ? "Loading…" : "Load more"), 9, Il)
      ])) : e.capped ? (t(), n("p", Nl, [
        U(" Showing the first " + m(e.rows.length) + ". ", 1),
        e.indexHref ? (t(), n("a", {
          key: 0,
          href: e.indexHref,
          class: "text-foreground underline-offset-2 hover:underline"
        }, " Open the full list ", 8, Rl)) : (t(), n(P, { key: 1 }, [
          U("Open the full list to search or filter the rest.")
        ], 64))
      ])) : w("", !0)
    ]));
  }
}), Ul = ["title"], Hl = ["aria-label"], ql = ["d"], Kl = { class: "sr-only" }, Gl = /* @__PURE__ */ z({
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
    return (y, p) => (t(), n("span", {
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
        o("path", { d: u.value }, null, 8, ql)
      ], 10, Hl)),
      o("span", Kl, m(f.value), 1)
    ], 8, Ul));
  }
}), Wl = ["src"], Zl = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Jl = /* @__PURE__ */ z({
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
      }, null, 40, Wl)) : e.fallback === "initials" ? (t(), n(P, { key: 1 }, [
        U(m(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Zl, [...d[1] || (d[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : w("", !0)
    ], 2));
  }
}), Yl = {
  key: 0,
  class: "text-muted-foreground"
}, Xl = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, Ql = {
  key: 0,
  class: "font-mono text-xs"
}, eo = {
  key: 1,
  class: "sr-only"
}, to = /* @__PURE__ */ z({
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
    return (s, i) => r.value === null ? (t(), n("span", Yl, "-")) : (t(), n("span", Xl, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ee({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", Ql, m(r.value), 1)) : (t(), n("span", eo, m(r.value), 1))
    ]));
  }
}), ao = { class: "inline-flex items-center" }, no = ["checked", "aria-label"], lo = { class: "sr-only" }, k2 = /* @__PURE__ */ z({
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
    return (s, i) => (t(), n("span", ao, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, no),
      o("span", lo, m(r.value), 1)
    ]));
  }
}), oo = {
  key: 0,
  class: "text-muted-foreground"
}, so = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, $2 = /* @__PURE__ */ z({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = k(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", so, m(a.value), 1)) : (t(), n("span", oo, "—"));
  }
}), ro = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", io = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, uo = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Xt(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [ro, io[l], uo[a], e.class].filter(Boolean).join(" ");
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
    const l = e, a = k(
      () => Xt({ variant: l.variant, size: l.size, class: l.class })
    ), r = k(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), I(Ae(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: j(a.value)
    }, {
      default: L(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), co = { class: "flex items-center gap-2" }, fo = ["onUpdate:modelValue", "onChange"], mo = ["value"], po = ["onUpdate:modelValue"], vo = ["value"], go = ["onUpdate:modelValue"], ho = ["onUpdate:modelValue", "multiple"], bo = ["value"], yo = ["onUpdate:modelValue", "type"], xo = ["aria-label", "onClick"], ko = { class: "flex items-center gap-2" }, $o = /* @__PURE__ */ z({
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
    re(
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
    const y = {
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
        operator: f(c)[0],
        value: void 0
      }), p();
    }
    function M() {
      i.value.rules.push(s()), p();
    }
    function $(c) {
      i.value.rules.splice(c, 1), p();
    }
    function _(c) {
      c.operator = f(c.field)[0], c.value = void 0, p();
    }
    const h = k(() => a.depth + 1 < a.maxDepth);
    function g() {
      i.value = s(), p(), r("apply", null);
    }
    function v() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (c, C) => {
      const S = vt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: j(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", co, [
          se(o("select", {
            "onUpdate:modelValue": C[0] || (C[0] = (B) => i.value.logic = B),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...C[1] || (C[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Le, i.value.logic]
          ]),
          C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(P, null, D(i.value.rules, (B, K) => (t(), n("div", {
          key: K,
          class: "flex items-start gap-2"
        }, [
          u(B) ? (t(), I(S, {
            key: 0,
            modelValue: i.value.rules[K],
            "onUpdate:modelValue": [(R) => i.value.rules[K] = R, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(P, { key: 1 }, [
            se(o("select", {
              "onUpdate:modelValue": (R) => B.field = R,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (R) => _(B)
            }, [
              (t(!0), n(P, null, D(d.value, (R) => (t(), n("option", {
                key: R,
                value: R
              }, m(e.fields[R].label), 9, mo))), 128))
            ], 40, fo), [
              [Le, B.field]
            ]),
            se(o("select", {
              "onUpdate:modelValue": (R) => B.operator = R,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(P, null, D(f(B.field), (R) => (t(), n("option", {
                key: R,
                value: R
              }, m(y[R] ?? R), 9, vo))), 128))
            ], 40, po), [
              [Le, B.operator]
            ]),
            B.field && e.fields[B.field]?.kind === "boolean" ? se((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (R) => B.value = R,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...C[3] || (C[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, go)), [
              [Le, B.value]
            ]) : B.field && e.fields[B.field]?.options?.length ? se((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (R) => B.value = R,
              multiple: e.fields[B.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(P, null, D(e.fields[B.field].options, (R) => (t(), n("option", {
                key: R,
                value: R
              }, m(R), 9, bo))), 128))
            ], 40, ho)), [
              [Le, B.value]
            ]) : se((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (R) => B.value = R,
              type: B.field && e.fields[B.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, yo)), [
              [ma, B.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${u(B) ? "group" : "rule"}`,
            onClick: (R) => $(K)
          }, " × ", 8, xo)
        ]))), 128)),
        o("div", ko, [
          N(ne, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: x
          }, {
            default: L(() => [...C[4] || (C[4] = [
              U("Add rule", -1)
            ])]),
            _: 1
          }),
          h.value ? (t(), I(ne, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: M
          }, {
            default: L(() => [...C[5] || (C[5] = [
              U(" Add group ", -1)
            ])]),
            _: 1
          })) : w("", !0),
          e.root ? (t(), n(P, { key: 1 }, [
            C[8] || (C[8] = o("span", { class: "flex-1" }, null, -1)),
            N(ne, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: g
            }, {
              default: L(() => [...C[6] || (C[6] = [
                U(" Clear ", -1)
              ])]),
              _: 1
            }),
            N(ne, {
              type: "button",
              size: "sm",
              onClick: v
            }, {
              default: L(() => [...C[7] || (C[7] = [
                U(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : w("", !0)
        ])
      ], 2);
    };
  }
}), wo = {
  key: 0,
  class: "font-mono text-xs"
}, Co = {
  key: 1,
  class: "text-muted-foreground"
}, _o = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, w2 = /* @__PURE__ */ z({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = k(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", wo, m(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", Co, "—")) : (t(), n("span", _o, m(a.value.length) + " " + m(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Mo = ["aria-checked", "aria-label", "title", "disabled"], So = ["value", "disabled"], Bo = ["value"], C2 = /* @__PURE__ */ z({
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
    function f(y) {
      const p = y.target.value;
      p !== String(a.value ?? "") && r("change", p);
    }
    return (y, p) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": u.value,
      title: u.value,
      disabled: i.value,
      class: j(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ie(d, ["stop"])
    }, [
      o("span", {
        class: j(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Mo)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = ie(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), n(P, null, D(e.options, (x, M) => (t(), n("option", {
        key: M,
        value: M
      }, m(x), 9, Bo))), 128))
    ], 40, So));
  }
}), Po = ["data-variant"], zo = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Re = /* @__PURE__ */ z({
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
      () => [zo, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: j(r.value)
    }, [
      H(s.$slots, "default")
    ], 10, Po));
  }
}), wt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Ao(e) {
  return e != null && e !== "";
}
function jo(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function _2(e) {
  const l = k(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: jo(s)
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
const Oo = ["disabled", "aria-label", "aria-busy"], Lo = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vo = ["d"], Do = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, To = ["disabled", "onClick"], Fo = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Eo = ["d"], Io = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, M2 = /* @__PURE__ */ z({
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
      return wt[M] ?? "outline";
    }
    function y(x) {
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
      onClick: M[0] || (M[0] = ie(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), I(Re, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: L(() => [
          U(m(y(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), I(He, {
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
            N(Re, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                U(m(y(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Lo, [
              o("path", {
                d: b(oe)("chevron-down")
              }, null, 8, Vo)
            ]))
          ], 8, Oo)
        ]),
        panel: L(({ close: $ }) => [
          o("div", Do, m(u.value), 1),
          (t(!0), n(P, null, D(e.options, (_, h) => (t(), n("button", {
            key: h,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (g) => p(String(h), $)
          }, [
            N(Re, {
              variant: f(h),
              class: "capitalize"
            }, {
              default: L(() => [
                U(m(_), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(h) === i.value ? (t(), n("svg", Fo, [
              o("path", {
                d: b(oe)("check")
              }, null, 8, Eo)
            ])) : (t(), n("span", Io))
          ], 8, To))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), No = { class: "flex items-center justify-end" }, Ro = ["aria-label"], Uo = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ho = ["d"], qo = ["href"], Ko = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Go = ["d"], Wo = ["disabled", "onClick"], Zo = ["d"], Jo = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Yo = ["disabled", "onClick"], Xo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qo = ["d"], S2 = /* @__PURE__ */ z({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = G(null), u = G(null), d = k(() => r.groups.flatMap((g) => g.actions)), f = k(() => d.value.filter((g) => !g.destructive)), y = k(() => d.value.filter((g) => g.destructive)), p = {
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
    const M = k(() => d.value.length === 0);
    function $(g) {
      s("run", g);
    }
    function _(g) {
      M.value || (g.preventDefault(), i.value?.openAt(g.clientX, g.clientY));
    }
    function h(g) {
      if (g.key !== "ArrowDown" && g.key !== "ArrowUp")
        return;
      const v = Array.from(
        u.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      g.preventDefault();
      const c = v.indexOf(document.activeElement), C = g.key === "ArrowDown" ? 1 : -1, S = (c + C + v.length) % v.length;
      v[S]?.focus();
    }
    return l({ openContextMenu: _ }), (g, v) => (t(), n("div", No, [
      M.value ? w("", !0) : (t(), I(He, {
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
            (t(), n("svg", Uo, [
              o("path", {
                d: b(oe)("more-vertical")
              }, null, 8, Ho)
            ]))
          ], 8, Ro)
        ]),
        panel: L(() => [
          o("div", {
            ref_key: "items",
            ref: u,
            class: "py-0.5",
            onKeydown: h
          }, [
            (t(!0), n(P, null, D(f.value, (c) => (t(), n(P, {
              key: c.key
            }, [
              c.link ? (t(), n("a", {
                key: 0,
                href: c.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", x(c)])
              }, [
                (t(), n("svg", Ko, [
                  o("path", {
                    d: b(oe)(c.icon)
                  }, null, 8, Go)
                ])),
                U(" " + m(c.label), 1)
              ], 10, qo)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: j(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", x(c)]),
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
                    d: b(oe)(c.icon)
                  }, null, 8, Zo)
                ], 2)),
                U(" " + m(c.label), 1)
              ], 10, Wo))
            ], 64))), 128)),
            y.value.length ? (t(), n("div", Jo, [
              (t(!0), n(P, null, D(y.value, (c) => (t(), n("button", {
                key: c.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === c.key,
                onClick: (C) => $(c)
              }, [
                (t(), n("svg", Xo, [
                  o("path", {
                    d: b(oe)(c.icon ?? "trash")
                  }, null, 8, Qo)
                ])),
                U(" " + m(c.label), 1)
              ], 8, Yo))), 128))
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
}, Je = 12, Ye = 20, es = [0, 0.25, 0.5, 0.75, 1], Ct = "alxtexhpanel.appearance", we = {
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
const ts = "alxtexhpanel.appearance.vars";
function ct(e) {
  return e.theme === "dark";
}
const Ot = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function as(e) {
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
function B2(e) {
  const l = _t(), a = e ? { ...l, ...e } : l;
  if (Pe.value = a, ft(a), e)
    try {
      localStorage.setItem(Ct, JSON.stringify(a));
    } catch {
    }
}
let Qt = null;
function P2(e) {
  Qt = e;
}
let ea = {};
function ns(e) {
  if (ea = e, !(typeof document > "u") && !_t().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function ft(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = { ...as(e), ...e.primaryChosen ? {} : ea };
  l.classList.toggle("dark", ct(e));
  for (const [r, s] of Object.entries(a))
    l.style.setProperty(r, s);
  l.dataset.sidebar = e.sidebarSide, l.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      ts,
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
  return de(() => {
    jt || (jt = !0, Pe.value = _t(), ft(Pe.value));
  }), {
    appearance: k(() => Pe.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: ut,
    SURFACE_TINTS: dt,
    FONT_SIZE_MIN: Je,
    FONT_SIZE_MAX: Ye,
    RADIUS_OPTIONS: es
  };
}
const ls = { class: "flex items-center justify-between border-b px-4 py-3" }, os = { class: "flex items-center gap-2" }, ss = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, rs = { class: "flex flex-col gap-2" }, is = { class: "grid grid-cols-8 gap-2" }, us = ["title", "aria-label", "aria-pressed", "onClick"], ds = { class: "flex flex-col gap-2" }, cs = { class: "grid grid-cols-8 gap-2" }, fs = ["title", "aria-label", "aria-pressed", "onClick"], ms = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, ps = { class: "flex flex-col gap-2" }, vs = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, gs = ["aria-pressed", "aria-label", "onClick"], hs = { class: "text-sm font-semibold" }, bs = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, ys = ["onClick"], xs = { class: "flex flex-col gap-2" }, ks = { class: "flex items-center justify-between" }, $s = { class: "text-muted-foreground text-xs tabular-nums" }, ws = { class: "flex items-center gap-2" }, Cs = ["disabled"], _s = ["min", "max", "value"], Ms = ["disabled"], z2 = /* @__PURE__ */ z({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: u } = ta(), d = G(!1), f = k(() => l.value.sidebarSide === "right"), y = [
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
    ], $ = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], _ = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function h(g, v) {
      return `oklch(0.72 ${v * 3} ${g})`;
    }
    return (g, v) => (t(), n(P, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: v[0] || (v[0] = (c) => d.value = !0)
      }, [...v[7] || (v[7] = [
        pt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), I(Te, { to: "body" }, [
        N(ze, {
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
            })) : w("", !0)
          ]),
          _: 1
        }),
        N(ze, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": f.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": f.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: L(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: j(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", f.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", ls, [
                v[9] || (v[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", os, [
                  o("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: v[2] || (v[2] = //@ts-ignore
                    (...c) => b(r) && b(r)(...c))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: v[3] || (v[3] = (c) => d.value = !1)
                  }, [...v[8] || (v[8] = [
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
              o("div", ss, [
                o("section", rs, [
                  v[11] || (v[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", is, [
                    (t(!0), n(P, null, D(b(s), (c, C) => (t(), n("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: ee({ background: c.value }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": b(l).primary === C,
                      onClick: (S) => b(a)({ primary: C })
                    }, [
                      b(l).primary === C ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: ee({ color: c.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...v[10] || (v[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : w("", !0)
                    ], 12, us))), 128))
                  ])
                ]),
                o("section", ds, [
                  v[13] || (v[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", cs, [
                    (t(!0), n(P, null, D(b(i), (c, C) => (t(), n("button", {
                      key: C,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: ee({ background: h(c.hue, c.chroma) }),
                      title: c.label,
                      "aria-label": c.label,
                      "aria-pressed": b(l).surface === C,
                      onClick: (S) => b(a)({ surface: C })
                    }, [
                      b(l).surface === C ? (t(), n("svg", ms, [...v[12] || (v[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : w("", !0)
                    ], 12, fs))), 128))
                  ])
                ]),
                o("section", ps, [
                  v[14] || (v[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", vs, [
                    (t(!0), n(P, null, D(b(u), (c) => (t(), n("button", {
                      key: c,
                      type: "button",
                      class: j([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l).radius === c ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": b(l).radius === c,
                      "aria-label": `${c}rem radius`,
                      onClick: (C) => b(a)({ radius: c })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: ee({ borderRadius: `${Math.min(c, 0.5)}rem` })
                      }, null, 4),
                      U(" " + m(c), 1)
                    ], 10, gs))), 128))
                  ])
                ]),
                (t(!0), n(P, null, D([
                  { label: "Color scheme", key: "theme", options: y },
                  { label: "Card style", key: "cardStyle", options: x },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: M },
                  { label: "Content layout", key: "contentLayout", options: $ },
                  { label: "Menu style", key: "menuStyle", options: _ }
                ], (c) => (t(), n("section", {
                  key: c.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", hs, m(c.label), 1),
                  o("div", bs, [
                    (t(!0), n(P, null, D(c.options, (C) => (t(), n("button", {
                      key: String(C.value),
                      type: "button",
                      class: j([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        b(l)[c.key] === C.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (S) => b(a)({ [c.key]: C.value })
                    }, m(C.label), 11, ys))), 128))
                  ])
                ]))), 128)),
                o("section", xs, [
                  o("div", ks, [
                    v[15] || (v[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", $s, m(b(l).fontSize) + "px", 1)
                  ]),
                  o("div", ws, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize <= b(Je),
                      "aria-label": "Decrease font size",
                      onClick: v[4] || (v[4] = (c) => b(a)({ fontSize: b(l).fontSize - 1 }))
                    }, " − ", 8, Cs),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: b(Je),
                      max: b(Ye),
                      value: b(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: v[5] || (v[5] = (c) => b(a)({
                        fontSize: Number(c.target.value)
                      }))
                    }, null, 40, _s),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: b(l).fontSize >= b(Ye),
                      "aria-label": "Increase font size",
                      onClick: v[6] || (v[6] = (c) => b(a)({ fontSize: b(l).fontSize + 1 }))
                    }, " + ", 8, Ms)
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
}), Ss = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Bs = { class: "flex items-stretch" }, Ps = ["href", "aria-current"], zs = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, As = ["d"], js = { class: "w-full truncate text-center" }, Os = {
  key: 0,
  class: "flex-1"
}, Ls = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Vs = ["d"], Ds = { class: "w-full truncate text-center" }, nt = 5, A2 = /* @__PURE__ */ z({
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
    return (d, f) => (t(), n("nav", Ss, [
      o("ul", Bs, [
        (t(!0), n(P, null, D(s.value, (y) => (t(), n("li", {
          key: y.key,
          class: "flex-1"
        }, [
          o("a", {
            href: y.href,
            class: j([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              u(y.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": u(y.href) ? "page" : void 0
          }, [
            (t(), n("svg", zs, [
              o("path", {
                d: b(oe)(y.icon)
              }, null, 8, As)
            ])),
            o("span", js, m(y.title), 1)
          ], 10, Ps)
        ]))), 128)),
        i.value ? (t(), n("li", Os, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (y) => r("more"))
          }, [
            (t(), n("svg", Ls, [
              o("path", {
                d: b(oe)("more-horizontal")
              }, null, 8, Vs)
            ])),
            o("span", Ds, m(e.moreLabel), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}), Ts = ["value"], Fs = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", fe = /* @__PURE__ */ z({
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
      class: j([Fs, a.class]),
      onInput: i[0] || (i[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, Ts));
  }
}), Es = ["for"], he = /* @__PURE__ */ z({
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
    ], 10, Es));
  }
}), j2 = /* @__PURE__ */ z({
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
}), Is = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Ns = ["id", "name", "value", "disabled", "maxlength"], Rs = ["data-active"], Us = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, O2 = /* @__PURE__ */ z({
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
    de(() => {
      a.autofocus && i.value?.focus();
    });
    const u = k(
      () => Array.from({ length: a.length }, (y, p) => a.modelValue[p] ?? "")
    ), d = k(() => Math.min(a.modelValue.length, a.length - 1));
    function f(y) {
      const p = y.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, a.length));
    }
    return (y, p) => (t(), n("div", Is, [
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
      }, null, 40, Ns),
      (t(!0), n(P, null, D(u.value, (x, M) => (t(), n("div", {
        key: M,
        "data-slot": "input-otp-slot",
        "data-active": s.value && M === d.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(m(x) + " ", 1),
        s.value && M === d.value && x === "" ? (t(), n("div", Us, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : w("", !0)
      ], 8, Rs))), 128))
    ]));
  }
}), Hs = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, _e = /* @__PURE__ */ z({
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
      e.description ? (t(), n("p", Hs, m(e.description), 1)) : w("", !0)
    ], 2));
  }
});
function X(...e) {
  return Oa(ja(e));
}
function L2(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const qs = /* @__PURE__ */ z({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: j(b(X)(b(Ws)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Ks = /* @__PURE__ */ z({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: j(b(X)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Gs = /* @__PURE__ */ z({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: j(b(X)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Ws = bt(
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
), Zs = { class: "list-inside list-disc text-sm" }, V2 = /* @__PURE__ */ z({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = k(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), I(b(qs), { variant: "destructive" }, {
      default: L(() => [
        N(b(wa), { class: "size-4" }),
        N(b(Gs), null, {
          default: L(() => [
            U(m(e.title), 1)
          ]),
          _: 1
        }),
        N(b(Ks), null, {
          default: L(() => [
            o("ul", Zs, [
              (t(!0), n(P, null, D(a.value, (i, u) => (t(), n("li", { key: u }, m(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), aa = /* @__PURE__ */ z({
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
    return (i, u) => se((t(), n("input", {
      "onUpdate:modelValue": u[0] || (u[0] = (d) => pa(s) ? s.value = d : null),
      "data-slot": "input",
      class: j(
        b(X)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [be, b(s)]
    ]);
  }
}), Js = { class: "relative" }, Ys = ["aria-label"], D2 = /* @__PURE__ */ z({
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
    }), (i, u) => (t(), n("div", Js, [
      N(b(aa), te({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: b(X)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: j(
          b(X)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: u[0] || (u[0] = (d) => r.value = !r.value)
      }, [
        r.value ? (t(), I(b(Ca), {
          key: 0,
          class: "size-4"
        })) : (t(), I(b(_a), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Ys)
    ]));
  }
});
function T2(e, l) {
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
const na = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Xs = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Qs = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function er(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function tr(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function ar(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await nr(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function nr(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function lr(e) {
  if (er(e))
    throw new Error(Qs);
  if (!tr(e))
    throw new Error(na);
  if (!await ar(e))
    throw new Error(Xs);
}
const or = /* @__PURE__ */ z({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ce(e, l);
    return (i, u) => (t(), I(b(qt), te({ "data-slot": "sheet" }, b(s)), {
      default: L((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), F2 = /* @__PURE__ */ z({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Fe), te({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sr = /* @__PURE__ */ z({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, s) => (t(), I(b(yt), te({
      "data-slot": "sheet-overlay",
      class: b(X)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, b(a)), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rr = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class", "side"), i = ce(s, r);
    return (u, d) => (t(), I(b(xt), null, {
      default: L(() => [
        N(sr),
        N(b(kt), te({
          "data-slot": "sheet-content",
          class: b(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...u.$attrs, ...b(i) }), {
          default: L(() => [
            H(u.$slots, "default"),
            N(b(Fe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                N(b(ht), { class: "size-4" }),
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
}), ir = /* @__PURE__ */ z({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, s) => (t(), I(b(Kt), te({
      "data-slot": "sheet-description",
      class: b(X)("text-muted-foreground text-sm", l.class)
    }, b(a)), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E2 = /* @__PURE__ */ z({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: j(b(X)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), ur = /* @__PURE__ */ z({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: j(b(X)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), dr = /* @__PURE__ */ z({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, s) => (t(), I(b(Gt), te({
      "data-slot": "sheet-title",
      class: b(X)("text-foreground font-semibold", l.class)
    }, b(a)), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I2 = /* @__PURE__ */ z({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Wt), te({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lt = "sidebar_state", cr = 3600 * 24 * 7, fr = "16rem", mr = "18rem", pr = "3rem", vr = "b", [et, gr] = Ta("Sidebar"), hr = { class: "flex h-full w-full flex-col" }, br = ["data-state", "data-collapsible", "data-variant", "data-side"], yr = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, N2 = /* @__PURE__ */ z({
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
    return (u, d) => e.collapsible === "none" ? (t(), n("div", te({
      key: 0,
      "data-slot": "sidebar",
      class: b(X)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, u.$attrs), [
      H(u.$slots, "default")
    ], 16)) : b(a) ? (t(), I(b(or), te({
      key: 1,
      open: b(s)
    }, u.$attrs, { "onUpdate:open": b(i) }), {
      default: L(() => [
        N(b(rr), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ee({
            "--sidebar-width": b(mr)
          })
        }, {
          default: L(() => [
            N(ur, { class: "sr-only" }, {
              default: L(() => [
                N(dr, null, {
                  default: L(() => [...d[0] || (d[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                N(ir, null, {
                  default: L(() => [...d[1] || (d[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", hr, [
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
      "data-state": b(r),
      "data-collapsible": b(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: j(
          b(X)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", te({
        class: b(X)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, u.$attrs), [
        o("div", yr, [
          H(u.$slots, "default")
        ])
      ], 16)
    ], 8, br));
  }
}), R2 = /* @__PURE__ */ z({
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
        b(X)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), U2 = /* @__PURE__ */ z({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: j(b(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), H2 = /* @__PURE__ */ z({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: j(b(X)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), q2 = /* @__PURE__ */ z({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Ee), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        b(X)(
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
}), K2 = /* @__PURE__ */ z({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: j(b(X)("w-full text-sm", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), G2 = /* @__PURE__ */ z({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Ee), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        b(X)(
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
}), W2 = /* @__PURE__ */ z({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: j(b(X)("flex flex-col gap-2 p-2", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Z2 = /* @__PURE__ */ z({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(aa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: j(b(X)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), J2 = /* @__PURE__ */ z({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: j(
        b(X)(
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
}), Y2 = /* @__PURE__ */ z({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: j(b(X)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), X2 = /* @__PURE__ */ z({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Ee), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: j(
        b(X)(
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
}), Q2 = /* @__PURE__ */ z({
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
        b(X)(
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
}), xr = /* @__PURE__ */ z({
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
    const s = ce(e, l);
    return (i, u) => (t(), I(b(Fa), te({ "data-slot": "tooltip" }, b(s)), {
      default: L((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), kr = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(Ea), null, {
      default: L(() => [
        N(b(Ia), te({ "data-slot": "tooltip-content" }, { ...b(i), ...u.$attrs }, {
          class: b(X)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: L(() => [
            H(u.$slots, "default"),
            N(b(Na), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), e$ = /* @__PURE__ */ z({
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
    return (a, r) => (t(), I(b(Zt), ye(Be(l)), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $r = /* @__PURE__ */ z({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Ra), te({ "data-slot": "tooltip-trigger" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vt = /* @__PURE__ */ z({
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
    return (a, r) => (t(), I(b(Ee), te({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: b(X)(b(Cr)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), t$ = /* @__PURE__ */ z({
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
    const l = e, { isMobile: a, state: r } = et(), s = le(l, "tooltip");
    return (i, u) => e.tooltip ? (t(), I(b(xr), { key: 1 }, {
      default: L(() => [
        N(b($r), { "as-child": "" }, {
          default: L(() => [
            N(Vt, ye(Be({ ...b(s), ...i.$attrs })), {
              default: L(() => [
                H(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        N(b(kr), {
          side: "right",
          align: "center",
          hidden: b(r) !== "collapsed" || b(a)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), n(P, { key: 0 }, [
              U(m(e.tooltip), 1)
            ], 64)) : (t(), I(Ae(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), I(Vt, ye(te({ key: 0 }, { ...b(s), ...i.$attrs })), {
      default: L(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a$ = /* @__PURE__ */ z({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: j(b(X)("group/menu-item relative", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Dt = "animate-pulse rounded-md bg-primary/10", n$ = /* @__PURE__ */ z({
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
      class: j(b(X)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: j(b(X)(Dt, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : w("", !0),
      o("div", {
        class: j(b(X)(Dt, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ee({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), l$ = /* @__PURE__ */ z({
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
        b(X)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), o$ = /* @__PURE__ */ z({
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
    return (a, r) => (t(), I(b(Ee), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: j(
        b(X)(
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
}), s$ = /* @__PURE__ */ z({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: j(b(X)("group/menu-sub-item relative", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), r$ = /* @__PURE__ */ z({
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
    function d(x) {
      u.value = x, document.cookie = `${Lt}=${u.value}; path=/; max-age=${cr}`;
    }
    function f(x) {
      i.value = x;
    }
    function y() {
      return s.value ? f(!i.value) : d(!u.value);
    }
    Va("keydown", (x) => {
      x.key === vr && (x.metaKey || x.ctrlKey) && (x.preventDefault(), y());
    });
    const p = k(
      () => s.value || u.value ? "expanded" : "collapsed"
    );
    return gr({
      state: p,
      open: u,
      setOpen: d,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: y
    }), (x, M) => (t(), I(b(Zt), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", te({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": b(fr),
            "--sidebar-width-icon": b(pr)
          },
          class: b(X)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, x.$attrs), [
          H(x.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), i$ = /* @__PURE__ */ z({
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
        b(X)(
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
      H(r.$slots, "default")
    ], 2));
  }
}), wr = /* @__PURE__ */ z({
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
    return (r, s) => (t(), I(b(Ua), te({ "data-slot": "separator" }, b(a), {
      class: b(X)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), u$ = /* @__PURE__ */ z({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(wr), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: j(b(X)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), d$ = /* @__PURE__ */ z({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = et();
    return (i, u) => (t(), I(ne, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: j(b(X)("h-7 w-7", l.class)),
      onClick: b(s)
    }, {
      default: L(() => [
        b(a) || b(r) === "collapsed" ? (t(), I(b(Ma), { key: 0 })) : (t(), I(b(Sa), { key: 1 })),
        u[0] || (u[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Cr = bt(
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
), c$ = /* @__PURE__ */ z({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ce(e, l);
    return (i, u) => (t(), I(b(Ha), te({ "data-slot": "dropdown-menu" }, b(s)), {
      default: L((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), _r = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, f$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(qa), te({ "data-slot": "dropdown-menu-checkbox-item" }, b(i), {
      class: b(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", _r, [
          N(b(Jt), null, {
            default: L(() => [
              H(u.$slots, "indicator-icon", {}, () => [
                N(b(Rt), { class: "size-4" })
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
}), m$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(Ka), null, {
      default: L(() => [
        N(b(Ga), te({ "data-slot": "dropdown-menu-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(X)(
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
}), p$ = /* @__PURE__ */ z({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Wa), te({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v$ = /* @__PURE__ */ z({
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
    return (s, i) => (t(), I(b(Za), te({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, b(r), {
      class: b(X)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: L(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), g$ = /* @__PURE__ */ z({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = le(l, "class", "inset"), r = xe(a);
    return (s, i) => (t(), I(b(Ja), te({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, b(r), {
      class: b(X)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), h$ = /* @__PURE__ */ z({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = ce(e, l);
    return (i, u) => (t(), I(b(Ya), te({ "data-slot": "dropdown-menu-radio-group" }, b(s)), {
      default: L(() => [
        H(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mr = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, b$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(Xa), te({ "data-slot": "dropdown-menu-radio-item" }, b(i), {
      class: b(X)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", Mr, [
          N(b(Jt), null, {
            default: L(() => [
              H(u.$slots, "indicator-icon", {}, () => [
                N(b(Ba), { class: "size-2 fill-current" })
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
}), y$ = /* @__PURE__ */ z({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, s) => (t(), I(b(Qa), te({ "data-slot": "dropdown-menu-separator" }, b(a), {
      class: b(X)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), x$ = /* @__PURE__ */ z({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: j(b(X)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), k$ = /* @__PURE__ */ z({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ce(e, l);
    return (i, u) => (t(), I(b(en), te({ "data-slot": "dropdown-menu-sub" }, b(s)), {
      default: L((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), $$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(tn), te({ "data-slot": "dropdown-menu-sub-content" }, b(i), {
      class: b(X)(
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
}), w$ = /* @__PURE__ */ z({
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
    return (s, i) => (t(), I(b(an), te({ "data-slot": "dropdown-menu-sub-trigger" }, b(r), {
      "data-inset": e.inset ? "" : void 0,
      class: b(X)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        H(s.$slots, "default"),
        N(b(Ut), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), C$ = /* @__PURE__ */ z({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = xe(e);
    return (r, s) => (t(), I(b(nn), te({ "data-slot": "dropdown-menu-trigger" }, b(a)), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _$ = /* @__PURE__ */ z({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(ln), {
      "data-slot": "avatar",
      class: j(b(X)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), M$ = /* @__PURE__ */ z({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, s) => (t(), I(b(on), te({ "data-slot": "avatar-fallback" }, b(a), {
      class: b(X)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S$ = /* @__PURE__ */ z({
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
    return (a, r) => (t(), I(b(sn), te({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B$ = /* @__PURE__ */ z({
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
}), P$ = /* @__PURE__ */ z({
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
      class: j(b(X)("flex size-9 items-center justify-center", l.class))
    }, [
      H(a.$slots, "default", {}, () => [
        N(b(Pa), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), z$ = /* @__PURE__ */ z({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: j(b(X)("inline-flex items-center gap-1.5", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), A$ = /* @__PURE__ */ z({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Ee), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: j(b(X)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), j$ = /* @__PURE__ */ z({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: j(
        b(X)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), O$ = /* @__PURE__ */ z({
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
      class: j(b(X)("text-foreground font-normal", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), L$ = /* @__PURE__ */ z({
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
      class: j(b(X)("[&>svg]:size-3.5", l.class))
    }, [
      H(a.$slots, "default", {}, () => [
        N(b(Ut))
      ])
    ], 2));
  }
}), Sr = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Br = /* @__PURE__ */ z({
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
    return (s, i) => (t(), n("div", Sr, [
      N(b(rn), te({ "data-slot": "navigation-menu-viewport" }, b(r), {
        class: b(X)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), V$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class", "viewport"), i = ce(s, r);
    return (u, d) => (t(), I(b(un), te({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, b(i), {
      class: b(X)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: L((f) => [
        H(u.$slots, "default", ye(Be(f))),
        e.viewport ? (t(), I(Br, { key: 0 })) : w("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), D$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(dn), te({ "data-slot": "navigation-menu-content" }, b(i), {
      class: b(X)(
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
}), T$ = /* @__PURE__ */ z({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (s, i) => (t(), I(b(cn), te({ "data-slot": "navigation-menu-indicator" }, b(r), {
      class: b(X)(
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
}), F$ = /* @__PURE__ */ z({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, s) => (t(), I(b(fn), te({ "data-slot": "navigation-menu-item" }, b(a), {
      class: b(X)("relative", l.class)
    }), {
      default: L(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E$ = /* @__PURE__ */ z({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(mn), te({ "data-slot": "navigation-menu-link" }, b(i), {
      class: b(X)(
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
}), I$ = /* @__PURE__ */ z({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (s, i) => (t(), I(b(pn), te({ "data-slot": "navigation-menu-list" }, b(r), {
      class: b(X)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N$ = /* @__PURE__ */ z({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (s, i) => (t(), I(b(vn), te({ "data-slot": "navigation-menu-trigger" }, b(r), {
      class: b(X)(b(Pr)(), "group", l.class)
    }), {
      default: L(() => [
        H(s.$slots, "default"),
        N(b(za), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pr = bt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), R$ = /* @__PURE__ */ z({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ce(e, l);
    return (i, u) => (t(), I(b(qt), te({ "data-slot": "dialog" }, b(s)), {
      default: L((d) => [
        H(i.$slots, "default", ye(Be(d)))
      ]),
      _: 3
    }, 16));
  }
}), U$ = /* @__PURE__ */ z({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Fe), te({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zr = /* @__PURE__ */ z({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, s) => (t(), I(b(yt), te({ "data-slot": "dialog-overlay" }, b(a), {
      class: b(X)(
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
}), H$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(xt), null, {
      default: L(() => [
        N(zr),
        N(b(kt), te({ "data-slot": "dialog-content" }, { ...u.$attrs, ...b(i) }, {
          class: b(X)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: L(() => [
            H(u.$slots, "default"),
            e.showCloseButton ? (t(), I(b(Fe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                N(b(ht)),
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
}), q$ = /* @__PURE__ */ z({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (s, i) => (t(), I(b(Kt), te({ "data-slot": "dialog-description" }, b(r), {
      class: b(X)("text-muted-foreground text-sm", l.class)
    }), {
      default: L(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K$ = /* @__PURE__ */ z({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: j(b(X)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      H(a.$slots, "default"),
      e.showCloseButton ? (t(), I(b(Fe), {
        key: 0,
        "as-child": ""
      }, {
        default: L(() => [
          N(ne, { variant: "outline" }, {
            default: L(() => [...r[0] || (r[0] = [
              U(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : w("", !0)
    ], 2));
  }
}), G$ = /* @__PURE__ */ z({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: j(b(X)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), W$ = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(xt), null, {
      default: L(() => [
        N(b(yt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            N(b(kt), te({
              class: b(X)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...u.$attrs, ...b(i) }, {
              onPointerDownOutside: d[0] || (d[0] = (f) => {
                const y = f.detail.originalEvent, p = y.target;
                (y.offsetX > p.clientWidth || y.offsetY > p.clientHeight) && f.preventDefault();
              })
            }), {
              default: L(() => [
                H(u.$slots, "default"),
                N(b(Fe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    N(b(ht), { class: "w-4 h-4" }),
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
}), Z$ = /* @__PURE__ */ z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class"), r = xe(a);
    return (s, i) => (t(), I(b(Gt), te({ "data-slot": "dialog-title" }, b(r), {
      class: b(X)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J$ = /* @__PURE__ */ z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Wt), te({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Y$ = /* @__PURE__ */ z({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = le(l, "class");
    return (r, s) => (t(), I(b(gn), te({ "data-slot": "label" }, b(a), {
      class: b(X)(
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
}), X$ = /* @__PURE__ */ z({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), I(b(Aa), {
      role: "status",
      "aria-label": "Loading",
      class: j(b(X)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), Q$ = /* @__PURE__ */ z({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: j(
        b(X)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), ew = /* @__PURE__ */ z({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: j(b(X)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), tw = /* @__PURE__ */ z({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: j(b(X)("px-6", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), aw = /* @__PURE__ */ z({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: j(b(X)("text-muted-foreground text-sm", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), nw = /* @__PURE__ */ z({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: j(b(X)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), lw = /* @__PURE__ */ z({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: j(
        b(X)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), ow = /* @__PURE__ */ z({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: j(b(X)("leading-none font-semibold", l.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Ar = /* @__PURE__ */ z({
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
    const a = e, r = l, s = le(a, "class"), i = ce(s, r);
    return (u, d) => (t(), I(b(hn), te({ "data-slot": "checkbox" }, b(i), {
      class: b(X)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L((f) => [
        N(b(bn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            H(u.$slots, "default", ye(Be(f)), () => [
              N(b(Rt), { class: "size-3.5" })
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
    const a = e, r = l, s = ce(le(a, "class"), r);
    return (i, u) => (t(), I(b(yn), te({ "data-slot": "switch" }, b(s), {
      class: b(X)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L(() => [
        N(b(xn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), jr = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Or = { class: "flex items-start gap-3" }, Lr = { class: "min-w-0 flex-1" }, Vr = { class: "text-foreground text-sm font-medium" }, Dr = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, sw = /* @__PURE__ */ z({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = G(!1), u = G(null), d = G(0);
    ga((y) => (console.error(`[PkBoundary] ${r.label} failed to render`, y), i.value = !0, u.value = y instanceof Error ? y.message : null, s("error", y), !1));
    function f() {
      i.value = !1, u.value = null, d.value++;
    }
    return l({ retry: f }), (y, p) => (t(), n("div", {
      class: j(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", jr, [
        o("div", Or, [
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
          o("div", Lr, [
            o("p", Vr, m(e.label) + " could not be displayed ", 1),
            u.value ? (t(), n("p", Dr, m(u.value), 1)) : w("", !0),
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
              U(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? w("", !0) : H(y.$slots, "default", { key: d.value })
    ], 2));
  }
}), Tr = { class: "bg-card rounded-lg border" }, Fr = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Er = { class: "min-w-0" }, Ir = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Nr = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Rr = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Ur = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, rw = /* @__PURE__ */ z({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Tr, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Fr, [
        o("div", Er, [
          H(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Ir, m(e.title), 1)) : w("", !0),
            e.description ? (t(), n("p", Nr, m(e.description), 1)) : w("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Rr, [
          H(l.$slots, "actions")
        ])) : w("", !0)
      ])) : w("", !0),
      o("div", {
        class: j(e.padded ? "p-4" : "")
      }, [
        H(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", Ur, [
        H(l.$slots, "footer")
      ])) : w("", !0)
    ]));
  }
}), la = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function iw() {
  const e = Yt(), l = k(() => e.props.panel?.pageFooter === !0);
  return Nt(la, l), l;
}
const Hr = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, qr = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Kr = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, uw = /* @__PURE__ */ z({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = Yt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = k(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = k(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), u = gt(la, k(() => !1)), d = k(() => !l.host && b(u) === !0);
    return (f, y) => d.value ? w("", !0) : (t(), n("footer", Hr, [
      o("div", qr, [
        o("p", null, "© " + m(b(r)) + " " + m(s.value), 1),
        i.value.length ? (t(), n("nav", Kr, [
          (t(!0), n(P, null, D(i.value, (p) => (t(), I(b(kn), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              U(m(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : w("", !0)
      ])
    ]));
  }
}), Gr = { class: "flex shrink-0 flex-col items-center" }, Wr = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, dw = /* @__PURE__ */ z({
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
    return (i, u) => (t(), n("div", Gr, [
      o("div", {
        class: j(["relative box-content shadow-2xl", r.value]),
        style: ee({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Wr)) : w("", !0),
        o("div", {
          class: j(["size-full overflow-hidden bg-white", s.value])
        }, [
          H(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(P, { key: 0 }, [
        o("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: ee({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        o("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: ee({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : w("", !0)
    ]));
  }
}), Zr = { class: "flex items-center gap-2 overflow-x-auto" }, Jr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xr = { class: "flex flex-col" }, Qr = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, ei = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, ti = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, ai = /* @__PURE__ */ z({
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
    return (f, y) => (t(), n("ol", Zr, [
      (t(!0), n(P, null, D(e.steps, (p, x) => (t(), n("li", {
        key: x,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), I(Ae(e.interactive ? "button" : "div"), te({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(x)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: x > e.activeStep } : {}, {
          onClick: (M) => e.interactive && x <= e.activeStep && r("update:activeStep", x)
        }), {
          default: L(() => [
            o("span", {
              class: j(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(x)])
            }, [
              d(x) ? (t(), n("svg", Jr, [...y[0] || (y[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : u(x) ? (t(), n("svg", Yr, [...y[1] || (y[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(P, { key: 2 }, [
                U(m(x + 1), 1)
              ], 64))
            ], 2),
            o("span", Xr, [
              o("span", null, m(p.label), 1),
              p.description ? (t(), n("span", Qr, m(p.description), 1)) : w("", !0)
            ]),
            e.hasError(x) ? (t(), n("span", ei)) : w("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        x < e.steps.length - 1 ? (t(), n("span", ti)) : w("", !0)
      ]))), 128))
    ]));
  }
}), Ge = /* @__PURE__ */ new Map();
function $e(e, l) {
  Ge.set(e, l);
}
function ni(e) {
  return Ge.get(e);
}
function cw(e) {
  return Ge.has(e);
}
function fw() {
  return [...Ge.keys()].sort();
}
function mw() {
  Ge.clear();
}
const li = ["aria-expanded"], oi = ["aria-label", "onClick"], si = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, ri = { class: "ml-auto flex shrink-0 items-center gap-1" }, ii = {
  key: 0,
  class: "border-b p-1"
}, ui = ["placeholder"], di = { class: "max-h-60 overflow-y-auto p-1" }, ci = ["aria-selected", "onMouseenter", "onClick"], fi = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Mt = /* @__PURE__ */ z({
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
    const a = e, r = l, s = G(null), i = G(null), u = G(null), d = G(!1), f = G(""), y = G(0), p = G({ top: 0, left: 0, width: 0 }), x = k(
      () => a.modelValue.map(
        (E) => a.options.find((A) => A.value === E) ?? {
          value: E,
          label: String(E)
        }
      ).filter(Boolean)
    ), M = k(() => a.searchable ?? a.options.length > 6), $ = k(() => {
      const E = new Set(a.modelValue), A = f.value.trim().toLowerCase();
      return a.options.filter((T) => !E.has(T.value)).filter((T) => A ? T.label.toLowerCase().includes(A) : !0);
    }), _ = k(() => a.max !== null && a.modelValue.length >= a.max);
    function h() {
      const E = s.value, A = i.value;
      if (!E || !A)
        return;
      const T = E.getBoundingClientRect(), Y = A.getBoundingClientRect(), F = 8;
      let V = T.bottom + 4;
      V + Y.height > window.innerHeight - F && T.top - Y.height - 4 > F && (V = T.top - Y.height - 4), p.value = {
        top: V,
        left: Math.min(Math.max(F, T.left), window.innerWidth - T.width - F),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: T.width
      };
    }
    async function g() {
      a.disabled || d.value || (d.value = !0, f.value = "", y.value = 0, await Ce(), h(), u.value?.focus());
    }
    function v() {
      d.value = !1, f.value = "";
    }
    function c() {
      d.value ? v() : g();
    }
    function C(E) {
      _.value || (r("update:modelValue", [...a.modelValue, E.value]), f.value = "", y.value = 0, Ce(() => {
        h(), u.value?.focus();
      }));
    }
    function S(E) {
      r(
        "update:modelValue",
        a.modelValue.filter((A) => A !== E)
      ), Ce(h);
    }
    function B() {
      r("update:modelValue", []), Ce(h);
    }
    function K(E) {
      if (!a.disabled) {
        if (E.key === "Escape" && d.value) {
          E.stopPropagation(), v();
          return;
        }
        if (E.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          S(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!d.value && (E.key === "ArrowDown" || E.key === "Enter")) {
          E.preventDefault(), g();
          return;
        }
        if (d.value) {
          if (E.key === "ArrowDown")
            E.preventDefault(), y.value = Math.min(y.value + 1, $.value.length - 1);
          else if (E.key === "ArrowUp")
            E.preventDefault(), y.value = Math.max(y.value - 1, 0);
          else if (E.key === "Enter") {
            E.preventDefault();
            const A = $.value[y.value];
            A && C(A);
          }
        }
      }
    }
    function R(E) {
      if (!d.value)
        return;
      const A = E.target;
      s.value?.contains(A) || i.value?.contains(A) || v();
    }
    function Z() {
      d.value && h();
    }
    return re($, (E) => {
      y.value > E.length - 1 && (y.value = Math.max(0, E.length - 1));
    }), de(() => {
      document.addEventListener("pointerdown", R), window.addEventListener("scroll", Z, !0), window.addEventListener("resize", Z);
    }), me(() => {
      document.removeEventListener("pointerdown", R), window.removeEventListener("scroll", Z, !0), window.removeEventListener("resize", Z);
    }), (E, A) => (t(), n("div", {
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
        onClick: c
      }, [
        (t(!0), n(P, null, D(x.value, (T) => (t(), n("span", {
          key: T.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          U(m(T.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${T.label}`,
            onClick: ie((Y) => S(T.value), ["stop"])
          }, [...A[1] || (A[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, oi)
        ]))), 128)),
        x.value.length === 0 ? (t(), n("span", si, m(e.placeholder), 1)) : w("", !0),
        o("span", ri, [
          x.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ie(B, ["stop"])
          }, " Clear ")) : w("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: j(["text-muted-foreground size-4 transition-transform", d.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...A[2] || (A[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, li),
      (t(), I(Te, { to: "body" }, [
        N(ze, {
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
              style: ee({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              M.value ? (t(), n("div", ii, [
                se(o("input", {
                  ref_key: "searchInput",
                  ref: u,
                  "onUpdate:modelValue": A[0] || (A[0] = (T) => f.value = T),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: K
                }, null, 40, ui), [
                  [be, f.value]
                ])
              ])) : w("", !0),
              o("div", di, [
                (t(!0), n(P, null, D($.value, (T, Y) => (t(), n("button", {
                  key: T.value,
                  type: "button",
                  class: j(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", Y === y.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": Y === y.value,
                  onMouseenter: (F) => y.value = Y,
                  onClick: (F) => C(T)
                }, m(T.label), 43, ci))), 128)),
                $.value.length === 0 ? (t(), n("p", fi, [
                  _.value ? (t(), n(P, { key: 0 }, [
                    U("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(P, { key: 1 }, [
                    U("Nothing matches “" + m(f.value) + "”.", 1)
                  ], 64)) : (t(), n(P, { key: 2 }, [
                    U("Everything is selected.")
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
}), mi = ["accept", "disabled"], pi = { class: "text-sm font-medium" }, vi = { key: 0 }, gi = { key: 1 }, hi = { class: "text-muted-foreground text-xs" }, bi = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, yi = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, xi = ["src"], ki = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, $i = { class: "min-w-0 flex-1" }, wi = { class: "block truncate text-sm font-medium" }, Ci = { class: "text-muted-foreground text-xs" }, _i = ["href"], Mi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, oa = /* @__PURE__ */ z({
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
    const a = e, r = l, s = G(null), i = G(!1), u = G(null), d = G(null), f = G(null), y = k(() => a.accept.map((C) => `.${C}`).join(",")), p = k(() => f.value ?? a.modelValue?.url ?? null), x = k(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${M(a.maxKilobytes * 1024)}`);
    function M(C) {
      if (!C)
        return "";
      const S = ["B", "KB", "MB", "GB"];
      let B = C, K = 0;
      for (; B >= 1024 && K < S.length - 1; )
        B /= 1024, K++;
      return `${B.toFixed(B < 10 && K > 0 ? 1 : 0)} ${S[K]}`;
    }
    function $(C) {
      return C.split(".").pop()?.toLowerCase() ?? "";
    }
    function _(C) {
      return a.accept.length && !a.accept.includes($(C.name)) ? `${$(C.name).toUpperCase() || "That"} files are not accepted here.` : C.size > a.maxKilobytes * 1024 ? `That file is ${M(C.size)}; the limit is ${M(a.maxKilobytes * 1024)}.` : null;
    }
    async function h(C) {
      const S = C?.[0];
      if (!(!S || a.disabled) && (d.value = _(S), !d.value)) {
        g(), a.image && S.type.startsWith("image/") && (f.value = URL.createObjectURL(S)), u.value = 0;
        try {
          const B = await a.upload(S, (K) => {
            u.value = K;
          });
          r("update:modelValue", B);
        } catch (B) {
          d.value = B instanceof Error ? B.message : "The upload failed.", g();
        } finally {
          u.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function g() {
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function v() {
      const C = a.modelValue;
      g(), d.value = null, r("update:modelValue", null), C && !C.url && a.discard && await a.discard(C.value).catch(() => {
      });
    }
    function c(C) {
      i.value = !1, h(C.dataTransfer?.files ?? null);
    }
    return (C, S) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", yi, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, xi)) : (t(), n("span", ki, m($(e.modelValue.name) || "file"), 1)),
        o("span", $i, [
          o("span", wi, m(e.modelValue.name), 1),
          o("span", Ci, [
            U(m(M(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(P, { key: 0 }, [
              S[4] || (S[4] = U(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, _i)
            ], 64)) : (t(), n(P, { key: 1 }, [
              U(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: v
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
        onDragover: S[1] || (S[1] = ie((B) => i.value = !0, ["prevent"])),
        onDragleave: S[2] || (S[2] = ie((B) => i.value = !1, ["prevent"])),
        onDrop: ie(c, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: y.value,
          disabled: e.disabled,
          onChange: S[0] || (S[0] = (B) => h(B.target.files))
        }, null, 40, mi),
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
        o("span", pi, [
          u.value === null ? (t(), n("span", vi, "Drop a file or click to choose")) : (t(), n("span", gi, "Uploading…"))
        ]),
        o("span", hi, m(x.value), 1),
        u.value !== null ? (t(), n("span", bi, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ee({ width: `${u.value}%` })
          }, null, 4)
        ])) : w("", !0)
      ], 34)),
      d.value ? (t(), n("p", Mi, m(d.value), 1)) : w("", !0)
    ]));
  }
}), Si = { class: "flex flex-col gap-2" }, Bi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Pi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, zi = { class: "flex flex-col gap-1" }, Ai = ["onUpdate:modelValue", "disabled", "aria-label"], ji = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Oi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Li = ["onUpdate:modelValue", "disabled", "aria-label"], Vi = ["disabled", "aria-label", "onClick"], Di = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Ti = { class: "flex items-center gap-3" }, Fi = ["disabled"], Ei = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Ii = /* @__PURE__ */ z({
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
    function d(h) {
      return h ? Object.entries(h).map(([g, v]) => ({
        uid: i++,
        key: g,
        value: v ?? ""
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
      for (const g of u.value) {
        const v = g.key.trim();
        v !== "" && (h[v] = g.value);
      }
      return Object.keys(h).length ? h : null;
    }
    function y() {
      r("update:modelValue", f());
    }
    const p = k(() => {
      const h = /* @__PURE__ */ new Map();
      for (const g of u.value) {
        const v = g.key.trim();
        v !== "" && h.set(v, (h.get(v) ?? 0) + 1);
      }
      return new Set([...h.entries()].filter(([, g]) => g > 1).map(([g]) => g));
    }), x = k(
      () => new Set(
        u.value.map((h) => h.key.trim()).filter((h) => h !== "" && !s.test(h))
      )
    ), M = k(() => a.maxPairs !== null && u.value.length >= a.maxPairs);
    function $() {
      M.value || a.disabled || u.value.push({ uid: i++, key: "", value: "" });
    }
    function _(h) {
      u.value = u.value.filter((g) => g.uid !== h), y();
    }
    return (h, g) => (t(), n("div", Si, [
      u.value.length ? (t(), n("div", Bi, [
        o("div", Pi, [
          o("span", null, m(e.keyLabel), 1),
          o("span", null, m(e.valueLabel), 1),
          g[0] || (g[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(P, null, D(u.value, (v) => (t(), n("div", {
          key: v.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", zi, [
            se(o("input", {
              "onUpdate:modelValue": (c) => v.key = c,
              type: "text",
              class: j([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(v.key.trim()) || x.value.has(v.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: y
            }, null, 42, Ai), [
              [be, v.key]
            ]),
            x.value.has(v.key.trim()) ? (t(), n("p", ji, " Letters, numbers, underscores and dashes only. ")) : p.value.has(v.key.trim()) ? (t(), n("p", Oi, " Used twice - only the last value will be saved. ")) : w("", !0)
          ]),
          se(o("input", {
            "onUpdate:modelValue": (c) => v.value = c,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: y
          }, null, 40, Li), [
            [be, v.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${v.key || "this entry"}`,
            onClick: (c) => _(v.uid)
          }, [...g[1] || (g[1] = [
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
          ])], 8, Vi)
        ]))), 128))
      ])) : (t(), n("p", Di, " Nothing here yet. ")),
      o("div", Ti, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || M.value,
          onClick: $
        }, [
          g[2] || (g[2] = o("svg", {
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
          U(" Add " + m(e.keyLabel.toLowerCase()), 1)
        ], 8, Fi),
        e.maxPairs !== null ? (t(), n("p", Ei, m(u.value.length) + " of " + m(e.maxPairs), 1)) : w("", !0)
      ])
    ]));
  }
}), Ni = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Ri = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Ui = ["disabled", "title", "aria-label", "onClick"], Hi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qi = ["d"], Ki = ["disabled"], Gi = ["contenteditable", "data-placeholder"], Wi = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Zi = /* @__PURE__ */ z({
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
    ], d = k(() => u.filter((_) => a.toolbar.includes(_.id))), f = k(() => a.toolbar.includes("link")), y = G(0);
    function p() {
      const _ = s.value?.innerHTML ?? "", h = (s.value?.innerText ?? "").trim();
      y.value = h.length;
      const g = h === "" ? null : _;
      i = g, r("update:modelValue", g);
    }
    function x(_) {
      a.disabled || (s.value?.focus(), document.execCommand(_.command, !1, _.argument), p());
    }
    function M() {
      if (a.disabled)
        return;
      const _ = window.prompt("Link address");
      _ && (s.value?.focus(), document.execCommand("createLink", !1, _), p());
    }
    function $(_) {
      _.preventDefault();
      const h = _.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, h), p();
    }
    return de(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", y.value = s.value.innerText.trim().length);
    }), re(
      () => a.modelValue,
      (_) => {
        _ !== i && s.value && (s.value.innerHTML = _ ?? "", y.value = s.value.innerText.trim().length);
      }
    ), (_, h) => (t(), n("div", Ni, [
      o("div", Ri, [
        (t(!0), n(P, null, D(d.value, (g) => (t(), n("button", {
          key: g.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: g.label,
          "aria-label": g.label,
          onMousedown: h[0] || (h[0] = ie(() => {
          }, ["prevent"])),
          onClick: (v) => x(g)
        }, [
          (t(), n("svg", Hi, [
            o("path", {
              d: g.path
            }, null, 8, qi)
          ]))
        ], 40, Ui))), 128)),
        f.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: h[1] || (h[1] = ie(() => {
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
        ])], 40, Ki)) : w("", !0)
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
      }, null, 42, Gi),
      e.maxLength !== null ? (t(), n("div", Wi, m(y.value) + " / " + m(e.maxLength), 1)) : w("", !0)
    ]));
  }
}), Ji = /* @__PURE__ */ $t(Zi, [["__scopeId", "data-v-32c63bc7"]]), Yi = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, Xi = ["for"], Qi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, eu = {
  key: 7,
  class: "flex flex-col gap-2"
}, tu = ["id", "value", "disabled"], au = ["value"], nu = {
  key: 0,
  class: "relative"
}, lu = ["disabled"], ou = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, su = { class: "max-h-56 overflow-y-auto p-1" }, ru = ["onClick"], iu = {
  key: 8,
  class: "relative"
}, uu = ["disabled", "aria-invalid"], du = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, cu = { class: "max-h-56 overflow-y-auto p-1" }, fu = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, mu = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, pu = ["onClick"], vu = ["id", "value", "disabled", "aria-invalid"], gu = ["value"], hu = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, bu = { class: "text-muted-foreground" }, yu = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, xu = { class: "text-muted-foreground" }, ku = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], $u = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], wu = {
  key: 14,
  class: "flex flex-wrap gap-1.5"
}, Cu = ["disabled", "aria-pressed", "onClick"], _u = {
  key: 15,
  class: "flex flex-wrap gap-1.5"
}, Mu = ["title", "disabled", "onClick"], Su = ["href"], Bu = {
  key: 17,
  class: "text-destructive text-xs",
  role: "alert"
}, Pu = {
  key: 18,
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
    const a = At(() => import("./PkRepeater-J84jGe3T.js")), r = At(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, u = G(!1), d = G(""), f = G([]), y = G(!1), p = G(null);
    let x;
    re(d, (Z) => {
      s.searchOptions && (clearTimeout(x), y.value = !0, x = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(Z);
        } catch {
        } finally {
          y.value = !1;
        }
      }, 200));
    });
    async function M() {
      if (!(s.processing || s.field.disabled) && (u.value = !0, f.value.length === 0 && s.searchOptions)) {
        y.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          y.value = !1;
        }
      }
    }
    function $(Z) {
      p.value = Z.label, i("change", Z.value), u.value = !1, d.value = "";
    }
    function _() {
      p.value = null, i("change", null);
    }
    const h = gt("panelPicker", null), g = k(() => {
      if (!s.field.tableSelect || !h?.base)
        return;
      const Z = h.returnUrl || "/";
      return `${h.base}/pick/${s.field.key}?return=${encodeURIComponent(Z)}`;
    }), v = k(() => s.field.morphTo ?? []), c = k(() => {
      const Z = s.value;
      return Z && typeof Z == "object" && !Array.isArray(Z) ? Z : { type: void 0, id: void 0 };
    });
    function C(Z) {
      i("change", { type: Z || null, id: null });
    }
    function S(Z) {
      i("change", { type: c.value.type ?? null, id: Z });
    }
    function B(Z) {
      p.value = Z.label, S(Z.value), u.value = !1, d.value = "";
    }
    me(() => clearTimeout(x));
    const K = k(() => ni(s.field.type));
    function R(Z) {
      const E = document.getElementById(`f-${s.field.key}`);
      if (!(E instanceof HTMLTextAreaElement) && !(E instanceof HTMLInputElement))
        return;
      const A = E.selectionStart ?? E.value.length, T = E.selectionEnd ?? A;
      E.setRangeText(Z, A, T, "end"), E.dispatchEvent(new Event("input", { bubbles: !0 })), E.focus();
    }
    return (Z, E) => e.field.type === "hidden" ? (t(), n(P, { key: 0 }, [], 64)) : (t(), n("div", Yi, [
      o("label", {
        for: `f-${e.field.key}`,
        class: j(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
      }, [
        U(m(e.field.label) + " ", 1),
        e.field.required ? (t(), n("span", Qi, "*")) : w("", !0)
      ], 10, Xi),
      K.value ? (t(), I(Ae(K.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": E[0] || (E[0] = (A) => i("change", A))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), I(oa, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": E[1] || (E[1] = (A) => i("change", A))
      }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), I(b(a), {
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
        "onUpdate:modelValue": E[2] || (E[2] = (A) => i("change", A))
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), I(b(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": E[3] || (E[3] = (A) => i("change", A))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), I(Ji, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": E[4] || (E[4] = (A) => i("change", A))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), I(Ii, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": E[5] || (E[5] = (A) => i("change", A))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), I(Mt, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": E[6] || (E[6] = (A) => i("change", A))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : v.value.length ? (t(), n("div", eu, [
        o("select", {
          id: `f-${e.field.key}-type`,
          value: c.value.type ?? "",
          disabled: e.field.disabled || e.processing,
          class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          onChange: E[7] || (E[7] = (A) => C(A.target.value))
        }, [
          E[17] || (E[17] = o("option", { value: "" }, "Type", -1)),
          (t(!0), n(P, null, D(v.value, (A) => (t(), n("option", {
            key: A.value,
            value: A.value
          }, m(A.label), 9, au))), 128))
        ], 40, tu),
        c.value.type && e.searchOptions ? (t(), n("div", nu, [
          o("button", {
            type: "button",
            class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.field.disabled || e.processing,
            onClick: M
          }, [
            o("span", {
              class: j(p.value || c.value.id ? "" : "text-muted-foreground")
            }, m(p.value ?? (c.value.id ? String(c.value.id) : "Search…")), 3)
          ], 8, lu),
          u.value ? (t(), n("div", ou, [
            se(o("input", {
              "onUpdate:modelValue": E[8] || (E[8] = (A) => d.value = A),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [be, d.value]
            ]),
            o("div", su, [
              (t(!0), n(P, null, D(f.value, (A) => (t(), n("button", {
                key: String(A.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (T) => B(A)
              }, m(A.label), 9, ru))), 128))
            ])
          ])) : w("", !0),
          u.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: E[9] || (E[9] = (A) => u.value = !1)
          })) : w("", !0)
        ])) : w("", !0)
      ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", iu, [
        o("button", {
          type: "button",
          class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          onClick: M
        }, [
          o("span", {
            class: j(p.value || e.value ? "" : "text-muted-foreground")
          }, m(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), n("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: ie(_, ["stop"])
          }, " ✕ ")) : w("", !0)
        ], 8, uu),
        u.value ? (t(), n("div", du, [
          se(o("input", {
            "onUpdate:modelValue": E[10] || (E[10] = (A) => d.value = A),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [be, d.value]
          ]),
          o("div", cu, [
            y.value ? (t(), n("p", fu, " Searching… ")) : f.value.length === 0 ? (t(), n("p", mu, " No matches ")) : w("", !0),
            (t(!0), n(P, null, D(f.value, (A) => (t(), n("button", {
              key: String(A.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (T) => $(A)
            }, m(A.label), 9, pu))), 128))
          ])
        ])) : w("", !0),
        u.value ? (t(), n("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: E[11] || (E[11] = (A) => u.value = !1)
        })) : w("", !0)
      ])) : e.field.type === "select" ? (t(), n("select", {
        key: 9,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onChange: E[12] || (E[12] = (A) => i("change", A.target.value || null))
      }, [
        E[18] || (E[18] = o("option", { value: "" }, "-", -1)),
        (t(!0), n(P, null, D(e.options, (A) => (t(), n("option", {
          key: String(A.value),
          value: A.value
        }, m(A.label), 9, gu))), 128))
      ], 40, vu)) : e.field.type === "toggle" ? (t(), n("label", hu, [
        N(b(Ve), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": E[13] || (E[13] = (A) => i("change", A))
        }, null, 8, ["id", "model-value", "disabled"]),
        o("span", bu, m(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), n("label", yu, [
        N(b(Ar), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": E[14] || (E[14] = (A) => i("change", A === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        o("span", xu, m(e.field.help ?? e.field.label), 1)
      ])) : e.field.type === "textarea" ? (t(), n("textarea", {
        key: 12,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        rows: e.field.rows ?? 3,
        placeholder: e.field.placeholder,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: E[15] || (E[15] = (A) => i("change", A.target.value))
      }, null, 40, ku)) : (t(), n("input", {
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
        onInput: E[16] || (E[16] = (A) => i("change", A.target.value))
      }, null, 40, $u)),
      e.field.type === "number" && e.field.presets?.length ? (t(), n("div", wu, [
        (t(!0), n(P, null, D(e.field.presets, (A) => (t(), n("button", {
          key: A,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: j([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == A ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == A
          ),
          onClick: (T) => i("change", String(A))
        }, m(A), 11, Cu))), 128))
      ])) : w("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", _u, [
        (t(!0), n(P, null, D(e.field.chips, (A, T) => (t(), n("button", {
          key: T,
          type: "button",
          title: A,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (Y) => R(String(T))
        }, m(T), 9, Mu))), 128))
      ])) : w("", !0),
      g.value ? (t(), n("a", {
        key: 16,
        href: g.value,
        class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
      }, " Browse ", 8, Su)) : w("", !0),
      e.error ? (t(), n("p", Bu, m(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", Pu, m(e.field.help), 1)) : w("", !0)
    ]));
  }
}), zu = { class: "flex flex-col gap-2" }, Au = { class: "min-w-0 flex-1" }, ju = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Ou = ["disabled", "aria-label", "onClick"], Lu = ["disabled", "aria-label", "onClick"], Vu = ["disabled", "title", "aria-label", "onClick"], Du = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Tu = ["disabled"], pw = /* @__PURE__ */ z({
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
    function u(v) {
      return Array.isArray(v) ? v.map((c) => ({ uid: s++, data: { ...c } })) : [];
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
        const C = {};
        let S = !1;
        for (const B of a.children) {
          const K = c.data[B.key] ?? null;
          C[B.key] = K, K !== null && K !== "" && !(Array.isArray(K) && K.length === 0) && (S = !0);
        }
        S && v.push(C);
      }
      return v.length ? v : null;
    }
    function f() {
      r("update:modelValue", d());
    }
    const y = k(() => a.maxItems !== null && i.value.length >= a.maxItems), p = k(() => a.minItems !== null && i.value.length <= a.minItems), x = k(() => a.children.length === 1);
    function M() {
      if (y.value || a.disabled)
        return;
      const v = {};
      for (const c of a.children)
        v[c.key] = null;
      i.value.push({ uid: s++, data: v });
    }
    function $(v) {
      i.value = i.value.filter((c) => c.uid !== v), f();
    }
    function _(v, c) {
      const C = v + c;
      if (C < 0 || C >= i.value.length)
        return;
      const S = [...i.value], [B] = S.splice(v, 1);
      S.splice(C, 0, B), i.value = S, f();
    }
    function h(v, c, C) {
      const S = i.value.find((B) => B.uid === v);
      S && (S.data[c] = C, f());
    }
    function g(v, c) {
      return a.errors[`${a.fieldKey}.${v}.${c}`];
    }
    return (v, c) => (t(), n("div", zu, [
      (t(!0), n(P, null, D(i.value, (C, S) => (t(), n("div", {
        key: C.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: j(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", x.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, m(S + 1), 3),
        o("div", Au, [
          x.value ? (t(), I(qe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: C.data[e.children[0].key],
            error: g(S, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (B) => h(C.uid, e.children[0].key, B)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", ju, [
            (t(!0), n(P, null, D(e.children, (B) => (t(), I(qe, {
              key: B.key,
              field: { ...B, disabled: B.disabled || e.disabled },
              value: C.data[B.key],
              error: g(S, B.key),
              options: e.childOptions[B.key] ?? [],
              onChange: (K) => h(C.uid, B.key, K)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: j(["flex shrink-0 items-center gap-0.5", x.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || S === 0,
            "aria-label": `Move ${e.itemLabel} ${S + 1} up`,
            onClick: (B) => _(S, -1)
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
          ])], 8, Ou),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || S === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${S + 1} down`,
            onClick: (B) => _(S, 1)
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
          ])], 8, Lu),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${S + 1}`,
            onClick: (B) => $(C.uid)
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
          ])], 8, Vu)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", Du, " No " + m(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : w("", !0),
      y.value ? w("", !0) : (t(), n("button", {
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
        U(" Add " + m(e.itemLabel.toLowerCase()), 1)
      ], 8, Tu))
    ]));
  }
}), Fu = { class: "space-y-1" }, Eu = { class: "flex items-center gap-1" }, Iu = ["disabled", "title", "aria-label", "onClick"], Nu = ["aria-pressed"], Ru = ["id", "value", "rows", "disabled"], Uu = ["innerHTML"], Hu = /* @__PURE__ */ z({
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
      const $ = document.getElementById(a.id ?? "");
      if ($ === null)
        return;
      const _ = $.selectionStart, h = $.selectionEnd, g = i.value.slice(_, h);
      r(
        "update:modelValue",
        `${i.value.slice(0, _)}${x}${g}${M}${i.value.slice(h)}`
      );
    }
    const y = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, p = k(
      () => (a.toolbar ?? Object.keys(y)).filter((x) => x in y)
    );
    return (x, M) => (t(), n("div", Fu, [
      o("div", Eu, [
        (t(!0), n(P, null, D(p.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          disabled: e.disabled,
          title: $,
          "aria-label": $,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (_) => y[$].run()
        }, m(y[$].label), 9, Iu))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: M[0] || (M[0] = ($) => s.value = !s.value)
        }, " Preview ", 8, Nu)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: d.value
      }, null, 8, Uu)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: M[1] || (M[1] = ($) => r("update:modelValue", $.target.value))
      }, null, 40, Ru))
    ]));
  }
}), qu = { class: "space-y-1" }, Ku = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Gu = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Wu = ["id", "value", "rows", "disabled"], Zu = { class: "text-muted-foreground text-xs" }, Ju = {
  key: 0,
  class: "text-destructive text-xs"
}, Yu = /* @__PURE__ */ z({
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
    function y(x) {
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
      const M = x.target, $ = M.selectionStart, _ = M.selectionEnd, h = `${u.value.slice(0, $)}    ${u.value.slice(_)}`;
      r("update:modelValue", h), requestAnimationFrame(() => {
        M.selectionStart = M.selectionEnd = $ + 4;
      });
    }
    return (x, M) => (t(), n("div", qu, [
      o("div", Ku, [
        o("div", Gu, [
          (t(!0), n(P, null, D(d.value, ($) => (t(), n("div", { key: $ }, m($), 1))), 128))
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
          onInput: y,
          onKeydown: p
        }, null, 40, Wu)
      ]),
      o("p", Zu, m(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", Ju, m(f.value), 1)) : w("", !0)
    ]));
  }
}), Xu = { class: "space-y-3" }, Qu = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, ed = { class: "text-sm font-medium" }, td = { class: "flex items-center gap-1" }, ad = ["disabled", "onClick"], nd = ["disabled", "onClick"], ld = ["disabled", "onClick"], od = { class: "space-y-3 p-3" }, sd = { class: "flex flex-wrap items-center gap-2" }, rd = ["disabled", "onClick"], id = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, vw = /* @__PURE__ */ z({
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
    function y(M) {
      d(s.value.filter(($, _) => _ !== M));
    }
    function p(M, $) {
      const _ = M + $;
      if (_ < 0 || _ >= s.value.length)
        return;
      const h = [...s.value], [g] = h.splice(M, 1);
      h.splice(_, 0, g), d(h);
    }
    function x(M, $, _) {
      d(
        s.value.map(
          (h, g) => g === M ? { ...h, data: { ...h.data, [$]: _ } } : h
        )
      );
    }
    return (M, $) => (t(), n("div", Xu, [
      (t(!0), n(P, null, D(s.value, (_, h) => (t(), n("div", {
        key: `${_.type}-${h}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Qu, [
          o("span", ed, m(i.value[_.type]?.label ?? _.type), 1),
          o("div", td, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || h === 0,
              "aria-label": "Move up",
              onClick: (g) => p(h, -1)
            }, " ↑ ", 8, ad),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || h === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (g) => p(h, 1)
            }, " ↓ ", 8, nd),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (g) => y(h)
            }, " Remove ", 8, ld)
          ])
        ]),
        o("div", od, [
          (t(!0), n(P, null, D(i.value[_.type]?.fields ?? [], (g) => (t(), I(qe, {
            key: g.key,
            field: g,
            value: _.data[g.key] ?? null,
            error: e.errors?.[g.key],
            processing: e.disabled,
            onChange: (v) => x(h, g.key, v)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", sd, [
        (t(!0), n(P, null, D(e.blocks, (_) => (t(), n("button", {
          key: _.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || u.value,
          onClick: (h) => f(_.type)
        }, " + " + m(_.label), 9, rd))), 128)),
        u.value ? (t(), n("span", id, m(e.maxBlocks) + " is the maximum here. ", 1)) : w("", !0)
      ])
    ]));
  }
}), ud = ["name", "value", "checked", "disabled", "onChange"], dd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, cd = /* @__PURE__ */ z({
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
      (t(!0), n(P, null, D(e.options, (d) => (t(), n("label", {
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
        }, null, 40, ud),
        U(" " + m(d.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", dd, " Nothing to choose from yet. ")) : w("", !0)
    ], 2));
  }
}), fd = ["value", "checked", "disabled", "onChange"], md = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, pd = /* @__PURE__ */ z({
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
      return s.value.some((y) => y == f.value);
    }
    function u(f) {
      r(
        "update:modelValue",
        i(f) ? s.value.filter((y) => y != f.value) : [...s.value, f.value]
      );
    }
    const d = k(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, y) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ee(d.value)
    }, [
      (t(!0), n(P, null, D(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: j(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (x) => u(p)
        }, null, 40, fd),
        U(" " + m(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", md, " Nothing to choose from yet. ")) : w("", !0)
    ], 4));
  }
}), vd = { class: "flex flex-col gap-1.5" }, gd = ["aria-label", "onClick"], hd = ["placeholder", "disabled", "maxlength"], bd = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, yd = ["onClick"], xd = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, kd = /* @__PURE__ */ z({
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
      if (i.value.some(($) => $.toLowerCase() === M.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, M]), s.value = "";
    }
    function y(x) {
      r(
        "update:modelValue",
        i.value.filter((M, $) => $ !== x)
      );
    }
    function p(x) {
      if (x.key === "Enter" || x.key === ",") {
        x.preventDefault(), f(s.value);
        return;
      }
      x.key === "Backspace" && s.value === "" && i.value.length > 0 && y(i.value.length - 1);
    }
    return (x, M) => (t(), n("div", vd, [
      o("div", {
        class: j(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(P, null, D(i.value, ($, _) => (t(), n("span", {
          key: `${$}-${_}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(m($) + " ", 1),
          e.disabled ? w("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${$}`,
            onClick: (h) => y(_)
          }, " × ", 8, gd))
        ]))), 128)),
        se(o("input", {
          "onUpdate:modelValue": M[0] || (M[0] = ($) => s.value = $),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: u.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || u.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: M[1] || (M[1] = ($) => f(s.value))
        }, null, 40, hd), [
          [be, s.value]
        ])
      ], 2),
      d.value.length > 0 && !u.value && !e.disabled ? (t(), n("div", bd, [
        M[2] || (M[2] = o("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(P, null, D(d.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (_) => f($)
        }, m($), 9, yd))), 128))
      ])) : w("", !0),
      u.value ? (t(), n("p", xd, " That is the maximum of " + m(e.field.max ?? 25) + " tags. ", 1)) : w("", !0)
    ]));
  }
}), $d = 4.5, Tt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
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
function wd(e, l, a) {
  if (!Tt.test(e) || !Tt.test(l))
    return e;
  const r = mt(l) > 0.5, s = r ? 0 : 255;
  let i = sa(e);
  for (let u = 0; u <= 20; u++) {
    const d = Cd(i);
    if (ra(d, l) >= a)
      return d;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Cd(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const _d = { class: "flex flex-col gap-2" }, Md = { class: "flex items-center gap-2" }, Sd = {
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
}, Bd = ["value", "disabled", "aria-label"], Pd = ["value", "disabled", "placeholder"], zd = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Ad = ["aria-label", "title", "onClick"], jd = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Od = /* @__PURE__ */ z({
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
      const h = _.startsWith("#") ? _ : `#${_}`;
      return s.test(h) ? h.toLowerCase() : _;
    }
    function f($) {
      r("update:modelValue", d($.target.value));
    }
    const y = k(() => !u.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : ra(i.value, a.field.contrastBackground)), p = k(() => a.field.contrastMinRatio ?? $d), x = k(() => y.value !== null && y.value < p.value);
    function M() {
      a.field.contrastBackground && r(
        "update:modelValue",
        wd(i.value, a.field.contrastBackground, p.value)
      );
    }
    return ($, _) => (t(), n("div", _d, [
      o("div", Md, [
        u.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: _[0] || (_[0] = (h) => r("update:modelValue", h.target.value))
        }, null, 40, Bd)) : (t(), n("span", Sd)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, Pd)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", zd, [
        (t(!0), n(P, null, D(e.field.presets, (h) => (t(), n("button", {
          key: h,
          type: "button",
          class: j(["size-6 rounded border", i.value.toLowerCase() === h.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ee({ backgroundColor: h }),
          "aria-label": h,
          title: h,
          onClick: (g) => r("update:modelValue", h.toLowerCase())
        }, null, 14, Ad))), 128))
      ])) : w("", !0),
      x.value ? (t(), n("p", jd, [
        o("span", null, " This fails contrast at " + m(y.value.toFixed(1)) + ":1 - it needs at least " + m(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? w("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: M
        }, " Use a readable shade "))
      ])) : w("", !0)
    ]));
  }
}), Ld = { class: "flex items-center gap-3" }, Vd = ["min", "max", "step", "value", "disabled", "aria-label"], Dd = { class: "flex shrink-0 items-center gap-1" }, Td = ["min", "max", "step", "value", "disabled"], Fd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ed = /* @__PURE__ */ z({
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
    function y(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const x = Number(p);
      r("update:modelValue", Number.isFinite(x) ? x : null);
    }
    return (p, x) => (t(), n("div", Ld, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: u.value,
        value: d.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: x[0] || (x[0] = (M) => y(M.target.value))
      }, null, 40, Vd),
      o("div", Dd, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: u.value,
          value: f.value ? "" : d.value,
          disabled: e.disabled,
          onInput: x[1] || (x[1] = (M) => y(M.target.value))
        }, null, 40, Td),
        e.field.unit ? (t(), n("span", Fd, m(e.field.unit), 1)) : w("", !0)
      ])
    ]));
  }
}), We = /* @__PURE__ */ new Map();
function ot(e, l) {
  We.set(e, l);
}
function Id(e) {
  return We.get(e);
}
function gw(e) {
  return We.has(e);
}
function Nd() {
  return [...We.keys()].sort();
}
function hw() {
  We.clear();
}
const Rd = ["name", "value", "checked", "disabled", "onChange"], Ud = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Hd = { class: "whitespace-nowrap" }, qd = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Kd = ["name", "value", "checked", "disabled", "onChange"], Gd = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Wd = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Zd = { class: "text-center text-xs font-medium" }, Jd = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Yd = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Xd = /* @__PURE__ */ z({
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
      () => a.field.preview ? Id(a.field.preview) : void 0
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
    function f(y) {
      return a.modelValue != null && y.value == a.modelValue;
    }
    return (y, p) => u.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: j(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(P, null, D(e.options, (x) => (t(), n("label", {
        key: String(x.value),
        class: j(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
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
        }, null, 40, Rd),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Ud, [
          (t(), I(Ae(s.value), {
            value: x.value,
            label: x.label,
            selected: f(x)
          }, null, 8, ["value", "label", "selected"]))
        ])) : w("", !0),
        o("span", Hd, m(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", qd, " Nothing to choose from yet. ")) : w("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: j(["grid gap-3", d.value])
    }, [
      (t(!0), n(P, null, D(e.options, (x) => (t(), n("label", {
        key: String(x.value),
        class: j(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
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
        }, null, 40, Kd),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Gd, [
          s.value ? (t(), I(Ae(s.value), {
            key: 0,
            value: x.value,
            label: x.label,
            selected: f(x)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Wd, " no preview ")) : w("", !0)
        ]),
        o("span", Zd, m(x.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Jd, " Nothing to choose from yet. ")) : w("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Yd, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        o("code", null, m(e.field.preview), 1),
        U(". Registered: " + m(b(Nd)().join(", ") || "none") + ". ", 1)
      ])) : w("", !0)
    ], 2));
  }
}), Qd = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, ec = /* @__PURE__ */ z({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Qd, [
      o("span", {
        class: "block size-full",
        style: ee({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), tc = { class: "flex flex-col items-center gap-1 text-center" }, ac = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ia = /* @__PURE__ */ z({
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
    return (s, i) => (t(), n("div", tc, [
      o("div", {
        class: j(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ee({ borderColor: a.value, color: a.value })
      }, m(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", ac, m(e.caption), 1)) : w("", !0)
    ]));
  }
}), nc = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, lc = { class: "flex items-center gap-3" }, oc = ["src"], sc = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, rc = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, ic = {
  key: 0,
  class: "text-right text-sm"
}, uc = { class: "text-neutral-500" }, dc = { class: "tabular-nums" }, cc = { key: 1 }, fc = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, mc = { class: "mt-2 font-medium" }, pc = { key: 2 }, vc = { class: "w-full text-sm" }, gc = { class: "w-full py-3 pr-2" }, hc = {
  key: 0,
  class: "text-xs text-neutral-500"
}, bc = { key: 0 }, yc = ["colspan"], xc = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, kc = { class: "w-64 text-sm" }, $c = { class: "tabular-nums" }, wc = {
  key: 3,
  class: "py-2"
}, Cc = { key: 4 }, _c = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Mc = { class: "mt-2 flex flex-col gap-1 text-sm" }, Sc = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Bc = { key: 0 }, Pc = {
  key: 1,
  class: "mt-1"
}, zc = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Ac = /* @__PURE__ */ z({
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
    return (f, y) => (t(), n("article", nc, [
      o("div", lc, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, oc)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ee({ color: a() })
        }, m(e.document.branding.company), 5))
      ]),
      (t(!0), n(P, null, D(e.document.blocks, (p, x) => (t(), n(P, { key: x }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ee({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ee({ color: a() })
            }, m(p.title), 5),
            p.subtitle ? (t(), n("p", sc, m(p.subtitle), 1)) : w("", !0),
            p.reference ? (t(), n("p", rc, m(p.reference), 1)) : w("", !0)
          ]),
          r(p).length ? (t(), n("dl", ic, [
            (t(!0), n(P, null, D(r(p), (M, $) => (t(), n("div", {
              key: $,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", uc, m(M.label), 1),
              o("dd", dc, m(M.value), 1)
            ]))), 128))
          ])) : w("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", cc, [
          o("h2", fc, m(p.heading), 1),
          o("p", mc, m(p.name), 1),
          (t(!0), n(P, null, D(u(p.lines), (M, $) => (t(), n("p", {
            key: $,
            class: "text-sm text-neutral-600"
          }, m(M), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", pc, [
          o("table", vc, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ee({ borderColor: a() })
              }, [
                (t(!0), n(P, null, D(u(p.columns), (M, $) => (t(), n("th", {
                  key: $,
                  class: j(["pb-2 font-medium", $ > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, m(M), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(P, null, D(s(p), (M, $) => (t(), n("tr", {
                key: $,
                class: "border-b border-neutral-200"
              }, [
                o("td", gc, [
                  o("p", null, m(M.description), 1),
                  M.detail ? (t(), n("p", hc, m(M.detail), 1)) : w("", !0)
                ]),
                (t(!0), n(P, null, D(M.cells, (_, h) => (t(), n("td", {
                  key: h,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, m(_), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", bc, [
                o("td", {
                  colspan: u(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, m(p.empty), 9, yc)
              ])) : w("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", xc, [
            o("dl", kc, [
              (t(!0), n(P, null, D(i(p), (M, $) => (t(), n("div", {
                key: $,
                class: j([
                  "flex justify-between py-1",
                  M.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ee(M.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: j(M.strong ? "" : "text-neutral-600")
                }, m(M.label), 3),
                o("dd", $c, m(M.value), 1)
              ], 6))), 128))
            ])
          ])) : w("", !0)
        ])) : p.type === "code" ? (t(), n("section", wc, [
          N(ia, {
            code: d(p.code),
            caption: d(p.caption),
            style: ee(d(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", Cc, [
          o("h2", _c, m(p.heading), 1),
          o("ol", Mc, [
            (t(!0), n(P, null, D(u(p.items), (M, $) => (t(), n("li", {
              key: $,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ee({ color: a() })
              }, m($ + 1) + ".", 5),
              o("span", null, m(M), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: j(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ee(p.emphasis ? { color: a() } : void 0)
        }, m(p.text), 7)) : p.type === "footer" ? (t(), n("footer", Sc, [
          p.text ? (t(), n("p", Bc, m(p.text), 1)) : w("", !0),
          u(p.contacts).length ? (t(), n("p", Pc, m(u(p.contacts).join(" · ")), 1)) : w("", !0)
        ])) : (t(), n("p", zc, " This document contains a “" + m(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), jc = ["aria-label", "title"], Oc = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lc = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, bw = /* @__PURE__ */ z({
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
      (t(), n("svg", Oc, [
        r.value ? (t(), n(P, { key: 0 }, [
          u[0] || (u[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          u[1] || (u[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", Lc))
      ]))
    ], 8, jc));
  }
}), Vc = ["width", "height"], Dc = { key: 0 }, Tc = ["x1", "x2", "y1", "y2"], Fc = ["x", "y"], Ec = ["x1", "x2", "y1", "y2"], Ic = ["x", "y"], Nc = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Rc = ["x", "y", "width", "height", "fill", "fill-opacity"], Uc = ["x", "y"], Hc = ["x", "y"], qc = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Kc = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Gc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Wc = { class: "text-xs font-semibold tabular-nums" }, Zc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Jc = { class: "text-muted-foreground" }, Ft = 5.6, yw = /* @__PURE__ */ z({
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
    function s(O, W) {
      if (!l.thresholds?.length)
        return W;
      const q = l.thresholds.find((Q) => O < Q.max);
      return r(q ? q.color : l.aboveColor);
    }
    const i = G(null), u = G(560), d = G(null);
    let f = null;
    de(() => {
      f = new ResizeObserver((O) => {
        u.value = Math.max(160, O[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), me(() => f?.disconnect());
    const y = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((W, q) => ({
      ...W,
      color: W.color ?? y[q % y.length]
    }))), x = k(() => p.value[0]?.points.map((O) => O.label) ?? []), M = k(() => x.value.length), $ = k(() => l.orientation === "horizontal"), _ = k(() => Math.max(0, ...x.value.map((O) => O.length))), h = k(() => {
      if (!$.value)
        return l.showAxis ? 44 : 8;
      const O = _.value * Ft + 16;
      return Math.round(Math.min(Math.max(60, O), u.value * 0.4));
    }), g = k(() => Math.max(4, Math.floor((h.value - 16) / Ft)));
    function v(O) {
      return O.length <= g.value ? O : `${O.slice(0, g.value - 1)}…`;
    }
    const c = k(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: h.value
    })), C = k(() => ({
      w: Math.max(1, u.value - c.value.left - c.value.right),
      h: Math.max(1, l.height - c.value.top - c.value.bottom)
    })), S = (O) => l.format ? l.format(O) : B(O);
    function B(O) {
      return Math.abs(O) >= 1e6 ? `${(O / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(O) >= 1e3 ? `${(O / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(O * 100) / 100);
    }
    const K = k(() => {
      const O = x.value.map(
        (ue, ge) => l.stacked ? p.value.reduce((ae, ve) => ae + Math.max(0, ve.points[ge]?.value ?? 0), 0) : Math.max(...p.value.map((ae) => ae.points[ge]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const W = Math.max(...O, 0);
      if (W <= 0)
        return 1;
      const q = 10 ** Math.floor(Math.log10(W));
      return ([1, 2, 2.5, 5, 10].find((ue) => W <= ue * q) ?? 10) * q;
    }), R = k(
      () => ($.value ? C.value.h : C.value.w) / Math.max(1, M.value)
    ), Z = k(() => R.value * 0.68), E = k(
      () => l.stacked || p.value.length <= 1 ? Z.value : Z.value / p.value.length
    ), A = k(() => {
      const O = [], W = new Array(M.value).fill(0);
      return p.value.forEach((q, Q) => {
        q.points.forEach((ue, ge) => {
          const ve = Math.max(0, ue.value) / K.value * ($.value ? C.value.w : C.value.h), Ie = ($.value ? c.value.top : c.value.left) + ge * R.value + (R.value - Z.value) / 2, zt = l.stacked ? 0 : Q * E.value;
          O.push(
            $.value ? {
              x: c.value.left + W[ge],
              y: Ie + zt,
              w: ve,
              h: Math.max(0, E.value - 2),
              color: s(ue.value, q.color),
              label: ue.label,
              name: q.name,
              value: ue.value,
              index: ge
            } : {
              x: Ie + zt,
              y: c.value.top + C.value.h - ve - W[ge],
              w: Math.max(0, E.value - 2),
              h: ve,
              color: s(ue.value, q.color),
              label: ue.label,
              name: q.name,
              value: ue.value,
              index: ge
            }
          ), l.stacked && (W[ge] += ve);
        });
      }), O;
    }), T = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((O) => ({
        value: K.value * ($.value ? O : 1 - O),
        x: c.value.left + C.value.w * O,
        y: c.value.top + C.value.h * O
      }))
    ), Y = k(() => Math.max(1, Math.ceil(M.value / ($.value ? 14 : 10))));
    function F(O) {
      return O === M.value - 1 || O % Y.value === 0;
    }
    function V(O) {
      return ($.value ? c.value.top : c.value.left) + O * R.value + R.value / 2;
    }
    const J = k(() => d.value === null ? null : {
      label: x.value[d.value],
      rows: p.value.map((O) => ({
        name: O.name,
        color: O.color,
        value: O.points[d.value]?.value ?? 0
      }))
    });
    return (O, W) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      M.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ee({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: u.value,
          height: e.height,
          onMouseleave: W[0] || (W[0] = (q) => d.value = null)
        }, [
          e.showAxis ? (t(), n("g", Dc, [
            $.value ? (t(), n(P, { key: 0 }, [
              (t(!0), n(P, null, D(T.value, (q) => (t(), n("line", {
                key: `g-${q.x}`,
                x1: q.x,
                x2: q.x,
                y1: c.value.top,
                y2: c.value.top + C.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Tc))), 128)),
              (t(!0), n(P, null, D(T.value, (q) => (t(), n("text", {
                key: `gt-${q.x}`,
                x: q.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, m(B(q.value)), 9, Fc))), 128))
            ], 64)) : (t(), n(P, { key: 1 }, [
              (t(!0), n(P, null, D(T.value, (q) => (t(), n("line", {
                key: `g-${q.y}`,
                x1: c.value.left,
                x2: u.value - c.value.right,
                y1: q.y,
                y2: q.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Ec))), 128)),
              (t(!0), n(P, null, D(T.value, (q) => (t(), n("text", {
                key: `gt-${q.y}`,
                x: c.value.left - 8,
                y: q.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, m(B(q.value)), 9, Ic))), 128))
            ], 64))
          ])) : w("", !0),
          (t(!0), n(P, null, D(x.value, (q, Q) => (t(), n("rect", {
            key: `hit-${Q}`,
            x: $.value ? c.value.left : c.value.left + Q * R.value,
            y: $.value ? c.value.top + Q * R.value : c.value.top,
            width: $.value ? C.value.w : R.value,
            height: $.value ? R.value : C.value.h,
            fill: "var(--muted)",
            "fill-opacity": d.value === Q ? 0.4 : 0,
            onMouseenter: (ue) => d.value = Q
          }, null, 40, Nc))), 128)),
          (t(!0), n(P, null, D(A.value, (q, Q) => (t(), n("rect", {
            key: `b-${Q}`,
            x: q.x,
            y: q.y,
            width: q.w,
            height: q.h,
            fill: q.color,
            "fill-opacity": d.value === null || d.value === q.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Rc))), 128)),
          $.value ? (t(!0), n(P, { key: 1 }, D(x.value, (q, Q) => se((t(), n("text", {
            key: `c-${Q}`,
            x: c.value.left - 8,
            y: V(Q) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(m(v(q)) + " ", 1),
            o("title", null, m(q), 1)
          ], 8, Uc)), [
            [je, F(Q)]
          ])), 128)) : (t(!0), n(P, { key: 2 }, D(x.value, (q, Q) => se((t(), n("text", {
            key: `c-${Q}`,
            x: V(Q),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(q), 9, Hc)), [
            [je, F(Q)]
          ])), 128))
        ], 40, Vc)),
        J.value ? (t(), n("div", qc, [
          o("p", Kc, m(J.value.label), 1),
          (t(!0), n(P, null, D(J.value.rows, (q, Q) => (t(), n("div", {
            key: Q,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ee({ background: q.color })
            }, null, 4),
            o("span", Gc, m(q.name || "Value"), 1),
            o("span", Wc, m(S(q.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", Zc, [
          (t(!0), n(P, null, D(p.value, (q, Q) => (t(), n("span", {
            key: Q,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ee({ background: q.color })
            }, null, 4),
            o("span", Jc, m(q.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Yc = ["width", "height"], Xc = ["id"], Qc = ["stop-color"], ef = ["stop-color"], tf = { key: 0 }, af = ["x1", "x2", "y1", "y2"], nf = ["x", "y"], lf = ["x", "y"], of = ["x1", "x2", "y1", "y2"], sf = ["d", "fill"], rf = ["d", "stroke", "stroke-dasharray"], uf = ["cx", "cy", "fill"], df = { key: 1 }, cf = ["x1", "x2", "y1", "y2"], ff = ["cx", "cy", "fill"], mf = ["x", "y"], pf = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, vf = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, gf = { class: "text-xs font-semibold tabular-nums" }, hf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, bf = { class: "text-muted-foreground" }, yf = /* @__PURE__ */ z({
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
    const l = e, a = k(() => y.value.some((O) => O.axis === "right")), r = G(null), s = G(560), i = G(null);
    let u = null;
    de(() => {
      u = new ResizeObserver((O) => {
        s.value = Math.max(160, O[0].contentRect.width);
      }), r.value && u.observe(r.value);
    }), me(() => u?.disconnect());
    const d = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = Math.random().toString(36).slice(2, 9), y = k(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((W, q) => ({
      ...W,
      color: W.color ?? d[q % d.length]
    }))), p = k(() => y.value[0]?.points.map((O) => O.label) ?? []), x = k(() => p.value.length), M = k(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), $ = (O) => l.format ? l.format(O) : _(O);
    function _(O) {
      return Math.abs(O) >= 1e6 ? `${(O / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(O) >= 1e3 ? `${(O / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(O * 100) / 100);
    }
    function h(O) {
      const W = Math.max(...O, 0);
      if (W <= 0)
        return 1;
      const q = 10 ** Math.floor(Math.log10(W));
      return ([1, 2, 2.5, 5, 10].find((ue) => W <= ue * q) ?? 10) * q;
    }
    const g = k(
      () => h(
        y.value.filter((O) => O.axis !== "right").flatMap((O) => O.points.map((W) => W.value))
      )
    ), v = k(
      () => h(
        y.value.filter((O) => O.axis === "right").flatMap((O) => O.points.map((W) => W.value))
      )
    ), c = k(() => ({
      w: Math.max(1, s.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    }));
    function C(O) {
      return M.value.left + (x.value <= 1 ? 0 : O / (x.value - 1) * c.value.w);
    }
    function S(O, W = "left") {
      const q = W === "right" ? v.value : g.value;
      return M.value.top + c.value.h - O / q * c.value.h;
    }
    const B = k(
      () => y.value.map((O) => {
        const W = O.points.map((Q, ue) => ({
          ...Q,
          x: C(ue),
          y: S(Q.value, O.axis ?? "left")
        })), q = O.stepped ? K(W) : R(W);
        return { ...O, pts: W, line: q, area: Z(q, W) };
      })
    );
    function K(O) {
      if (O.length === 0)
        return "";
      let W = `M${O[0].x.toFixed(2)},${O[0].y.toFixed(2)}`;
      for (let q = 1; q < O.length; q++)
        W += ` L${O[q].x.toFixed(2)},${O[q - 1].y.toFixed(2)} L${O[q].x.toFixed(2)},${O[q].y.toFixed(2)}`;
      return W;
    }
    function R(O) {
      const W = O.length;
      if (W === 0)
        return "";
      if (W === 1)
        return `M${O[0].x},${O[0].y}`;
      const q = [], Q = [];
      for (let ae = 0; ae < W - 1; ae++)
        q[ae] = O[ae + 1].x - O[ae].x, Q[ae] = q[ae] === 0 ? 0 : (O[ae + 1].y - O[ae].y) / q[ae];
      const ue = [Q[0]];
      for (let ae = 1; ae < W - 1; ae++)
        if (Q[ae - 1] * Q[ae] <= 0)
          ue[ae] = 0;
        else {
          const ve = 2 * q[ae] + q[ae - 1], Ie = q[ae] + 2 * q[ae - 1];
          ue[ae] = (ve + Ie) / (ve / Q[ae - 1] + Ie / Q[ae]);
        }
      ue[W - 1] = Q[W - 2];
      let ge = `M${O[0].x.toFixed(2)},${O[0].y.toFixed(2)}`;
      for (let ae = 0; ae < W - 1; ae++) {
        const ve = q[ae] / 3;
        ge += ` C${(O[ae].x + ve).toFixed(2)},${(O[ae].y + ue[ae] * ve).toFixed(2)} ${(O[ae + 1].x - ve).toFixed(2)},${(O[ae + 1].y - ue[ae + 1] * ve).toFixed(2)} ${O[ae + 1].x.toFixed(2)},${O[ae + 1].y.toFixed(2)}`;
      }
      return ge;
    }
    function Z(O, W) {
      if (W.length === 0)
        return "";
      const q = M.value.top + c.value.h;
      return `${O} L${W[W.length - 1].x.toFixed(2)},${q} L${W[0].x.toFixed(2)},${q} Z`;
    }
    const E = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((O) => ({
        y: M.value.top + c.value.h * O,
        value: g.value * (1 - O)
      }))
    ), A = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((O) => ({
        y: M.value.top + c.value.h * O,
        value: v.value * (1 - O)
      }))
    ), T = k(() => Math.max(1, Math.ceil(x.value / 8)));
    function Y(O) {
      return O === x.value - 1 || O % T.value === 0;
    }
    function F(O) {
      const W = O.currentTarget.getBoundingClientRect(), q = O.clientX - W.left - M.value.left, Q = x.value <= 1 ? 1 : c.value.w / (x.value - 1);
      i.value = Math.min(x.value - 1, Math.max(0, Math.round(q / Q)));
    }
    const V = k(() => {
      if (i.value === null || x.value === 0)
        return null;
      const O = i.value;
      return {
        i: O,
        x: C(O),
        label: p.value[O],
        rows: B.value.map((W) => ({
          name: W.name,
          color: W.color,
          value: W.points[O]?.value ?? 0,
          y: W.pts[O]?.y ?? 0
        }))
      };
    }), J = k(() => {
      if (!V.value)
        return {};
      const O = V.value.x > s.value * 0.6;
      return {
        left: `${V.value.x}px`,
        top: "8px",
        transform: O ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (O, W) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ee({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: F,
          onMouseleave: W[0] || (W[0] = (q) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(P, null, D(B.value, (q, Q) => (t(), n("linearGradient", {
              id: `pk-fill-${b(f)}-${Q}`,
              key: Q,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": q.color,
                "stop-opacity": "0.25"
              }, null, 8, Qc),
              o("stop", {
                offset: "100%",
                "stop-color": q.color,
                "stop-opacity": "0.01"
              }, null, 8, ef)
            ], 8, Xc))), 128))
          ]),
          e.showAxis ? (t(), n("g", tf, [
            (t(!0), n(P, null, D(E.value, (q) => (t(), n("line", {
              key: q.y,
              x1: M.value.left,
              x2: s.value - M.value.right,
              y1: q.y,
              y2: q.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, af))), 128)),
            (t(!0), n(P, null, D(E.value, (q) => (t(), n("text", {
              key: `t-${q.y}`,
              x: M.value.left - 8,
              y: q.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, m(_(q.value)), 9, nf))), 128)),
            a.value ? (t(!0), n(P, { key: 0 }, D(A.value, (q) => (t(), n("text", {
              key: `rt-${q.y}`,
              x: s.value - M.value.right + 8,
              y: q.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, m(_(q.value)), 9, lf))), 128)) : w("", !0)
          ])) : w("", !0),
          (t(!0), n(P, null, D(p.value, (q, Q) => se((t(), n("line", {
            key: `v-${Q}`,
            x1: C(Q),
            x2: C(Q),
            y1: M.value.top,
            y2: M.value.top + c.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, of)), [
            [je, Y(Q)]
          ])), 128)),
          (t(!0), n(P, null, D(B.value, (q, Q) => (t(), n("g", {
            key: `s-${Q}`
          }, [
            q.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: q.area,
              fill: `url(#pk-fill-${b(f)}-${Q})`
            }, null, 8, sf)) : w("", !0),
            o("path", {
              d: q.line,
              fill: "none",
              stroke: q.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": q.dashed ? "6 4" : void 0
            }, null, 8, rf),
            q.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: q.pts[0].x,
              cy: q.pts[0].y,
              r: "3",
              fill: q.color
            }, null, 8, uf)) : w("", !0)
          ]))), 128)),
          V.value ? (t(), n("g", df, [
            o("line", {
              x1: V.value.x,
              x2: V.value.x,
              y1: M.value.top,
              y2: M.value.top + c.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, cf),
            (t(!0), n(P, null, D(V.value.rows, (q, Q) => (t(), n("circle", {
              key: `d-${Q}`,
              cx: V.value.x,
              cy: q.y,
              r: "4",
              fill: q.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, ff))), 128))
          ])) : w("", !0),
          (t(!0), n(P, null, D(p.value, (q, Q) => se((t(), n("text", {
            key: `x-${Q}`,
            x: C(Q),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, m(q), 9, mf)), [
            [je, Y(Q)]
          ])), 128))
        ], 40, Yc)),
        V.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ee(J.value)
        }, [
          o("p", pf, m(V.value.label), 1),
          (t(!0), n(P, null, D(V.value.rows, (q, Q) => (t(), n("div", {
            key: Q,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ee({ background: q.color })
            }, null, 4),
            o("span", vf, m(q.name || "Value"), 1),
            o("span", gf, m($(q.value)), 1)
          ]))), 128))
        ], 4)) : w("", !0),
        e.showLegend && y.value.length > 1 ? (t(), n("div", hf, [
          (t(!0), n(P, null, D(B.value, (q, Q) => (t(), n("span", {
            key: Q,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ee({ background: q.color })
            }, null, 4),
            o("span", bf, m(q.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), xf = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, kf = { class: "text-muted-foreground text-[11px] capitalize" }, $f = { class: "text-sm font-semibold tabular-nums" }, wf = {
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
    return (l, a) => (t(), n("div", xf, [
      o("p", kf, m(e.label), 1),
      o("p", $f, [
        U(m(e.value) + " ", 1),
        e.share ? (t(), n("span", wf, " (" + m(e.share) + ") ", 1)) : w("", !0)
      ])
    ]));
  }
}), Cf = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, _f = ["width", "height", "viewBox", "aria-label"], Mf = ["d", "fill", "fill-opacity", "onMouseenter"], Sf = ["x", "y"], Bf = ["x", "y"], Pf = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, zf = ["onMouseenter"], Af = { class: "min-w-0 flex-1 truncate capitalize" }, jf = { class: "tabular-nums font-medium" }, Of = { class: "text-muted-foreground w-9 text-right tabular-nums" }, xw = /* @__PURE__ */ z({
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
    ], r = k(() => l.data.reduce((g, v) => g + v.value, 0)), s = G(null), i = k(() => l.height), u = k(() => i.value / 2 - 4), d = k(() => l.type === "doughnut" ? u.value * 0.62 : 0);
    function f(g) {
      return a[g % a.length];
    }
    function y(g) {
      return 1 - Math.min(0.55, Math.floor(g / a.length) * 0.28);
    }
    const p = k(() => {
      if (r.value <= 0)
        return [];
      const g = i.value / 2;
      let v = -Math.PI / 2;
      return l.data.map((c, C) => {
        const S = c.value / r.value, B = S * Math.PI * 2, K = v, R = v + B;
        return v = R, {
          ...c,
          share: S,
          colour: f(C),
          opacity: y(C),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: S >= 0.9999 ? $(g) : M(g, K, R, u.value, d.value)
        };
      });
    });
    function x(g, v, c) {
      return `${(g + Math.cos(v) * c).toFixed(2)},${(g + Math.sin(v) * c).toFixed(2)}`;
    }
    function M(g, v, c, C, S) {
      const B = c - v > Math.PI ? 1 : 0;
      return S <= 0 ? `M${g},${g} L${x(g, v, C)} A${C},${C} 0 ${B} 1 ${x(g, c, C)} Z` : [
        `M${x(g, v, C)}`,
        `A${C},${C} 0 ${B} 1 ${x(g, c, C)}`,
        `L${x(g, c, S)}`,
        `A${S},${S} 0 ${B} 0 ${x(g, v, S)}`,
        "Z"
      ].join(" ");
    }
    function $(g) {
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
    const _ = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), h = (g) => `${(g * 100).toFixed(g < 0.01 ? 2 : 0)}%`;
    return (g, v) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ee({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Cf, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${_(r.value)}`
      }, [
        (t(!0), n(P, null, D(p.value, (c, C) => (t(), n("path", {
          key: C,
          d: c.path,
          fill: c.colour,
          "fill-opacity": s.value === null || s.value === C ? c.opacity : c.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (S) => s.value = C,
          onMouseleave: v[0] || (v[0] = (S) => s.value = null)
        }, null, 40, Mf))), 128)),
        e.type === "doughnut" ? (t(), n(P, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, m(_(s.value === null ? r.value : p.value[s.value].value)), 9, Sf),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(s.value === null ? "Total" : p.value[s.value].label), 9, Bf)
        ], 64)) : w("", !0)
      ], 8, _f)),
      o("ul", Pf, [
        (t(!0), n(P, null, D(p.value, (c, C) => (t(), n("li", {
          key: C,
          class: j(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === C ? "bg-muted" : ""]),
          onMouseenter: (S) => s.value = C,
          onMouseleave: v[1] || (v[1] = (S) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ee({ background: c.colour, opacity: c.opacity })
          }, null, 4),
          o("span", Af, m(c.label), 1),
          o("span", jf, m(_(c.value)), 1),
          o("span", Of, m(h(c.share)), 1)
        ], 42, zf))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), I(Ze, {
        key: 0,
        label: p.value[s.value].label,
        value: _(p.value[s.value].value),
        share: h(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), Lf = ["width", "height", "viewBox", "aria-label"], Vf = { class: "text-border" }, Df = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Tf = { class: "fill-muted-foreground text-[10px]" }, Ff = ["x", "y"], Ef = ["x", "y"], If = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Nf = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, kw = /* @__PURE__ */ z({
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
    de(() => {
      u = new ResizeObserver((T) => {
        const Y = T[0]?.contentRect.width ?? 0;
        Y > 0 && (s.value = Y);
      }), r.value && u.observe(r.value);
    }), me(() => u?.disconnect());
    const d = k(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (T, Y) => Y.color ?? a[T % a.length], y = k(() => d.value.flatMap((T) => T.points)), p = k(() => y.value.some((T) => typeof T.r == "number")), x = { top: 12, right: 16, bottom: 32, left: 48 }, M = k(() => Math.max(10, s.value - x.left - x.right)), $ = k(() => Math.max(10, l.height - x.top - x.bottom));
    function _(T) {
      if (T.length === 0)
        return [0, 1];
      const Y = Math.min(...T), F = Math.max(...T), V = F - Y || Math.abs(F) || 1;
      return [Y - V * 0.08, F + V * 0.08];
    }
    const h = k(() => _(y.value.map((T) => T.x))), g = k(() => _(y.value.map((T) => T.y))), v = (T) => {
      const [Y, F] = h.value;
      return x.left + (T - Y) / (F - Y) * M.value;
    }, c = (T) => {
      const [Y, F] = g.value;
      return x.top + $.value - (T - Y) / (F - Y) * $.value;
    }, C = k(() => Math.max(...y.value.map((T) => T.r ?? 0), 0));
    function S(T) {
      if (!p.value || !C.value)
        return 4;
      const Y = Math.max(0, T.r ?? 0) / C.value;
      return 3 + Math.sqrt(Y) * (l.maxRadius - 3);
    }
    function B([T, Y]) {
      return Array.from({ length: 5 }, (F, V) => T + (Y - T) / 4 * V);
    }
    const K = k(() => B(h.value)), R = k(() => B(g.value)), Z = (T) => l.formatX?.(T) ?? String(Math.round(T * 100) / 100), E = (T) => l.formatY?.(T) ?? String(Math.round(T * 100) / 100), A = k(() => {
      if (!i.value)
        return null;
      const T = d.value[i.value.s], Y = T?.points[i.value.p];
      return Y ? { series: T, point: Y } : null;
    });
    return (T, Y) => (t(), n("div", {
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
        o("g", Vf, [
          (t(!0), n(P, null, D(R.value, (F, V) => (t(), n("line", {
            key: `gy-${V}`,
            x1: x.left,
            x2: x.left + M.value,
            y1: c(F),
            y2: c(F),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": V === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Df))), 128))
        ]),
        o("g", Tf, [
          (t(!0), n(P, null, D(R.value, (F, V) => (t(), n("text", {
            key: `ty-${V}`,
            x: x.left - 8,
            y: c(F) + 3,
            "text-anchor": "end"
          }, m(E(F)), 9, Ff))), 128)),
          (t(!0), n(P, null, D(K.value, (F, V) => (t(), n("text", {
            key: `tx-${V}`,
            x: v(F),
            y: e.height - 10,
            "text-anchor": "middle"
          }, m(Z(F)), 9, Ef))), 128))
        ]),
        (t(!0), n(P, null, D(d.value, (F, V) => (t(), n("g", {
          key: `s-${V}`
        }, [
          (t(!0), n(P, null, D(F.points, (J, O) => (t(), n("circle", {
            key: `p-${V}-${O}`,
            cx: v(J.x),
            cy: c(J.y),
            r: S(J),
            fill: f(V, F),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: f(V, F),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== V || i.value.p !== O) ? 0.35 : 1,
            onMouseenter: (W) => i.value = { s: V, p: O },
            onMouseleave: Y[0] || (Y[0] = (W) => i.value = null)
          }, null, 40, If))), 128))
        ]))), 128))
      ], 8, Lf)),
      A.value ? (t(), I(Ze, {
        key: 0,
        label: A.value.point.label ?? A.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${Z(A.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${E(A.value.point.y)}`,
        share: p.value && A.value.point.r != null ? String(A.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : w("", !0),
      e.showLegend && d.value.length > 1 ? (t(), n("div", Nf, [
        (t(!0), n(P, null, D(d.value, (F, V) => (t(), n("span", {
          key: `l-${V}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ee({ backgroundColor: f(V, F) }),
            "aria-hidden": "true"
          }, null, 4),
          U(" " + m(F.name), 1)
        ]))), 128))
      ])) : w("", !0)
    ], 512));
  }
}), Rf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Uf = ["width", "height", "viewBox"], Hf = ["points"], qf = ["x1", "y1", "x2", "y2"], Kf = ["points", "fill", "stroke"], Gf = ["cx", "cy", "fill", "onMouseenter"], Wf = ["x", "y", "text-anchor"], Zf = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Jf = { class: "truncate" }, $w = /* @__PURE__ */ z({
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
    ), s = k(() => r.value[0]?.points.map((c) => c.label) ?? []), i = k(() => s.value.length), u = k(() => l.height), d = k(() => u.value / 2), f = k(() => u.value / 2 - 34), y = k(() => {
      const c = Math.max(...r.value.flatMap((B) => B.points.map((K) => K.value)), 0);
      if (c <= 0)
        return 1;
      const C = 10 ** Math.floor(Math.log10(c));
      return ([1, 2, 2.5, 5, 10].find((B) => c <= B * C) ?? 10) * C;
    });
    function p(c) {
      return c / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function x(c, C) {
      const S = p(c);
      return {
        x: d.value + Math.cos(S) * f.value * C,
        y: d.value + Math.sin(S) * f.value * C
      };
    }
    function M(c) {
      return Array.from({ length: i.value }, (C, S) => {
        const B = x(S, c);
        return `${B.x.toFixed(2)},${B.y.toFixed(2)}`;
      }).join(" ");
    }
    const $ = k(() => [0.25, 0.5, 0.75, 1].map((c) => ({ f: c, points: M(c) }))), _ = k(
      () => r.value.map((c) => {
        const C = c.points.map((S) => Math.max(0, S.value) / y.value);
        return {
          name: c.name,
          color: c.color,
          values: c.points,
          outline: C.map((S, B) => {
            const K = x(B, S);
            return `${K.x.toFixed(2)},${K.y.toFixed(2)}`;
          }).join(" "),
          dots: C.map((S, B) => x(B, S))
        };
      })
    ), h = k(
      () => s.value.map((c, C) => {
        const S = p(C), B = d.value + Math.cos(S) * (f.value + 14), K = d.value + Math.sin(S) * (f.value + 14), R = Math.cos(S);
        return {
          label: c,
          x: B,
          y: K + 3,
          anchor: Math.abs(R) < 0.2 ? "middle" : R > 0 ? "start" : "end"
        };
      })
    ), g = G(null), v = (c) => l.format ? l.format(c) : new Intl.NumberFormat().format(c);
    return (c, C) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ee({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Rf, [
      (t(), n("svg", {
        width: u.value,
        height: u.value,
        viewBox: `0 0 ${u.value} ${u.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(P, null, D($.value, (S) => (t(), n("polygon", {
          key: S.f,
          points: S.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Hf))), 128)),
        (t(!0), n(P, null, D(s.value, (S, B) => (t(), n("line", {
          key: `spoke-${B}`,
          x1: d.value,
          y1: d.value,
          x2: x(B, 1).x,
          y2: x(B, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, qf))), 128)),
        (t(!0), n(P, null, D(_.value, (S, B) => (t(), n("g", {
          key: `s-${B}`
        }, [
          o("polygon", {
            points: S.outline,
            fill: S.color,
            "fill-opacity": "0.16",
            stroke: S.color,
            "stroke-width": "2"
          }, null, 8, Kf),
          (t(!0), n(P, null, D(S.dots, (K, R) => (t(), n("circle", {
            key: R,
            cx: K.x,
            cy: K.y,
            r: "3",
            fill: S.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (Z) => g.value = {
              series: S.name,
              axis: s.value[R],
              value: S.values[R]?.value ?? 0
            },
            onMouseleave: C[0] || (C[0] = (Z) => g.value = null)
          }, null, 40, Gf))), 128))
        ]))), 128)),
        (t(!0), n(P, null, D(h.value, (S, B) => (t(), n("text", {
          key: `l-${B}`,
          x: S.x,
          y: S.y,
          "text-anchor": S.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, m(S.label), 9, Wf))), 128))
      ], 8, Uf)),
      e.showLegend ? (t(), n("ul", Zf, [
        (t(!0), n(P, null, D(r.value, (S, B) => (t(), n("li", {
          key: B,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ee({ background: S.color })
          }, null, 4),
          o("span", Jf, m(S.name), 1)
        ]))), 128))
      ])) : w("", !0),
      g.value ? (t(), I(Ze, {
        key: 1,
        label: `${g.value.series} — ${g.value.axis}`,
        value: v(g.value.value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), Yf = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Xf = ["width", "height", "viewBox"], Qf = ["cx", "cy", "r"], em = ["d", "fill", "fill-opacity", "onMouseenter"], tm = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, am = { class: "min-w-0 flex-1 truncate capitalize" }, nm = { class: "font-medium tabular-nums" }, ww = /* @__PURE__ */ z({
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
      const $ = Math.PI * 2 / M;
      return l.data.map((_, h) => {
        const g = Math.sqrt(Math.max(0, _.value) / d.value), v = u.value * g, c = h * $ - Math.PI / 2, C = c + $;
        return {
          ..._,
          color: a[h % a.length],
          share: d.value === 0 ? 0 : _.value / d.value,
          path: y(i.value, c, C, v)
        };
      });
    });
    function y(M, $, _, h) {
      if (h <= 0)
        return "";
      if (_ - $ >= Math.PI * 2 - 1e-6)
        return `M${M - h},${M} A${h},${h} 0 1 1 ${M + h},${M} A${h},${h} 0 1 1 ${M - h},${M} Z`;
      const g = _ - $ > Math.PI ? 1 : 0, v = M + Math.cos($) * h, c = M + Math.sin($) * h, C = M + Math.cos(_) * h, S = M + Math.sin(_) * h;
      return `M${M},${M} L${v.toFixed(2)},${c.toFixed(2)} A${h.toFixed(2)},${h.toFixed(2)} 0 ${g} 1 ${C.toFixed(2)},${S.toFixed(2)} Z`;
    }
    const p = k(() => [0.5, 0.75, 1].map((M) => u.value * M)), x = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, $) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ee({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Yf, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(P, null, D(p.value, (_) => (t(), n("circle", {
          key: _,
          cx: i.value,
          cy: i.value,
          r: _,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Qf))), 128)),
        (t(!0), n(P, null, D(f.value, (_, h) => (t(), n("path", {
          key: h,
          d: _.path,
          fill: _.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === h ? 0.75 : 0.3,
          onMouseenter: (g) => r.value = h,
          onMouseleave: $[0] || ($[0] = (g) => r.value = null)
        }, null, 40, em))), 128))
      ], 8, Xf)),
      e.showLegend ? (t(), n("ul", tm, [
        (t(!0), n(P, null, D(f.value, (_, h) => (t(), n("li", {
          key: h,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ee({ background: _.color })
          }, null, 4),
          o("span", am, m(_.label), 1),
          o("span", nm, m(x(_.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      r.value !== null ? (t(), I(Ze, {
        key: 1,
        label: f.value[r.value].label,
        value: x(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : w("", !0)
    ]));
  }
}), lm = ["width", "height"], om = ["x1", "x2", "y1", "y2"], sm = ["x", "y"], rm = ["x", "y"], im = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], um = ["x", "y", "width", "height", "fill", "fill-opacity"], dm = ["d", "stroke"], cm = ["cx", "cy", "fill"], fm = ["x", "y"], mm = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, pm = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, vm = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, gm = { class: "text-xs font-semibold tabular-nums" }, hm = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, bm = { class: "text-muted-foreground" }, Cw = /* @__PURE__ */ z({
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
    de(() => {
      i = new ResizeObserver((V) => {
        r.value = Math.max(160, V[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), me(() => i?.disconnect());
    const u = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], d = ["var(--primary)", "var(--chart-5)"], f = k(
      () => l.bars.map((V, J) => ({
        ...V,
        color: V.color ?? u[J % u.length]
      }))
    ), y = k(
      () => l.lines.map((V, J) => ({
        ...V,
        color: V.color ?? d[J % d.length]
      }))
    ), p = k(
      () => f.value[0]?.points.map((V) => V.label) ?? y.value[0]?.points.map((V) => V.label) ?? []
    ), x = k(() => p.value.length), M = k(() => l.lineAxis === "right"), $ = k(() => ({
      top: 12,
      right: M.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), _ = k(() => ({
      w: Math.max(1, r.value - $.value.left - $.value.right),
      h: Math.max(1, l.height - $.value.top - $.value.bottom)
    }));
    function h(V) {
      const J = Math.max(...V, 0);
      if (J <= 0)
        return 1;
      const O = 10 ** Math.floor(Math.log10(J));
      return ([1, 2, 2.5, 5, 10].find((q) => J <= q * O) ?? 10) * O;
    }
    const g = k(
      () => h([
        ...f.value.flatMap((V) => V.points.map((J) => J.value)),
        ...M.value ? [] : y.value.flatMap((V) => V.points.map((J) => J.value))
      ])
    ), v = k(
      () => M.value ? h(y.value.flatMap((V) => V.points.map((J) => J.value))) : g.value
    ), c = k(() => _.value.w / Math.max(1, x.value)), C = k(() => c.value * 0.6), S = k(() => C.value / Math.max(1, f.value.length));
    function B(V) {
      return $.value.left + V * c.value + c.value / 2;
    }
    const K = k(
      () => f.value.flatMap(
        (V, J) => V.points.map((O, W) => {
          const q = Math.max(0, O.value) / g.value * _.value.h;
          return {
            x: B(W) - C.value / 2 + J * S.value,
            y: $.value.top + _.value.h - q,
            w: Math.max(0, S.value - 2),
            h: q,
            color: V.color,
            index: W,
            name: V.name,
            value: O.value,
            label: O.label
          };
        })
      )
    ), R = k(
      () => y.value.map((V) => {
        const J = V.points.map((O, W) => ({
          x: B(W),
          y: $.value.top + _.value.h - Math.max(0, O.value) / v.value * _.value.h,
          value: O.value
        }));
        return {
          ...V,
          pts: J,
          d: J.map((O, W) => `${W === 0 ? "M" : "L"}${O.x.toFixed(2)},${O.y.toFixed(2)}`).join(" ")
        };
      })
    ), Z = k(
      () => [0, 0.25, 0.5, 0.75, 1].map((V) => ({
        y: $.value.top + _.value.h * V,
        left: g.value * (1 - V),
        right: v.value * (1 - V)
      }))
    ), E = k(() => Math.max(1, Math.ceil(x.value / 10)));
    function A(V) {
      return V === x.value - 1 || V % E.value === 0;
    }
    const T = (V) => l.format ? l.format(V) : Y(V);
    function Y(V) {
      return Math.abs(V) >= 1e6 ? `${(V / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(V) >= 1e3 ? `${(V / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(V * 100) / 100);
    }
    const F = k(() => {
      if (s.value === null)
        return null;
      const V = s.value;
      return {
        label: p.value[V],
        rows: [
          ...f.value.map((J) => ({
            name: J.name,
            color: J.color,
            value: J.points[V]?.value ?? 0
          })),
          ...y.value.map((J) => ({
            name: J.name,
            color: J.color,
            value: J.points[V]?.value ?? 0
          }))
        ]
      };
    });
    return (V, J) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      x.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ee({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: J[0] || (J[0] = (O) => s.value = null)
        }, [
          (t(!0), n(P, null, D(Z.value, (O) => (t(), n("line", {
            key: `g-${O.y}`,
            x1: $.value.left,
            x2: r.value - $.value.right,
            y1: O.y,
            y2: O.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, om))), 128)),
          (t(!0), n(P, null, D(Z.value, (O) => (t(), n("text", {
            key: `lt-${O.y}`,
            x: $.value.left - 8,
            y: O.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, m(Y(O.left)), 9, sm))), 128)),
          M.value ? (t(!0), n(P, { key: 0 }, D(Z.value, (O) => (t(), n("text", {
            key: `rt-${O.y}`,
            x: r.value - $.value.right + 8,
            y: O.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, m(Y(O.right)), 9, rm))), 128)) : w("", !0),
          (t(!0), n(P, null, D(p.value, (O, W) => (t(), n("rect", {
            key: `hit-${W}`,
            x: $.value.left + W * c.value,
            y: $.value.top,
            width: c.value,
            height: _.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === W ? 0.4 : 0,
            onMouseenter: (q) => s.value = W
          }, null, 40, im))), 128)),
          (t(!0), n(P, null, D(K.value, (O, W) => (t(), n("rect", {
            key: `b-${W}`,
            x: O.x,
            y: O.y,
            width: O.w,
            height: O.h,
            fill: O.color,
            "fill-opacity": s.value === null || s.value === O.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, um))), 128)),
          (t(!0), n(P, null, D(R.value, (O, W) => (t(), n("g", {
            key: `l-${W}`
          }, [
            o("path", {
              d: O.d,
              fill: "none",
              stroke: O.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, dm),
            s.value !== null && O.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: O.pts[s.value].x,
              cy: O.pts[s.value].y,
              r: "4",
              fill: O.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, cm)) : w("", !0)
          ]))), 128)),
          (t(!0), n(P, null, D(p.value, (O, W) => se((t(), n("text", {
            key: `x-${W}`,
            x: B(W),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, m(O), 9, fm)), [
            [je, A(W)]
          ])), 128))
        ], 40, lm)),
        F.value ? (t(), n("div", mm, [
          o("p", pm, m(F.value.label), 1),
          (t(!0), n(P, null, D(F.value.rows, (O, W) => (t(), n("div", {
            key: W,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ee({ background: O.color })
            }, null, 4),
            o("span", vm, m(O.name), 1),
            o("span", gm, m(T(O.value)), 1)
          ]))), 128))
        ])) : w("", !0),
        e.showLegend ? (t(), n("div", hm, [
          (t(!0), n(P, null, D([...f.value, ...y.value], (O, W) => (t(), n("span", {
            key: W,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ee({ background: O.color })
            }, null, 4),
            o("span", bm, m(O.name), 1)
          ]))), 128))
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), ym = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, xm = { class: "text-muted-foreground" }, km = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, $m = ["width", "height"], wm = ["x", "y"], Cm = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], _m = ["x", "y"], Mm = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Sm = { class: "text-[11px] font-medium capitalize" }, Bm = { class: "text-muted-foreground text-[11px] capitalize" }, Pm = { class: "text-sm font-semibold tabular-nums" }, zm = { class: "text-muted-foreground text-xs font-normal" }, _w = /* @__PURE__ */ z({
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
    de(() => {
      i = new ResizeObserver((C) => {
        r.value = Math.max(160, C[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), me(() => i?.disconnect());
    const u = k(() => l.series[0]?.points.map((C) => C.label) ?? []), d = k(() => l.series.length), f = k(() => u.value.length), y = k(() => Math.min(140, Math.max(60, r.value * 0.16))), p = k(() => Math.max(1, r.value - y.value - 8)), x = k(() => p.value / Math.max(1, f.value)), M = k(() => Math.max(1, (l.height - 8) / Math.max(1, d.value)));
    function $(C) {
      if (C === 0)
        return "var(--muted)";
      const S = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(C / S * 100)}%, var(--muted))`;
    }
    function _(C) {
      for (let S = 0; S < l.buckets.length; S++) {
        const B = l.buckets[S].max;
        if (B === void 0 || C < B)
          return S;
      }
      return l.buckets.length - 1;
    }
    const h = k(
      () => l.series.flatMap(
        (C, S) => C.points.map((B, K) => {
          const R = _(B.value);
          return {
            row: S,
            col: K,
            x: y.value + K * x.value,
            y: 4 + S * M.value,
            w: Math.max(1, x.value - 1),
            h: Math.max(1, M.value - 4),
            colour: $(R),
            label: B.label,
            value: B.value,
            rowName: C.name,
            bucketLabel: l.buckets[R].label
          };
        })
      )
    ), g = k(() => x.value < 2), v = k(() => s.value ? h.value.find((C) => C.row === s.value.row && C.col === s.value.col) ?? null : null), c = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, S) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      d.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ee({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(P, { key: 1 }, [
        o("div", ym, [
          (t(!0), n(P, null, D(e.buckets, (B, K) => (t(), n("span", {
            key: K,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ee({ background: $(K) })
            }, null, 4),
            o("span", xm, m(B.label), 1)
          ]))), 128))
        ]),
        g.value ? (t(), n("p", km, m(f.value) + " columns - too many to label individually ", 1)) : w("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: S[0] || (S[0] = (B) => s.value = null)
        }, [
          (t(!0), n(P, null, D(e.series, (B, K) => (t(), n("text", {
            key: `r-${K}`,
            x: y.value - 10,
            y: 4 + K * M.value + M.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, m(B.name), 9, wm))), 128)),
          (t(!0), n(P, null, D(h.value, (B, K) => (t(), n("rect", {
            key: K,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.colour,
            "fill-opacity": s.value === null || s.value.row === B.row && s.value.col === B.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (R) => s.value = { row: B.row, col: B.col }
          }, null, 40, Cm))), 128)),
          e.showColumnLabels && !g.value ? (t(!0), n(P, { key: 0 }, D(u.value, (B, K) => (t(), n("text", {
            key: `c-${K}`,
            x: y.value + K * x.value + x.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, m(B), 9, _m))), 128)) : w("", !0)
        ], 40, $m)),
        v.value ? (t(), n("div", Mm, [
          o("p", Sm, m(v.value.label), 1),
          o("p", Bm, m(v.value.rowName), 1),
          o("p", Pm, [
            U(m(c(v.value.value)) + " ", 1),
            o("span", zm, "(" + m(v.value.bucketLabel) + ")", 1)
          ])
        ])) : w("", !0)
      ], 64))
    ], 512));
  }
}), Am = ["viewBox"], jm = { key: 0 }, Om = ["id"], Lm = ["stop-color"], Vm = ["stop-color"], Dm = ["d", "fill"], Tm = ["d", "stroke"], Et = 100, Ne = 30, tt = /* @__PURE__ */ z({
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
        x: M / (d.length - 1) * Et,
        y: Ne - (x - f) / p * (Ne - 4) - 2
      }));
    });
    function s(d) {
      const f = d.length;
      if (f < 2)
        return "";
      const y = [], p = [];
      for (let $ = 0; $ < f - 1; $++)
        y[$] = d[$ + 1].x - d[$].x, p[$] = y[$] === 0 ? 0 : (d[$ + 1].y - d[$].y) / y[$];
      const x = [p[0]];
      for (let $ = 1; $ < f - 1; $++)
        if (p[$ - 1] * p[$] <= 0)
          x[$] = 0;
        else {
          const _ = 2 * y[$] + y[$ - 1], h = y[$] + 2 * y[$ - 1];
          x[$] = (_ + h) / (_ / p[$ - 1] + h / p[$]);
        }
      x[f - 1] = p[f - 2];
      let M = `M${d[0].x.toFixed(2)},${d[0].y.toFixed(2)}`;
      for (let $ = 0; $ < f - 1; $++) {
        const _ = y[$] / 3;
        M += ` C${(d[$].x + _).toFixed(2)},${(d[$].y + x[$] * _).toFixed(2)} ${(d[$ + 1].x - _).toFixed(2)},${(d[$ + 1].y - x[$ + 1] * _).toFixed(2)} ${d[$ + 1].x.toFixed(2)},${d[$ + 1].y.toFixed(2)}`;
      }
      return M;
    }
    const i = k(() => {
      const d = r.value;
      return d.length < 2 ? "" : l.smooth ? s(d) : d.map((f, y) => `${y === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), u = k(() => {
      const d = r.value;
      return !l.filled || d.length < 2 ? "" : `${i.value} L${d[d.length - 1].x.toFixed(2)},${Ne} L${d[0].x.toFixed(2)},${Ne} Z`;
    });
    return (d, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${Et} ${Ne}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ee({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", jm, [
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
          }, null, 8, Lm),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Vm)
        ], 8, Om)
      ])) : w("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: u.value,
        fill: `url(#pk-spark-${b(a)})`
      }, null, 8, Dm)) : w("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Tm)
    ], 12, Am)) : w("", !0);
  }
}), Fm = { class: "flex items-center gap-1 text-xs" }, Em = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Im = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ua = /* @__PURE__ */ z({
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
    return (u, d) => (t(), n("span", Fm, [
      o("span", {
        class: j(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Em, m(s.value), 1),
        U(" " + m(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Im, m(e.comparison), 1)) : w("", !0)
    ]));
  }
}), Nm = ["aria-label"], De = /* @__PURE__ */ z({
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
      style: ee(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(P, null, D(s.value, (f) => (t(), n("span", {
        key: f,
        "aria-hidden": "true",
        class: j(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ee({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Nm));
  }
}), Rm = ["data-collapsed"], Um = { class: "flex flex-wrap items-start justify-between gap-2" }, Hm = { class: "flex min-w-0 items-start gap-2" }, qm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Km = ["d"], Gm = { class: "min-w-0" }, Wm = { class: "text-sm font-medium" }, Zm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Jm = { class: "flex shrink-0 items-center gap-1.5" }, Ym = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Xm = ["aria-pressed", "onClick"], Qm = ["aria-expanded", "aria-label", "title"], ep = ["aria-label"], tp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ap = ["d"], np = /* @__PURE__ */ z({
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
      o("div", Um, [
        o("div", Hm, [
          H(u.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", qm, [
              o("path", {
                d: b(oe)(e.icon)
              }, null, 8, Km)
            ])) : w("", !0)
          ]),
          o("div", Gm, [
            o("p", Wm, m(e.label), 1),
            e.description ? (t(), n("p", Zm, m(e.description), 1)) : w("", !0),
            H(u.$slots, "trend")
          ])
        ]),
        o("div", Jm, [
          H(u.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Ym, [
            (t(!0), n(P, null, D(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: j([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (y) => u.$emit("update:period", f.value)
            }, m(f.label), 11, Xm))), 128))
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
          ], 8, Qm)) : w("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: d[1] || (d[1] = (f) => u.$emit("hide"))
          }, [
            (t(), n("svg", tp, [
              o("path", {
                d: b(oe)("eye-off")
              }, null, 8, ap)
            ]))
          ], 8, ep)) : w("", !0)
        ])
      ]),
      r.value ? w("", !0) : (t(), n("div", {
        key: 0,
        style: ee(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), I(De, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ee({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : H(u.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, Rm));
  }
}), lp = ["aria-pressed", "aria-label", "title"], op = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sp = ["d"], rp = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, ip = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, up = ["href"], dp = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, cp = ["d"], fp = ["aria-label", "onClick"], mp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, pp = ["d"], vp = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gp = ["d"], hp = {
  key: 0,
  class: "flex flex-col gap-1"
}, bp = ["onClick"], yp = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xp = ["d"], kp = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, $p = /* @__PURE__ */ z({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(!1), i = G(!1), u = k(
      () => a.catalog.filter((y) => !a.items.some((p) => p.id === y.id))
    );
    function d(y) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== y)
      );
    }
    function f(y) {
      r("update:items", [...a.items, y]), i.value = !1;
    }
    return (y, p) => (t(), n(P, null, [
      N(np, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (x) => r("hide"))
      }, {
        actions: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (x) => s.value = !s.value)
          }, [
            (t(), n("svg", op, [
              o("path", {
                d: b(oe)(s.value ? "check" : "pencil")
              }, null, 8, sp)
            ]))
          ], 8, lp)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", rp, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm" }, "No shortcuts yet.", -1)),
            N(ne, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (x) => i.value = !0)
            }, {
              default: L(() => [...p[6] || (p[6] = [
                U("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", ip, [
            (t(!0), n(P, null, D(e.items, (x) => (t(), n("div", {
              key: x.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: x.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", dp, [
                  o("path", {
                    d: b(oe)(x.icon)
                  }, null, 8, cp)
                ])),
                U(" " + m(x.label), 1)
              ], 8, up),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${x.label}`,
                onClick: (M) => d(x.id)
              }, [
                (t(), n("svg", mp, [
                  o("path", {
                    d: b(oe)("x")
                  }, null, 8, pp)
                ]))
              ], 8, fp)) : w("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (x) => i.value = !0)
            }, [
              (t(), n("svg", vp, [
                o("path", {
                  d: b(oe)("plus")
                }, null, 8, gp)
              ])),
              p[8] || (p[8] = U(" Add ", -1))
            ])) : w("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      N(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (x) => i.value = !1)
      }, {
        footer: L(() => [
          N(ne, {
            variant: "outline",
            onClick: p[4] || (p[4] = (x) => i.value = !1)
          }, {
            default: L(() => [...p[9] || (p[9] = [
              U("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          u.value.length ? (t(), n("ul", hp, [
            (t(!0), n(P, null, D(u.value, (x) => (t(), n("li", {
              key: x.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (M) => f(x)
              }, [
                (t(), n("svg", yp, [
                  o("path", {
                    d: b(oe)(x.icon)
                  }, null, 8, xp)
                ])),
                U(" " + m(x.label), 1)
              ], 8, bp)
            ]))), 128))
          ])) : (t(), n("p", kp, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), wp = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Cp = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, _p = { class: "relative w-full max-w-xl" }, Mp = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sp = ["d"], Bp = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Pp = ["data-slot"], zp = { class: "px-5 py-4" }, Ap = { class: "mb-3 text-sm font-semibold" }, jp = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Op = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lp = ["d"], Vp = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, Mw = /* @__PURE__ */ z({
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
        links: d ? f.links.filter((y) => y.label.toLowerCase().includes(d)) : f.links
      })).filter((f) => f.links.length > 0);
    });
    return (d, f) => (t(), n("div", {
      class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
    }, [
      o("header", null, [
        o("h1", wp, m(e.title), 1),
        e.description ? (t(), n("p", Cp, m(e.description), 1)) : w("", !0)
      ]),
      o("div", _p, [
        (t(), n("svg", Mp, [
          o("path", {
            d: b(oe)("search")
          }, null, 8, Sp)
        ])),
        N(fe, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (y) => a.value = y),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      u.value.length ? (t(), n("div", Bp, [
        (t(!0), n(P, null, D(u.value, (y) => (t(), n("section", {
          key: y.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${y.key}`
        }, [
          o("div", zp, [
            o("h2", Ap, m(y.title), 1),
            o("div", jp, [
              (t(!0), n(P, null, D(y.links, (p) => (t(), I(Ae(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: j(b(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", Op, [
                    o("path", {
                      d: b(oe)(p.icon)
                    }, null, 8, Lp)
                  ])),
                  U(" " + m(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Pp))), 128))
      ])) : (t(), n("p", Vp, ' Nothing matches "' + m(a.value) + '". ', 1))
    ], 2));
  }
}), Dp = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Tp = { class: "flex flex-1 flex-col gap-1 p-4" }, Fp = { class: "text-muted-foreground relative text-xs font-medium" }, Ep = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Ip = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Np = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Rp = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, Sw = /* @__PURE__ */ z({
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
    return (a, r) => (t(), n("div", Dp, [
      o("div", Tp, [
        o("p", Fp, m(e.label), 1),
        e.loading ? (t(), I(De, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Ep, " Could not load ")) : (t(), n("span", Ip, m(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), I(ua, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", Np, m(e.description), 1)) : w("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Rp, [
        N(tt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : w("", !0)
    ]));
  }
}), Up = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Hp = { class: "flex flex-col gap-1 p-4" }, qp = { class: "flex items-start justify-between gap-2" }, Kp = { class: "text-sm font-medium" }, Gp = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Wp = { class: "mt-1 flex flex-wrap items-center gap-2" }, Zp = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Jp = {
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
    const l = e, a = k(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = k(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = k(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, u) => (t(), n("div", Up, [
      o("div", Hp, [
        o("div", qp, [
          o("p", Kp, m(e.label), 1),
          H(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Gp, m(e.caption), 1)) : w("", !0),
        o("div", Wp, [
          e.loading ? (t(), I(De, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Zp, m(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: j(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, m(e.delta > 0 ? "+" : "") + m(e.delta) + "% ", 3)) : w("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Jp, [
        N(tt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : w("", !0)
    ]));
  }
}), Yp = { class: "relative flex flex-col gap-2" }, Xp = ["aria-label"], Qp = ["onMouseenter"], ev = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, tv = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, av = { class: "truncate" }, nv = { class: "text-sm font-semibold tabular-nums" }, Bw = /* @__PURE__ */ z({
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
    ], r = k(() => l.segments.reduce((y, p) => y + Math.max(0, p.value), 0)), s = k(() => Math.max(l.total ?? r.value, r.value, 1)), i = k(
      () => l.segments.map((y, p) => {
        const x = Math.max(0, y.value) / s.value;
        return {
          ...y,
          color: y.color ?? a[p % a.length],
          share: x,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: y.value > 0 ? `max(2px, ${(x * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), u = (y) => l.format ? l.format(y) : new Intl.NumberFormat().format(y), d = G(null), f = (y) => `${(y * 100).toFixed(y > 0 && y < 0.01 ? 1 : 0)}%`;
    return (y, p) => (t(), n("div", Yp, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ee({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((x) => `${x.label} ${u(x.value)}`).join(", ")
      }, [
        (t(!0), n(P, null, D(i.value, (x, M) => (t(), n("span", {
          key: M,
          class: j(["h-full transition-all", [
            M === 0 ? "rounded-l-full" : "",
            M === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ee({
            width: x.width,
            background: x.color,
            opacity: d.value === null || d.value === M ? 1 : 0.4
          }),
          onMouseenter: ($) => d.value = M,
          onMouseleave: p[0] || (p[0] = ($) => d.value = null)
        }, null, 46, Qp))), 128))
      ], 12, Xp),
      e.showLegend ? (t(), n("div", ev, [
        (t(!0), n(P, null, D(i.value, (x, M) => (t(), n("div", {
          key: M,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", tv, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ee({ background: x.color })
            }, null, 4),
            o("span", av, m(x.label), 1)
          ]),
          o("span", nv, m(u(x.value)), 1)
        ]))), 128))
      ])) : w("", !0),
      d.value !== null ? (t(), I(Ze, {
        key: 1,
        label: i.value[d.value].label,
        value: u(i.value[d.value].value),
        share: f(i.value[d.value].share)
      }, null, 8, ["label", "value", "share"])) : w("", !0)
    ]));
  }
}), lv = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, ov = ["data-heading"], sv = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, rv = { class: "text-muted-foreground truncate" }, iv = ["aria-label"], Pw = /* @__PURE__ */ z({
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
        const u = i.bar.segments.reduce((f, y) => f + Math.max(0, y.value), 0), d = Math.max(i.bar.total ?? u, u, 1);
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
    return (i, u) => (t(), n("div", lv, [
      (t(!0), n(P, null, D(s.value, (d) => (t(), n("div", {
        key: d.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": d.heading ? "true" : void 0
      }, [
        d.heading ? (t(), n("div", {
          key: 0,
          class: j(["pt-1 text-xs font-semibold tracking-wide uppercase", d.tone ? a[d.tone] : "text-muted-foreground"])
        }, m(d.label), 3)) : (t(), n("div", sv, [
          o("span", rv, m(d.label), 1),
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
          (t(!0), n(P, null, D(d.segments, (f, y) => (t(), n("span", {
            key: y,
            class: j(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: ee({ width: f.width })
          }, null, 6))), 128))
        ], 8, iv)) : w("", !0)
      ], 8, ov))), 128))
    ]));
  }
}), uv = {
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
}, dv = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function cv(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function fv(e, l) {
  return l || (e ? uv[cv(e)] ?? "neutral" : "neutral");
}
function mv(e, l) {
  return dv[fv(e, l)];
}
const pe = /* @__PURE__ */ z({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = k(() => mv(l.status, l.tone));
    return (r, s) => (t(), I(Re, {
      variant: a.value,
      class: j(l.class)
    }, {
      default: L(() => [
        H(r.$slots, "default", {}, () => [
          U(m(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), pv = ["data-layout"], vv = ["src", "alt"], gv = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, hv = ["src"], bv = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, yv = ["onMouseenter"], xv = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, kv = { class: "min-w-0" }, $v = { class: "truncate text-sm font-medium" }, wv = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Cv = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, _v = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Mv = { class: "min-w-0" }, Sv = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Bv = {
  key: 1,
  class: "text-muted-foreground text-xs tabular-nums"
}, Pv = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zv = ["d"], Av = ["aria-label"], jv = /* @__PURE__ */ z({
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
    function u(h) {
      if (typeof h != "string")
        return null;
      const g = h.trim();
      return g === "" ? null : /^(https?:)?\/\//i.test(g) ? g : null;
    }
    const d = k(() => {
      const h = [r.item.image, ...r.item.images ?? []].map(u).filter((g) => g !== null);
      return [...new Set(h)];
    }), f = k(() => d.value[i.value] ?? d.value[0] ?? null), y = k(
      () => r.item.label.split(/\s+/).slice(0, 2).map((h) => h[0]?.toUpperCase() ?? "").join("")
    ), p = k(() => {
      const h = r.item.progress;
      if (!h)
        return null;
      const g = Math.max(h.total ?? 100, h.value, 1);
      return `${Math.min(100, Math.max(0, h.value / g * 100)).toFixed(2)}%`;
    }), x = k(() => d.value.length > 1 ? d.value[1] : null), M = k(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), $ = k(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function _(h) {
      h.stopPropagation(), s("cart", r.item.key);
    }
    return (h, g) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: j(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: g[0] || (g[0] = (v) => s("select", e.item.key)),
      onKeydown: g[1] || (g[1] = ya(ie((v) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: g[2] || (g[2] = (v) => i.value = 0)
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
        }, null, 8, vv)) : (t(), n("span", gv, m(y.value), 1)),
        e.layout === "grid" && x.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: x.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, hv)) : w("", !0),
        e.layout === "grid" && d.value.length > 1 ? (t(), n("div", bv, [
          (t(!0), n(P, null, D(d.value, (v, c) => (t(), n("span", {
            key: c,
            class: j(["size-1.5 rounded-full", c === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (C) => i.value = c
          }, null, 42, yv))), 128))
        ])) : w("", !0)
      ], 2),
      o("div", {
        class: j(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", xv, [
          o("div", kv, [
            o("p", $v, m(e.item.label), 1),
            e.item.caption ? (t(), n("p", wv, m(e.item.caption), 1)) : w("", !0),
            e.item.facts?.length ? (t(), n("p", Cv, m(e.item.facts.join(" · ")), 1)) : w("", !0)
          ]),
          e.item.status ? (t(), I(pe, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : w("", !0)
        ]),
        o("div", _v, [
          o("div", Mv, [
            e.item.price ? (t(), n("p", Sv, m(e.item.price), 1)) : w("", !0),
            $.value ? (t(), n("p", Bv, m($.value), 1)) : w("", !0)
          ]),
          M.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: _
          }, [
            (t(), n("svg", Pv, [
              o("path", {
                d: b(oe)("cart")
              }, null, 8, zv)
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
            style: ee({ width: p.value })
          }, null, 6)
        ], 8, Av)) : w("", !0)
      ], 2)
    ], 42, pv));
  }
});
function Ov(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Lv(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Vv(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Dv = ["data-featured", "data-recommended"], Tv = { class: "flex flex-col gap-1" }, Fv = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Ev = { key: 0 }, Iv = { key: 1 }, Nv = { key: 2 }, Rv = { key: 3 }, Uv = { class: "text-sm font-semibold" }, Hv = { class: "flex items-baseline gap-1" }, qv = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Kv = { class: "text-muted-foreground text-sm" }, Gv = {
  key: 1,
  class: "text-muted-foreground text-sm text-pretty"
}, Wv = { class: "text-muted-foreground mt-1 text-xs" }, Zv = { class: "flex flex-1 flex-col gap-2 text-sm" }, Jv = { class: "flex min-w-0 items-start gap-2" }, Yv = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Xv = ["d"], Qv = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, eg = ["d"], tg = { class: "capitalize" }, ag = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, ng = { class: "text-foreground font-medium" }, lg = { class: "mt-auto flex gap-2 pt-2" }, og = /* @__PURE__ */ z({
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
      return Object.entries(f).map(([y, p]) => ({
        key: y,
        label: y.replace(/_/g, " "),
        granted: Vv(p.value),
        display: Lv(p.value)
      }));
    }), d = k(() => a.plan.extraPerks ?? []);
    return (f, y) => (t(), n("article", {
      class: j(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", Tv, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", Fv, [
          e.plan.recommended ? (t(), n("span", Ev, "Recommended")) : e.plan.featured ? (t(), n("span", Iv, "Featured")) : w("", !0),
          e.plan.trial ? (t(), n("span", Nv, "Trial")) : w("", !0),
          e.plan.active === !1 ? (t(), n("span", Rv, "Inactive")) : w("", !0)
        ])) : w("", !0),
        o("h3", Uv, m(e.plan.name), 1),
        o("p", Hv, [
          o("span", qv, m(s.value), 1),
          o("span", Kv, m(b(Ov)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", Gv, m(e.plan.shortDescription), 1)) : w("", !0),
        o("p", Wv, " Active seats: " + m(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", Zv, [
        (t(!0), n(P, null, D(u.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", Jv, [
            o("span", {
              class: j(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", Yv, [
                o("path", {
                  d: b(oe)("check")
                }, null, 8, Xv)
              ])) : (t(), n("svg", Qv, [
                o("path", {
                  d: b(oe)("x")
                }, null, 8, eg)
              ]))
            ], 2),
            o("span", tg, m(p.label), 1)
          ]),
          p.display ? (t(), n("span", ag, m(p.display), 1)) : w("", !0)
        ]))), 128)),
        (t(!0), n(P, null, D(d.value, (p, x) => (t(), n("li", {
          key: `extra-${x}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, m(p.key), 1),
          o("span", ng, m(p.value), 1)
        ]))), 128))
      ]),
      o("footer", lg, [
        N(ne, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: y[0] || (y[0] = (p) => r("edit", e.plan.id))
        }, {
          default: L(() => [...y[2] || (y[2] = [
            U(" Edit ", -1)
          ])]),
          _: 1
        }),
        N(ne, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: y[1] || (y[1] = (p) => r("delete", e.plan.id))
        }, {
          default: L(() => [...y[3] || (y[3] = [
            U(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Dv));
  }
}), sg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, rg = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, ig = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, ug = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, dg = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, zw = /* @__PURE__ */ z({
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
      o("header", sg, [
        o("div", null, [
          e.title ? (t(), n("h1", rg, m(e.title), 1)) : w("", !0),
          e.description ? (t(), n("p", ig, m(e.description), 1)) : w("", !0)
        ]),
        N(ne, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: L(() => [...s[3] || (s[3] = [
            U("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", ug, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", dg, [
        (t(!0), n(P, null, D(e.plans, (i) => (t(), I(og, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (u) => a("edit", u)),
          onDelete: s[2] || (s[2] = (u) => a("delete", u))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), cg = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, fg = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, mg = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, pg = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, vg = { class: "space-y-1.5" }, gg = { class: "space-y-1.5" }, hg = { class: "space-y-1.5" }, bg = { class: "space-y-1.5" }, yg = { class: "space-y-1.5" }, xg = { class: "flex items-center gap-3 text-sm" }, kg = { class: "flex items-center gap-3 text-sm" }, $g = { class: "flex items-center gap-3 text-sm" }, wg = {
  key: 0,
  class: "space-y-1.5"
}, Cg = { class: "flex items-center gap-3 text-sm" }, _g = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Mg = { class: "space-y-1.5" }, Sg = ["value"], Bg = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Pg = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, zg = ["id", "value", "onInput"], Ag = { class: "space-y-2" }, jg = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Og = ["d"], Lg = "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", st = "placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Aw = /* @__PURE__ */ z({
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
    }), r = e, s = l, i = Ue(a());
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
    function y(g) {
      const v = g ? { ...a(), ...g } : a();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || d("modules", []);
    }
    y(r.plan), re(
      () => r.plan,
      (g) => y(g),
      { deep: !0 }
    );
    const p = k({
      get: () => {
        const g = u("modules", []);
        return Array.isArray(g) ? g.map(String) : [];
      },
      set: (g) => {
        d("modules", M(g.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), x = k(
      () => r.modules.map((g) => ({ value: g.key, label: g.label }))
    );
    function M(g) {
      const v = Object.fromEntries(r.modules.map((S) => [S.key, S])), c = new Set(g);
      for (const S of r.modules)
        if (!c.has(S.key))
          for (const B of S.children ?? [])
            c.delete(B);
      let C = !0;
      for (; C; ) {
        C = !1;
        for (const S of [...c])
          for (const B of v[S]?.requires ?? [])
            c.has(B) || (c.add(B), C = !0);
      }
      return [...c];
    }
    function $() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function _(g) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, c) => c !== g);
    }
    function h() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((g) => g.key.trim() !== "")
      });
    }
    return (g, v) => (t(), n("form", {
      class: j(["w-full space-y-6", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"]),
      "data-slot": "plan-editor",
      onSubmit: ie(h, ["prevent"])
    }, [
      o("header", cg, [
        o("div", null, [
          o("h1", fg, m(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        N(ne, {
          type: "button",
          variant: "outline",
          onClick: v[0] || (v[0] = (c) => s("cancel"))
        }, {
          default: L(() => [...v[14] || (v[14] = [
            U("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", mg, [
        o("section", pg, [
          v[26] || (v[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", vg, [
            N(he, { for: "plan-name" }, {
              default: L(() => [...v[15] || (v[15] = [
                U("Plan name", -1)
              ])]),
              _: 1
            }),
            N(fe, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (c) => i.name = c),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", gg, [
            N(he, { for: "plan-short" }, {
              default: L(() => [...v[16] || (v[16] = [
                U("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            N(fe, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (c) => i.shortDescription = c),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", hg, [
            N(he, { for: "plan-description" }, {
              default: L(() => [...v[17] || (v[17] = [
                U("Plan description", -1)
              ])]),
              _: 1
            }),
            se(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (c) => i.description = c),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: j(st)
            }, null, 512), [
              [be, i.description]
            ])
          ]),
          o("div", bg, [
            N(he, { for: "plan-days" }, {
              default: L(() => [...v[18] || (v[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            se(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (c) => i.days = c),
              class: j(Lg)
            }, [...v[19] || (v[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Le,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", yg, [
            N(he, { for: "plan-price" }, {
              default: L(() => [...v[20] || (v[20] = [
                U("Price", -1)
              ])]),
              _: 1
            }),
            N(fe, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": v[5] || (v[5] = (c) => i.price = Number(c))
            }, null, 8, ["model-value"])
          ]),
          o("label", xg, [
            N(b(Ve), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (c) => i.featured = c)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = U(" Featured ", -1))
          ]),
          o("label", kg, [
            N(b(Ve), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (c) => i.recommended = c)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = U(" Recommended ", -1))
          ]),
          o("label", $g, [
            N(b(Ve), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (c) => i.trial = c)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", wg, [
            N(he, { for: "plan-trial-days" }, {
              default: L(() => [...v[24] || (v[24] = [
                U("Trial days", -1)
              ])]),
              _: 1
            }),
            N(fe, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (c) => i.trialDays = Number(c))
            }, null, 8, ["model-value"])
          ])) : w("", !0),
          o("label", Cg, [
            N(b(Ve), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (c) => i.active = c)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = U(" Active ", -1))
          ]),
          N(ne, {
            type: "submit",
            disabled: e.processing
          }, {
            default: L(() => [
              U(m(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", _g, [
          v[33] || (v[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Mg, [
            N(he, null, {
              default: L(() => [...v[27] || (v[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            N(Mt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (c) => p.value = c),
              options: x.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            N(he, { for: "plan-modules-overview" }, {
              default: L(() => [...v[28] || (v[28] = [
                U("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: j(st),
              onInput: v[12] || (v[12] = (c) => f(
                "modules",
                c.target.value
              ))
            }, null, 40, Sg)
          ]),
          (t(!0), n(P, null, D(e.limits, (c) => (t(), n("div", {
            key: c.key,
            class: "space-y-1.5"
          }, [
            c.kind === "toggle" ? (t(), n("label", Bg, [
              N(b(Ve), {
                checked: !!u(c.key, !1),
                "onUpdate:checked": (C) => d(
                  c.key,
                  C,
                  i.perks?.[c.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              U(" " + m(c.label), 1)
            ])) : (t(), n(P, { key: 1 }, [
              N(he, {
                for: `plan-limit-${c.key}`
              }, {
                default: L(() => [
                  U(m(c.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              c.hint ? (t(), n("p", Pg, m(c.hint), 1)) : w("", !0),
              N(fe, {
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
              v[29] || (v[29] = o("p", { class: "text-muted-foreground text-xs" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            N(he, {
              for: `plan-overview-${c.key}`
            }, {
              default: L(() => [...v[30] || (v[30] = [
                U("Overview", -1)
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
            }, null, 40, zg)
          ]))), 128)),
          o("div", Ag, [
            v[32] || (v[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(P, null, D(i.extraPerks ?? [], (c, C) => (t(), n("div", {
              key: C,
              class: "flex items-center gap-2"
            }, [
              N(fe, {
                modelValue: c.key,
                "onUpdate:modelValue": (S) => c.key = S,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              N(fe, {
                modelValue: c.value,
                "onUpdate:modelValue": (S) => c.value = S,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              N(ne, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (S) => _(C)
              }, {
                default: L(() => [
                  (t(), n("svg", jg, [
                    o("path", {
                      d: b(oe)("x")
                    }, null, 8, Og)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            N(ne, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: $
            }, {
              default: L(() => [...v[31] || (v[31] = [
                U(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Vg = { class: "flex flex-col gap-4" }, Dg = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Tg = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Fg = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Eg = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ig = ["d"], Ng = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Rg = ["aria-pressed"], Ug = ["aria-pressed"], Hg = {
  key: 0,
  class: "flex flex-col gap-2"
}, qg = ["aria-label"], Kg = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Gg = ["aria-pressed", "onClick"], Wg = ["aria-label"], Zg = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Jg = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, Yg = ["data-slot"], Xg = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Qg = { class: "text-muted-foreground text-xs tabular-nums" }, eh = { class: "flex items-center gap-2" }, th = ["disabled"], ah = ["disabled"], St = /* @__PURE__ */ z({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Se({
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
  emits: /* @__PURE__ */ Se(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(""), i = Ke(e, "modelValue"), u = Ue({}), d = Ue({});
    re(s, () => x());
    function f(R) {
      const Z = R.trim();
      if (Z === "")
        return null;
      const E = Number(Z);
      return Number.isFinite(E) ? E : null;
    }
    function y() {
      const R = {};
      for (const [Z, E] of Object.entries(d))
        R[Z] = { min: f(E.min), max: f(E.max) };
      return R;
    }
    function p() {
      return { query: s.value, selected: { ...u }, ranges: y() };
    }
    function x() {
      r("filter", p());
    }
    function M(R, Z) {
      u[R] = u[R] === Z ? null : Z, x();
    }
    function $(R) {
      return d[R] ?? { min: "", max: "" };
    }
    function _(R, Z, E) {
      const A = d[R] ?? { min: "", max: "" };
      d[R] = { ...A, [Z]: E }, x();
    }
    function h(R) {
      R.key === "Enter" && (R.preventDefault(), r("scan", s.value.trim()));
    }
    const g = k(() => a.facets.filter((R) => (R.kind ?? "chips") === "chips")), v = k(() => a.facets.filter((R) => R.kind === "range")), c = k(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), C = G(1);
    re(
      () => a.items.map((R) => R.key).join(","),
      () => {
        C.value = 1;
      }
    );
    const S = k(() => {
      const R = a.pageSize;
      return !R || R < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / R));
    }), B = k(() => {
      const R = a.pageSize;
      if (!R || R < 1)
        return a.items;
      const Z = (C.value - 1) * R;
      return a.items.slice(Z, Z + R);
    });
    function K(R) {
      C.value = Math.min(S.value, Math.max(1, R));
    }
    return (R, Z) => (t(), n("div", Vg, [
      c.value ? (t(), n("div", Dg, [
        o("div", Tg, [
          e.searchable ? (t(), n("div", Fg, [
            (t(), n("svg", Eg, [
              o("path", {
                d: b(oe)("search")
              }, null, 8, Ig)
            ])),
            N(fe, {
              modelValue: s.value,
              "onUpdate:modelValue": Z[0] || (Z[0] = (E) => s.value = E),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: h
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : w("", !0),
          H(R.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Ng, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: Z[1] || (Z[1] = (E) => i.value = "grid")
            }, " Tiles ", 10, Rg),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: Z[2] || (Z[2] = (E) => i.value = "list")
            }, " List ", 10, Ug)
          ])) : w("", !0)
        ]),
        g.value.length || v.value.length ? (t(), n("div", Hg, [
          (t(!0), n(P, null, D(g.value, (E) => (t(), n("div", {
            key: E.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": E.label ?? E.key
          }, [
            E.label ? (t(), n("span", Kg, m(E.label), 1)) : w("", !0),
            (t(!0), n(P, null, D(E.options ?? [], (A) => (t(), n("button", {
              key: A.value,
              type: "button",
              class: j([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                u[E.key] === A.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": u[E.key] === A.value ? "true" : "false",
              onClick: (T) => M(E.key, A.value)
            }, m(A.label), 11, Gg))), 128))
          ], 8, qg))), 128)),
          (t(!0), n(P, null, D(v.value, (E) => (t(), n("div", {
            key: E.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": E.label ?? E.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Zg, m(E.label ?? E.key), 1),
            N(fe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${E.label ?? E.key} from`,
              "model-value": $(E.key).min,
              "onUpdate:modelValue": (A) => _(E.key, "min", String(A))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            Z[7] || (Z[7] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
            N(fe, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${E.label ?? E.key} to`,
              "model-value": $(E.key).max,
              "onUpdate:modelValue": (A) => _(E.key, "max", String(A))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Wg))), 128))
        ])) : w("", !0)
      ])) : w("", !0),
      e.items.length === 0 ? (t(), n("p", Jg, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: j(
          i.value === "list" ? "flex flex-col gap-3" : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(P, null, D(B.value, (E) => (t(), I(jv, {
          key: E.key,
          item: E,
          layout: i.value,
          onSelect: Z[3] || (Z[3] = (A) => r("select", A)),
          onCart: Z[4] || (Z[4] = (A) => r("cart", A))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Yg)),
      e.pageSize && S.value > 1 ? (t(), n("div", Xg, [
        o("p", Qg, " Page " + m(C.value) + " of " + m(S.value), 1),
        o("div", eh, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value <= 1,
            onClick: Z[5] || (Z[5] = (E) => K(C.value - 1))
          }, " Previous ", 8, th),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: C.value >= S.value,
            onClick: Z[6] || (Z[6] = (E) => K(C.value + 1))
          }, " Next ", 8, ah)
        ])
      ])) : w("", !0)
    ]));
  }
}), nh = ["aria-label"], lh = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, oh = { class: "min-w-0" }, sh = { class: "text-base font-semibold" }, rh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, ih = { class: "flex shrink-0 items-center gap-2" }, uh = { class: "min-h-0 flex-1 overflow-y-auto" }, dh = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, Bt = /* @__PURE__ */ z({
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
      const y = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (y.length === 0)
        return;
      const p = y[0], x = y[y.length - 1];
      f.shiftKey && document.activeElement === p ? (f.preventDefault(), x.focus()) : !f.shiftKey && document.activeElement === x && (f.preventDefault(), p.focus());
    }
    return re(
      () => a.open,
      async (f) => {
        if (f) {
          i = document.activeElement, u = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", d), await Ce(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = u, document.removeEventListener("keydown", d), i?.focus?.();
      }
    ), me(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = u;
    }), (f, y) => (t(), I(Te, { to: "body" }, [
      N(ze, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: y[0] || (y[0] = (p) => r("close"))
          })) : w("", !0)
        ]),
        _: 1
      }),
      N(ze, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: L(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: j(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            o("header", lh, [
              o("div", oh, [
                o("h2", sh, m(e.title), 1),
                e.description ? (t(), n("p", rh, m(e.description), 1)) : w("", !0)
              ]),
              o("div", ih, [
                H(f.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: y[1] || (y[1] = (p) => r("close"))
                }, [...y[2] || (y[2] = [
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
            o("div", uh, [
              H(f.$slots, "default")
            ]),
            f.$slots.footer ? (t(), n("footer", dh, [
              H(f.$slots, "footer")
            ])) : w("", !0)
          ], 10, nh)) : w("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Me() {
  return { query: "", selected: {}, ranges: {} };
}
function ch(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function fh(e, l) {
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
    if (!fh(ch(e, r), s))
      return !1;
  return !0;
}
function mh(e, l) {
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
const ph = { class: "flex flex-col gap-6 p-4" }, vh = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, gh = { class: "text-sm font-semibold" }, hh = { class: "flex flex-wrap items-center gap-1.5" }, bh = ["aria-pressed", "onClick"], yh = { class: "text-sm font-semibold" }, xh = { class: "flex flex-wrap items-center gap-1.5" }, kh = { key: 0 }, da = /* @__PURE__ */ z({
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
    const a = e, r = l, s = G(""), i = Ue({}), u = Ue({}), d = k(
      () => a.facets.filter((S) => (S.kind ?? "chips") === "chips")
    ), f = k(() => a.facets.filter((S) => S.kind === "range"));
    function y(S) {
      return S == null ? "" : String(S);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const S of Object.keys(i))
        delete i[S];
      for (const [S, B] of Object.entries(a.applied.selected ?? {}))
        i[S] = B;
      for (const S of Object.keys(u))
        delete u[S];
      for (const [S, B] of Object.entries(a.applied.ranges ?? {}))
        u[S] = { min: y(B.min), max: y(B.max) };
    }
    re(
      () => a.open,
      (S) => {
        S && p();
      }
    );
    function x(S) {
      const B = S.trim();
      if (B === "")
        return null;
      const K = Number(B);
      return Number.isFinite(K) ? K : null;
    }
    function M() {
      const S = {};
      for (const [B, K] of Object.entries(u))
        S[B] = { min: x(K.min), max: x(K.max) };
      return S;
    }
    function $() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: M()
      };
    }
    const _ = k(() => {
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
    function g(S) {
      return u[S] ?? { min: "", max: "" };
    }
    function v(S, B, K) {
      const R = u[S] ?? { min: "", max: "" };
      u[S] = { ...R, [B]: K };
    }
    function c() {
      r("apply", $());
    }
    function C() {
      s.value = "";
      for (const S of Object.keys(i))
        i[S] = null;
      for (const S of Object.keys(u))
        u[S] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Me(), query: a.applied.query } : Me()
      );
    }
    return (S, B) => (t(), I(Bt, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      width: "w-[22rem]",
      onClose: B[2] || (B[2] = (K) => r("close"))
    }, {
      footer: L(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: C
        }, " Reset all "),
        N(ne, {
          variant: "outline",
          size: "sm",
          onClick: B[1] || (B[1] = (K) => r("close"))
        }, {
          default: L(() => [...B[5] || (B[5] = [
            U("Cancel", -1)
          ])]),
          _: 1
        }),
        N(ne, {
          size: "sm",
          onClick: c
        }, {
          default: L(() => [
            B[6] || (B[6] = U(" Apply", -1)),
            _.value ? (t(), n("span", kh, " (" + m(_.value) + ")", 1)) : w("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", ph, [
          e.hideSearch ? w("", !0) : (t(), n("label", vh, [
            B[3] || (B[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            N(fe, {
              modelValue: s.value,
              "onUpdate:modelValue": B[0] || (B[0] = (K) => s.value = K),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(P, null, D(d.value, (K) => (t(), n("section", {
            key: K.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", gh, m(K.label ?? K.key), 1),
            o("div", hh, [
              (t(!0), n(P, null, D(K.options ?? [], (R) => (t(), n("button", {
                key: R.value,
                type: "button",
                class: j([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[K.key] === R.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[K.key] === R.value ? "true" : "false",
                onClick: (Z) => h(K.key, R.value)
              }, m(R.label), 11, bh))), 128))
            ])
          ]))), 128)),
          (t(!0), n(P, null, D(f.value, (K) => (t(), n("section", {
            key: K.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", yh, m(K.label ?? K.key), 1),
            o("div", xh, [
              N(fe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${K.label ?? K.key} from`,
                "model-value": g(K.key).min,
                "onUpdate:modelValue": (R) => v(K.key, "min", String(R))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              B[4] || (B[4] = o("span", { class: "text-muted-foreground text-xs" }, "to", -1)),
              N(fe, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${K.label ?? K.key} to`,
                "model-value": g(K.key).max,
                "onUpdate:modelValue": (R) => v(K.key, "max", String(R))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), $h = ["aria-disabled"], wh = ["disabled"], Ch = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, _h = ["d"], Mh = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Sh = ["disabled"], Bh = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ph = ["d"], zh = /* @__PURE__ */ z({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Se({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["decrease", "increase"], ["update:modelValue"]),
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
        onClick: f[0] || (f[0] = (y) => u(-1))
      }, [
        (t(), n("svg", Ch, [
          o("path", {
            d: b(oe)("minus")
          }, null, 8, _h)
        ]))
      ], 8, wh),
      o("span", Mh, m(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (y) => u(1))
      }, [
        (t(), n("svg", Bh, [
          o("path", {
            d: b(oe)("plus")
          }, null, 8, Ph)
        ]))
      ], 8, Sh)
    ], 8, $h));
  }
}), Ah = { class: "divide-border flex flex-col divide-y" }, jh = { class: "min-w-0" }, Oh = { class: "truncate text-sm font-medium" }, Lh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Vh = { class: "flex shrink-0 items-center gap-2 text-sm" }, Dh = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Th = {
  key: 2,
  class: "font-medium tabular-nums"
}, Fh = ["aria-label", "onClick"], Eh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ih = ["d"], Nh = /* @__PURE__ */ z({
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
    return (s, i) => (t(), n("div", Ah, [
      (t(!0), n(P, null, D(e.items, (u) => (t(), n("div", {
        key: u.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", jh, [
          o("p", Oh, m(u.label), 1),
          u.detail ? (t(), n("p", Lh, m(u.detail), 1)) : w("", !0)
        ]),
        o("div", Vh, [
          e.editable ? (t(), I(zh, {
            key: 0,
            "model-value": r(u),
            "onUpdate:modelValue": (d) => a("qty", u.key, d)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : u.qty !== null && u.qty !== void 0 && u.qty !== "" ? (t(), n("span", Dh, " ×" + m(u.qty), 1)) : w("", !0),
          u.amount ? (t(), n("span", Th, m(u.amount), 1)) : w("", !0),
          u.status ? (t(), I(pe, {
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
            (t(), n("svg", Eh, [
              o("path", {
                d: b(oe)("trash")
              }, null, 8, Ih)
            ]))
          ], 8, Fh)) : w("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Rh = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Uh = { class: "border-b px-4 py-3" }, Hh = { class: "text-sm font-medium" }, qh = { class: "flex-1 px-4 py-3" }, Kh = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Gh = { class: "text-foreground block font-medium" }, Wh = { class: "mt-1 block" }, Zh = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Jh = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Yh = { class: "tabular-nums" }, Xh = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Qh = { class: "text-muted-foreground" }, e1 = {
  key: 0,
  class: "tabular-nums"
}, t1 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, a1 = { class: "text-muted-foreground" }, n1 = { class: "tabular-nums" }, l1 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, o1 = { class: "tabular-nums" }, s1 = {
  key: 4,
  class: "pt-1"
}, r1 = /* @__PURE__ */ z({
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
    return (r, s) => (t(), n("aside", Rh, [
      o("header", Uh, [
        o("h2", Hh, m(e.title), 1)
      ]),
      o("div", qh, [
        e.items.length === 0 ? (t(), n("p", Kh, [
          o("span", Gh, m(e.emptyTitle), 1),
          o("span", Wh, m(e.emptyDescription), 1)
        ])) : (t(), I(Nh, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, u) => a("qty", i, u)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Zh, [
        e.subtotal ? (t(), n("div", Jh, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Yh, m(e.subtotal), 1)
        ])) : w("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Xh, [
          o("span", Qh, m(e.discountLabel), 1),
          e.discount ? (t(), n("span", e1, m(e.discount), 1)) : w("", !0),
          H(r.$slots, "discount")
        ])) : w("", !0),
        e.tax ? (t(), n("div", t1, [
          o("span", a1, m(e.taxLabel), 1),
          o("span", n1, m(e.tax), 1)
        ])) : w("", !0),
        e.total ? (t(), n("div", l1, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", o1, m(e.total), 1)
        ])) : w("", !0),
        r.$slots.pay ? (t(), n("div", s1, [
          H(r.$slots, "pay")
        ])) : w("", !0)
      ])) : w("", !0)
    ]));
  }
}), i1 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, u1 = { class: "flex flex-col gap-4" }, d1 = { class: "flex flex-wrap items-start justify-between gap-3" }, c1 = { class: "flex items-center gap-2" }, f1 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, jw = /* @__PURE__ */ z({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Se({
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
  emits: /* @__PURE__ */ Se(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(Me()), i = G(!1), u = Ke(e, "cart"), d = G(!1), f = k(
      () => a.items.filter((E) => Pt(E, s.value))
    );
    function y(E) {
      s.value = { ...s.value, query: E.query };
    }
    function p(E) {
      s.value = {
        ...s.value,
        selected: E.selected,
        ranges: E.ranges,
        query: s.value.query
      }, i.value = !1;
    }
    function x(E) {
      return E ? a.parsePrice(E) : 0;
    }
    function M(E, A, T) {
      return {
        ...E,
        qty: A,
        amount: a.formatMoney(T * A)
      };
    }
    function $(E) {
      const A = mh(a.items, E);
      A && _(A.key);
    }
    function _(E) {
      const A = a.items.find((F) => F.key === E);
      if (!A || A.status === "out-of-stock")
        return;
      d.value = !1;
      const T = x(A);
      if (u.value.find((F) => F.key === E)) {
        u.value = u.value.map(
          (F) => F.key === E ? M(F, Number(F.qty ?? 1) + 1, T) : F
        );
        return;
      }
      u.value = [
        ...u.value,
        {
          key: A.key,
          label: A.label,
          detail: A.caption ?? null,
          qty: 1,
          amount: a.formatMoney(T)
        }
      ];
    }
    function h(E, A) {
      const T = a.items.find((F) => F.key === E), Y = x(T);
      u.value = u.value.map(
        (F) => F.key === E ? M(F, A, Y) : F
      );
    }
    function g(E) {
      u.value = u.value.filter((A) => A.key !== E);
    }
    const v = k(
      () => u.value.reduce((E, A) => {
        const T = a.items.find((Y) => Y.key === A.key);
        return E + x(T) * Number(A.qty ?? 1);
      }, 0)
    ), c = k(
      () => a.discountRate > 0 ? Math.round(v.value * a.discountRate) : 0
    ), C = k(
      () => Math.round((v.value - c.value) * a.taxRate)
    ), S = k(
      () => u.value.length ? a.formatMoney(v.value) : null
    ), B = k(
      () => u.value.length && c.value > 0 ? `−${a.formatMoney(c.value)}` : null
    ), K = k(
      () => u.value.length && a.taxRate > 0 ? a.formatMoney(C.value) : null
    ), R = k(
      () => u.value.length ? a.formatMoney(
        v.value - c.value + C.value
      ) : null
    );
    function Z() {
      d.value = !0, r("pay", u.value);
    }
    return (E, A) => (t(), n(P, null, [
      o("div", i1, [
        o("section", u1, [
          o("div", d1, [
            N(_e, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", c1, [
              b(Qe)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: A[0] || (A[0] = (T) => s.value = {
                  ...b(Me)(),
                  query: s.value.query
                })
              }, " Clear ")) : w("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: A[1] || (A[1] = (T) => i.value = !0)
              }, [
                A[5] || (A[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                A[6] || (A[6] = U(" Filters ", -1)),
                b(Qe)(s.value) ? (t(), n("span", f1, " on ")) : w("", !0)
              ])) : w("", !0)
            ])
          ]),
          N(St, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: y,
            onSelect: A[2] || (A[2] = (T) => r("select", T)),
            onCart: _,
            onScan: $
          }, null, 8, ["search-placeholder", "items"])
        ]),
        N(r1, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: u.value,
          subtotal: S.value,
          "discount-label": e.discountLabel,
          discount: B.value,
          "tax-label": e.taxLabel,
          tax: K.value,
          total: R.value,
          onQty: h,
          onRemove: g
        }, {
          pay: L(() => [
            H(E.$slots, "pay", {
              cart: u.value,
              paid: d.value,
              pay: Z
            }, () => [
              N(ne, {
                class: "w-full",
                disabled: u.value.length === 0,
                onClick: Z
              }, {
                default: L(() => [
                  U(m(d.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      N(da, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: A[3] || (A[3] = (T) => i.value = !1),
        onApply: p,
        onReset: A[4] || (A[4] = (T) => s.value = { ...b(Me)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), m1 = {
  key: 0,
  class: "flex flex-col gap-5 p-4"
}, p1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, v1 = ["src", "alt"], g1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, h1 = ["src"], b1 = { class: "flex items-start justify-between gap-3" }, y1 = { class: "text-lg font-semibold tabular-nums" }, x1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, k1 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, $1 = { class: "grid grid-cols-2 gap-3" }, w1 = { class: "flex flex-col gap-2" }, C1 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, Ow = /* @__PURE__ */ z({
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
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(($, _) => ({
        label: $,
        value: Math.max(0, Math.round(p + Math.sin(_ + x) * p * 0.18))
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
    }), y = k(
      () => !!a.item && !u.value && a.item?.status !== "out-of-stock"
    );
    return (p, x) => (t(), I(Bt, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      width: "w-[28rem]",
      onClose: x[1] || (x[1] = (M) => r("close"))
    }, xa({
      default: L(() => [
        e.item ? (t(), n("div", m1, [
          o("div", p1, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, v1)) : w("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", g1, [
            (t(!0), n(P, null, D(e.item.images, (M, $) => (t(), n("img", {
              key: $,
              src: M,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, h1))), 128))
          ])) : w("", !0),
          o("div", b1, [
            o("div", null, [
              o("p", y1, m(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", x1, m(e.item.stock) + " in stock ", 1)) : w("", !0)
            ]),
            e.item.status ? (t(), I(pe, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", k1, m(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("div", $1, [
            N(Xe, {
              label: u.value ? "Occupancy" : "Stock",
              value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: u.value ? f.value : d.value
            }, null, 8, ["label", "value", "series"]),
            N(Xe, {
              label: "Price",
              value: e.item.price ?? "-",
              series: d.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", w1, [
            o("p", C1, m(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            N(tt, {
              data: u.value ? f.value : d.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : w("", !0)
      ]),
      _: 2
    }, [
      y.value && e.item ? {
        name: "footer",
        fn: L(() => [
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
}), _1 = { class: "flex flex-col gap-10" }, M1 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, S1 = { class: "flex flex-col gap-3" }, B1 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, P1 = ["src", "alt"], z1 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, A1 = ["aria-label", "aria-pressed", "onClick"], j1 = ["src"], O1 = { class: "flex flex-col gap-5" }, L1 = { class: "flex flex-wrap items-start justify-between gap-3" }, V1 = { class: "min-w-0" }, D1 = { class: "text-2xl font-semibold tracking-tight" }, T1 = { class: "text-muted-foreground mt-1 text-sm" }, F1 = { class: "text-2xl font-semibold tabular-nums" }, E1 = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, I1 = { class: "grid grid-cols-2 gap-3 text-sm" }, N1 = {
  key: 0,
  class: "rounded-lg border p-3"
}, R1 = { class: "mt-1 font-medium" }, U1 = { class: "rounded-lg border p-3" }, H1 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, q1 = { class: "mt-1 font-medium" }, K1 = { class: "flex flex-col gap-4" }, G1 = { class: "grid gap-4 sm:grid-cols-2" }, W1 = { class: "bg-card rounded-lg border p-4" }, Z1 = { class: "mb-3 text-sm font-medium" }, J1 = /* @__PURE__ */ z({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s($) {
      let _ = 0;
      for (const h of $)
        _ = _ * 31 + h.charCodeAt(0) >>> 0;
      return _;
    }
    function i($, _) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((g, v) => ({
        label: g,
        value: Math.max(0, Math.round($ + Math.sin(v + _) * $ * 0.18))
      }));
    }
    const u = k(() => a.item.kind === "unit"), d = k(() => {
      const $ = [a.item.image, ...a.item.images ?? []].filter(
        (_) => typeof _ == "string" && _ !== ""
      );
      return [...new Set($)];
    }), f = G(0), y = k(() => {
      const $ = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number($) || 12, s(a.item.key) % 7);
    }), p = k(() => {
      const $ = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number($) || 20, s(a.item.key) % 5 + 1);
    }), x = k(() => u.value ? p.value : y.value), M = k(() => !u.value && a.item.status !== "out-of-stock");
    return ($, _) => (t(), n("div", _1, [
      o("div", M1, [
        o("div", S1, [
          o("div", B1, [
            d.value[f.value] ? (t(), n("img", {
              key: 0,
              src: d.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, P1)) : w("", !0)
          ]),
          d.value.length > 1 ? (t(), n("div", z1, [
            (t(!0), n(P, null, D(d.value, (h, g) => (t(), n("button", {
              key: h,
              type: "button",
              class: j(["size-16 shrink-0 overflow-hidden rounded-md border", g === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${g + 1}`,
              "aria-pressed": g === f.value ? "true" : "false",
              onClick: (v) => f.value = g
            }, [
              o("img", {
                src: h,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, j1)
            ], 10, A1))), 128))
          ])) : w("", !0)
        ]),
        o("div", O1, [
          o("div", L1, [
            o("div", V1, [
              o("h1", D1, m(e.item.label), 1),
              o("p", T1, m(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), I(pe, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : w("", !0)
          ]),
          o("p", F1, m(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", E1, m(e.item.facts.join(" · ")), 1)) : w("", !0),
          o("dl", I1, [
            e.item.sku ? (t(), n("div", N1, [
              _[1] || (_[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", R1, m(e.item.sku), 1)
            ])) : w("", !0),
            o("div", U1, [
              o("dt", H1, m(u.value ? "Occupancy" : "Stock"), 1),
              o("dd", q1, m(u.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          M.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: _[0] || (_[0] = (h) => r("cart", e.item.key))
          }, " Add to cart ")) : w("", !0)
        ])
      ]),
      o("section", K1, [
        _[2] || (_[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", G1, [
          N(Xe, {
            label: u.value ? "Occupancy" : "Stock",
            value: u.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: x.value
          }, null, 8, ["label", "value", "series"]),
          N(Xe, {
            label: "Price",
            value: e.item.price ?? "-",
            series: y.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", W1, [
          o("p", Z1, m(u.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          N(yf, {
            data: x.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), Y1 = ["href"], Lw = /* @__PURE__ */ z({
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
        U(" " + m(e.backLabel), 1)
      ], 8, Y1),
      N(J1, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), X1 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, Q1 = ["aria-selected", "onClick"], eb = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, tb = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, ab = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, nb = ["aria-pressed"], lb = ["aria-pressed"], Vw = /* @__PURE__ */ z({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Se({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = G(a.tabs[0]?.key ?? ""), i = Ke(e, "layout"), u = G({}), d = G(!1);
    re(
      () => a.tabs.map((h) => h.key).join(","),
      (h) => {
        h.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function f(h) {
      return u.value[h] ?? Me();
    }
    const y = k(
      () => a.tabs.find((h) => h.key === s.value) ?? a.tabs[0] ?? null
    ), p = k(
      () => y.value ? f(y.value.key) : Me()
    ), x = k(() => {
      const h = y.value;
      return h ? h.items.filter((g) => Pt(g, f(h.key))) : [];
    });
    function M(h) {
      const g = y.value?.key;
      g && (u.value = {
        ...u.value,
        [g]: { ...f(g), query: h }
      });
    }
    function $() {
      const h = y.value?.key;
      h && (u.value = { ...u.value, [h]: Me() });
    }
    function _(h) {
      const g = y.value?.key;
      g && (u.value = { ...u.value, [g]: h }, d.value = !1);
    }
    return (h, g) => (t(), n(P, null, [
      o("div", {
        class: j(["flex w-full flex-col gap-8", e.embedded ? "" : "mx-auto max-w-5xl px-4 py-6 sm:px-6"])
      }, [
        N(_e, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", X1, [
          (t(!0), n(P, null, D(e.tabs, (v) => (t(), n("button", {
            key: v.key,
            type: "button",
            class: j([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === v.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === v.key ? "true" : "false",
            onClick: (c) => s.value = v.key
          }, m(v.label), 11, Q1))), 128))
        ])) : w("", !0),
        o("div", eb, [
          N(fe, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: y.value?.searchPlaceholder ?? "Search…",
            "aria-label": y.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": g[0] || (g[0] = (v) => M(String(v)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          b(Qe)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: $
          }, " Clear ")) : w("", !0),
          (y.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: g[1] || (g[1] = (v) => d.value = !0)
          }, [
            g[8] || (g[8] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            g[9] || (g[9] = U(" Filters ", -1)),
            b(Qe)(p.value) ? (t(), n("span", tb, " on ")) : w("", !0)
          ])) : w("", !0),
          o("div", ab, [
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: g[2] || (g[2] = (v) => i.value = "grid")
            }, " Tiles ", 10, nb),
            o("button", {
              type: "button",
              class: j([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: g[3] || (g[3] = (v) => i.value = "list")
            }, " List ", 10, lb)
          ])
        ]),
        N(St, {
          layout: i.value,
          "onUpdate:layout": g[4] || (g[4] = (v) => i.value = v),
          "page-size": e.pageSize,
          items: x.value,
          onSelect: g[5] || (g[5] = (v) => r("select", v)),
          onCart: g[6] || (g[6] = (v) => r("cart", v))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      N(da, {
        open: d.value,
        title: y.value?.filterTitle ?? "Filters",
        "search-placeholder": y.value?.searchPlaceholder ?? "Search…",
        facets: y.value?.facets ?? [],
        applied: p.value,
        onClose: g[7] || (g[7] = (v) => d.value = !1),
        onApply: _,
        onReset: $
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), ob = { class: "flex flex-col gap-4" }, sb = { class: "flex flex-col gap-4" }, Dw = /* @__PURE__ */ z({
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
    const a = e, r = l, s = G(Me()), i = k(
      () => a.cards.filter((u) => Pt(u, s.value))
    );
    return (u, d) => (t(), n("div", {
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      N(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", ob, [
        N(_e, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        N(St, {
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
      o("section", sb, [
        N(_e, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        N(tl, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": L(({ value: f }) => [
            N(pe, {
              status: String(f)
            }, {
              default: L(() => [
                U(m(f), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), rb = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, ib = { class: "text-sm font-medium" }, ub = ["width", "height", "aria-label"], db = { class: "flex items-center gap-2" }, cb = /* @__PURE__ */ z({
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
    function f(h) {
      const g = s.value;
      if (!g)
        return null;
      const v = g.getBoundingClientRect(), c = g.width / v.width, C = g.height / v.height;
      return {
        x: (h.clientX - v.left) * c,
        y: (h.clientY - v.top) * C
      };
    }
    function y(h) {
      a.disabled || (i.value = !0, u = f(h), s.value?.setPointerCapture(h.pointerId));
    }
    function p(h) {
      if (!i.value || a.disabled)
        return;
      const g = d(), v = f(h);
      !g || !v || !u || (g.strokeStyle = "#111827", g.lineWidth = 2.4, g.lineCap = "round", g.lineJoin = "round", g.beginPath(), g.moveTo(u.x, u.y), g.lineTo(v.x, v.y), g.stroke(), u = v);
    }
    function x() {
      i.value = !1, u = null;
    }
    function M() {
      const h = s.value, g = d();
      !h || !g || (g.clearRect(0, 0, h.width, h.height), r("clear"));
    }
    function $() {
      const h = s.value;
      h && r("save", h.toDataURL("image/png"));
    }
    function _() {
      const h = s.value, g = d();
      !h || !g || (g.fillStyle = "#ffffff", g.fillRect(0, 0, h.width, h.height));
    }
    return de(_), me(() => {
      i.value = !1;
    }), (h, g) => (t(), n("div", rb, [
      o("p", ib, m(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: j(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ie(y, ["prevent"]),
        onPointermove: ie(p, ["prevent"]),
        onPointerup: ie(x, ["prevent"]),
        onPointerleave: ie(x, ["prevent"])
      }, null, 42, ub),
      o("div", db, [
        N(ne, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: M
        }, {
          default: L(() => [...g[0] || (g[0] = [
            U(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        N(ne, {
          size: "sm",
          disabled: e.disabled,
          onClick: $
        }, {
          default: L(() => [...g[1] || (g[1] = [
            U("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), fb = { class: "grid gap-8 lg:grid-cols-2" }, mb = { class: "flex flex-col gap-3" }, pb = { class: "text-muted-foreground text-xs" }, vb = {
  key: 0,
  class: "flex flex-col gap-3"
}, gb = { class: "flex flex-wrap gap-3" }, hb = ["onClick"], bb = ["src", "alt"], yb = {
  key: 1,
  class: "flex flex-col gap-3"
}, xb = { class: "flex flex-wrap gap-3" }, kb = ["onClick"], $b = ["src", "alt"], wb = {
  key: 2,
  class: "flex flex-col gap-4"
}, Cb = { class: "flex flex-wrap items-center gap-2" }, _b = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Mb = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Sb = { class: "flex flex-col gap-2" }, Bb = ["src"], Pb = {
  key: 1,
  class: "text-sm text-neutral-400"
}, zb = ["src"], Tw = /* @__PURE__ */ z({
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
    function f(h) {
      try {
        const g = localStorage.getItem(h), v = g ? JSON.parse(g) : [];
        return Array.isArray(v) ? v : [];
      } catch {
        return [];
      }
    }
    de(() => {
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
    function y(h) {
      const g = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: h
      };
      a.value = [g, ...a.value].slice(0, 8), s.value = g.id;
    }
    async function p(h, g) {
      await lr(h), g(40);
      const v = await new Promise((c, C) => {
        const S = new FileReader();
        S.onload = () => c(String(S.result)), S.onerror = () => C(new Error("Could not read the file")), S.readAsDataURL(h);
      });
      return g(100), { value: v, name: h.name, size: h.size, url: v };
    }
    function x() {
      const h = u.value?.url ?? u.value?.value;
      if (!h)
        return;
      const g = {
        id: `stamp-${Date.now()}`,
        name: u.value?.name ?? "Stamp",
        dataUrl: h
      };
      r.value = [g, ...r.value].slice(0, 8), i.value = g.id;
    }
    const M = k(
      () => a.value.find((h) => h.id === s.value)?.dataUrl ?? null
    ), $ = k(
      () => r.value.find((h) => h.id === i.value)?.dataUrl ?? null
    ), _ = k(() => {
      const h = l.documents.find((v) => v.key === d.value)?.document ?? l.documents[0]?.document ?? {}, g = {
        ...h?.branding ?? {},
        logoUrl: u.value?.url ?? null
      };
      return {
        ...h,
        branding: g
      };
    });
    return (h, g) => (t(), n("div", {
      class: j(["flex w-full flex-col gap-10", e.embedded ? "" : "mx-auto max-w-6xl p-4 sm:p-6"])
    }, [
      N(_e, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", fb, [
        N(cb, {
          label: "Draw a signature",
          onSave: y
        }),
        o("div", mb, [
          g[2] || (g[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", pb, m(b(na)), 1),
          N(oa, {
            modelValue: u.value,
            "onUpdate:modelValue": g[0] || (g[0] = (v) => u.value = v),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          N(ne, {
            size: "sm",
            variant: "outline",
            disabled: !u.value,
            onClick: x
          }, {
            default: L(() => [...g[1] || (g[1] = [
              U(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", vb, [
        N(_e, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", gb, [
          (t(!0), n(P, null, D(a.value, (v) => (t(), n("button", {
            key: v.id,
            type: "button",
            class: j(["rounded-md border p-2", v.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => s.value = v.id
          }, [
            o("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, bb)
          ], 10, hb))), 128))
        ])
      ])) : w("", !0),
      r.value.length ? (t(), n("section", yb, [
        N(_e, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", xb, [
          (t(!0), n(P, null, D(r.value, (v) => (t(), n("button", {
            key: v.id,
            type: "button",
            class: j(["rounded-md border p-2", v.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (c) => i.value = v.id
          }, [
            o("img", {
              src: v.dataUrl,
              alt: v.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, $b)
          ], 10, kb))), 128))
        ])
      ])) : w("", !0),
      e.documents.length ? (t(), n("section", wb, [
        o("div", Cb, [
          (t(!0), n(P, null, D(e.documents, (v) => (t(), I(ne, {
            key: v.key,
            size: "sm",
            variant: d.value === v.key ? "default" : "outline",
            onClick: (c) => d.value = v.key
          }, {
            default: L(() => [
              U(m(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", _b, [
          N(Ac, {
            document: _.value
          }, null, 8, ["document"]),
          o("div", Mb, [
            o("div", Sb, [
              g[3] || (g[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              M.value ? (t(), n("img", {
                key: 0,
                src: M.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Bb)) : (t(), n("p", Pb, "Draw and save a signature"))
            ]),
            $.value ? (t(), n("img", {
              key: 0,
              src: $.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, zb)) : w("", !0)
          ])
        ])
      ])) : w("", !0)
    ], 2));
  }
}), Fw = "panel.dashboard.hiddenWidgets", Ab = /* @__PURE__ */ Symbol("dashboardHide"), jb = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, Ew = /* @__PURE__ */ z({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = gt(Ab, null), r = G(
      l.catalog.filter((u) => l.defaults.includes(u.id))
    ), s = G(!1);
    de(() => {
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
    const i = k(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (u, d) => i.value ? w("", !0) : (t(), n("div", jb, [
      N($p, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": d[0] || (d[0] = (f) => r.value = f),
        onHide: d[1] || (d[1] = (f) => b(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Ob = { class: "flex flex-col gap-3" }, Lb = ["data-slot"], Vb = ["aria-pressed", "aria-label", "title"], Db = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tb = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Fb = { class: "flex h-8 items-center" }, Eb = ["aria-label", "title", "onClick"], Ib = ["aria-label", "title", "onClick"], Nb = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Rb = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, Iw = /* @__PURE__ */ z({
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
    const f = k(() => a.segments.some(d)), y = k(() => a.segments.some(u)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, x = k(() => p[a.columns] ?? p[4]), M = k(() => {
      const c = a.columns ?? 4, C = Math.floor(a.segments.length / c) * c;
      return a.segments.slice(0, C);
    }), $ = k(() => {
      const c = a.columns ?? 4, C = Math.floor(a.segments.length / c) * c;
      return a.segments.slice(C);
    }), _ = k(() => {
      const c = [];
      return M.value.length > 0 && c.push({ key: "packed", joined: !0, segments: M.value }), $.value.length > 0 && c.push({ key: "leftover", joined: !1, segments: $.value }), c;
    });
    function h() {
      const c = f.value === !1;
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
        for (const S of a.segments)
          S.key !== c.key && u(S) && C.add(S.key);
      }
      i.value = C, r("toggle", f.value);
    }
    function v(c) {
      return typeof c == "number" ? new Intl.NumberFormat().format(c) : c;
    }
    return (c, C) => (t(), n("div", Ob, [
      (t(!0), n(P, null, D(_.value, (S) => (t(), n("div", {
        key: S.key,
        class: j(["relative shrink-0", S.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": S.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && y.value && S.key === _.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: h
        }, [
          (t(), n("svg", Db, [
            f.value ? (t(), n(P, { key: 0 }, [
              C[0] || (C[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              C[1] || (C[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              C[2] || (C[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              C[3] || (C[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(P, { key: 1 }, [
              C[4] || (C[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              C[5] || (C[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Vb)) : w("", !0),
        o("div", {
          class: j(["grid", [S.joined ? "gap-px" : "gap-3", x.value]])
        }, [
          (t(!0), n(P, null, D(S.segments, (B) => (t(), n("div", {
            key: B.key,
            class: j(["bg-card flex flex-col gap-2 p-4", S.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", Tb, m(B.label), 1),
            o("div", Fb, [
              e.loading ? (t(), I(De, {
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
                (t(), n(P, null, D(5, (K) => o("span", {
                  key: K,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, Eb)) : u(B) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${B.label}, ${v(B.value)}. Hide it.`,
                title: `Hide ${B.label}`,
                onClick: (K) => g(B)
              }, m(v(B.value)), 9, Ib)) : (t(), n("span", Nb, m(v(B.value)), 1)),
              B.trend && !e.loading && !d(B) ? (t(), I(ua, {
                key: 4,
                direction: B.trend.direction,
                percentage: B.trend.percentage,
                inverted: B.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : w("", !0)
            ]),
            B.sparkline?.length && !e.loading && !d(B) ? (t(), I(tt, {
              key: 0,
              data: B.sparkline,
              height: 24
            }, null, 8, ["data"])) : w("", !0),
            B.caption || B.comparison && B.trend ? (t(), n("p", Rb, m(B.caption ?? B.comparison), 1)) : w("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Lb))), 128))
    ]));
  }
}), Ub = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Hb = { class: "flex items-center justify-between gap-2" }, qb = ["href"], Kb = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Gb = { class: "flex flex-col gap-0.5" }, Wb = { class: "text-sm font-medium" }, Zb = { class: "text-xs text-muted-foreground" }, Jb = {
  key: 1,
  class: "flex flex-col gap-2"
}, Yb = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Xb = { class: "flex flex-col gap-0.5" }, Qb = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Nw = /* @__PURE__ */ z({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: {}
  },
  setup(e) {
    const l = e, a = l.items.find((s) => !s.done) ?? null, r = l.items.filter((s) => s.key !== a?.key);
    return (s, i) => e.items.length ? (t(), n("section", Ub, [
      o("div", Hb, [
        i[0] || (i[0] = o("h2", { class: "text-sm font-semibold" }, "Setup checklist", -1)),
        e.reportHref ? (t(), n("a", {
          key: 0,
          href: e.reportHref,
          class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
        }, " Full report ", 8, qb)) : w("", !0)
      ]),
      b(a) ? (t(), n("div", Kb, [
        i[1] || (i[1] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Gb, [
          o("p", Wb, m(b(a).title), 1),
          o("p", Zb, m(b(a).detail), 1)
        ])
      ])) : w("", !0),
      b(r).length ? (t(), n("ul", Jb, [
        (t(!0), n(P, null, D(b(r), (u) => (t(), n("li", {
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
            u.done ? (t(), n("svg", Yb, [...i[2] || (i[2] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : w("", !0)
          ], 2),
          o("div", Xb, [
            o("p", {
              class: j(["text-sm", u.done ? "text-muted-foreground line-through" : "font-medium"])
            }, m(u.title), 3),
            u.done ? w("", !0) : (t(), n("p", Qb, m(u.detail), 1))
          ])
        ]))), 128))
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), ey = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, ty = { class: "flex items-center gap-2" }, ay = { class: "font-medium tabular-nums" }, ny = { class: "ml-auto flex items-center gap-3" }, Rw = /* @__PURE__ */ z({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), n("div", ey, [
      o("div", ty, [
        H(s.$slots, "actions")
      ]),
      o("span", ay, [
        e.allMatching ? (t(), n(P, { key: 0 }, [
          U(" All " + m(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(P, { key: 1 }, [
          U(m(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", ny, [
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
}), ly = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, oy = { class: "text-muted-foreground text-xs tabular-nums" }, sy = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, ry = ["value"], iy = ["value"], uy = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, dy = ["disabled"], cy = ["disabled"], fy = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, my = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, py = ["disabled"], Uw = /* @__PURE__ */ z({
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
    return (f, y) => (t(), n("div", ly, [
      o("p", oy, [
        U(" Showing " + m(s(i.value)) + "-" + m(s(u.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(P, { key: 0 }, [
          U("of " + m(s(e.total)), 1)
        ], 64)) : w("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", sy, [
        y[4] || (y[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: y[0] || (y[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(P, null, D(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, m(p), 9, iy))), 128))
        ], 40, ry)
      ])) : w("", !0),
      o("nav", uy, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: y[1] || (y[1] = (p) => r("first"))
        }, [...y[5] || (y[5] = [
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
        ])], 8, dy),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: y[2] || (y[2] = (p) => r("previous"))
        }, [...y[6] || (y[6] = [
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
        ])], 8, cy),
        o("span", fy, m(e.page), 1),
        d.value !== null ? (t(), n("span", my, " of " + m(s(d.value)), 1)) : w("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: y[3] || (y[3] = (p) => r("next"))
        }, [...y[7] || (y[7] = [
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
        ])], 8, py)
      ])
    ]));
  }
}), vy = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, gy = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, hy = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, by = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, Hw = /* @__PURE__ */ z({
  __name: "TableShell",
  setup(e) {
    return (l, a) => (t(), n("div", vy, [
      l.$slots.tabs ? (t(), n("div", gy, [
        H(l.$slots, "tabs")
      ])) : w("", !0),
      l.$slots.toolbar ? (t(), n("div", hy, [
        H(l.$slots, "toolbar")
      ])) : w("", !0),
      H(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", by, [
        H(l.$slots, "pagination")
      ])) : w("", !0)
    ]));
  }
}), yy = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, xy = ["aria-current"], ky = ["title"], $y = ["aria-current", "onClick"], wy = ["title"], Cy = /* @__PURE__ */ z({
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
    return (s, i) => (t(), n("div", yy, [
      o("button", {
        type: "button",
        class: j([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (u) => a("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, m(r(e.counts.all ?? 0)), 11, ky)) : (t(), I(De, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, xy),
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
        U(m(u) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: j([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === u ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[u] ?? 0)
        }, m(r(e.counts[u] ?? 0)), 11, wy)) : (t(), I(De, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, $y))), 128))
    ]));
  }
}), qw = /* @__PURE__ */ $t(Cy, [["__scopeId", "data-v-3967c945"]]), _y = { class: "flex flex-wrap items-center justify-end gap-2" }, My = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Sy = ["placeholder", "title", "aria-label"], By = ["aria-label"], Py = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, zy = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Ay = { class: "text-xs font-medium" }, jy = ["value", "onChange"], Oy = ["value"], Ly = { class: "grid grid-cols-2 gap-2" }, Vy = ["value", "onChange"], Dy = ["value", "onChange"], Ty = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Fy = ["value", "onChange"], Ey = ["value", "onChange"], Iy = {
  key: 4,
  class: "flex items-center gap-2"
}, Ny = ["aria-checked", "onClick"], Ry = { class: "text-xs" }, Uy = ["onClick"], Hy = ["value", "onChange"], qy = ["value"], Ky = ["disabled", "onClick"], Gy = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, Wy = ["disabled", "onClick"], Zy = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Jy = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Yy = ["aria-pressed", "aria-label", "title"], Xy = {
  key: 3,
  class: "text-muted-foreground shrink-0 text-xs"
}, Kw = /* @__PURE__ */ z({
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
    const a = e, r = l, s = G(a.search);
    re(
      () => a.search,
      (A) => {
        A !== s.value && (s.value = A);
      }
    );
    let i;
    re(s, (A) => {
      clearTimeout(i), i = setTimeout(() => {
        A !== a.search && r("update:search", A);
      }, 250);
    });
    const u = G({ ...a.filters });
    re(
      () => a.filters,
      (A) => {
        u.value = { ...A };
      },
      { deep: !0 }
    );
    const d = k(
      () => a.filterSchema.filter(
        (A) => a.filters[A.key] !== null && a.filters[A.key] !== void 0
      ).length
    ), f = k(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), y = k(() => a.search !== "" || d.value > 0);
    function p(A) {
      return A.type === "multiselect";
    }
    function x(A) {
      const T = u.value[A.key];
      return Array.isArray(T) ? T : T == null ? [] : [T];
    }
    function M(A) {
      return x(A).filter(
        (T) => typeof T == "string" || typeof T == "number"
      );
    }
    function $(A) {
      return B(A).flatMap(
        (T) => typeof T.value == "string" || typeof T.value == "number" ? [{ value: T.value, label: T.label }] : []
      );
    }
    function _(A, T) {
      u.value = { ...u.value, [A.key]: T === "" ? null : T };
    }
    function h(A, T) {
      const Y = u.value[A.key];
      if (typeof Y != "string" || !Y.includes(".."))
        return "";
      const [F, V] = Y.split("..");
      return T === "from" ? F ?? "" : V ?? "";
    }
    function g(A, T, Y) {
      const F = T === "from" ? Y : h(A, "from"), V = T === "to" ? Y : h(A, "to");
      u.value = {
        ...u.value,
        [A.key]: F && V ? `${F}..${V}` : null
      };
    }
    function v(A, T, Y) {
      const F = T === "from" ? Y : h(A, "from"), V = T === "to" ? Y : h(A, "to");
      u.value = {
        ...u.value,
        [A.key]: F || V ? `${F}..${V}` : null
      };
    }
    function c(A) {
      r("apply-filters", { ...u.value }), A();
    }
    function C(A, T) {
      u.value[A] = T, r("apply-filters", { ...u.value });
    }
    function S() {
      u.value = Object.fromEntries(a.filterSchema.map((A) => [A.key, null]));
    }
    function B(A) {
      return A.type === "boolean" ? [
        { value: !0, label: A.trueLabel ?? "Yes" },
        { value: !1, label: A.falseLabel ?? "No" }
      ] : A.type === "daterange" ? Object.entries(A.presets ?? {}).map(([T, Y]) => ({
        value: T,
        label: Y
      })) : (A.options ?? []).map((T) => ({ value: T, label: T }));
    }
    const K = G(new Set(a.hidden));
    re(
      () => a.hidden,
      (A) => {
        K.value = new Set(A);
      },
      { deep: !0 }
    );
    function R(A) {
      const T = new Set(K.value);
      T.has(A) ? T.delete(A) : T.add(A), K.value = T, r("apply-columns", [...T]);
    }
    function Z() {
      K.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function E() {
      s.value = "", r("clear");
    }
    return (A, T) => (t(), n("div", _y, [
      o("div", My, [
        T[4] || (T[4] = o("svg", {
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
          "onUpdate:modelValue": T[0] || (T[0] = (Y) => s.value = Y),
          type: "search",
          placeholder: e.searchPlaceholder,
          title: e.searchHint,
          "aria-label": e.searchHint ?? e.searchPlaceholder,
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
        }, null, 8, Sy), [
          [be, s.value]
        ]),
        s.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
          "aria-label": "Clear search",
          onClick: T[1] || (T[1] = (Y) => s.value = "")
        }, [...T[3] || (T[3] = [
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
      e.filterSchema.length ? (t(), I(He, {
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
            T[5] || (T[5] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            d.value ? (t(), n("span", Py, m(d.value), 1)) : w("", !0)
          ], 10, By)
        ]),
        panel: L(({ close: Y }) => [
          o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
            T[6] || (T[6] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
            o("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: S
            }, " Reset ")
          ]),
          T[9] || (T[9] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
          o("div", zy, [
            (t(!0), n(P, null, D(e.filterSchema, (F) => (t(), n("div", {
              key: F.key,
              class: "flex flex-col gap-1.5"
            }, [
              o("label", Ay, m(F.label), 1),
              p(F) ? (t(), I(Mt, {
                key: 0,
                "model-value": M(F),
                options: $(F),
                placeholder: `Any ${F.label.toLowerCase()}`,
                "onUpdate:modelValue": (V) => u.value[F.key] = V.length ? V : null
              }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : F.type === "querybuilder" ? (t(), I($o, {
                key: 1,
                "model-value": u.value[F.key] ?? null,
                fields: F.fields ?? {},
                operators: F.operators ?? {},
                "max-depth": F.maxDepth ?? 5,
                onApply: (V) => C(F.key, V)
              }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : F.type === "daterange" ? (t(), n(P, { key: 2 }, [
                o("select", {
                  value: typeof u.value[F.key] == "string" && !String(u.value[F.key]).includes("..") ? u.value[F.key] : "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                  onChange: (V) => _(F, V.target.value)
                }, [
                  T[7] || (T[7] = o("option", { value: "" }, "Any time", -1)),
                  (t(!0), n(P, null, D(B(F), (V) => (t(), n("option", {
                    key: String(V.value),
                    value: V.value
                  }, m(V.label), 9, Oy))), 128))
                ], 40, jy),
                o("div", Ly, [
                  o("input", {
                    type: "date",
                    value: h(F, "from"),
                    "aria-label": "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (V) => g(
                      F,
                      "from",
                      V.target.value
                    )
                  }, null, 40, Vy),
                  o("input", {
                    type: "date",
                    value: h(F, "to"),
                    "aria-label": "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (V) => g(
                      F,
                      "to",
                      V.target.value
                    )
                  }, null, 40, Dy)
                ])
              ], 64)) : F.type === "numberrange" ? (t(), n("div", Ty, [
                o("input", {
                  type: "number",
                  value: h(F, "from"),
                  "aria-label": "From",
                  placeholder: "From",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (V) => v(
                    F,
                    "from",
                    V.target.value
                  )
                }, null, 40, Fy),
                o("input", {
                  type: "number",
                  value: h(F, "to"),
                  "aria-label": "To",
                  placeholder: "To",
                  class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                  onChange: (V) => v(
                    F,
                    "to",
                    V.target.value
                  )
                }, null, 40, Ey)
              ])) : F.type === "boolean" ? (t(), n("div", Iy, [
                o("button", {
                  type: "button",
                  role: "switch",
                  "aria-checked": u.value[F.key] === !0,
                  class: j([
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    u.value[F.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                  ]),
                  onClick: (V) => _(F, u.value[F.key] === !0 ? null : !0)
                }, [
                  o("span", {
                    class: j(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[F.key] === !0 ? "left-4.5" : "left-0.5"])
                  }, null, 2)
                ], 10, Ny),
                o("span", Ry, m(F.trueLabel ?? "Yes"), 1),
                o("button", {
                  type: "button",
                  class: j([
                    "text-muted-foreground ml-auto text-xs hover:underline",
                    u.value[F.key] === !1 ? "text-primary font-medium" : ""
                  ]),
                  onClick: (V) => _(F, u.value[F.key] === !1 ? null : !1)
                }, m(F.falseLabel ?? "No") + " only ", 11, Uy)
              ])) : (t(), n("select", {
                key: 5,
                value: u.value[F.key] ?? "",
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                onChange: (V) => _(F, V.target.value)
              }, [
                T[8] || (T[8] = o("option", { value: "" }, "All", -1)),
                (t(!0), n(P, null, D(B(F), (V) => (t(), n("option", {
                  key: String(V.value),
                  value: V.value
                }, m(V.label), 9, qy))), 128))
              ], 40, Hy))
            ]))), 128))
          ]),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
            disabled: !f.value,
            onClick: (F) => c(Y)
          }, " Apply filters ", 8, Ky)
        ]),
        _: 1
      })) : w("", !0),
      N(He, { "dismiss-on-panel-click": !1 }, {
        trigger: L(() => [...T[10] || (T[10] = [
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
          T[13] || (T[13] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
          o("div", Gy, [
            (t(!0), n(P, null, D(e.columns, (Y) => (t(), n("button", {
              key: Y.key,
              type: "button",
              class: j(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", Y.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
              disabled: Y.locked,
              onClick: (F) => R(Y.key)
            }, [
              K.value.has(Y.key) ? (t(), n("span", Jy)) : (t(), n("svg", Zy, [...T[11] || (T[11] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])),
              U(" " + m(Y.label), 1)
            ], 10, Wy))), 128))
          ]),
          o("div", { class: "border-t" }, [
            o("button", {
              type: "button",
              class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
              onClick: Z
            }, [...T[12] || (T[12] = [
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
              U(" Reset ", -1)
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
        onClick: T[2] || (T[2] = (Y) => r("toggle-reorder"))
      }, [...T[14] || (T[14] = [
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
      ])], 10, Yy)) : w("", !0),
      y.value ? (t(), n("button", {
        key: 2,
        type: "button",
        class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
        onClick: E
      }, " Clear ")) : w("", !0),
      e.loading ? (t(), n("span", Xy, "Loading…")) : w("", !0)
    ]));
  }
}), Qy = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ex = { class: "grid gap-2" }, tx = {
  key: 0,
  class: "text-destructive text-sm"
}, ax = { class: "flex gap-2" }, Gw = /* @__PURE__ */ z({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = G((() => {
      const M = navigator.userAgent, $ = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: h }) => h.test(M))?.name, _ = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: h }) => h.test(M))?.name;
      return [$, _].filter(Boolean).join(" on ") || "";
    })()), i = G(!1), u = ka(null), d = k(() => u.value?.isLoading.value ?? !1), f = k(() => u.value?.error.value ?? null), y = k(() => u.value?.isSupported.value ?? !1);
    de(async () => {
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
    return (M, $) => y.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", ex, [
        $[3] || ($[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        se(o("input", {
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
      f.value ? (t(), n("p", tx, m(f.value), 1)) : w("", !0),
      o("div", ax, [
        N(ne, {
          type: "submit",
          disabled: d.value || !s.value.trim()
        }, {
          default: L(() => [
            U(m(d.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        N(ne, {
          type: "button",
          variant: "ghost",
          onClick: x
        }, {
          default: L(() => [...$[5] || ($[5] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), I(ne, {
      key: 1,
      variant: "outline",
      onClick: $[0] || ($[0] = (_) => i.value = !0)
    }, {
      default: L(() => [...$[2] || ($[2] = [
        U(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", Qy, " Passkeys are not supported in this browser. "));
  }
}), nx = { class: "text-sm font-semibold" }, lx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, ox = {
  key: 4,
  class: "flex flex-col gap-3"
}, sx = { class: "text-sm font-medium" }, rx = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, ix = {
  key: 0,
  class: "mb-1 font-medium"
}, ux = ["onClick"], dx = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, cx = { class: "flex items-center justify-between gap-3 border-t p-4" }, fx = ["disabled"], mx = /* @__PURE__ */ z({
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
      () => (a.node.children ?? []).map((h) => ({
        label: h.label ?? "",
        description: h.description
      }))
    ), f = k(() => a.depth === 0), y = k(() => {
      const h = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, g = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        h[a.node.align ?? "start"] ?? "items-start",
        g[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = k(() => {
      const h = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return h[a.node.tone ?? "info"] ?? h.info;
    }), x = k(() => {
      const h = a.node.columns ?? 1;
      return h >= 3 ? "sm:grid-cols-3" : h === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function M(h) {
      const g = [], v = (c) => {
        c.component === "field" && c.key && g.push(c.key), c.children?.forEach(v);
      };
      return v(h), g.some((c) => a.errors[c]);
    }
    function $(h) {
      if (h.hidden)
        return !1;
      const g = h.visibleWhen;
      return g ? a.values[g.field] == g.value : !0;
    }
    function _(h) {
      if (a.upload)
        return (g, v) => a.upload(h, g, v);
    }
    return (h, g) => {
      const v = vt("SchemaNode", !0);
      return e.node.component === "field" && $(e.node) ? (t(), I(qe, {
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
        onChange: g[0] || (g[0] = (c) => r("change", e.node.key, c))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && $(e.node) ? (t(), n("section", {
        key: 1,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        o("header", {
          class: j(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: g[1] || (g[1] = (c) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", nx, m(e.node.label), 1),
            e.node.description ? (t(), n("p", lx, m(e.node.description), 1)) : w("", !0)
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: j(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...g[11] || (g[11] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : w("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [x.value, f.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (c, C) => (t(), I(v, {
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
            onChange: g[2] || (g[2] = (S, B) => r("change", S, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", x.value])
      }, [
        (t(!0), n(P, null, D(e.node.children ?? [], (c, C) => (t(), I(v, {
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
          onChange: g[3] || (g[3] = (S, B) => r("change", S, B))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 3,
        class: j(["flex", y.value])
      }, [
        (t(!0), n(P, null, D(e.node.children ?? [], (c, C) => (t(), I(v, {
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
          onChange: g[4] || (g[4] = (S, B) => r("change", S, B))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", ox, [
        o("legend", sx, m(e.node.label), 1),
        e.node.description ? (t(), n("p", rx, m(e.node.description), 1)) : w("", !0),
        o("div", {
          class: j(["grid grid-cols-1 gap-4", x.value])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (c, C) => (t(), I(v, {
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
            onChange: g[5] || (g[5] = (S, B) => r("change", S, B))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 5,
        role: "note",
        class: j(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", ix, m(e.node.title), 1)) : w("", !0),
        o("p", null, m(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (c, C) => (t(), n("button", {
            key: C,
            type: "button",
            class: j([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === C ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (S) => i.value = C
          }, [
            U(m(c.label) + " ", 1),
            M(c) ? (t(), n("span", dx)) : w("", !0)
          ], 10, ux))), 128))
        ], 2),
        (t(!0), n(P, null, D(e.node.children ?? [], (c, C) => se((t(), n("div", {
          key: C,
          class: j(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, D(c.children ?? [], (S, B) => (t(), I(v, {
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
            onChange: g[6] || (g[6] = (K, R) => r("change", K, R))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, i.value === C]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: j(f.value ? "bg-card rounded-lg border" : "")
      }, [
        N(ai, {
          class: j(["p-4", f.value ? "border-b" : ""]),
          steps: d.value,
          "active-step": u.value,
          "has-error": (c) => M((e.node.children ?? [])[c]),
          "onUpdate:activeStep": g[7] || (g[7] = (c) => u.value = c)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(P, null, D(e.node.children ?? [], (c, C) => se((t(), n("div", {
          key: C,
          class: j(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, D(c.children ?? [], (S, B) => (t(), I(v, {
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
            onChange: g[8] || (g[8] = (K, R) => r("change", K, R))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [je, u.value === C]
        ])), 128)),
        o("div", cx, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: g[9] || (g[9] = (c) => u.value--)
          }, " Back ", 8, fx),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: g[10] || (g[10] = (c) => u.value++)
          }, " Next ")) : w("", !0)
        ])
      ], 2)) : w("", !0);
    };
  }
}), px = { class: "flex flex-col gap-4" }, vx = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, Ww = /* @__PURE__ */ z({
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
        return (y, p) => a.upload(f, y, p);
    }
    return (f, y) => (t(), n("div", px, [
      u.value ? (t(), n("p", vx, m(u.value), 1)) : w("", !0),
      s.value ? (t(!0), n(P, { key: 1 }, D(e.nodes, (p, x) => (t(), I(mx, {
        key: x,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: y[0] || (y[0] = (M, $) => r("change", M, $))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(P, null, D(e.fields, (p) => (t(), I(qe, {
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
          class: j(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (x) => r("change", p.key, x)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), gx = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, hx = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, bx = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, yx = ["disabled"], xx = ["disabled"], kx = ["disabled"], Zw = /* @__PURE__ */ z({
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
    return (l, a) => (t(), I(Te, { to: "body" }, [
      N(ze, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: L(() => [
          e.show ? (t(), n("div", gx, [
            o("div", hx, [
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
              o("span", bx, m(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => l.$emit("discard"))
              }, m(e.discardLabel), 9, yx)) : w("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => l.$emit("cancel"))
              }, m(e.cancelLabel), 9, xx),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => l.$emit("save"))
              }, m(e.processing ? "Saving…" : e.saveLabel), 9, kx)
            ])
          ])) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function Jw(e, l = {}) {
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
  return de(() => {
    a && window.addEventListener("beforeunload", d);
  }), me(() => {
    window.removeEventListener("beforeunload", d);
  }), { dirty: s, commit: i, discard: u, baseline: r };
}
function rt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const $x = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, wx = { class: "text-muted-foreground text-xs font-medium" }, Cx = { class: "text-sm" }, _x = { key: 1 }, Mx = {
  key: 5,
  class: "max-w-full"
}, Sx = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, Bx = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs" }, Px = { key: 6 }, zx = {
  key: 0,
  class: "divide-y rounded-md border"
}, Ax = { class: "text-muted-foreground truncate font-medium" }, jx = { class: "col-span-2 break-words" }, Ox = {
  key: 1,
  class: "text-muted-foreground"
}, Lx = {
  key: 7,
  class: "flex flex-col gap-3"
}, Vx = {
  key: 0,
  class: "text-muted-foreground"
}, Dx = ["href"], Tx = { class: "text-sm font-semibold" }, Fx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ex = ["onClick"], Yw = /* @__PURE__ */ z({
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
    }, y = k(() => a.node.key ? a.record[a.node.key] : null), p = k(() => {
      const M = y.value;
      if (M == null || M === "")
        return "-";
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, f[a.node.type]);
      let $ = String(M);
      return a.node.transform === "upper" && ($ = $.toUpperCase()), a.node.transform === "lower" && ($ = $.toLowerCase()), [a.node.prefix, $, a.node.suffix].filter(Boolean).join(" ");
    }), x = k(() => {
      const M = typeof y.value == "boolean" ? y.value ? "1" : "" : String(y.value), $ = a.node.colors?.[M] ?? a.node.defaultColor ?? "neutral";
      return wt[$] ?? "outline";
    });
    return (M, $) => {
      const _ = vt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", $x, [
        o("dt", wx, m(e.node.label), 1),
        o("dd", Cx, [
          e.node.type === "badge" && b(Ao)(y.value) ? (t(), I(Re, {
            key: 0,
            variant: x.value,
            class: "capitalize"
          }, {
            default: L(() => [
              U(m(y.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", _x, "-")) : e.node.type === "icon" ? (t(), I(Gl, {
            key: 2,
            value: y.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), I(Jl, {
            key: 3,
            src: y.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), I(to, {
            key: 4,
            value: typeof y.value == "string" ? y.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", Mx, [
            e.node.language ? (t(), n("p", Sx, m(e.node.language), 1)) : w("", !0),
            o("pre", Bx, [
              o("code", null, m(y.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", Px, [
            y.value && typeof y.value == "object" && !Array.isArray(y.value) && Object.keys(y.value).length ? (t(), n("dl", zx, [
              (t(!0), n(P, null, D(y.value, (h, g) => (t(), n("div", {
                key: g,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", Ax, m(g), 1),
                o("dd", jx, m(h), 1)
              ]))), 128))
            ])) : (t(), n("span", Ox, "-"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", Lx, [
            (t(!0), n(P, null, D(Array.isArray(y.value) ? y.value : [], (h, g) => (t(), n("div", {
              key: g,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(P, null, D(e.node.entries ?? [], (v, c) => (t(), I(_, {
                key: c,
                node: v,
                record: h,
                depth: e.depth + 1,
                onAction: $[0] || ($[0] = (C) => r("action", C))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(y.value) || y.value.length === 0 ? (t(), n("span", Vx, "-")) : w("", !0)
          ])) : e.node.url ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground underline-offset-2 hover:underline"
          }, m(p.value), 9, Dx)) : (t(), n("span", {
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
            onClick: $[1] || ($[1] = (h) => r("action", e.node.action))
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
          onClick: $[2] || ($[2] = (h) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", null, [
            o("h3", Tx, m(e.node.label), 1),
            e.node.description ? (t(), n("p", Fx, m(e.node.description), 1)) : w("", !0)
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: j(["grid grid-cols-1 gap-4", [d.value, u.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (h, g) => (t(), I(_, {
            key: g,
            node: h,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[3] || ($[3] = (v) => r("action", v))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : w("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: j(["grid grid-cols-1 gap-4", d.value])
      }, [
        (t(!0), n(P, null, D(e.node.children ?? [], (h, g) => (t(), I(_, {
          key: g,
          node: h,
          record: e.record,
          depth: e.depth + 1,
          onAction: $[4] || ($[4] = (v) => r("action", v))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: j(u.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        o("div", {
          class: j(["bg-muted/30 flex gap-1 overflow-x-auto p-1", u.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(P, null, D(e.node.children ?? [], (h, g) => (t(), n("button", {
            key: g,
            type: "button",
            class: j([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (v) => i.value = g
          }, m(h.label), 11, Ex))), 128))
        ], 2),
        (t(!0), n(P, null, D(e.node.children ?? [], (h, g) => se((t(), n("div", {
          key: g,
          class: j(["flex flex-col gap-5", u.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(P, null, D(h.children ?? [], (v, c) => (t(), I(_, {
            key: c,
            node: v,
            record: e.record,
            depth: e.depth + 1,
            onAction: $[5] || ($[5] = (C) => r("action", C))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [je, i.value === g]
        ])), 128))
      ], 2)) : w("", !0);
    };
  }
}), Ix = {
  class: "flex flex-col gap-4",
  "data-slot": "payment-gateways"
}, Nx = { class: "text-muted-foreground text-sm" }, Rx = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, Ux = { class: "flex items-start gap-3" }, Hx = { class: "min-w-0 flex-1" }, qx = { class: "flex flex-wrap items-center gap-2" }, Kx = { class: "truncate text-sm font-medium" }, Gx = { class: "text-muted-foreground mt-0.5 text-xs" }, Wx = { class: "text-muted-foreground text-xs" }, Zx = { class: "mt-auto flex items-center gap-2" }, Jx = /* @__PURE__ */ z({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = k(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, u) => (t(), n("div", Ix, [
      o("p", Nx, m(s.value) + " of " + m(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", Rx, [
        (t(!0), n(P, null, D(e.gateways, (d) => (t(), n("article", {
          key: d.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", Ux, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ee({ background: d.color }),
              "aria-hidden": "true"
            }, m(d.mark), 5),
            o("div", Hx, [
              o("div", qx, [
                o("h3", Kx, m(d.label), 1),
                N(pe, {
                  status: d.connected ? "connected" : "disconnected"
                }, {
                  default: L(() => [
                    U(m(d.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                d.connected && d.enabled !== !1 ? (t(), I(pe, {
                  key: 0,
                  status: "offered"
                }, {
                  default: L(() => [...u[0] || (u[0] = [
                    U(" Offered ", -1)
                  ])]),
                  _: 1
                })) : d.connected ? (t(), I(pe, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: L(() => [...u[1] || (u[1] = [
                    U(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                d.isDefault ? (t(), I(pe, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...u[2] || (u[2] = [
                    U(" Default ", -1)
                  ])]),
                  _: 1
                })) : w("", !0),
                d.connected && d.mode ? (t(), I(pe, {
                  key: 3,
                  status: d.mode
                }, {
                  default: L(() => [
                    U(m(d.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : w("", !0)
              ]),
              o("p", Gx, m(d.caption), 1)
            ])
          ]),
          o("p", Wx, m(d.methods.join(" · ")), 1),
          o("div", Zx, [
            N(ne, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", d.key)
            }, {
              default: L(() => [...u[3] || (u[3] = [
                U(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            N(ne, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", d.key)
            }, {
              default: L(() => [
                U(m(d.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ])
    ]));
  }
}), Yx = { class: "flex flex-col gap-6" }, Xx = { class: "relative" }, Qx = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, e0 = ["d"], t0 = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, a0 = {
  key: 0,
  class: "flex flex-col gap-4 p-4"
}, n0 = { class: "flex flex-wrap items-center gap-2" }, l0 = { class: "text-muted-foreground text-sm" }, o0 = { class: "flex flex-col gap-1 text-sm" }, s0 = ["value"], r0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, i0 = { class: "flex flex-wrap items-center gap-2" }, u0 = {
  key: 1,
  class: "flex items-center gap-2"
}, Xw = /* @__PURE__ */ z({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Se({
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
        (h) => h.key === $ ? { ...h, ..._ } : h
      );
    }
    function f($) {
      a.value = $;
    }
    function y($) {
      const _ = l.value.find((g) => g.key === $);
      if (!_)
        return;
      const h = !_.connected;
      d($, {
        connected: h,
        mode: h ? _.mode ?? "test" : null,
        enabled: h,
        isDefault: !1
      });
    }
    function p($, _) {
      const h = l.value.find((g) => g.key === $);
      h?.connected && d($, { enabled: _, isDefault: _ ? h.isDefault : !1 });
    }
    function x($) {
      const _ = l.value.find((h) => h.key === $);
      !_ || !u(_) || (l.value = l.value.map((h) => ({
        ...h,
        isDefault: h.key === $
      })));
    }
    function M($) {
      const _ = a.value;
      !_ || !l.value.find((g) => g.key === _)?.connected || d(_, { mode: $ });
    }
    return ($, _) => (t(), n(P, null, [
      o("div", Yx, [
        N(_e, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", Xx, [
          (t(), n("svg", Qx, [
            o("path", {
              d: b(oe)("search")
            }, null, 8, e0)
          ])),
          N(fe, {
            modelValue: r.value,
            "onUpdate:modelValue": _[0] || (_[0] = (h) => r.value = h),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), I(Jx, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: y
        }, null, 8, ["gateways"])) : (t(), n("p", t0, " No gateways match “" + m(r.value.trim()) + "”. ", 1))
      ]),
      N(Bt, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        width: "w-[28rem]",
        onClose: _[8] || (_[8] = (h) => a.value = null)
      }, {
        footer: L(() => [
          N(ne, {
            variant: "outline",
            size: "sm",
            onClick: _[6] || (_[6] = (h) => a.value = null)
          }, {
            default: L(() => [..._[21] || (_[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), I(ne, {
            key: 0,
            size: "sm",
            onClick: _[7] || (_[7] = (h) => y(s.value.key))
          }, {
            default: L(() => [
              U(m(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : w("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), n("div", a0, [
            o("div", n0, [
              N(pe, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: L(() => [
                  U(m(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), I(pe, {
                key: 0,
                status: "offered"
              }, {
                default: L(() => [..._[9] || (_[9] = [
                  U(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), I(pe, {
                key: 1,
                status: "disabled"
              }, {
                default: L(() => [..._[10] || (_[10] = [
                  U(" Disabled ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.isDefault ? (t(), I(pe, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [..._[11] || (_[11] = [
                  U(" Default ", -1)
                ])]),
                _: 1
              })) : w("", !0),
              s.value.connected && s.value.mode ? (t(), I(pe, {
                key: 3,
                status: s.value.mode
              }, {
                default: L(() => [
                  U(m(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : w("", !0)
            ]),
            o("p", l0, m(s.value.caption), 1),
            o("label", o0, [
              _[12] || (_[12] = U(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, s0)
            ]),
            _[20] || (_[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", r0, [
              _[16] || (_[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              _[17] || (_[17] = o("p", { class: "text-muted-foreground text-xs" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", i0, [
                N(ne, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: _[1] || (_[1] = (h) => p(s.value.key, !0))
                }, {
                  default: L(() => [..._[13] || (_[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                N(ne, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: _[2] || (_[2] = (h) => p(s.value.key, !1))
                }, {
                  default: L(() => [..._[14] || (_[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                N(ne, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !u(s.value),
                  onClick: _[3] || (_[3] = (h) => x(s.value.key))
                }, {
                  default: L(() => [..._[15] || (_[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : w("", !0),
            s.value.connected ? (t(), n("div", u0, [
              N(ne, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: _[4] || (_[4] = (h) => M("test"))
              }, {
                default: L(() => [..._[18] || (_[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              N(ne, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: _[5] || (_[5] = (h) => M("live"))
              }, {
                default: L(() => [..._[19] || (_[19] = [
                  U(" Live ", -1)
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
function Qw(e) {
  const l = G(It(e));
  de(() => {
    l.value = It(e);
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
function e4(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: u } = e, d = G(
    l.driver === "none" ? "off" : "connecting"
  ), f = G(/* @__PURE__ */ new Set());
  let y = /* @__PURE__ */ new Map(), p, x, M, $ = (/* @__PURE__ */ new Date()).toISOString(), _ = null;
  function h(A, T) {
    y.set(A, { ...y.get(A) ?? {}, ...T }), !p && (p = setTimeout(() => {
      p = void 0, g();
    }, l.batchMs));
  }
  function g() {
    if (y.size === 0)
      return;
    const A = y;
    y = /* @__PURE__ */ new Map();
    const T = /* @__PURE__ */ new Set();
    for (const [Y, F] of A) {
      const V = a.value.find((J) => J[r] === Y);
      if (!V) {
        u?.(Y, F);
        continue;
      }
      Object.assign(V, F), T.add(Y);
    }
    T.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...T]), setTimeout(() => {
      const Y = new Set(f.value);
      T.forEach((F) => Y.delete(F)), f.value = Y;
    }, 1500));
  }
  async function v() {
    if (!(!s || a.value.length === 0)) {
      M?.abort(), M = new AbortController();
      try {
        const A = a.value.map((F) => F[r]), { records: T, at: Y } = await s(A, $);
        $ = Y, d.value = "live";
        for (const F of T)
          h(F[r], F);
      } catch {
        d.value = "connecting";
      }
    }
  }
  function c() {
    C(), d.value = "live", x = setInterval(v, l.intervalMs);
  }
  function C() {
    clearInterval(x), x = void 0, M?.abort();
  }
  function S() {
    return window.Echo ?? null;
  }
  function B() {
    const A = S();
    if (!A || !l.channel) {
      d.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    _ = l.channel;
    const T = A.private(l.channel);
    for (const Y of l.events)
      T.listen(Y, (F) => {
        F?.[r] !== void 0 && h(F[r], F);
      });
    d.value = "live", A.connector?.pusher?.connection?.bind("connected", () => {
      d.value = "live", i?.();
    }), A.connector?.pusher?.connection?.bind("disconnected", () => {
      d.value = "connecting";
    });
  }
  function K() {
    _ && (S()?.leave(_), _ = null);
  }
  function R() {
    l.driver === "poll" && c(), l.driver === "broadcast" && B();
  }
  function Z() {
    C(), K(), clearTimeout(p), p = void 0, y = /* @__PURE__ */ new Map();
  }
  function E() {
    l.pauseWhenHidden && (document.hidden ? (Z(), d.value = "paused") : ($ = (/* @__PURE__ */ new Date()).toISOString(), R(), i?.()));
  }
  return de(() => {
    l.driver !== "none" && (R(), l.pauseWhenHidden && document.addEventListener("visibilitychange", E));
  }), me(() => {
    document.removeEventListener("visibilitychange", E), Z();
  }), { status: d, recentlyChanged: f, applyPatch: h, flush: g, pollOnce: v };
}
const d0 = /^[a-z0-9-]+$/, c0 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function t4(e) {
  $a(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !d0.test(a) || typeof r != "string" || !c0.test(r) || (l[`--${a}`] = r);
    ns(l);
  });
}
const f0 = { class: "flex items-center gap-0.5" }, m0 = /* @__PURE__ */ z({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", f0, [
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
}), p0 = /* @__PURE__ */ z({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), I(ia, {
      code: "AB-1234",
      style: ee(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), v0 = { class: "flex flex-col gap-2" }, g0 = { class: "bg-card rounded-lg border p-4" }, h0 = { class: "text-muted-foreground truncate text-xs" }, b0 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, y0 = /* @__PURE__ */ z({
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
    function f(_, h) {
      return _.length <= h ? _ : `${_.slice(0, h - 1).trimEnd()}…`;
    }
    const y = k(() => f(s.value, r.value.titleMax)), p = k(() => f(i.value, r.value.descriptionMax));
    function x(_, h, g) {
      return _ === 0 ? { tone: "text-muted-foreground", note: "empty" } : _ > g ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : _ < h ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const M = k(
      () => x(s.value.length, r.value.titleMin, r.value.titleMax)
    ), $ = k(
      () => x(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (_, h) => (t(), n("div", v0, [
      o("div", g0, [
        o("p", h0, m(d.value), 1),
        o("p", {
          class: j(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", y.value === "" ? "text-muted-foreground italic" : ""])
        }, m(y.value || "Untitled page"), 3),
        o("p", {
          class: j(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, m(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", b0, [
        o("span", {
          class: j(M.value.tone)
        }, " Title " + m(s.value.length) + "/" + m(r.value.titleMax) + " · " + m(M.value.note), 3),
        o("span", {
          class: j($.value.tone)
        }, " Description " + m(i.value.length) + "/" + m(r.value.descriptionMax) + " · " + m($.value.note), 3)
      ]),
      h[0] || (h[0] = o("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function x0() {
  $e("radio", cd), $e("checkboxlist", pd), $e("tags", kd), $e("colour", Od), $e("slider", Ed), $e("visual-select", Xd), $e("markdown", Hu), $e("code", Yu), $e("seo-preview", y0), ot("swatch", ec), ot("voucher-code-box", p0), ot("document-colour-mode", m0);
}
function ca() {
  const e = G(null), l = G(!1);
  let a = null;
  return de(() => {
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
  }), me(() => a?.disconnect()), { el: e, shown: l };
}
const k0 = /* @__PURE__ */ z({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = ca();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: j(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", b(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ee({ transitionDelay: `${e.delay}ms` })
    }, [
      H(r.$slots, "default")
    ], 6));
  }
}), $0 = ["id"], ke = /* @__PURE__ */ z({
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
        N(k0, null, {
          default: L(() => [
            H(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, $0));
  }
}), w0 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, C0 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, _0 = {
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
      e.eyebrow ? (t(), n("p", w0, m(e.eyebrow), 1)) : w("", !0),
      e.title ? (t(), n("h2", C0, m(e.title), 1)) : w("", !0),
      e.body ? (t(), n("p", _0, m(e.body), 1)) : w("", !0)
    ], 2)) : w("", !0);
  }
});
function M0() {
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
  return de(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), me(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const S0 = { class: "pk-tilt-inner relative h-full" }, B0 = /* @__PURE__ */ z({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = M0();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", S0, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        H(a.$slots, "default")
      ])
    ], 512));
  }
}), P0 = { class: "flex flex-col gap-10" }, z0 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, A0 = { class: "text-base font-semibold" }, j0 = { class: "text-sm text-pretty text-muted-foreground" }, O0 = /* @__PURE__ */ z({
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
    return (a, r) => (t(), I(ke, null, {
      default: L(() => [
        o("div", P0, [
          N(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", z0, [
            (t(!0), n(P, null, D(e.items ?? [], (s, i) => (t(), I(B0, {
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
                  o("h3", A0, m(s.title), 1),
                  o("p", j0, m(s.body), 1)
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
}), L0 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, V0 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, D0 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, T0 = ["href"], F0 = /* @__PURE__ */ z({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), I(ke, null, {
      default: L(() => [
        o("div", L0, [
          o("h2", V0, m(e.title), 1),
          e.body ? (t(), n("p", D0, m(e.body), 1)) : w("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, m(e.label), 9, T0)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), E0 = { class: "flex flex-col gap-8" }, I0 = { class: "divide-y rounded-lg border" }, N0 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, R0 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, U0 = /* @__PURE__ */ z({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), I(ke, { narrow: "" }, {
      default: L(() => [
        o("div", E0, [
          N(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", I0, [
            (t(!0), n(P, null, D(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", N0, [
                U(m(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", R0, m(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), H0 = { class: "flex flex-col gap-10" }, q0 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, K0 = { class: "text-sm font-semibold" }, G0 = { class: "text-sm text-pretty text-muted-foreground" }, W0 = /* @__PURE__ */ z({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), I(ke, null, {
      default: L(() => [
        o("div", H0, [
          N(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", q0, [
            (t(!0), n(P, null, D(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", K0, m(r.title), 1),
              o("p", G0, m(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Z0 = { class: "flex flex-col items-center gap-6 text-center" }, J0 = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Y0 = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, X0 = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Q0 = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, ek = ["href"], tk = ["href"], ak = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, nk = /* @__PURE__ */ z({
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
    return (l, a) => (t(), I(ke, null, {
      default: L(() => [
        o("div", Z0, [
          e.eyebrow ? (t(), n("p", J0, m(e.eyebrow), 1)) : w("", !0),
          o("h1", Y0, m(e.title), 1),
          e.body ? (t(), n("p", X0, m(e.body), 1)) : w("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", Q0, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, m(e.secondaryLabel), 9, ek)) : w("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, m(e.primaryLabel), 9, tk)) : w("", !0)
          ])) : w("", !0),
          e.note ? (t(), n("p", ak, m(e.note), 1)) : w("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), lk = { class: "flex flex-col items-center gap-6" }, ok = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, sk = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, rk = /* @__PURE__ */ z({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), I(ke, { muted: "" }, {
      default: L(() => [
        o("div", lk, [
          e.title ? (t(), n("p", ok, m(e.title), 1)) : w("", !0),
          o("ul", sk, [
            (t(!0), n(P, null, D(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, m(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ik = { class: "flex flex-col gap-10" }, uk = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, dk = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, ck = ["aria-pressed"], fk = ["aria-pressed"], mk = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, pk = { class: "grid gap-4 md:grid-cols-3" }, vk = { class: "flex flex-col gap-1" }, gk = { class: "text-sm font-semibold" }, hk = { class: "flex items-baseline gap-1" }, bk = { class: "text-3xl font-semibold tracking-tight" }, yk = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, xk = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, kk = { class: "flex flex-col gap-2 text-sm" }, $k = { class: "text-muted-foreground" }, wk = ["href"], Ck = /* @__PURE__ */ z({
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
    return (i, u) => (t(), I(ke, { muted: "" }, {
      default: L(() => [
        o("div", ik, [
          N(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", uk, [
            o("div", dk, [
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: u[0] || (u[0] = (d) => a.value = !1)
              }, " Monthly ", 10, ck),
              o("button", {
                type: "button",
                class: j([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: u[1] || (u[1] = (d) => a.value = !0)
              }, " Annual ", 10, fk)
            ]),
            e.annualNote ? (t(), n("p", mk, m(e.annualNote), 1)) : w("", !0)
          ])) : w("", !0),
          o("ul", pk, [
            (t(!0), n(P, null, D(e.items ?? [], (d, f) => (t(), n("li", {
              key: f,
              class: j(["flex flex-col gap-4 rounded-lg border bg-card p-6", d.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", vk, [
                o("h3", gk, m(d.name), 1),
                o("p", hk, [
                  o("span", bk, m(s(d)), 1),
                  d.period ? (t(), n("span", yk, m(d.period), 1)) : w("", !0)
                ]),
                d.body ? (t(), n("p", xk, m(d.body), 1)) : w("", !0)
              ]),
              o("ul", kk, [
                (t(!0), n(P, null, D(d.features ?? [], (y, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  u[2] || (u[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", $k, m(y.title), 1)
                ]))), 128))
              ]),
              d.label ? (t(), n("a", {
                key: 0,
                href: d.href ?? "#",
                class: j([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  d.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, m(d.label), 11, wk)) : w("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function _k() {
  const e = G(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const d = l.getBoundingClientRect(), f = d.height + window.innerHeight, y = f <= 0 ? 0 : (window.innerHeight - d.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(y, 0), 1)));
  }
  function u() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return de(() => {
    const d = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, d || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((f) => {
        s = f.some((y) => y.isIntersecting), s && u();
      }), a.observe(l), window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), u();
    }
  }), me(() => {
    a?.disconnect(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), { el: e };
}
const Mk = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, Sk = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, Bk = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Pk = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, zk = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Ak = { class: "pk-showcase-stage w-full [perspective:1400px]" }, jk = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, Ok = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Lk = { class: "ml-3 truncate text-xs text-muted-foreground" }, Vk = { class: "flex" }, Dk = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, Tk = { class: "min-w-0 flex-1 p-4" }, Fk = { class: "flex flex-col divide-y rounded-md border" }, Ek = /* @__PURE__ */ z({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = _k();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", Mk, [
        o("div", Sk, [
          o("div", Bk, [
            o("h2", Pk, m(e.title), 1),
            e.body ? (t(), n("p", zk, m(e.body), 1)) : w("", !0)
          ]),
          o("div", Ak, [
            o("div", jk, [
              o("div", Ok, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", Lk, m(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", Vk, [
                o("div", Dk, [
                  (t(), n(P, null, D(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ee({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", Tk, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", Fk, [
                    (t(!0), n(P, null, D(e.rows, (s) => (t(), n("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: ee({ "--pk-row": String(s) })
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
}), Ik = /* @__PURE__ */ z({
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
    return re(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const d = performance.now(), f = (y) => {
        const p = Math.min((y - d) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, u) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, m(e.prefix ?? "") + m(s.value.toFixed(e.decimals)) + m(e.suffix ?? ""), 513));
  }
}), Nk = { class: "flex flex-col gap-10" }, Rk = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, Uk = { class: "order-2 text-sm text-muted-foreground" }, Hk = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, qk = /* @__PURE__ */ z({
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
    return (a, r) => (t(), I(ke, { muted: "" }, {
      default: L(() => [
        o("div", Nk, [
          N(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", Rk, [
            (t(!0), n(P, null, D(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", Uk, m(s.label), 1),
              o("dd", Hk, [
                l(s.value) ? (t(), I(Ik, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(P, { key: 1 }, [
                  U(m(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Kk = { class: "flex flex-col gap-10" }, Gk = { class: "grid gap-6 md:grid-cols-3" }, Wk = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, Zk = { class: "text-sm font-semibold" }, Jk = { class: "text-sm text-pretty text-muted-foreground" }, Yk = /* @__PURE__ */ z({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), I(ke, null, {
      default: L(() => [
        o("div", Kk, [
          N(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", Gk, [
            (t(!0), n(P, null, D(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", Wk, m(s + 1), 1),
              o("h3", Zk, m(r.title), 1),
              o("p", Jk, m(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Xk = { class: "flex flex-col gap-10" }, Qk = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, e2 = { class: "text-pretty text-sm leading-relaxed" }, t2 = { class: "mt-auto flex items-center gap-3" }, a2 = ["src"], n2 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, l2 = { class: "min-w-0" }, o2 = { class: "block truncate text-sm font-medium" }, s2 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, r2 = /* @__PURE__ */ z({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), I(ke, null, {
      default: L(() => [
        o("div", Xk, [
          N(Oe, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Qk, [
            (t(!0), n(P, null, D(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", e2, " “" + m(r.quote) + "” ", 1),
              o("figcaption", t2, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, a2)) : (t(), n("span", n2, m((r.name ?? "?").slice(0, 1)), 1)),
                o("span", l2, [
                  o("span", o2, m(r.name), 1),
                  r.role ? (t(), n("span", s2, m(r.role), 1)) : w("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), a4 = /* @__PURE__ */ z({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: nk,
      logos: rk,
      features: W0,
      bento: O0,
      showcase: Ek,
      steps: Yk,
      stats: qk,
      testimonials: r2,
      pricing: Ck,
      faq: U0,
      cta: F0
    }, s = k(
      () => (a.sections ?? []).map((i, u) => ({
        key: `${i.type}-${u}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, u) => (t(!0), n(P, null, D(s.value, (d) => (t(), I(Ae(d.component), te({
      key: d.key
    }, { ref_for: !0 }, d.data), null, 16))), 128));
  }
}), i2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, n4 = /* @__PURE__ */ z({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", i2, [
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
}), u2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, l4 = /* @__PURE__ */ z({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", u2, [...a[0] || (a[0] = [
      pt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), d2 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, o4 = /* @__PURE__ */ z({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", d2, [...a[0] || (a[0] = [
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
x0();
const s4 = "0.0.1";
export {
  Mw as AdminDirectory,
  qs as Alert,
  Ks as AlertDescription,
  Gs as AlertTitle,
  uw as AppPageFooter,
  z2 as AppearanceDrawer,
  _$ as Avatar,
  M$ as AvatarFallback,
  S$ as AvatarImage,
  wt as BADGE_VARIANTS,
  M2 as BadgeResolver,
  yw as BarChart,
  B$ as Breadcrumb,
  P$ as BreadcrumbEllipsis,
  z$ as BreadcrumbItem,
  A$ as BreadcrumbLink,
  j$ as BreadcrumbList,
  O$ as BreadcrumbPage,
  L$ as BreadcrumbSeparator,
  y2 as BulkActions,
  Q$ as Card,
  ew as CardAction,
  tw as CardContent,
  aw as CardDescription,
  nw as CardFooter,
  lw as CardHeader,
  ow as CardTitle,
  r1 as CartPanel,
  Vw as CatalogBrowser,
  jv as CatalogCard,
  da as CatalogFilterSheet,
  St as CatalogGrid,
  Ow as CatalogInspect,
  J1 as CatalogItemDetail,
  Lw as CatalogItemView,
  Dw as CatalogRegister,
  jw as CatalogTill,
  np as ChartCard,
  Ze as ChartTooltip,
  Ar as Checkbox,
  k2 as CheckboxCell,
  $2 as CodeCell,
  to as ColourCell,
  Cw as ComboChart,
  Fw as DASHBOARD_HIDDEN_STORAGE_KEY,
  Ab as DASHBOARD_HIDE_KEY,
  Ew as DashboardShortcuts,
  tl as DataTable,
  R$ as Dialog,
  U$ as DialogClose,
  H$ as DialogContent,
  q$ as DialogDescription,
  K$ as DialogFooter,
  G$ as DialogHeader,
  zr as DialogOverlay,
  W$ as DialogScrollContent,
  Z$ as DialogTitle,
  J$ as DialogTrigger,
  Mw as DirectoryPage,
  c$ as DropdownMenu,
  f$ as DropdownMenuCheckboxItem,
  m$ as DropdownMenuContent,
  p$ as DropdownMenuGroup,
  v$ as DropdownMenuItem,
  g$ as DropdownMenuLabel,
  u4 as DropdownMenuPortal,
  h$ as DropdownMenuRadioGroup,
  b$ as DropdownMenuRadioItem,
  y$ as DropdownMenuSeparator,
  x$ as DropdownMenuShortcut,
  k$ as DropdownMenuSub,
  $$ as DropdownMenuSubContent,
  w$ as DropdownMenuSubTrigger,
  C$ as DropdownMenuTrigger,
  C2 as EditableCell,
  qe as FormFieldControl,
  _w as HeatmapChart,
  at as ICON_PATHS,
  Gl as IconCell,
  Jl as ImageCell,
  Yw as InfoNode,
  Qs as JPEG_IMAGE_ERROR,
  w2 as KeyValueCell,
  Y$ as Label,
  yf as LineChart,
  Nh as LineItems,
  Xe as MiniStatCard,
  V$ as NavigationMenu,
  D$ as NavigationMenuContent,
  T$ as NavigationMenuIndicator,
  F$ as NavigationMenuItem,
  E$ as NavigationMenuLink,
  I$ as NavigationMenuList,
  N$ as NavigationMenuTrigger,
  Br as NavigationMenuViewport,
  Xs as OPAQUE_IMAGE_ERROR,
  Xw as PaymentGatewaySettings,
  Jx as PaymentGateways,
  xw as PieChart,
  V2 as PkAlertError,
  n4 as PkAuroraBackdrop,
  Re as PkBadge,
  O0 as PkBento,
  A2 as PkBottomNav,
  sw as PkBoundary,
  vw as PkBuilder,
  ne as PkButton,
  rw as PkCard,
  pd as PkCheckboxList,
  ia as PkCodeBox,
  Yu as PkCodeInput,
  Od as PkColourPicker,
  o4 as PkConsoleBackdrop,
  Ik as PkCountUp,
  F0 as PkCta,
  dw as PkDeviceFrame,
  Ac as PkDocument,
  He as PkDropdown,
  l4 as PkEditorialBackdrop,
  U0 as PkFaq,
  W0 as PkFeatureGrid,
  he as PkFieldLabel,
  oa as PkFileUpload,
  _e as PkHeading,
  nk as PkHero,
  Ii as PkKeyValue,
  a4 as PkLandingSections,
  rk as PkLogoCloud,
  Hu as PkMarkdownInput,
  it as PkModal,
  Mt as PkMultiSelect,
  O2 as PkOtpInput,
  Gw as PkPasskeyRegister,
  D2 as PkPasswordInput,
  Ck as PkPricing,
  zh as PkQtyStepper,
  $o as PkQueryBuilder,
  cd as PkRadioGroup,
  pw as PkRepeater,
  k0 as PkReveal,
  Ji as PkRichEditor,
  ke as PkSection,
  Oe as PkSectionHeading,
  Ek as PkShowcase,
  cb as PkSignaturePad,
  De as PkSkeleton,
  Bt as PkSlideover,
  Ed as PkSlider,
  j2 as PkSpinner,
  qk as PkStats,
  pe as PkStatusBadge,
  ai as PkStepIndicator,
  Yk as PkSteps,
  ec as PkSwatchPreview,
  kd as PkTagsInput,
  r2 as PkTestimonials,
  fe as PkTextInput,
  B0 as PkTiltCard,
  Xd as PkVisualSelect,
  og as PlanCard,
  Aw as PlanEditor,
  zw as PlanGrid,
  ww as PolarAreaChart,
  $w as RadarChart,
  S2 as RecordActions,
  Ww as RecordForm,
  x2 as RelationPanel,
  uv as STATUS_TONES,
  kw as ScatterChart,
  mx as SchemaNode,
  Bw as SegmentedBar,
  Rw as SelectionBar,
  wr as Separator,
  Nw as SetupChecklist,
  aa as ShadcnInput,
  or as Sheet,
  F2 as SheetClose,
  rr as SheetContent,
  ir as SheetDescription,
  E2 as SheetFooter,
  ur as SheetHeader,
  dr as SheetTitle,
  I2 as SheetTrigger,
  $p as ShortcutsWidget,
  N2 as Sidebar,
  R2 as SidebarContent,
  U2 as SidebarFooter,
  H2 as SidebarGroup,
  q2 as SidebarGroupAction,
  K2 as SidebarGroupContent,
  G2 as SidebarGroupLabel,
  W2 as SidebarHeader,
  Z2 as SidebarInput,
  J2 as SidebarInset,
  Y2 as SidebarMenu,
  X2 as SidebarMenuAction,
  Q2 as SidebarMenuBadge,
  t$ as SidebarMenuButton,
  a$ as SidebarMenuItem,
  n$ as SidebarMenuSkeleton,
  l$ as SidebarMenuSub,
  o$ as SidebarMenuSubButton,
  s$ as SidebarMenuSubItem,
  r$ as SidebarProvider,
  i$ as SidebarRail,
  u$ as SidebarSeparator,
  d$ as SidebarTrigger,
  Tw as SignatureStudio,
  tt as Sparkline,
  X$ as Spinner,
  Sw as StatCard,
  Pw as StatListChart,
  Iw as StatStrip,
  Ve as Switch,
  na as TRANSPARENT_IMAGE_HELP,
  Uw as TablePagination,
  Hw as TableShell,
  qw as TableTabs,
  Kw as TableToolbar,
  bw as ThemeToggle,
  xr as Tooltip,
  kr as TooltipContent,
  e$ as TooltipProvider,
  $r as TooltipTrigger,
  ua as TrendBadge,
  Zw as UnsavedBar,
  Ws as alertVariants,
  as as appearanceVars,
  ft as applyAppearance,
  lr as assertTransparentImage,
  Xt as buttonClasses,
  Qe as catalogFiltersActive,
  X as cn,
  Ov as cycleLabel,
  Me as emptyCatalogFilters,
  ni as fieldControl,
  mh as findExactSku,
  Lv as formatPerkValue,
  Ao as hasBadgeValue,
  cw as hasFieldControl,
  gw as hasOptionPreview,
  oe as iconPath,
  ar as imageHasTransparency,
  B2 as initializeAppearance,
  ct as isDark,
  Pt as matchCatalogItem,
  Pr as navigationMenuTriggerStyle,
  Id as optionPreview,
  T2 as packWidgetColumns,
  Vv as perkGranted,
  _t as readAppearance,
  x0 as registerBuiltInFieldControls,
  $e as registerFieldControl,
  ot as registerOptionPreview,
  fw as registeredFieldTypes,
  Nd as registeredOptionPreviews,
  mw as resetFieldControls,
  hw as resetOptionPreviews,
  P2 as setAppearancePersister,
  Cr as sidebarMenuButtonVariants,
  mv as statusBadgeVariant,
  fv as statusTone,
  L2 as toUrl,
  ta as useAppearance,
  Qw as useColumnVisibility,
  e4 as useLiveUpdates,
  M0 as usePointer,
  ca as useReveal,
  _2 as useSchemaColumns,
  _k as useScrollProgress,
  iw as useShellPageFooter,
  et as useSidebar,
  t4 as useTenantTheme,
  Jw as useUnsavedChanges,
  s4 as version
};
//# sourceMappingURL=index.js.map
