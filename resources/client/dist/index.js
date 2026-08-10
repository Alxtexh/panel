import './ui.css';
import { defineComponent as M, ref as U, computed as x, openBlock as t, createElementBlock as n, normalizeClass as P, createElementVNode as l, createCommentVNode as C, Fragment as S, renderList as V, createTextVNode as Y, toDisplayString as f, withModifiers as fe, createStaticVNode as Qe, renderSlot as I, watch as ie, nextTick as be, onBeforeUnmount as de, createBlock as D, Teleport as ze, createVNode as W, Transition as we, withCtx as E, onMounted as re, normalizeStyle as X, unref as m, resolveDynamicComponent as Me, resolveComponent as et, withDirectives as oe, vModelSelect as Le, vModelDynamic as Et, isRef as It, vModelText as _e, useTemplateRef as Nt, mergeProps as Q, normalizeProps as pe, guardReactiveProps as ke, onErrorCaptured as Rt, defineAsyncComponent as ut, vShow as Ce, shallowRef as Ht, watchEffect as Ut } from "vue";
import { AlertCircle as Kt, EyeOff as Zt, Eye as qt, X as tt, PanelLeftOpen as Gt, PanelLeftClose as Wt, Check as yt, Circle as Yt, ChevronRight as kt, MoreHorizontal as Jt, ChevronDown as Xt, Loader2Icon as Qt } from "@lucide/vue";
import { cva as at } from "class-variance-authority";
import { clsx as ea } from "clsx";
import { twMerge as ta } from "tailwind-merge";
import { useVModel as $t, reactiveOmit as ne, useMediaQuery as aa, useEventListener as na, defaultDocument as oa } from "@vueuse/core";
import { useForwardPropsEmits as se, DialogRoot as wt, DialogClose as Pe, DialogOverlay as nt, DialogPortal as ot, DialogContent as lt, DialogDescription as _t, DialogTitle as Ct, DialogTrigger as Mt, createContext as la, Primitive as Ae, TooltipRoot as sa, TooltipPortal as ra, TooltipContent as ia, TooltipArrow as da, TooltipProvider as St, TooltipTrigger as ua, Separator as ca, DropdownMenuRoot as fa, DropdownMenuCheckboxItem as pa, DropdownMenuItemIndicator as Bt, DropdownMenuPortal as ma, DropdownMenuContent as va, DropdownMenuGroup as ha, useForwardProps as me, DropdownMenuItem as ga, DropdownMenuLabel as ba, DropdownMenuRadioGroup as xa, DropdownMenuRadioItem as ya, DropdownMenuSeparator as ka, DropdownMenuSub as $a, DropdownMenuSubContent as wa, DropdownMenuSubTrigger as _a, DropdownMenuTrigger as Ca, AvatarRoot as Ma, AvatarFallback as Sa, AvatarImage as Ba, NavigationMenuViewport as za, NavigationMenuRoot as Pa, NavigationMenuContent as Aa, NavigationMenuIndicator as Oa, NavigationMenuItem as La, NavigationMenuLink as ja, NavigationMenuList as Va, NavigationMenuTrigger as Ta, Label as Da, CheckboxRoot as Fa, CheckboxIndicator as Ea, SwitchRoot as Ia, SwitchThumb as Na } from "reka-ui";
import { DropdownMenuPortal as Y1 } from "reka-ui";
const Ra = { class: "w-full border-collapse text-sm" }, Ha = { class: "bg-background sticky top-0 z-10" }, Ua = { class: "bg-muted/50" }, Ka = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Za = {
  key: 1,
  class: "w-10 border-b px-3 py-2.5"
}, qa = ["checked", "indeterminate"], Ga = ["onClick"], Wa = {
  key: 0,
  class: "text-xs"
}, Ya = {
  key: 1,
  class: "text-xs opacity-40"
}, Ja = { key: 1 }, Xa = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Qa = {
  key: 0,
  class: "bg-muted/40"
}, en = ["colspan"], tn = { class: "text-muted-foreground/70" }, an = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], nn = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, on = {
  key: 1,
  class: "px-3 py-2"
}, ln = ["checked", "aria-label", "onChange"], sn = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, rn = ["aria-label", "onClick"], dn = { class: "text-xs" }, un = { key: 1 }, cn = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, fn = {
  key: 0,
  class: "bg-muted/40 border-t-2"
}, pn = { key: 0 }, mn = { class: "text-muted-foreground block text-[10px] font-medium" }, vn = { class: "font-semibold tabular-nums" }, hn = { key: 1 }, gn = {
  key: 0,
  class: "text-muted-foreground p-10 text-center"
}, bn = {
  key: 1,
  class: "text-muted-foreground p-10 text-center"
}, xn = { class: "font-medium" }, yn = {
  key: 0,
  class: "text-sm"
}, kn = /* @__PURE__ */ M({
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
  setup(e, { emit: o }) {
    const a = e;
    function r(j) {
      return a.groupBy ? j === 0 ? !0 : a.rows[j]?.[a.groupBy.key] !== a.rows[j - 1]?.[a.groupBy.key] : !1;
    }
    function s(j) {
      const L = a.groupBy ? j[a.groupBy.key] : null;
      return L == null || L === "" ? "None" : String(L);
    }
    const i = U(null), d = U(null);
    function u(j, L) {
      i.value = j, L.dataTransfer?.setData("text/plain", String(j)), L.dataTransfer && (L.dataTransfer.effectAllowed = "move");
    }
    function v() {
      i.value = null, d.value = null;
    }
    function b(j) {
      return i.value === null || d.value !== j ? "" : i.value > j ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function c(j, L) {
      i.value !== null && (L.preventDefault(), d.value = j);
    }
    function h(j) {
      const L = i.value;
      if (i.value = null, d.value = null, L === null || L === j)
        return;
      const T = a.rows.map((R) => R[a.rowKey]), [N] = T.splice(L, 1);
      T.splice(j, 0, N), y("reorder", T);
    }
    const y = o;
    function w(j, L) {
      !a.rowClickable || a.reordering || L.button !== 0 || L.metaKey || L.ctrlKey || L.shiftKey || L.altKey || L.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || y("row-click", j);
    }
    const _ = U(null), k = x(() => a.columns.filter((j) => !a.hidden?.has(j.key))), $ = x(() => a.rows.map((j) => j[a.rowKey])), O = x(
      () => $.value.length > 0 && $.value.every((j) => a.selected?.has(j))
    ), p = x(
      () => !O.value && $.value.some((j) => a.selected?.has(j))
    );
    function g(j) {
      return j.sortKey ?? j.key;
    }
    function z(j) {
      return a.sort === g(j);
    }
    async function A(j, L, T) {
      try {
        await navigator.clipboard.writeText(String(T)), _.value = `${j}-${L.key}`, setTimeout(() => _.value = null, 1200);
      } catch {
      }
    }
    const G = x(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function Z(j) {
      return a.summaries?.[j] ?? null;
    }
    function ae(j) {
      const L = a.summaries?.[j], T = a.summaryValues?.[j];
      if (!L)
        return "";
      if (T == null)
        return "-";
      const N = L.divideBy ? T / L.divideBy : T, R = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: L.decimals,
        maximumFractionDigits: L.decimals
      }).format(N);
      return `${L.prefix ?? ""}${R}${L.suffix ?? ""}`;
    }
    return (j, L) => (t(), n("div", {
      class: P(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      l("table", Ra, [
        l("thead", Ha, [
          l("tr", Ua, [
            e.reordering ? (t(), n("th", Ka)) : C("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Za, [
              l("input", {
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: O.value,
                indeterminate: p.value,
                "aria-label": "Select all rows on this page",
                onChange: L[0] || (L[0] = (T) => y("toggle-page", !O.value))
              }, null, 40, qa)
            ])) : C("", !0),
            (t(!0), n(S, null, V(k.value, (T) => (t(), n("th", {
              key: T.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              T.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (N) => y("sort", g(T))
              }, [
                Y(f(T.label) + " ", 1),
                z(T) ? (t(), n("span", Wa, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Ya, "↕"))
              ], 8, Ga)) : (t(), n("span", Ja, f(T.label), 1))
            ]))), 128)),
            j.$slots.actions ? (t(), n("th", Xa, [...L[1] || (L[1] = [
              l("span", { class: "sr-only" }, "Actions", -1)
            ])])) : C("", !0)
          ])
        ]),
        l("tbody", {
          class: P(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(S, null, V(e.rows, (T, N) => (t(), n(S, {
            key: T[e.rowKey]
          }, [
            e.groupBy && r(N) ? (t(), n("tr", Qa, [
              l("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                l("span", tn, f(e.groupBy.label) + ":", 1),
                Y(" " + f(s(T)), 1)
              ], 8, en)
            ])) : C("", !0),
            l("tr", {
              class: P(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                e.selected?.has(T[e.rowKey]) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                i.value === N ? "opacity-40" : "",
                b(N),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (R) => u(N, R),
              onDragover: (R) => c(N, R),
              onDrop: fe((R) => h(N), ["prevent"]),
              onDragend: v,
              onContextmenu: (R) => y("row-contextmenu", T, R),
              onClick: (R) => w(T, R)
            }, [
              e.reordering ? (t(), n("td", nn, [...L[2] || (L[2] = [
                Qe('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-4805f648><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4805f648><circle cx="9" cy="6" r="1.5" data-v-4805f648></circle><circle cx="15" cy="6" r="1.5" data-v-4805f648></circle><circle cx="9" cy="12" r="1.5" data-v-4805f648></circle><circle cx="15" cy="12" r="1.5" data-v-4805f648></circle><circle cx="9" cy="18" r="1.5" data-v-4805f648></circle><circle cx="15" cy="18" r="1.5" data-v-4805f648></circle></svg></span>', 1)
              ])])) : C("", !0),
              e.selectable && !e.reordering ? (t(), n("td", on, [
                l("input", {
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  checked: e.selected?.has(T[e.rowKey]),
                  "aria-label": `Select row ${T[e.rowKey]}`,
                  onChange: (R) => y("toggle-row", T[e.rowKey])
                }, null, 40, ln)
              ])) : C("", !0),
              (t(!0), n(S, null, V(k.value, (R) => (t(), n("td", {
                key: R.key,
                class: P(["px-3 py-2 whitespace-nowrap", R.cellClass])
              }, [
                I(j.$slots, `cell:${R.key}`, {
                  row: T,
                  value: T[R.key],
                  column: R
                }, () => [
                  R.copyable ? (t(), n("span", sn, [
                    Y(f(T[R.key]) + " ", 1),
                    l("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${R.label.toLowerCase()}`,
                      onClick: (H) => A(String(T[e.rowKey]), R, T[R.key])
                    }, [
                      l("span", dn, f(_.value === `${T[e.rowKey]}-${R.key}` ? "✓" : "⧉"), 1)
                    ], 8, rn)
                  ])) : (t(), n("span", un, f(T[R.key] ?? "-"), 1))
                ], !0)
              ], 2))), 128)),
              j.$slots.actions ? (t(), n("td", cn, [
                I(j.$slots, "actions", { row: T }, void 0, !0)
              ])) : C("", !0)
            ], 42, an)
          ], 64))), 128))
        ], 2),
        G.value ? (t(), n("tfoot", fn, [
          l("tr", null, [
            e.selectable ? (t(), n("td", pn)) : C("", !0),
            (t(!0), n(S, null, V(e.columns, (T) => (t(), n(S, {
              key: `s-${T.key}`
            }, [
              e.hidden?.has(T.key) ? C("", !0) : (t(), n("td", {
                key: 0,
                class: P(["px-3 py-2 align-top text-sm whitespace-nowrap", T.cellClass])
              }, [
                Z(T.key) ? (t(), n(S, { key: 0 }, [
                  l("span", mn, f(Z(T.key).label), 1),
                  l("span", vn, f(ae(T.key)), 1)
                ], 64)) : C("", !0)
              ], 2))
            ], 64))), 128)),
            j.$slots.actions ? (t(), n("td", hn)) : C("", !0)
          ])
        ])) : C("", !0)
      ]),
      e.rows.length === 0 && e.filtered ? (t(), n("div", gn, [
        L[3] || (L[3] = l("p", { class: "font-medium" }, "Nothing matches these filters", -1)),
        I(j.$slots, "clear-filters", {}, void 0, !0)
      ])) : e.rows.length === 0 ? (t(), n("div", bn, [
        l("p", xn, f(e.emptyTitle), 1),
        e.emptyHint ? (t(), n("p", yn, f(e.emptyHint), 1)) : C("", !0)
      ])) : C("", !0)
    ], 2));
  }
}), st = (e, o) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of o)
    a[r] = s;
  return a;
}, dg = /* @__PURE__ */ st(kn, [["__scopeId", "data-v-4805f648"]]), $n = ["aria-label"], wn = { class: "border-b px-5 py-4" }, _n = { class: "text-base font-semibold" }, Cn = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Mn = { class: "px-5 py-4" }, Sn = { class: "bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3" }, ct = /* @__PURE__ */ M({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = U(null);
    let i = null;
    const d = U(!1);
    function u(c) {
      d.value = c.target === c.currentTarget;
    }
    function v(c) {
      d.value && c.target === c.currentTarget && !a.busy && r("close"), d.value = !1;
    }
    function b(c) {
      if (!a.open)
        return;
      if (c.key === "Escape" && !a.busy) {
        c.stopPropagation(), r("close");
        return;
      }
      if (c.key !== "Tab" || !s.value)
        return;
      const h = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (h.length === 0)
        return;
      const y = h[0], w = h[h.length - 1];
      c.shiftKey && document.activeElement === y ? (c.preventDefault(), w.focus()) : !c.shiftKey && document.activeElement === w && (c.preventDefault(), y.focus());
    }
    return ie(
      () => a.open,
      (c) => {
        c ? (i = document.activeElement, document.addEventListener("keydown", b), be(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", b), i?.focus(), i = null);
      }
    ), de(() => document.removeEventListener("keydown", b)), (c, h) => (t(), D(ze, { to: "body" }, [
      W(we, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: E(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: u,
            onPointerup: v
          }, [
            l("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": e.title,
              class: "bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
            }, [
              l("div", wn, [
                l("h2", _n, f(e.title), 1),
                e.description ? (t(), n("p", Cn, f(e.description), 1)) : C("", !0)
              ]),
              l("div", Mn, [
                I(c.$slots, "default")
              ]),
              l("div", Sn, [
                I(c.$slots, "footer")
              ])
            ], 8, $n)
          ], 32)) : C("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), He = {
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
  /* ------------------------------------------------------------ actions */
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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
  key: "M15.5 2a6.5 6.5 0 1 0-5.6 9.8L2 19.7V22h2.3l1-1v-2h2v-2h2l1.9-1.9A6.5 6.5 0 0 0 15.5 2Z M17 7h.01",
  link: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
  archive: "M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8M2 4h20v4H2zM10 12h4",
  /* ------------------------------------------------------------ chrome */
  "more-horizontal": "M12 12h.01M19 12h.01M5 12h.01",
  // Vertical, because the actions column is narrow and a horizontal glyph
  // reads as "more columns this way" next to a scrollable table.
  "more-vertical": "M12 12h.01M12 19h.01M12 5h.01",
  "chevron-right": "m9 18 6-6-6-6",
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
function xe(e) {
  return e ? He[e] ?? He.dot : He.dot;
}
const Bn = 160, Ee = /* @__PURE__ */ M({
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
    const a = e, r = U(!1), s = U(null), i = U(null), d = U({ top: 0, left: 0, minWidth: 0 }), u = U(null);
    let v = null;
    function b(g) {
      !a.dismissOnPanelClick || g.target?.closest("input, select, textarea, label, [data-keep-open]") || _();
    }
    async function c() {
      v && (clearTimeout(v), v = null), !r.value && (r.value = !0, await be(), k());
    }
    function h() {
      v = setTimeout(_, 180);
    }
    async function y() {
      u.value = null, r.value = !r.value, r.value && (await be(), k());
    }
    async function w(g, z) {
      u.value = { x: g, y: z }, r.value = !0, await be(), k();
    }
    function _() {
      r.value = !1, u.value = null;
    }
    function k() {
      const g = s.value, z = i.value;
      if (!g || !z)
        return;
      const A = z.getBoundingClientRect(), G = 8, Z = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : g.getBoundingClientRect();
      let ae, j;
      if (a.placement === "bottom")
        ae = Z.bottom + a.offset, ae + A.height > window.innerHeight - G && Z.top - A.height - a.offset > G && (ae = Z.top - A.height - a.offset), j = a.align === "end" && !u.value ? Z.right - A.width : Z.left;
      else {
        ae = Z.top;
        const L = a.placement === "right", T = Z.right + a.offset + A.width < window.innerWidth - G, N = Z.left - a.offset - A.width > G;
        j = (L ? T || !N : !N && T) ? Z.right + a.offset : Z.left - a.offset - A.width;
      }
      j = Math.min(Math.max(G, j), window.innerWidth - A.width - G), ae = Math.min(Math.max(G, ae), window.innerHeight - A.height - G), d.value = { top: ae, left: j, minWidth: Math.max(Z.width, Bn) };
    }
    function $(g) {
      if (!r.value)
        return;
      const z = g.target;
      s.value?.contains(z) || i.value?.contains(z) || (z instanceof Element ? z : z.parentElement)?.closest("[data-pk-overlay]") || _();
    }
    function O(g) {
      g.key === "Escape" && r.value && (g.stopPropagation(), _());
    }
    function p() {
      if (r.value) {
        if (u.value) {
          _();
          return;
        }
        k();
      }
    }
    return re(() => {
      document.addEventListener("pointerdown", $), document.addEventListener("keydown", O), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p);
    }), de(() => {
      v && clearTimeout(v), document.removeEventListener("pointerdown", $), document.removeEventListener("keydown", O), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    }), o({ close: _, openAt: w }), (g, z) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: z[2] || (z[2] = (A) => e.hoverable && c()),
      onPointerleave: z[3] || (z[3] = (A) => e.hoverable && h())
    }, [
      l("div", { onClick: y }, [
        I(g.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(ze, { to: "body" }, [
        W(we, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: E(() => [
            r.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: P([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: X({
                top: `${d.value.top}px`,
                left: `${d.value.left}px`,
                /*
                 * AT LEAST AS WIDE AS WHAT OPENED IT. A menu narrower
                 * than its own trigger reads as a different control
                 * belonging to something else.
                 *
                 * This was computed on every open and never applied -
                 * the template set only `top` and `left` - so the
                 * measurement existed and did nothing.
                 */
                minWidth: `${d.value.minWidth}px`
              }),
              "data-pk-overlay": "",
              role: "menu",
              onPointerenter: z[0] || (z[0] = (A) => e.hoverable && c()),
              onPointerleave: z[1] || (z[1] = (A) => e.hoverable && h()),
              onClick: b
            }, [
              I(g.$slots, "panel", { close: _ })
            ], 38)) : C("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), zn = ["disabled"], Pn = { class: "py-0.5" }, An = ["disabled", "onClick"], On = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ln = ["d"], jn = ["disabled"], Vn = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tn = ["d"], Dn = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Fn = ["disabled", "onClick"], En = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, In = ["d"], Nn = { class: "text-muted-foreground text-sm" }, Rn = { class: "text-foreground font-medium tabular-nums" }, Hn = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Un = ["disabled"], Kn = { class: "text-muted-foreground text-sm" }, Zn = { class: "text-foreground font-medium tabular-nums" }, qn = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Gn = ["disabled"], ug = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null), i = U(!1), d = x(() => a.allMatching ? a.total : a.count), u = x(() => d.value !== void 0), v = x(() => u.value && d.value === 0), b = x(() => a.actions.filter((O) => !O.destructive)), c = x(() => a.actions.filter((O) => O.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function y(O) {
      return h[O.color ?? "gray"] ?? h.gray;
    }
    function w(O) {
      if (O.confirmation) {
        s.value = O;
        return;
      }
      r("run", O.key);
    }
    function _() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function k() {
      i.value = !1, r("export");
    }
    const $ = (O) => new Intl.NumberFormat().format(O);
    return (O, p) => (t(), n(S, null, [
      W(Ee, null, {
        trigger: E(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...p[5] || (p[5] = [
            Y(" Bulk actions ", -1),
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
          ])], 8, zn)
        ]),
        panel: E(() => [
          l("div", Pn, [
            (t(!0), n(S, null, V(b.value, (g) => (t(), n("button", {
              key: g.key,
              type: "button",
              role: "menuitem",
              class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", y(g)]),
              disabled: e.busy,
              onClick: (z) => w(g)
            }, [
              (t(), n("svg", On, [
                l("path", {
                  d: m(xe)(g.icon)
                }, null, 8, Ln)
              ])),
              Y(" " + f(g.label), 1)
            ], 10, An))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: p[0] || (p[0] = (g) => i.value = !0)
            }, [
              (t(), n("svg", Vn, [
                l("path", {
                  d: m(xe)("download")
                }, null, 8, Tn)
              ])),
              p[6] || (p[6] = Y(" Export CSV ", -1))
            ], 8, jn)) : C("", !0),
            c.value.length ? (t(), n("div", Dn, [
              (t(!0), n(S, null, V(c.value, (g) => (t(), n("button", {
                key: g.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (z) => w(g)
              }, [
                (t(), n("svg", En, [
                  l("path", {
                    d: m(xe)(g.icon ?? "trash")
                  }, null, 8, In)
                ])),
                Y(" " + f(g.label), 1)
              ], 8, Fn))), 128))
            ])) : C("", !0)
          ])
        ]),
        _: 1
      }),
      W(ct, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: p[2] || (p[2] = (g) => s.value = null)
      }, {
        footer: E(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: p[1] || (p[1] = (g) => s.value = null)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: P([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || v.value,
            onClick: _
          }, f(s.value?.label), 11, Un)
        ]),
        default: E(() => [
          l("p", Nn, [
            p[7] || (p[7] = Y(" This will affect ", -1)),
            l("span", Rn, [
              u.value ? (t(), n(S, { key: 1 }, [
                Y(f($(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(S, { key: 0 }, [
                Y("…")
              ], 64))
            ]),
            p[8] || (p[8] = Y(" . ", -1))
          ]),
          v.value ? (t(), n("p", Hn, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : C("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      W(ct, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: p[4] || (p[4] = (g) => i.value = !1)
      }, {
        footer: E(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: p[3] || (p[3] = (g) => i.value = !1)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || v.value,
            onClick: k
          }, " Export CSV ", 8, Gn)
        ]),
        default: E(() => [
          l("p", Kn, [
            p[9] || (p[9] = Y(" This will export ", -1)),
            l("span", Zn, [
              u.value ? (t(), n(S, { key: 1 }, [
                Y(f($(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(S, { key: 0 }, [
                Y("…")
              ], 64))
            ]),
            p[10] || (p[10] = Y(" . ", -1))
          ]),
          v.value ? (t(), n("p", qn, " Nothing matches the current filters - there is nothing to export. ")) : C("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Wn = { class: "bg-card overflow-hidden rounded-lg border" }, Yn = { class: "pk-scroll w-full overflow-x-auto" }, Jn = { class: "w-full border-collapse text-sm" }, Xn = { class: "bg-muted/40" }, Qn = { class: "divide-y" }, eo = { key: 0 }, to = ["colspan"], ao = { key: 1 }, no = ["colspan"], oo = {
  key: 0,
  class: "flex justify-center border-t px-3 py-2"
}, lo = ["disabled"], so = {
  key: 1,
  class: "text-muted-foreground border-t px-3 py-2 text-center text-xs"
}, cg = /* @__PURE__ */ M({
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
  setup(e, { emit: o }) {
    const a = e, r = o, s = x(() => a.columns.filter((d) => d.type !== "image"));
    function i(d, u) {
      return u == null || u === "" ? "-" : d.type === "date" || d.type === "datetime" ? new Date(String(u)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...d.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof u == "number" ? new Intl.NumberFormat().format(u) : String(u);
    }
    return (d, u) => (t(), n("div", Wn, [
      l("div", Yn, [
        l("table", Jn, [
          l("thead", Xn, [
            l("tr", null, [
              (t(!0), n(S, null, V(s.value, (v) => (t(), n("th", {
                key: v.key,
                class: "text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
              }, f(v.label), 1))), 128))
            ])
          ]),
          l("tbody", Qn, [
            e.loading && e.rows.length === 0 ? (t(), n("tr", eo, [
              l("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, " Loading… ", 8, to)
            ])) : e.loaded && e.rows.length === 0 ? (t(), n("tr", ao, [
              l("td", {
                colspan: s.value.length,
                class: "text-muted-foreground px-3 py-6 text-center text-sm"
              }, f(e.emptyText), 9, no)
            ])) : C("", !0),
            (t(!0), n(S, null, V(e.rows, (v, b) => (t(), n("tr", {
              key: v.id ?? b,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(S, null, V(s.value, (c) => (t(), n("td", {
                key: c.key,
                class: P(["px-3 py-2 whitespace-nowrap", [
                  c.mono ? "font-mono text-xs" : "",
                  c.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                I(d.$slots, `cell:${c.key}`, {
                  row: v,
                  value: v[c.key],
                  column: c
                }, () => [
                  Y(f(i(c, v[c.key])), 1)
                ])
              ], 2))), 128))
            ]))), 128))
          ])
        ])
      ]),
      e.nextCursor ? (t(), n("div", oo, [
        l("button", {
          type: "button",
          class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
          disabled: e.loading,
          onClick: u[0] || (u[0] = (v) => r("load", e.nextCursor))
        }, f(e.loading ? "Loading…" : "Load more"), 9, lo)
      ])) : e.capped ? (t(), n("p", so, " Showing the first " + f(e.rows.length) + ". Open the full list to search or filter the rest. ", 1)) : C("", !0)
    ]));
  }
}), ro = ["title"], io = ["aria-label"], uo = ["d"], co = { class: "sr-only" }, fg = /* @__PURE__ */ M({
  __name: "IconCell",
  props: {
    value: {},
    icons: { default: () => ({}) },
    colors: { default: () => ({}) },
    labels: { default: () => ({}) },
    defaultIcon: { default: "dot" }
  },
  setup(e) {
    const o = e, a = {
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
    }, s = x(() => typeof o.value == "boolean" ? o.value ? "1" : "" : o.value === null || o.value === void 0 ? "" : String(o.value)), i = x(() => o.icons[s.value] ?? o.defaultIcon), d = x(() => a[i.value] ?? a.dot), u = x(() => r[o.colors[s.value] ?? "neutral"] ?? r.neutral), v = x(() => o.labels[s.value] ?? String(o.value ?? "-"));
    return (b, c) => (t(), n("span", {
      class: "inline-flex items-center",
      title: v.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: P(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": v.value
      }, [
        l("path", { d: d.value }, null, 8, uo)
      ], 10, io)),
      l("span", co, f(v.value), 1)
    ], 8, ro));
  }
}), fo = ["src"], po = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, pg = /* @__PURE__ */ M({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const o = e, a = U(!1);
    ie(
      () => o.src,
      () => a.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = x(() => {
      const d = typeof o.src == "string" ? o.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = x(() => {
      const d = typeof o.fallbackText == "string" ? o.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), n("span", {
      class: P(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (v) => a.value = !0)
      }, null, 40, fo)) : e.fallback === "initials" ? (t(), n(S, { key: 1 }, [
        Y(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", po, [...u[1] || (u[1] = [
        l("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : C("", !0)
    ], 2));
  }
}), mo = {
  key: 0,
  class: "text-muted-foreground"
}, vo = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, ho = {
  key: 0,
  class: "font-mono text-xs"
}, go = {
  key: 1,
  class: "sr-only"
}, mg = /* @__PURE__ */ M({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, a = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = x(() => {
      const s = (o.value ?? "").trim();
      return a.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), n("span", mo, "-")) : (t(), n("span", vo, [
      l("span", {
        class: "size-4 shrink-0 rounded border",
        style: X({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", ho, f(r.value), 1)) : (t(), n("span", go, f(r.value), 1))
    ]));
  }
}), bo = { class: "inline-flex items-center" }, xo = ["checked", "aria-label"], yo = { class: "sr-only" }, vg = /* @__PURE__ */ M({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const o = e, a = x(() => {
      const s = o.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = x(
      () => a.value ? o.trueLabel ?? "Yes" : o.falseLabel ?? "No"
    );
    return (s, i) => (t(), n("span", bo, [
      l("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, xo),
      l("span", yo, f(r.value), 1)
    ]));
  }
}), ko = {
  key: 0,
  class: "text-muted-foreground"
}, $o = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, hg = /* @__PURE__ */ M({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, a = x(
      () => String(o.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", $o, f(a.value), 1)) : (t(), n("span", ko, "—"));
  }
}), wo = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", _o = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, Co = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Mo(e = {}) {
  const o = e.variant ?? "default", a = e.size ?? "default";
  return [wo, _o[o], Co[a], e.class].filter(Boolean).join(" ");
}
const ye = /* @__PURE__ */ M({
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
    const o = e, a = x(
      () => Mo({ variant: o.variant, size: o.size, class: o.class })
    ), r = x(() => o.as === "button" ? o.type : void 0);
    return (s, i) => (t(), D(Me(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: P(a.value)
    }, {
      default: E(() => [
        I(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), So = { class: "flex items-center gap-2" }, Bo = ["onUpdate:modelValue", "onChange"], zo = ["value"], Po = ["onUpdate:modelValue"], Ao = ["value"], Oo = ["onUpdate:modelValue"], Lo = ["onUpdate:modelValue", "multiple"], jo = ["value"], Vo = ["onUpdate:modelValue", "type"], To = ["aria-label", "onClick"], Do = { class: "flex items-center gap-2" }, Fo = /* @__PURE__ */ M({
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
    const a = e, r = o, s = () => ({ logic: "and", rules: [] }), i = U(a.modelValue ? structuredClone(a.modelValue) : s());
    ie(
      () => a.modelValue,
      (p) => {
        i.value = p ? structuredClone(p) : s();
      }
    );
    const d = (p) => "rules" in p, u = x(() => Object.keys(a.fields));
    function v(p) {
      const g = p ? a.fields[p]?.kind : void 0;
      return g ? a.operators[g] ?? [] : [];
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
    function c() {
      r("update:modelValue", i.value);
    }
    function h() {
      const p = u.value[0];
      i.value.rules.push({
        field: p,
        operator: v(p)[0],
        value: void 0
      }), c();
    }
    function y() {
      i.value.rules.push(s()), c();
    }
    function w(p) {
      i.value.rules.splice(p, 1), c();
    }
    function _(p) {
      p.operator = v(p.field)[0], p.value = void 0, c();
    }
    const k = x(() => a.depth + 1 < a.maxDepth);
    function $() {
      i.value = s(), c(), r("apply", null);
    }
    function O() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (p, g) => {
      const z = et("PkQueryBuilder", !0);
      return t(), n("div", {
        class: P(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        l("div", So, [
          oe(l("select", {
            "onUpdate:modelValue": g[0] || (g[0] = (A) => i.value.logic = A),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: c
          }, [...g[1] || (g[1] = [
            l("option", { value: "and" }, "Match all", -1),
            l("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Le, i.value.logic]
          ]),
          g[2] || (g[2] = l("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(S, null, V(i.value.rules, (A, G) => (t(), n("div", {
          key: G,
          class: "flex items-start gap-2"
        }, [
          d(A) ? (t(), D(z, {
            key: 0,
            modelValue: i.value.rules[G],
            "onUpdate:modelValue": [(Z) => i.value.rules[G] = Z, c],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(S, { key: 1 }, [
            oe(l("select", {
              "onUpdate:modelValue": (Z) => A.field = Z,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (Z) => _(A)
            }, [
              (t(!0), n(S, null, V(u.value, (Z) => (t(), n("option", {
                key: Z,
                value: Z
              }, f(e.fields[Z].label), 9, zo))), 128))
            ], 40, Bo), [
              [Le, A.field]
            ]),
            oe(l("select", {
              "onUpdate:modelValue": (Z) => A.operator = Z,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: c
            }, [
              (t(!0), n(S, null, V(v(A.field), (Z) => (t(), n("option", {
                key: Z,
                value: Z
              }, f(b[Z] ?? Z), 9, Ao))), 128))
            ], 40, Po), [
              [Le, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? oe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (Z) => A.value = Z,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: c
            }, [...g[3] || (g[3] = [
              l("option", { value: !0 }, "Yes", -1),
              l("option", { value: !1 }, "No", -1)
            ])], 40, Oo)), [
              [Le, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? oe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (Z) => A.value = Z,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: c
            }, [
              (t(!0), n(S, null, V(e.fields[A.field].options, (Z) => (t(), n("option", {
                key: Z,
                value: Z
              }, f(Z), 9, jo))), 128))
            ], 40, Lo)), [
              [Le, A.value]
            ]) : oe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (Z) => A.value = Z,
              type: A.field && e.fields[A.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: c
            }, null, 40, Vo)), [
              [Et, A.value]
            ])
          ], 64)),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(A) ? "group" : "rule"}`,
            onClick: (Z) => w(G)
          }, " × ", 8, To)
        ]))), 128)),
        l("div", Do, [
          W(ye, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: E(() => [...g[4] || (g[4] = [
              Y("Add rule", -1)
            ])]),
            _: 1
          }),
          k.value ? (t(), D(ye, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: y
          }, {
            default: E(() => [...g[5] || (g[5] = [
              Y(" Add group ", -1)
            ])]),
            _: 1
          })) : C("", !0),
          e.root ? (t(), n(S, { key: 1 }, [
            g[8] || (g[8] = l("span", { class: "flex-1" }, null, -1)),
            W(ye, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: $
            }, {
              default: E(() => [...g[6] || (g[6] = [
                Y(" Clear ", -1)
              ])]),
              _: 1
            }),
            W(ye, {
              type: "button",
              size: "sm",
              onClick: O
            }, {
              default: E(() => [...g[7] || (g[7] = [
                Y(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : C("", !0)
        ])
      ], 2);
    };
  }
}), Eo = {
  key: 0,
  class: "font-mono text-xs"
}, Io = {
  key: 1,
  class: "text-muted-foreground"
}, No = {
  key: 2,
  class: "text-muted-foreground text-sm"
}, gg = /* @__PURE__ */ M({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, a = x(
      () => o.value && typeof o.value == "object" && !Array.isArray(o.value) ? Object.keys(o.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", Eo, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", Io, "—")) : (t(), n("span", No, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Ro = ["aria-checked", "aria-label", "title", "disabled"], Ho = ["value", "disabled"], Uo = ["value"], bg = /* @__PURE__ */ M({
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
    const a = e, r = o, s = x(() => a.value === !0 || a.value === 1 || a.value === "1"), i = x(() => a.busy || a.disabled), d = x(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function v(b) {
      const c = b.target.value;
      c !== String(a.value ?? "") && r("change", c);
    }
    return (b, c) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: P(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: fe(u, ["stop"])
    }, [
      l("span", {
        class: P(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Ro)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: c[0] || (c[0] = fe(() => {
      }, ["stop"])),
      onChange: v
    }, [
      (t(!0), n(S, null, V(e.options, (h, y) => (t(), n("option", {
        key: y,
        value: y
      }, f(h), 9, Uo))), 128))
    ], 40, Ho));
  }
}), Ko = { class: "flex items-center justify-end" }, Zo = ["aria-label"], qo = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Go = ["d"], Wo = ["href"], Yo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jo = ["d"], Xo = ["disabled", "onClick"], Qo = ["d"], el = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, tl = ["disabled", "onClick"], al = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, nl = ["d"], xg = /* @__PURE__ */ M({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: o, emit: a }) {
    const r = e, s = a, i = U(null), d = U(null), u = x(() => r.groups.flatMap(($) => $.actions)), v = x(() => u.value.filter(($) => !$.destructive)), b = x(() => u.value.filter(($) => $.destructive)), c = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h($) {
      return c[$.color ?? "gray"] ?? c.gray;
    }
    const y = x(() => u.value.length === 0);
    function w($) {
      s("run", $);
    }
    function _($) {
      y.value || ($.preventDefault(), i.value?.openAt($.clientX, $.clientY));
    }
    function k($) {
      if ($.key !== "ArrowDown" && $.key !== "ArrowUp")
        return;
      const O = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (O.length === 0)
        return;
      $.preventDefault();
      const p = O.indexOf(document.activeElement), g = $.key === "ArrowDown" ? 1 : -1, z = (p + g + O.length) % O.length;
      O[z]?.focus();
    }
    return o({ openContextMenu: _ }), ($, O) => (t(), n("div", Ko, [
      y.value ? C("", !0) : (t(), D(Ee, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: E(() => [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), n("svg", qo, [
              l("path", {
                d: m(xe)("more-vertical")
              }, null, 8, Go)
            ]))
          ], 8, Zo)
        ]),
        panel: E(() => [
          l("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: k
          }, [
            (t(!0), n(S, null, V(v.value, (p) => (t(), n(S, {
              key: p.key
            }, [
              p.link ? (t(), n("a", {
                key: 0,
                href: p.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(p)])
              }, [
                (t(), n("svg", Yo, [
                  l("path", {
                    d: m(xe)(p.icon)
                  }, null, 8, Jo)
                ])),
                Y(" " + f(p.label), 1)
              ], 10, Wo)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(p)]),
                disabled: e.busy === p.key,
                onClick: (g) => w(p)
              }, [
                (t(), n("svg", {
                  class: P(["size-4 shrink-0", e.busy === p.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  l("path", {
                    d: m(xe)(p.icon)
                  }, null, 8, Qo)
                ], 2)),
                Y(" " + f(p.label), 1)
              ], 10, Xo))
            ], 64))), 128)),
            b.value.length ? (t(), n("div", el, [
              (t(!0), n(S, null, V(b.value, (p) => (t(), n("button", {
                key: p.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === p.key,
                onClick: (g) => w(p)
              }, [
                (t(), n("svg", al, [
                  l("path", {
                    d: m(xe)(p.icon ?? "trash")
                  }, null, 8, nl)
                ])),
                Y(" " + f(p.label), 1)
              ], 8, tl))), 128))
            ])) : C("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), Ge = {
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
}, We = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, Ie = 12, Ne = 20, rt = "panelkit.appearance", ge = {
  // LIGHT, NOT THE OPERATING SYSTEM'S. See the Theme type - this is the whole
  // of the "mandatory light default": there is no branch that can produce
  // anything else before somebody chooses it.
  theme: "light",
  density: "comfortable",
  fontSize: 16,
  sidebarSide: "left",
  cardStyle: "transparent",
  primary: "slate",
  // Untouched. `reset()` restores these defaults, so Reset is also the way
  // back to the organisation's colour.
  primaryChosen: !1,
  surface: "neutral"
}, $e = U({ ...ge });
let ft = !1;
const ol = "panelkit.appearance.vars";
function Ye(e) {
  return e.theme === "dark";
}
const pt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function ll(e) {
  const o = Ge[e.primary] ?? Ge.slate, a = We[e.surface] ?? We.neutral, r = a.chroma, s = a.hue, d = Ye(e) ? {
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
    ...d,
    "--pk-font-size": `${e.fontSize}px`,
    /*
     * A LOOKUP, not a ternary chain. The two-level version was
     * `compact ? a : b`, which silently treats every unrecognised value as
     * comfortable - including a third level added later, which is exactly
     * what happened. A map with an explicit fallback fails visibly instead:
     * the row simply does not change, rather than changing to something
     * plausible.
     */
    "--pk-row-padding": pt[e.density] ?? pt.comfortable
  };
}
function it() {
  if (typeof window > "u")
    return { ...ge };
  try {
    const e = localStorage.getItem(rt);
    if (!e)
      return { ...ge };
    const o = { ...ge, ...JSON.parse(e) };
    o.theme === "system" && (o.theme = ge.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof o.fontSize == "string" && (o.fontSize = a[o.fontSize] ?? ge.fontSize), (typeof o.fontSize != "number" || Number.isNaN(o.fontSize) || o.fontSize < Ie || o.fontSize > Ne) && (o.fontSize = ge.fontSize), o;
  } catch {
    return { ...ge };
  }
}
function yg(e) {
  const o = it(), a = e ? { ...o, ...e } : o;
  if ($e.value = a, Je(a), e)
    try {
      localStorage.setItem(rt, JSON.stringify(a));
    } catch {
    }
}
let zt = null;
function kg(e) {
  zt = e;
}
let Pt = {};
function sl(e) {
  if (Pt = e, !(typeof document > "u") && !it().primaryChosen)
    for (const [o, a] of Object.entries(e))
      document.documentElement.style.setProperty(o, a);
}
function Je(e) {
  if (typeof document > "u")
    return;
  const o = document.documentElement, a = { ...ll(e), ...e.primaryChosen ? {} : Pt };
  o.classList.toggle("dark", Ye(e));
  for (const [r, s] of Object.entries(a))
    o.style.setProperty(r, s);
  o.dataset.sidebar = e.sidebarSide;
  try {
    localStorage.setItem(
      ol,
      JSON.stringify({ dark: Ye(e), theme: e.theme, vars: a })
    );
  } catch {
  }
}
function At() {
  function e(r) {
    Je(r);
  }
  function o(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    $e.value = { ...$e.value, ...r, ...s };
    try {
      localStorage.setItem(rt, JSON.stringify($e.value));
    } catch {
    }
    e($e.value), zt?.({ ...r, ...s });
  }
  function a() {
    o({ ...ge });
  }
  return re(() => {
    ft || (ft = !0, $e.value = it(), Je($e.value));
  }), {
    appearance: x(() => $e.value),
    set: o,
    reset: a,
    PRIMARY_COLORS: Ge,
    SURFACE_TINTS: We,
    FONT_SIZE_MIN: Ie,
    FONT_SIZE_MAX: Ne
  };
}
const rl = { class: "flex items-center justify-between border-b px-4 py-3" }, il = { class: "flex items-center gap-2" }, dl = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, ul = { class: "flex flex-col gap-2" }, cl = { class: "grid grid-cols-8 gap-2" }, fl = ["title", "aria-label", "aria-pressed", "onClick"], pl = { class: "flex flex-col gap-2" }, ml = { class: "grid grid-cols-8 gap-2" }, vl = ["title", "aria-label", "aria-pressed", "onClick"], hl = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, gl = { class: "text-sm font-semibold" }, bl = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, xl = ["onClick"], yl = { class: "flex flex-col gap-2" }, kl = { class: "flex items-center justify-between" }, $l = { class: "text-muted-foreground text-xs tabular-nums" }, wl = { class: "flex items-center gap-2" }, _l = ["disabled"], Cl = ["min", "max", "value"], Ml = ["disabled"], $g = /* @__PURE__ */ M({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: o, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i } = At(), d = U(!1), u = x(() => o.value.sidebarSide === "right"), v = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], b = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], c = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], h = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ];
    function y(w, _) {
      return `oklch(0.72 ${_ * 3} ${w})`;
    }
    return (w, _) => (t(), n(S, null, [
      l("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: _[0] || (_[0] = (k) => d.value = !0)
      }, [..._[7] || (_[7] = [
        Qe('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), D(ze, { to: "body" }, [
        W(we, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: E(() => [
            d.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: _[1] || (_[1] = (k) => d.value = !1)
            })) : C("", !0)
          ]),
          _: 1
        }),
        W(we, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": u.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": u.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: E(() => [
            d.value ? (t(), n("aside", {
              key: 0,
              class: P(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", u.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              l("header", rl, [
                _[9] || (_[9] = l("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                l("div", il, [
                  l("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: _[2] || (_[2] = //@ts-ignore
                    (...k) => m(r) && m(r)(...k))
                  }, " Reset "),
                  l("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: _[3] || (_[3] = (k) => d.value = !1)
                  }, [..._[8] || (_[8] = [
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
              l("div", dl, [
                l("section", ul, [
                  _[11] || (_[11] = l("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  l("div", cl, [
                    (t(!0), n(S, null, V(m(s), (k, $) => (t(), n("button", {
                      key: $,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: X({ background: k.value }),
                      title: k.label,
                      "aria-label": k.label,
                      "aria-pressed": m(o).primary === $,
                      onClick: (O) => m(a)({ primary: $ })
                    }, [
                      m(o).primary === $ ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: X({ color: k.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [..._[10] || (_[10] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : C("", !0)
                    ], 12, fl))), 128))
                  ])
                ]),
                l("section", pl, [
                  _[13] || (_[13] = l("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  l("div", ml, [
                    (t(!0), n(S, null, V(m(i), (k, $) => (t(), n("button", {
                      key: $,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: X({ background: y(k.hue, k.chroma) }),
                      title: k.label,
                      "aria-label": k.label,
                      "aria-pressed": m(o).surface === $,
                      onClick: (O) => m(a)({ surface: $ })
                    }, [
                      m(o).surface === $ ? (t(), n("svg", hl, [..._[12] || (_[12] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : C("", !0)
                    ], 12, vl))), 128))
                  ])
                ]),
                (t(!0), n(S, null, V([
                  { label: "Color scheme", key: "theme", options: v },
                  { label: "Card style", key: "cardStyle", options: c },
                  { label: "Table density", key: "density", options: b },
                  { label: "Sidebar", key: "sidebarSide", options: h }
                ], (k) => (t(), n("section", {
                  key: k.key,
                  class: "flex flex-col gap-2"
                }, [
                  l("h3", gl, f(k.label), 1),
                  l("div", bl, [
                    (t(!0), n(S, null, V(k.options, ($) => (t(), n("button", {
                      key: String($.value),
                      type: "button",
                      class: P([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        m(o)[k.key] === $.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (O) => m(a)({ [k.key]: $.value })
                    }, f($.label), 11, xl))), 128))
                  ])
                ]))), 128)),
                l("section", yl, [
                  l("div", kl, [
                    _[14] || (_[14] = l("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    l("span", $l, f(m(o).fontSize) + "px", 1)
                  ]),
                  l("div", wl, [
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: m(o).fontSize <= m(Ie),
                      "aria-label": "Decrease font size",
                      onClick: _[4] || (_[4] = (k) => m(a)({ fontSize: m(o).fontSize - 1 }))
                    }, " − ", 8, _l),
                    l("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: m(Ie),
                      max: m(Ne),
                      value: m(o).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: _[5] || (_[5] = (k) => m(a)({
                        fontSize: Number(k.target.value)
                      }))
                    }, null, 40, Cl),
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: m(o).fontSize >= m(Ne),
                      "aria-label": "Increase font size",
                      onClick: _[6] || (_[6] = (k) => m(a)({ fontSize: m(o).fontSize + 1 }))
                    }, " + ", 8, Ml)
                  ])
                ])
              ])
            ], 2)) : C("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), Sl = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Bl = { class: "flex items-stretch" }, zl = ["href", "aria-current"], Pl = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Al = ["d"], Ol = { class: "w-full truncate text-center" }, Ll = {
  key: 0,
  class: "flex-1"
}, jl = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Vl = ["d"], Tl = { class: "w-full truncate text-center" }, Ue = 5, wg = /* @__PURE__ */ M({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = x(
      () => a.items.length <= Ue ? a.items : a.items.slice(0, Ue - 1)
    ), i = x(() => a.items.length > Ue);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, v) => (t(), n("nav", Sl, [
      l("ul", Bl, [
        (t(!0), n(S, null, V(s.value, (b) => (t(), n("li", {
          key: b.key,
          class: "flex-1"
        }, [
          l("a", {
            href: b.href,
            class: P([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(b.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(b.href) ? "page" : void 0
          }, [
            (t(), n("svg", Pl, [
              l("path", {
                d: m(xe)(b.icon)
              }, null, 8, Al)
            ])),
            l("span", Ol, f(b.title), 1)
          ], 10, zl)
        ]))), 128)),
        i.value ? (t(), n("li", Ll, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: v[0] || (v[0] = (b) => r("more"))
          }, [
            (t(), n("svg", jl, [
              l("path", {
                d: m(xe)("more-horizontal")
              }, null, 8, Vl)
            ])),
            l("span", Tl, f(e.moreLabel), 1)
          ])
        ])) : C("", !0)
      ])
    ]));
  }
}), Dl = ["value"], Fl = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", _g = /* @__PURE__ */ M({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, r = o;
    return (s, i) => (t(), n("input", {
      "data-slot": "input",
      value: a.modelValue ?? a.defaultValue,
      class: P([Fl, a.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, Dl));
  }
}), El = ["for"], Cg = /* @__PURE__ */ M({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (o, a) => (t(), n("label", {
      "data-slot": "label",
      for: o.$props.for,
      class: P([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.$props.class
      ])
    }, [
      I(o.$slots, "default")
    ], 10, El));
  }
}), Mg = /* @__PURE__ */ M({
  __name: "PkSpinner",
  props: {
    class: {}
  },
  setup(e) {
    return (o, a) => (t(), n("svg", {
      role: "status",
      "aria-label": "Loading",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      class: P(["size-4 animate-spin", o.$props.class])
    }, [...a[0] || (a[0] = [
      l("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      l("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), Il = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Nl = ["id", "name", "value", "disabled", "maxlength"], Rl = ["data-active"], Hl = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Sg = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(!1), i = U(null);
    re(() => {
      a.autofocus && i.value?.focus();
    });
    const d = x(
      () => Array.from({ length: a.length }, (b, c) => a.modelValue[c] ?? "")
    ), u = x(() => Math.min(a.modelValue.length, a.length - 1));
    function v(b) {
      const c = b.target.value;
      r("update:modelValue", c.replace(/\D/g, "").slice(0, a.length));
    }
    return (b, c) => (t(), n("div", Il, [
      l("input", {
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
        onInput: v,
        onFocus: c[0] || (c[0] = (h) => s.value = !0),
        onBlur: c[1] || (c[1] = (h) => s.value = !1)
      }, null, 40, Nl),
      (t(!0), n(S, null, V(d.value, (h, y) => (t(), n("div", {
        key: y,
        "data-slot": "input-otp-slot",
        "data-active": s.value && y === u.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        Y(f(h) + " ", 1),
        s.value && y === u.value && h === "" ? (t(), n("div", Hl, [...c[2] || (c[2] = [
          l("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : C("", !0)
      ], 8, Rl))), 128))
    ]));
  }
}), Ul = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Bg = /* @__PURE__ */ M({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (o, a) => (t(), n("header", {
      class: P(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      l("h2", {
        class: P(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), n("p", Ul, f(e.description), 1)) : C("", !0)
    ], 2));
  }
});
function q(...e) {
  return ta(ea(e));
}
function zg(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Kl = /* @__PURE__ */ M({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: P(m(q)(m(Gl)({ variant: e.variant }), o.class)),
      role: "alert"
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Zl = /* @__PURE__ */ M({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: P(m(q)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), ql = /* @__PURE__ */ M({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: P(m(q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Gl = at(
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
), Wl = { class: "list-inside list-disc text-sm" }, Pg = /* @__PURE__ */ M({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const o = e, a = x(() => Array.from(new Set(o.errors)));
    return (r, s) => (t(), D(m(Kl), { variant: "destructive" }, {
      default: E(() => [
        W(m(Kt), { class: "size-4" }),
        W(m(ql), null, {
          default: E(() => [
            Y(f(e.title), 1)
          ]),
          _: 1
        }),
        W(m(Zl), null, {
          default: E(() => [
            l("ul", Wl, [
              (t(!0), n(S, null, V(a.value, (i, d) => (t(), n("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ot = /* @__PURE__ */ M({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, s = $t(a, "modelValue", o, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, d) => oe((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => It(s) ? s.value = u : null),
      "data-slot": "input",
      class: P(
        m(q)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [_e, m(s)]
    ]);
  }
}), Yl = { class: "relative" }, Jl = ["aria-label"], Ag = /* @__PURE__ */ M({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: o }) {
    const a = e, r = U(!1), s = Nt("inputRef");
    return o({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", Yl, [
      W(m(Ot), Q({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: m(q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      l("button", {
        type: "button",
        class: P(
          m(q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), D(m(Zt), {
          key: 0,
          class: "size-4"
        })) : (t(), D(m(qt), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Jl)
    ]));
  }
}), Xl = /* @__PURE__ */ M({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = se(e, o);
    return (i, d) => (t(), D(m(wt), Q({ "data-slot": "sheet" }, m(s)), {
      default: E((u) => [
        I(i.$slots, "default", pe(ke(u)))
      ]),
      _: 3
    }, 16));
  }
}), Og = /* @__PURE__ */ M({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Pe), Q({ "data-slot": "sheet-close" }, o), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ql = /* @__PURE__ */ M({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(nt), Q({
      "data-slot": "sheet-overlay",
      class: m(q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }, m(a)), {
      default: E(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), es = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class", "side"), i = se(s, r);
    return (d, u) => (t(), D(m(ot), null, {
      default: E(() => [
        W(Ql),
        W(m(lt), Q({
          "data-slot": "sheet-content",
          class: m(q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...m(i) }), {
          default: E(() => [
            I(d.$slots, "default"),
            W(m(Pe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: E(() => [
                W(m(tt), { class: "size-4" }),
                u[0] || (u[0] = l("span", { class: "sr-only" }, "Close", -1))
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
}), ts = /* @__PURE__ */ M({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(_t), Q({
      "data-slot": "sheet-description",
      class: m(q)("text-muted-foreground text-sm", o.class)
    }, m(a)), {
      default: E(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lg = /* @__PURE__ */ M({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: P(m(q)("mt-auto flex flex-col gap-2 p-4", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), as = /* @__PURE__ */ M({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: P(m(q)("flex flex-col gap-1.5 p-4", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), ns = /* @__PURE__ */ M({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(Ct), Q({
      "data-slot": "sheet-title",
      class: m(q)("text-foreground font-semibold", o.class)
    }, m(a)), {
      default: E(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jg = /* @__PURE__ */ M({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Mt), Q({ "data-slot": "sheet-trigger" }, o), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mt = "sidebar_state", os = 3600 * 24 * 7, ls = "16rem", ss = "18rem", rs = "3rem", is = "b", [Re, ds] = la("Sidebar"), us = { class: "flex h-full w-full flex-col" }, cs = ["data-state", "data-collapsible", "data-variant", "data-side"], fs = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Vg = /* @__PURE__ */ M({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = Re();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", Q({
      key: 0,
      "data-slot": "sidebar",
      class: m(q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o.class
      )
    }, d.$attrs), [
      I(d.$slots, "default")
    ], 16)) : m(a) ? (t(), D(m(Xl), Q({
      key: 1,
      open: m(s)
    }, d.$attrs, { "onUpdate:open": m(i) }), {
      default: E(() => [
        W(m(es), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: X({
            "--sidebar-width": m(ss)
          })
        }, {
          default: E(() => [
            W(as, { class: "sr-only" }, {
              default: E(() => [
                W(ns, null, {
                  default: E(() => [...u[0] || (u[0] = [
                    Y("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                W(ts, null, {
                  default: E(() => [...u[1] || (u[1] = [
                    Y("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l("div", us, [
              I(d.$slots, "default")
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
      "data-state": m(r),
      "data-collapsible": m(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      l("div", {
        class: P(
          m(q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      l("div", Q({
        class: m(q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          o.class
        )
      }, d.$attrs), [
        l("div", fs, [
          I(d.$slots, "default")
        ])
      ], 16)
    ], 8, cs));
  }
}), Tg = /* @__PURE__ */ M({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: P(
        m(q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Dg = /* @__PURE__ */ M({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: P(m(q)("flex flex-col gap-2 p-2", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Fg = /* @__PURE__ */ M({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: P(m(q)("relative flex w-full min-w-0 flex-col p-2", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Eg = /* @__PURE__ */ M({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Ae), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        m(q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ig = /* @__PURE__ */ M({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: P(m(q)("w-full text-sm", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Ng = /* @__PURE__ */ M({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Ae), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        m(q)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          o.class
        )
      )
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Rg = /* @__PURE__ */ M({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: P(m(q)("flex flex-col gap-2 p-2", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Hg = /* @__PURE__ */ M({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Ot), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: P(m(q)("bg-background h-8 w-full shadow-none", o.class))
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ug = /* @__PURE__ */ M({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: P(
        m(q)(
          "bg-background relative flex w-full flex-1 flex-col",
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
      I(a.$slots, "default")
    ], 2));
  }
}), Kg = /* @__PURE__ */ M({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: P(m(q)("flex w-full min-w-0 flex-col gap-1", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Zg = /* @__PURE__ */ M({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Ae), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: P(
        m(q)(
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
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), qg = /* @__PURE__ */ M({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: P(
        m(q)(
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
      I(a.$slots, "default")
    ], 2));
  }
}), ps = /* @__PURE__ */ M({
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
    const s = se(e, o);
    return (i, d) => (t(), D(m(sa), Q({ "data-slot": "tooltip" }, m(s)), {
      default: E((u) => [
        I(i.$slots, "default", pe(ke(u)))
      ]),
      _: 3
    }, 16));
  }
}), ms = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(ra), null, {
      default: E(() => [
        W(m(ia), Q({ "data-slot": "tooltip-content" }, { ...m(i), ...d.$attrs }, {
          class: m(q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: E(() => [
            I(d.$slots, "default"),
            W(m(da), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Gg = /* @__PURE__ */ M({
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
    return (a, r) => (t(), D(m(St), pe(ke(o)), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vs = /* @__PURE__ */ M({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(ua), Q({ "data-slot": "tooltip-trigger" }, o), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vt = /* @__PURE__ */ M({
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
    return (a, r) => (t(), D(m(Ae), Q({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: m(q)(m(gs)({ variant: e.variant, size: e.size }), o.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Wg = /* @__PURE__ */ M({
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
    const o = e, { isMobile: a, state: r } = Re(), s = ne(o, "tooltip");
    return (i, d) => e.tooltip ? (t(), D(m(ps), { key: 1 }, {
      default: E(() => [
        W(m(vs), { "as-child": "" }, {
          default: E(() => [
            W(vt, pe(ke({ ...m(s), ...i.$attrs })), {
              default: E(() => [
                I(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        W(m(ms), {
          side: "right",
          align: "center",
          hidden: m(r) !== "collapsed" || m(a)
        }, {
          default: E(() => [
            typeof e.tooltip == "string" ? (t(), n(S, { key: 0 }, [
              Y(f(e.tooltip), 1)
            ], 64)) : (t(), D(Me(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D(vt, pe(Q({ key: 0 }, { ...m(s), ...i.$attrs })), {
      default: E(() => [
        I(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yg = /* @__PURE__ */ M({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: P(m(q)("group/menu-item relative", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), ht = "animate-pulse rounded-md bg-primary/10", Jg = /* @__PURE__ */ M({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = x(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), n("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: P(m(q)("flex h-8 items-center gap-2 rounded-md px-2", o.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: P(m(q)(ht, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : C("", !0),
      l("div", {
        class: P(m(q)(ht, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: X({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), Xg = /* @__PURE__ */ M({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: P(
        m(q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Qg = /* @__PURE__ */ M({
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
    return (a, r) => (t(), D(m(Ae), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: P(
        m(q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          o.class
        )
      )
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), eb = /* @__PURE__ */ M({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: P(m(q)("group/menu-sub-item relative", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), tb = /* @__PURE__ */ M({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !oa?.cookie.includes(`${mt}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = aa("(max-width: 768px)"), i = U(!1), d = $t(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${mt}=${d.value}; path=/; max-age=${os}`;
    }
    function v(h) {
      i.value = h;
    }
    function b() {
      return s.value ? v(!i.value) : u(!d.value);
    }
    na("keydown", (h) => {
      h.key === is && (h.metaKey || h.ctrlKey) && (h.preventDefault(), b());
    });
    const c = x(() => d.value ? "expanded" : "collapsed");
    return ds({
      state: c,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: v,
      toggleSidebar: b
    }), (h, y) => (t(), D(m(St), { "delay-duration": 0 }, {
      default: E(() => [
        l("div", Q({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": m(ls),
            "--sidebar-width-icon": m(rs)
          },
          class: m(q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, h.$attrs), [
          I(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), ab = /* @__PURE__ */ M({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { toggleSidebar: a } = Re();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: P(
        m(q)(
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
      (...i) => m(a) && m(a)(...i))
    }, [
      I(r.$slots, "default")
    ], 2));
  }
}), hs = /* @__PURE__ */ M({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(ca), Q({ "data-slot": "separator" }, m(a), {
      class: m(q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        o.class
      )
    }), null, 16, ["class"]));
  }
}), nb = /* @__PURE__ */ M({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(hs), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: P(m(q)("bg-sidebar-border mx-2 w-auto", o.class))
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ob = /* @__PURE__ */ M({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, { isMobile: a, state: r, toggleSidebar: s } = Re();
    return (i, d) => (t(), D(ye, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: P(m(q)("h-7 w-7", o.class)),
      onClick: m(s)
    }, {
      default: E(() => [
        m(a) || m(r) === "collapsed" ? (t(), D(m(Gt), { key: 0 })) : (t(), D(m(Wt), { key: 1 })),
        d[0] || (d[0] = l("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), gs = at(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
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
), lb = /* @__PURE__ */ M({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = se(e, o);
    return (i, d) => (t(), D(m(fa), Q({ "data-slot": "dropdown-menu" }, m(s)), {
      default: E((u) => [
        I(i.$slots, "default", pe(ke(u)))
      ]),
      _: 3
    }, 16));
  }
}), bs = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, sb = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(pa), Q({ "data-slot": "dropdown-menu-checkbox-item" }, m(i), {
      class: m(q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: E(() => [
        l("span", bs, [
          W(m(Bt), null, {
            default: E(() => [
              I(d.$slots, "indicator-icon", {}, () => [
                W(m(yt), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        I(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rb = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(ma), null, {
      default: E(() => [
        W(m(va), Q({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...m(i) }, {
          class: m(q)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: E(() => [
            I(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ib = /* @__PURE__ */ M({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(ha), Q({ "data-slot": "dropdown-menu-group" }, o), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), db = /* @__PURE__ */ M({
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
    const o = e, a = ne(o, "inset", "variant", "class"), r = me(a);
    return (s, i) => (t(), D(m(ga), Q({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, m(r), {
      class: m(q)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        o.class
      )
    }), {
      default: E(() => [
        I(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), ub = /* @__PURE__ */ M({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const o = e, a = ne(o, "class", "inset"), r = me(a);
    return (s, i) => (t(), D(m(ba), Q({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, m(r), {
      class: m(q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", o.class)
    }), {
      default: E(() => [
        I(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), cb = /* @__PURE__ */ M({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const s = se(e, o);
    return (i, d) => (t(), D(m(xa), Q({ "data-slot": "dropdown-menu-radio-group" }, m(s)), {
      default: E(() => [
        I(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xs = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, fb = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(ya), Q({ "data-slot": "dropdown-menu-radio-item" }, m(i), {
      class: m(q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: E(() => [
        l("span", xs, [
          W(m(Bt), null, {
            default: E(() => [
              I(d.$slots, "indicator-icon", {}, () => [
                W(m(Yt), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        I(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pb = /* @__PURE__ */ M({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(ka), Q({ "data-slot": "dropdown-menu-separator" }, m(a), {
      class: m(q)("bg-border -mx-1 my-1 h-px", o.class)
    }), null, 16, ["class"]));
  }
}), mb = /* @__PURE__ */ M({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: P(m(q)("text-muted-foreground ml-auto text-xs tracking-widest", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), vb = /* @__PURE__ */ M({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = se(e, o);
    return (i, d) => (t(), D(m($a), Q({ "data-slot": "dropdown-menu-sub" }, m(s)), {
      default: E((u) => [
        I(i.$slots, "default", pe(ke(u)))
      ]),
      _: 3
    }, 16));
  }
}), hb = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(wa), Q({ "data-slot": "dropdown-menu-sub-content" }, m(i), {
      class: m(q)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: E(() => [
        I(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gb = /* @__PURE__ */ M({
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
    const o = e, a = ne(o, "class", "inset"), r = me(a);
    return (s, i) => (t(), D(m(_a), Q({ "data-slot": "dropdown-menu-sub-trigger" }, m(r), {
      "data-inset": e.inset ? "" : void 0,
      class: m(q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        o.class
      )
    }), {
      default: E(() => [
        I(s.$slots, "default"),
        W(m(kt), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), bb = /* @__PURE__ */ M({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = me(e);
    return (r, s) => (t(), D(m(Ca), Q({ "data-slot": "dropdown-menu-trigger" }, m(a)), {
      default: E(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xb = /* @__PURE__ */ M({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Ma), {
      "data-slot": "avatar",
      class: P(m(q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", o.class))
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), yb = /* @__PURE__ */ M({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(Sa), Q({ "data-slot": "avatar-fallback" }, m(a), {
      class: m(q)("bg-muted flex size-full items-center justify-center rounded-full", o.class)
    }), {
      default: E(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kb = /* @__PURE__ */ M({
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
    return (a, r) => (t(), D(m(Ba), Q({ "data-slot": "avatar-image" }, o, { class: "aspect-square size-full" }), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $b = /* @__PURE__ */ M({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: P(o.class)
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), wb = /* @__PURE__ */ M({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: P(m(q)("flex size-9 items-center justify-center", o.class))
    }, [
      I(a.$slots, "default", {}, () => [
        W(m(Jt), { class: "size-4" })
      ]),
      r[0] || (r[0] = l("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), _b = /* @__PURE__ */ M({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: P(m(q)("inline-flex items-center gap-1.5", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Cb = /* @__PURE__ */ M({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Ae), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: P(m(q)("hover:text-foreground transition-colors", o.class))
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Mb = /* @__PURE__ */ M({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: P(
        m(q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Sb = /* @__PURE__ */ M({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: P(m(q)("text-foreground font-normal", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Bb = /* @__PURE__ */ M({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: P(m(q)("[&>svg]:size-3.5", o.class))
    }, [
      I(a.$slots, "default", {}, () => [
        W(m(kt))
      ])
    ], 2));
  }
}), ys = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, ks = /* @__PURE__ */ M({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class"), r = me(a);
    return (s, i) => (t(), n("div", ys, [
      W(m(za), Q({ "data-slot": "navigation-menu-viewport" }, m(r), {
        class: m(q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), zb = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class", "viewport"), i = se(s, r);
    return (d, u) => (t(), D(m(Pa), Q({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, m(i), {
      class: m(q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: E((v) => [
        I(d.$slots, "default", pe(ke(v))),
        e.viewport ? (t(), D(ks, { key: 0 })) : C("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), Pb = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(Aa), Q({ "data-slot": "navigation-menu-content" }, m(i), {
      class: m(q)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: E(() => [
        I(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ab = /* @__PURE__ */ M({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class"), r = me(a);
    return (s, i) => (t(), D(m(Oa), Q({ "data-slot": "navigation-menu-indicator" }, m(r), {
      class: m(q)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        o.class
      )
    }), {
      default: E(() => [...i[0] || (i[0] = [
        l("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), Ob = /* @__PURE__ */ M({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(La), Q({ "data-slot": "navigation-menu-item" }, m(a), {
      class: m(q)("relative", o.class)
    }), {
      default: E(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lb = /* @__PURE__ */ M({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(ja), Q({ "data-slot": "navigation-menu-link" }, m(i), {
      class: m(q)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: E(() => [
        I(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jb = /* @__PURE__ */ M({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class"), r = me(a);
    return (s, i) => (t(), D(m(Va), Q({ "data-slot": "navigation-menu-list" }, m(r), {
      class: m(q)("group flex flex-1 list-none items-center justify-center gap-1", o.class)
    }), {
      default: E(() => [
        I(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vb = /* @__PURE__ */ M({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class"), r = me(a);
    return (s, i) => (t(), D(m(Ta), Q({ "data-slot": "navigation-menu-trigger" }, m(r), {
      class: m(q)(m($s)(), "group", o.class)
    }), {
      default: E(() => [
        I(s.$slots, "default"),
        W(m(Xt), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $s = at(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), Tb = /* @__PURE__ */ M({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = se(e, o);
    return (i, d) => (t(), D(m(wt), Q({ "data-slot": "dialog" }, m(s)), {
      default: E((u) => [
        I(i.$slots, "default", pe(ke(u)))
      ]),
      _: 3
    }, 16));
  }
}), Db = /* @__PURE__ */ M({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Pe), Q({ "data-slot": "dialog-close" }, o), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ws = /* @__PURE__ */ M({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(nt), Q({ "data-slot": "dialog-overlay" }, m(a), {
      class: m(q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        o.class
      )
    }), {
      default: E(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fb = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(ot), null, {
      default: E(() => [
        W(ws),
        W(m(lt), Q({ "data-slot": "dialog-content" }, { ...d.$attrs, ...m(i) }, {
          class: m(q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: E(() => [
            I(d.$slots, "default"),
            e.showCloseButton ? (t(), D(m(Pe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: E(() => [
                W(m(tt)),
                u[0] || (u[0] = l("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : C("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Eb = /* @__PURE__ */ M({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class"), r = me(a);
    return (s, i) => (t(), D(m(_t), Q({ "data-slot": "dialog-description" }, m(r), {
      class: m(q)("text-muted-foreground text-sm", o.class)
    }), {
      default: E(() => [
        I(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ib = /* @__PURE__ */ M({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: P(m(q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", o.class))
    }, [
      I(a.$slots, "default"),
      e.showCloseButton ? (t(), D(m(Pe), {
        key: 0,
        "as-child": ""
      }, {
        default: E(() => [
          W(ye, { variant: "outline" }, {
            default: E(() => [...r[0] || (r[0] = [
              Y(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : C("", !0)
    ], 2));
  }
}), Nb = /* @__PURE__ */ M({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: P(m(q)("flex flex-col gap-2 text-center sm:text-left", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Rb = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(ot), null, {
      default: E(() => [
        W(m(nt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: E(() => [
            W(m(lt), Q({
              class: m(q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...m(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (v) => {
                const b = v.detail.originalEvent, c = b.target;
                (b.offsetX > c.clientWidth || b.offsetY > c.clientHeight) && v.preventDefault();
              })
            }), {
              default: E(() => [
                I(d.$slots, "default"),
                W(m(Pe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: E(() => [
                    W(m(tt), { class: "w-4 h-4" }),
                    u[1] || (u[1] = l("span", { class: "sr-only" }, "Close", -1))
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
}), Hb = /* @__PURE__ */ M({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class"), r = me(a);
    return (s, i) => (t(), D(m(Ct), Q({ "data-slot": "dialog-title" }, m(r), {
      class: m(q)("text-lg leading-none font-semibold", o.class)
    }), {
      default: E(() => [
        I(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ub = /* @__PURE__ */ M({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Mt), Q({ "data-slot": "dialog-trigger" }, o), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kb = /* @__PURE__ */ M({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = ne(o, "class");
    return (r, s) => (t(), D(m(Da), Q({ "data-slot": "label" }, m(a), {
      class: m(q)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.class
      )
    }), {
      default: E(() => [
        I(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zb = /* @__PURE__ */ M({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Qt), {
      role: "status",
      "aria-label": "Loading",
      class: P(m(q)("size-4 animate-spin", o.class))
    }, null, 8, ["class"]));
  }
}), qb = /* @__PURE__ */ M({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: P(
        m(q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Gb = /* @__PURE__ */ M({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: P(m(q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Wb = /* @__PURE__ */ M({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: P(m(q)("px-6", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Yb = /* @__PURE__ */ M({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: P(m(q)("text-muted-foreground text-sm", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Jb = /* @__PURE__ */ M({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: P(m(q)("flex items-center px-6 [.border-t]:pt-6", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Xb = /* @__PURE__ */ M({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: P(
        m(q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Qb = /* @__PURE__ */ M({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: P(m(q)("leading-none font-semibold", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), _s = /* @__PURE__ */ M({
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
    const a = e, r = o, s = ne(a, "class"), i = se(s, r);
    return (d, u) => (t(), D(m(Fa), Q({ "data-slot": "checkbox" }, m(i), {
      class: m(q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: E((v) => [
        W(m(Ea), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: E(() => [
            I(d.$slots, "default", pe(ke(v)), () => [
              W(m(yt), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cs = /* @__PURE__ */ M({
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
    const a = e, r = o, s = se(ne(a, "class"), r);
    return (i, d) => (t(), D(m(Ia), Q({ "data-slot": "switch" }, m(s), {
      class: m(q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: E(() => [
        W(m(Na), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ms = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Ss = { class: "flex items-start gap-3" }, Bs = { class: "min-w-0 flex-1" }, zs = { class: "text-foreground text-sm font-medium" }, Ps = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, e1 = /* @__PURE__ */ M({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: o, emit: a }) {
    const r = e, s = a, i = U(!1), d = U(null), u = U(0);
    Rt((b) => (console.error(`[PkBoundary] ${r.label} failed to render`, b), i.value = !0, d.value = b instanceof Error ? b.message : null, s("error", b), !1));
    function v() {
      i.value = !1, d.value = null, u.value++;
    }
    return o({ retry: v }), (b, c) => (t(), n("div", {
      class: P(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Ms, [
        l("div", Ss, [
          c[1] || (c[1] = l("svg", {
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
          l("div", Bs, [
            l("p", zs, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", Ps, f(d.value), 1)) : C("", !0),
            l("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: v
            }, [...c[0] || (c[0] = [
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
              Y(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? C("", !0) : I(b.$slots, "default", { key: u.value })
    ], 2));
  }
}), As = { class: "bg-card rounded-lg border" }, Os = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Ls = { class: "min-w-0" }, js = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Vs = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Ts = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Ds = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, t1 = /* @__PURE__ */ M({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, a) => (t(), n("section", As, [
      e.title || e.description || o.$slots.header || o.$slots.actions ? (t(), n("header", Os, [
        l("div", Ls, [
          I(o.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", js, f(e.title), 1)) : C("", !0),
            e.description ? (t(), n("p", Vs, f(e.description), 1)) : C("", !0)
          ])
        ]),
        o.$slots.actions ? (t(), n("div", Ts, [
          I(o.$slots, "actions")
        ])) : C("", !0)
      ])) : C("", !0),
      l("div", {
        class: P(e.padded ? "p-4" : "")
      }, [
        I(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (t(), n("footer", Ds, [
        I(o.$slots, "footer")
      ])) : C("", !0)
    ]));
  }
}), Fs = { class: "flex shrink-0 flex-col items-center" }, Es = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, a1 = /* @__PURE__ */ M({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const o = e, a = x(() => o.kind === "laptop"), r = x(
      () => a.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = x(() => a.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), n("div", Fs, [
      l("div", {
        class: P(["relative box-content shadow-2xl", r.value]),
        style: X({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Es)) : C("", !0),
        l("div", {
          class: P(["size-full overflow-hidden bg-white", s.value])
        }, [
          I(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(S, { key: 0 }, [
        l("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: X({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        l("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: X({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : C("", !0)
    ]));
  }
}), Is = { class: "flex items-center gap-2 overflow-x-auto" }, Ns = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rs = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hs = { class: "flex flex-col" }, Us = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Ks = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Zs = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, qs = /* @__PURE__ */ M({
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
    const a = e, r = o;
    function s(v) {
      return a.failedStep !== null && v === a.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : a.failedStep !== null && v > a.failedStep ? "" : v < a.activeStep ? "bg-primary text-primary-foreground border-primary" : v === a.activeStep ? "border-primary text-primary" : "";
    }
    function i(v) {
      if (a.failedStep !== null) {
        if (v === a.failedStep)
          return "text-destructive font-medium";
        if (v > a.failedStep)
          return "text-muted-foreground/60";
      }
      return v === a.activeStep ? "text-foreground font-medium" : v < a.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(v) {
      return a.failedStep !== null ? v < a.failedStep : v < a.activeStep;
    }
    function u(v) {
      return a.failedStep === v;
    }
    return (v, b) => (t(), n("ol", Is, [
      (t(!0), n(S, null, V(e.steps, (c, h) => (t(), n("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(Me(e.interactive ? "button" : "div"), Q({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (y) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: E(() => [
            l("span", {
              class: P(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), n("svg", Ns, [...b[0] || (b[0] = [
                l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), n("svg", Rs, [...b[1] || (b[1] = [
                l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(S, { key: 2 }, [
                Y(f(h + 1), 1)
              ], 64))
            ], 2),
            l("span", Hs, [
              l("span", null, f(c.label), 1),
              c.description ? (t(), n("span", Us, f(c.description), 1)) : C("", !0)
            ]),
            e.hasError(h) ? (t(), n("span", Ks)) : C("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), n("span", Zs)) : C("", !0)
      ]))), 128))
    ]));
  }
}), Te = /* @__PURE__ */ new Map();
function he(e, o) {
  Te.set(e, o);
}
function Gs(e) {
  return Te.get(e);
}
function n1(e) {
  return Te.has(e);
}
function o1() {
  return [...Te.keys()].sort();
}
function l1() {
  Te.clear();
}
const Ws = ["aria-expanded"], Ys = ["aria-label", "onClick"], Js = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Xs = { class: "ml-auto flex shrink-0 items-center gap-1" }, Qs = {
  key: 0,
  class: "border-b p-1"
}, er = ["placeholder"], tr = { class: "max-h-60 overflow-y-auto p-1" }, ar = ["aria-selected", "onMouseenter", "onClick"], nr = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Lt = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null), i = U(null), d = U(null), u = U(!1), v = U(""), b = U(0), c = U({ top: 0, left: 0, width: 0 }), h = x(
      () => a.modelValue.map(
        (j) => a.options.find((L) => L.value === j) ?? {
          value: j,
          label: String(j)
        }
      ).filter(Boolean)
    ), y = x(() => a.searchable ?? a.options.length > 6), w = x(() => {
      const j = new Set(a.modelValue), L = v.value.trim().toLowerCase();
      return a.options.filter((T) => !j.has(T.value)).filter((T) => L ? T.label.toLowerCase().includes(L) : !0);
    }), _ = x(() => a.max !== null && a.modelValue.length >= a.max);
    function k() {
      const j = s.value, L = i.value;
      if (!j || !L)
        return;
      const T = j.getBoundingClientRect(), N = L.getBoundingClientRect(), R = 8;
      let H = T.bottom + 4;
      H + N.height > window.innerHeight - R && T.top - N.height - 4 > R && (H = T.top - N.height - 4), c.value = {
        top: H,
        left: Math.min(Math.max(R, T.left), window.innerWidth - T.width - R),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: T.width
      };
    }
    async function $() {
      a.disabled || u.value || (u.value = !0, v.value = "", b.value = 0, await be(), k(), d.value?.focus());
    }
    function O() {
      u.value = !1, v.value = "";
    }
    function p() {
      u.value ? O() : $();
    }
    function g(j) {
      _.value || (r("update:modelValue", [...a.modelValue, j.value]), v.value = "", b.value = 0, be(() => {
        k(), d.value?.focus();
      }));
    }
    function z(j) {
      r(
        "update:modelValue",
        a.modelValue.filter((L) => L !== j)
      ), be(k);
    }
    function A() {
      r("update:modelValue", []), be(k);
    }
    function G(j) {
      if (!a.disabled) {
        if (j.key === "Escape" && u.value) {
          j.stopPropagation(), O();
          return;
        }
        if (j.key === "Backspace" && v.value === "" && a.modelValue.length > 0) {
          z(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (j.key === "ArrowDown" || j.key === "Enter")) {
          j.preventDefault(), $();
          return;
        }
        if (u.value) {
          if (j.key === "ArrowDown")
            j.preventDefault(), b.value = Math.min(b.value + 1, w.value.length - 1);
          else if (j.key === "ArrowUp")
            j.preventDefault(), b.value = Math.max(b.value - 1, 0);
          else if (j.key === "Enter") {
            j.preventDefault();
            const L = w.value[b.value];
            L && g(L);
          }
        }
      }
    }
    function Z(j) {
      if (!u.value)
        return;
      const L = j.target;
      s.value?.contains(L) || i.value?.contains(L) || O();
    }
    function ae() {
      u.value && k();
    }
    return ie(w, (j) => {
      b.value > j.length - 1 && (b.value = Math.max(0, j.length - 1));
    }), re(() => {
      document.addEventListener("pointerdown", Z), window.addEventListener("scroll", ae, !0), window.addEventListener("resize", ae);
    }), de(() => {
      document.removeEventListener("pointerdown", Z), window.removeEventListener("scroll", ae, !0), window.removeEventListener("resize", ae);
    }), (j, L) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: G
    }, [
      l("div", {
        class: P(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: p
      }, [
        (t(!0), n(S, null, V(h.value, (T) => (t(), n("span", {
          key: T.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          Y(f(T.label) + " ", 1),
          l("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${T.label}`,
            onClick: fe((N) => z(T.value), ["stop"])
          }, [...L[1] || (L[1] = [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              l("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Ys)
        ]))), 128)),
        h.value.length === 0 ? (t(), n("span", Js, f(e.placeholder), 1)) : C("", !0),
        l("span", Xs, [
          h.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: fe(A, ["stop"])
          }, " Clear ")) : C("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: P(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...L[2] || (L[2] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Ws),
      (t(), D(ze, { to: "body" }, [
        W(we, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: E(() => [
            u.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: X({
                top: `${c.value.top}px`,
                left: `${c.value.left}px`,
                width: `${c.value.width}px`
              }),
              role: "listbox"
            }, [
              y.value ? (t(), n("div", Qs, [
                oe(l("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": L[0] || (L[0] = (T) => v.value = T),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: G
                }, null, 40, er), [
                  [_e, v.value]
                ])
              ])) : C("", !0),
              l("div", tr, [
                (t(!0), n(S, null, V(w.value, (T, N) => (t(), n("button", {
                  key: T.value,
                  type: "button",
                  class: P(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", N === b.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": N === b.value,
                  onMouseenter: (R) => b.value = N,
                  onClick: (R) => g(T)
                }, f(T.label), 43, ar))), 128)),
                w.value.length === 0 ? (t(), n("p", nr, [
                  _.value ? (t(), n(S, { key: 0 }, [
                    Y("You have selected the maximum.")
                  ], 64)) : v.value ? (t(), n(S, { key: 1 }, [
                    Y("Nothing matches “" + f(v.value) + "”.", 1)
                  ], 64)) : (t(), n(S, { key: 2 }, [
                    Y("Everything is selected.")
                  ], 64))
                ])) : C("", !0)
              ])
            ], 4)) : C("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
  }
}), or = ["accept", "disabled"], lr = { class: "text-sm font-medium" }, sr = { key: 0 }, rr = { key: 1 }, ir = { class: "text-muted-foreground text-xs" }, dr = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ur = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, cr = ["src"], fr = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, pr = { class: "min-w-0 flex-1" }, mr = { class: "block truncate text-sm font-medium" }, vr = { class: "text-muted-foreground text-xs" }, hr = ["href"], gr = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, br = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null), i = U(!1), d = U(null), u = U(null), v = U(null), b = x(() => a.accept.map((g) => `.${g}`).join(",")), c = x(() => v.value ?? a.modelValue?.url ?? null), h = x(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${y(a.maxKilobytes * 1024)}`);
    function y(g) {
      if (!g)
        return "";
      const z = ["B", "KB", "MB", "GB"];
      let A = g, G = 0;
      for (; A >= 1024 && G < z.length - 1; )
        A /= 1024, G++;
      return `${A.toFixed(A < 10 && G > 0 ? 1 : 0)} ${z[G]}`;
    }
    function w(g) {
      return g.split(".").pop()?.toLowerCase() ?? "";
    }
    function _(g) {
      return a.accept.length && !a.accept.includes(w(g.name)) ? `${w(g.name).toUpperCase() || "That"} files are not accepted here.` : g.size > a.maxKilobytes * 1024 ? `That file is ${y(g.size)}; the limit is ${y(a.maxKilobytes * 1024)}.` : null;
    }
    async function k(g) {
      const z = g?.[0];
      if (!(!z || a.disabled) && (u.value = _(z), !u.value)) {
        $(), a.image && z.type.startsWith("image/") && (v.value = URL.createObjectURL(z)), d.value = 0;
        try {
          const A = await a.upload(z, (G) => {
            d.value = G;
          });
          r("update:modelValue", A);
        } catch (A) {
          u.value = A instanceof Error ? A.message : "The upload failed.", $();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function $() {
      v.value && URL.revokeObjectURL(v.value), v.value = null;
    }
    async function O() {
      const g = a.modelValue;
      $(), u.value = null, r("update:modelValue", null), g && !g.url && a.discard && await a.discard(g.value).catch(() => {
      });
    }
    function p(g) {
      i.value = !1, k(g.dataTransfer?.files ?? null);
    }
    return (g, z) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", ur, [
        e.image && c.value ? (t(), n("img", {
          key: 0,
          src: c.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, cr)) : (t(), n("span", fr, f(w(e.modelValue.name) || "file"), 1)),
        l("span", pr, [
          l("span", mr, f(e.modelValue.name), 1),
          l("span", vr, [
            Y(f(y(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(S, { key: 0 }, [
              z[4] || (z[4] = Y(" · ", -1)),
              l("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, hr)
            ], 64)) : (t(), n(S, { key: 1 }, [
              Y(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? C("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: O
        }, [...z[5] || (z[5] = [
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
      ])) : (t(), n("label", {
        key: 0,
        class: P(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: z[1] || (z[1] = fe((A) => i.value = !0, ["prevent"])),
        onDragleave: z[2] || (z[2] = fe((A) => i.value = !1, ["prevent"])),
        onDrop: fe(p, ["prevent"])
      }, [
        l("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: b.value,
          disabled: e.disabled,
          onChange: z[0] || (z[0] = (A) => k(A.target.files))
        }, null, 40, or),
        z[3] || (z[3] = l("svg", {
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
        l("span", lr, [
          d.value === null ? (t(), n("span", sr, "Drop a file or click to choose")) : (t(), n("span", rr, "Uploading…"))
        ]),
        l("span", ir, f(h.value), 1),
        d.value !== null ? (t(), n("span", dr, [
          l("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: X({ width: `${d.value}%` })
          }, null, 4)
        ])) : C("", !0)
      ], 34)),
      u.value ? (t(), n("p", gr, f(u.value), 1)) : C("", !0)
    ]));
  }
}), xr = { class: "flex flex-col gap-2" }, yr = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, kr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, $r = { class: "flex flex-col gap-1" }, wr = ["onUpdate:modelValue", "disabled", "aria-label"], _r = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, Cr = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Mr = ["onUpdate:modelValue", "disabled", "aria-label"], Sr = ["disabled", "aria-label", "onClick"], Br = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, zr = { class: "flex items-center gap-3" }, Pr = ["disabled"], Ar = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Or = /* @__PURE__ */ M({
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
    const a = e, r = o, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const d = U(u(a.modelValue));
    function u(k) {
      return k ? Object.entries(k).map(([$, O]) => ({
        uid: i++,
        key: $,
        value: O ?? ""
      })) : [];
    }
    ie(
      () => a.modelValue,
      (k) => {
        JSON.stringify(k ?? null) !== JSON.stringify(v()) && (d.value = u(k));
      }
    );
    function v() {
      const k = {};
      for (const $ of d.value) {
        const O = $.key.trim();
        O !== "" && (k[O] = $.value);
      }
      return Object.keys(k).length ? k : null;
    }
    function b() {
      r("update:modelValue", v());
    }
    const c = x(() => {
      const k = /* @__PURE__ */ new Map();
      for (const $ of d.value) {
        const O = $.key.trim();
        O !== "" && k.set(O, (k.get(O) ?? 0) + 1);
      }
      return new Set([...k.entries()].filter(([, $]) => $ > 1).map(([$]) => $));
    }), h = x(
      () => new Set(
        d.value.map((k) => k.key.trim()).filter((k) => k !== "" && !s.test(k))
      )
    ), y = x(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function w() {
      y.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function _(k) {
      d.value = d.value.filter(($) => $.uid !== k), b();
    }
    return (k, $) => (t(), n("div", xr, [
      d.value.length ? (t(), n("div", yr, [
        l("div", kr, [
          l("span", null, f(e.keyLabel), 1),
          l("span", null, f(e.valueLabel), 1),
          $[0] || ($[0] = l("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(S, null, V(d.value, (O) => (t(), n("div", {
          key: O.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          l("div", $r, [
            oe(l("input", {
              "onUpdate:modelValue": (p) => O.key = p,
              type: "text",
              class: P([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                c.value.has(O.key.trim()) || h.value.has(O.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: b
            }, null, 42, wr), [
              [_e, O.key]
            ]),
            h.value.has(O.key.trim()) ? (t(), n("p", _r, " Letters, numbers, underscores and dashes only. ")) : c.value.has(O.key.trim()) ? (t(), n("p", Cr, " Used twice - only the last value will be saved. ")) : C("", !0)
          ]),
          oe(l("input", {
            "onUpdate:modelValue": (p) => O.value = p,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: b
          }, null, 40, Mr), [
            [_e, O.value]
          ]),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${O.key || "this entry"}`,
            onClick: (p) => _(O.uid)
          }, [...$[1] || ($[1] = [
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
          ])], 8, Sr)
        ]))), 128))
      ])) : (t(), n("p", Br, " Nothing here yet. ")),
      l("div", zr, [
        l("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || y.value,
          onClick: w
        }, [
          $[2] || ($[2] = l("svg", {
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
          Y(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, Pr),
        e.maxPairs !== null ? (t(), n("p", Ar, f(d.value.length) + " of " + f(e.maxPairs), 1)) : C("", !0)
      ])
    ]));
  }
}), Lr = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, jr = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Vr = ["disabled", "title", "aria-label", "onClick"], Tr = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Dr = ["d"], Fr = ["disabled"], Er = ["contenteditable", "data-placeholder"], Ir = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Nr = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null);
    let i = null;
    const d = [
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
    ], u = x(() => d.filter((_) => a.toolbar.includes(_.id))), v = x(() => a.toolbar.includes("link")), b = U(0);
    function c() {
      const _ = s.value?.innerHTML ?? "", k = (s.value?.innerText ?? "").trim();
      b.value = k.length;
      const $ = k === "" ? null : _;
      i = $, r("update:modelValue", $);
    }
    function h(_) {
      a.disabled || (s.value?.focus(), document.execCommand(_.command, !1, _.argument), c());
    }
    function y() {
      if (a.disabled)
        return;
      const _ = window.prompt("Link address");
      _ && (s.value?.focus(), document.execCommand("createLink", !1, _), c());
    }
    function w(_) {
      _.preventDefault();
      const k = _.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, k), c();
    }
    return re(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", b.value = s.value.innerText.trim().length);
    }), ie(
      () => a.modelValue,
      (_) => {
        _ !== i && s.value && (s.value.innerHTML = _ ?? "", b.value = s.value.innerText.trim().length);
      }
    ), (_, k) => (t(), n("div", Lr, [
      l("div", jr, [
        (t(!0), n(S, null, V(u.value, ($) => (t(), n("button", {
          key: $.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: $.label,
          "aria-label": $.label,
          onMousedown: k[0] || (k[0] = fe(() => {
          }, ["prevent"])),
          onClick: (O) => h($)
        }, [
          (t(), n("svg", Tr, [
            l("path", {
              d: $.path
            }, null, 8, Dr)
          ]))
        ], 40, Vr))), 128)),
        v.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: k[1] || (k[1] = fe(() => {
          }, ["prevent"])),
          onClick: y
        }, [...k[2] || (k[2] = [
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
        ])], 40, Fr)) : C("", !0)
      ]),
      l("div", {
        ref_key: "editor",
        ref: s,
        class: P(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: c,
        onBlur: c,
        onPaste: w
      }, null, 42, Er),
      e.maxLength !== null ? (t(), n("div", Ir, f(b.value) + " / " + f(e.maxLength), 1)) : C("", !0)
    ]));
  }
}), Rr = /* @__PURE__ */ st(Nr, [["__scopeId", "data-v-32c63bc7"]]), Hr = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, Ur = ["for"], Kr = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Zr = {
  key: 7,
  class: "relative"
}, qr = ["disabled", "aria-invalid"], Gr = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Wr = { class: "max-h-56 overflow-y-auto p-1" }, Yr = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Jr = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, Xr = ["onClick"], Qr = ["id", "value", "disabled", "aria-invalid"], ei = ["value"], ti = {
  key: 9,
  class: "flex items-center gap-2 text-sm"
}, ai = { class: "text-muted-foreground" }, ni = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, oi = { class: "text-muted-foreground" }, li = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], si = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], ri = {
  key: 13,
  class: "flex flex-wrap gap-1.5"
}, ii = ["disabled", "aria-pressed", "onClick"], di = {
  key: 14,
  class: "flex flex-wrap gap-1.5"
}, ui = ["title", "disabled", "onClick"], ci = {
  key: 15,
  class: "text-destructive text-xs",
  role: "alert"
}, fi = {
  key: 16,
  class: "text-muted-foreground text-xs"
}, Ve = /* @__PURE__ */ M({
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
  setup(e, { emit: o }) {
    const a = ut(() => import("./PkRepeater-J84jGe3T.js")), r = ut(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = o, d = U(!1), u = U(""), v = U([]), b = U(!1), c = U(null);
    let h;
    ie(u, (O) => {
      s.searchOptions && (clearTimeout(h), b.value = !0, h = setTimeout(async () => {
        try {
          v.value = await s.searchOptions(O);
        } catch {
        } finally {
          b.value = !1;
        }
      }, 200));
    });
    async function y() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, v.value.length === 0 && s.searchOptions)) {
        b.value = !0;
        try {
          v.value = await s.searchOptions("");
        } finally {
          b.value = !1;
        }
      }
    }
    function w(O) {
      c.value = O.label, i("change", O.value), d.value = !1, u.value = "";
    }
    function _() {
      c.value = null, i("change", null);
    }
    de(() => clearTimeout(h));
    const k = x(() => Gs(s.field.type));
    function $(O) {
      const p = document.getElementById(`f-${s.field.key}`);
      if (!(p instanceof HTMLTextAreaElement) && !(p instanceof HTMLInputElement))
        return;
      const g = p.selectionStart ?? p.value.length, z = p.selectionEnd ?? g;
      p.setRangeText(O, g, z, "end"), p.dispatchEvent(new Event("input", { bubbles: !0 })), p.focus();
    }
    return (O, p) => e.field.type === "hidden" ? (t(), n(S, { key: 0 }, [], 64)) : (t(), n("div", Hr, [
      l("label", {
        for: `f-${e.field.key}`,
        class: P(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
      }, [
        Y(f(e.field.label) + " ", 1),
        e.field.required ? (t(), n("span", Kr, "*")) : C("", !0)
      ], 10, Ur),
      k.value ? (t(), D(Me(k.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": p[0] || (p[0] = (g) => i("change", g))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(br, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": p[1] || (p[1] = (g) => i("change", g))
      }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), D(m(a), {
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
        "onUpdate:modelValue": p[2] || (p[2] = (g) => i("change", g))
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(m(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": p[3] || (p[3] = (g) => i("change", g))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Rr, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": p[4] || (p[4] = (g) => i("change", g))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(Or, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": p[5] || (p[5] = (g) => i("change", g))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(Lt, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": p[6] || (p[6] = (g) => i("change", g))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Zr, [
        l("button", {
          type: "button",
          class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          onClick: y
        }, [
          l("span", {
            class: P(c.value || e.value ? "" : "text-muted-foreground")
          }, f(c.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), n("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: fe(_, ["stop"])
          }, " ✕ ")) : C("", !0)
        ], 8, qr),
        d.value ? (t(), n("div", Gr, [
          oe(l("input", {
            "onUpdate:modelValue": p[7] || (p[7] = (g) => u.value = g),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [_e, u.value]
          ]),
          l("div", Wr, [
            b.value ? (t(), n("p", Yr, " Searching… ")) : v.value.length === 0 ? (t(), n("p", Jr, " No matches ")) : C("", !0),
            (t(!0), n(S, null, V(v.value, (g) => (t(), n("button", {
              key: String(g.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (z) => w(g)
            }, f(g.label), 9, Xr))), 128))
          ])
        ])) : C("", !0),
        d.value ? (t(), n("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: p[8] || (p[8] = (g) => d.value = !1)
        })) : C("", !0)
      ])) : e.field.type === "select" ? (t(), n("select", {
        key: 8,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onChange: p[9] || (p[9] = (g) => i("change", g.target.value || null))
      }, [
        p[14] || (p[14] = l("option", { value: "" }, "-", -1)),
        (t(!0), n(S, null, V(e.options, (g) => (t(), n("option", {
          key: String(g.value),
          value: g.value
        }, f(g.label), 9, ei))), 128))
      ], 40, Qr)) : e.field.type === "toggle" ? (t(), n("label", ti, [
        W(m(Cs), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": p[10] || (p[10] = (g) => i("change", g))
        }, null, 8, ["id", "model-value", "disabled"]),
        l("span", ai, f(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), n("label", ni, [
        W(m(_s), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": p[11] || (p[11] = (g) => i("change", g === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        l("span", oi, f(e.field.help ?? e.field.label), 1)
      ])) : e.field.type === "textarea" ? (t(), n("textarea", {
        key: 11,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        rows: e.field.rows ?? 3,
        placeholder: e.field.placeholder,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: p[12] || (p[12] = (g) => i("change", g.target.value))
      }, null, 40, li)) : (t(), n("input", {
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
        onInput: p[13] || (p[13] = (g) => i("change", g.target.value))
      }, null, 40, si)),
      e.field.type === "number" && e.field.presets?.length ? (t(), n("div", ri, [
        (t(!0), n(S, null, V(e.field.presets, (g) => (t(), n("button", {
          key: g,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: P([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == g ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == g
          ),
          onClick: (z) => i("change", String(g))
        }, f(g), 11, ii))), 128))
      ])) : C("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", di, [
        (t(!0), n(S, null, V(e.field.chips, (g, z) => (t(), n("button", {
          key: z,
          type: "button",
          title: g,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (A) => $(String(z))
        }, f(z), 9, ui))), 128))
      ])) : C("", !0),
      e.error ? (t(), n("p", ci, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", fi, f(e.field.help), 1)) : C("", !0)
    ]));
  }
}), pi = { class: "flex flex-col gap-2" }, mi = { class: "min-w-0 flex-1" }, vi = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, hi = ["disabled", "aria-label", "onClick"], gi = ["disabled", "aria-label", "onClick"], bi = ["disabled", "title", "aria-label", "onClick"], xi = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, yi = ["disabled"], s1 = /* @__PURE__ */ M({
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
    const a = e, r = o;
    let s = 0;
    const i = U(d(a.modelValue));
    function d(O) {
      return Array.isArray(O) ? O.map((p) => ({ uid: s++, data: { ...p } })) : [];
    }
    ie(
      () => a.modelValue,
      (O) => {
        JSON.stringify(O ?? null) !== JSON.stringify(u()) && (i.value = d(O));
      }
    );
    function u() {
      const O = [];
      for (const p of i.value) {
        const g = {};
        let z = !1;
        for (const A of a.children) {
          const G = p.data[A.key] ?? null;
          g[A.key] = G, G !== null && G !== "" && !(Array.isArray(G) && G.length === 0) && (z = !0);
        }
        z && O.push(g);
      }
      return O.length ? O : null;
    }
    function v() {
      r("update:modelValue", u());
    }
    const b = x(() => a.maxItems !== null && i.value.length >= a.maxItems), c = x(() => a.minItems !== null && i.value.length <= a.minItems), h = x(() => a.children.length === 1);
    function y() {
      if (b.value || a.disabled)
        return;
      const O = {};
      for (const p of a.children)
        O[p.key] = null;
      i.value.push({ uid: s++, data: O });
    }
    function w(O) {
      i.value = i.value.filter((p) => p.uid !== O), v();
    }
    function _(O, p) {
      const g = O + p;
      if (g < 0 || g >= i.value.length)
        return;
      const z = [...i.value], [A] = z.splice(O, 1);
      z.splice(g, 0, A), i.value = z, v();
    }
    function k(O, p, g) {
      const z = i.value.find((A) => A.uid === O);
      z && (z.data[p] = g, v());
    }
    function $(O, p) {
      return a.errors[`${a.fieldKey}.${O}.${p}`];
    }
    return (O, p) => (t(), n("div", pi, [
      (t(!0), n(S, null, V(i.value, (g, z) => (t(), n("div", {
        key: g.uid,
        class: "flex items-start gap-2"
      }, [
        l("span", {
          class: P(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(z + 1), 3),
        l("div", mi, [
          h.value ? (t(), D(Ve, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: g.data[e.children[0].key],
            error: $(z, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (A) => k(g.uid, e.children[0].key, A)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", vi, [
            (t(!0), n(S, null, V(e.children, (A) => (t(), D(Ve, {
              key: A.key,
              field: { ...A, disabled: A.disabled || e.disabled },
              value: g.data[A.key],
              error: $(z, A.key),
              options: e.childOptions[A.key] ?? [],
              onChange: (G) => k(g.uid, A.key, G)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        l("div", {
          class: P(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
        }, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || z === 0,
            "aria-label": `Move ${e.itemLabel} ${z + 1} up`,
            onClick: (A) => _(z, -1)
          }, [...p[0] || (p[0] = [
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
          ])], 8, hi),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || z === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${z + 1} down`,
            onClick: (A) => _(z, 1)
          }, [...p[1] || (p[1] = [
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
          ])], 8, gi),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || c.value,
            title: c.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${z + 1}`,
            onClick: (A) => w(g.uid)
          }, [...p[2] || (p[2] = [
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
          ])], 8, bi)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", xi, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : C("", !0),
      b.value ? C("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: y
      }, [
        p[3] || (p[3] = l("svg", {
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
        Y(" Add " + f(e.itemLabel.toLowerCase()), 1)
      ], 8, yi))
    ]));
  }
}), ki = { class: "space-y-1" }, $i = { class: "flex items-center gap-1" }, wi = ["disabled", "title", "aria-label", "onClick"], _i = ["aria-pressed"], Ci = ["id", "value", "rows", "disabled"], Mi = ["innerHTML"], Si = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(!1), i = x(() => a.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = x(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function v(h, y = h) {
      const w = document.getElementById(a.id ?? "");
      if (w === null)
        return;
      const _ = w.selectionStart, k = w.selectionEnd, $ = i.value.slice(_, k);
      r(
        "update:modelValue",
        `${i.value.slice(0, _)}${h}${$}${y}${i.value.slice(k)}`
      );
    }
    const b = {
      bold: { label: "B", run: () => v("**") },
      italic: { label: "I", run: () => v("*") },
      code: { label: "</>", run: () => v("`") },
      heading: { label: "H", run: () => v("## ", "") },
      list: { label: "•", run: () => v("- ", "") },
      link: { label: "🔗", run: () => v("[", "](https://)") }
    }, c = x(
      () => (a.toolbar ?? Object.keys(b)).filter((h) => h in b)
    );
    return (h, y) => (t(), n("div", ki, [
      l("div", $i, [
        (t(!0), n(S, null, V(c.value, (w) => (t(), n("button", {
          key: w,
          type: "button",
          disabled: e.disabled,
          title: w,
          "aria-label": w,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (_) => b[w].run()
        }, f(b[w].label), 9, wi))), 128)),
        l("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: y[0] || (y[0] = (w) => s.value = !s.value)
        }, " Preview ", 8, _i)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Mi)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: y[1] || (y[1] = (w) => r("update:modelValue", w.target.value))
      }, null, 40, Ci))
    ]));
  }
}), Bi = { class: "space-y-1" }, zi = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Pi = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Ai = ["id", "value", "rows", "disabled"], Oi = { class: "text-muted-foreground text-xs" }, Li = {
  key: 0,
  class: "text-destructive text-xs"
}, ji = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null), i = U(!0), d = x(() => a.modelValue ?? ""), u = x(() => Math.max(d.value.split(`
`).length, 1)), v = x(() => {
      if (a.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function b(h) {
      r("update:modelValue", h.target.value);
    }
    function c(h) {
      if (h.key === "Escape") {
        i.value = !1;
        return;
      }
      if (h.key !== "Tab" && (i.value = !0), h.key !== "Tab" || !i.value)
        return;
      h.preventDefault();
      const y = h.target, w = y.selectionStart, _ = y.selectionEnd, k = `${d.value.slice(0, w)}    ${d.value.slice(_)}`;
      r("update:modelValue", k), requestAnimationFrame(() => {
        y.selectionStart = y.selectionEnd = w + 4;
      });
    }
    return (h, y) => (t(), n("div", Bi, [
      l("div", zi, [
        l("div", Pi, [
          (t(!0), n(S, null, V(u.value, (w) => (t(), n("div", { key: w }, f(w), 1))), 128))
        ]),
        l("textarea", {
          id: e.id,
          ref_key: "area",
          ref: s,
          value: d.value,
          rows: e.rows,
          disabled: e.disabled,
          spellcheck: "false",
          autocapitalize: "off",
          autocomplete: "off",
          autocorrect: "off",
          class: "w-full resize-y bg-transparent px-3 py-2 leading-5 outline-none",
          onInput: b,
          onKeydown: c
        }, null, 40, Ai)
      ]),
      l("p", Oi, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      v.value ? (t(), n("p", Li, f(v.value), 1)) : C("", !0)
    ]));
  }
}), Vi = { class: "space-y-3" }, Ti = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Di = { class: "text-sm font-medium" }, Fi = { class: "flex items-center gap-1" }, Ei = ["disabled", "onClick"], Ii = ["disabled", "onClick"], Ni = ["disabled", "onClick"], Ri = { class: "space-y-3 p-3" }, Hi = { class: "flex flex-wrap items-center gap-2" }, Ui = ["disabled", "onClick"], Ki = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, r1 = /* @__PURE__ */ M({
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
    const a = e, r = o, s = x(() => a.modelValue ?? []), i = x(
      () => Object.fromEntries(a.blocks.map((y) => [y.type, y]))
    ), d = x(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function u(y) {
      r("update:modelValue", y);
    }
    function v(y) {
      d.value || u([...s.value, { type: y, data: {} }]);
    }
    function b(y) {
      u(s.value.filter((w, _) => _ !== y));
    }
    function c(y, w) {
      const _ = y + w;
      if (_ < 0 || _ >= s.value.length)
        return;
      const k = [...s.value], [$] = k.splice(y, 1);
      k.splice(_, 0, $), u(k);
    }
    function h(y, w, _) {
      u(
        s.value.map(
          (k, $) => $ === y ? { ...k, data: { ...k.data, [w]: _ } } : k
        )
      );
    }
    return (y, w) => (t(), n("div", Vi, [
      (t(!0), n(S, null, V(s.value, (_, k) => (t(), n("div", {
        key: `${_.type}-${k}`,
        class: "bg-card rounded-lg border"
      }, [
        l("div", Ti, [
          l("span", Di, f(i.value[_.type]?.label ?? _.type), 1),
          l("div", Fi, [
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || k === 0,
              "aria-label": "Move up",
              onClick: ($) => c(k, -1)
            }, " ↑ ", 8, Ei),
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || k === s.value.length - 1,
              "aria-label": "Move down",
              onClick: ($) => c(k, 1)
            }, " ↓ ", 8, Ii),
            l("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: ($) => b(k)
            }, " Remove ", 8, Ni)
          ])
        ]),
        l("div", Ri, [
          (t(!0), n(S, null, V(i.value[_.type]?.fields ?? [], ($) => (t(), D(Ve, {
            key: $.key,
            field: $,
            value: _.data[$.key] ?? null,
            error: e.errors?.[$.key],
            processing: e.disabled,
            onChange: (O) => h(k, $.key, O)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      l("div", Hi, [
        (t(!0), n(S, null, V(e.blocks, (_) => (t(), n("button", {
          key: _.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (k) => v(_.type)
        }, " + " + f(_.label), 9, Ui))), 128)),
        d.value ? (t(), n("span", Ki, f(e.maxBlocks) + " is the maximum here. ", 1)) : C("", !0)
      ])
    ]));
  }
}), Zi = ["name", "value", "checked", "disabled", "onChange"], qi = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Gi = /* @__PURE__ */ M({
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
    const a = e, r = o;
    function s(i) {
      return a.modelValue != null && i.value == a.modelValue;
    }
    return (i, d) => (t(), n("div", {
      role: "radiogroup",
      class: P(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(S, null, V(e.options, (u) => (t(), n("label", {
        key: String(u.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (v) => r("update:modelValue", u.value)
        }, null, 40, Zi),
        Y(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", qi, " Nothing to choose from yet. ")) : C("", !0)
    ], 2));
  }
}), Wi = ["value", "checked", "disabled", "onChange"], Yi = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Ji = /* @__PURE__ */ M({
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
    const a = e, r = o, s = x(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function i(v) {
      return s.value.some((b) => b == v.value);
    }
    function d(v) {
      r(
        "update:modelValue",
        i(v) ? s.value.filter((b) => b != v.value) : [...s.value, v.value]
      );
    }
    const u = x(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (v, b) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: X(u.value)
    }, [
      (t(!0), n(S, null, V(e.options, (c) => (t(), n("label", {
        key: String(c.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: c.value,
          checked: i(c),
          disabled: e.disabled,
          onChange: (h) => d(c)
        }, null, 40, Wi),
        Y(" " + f(c.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Yi, " Nothing to choose from yet. ")) : C("", !0)
    ], 4));
  }
}), Xi = { class: "flex flex-col gap-1.5" }, Qi = ["aria-label", "onClick"], ed = ["placeholder", "disabled", "maxlength"], td = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, ad = ["onClick"], nd = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, od = /* @__PURE__ */ M({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = U(""), i = x(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), d = x(() => i.value.length >= (a.field.max ?? 25)), u = x(
      () => (a.field.suggestions ?? []).filter(
        (h) => !i.value.some((y) => y.toLowerCase() === h.toLowerCase())
      )
    );
    function v(h) {
      const y = h.trim().slice(0, a.field.maxLength ?? 40);
      if (y === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some((w) => w.toLowerCase() === y.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, y]), s.value = "";
    }
    function b(h) {
      r(
        "update:modelValue",
        i.value.filter((y, w) => w !== h)
      );
    }
    function c(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), v(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && b(i.value.length - 1);
    }
    return (h, y) => (t(), n("div", Xi, [
      l("div", {
        class: P(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(S, null, V(i.value, (w, _) => (t(), n("span", {
          key: `${w}-${_}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          Y(f(w) + " ", 1),
          e.disabled ? C("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${w}`,
            onClick: (k) => b(_)
          }, " × ", 8, Qi))
        ]))), 128)),
        oe(l("input", {
          "onUpdate:modelValue": y[0] || (y[0] = (w) => s.value = w),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: c,
          onBlur: y[1] || (y[1] = (w) => v(s.value))
        }, null, 40, ed), [
          [_e, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", td, [
        y[2] || (y[2] = l("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(S, null, V(u.value, (w) => (t(), n("button", {
          key: w,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (_) => v(w)
        }, f(w), 9, ad))), 128))
      ])) : C("", !0),
      d.value ? (t(), n("p", nd, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : C("", !0)
    ]));
  }
}), ld = 4.5, gt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function jt(e) {
  let o = e.replace("#", "");
  return o.length === 3 && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]), [parseInt(o.slice(0, 2), 16), parseInt(o.slice(2, 4), 16), parseInt(o.slice(4, 6), 16)];
}
function Ke(e) {
  const o = e / 255;
  return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
}
function Xe(e) {
  const [o, a, r] = jt(e);
  return 0.2126 * Ke(o) + 0.7152 * Ke(a) + 0.0722 * Ke(r);
}
function Vt(e, o) {
  const a = Xe(e), r = Xe(o);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function sd(e, o, a) {
  if (!gt.test(e) || !gt.test(o))
    return e;
  const r = Xe(o) > 0.5, s = r ? 0 : 255;
  let i = jt(e);
  for (let d = 0; d <= 20; d++) {
    const u = rd(i);
    if (Vt(u, o) >= a)
      return u;
    i = i.map((v) => v + (s - v) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function rd(e) {
  return "#" + e.map(
    (o) => Math.round(Math.max(0, Math.min(255, o))).toString(16).padStart(2, "0")
  ).join("");
}
const id = { class: "flex flex-col gap-2" }, dd = { class: "flex items-center gap-2" }, ud = {
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
}, cd = ["value", "disabled", "aria-label"], fd = ["value", "disabled", "placeholder"], pd = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, md = ["aria-label", "title", "onClick"], vd = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, hd = /* @__PURE__ */ M({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = x(() => typeof a.modelValue == "string" ? a.modelValue : ""), d = x(() => s.test(i.value));
    function u(w) {
      const _ = w.trim();
      if (_ === "")
        return "";
      const k = _.startsWith("#") ? _ : `#${_}`;
      return s.test(k) ? k.toLowerCase() : _;
    }
    function v(w) {
      r("update:modelValue", u(w.target.value));
    }
    const b = x(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Vt(i.value, a.field.contrastBackground)), c = x(() => a.field.contrastMinRatio ?? ld), h = x(() => b.value !== null && b.value < c.value);
    function y() {
      a.field.contrastBackground && r(
        "update:modelValue",
        sd(i.value, a.field.contrastBackground, c.value)
      );
    }
    return (w, _) => (t(), n("div", id, [
      l("div", dd, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: _[0] || (_[0] = (k) => r("update:modelValue", k.target.value))
        }, null, 40, cd)) : (t(), n("span", ud)),
        l("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: v
        }, null, 40, fd)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", pd, [
        (t(!0), n(S, null, V(e.field.presets, (k) => (t(), n("button", {
          key: k,
          type: "button",
          class: P(["size-6 rounded border", i.value.toLowerCase() === k.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: X({ backgroundColor: k }),
          "aria-label": k,
          title: k,
          onClick: ($) => r("update:modelValue", k.toLowerCase())
        }, null, 14, md))), 128))
      ])) : C("", !0),
      h.value ? (t(), n("p", vd, [
        l("span", null, " This fails contrast at " + f(b.value.toFixed(1)) + ":1 - it needs at least " + f(c.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? C("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: y
        }, " Use a readable shade "))
      ])) : C("", !0)
    ]));
  }
}), gd = { class: "flex items-center gap-3" }, bd = ["min", "max", "step", "value", "disabled", "aria-label"], xd = { class: "flex shrink-0 items-center gap-1" }, yd = ["min", "max", "step", "value", "disabled"], kd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, $d = /* @__PURE__ */ M({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = x(() => a.field.min ?? 0), i = x(() => a.field.max ?? 100), d = x(() => a.field.step ?? 1), u = x(() => {
      const c = Number(a.modelValue);
      return Number.isFinite(c) ? c : s.value;
    }), v = x(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function b(c) {
      if (c === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(c);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (c, h) => (t(), n("div", gd, [
      l("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (y) => b(y.target.value))
      }, null, 40, bd),
      l("div", xd, [
        l("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: v.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (y) => b(y.target.value))
        }, null, 40, yd),
        e.field.unit ? (t(), n("span", kd, f(e.field.unit), 1)) : C("", !0)
      ])
    ]));
  }
}), De = /* @__PURE__ */ new Map();
function Ze(e, o) {
  De.set(e, o);
}
function wd(e) {
  return De.get(e);
}
function i1(e) {
  return De.has(e);
}
function _d() {
  return [...De.keys()].sort();
}
function d1() {
  De.clear();
}
const Cd = ["name", "value", "checked", "disabled", "onChange"], Md = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Sd = { class: "whitespace-nowrap" }, Bd = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, zd = ["name", "value", "checked", "disabled", "onChange"], Pd = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Ad = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Od = { class: "text-center text-xs font-medium" }, Ld = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, jd = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Vd = /* @__PURE__ */ M({
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
    const a = e, r = o, s = x(
      () => a.field.preview ? wd(a.field.preview) : void 0
    ), i = x(() => !!a.field.preview && !s.value), d = x(() => a.field.layout === "segmented"), u = x(() => {
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
    function v(b) {
      return a.modelValue != null && b.value == a.modelValue;
    }
    return (b, c) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: P(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(S, null, V(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: P(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          v(h) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: v(h),
          disabled: e.disabled,
          onChange: (y) => r("update:modelValue", h.value)
        }, null, 40, Cd),
        c[0] || (c[0] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Md, [
          (t(), D(Me(s.value), {
            value: h.value,
            label: h.label,
            selected: v(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : C("", !0),
        l("span", Sd, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Bd, " Nothing to choose from yet. ")) : C("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: P(["grid gap-3", u.value])
    }, [
      (t(!0), n(S, null, V(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: P(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          v(h) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: v(h),
          disabled: e.disabled,
          onChange: (y) => r("update:modelValue", h.value)
        }, null, 40, zd),
        c[1] || (c[1] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        l("span", Pd, [
          s.value ? (t(), D(Me(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: v(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Ad, " no preview ")) : C("", !0)
        ]),
        l("span", Od, f(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ld, " Nothing to choose from yet. ")) : C("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", jd, [
        c[2] || (c[2] = Y(" No preview registered for ", -1)),
        l("code", null, f(e.field.preview), 1),
        Y(". Registered: " + f(m(_d)().join(", ") || "none") + ". ", 1)
      ])) : C("", !0)
    ], 2));
  }
}), Td = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Dd = /* @__PURE__ */ M({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, a) => (t(), n("span", Td, [
      l("span", {
        class: "block size-full",
        style: X({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Fd = { class: "flex flex-col items-center gap-1 text-center" }, Ed = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Tt = /* @__PURE__ */ M({
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
    const o = e, a = x(() => o.mono ? "#000000" : o.accent), r = x(() => {
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
    return (s, i) => (t(), n("div", Fd, [
      l("div", {
        class: P(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: X({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Ed, f(e.caption), 1)) : C("", !0)
    ]));
  }
}), Id = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Nd = { class: "flex items-center gap-3" }, Rd = ["src"], Hd = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Ud = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Kd = {
  key: 0,
  class: "text-right text-sm"
}, Zd = { class: "text-neutral-500" }, qd = { class: "tabular-nums" }, Gd = { key: 1 }, Wd = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Yd = { class: "mt-2 font-medium" }, Jd = { key: 2 }, Xd = { class: "w-full text-sm" }, Qd = { class: "w-full py-3 pr-2" }, eu = {
  key: 0,
  class: "text-xs text-neutral-500"
}, tu = { key: 0 }, au = ["colspan"], nu = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, ou = { class: "w-64 text-sm" }, lu = { class: "tabular-nums" }, su = {
  key: 3,
  class: "py-2"
}, ru = { key: 4 }, iu = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, du = { class: "mt-2 flex flex-col gap-1 text-sm" }, uu = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, cu = { key: 0 }, fu = {
  key: 1,
  class: "mt-1"
}, pu = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, u1 = /* @__PURE__ */ M({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const o = e;
    function a() {
      return o.document.branding.mono ? "#000000" : o.document.branding.accent;
    }
    function r(v) {
      return v.meta ?? [];
    }
    function s(v) {
      return v.rows ?? [];
    }
    function i(v) {
      return v.totals ?? [];
    }
    function d(v) {
      return v ?? [];
    }
    function u(v) {
      return v ?? "";
    }
    return (v, b) => (t(), n("article", Id, [
      l("div", Nd, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Rd)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: X({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(S, null, V(e.document.blocks, (c, h) => (t(), n(S, { key: h }, [
        c.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: X({ borderColor: a() })
        }, [
          l("div", null, [
            l("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: X({ color: a() })
            }, f(c.title), 5),
            c.subtitle ? (t(), n("p", Hd, f(c.subtitle), 1)) : C("", !0),
            c.reference ? (t(), n("p", Ud, f(c.reference), 1)) : C("", !0)
          ]),
          r(c).length ? (t(), n("dl", Kd, [
            (t(!0), n(S, null, V(r(c), (y, w) => (t(), n("div", {
              key: w,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              l("dt", Zd, f(y.label), 1),
              l("dd", qd, f(y.value), 1)
            ]))), 128))
          ])) : C("", !0)
        ], 4)) : c.type === "party" ? (t(), n("section", Gd, [
          l("h2", Wd, f(c.heading), 1),
          l("p", Yd, f(c.name), 1),
          (t(!0), n(S, null, V(d(c.lines), (y, w) => (t(), n("p", {
            key: w,
            class: "text-sm text-neutral-600"
          }, f(y), 1))), 128))
        ])) : c.type === "lines" ? (t(), n("section", Jd, [
          l("table", Xd, [
            l("thead", null, [
              l("tr", {
                class: "border-b-2 text-left",
                style: X({ borderColor: a() })
              }, [
                (t(!0), n(S, null, V(d(c.columns), (y, w) => (t(), n("th", {
                  key: w,
                  class: P(["pb-2 font-medium", w > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(y), 3))), 128))
              ], 4)
            ]),
            l("tbody", null, [
              (t(!0), n(S, null, V(s(c), (y, w) => (t(), n("tr", {
                key: w,
                class: "border-b border-neutral-200"
              }, [
                l("td", Qd, [
                  l("p", null, f(y.description), 1),
                  y.detail ? (t(), n("p", eu, f(y.detail), 1)) : C("", !0)
                ]),
                (t(!0), n(S, null, V(y.cells, (_, k) => (t(), n("td", {
                  key: k,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(_), 1))), 128))
              ]))), 128)),
              s(c).length === 0 ? (t(), n("tr", tu, [
                l("td", {
                  colspan: d(c.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(c.empty), 9, au)
              ])) : C("", !0)
            ])
          ]),
          i(c).length ? (t(), n("div", nu, [
            l("dl", ou, [
              (t(!0), n(S, null, V(i(c), (y, w) => (t(), n("div", {
                key: w,
                class: P([
                  "flex justify-between py-1",
                  y.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: X(y.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                l("dt", {
                  class: P(y.strong ? "" : "text-neutral-600")
                }, f(y.label), 3),
                l("dd", lu, f(y.value), 1)
              ], 6))), 128))
            ])
          ])) : C("", !0)
        ])) : c.type === "code" ? (t(), n("section", su, [
          W(Tt, {
            code: u(c.code),
            caption: u(c.caption),
            style: X(u(c.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : c.type === "steps" ? (t(), n("section", ru, [
          l("h2", iu, f(c.heading), 1),
          l("ol", du, [
            (t(!0), n(S, null, V(d(c.items), (y, w) => (t(), n("li", {
              key: w,
              class: "flex gap-2"
            }, [
              l("span", {
                class: "font-semibold tabular-nums",
                style: X({ color: a() })
              }, f(w + 1) + ".", 5),
              l("span", null, f(y), 1)
            ]))), 128))
          ])
        ])) : c.type === "note" ? (t(), n("p", {
          key: 5,
          class: P(["text-sm", c.emphasis ? "font-medium" : "text-neutral-600"]),
          style: X(c.emphasis ? { color: a() } : void 0)
        }, f(c.text), 7)) : c.type === "footer" ? (t(), n("footer", uu, [
          c.text ? (t(), n("p", cu, f(c.text), 1)) : C("", !0),
          d(c.contacts).length ? (t(), n("p", fu, f(d(c.contacts).join(" · ")), 1)) : C("", !0)
        ])) : (t(), n("p", pu, " This document contains a “" + f(c.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), mu = ["aria-label", "title"], vu = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hu = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, c1 = /* @__PURE__ */ M({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: o, set: a } = At(), r = x(() => o.value.theme === "dark");
    function s() {
      a({ theme: r.value ? "light" : "dark" });
    }
    return (i, d) => (t(), n("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), n("svg", vu, [
        r.value ? (t(), n(S, { key: 0 }, [
          d[0] || (d[0] = l("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = l("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", hu))
      ]))
    ], 8, mu));
  }
}), gu = ["width", "height"], bu = { key: 0 }, xu = ["x1", "x2", "y1", "y2"], yu = ["x", "y"], ku = ["x1", "x2", "y1", "y2"], $u = ["x", "y"], wu = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], _u = ["x", "y", "width", "height", "fill", "fill-opacity"], Cu = ["x", "y"], Mu = ["x", "y"], Su = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Bu = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, zu = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Pu = { class: "text-xs font-semibold tabular-nums" }, Au = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Ou = { class: "text-muted-foreground" }, bt = 5.6, f1 = /* @__PURE__ */ M({
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
    const o = e, a = {
      danger: "var(--destructive)",
      warning: "var(--chart-4)",
      success: "var(--chart-2)",
      neutral: "var(--muted-foreground)"
    };
    function r(B) {
      return a[B] ?? B;
    }
    function s(B, K) {
      if (!o.thresholds?.length)
        return K;
      const F = o.thresholds.find((J) => B < J.max);
      return r(F ? F.color : o.aboveColor);
    }
    const i = U(null), d = U(560), u = U(null);
    let v = null;
    re(() => {
      v = new ResizeObserver((B) => {
        d.value = Math.max(160, B[0].contentRect.width);
      }), i.value && v.observe(i.value);
    }), de(() => v?.disconnect());
    const b = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], c = x(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((K, F) => ({
      ...K,
      color: K.color ?? b[F % b.length]
    }))), h = x(() => c.value[0]?.points.map((B) => B.label) ?? []), y = x(() => h.value.length), w = x(() => o.orientation === "horizontal"), _ = x(() => Math.max(0, ...h.value.map((B) => B.length))), k = x(() => {
      if (!w.value)
        return o.showAxis ? 44 : 8;
      const B = _.value * bt + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), $ = x(() => Math.max(4, Math.floor((k.value - 16) / bt)));
    function O(B) {
      return B.length <= $.value ? B : `${B.slice(0, $.value - 1)}…`;
    }
    const p = x(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: k.value
    })), g = x(() => ({
      w: Math.max(1, d.value - p.value.left - p.value.right),
      h: Math.max(1, o.height - p.value.top - p.value.bottom)
    })), z = (B) => o.format ? o.format(B) : A(B);
    function A(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const G = x(() => {
      const B = h.value.map(
        (le, ce) => o.stacked ? c.value.reduce((te, ue) => te + Math.max(0, ue.points[ce]?.value ?? 0), 0) : Math.max(...c.value.map((te) => te.points[ce]?.value ?? 0))
      );
      if (o.maxValue)
        return o.maxValue;
      const K = Math.max(...B, 0);
      if (K <= 0)
        return 1;
      const F = 10 ** Math.floor(Math.log10(K));
      return ([1, 2, 2.5, 5, 10].find((le) => K <= le * F) ?? 10) * F;
    }), Z = x(
      () => (w.value ? g.value.h : g.value.w) / Math.max(1, y.value)
    ), ae = x(() => Z.value * 0.68), j = x(
      () => o.stacked || c.value.length <= 1 ? ae.value : ae.value / c.value.length
    ), L = x(() => {
      const B = [], K = new Array(y.value).fill(0);
      return c.value.forEach((F, J) => {
        F.points.forEach((le, ce) => {
          const ue = Math.max(0, le.value) / G.value * (w.value ? g.value.w : g.value.h), Oe = (w.value ? p.value.top : p.value.left) + ce * Z.value + (Z.value - ae.value) / 2, dt = o.stacked ? 0 : J * j.value;
          B.push(
            w.value ? {
              x: p.value.left + K[ce],
              y: Oe + dt,
              w: ue,
              h: Math.max(0, j.value - 2),
              color: s(le.value, F.color),
              label: le.label,
              name: F.name,
              value: le.value,
              index: ce
            } : {
              x: Oe + dt,
              y: p.value.top + g.value.h - ue - K[ce],
              w: Math.max(0, j.value - 2),
              h: ue,
              color: s(le.value, F.color),
              label: le.label,
              name: F.name,
              value: le.value,
              index: ce
            }
          ), o.stacked && (K[ce] += ue);
        });
      }), B;
    }), T = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: G.value * (w.value ? B : 1 - B),
        x: p.value.left + g.value.w * B,
        y: p.value.top + g.value.h * B
      }))
    ), N = x(() => Math.max(1, Math.ceil(y.value / (w.value ? 14 : 10))));
    function R(B) {
      return B === y.value - 1 || B % N.value === 0;
    }
    function H(B) {
      return (w.value ? p.value.top : p.value.left) + B * Z.value + Z.value / 2;
    }
    const ee = x(() => u.value === null ? null : {
      label: h.value[u.value],
      rows: c.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[u.value]?.value ?? 0
      }))
    });
    return (B, K) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      y.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: X({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(S, { key: 1 }, [
        (t(), n("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: K[0] || (K[0] = (F) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", bu, [
            w.value ? (t(), n(S, { key: 0 }, [
              (t(!0), n(S, null, V(T.value, (F) => (t(), n("line", {
                key: `g-${F.x}`,
                x1: F.x,
                x2: F.x,
                y1: p.value.top,
                y2: p.value.top + g.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, xu))), 128)),
              (t(!0), n(S, null, V(T.value, (F) => (t(), n("text", {
                key: `gt-${F.x}`,
                x: F.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(F.value)), 9, yu))), 128))
            ], 64)) : (t(), n(S, { key: 1 }, [
              (t(!0), n(S, null, V(T.value, (F) => (t(), n("line", {
                key: `g-${F.y}`,
                x1: p.value.left,
                x2: d.value - p.value.right,
                y1: F.y,
                y2: F.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, ku))), 128)),
              (t(!0), n(S, null, V(T.value, (F) => (t(), n("text", {
                key: `gt-${F.y}`,
                x: p.value.left - 8,
                y: F.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(F.value)), 9, $u))), 128))
            ], 64))
          ])) : C("", !0),
          (t(!0), n(S, null, V(h.value, (F, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: w.value ? p.value.left : p.value.left + J * Z.value,
            y: w.value ? p.value.top + J * Z.value : p.value.top,
            width: w.value ? g.value.w : Z.value,
            height: w.value ? Z.value : g.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === J ? 0.4 : 0,
            onMouseenter: (le) => u.value = J
          }, null, 40, wu))), 128)),
          (t(!0), n(S, null, V(L.value, (F, J) => (t(), n("rect", {
            key: `b-${J}`,
            x: F.x,
            y: F.y,
            width: F.w,
            height: F.h,
            fill: F.color,
            "fill-opacity": u.value === null || u.value === F.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, _u))), 128)),
          w.value ? (t(!0), n(S, { key: 1 }, V(h.value, (F, J) => oe((t(), n("text", {
            key: `c-${J}`,
            x: p.value.left - 8,
            y: H(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            Y(f(O(F)) + " ", 1),
            l("title", null, f(F), 1)
          ], 8, Cu)), [
            [Ce, R(J)]
          ])), 128)) : (t(!0), n(S, { key: 2 }, V(h.value, (F, J) => oe((t(), n("text", {
            key: `c-${J}`,
            x: H(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(F), 9, Mu)), [
            [Ce, R(J)]
          ])), 128))
        ], 40, gu)),
        ee.value ? (t(), n("div", Su, [
          l("p", Bu, f(ee.value.label), 1),
          (t(!0), n(S, null, V(ee.value.rows, (F, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: X({ background: F.color })
            }, null, 4),
            l("span", zu, f(F.name || "Value"), 1),
            l("span", Pu, f(z(F.value)), 1)
          ]))), 128))
        ])) : C("", !0),
        e.showLegend && c.value.length > 1 ? (t(), n("div", Au, [
          (t(!0), n(S, null, V(c.value, (F, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: X({ background: F.color })
            }, null, 4),
            l("span", Ou, f(F.name), 1)
          ]))), 128))
        ])) : C("", !0)
      ], 64))
    ], 512));
  }
}), Lu = ["width", "height"], ju = ["id"], Vu = ["stop-color"], Tu = ["stop-color"], Du = { key: 0 }, Fu = ["x1", "x2", "y1", "y2"], Eu = ["x", "y"], Iu = ["x", "y"], Nu = ["x1", "x2", "y1", "y2"], Ru = ["d", "fill"], Hu = ["d", "stroke", "stroke-dasharray"], Uu = ["cx", "cy", "fill"], Ku = { key: 1 }, Zu = ["x1", "x2", "y1", "y2"], qu = ["cx", "cy", "fill"], Gu = ["x", "y"], Wu = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Yu = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Ju = { class: "text-xs font-semibold tabular-nums" }, Xu = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Qu = { class: "text-muted-foreground" }, p1 = /* @__PURE__ */ M({
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
    const o = e, a = x(() => b.value.some((B) => B.axis === "right")), r = U(null), s = U(560), i = U(null);
    let d = null;
    re(() => {
      d = new ResizeObserver((B) => {
        s.value = Math.max(160, B[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), de(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], v = Math.random().toString(36).slice(2, 9), b = x(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((K, F) => ({
      ...K,
      color: K.color ?? u[F % u.length]
    }))), c = x(() => b.value[0]?.points.map((B) => B.label) ?? []), h = x(() => c.value.length), y = x(() => ({
      top: 12,
      right: o.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: o.showAxis ? 44 : 8
    })), w = (B) => o.format ? o.format(B) : _(B);
    function _(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function k(B) {
      const K = Math.max(...B, 0);
      if (K <= 0)
        return 1;
      const F = 10 ** Math.floor(Math.log10(K));
      return ([1, 2, 2.5, 5, 10].find((le) => K <= le * F) ?? 10) * F;
    }
    const $ = x(
      () => k(
        b.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((K) => K.value))
      )
    ), O = x(
      () => k(
        b.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((K) => K.value))
      )
    ), p = x(() => ({
      w: Math.max(1, s.value - y.value.left - y.value.right),
      h: Math.max(1, o.height - y.value.top - y.value.bottom)
    }));
    function g(B) {
      return y.value.left + (h.value <= 1 ? 0 : B / (h.value - 1) * p.value.w);
    }
    function z(B, K = "left") {
      const F = K === "right" ? O.value : $.value;
      return y.value.top + p.value.h - B / F * p.value.h;
    }
    const A = x(
      () => b.value.map((B) => {
        const K = B.points.map((J, le) => ({
          ...J,
          x: g(le),
          y: z(J.value, B.axis ?? "left")
        })), F = B.stepped ? G(K) : Z(K);
        return { ...B, pts: K, line: F, area: ae(F, K) };
      })
    );
    function G(B) {
      if (B.length === 0)
        return "";
      let K = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let F = 1; F < B.length; F++)
        K += ` L${B[F].x.toFixed(2)},${B[F - 1].y.toFixed(2)} L${B[F].x.toFixed(2)},${B[F].y.toFixed(2)}`;
      return K;
    }
    function Z(B) {
      const K = B.length;
      if (K === 0)
        return "";
      if (K === 1)
        return `M${B[0].x},${B[0].y}`;
      const F = [], J = [];
      for (let te = 0; te < K - 1; te++)
        F[te] = B[te + 1].x - B[te].x, J[te] = F[te] === 0 ? 0 : (B[te + 1].y - B[te].y) / F[te];
      const le = [J[0]];
      for (let te = 1; te < K - 1; te++)
        if (J[te - 1] * J[te] <= 0)
          le[te] = 0;
        else {
          const ue = 2 * F[te] + F[te - 1], Oe = F[te] + 2 * F[te - 1];
          le[te] = (ue + Oe) / (ue / J[te - 1] + Oe / J[te]);
        }
      le[K - 1] = J[K - 2];
      let ce = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let te = 0; te < K - 1; te++) {
        const ue = F[te] / 3;
        ce += ` C${(B[te].x + ue).toFixed(2)},${(B[te].y + le[te] * ue).toFixed(2)} ${(B[te + 1].x - ue).toFixed(2)},${(B[te + 1].y - le[te + 1] * ue).toFixed(2)} ${B[te + 1].x.toFixed(2)},${B[te + 1].y.toFixed(2)}`;
      }
      return ce;
    }
    function ae(B, K) {
      if (K.length === 0)
        return "";
      const F = y.value.top + p.value.h;
      return `${B} L${K[K.length - 1].x.toFixed(2)},${F} L${K[0].x.toFixed(2)},${F} Z`;
    }
    const j = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: y.value.top + p.value.h * B,
        value: $.value * (1 - B)
      }))
    ), L = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: y.value.top + p.value.h * B,
        value: O.value * (1 - B)
      }))
    ), T = x(() => Math.max(1, Math.ceil(h.value / 8)));
    function N(B) {
      return B === h.value - 1 || B % T.value === 0;
    }
    function R(B) {
      const K = B.currentTarget.getBoundingClientRect(), F = B.clientX - K.left - y.value.left, J = h.value <= 1 ? 1 : p.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(F / J)));
    }
    const H = x(() => {
      if (i.value === null || h.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: g(B),
        label: c.value[B],
        rows: A.value.map((K) => ({
          name: K.name,
          color: K.color,
          value: K.points[B]?.value ?? 0,
          y: K.pts[B]?.y ?? 0
        }))
      };
    }), ee = x(() => {
      if (!H.value)
        return {};
      const B = H.value.x > s.value * 0.6;
      return {
        left: `${H.value.x}px`,
        top: "8px",
        transform: B ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (B, K) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: X({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(S, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: R,
          onMouseleave: K[0] || (K[0] = (F) => i.value = null)
        }, [
          l("defs", null, [
            (t(!0), n(S, null, V(A.value, (F, J) => (t(), n("linearGradient", {
              id: `pk-fill-${m(v)}-${J}`,
              key: J,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              l("stop", {
                offset: "0%",
                "stop-color": F.color,
                "stop-opacity": "0.25"
              }, null, 8, Vu),
              l("stop", {
                offset: "100%",
                "stop-color": F.color,
                "stop-opacity": "0.01"
              }, null, 8, Tu)
            ], 8, ju))), 128))
          ]),
          e.showAxis ? (t(), n("g", Du, [
            (t(!0), n(S, null, V(j.value, (F) => (t(), n("line", {
              key: F.y,
              x1: y.value.left,
              x2: s.value - y.value.right,
              y1: F.y,
              y2: F.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Fu))), 128)),
            (t(!0), n(S, null, V(j.value, (F) => (t(), n("text", {
              key: `t-${F.y}`,
              x: y.value.left - 8,
              y: F.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(_(F.value)), 9, Eu))), 128)),
            a.value ? (t(!0), n(S, { key: 0 }, V(L.value, (F) => (t(), n("text", {
              key: `rt-${F.y}`,
              x: s.value - y.value.right + 8,
              y: F.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(_(F.value)), 9, Iu))), 128)) : C("", !0)
          ])) : C("", !0),
          (t(!0), n(S, null, V(c.value, (F, J) => oe((t(), n("line", {
            key: `v-${J}`,
            x1: g(J),
            x2: g(J),
            y1: y.value.top,
            y2: y.value.top + p.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Nu)), [
            [Ce, N(J)]
          ])), 128)),
          (t(!0), n(S, null, V(A.value, (F, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            F.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: F.area,
              fill: `url(#pk-fill-${m(v)}-${J})`
            }, null, 8, Ru)) : C("", !0),
            l("path", {
              d: F.line,
              fill: "none",
              stroke: F.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": F.dashed ? "6 4" : void 0
            }, null, 8, Hu),
            F.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: F.pts[0].x,
              cy: F.pts[0].y,
              r: "3",
              fill: F.color
            }, null, 8, Uu)) : C("", !0)
          ]))), 128)),
          H.value ? (t(), n("g", Ku, [
            l("line", {
              x1: H.value.x,
              x2: H.value.x,
              y1: y.value.top,
              y2: y.value.top + p.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Zu),
            (t(!0), n(S, null, V(H.value.rows, (F, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: H.value.x,
              cy: F.y,
              r: "4",
              fill: F.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, qu))), 128))
          ])) : C("", !0),
          (t(!0), n(S, null, V(c.value, (F, J) => oe((t(), n("text", {
            key: `x-${J}`,
            x: g(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(F), 9, Gu)), [
            [Ce, N(J)]
          ])), 128))
        ], 40, Lu)),
        H.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: X(ee.value)
        }, [
          l("p", Wu, f(H.value.label), 1),
          (t(!0), n(S, null, V(H.value.rows, (F, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: X({ background: F.color })
            }, null, 4),
            l("span", Yu, f(F.name || "Value"), 1),
            l("span", Ju, f(w(F.value)), 1)
          ]))), 128))
        ], 4)) : C("", !0),
        e.showLegend && b.value.length > 1 ? (t(), n("div", Xu, [
          (t(!0), n(S, null, V(A.value, (F, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: X({ background: F.color })
            }, null, 4),
            l("span", Qu, f(F.name), 1)
          ]))), 128))
        ])) : C("", !0)
      ], 64))
    ], 512));
  }
}), ec = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, tc = { class: "text-muted-foreground text-[11px] capitalize" }, ac = { class: "text-sm font-semibold tabular-nums" }, nc = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Fe = /* @__PURE__ */ M({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (o, a) => (t(), n("div", ec, [
      l("p", tc, f(e.label), 1),
      l("p", ac, [
        Y(f(e.value) + " ", 1),
        e.share ? (t(), n("span", nc, " (" + f(e.share) + ") ", 1)) : C("", !0)
      ])
    ]));
  }
}), oc = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, lc = ["width", "height", "viewBox", "aria-label"], sc = ["d", "fill", "fill-opacity", "onMouseenter"], rc = ["x", "y"], ic = ["x", "y"], dc = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, uc = ["onMouseenter"], cc = { class: "min-w-0 flex-1 truncate capitalize" }, fc = { class: "tabular-nums font-medium" }, pc = { class: "text-muted-foreground w-9 text-right tabular-nums" }, m1 = /* @__PURE__ */ M({
  __name: "PieChart",
  props: {
    data: {},
    height: { default: 220 },
    type: { default: "doughnut" },
    format: {}
  },
  setup(e) {
    const o = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = x(() => o.data.reduce(($, O) => $ + O.value, 0)), s = U(null), i = x(() => o.height), d = x(() => i.value / 2 - 4), u = x(() => o.type === "doughnut" ? d.value * 0.62 : 0);
    function v($) {
      return a[$ % a.length];
    }
    function b($) {
      return 1 - Math.min(0.55, Math.floor($ / a.length) * 0.28);
    }
    const c = x(() => {
      if (r.value <= 0)
        return [];
      const $ = i.value / 2;
      let O = -Math.PI / 2;
      return o.data.map((p, g) => {
        const z = p.value / r.value, A = z * Math.PI * 2, G = O, Z = O + A;
        return O = Z, {
          ...p,
          share: z,
          colour: v(g),
          opacity: b(g),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: z >= 0.9999 ? w($) : y($, G, Z, d.value, u.value)
        };
      });
    });
    function h($, O, p) {
      return `${($ + Math.cos(O) * p).toFixed(2)},${($ + Math.sin(O) * p).toFixed(2)}`;
    }
    function y($, O, p, g, z) {
      const A = p - O > Math.PI ? 1 : 0;
      return z <= 0 ? `M${$},${$} L${h($, O, g)} A${g},${g} 0 ${A} 1 ${h($, p, g)} Z` : [
        `M${h($, O, g)}`,
        `A${g},${g} 0 ${A} 1 ${h($, p, g)}`,
        `L${h($, p, z)}`,
        `A${z},${z} 0 ${A} 0 ${h($, O, z)}`,
        "Z"
      ].join(" ");
    }
    function w($) {
      const O = d.value, p = u.value, g = [
        `M${$ - O},${$}`,
        `A${O},${O} 0 1 1 ${$ + O},${$}`,
        `A${O},${O} 0 1 1 ${$ - O},${$}`,
        "Z"
      ];
      return p <= 0 ? g.join(" ") : [
        ...g,
        `M${$ - p},${$}`,
        `A${p},${p} 0 1 0 ${$ + p},${$}`,
        `A${p},${p} 0 1 0 ${$ - p},${$}`,
        "Z"
      ].join(" ");
    }
    const _ = ($) => o.format ? o.format($) : new Intl.NumberFormat().format($), k = ($) => `${($ * 100).toFixed($ < 0.01 ? 2 : 0)}%`;
    return ($, O) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: X({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", oc, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${_(r.value)}`
      }, [
        (t(!0), n(S, null, V(c.value, (p, g) => (t(), n("path", {
          key: g,
          d: p.path,
          fill: p.colour,
          "fill-opacity": s.value === null || s.value === g ? p.opacity : p.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (z) => s.value = g,
          onMouseleave: O[0] || (O[0] = (z) => s.value = null)
        }, null, 40, sc))), 128)),
        e.type === "doughnut" ? (t(), n(S, { key: 0 }, [
          l("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(_(s.value === null ? r.value : c.value[s.value].value)), 9, rc),
          l("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : c.value[s.value].label), 9, ic)
        ], 64)) : C("", !0)
      ], 8, lc)),
      l("ul", dc, [
        (t(!0), n(S, null, V(c.value, (p, g) => (t(), n("li", {
          key: g,
          class: P(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === g ? "bg-muted" : ""]),
          onMouseenter: (z) => s.value = g,
          onMouseleave: O[1] || (O[1] = (z) => s.value = null)
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: X({ background: p.colour, opacity: p.opacity })
          }, null, 4),
          l("span", cc, f(p.label), 1),
          l("span", fc, f(_(p.value)), 1),
          l("span", pc, f(k(p.share)), 1)
        ], 42, uc))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(Fe, {
        key: 0,
        label: c.value[s.value].label,
        value: _(c.value[s.value].value),
        share: k(c.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : C("", !0)
    ]));
  }
}), mc = ["width", "height", "viewBox", "aria-label"], vc = { class: "text-border" }, hc = ["x1", "x2", "y1", "y2", "stroke-dasharray"], gc = { class: "fill-muted-foreground text-[10px]" }, bc = ["x", "y"], xc = ["x", "y"], yc = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], kc = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, v1 = /* @__PURE__ */ M({
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
    const o = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = U(null), s = U(560), i = U(null);
    let d = null;
    re(() => {
      d = new ResizeObserver((T) => {
        const N = T[0]?.contentRect.width ?? 0;
        N > 0 && (s.value = N);
      }), r.value && d.observe(r.value);
    }), de(() => d?.disconnect());
    const u = x(
      () => o.series?.length ? o.series : [{ name: "", points: o.data ?? [] }]
    ), v = (T, N) => N.color ?? a[T % a.length], b = x(() => u.value.flatMap((T) => T.points)), c = x(() => b.value.some((T) => typeof T.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, y = x(() => Math.max(10, s.value - h.left - h.right)), w = x(() => Math.max(10, o.height - h.top - h.bottom));
    function _(T) {
      if (T.length === 0)
        return [0, 1];
      const N = Math.min(...T), R = Math.max(...T), H = R - N || Math.abs(R) || 1;
      return [N - H * 0.08, R + H * 0.08];
    }
    const k = x(() => _(b.value.map((T) => T.x))), $ = x(() => _(b.value.map((T) => T.y))), O = (T) => {
      const [N, R] = k.value;
      return h.left + (T - N) / (R - N) * y.value;
    }, p = (T) => {
      const [N, R] = $.value;
      return h.top + w.value - (T - N) / (R - N) * w.value;
    }, g = x(() => Math.max(...b.value.map((T) => T.r ?? 0), 0));
    function z(T) {
      if (!c.value || !g.value)
        return 4;
      const N = Math.max(0, T.r ?? 0) / g.value;
      return 3 + Math.sqrt(N) * (o.maxRadius - 3);
    }
    function A([T, N]) {
      return Array.from({ length: 5 }, (R, H) => T + (N - T) / 4 * H);
    }
    const G = x(() => A(k.value)), Z = x(() => A($.value)), ae = (T) => o.formatX?.(T) ?? String(Math.round(T * 100) / 100), j = (T) => o.formatY?.(T) ?? String(Math.round(T * 100) / 100), L = x(() => {
      if (!i.value)
        return null;
      const T = u.value[i.value.s], N = T?.points[i.value.p];
      return N ? { series: T, point: N } : null;
    });
    return (T, N) => (t(), n("div", {
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
        "aria-label": c.value ? "Bubble chart" : "Scatter chart"
      }, [
        l("g", vc, [
          (t(!0), n(S, null, V(Z.value, (R, H) => (t(), n("line", {
            key: `gy-${H}`,
            x1: h.left,
            x2: h.left + y.value,
            y1: p(R),
            y2: p(R),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": H === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, hc))), 128))
        ]),
        l("g", gc, [
          (t(!0), n(S, null, V(Z.value, (R, H) => (t(), n("text", {
            key: `ty-${H}`,
            x: h.left - 8,
            y: p(R) + 3,
            "text-anchor": "end"
          }, f(j(R)), 9, bc))), 128)),
          (t(!0), n(S, null, V(G.value, (R, H) => (t(), n("text", {
            key: `tx-${H}`,
            x: O(R),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ae(R)), 9, xc))), 128))
        ]),
        (t(!0), n(S, null, V(u.value, (R, H) => (t(), n("g", {
          key: `s-${H}`
        }, [
          (t(!0), n(S, null, V(R.points, (ee, B) => (t(), n("circle", {
            key: `p-${H}-${B}`,
            cx: O(ee.x),
            cy: p(ee.y),
            r: z(ee),
            fill: v(H, R),
            "fill-opacity": c.value ? 0.55 : 0.85,
            stroke: v(H, R),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== H || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (K) => i.value = { s: H, p: B },
            onMouseleave: N[0] || (N[0] = (K) => i.value = null)
          }, null, 40, yc))), 128))
        ]))), 128))
      ], 8, mc)),
      L.value ? (t(), D(Fe, {
        key: 0,
        label: L.value.point.label ?? L.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ae(L.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${j(L.value.point.y)}`,
        share: c.value && L.value.point.r != null ? String(L.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : C("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", kc, [
        (t(!0), n(S, null, V(u.value, (R, H) => (t(), n("span", {
          key: `l-${H}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          l("span", {
            class: "size-2.5 rounded-full",
            style: X({ backgroundColor: v(H, R) }),
            "aria-hidden": "true"
          }, null, 4),
          Y(" " + f(R.name), 1)
        ]))), 128))
      ])) : C("", !0)
    ], 512));
  }
}), $c = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, wc = ["width", "height", "viewBox"], _c = ["points"], Cc = ["x1", "y1", "x2", "y2"], Mc = ["points", "fill", "stroke"], Sc = ["cx", "cy", "fill", "onMouseenter"], Bc = ["x", "y", "text-anchor"], zc = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Pc = { class: "truncate" }, h1 = /* @__PURE__ */ M({
  __name: "RadarChart",
  props: {
    series: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = x(
      () => o.series.map((p, g) => ({
        ...p,
        color: p.color ?? a[g % a.length]
      }))
    ), s = x(() => r.value[0]?.points.map((p) => p.label) ?? []), i = x(() => s.value.length), d = x(() => o.height), u = x(() => d.value / 2), v = x(() => d.value / 2 - 34), b = x(() => {
      const p = Math.max(...r.value.flatMap((A) => A.points.map((G) => G.value)), 0);
      if (p <= 0)
        return 1;
      const g = 10 ** Math.floor(Math.log10(p));
      return ([1, 2, 2.5, 5, 10].find((A) => p <= A * g) ?? 10) * g;
    });
    function c(p) {
      return p / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(p, g) {
      const z = c(p);
      return {
        x: u.value + Math.cos(z) * v.value * g,
        y: u.value + Math.sin(z) * v.value * g
      };
    }
    function y(p) {
      return Array.from({ length: i.value }, (g, z) => {
        const A = h(z, p);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const w = x(() => [0.25, 0.5, 0.75, 1].map((p) => ({ f: p, points: y(p) }))), _ = x(
      () => r.value.map((p) => {
        const g = p.points.map((z) => Math.max(0, z.value) / b.value);
        return {
          name: p.name,
          color: p.color,
          values: p.points,
          outline: g.map((z, A) => {
            const G = h(A, z);
            return `${G.x.toFixed(2)},${G.y.toFixed(2)}`;
          }).join(" "),
          dots: g.map((z, A) => h(A, z))
        };
      })
    ), k = x(
      () => s.value.map((p, g) => {
        const z = c(g), A = u.value + Math.cos(z) * (v.value + 14), G = u.value + Math.sin(z) * (v.value + 14), Z = Math.cos(z);
        return {
          label: p,
          x: A,
          y: G + 3,
          anchor: Math.abs(Z) < 0.2 ? "middle" : Z > 0 ? "start" : "end"
        };
      })
    ), $ = U(null), O = (p) => o.format ? o.format(p) : new Intl.NumberFormat().format(p);
    return (p, g) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: X({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", $c, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(S, null, V(w.value, (z) => (t(), n("polygon", {
          key: z.f,
          points: z.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, _c))), 128)),
        (t(!0), n(S, null, V(s.value, (z, A) => (t(), n("line", {
          key: `spoke-${A}`,
          x1: u.value,
          y1: u.value,
          x2: h(A, 1).x,
          y2: h(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Cc))), 128)),
        (t(!0), n(S, null, V(_.value, (z, A) => (t(), n("g", {
          key: `s-${A}`
        }, [
          l("polygon", {
            points: z.outline,
            fill: z.color,
            "fill-opacity": "0.16",
            stroke: z.color,
            "stroke-width": "2"
          }, null, 8, Mc),
          (t(!0), n(S, null, V(z.dots, (G, Z) => (t(), n("circle", {
            key: Z,
            cx: G.x,
            cy: G.y,
            r: "3",
            fill: z.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ae) => $.value = {
              series: z.name,
              axis: s.value[Z],
              value: z.values[Z]?.value ?? 0
            },
            onMouseleave: g[0] || (g[0] = (ae) => $.value = null)
          }, null, 40, Sc))), 128))
        ]))), 128)),
        (t(!0), n(S, null, V(k.value, (z, A) => (t(), n("text", {
          key: `l-${A}`,
          x: z.x,
          y: z.y,
          "text-anchor": z.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(z.label), 9, Bc))), 128))
      ], 8, wc)),
      e.showLegend ? (t(), n("ul", zc, [
        (t(!0), n(S, null, V(r.value, (z, A) => (t(), n("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: X({ background: z.color })
          }, null, 4),
          l("span", Pc, f(z.name), 1)
        ]))), 128))
      ])) : C("", !0),
      $.value ? (t(), D(Fe, {
        key: 1,
        label: `${$.value.series} — ${$.value.axis}`,
        value: O($.value.value)
      }, null, 8, ["label", "value"])) : C("", !0)
    ]));
  }
}), Ac = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Oc = ["width", "height", "viewBox"], Lc = ["cx", "cy", "r"], jc = ["d", "fill", "fill-opacity", "onMouseenter"], Vc = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Tc = { class: "min-w-0 flex-1 truncate capitalize" }, Dc = { class: "font-medium tabular-nums" }, g1 = /* @__PURE__ */ M({
  __name: "PolarAreaChart",
  props: {
    data: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = U(null), s = x(() => o.height), i = x(() => s.value / 2), d = x(() => s.value / 2 - 6), u = x(() => Math.max(...o.data.map((y) => Math.max(0, y.value)), 0)), v = x(() => {
      const y = o.data.length;
      if (y === 0 || u.value <= 0)
        return [];
      const w = Math.PI * 2 / y;
      return o.data.map((_, k) => {
        const $ = Math.sqrt(Math.max(0, _.value) / u.value), O = d.value * $, p = k * w - Math.PI / 2, g = p + w;
        return {
          ..._,
          color: a[k % a.length],
          share: u.value === 0 ? 0 : _.value / u.value,
          path: b(i.value, p, g, O)
        };
      });
    });
    function b(y, w, _, k) {
      if (k <= 0)
        return "";
      if (_ - w >= Math.PI * 2 - 1e-6)
        return `M${y - k},${y} A${k},${k} 0 1 1 ${y + k},${y} A${k},${k} 0 1 1 ${y - k},${y} Z`;
      const $ = _ - w > Math.PI ? 1 : 0, O = y + Math.cos(w) * k, p = y + Math.sin(w) * k, g = y + Math.cos(_) * k, z = y + Math.sin(_) * k;
      return `M${y},${y} L${O.toFixed(2)},${p.toFixed(2)} A${k.toFixed(2)},${k.toFixed(2)} 0 ${$} 1 ${g.toFixed(2)},${z.toFixed(2)} Z`;
    }
    const c = x(() => [0.5, 0.75, 1].map((y) => d.value * y)), h = (y) => o.format ? o.format(y) : new Intl.NumberFormat().format(y);
    return (y, w) => v.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: X({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Ac, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(S, null, V(c.value, (_) => (t(), n("circle", {
          key: _,
          cx: i.value,
          cy: i.value,
          r: _,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Lc))), 128)),
        (t(!0), n(S, null, V(v.value, (_, k) => (t(), n("path", {
          key: k,
          d: _.path,
          fill: _.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === k ? 0.75 : 0.3,
          onMouseenter: ($) => r.value = k,
          onMouseleave: w[0] || (w[0] = ($) => r.value = null)
        }, null, 40, jc))), 128))
      ], 8, Oc)),
      e.showLegend ? (t(), n("ul", Vc, [
        (t(!0), n(S, null, V(v.value, (_, k) => (t(), n("li", {
          key: k,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: X({ background: _.color })
          }, null, 4),
          l("span", Tc, f(_.label), 1),
          l("span", Dc, f(h(_.value)), 1)
        ]))), 128))
      ])) : C("", !0),
      r.value !== null ? (t(), D(Fe, {
        key: 1,
        label: v.value[r.value].label,
        value: h(v.value[r.value].value)
      }, null, 8, ["label", "value"])) : C("", !0)
    ]));
  }
}), Fc = ["width", "height"], Ec = ["x1", "x2", "y1", "y2"], Ic = ["x", "y"], Nc = ["x", "y"], Rc = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Hc = ["x", "y", "width", "height", "fill", "fill-opacity"], Uc = ["d", "stroke"], Kc = ["cx", "cy", "fill"], Zc = ["x", "y"], qc = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Gc = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Wc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Yc = { class: "text-xs font-semibold tabular-nums" }, Jc = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Xc = { class: "text-muted-foreground" }, b1 = /* @__PURE__ */ M({
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
    const o = e, a = U(null), r = U(560), s = U(null);
    let i = null;
    re(() => {
      i = new ResizeObserver((H) => {
        r.value = Math.max(160, H[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), de(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], v = x(
      () => o.bars.map((H, ee) => ({
        ...H,
        color: H.color ?? d[ee % d.length]
      }))
    ), b = x(
      () => o.lines.map((H, ee) => ({
        ...H,
        color: H.color ?? u[ee % u.length]
      }))
    ), c = x(
      () => v.value[0]?.points.map((H) => H.label) ?? b.value[0]?.points.map((H) => H.label) ?? []
    ), h = x(() => c.value.length), y = x(() => o.lineAxis === "right"), w = x(() => ({
      top: 12,
      right: y.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), _ = x(() => ({
      w: Math.max(1, r.value - w.value.left - w.value.right),
      h: Math.max(1, o.height - w.value.top - w.value.bottom)
    }));
    function k(H) {
      const ee = Math.max(...H, 0);
      if (ee <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(ee));
      return ([1, 2, 2.5, 5, 10].find((F) => ee <= F * B) ?? 10) * B;
    }
    const $ = x(
      () => k([
        ...v.value.flatMap((H) => H.points.map((ee) => ee.value)),
        ...y.value ? [] : b.value.flatMap((H) => H.points.map((ee) => ee.value))
      ])
    ), O = x(
      () => y.value ? k(b.value.flatMap((H) => H.points.map((ee) => ee.value))) : $.value
    ), p = x(() => _.value.w / Math.max(1, h.value)), g = x(() => p.value * 0.6), z = x(() => g.value / Math.max(1, v.value.length));
    function A(H) {
      return w.value.left + H * p.value + p.value / 2;
    }
    const G = x(
      () => v.value.flatMap(
        (H, ee) => H.points.map((B, K) => {
          const F = Math.max(0, B.value) / $.value * _.value.h;
          return {
            x: A(K) - g.value / 2 + ee * z.value,
            y: w.value.top + _.value.h - F,
            w: Math.max(0, z.value - 2),
            h: F,
            color: H.color,
            index: K,
            name: H.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), Z = x(
      () => b.value.map((H) => {
        const ee = H.points.map((B, K) => ({
          x: A(K),
          y: w.value.top + _.value.h - Math.max(0, B.value) / O.value * _.value.h,
          value: B.value
        }));
        return {
          ...H,
          pts: ee,
          d: ee.map((B, K) => `${K === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ae = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((H) => ({
        y: w.value.top + _.value.h * H,
        left: $.value * (1 - H),
        right: O.value * (1 - H)
      }))
    ), j = x(() => Math.max(1, Math.ceil(h.value / 10)));
    function L(H) {
      return H === h.value - 1 || H % j.value === 0;
    }
    const T = (H) => o.format ? o.format(H) : N(H);
    function N(H) {
      return Math.abs(H) >= 1e6 ? `${(H / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(H) >= 1e3 ? `${(H / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(H * 100) / 100);
    }
    const R = x(() => {
      if (s.value === null)
        return null;
      const H = s.value;
      return {
        label: c.value[H],
        rows: [
          ...v.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[H]?.value ?? 0
          })),
          ...b.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[H]?.value ?? 0
          }))
        ]
      };
    });
    return (H, ee) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: X({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(S, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: ee[0] || (ee[0] = (B) => s.value = null)
        }, [
          (t(!0), n(S, null, V(ae.value, (B) => (t(), n("line", {
            key: `g-${B.y}`,
            x1: w.value.left,
            x2: r.value - w.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Ec))), 128)),
          (t(!0), n(S, null, V(ae.value, (B) => (t(), n("text", {
            key: `lt-${B.y}`,
            x: w.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(N(B.left)), 9, Ic))), 128)),
          y.value ? (t(!0), n(S, { key: 0 }, V(ae.value, (B) => (t(), n("text", {
            key: `rt-${B.y}`,
            x: r.value - w.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(N(B.right)), 9, Nc))), 128)) : C("", !0),
          (t(!0), n(S, null, V(c.value, (B, K) => (t(), n("rect", {
            key: `hit-${K}`,
            x: w.value.left + K * p.value,
            y: w.value.top,
            width: p.value,
            height: _.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === K ? 0.4 : 0,
            onMouseenter: (F) => s.value = K
          }, null, 40, Rc))), 128)),
          (t(!0), n(S, null, V(G.value, (B, K) => (t(), n("rect", {
            key: `b-${K}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Hc))), 128)),
          (t(!0), n(S, null, V(Z.value, (B, K) => (t(), n("g", {
            key: `l-${K}`
          }, [
            l("path", {
              d: B.d,
              fill: "none",
              stroke: B.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Uc),
            s.value !== null && B.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Kc)) : C("", !0)
          ]))), 128)),
          (t(!0), n(S, null, V(c.value, (B, K) => oe((t(), n("text", {
            key: `x-${K}`,
            x: A(K),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(B), 9, Zc)), [
            [Ce, L(K)]
          ])), 128))
        ], 40, Fc)),
        R.value ? (t(), n("div", qc, [
          l("p", Gc, f(R.value.label), 1),
          (t(!0), n(S, null, V(R.value.rows, (B, K) => (t(), n("div", {
            key: K,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: X({ background: B.color })
            }, null, 4),
            l("span", Wc, f(B.name), 1),
            l("span", Yc, f(T(B.value)), 1)
          ]))), 128))
        ])) : C("", !0),
        e.showLegend ? (t(), n("div", Jc, [
          (t(!0), n(S, null, V([...v.value, ...b.value], (B, K) => (t(), n("span", {
            key: K,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: X({ background: B.color })
            }, null, 4),
            l("span", Xc, f(B.name), 1)
          ]))), 128))
        ])) : C("", !0)
      ], 64))
    ], 512));
  }
}), Qc = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, ef = { class: "text-muted-foreground" }, tf = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, af = ["width", "height"], nf = ["x", "y"], of = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], lf = ["x", "y"], sf = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, rf = { class: "text-[11px] font-medium capitalize" }, df = { class: "text-muted-foreground text-[11px] capitalize" }, uf = { class: "text-sm font-semibold tabular-nums" }, cf = { class: "text-muted-foreground text-xs font-normal" }, x1 = /* @__PURE__ */ M({
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
    const o = e, a = U(null), r = U(560), s = U(null);
    let i = null;
    re(() => {
      i = new ResizeObserver((g) => {
        r.value = Math.max(160, g[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), de(() => i?.disconnect());
    const d = x(() => o.series[0]?.points.map((g) => g.label) ?? []), u = x(() => o.series.length), v = x(() => d.value.length), b = x(() => Math.min(140, Math.max(60, r.value * 0.16))), c = x(() => Math.max(1, r.value - b.value - 8)), h = x(() => c.value / Math.max(1, v.value)), y = x(() => Math.max(1, (o.height - 8) / Math.max(1, u.value)));
    function w(g) {
      if (g === 0)
        return "var(--muted)";
      const z = Math.max(1, o.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(g / z * 100)}%, var(--muted))`;
    }
    function _(g) {
      for (let z = 0; z < o.buckets.length; z++) {
        const A = o.buckets[z].max;
        if (A === void 0 || g < A)
          return z;
      }
      return o.buckets.length - 1;
    }
    const k = x(
      () => o.series.flatMap(
        (g, z) => g.points.map((A, G) => {
          const Z = _(A.value);
          return {
            row: z,
            col: G,
            x: b.value + G * h.value,
            y: 4 + z * y.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, y.value - 4),
            colour: w(Z),
            label: A.label,
            value: A.value,
            rowName: g.name,
            bucketLabel: o.buckets[Z].label
          };
        })
      )
    ), $ = x(() => h.value < 2), O = x(() => s.value ? k.value.find((g) => g.row === s.value.row && g.col === s.value.col) ?? null : null), p = (g) => o.format ? o.format(g) : new Intl.NumberFormat().format(g);
    return (g, z) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || v.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: X({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(S, { key: 1 }, [
        l("div", Qc, [
          (t(!0), n(S, null, V(e.buckets, (A, G) => (t(), n("span", {
            key: G,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            l("span", {
              class: "size-3 rounded-sm border",
              style: X({ background: w(G) })
            }, null, 4),
            l("span", ef, f(A.label), 1)
          ]))), 128))
        ]),
        $.value ? (t(), n("p", tf, f(v.value) + " columns - too many to label individually ", 1)) : C("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: z[0] || (z[0] = (A) => s.value = null)
        }, [
          (t(!0), n(S, null, V(e.series, (A, G) => (t(), n("text", {
            key: `r-${G}`,
            x: b.value - 10,
            y: 4 + G * y.value + y.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(A.name), 9, nf))), 128)),
          (t(!0), n(S, null, V(k.value, (A, G) => (t(), n("rect", {
            key: G,
            x: A.x,
            y: A.y,
            width: A.w,
            height: A.h,
            fill: A.colour,
            "fill-opacity": s.value === null || s.value.row === A.row && s.value.col === A.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (Z) => s.value = { row: A.row, col: A.col }
          }, null, 40, of))), 128)),
          e.showColumnLabels && !$.value ? (t(!0), n(S, { key: 0 }, V(d.value, (A, G) => (t(), n("text", {
            key: `c-${G}`,
            x: b.value + G * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(A), 9, lf))), 128)) : C("", !0)
        ], 40, af)),
        O.value ? (t(), n("div", sf, [
          l("p", rf, f(O.value.label), 1),
          l("p", df, f(O.value.rowName), 1),
          l("p", uf, [
            Y(f(p(O.value.value)) + " ", 1),
            l("span", cf, "(" + f(O.value.bucketLabel) + ")", 1)
          ])
        ])) : C("", !0)
      ], 64))
    ], 512));
  }
}), ff = ["viewBox"], pf = { key: 0 }, mf = ["id"], vf = ["stop-color"], hf = ["stop-color"], gf = ["d", "fill"], bf = ["d", "stroke"], xt = 100, je = 30, Dt = /* @__PURE__ */ M({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, a = Math.random().toString(36).slice(2, 9), r = x(() => {
      const u = o.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const v = Math.min(...u), c = Math.max(...u) - v || 1;
      return u.map((h, y) => ({
        x: y / (u.length - 1) * xt,
        y: je - (h - v) / c * (je - 4) - 2
      }));
    });
    function s(u) {
      const v = u.length;
      if (v < 2)
        return "";
      const b = [], c = [];
      for (let w = 0; w < v - 1; w++)
        b[w] = u[w + 1].x - u[w].x, c[w] = b[w] === 0 ? 0 : (u[w + 1].y - u[w].y) / b[w];
      const h = [c[0]];
      for (let w = 1; w < v - 1; w++)
        if (c[w - 1] * c[w] <= 0)
          h[w] = 0;
        else {
          const _ = 2 * b[w] + b[w - 1], k = b[w] + 2 * b[w - 1];
          h[w] = (_ + k) / (_ / c[w - 1] + k / c[w]);
        }
      h[v - 1] = c[v - 2];
      let y = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let w = 0; w < v - 1; w++) {
        const _ = b[w] / 3;
        y += ` C${(u[w].x + _).toFixed(2)},${(u[w].y + h[w] * _).toFixed(2)} ${(u[w + 1].x - _).toFixed(2)},${(u[w + 1].y - h[w + 1] * _).toFixed(2)} ${u[w + 1].x.toFixed(2)},${u[w + 1].y.toFixed(2)}`;
      }
      return y;
    }
    const i = x(() => {
      const u = r.value;
      return u.length < 2 ? "" : o.smooth ? s(u) : u.map((v, b) => `${b === 0 ? "M" : "L"}${v.x.toFixed(2)},${v.y.toFixed(2)}`).join(" ");
    }), d = x(() => {
      const u = r.value;
      return !o.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${je} L${u[0].x.toFixed(2)},${je} Z`;
    });
    return (u, v) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${xt} ${je}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: X({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", pf, [
        l("linearGradient", {
          id: `pk-spark-${m(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          l("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, vf),
          l("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, hf)
        ], 8, mf)
      ])) : C("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${m(a)})`
      }, null, 8, gf)) : C("", !0),
      l("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, bf)
    ], 12, ff)) : C("", !0);
  }
}), xf = { class: "flex items-center gap-1 text-xs" }, yf = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, kf = {
  key: 0,
  class: "text-muted-foreground truncate"
}, $f = /* @__PURE__ */ M({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, a = x(() => o.direction === "flat" ? null : o.direction === "new" ? !o.inverted : o.inverted ? o.direction === "down" : o.direction === "up"), r = x(
      () => a.value === null ? "text-muted-foreground" : a.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = x(
      () => o.direction === "flat" ? "→" : o.direction === "down" ? "▼" : "▲"
    ), i = x(() => o.direction === "new" ? "New" : o.percentage === null ? "-" : `${Math.abs(o.percentage)}%`);
    return (d, u) => (t(), n("span", xf, [
      l("span", {
        class: P(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        l("span", yf, f(s.value), 1),
        Y(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", kf, f(e.comparison), 1)) : C("", !0)
    ]));
  }
}), wf = ["aria-label"], Be = /* @__PURE__ */ M({
  __name: "PkSkeleton",
  props: {
    variant: { default: "text" },
    count: { default: 1 },
    height: {},
    label: { default: "Loading" }
  },
  setup(e) {
    const o = e, a = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = x(() => a[o.variant] ?? a.text), s = x(() => Math.max(1, Math.min(o.count, 50)));
    function i(d) {
      if (!(o.variant !== "text" || s.value === 1))
        return d === s.value - 1 ? "60%" : void 0;
    }
    return (d, u) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: X(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(S, null, V(s.value, (v) => (t(), n("span", {
        key: v,
        "aria-hidden": "true",
        class: P(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: X({
          width: i(v - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, wf));
  }
}), _f = { class: "bg-card flex flex-col gap-3 rounded-lg border p-4" }, Cf = { class: "flex flex-wrap items-start justify-between gap-2" }, Mf = { class: "min-w-0" }, Sf = { class: "text-sm font-medium" }, Bf = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, zf = {
  key: 0,
  class: "bg-muted/60 flex shrink-0 items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Pf = ["aria-pressed", "onClick"], y1 = /* @__PURE__ */ M({
  __name: "ChartCard",
  props: {
    label: {},
    description: { default: null },
    periods: { default: null },
    period: {},
    loading: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    bodyHeight: { default: 220 }
  },
  emits: ["update:period"],
  setup(e) {
    return (o, a) => (t(), n("div", _f, [
      l("div", Cf, [
        l("div", Mf, [
          l("p", Sf, f(e.label), 1),
          e.description ? (t(), n("p", Bf, f(e.description), 1)) : C("", !0),
          I(o.$slots, "trend")
        ]),
        e.periods && e.periods.length ? (t(), n("div", zf, [
          (t(!0), n(S, null, V(e.periods, (r) => (t(), n("button", {
            key: r.value,
            type: "button",
            class: P([
              "rounded px-2 py-1 text-xs transition-colors",
              e.period === r.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-pressed": e.period === r.value,
            onClick: (s) => o.$emit("update:period", r.value)
          }, f(r.label), 11, Pf))), 128))
        ])) : C("", !0)
      ]),
      l("div", {
        style: X({ minHeight: `${e.bodyHeight}px` }),
        class: "flex flex-col justify-center"
      }, [
        e.loading ? (t(), D(Be, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: X({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : I(o.$slots, "default", {}, void 0, void 0, 2)
      ], 4)
    ]));
  }
}), Af = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Of = { class: "flex flex-1 flex-col gap-1 p-4" }, Lf = { class: "text-muted-foreground relative text-xs font-medium" }, jf = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Vf = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Tf = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Df = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, k1 = /* @__PURE__ */ M({
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
    const o = (a) => typeof a == "number" ? new Intl.NumberFormat().format(a) : String(a ?? "-");
    return (a, r) => (t(), n("div", Af, [
      l("div", Of, [
        l("p", Lf, f(e.label), 1),
        e.loading ? (t(), D(Be, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", jf, " Could not load ")) : (t(), n("span", Vf, f(o(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D($f, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", Tf, f(e.description), 1)) : C("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Df, [
        W(Dt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : C("", !0)
    ]));
  }
}), Ff = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Ef = { class: "flex flex-col gap-1 p-4" }, If = { class: "flex items-start justify-between gap-2" }, Nf = { class: "text-sm font-medium" }, Rf = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Hf = { class: "mt-1 flex flex-wrap items-center gap-2" }, Uf = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Kf = {
  key: 0,
  class: "-mb-px"
}, $1 = /* @__PURE__ */ M({
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
    const o = e, a = x(() => o.delta === null || o.delta === 0 ? null : o.inverted ? o.delta < 0 : o.delta > 0), r = x(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = x(
      () => typeof o.value == "number" ? new Intl.NumberFormat().format(o.value) : o.value
    );
    return (i, d) => (t(), n("div", Ff, [
      l("div", Ef, [
        l("div", If, [
          l("p", Nf, f(e.label), 1),
          I(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Rf, f(e.caption), 1)) : C("", !0),
        l("div", Hf, [
          e.loading ? (t(), D(Be, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Uf, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: P(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : C("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Kf, [
        W(Dt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : C("", !0)
    ]));
  }
}), Zf = { class: "relative flex flex-col gap-2" }, qf = ["aria-label"], Gf = ["onMouseenter"], Wf = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Yf = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, Jf = { class: "truncate" }, Xf = { class: "text-sm font-semibold tabular-nums" }, w1 = /* @__PURE__ */ M({
  __name: "SegmentedBar",
  props: {
    segments: {},
    total: { default: null },
    format: {},
    showLegend: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const o = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = x(() => o.segments.reduce((b, c) => b + Math.max(0, c.value), 0)), s = x(() => Math.max(o.total ?? r.value, r.value, 1)), i = x(
      () => o.segments.map((b, c) => {
        const h = Math.max(0, b.value) / s.value;
        return {
          ...b,
          color: b.color ?? a[c % a.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: b.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (b) => o.format ? o.format(b) : new Intl.NumberFormat().format(b), u = U(null), v = (b) => `${(b * 100).toFixed(b > 0 && b < 0.01 ? 1 : 0)}%`;
    return (b, c) => (t(), n("div", Zf, [
      l("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: X({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), n(S, null, V(i.value, (h, y) => (t(), n("span", {
          key: y,
          class: P(["h-full transition-all", [
            y === 0 ? "rounded-l-full" : "",
            y === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: X({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === y ? 1 : 0.4
          }),
          onMouseenter: (w) => u.value = y,
          onMouseleave: c[0] || (c[0] = (w) => u.value = null)
        }, null, 46, Gf))), 128))
      ], 12, qf),
      e.showLegend ? (t(), n("div", Wf, [
        (t(!0), n(S, null, V(i.value, (h, y) => (t(), n("div", {
          key: y,
          class: "flex min-w-0 flex-col"
        }, [
          l("span", Yf, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: X({ background: h.color })
            }, null, 4),
            l("span", Jf, f(h.label), 1)
          ]),
          l("span", Xf, f(d(h.value)), 1)
        ]))), 128))
      ])) : C("", !0),
      u.value !== null ? (t(), D(Fe, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: v(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : C("", !0)
    ]));
  }
}), Qf = { class: "bg-border relative shrink-0 overflow-hidden rounded-xl border" }, ep = ["aria-pressed", "aria-label", "title"], tp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ap = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, np = { class: "flex h-8 items-center" }, op = ["aria-label"], lp = {
  key: 2,
  class: "truncate text-2xl font-semibold tabular-nums"
}, sp = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, _1 = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(a.maskable ? a.hidden : !1), i = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, d = x(() => i[a.columns] ?? i[4]);
    function u() {
      s.value = !s.value, r("toggle", s.value);
    }
    function v(b) {
      return typeof b == "number" ? new Intl.NumberFormat().format(b) : b;
    }
    return (b, c) => (t(), n("div", Qf, [
      e.maskable ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
        "aria-pressed": s.value,
        "aria-label": s.value ? "Show values" : "Hide values",
        title: s.value ? "Show values" : "Hide values",
        onClick: u
      }, [
        (t(), n("svg", tp, [
          s.value ? (t(), n(S, { key: 0 }, [
            c[0] || (c[0] = l("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
            c[1] || (c[1] = l("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
            c[2] || (c[2] = l("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
            c[3] || (c[3] = l("path", { d: "m3 3 18 18" }, null, -1))
          ], 64)) : (t(), n(S, { key: 1 }, [
            c[4] || (c[4] = l("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
            c[5] || (c[5] = l("circle", {
              cx: "12",
              cy: "12",
              r: "3"
            }, null, -1))
          ], 64))
        ]))
      ], 8, ep)) : C("", !0),
      l("div", {
        class: P(["grid gap-px", d.value])
      }, [
        (t(!0), n(S, null, V(e.segments, (h) => (t(), n("div", {
          key: h.key,
          class: "bg-card flex flex-col gap-2 p-4"
        }, [
          l("p", ap, f(h.label), 1),
          l("div", np, [
            e.loading ? (t(), D(Be, {
              key: 0,
              variant: "number"
            })) : s.value ? (t(), n("span", {
              key: 1,
              class: "flex items-center gap-1.5",
              role: "img",
              "aria-label": `${h.label} hidden`
            }, [
              (t(), n(S, null, V(5, (y) => l("span", {
                key: y,
                class: "bg-muted-foreground/70 size-1.5 rounded-full"
              })), 64))
            ], 8, op)) : (t(), n("span", lp, f(v(h.value)), 1))
          ]),
          h.caption ? (t(), n("p", sp, f(h.caption), 1)) : C("", !0)
        ]))), 128))
      ], 2)
    ]));
  }
}), rp = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, ip = { class: "flex items-center justify-between gap-2" }, dp = ["href"], up = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, cp = { class: "flex flex-col gap-0.5" }, fp = { class: "text-sm font-medium" }, pp = { class: "text-xs text-muted-foreground" }, mp = {
  key: 1,
  class: "flex flex-col gap-2"
}, vp = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, hp = { class: "flex flex-col gap-0.5" }, gp = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, C1 = /* @__PURE__ */ M({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: {}
  },
  setup(e) {
    const o = e, a = o.items.find((s) => !s.done) ?? null, r = o.items.filter((s) => s.key !== a?.key);
    return (s, i) => e.items.length ? (t(), n("section", rp, [
      l("div", ip, [
        i[0] || (i[0] = l("h2", { class: "text-sm font-semibold" }, "Setup checklist", -1)),
        e.reportHref ? (t(), n("a", {
          key: 0,
          href: e.reportHref,
          class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
        }, " Full report ", 8, dp)) : C("", !0)
      ]),
      m(a) ? (t(), n("div", up, [
        i[1] || (i[1] = l("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        l("div", cp, [
          l("p", fp, f(m(a).title), 1),
          l("p", pp, f(m(a).detail), 1)
        ])
      ])) : C("", !0),
      m(r).length ? (t(), n("ul", mp, [
        (t(!0), n(S, null, V(m(r), (d) => (t(), n("li", {
          key: d.key,
          class: "flex items-start gap-3"
        }, [
          l("span", {
            class: P([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              d.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            d.done ? (t(), n("svg", vp, [...i[2] || (i[2] = [
              l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : C("", !0)
          ], 2),
          l("div", hp, [
            l("p", {
              class: P(["text-sm", d.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(d.title), 3),
            d.done ? C("", !0) : (t(), n("p", gp, f(d.detail), 1))
          ])
        ]))), 128))
      ])) : C("", !0)
    ])) : C("", !0);
  }
}), bp = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, xp = { class: "flex items-center gap-2" }, yp = { class: "font-medium tabular-nums" }, kp = { class: "ml-auto flex items-center gap-3" }, M1 = /* @__PURE__ */ M({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: o }) {
    const a = o, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), n("div", bp, [
      l("div", xp, [
        I(s.$slots, "actions")
      ]),
      l("span", yp, [
        e.allMatching ? (t(), n(S, { key: 0 }, [
          Y(" All " + f(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(S, { key: 1 }, [
          Y(f(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      l("div", kp, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: i[0] || (i[0] = (d) => a("select-all-matching"))
        }, " Select all " + f(r(e.total)), 1)) : C("", !0),
        l("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: i[1] || (i[1] = (d) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), $p = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, wp = { class: "text-muted-foreground text-xs tabular-nums" }, _p = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Cp = ["value"], Mp = ["value"], Sp = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Bp = ["disabled"], zp = ["disabled"], Pp = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Ap = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Op = ["disabled"], S1 = /* @__PURE__ */ M({
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
    const a = e, r = o, s = (v) => new Intl.NumberFormat().format(v), i = x(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = x(() => (a.page - 1) * a.perPage + a.rowsOnPage), u = x(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (v, b) => (t(), n("div", $p, [
      l("p", wp, [
        Y(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(S, { key: 0 }, [
          Y("of " + f(s(e.total)), 1)
        ], 64)) : C("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", _p, [
        b[4] || (b[4] = l("span", null, "Per page", -1)),
        l("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: b[0] || (b[0] = (c) => r("update:perPage", Number(c.target.value)))
        }, [
          (t(!0), n(S, null, V(e.perPageOptions, (c) => (t(), n("option", {
            key: c,
            value: c
          }, f(c), 9, Mp))), 128))
        ], 40, Cp)
      ])) : C("", !0),
      l("nav", Sp, [
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: b[1] || (b[1] = (c) => r("first"))
        }, [...b[5] || (b[5] = [
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
        ])], 8, Bp),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: b[2] || (b[2] = (c) => r("previous"))
        }, [...b[6] || (b[6] = [
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
        ])], 8, zp),
        l("span", Pp, f(e.page), 1),
        u.value !== null ? (t(), n("span", Ap, " of " + f(s(u.value)), 1)) : C("", !0),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: b[3] || (b[3] = (c) => r("next"))
        }, [...b[7] || (b[7] = [
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
        ])], 8, Op)
      ])
    ]));
  }
}), Lp = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, jp = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, Vp = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, Tp = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, B1 = /* @__PURE__ */ M({
  __name: "TableShell",
  setup(e) {
    return (o, a) => (t(), n("div", Lp, [
      o.$slots.tabs ? (t(), n("div", jp, [
        I(o.$slots, "tabs")
      ])) : C("", !0),
      o.$slots.toolbar ? (t(), n("div", Vp, [
        I(o.$slots, "toolbar")
      ])) : C("", !0),
      I(o.$slots, "default"),
      o.$slots.pagination ? (t(), n("div", Tp, [
        I(o.$slots, "pagination")
      ])) : C("", !0)
    ]));
  }
}), Dp = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Fp = ["aria-current"], Ep = ["title"], Ip = ["aria-current", "onClick"], Np = ["title"], Rp = /* @__PURE__ */ M({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: o }) {
    const a = o;
    function r(s) {
      return s >= 1e6 ? (s / 1e6).toFixed(s % 1e6 === 0 ? 0 : 1) + "M" : s >= 1e4 ? Math.round(s / 1e3) + "k" : new Intl.NumberFormat().format(s);
    }
    return (s, i) => (t(), n("div", Dp, [
      l("button", {
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => a("select", null))
      }, [
        i[1] || (i[1] = Y(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Ep)) : (t(), D(Be, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Fp),
      (t(!0), n(S, null, V(e.tabs, (d) => (t(), n("button", {
        key: d,
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => a("select", d)
      }, [
        Y(f(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, Np)) : (t(), D(Be, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Ip))), 128))
    ]));
  }
}), z1 = /* @__PURE__ */ st(Rp, [["__scopeId", "data-v-3967c945"]]), Hp = { class: "flex flex-wrap items-center justify-end gap-2" }, Up = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Kp = ["placeholder", "title", "aria-label"], Zp = ["aria-label"], qp = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Gp = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Wp = { class: "text-xs font-medium" }, Yp = ["value", "onChange"], Jp = ["value"], Xp = { class: "grid grid-cols-2 gap-2" }, Qp = ["value", "onChange"], em = ["value", "onChange"], tm = {
  key: 3,
  class: "flex items-center gap-2"
}, am = ["aria-checked", "onClick"], nm = { class: "text-xs" }, om = ["onClick"], lm = ["value", "onChange"], sm = ["value"], rm = ["disabled", "onClick"], im = { class: "flex items-center justify-between px-1 pt-1 pb-2" }, dm = { class: "flex max-h-80 flex-col gap-0.5 overflow-y-auto px-1 pb-3" }, um = ["checked", "disabled", "onChange"], cm = ["onClick"], fm = ["aria-pressed", "aria-label", "title"], pm = {
  key: 3,
  class: "text-muted-foreground shrink-0 text-xs"
}, P1 = /* @__PURE__ */ M({
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
  setup(e, { emit: o }) {
    const a = e, r = o, s = U(a.search);
    ie(
      () => a.search,
      (j) => {
        j !== s.value && (s.value = j);
      }
    );
    let i;
    ie(s, (j) => {
      clearTimeout(i), i = setTimeout(() => {
        j !== a.search && r("update:search", j);
      }, 250);
    });
    const d = U({ ...a.filters });
    ie(
      () => a.filters,
      (j) => {
        d.value = { ...j };
      },
      { deep: !0 }
    );
    const u = x(
      () => a.filterSchema.filter(
        (j) => a.filters[j.key] !== null && a.filters[j.key] !== void 0
      ).length
    ), v = x(() => JSON.stringify(d.value) !== JSON.stringify(a.filters)), b = x(() => a.search !== "" || u.value > 0);
    function c(j) {
      return j.type === "multiselect";
    }
    function h(j) {
      const L = d.value[j.key];
      return Array.isArray(L) ? L : L == null ? [] : [L];
    }
    function y(j) {
      return h(j).filter(
        (L) => typeof L == "string" || typeof L == "number"
      );
    }
    function w(j) {
      return z(j).flatMap(
        (L) => typeof L.value == "string" || typeof L.value == "number" ? [{ value: L.value, label: L.label }] : []
      );
    }
    function _(j, L) {
      d.value = { ...d.value, [j.key]: L === "" ? null : L };
    }
    function k(j, L) {
      const T = d.value[j.key];
      if (typeof T != "string" || !T.includes(".."))
        return "";
      const [N, R] = T.split("..");
      return L === "from" ? N ?? "" : R ?? "";
    }
    function $(j, L, T) {
      const N = L === "from" ? T : k(j, "from"), R = L === "to" ? T : k(j, "to");
      d.value = {
        ...d.value,
        [j.key]: N && R ? `${N}..${R}` : null
      };
    }
    function O(j) {
      r("apply-filters", { ...d.value }), j();
    }
    function p(j, L) {
      d.value[j] = L, r("apply-filters", { ...d.value });
    }
    function g() {
      d.value = Object.fromEntries(a.filterSchema.map((j) => [j.key, null]));
    }
    function z(j) {
      return j.type === "boolean" ? [
        { value: !0, label: j.trueLabel ?? "Yes" },
        { value: !1, label: j.falseLabel ?? "No" }
      ] : j.type === "daterange" ? Object.entries(j.presets ?? {}).map(([L, T]) => ({
        value: L,
        label: T
      })) : (j.options ?? []).map((L) => ({ value: L, label: L }));
    }
    const A = U(new Set(a.hidden));
    ie(
      () => a.hidden,
      (j) => {
        A.value = new Set(j);
      },
      { deep: !0 }
    );
    function G(j) {
      const L = new Set(A.value);
      L.has(j) ? L.delete(j) : L.add(j), A.value = L;
    }
    function Z(j) {
      r("apply-columns", [...A.value]), j();
    }
    function ae() {
      s.value = "", r("clear");
    }
    return (j, L) => (t(), n("div", Hp, [
      l("div", Up, [
        L[5] || (L[5] = l("svg", {
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
        oe(l("input", {
          "onUpdate:modelValue": L[0] || (L[0] = (T) => s.value = T),
          type: "search",
          placeholder: e.searchPlaceholder,
          title: e.searchHint,
          "aria-label": e.searchHint ?? e.searchPlaceholder,
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
        }, null, 8, Kp), [
          [_e, s.value]
        ]),
        s.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
          "aria-label": "Clear search",
          onClick: L[1] || (L[1] = (T) => s.value = "")
        }, [...L[4] || (L[4] = [
          l("svg", {
            viewBox: "0 0 24 24",
            class: "size-3.5",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [
            l("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])])) : C("", !0)
      ]),
      e.filterSchema.length ? (t(), D(Ee, {
        key: 0,
        width: "w-80",
        "dismiss-on-panel-click": !1
      }, {
        trigger: E(() => [
          l("button", {
            type: "button",
            dusk: "filters-trigger",
            class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", u.value ? "border-primary text-primary" : ""]),
            "aria-label": u.value ? `Filters (${u.value} active)` : "Filters",
            title: "Filters"
          }, [
            L[6] || (L[6] = l("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, [
              l("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            u.value ? (t(), n("span", qp, f(u.value), 1)) : C("", !0)
          ], 10, Zp)
        ]),
        panel: E(({ close: T }) => [
          l("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
            L[7] || (L[7] = l("span", { class: "text-sm font-semibold" }, "Filters", -1)),
            l("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: g
            }, " Reset ")
          ]),
          L[10] || (L[10] = l("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
          l("div", Gp, [
            (t(!0), n(S, null, V(e.filterSchema, (N) => (t(), n("div", {
              key: N.key,
              class: "flex flex-col gap-1.5"
            }, [
              l("label", Wp, f(N.label), 1),
              c(N) ? (t(), D(Lt, {
                key: 0,
                "model-value": y(N),
                options: w(N),
                placeholder: `Any ${N.label.toLowerCase()}`,
                "onUpdate:modelValue": (R) => d.value[N.key] = R.length ? R : null
              }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : N.type === "querybuilder" ? (t(), D(Fo, {
                key: 1,
                "model-value": d.value[N.key] ?? null,
                fields: N.fields ?? {},
                operators: N.operators ?? {},
                "max-depth": N.maxDepth ?? 5,
                onApply: (R) => p(N.key, R)
              }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : N.type === "daterange" ? (t(), n(S, { key: 2 }, [
                l("select", {
                  value: typeof d.value[N.key] == "string" && !String(d.value[N.key]).includes("..") ? d.value[N.key] : "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                  onChange: (R) => _(N, R.target.value)
                }, [
                  L[8] || (L[8] = l("option", { value: "" }, "Any time", -1)),
                  (t(!0), n(S, null, V(z(N), (R) => (t(), n("option", {
                    key: String(R.value),
                    value: R.value
                  }, f(R.label), 9, Jp))), 128))
                ], 40, Yp),
                l("div", Xp, [
                  l("input", {
                    type: "date",
                    value: k(N, "from"),
                    "aria-label": "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (R) => $(
                      N,
                      "from",
                      R.target.value
                    )
                  }, null, 40, Qp),
                  l("input", {
                    type: "date",
                    value: k(N, "to"),
                    "aria-label": "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (R) => $(
                      N,
                      "to",
                      R.target.value
                    )
                  }, null, 40, em)
                ])
              ], 64)) : N.type === "boolean" ? (t(), n("div", tm, [
                l("button", {
                  type: "button",
                  role: "switch",
                  "aria-checked": d.value[N.key] === !0,
                  class: P([
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    d.value[N.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                  ]),
                  onClick: (R) => _(N, d.value[N.key] === !0 ? null : !0)
                }, [
                  l("span", {
                    class: P(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[N.key] === !0 ? "left-4.5" : "left-0.5"])
                  }, null, 2)
                ], 10, am),
                l("span", nm, f(N.trueLabel ?? "Yes"), 1),
                l("button", {
                  type: "button",
                  class: P([
                    "text-muted-foreground ml-auto text-xs hover:underline",
                    d.value[N.key] === !1 ? "text-primary font-medium" : ""
                  ]),
                  onClick: (R) => _(N, d.value[N.key] === !1 ? null : !1)
                }, f(N.falseLabel ?? "No") + " only ", 11, om)
              ])) : (t(), n("select", {
                key: 4,
                value: d.value[N.key] ?? "",
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                onChange: (R) => _(N, R.target.value)
              }, [
                L[9] || (L[9] = l("option", { value: "" }, "All", -1)),
                (t(!0), n(S, null, V(z(N), (R) => (t(), n("option", {
                  key: String(R.value),
                  value: R.value
                }, f(R.label), 9, sm))), 128))
              ], 40, lm))
            ]))), 128))
          ]),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
            disabled: !v.value,
            onClick: (N) => O(T)
          }, " Apply filters ", 8, rm)
        ]),
        _: 1
      })) : C("", !0),
      W(Ee, null, {
        trigger: E(() => [...L[11] || (L[11] = [
          l("button", {
            type: "button",
            class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
            "aria-label": "Columns",
            title: "Columns"
          }, [
            l("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
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
            ])
          ], -1)
        ])]),
        panel: E(({ close: T }) => [
          l("div", im, [
            L[12] || (L[12] = l("span", { class: "text-sm font-semibold" }, "Columns", -1)),
            l("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: L[2] || (L[2] = (N) => A.value = /* @__PURE__ */ new Set())
            }, " Reset ")
          ]),
          l("div", dm, [
            (t(!0), n(S, null, V(e.columns, (N) => (t(), n("label", {
              key: N.key,
              class: P(["hover:bg-accent flex items-center gap-2.5 rounded px-2 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"])
            }, [
              l("input", {
                type: "checkbox",
                class: "accent-primary size-4",
                checked: !A.value.has(N.key),
                disabled: N.locked,
                onChange: (R) => G(N.key)
              }, null, 40, um),
              Y(" " + f(N.label), 1)
            ], 2))), 128))
          ]),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-full rounded-md text-sm font-medium transition-colors",
            onClick: (N) => Z(T)
          }, " Apply columns ", 8, cm)
        ]),
        _: 1
      }),
      e.reorderable ? (t(), n("button", {
        key: 1,
        type: "button",
        class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
        "aria-pressed": e.reordering,
        "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
        title: e.reordering ? "Finish reordering" : "Reorder records",
        onClick: L[3] || (L[3] = (T) => r("toggle-reorder"))
      }, [...L[13] || (L[13] = [
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
      ])], 10, fm)) : C("", !0),
      b.value ? (t(), n("button", {
        key: 2,
        type: "button",
        class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
        onClick: ae
      }, " Clear ")) : C("", !0),
      e.loading ? (t(), n("span", pm, "Loading…")) : C("", !0)
    ]));
  }
}), mm = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, vm = { class: "grid gap-2" }, hm = {
  key: 0,
  class: "text-destructive text-sm"
}, gm = { class: "flex gap-2" }, A1 = /* @__PURE__ */ M({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: o }) {
    const a = o, s = U((() => {
      const y = navigator.userAgent, w = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: k }) => k.test(y))?.name, _ = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: k }) => k.test(y))?.name;
      return [w, _].filter(Boolean).join(" on ") || "";
    })()), i = U(!1), d = Ht(null), u = x(() => d.value?.isLoading.value ?? !1), v = x(() => d.value?.error.value ?? null), b = x(() => d.value?.isSupported.value ?? !1);
    re(async () => {
      try {
        const { usePasskeyRegister: y } = await import("@laravel/passkeys/vue");
        d.value = y({
          onSuccess: () => {
            s.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        d.value = null;
      }
    });
    const c = async (y) => {
      y.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (y, w) => b.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: c
    }, [
      l("div", vm, [
        w[3] || (w[3] = l("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        oe(l("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": w[1] || (w[1] = (_) => s.value = _),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [_e, s.value]
        ]),
        w[4] || (w[4] = l("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      v.value ? (t(), n("p", hm, f(v.value), 1)) : C("", !0),
      l("div", gm, [
        W(ye, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: E(() => [
            Y(f(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        W(ye, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: E(() => [...w[5] || (w[5] = [
            Y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(ye, {
      key: 1,
      variant: "outline",
      onClick: w[0] || (w[0] = (_) => i.value = !0)
    }, {
      default: E(() => [...w[2] || (w[2] = [
        Y(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", mm, " Passkeys are not supported in this browser. "));
  }
}), bm = ["aria-label"], xm = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, ym = { class: "min-w-0" }, km = { class: "text-base font-semibold" }, $m = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, wm = { class: "flex shrink-0 items-center gap-2" }, _m = { class: "min-h-0 flex-1 overflow-y-auto" }, Cm = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, O1 = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null);
    let i = null, d = "";
    function u(v) {
      if (!a.open)
        return;
      if (v.key === "Escape") {
        v.stopPropagation(), r("close");
        return;
      }
      if (v.key !== "Tab" || !s.value)
        return;
      const b = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (b.length === 0)
        return;
      const c = b[0], h = b[b.length - 1];
      v.shiftKey && document.activeElement === c ? (v.preventDefault(), h.focus()) : !v.shiftKey && document.activeElement === h && (v.preventDefault(), c.focus());
    }
    return ie(
      () => a.open,
      async (v) => {
        if (v) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", u), await be(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", u), i?.focus?.();
      }
    ), de(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = d;
    }), (v, b) => (t(), D(ze, { to: "body" }, [
      W(we, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: E(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30",
            onClick: b[0] || (b[0] = (c) => r("close"))
          })) : C("", !0)
        ]),
        _: 1
      }),
      W(we, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: E(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: P(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            l("header", xm, [
              l("div", ym, [
                l("h2", km, f(e.title), 1),
                e.description ? (t(), n("p", $m, f(e.description), 1)) : C("", !0)
              ]),
              l("div", wm, [
                I(v.$slots, "header-actions"),
                l("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: b[1] || (b[1] = (c) => r("close"))
                }, [...b[2] || (b[2] = [
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
            l("div", _m, [
              I(v.$slots, "default")
            ]),
            v.$slots.footer ? (t(), n("footer", Cm, [
              I(v.$slots, "footer")
            ])) : C("", !0)
          ], 10, bm)) : C("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), Mm = { class: "text-sm font-semibold" }, Sm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Bm = {
  key: 4,
  class: "flex flex-col gap-3"
}, zm = { class: "text-sm font-medium" }, Pm = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Am = {
  key: 0,
  class: "mb-1 font-medium"
}, Om = ["onClick"], Lm = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, jm = { class: "flex items-center justify-between gap-3 border-t p-4" }, Vm = ["disabled"], Tm = /* @__PURE__ */ M({
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
  setup(e, { emit: o }) {
    const a = e, r = o, s = U(!a.node.collapsed), i = U(0), d = U(0), u = x(
      () => (a.node.children ?? []).map((k) => ({
        label: k.label ?? "",
        description: k.description
      }))
    ), v = x(() => a.depth === 0), b = x(() => {
      const k = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, $ = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        k[a.node.align ?? "start"] ?? "items-start",
        $[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), c = x(() => {
      const k = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return k[a.node.tone ?? "info"] ?? k.info;
    }), h = x(() => {
      const k = a.node.columns ?? 1;
      return k >= 3 ? "sm:grid-cols-3" : k === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function y(k) {
      const $ = [], O = (p) => {
        p.component === "field" && p.key && $.push(p.key), p.children?.forEach(O);
      };
      return O(k), $.some((p) => a.errors[p]);
    }
    function w(k) {
      const $ = k.visibleWhen;
      return $ ? a.values[$.field] == $.value : !0;
    }
    function _(k) {
      if (a.upload)
        return ($, O) => a.upload(k, $, O);
    }
    return (k, $) => {
      const O = et("SchemaNode", !0);
      return e.node.component === "field" && w(e.node) ? (t(), D(Ve, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (p) => e.searchOptions(e.node.key, p) : void 0,
        upload: _(e.node.key),
        discard: e.discard,
        onChange: $[0] || ($[0] = (p) => r("change", e.node.key, p))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && w(e.node) ? (t(), n("section", {
        key: 1,
        class: P(v.value ? "bg-card rounded-lg border" : "")
      }, [
        l("header", {
          class: P(["flex items-start justify-between gap-3", [
            v.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: $[1] || ($[1] = (p) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", null, [
            l("h3", Mm, f(e.node.label), 1),
            e.node.description ? (t(), n("p", Sm, f(e.node.description), 1)) : C("", !0)
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: P(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...$[11] || ($[11] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : C("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: P(["grid grid-cols-1 gap-4", [h.value, v.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (p, g) => (t(), D(O, {
            key: g,
            node: p,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: P(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
            onChange: $[2] || ($[2] = (z, A) => r("change", z, A))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : C("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: P(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), n(S, null, V(e.node.children ?? [], (p, g) => (t(), D(O, {
          key: g,
          node: p,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: $[3] || ($[3] = (z, A) => r("change", z, A))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 3,
        class: P(["flex", b.value])
      }, [
        (t(!0), n(S, null, V(e.node.children ?? [], (p, g) => (t(), D(O, {
          key: g,
          node: p,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: $[4] || ($[4] = (z, A) => r("change", z, A))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Bm, [
        l("legend", zm, f(e.node.label), 1),
        e.node.description ? (t(), n("p", Pm, f(e.node.description), 1)) : C("", !0),
        l("div", {
          class: P(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (p, g) => (t(), D(O, {
            key: g,
            node: p,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: $[5] || ($[5] = (z, A) => r("change", z, A))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 5,
        role: "note",
        class: P(["rounded-lg border px-4 py-3 text-sm", c.value])
      }, [
        e.node.title ? (t(), n("p", Am, f(e.node.title), 1)) : C("", !0),
        l("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: P(v.value ? "bg-card rounded-lg border" : "")
      }, [
        l("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", v.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (p, g) => (t(), n("button", {
            key: g,
            type: "button",
            class: P([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (z) => i.value = g
          }, [
            Y(f(p.label) + " ", 1),
            y(p) ? (t(), n("span", Lm)) : C("", !0)
          ], 10, Om))), 128))
        ], 2),
        (t(!0), n(S, null, V(e.node.children ?? [], (p, g) => oe((t(), n("div", {
          key: g,
          class: P(["flex flex-col gap-5", v.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(S, null, V(p.children ?? [], (z, A) => (t(), D(O, {
            key: A,
            node: z,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: $[6] || ($[6] = (G, Z) => r("change", G, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ce, i.value === g]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: P(v.value ? "bg-card rounded-lg border" : "")
      }, [
        W(qs, {
          class: P(["p-4", v.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (p) => y((e.node.children ?? [])[p]),
          "onUpdate:activeStep": $[7] || ($[7] = (p) => d.value = p)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(S, null, V(e.node.children ?? [], (p, g) => oe((t(), n("div", {
          key: g,
          class: P(["flex flex-col gap-5", v.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(S, null, V(p.children ?? [], (z, A) => (t(), D(O, {
            key: A,
            node: z,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: $[8] || ($[8] = (G, Z) => r("change", G, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ce, d.value === g]
        ])), 128)),
        l("div", jm, [
          l("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: $[9] || ($[9] = (p) => d.value--)
          }, " Back ", 8, Vm),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: $[10] || ($[10] = (p) => d.value++)
          }, " Next ")) : C("", !0)
        ])
      ], 2)) : C("", !0);
    };
  }
}), Dm = { class: "flex flex-col gap-4" }, Fm = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, L1 = /* @__PURE__ */ M({
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
  setup(e, { emit: o }) {
    const a = e, r = o, s = x(() => a.nodes.length > 0), i = x(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = x(() => a.errors._conflict);
    function u(v) {
      if (a.upload)
        return (b, c) => a.upload(v, b, c);
    }
    return (v, b) => (t(), n("div", Dm, [
      d.value ? (t(), n("p", Fm, f(d.value), 1)) : C("", !0),
      s.value ? (t(!0), n(S, { key: 1 }, V(e.nodes, (c, h) => (t(), D(Tm, {
        key: h,
        node: c,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: b[0] || (b[0] = (y, w) => r("change", y, w))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: P(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(S, null, V(e.fields, (c) => (t(), D(Ve, {
          key: c.key,
          field: c,
          value: e.modelValue[c.key],
          error: e.errors[c.key],
          errors: e.errors,
          options: e.options[c.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": c.searchable && e.searchOptions ? (h) => e.searchOptions(c.key, h) : void 0,
          upload: u(c.key),
          discard: e.discard,
          class: P(c.span && c.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", c.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), Em = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, Im = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, Nm = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, Rm = ["disabled"], Hm = ["disabled"], Um = ["disabled"], j1 = /* @__PURE__ */ M({
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
    return (o, a) => (t(), D(ze, { to: "body" }, [
      W(we, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-4 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-4 opacity-0"
      }, {
        default: E(() => [
          e.show ? (t(), n("div", Em, [
            l("div", Im, [
              a[3] || (a[3] = l("span", {
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
              l("span", Nm, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => o.$emit("discard"))
              }, f(e.discardLabel), 9, Rm)) : C("", !0),
              l("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => o.$emit("cancel"))
              }, f(e.cancelLabel), 9, Hm),
              l("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => o.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Um)
            ])
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function V1(e, o = {}) {
  const { warnOnUnload: a = !0 } = o, r = U(qe(e.value)), s = x(() => qe(e.value) !== r.value);
  function i() {
    r.value = qe(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(v) {
    s.value && (v.preventDefault(), v.returnValue = "");
  }
  return re(() => {
    a && window.addEventListener("beforeunload", u);
  }), de(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function qe(e) {
  return JSON.stringify(e, (o, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const Km = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, Zm = { class: "text-muted-foreground text-xs font-medium" }, qm = { class: "text-sm" }, Gm = { class: "text-sm font-semibold" }, Wm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ym = ["onClick"], T1 = /* @__PURE__ */ M({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  setup(e) {
    const o = e, a = U(!o.node.collapsed), r = U(0), s = x(() => o.depth === 0), i = x(() => {
      const h = o.node.columns ?? 1;
      return h >= 3 ? "sm:grid-cols-3" : h === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), d = {
      success: "bg-primary text-primary-foreground",
      danger: "bg-destructive text-white",
      warning: "bg-secondary text-secondary-foreground",
      neutral: "border text-foreground"
    }, u = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, v = x(() => o.node.key ? o.record[o.node.key] : null), b = x(() => {
      const h = v.value;
      if (h == null || h === "")
        return "-";
      if (o.node.type === "date" || o.node.type === "datetime")
        return new Date(String(h)).toLocaleDateString(void 0, u[o.node.type]);
      let y = String(h);
      return o.node.transform === "upper" && (y = y.toUpperCase()), o.node.transform === "lower" && (y = y.toLowerCase()), [o.node.prefix, y, o.node.suffix].filter(Boolean).join(" ");
    }), c = x(() => {
      const h = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), y = o.node.colors?.[h] ?? o.node.defaultColor ?? "neutral";
      return d[y] ?? d.neutral;
    });
    return (h, y) => {
      const w = et("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", Km, [
        l("dt", Zm, f(e.node.label), 1),
        l("dd", qm, [
          e.node.type === "badge" ? (t(), n("span", {
            key: 0,
            class: P(["inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize", c.value])
          }, f(v.value), 3)) : (t(), n("span", {
            key: 1,
            class: P([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, f(b.value), 3))
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: P(s.value ? "bg-card rounded-lg border" : "")
      }, [
        l("header", {
          class: P(["flex items-start justify-between gap-3", [
            s.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: y[0] || (y[0] = (_) => e.node.collapsible && (a.value = !a.value))
        }, [
          l("div", null, [
            l("h3", Gm, f(e.node.label), 1),
            e.node.description ? (t(), n("p", Wm, f(e.node.description), 1)) : C("", !0)
          ])
        ], 2),
        a.value ? (t(), n("dl", {
          key: 0,
          class: P(["grid grid-cols-1 gap-4", [i.value, s.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (_, k) => (t(), D(w, {
            key: k,
            node: _,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : C("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: P(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(S, null, V(e.node.children ?? [], (_, k) => (t(), D(w, {
          key: k,
          node: _,
          record: e.record,
          depth: e.depth + 1
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: P(s.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        l("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", s.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (_, k) => (t(), n("button", {
            key: k,
            type: "button",
            class: P([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              r.value === k ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: ($) => r.value = k
          }, f(_.label), 11, Ym))), 128))
        ], 2),
        (t(!0), n(S, null, V(e.node.children ?? [], (_, k) => oe((t(), n("div", {
          key: k,
          class: P(["flex flex-col gap-5", s.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(S, null, V(_.children ?? [], ($, O) => (t(), D(w, {
            key: O,
            node: $,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ce, r.value === k]
        ])), 128))
      ], 2)) : C("", !0);
    };
  }
}), Jm = ["data-variant"], Xm = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", D1 = /* @__PURE__ */ M({
  __name: "PkBadge",
  props: {
    variant: { default: "default" },
    class: {}
  },
  setup(e) {
    const o = e, a = {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white dark:bg-destructive/60",
      outline: "text-foreground"
    }, r = x(
      () => [Xm, a[o.variant], o.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: P(r.value)
    }, [
      I(s.$slots, "default")
    ], 10, Jm));
  }
});
function F1(e) {
  const o = U(/* @__PURE__ */ new Set());
  re(() => {
    try {
      const i = localStorage.getItem(e);
      i && (o.value = new Set(JSON.parse(i)));
    } catch {
    }
  }), ie(
    o,
    (i) => {
      try {
        localStorage.setItem(e, JSON.stringify([...i]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function a(i) {
    const d = new Set(o.value);
    d.has(i) ? d.delete(i) : d.add(i), o.value = d;
  }
  function r(i) {
    o.value = new Set(i);
  }
  function s() {
    o.value = /* @__PURE__ */ new Set();
  }
  return { hidden: o, toggle: a, setHidden: r, reset: s };
}
function E1(e) {
  const { config: o, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = U(
    o.driver === "none" ? "off" : "connecting"
  ), v = U(/* @__PURE__ */ new Set());
  let b = /* @__PURE__ */ new Map(), c, h, y, w = (/* @__PURE__ */ new Date()).toISOString(), _ = null;
  function k(L, T) {
    b.set(L, { ...b.get(L) ?? {}, ...T }), !c && (c = setTimeout(() => {
      c = void 0, $();
    }, o.batchMs));
  }
  function $() {
    if (b.size === 0)
      return;
    const L = b;
    b = /* @__PURE__ */ new Map();
    const T = /* @__PURE__ */ new Set();
    for (const [N, R] of L) {
      const H = a.value.find((ee) => ee[r] === N);
      if (!H) {
        d?.(N, R);
        continue;
      }
      Object.assign(H, R), T.add(N);
    }
    T.size !== 0 && (v.value = /* @__PURE__ */ new Set([...v.value, ...T]), setTimeout(() => {
      const N = new Set(v.value);
      T.forEach((R) => N.delete(R)), v.value = N;
    }, 1500));
  }
  async function O() {
    if (!(!s || a.value.length === 0)) {
      y?.abort(), y = new AbortController();
      try {
        const L = a.value.map((R) => R[r]), { records: T, at: N } = await s(L, w);
        w = N, u.value = "live";
        for (const R of T)
          k(R[r], R);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function p() {
    g(), u.value = "live", h = setInterval(O, o.intervalMs);
  }
  function g() {
    clearInterval(h), h = void 0, y?.abort();
  }
  function z() {
    return window.Echo ?? null;
  }
  function A() {
    const L = z();
    if (!L || !o.channel) {
      u.value = "connecting", console.warn("[panelkit] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    _ = o.channel;
    const T = L.private(o.channel);
    for (const N of o.events)
      T.listen(N, (R) => {
        R?.[r] !== void 0 && k(R[r], R);
      });
    u.value = "live", L.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), L.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function G() {
    _ && (z()?.leave(_), _ = null);
  }
  function Z() {
    o.driver === "poll" && p(), o.driver === "broadcast" && A();
  }
  function ae() {
    g(), G(), clearTimeout(c), c = void 0, b = /* @__PURE__ */ new Map();
  }
  function j() {
    o.pauseWhenHidden && (document.hidden ? (ae(), u.value = "paused") : (w = (/* @__PURE__ */ new Date()).toISOString(), Z(), i?.()));
  }
  return re(() => {
    o.driver !== "none" && (Z(), o.pauseWhenHidden && document.addEventListener("visibilitychange", j));
  }), de(() => {
    document.removeEventListener("visibilitychange", j), ae();
  }), { status: u, recentlyChanged: v, applyPatch: k, flush: $, pollOnce: O };
}
const Qm = /^[a-z0-9-]+$/, ev = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function I1(e) {
  Ut(() => {
    if (typeof document > "u")
      return;
    const o = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !Qm.test(a) || typeof r != "string" || !ev.test(r) || (o[`--${a}`] = r);
    sl(o);
  });
}
const tv = {
  success: "default",
  danger: "destructive",
  warning: "secondary",
  neutral: "outline"
};
function N1(e) {
  return e != null && e !== "";
}
function av(e) {
  const o = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" ")) : (e.key === "name" && o.push("font-medium"), e.mono && o.push("font-mono text-xs"), e.muted && o.push("text-muted-foreground"), e.transform === "upper" && o.push("uppercase"), e.transform === "lower" && o.push("lowercase"), e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" "));
}
function R1(e) {
  const o = x(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: av(s)
    }))
  ), a = x(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), v = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return tv[v] ?? "outline";
  }
  return { columns: o, byKey: a, badgeVariant: r };
}
const nv = { class: "flex items-center gap-0.5" }, ov = /* @__PURE__ */ M({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, a) => (t(), n("span", nv, [
      String(e.value) === "mono" ? (t(), n(S, { key: 0 }, [
        a[0] || (a[0] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        a[1] || (a[1] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        a[2] || (a[2] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), n(S, { key: 1 }, [
        a[3] || (a[3] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        a[4] || (a[4] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        a[5] || (a[5] = l("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), lv = /* @__PURE__ */ M({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, a) => (t(), D(Tt, {
      code: "AB-1234",
      style: X(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), sv = { class: "flex flex-col gap-2" }, rv = { class: "bg-card rounded-lg border p-4" }, iv = { class: "text-muted-foreground truncate text-xs" }, dv = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, uv = /* @__PURE__ */ M({
  __name: "PkSeoPreview",
  props: {
    field: {},
    values: { default: () => ({}) }
  },
  setup(e) {
    const o = e, a = {
      titleMax: 60,
      titleMin: 30,
      descriptionMax: 160,
      descriptionMin: 70
    }, r = x(() => ({ ...a, ...o.field.limits ?? {} })), s = x(
      () => String(o.values[o.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = x(
      () => String(o.values[o.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = x(
      () => String(o.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = x(() => {
      const _ = String(o.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return _ === "" ? d.value : `${d.value} › ${_.split("/").join(" › ")}`;
    });
    function v(_, k) {
      return _.length <= k ? _ : `${_.slice(0, k - 1).trimEnd()}…`;
    }
    const b = x(() => v(s.value, r.value.titleMax)), c = x(() => v(i.value, r.value.descriptionMax));
    function h(_, k, $) {
      return _ === 0 ? { tone: "text-muted-foreground", note: "empty" } : _ > $ ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : _ < k ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const y = x(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), w = x(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (_, k) => (t(), n("div", sv, [
      l("div", rv, [
        l("p", iv, f(u.value), 1),
        l("p", {
          class: P(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", b.value === "" ? "text-muted-foreground italic" : ""])
        }, f(b.value || "Untitled page"), 3),
        l("p", {
          class: P(["text-muted-foreground mt-1 line-clamp-2 text-sm", c.value === "" ? "italic" : ""])
        }, f(c.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      l("div", dv, [
        l("span", {
          class: P(y.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(y.value.note), 3),
        l("span", {
          class: P(w.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(w.value.note), 3)
      ]),
      k[0] || (k[0] = l("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function cv() {
  he("radio", Gi), he("checkboxlist", Ji), he("tags", od), he("colour", hd), he("slider", $d), he("visual-select", Vd), he("markdown", Si), he("code", ji), he("seo-preview", uv), Ze("swatch", Dd), Ze("voucher-code-box", lv), Ze("document-colour-mode", ov);
}
function Ft() {
  const e = U(null), o = U(!1);
  let a = null;
  return re(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      o.value = !0;
      return;
    }
    a = new IntersectionObserver(
      (s) => {
        for (const i of s)
          i.isIntersecting && (o.value = !0, a?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), a.observe(e.value);
  }), de(() => a?.disconnect()), { el: e, shown: o };
}
const fv = /* @__PURE__ */ M({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: o, shown: a } = Ft();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: o,
      class: P(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", m(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: X({ transitionDelay: `${e.delay}ms` })
    }, [
      I(r.$slots, "default")
    ], 6));
  }
}), pv = ["id"], ve = /* @__PURE__ */ M({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (o, a) => (t(), n("section", {
      id: e.id,
      class: P(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      l("div", {
        class: P(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        W(fv, null, {
          default: E(() => [
            I(o.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, pv));
  }
}), mv = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, vv = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, hv = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Se = /* @__PURE__ */ M({
  __name: "PkSectionHeading",
  props: {
    eyebrow: {},
    title: {},
    body: {},
    centred: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, a) => e.title || e.body || e.eyebrow ? (t(), n("div", {
      key: 0,
      class: P(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", mv, f(e.eyebrow), 1)) : C("", !0),
      e.title ? (t(), n("h2", vv, f(e.title), 1)) : C("", !0),
      e.body ? (t(), n("p", hv, f(e.body), 1)) : C("", !0)
    ], 2)) : C("", !0);
  }
});
function gv() {
  const e = U(null);
  let o = null;
  function a(s) {
    if (!o)
      return;
    const i = o.getBoundingClientRect();
    o.style.setProperty("--pk-px", String((s.clientX - i.left) / i.width)), o.style.setProperty("--pk-py", String((s.clientY - i.top) / i.height));
  }
  function r() {
    o?.style.setProperty("--pk-px", "0.5"), o?.style.setProperty("--pk-py", "0.5");
  }
  return re(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (o = e.value, r(), o.addEventListener("pointermove", a, { passive: !0 }), o.addEventListener("pointerleave", r, { passive: !0 }));
  }), de(() => {
    o?.removeEventListener("pointermove", a), o?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const bv = { class: "pk-tilt-inner relative h-full" }, xv = /* @__PURE__ */ M({
  __name: "PkTiltCard",
  setup(e) {
    const { el: o } = gv();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: o,
      class: "pk-tilt group/tilt"
    }, [
      l("div", bv, [
        r[0] || (r[0] = l("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        I(a.$slots, "default")
      ])
    ], 512));
  }
}), yv = { class: "flex flex-col gap-10" }, kv = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, $v = { class: "text-base font-semibold" }, wv = { class: "text-sm text-pretty text-muted-foreground" }, _v = /* @__PURE__ */ M({
  __name: "PkBento",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function o(a) {
      return {
        wide: "sm:col-span-2",
        tall: "sm:row-span-2",
        large: "sm:col-span-2 sm:row-span-2"
      }[a ?? ""] ?? "";
    }
    return (a, r) => (t(), D(ve, null, {
      default: E(() => [
        l("div", yv, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", kv, [
            (t(!0), n(S, null, V(e.items ?? [], (s, i) => (t(), D(xv, {
              key: i,
              class: P(o(s.span))
            }, {
              default: E(() => [
                l("div", {
                  class: P([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  l("h3", $v, f(s.title), 1),
                  l("p", wv, f(s.body), 1)
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
}), Cv = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Mv = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Sv = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Bv = ["href"], zv = /* @__PURE__ */ M({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, null, {
      default: E(() => [
        l("div", Cv, [
          l("h2", Mv, f(e.title), 1),
          e.body ? (t(), n("p", Sv, f(e.body), 1)) : C("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, Bv)) : C("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Pv = { class: "flex flex-col gap-8" }, Av = { class: "divide-y rounded-lg border" }, Ov = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Lv = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, jv = /* @__PURE__ */ M({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, { narrow: "" }, {
      default: E(() => [
        l("div", Pv, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", Av, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              l("summary", Ov, [
                Y(f(r.question) + " ", 1),
                a[0] || (a[0] = l("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              l("p", Lv, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Vv = { class: "flex flex-col gap-10" }, Tv = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Dv = { class: "text-sm font-semibold" }, Fv = { class: "text-sm text-pretty text-muted-foreground" }, Ev = /* @__PURE__ */ M({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, null, {
      default: E(() => [
        l("div", Vv, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", Tv, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("h3", Dv, f(r.title), 1),
              l("p", Fv, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Iv = { class: "flex flex-col items-center gap-6 text-center" }, Nv = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Rv = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, Hv = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Uv = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Kv = ["href"], Zv = ["href"], qv = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, Gv = /* @__PURE__ */ M({
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
    return (o, a) => (t(), D(ve, null, {
      default: E(() => [
        l("div", Iv, [
          e.eyebrow ? (t(), n("p", Nv, f(e.eyebrow), 1)) : C("", !0),
          l("h1", Rv, f(e.title), 1),
          e.body ? (t(), n("p", Hv, f(e.body), 1)) : C("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", Uv, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, Kv)) : C("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, Zv)) : C("", !0)
          ])) : C("", !0),
          e.note ? (t(), n("p", qv, f(e.note), 1)) : C("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Wv = { class: "flex flex-col items-center gap-6" }, Yv = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, Jv = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, Xv = /* @__PURE__ */ M({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, { muted: "" }, {
      default: E(() => [
        l("div", Wv, [
          e.title ? (t(), n("p", Yv, f(e.title), 1)) : C("", !0),
          l("ul", Jv, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Qv = { class: "flex flex-col gap-10" }, eh = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, th = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, ah = ["aria-pressed"], nh = ["aria-pressed"], oh = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, lh = { class: "grid gap-4 md:grid-cols-3" }, sh = { class: "flex flex-col gap-1" }, rh = { class: "text-sm font-semibold" }, ih = { class: "flex items-baseline gap-1" }, dh = { class: "text-3xl font-semibold tracking-tight" }, uh = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, ch = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, fh = { class: "flex flex-col gap-2 text-sm" }, ph = { class: "text-muted-foreground" }, mh = ["href"], vh = /* @__PURE__ */ M({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const o = e, a = U(!1), r = x(() => (o.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), D(ve, { muted: "" }, {
      default: E(() => [
        l("div", Qv, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", eh, [
            l("div", th, [
              l("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, ah),
              l("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, nh)
            ]),
            e.annualNote ? (t(), n("p", oh, f(e.annualNote), 1)) : C("", !0)
          ])) : C("", !0),
          l("ul", lh, [
            (t(!0), n(S, null, V(e.items ?? [], (u, v) => (t(), n("li", {
              key: v,
              class: P(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              l("div", sh, [
                l("h3", rh, f(u.name), 1),
                l("p", ih, [
                  l("span", dh, f(s(u)), 1),
                  u.period ? (t(), n("span", uh, f(u.period), 1)) : C("", !0)
                ]),
                u.body ? (t(), n("p", ch, f(u.body), 1)) : C("", !0)
              ]),
              l("ul", fh, [
                (t(!0), n(S, null, V(u.features ?? [], (b, c) => (t(), n("li", {
                  key: c,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = l("span", {
                    class: "mt-0.5 text-primary",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  l("span", ph, f(b.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: P([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, mh)) : C("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function hh() {
  const e = U(null);
  let o = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !o || !s)
      return;
    const u = o.getBoundingClientRect(), v = u.height + window.innerHeight, b = v <= 0 ? 0 : (window.innerHeight - u.top) / v;
    o.style.setProperty("--pk-progress", String(Math.min(Math.max(b, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return re(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (o = e.value, u || typeof IntersectionObserver > "u") {
        o.style.setProperty("--pk-progress", "1");
        return;
      }
      o.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((v) => {
        s = v.some((b) => b.isIntersecting), s && d();
      }), a.observe(o), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), de(() => {
    a?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const gh = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, bh = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, xh = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, yh = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, kh = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, $h = { class: "pk-showcase-stage w-full [perspective:1400px]" }, wh = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, _h = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Ch = { class: "ml-3 truncate text-xs text-muted-foreground" }, Mh = { class: "flex" }, Sh = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, Bh = { class: "min-w-0 flex-1 p-4" }, zh = { class: "flex flex-col divide-y rounded-md border" }, Ph = /* @__PURE__ */ M({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: o } = hh();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: o,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      l("div", gh, [
        l("div", bh, [
          l("div", xh, [
            l("h2", yh, f(e.title), 1),
            e.body ? (t(), n("p", kh, f(e.body), 1)) : C("", !0)
          ]),
          l("div", $h, [
            l("div", wh, [
              l("div", _h, [
                r[0] || (r[0] = l("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = l("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = l("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                l("span", Ch, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              l("div", Mh, [
                l("div", Sh, [
                  (t(), n(S, null, V(6, (s) => l("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: X({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                l("div", Bh, [
                  r[4] || (r[4] = l("div", { class: "mb-3 flex gap-2" }, [
                    l("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  l("div", zh, [
                    (t(!0), n(S, null, V(e.rows, (s) => (t(), n("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: X({ "--pk-row": String(s) })
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
}), Ah = /* @__PURE__ */ M({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const o = e, { el: a, shown: r } = Ft(), s = U(0);
    return ie(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = o.to;
        return;
      }
      const u = performance.now(), v = (b) => {
        const c = Math.min((b - u) / o.duration, 1);
        s.value = o.to * (1 - Math.pow(1 - c, 3)), c < 1 ? requestAnimationFrame(v) : s.value = o.to;
      };
      requestAnimationFrame(v);
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), Oh = { class: "flex flex-col gap-10" }, Lh = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, jh = { class: "order-2 text-sm text-muted-foreground" }, Vh = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, Th = /* @__PURE__ */ M({
  __name: "PkStats",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function o(a) {
      const r = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/.exec((a ?? "").trim());
      if (!r)
        return null;
      const s = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: s };
    }
    return (a, r) => (t(), D(ve, { muted: "" }, {
      default: E(() => [
        l("div", Oh, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("dl", Lh, [
            (t(!0), n(S, null, V(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              l("dt", jh, f(s.label), 1),
              l("dd", Vh, [
                o(s.value) ? (t(), D(Ah, {
                  key: 0,
                  to: o(s.value).number,
                  prefix: o(s.value).prefix,
                  suffix: o(s.value).suffix,
                  decimals: o(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(S, { key: 1 }, [
                  Y(f(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Dh = { class: "flex flex-col gap-10" }, Fh = { class: "grid gap-6 md:grid-cols-3" }, Eh = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, Ih = { class: "text-sm font-semibold" }, Nh = { class: "text-sm text-pretty text-muted-foreground" }, Rh = /* @__PURE__ */ M({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, null, {
      default: E(() => [
        l("div", Dh, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ol", Fh, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              l("span", Eh, f(s + 1), 1),
              l("h3", Ih, f(r.title), 1),
              l("p", Nh, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Hh = { class: "flex flex-col gap-10" }, Uh = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, Kh = { class: "text-pretty text-sm leading-relaxed" }, Zh = { class: "mt-auto flex items-center gap-3" }, qh = ["src"], Gh = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, Wh = { class: "min-w-0" }, Yh = { class: "block truncate text-sm font-medium" }, Jh = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, Xh = /* @__PURE__ */ M({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, null, {
      default: E(() => [
        l("div", Hh, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", Uh, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("blockquote", Kh, " “" + f(r.quote) + "” ", 1),
              l("figcaption", Zh, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, qh)) : (t(), n("span", Gh, f((r.name ?? "?").slice(0, 1)), 1)),
                l("span", Wh, [
                  l("span", Yh, f(r.name), 1),
                  r.role ? (t(), n("span", Jh, f(r.role), 1)) : C("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), H1 = /* @__PURE__ */ M({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const a = e, r = {
      hero: Gv,
      logos: Xv,
      features: Ev,
      bento: _v,
      showcase: Ph,
      steps: Rh,
      stats: Th,
      testimonials: Xh,
      pricing: vh,
      faq: jv,
      cta: zv
    }, s = x(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[panelkit] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return o({ known: Object.keys(r) }), (i, d) => (t(!0), n(S, null, V(s.value, (u) => (t(), D(Me(u.component), Q({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), Qh = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, U1 = /* @__PURE__ */ M({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (o, a) => (t(), n("div", Qh, [
      l("div", {
        class: P([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      l("div", {
        class: P([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      l("div", {
        class: P([
          "pk-blob absolute top-1/3 left-1/4 size-[30rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-40 dark:opacity-30" : "opacity-20 dark:opacity-10"
        ]),
        style: { background: "radial-gradient(circle at 40% 60%, var(--pk-aurora-3), transparent 70%)", "animation-delay": "-14s" }
      }, null, 2),
      a[0] || (a[0] = l("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), eg = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, K1 = /* @__PURE__ */ M({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (o, a) => (t(), n("div", eg, [...a[0] || (a[0] = [
      Qe('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), tg = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Z1 = /* @__PURE__ */ M({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (o, a) => (t(), n("div", tg, [...a[0] || (a[0] = [
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
cv();
const q1 = "0.0.1";
export {
  Kl as Alert,
  Zl as AlertDescription,
  ql as AlertTitle,
  $g as AppearanceDrawer,
  xb as Avatar,
  yb as AvatarFallback,
  kb as AvatarImage,
  tv as BADGE_VARIANTS,
  f1 as BarChart,
  $b as Breadcrumb,
  wb as BreadcrumbEllipsis,
  _b as BreadcrumbItem,
  Cb as BreadcrumbLink,
  Mb as BreadcrumbList,
  Sb as BreadcrumbPage,
  Bb as BreadcrumbSeparator,
  ug as BulkActions,
  qb as Card,
  Gb as CardAction,
  Wb as CardContent,
  Yb as CardDescription,
  Jb as CardFooter,
  Xb as CardHeader,
  Qb as CardTitle,
  y1 as ChartCard,
  _s as Checkbox,
  vg as CheckboxCell,
  hg as CodeCell,
  mg as ColourCell,
  b1 as ComboChart,
  dg as DataTable,
  Tb as Dialog,
  Db as DialogClose,
  Fb as DialogContent,
  Eb as DialogDescription,
  Ib as DialogFooter,
  Nb as DialogHeader,
  ws as DialogOverlay,
  Rb as DialogScrollContent,
  Hb as DialogTitle,
  Ub as DialogTrigger,
  lb as DropdownMenu,
  sb as DropdownMenuCheckboxItem,
  rb as DropdownMenuContent,
  ib as DropdownMenuGroup,
  db as DropdownMenuItem,
  ub as DropdownMenuLabel,
  Y1 as DropdownMenuPortal,
  cb as DropdownMenuRadioGroup,
  fb as DropdownMenuRadioItem,
  pb as DropdownMenuSeparator,
  mb as DropdownMenuShortcut,
  vb as DropdownMenuSub,
  hb as DropdownMenuSubContent,
  gb as DropdownMenuSubTrigger,
  bb as DropdownMenuTrigger,
  bg as EditableCell,
  Ve as FormFieldControl,
  x1 as HeatmapChart,
  He as ICON_PATHS,
  fg as IconCell,
  pg as ImageCell,
  T1 as InfoNode,
  gg as KeyValueCell,
  Kb as Label,
  p1 as LineChart,
  $1 as MiniStatCard,
  zb as NavigationMenu,
  Pb as NavigationMenuContent,
  Ab as NavigationMenuIndicator,
  Ob as NavigationMenuItem,
  Lb as NavigationMenuLink,
  jb as NavigationMenuList,
  Vb as NavigationMenuTrigger,
  ks as NavigationMenuViewport,
  m1 as PieChart,
  Pg as PkAlertError,
  U1 as PkAuroraBackdrop,
  D1 as PkBadge,
  _v as PkBento,
  wg as PkBottomNav,
  e1 as PkBoundary,
  r1 as PkBuilder,
  ye as PkButton,
  t1 as PkCard,
  Ji as PkCheckboxList,
  Tt as PkCodeBox,
  ji as PkCodeInput,
  hd as PkColourPicker,
  Z1 as PkConsoleBackdrop,
  Ah as PkCountUp,
  zv as PkCta,
  a1 as PkDeviceFrame,
  u1 as PkDocument,
  Ee as PkDropdown,
  K1 as PkEditorialBackdrop,
  jv as PkFaq,
  Ev as PkFeatureGrid,
  Cg as PkFieldLabel,
  br as PkFileUpload,
  Bg as PkHeading,
  Gv as PkHero,
  Or as PkKeyValue,
  H1 as PkLandingSections,
  Xv as PkLogoCloud,
  Si as PkMarkdownInput,
  ct as PkModal,
  Lt as PkMultiSelect,
  Sg as PkOtpInput,
  A1 as PkPasskeyRegister,
  Ag as PkPasswordInput,
  vh as PkPricing,
  Fo as PkQueryBuilder,
  Gi as PkRadioGroup,
  s1 as PkRepeater,
  fv as PkReveal,
  Rr as PkRichEditor,
  ve as PkSection,
  Se as PkSectionHeading,
  Ph as PkShowcase,
  Be as PkSkeleton,
  O1 as PkSlideover,
  $d as PkSlider,
  Mg as PkSpinner,
  Th as PkStats,
  qs as PkStepIndicator,
  Rh as PkSteps,
  Dd as PkSwatchPreview,
  od as PkTagsInput,
  Xh as PkTestimonials,
  _g as PkTextInput,
  xv as PkTiltCard,
  Vd as PkVisualSelect,
  g1 as PolarAreaChart,
  h1 as RadarChart,
  xg as RecordActions,
  L1 as RecordForm,
  cg as RelationPanel,
  v1 as ScatterChart,
  Tm as SchemaNode,
  w1 as SegmentedBar,
  M1 as SelectionBar,
  hs as Separator,
  C1 as SetupChecklist,
  Ot as ShadcnInput,
  Xl as Sheet,
  Og as SheetClose,
  es as SheetContent,
  ts as SheetDescription,
  Lg as SheetFooter,
  as as SheetHeader,
  ns as SheetTitle,
  jg as SheetTrigger,
  Vg as Sidebar,
  Tg as SidebarContent,
  Dg as SidebarFooter,
  Fg as SidebarGroup,
  Eg as SidebarGroupAction,
  Ig as SidebarGroupContent,
  Ng as SidebarGroupLabel,
  Rg as SidebarHeader,
  Hg as SidebarInput,
  Ug as SidebarInset,
  Kg as SidebarMenu,
  Zg as SidebarMenuAction,
  qg as SidebarMenuBadge,
  Wg as SidebarMenuButton,
  Yg as SidebarMenuItem,
  Jg as SidebarMenuSkeleton,
  Xg as SidebarMenuSub,
  Qg as SidebarMenuSubButton,
  eb as SidebarMenuSubItem,
  tb as SidebarProvider,
  ab as SidebarRail,
  nb as SidebarSeparator,
  ob as SidebarTrigger,
  Dt as Sparkline,
  Zb as Spinner,
  k1 as StatCard,
  _1 as StatStrip,
  Cs as Switch,
  S1 as TablePagination,
  B1 as TableShell,
  z1 as TableTabs,
  P1 as TableToolbar,
  c1 as ThemeToggle,
  ps as Tooltip,
  ms as TooltipContent,
  Gg as TooltipProvider,
  vs as TooltipTrigger,
  $f as TrendBadge,
  j1 as UnsavedBar,
  Gl as alertVariants,
  ll as appearanceVars,
  Je as applyAppearance,
  Mo as buttonClasses,
  q as cn,
  Gs as fieldControl,
  N1 as hasBadgeValue,
  n1 as hasFieldControl,
  i1 as hasOptionPreview,
  xe as iconPath,
  yg as initializeAppearance,
  Ye as isDark,
  $s as navigationMenuTriggerStyle,
  wd as optionPreview,
  it as readAppearance,
  cv as registerBuiltInFieldControls,
  he as registerFieldControl,
  Ze as registerOptionPreview,
  o1 as registeredFieldTypes,
  _d as registeredOptionPreviews,
  l1 as resetFieldControls,
  d1 as resetOptionPreviews,
  kg as setAppearancePersister,
  gs as sidebarMenuButtonVariants,
  zg as toUrl,
  At as useAppearance,
  F1 as useColumnVisibility,
  E1 as useLiveUpdates,
  gv as usePointer,
  Ft as useReveal,
  R1 as useSchemaColumns,
  hh as useScrollProgress,
  Re as useSidebar,
  I1 as useTenantTheme,
  V1 as useUnsavedChanges,
  q1 as version
};
//# sourceMappingURL=index.js.map
