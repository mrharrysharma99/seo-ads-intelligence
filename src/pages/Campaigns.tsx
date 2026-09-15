import { useState, useEffect } from "react";
import { useAudit } from "../context/AuditContext";

interface CampaignsProps {
  onExport: () => void;
  onNewCampaign: () => void;
  onCreativeIdeas: () => void;
  onCampaignIdeas: () => void;
}

export default function Campaigns({ onExport, onNewCampaign, onCreativeIdeas, onCampaignIdeas }: CampaignsProps) {
  const { websiteType, targetUrl } = useAudit();
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "keywords" | "demographics" | "audience" | "settings">("overview");
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    const generateCampaigns = () => {
      const urlHash = targetUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const baseMultiplier = 0.7 + (urlHash % 60) / 100;

      const campaignData: Record<string, any[]> = {
        'real-estate': [
          { name: "Bangalore 2BHK Push", competitor: "MagicBricks", platform: "Google Ads", status: "active", spend: `₹${Math.floor(82400 * baseMultiplier).toLocaleString()}`, impressions: "145K", clicks: "8.2K", ctr: "5.7%", conversions: Math.floor(342 * baseMultiplier), costPerConv: "₹241" },
          { name: "PG Listings - Hyderabad", competitor: "NoBroker", platform: "Meta Ads", status: "active", spend: `₹${Math.floor(45200 * baseMultiplier).toLocaleString()}`, impressions: "98K", clicks: "4.1K", ctr: "4.2%", conversions: Math.floor(187 * baseMultiplier), costPerConv: "₹242" },
          { name: "No Brokerage Campaign", competitor: "Housing.com", platform: "Google Ads", status: "active", spend: `₹${Math.floor(63800 * baseMultiplier).toLocaleString()}`, impressions: "112K", clicks: "6.8K", ctr: "6.1%", conversions: Math.floor(298 * baseMultiplier), costPerConv: "₹214" },
        ],
        'technology': [
          { name: "Enterprise Solutions", competitor: "TCS", platform: "Google Ads", status: "active", spend: `₹${Math.floor(95000 * baseMultiplier).toLocaleString()}`, impressions: "125K", clicks: "6.5K", ctr: "5.2%", conversions: Math.floor(285 * baseMultiplier), costPerConv: "₹333" },
          { name: "Digital Transformation", competitor: "Infosys", platform: "LinkedIn Ads", status: "active", spend: `₹${Math.floor(78000 * baseMultiplier).toLocaleString()}`, impressions: "98K", clicks: "4.8K", ctr: "4.9%", conversions: Math.floor(198 * baseMultiplier), costPerConv: "₹394" },
        ],
        'ecommerce': [
          { name: "Big Sale Campaign", competitor: "Flipkart", platform: "Google Ads", status: "active", spend: `₹${Math.floor(125000 * baseMultiplier).toLocaleString()}`, impressions: "285K", clicks: "18.5K", ctr: "6.5%", conversions: Math.floor(520 * baseMultiplier), costPerConv: "₹240" },
          { name: "Prime Delivery", competitor: "Amazon", platform: "Meta Ads", status: "active", spend: `₹${Math.floor(98000 * baseMultiplier).toLocaleString()}`, impressions: "195K", clicks: "12.8K", ctr: "6.6%", conversions: Math.floor(445 * baseMultiplier), costPerConv: "₹220" },
        ],
        'food': [
          { name: "Quick Delivery", competitor: "Zomato", platform: "Meta Ads", status: "active", spend: `₹${Math.floor(68000 * baseMultiplier).toLocaleString()}`, impressions: "165K", clicks: "11.2K", ctr: "6.8%", conversions: Math.floor(385 * baseMultiplier), costPerConv: "₹177" },
          { name: "Instamart Push", competitor: "Swiggy", platform: "Google Ads", status: "active", spend: `₹${Math.floor(58000 * baseMultiplier).toLocaleString()}`, impressions: "142K", clicks: "9.5K", ctr: "6.7%", conversions: Math.floor(325 * baseMultiplier), costPerConv: "₹178" },
        ],
        'general': [
          { name: "Brand Awareness", competitor: "Competitor A", platform: "Google Ads", status: "active", spend: `₹${Math.floor(72000 * baseMultiplier).toLocaleString()}`, impressions: "125K", clicks: "7.5K", ctr: "6.0%", conversions: Math.floor(265 * baseMultiplier), costPerConv: "₹272" },
          { name: "Lead Generation", competitor: "Competitor B", platform: "LinkedIn Ads", status: "active", spend: `₹${Math.floor(58000 * baseMultiplier).toLocaleString()}`, impressions: "98K", clicks: "5.2K", ctr: "5.3%", conversions: Math.floor(198 * baseMultiplier), costPerConv: "₹293" },
        ],
      };

      return campaignData[websiteType] || campaignData['general'];
    };

    setCampaigns(generateCampaigns());
  }, [websiteType, targetUrl]);

  return (
    <div className="space-y-6 reveal-stagger">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Ad Campaigns</h1>
          <p className="text-sm text-mut mt-1">Performance tracking, creative intelligence & AI-powered ideas</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={onExport} className="btn btn-ghost !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Export Report
          </button>
          <button onClick={onCreativeIdeas} className="btn btn-amber !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l2 4 4.5.7-3.3 3.1.8 4.5L8 11.2 3.9 13.3l.8-4.5L1.5 5.7 6 5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
            </svg>
            Creative Ideas
          </button>
          <button onClick={onCampaignIdeas} className="btn btn-soft !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Campaign Ideas
          </button>
          <button onClick={onNewCampaign} className="btn btn-prime !text-xs">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            New Campaign
          </button>
        </div>
      </div>

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

      <div className="panel">
        <div className="panel-hd">
          <div>
            <h3 className="text-sm font-semibold text-ink">Active Campaigns</h3>
            <p className="text-xs text-dim mt-0.5">Click any campaign to view keywords, demographics & full details</p>
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
                <th>Competitor</th>
                <th>Platform</th>
                <th>Status</th>
                <th>Spend</th>
                <th>CTR</th>
                <th>Conversions</th>
                <th>CPA</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c, i) => (
                <tr key={i} onClick={() => setSelectedCampaign(c)} className="cursor-pointer hover:bg-grn/[0.03]!">
                  <td className="font-medium text-ink text-xs">{c.name}</td>
                  <td>
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-sky/10 border border-sky/20 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-sky">
                          <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                          <path d="M3.5 14c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
                        </svg>
                      </div>
                      <span className="text-[11px] text-sky font-medium">{c.competitor}</span>
                    </div>
                  </td>
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
                  <td className="mono text-xs text-mut">{c.ctr}</td>
                  <td className="font-display font-bold text-ink">{c.conversions}</td>
                  <td className="mono text-xs text-mut">{c.costPerConv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedCampaign && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setSelectedCampaign(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
          <div className="relative w-full max-w-3xl bg-bg1 border-l border-line overflow-y-auto anim-in" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-bg1/95 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="font-display text-lg font-bold text-ink">{selectedCampaign.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="chip !text-[9px]">{selectedCampaign.platform}</span>
                  <span className="text-[10px] text-sky font-medium">by {selectedCampaign.competitor}</span>
                </div>
              </div>
              <button onClick={() => setSelectedCampaign(null)} className="p-2 rounded-lg hover:bg-panel3 transition-colors text-dim hover:text-ink">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="px-6 py-4 border-b border-line">
              <div className="flex gap-2 overflow-x-auto">
                {["overview", "keywords", "demographics", "audience", "settings"].map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab as any)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize whitespace-nowrap transition-colors ${activeTab === tab ? "bg-grn/10 text-grn border border-grn/30" : "text-mut hover:text-ink hover:bg-panel2"}`}>{tab}</button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {activeTab === "overview" && (
                <div className="space-y-5 anim-in">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-sky/5 border border-sky/20">
                    <div className="w-9 h-9 rounded-lg bg-sky/15 border border-sky/30 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-sky">
                        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" fill="none"/>
                        <path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] text-dim uppercase tracking-wider font-semibold">Running by Competitor</span>
                      <p className="text-sm font-semibold text-sky">{selectedCampaign.competitor}</p>
                    </div>
                    <span className="chip !text-[9px]">{selectedCampaign.platform}</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Spend</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCampaign.spend}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Impressions</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCampaign.impressions}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">CTR</span>
                      <p className="font-display text-lg font-bold text-grn mt-0.5">{selectedCampaign.ctr}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-panel2/50 border border-line/50">
                      <span className="text-[9px] text-dim uppercase tracking-wider font-semibold">Conversions</span>
                      <p className="font-display text-lg font-bold text-ink mt-0.5">{selectedCampaign.conversions}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "keywords" && (
                <div className="space-y-4 anim-in">
                  <div className="p-4 rounded-lg bg-panel2/30 border border-line/30">
                    <p className="text-xs text-mut">Keyword data for {selectedCampaign.name}</p>
                  </div>
                </div>
              )}

              {activeTab === "demographics" && (
                <div className="space-y-4 anim-in">
                  <div className="p-4 rounded-lg bg-panel2/30 border border-line/30">
                    <p className="text-xs text-mut">Demographics data for {selectedCampaign.name}</p>
                  </div>
                </div>
              )}

              {activeTab === "audience" && (
                <div className="space-y-4 anim-in">
                  <div className="p-4 rounded-lg bg-panel2/30 border border-line/30">
                    <p className="text-xs text-mut">Audience data for {selectedCampaign.name}</p>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-4 anim-in">
                  <div className="p-4 rounded-lg bg-panel2/30 border border-line/30">
                    <p className="text-xs text-mut">Settings for {selectedCampaign.name}</p>
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
