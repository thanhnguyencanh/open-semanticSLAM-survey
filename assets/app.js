// Open-World Semantic SLAM survey page: counters, pillar tabs, 81-system explorer, cross-pillar scores, claims, open problems.
// Data from assets/data.js (generated from the manuscript by source/make_data.py). No dependencies.
(function () {
  "use strict";
  var D = window.OWS;
  if (!D) return;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, attrs, html) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var PILLARS = {
    P1: { name: "Representations", color: "#4b4fd1", fig: "representations", w: 1784, h: 618,
      text: "Differentiable scene representations: from iMAP's global MLP (2021) through hash grids, tri-planes and neural points to 3D Gaussian splatting, which brought dense SLAM to real time and made individual map elements directly editable, a structural prerequisite for lifelong operation.",
      cap: "Fig. 6: representation families ordered by edit-locality, and the shared rendering-based SLAM loop." },
    P2: { name: "Foundation models", color: "#1f8a83", fig: "foundation-models", w: 882, h: 729,
      text: "Vision–language foundation models (CLIP, DINO/DINOv2, SAM) embed arbitrary natural-language concepts into the map without retraining, and LLMs open an interface between the map and the task planner. Systems store a label, a feature, or prompt a model on demand.",
      cap: "Fig. 7: three ways to integrate foundation models: label-as-channel, feature-as-channel, and promptable on demand." },
    P3: { name: "Uncertainty", color: "#c8464a", fig: "uncertainty", w: 1788, h: 614,
      text: "Neural SLAM models geometric uncertainty (UncLe-SLAM, CG-SLAM, NeRF-SLAM); calibrated semantic posteriors come mostly from outside the SLAM loop, through Bayesian kernel inference (S-BKI, ConvBKI, E²-BKI) and evidential deep learning.",
      cap: "Fig. 8: where uncertainty is modeled, and the closed-form semantic updates of BKI and EDL." },
    P4: { name: "Lifelong adaptation", color: "#e48a2f", fig: "lifelong", w: 900, h: 541,
      text: "Submap-based neural SLAM brings loop closure and scale; 3D scene graphs give structure that can be diffed across visits. But dynamic-scene SLAM masks motion within one session, and no neural or Gaussian SLAM system yet maintains a map over a robot's lifetime.",
      cap: "Fig. 9: temporal scales of change, from moving objects to backbone drift, and which literature covers them." }
  };
  var SHORT = { P1: "P1 Repr.", P2: "P2 FM", P3: "P3 Unc.", P4: "P4 Life.", scene: "Scene understanding" };

  // ---- counters ----
  var opClaims = D.claims.filter(function (c) { return c.op !== "–"; }).length;
  [[D.systems.length, "systems surveyed"], [4, "pillars"], [D.scores.length, "systems scored"], [D.claims.length, "explicit claims"], [D.ops.length, "open problems"]].forEach(function (c) {
    $("#counters").appendChild(el("div", {}, "<dt>" + c[0] + "</dt><dd>" + esc(c[1]) + "</dd>"));
  });

  // ---- pillar tabs ----
  var tabs = $("#pillar-tabs"), panel = $("#pillar-panel");
  function showPillar(p) {
    tabs.querySelectorAll(".tab").forEach(function (t) { t.setAttribute("aria-selected", String(t.dataset.p === p)); });
    var P = PILLARS[p], n = D.systems.filter(function (s) { return s.pillar === p; }).length;
    var groups = D.groups.filter(function (g) { return g.pillar === p; }).map(function (g) { return esc(g.group) + " (" + g.n + ")"; }).join(" · ");
    panel.innerHTML = '<h3 style="color:' + P.color + '">' + p + " · " + esc(P.name) + '</h3><p>' + esc(P.text) + '</p><p class="muted">' + n + " systems: " + groups +
      ' · <a href="#explorer" data-go="' + p + '">see them ↓</a></p><figure class="figure"><img src="images/' + P.fig + '.jpg" alt="" width="' + P.w + '" height="' + P.h + '" loading="lazy"><figcaption>' + esc(P.cap) + "</figcaption></figure>";
    panel.querySelector("[data-go]").addEventListener("click", function () { state.pillar = p; state.group = ""; draw(); });
  }
  Object.keys(PILLARS).forEach(function (p) {
    var t = el("button", { type: "button", class: "tab", role: "tab", "data-p": p }, "<b>" + p + "</b> " + esc(PILLARS[p].name));
    t.style.setProperty("--pc", PILLARS[p].color);
    t.addEventListener("click", function () { showPillar(p); });
    tabs.appendChild(t);
  });
  showPillar("P1");

  // ---- explorer ----
  var state = { pillar: "", group: "", q: "", sort: "group", all: false };
  var ORDER = ["P1", "P2", "P3", "P4", "scene"];
  function chip(label, on, fn, color) {
    var b = el("button", { type: "button", class: "chip", "aria-pressed": String(on) }, label);
    if (color) b.style.setProperty("--pc", color);
    b.addEventListener("click", fn);
    return b;
  }
  var tip = el("div", { class: "tip", role: "tooltip", hidden: "" });
  document.body.appendChild(tip);
  function draw() {
    var pc = $("#pillar-chips"), gc = $("#group-chips");
    pc.innerHTML = ""; gc.innerHTML = "";
    pc.appendChild(chip("All pillars", !state.pillar, function () { state.pillar = ""; state.group = ""; draw(); }));
    ORDER.forEach(function (p) {
      var n = D.systems.filter(function (s) { return s.pillar === p; }).length;
      pc.appendChild(chip(esc(SHORT[p]) + " <i>" + n + "</i>", state.pillar === p, function () { state.pillar = state.pillar === p ? "" : p; state.group = ""; draw(); }, PILLARS[p] && PILLARS[p].color));
    });
    D.groups.filter(function (g) { return !state.pillar || g.pillar === state.pillar; }).forEach(function (g) {
      gc.appendChild(chip(esc(g.group) + " <i>" + g.n + "</i>", state.group === g.group, function () { state.group = state.group === g.group ? "" : g.group; draw(); }));
    });
    var q = state.q.toLowerCase();
    var list = D.systems.filter(function (s) {
      return (!state.pillar || s.pillar === state.pillar) && (!state.group || s.group === state.group) &&
        (!q || (s.name + " " + s.title + " " + s.group).toLowerCase().indexOf(q) >= 0);
    });
    list.sort(function (a, b) {
      if (state.sort === "year-desc") return (b.year || 0) - (a.year || 0) || a.name.localeCompare(b.name);
      if (state.sort === "year-asc") return (a.year || 0) - (b.year || 0) || a.name.localeCompare(b.name);
      if (state.sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });
    $("#count").textContent = list.length + " of " + D.systems.length + " systems";
    $("#empty").hidden = list.length > 0;
    var grid = $("#sys-grid"); grid.innerHTML = "";
    var filtered = state.pillar || state.group || state.q, limit = filtered || state.all ? list.length : 24;
    var more = $("#more"); more.hidden = list.length <= limit;
    more.textContent = "Show all " + list.length + " systems";
    list.slice(0, limit).forEach(function (s) {
      var color = (PILLARS[s.pillar] || {}).color || "#6b7a90";
      var card = el("button", { type: "button", class: "sys-card" },
        '<span class="sys-p" style="background:' + color + '">' + esc(s.pillar === "scene" ? "Scene" : s.pillar) + '</span><strong>' + esc(s.name) + "</strong><small>" + (s.year || "") + " · " + esc(s.group) + "</small>" +
        '<span class="sys-title">' + esc(s.title) + "</span>");
      card.addEventListener("click", function () {
        tip.innerHTML = "<strong>" + esc(s.name) + "</strong> [" + s.ref + "]<br>" + esc(s.cite); tip.hidden = false;
        var r = card.getBoundingClientRect();
        tip.style.left = Math.min(window.innerWidth - tip.offsetWidth - 12, Math.max(12, r.left)) + "px";
        tip.style.top = (r.bottom + 8 + tip.offsetHeight > window.innerHeight ? r.top - tip.offsetHeight - 8 : r.bottom + 8) + "px";
      });
      grid.appendChild(card);
    });
    // per-year strip of the current selection
    var years = {}; list.forEach(function (s) { if (s.year) years[s.year] = (years[s.year] || 0) + 1; });
    var ys = Object.keys(years).sort(), mx = Math.max.apply(null, ys.map(function (y) { return years[y]; }).concat([1]));
    $("#year-strip").innerHTML = ys.map(function (y) { return '<span title="' + years[y] + " in " + y + '"><i style="height:' + (8 + 46 * years[y] / mx).toFixed(0) + 'px"></i>' + y + "<b>" + years[y] + "</b></span>"; }).join("");
  }
  $("#more").addEventListener("click", function () { state.all = true; draw(); });
  $("#q").addEventListener("input", function (e) { state.q = e.target.value; draw(); });
  $("#sort").addEventListener("change", function (e) { state.sort = e.target.value; draw(); });
  document.addEventListener("click", function (e) { if (!e.target.closest(".sys-card")) tip.hidden = true; });
  window.addEventListener("scroll", function () { tip.hidden = true; }, { passive: true });
  document.addEventListener("keydown", function (e) { if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); $("#q").focus(); } });
  draw();

  // ---- cross-pillar scores (Fig. 10) ----
  var KEYS = ["P1", "P2", "P3", "P4"];
  function drawScores() {
    var mode = $("#score-sort").value, rows = D.scores.slice();
    var tot = function (r) { return r.scores.reduce(function (a, b) { return a + b; }, 0); };
    if (mode === "total") rows.sort(function (a, b) { return tot(b) - tot(a); });
    else if (mode !== "paper") { var k = KEYS.indexOf(mode); rows.sort(function (a, b) { return b.scores[k] - a.scores[k] || tot(b) - tot(a); }); }
    var head = '<div class="sc-row sc-head"><span></span>' + KEYS.map(function (p) { return '<span style="color:' + PILLARS[p].color + '">' + esc(SHORT[p]) + "</span>"; }).join("") + "<span>Σ / 12</span></div>";
    $("#score-chart").innerHTML = head + rows.map(function (r) {
      return '<div class="sc-row"><span class="sc-name">' + esc(r.name) + " <i>[" + r.ref + "]</i></span>" + r.scores.map(function (v, i) {
        var slots = ""; for (var j = 0; j < 3; j++) slots += '<b class="' + (j < v ? "on" : "") + (j === 1 ? " target" : "") + '" style="--pc:' + PILLARS[KEYS[i]].color + '"></b>';
        return '<span class="sc-cell" title="' + KEYS[i] + ": " + v + ' / 3">' + slots + "</span>";
      }).join("") + '<span class="sc-tot">' + tot(r) + "</span></div>";
    }).join("");
  }
  $("#score-sort").addEventListener("change", drawScores);
  drawScores();
  var best = Math.max.apply(null, D.scores.map(function (r) { return r.scores.reduce(function (a, b) { return a + b; }, 0); }));
  var withP34 = D.scores.filter(function (r) { return r.scores[2] > 0 || r.scores[3] > 0; }).length;
  var hitTarget = D.scores.filter(function (r) { return r.scores.every(function (v) { return v >= 2; }); }).length;
  var avg = KEYS.map(function (p, i) { return D.scores.reduce(function (a, r) { return a + r.scores[i]; }, 0) / D.scores.length; });
  [[best + " / 12", "best total of any scored system"], [withP34 + " of " + D.scores.length, "systems with any P3 or P4 score"], [String(hitTarget), "systems reaching ≥2 on every pillar"],
   [KEYS[avg.indexOf(Math.min.apply(null, avg))], "the most neglected pillar (lowest mean score)"]].forEach(function (f) {
    $("#score-facts").appendChild(el("div", { class: "trend" }, "<strong>" + esc(f[0]) + "</strong><span>" + esc(f[1]) + "</span>"));
  });

  // ---- claims (Table 6) ----
  var cp = "";
  function drawClaims() {
    var cc = $("#claim-chips"); cc.innerHTML = "";
    cc.appendChild(chip("All 17", !cp, function () { cp = ""; drawClaims(); }));
    KEYS.forEach(function (p) {
      var n = D.claims.filter(function (c) { return c.pillar.indexOf(p) === 0; }).length;
      cc.appendChild(chip(esc(SHORT[p]) + " <i>" + n + "</i>", cp === p, function () { cp = cp === p ? "" : p; drawClaims(); }, PILLARS[p].color));
    });
    $("#claim-list").innerHTML = D.claims.filter(function (c) { return !cp || c.pillar.indexOf(cp) === 0; }).map(function (c) {
      var p = c.pillar.slice(0, 2);
      return '<li style="--pc:' + PILLARS[p].color + '"><span class="cl-n">' + c.n + '</span><div><p class="cl-text">' + esc(c.claim) + '</p><p class="cl-meta"><span class="cl-p">' + esc(c.pillar) + "</span>" +
        (c.evidence !== "–" ? " · evidence: " + esc(c.evidence) : " · argued without a citation") + (c.op !== "–" ? ' · feeds <a href="#' + c.op + '">' + c.op + "</a>" : "") + "</p></div></li>";
    }).join("");
  }
  drawClaims();

  // ---- open problems ----
  $("#op-grid").innerHTML = D.ops.map(function (o) {
    var from = D.claims.filter(function (c) { return c.op === o.id; }).map(function (c) { return "claim " + c.n; });
    return '<article class="op" id="' + o.id + '"><p class="op-id">' + o.id + "</p><h3>" + esc(o.title) + "</h3><p>" + esc(o.task) + '</p><p class="op-success"><b>Success:</b> ' + esc(o.success) + "</p>" +
      '<p class="op-from">' + (from.length ? "From " + from.join(", ") : "Not derived from a single claim") + "</p></article>";
  }).join("");

  // ---- top bar highlight + copy ----
  var links = document.querySelectorAll(".toc a");
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id); }); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { so.observe(s); });
  }
  $("#copy-bib").addEventListener("click", function () {
    if (!navigator.clipboard) return;
    var b = this;
    navigator.clipboard.writeText($("#bibtex").textContent).then(function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1600); }, function () {});
  });
})();
