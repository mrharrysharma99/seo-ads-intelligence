import { useAudit } from "../context/AuditContext";

interface DashboardProps {
  onExport: () => void;
}

export default function Dashboard({ onExport }: DashboardProps) {
  const { targetUrl, websiteType, auditScore } = useAudit();

  // Generate dynamic data based on website type and URL
  const generateDynamicData = () => {
    const urlHash = targetUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const baseMultiplier = 0.5 + (urlHash % 100) / 100;

    // Website-specific data
    const websiteData: Record<string, any> = {
      'real-estate': {
        traffic: Math.floor(1240000 * baseMultiplier),
        domainRating: Math.floor(67 * baseMultiplier),
        keywords: Math.floor(8432 * baseMultiplier),
        adSpend: Math.floor(420000 * baseMultiplier),
        topKeywords: [
          { kw: "2bhk flat for rent in bangalore", vol: "45.2K", pos: 3, diff: "+2", ctr: "14.2%" },
          { kw: "house for rent near me", vol: "33.1K", pos: 7, diff: "-1", ctr: "8.7%" },
          { kw: "pg in whitefield bangalore", vol: "27.8K", pos: 2, diff: "+3", ctr: "18.4%" },
          { kw: "1bhk rent in hyderabad", vol: "22.4K", pos: 5, diff: "0", ctr: "11.1%" },
          { kw: "flat for rent in pune without brokerage", vol: "18.9K", pos: 4, diff: "+1", ctr: "12.8%" },
          { kw: "rental apartment in chennai", vol: "15.6K", pos: 8, diff: "-2", ctr: "6.3%" },
        ],
        issues: [
          { sev: "critical", msg: "12 pages returning 5xx server errors", time: "2h ago" },
          { sev: "high", msg: "Mobile usability issues on 34 property pages", time: "5h ago" },
          { sev: "medium", msg: "Duplicate title tags detected on 8 city landing pages", time: "1d ago" },
          { sev: "low", msg: "Image alt text missing on 15 listing images", time: "2d ago" },
        ],
      },
      'technology': {
        traffic: Math.floor(850000 * baseMultiplier),
        domainRating: Math.floor(72 * baseMultiplier),
        keywords: Math.floor(6500 * baseMultiplier),
        adSpend: Math.floor(380000 * baseMultiplier),
        topKeywords: [
          { kw: "software development services", vol: "38.5K", pos: 2, diff: "+3", ctr: "15.8%" },
          { kw: "custom software solutions", vol: "28.3K", pos: 4, diff: "+1", ctr: "12.1%" },
          { kw: "enterprise software development", vol: "22.7K", pos: 5, diff: "-2", ctr: "9.4%" },
          { kw: "web application development", vol: "19.2K", pos: 3, diff: "+2", ctr: "13.6%" },
          { kw: "mobile app development company", vol: "16.8K", pos: 6, diff: "+1", ctr: "10.2%" },
          { kw: "cloud software solutions", vol: "14.5K", pos: 7, diff: "0", ctr: "8.9%" },
        ],
        issues: [
          { sev: "critical", msg: "SSL certificate expiring in 7 days", time: "1h ago" },
          { sev: "high", msg: "Broken links on 12 service pages", time: "3h ago" },
          { sev: "medium", msg: "Missing meta descriptions on 15 pages", time: "8h ago" },
          { sev: "low", msg: "Slow page load on case studies", time: "1d ago" },
        ],
      },
      'ecommerce': {
        traffic: Math.floor(2100000 * baseMultiplier),
        domainRating: Math.floor(58 * baseMultiplier),
        keywords: Math.floor(12500 * baseMultiplier),
        adSpend: Math.floor(650000 * baseMultiplier),
        topKeywords: [
          { kw: "buy online shopping", vol: "82.3K", pos: 5, diff: "+2", ctr: "11.2%" },
          { kw: "best deals online", vol: "65.7K", pos: 8, diff: "-1", ctr: "7.8%" },
          { kw: "discount products online", vol: "48.2K", pos: 4, diff: "+3", ctr: "13.5%" },
          { kw: "online shopping india", vol: "42.1K", pos: 6, diff: "+1", ctr: "9.8%" },
          { kw: "flash sale today", vol: "35.6K", pos: 3, diff: "+2", ctr: "15.2%" },
          { kw: "free shipping products", vol: "28.9K", pos: 7, diff: "0", ctr: "8.4%" },
        ],
        issues: [
          { sev: "critical", msg: "Checkout page returning 500 errors", time: "30m ago" },
          { sev: "high", msg: "Product images not loading on 45 pages", time: "2h ago" },
          { sev: "medium", msg: "Missing schema markup on products", time: "6h ago" },
          { sev: "low", msg: "Duplicate product descriptions", time: "1d ago" },
        ],
      },
      'food': {
        traffic: Math.floor(680000 * baseMultiplier),
        domainRating: Math.floor(52 * baseMultiplier),
        keywords: Math.floor(4200 * baseMultiplier),
        adSpend: Math.floor(280000 * baseMultiplier),
        topKeywords: [
          { kw: "restaurant near me", vol: "95.2K", pos: 4, diff: "+2", ctr: "16.8%" },
          { kw: "food delivery online", vol: "72.4K", pos: 6, diff: "-1", ctr: "10.5%" },
          { kw: "best cafe in city", vol: "38.7K", pos: 3, diff: "+3", ctr: "18.2%" },
          { kw: "online food order", vol: "32.1K", pos: 5, diff: "+1", ctr: "12.4%" },
          { kw: "pizza delivery near me", vol: "28.5K", pos: 7, diff: "0", ctr: "9.1%" },
          { kw: "vegetarian restaurant", vol: "22.8K", pos: 8, diff: "-2", ctr: "7.6%" },
        ],
        issues: [
          { sev: "critical", msg: "Menu page not mobile responsive", time: "1h ago" },
          { sev: "high", msg: "Missing location schema on 8 pages", time: "4h ago" },
          { sev: "medium", msg: "Slow image loading on gallery", time: "8h ago" },
          { sev: "low", msg: "Missing alt text on food images", time: "2d ago" },
        ],
      },
      'general': {
        traffic: Math.floor(950000 * baseMultiplier),
        domainRating: Math.floor(62 * baseMultiplier),
        keywords: Math.floor(7200 * baseMultiplier),
        adSpend: Math.floor(450000 * baseMultiplier),
        topKeywords: [
          { kw: "services near me", vol: "58.3K", pos: 5, diff: "+1", ctr: "12.4%" },
          { kw: "best company reviews", vol: "42.7K", pos: 7, diff: "-1", ctr: "8.9%" },
          { kw: "professional services", vol: "35.2K", pos: 4, diff: "+2", ctr: "14.1%" },
          { kw: "local business directory", vol: "28.6K", pos: 6, diff: "+1", ctr: "10.8%" },
          { kw: "trusted service provider", vol: "22.4K", pos: 3, diff: "+3", ctr: "16.5%" },
          { kw: "company contact information", vol: "18.9K", pos: 8, diff: "0", ctr: "7.2%" },
        ],
        issues: [
          { sev: "critical", msg: "Contact form not submitting", time: "2h ago" },
          { sev: "high", msg: "Broken internal links on 18 pages", time: "5h ago" },
          { sev: "medium", msg: "Missing H1 tags on 6 pages", time: "12h ago" },
          { sev: "low", msg: "Slow page speed on homepage", time: "1d ago" },
        ],
      },
    };

    return websiteData[websiteType] || websiteData['general'];
  };

  const dynamicData = generateDynamicData();

  const metrics = [
    { label: "Organic Traffic", value: `${(dynamicData.traffic / 1000000).toFixed(2)}M`, change: "+12.3%", up: true, icon: "M2 14l4-4 3 3 5-7" },
    { label: "Domain Rating", value: dynamicData.domainRating.toString(), change: "+3", up: true, icon: "M8 1a5 5 0 015 5c0 1.5-.7 2.8-1.8 3.7L8 14l-3.2-4.3A5 5 0 018 1z" },
    { label: "Keywords Ranked", value: dynamicData.keywords.toLocaleString(), change: "+347", up: true, icon: "M2 8h12M8 2v12" },
    { label: "Ad Spend (MTD)", value: `₹${(dynamicData.adSpend / 100000).toFixed(1)}L`, change: "-8.1%", up: false, icon: "M2 12l4-4 3 3 5-7" },
  ];

  const topKeywords = dynamicData.topKeywords;
  const recentIssues = dynamicData.issues;

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
          <button onClick={onExport} className="btn btn-ghost !text-xs">
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
            {recentIssues.map((issue: any, i: number) => (
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
              {topKeywords.map((kw: any, i: number) => (
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
