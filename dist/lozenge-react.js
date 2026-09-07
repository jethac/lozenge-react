import { jsx as t, jsxs as v, Fragment as y } from "react/jsx-runtime";
import { useState as G, useEffect as C, useCallback as P, useMemo as V, useContext as M, createContext as w, forwardRef as i, createElement as S, Children as O, Fragment as W, useRef as B, useImperativeHandle as L, useId as T, cloneElement as _ } from "react";
function c(...s) {
  return s.filter(Boolean).join(" ");
}
const I = {
  scheme: "auto",
  contrast: 0,
  accentHue: 260.48,
  accentChroma: 1,
  glass: 1
};
function j(s, e = document.documentElement) {
  const n = { ...I, ...s };
  n.scheme === "auto" ? e.removeAttribute("data-theme") : e.setAttribute("data-theme", n.scheme), e.style.setProperty("--lz-contrast", String(n.contrast)), e.style.setProperty("--lz-accent-hue", String(n.accentHue)), e.style.setProperty("--lz-accent-chroma", String(n.accentChroma)), e.style.setProperty("--lz-glass", String(n.glass));
}
const D = w(null);
function ae({
  defaultTheme: s,
  root: e,
  children: n
}) {
  const [a, r] = G({
    ...I,
    ...s
  });
  C(() => {
    j(a, e ?? document.documentElement);
  }, [a, e]);
  const o = P(
    (u) => r((N) => ({ ...N, ...u })),
    []
  ), l = P(
    () => r({ ...I }),
    []
  ), d = V(
    () => ({ theme: a, setTheme: o, resetTheme: l }),
    [a, o, l]
  );
  return /* @__PURE__ */ t(D.Provider, { value: d, children: n });
}
function ne() {
  const s = M(D);
  if (!s)
    throw new Error("useLozengeTheme must be used inside <LozengeThemeProvider>");
  return s;
}
const te = i(
  function({ as: e = "div", className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      e,
      {
        ref: r,
        className: c("accordion", n),
        ...a
      }
    );
  }
), re = i(
  function({ header: e, className: n, children: a, ...r }, o) {
    return /* @__PURE__ */ v(
      "details",
      {
        ref: o,
        className: c("accordion-panel", n),
        ...r,
        children: [
          /* @__PURE__ */ t("summary", { className: "accordion-header", children: e }),
          /* @__PURE__ */ t("div", { className: "accordion-body", children: a })
        ]
      }
    );
  }
), se = i(function({ size: e, presence: n, square: a, src: r, alt: o, className: l, children: d, ...u }, N) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: N,
      className: c(
        "avatar",
        `avatar-${e}`,
        n && `avatar-${n}`,
        a && "avatar-square",
        l
      ),
      ...u,
      children: r !== void 0 ? /* @__PURE__ */ t("img", { src: r, alt: o }) : d
    }
  );
}), oe = i(
  function({ label: e, className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "span",
      {
        ref: r,
        role: e ? "group" : void 0,
        "aria-label": e,
        className: c("avatar-group", n),
        ...a
      }
    );
  }
), U = i(
  function({ status: e, bold: n, className: a, children: r, ...o }, l) {
    return /* @__PURE__ */ t(
      "span",
      {
        ref: l,
        className: c(
          "lozenge",
          `lozenge-${e}`,
          n && "lozenge-bold",
          a
        ),
        ...o,
        children: r
      }
    );
  }
), ie = i(function({ className: e, ...n }, a) {
  return /* @__PURE__ */ t("div", { ref: a, className: c("backlog", e), ...n });
}), ce = i(
  function({ name: e, headingLevel: n = 3, dates: a, actions: r, as: o = "div", className: l, children: d, ...u }, N) {
    return S(
      o,
      { ref: N, className: c("sprint-header", l), ...u },
      S(`h${n}`, { className: "sprint-name" }, e),
      a != null && /* @__PURE__ */ t("span", { className: "sprint-dates", children: a }),
      d,
      r != null && /* @__PURE__ */ t("div", { className: "sprint-actions", children: r })
    );
  }
), le = i(
  function({
    type: e = "story",
    typeLabel: n,
    issueKey: a,
    status: r,
    statusLabel: o,
    points: l,
    assignee: d,
    assigneeLabel: u,
    className: N,
    children: m,
    ...p
  }, h) {
    return /* @__PURE__ */ v("div", { ref: h, className: c("backlog-item", N), ...p, children: [
      /* @__PURE__ */ t(
        "span",
        {
          className: `issue-type issue-type-${e}`,
          role: "img",
          "aria-label": n ?? e
        }
      ),
      /* @__PURE__ */ t("span", { className: "issue-key", children: a }),
      /* @__PURE__ */ t("span", { className: "backlog-summary", children: m }),
      r !== void 0 && /* @__PURE__ */ t(U, { status: r, children: o ?? r }),
      l !== void 0 && /* @__PURE__ */ t("span", { className: "badge", "aria-label": `${l} story points`, children: l }),
      d != null && /* @__PURE__ */ t("span", { className: "avatar avatar-sm", "aria-label": u, children: d })
    ] });
  }
), de = i(function({ tone: e, className: n, ...a }, r) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: r,
      className: c("badge", e && `badge-${e}`, n),
      ...a
    }
  );
}), me = i(function({ className: e, ...n }, a) {
  return /* @__PURE__ */ t("div", { ref: a, className: c("board", e), ...n });
}), ue = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("board-column", e), ...n });
  }
), Ne = i(
  function({ count: e, className: n, children: a, ...r }, o) {
    return /* @__PURE__ */ v("div", { ref: o, className: c("board-column-header", n), ...r, children: [
      a,
      e != null && /* @__PURE__ */ t("span", { className: "badge", children: e })
    ] });
  }
), ve = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("board-column-cards", e), ...n });
  }
), pe = i(
  function({ fixed: e, className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "nav",
      {
        ref: r,
        className: c("bottom-nav", e && "bottom-nav-fixed", n),
        ...a
      }
    );
  }
), he = i(
  function({ icon: e, label: n, active: a, className: r, "aria-current": o, ...l }, d) {
    return /* @__PURE__ */ v(
      "a",
      {
        ref: d,
        "aria-current": o ?? (a ? "page" : void 0),
        className: c("bottom-nav-item", a && "active", r),
        ...l,
        children: [
          /* @__PURE__ */ t("span", { className: "bottom-nav-icon", children: e }),
          n != null && /* @__PURE__ */ t("span", { className: "bottom-nav-label", children: n })
        ]
      }
    );
  }
);
function A(s, e) {
  return c(
    "btn",
    s.appearance && `btn-${s.appearance}`,
    s.compact && "btn-compact",
    s.icon && "btn-icon",
    s.block && "btn-block",
    s.pill && "btn-pill",
    s.active && "active",
    e
  );
}
const H = i(
  function({ appearance: e, compact: n, icon: a, block: r, pill: o, active: l, className: d, type: u = "button", ...N }, m) {
    return /* @__PURE__ */ t(
      "button",
      {
        ref: m,
        type: u,
        className: A({ appearance: e, compact: n, icon: a, block: r, pill: o, active: l }, d),
        ...N
      }
    );
  }
), be = i(
  function({ appearance: e, compact: n, icon: a, block: r, pill: o, active: l, className: d, ...u }, N) {
    return /* @__PURE__ */ t(
      "a",
      {
        ref: N,
        className: A({ appearance: e, compact: n, icon: a, block: r, pill: o, active: l }, d),
        ...u
      }
    );
  }
), fe = i(
  function({ label: e, className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        role: e ? "group" : void 0,
        "aria-label": e,
        className: c("btn-group", n),
        ...a
      }
    );
  }
), q = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], ge = i(
  function({
    title: e,
    headingLevel: n = 3,
    onPrevMonth: a,
    onNextMonth: r,
    prevMonthLabel: o = "Previous month",
    nextMonthLabel: l = "Next month",
    weekdays: d = q,
    className: u,
    children: N,
    ...m
  }, p) {
    return /* @__PURE__ */ v("div", { ref: p, className: c("calendar", u), ...m, children: [
      /* @__PURE__ */ v("div", { className: "calendar-header", children: [
        S(
          `h${n}`,
          { className: "calendar-title" },
          e
        ),
        a && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-compact",
            "aria-label": o,
            onClick: a,
            children: /* @__PURE__ */ t("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ t("path", { d: "M10 3L5 8l5 5", fill: "none", stroke: "currentColor", strokeWidth: "2" }) })
          }
        ),
        r && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-compact",
            "aria-label": l,
            onClick: r,
            children: /* @__PURE__ */ t("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ t("path", { d: "M6 3l5 5-5 5", fill: "none", stroke: "currentColor", strokeWidth: "2" }) })
          }
        )
      ] }),
      /* @__PURE__ */ v("div", { className: "calendar-grid", children: [
        d.map((h, b) => /* @__PURE__ */ t("span", { className: "calendar-weekday", children: h }, b)),
        N
      ] })
    ] });
  }
), Te = i(
  function({
    today: e,
    selected: n,
    outside: a,
    inRange: r,
    rangeStart: o,
    rangeEnd: l,
    className: d,
    type: u = "button",
    ...N
  }, m) {
    return /* @__PURE__ */ t(
      "button",
      {
        ref: m,
        type: u,
        "aria-current": e ? "date" : void 0,
        "aria-pressed": n || void 0,
        className: c(
          "calendar-day",
          e && "today",
          n && "selected",
          a && "outside",
          r && "in-range",
          o && "range-start",
          l && "range-end",
          d
        ),
        ...N
      }
    );
  }
), ke = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("card", e), ...n });
  }
), ye = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("card-header", e), ...n });
  }
), Ce = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("card-body", e), ...n });
  }
), Se = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("card-footer", e), ...n });
  }
), K = i(
  function({ type: e, label: n, className: a, ...r }, o) {
    return /* @__PURE__ */ t(
      "span",
      {
        ref: o,
        role: n ? "img" : void 0,
        "aria-label": n,
        "aria-hidden": n ? void 0 : !0,
        className: c("issue-type", `issue-type-${e}`, a),
        ...r
      }
    );
  }
), Ie = i(
  function({ type: e, typeLabel: n, issueKey: a, meta: r, className: o, children: l, ...d }, u) {
    const N = e !== void 0 || a !== void 0 || r !== void 0;
    return /* @__PURE__ */ v("div", { ref: u, className: c("issue-card", o), ...d, children: [
      /* @__PURE__ */ t("div", { className: "issue-card-summary", children: l }),
      N && /* @__PURE__ */ v("div", { className: "issue-card-meta", children: [
        e !== void 0 && /* @__PURE__ */ t(
          K,
          {
            type: e,
            label: n ?? e.charAt(0).toUpperCase() + e.slice(1)
          }
        ),
        a !== void 0 && /* @__PURE__ */ t("span", { className: "issue-key", children: a }),
        r
      ] })
    ] });
  }
), Me = i(
  function({ label: e, hero: n, className: a, ...r }, o) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: o,
        "aria-label": e,
        className: c("carousel", n && "carousel-hero", a),
        ...r
      }
    );
  }
), we = i(
  function({ wide: e, caption: n, className: a, children: r, ...o }, l) {
    return /* @__PURE__ */ v(
      "div",
      {
        ref: l,
        className: c("carousel-item", e && "carousel-item-wide", a),
        ...o,
        children: [
          r,
          n !== void 0 && /* @__PURE__ */ t("div", { className: "carousel-item-caption", children: n })
        ]
      }
    );
  }
), Be = i(function({ removeLabel: e, onRemove: n, className: a, children: r, ...o }, l) {
  return /* @__PURE__ */ v("span", { ref: l, className: c("chip", a), ...o, children: [
    r,
    e !== void 0 && /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: "chip-remove",
        "aria-label": e,
        onClick: n,
        children: "×"
      }
    )
  ] });
});
function $(s, e) {
  return function({
    name: a,
    value: r,
    checked: o,
    defaultChecked: l,
    onChange: d,
    disabled: u,
    className: N,
    children: m,
    ...p
  }, h) {
    return /* @__PURE__ */ v("label", { ref: h, className: c("chip", s, N), ...p, children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: e,
          name: a,
          value: r,
          checked: o,
          defaultChecked: l,
          onChange: d,
          disabled: u
        }
      ),
      /* @__PURE__ */ t("span", { children: m })
    ] });
  };
}
const Y = i(
  $("chip-choice", "radio")
);
Y.displayName = "ChoiceChip";
const Z = i(
  $("chip-filter", "checkbox")
);
Z.displayName = "FilterChip";
const Le = i(
  function({ as: e = "div", className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      e,
      {
        ref: r,
        className: c("comment-thread", n),
        ...a
      }
    );
  }
), Fe = i(function({ as: e = "div", avatar: n, author: a, time: r, actions: o, replies: l, className: d, children: u, ...N }, m) {
  return /* @__PURE__ */ v(
    e,
    {
      ref: m,
      className: c("comment", d),
      ...N,
      children: [
        n !== void 0 && /* @__PURE__ */ t("div", { className: "comment-avatar", children: n }),
        /* @__PURE__ */ v("div", { className: "comment-content", children: [
          (a !== void 0 || r !== void 0) && /* @__PURE__ */ v("div", { className: "comment-meta", children: [
            a !== void 0 && /* @__PURE__ */ t("span", { className: "comment-author", children: a }),
            r !== void 0 && /* @__PURE__ */ t("span", { className: "comment-time", children: r })
          ] }),
          /* @__PURE__ */ t("div", { className: "comment-body", children: u }),
          o !== void 0 && /* @__PURE__ */ t("div", { className: "comment-actions", children: o }),
          l !== void 0 && /* @__PURE__ */ t("div", { className: "comment-replies", children: l })
        ] })
      ]
    }
  );
}), Pe = i(
  function({ as: e = "div", avatar: n, label: a, placeholder: r, textareaProps: o, className: l, children: d, ...u }, N) {
    return /* @__PURE__ */ v(
      e,
      {
        ref: N,
        className: c("comment-editor", l),
        ...u,
        children: [
          n,
          /* @__PURE__ */ t(
            "textarea",
            {
              className: "form-control",
              "aria-label": a,
              placeholder: r,
              ...o
            }
          ),
          d
        ]
      }
    );
  }
), He = i(
  function({
    fixed: e,
    actions: n,
    onDismiss: a,
    dismissLabel: r = "Dismiss",
    role: o = "region",
    className: l,
    children: d,
    ...u
  }, N) {
    return /* @__PURE__ */ v(
      "div",
      {
        ref: N,
        role: o,
        className: c("consent", e && "consent-fixed", l),
        ...u,
        children: [
          /* @__PURE__ */ t("div", { className: "consent-body", children: d }),
          /* @__PURE__ */ t("div", { className: "consent-actions", children: n }),
          a !== void 0 && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: "consent-dismiss",
              "aria-label": r,
              onClick: a,
              children: "×"
            }
          )
        ]
      }
    );
  }
), De = i(
  function({ compact: e, invalid: n, className: a, type: r = "date", ...o }, l) {
    return /* @__PURE__ */ t(
      "input",
      {
        ref: l,
        type: r,
        "aria-invalid": n || void 0,
        className: c(
          "form-control",
          "date-field",
          e && "form-control-compact",
          n && "is-invalid",
          a
        ),
        ...o
      }
    );
  }
), Ae = i(
  function({ label: e, className: n, children: a, ...r }, o) {
    const l = O.toArray(a);
    return /* @__PURE__ */ t(
      "div",
      {
        ref: o,
        role: e ? "group" : void 0,
        "aria-label": e,
        className: c("date-range", n),
        ...r,
        children: l.map((d, u) => /* @__PURE__ */ v(W, { children: [
          u > 0 && /* @__PURE__ */ t("span", { className: "date-range-separator", "aria-hidden": "true", children: "–" }),
          d
        ] }, u))
      }
    );
  }
), $e = i(function({
  start: e,
  wide: n,
  title: a,
  closeLabel: r = "Close drawer",
  open: o,
  onClose: l,
  footer: d,
  id: u,
  className: N,
  children: m,
  ...p
}, h) {
  const b = B(null);
  L(h, () => b.current);
  const g = T(), f = u ?? g, F = `${f}-title`;
  return C(() => {
    const k = b.current;
    !k || o === void 0 || (o && !k.open ? k.showModal() : !o && k.open && k.close());
  }, [o]), /* @__PURE__ */ v(
    "dialog",
    {
      ref: b,
      id: f,
      onClose: l,
      "aria-labelledby": a !== void 0 ? F : void 0,
      className: c("drawer", e && "drawer-start", n && "drawer-wide", N),
      ...p,
      children: [
        a !== void 0 && /* @__PURE__ */ v("div", { className: "drawer-header", children: [
          /* @__PURE__ */ t("h4", { className: "drawer-title", id: F, children: a }),
          /* @__PURE__ */ t(J, { dialogId: f, "aria-label": r })
        ] }),
        /* @__PURE__ */ t("div", { className: "drawer-body", children: m }),
        d !== void 0 && /* @__PURE__ */ t("form", { method: "dialog", className: "drawer-footer", children: d })
      ]
    }
  );
}), xe = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("drawer-header", e), ...n });
  }
), Ee = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("drawer-body", e), ...n });
  }
), Re = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("form", { ref: a, method: "dialog", className: c("drawer-footer", e), ...n });
  }
), J = i(
  function({ dialogId: e, className: n, children: a, type: r = "button", ...o }, l) {
    const d = e !== void 0 ? { commandfor: e, command: "close" } : void 0;
    return /* @__PURE__ */ t(
      "button",
      {
        ref: l,
        type: r,
        className: c("btn", "btn-subtle", "btn-icon", "drawer-close", n),
        ...d,
        ...o,
        children: a ?? "×"
      }
    );
  }
), ze = i(
  function({ end: e, popover: n = "auto", className: a, ...r }, o) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: o,
        popover: n,
        className: c("dropdown-menu", e && "dropdown-menu-end", a),
        ...r
      }
    );
  }
);
function x(s, e) {
  return c(
    "dropdown-item",
    s.selected && "selected",
    s.danger && "danger",
    e
  );
}
const Ge = i(
  function({ selected: e, danger: n, description: a, className: r, children: o, type: l = "button", ...d }, u) {
    return /* @__PURE__ */ v(
      "button",
      {
        ref: u,
        type: l,
        className: x({ selected: e, danger: n }, r),
        ...d,
        children: [
          o,
          a !== void 0 && /* @__PURE__ */ t("span", { className: "dropdown-item-description", children: a })
        ]
      }
    );
  }
), Ve = i(
  function({ selected: e, danger: n, description: a, className: r, children: o, ...l }, d) {
    return /* @__PURE__ */ v(
      "a",
      {
        ref: d,
        className: x({ selected: e, danger: n }, r),
        ...l,
        children: [
          o,
          a !== void 0 && /* @__PURE__ */ t("span", { className: "dropdown-item-description", children: a })
        ]
      }
    );
  }
), Oe = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("dropdown-heading", e), ...n });
  }
), We = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("dropdown-divider", e), ...n });
  }
), _e = i(
  function({ title: e, headingLevel: n = 3, media: a, glyph: r, actions: o, className: l, children: d, ...u }, N) {
    const m = `h${n}`, p = a ?? (r !== void 0 ? /* @__PURE__ */ t("span", { "aria-hidden": "true", children: r }) : void 0);
    return /* @__PURE__ */ v("div", { ref: N, className: c("empty-state", l), ...u, children: [
      p !== void 0 && /* @__PURE__ */ t("div", { className: "empty-state-media", children: p }),
      /* @__PURE__ */ t(m, { className: "empty-state-title", children: e }),
      d != null && /* @__PURE__ */ t("p", { className: "empty-state-description", children: d }),
      o !== void 0 && /* @__PURE__ */ t("div", { className: "empty-state-actions", children: o })
    ] });
  }
), je = i(function({ small: e, extended: n, fixed: a, className: r, type: o = "button", ...l }, d) {
  return /* @__PURE__ */ t(
    "button",
    {
      ref: d,
      type: o,
      className: c(
        "fab",
        e && "fab-small",
        n && "fab-extended",
        a && "fab-fixed",
        r
      ),
      ...l
    }
  );
}), Ue = i(
  function({ as: e = "div", className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      e,
      {
        ref: r,
        className: c("form-group", n),
        ...a
      }
    );
  }
), qe = i(
  function({ required: e, className: n, children: a, ...r }, o) {
    return /* @__PURE__ */ v("label", { ref: o, className: c("form-label", n), ...r, children: [
      a,
      e && /* @__PURE__ */ v(y, { children: [
        " ",
        /* @__PURE__ */ t("span", { className: "required", children: "*" })
      ] })
    ] });
  }
), Ke = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("form-text", e), ...n });
  }
), Ye = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("invalid-feedback", e), ...n });
  }
);
function E(s, e) {
  return c(
    "form-control",
    s.compact && "form-control-compact",
    s.subtle && "form-control-subtle",
    s.invalid && "is-invalid",
    e
  );
}
const Ze = i(
  function({ compact: e, subtle: n, invalid: a, className: r, type: o = "text", ...l }, d) {
    return /* @__PURE__ */ t(
      "input",
      {
        ref: d,
        type: o,
        "aria-invalid": a || void 0,
        className: E({ compact: e, subtle: n, invalid: a }, r),
        ...l
      }
    );
  }
), Je = i(
  function({ compact: e, subtle: n, invalid: a, className: r, ...o }, l) {
    return /* @__PURE__ */ t(
      "textarea",
      {
        ref: l,
        "aria-invalid": a || void 0,
        className: E({ compact: e, subtle: n, invalid: a }, r),
        ...o
      }
    );
  }
), Qe = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("select", { ref: a, className: c("form-select", e), ...n });
  }
), Xe = i(
  function({ type: e = "checkbox", id: n, label: a, className: r, ...o }, l) {
    return /* @__PURE__ */ v("div", { className: c("form-check", r), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: l,
          className: "form-check-input",
          type: e,
          id: n,
          ...o
        }
      ),
      a !== void 0 && /* @__PURE__ */ t("label", { htmlFor: n, children: a })
    ] });
  }
), ea = i(
  function({ lg: e, className: n, ...a }, r) {
    return /* @__PURE__ */ v("label", { className: c("toggle", e && "toggle-lg", n), children: [
      /* @__PURE__ */ t("input", { ref: r, type: "checkbox", ...a }),
      /* @__PURE__ */ t("span", { className: "toggle-slider" })
    ] });
  }
), aa = i(function({ value: e, fill: n, unknown: a, limit: r, className: o, style: l, children: d, ...u }, N) {
  return /* @__PURE__ */ v(
    "span",
    {
      ref: N,
      role: a ? "img" : "meter",
      "aria-valuenow": a || e === void 0 ? void 0 : Math.round(e * 100),
      style: a || e === void 0 ? l : { "--value": e, ...l },
      className: c(
        "gauge",
        n && `gauge-${n}`,
        a && "gauge-unknown",
        o
      ),
      ...u,
      children: [
        a ? /* @__PURE__ */ t("span", { className: "gauge-value", "aria-hidden": "true", children: d ?? "—" }) : /* @__PURE__ */ t("span", { className: "gauge-value", children: d }),
        !a && /* @__PURE__ */ t("span", { className: "gauge-track", children: /* @__PURE__ */ t("span", { className: "gauge-fill" }) }),
        !a && r !== void 0 && /* @__PURE__ */ t(
          "span",
          {
            className: "gauge-limit",
            style: { "--limit": r }
          }
        )
      ]
    }
  );
}), na = i(function({ as: e = "section", grid: n, className: a, ...r }, o) {
  return /* @__PURE__ */ t(
    e,
    {
      ref: o,
      className: c("hero", n && "hero-grid", a),
      ...r
    }
  );
}), ta = i(
  function({ as: e = "h1", className: n, ...a }, r) {
    return /* @__PURE__ */ t(e, { ref: r, className: c("hero-title", n), ...a });
  }
), ra = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("hero-accent", e), ...n });
  }
), sa = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("p", { ref: a, className: c("hero-lede", e), ...n });
  }
), oa = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("hero-actions", e), ...n });
  }
), ia = i(
  function({
    label: e,
    value: n,
    name: a,
    inputLabel: r,
    multiline: o,
    toggleId: l,
    saveLabel: d = "Save",
    cancelLabel: u = "Cancel",
    className: N,
    ...m
  }, p) {
    const h = T(), b = l ?? `inline-edit-${h}`;
    return /* @__PURE__ */ v("form", { ref: p, className: c("inline-edit", N), ...m, children: [
      /* @__PURE__ */ t("input", { type: "checkbox", id: b, "aria-label": e }),
      /* @__PURE__ */ t("label", { className: "inline-edit-view", htmlFor: b, children: n }),
      /* @__PURE__ */ v("div", { className: "inline-edit-editor", children: [
        o ? /* @__PURE__ */ t(
          "textarea",
          {
            className: "form-control",
            name: a,
            defaultValue: n,
            "aria-label": r
          }
        ) : /* @__PURE__ */ t(
          "input",
          {
            className: "form-control",
            type: "text",
            name: a,
            defaultValue: n,
            "aria-label": r
          }
        ),
        /* @__PURE__ */ t(H, { appearance: "primary", compact: !0, type: "submit", children: d }),
        /* @__PURE__ */ t(H, { appearance: "subtle", compact: !0, type: "reset", children: u })
      ] })
    ] });
  }
), ca = i(function({ as: e = "ul", divided: n, compact: a, className: r, ...o }, l) {
  return /* @__PURE__ */ t(
    e,
    {
      ref: l,
      className: c(
        "list",
        n && "list-divided",
        a && "list-compact",
        r
      ),
      ...o
    }
  );
}), la = i(
  function({ selected: e, className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "li",
      {
        ref: r,
        className: c("list-item", e && "selected", n),
        ...a
      }
    );
  }
), da = i(
  function({ selected: e, className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "a",
      {
        ref: r,
        className: c("list-item", e && "selected", n),
        ...a
      }
    );
  }
), ma = i(
  function({ selected: e, className: n, type: a = "button", ...r }, o) {
    return /* @__PURE__ */ t(
      "button",
      {
        ref: o,
        type: a,
        className: c("list-item", e && "selected", n),
        ...r
      }
    );
  }
), ua = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("list-item-leading", e), ...n });
  }
), Na = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("list-item-content", e), ...n });
  }
), va = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("list-item-title", e), ...n });
  }
), pa = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("list-item-subtitle", e), ...n });
  }
), ha = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("list-item-trailing", e), ...n });
  }
), ba = i(
  function({ invalid: e, className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "select",
      {
        ref: r,
        "aria-invalid": e || void 0,
        className: c("form-select", "select", e && "is-invalid", n),
        ...a
      }
    );
  }
), fa = i(
  function({ label: e, className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "ul",
      {
        ref: r,
        role: "listbox",
        "aria-label": e,
        className: c("listbox", n),
        ...a
      }
    );
  }
), ga = i(
  function({ selected: e = !1, disabled: n, className: a, ...r }, o) {
    return /* @__PURE__ */ t(
      "li",
      {
        ref: o,
        role: "option",
        "aria-selected": e,
        "aria-disabled": n || void 0,
        className: c(
          "listbox-option",
          e && "selected",
          n && "disabled",
          a
        ),
        ...r
      }
    );
  }
), Ta = i(
  function({ id: e, label: n, className: a, popover: r = "", ...o }, l) {
    return /* @__PURE__ */ t(
      "nav",
      {
        ref: l,
        id: e,
        popover: r,
        "aria-label": n,
        className: c("mega-menu", a),
        ...o
      }
    );
  }
), ka = i(function({ menuId: e, className: n, type: a = "button", ...r }, o) {
  return /* @__PURE__ */ t(
    "button",
    {
      ref: o,
      type: a,
      popoverTarget: e,
      className: c("nav-link", n),
      ...r
    }
  );
}), ya = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("mega-menu-group", e), ...n });
  }
), Ca = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("mega-menu-heading", e), ...n });
  }
), Sa = i(
  function({ description: e, className: n, children: a, ...r }, o) {
    return /* @__PURE__ */ v("a", { ref: o, className: c("mega-menu-item", n), ...r, children: [
      /* @__PURE__ */ t("span", { className: "mega-menu-item-title", children: a }),
      e != null && /* @__PURE__ */ t("span", { className: "mega-menu-item-description", children: e })
    ] });
  }
), Ia = i(function({ label: e, className: n, ...a }, r) {
  return /* @__PURE__ */ t(
    "nav",
    {
      ref: r,
      "aria-label": e,
      className: c("menubar", n),
      ...a
    }
  );
}), Ma = i(function({ menuId: e, className: n, type: a = "button", ...r }, o) {
  return /* @__PURE__ */ t(
    "button",
    {
      ref: o,
      type: a,
      popoverTarget: e,
      className: c("menubar-trigger", n),
      ...r
    }
  );
}), wa = i(
  function({ id: e, submenu: n, className: a, popover: r = "", ...o }, l) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: l,
        id: e,
        popover: r,
        className: c("dropdown-menu", n && "menubar-submenu", a),
        ...o
      }
    );
  }
), Ba = i(
  function({
    dismisses: e,
    opens: n,
    kbd: a,
    selected: r,
    disabled: o,
    className: l,
    children: d,
    type: u = "button",
    ...N
  }, m) {
    return /* @__PURE__ */ v(
      "button",
      {
        ref: m,
        type: u,
        popoverTarget: n ?? e,
        popoverTargetAction: n ? void 0 : e ? "hide" : void 0,
        disabled: o,
        className: c(
          "dropdown-item",
          n && "menubar-subtrigger",
          r && "selected",
          o && "disabled",
          l
        ),
        ...N,
        children: [
          d,
          a != null && /* @__PURE__ */ t("span", { className: "menubar-kbd", children: a })
        ]
      }
    );
  }
), La = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("dropdown-divider", e), ...n });
  }
), Fa = i(
  function({ tone: e, title: n, actions: a, className: r, children: o, ...l }, d) {
    return /* @__PURE__ */ v(
      "div",
      {
        ref: d,
        className: c("message", e && `message-${e}`, r),
        ...l,
        children: [
          n !== void 0 && /* @__PURE__ */ t("div", { className: "message-title", children: n }),
          o,
          a !== void 0 && /* @__PURE__ */ t("div", { className: "message-actions", children: a })
        ]
      }
    );
  }
), Pa = i(
  function({ tone: e, className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        className: c("banner", e && `banner-${e}`, n),
        ...a
      }
    );
  }
), Ha = i(
  function({
    tone: e,
    fixed: n,
    title: a,
    icon: r,
    actions: o,
    onDismiss: l,
    dismissLabel: d = "Dismiss",
    className: u,
    children: N,
    ...m
  }, p) {
    return /* @__PURE__ */ v(
      "div",
      {
        ref: p,
        className: c("flag", e && `flag-${e}`, n && "flag-fixed", u),
        ...m,
        children: [
          r !== void 0 && /* @__PURE__ */ t("div", { className: "flag-icon", children: r }),
          /* @__PURE__ */ v("div", { className: "flag-content", children: [
            /* @__PURE__ */ t("div", { className: "flag-title", children: a }),
            N != null && /* @__PURE__ */ t("div", { className: "flag-description", children: N }),
            o !== void 0 && /* @__PURE__ */ t("div", { className: "flag-actions", children: o })
          ] }),
          l !== void 0 && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: "flag-dismiss",
              "aria-label": d,
              onClick: l,
              children: "×"
            }
          )
        ]
      }
    );
  }
), Da = i(function({ size: e = "medium", danger: n, title: a, open: r, onClose: o, footer: l, className: d, children: u, ...N }, m) {
  const p = B(null);
  return L(m, () => p.current), C(() => {
    const h = p.current;
    !h || r === void 0 || (r && !h.open ? h.showModal() : !r && h.open && h.close());
  }, [r]), /* @__PURE__ */ v(
    "dialog",
    {
      ref: p,
      onClose: o,
      className: c("modal", `modal-${e}`, n && "modal-danger", d),
      ...N,
      children: [
        a !== void 0 && /* @__PURE__ */ t("div", { className: "modal-header", children: /* @__PURE__ */ t("h4", { className: "modal-title", children: a }) }),
        /* @__PURE__ */ t("div", { className: "modal-body", children: u }),
        l !== void 0 && /* @__PURE__ */ t("form", { method: "dialog", className: "modal-footer", children: l })
      ]
    }
  );
}), Aa = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("modal-header", e), ...n });
  }
), $a = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("modal-body", e), ...n });
  }
), xa = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("form", { ref: a, method: "dialog", className: c("modal-footer", e), ...n });
  }
), Ea = i(function({ primary: e, className: n, ...a }, r) {
  return /* @__PURE__ */ t(
    "nav",
    {
      ref: r,
      className: c("navbar", e && "navbar-primary", n),
      ...a
    }
  );
}), Ra = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("a", { ref: a, className: c("navbar-brand", e), ...n });
  }
), za = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("ul", { ref: a, className: c("navbar-nav", e), ...n });
  }
), Ga = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("navbar-actions", e), ...n });
  }
), Va = i(
  function({ active: e, className: n, "aria-current": a, ...r }, o) {
    return /* @__PURE__ */ t(
      "a",
      {
        ref: o,
        "aria-current": a ?? (e ? "page" : void 0),
        className: c("nav-link", e && "active", n),
        ...r
      }
    );
  }
), Oa = i(
  function({ label: e = "Pagination", className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      "nav",
      {
        ref: r,
        "aria-label": e,
        className: c("pagination", n),
        ...a
      }
    );
  }
), Wa = i(
  function({ active: e, disabled: n, className: a, ...r }, o) {
    return /* @__PURE__ */ t(
      "a",
      {
        ref: o,
        "aria-current": e ? "page" : void 0,
        "aria-disabled": n ? "true" : void 0,
        className: c(
          "page-link",
          e && "active",
          n && "disabled",
          a
        ),
        ...r
      }
    );
  }
), _a = i(
  function({ className: e, children: n, ...a }, r) {
    return /* @__PURE__ */ t("span", { ref: r, className: c("page-ellipsis", e), ...a, children: n ?? "…" });
  }
), ja = i(function({ as: e = "article", tone: n, className: a, ...r }, o) {
  return /* @__PURE__ */ t(
    e,
    {
      ref: o,
      className: c("promo", n && `promo-${n}`, a),
      ...r
    }
  );
}), Ua = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("promo-media", e), ...n });
  }
), qa = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("promo-body", e), ...n });
  }
), Ka = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("promo-kicker", e), ...n });
  }
), Ya = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("promo-meta", e), ...n });
  }
), Za = i(
  function({ as: e = "div", className: n, ...a }, r) {
    return /* @__PURE__ */ t(
      e,
      {
        ref: r,
        className: c("promo-title", n),
        ...a
      }
    );
  }
), Ja = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("a", { ref: a, className: c("promo-cta", e), ...n });
  }
), Qa = i(function({ className: e, ...n }, a) {
  return /* @__PURE__ */ t("nav", { ref: a, className: c("rail", e), ...n });
}), Xa = i(
  function({ icon: e, label: n, active: a, className: r, "aria-current": o, ...l }, d) {
    return /* @__PURE__ */ v(
      "a",
      {
        ref: d,
        "aria-current": o ?? (a ? "page" : void 0),
        className: c("rail-item", a && "active", r),
        ...l,
        children: [
          /* @__PURE__ */ t("span", { className: "rail-icon", children: e }),
          n != null && /* @__PURE__ */ t("span", { className: "rail-label", children: n })
        ]
      }
    );
  }
), en = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("rail-fab", e), ...n });
  }
), an = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("rail-bottom", e), ...n });
  }
), nn = i(function({ value: e, size: n, status: a, label: r, className: o, style: l, children: d, ...u }, N) {
  return /* @__PURE__ */ v(
    "div",
    {
      ref: N,
      role: "progressbar",
      "aria-valuenow": Math.round(e * 100),
      style: { "--value": e, ...l },
      className: c(
        "ring",
        n && `ring-${n}`,
        a && `ring-${a}`,
        o
      ),
      ...u,
      children: [
        r !== void 0 && /* @__PURE__ */ t("span", { className: "ring-label", children: r }),
        d
      ]
    }
  );
}), tn = i(
  function({ shortcut: e, className: n, type: a = "search", ...r }, o) {
    return /* @__PURE__ */ v("div", { className: c("search-field", n), children: [
      /* @__PURE__ */ t("input", { ref: o, className: "form-control", type: a, ...r }),
      e !== void 0 && /* @__PURE__ */ t("kbd", { className: "search-kbd", children: e })
    ] });
  }
), R = w(null), rn = i(
  function({
    label: e,
    bold: n,
    compact: a,
    name: r,
    value: o,
    defaultValue: l,
    onValueChange: d,
    className: u,
    children: N,
    ...m
  }, p) {
    const h = T();
    return /* @__PURE__ */ t(
      "fieldset",
      {
        ref: p,
        "aria-label": e,
        className: c(
          "segmented",
          n && "segmented-bold",
          a && "segmented-compact",
          u
        ),
        ...m,
        children: /* @__PURE__ */ t(
          R.Provider,
          {
            value: { name: r ?? h, value: o, defaultValue: l, onValueChange: d },
            children: N
          }
        )
      }
    );
  }
), sn = i(function({ value: e, id: n, checked: a, defaultChecked: r, onChange: o, className: l, children: d, ...u }, N) {
  const m = M(R), p = T(), h = n ?? p, b = (m == null ? void 0 : m.value) !== void 0;
  return /* @__PURE__ */ v(y, { children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: N,
        type: "radio",
        id: h,
        name: m == null ? void 0 : m.name,
        value: e,
        checked: b ? m.value === e : a,
        defaultChecked: !b && r === void 0 ? (m == null ? void 0 : m.defaultValue) !== void 0 ? m.defaultValue === e : void 0 : r,
        onChange: (g) => {
          var f;
          o == null || o(g), (f = m == null ? void 0 : m.onValueChange) == null || f.call(m, e);
        },
        className: l,
        ...u
      }
    ),
    /* @__PURE__ */ t("label", { htmlFor: h, children: d })
  ] });
}), on = i(function({ tall: e, title: n, handle: a = !0, open: r, onClose: o, footer: l, className: d, children: u, ...N }, m) {
  const p = B(null);
  L(m, () => p.current);
  const h = T();
  return C(() => {
    const b = p.current;
    !b || r === void 0 || (r && !b.open ? b.showModal() : !r && b.open && b.close());
  }, [r]), /* @__PURE__ */ v(
    "dialog",
    {
      ref: p,
      onClose: o,
      "aria-labelledby": n !== void 0 ? h : void 0,
      className: c("sheet", e && "sheet-tall", d),
      ...N,
      children: [
        a && /* @__PURE__ */ t("div", { className: "sheet-handle" }),
        n !== void 0 && /* @__PURE__ */ t("div", { className: "sheet-header", children: /* @__PURE__ */ t("h4", { className: "sheet-title", id: h, children: n }) }),
        /* @__PURE__ */ t("div", { className: "sheet-body", children: u }),
        l !== void 0 && /* @__PURE__ */ t("form", { method: "dialog", className: "sheet-footer", children: l })
      ]
    }
  );
}), cn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("sheet-header", e), ...n });
  }
), ln = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("sheet-body", e), ...n });
  }
), dn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("form", { ref: a, method: "dialog", className: c("sheet-footer", e), ...n });
  }
), mn = i(function({ className: e, ...n }, a) {
  return /* @__PURE__ */ t("aside", { ref: a, className: c("sidebar", e), ...n });
}), un = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("sidebar-header", e), ...n });
  }
), Nn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("sidebar-title", e), ...n });
  }
), vn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("sidebar-subtitle", e), ...n });
  }
), pn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("sidebar-section", e), ...n });
  }
), hn = i(
  function({ active: e, className: n, "aria-current": a, ...r }, o) {
    return /* @__PURE__ */ t(
      "a",
      {
        ref: o,
        "aria-current": a ?? (e ? "page" : void 0),
        className: c("sidebar-item", e && "active", n),
        ...r
      }
    );
  }
), bn = i(
  function({ label: e, name: n = "sidebar", className: a, children: r, ...o }, l) {
    return /* @__PURE__ */ v(
      "details",
      {
        ref: l,
        name: n || void 0,
        className: c("sidebar-group", a),
        ...o,
        children: [
          /* @__PURE__ */ t("summary", { className: "sidebar-section", children: e }),
          r
        ]
      }
    );
  }
), Q = i(
  function({ shape: e, avatarSize: n, className: a, ...r }, o) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: o,
        "aria-hidden": "true",
        className: c(
          "skeleton",
          e && `skeleton-${e}`,
          n && `skeleton-avatar-${n}`,
          a
        ),
        ...r
      }
    );
  }
), fn = i(function({ lines: e = 3, className: n, children: a, ...r }, o) {
  return /* @__PURE__ */ t("div", { ref: o, className: c("skeleton-paragraph", n), ...r, children: a ?? Array.from({ length: e }, (l, d) => /* @__PURE__ */ t(Q, { shape: "text" }, d)) });
}), gn = i(
  function({ compact: e, thin: n, className: a, ...r }, o) {
    return /* @__PURE__ */ t(
      "input",
      {
        ref: o,
        type: "range",
        className: c(
          "slider",
          e && "slider-compact",
          n && "slider-thin",
          a
        ),
        ...r
      }
    );
  }
), Tn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("range-slider", e), ...n });
  }
), kn = i(
  function({ fixed: e, role: n = "status", action: a, className: r, children: o, ...l }, d) {
    return /* @__PURE__ */ v(
      "div",
      {
        ref: d,
        role: n,
        className: c("snackbar", e && "snackbar-fixed", r),
        ...l,
        children: [
          /* @__PURE__ */ t("span", { className: "snackbar-message", children: o }),
          a
        ]
      }
    );
  }
), yn = i(function({ className: e, type: n = "button", ...a }, r) {
  return /* @__PURE__ */ t(
    "button",
    {
      ref: r,
      type: n,
      className: c("snackbar-action", e),
      ...a
    }
  );
}), Cn = i(function({ as: e = "ol", className: n, ...a }, r) {
  return /* @__PURE__ */ t(
    e,
    {
      ref: r,
      className: c("stepper", n),
      ...a
    }
  );
}), Sn = i(
  function({
    as: e = "li",
    marker: n,
    title: a,
    optional: r,
    done: o,
    current: l,
    expanded: d,
    className: u,
    children: N,
    ...m
  }, p) {
    const h = c(
      "stepper-step",
      o && "done",
      l && "current",
      e === "li" && d && "expanded",
      u
    ), b = /* @__PURE__ */ v(y, { children: [
      /* @__PURE__ */ t("span", { className: "stepper-marker", children: n }),
      /* @__PURE__ */ v("span", { className: "stepper-title", children: [
        a,
        r != null && /* @__PURE__ */ t("span", { className: "stepper-optional", children: r })
      ] })
    ] }), g = N != null ? /* @__PURE__ */ t("div", { className: "stepper-content", children: N }) : null;
    return e === "details" ? /* @__PURE__ */ v(
      "details",
      {
        ref: p,
        className: h,
        open: d,
        "aria-current": l ? "step" : void 0,
        ...m,
        children: [
          /* @__PURE__ */ t("summary", { className: "stepper-header", children: b }),
          g
        ]
      }
    ) : /* @__PURE__ */ v(
      "li",
      {
        ref: p,
        className: h,
        "aria-current": l ? "step" : void 0,
        ...m,
        children: [
          /* @__PURE__ */ t("div", { className: "stepper-header", children: b }),
          g
        ]
      }
    );
  }
), In = i(function({ as: e = "ul", className: n, ...a }, r) {
  return /* @__PURE__ */ t(
    e,
    {
      ref: r,
      className: c("tabs", n),
      ...a
    }
  );
}), Mn = i(function({ active: e, disabled: n, itemProps: a, className: r, ...o }, l) {
  return /* @__PURE__ */ t("li", { ...a, children: /* @__PURE__ */ t(
    "a",
    {
      ref: l,
      "aria-disabled": n ? "true" : void 0,
      className: c(
        "tab",
        e && "active",
        n && "disabled",
        r
      ),
      ...o
    }
  ) });
}), z = w(null), wn = i(function({ name: e, value: n, defaultValue: a, onValueChange: r, className: o, children: l, ...d }, u) {
  const N = T();
  return /* @__PURE__ */ t("div", { ref: u, className: c("tabset", o), ...d, children: /* @__PURE__ */ t(
    z.Provider,
    {
      value: { name: e ?? N, value: n, defaultValue: a, onValueChange: r },
      children: l
    }
  ) });
}), Bn = i(
  function({ value: e, id: n, checked: a, defaultChecked: r, onChange: o, className: l, children: d, ...u }, N) {
    const m = M(z), p = T(), h = n ?? p, b = (m == null ? void 0 : m.value) !== void 0;
    return /* @__PURE__ */ v(y, { children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: N,
          type: "radio",
          id: h,
          name: m == null ? void 0 : m.name,
          value: e,
          checked: b ? m.value === e : a,
          defaultChecked: !b && r === void 0 ? (m == null ? void 0 : m.defaultValue) !== void 0 ? m.defaultValue === e : void 0 : r,
          onChange: (g) => {
            var f;
            o == null || o(g), (f = m == null ? void 0 : m.onValueChange) == null || f.call(m, e);
          },
          ...u
        }
      ),
      /* @__PURE__ */ t("label", { htmlFor: h, className: c("tab", l), children: d })
    ] });
  }
), Ln = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("tab-panes", e), ...n });
  }
), Fn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("tab-pane", e), ...n });
  }
), Pn = i(function({ rounded: e, href: n, removeLabel: a, onRemove: r, className: o, children: l, ...d }, u) {
  return /* @__PURE__ */ v(
    "span",
    {
      ref: u,
      className: c("tag", e && "tag-rounded", o),
      ...d,
      children: [
        n !== void 0 ? /* @__PURE__ */ t("a", { href: n, children: l }) : l,
        a !== void 0 && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: "tag-remove",
            "aria-label": a,
            onClick: r,
            children: "×"
          }
        )
      ]
    }
  );
}), Hn = i(
  function({ cols: e, className: n, style: a, ...r }, o) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: o,
        className: c("timeline", n),
        style: e !== void 0 ? { "--lz-timeline-cols": e, ...a } : a,
        ...r
      }
    );
  }
), Dn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("timeline-header", e), ...n });
  }
), An = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("timeline-row", e), ...n });
  }
), $n = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("div", { ref: a, className: c("timeline-label", e), ...n });
  }
), xn = i(
  function({ start: e, span: n, variant: a, className: r, style: o, ...l }, d) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: d,
        className: c(
          "timeline-bar",
          a && `timeline-bar-${a}`,
          r
        ),
        style: { "--start": e, "--span": n, ...o },
        ...l
      }
    );
  }
);
function En({ content: s, position: e, children: n }) {
  return _(n, {
    "data-tooltip": s,
    className: c(n.props.className, e && `tooltip-${e}`)
  });
}
const Rn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("ol", { ref: a, className: c("tracker", e), ...n });
  }
), zn = i(
  function({ marker: e, done: n, current: a, className: r, children: o, ...l }, d) {
    return /* @__PURE__ */ v(
      "li",
      {
        ref: d,
        "aria-current": a ? "step" : void 0,
        className: c(
          "tracker-step",
          n && "tracker-step-done",
          a && "tracker-step-current",
          r
        ),
        ...l,
        children: [
          /* @__PURE__ */ t("span", { className: "tracker-marker", children: e }),
          o != null && /* @__PURE__ */ t("span", { className: "tracker-label", children: o })
        ]
      }
    );
  }
), Gn = i(function({ railed: e, className: n, ...a }, r) {
  return /* @__PURE__ */ t(
    "ul",
    {
      ref: r,
      className: c("tree", e && "tree-railed", n),
      ...a
    }
  );
}), Vn = i(
  function({ label: e, selected: n, block: a, summaryProps: r, className: o, children: l, ...d }, u) {
    const { className: N, ...m } = r ?? {};
    return /* @__PURE__ */ t("li", { children: /* @__PURE__ */ v("details", { ref: u, className: o, ...d, children: [
      /* @__PURE__ */ t(
        "summary",
        {
          className: c(
            "tree-item",
            a && "tree-item-block",
            n && "selected",
            N
          ),
          ...m,
          children: a ? /* @__PURE__ */ t("span", { className: "tree-item-body", children: e }) : e
        }
      ),
      /* @__PURE__ */ t("ul", { children: l })
    ] }) });
  }
), On = i(
  function({ href: e, selected: n, block: a, className: r, ...o }, l) {
    const d = c(
      "tree-item",
      a && "tree-item-block",
      n && "selected",
      r
    );
    return /* @__PURE__ */ t("li", { children: e !== void 0 ? /* @__PURE__ */ t(
      "a",
      {
        ref: l,
        href: e,
        className: d,
        ...o
      }
    ) : /* @__PURE__ */ t(
      "span",
      {
        ref: l,
        className: d,
        ...o
      }
    ) });
  }
), Wn = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("tree-item-title", e), ...n });
  }
), _n = i(
  function({ className: e, ...n }, a) {
    return /* @__PURE__ */ t("span", { ref: a, className: c("tree-item-meta", e), ...n });
  }
);
export {
  te as Accordion,
  re as AccordionPanel,
  se as Avatar,
  oe as AvatarGroup,
  ie as Backlog,
  le as BacklogItem,
  de as Badge,
  Pa as Banner,
  me as Board,
  ue as BoardColumn,
  ve as BoardColumnCards,
  Ne as BoardColumnHeader,
  pe as BottomNav,
  he as BottomNavItem,
  H as Button,
  fe as ButtonGroup,
  ge as Calendar,
  Te as CalendarDay,
  ke as Card,
  Ce as CardBody,
  Se as CardFooter,
  ye as CardHeader,
  Me as Carousel,
  we as CarouselItem,
  Be as Chip,
  Y as ChoiceChip,
  Fe as Comment,
  Pe as CommentEditor,
  Le as CommentThread,
  He as Consent,
  De as DateField,
  Ae as DateRange,
  $e as Drawer,
  Ee as DrawerBody,
  J as DrawerClose,
  Re as DrawerFooter,
  xe as DrawerHeader,
  We as DropdownDivider,
  Oe as DropdownHeading,
  Ge as DropdownItem,
  Ve as DropdownLinkItem,
  ze as DropdownMenu,
  _e as EmptyState,
  je as Fab,
  Z as FilterChip,
  Ha as Flag,
  Xe as FormCheck,
  Ze as FormControl,
  Ue as FormGroup,
  qe as FormLabel,
  Qe as FormSelect,
  Ke as FormText,
  Je as FormTextArea,
  aa as Gauge,
  na as Hero,
  ra as HeroAccent,
  oa as HeroActions,
  sa as HeroLede,
  ta as HeroTitle,
  ia as InlineEdit,
  Ye as InvalidFeedback,
  Ie as IssueCard,
  K as IssueType,
  I as LOZENGE_THEME_DEFAULTS,
  be as LinkButton,
  ca as List,
  la as ListItem,
  ma as ListItemButton,
  Na as ListItemContent,
  ua as ListItemLeading,
  da as ListItemLink,
  pa as ListItemSubtitle,
  va as ListItemTitle,
  ha as ListItemTrailing,
  fa as Listbox,
  ga as ListboxOption,
  U as Lozenge,
  ae as LozengeThemeProvider,
  Ta as MegaMenu,
  ya as MegaMenuGroup,
  Ca as MegaMenuHeading,
  Sa as MegaMenuItem,
  ka as MegaMenuTrigger,
  Ia as Menubar,
  La as MenubarDivider,
  Ba as MenubarItem,
  wa as MenubarMenu,
  Ma as MenubarTrigger,
  Fa as Message,
  Da as Modal,
  $a as ModalBody,
  xa as ModalFooter,
  Aa as ModalHeader,
  Va as NavLink,
  Ea as Navbar,
  Ga as NavbarActions,
  Ra as NavbarBrand,
  za as NavbarNav,
  _a as PageEllipsis,
  Wa as PageLink,
  Oa as Pagination,
  ja as Promo,
  qa as PromoBody,
  Ja as PromoCta,
  Ka as PromoKicker,
  Ua as PromoMedia,
  Ya as PromoMeta,
  Za as PromoTitle,
  Qa as Rail,
  an as RailBottom,
  en as RailFab,
  Xa as RailItem,
  Tn as RangeSlider,
  nn as Ring,
  tn as SearchField,
  rn as Segmented,
  sn as SegmentedOption,
  ba as Select,
  on as Sheet,
  ln as SheetBody,
  dn as SheetFooter,
  cn as SheetHeader,
  mn as Sidebar,
  bn as SidebarGroup,
  un as SidebarHeader,
  hn as SidebarItem,
  pn as SidebarSection,
  vn as SidebarSubtitle,
  Nn as SidebarTitle,
  Q as Skeleton,
  fn as SkeletonParagraph,
  gn as Slider,
  kn as Snackbar,
  yn as SnackbarAction,
  ce as SprintHeader,
  Cn as Stepper,
  Sn as StepperStep,
  Mn as Tab,
  Fn as TabPane,
  Ln as TabPanes,
  In as Tabs,
  wn as Tabset,
  Bn as TabsetTab,
  Pn as Tag,
  Hn as Timeline,
  xn as TimelineBar,
  Dn as TimelineHeader,
  $n as TimelineLabel,
  An as TimelineRow,
  ea as Toggle,
  En as Tooltip,
  Rn as Tracker,
  zn as TrackerStep,
  Gn as Tree,
  Vn as TreeBranch,
  On as TreeItem,
  _n as TreeItemMeta,
  Wn as TreeItemTitle,
  j as applyLozengeTheme,
  c as cx,
  ne as useLozengeTheme
};
