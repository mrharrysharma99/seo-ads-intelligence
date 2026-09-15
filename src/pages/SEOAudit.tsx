import { useState, useEffect } from "react";
import { useAudit } from "../context/AuditContext";

interface SEOAuditProps {
  onNewAudit: () => void;
}

export default function SEOAudit({ onNewAudit }: SEOAuditProps) {
  const { targetUrl, setTargetUrl, isAuditing, setIsAuditing, auditScore, setAuditScore, triggerAudit } = useAudit();
  const [auditComplete, setAuditComplete] = useState(true);

  const [categories, setCategories] = useState([
    { name: "Technical SEO", score: 85, issues: 4, max: 100 },
    { name: "On-Page SEO", score: 72, issues: 8, max: 100 },
    { name: "Content Quality", score: 68, issues: 12, max: 100 },
    { name: "Mobile UX", score: 91, issues: 2, max: 100 },
    { name: "Page Speed", score: 76, issues: 5, max: 100 },
    { name: "Backlinks", score: 64, issues: 9, max: 100 },
  ]);

  const [findings, setFindings] = useState([
    { sev: "critical", title: "Core Web Vitals: LCP exceeds 4.0s on 12 pages", category: "Page Speed", page: "/bangalore/flats" },
    { sev: "critical", title: "Broken internal links detected (23 links)", category: "Technical SEO", page: "/hyderabad/pg" },
    { sev: "high", title: "Missing H1 tags on 8 city landing pages", category: "On-Page SEO", page: "/chennai/rent" },
    { sev: "high", title: "Thin content on 15 neighborhood guides (< 300 words)", category: "Content Quality", page: "/pune/areas" },
    { sev: "medium", title: "Duplicate meta descriptions on 6 pages", category: "On-Page SEO", page: "/mumbai/flats" },
    { sev: "medium", title: "Images missing lazy loading attribute", category: "Page Speed", page: "/listings" },
    { sev: "low", title: "Schema markup incomplete for 20 property pages", category: "Technical SEO", page: "/properties" },
    { sev: "low", title: "Alt text missing on 15 listing images", category: "On-Page SEO", page: "/gallery" },
  ]);

  useEffect(() => {
    if (isAuditing) {
      setAuditComplete(false);
      const timer = setTimeout(() => {
        // Generate random scores based on URL
        const urlHash = targetUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const baseScore = 60 + (urlHash % 30);
        
        setAuditScore(baseScore);
        setCategories([
          { name: "Technical SEO", score: baseScore + Math.floor(Math.random() * 15), issues: Math.floor(Math.random() * 10) + 2, max: 100 },
          { name: "On-Page SEO", score: baseScore - 5 + Math.floor(Math.random() * 10), issues: Math.floor(Math.random() * 12) + 5, max: 100 },
          { name: "Content Quality", score: baseScore - 10 + Math.floor(Math.random() * 15), issues: Math.floor(Math.random() * 15) + 8, max: 100 },
          { name: "Mobile UX", score: baseScore + 10 + Math.floor(Math.random() * 10), issues: Math.floor(Math.random() * 5) + 1, max: 100 },
          { name: "Page Speed", score: baseScore - 3 + Math.floor(Math.random() * 12), issues: Math.floor(Math.random() * 8) + 3, max: 100 },
          { name: "Backlinks", score: baseScore - 15 + Math.floor(Math.random() * 20), issues: Math.floor(Math.random() * 12) + 5, max: 100 },
        ]);

        setFindings([
          { sev: "critical", title: "Core Web Vitals: LCP exceeds 4.0s on multiple pages", category: "Page Speed", page: "/" },
          { sev: "critical", title: "Broken internal links detected", category: "Technical SEO", page: "/about" },
          { sev: "high", title: "Missing H1 tags on key landing pages", category: "On-Page SEO", page: "/services" },
          { sev: "high", title: "Thin content detected on several pages", category: "Content Quality", page: "/blog" },
          { sev: "medium", title: "Duplicate meta descriptions found", category: "On-Page SEO", page: "/products" },
          { sev: "medium", title: "Images missing lazy loading attribute", category: "Page Speed", page: "/gallery" },
          { sev: "low", title: "Schema markup incomplete", category: "Technical SEO", page: "/" },
          { sev: "low", title: "Alt text missing on several images", category: "On-Page SEO", page: "/images" },
        ]);

        setIsAuditing(false);
        setAuditComplete(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isAuditing, targetUrl, setAuditScore, setIsAuditing]);

  const runAudit = () => {
    if (!targetUrl.trim()) {
      alert("Please enter a valid URL");
      return;
    }
    triggerAudit();
  };

  return (
    <div className="space-y-6 reveal-stagger">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">SEO Audit</h1>
          <p className="text-sm text-mut mt-1">Comprehensive technical and content analysis</p>
        </div>
        <div className="flex items-center gap-2">
          {auditComplete && (
            <span className="chip">
              <span className="dt dt-ai">AI</span>
              Last scan: Just now
            </span>
          )}
          <button onClick={onNewAudit} className="btn btn-prime !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Run New Audit
          </button>
        </div>
      </div>

      {/* URL Input */}
      <div className="panel p-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="lbl">Target URL</label>
            <input
              type="url"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="https://example.com"
              className="input"
              disabled={isAuditing}
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={runAudit}
              disabled={isAuditing}
              className="btn btn-prime"
            >
              {isAuditing ? (
                <>
                  <svg className="animate-spin" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="32" strokeDashoffset="8" />
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8a6 6 0 1012 0A6 6 0 002 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Run Audit
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isAuditing && (
        <div className="panel p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-panel2 border-t-grn animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-grn">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-ink">Analyzing {targetUrl}</p>
              <p className="text-xs text-mut mt-1">AI is scanning technical SEO, content, and performance...</p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-grn animate-pulse"></div>
                <span className="text-xs text-mut">Checking technical SEO...</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-grn animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-xs text-mut">Analyzing content quality...</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-grn animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-xs text-mut">Evaluating page speed...</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audit Results */}
      {!isAuditing && auditComplete && (
        <>
      {/* Score + Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Overall Score */}
        <div className="panel p-6 flex flex-col items-center justify-center">
          <div className="relative w-32 h-32">
            <svg width="128" height="128" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="56" fill="none" stroke="#1d2b3a" strokeWidth="8"/>
              <circle
                cx="64" cy="64" r="56" fill="none" stroke="#3ecf8e" strokeWidth="8"
                strokeDasharray={`${(auditScore / 100) * 352} 352`}
                strokeLinecap="round"
                transform="rotate(-90 64 64)"
                className="draw-line"
                style={{ "--dash": 352 } as React.CSSProperties}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-3xl font-bold text-ink">{auditScore}</span>
              <span className="text-[10px] text-mut font-semibold uppercase tracking-wider">/ 100</span>
            </div>
          </div>
          <p className="text-sm text-mut mt-3 font-medium">Overall Health Score</p>
          <p className="text-xs text-dim mt-1">↑ 4 points from last month</p>
        </div>

        {/* Categories */}
        <div className="panel lg:col-span-2">
          <div className="panel-hd">
            <h3 className="text-sm font-semibold text-ink">Category Breakdown</h3>
            <span className="chip">{categories.reduce((a, c) => a + c.issues, 0)} total issues</span>
          </div>
          <div className="panel-bd space-y-3">
            {categories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-4">
                <div className="w-32 text-xs font-medium text-ink truncate">{cat.name}</div>
                <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      cat.score >= 80 ? "bg-grn" : cat.score >= 60 ? "bg-amb" : "bg-ros"
                    }`}
                    style={{ width: `${cat.score}%` }}
                  />
                </div>
                <span className="w-10 text-right font-mono text-xs font-bold text-ink">{cat.score}</span>
                <span className="w-16 text-right text-[10px] text-dim">{cat.issues} issues</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Findings */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Audit Findings</h3>
            <p className="text-xs text-dim mt-0.5">Prioritized by severity and impact</p>
          </div>
          <div className="flex gap-1">
            <span className="chip chip-on">All</span>
            <span className="chip">Critical</span>
            <span className="chip">High</span>
            <span className="chip">Medium</span>
          </div>
        </div>
        <div className="panel-bd">
          <table className="tbl">
            <thead>
              <tr>
                <th>Severity</th>
                <th>Issue</th>
                <th>Category</th>
                <th>Affected Page</th>
              </tr>
            </thead>
            <tbody>
              {findings.map((f, i) => (
                <tr key={i}>
                  <td><span className={`sev sev-${f.sev}`}>{f.sev}</span></td>
                  <td className="text-ink text-xs font-medium">{f.title}</td>
                  <td><span className="chip !text-[10px]">{f.category}</span></td>
                  <td><span className="url-tag">{f.page}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </>
      )}
    </div>
  );
}
