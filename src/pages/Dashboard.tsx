export default function Dashboard() {
  const metrics = [
    { label: "Organic Traffic", value: "1.24M", change: "+12.3%", up: true, icon: "M2 14l4-4 3 3 5-7" },
    { label: "Domain Rating", value: "67", change: "+3", up: true, icon: "M8 1a5 5 0 015 5c0 1.5-.7 2.8-1.8 3.7L8 14l-3.2-4.3A5 5 0 018 1z" },
    { label: "Keywords Ranked", value: "8,432", change: "+347", up: true, icon: "M2 8h12M8 2v12" },
    { label: "Ad Spend (MTD)", value: "₹4.2L", change: "-8.1%", up: false, icon: "M2 12l4-4 3 3 5-7" },
  ];

  const topKeywords = [
    { kw: "2bhk flat for rent in bangalore", vol: "45.2K", pos: 3, diff: "+2", ctr: "14.2%" },
    { kw: "house for rent near me", vol: "33.1K", pos: 7, diff: "-1", ctr: "8.7%" },
    { kw: "pg in whitefield bangalore", vol: "27.8K", pos: 2, diff: "+3", ctr: "18.4%" },
    { kw: "1bhk rent in hyderabad", vol: "22.4K", pos: 5, diff: "0", ctr: "11.1%" },
    { kw: "flat for rent in pune without brokerage", vol: "18.9K", pos: 4, diff: "+1", ctr: "12.8%" },
    { kw: "rental apartment in chennai", vol: "15.6K", pos: 8, diff: "-2", ctr: "6.3%" },
  ];

  const recentIssues = [
    { sev: "critical", msg: "12 pages returning 5xx server errors", time: "2h ago" },
    { sev: "high", msg: "Mobile usability issues on 34 property pages", time: "5h ago" },
    { sev: "medium", msg: "Duplicate title tags detected on 8 city landing pages", time: "1d ago" },
    { sev: "low", msg: "Image alt text missing on 15 listing images", time: "2d ago" },
  ];

  return (
    <div className="space-y-6 reveal-stagger">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Dashboard</h1>
          <p className="text-sm text-mut mt-1">AI-powered SEO & Ads intelligence for the Indian rental market</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="chip">Last 30 days</span>
          <button className="btn btn-ghost !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="panel p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-mut uppercase tracking-wider">{m.label}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-dim">
                <path d={m.icon} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div className="flex items-end gap-2">
              <span className="font-display text-2xl font-bold text-ink">{m.value}</span>
              <span className={`text-xs font-semibold ${m.up ? "text-grn" : "text-ros"}`}>
                {m.change}
              </span>
            </div>
            {/* Mini sparkline */}
            <div className="mt-3 h-8">
              <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d={m.up
                    ? "M0 25 Q15 22 25 20 T50 15 T75 10 T100 5"
                    : "M0 5 Q15 8 25 12 T50 18 T75 22 T100 25"
                  }
                  stroke={m.up ? "#3ecf8e" : "#f4587a"}
                  strokeWidth="1.5"
                  fill="none"
                  className="draw-line"
                  style={{ "--dash": 200 } as React.CSSProperties}
                />
                <path
                  d={m.up
                    ? "M0 25 Q15 22 25 20 T50 15 T75 10 T100 5 L100 30 L0 30 Z"
                    : "M0 5 Q15 8 25 12 T50 18 T75 22 T100 25 L100 30 L0 30 Z"
                  }
                  fill={m.up ? "rgba(62,207,142,0.08)" : "rgba(244,88,122,0.08)"}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Traffic Chart */}
        <div className="panel lg:col-span-2">
          <div className="panel-hd">
            <div>
              <h3 className="text-sm font-semibold text-ink">Organic Traffic Trend</h3>
              <p className="text-xs text-dim mt-0.5">Daily organic sessions from Google</p>
            </div>
            <div className="flex gap-1">
              <span className="chip chip-on">30D</span>
              <span className="chip">90D</span>
              <span className="chip">1Y</span>
            </div>
          </div>
          <div className="panel-bd">
            <div className="h-48">
              <svg width="100%" height="100%" viewBox="0 0 600 180" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1="0" y1={i * 45} x2="600" y2={i * 45} stroke="#1d2b3a" strokeWidth="0.5"/>
                ))}
                {/* Area */}
                <path
                  d="M0 140 Q30 135 60 130 T120 115 T180 100 T240 110 T300 85 T360 70 T420 60 T480 45 T540 50 T600 30 L600 180 L0 180 Z"
                  fill="url(#trafficGrad)"
                />
                {/* Line */}
                <path
                  d="M0 140 Q30 135 60 130 T120 115 T180 100 T240 110 T300 85 T360 70 T420 60 T480 45 T540 50 T600 30"
                  stroke="#3ecf8e"
                  strokeWidth="2"
                  fill="none"
                  className="draw-line"
                  style={{ "--dash": 800 } as React.CSSProperties}
                />
                {/* Dots */}
                {[[60,130],[180,100],[300,85],[420,60],[540,50],[600,30]].map(([cx,cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3" fill="#3ecf8e" stroke="#0c1218" strokeWidth="2"/>
                ))}
                <defs>
                  <linearGradient id="trafficGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(62,207,142,0.2)"/>
                    <stop offset="100%" stopColor="rgba(62,207,142,0)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-dim">
              <span>Jun 1</span><span>Jun 8</span><span>Jun 15</span><span>Jun 22</span><span>Jun 30</span>
            </div>
          </div>
        </div>

        {/* Issues */}
        <div className="panel">
          <div className="panel-hd">
            <div>
              <h3 className="text-sm font-semibold text-ink">Recent Issues</h3>
              <p className="text-xs text-dim mt-0.5">AI-detected problems</p>
            </div>
            <span className="chip">{recentIssues.length} active</span>
          </div>
          <div className="panel-bd space-y-3">
            {recentIssues.map((issue, i) => (
              <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-panel2/50 border border-line/50 hover:border-line2 transition-colors">
                <span className={`sev sev-${issue.sev}`}>{issue.sev}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-ink leading-relaxed">{issue.msg}</p>
                  <span className="text-[10px] text-dim mt-1">{issue.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keywords Table */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Top Performing Keywords</h3>
            <p className="text-xs text-dim mt-0.5">Ranked by search volume and position</p>
          </div>
          <button className="btn btn-ghost !text-xs">View All</button>
        </div>
        <div className="panel-bd">
          <table className="tbl">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Volume</th>
                <th>Position</th>
                <th>Change</th>
                <th>CTR</th>
              </tr>
            </thead>
            <tbody>
              {topKeywords.map((kw, i) => (
                <tr key={i}>
                  <td className="font-medium text-ink">{kw.kw}</td>
                  <td className="mono text-mut">{kw.vol}</td>
                  <td>
                    <span className="font-display font-bold text-ink">{kw.pos}</span>
                  </td>
                  <td>
                    <span className={`text-xs font-semibold ${
                      kw.diff.startsWith("+") ? "text-grn" : kw.diff.startsWith("-") ? "text-ros" : "text-dim"
                    }`}>
                      {kw.diff}
                    </span>
                  </td>
                  <td className="mono text-mut">{kw.ctr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
