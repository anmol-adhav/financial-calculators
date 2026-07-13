/* CalculateMoney shared runtime */
(function () {
  "use strict";

  var CM = (window.CM = {});
  var charts = {};
  var recalcFn = null;

  /* ---------- formatting ---------- */
  CM.inr = function (n, dp) {
    if (!isFinite(n)) return "—";
    return "₹" + Number(n).toLocaleString("en-IN", {
      minimumFractionDigits: dp || 0,
      maximumFractionDigits: dp || 0
    });
  };
  CM.num = function (n, dp) {
    if (!isFinite(n)) return "—";
    return Number(n).toLocaleString("en-IN", { maximumFractionDigits: dp == null ? 1 : dp });
  };
  CM.compact = function (n) {
    if (!isFinite(n)) return "—";
    var neg = n < 0 ? "−" : "";
    var v = Math.abs(n);
    if (v >= 1e7) return neg + "₹" + trim(v / 1e7) + " Cr";
    if (v >= 1e5) return neg + "₹" + trim(v / 1e5) + " L";
    if (v >= 1e3) return neg + "₹" + trim(v / 1e3) + "k";
    return neg + "₹" + Math.round(v);
    function trim(x) { return (Math.round(x * 100) / 100).toString(); }
  };
  CM.words = function (n) {
    // "₹1,50,00,000 (1.5 crore)" helper for hero subtexts
    var v = Math.abs(n);
    if (v >= 1e7) return CM.num(v / 1e7, 2) + " crore";
    if (v >= 1e5) return CM.num(v / 1e5, 2) + " lakh";
    return "";
  };

  /* ---------- css var reader (charts pick up theme) ---------- */
  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  /* ---------- input binding ---------- */
  var boundIds = [];
  var urlTimer = null;

  CM.bind = function (ids, recalc) {
    recalcFn = recalc;
    var params = new URLSearchParams(location.search);

    ids.forEach(function (id) {
      var num = document.getElementById(id);
      var rng = document.getElementById(id + "-r");
      if (!num) return;
      boundIds.push(id);

      if (params.has(id)) {
        var pv = parseFloat(params.get(id));
        if (isFinite(pv)) num.value = pv;
      }

      function clamp(v) {
        var min = parseFloat(num.min), max = parseFloat(num.max);
        if (isFinite(min) && v < min) v = min;
        if (isFinite(max) && v > max) v = max;
        return v;
      }
      function paintRange() {
        if (!rng) return;
        var v = parseFloat(num.value);
        var min = parseFloat(rng.min), max = parseFloat(rng.max);
        if (!isFinite(v)) return;
        var pct = Math.min(100, Math.max(0, ((v - min) / (max - min)) * 100));
        rng.style.setProperty("--fill", pct + "%");
        rng.value = v;
      }

      if (rng) {
        rng.addEventListener("input", function () {
          num.value = rng.value;
          paintRange();
          fire();
        });
      }
      num.addEventListener("input", function () {
        paintRange();
        fire();
      });
      num.addEventListener("change", function () {
        var v = parseFloat(num.value);
        num.value = isFinite(v) ? clamp(v) : num.defaultValue;
        paintRange();
        fire();
      });
      paintRange();
    });

    function fire() {
      recalcFn();
      clearTimeout(urlTimer);
      urlTimer = setTimeout(updateUrl, 400);
    }
    function updateUrl() {
      var p = new URLSearchParams();
      boundIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.value !== "" && el.value !== el.defaultValue) p.set(id, el.value);
      });
      var qs = p.toString();
      history.replaceState(null, "", qs ? "?" + qs : location.pathname);
    }

    recalcFn();
  };

  CM.val = function (id) {
    var v = parseFloat(document.getElementById(id).value);
    return isFinite(v) ? v : 0;
  };
  CM.set = function (id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  /* ---------- segmented buttons ---------- */
  CM.seg = function (containerId, onChange) {
    var box = document.getElementById(containerId);
    if (!box) return { value: null };
    var state = { value: null };
    var btns = box.querySelectorAll("button");
    btns.forEach(function (b) {
      if (b.classList.contains("on")) state.value = b.dataset.val;
      b.addEventListener("click", function () {
        btns.forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        state.value = b.dataset.val;
        if (onChange) onChange(b.dataset.val);
        if (recalcFn) recalcFn();
      });
    });
    return state;
  };

  /* ---------- charts (Chart.js) ---------- */
  function baseOpts(money) {
    var ink = cssVar("--chart-ink"), grid = cssVar("--chart-grid");
    return {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { labels: { color: ink, boxWidth: 12, boxHeight: 12, usePointStyle: true, font: { size: 11 } } },
        tooltip: {
          callbacks: {
            label: function (c) {
              var v = c.parsed.y != null ? c.parsed.y : c.parsed;
              return " " + c.dataset.label + ": " + (money ? CM.inr(v) : CM.num(v));
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: ink, font: { size: 11 }, maxTicksLimit: 10 }, grid: { display: false }, border: { color: grid } },
        y: {
          ticks: { color: ink, font: { size: 11 }, callback: function (v) { return money ? CM.compact(v) : CM.num(v); } },
          grid: { color: grid },
          border: { display: false }
        }
      }
    };
  }

  function makeChart(canvasId, cfg) {
    var el = document.getElementById(canvasId);
    if (!el || typeof Chart === "undefined") return;
    if (charts[canvasId]) charts[canvasId].destroy();
    charts[canvasId] = new Chart(el, cfg);
  }

  // series: [{label, data, role: '--s1', fill}]
  CM.lineChart = function (canvasId, labels, series, opts) {
    opts = opts || {};
    var cfg = {
      type: "line",
      data: {
        labels: labels,
        datasets: series.map(function (s) {
          var col = cssVar(s.role || "--s1");
          return {
            label: s.label,
            data: s.data,
            borderColor: col,
            backgroundColor: s.fill ? col + "26" : col,
            fill: !!s.fill,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointBackgroundColor: col,
            tension: 0.25
          };
        })
      },
      options: baseOpts(opts.money !== false)
    };
    if (series.length < 2) cfg.options.plugins.legend.display = false;
    makeChart(canvasId, cfg);
  };

  CM.doughnut = function (canvasId, labels, data, roles) {
    var surface = cssVar("--chart-surface");
    var cfg = {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: roles.map(function (r) { return cssVar(r); }),
          borderColor: surface,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "68%",
        plugins: {
          legend: { position: "bottom", labels: { color: cssVar("--chart-ink"), boxWidth: 12, boxHeight: 12, usePointStyle: true, font: { size: 11 } } },
          tooltip: { callbacks: { label: function (c) { return " " + c.label + ": " + CM.inr(c.parsed); } } }
        }
      }
    };
    makeChart(canvasId, cfg);
  };

  CM.barChart = function (canvasId, labels, series, opts) {
    opts = opts || {};
    var cfg = {
      type: "bar",
      data: {
        labels: labels,
        datasets: series.map(function (s) {
          return {
            label: s.label,
            data: s.data,
            backgroundColor: cssVar(s.role || "--s1"),
            borderRadius: 4,
            maxBarThickness: 46
          };
        })
      },
      options: baseOpts(opts.money !== false)
    };
    if (series.length < 2) cfg.options.plugins.legend.display = false;
    if (opts.stacked) {
      cfg.options.scales.x.stacked = true;
      cfg.options.scales.y.stacked = true;
    }
    makeChart(canvasId, cfg);
  };

  /* ---------- schedule table ---------- */
  CM.table = function (containerId, headers, rows) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var h = '<div class="sched-scroll"><table class="cm-table"><thead><tr>';
    headers.forEach(function (x) { h += "<th>" + x + "</th>"; });
    h += "</tr></thead><tbody>";
    rows.forEach(function (r) {
      h += "<tr>";
      r.forEach(function (c) { h += "<td>" + c + "</td>"; });
      h += "</tr>";
    });
    h += "</tbody></table></div>";
    el.innerHTML = h;
  };

  /* ---------- copy share link ---------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-copylink]");
    if (!btn) return;
    navigator.clipboard.writeText(location.href).then(function () {
      var old = btn.textContent;
      btn.textContent = "Link copied ✓";
      setTimeout(function () { btn.textContent = old; }, 1600);
    });
  });

  /* ---------- theme toggle ---------- */
  function paintToggle() {
    var b = document.getElementById("theme-toggle");
    if (b) b.textContent = document.documentElement.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
  }
  document.addEventListener("DOMContentLoaded", function () {
    paintToggle();
    var b = document.getElementById("theme-toggle");
    if (b) {
      b.addEventListener("click", function () {
        var cur = document.documentElement.getAttribute("data-theme");
        var next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("cm-theme", next);
        paintToggle();
        if (recalcFn) recalcFn(); // rebuild charts with new palette
      });
    }
  });
})();
