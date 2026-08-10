import './ui.css';
import { defineComponent as M, ref as U, computed as b, openBlock as t, createElementBlock as n, normalizeClass as A, createElementVNode as l, createCommentVNode as C, Fragment as S, renderList as V, createTextVNode as Y, toDisplayString as f, withModifiers as fe, createStaticVNode as Qe, renderSlot as I, watch as ie, nextTick as be, onBeforeUnmount as de, createBlock as D, Teleport as ze, createVNode as W, Transition as we, withCtx as E, onMounted as re, normalizeStyle as X, unref as m, resolveDynamicComponent as Me, resolveComponent as et, withDirectives as oe, vModelSelect as Le, vModelDynamic as Et, isRef as It, vModelText as _e, useTemplateRef as Nt, mergeProps as Q, normalizeProps as pe, guardReactiveProps as ke, onErrorCaptured as Rt, defineAsyncComponent as ut, vShow as Ce, shallowRef as Ht, watchEffect as Ut } from "vue";
import { AlertCircle as Kt, EyeOff as Zt, Eye as qt, X as tt, PanelLeftOpen as Gt, PanelLeftClose as Wt, Check as yt, Circle as Yt, ChevronRight as kt, MoreHorizontal as Jt, ChevronDown as Xt, Loader2Icon as Qt } from "@lucide/vue";
import { cva as at } from "class-variance-authority";
import { clsx as ea } from "clsx";
import { twMerge as ta } from "tailwind-merge";
import { useVModel as $t, reactiveOmit as ne, useMediaQuery as aa, useEventListener as na, defaultDocument as oa } from "@vueuse/core";
import { useForwardPropsEmits as se, DialogRoot as wt, DialogClose as Pe, DialogOverlay as nt, DialogPortal as ot, DialogContent as lt, DialogDescription as _t, DialogTitle as Ct, DialogTrigger as Mt, createContext as la, Primitive as Ae, TooltipRoot as sa, TooltipPortal as ra, TooltipContent as ia, TooltipArrow as da, TooltipProvider as St, TooltipTrigger as ua, Separator as ca, DropdownMenuRoot as fa, DropdownMenuCheckboxItem as pa, DropdownMenuItemIndicator as Bt, DropdownMenuPortal as ma, DropdownMenuContent as va, DropdownMenuGroup as ha, useForwardProps as me, DropdownMenuItem as ga, DropdownMenuLabel as ba, DropdownMenuRadioGroup as xa, DropdownMenuRadioItem as ya, DropdownMenuSeparator as ka, DropdownMenuSub as $a, DropdownMenuSubContent as wa, DropdownMenuSubTrigger as _a, DropdownMenuTrigger as Ca, AvatarRoot as Ma, AvatarFallback as Sa, AvatarImage as Ba, NavigationMenuViewport as za, NavigationMenuRoot as Pa, NavigationMenuContent as Aa, NavigationMenuIndicator as Oa, NavigationMenuItem as La, NavigationMenuLink as ja, NavigationMenuList as Va, NavigationMenuTrigger as Ta, Label as Da, CheckboxRoot as Fa, CheckboxIndicator as Ea, SwitchRoot as Ia, SwitchThumb as Na } from "reka-ui";
import { DropdownMenuPortal as t0 } from "reka-ui";
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
    function c(j, L) {
      i.value = j, L.dataTransfer?.setData("text/plain", String(j)), L.dataTransfer && (L.dataTransfer.effectAllowed = "move");
    }
    function v() {
      i.value = null, d.value = null;
    }
    function x(j) {
      return i.value === null || d.value !== j ? "" : i.value > j ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function p(j, L) {
      i.value !== null && (L.preventDefault(), d.value = j);
    }
    function g(j) {
      const L = i.value;
      if (i.value = null, d.value = null, L === null || L === j)
        return;
      const T = a.rows.map((R) => R[a.rowKey]), [N] = T.splice(L, 1);
      T.splice(j, 0, N), y("reorder", T);
    }
    const y = o;
    function $(j, L) {
      !a.rowClickable || a.reordering || L.button !== 0 || L.metaKey || L.ctrlKey || L.shiftKey || L.altKey || L.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || y("row-click", j);
    }
    const z = U(null), w = b(() => a.columns.filter((j) => !a.hidden?.has(j.key))), k = b(() => a.rows.map((j) => j[a.rowKey])), _ = b(
      () => k.value.length > 0 && k.value.every((j) => a.selected?.has(j))
    ), u = b(
      () => !_.value && k.value.some((j) => a.selected?.has(j))
    );
    function h(j) {
      return j.sortKey ?? j.key;
    }
    function P(j) {
      return a.sort === h(j);
    }
    async function O(j, L, T) {
      try {
        await navigator.clipboard.writeText(String(T)), z.value = `${j}-${L.key}`, setTimeout(() => z.value = null, 1200);
      } catch {
      }
    }
    const G = b(
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
      class: A(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      l("table", Ra, [
        l("thead", Ha, [
          l("tr", Ua, [
            e.reordering ? (t(), n("th", Ka)) : C("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Za, [
              l("input", {
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: _.value,
                indeterminate: u.value,
                "aria-label": "Select all rows on this page",
                onChange: L[0] || (L[0] = (T) => y("toggle-page", !_.value))
              }, null, 40, qa)
            ])) : C("", !0),
            (t(!0), n(S, null, V(w.value, (T) => (t(), n("th", {
              key: T.key,
              class: "text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
            }, [
              T.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (N) => y("sort", h(T))
              }, [
                Y(f(T.label) + " ", 1),
                P(T) ? (t(), n("span", Wa, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Ya, "↕"))
              ], 8, Ga)) : (t(), n("span", Ja, f(T.label), 1))
            ]))), 128)),
            j.$slots.actions ? (t(), n("th", Xa, [...L[1] || (L[1] = [
              l("span", { class: "sr-only" }, "Actions", -1)
            ])])) : C("", !0)
          ])
        ]),
        l("tbody", {
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
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
              class: A(["hover:bg-muted/40 group pk-row border-b transition-colors", [
                e.selected?.has(T[e.rowKey]) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : "",
                i.value === N ? "opacity-40" : "",
                x(N),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (R) => c(N, R),
              onDragover: (R) => p(N, R),
              onDrop: fe((R) => g(N), ["prevent"]),
              onDragend: v,
              onContextmenu: (R) => y("row-contextmenu", T, R),
              onClick: (R) => $(T, R)
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
              (t(!0), n(S, null, V(w.value, (R) => (t(), n("td", {
                key: R.key,
                class: A(["px-3 py-2 whitespace-nowrap", R.cellClass])
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
                      onClick: (H) => O(String(T[e.rowKey]), R, T[R.key])
                    }, [
                      l("span", dn, f(z.value === `${T[e.rowKey]}-${R.key}` ? "✓" : "⧉"), 1)
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
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", T.cellClass])
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
}, mg = /* @__PURE__ */ st(kn, [["__scopeId", "data-v-4805f648"]]), $n = ["aria-label"], wn = { class: "border-b px-5 py-4" }, _n = { class: "text-base font-semibold" }, Cn = {
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
    function c(p) {
      d.value = p.target === p.currentTarget;
    }
    function v(p) {
      d.value && p.target === p.currentTarget && !a.busy && r("close"), d.value = !1;
    }
    function x(p) {
      if (!a.open)
        return;
      if (p.key === "Escape" && !a.busy) {
        p.stopPropagation(), r("close");
        return;
      }
      if (p.key !== "Tab" || !s.value)
        return;
      const g = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (g.length === 0)
        return;
      const y = g[0], $ = g[g.length - 1];
      p.shiftKey && document.activeElement === y ? (p.preventDefault(), $.focus()) : !p.shiftKey && document.activeElement === $ && (p.preventDefault(), y.focus());
    }
    return ie(
      () => a.open,
      (p) => {
        p ? (i = document.activeElement, document.addEventListener("keydown", x), be(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", x), i?.focus(), i = null);
      }
    ), de(() => document.removeEventListener("keydown", x)), (p, g) => (t(), D(ze, { to: "body" }, [
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
            onPointerdown: c,
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
                I(p.$slots, "default")
              ]),
              l("div", Sn, [
                I(p.$slots, "footer")
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
    const a = e, r = U(!1), s = U(null), i = U(null), d = U({ top: 0, left: 0, minWidth: 0 }), c = U(null);
    let v = null;
    function x(h) {
      !a.dismissOnPanelClick || h.target?.closest("input, select, textarea, label, [data-keep-open]") || z();
    }
    async function p() {
      v && (clearTimeout(v), v = null), !r.value && (r.value = !0, await be(), w());
    }
    function g() {
      v = setTimeout(z, 180);
    }
    async function y() {
      c.value = null, r.value = !r.value, r.value && (await be(), w());
    }
    async function $(h, P) {
      c.value = { x: h, y: P }, r.value = !0, await be(), w();
    }
    function z() {
      r.value = !1, c.value = null;
    }
    function w() {
      const h = s.value, P = i.value;
      if (!h || !P)
        return;
      const O = P.getBoundingClientRect(), G = 8, Z = c.value ? new DOMRect(c.value.x, c.value.y, 0, 0) : h.getBoundingClientRect();
      let ae, j;
      if (a.placement === "bottom")
        ae = Z.bottom + a.offset, ae + O.height > window.innerHeight - G && Z.top - O.height - a.offset > G && (ae = Z.top - O.height - a.offset), j = a.align === "end" && !c.value ? Z.right - O.width : Z.left;
      else {
        ae = Z.top;
        const L = a.placement === "right", T = Z.right + a.offset + O.width < window.innerWidth - G, N = Z.left - a.offset - O.width > G;
        j = (L ? T || !N : !N && T) ? Z.right + a.offset : Z.left - a.offset - O.width;
      }
      j = Math.min(Math.max(G, j), window.innerWidth - O.width - G), ae = Math.min(Math.max(G, ae), window.innerHeight - O.height - G), d.value = { top: ae, left: j, minWidth: Math.max(Z.width, Bn) };
    }
    function k(h) {
      if (!r.value)
        return;
      const P = h.target;
      s.value?.contains(P) || i.value?.contains(P) || (P instanceof Element ? P : P.parentElement)?.closest("[data-pk-overlay]") || z();
    }
    function _(h) {
      h.key === "Escape" && r.value && (h.stopPropagation(), z());
    }
    function u() {
      if (r.value) {
        if (c.value) {
          z();
          return;
        }
        w();
      }
    }
    return re(() => {
      document.addEventListener("pointerdown", k), document.addEventListener("keydown", _), window.addEventListener("scroll", u, !0), window.addEventListener("resize", u);
    }), de(() => {
      v && clearTimeout(v), document.removeEventListener("pointerdown", k), document.removeEventListener("keydown", _), window.removeEventListener("scroll", u, !0), window.removeEventListener("resize", u);
    }), o({ close: z, openAt: $ }), (h, P) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: P[2] || (P[2] = (O) => e.hoverable && p()),
      onPointerleave: P[3] || (P[3] = (O) => e.hoverable && g())
    }, [
      l("div", { onClick: y }, [
        I(h.$slots, "trigger", { open: r.value })
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
              class: A([
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
              onPointerenter: P[0] || (P[0] = (O) => e.hoverable && p()),
              onPointerleave: P[1] || (P[1] = (O) => e.hoverable && g()),
              onClick: x
            }, [
              I(h.$slots, "panel", { close: z })
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
}, Gn = ["disabled"], vg = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null), i = U(!1), d = b(() => a.allMatching ? a.total : a.count), c = b(() => d.value !== void 0), v = b(() => c.value && d.value === 0), x = b(() => a.actions.filter((_) => !_.destructive)), p = b(() => a.actions.filter((_) => _.destructive)), g = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function y(_) {
      return g[_.color ?? "gray"] ?? g.gray;
    }
    function $(_) {
      if (_.confirmation) {
        s.value = _;
        return;
      }
      r("run", _.key);
    }
    function z() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function w() {
      i.value = !1, r("export");
    }
    const k = (_) => new Intl.NumberFormat().format(_);
    return (_, u) => (t(), n(S, null, [
      W(Ee, null, {
        trigger: E(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...u[5] || (u[5] = [
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
            (t(!0), n(S, null, V(x.value, (h) => (t(), n("button", {
              key: h.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", y(h)]),
              disabled: e.busy,
              onClick: (P) => $(h)
            }, [
              (t(), n("svg", On, [
                l("path", {
                  d: m(xe)(h.icon)
                }, null, 8, Ln)
              ])),
              Y(" " + f(h.label), 1)
            ], 10, An))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: u[0] || (u[0] = (h) => i.value = !0)
            }, [
              (t(), n("svg", Vn, [
                l("path", {
                  d: m(xe)("download")
                }, null, 8, Tn)
              ])),
              u[6] || (u[6] = Y(" Export CSV ", -1))
            ], 8, jn)) : C("", !0),
            p.value.length ? (t(), n("div", Dn, [
              (t(!0), n(S, null, V(p.value, (h) => (t(), n("button", {
                key: h.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (P) => $(h)
              }, [
                (t(), n("svg", En, [
                  l("path", {
                    d: m(xe)(h.icon ?? "trash")
                  }, null, 8, In)
                ])),
                Y(" " + f(h.label), 1)
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
        onClose: u[2] || (u[2] = (h) => s.value = null)
      }, {
        footer: E(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: u[1] || (u[1] = (h) => s.value = null)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: A([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !c.value || v.value,
            onClick: z
          }, f(s.value?.label), 11, Un)
        ]),
        default: E(() => [
          l("p", Nn, [
            u[7] || (u[7] = Y(" This will affect ", -1)),
            l("span", Rn, [
              c.value ? (t(), n(S, { key: 1 }, [
                Y(f(k(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(S, { key: 0 }, [
                Y("…")
              ], 64))
            ]),
            u[8] || (u[8] = Y(" . ", -1))
          ]),
          v.value ? (t(), n("p", Hn, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : C("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      W(ct, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: u[4] || (u[4] = (h) => i.value = !1)
      }, {
        footer: E(() => [
          l("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: u[3] || (u[3] = (h) => i.value = !1)
          }, " Cancel "),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !c.value || v.value,
            onClick: w
          }, " Export CSV ", 8, Gn)
        ]),
        default: E(() => [
          l("p", Kn, [
            u[9] || (u[9] = Y(" This will export ", -1)),
            l("span", Zn, [
              c.value ? (t(), n(S, { key: 1 }, [
                Y(f(k(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(S, { key: 0 }, [
                Y("…")
              ], 64))
            ]),
            u[10] || (u[10] = Y(" . ", -1))
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
}, hg = /* @__PURE__ */ M({
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
    const a = e, r = o, s = b(() => a.columns.filter((d) => d.type !== "image"));
    function i(d, c) {
      return c == null || c === "" ? "-" : d.type === "date" || d.type === "datetime" ? new Date(String(c)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...d.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof c == "number" ? new Intl.NumberFormat().format(c) : String(c);
    }
    return (d, c) => (t(), n("div", Wn, [
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
            (t(!0), n(S, null, V(e.rows, (v, x) => (t(), n("tr", {
              key: v.id ?? x,
              class: "hover:bg-accent/30"
            }, [
              (t(!0), n(S, null, V(s.value, (p) => (t(), n("td", {
                key: p.key,
                class: A(["px-3 py-2 whitespace-nowrap", [
                  p.mono ? "font-mono text-xs" : "",
                  p.muted ? "text-muted-foreground" : ""
                ]])
              }, [
                I(d.$slots, `cell:${p.key}`, {
                  row: v,
                  value: v[p.key],
                  column: p
                }, () => [
                  Y(f(i(p, v[p.key])), 1)
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
          onClick: c[0] || (c[0] = (v) => r("load", e.nextCursor))
        }, f(e.loading ? "Loading…" : "Load more"), 9, lo)
      ])) : e.capped ? (t(), n("p", so, " Showing the first " + f(e.rows.length) + ". Open the full list to search or filter the rest. ", 1)) : C("", !0)
    ]));
  }
}), ro = ["title"], io = ["aria-label"], uo = ["d"], co = { class: "sr-only" }, gg = /* @__PURE__ */ M({
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
    }, s = b(() => typeof o.value == "boolean" ? o.value ? "1" : "" : o.value === null || o.value === void 0 ? "" : String(o.value)), i = b(() => o.icons[s.value] ?? o.defaultIcon), d = b(() => a[i.value] ?? a.dot), c = b(() => r[o.colors[s.value] ?? "neutral"] ?? r.neutral), v = b(() => o.labels[s.value] ?? String(o.value ?? "-"));
    return (x, p) => (t(), n("span", {
      class: "inline-flex items-center",
      title: v.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: A(["size-4", c.value]),
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
}, bg = /* @__PURE__ */ M({
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
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = b(() => {
      const d = typeof o.src == "string" ? o.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = b(() => {
      const d = typeof o.fallbackText == "string" ? o.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((c) => c[0]?.toUpperCase() ?? "").join("");
    });
    return (d, c) => (t(), n("span", {
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: c[0] || (c[0] = (v) => a.value = !0)
      }, null, 40, fo)) : e.fallback === "initials" ? (t(), n(S, { key: 1 }, [
        Y(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", po, [...c[1] || (c[1] = [
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
}, xg = /* @__PURE__ */ M({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, a = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = b(() => {
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
}), bo = { class: "inline-flex items-center" }, xo = ["checked", "aria-label"], yo = { class: "sr-only" }, yg = /* @__PURE__ */ M({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const o = e, a = b(() => {
      const s = o.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = b(
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
}, kg = /* @__PURE__ */ M({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, a = b(
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
    const o = e, a = b(
      () => Mo({ variant: o.variant, size: o.size, class: o.class })
    ), r = b(() => o.as === "button" ? o.type : void 0);
    return (s, i) => (t(), D(Me(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: A(a.value)
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
      (u) => {
        i.value = u ? structuredClone(u) : s();
      }
    );
    const d = (u) => "rules" in u, c = b(() => Object.keys(a.fields));
    function v(u) {
      const h = u ? a.fields[u]?.kind : void 0;
      return h ? a.operators[h] ?? [] : [];
    }
    const x = {
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
    function g() {
      const u = c.value[0];
      i.value.rules.push({
        field: u,
        operator: v(u)[0],
        value: void 0
      }), p();
    }
    function y() {
      i.value.rules.push(s()), p();
    }
    function $(u) {
      i.value.rules.splice(u, 1), p();
    }
    function z(u) {
      u.operator = v(u.field)[0], u.value = void 0, p();
    }
    const w = b(() => a.depth + 1 < a.maxDepth);
    function k() {
      i.value = s(), p(), r("apply", null);
    }
    function _() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (u, h) => {
      const P = et("PkQueryBuilder", !0);
      return t(), n("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        l("div", So, [
          oe(l("select", {
            "onUpdate:modelValue": h[0] || (h[0] = (O) => i.value.logic = O),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...h[1] || (h[1] = [
            l("option", { value: "and" }, "Match all", -1),
            l("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Le, i.value.logic]
          ]),
          h[2] || (h[2] = l("span", { class: "text-muted-foreground text-xs" }, "of the following", -1))
        ]),
        (t(!0), n(S, null, V(i.value.rules, (O, G) => (t(), n("div", {
          key: G,
          class: "flex items-start gap-2"
        }, [
          d(O) ? (t(), D(P, {
            key: 0,
            modelValue: i.value.rules[G],
            "onUpdate:modelValue": [(Z) => i.value.rules[G] = Z, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(S, { key: 1 }, [
            oe(l("select", {
              "onUpdate:modelValue": (Z) => O.field = Z,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (Z) => z(O)
            }, [
              (t(!0), n(S, null, V(c.value, (Z) => (t(), n("option", {
                key: Z,
                value: Z
              }, f(e.fields[Z].label), 9, zo))), 128))
            ], 40, Bo), [
              [Le, O.field]
            ]),
            oe(l("select", {
              "onUpdate:modelValue": (Z) => O.operator = Z,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(S, null, V(v(O.field), (Z) => (t(), n("option", {
                key: Z,
                value: Z
              }, f(x[Z] ?? Z), 9, Ao))), 128))
            ], 40, Po), [
              [Le, O.operator]
            ]),
            O.field && e.fields[O.field]?.kind === "boolean" ? oe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (Z) => O.value = Z,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...h[3] || (h[3] = [
              l("option", { value: !0 }, "Yes", -1),
              l("option", { value: !1 }, "No", -1)
            ])], 40, Oo)), [
              [Le, O.value]
            ]) : O.field && e.fields[O.field]?.options?.length ? oe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (Z) => O.value = Z,
              multiple: e.fields[O.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(S, null, V(e.fields[O.field].options, (Z) => (t(), n("option", {
                key: Z,
                value: Z
              }, f(Z), 9, jo))), 128))
            ], 40, Lo)), [
              [Le, O.value]
            ]) : oe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (Z) => O.value = Z,
              type: O.field && e.fields[O.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, Vo)), [
              [Et, O.value]
            ])
          ], 64)),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(O) ? "group" : "rule"}`,
            onClick: (Z) => $(G)
          }, " × ", 8, To)
        ]))), 128)),
        l("div", Do, [
          W(ye, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: g
          }, {
            default: E(() => [...h[4] || (h[4] = [
              Y("Add rule", -1)
            ])]),
            _: 1
          }),
          w.value ? (t(), D(ye, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: y
          }, {
            default: E(() => [...h[5] || (h[5] = [
              Y(" Add group ", -1)
            ])]),
            _: 1
          })) : C("", !0),
          e.root ? (t(), n(S, { key: 1 }, [
            h[8] || (h[8] = l("span", { class: "flex-1" }, null, -1)),
            W(ye, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: E(() => [...h[6] || (h[6] = [
                Y(" Clear ", -1)
              ])]),
              _: 1
            }),
            W(ye, {
              type: "button",
              size: "sm",
              onClick: _
            }, {
              default: E(() => [...h[7] || (h[7] = [
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
}, $g = /* @__PURE__ */ M({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, a = b(
      () => o.value && typeof o.value == "object" && !Array.isArray(o.value) ? Object.keys(o.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", Eo, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", Io, "—")) : (t(), n("span", No, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Ro = ["aria-checked", "aria-label", "title", "disabled"], Ho = ["value", "disabled"], Uo = ["value"], wg = /* @__PURE__ */ M({
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
    const a = e, r = o, s = b(() => a.value === !0 || a.value === 1 || a.value === "1"), i = b(() => a.busy || a.disabled), d = b(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function c() {
      i.value || r("change", !s.value);
    }
    function v(x) {
      const p = x.target.value;
      p !== String(a.value ?? "") && r("change", p);
    }
    return (x, p) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: A(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: fe(c, ["stop"])
    }, [
      l("span", {
        class: A(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Ro)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = fe(() => {
      }, ["stop"])),
      onChange: v
    }, [
      (t(!0), n(S, null, V(e.options, (g, y) => (t(), n("option", {
        key: y,
        value: y
      }, f(g), 9, Uo))), 128))
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
}, nl = ["d"], _g = /* @__PURE__ */ M({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: o, emit: a }) {
    const r = e, s = a, i = U(null), d = U(null), c = b(() => r.groups.flatMap((k) => k.actions)), v = b(() => c.value.filter((k) => !k.destructive)), x = b(() => c.value.filter((k) => k.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function g(k) {
      return p[k.color ?? "gray"] ?? p.gray;
    }
    const y = b(() => c.value.length === 0);
    function $(k) {
      s("run", k);
    }
    function z(k) {
      y.value || (k.preventDefault(), i.value?.openAt(k.clientX, k.clientY));
    }
    function w(k) {
      if (k.key !== "ArrowDown" && k.key !== "ArrowUp")
        return;
      const _ = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (_.length === 0)
        return;
      k.preventDefault();
      const u = _.indexOf(document.activeElement), h = k.key === "ArrowDown" ? 1 : -1, P = (u + h + _.length) % _.length;
      _[P]?.focus();
    }
    return o({ openContextMenu: z }), (k, _) => (t(), n("div", Ko, [
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
            onKeydown: w
          }, [
            (t(!0), n(S, null, V(v.value, (u) => (t(), n(S, {
              key: u.key
            }, [
              u.link ? (t(), n("a", {
                key: 0,
                href: u.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g(u)])
              }, [
                (t(), n("svg", Yo, [
                  l("path", {
                    d: m(xe)(u.icon)
                  }, null, 8, Jo)
                ])),
                Y(" " + f(u.label), 1)
              ], 10, Wo)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", g(u)]),
                disabled: e.busy === u.key,
                onClick: (h) => $(u)
              }, [
                (t(), n("svg", {
                  class: A(["size-4 shrink-0", e.busy === u.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  l("path", {
                    d: m(xe)(u.icon)
                  }, null, 8, Qo)
                ], 2)),
                Y(" " + f(u.label), 1)
              ], 10, Xo))
            ], 64))), 128)),
            x.value.length ? (t(), n("div", el, [
              (t(!0), n(S, null, V(x.value, (u) => (t(), n("button", {
                key: u.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === u.key,
                onClick: (h) => $(u)
              }, [
                (t(), n("svg", al, [
                  l("path", {
                    d: m(xe)(u.icon ?? "trash")
                  }, null, 8, nl)
                ])),
                Y(" " + f(u.label), 1)
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
}, Ie = 12, Ne = 20, ol = [0, 0.25, 0.5, 0.75, 1], rt = "alxtexhpanel.appearance", ge = {
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
}, $e = U({ ...ge });
let ft = !1;
const ll = "alxtexhpanel.appearance.vars";
function Ye(e) {
  return e.theme === "dark";
}
const pt = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
};
function sl(e) {
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
    "--radius": `${e.radius}rem`,
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
function Cg(e) {
  const o = it(), a = e ? { ...o, ...e } : o;
  if ($e.value = a, Je(a), e)
    try {
      localStorage.setItem(rt, JSON.stringify(a));
    } catch {
    }
}
let zt = null;
function Mg(e) {
  zt = e;
}
let Pt = {};
function rl(e) {
  if (Pt = e, !(typeof document > "u") && !it().primaryChosen)
    for (const [o, a] of Object.entries(e))
      document.documentElement.style.setProperty(o, a);
}
function Je(e) {
  if (typeof document > "u")
    return;
  const o = document.documentElement, a = { ...sl(e), ...e.primaryChosen ? {} : Pt };
  o.classList.toggle("dark", Ye(e));
  for (const [r, s] of Object.entries(a))
    o.style.setProperty(r, s);
  o.dataset.sidebar = e.sidebarSide, o.dataset.contentLayout = e.contentLayout;
  try {
    localStorage.setItem(
      ll,
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
    appearance: b(() => $e.value),
    set: o,
    reset: a,
    PRIMARY_COLORS: Ge,
    SURFACE_TINTS: We,
    FONT_SIZE_MIN: Ie,
    FONT_SIZE_MAX: Ne,
    RADIUS_OPTIONS: ol
  };
}
const il = { class: "flex items-center justify-between border-b px-4 py-3" }, dl = { class: "flex items-center gap-2" }, ul = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, cl = { class: "flex flex-col gap-2" }, fl = { class: "grid grid-cols-8 gap-2" }, pl = ["title", "aria-label", "aria-pressed", "onClick"], ml = { class: "flex flex-col gap-2" }, vl = { class: "grid grid-cols-8 gap-2" }, hl = ["title", "aria-label", "aria-pressed", "onClick"], gl = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, bl = { class: "flex flex-col gap-2" }, xl = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, yl = ["aria-pressed", "aria-label", "onClick"], kl = { class: "text-sm font-semibold" }, $l = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, wl = ["onClick"], _l = { class: "flex flex-col gap-2" }, Cl = { class: "flex items-center justify-between" }, Ml = { class: "text-muted-foreground text-xs tabular-nums" }, Sl = { class: "flex items-center gap-2" }, Bl = ["disabled"], zl = ["min", "max", "value"], Pl = ["disabled"], Sg = /* @__PURE__ */ M({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: o, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = At(), c = U(!1), v = b(() => o.value.sidebarSide === "right"), x = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], g = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], y = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], $ = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], z = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function w(k, _) {
      return `oklch(0.72 ${_ * 3} ${k})`;
    }
    return (k, _) => (t(), n(S, null, [
      l("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: _[0] || (_[0] = (u) => c.value = !0)
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
            c.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: _[1] || (_[1] = (u) => c.value = !1)
            })) : C("", !0)
          ]),
          _: 1
        }),
        W(we, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": v.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": v.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: E(() => [
            c.value ? (t(), n("aside", {
              key: 0,
              class: A(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", v.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              l("header", il, [
                _[9] || (_[9] = l("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                l("div", dl, [
                  l("button", {
                    class: "text-muted-foreground text-xs hover:underline",
                    onClick: _[2] || (_[2] = //@ts-ignore
                    (...u) => m(r) && m(r)(...u))
                  }, " Reset "),
                  l("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: _[3] || (_[3] = (u) => c.value = !1)
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
              l("div", ul, [
                l("section", cl, [
                  _[11] || (_[11] = l("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  l("div", fl, [
                    (t(!0), n(S, null, V(m(s), (u, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: X({ background: u.value }),
                      title: u.label,
                      "aria-label": u.label,
                      "aria-pressed": m(o).primary === h,
                      onClick: (P) => m(a)({ primary: h })
                    }, [
                      m(o).primary === h ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: X({ color: u.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [..._[10] || (_[10] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : C("", !0)
                    ], 12, pl))), 128))
                  ])
                ]),
                l("section", ml, [
                  _[13] || (_[13] = l("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  l("div", vl, [
                    (t(!0), n(S, null, V(m(i), (u, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: X({ background: w(u.hue, u.chroma) }),
                      title: u.label,
                      "aria-label": u.label,
                      "aria-pressed": m(o).surface === h,
                      onClick: (P) => m(a)({ surface: h })
                    }, [
                      m(o).surface === h ? (t(), n("svg", gl, [..._[12] || (_[12] = [
                        l("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : C("", !0)
                    ], 12, hl))), 128))
                  ])
                ]),
                l("section", bl, [
                  _[14] || (_[14] = l("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  l("div", xl, [
                    (t(!0), n(S, null, V(m(d), (u) => (t(), n("button", {
                      key: u,
                      type: "button",
                      class: A([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        m(o).radius === u ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": m(o).radius === u,
                      "aria-label": `${u}rem radius`,
                      onClick: (h) => m(a)({ radius: u })
                    }, [
                      l("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: X({ borderRadius: `${Math.min(u, 0.5)}rem` })
                      }, null, 4),
                      Y(" " + f(u), 1)
                    ], 10, yl))), 128))
                  ])
                ]),
                (t(!0), n(S, null, V([
                  { label: "Color scheme", key: "theme", options: x },
                  { label: "Card style", key: "cardStyle", options: g },
                  { label: "Table density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: y },
                  { label: "Content layout", key: "contentLayout", options: $ },
                  { label: "Menu style", key: "menuStyle", options: z }
                ], (u) => (t(), n("section", {
                  key: u.key,
                  class: "flex flex-col gap-2"
                }, [
                  l("h3", kl, f(u.label), 1),
                  l("div", $l, [
                    (t(!0), n(S, null, V(u.options, (h) => (t(), n("button", {
                      key: String(h.value),
                      type: "button",
                      class: A([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        m(o)[u.key] === h.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (P) => m(a)({ [u.key]: h.value })
                    }, f(h.label), 11, wl))), 128))
                  ])
                ]))), 128)),
                l("section", _l, [
                  l("div", Cl, [
                    _[15] || (_[15] = l("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    l("span", Ml, f(m(o).fontSize) + "px", 1)
                  ]),
                  l("div", Sl, [
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: m(o).fontSize <= m(Ie),
                      "aria-label": "Decrease font size",
                      onClick: _[4] || (_[4] = (u) => m(a)({ fontSize: m(o).fontSize - 1 }))
                    }, " − ", 8, Bl),
                    l("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: m(Ie),
                      max: m(Ne),
                      value: m(o).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: _[5] || (_[5] = (u) => m(a)({
                        fontSize: Number(u.target.value)
                      }))
                    }, null, 40, zl),
                    l("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: m(o).fontSize >= m(Ne),
                      "aria-label": "Increase font size",
                      onClick: _[6] || (_[6] = (u) => m(a)({ fontSize: m(o).fontSize + 1 }))
                    }, " + ", 8, Pl)
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
}), Al = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Ol = { class: "flex items-stretch" }, Ll = ["href", "aria-current"], jl = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vl = ["d"], Tl = { class: "w-full truncate text-center" }, Dl = {
  key: 0,
  class: "flex-1"
}, Fl = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, El = ["d"], Il = { class: "w-full truncate text-center" }, Ue = 5, Bg = /* @__PURE__ */ M({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = b(
      () => a.items.length <= Ue ? a.items : a.items.slice(0, Ue - 1)
    ), i = b(() => a.items.length > Ue);
    function d(c) {
      return c === "/" ? a.current === "/" : a.current === c || a.current.startsWith(`${c}/`);
    }
    return (c, v) => (t(), n("nav", Al, [
      l("ul", Ol, [
        (t(!0), n(S, null, V(s.value, (x) => (t(), n("li", {
          key: x.key,
          class: "flex-1"
        }, [
          l("a", {
            href: x.href,
            class: A([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(x.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(x.href) ? "page" : void 0
          }, [
            (t(), n("svg", jl, [
              l("path", {
                d: m(xe)(x.icon)
              }, null, 8, Vl)
            ])),
            l("span", Tl, f(x.title), 1)
          ], 10, Ll)
        ]))), 128)),
        i.value ? (t(), n("li", Dl, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: v[0] || (v[0] = (x) => r("more"))
          }, [
            (t(), n("svg", Fl, [
              l("path", {
                d: m(xe)("more-horizontal")
              }, null, 8, El)
            ])),
            l("span", Il, f(e.moreLabel), 1)
          ])
        ])) : C("", !0)
      ])
    ]));
  }
}), Nl = ["value"], Rl = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", zg = /* @__PURE__ */ M({
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
      class: A([Rl, a.class]),
      onInput: i[0] || (i[0] = (d) => r("update:modelValue", d.target.value))
    }, null, 42, Nl));
  }
}), Hl = ["for"], Pg = /* @__PURE__ */ M({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (o, a) => (t(), n("label", {
      "data-slot": "label",
      for: o.$props.for,
      class: A([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        o.$props.class
      ])
    }, [
      I(o.$slots, "default")
    ], 10, Hl));
  }
}), Ag = /* @__PURE__ */ M({
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
      class: A(["size-4 animate-spin", o.$props.class])
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
}), Ul = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Kl = ["id", "name", "value", "disabled", "maxlength"], Zl = ["data-active"], ql = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Og = /* @__PURE__ */ M({
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
    const d = b(
      () => Array.from({ length: a.length }, (x, p) => a.modelValue[p] ?? "")
    ), c = b(() => Math.min(a.modelValue.length, a.length - 1));
    function v(x) {
      const p = x.target.value;
      r("update:modelValue", p.replace(/\D/g, "").slice(0, a.length));
    }
    return (x, p) => (t(), n("div", Ul, [
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
        onFocus: p[0] || (p[0] = (g) => s.value = !0),
        onBlur: p[1] || (p[1] = (g) => s.value = !1)
      }, null, 40, Kl),
      (t(!0), n(S, null, V(d.value, (g, y) => (t(), n("div", {
        key: y,
        "data-slot": "input-otp-slot",
        "data-active": s.value && y === c.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        Y(f(g) + " ", 1),
        s.value && y === c.value && g === "" ? (t(), n("div", ql, [...p[2] || (p[2] = [
          l("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : C("", !0)
      ], 8, Zl))), 128))
    ]));
  }
}), Gl = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Lg = /* @__PURE__ */ M({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (o, a) => (t(), n("header", {
      class: A(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      l("h2", {
        class: A(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, f(e.title), 3),
      e.description ? (t(), n("p", Gl, f(e.description), 1)) : C("", !0)
    ], 2));
  }
});
function q(...e) {
  return ta(ea(e));
}
function jg(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const Wl = /* @__PURE__ */ M({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: A(m(q)(m(Xl)({ variant: e.variant }), o.class)),
      role: "alert"
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Yl = /* @__PURE__ */ M({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: A(m(q)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Jl = /* @__PURE__ */ M({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: A(m(q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Xl = at(
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
), Ql = { class: "list-inside list-disc text-sm" }, Vg = /* @__PURE__ */ M({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const o = e, a = b(() => Array.from(new Set(o.errors)));
    return (r, s) => (t(), D(m(Wl), { variant: "destructive" }, {
      default: E(() => [
        W(m(Kt), { class: "size-4" }),
        W(m(Jl), null, {
          default: E(() => [
            Y(f(e.title), 1)
          ]),
          _: 1
        }),
        W(m(Yl), null, {
          default: E(() => [
            l("ul", Ql, [
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
      "onUpdate:modelValue": d[0] || (d[0] = (c) => It(s) ? s.value = c : null),
      "data-slot": "input",
      class: A(
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
}), es = { class: "relative" }, ts = ["aria-label"], Tg = /* @__PURE__ */ M({
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
    }), (i, d) => (t(), n("div", es, [
      W(m(Ot), Q({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: m(q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      l("button", {
        type: "button",
        class: A(
          m(q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (c) => r.value = !r.value)
      }, [
        r.value ? (t(), D(m(Zt), {
          key: 0,
          class: "size-4"
        })) : (t(), D(m(qt), {
          key: 1,
          class: "size-4"
        }))
      ], 10, ts)
    ]));
  }
}), as = /* @__PURE__ */ M({
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
      default: E((c) => [
        I(i.$slots, "default", pe(ke(c)))
      ]),
      _: 3
    }, 16));
  }
}), Dg = /* @__PURE__ */ M({
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
}), ns = /* @__PURE__ */ M({
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
}), os = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(ot), null, {
      default: E(() => [
        W(ns),
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
                c[0] || (c[0] = l("span", { class: "sr-only" }, "Close", -1))
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
}), ls = /* @__PURE__ */ M({
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
}), Fg = /* @__PURE__ */ M({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: A(m(q)("mt-auto flex flex-col gap-2 p-4", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), ss = /* @__PURE__ */ M({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: A(m(q)("flex flex-col gap-1.5 p-4", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), rs = /* @__PURE__ */ M({
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
}), Eg = /* @__PURE__ */ M({
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
}), mt = "sidebar_state", is = 3600 * 24 * 7, ds = "16rem", us = "18rem", cs = "3rem", fs = "b", [Re, ps] = la("Sidebar"), ms = { class: "flex h-full w-full flex-col" }, vs = ["data-state", "data-collapsible", "data-variant", "data-side"], hs = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Ig = /* @__PURE__ */ M({
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
    return (d, c) => e.collapsible === "none" ? (t(), n("div", Q({
      key: 0,
      "data-slot": "sidebar",
      class: m(q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o.class
      )
    }, d.$attrs), [
      I(d.$slots, "default")
    ], 16)) : m(a) ? (t(), D(m(as), Q({
      key: 1,
      open: m(s)
    }, d.$attrs, { "onUpdate:open": m(i) }), {
      default: E(() => [
        W(m(os), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: X({
            "--sidebar-width": m(us)
          })
        }, {
          default: E(() => [
            W(ss, { class: "sr-only" }, {
              default: E(() => [
                W(rs, null, {
                  default: E(() => [...c[0] || (c[0] = [
                    Y("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                W(ls, null, {
                  default: E(() => [...c[1] || (c[1] = [
                    Y("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l("div", ms, [
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
        class: A(
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
        l("div", hs, [
          I(d.$slots, "default")
        ])
      ], 16)
    ], 8, vs));
  }
}), Ng = /* @__PURE__ */ M({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: A(
        m(q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Rg = /* @__PURE__ */ M({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(m(q)("flex flex-col gap-2 p-2", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Hg = /* @__PURE__ */ M({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(m(q)("relative flex w-full min-w-0 flex-col p-2", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Ug = /* @__PURE__ */ M({
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
      class: A(
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
}), Kg = /* @__PURE__ */ M({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(m(q)("w-full text-sm", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Zg = /* @__PURE__ */ M({
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
      class: A(
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
}), qg = /* @__PURE__ */ M({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(m(q)("flex flex-col gap-2 p-2", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Gg = /* @__PURE__ */ M({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Ot), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(m(q)("bg-background h-8 w-full shadow-none", o.class))
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wg = /* @__PURE__ */ M({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: A(
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
}), Yg = /* @__PURE__ */ M({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(m(q)("flex w-full min-w-0 flex-col gap-1", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Jg = /* @__PURE__ */ M({
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
      class: A(
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
}), Xg = /* @__PURE__ */ M({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: A(
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
}), gs = /* @__PURE__ */ M({
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
      default: E((c) => [
        I(i.$slots, "default", pe(ke(c)))
      ]),
      _: 3
    }, 16));
  }
}), bs = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(ra), null, {
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
}), Qg = /* @__PURE__ */ M({
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
}), xs = /* @__PURE__ */ M({
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
      class: m(q)(m(ks)({ variant: e.variant, size: e.size }), o.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), eb = /* @__PURE__ */ M({
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
    return (i, d) => e.tooltip ? (t(), D(m(gs), { key: 1 }, {
      default: E(() => [
        W(m(xs), { "as-child": "" }, {
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
        W(m(bs), {
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
}), tb = /* @__PURE__ */ M({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(m(q)("group/menu-item relative", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), ht = "animate-pulse rounded-md bg-primary/10", ab = /* @__PURE__ */ M({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e, a = b(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), n("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: A(m(q)("flex h-8 items-center gap-2 rounded-md px-2", o.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: A(m(q)(ht, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : C("", !0),
      l("div", {
        class: A(m(q)(ht, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: X({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), nb = /* @__PURE__ */ M({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: A(
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
}), ob = /* @__PURE__ */ M({
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
      class: A(
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
}), lb = /* @__PURE__ */ M({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(m(q)("group/menu-sub-item relative", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), sb = /* @__PURE__ */ M({
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
    function c(g) {
      d.value = g, document.cookie = `${mt}=${d.value}; path=/; max-age=${is}`;
    }
    function v(g) {
      i.value = g;
    }
    function x() {
      return s.value ? v(!i.value) : c(!d.value);
    }
    na("keydown", (g) => {
      g.key === fs && (g.metaKey || g.ctrlKey) && (g.preventDefault(), x());
    });
    const p = b(() => d.value ? "expanded" : "collapsed");
    return ps({
      state: p,
      open: d,
      setOpen: c,
      isMobile: s,
      openMobile: i,
      setOpenMobile: v,
      toggleSidebar: x
    }), (g, y) => (t(), D(m(St), { "delay-duration": 0 }, {
      default: E(() => [
        l("div", Q({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": m(ds),
            "--sidebar-width-icon": m(cs)
          },
          class: m(q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, g.$attrs), [
          I(g.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), rb = /* @__PURE__ */ M({
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
      class: A(
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
}), ys = /* @__PURE__ */ M({
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
}), ib = /* @__PURE__ */ M({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(ys), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(m(q)("bg-sidebar-border mx-2 w-auto", o.class))
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), db = /* @__PURE__ */ M({
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
      class: A(m(q)("h-7 w-7", o.class)),
      onClick: m(s)
    }, {
      default: E(() => [
        m(a) || m(r) === "collapsed" ? (t(), D(m(Gt), { key: 0 })) : (t(), D(m(Wt), { key: 1 })),
        d[0] || (d[0] = l("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), ks = at(
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
), ub = /* @__PURE__ */ M({
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
      default: E((c) => [
        I(i.$slots, "default", pe(ke(c)))
      ]),
      _: 3
    }, 16));
  }
}), $s = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, cb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(pa), Q({ "data-slot": "dropdown-menu-checkbox-item" }, m(i), {
      class: m(q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: E(() => [
        l("span", $s, [
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
}), fb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(ma), null, {
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
}), pb = /* @__PURE__ */ M({
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
}), mb = /* @__PURE__ */ M({
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
}), vb = /* @__PURE__ */ M({
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
}), hb = /* @__PURE__ */ M({
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
}), ws = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, gb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(ya), Q({ "data-slot": "dropdown-menu-radio-item" }, m(i), {
      class: m(q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: E(() => [
        l("span", ws, [
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
}), bb = /* @__PURE__ */ M({
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
}), xb = /* @__PURE__ */ M({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(m(q)("text-muted-foreground ml-auto text-xs tracking-widest", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), yb = /* @__PURE__ */ M({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: o }) {
    const s = se(e, o);
    return (i, d) => (t(), D(m($a), Q({ "data-slot": "dropdown-menu-sub" }, m(s)), {
      default: E((c) => [
        I(i.$slots, "default", pe(ke(c)))
      ]),
      _: 3
    }, 16));
  }
}), kb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(wa), Q({ "data-slot": "dropdown-menu-sub-content" }, m(i), {
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
}), $b = /* @__PURE__ */ M({
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
}), wb = /* @__PURE__ */ M({
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
}), _b = /* @__PURE__ */ M({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Ma), {
      "data-slot": "avatar",
      class: A(m(q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", o.class))
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Cb = /* @__PURE__ */ M({
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
}), Mb = /* @__PURE__ */ M({
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
}), Sb = /* @__PURE__ */ M({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: A(o.class)
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Bb = /* @__PURE__ */ M({
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
      class: A(m(q)("flex size-9 items-center justify-center", o.class))
    }, [
      I(a.$slots, "default", {}, () => [
        W(m(Jt), { class: "size-4" })
      ]),
      r[0] || (r[0] = l("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), zb = /* @__PURE__ */ M({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: A(m(q)("inline-flex items-center gap-1.5", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Pb = /* @__PURE__ */ M({
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
      class: A(m(q)("hover:text-foreground transition-colors", o.class))
    }, {
      default: E(() => [
        I(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ab = /* @__PURE__ */ M({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        m(q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Ob = /* @__PURE__ */ M({
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
      class: A(m(q)("text-foreground font-normal", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Lb = /* @__PURE__ */ M({
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
      class: A(m(q)("[&>svg]:size-3.5", o.class))
    }, [
      I(a.$slots, "default", {}, () => [
        W(m(kt))
      ])
    ], 2));
  }
}), _s = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Cs = /* @__PURE__ */ M({
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
    return (s, i) => (t(), n("div", _s, [
      W(m(za), Q({ "data-slot": "navigation-menu-viewport" }, m(r), {
        class: m(q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), jb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(Pa), Q({
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
        e.viewport ? (t(), D(Cs, { key: 0 })) : C("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), Vb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(Aa), Q({ "data-slot": "navigation-menu-content" }, m(i), {
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
}), Tb = /* @__PURE__ */ M({
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
}), Db = /* @__PURE__ */ M({
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
}), Fb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(ja), Q({ "data-slot": "navigation-menu-link" }, m(i), {
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
}), Eb = /* @__PURE__ */ M({
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
}), Ib = /* @__PURE__ */ M({
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
      class: m(q)(m(Ms)(), "group", o.class)
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
}), Ms = at(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), Nb = /* @__PURE__ */ M({
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
      default: E((c) => [
        I(i.$slots, "default", pe(ke(c)))
      ]),
      _: 3
    }, 16));
  }
}), Rb = /* @__PURE__ */ M({
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
}), Ss = /* @__PURE__ */ M({
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
}), Hb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(ot), null, {
      default: E(() => [
        W(Ss),
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
                c[0] || (c[0] = l("span", { class: "sr-only" }, "Close", -1))
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
}), Ub = /* @__PURE__ */ M({
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
}), Kb = /* @__PURE__ */ M({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: A(m(q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", o.class))
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
}), Zb = /* @__PURE__ */ M({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: A(m(q)("flex flex-col gap-2 text-center sm:text-left", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), qb = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(ot), null, {
      default: E(() => [
        W(m(nt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: E(() => [
            W(m(lt), Q({
              class: m(q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...m(i) }, {
              onPointerDownOutside: c[0] || (c[0] = (v) => {
                const x = v.detail.originalEvent, p = x.target;
                (x.offsetX > p.clientWidth || x.offsetY > p.clientHeight) && v.preventDefault();
              })
            }), {
              default: E(() => [
                I(d.$slots, "default"),
                W(m(Pe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: E(() => [
                    W(m(tt), { class: "w-4 h-4" }),
                    c[1] || (c[1] = l("span", { class: "sr-only" }, "Close", -1))
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
}), Gb = /* @__PURE__ */ M({
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
}), Wb = /* @__PURE__ */ M({
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
}), Yb = /* @__PURE__ */ M({
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
}), Jb = /* @__PURE__ */ M({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), D(m(Qt), {
      role: "status",
      "aria-label": "Loading",
      class: A(m(q)("size-4 animate-spin", o.class))
    }, null, 8, ["class"]));
  }
}), Xb = /* @__PURE__ */ M({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: A(
        m(q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Qb = /* @__PURE__ */ M({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: A(m(q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), e1 = /* @__PURE__ */ M({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: A(m(q)("px-6", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), t1 = /* @__PURE__ */ M({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: A(m(q)("text-muted-foreground text-sm", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), a1 = /* @__PURE__ */ M({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: A(m(q)("flex items-center px-6 [.border-t]:pt-6", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), n1 = /* @__PURE__ */ M({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: A(
        m(q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          o.class
        )
      )
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), o1 = /* @__PURE__ */ M({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const o = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: A(m(q)("leading-none font-semibold", o.class))
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), Bs = /* @__PURE__ */ M({
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
    return (d, c) => (t(), D(m(Fa), Q({ "data-slot": "checkbox" }, m(i), {
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
}), zs = /* @__PURE__ */ M({
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
}), Ps = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, As = { class: "flex items-start gap-3" }, Os = { class: "min-w-0 flex-1" }, Ls = { class: "text-foreground text-sm font-medium" }, js = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, l1 = /* @__PURE__ */ M({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: o, emit: a }) {
    const r = e, s = a, i = U(!1), d = U(null), c = U(0);
    Rt((x) => (console.error(`[PkBoundary] ${r.label} failed to render`, x), i.value = !0, d.value = x instanceof Error ? x.message : null, s("error", x), !1));
    function v() {
      i.value = !1, d.value = null, c.value++;
    }
    return o({ retry: v }), (x, p) => (t(), n("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Ps, [
        l("div", As, [
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
          l("div", Os, [
            l("p", Ls, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", js, f(d.value), 1)) : C("", !0),
            l("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: v
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
              Y(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? C("", !0) : I(x.$slots, "default", { key: c.value })
    ], 2));
  }
}), Vs = { class: "bg-card rounded-lg border" }, Ts = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Ds = { class: "min-w-0" }, Fs = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Es = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Is = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Ns = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, s1 = /* @__PURE__ */ M({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, a) => (t(), n("section", Vs, [
      e.title || e.description || o.$slots.header || o.$slots.actions ? (t(), n("header", Ts, [
        l("div", Ds, [
          I(o.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Fs, f(e.title), 1)) : C("", !0),
            e.description ? (t(), n("p", Es, f(e.description), 1)) : C("", !0)
          ])
        ]),
        o.$slots.actions ? (t(), n("div", Is, [
          I(o.$slots, "actions")
        ])) : C("", !0)
      ])) : C("", !0),
      l("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        I(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (t(), n("footer", Ns, [
        I(o.$slots, "footer")
      ])) : C("", !0)
    ]));
  }
}), Rs = { class: "flex shrink-0 flex-col items-center" }, Hs = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, r1 = /* @__PURE__ */ M({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const o = e, a = b(() => o.kind === "laptop"), r = b(
      () => a.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = b(() => a.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), n("div", Rs, [
      l("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: X({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Hs)) : C("", !0),
        l("div", {
          class: A(["size-full overflow-hidden bg-white", s.value])
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
}), Us = { class: "flex items-center gap-2 overflow-x-auto" }, Ks = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Zs = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qs = { class: "flex flex-col" }, Gs = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, Ws = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Ys = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Js = /* @__PURE__ */ M({
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
    function c(v) {
      return a.failedStep === v;
    }
    return (v, x) => (t(), n("ol", Us, [
      (t(!0), n(S, null, V(e.steps, (p, g) => (t(), n("li", {
        key: g,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(Me(e.interactive ? "button" : "div"), Q({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(g)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: g > e.activeStep } : {}, {
          onClick: (y) => e.interactive && g <= e.activeStep && r("update:activeStep", g)
        }), {
          default: E(() => [
            l("span", {
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(g)])
            }, [
              c(g) ? (t(), n("svg", Ks, [...x[0] || (x[0] = [
                l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(g) ? (t(), n("svg", Zs, [...x[1] || (x[1] = [
                l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(S, { key: 2 }, [
                Y(f(g + 1), 1)
              ], 64))
            ], 2),
            l("span", qs, [
              l("span", null, f(p.label), 1),
              p.description ? (t(), n("span", Gs, f(p.description), 1)) : C("", !0)
            ]),
            e.hasError(g) ? (t(), n("span", Ws)) : C("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        g < e.steps.length - 1 ? (t(), n("span", Ys)) : C("", !0)
      ]))), 128))
    ]));
  }
}), Te = /* @__PURE__ */ new Map();
function he(e, o) {
  Te.set(e, o);
}
function Xs(e) {
  return Te.get(e);
}
function i1(e) {
  return Te.has(e);
}
function d1() {
  return [...Te.keys()].sort();
}
function u1() {
  Te.clear();
}
const Qs = ["aria-expanded"], er = ["aria-label", "onClick"], tr = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, ar = { class: "ml-auto flex shrink-0 items-center gap-1" }, nr = {
  key: 0,
  class: "border-b p-1"
}, or = ["placeholder"], lr = { class: "max-h-60 overflow-y-auto p-1" }, sr = ["aria-selected", "onMouseenter", "onClick"], rr = {
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
    const a = e, r = o, s = U(null), i = U(null), d = U(null), c = U(!1), v = U(""), x = U(0), p = U({ top: 0, left: 0, width: 0 }), g = b(
      () => a.modelValue.map(
        (j) => a.options.find((L) => L.value === j) ?? {
          value: j,
          label: String(j)
        }
      ).filter(Boolean)
    ), y = b(() => a.searchable ?? a.options.length > 6), $ = b(() => {
      const j = new Set(a.modelValue), L = v.value.trim().toLowerCase();
      return a.options.filter((T) => !j.has(T.value)).filter((T) => L ? T.label.toLowerCase().includes(L) : !0);
    }), z = b(() => a.max !== null && a.modelValue.length >= a.max);
    function w() {
      const j = s.value, L = i.value;
      if (!j || !L)
        return;
      const T = j.getBoundingClientRect(), N = L.getBoundingClientRect(), R = 8;
      let H = T.bottom + 4;
      H + N.height > window.innerHeight - R && T.top - N.height - 4 > R && (H = T.top - N.height - 4), p.value = {
        top: H,
        left: Math.min(Math.max(R, T.left), window.innerWidth - T.width - R),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: T.width
      };
    }
    async function k() {
      a.disabled || c.value || (c.value = !0, v.value = "", x.value = 0, await be(), w(), d.value?.focus());
    }
    function _() {
      c.value = !1, v.value = "";
    }
    function u() {
      c.value ? _() : k();
    }
    function h(j) {
      z.value || (r("update:modelValue", [...a.modelValue, j.value]), v.value = "", x.value = 0, be(() => {
        w(), d.value?.focus();
      }));
    }
    function P(j) {
      r(
        "update:modelValue",
        a.modelValue.filter((L) => L !== j)
      ), be(w);
    }
    function O() {
      r("update:modelValue", []), be(w);
    }
    function G(j) {
      if (!a.disabled) {
        if (j.key === "Escape" && c.value) {
          j.stopPropagation(), _();
          return;
        }
        if (j.key === "Backspace" && v.value === "" && a.modelValue.length > 0) {
          P(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!c.value && (j.key === "ArrowDown" || j.key === "Enter")) {
          j.preventDefault(), k();
          return;
        }
        if (c.value) {
          if (j.key === "ArrowDown")
            j.preventDefault(), x.value = Math.min(x.value + 1, $.value.length - 1);
          else if (j.key === "ArrowUp")
            j.preventDefault(), x.value = Math.max(x.value - 1, 0);
          else if (j.key === "Enter") {
            j.preventDefault();
            const L = $.value[x.value];
            L && h(L);
          }
        }
      }
    }
    function Z(j) {
      if (!c.value)
        return;
      const L = j.target;
      s.value?.contains(L) || i.value?.contains(L) || _();
    }
    function ae() {
      c.value && w();
    }
    return ie($, (j) => {
      x.value > j.length - 1 && (x.value = Math.max(0, j.length - 1));
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
        class: A(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          c.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": c.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: u
      }, [
        (t(!0), n(S, null, V(g.value, (T) => (t(), n("span", {
          key: T.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          Y(f(T.label) + " ", 1),
          l("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${T.label}`,
            onClick: fe((N) => P(T.value), ["stop"])
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
          ])], 8, er)
        ]))), 128)),
        g.value.length === 0 ? (t(), n("span", tr, f(e.placeholder), 1)) : C("", !0),
        l("span", ar, [
          g.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: fe(O, ["stop"])
          }, " Clear ")) : C("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground size-4 transition-transform", c.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...L[2] || (L[2] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Qs),
      (t(), D(ze, { to: "body" }, [
        W(we, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: E(() => [
            c.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: X({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              y.value ? (t(), n("div", nr, [
                oe(l("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": L[0] || (L[0] = (T) => v.value = T),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: G
                }, null, 40, or), [
                  [_e, v.value]
                ])
              ])) : C("", !0),
              l("div", lr, [
                (t(!0), n(S, null, V($.value, (T, N) => (t(), n("button", {
                  key: T.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", N === x.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": N === x.value,
                  onMouseenter: (R) => x.value = N,
                  onClick: (R) => h(T)
                }, f(T.label), 43, sr))), 128)),
                $.value.length === 0 ? (t(), n("p", rr, [
                  z.value ? (t(), n(S, { key: 0 }, [
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
}), ir = ["accept", "disabled"], dr = { class: "text-sm font-medium" }, ur = { key: 0 }, cr = { key: 1 }, fr = { class: "text-muted-foreground text-xs" }, pr = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, mr = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, vr = ["src"], hr = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, gr = { class: "min-w-0 flex-1" }, br = { class: "block truncate text-sm font-medium" }, xr = { class: "text-muted-foreground text-xs" }, yr = ["href"], kr = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, $r = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null), i = U(!1), d = U(null), c = U(null), v = U(null), x = b(() => a.accept.map((h) => `.${h}`).join(",")), p = b(() => v.value ?? a.modelValue?.url ?? null), g = b(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${y(a.maxKilobytes * 1024)}`);
    function y(h) {
      if (!h)
        return "";
      const P = ["B", "KB", "MB", "GB"];
      let O = h, G = 0;
      for (; O >= 1024 && G < P.length - 1; )
        O /= 1024, G++;
      return `${O.toFixed(O < 10 && G > 0 ? 1 : 0)} ${P[G]}`;
    }
    function $(h) {
      return h.split(".").pop()?.toLowerCase() ?? "";
    }
    function z(h) {
      return a.accept.length && !a.accept.includes($(h.name)) ? `${$(h.name).toUpperCase() || "That"} files are not accepted here.` : h.size > a.maxKilobytes * 1024 ? `That file is ${y(h.size)}; the limit is ${y(a.maxKilobytes * 1024)}.` : null;
    }
    async function w(h) {
      const P = h?.[0];
      if (!(!P || a.disabled) && (c.value = z(P), !c.value)) {
        k(), a.image && P.type.startsWith("image/") && (v.value = URL.createObjectURL(P)), d.value = 0;
        try {
          const O = await a.upload(P, (G) => {
            d.value = G;
          });
          r("update:modelValue", O);
        } catch (O) {
          c.value = O instanceof Error ? O.message : "The upload failed.", k();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function k() {
      v.value && URL.revokeObjectURL(v.value), v.value = null;
    }
    async function _() {
      const h = a.modelValue;
      k(), c.value = null, r("update:modelValue", null), h && !h.url && a.discard && await a.discard(h.value).catch(() => {
      });
    }
    function u(h) {
      i.value = !1, w(h.dataTransfer?.files ?? null);
    }
    return (h, P) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", mr, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, vr)) : (t(), n("span", hr, f($(e.modelValue.name) || "file"), 1)),
        l("span", gr, [
          l("span", br, f(e.modelValue.name), 1),
          l("span", xr, [
            Y(f(y(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(S, { key: 0 }, [
              P[4] || (P[4] = Y(" · ", -1)),
              l("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, yr)
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
          onClick: _
        }, [...P[5] || (P[5] = [
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
        class: A(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: P[1] || (P[1] = fe((O) => i.value = !0, ["prevent"])),
        onDragleave: P[2] || (P[2] = fe((O) => i.value = !1, ["prevent"])),
        onDrop: fe(u, ["prevent"])
      }, [
        l("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: x.value,
          disabled: e.disabled,
          onChange: P[0] || (P[0] = (O) => w(O.target.files))
        }, null, 40, ir),
        P[3] || (P[3] = l("svg", {
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
        l("span", dr, [
          d.value === null ? (t(), n("span", ur, "Drop a file or click to choose")) : (t(), n("span", cr, "Uploading…"))
        ]),
        l("span", fr, f(g.value), 1),
        d.value !== null ? (t(), n("span", pr, [
          l("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: X({ width: `${d.value}%` })
          }, null, 4)
        ])) : C("", !0)
      ], 34)),
      c.value ? (t(), n("p", kr, f(c.value), 1)) : C("", !0)
    ]));
  }
}), wr = { class: "flex flex-col gap-2" }, _r = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Cr = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, Mr = { class: "flex flex-col gap-1" }, Sr = ["onUpdate:modelValue", "disabled", "aria-label"], Br = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, zr = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Pr = ["onUpdate:modelValue", "disabled", "aria-label"], Ar = ["disabled", "aria-label", "onClick"], Or = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Lr = { class: "flex items-center gap-3" }, jr = ["disabled"], Vr = {
  key: 0,
  class: "text-muted-foreground text-xs tabular-nums"
}, Tr = /* @__PURE__ */ M({
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
    const d = U(c(a.modelValue));
    function c(w) {
      return w ? Object.entries(w).map(([k, _]) => ({
        uid: i++,
        key: k,
        value: _ ?? ""
      })) : [];
    }
    ie(
      () => a.modelValue,
      (w) => {
        JSON.stringify(w ?? null) !== JSON.stringify(v()) && (d.value = c(w));
      }
    );
    function v() {
      const w = {};
      for (const k of d.value) {
        const _ = k.key.trim();
        _ !== "" && (w[_] = k.value);
      }
      return Object.keys(w).length ? w : null;
    }
    function x() {
      r("update:modelValue", v());
    }
    const p = b(() => {
      const w = /* @__PURE__ */ new Map();
      for (const k of d.value) {
        const _ = k.key.trim();
        _ !== "" && w.set(_, (w.get(_) ?? 0) + 1);
      }
      return new Set([...w.entries()].filter(([, k]) => k > 1).map(([k]) => k));
    }), g = b(
      () => new Set(
        d.value.map((w) => w.key.trim()).filter((w) => w !== "" && !s.test(w))
      )
    ), y = b(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function $() {
      y.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function z(w) {
      d.value = d.value.filter((k) => k.uid !== w), x();
    }
    return (w, k) => (t(), n("div", wr, [
      d.value.length ? (t(), n("div", _r, [
        l("div", Cr, [
          l("span", null, f(e.keyLabel), 1),
          l("span", null, f(e.valueLabel), 1),
          k[0] || (k[0] = l("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(S, null, V(d.value, (_) => (t(), n("div", {
          key: _.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          l("div", Mr, [
            oe(l("input", {
              "onUpdate:modelValue": (u) => _.key = u,
              type: "text",
              class: A([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(_.key.trim()) || g.value.has(_.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: x
            }, null, 42, Sr), [
              [_e, _.key]
            ]),
            g.value.has(_.key.trim()) ? (t(), n("p", Br, " Letters, numbers, underscores and dashes only. ")) : p.value.has(_.key.trim()) ? (t(), n("p", zr, " Used twice - only the last value will be saved. ")) : C("", !0)
          ]),
          oe(l("input", {
            "onUpdate:modelValue": (u) => _.value = u,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: x
          }, null, 40, Pr), [
            [_e, _.value]
          ]),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${_.key || "this entry"}`,
            onClick: (u) => z(_.uid)
          }, [...k[1] || (k[1] = [
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
          ])], 8, Ar)
        ]))), 128))
      ])) : (t(), n("p", Or, " Nothing here yet. ")),
      l("div", Lr, [
        l("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || y.value,
          onClick: $
        }, [
          k[2] || (k[2] = l("svg", {
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
        ], 8, jr),
        e.maxPairs !== null ? (t(), n("p", Vr, f(d.value.length) + " of " + f(e.maxPairs), 1)) : C("", !0)
      ])
    ]));
  }
}), Dr = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Fr = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Er = ["disabled", "title", "aria-label", "onClick"], Ir = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nr = ["d"], Rr = ["disabled"], Hr = ["contenteditable", "data-placeholder"], Ur = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Kr = /* @__PURE__ */ M({
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
    ], c = b(() => d.filter((z) => a.toolbar.includes(z.id))), v = b(() => a.toolbar.includes("link")), x = U(0);
    function p() {
      const z = s.value?.innerHTML ?? "", w = (s.value?.innerText ?? "").trim();
      x.value = w.length;
      const k = w === "" ? null : z;
      i = k, r("update:modelValue", k);
    }
    function g(z) {
      a.disabled || (s.value?.focus(), document.execCommand(z.command, !1, z.argument), p());
    }
    function y() {
      if (a.disabled)
        return;
      const z = window.prompt("Link address");
      z && (s.value?.focus(), document.execCommand("createLink", !1, z), p());
    }
    function $(z) {
      z.preventDefault();
      const w = z.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, w), p();
    }
    return re(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", x.value = s.value.innerText.trim().length);
    }), ie(
      () => a.modelValue,
      (z) => {
        z !== i && s.value && (s.value.innerHTML = z ?? "", x.value = s.value.innerText.trim().length);
      }
    ), (z, w) => (t(), n("div", Dr, [
      l("div", Fr, [
        (t(!0), n(S, null, V(c.value, (k) => (t(), n("button", {
          key: k.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: k.label,
          "aria-label": k.label,
          onMousedown: w[0] || (w[0] = fe(() => {
          }, ["prevent"])),
          onClick: (_) => g(k)
        }, [
          (t(), n("svg", Ir, [
            l("path", {
              d: k.path
            }, null, 8, Nr)
          ]))
        ], 40, Er))), 128)),
        v.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: w[1] || (w[1] = fe(() => {
          }, ["prevent"])),
          onClick: y
        }, [...w[2] || (w[2] = [
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
        ])], 40, Rr)) : C("", !0)
      ]),
      l("div", {
        ref_key: "editor",
        ref: s,
        class: A(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: $
      }, null, 42, Hr),
      e.maxLength !== null ? (t(), n("div", Ur, f(x.value) + " / " + f(e.maxLength), 1)) : C("", !0)
    ]));
  }
}), Zr = /* @__PURE__ */ st(Kr, [["__scopeId", "data-v-32c63bc7"]]), qr = {
  key: 1,
  class: "flex flex-col gap-1.5"
}, Gr = ["for"], Wr = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Yr = {
  key: 7,
  class: "relative"
}, Jr = ["disabled", "aria-invalid"], Xr = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Qr = { class: "max-h-56 overflow-y-auto p-1" }, ei = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, ti = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, ai = ["onClick"], ni = ["id", "value", "disabled", "aria-invalid"], oi = ["value"], li = {
  key: 9,
  class: "flex items-center gap-2 text-sm"
}, si = { class: "text-muted-foreground" }, ri = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, ii = { class: "text-muted-foreground" }, di = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], ui = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], ci = {
  key: 13,
  class: "flex flex-wrap gap-1.5"
}, fi = ["disabled", "aria-pressed", "onClick"], pi = {
  key: 14,
  class: "flex flex-wrap gap-1.5"
}, mi = ["title", "disabled", "onClick"], vi = {
  key: 15,
  class: "text-destructive text-xs",
  role: "alert"
}, hi = {
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
    const a = ut(() => import("./PkRepeater-J84jGe3T.js")), r = ut(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = o, d = U(!1), c = U(""), v = U([]), x = U(!1), p = U(null);
    let g;
    ie(c, (_) => {
      s.searchOptions && (clearTimeout(g), x.value = !0, g = setTimeout(async () => {
        try {
          v.value = await s.searchOptions(_);
        } catch {
        } finally {
          x.value = !1;
        }
      }, 200));
    });
    async function y() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, v.value.length === 0 && s.searchOptions)) {
        x.value = !0;
        try {
          v.value = await s.searchOptions("");
        } finally {
          x.value = !1;
        }
      }
    }
    function $(_) {
      p.value = _.label, i("change", _.value), d.value = !1, c.value = "";
    }
    function z() {
      p.value = null, i("change", null);
    }
    de(() => clearTimeout(g));
    const w = b(() => Xs(s.field.type));
    function k(_) {
      const u = document.getElementById(`f-${s.field.key}`);
      if (!(u instanceof HTMLTextAreaElement) && !(u instanceof HTMLInputElement))
        return;
      const h = u.selectionStart ?? u.value.length, P = u.selectionEnd ?? h;
      u.setRangeText(_, h, P, "end"), u.dispatchEvent(new Event("input", { bubbles: !0 })), u.focus();
    }
    return (_, u) => e.field.type === "hidden" ? (t(), n(S, { key: 0 }, [], 64)) : (t(), n("div", qr, [
      l("label", {
        for: `f-${e.field.key}`,
        class: A(["text-sm font-medium", { "sr-only": e.field.labelHidden }])
      }, [
        Y(f(e.field.label) + " ", 1),
        e.field.required ? (t(), n("span", Wr, "*")) : C("", !0)
      ], 10, Gr),
      w.value ? (t(), D(Me(w.value), {
        key: 0,
        field: e.field,
        "model-value": e.value,
        values: e.values,
        options: e.options,
        errors: e.errors,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => i("change", h))
      }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D($r, {
        key: 1,
        "model-value": e.value ?? null,
        accept: e.field.accept ?? [],
        "max-kilobytes": e.field.maxKilobytes ?? 10240,
        image: e.field.image ?? !1,
        disabled: e.field.disabled || e.processing,
        upload: e.upload,
        discard: e.discard,
        "onUpdate:modelValue": u[1] || (u[1] = (h) => i("change", h))
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
        "onUpdate:modelValue": u[2] || (u[2] = (h) => i("change", h))
      }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(m(r), {
        key: 3,
        "model-value": e.value ?? null,
        blocks: e.field.blocks ?? [],
        "max-blocks": e.field.maxBlocks ?? null,
        disabled: e.field.disabled || e.processing,
        errors: e.errors,
        "onUpdate:modelValue": u[3] || (u[3] = (h) => i("change", h))
      }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Zr, {
        key: 4,
        "model-value": e.value ?? null,
        toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
        "max-length": e.field.maxLength ?? null,
        placeholder: e.field.placeholder ?? "Write a note…",
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": u[4] || (u[4] = (h) => i("change", h))
      }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(Tr, {
        key: 5,
        "model-value": e.value ?? null,
        "key-label": e.field.keyLabel ?? "Key",
        "value-label": e.field.valueLabel ?? "Value",
        "max-pairs": e.field.maxPairs ?? null,
        disabled: e.field.disabled || e.processing,
        "onUpdate:modelValue": u[5] || (u[5] = (h) => i("change", h))
      }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(Lt, {
        key: 6,
        "model-value": Array.isArray(e.value) ? e.value : [],
        options: e.options ?? [],
        disabled: e.field.disabled || e.processing,
        max: e.field.max ?? null,
        placeholder: e.field.placeholder ?? "Select…",
        "onUpdate:modelValue": u[6] || (u[6] = (h) => i("change", h))
      }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Yr, [
        l("button", {
          type: "button",
          class: "border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          onClick: y
        }, [
          l("span", {
            class: A(p.value || e.value ? "" : "text-muted-foreground")
          }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
          e.value ? (t(), n("span", {
            key: 0,
            class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
            role: "button",
            "aria-label": "Clear selection",
            onClick: fe(z, ["stop"])
          }, " ✕ ")) : C("", !0)
        ], 8, Jr),
        d.value ? (t(), n("div", Xr, [
          oe(l("input", {
            "onUpdate:modelValue": u[7] || (u[7] = (h) => c.value = h),
            type: "search",
            class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
            placeholder: "Type to search…",
            autofocus: ""
          }, null, 512), [
            [_e, c.value]
          ]),
          l("div", Qr, [
            x.value ? (t(), n("p", ei, " Searching… ")) : v.value.length === 0 ? (t(), n("p", ti, " No matches ")) : C("", !0),
            (t(!0), n(S, null, V(v.value, (h) => (t(), n("button", {
              key: String(h.value),
              type: "button",
              class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
              onClick: (P) => $(h)
            }, f(h.label), 9, ai))), 128))
          ])
        ])) : C("", !0),
        d.value ? (t(), n("div", {
          key: 1,
          class: "fixed inset-0 z-40",
          onClick: u[8] || (u[8] = (h) => d.value = !1)
        })) : C("", !0)
      ])) : e.field.type === "select" ? (t(), n("select", {
        key: 8,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onChange: u[9] || (u[9] = (h) => i("change", h.target.value || null))
      }, [
        u[14] || (u[14] = l("option", { value: "" }, "-", -1)),
        (t(!0), n(S, null, V(e.options, (h) => (t(), n("option", {
          key: String(h.value),
          value: h.value
        }, f(h.label), 9, oi))), 128))
      ], 40, ni)) : e.field.type === "toggle" ? (t(), n("label", li, [
        W(m(zs), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": u[10] || (u[10] = (h) => i("change", h))
        }, null, 8, ["id", "model-value", "disabled"]),
        l("span", si, f(e.field.help ?? "Enabled"), 1)
      ])) : e.field.type === "checkbox" ? (t(), n("label", ri, [
        W(m(Bs), {
          id: `f-${e.field.key}`,
          "model-value": !!e.value,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": u[11] || (u[11] = (h) => i("change", h === !0))
        }, null, 8, ["id", "model-value", "disabled"]),
        l("span", ii, f(e.field.help ?? e.field.label), 1)
      ])) : e.field.type === "textarea" ? (t(), n("textarea", {
        key: 11,
        id: `f-${e.field.key}`,
        value: e.value ?? "",
        rows: e.field.rows ?? 3,
        placeholder: e.field.placeholder,
        disabled: e.field.disabled || e.processing,
        "aria-invalid": !!e.error,
        class: "border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
        onInput: u[12] || (u[12] = (h) => i("change", h.target.value))
      }, null, 40, di)) : (t(), n("input", {
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
        onInput: u[13] || (u[13] = (h) => i("change", h.target.value))
      }, null, 40, ui)),
      e.field.type === "number" && e.field.presets?.length ? (t(), n("div", ci, [
        (t(!0), n(S, null, V(e.field.presets, (h) => (t(), n("button", {
          key: h,
          type: "button",
          disabled: e.field.disabled || e.processing,
          class: A([
            "focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == h ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
          ]),
          "aria-pressed": (
            // eslint-disable-next-line eqeqeq
            e.value != null && e.value == h
          ),
          onClick: (P) => i("change", String(h))
        }, f(h), 11, fi))), 128))
      ])) : C("", !0),
      e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", pi, [
        (t(!0), n(S, null, V(e.field.chips, (h, P) => (t(), n("button", {
          key: P,
          type: "button",
          title: h,
          disabled: e.field.disabled || e.processing,
          class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
          onClick: (O) => k(String(P))
        }, f(P), 9, mi))), 128))
      ])) : C("", !0),
      e.error ? (t(), n("p", vi, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", hi, f(e.field.help), 1)) : C("", !0)
    ]));
  }
}), gi = { class: "flex flex-col gap-2" }, bi = { class: "min-w-0 flex-1" }, xi = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, yi = ["disabled", "aria-label", "onClick"], ki = ["disabled", "aria-label", "onClick"], $i = ["disabled", "title", "aria-label", "onClick"], wi = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, _i = ["disabled"], c1 = /* @__PURE__ */ M({
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
    function d(_) {
      return Array.isArray(_) ? _.map((u) => ({ uid: s++, data: { ...u } })) : [];
    }
    ie(
      () => a.modelValue,
      (_) => {
        JSON.stringify(_ ?? null) !== JSON.stringify(c()) && (i.value = d(_));
      }
    );
    function c() {
      const _ = [];
      for (const u of i.value) {
        const h = {};
        let P = !1;
        for (const O of a.children) {
          const G = u.data[O.key] ?? null;
          h[O.key] = G, G !== null && G !== "" && !(Array.isArray(G) && G.length === 0) && (P = !0);
        }
        P && _.push(h);
      }
      return _.length ? _ : null;
    }
    function v() {
      r("update:modelValue", c());
    }
    const x = b(() => a.maxItems !== null && i.value.length >= a.maxItems), p = b(() => a.minItems !== null && i.value.length <= a.minItems), g = b(() => a.children.length === 1);
    function y() {
      if (x.value || a.disabled)
        return;
      const _ = {};
      for (const u of a.children)
        _[u.key] = null;
      i.value.push({ uid: s++, data: _ });
    }
    function $(_) {
      i.value = i.value.filter((u) => u.uid !== _), v();
    }
    function z(_, u) {
      const h = _ + u;
      if (h < 0 || h >= i.value.length)
        return;
      const P = [...i.value], [O] = P.splice(_, 1);
      P.splice(h, 0, O), i.value = P, v();
    }
    function w(_, u, h) {
      const P = i.value.find((O) => O.uid === _);
      P && (P.data[u] = h, v());
    }
    function k(_, u) {
      return a.errors[`${a.fieldKey}.${_}.${u}`];
    }
    return (_, u) => (t(), n("div", gi, [
      (t(!0), n(S, null, V(i.value, (h, P) => (t(), n("div", {
        key: h.uid,
        class: "flex items-start gap-2"
      }, [
        l("span", {
          class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", g.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(P + 1), 3),
        l("div", bi, [
          g.value ? (t(), D(Ve, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: h.data[e.children[0].key],
            error: k(P, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (O) => w(h.uid, e.children[0].key, O)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", xi, [
            (t(!0), n(S, null, V(e.children, (O) => (t(), D(Ve, {
              key: O.key,
              field: { ...O, disabled: O.disabled || e.disabled },
              value: h.data[O.key],
              error: k(P, O.key),
              options: e.childOptions[O.key] ?? [],
              onChange: (G) => w(h.uid, O.key, G)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        l("div", {
          class: A(["flex shrink-0 items-center gap-0.5", g.value ? "mt-1" : "mt-0"])
        }, [
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || P === 0,
            "aria-label": `Move ${e.itemLabel} ${P + 1} up`,
            onClick: (O) => z(P, -1)
          }, [...u[0] || (u[0] = [
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
          ])], 8, yi),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || P === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${P + 1} down`,
            onClick: (O) => z(P, 1)
          }, [...u[1] || (u[1] = [
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
          ])], 8, ki),
          l("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${P + 1}`,
            onClick: (O) => $(h.uid)
          }, [...u[2] || (u[2] = [
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
          ])], 8, $i)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", wi, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : C("", !0),
      x.value ? C("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: y
      }, [
        u[3] || (u[3] = l("svg", {
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
      ], 8, _i))
    ]));
  }
}), Ci = { class: "space-y-1" }, Mi = { class: "flex items-center gap-1" }, Si = ["disabled", "title", "aria-label", "onClick"], Bi = ["aria-pressed"], zi = ["id", "value", "rows", "disabled"], Pi = ["innerHTML"], Ai = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(!1), i = b(() => a.modelValue ?? "");
    function d(g) {
      return g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const c = b(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function v(g, y = g) {
      const $ = document.getElementById(a.id ?? "");
      if ($ === null)
        return;
      const z = $.selectionStart, w = $.selectionEnd, k = i.value.slice(z, w);
      r(
        "update:modelValue",
        `${i.value.slice(0, z)}${g}${k}${y}${i.value.slice(w)}`
      );
    }
    const x = {
      bold: { label: "B", run: () => v("**") },
      italic: { label: "I", run: () => v("*") },
      code: { label: "</>", run: () => v("`") },
      heading: { label: "H", run: () => v("## ", "") },
      list: { label: "•", run: () => v("- ", "") },
      link: { label: "🔗", run: () => v("[", "](https://)") }
    }, p = b(
      () => (a.toolbar ?? Object.keys(x)).filter((g) => g in x)
    );
    return (g, y) => (t(), n("div", Ci, [
      l("div", Mi, [
        (t(!0), n(S, null, V(p.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          disabled: e.disabled,
          title: $,
          "aria-label": $,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (z) => x[$].run()
        }, f(x[$].label), 9, Si))), 128)),
        l("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: y[0] || (y[0] = ($) => s.value = !s.value)
        }, " Preview ", 8, Bi)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: c.value
      }, null, 8, Pi)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: y[1] || (y[1] = ($) => r("update:modelValue", $.target.value))
      }, null, 40, zi))
    ]));
  }
}), Oi = { class: "space-y-1" }, Li = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, ji = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Vi = ["id", "value", "rows", "disabled"], Ti = { class: "text-muted-foreground text-xs" }, Di = {
  key: 0,
  class: "text-destructive text-xs"
}, Fi = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(null), i = U(!0), d = b(() => a.modelValue ?? ""), c = b(() => Math.max(d.value.split(`
`).length, 1)), v = b(() => {
      if (a.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (g) {
        return g instanceof Error ? g.message : "Not valid JSON.";
      }
    });
    function x(g) {
      r("update:modelValue", g.target.value);
    }
    function p(g) {
      if (g.key === "Escape") {
        i.value = !1;
        return;
      }
      if (g.key !== "Tab" && (i.value = !0), g.key !== "Tab" || !i.value)
        return;
      g.preventDefault();
      const y = g.target, $ = y.selectionStart, z = y.selectionEnd, w = `${d.value.slice(0, $)}    ${d.value.slice(z)}`;
      r("update:modelValue", w), requestAnimationFrame(() => {
        y.selectionStart = y.selectionEnd = $ + 4;
      });
    }
    return (g, y) => (t(), n("div", Oi, [
      l("div", Li, [
        l("div", ji, [
          (t(!0), n(S, null, V(c.value, ($) => (t(), n("div", { key: $ }, f($), 1))), 128))
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
          onInput: x,
          onKeydown: p
        }, null, 40, Vi)
      ]),
      l("p", Ti, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      v.value ? (t(), n("p", Di, f(v.value), 1)) : C("", !0)
    ]));
  }
}), Ei = { class: "space-y-3" }, Ii = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Ni = { class: "text-sm font-medium" }, Ri = { class: "flex items-center gap-1" }, Hi = ["disabled", "onClick"], Ui = ["disabled", "onClick"], Ki = ["disabled", "onClick"], Zi = { class: "space-y-3 p-3" }, qi = { class: "flex flex-wrap items-center gap-2" }, Gi = ["disabled", "onClick"], Wi = {
  key: 0,
  class: "text-muted-foreground text-xs"
}, f1 = /* @__PURE__ */ M({
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
    const a = e, r = o, s = b(() => a.modelValue ?? []), i = b(
      () => Object.fromEntries(a.blocks.map((y) => [y.type, y]))
    ), d = b(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function c(y) {
      r("update:modelValue", y);
    }
    function v(y) {
      d.value || c([...s.value, { type: y, data: {} }]);
    }
    function x(y) {
      c(s.value.filter(($, z) => z !== y));
    }
    function p(y, $) {
      const z = y + $;
      if (z < 0 || z >= s.value.length)
        return;
      const w = [...s.value], [k] = w.splice(y, 1);
      w.splice(z, 0, k), c(w);
    }
    function g(y, $, z) {
      c(
        s.value.map(
          (w, k) => k === y ? { ...w, data: { ...w.data, [$]: z } } : w
        )
      );
    }
    return (y, $) => (t(), n("div", Ei, [
      (t(!0), n(S, null, V(s.value, (z, w) => (t(), n("div", {
        key: `${z.type}-${w}`,
        class: "bg-card rounded-lg border"
      }, [
        l("div", Ii, [
          l("span", Ni, f(i.value[z.type]?.label ?? z.type), 1),
          l("div", Ri, [
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || w === 0,
              "aria-label": "Move up",
              onClick: (k) => p(w, -1)
            }, " ↑ ", 8, Hi),
            l("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || w === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (k) => p(w, 1)
            }, " ↓ ", 8, Ui),
            l("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (k) => x(w)
            }, " Remove ", 8, Ki)
          ])
        ]),
        l("div", Zi, [
          (t(!0), n(S, null, V(i.value[z.type]?.fields ?? [], (k) => (t(), D(Ve, {
            key: k.key,
            field: k,
            value: z.data[k.key] ?? null,
            error: e.errors?.[k.key],
            processing: e.disabled,
            onChange: (_) => g(w, k.key, _)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      l("div", qi, [
        (t(!0), n(S, null, V(e.blocks, (z) => (t(), n("button", {
          key: z.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (w) => v(z.type)
        }, " + " + f(z.label), 9, Gi))), 128)),
        d.value ? (t(), n("span", Wi, f(e.maxBlocks) + " is the maximum here. ", 1)) : C("", !0)
      ])
    ]));
  }
}), Yi = ["name", "value", "checked", "disabled", "onChange"], Ji = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Xi = /* @__PURE__ */ M({
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
      class: A(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(S, null, V(e.options, (c) => (t(), n("label", {
        key: String(c.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: c.value,
          checked: s(c),
          disabled: e.disabled,
          onChange: (v) => r("update:modelValue", c.value)
        }, null, 40, Yi),
        Y(" " + f(c.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Ji, " Nothing to choose from yet. ")) : C("", !0)
    ], 2));
  }
}), Qi = ["value", "checked", "disabled", "onChange"], ed = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, td = /* @__PURE__ */ M({
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
    const a = e, r = o, s = b(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function i(v) {
      return s.value.some((x) => x == v.value);
    }
    function d(v) {
      r(
        "update:modelValue",
        i(v) ? s.value.filter((x) => x != v.value) : [...s.value, v.value]
      );
    }
    const c = b(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (v, x) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: X(c.value)
    }, [
      (t(!0), n(S, null, V(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        l("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (g) => d(p)
        }, null, 40, Qi),
        Y(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", ed, " Nothing to choose from yet. ")) : C("", !0)
    ], 4));
  }
}), ad = { class: "flex flex-col gap-1.5" }, nd = ["aria-label", "onClick"], od = ["placeholder", "disabled", "maxlength"], ld = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, sd = ["onClick"], rd = {
  key: 1,
  class: "text-muted-foreground text-xs"
}, id = /* @__PURE__ */ M({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = U(""), i = b(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), d = b(() => i.value.length >= (a.field.max ?? 25)), c = b(
      () => (a.field.suggestions ?? []).filter(
        (g) => !i.value.some((y) => y.toLowerCase() === g.toLowerCase())
      )
    );
    function v(g) {
      const y = g.trim().slice(0, a.field.maxLength ?? 40);
      if (y === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some(($) => $.toLowerCase() === y.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, y]), s.value = "";
    }
    function x(g) {
      r(
        "update:modelValue",
        i.value.filter((y, $) => $ !== g)
      );
    }
    function p(g) {
      if (g.key === "Enter" || g.key === ",") {
        g.preventDefault(), v(s.value);
        return;
      }
      g.key === "Backspace" && s.value === "" && i.value.length > 0 && x(i.value.length - 1);
    }
    return (g, y) => (t(), n("div", ad, [
      l("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(S, null, V(i.value, ($, z) => (t(), n("span", {
          key: `${$}-${z}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          Y(f($) + " ", 1),
          e.disabled ? C("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${$}`,
            onClick: (w) => x(z)
          }, " × ", 8, nd))
        ]))), 128)),
        oe(l("input", {
          "onUpdate:modelValue": y[0] || (y[0] = ($) => s.value = $),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: y[1] || (y[1] = ($) => v(s.value))
        }, null, 40, od), [
          [_e, s.value]
        ])
      ], 2),
      c.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", ld, [
        y[2] || (y[2] = l("span", { class: "text-muted-foreground text-xs" }, "Suggestions:", -1)),
        (t(!0), n(S, null, V(c.value, ($) => (t(), n("button", {
          key: $,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (z) => v($)
        }, f($), 9, sd))), 128))
      ])) : C("", !0),
      d.value ? (t(), n("p", rd, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : C("", !0)
    ]));
  }
}), dd = 4.5, gt = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
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
function ud(e, o, a) {
  if (!gt.test(e) || !gt.test(o))
    return e;
  const r = Xe(o) > 0.5, s = r ? 0 : 255;
  let i = jt(e);
  for (let d = 0; d <= 20; d++) {
    const c = cd(i);
    if (Vt(c, o) >= a)
      return c;
    i = i.map((v) => v + (s - v) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function cd(e) {
  return "#" + e.map(
    (o) => Math.round(Math.max(0, Math.min(255, o))).toString(16).padStart(2, "0")
  ).join("");
}
const fd = { class: "flex flex-col gap-2" }, pd = { class: "flex items-center gap-2" }, md = {
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
}, vd = ["value", "disabled", "aria-label"], hd = ["value", "disabled", "placeholder"], gd = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, bd = ["aria-label", "title", "onClick"], xd = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, yd = /* @__PURE__ */ M({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = b(() => typeof a.modelValue == "string" ? a.modelValue : ""), d = b(() => s.test(i.value));
    function c($) {
      const z = $.trim();
      if (z === "")
        return "";
      const w = z.startsWith("#") ? z : `#${z}`;
      return s.test(w) ? w.toLowerCase() : z;
    }
    function v($) {
      r("update:modelValue", c($.target.value));
    }
    const x = b(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Vt(i.value, a.field.contrastBackground)), p = b(() => a.field.contrastMinRatio ?? dd), g = b(() => x.value !== null && x.value < p.value);
    function y() {
      a.field.contrastBackground && r(
        "update:modelValue",
        ud(i.value, a.field.contrastBackground, p.value)
      );
    }
    return ($, z) => (t(), n("div", fd, [
      l("div", pd, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: z[0] || (z[0] = (w) => r("update:modelValue", w.target.value))
        }, null, 40, vd)) : (t(), n("span", md)),
        l("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: v
        }, null, 40, hd)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", gd, [
        (t(!0), n(S, null, V(e.field.presets, (w) => (t(), n("button", {
          key: w,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === w.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: X({ backgroundColor: w }),
          "aria-label": w,
          title: w,
          onClick: (k) => r("update:modelValue", w.toLowerCase())
        }, null, 14, bd))), 128))
      ])) : C("", !0),
      g.value ? (t(), n("p", xd, [
        l("span", null, " This fails contrast at " + f(x.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? C("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: y
        }, " Use a readable shade "))
      ])) : C("", !0)
    ]));
  }
}), kd = { class: "flex items-center gap-3" }, $d = ["min", "max", "step", "value", "disabled", "aria-label"], wd = { class: "flex shrink-0 items-center gap-1" }, _d = ["min", "max", "step", "value", "disabled"], Cd = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, Md = /* @__PURE__ */ M({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, r = o, s = b(() => a.field.min ?? 0), i = b(() => a.field.max ?? 100), d = b(() => a.field.step ?? 1), c = b(() => {
      const p = Number(a.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), v = b(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function x(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const g = Number(p);
      r("update:modelValue", Number.isFinite(g) ? g : null);
    }
    return (p, g) => (t(), n("div", kd, [
      l("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: c.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: g[0] || (g[0] = (y) => x(y.target.value))
      }, null, 40, $d),
      l("div", wd, [
        l("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: v.value ? "" : c.value,
          disabled: e.disabled,
          onInput: g[1] || (g[1] = (y) => x(y.target.value))
        }, null, 40, _d),
        e.field.unit ? (t(), n("span", Cd, f(e.field.unit), 1)) : C("", !0)
      ])
    ]));
  }
}), De = /* @__PURE__ */ new Map();
function Ze(e, o) {
  De.set(e, o);
}
function Sd(e) {
  return De.get(e);
}
function p1(e) {
  return De.has(e);
}
function Bd() {
  return [...De.keys()].sort();
}
function m1() {
  De.clear();
}
const zd = ["name", "value", "checked", "disabled", "onChange"], Pd = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Ad = { class: "whitespace-nowrap" }, Od = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Ld = ["name", "value", "checked", "disabled", "onChange"], jd = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Vd = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Td = { class: "text-center text-xs font-medium" }, Dd = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Fd = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Ed = /* @__PURE__ */ M({
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
    const a = e, r = o, s = b(
      () => a.field.preview ? Sd(a.field.preview) : void 0
    ), i = b(() => !!a.field.preview && !s.value), d = b(() => a.field.layout === "segmented"), c = b(() => {
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
    function v(x) {
      return a.modelValue != null && x.value == a.modelValue;
    }
    return (x, p) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(S, null, V(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: A(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          v(g) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: g.value,
          checked: v(g),
          disabled: e.disabled,
          onChange: (y) => r("update:modelValue", g.value)
        }, null, 40, zd),
        p[0] || (p[0] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Pd, [
          (t(), D(Me(s.value), {
            value: g.value,
            label: g.label,
            selected: v(g)
          }, null, 8, ["value", "label", "selected"]))
        ])) : C("", !0),
        l("span", Ad, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Od, " Nothing to choose from yet. ")) : C("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", c.value])
    }, [
      (t(!0), n(S, null, V(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: A(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          v(g) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        l("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: g.value,
          checked: v(g),
          disabled: e.disabled,
          onChange: (y) => r("update:modelValue", g.value)
        }, null, 40, Ld),
        p[1] || (p[1] = l("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        l("span", jd, [
          s.value ? (t(), D(Me(s.value), {
            key: 0,
            value: g.value,
            label: g.label,
            selected: v(g)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Vd, " no preview ")) : C("", !0)
        ]),
        l("span", Td, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Dd, " Nothing to choose from yet. ")) : C("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Fd, [
        p[2] || (p[2] = Y(" No preview registered for ", -1)),
        l("code", null, f(e.field.preview), 1),
        Y(". Registered: " + f(m(Bd)().join(", ") || "none") + ". ", 1)
      ])) : C("", !0)
    ], 2));
  }
}), Id = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Nd = /* @__PURE__ */ M({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, a) => (t(), n("span", Id, [
      l("span", {
        class: "block size-full",
        style: X({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Rd = { class: "flex flex-col items-center gap-1 text-center" }, Hd = {
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
    const o = e, a = b(() => o.mono ? "#000000" : o.accent), r = b(() => {
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
    return (s, i) => (t(), n("div", Rd, [
      l("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: X({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Hd, f(e.caption), 1)) : C("", !0)
    ]));
  }
}), Ud = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Kd = { class: "flex items-center gap-3" }, Zd = ["src"], qd = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Gd = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Wd = {
  key: 0,
  class: "text-right text-sm"
}, Yd = { class: "text-neutral-500" }, Jd = { class: "tabular-nums" }, Xd = { key: 1 }, Qd = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, eu = { class: "mt-2 font-medium" }, tu = { key: 2 }, au = { class: "w-full text-sm" }, nu = { class: "w-full py-3 pr-2" }, ou = {
  key: 0,
  class: "text-xs text-neutral-500"
}, lu = { key: 0 }, su = ["colspan"], ru = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, iu = { class: "w-64 text-sm" }, du = { class: "tabular-nums" }, uu = {
  key: 3,
  class: "py-2"
}, cu = { key: 4 }, fu = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, pu = { class: "mt-2 flex flex-col gap-1 text-sm" }, mu = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, vu = { key: 0 }, hu = {
  key: 1,
  class: "mt-1"
}, gu = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, v1 = /* @__PURE__ */ M({
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
    function c(v) {
      return v ?? "";
    }
    return (v, x) => (t(), n("article", Ud, [
      l("div", Kd, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Zd)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: X({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(S, null, V(e.document.blocks, (p, g) => (t(), n(S, { key: g }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: X({ borderColor: a() })
        }, [
          l("div", null, [
            l("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: X({ color: a() })
            }, f(p.title), 5),
            p.subtitle ? (t(), n("p", qd, f(p.subtitle), 1)) : C("", !0),
            p.reference ? (t(), n("p", Gd, f(p.reference), 1)) : C("", !0)
          ]),
          r(p).length ? (t(), n("dl", Wd, [
            (t(!0), n(S, null, V(r(p), (y, $) => (t(), n("div", {
              key: $,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              l("dt", Yd, f(y.label), 1),
              l("dd", Jd, f(y.value), 1)
            ]))), 128))
          ])) : C("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", Xd, [
          l("h2", Qd, f(p.heading), 1),
          l("p", eu, f(p.name), 1),
          (t(!0), n(S, null, V(d(p.lines), (y, $) => (t(), n("p", {
            key: $,
            class: "text-sm text-neutral-600"
          }, f(y), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", tu, [
          l("table", au, [
            l("thead", null, [
              l("tr", {
                class: "border-b-2 text-left",
                style: X({ borderColor: a() })
              }, [
                (t(!0), n(S, null, V(d(p.columns), (y, $) => (t(), n("th", {
                  key: $,
                  class: A(["pb-2 font-medium", $ > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(y), 3))), 128))
              ], 4)
            ]),
            l("tbody", null, [
              (t(!0), n(S, null, V(s(p), (y, $) => (t(), n("tr", {
                key: $,
                class: "border-b border-neutral-200"
              }, [
                l("td", nu, [
                  l("p", null, f(y.description), 1),
                  y.detail ? (t(), n("p", ou, f(y.detail), 1)) : C("", !0)
                ]),
                (t(!0), n(S, null, V(y.cells, (z, w) => (t(), n("td", {
                  key: w,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(z), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", lu, [
                l("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, su)
              ])) : C("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", ru, [
            l("dl", iu, [
              (t(!0), n(S, null, V(i(p), (y, $) => (t(), n("div", {
                key: $,
                class: A([
                  "flex justify-between py-1",
                  y.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: X(y.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                l("dt", {
                  class: A(y.strong ? "" : "text-neutral-600")
                }, f(y.label), 3),
                l("dd", du, f(y.value), 1)
              ], 6))), 128))
            ])
          ])) : C("", !0)
        ])) : p.type === "code" ? (t(), n("section", uu, [
          W(Tt, {
            code: c(p.code),
            caption: c(p.caption),
            style: X(c(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", cu, [
          l("h2", fu, f(p.heading), 1),
          l("ol", pu, [
            (t(!0), n(S, null, V(d(p.items), (y, $) => (t(), n("li", {
              key: $,
              class: "flex gap-2"
            }, [
              l("span", {
                class: "font-semibold tabular-nums",
                style: X({ color: a() })
              }, f($ + 1) + ".", 5),
              l("span", null, f(y), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: A(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: X(p.emphasis ? { color: a() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), n("footer", mu, [
          p.text ? (t(), n("p", vu, f(p.text), 1)) : C("", !0),
          d(p.contacts).length ? (t(), n("p", hu, f(d(p.contacts).join(" · ")), 1)) : C("", !0)
        ])) : (t(), n("p", gu, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), bu = ["aria-label", "title"], xu = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yu = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, h1 = /* @__PURE__ */ M({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: o, set: a } = At(), r = b(() => o.value.theme === "dark");
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
      (t(), n("svg", xu, [
        r.value ? (t(), n(S, { key: 0 }, [
          d[0] || (d[0] = l("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = l("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", yu))
      ]))
    ], 8, bu));
  }
}), ku = ["width", "height"], $u = { key: 0 }, wu = ["x1", "x2", "y1", "y2"], _u = ["x", "y"], Cu = ["x1", "x2", "y1", "y2"], Mu = ["x", "y"], Su = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Bu = ["x", "y", "width", "height", "fill", "fill-opacity"], zu = ["x", "y"], Pu = ["x", "y"], Au = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Ou = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Lu = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, ju = { class: "text-xs font-semibold tabular-nums" }, Vu = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Tu = { class: "text-muted-foreground" }, bt = 5.6, g1 = /* @__PURE__ */ M({
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
    const i = U(null), d = U(560), c = U(null);
    let v = null;
    re(() => {
      v = new ResizeObserver((B) => {
        d.value = Math.max(160, B[0].contentRect.width);
      }), i.value && v.observe(i.value);
    }), de(() => v?.disconnect());
    const x = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = b(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((K, F) => ({
      ...K,
      color: K.color ?? x[F % x.length]
    }))), g = b(() => p.value[0]?.points.map((B) => B.label) ?? []), y = b(() => g.value.length), $ = b(() => o.orientation === "horizontal"), z = b(() => Math.max(0, ...g.value.map((B) => B.length))), w = b(() => {
      if (!$.value)
        return o.showAxis ? 44 : 8;
      const B = z.value * bt + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), k = b(() => Math.max(4, Math.floor((w.value - 16) / bt)));
    function _(B) {
      return B.length <= k.value ? B : `${B.slice(0, k.value - 1)}…`;
    }
    const u = b(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: w.value
    })), h = b(() => ({
      w: Math.max(1, d.value - u.value.left - u.value.right),
      h: Math.max(1, o.height - u.value.top - u.value.bottom)
    })), P = (B) => o.format ? o.format(B) : O(B);
    function O(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const G = b(() => {
      const B = g.value.map(
        (le, ce) => o.stacked ? p.value.reduce((te, ue) => te + Math.max(0, ue.points[ce]?.value ?? 0), 0) : Math.max(...p.value.map((te) => te.points[ce]?.value ?? 0))
      );
      if (o.maxValue)
        return o.maxValue;
      const K = Math.max(...B, 0);
      if (K <= 0)
        return 1;
      const F = 10 ** Math.floor(Math.log10(K));
      return ([1, 2, 2.5, 5, 10].find((le) => K <= le * F) ?? 10) * F;
    }), Z = b(
      () => ($.value ? h.value.h : h.value.w) / Math.max(1, y.value)
    ), ae = b(() => Z.value * 0.68), j = b(
      () => o.stacked || p.value.length <= 1 ? ae.value : ae.value / p.value.length
    ), L = b(() => {
      const B = [], K = new Array(y.value).fill(0);
      return p.value.forEach((F, J) => {
        F.points.forEach((le, ce) => {
          const ue = Math.max(0, le.value) / G.value * ($.value ? h.value.w : h.value.h), Oe = ($.value ? u.value.top : u.value.left) + ce * Z.value + (Z.value - ae.value) / 2, dt = o.stacked ? 0 : J * j.value;
          B.push(
            $.value ? {
              x: u.value.left + K[ce],
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
              y: u.value.top + h.value.h - ue - K[ce],
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
    }), T = b(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: G.value * ($.value ? B : 1 - B),
        x: u.value.left + h.value.w * B,
        y: u.value.top + h.value.h * B
      }))
    ), N = b(() => Math.max(1, Math.ceil(y.value / ($.value ? 14 : 10))));
    function R(B) {
      return B === y.value - 1 || B % N.value === 0;
    }
    function H(B) {
      return ($.value ? u.value.top : u.value.left) + B * Z.value + Z.value / 2;
    }
    const ee = b(() => c.value === null ? null : {
      label: g.value[c.value],
      rows: p.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[c.value]?.value ?? 0
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
          onMouseleave: K[0] || (K[0] = (F) => c.value = null)
        }, [
          e.showAxis ? (t(), n("g", $u, [
            $.value ? (t(), n(S, { key: 0 }, [
              (t(!0), n(S, null, V(T.value, (F) => (t(), n("line", {
                key: `g-${F.x}`,
                x1: F.x,
                x2: F.x,
                y1: u.value.top,
                y2: u.value.top + h.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, wu))), 128)),
              (t(!0), n(S, null, V(T.value, (F) => (t(), n("text", {
                key: `gt-${F.x}`,
                x: F.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(O(F.value)), 9, _u))), 128))
            ], 64)) : (t(), n(S, { key: 1 }, [
              (t(!0), n(S, null, V(T.value, (F) => (t(), n("line", {
                key: `g-${F.y}`,
                x1: u.value.left,
                x2: d.value - u.value.right,
                y1: F.y,
                y2: F.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Cu))), 128)),
              (t(!0), n(S, null, V(T.value, (F) => (t(), n("text", {
                key: `gt-${F.y}`,
                x: u.value.left - 8,
                y: F.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(O(F.value)), 9, Mu))), 128))
            ], 64))
          ])) : C("", !0),
          (t(!0), n(S, null, V(g.value, (F, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: $.value ? u.value.left : u.value.left + J * Z.value,
            y: $.value ? u.value.top + J * Z.value : u.value.top,
            width: $.value ? h.value.w : Z.value,
            height: $.value ? Z.value : h.value.h,
            fill: "var(--muted)",
            "fill-opacity": c.value === J ? 0.4 : 0,
            onMouseenter: (le) => c.value = J
          }, null, 40, Su))), 128)),
          (t(!0), n(S, null, V(L.value, (F, J) => (t(), n("rect", {
            key: `b-${J}`,
            x: F.x,
            y: F.y,
            width: F.w,
            height: F.h,
            fill: F.color,
            "fill-opacity": c.value === null || c.value === F.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Bu))), 128)),
          $.value ? (t(!0), n(S, { key: 1 }, V(g.value, (F, J) => oe((t(), n("text", {
            key: `c-${J}`,
            x: u.value.left - 8,
            y: H(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            Y(f(_(F)) + " ", 1),
            l("title", null, f(F), 1)
          ], 8, zu)), [
            [Ce, R(J)]
          ])), 128)) : (t(!0), n(S, { key: 2 }, V(g.value, (F, J) => oe((t(), n("text", {
            key: `c-${J}`,
            x: H(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(F), 9, Pu)), [
            [Ce, R(J)]
          ])), 128))
        ], 40, ku)),
        ee.value ? (t(), n("div", Au, [
          l("p", Ou, f(ee.value.label), 1),
          (t(!0), n(S, null, V(ee.value.rows, (F, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: X({ background: F.color })
            }, null, 4),
            l("span", Lu, f(F.name || "Value"), 1),
            l("span", ju, f(P(F.value)), 1)
          ]))), 128))
        ])) : C("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", Vu, [
          (t(!0), n(S, null, V(p.value, (F, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: X({ background: F.color })
            }, null, 4),
            l("span", Tu, f(F.name), 1)
          ]))), 128))
        ])) : C("", !0)
      ], 64))
    ], 512));
  }
}), Du = ["width", "height"], Fu = ["id"], Eu = ["stop-color"], Iu = ["stop-color"], Nu = { key: 0 }, Ru = ["x1", "x2", "y1", "y2"], Hu = ["x", "y"], Uu = ["x", "y"], Ku = ["x1", "x2", "y1", "y2"], Zu = ["d", "fill"], qu = ["d", "stroke", "stroke-dasharray"], Gu = ["cx", "cy", "fill"], Wu = { key: 1 }, Yu = ["x1", "x2", "y1", "y2"], Ju = ["cx", "cy", "fill"], Xu = ["x", "y"], Qu = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, ec = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, tc = { class: "text-xs font-semibold tabular-nums" }, ac = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, nc = { class: "text-muted-foreground" }, b1 = /* @__PURE__ */ M({
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
    const o = e, a = b(() => x.value.some((B) => B.axis === "right")), r = U(null), s = U(560), i = U(null);
    let d = null;
    re(() => {
      d = new ResizeObserver((B) => {
        s.value = Math.max(160, B[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), de(() => d?.disconnect());
    const c = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], v = Math.random().toString(36).slice(2, 9), x = b(() => (o.series?.length ? o.series : o.data?.length ? [{ name: "", points: o.data }] : []).map((K, F) => ({
      ...K,
      color: K.color ?? c[F % c.length]
    }))), p = b(() => x.value[0]?.points.map((B) => B.label) ?? []), g = b(() => p.value.length), y = b(() => ({
      top: 12,
      right: o.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: o.showAxis ? 44 : 8
    })), $ = (B) => o.format ? o.format(B) : z(B);
    function z(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function w(B) {
      const K = Math.max(...B, 0);
      if (K <= 0)
        return 1;
      const F = 10 ** Math.floor(Math.log10(K));
      return ([1, 2, 2.5, 5, 10].find((le) => K <= le * F) ?? 10) * F;
    }
    const k = b(
      () => w(
        x.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((K) => K.value))
      )
    ), _ = b(
      () => w(
        x.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((K) => K.value))
      )
    ), u = b(() => ({
      w: Math.max(1, s.value - y.value.left - y.value.right),
      h: Math.max(1, o.height - y.value.top - y.value.bottom)
    }));
    function h(B) {
      return y.value.left + (g.value <= 1 ? 0 : B / (g.value - 1) * u.value.w);
    }
    function P(B, K = "left") {
      const F = K === "right" ? _.value : k.value;
      return y.value.top + u.value.h - B / F * u.value.h;
    }
    const O = b(
      () => x.value.map((B) => {
        const K = B.points.map((J, le) => ({
          ...J,
          x: h(le),
          y: P(J.value, B.axis ?? "left")
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
      const F = y.value.top + u.value.h;
      return `${B} L${K[K.length - 1].x.toFixed(2)},${F} L${K[0].x.toFixed(2)},${F} Z`;
    }
    const j = b(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: y.value.top + u.value.h * B,
        value: k.value * (1 - B)
      }))
    ), L = b(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: y.value.top + u.value.h * B,
        value: _.value * (1 - B)
      }))
    ), T = b(() => Math.max(1, Math.ceil(g.value / 8)));
    function N(B) {
      return B === g.value - 1 || B % T.value === 0;
    }
    function R(B) {
      const K = B.currentTarget.getBoundingClientRect(), F = B.clientX - K.left - y.value.left, J = g.value <= 1 ? 1 : u.value.w / (g.value - 1);
      i.value = Math.min(g.value - 1, Math.max(0, Math.round(F / J)));
    }
    const H = b(() => {
      if (i.value === null || g.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: h(B),
        label: p.value[B],
        rows: O.value.map((K) => ({
          name: K.name,
          color: K.color,
          value: K.points[B]?.value ?? 0,
          y: K.pts[B]?.y ?? 0
        }))
      };
    }), ee = b(() => {
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
      g.value === 0 ? (t(), n("div", {
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
            (t(!0), n(S, null, V(O.value, (F, J) => (t(), n("linearGradient", {
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
              }, null, 8, Eu),
              l("stop", {
                offset: "100%",
                "stop-color": F.color,
                "stop-opacity": "0.01"
              }, null, 8, Iu)
            ], 8, Fu))), 128))
          ]),
          e.showAxis ? (t(), n("g", Nu, [
            (t(!0), n(S, null, V(j.value, (F) => (t(), n("line", {
              key: F.y,
              x1: y.value.left,
              x2: s.value - y.value.right,
              y1: F.y,
              y2: F.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Ru))), 128)),
            (t(!0), n(S, null, V(j.value, (F) => (t(), n("text", {
              key: `t-${F.y}`,
              x: y.value.left - 8,
              y: F.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(z(F.value)), 9, Hu))), 128)),
            a.value ? (t(!0), n(S, { key: 0 }, V(L.value, (F) => (t(), n("text", {
              key: `rt-${F.y}`,
              x: s.value - y.value.right + 8,
              y: F.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(z(F.value)), 9, Uu))), 128)) : C("", !0)
          ])) : C("", !0),
          (t(!0), n(S, null, V(p.value, (F, J) => oe((t(), n("line", {
            key: `v-${J}`,
            x1: h(J),
            x2: h(J),
            y1: y.value.top,
            y2: y.value.top + u.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Ku)), [
            [Ce, N(J)]
          ])), 128)),
          (t(!0), n(S, null, V(O.value, (F, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            F.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: F.area,
              fill: `url(#pk-fill-${m(v)}-${J})`
            }, null, 8, Zu)) : C("", !0),
            l("path", {
              d: F.line,
              fill: "none",
              stroke: F.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": F.dashed ? "6 4" : void 0
            }, null, 8, qu),
            F.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: F.pts[0].x,
              cy: F.pts[0].y,
              r: "3",
              fill: F.color
            }, null, 8, Gu)) : C("", !0)
          ]))), 128)),
          H.value ? (t(), n("g", Wu, [
            l("line", {
              x1: H.value.x,
              x2: H.value.x,
              y1: y.value.top,
              y2: y.value.top + u.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Yu),
            (t(!0), n(S, null, V(H.value.rows, (F, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: H.value.x,
              cy: F.y,
              r: "4",
              fill: F.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Ju))), 128))
          ])) : C("", !0),
          (t(!0), n(S, null, V(p.value, (F, J) => oe((t(), n("text", {
            key: `x-${J}`,
            x: h(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(F), 9, Xu)), [
            [Ce, N(J)]
          ])), 128))
        ], 40, Du)),
        H.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: X(ee.value)
        }, [
          l("p", Qu, f(H.value.label), 1),
          (t(!0), n(S, null, V(H.value.rows, (F, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: X({ background: F.color })
            }, null, 4),
            l("span", ec, f(F.name || "Value"), 1),
            l("span", tc, f($(F.value)), 1)
          ]))), 128))
        ], 4)) : C("", !0),
        e.showLegend && x.value.length > 1 ? (t(), n("div", ac, [
          (t(!0), n(S, null, V(O.value, (F, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: X({ background: F.color })
            }, null, 4),
            l("span", nc, f(F.name), 1)
          ]))), 128))
        ])) : C("", !0)
      ], 64))
    ], 512));
  }
}), oc = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, lc = { class: "text-muted-foreground text-[11px] capitalize" }, sc = { class: "text-sm font-semibold tabular-nums" }, rc = {
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
    return (o, a) => (t(), n("div", oc, [
      l("p", lc, f(e.label), 1),
      l("p", sc, [
        Y(f(e.value) + " ", 1),
        e.share ? (t(), n("span", rc, " (" + f(e.share) + ") ", 1)) : C("", !0)
      ])
    ]));
  }
}), ic = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, dc = ["width", "height", "viewBox", "aria-label"], uc = ["d", "fill", "fill-opacity", "onMouseenter"], cc = ["x", "y"], fc = ["x", "y"], pc = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, mc = ["onMouseenter"], vc = { class: "min-w-0 flex-1 truncate capitalize" }, hc = { class: "tabular-nums font-medium" }, gc = { class: "text-muted-foreground w-9 text-right tabular-nums" }, x1 = /* @__PURE__ */ M({
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
    ], r = b(() => o.data.reduce((k, _) => k + _.value, 0)), s = U(null), i = b(() => o.height), d = b(() => i.value / 2 - 4), c = b(() => o.type === "doughnut" ? d.value * 0.62 : 0);
    function v(k) {
      return a[k % a.length];
    }
    function x(k) {
      return 1 - Math.min(0.55, Math.floor(k / a.length) * 0.28);
    }
    const p = b(() => {
      if (r.value <= 0)
        return [];
      const k = i.value / 2;
      let _ = -Math.PI / 2;
      return o.data.map((u, h) => {
        const P = u.value / r.value, O = P * Math.PI * 2, G = _, Z = _ + O;
        return _ = Z, {
          ...u,
          share: P,
          colour: v(h),
          opacity: x(h),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: P >= 0.9999 ? $(k) : y(k, G, Z, d.value, c.value)
        };
      });
    });
    function g(k, _, u) {
      return `${(k + Math.cos(_) * u).toFixed(2)},${(k + Math.sin(_) * u).toFixed(2)}`;
    }
    function y(k, _, u, h, P) {
      const O = u - _ > Math.PI ? 1 : 0;
      return P <= 0 ? `M${k},${k} L${g(k, _, h)} A${h},${h} 0 ${O} 1 ${g(k, u, h)} Z` : [
        `M${g(k, _, h)}`,
        `A${h},${h} 0 ${O} 1 ${g(k, u, h)}`,
        `L${g(k, u, P)}`,
        `A${P},${P} 0 ${O} 0 ${g(k, _, P)}`,
        "Z"
      ].join(" ");
    }
    function $(k) {
      const _ = d.value, u = c.value, h = [
        `M${k - _},${k}`,
        `A${_},${_} 0 1 1 ${k + _},${k}`,
        `A${_},${_} 0 1 1 ${k - _},${k}`,
        "Z"
      ];
      return u <= 0 ? h.join(" ") : [
        ...h,
        `M${k - u},${k}`,
        `A${u},${u} 0 1 0 ${k + u},${k}`,
        `A${u},${u} 0 1 0 ${k - u},${k}`,
        "Z"
      ].join(" ");
    }
    const z = (k) => o.format ? o.format(k) : new Intl.NumberFormat().format(k), w = (k) => `${(k * 100).toFixed(k < 0.01 ? 2 : 0)}%`;
    return (k, _) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: X({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", ic, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${z(r.value)}`
      }, [
        (t(!0), n(S, null, V(p.value, (u, h) => (t(), n("path", {
          key: h,
          d: u.path,
          fill: u.colour,
          "fill-opacity": s.value === null || s.value === h ? u.opacity : u.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (P) => s.value = h,
          onMouseleave: _[0] || (_[0] = (P) => s.value = null)
        }, null, 40, uc))), 128)),
        e.type === "doughnut" ? (t(), n(S, { key: 0 }, [
          l("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(z(s.value === null ? r.value : p.value[s.value].value)), 9, cc),
          l("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, fc)
        ], 64)) : C("", !0)
      ], 8, dc)),
      l("ul", pc, [
        (t(!0), n(S, null, V(p.value, (u, h) => (t(), n("li", {
          key: h,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === h ? "bg-muted" : ""]),
          onMouseenter: (P) => s.value = h,
          onMouseleave: _[1] || (_[1] = (P) => s.value = null)
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: X({ background: u.colour, opacity: u.opacity })
          }, null, 4),
          l("span", vc, f(u.label), 1),
          l("span", hc, f(z(u.value)), 1),
          l("span", gc, f(w(u.share)), 1)
        ], 42, mc))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(Fe, {
        key: 0,
        label: p.value[s.value].label,
        value: z(p.value[s.value].value),
        share: w(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : C("", !0)
    ]));
  }
}), bc = ["width", "height", "viewBox", "aria-label"], xc = { class: "text-border" }, yc = ["x1", "x2", "y1", "y2", "stroke-dasharray"], kc = { class: "fill-muted-foreground text-[10px]" }, $c = ["x", "y"], wc = ["x", "y"], _c = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Cc = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, y1 = /* @__PURE__ */ M({
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
    const c = b(
      () => o.series?.length ? o.series : [{ name: "", points: o.data ?? [] }]
    ), v = (T, N) => N.color ?? a[T % a.length], x = b(() => c.value.flatMap((T) => T.points)), p = b(() => x.value.some((T) => typeof T.r == "number")), g = { top: 12, right: 16, bottom: 32, left: 48 }, y = b(() => Math.max(10, s.value - g.left - g.right)), $ = b(() => Math.max(10, o.height - g.top - g.bottom));
    function z(T) {
      if (T.length === 0)
        return [0, 1];
      const N = Math.min(...T), R = Math.max(...T), H = R - N || Math.abs(R) || 1;
      return [N - H * 0.08, R + H * 0.08];
    }
    const w = b(() => z(x.value.map((T) => T.x))), k = b(() => z(x.value.map((T) => T.y))), _ = (T) => {
      const [N, R] = w.value;
      return g.left + (T - N) / (R - N) * y.value;
    }, u = (T) => {
      const [N, R] = k.value;
      return g.top + $.value - (T - N) / (R - N) * $.value;
    }, h = b(() => Math.max(...x.value.map((T) => T.r ?? 0), 0));
    function P(T) {
      if (!p.value || !h.value)
        return 4;
      const N = Math.max(0, T.r ?? 0) / h.value;
      return 3 + Math.sqrt(N) * (o.maxRadius - 3);
    }
    function O([T, N]) {
      return Array.from({ length: 5 }, (R, H) => T + (N - T) / 4 * H);
    }
    const G = b(() => O(w.value)), Z = b(() => O(k.value)), ae = (T) => o.formatX?.(T) ?? String(Math.round(T * 100) / 100), j = (T) => o.formatY?.(T) ?? String(Math.round(T * 100) / 100), L = b(() => {
      if (!i.value)
        return null;
      const T = c.value[i.value.s], N = T?.points[i.value.p];
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
        "aria-label": p.value ? "Bubble chart" : "Scatter chart"
      }, [
        l("g", xc, [
          (t(!0), n(S, null, V(Z.value, (R, H) => (t(), n("line", {
            key: `gy-${H}`,
            x1: g.left,
            x2: g.left + y.value,
            y1: u(R),
            y2: u(R),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": H === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, yc))), 128))
        ]),
        l("g", kc, [
          (t(!0), n(S, null, V(Z.value, (R, H) => (t(), n("text", {
            key: `ty-${H}`,
            x: g.left - 8,
            y: u(R) + 3,
            "text-anchor": "end"
          }, f(j(R)), 9, $c))), 128)),
          (t(!0), n(S, null, V(G.value, (R, H) => (t(), n("text", {
            key: `tx-${H}`,
            x: _(R),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ae(R)), 9, wc))), 128))
        ]),
        (t(!0), n(S, null, V(c.value, (R, H) => (t(), n("g", {
          key: `s-${H}`
        }, [
          (t(!0), n(S, null, V(R.points, (ee, B) => (t(), n("circle", {
            key: `p-${H}-${B}`,
            cx: _(ee.x),
            cy: u(ee.y),
            r: P(ee),
            fill: v(H, R),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: v(H, R),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== H || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (K) => i.value = { s: H, p: B },
            onMouseleave: N[0] || (N[0] = (K) => i.value = null)
          }, null, 40, _c))), 128))
        ]))), 128))
      ], 8, bc)),
      L.value ? (t(), D(Fe, {
        key: 0,
        label: L.value.point.label ?? L.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ae(L.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${j(L.value.point.y)}`,
        share: p.value && L.value.point.r != null ? String(L.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : C("", !0),
      e.showLegend && c.value.length > 1 ? (t(), n("div", Cc, [
        (t(!0), n(S, null, V(c.value, (R, H) => (t(), n("span", {
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
}), Mc = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Sc = ["width", "height", "viewBox"], Bc = ["points"], zc = ["x1", "y1", "x2", "y2"], Pc = ["points", "fill", "stroke"], Ac = ["cx", "cy", "fill", "onMouseenter"], Oc = ["x", "y", "text-anchor"], Lc = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, jc = { class: "truncate" }, k1 = /* @__PURE__ */ M({
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
    ], r = b(
      () => o.series.map((u, h) => ({
        ...u,
        color: u.color ?? a[h % a.length]
      }))
    ), s = b(() => r.value[0]?.points.map((u) => u.label) ?? []), i = b(() => s.value.length), d = b(() => o.height), c = b(() => d.value / 2), v = b(() => d.value / 2 - 34), x = b(() => {
      const u = Math.max(...r.value.flatMap((O) => O.points.map((G) => G.value)), 0);
      if (u <= 0)
        return 1;
      const h = 10 ** Math.floor(Math.log10(u));
      return ([1, 2, 2.5, 5, 10].find((O) => u <= O * h) ?? 10) * h;
    });
    function p(u) {
      return u / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function g(u, h) {
      const P = p(u);
      return {
        x: c.value + Math.cos(P) * v.value * h,
        y: c.value + Math.sin(P) * v.value * h
      };
    }
    function y(u) {
      return Array.from({ length: i.value }, (h, P) => {
        const O = g(P, u);
        return `${O.x.toFixed(2)},${O.y.toFixed(2)}`;
      }).join(" ");
    }
    const $ = b(() => [0.25, 0.5, 0.75, 1].map((u) => ({ f: u, points: y(u) }))), z = b(
      () => r.value.map((u) => {
        const h = u.points.map((P) => Math.max(0, P.value) / x.value);
        return {
          name: u.name,
          color: u.color,
          values: u.points,
          outline: h.map((P, O) => {
            const G = g(O, P);
            return `${G.x.toFixed(2)},${G.y.toFixed(2)}`;
          }).join(" "),
          dots: h.map((P, O) => g(O, P))
        };
      })
    ), w = b(
      () => s.value.map((u, h) => {
        const P = p(h), O = c.value + Math.cos(P) * (v.value + 14), G = c.value + Math.sin(P) * (v.value + 14), Z = Math.cos(P);
        return {
          label: u,
          x: O,
          y: G + 3,
          anchor: Math.abs(Z) < 0.2 ? "middle" : Z > 0 ? "start" : "end"
        };
      })
    ), k = U(null), _ = (u) => o.format ? o.format(u) : new Intl.NumberFormat().format(u);
    return (u, h) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: X({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Mc, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(S, null, V($.value, (P) => (t(), n("polygon", {
          key: P.f,
          points: P.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Bc))), 128)),
        (t(!0), n(S, null, V(s.value, (P, O) => (t(), n("line", {
          key: `spoke-${O}`,
          x1: c.value,
          y1: c.value,
          x2: g(O, 1).x,
          y2: g(O, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, zc))), 128)),
        (t(!0), n(S, null, V(z.value, (P, O) => (t(), n("g", {
          key: `s-${O}`
        }, [
          l("polygon", {
            points: P.outline,
            fill: P.color,
            "fill-opacity": "0.16",
            stroke: P.color,
            "stroke-width": "2"
          }, null, 8, Pc),
          (t(!0), n(S, null, V(P.dots, (G, Z) => (t(), n("circle", {
            key: Z,
            cx: G.x,
            cy: G.y,
            r: "3",
            fill: P.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ae) => k.value = {
              series: P.name,
              axis: s.value[Z],
              value: P.values[Z]?.value ?? 0
            },
            onMouseleave: h[0] || (h[0] = (ae) => k.value = null)
          }, null, 40, Ac))), 128))
        ]))), 128)),
        (t(!0), n(S, null, V(w.value, (P, O) => (t(), n("text", {
          key: `l-${O}`,
          x: P.x,
          y: P.y,
          "text-anchor": P.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(P.label), 9, Oc))), 128))
      ], 8, Sc)),
      e.showLegend ? (t(), n("ul", Lc, [
        (t(!0), n(S, null, V(r.value, (P, O) => (t(), n("li", {
          key: O,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: X({ background: P.color })
          }, null, 4),
          l("span", jc, f(P.name), 1)
        ]))), 128))
      ])) : C("", !0),
      k.value ? (t(), D(Fe, {
        key: 1,
        label: `${k.value.series} — ${k.value.axis}`,
        value: _(k.value.value)
      }, null, 8, ["label", "value"])) : C("", !0)
    ]));
  }
}), Vc = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Tc = ["width", "height", "viewBox"], Dc = ["cx", "cy", "r"], Fc = ["d", "fill", "fill-opacity", "onMouseenter"], Ec = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Ic = { class: "min-w-0 flex-1 truncate capitalize" }, Nc = { class: "font-medium tabular-nums" }, $1 = /* @__PURE__ */ M({
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
    ], r = U(null), s = b(() => o.height), i = b(() => s.value / 2), d = b(() => s.value / 2 - 6), c = b(() => Math.max(...o.data.map((y) => Math.max(0, y.value)), 0)), v = b(() => {
      const y = o.data.length;
      if (y === 0 || c.value <= 0)
        return [];
      const $ = Math.PI * 2 / y;
      return o.data.map((z, w) => {
        const k = Math.sqrt(Math.max(0, z.value) / c.value), _ = d.value * k, u = w * $ - Math.PI / 2, h = u + $;
        return {
          ...z,
          color: a[w % a.length],
          share: c.value === 0 ? 0 : z.value / c.value,
          path: x(i.value, u, h, _)
        };
      });
    });
    function x(y, $, z, w) {
      if (w <= 0)
        return "";
      if (z - $ >= Math.PI * 2 - 1e-6)
        return `M${y - w},${y} A${w},${w} 0 1 1 ${y + w},${y} A${w},${w} 0 1 1 ${y - w},${y} Z`;
      const k = z - $ > Math.PI ? 1 : 0, _ = y + Math.cos($) * w, u = y + Math.sin($) * w, h = y + Math.cos(z) * w, P = y + Math.sin(z) * w;
      return `M${y},${y} L${_.toFixed(2)},${u.toFixed(2)} A${w.toFixed(2)},${w.toFixed(2)} 0 ${k} 1 ${h.toFixed(2)},${P.toFixed(2)} Z`;
    }
    const p = b(() => [0.5, 0.75, 1].map((y) => d.value * y)), g = (y) => o.format ? o.format(y) : new Intl.NumberFormat().format(y);
    return (y, $) => v.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: X({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Vc, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(S, null, V(p.value, (z) => (t(), n("circle", {
          key: z,
          cx: i.value,
          cy: i.value,
          r: z,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Dc))), 128)),
        (t(!0), n(S, null, V(v.value, (z, w) => (t(), n("path", {
          key: w,
          d: z.path,
          fill: z.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === w ? 0.75 : 0.3,
          onMouseenter: (k) => r.value = w,
          onMouseleave: $[0] || ($[0] = (k) => r.value = null)
        }, null, 40, Fc))), 128))
      ], 8, Tc)),
      e.showLegend ? (t(), n("ul", Ec, [
        (t(!0), n(S, null, V(v.value, (z, w) => (t(), n("li", {
          key: w,
          class: "flex items-center gap-2 text-xs"
        }, [
          l("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: X({ background: z.color })
          }, null, 4),
          l("span", Ic, f(z.label), 1),
          l("span", Nc, f(g(z.value)), 1)
        ]))), 128))
      ])) : C("", !0),
      r.value !== null ? (t(), D(Fe, {
        key: 1,
        label: v.value[r.value].label,
        value: g(v.value[r.value].value)
      }, null, 8, ["label", "value"])) : C("", !0)
    ]));
  }
}), Rc = ["width", "height"], Hc = ["x1", "x2", "y1", "y2"], Uc = ["x", "y"], Kc = ["x", "y"], Zc = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], qc = ["x", "y", "width", "height", "fill", "fill-opacity"], Gc = ["d", "stroke"], Wc = ["cx", "cy", "fill"], Yc = ["x", "y"], Jc = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Xc = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Qc = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, ef = { class: "text-xs font-semibold tabular-nums" }, tf = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, af = { class: "text-muted-foreground" }, w1 = /* @__PURE__ */ M({
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
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], c = ["var(--primary)", "var(--chart-5)"], v = b(
      () => o.bars.map((H, ee) => ({
        ...H,
        color: H.color ?? d[ee % d.length]
      }))
    ), x = b(
      () => o.lines.map((H, ee) => ({
        ...H,
        color: H.color ?? c[ee % c.length]
      }))
    ), p = b(
      () => v.value[0]?.points.map((H) => H.label) ?? x.value[0]?.points.map((H) => H.label) ?? []
    ), g = b(() => p.value.length), y = b(() => o.lineAxis === "right"), $ = b(() => ({
      top: 12,
      right: y.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), z = b(() => ({
      w: Math.max(1, r.value - $.value.left - $.value.right),
      h: Math.max(1, o.height - $.value.top - $.value.bottom)
    }));
    function w(H) {
      const ee = Math.max(...H, 0);
      if (ee <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(ee));
      return ([1, 2, 2.5, 5, 10].find((F) => ee <= F * B) ?? 10) * B;
    }
    const k = b(
      () => w([
        ...v.value.flatMap((H) => H.points.map((ee) => ee.value)),
        ...y.value ? [] : x.value.flatMap((H) => H.points.map((ee) => ee.value))
      ])
    ), _ = b(
      () => y.value ? w(x.value.flatMap((H) => H.points.map((ee) => ee.value))) : k.value
    ), u = b(() => z.value.w / Math.max(1, g.value)), h = b(() => u.value * 0.6), P = b(() => h.value / Math.max(1, v.value.length));
    function O(H) {
      return $.value.left + H * u.value + u.value / 2;
    }
    const G = b(
      () => v.value.flatMap(
        (H, ee) => H.points.map((B, K) => {
          const F = Math.max(0, B.value) / k.value * z.value.h;
          return {
            x: O(K) - h.value / 2 + ee * P.value,
            y: $.value.top + z.value.h - F,
            w: Math.max(0, P.value - 2),
            h: F,
            color: H.color,
            index: K,
            name: H.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), Z = b(
      () => x.value.map((H) => {
        const ee = H.points.map((B, K) => ({
          x: O(K),
          y: $.value.top + z.value.h - Math.max(0, B.value) / _.value * z.value.h,
          value: B.value
        }));
        return {
          ...H,
          pts: ee,
          d: ee.map((B, K) => `${K === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ae = b(
      () => [0, 0.25, 0.5, 0.75, 1].map((H) => ({
        y: $.value.top + z.value.h * H,
        left: k.value * (1 - H),
        right: _.value * (1 - H)
      }))
    ), j = b(() => Math.max(1, Math.ceil(g.value / 10)));
    function L(H) {
      return H === g.value - 1 || H % j.value === 0;
    }
    const T = (H) => o.format ? o.format(H) : N(H);
    function N(H) {
      return Math.abs(H) >= 1e6 ? `${(H / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(H) >= 1e3 ? `${(H / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(H * 100) / 100);
    }
    const R = b(() => {
      if (s.value === null)
        return null;
      const H = s.value;
      return {
        label: p.value[H],
        rows: [
          ...v.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[H]?.value ?? 0
          })),
          ...x.value.map((ee) => ({
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
      g.value === 0 ? (t(), n("div", {
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
            x1: $.value.left,
            x2: r.value - $.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Hc))), 128)),
          (t(!0), n(S, null, V(ae.value, (B) => (t(), n("text", {
            key: `lt-${B.y}`,
            x: $.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(N(B.left)), 9, Uc))), 128)),
          y.value ? (t(!0), n(S, { key: 0 }, V(ae.value, (B) => (t(), n("text", {
            key: `rt-${B.y}`,
            x: r.value - $.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(N(B.right)), 9, Kc))), 128)) : C("", !0),
          (t(!0), n(S, null, V(p.value, (B, K) => (t(), n("rect", {
            key: `hit-${K}`,
            x: $.value.left + K * u.value,
            y: $.value.top,
            width: u.value,
            height: z.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === K ? 0.4 : 0,
            onMouseenter: (F) => s.value = K
          }, null, 40, Zc))), 128)),
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
          }, null, 8, qc))), 128)),
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
            }, null, 8, Gc),
            s.value !== null && B.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Wc)) : C("", !0)
          ]))), 128)),
          (t(!0), n(S, null, V(p.value, (B, K) => oe((t(), n("text", {
            key: `x-${K}`,
            x: O(K),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(B), 9, Yc)), [
            [Ce, L(K)]
          ])), 128))
        ], 40, Rc)),
        R.value ? (t(), n("div", Jc, [
          l("p", Xc, f(R.value.label), 1),
          (t(!0), n(S, null, V(R.value.rows, (B, K) => (t(), n("div", {
            key: K,
            class: "flex items-center gap-2 py-0.5"
          }, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: X({ background: B.color })
            }, null, 4),
            l("span", Qc, f(B.name), 1),
            l("span", ef, f(T(B.value)), 1)
          ]))), 128))
        ])) : C("", !0),
        e.showLegend ? (t(), n("div", tf, [
          (t(!0), n(S, null, V([...v.value, ...x.value], (B, K) => (t(), n("span", {
            key: K,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            l("span", {
              class: "size-2 rounded-full",
              style: X({ background: B.color })
            }, null, 4),
            l("span", af, f(B.name), 1)
          ]))), 128))
        ])) : C("", !0)
      ], 64))
    ], 512));
  }
}), nf = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, of = { class: "text-muted-foreground" }, lf = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, sf = ["width", "height"], rf = ["x", "y"], df = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], uf = ["x", "y"], cf = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, ff = { class: "text-[11px] font-medium capitalize" }, pf = { class: "text-muted-foreground text-[11px] capitalize" }, mf = { class: "text-sm font-semibold tabular-nums" }, vf = { class: "text-muted-foreground text-xs font-normal" }, _1 = /* @__PURE__ */ M({
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
      i = new ResizeObserver((h) => {
        r.value = Math.max(160, h[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), de(() => i?.disconnect());
    const d = b(() => o.series[0]?.points.map((h) => h.label) ?? []), c = b(() => o.series.length), v = b(() => d.value.length), x = b(() => Math.min(140, Math.max(60, r.value * 0.16))), p = b(() => Math.max(1, r.value - x.value - 8)), g = b(() => p.value / Math.max(1, v.value)), y = b(() => Math.max(1, (o.height - 8) / Math.max(1, c.value)));
    function $(h) {
      if (h === 0)
        return "var(--muted)";
      const P = Math.max(1, o.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(h / P * 100)}%, var(--muted))`;
    }
    function z(h) {
      for (let P = 0; P < o.buckets.length; P++) {
        const O = o.buckets[P].max;
        if (O === void 0 || h < O)
          return P;
      }
      return o.buckets.length - 1;
    }
    const w = b(
      () => o.series.flatMap(
        (h, P) => h.points.map((O, G) => {
          const Z = z(O.value);
          return {
            row: P,
            col: G,
            x: x.value + G * g.value,
            y: 4 + P * y.value,
            w: Math.max(1, g.value - 1),
            h: Math.max(1, y.value - 4),
            colour: $(Z),
            label: O.label,
            value: O.value,
            rowName: h.name,
            bucketLabel: o.buckets[Z].label
          };
        })
      )
    ), k = b(() => g.value < 2), _ = b(() => s.value ? w.value.find((h) => h.row === s.value.row && h.col === s.value.col) ?? null : null), u = (h) => o.format ? o.format(h) : new Intl.NumberFormat().format(h);
    return (h, P) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      c.value === 0 || v.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: X({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(S, { key: 1 }, [
        l("div", nf, [
          (t(!0), n(S, null, V(e.buckets, (O, G) => (t(), n("span", {
            key: G,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            l("span", {
              class: "size-3 rounded-sm border",
              style: X({ background: $(G) })
            }, null, 4),
            l("span", of, f(O.label), 1)
          ]))), 128))
        ]),
        k.value ? (t(), n("p", lf, f(v.value) + " columns - too many to label individually ", 1)) : C("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: P[0] || (P[0] = (O) => s.value = null)
        }, [
          (t(!0), n(S, null, V(e.series, (O, G) => (t(), n("text", {
            key: `r-${G}`,
            x: x.value - 10,
            y: 4 + G * y.value + y.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(O.name), 9, rf))), 128)),
          (t(!0), n(S, null, V(w.value, (O, G) => (t(), n("rect", {
            key: G,
            x: O.x,
            y: O.y,
            width: O.w,
            height: O.h,
            fill: O.colour,
            "fill-opacity": s.value === null || s.value.row === O.row && s.value.col === O.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (Z) => s.value = { row: O.row, col: O.col }
          }, null, 40, df))), 128)),
          e.showColumnLabels && !k.value ? (t(!0), n(S, { key: 0 }, V(d.value, (O, G) => (t(), n("text", {
            key: `c-${G}`,
            x: x.value + G * g.value + g.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(O), 9, uf))), 128)) : C("", !0)
        ], 40, sf)),
        _.value ? (t(), n("div", cf, [
          l("p", ff, f(_.value.label), 1),
          l("p", pf, f(_.value.rowName), 1),
          l("p", mf, [
            Y(f(u(_.value.value)) + " ", 1),
            l("span", vf, "(" + f(_.value.bucketLabel) + ")", 1)
          ])
        ])) : C("", !0)
      ], 64))
    ], 512));
  }
}), hf = ["viewBox"], gf = { key: 0 }, bf = ["id"], xf = ["stop-color"], yf = ["stop-color"], kf = ["d", "fill"], $f = ["d", "stroke"], xt = 100, je = 30, Dt = /* @__PURE__ */ M({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e, a = Math.random().toString(36).slice(2, 9), r = b(() => {
      const c = o.data.map((g) => g.value);
      if (c.length < 2)
        return [];
      const v = Math.min(...c), p = Math.max(...c) - v || 1;
      return c.map((g, y) => ({
        x: y / (c.length - 1) * xt,
        y: je - (g - v) / p * (je - 4) - 2
      }));
    });
    function s(c) {
      const v = c.length;
      if (v < 2)
        return "";
      const x = [], p = [];
      for (let $ = 0; $ < v - 1; $++)
        x[$] = c[$ + 1].x - c[$].x, p[$] = x[$] === 0 ? 0 : (c[$ + 1].y - c[$].y) / x[$];
      const g = [p[0]];
      for (let $ = 1; $ < v - 1; $++)
        if (p[$ - 1] * p[$] <= 0)
          g[$] = 0;
        else {
          const z = 2 * x[$] + x[$ - 1], w = x[$] + 2 * x[$ - 1];
          g[$] = (z + w) / (z / p[$ - 1] + w / p[$]);
        }
      g[v - 1] = p[v - 2];
      let y = `M${c[0].x.toFixed(2)},${c[0].y.toFixed(2)}`;
      for (let $ = 0; $ < v - 1; $++) {
        const z = x[$] / 3;
        y += ` C${(c[$].x + z).toFixed(2)},${(c[$].y + g[$] * z).toFixed(2)} ${(c[$ + 1].x - z).toFixed(2)},${(c[$ + 1].y - g[$ + 1] * z).toFixed(2)} ${c[$ + 1].x.toFixed(2)},${c[$ + 1].y.toFixed(2)}`;
      }
      return y;
    }
    const i = b(() => {
      const c = r.value;
      return c.length < 2 ? "" : o.smooth ? s(c) : c.map((v, x) => `${x === 0 ? "M" : "L"}${v.x.toFixed(2)},${v.y.toFixed(2)}`).join(" ");
    }), d = b(() => {
      const c = r.value;
      return !o.filled || c.length < 2 ? "" : `${i.value} L${c[c.length - 1].x.toFixed(2)},${je} L${c[0].x.toFixed(2)},${je} Z`;
    });
    return (c, v) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${xt} ${je}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: X({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", gf, [
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
          }, null, 8, xf),
          l("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, yf)
        ], 8, bf)
      ])) : C("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${m(a)})`
      }, null, 8, kf)) : C("", !0),
      l("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, $f)
    ], 12, hf)) : C("", !0);
  }
}), wf = { class: "flex items-center gap-1 text-xs" }, _f = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Cf = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Mf = /* @__PURE__ */ M({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, a = b(() => o.direction === "flat" ? null : o.direction === "new" ? !o.inverted : o.inverted ? o.direction === "down" : o.direction === "up"), r = b(
      () => a.value === null ? "text-muted-foreground" : a.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = b(
      () => o.direction === "flat" ? "→" : o.direction === "down" ? "▼" : "▲"
    ), i = b(() => o.direction === "new" ? "New" : o.percentage === null ? "-" : `${Math.abs(o.percentage)}%`);
    return (d, c) => (t(), n("span", wf, [
      l("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        l("span", _f, f(s.value), 1),
        Y(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Cf, f(e.comparison), 1)) : C("", !0)
    ]));
  }
}), Sf = ["aria-label"], Be = /* @__PURE__ */ M({
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
    }, r = b(() => a[o.variant] ?? a.text), s = b(() => Math.max(1, Math.min(o.count, 50)));
    function i(d) {
      if (!(o.variant !== "text" || s.value === 1))
        return d === s.value - 1 ? "60%" : void 0;
    }
    return (d, c) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: X(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(S, null, V(s.value, (v) => (t(), n("span", {
        key: v,
        "aria-hidden": "true",
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: X({
          width: i(v - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, Sf));
  }
}), Bf = { class: "bg-card flex flex-col gap-3 rounded-lg border p-4" }, zf = { class: "flex flex-wrap items-start justify-between gap-2" }, Pf = { class: "min-w-0" }, Af = { class: "text-sm font-medium" }, Of = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Lf = {
  key: 0,
  class: "bg-muted/60 flex shrink-0 items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, jf = ["aria-pressed", "onClick"], C1 = /* @__PURE__ */ M({
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
    return (o, a) => (t(), n("div", Bf, [
      l("div", zf, [
        l("div", Pf, [
          l("p", Af, f(e.label), 1),
          e.description ? (t(), n("p", Of, f(e.description), 1)) : C("", !0),
          I(o.$slots, "trend")
        ]),
        e.periods && e.periods.length ? (t(), n("div", Lf, [
          (t(!0), n(S, null, V(e.periods, (r) => (t(), n("button", {
            key: r.value,
            type: "button",
            class: A([
              "rounded px-2 py-1 text-xs transition-colors",
              e.period === r.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-pressed": e.period === r.value,
            onClick: (s) => o.$emit("update:period", r.value)
          }, f(r.label), 11, jf))), 128))
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
}), Vf = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Tf = { class: "flex flex-1 flex-col gap-1 p-4" }, Df = { class: "text-muted-foreground relative text-xs font-medium" }, Ff = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Ef = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, If = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Nf = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, M1 = /* @__PURE__ */ M({
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
    return (a, r) => (t(), n("div", Vf, [
      l("div", Tf, [
        l("p", Df, f(e.label), 1),
        e.loading ? (t(), D(Be, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Ff, " Could not load ")) : (t(), n("span", Ef, f(o(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(Mf, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", If, f(e.description), 1)) : C("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Nf, [
        W(Dt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : C("", !0)
    ]));
  }
}), Rf = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Hf = { class: "flex flex-col gap-1 p-4" }, Uf = { class: "flex items-start justify-between gap-2" }, Kf = { class: "text-sm font-medium" }, Zf = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, qf = { class: "mt-1 flex flex-wrap items-center gap-2" }, Gf = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Wf = {
  key: 0,
  class: "-mb-px"
}, S1 = /* @__PURE__ */ M({
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
    const o = e, a = b(() => o.delta === null || o.delta === 0 ? null : o.inverted ? o.delta < 0 : o.delta > 0), r = b(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = b(
      () => typeof o.value == "number" ? new Intl.NumberFormat().format(o.value) : o.value
    );
    return (i, d) => (t(), n("div", Rf, [
      l("div", Hf, [
        l("div", Uf, [
          l("p", Kf, f(e.label), 1),
          I(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Zf, f(e.caption), 1)) : C("", !0),
        l("div", qf, [
          e.loading ? (t(), D(Be, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Gf, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : C("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Wf, [
        W(Dt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : C("", !0)
    ]));
  }
}), Yf = { class: "relative flex flex-col gap-2" }, Jf = ["aria-label"], Xf = ["onMouseenter"], Qf = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, ep = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, tp = { class: "truncate" }, ap = { class: "text-sm font-semibold tabular-nums" }, B1 = /* @__PURE__ */ M({
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
    ], r = b(() => o.segments.reduce((x, p) => x + Math.max(0, p.value), 0)), s = b(() => Math.max(o.total ?? r.value, r.value, 1)), i = b(
      () => o.segments.map((x, p) => {
        const g = Math.max(0, x.value) / s.value;
        return {
          ...x,
          color: x.color ?? a[p % a.length],
          share: g,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: x.value > 0 ? `max(2px, ${(g * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (x) => o.format ? o.format(x) : new Intl.NumberFormat().format(x), c = U(null), v = (x) => `${(x * 100).toFixed(x > 0 && x < 0.01 ? 1 : 0)}%`;
    return (x, p) => (t(), n("div", Yf, [
      l("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: X({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((g) => `${g.label} ${d(g.value)}`).join(", ")
      }, [
        (t(!0), n(S, null, V(i.value, (g, y) => (t(), n("span", {
          key: y,
          class: A(["h-full transition-all", [
            y === 0 ? "rounded-l-full" : "",
            y === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: X({
            width: g.width,
            background: g.color,
            opacity: c.value === null || c.value === y ? 1 : 0.4
          }),
          onMouseenter: ($) => c.value = y,
          onMouseleave: p[0] || (p[0] = ($) => c.value = null)
        }, null, 46, Xf))), 128))
      ], 12, Jf),
      e.showLegend ? (t(), n("div", Qf, [
        (t(!0), n(S, null, V(i.value, (g, y) => (t(), n("div", {
          key: y,
          class: "flex min-w-0 flex-col"
        }, [
          l("span", ep, [
            l("span", {
              class: "size-2 shrink-0 rounded-full",
              style: X({ background: g.color })
            }, null, 4),
            l("span", tp, f(g.label), 1)
          ]),
          l("span", ap, f(d(g.value)), 1)
        ]))), 128))
      ])) : C("", !0),
      c.value !== null ? (t(), D(Fe, {
        key: 1,
        label: i.value[c.value].label,
        value: d(i.value[c.value].value),
        share: v(i.value[c.value].share)
      }, null, 8, ["label", "value", "share"])) : C("", !0)
    ]));
  }
}), np = { class: "bg-border relative shrink-0 overflow-hidden rounded-xl border" }, op = ["aria-pressed", "aria-label", "title"], lp = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sp = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, rp = { class: "flex h-8 items-center" }, ip = ["aria-label", "title", "onClick"], dp = ["aria-label", "title", "onClick"], up = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, cp = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, z1 = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(a.maskable ? !a.hidden : !0), i = U(/* @__PURE__ */ new Set());
    function d(w) {
      return a.maskable && (w.sensitive ?? !0);
    }
    function c(w) {
      return d(w) && !s.value && !i.value.has(w.key);
    }
    const v = b(() => a.segments.some(c)), x = b(() => a.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, g = b(() => p[a.columns] ?? p[4]);
    function y() {
      const w = v.value === !1;
      s.value = !w, i.value = /* @__PURE__ */ new Set(), r("toggle", w);
    }
    function $(w) {
      if (!d(w))
        return;
      const k = new Set(i.value);
      if (c(w))
        k.add(w.key);
      else if (k.delete(w.key), s.value) {
        s.value = !1;
        for (const _ of a.segments)
          _.key !== w.key && d(_) && k.add(_.key);
      }
      i.value = k, r("toggle", v.value);
    }
    function z(w) {
      return typeof w == "number" ? new Intl.NumberFormat().format(w) : w;
    }
    return (w, k) => (t(), n("div", np, [
      e.maskable && x.value ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
        "aria-pressed": v.value,
        "aria-label": v.value ? "Show all values" : "Hide all values",
        title: v.value ? "Show all values" : "Hide all values",
        onClick: y
      }, [
        (t(), n("svg", lp, [
          v.value ? (t(), n(S, { key: 0 }, [
            k[0] || (k[0] = l("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
            k[1] || (k[1] = l("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
            k[2] || (k[2] = l("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
            k[3] || (k[3] = l("path", { d: "m3 3 18 18" }, null, -1))
          ], 64)) : (t(), n(S, { key: 1 }, [
            k[4] || (k[4] = l("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
            k[5] || (k[5] = l("circle", {
              cx: "12",
              cy: "12",
              r: "3"
            }, null, -1))
          ], 64))
        ]))
      ], 8, op)) : C("", !0),
      l("div", {
        class: A(["grid gap-px", g.value])
      }, [
        (t(!0), n(S, null, V(e.segments, (_) => (t(), n("div", {
          key: _.key,
          class: "bg-card flex flex-col gap-2 p-4"
        }, [
          l("p", sp, f(_.label), 1),
          l("div", rp, [
            e.loading ? (t(), D(Be, {
              key: 0,
              variant: "number"
            })) : c(_) ? (t(), n("button", {
              key: 1,
              type: "button",
              class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
              "aria-label": `${_.label} hidden. Show it.`,
              title: `Show ${_.label}`,
              onClick: (u) => $(_)
            }, [
              (t(), n(S, null, V(5, (u) => l("span", {
                key: u,
                class: "bg-muted-foreground/70 size-1.5 rounded-full"
              })), 64))
            ], 8, ip)) : d(_) ? (t(), n("button", {
              key: 2,
              type: "button",
              class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
              "aria-label": `${_.label}, ${z(_.value)}. Hide it.`,
              title: `Hide ${_.label}`,
              onClick: (u) => $(_)
            }, f(z(_.value)), 9, dp)) : (t(), n("span", up, f(z(_.value)), 1))
          ]),
          _.caption ? (t(), n("p", cp, f(_.caption), 1)) : C("", !0)
        ]))), 128))
      ], 2)
    ]));
  }
}), fp = {
  key: 0,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, pp = { class: "flex items-center justify-between gap-2" }, mp = ["href"], vp = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, hp = { class: "flex flex-col gap-0.5" }, gp = { class: "text-sm font-medium" }, bp = { class: "text-xs text-muted-foreground" }, xp = {
  key: 1,
  class: "flex flex-col gap-2"
}, yp = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, kp = { class: "flex flex-col gap-0.5" }, $p = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, P1 = /* @__PURE__ */ M({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: {}
  },
  setup(e) {
    const o = e, a = o.items.find((s) => !s.done) ?? null, r = o.items.filter((s) => s.key !== a?.key);
    return (s, i) => e.items.length ? (t(), n("section", fp, [
      l("div", pp, [
        i[0] || (i[0] = l("h2", { class: "text-sm font-semibold" }, "Setup checklist", -1)),
        e.reportHref ? (t(), n("a", {
          key: 0,
          href: e.reportHref,
          class: "text-xs text-muted-foreground hover:text-foreground hover:underline"
        }, " Full report ", 8, mp)) : C("", !0)
      ]),
      m(a) ? (t(), n("div", vp, [
        i[1] || (i[1] = l("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        l("div", hp, [
          l("p", gp, f(m(a).title), 1),
          l("p", bp, f(m(a).detail), 1)
        ])
      ])) : C("", !0),
      m(r).length ? (t(), n("ul", xp, [
        (t(!0), n(S, null, V(m(r), (d) => (t(), n("li", {
          key: d.key,
          class: "flex items-start gap-3"
        }, [
          l("span", {
            class: A([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              d.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            d.done ? (t(), n("svg", yp, [...i[2] || (i[2] = [
              l("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : C("", !0)
          ], 2),
          l("div", kp, [
            l("p", {
              class: A(["text-sm", d.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(d.title), 3),
            d.done ? C("", !0) : (t(), n("p", $p, f(d.detail), 1))
          ])
        ]))), 128))
      ])) : C("", !0)
    ])) : C("", !0);
  }
}), wp = {
  class: "bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm",
  role: "status"
}, _p = { class: "flex items-center gap-2" }, Cp = { class: "font-medium tabular-nums" }, Mp = { class: "ml-auto flex items-center gap-3" }, A1 = /* @__PURE__ */ M({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: o }) {
    const a = o, r = (s) => new Intl.NumberFormat().format(s);
    return (s, i) => (t(), n("div", wp, [
      l("div", _p, [
        I(s.$slots, "actions")
      ]),
      l("span", Cp, [
        e.allMatching ? (t(), n(S, { key: 0 }, [
          Y(" All " + f(e.total !== void 0 ? r(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(S, { key: 1 }, [
          Y(f(r(e.count)) + " records selected", 1)
        ], 64))
      ]),
      l("div", Mp, [
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
}), Sp = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, Bp = { class: "text-muted-foreground text-xs tabular-nums" }, zp = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, Pp = ["value"], Ap = ["value"], Op = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, Lp = ["disabled"], jp = ["disabled"], Vp = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Tp = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, Dp = ["disabled"], O1 = /* @__PURE__ */ M({
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
    const a = e, r = o, s = (v) => new Intl.NumberFormat().format(v), i = b(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = b(() => (a.page - 1) * a.perPage + a.rowsOnPage), c = b(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (v, x) => (t(), n("div", Sp, [
      l("p", Bp, [
        Y(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(S, { key: 0 }, [
          Y("of " + f(s(e.total)), 1)
        ], 64)) : C("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", zp, [
        x[4] || (x[4] = l("span", null, "Per page", -1)),
        l("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: x[0] || (x[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(S, null, V(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, f(p), 9, Ap))), 128))
        ], 40, Pp)
      ])) : C("", !0),
      l("nav", Op, [
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: x[1] || (x[1] = (p) => r("first"))
        }, [...x[5] || (x[5] = [
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
        ])], 8, Lp),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: x[2] || (x[2] = (p) => r("previous"))
        }, [...x[6] || (x[6] = [
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
        ])], 8, jp),
        l("span", Vp, f(e.page), 1),
        c.value !== null ? (t(), n("span", Tp, " of " + f(s(c.value)), 1)) : C("", !0),
        l("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: x[3] || (x[3] = (p) => r("next"))
        }, [...x[7] || (x[7] = [
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
        ])], 8, Dp)
      ])
    ]));
  }
}), Fp = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border" }, Ep = {
  key: 0,
  class: "shrink-0 border-b px-2 py-2"
}, Ip = {
  key: 1,
  class: "shrink-0 border-b px-2 py-2"
}, Np = {
  key: 2,
  class: "shrink-0 border-t px-3 py-2"
}, L1 = /* @__PURE__ */ M({
  __name: "TableShell",
  setup(e) {
    return (o, a) => (t(), n("div", Fp, [
      o.$slots.tabs ? (t(), n("div", Ep, [
        I(o.$slots, "tabs")
      ])) : C("", !0),
      o.$slots.toolbar ? (t(), n("div", Ip, [
        I(o.$slots, "toolbar")
      ])) : C("", !0),
      I(o.$slots, "default"),
      o.$slots.pagination ? (t(), n("div", Np, [
        I(o.$slots, "pagination")
      ])) : C("", !0)
    ]));
  }
}), Rp = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Hp = ["aria-current"], Up = ["title"], Kp = ["aria-current", "onClick"], Zp = ["title"], qp = /* @__PURE__ */ M({
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
    return (s, i) => (t(), n("div", Rp, [
      l("button", {
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => a("select", null))
      }, [
        i[1] || (i[1] = Y(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, Up)) : (t(), D(Be, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Hp),
      (t(!0), n(S, null, V(e.tabs, (d) => (t(), n("button", {
        key: d,
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (c) => a("select", d)
      }, [
        Y(f(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, Zp)) : (t(), D(Be, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Kp))), 128))
    ]));
  }
}), j1 = /* @__PURE__ */ st(qp, [["__scopeId", "data-v-3967c945"]]), Gp = { class: "flex flex-wrap items-center justify-end gap-2" }, Wp = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Yp = ["placeholder", "title", "aria-label"], Jp = ["aria-label"], Xp = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Qp = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, em = { class: "text-xs font-medium" }, tm = ["value", "onChange"], am = ["value"], nm = { class: "grid grid-cols-2 gap-2" }, om = ["value", "onChange"], lm = ["value", "onChange"], sm = {
  key: 3,
  class: "flex items-center gap-2"
}, rm = ["aria-checked", "onClick"], im = { class: "text-xs" }, dm = ["onClick"], um = ["value", "onChange"], cm = ["value"], fm = ["disabled", "onClick"], pm = { class: "flex items-center justify-between px-1 pt-1 pb-2" }, mm = { class: "flex max-h-80 flex-col gap-0.5 overflow-y-auto px-1 pb-3" }, vm = ["checked", "disabled", "onChange"], hm = ["onClick"], gm = ["aria-pressed", "aria-label", "title"], bm = {
  key: 3,
  class: "text-muted-foreground shrink-0 text-xs"
}, V1 = /* @__PURE__ */ M({
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
    const c = b(
      () => a.filterSchema.filter(
        (j) => a.filters[j.key] !== null && a.filters[j.key] !== void 0
      ).length
    ), v = b(() => JSON.stringify(d.value) !== JSON.stringify(a.filters)), x = b(() => a.search !== "" || c.value > 0);
    function p(j) {
      return j.type === "multiselect";
    }
    function g(j) {
      const L = d.value[j.key];
      return Array.isArray(L) ? L : L == null ? [] : [L];
    }
    function y(j) {
      return g(j).filter(
        (L) => typeof L == "string" || typeof L == "number"
      );
    }
    function $(j) {
      return P(j).flatMap(
        (L) => typeof L.value == "string" || typeof L.value == "number" ? [{ value: L.value, label: L.label }] : []
      );
    }
    function z(j, L) {
      d.value = { ...d.value, [j.key]: L === "" ? null : L };
    }
    function w(j, L) {
      const T = d.value[j.key];
      if (typeof T != "string" || !T.includes(".."))
        return "";
      const [N, R] = T.split("..");
      return L === "from" ? N ?? "" : R ?? "";
    }
    function k(j, L, T) {
      const N = L === "from" ? T : w(j, "from"), R = L === "to" ? T : w(j, "to");
      d.value = {
        ...d.value,
        [j.key]: N && R ? `${N}..${R}` : null
      };
    }
    function _(j) {
      r("apply-filters", { ...d.value }), j();
    }
    function u(j, L) {
      d.value[j] = L, r("apply-filters", { ...d.value });
    }
    function h() {
      d.value = Object.fromEntries(a.filterSchema.map((j) => [j.key, null]));
    }
    function P(j) {
      return j.type === "boolean" ? [
        { value: !0, label: j.trueLabel ?? "Yes" },
        { value: !1, label: j.falseLabel ?? "No" }
      ] : j.type === "daterange" ? Object.entries(j.presets ?? {}).map(([L, T]) => ({
        value: L,
        label: T
      })) : (j.options ?? []).map((L) => ({ value: L, label: L }));
    }
    const O = U(new Set(a.hidden));
    ie(
      () => a.hidden,
      (j) => {
        O.value = new Set(j);
      },
      { deep: !0 }
    );
    function G(j) {
      const L = new Set(O.value);
      L.has(j) ? L.delete(j) : L.add(j), O.value = L;
    }
    function Z(j) {
      r("apply-columns", [...O.value]), j();
    }
    function ae() {
      s.value = "", r("clear");
    }
    return (j, L) => (t(), n("div", Gp, [
      l("div", Wp, [
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
        }, null, 8, Yp), [
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
            class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", c.value ? "border-primary text-primary" : ""]),
            "aria-label": c.value ? `Filters (${c.value} active)` : "Filters",
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
            c.value ? (t(), n("span", Xp, f(c.value), 1)) : C("", !0)
          ], 10, Jp)
        ]),
        panel: E(({ close: T }) => [
          l("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
            L[7] || (L[7] = l("span", { class: "text-sm font-semibold" }, "Filters", -1)),
            l("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: h
            }, " Reset ")
          ]),
          L[10] || (L[10] = l("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
          l("div", Qp, [
            (t(!0), n(S, null, V(e.filterSchema, (N) => (t(), n("div", {
              key: N.key,
              class: "flex flex-col gap-1.5"
            }, [
              l("label", em, f(N.label), 1),
              p(N) ? (t(), D(Lt, {
                key: 0,
                "model-value": y(N),
                options: $(N),
                placeholder: `Any ${N.label.toLowerCase()}`,
                "onUpdate:modelValue": (R) => d.value[N.key] = R.length ? R : null
              }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : N.type === "querybuilder" ? (t(), D(Fo, {
                key: 1,
                "model-value": d.value[N.key] ?? null,
                fields: N.fields ?? {},
                operators: N.operators ?? {},
                "max-depth": N.maxDepth ?? 5,
                onApply: (R) => u(N.key, R)
              }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : N.type === "daterange" ? (t(), n(S, { key: 2 }, [
                l("select", {
                  value: typeof d.value[N.key] == "string" && !String(d.value[N.key]).includes("..") ? d.value[N.key] : "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                  onChange: (R) => z(N, R.target.value)
                }, [
                  L[8] || (L[8] = l("option", { value: "" }, "Any time", -1)),
                  (t(!0), n(S, null, V(P(N), (R) => (t(), n("option", {
                    key: String(R.value),
                    value: R.value
                  }, f(R.label), 9, am))), 128))
                ], 40, tm),
                l("div", nm, [
                  l("input", {
                    type: "date",
                    value: w(N, "from"),
                    "aria-label": "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (R) => k(
                      N,
                      "from",
                      R.target.value
                    )
                  }, null, 40, om),
                  l("input", {
                    type: "date",
                    value: w(N, "to"),
                    "aria-label": "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (R) => k(
                      N,
                      "to",
                      R.target.value
                    )
                  }, null, 40, lm)
                ])
              ], 64)) : N.type === "boolean" ? (t(), n("div", sm, [
                l("button", {
                  type: "button",
                  role: "switch",
                  "aria-checked": d.value[N.key] === !0,
                  class: A([
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    d.value[N.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                  ]),
                  onClick: (R) => z(N, d.value[N.key] === !0 ? null : !0)
                }, [
                  l("span", {
                    class: A(["bg-background absolute top-0.5 size-4 rounded-full transition-all", d.value[N.key] === !0 ? "left-4.5" : "left-0.5"])
                  }, null, 2)
                ], 10, rm),
                l("span", im, f(N.trueLabel ?? "Yes"), 1),
                l("button", {
                  type: "button",
                  class: A([
                    "text-muted-foreground ml-auto text-xs hover:underline",
                    d.value[N.key] === !1 ? "text-primary font-medium" : ""
                  ]),
                  onClick: (R) => z(N, d.value[N.key] === !1 ? null : !1)
                }, f(N.falseLabel ?? "No") + " only ", 11, dm)
              ])) : (t(), n("select", {
                key: 4,
                value: d.value[N.key] ?? "",
                class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                onChange: (R) => z(N, R.target.value)
              }, [
                L[9] || (L[9] = l("option", { value: "" }, "All", -1)),
                (t(!0), n(S, null, V(P(N), (R) => (t(), n("option", {
                  key: String(R.value),
                  value: R.value
                }, f(R.label), 9, cm))), 128))
              ], 40, um))
            ]))), 128))
          ]),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
            disabled: !v.value,
            onClick: (N) => _(T)
          }, " Apply filters ", 8, fm)
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
          l("div", pm, [
            L[12] || (L[12] = l("span", { class: "text-sm font-semibold" }, "Columns", -1)),
            l("button", {
              class: "text-destructive text-xs hover:underline",
              onClick: L[2] || (L[2] = (N) => O.value = /* @__PURE__ */ new Set())
            }, " Reset ")
          ]),
          l("div", mm, [
            (t(!0), n(S, null, V(e.columns, (N) => (t(), n("label", {
              key: N.key,
              class: A(["hover:bg-accent flex items-center gap-2.5 rounded px-2 py-1.5 text-sm", N.locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"])
            }, [
              l("input", {
                type: "checkbox",
                class: "accent-primary size-4",
                checked: !O.value.has(N.key),
                disabled: N.locked,
                onChange: (R) => G(N.key)
              }, null, 40, vm),
              Y(" " + f(N.label), 1)
            ], 2))), 128))
          ]),
          l("button", {
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-full rounded-md text-sm font-medium transition-colors",
            onClick: (N) => Z(T)
          }, " Apply columns ", 8, hm)
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
      ])], 10, gm)) : C("", !0),
      x.value ? (t(), n("button", {
        key: 2,
        type: "button",
        class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
        onClick: ae
      }, " Clear ")) : C("", !0),
      e.loading ? (t(), n("span", bm, "Loading…")) : C("", !0)
    ]));
  }
}), xm = {
  key: 0,
  class: "text-muted-foreground text-sm"
}, ym = { class: "grid gap-2" }, km = {
  key: 0,
  class: "text-destructive text-sm"
}, $m = { class: "flex gap-2" }, T1 = /* @__PURE__ */ M({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: o }) {
    const a = o, s = U((() => {
      const y = navigator.userAgent, $ = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: w }) => w.test(y))?.name, z = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: w }) => w.test(y))?.name;
      return [$, z].filter(Boolean).join(" on ") || "";
    })()), i = U(!1), d = Ht(null), c = b(() => d.value?.isLoading.value ?? !1), v = b(() => d.value?.error.value ?? null), x = b(() => d.value?.isSupported.value ?? !1);
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
    const p = async (y) => {
      y.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, g = () => {
      i.value = !1, s.value = "";
    };
    return (y, $) => x.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      l("div", ym, [
        $[3] || ($[3] = l("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        oe(l("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": $[1] || ($[1] = (z) => s.value = z),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [_e, s.value]
        ]),
        $[4] || ($[4] = l("p", { class: "text-muted-foreground text-xs" }, " A name helps you identify this passkey later. ", -1))
      ]),
      v.value ? (t(), n("p", km, f(v.value), 1)) : C("", !0),
      l("div", $m, [
        W(ye, {
          type: "submit",
          disabled: c.value || !s.value.trim()
        }, {
          default: E(() => [
            Y(f(c.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        W(ye, {
          type: "button",
          variant: "ghost",
          onClick: g
        }, {
          default: E(() => [...$[5] || ($[5] = [
            Y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(ye, {
      key: 1,
      variant: "outline",
      onClick: $[0] || ($[0] = (z) => i.value = !0)
    }, {
      default: E(() => [...$[2] || ($[2] = [
        Y(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", xm, " Passkeys are not supported in this browser. "));
  }
}), wm = ["aria-label"], _m = { class: "flex items-start justify-between gap-3 border-b px-4 py-3" }, Cm = { class: "min-w-0" }, Mm = { class: "text-base font-semibold" }, Sm = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Bm = { class: "flex shrink-0 items-center gap-2" }, zm = { class: "min-h-0 flex-1 overflow-y-auto" }, Pm = {
  key: 0,
  class: "flex items-center justify-end gap-2 border-t px-4 py-3"
}, D1 = /* @__PURE__ */ M({
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
    function c(v) {
      if (!a.open)
        return;
      if (v.key === "Escape") {
        v.stopPropagation(), r("close");
        return;
      }
      if (v.key !== "Tab" || !s.value)
        return;
      const x = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (x.length === 0)
        return;
      const p = x[0], g = x[x.length - 1];
      v.shiftKey && document.activeElement === p ? (v.preventDefault(), g.focus()) : !v.shiftKey && document.activeElement === g && (v.preventDefault(), p.focus());
    }
    return ie(
      () => a.open,
      async (v) => {
        if (v) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", c), await be(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", c), i?.focus?.();
      }
    ), de(() => {
      document.removeEventListener("keydown", c), document.body.style.overflow = d;
    }), (v, x) => (t(), D(ze, { to: "body" }, [
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
            onClick: x[0] || (x[0] = (p) => r("close"))
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
            class: A(["bg-background fixed top-0 z-50 flex h-full max-w-full flex-col shadow-2xl", [e.width, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title
          }, [
            l("header", _m, [
              l("div", Cm, [
                l("h2", Mm, f(e.title), 1),
                e.description ? (t(), n("p", Sm, f(e.description), 1)) : C("", !0)
              ]),
              l("div", Bm, [
                I(v.$slots, "header-actions"),
                l("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Close",
                  onClick: x[1] || (x[1] = (p) => r("close"))
                }, [...x[2] || (x[2] = [
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
            l("div", zm, [
              I(v.$slots, "default")
            ]),
            v.$slots.footer ? (t(), n("footer", Pm, [
              I(v.$slots, "footer")
            ])) : C("", !0)
          ], 10, wm)) : C("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), Am = { class: "text-sm font-semibold" }, Om = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Lm = {
  key: 4,
  class: "flex flex-col gap-3"
}, jm = { class: "text-sm font-medium" }, Vm = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Tm = {
  key: 0,
  class: "mb-1 font-medium"
}, Dm = ["onClick"], Fm = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Em = { class: "flex items-center justify-between gap-3 border-t p-4" }, Im = ["disabled"], Nm = /* @__PURE__ */ M({
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
    const a = e, r = o, s = U(!a.node.collapsed), i = U(0), d = U(0), c = b(
      () => (a.node.children ?? []).map((w) => ({
        label: w.label ?? "",
        description: w.description
      }))
    ), v = b(() => a.depth === 0), x = b(() => {
      const w = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, k = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        w[a.node.align ?? "start"] ?? "items-start",
        k[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = b(() => {
      const w = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return w[a.node.tone ?? "info"] ?? w.info;
    }), g = b(() => {
      const w = a.node.columns ?? 1;
      return w >= 3 ? "sm:grid-cols-3" : w === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function y(w) {
      const k = [], _ = (u) => {
        u.component === "field" && u.key && k.push(u.key), u.children?.forEach(_);
      };
      return _(w), k.some((u) => a.errors[u]);
    }
    function $(w) {
      const k = w.visibleWhen;
      return k ? a.values[k.field] == k.value : !0;
    }
    function z(w) {
      if (a.upload)
        return (k, _) => a.upload(w, k, _);
    }
    return (w, k) => {
      const _ = et("SchemaNode", !0);
      return e.node.component === "field" && $(e.node) ? (t(), D(Ve, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (u) => e.searchOptions(e.node.key, u) : void 0,
        upload: z(e.node.key),
        discard: e.discard,
        onChange: k[0] || (k[0] = (u) => r("change", e.node.key, u))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && $(e.node) ? (t(), n("section", {
        key: 1,
        class: A(v.value ? "bg-card rounded-lg border" : "")
      }, [
        l("header", {
          class: A(["flex items-start justify-between gap-3", [
            v.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: k[1] || (k[1] = (u) => e.node.collapsible && (s.value = !s.value))
        }, [
          l("div", null, [
            l("h3", Am, f(e.node.label), 1),
            e.node.description ? (t(), n("p", Om, f(e.node.description), 1)) : C("", !0)
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...k[11] || (k[11] = [
            l("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : C("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [g.value, v.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (u, h) => (t(), D(_, {
            key: h,
            node: u,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: A(u.span && u.span >= 2 ? "sm:col-span-2" : ""),
            onChange: k[2] || (k[2] = (P, O) => r("change", P, O))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : C("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", g.value])
      }, [
        (t(!0), n(S, null, V(e.node.children ?? [], (u, h) => (t(), D(_, {
          key: h,
          node: u,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: k[3] || (k[3] = (P, O) => r("change", P, O))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 3,
        class: A(["flex", x.value])
      }, [
        (t(!0), n(S, null, V(e.node.children ?? [], (u, h) => (t(), D(_, {
          key: h,
          node: u,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: k[4] || (k[4] = (P, O) => r("change", P, O))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Lm, [
        l("legend", jm, f(e.node.label), 1),
        e.node.description ? (t(), n("p", Vm, f(e.node.description), 1)) : C("", !0),
        l("div", {
          class: A(["grid grid-cols-1 gap-4", g.value])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (u, h) => (t(), D(_, {
            key: h,
            node: u,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: k[5] || (k[5] = (P, O) => r("change", P, O))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 5,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", Tm, f(e.node.title), 1)) : C("", !0),
        l("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 6,
        class: A(v.value ? "bg-card rounded-lg border" : "")
      }, [
        l("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", v.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (u, h) => (t(), n("button", {
            key: h,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === h ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (P) => i.value = h
          }, [
            Y(f(u.label) + " ", 1),
            y(u) ? (t(), n("span", Fm)) : C("", !0)
          ], 10, Dm))), 128))
        ], 2),
        (t(!0), n(S, null, V(e.node.children ?? [], (u, h) => oe((t(), n("div", {
          key: h,
          class: A(["flex flex-col gap-5", v.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(S, null, V(u.children ?? [], (P, O) => (t(), D(_, {
            key: O,
            node: P,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: k[6] || (k[6] = (G, Z) => r("change", G, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ce, i.value === h]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 7,
        class: A(v.value ? "bg-card rounded-lg border" : "")
      }, [
        W(Js, {
          class: A(["p-4", v.value ? "border-b" : ""]),
          steps: c.value,
          "active-step": d.value,
          "has-error": (u) => y((e.node.children ?? [])[u]),
          "onUpdate:activeStep": k[7] || (k[7] = (u) => d.value = u)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(S, null, V(e.node.children ?? [], (u, h) => oe((t(), n("div", {
          key: h,
          class: A(["flex flex-col gap-5", v.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(S, null, V(u.children ?? [], (P, O) => (t(), D(_, {
            key: O,
            node: P,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: k[8] || (k[8] = (G, Z) => r("change", G, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ce, d.value === h]
        ])), 128)),
        l("div", Em, [
          l("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: k[9] || (k[9] = (u) => d.value--)
          }, " Back ", 8, Im),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: k[10] || (k[10] = (u) => d.value++)
          }, " Next ")) : C("", !0)
        ])
      ], 2)) : C("", !0);
    };
  }
}), Rm = { class: "flex flex-col gap-4" }, Hm = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, F1 = /* @__PURE__ */ M({
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
    const a = e, r = o, s = b(() => a.nodes.length > 0), i = b(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = b(() => a.errors._conflict);
    function c(v) {
      if (a.upload)
        return (x, p) => a.upload(v, x, p);
    }
    return (v, x) => (t(), n("div", Rm, [
      d.value ? (t(), n("p", Hm, f(d.value), 1)) : C("", !0),
      s.value ? (t(!0), n(S, { key: 1 }, V(e.nodes, (p, g) => (t(), D(Nm, {
        key: g,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: x[0] || (x[0] = (y, $) => r("change", y, $))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(S, null, V(e.fields, (p) => (t(), D(Ve, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (g) => e.searchOptions(p.key, g) : void 0,
          upload: c(p.key),
          discard: e.discard,
          class: A(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (g) => r("change", p.key, g)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange"]))), 128))
      ], 2))
    ]));
  }
}), Um = {
  key: 0,
  class: "pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4",
  role: "status",
  "aria-live": "polite"
}, Km = { class: "bg-popover pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-lg" }, Zm = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, qm = ["disabled"], Gm = ["disabled"], Wm = ["disabled"], E1 = /* @__PURE__ */ M({
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
          e.show ? (t(), n("div", Um, [
            l("div", Km, [
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
              l("span", Zm, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[0] || (a[0] = (r) => o.$emit("discard"))
              }, f(e.discardLabel), 9, qm)) : C("", !0),
              l("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-full px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: a[1] || (a[1] = (r) => o.$emit("cancel"))
              }, f(e.cancelLabel), 9, Gm),
              l("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: a[2] || (a[2] = (r) => o.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, Wm)
            ])
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
function I1(e, o = {}) {
  const { warnOnUnload: a = !0 } = o, r = U(qe(e.value)), s = b(() => qe(e.value) !== r.value);
  function i() {
    r.value = qe(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function c(v) {
    s.value && (v.preventDefault(), v.returnValue = "");
  }
  return re(() => {
    a && window.addEventListener("beforeunload", c);
  }), de(() => {
    window.removeEventListener("beforeunload", c);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function qe(e) {
  return JSON.stringify(e, (o, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const Ym = {
  key: 0,
  class: "flex flex-col gap-0.5"
}, Jm = { class: "text-muted-foreground text-xs font-medium" }, Xm = { class: "text-sm" }, Qm = { class: "text-sm font-semibold" }, ev = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, tv = ["onClick"], N1 = /* @__PURE__ */ M({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  setup(e) {
    const o = e, a = U(!o.node.collapsed), r = U(0), s = b(() => o.depth === 0), i = b(() => {
      const g = o.node.columns ?? 1;
      return g >= 3 ? "sm:grid-cols-3" : g === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), d = {
      success: "bg-primary text-primary-foreground",
      danger: "bg-destructive text-white",
      warning: "bg-secondary text-secondary-foreground",
      neutral: "border text-foreground"
    }, c = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, v = b(() => o.node.key ? o.record[o.node.key] : null), x = b(() => {
      const g = v.value;
      if (g == null || g === "")
        return "-";
      if (o.node.type === "date" || o.node.type === "datetime")
        return new Date(String(g)).toLocaleDateString(void 0, c[o.node.type]);
      let y = String(g);
      return o.node.transform === "upper" && (y = y.toUpperCase()), o.node.transform === "lower" && (y = y.toLowerCase()), [o.node.prefix, y, o.node.suffix].filter(Boolean).join(" ");
    }), p = b(() => {
      const g = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), y = o.node.colors?.[g] ?? o.node.defaultColor ?? "neutral";
      return d[y] ?? d.neutral;
    });
    return (g, y) => {
      const $ = et("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", Ym, [
        l("dt", Jm, f(e.node.label), 1),
        l("dd", Xm, [
          e.node.type === "badge" ? (t(), n("span", {
            key: 0,
            class: A(["inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize", p.value])
          }, f(v.value), 3)) : (t(), n("span", {
            key: 1,
            class: A([
              e.node.mono ? "font-mono text-xs" : "",
              e.node.muted ? "text-muted-foreground" : ""
            ])
          }, f(x.value), 3))
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: A(s.value ? "bg-card rounded-lg border" : "")
      }, [
        l("header", {
          class: A(["flex items-start justify-between gap-3", [
            s.value ? "px-4 py-3" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: y[0] || (y[0] = (z) => e.node.collapsible && (a.value = !a.value))
        }, [
          l("div", null, [
            l("h3", Qm, f(e.node.label), 1),
            e.node.description ? (t(), n("p", ev, f(e.node.description), 1)) : C("", !0)
          ])
        ], 2),
        a.value ? (t(), n("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [i.value, s.value ? "border-t px-4 py-4" : ""]])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (z, w) => (t(), D($, {
            key: w,
            node: z,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : C("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(S, null, V(e.node.children ?? [], (z, w) => (t(), D($, {
          key: w,
          node: z,
          record: e.record,
          depth: e.depth + 1
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: A(s.value ? "bg-card overflow-hidden rounded-lg border" : "")
      }, [
        l("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", s.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(S, null, V(e.node.children ?? [], (z, w) => (t(), n("button", {
            key: w,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              r.value === w ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (k) => r.value = w
          }, f(z.label), 11, tv))), 128))
        ], 2),
        (t(!0), n(S, null, V(e.node.children ?? [], (z, w) => oe((t(), n("div", {
          key: w,
          class: A(["flex flex-col gap-5", s.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(S, null, V(z.children ?? [], (k, _) => (t(), D($, {
            key: _,
            node: k,
            record: e.record,
            depth: e.depth + 1
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ce, r.value === w]
        ])), 128))
      ], 2)) : C("", !0);
    };
  }
}), av = ["data-variant"], nv = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", R1 = /* @__PURE__ */ M({
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
    }, r = b(
      () => [nv, a[o.variant], o.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      I(s.$slots, "default")
    ], 10, av));
  }
});
function H1(e) {
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
function U1(e) {
  const { config: o, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, c = U(
    o.driver === "none" ? "off" : "connecting"
  ), v = U(/* @__PURE__ */ new Set());
  let x = /* @__PURE__ */ new Map(), p, g, y, $ = (/* @__PURE__ */ new Date()).toISOString(), z = null;
  function w(L, T) {
    x.set(L, { ...x.get(L) ?? {}, ...T }), !p && (p = setTimeout(() => {
      p = void 0, k();
    }, o.batchMs));
  }
  function k() {
    if (x.size === 0)
      return;
    const L = x;
    x = /* @__PURE__ */ new Map();
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
  async function _() {
    if (!(!s || a.value.length === 0)) {
      y?.abort(), y = new AbortController();
      try {
        const L = a.value.map((R) => R[r]), { records: T, at: N } = await s(L, $);
        $ = N, c.value = "live";
        for (const R of T)
          w(R[r], R);
      } catch {
        c.value = "connecting";
      }
    }
  }
  function u() {
    h(), c.value = "live", g = setInterval(_, o.intervalMs);
  }
  function h() {
    clearInterval(g), g = void 0, y?.abort();
  }
  function P() {
    return window.Echo ?? null;
  }
  function O() {
    const L = P();
    if (!L || !o.channel) {
      c.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    z = o.channel;
    const T = L.private(o.channel);
    for (const N of o.events)
      T.listen(N, (R) => {
        R?.[r] !== void 0 && w(R[r], R);
      });
    c.value = "live", L.connector?.pusher?.connection?.bind("connected", () => {
      c.value = "live", i?.();
    }), L.connector?.pusher?.connection?.bind("disconnected", () => {
      c.value = "connecting";
    });
  }
  function G() {
    z && (P()?.leave(z), z = null);
  }
  function Z() {
    o.driver === "poll" && u(), o.driver === "broadcast" && O();
  }
  function ae() {
    h(), G(), clearTimeout(p), p = void 0, x = /* @__PURE__ */ new Map();
  }
  function j() {
    o.pauseWhenHidden && (document.hidden ? (ae(), c.value = "paused") : ($ = (/* @__PURE__ */ new Date()).toISOString(), Z(), i?.()));
  }
  return re(() => {
    o.driver !== "none" && (Z(), o.pauseWhenHidden && document.addEventListener("visibilitychange", j));
  }), de(() => {
    document.removeEventListener("visibilitychange", j), ae();
  }), { status: c, recentlyChanged: v, applyPatch: w, flush: k, pollOnce: _ };
}
const ov = /^[a-z0-9-]+$/, lv = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function K1(e) {
  Ut(() => {
    if (typeof document > "u")
      return;
    const o = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !ov.test(a) || typeof r != "string" || !lv.test(r) || (o[`--${a}`] = r);
    rl(o);
  });
}
const sv = {
  success: "default",
  danger: "destructive",
  warning: "secondary",
  neutral: "outline"
};
function Z1(e) {
  return e != null && e !== "";
}
function rv(e) {
  const o = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" ")) : (e.key === "name" && o.push("font-medium"), e.mono && o.push("font-mono text-xs"), e.muted && o.push("text-muted-foreground"), e.transform === "upper" && o.push("uppercase"), e.transform === "lower" && o.push("lowercase"), e.align === "right" && o.push("text-right"), e.align === "center" && o.push("text-center"), o.join(" "));
}
function q1(e) {
  const o = b(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      copyable: s.copyable,
      cellClass: rv(s)
    }))
  ), a = b(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const c = typeof i == "boolean" ? i ? "1" : "" : String(i), v = d.colors?.[c] ?? d.defaultColor ?? "neutral";
    return sv[v] ?? "outline";
  }
  return { columns: o, byKey: a, badgeVariant: r };
}
const iv = { class: "flex items-center gap-0.5" }, dv = /* @__PURE__ */ M({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (o, a) => (t(), n("span", iv, [
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
}), uv = /* @__PURE__ */ M({
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
}), cv = { class: "flex flex-col gap-2" }, fv = { class: "bg-card rounded-lg border p-4" }, pv = { class: "text-muted-foreground truncate text-xs" }, mv = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, vv = /* @__PURE__ */ M({
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
    }, r = b(() => ({ ...a, ...o.field.limits ?? {} })), s = b(
      () => String(o.values[o.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = b(
      () => String(o.values[o.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = b(
      () => String(o.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), c = b(() => {
      const z = String(o.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return z === "" ? d.value : `${d.value} › ${z.split("/").join(" › ")}`;
    });
    function v(z, w) {
      return z.length <= w ? z : `${z.slice(0, w - 1).trimEnd()}…`;
    }
    const x = b(() => v(s.value, r.value.titleMax)), p = b(() => v(i.value, r.value.descriptionMax));
    function g(z, w, k) {
      return z === 0 ? { tone: "text-muted-foreground", note: "empty" } : z > k ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : z < w ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const y = b(
      () => g(s.value.length, r.value.titleMin, r.value.titleMax)
    ), $ = b(
      () => g(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (z, w) => (t(), n("div", cv, [
      l("div", fv, [
        l("p", pv, f(c.value), 1),
        l("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", x.value === "" ? "text-muted-foreground italic" : ""])
        }, f(x.value || "Untitled page"), 3),
        l("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      l("div", mv, [
        l("span", {
          class: A(y.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(y.value.note), 3),
        l("span", {
          class: A($.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f($.value.note), 3)
      ]),
      w[0] || (w[0] = l("p", { class: "text-muted-foreground text-xs" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
});
function hv() {
  he("radio", Xi), he("checkboxlist", td), he("tags", id), he("colour", yd), he("slider", Md), he("visual-select", Ed), he("markdown", Ai), he("code", Fi), he("seo-preview", vv), Ze("swatch", Nd), Ze("voucher-code-box", uv), Ze("document-colour-mode", dv);
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
const gv = /* @__PURE__ */ M({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: o, shown: a } = Ft();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: o,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", m(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: X({ transitionDelay: `${e.delay}ms` })
    }, [
      I(r.$slots, "default")
    ], 6));
  }
}), bv = ["id"], ve = /* @__PURE__ */ M({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (o, a) => (t(), n("section", {
      id: e.id,
      class: A(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      l("div", {
        class: A(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        W(gv, null, {
          default: E(() => [
            I(o.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, bv));
  }
}), xv = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, yv = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, kv = {
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
      class: A(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", xv, f(e.eyebrow), 1)) : C("", !0),
      e.title ? (t(), n("h2", yv, f(e.title), 1)) : C("", !0),
      e.body ? (t(), n("p", kv, f(e.body), 1)) : C("", !0)
    ], 2)) : C("", !0);
  }
});
function $v() {
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
const wv = { class: "pk-tilt-inner relative h-full" }, _v = /* @__PURE__ */ M({
  __name: "PkTiltCard",
  setup(e) {
    const { el: o } = $v();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: o,
      class: "pk-tilt group/tilt"
    }, [
      l("div", wv, [
        r[0] || (r[0] = l("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        I(a.$slots, "default")
      ])
    ], 512));
  }
}), Cv = { class: "flex flex-col gap-10" }, Mv = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, Sv = { class: "text-base font-semibold" }, Bv = { class: "text-sm text-pretty text-muted-foreground" }, zv = /* @__PURE__ */ M({
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
        l("div", Cv, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", Mv, [
            (t(!0), n(S, null, V(e.items ?? [], (s, i) => (t(), D(_v, {
              key: i,
              class: A(o(s.span))
            }, {
              default: E(() => [
                l("div", {
                  class: A([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  l("h3", Sv, f(s.title), 1),
                  l("p", Bv, f(s.body), 1)
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
}), Pv = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Av = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Ov = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Lv = ["href"], jv = /* @__PURE__ */ M({
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
        l("div", Pv, [
          l("h2", Av, f(e.title), 1),
          e.body ? (t(), n("p", Ov, f(e.body), 1)) : C("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, Lv)) : C("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Vv = { class: "flex flex-col gap-8" }, Tv = { class: "divide-y rounded-lg border" }, Dv = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Fv = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Ev = /* @__PURE__ */ M({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, { narrow: "" }, {
      default: E(() => [
        l("div", Vv, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("div", Tv, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              l("summary", Dv, [
                Y(f(r.question) + " ", 1),
                a[0] || (a[0] = l("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              l("p", Fv, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Iv = { class: "flex flex-col gap-10" }, Nv = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Rv = { class: "text-sm font-semibold" }, Hv = { class: "text-sm text-pretty text-muted-foreground" }, Uv = /* @__PURE__ */ M({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, null, {
      default: E(() => [
        l("div", Iv, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", Nv, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("h3", Rv, f(r.title), 1),
              l("p", Hv, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Kv = { class: "flex flex-col items-center gap-6 text-center" }, Zv = {
  key: 0,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, qv = { class: "max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl" }, Gv = {
  key: 1,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Wv = {
  key: 2,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Yv = ["href"], Jv = ["href"], Xv = {
  key: 3,
  class: "text-xs text-muted-foreground"
}, Qv = /* @__PURE__ */ M({
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
        l("div", Kv, [
          e.eyebrow ? (t(), n("p", Zv, f(e.eyebrow), 1)) : C("", !0),
          l("h1", qv, f(e.title), 1),
          e.body ? (t(), n("p", Gv, f(e.body), 1)) : C("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", Wv, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, Yv)) : C("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, Jv)) : C("", !0)
          ])) : C("", !0),
          e.note ? (t(), n("p", Xv, f(e.note), 1)) : C("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), eh = { class: "flex flex-col items-center gap-6" }, th = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, ah = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, nh = /* @__PURE__ */ M({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, { muted: "" }, {
      default: E(() => [
        l("div", eh, [
          e.title ? (t(), n("p", th, f(e.title), 1)) : C("", !0),
          l("ul", ah, [
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
}), oh = { class: "flex flex-col gap-10" }, lh = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, sh = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, rh = ["aria-pressed"], ih = ["aria-pressed"], dh = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, uh = { class: "grid gap-4 md:grid-cols-3" }, ch = { class: "flex flex-col gap-1" }, fh = { class: "text-sm font-semibold" }, ph = { class: "flex items-baseline gap-1" }, mh = { class: "text-3xl font-semibold tracking-tight" }, vh = {
  key: 0,
  class: "text-sm text-muted-foreground"
}, hh = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, gh = { class: "flex flex-col gap-2 text-sm" }, bh = { class: "text-muted-foreground" }, xh = ["href"], yh = /* @__PURE__ */ M({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const o = e, a = U(!1), r = b(() => (o.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), D(ve, { muted: "" }, {
      default: E(() => [
        l("div", oh, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", lh, [
            l("div", sh, [
              l("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (c) => a.value = !1)
              }, " Monthly ", 10, rh),
              l("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (c) => a.value = !0)
              }, " Annual ", 10, ih)
            ]),
            e.annualNote ? (t(), n("p", dh, f(e.annualNote), 1)) : C("", !0)
          ])) : C("", !0),
          l("ul", uh, [
            (t(!0), n(S, null, V(e.items ?? [], (c, v) => (t(), n("li", {
              key: v,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", c.featured ? "border-primary shadow-sm" : ""])
            }, [
              l("div", ch, [
                l("h3", fh, f(c.name), 1),
                l("p", ph, [
                  l("span", mh, f(s(c)), 1),
                  c.period ? (t(), n("span", vh, f(c.period), 1)) : C("", !0)
                ]),
                c.body ? (t(), n("p", hh, f(c.body), 1)) : C("", !0)
              ]),
              l("ul", gh, [
                (t(!0), n(S, null, V(c.features ?? [], (x, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = l("span", {
                    class: "mt-0.5 text-primary",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  l("span", bh, f(x.title), 1)
                ]))), 128))
              ]),
              c.label ? (t(), n("a", {
                key: 0,
                href: c.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  c.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(c.label), 11, xh)) : C("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function kh() {
  const e = U(null);
  let o = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !o || !s)
      return;
    const c = o.getBoundingClientRect(), v = c.height + window.innerHeight, x = v <= 0 ? 0 : (window.innerHeight - c.top) / v;
    o.style.setProperty("--pk-progress", String(Math.min(Math.max(x, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return re(() => {
    const c = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (o = e.value, c || typeof IntersectionObserver > "u") {
        o.style.setProperty("--pk-progress", "1");
        return;
      }
      o.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((v) => {
        s = v.some((x) => x.isIntersecting), s && d();
      }), a.observe(o), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), de(() => {
    a?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const $h = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, wh = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, _h = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Ch = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Mh = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Sh = { class: "pk-showcase-stage w-full [perspective:1400px]" }, Bh = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, zh = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, Ph = { class: "ml-3 truncate text-xs text-muted-foreground" }, Ah = { class: "flex" }, Oh = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, Lh = { class: "min-w-0 flex-1 p-4" }, jh = { class: "flex flex-col divide-y rounded-md border" }, Vh = /* @__PURE__ */ M({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: o } = kh();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: o,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      l("div", $h, [
        l("div", wh, [
          l("div", _h, [
            l("h2", Ch, f(e.title), 1),
            e.body ? (t(), n("p", Mh, f(e.body), 1)) : C("", !0)
          ]),
          l("div", Sh, [
            l("div", Bh, [
              l("div", zh, [
                r[0] || (r[0] = l("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = l("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = l("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                l("span", Ph, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              l("div", Ah, [
                l("div", Oh, [
                  (t(), n(S, null, V(6, (s) => l("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: X({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                l("div", Lh, [
                  r[4] || (r[4] = l("div", { class: "mb-3 flex gap-2" }, [
                    l("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    l("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  l("div", jh, [
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
}), Th = /* @__PURE__ */ M({
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
      const c = performance.now(), v = (x) => {
        const p = Math.min((x - c) / o.duration, 1);
        s.value = o.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(v) : s.value = o.to;
      };
      requestAnimationFrame(v);
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), Dh = { class: "flex flex-col gap-10" }, Fh = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, Eh = { class: "order-2 text-sm text-muted-foreground" }, Ih = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, Nh = /* @__PURE__ */ M({
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
        l("div", Dh, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("dl", Fh, [
            (t(!0), n(S, null, V(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              l("dt", Eh, f(s.label), 1),
              l("dd", Ih, [
                o(s.value) ? (t(), D(Th, {
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
}), Rh = { class: "flex flex-col gap-10" }, Hh = { class: "grid gap-6 md:grid-cols-3" }, Uh = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, Kh = { class: "text-sm font-semibold" }, Zh = { class: "text-sm text-pretty text-muted-foreground" }, qh = /* @__PURE__ */ M({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, null, {
      default: E(() => [
        l("div", Rh, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ol", Hh, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              l("span", Uh, f(s + 1), 1),
              l("h3", Kh, f(r.title), 1),
              l("p", Zh, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Gh = { class: "flex flex-col gap-10" }, Wh = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, Yh = { class: "text-pretty text-sm leading-relaxed" }, Jh = { class: "mt-auto flex items-center gap-3" }, Xh = ["src"], Qh = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, eg = { class: "min-w-0" }, tg = { class: "block truncate text-sm font-medium" }, ag = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, ng = /* @__PURE__ */ M({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (o, a) => (t(), D(ve, null, {
      default: E(() => [
        l("div", Gh, [
          W(Se, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          l("ul", Wh, [
            (t(!0), n(S, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              l("blockquote", Yh, " “" + f(r.quote) + "” ", 1),
              l("figcaption", Jh, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, Xh)) : (t(), n("span", Qh, f((r.name ?? "?").slice(0, 1)), 1)),
                l("span", eg, [
                  l("span", tg, f(r.name), 1),
                  r.role ? (t(), n("span", ag, f(r.role), 1)) : C("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), G1 = /* @__PURE__ */ M({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const a = e, r = {
      hero: Qv,
      logos: nh,
      features: Uv,
      bento: zv,
      showcase: Vh,
      steps: qh,
      stats: Nh,
      testimonials: ng,
      pricing: yh,
      faq: Ev,
      cta: jv
    }, s = b(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return o({ known: Object.keys(r) }), (i, d) => (t(!0), n(S, null, V(s.value, (c) => (t(), D(Me(c.component), Q({
      key: c.key
    }, { ref_for: !0 }, c.data), null, 16))), 128));
  }
}), og = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, W1 = /* @__PURE__ */ M({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (o, a) => (t(), n("div", og, [
      l("div", {
        class: A([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      l("div", {
        class: A([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      l("div", {
        class: A([
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
}), lg = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, Y1 = /* @__PURE__ */ M({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (o, a) => (t(), n("div", lg, [...a[0] || (a[0] = [
      Qe('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), sg = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, J1 = /* @__PURE__ */ M({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (o, a) => (t(), n("div", sg, [...a[0] || (a[0] = [
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
hv();
const X1 = "0.0.1";
export {
  Wl as Alert,
  Yl as AlertDescription,
  Jl as AlertTitle,
  Sg as AppearanceDrawer,
  _b as Avatar,
  Cb as AvatarFallback,
  Mb as AvatarImage,
  sv as BADGE_VARIANTS,
  g1 as BarChart,
  Sb as Breadcrumb,
  Bb as BreadcrumbEllipsis,
  zb as BreadcrumbItem,
  Pb as BreadcrumbLink,
  Ab as BreadcrumbList,
  Ob as BreadcrumbPage,
  Lb as BreadcrumbSeparator,
  vg as BulkActions,
  Xb as Card,
  Qb as CardAction,
  e1 as CardContent,
  t1 as CardDescription,
  a1 as CardFooter,
  n1 as CardHeader,
  o1 as CardTitle,
  C1 as ChartCard,
  Bs as Checkbox,
  yg as CheckboxCell,
  kg as CodeCell,
  xg as ColourCell,
  w1 as ComboChart,
  mg as DataTable,
  Nb as Dialog,
  Rb as DialogClose,
  Hb as DialogContent,
  Ub as DialogDescription,
  Kb as DialogFooter,
  Zb as DialogHeader,
  Ss as DialogOverlay,
  qb as DialogScrollContent,
  Gb as DialogTitle,
  Wb as DialogTrigger,
  ub as DropdownMenu,
  cb as DropdownMenuCheckboxItem,
  fb as DropdownMenuContent,
  pb as DropdownMenuGroup,
  mb as DropdownMenuItem,
  vb as DropdownMenuLabel,
  t0 as DropdownMenuPortal,
  hb as DropdownMenuRadioGroup,
  gb as DropdownMenuRadioItem,
  bb as DropdownMenuSeparator,
  xb as DropdownMenuShortcut,
  yb as DropdownMenuSub,
  kb as DropdownMenuSubContent,
  $b as DropdownMenuSubTrigger,
  wb as DropdownMenuTrigger,
  wg as EditableCell,
  Ve as FormFieldControl,
  _1 as HeatmapChart,
  He as ICON_PATHS,
  gg as IconCell,
  bg as ImageCell,
  N1 as InfoNode,
  $g as KeyValueCell,
  Yb as Label,
  b1 as LineChart,
  S1 as MiniStatCard,
  jb as NavigationMenu,
  Vb as NavigationMenuContent,
  Tb as NavigationMenuIndicator,
  Db as NavigationMenuItem,
  Fb as NavigationMenuLink,
  Eb as NavigationMenuList,
  Ib as NavigationMenuTrigger,
  Cs as NavigationMenuViewport,
  x1 as PieChart,
  Vg as PkAlertError,
  W1 as PkAuroraBackdrop,
  R1 as PkBadge,
  zv as PkBento,
  Bg as PkBottomNav,
  l1 as PkBoundary,
  f1 as PkBuilder,
  ye as PkButton,
  s1 as PkCard,
  td as PkCheckboxList,
  Tt as PkCodeBox,
  Fi as PkCodeInput,
  yd as PkColourPicker,
  J1 as PkConsoleBackdrop,
  Th as PkCountUp,
  jv as PkCta,
  r1 as PkDeviceFrame,
  v1 as PkDocument,
  Ee as PkDropdown,
  Y1 as PkEditorialBackdrop,
  Ev as PkFaq,
  Uv as PkFeatureGrid,
  Pg as PkFieldLabel,
  $r as PkFileUpload,
  Lg as PkHeading,
  Qv as PkHero,
  Tr as PkKeyValue,
  G1 as PkLandingSections,
  nh as PkLogoCloud,
  Ai as PkMarkdownInput,
  ct as PkModal,
  Lt as PkMultiSelect,
  Og as PkOtpInput,
  T1 as PkPasskeyRegister,
  Tg as PkPasswordInput,
  yh as PkPricing,
  Fo as PkQueryBuilder,
  Xi as PkRadioGroup,
  c1 as PkRepeater,
  gv as PkReveal,
  Zr as PkRichEditor,
  ve as PkSection,
  Se as PkSectionHeading,
  Vh as PkShowcase,
  Be as PkSkeleton,
  D1 as PkSlideover,
  Md as PkSlider,
  Ag as PkSpinner,
  Nh as PkStats,
  Js as PkStepIndicator,
  qh as PkSteps,
  Nd as PkSwatchPreview,
  id as PkTagsInput,
  ng as PkTestimonials,
  zg as PkTextInput,
  _v as PkTiltCard,
  Ed as PkVisualSelect,
  $1 as PolarAreaChart,
  k1 as RadarChart,
  _g as RecordActions,
  F1 as RecordForm,
  hg as RelationPanel,
  y1 as ScatterChart,
  Nm as SchemaNode,
  B1 as SegmentedBar,
  A1 as SelectionBar,
  ys as Separator,
  P1 as SetupChecklist,
  Ot as ShadcnInput,
  as as Sheet,
  Dg as SheetClose,
  os as SheetContent,
  ls as SheetDescription,
  Fg as SheetFooter,
  ss as SheetHeader,
  rs as SheetTitle,
  Eg as SheetTrigger,
  Ig as Sidebar,
  Ng as SidebarContent,
  Rg as SidebarFooter,
  Hg as SidebarGroup,
  Ug as SidebarGroupAction,
  Kg as SidebarGroupContent,
  Zg as SidebarGroupLabel,
  qg as SidebarHeader,
  Gg as SidebarInput,
  Wg as SidebarInset,
  Yg as SidebarMenu,
  Jg as SidebarMenuAction,
  Xg as SidebarMenuBadge,
  eb as SidebarMenuButton,
  tb as SidebarMenuItem,
  ab as SidebarMenuSkeleton,
  nb as SidebarMenuSub,
  ob as SidebarMenuSubButton,
  lb as SidebarMenuSubItem,
  sb as SidebarProvider,
  rb as SidebarRail,
  ib as SidebarSeparator,
  db as SidebarTrigger,
  Dt as Sparkline,
  Jb as Spinner,
  M1 as StatCard,
  z1 as StatStrip,
  zs as Switch,
  O1 as TablePagination,
  L1 as TableShell,
  j1 as TableTabs,
  V1 as TableToolbar,
  h1 as ThemeToggle,
  gs as Tooltip,
  bs as TooltipContent,
  Qg as TooltipProvider,
  xs as TooltipTrigger,
  Mf as TrendBadge,
  E1 as UnsavedBar,
  Xl as alertVariants,
  sl as appearanceVars,
  Je as applyAppearance,
  Mo as buttonClasses,
  q as cn,
  Xs as fieldControl,
  Z1 as hasBadgeValue,
  i1 as hasFieldControl,
  p1 as hasOptionPreview,
  xe as iconPath,
  Cg as initializeAppearance,
  Ye as isDark,
  Ms as navigationMenuTriggerStyle,
  Sd as optionPreview,
  it as readAppearance,
  hv as registerBuiltInFieldControls,
  he as registerFieldControl,
  Ze as registerOptionPreview,
  d1 as registeredFieldTypes,
  Bd as registeredOptionPreviews,
  u1 as resetFieldControls,
  m1 as resetOptionPreviews,
  Mg as setAppearancePersister,
  ks as sidebarMenuButtonVariants,
  jg as toUrl,
  At as useAppearance,
  H1 as useColumnVisibility,
  U1 as useLiveUpdates,
  $v as usePointer,
  Ft as useReveal,
  q1 as useSchemaColumns,
  kh as useScrollProgress,
  Re as useSidebar,
  K1 as useTenantTheme,
  I1 as useUnsavedChanges,
  X1 as version
};
//# sourceMappingURL=index.js.map
