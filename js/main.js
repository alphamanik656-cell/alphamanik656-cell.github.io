// ===== Render projects =====
const statusLabel = {
  "live": "Live",
  "in-progress": "In Progress",
  "concept": "Concept"
};

// ===== Project cover banners ("live readout" mockups) =====
// Each readout.type gets its own content renderer, sharing the same
// fake-titlebar frame. These are illustrative mockups of each agent's
// real output, not live data — hence the "Sample" badge on the banner.
function renderReadout(p, i) {
  const r = p.readout;
  if (!r) return "";

  let content = "";

  if (r.type === "chart") {
    const gradId = `readout-fill-${i}`;
    content = `
      <div class="chart-wrap">
        <svg viewBox="0 0 300 46" width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#7b86e8" stop-opacity=".45"/>
              <stop offset="100%" stop-color="#7b86e8" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path d="${r.chartPath} L300 46 L0 46 Z" fill="url(#${gradId})"/>
          <path d="${r.chartPath}" fill="none" stroke="#7b86e8" stroke-width="1.6" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="stat-row">
        ${r.stats.map(s => `<div class="mini-stat"><span class="k">${s.k}</span><span class="v ${s.tone}">${s.v}</span></div>`).join("")}
      </div>
      <div class="gauge"><span class="marker" style="left:${r.gaugePercent}%"></span></div>
    `;
  } else if (r.type === "list") {
    content = `
      <div class="stat-row">
        ${r.stats.map(s => `<div class="mini-stat"><span class="k">${s.k}</span><span class="v ${s.tone}">${s.v}</span></div>`).join("")}
      </div>
      <div class="readout-list">
        ${r.items.map((it, idx) => `
          <div class="readout-row">
            <span class="readout-rank tier-${idx + 1}">${idx + 1}</span>
            <span class="readout-name">${it.name}</span>
            <span class="readout-amount">${it.amount}</span>
            <span class="readout-match tier-${idx + 1}">${it.match}%</span>
          </div>
        `).join("")}
      </div>
    `;
  } else if (r.type === "annotation") {
    content = `
      <div class="readout-annotation">
        <div class="annotation-top">
          <span class="misconception-tag">${r.tag}</span>
          <div class="confidence-ring" style="--pct:${r.confidence}"><span>${r.confidence}%</span></div>
        </div>
        <div class="readout-problem">${r.problem} &rarr; <span class="readout-wrong">${r.wrongStep}</span> <span class="fix-arrow">&rarr;</span> <span class="readout-correct">${r.correctStep}</span></div>
        <div class="readout-hint"><span class="hint-icon">${ICONS.lightbulb}</span><span>${r.correctHint}</span></div>
      </div>
    `;
  }

  return `
    <div class="project-banner">
      <span class="sample-badge">Sample output</span>
      <div class="fake-titlebar">
        <span class="fake-dot"></span><span class="fake-dot"></span><span class="fake-dot"></span>
        <span class="fake-filename">${r.filename}</span>
      </div>
      ${content}
    </div>
  `;
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card" style="--delay:${i * 80}ms">
      ${renderReadout(p, i)}
      <div class="project-card-body">
        <div class="project-card-top">
          <div class="project-icon">${ICONS[p.icon] || ""}</div>
          <span class="status-pill">
            <span class="status-dot status-${p.status}"></span>
            <span class="status-text">${statusLabel[p.status] || p.status}</span>
          </span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <p class="project-description">${p.description}</p>
        <div class="tag-row">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${p.links.map(l => `<a href="${l.href}" class="project-link" target="_blank" rel="noopener">${l.label} &rarr;</a>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

// ===== Analytics event tracking =====
function trackEvent(name, params) {
  if (window.va) window.va("event", { name, data: params });
  if (window.gtag) window.gtag("event", name, params || {});
}

function initAnalyticsTracking() {
  const grid = document.getElementById("projectGrid");
  if (grid) {
    grid.addEventListener("click", (e) => {
      const link = e.target.closest(".project-link");
      if (!link) return;
      const card = link.closest(".project-card");
      const title = card?.querySelector(".project-title")?.textContent || "unknown";
      trackEvent("view_project_click", { project_name: title });
    });
  }
}

// ===== Render skills =====
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(group => `
    <div class="skill-group">
      <h4 class="skill-group-title">
        <span class="skill-group-icon">${ICONS[group.icon] || ""}</span>
        ${group.group}
      </h4>
      <div class="skill-pills">
        ${group.items.map(item => `<span class="skill-pill">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ===== Render certificates =====
function renderCertificates() {
  const grid = document.getElementById("certGrid");
  if (!grid) return;
  grid.innerHTML = CERTIFICATES.map(cert => `
    <div class="cert-card reveal">
      <div class="cert-head">
        <span class="cert-icon">${ICONS.award}</span>
        <span class="cert-meta">${cert.issuer} · ${cert.date}</span>
      </div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-detail">${cert.detail}</p>
      ${cert.id || cert.verify ? `
        <div class="cert-foot">
          ${cert.id ? `<span class="cert-id">${cert.id}</span>` : ""}
          ${cert.verify ? `<a class="cert-verify" href="${cert.verify}" target="_blank" rel="noopener">Verify →</a>` : ""}
        </div>` : ""}
    </div>
  `).join("");

  const wallet = document.getElementById("certWallet");
  if (CREDENTIALS_WALLET.url) {
    wallet.innerHTML = `<a href="${CREDENTIALS_WALLET.url}" target="_blank" rel="noopener">${CREDENTIALS_WALLET.label} →</a>`;
  } else {
    wallet.remove();
  }
}

// ===== Feedback form =====
function initFeedbackForm() {
  const form = document.getElementById("feedbackForm");
  const status = document.getElementById("feedbackStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    status.textContent = "";
    status.classList.remove("success", "error");

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.success) {
        form.reset();
        status.textContent = "Thanks — your feedback was sent.";
        status.classList.add("success");
        trackEvent("feedback_submitted", {});
      } else {
        status.textContent = "Something went wrong. Please try again.";
        status.classList.add("error");
      }
    } catch {
      status.textContent = "Something went wrong. Please try again.";
      status.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}

// ===== Render about quick facts =====
function renderFacts() {
  const wrap = document.getElementById("aboutFacts");
  if (!wrap) return;
  wrap.innerHTML = QUICK_FACTS.map(f => `
    <div class="fact-row">
      <span class="fact-icon">${ICONS[f.icon] || ""}</span>
      <span class="fact-text">
        <span class="fact-label">${f.label}</span>
        <span class="fact-value">${f.value}</span>
      </span>
    </div>
  `).join("");
}

// ===== Mobile nav toggle =====
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

// ===== Scroll reveal =====
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal, .project-card, .skill-group");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}

// ===== Nav background on scroll =====
function initNavScroll() {
  const header = document.querySelector(".nav-wrap");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderCertificates();
  renderFacts();
  initNavToggle();
  initScrollReveal();
  initNavScroll();
  initFeedbackForm();
  initAnalyticsTracking();
  document.getElementById("year").textContent = new Date().getFullYear();
});
