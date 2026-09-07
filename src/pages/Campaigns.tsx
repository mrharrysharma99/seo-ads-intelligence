export default function Campaigns() {
  const campaigns = [
    { name: "Bangalore 2BHK Push", platform: "Google Ads", status: "active", spend: "₹82,400", impressions: "145K", clicks: "8.2K", ctr: "5.7%", conversions: 342, costPerConv: "₹241" },
    { name: "PG Listings - Hyderabad", platform: "Meta Ads", status: "active", spend: "₹45,200", impressions: "98K", clicks: "4.1K", ctr: "4.2%", conversions: 187, costPerConv: "₹242" },
    { name: "No Brokerage Campaign", platform: "Google Ads", status: "active", spend: "₹63,800", impressions: "112K", clicks: "6.8K", ctr: "6.1%", conversions: 298, costPerConv: "₹214" },
    { name: "Pune Rental Season", platform: "Google Ads", status: "paused", spend: "₹31,500", impressions: "67K", clicks: "3.2K", ctr: "4.8%", conversions: 124, costPerConv: "₹254" },
    { name: "Chennai Premium Flats", platform: "Meta Ads", status: "active", spend: "₹28,900", impressions: "54K", clicks: "2.4K", ctr: "4.4%", conversions: 98, costPerConv: "₹295" },
    { name: "Mumbai Diwali Special", platform: "Google Ads", status: "ended", spend: "₹95,000", impressions: "189K", clicks: "11.2K", ctr: "5.9%", conversions: 445, costPerConv: "₹213" },
  ];

  const adCreatives = [
    { title: "2BHK in Whitefield - ₹15K/mo", type: "Search", performance: "high", score: 92 },
    { title: "No Brokerage PG Stays", type: "Search", performance: "high", score: 88 },
    { title: "Find Your Dream Rental", type: "Display", performance: "medium", score: 74 },
    { title: "Verified Properties Only", type: "Search", performance: "high", score: 85 },
    { title: "Instant Move-in Homes", type: "Display", performance: "low", score: 58 },
  ];

  return (
    <div className="space-y-6 reveal-stagger">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Ad Campaigns</h1>
          <p className="text-sm text-mut mt-1">Performance tracking and creative intelligence</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Export Report
          </button>
          <button className="btn btn-prime !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            New Campaign
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="panel p-4">
          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Total Spend (MTD)</span>
          <p className="font-display text-xl font-bold text-ink mt-1">₹2.47L</p>
          <span className="text-xs text-grn font-semibold">↓ 8% vs last month</span>
        </div>
        <div className="panel p-4">
          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Total Conversions</span>
          <p className="font-display text-xl font-bold text-ink mt-1">1,494</p>
          <span className="text-xs text-grn font-semibold">↑ 12% vs last month</span>
        </div>
        <div className="panel p-4">
          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Avg. CPC</span>
          <p className="font-display text-xl font-bold text-ink mt-1">₹18.4</p>
          <span className="text-xs text-grn font-semibold">↓ 5% vs last month</span>
        </div>
        <div className="panel p-4">
          <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Avg. CPA</span>
          <p className="font-display text-xl font-bold text-ink mt-1">₹238</p>
          <span className="text-xs text-ros font-semibold">↑ 3% vs last month</span>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Active Campaigns</h3>
            <p className="text-xs text-dim mt-0.5">Real-time performance across platforms</p>
          </div>
          <div className="flex gap-1">
            <span className="chip chip-on">All</span>
            <span className="chip">Google</span>
            <span className="chip">Meta</span>
          </div>
        </div>
        <div className="panel-bd overflow-x-auto">
          <table className="tbl">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Platform</th>
                <th>Status</th>
                <th>Spend</th>
                <th>Impressions</th>
                <th>CTR</th>
                <th>Conversions</th>
                <th>CPA</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c, i) => (
                <tr key={i}>
                  <td className="font-medium text-ink text-xs">{c.name}</td>
                  <td><span className="chip !text-[10px]">{c.platform}</span></td>
                  <td>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${
                      c.status === "active" ? "text-grn" : c.status === "paused" ? "text-amb" : "text-dim"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        c.status === "active" ? "bg-grn pulse-dot" : c.status === "paused" ? "bg-amb" : "bg-dim"
                      }`}/>
                      {c.status}
                    </span>
                  </td>
                  <td className="mono text-xs text-mut">{c.spend}</td>
                  <td className="mono text-xs text-mut">{c.impressions}</td>
                  <td className="mono text-xs text-mut">{c.ctr}</td>
                  <td className="font-display font-bold text-ink">{c.conversions}</td>
                  <td className="mono text-xs text-mut">{c.costPerConv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ad Creatives */}
      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Ad Creative Performance</h3>
            <p className="text-xs text-dim mt-0.5">AI-scored creative effectiveness</p>
          </div>
          <span className="chip">
            <span className="dt dt-ai">AI</span>
            Scored
          </span>
        </div>
        <div className="panel-bd space-y-2">
          {adCreatives.map((ad, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-panel2/50 border border-line/50 hover:border-line2 transition-colors">
              <div className="flex-1">
                <p className="text-xs font-medium text-ink">{ad.title}</p>
                <span className="chip !text-[9px] mt-1">{ad.type}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold uppercase ${
                  ad.performance === "high" ? "text-grn" : ad.performance === "medium" ? "text-amb" : "text-ros"
                }`}>
                  {ad.performance}
                </span>
                <div className="w-20 h-1.5 rounded-full bg-panel2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      ad.score >= 80 ? "bg-grn" : ad.score >= 60 ? "bg-amb" : "bg-ros"
                    }`}
                    style={{ width: `${ad.score}%` }}
                  />
                </div>
                <span className="font-mono text-xs font-bold text-ink w-8 text-right">{ad.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
