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
    analyzing data, and writing up the results. What connects these projects is where business
    and technology meet — funding decisions, risk decisions, learning decisions. That intersection
    is what I want to study next.`
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
    summary: "Finds real grant funding for a national youth entrepreneurship nonprofit — ranked by fit and ready to apply to, not just a list of search results.",
    description: "Built for YEA Today (Youth Entrepreneurship Alliance Today), a national 501(c)(3). Searches Grants.gov for federal opportunities, scrapes 25 private foundation grant pages, and cross-references ProPublica's nonprofit tax filings to find funders with a track record in similar causes — then AI ranks every match by fit in real time. A CLI version of the same agent also drafts full application narratives for top matches.",
    tags: ["Python", "Streamlit", "Gemini API", "Grants.gov API"],
    links: [
      { label: "View Project", href: "https://grant-finder-agent-nha5fazsgq6jvrfxqkmusu.streamlit.app/" }
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
    status: "live",
    summary: "An AI math tutor that reads a photo of your work and explains exactly where it went wrong.",
    description: "Students upload a photo of their handwritten math work, or paste their steps as text; a vision model identifies the exact step where their reasoning went wrong, explains the misconception behind it, and walks through the correct solution — with a hint-only mode for students who want a nudge instead of the answer.",
    tags: ["TanStack Start", "React", "Ollama Cloud"],
    links: [
      { label: "View Project", href: "https://math-mistake-mentor.lovable.app/" }
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
  },
  {
    title: "Study Buddy",
    icon: "book",
    status: "live",
    summary: "An AI study companion that turns messy class notes into plain-language breakdowns, flashcards, and a boss-battle quiz game.",
    description: "Upload class notes, a PDF, or a photo of handwriting, and Study Buddy rewrites the material as a numbered, plain-language walkthrough, then generates flashcards and a multiple-choice \"boss battle\" quiz for active recall — each paired with a memory trick to help it stick. A standalone AP Practice mode covers all 43 official College Board subjects with AI-generated MCQs and free-response questions in the style of the real exam. Built solo for the QuantumHacks hackathon; a no-signup guest mode lets anyone try the full app instantly.",
    tags: ["React", "Node.js", "Groq API", "SQLite"],
    links: [
      { label: "View Project", href: "https://frontend-lac-rho-74.vercel.app" }
    ],
    // type "list" = ranked topics with a mastery-style match score.
    readout: {
      type: "list",
      filename: "study_session.json",
      stats: [
        { k: "AP Subjects", v: "43", tone: "c-indigo" },
        { k: "Cards Made", v: "72", tone: "c-amber" },
        { k: "Quiz Streak", v: "9x", tone: "c-violet" }
      ],
      items: [
        { name: "Photosynthesis", amount: "24 cards", match: 92 },
        { name: "The Water Cycle", amount: "18 cards", match: 85 },
        { name: "French Revolution", amount: "30 cards", match: 78 }
      ]
    }
  },
  {
    title: "PhishCheck",
    icon: "mail",
    status: "live",
    summary: "An AI phishing analyst that quotes the exact evidence for every red flag it finds — not just a verdict.",
    description: "Paste any email and get a verdict, a risk score, and every red flag quoted directly from the text — domain spoofing, urgency pressure, credential-harvesting links, and more — so you actually learn what to look for instead of trusting a black-box label. Runs on free local Ollama in development and switches to Groq's free tier automatically in production, with zero code changes. Built solo for the HackMatrix hackathon (MLH).",
    tags: ["Node.js", "Express", "Groq API", "Ollama"],
    links: [
      { label: "View Project", href: "https://phishcheck-q3ng.onrender.com/" }
    ],
    // type "annotation" = flags the red flag, shows the verdict, and the reasoning.
    readout: {
      type: "annotation",
      filename: "phishcheck_scan.json",
      tag: "Domain Spoofing",
      confidence: 92,
      problem: "Unusual Sign-in Attempt Detected",
      wrongStep: "chase-secure-verify.com",
      correctStep: "Likely Phishing",
      correctHint: "Every red flag is backed by an exact quote from the email — never a bare verdict."
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

// ---- CERTIFICATES & CREDENTIALS --------------------------------------------
// Shown newest first. "verify" is the Verify button's link — a public verification page,
// or a picture of the certificate in assets/certificates/ when there isn't one.
const CERTIFICATES = [
  {
    title: "Machine Learning Fundamentals",
    issuer: "FreeAcademy.ai",
    date: "Oct 10, 2026",
    detail: "35 lessons · Final exam passed",
    id: "FA-2026-MLF-1TWA9A",
    verify: "https://freeacademy.ai/verify/FA-2026-MLF-1TWA9A"
  },
  {
    title: "The Hour of A.I.",
    issuer: "Code.org",
    date: "Sep 2026",
    detail: "Certificate of Completion · Basic concepts of Artificial Intelligence",
    verify: "assets/certificates/hour-of-ai.png"
  },
  {
    title: "Python For AI Data Science",
    issuer: "FreeAcademy.ai",
    date: "Aug 27, 2026",
    detail: "13 lessons · Final exam passed",
    id: "FA-2026-PFAD-AB9ENR",
    verify: "https://freeacademy.ai/verify/FA-2026-PFAD-AB9ENR"
  },
  {
    title: "Advanced Python Programming",
    issuer: "FreeAcademy.ai",
    date: "Aug 21, 2026",
    detail: "11 lessons · Final exam passed",
    id: "FA-2026-APP-AHD0BF",
    verify: "https://freeacademy.ai/verify/FA-2026-APP-AHD0BF"
  },
  {
    title: "Mathematics For AI",
    issuer: "FreeAcademy.ai",
    date: "Aug 17, 2026",
    detail: "9 lessons · Final exam passed",
    id: "FA-2026-MFA-DTPA7G",
    verify: "https://freeacademy.ai/verify/FA-2026-MFA-DTPA7G"
  },
  {
    title: "Probability Statistics AI",
    issuer: "FreeAcademy.ai",
    date: "Aug 13, 2026",
    detail: "20 lessons · Final exam passed",
    id: "FA-2026-PSA-MGILYB",
    verify: "https://freeacademy.ai/verify/FA-2026-PSA-MGILYB"
  },
  {
    title: "AI Finance Accounting",
    issuer: "FreeAcademy.ai",
    date: "Aug 12, 2026",
    detail: "12 lessons · Final exam passed",
    id: "FA-2026-AFA-KQJV05",
    verify: "https://freeacademy.ai/verify/FA-2026-AFA-KQJV05"
  },
  {
    title: "Wharton Global High School Investment Competition",
    issuer: "Wharton Global Youth Program",
    date: "Feb 26, 2026",
    detail: "Participant · 2025–2026 competition",
    verify: "https://achievements.globalyouth.wharton.upenn.edu/830fc59a-2b1f-4989-8bb9-1555a66b1872"
  },
  {
    title: "Wharton Global High School Investment Competition",
    issuer: "Wharton Global Youth Program",
    date: "Feb 27, 2025",
    detail: "Participant · 2024–2025 competition",
    verify: "https://achievements.globalyouth.wharton.upenn.edu/e3149091-c845-4625-8b2d-18d1daba5d1a"
  }
];

// Optional link shown under the certificate grid (e.g. an Accredible credentials wallet).
// Leave url empty to hide it.
const CREDENTIALS_WALLET = {
  label: "Ainesh Manik's Credentials wallet on Accredible",
  url: "https://achievements.globalyouth.wharton.upenn.edu/profile/aineshmanik152274/wallet"
};

// Feedback form submissions are handled by js/main.js via Web3Forms —
// see the hidden access_key field in index.html's #feedbackForm.
