import { useState, useEffect } from "react";
import { useAudit } from "../context/AuditContext";

interface Competitor {
  name: string;
  domain: string;
  dr: number;
  keywords: number;
  traffic: string;
  trend: "up" | "down" | "stable";
  overlap: number;
  activeCampaigns: number;
  estMonthlySpend: string;
  topCreatives: { title: string; type: string; score: number }[];
  topKeywords: { kw: string; pos: number; vol: string; trend: "up" | "down" | "stable" }[];
  demographics: {
    age: { range: string; pct: number }[];
    gender: { male: number; female: number };
    devices: { mobile: number; desktop: number; tablet: number };
    locations: { city: string; pct: number }[];
  };
  audienceSegments: { name: string; reach: string; engagement: "Very High" | "High" | "Medium" }[];
  adSpendTrend: { month: string; spend: number }[];
}

export default function Competitors() {
  const { websiteType, targetUrl } = useAudit();
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "campaigns" | "keywords" | "creatives" | "demographics" | "audience">("overview");
  const [competitors, setCompetitors] = useState<Competitor[]>([]);

  useEffect(() => {
    const generateCompetitors = (): Competitor[] => {
      const urlHash = targetUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const baseMultiplier = 0.7 + (urlHash % 60) / 100;

      const competitorData: Record<string, Competitor[]> = {
        'real-estate': [
          {
            name: "NoBroker",
            domain: "nobroker.in",
            dr: Math.floor(72 * baseMultiplier),
            keywords: Math.floor(12450 * baseMultiplier),
            traffic: `${(2.1 * baseMultiplier).toFixed(1)}M`,
            trend: "up",
            overlap: 34,
            activeCampaigns: 18,
            estMonthlySpend: "₹12.5L",
            topCreatives: [
              { title: "Zero Brokerage Flats", type: "Search", score: 91 },
              { title: "Direct Owner Connect", type: "Search", score: 88 },
            ],
            topKeywords: [
              { kw: "flats without brokerage", pos: 1, vol: "45K", trend: "up" },
              { kw: "pg accommodation", pos: 1, vol: "33K", trend: "up" },
            ],
            demographics: {
              age: [{ range: "25-34", pct: 42 }, { range: "35-44", pct: 18 }],
              gender: { male: 62, female: 38 },
              devices: { mobile: 84, desktop: 14, tablet: 2 },
              locations: [{ city: "Bangalore", pct: 38 }, { city: "Hyderabad", pct: 22 }],
            },
            audienceSegments: [
              { name: "Young Professionals", reach: "850K", engagement: "Very High" },
            ],
            adSpendTrend: [
              { month: "Jan", spend: 8.2 },
              { month: "Feb", spend: 9.1 },
              { month: "Mar", spend: 10.5 },
            ],
          },
          {
            name: "MagicBricks",
            domain: "magicbricks.com",
            dr: Math.floor(81 * baseMultiplier),
            keywords: Math.floor(24300 * baseMultiplier),
            traffic: `${(5.2 * baseMultiplier).toFixed(1)}M`,
            trend: "stable",
            overlap: 41,
            activeCampaigns: 32,
            estMonthlySpend: "₹24.8L",
            topCreatives: [
              { title: "India's #1 Property Site", type: "Display", score: 94 },
            ],
            topKeywords: [
              { kw: "property for sale", pos: 1, vol: "135K", trend: "stable" },
              { kw: "flats for rent", pos: 1, vol: "98K", trend: "up" },
            ],
            demographics: {
              age: [{ range: "35-44", pct: 36 }, { range: "25-34", pct: 34 }],
              gender: { male: 65, female: 35 },
              devices: { mobile: 72, desktop: 26, tablet: 2 },
              locations: [{ city: "Mumbai", pct: 28 }, { city: "Delhi NCR", pct: 22 }],
            },
            audienceSegments: [
              { name: "Home Buyers", reach: "1.8M", engagement: "Very High" },
            ],
            adSpendTrend: [
              { month: "Jan", spend: 22.5 },
              { month: "Feb", spend: 23.1 },
              { month: "Mar", spend: 24.2 },
            ],
          },
        ],
        'technology': [
          {
            name: "TCS",
            domain: "tcs.com",
            dr: Math.floor(85 * baseMultiplier),
            keywords: Math.floor(18500 * baseMultiplier),
            traffic: `${(4.8 * baseMultiplier).toFixed(1)}M`,
            trend: "up",
            overlap: 28,
            activeCampaigns: 22,
            estMonthlySpend: "₹18.5L",
            topCreatives: [
              { title: "Digital Transformation", type: "Display", score: 92 },
            ],
            topKeywords: [
              { kw: "IT services", pos: 1, vol: "95K", trend: "up" },
            ],
            demographics: {
              age: [{ range: "35-44", pct: 42 }, { range: "25-34", pct: 38 }],
              gender: { male: 72, female: 28 },
              devices: { mobile: 45, desktop: 52, tablet: 3 },
              locations: [{ city: "USA", pct: 35 }, { city: "India", pct: 28 }],
            },
            audienceSegments: [
              { name: "CTO/CIO", reach: "450K", engagement: "Very High" },
            ],
            adSpendTrend: [
              { month: "Jan", spend: 15.2 },
              { month: "Feb", spend: 16.8 },
              { month: "Mar", spend: 17.5 },
            ],
          },
        ],
        'ecommerce': [
          {
            name: "Flipkart",
            domain: "flipkart.com",
            dr: Math.floor(88 * baseMultiplier),
            keywords: Math.floor(45000 * baseMultiplier),
            traffic: `${(12.5 * baseMultiplier).toFixed(1)}M`,
            trend: "up",
            overlap: 25,
            activeCampaigns: 45,
            estMonthlySpend: "₹85L",
            topCreatives: [
              { title: "Big Billion Days", type: "Display", score: 95 },
            ],
            topKeywords: [
              { kw: "online shopping", pos: 1, vol: "285K", trend: "up" },
            ],
            demographics: {
              age: [{ range: "25-34", pct: 45 }, { range: "18-24", pct: 32 }],
              gender: { male: 58, female: 42 },
              devices: { mobile: 82, desktop: 16, tablet: 2 },
              locations: [{ city: "Tier 1", pct: 45 }, { city: "Tier 2", pct: 35 }],
            },
            audienceSegments: [
              { name: "Young Shoppers", reach: "8.5M", engagement: "Very High" },
            ],
            adSpendTrend: [
              { month: "Jan", spend: 65 },
              { month: "Feb", spend: 72 },
              { month: "Mar", spend: 78 },
            ],
          },
        ],
        'food': [
          {
            name: "Zomato",
            domain: "zomato.com",
            dr: Math.floor(78 * baseMultiplier),
            keywords: Math.floor(28000 * baseMultiplier),
            traffic: `${(8.5 * baseMultiplier).toFixed(1)}M`,
            trend: "up",
            overlap: 42,
            activeCampaigns: 38,
            estMonthlySpend: "₹45L",
            topCreatives: [
              { title: "Delivery in 30 mins", type: "Display", score: 93 },
            ],
            topKeywords: [
              { kw: "food delivery", pos: 1, vol: "185K", trend: "up" },
            ],
            demographics: {
              age: [{ range: "25-34", pct: 42 }, { range: "18-24", pct: 38 }],
              gender: { male: 52, female: 48 },
              devices: { mobile: 92, desktop: 7, tablet: 1 },
              locations: [{ city: "Metro", pct: 58 }, { city: "Tier 2", pct: 32 }],
            },
            audienceSegments: [
              { name: "Young Professionals", reach: "6.8M", engagement: "Very High" },
            ],
            adSpendTrend: [
              { month: "Jan", spend: 35 },
              { month: "Feb", spend: 38 },
              { month: "Mar", spend: 42 },
            ],
          },
        ],
        'general': [
          {
            name: "Competitor A",
            domain: "competitor-a.com",
            dr: Math.floor(68 * baseMultiplier),
            keywords: Math.floor(12500 * baseMultiplier),
            traffic: `${(3.2 * baseMultiplier).toFixed(1)}M`,
            trend: "stable",
            overlap: 35,
            activeCampaigns: 24,
            estMonthlySpend: "₹18L",
            topCreatives: [
              { title: "Best Services", type: "Display", score: 85 },
            ],
            topKeywords: [
              { kw: "best services", pos: 3, vol: "85K", trend: "stable" },
            ],
            demographics: {
              age: [{ range: "35-44", pct: 42 }, { range: "25-34", pct: 38 }],
              gender: { male: 60, female: 40 },
              devices: { mobile: 65, desktop: 32, tablet: 3 },
              locations: [{ city: "Major Cities", pct: 55 }],
            },
            audienceSegments: [
              { name: "Professionals", reach: "1.2M", engagement: "High" },
            ],
            adSpendTrend: [
              { month: "Jan", spend: 15 },
              { month: "Feb", spend: 16 },
              { month: "Mar", spend: 17 },
            ],
          },
        ],
      };

      return competitorData[websiteType] || competitorData['general'];
    };

    setCompetitors(generateCompetitors());
  }, [websiteType, targetUrl]);

  const sharedKeywords = [
    { kw: "2bhk flat for rent", ourPos: 3, compPos: 2, comp: "MagicBricks" },
    { kw: "pg accommodation near me", ourPos: 5, compPos: 1, comp: "NoBroker" },
    { kw: "flat without brokerage", ourPos: 4, compPos: 3, comp: "Housing.com" },
  ];

  return (
    <div className="space-y-6 reveal-stagger">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Competitor Intelligence</h1>
          <p className="text-sm text-mut mt-1">Track and benchmark against key competitors</p>
        </div>
        <button className="btn btn-prime !text-xs">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Add Competitor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {competitors.map((comp, idx) => (
          <div key={idx} className="panel p-4 hover:border-grn/40 transition-all cursor-pointer group" onClick={() => setSelectedCompetitor(comp)}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-ink group-hover:text-grn transition-colors">{comp.name}</h3>
                <span className="url-tag !text-[10px]">{comp.domain}</span>
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold ${
                comp.trend === "up" ? "text-grn" : comp.trend === "down" ? "text-ros" : "text-amb"
              }`}>
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                  {comp.trend === "up" ? (
                    <path d="M2 12l6-8 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  ) : comp.trend === "down" ? (
                    <path d="M2 4l6 8 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  ) : (
                    <path d="M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  )}
                </svg>
                {comp.trend}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div>
                <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">DR</span>
                <p className="font-display text-lg font-bold text-ink">{comp.dr}</p>
              </div>
              <div>
                <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Keywords</span>
                <p className="font-display text-lg font-bold text-ink">{(comp.keywords / 1000).toFixed(1)}K</p>
              </div>
              <div>
                <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Traffic</span>
                <p className="font-display text-lg font-bold text-ink">{comp.traffic}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] text-dim font-semibold">Keyword Overlap</span>
              <div className="flex-1 h-1.5 rounded-full bg-panel2 overflow-hidden">
                <div className="h-full rounded-full bg-sky" style={{ width: `${comp.overlap}%` }}/>
              </div>
              <span className="text-xs font-mono font-bold text-sky">{comp.overlap}%</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-line/50">
              <span className="text-[10px] text-dim">{comp.activeCampaigns} active campaigns</span>
              <span className="text-[10px] text-grn font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Keyword Overlap Analysis</h3>
            <p className="text-xs text-dim mt-0.5">Keywords where we compete directly</p>
          </div>
          <span className="chip chip-on">
            <span className="dt dt-ai">AI</span>
            Auto-detected
          </span>
        </div>
        <div className="panel-bd">
          <table className="tbl">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Our Position</th>
                <th>Competitor Position</th>
                <th>Competitor</th>
                <th>Gap</th>
              </tr>
            </thead>
            <tbody>
              {sharedKeywords.map((kw, i) => (
                <tr key={i}>
                  <td className="font-medium text-ink">{kw.kw}</td>
                  <td><span className="font-display font-bold text-grn">{kw.ourPos}</span></td>
                  <td><span className="font-display font-bold text-ros">{kw.compPos}</span></td>
                  <td><span className="chip">{kw.comp}</span></td>
                  <td>
                    <span className={`text-xs font-semibold ${kw.ourPos < kw.compPos ? "text-grn" : "text-ros"}`}>
                      {kw.ourPos < kw.compPos ? `+${kw.compPos - kw.ourPos} ahead` : `${kw.ourPos - kw.compPos} behind`}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedCompetitor && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setSelectedCompetitor(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
          <div className="relative w-full max-w-3xl bg-bg1 border-l border-line overflow-y-auto anim-in" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-bg1/95 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="font-display text-lg font-bold text-ink">{selectedCompetitor.name}</h2>
                <span className="url-tag !text-[10px]">{selectedCompetitor.domain}</span>
              </div>
              <button onClick={() => setSelectedCompetitor(null)} className="p-2 rounded-lg hover:bg-panel3 transition-colors text-dim hover:text-ink">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="px-6 py-4 border-b border-line">
              <div className="flex gap-2 overflow-x-auto">
                {["overview", "campaigns", "keywords", "creatives", "demographics", "audience"].map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab as any)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize whitespace-nowrap transition-colors ${activeTab === tab ? "bg-grn/10 text-grn border border-grn/30" : "text-mut hover:text-ink hover:bg-panel2"}`}>{tab}</button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {activeTab === "overview" && (
                <div className="space-y-5 anim-in">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Domain Rating</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCompetitor.dr}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Active Campaigns</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCompetitor.activeCampaigns}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Est. Monthly Spend</span>
                      <p className="font-display text-lg font-bold text-grn mt-0.5">{selectedCompetitor.estMonthlySpend}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Keyword Overlap</span>
                      <p className="font-display text-lg font-bold text-sky mt-0.5">{selectedCompetitor.overlap}%</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "keywords" && (
                <div className="space-y-4 anim-in">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-ink uppercase tracking-wider">Top Keywords ({selectedCompetitor.topKeywords.length})</h4>
                    <span className="chip !text-[9px]">{selectedCompetitor.keywords.toLocaleString()} total</span>
                  </div>
                  <table className="tbl">
                    <thead>
                      <tr>
                        <th>Keyword</th>
                        <th>Position</th>
                        <th>Volume</th>
                        <th>Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCompetitor.topKeywords.map((kw, i) => (
                        <tr key={i}>
                          <td className="text-xs font-medium text-ink">{kw.kw}</td>
                          <td><span className="font-display font-bold text-ink">{kw.pos}</span></td>
                          <td className="mono text-xs text-mut">{kw.vol}</td>
                          <td><span className={`text-[10px] font-bold uppercase ${kw.trend === "up" ? "text-grn" : kw.trend === "down" ? "text-ros" : "text-amb"}`}>{kw.trend}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "demographics" && (
                <div className="space-y-4 anim-in">
                  <div className="panel p-4">
                    <h4 className="text-xs font-semibold text-ink mb-3">Age Distribution</h4>
                    <div className="space-y-2">
                      {selectedCompetitor.demographics.age.map((age, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-16 text-xs text-mut">{age.range}</div>
                          <div className="flex-1 h-2 rounded-full bg-panel2 overflow-hidden">
                            <div className="h-full rounded-full bg-grn" style={{ width: `${age.pct}%` }}/>
                          </div>
                          <span className="text-xs font-mono font-bold text-ink w-10 text-right">{age.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "audience" && (
                <div className="space-y-4 anim-in">
                  <h4 className="text-xs font-semibold text-ink uppercase tracking-wider">Target Audience Segments</h4>
                  <div className="space-y-3">
                    {selectedCompetitor.audienceSegments.map((seg, i) => (
                      <div key={i} className="p-4 rounded-lg bg-panel2/50 border border-line/50">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="text-xs font-semibold text-ink">{seg.name}</h5>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            seg.engagement === "Very High" ? "bg-grn/10 text-grn border border-grn/30" :
                            seg.engagement === "High" ? "bg-sky/10 text-sky border border-sky/30" :
                            "bg-amb/10 text-amb border border-amb/30"
                          }`}>
                            {seg.engagement}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-dim">Estimated Reach:</span>
                          <span className="text-xs font-mono font-bold text-ink">{seg.reach}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(activeTab === "campaigns" || activeTab === "creatives") && (
                <div className="space-y-4 anim-in">
                  <div className="p-4 rounded-lg bg-panel2/30 border border-line/30">
                    <p className="text-xs text-mut">{activeTab === "campaigns" ? "Campaign" : "Creative"} data for {selectedCompetitor.name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
