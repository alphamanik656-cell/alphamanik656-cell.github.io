/*
  ===========================================================
  EDIT ME — all site content lives in this file.
  Change text, add projects, update links here.
  You should not need to touch index.html or style.css
  just to update content.
  ===========================================================
*/

const CONFIG = {
  name: "Ainesh Manik",
  title: "AI Project Developer",
  about: `I'm Ainesh Manik, an AI Project Developer who likes building agents that go from idea to
    finished output with as little hand-holding as possible — searching the web, calling APIs,
    analyzing data, and writing up the results.`
};

// ---- ABOUT / QUICK FACTS ---------------------------------------------------
// Shown as an icon list next to the About heading. icon keys come from js/icons.js
const QUICK_FACTS = [
  { icon: "target", label: "Focus", value: "Autonomous AI agents that finish real tasks end to end" },
  { icon: "compass", label: "Approach", value: "Ship working tools, not demos or prototypes" },
  { icon: "flask", label: "Currently exploring", value: "Vision models for automated tutoring" }
];

// ---- PROJECTS ------------------------------------------------------------
// status: "live" | "in-progress" | "concept"
// icon keys come from js/icons.js
const PROJECTS = [
  {
    title: "YEA Today Grant Finder Agent",
    icon: "search",
    status: "live",
    summary: "An autonomous agent that finds and drafts grant applications for a youth entrepreneurship nonprofit.",
    description: "Built for YEA Today (Youth Entrepreneurship Alliance Today), a national 501(c)(3). The agent searches the web for grants ($1K–$25K, national, 501(c)(3)-eligible), ranks them by fit, and drafts application narratives for the top matches — turning a manual monthly research task into a single command.",
    tags: ["Python", "Claude API", "Brave Search API"],
    links: [
      { label: "View Project", href: "#" }
    ],
    // Cover banner shown at the top of the card. type "list" = ranked results readout.
    // stat tone classes: c-indigo (volume), c-amber (money), c-violet (match quality)
    readout: {
      type: "list",
      filename: "grants_report.md",
      stats: [
        { k: "Grants Found", v: "18", tone: "c-indigo" },
        { k: "Total Funding", v: "$142K", tone: "c-amber" },
        { k: "Top Match", v: "94%", tone: "c-violet" }
      ],
      items: [
        { name: "Youth Founders Fund", amount: "$15,000", match: 94 },
        { name: "NextGen Entrepreneurs Grant", amount: "$10,000", match: 89 },
        { name: "Spark Youth Initiative", amount: "$8,500", match: 85 }
      ]
    }
  },
  {
    title: "Explain My Mistake",
    icon: "chat",
    status: "in-progress",
    summary: "An AI math tutor that reads a photo of your work and explains exactly where it went wrong.",
    description: "Students upload a photo of their handwritten math work; a vision model identifies the mistake and explains the underlying misconception rather than just giving the right answer. Backend runs locally on Ollama with llama3.2-vision (no API cost), with a React frontend rendering step-by-step LaTeX explanations via KaTeX.",
    tags: ["Node.js", "Express", "Ollama", "React", "KaTeX"],
    links: [
      { label: "View Project", href: "#" }
    ],
    // type "annotation" = flags the mistake, shows the fix, and the tutor's hint.
    readout: {
      type: "annotation",
      filename: "session_4271.json",
      tag: "Sign Error",
      confidence: 98,
      problem: "2x + 6 = 14",
      wrongStep: "x = 10",
      correctStep: "x = 4",
      correctHint: "Sign flipped when dividing by 2 — isolate x again from step 2."
    }
  },
  {
    title: "Market Risk Analytics Agent",
    icon: "chart",
    status: "live",
    summary: "A Claude-powered agent that turns raw market data into plain-language and quantitative risk reports.",
    description: "Serves two audiences from one engine: individual investors get plain-language risk reports and hedging guidance, while fund managers get quantitative analytics — Value at Risk, CVaR, beta, drawdown, Sharpe/Sortino, and a 0–100 portfolio survivability score. Also models recession risk from VIX, S&P 500 trend, and yield curve inversion, and stress-tests portfolios against 2008, 2020, and 2022-style scenarios.",
    tags: ["Python", "Claude API", "yfinance"],
    links: [
      { label: "View Project", href: "https://market-risk-agent-lg52fbgnmnevhw8ojxnguo.streamlit.app/" }
    ],
    // type "chart" = trend line + stat readouts + a risk gauge.
    readout: {
      type: "chart",
      filename: "risk_report.md",
      chartPath: "M0 34 L30 30 L60 36 L90 20 L120 26 L150 12 L180 18 L210 8 L240 14 L270 4 L300 10",
      stats: [
        { k: "VaR 95%", v: "−4.2%", tone: "neg" },
        { k: "Beta", v: "1.12", tone: "neu" },
        { k: "Survivability", v: "82/100", tone: "pos" }
      ],
      gaugePercent: 78
    }
  }
  // Add more projects by copying the block above. Pick an icon key from js/icons.js
  // (or add a new one there) that matches what the project actually does.
  // readout.type can be "chart", "list", or "annotation" — see js/main.js renderReadout().
];

// ---- SKILLS ---------------------------------------------------------------
// icon keys come from js/icons.js
const SKILLS = [
  { group: "Languages", icon: "code", items: ["Python", "JavaScript", "TypeScript", "HTML/CSS"] },
  { group: "AI / ML", icon: "sparkles", items: ["Claude API", "Ollama", "Prompt Engineering", "Agentic Tool Use"] },
  { group: "Backend", icon: "server", items: ["Node.js", "Express", "REST APIs"] },
  { group: "Frontend", icon: "layout", items: ["React", "KaTeX"] }
];

// ---- CONTACT ---------------------------------------------------------------
// icon keys come from js/icons.js
const CONTACT_LINKS = [
  { label: "Email", icon: "mail", value: "aineshmanik@gmail.com", href: "mailto:aineshmanik@gmail.com" }
];
